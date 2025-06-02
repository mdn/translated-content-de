---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`number`** werden verwendet, um dem Benutzer das Eingeben einer Zahl zu ermöglichen. Sie enthalten integrierte Validierung, um nicht-numerische Einträge abzulehnen.

Der Browser kann beispielsweise Steppertasten bereitstellen, um dem Benutzer das Erhöhen und Verringern des Wertes mit der Maus oder durch Tippen mit der Fingerspitze zu ermöglichen.

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

Eine Zahl, die den Wert der in das Eingabefeld eingegebenen Zahl repräsentiert. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl in das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut einfügen, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemein von allen {{HTMLElement("input")}} Typen unterstützten Attributen unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im gleichen Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten als Vorschläge für diese Eingabe an. Alle in der Liste enthaltenen Werte, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des max Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des `min` Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements weniger als dieser beträgt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in das Feld eingegeben werden sollen. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in entgegengesetzter Richtung dargestellt werden muss, können Sie Unicode-Bidirektionalitätsformatierungszeichen verwenden, um die Richtung im Platzhalter außer Kraft zu setzen; siehe [Anleitung zur Verwendung von Unicode-Steuerungen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Methoden zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinerlei Auswirkungen auf Eingaben mit ebenfalls spezifiziertem `readonly` Attribut.

### `step`

Das `step` Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Basis für das Übersteigen sind ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) sonst, und ein geeigneter Standardwert, wenn keiner von diesen bereitgestellt ist) sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist, und jeder Wert ist erlaubt (vorbehaltlich anderer Einschränkungen, wie etwa [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn zwei gleich gut passende Optionen vorhanden sind.

Der standardmäßige Step-Wert für Eingaben vom Typ `number` ist `1`, was nur das Eingeben von Ganzzahlen erlaubt — _es sei denn_, die Basis für das Übersteigen ist keine Ganzzahl.

## Verwendung von Nummerneingaben

Der `number` Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, besonders dann, wenn das Inkrementieren und Dekrementieren mit Spinbuttons zur Benutzererfahrung beitragen. Der `number` Eingabetyp ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber genau genommen keine Zahl sind, wie z.B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, bspw. [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder eine andere {{HTMLElement('input')}} Art mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">` Elemente können Ihnen die Arbeit erleichtern, wenn Sie die Benutzeroberfläche und Logik zum Eingeben von Zahlen in ein Formular erstellen. Wenn Sie eine Zahleneingabe mit dem richtigen `type` Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel einen Satz auf- und abwärts gehenden Tasten, um den Wert zu erhöhen oder zu verringern.

> [!WARNING]
> Logisch gesehen sollten Sie keine Zeichen außer Zahlen in ein Zahleneingabefeld eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann im Hintergrund an Ihrem HTML basteln, sodass Ihre Website clientseitige Validierung _nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ serverseitig jede Transaktion verifizieren, bei der der bereitgestellte Wert Sicherheitsimplikationen irgendeiner Art haben kann.

Mobile Browser erleichtern das Benutzererlebnis zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine einfache Nummerneingabe

In der grundlegendsten Form kann eine Nummerneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Nummerneingabe wird als gültig angesehen, wenn sie leer ist oder wenn eine einzelne Zahl eingegeben wird, andernfalls ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Fließkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine erklärenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der meistens verwendet wird, um einen Hinweis auf das Format zu geben, das die Eingabe haben sollte. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `number` Eingabe mit dem Platzhalter "Multiplikator von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder auftaucht, wenn Sie den Inhalt des Bearbeitungsfeldes ändern.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittgröße

Standardmäßig bewirken die bereitgestellten Aufwärts- und Abwärtstasten, dass der Wert um 1 erhöht oder verringert wird. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut bereitstellen, das einen Zahlenwert angibt, der die Schrittgröße festlegt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, sodass es sinnvoll ist, einen `step` Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die auf- und abwärts gerichteten Schritt-Tasten den Wert jedes Mal um 10 erhöhen oder verringern, nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Mindest- und Höchstwerte festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um einen Mindest- und Höchstwert festzulegen, den das Feld haben kann. Beispielsweise geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die auf- und abwärts gerichteten Schritt-Tasten es nicht erlauben, unter 0 oder über 100 zu gehen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem mit Zahleneingaben ist, dass die Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, die keine Ganzzahl ist (z.B. "1.1"), wird sie als ungültig angesehen. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie numerisch gleichwertig zu Ganzzahlen sind. Wenn Sie Werte mit Bruchteilen eingeben möchten, müssen Sie dies im `step` Wert reflektieren (z.B. `step="0.01"`, um Dezimalstellen auf zwei Dezimalstellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sie sehen, dass dieses Beispiel einen beliebigen Wert zwischen `0.0` und `10.0` mit Dezimalstellen bis zu zwei Stellen zulässt. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step` Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}} Elemente vom Typ `number` unterstützen keine Formattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), um die Größe zu ändern. Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie es nötig ist, um eine dreistellige Zahl einzugeben, können wir unser HTML so ändern, dass ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hinzugefügt wird und unseren Platzhalter verkürzen, da das Feld zu schmal für den bisher verwendeten Text ist:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem `id` Selektor `#number` zu verkleinern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorschlagswerte anbieten

Sie können eine Liste von Standardoptionen angeben, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, welches wiederum ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält. Jeder `option` Wert ist der entsprechende vorgeschlagene Wert für die Zahleneingabe.

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

Wir haben bereits eine Reihe von Validierungsfunktionen für `number` Eingaben erwähnt, aber lassen Sie uns diese nun überprüfen:

- `<input type="number">` Elemente machen automatisch jeden Eintrag ungültig, der keine Zahl ist (oder leer ist, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um einen leeren Eintrag ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung einiger CSS, um je nach dem `input` Wert gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten abzusenden — z.B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert — und sehen Sie, wie sich die Fehlermeldungen des Browsers mit den verschiedenen Optionen unterscheiden.

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudo-Klassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}} Element anzuzeigen, als visuellen Indikator für die Gültigkeit.

Wir fügen es zu einem separaten `<span>` Element für zusätzliche Flexibilität hinzu. Einige Browser zeigen generierten Inhalt nicht sehr effektiv auf einigen Typen von Formular-Eingaben an. (Lesen Sie zum Beispiel den Abschnitt über [`<input type="date">` Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Disaster kommen, wenn fehlerhaft formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind, usw.).

### Mustervalidierung

`<input type="number">` Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attributs, um eingegebene Werte an ein bestimmtes Regex-Muster anzupassen.

Die Begründung dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie können die minimale und maximale Anzahl an gültigen Ziffern mit den [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attributen beschränken (wie oben erklärt).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">` Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn die Spinbutton-Funktion kein wichtiger Bestandteil Ihrer Formularsteuerung ist, sollten Sie _nicht_ `type="number"` verwenden. Stattdessen sollten Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut verwenden, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht die Gefahr, dass Benutzer versehentlich eine Zahl erhöhen, wenn sie etwas anderes tun wollen. Darüber hinaus gibt es keine expliziten Feedbacks, wenn Benutzer versuchen, etwas anderes als eine Zahl einzugeben.

Überlegen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut zu nutzen, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Beispielsweise können Sie für ein Postleitzahlenfeld `autocomplete="postal-code"` setzen, um die Autovervollständigung zu aktivieren.

## Beispiele

Wir haben bereits erwähnt, dass die Inkrementgröße standardmäßig `1` ist, und Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut verwenden können, um Dezimalwerte zuzulassen. Schauen wir genauer hin.

Im folgenden Beispiel ist ein Formular zur Eingabe der Körpergröße des Benutzers. Es akzeptiert standardmäßig eine Größe in Metern, aber Sie können die entsprechende Schaltfläche drücken, um das Formular zu ändern, sodass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Größe in Metern akzeptiert Dezimalstellen bis zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel untersucht haben. Da wir eine Metergröße in Zentimetern akzeptieren wollen, haben wir den `step` Wert auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zoll-Eingaben zunächst mit `style="display: none;"` ausgeblendet, sodass Meter der Standard-Eingabetyp ist.

Nun zum CSS. Dies sieht sehr ähnlich zu der Validierungsstyling aus, die wir vorher gesehen haben; nichts Bemerkenswertes hier.

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

Und schließlich, das JavaScript:

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

Nachdem wir einige Variablen deklariert haben, wird ein Event-Listener zur Steuerung des Umschaltmechanismus zu der `button` hinzugefügt. Dies umfasst das Ändern der Button-`class` und {{HTMLElement("label")}}, sowie das Aktualisieren der Anzeige-Werte der beiden Eingabe-Sets beim Drücken der Button.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll hin und her konvertieren, was eine realistische Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer die Schaltfläche klickt, werden das `required` Attribut und der `value` der Eingabe, die wir verstecken, geleert. Dies soll sicherstellen, dass das Formular abgesendet werden kann, wenn beide Eingabesets nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht gemeint hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzusenden!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein {{jsxref("Number")}}, der eine Zahl repräsentiert, oder leer</td>
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
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
