---
title: transform-origin
slug: Web/SVG/Reference/Attribute/transform-origin
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das SVG-Attribut **`transform-origin`** legt den Ursprung für die Transformationen eines Elements fest.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `transform-origin` auch eine entsprechende CSS-Eigenschaft: {{cssxref("transform-origin")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Beispiele

Die folgenden Beispiele zeigen, wie ein rechteckiger Kasten um 30° um verschiedene `transform-origin`-Punkte gedreht wird.
In jedem Fall wird das SVG mit dem ursprünglichen Kasten als gestrichelte rote Kontur dargestellt, gefolgt vom gedrehten Kasten in Hellgrün und dem `transform-origin` als roter Fadenkreuzmarkierung.

### Standardmäßiger transform-origin

Standardmäßig hat `transform-origin` den Wert `0 0` und liegt damit am Ursprung der `viewBox`. Im folgenden Beispiel erweitern wir die `viewBox` auf negative Werte, damit Sie die gesamte Fadenkreuzmarkierung sehen können. Beachten Sie auch, dass der Ursprung nicht immer in der oberen linken Ecke des `<svg>`-Elements liegt.

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

### Zentrierter transform-origin

Im folgenden Beispiel setzen wir `transform-origin` auf `center`. Dadurch liegt der Ursprung in der Mitte der `viewBox`, jedoch nicht in der Mitte des transformierten Elements.

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

Damit `transform-origin` relativ zum transformierten Element ist, können Sie die Eigenschaft `transform-box` verwenden. Im folgenden Beispiel setzen wir `transform-box` auf `fill-box`. Dadurch bezieht sich `transform-origin` auf die Bounding-Box des transformierten Elements.

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

Weitere Beispiele finden Sie unter CSS {{cssxref("transform-origin")}}.

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
> Der Standardwert von `transform-origin` ist für alle SVG-Elemente `0 0`, außer für `<svg>`-Wurzelelemente und `<svg>`-Elemente, die direkte Kinder eines [`foreignObject`](/de/docs/Web/SVG/Reference/Element/foreignObject) sind. Für diese Elemente gilt wie bei normalem CSS `transform-origin: 50% 50%`.

Angegebene Längen, Prozentwerte und Schlüsselwörter (`left`, `center`, `right`, `top` und `bottom`) beziehen sich alle auf die [Referenzbox](/de/docs/Web/CSS/Reference/Properties/transform-box). Da der Standardwert von `transform-box` `view-box` ist, beziehen sich die Koordinaten des Transformationsursprungs auf die `viewBox` des SVG-Elements, sofern das Element selbst keine zugehörige CSS-Layoutbox hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("transform-origin")}}
