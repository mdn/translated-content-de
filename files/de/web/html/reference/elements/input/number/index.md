---
title: '`<input type="number">` HTML-Attributwert'
short-title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um Benutzern die Eingabe einer Zahl zu ermöglichen. Sie beinhalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann optionale Schrittverstell-Pfeile bereitstellen, um dem Benutzer zu ermöglichen, den Wert mit der Maus oder durch Tippen mit einem Finger zu erhöhen und zu verringern.

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

In Browsern, die Eingaben des Typs `number` nicht unterstützen, wird eine `number` Eingabe auf den Typ `text` zurückgesetzt.

## Wert

Eine Zahl, die den eingegebenen Wert in das Eingabefeld darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attributs angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemein unterstützten Attributen aller {{HTMLElement("input")}} Typen, unterstützen Eingaben des Typs `number` diese Attribute.

### `list`

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte zur Vorschlag an den Benutzer für diese Eingabe. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der maximale akzeptable Wert für diese Eingabe. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max` Attributs keine Zahl ist, dann hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des `min` Attributs sein.

### `min`

Der minimale akzeptable Wert für diese Eingabe. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufer oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter aber in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Formatierungszeichen für den bidirektionalen Algorithmus verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitbar ist. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gehalten werden muss, oder der spezielle Wert `any`, der unten beschrieben ist. Nur Werte, die eine ganze Zahl von Schritten vom Schrittgrund sind, sind gültig. Der Schrittgrund ist [`min`](#min), wenn angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn keines von beiden bereitgestellt wird.

Der Standard-Schrittwert für `number` Eingaben ist `1`, was nur ganze Zahlen ermöglicht—_es sei denn_, der Schrittgrund ist keine ganze Zahl.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (außer andere Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Zahleneingaben

Der `number` Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Erhöhen und Verringern durch Spinbutton zur Benutzererfahrung beitragen. Der `number` Eingabetyp ist nicht geeignet für Werte, die nur aus Zahlen bestehen, aber streng genommen keine Zahl sind, wie z. B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Erwägung ziehen, wie [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}} Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">` Elemente können Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik für die Eingabe von Zahlen in ein Formular erleichtern. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert, `number`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Satz von Aufwärts- und Abwärtstasten, um den Wert zu erhöhen und zu verringern.

> [!WARNING]
> Logisch sollten Sie innerhalb einer Zahleneingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML herumtüfteln, daher sollte Ihre Seite nicht für Sicherheitszwecke auf client-seitige Validierung zurückgreifen. Sie müssen auf der Serverseite jede Transaktion überprüfen, bei der der bereitgestellte Wert Sicherheitsimplikationen jeglicher Art haben könnte.

Mobile Browser unterstützen die Benutzererfahrung weiter, indem sie eine spezielle Tastatur anzeigen, die besser zum Eingeben von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Einfache Zahleneingabe

In der grundlegendsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig betrachtet, wenn sie leer oder wenn eine einzelne Zahl eingegeben wird, jedoch nicht anderweitig. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwendet wird, wird die Eingabe nicht mehr als gültig betrachtet, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Fließkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, weder [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) noch [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis darauf zu geben, in welchem Format die Eingabe erfolgen soll `value`. Er wird innerhalb des Bearbeitungsfeldes angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number` Eingabe mit dem Platzhalter "Vielfaches von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Kontrolle der Schrittgröße

Standardmäßig erhöhen und verringern die bereitgestellten Auf- und Abwärtstasten den Wert standardmäßig um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut bereitstellen, das als seinen Wert eine Zahl hat, welche die Schrittweite angibt. Unser obiges Beispiel enthält einen Platzhalter, der sagt, der Wert sollte ein Vielfaches von 10 sein. Daher macht es Sinn, einen `step` Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Auf- und Abwärtstasten den Wert jedes Mal um 10 und nicht um 1 erhöhen und verringern. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Spezifizieren von Minimal- und Maximalwerten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um einen Minimal- und Maximalwert zu spezifizieren, den das Feld haben kann. Lassen Sie uns unserem Beispiel ein Minimum von `0` und ein Maximum von `100` geben:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Auf- und Abwärtsschritttasten nicht erlauben, dass das Minimum unter 0 oder das Maximum über 100 hinausgeht. Sie können trotzdem manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig betrachtet.

### Dezimalwerte zulassen

Ein Problem bei Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie "1.1"), wird sie als ungültig betrachtet. Beachten Sie, dass Werte wie „1.0“ als gültig angesehen werden, da sie numerisch äquivalent zu ganzen Zahlen sind. Wenn Sie Werte mit Bruchteilen eingeben möchten, müssen Sie dies im `step` Wert widerspiegeln (z.B. `step="0.01"` um Dezimale auf zwei Dezimalstellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` zulässt, mit Dezimalstellen bis zu zwei Stellen. Zum Beispiel ist „9.52“ gültig, aber „9.521“ ist es nicht.

Wenn Sie willkürliche Dezimalwerte zulassen möchten, können Sie den `step` Wert auf `"any"` setzen.

### Kontrolle der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Attributen zur Formatgrößenanpassung wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur so breit ist, dass eine dreistellige Zahl eingegeben werden kann, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld zu schmal für den bisher verwendeten Text sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem `id` Selektor `#number` zu verengen:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorgeschlagene Werte anbieten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut angeben, das als seinen Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält. Jeder `option`s `value` ist der entsprechende vorgeschlagene Wert für das Zahlen-Eingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen von `number` Eingaben erwähnt, aber lassen Sie uns diese nun überprüfen:

- `<input type="number">`-Elemente invalidieren automatisch jede Eingabe, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um gültige Werte auf untere und obere Grenzen einzuschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von CSS zur Anzeige von gültigen und ungültigen Symbolen, abhängig vom Wert des `input`:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten abzusenden - z.B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert - und sehen Sie, wie sich die Fehlermeldungen, die der Browser Ihnen gibt, mit verschiedenen Werten unterscheiden.

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem benachbarten {{htmlelement("span")}} Element anzuzeigen, als visueller Indikator der Gültigkeit.

Wir legen es auf ein separates `<span>` Element für zusätzliche Flexibilität. Einige Browser zeigen generierten Inhalt nicht sehr effektiv auf einigen Arten von Formulareingaben an. (Lesen Sie beispielsweise den Abschnitt über [`<input type="date">` Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> HTML-Formular-Validierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen, oder um sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu einem Disaster kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attributs nicht, um eingegebene Werte an ein spezifisches Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attributen einschränken können (wie oben erklärt).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn Spinbutton kein wichtiges Merkmal für Ihr Formularelement ist, sollten Sie in Erwägung ziehen, `type="number"` _nicht_ zu verwenden. Stattdessen können Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut verwenden, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl erhöhen, während sie versuchen, etwas anderes zu tun. Zudem gibt es bei der Eingabe von Nicht-Zahlen keine explizite Rückmeldung darüber, was sie falsch machen.

Überlegen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut zu verwenden, um Benutzern das schnellere und fehlerfreiere Ausfüllen von Formularen zu ermöglichen. Um beispielsweise die automatische Ausfüllung auf einem Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits besprochen, dass die Standardsteigerung `1` ist und Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut verwenden können, um dezimale Eingaben zuzulassen. Lassen Sie uns einen genaueren Blick darauf werfen.

Das folgende Beispiel zeigt ein Formular zur Eingabe der Körpergröße des Benutzers. Es ist standardmäßig auf eine Eingabe der Größe in Metern eingestellt, aber Sie können den entsprechenden Knopf klicken, um das Formular so anzupassen, dass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Körpergröße in Metern akzeptiert Dezimalstellen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren wollen, haben wir den `step` Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben anfänglich mit `style="display: none;"` ausgeblendet, sodass die Meter der Standards-Eingabetyp sind.

Nun zum CSS. Dies sieht ähnlich aus wie das Validierungsstyling, das wir zuvor gesehen haben; nichts Bemerkenswertes hier.

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

Nach Deklaration einiger Variablen wird ein Event-Listener zum `button` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies beinhaltet das Ändern der `class` des Buttons, des {{HTMLElement("label")}}, und das Aktualisieren der Anzeige der beiden Eingabemengen, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll konvertieren, was eine echte Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Knopf drückt, werden die `required` Attribut(e) von den Eingaben entfernt, die wir verstecken, und wir löschen die `value` Attribut(e). Dies geschieht, damit das Formular übermittelt werden kann, wenn nicht beide Eingabesätze ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Ohne dies müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular zu übermitteln!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein {{jsxref("Number")}}, der eine Zahl darstellt, oder leer</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte, allgemeine Attribute</strong></td>
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
      <td><strong>Implizite ARIA Rolle</strong></td>
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
