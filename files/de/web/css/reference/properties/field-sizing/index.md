---
title: "`field-sizing` CSS property"
short-title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: ee2ece4eb07c07cae8baf6ab7b2ee748f4644565
---

Die **`field-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die mit einer standardmäßig bevorzugten Größe versehen sind, wie z. B. Formulareingabeelemente. Diese Eigenschaft ermöglicht es Ihnen, das Standardgrößenverhalten zu überschreiben und Formulareingaben so anzupassen, dass sie ihre Inhalte umfassen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente zu gestalten und es ihnen zu ermöglichen, ihren Textinhalt zu umschließen sowie zu wachsen, wenn mehr Text in das Formulareingabeelement eingegeben wird.

## Syntax

```css
/* Keyword values */
field-sizing: content;
field-sizing: fixed;

/* Global values */
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

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine Möglichkeit, Texteingaben so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu expandieren, wenn sie die maximale Größengrenze erreichen (definiert durch die Größe ihres enthaltenden Elements oder durch CSS festgelegt), woraufhin Scrollen erforderlich wird, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Konkret betrifft `field-sizing` zu `content` die folgenden Elemente:

- Formulareingabetypen, die direkte Texteingaben von Nutzern akzeptieren. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für das Steuerelement festgelegt ist, wird es nur so breit sein wie der Textcursor.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribute werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut ändert die standardmäßig bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keinen Einfluss auf `<input>`-Elemente, bei denen `field-sizing: content` gesetzt ist.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file)-Eingaben. Direkte Texteingabe ist nicht möglich; die angezeigte Dateiname ändert sich jedoch, wenn der Nutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, passt sich die Größe des Steuerelements an, um den Dateinamen umfassen zu können.
- {{htmlelement("textarea")}}-Steuerelemente. Es ist zu beachten, dass `<textarea>`-Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Textsteuerelemente verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, werden sie an Höhe zunehmen, um zusätzliche Zeilen von Inhalten anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, wird ein Scrollbalken angezeigt, um den gesamten Inhalt sichtbar zu machen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribute ändern die standardmäßig bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keinen Effekt auf `<textarea>`-Elemente, bei denen `field-sizing: content` gesetzt ist.
- {{htmlelement("select")}}-Steuerelemente. Diese verhalten sich etwas anders, als Sie vielleicht erwarten, wenn `field-sizing: content` gesetzt ist. Die Wirkung hängt von der Art des `<select>`-Steuerelements ab, das Sie erstellen:
  - Normale Drop-Down-Felder ändern ihre Breite, um den angezeigten Optionswert anzupassen, während neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Drop-Down-Feldes so eingestellt, dass sie den längsten Optionswert anzeigen können.)
  - Listboxen (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) Attribut) sind groß genug, um alle Optionen anzuzeigen, ohne dass ein Scrollen erforderlich ist. (Standardmäßig erfordert das Dropdown-Feld Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut hat sehr wenig Einfluss auf `<select>`-Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob das `<select>`-Steuerelement als Dropdown oder als Listbox angezeigt werden soll. Es wird jedoch immer alle Optionen einer Listbox anzeigen, selbst wenn `size` kleiner ist als die Anzahl der Optionen.

### `field-sizing`-Interaktion mit anderen Größeneinstellungen

Die Größenflexibilität, die Formulareingaben durch `field-sizing: content` erhalten, kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} zu setzen, wenn Sie `field-sizing: content` verwenden, da sie dem Steuerelement wieder eine feste Größe auferlegen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es ermöglichen, dass das Steuerelement mit dem eingegebenen Text wächst und schrumpft und gleichzeitig verhindert, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut bewirkt, dass das Steuerelement aufhört zu wachsen, wenn die maximale Zeichenanzahl erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel zeigt die Auswirkungen von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, indem sie den Inhalt effektiv umschließen, bis eine untere oder obere Größenbegrenzung erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jedes mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und ein {{htmlelement("textarea")}}-Element.

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

Beachten Sie die folgenden Punkte zum HTML:

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut gesetzt, das verhindert, dass die Größe des Feldes zunimmt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wächst in der Inline-Richtung, bis der Rand der {{cssxref("min-width")}}-Beschränkung (im CSS-Code unten gesetzt) erreicht ist, und beginnt dann, neue Zeilen in der Block-Richtung hinzuzufügen, um die nachfolgenden Zeichen zu enthalten.
- Das `email`-Eingabefeld hat einen Platzhalter gesetzt, wodurch das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert wird und der Nutzer anfängt zu tippen, ändert sich die Feldgröße auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird ursprünglich bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf den drei Formularfeldern zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu beschränken. Es sei nochmals darauf hingewiesen, dass, wenn keine Mindestbreite auf den Feldern gesetzt wäre, sie nur so breit gerendert würden wie der Textcursor.

Wir geben den `<label>`-Elementen auch ein grundlegendes Styling, sodass sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in die Felder einzugeben und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Anzeige von `<select>`-Elementen kontrollieren

Dieses Beispiel veranschaulicht die Auswirkungen von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl auf Dropdown-Menütypen als auch auf mehrzeilige Listbox-Typen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit angewendetem `field-sizing: content` und einen ohne, wodurch Sie den Unterschied erkennen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listbox-Typ (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut gesetzt).

```html
<div class="field-sizing">
  <h2>With <code>field-sizing: content</code></h2>
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
  <h2>Without <code>field-sizing: content</code></h2>
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
> Beste Praxis ist es, für jedes Formularelement ein {{htmlelement("label")}}-Element einzufügen, um jedem Feld eine aussagekräftige Textbeschreibung für Zugänglichkeitszwecke zuzuordnen (siehe [Verwenden Sie aussagekräftige Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich nur auf Aspekte der visuellen Darstellung von Formularelementen konzentriert, aber Sie sollten sicherstellen, dass Sie Formularbeschriftungen im Produktionscode einfügen.

#### CSS

Im CSS wird `field-sizing: content` nur auf den ersten Satz von `<select>`-Elementen angewendet.

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
```

```css
.field-sizing select {
  field-sizing: content;
}
```

#### Ergebnis

{{ EmbedLiveSample('Controlling select element display', '100%', '170') }}

Beachten Sie die folgenden Effekte von `field-sizing: content`:

- Das Dropdown-Menü passt immer die Größe des angezeigten Optionswerts an und ändert die Größe, wenn andere Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so festgelegt, dass sie so breit ist wie der längste Optionswert.
- Die Multi-Select-Listbox zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Nutzer die Box scrollen, um alle Optionen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
