---
title: "Herausforderung: Blödsinnige Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie aufgefordert, einige der Kenntnisse, die Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine lustige App zu erstellen, die zufällige blödsinnige Geschichten generiert. Viel Spaß dabei!

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- [Holen Sie sich die HTML-Datei](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel, speichern Sie eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis irgendwo auf Ihrem Computer und beginnen Sie mit der Herausforderung lokal. Diese enthält auch das CSS, um das Beispiel zu gestalten.
- Gehen Sie auf die [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und halten Sie diese in einem separaten Browser-Tab geöffnet. Sie werden sie später benötigen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es auch in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Es wurde Ihnen etwas Roh-HTML/CSS sowie einige Textzeichenfolgen und JavaScript-Funktionen bereitgestellt; Sie müssen das notwendige JavaScript schreiben, um daraus ein funktionierendes Programm zu machen, das Folgendes tut:

- Erzeugt eine blödsinnige Geschichte, wenn die Schaltfläche "Zufällige Geschichte generieren" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Benutzerdefinierten Namen eingeben" eingegeben wurde, bevor die Generierschaltfläche gedrückt wird.
- Konvertiert die Standard-US-Gewichts- und Temperatureinheiten in der Geschichte in UK-Äquivalente, wenn das UK-Radio-Button vor dem Drücken der Generierschaltfläche ausgewählt ist.
- Erzeugt jedes Mal eine neue zufällige blödsinnige Geschichte, wenn die Schaltfläche gedrückt wird.

Der folgende Screenshot zeigt ein Beispiel dafür, was das fertige Programm ausgeben sollte:

![Die blödsinnige Geschichtengenerator-App besteht aus einem Textfeld, zwei Optionsfeldern und einem Button, um eine zufällige Geschichte zu generieren.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen eine bessere Vorstellung zu geben, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (nicht den Quellcode ansehen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im gleichen Verzeichnis wie Ihre `index.html`-Datei.
2. Fügen Sie die externe JavaScript-Datei in Ihr HTML ein, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Initiale Variablen und Funktionen:

1. Kopieren Sie im Rohtextdokument den gesamten Code unter der Überschrift "1. VARIABLE UND FUNKTIONSDEFINITIONEN ABSCHLIESSEN" und fügen Sie ihn oben in das `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Referenzen auf das Textfeld "Benutzerdefinierten Namen eingeben" (`customName`), die Schaltfläche "Zufällige Geschichte generieren" (`randomize`) und das {{htmlelement("p")}}-Element am Ende des HTML-Körpers, in das die Geschichte eingebaut wird (`story`), enthalten. Zusätzlich haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und ein zufällig ausgewähltes Element daraus zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt des Rohtextdokuments an — "2. ROHE TEXTSTRINGEN". Diese enthalten Textzeichenfolgen, die als Input in unser Programm dienen. Wir möchten, dass Sie diese in Variablen innerhalb `main.js` speichern:

   1. Speichern Sie die erste, lange Zeichenfolge innerhalb einer Variable namens `storyText`.
   2. Speichern Sie das erste Set von drei Zeichenfolgen in einem Array namens `insertX`.
   3. Speichern Sie das zweite Set von drei Zeichenfolgen in einem Array namens `insertY`.
   4. Speichern Sie das dritte Set von drei Zeichenfolgen in einem Array namens `insertZ`.

Einfügen des Ereignis-Handlers und der unvollständigen Funktion:

1. Gehen Sie nun zurück in das Rohtextdokument.
2. Kopieren Sie den Code, der sich unter der Überschrift "3. EREIGNIS-LISTENER UND TEILWEISE FUNKTIONSDEFINITION" befindet, und fügen Sie ihn an das Ende Ihrer `main.js`-Datei ein. Dieses:

   - Fügt einen Klick-Ereignis-Listener zur `randomize`-Variable hinzu, sodass bei einem Klick auf die von der Variable repräsentierte Schaltfläche die Funktion `result()` ausgeführt wird.
   - Fügt Ihrer Datei eine teilweise vollständige Definition für die `result()`-Funktion hinzu. Für den Rest der Herausforderung füllen Sie die Zeilen innerhalb dieser Funktion aus, um sie zu vervollständigen und richtig funktionieren zu lassen.

Abschluss der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory`, und setzen Sie deren Wert gleich `storyText`. Dies ist notwendig, damit wir jedes Mal, wenn die Schaltfläche gedrückt wird und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen können. Wenn wir Änderungen direkt an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem`, und setzen Sie sie gleich dem Ergebnis eines Aufrufs der Funktion `randomValueFromArray()` auf Ihre drei Arrays (das Ergebnis in jedem Fall wird ein zufällig ausgewähltes Element aus jedem der Arrays sein, auf das die Funktion angewendet wird). Zum Beispiel können Sie die Funktion aufrufen und eine zufällige Zeichenkette aus `insertX` zurückerhalten, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als Nächstes möchten wir die drei Platzhalter in der `newStory`-Zeichenfolge — `:insertx:`, `:inserty:` und `:insertz:` — durch die Zeichenketten, die in `xItem`, `yItem` und `zItem` gespeichert sind, ersetzen. Es gibt zwei mögliche String-Methoden, die Ihnen hier helfen können — in jedem Fall sollten Sie den Methodena Aufruf `newStory` gleichsetzen, sodass jedes Mal, wenn er aufgerufen wird, `newStory` sich selbst entspricht, aber mit den vorgenommenen Ersetzungen. So wird bei jedem Drücken der Schaltfläche jeder dieser Platzhalter durch eine zufällige blödsinnige Zeichenkette ersetzt. Als weiteren Hinweis: Je nach gewählter Methode müssen Sie möglicherweise einen der Aufrufe zweimal durchführen.
4. Fügen Sie innerhalb des ersten `if`-Blocks einen weiteren Aufruf einer String-Ersetzungsmethode hinzu, um den Namen 'Bob' in der `newStory`-Zeichenfolge durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das Textfeld `customName` eingegeben wurde, ersetze Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Im zweiten `if`-Block überprüfen wir, ob der `uk`-Radio-Button ausgewählt wurde. Wenn ja, möchten wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umrechnen. Sie müssen Folgendes tun:

   1. Recherchieren Sie die Formeln zur Umwandlung von Pfund in Steine und Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umwandelt. Fügen Sie `' stone'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Fügen Sie `' centigrade'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere Zeilen für String-Ersetzungen hinzu, die '94 fahrenheit' durch den Inhalt der `temperature`-Variable und '300 pounds' durch den Inhalt der `weight`-Variable ersetzen.

6. Setzen Sie schließlich in der vorletzten Zeile der Funktion die `textContent`-Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie sich nicht sicher sind, ob das JavaScript korrekt auf Ihr HTML angewendet wurde, versuchen Sie vorübergehend alles andere aus der JavaScript-Datei zu entfernen und fügen Sie dann ein einfaches JavaScript hinzu, von dem Sie wissen, dass es einen offensichtlichen Effekt erzeugt, dann speichern und aktualisieren Sie. Das folgende Beispiel färbt den Hintergrund des {{htmlelement("html")}}-Elements rot - das gesamte Browserfenster sollte rot werden, wenn das JavaScript korrekt angewendet wurde:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine integrierte JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenketten, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrmals wiederholen oder `replaceAll()` verwenden. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
