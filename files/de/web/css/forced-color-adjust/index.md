---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 4b465e22616ac4bc5aedb821453e15a9fea73e90
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte zurück zu CSS gegeben.

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
  - : Die Farben des Elements werden im erzwungenen Farbmodus vom {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die {{cssxref("color")}} Eigenschaft vom übergeordneten Element erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/Cascade) oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird er auf die [verwendete Farbe](/de/docs/Web/CSS/used_value) der `color` Eigenschaft des Elternteils berechnet. In allen anderen Fällen verhält es sich wie `none`.

## Nutzungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen zu unterstützen, die die Farb- und Kontrastanforderungen eines Benutzers erfüllen. Zum Beispiel, wenn Sie feststellen, dass die Farboptimierungen des {{Glossary("user_agent", "User-Agent")}} zu einem schlechten Erlebnis im Hochkontrast- oder Dunkelmodus führen. Durch die Verwendung dieser Eigenschaft könnten Sie das Ergebnis in diesem Modus anpassen, um ein besseres Erlebnis zu bieten. **Es sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird der erste Kasten das vom Benutzer eingestellte Farbschema verwenden. Zum Beispiel wird er im schwarzen Schema des Windows-Hochkontrastmodus einen schwarzen Hintergrund und weißen Text haben. Der zweite Kasten wird die auf der `.box` Klasse gesetzten Websitefarben beibehalten.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Medienfunktion könnten Sie zusätzliche Optimierungen für den erzwungenen Farbmodus neben der `forced-color-adjust` Eigenschaft hinzufügen.

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

![Das obige Beispiel im Hochkontrastmodus zeigt den ersten Kasten mit schwarzem Hintergrund und den zweiten mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling for Windows high contrast with standards for forced colors.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
