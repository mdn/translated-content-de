---
title: transform-origin
slug: Web/SVG/Reference/Attribute/transform-origin
l10n:
  sourceCommit: aac74d5f09e3f557b9166633fb247bf7c5358d5e
---

Das SVG-Attribut **`transform-origin`** legt den Ursprung für die Transformationen eines Elements fest.

Dieses Attribut kann mit jedem SVG-Element verwendet werden.

> [!NOTE]
> Als Präsentationsattribut hat `transform-origin` auch ein entsprechendes CSS-Attribut: {{cssxref("transform-origin")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Werte</strong></td>
      <td>Siehe {{cssxref("transform-origin", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <td><strong>Standardwert</strong></td>
      <td><code>0 0</code></td>
    </tr>
    <tr>
      <td><strong>Animierbar</strong></td>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Der Standardwert von `transform-origin` ist `0 0` für alle SVG-Elemente, außer für Wurzel-`<svg>`-Elemente und `<svg>`-Elemente, die ein direktes Kind eines [`foreignObject`](/de/docs/Web/SVG/Reference/Element/foreignObject) sind. Diese Elemente haben `transform-origin: 50% 50%`, wie in normalem CSS.

Angegebene Längen, Prozentsätze und Schlüsselwörter (`left`, `center`, `right`, `top` und `bottom`) sind alle relativ zur [Referenzbox](/de/docs/Web/CSS/Reference/Properties/transform-box). Da der Standardwert für `transform-box` `view-box` ist, sind die Koordinaten des Transformationsursprungs relativ zum `viewBox` des SVG-Elements, es sei denn, das Element selbst hat eine zugehörige CSS-Layout-Box.

## Beispiele

Die folgenden Beispiele demonstrieren die Drehung eines rechteckigen Kastens um 30° um eine Anzahl verschiedener `transform-origin`s.
Das SVG wird in jedem Fall mit dem ursprünglichen Kasten gezeichnet, der mit einer gestrichelten roten Umrandung versehen ist, gefolgt von dem gedrehten Kasten, der in Lime gezeichnet ist, und dann der `transform-origin`, der als roter Fadenkreuzmarker gezeichnet ist.

### Standard transform-origin

Standardmäßig hat `transform-origin` den Wert `0 0`, was ihn am Ursprung des `viewBox` platziert. Unten erweitern wir den `viewBox` auf negative Werte, sodass Sie den vollständigen Fadenkreuzmarker sehen können, und bemerken auch, dass es nicht immer die obere linke Ecke des `<svg>`-Elements sein muss.

```html
<svg
  viewBox="-10 -10 300 300"
  xmlns="http://www.w3.org/2000/svg"
  width="310"
  height="310">
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="none"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="3 3" />
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="lime"
    opacity="0.5"
    transform="rotate(30)" />
  <g transform="translate(0 0)">
    <circle cx="0" cy="0" r="3" fill="red" opacity="0.5" />
    <path d="M -8 0 h 16 m -8 -8 v 16" fill="none" stroke="red" />
    <circle cx="0" cy="0" r="6" fill="none" stroke="red" />
  </g>
</svg>
```

{{ EmbedLiveSample('default_transform-origin', 400, 310) }}

### Zentrum transform-origin

Unten setzen wir `transform-origin` auf `center`, was den Ursprung in die Mitte des `viewBox` platziert, jedoch nicht in die Mitte des Elements, das transformiert wird.

```html
<svg
  viewBox="-10 -10 300 300"
  xmlns="http://www.w3.org/2000/svg"
  width="310"
  height="310">
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="none"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="3 3" />
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="lime"
    opacity="0.5"
    transform="rotate(30)"
    transform-origin="center" />
  <g transform="translate(150 150)">
    <circle cx="0" cy="0" r="3" fill="red" opacity="0.5" />
    <path d="M -8 0 h 16 m -8 -8 v 16" fill="none" stroke="red" />
    <circle cx="0" cy="0" r="6" fill="none" stroke="red" />
  </g>
</svg>
```

{{ EmbedLiveSample('center_transform-origin', 400, 310) }}

### transform-origin relativ zum transformierten Element

Um `transform-origin` relativ zum transformierten Element zu machen, können Sie die Eigenschaft `transform-box` verwenden. Unten setzen wir `transform-box` auf `fill-box`, was den `transform-origin` relativ zum Begrenzungsrahmen des Elements macht, das transformiert wird.

```html
<svg
  viewBox="-10 -10 300 300"
  xmlns="http://www.w3.org/2000/svg"
  width="310"
  height="310">
  <rect
    x="60"
    y="10"
    width="180"
    height="180"
    fill="none"
    stroke="red"
    stroke-width="3"
    stroke-dasharray="3 3" />
  <rect
    class="transformed-elem"
    x="60"
    y="10"
    width="180"
    height="180"
    fill="lime"
    opacity="0.5"
    transform="rotate(30)"
    transform-origin="center" />
  <g transform="translate(150 100)">
    <circle cx="0" cy="0" r="3" fill="red" opacity="0.5" />
    <path d="M -8 0 h 16 m -8 -8 v 16" fill="none" stroke="red" />
    <circle cx="0" cy="0" r="6" fill="none" stroke="red" />
  </g>
</svg>
```

```css
.transformed-elem {
  transform-box: fill-box;
}
```

{{ EmbedLiveSample('transform-origin relative to the transformed element', 400, 310) }}

Sehen Sie sich CSS {{cssxref("transform-origin")}} für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("transform-origin")}} Eigenschaft
