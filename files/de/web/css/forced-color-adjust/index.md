---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`forced-color-adjust`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es Autoren, bestimmte Elemente vom erzwungenen Farbenmodus auszuschließen. Dadurch wird die Kontrolle über diese Werte wieder auf CSS übertragen.

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

Der Wert der `forced-color-adjust`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `auto`
  - : Die Farben des Elements werden im erzwungenen Farbenmodus vom [User Agent](/de/docs/Glossary/user_agent) angepasst. Dies ist der Standardwert.
- `none`
  - : Die Farben des Elements werden im erzwungenen Farbenmodus nicht automatisch vom [User Agent](/de/docs/Glossary/user_agent) angepasst.

## Anwendungshinweise

Diese Eigenschaft sollte nur verwendet werden, um Änderungen zu unterstützen, die den Farb- und Kontrastanforderungen eines Benutzers gerecht werden. Zum Beispiel, wenn Sie feststellen, dass die Farboptimierungen, die vom [User Agent](/de/docs/Glossary/user_agent) vorgenommen werden, zu einer schlechten Benutzererfahrung im Hochkontrast- oder Dunkelmodus führen. Durch die Verwendung dieser Eigenschaft können Sie das Ergebnis in diesem Modus optimieren, um eine bessere Erfahrung zu bieten. **Sie sollte nicht verwendet werden, um zu verhindern, dass Benutzerentscheidungen respektiert werden.**

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben erhalten

Im folgenden Beispiel wird die erste Box das Farbschema verwenden, das der Benutzer festgelegt hat. Zum Beispiel hat sie im Windows Hochkontrastmodus mit schwarzem Farbschema einen schwarzen Hintergrund und weißen Text. Die zweite Box wird die auf der `.box`-Klasse festgelegten Seitenfarben beibehalten.

Durch die Verwendung des [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Media Features können Sie zusätzlich zur `forced-color-adjust`-Eigenschaft weitere Optimierungen für den erzwungenen Farbenmodus hinzufügen.

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

![Das obige Beispiel im Hochkontrastmodus zeigt die erste Box mit einem schwarzen Hintergrund und die zweite mit dem grauen Hintergrund der CSS.](windows-high-contrast.jpg)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Styling für Windows Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
