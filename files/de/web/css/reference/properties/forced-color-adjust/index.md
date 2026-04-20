---
title: "`forced-color-adjust` CSS property"
short-title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom Modus der erzwungenen Farben auszuschließen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

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
  - : Die Farben des Elements werden im Modus der erzwungenen Farben vom {{Glossary("user_agent", "User-Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im Modus der erzwungenen Farben nicht automatisch vom {{Glossary("user_agent", "User-Agent")}} angepasst.
- `preserve-parent-color`
  - : Im Modus der erzwungenen Farben, wenn die {{cssxref("color")}}-Eigenschaft von ihrem Elternteil erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/Guides/Cascade/Introduction) oder der kaskadierte Wert ist `currentColor`, {{cssxref("inherit")}} oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird sie auf den [verwendeten Farbwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `color`-Eigenschaft ihres Elternteils berechnet. In allen anderen Fällen verhält sie sich wie `none`.

## Anwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen zu machen, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Sie feststellen, dass die vom {{Glossary("user_agent", "User-Agent")}} vorgenommenen Farboptimierungen zu einer schlechten Erfahrung im Hochkontrast- oder Dunkelmodus führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus zu optimieren, um eine bessere Erfahrung zu bieten. **Sie sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im Beispiel unten wird die erste Box das vom Benutzer gesetzte Farbschema verwenden. Zum Beispiel im schwarzen Schema des Windows-Hochkontrastmodus wird sie einen schwarzen Hintergrund und weißen Text haben. Die zweite Box wird die auf der `.box`-Klasse festgelegten Website-Farben beibehalten.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Medienfunktion könnten Sie zusammen mit der `forced-color-adjust`-Eigenschaft weitere Optimierungen für den Modus der erzwungenen Farben hinzufügen.

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

Der folgende Screenshot zeigt das Bild oben im Windows-Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit einem schwarzen Hintergrund, die zweite mit dem grauen Hintergrund aus dem CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows-Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
