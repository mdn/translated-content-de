---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`forced-color-adjust`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

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
  - : Die Farben des Elements werden im erzwungenen Farbmodus vom {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die Eigenschaft {{cssxref("color")}} vom Elternteil erbt (also, es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), wird sie auf den [verwendeten Farbwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color`-Eigenschaft ihres Elternteils berechnet. In allen anderen Fällen verhält sie sich wie `none`.

## Verwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Beispielsweise, wenn Ihnen bewusst wird, dass die Farboptimierungen des {{Glossary("user_agent", "User-Agent")}} zu einem schlechten Erlebnis im hohen Kontrast- oder Dunkelmodus führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus anzupassen, um ein besseres Erlebnis zu bieten. **Sie sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im untenstehenden Beispiel verwendet das erste Kästchen das vom Benutzer festgelegte Farbschema. Zum Beispiel hat es im Windows-Hochkontrastmodus mit schwarzem Schema einen schwarzen Hintergrund und weißen Text. Das zweite Kästchen erhält die auf die `.box`-Klasse gesetzten Seitenfarben bei.

Durch die Verwendung der Medienfeature {{cssxref("@media/forced-colors", "forced-colors")}} könnten Sie neben der Eigenschaft `forced-color-adjust` auch andere Optimierungen für den erzwungenen Farbmodus hinzufügen.

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

Der folgende Screenshot zeigt das obige Bild im Windows-Hochkontrastmodus:

![Das oben gezeigte Beispiel im Hochkontrastmodus zeigt das erste Kästchen mit einem schwarzen Hintergrund, das zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gestaltung für Windows-Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
