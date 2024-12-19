---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardisierte bevorzugte Größe erhalten, wie z.B. Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das standardmäßige Größenverhalten zu überschreiben, sodass Formularelemente sich in ihrer Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}} Elemente zu stylen, sodass sie sowohl ihren Inhalt umschließen als auch wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

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

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Textfelder so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu expandieren, wenn sie maximale Größengrenzen erreichen (definiert durch die Größe ihres enthaltenden Elements oder über CSS festgelegt), an welchem Punkt ein Scrollen erforderlich ist, um allen Inhalt zu sehen.

### Elemente, die von `field-sizing: content` betroffen sind

Speziell `field-sizing` auf `content` beeinflusst die folgenden Elemente:

- Formulareingabetypen, die direkte Texteingabe von Benutzern akzeptieren. Dies umfasst die Typen [`email`](/de/docs/Web/HTML/Element/input/email), [`number`](/de/docs/Web/HTML/Element/input/number), [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url).
  - Wenn keine Mindestbreite auf das Steuerelement gesetzt wird, wird es nur so breit wie der Textcursor sein.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributen werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut ändert die standardmäßige bevorzugte Größe solcher `<input>` Elemente. Im Ergebnis hat `size` keine Wirkung auf `<input>` Elemente, bei denen `field-sizing: content` gesetzt ist.
- [`file`](/de/docs/Web/HTML/Element/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, wird sich das Steuerelement so ändern, dass es den Dateinamen umschließt.
- {{htmlelement("textarea")}} Steuerelemente. Es ist erwähnenswert, dass `<textarea>` Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Textsteuerelemente verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>` Elemente nicht in der Lage sind, aufgrund einer Breitenbeschränkung zu wachsen, werden sie beginnen in der Höhe zu wachsen, um zusätzliche Zeilen des Inhalts darzustellen. Wenn dann eine Höhenbeschränkung erreicht wird, werden sie ein Rollbalken anzeigen, um den gesamten Inhalt sichtbar zu machen.
  - [`rows`](/de/docs/Web/HTML/Element/textarea#cols) und [`cols`](/de/docs/Web/HTML/Element/textarea#cols) Attribute ändern die standardmäßig bevorzugte Größe eines `<textarea>`. Im Ergebnis haben `rows`/`cols` keine Wirkung auf `<textarea>` Elemente, bei denen `field-sizing: content` gesetzt ist.
- {{htmlelement("select")}} Steuerelemente. Diese verhalten sich ein wenig anders, als Sie vielleicht erwarten würden, wenn `field-sizing: content` gesetzt ist. Die Wirkung hängt von der Art des `<select>` Steuerelements ab, das Sie erstellen:
  - Reguläre Dropdown-Boxen werden ihre Breite ändern, um den angezeigten Wert immer anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig wird die Größe des Dropdowns so festgelegt, dass sie den längsten Optionswert anzeigt.)
  - Listenfelder (`<select>` Elemente mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) oder [`size`](/de/docs/Web/HTML/Element/select#multiple) Attribut) werden groß genug sein, um alle Optionen ohne Scrollen anzuzeigen. (Standardmäßig erfordert die Dropdown-Box ein Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Element/select#size) Attribut hat sehr wenig Wirkung auf `<select>` Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob das `<select>` Steuerelement als Dropdown oder Listenfeld erscheinen soll. Es wird jedoch immer alle Optionen eines Listenfelds anzeigen, auch wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing` Interaktion mit anderen Größeinstellungen

Die durch `field-sizing: content` bereitgestellte Flexibilität zur Größenanpassung von Formularelementen kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} zu verwenden, wenn Sie `field-sizing: content` verwenden, da sie eine feste Größe auf das Steuerelement zurücksetzen werden. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist effektiv, da sie es dem Steuerelement ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und es auch daran hindern, zu groß oder zu klein zu werden.

Das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut verursacht, dass das Steuerelement aufhört zu wachsen, wenn die maximale Zeichenanzahl erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsender und schrumpfender Textfelder

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf einzeilige und mehrzeilige Textfelder. Die Felder passen ihre Größe an, während Text hinzugefügt oder entfernt wird, effektiv, bis eine untere oder obere Größengrenze erreicht wird.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jedes mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>` Elemente der Typen [`text`](/de/docs/Web/HTML/Element/input/text) und [`email`](/de/docs/Web/HTML/Element/input/email) und ein {{htmlelement("textarea")}} Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut gesetzt, das das Wachstum der Feldgröße stoppt, wenn die Zeichenbegrenzung erreicht ist.
- Das `<textarea>` wird in der Inline-Richtung wachsen, bis das Ende der {{cssxref("min-width")}} Einschränkung (im untenstehenden CSS-Code gesetzt) erreicht ist, und dann beginnen, neue Zeilen in der Blockrichtung hinzuzufügen, um nachfolgende Zeichen zu enthalten.
- Das `email` Eingabefeld hat einen Platzhalter gesetzt. Dies verursacht, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer beginnt, Text einzugeben, ändert das Feld seine Größe zum Wert von `min-width`. Das `text` Feld, das keinen Platzhalter hat, rendert initially bei `min-width`.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße einzuschränken. Es ist erwähnenswert, dass, wenn keine Mindestbreite auf den Feldern gesetzt wäre, sie nur so breit wie der Textcursor gerendert würden.

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

Versuchen Sie, Text in den Feldern einzugeben und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größeigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der `<select>` Elementanzeige

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf {{htmlelement("select")}} Elemente, sowohl Dropdown-Menütypen als auch mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>` Elementen: einen mit `field-sizing: content` angewandt, und einen ohne, um Ihnen den Unterschied zu zeigen (obwohl der Effekt weniger offensichtlich sein mag als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listenfeldtyp (mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple) Attribut gesetzt).

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
> Es ist bewährte Praxis, ein {{htmlelement("label")}} Element für jedes Formularelement einzuschließen, um eine sinnvolle Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu verknüpfen (siehe [Sinnvolle Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht gemacht, da es sich rein auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formularlabels im Produktivcode einfügen.

#### CSS

Im CSS wird `field-sizing: content` nur auf den ersten Satz von `<select>` Elementen gesetzt.

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

- Das Dropdown-Menü passt immer die Größe des angezeigten Wertes an und ändert die Größe, sobald verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so festgesetzt, dass sie so breit ist wie die längste Option.
- Das Mehrfachauswahl-Listenfeld zeigt alle Optionen auf einmal. Ohne `field-sizing: content` muss der Benutzer das Feld scrollen, um alle Optionen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
