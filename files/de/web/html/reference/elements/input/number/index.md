---
title: Wert des HTML-Attributs `<input type="number">`
short-title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`number`** ermöglichen es Benutzern, eine Zahl einzugeben. Sie verfügen über eine integrierte Validierung, die nicht numerische Eingaben zurückweist.

Der Browser kann Schritt-Pfeile bereitstellen, mit denen Benutzer den Wert per Maus oder durch Antippen erhöhen und verringern können.

In Browsern, die Eingabefelder vom Typ `number` nicht unterstützen, wird ein `number`-Eingabefeld als Typ `text` behandelt.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;number&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="tentacles">Number of tentacles (10-100):</label>

<input type="number" id="tentacles" name="tentacles" min="10" max="100" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Eine Zahl, die den in das Eingabefeld eingegebenen Wert darstellt. Sie können einen Standardwert festlegen, indem Sie dem Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eine Zahl zuweisen:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Typen üblicherweise unterstützen, unterstützen Eingabefelder vom Typ `number` die folgenden Attribute.

### `list`

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}}-Element stellt eine Liste vordefinierter Werte bereit, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht als Optionen vorgeschlagen. Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der höchste für dieses Eingabefeld zulässige Wert. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der Wert des Attributs `max` keine Zahl, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des Attributs `min` sein.

### `min`

Der niedrigste für dieses Eingabefeld zulässige Wert. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements darunter liegt, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wird für `min` ein Wert angegeben, der keine gültige Zahl ist, hat das Eingabefeld keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des Attributs `max` sein.

### `placeholder`

Das Attribut `placeholder` ist eine Zeichenfolge, die Benutzern einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Wortgruppe sein, die den erwarteten Datentyp veranschaulicht, statt einer ausführlichen Erklärung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter aber in der entgegengesetzten Richtung angezeigt werden soll, können Sie Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu ändern. Weitere Informationen finden Sie unter [Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Verwenden Sie das Attribut `placeholder` nach Möglichkeit nicht. Es ist semantisch weniger aussagekräftig als andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein boolesches Attribut, das angibt, dass Benutzer dieses Feld nicht bearbeiten können. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld nicht verpflichtend ausgefüllt werden muss, hat `required` bei Eingabefeldern mit dem Attribut `readonly` keine Wirkung.

### `step`

Das Attribut `step` ist eine Zahl, die die Schrittweite festlegt, der der Wert entsprechen muss, oder der nachfolgend beschriebene Sonderwert `any`. Gültig sind nur Werte, die vom Ausgangswert aus eine ganze Anzahl von Schritten entfernt sind. Als Ausgangswert dient [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn keines von beiden angegeben ist.

Die Standardschrittweite für `number`-Eingabefelder ist `1`. Dadurch sind nur ganze Zahlen zulässig – _es sei denn_, der Ausgangswert ist keine ganze Zahl.

Der Zeichenfolgenwert `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern keine anderen Einschränkungen wie [`min`](#min) und [`max`](#max) gelten.

> [!NOTE]
> Wenn die von Benutzern eingegebenen Daten nicht der Schrittweitenkonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden. Sind zwei Werte gleich nah, werden Zahlen in positiver Richtung bevorzugt.

## Zahleneingabefelder verwenden

Der Eingabetyp `number` sollte nur für Zahlen verwendet werden, die schrittweise erhöht oder verringert werden können, insbesondere wenn Schritt-Pfeile die Benutzerfreundlichkeit verbessern. Für Werte, die zwar nur aus Ziffern bestehen, aber im eigentlichen Sinne keine Zahlen sind – etwa Postleitzahlen in vielen Ländern oder Kreditkartennummern –, ist der Eingabetyp `number` nicht geeignet. Erwägen Sie für solche Eingaben einen anderen Eingabetyp, beispielsweise [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel), oder einen anderen {{HTMLElement('input')}}-Typ mit dem Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode):

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können die Erstellung der Benutzeroberfläche und der Logik für die Zahleneingabe in ein Formular vereinfachen. Wenn Sie ein Eingabefeld mit dem passenden `type`-Wert `number` erstellen, wird automatisch geprüft, ob der eingegebene Text eine Zahl ist. In der Regel werden außerdem Schaltflächen zum schrittweisen Erhöhen und Verringern des Werts angezeigt.

> [!WARNING]
> Eigentlich sollte es nicht möglich sein, andere Zeichen als Ziffern in ein Zahleneingabefeld einzugeben. Einige Browser lassen jedoch ungültige Zeichen zu, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Benutzer können Ihren HTML-Code im Hintergrund verändern. Ihre Website darf sich daher aus Sicherheitsgründen _nicht_ auf clientseitige Validierung verlassen. Sie _müssen_ jede Transaktion serverseitig überprüfen, bei der der bereitgestellte Wert sicherheitsrelevant sein könnte.

Mobile Browser verbessern die Benutzerfreundlichkeit zusätzlich, indem sie eine für die Zahleneingabe besser geeignete Tastatur anzeigen, wenn Benutzer einen Wert eingeben möchten.

### Ein einfaches Zahleneingabefeld

In seiner einfachsten Form lässt sich ein Zahleneingabefeld so implementieren:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Ein Zahleneingabefeld gilt als gültig, wenn es leer ist oder eine einzelne Zahl enthält; andernfalls ist es ungültig. Wird das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwendet, ist ein leeres Eingabefeld nicht mehr gültig.

> [!NOTE]
> Jede Zahl ist als Wert zulässig, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist, also weder [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) noch [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

### Platzhalter

Manchmal ist ein Hinweis direkt im Eingabefeld hilfreich, der zeigt, welches Format die Eingabe haben soll. Das kann besonders wichtig sein, wenn die Seitengestaltung keine aussagekräftige Beschriftung für jedes {{HTMLElement("input")}}-Element vorsieht. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der meist einen Hinweis auf das erwartete Format des `value` gibt. Er wird im Eingabefeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint er erneut.

Hier verwenden wir ein `number`-Eingabefeld mit dem Platzhalter „Multiple of 10“. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Eingabefelds ändern.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schrittweite festlegen

Standardmäßig erhöhen oder verringern die bereitgestellten Pfeilschaltflächen den Wert jeweils um 1. Sie können dies ändern, indem Sie das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) angeben. Sein Wert ist eine Zahl, die die Schrittweite festlegt. Der Platzhalter im vorherigen Beispiel weist darauf hin, dass der Wert ein Vielfaches von 10 sein soll. Daher ist es sinnvoll, `step` auf `10` zu setzen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel erhöhen und verringern die Pfeilschaltflächen den Wert bei jeder Betätigung um 10 statt um 1. Sie können weiterhin manuell eine Zahl eingeben, die kein Vielfaches von 10 ist; sie gilt dann jedoch als ungültig.

### Mindest- und Höchstwerte festlegen

Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie einen Mindest- und einen Höchstwert für das Feld festlegen. Geben wir unserem Beispiel etwa den Mindestwert `0` und den Höchstwert `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser überarbeiteten Version verhindern die Pfeilschaltflächen, dass Sie einen Wert unter 0 oder über 100 einstellen. Sie können weiterhin manuell eine Zahl außerhalb dieser Grenzen eingeben; sie gilt dann jedoch als ungültig.

### Dezimalwerte zulassen

Bei Zahleneingabefeldern beträgt die Schrittweite standardmäßig 1. Wenn Sie eine Zahl mit Nachkommastellen eingeben, die keine ganze Zahl ist (etwa „1.1“), gilt sie als ungültig. Werte wie „1.0“ gelten hingegen als gültig, da sie numerisch einer ganzen Zahl entsprechen. Wenn Sie Werte mit Nachkommastellen zulassen möchten, müssen Sie dies im Wert von `step` berücksichtigen (beispielsweise mit `step="0.01"`, um zwei Nachkommastellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Dieses Beispiel erlaubt Werte zwischen `0.0` und `10.0` mit bis zu zwei Nachkommastellen. „9.52“ ist beispielsweise gültig, „9.521“ hingegen nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie `step` auf `"any"` setzen.

### Größe des Eingabefelds festlegen

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Attribute zur Größenfestlegung für Formularelemente wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Um die Größe dieser Steuerelemente zu ändern, müssen Sie [CSS](/de/docs/Web/CSS) verwenden.

Wenn das Eingabefeld beispielsweise nur so breit sein soll, wie für eine dreistellige Zahl nötig ist, können wir unserem HTML eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hinzufügen und den Platzhalter kürzen, da das Feld für den bisher verwendeten Text zu schmal wäre:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Anschließend fügen wir CSS hinzu, um die Breite des Elements mit dem `id`-Selektor `#number` zu verringern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste vordefinierter Optionen bereitstellen, aus denen Benutzer auswählen können. Geben Sie dazu das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) an. Sein Wert ist die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}}-Elements, das für jeden vorgeschlagenen Wert ein {{HTMLElement("option")}}-Element enthält. Der `value` jedes `option`-Elements ist der entsprechende Wertvorschlag für das Zahleneingabefeld.

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers" />
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678"></option>
  <option value="103421"></option>
  <option value="11111111"></option>
  <option value="12345678"></option>
  <option value="12999922"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

## Validierung

Wir haben bereits mehrere Validierungsfunktionen von `number`-Eingabefeldern erwähnt. Hier sind sie noch einmal im Überblick:

- `<input type="number">`-Elemente behandeln jede Eingabe, die keine Zahl ist, automatisch als ungültig. Eine leere Eingabe ist zulässig, sofern nicht `required` angegeben ist.
- Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie eine leere Eingabe für ungültig erklären. Das Eingabefeld _muss_ dann ausgefüllt werden.
- Mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) können Sie gültige Werte auf bestimmte Schritte beschränken, beispielsweise auf Vielfache von 10.
- Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie untere und obere Grenzen für gültige Werte festlegen.

Das folgende Beispiel zeigt alle genannten Funktionen. Zusätzlich verwendet es CSS, um je nach Wert des `input`-Elements ein Symbol für gültige oder ungültige Eingaben anzuzeigen:

```html
<form>
  <div>
    <label for="balloons">Number of balloons to order (multiples of 10):</label>
    <input
      id="balloons"
      type="number"
      name="balloons"
      step="10"
      min="0"
      max="100"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

{{EmbedLiveSample("Validation", 600, 110)}}

Versuchen Sie, das Formular mit verschiedenen ungültigen Eingaben abzusenden: ohne Wert, mit einem Wert unter 0 oder über 100, mit einem Wert, der kein Vielfaches von 10 ist, oder mit einem nicht numerischen Wert. Beachten Sie, wie sich die Fehlermeldungen des Browsers unterscheiden.

Das in diesem Beispiel verwendete CSS lautet:

```css
div {
  margin-bottom: 10px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

Hier verwenden wir die Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":valid")}}, um auf dem benachbarten {{htmlelement("span")}}-Element ein passendes Symbol als generierten Inhalt anzuzeigen. Es dient als visueller Hinweis auf die Gültigkeit der Eingabe.

Für mehr Flexibilität platzieren wir das Symbol auf einem separaten `<span>`-Element. Einige Browser zeigen generierte Inhalte bei bestimmten Arten von Formulareingaben nicht zuverlässig an. Lesen Sie dazu beispielsweise den Abschnitt zur [Validierung von `<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date#validation).

> [!WARNING]
> Die Validierung von HTML-Formularen ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben!
>
> HTML lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird. Es ist auch möglich, Ihr HTML zu umgehen und die Daten direkt an Ihren Server zu senden.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht überprüft, kann die Übermittlung falsch formatierter Daten – oder zu großer Daten, Daten des falschen Typs und Ähnlichem – schwerwiegende Folgen haben.

### Validierung anhand eines Musters

`<input type="number">`-Elemente unterstützen das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) nicht, um eingegebene Werte anhand eines bestimmten regulären Ausdrucks zu prüfen.

Der Grund dafür ist, dass Zahleneingabefelder ohnehin ungültig sind, wenn sie etwas anderes als Zahlen enthalten. Außerdem können Sie den zulässigen Zahlenbereich mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) begrenzen, wie oben erläutert.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) des Elements `<input type="number">` ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn diese Funktion für Ihr Formularsteuerelement nicht wichtig ist, sollten Sie `type="number"` besser _nicht_ verwenden. Nutzen Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das die Eingabe auf Ziffern und zugehörige Zeichen beschränkt. Bei `<input type="number">` besteht die Gefahr, dass Benutzer eine Zahl versehentlich erhöhen, obwohl sie etwas anderes tun möchten. Außerdem erhalten sie keine ausdrückliche Rückmeldung darüber, was sie falsch machen, wenn sie etwas eingeben, das keine Zahl ist.

Erwägen Sie auch die Verwendung des Attributs [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete), damit Benutzer Formulare schneller und mit geringerem Fehlerrisiko ausfüllen können. Um beispielsweise das automatische Ausfüllen eines Postleitzahlenfelds zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits erläutert, dass die Schrittweite standardmäßig `1` beträgt und Sie mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Dezimaleingaben zulassen können. Sehen wir uns das genauer an.

Das folgende Beispiel zeigt ein Formular zur Eingabe der Körpergröße. Standardmäßig wird die Größe in Metern eingegeben. Mit einem Klick auf die entsprechende Schaltfläche können Sie das Formular so umstellen, dass es stattdessen Fuß und Zoll akzeptiert. Das Eingabefeld für Meter lässt zwei Nachkommastellen zu.

{{EmbedLiveSample("Examples", 600, 150)}}

Das HTML sieht so aus:

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Enter your height — meters:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="e.g. 1.78"
      required />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup">
    <span>Enter your height — </span>
    <label for="feet">feet:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">inches:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Enter height in feet and inches" />
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Wie Sie sehen, verwenden wir viele der Attribute, die wir bereits weiter oben im Artikel betrachtet haben. Da wir bei der Meterangabe Zentimeter berücksichtigen möchten, haben wir `step` auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig gelten. Außerdem haben wir für dieses Eingabefeld einen Platzhalter angegeben.

Die Eingabefelder für Fuß und Zoll haben wir zunächst mit `style="display: none;"` ausgeblendet, sodass Meter die Standardeinheit ist.

Kommen wir nun zum CSS. Es ähnelt stark der bereits gezeigten Gestaltung für die Validierung; hier gibt es nichts Besonderes.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Und schließlich das JavaScript:

```js
const metersInputGroup = document.querySelector(".metersInputGroup");
const feetInputGroup = document.querySelector(".feetInputGroup");
const metersInput = document.querySelector("#meters");
const feetInput = document.querySelector("#feet");
const inchesInput = document.querySelector("#inches");
const switchBtn = document.querySelector('input[type="button"]');

feetInputGroup.style.display = "none"; // Hide feet/inches inputs initially

switchBtn.addEventListener("click", () => {
  if (switchBtn.getAttribute("class") === "meters") {
    switchBtn.setAttribute("class", "feet");
    switchBtn.value = "Enter height in meters";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Enter height in feet and inches";

    metersInputGroup.style.display = "block";
    feetInputGroup.style.display = "none";

    feetInput.removeAttribute("required");
    inchesInput.removeAttribute("required");
    metersInput.setAttribute("required", "");

    feetInput.value = "";
    inchesInput.value = "";
  }
});
```

Nach der Deklaration einiger Variablen wird der Schaltfläche `button` ein Event-Listener hinzugefügt, der das Umschalten steuert. Beim Betätigen der Schaltfläche werden ihre `class` und ihr {{HTMLElement("label")}} geändert und die Anzeigewerte der beiden Eingabegruppen aktualisiert.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll umrechnen. Eine echte Webanwendung würde dies wahrscheinlich tun.)

> [!NOTE]
> Wenn Benutzer auf die Schaltfläche klicken, werden die `required`-Attribute von den ausgeblendeten Eingabefeldern entfernt und deren `value`-Attribute geleert. Dadurch kann das Formular abgesendet werden, ohne dass beide Eingabegruppen ausgefüllt sind. Zugleich wird verhindert, dass das Formular Daten übermittelt, die Benutzer nicht angeben wollten.
>
> Ohne diese Anpassung müssten Sie sowohl Fuß und Zoll **als auch** Meter eingeben, um das Formular abzusenden!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein {{jsxref("Number")}}, der eine Zahl darstellt, oder leer</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role">spinbutton</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
