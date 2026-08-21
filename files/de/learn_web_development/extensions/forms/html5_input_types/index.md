---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir das {{htmlelement("input")}}-Element betrachtet und die ursprünglichen Werte des `type`-Attributes behandelt, die seit den frühen HTML-Tagen verfügbar sind. Jetzt werden wir uns die Funktionalität einiger der später hinzugefügten Eingabetypen im Detail ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verstehen der neueren Eingabewerttypen zur Erstellung nativer
        Formularelemente und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularelementen stark von den Vorgaben eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularelemente. Dies wird in einem fortgeschrittenen Tutorial behandelt: [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressenfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeglicher anderer Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Dies können Sie im folgenden Screenshot in Aktion sehen.

![Eine ungültige E-Mail-Eingabe mit der Meldung "Bitte geben Sie eine E-Mail-Adresse ein."](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um mehrere durch Kommas getrennte E-Mail-Adressen in einem Eingabefeld zuzulassen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten – insbesondere Touch-Geräten mit dynamischen Tastaturen wie Smartphones – wird möglicherweise ein anderes virtuelles Tastenfeld angezeigt, das besser geeignet ist für die Eingabe von E-Mail-Adressen, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit @-Zeichen, das standardmäßig angezeigt wird.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie finden Beispiele für die grundlegenden Texteingabetypen unter [grundlegende Eingabe-Beispiele](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzererfahrung für Nutzer dieser Geräte zu verbessern.

### Client-Seitige Validierung

Wie Sie oben sehen können, bietet `email` — zusammen mit anderen neueren `input`-Typen — eine eingebaute _Client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine nützliche Hilfe, um Benutzer zu leiten, ein Formular korrekt auszufüllen, und es kann Zeit sparen: Es ist hilfreich, sofort zu wissen, dass Ihre Daten nicht korrekt sind, anstatt auf eine Antwort vom Server warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen für alle formularübermittelten Daten sowohl auf der _Server-Seite_ als auch auf der Client-Seite durchführen, da die Client-seitige Validierung zu einfach deaktiviert werden kann, so dass böswillige Benutzer dennoch leicht falsche Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Vorstellung davon, was _passieren könnte_; die Implementierung von Server-seitiger Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

Beachten Sie, dass `a@b` eine gültige E-Mail-Adresse gemäß den bereitgestellten Standardbeschränkungen ist. Dies liegt daran, dass der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden darüber sprechen, wie Sie diese Funktionen im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verwenden können.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dafür gedacht, Suchfelder auf Seiten und in Anwendungen zu erstellen. Dieser Feldtyp wird durch den Wert `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld besteht darin, wie der Browser dessen Aussehen gestaltet. In einigen Browsern werden Suchfelder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein "Ⓧ"-Löschen-Symbol angezeigt, welches das Feld bei einem Klick von einem beliebigen Wert löscht. Dieses Löschen-Symbol erscheint nur, wenn das Feld einen Wert hat und, abgesehen von Safari, nur dann, wenn das Feld den Fokus hat. Zudem kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur "**search**" anzeigen oder ein Lupensymbol darstellen.

Eine weitere beachtenswerte Funktion ist, dass die Werte eines `search`-Feldes automatisch gespeichert und zur Autovervollständigung auf mehreren Seiten derselben Website verwendet werden können; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummer-Feld

Ein spezielles Feld zur Eingabe von Telefonnummern kann mit `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes erstellt werden:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn es über ein Touch-Gerät mit einer dynamischen Tastatur aufgerufen wird, wird bei `type="tel"` auf den meisten Geräten eine numerische Tastatur angezeigt. Dies bedeutet, dass dieser Typ immer dann nützlich ist, wenn eine numerische Tastatur nützlich ist, und nicht allein für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit Et-Zeichen standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt an Telefonnummernformaten weltweit erzwingt dieser Feldtyp keine Beschränkungen für den von einem Benutzer eingegebenen Wert (dies bedeutet, dass er möglicherweise Buchstaben, etc. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Beschränkungen zu erzwingen, über die Sie in [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) lernen.

## URL-Feld

Ein spezieller Feldtyp zur Eingabe von URLs kann mit dem Wert `url` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt werden:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Dieser fügt besondere Validierungsbeschränkungen zu dem Feld hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur oft einige oder alle der Zeichen Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL gut geformt ist, bedeutet dies nicht unbedingt, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Eingabefeld

Kontrollen zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}}-Element [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Diese Kontrolle sieht wie ein Textfeld aus, erlaubt aber nur Fließkommazahlen und bietet normalerweise Knöpfe in Form eines Spinners, um den Wert der Kontrolle zu erhöhen oder zu verringern. Auf Geräten mit dynamischer Tastatur wird im Allgemeinen die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die minimal und maximal erlaubten Werte durch Festlegen der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute einschränken.

Sie können auch das `step`-Attribut verwenden, um die inkrementelle Erhöhung und Verringerung festzulegen, die durch Drücken der Spinner-Knöpfe verursacht wird. Standardmäßig validiert der Zahleingabewert nur, wenn die Zahl eine ganze Zahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig `1` ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert wie `step="0.01"` an, um den Gleitpunkt zu beschränken. Wenn es weggelassen wird, da der `step`-Wert standardmäßig `1` ist, sind nur ganze Zahlen gültig.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt eine Zahlkontrolle, deren gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhen- und Verringern-Knöpfe ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahlkontrolle, deren Wert auf jeden Wert zwischen `0` und `1` inklusive beschränkt ist und deren Erhöhen- und Verringern-Knöpfe ihren Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp macht Sinn, wenn die Bandbreite der gültigen Werte begrenzt ist, wie z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu gestalten (wie bei US-amerikanischen Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur ohne die UI-Funktion des Ziehzahlspinners.

## Schieberegler-Steuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese häufig auf Websites wie Einkaufseiten, wo Sie einen maximalen Preis für Eigenschaften einstellen möchten, nach denen gefiltert werden soll. Sehen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

Nutzungsgemäß sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}} und seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, das auf den Wert `range` gesetzt ist. Der Schieberegler-Daumen kann mit der Maus oder durch Berühren oder mit den Pfeiltasten der Tastatur verschoben werden.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Dazu wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-, [`max`](/de/docs/Web/HTML/Reference/Attributes/max)- und [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribute festzulegen, die die minimalen, maximalen und inkrementellen Werte festlegen.

Sehen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen können, wie es gemacht wird. Zunächst einmal das grundlegende HTML:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann, was in Schritten von 1000 erhöht/verringert wird. Wir haben ihm einen Standardwert von `250000` mit dem `value`-Attribut gegeben.

Ein Problem mit Schiebereglern ist, dass sie keinerlei visuelles Feedback darüber bieten, welchen derzeitigen Wert sie haben. Aus diesem Grund haben wir ein {{htmlelement("output")}}-Element hinzugefügt, um den aktuellen Wert zu enthalten. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in einem beliebigen Element anzeigen, aber `<output>` ist speziell — wie `<label>` — und kann ein `for`-Attribut annehmen, das es Ihnen erlaubt, es mit dem Element oder den Elementen zu verknüpfen, von denen der Ausgabe-Wert stammt.

Um den aktuellen Wert tatsächlich anzuzeigen und zu aktualisieren, wenn er sich ändert, müssen Sie JavaScript verwenden, was mit wenigen Anweisungen erreicht werden kann:

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

Hier speichern wir Referenzen auf das `range`-Eingabefeld und das `output` in zwei Variablen. Dann setzen wir sofort das [`textContent`](/de/docs/Web/API/Node/textContent) des `output` auf den aktuellen `value` des Eingabefeldes. Schließlich wird ein Ereignis-Listener gesetzt, der sicherstellt, dass immer, wenn der Bereichsschieberegler bewegt wird, das `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datums- und Uhrzeitwähler

Generell ist es für ein gutes Benutzererlebnis beim Sammeln von Datums- und Zeitwerten wichtig, eine Kalenderauswahl-Oberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne den Kontext zu einer nativen Kalenderanwendung wechseln oder diese in verschiedenen Formaten eingeben zu müssen, die schwer zu analysieren sind. Die letzte Minute des vorherigen Jahrtausends kann in folgenden verschiedenen Wegen ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datensteuerungen stehen zur Verfügung, um diese spezielle Art von Daten zu bearbeiten, indem Kalender-Widgets bereitgestellt werden, die die Daten einheitlich machen.

Eine Datums- und Zeiteingabesteuerung wird mit dem {{HTMLElement("input")}}-Element und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, abhängig davon, ob Sie Daten, Zeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

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

Sehen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere in Bezug auf die Browserunterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den unten stehenden Links zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

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

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget, um ein Datum mit Uhrzeit ohne spezifische Zeitzoneninformation anzuzeigen und auszuwählen.

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

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget, um einen Zeitwert anzuzeigen und auszuwählen. Während die Zeit in 12-Stunden-Format _angezeigt_ werden kann, ist der _zurückgegebene Wert_ im 24-Stunden-Format.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget, um eine Wochennummer und deren Jahr anzuzeigen und auszuwählen.

Wochen beginnen am Montag und dauern bis Sonntag. Zusätzlich enthält Woche 1 eines jeden Jahres den ersten Donnerstag dieses Jahres — der möglicherweise nicht den ersten Tag des Jahres umfasst oder die letzten Tage des vorherigen Jahres enthalten kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datums-/Zeitwerten

Alle Datums- und Zeitsteuerungen können mit den [`min`](/de/docs/Web/HTML/Reference/Attributes/min)- und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attributen eingeschränkt werden, wobei weitere Einschränkungen durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut möglich sind (dessen Wert je nach Eingabetyp variiert).

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

## Farbauswahlsteuerung

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Wege, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color`-Steuerung kann mit dem {{HTMLElement("input")}}-Element erstellt werden, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Klicken auf eine Farbsteuerung zeigt im Allgemeinen die standardmäßige Farb-Auswahlfunktionalität des Betriebssystems an, um eine Auswahl zu treffen. Der zurückgegebene Wert ist immer eine kleingeschriebene 6-stellige hexadezimale Farbe.

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die HTML5-Formulareingabetypen angelangt. Es gibt einige andere Steuerungstypen, die aufgrund ihrer sehr spezifischen Verhaltensweisen nicht leicht gruppiert werden können, aber dennoch unerlässlich zu kennen sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
