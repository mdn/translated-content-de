---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Das **`forced-colors`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der [User-Agent](/de/docs/Glossary/user_agent) einen erzwungenen Farbenmodus aktiviert hat, bei dem eine vom Benutzer gewählte eingeschränkte Farbpalette auf der Seite durchgesetzt wird. Ein Beispiel für einen erzwungenen Farbenmodus ist der Windows-Hochkontrastmodus.

## Syntax

Das `forced-colors`-Medienmerkmal zeigt an, ob der Browser sich derzeit im erzwungenen Farbenmodus befindet oder nicht.

### Werte

- `none`
  - : Der erzwungene Farbenmodus ist nicht aktiv; die Farben der Seite werden nicht in eine eingeschränkte Palette gezwungen.
- `active`
  - : Zeigt an, dass der erzwungene Farbenmodus aktiv ist. Der Browser stellt die Farbpalette den Autoren über die [CSS-Systemfarben](/de/docs/Web/CSS/system-color)-Schlüsselwörter zur Verfügung und löst gegebenenfalls den entsprechenden Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) aus, sodass Autoren die Seite anpassen können. Der Browser wählt den Wert von `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe aus (siehe die [Spezi für Farb-Anpassungen](https://www.w3.org/TR/css-color-adjust-1/#forced) für weitere Details).

## Nutzungshinweise

### Eigenschaften, die vom erzwungenen Farbenmodus betroffen sind

Im erzwungenen Farbenmodus werden die Werte der folgenden Eigenschaften so behandelt, als ob keine vom Autor festgelegten Werte angegeben wären. Das heißt, vom Browser festgelegte Werte werden stattdessen verwendet. Die vom Browser festgelegten Werte beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen vom Browser zur Ausführungszeit erzwungen.

Diese vom Browser festgelegten Werte werden aus der Menge der Systemfarben ausgewählt – dies stellt einen konsistenten Kontrast für allgemein UI-Elemente für Benutzer sicher, die erzwungene Farben aktiviert haben.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- [SVG `fill`-Attribut](/de/docs/Web/SVG/Attribute/fill)
- [SVG `stroke`-Attribut](/de/docs/Web/SVG/Attribute/stroke)

Zusätzlich haben die folgenden Eigenschaften im erzwungenen Farbenmodus ein spezielles Verhalten:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird für Werte, die nicht URL-basiert sind, auf 'none' erzwungen
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die Systemfarben, die für die oben genannten Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Beispielsweise wird die {{cssxref("color")}}-Eigenschaft auf einem Button-Element auf `ButtonText` erzwungen. Bei normalem Text wird es auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für zusätzliche Details, wann jede in verschiedenen UI-Kontexten angemessen ist.

> [!NOTE]
> User-Agents wählen Systemfarben basierend auf den nativen Element-Semantiken, _nicht_ auf hinzugefügten ARIA-Rollen.
> Zum Beispiel führt das Hinzufügen von `role="button"` zu einem `div` **nicht** dazu, dass die Farbe eines Elements auf `ButtonText` erzwungen wird

Zusätzlich zu diesen Anpassungen sorgen Browser dafür, dass die Lesbarkeit von Text erhalten bleibt, indem sie „Hintergründe“ hinter dem Text zeichnen. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text auf Bildern platziert wird.

Es gibt zwei Fälle, in denen der Benutzeragent die Werte für die oben genannten Eigenschaften nicht erzwingt – wenn ein {{cssxref("forced-color-adjust")}}-Wert von `none` auf ein Element angewendet wird oder wenn eine Systemfarbe vom Autor spezifiziert wird.

Wenn forced-color-adjust auf `none` für ein Element eingestellt ist, werden keine erzwungenen Farbwerte angewendet, und Autorenstile werden normal angewendet. Zusätzlich wird der Hintergrund für den Text deaktiviert.

Wenn eine Systemfarbe angegeben ist, wird diese anstelle des Wertes verwendet, der andernfalls erzwungen worden wäre.

Sie können auch Systemfarben mit jeder anderen Eigenschaft _als denen oben aufgeführt_ verwenden, um sicherzustellen, dass der Rest der Seite mit der eingeschränkten Farbpalette im erzwungenen Farbenmodus integriert wird.

### Barrierefreiheit

Im Allgemeinen sollten Webautoren das `forced-colors`-Medienmerkmal **nicht** verwenden, um ein separates Design für Benutzer zu erstellen, bei denen diese Funktion aktiviert ist. Stattdessen ist die beabsichtigte Verwendung, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die Standardanwendung der erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette und die Text-Hintergründe im erzwungenen Farbenmodus bereitgestellt wird, ist oft unerlässlich, damit einige Benutzer eine Website lesen oder verwenden können. Daher sollten Anpassungen, die den Inhalt betreffen, sorgfältig ausgewählt und auf Inhalte fokussiert werden, die ansonsten nicht lesbar sind.

### Benutzerpräferenzen

Dieses Medienmerkmal ist nur aktiv, wenn der Benutzer Farbpräferenzen in seinem Betriebssystem aktiviert hat. Ein Beispiel für eine solche Funktion ist der Hochkontrastmodus unter Windows.

## Beispiele

> [!NOTE]
> Das unten stehende Beispiel funktioniert nur in einem Browser, der dieses Medienmerkmal unterstützt, und mit einer in Ihrem Betriebssystem aktivierten Präferenz wie dem Hochkontrastmodus.

Dieses Beispiel ist ein Knopf, der normalerweise seinen Kontrast über {{cssxref("box-shadow")}} erhält. Im erzwungenen Farbenmodus wird der box-shadow auf none erzwungen, daher nutzt das Beispiel das forced-colors Medienmerkmal, um sicherzustellen, dass es einen Rand der passenden Farbe gibt (ButtonText in diesem Fall).

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
- [Gestaltung für den Windows-Hochkontrast mit Standards für erzwungene Farben.](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
