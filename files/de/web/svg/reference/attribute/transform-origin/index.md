---
title: transform-origin
slug: Web/SVG/Reference/Attribute/transform-origin
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`transform-origin`** SVG-Attribut legt den Ursprung für die Transformationen eines Elements fest.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `transform-origin` auch ein entsprechendes CSS-Attribut: {{cssxref("transform-origin")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

## Verwendungsnotizen

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
> Der Standardwert von `transform-origin` ist `0 0` für alle SVG-Elemente mit Ausnahme von Wurzel-`<svg>`-Elementen und `<svg>`-Elementen, die ein direktes Kind von einem [`foreignObject`](/de/docs/Web/SVG/Reference/Element/foreignObject) sind. Diese Elemente haben `transform-origin: 50% 50%`, wie im normalen CSS.

Angegebene Längen, Prozentsätze und Schlüsselwörter (`left`, `center`, `right`, `top`, und `bottom`) beziehen sich alle auf das [Referenzfeld](/de/docs/Web/CSS/Reference/Properties/transform-box). Da der Standardwert für `transform-box` `view-box` ist, sind die Koordinaten des Transformationsursprungs relativ zur `viewBox` des SVG-Elements, es sei denn, das Element selbst hat ein zugeordnetes CSS-Layout-Feld.

## Beispiele

Die folgenden Beispiele demonstrieren die Drehung eines rechteckigen Kastens um 30° um verschiedene `transform-origin`s.
Das SVG wird in jedem Fall mit dem ursprünglichen Kasten in gestrichelter roter Umrandung deklariert, gefolgt vom gedrehten Kasten in limettengrün, und dann der `transform-origin` als roter Fadenkreuzmarker.

### Standard transform-origin

Standardmäßig hat `transform-origin` den Wert `0 0`, was es am Ursprung der `viewBox` platziert. Unten erweitern wir die `viewBox` auf negative Werte, damit Sie den vollständigen Fadenkreuzmarker sehen können, und beachten auch, dass es nicht immer die obere linke Ecke des `<svg>`-Elements sein muss.

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

### Center transform-origin

Unten setzen wir `transform-origin` auf `center`, was den Ursprung im Zentrum der `viewBox` platziert, jedoch nicht im Zentrum des Elementes, das transformiert wird.

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
