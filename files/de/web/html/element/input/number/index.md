---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um dem Benutzer die Eingabe einer Zahl zu ermöglichen. Sie enthalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann sich dafür entscheiden, Stepper-Pfeile bereitzustellen, um dem Benutzer zu ermöglichen, den Wert mit der Maus oder durch Antippen zu erhöhen oder zu verringern.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

In Browsern, die Eingaben vom Typ `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den in die Eingabe eingegebenen Zahlenwert darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der Mindestwert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte sich um ein Wort oder eine kurze Phrase handeln, die den erwarteten Datentyp demonstriert, und nicht um eine erklärende Nachricht. Der Text darf keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung (LTR oder RTL) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektionale-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code, der direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Basis für das Schritte (der [`min`](#min), falls angegeben, andernfalls der [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner von diesen angegeben ist) sind, sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Schritte impliziert sind und jeder Wert (sofern keine anderen Einschränkungen bestehen, wie [`min`](#min) und [`max`](#max)) erlaubt ist.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittkonfiguration übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und bevorzugt dabei Zahlen in positiver Richtung, wenn zwei gleich nahe Optionen vorhanden sind.

Der Standardwert für Schritte bei `number`-Eingaben ist `1`, was nur Ganzzahlen erlaubt, außer die Schrittgrundlage ist keine Ganzzahl.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn die Verwendung von Spinbutton-Inkrementierung und -Dekrementierung für die Benutzererfahrung hilfreich ist. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zufälligerweise nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie in Betracht ziehen, einen anderen Eingabetyp, wie [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut zu verwenden:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können dazu beitragen, Ihre Arbeit beim Erstellen der Benutzeroberfläche und der Logik für die Eingabe von Zahlen in ein Formular zu vereinfachen. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Überprüfung, dass der eingegebene Text eine Zahl ist, und normalerweise einen Satz von Aufwärts- und Abwärtstasten, um den Wert zu erhöhen oder zu erniedrigen.

> [!WARNING]
> Logisch sollten Sie keine anderen Zeichen als Zahlen in eine Zahleneingabe eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann heimlich an Ihrem HTML manipulieren, deshalb darf Ihre Website _nicht_ auf Client-seitige Validierung für Sicherheitszwecke vertrauen. Sie _müssen_ auf der Serverseite jede Transaktion verifizieren, bei der der bereitgestellte Wert sicherheitsrelevante Auswirkungen haben könnte.

Mobile Browser unterstützen die Benutzererfahrung zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser zum Eingeben von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine einfache Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe gilt als gültig, wenn sie leer ist und eine einzelne Zahl eingegeben wird, ist jedoch ansonsten ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, gilt die Eingabe nicht mehr als gültig, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Fließkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format zu geben, das die Eingabe haben sollte `value`. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Multiple von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schrittgröße steuern

Standardmäßig steigen und fallen die bereitgestellten Aufwärts- und Abwärtstasten, um die Zahl zu erhöhen und zu verringern, um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut angeben, das als Wert eine Zahl spezifiziert, die die Schrittgröße angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, daher macht es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abwärtspfeile den Wert jedes Mal um 10 erhöhen und verringern, nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Mindest- und Höchstwerte festlegen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um einen Mindest- und Höchstwert festzulegen, den das Feld haben kann. Geben wir unserem Beispiel zum Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abwärtstasten es Ihnen nicht erlauben, unter 0 oder über 100 zu gehen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte erlauben

Ein Problem mit Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalpunkt einzugeben (wie "1.0"), wird sie als ungültig angesehen. Wenn Sie einen Wert eingeben möchten, der Dezimalstellen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"`, um Dezimalstellen auf zwei Stellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` mit dezimalen Stellen bis zu zwei Stellen erlaubt. Zum Beispiel ist "9.52" gültig, aber "9.521" ist es nicht.

Wenn Sie willkürliche Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingabegröße steuern

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Attribute zur Formgrößenberechnung wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen zu [CSS](/de/docs/Web/CSS) greifen, um die Größe dieser Steuerelemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie es zum Eingeben einer dreistelligen Zahl erforderlich ist, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Global_attributes/id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld zu schmal für den Text ist, den wir bisher verwendet haben:

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Jeder `option`-Wert ist der entsprechende vorgeschlagene Wert für das Zahlen-Eingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen von `number`-Eingaben erwähnt, lassen Sie uns diese nun zusammenfassen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt sein.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von etwas CSS, um je nach Wert der `input` gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten einzureichen - z. B. ohne Wert; einem Wert unter 0 oder über 100; einem Wert, der kein Vielfaches von 10 ist; oder einem nicht-numerischen Wert - und sehen Sie, wie sich die Fehlermeldungen, die der Browser Ihnen gibt, mit unterschiedlichen Werten unterscheiden.

Das auf dieses Beispiel angewendete CSS sieht wie folgt aus:

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudoklassen, um je nach Gültigkeit auf dem angrenzenden {{htmlelement("span")}}-Element ein entsprechendes ungültiges oder gültiges Symbol als erzeugten Inhalt anzuzeigen.

Wir setzen es auf ein separates `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen erzeugten Inhalt auf einigen Arten von Formulareingaben nicht sehr effektiv an. (Lesen Sie zum Beispiel den Abschnitt über die [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster eintreten, wenn falsch formatierte Daten gesendet werden (oder Daten, die zu groß, vom falschen Typ usw. sind).

### Musterprüfung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs, um eingegebene Werte an ein bestimmtes Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die Mindest- und Höchstzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen (wie oben beschrieben) einschränken können.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn der Spinbutton kein wichtiges Feature für Ihre Formulareingabesteuerung ist, ziehen Sie in Betracht, _nicht_ `type="number"` zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, wenn sie eigentlich etwas anderes versuchen. Außerdem erhalten Benutzer, die versuchen, etwas anderes als eine Zahl einzugeben, kein explizites Feedback darüber, was sie falsch machen.

Sie sollten auch das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut erwägen, um Benutzern zu helfen, Formulare schneller und mit geringeren Fehlerchancen auszufüllen. Zum Beispiel um Autovervollständigung in einem Postleitzahl-Feld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass der Standardinkrementwert `1` ist und dass Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um Dezimaleingaben zu ermöglichen. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel befindet sich ein Formular zur Eingabe der Körpergröße des Benutzers. Es ist standardmäßig so eingestellt, dass es eine Größe in Metern akzeptiert, aber Sie können auf die entsprechende Schaltfläche klicken, um das Formular so zu ändern, dass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Höhe in Metern akzeptiert Dezimalstellen bis zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits im Artikel zuvor behandelt haben. Da wir einen Meterwert in Zentimeter akzeptieren wollen, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zoll-Eingaben zunächst mit `style="display: none;"` versteckt, sodass Meter die Standardeingabetyp ist.

Nun zum CSS. Dies sieht sehr ähnlich aus wie das Validierungsstyling, das wir zuvor gesehen haben; nichts Bemerkenswertes hier.

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

Nachdem wir einige Variablen deklariert haben, wird ein Ereignislistener an die `Schaltfläche` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies beinhaltet das Ändern der `class` und des {{HTMLElement("label")}} der Schaltfläche sowie das Aktualisieren der Anzeige der beiden Eingabesätze, wenn die Taste gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Meter und Fuß/Zoll hin und her konvertieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer auf die Schaltfläche klickt, werden die `required`-Attribute der Eingaben, die wir verstecken, entfernt und die `value`-Attribute geleert. Dies ist so, dass das Formular gesendet werden kann, wenn nicht beide Entsätze ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll als auch Meter ausfüllen, um das Formular abzuschicken!

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
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role">spinbutton</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formular-Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [Kompatibilität von CSS-Eigenschaften bei Formularsteuerelementen](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
