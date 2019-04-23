#Kopieren der Dateien aus dist in das app repo

# builden mit base href
ng build --prod --base-href "https://tboeker.github.io/skatrunde-app/"
# vorhandene dateien aus app repo löschen
Remove-Item -Path ..\skatrunde-app\* -Filter *.* -Force -Exclude .git
Get-ChildItem -Path ..\skatrunde-app -Exclude .git | ForEach-Object { Remove-Item -Path $_.FullName -Recurse }
# dist ordner kopieren
Copy-Item -Path .\dist\skatrunde\* -Filter *.* -Recurse -Force -Destination ..\skatrunde-app\
# git commit
Set-Location ..\skatrunde-app
git pull
git add .
git commit -m "updated version"
git push