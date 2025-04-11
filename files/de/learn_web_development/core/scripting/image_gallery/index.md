---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Jetzt, da wir die grundlegenden Bausteine von JavaScript betrachtet haben, werden wir Ihr Wissen über Schleifen, Funktionen, Bedingungen und Ereignisse testen, indem wir Sie dazu bringen, ein ziemlich häufiges Element zu erstellen, das Sie auf vielen Websites sehen werden — eine von JavaScript gesteuerte Bildergalerie.

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, sollten Sie die [ZIP-Datei holen](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip) für das Beispiel, sie irgendwo auf Ihrem Computer entpacken und die Übung zunächst lokal durchführen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Wenn Sie steckenbleiben, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektbeschreibung

Sie haben einige HTML-, CSS- und Bildressourcen und ein paar Zeilen JavaScript-Code erhalten; Sie müssen den notwendigen JavaScript-Code schreiben, um dies in ein funktionierendes Programm zu verwandeln. Der HTML-Body sieht folgendermaßen aus:

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

- Es positioniert die drei Elemente innerhalb des `full-img <div>` absolut — das `<img>`, in dem das vollformatige Bild angezeigt wird, ein leeres `<div>`, das so bemessen ist, dass es dieselbe Größe wie das `<img>` hat und direkt darüber liegt (dies wird verwendet, um einen Abdunklungseffekt auf das Bild anzuwenden, indem eine halbtransparente Hintergrundfarbe genutzt wird), und ein `<button>`, das zur Steuerung des Abdunklungseffekts verwendet wird.
- Es setzt die Breite aller Bilder innerhalb des `thumb-bar <div>` (sogenannte "Thumbnail"-Bilder) auf 20 % und lässt sie links floaten, sodass sie nebeneinander auf einer Linie sitzen.

Ihr JavaScript muss:

- Ein `const`-Array deklarieren, das die Dateinamen jedes Bildes auflistet, wie `'pic1.jpg'`.
- Ein `const`-Objekt deklarieren, das die alternativen Texte für jedes Bild auflistet.
- Durch das Array der Dateinamen laufen und für jedes Bild ein `<img>`-Element innerhalb des `thumb-bar <div>` einfügen, das dieses Bild zusammen mit seinem alternativen Text auf der Seite einbettet.
- Ein Klick-Ereignislistener zu jedem `<img>` innerhalb des `thumb-bar <div>` hinzufügen, sodass, wenn darauf geklickt wird, das entsprechende Bild und der alternative Text im `displayed-img <img>`-Element angezeigt werden.
- Ein Klick-Ereignislistener zum `<button>` hinzufügen, sodass beim Klicken ein Abdunklungseffekt auf das Vollbild angewendet wird. Beim erneuten Klicken wird der Abdunklungseffekt wieder entfernt.

Um Ihnen eine bessere Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) an (nicht im Quellcode schmökern!).

## Schritte zur Vervollständigung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Ein Array von Bilddateinamen deklarieren

Sie müssen ein Array erstellen, das die Dateinamen aller Bilder auflistet, die in die Galerie aufgenommen werden sollen. Das Array sollte als Konstante deklariert werden.

### Durch die Bilder schleifen

Wir haben Ihnen bereits Zeilen zur Verfügung gestellt, die eine Referenz auf die `thumb-bar <div>` in einer Konstante namens `thumbBar` speichern, ein neues `<img>`-Element erstellen, dessen `src`- und `alt`-Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>`-Element innerhalb `thumbBar` anhängen.

Sie müssen:

1. Den Abschnitt des Codes unter dem Kommentar "Looping through images" in eine Schleife setzen, die durch alle Dateinamen im Array läuft.
2. In jeder Schleifeniteration die Platzhalterwerte `xxx` durch einen String ersetzen, der dem Pfad zu dem Bild und den Alt-Attributen in jedem Fall entspricht. Setzen Sie den Wert der `src`- und `alt`-Attribute auf diese Werte in jedem Fall. Denken Sie daran, dass das Bild sich im Verzeichnis images befindet und sein Name `pic1.jpg`, `pic2.jpg` usw. ist.

### Einen Klick-Ereignislistener zu jedem Thumbnail-Bild hinzufügen

In jeder Schleifeniteration müssen Sie einen Klick-Ereignislistener zum aktuellen `newImage` hinzufügen — dieser Listener sollte den Wert des `src`-Attributs des aktuellen Bildes ermitteln. Setzen Sie den `src`-Attributwert des `displayed-img <img>` auf den `src`-Wert, der als Parameter übergeben wurde. Machen Sie dasselbe für das `alt`-Attribut.

Alternativ können Sie einen Ereignislistener zur Thumbnail-Leiste hinzufügen.

### Einen Handler schreiben, der den Abdunkeln/Erhellen-Button ausführt

Das lässt nur noch unseren Abdunkeln/Erhellen `<button>` — wir haben Ihnen bereits eine Zeile zur Verfügung gestellt, die eine Referenz auf den `<button>` in einer Konstanten namens `btn` speichert. Sie müssen einen Klick-Ereignislistener hinzufügen, der:

1. Den aktuellen Klassennamen, der auf den `<button>` gesetzt ist, überprüft — dies können Sie erneut erreichen, indem Sie `getAttribute()` verwenden.
2. Wenn der Klassenname `"dark"` ist, ändern Sie die `<button>`-Klasse in `"light"` (mithilfe von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), seinen Textinhalt zu "Erhellen", und die {{cssxref("background-color")}} des Overlay-`<div>` auf `"rgb(0 0 0 / 50%)"`.
3. Wenn der Klassenname nicht `"dark"` ist, ändern Sie die `<button>`-Klasse in `"dark"`, seinen Textinhalt zurück zu "Abdunkeln", und die {{cssxref("background-color")}} des Overlay-`<div>` auf `"rgb(0 0 0 / 0%)"`.

Die folgenden Zeilen bieten eine Grundlage zur Erreichung der in den Punkten 2 und 3 oben festgelegten Änderungen.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen HTML oder CSS in keiner Weise bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
