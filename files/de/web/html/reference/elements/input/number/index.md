---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: c601bb5553d19f854792c78ab89624466ce2181d
---

{{HTMLElement("input")}}-Elemente des Typs **`number`** werden verwendet, um Benutzern die Eingabe einer Zahl zu ermöglichen. Sie beinhalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann entscheiden, Stepper-Pfeile bereitzustellen, die es dem Benutzer ermöglichen, den Wert mit der Maus oder durch Tippen mit einem Fingerspitzenklick zu erhöhen oder zu verringern.

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

In Browsern, die Eingaben des Typs `number` nicht unterstützen, wird ein `number`-Eingabefeld auf den Typ `text` zurückgesetzt.

## Wert

Eine Zahl, die den Wert der in das Eingabefeld eingegebenen Zahl darstellt. Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs einschließen, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Typen unterstützten Attributen unterstützen Eingaben des Typs `number` folgende Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden können. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale akzeptierte Wert für diese Eingabe. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des max-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimale akzeptierte Wert für diese Eingabe. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn für min ein Wert angegeben wird, der keine gültige Zahl ist, hat das Eingabefeld keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art von Daten veranschaulicht, anstatt einer erklärenden Nachricht. Der Text darf keine Wagenrücklaufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtungsgleichheit ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) aufweist, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Kontrollelementen für Bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Etiketten](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingabefelder mit dem ebenfalls angegebenen `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität festlegt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Zahl von Schritten vom Schrittbasiswert entfernt sind, sind gültig. Der Schrittbasiswert ist [`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn keiner angegeben ist.

Der Standard-Schrittwert für `number`-Eingaben ist `1`, was nur ganzzahlige Eingaben zulässt - es sei denn, die Schrittbasis ist keine ganze Zahl.

Ein Zeichenfolgewert von `any` bedeutet, dass kein Schritt gefordert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann die {{Glossary("user_agent", "Benutzer-Agent")}} auf den nächstgelegenen gültigen Wert runden und Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Nummereingaben

Der `number` Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Inkrementieren und Dekrementieren durch Spinbutton hilfreich für die Benutzererfahrung ist. Der `number` Eingabetyp ist nicht geeignet für Werte, die nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie z.B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie in Betracht ziehen, einen anderen Eingabetyp zu verwenden, wie [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit vereinfachen, wenn Sie die Benutzeroberfläche und die Logik für die Eingabe von Zahlen in ein Formular erstellen. Wenn Sie eine Nummerneingabe mit dem richtigen `type` Werte `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und normalerweise eine Reihe von Auf- und Ab-Tasten, um den Wert zu erhöhen und zu verringern.

> [!WARNING]
> Logischerweise sollten Sie keine anderen Zeichen als Zahlen in eine Nummerneingabe eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Fehler 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen an Ihrem HTML basteln, daher darf Ihre Seite _nicht_ die Client-seitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ auf der Serverseite jede Transaktion überprüfen, bei der der bereitgestellte Wert irgendwelche sicherheitsrelevanten Implikationen haben könnte.

Mobile Browser verbessern die Benutzererfahrung weiter, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine einfache Nummerneingabe

In ihrer grundlegendsten Form kann eine Nummerneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Nummerneingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, aber ansonsten ungültig ist. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (d.h. nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, welches Format die Eingabedaten haben sollen. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Etiketten für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das Format zu geben, das die Eingabe haben soll. Er wird innerhalb des Bearbeitungsfeldes angezeigt, wenn der `value` des Elements `""` ist. Sobald die Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number` Eingabe mit dem Platzhalter "Vielzahl von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Kontrolle der Schrittgröße

Standardmäßig steigen und fallen die bereitgestellten Auf- und Ab-Tasten für die Schrittzahl bei der Standardnummerneingabe um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut angeben, welches eine Zahl als Schrittgröße enthält. Unser obiges Beispiel enthält einen Platzhalter, der sagt, dass der Wert ein Vielfaches von 10 sein sollte, daher ergibt es Sinn, einen `step` Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Ab-Steppfeile den Wert jeweils um 10 erhöhen bzw. verringern und nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber diese wird als ungültig angesehen.

### Festlegen von minimalen und maximalen Werten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um einen minimalen und maximalen Wert festzulegen, den das Feld haben kann. Zum Beispiel, lassen Sie uns unserem Beispiel ein Minimum von `0` und ein Maximum von `100` geben:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Ab-Steppfeile es nicht zulassen, unter 0 oder über 100 zu gelangen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Erlauben von Dezimalwerten

Ein Problem mit Nummerneingaben ist, dass ihr Schrittwert standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie "1.1"), wird sie als ungültig angesehen. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie numerisch mit ganzen Zahlen gleichwertig sind. Wenn Sie Werte mit Dezimalstellen eingeben möchten, müssen Sie dies im `step` Wert reflektieren (z.B. `step="0.01"`, um Dezimalstellen auf zwei Dezimalstellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

In diesem Beispiel ist jeder Wert zwischen `0.0` und `10.0` zulässig, wobei Dezimalstellen auf zwei Stellen erlaubt sind. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step` Wert auf `"any"` setzen.

### Kontrolle der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Größeneinstellungen wie das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut. Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Elemente zu ändern.

Zum Beispiel, um die Breite der Eingabe anzupassen, damit sie nur so breit ist, wie es nötig ist, um eine dreistellige Zahl einzugeben, können wir unser HTML so ändern, dass es eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) enthält und unseren Platzhalter verkürzen, da das Feld für den bisher verwendeten Text zu schmal sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem `id` Selektor `#number` zu reduzieren:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht dann so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Anbieten von vorgeschlagenen Werten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben, das den [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das seinerseits ein {{HTMLElement("option")}}-Element pro Vorschlag enthält. Der `value` des jeweiligen `option` ist der entsprechende Vorschlagswert für das Eingabefeld.

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

Wir haben bereits eine Anzahl von Validierungsfunktionen der `number` Eingaben erwähnt, aber lassen Sie uns diese nun zusammenfassen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, außer wenn `required` angegeben ist).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Anzahl von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen und verwendet CSS, um bei gültigen und ungültigen Eingaben Icons anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten zu übermitteln – z.B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert – und sehen Sie, wie die Fehlermeldungen des Browsers sich mit den einzelnen Werten unterscheiden.

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Icon als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuelles Gültigkeitssignal.

Wir setzen es auf ein separates `<span>` Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt nicht sehr effektiv bei einigen Arten von Formulareingaben an. (Lesen Sie zum Beispiel den Abschnitt über die [`<input type="date">`-Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr Serverseitencode die empfangenen Daten nicht validiert, kann es zu einer Katastrophe kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs, um eingegebene Werte an ein bestimmtes Regex-Pattern anzupassen.

Der Grund dafür ist, dass Nummerneingaben nicht gültig sein werden, wenn sie etwas anderes als Zahlen enthalten, und Sie können die minimale und maximale Anzahl gültiger Ziffern mithilfe der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute einschränken (wie oben erläutert).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">` Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn der Spinbutton kein wichtiges Merkmal für Ihre Formularkontrolle ist, sollten Sie in Betracht ziehen, `type="number"` _nicht_ zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Bei `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, wenn sie versuchen, etwas anderes zu tun. Außerdem, wenn Benutzer versuchen, etwas einzugeben, was keine Zahl ist, gibt es kein explizites Feedback darüber, was sie falsch machen.

Berücksichtigen Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Beispielsweise können Sie für eine Postleitzahl das `autocomplete="postal-code"` setzen, um die Autovervollständigung zu aktivieren.

## Beispiele

Wir haben bereits erwähnt, dass der Standardwert für das Inkrement `1` ist und dass Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um dezimale Eingaben zuzulassen. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel ist ein Formular zur Eingabe der Körpergröße des Benutzers. Es akzeptiert standardmäßig eine Höhe in Metern, aber Sie können auf die entsprechende Taste klicken, um das Formular auf Fuß und Zoll umzustellen. Die Eingabe für die Höhe in Metern erlaubt Dezimalstellen bis auf zwei Nachkommastellen.

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

Sie werden feststellen, dass wir viele der Attribute verwenden, die wir früher im Artikel betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig betrachtet werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zunächst mit `style="display: none;"` ausgeblendet, damit Meter die Standard-Eingabeart bleibt.

Nun zum CSS. Es sieht sehr ähnlich aus wie das Validierungsstyling, das wir zuvor gesehen haben; hier gibt es nichts Besonders.

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

Nach der Deklaration einiger Variablen wird ein Eventlistener dem `button` hinzugefügt, um den Wechselmechanismus zu steuern. Dies beinhaltet das Ändern der `class` und {{HTMLElement("label")}} des Buttons sowie das Aktualisieren der Anzeigewerte der beiden Eingabesätze, wenn der Button gedrückt wird.

(Beachten Sie, dass wir keine Umwandlung zwischen Metern und Fuß/Zoll hier durchführen, die in einer realen Webanwendung wahrscheinlich implementiert wäre.)

> [!NOTE]
> Wenn der Benutzer auf die Schaltfläche klickt, werden das/die `required`-Attribut(e) der Eingabe(n), die wir ausblenden, entfernt und das/die `value`-Attribut(e) wird/werden geleert. Dies dient dazu, das Formular absenden zu können, wenn nicht beide Eingabesätze ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Würden Sie dies nicht tun, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzusenden!

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
         <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
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
