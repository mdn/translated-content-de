---
title: "`field-sizing` CSS property"
short-title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: cd0d465d5512de499b5da36abc5735c14897af7c
---

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, denen eine standardmäßig bevorzugte Größe zugewiesen wird, wie z.B. Formularelemente. Diese Eigenschaft ermöglicht Ihnen, das standardmäßige Größenverhalten zu überschreiben, sodass Formularelemente ihre Größe an ihre Inhalte anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Text-`<input>` und `<textarea>` Elemente so zu gestalten, dass sie ihren Inhalt umschließen können und wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Erlaubt dem Element, seine Größe anzupassen, um seine Inhalte zu fassen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größeneinstellung von Formularelementen. Diese Einstellung bietet eine Möglichkeit, Texteingaben so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie maximale Größenbeschränkungen erreichen (definiert durch die Größe ihres beinhaltenden Elements oder festgelegt über CSS), zu diesem Zeitpunkt ist Scrollen erforderlich, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` betroffen sind

Konkret hat `field-sizing` mit `content` Auswirkungen auf folgende Elemente:

- Formularelement-Typen, die direkte Texteingaben von Nutzern akzeptieren. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn keine Mindestbreite für die Steuerung festgelegt ist, wird sie nur so breit wie der Textcursor sein.
  - Steuerungen mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributen werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut verändert die standardmäßig bevorzugte Größe solcher `<input>` Elemente. Daher hat `size` keine Wirkung auf `<input>` Elemente mit `field-sizing: content` gesetzt.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Nutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, wird die Steuerung ihre Größe ändern, um den Dateinamen zu umschließen.
- `<textarea>` Steuerungen. Es ist erwähnenswert, dass `<textarea>` Elemente mit `field-sizing: content` sich ähnlich verhalten wie einzeilige Texteingaben, mit folgenden Ergänzungen:
  - Wenn `<textarea>` Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, werden sie anfangen, in der Höhe zu wachsen, um zusätzliche Zeilen von Inhalt darzustellen. Wenn dann eine Höhenbeschränkung erreicht wird, werden sie anfangen, eine Scrollleiste anzuzeigen, um den gesamten Inhalt sichtbar zu machen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) Attribute verändern die standardmäßig bevorzugte Größe einer `<textarea>`. Daher haben `rows`/`cols` keine Wirkung auf `<textarea>` Elemente mit `field-sizing: content` gesetzt.
- `<select>` Steuerungen. Diese verhalten sich etwas anders, als man es mit `field-sizing: content` erwarten könnte. Die Wirkung hängt von der Art der `<select>` Steuerung ab, die Sie erstellen:
  - Normale Dropdown-Boxen werden ihre Breite ändern, um immer den angezeigten Optionswert zu fassen, während neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns so eingestellt, dass sie den längsten Optionswert anzeigen kann.)
  - Listboxen (`<select>` Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) Attribut) werden groß genug dargestellt, um alle Optionen anzuzeigen, ohne dass ein Scrollen erforderlich ist. (Standardmäßig erfordert die Dropdown-Box ein Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) Attribut hat wenig Wirkung auf `<select>` Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen prüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob die `<select>` Steuerung als Dropdown oder als Listbox erscheinen sollte. Es wird jedoch immer alle Optionen einer Listbox anzeigen, selbst wenn `size` kleiner ist als die Anzahl der Optionen.

### `field-sizing` Interaktion mit anderen Größeneinstellungen

Die Flexibilität der Größenanpassung, die durch `field-sizing: content` für Formularelemente bereitgestellt wird, kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} zu setzen, wenn Sie `field-sizing: content` verwenden, da diese eine feste Größe für die Steuerung neu durchsetzen werden. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es der Steuerung erlauben, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass die Steuerung zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut bewirkt, dass die Steuerung aufhört zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, während Text hinzugefügt oder entfernt wird, um den Inhalt effektiv zu umschließen, bis eine kleinere oder größere Größenbegrenzung erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält vier Formularfelder, jedes mit einem zugehörigen {{htmlelement("label")}}: drei `<input>` Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), und ein `<textarea>` Element.

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

Beachten Sie die folgenden Punkte zum HTML:

- Die ersten beiden Felder haben keine Längenbeschränkungen.
- Das dritte Feld (vom Typ `tel`) hat ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut gesetzt, welches das Wachstum des Feldes stoppt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in der Inline-Richtung wachsen, bis die Kante der {{cssxref("min-width")}} Beschränkung (festgelegt im untenstehenden CSS-Code) erreicht ist, dann wird es anfangen, neue Zeilen in der Blockrichtung hinzuzufügen, um nachfolgende Zeichen zu enthalten.
- Das `email` Eingabefeld hat einen Platzhalter gesetzt. Dies führt dazu, dass das Feld groß genug dargestellt wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer anfängt zu tippen, ändert das Feld die Größe auf den `min-width` Wert. Das `text` Feld, das keinen Platzhalter hat, wird initial bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularelemente, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Es ist erwähnenswert, dass, wenn keine Mindestbreite auf den Feldern gesetzt ist, sie nur so breit wie der Textcursor gerendert würden.

Wir geben auch den `<label>`s ein grundlegendes Styling, damit sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in die untenstehenden Felder einzugeben und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größeneinstellungen zu erkunden.

{{ EmbedLiveSample('Wachsende/schrumpfende Textfelder', '100%', '200') }}

### Steuerung der `<select>` Elementdarstellung

Dieses Beispiel zeigt die Wirkung von `field-sizing: content` auf {{htmlelement("select")}} Elemente, sowohl für Dropdown-Menü-Typen als auch für mehrzeilige Listbox-Typen.

#### HTML

Das HTML enthält zwei Sets von `<select>` Elementen: eins mit `field-sizing: content` angewendet und eins ohne, was Ihnen ermöglicht, den Unterschied zu sehen (auch wenn der Effekt weniger offensichtlich sein mag als bei Textfeldern). Jedes Set beinhaltet einen Dropdown-Menü-Typ und einen mehrzeiligen Listbox-Typ (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut gesetzt).

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
> Es ist bewährte Praxis, ein {{htmlelement("label")}} Element für jede Formsteuerung zu beinhalten, um eine sinnvolle Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu assoziieren (siehe [Verwendung aussagekräftiger Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für mehr Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich rein auf Aspekte der visuellen Darstellung der Formsteuerungen konzentriert, jedoch sollten Sie sicherstellen, dass Sie Formularbeschriftungen in Produktionscode einbinden.

#### CSS

Im CSS ist `field-sizing: content` nur auf das erste Set von `<select>` Elementen gesetzt.

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

{{ EmbedLiveSample('Steuerung der select Elementdarstellung', '100%', '170') }}

Beachten Sie die folgenden Effekte von `field-sizing: content`:

- Das Dropdown-Menü passt sich immer der Größe des angezeigten Optionswertes an und ändert die Größe, wenn unterschiedliche Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe festgelegt so breit wie die längste Option.
- Die Mehrfachauswahl-Listbox zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
