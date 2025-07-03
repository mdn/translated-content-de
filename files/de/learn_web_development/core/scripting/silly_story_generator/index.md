---
title: "Herausforderung: Alberner Geschichtengenerator"
short-title: "Herausforderung: Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung sollen Sie einige der Kenntnisse nutzen, die Sie in den Artikeln dieses Moduls erworben haben, und sie anwenden, um eine unterhaltsame App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß!

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, sollten Sie:

- Die [HTML-Datei für das Beispiel](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) herunterladen, eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis auf Ihrem Computer speichern und die Herausforderung zunächst lokal angehen. Diese Datei enthält auch das CSS, um das Beispiel zu gestalten.
- Die [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) öffnen und in einem separaten Browser-Tab geöffnet halten. Diese werden Sie später benötigen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Wenn der von Ihnen genutzte Online-Editor kein separates JavaScript-Panel hat, können Sie ihn inline in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Ihnen wurden einige Roh-HTML/CSS und einige Textstrings sowie JavaScript-Funktionen bereitgestellt; Sie müssen das notwendige JavaScript schreiben, um daraus ein funktionierendes Programm zu machen, das Folgendes tut:

- Erzeugt eine alberne Geschichte, wenn die Schaltfläche "Generate random story" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Enter custom name" eingegeben wird, bevor die Generierschaltfläche gedrückt wird.
- Wandelt die Standardgewichts- und Temperaturangaben und -einheiten der USA in britische Äquivalente um, wenn die UK-Radiotaste ausgewählt wird, bevor die Generierschaltfläche gedrückt wird.
- Erzeugt jedes Mal, wenn die Schaltfläche gedrückt wird, eine neue zufällige alberne Geschichte.

Der folgende Screenshot zeigt ein Beispiel dafür, was das fertige Programm ausgeben sollte:

![The silly story generator app consists of a text field, two radio buttons, and a button to generate a random story.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen einen besseren Eindruck zu geben, [schauen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (nicht im Quellcode spicken!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was zu tun ist.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im gleichen Verzeichnis wie Ihre `index.html` Datei.
2. Fügen Sie die externe JavaScript-Datei in Ihr HTML ein, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Setzen Sie es direkt vor das schließende `</body>`-Tag.

Erste Variablen und Funktionen:

1. Kopieren Sie im Rohtext die gesamte Codezeile unter der Überschrift "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" und fügen Sie sie oben in die `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Referenzen zum Textfeld "Enter custom name" (`customName`), zur Schaltfläche "Generate random story" (`randomize`) und zum {{htmlelement("p")}}-Element unten im HTML-Body speichern, in das die Geschichte kopiert wird (`story`). Zudem haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array übernimmt und ein zufälliges Element aus dem Array zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt der Rohtextdatei an — "2. RAW TEXT STRINGS". Dieser enthält Textzeichenfolgen, die als Eingabe für unser Programm dienen. Wir möchten, dass Sie diese in Variablen innerhalb `main.js` speichern:
   1. Speichern Sie die erste lange Zeichenfolge in einer Variablen namens `storyText`.
   2. Speichern Sie den ersten Satz von drei Zeichenfolgen in einem Array namens `insertX`.
   3. Speichern Sie den zweiten Satz von drei Zeichenfolgen in einem Array namens `insertY`.
   4. Speichern Sie den dritten Satz von drei Zeichenfolgen in einem Array namens `insertZ`.

Platzieren des Ereignis-Handlers und unvollständigen Funktion:

1. Kehren Sie nun zur Rohtextdatei zurück.
2. Kopieren Sie den Code, der unter der Überschrift "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" zu finden ist, und fügen Sie ihn unten in Ihre `main.js`-Datei ein. Dies:
   - Fügt der `randomize`-Variable einen Klickereignis-Listener hinzu, sodass beim Klicken auf die repräsentierte Schaltfläche die `result()`-Funktion ausgeführt wird.
   - Fügt eine teilweise definierte `result()`-Funktion zu Ihrem Code hinzu. Für den Rest der Herausforderung füllen Sie Zeilen innerhalb dieser Funktion aus, um sie zu vervollständigen und ordnungsgemäß zum Laufen zu bringen.

Vervollständigen der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert auf `storyText`. Dies ist notwendig, damit wir jedes Mal, wenn die Schaltfläche gedrückt und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen können. Wenn wir Änderungen direkt an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und setzen Sie sie auf das Ergebnis, welches `randomValueFromArray()` bei Ihren drei Arrays zurückgibt (das Ergebnis ist jeweils ein zufälliges Element aus jedem Array, auf das es angewendet wird). Zum Beispiel können Sie die Funktion aufrufen und eine zufällige Zeichenfolge aus `insertX` durch Schreiben von `randomValueFromArray(insertX)` erhalten.
3. Als Nächstes möchten wir die drei Platzhalter in der `newStory`-Zeichenfolge — `:insertx:`, `:inserty:`, und `:insertz:` — durch die in `xItem`, `yItem`, und `zItem` gespeicherten Zeichenfolgen ersetzen. Es gibt zwei mögliche Methoden für Zeichenfolgen, die Ihnen hier helfen können — in jedem Fall machen Sie den Aufruf der Methode gleich `newStory`, sodass jedes Mal, wenn sie aufgerufen wird, `newStory` sich selbst gleich gemacht wird, jedoch mit vorgenommenen Ersetzungen. Jedes Mal, wenn die Schaltfläche gedrückt wird, werden diese Platzhalter jeweils durch eine zufällige alberne Zeichenfolge ersetzt. Als weiteren Hinweis: Je nach gewählter Methode müssen Sie einen der Aufrufe möglicherweise zweimal verwenden.
4. Innerhalb des ersten `if`-Blocks fügen Sie einen weiteren Ersetzungsaufruf hinzu, um den Namen 'Bob', der in der `newStory`-Zeichenfolge gefunden wird, durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn in das `customName`-Textfeld ein Wert eingegeben wurde, ersetzen Sie Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Im zweiten `if`-Block überprüfen wir, ob die `uk`-Radiotaste ausgewählt wurde. Wenn ja, möchten wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Stones und Celsius umwandeln. Was Sie tun müssen, ist Folgendes:
   1. Recherchieren Sie die Formeln zur Umrechnung von Pfund in Stones und Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Stones umwandelt. Fügen Sie `' stone'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Fügen Sie `' centigrade'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   4. Direkt unter den beiden Variablendefinitionen fügen Sie zwei weitere Ersetzungszeilen hinzu, die '94 fahrenheit' durch den Inhalt der `temperature`-Variablen und '300 pounds' durch den Inhalt der `weight`-Variablen ersetzen.

6. Schließlich machen Sie in der vorletzten Zeile der Funktion die `textContent`-Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie unsicher sind, ob das JavaScript ordnungsgemäß auf Ihr HTML angewendet wird, versuchen Sie vorübergehend, alles andere aus der JavaScript-Datei zu entfernen und ein einfaches JavaScript einzufügen, von dem Sie wissen, dass es einen offensichtlichen Effekt erzeugt. Das folgende Beispiel macht zum Beispiel den Hintergrund des {{htmlelement("html")}}-Elements rot — sodass das gesamte Browserfenster rot wird, wenn das JavaScript ordnungsgemäß angewendet wird:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenfolgen, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrmals wiederholen oder `replaceAll()` verwenden. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
