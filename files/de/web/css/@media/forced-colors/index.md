---
title: forced-colors
slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Die **`forced-colors`** [CSS](/de/docs/Web/CSS) [media feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um festzustellen, ob der {{Glossary("user_agent", "user agent")}} einen erzwungenen Farbmodus aktiviert hat, bei dem eine vom Benutzer gewählte, eingeschränkte Farbpalette auf der Seite erzwungen wird. Ein Beispiel für einen erzwungenen Farbmodus ist der Windows-Hochkontrastmodus.

## Syntax

Die `forced-colors` Media-Feature zeigt an, ob der Browser derzeit im erzwungenen Farbmodus ist.

### Werte

- `none`
  - : Der erzwungene Farbmodus ist nicht aktiv; die Farben der Seite werden nicht auf eine eingeschränkte Palette gezwungen.
- `active`
  - : Gibt an, dass der erzwungene Farbmodus aktiv ist. Der Browser stellt den Autoren die Farbpalette durch die [CSS-Systemfarbe](/de/docs/Web/CSS/system-color)-Schlüsselwörter zur Verfügung und, falls zutreffend, wird der entsprechende Wert von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) ausgelöst, damit Autoren die Seite anpassen können. Der Browser wählt den Wert für `prefers-color-scheme` basierend auf der Helligkeit der `Canvas`-Systemfarbe (siehe die [Color-Adjust-Spezifikation](https://drafts.csswg.org/css-color-adjust-1/#forced) für weitere Details).

## Hinweise zur Verwendung

### Eigenschaften, die vom erzwungenen Farbmodus betroffen sind

Im erzwungenen Farbmodus werden die Werte der folgenden Eigenschaften so behandelt, als ob sie keine Autorenwerte spezifiziert hätten. Das heißt, vom Browser spezifizierte Werte werden stattdessen verwendet. Diese vom Browser spezifizierten Werte beeinflussen nicht die Stil-Kaskade; die Werte werden stattdessen vom Browser zur Renderzeit erzwungen.

Diese vom Browser spezifizierten Werte werden aus dem Satz der Systemfarben ausgewählt — dies sorgt für einen konsistenten Kontrast für häufige UI-Elemente bei Benutzern, bei denen erzwungene Farben aktiviert sind.

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

Zusätzlich verhalten sich die folgenden Eigenschaften im erzwungenen Farbmodus speziell:

- {{cssxref("box-shadow")}} wird auf 'none' erzwungen
- {{cssxref("text-shadow")}} wird auf 'none' erzwungen
- {{cssxref("background-image")}} wird auf 'none' erzwungen für Werte, die nicht URL-basiert sind
- {{cssxref("color-scheme")}} wird auf 'light dark' erzwungen
- {{cssxref("scrollbar-color")}} wird auf 'auto' erzwungen

Die Systemfarben, die für die oben genannten Eigenschaften erzwungen werden, hängen vom Kontext des Elements ab. Zum Beispiel wird die {{cssxref("color")}}-Eigenschaft auf einem Button-Element auf `ButtonText` erzwungen. Bei normalem Text wird sie auf `CanvasText` erzwungen. Siehe die [Liste der Systemfarben](/de/docs/Web/CSS/system-color) für zusätzliche Details, wann jede in verschiedenen UI-Kontexten geeignet sein könnte.

> [!NOTE]
> Benutzeragenten wählen Systemfarben basierend auf den nativen Elementeigenschaften, _nicht_ auf hinzugefügten ARIA-Rollen.
> Ein Beispiel: Das Hinzufügen von `role="button"` zu einem `div` wird **nicht** dazu führen, dass die Farbe eines Elements auf `ButtonText` erzwungen wird.

Zusätzlich zu diesen Anpassungen helfen Browser dabei, die Lesbarkeit von Texten zu sichern, indem sie "Rückwände" hinter Text zeichnen. Dies ist besonders wichtig, um den Kontrast zu erhalten, wenn Text über Bildern platziert wird.

Es gibt einige Fälle, in denen der Benutzeragent die Werte für die oben genannten Eigenschaften nicht erzwingt:

Wenn {{cssxref("forced-color-adjust")}} auf `none` auf einem Element gesetzt ist, werden keine erzwungenen Farbwerte angewendet, und Autorenstile werden normal angewendet. Außerdem wird die Rückwand für Texte deaktiviert.

Wenn {{cssxref("forced-color-adjust")}} auf `preserve-parent-color` auf einem Element gesetzt ist, und der {{cssxref("color")}}-Wert auf dem Element nicht vom Elternteil geerbt wird, dann verhält sich das Element genauso, als wäre `preserve-parent-color` auf `none` gesetzt.

Wenn eine [Systemfarbe](/de/docs/Web/CSS/system-color) angegeben ist, wird sie anstelle des Wertes verwendet, der ansonsten hätte erzwungen werden müssen.

Sie können auch Systemfarben mit anderen Eigenschaften als den oben genannten verwenden, um sicherzustellen, dass der Rest der Seite sich in die eingeschränkte Farbpalette im erzwungenen Farbmodus integriert.

### Barrierefreiheitserwägungen

Im Allgemeinen sollten Web-Autoren das `forced-colors` Media-Feature **nicht** verwenden, um ein separates Design für Benutzer mit diesem aktivierten Feature zu erstellen. Stattdessen ist es beabsichtigt, kleine Anpassungen vorzunehmen, um die Benutzerfreundlichkeit oder Lesbarkeit zu verbessern, wenn die Standardanwendung von erzwungenen Farben für einen bestimmten Teil einer Seite nicht gut funktioniert.

Der hohe Kontrast, der durch die reduzierte Palette und die Text-Rückwände im erzwungenen Farbmodus bereitgestellt wird, ist für einige Benutzer oft unerlässlich, um eine bestimmte Website lesen oder nutzen zu können. Daher sollten Anpassungen, die den Inhalt betreffen, sorgfältig ausgewählt und auf Inhalte ausgerichtet werden, die ansonsten nicht lesbar sind.

### Benutzerpräferenzen

Dieses Media-Feature ist nur aktiv, wenn der Benutzer Farbeinstellungen in seinem Betriebssystem aktiviert hat. Ein Beispiel für solch eine Funktion ist der Hochkontrastmodus unter Windows.

## Beispiele

> [!NOTE]
> Das untenstehende Beispiel funktioniert nur in einem Browser, der dieses Media-Feature unterstützt, und mit einer Präferenz wie dem Hochkontrastmodus, die in Ihrem Betriebssystem aktiviert ist.

Dieses Beispiel ist ein Button, der normalerweise seinen Kontrast durch {{cssxref("box-shadow")}} erhält. Im erzwungenen Farbmodus wird box-shadow auf none erzwungen, daher verwendet das Beispiel das forced-colors Media-Feature, um sicherzustellen, dass es einen Rahmen in der passenden Farbe gibt (in diesem Fall ButtonText).

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
