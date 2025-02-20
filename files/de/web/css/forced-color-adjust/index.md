---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`forced-color-adjust`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) ermöglicht es Entwicklern, bestimmte Elemente von der Zwangsfarbenmodus-Anpassung auszuschließen. Dadurch wird die Kontrolle über diese Werte wieder an CSS zurückgegeben.

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
  - : Die Farben des Elements werden im Zwangsfarbenmodus vom {{Glossary("user_agent", "User Agent")}} angepasst. Dies ist die Standardeinstellung.
- `none`
  - : Die Farben des Elements werden im Zwangsfarbenmodus nicht automatisch vom {{Glossary("user_agent", "User Agent")}} angepasst.
- `preserve-parent-color`
  - : Im Zwangsfarbenmodus, wenn die {{cssxref("color")}}-Eigenschaft vom übergeordneten Element erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade), oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}} oder ein anderes Schlüsselwort, das von den Eltern erbt), dann wird sie auf den [genutzten Farbwert](/de/docs/Web/CSS/CSS_cascade/used_value) der `color`-Eigenschaft des übergeordneten Elements berechnet. In allen anderen Fällen verhält sie sich genauso wie `none`.

## Hinweise zur Verwendung

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastsanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Sie feststellen, dass die vom {{Glossary("user_agent", "User Agent")}} vorgenommenen Farboptimierungen in einem Modus mit hohem Kontrast oder einem Dunkelmodus zu einer schlechten Benutzererfahrung führen. Die Verwendung dieser Eigenschaft ermöglicht es, das Ergebnis in diesem Modus anzupassen und eine bessere Erfahrung zu bieten. **Diese Eigenschaft sollte nicht verwendet werden, um die Entscheidungen der Benutzer zu ignorieren.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird bei der ersten Box das vom Benutzer festgelegte Farbschema verwendet. Zum Beispiel wird sie im schwarzen Schema des Windows Hochkontrastmodus einen schwarzen Hintergrund und weißen Text haben. Die zweite Box behält die auf der `.box`-Klasse festgelegten Seitenfarben bei.

Durch die Verwendung des {{cssxref("@media/forced-colors", "forced-colors")}}-Medienfeatures könnten auch andere Optimierungen für den Zwangsfarbenmodus neben der `forced-color-adjust`-Eigenschaft hinzugefügt werden.

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

Der folgende Screenshot zeigt das obige Bild im Windows Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit einem schwarzen Hintergrund und die zweite mit dem im CSS festgelegten grauen Hintergrund.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für Zwangsfarben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
