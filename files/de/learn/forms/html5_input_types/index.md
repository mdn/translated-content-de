---
title: Die HTML5 input Typen
slug: Learn/Forms/HTML5_input_types
l10n:
  sourceCommit: 45be179aadfa0500fe92598cbb0e76bdf7a87473
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}} Element angeschaut und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den Anfängen von HTML verfügbar sind. Jetzt werden wir die Funktionalität einiger später hinzugefügter Input-Typen im Detail betrachten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die neueren Eingabetyp-Werte zu verstehen, die zur Erstellung nativer
        Formularsteuerungen verfügbar sind, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerelementen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerelemente. Dies behandeln wir in einem fortgeschrittenen Tutorial: [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut gesetzt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Element/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Sie können dies in der unten stehenden Bildschirmaufnahme sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein." an.](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut in Kombination mit dem `email` Eingabetyp verwenden, um mehrere durch Kommas getrennte E-Mail-Adressen in demselben Eingabefeld zuzulassen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten – insbesondere Touch-Geräten mit dynamischen Tastaturen wie Smartphones – wird möglicherweise eine andere virtuelle Tastatur angezeigt, die für die Eingabe von E-Mail-Adressen besser geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem @-Zeichen standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie finden Beispiele für grundlegende Texteingabetypen unter [Grundlegende Eingabebeispiele](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzererfahrung für Benutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie Sie oben sehen können, bietet `email` – zusammen mit anderen neueren `input`-Typen – eine eingebaute _Client-seitige_ Fehlerüberprüfung, die vom Browser ausgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer dahin zu führen, ein Formular genau auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, anstatt auf eine Server-Rundsendung warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen aller formularübertragenen Daten sowohl auf der _Server- als auch auf der Client-Seite_ durchführen, da die Client-seitige Validierung zu leicht deaktiviert werden kann, sodass böswillige Benutzer weiterhin leicht fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt zwar außerhalb des Umfangs dieses Moduls, sollte jedoch berücksichtigt werden.

Beachten Sie, dass `a@b` eine gültige E-Mail-Adresse gemäß den standardmäßig bereitgestellten Einschränkungen ist. Dies liegt daran, dass der `email` Eingabetyp standardmäßig Intranet-E-Mail-Adressen erlaubt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden darüber sprechen, wie Sie diese Funktionen im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später verwenden können.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}} Pseudoklasse übereinstimmen und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dazu gedacht, um Suchfelder auf Seiten und Apps zu erstellen. Dieser Feldtyp wird festgelegt, indem der Wert `search` für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut verwendet wird:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld liegt in der Stilgestaltung des Erscheinungsbilds durch den Browser. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken angezeigt. In einigen Browsern wird ein "Ⓧ" Löschsymbol angezeigt, das das Feld bei einem Klick davon befreit. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat, und abgesehen von Safari, wird es nur angezeigt, wenn das Feld fokussiert ist. Zusätzlich kann auf Geräten mit dynamischen Tastaturen die Enter-Taste der Tastatur "**search**" anzeigen oder ein Lupensymbol darstellen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und zur automatischen Vervollständigung auf mehreren Seiten derselben Website wiederverwendet werden können; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type) Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn auf einem Touch-Gerät mit einer dynamischen Tastatur darauf zugegriffen wird, zeigen die meisten Geräte ein numerisches Tastenfeld, wenn `type="tel"` vorkommt, was bedeutet, dass dieser Typ nützlich ist, wann immer ein numerisches Tastenfeld nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

![Firefox für Android E-Mail-Tastatur, mit dem &-Zeichen standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt an Telefonnummernformaten weltweit erzwingt dieser Feldtyp keine Einschränkungen für den vom Benutzer eingegebenen Wert (dies bedeutet, dass es Buchstaben usw. enthalten kann).

Wie wir zuvor erwähnt haben, kann das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut verwendet werden, um Einschränkungen durchzusetzen, was Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) lernen werden.

## URL-Feld

Ein spezieller Feldtyp für die Eingabe von URLs kann erstellt werden, indem der Wert `url` für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungseinschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur oft einige oder alle der folgenden Tasten wie Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL korrekt formatiert ist, bedeutet das nicht unbedingt, dass sie auf einen Standort verweist, der tatsächlich existiert!

## Numerisches Feld

Steuerungen zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type) von `number` erstellt werden. Diese Steuerung sieht aus wie ein Textfeld, erlaubt jedoch nur Gleitkommazahlen und bietet in der Regel Tasten in Form eines Spinners, um den Wert der Steuerung zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number` Eingabetyp können Sie die minimal und maximal erlaubten Werte einschränken, indem Sie die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute einstellen.

Sie können auch das `step` Attribut verwenden, um die Zuwachs- und Abnahmeschritte festzulegen, die durch das Drücken der Spinnertasten verursacht werden. Standardmäßig validiert der numerische Eingabetyp nur, ob die Zahl eine ganze Zahl ist, da das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut standardmäßig `1` beträgt. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen spezifischen Wert an, wie `step="0.01"`, um die Gleitpunktzahl einzuschränken. Wenn es weggelassen wird, da der `step`-Wert standardmäßig `1` ist, sind nur ganze Zahlen gültig.

Sehen wir uns einige Beispiele an:

Dieses Beispiel erstellt eine Zahlsteuerung, deren gültiger Wert auf einen ungleichen Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verminderungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahlsteuerung, deren Wert auf einen beliebigen Wert zwischen `0` und `1` einschließlich beschränkt ist und deren Erhöhungs- und Verminderungstasten dessen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number` Eingabetyp ist sinnvoll, wenn der Bereich gültiger Werte begrenzt ist, z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll erscheinen zu lassen (wie USA-Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein. Er bietet das numerische Tastenfeld, während die Spinner-Benutzeroberfläche des Nummerntypen weggelassen wird.

## Schieberegler-Steuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Sliders**. Man sieht diese häufig auf Websites wie Shopping-Websites, wo man einen maximalen Immobilienpreis angeben möchte, nach dem gefiltert wird. Lassen Sie uns ein Live-Beispiel anschauen, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In der Praxis sind Slider weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _exakter_ Wert nicht zwingend wichtig ist.

Ein Slider wird erstellt, indem das {{HTMLElement("input")}} mit seinem [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `range` gesetzt wird. Der Schieberegler-Daumen kann über Maus oder Touch oder mit den Pfeilen der Tastatur bewegt werden.

Es ist wichtig, Ihren Slider richtig zu konfigurieren. Zu diesem Zweck wird dringend empfohlen, dass Sie die [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step) Attribute festlegen, die die Minimalwerte, Maximalwerte und Inkrementwerte festlegen.

Werfen wir einen Blick auf den Code hinter dem obigen Beispiel, damit Sie sehen können, wie es gemacht wird. Zuerst einmal das grundlegende HTML:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` rangiert und der in Schritten von 1000 auf einmal verändert wird. Wir haben ihm mit dem `value`-Attribut einen Standardwert von `250000` gegeben.

Ein Problem mit Schiebereglern ist, dass sie keinerlei optisches Feedback darüber geben, was der aktuelle Wert ist. Aus diesem Grund haben wir ein {{htmlelement("output")}} Element beigefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist etwas Besonderes – wie `<label>` – und es kann ein `for`-Attribut haben, das es Ihnen ermöglicht, es mit dem Element oder den Elementen zu verknüpfen, aus denen der Ausgangswert stammt.

Um tatsächlich den aktuellen Wert anzuzeigen und ihn bei Änderungen zu aktualisieren, müssen Sie JavaScript verwenden, was mit wenigen Anweisungen erreicht werden kann:

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

Hier speichern wir Referenzen auf das `range` Eingabefeld und das `output` in zwei Variablen. Dann setzen wir sofort das [`textContent`](/de/docs/Web/API/Node/textContent) von `output` auf den aktuellen `value` der Eingabe. Schließlich wird ein Ereignis-Listener gesetzt, der sicherstellt, dass wann immer der Bereichs-Schieberegler bewegt wird, der `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datums- und Zeitwähler

Im Allgemeinen ist es für eine gute Benutzererfahrung wichtig, beim Sammeln von Datums- und Zeitwerten eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne zu einer nativen Kalenderanwendung wechseln zu müssen oder sie gegensätzlich in verschiedenen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf folgende Weisen ausgedrückt werden: `1999/12/31`, `23:59`, oder `12/31/99T11:59PM`.

HTML-Datumssteuerungen sind verfügbar, um diese spezifische Art von Daten zu handhaben, Kalendermodule bereitzustellen und die Daten einheitlich zu machen.

Eine Datums- und Zeitsteuerung wird mit dem {{HTMLElement("input")}} Element erstellt und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut, je nachdem, ob Sie Daten, Zeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

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

Werfen wir einen kurzen Blick auf die verschiedenen verfügbaren Typen. Beachten Sie, dass die Verwendung dieser Typen recht komplex ist, insbesondere im Hinblick auf die Unterstützung durch Browser (siehe unten). Um die vollständigen Details zu erfahren, folgen Sie den untenstehenden Links zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

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

[`<input type="month">`](/de/docs/Web/HTML/Element/input/month) erstellt ein Widget, um einen Monat mit Jahr anzuzeigen und auszuwählen.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Element/input/time) erstellt ein Widget, um einen Zeitwert anzuzeigen und auszuwählen. Während die Zeit in 12-Stunden-Format angezeigt werden kann, wird der _zurückgegebene Wert_ im 24-Stunden-Format angezeigt.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Element/input/week) erstellt ein Widget, um eine Wochennummer und ihr Jahr anzuzeigen und auszuwählen.

Wochen beginnen am Montag und laufen bis Sonntag. Darüber hinaus enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres – der möglicherweise nicht den ersten Tag des Jahres einschließt oder die letzten Tage des Vorjahres enthalten kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Beschränkung von Datums-/Zeitwerten

Alle Datums- und Zeitsteuerungen können durch die [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attribute eingeschränkt werden, wobei weitere Einschränkungen über das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut (dessen Wert je nach Eingabetyp variiert) möglich sind.

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

## Farbwähler-Steuerung

Farben sind immer ein bisschen schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter usw.

Eine `color` Steuerung kann mit dem {{HTMLElement("input")}} Element erstellt werden, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Das Klicken auf eine Farbsteuerung zeigt normalerweise die standardmäßige Farbauswahlfunktion Ihres Betriebssystems an, um die Auswahl durchzuführen. Der zurückgegebene Wert ist immer eine kleingeschriebene hexadezimale 6-Wert-Farbe.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: HTML5-Steuerelemente](/de/docs/Learn/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit kommen wir zum Ende unserer Tour durch die HTML5-Formular-Eingabetypen. Es gibt einige andere Steuerelementtypen, die aufgrund ihres sehr spezifischen Verhaltens nicht leicht zu gruppieren sind, aber dennoch wichtig zu kennen sind. Diese behandeln wir im nächsten Artikel.

{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerungen erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
