---
title: "`field-sizing` CSS property"
short-title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`field-sizing`** können Sie das Größenverhalten von Elementen steuern, für die eine bevorzugte Standardgröße festgelegt ist, etwa Formularsteuerelemente. Sie können damit das standardmäßige Größenverhalten überschreiben, sodass Formularsteuerelemente ihre Größe an ihren Inhalt anpassen.

Die Eigenschaft wird üblicherweise verwendet, um {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie sich ihrem Inhalt anpassen und mitwachsen, wenn weiterer Text eingegeben wird.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `content`
  - : Ermöglicht es dem Element, seine Größe an seinen Inhalt anzupassen.
- `fixed`
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die bevorzugte Standardgröße von Formularelementen. Damit lassen sich Texteingabefelder so konfigurieren, dass sie sich ihrem Inhalt anpassen und mitwachsen, wenn weiterer Text eingegeben wird. Sie wachsen nicht mehr weiter, sobald sie ihre maximale Größe erreicht haben (die durch die Größe ihres umgebenden Elements oder per CSS festgelegt wird). Ab diesem Punkt muss gescrollt werden, um den gesamten Inhalt zu sehen.

### Von `field-sizing: content` betroffene Elemente

`field-sizing: content` wirkt sich insbesondere auf die folgenden Elemente aus:

- Formulareingabetypen, bei denen Benutzer direkt Text eingeben können. Dazu gehören die Typen [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).
  - Ist für das Steuerelement keine Mindestbreite festgelegt, ist es nur so breit wie der Textcursor.
  - Steuerelemente mit einem [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut werden groß genug dargestellt, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut verändert die bevorzugte Standardgröße solcher `<input>`-Elemente. Daher hat `size` keine Auswirkung auf `<input>`-Elemente, für die `field-sizing: content` festgelegt ist.
- Eingabefelder des Typs [`file`](/de/docs/Web/HTML/Reference/Elements/input/file). Eine direkte Texteingabe ist hier nicht möglich. Der angezeigte Dateiname ändert sich jedoch, wenn Benutzer eine neue Datei zum Hochladen auswählen. Ist `field-sizing: content` festgelegt, passt das Steuerelement seine Größe an den Dateinamen an.
- {{htmlelement("textarea")}}-Steuerelemente. `<textarea>`-Elemente, für die `field-sizing: content` festgelegt ist, verhalten sich weitgehend wie einzeilige Textsteuerelemente, allerdings mit folgenden Besonderheiten:
  - Können `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht weiter in die Breite wachsen, wachsen sie stattdessen in die Höhe, um zusätzliche Textzeilen anzuzeigen. Sobald auch eine Höhenbeschränkung erreicht ist, erscheint eine Bildlaufleiste, über die sich der gesamte Inhalt anzeigen lässt.
  - Die Attribute [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) verändern die bevorzugte Standardgröße eines `<textarea>`-Elements. Daher haben `rows` und `cols` keine Auswirkung auf `<textarea>`-Elemente, für die `field-sizing: content` festgelegt ist.
- {{htmlelement("select")}}-Steuerelemente. Ist `field-sizing: content` festgelegt, verhalten sie sich möglicherweise anders als erwartet. Die Auswirkung hängt von der Art des `<select>`-Steuerelements ab:
  - Gewöhnliche Dropdown-Listen ändern ihre Breite bei der Auswahl eines neuen Werts so, dass der angezeigte Optionswert hineinpasst. (Standardmäßig ist die Dropdown-Liste breit genug für den längsten Optionswert.)
  - Listenfelder (`<select>`-Elemente mit dem Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)) sind groß genug, um alle Optionen ohne Scrollen anzuzeigen. (Standardmäßig muss gescrollt werden, um alle Optionswerte zu sehen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut hat auf `<select>`-Elemente mit `field-sizing: content` nur geringe Auswirkungen. In diesem Fall prüft der Browser, ob `size` gleich `1` ist, um zu bestimmen, ob das `<select>`-Steuerelement als Dropdown-Liste oder als Listenfeld angezeigt werden soll. Ein Listenfeld zeigt jedoch immer alle Optionen an, auch wenn `size` kleiner als die Anzahl der Optionen ist.

### Zusammenspiel von `field-sizing` mit anderen Größenangaben

Die Größenanpassung, die `field-sizing: content` für Formularsteuerelemente ermöglicht, kann durch andere CSS-Eigenschaften zur Größenfestlegung außer Kraft gesetzt werden. Vermeiden Sie bei der Verwendung von `field-sizing: content` feste Werte für {{cssxref("width")}} und {{cssxref("height")}}, da diese dem Steuerelement wieder eine feste Größe vorgeben. Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} lassen sich dagegen gut mit `field-sizing: content` kombinieren: Das Steuerelement kann mit dem eingegebenen Text wachsen und schrumpfen, ohne zu groß oder zu klein zu werden.

Das Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) bewirkt, dass das Steuerelement nicht weiter wächst, sobald die maximale Zeichenanzahl erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel zeigt die Auswirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, wenn Text hinzugefügt oder entfernt wird, bis eine untere oder obere Größengrenze erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält vier Formularfelder mit jeweils einem zugehörigen {{htmlelement("label")}}: drei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel) sowie ein {{htmlelement("textarea")}}-Element.

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

Beachten Sie zum HTML Folgendes:

- Für die ersten beiden Felder sind keine Längenbeschränkungen festgelegt.
- Für das dritte Feld (vom Typ `tel`) ist ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut festgelegt. Dadurch wächst das Feld nicht weiter, sobald die maximale Zeichenanzahl erreicht ist.
- Das `<textarea>` wächst in Inline-Richtung, bis die durch {{cssxref("min-width")}} vorgegebene Grenze erreicht ist (die im folgenden CSS-Code festgelegt wird). Danach werden für weitere Zeichen neue Zeilen in Block-Richtung hinzugefügt.
- Für das `email`-Eingabefeld ist ein Platzhalter festgelegt. Dadurch wird das Feld zunächst groß genug dargestellt, um den gesamten Platzhaltertext anzuzeigen. Sobald das Feld den Fokus erhält und Benutzer mit der Eingabe beginnen, ändert sich seine Größe auf den Wert von `min-width`. Das `text`-Feld hat keinen Platzhalter und wird von Anfang an mit der Breite von `min-width` dargestellt.

#### CSS

Im CSS legen wir für die drei Formularfelder `field-sizing: content` sowie {{cssxref("min-width")}} und {{cssxref("max-width")}} fest, um ihre Größe zu begrenzen. Ohne eine Mindestbreite wären die Felder nur so breit wie der Textcursor.

Außerdem versehen wir die `<label>`-Elemente mit einer einfachen Gestaltung, damit sie ordentlich neben den Feldern stehen.

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

Geben Sie in den folgenden Feldern Text ein und entfernen Sie ihn wieder, um die Auswirkungen von `field-sizing: content` zusammen mit anderen Eigenschaften zur Größenfestlegung zu sehen.

{{ EmbedLiveSample('growing_and_shrinking_text_fields', '100%', '200') }}

### Anzeige von `<select>`-Elementen steuern

Dieses Beispiel zeigt die Auswirkung von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl bei Dropdown-Listen als auch bei mehrzeiligen Listenfeldern.

#### HTML

Das HTML enthält zwei Gruppen von `<select>`-Elementen: eine mit `field-sizing: content` und eine ohne. So können Sie den Unterschied erkennen, auch wenn er möglicherweise weniger deutlich ist als bei Textfeldern. Jede Gruppe enthält eine Dropdown-Liste und ein mehrzeiliges Listenfeld (mit gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple)-Attribut).

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
> Es empfiehlt sich, für jedes Formularsteuerelement ein {{htmlelement("label")}}-Element einzufügen, damit jedem Feld aus Gründen der Barrierefreiheit eine aussagekräftige Textbeschreibung zugeordnet ist (weitere Informationen finden Sie unter [Aussagekräftige Textbeschriftungen verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)). In diesem Beispiel verzichten wir darauf, da es ausschließlich um die visuelle Darstellung der Formularsteuerelemente geht. Im produktiven Code sollten Sie jedoch darauf achten, Formularbeschriftungen einzufügen.

#### CSS

Im CSS wird `field-sizing: content` nur für die erste Gruppe von `<select>`-Elementen festgelegt.

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

- Die Größe der Dropdown-Liste passt sich stets an die angezeigte Option an und ändert sich, wenn eine andere Option ausgewählt wird. Ohne `field-sizing: content` bleibt ihre Breite fest und richtet sich nach der längsten Option.
- Das Listenfeld mit Mehrfachauswahl zeigt alle Optionen gleichzeitig an. Ohne `field-sizing: content` müssen Benutzer im Listenfeld scrollen, um alle Optionen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
