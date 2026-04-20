---
title: "`field-sizing` CSS property"
short-title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßig bevorzugte Größe erhalten, wie z.B. Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das standardmäßige Größenverhalten zu überschreiben, sodass Formularelemente ihre Größe an ihren Inhalt anpassen können.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}} Elemente zu stylen, damit sie ihren Inhalt umschließen und wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Erlaubt es dem Element, seine Größe anzupassen, um seinen Inhalt aufzunehmen.
- `fixed`
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine Möglichkeit, die Textfelder so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie die maximalen Größenlimits erreichen (definiert durch die Größe ihres enthaltenen Elements oder über CSS festgelegt), zu welchem Zeitpunkt das Scrollen erforderlich ist, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` beeinflusst werden

Speziell `field-sizing` auf `content` wirkt sich auf die folgenden Elemente aus:

- Formulareingabetypen, die direkte Texteingaben von Benutzern akzeptieren. Dies umfasst die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Wenn auf dem Steuerelement keine Mindestbreite festgelegt ist, wird es nur so breit wie der Textcursor sein.
  - Steuerelemente mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributen werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut modifiziert die standardmäßig bevorzugte Größe solcher `<input>` Elemente. Folglich hat `size` keinen Effekt auf `<input>` Elemente mit `field-sizing: content` gesetzt.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) Eingaben. Direkte Texteingabe ist nicht möglich; der angezeigte Dateiname ändert sich jedoch, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, ändert sich die Größe des Steuerelements um den Dateinamen zu umschließen.
- {{htmlelement("textarea")}} Steuerelemente. Es ist zu beachten, dass `<textarea>` Elemente mit `field-sizing: content` sich ähnlich verhalten wie einzeilige Texteingaben mit folgenden Ergänzungen:
  - Wenn `<textarea>` Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie in der Höhe zu wachsen, um zusätzliche Reihen von Inhalten anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht wird, wird ein Scrollbalken angezeigt, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) Attribute modifizieren die standardmäßig bevorzugte Größe eines `<textarea>`. Folglich haben `rows`/`cols` keinen Effekt auf `<textarea>` Elemente mit `field-sizing: content` gesetzt.
- {{htmlelement("select")}} Steuerelemente. Diese verhalten sich etwas anders als erwartet bei `field-sizing: content` gesetzt. Die Wirkung hängt davon ab, welche Art von `<select>` Steuerelement Sie erstellen:
  - Normale Dropdown-Menüs ändern ihre Breite, um immer den angezeigten Optionswert anzupassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Dropdowns so eingestellt, dass der längste Optionswert angezeigt werden kann.)
  - Listenfelder (`<select>` Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut) sind groß genug, um alle Optionen anzuzeigen, ohne dass gescrollt werden muss. (Standardmäßig erfordert das Dropdown-Feld Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) Attribut hat sehr wenig Einfluss auf `<select>` Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen prüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob das `<select>` Steuerelement als Dropdown oder als Listenfeld erscheinen soll. Es wird jedoch immer alle Optionen eines Listenfeldes anzeigen, auch wenn `size` kleiner ist als die Anzahl der Optionen.

### `field-sizing` Interaktion mit anderen Größeneinstellungen

Die durch `field-sizing: content` bereitgestellte Flexibilität bei der Größeneinstellung von Formularelementen kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da sie sonst eine feste Größe auf das Steuerelement zurücksetzen. Allerdings ist die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` recht effektiv, da sie es dem Steuerelement ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass das Steuerelement zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut bewirkt, dass das Steuerelement aufhört, in der Größe zu wachsen, wenn die maximale Zeichenanzahl erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, während Text hinzugefügt oder entfernt wird und umschließen somit effektiv den Inhalt, bis ein unteres oder oberes Größenlimit erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jeweils mit einem zugehörigen {{htmlelement("label")}}: zwei `<input>` Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) sowie ein {{htmlelement("textarea")}} Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut gesetzt, das das Wachsen des Feldes verhindert, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in Richtung der Inline-Achse wachsen, bis der Rand der {{cssxref("min-width")}}-Beschränkung (im nachstehenden CSS-Code festgelegt) erreicht ist, und dann beginnen, neue Zeilen in der Blockrichtung hinzuzufügen, um nachfolgende Zeichen zu fassen.
- Das `email` Feld hat einen Platzhalter gesetzt. Dadurch wird das Feld groß genug gerendert, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width` Wert. Das `text` Feld, das keinen Platzhalter hat, wird initial bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder sowie eine {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu begrenzen. Es sei darauf hingewiesen, dass, wenn keine Mindestbreite auf den Feldern gesetzt wäre, sie nur so breit gerendert würden wie der Textcursor.

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

Versuchen Sie, Text in den Feldern hinzuzufügen und zu entfernen, um die Effekte von `field-sizing: content` zusammen mit anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der `<select>` Elementanzeige

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf {{htmlelement("select")}} Elemente, sowohl Dropdown-Menütypen als auch mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Gruppen von `<select>` Elementen: eine mit `field-sizing: content` angewendet und eine ohne, damit Sie den Unterschied sehen können (obgleich der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jede Gruppe enthält einen Dropdown-Menütyp und einen mehrzeiligen Listenfeldtyp (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut gesetzt).

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
> Es ist bewährte Praxis, ein {{htmlelement("label")}} Element für jedes Formularsteuerelement einzuschließen, um eine aussagekräftige Textbeschreibung mit jedem Feld zu assoziieren, um die Zugänglichkeit zu verbessern (siehe [Verwenden Sie aussagekräftige Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich rein auf die visuellen Aspekte Der Formularsteuerelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formular Labels in Produktivcode einfügen.

#### CSS

Im CSS wird `field-sizing: content` nur auf die erste Gruppe von `<select>` Elementen gesetzt.

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

- Das Dropdown-Menü passt immer die Größe des angezeigten Optionswerts an und ändert die Größe, wenn verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so festgelegt, dass sie so breit wie die längste Option ist.
- Das Multi-Select Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer das Feld scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
