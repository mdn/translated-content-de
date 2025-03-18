---
title: transform-origin
slug: Web/SVG/Reference/Attribute/transform-origin
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{SVGRef()}}

Das **`transform-origin`** SVG-Attribut legt den Ursprung für die Transformationen eines Elements fest.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `transform-origin` auch ein entsprechendes CSS-Attribut: {{cssxref("transform-origin")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

## Hinweise zur Verwendung

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
> Der Standardwert von `transform-origin` ist `0 0` für alle SVG-Elemente, außer für Wurzelelemente `<svg>` und `<svg>`-Elemente, die ein direktes Kind von einem [`foreignObject`](/de/docs/Web/SVG/Reference/Element/foreignObject) sind. Diese Elemente haben `transform-origin: 50% 50%`, wie im normalen CSS.

Angegebene Längenangaben, Prozentsätze und Schlüsselwörter (`left`, `center`, `right`, `top`, und `bottom`) beziehen sich alle auf die [Bezugsbox](/de/docs/Web/CSS/transform-box). Da der Standardwert für `transform-box` `view-box` ist, sind die Transformationsursprungskoordinaten relativ zur `viewBox` des SVG-Elements, es sei denn, das Element selbst hat eine zugehörige CSS-Layout-Box.

## Beispiele

Die folgenden Beispiele zeigen die Rotation eines rechteckigen Kastens um 30° um eine Reihe unterschiedlicher `transform-origin`s.
Das SVG wird in jedem Fall deklariert, wobei die ursprüngliche Box mit einer gestrichelten roten Umrandung gezeichnet wird, gefolgt von der gedrehten Box in Limettengrün, und dann der `transform-origin`, der als roter Fadenkreuzmarkierer gezeichnet wird.

### Standard transform-origin

Standardmäßig hat `transform-origin` den Wert `0 0`, der ihn beim Ursprung der `viewBox` platziert. Unten erweitern wir die `viewBox` auf negative Werte, damit Sie den gesamten Fadenkreuzmarkierer sehen können, und beachten Sie auch, dass er nicht immer die obere linke Ecke des `<svg>`-Elements sein muss.

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

### Zentrale transform-origin

Unten setzen wir `transform-origin` auf `center`, was den Ursprung in die Mitte der `viewBox` platziert, aber nicht in die Mitte des transformierten Elements.

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

Um `transform-origin` relativ zum transformierten Element zu machen, können Sie die `transform-box`-Eigenschaft verwenden. Unten setzen wir `transform-box` auf `fill-box`, was den `transform-origin` relativ zur Begrenzungsbox des transformierten Elements macht.

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

Siehe CSS {{cssxref("transform-origin")}} für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("transform-origin")}} Eigenschaft
