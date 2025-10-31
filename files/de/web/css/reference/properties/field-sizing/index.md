---
title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, denen eine Standardpräferenzgröße zugewiesen wird, wie z.B. Formularelementen. Diese Eigenschaft erlaubt es Ihnen, das Standardgrößenverhalten zu überschreiben und Formularelemente an ihre Inhalte anpassen zu lassen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie sich sowohl bei kleineren Inhalten anpassen als auch wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Ermöglicht dem Element, seine Größe an seine Inhalte anzupassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Texteingaben so zu konfigurieren, dass sie sich an ihren Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu expandieren, wenn sie maximale Größenbeschränkungen erreichen (definiert durch die Größe des umgebenden Elements oder festgelegt über CSS), an diesem Punkt ist Scrollen erforderlich, um alle Inhalte anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Insbesondere `field-sizing` auf `content` wirkt sich auf die folgenden Elemente aus:

- Formulareingabetypen, die direkte Texteingaben von Benutzern akzeptieren. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für die Kontrolle festgelegt ist, wird sie nur so breit wie der Textcursor sein.
  - Kontrollen mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributen werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut ändert die standardmäßige bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keine Wirkung auf `<input>`-Elemente mit `field-sizing: content` gesetzt.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file)-Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert sich die Größe der Steuerung, um den Dateinamen anzupassen.
- {{htmlelement("textarea")}}-Kontrollen. Es lohnt sich zu beachten, dass `<textarea>`-Elemente mit `field-sizing: content` ähnlich wie einzeilige Textkontrollen reagieren, mit den folgenden zusätzlichen Punkten:
  - Wenn `<textarea>`-Elemente wegen einer Breitenbeschränkung nicht wachsen können, beginnen sie in der Höhe zu wachsen, um zusätzliche Zeilen von Inhalten anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, zeigen sie einen Scrollbalken an, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribute ändern die standardmäßige bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keine Wirkung auf `<textarea>`-Elemente mit `field-sizing: content` gesetzt.
- {{htmlelement("select")}}-Kontrollen. Diese verhalten sich etwas anders, als Sie es mit `field-sizing: content` erwarten würden. Der Effekt hängt von der Art der `<select>`-Kontrolle ab, die Sie erstellen:
  - Reguläre Dropdown-Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig wird die Größe des Dropdowns so eingestellt, dass der längste Optionswert angezeigt werden kann.)
  - Listenfelder (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut) werden groß genug sein, um alle Optionen anzuzeigen, ohne scrollen zu müssen. (Standardmäßig erfordert das Dropdown-Feld Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut hat sehr wenig Wirkung auf `<select>`-Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob die `<select>`-Kontrolle als Dropdown oder Listenfeld angezeigt werden soll. Es wird jedoch immer alle Optionen eines Listenfelds anzeigen, selbst wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing`-Interaktion mit anderen Größeneinstellungen

Die durch `field-sizing: content` gebotene Flexibilität der Größeneinstellung von Formularelementen kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da sie die Kontrolle auf eine feste Größe festlegen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie der Kontrolle ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und auch verhindern, dass die Kontrolle zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut bewirkt, dass die Kontrolle aufhört, in der Größe zu wachsen, wenn das maximale Zeichenlimit erreicht wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und umschließen den Inhalt effektiv, bis ein unteres oder oberes Größenlimit erreicht wird.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut gesetzt, das die Größe des Feldes am Wachsen hindert, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in der Inline-Richtung wachsen, bis der Rand der {{cssxref("min-width")}}-Beschränkung (festgelegt im unten stehenden CSS-Code) erreicht ist, und dann beginnen, neue Zeilen in der Block-Richtung hinzuzufügen, um nachfolgende Zeichen aufzunehmen.
- Die `email`-Eingabe hat einen Platzhalter gesetzt. Dies führt dazu, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer beginnt zu tippen, ändert das Feld die Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird initial bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabengröße einzuschränken. Es lohnt sich zu wiederholen, dass, wenn keine Mindestbreite auf den Feldern festgelegt wäre, sie nur so breit wie der Textcursor gerendert würden.

Wir geben den `<label>`s auch ein grundlegendes Styling, damit sie ordentlich neben den Feldern sitzen.

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

### Steuerung der Anzeige von `<select>`-Elementen

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl für Dropdown-Menütypen als auch für mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit `field-sizing: content` angewendet und einen ohne, wodurch Sie den Unterschied sehen können (obwohl der Effekt weniger offensichtlich sein kann als bei Textfeldern). Jeder Satz enthält ein Dropdown-Menü und ein mehrzeiliges Listenfeld (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut gesetzt).

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
> Beste Praxis ist es, für jedes Formularelement ein {{htmlelement("label")}}-Element hinzuzufügen, um jedem Feld eine sinnvolle Textbeschreibung für Zugänglichkeitszwecke zuzuordnen (siehe [Verwendung sinnvoller Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich ausschließlich auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten in Produktionscode sicherstellen, dass Sie Formularlabels hinzufügen.

#### CSS

Im CSS ist `field-sizing: content` nur für den ersten Satz von `<select>`-Elementen gesetzt.

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

- Das Dropdown-Menü passt immer zur Größe der angezeigten Option und ändert die Größe, wenn unterschiedliche Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so festgelegt, dass sie so breit wie die längste Option ist.
- Das mehrfache Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer den Kasten scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
