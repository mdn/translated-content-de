---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

## Syntax

```css
forced-color-adjust: auto;
forced-color-adjust: none;

/* Globale Werte */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: revert-layer;
forced-color-adjust: unset;
```

Der Wert der `forced-color-adjust`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `auto`
  - : Die Farben des Elements werden durch den {{Glossary("user agent")}} im erzwungenen Farbmodus angepasst. Dies ist der Standard.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbmodus nicht automatisch vom {{Glossary("user agent")}} angepasst.

## Anwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die den Farb- und Kontrastanforderungen eines Benutzers entsprechen. Zum Beispiel, wenn Ihnen bewusst wird, dass die Farbanpassungen durch den {{Glossary("user agent")}} zu einer schlechten Benutzererfahrung im Hochkontrast- oder Dunkelmodus führen. Die Verwendung dieser Eigenschaft würde es ermöglichen, das Ergebnis in diesem Modus zu optimieren, um eine bessere Benutzererfahrung zu bieten. **Sie sollte nicht verwendet werden, um Benutzerentscheidungen zu ignorieren**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel verwendet das erste Feld das vom Benutzer eingestellte Farbschema. Im Windows-Hochkontrastmodus mit schwarzem Schema wird es einen schwarzen Hintergrund und weißen Text haben. Das zweite Feld behält die auf der `.box`-Klasse gesetzten Farben der Seite bei.

Durch die Verwendung der [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Medienfunktion könnten Sie weitere Optimierungen für den erzwungenen Farbmodus zusammen mit der `forced-color-adjust`-Eigenschaft hinzufügen.

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
  <p>Das ist ein Feld, das Ihre Farbeinstellungen verwenden sollte.</p>
</div>

<div class="box forced">
  <p>Das ist ein Feld, das die vom Site festgelegten Farben behalten sollte.</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("Preserving_colors", 640, 300)}}

Der folgende Screenshot zeigt das obige Bild im Windows-Hochkontrastmodus:

![Das obige Beispiel im Hochkontrastmodus zeigt das erste Feld mit schwarzem Hintergrund und das zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
