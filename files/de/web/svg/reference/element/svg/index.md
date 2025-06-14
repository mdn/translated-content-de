---
title: <svg>
slug: Web/SVG/Reference/Element/svg
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<svg>`** [SVG](/de/docs/Web/SVG) Element ist ein Container, der ein neues Koordinatensystem und einen [Viewport](/de/docs/Web/SVG/Reference/Attribute/viewBox) definiert. Es wird als äußerstes Element von SVG-Dokumenten verwendet, kann aber auch verwendet werden, um ein SVG-Fragment in ein SVG- oder HTML-Dokument einzubetten.

> [!NOTE]
> Das `xmlns` Attribut ist nur beim äußersten `svg` Element von _SVG-Dokumenten_ erforderlich oder innerhalb von HTML-Dokumenten mit XML-Serialisierung. Es ist nicht notwendig für innere `svg` Elemente oder innerhalb von HTML-Dokumenten mit HTML-Serialisierung.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("baseProfile")}} {{deprecated_inline}}
  - : Das minimale SVG-Sprachprofil, das das Dokument benötigt.
    _Wertetyp_: **\<string>**; _Standardwert_: keiner; _Animierbar_: **nein**
- {{SVGAttr("height")}}
  - : Die angezeigte Höhe des rechteckigen Viewports. (Nicht die Höhe seines Koordinatensystems.)
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("preserveAspectRatio")}}
  - : Wie das `svg` Fragment verzerrt werden muss, wenn es mit einem anderen {{Glossary("aspect_ratio", "Seitenverhältnis")}} angezeigt wird.
    _Wertetyp_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("version")}} {{deprecated_inline}}
  - : Welche SVG-Version für den inneren Inhalt des Elements verwendet wird.
    _Wertetyp_: **[\<number>](/de/docs/Web/SVG/Guides/Content_type#number)**; _Standardwert_: keiner; _Animierbar_: **nein**
- {{SVGAttr("viewBox")}}
  - : Die SVG-Viewport-Koordinaten für das aktuelle SVG-Fragment.
    _Wertetyp_: **[\<list-of-numbers>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die angezeigte Breite des rechteckigen Viewports. (Nicht die Breite seines Koordinatensystems.)
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Der angezeigte x-Koordinate des svg-Containers. Keine Auswirkung auf äußerste `svg` Elemente.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Der angezeigte y-Koordinate des svg-Containers. Keine Auswirkung auf äußerste `svg` Elemente.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) Schnittstelle.

## Beispiele

### Verschachteltes `svg` Element

Dieses Beispiel zeigt, dass verschachtelte `svg` Elemente das `xmlns` Attribut nicht benötigen.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 300 100"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('nested_svg-elements', 300, 100)}}

### Verwendung dynamischer Viewport-Einheiten

In diesem Beispiel werden die Attribute `height` und `width` des `svg` Elements mit dem dynamischen Viewport-Wert `60vmin` festgelegt, was 60 % der Breite oder Höhe des Viewports entspricht, je nachdem, was kleiner ist.

```html hidden
<div class="resizer">
  <iframe
    class="resized"
    srcdoc='
```

```html
<svg
  viewBox="0 0 400 400"
  xmlns="http://www.w3.org/2000/svg"
  height="60vmin"
  width="60vmin">
  <rect x="0" y="0" width="50%" height="50%" fill="tomato" opacity="0.75" />
  <rect
    x="25%"
    y="25%"
    width="50%"
    height="50%"
    fill="slategrey"
    opacity="0.75" />
  <rect x="50%" y="50%" width="50%" height="50%" fill="olive" opacity="0.75" />
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    stroke="cadetblue"
    stroke-width="0.5%"
    fill="none" />
</svg>
```

```html hidden
  '></iframe>
</div>
```

```css hidden
.resizer {
  display: flex;
  margin: 1rem;
  padding: 0;
  resize: both;
  overflow: hidden;
  border: 5px dotted red;
  height: 400px;
}
.resizer > .resized {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: 0;
}
```

{{EmbedLiveSample('using_dynamic_viewport_lengths', '100%', 500)}}

Um die Abmessungen des iframes zu ändern, versuchen Sie, den gepunkteten roten Rahmen von der unteren rechten Ecke aus zu vergrößern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
