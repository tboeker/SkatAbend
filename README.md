Dies ist ein kleines Hilfsprogramm zum aufschreiben der Punkte am Skat Abend. Kopfrechnen und ordentliches Aufschreiben auf einem Zettel fällt insbesondere nach ein paar Bier nicht unbedingt leichter.

Deshalb schreiben wir ein Programm mit dem die Punkte einfach notiert werden.

Die Software startet mit wenig Funktionen und wird nach und nach erweitert. 

## Begriffe

- Runde: eine Runde von Menschen, die sich zum Skat spielen treffen
- Spieler: Teilnehmer einer Runde, spielt Skat und trinkt 2 Bier dabei
- Spiel: in einer Runde werden viele Spiele gespielt. Jedes Spiel wird zur späteren Auswertung und Abrechnung erfasst
- Verlauf: Verlauf der Spiele in einer Runde. Geht von Spiel 1 bis X
- Gesamtpunktzahl: Wir notieren die "verlorenen" Punkte. Pro Spieler werden alle Punkte kumuliert.

## Modus

Jeder Spieler erhält Punkte auf sein Punkte-Konto wenn ein Spiel verloren ist. Pro Spiel erhält also entweder ein Spieler Punkte (wenn er sein Solo Spiel verliert, oder der Verlierer im Ramsch). Oder die anderen Spieler erhalten Punkte (wenn er sein Solo spiel gewinnt oder Durchmarsch im Ramsch). 
Pro Spiel Eingabe muss also der Spieler erfasst werden, ob er gewonnen oder verloren hat und wie viele Punkte aufgeschrieben werden sollen. Nach jedem Spiel wird die Gesamtpunktahl pro Spieler entsprechend verändert. 
Wir die Runde beendet, muss ein Spieler die Differenzen zu allen "besseren" Spielern in die Kasse einzahlen.

## Funktionen Version 1

- Anlegen einer neuen Runde mit Anzahl der Spieler
- Eingabe neues Spiel mit den Werten: Spieler-Nummer, Gewonnen/Verloren, Punkte
- Anzeige des Verlaufs aller Spiele
- Anzeige der Geamtpunktzahl pro Spieler

## Funktionen für die Zukunft

Im folgenden werden beispielhaft einige Funktionen aufgelistet, die zukünftig implementiert werden können.

- Erfassen der Spielernamen
- Löschen eines Spiels aus der Historie, z.B. wenn man sich mal vertippt hat
- Auswahl von Ergebnissen laut den Skat-Regeln
- Erfassen von Zusatzinfos zum Spiel ( z.B. Bock, Ramsch)
- Anzeige des Gebers (Achtung: bei Grand Hand im Ramsch wird wiederholt)
- Berechnung der Punktdifferenzen zum nächsten Gewinner und Gesamt-Abrechnung
