---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Autoren, bestimmte Elemente vom Zwangsfarbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte wieder an das CSS zurückgegeben.

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

Der Wert der `forced-color-adjust`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `auto`
  - : Die Farben des Elements werden vom {{Glossary("user_agent", "User-Agent")}} im Zwangsfarbmodus angepasst. Dies ist der Standard.
- `none`
  - : Die Farben des Elements werden im Zwangsfarbmodus nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im Zwangsfarbmodus, falls die {{cssxref("color")}}-Eigenschaft von ihrem Elternteil erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird er zum [verwendeten Farbwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color`-Eigenschaft des Elternteils berechnet. In allen anderen Fällen verhält es sich wie `none`.

## Verwendungsnotizen

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastsanforderungen eines Nutzers unterstützen. Zum Beispiel, wenn Ihnen bewusst wird, dass die vom {{Glossary("user_agent", "User-Agent")}} vorgenommenen Farboptimierungen zu einer schlechten Erfahrung in einem Hochkontrast- oder Dunkelmodus führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus anzupassen, um ein besseres Erlebnis zu bieten. **Sie sollte nicht verwendet werden, um die Entscheidungen der Nutzer zu ignorieren**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel verwendet die erste Box das vom Benutzer eingestellte Farbschema. Beispielsweise im Windows Hochkontrastmodus mit schwarzem Schema, wird sie einen schwarzen Hintergrund und weißen Text haben. Die zweite Box wird die auf der `.box`-Klasse gesetzten Website-Farben beibehalten.

Durch die Verwendung des {{cssxref("@media/forced-colors", "forced-colors")}} Media-Features können Sie neben der `forced-color-adjust`-Eigenschaft weitere Optimierungen für den Zwangsfarbmodus hinzufügen.

#### CSS

```css
.box {
  border: 5px solid grey;
  background-color: #ccc;
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

#### HTML

```html
<div class="box">
  <p>This is a box which should use your color preferences.</p>
</div>

<div class="box forced">
  <p>This is a box which should stay the colors set by the site.</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("Preserving_colors", 640, 300)}}

Der folgende Screenshot zeigt das oben abgebildete Bild im Windows Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit einem schwarzen Hintergrund und die zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für Zwangsfarben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
