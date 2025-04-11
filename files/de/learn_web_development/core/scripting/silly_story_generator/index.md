---
title: "Herausforderung: Alberner Geschichtengenerator"
short-title: "Herausforderung: Geschichtengenerator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie aufgefordert, einige der Kenntnisse, die Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine unterhaltsame App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß dabei!

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- [Laden Sie die HTML-Datei](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel herunter, speichern Sie eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis irgendwo auf Ihrem Computer und führen Sie die Herausforderung zunächst lokal durch. Dies enthält auch das CSS zur Gestaltung des Beispiels.
- Gehen Sie zur [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und lassen Sie diese in einem separaten Browser-Tab geöffnet. Sie werden sie später benötigen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Falls der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie das JavaScript gerne in ein `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie feststecken, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Ihnen wurden einige Roh-HTML/CSS und ein paar Textzeichenfolgen sowie JavaScript-Funktionen zur Verfügung gestellt; Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine alberne Geschichte, wenn die Schaltfläche "Generate random story" (Zufällige Geschichte generieren) gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Enter custom name" (Benutzerdefinierten Namen eingeben) eingegeben wird, bevor die Schaltfläche zum Generieren gedrückt wird.
- Wandelt die Standard-US-Gewichts- und Temperaturangaben in der Geschichte in UK-Entsprechungen um, wenn die UK-Optionsschaltfläche vor dem Drücken der Schaltfläche markiert ist.
- Generiert bei jedem Drücken der Schaltfläche eine neue zufällige alberne Geschichte.

Der folgende Screenshot zeigt ein Beispiel für die Ausgabe des fertigen Programms:

![Die "alberne Geschichtengenerator"-App besteht aus einem Textfeld, zwei Optionsfeldern und einer Schaltfläche zum Generieren einer zufälligen Geschichte.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen eine genauere Vorstellung zu geben, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (nicht in den Quellcode schauen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im selben Verzeichnis wie Ihre `index.html`-Datei.
2. Wenden Sie die externe JavaScript-Datei auf Ihr HTML an, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Anfangsvariablen und Funktionen:

1. Kopieren Sie in der Rohtextdatei den gesamten Code unter der Überschrift "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" und fügen Sie ihn oben in der `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die auf das Textfeld "Enter custom name", die Schaltfläche "Generate random story" und das {{htmlelement("p")}}-Element am unteren Rand des HTML-Bodys verweisen, in das die Geschichte kopiert wird. Zusätzlich haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und eines der darin gespeicherten Elemente zufällig zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt der Rohtextdatei an — "2. RAW TEXT STRINGS". Dieser enthält Textzeichenfolgen, die als Eingabe in unser Programm fungieren. Wir möchten, dass Sie diese innerhalb von Variablen in `main.js` speichern:

   1. Speichern Sie die erste, lange Zeichenfolge in einer Variablen namens `storyText`.
   2. Speichern Sie den ersten Satz von drei Zeichenfolgen in einem Array namens `insertX`.
   3. Speichern Sie den zweiten Satz von drei Zeichenfolgen in einem Array namens `insertY`.
   4. Speichern Sie den dritten Satz von drei Zeichenfolgen in einem Array namens `insertZ`.

Platzierung des Ereignishandlers und unvollständige Funktion:

1. Kehren Sie jetzt zur Rohtextdatei zurück.
2. Kopieren Sie den Code unter der Überschrift "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" und fügen Sie ihn am Ende Ihrer `main.js`-Datei ein. Dies:

   - Fügt dem `randomize`-Variable einen Klick-Event-Listener hinzu, sodass beim Klicken auf die Schaltfläche, die sie darstellt, die `result()`-Funktion ausgeführt wird.
   - Fügt Ihrer Funktion eine unvollständige `result()`-Funktionsdefinition hinzu. Für den Rest der Herausforderung werden Sie Zeilen innerhalb dieser Funktion ausfüllen, um sie abzuschließen und richtig arbeiten zu lassen.

Abschluss der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert gleich `storyText`. Dies ist notwendig, damit wir jedes Mal eine neue zufällige Geschichte erstellen können, wenn die Schaltfläche gedrückt und die Funktion ausgeführt wird. Wenn wir Änderungen direkt an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und setzen Sie sie gleich dem Ergebnis des Aufrufs von `randomValueFromArray()` auf Ihre drei Arrays (das Ergebnis in jedem Fall wird ein zufälliges Element aus jedem Array sein, bei dem es aufgerufen wird). Zum Beispiel können Sie die Funktion aufrufen und einen zufälligen String aus `insertX` zurückgeben lassen, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als nächstes möchten wir die drei Platzhalter in der `newStory`-Zeichenfolge — `:insertx:`, `:inserty:`, und `:insertz:` — mit den in `xItem`, `yItem` und `zItem` gespeicherten Zeichenfolgen ersetzen. Es gibt zwei mögliche Zeichenfolgenmethoden, die Ihnen hier helfen werden – machen Sie in jedem Fall den Aufruf der Methode gleich `newStory`, sodass jedes Mal, wenn sie aufgerufen wird, `newStory` gleich sich selbst gemacht wird, aber mit vorgenommenen Ersetzungen. Jedes Mal, wenn die Schaltfläche gedrückt wird, werden diese Platzhalter durch eine zufällige alberne Zeichenfolge ersetzt. Ein weiterer Hinweis: Je nach der von Ihnen gewählten Methode, müssen Sie möglicherweise einen der Aufrufe zweimal machen.
4. Fügen Sie innerhalb des ersten `if`-Blocks einen weiteren Aufruf der Zeichenfolgenersetzungsmethode hinzu, um den Namen 'Bob', der in der `newStory`-Zeichenfolge gefunden wird, durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das `customName`-Texteingabefeld eingegeben wurde, ersetzen Sie Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Innerhalb des zweiten `if`-Blocks überprüfen wir, ob die `uk`-Optionsschaltfläche ausgewählt wurde. Wenn ja, möchten wir die Gewichtsdaten und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umrechnen. Was Sie tun müssen, ist Folgendes:

   1. Recherchieren Sie die Formeln zur Umrechnung von Pfund in Steine und von Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umrechnet. Fügen Sie `' stone'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umrechnet. Fügen Sie `' centigrade'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere Stringersetzungszeilen hinzu, die '94 fahrenheit' durch den Inhalt der `temperature`-Variable und '300 pounds' durch den Inhalt der `weight`-Variable ersetzen.

6. Schließlich legen Sie in der vorletzten Zeile der Funktion die `textContent`-Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Tipps und Hinweise

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie sich nicht sicher sind, ob das JavaScript korrekt auf Ihr HTML angewendet wird, versuchen Sie, alles andere vorübergehend aus der JavaScript-Datei zu entfernen, fügen Sie ein einfaches JavaScript-Stück hinzu, das Ihrer Meinung nach eine offensichtliche Wirkung erzeugt, dann speichern und aktualisieren. Das folgende Beispiel beispielsweise färbt den Hintergrund des {{htmlelement("html")}}-Elements rot — das gesamte Browserfenster sollte rot werden, wenn das JavaScript richtig angewendet wird:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenfolgen, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrmals wiederholen oder `replaceAll()` verwenden. Denken Sie daran, Zeichenfolgen sind unveränderlich!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
