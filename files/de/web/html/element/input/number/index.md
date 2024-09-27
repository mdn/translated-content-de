---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um Benutzer einen Wert eingeben zu lassen. Sie beinhalten eine integrierte Validierung, um nicht numerische Eingaben abzulehnen.

Der Browser kann Wipfpfeile bereitstellen, um den Wert per Maus oder durch Tippen mit dem Finger zu erhöhen oder zu verringern.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

In Browsern, die Eingaben vom Typ `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den Wert der in die Eingabe eingegebenen Nummer darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl in das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut einfügen:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Typen unterstützt werden, unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt die Elementkonstraintvalidierung [Fehlervalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, dann hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt die [Fehlervalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben ist, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp anzeigt, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, der Platzhalter jedoch in die entgegengesetzte Richtung angezeigt werden soll, können Sie Unicode-bidirektionale Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Kontrollen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie wenn möglich die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin geändert werden, indem JavaScript-Code direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der besondere Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Schrittmachen (wenn angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) ansonsten, und ein angemessener Standardwert, falls keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittmachen impliziert wird und jeder Wert erlaubt ist (außer andere Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der [User Agent](/de/docs/Glossary/user_agent) auf den nächstgelegenen gültigen Wert runden und dabei bei gleich entfernten Optionen Zahlen in positiver Richtung bevorzugen.

Der Standardwert für Schritte bei `number`-Eingaben ist `1`, wodurch nur ganze Zahlen eingegeben werden dürfen, _es sei denn_, der Schrittbasiswert ist keine ganze Zahl.

## Verwendung von Zahlen-Eingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn Spinbutton-Inkrementierung und -Dekrementierung hilfreich für die Benutzererfahrung sind. Der `number`-Eingabetyp ist nicht geeignet für Werte, die nur aus Zahlen bestehen, aber nicht im eigentlichen Sinne eine Zahl sind, wie etwa Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, wie [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder andere {{HTMLElement('input')}}-Typen mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes#inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik zum Eingeben von Zahlen in ein Formular vereinfachen. Wenn Sie eine Zahlen-Eingabe mit dem richtigen `type`-Wert, `number`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und normalerweise ein Set aus Aufwärts- und Abwärtspfeilen, um den Wert auf- und abzuschreiten.

> [!WARNING]
> Logischerweise sollten Sie innerhalb einer Zahleneingabe keine anderen Zeichen als Zahlen eingeben können. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann mit Ihrem HTML hinter den Kulissen basteln, daher sollte Ihre Website _nicht_ auf einfache clientseitige Validierung für Sicherheitszwecke setzen. Sie _müssen_ serverseitig jede Transaktion verifizieren, bei der der bereitgestellte Wert von irgendgeinem Sicherheitsrisiko sein könnte.

Mobile Browser helfen zusätzlich bei der Benutzerfreundlichkeit, indem sie eine spezielle Tastatur anzeigen, die besser zum Eingeben von Zahlen geeignet ist, sobald der Benutzer beginnt, einen Wert einzugeben.

### Eine einfache Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe wie folgt implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_simple_number_input', 600, 40)}}

Eine Zahleneingabe gilt als gültig, wenn sie leer oder eine einzelne Zahl eingegeben ist, sonst ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, ist die Eingabe nicht mehr gültig, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Fließkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, in den Kontext eingebettete Hinweise zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis auf das erwartete Eingabeformat zu geben. Er wird im Bearbeitungsfeld angezeigt, wenn der Wert des Elements `""` ist. Wenn Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "Mehrfaches von 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfeldes ändern.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Schrittgröße

Standardmäßig erhöhen und verringern die bereitgestellten Hoch- und Herunter-Tasten den Wert um 1. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut angeben, das als Wert eine Zahl enthält, die die Schrittgröße angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, daher ist es sinnvoll, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Hoch- und Herunter-Schritt-Pfeile den Wert jeweils um 10 erhöhen und verringern, nicht um 1. Sie können immer noch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig angesehen.

### Festlegen minimaler und maximaler Werte

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um ein Minimum und Maximum anzugeben, das das Feld haben kann. Zum Beispiel geben wir unserem Beispiel ein Minimum von `0` und ein Maximum von `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Hoch- und Herunter-Schritt-Tasten nicht erlauben, unter 0 oder über 100 zu gehen. Sie können trotzdem manuell eine Zahl außerhalb dieser Grenzen eingeben, aber es wird als ungültig angesehen.

### Dezimalwerte erlauben

Ein Problem bei Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalpunkt einzugeben (z. B. "1,0"), wird diese als ungültig angesehen. Wenn Sie einen Wert eingeben wollen, der Dezimalstellen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"`, um Dezimalstellen bis auf zwei Stellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` erlaubt, mit Dezimalstellen bis auf zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingangsgröße steuern

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Steuerelemente zu ändern.

Zum Beispiel, um die Breite der Eingabe so einzustellen, dass sie nur so breit ist, wie es benötigt wird, um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Global_attributes#id) einzuschließen und unseren Platzhalter zu verkürzen, da das Feld zu schmal für den bisherigen Text sein wird:

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

Sie können eine Liste von Standardoptionen angeben, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes#id) einer {{HTMLElement("datalist")}}, die seinerseits ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält. Der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Zahleneingabefeld.

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

Wir haben bereits einige Validierungsmerkmale von `number`-Eingaben erwähnt, aber lassen Sie uns sie jetzt überprüfen:

- `<input type="number">`-Elemente invalidieren automatisch jede Eingabe, die keine Zahl ist (oder leer, es sei denn, `required` ist spezifiziert).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Mit anderen Worten, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf einen bestimmten Satz von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung einiger CSS, um je nach Wert des `input`-Elementes gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten zu übermitteln - z. B. keinen Wert; einen Wert unter 0 oder über 100; einen Wert, der kein Vielfaches von 10 ist; oder einen nicht-numerischen Wert - und sehen Sie, wie sich die Fehlermeldungen des Browsers mit den unterschiedlichen ändern.

Das auf dieses Beispiel angewandte CSS lautet wie folgt:

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

Hier verwenden wir die {{cssxref(":invalid")}} und {{cssxref(":valid")}} Pseudoklassen, um ein passendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem benachbarten {{htmlelement("span")}}-Element als visuelle Anzeige der Gültigkeit anzuzeigen.

Wir platzieren dies auf einem separaten `<span>`-Element für mehr Flexibilität. Einige Browser zeigen generierten Inhalt nicht sehr effektiv auf einigen Formular-Eingabetypen an. (Lesen Sie zum Beispiel den Abschnitt zur [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten gesendet werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs zum Erzwingen der Konformität der eingegebenen Werte mit einem bestimmten Regex-Muster nicht.

Der Grund hierfür ist, dass Nummerneingaben nicht gültig sind, wenn sie irgendetwas außer Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen beschränken können (wie oben erklärt).

## Barrierefreiheit

Die implizierte [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn Spinbutton keine wichtige Funktion für Ihre Formularkontrolle ist, sollten Sie in Betracht ziehen, _nicht_ `type="number"` zu verwenden. Stattdessen verwenden Sie [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Bei `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, während sie versuchen, etwas anderes zu tun. Wenn Benutzer zudem versuchen, etwas einzugeben, das keine Zahl ist, gibt es kein explizites Feedback darüber, was sie falsch machen.

Überlegen Sie auch, das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut zu verwenden, um Benutzern zu helfen, Formulare schneller und mit weniger Fehlerwahrscheinlichkeit auszufüllen. Um beispielsweise Autofill bei einem Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass standardmäßig das Inkrement `1` ist und Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um Dezimaleingaben zu ermöglichen. Schauen wir uns das genauer an.

Im folgenden Beispiel ist ein Formular zur Eingabe der Körpergröße des Benutzers. Es ist standardmäßig auf die Höhe in Metern eingestellt, aber Sie können die jeweilige Schaltfläche klicken, um das Formular so zu ändern, dass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Höhe in Metern akzeptiert Dezimalzahlen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir früher im Artikel gesehen haben. Da wir einen Meterwert in Zentimetern akzeptieren wollen, haben wir den Wert für `step` auf `0.01` gesetzt, so dass Werte wie _1.78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß-und-Zoll-Eingaben initial versteckt, indem wir `style="display: none;"` verwendeten, so dass Meter die Standard-Eingabeart ist.

Und nun zum CSS. Dies sieht dem Validierungsstyling, das wir zuvor gesehen haben, sehr ähnlich; nichts Bemerkenswertes hier.

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

Nach der Deklaration einiger Variablen wird ein Event-Listener zur Steuerschaltfläche hinzugefügt, um den Wechselmechanismus zu steuern. Dies ist ziemlich einfach und besteht hauptsächlich darin, die `class` der Schaltfläche und die {{HTMLElement("label")}} zu ändern und die Anzeige der beiden Sets von Eingaben beim Drücken der Schaltfläche zu aktualisieren.

(Beachten Sie, dass wir hier keine Umrechnung zwischen Metern und Fuß/Zoll vornehmen, was eine realistische Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer die Schaltfläche klickt, werden das/die `required`-Attribut(e) von der/den Eingabe(n), die wir ausblenden, entfernt und das/die `value`-Attribut(e) geleert. Dadurch kann das Formular übermittelt werden, wenn beide Eingabesets nicht ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular abzuschicken!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine {{jsxref("Number")}}, die eine Zahl darstellt oder leer ist</td>
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
