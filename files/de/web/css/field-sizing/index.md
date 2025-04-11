---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe haben, wie z.B. Formularelemente. Diese Eigenschaft erlaubt es Ihnen, das Standardgrößenverhalten zu überschreiben und Formularelemente an ihre Inhalte anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie sich an ihren Inhalt anpassen und wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Erlaubt dem Element, seine Größe an die Inhalte anzupassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Texteingaben so zu konfigurieren, dass sie ihren Inhalt einpassen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu expandieren, wenn sie die maximalen Größenlimits erreichen (definiert durch die Größe des enthaltenen Elements oder über CSS gesetzt), woraufhin ein Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Insbesondere beeinflusst `field-sizing` mit der Einstellung `content` die folgenden Elemente:

- Formulareingabetypen, die direkte Texteingabe von Benutzern akzeptieren. Dies umfasst die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für das Steuerelement festgelegt ist, wird es nur so breit sein wie der Textcursor.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributen werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut modifiziert die standardmäßige bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keinen Effekt auf `<input>`-Elemente mit der Einstellung `field-sizing: content`.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert das Steuerelement seine Größe, um den Dateinamen einzupassen.
- {{htmlelement("textarea")}} Steuerelemente. Es ist erwähnenswert, dass `<textarea>`-Elemente mit der Einstellung `field-sizing: content` sich ähnlich wie einzeilige Textsteuerelemente verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie in der Höhe zu wachsen, um zusätzliche Zeilen anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, wird ein Scrollbalken angezeigt, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) Attribute modifizieren die standardmäßig bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keine Wirkung auf `<textarea>`-Elemente mit der Einstellung `field-sizing: content`.
- {{htmlelement("select")}} Steuerelemente. Diese verhalten sich etwas anders, als Sie es bei der Einstellung `field-sizing: content` erwarten könnten. Die Wirkung hängt von der Art des `<select>` Steuerelements ab, das Sie erstellen:
  - Normale Drop-Down-Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig wird die Drop-Down-Größe so eingestellt, dass sie den längsten Optionswert anzeigen kann.)
  - Listenboxen (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut) werden groß genug sein, um alle Optionen anzuzeigen, ohne dass gescrollt werden muss. (Standardmäßig erfordert die Dropdown-Box das Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) Attribut hat nur geringen Effekt auf `<select>`-Elemente, die die Einstellung `field-sizing: content` haben. In solchen Fällen überprüft der Browser, ob `size` gleich `1` ist, um zu bestimmen, ob das `<select>` Steuerelement als Drop-Down oder Listenbox angezeigt werden soll. Allerdings werden immer alle Optionen einer Listenbox angezeigt, selbst wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing`-Interaktion mit anderen Größenangaben

Die durch `field-sizing: content` bereitgestellte Flexibilität bei der Größe von Formularelementen kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie, bei Nutzung von `field-sizing: content` eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, da diese eine feste Größe auf das Steuerelement erzwingen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es dem Steuerelement ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut bewirkt, dass das Steuerelement aufhört, in der Größe zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und umschließen effektiv den Inhalt, bis ein unteres oder oberes Größenlimit erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Eingabefelder, jeweils mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>` Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) sowie ein {{htmlelement("textarea")}} Element.

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

Beachten Sie folgende Punkte zu dem HTML:

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut gesetzt, das das Wachstum der Feldgröße stoppt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in Richtung der Zeile wachsen, bis der Rand der {{cssxref("min-width")}} Beschränkung (im CSS-Code unten festgelegt) erreicht ist, und dann beginnen, neue Zeilen in Blockrichtung hinzuzufügen, um nachfolgende Zeichen zu enthalten.
- Das `email`-Eingabefeld hat einen Platzhalter gesetzt. Dadurch wird das Feld groß genug dargestellt, um den gesamten Platzhalter anzuzeigen. Sobald das Feld den Fokus erhält und der Benutzer mit der Eingabe beginnt, ändert das Feld seine Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird anfänglich bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Eingabefelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Es ist zu betonen, dass die Felder, wenn keine Mindestbreite gesetzt wäre, nur so breit wie der Textcursor dargestellt würden.

Wir geben den `<label>`s auch eine grundlegende Gestaltung, damit sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in den Feldern einzugeben und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Anzeige von `<select>`-Elementen steuern

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf {{htmlelement("select")}} Elemente, sowohl bei Dropdown-Menüs als auch bei mehrzeiligen Listenfeldern.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit aktivierter `field-sizing: content`-Einstellung und einen ohne, damit Sie den Unterschied sehen können (obwohl der Effekt weniger offensichtlich als bei Texteingabefeldern sein mag). Jede Gruppe umfasst ein Dropdown-Menü und ein mehrzeiliges Listenfeld (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut gesetzt).

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
> Eine bewährte Praxis ist es, jedes Formularelement mit einem {{htmlelement("label")}}-Element zu versehen, um jedem Feld eine bedeutungsvolle Textbeschreibung zur Barrierefreiheit zuzuordnen (siehe [Bedeutungsvolle Textbeschriftungen verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). In diesem Beispiel haben wir dies nicht getan, da es sich ausschließlich auf Aspekte der visuellen Darstellung von Formularsteuerelementen konzentriert. Sie sollten jedoch sicherstellen, dass Sie Formularbeschriftungen im Produktionscode einfügen.

#### CSS

Im CSS wird `field-sizing: content` nur auf der ersten Gruppe von `<select>`-Elementen gesetzt.

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

- Das Dropdown-Menü passt immer die Größe des angezeigten Optionswerts an und ändert seine Größe, wenn andere Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe auf die Breite der längsten Option festgelegt.
- Die Mehrfachauswahl-Listenbox zeigt alle Optionen gleichzeitig an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
