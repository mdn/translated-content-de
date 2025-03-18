---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: 1e15e8e58ce7b79c6a9047f37989cf92d9eebebc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`number`** werden verwendet, um den Benutzer eine Zahl eingeben zu lassen. Sie enthalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann optional Pfeile bereitstellen, um den Wert mit der Maus oder durch Tippen mit einem Finger zu erhöhen und zu verringern.

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

In Browsern, die Eingaben des Typs `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den Wert der in die Eingabe eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben des Typs `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Überschreitet der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des max-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Unterschreitet der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements diesen Wert, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein Wert für min angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art von Daten demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden soll, können Sie die Unicode-Bidi-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code direkt über die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, bei denen das Attribut `readonly` ebenfalls angegeben ist.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert erfüllen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Es sind nur Werte gültig, die der Basis für die Schrittweite entsprechen ([`min`](#min), wenn angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner von diesen angegeben ist).

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schrittverhalten impliziert ist und jeder Wert zulässig ist (unter Vorbehalt anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweite-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzer-Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen eine positive Richtung bevorzugt wird.

Der Standard-Schrittwert für `number`-Eingaben ist `1`, was nur ganzzahlige Einträge zulässt—_es sei denn_, die Basis für die Schrittweite ist keine Ganzzahl.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Erhöhen und Verringern mit Tasten hilfreich für das Benutzererlebnis ist. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zwar nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie beispielsweise Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, wie [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit bei der Erstellung der Benutzeroberfläche und der Logik zum Eingeben von Zahlen in ein Formular vereinfachen. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Satz von Auf- und Abtasten, um den Wert zu erhöhen und zu verringern.

> [!WARNING]
> Logischerweise sollten Sie keine anderen Zeichen als Zahlen in einer Zahleneingabe eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumspielen, daher darf Ihre Seite keine clientseitige Validierung zu Sicherheitszwecken verwenden. Sie müssen jede Transaktion auf der Serverseite überprüfen, bei der der bereitgestellte Wert Sicherheitsimplikationen jeglicher Art haben könnte.

Mobile Browser verbessern zusätzlich die Benutzererfahrung, indem sie eine spezielle Tastatur anzeigen, die besser geeignet ist, um Zahlen einzugeben, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine einfache Zahleneingabe

In ihrer einfachsten Form kann eine Zahleneingabe wie folgt implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig betrachtet, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, ansonsten ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (also nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen Hinweis im Kontext zu bieten, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis darauf zu geben, in welchem Format die Eingabe erfolgen soll `value`. Er wird innerhalb des Eingabefeldes angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfach von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Eingabefeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittgröße

Standardmäßig werden die bereitgestellten Auf- und Abtasten zum Erhöhen und Verringern des Wertes um 1 den Wert erhöhen oder verringern. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut angeben, das eine Zahl als Wert enthält, die den Schrittbetrag angibt. Unser obiges Beispiel enthält einen Platzhalter, der angibt, dass der Wert ein Mehrfach von 10 sein sollte, daher ist es sinnvoll, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abtasten den Wert jedes Mal um 10 erhöhen oder verringern, nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Festlegen von Mindest- und Höchstwerten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um einen minimalen und maximalen Wert anzugeben, den das Feld haben kann. Zum Beispiel geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abtasten nicht erlauben, unter 0 oder über 100 zu gehen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig betrachtet.

### Erlauben von Dezimalwerten

Ein Problem bei Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem nicht ganzzahligen Dezimalwert einzugeben (z. B. "1.1"), wird sie als ungültig betrachtet. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie zahlenmäßig ganzzahligen Werten entsprechen. Wenn Sie Werte mit Brüchen eingeben möchten, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"`, um Dezimalstellen auf zwei Stellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel Werte zwischen `0.0` und `10.0` zulässt, mit Dezimalstellen bis zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente des Typs `number` unterstützen keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerungen zu ändern.

Zum Beispiel, um die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie benötigt, um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Global_attributes/id) zu enthalten und unseren Platzhalter zu verkürzen, da das Feld für den Text, den wir bisher verwendet haben, zu schmal ist:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem ID-Selektor `#number` zu verkleinern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält. Der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für das Zahleneingabefeld.

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

Wir haben bereits einige Validierungsfunktionen der `number`-Eingaben erwähnt, aber lassen Sie uns diese jetzt überprüfen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer ist, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf einen bestimmten Satz von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen und verwendet zusätzlich etwas CSS, um gültige und ungültige Symbole anzuzeigen, abhängig vom Wert der `input`-Eingabe:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten zu übermitteln — z. B. ohne Wert; einem Wert unter 0 oder über 100; einem Wert, der kein Vielfaches von 10 ist; oder einem nicht-numerischen Wert — und sehen Sie, wie sich die Fehlermeldungen des Browsers bei unterschiedlichen Werten unterscheiden.

Das CSS, das auf dieses Beispiel angewendet wird, ist wie folgt:

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudo-Klassen, um je nach Gültigkeit ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen.

Wir setzen es auf ein separates `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt auf einigen Typen von Formulareingaben nicht sehr effektiv an. (Lesen Sie beispielsweise den Abschnitt über die [Validierung von `<input type="date">`](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> Die Validierung von HTML-Formularen ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach, für jemanden Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Außerdem kann jemand Ihr HTML umgehen und die Daten direkt an Ihren Server senden.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu schwerwiegenden Problemen kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen den Gebrauch des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs zur Eingabe von Werten, die einem bestimmten regulären Ausdrucksmuster entsprechen, nicht.

Der Grund dafür ist, dass Zahleneingaben ungültig sind, wenn sie etwas anderes als Zahlen enthalten und Sie die minimale und maximale Anzahl gültiger Ziffern mit den Attributen [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) beschränken können (wie oben erklärt).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn das Spinbutton keine wichtige Funktion für Ihr Formularelement darstellt, ziehen Sie in Betracht, `type="number"` _nicht_ zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht die Gefahr, dass Benutzer versehentlich eine Zahl erhöhen, wenn sie versuchen, etwas anderes zu tun. Darüber hinaus erhalten Benutzer keine expliziten Rückmeldungen darüber, was sie falsch machen, wenn sie versuchen, etwas einzugeben, das keine Zahl ist.

Betrachten Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attributs, um Benutzern zu helfen, Formulare schneller und mit geringerem Fehlerrisiko auszufüllen. Zum Beispiel, um die Autoausfüllung für ein Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass die Inkrementgröße standardmäßig `1` ist und dass Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um das Eingeben von Dezimalzahlen zu ermöglichen. Schauen wir uns das näher an.

Im folgenden Beispiel handelt es sich um ein Formular zur Eingabe der Körpergröße des Benutzers. Es ist standardmäßig so eingestellt, dass es die Größe in Metern akzeptiert, aber Sie können die entsprechende Schaltfläche anklicken, um das Formular auf die Annahme von Fuß und Zoll umzustellen. Die Eingabe für die Höhe in Metern akzeptiert Dezimalzahlen mit zwei Stellen.

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
  <div class="feetInputGroup" style="display: none;">
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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits im Artikel behandelt haben. Da wir einen Meterwert in Zentimetern akzeptieren wollen, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zoll-Eingaben zunächst mit `style="display: none;"` ausgeblendet, sodass Meter der standardmäßige Eingabemodus ist.

Nun zum CSS. Dies sieht sehr ähnlich aus wie das Validierungs-Styling, das wir vorher gesehen haben; nichts Bemerkenswertes hier.

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

Nach der Deklaration einiger Variablen wird dem `button` ein Ereignis-Listener hinzugefügt, um den Umschaltmechanismus zu steuern. Dies beinhaltet das Ändern der `class` und des {{HTMLElement("label")}} der Schaltfläche und das Aktualisieren der Anzeige der beiden Sets von Eingaben bei jedem Drücken der Schaltfläche.

(Beachten Sie, dass wir hier nicht hin und her zwischen Metern und Fuß/Zoll konvertieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer die Schaltfläche klickt, werden die `required`-Attribute der Eingaben entfernt, die wir ausblenden, und die `value`-Attribute geleert. Dies dient dazu, das Formular übermitteln zu können, wenn nicht beide Eingabesets ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Würde man dies nicht tun, müsste man sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzuschicken!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine {{jsxref("Number")}}, die eine Zahl oder leer darstellt</td>
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
         <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp),
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
      </td>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
