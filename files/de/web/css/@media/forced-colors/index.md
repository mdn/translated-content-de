---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der {{Glossary("user agent")}} einen Modus mit erzwungenen Farben aktiviert hat, bei dem eine vom Benutzer festgelegte, begrenzte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen Modus mit erzwungenen Farben ist der hohe Kontrastmodus von Windows.

## Syntax

Das `forced-colors` Media-Feature zeigt an, ob der Browser derzeit im Modus für erzwungene Farben ist oder nicht.

### Werte

- `none`
  - : Der Modus für erzwungene Farben ist nicht aktiv; die Farben der Seite werden nicht in eine eingeschränkte Palette gezwungen.
- `active`
  - : Zeigt an, dass der Modus für erzwungene Farben aktiv ist. Der Browser stellt den Autoren die Farbpalette über die [CSS-Systemfarben](/de/docs/Web/CSS/system-color) Schlüsselwörter zur Verfügung und löst gegebenenfalls den entsprechenden Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) aus, sodass Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [color adjust spec](https://www.w3.org/TR/css-color-adjust-1/#forced) für mehr Details).

## Hinweise zur Verwendung

### Eigenschaften, die vom Modus für erzwungene Farben betroffen sind

Im Modus für erzwungene Farben werden die Werte der folgenden Eigenschaften so behandelt, als ob keine werte auf Autorenebene angegeben sind. Das heißt, browserdefinierte Werte werden stattdessen verwendet. Die browserdefinierten Werte beeinflussen nicht die Stil-Zusammenführung; die Werte werden stattdessen vom Browser zur Laufzeit erzwungen.

Diese browserdefinierten Werte werden aus der Menge der Systemfarben ausgewählt - dies sorgt für einen konsistenten Kontrast für allgemeine UI-Elemente für Benutzer, die erzwungene Farben aktiviert haben.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- [SVG fill Attribut](/de/docs/Web/SVG/Attribute/fill)
- [SVG stroke Attribut](/de/docs/Web/SVG/Attribute/stroke)

Zusätzlich haben die folgenden Eigenschaften ein spezielles Verhalten im Modus für erzwungene Farben:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird auf 'none' für Werte erzwungen, die nicht URL-basiert sind
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die erzwungenen Systemfarben für die obigen Eigenschaften hängen vom Kontext des Elements ab. Zum Beispiel wird die {{cssxref("color")}} Eigenschaft auf einem Button-Element auf `ButtonText` erzwungen. Bei normalem Text wird sie auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für zusätzliche Details, wann jede in verschiedenen UI-Kontexten angebracht sein könnte.

> [!NOTE]
> Benutzeragenten wählen Systemfarben basierend auf nativen Elementeigenschaften, _nicht_ auf hinzugefügten ARIA-Rollen.
> Zum Beispiel wird das Hinzufügen von `role="button"` zu einem `div` **nicht** dazu führen, dass die Farbe eines Elements auf `ButtonText` erzwungen wird.

Zusätzlich zu diesen Anpassungen helfen Browser dabei, die Lesbarkeit von Text zu gewährleisten, indem sie "Hintergründe" hinter Text zeichnen. Dies ist besonders wichtig, um den Kontrast zu bewahren, wenn Text auf Bildern platziert wird.

Es gibt zwei Fälle, in denen der Benutzeragent die Werte für die oben genannten Eigenschaften nicht erzwingt - wenn ein {{cssxref("forced-color-adjust")}} Wert von `none` auf ein Element angewendet wird oder wenn eine Systemfarbe vom Autor angegeben wird.

Wenn forced-color-adjust auf `none` auf einem Element gesetzt ist, werden keine erzwungenen Farbwerte angewendet und Autorenstile werden wie gewohnt angewendet. Außerdem wird der Hintergrund für Text deaktiviert.

Wenn eine Systemfarbe angegeben wird, wird diese anstelle des sonst erzwungenen Wertes verwendet.

Sie können auch Systemfarben mit jeder anderen Eigenschaft als den oben genannten verwenden, um sicherzustellen, dass der Rest der Seite mit der eingeschränkten Farbpalette im Modus für erzwungene Farben integriert wird.

### Barrierefreiheit

Im Allgemeinen sollten Web-Autoren das `forced-colors` Media-Feature **nicht** verwenden, um ein separates Design für Benutzer mit dieser Funktion zu erstellen. Stattdessen ist es dafür vorgesehen, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die Standardanwendung von erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette und Text-Hintergründe im Modus für erzwungene Farben bereitgestellt wird, ist oft unerlässlich, damit einige Benutzer eine bestimmte Website lesen oder verwenden können. Anpassungen, die den Inhalt betreffen, sollten daher sorgfältig ausgewählt und auf Inhalte ausgerichtet werden, die sonst nicht lesbar sind.

### Benutzerpräferenzen

Dieses Media-Feature ist nur aktiv, wenn der Benutzer Farbsc hemapräferenzen in seinem Betriebssystem aktiviert hat. Ein Beispiel für eine solche Funktion ist der hohe Kontrastmodus in Windows.

## Beispiele

> [!NOTE]
> Das folgende Beispiel funktioniert nur, wenn Sie einen Browser verwenden, der dieses Media-Feature unterstützt, und mit einer Präferenz wie dem hohen Kontrastmodus in Ihrem Betriebssystem aktiviert.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast durch {{cssxref("box-shadow")}} erhält. Im Modus für erzwungene Farben wird der Box-Shadow auf none erzwungen, daher verwendet das Beispiel das Media-Feature für erzwungene Farben, um sicherzustellen, dass ein Rand der passenden Farbe vorhanden ist (in diesem Fall ButtonText).

### HTML

```html
<button class="button">Press me!</button>
```

### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Use a border instead, since box-shadow is forced to 'none' in forced-colors mode */
    border: 2px ButtonText solid;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [@media](/de/docs/Web/CSS/@media)
- [Styling für Windows hohen Kontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
