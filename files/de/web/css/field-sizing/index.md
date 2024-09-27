---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe haben, wie z.B. Formularelemente. Mit dieser Eigenschaft können Sie das standardmäßige Größenverhalten überschreiben, sodass Formularelemente ihre Größe anpassen können, um ihrem Inhalt gerecht zu werden.

Diese Eigenschaft wird in der Regel verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie ihren Inhalt anpassen können, indem sie sowohl verkleinert als auch vergrößert werden, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Ermöglicht dem Element, seine Größe an den Inhalt anzupassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Texteingaben so zu konfigurieren, dass sie ihren Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf, sich zu vergrößern, wenn sie maximale Größenlimits erreichen (definiert durch die Größe ihres enthaltenen Elements oder festgelegt über CSS), woraufhin ein Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Speziell `field-sizing` auf `content` wirkt sich auf die folgenden Elemente aus:

- Formulareingabetypen, die direkte Texteingabe von Benutzern akzeptieren. Dies umfasst [`email`](/de/docs/Web/HTML/Element/input/email), [`number`](/de/docs/Web/HTML/Element/input/number), [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url) Typen.
  - Wenn keine Mindestbreite auf dem Kontrollfeld festgelegt ist, wird es nur so breit sein wie der Textcursor.
  - Kontrollen mit [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributen werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut ändert die standardmäßige bevorzugte Größe solcher `<input>`-Elemente. Folglich hat `size` keine Wirkung auf `<input>`-Elemente mit `field-sizing: content`.
- [`file`](/de/docs/Web/HTML/Element/input/file) Eingaben. Direkte Texteingaben sind nicht möglich; der angezeigte Dateiname ändert sich jedoch, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` festgelegt ist, ändert die Kontrolle die Größe, um den Dateinamen anzupassen.
- {{htmlelement("textarea")}}-Kontrollen. Es ist bemerkenswert, dass `<textarea>`-Elemente mit `field-sizing: content` sich ähnlich verhalten wie einzeilige Textkontrollen, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, werden sie in der Höhe wachsen, um zusätzliche Zeilen des Inhalts anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, wird ein Scrollbalken angezeigt, um den gesamten Inhalt anzuzeigen.
  - [`rows`](/de/docs/Web/HTML/Element/textarea#cols) und [`cols`](/de/docs/Web/HTML/Element/textarea#cols) Attribute ändern die standardmäßige bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keine Wirkung auf `<textarea>`-Elemente mit `field-sizing: content`.
- {{htmlelement("select")}}-Kontrollen. Diese verhalten sich etwas anders, als man vielleicht mit `field-sizing: content` erwarten würde. Die Wirkung hängt von der Art der `<select>`-Kontrolle ab, die Sie erstellen:
  - Reguläre Dropdown-Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns so eingestellt, dass der längste Optionswert angezeigt werden kann.)
  - Listenboxen (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) oder [`size`](/de/docs/Web/HTML/Element/select#multiple) Attribut) sind groß genug, um alle Optionen ohne Scrollen anzuzeigen. (Standardmäßig erfordert die Dropdown-Box ein Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Element/select#size) Attribut hat sehr wenig Wirkung auf `<select>`-Elemente, die `field-sizing: content` haben. In solchen Fällen prüft der Browser, ob `size` gleich `1` ist, um zu bestimmen, ob die `<select>`-Kontrolle als Dropdown oder Listenbox erscheinen soll. Sie wird jedoch immer alle Optionen einer Listenbox anzeigen, selbst wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing`-Interaktion mit anderen Größeneinstellungen

Die durch `field-sizing: content` bereitgestellte Größenflexibilität für Formularelemente kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da diese eine feste Größe auf der Kontrolle wiederherstellen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es der Kontrolle ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig zu verhindern, dass die Kontrolle zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut bewirkt, dass die Kontrolle aufhört zu wachsen, wenn die maximale Zeichengrenze erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsender und schrumpfender Textfelder

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf Einzel- und Mehrzeilen-Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und passen sich effektiv dem Inhalt an, bis eine untere oder obere Größenbeschränkung erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jeweils mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Element/input/text) und [`email`](/de/docs/Web/HTML/Element/input/email) und ein {{htmlelement("textarea")}}-Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut gesetzt, das verhindert, dass die Größe des Feldes über die Zeichengrenze hinaus wächst.
- Das `<textarea>` wächst in horizontaler Richtung, bis die Kante der {{cssxref("min-width")}} Einschränkung (im unten stehenden CSS-Code festgelegt) erreicht ist, und beginnt dann, neue Zeilen in vertikaler Richtung hinzuzufügen, um nachfolgende Zeichen aufzunehmen.
- Das `email`-Eingabefeld hat einen Platzhalter gesetzt. Dies bewirkt, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, rendert anfänglich auf `min-width`.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Es sei nochmals darauf hingewiesen, dass, wenn keine Mindestbreite auf den Feldern gesetzt wäre, sie nur so breit wie der Textcursor gerendert würden.

Wir geben auch den `<label>`-Elementen ein grundlegendes Styling, sodass sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in die Felder einzugeben und zu entfernen, um die Auswirkungen von `field-sizing: content` zusammen mit anderen Größen-Eigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der Anzeige von `<select>`-Elementen

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl Dropdown-Menütypen als auch mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit `field-sizing: content` und einen ohne, sodass Sie den Unterschied sehen können (obwohl die Wirkung möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz beinhaltet ein Dropdown-Menütyp und ein mehrzeiliges Listenfeldtyp (mit aktiviertem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut).

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
> Best Practise ist es, ein {{htmlelement("label")}}-Element für jedes Formularelement einzuschließen, um jedem Feld eine sinnvolle Textbeschreibung zuzuordnen, um die Zugänglichkeit zu verbessern (siehe [Sinnvolle Textbeschriftungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). In diesem Beispiel haben wir dies nicht getan, da es sich rein auf die Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formularbeschriftungen im Produktionscode einfügen.

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

- Das Dropdown-Menü passt immer die Größe des angezeigten Optionswerts an und ändert die Größe, wenn andere Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe fest so breit wie die längste Option.
- Das Multi-Select-Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer das Feld scrollen, um alle Optionen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
