---
title: "Herausforderung: Lustiger Geschichten-Generator"
short-title: "Herausforderung: Geschichten-Generator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie aufgefordert, einige der Kenntnisse, die Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine unterhaltsame App zu erstellen, die zufällige lustige Geschichten generiert. Viel Spaß!

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, sollten Sie:

- [Die HTML-Datei](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel herunterladen, eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis auf Ihrem Computer speichern und die Herausforderung lokal beginnen. Diese Datei enthält auch das CSS, um das Beispiel zu stylen.
- Auf die [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) gehen und diese in einem separaten Browsertab öffnen. Sie werden sie später benötigen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es inline in einem `<script>`-Element innerhalb der HTML-Seite platzieren.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie uns auf einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbrief

Sie haben einige Roh-HTML/CSS-Dateien und einige Textzeichenfolgen sowie JavaScript-Funktionen zur Verfügung gestellt bekommen; Sie müssen das erforderliche JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine lustige Geschichte, wenn die Schaltfläche "Zufällige Geschichte generieren" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Benutzerdefinierten Namen eingeben" eingegeben wurde, bevor die Generierschaltfläche gedrückt wird.
- Wandelt die Standard-US-Gewichts- und Temperaturangaben in der Geschichte in britische Äquivalente um, wenn das UK-Radioknopf vor dem Drücken der Generierschaltfläche ausgewählt ist.
- Generiert eine neue zufällige lustige Geschichte jedes Mal, wenn die Schaltfläche gedrückt wird.

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Programm aussehen sollte:

![Der lustige Geschichten-Generator besteht aus einem Textfeld, zwei Radio-Buttons und einer Schaltfläche zum Generieren einer zufälligen Geschichte.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen eine bessere Vorstellung zu geben, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (kein Spicken des Quellcodes!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei mit dem Namen `main.js` im selben Verzeichnis wie Ihre `index.html`-Datei.
2. Wenden Sie die externe JavaScript-Datei auf Ihr HTML an, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Anfängliche Variablen und Funktionen:

1. Kopieren Sie im Rohtextdokument den gesamten Code unter der Überschrift "1. VOLLSTÄNDIGE VARIABLEN- UND FUNKTIONSDEFINITIONEN" und fügen Sie ihn oben in die `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Verweise auf das Textfeld "Benutzerdefinierten Namen eingeben" (`customName`), die Schaltfläche "Zufällige Geschichte generieren" (`randomize`) und das {{htmlelement("p")}}-Element am unteren Ende des HTML-Körpers, in das die Geschichte kopiert wird (`story`), speichern. Außerdem haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array übernimmt und eines der darin zufällig gespeicherten Elemente zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt der Rohtextdatei an – "2. ROHTEXT-ZEICHENFOLGEN". Dieser enthält Textzeichenfolgen, die als Eingabe in unser Programm dienen werden. Wir möchten, dass Sie diese in Variablen innerhalb von `main.js` speichern:

   1. Speichern Sie die erste, große lange Textzeichenfolge in einer Variable namens `storyText`.
   2. Speichern Sie den ersten Satz von drei Zeichenfolgen in einem Array namens `insertX`.
   3. Speichern Sie den zweiten Satz von drei Zeichenfolgen in einem Array namens `insertY`.
   4. Speichern Sie den dritten Satz von drei Zeichenfolgen in einem Array namens `insertZ`.

Platzieren des Ereignis-Handlers und unvollständigen Funktion:

1. Kehren Sie nun zur Rohtextdatei zurück.
2. Kopieren Sie den Code, der unter der Überschrift "3. EREIGNIS-HÖRER UND TEILWEISE FUNKTIONSDEFINITION" gefunden wird, und fügen Sie ihn unten in Ihre `main.js`-Datei ein. Dies:

   - Fügt dem `randomize`-Element einen Klick-Ereignis-Hörer hinzu, damit, wenn die von dieser Variablen vertretene Schaltfläche geklickt wird, die Funktion `result()` ausgeführt wird.
   - Fügt eine teilweise fertiggestellte `result()`-Funktionsdefinition zu Ihrem Code hinzu. Im Rest der Herausforderung werden Sie Zeilen innerhalb dieser Funktion ausfüllen, um sie abzuschließen und richtig funktionieren zu lassen.

Vervollständigung der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert gleich `storyText`. Dies ist notwendig, damit wir jedes Mal, wenn die Schaltfläche gedrückt und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen können. Wenn wir Änderungen direkt an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und setzen Sie diese gleich mit dem Ergebnis von `randomValueFromArray()` bei Ihren drei Arrays (das Ergebnis in jedem Fall wird ein zufälliges Element aus jedem Array sein, auf das es aufgerufen wird). Zum Beispiel, können Sie die Funktion aufrufen und sie dazu bringen, eine zufällige Zeichenfolge aus `insertX` zurückzugeben, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als nächstes möchten wir die drei Platzhalter in der `newStory`-Zeichenfolge — `:insertx:`, `:inserty:`, und `:insertz:` — mit den Zeichenfolgen ersetzen, die in `xItem`, `yItem` und `zItem` gespeichert sind. Es gibt zwei mögliche Zeichenfolgen-Methoden, die Ihnen hier helfen können — in jedem Fall machen Sie den Aufruf der Methode gleich `newStory`, sodass bei jedem Aufruf `newStory` gleich mit sich selbst gemacht wird, jedoch mit den vorgenommenen Ersetzungen. Bei jedem Drücken der Schaltfläche werden diese Platzhalter durch eine zufällige alberne Zeichenfolge ersetzt. Als weiteren Hinweis, je nach gewählter Methode müssen Sie den Aufruf möglicherweise zweimal machen.
4. Fügen Sie innerhalb des ersten `if`-Blocks einen weiteren Zeichenfolgen-Ersetzungsaufruf hinzu, um den Namen 'Bob', der sich in der `newStory`-Zeichenfolge befindet, mit der `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das `customName`-Textinput eingegeben wurde, ersetzen Sie Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Im zweiten `if`-Block überprüfen wir, ob der `uk`-Radiobutton ausgewählt wurde. Wenn ja, möchten wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umwandeln. Was Sie tun müssen, ist Folgendes:

   1. Suchen Sie nach den Formeln zur Umrechnung von Pfund in Steine und von Fahrenheit in Celsius.
   2. Ersetzen Sie innerhalb der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umwandelt. Fügen Sie `' stone'` an das Ende des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie innerhalb der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Grad Fahrenheit in Celsius umwandelt. Fügen Sie `' centigrade'` an das Ende des gesamten `Math.round()`-Aufrufs an.
   4. Fügen Sie direkt unter den zwei Variablendefinitionen zwei weitere Zeichenfolgenersetzungszeilen hinzu, die '94 fahrenheit' mit dem Inhalt der `temperature`-Variablen und '300 pounds' mit dem Inhalt der `weight`-Variablen ersetzen.

6. Schließlich, in der zweitletzten Zeile der Funktion, setzen Sie die `textContent`-Eigenschaft der `story`-Variablen (die sich auf den Absatz bezieht) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie nicht sicher sind, ob das JavaScript richtig auf Ihr HTML angewendet wird, versuchen Sie vorübergehend, alles andere aus der JavaScript-Datei zu entfernen, einen einfachen JavaScript-Code hinzuzufügen, von dem Sie wissen, dass er eine offensichtliche Wirkung erzeugt, dann speichern und aktualisieren. Das folgende Beispiel färbt den Hintergrund des {{htmlelement("html")}}-Elements rot – das gesamte Browserfenster sollte rot werden, wenn das JavaScript korrekt angewendet wurde:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenfolgen, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrfach wiederholen oder `replaceAll()` verwenden. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
