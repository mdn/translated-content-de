---
title: Silly Story Generator
slug: Learn/JavaScript/First_steps/Silly_story_generator
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

In dieser Bewertung werden Sie aufgefordert, einige der Kenntnisse, die Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine unterhaltsame App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß dabei!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diesen Test versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis der JavaScript-Grundlagen wie Variablen, Zahlen, Operatoren, Strings und Arrays testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um diese Bewertung zu beginnen, sollten Sie:

- [Holen Sie sich die HTML-Datei](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel, speichern Sie eine lokale Kopie als `index.html` in einem neuen Verzeichnis irgendwo auf Ihrem Computer und führen Sie die Bewertung zunächst lokal durch. Diese enthält auch das enthaltene CSS, um das Beispiel zu stylen.
- Gehen Sie zu der [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und lassen Sie diesen in einem separaten Browser-Tab geöffnet. Sie werden ihn später benötigen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es in einem `<script>`-Element innerhalb der HTML-Seite platzieren.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Ihnen wurden einige Roh-HTML/CSS und ein paar Text-Strings und JavaScript-Funktionen zur Verfügung gestellt; Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionsfähiges Programm zu verwandeln, das Folgendes tut:

- Generiert eine alberne Geschichte, wenn die Schaltfläche "Generiere zufällige Geschichte" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Benutzerdefinierten Namen eingeben" eingegeben wird, bevor die Generierungs-Schaltfläche gedrückt wird.
- Konvertiert die Standard-Mengen und -Einheiten der US-Gewicht- und Temperaturangaben in der Geschichte in britische Äquivalente, wenn der britische Radio-Button aktiviert ist, bevor die Generierungs-Schaltfläche gedrückt wird.
- Generiert bei jedem Drücken der Schaltfläche eine neue zufällige alberne Geschichte.

Der folgende Screenshot zeigt ein Beispiel dafür, was das fertige Programm ausgeben sollte:

![Die alberne Geschichtengenerator-App besteht aus einem Textfeld, zwei Radio-Buttons und einer Schaltfläche, um eine zufällige Geschichte zu generieren.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen mehr eine Vorstellung zu geben, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (nicht den Quellcode ansehen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegendes Setup:

1. Erstellen Sie eine neue Datei namens `main.js` im selben Verzeichnis wie Ihre `index.html`-Datei.
2. Wenden Sie die externe JavaScript-Datei auf Ihre HTML-Datei an, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Anfängliche Variablen und Funktionen:

1. Kopieren Sie im Rohtext alle Codes unter der Überschrift "1. DEFINIEREN VON VARIABLEN UND FUNKTIONEN VERVOLLSTÄNDIGEN" und fügen Sie ihn oben in der `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Referenzen auf das Textfeld "Benutzerdefinierten Namen eingeben" (`customName`), die Schaltfläche "Generiere zufällige Geschichte" (`randomize`) und das {{htmlelement("p")}}-Element am Ende des HTML-Bodys speichern, in das die Geschichte kopiert wird (`story`). Außerdem haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und einen der zufällig darin gespeicherten Einträge zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt der Rohtextdatei an — "2. ROHTEXTSTRINGS". Diese enthält Textstrings, die als Eingabe in unser Programm dienen werden. Wir möchten, dass Sie diese innerhalb von Variablen in `main.js` speichern:

   1. Speichern Sie den ersten, langen Textstring in einer Variablen namens `storyText`.
   2. Speichern Sie das erste Set von drei Strings in einem Array namens `insertX`.
   3. Speichern Sie das zweite Set von drei Strings in einem Array namens `insertY`.
   4. Speichern Sie das dritte Set von drei Strings in einem Array namens `insertZ`.

Platzierung des Ereignishandlers und unvollständige Funktion:

1. Kehren Sie nun zur Rohtextdatei zurück.
2. Kopieren Sie den Code, der unter der Überschrift "3. EREIGNIS-LISTENER UND TEILWEISE FUNKTIONSDEFINITION" zu finden ist, und fügen Sie ihn unten in Ihrer `main.js`-Datei ein. Dies:

   - Fügt dem `randomize`-Element einen Klick-Event-Listener hinzu, sodass, wenn die zugehörige Schaltfläche angeklickt wird, die `result()`-Funktion ausgeführt wird.
   - Fügt eine teilweise vervollständigte `result()`-Funktionsdefinition zu Ihrem Code hinzu. Für den Rest der Bewertungsaufgabe füllen Sie Zeilen in dieser Funktion aus, um sie vollständig zu machen und ordnungsgemäß arbeiten zu lassen.

Vervollständigen der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert auf `storyText`. Dies ist notwendig, um jedes Mal, wenn die Schaltfläche gedrückt wird und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen zu können. Wenn wir direkt `storyText` ändern würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und setzen Sie diese auf das Ergebnis der Funktion `randomValueFromArray()` auf Ihren drei Arrays (das Ergebnis in jedem Fall wird ein zufälliger Eintrag aus jedem Array sein, auf dem es aufgerufen wird). Zum Beispiel können Sie die Funktion aufrufen und einen zufälligen String aus `insertX` zurückgeben lassen, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als Nächstes möchten wir die drei Platzhalter in dem `newStory`-String — `:insertx:`, `:inserty:`, und `:insertz:` — mit den in `xItem`, `yItem` und `zItem` gespeicherten Strings ersetzen. Es gibt zwei mögliche String-Methoden, die Ihnen hier helfen können — in jedem Fall sollte der Aufruf der Methode gleich `newStory` sein, sodass jedes Mal, wenn sie aufgerufen wird, `newStory` sich selbst gleich macht, jedoch mit vorgenommenen Ersetzungen. So werden diese Platzhalter jedes Mal, wenn die Schaltfläche gedrückt wird, jeder durch einen zufälligen albernen String ersetzt. Als weiterer Hinweis: Abhängig von der gewählten Methode müssen Sie möglicherweise einen der Aufrufe zweimal tätigen.
4. Fügen Sie innerhalb des ersten `if`-Blocks einen weiteren String-Ersetzungsmethodenaufruf hinzu, um den Namen "Bob", der in dem `newStory`-String zu finden ist, durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das `customName`-Textfeld eingegeben wurde, ersetzen Sie Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Innerhalb des zweiten `if`-Blocks überprüfen wir, ob der `uk`-Radio-Button ausgewählt wurde. Wenn ja, wollen wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umrechnen. Was Sie tun müssen, ist Folgendes:

   1. Schauen Sie sich die Umrechnungsformeln für Pfund zu Steinen und Fahrenheit zu Celsius an.
   2. Ersetzen Sie in der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umrechnet. Hängen Sie `' stone'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umrechnet. Hängen Sie `' centigrade'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   4. Direkt unter den beiden Variablendefinitionen fügen Sie zwei weitere String-Ersetzungszeilen hinzu, die '94 fahrenheit' durch den Inhalt der `temperature`-Variable ersetzen und '300 pounds' durch den Inhalt der `weight`-Variable ersetzen.

6. Schließlich, in der vorletzten Zeile der Funktion, setzen Sie die `textContent`-Eigenschaft der `story`-Variable (die den Absatz referenziert) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie unsicher sind, ob das JavaScript auf Ihr HTML richtig angewendet wird, versuchen Sie, vorübergehend alles andere aus der JavaScript-Datei zu entfernen, und fügen Sie ein einfaches Stück JavaScript hinzu, von dem Sie wissen, dass es einen offensichtlichen Effekt haben wird, dann speichern und aktualisieren Sie. Das folgende Beispiel färbt beispielsweise den Hintergrund des {{htmlelement("html")}}-Elements rot — so sollte das gesamte Browserfenster rot werden, wenn das JavaScript richtig angewendet wurde:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Strings, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrfach verwenden oder `replaceAll()` benutzen. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
