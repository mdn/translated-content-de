---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der {{Glossary("user_agent", "User Agent")}} einen Modus mit erzwungenen Farben aktiviert hat, bei dem eine vom Benutzer gewählte, beschränkte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen Modus mit erzwungenen Farben ist der Windows High Contrast-Modus.

## Syntax

Das `forced-colors` Medienfeature gibt an, ob der Browser derzeit im Modus mit erzwungenen Farben ist.

### Werte

- `none`
  - : Der Modus mit erzwungenen Farben ist nicht aktiv; die Farben der Seite werden nicht in eine beschränkte Palette gezwungen.
- `active`
  - : Gibt an, dass der Modus mit erzwungenen Farben aktiv ist. Der Browser stellt den Autoren die Farbpalette über die Keywords der [CSS-Systemfarben](/de/docs/Web/CSS/system-color) zur Verfügung und löst, falls zutreffend, den entsprechenden Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) aus, damit Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [color adjust Spec](https://www.w3.org/TR/css-color-adjust-1/#forced) für weitere Details).

## Nutzungshinweise

### Eigenschaften, die vom Modus mit erzwungenen Farben betroffen sind

Im Modus mit erzwungenen Farben werden die Werte der folgenden Eigenschaften so behandelt, als ob sie keine Werte auf Autorenebene spezifiziert hätten. Das heißt, vom Browser spezifizierte Werte werden stattdessen verwendet. Die vom Browser spezifizierten Werte beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen vom Browser zur Malzeit erzwungen.

Diese vom Browser spezifizierten Werte werden aus dem Satz von Systemfarben ausgewählt — das stellt einen konsistenten Kontrast für allgemeine UI-Elemente sicher, wenn Benutzer erzwungene Farben aktiviert haben.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- [SVG fill-Attribut](/de/docs/Web/SVG/Reference/Attribute/fill)
- [SVG stroke-Attribut](/de/docs/Web/SVG/Reference/Attribute/stroke)

Zusätzlich haben die folgenden Eigenschaften ein spezielles Verhalten im Modus mit erzwungenen Farben:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird auf 'none' für Werte, die nicht URL-basiert sind, erzwungen
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die Systemfar, die für die oben genannten Eigenschaften erzwungen wird, hängt vom Kontext des Elements ab. Zum Beispiel wird die {{cssxref("color")}} Eigenschaft auf einem Button-Element auf `ButtonText` erzwungen. Auf normalem Text wird es auf `CanvasText` erzwungen. Sehen Sie die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für weitere Details, wann welche in verschiedenen UI-Kontexten geeignet ist.

> [!NOTE]
> User Agents wählen Systemfarben basierend auf nativen Elementsemantiken, _nicht_ basierend auf hinzugefügten ARIA-Rollen.
> Zum Beispiel wird das Hinzufügen von `role="button"` zu einem `div` **nicht** dazu führen, dass die Farbe eines Elements auf `ButtonText` erzwungen wird.

Zusätzlich zu diesen Anpassungen unterstützen Browser die Lesbarkeit von Text, indem sie "Rückplatten" hinter dem Text zeichnen. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text über Bildern platziert wird.

Es gibt einige Fälle, in denen der User Agent die Werte für die oben genannten Eigenschaften nicht erzwingt:

Wenn {{cssxref("forced-color-adjust")}} auf `none` für ein Element gesetzt ist, werden keine der erzwungenen Farbwerte angewendet, und Autorenstile werden wie gewohnt angewendet. Zusätzlich wird die Rückplatte für Text deaktiviert.

Wenn {{cssxref("forced-color-adjust")}} auf `preserve-parent-color` auf einem Element gesetzt ist und der {{cssxref("color")}} Wert des Elements nicht von seinem Elternteil erbt, dann verhält sich das Element so, als wäre `preserve-parent-color` auf `none` gesetzt.

Wenn eine [Systemfarbe](/de/docs/Web/CSS/system-color) spezifiziert ist, wird sie anstelle des Wertes verwendet, der sonst erzwungen worden wäre.

Sie können auch Systemfarben mit jeder anderen Eigenschaft _außer_ den oben aufgeführten verwenden, um sicherzustellen, dass der Rest der Seite mit der eingeschränkten Farbpalette im Modus mit erzwungenen Farben integriert wird.

### Barrierefreiheitsaspekte

Im Allgemeinen sollten Webautoren **nicht** das `forced-colors` Medienfeature verwenden, um ein separates Design für Benutzer mit dieser Funktion zu erstellen. Stattdessen soll es verwendet werden, um kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die Standardanwendung von erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, den der Modus mit erzwungenen Farben durch die reduzierte Palette und Rückplatten hinter dem Text bietet, ist oft unerlässlich, damit einige Benutzer eine bestimmte Website lesen oder verwenden können, daher sollten Anpassungen, die Inhalte betreffen, sorgfältig ausgewählt und auf Inhalte ausgerichtet werden, die sonst nicht lesbar sind.

### Benutzerpräferenzen

Dieses Medienfeature ist nur aktiv, wenn der Benutzer Farbschema-Präferenzen in seinem Betriebssystem aktiviert hat. Ein Beispiel für eine solche Funktion ist der High Contrast-Modus in Windows.

## Beispiele

> [!NOTE]
> Das untenstehende Beispiel funktioniert nur, wenn ein Browser verwendet wird, der dieses Medienfeature unterstützt und mit einer Präferenz wie dem High Contrast-Modus in Ihrem Betriebssystem aktiviert ist.

Dieses Beispiel ist ein Button, dessen Kontrast normalerweise über {{cssxref("box-shadow")}} erzielt wird. Im Modus mit erzwungenen Farben wird der Box-Shadow auf none erzwungen, daher verwendet das Beispiel das forced-colors Medienfeature, um sicherzustellen, dass ein Rand der entsprechenden Farbe (ButtonText in diesem Fall) vorhanden ist.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@media](/de/docs/Web/CSS/@media)
- [Styling für Windows High Contrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
