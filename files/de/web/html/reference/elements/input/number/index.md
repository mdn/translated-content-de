---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um dem Benutzer die Eingabe einer Zahl zu ermöglichen. Sie beinhalten eine integrierte Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann optional Steuerelemente bereitstellen, die es dem Benutzer ermöglichen, den Wert mit der Maus oder einem Fingertipp zu erhöhen oder zu verringern.

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

In Browsern, die Eingaben vom Typ `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den in die Eingabe eingegebenen Wert darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs angeben, wie unten gezeigt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht zu den vorgeschlagenen Optionen hinzugefügt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Falls der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung präsentiert werden soll, können Sie Zeichen zur Formatierung des Unicode-bidirektionalen Algorithmus verwenden, um die Richtung des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das `placeholder`-Attribut zu verwenden. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### `readonly`

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktem Setzen des `value`-Eigenschaft im [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mittels JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basiswert ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, falls keiner angegeben ist.

Der Standardschrittwert für `number`-Eingaben ist `1`, wodurch nur Ganzzahlen eingegeben werden dürfen — _es sei denn_, die Basis des Schritts ist keine Ganzzahl.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt impliciert wird und jeder Wert erlaubt ist (mit Ausnahme anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden und bevorzugt dabei Zahlen in positiver Richtung, wenn es zwei gleich weit entfernte Optionen gibt.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn die Inkrementierung und Dekrementierung mit der Spinbutton-Funktion für die Benutzererfahrung hilfreich sind. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber streng genommen keine Zahlen sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp verwenden, wie etwa [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihnen helfen, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik zum Eingeben von Zahlen in ein Formular zu vereinfachen. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Set Up- und Down-Tasten, um den Wert zu erhöhen oder zu verringern.

> [!WARNING]
> Logischerweise sollten Sie in einer Zahleneingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumspielen, deshalb darf Ihre Seite _auf keinen Fall_ die Client-seitige Validierung aus Sicherheitsgründen verwenden. Sie _müssen_ serverseitig jede Transaktion überprüfen, bei der der bereitgestellte Wert irgendwelche sicherheitsrelevanten Implikationen haben könnte.

Mobile Browser unterstützen die Benutzererfahrung zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser geeignet ist, um Zahlen einzugeben, sobald der Benutzer einen Wert eingeben möchte.

### Eine einfache Zahleneingabe

In ihrer einfachsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, andernfalls ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, keine [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis zu bieten, in welcher Form die eingegebenen Daten vorliegen sollen. Das kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format zu geben, das die Eingabe annehmen soll `value`. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfach von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, je nachdem, wie Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittgröße

Standardmäßig erhöhen und verringern die bereitgestellten Auf- und Abwärts-Schaltflächen den Wert jeweils um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut bereitstellen, das als Wert eine Zahl zur Angabe der Schrittmenge vorgibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, daher ist es sinnvoll, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten die Auf- und Abwärts-Pfeile den Wert jeweils um 10 und nicht um 1 erhöhen und verringern. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber diese wird als ungültig angesehen.

### Festlegen von minimalen und maximalen Werten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um einen minimalen und maximalen Wert festzulegen, den das Feld haben kann. Geben wir zum Beispiel unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abwärts-Schaltflächen nicht zulassen, dass Sie unter 0 oder über 100 gehen. Sie können immer noch manuell eine Zahl eingeben, die außerhalb dieser Grenzen liegt, aber diese wird als ungültig angesehen.

### Ermöglichung dezimaler Werte

Ein Problem mit Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 beträgt. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, die keine ganze Zahl ist (wie "1.1"), wird sie als ungültig betrachtet. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie numerisch äquivalent zu ganzen Zahlen sind. Wenn Sie Werte mit Brüchen eingeben möchten, müssen Sie dies im `step`-Wert widerspiegeln (z.B. `step="0.01"`, um Dezimalzahlen auf zwei Dezimalstellen zu erlauben). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel einen Wert zwischen `0.0` und `10.0` mit Dezimalstellen bis zu zwei Stellen erlaubt. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Form-Attributgrößen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen [CSS](/de/docs/Web/CSS) verwenden, um die Größe dieser Steuerelemente zu ändern.

Zum Beispiel, um die Breite der Eingabe so anzupassen, dass nur eine dreistellige Zahl eingegeben werden kann, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld für den Text, den wir bisher verwendet haben, zu schmal ist:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem `id`-Selektor `#number` zu verengen:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorschlagen vordefinierter Werte

Sie können eine Liste mit Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einer {{HTMLElement("datalist")}} enthält, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für das Zahleneingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen für `number`-Eingaben erwähnt, aber lassen Sie uns diese nun zusammenfassen:

- `<input type="number">`-Elemente werden automatisch als ungültig angesehen, wenn sie etwas anderes als eine Zahl enthalten (oder leer sind, es sei denn `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von etwas CSS, um je nach `input`-Wert gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten abzuschicken — z.B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert — und sehen Sie, wie die Fehlermeldungen des Browsers mit unterschiedlichen Eingaben variieren.

Das auf dieses Beispiel angewandte CSS sieht wie folgt aus:

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudo-Klassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuelle Anzeige der Gültigkeit.

Wir setzen es auf ein separates `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt bei einigen Arten von Formulareingaben nicht sehr effektiv an. (Lesen Sie zum Beispiel den Abschnitt über die [`<input type="date">`-Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im korrekten Format vorliegen!
>
> Es ist viel zu leicht für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr serverseitiger Code die erhaltenen Daten nicht überprüft, könnte ein Disaster entstehen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs, um eingegebene Werte einem bestimmten Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahlen-Eingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) (wie oben erklärt) einschränken können.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn die Spinbutton-Funktion für Ihre Formsteuerung nicht wichtig ist, sollten Sie _nicht_ `type="number"` verwenden. Stattdessen sollten Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Bei `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, während sie versuchen, etwas anderes zu tun. Wenn Benutzer etwas eingeben, das keine Zahl ist, gibt es zudem kein explizites Feedback darüber, was sie falsch machen.

Erwägen Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs, um Benutzern dabei zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Zum Beispiel, um Autofill auf einem Postleitzahlenfeld zu ermöglichen, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits erwähnt, dass der Standard-Inkrementwert `1` ist und dass Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um Dezimaleingaben zu ermöglichen. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel befindet sich ein Formular zur Eingabe der Körpergröße des Benutzers. Standardmäßig wird die Eingabe der Größe in Metern akzeptiert, aber Sie können den entsprechenden Button klicken, um das Formular so zu ändern, dass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Größe in Metern akzeptiert Dezimalzahlen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir im Artikel zuvor betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` festgelegt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Füße- und Zoll-Eingaben initial versteckt, indem wir `style="display: none;"` verwenden, sodass Meter der Standardeingabetyp ist.

Nun zum CSS. Dies sieht sehr ähnlich aus wie das Validierungsstyling, das wir bereits gesehen haben; hier ist nichts Bemerkenswertes.

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

Nach der Deklaration einiger Variablen wird ein Ereignislistener zum `button` hinzugefügt, um den Wechselschaltermechanismus zu steuern. Dies beinhaltet das Wechseln der `class` des Buttons und der {{HTMLElement("label")}}, sowie das Aktualisieren der Anzeigewerte der beiden Sets von Eingaben, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Füßen/Zoll hin- und herkonvertieren, was eine reale Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Button klickt, werden die `required`-Attribute der Eingaben entfernt, die wir verstecken, sowie die `value`-Attribute geleert. Dies erfolgt, damit das Formular eingereicht werden kann, auch wenn, nicht beide Satzarten von Eingaben ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzuschicken!

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

- [HTML Forms Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
