---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um den Benutzer eine Zahl eingeben zu lassen. Sie beinhalten eine eingebaute Validierung, die die Eingabe nicht-numerischer Werte ablehnt.

Der Browser kann optionale Schrittpfeile bereitstellen, mit denen der Benutzer den Wert mit der Maus oder durch Antippen mit einem Finger erhöhen und verringern kann.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

In Browsern, die keine Eingaben vom Typ `number` unterstützen, fällt ein `number`-Eingabefeld auf den Typ `text` zurück.

## Wert

Eine Zahl, die den in die Eingabe eingegebenen Zahlenwert darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, wie zum Beispiel:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Neben den allgemein von allen {{HTMLElement("input")}}-Typen unterstützten Attributen unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximal zu akzeptierende Wert für diese Eingabe. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen übersteigt, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen maximalen Wert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimal zu akzeptierende Wert für diese Eingabe. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen minimalen Wert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp veranschaulicht, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Zeichen des Unicode-Bidirektionalitätsalgorithmus verwenden, um die Richtung innerhalb des Platzhalters außer Kraft zu setzen; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wann immer möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>` labels](/de/docs/Web/HTML/Element/input#labels).

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die der Grundlage für Schritte ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, und einem entsprechendem Standardwert, falls keiner der beiden angegeben ist) entsprechen, sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Schritte impliziert sind und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei er Zahlen in positiver Richtung bevorzugt, wenn zwei gleich nahe Optionen verfügbar sind.

Der Standardschrittwert für `number`-Eingaben ist `1`, das heißt, es können nur ganze Zahlen eingegeben werden—_es sei denn_, die Basis für die Schritte ist keine ganze Zahl.

## Verwendung von number-Eingaben

Der Eingabetyp `number` sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Erhöhen und Verringern der Schaltflächen zur Verbesserung der Benutzererfahrung beiträgt. Der Eingabetyp `number` ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht numerische Eingaben ziehen Sie bitte einen anderen Eingabetyp in Betracht, z.B. [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihnen die Arbeit erleichtern, wenn Sie die Benutzeroberfläche und Logik für die Eingabe von Zahlen in ein Formular erstellen. Wenn Sie eine Nummerneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Paar Auf- und Abwärts-Schaltflächen, um den Wert zu erhöhen und zu verringern.

> [!WARNING]
> Logischerweise sollten Sie in einer Nummerneingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumspielen, daher _darf_ Ihre Seite keine einfache clientseitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ auf der Serverseite jede Transaktion überprüfen, bei der der bereitgestellte Wert Sicherheitsimplikationen jeglicher Art haben könnte.

Mobile Browser helfen weiter bei der Benutzererfahrung, indem sie eine spezielle Tastatur anzeigen, die besser geeignet ist, um Nummern einzugeben, wenn der Benutzer versucht, einen Wert einzugeben.

### Einfache Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_simple_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig betrachtet, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, andernfalls ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange es sich um eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) handelt (das heißt, nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jede {{HTMLElement("input")}}-Eingabe bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format zu geben, das die Eingabe `value` annehmen sollte. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint der Platzhalter erneut.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfaches von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds verändern.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Schrittgröße steuern

Standardmäßig werden die auf und abwärts gewechselten Schaltflächen zur Erhöhung und Verringerung der Nummer den Wert um 1 ändern. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut angeben, das als Wert eine Zahl hat, die die Schrittgröße angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, sodass es sinnvoll ist, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel werden die auf und abwärts wechselnden Schaltflächen den Wert um jeweils 10 erhöhen und verringern, nicht um 1. Sie können aber manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Mindest- und Höchstwerte festlegen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um einen Mindest- und Höchstwert anzugeben, den das Feld haben kann. Beispielsweise geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version werden die Schritte-Pfeiltasten nicht unter `0` oder über `100` hinausgehen. Sie können weiterhin manuell eine Zahl eingeben, die außerhalb dieser Grenzen liegt, aber sie wird als ungültig betrachtet.

### Dezimalwerte zulassen

Ein Problem bei Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalpunkt einzugeben (wie „1.0“), wird sie als ungültig betrachtet. Wenn Sie einen Wert eingeben möchten, der Dezimalstellen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"`, um Dezimalzahlen auf zwei Dezimalstellen zuzulassen). Hier ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

In diesem Beispiel ist jeder Wert zwischen `0.0` und `10.0` zulässig, mit Dezimalstellen auf zwei Stellen. Zum Beispiel ist „9.52“ gültig, aber „9.521“ ist es nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingabegröße steuern

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Wenn Sie beispielsweise die Breite der Eingabe so anpassen möchten, dass sie nur so breit ist, dass eine dreistellige Zahl eingegeben werden kann, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Global_attributes/id) einzuschließen, und unseren Platzhalter verkürzen, da das Feld für den von uns bisher verwendeten Text zu schmal sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem ID-Selektor `#number` zu verringern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht dann so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste mit Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, das den Wert der [`id`](/de/docs/Web/HTML/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, der wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagener Wert enthält. Jedes `option`-Elemente `value` ist der entsprechende vorgeschlagene Wert für das Zahlen-Eingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen von `number`-Eingaben erwähnt, aber lassen Sie uns diese nun noch einmal durchgehen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben), ungültig.
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge an Schritten einzuschränken (z. B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen einzuschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung einiger CSS, um je nach dem Wert der `input`-Eingabe gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten zu übermitteln — zum Beispiel ohne Wert, einem Wert unter 0 oder über 100, einem Wert, der kein Vielfaches von 10 ist, oder einem nicht-numerischen Wert — und sehen Sie, wie sich die vom Browser gelieferten Fehlermeldungen unterschiedlicher Werte unterscheiden.

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudo-Klassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuellen Indikator der Gültigkeit.

Wir haben es auf ein separates `<span>`-Element gesetzt, um mehr Flexibilität zu erhalten. Einige Browser zeigen generierten Inhalt auf einigen Arten von Formulareingaben nicht sehr effektiv an. (Lesen Sie zum Beispiel den Abschnitt zur [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation)).

> [!WARNING]
> Die HTML-Formularvalidierung ist _nicht_ ein Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten eingereicht werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs, um eingegebene Werte einem bestimmten regulären Ausdrucksmuster anzupassen.

Der Grund dafür ist, dass Zahleneingaben ungültig sind, wenn sie außer Zahlen etwas enthalten, und Sie die Mindest- und Höchstzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen (wie oben erklärt) einschränken können.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn das Spinbutton keine wichtige Funktion für Ihr Formularelement ist, ziehen Sie in Betracht, _nicht_ `type="number"` zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen begrenzt. Bei `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl erhöhen, wenn sie etwas anderes tun wollen. Wenn Benutzer versuchen, etwas einzugeben, das keine Zahl ist, gibt es kein direktes Feedback darüber, was sie falsch machen.

Erwägen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut zu verwenden, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Um beispielsweise die automatische Befüllung eines PLZ-Feldes zu aktivieren, setzen Sie das Attribut auf `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass der Standardinkrement `1` ist und Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um Dezimalwerte zuzulassen. Schauen wir uns das etwas genauer an.

Im folgenden Beispiel befindet sich ein Formular zur Eingabe der Körpergröße des Benutzers. Es ist standardmäßig auf die Eingabe einer Größe in Metern ausgelegt, aber Sie können den entsprechenden Button klicken, um das Formular auf die Eingabe in Fuß und Zoll umzuschalten. Die Eingabe für die Höhe in Metern erlaubt Dezimalstellen bis zu zwei Stellen.

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

Sie sehen, dass wir viele der Attribute verwenden, die wir im Artikel zuvor betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zunächst mit `style="display: none;"` versteckt, sodass Meter der Standard-Eingabetyp ist.

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

Nach der Deklaration einiger Variablen wird ein Ereignislistener zu dem `button` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies ist ziemlich einfach und beinhaltet hauptsächlich das Ändern der `class` und des {{HTMLElement("label")}} des Buttons sowie das Aktualisieren der Anzeigewerte der beiden Eingabemengen, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll umrechnen, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer auf den Button klickt, werden die `required`-Attribute der versteckten Eingaben entfernt und die `value`-Attribute geleert. So kann das Formular eingereicht werden, auch wenn beide Eingabesätze nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten einreicht, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun würden, müssten sowohl Fuß/Zoll als auch Meter ausgefüllt werden, um das Formular abzusenden!

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

- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Artikel: Warum Gov.UK den Eingabetyp für Zahlen geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
