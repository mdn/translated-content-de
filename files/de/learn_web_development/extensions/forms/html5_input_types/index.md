---
title: Die HTML5-Input-Typen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den frühen Tagen von HTML verfügbar sind. Nun werden wir uns im Detail mit der Funktionalität einiger später hinzugefügter Input-Typen beschäftigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der neueren Input-Typwerte zur Erstellung nativer
        Formularsteuerungen und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerelementen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerelemente. Dies behandeln wir in einem fortgeschrittenen Tutorial: [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Diese Art von Feld wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut gesetzt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Anderer Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Sie können dies im folgenden Screenshot in Aktion sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein."](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Input-Typ verwenden, um mehrere durch Kommas getrennte E-Mail-Adressen in derselben Eingabe zuzulassen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten — insbesondere auf Touchgeräten mit dynamischen Tastaturen wie Smartphones — könnte eine andere virtuelle Tastatur angezeigt werden, die besser zum Eingeben von E-Mail-Adressen geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem Zeichen @ standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Beispiele für die grundlegenden Texteingabetypen finden Sie unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden und die Benutzererfahrung für Nutzer dieser Geräte zu verbessern.

### Clientseitige Validierung

Wie oben gezeigt, bietet `email` — zusammen mit anderen neueren `input`-Typen — eine integrierte _clientseitige_ Fehlerprüfung, die vom Browser ausgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer dabei zu führen, ein Formular genau auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten sofort nicht korrekt sind, anstatt auf eine Antwort vom Server warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Apps sollten immer Sicherheitsüberprüfungen aller von Formularen übermittelten Daten _auf der Serverseite_ sowie auf der Clientseite durchführen, da die clientseitige Validierung zu leicht deaktiviert werden kann, sodass böswillige Benutzer immer noch fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Webseitensicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Serverseitenvalidierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

Beachten Sie, dass `a@b` gemäß den standardmäßig bereitgestellten Einschränkungen eine gültige E-Mail-Adresse ist. Dies liegt daran, dass der `email`-Input-Typ standardmäßig Intranet-E-Mail-Adressen erlaubt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden später im Artikel [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) darüber sprechen, wie Sie diese Funktionen verwenden.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft gibt `true` zurück.

## Suchfeld

Suchfelder sind dafür gedacht, Suchfelder auf Seiten und in Apps zu erstellen. Diese Art von Feld wird durch die Verwendung des Wertes `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut gesetzt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld besteht in der Art und Weise, wie der Browser sein Aussehen gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken angezeigt. In einigen Browsern wird ein "Ⓧ"-Löschen-Symbol angezeigt, das das Feld bei einem Klick von jeglichem Wert befreit. Dieses Löschen-Symbol erscheint nur, wenn das Feld einen Wert hat, und, abgesehen von Safari, wird es nur angezeigt, wenn das Feld fokussiert ist. Zusätzlich kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur "**search**" anzeigen oder ein Lupensymbol darstellen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Felds automatisch gespeichert und zur automatischen Vervollständigung auf mehreren Seiten derselben Website wiederverwendet werden können; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn es über ein Touch-Gerät mit dynamischer Tastatur aufgerufen wird, zeigen die meisten Geräte eine numerische Tastatur an, wenn `type="tel"` verwendet wird. Dies bedeutet, dass dieser Typ nützlich ist, wann immer eine numerische Tastatur nützlich ist, und muss nicht nur für Telefonnummern verwendet werden.

-![Firefox für Android E-Mail-Tastatur, mit dem Und-Zeichen standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der vielfältigen Formate von Telefonnummern weltweit erzwingt diese Art von Feld keine Einschränkungen für den vom Benutzer eingegebenen Wert (dies bedeutet, dass es Buchstaben usw. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, die Sie in [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) kennenlernen werden.

## URL-Feld

Ein spezieller Feldtyp zum Eingeben von URLs kann erstellt werden, indem der Wert `url` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt spezielle Validierungsbeschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL auf andere Weise fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur oft einige oder alle der Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL wohlgeformt ist, bedeutet das nicht unbedingt, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Feld

Steuerungen zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}}-Element und einem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Diese Steuerung sieht aus wie ein Textfeld, erlaubt jedoch nur Gleitkommazahlen und bietet normalerweise Buttons in Form eines Spinners, um den Wert der Steuerung zu erhöhen oder zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Input-Typ können Sie die minimal und maximal erlaubten Werte durch Setzen der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute einschränken.

Sie können auch das `step`-Attribut verwenden, um den Inkrementwert, der durch Drücken der Spinner-Tasten verursacht wird, festzulegen. Standardmäßig validiert der `number`-Input-Typ nur, wenn die Zahl eine ganze Zahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig auf `1` gesetzt ist. Um Gleitkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert an, wie `step="0.01"`, um die Gleitkommapräsizion einzuschränken. Wenn weggelassen, sind nur ganze Zahlen gültig, da der `step`-Wert standardmäßig auf `1` gesetzt ist.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt eine Zahlensteuerung, deren gültiger Wert auf eine ungerade Zahl zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringerungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahlensteuerung, deren Wert auf einen Wert zwischen `0` und `1` inklusive beschränkt ist und deren Erhöhungs- und Verringerungstasten den Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Input-Typ macht Sinn, wenn der Bereich gültiger Werte begrenzt ist, wie das Alter oder die Körpergröße einer Person. Wenn der Bereich zu groß ist, als dass inkrementelle Erhöhungen sinnvoll wären (wie bei den USA-Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Wahl sein. Er bietet die numerische Tastatur, ohne auf die Spinner-UI-Funktionalität des `number`-Typs zurückzugreifen.

## Schieberegler-Steuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese häufig auf Websites wie Shopping-Seiten, wo Sie einen maximalen Preis einstellen möchten, nach dem gefiltert werden soll. Lassen Sie uns ein Live-Beispiel betrachten, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In Bezug auf die Verwendung sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert möglicherweise nicht so wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf den Wert `range` gesetzt erstellt. Der Schieberegler-Daumen kann über Maus oder Touch oder mit den Pfeilen der Tastatur bewegt werden.

Es ist wichtig, den Schieberegler richtig zu konfigurieren. Hierzu ist dringend zu empfehlen, die [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribute zu setzen, die die minimalen, maximalen und Inkrementwerte festlegen.

Schauen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen können, wie es gemacht wird. Zuerst das grundlegende HTML:

```html
<label for="price">Choose a maximum house price: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="1000"
  value="250000" />
<output class="price-output" for="price"></output>
```

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann, der sich um jeweils 1000 erhöht/verringert. Wir haben ihm einen Standardwert von `250000` gegeben, der durch das `value`-Attribut festgelegt wird.

Ein Problem bei Schiebereglern ist, dass sie keine visuelle Rückmeldung über den aktuellen Wert bieten. Deshalb haben wir ein {{htmlelement("output")}}-Element hinzugefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist besonders — wie `<label>` — und es kann ein `for`-Attribut annehmen, das Sie mit dem Element oder den Elementen verbindet, aus denen der Ausgabewert stammt.

Um den aktuellen Wert tatsächlich anzuzeigen und beim Ändern zu aktualisieren, müssen Sie JavaScript verwenden, was mit ein paar Anweisungen umgesetzt werden kann:

```js
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});
```

```css hidden
body {
  text-align: center;
}
label,
output {
  display: block;
}
```

Hier speichern wir Referenzen zur `range`-Eingabe und zum `output` in zwei Variablen. Dann setzen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) des `outputs` auf den aktuellen `value` der Eingabe. Schließlich wird ein Event-Listener gesetzt, um sicherzustellen, dass wann immer der Schieberegler bewegt wird, der `textContent` des `outputs` auf den neuen Wert aktualisiert wird.

## Datum- und Zeit-Auswahlfelder

Im Allgemeinen ist es für ein gutes Benutzererlebnis beim Sammeln von Datums- und Zeitwerten wichtig, eine Kalender-Auswahl-UI bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne zu einer nativen Kalenderanwendung wechseln zu müssen oder sie möglicherweise in unterschiedlichen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf folgende unterschiedliche Weise ausgedrückt werden: `1999/12/31`, `23:59`, oder `12/31/99T11:59PM`.

HTML-Datumssteuerungen sind verfügbar, um diese spezifische Art von Daten zu handhaben, wobei Kalender-Widgets bereitgestellt werden und die Daten einheitlich gemacht werden.

Ein Datum- und Zeit-Steuerungselement wird mit dem {{HTMLElement("input")}}-Element und einem entsprechenden Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, abhängig davon, ob Sie Daten, Zeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

```html hidden live-sample___date1
<label for="party">Choose a date and time for your party:</label>
<input type="datetime-local" id="party" name="bday" />
<span class="validity"></span>
```

```css hidden live-sample___date1
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

{{EmbedLiveSample('date1','100%','50')}}

Schauen wir kurz auf die verschiedenen verfügbaren Typen. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, besonders in Anbetracht der Browser-Unterstützung (siehe unten); um alle Details herauszufinden, folgen Sie den untenstehenden Links zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

### `date`

[`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) erstellt ein Widget zur Anzeige und Auswahl eines Datums (Jahr, Monat und Tag, ohne Zeit).

```html hidden
<label for="date">Enter the date:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget zur Anzeige und Auswahl eines Datums mit Uhrzeit ohne spezifische Zeitzoneninformationen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month) erstellt ein Widget zur Anzeige und Auswahl eines Monats mit Jahr.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget zur Anzeige und Auswahl eines Zeitwerts. Während die Zeit möglicherweise im 12-Stunden-Format angezeigt wird, wird der _zurückgegebene Wert_ im 24-Stunden-Format angegeben.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget zur Anzeige und Auswahl einer Wochennummer und ihres Jahres.

Die Wochen beginnen am Montag und enden am Sonntag. Außerdem enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres — das bedeutet, dass sie nicht unbedingt den ersten Tag des Jahres enthalten muss oder möglicherweise die letzten Tage des Vorjahres umfasst.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datums-/Zeitwerten

Alle Datums- und Zeitsteuerungen können mit den [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributen eingeschränkt werden, mit weiteren Einschränkungen, die über das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut (dessen Wert je nach Eingabetyp variiert) möglich sind.

```html
<label for="myDate">When are you available this summer?</label><br />
<input
  type="date"
  name="myDate"
  min="2025-06-01"
  max="2025-08-31"
  step="7"
  id="myDate" />
```

{{EmbedLiveSample('constraining date/time values','100%','50')}}

## Farbwahlsteuerung

Farben sind immer ein bisschen schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color`-Steuerung kann mit dem {{HTMLElement("input")}}-Element und seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `color` gesetzt erstellt werden:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Das Klicken auf eine Farbsteuerung zeigt in der Regel die standardmäßige Farbauswahlfunktion des Betriebssystems an, aus der Sie wählen können. Der zurückgegebene Wert ist immer eine kleingeschriebene hexadezimale Farbe mit sechs Stellen.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: HTML5-Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Input_types).

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die HTML5-Formular-Input-Typen angekommen. Es gibt einige andere Steuerungstypen, die aufgrund ihrer sehr spezifischen Verhaltensweisen nicht leicht zu gruppieren sind, aber dennoch essentiell zu wissen sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
