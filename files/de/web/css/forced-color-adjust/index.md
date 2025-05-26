---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 8697d1b0b7ace72cffe786933aae6c2f9b454b14
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom Zwangsfarbmodus auszuschließen. Dadurch wird die Kontrolle über diese Werte zurück an CSS gegeben.

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
  - : Die Farben des Elements werden im Zwangsfarbmodus vom {{Glossary("user_agent", "Benutzeragenten")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im Zwangsfarbmodus nicht automatisch vom {{Glossary("user_agent", "Benutzeragenten")}} angepasst.
- `preserve-parent-color`
  - : Im Zwangsfarbmodus, wenn die {{cssxref("color")}} Eigenschaft vom übergeordneten Element erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/CSS_cascade/Cascade) oder der kaskadierte Wert ist `currentcolor`, {{cssxref("inherit")}} oder ein anderes Schlüsselwort, das vom übergeordneten Element erbt), wird es zum [verwendeten Farbwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der `color` Eigenschaft seines übergeordneten Elements berechnet. In allen anderen Fällen verhält es sich wie `none`.

## Anwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die den Farb- und Kontrastanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Sie erkennen, dass die Farboptimierungen des {{Glossary("user_agent", "Benutzeragenten")}} zu einem schlechten Erlebnis in einem Hochkontrast- oder Dunkelmodus führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus anzupassen, um ein besseres Erlebnis zu bieten. **Es sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird das erste Feld das vom Benutzer eingestellte Farbschema verwenden. Zum Beispiel wird es im Windows-Hochkontrastmodus mit schwarzem Schema einen schwarzen Hintergrund und weißen Text haben. Das zweite Feld wird die auf der `.box` Klasse festgelegten Site-Farben beibehalten.

Durch die Verwendung der {{cssxref("@media/forced-colors", "forced-colors")}} Medienfunktion könnten Sie weitere Optimierungen für den Zwangsfarbmodus neben der `forced-color-adjust` Eigenschaft hinzufügen.

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

Der folgende Screenshot zeigt das Bild oben im Windows-Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt das erste Feld mit einem schwarzen Hintergrund, das zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows-Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
