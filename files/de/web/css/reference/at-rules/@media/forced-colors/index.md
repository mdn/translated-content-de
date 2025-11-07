---
title: forced-colors
slug: Web/CSS/Reference/At-rules/@media/forced-colors
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Mediamerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der {{Glossary("user_agent", "User-Agent")}} einen Modus mit erzwungenen Farben aktiviert hat, in dem eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite durchgesetzt wird. Ein Beispiel für einen Modus mit erzwungenen Farben ist der Windows-Hochkontrastmodus.

## Syntax

Das `forced-colors` Mediamerkmal zeigt an, ob der Browser derzeit im Modus der erzwungenen Farben ist.

### Werte

- `none`
  - : Der Modus der erzwungenen Farben ist nicht aktiv; die Farben der Seite werden nicht in eine eingeschränkte Palette gezwungen.
- `active`
  - : Zeigt an, dass der Modus der erzwungenen Farben aktiv ist. Der Browser stellt die Farbpalette Autoren über die [CSS-Systemfarben](/de/docs/Web/CSS/Reference/Values/system-color) Schlüsselwörter bereit und, falls zutreffend, aktiviert den entsprechenden Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme), damit Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [color adjust spec](https://drafts.csswg.org/css-color-adjust-1/#forced) für weitere Details).

## Verwendungshinweise

### Eigenschaften, die vom Modus der erzwungenen Farben betroffen sind

Im Modus der erzwungenen Farben werden die Werte der folgenden Eigenschaften behandelt, als hätten sie keine Angeben auf Autorenebene. Das heißt, browserspezifische Werte werden stattdessen verwendet. Die browserspezifischen Werte beeinflussen nicht die Style-Kaskade; die Werte werden stattdessen vom Browser zur Renderzeit erzwungen.

Diese browserspezifischen Werte werden aus der Menge der Systemfarben ausgewählt — das stellt einen konsistenten Kontrast für gängige UI-Elemente für Benutzer sicher, die erzwungene Farben aktiviert haben.

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

Zusätzlich weisen die folgenden Eigenschaften im Modus der erzwungenen Farben ein spezielles Verhalten auf:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird für Werte, die nicht URL-basiert sind, auf 'none' erzwungen
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die Systemfarben, die für die oben genannten Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Beispielsweise wird die {{cssxref("color")}}-Eigenschaft auf dem Button-Element auf `ButtonText` erzwungen. Bei normalem Text wird sie auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/Reference/Values/system-color) für zusätzliche Details darüber, wann jede in verschiedenen UI-Kontexten geeignet sein könnte.

> [!NOTE]
> User Agents wählen Systemfarben basierend auf nativen Elementsemantiken, _nicht_ basierend auf hinzugefügten ARIA-Rollen.
> Ein Beispiel: Wenn ein `role="button"` zu einem `div` hinzugefügt wird, wird die Farbe des Elements **nicht** auf `ButtonText` erzwungen.

Zusätzlich zu diesen Anpassungen werden Browser helfen, die Lesbarkeit von Text zu gewährleisten, indem sie "Backplates" hinter Text zeichnen. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text über Bildern platziert wird.

Es gibt einige Fälle, in denen der User-Agent die Werte für die oben genannten Eigenschaften nicht erzwingt:

Wenn {{cssxref("forced-color-adjust")}} auf ein Element auf `none` gesetzt ist, werden keine der erzwungenen Farbwerte angewendet und Autorenstile werden normal angewendet. Zusätzlich wird die Backplate für Text deaktiviert.

Wenn {{cssxref("forced-color-adjust")}} auf `preserve-parent-color` für ein Element gesetzt ist und der {{cssxref("color")}}-Wert des Elements nicht von dessen Elternteil geerbt wird, verhält sich das Element so, als wäre `preserve-parent-color` auf `none` gesetzt.

Wenn eine [Systemfarbe](/de/docs/Web/CSS/Reference/Values/system-color) angegeben ist, wird sie anstelle des Wertes verwendet, der ansonsten erzwungen worden wäre.

Sie können auch Systemfarben mit jeder anderen Eigenschaft _außer_ den oben genannten verwenden, um sicherzustellen, dass der Rest der Seite mit der eingeschränkten Farbpalette im Modus der erzwungenen Farben integriert wird.

### Barrierefreiheit

Im Allgemeinen sollten Webautoren **nicht** das `forced-colors` Mediamerkmal verwenden, um ein separates Design für Benutzer mit diesem aktivierten Feature zu erstellen. Stattdessen ist die beabsichtigte Nutzung, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die standardmäßige Anwendung von erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, den der Modus der erzwungenen Farben mit seiner reduzierten Palette und Text-Backplates bietet, ist oft unerlässlich, damit einige Benutzer eine gegebene Website lesen oder nutzen können, sodass Anpassungen sorgfältig ausgewählt und auf Inhalte gezielt werden sollten, die ansonsten nicht lesbar sind.

### Benutzerpräferenzen

Dieses Mediamerkmal ist nur aktiv, wenn der Benutzer Farbpräferenzen in seinem Betriebssystem aktiviert hat. Ein Beispiel für ein solches Feature ist der Hochkontrastmodus auf Windows.

## Beispiele

> [!NOTE]
> Das untenstehende Beispiel funktioniert nur, wenn ein Browser verwendet wird, der dieses Mediamerkmal unterstützt, und eine Präferenz wie der Hochkontrastmodus in Ihrem Betriebssystem aktiviert ist.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast durch {{cssxref("box-shadow")}} erhält. Unter dem Modus der erzwungenen Farben wird box-shadow auf none erzwungen, sodass das Beispiel das forced-colors Mediamerkmal verwendet, um sicherzustellen, dass es eine Umrandung der entsprechenden Farbe gibt (in diesem Fall ButtonText).

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
- [Styling für Windows Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
