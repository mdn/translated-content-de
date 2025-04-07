---
title: field-sizing
slug: Web/CSS/field-sizing
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{CSSRef}}{{seecompattable}}

Die **`field-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das Größeverhalten von Elementen zu steuern, die eine standardmäßig bevorzugte Größe haben, wie z.B. Formularelemente. Diese Eigenschaft erlaubt es Ihnen, das Standardgrößenverhalten zu überschreiben, sodass Formularelemente ihre Größe anpassen können, um ihren Inhalt aufzunehmen.

Diese Eigenschaft wird typischerweise verwendet, um Text-{{htmlelement("input")}} und {{htmlelement("textarea")}}-Elemente zu gestalten, sodass sie ihren Inhalt umschließen sowie wachsen können, wenn mehr Text in das Formularelement eingegeben wird.

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
  - : Ermöglicht es dem Element, seine Größe anzupassen, um seinen Inhalt aufzunehmen.
- `fixed`
  - : Setzt eine feste Größe für das Element. Dies ist der Standardwert.

## Beschreibung

`field-sizing: content` überschreibt die standardmäßig bevorzugte Größe von Formularelementen. Diese Einstellung bietet eine einfache Möglichkeit, Texteingaben so zu konfigurieren, dass sie ihren Inhalt umschließen und wachsen, wenn mehr Text eingegeben wird. Sie hören auf zu wachsen, wenn sie maximale Größenlimits erreichen (definiert durch die Größe ihres umgebenden Elements oder festgelegt via CSS), zu diesem Zeitpunkt ist ein Scrollen erforderlich, um den gesamten Inhalt zu sehen.

### Elemente, die von `field-sizing: content` betroffen sind

Insbesondere wirkt sich `field-sizing: content` auf die folgenden Elemente aus:

- Formulareingabentypen, die direkte Texteingaben von Benutzern annehmen. Dies schließt [`email`](/de/docs/Web/HTML/Element/input/email), [`number`](/de/docs/Web/HTML/Element/input/number), [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) und [`url`](/de/docs/Web/HTML/Element/input/url)-Typen ein.
  - Wenn keine Mindestbreite auf dem Steuerungselement festgelegt ist, wird es nur so breit sein wie der Textcursor.
  - Steuerungselemente mit [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attributen werden so groß dargestellt, dass sie den Platzhaltertext anzeigen können.
  - Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut ändert die standardmäßig bevorzugte Größe solcher `<input>`-Elemente. Daher hat `size` keinen Einfluss auf `<input>`-Elemente mit `field-sizing: content`.
- [`file`](/de/docs/Web/HTML/Element/input/file)-Eingaben. Direkte Texteingabe ist nicht möglich; jedoch ändert sich der angezeigte Dateiname, wenn der Benutzer eine neue Datei zum Hochladen auswählt. Wenn `field-sizing: content` gesetzt ist, passt sich die Steuerung so an, dass der Dateiname umschlossen wird.
- {{htmlelement("textarea")}}-Steuerungen. Es ist erwähnenswert, dass `<textarea>`-Elemente mit `field-sizing: content`-Einstellung sich ähnlich wie einzeilige Texteingaben verhalten, mit den folgenden Ergänzungen:
  - Wenn `<textarea>`-Elemente aufgrund einer Breitenbeschränkung nicht wachsen können, werden sie in der Höhe wachsen, um zusätzliche Zeilen von Inhalten anzuzeigen. Wenn dann eine Höhenbeschränkung erreicht ist, wird ein Scrollbalken angezeigt, um den gesamten Inhalt betrachten zu können.
  - [`rows`](/de/docs/Web/HTML/Element/textarea#cols) und [`cols`](/de/docs/Web/HTML/Element/textarea#cols) attribute ändern die standardmäßig bevorzugte Größe eines `<textarea>`. Folglich haben `rows`/`cols` keinen Einfluss auf `<textarea>`-Elemente mit `field-sizing: content`.
- {{htmlelement("select")}}-Steuerungen. Diese verhalten sich etwas anders, als Sie es mit `field-sizing: content` erwarten würden. Die Wirkung hängt vom Typ der `<select>`-Steuerung ab, die Sie erstellen:
  - Reguläre Drop-Down-Felder ändern ihre Breite so, dass sie immer den angezeigten Optionswert passen, während neue Werte ausgewählt werden. (Standardmäßig ist die Größe des Drop-Downs so eingestellt, dass der längste Optionswert angezeigt werden kann.)
  - Listenfelder (`<select>`-Elemente mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple)- oder [`size`](/de/docs/Web/HTML/Element/select#multiple)-Attribut) sind so groß, dass alle Optionen angezeigt werden können, ohne dass gescrollt werden muss. (Standardmäßig erfordert das Drop-Down-Feld Scrollen, um alle Optionswerte anzuzeigen.)
  - Das [`size`](/de/docs/Web/HTML/Element/select#size)-Attribut hat nur einen geringen Einfluss auf `<select>`-Elemente, die `field-sizing: content` gesetzt haben. In solchen Fällen überprüft der Browser, ob die `size` gleich `1` ist, um zu bestimmen, ob die `<select>`-Steuerung als Drop-Down oder als Listenfeld angezeigt werden soll. Es werden jedoch immer alle Optionen eines Listenfelds angezeigt, selbst wenn `size` kleiner ist als die Anzahl der Optionen.

### Interaktion von `field-sizing` mit anderen Größeneinstellungen

Die durch `field-sizing: content` bereitgestellte Größeneffizienz für Formularelemente kann überschrieben werden, wenn Sie andere CSS-Größeneigenschaften verwenden. Vermeiden Sie es, eine feste {{cssxref("width")}} und {{cssxref("height")}} festzulegen, wenn Sie `field-sizing: content` verwenden, da sie dann wieder eine feste Größe auf die Steuerung auferlegen. Die Verwendung von Eigenschaften wie {{cssxref("min-width")}} und {{cssxref("max-width")}} zusammen mit `field-sizing: content` ist jedoch sehr effektiv, da sie es der Steuerung ermöglichen, mit dem eingegebenen Text zu wachsen und zu schrumpfen und sie auch daran hindern, zu groß oder zu klein zu werden.

Das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut führt dazu, dass die Steuerung aufhört zu wachsen, wenn das maximale Zeichenlimit erreicht ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachsende und schrumpfende Textfelder

Dieses Beispiel veranschaulicht die Wirkung von `field-sizing: content` auf ein- und mehrzeilige Textfelder. Die Felder passen ihre Größe an, während Text hinzugefügt oder entfernt wird, und umschließen effektiv den Inhalt, bis eine untere oder obere Größenbeschränkung erreicht ist.

#### HTML

Das HTML in diesem Beispiel enthält drei Formularfelder, jedes mit einem zugeordneten {{htmlelement("label")}}: zwei `<input>`-Elemente der Typen [`text`](/de/docs/Web/HTML/Element/input/text) und [`email`](/de/docs/Web/HTML/Element/input/email) und ein {{htmlelement("textarea")}}-Element.

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

- Die ersten beiden Felder haben ein [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut, das verhindert, dass die Größe des Feldes zunimmt, wenn das Zeichenlimit erreicht ist.
- Das `<textarea>` wird in Richtung der Linie wachsen, bis der Rand der {{cssxref("min-width")}}-Einschränkung (festgelegt im untenstehenden CSS-Code) erreicht ist, und dann beginnen, neue Zeilen in Blockrichtung hinzuzufügen, um nachfolgende Zeichen einzuschließen.
- Das `email`-Eingabefeld hat einen Placeholder gesetzt. Dadurch wird das Feld groß genug angezeigt, um den gesamten Placeholder darzustellen. Sobald das Feld fokussiert wird und der Benutzer zu tippen beginnt, ändert das Feld seine Größe auf den `min-width`-Wert. Das `text`-Feld, das keinen Placeholder hat, wird initial bei `min-width` gerendert.

#### CSS

Im CSS setzen wir `field-sizing: content` auf die drei Formularfelder sowie eine {{cssxref("min-width")}} und {{cssxref("max-width")}}, um die Eingabengröße zu beschränken. Es sei nochmals darauf hingewiesen, dass, wenn keine Mindestbreite auf den Feldern gesetzt war, diese nur so breit gerendert würden wie der Textcursor.

Wir geben den `<label>`s auch ein grundlegendes Styling, damit sie ordentlich neben den Feldern sitzen.

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

Versuchen Sie, Text in den Feldern einzugeben und zu entfernen, um die Auswirkungen von `field-sizing: content` zusammen mit anderen Größeneigenschaften zu erkunden.

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### Steuerung der Anzeige von `<select>`-Elementen

Dieses Beispiel veranschaulicht die Auswirkungen von `field-sizing: content` auf {{htmlelement("select")}}-Elemente, sowohl für Drop-Down-Menü-Typen als auch für mehrzeilige Listenfeldtypen.

#### HTML

Das HTML enthält zwei Sätze von `<select>`-Elementen: einen mit `field-sizing: content` angewendet und einen ohne, sodass Sie den Unterschied sehen können (obwohl der Effekt möglicherweise weniger offensichtlich ist als bei Textfeldern). Jeder Satz enthält einen Drop-Down-Menütyp und einen mehrzeiligen Listenfeldtyp (mit dem [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut gesetzt).

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
> Eine bewährte Methode ist es, für jede Formularsteuerung ein {{htmlelement("label")}}-Element hinzuzufügen, um eine aussagekräftige Textbeschreibung mit jedem Feld für Barrierefreiheitszwecke zu verbinden (siehe [Verwendung aussagekräftiger Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) für weitere Informationen). Wir haben dies in diesem Beispiel nicht getan, da es sich nur auf Aspekte der visuellen Darstellung der Formularsteuerelemente konzentriert, aber Sie sollten sicherstellen, dass Sie Formularbeschriftungen im Produktionscode einbeziehen.

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

- Das Drop-Down-Menü passt immer die Größe der angezeigten Option an und ändert die Größe, während verschiedene Optionen ausgewählt werden. Ohne `field-sizing: content` ist die Größe fest so breit wie die längste Option.
- Das Mehrfachauswahl-Listenfeld zeigt alle Optionen auf einmal an. Ohne `field-sizing: content` muss der Benutzer durch das Feld scrollen, um alle Optionen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
