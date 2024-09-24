---
title: Feldgrößenanpassung
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe haben, wie z.B. Formularelemente. Diese Eigenschaft erlaubt es Ihnen, das standardmäßige Größenverhalten zu überschreiben, sodass Formularelemente ihre Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}} Elemente zu gestalten, damit sie sich an ihren Inhalt anpassen und wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

## Syntax

```css
/* Stichwortwerte */
field-sizing: content;
field-sizing: fixed;

/* Globale Werte */
field-sizing: inherit;
field-sizing: initial;
field-sizing: revert;
field-sizing: revert-layer;
field-sizing: unset;
```

### Werte

- `content`
  - : Ermöglicht es dem Element, seine Größe an den Inhalt anzupassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größenanpassung von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Textfelder so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie maximale Größenlimits erreichen (definiert durch die Größe ihres enthaltenen Elements oder mittels CSS gesetzt), an welchem Punkt ein Scrollen erforderlich wird, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Speziell `field-sizing: content` betrifft folgende Elemente:

- Formulareingabetypen, die direkte Texteingaben von Benutzern akzeptieren. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Element/input/email), [`number`](/de/docs/Web/HTML/Element/input/number), [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url).
  - Wenn keine Mindestbreite auf das Steuerelement gesetzt ist, wird es nur so breit sein wie der Textcursor.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributen werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut verändert die standardmäßige bevorzugte Größe solcher `<input>` Elemente. Daher hat `size` keinen Effekt auf `<input>` Elemente mit `field-sizing: content` gesetzt.
- [`file`](/de/docs/Web/HTML/Element/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert das Steuerelement die Größe, um den Dateinamen zu umschließen.
- {{htmlelement("textarea")}} Steuerelemente. Es ist wichtig zu beachten, dass `<textarea>` Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Textsteuerelemente verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>` Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie in der Höhe zu wachsen, um zusätzliche Zeilen des Inhalts anzuzeigen. Wenn eine Höhenbeschränkung erreicht wird, zeigen sie dann ein Scrollbalken, damit der gesamte Inhalt angezeigt werden kann.
  - [`rows`](/de/docs/Web/HTML/Element/textarea#cols) und [`cols`](/de/docs/Web/HTML/Element/textarea#cols) Attribute ändern die standardmäßige bevorzugte Größe eines `<textarea>`. Infolgedessen haben `rows`/`cols` keinen Effekt auf `<textarea>` Elemente mit `field-sizing: content` gesetzt.
- {{htmlelement("select")}} Steuerelemente. Diese verhalten sich etwas anders als erwartet, wenn `field-sizing: content` gesetzt ist. Der Effekt hängt davon ab, welche Art von `<select>` Steuerelement Sie erstellen:
  - Normale Drop-down Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Drop-down auf die Anzeige des längsten Optionswerts eingestellt.)
  - Listenboxen (`<select>` Elemente mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) oder [`size`](/de/docs/Web/HTML/Element/select#multiple) Attribut) sind groß genug, um alle Optionen anzuzeigen, ohne dass Scrollen erforderlich ist. (Standardmäßig erfordert die Drop-down Box Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Element/select#size) Attribut hat sehr wenig Effekt auf `<select>` Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob `size` gleich `1` ist, um festzustellen, ob das `<select>` Steuerelement als Drop-down oder Listbox erscheinen soll. Es wird jedoch immer alle Optionen einer Listenbox anzeigen, selbst wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing` Interaktion mit anderen Größeneinstellungen

Die Größenflexibilität, die durch `field-sizing: content` bereitgestellt wird, kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} zu setzen, wenn Sie `field-sizing: content` verwenden, da sie eine feste Größe auf das Steuerelement wieder auferlegen. Das Verwenden von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, weil sie dem Steuerelement ermöglichen mit dem eingegebenen Text zu wachsen und zu schrumpfen und verhindern, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut bewirkt, dass das Steuerelement aufhört zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, umschließen effektiv den Inhalt, bis ein unteres oder oberes Größenlimit erreicht wird.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jedes mit einem zugeordneten {{htmlelement("label")}}: zwei `<input>` Elemente der Typen [`text`](/de/docs/Web/HTML/Element/input/text) und [`email`](/de/docs/Web/HTML/Element/input/email) sowie ein {{htmlelement("textarea")}} Element.

```html
<div>
  <label for="name">Enter name:</label>
  <input type="text" id="name" maxlength="50" />
</div>
<div>
  <label for="email">Enter email:</label>
  <input type="email" id="email" maxlength="50" placeholder="e.g. a@b.com" />
</div>
<div>
  <label for="comment">Enter comment:</label>
  <textarea id="comment">This is a comment.</textarea>
</div>
```

Beachten Sie folgende Punkte zum HTML:

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut gesetzt, das verhindert, dass die Größe des Feldes zunimmt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in Richtung der Zeilen wachsen, bis es den Rand der {{cssxref("min-width")}} Beschränkung (im CSS Code unten gesetzt) erreicht, dann beginnt es, neue Zeilen in Blockrichtung hinzuzufügen, um weitere Zeichen zu enthalten.
- Das `email` Eingabefeld hat einen Platzhalter gesetzt. Das führt dazu, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer anfängt zu tippen, ändert das Feld die Größe auf den `min-width` Wert. Das `text` Feld, das keinen Platzhalter hat, wird anfänglich mit `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}} um die Eingabengröße zu beschränken. Es ist wichtig zu wiederholen, dass, wenn keine Mindestbreite auf die Felder gesetzt wäre, sie nur so breit wie der Textcursor gerendert würden.

Wir geben den `<label>`s auch rudimentäres Styling, damit sie ordentlich neben den Feldern sitzen.

```css hidden
body {
  box-sizing: border-box;
  padding: 20px;
}

div {
  margin-bottom: 20px;
  display: flex;
}
```

```css
input,
textarea {
  field-sizing: content;
  min-width: 50px;
  max-width: 350px;
}

label {
  width: 150px;
  margin-right: 20px;
  text-align: right;
}
```

#### Ergebnis

Versuchen Sie, Text in die untenstehenden Felder einzugeben und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der Anzeige von `<select>` Elementen

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf {{htmlelement("select")}} Elemente, sowohl Drop-down Menütypen als auch mehrzeilige Listenfeldern.

#### HTML

Das HTML enthält zwei Sätze von `<select>` Elementen: einen mit `field-sizing: content` angewendet und einen ohne, damit Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich als bei Textfeldern ist). Jeder Satz enthält einen Drop-down Menütyp und einen mehrzeiligen Listenfeldtyp (mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut gesetzt).

```html
<div class="field-sizing">
  <h2>Mit <code>field-sizing: content</code></h2>
  <select>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option selected>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
  <select multiple>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
</div>
<div>
  <h2>Ohne <code>field-sizing: content</code></h2>
  <select>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option selected>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
  <select multiple>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
</div>
```

> [!NOTE]
> Es ist bewährte Praxis, ein {{htmlelement("label")}} Element für jedes Formularelement einzuschließen, um jedem Feld eine sinnvolle Textbeschreibung für Barrierefreiheitszwecke zuzuordnen (siehe [Sinnvolle Textetiketten](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich rein auf Aspekte der visuellen Darstellung von Formularelementen konzentriert, aber Sie sollten sicherstellen, dass Sie Formularetiketten in Produktivcode einschließen.

#### CSS

Im CSS ist `field-sizing: content` nur auf den ersten Satz von `<select>` Elementen gesetzt.

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}

select {
  valign: top;
}
```

```css
.field-sizing select {
  field-sizing: content;
}
```

#### Ergebnis

{{ EmbedLiveSample('Controlling select element display', '100%', '170') }}

Beachten Sie die folgenden Effekte von `field-sizing: content`:

- Das Drop-down Menü passt immer die Größe an den angezeigten Optionenwert an und ändert die Größe, wenn unterschiedliche Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe fest auf die Breite der längsten Option eingestellt.
- Das Multi-Select Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer durch das Feld scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
