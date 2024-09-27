---
title: Die HTML5 input types
slug: Learn/Forms/HTML5_input_types
l10n:
  sourceCommit: 45be179aadfa0500fe92598cbb0e76bdf7a87473
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den frühen Tagen von HTML verfügbar sind. Jetzt betrachten wir detailliert die Funktionalität einiger Eingabetypen, die später hinzugefügt wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die neueren Eingabetyp-Werte verstehen, die verfügbar sind, um native
        Formularelemente zu erstellen, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerelementen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerelemente. Wir behandeln dies in einem fortgeschrittenen Tutorial: [How to build custom form widgets](/de/docs/Learn/Forms/How_to_build_custom_form_controls).

## E-Mail-Feld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Element/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Sie können dies in Aktion auf dem untenstehenden Screenshot sehen.

![Eine ungültige E-Mail-Eingabe, die die Nachricht "Please enter an email address." zeigt.](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um mehrere komma-getrennte E-Mail-Adressen in demselben Eingabefeld zuzulassen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten — insbesondere Berührungsgeräten mit dynamischen Tastaturen wie Smartphones — könnte eine andere virtuelle Tastatur präsentiert werden, die besser geeignet ist für die Eingabe von E-Mail-Adressen, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem Standardanzeigesymbol für das At-Zeichen.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie finden Beispiele für die grundlegenden Texteingabetypen unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzererfahrung für Benutzer dieser Geräte zu verbessern.

### Client-side-Validierung

Wie Sie oben sehen können, bieten `email` — zusammen mit anderen neueren `input`-Typen — eine eingebaute _Client-side_-Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer zu führen, ein Formular genau auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten sofort nicht korrekt sind, anstatt auf eine Serverantwort warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen auf alle über Formular übermittelten Daten auf der _Server-Seite_ sowie auf der Client-Seite durchführen, da die Client-Seiten-Validierung zu einfach abzuschalten ist, sodass bösartige Benutzer dennoch leicht falsche Daten an Ihren Server senden können. Lesen Sie [Website security](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung einer Server-Seiten-Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

Beachten Sie, dass `a@b` eine gültige E-Mail-Adresse gemäß den standardmäßig bereitgestellten Einschränkungen ist. Dies liegt daran, dass der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden darüber sprechen, wie man diese Funktionen im Artikel [Client-side form validation](/de/docs/Learn/Forms/Form_validation) später nutzt.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}} Pseudo-Klasse passen, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dafür gedacht, Suchboxen auf Seiten und in Apps zu erstellen. Dieser Feldtyp wird durch die Verwendung des Wertes `search` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld ist, wie der Browser sein Aussehen gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein „Ⓧ“-Symbol angezeigt, das beim Anklicken das Feld von jedem Wert leert. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat, und abgesehen von Safari wird es nur angezeigt, wenn das Feld fokussiert ist. Darüber hinaus kann auf Geräten mit dynamischen Tastaturen die Enter-Taste der Tastatur "**search**" anzeigen oder ein Lupen-Symbol darstellen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um eine Autovervollständigung auf mehreren Seiten derselben Website anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann mit `tel` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs erstellt werden:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Bei Zugriff über ein Berührungsgerät mit dynamischer Tastatur zeigen die meisten Geräte bei `type="tel"` eine numerische Tastatur an, was bedeutet, dass dieser Typ nützlich ist, wann immer eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

![Firefox für Android E-Mail-Tastatur, mit standardmäßig angezeigtem Ampersand-Symbol.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt der Telefonnummernformate weltweit erzwingt dieser Feldtyp keine Einschränkungen für den vom Benutzer eingegebenen Wert (das bedeutet, dass er möglicherweise Buchstaben usw. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, was im [Client-side form validation](/de/docs/Learn/Forms/Form_validation)-Artikel behandelt wird.

## URL-Feld

Ein spezieller Feldtyp zur Eingabe von URLs kann mit dem Wert `url` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut erstellt werden:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Dieser fügt spezielle Validierungseinschränkungen zum Feld hinzu. Der Browser wird einen Fehler melden, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur oft einige oder alle der Zeichen Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL gut formatiert ist, bedeutet das nicht unbedingt, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Feld

Steuerelemente zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type) von `number` erstellt werden. Dieses Steuerelement sieht aus wie ein Textfeld, erlaubt jedoch nur Fließkommazahlen und bietet normalerweise Schaltflächen in Form eines Spinners, um den Wert des Steuerelements zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die Mindest- und Höchstwerte durch Festlegen der [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute einschränken.

Sie können auch das `step`-Attribut verwenden, um die Schrittweite festzulegen, die durch Drücken der Spin-Schaltflächen erhöht und verringert wird. Standardmäßig ist der number-Eingabetyp nur gültig, wenn die Zahl eine ganze Zahl ist, da das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut standardmäßig auf `1` gesetzt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert an, wie z.B. `step="0.01"`, um die Dezimalstelle einzugrenzen. Wenn weggelassen, sind aufgrund des standardmäßigen `step`-Werts von `1` nur ganze Zahlen gültig.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt ein Zahlenfeld, dessen gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Schaltflächen zur Erhöhung und Verringerung ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt ein Zahlenfeld, dessen Wert auf jeden Wert zwischen `0` und `1` inklusive beschränkt ist, und dessen Schaltflächen zur Erhöhung und Verringerung seinen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp ist sinnvoll, wenn der Bereich der gültigen Werte begrenzt ist, wie z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu machen (wie z.B. USA-Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur, verzichtet jedoch auf das Zahlen-Spinner-UI-Feature.

## Schieberegler

Eine weitere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese ziemlich oft auf Websites wie Shopping-Seiten, wo Sie einen maximalen Immobilienpreis einstellen möchten, um danach zu filtern. Schauen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In Bezug auf die Verwendung sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}} erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `range` gesetzt ist. Der Schieberegler kann mit der Maus oder Touch bewegt werden oder mit den Pfeiltasten der Tastatur.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Dazu wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Attributes/min)-, [`max`](/de/docs/Web/HTML/Attributes/max)- und [`step`](/de/docs/Web/HTML/Attributes/step)-Attribute festzulegen, die die minimalen, maximalen und inkrementellen Werte einstellen.

Schauen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen können, wie es gemacht wird. Zunächst einmal das grundlegende HTML:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` variieren kann, der sich um jeweils 1000 einfacht. Wir haben ihm einen Standardwert von `250000` gegeben, indem wir das `value`-Attribut verwenden.

Ein Problem mit Schiebereglern ist, dass sie keinerlei visuelles Feedback dazu bieten, was der aktuelle Wert ist. Aus diesem Grund haben wir ein {{htmlelement("output")}}-Element eingefügt, um den aktuellen Wert zu enthalten. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist speziell – wie `<label>` – und kann ein `for`-Attribut haben, das es Ihnen ermöglicht, es mit dem oder den Elementen zu verknüpfen, aus denen der Ausgabe-Wert stammt.

Um den aktuellen Wert tatsächlich anzuzeigen und ihn bei Änderungen zu aktualisieren, müssen Sie JavaScript verwenden, was mit wenigen Anweisungen erreicht werden kann:

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

Hier speichern wir Referenzen zum `range`-Eingabefeld und zum `output` in zwei Variablen. Dann setzen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) des `output` auf den aktuellen `value` der Eingabe. Schließlich wird ein Event-Listener gesetzt, um sicherzustellen, dass immer, wenn der Bereichs-Schieberegler bewegt wird, der `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datums- und Zeit-Auswahl

Generell ist es für eine gute Benutzererfahrung beim Sammeln von Datums- und Zeitwerten wichtig, eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne in eine native Kalender-Anwendung wechseln zu müssen oder sie potenziell in unterschiedlichen Formaten einzugeben, die schwer zu analysieren sind. Die letzte Minute des vorherigen Jahrtausends kann auf folgende unterschiedliche Weisen ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumssteuerelemente stehen zur Verfügung, um diese spezielle Art von Daten zu behandeln, Kalender-Widgets bereitzustellen und die Daten einheitlich zu machen.

Ein Datums- und Zeit-Steuerelement wird mit dem {{HTMLElement("input")}}-Element und einem passenden Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut erstellt, je nachdem, ob Sie Daten, Zeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

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

Schauen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere in Anbetracht der Browserunterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den Links unten auf den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) erstellt ein Widget, um ein Datum mit Zeit ohne spezifische Zeitzoneninformationen anzuzeigen und auszuwählen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Element/input/month) erstellt ein Widget, um einen Monat mit einem Jahr anzuzeigen und auszuwählen.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Element/input/time) erstellt ein Widget, um einen Zeitwert anzuzeigen und auszuwählen. Während die Zeit im 12-Stunden-Format _angezeigt_ werden kann, wird der _zurückgegebene Wert_ im 24-Stunden-Format angegeben.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Element/input/week) erstellt ein Widget, um eine Wochennummer und deren Jahr anzuzeigen und auszuwählen.

Wochen beginnen am Montag und laufen bis Sonntag. Zusätzlich enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres – der möglicherweise den ersten Tag des Jahres nicht einbezieht oder die letzten Tage des vorherigen Jahres umfassen kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Eingrenzung von Datums-/Zeitwerten

Alle Datums- und Zeitsteuerungen können mit den [`min`](/de/docs/Web/HTML/Attributes/min)- und [`max`](/de/docs/Web/HTML/Attributes/max)-Attributen eingeschränkt werden, mit weiterer Einschränkung durch das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut (dessen Wert je nach Eingabetyp variiert).

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

## Farbauswahl-Steuerung

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color`-Steuerung kann mit dem {{HTMLElement("input")}}-Element erstellt werden, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Das Klicken auf eine Farbsteuerung zeigt in der Regel die Farbauswahlfunktionalität des Betriebssystems an, mit der Sie wählen können. Der zurückgegebene Wert ist immer eine Kleinbuchstaben-6-Werte-Hexadezimalfarbe.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: HTML5 controls](/de/docs/Learn/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch die HTML5-Formulareingabetypten. Es gibt einige weitere Steuerungstypen, die aufgrund ihrer sehr spezifischen Verhaltensweisen nicht leicht gruppiert werden können, aber dennoch essenziell zu kennen sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [How to build custom form controls](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
