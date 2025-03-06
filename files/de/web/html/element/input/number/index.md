---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`number`** werden verwendet, um den Benutzer eine Zahl eingeben zu lassen. Sie beinhalten eine eingebaute Validierung, um nicht numerische Eingaben abzulehnen.

Der Browser kann sich dazu entscheiden, Stepper-Pfeile bereitzustellen, die es dem Benutzer ermöglichen, den Wert mit der Maus oder durch Antippen mit einem Finger zu erhöhen oder zu verringern.

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

In Browsern, die keine Eingaben des Typs `number` unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den Wert der in das Eingabefeld eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einschließen, zum Beispiel:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemein von allen {{HTMLElement("input")}}-Typen unterstützten Attributen unterstützen Eingaben des Typs `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Jegliche Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der Höchstwert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der Mindestwert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht zu sein. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Zeichen für die Bidirektional-Algorithmus-Formatierung verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### `readonly`

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem `readonly`-Attribut, das ebenfalls angegeben ist.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert zum Inkrementieren entsprechen ([`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner von beiden angegeben ist), sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn zwei gleich nahe Optionen existieren.

Der standardmäßige Schrittwert für `number`-Eingaben ist `1`, was nur ganze Zahlen zulässt, _es sei denn_, die Schritt-Basis ist keine ganze Zahl.

## Verwendung von Zahleneingaben

Der `number` Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Inkrementieren und Dekrementieren mit dem Schrittknopf hilfreich für die Benutzererfahrung sind. Der `number` Eingabetyp ist nicht geeignet für Werte, die zwar aus Zahlen bestehen, aber nicht im eigentlichen Sinne eine Zahl darstellen, wie zum Beispiel Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, wie [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit erleichtern, wenn Sie die Benutzeroberfläche und Logik zum Eingeben von Zahlen in ein Formular erstellen. Wenn Sie eine Zahleneingabe mit dem richtigen `type` Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Set von Auf- und Abtasten zur Wertanpassung.

> [!WARNING]
> Logischerweise sollten Sie keine Zeichen in eine Zahleneingabe eingeben können, die keine Zahlen sind. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann im Hintergrund an Ihrem HTML basteln, weshalb Ihre Website _nicht_ die clientseitige Validierung für Sicherheitszwecke verwenden darf. Sie _müssen_ auf der Serverseite jede Transaktion validieren, bei der der bereitgestellte Wert Sicherheitsimplikationen jeglicher Art haben könnte.

Mobile Browser unterstützen die Benutzererfahrung zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser zum Eingeben von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahleneingabe

In ihrer einfachsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig betrachtet, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, aber sonst als ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (also nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Es ist manchmal hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten sein sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jede {{HTMLElement("input")}}-Eingabe anbietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist hauptsächlich dazu da, einen Hinweis darauf zu geben, in welchem Format die Eingaben erfolgen sollten, der `value`. Er wird innerhalb der Bearbeitungsbox angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in die Box eingegeben werden, verschwindet der Platzhalter; wenn die Box geleert wird, erscheint er wieder.

Hier haben wir ein `number`-Eingabefeld mit dem Platzhalter "Multiple of 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schrittgröße anpassen

Standardmäßig ändern die für das Hoch- und Herunterzählen vorgesehenen Tasten den Wert um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut bereitstellen, das als Wert eine Zahl enthält, die die Schrittgröße angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte. Daher macht es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abzähltasten den Wert jedes Mal um 10 statt um 1 erhöhen oder verringern. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Mindest- und Höchstwerte festlegen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um einen Mindest- und Höchstwert festzulegen, den das Feld haben kann. Geben wir unserem Beispiel zum Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Ab-Schritt-Schaltflächen Sie nicht unter 0 oder über 100 gehen lassen. Sie können dennoch manuell eine Zahl außerhalb dieser Grenzen eingeben, allerdings wird sie als ungültig betrachtet.

### Dezimalwerte erlauben

Ein Problem mit Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalpunkt (wie „1.0“) einzugeben, wird sie als ungültig angesehen. Wenn Sie einen Wert eingeben möchten, der Dezimalstellen benötigt, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"` um Dezimalstellen auf zwei Dezimalstellen zuzulassen). Hier ist ein grundlegendes Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen „0.0“ und „10.0“ erlaubt, mit Dezimalstellen auf zwei Stellen. Zum Beispiel ist „9.52“ gültig, aber „9.521“ nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf „any“ setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente des Typs `number` unterstützen keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie es für das Eingeben einer dreistelligen Zahl erforderlich ist, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Global_attributes/id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld für den bisherigen Text zu schmal ist:

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorschläge für Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, welches den [`id`](/de/docs/Web/HTML/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, welches wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält. Der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Zahlen-Eingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen bei `number`-Eingaben erwähnt, aber lassen Sie uns diese jetzt zusammenfassen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, es sei denn, es wurde `required` spezifiziert).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt sein.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie einige CSS, um je nach Wert der `input`-Eingabe gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten zu übermitteln - z. B.: kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert - und schauen Sie, wie sich die Fehlermeldungen des Browsers bei den verschiedenen unterscheiden.

Der CSS-Code für dieses Beispiel ist wie folgt:

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

Hier verwenden wir die Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":valid")}}, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem benachbarten {{htmlelement("span")}}-Element anzuzeigen, als visueller Indikator für die Gültigkeit.

Es wird auf einem separaten `<span>`-Element für zusätzliche Flexibilität abgelegt. Einige Browser zeigen generierten Inhalt auf einigen Typen von Formulareingaben nicht sehr effektiv an. (Lesen Sie beispielsweise den Abschnitt zur [Validierung von `<input type="date">`](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im korrekten Format vorliegen!
>
> Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es den Nutzern ermöglichen, die Validierung zu umgehen oder sie komplett zu entfernen. Auch können Nutzer Ihr HTML umgehen und die Daten direkt an Ihren Server senden.
>
> Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, könnte ein Desaster passieren, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen die Nutzung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs nicht, um eingegebene Werte an ein spezifisches regex-Muster anzupassen.

Der Grund hierfür ist, dass Zahleneingaben nicht gültig wären, wenn sie etwas anderes als Zahlen enthalten, und Sie die Mindest- und Höchstanzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen (wie oben erklärt) beschränken können.

## Barrierefreiheit

Der implizite [role](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn `spinbutton` keine wichtige Funktion für Ihr Formularelement ist, ziehen Sie in Betracht, `type="number"` _nicht_ zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, wenn sie versuchen, etwas anderes zu tun. Darüber hinaus gibt es bei der Eingabe von etwas, das keine Zahl ist, kein explizites Feedback darüber, was falsch gemacht wird.

Ein weiteres Tool, das Sie verwenden können, ist das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut, das Benutzern hilft, Formulare schneller und mit weniger Fehlern auszufüllen. Um beispielsweise die Auto-Vervollständigung für ein Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass der Standardwert für das Inkrement `1` ist, und Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um dezimale Eingaben zuzulassen. Schauen wir uns das genauer an.

Im folgenden Beispiel gibt es ein Formular für die Eingabe der Körpergröße des Benutzers. Es wird standardmäßig in Metern angenommen, aber Sie können den entsprechenden Knopf drücken, um das Formular auf die Eingabe in Fuß und Zoll umzustellen. Die Eingabe der Größe in Metern erlaubt Dezimalstellen bis zu zwei Stellen.

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

Sie sehen, dass wir viele der Attribute verwenden, die wir zuvor im Artikel behandelt haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1,78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zunächst mithilfe von `style="display: none;"` ausgeblendet, sodass Meter der Standard-Eingabetyp ist.

Nun zum CSS. Dieses sieht sehr ähnlich aus wie das Validierungsstyling, das wir zuvor gesehen haben; nichts Außergewöhnliches.

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

Nachdem einige Variablen deklariert wurden, wird ein Ereignislistener zur Steuerung des Wechselmechanismus zum `button` hinzugefügt. Dies beinhaltet das Ändern der `class` und des {{HTMLElement("label")}} des Buttons sowie das Aktualisieren der Anzeige der beiden Eingabesets, wenn der Knopf gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll hin- und herkonvertieren, was eine realitätsnahe Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Knopf drückt, werden die `required`-Attribute der Eingaben entfernt, die wir ausblenden, und die `value`-Attribute werden geleert. Dies dient dazu, dass das Formular übermittelt werden kann, wenn beide Eingabefelder nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular nicht Daten übermittelt, die der Benutzer nicht absenden wollte.
>
> Würden Sie dies nicht tun, müssten sowohl die Eingaben für Fuß/Zoll **als auch** Meter ausgefüllt werden, um das Formular abzusenden!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine {{jsxref("Number")}}, die eine Zahl darstellt, oder leer</td>
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
