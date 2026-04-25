---
title: '`<input type="number">` HTML-Attributwert'
short-title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um den Benutzer eine Zahl eingeben zu lassen. Sie enthalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann entscheiden, Stepp-Pfeile bereitzustellen, mit denen der Benutzer den Wert mithilfe der Maus oder durch Antippen mit der Fingerspitze erhöhen oder verringern kann.

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

Eine Zahl, die den Wert der in die Eingabe eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs einfügen, so zum Beispiel:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt die Element [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser Wert, schlägt die Element [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Zeichen zur bidirektionalen Formatierung verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Kontrollzeichen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, wenn möglich, das `placeholder`-Attribut zu verwenden. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Schrittbasiswert entfernt sind, sind gültig. Der Schrittbasiswert ist [`min`](#min), wenn angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls oder `0`, wenn keiner davon angegeben ist.

Der Standardschrittwert für `number`-Eingaben ist `1`, wodurch nur ganze Zahlen eingegeben werden können –_es sei denn_, die Schrittbasis ist keine ganze Zahl.

Ein Zeichenkettenwert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (abzüglich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächsten gültigen Wert runden und Zahlwerte in positiver Richtung bevorzugen, wenn es zwei gleich nah gelegene Optionen gibt.

## Verwendung von Zahleneingaben

Der Eingabetyp `number` sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Hoch- und Herunterzählen bei der Benutzung hilfreich ist. Der Eingabetyp `number` ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber im strengeren Sinne keine Zahl sind, wie z.B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, wie z.B. [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit vereinfachen, wenn Sie die Benutzerschnittstelle und Logik für die Eingabe von Zahlen in ein Formular entwickeln. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert, `number`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und normalerweise ein Satz von Auf- und Abwärtsknöpfen zum Ändern des Werts.

> [!WARNING]
> Logischerweise sollten Sie in einer Zahlen-Eingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser lassen ungültige Zeichen zu, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann mit Ihrem HTML hinter den Kulissen herumexperimentieren, daher sollte Ihre Website für Sicherheitszwecke _keine_ clientseitige Validierung verwenden. Sie _müssen_ serverseitig jede Transaktion überprüfen, bei der der bereitgestellte Wert Sicherheitsimplikationen irgendeiner Art haben kann.

Mobile Browser verbessern das Benutzererlebnis weiter, indem sie eine speziell angepasste Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig betrachtet, wenn sie leer ist und eine einzige Zahl eingegeben wurde, ist aber ansonsten ungültig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig betrachtet, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist als Wert zulässig, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen unmittelbaren Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format der Eingabe zu geben. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine Zahleneingabe mit dem Platzhalter "Vielfaches von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schrittgröße kontrollieren

Standardmäßig werden die bereitgestellten Auf- und Abwärtspfeile, mit denen Sie die Zahl erhöhen und verringern können, den Wert um 1 ändern. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut bereitstellen, das als Wert eine Zahl hat, die die Schrittgröße angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein soll, daher ergibt es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abwärtspfeile den Wert jedes Mal um 10 statt um 1 erhöhen und verringern. Sie können weiterhin manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Mindest- und Höchstwerte festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um einen minimalen und maximalen Wert zu definieren, den das Feld haben kann. Zum Beispiel geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abwärtspfeile es nicht erlauben, unter 0 oder über 100 zu gehen. Sie können weiterhin manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem mit Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie "1.1"), wird sie als ungültig angesehen. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie numerisch gleichwertig mit ganzen Zahlen sind. Wenn Sie Werte mit Brüchen eingeben möchten, müssen Sie dies im `step`-Wert widerspiegeln (z.B. `step="0.01"`, um Dezimalzahlen mit zwei Nachkommastellen zuzulassen). Hier ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` mit Dezimalzahlen bis zu zwei Stellen zulässt. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie es für die Eingabe einer dreistelligen Zahl erforderlich ist, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld für die bisher verwendeten Texte zu eng sein wird:

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

### Vorschläge für Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein oder mehrere {{HTMLElement("option")}}-Elemente für vorgeschlagene Werte enthält. Jedes `option`-Element hat ein `value`, das den entsprechenden vorgeschlagenen Wert für das Zahleneingabefeld darstellt.

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

Wir haben bereits einige Validierungsfunktionen von `number`-Eingaben erwähnt, aber lassen Sie uns diese jetzt zusammenfassen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt sein.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von etwas CSS, um je nach dem `input`-Wert gültige und ungültige Icons anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten zu übermitteln — z.B., kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert — und sehen Sie, wie sich die Fehlermeldungen des Browsers je nach den verschiedenen Optionen unterscheiden.

Das angewendete CSS für dieses Beispiel lautet wie folgt:

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Icon als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuelles Indikator der Gültigkeit.

Wir setzen es auf ein separates `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen erstellte Inhalte nicht sehr effektiv auf bestimmten Arten von Formulareingaben an. (Lesen Sie zum Beispiel den Abschnitt über [`<input type="date">`-Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn unzulässig formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs, um eingegebene Werte auf ein bestimmtes Regex-Muster zu überprüfen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie können die minimale und maximale Anzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attributen beschränken (wie oben erläutert).

## Barrierefreiheit

Die implizierte [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn das Spinbutton für Ihr Steuerelement nicht wichtig ist, sollten Sie in Erwägung ziehen, `type="number"` nicht zu verwenden. Stattdessen können Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut verwenden, das die Zeichen auf Zahlen und assoziierte Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl erhöhen, während sie versuchen, etwas anderes zu tun. Außerdem gibt es kein explizites Feedback darüber, was falsch gemacht wird, wenn Benutzer versuchen, etwas anderes als eine Zahl einzugeben.

Erwägen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut zu verwenden, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern zu vervollständigen. Zum Beispiel, um Autofill auf einem Feld für die Postleitzahl zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits erwähnt, dass der Inkrementstandard `1` ist und Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um Dezimalwerte zuzulassen. Schauen wir uns das genauer an.

Im folgenden Beispiel gibt es ein Formular zur Eingabe der Körpergröße eines Benutzers. Es akzeptiert standardmäßig eine Größe in Metern, aber Sie können den entsprechenden Button klicken, um das Formular auf die Eingabe von Fuß und Zoll umzustellen. Die Eingabe für die Größe in Metern akzeptiert Dezimalstellen bis zu zwei Stellen.

{{EmbedLiveSample("Examples", 600, 150)}}

Der HTML-Code sieht so aus:

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

Sie sehen, dass wir viele der Attribute verwenden, die wir im Artikel zuvor betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zoll-Eingaben zunächst mit `style="display: none;"` versteckt, sodass Meter die Standardeingabeart ist.

Nun zum CSS. Dies sieht sehr ähnlich der Validierungsstilierung aus, die wir zuvor gesehen haben; hier gibt es nichts Besonderes.

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

Nachdem wir einige Variablen deklariert haben, wird ein Ereignislistener zum `button` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies beinhaltet das Ändern der `class` und des {{HTMLElement("label")}} des Buttons sowie das Aktualisieren der Anzeige der zwei Sets von Eingaben, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll hin und her konvertieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Button klickt, wird das `required`-Attribut von den Eingaben entfernt, die wir verstecken, und die `value`-Attribute werden geleert. Dies geschieht, damit das Formular übermittelt werden kann, wenn nicht beide Eingabesätze ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht gemeint hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzusenden!

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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

- [HTML-Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
