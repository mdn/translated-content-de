---
title: <input type="number">
slug: Web/HTML/Reference/Elements/input/number
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um dem Benutzer die Eingabe einer Zahl zu ermöglichen. Sie verfügen über eine eingebaute Validierung, um nicht-numerische Einträge abzulehnen.

Der Browser kann optional Steppertasten bereitstellen, mit denen der Benutzer den Wert mit der Maus oder durch Antippen mit dem Finger erhöhen und verringern kann.

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

In Browsern, die Eingaben vom Typ `number` nicht unterstützen, fällt ein `number`-Eingabefeld auf den Typ `text` zurück.

## Wert

Eine Zahl, die den in das Eingabefeld eingegebenen Wert darstellt. Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs einfügen, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allgemein von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximal akzeptierte Wert für diese Eingabe. Überschreitet der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des max-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimal akzeptierte Wert für diese Eingabe. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser Wert, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein nicht gültiger Zahlenwert für min angegeben wird, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Botschaft. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-Bidirektional-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerungen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein booleanes Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit zusätzlich spezifiziertem `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität spezifiziert, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich dem Basiswert für das Schrittdesign (falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansonsten, und ein entsprechender Standardwert, wenn keiner dieser Werte bereitgestellt wird) sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt angedeutet wird und jeder Wert zulässig ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, könnte der {{Glossary("user_agent", "Nutzeragent")}} möglicherweise auf den nächstliegenden gültigen Wert runden, wobei er Zahlen in positiver Richtung bevorzugt, wenn es zwei gleich nahe Alternativen gibt.

Der Standardwert für `number`-Eingaben ist `1`, wodurch nur ganze Zahlen zulässig sind—_es sei denn_, die Schrittbasis ist keine ganze Zahl.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere dann, wenn Spinbutton-Inkrementierung und -Dekrementierung zur Benutzererfahrung beitragen. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber streng genommen keine Zahlen sind, wie z.B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie bei Bedarf einen anderen Eingabetyp verwenden, wie z.B. [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) oder einen anderen {{HTMLElement('input')}}-Typ mit dem [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihnen helfen, Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik für die Eingabe von Zahlen in ein Formular zu vereinfachen. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert `number` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel ein Set von Hoch- und Runtertasten zur Erhöhung und Verminderung des Wertes.

> [!WARNING]
> Logischerweise sollte es nicht möglich sein, in ein Zahleneingabefeld andere Zeichen als Zahlen einzugeben. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Fehler 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML herumspielen, daher darf Ihre Website _nicht_ die clientseitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ jede Transaktion auf der Serverseite überprüfen, bei der der bereitgestellte Wert sicherheitsrelevante Folgen irgendeiner Art haben könnte.

Mobile Browser verbessern das Benutzererlebnis zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser zur Eingabe von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine grundlegende Zahleneingabe

In ihrer einfachsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

Eine Zahleneingabe wird als gültig angesehen, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wurde, aber ansonsten ungültig ist. Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Fließkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (d.h. kein [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollen. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis darauf zu geben, in welchem Format die Eingabe `value` vorliegen soll. Er wird innerhalb der Bearbeitungsbox angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in die Box eingegeben werden, verschwindet der Platzhalter; wenn die Box geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfach von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittweite

Standardmäßig schrittweise die bereitgestellten Hoch- und Runtertasten den Wert um 1 nach oben oder unten. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut bereitstellen, das als Wert eine Zahl angibt, die die Schrittweite angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, also macht es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Hoch- und Runterschrittpfeile den Wert jedes Mal um 10 erhöhen und verringern, nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Festlegen von Mindest- und Höchstwerten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um einen Mindest- und Höchstwert anzugeben, den das Feld haben kann. Zum Beispiel geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Hoch- und Runtertasten nicht unter 0 oder über 100 gehen. Sie können immer noch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem bei Zahleneingaben ist, dass ihre Schrittweite standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalwert einzugeben, der keine ganze Zahl ist (wie "1.1"), wird sie als ungültig betrachtet. Beachten Sie, dass Werte wie "1.0" als gültig angesehen werden, da sie numerisch äquivalent zu ganzen Zahlen sind. Wenn Sie Werte mit Bruchteilen eingeben möchten, müssen Sie dies im `step`-Wert reflektieren (z.B. `step="0.01"`, um Dezimalstellen auf zwei Nachkommastellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel alle Werte zwischen `0.0` und `10.0` zulässt, mit Dezimalstellen auf zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Form-Sizing-Attribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Zum Beispiel, um die Breite der Eingabe so anzupassen, dass sie nur so breit ist, wie es nötig ist, um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) aufzunehmen und unseren Platzhalter zu kürzen, da das Feld für den bisher verwendeten Text zu schmal sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir etwas CSS hinzu, um die Breite des Elements mit dem Selektor `#number` zu verringern:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Angebot von vorgeschlagenen Werten

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut spezifizieren, das als Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Jeder `option`-Wert ist der entsprechende vorgeschlagene Wert für das Nummerneingabefeld.

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

Wir haben schon einige Validierungsfunktionen von `number`-Eingaben erwähnt. Lassen Sie uns diese nun noch einmal zusammenfassen:

- `<input type="number">`-Elemente machen automatisch jeden Eintrag ungültig, der keine Zahl ist (oder leer ist, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um einen leeren Eintrag ungültig zu machen. (Mit anderen Worten: Die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um gültige Werte auf einen bestimmten Satz von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen und verwendet zusätzlich etwas CSS, um je nach Wert der `input` ein gültiges oder ungültiges Icon anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten einzugeben – z.B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der kein Vielfaches von 10 ist; oder ein nicht-numerischer Wert – und sehen Sie, wie sich die Fehlermeldungen des Browsers mit den verschiedenen ändern.

Das auf dieses Beispiel angewandte CSS ist wie folgt:

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Icon als erzeugten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visueller Indikator für Gültigkeit.

Wir setzen es auf ein separates `<span>`-Element für mehr Flexibilität. Einige Browser zeigen generierten Inhalt nicht sehr effektiv auf einigen Typen von Formulareingaben an. (Lesen Sie beispielsweise den Abschnitt zur [`<input type="date">`-Validierung](/de/docs/Web/HTML/Reference/Elements/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist kein Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu schwerwiegenden Problemen kommen, wenn Daten im falschen Format übermittelt werden (oder zu große Daten, Daten vom falschen Typ usw.).

### Mustervalidierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs, um eingegebene Werte einem bestimmten Regex-Muster anzupassen.

Der Grund dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie können die Mindest- und Höchstanzahl gültiger Ziffern mithilfe der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute (wie oben erklärt) beschränken.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role). Wenn das Spinbutton keine wichtige Funktion für Ihre Form-Steuerung ist, sollten Sie in Erwägung ziehen, `type="number"` nicht zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Bei `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, wenn sie etwas anderes tun wollen. Außerdem erhalten Benutzer, die versuchen, etwas anderes als eine Zahl einzugeben, kein klares Feedback, was sie falsch machen.

Erwägen Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlern auszufüllen. Zum Beispiel, um die Autofill-Funktion auf einem Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass der Inkrementstandard `1` ist und Sie das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um dezimale Eingaben zuzulassen. Lassen Sie uns das genauer betrachten.

Im folgenden Beispiel ist ein Formular zur Eingabe der Körpergröße des Benutzers. Es ist standardmäßig auf die Eingabe einer Größe in Metern eingestellt, aber Sie können den entsprechenden Button klicken, um das Formular zu ändern, damit es Fuß und Zoll akzeptiert. Die Eingabe für die Größe in Metern akzeptiert Dezimalstellen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, damit Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zunächst mit `style="display: none;"` versteckt, sodass Meter der Standard-Eingabetyp ist.

Nun zum CSS. Dies sieht dem Validierungsstyling sehr ähnlich, das wir zuvor gesehen haben; nichts Bemerkenswertes hier.

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

Nachdem einige Variablen deklariert wurden, wird ein Event-Listener auf den `button` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies beinhaltet das Ändern der `class` und des {{HTMLElement("label")}} des Buttons und das Aktualisieren der Anzeige der beiden Eingabesets, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll umrechnen, was eine reale Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Button klickt, werden die `required`-Attribute von den versteckten Eingaben entfernt, und die `value`-Attribute geleert. Dies dient dazu, dass das Formular abgeschickt werden kann, wenn beide Eingabesätze nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzuschicken!

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
