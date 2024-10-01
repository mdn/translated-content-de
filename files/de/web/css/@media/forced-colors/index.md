---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der {{Glossary("user_agent", "User-Agent")}} einen erzwungenen Farbmodus aktiviert hat, bei dem eine vom Nutzer ausgewählte eingeschränkte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen erzwungenen Farbmodus ist der Windows-Hochkontrastmodus.

## Syntax

Das `forced-colors` Medien-Feature gibt an, ob der Browser derzeit im erzwungenen Farbmodus ist.

### Werte

- `none`
  - : Der erzwungene Farbmodus ist nicht aktiv; die Farben der Seite werden nicht auf eine eingeschränkte Palette erzwungen.
- `active`
  - : Gibt an, dass der erzwungene Farbmodus aktiv ist. Der Browser stellt die Farbpalette den Autoren über die [CSS-Systemfarben](/de/docs/Web/CSS/system-color)-Schlüsselwörter zur Verfügung und, falls zutreffend, wird der entsprechende Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) ausgelöst, sodass Autoren die Seite anpassen können. Der Browser wählt den Wert von `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [Farb-Anpassungs-Spezifikation](https://www.w3.org/TR/css-color-adjust-1/#forced) für mehr Details).

## Nutzungshinweise

### Von Forced-Color-Modus beeinflusste Eigenschaften

Im erzwungenen Farbmodus werden die Werte der folgenden Eigenschaften so behandelt, als ob keine Werte auf Autorenebene festgelegt wurden. Stattdessen werden vom Browser festgelegte Werte verwendet. Diese werteten des Browsers beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen zur Renderzeit vom Browser erzwungen.

Diese vom Browser festgelegten Werte werden aus dem Satz der Systemfarben ausgewählt – dies gewährleistet einen konsistenten Kontrast für gängige UI-Elemente für Nutzer, die erzwungene Farben aktiviert haben.

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

Darüber hinaus haben die folgenden Eigenschaften im erzwungenen Farbmodus ein spezielles Verhalten:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird auf 'none' erzwungen für Werte, die nicht URL-basiert sind
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die Systemfarben, die für die oben genannten Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Beispielsweise wird die {{cssxref("color")}} Eigenschaft bei einem Button-Element auf `ButtonText` erzwungen. Bei normalem Text wird sie auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für weitere Details, wann welche in verschiedenen UI-Kontexten angemessen sein könnten.

> [!NOTE]
> User-Agents wählen Systemfarben basierend auf den nativen Element-Semantiken, _nicht_ auf hinzugefügten ARIA-Rollen.
> Ein Beispiel: Das Hinzufügen von `role="button"` zu einem `div` wird **nicht** die Farbe des Elements auf `ButtonText` erzwingen.

Zusätzlich zu diesen Anpassungen unterstützen Browser die Lesbarkeit von Text, indem "Hinterlegungen" hinter Text gezeichnet werden. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text über Bildern platziert ist.

Es gibt zwei Fälle, in denen der User-Agent die Werte der oben genannten Eigenschaften nicht erzwingt — wenn ein {{cssxref("forced-color-adjust")}} Wert von `none` auf ein Element angewendet wird oder wenn vom Autor eine Systemfarbe angegeben wird.

Wenn forced-color-adjust auf einem Element auf `none` gesetzt wird, werden keine der erzwungenen Farbwerte angewendet, und Autorenstile werden wie gewohnt angewendet. Zusätzlich wird die Hinterlegung für Text deaktiviert.

Wenn eine Systemfarbe angegeben wird, wird sie anstelle des Wertes verwendet, der ansonsten erzwungen worden wäre.

Sie können auch Systemfarben mit jeder anderen Eigenschaft als denen, die oben aufgeführt sind, verwenden, um sicherzustellen, dass der Rest der Seite mit der eingeschränkten Farbpalette im erzwungenen Farbmodus integriert ist.

### Zugänglichkeitsbedenken

Im Allgemeinen sollten Webautoren **nicht** das `forced-colors` Medien-Feature verwenden, um ein separates Design für Nutzer mit diesem aktivierten Feature zu erstellen. Stattdessen ist die beabsichtigte Verwendung, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die Standardanwendung von erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette und Text-Hinterlegungen des erzwungenen Farbmodus geboten wird, ist oft wesentlich für einige Nutzer, um eine bestimmte Website lesen oder verwenden zu können. Daher sollten Anpassungen, die den Inhalt betreffen, sorgfältig ausgewählt und auf Inhalte gezielt angewendet werden, die ansonsten nicht lesbar sind.

### Benutzereinstellungen

Diese Medien-Feature ist nur aktiv, wenn der Benutzer in seinem Betriebssystem Präferenzen für Farbschemata aktiviert hat. Ein Beispiel für eine solche Funktion ist der Hochkontrastmodus in Windows.

## Beispiele

> [!NOTE]
> Das folgende Beispiel funktioniert nur in einem Browser, der dieses Medien-Feature unterstützt und mit einer Einstellung wie dem Hochkontrastmodus in Ihrem Betriebssystem aktiviert ist.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast über den {{cssxref("box-shadow")}} erhält. Im erzwungenen Farbmodus wird der box-shadow auf none gesetzt, daher wird das forced-colors Medien-Feature verwendet, um sicherzustellen, dass es einen Rand der entsprechenden Farbe (ButtonText in diesem Fall) gibt.

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
- [Styling für Windows-Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
