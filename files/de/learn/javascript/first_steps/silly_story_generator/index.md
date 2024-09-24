---
title: Lachhafte Geschichtengenerator
slug: Learn/JavaScript/First_steps/Silly_story_generator
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

In dieser Bewertung werden Sie damit beauftragt, einige der Kenntnisse, die Sie in den Artikeln dieses Moduls erworben haben, anzuwenden, um eine unterhaltsame App zu erstellen, die zufällige lachhafte Geschichten generiert. Viel Spaß!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um das Verständnis der JavaScript-Grundlagen wie Variablen, Zahlen, Operatoren, Strings und Arrays zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- [Laden Sie die HTML-Datei herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html) für das Beispiel, speichern Sie eine lokale Kopie davon als `index.html` in einem neuen Verzeichnis irgendwo auf Ihrem Computer und führen Sie die Bewertung zunächst lokal durch. Diese enthält auch das CSS, um das Beispiel zu stylen.
- Gehen Sie auf die [Seite mit dem Rohtext](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und halten Sie diese in einem separaten Browser-Tab geöffnet. Sie werden sie später benötigen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es auch direkt in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurde einige rohe HTML/CSS und ein paar Textstrings und JavaScript-Funktionen bereitgestellt; Sie müssen das erforderliche JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln, das Folgendes tut:

- Generiert eine lachhafte Geschichte, wenn der Button "Generiere zufällige Geschichte" gedrückt wird.
- Ersetzt den Standardnamen "Bob" in der Geschichte durch einen benutzerdefinierten Namen, nur wenn ein benutzerdefinierter Name in das Textfeld "Geben Sie einen benutzerdefinierten Namen ein" eingegeben wird, bevor der Generierungsbutton gedrückt wird.
- Konvertiert die Standard-US-Gewichts- und Temperaturmengen und -einheiten in der Geschichte in britische Äquivalente, wenn der UK-Radiobutton vor dem Drücken des Generierungsbuttons ausgewählt wird.
- Generiert jedes Mal eine neue zufällige lachhafte Geschichte, wenn der Button gedrückt wird.

Der folgende Screenshot zeigt ein Beispiel dafür, was das fertige Programm ausgeben sollte:

![Die lachhafte Geschichtengenerator-App besteht aus einem Textfeld, zwei Radio-Buttons und einem Button zum Generieren einer zufälligen Geschichte.](screen_shot_2018-09-19_at_10.01.38_am.png)

Um Ihnen eine genauere Vorstellung zu geben, [sehen Sie sich das fertige Beispiel an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (kein Blick auf den Quellcode!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

Grundlegende Einrichtung:

1. Erstellen Sie eine neue Datei namens `main.js` im selben Verzeichnis wie Ihre `index.html`-Datei.
2. Wenden Sie die externe JavaScript-Datei auf Ihr HTML an, indem Sie ein {{htmlelement("script")}}-Element in Ihr HTML einfügen, das auf `main.js` verweist. Platzieren Sie es direkt vor dem schließenden `</body>`-Tag.

Anfangsvariablen und -funktionen:

1. Im Rohtextdokument kopieren Sie den gesamten Code unter der Überschrift "1. VOLLSTÄNDIGE VARIABEL- UND FUNKTIONS-DEFINITIONEN" und fügen Sie ihn oben in der `main.js`-Datei ein. Dies gibt Ihnen drei Variablen, die Referenzen auf das Textfeld "Geben Sie einen benutzerdefinierten Namen ein" (`customName`), den Button "Generiere zufällige Geschichte" (`randomize`) und das {{htmlelement("p")}}-Element am Ende des HTML-Körpers, in das die Geschichte kopiert wird (`story`), speichern. Darüber hinaus haben Sie eine Funktion namens `randomValueFromArray()`, die ein Array nimmt und einen der darin gespeicherten Einträge zufällig zurückgibt.
2. Sehen Sie sich jetzt den zweiten Abschnitt des Rohtextdokuments an — "2. ROH-TEXT-STRINGS". Dieser enthält Textstrings, die als Eingabe in unser Programm dienen. Wir möchten, dass Sie diese innerhalb von Variablen in `main.js` speichern:

   1. Speichern Sie die erste, lange Textzeichenkette in einer Variablen namens `storyText`.
   2. Speichern Sie die erste Gruppe von drei Strings in einem Array namens `insertX`.
   3. Speichern Sie die zweite Gruppe von drei Strings in einem Array namens `insertY`.
   4. Speichern Sie die dritte Gruppe von drei Strings in einem Array namens `insertZ`.

Platzieren des Ereignishandlers und unvollständige Funktion:

1. Gehen Sie nun zurück zum Rohtextdokument.
2. Kopieren Sie den Code unter der Überschrift "3. EREIGNIS-HANDLER UND UNVOLLSTÄNDIGE FUNKTIONSDEFINITION" und fügen Sie ihn unten in Ihrer `main.js`-Datei ein. Dieser:

   - Fügt dem `randomize`-Objekt einen Klick-Ereignis-Listener hinzu, sodass , wenn der Button, den es repräsentiert, geklickt wird, die Funktion `result()` ausgeführt wird.
   - Fügt Ihrer Funktionsdefinition eine teilweise abgeschlossene `result()`-Funktion hinzu. Für den Rest der Bewertung füllen Sie Zeilen innerhalb dieser Funktion aus, um sie zu vervollständigen und korrekt zu arbeiten.

Vervollständigung der `result()`-Funktion:

1. Erstellen Sie eine neue Variable namens `newStory` und setzen Sie deren Wert gleich `storyText`. Dies ist erforderlich, damit wir jedes Mal, wenn der Button gedrückt wird und die Funktion ausgeführt wird, eine neue zufällige Geschichte erstellen können. Wenn wir direkt Änderungen an `storyText` vornehmen würden, könnten wir nur einmal eine neue Geschichte erzeugen.
2. Erstellen Sie drei neue Variablen namens `xItem`, `yItem` und `zItem` und weisen Sie ihnen das Ergebnis des Aufrufs von `randomValueFromArray()` auf Ihre drei Arrays zu (das Ergebnis ist in jedem Fall ein zufälliges Element aus jedem Array, auf dem es aufgerufen wird). Zum Beispiel können Sie die Funktion aufrufen und sie einen zufälligen String aus `insertX` zurückgeben lassen, indem Sie `randomValueFromArray(insertX)` schreiben.
3. Nun möchten wir die drei Platzhalter in der `newStory`-Zeichenkette — `:insertx:`, `:inserty:`, und `:insertz:` — durch die Strings in `xItem`, `yItem`, und `zItem` ersetzen. Es gibt zwei mögliche String-Methoden, die Ihnen hier helfen können. In jedem Fall machen Sie den Methodenaufruf gleich `newStory`, sodass jedes Mal, wenn sie aufgerufen wird, `newStory` sich gleich sich selbst, aber mit Substitutionen darstellt. So werden diese Platzhalter jedes Mal, wenn der Button gedrückt wird, jeweils durch einen zufälligen lachhaften String ersetzt. Als weiteren Hinweis, je nachdem, welche Methode Sie wählen, müssen Sie möglicherweise einen der Aufrufe zweimal ausführen.
4. Innerhalb des ersten `if`-Blocks fügen Sie einen weiteren String-Ersetzungsmethodenaufruf hinzu, um den Namen 'Bob' im `newStory`-String durch die `name`-Variable zu ersetzen. In diesem Block sagen wir: "Wenn ein Wert in das Textfeld 'Geben Sie einen benutzerdefinierten Namen ein' eingegeben wurde, ersetzen Sie Bob in der Geschichte durch diesen benutzerdefinierten Namen."
5. Im zweiten `if`-Block überprüfen wir, ob der `uk`-Radiobutton ausgewählt wurde. Wenn ja, wollen wir die Gewichts- und Temperaturwerte in der Geschichte von Pfund und Fahrenheit in Steine und Celsius umwandeln. Was Sie tun müssen, ist Folgendes:

   1. Recherchieren Sie die Formeln zur Umrechnung von Pfund in Stein und Fahrenheit in Celsius.
   2. Ersetzen Sie in der Zeile, die die `weight`-Variable definiert, 300 durch eine Berechnung, die 300 Pfund in Steine umwandelt. Hängen Sie `' stone'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   3. Ersetzen Sie in der Zeile, die die `temperature`-Variable definiert, 94 durch eine Berechnung, die 94 Fahrenheit in Celsius umwandelt. Hängen Sie `' centigrade'` an das Ende des Ergebnisses des gesamten `Math.round()`-Aufrufs an.
   4. Direkt unter den beiden Variablendefinitionen fügen Sie zwei weitere String-Ersetzungszeilen hinzu, die '94 fahrenheit' mit dem Inhalt der `temperature`-Variable und '300 pounds' mit dem Inhalt der `weight`-Variable ersetzen.

6. Schließlich machen Sie in der vorletzten Zeile der Funktion die `textContent`-Eigenschaft der `story`-Variablen (die auf den Absatz verweist) gleich `newStory`.

## Hinweise und Tipps

- Sie müssen das HTML in keiner Weise bearbeiten, außer um das JavaScript auf Ihr HTML anzuwenden.
- Wenn Sie sich nicht sicher sind, ob das JavaScript korrekt auf Ihr HTML angewendet wurde, versuchen Sie vorübergehend alles andere aus der JavaScript-Datei zu entfernen und fügen Sie ein einfaches Stück JavaScript ein, von dem Sie wissen, dass es einen offensichtlichen Effekt erzeugt, dann speichern und aktualisieren. Zum Beispiel färbt das Folgende den Hintergrund des {{htmlelement("html")}}-Elements rot — sodass das gesamte Browserfenster rot wird, wenn das JavaScript ordnungsgemäß angewendet wurde:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) ist eine eingebaute JavaScript-Methode, die das Ergebnis einer Berechnung auf die nächste ganze Zahl rundet.
- Es gibt drei Instanzen von Strings, die ersetzt werden müssen. Sie können die `replace()`-Methode mehrmals wiederholen oder `replaceAll()` verwenden. Denken Sie daran, Strings sind unveränderlich!

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
