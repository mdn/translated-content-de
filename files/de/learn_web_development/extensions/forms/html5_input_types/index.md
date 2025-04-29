---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributes behandelt, die seit den frühen Tagen von HTML verfügbar sind. Jetzt schauen wir uns im Detail die Funktionalität einiger Eingabetypen an, die später hinzugefügt wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis für HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die neueren Werte der Eingabetypen verstehen, die zur Erstellung nativer
        Formularsteuerelemente verfügbar sind, und wie man diese mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerelementen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerelemente. Dies behandeln wir in einem fortgeschrittenen Tutorial: [Anleitung zur Erstellung benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Eingabetyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet wird, muss der Wert, um gültig zu sein, eine E-Mail-Adresse sein. Jeder andere Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Dies können Sie im folgenden Screenshot sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein."](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um mehrere durch Kommas getrennte E-Mail-Adressen im selben Eingabefeld einzugeben:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten — insbesondere Touch-Geräten mit dynamischen Tastaturen wie Smartphones — kann eine andere virtuelle Tastatur angezeigt werden, die besser geeignet ist, E-Mail-Adressen einzugeben, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit einem @-Zeichen, das standardmäßig angezeigt wird.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Beispiele für die grundlegenden Texteingabetypen finden Sie unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html) an).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzererfahrung für die Benutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie Sie oben sehen können, bietet `email` — zusammen mit anderen neueren `input`-Typen — eine eingebaute _Client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten zum Server gesendet werden. Es ist eine nützliche Hilfe, um Benutzer dazu zu bringen, ein Formular korrekt auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, anstatt auf eine Server-Antwort warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer Sicherheitsprüfungen für alle über Formulare übermittelten Daten sowohl auf der _Serverseite_ als auch auf der Clientseite durchführen, da die Client-seitige Validierung zu einfach abzuschalten ist, sodass böswillige Benutzer immer noch schlechte Daten zu Ihrem Server senden können. Lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Idee davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt jedoch etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

Beachten Sie, dass `a@b` eine gültige E-Mail-Adresse gemäß den standardmäßig gegebenen Einschränkungen ist. Dies liegt daran, dass der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden später im Artikel zur [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) darüber sprechen, wie man diese Funktionen verwendet.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dafür vorgesehen, Suchboxen auf Seiten und in Apps zu erstellen. Dieser Eingabetyp wird mithilfe des Wertes `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld liegt darin, wie der Browser sein Erscheinungsbild gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein "Ⓧ"-Löschen-Symbol angezeigt, das den Feldinhalt löscht, wenn darauf geklickt wird. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat und, mit Ausnahme von Safari, wird es nur angezeigt, wenn das Feld fokussiert ist. Außerdem kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur "**Suche**" anzeigen oder ein Lupen-Symbol anzeigen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um eine automatische Vervollständigung auf mehreren Seiten derselben Website anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld für die Eingabe von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Bei Zugriff über ein Touch-Gerät mit einer dynamischen Tastatur zeigen die meisten Geräte ein numerisches Tastenfeld an, wenn `type="tel"` begegnet wird. Dies bedeutet, dass dieser Typ immer dann nützlich ist, wenn ein numerisches Tastenfeld nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit standardmäßig angezeigtem &-Zeichen.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt an Telefonformaten weltweit erzwingt dieser Eingabetyp keine Einschränkungen bei dem von einem Benutzer eingegebenen Wert (dies bedeutet, dass er Buchstaben usw. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen zu erzwingen, worüber Sie im Abschnitt [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) mehr erfahren.

## URL-Feld

Ein spezieller Feldtyp für die Eingabe von URLs kann durch die Verwendung des `url`-Wertes als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs erstellt werden:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungseinschränkungen hinzu. Der Browser gibt einen Fehler aus, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig ungültig ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur häufig einen Teil oder alle der Zeichen Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL korrekt formatiert ist, bedeutet das nicht zwangsläufig, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Feld

Steuerelemente für die Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Dieses Steuerelement sieht aus wie ein Textfeld, erlaubt jedoch nur Gleitkommazahlen und bietet normalerweise Schaltflächen in Form eines Spinners, um den Wert des Steuerelements zu erhöhen oder zu verringern. Auf Geräten mit dynamischen Tastaturen wird normalerweise die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die minimalen und maximalen erlaubten Werte durch Festlegen der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute beschränken.

Sie können das `step`-Attribut auch verwenden, um die inkrementelle Erhöhung und Verringerung festzulegen, die durch das Drücken der Spinner-Schaltflächen verursacht wird. Standardmäßig validiert sich der numerische Eingabetyp nur, wenn die Zahl eine Ganzzahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig auf `1` steht. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen spezifischen Wert wie `step="0.01"` an, um die Fließkommazahlen zu beschränken. Wenn ausgelassen, da der `step`-Wert standardmäßig auf `1` steht, sind nur ganze Zahlen gültig.

Sehen wir uns einige Beispiele an:

Dieses Beispiel erstellt ein numerisches Steuerelement, dessen gültiger Wert auf ungerade Werte zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringerungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt ein numerisches Steuerelement, dessen Wert auf einen beliebigen Wert zwischen `0` und `1` einschließlich beschränkt ist und dessen Erhöhungs- und Verringerungstasten seinen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp ist sinnvoll, wenn der Bereich der gültigen Werte begrenzt ist, wie z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll einzusetzen (wie z.B. USA-Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur, während auf die Spinner-Benutzeroberfläche des `number`-Typs verzichtet wird.

## Schiebersteuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebers**. Sie sehen diese ziemlich oft auf Websites wie Shopping-Seiten, auf denen Sie einen maximalen Immobilienpreis festlegen möchten, nach dem gefiltert werden soll. Schauen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In Bezug auf die Nutzung sind Schieber weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt von Bedeutung ist.

Ein Schieber wird mit dem {{HTMLElement("input")}} mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, das auf den Wert `range` festgelegt ist. Der Schieber-Daumen kann mittels Maus oder Touch oder mit den Pfeilen der Tastatur bewegt werden.

Es ist wichtig, Ihren Schieber richtig zu konfigurieren. Daher wird dringend empfohlen, dass Sie die [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-, [`max`](/de/docs/Web/HTML/Reference/Attributes/max)- und [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribute festlegen, die die minimalen, maximalen und Inkrementwerte entsprechend festlegen.

Schauen wir uns den Code des obigen Beispiels an, damit Sie sehen können, wie es gemacht wird. Zuerst der grundlegende HTML-Code:

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

Dieses Beispiel erstellt einen Schieber, dessen Wert zwischen `50000` und `500000` liegen kann, der sich jeweils um 1000 erhöht/verringert. Wir haben ihm einen Standardwert von `250000` gegeben, indem wir das `value`-Attribut verwenden.

Ein Problem bei Schiebern ist, dass sie keine visuelle Rückkopplung darüber bieten, welcher aktuelle Wert eingestellt ist. Daher haben wir ein {{htmlelement("output")}}-Element hinzugefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in einem beliebigen Element anzeigen, aber `<output>` ist besonders - wie `<label>` - und es kann ein `for`-Attribut annehmen, das es Ihnen ermöglicht, es mit dem Element oder den Elementen zu assoziieren, von denen der Ausgabewert stammt.

Um den aktuellen Wert tatsächlich anzuzeigen und ihn zu aktualisieren, wenn er sich ändert, müssen Sie JavaScript verwenden, was mit wenigen Anweisungen erreicht werden kann:

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

Hier speichern wir Referenzen auf das `range`-Input und das `output` in zwei Variablen. Dann setzen wir sofort das [`textContent`](/de/docs/Web/API/Node/textContent) des `output` auf den aktuellen `value` des Inputs. Schließlich wird ein Ereignislistener gesetzt, um sicherzustellen, dass, wann immer der Bereich-Schieber bewegt wird, das `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datum- und Uhrzeitauswahl

Im Allgemeinen ist es für eine gute Benutzererfahrung beim Erfassen von Datums- und Zeitwerten wichtig, eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne den Kontext wechseln zu einer nativen Kalenderanwendung oder sie in unterschiedlichen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann in den folgenden unterschiedlichen Weisen ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumselemente sind verfügbar, um diesen speziellen Datentyp zu behandeln, indem sie Kalender-Widgets bereitstellen und die Daten einheitlich gestalten.

Ein Datum- und Uhrzeitelement wird mit dem {{HTMLElement("input")}}-Element und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, abhängig davon, ob Sie Daten, Zeiten oder beides sammeln möchten. Hier ist ein Live-Beispiel:

```html hidden live-sample___date1
<label for="party">Choose a date and time for your party:</label>
<input type="datetime-local" id="party" name="bday" />
<span class="validity"></span>
```

```css hidden live-sample___date1
input:invalid + span:after {
  content: " ✖";
}

input:valid + span:after {
  content: " ✓";
}
```

{{EmbedLiveSample('date1','100%','50')}}

Schauen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere im Hinblick auf die Browserunterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie bitte den unten stehenden Links zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

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

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget zur Anzeige und Auswahl eines Datums mit Zeit, ohne spezifische Zeitzoneninformationen.

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

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget zur Anzeige und Auswahl eines Zeitwertes. Während die Zeit möglicherweise im 12-Stunden-Format angezeigt wird, wird der _zurückgegebene Wert_ im 24-Stunden-Format sein.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget zur Anzeige und Auswahl einer Wochennummer und ihres Jahres.

Wochen beginnen am Montag und laufen bis Sonntag. Zusätzlich enthält die erste Woche 1 eines jeden Jahres den ersten Donnerstag jenes Jahres — was möglicherweise nicht den ersten Tag des Jahres einschließt oder die letzten Tage des Vorjahres einschließen kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Beschränkung von Datums-/Zeitwerten

Alle Datum- und Zeitelemente können mit den [`min`](/de/docs/Web/HTML/Reference/Attributes/min)- und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributen beschränkt werden, wobei eine weitere Beschränkung durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut möglich ist (dessen Wert je nach Eingabetyp variiert).

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

## Farbwähler-Steuerelement

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Ein `color`-Steuerelement kann mit dem {{HTMLElement("input")}}-Element erstellt werden, wobei sein [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Beim Klicken auf ein Farbelement wird in der Regel die Standard-Farbwahlfunktion des Betriebssystems angezeigt, um auszuwählen. Der zurückgegebene Wert ist immer ein kleingeschriebenes sechswertiges hexadezimales Format.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: HTML5-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Input_types).

## Zusammenfassung

Das bringt uns zum Ende unserer Tour durch die HTML5-Formulareingabetypen. Es gibt einige andere Kontrollelemente, die aufgrund ihrer sehr spezifischen Verhaltensweisen nicht leicht zu gruppieren sind, aber dennoch wichtig zu kennen sind. Diese behandeln wir im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
