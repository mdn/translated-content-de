---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns nun mit den grundlegenden Bausteinen von JavaScript befasst haben, werden wir Ihr Wissen über Schleifen, Funktionen, Bedingungen und Ereignisse testen, indem Sie einen ziemlich häufigen Gegenstand erstellen, den Sie auf vielen Websites sehen – eine JavaScript-gestützte Bildergalerie.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie [das ZIP herunterladen](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip), es irgendwo auf Ihrem Computer entpacken und die Übung lokal durchführen, um zu beginnen.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

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

![Eine Bildergalerie mit einem großen Bild oben und fünf Miniaturansichten darunter](gallery.png)

Die interessantesten Teile der CSS-Datei des Beispiels:

- Sie positioniert die drei Elemente innerhalb des `full-img <div>` absolut – das `<img>`, in dem das Bild in voller Größe angezeigt wird, ein leeres `<div>`, das auf die gleiche Größe wie das `<img>` skaliert ist und direkt darüber gelegt wird (dies wird verwendet, um einen Abdunklungseffekt auf das Bild mit einer halbtransparenten Hintergrundfarbe anzuwenden), und ein `<button>`, der verwendet wird, um den Abdunklungseffekt zu steuern.
- Sie setzt die Breite aller Bilder innerhalb des `thumb-bar <div>` (sogenannte "Thumbnail"-Bilder) auf 20 % und ordnet sie mit `float` links an, sodass sie nebeneinander auf einer Linie sitzen.

Ihr JavaScript muss:

- Ein `const` Array deklarieren, das die Dateinamen jedes Bildes auflistet, wie beispielsweise `'pic1.jpg'`.
- Ein `const` Objekt deklarieren, das den Alternativtext für jedes Bild auflistet.
- Durch das Array der Dateinamen schleifen und für jeden ein `<img>` Element innerhalb des `thumb-bar <div>` einfügen, das dieses Bild auf der Seite einbettet zusammen mit seinem Alternativtext.
- Einen Klick-Ereignislistener zu jedem `<img>` innerhalb des `thumb-bar <div>` hinzufügen, sodass, wenn sie angeklickt werden, das entsprechende Bild und der Alternativtext im `displayed-img <img>` Element angezeigt werden.
- Einen Klick-Ereignislistener zum `<button>` hinzufügen, sodass bei einem Klick ein Abdunklungseffekt auf das Bild in voller Größe angewendet wird. Bei einem erneuten Klick wird der Abdunklungseffekt wieder entfernt.

Um Ihnen eine genauere Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) an (aber sehen Sie sich den Quellcode nicht an!).

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

## Ein Array von Bilddateinamen deklarieren

Sie müssen ein Array erstellen, das die Dateinamen aller Bilder auflistet, die in der Galerie enthalten sein sollen. Das Array sollte als Konstante deklariert werden.

### Durch die Bilder schleifen

Wir haben Ihnen bereits Zeilen zur Verfügung gestellt, die eine Referenz auf das `thumb-bar <div>` in einer Konstanten namens `thumbBar` speichern, ein neues `<img>` Element erstellen, seine `src` und `alt` Attribute auf einen Platzhalterwert `xxx` setzen und dieses neue `<img>` Element innerhalb von `thumbBar` anhängen.

Sie müssen:

1. Den Abschnitt des Codes unter dem Kommentar "Durch die Bilder schleifen" in eine Schleife setzen, die durch alle Dateinamen im Array geht.
2. In jeder Schleifeniteration die Platzhalterwerte `xxx` mit einem String ersetzen, der dem Pfad zum Bild und den alternativen Attributen in jedem Fall entspricht. Setzen Sie den Wert der `src` und `alt` Attribute auf diese Werte in jedem Fall. Denken Sie daran, dass das Bild im images-Verzeichnis ist und sein Name `pic1.jpg`, `pic2.jpg` usw. ist.

### Einen Klick-Ereignislistener zu jedem Vorschaubild hinzufügen

In jeder Schleifeniteration müssen Sie einen Klick-Ereignislistener zum aktuellen `newImage` hinzufügen – dieser Listener sollte den Wert des `src` Attributs des aktuellen Bildes finden. Setzen Sie den `src` Attributwert des `displayed-img <img>` auf den `src` Wert, der als Parameter übergeben wird. Tun Sie dasselbe für das `alt` Attribut.

Alternativ können Sie einen Ereignislistener zur Thumbnail-Leiste hinzufügen.

### Schreiben eines Handlers, der den Abdunkelungs-/Aufhellungsknopf ausführt

Das lässt nur noch unseren Abdunkelungs-/Aufhellungs-`<button>` übrig – wir haben bereits eine Zeile bereitgestellt, die eine Referenz auf den `<button>` in einer Konstanten namens `btn` speichert. Sie müssen einen Klick-Ereignislistener hinzufügen, der:

1. Den aktuellen Klassennamen des `<button>` überprüft – Sie können dies erneut durch Verwendung von `getAttribute()` erreichen.
2. Wenn der Klassenname `"dark"` ist, ändern Sie die `<button>` Klasse zu `"light"` (mithilfe von [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)), den Textinhalt auf "Lighten" und die {{cssxref("background-color")}} des Überlagerungs-`<div>` zu `"rgb(0 0 0 / 50%)"`.
3. Wenn der Klassenname nicht `"dark"` ist, ändern Sie die `<button>` Klasse wieder zu `"dark"`, den Textinhalt zurück zu "Darken" und die {{cssxref("background-color")}} des Überlagerungs-`<div>` zu `"rgb(0 0 0 / 0%)"`.

Die folgenden Zeilen bieten eine Grundlage, um die in den Punkten 2 und 3 oben genannten Änderungen zu erzielen.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hinweise und Tipps

- Sie müssen das HTML oder CSS in keiner Weise bearbeiten.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
