---
title: transform-origin
slug: Web/SVG/Attribute/transform-origin
l10n:
  sourceCommit: 9f0dfdf3ad2002bc3c86a49a02be9de32aeb1278
---

{{SVGRef()}}

Das **`transform-origin`**-SVG-Attribut legt den Ursprung für die Transformationen eines Elements fest.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `transform-origin` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("transform-origin")}}. Wenn beide definiert sind, hat die CSS-Eigenschaft Priorität.

## Verwendungshinweise

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
> Der Standardwert von `transform-origin` ist `0 0` für alle SVG-Elemente außer für Wurzel-`<svg>`-Elemente und `<svg>`-Elemente, die ein direktes Kind eines [`foreignObject`](/de/docs/Web/SVG/Element/foreignObject) sind. Diese Elemente haben `transform-origin: 50% 50%`, wie es in normalem CSS der Fall ist.

Angegebene Längen, Prozentsätze und Schlüsselwörter (`left`, `center`, `right`, `top` und `bottom`) sind alle relativ zur [Referenzbox](/de/docs/Web/CSS/transform-box). Da der Standardwert für `transform-box` `view-box` ist, sind die Transformationsursprungskoordinaten relativ zur `viewBox` des SVG-Elements, es sei denn, das Element selbst hat eine zugehörige CSS-Layout-Box.

## Beispiele

Die folgenden Beispiele zeigen die Rotation eines rechteckigen Kastens um 30° mit verschiedenen `transform-origin`-Werten. Das SVG wird in jedem Fall mit dem ursprünglichen Kasten, der mit einer gestrichelten roten Umrandung gezeichnet wurde, gefolgt vom gedrehten Kasten in Limettengrün und anschließend dem `transform-origin`, das als roter Fadenkreuzmarker eingezeichnet ist, dargestellt.

### Standardmäßiges transform-origin

Standardmäßig hat `transform-origin` den Wert `0 0`, der es am Ursprung der `viewBox` platziert. Im folgenden Beispiel erweitern wir die `viewBox` auf negative Werte, damit Sie den vollständigen Fadenkreuzmarker sehen können. Beachten Sie auch, dass es nicht immer die obere linke Ecke des `<svg>`-Elements sein muss.

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

### Mittelpunkt als transform-origin

Im folgenden Beispiel setzen wir `transform-origin` auf `center`, wodurch der Ursprung im Zentrum der `viewBox` liegt, aber nicht im Zentrum des zu transformierenden Elements.

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

Um `transform-origin` relativ zum transformierten Element zu machen, können Sie die Eigenschaft `transform-box` verwenden. Im folgenden Beispiel setzen wir `transform-box` auf `fill-box`, wodurch sich `transform-origin` relativ zur Begrenzungsbox des transformierten Elements verhält.

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

- Die CSS-{{cssxref("transform-origin")}}-Eigenschaft
