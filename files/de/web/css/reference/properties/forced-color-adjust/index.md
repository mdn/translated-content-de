---
title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte wieder an CSS zurückgegeben.

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
  - : Die Farben des Elements werden vom {{Glossary("user_agent", "User-Agent")}} im erzwungenen Farbmodus angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die {{cssxref("color")}}-Eigenschaft vom Elternteil erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/Guides/Cascade/Introduction) oder der kaskadierte Wert ist `currentColor`, {{cssxref("inherit")}} oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird diese auf den [verwendeten Farbwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `color`-Eigenschaft des Elternteils berechnet. In allen anderen Fällen verhält es sich wie `none`.

## Verwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Wenn Sie beispielsweise feststellen, dass die vom {{Glossary("user_agent", "User-Agent")}} vorgenommenen Farboptimierungen in einem hohen Kontrast- oder Dunkelmodus zu einem schlechten Erlebnis führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus anzupassen, um eine bessere Erfahrung zu bieten. **Es sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen berücksichtigt werden.**

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird die erste Box das vom Benutzer festgelegte Farbschema verwenden. Beispielsweise hat sie im Windows High Contrast Modus mit schwarzem Schema einen schwarzen Hintergrund und weißen Text. Die zweite Box wird die auf der `.box`-Klasse festgelegten Seitenfarben beibehalten.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Media-Feature könnten Sie neben der `forced-color-adjust`-Eigenschaft weitere Optimierungen für den erzwungenen Farbmodus hinzufügen.

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

Der folgende Screenshot zeigt das Bild oben im Windows High Contrast Mode:

![Das oben im hohen Kontrastmodus gezeigte Beispiel zeigt bei der ersten Box einen schwarzen Hintergrund, bei der zweiten den grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows im hohen Kontrastmodus mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
