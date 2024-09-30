---
title: Silly Story Generator
slug: Learn/JavaScript/First_steps/Silly_story_generator
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

In dieser Bewertung werden Sie damit beauftragt, einige der Kenntnisse, die Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine unterhaltsame App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis der JavaScript-Grundlagen, wie Variablen, Zahlen, Operatoren, Strings und Arrays, zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- [Holen Sie sich die HTML-Datei](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel, speichern Sie eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis auf Ihrem Computer und führen Sie die Bewertung zunächst lokal durch. Dies enthält auch das CSS, um das Beispiel zu stylen.
- Öffnen Sie die [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und halten Sie diese in einem separaten Browser-Tab geöffnet. Sie benötigen sie später.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es gerne in ein `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige Roh-HTML/CSS und ein paar Textstrings sowie JavaScript-Funktionen zur Verfügung gestellt; Sie müssen das erforderliche JavaScript schreiben, um dies in ein funktionierendes Programm umzuwandeln, das Folgendes tut:

- Generiert eine alberne Geschichte, wenn der "Generate random story"-Button gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Enter custom name" eingegeben wird, bevor der Generierungsbutton gedrückt wird.
- Konvertiert die standardmäßigen US-Gewichts- und Temperaturmengen und -einheiten in der Geschichte in britische Äquivalente, wenn das UK-Radiobutton vor dem Drücken des Generierungsbuttons aktiviert ist.
- Generiert jedes Mal, wenn der Button gedrückt wird, eine neue zufällige alberne Geschichte.

Der folgende Screenshot zeigt ein Beispiel dafür, was das fertige Programm ausgeben sollte:

![Die alberne Geschichtengenerator-App besteht aus einem Textfeld, zwei Radio-Buttons und einem Button, um eine zufällige Geschichte zu generieren.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen eine bessere Vorstellung zu geben, [schauen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (kein Blick auf den Quellcode!)

## Zu erledigende Schritte

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im gleichen Verzeichnis wie Ihre `index.html`-Datei.
2. Binden Sie die externe JavaScript-Datei in Ihr HTML ein, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Anfängliche Variablen und Funktionen:

1. Kopieren Sie im Rohtext-Dokument den gesamten Code unter der Überschrift "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" und fügen Sie ihn oben in die `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Verweise auf das Textfeld "Enter custom name" (`customName`), den Button "Generate random story" (`randomize`) und das {{htmlelement("p")}}-Element unten im HTML-Body, in das die Geschichte eingefügt wird (`story`), speichern. Zudem haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und einen der darin gespeicherten Einträge zufällig zurückgibt.
2. Schauen Sie sich nun den zweiten Abschnitt des Rohtext-Dokuments an – "2. RAW TEXT STRINGS". Dieser enthält Textstrings, die als Eingabe in unser Programm fungieren. Speichern Sie diese innerhalb von Variablen in `main.js`:

   1. Speichern Sie den ersten, langen Textstring in einer Variablen namens `storyText`.
   2. Speichern Sie den ersten Satz von drei Zeichenfolgen in einem Array namens `insertX`.
   3. Speichern Sie den zweiten Satz von drei Zeichenfolgen in einem Array namens `insertY`.
   4. Speichern Sie den dritten Satz von drei Zeichenfolgen in einem Array namens `insertZ`.

Ereignishandler und unvollständige Funktion platzieren:

1. Gehen Sie nun zum Rohtext-Dokument zurück.
2. Kopieren Sie den unter der Überschrift "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" gefundenen Code und fügen Sie ihn am Ende Ihrer `main.js`-Datei ein. Das:

   - Fügt der `randomize`-Variablen einen Klick-Ereignishandler hinzu, sodass beim Klicken auf den entsprechenden Button die `result()`-Funktion ausgeführt wird.
   - Fügt Ihrer Codierung eine teilweise vollendete `result()`-Funktionsdefinition hinzu. Für den Rest der Bewertung werden Sie Zeilen innerhalb dieser Funktion ausfüllen, um sie zu vervollständigen und funktionsfähig zu machen.

Vervollständigung der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie ihren Wert auf `storyText`. Dies ist notwendig, damit wir bei jedem Drücken des Buttons und jeder Ausführung der Funktion eine neue zufällige Geschichte erstellen können. Wenn wir Änderungen direkt an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte generieren.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und setzen Sie sie gleich mit dem Ergebnis des Aufrufs von `randomValueFromArray()` auf Ihre drei Arrays (das Ergebnis ist in jedem Fall ein zufälliges Element aus jedem aufgerufenen Array). Zum Beispiel können Sie die Funktion aufrufen und einen zufälligen String aus `insertX` zurückgeben lassen, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Als nächstes wollen wir die drei Platzhalter im `newStory`-String - `:insertx:`, `:inserty:` und `:insertz:` - durch die Strings `xItem`, `yItem` und `zItem` ersetzen. Es gibt zwei mögliche String-Methoden, die Ihnen dabei helfen können – in jedem Fall machen Sie den Methodenaufruf gleich `newStory`, sodass `newStory` jedes Mal gleich sich selbst mit vorgenommenen Ersetzungen wird. Jedes Mal, wenn der Button gedrückt wird, werden diese Platzhalter durch einen zufälligen albernen String ersetzt. Als weiterer Hinweis, je nach Methode, die Sie wählen, müssen Sie möglicherweise einen der Aufrufe zweimal ausführen.
4. Fügen Sie im ersten `if`-Block einen weiteren Aufruf der String-Ersatzmethode hinzu, um den Namen 'Bob' im `newStory`-String mit der `name`-Variablen zu ersetzen. In diesem Block sagen wir "Wenn ein Wert in das Textfeld `customName` eingegeben wurde, ersetzen Sie Bob in der Geschichte mit diesem benutzerdefinierten Namen."
5. Im zweiten `if`-Block prüfen wir, ob der `uk`-Radio-Button ausgewählt wurde. Falls ja, wollen wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Grad Celsius umrechnen. Was Sie tun müssen, ist Folgendes:

   1. Recherchieren Sie die Formeln zum Umrechnen von Pfund in Steine und Fahrenheit in Grad Celsius.
   2. Ersetzen Sie in der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umrechnet. Hängen Sie `' stone'` an das Endergebnis des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Grad Celsius umwandelt. Hängen Sie `' centigrade'` an das Endergebnis des gesamten `Math.round()`-Aufrufs an.
   4. Fügen Sie direkt unter den beiden Variablendefinitionen zwei weitere String-Ersatzzeilen hinzu, die '94 fahrenheit' durch den Inhalt der `temperature`-Variable und '300 pounds' durch den Inhalt der `weight`-Variable ersetzen.

6. Schließlich, in der vorletzten Zeile der Funktion, setzen Sie die `textContent`-Eigenschaft der `story`-Variablen (die den Absatz referenziert) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML nicht in irgendeiner Weise bearbeiten, außer um das JavaScript in Ihr HTML einzubinden.
- Wenn Sie nicht sicher sind, ob das JavaScript korrekt in Ihr HTML eingebunden ist, versuchen Sie vorübergehend, alles andere aus der JavaScript-Datei zu entfernen, eine einfache JavaScript-Sequenz hinzuzufügen, von der Sie wissen, dass sie einen offensichtlichen Effekt erzeugt, und dann zu speichern und zu aktualisieren. Folgendes Beispiel macht den Hintergrund des {{htmlelement("html")}}-Elements rot – sodass das gesamte Browserfenster rot werden sollte, wenn das JavaScript korrekt angewendet ist:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Strings, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrmals wiederholen oder `replaceAll()` verwenden. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
