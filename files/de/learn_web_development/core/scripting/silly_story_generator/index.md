---
title: "Herausforderung: Alberner Geschichten-Generator"
short-title: "Herausforderung: Geschichten-Generator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung wird Ihnen die Aufgabe gestellt, das Wissen, das Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine lustige App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß dabei!

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, sollten Sie:

- [Holen Sie sich die HTML-Datei](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel, speichern Sie eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis irgendwo auf Ihrem Computer und beginnen Sie die Herausforderung lokal. Dies beinhaltet auch das CSS zur Gestaltung des Beispiels.
- Gehen Sie zu der [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und halten Sie diese in einem separaten Browser-Tab geöffnet. Sie werden sie später benötigen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es inline in einem `<script>`-Element innerhalb der HTML-Seite platzieren.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige rohe HTML/CSS und ein paar Textstrings sowie JavaScript-Funktionen zur Verfügung gestellt. Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine alberne Geschichte, wenn die Schaltfläche "Generate random story" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Enter custom name" eingegeben wird, bevor die Generieren-Schaltfläche gedrückt wird.
- Wandelt die Standard-US-Gewichts- und Temperaturangaben und Einheiten in der Geschichte in britische Äquivalente um, wenn das UK-Radioknopfchen angekreuzt ist, bevor die Generieren-Schaltfläche gedrückt wird.
- Generiert jedes Mal, wenn die Schaltfläche gedrückt wird, eine neue zufällige alberne Geschichte.

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Programm aussehen sollte:

![Die alberne Geschichten-Generator-App besteht aus einem Textfeld, zwei Radioknöpfen und einer Schaltfläche, um eine zufällige Geschichte zu generieren.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen einen besseren Eindruck zu geben, [schauen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (nicht im Quellcode spicken!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im selben Verzeichnis wie Ihre `index.html`-Datei.
2. Binden Sie die externe JavaScript-Datei in Ihr HTML ein, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Anfängliche Variablen und Funktionen:

1. Kopieren Sie im Rohtext-Dokument all den Code unter der Überschrift "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" und fügen Sie ihn oben in die `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Referenzen zum "Enter custom name"-Textfeld (`customName`), zur "Generate random story"-Schaltfläche (`randomize`) und zum {{htmlelement("p")}}-Element am unteren Rand des HTML-Körpers speichern, in das die Geschichte kopiert wird (`story`). Zusätzlich haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und einen der darin gespeicherten Einträge zufällig zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt des Rohtext-Dokuments an — "2. RAW TEXT STRINGS". Dieser enthält Textstrings, die als Eingabe in unser Programm dienen. Wir möchten, dass Sie diese innerhalb von Variablen in `main.js` speichern:
   1. Speichern Sie den ersten, langen Textstring in einer Variablen namens `storyText`.
   2. Speichern Sie den ersten Satz aus drei Strings in einem Array namens `insertX`.
   3. Speichern Sie den zweiten Satz aus drei Strings in einem Array namens `insertY`.
   4. Speichern Sie den dritten Satz aus drei Strings in einem Array namens `insertZ`.

Platzieren des Ereignishandlers und unvollständige Funktion:

1. Kehren Sie nun zum Rohtext-Dokument zurück.
2. Kopieren Sie den Code, der unter der Überschrift "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" gefunden wird und fügen Sie ihn am Ende Ihrer `main.js`-Datei ein. Dieser:
   - Fügt der `randomize`-Variable einen Klick-Ereignishandler hinzu, sodass bei einem Klick auf die von ihr repräsentierte Schaltfläche die `result()`-Funktion ausgeführt wird.
   - Fügt Ihrer Datei eine teilweise vervollständigte `result()`-Funktionsdefinition hinzu. Den Rest der Herausforderung werden Sie Inhalte dieser Funktion ausfüllen, um sie zu vervollständigen und richtig zu machen.

Vervollständigung der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie ihren Wert gleich `storyText`. Dies ist notwendig, damit wir jedes Mal, wenn die Schaltfläche gedrückt und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen können. Wenn wir Änderungen direkt an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und machen Sie sie gleich dem Ergebnis des Aufrufes von `randomValueFromArray()` auf Ihren drei Arrays (das Ergebnis wird in jedem Fall ein zufälliger Eintrag aus jedem Array sein, auf dem es aufgerufen wird). Beispielsweise können Sie die Funktion aufrufen und sie dazu bringen, einen zufälligen String aus `insertX` zurückzugeben, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als Nächstes möchten wir die drei Platzhalter in der `newStory`-Zeichenkette — `:insertx:`, `:inserty:`, und `:insertz:` — mit den in `xItem`, `yItem` und `zItem` gespeicherten Zeichenketten ersetzen. Es gibt zwei mögliche Methoden von Zeichenketten, die Ihnen hier helfen könnten — in jedem Fall sollten Sie den Aufruf der Methode gleich `newStory` setzen, sodass `newStory` jedes Mal, wenn sie aufgerufen wird, gleich sich selbst gemacht wird, jedoch mit vorgenommenen Ersetzungen. Jedes Mal, wenn die Schaltfläche gedrückt wird, werden diese Platzhalter jeweils durch einen zufälligen albernen String ersetzt. Als weiteren Hinweis: Abhängig von der gewählten Methode müssen Sie möglicherweise einen der Aufrufe zweimal ausführen.
4. Fügen Sie innerhalb des ersten `if`-Blocks einen weiteren Aufruf der Zeichenkettenersetzungsmethode hinzu, um den Namen 'Bob' in der `newStory`-Zeichenkette durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das `customName`-Texteingabefeld eingegeben wurde, ersetzen Sie Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. In dem zweiten `if`-Block prüfen wir, ob das `uk`-Radioknöpchen ausgewählt wurde. Falls ja, möchten wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umwandeln. Was Sie tun müssen, ist Folgendes:

   1. Suchen Sie die Formeln zum Umrechnen von Pfund in Stein und Fahrenheit in Celsius.
   2. Ersetzen Sie innerhalb der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umwandelt. Hängen Sie `' stone'` an das Ende des Ergebnisses des Gesamtaufrufes von `Math.round()` an.
   3. Ersetzen Sie innerhalb der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Hängen Sie `' centigrade'` an das Ende des Ergebnisses des Gesamtaufrufes von `Math.round()` an.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere Zeilen zur Zeichenkettenersetzung hinzu, die '94 fahrenheit' durch den Inhalt der `temperature`-Variable und '300 pounds' durch den Inhalt der `weight`-Variable ersetzen.

6. Schließlich, in der vorletzten Zeile der Funktion, setzen Sie die `textContent`-Eigenschaft der `story`-Variable (die auf den Absatz verweist) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript in Ihr HTML einzufügen.
- Wenn Sie unsicher sind, ob das JavaScript richtig in Ihr HTML eingefügt ist, versuchen Sie, vorübergehend alles andere aus der JavaScript-Datei zu entfernen und ein einfaches Stück JavaScript hinzuzufügen, von dem Sie wissen, dass es einen offensichtlichen Effekt erzeugt, dann speichern und aktualisieren. Das folgende Beispiel färbt den Hintergrund des {{htmlelement("html")}}-Elements rot — also sollte das gesamte Browserfenster rot werden, wenn das JavaScript richtig eingefügt ist:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Zeichenketten, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrmals verwenden oder `replaceAll()` nutzen. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
