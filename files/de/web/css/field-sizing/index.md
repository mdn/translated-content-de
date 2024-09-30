---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßige bevorzugte Größe erhalten, wie Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das Standardgrößenverhalten zu überschreiben und Formularelemente an die Größe ihres Inhalts anzupassen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie ihren Inhalt schrumpfen oder wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßige bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Textfelder zu konfigurieren, um ihren Inhalt anzupassen und zu wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu expandieren, wenn sie die maximalen Größenlimits erreichen (definiert durch die Größe ihres enthaltenden Elements oder durch CSS festgelegt), an welchem Punkt ein Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Speziell betrifft `field-sizing` auf `content` die folgenden Elemente:

- Formulareingabetypen, die direkte Texteingabe von Benutzern akzeptieren. Dazu gehören [`email`](/de/docs/Web/HTML/Element/input/email), [`number`](/de/docs/Web/HTML/Element/input/number), [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url).
  - Wenn keine Mindestbreite für das Steuerelement festgelegt ist, wird es nur so breit wie der Textcursor sein.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attributen werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut ändert die standardmäßige bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keine Wirkung auf `<input>`-Elemente mit `field-sizing: content`.
- [`file`](/de/docs/Web/HTML/Element/input/file)-Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` eingestellt ist, passt sich das Steuerelement an, um den Dateinamen anzupassen.
- {{htmlelement("textarea")}}-Steuerelemente. Es ist erwähnenswert, dass `<textarea>`-Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Textsteuerelemente verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie in der Höhe zu wachsen, um zusätzliche Zeileninhalt anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, erscheint ein Scrollbalken, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Element/textarea#cols)- und [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribute ändern die standardmäßige bevorzugte Größe eines `<textarea>`. Daher haben `rows`/`cols` keine Wirkung auf `<textarea>`-Elemente mit `field-sizing: content`.
- {{htmlelement("select")}}-Steuerelemente. Diese verhalten sich etwas anders als erwartet mit `field-sizing: content`. Der Effekt hängt von der Art des `<select>`-Steuerelements ab, das Sie erstellen:
  - Normale Dropdown-Boxen ändern ihre Breite, um immer den angezeigten Optionswert einzupassen, während neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns so eingestellt, dass der längste Optionswert angezeigt werden kann.)
  - Listenfelder (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple)- oder [`size`](/de/docs/Web/HTML/Element/select#multiple)-Attribut) werden groß genug sein, um alle Optionen ohne Scrollen anzuzeigen. (Standardmäßig erfordert das Dropdown-Feld ein Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Element/select#size)-Attribut hat sehr wenig Wirkung auf `<select>`-Elemente, die `field-sizing: content` eingestellt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um festzustellen, ob das `<select>`-Steuerelement als Dropdown oder als Listenfeld angezeigt werden soll. Es zeigt jedoch immer alle Optionen eines Listenfeldes an, auch wenn `size` kleiner ist als die Anzahl der Optionen.

### Interaktion von `field-sizing` mit anderen Größeneinstellungen

Die durch `field-sizing: content` gewährte Größenflexibilität für Formularelemente kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie festgelegte {{cssxref("width")}}- und {{cssxref("height")}}-Einstellungen zu verwenden, wenn Sie `field-sizing: content` nutzen, da diese eine feste Größe auf das Steuerelement erzwingen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es dem Steuerelement ermöglichen, mit eingegebenem Text zu wachsen und zu schrumpfen, und gleichzeitig verhindern, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut sorgt dafür, dass das Steuerelement nicht weiter wächst, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht den Effekt von `field-sizing: content` auf einzeilige und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und passen sich effektiv dem Inhalt an, bis ein unteres oder oberes Größenlimit erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, die jeweils mit einem zugehörigen {{htmlelement("label")}}-Element versehen sind: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Element/input/text) und [`email`](/de/docs/Web/HTML/Element/input/email) und ein {{htmlelement("textarea")}}-Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut gesetzt, das die Vergrößerung des Feldes stoppt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>`-Feld wächst in der Inline-Richtung, bis der Rand der {{cssxref("min-width")}}-Begrenzung (im untenstehenden CSS-Code eingestellt) erreicht wird, und beginnt dann in der Blockrichtung, neue Zeilen hinzuzufügen, um nachfolgende Zeichen aufzunehmen.
- Das `email`-Eingabefeld hat einen Platzhalter gesetzt. Dies führt dazu, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer zu tippen beginnt, ändert sich die Größe des Feldes auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird anfänglich bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabengröße zu beschränken. Es ist erwähnenswert, dass, wenn keine Mindestbreite für die Felder festgelegt wäre, sie nur so breit wie der Textcursor gerendert würden.

Wir geben den `<label>`s auch eine einfache Formatierung, damit sie ordentlich neben den Feldern sitzen.

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

Dieses Beispiel veranschaulicht den Effekt von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl Dropdown-Menü-Typen als auch mehrzeilige Listbox-Typen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: eines, bei dem `field-sizing: content` angewendet wird, und eines ohne, wodurch Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menü-Typ und einen mehrzeiligen Listbox-Typ (mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut gesetzt).

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
> Best Practice ist es, ein {{htmlelement("label")}}-Element für jedes Formularelement einzuschließen, um eine aussagekräftige Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu verknüpfen (siehe [Aussagekräftige Textlabels](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich rein auf Aspekte der visuellen Darstellung der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formlabels im Produktionscode einschließen.

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

- Das Dropdown-Menü passt immer die Größe an den angezeigten Optionswert an und ändert die Größe, je nachdem, welche Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so eingestellt, dass sie so breit wie die längste Option ist.
- Die Multi-Select-Listbox zeigt alle Optionen gleichzeitig an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
