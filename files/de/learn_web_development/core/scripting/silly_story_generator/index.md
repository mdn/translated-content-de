---
title: "Herausforderung: Alberner Geschichtengenerator"
short-title: "Herausforderung: Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung sollen Sie einige der Kenntnisse anwenden, die Sie in den Artikeln dieses Moduls erworben haben, um eine lustige App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß dabei!

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- [Das HTML-Dokument hier herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html), eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis auf Ihrem Computer speichern und die Herausforderung zunächst lokal durchführen. Das CSS zur Gestaltung des Beispiels ist darin enthalten.
- Die [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) öffnen und in einem separaten Browsertab offen halten. Sie werden es später benötigen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Falls der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es inline in einem `<script>`-Element innerhalb der HTML-Seite platzieren.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurde etwas Roh-HTML/CSS sowie einige Textstrings und JavaScript-Funktionen bereitgestellt; Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine alberne Geschichte, wenn die Schaltfläche "Zufällige Geschichte generieren" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Benutzerdefinierten Namen eingeben" eingetragen wurde, bevor die Generieren-Schaltfläche gedrückt wird.
- Konvertiert die standardmäßigen US-Gewichts- und Temperaturangaben und -einheiten in der Geschichte in britische Äquivalente, wenn die UK-Radiotaste ausgewählt wird, bevor die Generieren-Schaltfläche gedrückt wird.
- Generiert jedes Mal, wenn die Schaltfläche gedrückt wird, eine neue zufällige alberne Geschichte.

Der folgende Screenshot zeigt ein Beispiel dafür, was das fertige Programm ausgeben sollte:

![Der alberne Geschichtengenerator besteht aus einem Textfeld, zwei Optionsfeldern und einer Schaltfläche, um eine zufällige Geschichte zu generieren.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen mehr Einblick zu geben, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (nicht den Quellcode ansehen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im selben Verzeichnis wie Ihre `index.html` Datei.
2. Wenden Sie die externe JavaScript-Datei auf Ihr HTML an, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es unmittelbar vor dem schließenden `</body>`-Tag.

Anfängliche Variablen und Funktionen:

1. Kopieren Sie im Rohtext-Dokument den gesamten Code unter der Überschrift "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" und fügen Sie ihn oben in die `main.js` Datei ein. Dies gibt Ihnen drei Variablen, die Referenzen auf das Textfeld "Benutzerdefinierten Namen eingeben" (`customName`), die Schaltfläche "Zufällige Geschichte generieren" (`randomize`) und das {{htmlelement("p")}}-Element am unteren Ende des HTML-Bodys, in das die Geschichte eingefügt wird (`story`), speichern. Zusätzlich haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und ein zufällig gespeichertes Element aus diesem Array zurückgibt.
2. Sehen Sie sich nun den zweiten Abschnitt des Rohtext-Dokuments an — "2. RAW TEXT STRINGS". Dieser enthält Textstrings, die als Eingabe in unser Programm dienen. Wir möchten, dass Sie diese innerhalb von Variablen in `main.js` speichern:
   1. Speichern Sie den ersten, langen Textstring in einer Variablen namens `storyText`.
   2. Speichern Sie das erste Set von drei Strings in einem Array namens `insertX`.
   3. Speichern Sie das zweite Set von drei Strings in einem Array namens `insertY`.
   4. Speichern Sie das dritte Set von drei Strings in einem Array namens `insertZ`.

Platzierung des Ereignishandlers und unvollständige Funktion:

1. Gehen Sie nun zurück zum Rohtext-Dokument.
2. Kopieren Sie den Code, den Sie unter der Überschrift "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" finden, und fügen Sie ihn unten in Ihre `main.js`-Datei ein. Dies:
   - Fügt dem `randomize` Variablen einen Klick-Ereignishandler hinzu, sodass beim Klicken auf die Schaltfläche, die er repräsentiert, die Funktion `result()` ausgeführt wird.
   - Fügt Ihrem Code eine teilweise vollständig definierte `result()` Funktion hinzu. Für den Rest der Herausforderung füllen Sie Zeilen innerhalb dieser Funktion aus, um sie zu vervollständigen und richtig zum Laufen zu bringen.

Vervollständigung der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie ihren Wert auf `storyText`. Dies ist erforderlich, damit wir jedes Mal, wenn die Schaltfläche gedrückt wird und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen können. Wenn wir direkt Änderungen an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und setzen Sie sie gleich dem Ergebnis des Aufrufs von `randomValueFromArray()` auf Ihre drei Arrays (das Ergebnis in jedem Fall wird ein zufälliges Element aus jedem Array sein, auf das es angewendet wird). Zum Beispiel können Sie die Funktion aufrufen und es dazu bringen, einen zufälligen String aus `insertX` zurückzugeben, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als Nächstes möchten wir die drei Platzhalter im `newStory`-String — `:insertx:`, `:inserty:` und `:insertz:` — durch die Strings in `xItem`, `yItem` und `zItem` ersetzen. Es gibt zwei mögliche String-Methoden, die Ihnen hier helfen können — in jedem Fall sollte der Aufruf der Methode gleich `newStory` gesetzt werden, sodass `newStory` bei jedem Aufruf sich selbst gleichgesetzt wird, jedoch mit durchgeführten Ersetzungen. Somit werden diese Platzhalter jedes Mal, wenn die Schaltfläche gedrückt wird, durch einen zufälligen albernen String ersetzt. Als weiteren Hinweis, abhängig von der Methode, die Sie wählen, müssen Sie möglicherweise einen der Aufrufe zweimal ausführen.
4. Fügen Sie innerhalb des ersten `if` Blocks einen weiteren Aufruf der String-Ersetzungsmethode hinzu, um den Namen 'Bob' im `newStory`-String durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das `customName` Textfeld eingegeben wurde, ersetzen wir Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Innerhalb des zweiten `if` Blocks prüfen wir, ob die `uk` Radiotaste ausgewählt wurde. Falls ja, möchten wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Stein und Celsius umwandeln. Das müssen Sie tun:
   1. Recherchieren Sie die Formeln, um Pfund in Stein und Fahrenheit in Celsius umzuwandeln.
   2. Ersetzen Sie in der Zeile, die die `weight` Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Stein umwandelt. Fügen Sie `' stone'` an das Ende des Ergebnisses des gesamten `Math.round()` Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature` Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Fügen Sie `' centigrade'` an das Ende des Ergebnisses des gesamten `Math.round()` Aufrufs an.
   4. Fügen Sie direkt unter den zwei Variablendefinitionen zwei weitere Ersetzungslinien hinzu, die '94 fahrenheit' durch den Inhalt der `temperature` Variable und '300 pounds' durch den Inhalt der `weight` Variable ersetzen.

6. Machen Sie schließlich in der zweitletzten Zeile der Funktion die `textContent` Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Tipps und Hinweise

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie unsicher sind, ob das JavaScript korrekt auf Ihr HTML angewendet wurde, versuchen Sie vorübergehend, alles andere aus der JavaScript-Datei zu entfernen, eine einfache JavaScript-Codezeile hinzuzufügen, die eine offensichtliche Wirkung erzeugt, dann zu speichern und zu aktualisieren. Der folgende Code zum Beispiel färbt den Hintergrund des {{htmlelement("html")}}-Elements rot — so sollte das gesamte Browserfenster rot werden, wenn das JavaScript korrekt angewendet wurde:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Strings, die ersetzt werden müssen. Sie können die `replace()` Methode mehrmals verwenden oder `replaceAll()`. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
