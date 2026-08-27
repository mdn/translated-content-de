---
title: "`forced-color-adjust` CSS property"
short-title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbmodus auszuschließen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter angegeben:

- `auto`
  - : Die Farben des Elements werden im erzwungenen Farbmodus vom {{Glossary("user_agent", "User Agent")}} angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch vom {{Glossary("user_agent", "User Agent")}} angepasst.
- `preserve-parent-color`
  - : Im erzwungenen Farbmodus, wenn die {{cssxref("color")}}-Eigenschaft vom übergeordneten Element erbt (d.h. es gibt keinen [kaskadierten Wert](/de/docs/Web/CSS/Guides/Cascade/Introduction) oder der kaskadierte Wert ist `currentColor`, {{cssxref("inherit")}}, oder ein anderes Schlüsselwort, das vom Elternteil erbt), dann wird sie auf den [verwendeten Farbwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `color`-Eigenschaft des Elternteils berechnet. In allen anderen Fällen verhält sie sich wie `none`.

## Hinweise zur Nutzung

Diese Eigenschaft sollte nur für Änderungen verwendet werden, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Sie feststellen, dass die vom {{Glossary("user_agent", "User Agent")}} vorgenommenen Farboptimierungen bei hohem Kontrast oder im Dunkelmodus zu einer schlechten Erfahrung führen. Die Verwendung dieser Eigenschaft würde das Anpassen des Ergebnisses in diesem Modus ermöglichen, um eine bessere Erfahrung zu bieten. **Sie sollte nicht verwendet werden, um Benutzerentscheidungen zu ignorieren**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird das erste Feld das vom Benutzer festgelegte Farbschema verwenden. Beispielsweise wird es im Windows-Hochkontrastmodus mit schwarzem Schema einen schwarzen Hintergrund und weißen Text haben. Das zweite Feld wird die auf der `.box` Klasse festgelegten Website-Farben beibehalten.

Mit der {{cssxref("@media/forced-colors", "forced-colors")}} Medienfunktion könnten Sie neben der `forced-color-adjust`-Eigenschaft weitere Optimierungen für den erzwungenen Farbmodus hinzufügen.

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

Der folgende Screenshot zeigt das obige Bild im Windows-Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt das erste Feld mit einem schwarzen Hintergrund, das zweite mit dem grauen Hintergrund aus dem CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows-Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
