---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der {{Glossary("user_agent", "User-Agent")}} einen erzwungenen Farbschema-Modus aktiviert hat, bei dem eine vom Benutzer gewählte begrenzte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen erzwungenen Farbschema-Modus ist der hohe Kontrastmodus von Windows.

## Syntax

Das `forced-colors` Medienmerkmal gibt an, ob sich der Browser derzeit im erzwungenen Farbschema-Modus befindet.

### Werte

- `none`
  - : Der erzwungene Farbschema-Modus ist nicht aktiv; die Farben der Seite werden nicht in eine eingeschränkte Palette gezwungen.
- `active`
  - : Gibt an, dass der erzwungene Farbschema-Modus aktiv ist. Der Browser stellt den Autoren die Farbpalette über die [CSS-Systemfarben](/de/docs/Web/CSS/system-color)-Schlüsselwörter zur Verfügung und löst, falls zutreffend, den entsprechenden Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) aus, sodass Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [Spec für die Farb-Anpassung](https://drafts.csswg.org/css-color-adjust-1/#forced) für weitere Details).

## Hinweise zur Verwendung

### Eigenschaften, die durch den erzwungenen Farbmodus beeinflusst werden

Im erzwungenen Farbschema-Modus werden die Werte der folgenden Eigenschaften behandelt, als ob sie keine Autorenebenenwerte angegeben hätten. Das bedeutet, dass Browser-spezifizierte Werte verwendet werden. Die browser-spezifizierten Werte beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen vom Browser zur Malzeit erzwungen.

Diese browser-spezifizierten Werte werden aus dem Satz von Systemfarben ausgewählt – dies stellt einen konsistenten Kontrast für gängige UI-Elemente für Benutzer sicher, die erzwungene Farben aktiviert haben.

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

Darüber hinaus haben die folgenden Eigenschaften im erzwungenen Farbschema-Modus ein besonderes Verhalten:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird auf 'none' erzwungen für Werte, die nicht url-basiert sind
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die Systemfarben, die für die obigen Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Beispielsweise wird die {{cssxref("color")}}-Eigenschaft eines Button-Elements auf `ButtonText` erzwungen. Bei normalem Text wird sie auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für zusätzliche Informationen darüber, wann welche Farbe in verschiedenen UI-Kontexten angemessen sein könnte.

> [!NOTE]
> User Agents wählen Systemfarben basierend auf der nativen Elementsemantik, _nicht_ auf hinzugefügten ARIA-Rollen.
> Ein Beispiel: Das Hinzufügen von `role="button"` zu einem `div` wird **nicht** dazu führen, dass die Farbe eines Elements auf `ButtonText` erzwungen wird.

Zusätzlich zu diesen Anpassungen sorgen Browser dafür, dass die Lesbarkeit von Text durch das Zeichnen von "Rückenplatten" hinter Text gewährleistet wird. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text über Bildern platziert wird.

Es gibt einige Fälle, in denen der User Agent die Werte für die oben genannten Eigenschaften nicht erzwingt:

Wenn {{cssxref("forced-color-adjust")}} auf `none` für ein Element gesetzt ist, werden keine der erzwungenen Farbwerte angewendet, und Autorenstile werden wie gewohnt angewendet. Darüber hinaus wird die Rückenplatte für Text deaktiviert.

Wenn {{cssxref("forced-color-adjust")}} auf `preserve-parent-color` für ein Element gesetzt ist und der {{cssxref("color")}}-Wert des Elements nicht von seinem Elternteil erbt, dann verhält sich das Element genauso, als wäre `preserve-parent-color` auf `none` gesetzt.

Wenn eine [Systemfarbe](/de/docs/Web/CSS/system-color) angegeben wird, wird sie anstelle des Wertes verwendet, der sonst erzwungen worden wäre.

Sie können auch Systemfarben mit jeder anderen als den oben aufgeführten Eigenschaften verwenden, um sicherzustellen, dass der Rest der Seite mit der eingeschränkten Farbpalette im erzwungenen Farbschema-Modus integriert ist.

### Zugänglichkeitsbedenken

Im Allgemeinen sollten Web-Autoren **nicht** das `forced-colors` Medienmerkmal verwenden, um ein separates Design für Benutzer mit aktiviertem dieser Funktion zu erstellen. Stattdessen ist die beabsichtigte Verwendung, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die Standardanwendung erzwungener Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette und die Text-Rückenplatten des erzwungenen Farbschema-Modus geboten wird, ist oft essentiell für einige Benutzer, um eine bestimmte Website lesen oder nutzen zu können, daher sollten Anpassungen, die die Inhalte betreffen, sorgfältig ausgewählt und auf Inhalte gerichtet sein, die sonst nicht lesbar sind.

### Benutzerpräferenzen

Dieses Medienmerkmal ist nur aktiv, wenn der Benutzer Farb-Schema-Präferenzen in seinem Betriebssystem aktiviert hat. Ein Beispiel für eine solche Funktion ist der hohe Kontrastmodus unter Windows.

## Beispiele

> [!NOTE]
> Das unten stehende Beispiel funktioniert nur, wenn ein Browser verwendet wird, der dieses Medienmerkmal unterstützt, und mit einer Präferenz wie dem hohen Kontrastmodus, die in Ihrem Betriebssystem aktiviert ist.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast über {{cssxref("box-shadow")}} erhält. Im erzwungenen Farbschema-Modus wird der Box-Shadow auf none erzwungen, daher nutzt das Beispiel das `forced-colors` Medienmerkmal, um sicherzustellen, dass ein Rand in der entsprechenden Farbe (in diesem Fall ButtonText) vorhanden ist.

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
- [Styling für den hohen Kontrast von Windows mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
