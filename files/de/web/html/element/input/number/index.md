---
title: "`<input type=\"number\">`"
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um dem Nutzer das Eingeben einer Zahl zu ermöglichen. Sie beinhalten eine eingebaute Validierung, um nicht-numerische Eingaben abzulehnen.

Der Browser kann Schrittpfeile bereitstellen, mit denen der Nutzer den Wert mit der Maus oder durch Tippen mit einem Finger erhöhen und verringern kann.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

In Browsern, die Eingaben vom Typ `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den in das Eingabefeld eingegebenen Wert repräsentiert. Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie eine Zahl innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemein von allen {{HTMLElement("input")}}-Typen unterstützten Attributen unterstützen Eingaben vom Typ `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Verpflichtungen: Nutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert übersteigt, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine Zahl ist, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Wert des `min`-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser Wert ist, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information in das Feld eingegeben werden soll. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn das Inhaltselement eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, der Placeholder aber in der entgegengesetzten Richtung angezeigt werden soll, können Sie Unicode bidirektionale Algorithmen-Formatierungszeichen verwenden, um die Richtung im Placeholder zu überschreiben. Weitere Informationen finden Sie unter [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie, wenn möglich, das `placeholder`-Attribut. Es ist semantisch nicht so nützlich wie andere Methoden, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn es vorhanden ist, besagt, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) per JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit dem zusätzlich angegebenen `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert angehalten werden muss, oder den speziellen Wert `any`, der unten beschrieben wird. Es sind nur Werte gültig, die dem Schritt-Basiswert ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) anderweitig und einem angemessenen Standardwert, wenn keiner davon angegeben ist) entsprechen.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schrittimpuls impliziert wird und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, kann der [user agent](/de/docs/Glossary/user_agent) auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Der Standard-Schrittwert für `number`-Eingaben ist `1`, was nur ganze Zahlen zulässt – _es sei denn_, die Schritt-Basis ist keine ganze Zahl.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementale Zahlen verwendet werden, insbesondere wenn Spinbutton-Inkrementierung und -Dekrementierung für die Benutzererfahrung hilfreich sind. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zufällig nur aus Zahlen bestehen, aber im strengen Sinne keine Zahl sind, wie Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht-numerische Eingaben sollten Sie einen anderen Eingabetyp in Betracht ziehen, wie [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder einen anderen {{HTMLElement('input')}} Typ mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes#inputmode) Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können dazu beitragen, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und der Logik zur Eingabe von Zahlen in ein Formular zu vereinfachen. Wenn Sie eine Zahleingabe mit dem richtigen `type`-Wert, `number`, erstellen, erhalten Sie die automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel eine Reihe von Aufwärts- und Abwärtstasten, um den Wert zu erhöhen und zu verringern.

> [!WARNING]
> Logischerweise sollten Sie in einer Zahleingabe keine Zeichen eingeben können, die keine Zahlen sind. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox-Bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Nutzer kann hinter den Kulissen an Ihrem HTML herumspielen, daher darf Ihre Website _nicht_ einfache clientseitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ auf der Serverseite jede Transaktion überprüfen, bei der der bereitgestellte Wert sicherheitsrelevante Folgen haben könnte.

Mobile Browser helfen die Benutzererfahrung weiter, indem sie eine spezielle Tastatur anzeigen, die besser für die Eingabe von Zahlen geeignet ist, wenn der Nutzer versucht, einen Wert einzugeben.

### Eine einfache Zahleingabe

In ihrer einfachsten Form kann eine Zahleingabe so implementiert werden:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_simple_number_input', 600, 40)}}

Eine Zahleingabe wird als gültig angesehen, wenn sie leer ist und eine einzelne Zahl eingegeben wird, ansonsten ist sie ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange sie eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) ist (das heißt, sie ist weder [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) noch [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitenlayout keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein am häufigsten verwendeter Wert, um einen Hinweis darauf zu geben, welche Formatierung die Eingabe haben soll `value`. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint der Platzhalter erneut.

Hier haben wir ein `number`-Eingabefeld mit dem Platzhalter "Multiple of 10". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Größenschritte

Standardmäßig werden die Aufwärts- und Abwärtstasten, die Ihnen zur Verfügung gestellt werden, um die Zahl nach oben und unten zu schieben, den Wert um 1 erhöhen und verringern. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut hinzufügen, das als Wert eine Zahl nimmt, die die Schrittgröße angibt. Unser obiges Beispiel enthält einen Platzhalter, der besagt, dass der Wert ein Vielfaches von 10 sein sollte, daher ergibt es Sinn, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten Sie feststellen, dass die Aufwärts- und Abwärts-Schritte die Zahl jedes Mal um 10 erhöhen und erniedrigen, nicht um 1. Sie können dennoch manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber sie wird als ungültig betrachtet.

### Angabe von minimalen und maximalen Werten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um einen minimalen und maximalen Wert anzugeben, den das Feld haben kann. Lassen Sie uns zum Beispiel unserem Beispiel ein Minimum von `0` und ein Maximum von `100` geben:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten Sie feststellen, dass die Aufwärts- und Abwärtstasten es Ihnen nicht erlauben, unter 0 oder über 100 zu gehen. Sie können dennoch manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig betrachtet.

### Zulassen von Dezimalwerten

Ein Problem mit Zahleingabeelementen ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit einem Dezimalbruch einzugeben (wie "1.0"), wird sie als ungültig betrachtet. Wenn Sie einen Wert eingeben möchten, der Dezimalzahlen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z.B. `step="0.01"`, um Dezimalzahlen mit zwei Dezimalstellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Sehen Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` zulässt, mit Dezimalstellen bis zwei Stellen. Zum Beispiel ist "9.52" gültig, aber "9.521" ist es nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Steuerung der Eingabegröße

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um diese Steuerelemente zu vergrößern.

Um beispielsweise die Breite der Eingabe nur so breit wie nötig zu machen, um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um eine [`id`](/de/docs/Web/HTML/Global_attributes#id) aufzunehmen und unseren Platzhalter zu verkürzen, da das Feld für den bisher verwendeten Text zu schmal sein wird:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Dann fügen wir ein wenig CSS hinzu, um die Breite des Elements mit dem `id`-Selektor `#number` zu verengen:

```css
#number {
  width: 3em;
}
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Vorschlagswerte anbieten

Sie können eine Liste von Standardoptionen angeben, aus denen der Nutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, welches als Wert die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines {{HTMLElement("datalist")}} enthält, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Jeder `option`-Wert ist der entsprechende vorgeschlagene Wert für das Zahleingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen von `number`-Eingabeelementen erwähnt, lassen Sie uns nun einen Überblick geben:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl ist (oder leer, es sei denn, `required` ist angegeben).
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe als ungültig zu machen. (Mit anderen Worten, das Eingabefeld _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf einen bestimmten Satz von Schritten zu beschränken (z.B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von etwas CSS, um je nach Wert des `input` gültige und ungültige Symbole anzuzeigen:

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

Versuchen Sie, das Formular mit verschiedenen ungültigen Werten abzusenden — z.B. keinem Wert; einem Wert unter 0 oder über 100; einem Wert, der kein Vielfaches von 10 ist; oder einem nicht numerischen Wert — und sehen Sie, wie die Fehlermeldungen, die der Browser anzeigt, sich mit den verschiedenen Werten unterscheiden.

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudoklassen, um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuellen Indikator für die Gültigkeit.

Wir platzieren es auf einem separaten `<span>`-Element für zusätzliche Flexibilität. Einige Browser zeigen generierte Inhalte nicht sehr effektiv bei bestimmten Arten von Formulareingaben an. (Lesen Sie z.B. den Abschnitt über [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen!
>
> Es ist viel zu einfach, dass jemand Änderungen an HTML vornimmt, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Außerdem ist es möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server sendet.
>
> Wenn Ihr serverseitiger Code die Daten, die er erhält, nicht validiert, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß sind, der falsche Typ sind und so weiter).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs nicht, um eingegebene Werte an ein bestimmtes Regex-Muster anzupassen.

Der Grund dafür liegt darin, dass Zahleingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die Mindest- und Höchstanzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen (wie oben erklärt) einschränken können.

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn Spinbutton nicht eine wichtige Funktion für Ihre Formularkontrolle ist, ziehen Sie in Betracht, _nicht_ `type="number"` zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Nutzer versehentlich eine Zahl erhöhen, während sie etwas anderes tun möchten. Darüber hinaus gibt es keine explizite Rückmeldung darüber, was falsch gemacht wird, wenn jemand versucht, etwas einzugeben, das keine Zahl ist.

Ziehen Sie auch in Betracht, das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut zu verwenden, um Nutzern zu helfen, Formulare schneller und mit weniger Fehlerquellen auszufüllen. Zum Beispiel setzen Sie `autocomplete="postal-code"`, um die Autovervollständigung auf ein Postleitzahlenfeld zu aktivieren.

## Beispiele

Wir haben bereits darüber gesprochen, dass der Standardinkrementwert `1` ist und Sie mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut Dezimaleingaben zulassen können. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel befindet sich ein Formular zur Eingabe der Körpergröße des Nutzers. Es ist standardmäßig auf Eingaben in Metern ausgelegt, Sie können jedoch den entsprechenden Button klicken, um das Formular so zu ändern, dass es Fuß und Zoll akzeptiert. Das Eingabefeld für die Körpergröße in Metern akzeptiert Dezimalstellen bis zu zwei Stellen.

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

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, sodass Werte wie _1.78_ nicht als ungültig gelten. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zunächst mit `style="display: none;"` verborgen, sodass Meter der Standard-Eingabetyp ist.

Nun zum CSS. Dies sieht sehr ähnlich dem Validierungsstyling aus, das wir zuvor gesehen haben; hier nichts Bemerkenswertes.

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

Nach der Deklaration einiger Variablen wird ein Event-Listener zum `button` hinzugefügt, der den Umschaltmechanismus steuert. Dies ist ziemlich einfach und dreht sich hauptsächlich darum, die `class` und das {{HTMLElement("label")}} des Buttons zu ändern und die Anzeigewerte der beiden Eingabesätze zu aktualisieren, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht hin- und herkonvertieren zwischen Metern und Fuß/Zoll, was eine reale Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Nutzer auf den Button klickt, werden die `required`-Attribute der Eingabefelder, die wir verbergen, entfernt und die `value`-Attribute geleert. Dies geschieht, damit das Formular eingereicht werden kann, wenn nicht beide Eingabesätze ausgefüllt sind. Es stellt auch sicher, dass das Formular keine Daten einreicht, die der Nutzer nicht gemeint hat.
>
> Wenn Sie dies nicht tun, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular einzureichen!

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
