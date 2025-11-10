---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um dem Benutzer die Eingabe einer Zahl zu ermöglichen. Sie bieten integrierte Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann optional Steuerelemente bereitstellen, mit denen der Benutzer den Wert mit der Maus oder per Fingertipp erhöhen oder verringern kann.

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

In Browsern, die keine Eingaben vom Typ `number` unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den Wert der in das Eingabefeld eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte zur Benutzerwahl für diese Eingabe an. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der maximal akzeptierte Wert für diese Eingabe. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Leitfäden/Constraint_validation). Ist der Wert des max-Attributs keine Zahl, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimal akzeptierte Wert für diese Eingabe. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements darunter liegt, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Leitfäden/Constraint_validation). Wenn für min ein Wert angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist ein Text, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (LTR oder RTL) hat, aber der Placeholder in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-bidirectional-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Placeholders zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es nach Möglichkeit, das `placeholder`-Attribut zu verwenden. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinerlei Auswirkung auf Eingaben mit dem `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert angepasst werden muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, falls keiner angegeben ist.

Der Standard-Schrittwert für Eingaben vom Typ `number` ist `1`, wobei nur ganze Zahlen eingegeben werden dürfen—_es sei denn,_ die Schrittbasis ist keine ganze Zahl.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert zulässig ist (abgesehen von anderen Einschränkungen, wie etwa [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nah liegende Optionen gibt.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Inkrementieren und Dekrementieren mit Spinbuttons zur Verbesserung der Benutzererfahrung beiträgt. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zwar nur aus Zahlen bestehen, aber im eigentlichen Sinne keine Zahlen sind, wie beispielsweise Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Erwägung ziehen, wie etwa [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihnen helfen, die Arbeit beim Erstellen der Benutzeroberfläche und der Logik für die Eingabe von Zahlen in ein Formular zu vereinfachen. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und üblicherweise eine Reihe von Auf- und Ab-Buttons, um den Wert zu erhöhen oder zu verringern.

> [!WARNING]
> Logischerweise sollten Sie keine anderen Zeichen als Zahlen in ein Zahleingabefeld eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumspielen, daher _darf_ Ihre Seite keine clientseitige Validierung zu Sicherheitszwecken verwenden. Sie _müssen_ serverseitig alle Transaktionen überprüfen, bei denen der bereitgestellte Wert sicherheitsrelevante Auswirkungen jeglicher Art haben könnte.

Mobile Browser verbessern die Benutzererfahrung weiter, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine einfache Zahleneingabe

In ihrer einfachsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, anderweitig jedoch als ungültig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (d.h. weder [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) noch [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen Kontext-Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Bezeichnungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Placeholders** ins Spiel. Ein Placeholder ist ein Wert, der meistens verwendet wird, um einen Hinweis auf das zu erwartende Format der Eingabe zu geben `value`. Er wird in der Bearbeitungsbox angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Placeholder; wenn das Feld geleert wird, erscheint der Placeholder wieder.

Hier haben wir eine `number`-Eingabe mit dem Placeholder "Mehrfach von 10". Beachten Sie, wie der Placeholder verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schritteinstellung steuern

Standardmäßig erhöhen und verringern die für Sie bereitgestellten Auf- und Ab-Buttons den Wert um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut angeben, das einen Wert als Betrag der Schritte akzeptiert. Unser obiges Beispiel enthält einen Placeholder, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, deshalb macht es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Schrittpfeile den Wert jedes Mal um 10 erhöhen und verringern, nicht um 1. Sie können weiterhin manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Minimale und maximale Werte angeben

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um einen minimalen und maximalen Wert anzugeben, den das Feld haben kann. Zum Beispiel geben wir in unserem Beispiel ein Minimum von `0` und ein Maximum von `100` an:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Ab-Schritt-Buttons Ihnen nicht erlauben, unter 0 oder über 100 zu gehen. Sie können weiterhin manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem bei Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, die keine ganze Zahl ist (wie "1,1"), wird sie als ungültig angesehen. Beachten Sie, dass Werte wie "1,0" als gültig angesehen werden, da sie numerisch äquivalent zu ganzen Zahlen sind. Wenn Sie Werte mit Bruchteilen eingeben möchten, müssen Sie dies im `step`-Wert reflektieren (z. B. `step="0.01"`, um Dezimalzahlen bis zwei Dezimalstellen zuzulassen). Hier ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel einen beliebigen Wert zwischen `0.0` und `10.0` zulässt, mit Dezimalstellen bis zu zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" ist es nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingabegröße steuern

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Attributgrößen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Um zum Beispiel die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie es nötig ist, um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hinzuzufügen und unseren Placeholder zu kürzen, da das Feld für den bisher verwendeten Text zu schmal ist:

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

### Vorgeschlagene Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Jeder `option`-`value` ist der entsprechende vorgeschlagene Wert für das Zahlen-Eingabefeld.

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

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, es sei denn, `required` ist spezifiziert).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Anders ausgedrückt, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel enthält alle oben genannten Merkmale und verwendet etwas CSS, um gültige und ungültige Symbole je nach `input`-Wert anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten einzusenden — z. B. ohne Wert, mit einem Wert unter 0 oder über 100, mit einem Wert, der kein Vielfaches von 10 ist, oder einem nicht-numerischen Wert — und sehen Sie, wie sich die Fehlermeldungen des Browsers je nach Fehler unterscheiden.

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

Wir platzieren es auf einem separaten `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt auf bestimmten Formulareingaben nicht sehr effektiv an. (Lesen Sie zum Beispiel den Abschnitt über die [`<input type="date">`-Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe drohen, wenn falsch formatierte Daten eingereicht werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Pattern-Validierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs, um eingegebene Werte an ein spezifisches Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attributen einschränken können (wie oben erläutert).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn der Spinbutton keine wichtige Funktion für Ihr Formularelement darstellt, sollten Sie _erwägen, `type="number"` nicht zu verwenden_. Stattdessen sollten Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden, das die Zeichen auf Zahlen und zugehörige Zeichen einschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl erhöhen, während sie versuchen, etwas anderes zu tun. Darüber hinaus gibt es kein explizites Feedback darüber, was Benutzer falsch machen, wenn sie versuchen, etwas anderes als eine Zahl einzugeben.

Berücksichtigen Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Um beispielsweise die automatische Vervollständigung bei einem Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass das Inkrement standardmäßig `1` ist, und Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um Dezimal-Eingaben zu ermöglichen. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel ist ein Formular zur Eingabe der Körpergröße des Benutzers vorhanden. Es ist standardmäßig auf die Eingabe einer Körpergröße in Metern eingestellt, aber Sie können auf die entsprechende Schaltfläche klicken, um das Formular so zu ändern, dass es Fuß und Zoll akzeptiert. Die Eingabe für die Körpergröße in Metern akzeptiert Dezimalstellen bis zu zwei Nachkommastellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir früher im Artikel behandelt haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Placeholder für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zu Beginn mit `style="display: none;"` versteckt, sodass Meter die Standard-Eingabeart ist.

Nun zum CSS. Dies sieht sehr ähnlich aus wie die Validierungsstile, die wir zuvor gesehen haben; nichts Bemerkenswertes hier.

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

Nachdem wir einige Variablen deklariert haben, wird ein Ereignislistener zu der `button`-Steuerung hinzugefügt. Dies beinhaltet das Ändern der `class` und des {{HTMLElement("label")}} der Schaltfläche sowie das Aktualisieren der Anzeige der beiden Eingabemengen, wenn die Schaltfläche gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll umrechnen, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer auf die Schaltfläche klickt, werden die `required`-Attribute der Felder entfernt, die wir verstecken, und die `value`-Attribute geleert. Dies dient dazu, das Formular absenden zu können, wenn beide Eingabegruppen nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
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

- [HTML-Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
