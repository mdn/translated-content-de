---
title: '`<input type="number">` HTML-Attributwert'
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: 1bc1971a1265d1792c94b99b736c5accec1fec6d
---

{{HTMLElement("input")}}-Elemente des Typs **`number`** werden verwendet, um dem Benutzer die Eingabe einer Zahl zu ermöglichen. Sie beinhalten eine integrierte Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann möglicherweise Pfeile bereitstellen, damit der Benutzer den Wert mit der Maus oder durch Tippen mit der Fingerspitze erhöhen oder verringern kann.

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

Eine Zahl, die den Wert der in das Eingabefeld eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben des Typs `number` diese Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht kompatibel mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen übersteigt, schlägt die Element [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist, schlägt die Element [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn für `min` ein Wert angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung (LTR oder RTL) hat, der Platzhalter jedoch in die entgegengesetzte Richtung darstellen soll, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Methoden zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### `readonly`

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten von der Stufe aus entfernt sind, sind gültig. Die Stufe ist [`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls oder `0`, wenn keiner angegeben ist.

Der standardmäßige Schrittwert für `number`-Eingaben ist `1`, was nur die Eingabe von ganzen Zahlen erlaubt — _es sei denn_, die Stufenbasis ist keine ganze Zahl.

Ein Stringwert von `any` bedeutet, dass kein Schrittverhalten impliziert ist, und jeder Wert (unter Berücksichtigung anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)) zulässig ist.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Konfiguration der Schritte übereinstimmen, kann der {{Glossary("user_agent", "user agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Zahleneingaben

Der Eingabetyp `number` sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Hoch- und Herunterzählen von Schaltflächen nützlich für die Benutzererfahrung ist. Der Eingabetyp `number` ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber nicht streng genommen eine Zahl sind, wie z.B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Erwägung ziehen, wie z.B. [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können helfen, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und der Logik für die Eingabe von Zahlen in ein Formular zu erleichtern. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert erstellen, `number`, erhalten Sie automatisch die Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Satz von Auf- und Ab-Schaltflächen, um den Wert nach oben und unten zu befestigen.

> [!WARNING]
> Logischerweise sollten Sie keine anderen Zeichen als Zahlen in ein Number-Input eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML herumspielen, sodass Ihre Seite _keine_ clientseitige Validierung für Sicherheitszwecke verwenden darf. Sie _müssen_ serverseitig jede Transaktion überprüfen, bei der der bereitgestellte Wert irgendwelche sicherheitsrelevante Auswirkungen haben könnte.

Mobile Browser verbessern die Benutzererfahrung weiter, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe wie folgt implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Nummerneingabe wird als gültig betrachtet, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, abgesehen davon ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange es sich um eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) handelt (also nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen Hinweis im Kontext anzubieten, wie die Form der Eingabedaten aussehen soll. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format der Eingabe zu geben, `value`. Er wird innerhalb der Bearbeitungsbox angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfaches von 10". Beachten Sie, wie der Platzhalter beim Bearbeiten des Inhalts des Bearbeitungsfelds verschwindet und wieder auftaucht.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittgröße

Standardmäßig erhöhen und verringern die Auf- und Abwärts-Schaltflächen den Wert in Schritten von 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut angeben, das als Wert eine Zahl enthält, die die Schrittweite spezifiziert. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, also ist es sinnvoll das `step`-Attribut auf `10` zu setzen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abwärts-Schaltflächen den Wert jeweils um 10 und nicht um 1 erhöhen oder verringern. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Festlegen von minimalen und maximalen Werten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um einen minimalen und maximalen Wert festzulegen, den das Feld haben kann. Geben wir unserem Beispiel einen Minimalwert von `0` und einen Maximalwert von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abwärts-Schaltflächen nicht zulassen werden, dass Sie unter 0 oder über 100 gehen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem mit Zahleneingaben ist, dass die Größe der Schrittweite standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie "1.1"), wird sie als ungültig betrachtet. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, weil sie numerisch gleichwertig zu ganzen Zahlen sind. Wenn Sie Werte mit Brüchen eingeben möchten, müssen Sie dies im `step`-Wert widerspiegeln (z.B. `step="0.01"`, um Dezimalstellen auf zwei Nachkommastellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Dieses Beispiel erlaubt jeden Wert zwischen `0.0` und `10.0`, mit Dezimalstellen bis zu zwei Stellen. Beispielsweise ist "9.52" gültig, aber "9.521" ist es nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente des Typs `number` unterstützen keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerungen zu ändern.

Um beispielsweise die Breite der Eingabe nur so breit zu machen, dass man eine dreistellige Zahl eingeben kann, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) zu verwenden und unseren Platzhalter zu verkürzen, da das Feld für den bisher verwendeten Text zu schmal sein wird:

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

### Vorschlagen von Werten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben, welches seinen Wert der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Jedes `option`-Element hat als `value` den entsprechenden vorgeschlagenen Wert für das Ziffernfeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen für `number`-Eingaben erwähnt, lassen Sie uns diese nun zusammenfassen:

- `<input type="number">`-Elemente machen automatisch alle Einträge ungültig, die keine Zahl sind (oder leer, es sei denn, es ist `required` angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um einen leeren Eintrag ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten (z.B. Vielfache von 10) zu beschränken.
- Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen und verwendet auch etwas CSS, um gültige und ungültige Symbole abhängig vom Wert der `input`-Eingabe anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten einzureichen — z.B. ohne Wert; einem Wert unter 0 oder über 100; einem Wert, der kein Vielfaches von 10 ist; oder einem nicht-numerischen Wert — und sehen Sie, wie sich die Fehlermeldungen des Browsers bei verschiedenen Fehlern unterscheiden.

Das auf dieses Beispiel angewendete CSS ist wie folgt:

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Icon als generierte Inhalte auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuellen Hinweis auf die Gültigkeit.

Wir setzen es auf ein separates `<span>`-Element für mehr Flexibilität. Einige Browser zeigen generierte Inhalte nicht sehr effektiv bei einigen Arten von Formulareingaben an. (Lesen Sie zum Beispiel den Abschnitt zur [`<input type="date">`-Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _keine_ Alternative zu serverseitigen Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, um die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu katastrophalen Folgen kommen, wenn falsch formatierte Daten eingereicht werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Mustervalidierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs, um eingegebene Werte an ein spezifisches Regex-Muster anzupassen.

Der Grund hierfür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die Mindest- und maximal zulässige Anzahl gültiger Ziffern mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) (wie oben erläutert) einschränken können.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn das Spinbutton keine wichtige Funktion für Ihre Formsteuerung ist, sollten Sie in Erwägung ziehen, `type="number"` _nicht_ zu verwenden. Stattdessen können Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht die Gefahr, dass Benutzer eine Zahl versehentlich erhöhen, wenn sie etwas anderes tun möchten. Außerdem erhalten Benutzer, die versuchen, etwas einzugeben, das keine Zahl ist, keine explizite Rückmeldung darüber, was sie falsch machen.

Überlegen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut zu verwenden, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlerwahrscheinlichkeit auszufüllen. Zum Beispiel, um das automatische Ausfüllen eines Postleitzahlenfelds zu ermöglichen, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass die Erhöhung standardmäßig `1` beträgt, und Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um dezimale Eingaben zuzulassen. Schauen wir uns das genauer an.

Im folgenden Beispiel gibt es ein Formular zur Eingabe der Höhe des Benutzers. Es ist standardmäßig auf die Eingabe einer Höhe in Metern eingestellt, aber Sie können den entsprechenden Button klicken, um das Formular so zu ändern, dass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Höhe in Metern akzeptiert Dezimalstellen bis zu zwei Nachkommastellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits zu Beginn des Artikels betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zoll-Eingaben zunächst versteckt, indem wir `style="display: none;"` verwenden, sodass Meter die Standard-Eingabeart ist.

Nun zum CSS. Dies sieht sehr ähnlich wie das Validierungsstyling aus, das wir zuvor gesehen haben; nichts Besonderes hier.

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

Nachdem wir einige Variablen deklariert haben, wird dem `button` ein Event-Listener hinzugefügt, um den Umschaltmechanismus zu steuern. Dies umfasst das Ändern der `class` und des {{HTMLElement("label")}} des Buttons und das Aktualisieren der Anzeigewerte der beiden Eingabensätze, wenn der Button gedrückt wird.

(Beachten Sie, dass wir nicht zwischen Metern und Fuß/Inches hin- und her konvertieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer auf den Button klickt, werden die `required`-Attribute der versteckten Eingabe(n) entfernt und der `value`-Attribut(e) geleert. Dies dient dazu, dass das Formular eingereicht werden kann, wenn nicht beide Eingabensätze ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten einreicht, die der Benutzer nicht gemeint hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular einzureichen!

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
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
