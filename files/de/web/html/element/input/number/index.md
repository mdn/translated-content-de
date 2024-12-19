---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um dem Benutzer die Eingabe einer Zahl zu ermöglichen. Sie beinhalten eine eingebaute Validierung, die nicht-numerische Eingaben ablehnt.

Der Browser kann eventuell Wippenpfeile bereitstellen, um dem Benutzer zu ermöglichen, den Wert mit der Maus oder per Tipp zu erhöhen und zu verringern.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

Bei Browsern, die Eingaben vom Typ `number` nicht unterstützen, wird eine `number`-Eingabe auf den Typ `text` zurückgesetzt.

## Wert

Eine Zahl, die den in das Eingabefeld eingegebenen Wert darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des List-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer als Vorschläge für diese Eingabe angeboten werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) inkompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen übersteigt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Bidirektionalitäts-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihre Formularerklärung zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft über JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit dem `readonly`-Attribut, das ebenfalls spezifiziert wurde.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die der Grundlage für das Schrittmaß ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, wenn keiner von diesen angegeben wurde) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Schrittmaß impliziert wird und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

Der Standard-Schrittwert für `number`-Eingaben ist `1`, wodurch nur Ganzzahlen eingegeben werden können—_es sei denn_, die Grundlage für das Schrittmaß ist keine Ganzzahl.

## Verwendung von Nummerneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Inkrementieren und Dekrementieren über Spinbutton nützlich für die Benutzerfreundlichkeit ist. Der `number`-Eingabetyp ist nicht geeignet für Werte, die nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie z.B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben ziehen Sie die Verwendung eines anderen Eingabetyps in Betracht, wie z.B. [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder eines anderen {{HTMLElement('input')}}-Typs mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihnen helfen, Ihre Arbeit beim Erstellen der Benutzeroberfläche und der Logik für die Eingabe von Zahlen in ein Formular zu vereinfachen. Wenn Sie eine Nummerneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Set von Aufwärts- und Abwärtsschaltflächen, um den Wert zu erhöhen beziehungsweise zu verringern.

> [!WARNING]
> Logisch sollten Sie keine Zeichen in ein Nummerneingabefeld eingeben können, die keine Zahlen sind. Manche Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann Ihr HTML hinter den Kulissen ändern, daher _darf_ Ihre Seite _nicht_ die Validierung auf der Clientseite zu Sicherheitszwecken verwenden. Sie _müssen_ serverseitig jede Transaktion validieren, bei der der bereitgestellte Wert Sicherheitsimplikationen irgendeiner Art haben könnte.

Mobile Browser helfen zusätzlich durch die Anzeige einer speziellen Tastatur, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahlen-Eingabe

In seiner grundlegendsten Form kann eine Nummerneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Nummerneingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, ist aber in anderen Fällen ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (d.h., nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextabhängigen Hinweis zu bieten, welche Form die Eingabedaten haben sollten. Das kann besonders wichtig sein, wenn das Seitendesign keine Beschreibungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format zu geben, das die Eingabe haben sollte `value`. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir ein `number`-Eingabefeld mit dem Platzhalter "Multiple of 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie die Inhalte des Bearbeitungsfeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schrittgröße steuern

Standardmäßig werden die Auf- und Ab-Tasten, die Ihnen zum Erhöhen und Verringern der Zahl bereitgestellt werden, den Wert um 1 erhöhen bzw. verringern. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut bereitstellen, das als seinen Wert eine Zahl angibt, die die Schrittmenge spezifiziert. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, daher macht es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel werden Sie feststellen, dass die Auf- und Ab-Schritte-Tasten den Wert jeweils um 10 erhöhen und verringern, nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Mindestens- und Höchstwerte angeben

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um einen Mindest- und Höchstwert anzugeben, den das Feld haben kann. Zum Beispiel geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Ab-Schritt-Schaltflächen es Ihnen nicht erlauben, unter 0 oder über 100 zu gehen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte erlauben

Ein Problem bei Nummerneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben (wie "1,0"), wird sie als ungültig angesehen. Wenn Sie einen Wert eingeben möchten, der Dezimalzahlen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z.B. `step="0.01"`, um Dezimalstellen auf zwei Dezimalstellen zu erlauben). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` erlaubt, mit Dezimalstellen bis zu zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" ist es nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingabegröße steuern

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Form-Attributgrößen wie [`size`](/de/docs/Web/HTML/Element/input#size). Um die Größe dieser Steuerungen zu ändern, müssen Sie auf [CSS](/de/docs/Web/CSS) zurückgreifen.

Zum Beispiel, um die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie nötig, um eine dreistellige Zahl einzugeben, können wir unser HTML anpassen, indem wir eine [`id`](/de/docs/Web/HTML/Global_attributes/id) hinzufügen und unseren Platzhalter kürzen, da das Feld zu schmal für den bisher verwendeten Text sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem `id`-Selektor `#number` zu verkleinern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorschlagswerte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Zahlen-Eingabefeld.

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

Wir haben bereits einige Validierungsfunktionen von `number`-Eingaben erwähnt, aber lassen Sie uns sie nun überprüfen:

- `<input type="number">`-Elemente invalidieren automatisch jede Eingabe, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe als ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt sein.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf einen bestimmten Satz von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von etwas CSS, um gültige und ungültige Symbole anzuzeigen, abhängig vom `input`-Wert:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten einzugeben — z.B. keinen Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert — und sehen Sie, wie die Fehlermeldungen des Browsers bei verschiedenen Werten unterscheiden.

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuellen Indikator für die Gültigkeit.

Wir setzen es auf ein separates `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt nicht sehr effektiv auf einigen Typen von Formulareingaben an. (Lesen Sie zum Beispiel den Abschnitt über die [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach, dass jemand Anpassungen am HTML vornimmt, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten eingereicht werden (oder Daten, die zu groß sind, vom falschen Typ und so weiter).

### Mustervalidierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs, um eingegebene Werte einem bestimmten Regex-Muster anzupassen.

Der Grund dafür ist, dass Nummerneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie können die minimale und maximale Anzahl gültiger Ziffern mithilfe der Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) beschränken (wie oben erläutert).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn spinbutton kein wichtiges Merkmal für Ihre Formularsteuerung ist, ziehen Sie in Betracht, _nicht_ `type="number"` zu verwenden. Stattdessen verwenden Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl erhöhen, wenn sie versuchen, etwas anderes zu tun. Zudem gibt es, wenn Nutzer versuchen, etwas einzugeben, das keine Zahl ist, kein explizites Feedback darüber, was sie falsch machen.

Überlegen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut zu verwenden, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Zum Beispiel, um Autofill für ein Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass die Inkrementgröße standardmäßig `1` ist, und Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um dezimale Eingaben zu erlauben. Schauen wir uns das genauer an.

Im folgenden Beispiel ist ein Formular zum Eingeben der Körpergröße des Benutzers. Es akzeptiert standardmäßig eine Größe in Metern, aber Sie können den entsprechenden Button klicken, um das Formular auf Fuß und Zoll umzustellen. Die Eingabe für die Größe in Metern erlaubt Dezimalstellen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel behandelt haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben anfänglich mit `style="display: none;"` versteckt, sodass Meter der Standards-Eingabetyp ist.

Nun zum CSS. Es sieht sehr ähnlich wie das Validierungsstyling aus, das wir zuvor gesehen haben; nichts Bemerkenswertes hier.

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

Nach der Deklaration einiger Variablen wird ein Eventlistener zum `button` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies umfasst das Wechseln der `class` und des {{HTMLElement("label")}} des Buttons sowie das Aktualisieren der Anzeige der beiden Sets von Eingaben, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Meter und Fuß/Zoll konvertieren, was eine echte Webanwendung wohl tun würde.)

> [!NOTE]
> Wenn der Benutzer den Button klickt, werden die `required`-Attribute von den Eingaben entfernt, die wir verstecken, und die `value`-Attribute werden geleert. Dies geschieht, damit das Formular submitfähig ist, ohne dass beide Eingabesets ausgefüllt werden müssen. Es stellt auch sicher, dass das Formular keine Daten sendet, die der Benutzer nicht eingegeben hat.
>
> Wenn Sie das nicht tun würden, müssten Sie sowohl Füße/Zoll **als auch** Meter ausfüllen, um das Formular zu übermitteln!

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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
