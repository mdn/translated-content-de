---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 4b465e22616ac4bc5aedb821453e15a9fea73e90
---

{{CSSRef}}

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um festzustellen, ob der {{Glossary("user_agent", "Benutzeragent")}} einen Modus für erzwungene Farben aktiviert hat, bei dem eine vom Benutzer gewählte begrenzte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen Modus für erzwungene Farben ist der Hochkontrastmodus von Windows.

## Syntax

Das Medienfeature `forced-colors` gibt an, ob der Browser sich derzeit im Modus für erzwungene Farben befindet.

### Werte

- `none`
  - : Der Modus für erzwungene Farben ist nicht aktiv; die Farben der Seite werden nicht in eine begrenzte Palette gezwungen.
- `active`
  - : Zeigt an, dass der Modus für erzwungene Farben aktiv ist. Der Browser stellt den Autoren die Farbpalette über die [CSS-Systemfarben](/de/docs/Web/CSS/system-color) Schlüsselwörter zur Verfügung und löst, falls zutreffend, den entsprechenden Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) aus, damit Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [Spezifikation zur Farbkorrektur](https://www.w3.org/TR/css-color-adjust-1/#forced) für weitere Details).

## Anwendungshinweise

### Eigenschaften, die vom Modus für erzwungene Farben betroffen sind

Im Modus für erzwungene Farben werden die Werte der folgenden Eigenschaften so behandelt, als ob sie keine autorenspezifischen Werte angegeben hätten. Das heißt, es werden browserdefinierte Werte verwendet. Die browserdefinierten Werte beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen vom Browser zur Malzeit erzwungen.

Diese browserdefinierten Werte werden aus dem Satz von Systemfarben ausgewählt – dies gewährleistet einen konsistenten Kontrast für häufige UI-Elemente für Benutzer, die erzwungene Farben aktiviert haben.

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

Zusätzlich haben die folgenden Eigenschaften ein besonderes Verhalten im Modus für erzwungene Farben:

- {{cssxref("box-shadow")}} wird auf 'none' gesetzt
- {{cssxref("text-shadow")}} wird auf 'none' gesetzt
- {{cssxref("background-image")}} wird für Werte, die nicht auf URLs basieren, auf 'none' gesetzt
- {{cssxref("color-scheme")}} wird auf 'light dark' gesetzt
- {{cssxref("scrollbar-color")}} wird auf 'auto' gesetzt

Die Systemfarben, die für die oben genannten Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Zum Beispiel wird die {{cssxref("color")}}-Eigenschaft auf einem Button-Element auf `ButtonText` gesetzt. Bei normalem Text wird sie auf `CanvasText` gesetzt. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für zusätzliche Details, wann welche Farben in verschiedenen UI-Kontexten angemessen sein könnten.

> [!NOTE]
> Benutzeragenten wählen Systemfarben basierend auf den nativen Element-Semantiken, _nicht_ auf hinzugefügten ARIA-Rollen.
> Ein Beispiel: Das Hinzufügen von `role="button"` zu einem `div` wird **nicht** dazu führen, dass die Farbe eines Elements auf `ButtonText` erzwungen wird.

Zusätzlich zu diesen Anpassungen helfen Browser dabei, die Lesbarkeit von Text zu gewährleisten, indem sie "Hintergrundplatten" hinter Text zeichnen. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text auf Bildern platziert wird.

Es gibt einige Fälle, in denen der Benutzeragent die Werte für die oben genannten Eigenschaften nicht erzwingt:

Wenn {{cssxref("forced-color-adjust")}} auf `none` für ein Element gesetzt ist, werden keine erzwungenen Farbwerte angewendet, und Autorenstile werden normal angewendet. Außerdem wird die Hintergrundplatte für Text deaktiviert.

Wenn {{cssxref("forced-color-adjust")}} auf `preserve-parent-color` für ein Element gesetzt ist und der {{cssxref("color")}}-Wert des Elements nicht von seinem Elternteil geerbt wird, dann wird das Element so behandelt, als ob `preserve-parent-color` auf `none` gesetzt wäre.

Wenn eine [Systemfarbe](/de/docs/Web/CSS/system-color) angegeben ist, wird sie anstelle des Werts verwendet, der ansonsten erzwungen worden wäre.

Sie können auch Systemfarben mit jeder _anderen_ Eigenschaft als denen, die oben aufgeführt sind, verwenden, um sicherzustellen, dass der Rest der Seite in die eingeschränkte Farbpalette im Modus für erzwungene Farben integriert wird.

### Barrierefreiheit

Im Allgemeinen sollten Webautoren **nicht** das Medienfeature `forced-colors` verwenden, um ein separates Design für Benutzer mit aktivierter Funktion zu erstellen. Stattdessen ist es beabsichtigt, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die standardmäßige Anwendung von erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette des Modus für erzwungene Farben und die Hintergrundplatten bereitgestellt wird, ist oft entscheidend dafür, dass manche Benutzer eine bestimmte Website lesen oder nutzen können. Daher sollten Anpassungen, die Inhalte betreffen, sorgfältig ausgewählt und auf Inhalte ausgerichtet werden, die ansonsten nicht lesbar sind.

### Benutzerpräferenzen

Dieses Medienfeature ist nur aktiv, wenn der Benutzer in seinem Betriebssystem Farbpräferenzen aktiviert hat. Ein Beispiel für eine solche Funktion ist der Hochkontrastmodus unter Windows.

## Beispiele

> [!NOTE]
> Das untenstehende Beispiel funktioniert nur, wenn Sie einen Browser verwenden, der dieses Medienfeature unterstützt, und mit einer Präferenz wie dem Hochkontrastmodus in Ihrem Betriebssystem aktiviert.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast über {{cssxref("box-shadow")}} erhält. Im Modus für erzwungene Farben wird `box-shadow` auf none gesetzt, daher verwendet das Beispiel das Medienfeature `forced-colors`, um sicherzustellen, dass ein Rand der entsprechenden Farbe vorhanden ist (in diesem Fall ButtonText).

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
- [Styling für Windows Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
