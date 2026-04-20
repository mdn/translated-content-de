---
title: "`forced-colors` CSS-Media-Feature"
short-title: forced-colors
slug: Web/CSS/Reference/At-rules/@media/forced-colors
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der {{Glossary("user_agent", "User Agent")}} einen erzwungenen Farbmodus aktiviert hat, bei dem eine vom Benutzer gewählte, eingeschränkte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen erzwungenen Farbmodus ist der Windows-Modus "Hoher Kontrast".

## Syntax

Das `forced-colors`-Media-Feature gibt an, ob der Browser derzeit im erzwungenen Farbmodus ist oder nicht.

### Werte

- `none`
  - : Der erzwingende Farbmodus ist nicht aktiv; die Farben der Seite werden nicht in eine eingeschränkte Palette gezwungen.
- `active`
  - : Gibt an, dass der erzwingende Farbmodus aktiv ist. Der Browser stellt den Autoren die Farbpalette über die [CSS-Systemfarben](/de/docs/Web/CSS/Reference/Values/system-color)-Schlüsselwörter zur Verfügung und, falls angemessen, wird der entsprechende Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) ausgelöst, sodass Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [Color Adjust Spec](https://drafts.csswg.org/css-color-adjust-1/#forced) für weitere Details).

## Nutzungshinweise

### Eigenschaften, die vom erzwingenden Farbmodus betroffen sind

Im erzwingenden Farbmodus werden die Werte der folgenden Eigenschaften so behandelt, als ob sie keine Werte auf Autorenebene spezifiziert hätten. Das bedeutet, dass browser-spezifizierte Werte verwendet werden. Diese beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen vom Browser zur Laufzeit erzwungen.

Diese browser-spezifizierten Werte werden aus dem Set systemischer Farben ausgewählt — dies gewährleistet einen konsistenten Kontrast für allgemeine UI-Elemente für Benutzer, die erzwingende Farben aktiviert haben.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- [SVG fill Attribut](/de/docs/Web/SVG/Reference/Attribute/fill)
- [SVG stroke Attribut](/de/docs/Web/SVG/Reference/Attribute/stroke)

Zusätzlich haben die folgenden Eigenschaften ein spezielles Verhalten im erzwingenden Farbmodus:

- {{cssxref("box-shadow")}} wird auf 'none' gesetzt
- {{cssxref("text-shadow")}} wird auf 'none' gesetzt
- {{cssxref("background-image")}} wird auf 'none' gesetzt für Werte, die nicht URL-basiert sind
- {{cssxref("color-scheme")}} wird auf 'light dark' gesetzt
- {{cssxref("scrollbar-color")}} wird auf 'auto' gesetzt

Die Systemfarben, die für die oben genannten Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Zum Beispiel wird die {{cssxref("color")}}-Eigenschaft auf einem Button auf `ButtonText` erzwungen. Bei normalem Text wird sie auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/Reference/Values/system-color) für zusätzliche Details darüber, wann jede geeignet sein könnte in verschiedenen UI-Kontexten.

> [!NOTE]
> User Agents wählen Systemfarben basierend auf nativen Elementsemantics, _nicht_ auf hinzugefügten ARIA-Rollen.
> Zum Beispiel wird das Hinzufügen von `role="button"` zu einem `div` **nicht** dazu führen, dass die Farbe eines Elements zu `ButtonText` erzwungen wird.

Zusätzlich zu diesen Anpassungen helfen Browser, die Lesbarkeit von Text zu gewährleisten, indem "Backplates" hinter Text gezeichnet werden. Dies ist besonders wichtig, um den Kontrast zu bewahren, wenn Text auf Bildern platziert wird.

Es gibt einige Fälle, in denen der User Agent die Werte für die oben genannten Eigenschaften nicht erzwingt:

Wenn {{cssxref("forced-color-adjust")}} auf `none` für ein Element gesetzt ist, werden keine der erzwungenen Farbwerte angewendet, und Autorenstile werden normal angewendet. Zusätzlich wird die Backplate für Text deaktiviert.

Wenn {{cssxref("forced-color-adjust")}} auf `preserve-parent-color` für ein Element gesetzt ist und der {{cssxref("color")}}-Wert des Elements nicht von seinem Elternteil erbt, dann wird das Element dasselbe Verhalten wie bei der Einstellung auf `preserve-parent-color` zu `none` zeigen.

Wenn eine [Systemfarbe](/de/docs/Web/CSS/Reference/Values/system-color) angegeben ist, wird sie anstelle des Wertes verwendet, der ansonsten erzwungen worden wäre.

Sie können Systemfarben auch mit jeder anderen Eigenschaft _als den oben genannten_ verwenden, um sicherzustellen, dass der Rest der Seite in das eingeschränkte Farbpalette integriert wird, die im erzwingenden Farbmodus verfügbar ist.

### Barrierefreiheitsbedenken

Im Allgemeinen sollten Webautoren **nicht** das `forced-colors`-Media-Feature verwenden, um ein separates Design für Benutzer mit dieser Funktion zu erstellen. Es soll stattdessen verwendet werden, um kleine Anpassungen vorzunehmen, die die Benutzbarkeit oder Lesbarkeit verbessern, wenn die Standardanwendung von erzwungenen Farben in einem bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette und die Text-Backplates des erzwungenen Farbmodus bereitgestellt wird, ist für einige Benutzer oft unerlässlich, um eine gegebene Website lesen oder nutzen zu können, daher sollten Anpassungen, die den Inhalt beeinflussen, sorgfältig gewählt und auf Inhalte beschränkt werden, die sonst nicht lesbar sind.

### Benutzerpräferenzen

Diese Media-Funktion ist nur aktiv, wenn der Benutzer Farbdesign-Präferenzen in seinem Betriebssystem aktiviert hat. Ein Beispiel für eine solche Funktion ist der Modus "Hoher Kontrast" unter Windows.

## Beispiele

> [!NOTE]
> Das untenstehende Beispiel funktioniert nur in einem Browser, der dieses Media-Feature unterstützt, und mit einer Präferenz wie dem Modus "Hoher Kontrast" in Ihrem Betriebssystem.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast über {{cssxref("box-shadow")}} erhält. Im erzwingenden Farbmodus wird box-shadow auf none gesetzt, daher verwendet das Beispiel das forced-colors-Media-Feature, um sicherzustellen, dass es einen Rand mit der entsprechenden Farbe (ButtonText in diesem Fall) gibt.

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

- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [Styling für Windows hohen Kontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
