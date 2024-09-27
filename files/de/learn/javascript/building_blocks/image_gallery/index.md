---
title: Bildergalerie
slug: Learn/JavaScript/Building_blocks/Image_gallery
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Nachdem wir uns die grundlegenden Bausteine von JavaScript angesehen haben, werden wir Ihr Wissen über Schleifen, Funktionen, Bedingungen und Ereignisse testen, indem Sie ein recht häufiges Element erstellen, das Sie auf vielen Websites sehen werden - eine JavaScript-gesteuerte Bildergalerie.

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
        Das Verständnis von JavaScript-Schleifen, -Funktionen, -Bedingungen und -Ereignissen zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie die [ZIP-Datei](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip) für das Beispiel herunterladen, sie an einem Ort auf Ihrem Computer entpacken und die Übung zunächst lokal durchführen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Projektbeschreibung

Sie haben einige HTML-, CSS- und Bildressourcen sowie ein paar Zeilen JavaScript-Code zur Verfügung gestellt bekommen; Sie müssen den notwendigen JavaScript-Code schreiben, um daraus ein funktionierendes Programm zu machen. Der HTML-Körper sieht so aus:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="images/pic1.jpg"
    alt="Closeup of a blue human eye" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

Das Beispiel sieht so aus:

![Eine Bildergalerie mit einem großen Bild oben und fünf Thumbnails darunter](gallery.png)

Die interessantesten Teile der CSS-Datei des Beispiels:

- Es positioniert die drei Elemente innerhalb des `full-img <div>` absolut: das `<img>`, in dem das Bild in voller Größe angezeigt wird, ein leeres `<div>`, das auf die gleiche Größe wie das `<img>` skaliert und darüber gelegt wird (dies wird verwendet, um mit einer halbtransparenten Hintergrundfarbe einen Abdunklungseffekt auf das Bild anzuwenden), und einen `<button>`, der zur Steuerung des Abdunklungseffekts verwendet wird.
- Es setzt die Breite aller Bilder innerhalb des `thumb-bar <div>` (so genannte "Thumbnail"-Bilder) auf 20 % und lässt sie nach links schweben, so dass sie nebeneinander auf einer Linie stehen.

Ihr JavaScript muss Folgendes tun:

- Ein `const`-Array deklarieren, das die Dateinamen jedes Bildes auflistet, z.B. `'pic1.jpg'`.
- Ein `const`-Objekt deklarieren, das den Alternativtext für jedes Bild enthält.
- Durch das Array der Dateinamen schleifen und für jede davon ein `<img>`-Element innerhalb des `thumb-bar <div>` einfügen, das dieses Bild auf der Seite einbettet, zusammen mit seinem Alternativtext.
- Ein Klick-Ereignis-Listener zu jedem `<img>` innerhalb des `thumb-bar <div>` hinzufügen, so dass, wenn darauf geklickt wird, das entsprechende Bild und der Alternativtext im `displayed-img <img>`-Element angezeigt werden.
- Einen Klick-Ereignis-Listener für den `<button>` hinzufügen, so dass, wenn darauf geklickt wird, ein Abdunklungseffekt auf das Bild in voller Größe angewendet wird. Wenn erneut darauf geklickt wird, wird der Abdunklungseffekt wieder entfernt.

Um Ihnen einen größeren Eindruck zu geben, sehen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) an (nicht in den Quellcode schauen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Ein Array mit Bilddateinamen deklarieren

Sie müssen ein Array erstellen, das die Dateinamen aller in der Galerie enthaltenen Bilder auflistet. Das Array sollte als Konstante deklariert werden.

### Durch die Bilder schleifen

Wir haben Ihnen bereits Zeilen bereitgestellt, die eine Referenz auf das `thumb-bar <div>` in einer Konstante namens `thumbBar` speichern, ein neues `<img>`-Element erstellen, seine `src`- und `alt`-Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>`-Element in `thumbBar` einfügen.

Sie müssen:

1. Den Abschnitt unterhalb des Kommentars "Durch Bilder schleifen" in eine Schleife setzen, die durch alle Dateinamen im Array schleift.
2. In jeder Schleifeniteration den Platzhalterwert `xxx` durch einen String ersetzen, der dem Pfad zu jedem Bild und den Alt-Attributen entsprechend in jedem Fall entspricht. Setzen Sie den Wert der `src`- und `alt`-Attribute auf diese Werte in jedem Fall. Denken Sie daran, dass das Bild sich im Images-Verzeichnis befindet und `pic1.jpg`, `pic2.jpg` usw. heißt.

### Hinzufügen eines Klick-Ereignis-Listeners zu jedem Thumbnail-Bild

In jeder Schleifeniteration müssen Sie einen Klick-Ereignis-Listener zum aktuellen `newImage` hinzufügen - dieser Listener sollte den Wert des `src`-Attributs des aktuellen Bildes finden. Setzen Sie den `src`-Attributwert des `displayed-img <img>` auf den `src`-Wert, der als Parameter übergeben wird. Machen Sie dann dasselbe für das `alt`-Attribut.

Alternativ können Sie einen Ereignis-Listener zur Thumbnail-Leiste hinzufügen.

### Schreiben eines Handlers, der den Abdunkeln/Erhellen-Button ausführt

Das überlässt nur noch unseren Abdunkeln/Erhellen `<button>` - wir haben Ihnen bereits eine Zeile bereitgestellt, die eine Referenz zum `<button>` in einer Konstante namens `btn` speichert. Sie müssen einen Klick-Ereignis-Listener hinzufügen, der:

1. Den aktuellen Klassennamen des `<button>` überprüft - dies können Sie wiederum erreichen, indem Sie `getAttribute()` verwenden.
2. Wenn der Klassenname `"dark"` ist, ändern Sie die `<button>`-Klasse in `"light"` (unter Verwendung von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), seinen Textinhalt in "Erhellen" und die {{cssxref("background-color")}} des Overlay `<div>` in `"rgb(0 0 0 / 50%)"`.
3. Wenn der Klassenname nicht `"dark"` ist, ändern Sie die `<button>`-Klasse in `"dark"`, seinen Textinhalt zurück auf "Abdunkeln" und die {{cssxref("background-color")}} des Overlay `<div>` in `"rgb(0 0 0 / 0%)"`.

Die folgenden Zeilen liefern eine Grundlage für die oben in den Punkten 2 und 3 vorgeschlagenen Änderungen.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise bearbeiten.

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
