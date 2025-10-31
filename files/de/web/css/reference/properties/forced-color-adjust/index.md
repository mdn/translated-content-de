---
title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente von dem erzwungenen Farbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte durch CSS wiederhergestellt.

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
  - : Die Farben des Elements werden im erzwungenen Farbmodus durch den {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch durch den {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die {{cssxref("color")}} Eigenschaft vom Elternteil erbt (d.h., es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentColor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), wird sie auf die [benutzte Farbe](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color` Eigenschaft des Elternteils berechnet. In allen anderen Fällen verhält sie sich wie `none`.

## Verwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen zu unterstützen, die die Farb- und Kontrastanforderungen eines Nutzers erfüllen. Zum Beispiel, wenn Sie feststellen, dass die Farboptimierungen des {{Glossary("user_agent", "User-Agent")}} in einem Hochkontrast- oder Dunkelmodus zu einer schlechten Erfahrung führen. Durch die Verwendung dieser Eigenschaft würden Sie die Möglichkeit erhalten, das Ergebnis in diesem Modus anzupassen, um eine bessere Erfahrung zu bieten. **Es sollte nicht verwendet werden, um zu verhindern, dass die Nutzerentscheidungen respektiert werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel verwendet die erste Box das vom Benutzer festgelegte Farbschema. Zum Beispiel im Windows Hochkontrastmodus mit schwarzem Schema wird es einen schwarzen Hintergrund und weißen Text haben. Die zweite Box bewahrt die auf der `.box` Klasse festgelegten Webseitenfarben.

Durch die Verwendung des {{cssxref("@media/forced-colors", "forced-colors")}} Media Features können Sie weitere Optimierungen für den erzwungenen Farbmodus neben der `forced-color-adjust` Eigenschaft hinzufügen.

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

Der folgende Screenshot zeigt das obige Bild im Windows Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit einem schwarzen Hintergrund, die zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
