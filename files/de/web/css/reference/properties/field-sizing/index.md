---
title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: ed2725c99c6011da9d4afa5e47546fe0722ee814
---

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe haben, wie z.B. Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das standardmäßige Größenverhalten zu überschreiben, damit Formularelemente ihre Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie ihren Inhalt umfassen und wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Ermöglicht es dem Element, seine Größe an seinen Inhalt anzupassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größenanpassung von Formularelementen. Diese Einstellung bietet eine Möglichkeit, Textinputs so zu konfigurieren, dass sie ihren Inhalt umfassen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie maximale Größenlimits erreichen (definiert durch die Größe des umgebenden Elements oder festgelegt durch CSS), woraufhin Scrollen erforderlich ist, um den gesamten Inhalt zu sehen.

### Elemente, die von `field-sizing: content` betroffen sind

Speziell `field-sizing` zu `content` betrifft die folgenden Elemente:

- Formular-Input-Typen, die direkte Texteingaben von Benutzern akzeptieren. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für das Steuerelement festgelegt ist, ist es nur so breit wie der Textcursor.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributen werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut modifiziert die standardmäßige bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keinen Effekt auf `<input>`-Elemente mit `field-sizing: content` gesetzt.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file)-Inputs. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert das Steuerelement die Größe, um den Dateinamen zu umfassen.
- {{htmlelement("textarea")}}-Steuerelemente. Es ist erwähnenswert, dass `<textarea>`-Elemente mit `field-sizing: content` gesetzt sich ähnlich verhalten wie einzeilige Textsteuerelemente, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breiteneinschränkung nicht in der Lage sind zu wachsen, beginnen sie in der Höhe zu wachsen, um zusätzliche Reihen von Inhalten anzuzeigen. Wenn dann eine Höheneinschränkung erreicht wird, beginnen sie, eine Scrollleiste anzuzeigen, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)- und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribute modifizieren die standardmäßige bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keinen Effekt auf `<textarea>`-Elemente mit `field-sizing: content` gesetzt.
- {{htmlelement("select")}}-Steuerelemente. Diese verhalten sich etwas anders als erwartet, wenn `field-sizing: content` gesetzt ist. Der Effekt hängt von der Art des `<select>`-Steuerelements ab, das Sie erstellen:
  - Normale Dropdown-Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns so eingestellt, dass der längste Optionswert angezeigt wird.)
  - Listenfelder (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)- oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut) sind groß genug, um alle Optionen anzuzeigen, ohne scrollen zu müssen. (Standardmäßig erfordert die Dropdown-Box Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut hat sehr wenig Effekt auf `<select>`-Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob das `<select>`-Steuerelement als Dropdown- oder Listenfeld erscheinen soll. Es werden jedoch immer alle Optionen eines Listenfelds angezeigt, auch wenn `size` kleiner ist als die Anzahl der Optionen.

### Interaktion von `field-sizing` mit anderen Größeneinstellungen

Die durch `field-sizing: content` gebotene Flexibilität bei der Größenanpassung von Formularelementen kann aufgehoben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie das Setzen einer festen {{cssxref("width")}} und {{cssxref("height")}} bei der Verwendung von `field-sizing: content`, da sie eine feste Größe auf dem Steuerelement wiederherstellen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} neben `field-sizing: content` ist jedoch sehr effektiv, da sie es dem Steuerelement erlauben, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut bewirkt, dass das Steuerelement aufhört zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und umfassen effektiv den Inhalt, bis eine untere oder obere Größenbeschränkung erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jedes mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) sowie ein {{htmlelement("textarea")}}-Element.

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
- Das `<textarea>` wächst in der Inline-Richtung, bis die Kante der {{cssxref("min-width")}}-Einschränkung (die im folgenden CSS-Code festgelegt ist) erreicht ist, dann beginnt es, neue Zeilen in der Block-Richtung hinzuzufügen, um nachfolgende Zeichen zu enthalten.
- Das `email`-Input hat einen Platzhalter gesetzt. Dies bewirkt, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert wird und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird anfänglich bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf den drei Formularfeldern zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabengröße einzuschränken. Es sei wiederholt, dass, wenn keine minimale Breite auf den Feldern gesetzt ist, sie nur so breit wie der Textcursor gerendert werden.

Wir geben den `<label>`-Elementen auch ein grundlegendes Styling, damit sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in die Felder einzugeben und zu entfernen, um die Effekte von `field-sizing: content` neben anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Anzeige von `<select>`-Elementen steuern

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl Dropdown-Menütypen als auch mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen Satz, bei dem `field-sizing: content` angewendet wird, und einen ohne, damit Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listenfeldtyp (mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut).

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
> Es ist bewährte Praxis, für jedes Formularelement ein {{htmlelement("label")}}-Element einzubeziehen, um jedem Feld eine sinnvolle Textbeschreibung für Barrierefreiheitszwecke zuzuordnen (siehe [Verwenden Sie aussagekräftige Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es ausschließlich auf Aspekte der visuellen Darstellung der Formularelemente fokussiert ist, aber Sie sollten sicherstellen, dass Sie Formularbezeichnungen im Produktionscode einbeziehen.

#### CSS

Im CSS ist `field-sizing: content` nur auf den ersten Satz von `<select>`-Elementen gesetzt.

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

- Das Dropdown-Menü passt immer die Größe der angezeigten Option an, indem es die Größe ändert, wenn verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe fest eingestellt, so dass die längste Option passt.
- Das Mehrfachauswahl-Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
