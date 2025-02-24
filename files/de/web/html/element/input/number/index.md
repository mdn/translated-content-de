---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`number`** werden verwendet, um dem Benutzer das Eingeben einer Zahl zu ermöglichen. Sie enthalten eine integrierte Validierung, um nicht numerische Eingaben abzulehnen.

Der Browser kann optional Schrittpfeile bereitstellen, um dem Benutzer zu ermöglichen, den Wert mit der Maus zu erhöhen oder zu verringern oder durch Antippen mit einem Finger.

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

Eine Zahl, die den in die Eingabe eingegebenen Wert darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einschließen, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den häufig von allen {{HTMLElement("input")}}-Typen unterstützten Attributen unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte aus der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des max-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für min angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, statt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, jedoch der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Label](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code direkt durch Festlegen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an der sich der Wert orientieren muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Inkrementieren ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) ansonsten und einem geeigneten Standardwert, wenn keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Inkrement impliziert wird und jeder Wert zulässig ist (unter Ausschluss anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, kann die {{Glossary("user_agent", "Benutzer-Agent")}} die Rundung auf den nächstgelegenen gültigen Wert vornehmen, wobei Zahlen in positiver Richtung bevorzugt werden, wenn zwei gleich nahe Optionen bestehen.

Der Standard-Schritwert für `number`-Eingaben ist `1`, sodass nur ganze Zahlen eingegeben werden können, _es sei denn_, die Grundlage für das Inkrementieren ist keine ganze Zahl.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn eine Spinbutton-Inkrementierung und -Dinkremente hilfreich sind für die Benutzererfahrung. Der `number`-Eingabetyp ist nicht geeignet für Werte, die nur aus Zahlen bestehen, aber nicht im eigentlichen Sinne eine Zahl sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, wie [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik für die Eingabe von Zahlen in ein Formular vereinfachen. Wenn Sie eine Zahleingabe mit dem richtigen `type`-Wert festlegen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, sowie normalerweise eine Reihe von Auf- und Ab-Buttons, um den Wert zu erhöhen oder zu verringern.

> [!WARNING]
> Logischerweise sollte es nicht möglich sein, andere Zeichen als Zahlen in eine Zahleingabe einzugeben. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann mit Ihrem HTML im Hintergrund experimentieren, daher _darf_ Ihre Website keine clientseitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ auf der Serverseite jede Transaktion überprüfen, bei der der bereitgestellte Wert Sicherheitsimplikationen jeglicher Art haben könnte.

Mobile Browser helfen weiter bei der Benutzererfahrung, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahleingabe

In ihrer grundlegendsten Form kann eine Zahleingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, ist jedoch ansonsten ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig betrachtet, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommanummer](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, in welcher Form die Eingabedaten erfolgen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format der Eingabe zu geben `value`. Er wird innerhalb des Eingabefelds angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfache von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie die Inhalte des Eingabefelds manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Kontrolle der Schrittgröße

Standardmäßig erhöhen und verringern die bereitgestellten Auf- und Ab-Pfeile den Wert um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut angeben, dessen Wert eine Zahl ist, die die Schrittweite angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Mehrfaches von 10 sein sollte, daher ergibt es Sinn, einen `step`-Wert von `10` zu setzen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel werden die Auf- und Ab-Pfeile den Wert um jeweils 10 ändern, nicht um 1. Sie können weiterhin manuell eine Zahl eingeben, die kein Mehrfaches von 10 ist, aber sie wird als ungültig angesehen.

### Festlegung minimaler und maximaler Werte

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um einen minimalen und maximalen Wert festzulegen, den das Feld haben kann. Zum Beispiel geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Ab-Schritt-Buttons Sie nicht unter 0 oder über 100 gehen lassen. Sie können dennoch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem mit Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 beträgt. Wenn Sie versuchen, eine Zahl mit einem Dezimalpunkt einzugeben (wie "1.0"), wird sie als ungültig angesehen. Wenn Sie einen Wert eingeben möchten, der Dezimalstellen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"`, um Dezimalzahlen auf zwei Dezimalstellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` zulässt, mit Dezimalstellen bis zu zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" ist nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingabegröße kontrollieren

{{HTMLElement("input")}}-Elemente des Typs `number` unterstützen keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Um zum Beispiel die Breite der Eingabe nur so breit zu machen, dass eine dreistellige Zahl eingegeben werden kann, können wir unser HTML ändern, um ein [`id`](/de/docs/Web/HTML/Global_attributes/id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld zu schmal für den Text sein wird, den wir bisher verwendet haben:

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

Wir haben bereits einige Validierungsfunktionen von `number`-Eingaben erwähnt, aber lassen Sie uns diese noch einmal zusammenfassen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Schrittzahl zu beschränken (z. B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen und verwendet auch etwas CSS, um gültige und ungültige Symbole anzuzeigen, abhängig vom `input`-Wert:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten einzugeben – z. B. keinem Wert; einem Wert unter 0 oder über 100; einem Wert, der kein Vielfaches von 10 ist; oder einem nicht numerischen Wert – und sehen Sie, wie die Fehlermeldungen des Browsers sich mit den verschiedenen unterscheiden.

Das auf dieses Beispiel angewendete CSS sieht folgendermaßen aus:

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudo-Klassen, um ein entsprechendes gültiges oder ungültiges Icon als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuelle Anzeige der Gültigkeit.

Wir setzen es auf ein separates `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt nicht sehr effektiv auf einigen Arten von Formulareingaben an. (Lesen Sie zum Beispiel den Abschnitt zur [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach, jemandem Anpassungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben, usw.).

### Mustervalidierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs, um eingegebene Werte einem bestimmten Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie können die minimale und maximale Anzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen beschränken (wie oben erklärt).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn der Spinbutton keine wichtige Funktion für Ihre Formularkontrolle ist, sollten Sie überlegen, `type="number"` nicht zu verwenden. Stattdessen verwenden Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, wenn sie versuchen, etwas anderes zu tun. Zusätzlich gibt es kein explizites Feedback darüber, was der Benutzer falsch macht, wenn er versucht, etwas anderes als eine Zahl einzugeben.

Überlegen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut zu verwenden, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlerwahrscheinlichkeit auszufüllen. Zum Beispiel ist das automatische Ausfüllen eines Postleitzahlenfelds mit `autocomplete="postal-code"` möglich.

## Beispiele

Wir haben bereits besprochen, dass das Inkrement standardmäßig `1` ist und Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um Dezimalzahleingaben zuzulassen. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel befindet sich ein Formular zur Eingabe der Körpergröße des Benutzers. Es akzeptiert standardmäßig eine Eingabe in Metern, Sie können jedoch auf die entsprechende Taste klicken, um das Formular so zu ändern, dass es Fuß und Zoll akzeptiert. Die Eingabe für die Höhe in Metern akzeptiert Dezimalstellen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir im Artikel bereits behandelt haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zoll-Eingaben zunächst mit `style="display: none;"` ausgeblendet, sodass Meter die Standard-Eingabemöglichkeit ist.

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

Nachdem wir einige Variablen deklariert haben, wird ein Event-Listener zum `button` hinzugefügt, um den Umschaltmechanismus zu kontrollieren. Dies beinhaltet das Ändern der `class` und {{HTMLElement("label")}} des Buttons sowie das Aktualisieren der Anzeige der beiden Eingabesätze, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier keinen hin- und hergehenden Umrechnungsmechanismus zwischen Metern und Fuß/Zoll implementieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Knopf drückt, entfernen wir das `required`-Attribut von den Eingaben, die wir ausblenden, und leeren die `value`-Attribute. Dadurch kann das Formular abgeschickt werden, wenn beide Eingabesätze nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten absendet, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **und** Meter ausfüllen, um das Formular abzuschicken!

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>Methode</strong></td>
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

- [HTML Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
