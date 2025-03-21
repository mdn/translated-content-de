---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom Forced Colors-Modus auszuschließen. Dadurch wird die Kontrolle über diese Werte wieder auf CSS zurückgesetzt.

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

Der Wert der `forced-color-adjust` Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `auto`
  - : Die Farben des Elements werden im Forced Colors-Modus durch den {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im Forced Colors-Modus nicht automatisch durch den {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im Forced Colors-Modus, wenn die {{cssxref("color")}} Eigenschaft von ihrem Elternteil erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird es auf die [verwendete Farbe](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) der `color`-Eigenschaft seines Elternteils berechnet. In allen anderen Fällen verhält es sich genauso wie `none`.

## Nutzungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die den Farb- und Kontrastanforderungen eines Benutzers entsprechen. Zum Beispiel, wenn Sie bemerken, dass die vom {{Glossary("user_agent", "User-Agent")}} vorgenommenen Farboptimierungen in einem hohen Kontrast- oder Dunkelmodus zu einem schlechten Erlebnis führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus zu optimieren, um ein besseres Erlebnis zu bieten. **Sie sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird die erste Box das Farbschema verwenden, das der Benutzer eingestellt hat. Zum Beispiel im Windows High Contrast Modus mit schwarzem Schema wird sie einen schwarzen Hintergrund und weißen Text haben. Die zweite Box wird die auf der `.box` Klasse festgelegten Website-Farben beibehalten.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Media-Feature könnten Sie neben der `forced-color-adjust` Eigenschaft auch andere Optimierungen für den Forced Color-Modus hinzufügen.

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

Der folgende Screenshot zeigt das obige Bild im Windows High Contrast Mode:

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit schwarzem Hintergrund, die zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
