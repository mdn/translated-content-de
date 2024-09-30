---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`forced-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, bestimmte Elemente vom Zwangsfarbmodus auszunehmen. Dadurch wird die Kontrolle über diese Werte an CSS zurückgegeben.

## Syntax

```css
forced-color-adjust: auto;
forced-color-adjust: none;

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
  - : Die Farben des Elements werden im Zwangsfarbmodus vom [User Agent](/de/docs/Glossary/user_agent) angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im Zwangsfarbmodus nicht automatisch vom [User Agent](/de/docs/Glossary/user_agent) angepasst.

## Verwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen vorzunehmen, die die Farb- und Kontrastanforderungen eines Benutzers unterstützen. Zum Beispiel, wenn Sie feststellen, dass die vom [User Agent](/de/docs/Glossary/user_agent) vorgenommenen Farboptimierungen zu einem schlechten Erlebnis im Hochkontrast- oder Dunkelmodus führen. Durch die Verwendung dieser Eigenschaft können Sie das Ergebnis in diesem Modus anpassen, um ein besseres Erlebnis zu bieten. **Sie sollte nicht verwendet werden, um die Beachtung der Benutzerentscheidungen zu verhindern**.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben beibehalten

Im folgenden Beispiel wird bei der ersten Box das vom Benutzer eingestellte Farbschema verwendet. Im Windows Hochkontrastmodus mit dem schwarzen Schema hat es beispielsweise einen schwarzen Hintergrund und weißen Text. Die zweite Box wird die auf der `.box` Klasse festgelegten Webseitenfarben beibehalten.

Durch die Verwendung der [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Media Query können Sie neben der `forced-color-adjust` Eigenschaft weitere Optimierungen für den Zwangsfarbmodus hinzufügen.

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

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit einem schwarzen Hintergrund, die zweite mit dem grauen Hintergrund des CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für Zwangsfarben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
