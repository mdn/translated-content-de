---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den frühen Tagen von HTML verfügbar sind. Nun werden wir uns die Funktionalität einiger Eingabetypen anschauen, die später hinzugefügt wurden.

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
        Die neuen Eingabetypwerte verstehen, die verfügbar sind, um native
        Formularsteuerungen zu erstellen, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerungen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerungen. Dies behandeln wir in einem fortgeschrittenen Tutorial: [Anleitung zum Erstellen benutzerdefinierter Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Diese Art von Feld wird durch den Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Sie können dies im Screenshot unten sehen.

![Ein ungültiges E-Mail-Eingabefeld zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein." an.](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um die Eingabe mehrerer durch Kommas getrennter E-Mail-Adressen im selben Eingabefeld zu ermöglichen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten – insbesondere auf Touch-Geräten mit dynamischen Tastaturen wie Smartphones – kann eine andere virtuelle Tastatur angezeigt werden, die besser zum Eingeben von E-Mail-Adressen geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, bei der das At-Zeichen standardmäßig angezeigt wird.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie können Beispiele für die grundlegenden Texteingabetypen unter [grundlegende Eingabebeispiele](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, da sie die Benutzererfahrung für Nutzer dieser Geräte verbessern.

### Client-seitige Validierung

Wie Sie oben sehen können, bietet `email` – zusammen mit anderen neueren `input`-Typen – eine eingebaute _client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine nützliche Hilfe, um Benutzer dazu zu bringen, ein Formular genau auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, ohne auf eine Antwort vom Server warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen für alle über Formulare übermittelten Daten sowohl serverseitig als auch clientseitig durchführen, da die clientseitige Validierung zu einfach deaktiviert werden kann und so böswillige Benutzer weiterhin problemlos falsche Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Vorstellung davon, was _passieren könnte_; die Implementierung serverseitiger Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

Beachten Sie, dass `a@b` gemäß den standardmäßig bereitgestellten Einschränkungen eine gültige E-Mail-Adresse ist. Dies liegt daran, dass der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden später im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) darüber sprechen, wie Sie diese Funktionen verwenden können.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse zugeordnet, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft gibt `true` zurück.

## Suchfeld

Suchfelder sind dafür gedacht, Suchfelder auf Seiten und Apps zu erstellen. Dieser Feldtyp wird festgelegt, indem der Wert `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut verwendet wird:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld besteht darin, wie der Browser sein Erscheinungsbild gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein "Ⓧ"-Löschen-Symbol angezeigt, das das Feld bei Klicken von jedem Wert befreit. Dieses Löschen-Symbol erscheint nur, wenn das Feld einen Wert hat und, außer in Safari, nur, wenn das Feld fokussiert ist. Darüber hinaus kann auf Geräten mit dynamischen Tastaturen der "Eingabe"-Taste der Text "**search**" zugeordnet oder ein Lupensymbol angezeigt werden.

Eine weitere erwähnenswerte Funktion ist, dass die Werte eines `search`-Felds automatisch gespeichert und wiederverwendet werden können, um eine Autovervollständigung über mehrere Seiten derselben Website anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn auf einem Touchgerät mit einer dynamischen Tastatur darauf zugegriffen wird, zeigen die meisten Geräte beim Auftreten von `type="tel"` eine numerische Tastatur an, was bedeutet, dass dieser Typ immer dann nützlich ist, wenn eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern.

-![Firefox für Android E-Mail-Tastatur, bei der das Kaufmanns-Und standardmäßig angezeigt wird.](fx-android-tel-type-keyboard.jpg)

Aufgrund der Vielzahl von Telefonnummernformaten weltweit erzwingt diese Art von Feld keine Einschränkungen für den von einem Benutzer eingegebenen Wert (dies bedeutet, dass er Buchstaben usw. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen zu erzwingen, was Sie in [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) lernen werden.

## URL-Feld

Ein spezieller Feldtyp für die Eingabe von URLs kann erstellt werden, indem der Wert `url` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungseinschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standard-Tastatur häufig einige oder alle der Doppelpunkte, Punkte und Schrägstriche als Standardtasten an.

> [!NOTE]
> Nur weil die URL korrekt formatiert ist, bedeutet das nicht, dass sie auf einen tatsächlichen Ort verweist!

## Numerisches Feld

Steuerelemente zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Dieses Steuerelement sieht aus wie ein Textfeld, erlaubt jedoch nur Fließpunktzahlen und bietet in der Regel Tasten in Form eines Spinners, um den Wert des Steuerelements zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die minimalen und maximalen zulässigen Werte einschränken, indem Sie die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute festlegen.

Sie können auch das `step`-Attribut verwenden, um den Erhöhungs- und Verringerungswert festzulegen, der durch Drücken der Spinner-Tasten verursacht wird. Standardmäßig überprüft der number-Eingabetyp nur, ob die Zahl eine ganze Zahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig auf `1` gesetzt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert wie `step="0.01"` an, um den Fließpunkt einzuschränken. Wenn es weggelassen wird, sind nur ganze Zahlen gültig, da der `step`-Wert standardmäßig auf `1` gesetzt ist.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt eine Zahlsteuerung, deren gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringerungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahlsteuerung, deren Wert auf jeden Wert zwischen `0` und `1` einschließlich beschränkt ist und deren Erhöhungs- und Verringerungstasten ihren Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp macht Sinn, wenn der Bereich der gültigen Werte begrenzt ist, wie z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu gestalten (wie z.B. USA-PLZs, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur, verzichtet jedoch auf das Spinner-UI-Feature der Zahl.

## Schieberegler-Steuerelemente

Eine andere Möglichkeit, eine Zahl auszuwählen, besteht darin, einen **Schieberegler** zu verwenden. Sie sehen diese ziemlich oft auf Webseiten wie Einkaufsseiten, auf denen Sie einen maximalen Immobilienpreis festlegen möchten, nach dem gefiltert werden soll. Lassen Sie uns ein Live-Beispiel anschauen, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In der Praxis sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert `range` gesetzt ist. Der Schieberegler-Daumen kann über Maus oder Berührung oder mit den Pfeilen der Tastatur bewegt werden.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Dazu wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribute zu setzen, die die minimalen, maximalen und Inkrementwerte festlegen.

Werfen wir einen Blick auf den Code hinter dem obigen Beispiel, damit Sie sehen können, wie es gemacht wird. Zuerst der grundlegende HTML-Code:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann und der um jeweils 1000 erhöht/vermindert wird. Wir haben ihm einen Standardwert von `250000` gegeben, indem wir das `value`-Attribut verwendet haben.

Ein Problem bei Schieberegeln ist, dass sie keine visuelle Rückmeldung darüber liefern, welcher aktuelle Wert vorliegt. Aus diesem Grund haben wir ein {{htmlelement("output")}}-Element eingefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist besonders – wie `<label>` – und kann ein `for`-Attribut aufnehmen, das es Ihnen ermöglicht, es mit dem Element oder den Elementen zu verknüpfen, aus denen der Ausgabewert stammt.

Um den aktuellen Wert tatsächlich anzuzeigen und ihn bei Änderungen zu aktualisieren, müssen Sie JavaScript verwenden, was mit ein paar Anweisungen erreicht werden kann:

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

Hier speichern wir Referenzen auf die `range`-Eingabe und die `output` in zwei Variablen. Dann stellen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) der `output` auf den aktuellen `value` der Eingabe ein. Schließlich wird ein Ereignislistener gesetzt, um sicherzustellen, dass jedes Mal, wenn der Bereichsregler bewegt wird, der `textContent` der `output` auf den neuen Wert aktualisiert wird.

## Datums- und Uhrzeitwähler

Im Allgemeinen ist es für eine gute Benutzererfahrung beim Sammeln von Datums- und Zeitwerten wichtig, eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne in einen nativen Kalender zu wechseln oder sie möglicherweise in unterschiedlichen Formaten einzugeben, die schwer zu interpretieren sind. Die letzte Minute des vorherigen Jahrtausends kann auf die folgenden verschiedenen Weisen ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumskontrollen sind verfügbar, um diese spezielle Art von Daten zu bewältigen und Kalender-Widgets bereitzustellen, wodurch die Daten einheitlich werden.

Eine Datums- und Zeitsteuerung wird mit dem {{HTMLElement("input")}}-Element und einem entsprechenden Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, je nachdem, ob Sie Daten, Uhrzeiten oder beides sammeln möchten. Hier ist ein Live-Beispiel:

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

Lassen Sie uns die verschiedenen verfügbaren Typen kurz ansehen. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere in Bezug auf die Browserunterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den unten stehenden Links zu den Referenzseiten für jeden Typ, die auch detaillierte Beispiele enthalten.

### `date`

[`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) erstellt ein Widget zum Anzeigen und Auswählen eines Datums (Jahr, Monat und Tag, ohne Uhrzeit).

```html hidden
<label for="date">Enter the date:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget zum Anzeigen und Auswählen eines Datums mit Uhrzeit ohne spezielle Zeitzoneninformationen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month) erstellt ein Widget zum Anzeigen und Auswählen eines Monats mit Jahr.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget zum Anzeigen und Auswählen eines Zeitwerts. Während die Zeit möglicherweise im 12-Stunden-Format angezeigt wird, wird der _zurückgegebene Wert_ im 24-Stunden-Format angezeigt.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget, um eine Woche und ihr Jahr anzuzeigen und auszuwählen.

Wochen beginnen am Montag und laufen bis Sonntag. Darüber hinaus enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres – der möglicherweise nicht den ersten Tag des Jahres umfasst oder die letzten Tage des Vorjahres umfassen kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datums- und Zeitwerten

Alle Datums- und Zeitsteuerungen können mit den [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributen eingeschränkt werden, mit weiteren Einschränkungen durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut (dessen Wert je nach Eingabetyp variiert).

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

## Farbauswahlelement

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (Dezimal- oder Hexadezimalwerte), HSL-Werte, Schlüsselwörter usw.

Ein `color`-Steuerelement kann mit dem {{HTMLElement("input")}}-Element erstellt werden, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Das Klicken auf ein Farbauswahlsteuerelement zeigt im Allgemeinen die standardmäßige Farbauswahlfunktion des Betriebssystems an, um eine Farbe auszuwählen. Der zurückgegebene Wert ist immer eine kleingeschriebene, sechswertige Hexadezimalfarbe.

## Zusammenfassung

Damit kommen wir zum Ende unserer Erkundung der HTML5-Formulareingabetypen. Es gibt einige andere Steuerelementtypen, die aufgrund ihres sehr spezifischen Verhaltens nicht einfach gruppiert werden können, aber dennoch wichtig zu kennen sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
