---
title: HTML-Attributwert `<input type="number">`
short-title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

{{HTMLElement("input")}}-Elemente des Typs **`number`** werden verwendet, um Benutzer Zahlen eingeben zu lassen. Sie enthalten eine integrierte Validierung, um nicht numerische Eingaben abzulehnen.

Der Browser kann optional Pfeile zum Erhöhen und Verringern bereitstellen, mit denen Benutzer den Wert per Maus oder Fingertipp erhöhen und verringern können.

In Browsern, die Eingaben des Typs `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

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

Eine Zahl, die den Wert der in die Eingabe eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) angeben:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die üblicherweise von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben des Typs `number` diese Attribute.

### `list`

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) für das Element fehl. Wenn der Wert des Attributs `max` keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des Attributs `min` sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser Wert ist, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) für das Element fehl. Wenn für `min` ein Wert angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des Attributs `max` sein.

### `placeholder`

Das Attribut `placeholder` ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp veranschaulicht, statt einer erklärenden Nachricht. Der Text _darf nicht_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Schreibrichtung dargestellt werden muss, können Sie Unicode-Formatierungszeichen für den bidirektionalen Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu überschreiben. Weitere Informationen finden Sie unter [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des Attributs `placeholder`. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann zu unerwarteten technischen Problemen mit Ihren Inhalten führen. Weitere Informationen finden Sie unter [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein boolesches Attribut, das bei Vorhandensein bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, für die auch das Attribut `readonly` angegeben ist.

### `step`

Das Attribut `step` ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der weiter unten beschriebene spezielle Wert `any`. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](#min), wenn angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0`, wenn keines von beiden bereitgestellt wird.

Der Standard-Schrittwert für `number`-Eingaben ist `1`, sodass nur ganze Zahlen eingegeben werden können – _es sei denn_, die Schrittbasis ist keine ganze Zahl.

Ein Stringwert von `any` bedeutet, dass keine Schrittweite impliziert wird und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

## Verwenden von Zahleneingaben

Der Eingabetyp `number` sollte nur für fortlaufende Zahlen verwendet werden, insbesondere wenn das Erhöhen und Verringern mittels Spinbutton für die Benutzererfahrung hilfreich ist. Der Eingabetyp `number` eignet sich nicht für Werte, die zwar nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Erwägen Sie für nicht numerische Eingaben einen anderen Eingabetyp, beispielsweise [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode):

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik für die Eingabe von Zahlen in ein Formular vereinfachen. Wenn Sie eine Zahleneingabe mit dem korrekten `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, sowie in der Regel einen Satz von Aufwärts- und Abwärts-Schaltflächen, um den Wert schrittweise zu erhöhen und zu verringern.

> [!WARNING]
> Logischerweise sollten Sie in einer Zahleneingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann Ihr HTML im Hintergrund manipulieren. Ihre Website _darf daher nicht_ clientseitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ serverseitig jede Transaktion überprüfen, bei der der bereitgestellte Wert Sicherheitsauswirkungen jeglicher Art haben kann.

Mobile Browser verbessern die Benutzererfahrung zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe wie folgt implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe gilt als gültig, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, ist jedoch andernfalls ungültig. Wenn das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwendet wird, gilt die Eingabe nicht mehr als gültig, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (also nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf anzubieten, welche Form die Eingabedaten haben sollen. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der meist verwendet wird, um einen Hinweis auf das Format zu geben, das `value` der Eingabe haben soll. Er wird innerhalb des Bearbeitungsfelds angezeigt, wenn `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter „Vielfaches von 10“. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds verändern.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuern der Schrittgröße

Standardmäßig erhöhen und verringern die bereitgestellten Aufwärts- und Abwärts-Schaltflächen den Wert schrittweise um 1. Sie können dies ändern, indem Sie ein Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) angeben, dessen Wert eine Zahl ist, die die Schrittgröße festlegt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein soll. Daher ist es sinnvoll, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Aufwärts- und Abwärtspfeile den Wert jedes Mal um 10 erhöhen und verringern, nicht um 1. Sie können weiterhin manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, sie wird jedoch als ungültig betrachtet.

### Angeben von Minimal- und Maximalwerten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um einen Minimal- und Maximalwert anzugeben, den das Feld haben kann. Geben wir unserem Beispiel beispielsweise ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Aufwärts- und Abwärts-Schaltflächen nicht zulassen, unter 0 oder über 100 zu gehen. Sie können weiterhin manuell eine Zahl außerhalb dieser Grenzen eingeben, sie wird jedoch als ungültig betrachtet.

### Zulassen von Dezimalwerten

Ein Problem bei Zahleneingaben besteht darin, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie „1.1“), wird sie als ungültig betrachtet. Beachten Sie, dass Werte wie „1.0“ als gültig gelten, weil sie numerisch ganzen Zahlen entsprechen. Wenn Sie Werte mit Nachkommastellen eingeben möchten, müssen Sie dies im Wert von `step` widerspiegeln (z. B. `step="0.01"`, um Dezimalzahlen mit zwei Nachkommastellen zuzulassen). Hier ist ein grundlegendes Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Beachten Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` mit bis zu zwei Nachkommastellen zulässt. Beispielsweise ist „9.52“ gültig, „9.521“ jedoch nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den Wert von `step` auf `"any"` setzen.

### Steuern der Eingabegröße

{{HTMLElement("input")}}-Elemente des Typs `number` unterstützen keine Attribute zur Größenanpassung von Formularen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen [CSS](/de/docs/Web/CSS) verwenden, um die Größe dieser Steuerelemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur breit genug ist, um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einzufügen und unseren Platzhalter zu verkürzen, da das Feld für den bisher verwendeten Text zu schmal sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem `id`-Selektor `#number` zu verringern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) angeben. Sein Wert enthält die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}}, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält. Der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für das Zahleneingabefeld.

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

Wir haben bereits einige Validierungsfunktionen von `number`-Eingaben erwähnt, aber sehen wir sie uns nun noch einmal an:

- `<input type="number">`-Elemente machen jede Eingabe automatisch ungültig, die keine Zahl ist (oder leer ist, sofern nicht `required` angegeben ist).
- Sie können das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten: Die Eingabe _muss_ ausgefüllt werden.)
- Sie können das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel demonstriert alle oben genannten Funktionen und verwendet zudem etwas CSS, um abhängig vom Wert der `input` gültige und ungültige Symbole anzuzeigen:

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

{{EmbedLiveSample("Validation", 600, 110)}}

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten abzusenden – z. B. ohne Wert, mit einem Wert unter 0 oder über 100, mit einem Wert, der kein Vielfaches von 10 ist, oder mit einem nicht numerischen Wert – und sehen Sie, wie sich die Fehlermeldungen des Browsers unterscheiden.

Das auf dieses Beispiel angewendete CSS lautet wie folgt:

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

Hier verwenden wir die Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":valid")}}, um im angrenzenden {{htmlelement("span")}}-Element ein passendes ungültiges oder gültiges Symbol als generierten Inhalt anzuzeigen, als visuellen Indikator für die Gültigkeit.

Für zusätzliche Flexibilität platzieren wir es in einem separaten `<span>`-Element. Einige Browser zeigen generierten Inhalt bei bestimmten Arten von Formulareingaben nicht besonders effektiv an. (Lesen Sie beispielsweise den Abschnitt zur [Validierung von `<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben!
>
> Es ist viel zu einfach, Änderungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist außerdem möglich, Ihr HTML zu umgehen und die Daten direkt an Ihren Server zu senden.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu schwerwiegenden Problemen kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen die Verwendung des Attributs [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) nicht, um eingegebene Werte an ein bestimmtes Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) beschränken können (wie oben erläutert).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das Element `<input type="number">` ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn `spinbutton` keine wichtige Funktion für Ihr Formular-Steuerelement ist, sollten Sie erwägen, _nicht_ `type="number"` zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Bei `<input type="number">` besteht das Risiko, dass Benutzer eine Zahl versehentlich erhöhen, während sie etwas anderes tun möchten. Außerdem gibt es keine explizite Rückmeldung darüber, was Benutzer falsch machen, wenn sie versuchen, etwas einzugeben, das keine Zahl ist.

Erwägen Sie auch die Verwendung des Attributs [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete), um Benutzern das schnellere Ausfüllen von Formularen mit weniger Fehlermöglichkeiten zu erleichtern. Um beispielsweise das automatische Ausfüllen für ein Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass der Schritt standardmäßig `1` ist und Sie das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) verwenden können, um Dezimaleingaben zuzulassen. Sehen wir uns dies genauer an.

Im folgenden Beispiel gibt es ein Formular zur Eingabe der Körpergröße des Benutzers. Standardmäßig wird eine Körpergröße in Metern akzeptiert, aber Sie können auf die entsprechende Schaltfläche klicken, um das Formular stattdessen für Fuß und Zoll zu verwenden. Die Eingabe für die Körpergröße in Metern akzeptiert Dezimalwerte mit bis zu zwei Nachkommastellen.

{{EmbedLiveSample("Examples", 600, 150)}}

Das HTML sieht folgendermaßen aus:

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

Sie sehen, dass wir viele der Attribute verwenden, die wir bereits weiter oben im Artikel betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den Wert von `step` auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig betrachtet werden. Wir haben außerdem einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Eingaben für Fuß und Zoll zunächst mit `style="display: none;"` ausgeblendet, sodass Meter der Standard-Eingabetyp ist.

Nun zum CSS. Dieses sieht der zuvor betrachteten Validierungsformatierung sehr ähnlich; hier gibt es nichts Bemerkenswertes.

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

Nach der Deklaration einiger Variablen wird dem `button` ein Event-Listener hinzugefügt, um den Umschaltmechanismus zu steuern. Dabei werden die `class` und das {{HTMLElement("label")}} der Schaltfläche geändert sowie die Anzeigewerte der beiden Eingabesätze aktualisiert, wenn die Schaltfläche gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll umrechnen, was eine reale Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer auf die Schaltfläche klickt, werden die Attribute `required` aus den Eingaben entfernt, die wir ausblenden, und die Attribute `value` werden geleert. Dadurch kann das Formular abgeschickt werden, wenn nicht beide Eingabesätze ausgefüllt sind. Es stellt außerdem sicher, dass das Formular keine Daten absendet, die der Benutzer nicht absenden wollte.
>
> Wenn Sie dies nicht tun würden, müssten Sie zum Absenden des Formulars sowohl Fuß/Zoll **als auch** Meter ausfüllen!

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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
