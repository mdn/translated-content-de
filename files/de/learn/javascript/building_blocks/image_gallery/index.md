---
title: Bildergalerie
slug: Learn/JavaScript/Building_blocks/Image_gallery
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Nachdem wir uns die grundlegenden Bausteine von JavaScript angesehen haben, werden wir Ihr Wissen über Schleifen, Funktionen, Konditionalanweisungen und Ereignisse testen, indem Sie ein recht häufiges Element erstellen, das Sie auf vielen Websites sehen — eine von JavaScript gesteuerte Bildergalerie.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zum Testen des Verständnisses von JavaScript-Schleifen, -Funktionen, -Konditionals und -Ereignissen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie die [ZIP-Datei](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip) für das Beispiel herunterladen, sie irgendwo auf Ihrem Computer entpacken und die Übung zunächst lokal durchführen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben einige HTML-, CSS- und Bildressourcen sowie ein paar Zeilen JavaScript-Code zur Verfügung gestellt bekommen; Sie müssen das notwendige JavaScript schreiben, um dies in ein funktionierendes Programm zu verwandeln. Der HTML-Body sieht folgendermaßen aus:

```html
<h1>Beispiel einer Bildergalerie</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="images/pic1.jpg"
    alt="Nahaufnahme eines blauen menschlichen Auges" />
  <div class="overlay"></div>
  <button class="dark">Abdunkeln</button>
</div>

<div class="thumb-bar"></div>
```

Das Beispiel sieht folgendermaßen aus:

![Eine Bildergalerie mit einem großen Bild oben und fünf Miniaturansichten darunter](gallery.png)

Die interessantesten Teile der CSS-Datei des Beispiels:

- Sie positioniert die drei Elemente innerhalb des `full-img <div>` absolut — das `<img>`, in dem das Bild in voller Größe angezeigt wird, ein leeres `<div>`, das so dimensioniert ist, dass es die gleiche Größe wie das `<img>` hat und direkt darüber gelegt wird (dies wird verwendet, um einen Abdunkelungseffekt auf das Bild durch eine halbtransparente Hintergrundfarbe anzuwenden), und ein `<button>`, das zum Steuern des Abdunkelungseffekts verwendet wird.
- Sie setzt die Breite aller Bilder innerhalb des `thumb-bar <div>` (sogenannte "Thumbnail"-Bilder) auf 20 % und lässt sie nach links schweben, sodass sie nebeneinander in einer Zeile sitzen.

Ihr JavaScript muss:

- Ein `const`-Array deklarieren, das die Dateinamen jedes Bildes auflistet, z. B. `'pic1.jpg'`.
- Ein `const`-Objekt deklarieren, das den alternativen Text für jedes Bild auflistet.
- Durch das Array der Dateinamen schleifen und für jedes Bild ein `<img>`-Element innerhalb des `thumb-bar <div>` einfügen, das dieses Bild auf der Seite zusammen mit seinem alternativen Text einbettet.
- Einen Klick-Ereignislistener zu jedem `<img>` innerhalb des `thumb-bar <div>` hinzufügen, sodass, wenn sie angeklickt werden, das entsprechende Bild und der alternative Text im `displayed-img <img>`-Element angezeigt werden.
- Einen Klick-Ereignislistener zum `<button>` hinzufügen, sodass, wenn er angeklickt wird, ein Abdunkelungseffekt auf das Bild in voller Größe angewendet wird. Wenn es erneut angeklickt wird, wird der Abdunkelungseffekt wieder entfernt.

Um Ihnen mehr Einblick zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) (nicht in den Quellcode schauen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Ein Array mit Bilddateinamen deklarieren

Sie müssen ein Array erstellen, das die Dateinamen aller Bilder enthält, die in der Galerie enthalten sein sollen. Das Array sollte als Konstante deklariert werden.

### Durch die Bilder schleifen

Wir haben Ihnen bereits Zeilen zur Verfügung gestellt, die eine Referenz auf das `thumb-bar <div>` in einer Konstanten namens `thumbBar` speichern, ein neues `<img>`-Element erstellen, dessen `src`- und `alt`-Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>`-Element in `thumbBar` einfügen.

Sie müssen:

1. Den Abschnitt des Codes unter dem Kommentar "Durch Bilder schleifen" in eine Schleife setzen, die durch alle Dateinamen im Array geht.
2. In jeder Schleifeniteration die Platzhalterwerte `xxx` durch eine Zeichenkette ersetzen, die dem Pfad zu den Bildern entspricht und in jedem Fall die Alt-Attribute. Setzen Sie die Werte der `src`- und `alt`-Attribute in jedem Fall auf diese Werte. Denken Sie daran, dass sich das Bild im Verzeichnis images befindet und sein Name `pic1.jpg`, `pic2.jpg` usw. ist.

### Hinzufügen eines Klick-Ereignislisteners zu jedem Miniaturbild

In jeder Schleifeniteration müssen Sie einen Klick-Ereignislistener zum aktuellen `newImage` hinzufügen — dieser Listener sollte den Wert des `src`-Attributs des aktuellen Bildes finden. Setzen Sie den `src`-Attributwert des `displayed-img <img>` auf den `src`-Wert, der als Parameter übergeben wird. Tun Sie dann dasselbe für das `alt`-Attribut.

Alternativ können Sie einen Ereignislistener zur gesamten Miniatur-Leiste hinzufügen.

### Einen Handler für den Abdunkel-/Aufhelle-Button schreiben

Das lässt nur noch unseren Abdunkel-/Aufhelle-`<button>` übrig — wir haben bereits eine Zeile bereitgestellt, die eine Referenz auf den `<button>` in einer Konstanten namens `btn` speichert. Sie müssen einen Klick-Ereignislistener hinzufügen, der:

1. Den aktuellen Klassennamen auf dem `<button>` überprüft — Sie können dies erneut mit `getAttribute()` erreichen.
2. Wenn der Klassenname `"dark"` ist, die `<button>`-Klasse auf `"light"` ändert (mithilfe von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), seinen Textinhalt auf "Aufhellen" und die {{cssxref("background-color")}} des Overlay-`<div>` auf `"rgb(0 0 0 / 50%)"` ändert.
3. Wenn der Klassenname nicht `"dark"` ist, die `<button>`-Klasse wieder auf `"dark"` ändert, seinen Textinhalt zurück auf "Abdunkeln" und die {{cssxref("background-color")}} des Overlay-`<div>` auf `"rgb(0 0 0 / 0%)"` ändert.

Die folgenden Zeilen bieten eine Grundlage für die in den Punkten 2 und 3 oben geforderten Änderungen:

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise bearbeiten.

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
