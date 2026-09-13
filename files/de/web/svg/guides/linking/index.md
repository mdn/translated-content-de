---
title: Verlinkung
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: dc57f9007e4cf2dec26f945d7773a68ffe60348f
---

SVG ermöglicht drei Arten der Verlinkung:

- Verlinkung aus einem SVG heraus, um zu einer neuen Ressource zu navigieren.
- Referenzierung einer SVG-Ressource oder einer benannten Ansicht darin zur Anzeige in einem `<img>`, einem anderen Element oder über CSS.
- Referenzierung eines SVG-Elements zur Wiederverwendung innerhalb des aktuellen SVG. Das Element kann im selben SVG oder in einem externen SVG definiert sein.

Dieser Leitfaden behandelt alle drei Arten.

## Aus einem SVG-Dokument heraus verlinken

Das SVG-Element {{svgelement("a")}} erstellt einen Hyperlink, ähnlich wie das HTML-Element {{htmlelement("a")}}. In SVG ist es ein Container, sodass Sie es um eine einzelne Form, eine Textzeichenfolge oder eine ganze {{svgelement("g")}}-Gruppe legen können und die gesamte umschlossene Grafik anklickbar wird.

Das Ziel wird im Attribut {{svgattr("href")}} angegeben:

```html
<a href="https://example.com/">
  <circle cx="50" cy="50" r="40" />
</a>
```

In älterem Code kann Ihnen {{svgattr("xlink:href")}} als Zielangabe begegnen. Dieses Attribut ist veraltet: Verwenden Sie stattdessen einfaches `href`.

Das SVG-Element `<a>` akzeptiert außerdem die Attribute {{svgattr("download")}}, `hreflang`, `ping`, `referrerpolicy`, `rel` und `type`, entsprechend dem HTML-Element `<a>`. Die Unterstützung dafür hinkt den HTML-Versionen hinterher und unterscheidet sich von Attribut zu Attribut. Prüfen Sie daher die [Browser-Kompatibilitätstabelle](/de/docs/Web/SVG/Reference/Element/a#browser_compatibility) für `<a>`, bevor Sie sich auf eines davon verlassen.

Anders als HTML verleiht SVG Links kein Standardaussehen: Eine verlinkte Form oder Textzeichenfolge sieht genauso aus wie eine nicht verlinkte. Gestalten Sie die Linkzustände selbst mit CSS, damit der Link auffindbar und sein Fokuszustand sichtbar ist.

### Verlinkte Form und Text

Dieses Beispiel verlinkt einen Kreis und eine Textbeschriftung und verwendet CSS, um beiden einen Hover- und Fokuszustand zu geben.

```html
<svg
  viewBox="0 0 220 100"
  width="220"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com/">
    <title>A circle element</title>
    <circle cx="50" cy="50" r="40" />
  </a>

  <a href="https://example.com/">
    <text x="110" y="56">Text link</text>
  </a>
</svg>
```

Da eine Form keinen Text für assistive Technologien enthält, geben wir dem Kreislink mit einem {{svgelement("title")}}-Element innerhalb von `<a>` einen barrierefreien Namen.

Das folgende CSS gibt beiden Links eine Standardfüllfarbe und ändert diese Farbe bei Hover und bei Tastaturfokus. {{cssxref("outline")}} verleiht dem Fokus einen zweiten, nicht auf Farbe basierenden Indikator, und die Änderung von {{cssxref("fill")}} sorgt dafür, dass der Fokuszustand auch dort sichtbar bleibt, wo `outline` nicht auf SVG-Elementen gerendert wird.

```css
a circle,
a text {
  fill: steelblue;
}

a text {
  text-decoration: underline;
}

a:hover circle,
a:focus-visible circle,
a:hover text,
a:focus-visible text {
  fill: crimson;
}

a:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}
```

Bewegen Sie den Mauszeiger über einen der Links oder drücken Sie <kbd>Tab</kbd>, um ihm den Tastaturfokus zu geben:

{{EmbedLiveSample("Linked_shape_and_text", "100%", 130)}}

### Das Linkfenster `target` festlegen

Das Attribut {{svgattr("target")}} benennt den Browsing-Kontext, in dem das verlinkte Dokument geöffnet werden soll: `_self` (der Standard), `_blank`, `_parent` oder `_top`.

Dies ist besonders wichtig, wenn das SVG mit {{htmlelement("object")}}, {{htmlelement("iframe")}} oder {{htmlelement("embed")}} in eine HTML-Seite eingebettet ist. Ein solches SVG ist ein separates Dokument in seinem eigenen Browsing-Kontext, sodass die verlinkte Seite standardmäßig _innerhalb_ dieses eingebetteten Frames geladen wird. Da der Frame normalerweise auf die Grafikgröße festgelegt ist und möglicherweise nur wenige Pixel breit ist, wird die neue Seite gescrollt und so stark abgeschnitten angezeigt, dass sie nicht verwendbar ist. Fügen Sie stattdessen `target="_top"` hinzu, um die gesamte Seite zu ersetzen.

In `page1.html`:

```html
<p>This is an SVG button:</p>
<object width="100" height="50" type="image/svg+xml" data="button.svg"></object>
```

In `button.svg`:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
  <a href="page2.html" target="_top">
    <title>Go to page 2</title>
    <rect width="100" height="50" fill="steelblue" />
    <text x="50" y="30" fill="white" text-anchor="middle">Page 2</text>
  </a>
</svg>
```

Verwenden Sie `target="_parent"`, um nur das unmittelbar enthaltende Dokument zu ersetzen. Dies unterscheidet sich von `_top`, wenn das SVG mehr als eine Frame-Ebene tief verschachtelt ist.

> [!NOTE]
> Links sind nur aktiv, während das SVG als Dokument angezeigt wird — inline in HTML oder eingebettet mit `<object>`, `<iframe>` oder `<embed>`. Wenn ein SVG als Bild verwendet wird, mit {{htmlelement("img")}}, dem SVG-Element {{svgelement("image")}} oder einer CSS-Eigenschaft wie {{cssxref("background-image")}}, wird es in einem sicheren, nicht interaktiven Modus gerendert: Links können nicht aktiviert werden und Skripte werden nicht ausgeführt. Siehe [SVG als Bild](/de/docs/Web/SVG/Guides/SVG_as_an_image).

## In ein SVG-Dokument hinein verlinken

Das Anhängen eines Fragmentbezeichners an eine SVG-URL ermöglicht es einem Link oder einem Einbettungselement, auszuwählen, welcher Teil der Grafik angezeigt wird. Auf diese Weise können Sie in ein SVG zuschneiden oder hineinzoomen, ohne die Datei zu bearbeiten oder mehrere Kopien davon bereitzustellen.

### Benannte Ansichten mit `<view>`

Das Element {{svgelement("view")}} definiert eine „benannte Ansicht“: einen Teil eines SVG, auf den über sein Attribut `id` verwiesen werden kann. Das Element akzeptiert ein Attribut {{svgattr("viewBox")}} und optional ein Attribut {{svgattr("preserveAspectRatio")}}, die die entsprechenden Attribute auf dem Wurzelelement {{svgelement("svg")}} überschreiben, wenn die {{svgattr("id")}}-Ansicht als URL-Fragment verwendet wird.

In `shapes.svg`:

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <view id="first" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="second" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view
    id="third"
    viewBox="200 0 100 100"
    preserveAspectRatio="xMidYMid meet" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

Die Referenzierung von `shapes.svg#third` zeigt jetzt nur den blauen Kreis:

```html
<img src="shapes.svg" width="300" height="100" alt="Three circles" />
<img src="shapes.svg#third" width="100" height="100" alt="A blue circle" />
```

Dasselbe Fragment funktioniert überall dort, wo die URL der Datei erscheint, einschließlich eines `<a href>`, das auf die SVG-Datei verweist, eines `<iframe>` und CSS-Referenzen mit {{cssxref("url_function", "url()")}}.

### In der URL mit `svgView()` definierte Ansichten

Wenn Sie die SVG-Datei nicht bearbeiten können, um ein `<view>`-Element hinzuzufügen, können Sie die Ansicht direkt im Fragment selbst mit der `svgView()`-Syntax angeben, indem Sie `viewBox()` und optional `preserveAspectRatio()` übergeben:

```plain
shapes.svg#svgView(viewBox(200,0,100,100))
shapes.svg#svgView(viewBox(200,0,100,100);preserveAspectRatio(xMidYMid))
```

Ein solches Fragment wird überall dort verwendet, wo die URL der Datei verwendet wird. Beide Beispiele beschneiden dieselbe `shapes.svg` auf ihren blauen Kreis, ohne dass die Datei dafür ein `<view>` deklariert:

```html
<img
  src="shapes.svg#svgView(viewBox(200,0,100,100))"
  width="100"
  height="100"
  alt="A blue circle" />
```

```css
.blue-circle {
  width: 100px;
  height: 100px;
  background-image: url("shapes.svg#svgView(viewBox(200,0,100,100))");
}
```

Setzen Sie die URL in CSS in Anführungszeichen: Ein nicht in Anführungszeichen gesetztes {{cssxref("url_function", "url()")}} kann nicht die Klammern enthalten, die `svgView()` benötigt.

Bevorzugen Sie eine benannte `<view>`, wenn Sie die Datei kontrollieren: Sie hält die Ansichtsdefinition bei der Grafik, und sie kann geändert werden, ohne jede URL aktualisieren zu müssen, die darauf verweist.

## Inhalte innerhalb eines Dokuments referenzieren

Die dritte Art von Link ist intern: SVG-Elemente verweisen per ID auf andere Elemente im selben Dokument oder in einem externen Dokument.

- {{svgelement("use")}} zeichnet ein an anderer Stelle definiertes Element: `<use href="#icon" />`. Die Referenz kann auch extern sein, was die Grundlage des SVG-Sprite-Musters ist: `<use href="icons.svg#search" />`.
- Farbverläufe, Muster, Filter, Masken und Beschneidungspfade werden mit der CSS-Funktion {{cssxref("url_function", "url()")}} referenziert, entweder über ein Präsentationsattribut oder über CSS: `fill="url(#gradient)"`, `filter="url(#blur)"`, `clip-path: url(#clip-shape)`.
- {{svgelement("textPath")}} legt Text entlang eines Pfads an, auf den mit `href` verwiesen wird, und {{svgelement("mpath")}} übernimmt auf dieselbe Weise seinen Bewegungspfad.

Für Referenzen, die das Dokument verlassen, gelten einige Einschränkungen:

- Externe Referenzen müssen denselben [Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das referenzierende Dokument haben. Es gibt keine Möglichkeit, sich für eine Cross-Origin-Referenz zu entscheiden.
- `<use>` mit einer externen Datei wird umfassend unterstützt, `<use>`, das auf eine `data:`-URL verweist, jedoch nicht: Browser, die dies früher erlaubten, haben die Unterstützung inzwischen entfernt. Siehe die [Browser-Kompatibilitätstabelle](/de/docs/Web/SVG/Reference/Element/use#browser_compatibility) für `<use>`.
- Die Benennung der externen Datei ohne Fragment, um ihr Wurzelelement einzubinden, wird nicht überall unterstützt. Geben Sie immer einen Fragmentbezeichner an, der das gewünschte Element benennt.
- Das Referenzieren eines externen SVG aus den CSS-Eigenschaften {{cssxref("filter")}}, {{cssxref("mask")}} und {{cssxref("clip-path")}} wird weniger umfassend unterstützt als die SVG-Attribute. Prüfen Sie die Kompatibilitätstabelle für die Funktion, die Sie verwenden möchten.

## Siehe auch

- SVG-Elemente {{svgelement("a")}}, {{svgelement("use")}} und {{svgelement("view")}}
- SVG-Attribute {{svgattr("href")}} und {{svgattr("target")}}
- HTML-Element {{htmlelement("a")}}
- [SVG als Bild](/de/docs/Web/SVG/Guides/SVG_as_an_image)
- [SVG und CSS](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
