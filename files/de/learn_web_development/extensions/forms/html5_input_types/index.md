---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den frühen Tagen von HTML verfügbar sind. Jetzt werden wir uns im Detail die Funktionalität einiger später hinzugefügter Eingabetypen ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die neueren Input-Typ-Werte zu verstehen, die zur Erstellung nativer
        Formularsteuerungen verfügbar sind, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerungen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerungen. Wir behandeln dies in einer erweiterten Anleitung: [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wird dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Dies können Sie im Screenshot unten sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein."](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um die Eingabe mehrerer durch Kommas getrennter E-Mail-Adressen im selben Eingabefeld zu ermöglichen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten, insbesondere Touch-Geräten mit dynamischen Tastaturen wie Smartphones, könnte eine andere virtuelle Tastatur angezeigt werden, die besser zum Eingeben von E-Mail-Adressen geeignet ist, inklusive der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem At-Zeichen standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie finden Beispiele für die grundlegenden Texteingabetypen unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um das Benutzererlebnis für die Nutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie Sie oben sehen können, bietet `email` — zusammen mit anderen neueren `input`-Typen — eine eingebaute _client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten zum Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer dazu zu bringen, ein Formular korrekt auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, ohne auf eine Antwort des Servers warten zu müssen.

Aber es _sollte nicht_ als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsprüfungen für alle per Formular übermittelten Daten sowohl auf der Server- als auch auf der Client-Seite durchführen, da die Client-seitige Validierung zu einfach ausgeschaltet werden kann, sodass böswillige Benutzer trotzdem leicht fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Websitesicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Vorstellung davon, was _passieren könnte_; die Implementierung der serverseitigen Validierung geht etwas über den Rahmen dieses Moduls hinaus, aber Sie sollten dies berücksichtigen.

Beachten Sie, dass `a@b` gemäß den standardmäßig bereitgestellten Einschränkungen eine gültige E-Mail-Adresse ist. Dies ist der Fall, weil der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wie Sie diese Funktionen nutzen, besprechen wir später im [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)-Artikel.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dazu gedacht, auf Seiten und in Apps Suchfelder zu erstellen. Dieser Feldtyp wird durch den Wert `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld besteht darin, wie der Browser sein Aussehen gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein "Ⓧ"-Löschen-Symbol angezeigt, das bei einem Klick den Feldwert löscht. Dieses Löschen-Symbol erscheint nur, wenn das Feld einen Wert hat, und abgesehen vom Safari wird es nur angezeigt, wenn das Feld fokussiert ist. Außerdem kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur "**search**" lauten oder ein Lupensymbol anzeigen.

Ein weiteres erwähnenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um bei mehreren Seiten derselben Website die automatische Vervollständigung anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Auf Touch-Geräten mit einer dynamischen Tastatur zeigen die meisten Geräte bei `type="tel"` eine numerische Tastatur an, was diesen Typ nützlich macht, wann immer eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit dem Ampersand standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt an Telefonnummernformaten weltweit erzwingt diese Art von Feld keine Einschränkungen für den vom Benutzer eingegebenen Wert (dies bedeutet, dass Buchstaben usw. enthalten sein können).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, was Sie in [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) kennenlernen werden.

## URL-Feld

Ein spezieller Feldtyp zum Eingeben von URLs kann erstellt werden, indem der Wert `url` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt spezielle Validierungseinschränkungen zum Feld hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen werden oft einige oder alle Punkte, Doppelpunkte und Schrägstriche standardmäßig angezeigt.

> [!NOTE]
> Nur weil die URL korrekt formatiert ist, bedeutet dies nicht unbedingt, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Feld

Steuerungen zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Diese Steuerung sieht wie ein Textfeld aus, erlaubt aber nur Fließkommazahlen und bietet normalerweise Schaltflächen in Form eines Spinners, um den Wert der Steuerung zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird im Allgemeinen die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die minimalen und maximalen zulässigen Werte durch Festlegen der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute einschränken.

Sie können auch das `step`-Attribut verwenden, um den Inkremenzuwachs und -abzug festzulegen, der durch Drücken der Spinner-Tasten verursacht wird. Standardmäßig validiert der Zahleneingabetyp nur, wenn die Zahl eine Ganzzahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig auf `1` gesetzt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert wie `step="0.01"` an, um die Fließkommazahl einzuschränken. Wird es weggelassen, da der `step`-Wert standardmäßig auf `1` gesetzt ist, sind nur Ganzzahlen gültig.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt eine Zahlensteuerung, deren gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verminderungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahlensteuerung, deren Wert auf einen beliebigen Wert zwischen `0` und `1` einschließlich beschränkt ist, und deren Erhöhungs- und Verminderungstasten dessen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp macht Sinn, wenn der Bereich der gültigen Werte begrenzt ist, wie das Alter oder die Körpergröße einer Person. Ist der Bereich zu groß, als dass inkrementelle Erhöhungen sinnvoll wären (wie bei US-Postleitzahlen, die von `00001` bis `99999` reichen), wäre der `tel`-Typ möglicherweise eine bessere Wahl; er bietet die numerische Tastatur, verzichtet jedoch auf die Spinner-Benutzeroberflächenfunktion der Zahl.

## Schieberegler-Steuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Diese sehen Sie häufig auf Websites wie Shopping-Sites, auf denen Sie einen maximalen Immobilienpreis festlegen möchten, nach dem gefiltert werden soll. Schauen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

Nutzungsbedingt sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `range` gesetzt ist. Der Schieber kann mit der Maus oder Berührung oder mit den Pfeiltasten der Tastatur verschoben werden.

Es ist wichtig, den Schieberegler korrekt zu konfigurieren. Daher wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribute festzulegen, die die Mindest-, Höchst- und Inkrementwerte festlegen.

Schauen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen, wie es gemacht wird. Zuerst der grundlegende HTML-Code:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann, der sich um jeweils 1000 erhöht/verringert. Wir haben ihm einen Standardwert von `250000` gegeben, unter Verwendung des `value`-Attributs.

Ein Problem mit Schiebereglern ist, dass sie keine Art von visuellem Feedback darüber geben, welcher aktuelle Wert vorliegt. Aus diesem Grund haben wir ein {{htmlelement("output")}}-Element aufgenommen, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist besonders – wie `<label>` – und kann ein `for`-Attribut haben, das es Ihnen ermöglicht, es mit dem Element oder den Elementen zu verknüpfen, aus denen der Ausgabe-Wert stammt.

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

Hier speichern wir Referenzen zum `range`-Input und zum `output` in zwei Variablen. Dann setzen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) des `output` auf den aktuellen `value` des Input. Schließlich wird ein Ereignislistener gesetzt, um sicherzustellen, dass das `textContent` des `output` bei jeder Bewegung des Schiebereglers auf den neuen Wert aktualisiert wird.

## Datum- und Zeitauswahl

Im Allgemeinen ist es für ein gutes Benutzererlebnis bei der Erfassung von Datums- und Zeitwerten wichtig, eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne in eine native Kalenderanwendung wechseln zu müssen oder sie möglicherweise in unterschiedlichen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf folgende verschiedene Arten ausgedrückt werden: `1999/12/31`, `23:59`, oder `12/31/99T11:59PM`.

HTML-Datum-Steuerungen sind verfügbar, um dieses spezifische Art von Daten zu verarbeiten, sie bieten Kalender-Widgets und machen die Daten einheitlich.

Eine Datum- und Zeitsteuerung wird mit dem {{HTMLElement("input")}}-Element und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, abhängig davon, ob Sie Daten, Zeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

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

Schauen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Nutzung dieser Typen relativ komplex ist, insbesondere wenn man die Browserunterstützung berücksichtigt (siehe unten); um die vollständigen Einzelheiten zu erfahren, folgen Sie den Links unten zu den Referenzseiten für jeden Typ, die detaillierte Beispiele enthalten.

### `date`

[`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) erstellt ein Widget, um ein Datum (Jahr, Monat und Tag, ohne Zeit) anzuzeigen und auszuwählen.

```html hidden
<label for="date">Enter the date:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget, um ein Datum mit Uhrzeit ohne spezifische Zeitzoneninformationen anzuzeigen und auszuwählen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month) erstellt ein Widget, um einen Monat mit Jahr anzuzeigen und auszuwählen.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget, um einen Zeitwert anzuzeigen und auszuwählen. Während die Zeit möglicherweise im 12-Stunden-Format _angezeigt_ wird, ist der _zurückgegebene Wert_ im 24-Stunden-Format.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget, um eine Wochenzahl und deren Jahr anzuzeigen und auszuwählen.

Die Woche beginnt am Montag und endet am Sonntag. Zusätzlich enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres, der möglicherweise nicht den ersten Tag des Jahres enthält oder die letzten Tage des Vorjahres umfassen kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datum/Zeit-Werten

Alle Datum- und Zeit-Steuerungen können unter Verwendung der [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute eingeschränkt werden, mit weiterer Einschränkungsmöglichkeit über das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut (dessen Wert je nach Eingabetyp variiert).

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

## Farbpicker-Steuerung

Farben sind immer ein wenig schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color`-Steuerung kann erstellt werden, indem das {{HTMLElement("input")}}-Element mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `color` gesetzt wird:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Beim Klicken auf eine Farbsteuerung wird im Allgemeinen die Standardfarbauswahlfunktion des Betriebssystems angezeigt, mit der Sie auswählen können. Der zurückgegebene Wert ist immer eine kleingeschriebene sechswertige Hexadezimalfarbe.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: HTML5-Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Das bringt uns zum Ende unseres Rundgangs durch die HTML5-Formulareingabetypen. Es gibt jedoch einige andere Steuerungstypen, die aufgrund ihres sehr spezifischen Verhaltens nicht einfach in Gruppen eingeteilt werden können, aber dennoch wichtig zu kennen sind. Wir werden diese im nächsten Artikel behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
