---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: ad2ee21660739777fc8874a93670cd518a6d3fff
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Elementen zu steuern, die eine standardmäßig bevorzugte Größe haben, wie zum Beispiel Formularelemente. Diese Eigenschaft ermöglicht es Ihnen, das standardmäßige Größenverhalten zu überschreiben, sodass Formularelemente in ihrer Größe angepasst werden können, um ihren Inhalt zu fassen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente so zu gestalten, dass sie den Inhalt umschließen (shrinkwrap) können und wachsen, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Ermöglicht es dem Element, seine Größe so anzupassen, dass sie seinen Inhalt fasst.
- `fixed`
  - : Legt eine feste Größe für das Element fest. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Textfelder so zu konfigurieren, dass sie den Inhalt umschließen und mit wachsendem Textinhalt wachsen. Sie hören auf zu wachsen, wenn sie maximale Größenlimits erreichen (definiert durch die Größe ihres enthaltenen Elements oder festgelegt über CSS), zu welchem Zeitpunkt das Scrollen erforderlich wird, um den gesamten Inhalt anzuzeigen.

### Elemente, die von `field-sizing: content` beeinflusst werden

Konkret wirkt sich `field-sizing` auf `content` bei den folgenden Elementen aus:

- Formular-Input-Typen, die direkte Texteingabe von Benutzern akzeptieren. Dazu gehören [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number), [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url) Typen.
  - Wenn keine Mindestbreite für die Kontrolle festgelegt ist, wird sie nur so breit wie der Textcursor.
  - Kontrollen mit [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributen werden groß genug gerendert, um den Platzhaltertext anzuzeigen.
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut modifiziert die standardmäßig bevorzugte Größe solcher `<input>`-Elemente. Folglich hat `size` keinen Effekt auf `<input>`-Elemente mit `field-sizing: content` eingestellt.
- [`file`](/de/docs/Web/HTML/Reference/Elements/input/file) Inputs. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` eingestellt ist, passt sich die Kontrolle in der Größe an, um den Dateinamen zu umschließen.
- {{htmlelement("textarea")}} Kontrollen. Es ist bemerkenswert, dass `<textarea>`-Elemente mit `field-sizing: content` eingestellt ähnlich wie einzeilige Textkontrollen verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, beginnen sie, in der Höhe zu wachsen, um zusätzliche Zeileninhalt anzuzeigen. Wird dann eine Höhenbegrenzung erreicht, zeigt das Element eine Scrollleiste an, um den gesamten Inhalt anzuzeigen.
  - Die [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) und [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) Attribute modifizieren die standardmäßig bevorzugte Größe eines `<textarea>`. Folglich haben `rows`/`cols` keinen Effekt auf `<textarea>`-Elemente mit `field-sizing: content` eingestellt.
- {{htmlelement("select")}} Kontrollen. Diese verhalten sich ein wenig anders, als Sie es vielleicht erwarten, mit `field-sizing: content` eingestellt. Der Effekt hängt von der Art der `<select>`-Kontrolle ab, die Sie erstellen:
  - Reguläre Dropdown-Boxen ändern ihre Breite, um stets den angezeigten Optionswert zu fassen, wenn neue Werte ausgewählt werden. (Standardmäßig ist die Größe der Dropdown-Box so eingestellt, dass sie den längsten Optionswert anzeigt.)
  - Listenfelder (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) oder [`size`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut) werden groß genug sein, um alle Optionen anzuzeigen, ohne scrollen zu müssen. (Standardmäßig erfordert die Dropdown-Box das Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) Attribut hat sehr wenig Einfluss auf `<select>`-Elemente, die `field-sizing: content` eingestellt haben. In solchen Fällen überprüft der Browser, ob `size` gleich `1` ist, um zu bestimmen, ob die `<select>`-Kontrolle als Dropdown oder als Listenfeld erscheinen sollte. Es werden jedoch immer alle Optionen eines Listenfeldes angezeigt, selbst wenn `size` kleiner ist als die Anzahl der Optionen.

### Interaktion von `field-sizing` mit anderen Größeneinstellungen

Die Flexibilität der Größeneinstellung für Formularelemente durch `field-sizing: content` kann außer Kraft gesetzt werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} zu setzen, wenn Sie `field-sizing: content` verwenden, da sie sonst eine feste Größe auf die Kontrolle zurücksetzen. Das Verwenden von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist sehr effektiv, da sie es der Kontrolle ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und gleichzeitig verhindern, dass die Kontrolle zu groß oder zu klein wird.

Das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut bewirkt, dass die Kontrolle aufhört, in der Größe zu wachsen, wenn das maximale Zeichengrenze erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht den Effekt von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, während Text hinzugefügt oder entfernt wird, und umschließen den Inhalt effektiv (shrinkwrap), bis eine untere oder obere Größenbegrenzung erreicht ist.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut gesetzt, welches verhindert, dass die Größe des Feldes wächst, wenn das Zeichengrenze erreicht ist.
- Das `<textarea>` wird in der Inline-Richtung wachsen, bis der Rand der {{cssxref("min-width")}}-Beschränkung (im untenstehenden CSS-Code festgelegt) erreicht ist, und dann beginnen, neue Zeilen in der Blockrichtung hinzuzufügen, um die folgenden Zeichen zu fassen.
- Das `email`-Eingabefeld hat einen Platzhalter. Dies führt dazu, dass das Feld groß genug gerendert wird, um den gesamten Platzhalter anzuzeigen. Sobald das Feld fokussiert ist und der Benutzer beginnt zu tippen, ändert sich die Größe des Feldes auf den `min-width`-Wert. Das `text`-Feld, das keinen Platzhalter hat, wird zunächst bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder, zusammen mit einer {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabegröße zu beschränken. Es ist erwähnenswert, dass, wenn auf den Feldern keine Mindestbreite festgelegt wäre, sie nur so breit wie der Textcursor gerendert würden.

Wir geben auch den `<label>`s ein einfaches Styling, damit sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, in den untenstehenden Feldern Text einzugeben und zu entfernen, um die Effekte von `field-sizing: content` in Verbindung mit anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Darstellung von `<select>`-Elementen steuern

Dieses Beispiel veranschaulicht den Effekt von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl bei Dropdown-Menüs als auch bei mehrzeiligen Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit angewendetem `field-sizing: content` und einen ohne, wobei Sie den Unterschied sehen können (obwohl der Effekt vielleicht weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Dropdown-Menütyp und einen mehrzeiligen Listenfeldtyp (mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) Attribut gesetzt).

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
> Best Practices erfordern das Einfügen eines {{htmlelement("label")}}-Elements für jedes Formularelement, um eine sinnvolle Textbeschreibung mit jedem Feld zum Zweck der Barrierefreiheit zu verknüpfen (siehe [Sinnvolle Textbezeichnungen verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich rein auf Aspekte der visuellen Darstellung von Formularelementen konzentriert, aber Sie sollten sicherstellen, dass Sie Formularelementbezeichnungen im Produktionstext einfügen.

#### CSS

Im CSS ist `field-sizing: content` nur auf dem ersten Satz von `<select>`-Elementen gesetzt.

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

- Das Dropdown-Menü passt immer die Größe des angezeigten Optionswerts an und ändert seine Größe, wenn unterschiedliche Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe so festgelegt, dass sie so breit wie die längste Option ist.
- Die Multi-Select-Liste zeigt alle Optionen gleichzeitig an. Ohne `field-sizing: content` muss der Benutzer die Box scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
