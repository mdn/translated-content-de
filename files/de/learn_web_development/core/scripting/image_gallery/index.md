---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns die grundlegenden Bausteine von JavaScript angesehen haben, testen wir nun Ihr Wissen über Schleifen, Funktionen, Bedingungen und Ereignisse, indem wir Sie dazu bringen, ein ziemlich verbreitetes Element zu erstellen, das Sie auf vielen Websites finden werden — eine von JavaScript betriebene Bildergalerie.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie sich die [ZIP-Datei herunterladen](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip), sie irgendwo auf Ihrem Computer entpacken und die Übung zunächst lokal durchführen.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

> [!NOTE]
> Sollten Sie stecken bleiben, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Verbindung setzen.

## Projektbeschreibung

Es wurden Ihnen einige HTML-, CSS- und Bildressourcen sowie ein paar Zeilen JavaScript-Code zur Verfügung gestellt. Sie müssen den erforderlichen JavaScript-Code schreiben, um dies in ein funktionierendes Programm zu verwandeln. Der HTML-Body sieht folgendermaßen aus:

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

So sieht das Beispiel aus:

![Eine Bildergalerie mit einem großen Bild oben und fünf Miniaturansichten darunter](gallery.png)

Die interessantesten Teile der CSS-Datei des Beispiels:

- Es positioniert die drei Elemente innerhalb des `full-img <div>` absolut — das `<img>`, in dem das vollformatige Bild angezeigt wird, ein leeres `<div>`, das auf die gleiche Größe wie das `<img>` formatiert ist und direkt darüber platziert ist (dies wird verwendet, um einen Abdunklungseffekt auf das Bild durch eine halbtransparente Hintergrundfarbe anzuwenden) und ein `<button>`, das zur Steuerung des Abdunklungseffekts verwendet wird.
- Es setzt die Breite aller Bilder innerhalb des `thumb-bar <div>` (sogenannte "Thumbnail"-Bilder) auf 20 % und setzt sie nach links, damit sie nebeneinander in einer Zeile liegen.

Ihr JavaScript muss:

- Ein `const` Array deklarieren, das die Dateinamen jedes Bildes auflistet, z.B. `'pic1.jpg'`.
- Ein `const` Objekt deklarieren, das den Alternativtext für jedes Bild auflistet.
- Durch das Array der Dateinamen schleifen und für jedes Bild ein `<img>` Element innerhalb des `thumb-bar <div>` einfügen, das dieses Bild in die Seite einbettet, zusammen mit seinem Alternativtext.
- Ein Klick-Ereignislistener für jedes `<img>` innerhalb des `thumb-bar <div>` hinzufügen, damit beim Anklicken das entsprechende Bild und der Alternativtext im `displayed-img <img>` Element angezeigt werden.
- Einen Klick-Ereignislistener auf den `<button>` hinzufügen, sodass beim Klick ein Abdunklungseffekt auf das Bild in voller Größe angewendet wird. Wenn erneut geklickt wird, wird der Abdunklungseffekt wieder entfernt.

Um Ihnen eine bessere Vorstellung zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) (nicht in den Quellcode schauen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Deklarieren Sie ein Array mit Bilddateinamen

Sie müssen ein Array erstellen, das die Dateinamen aller Bilder auflistet, die in die Galerie aufgenommen werden sollen. Das Array sollte als Konstante deklariert werden.

### Durch die Bilder schleifen

Wir haben Ihnen bereits Zeilen zur Verfügung gestellt, die eine Referenz auf die `thumb-bar <div>` in einer Konstante namens `thumbBar` speichern, ein neues `<img>` Element erstellen, dessen `src` und `alt` Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>` Element innerhalb `thumbBar` anhängen.

Sie müssen:

1. Den Codeabschnitt unter dem Kommentar "Durch Bilder schleifen" in eine Schleife setzen, die durch alle Dateinamen im Array schleift.
2. In jeder Schleifeniteration die Platzhalterwerte `xxx` durch einen String ersetzen, der dem Pfad zum Bild und den Alt-Attributen in jedem Fall entspricht. Setzen Sie den Wert der `src` und `alt` Attribute in jedem Fall auf diese Werte. Denken Sie daran, dass sich das Bild im Verzeichnis images befindet und seinen Namen `pic1.jpg`, `pic2.jpg` usw. hat.

### Hinzufügen eines Klick-Ereignislisteners zu jedem Thumbnail-Bild

In jeder Schleifeniteration müssen Sie einen Klick-Ereignislistener zum aktuellen `newImage` hinzufügen — dieser Listener sollte den Wert des `src` Attributs des aktuellen Bildes finden. Setzen Sie den `src` Attributwert des `displayed-img <img>` auf den `src` Wert, der als Parameter übergeben wird. Machen Sie dasselbe für das `alt` Attribut.

Alternativ können Sie einen Ereignislistener zur Thumbnail-Leiste hinzufügen.

### Schreiben eines Handlers, der den Abdunkeln/Erhellen-Button ausführt

Das Einzige, was noch übrig bleibt, ist unser Abdunkeln/Erhellen `<button>` — wir haben bereits eine Zeile bereitgestellt, die eine Referenz auf den `<button>` in einer Konstante namens `btn` speichert. Sie müssen einen Klick-Ereignislistener hinzufügen, der:

1. Den aktuellen Klassennamen des `<button>` überprüft — auch das können Sie mit `getAttribute()` erreichen.
2. Wenn der Klassenname `"dark"` ist, die `<button>` Klasse in `"light"` ändern (mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), den Textinhalt auf "Lighten" ändern und die {{cssxref("background-color")}} des Overlay `<div>` auf `"rgb(0 0 0 / 50%)"` setzen.
3. Wenn der Klassenname nicht `"dark"` ist, die `<button>` Klasse in `"dark"` ändern, den Textinhalt zurück auf "Darken" setzen und die {{cssxref("background-color")}} des Overlay `<div>` auf `"rgb(0 0 0 / 0%)"` setzen.

Die folgenden Zeilen bieten eine Grundlage, um die in den Punkten 2 und 3 geforderten Änderungen zu erreichen.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen weder das HTML noch das CSS in irgendeiner Weise bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
