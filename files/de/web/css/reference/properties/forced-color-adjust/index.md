---
title: "`forced-color-adjust` CSS property"
short-title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Autoren, bestimmte Elemente aus dem erzwungenen Farbmodus auszuschließen. Dadurch wird die Kontrolle über diese Werte wieder an CSS zurückgegeben.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Die Farben des Elements werden im erzwungenen Farbmodus durch den {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch durch den {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die {{cssxref("color")}}-Eigenschaft vom übergeordneten Element geerbt wird (d.h. es gibt keinen [verketteten Wert](/de/docs/Web/CSS/Guides/Cascade/Introduction) oder der verkettete Wert ist `currentColor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), wird er zum [verwendeten Farbwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `color`-Eigenschaft des übergeordneten Elements berechnet. In allen anderen Fällen verhält er sich wie `none`.

## Anwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Sie feststellen, dass die Farboptimierungen des {{Glossary("user_agent", "User-Agenten")}} in einem Modus mit hohem Kontrast oder dunklem Modus ein schlechtes Erlebnis bieten. Mit dieser Eigenschaft könnte das Ergebnis in diesem Modus angepasst werden, um ein besseres Erlebnis zu ermöglichen. **Sie sollte nicht verwendet werden, um die Entscheidungen des Benutzers zu ignorieren.**

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im unten stehenden Beispiel wird die erste Box das Farbschema verwenden, das der Benutzer eingestellt hat. Zum Beispiel wird im Windows High Contrast Mode mit dem schwarzen Schema ein schwarzer Hintergrund und weißer Text angezeigt. Die zweite Box wird die auf der `.box`-Klasse festgelegten Seitenfarben beibehalten.

Indem Sie die {{cssxref("@media/forced-colors", "forced-colors")}}-Medienfunktion verwenden, könnten Sie weitere Optimierungen für den erzwungenen Farbmodus neben der `forced-color-adjust`-Eigenschaft hinzufügen.

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

![Das obige Beispiel im High Contrast Mode zeigt die erste Box mit schwarzem Hintergrund, die zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows High Contrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
