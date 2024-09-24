---
title: <input type="number">
slug: Web/HTML/Element/input/number
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`number`** werden verwendet, um den Benutzer eine Zahl eingeben zu lassen. Sie enthalten eine eingebaute Validierung, um nicht-numerische Einträge abzulehnen.

Der Browser kann Streifpfeile bereitstellen, um den Wert mit der Maus oder durch Antippen mit einem Finger zu erhöhen oder zu verringern.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

In Browsern, die Eingaben des Typs `number` nicht unterstützen, fällt eine `number`-Eingabe auf den Typ `text` zurück.

## Wert

Eine Zahl, die den Wert der in die Eingabe eingegebenen Zahl darstellt. Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine Zahl in das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut einschließen, wie folgt:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Zusätzliche Attribute

Zusätzlich zu den allgemein unterstützten Attributen aller {{HTMLElement("input")}}-Typen unterstützen Eingaben des Typs `number` diese Attribute.

### `list`

Der Wert des list-Attributs ist der {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, sind in den vorgeschlagenen Optionen nicht enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Die Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `max`

Der maximale Wert, der für diese Eingabe akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen übersteigt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des max-Attributs keine Zahl ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Wert des min-Attributs sein.

### `min`

Der minimale Wert, der für diese Eingabe akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein Wert für min angegeben wird, der keine gültige Zahl ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des max-Attributs sein.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in das Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) hat, der Platzhalter jedoch in entgegengesetzter Richtung dargestellt werden muss, können Sie Unicode-Steuerzeichen zur bidirektionalen Steuerung verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der {{domxref("HTMLInputElement")}} `value`-Eigenschaft per JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem gleichzeitig spezifizierten `readonly`-Attribut.

### `step`

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Steppbasiswert ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und einem entsprechenden Standardwert, wenn keiner von beiden bereitgestellt wird) entsprechen, sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Steppen impliziert wird und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Step-Konfiguration übereinstimmen, kann der {{Glossary("user agent")}} auf den nächstgelegenen gültigen Wert runden und dabei bei gleich nahen Optionen eine Präferenz für positive Zahlen haben.

Der Standard-Schrittwert für `number`-Eingaben ist `1`, was nur Ganzzahlen erlaubt—_es sei denn_, die Step-Basis ist keine ganze Zahl.

## Verwendung von Zahleneingaben

Der `number`-Eingabetyp sollte nur für inkrementelle Zahlen verwendet werden, insbesondere wenn das Inkrementieren und Dekrementieren mit dem Spin-Button benutzerfreundlich ist. Der `number`-Eingabetyp ist nicht geeignet für Werte, die zwar nur aus Zahlen bestehen, aber nicht im strengen Sinne eine Zahl sind, wie z. B. Postleitzahlen in vielen Ländern oder Kreditkartennummern. Für nicht numerische Eingaben sollten Sie einen anderen Eingabetyp erwägen, wie etwa [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) oder andere {{HTMLElement('input')}}-Typen mit dem [`inputmode`](/de/docs/Web/HTML/Global_attributes#inputmode)-Attribut:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">`-Elemente können Ihre Arbeit vereinfachen, wenn Sie die Benutzeroberfläche und die Logik für die Eingabe von Zahlen in ein Formular erstellen. Wenn Sie eine Zahleneingabe mit dem richtigen `type`-Wert, `number`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text eine Zahl ist, und in der Regel eine Reihe von Auf- und Ab-Tasten, um den Wert hoch- und herunterzustufen.

> [!WARNING]
> Logischerweise sollten Sie innerhalb einer Zahleneingabe keine Zeichen eingeben können, die keine Zahlen sind. Einige Browser erlauben ungültige Zeichen, andere nicht; siehe [Firefox bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumspielen, daher _darf_ Ihre Seite keine einfache clientseitige Validierung für Sicherheitszwecke verwenden. Sie _müssen_ serverseitig jede Transaktion verifizieren, bei der der bereitgestellte Wert Sicherheitsimplikationen jeglicher Art haben könnte.

Mobile Browser verbessern die Benutzererfahrung zusätzlich, indem sie eine spezielle Tastatur anzeigen, die besser zum Eingeben von Zahlen geeignet ist, wenn der Benutzer versucht, einen Wert einzugeben.

### Eine einfache Zahleneingabe

In ihrer grundlegendsten Form kann eine Zahleneingabe so implementiert werden:

```html
<label for="ticketNum">Anzahl der Tickets, die Sie kaufen möchten:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_simple_number_input', 600, 40)}}

Eine Zahleneingabe gilt als gültig, wenn sie leer ist und wenn eine einzelne Zahl eingegeben wird, ist jedoch ansonsten ungültig. Wenn das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwendet wird, wird die Eingabe nicht mehr als gültig angesehen, wenn sie leer ist.

> [!NOTE]
> Jede Zahl ist ein akzeptabler Wert, solange es sich um eine [gültige Gleitkommazahl](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) handelt (d. h. nicht [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) oder [Infinity](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der am häufigsten verwendet wird, um einen Hinweis zu geben, in welchem Format die Eingabe erfolgen sollte. Er wird innerhalb des Editierfelds angezeigt, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `number`-Eingabe mit dem Platzhalter "`Multiple of 10`". Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Editierfeldes manipulieren:

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steigerungsschritte steuern

Standardmäßig bewegen die Ihnen bereitgestellten Auf- und Ab-Tasten, mit denen Sie die Zahl hoch- und herunterschreiben, den Wert um 1 nach oben und unten. Sie können dies ändern, indem Sie ein [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut bereitstellen, das als Wert eine Zahl enthält, die die Schrittweite angibt. Unser obiges Beispiel enthält einen Platzhalter, der darauf hinweist, dass der Wert ein Vielfaches von 10 sein sollte, weshalb es sinnvoll ist, einen `step`-Wert von `10` hinzuzufügen:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In diesem Beispiel sollten die Auf- und Ab-Pfeile den Wert um jeweils 10 und nicht um 1 erhöhen und verringern. Sie können weiterhin manuell eine Zahl eingeben, die kein Vielfaches von 10 ist, aber diese wird als ungültig angesehen.

### Mindest- und Höchstwerte angeben

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um einen Mindest- und Höchstwert anzugeben, den das Feld haben kann. Beispielsweise können wir unserem Beispiel eine Mindestwert von `0` und einen Höchstwert von `100` geben:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In dieser aktualisierten Version sollten die Auf- und Ab-Stepschaltflächen den Wert nicht unter 0 oder über 100 gehen lassen. Sie können weiterhin manuell eine Zahl außerhalb dieser Grenzen eingeben, aber sie wird als ungültig angesehen.

### Dezimalwerte zulassen

Ein Problem bei Zahleneingaben ist, dass ihre Schrittgröße standardmäßig 1 ist. Wenn Sie versuchen, eine Zahl mit Dezimalstellen (wie "1,0") einzugeben, wird dies als ungültig angesehen. Wenn Sie einen Wert eingeben möchten, der Dezimalstellen erfordert, müssen Sie dies im `step`-Wert widerspiegeln (z. B. `step="0.01"` um Dezimalstellen bis zu zwei Dezimalstellen zuzulassen). Hier ist ein einfaches Beispiel:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Beachten Sie, dass dieses Beispiel jeden Wert zwischen `0.0` und `10.0` mit Dezimalstellen bis zu zwei Stellen zulässt. Beispielsweise ist "9,52" gültig, während "9,521" nicht.

Wenn Sie beliebige Dezimalwerte zulassen möchten, können Sie den `step`-Wert auf `"any"` setzen.

### Eingabegröße steuern

{{HTMLElement("input")}}-Elemente vom Typ `number` unterstützen keine Attributen zur Größenanpassung von Formularen wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Elemente zu ändern.

Um beispielsweise die Breite der Eingabe so anzupassen, dass sie nur so breit wie nötig ist um eine dreistellige Zahl einzugeben, können wir unser HTML ändern, um ein [`id`](/de/docs/Web/HTML/Global_attributes#id) zu enthalten und unseren Platzhalter zu verkürzen, da das Feld für den bisher verwendeten Text zu schmal sein wird:

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

Sie können eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben, das als Wert die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines {{HTMLElement("datalist")}} enthält, das seinerseits ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält. Der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Zahleneingabefeld.

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

Wir haben bereits eine Reihe von Validierungsfunktionen von Zahleneingaben erwähnt, aber fassen wir sie jetzt zusammen:

- `<input type="number">`-Elemente machen automatisch jede Eingabe ungültig, die keine Zahl (oder leer, es sei denn, `required` ist angegeben) ist.
- Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um eine leere Eingabe ungültig zu machen. (Anders gesagt, die Eingabe _muss_ ausgefüllt werden.)
- Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um gültige Werte auf eine bestimmte Menge von Schritten zu beschränken (z. B. Vielfache von 10).
- Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um gültige Werte auf untere und obere Grenzen zu beschränken.

Das folgende Beispiel zeigt alle oben genannten Funktionen sowie die Verwendung von CSS, um gültige und ungültige Symbole abhängig vom Wert der `input` anzuzeigen:

```html
<form>
  <div>
    <label for="balloons">Anzahl der zu bestellenden Ballons (Vielfache von 10):</label>
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

Versuchen Sie, das Formular mit verschiedenen ungültigen eingegebenen Werten zu übermitteln — z. B. kein Wert; ein Wert unter 0 oder über 100; ein Wert, der nicht ein Vielfaches von 10 ist; oder ein nicht-numerischer Wert — und sehen Sie, wie sich die Fehlermeldungen, die der Browser Ihnen gibt, je nach Fall unterscheiden.

Die auf dieses Beispiel angewendete CSS sieht folgendermaßen aus:

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

Hier verwenden wir die {{cssxref(":invalid")}}- und {{cssxref(":valid")}}-Pseudoklassen um ein entsprechendes ungültiges oder gültiges Symbol als generierten Inhalt auf dem angrenzenden {{htmlelement("span")}}-Element anzuzeigen, als visuelle Anzeige der Gültigkeit.

Wir haben es auf ein separates `<span>`-Element gesetzt, um Flexibilität zu erhöhen. Einige Browser zeigen generierten Inhalt nicht sehr effektiv bei einigen Arten von Formulareingaben an. (Lesen Sie zum Beispiel den Abschnitt über [`<input type="date">`-Validierung](/de/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind!
>
> Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML umgeht und die Daten direkt an Ihren Server übermittelt.
>
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es katastrophal sein, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

### Muster-Validierung

`<input type="number">`-Elemente unterstützen nicht die Verwendung des [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs, um eingegebene Werte an ein bestimmtes Regex-Muster anzupassen.

Die Begründung dafür ist, dass Zahleneingaben nicht gültig sind, wenn sie etwas anderes als Zahlen enthalten, und Sie die minimale und maximale Anzahl gültiger Ziffern mit den [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attributen beschränken können (wie oben erklärt).

## Barrierefreiheit

Die implizite [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) für das `<input type="number">`-Element ist [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). Wenn spinbutton für Ihr Formularelement keine wichtige Funktion ist, erwägen Sie, `type="number"` _nicht_ zu verwenden. Verwenden Sie stattdessen [`inputmode="numeric"`](/de/docs/Web/HTML/Global_attributes/inputmode) zusammen mit einem [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das die Zeichen auf Zahlen und zugehörige Zeichen beschränkt. Mit `<input type="number">` besteht das Risiko, dass Benutzer versehentlich eine Zahl inkrementieren, wenn sie versuchen, etwas anderes zu tun. Darüber hinaus gibt es keine spezifische Rückmeldung darüber, was sie falsch machen, wenn Benutzer versuchen, etwas anderes als eine Zahl einzugeben.

Erwägen Sie auch die Verwendung des [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attributs, um Benutzern zu helfen, Formulare schneller und fehlerfreier auszufüllen. Zum Beispiel, um die Autovervollständigung in einem Postleitzahlenfeld zu aktivieren, setzen Sie `autocomplete="postal-code"`.

## Beispiele

Wir haben bereits behandelt, dass die Erhöhung standardmäßig `1` ist und dass Sie das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um Dezimaleingaben zuzulassen. Lassen Sie uns einen genaueren Blick darauf werfen.

Im folgenden Beispiel gibt es ein Formular zur Eingabe der Körpergröße des Benutzers. Es akzeptiert standardmäßig eine Größe in Metern, Sie können jedoch den entsprechenden Button drücken, um das Formular so zu ändern, dass es stattdessen Fuß und Zoll akzeptiert. Die Eingabe für die Größe in Metern erlaubt Dezimalstellen bis zu zwei Stellen.

{{EmbedLiveSample("Examples", 600, 150)}}

Das HTML sieht so aus:

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Geben Sie Ihre Größe ein — Meter:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="z.B. 1.78"
      required />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup" style="display: none;">
    <span>Geben Sie Ihre Größe ein — </span>
    <label for="feet">Fuß:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">Zoll:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Geben Sie die Größe in Fuß und Zoll ein" />
  </div>
  <div>
    <input type="submit" value="Formular senden" />
  </div>
</form>
```

Sie werden sehen, dass wir viele der Attribute verwenden, die wir bereits früher im Artikel betrachtet haben. Da wir einen Meterwert in Zentimetern akzeptieren möchten, haben wir den `step`-Wert auf `0.01` gesetzt, damit Werte wie _1,78_ nicht als ungültig angesehen werden. Wir haben auch einen Platzhalter für diese Eingabe bereitgestellt.

Wir haben die Fuß- und Zolleingaben zunächst mit `style="display: none;"` verborgen, so dass Meter der Standard-Eingabetyp ist.

Nun zum CSS. Dies sieht dem Validierungsstyling sehr ähnlich aus, das wir zuvor gesehen haben; nichts Bemerkenswertes hier.

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
    switchBtn.value = "Geben Sie die Größe in Metern ein";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Geben Sie die Größe in Fuß und Zoll ein";

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

Nachdem einige Variablen deklariert wurden, wird ein Ereignislistener dem `button` hinzugefügt, um den Umschaltmechanismus zu steuern. Dies ist ziemlich einfach und besteht hauptsächlich darin, die `class` des Buttons und den {{HTMLElement("label")}} zu ändern und die Anzeigewerte der beiden Eingabesequenzen umzustellen, wenn der Button gedrückt wird.

(Beachten Sie, dass wir hier nicht zwischen Metern und Fuß/Zoll konvertieren, was eine reale Webanwendung wahrscheinlich tun würde.)

> [!NOTE]
> Wenn der Benutzer den Button drückt, werden die `required`-Attribute der ausgeblendeten Eingabe(n) entfernt und die `value`-Attribute geleert. Dies dient dazu, das Formular einreichen zu können, wenn nicht beide Eingabesequenzen ausgefüllt werden. Es stellt auch sicher, dass das Formular keine Daten übermittelt, die der Benutzer nicht beabsichtigt hat.
>
> Wenn Sie dies nicht tun würden, müssten Sie sowohl Fuß/Zoll **als auch** Meter ausfüllen, um das Formular einzureichen!

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
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [HTML-Formulare Anleitung](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Artikel: Warum Gov.UK den Eingabetyp für Nummern geändert hat](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
