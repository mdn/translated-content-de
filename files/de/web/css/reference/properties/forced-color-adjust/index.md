---
title: "`forced-color-adjust` CSS property"
short-title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`forced-color-adjust`** ermöglicht es, bestimmte Elemente vom Modus für erzwungene Farben auszunehmen. Dadurch werden die entsprechenden Farbwerte wieder durch CSS gesteuert.

## Syntax

```css
forced-color-adjust: auto;
forced-color-adjust: none;
forced-color-adjust: preserve-parent-color;

/* Global values */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: revert-layer;
forced-color-adjust: unset;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Die Farben des Elements werden im Modus für erzwungene Farben vom {{Glossary("user_agent", "User Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im Modus für erzwungene Farben nicht automatisch vom {{Glossary("user_agent", "User Agent")}} angepasst.
- `preserve-parent-color`
  - : Wenn die Eigenschaft {{cssxref("color")}} im Modus für erzwungene Farben vom Elternelement geerbt wird (d.h. es gibt keinen [Wert aus der Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), oder dieser Wert ist `currentColor`, {{cssxref("inherit")}} oder ein anderes Schlüsselwort, das den Wert vom Elternelement erbt), ergibt sich als berechneter Wert der [verwendete Farbwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `color`-Eigenschaft des Elternelements. In allen anderen Fällen verhält sich der Wert wie `none`.

## Hinweise zur Verwendung

Diese Eigenschaft sollte nur verwendet werden, um Anpassungen vorzunehmen, die den Anforderungen der Benutzer an Farben und Kontrast gerecht werden. Wenn beispielsweise die Farbanpassungen des {{Glossary("user_agent", "User Agents")}} im Modus mit hohem Kontrast oder im Dunkelmodus zu einer schlechten Darstellung führen, können Sie das Ergebnis mit dieser Eigenschaft verbessern. **Sie sollte nicht verwendet werden, um die Einstellungen der Benutzer außer Kraft zu setzen.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel verwendet die erste Box das vom Benutzer eingestellte Farbschema. Im schwarzen Farbschema des Windows-Modus für hohen Kontrast hat sie beispielsweise einen schwarzen Hintergrund und weißen Text. Die zweite Box behält die Website-Farben bei, die für die Klasse `.box` festgelegt wurden.

Mit dem Media-Feature {{cssxref("@media/forced-colors", "forced-colors")}} können Sie neben der Eigenschaft `forced-color-adjust` weitere Anpassungen für den Modus für erzwungene Farben vornehmen.

#### HTML

```html
<div class="box">
  <p>This is a box which should use your color preferences.</p>
</div>

<div class="box forced">
  <p>This is a box which should stay the colors set by the site.</p>
</div>
```

#### CSS

```css
.box {
  border: 5px solid grey;
  background-color: #cccccc;
  width: 300px;
  margin: 20px;
  padding: 10px;
}

@media (forced-colors: active) {
  .forced {
    forced-color-adjust: none;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Preserving_colors", 640, 300)}}

Der folgende Screenshot zeigt das obige Beispiel im Windows-Modus für hohen Kontrast:

![Im Modus für hohen Kontrast hat die erste Box einen schwarzen Hintergrund, während die zweite den in CSS festgelegten grauen Hintergrund behält.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für den Windows-Modus für hohen Kontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
