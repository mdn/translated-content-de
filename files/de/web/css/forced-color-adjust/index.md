---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft erlaubt es Autoren, bestimmte Elemente vom erzwungenen Farbenmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte an CSS zurückübergeben.

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
  - : Die Farben des Elements werden im erzwungenen Farbenmodus vom {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbenmodus nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbenmodus, wenn die {{cssxref("color")}}-Eigenschaft vom Elternteil erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentColor`, {{cssxref("inherit")}} oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird auf den [verwendeten Farbwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color`-Eigenschaft des Elternteils zurückgegriffen. In allen anderen Fällen verhält es sich wie `none`.

## Nutzungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastspezifikationen eines Benutzers unterstützen. Beispielsweise, wenn Ihnen bewusst wird, dass die Farboptimierungen durch den {{Glossary("user_agent", "User-Agent")}} in einem Erlebnis mit hohem Kontrast oder dunklem Modus zu einem schlechten Erlebnis führen. Die Verwendung dieser Eigenschaft ermöglicht es, das Ergebnis in diesem Modus anzupassen und ein besseres Erlebnis zu bieten. **Es sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen berücksichtigt werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird bei dem ersten Kasten das vom Benutzer festgelegte Farbschema verwendet. Beispielsweise hat es im Windows-Hochkontrastmodus mit schwarzem Schema einen schwarzen Hintergrund und weißen Text. Der zweite Kasten wird die im `.box`-Klasse festgelegten Seitenfarben beibehalten.

Durch die Verwendung des {{cssxref("@media/forced-colors", "forced-colors")}}-Media-Features könnten Sie weitere Optimierungen für den erzwungenen Farbenmodus neben der `forced-color-adjust`-Eigenschaft hinzufügen.

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

Der folgende Screenshot zeigt das obenstehende Bild im Windows-Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt den ersten Kasten mit einem schwarzen Hintergrund, den zweiten mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows High Contrast mit Standards für gezwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
