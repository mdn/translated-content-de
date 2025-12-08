---
title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`field-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe haben, wie zum Beispiel Formularelemente. Diese Eigenschaft ermöglicht Ihnen, das standardmäßige Größenverhalten zu überschreiben, sodass Formularelemente ihre Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente zu gestalten, damit sie ihren Inhalt umschließen und wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Erlaubt dem Element, seine Größe an den Inhalt anzupassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Textfelder so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie ihre maximalen Größenbeschränkungen erreichen (definiert durch die Größe des umgebenden Elements oder über CSS festgelegt), woraufhin ein Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Konkret wirkt sich `field-sizing` mit dem Wert `content` auf folgende Elemente aus:

- Formulareingabetypen, die direkte Texteingaben von Benutzern akzeptieren. Dies schließt [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url) Typen ein.
  - Wenn keine Mindestbreite für das Steuerelement festgelegt ist, wird es nur so breit wie der Textcursor.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributen werden groß genug angezeigt, um den Platzhaltertext darzustellen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut ändert die standardmäßige bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keinen Effekt auf `<input>`-Elemente mit `field-sizing: content`.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file)-Eingaben. Direkte Texteingaben sind nicht möglich; allerdings ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` eingestellt ist, ändert sich die Größe des Steuerelements, um den Dateinamen zu umschließen.
- {{htmlelement("textarea")}}-Steuerelemente. Es ist erwähnenswert, dass `<textarea>`-Elemente mit `field-sizing: content` wie einzeilige Texteingaben funktionieren, mit folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie in der Höhe zu wachsen, um zusätzliche Inhaltsreihen anzuzeigen. Wird dann eine Höhenbeschränkung erreicht, wird ein Scrollbalken eingeblendet, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribute ändern die standardmäßige bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keine Auswirkung auf `<textarea>`-Elemente mit `field-sizing: content`.
- {{htmlelement("select")}}-Steuerelemente. Diese verhalten sich etwas anders als erwartet, wenn `field-sizing: content` eingestellt ist. Der Effekt hängt vom Typ des erstellten `<select>`-Steuerelements ab:
  - Normale Dropdown-Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns groß genug, um den längsten Optionswert anzuzeigen.)
  - Listenfelder (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut) sind groß genug, um alle Optionen anzuzeigen, ohne scrollen zu müssen. (Standardmäßig erfordert die Dropdown-Box ein Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut hat kaum Auswirkungen auf `<select>`-Elemente, die `field-sizing: content` eingestellt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob das `<select>`-Steuerelement als Dropdown oder Listenfeld angezeigt werden soll. Es werden jedoch immer alle Optionen eines Listenfeldes angezeigt, selbst wenn `size` kleiner als die Anzahl der Optionen ist.

### `field-sizing`-Interaktion mit anderen Größeneinstellungen

Die durch `field-sizing: content` gebotene Größeneffizienz von Formularelementen kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie das Festlegen einer festen {{cssxref("width")}} und {{cssxref("height")}}, wenn Sie `field-sizing: content` verwenden, da sie eine feste Größe des Steuerelements erneut auferlegen. Das Verwenden von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist sehr effektiv, da sie es dem Steuerelement ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen sowie zu verhindern, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut führt dazu, dass das Steuerelement nicht weiter in der Größe wächst, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird. Sie umschließen den Inhalt effektiv, bis eine untere oder obere Größenbegrenzung erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jeweils mit einem zugeordneten {{htmlelement("label")}}: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und ein {{htmlelement("textarea")}}-Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut festgelegt, das das Wachsen des Feldes stoppt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wächst in der Inline-Richtung, bis die {{cssxref("min-width")}}-Beschränkung (festgelegt im CSS-Code unten) erreicht wird, und beginnt dann, in der Block-Richtung neue Zeilen hinzuzufügen, um nachfolgende Zeichen aufzunehmen.
- Das `email`-Eingabefeld hat einen Platzhalter gesetzt. Dies führt dazu, dass das Feld groß genug dargestellt wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert wird und der Benutzer anfängt zu tippen, ändert sich die Feldgröße zum `min-width`-Wert. Das `text`-Feld, welches keinen Platzhalter hat, wird zunächst mit `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder neben einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Wiederholenswert ist, dass die Felder ohne festgelegte Mindestbreite nur so breit wie der Textcursor gerendert werden würden.

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

Versuchen Sie, Text in den Feldern einzugeben und zu entfernen, um die Auswirkungen von `field-sizing: content` zusammen mit anderen Größeneinstellungen zu erkunden.

{{ EmbedLiveSample('Wachsende/schrumpfende Textfelder', '100%', '200') }}

### Steuerung der Anzeige von `<select>`-Elementen

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl Dropdown-Menütypen als auch mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: eines mit `field-sizing: content` angewendet und eines ohne, sodass Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listenfeldtyp (mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut).

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
> Best Practice ist es, für jedes Formularsteuerelement ein {{htmlelement("label")}}-Element zu verwenden, um jedem Feld einen sinnvollen Text zuzuweisen, um die Barrierefreiheit zu erhöhen (siehe [Sinnvolle Text-Labels verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). In diesem Beispiel haben wir dies nicht getan, da es sich rein auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie in Produktionscode Formular-Labels einfügen.

#### CSS

Im CSS wird `field-sizing: content` nur auf den ersten Satz der `<select>`-Elemente angewendet.

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

{{ EmbedLiveSample('Steuerung der Anzeige von select-Elementen', '100%', '170') }}

Beachten Sie die folgenden Effekte von `field-sizing: content`:

- Das Dropdown-Menü passt immer die Größe an den angezeigten Optionswert an und ändert die Größe, wenn verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe fixiert und so breit wie die längste Option.
- Das Mehrfachauswahl-Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
