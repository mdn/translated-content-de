---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um den Benutzer eine Zahl eingeben zu lassen. Sie enthalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann optional Wippenpfeile bereitstellen, mit denen der Benutzer den Wert mit der Maus oder durch Tippen mit einem Finger erhöhen und verringern kann.

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

In Browsern, die Eingaben vom Typ `number` nicht unterstützen, wird ein `number`-Input auf den Typ `text` zurückgesetzt.

## Wert

Eine Zahl, die den Wert der in das Eingabefeld eingegebenen Zahl darstellt. Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Typen üblicherweise unterstützten Attributen unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des max-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn ein Wert für min angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das placeholder-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp zeigt, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung (LTR oder RTL) hat, der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-Bidi-Algo-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; Weitere Informationen finden Sie unter [Wie man Unicode-Steuerelemente für Bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie es, das placeholder-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### `step`

Das step-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben ist. Nur Werte, die gleich dem Ausgangspunkt für das Stufen ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansonsten und ein entsprechender Standardwert, wenn keiner von diesen angegeben ist) sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Stufung impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stufenkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und bevorzugt dabei Zahlen in positiver Richtung, wenn zwei gleich nah aneinanderliegende Optionen bestehen.

Der Standard-Stufenwert für `number`-Eingaben ist `1`, sodass nur ganze Zahlen eingegeben werden können—_es sei denn,_ der Stufenbasiswert ist keine ganze Zahl.

## Verwendung von Number-Eingaben

Der `number`-Input-Typ sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das inkrementieren und dekrementieren mit Schaltflächen die Benutzererfahrung verbessert. Der `number`-Input-Typ ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber eigentlich keine Nummer sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Input-Typ in Betracht ziehen, wie zum Beispiel [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit vereinfachen, wenn Sie die Benutzeroberfläche und Logik für die Eingabe von Zahlen in ein Formular erstellen. Wenn Sie eine Nummerneingabe mit dem richtigen `type`-Wert erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und normalerweise ein Set an Aufwärts- und Abwärtspfeil-Schaltflächen, um den Wert zu erhöhen oder zu verringern.

> [!WARNING]
> Logisch gesehen sollten Sie innerhalb einer Nummerneingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML spielen, daher _darf_ Ihre Website keine clientseitige Validierung aus Sicherheitsgründen verwenden. Sie _müssen_ auf der Serverseite jede Transaktion überprüfen, bei der der bereitgestellte Wert irgendeine Art von Sicherheitsimplikationen haben könnte.

Mobile Browser helfen zusätzlich bei der Benutzererfahrung, indem sie eine spezielle Tastatur anzeigen, die besser zum Eingeben von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Nummerneingabe

In ihrer einfachsten Form kann eine Nummerneingabe wie folgt implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Nummerneingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, andernfalls ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Fließkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, keine [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten erscheinen sollen. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis darauf zu geben, in welchem Format die Eingabe `value` sein sollte. Er wird innerhalb des Eingabefeldes angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; und wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfaches von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Eingabefeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittweite

Standardmäßig erhöhen und verringern die bereitgestellten Auf- und Abwärtspfeil-Schaltflächen den Wert um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut angeben, das als Wert eine Zahl angibt, die die Schrittmenge spezifiziert. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, daher ist es sinnvoll, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abwärtspfeile den Wert jedes Mal um 10 erhöhen und verringern, nicht um 1. Sie können weiterhin manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Mindest- und Höchstwerte angeben

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um einen minimalen und maximalen Wert anzugeben, den das Feld haben kann. Geben wir unserem Beispiel einen Mindestwert von `0` und einen Höchstwert von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abwärtspfeile nicht zulassen, dass Sie unter 0 oder über 100 gehen. Sie können weiterhin manuell eine Zahl eingeben, die außerhalb dieser Grenzen liegt, aber sie wird als ungültig betrachtet.

### Dezimalwerte zulassen

Ein Problem mit Nummerneingaben ist, dass ihre Schrittweite standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie "1.1"), wird sie als ungültig angesehen. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie numerisch äquivalent zu ganzen Zahlen sind. Wenn Sie Werte mit Dezimalstellen eingeben möchten, müssen Sie dies im `step`-Wert widerspiegeln (zum Beispiel `step="0.01"` um Dezimalstellen bis auf zwei Stellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` erlaubt, mit Dezimalen bis zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" ist es nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Formen von Größenattributen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerungen zu ändern.

Zum Beispiel, um die Breite der Eingabe nur so weit anzupassen, dass sie eine dreistellige Zahl zulässt, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hinzuzufügen und unseren Platzhalter zu verkürzen, da das Feld zu schmal für den bisher verwendeten Text wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem ID-Selektor `#number` zu verengen:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus der der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einer {{HTMLElement("datalist")}} enthält, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für den Nummerneingabebereich.

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

Wir haben bereits eine Reihe von Validierungsmerkmalen von `number`-Eingaben erwähnt, aber lassen Sie uns sie jetzt zusammenfassen:

- `<input type="number">`-Elemente machen jeden Eintrag ungültig, der keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um einen leeren Eintrag ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Schriftsätze zu beschränken (zum Beispiel Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Schranken zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von etwas CSS, um gültige und ungültige Symbole basierend auf dem Wert des `input` als generierten Inhalt auf dem benachbarten {{htmlelement("span")}}-Element anzuzeigen, als visuellen Indikator für die Gültigkeit.

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten abzusenden — z.B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert — und sehen Sie, wie die Fehlermeldungen, die der Browser Ihnen gibt, bei unterschiedlichen Werttypen abweichen.

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

Hier benutzen wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem benachbarten {{htmlelement("span")}}-Element anzuzeigen, als visuellen Hinweis auf die Gültigkeit.

Wir bringen es auf einem separaten `<span>`-Element an, um mehr Flexibilität zu bieten. Einige Browser zeigen generierte Inhalte auf einigen Typen von Formulareingaben nicht sehr effektiv an. (Lesen Sie zum Beispiel den Abschnitt zum [`<input type="date">`-Validation](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripts, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr Servercode die Daten, die er erhält, nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs nicht, um eingegebene Werte an ein bestimmtes Regex-Muster anzupassen.

Der Grund dafür ist, dass Number-Inputs nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern unter Verwendung der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute beschränken können (wie oben erläutert).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn das Spinbutton für Ihr Formularsteuerungselement keine wichtige Funktion ist, ziehen Sie in Betracht, _nicht_ `type="number"` zu verwenden. Stattdessen können Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl erhöhen, wenn sie versuchen, etwas anderes zu tun. Außerdem gibt es keine explizite Rückmeldung darüber, was sie falsch machen, wenn sie versuchen, etwas einzugeben, das keine Zahl ist.

Ziehen Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs in Betracht, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Zum Beispiel, um das automatische Ausfüllen eines Feldes für die Postleitzahl zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits erwähnt, dass der Standard-inkrement ein `1` ist, und Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um Dezimaleingaben zuzulassen. Sehen wir uns das genauer an.

Im folgenden Beispiel handelt es sich um ein Formular zur Eingabe der Größe des Benutzers. Es akzeptiert standardmäßig einen Wert in Metern, Sie können jedoch den entsprechenden Knopf betätigen, um das Formular anzupassen, damit es stattdessen die Eingabe in Fuß und Zoll akzeptiert. Die Eingabe für die Höhe in Metern akzeptiert Dezimalstellen bis zu zwei Stellen.

{{EmbedLiveSample("Examples", 600, 150)}}

Der HTML-Code sieht folgendermaßen aus:

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

Sie werden feststellen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel angesehen haben. Da wir eine Meterhöhe in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben initial durch `style="display: none;"` verborgen, sodass die Eingabe in Metern der Standard-Eingabetyp ist.

Nun zum CSS. Dies sieht der Validierungsstil, den wir zuvor gesehen haben, sehr ähnlich; nichts Bemerkenswertes hier.

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

Nach der Deklaration einiger Variablen wird der `button` ein Event-Listener hinzugefügt, um den Umschaltmechanismus zu steuern. Dies beinhaltet das Ändern der `class` des Buttons und das {{HTMLElement("label")}}, sowie das Aktualisieren der Display-Werte der beiden Eingabesets, wenn der Knopf gedrückt wird.

(Beachten Sie, dass wir hier nicht hin und her zwischen Metern und Fuß/Zoll konvertieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Button klickt, werden das `required`-Attribut(e) der versteckten Eingabe(n) entfernt und die `value`-Attribut(e) geleert. Dies ist so, dass das Formular abgeschickt werden kann, auch wenn nicht beide Eingabesets ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht übermitteln wollte.
>
> Wenn Sie das nicht tun, müssten Sie sowohl die Fuß/Zoll- als auch die Metrangaben ausfüllen, um das Formular abzusenden!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein {{jsxref("Number")}} der eine Nummer repräsentiert oder leer ist</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- [HTML Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
