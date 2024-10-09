---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, denen eine standardmäßig bevorzugte Größe zugewiesen wird, wie z.B. Formularelemente. Diese Eigenschaft erlaubt es, das Standardgrößenverhalten zu überschreiben, sodass sich Formularelemente anpassen können, um ihrem Inhalt gerecht zu werden.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}} Elemente zu stylen, damit sie ihren Inhalt shrinkwrappen und auch wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Erlaubt dem Element, seine Größe anzupassen, um seinem Inhalt gerecht zu werden.
- `fixed`
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Texteingaben schrumpfend auf ihren Inhalt einzustellen und zu wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie maximale Größengrenzen erreichen (definiert durch die Größe ihres enthaltenden Elements oder festgelegt über CSS), an welchem Punkt Scrollen erforderlich wird, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Speziell `field-sizing` zu `content` betrifft die folgenden Elemente:

- Formulareingabetypen, die direkte Texteingaben von Benutzern akzeptieren. Dies schließt die Typen [`email`](/de/docs/Web/HTML/Element/input/email), [`number`](/de/docs/Web/HTML/Element/input/number), [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url) ein.
  - Wenn keine Mindestbreite für die Kontrolle festgelegt ist, wird sie nur so breit wie der Textcursor sein.
  - Kontrollen mit [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributen werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut ändert die standardmäßig bevorzugte Größe solcher `<input>` Elemente. Daher hat `size` keine Wirkung auf `<input>` Elemente mit `field-sizing: content` eingestellt.
- [`file`](/de/docs/Web/HTML/Element/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert die Kontrolle ihre Größe, um den Dateinamen shrinkzuwrappen.
- {{htmlelement("textarea")}} Kontrollen. Es ist bemerkenswert, dass `<textarea>` Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Textkontrollen verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>` Elemente nicht wachsen können aufgrund einer Breitenbeschränkung, beginnen sie in der Höhe zu wachsen, um zusätzliche Zeilen des Inhalts anzuzeigen. Wenn eine Höhenbeschränkung dann erreicht wird, beginnen sie, einen Scrollbalken anzuzeigen, um den gesamten Inhalt sichtbar zu machen.
  - Die [`rows`](/de/docs/Web/HTML/Element/textarea#cols) und [`cols`](/de/docs/Web/HTML/Element/textarea#cols) Attribute ändern die standardmäßig bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keine Wirkung auf `<textarea>` Elemente mit `field-sizing: content` eingestellt.
- {{htmlelement("select")}} Kontrollen. Diese verhalten sich etwas anders, als Sie vielleicht mit `field-sizing: content` erwarten. Der Effekt hängt von der Art der `<select>` Kontrolle ab, die Sie erstellen:
  - Normale Dropdown-Felder ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, während neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns so eingestellt, dass sie den längsten Optionswert anzeigt.)
  - Listenfelder (`<select>` Elemente mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) oder [`size`](/de/docs/Web/HTML/Element/select#multiple) Attribut) werden groß genug sein, um alle Optionen anzuzeigen, ohne dass gescrollt werden muss. (Standardmäßig erfordert das Dropdown-Feld Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Element/select#size) Attribut hat nur sehr wenig Wirkung auf `<select>` Elemente, die `field-sizing: content` eingestellt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob die `<select>` Kontrolle als Dropdown oder Listenbox erscheinen soll. Sie zeigt jedoch immer alle Optionen einer Listenbox an, auch wenn `size` kleiner ist als die Anzahl der Optionen.

### `field-sizing` Interaktion mit anderen Größeneinstellungen

Die durch `field-sizing: content` bereitgestellte Größenflexibilität für Formularelemente kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da sie eine feste Größe auf die Kontrolle erneut aufzwingen. Allerdings sind Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` sehr effektiv, da sie das Wachsen und Schrumpfen der Kontrolle mit dem eingegebenen Text ermöglichen und gleichzeitig verhindern, dass die Kontrolle zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut sorgt dafür, dass die Kontrolle aufhört zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsender und schrumpfender Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf einzeilige und mehrzeilige Textfelder. Die Felder passen ihre Größe an, während Text hinzugefügt oder entfernt wird, und shrinkwrappen effektiv den Inhalt, bis ein oberes oder unteres Größenlimit erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularelemente, jedes mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>` Elemente der Typen [`text`](/de/docs/Web/HTML/Element/input/text) und [`email`](/de/docs/Web/HTML/Element/input/email) sowie ein {{htmlelement("textarea")}} Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut gesetzt, das das Wachstum der Feldgröße stoppt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wächst in der Inline-Richtung bis zur Kante der {{cssxref("min-width")}} Begrenzung (in dem untenstehenden CSS-Code festgelegt) erreicht, dann beginnt es, in der Blockrichtung neue Zeilen hinzuzufügen, um nachfolgende Zeichen enthalten zu können.
- Das `email` Eingabefeld hat einen Platzhalter gesetzt. Dies bewirkt, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width` Wert. Das `text` Feld, das keinen Platzhalter hat, wird initial mit `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularelemente, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabengröße einzuschränken. Es sei darauf hingewiesen, dass, wenn keine Mindestbreite auf den Feldern festgelegt wäre, sie nur so breit wie der Textcursor gerendert würden.

Wir geben den `<label>`s auch ein rudimentäres Styling, damit sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in die untenstehenden Felder einzugeben und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größen-Eigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der Anzeige von `<select>` Elementen

Dieses Beispiel veranschaulicht den Effekt von `field-sizing: content` auf {{htmlelement("select")}} Elemente, sowohl Dropdown-Menütypen als auch mehrzeiligen Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>` Elementen: einen mit `field-sizing: content` angewendet und einen ohne, damit Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listenfeldtyp (mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut gesetzt).

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
> Es ist bewährte Praxis, ein {{htmlelement("label")}} Element für jedes Formularelement einzuschließen, um eine aussagekräftige Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu assoziieren (siehe [Aussagekräftige Textbeschriftungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben dies nicht in diesem Beispiel getan, da es sich rein auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formularbeschriftungen in Ihrem Produktivcode einschließen.

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

- Das Dropdown-Menü passt sich immer der Größe der angezeigten Option an und ändert die Größe, wenn unterschiedliche Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so festgelegt, dass sie so breit wie die längste Option ist.
- Das mehrfache Listenfeld zeigt alle Optionen gleichzeitig an. Ohne `field-sizing: content` muss der Benutzer im Feld scrollen, um alle Optionen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
