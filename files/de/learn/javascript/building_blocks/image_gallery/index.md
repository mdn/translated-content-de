---
title: Bildgalerie
slug: Learn/JavaScript/Building_blocks/Image_gallery
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Jetzt, da wir uns die grundlegenden Bausteine von JavaScript angesehen haben, werden wir Ihr Wissen über Schleifen, Funktionen, Konditionalen und Ereignissen testen, indem wir Sie eine ziemlich häufige Funktion erstellen lassen, die Sie auf vielen Websites sehen werden — eine JavaScript-gesteuerte Bildgalerie.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie mit dieser Bewertung beginnen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis von JavaScript-Schleifen, -Funktionen, -Konditionalen und -Ereignissen testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie die [ZIP-Datei herunterladen](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip), auf Ihrem Computer entpacken und die Übung zunächst lokal durchführen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige HTML-, CSS- und Bildressourcen sowie ein paar Zeilen JavaScript-Code zur Verfügung gestellt; Sie müssen das notwendige JavaScript schreiben, um daraus ein funktionierendes Programm zu machen. Der HTML-Körper sieht so aus:

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

![Eine Bildgalerie mit einem großen Bild oben und fünf Miniaturansichten darunter](gallery.png)

Die interessantesten Teile der CSS-Datei des Beispiels:

- Sie positioniert die drei Elemente innerhalb der `full-img <div>` absolut — das `<img>`, in dem das Bild in voller Größe angezeigt wird, ein leeres `<div>`, das die gleiche Größe wie das `<img>` hat und direkt darübergelegt wird (dies wird verwendet, um einen Abdunklungseffekt auf das Bild durch eine halbtransparente Hintergrundfarbe anzuwenden), und ein `<button>`, das verwendet wird, um den Abdunklungseffekt zu steuern.
- Sie setzt die Breite aller Bilder innerhalb der `thumb-bar <div>` (sogenannte "Thumbnail"-Bilder) auf 20% und lässt sie nach links schweben, sodass sie nebeneinander auf einer Linie stehen.

Ihr JavaScript muss:

- Ein `const`-Array deklarieren, das die Dateinamen jedes Bildes auflistet, wie z. B. `'pic1.jpg'`.
- Ein `const`-Objekt deklarieren, das den Alternativtext für jedes Bild auflistet.
- Durch das Array der Dateinamen schleifen und für jedes einen `<img>`-Element innerhalb der `thumb-bar <div>` einfügen, das dieses Bild zusammen mit seinem Alternativtext auf der Seite einbettet.
- Ein Klick-Ereignislistener zu jedem `<img>` innerhalb der `thumb-bar <div>` hinzufügen, sodass, wenn sie geklickt werden, das entsprechende Bild und der Alternativtext im `displayed-img <img>`-Element angezeigt werden.
- Einen Klick-Ereignislistener zum `<button>` hinzufügen, sodass, wenn es geklickt wird, ein Abdunklungseffekt auf das Bild in voller Größe angewendet wird. Wenn es erneut geklickt wird, wird der Abdunklungseffekt wieder entfernt.

Um Ihnen eine bessere Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) an (keine Manipulation des Quellcodes!).

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Ein Array von Bilddateinamen deklarieren

Sie müssen ein Array erstellen, das die Dateinamen aller Bilder auflistet, die in die Galerie aufgenommen werden sollen. Das Array sollte als Konstante deklariert werden.

### Schleife durch die Bilder

Wir haben Ihnen bereits Zeilen bereitgestellt, die eine Referenz auf die `thumb-bar <div>` in einer Konstanten namens `thumbBar` speichern, ein neues `<img>`-Element erstellen, dessen `src`- und `alt`-Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>`-Element innerhalb `thumbBar` anhängen.

Sie müssen:

1. Den Abschnitt des Codes unter dem Kommentar "Looping through images" in eine Schleife einfügen, die durch alle Dateinamen im Array schleift.
2. In jeder Schleifeniteration die `xxx`-Platzhalterwerte durch einen String ersetzen, der dem Pfad zum Bild und den Alt-Attributen in jedem Fall entspricht. Setzen Sie den Wert der `src`- und `alt`-Attribute in jedem Fall auf diese Werte. Denken Sie daran, dass das Bild sich im Verzeichnis `images` befindet und sein Name `pic1.jpg`, `pic2.jpg` usw. ist.

### Hinzufügen eines Klick-Ereignislisteners zu jedem Thumbnail-Bild

In jeder Schleifeniteration müssen Sie dem aktuellen `newImage` einen Klick-Ereignislistener hinzufügen — dieser Listener sollte den Wert des `src`-Attributs des aktuellen Bildes finden. Setzen Sie den `src`-Attributwert des `displayed-img <img>` auf den im Parameter angegebenen `src`-Wert. Tun Sie dann dasselbe für das `alt`-Attribut.

Alternativ können Sie einen Ereignislistener für die Miniaturleiste hinzufügen.

### Schreiben eines Handlers, der die Dunkel-/Heller-Schaltfläche ausführt

Es bleibt nur noch unser Dunkel-/Heller-`<button>` — wir haben Ihnen bereits eine Zeile bereitgestellt, die eine Referenz auf die `<button>` in einer Konstanten namens `btn` speichert. Sie müssen einen Klick-Ereignislistener hinzufügen, der:

1. Den aktuellen Klassennamen auf das `<button>` überprüft — dies können Sie wiederum mit `getAttribute()` erreichen.
2. Wenn der Klassenname `"dark"` ist, die `<button>`-Klasse in `"light"` ändern (mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), ihren Textinhalt in "Aufhellen" ändern und die {{cssxref("background-color")}} des Overlay-`<div>` in `"rgb(0 0 0 / 50%)"` ändern.
3. Wenn der Klassenname nicht `"dark"` ist, die `<button>`-Klasse in `"dark"` ändern, ihren Textinhalt zurück in "Abdunkeln" ändern und die {{cssxref("background-color")}} des Overlay-`<div>` in `"rgb(0 0 0 / 0%)"` ändern.

Die folgenden Zeilen bieten eine Grundlage, um die in den Punkten 2 und 3 angegebenen Änderungen zu erreichen.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise bearbeiten.

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
