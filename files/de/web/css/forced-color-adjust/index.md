---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

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
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die {{cssxref("color")}} Eigenschaft vom übergeordneten Element erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird er zur [benutzten Farbe](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color` Eigenschaft des Elternteils berechnet. In allen anderen Fällen verhält es sich wie `none`.

## Verwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastspezifikationen eines Nutzers unterstützen. Zum Beispiel, wenn Sie feststellen, dass die durch den {{Glossary("user_agent", "User-Agent")}} vorgenommenen Farboptimierungen in einem Modus mit hohem Kontrast oder Dunkelmodus zu einer schlechten Erfahrung führen. Durch die Verwendung dieser Eigenschaft könnte das Ergebnis in diesem Modus angepasst werden, um eine bessere Erfahrung zu bieten. **Es sollte nicht verwendet werden, um Benutzerentscheidungen zu ignorieren**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel verwendet das erste Kästchen das Farbschema, das vom Benutzer festgelegt wurde. Beispielsweise wird es im Windows High Contrast-Modus mit schwarzem Schema einen schwarzen Hintergrund und weißen Text haben. Das zweite Kästchen wird die auf der Klasse `.box` festgelegten Webseitenfarben beibehalten.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Media-Feature könnten Sie neben der `forced-color-adjust` Eigenschaft weitere Optimierungen für den erzwungenen Farbmodus hinzufügen.

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

![Das oben gezeigte Beispiel im Modus hoher Kontrast zeigt das erste Kästchen mit einem schwarzen Hintergrund und das zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gestaltung für Windows hohen Kontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
