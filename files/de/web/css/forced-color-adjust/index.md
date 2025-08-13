---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Autor:innen, bestimmte Elemente aus dem Modus für erzwungene Farben auszuschließen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

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

Der Wert der Eigenschaft `forced-color-adjust` muss eines der folgenden Schlüsselwörter sein.

### Werte

- `auto`
  - : Die Farben des Elements werden im Modus für erzwungene Farben vom {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im Modus für erzwungene Farben nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im Modus für erzwungene Farben, wenn die {{cssxref("color")}}-Eigenschaft vom übergeordneten Element erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentColor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom übergeordneten Element erbt), wird er auf die [benutzte Farbe](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color`-Eigenschaft des übergeordneten Elements berechnet. In allen anderen Fällen verhält es sich wie `none`.

## Verwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Ihnen bewusst wird, dass die Farboptimierungen durch den {{Glossary("user_agent", "User-Agent")}} in einem High-Contrast- oder Dunkelmodus zu einem schlechten Erlebnis führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus anzupassen, um ein besseres Erlebnis zu bieten. **Sie sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel verwendet das erste Kästchen das vom Benutzer eingestellte Farbschema. Beispielsweise hat es im schwarzen Schema des Windows High Contrast Modus einen schwarzen Hintergrund und weißen Text. Das zweite Kästchen behält die auf der `.box`-Klasse festgelegten Website-Farben bei.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Media-Eigenschaft könnten Sie weitere Optimierungen für den Modus für erzwungene Farben neben der `forced-color-adjust`-Eigenschaft hinzufügen.

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

![Das obige Beispiel im High-Contrast-Modus zeigt das erste Kästchen mit einem schwarzen Hintergrund, das zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows High Contrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
