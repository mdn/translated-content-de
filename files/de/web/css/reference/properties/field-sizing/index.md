---
title: "`field-sizing` CSS property"
short-title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`field-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das Größeneinstellungsverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe haben, wie z. B. Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das Standardverhalten der Größenänderung zu überschreiben, sodass Formularelemente ihre Größe an den Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie sowohl den Inhalt umschließen als auch wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `content`
  - : Ermöglicht es dem Element, seine Größe an den Inhalt anzupassen.
- `fixed`
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine Möglichkeit, Texteingaben so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu expandieren, wenn sie die maximalen Größenlimits erreichen (definiert durch die Größe des enthaltenden Elements oder über CSS festgelegt), wobei ein Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` beeinflusst werden

Konkret beeinflusst `field-sizing` auf `content` die folgenden Elemente:

- Formular-Input-Typen, die direkte Texteingaben von Benutzern akzeptieren. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für das Element festgelegt ist, wird es nur so breit wie der Textcursor sein.
  - Elemente mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributen werden so groß gerendert, dass sie den Platzhaltertext anzeigen können.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut ändert die standardmäßig bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keinen Einfluss auf `<input>`-Elemente, bei denen `field-sizing: content` festgelegt ist.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file)-Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` festgelegt ist, ändert sich die Größe, um den Dateinamen einzuschließen.
- {{htmlelement("textarea")}}-Elemente. Es ist zu beachten, dass `<textarea>`-Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Texteingaben verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, vergrößern sie sich in der Höhe, um zusätzliche Inhaltszeilen anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, wird ein Bildlaufleisten angezeigt, um den gesamten Inhalt anzuzeigen.
  - Die Attribute [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) ändern die standardmäßig bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keinen Einfluss auf `<textarea>`-Elemente, bei denen `field-sizing: content` festgelegt ist.
- {{htmlelement("select")}}-Steuerelemente. Diese verhalten sich etwas anders als erwartet, wenn `field-sizing: content` festgelegt ist. Die Wirkung hängt von der Art des `<select>`-Elements ab, das Sie erstellen:
  - Normale Dropdown-Felder ändern ihre Breite so, dass immer der angezeigte Optionswert passt, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdown-Feldes so festgelegt, dass der längste Optionswert angezeigt werden kann.)
  - Listenfelder (`<select>`-Elemente mit dem Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)) sind groß genug, um alle Optionen ohne Scrollen anzuzeigen. (Standardmäßig erfordert das Dropdown-Feld das Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut hat sehr wenig Einfluss auf `<select>`-Elemente, bei denen `field-sizing: content` festgelegt ist. In diesen Fällen überprüft der Browser, ob `size` gleich `1` ist, um festzustellen, ob das `<select>`-Steuerelement als Dropdown oder Listenfeld angezeigt werden soll. Es werden jedoch immer alle Optionen eines Listenfelds angezeigt, selbst wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing`-Interaktion mit anderen Größenangaben

Die durch `field-sizing: content` gebotene Größeneinstellung für Formularelemente kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da sie dem Element eine feste Größe auferlegen. Das Verwenden von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es dem Element ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass das Element zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut bewirkt, dass die Größe des Elements aufhört zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel illustriert die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und umschließen effektiv den Inhalt, bis ein unteres oder oberes Größenlimit erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält vier Formularfelder, jedes mit einem zugehörigen {{htmlelement("label")}}: drei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel) sowie ein {{htmlelement("textarea")}}-Element.

```html
<div>
  <label for="name">Enter name:</label>
  <input type="text" id="name" />
</div>
<div>
  <label for="email">Enter email:</label>
  <input type="email" id="email" placeholder="e.g. a@b.com" />
</div>
<div>
  <label for="tel">Enter telephone:</label>
  <input type="tel" id="tel" maxlength="15" />
</div>
<div>
  <label for="comment">Enter comment:</label>
  <textarea id="comment">This is a comment.</textarea>
</div>
```

Beachten Sie folgende Punkte zum HTML:

- Für die ersten beiden Felder sind keine Längenbeschränkungen festgelegt.
- Das dritte Feld (vom Typ `tel`) hat ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut, das das Wachstum der Feldgröße stoppt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in der Inlinereihenfolge wachsen, bis das {{cssxref("min-width")}}-Limit (im unten stehenden CSS-Code festgelegt) erreicht ist und dann anfangen, neue Zeilen in der Blockrichtung hinzuzufügen, um nachfolgende Zeichen aufzunehmen.
- Das `email`-Input hat einen Platzhalter. Dies bewirkt, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert wird und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird anfänglich bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf den drei Formularfeldern zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Es lohnt sich zu betonen, dass, wenn keine Mindestbreite auf den Feldern festgelegt ist, sie nur so breit wie der Textcursor gerendert würden.

Außerdem geben wir den `<label>`-Elementen ein grundlegendes Styling, damit sie ordentlich neben den Feldern sitzen.

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

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl bei Dropdown-Menü-Typen als auch bei mehrzeiligen Listbox-Typen.

#### HTML

Das HTML enthält zwei Sets von `<select>`-Elementen: eines mit `field-sizing: content` angewendet und eines ohne, sodass Sie den Unterschied sehen können (obwohl die Wirkung möglicherweise weniger offensichtlich ist als bei Textfeldern). Jedes Set enthält jeweils einen Dropdown-Menü-Typ und einen mehrzeiligen Listbox-Typ (mit dem Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)).

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
> Eine bewährte Methode besteht darin, für jedes Formularelement ein {{htmlelement("label")}}-Element einzuschließen, um jedem Feld eine aussagekräftige Textbeschreibung für Barrierefreiheitszwecke zuzuordnen (siehe [Verwenden Sie aussagekräftige Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). In diesem Beispiel haben wir dies nicht getan, da es sich ausschließlich auf Aspekte der visuellen Darstellung von Formularelementen konzentriert, aber Sie sollten sicherstellen, dass Sie Formularbeschriftungen im Produktionscode einschließen.

#### CSS

Im CSS wird `field-sizing: content` nur auf das erste Set der `<select>`-Elemente gesetzt.

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

- Das Dropdown-Menü passt immer zur Größe des angezeigten Optionswerts und ändert seine Größe, wenn verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe fest eingestellt und so breit wie die längste Option.
- Das Multi-Select-Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer durch das Feld scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
