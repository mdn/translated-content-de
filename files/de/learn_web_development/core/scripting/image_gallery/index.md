---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Jetzt, da wir die grundlegenden Bausteine von JavaScript betrachtet haben, werden wir Ihr Wissen über Schleifen, Funktionen, Bedingungen und Ereignisse testen, indem Sie ein ziemlich häufiges Element erstellen, das Sie auf vielen Websites sehen werden — eine von JavaScript betriebene Bildergalerie.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie die [ZIP-Datei herunterladen](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip), sie irgendwo auf Ihrem Computer entpacken und die Übung lokal durchführen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige HTML-, CSS- und Bildressourcen sowie ein paar Zeilen JavaScript-Code zur Verfügung gestellt; Sie müssen den notwendigen JavaScript-Code schreiben, um dies in ein funktionierendes Programm zu verwandeln. Der HTML-Body sieht so aus:

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

- Es positioniert die drei Elemente innerhalb des `full-img <div>` absolut — das `<img>`, in dem das vollformatige Bild angezeigt wird, ein leeres `<div>`, das so dimensioniert ist, dass es dieselbe Größe wie das `<img>` hat und direkt darüber gelegt wird (dies wird verwendet, um einen Abdunklungseffekt auf das Bild mit einer halbtransparenten Hintergrundfarbe anzuwenden), und ein `<button>`, das zur Steuerung des Abdunklungseffekts verwendet wird.
- Es setzt die Breite aller Bilder innerhalb des `thumb-bar <div>` (sogenannte "Thumbnail-Bilder") auf 20% und lässt sie nach links schweben, sodass sie nebeneinander auf einer Linie stehen.

Ihr JavaScript muss:

- Ein `const`-Array deklarieren, das die Dateinamen jedes Bildes auflistet, wie z.B. `'pic1.jpg'`.
- Ein `const`-Objekt deklarieren, das den alternativen Text für jedes Bild auflistet.
- Durch das Array der Dateinamen schleifen und für jedes, ein `<img>`-Element innerhalb des `thumb-bar <div>` einfügen, das dieses Bild zusammen mit seinem alternativen Text in die Seite einbettet.
- Ein Klick-Ereignislistener zu jedem `<img>` innerhalb des `thumb-bar <div>` hinzufügen, so dass, wenn sie geklickt werden, das entsprechende Bild und der alternative Text im `displayed-img <img>`-Element angezeigt werden.
- Ein Klick-Ereignislistener zum `<button>` hinzufügen, so dass, wenn er geklickt wird, ein Abdunkelungseffekt auf das Vollbild angewendet wird. Wenn er erneut geklickt wird, wird der Abdunkelungseffekt wieder entfernt.

Um Ihnen eine bessere Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) an (nicht den Quellcode einsehen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Ein Array mit Bilddateinamen deklarieren

Sie müssen ein Array erstellen, das die Dateinamen aller Bilder auflistet, die in die Galerie aufgenommen werden sollen. Das Array sollte als Konstante deklariert werden.

### Durch die Bilder schleifen

Wir haben Ihnen bereits Zeilen bereitgestellt, die eine Referenz zum `thumb-bar <div>` in einer Konstanten namens `thumbBar` speichern, ein neues `<img>`-Element erstellen, seine `src`- und `alt`-Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>`-Element in `thumbBar` einfügen.

Sie müssen:

1. Den Codeabschnitt unter dem Kommentar "Durch Bilder schleifen" in eine Schleife einfügen, die alle Dateinamen im Array durchläuft.
2. In jeder Schleifeniteration die Platzhalterwerte `xxx` durch einen String ersetzen, der dem Pfad zum Bild und alt-Attributen in jedem Fall entspricht. Setzen Sie den Wert der `src`- und `alt`-Attribute auf diese Werte in jedem Fall. Denken Sie daran, dass sich das Bild im Verzeichnis "images" befindet und `pic1.jpg`, `pic2.jpg` usw. heißt.

### Hinzufügen eines Klick-Ereignislisteners zu jedem Thumbnail-Bild

In jeder Schleifeniteration müssen Sie einen Klick-Ereignislistener zum aktuellen `newImage` hinzufügen – dieser Listener sollte den Wert des `src`-Attributes des aktuellen Bildes finden. Setzen Sie den `src`-Attributwert des `displayed-img <img>` auf den `src`-Wert, der als Parameter übergeben wird. Dann das gleiche für das `alt`-Attribut.

Alternativ können Sie einen Ereignislistener zur Thumbnail-Leiste hinzufügen.

### Schreiben eines Handlers, der die Abdunkel-/Aufhell-Taste ausführt

Es bleibt nur noch unser Abdunkel-/Aufhell-`<button>` — wir haben bereits eine Zeile bereitgestellt, die eine Referenz zum `<button>` in einer Konstanten namens `btn` speichert. Sie müssen einen Klick-Ereignislistener hinzufügen, der:

1. Den aktuellen Klassennamen des `<button>` überprüft — Sie können dies erneut mit `getAttribute()` erreichen.
2. Wenn der Klassenname `"dark"` ist, ändern Sie die `<button>`-Klasse auf `"light"` (mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), seinen Textinhalt auf "Lighten" und die {{cssxref("background-color")}} des Überlagerungs-`<div>` auf `"rgb(0 0 0 / 50%)"`.
3. Wenn der Klassenname nicht `"dark"` ist, ändern Sie die `<button>`-Klasse auf `"dark"`, seinen Textinhalt zurück auf "Darken" und die {{cssxref("background-color")}} des Überlagerungs-`<div>` auf `"rgb(0 0 0 / 0%)"`.

Die folgenden Zeilen bieten eine Grundlage für die Änderungen, die in den Punkten 2 und 3 oben gefordert werden.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
