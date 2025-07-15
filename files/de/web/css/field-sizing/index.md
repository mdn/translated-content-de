---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, denen standardmäßig eine bevorzugte Größe zugewiesen wird, wie z. B. Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das Standardgrößenverhalten außer Kraft zu setzen, sodass Formularelemente ihre Größe an den Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente zu stylen, damit sie sich an ihren Inhalt anpassen können (sogenanntes "Shrinkwrapping") und wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Textfelder zu konfigurieren, damit sie sich an den Inhalt anpassen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf, zu wachsen, wenn sie maximale Größenlimits erreichen (definiert durch die Größe ihres enthaltenden Elements oder festgelegt via CSS), woraufhin Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

`field-sizing` zu `content` wirkt sich spezifisch auf die folgenden Elemente aus:

- Formulareingabetypen, die direkte Texteingabe von Benutzern annehmen. Dies umfasst die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für das Steuerungselement festgelegt ist, wird es nur so breit sein wie der Textcursor.
  - Steuerungselemente mit `placeholder`-Attributen werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das `size`-Attribut ändert die standardmäßig bevorzugte Größe solcher `<input>`-Elemente. Folglich hat `size` keine Auswirkung auf `<input>`-Elemente, die `field-sizing: content` gesetzt haben.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert sich die Größe des Steuerungselements, um den Dateinamen anzupassen.
- {{htmlelement("textarea")}} Steuerungselemente. Es ist erwähnenswert, dass `<textarea>`-Elemente mit `field-sizing: content` sich ähnlich wie einzeilige Texteingaben verhalten, mit folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie, in der Höhe zu wachsen, um zusätzliche Zeilen des Inhalts anzuzeigen. Wird dann eine Höhenbeschränkung erreicht, beginnen sie, eine Scrollleiste anzuzeigen, damit der gesamte Inhalt angezeigt werden kann.
  - `rows` und `cols`-Attribute ändern die standardmäßig bevorzugte Größe eines `<textarea>`. Folglich haben `rows`/`cols` keine Auswirkung auf `<textarea>`-Elemente, die `field-sizing: content` gesetzt haben.
- {{htmlelement("select")}} Steuerungselemente. Diese verhalten sich etwas anders als erwartet, wenn `field-sizing: content` gesetzt ist. Die Auswirkung hängt vom Typ des `<select>`-Steuerungselements ab, das Sie erstellen:
  - Normale Drop-Down-Boxen ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Drop-Downs so eingestellt, dass der längste Optionswert angezeigt wird.)
  - Listboxen (`<select>`-Elemente mit dem `multiple` oder `size`-Attribut) werden groß genug sein, um alle Optionen ohne Scrollen anzuzeigen. (Standardmäßig erfordert die Drop-Down-Box Scrollen, um alle Optionswerte anzuzeigen.)
  - Das `size`-Attribut hat sehr wenig Auswirkung auf `<select>`-Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob `size` gleich `1` ist, um festzustellen, ob das `<select>`-Steuerungselement als Dropdown oder als Listbox erscheinen soll. Es wird jedoch immer alle Optionen einer Listbox anzeigen, selbst wenn `size` kleiner ist als die Anzahl der Optionen.

### Interaktion von `field-sizing` mit anderen Größeneinstellungen

Die Flexibilität der Größenänderung, die durch `field-sizing: content` für Formularelemente bereitgestellt wird, kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da diese eine feste Größe auf das Steuerungselement aufzwingen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} neben `field-sizing: content` ist jedoch sehr effektiv, da sie dem Steuerungselement erlauben, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass das Steuerungselement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut führt dazu, dass das Steuerungselement aufhört, in der Größe zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstum und Schrumpfen von Textfeldern

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf einzeilige und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, und passen sich so effektiv an den Inhalt an, bis ein unteres oder oberes Größenlimit erreicht wird.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jeweils mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und ein {{htmlelement("textarea")}}-Element.

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

Beachten Sie die folgenden Punkte im HTML:

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut gesetzt, das das Wachsen des Feldes verhindert, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wächst in der Inline-Richtung, bis die Grenze der {{cssxref("min-width")}}-Einschränkung (im untenstehenden CSS-Code festgelegt) erreicht ist, und beginnt dann, neue Zeilen in der Block-Richtung hinzuzufügen, um nachfolgende Zeichen aufzunehmen.
- Das `email`-Eingabefeld hat einen Platzhalter gesetzt. Dieses bewirkt, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert wird und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird initial bei `min-width` gerendert.

#### CSS

Im CSS stellen wir `field-sizing: content` auf die drei Formularfelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Es ist wichtig zu wiederholen, dass, wenn keine Mindestbreite auf den Feldern gesetzt wäre, sie nur so breit gerendert würden, wie der Textcursor.

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

Versuchen Sie, Text in die Felder einzugeben und zu entfernen, um die Auswirkungen von `field-sizing: content` zusammen mit anderen Größenoptionen zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der Anzeige von `<select>`-Elementen

Dieses Beispiel zeigt die Auswirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl Dropdown-Menütypen als auch mehrzeilige Listbox-Typen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit angewendetem `field-sizing: content` und einen ohne, damit Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listbox-Typ (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut gesetzt).

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
> Die beste Praxis ist es, ein {{htmlelement("label")}}-Element für jedes Formularsteuerungselement einzuschließen, um eine sinnvolle Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu verknüpfen (siehe [Verwenden Sie sinnvolle Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich rein auf Aspekte des visuellen Renderings der Formularelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formularetiketten in Produktionscode enthalten.

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

Beachten Sie die folgenden Auswirkungen von `field-sizing: content`:

- Das Dropdown-Menü passt immer zur Größe der angezeigten Option und ändert seine Größe, wenn verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` bleibt die Größe so breit wie die längste Option.
- Die Multi-Select-Listbox zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
