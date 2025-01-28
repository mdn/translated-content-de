---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: c23c931b3db039c737864651a4116c9437f4b535
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den Anfängen von HTML verfügbar sind. Jetzt werden wir detailliert die Funktionalität einiger Eingabetypen betrachten, die später hinzugefügt wurden.

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
        Die neueren Eingabetypwerte zu verstehen, die verwendet werden, um native
        Formularsteuerungen zu erstellen, und wie man diese mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerungen oft stark von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerungen. Dies wird in einem fortgeschrittenen Tutorial behandelt: [Anleitung zur Erstellung benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird durch den Wert `email` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut gesetzt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Element/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, damit er gültig ist. Alle anderen Inhalte führen dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Sie können dies im folgenden Screenshot sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Meldung "Bitte geben Sie eine E-Mail-Adresse ein." an.](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um mehrere durch Kommas getrennte E-Mail-Adressen im selben Eingabefeld einzugeben:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten — insbesondere Touchgeräte mit dynamischen Tastaturen wie Smartphones — könnte eine andere virtuelle Tastatur angezeigt werden, die für die Eingabe von E-Mail-Adressen besser geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem @-Zeichen standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie können Beispiele der grundlegenden Texteingabetypen unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzererfahrung für Benutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie oben zu sehen, bietet `email` — zusammen mit anderen neueren `input`-Typen — eine eingebaute _client-seitige_ Fehlervalidierung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer zu einer korrekten Formularausfüllung zu leiten, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten sofort nicht korrekt sind, anstatt auf eine Antwort des Servers zu warten.

Aber es _sollte nicht als_ eine umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen auf alle über Formulare übermittelten Daten sowohl _serverseitig_ als auch clientseitig durchführen, da clientseitige Validierung zu einfach auszuschalten ist, so dass böswillige Benutzer immer noch leicht schlechte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Idee zu bekommen, was passieren _könnte_; die Implementierung von serverseitiger Validierung geht über den Rahmen dieses Moduls hinaus, aber Sie sollten dies im Hinterkopf behalten.

Beachten Sie, dass `a@b` gemäß der standardmäßig bereitgestellten Beschränkungen eine gültige E-Mail-Adresse ist. Dies liegt daran, dass der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wie Sie diese Funktionen nutzen können, werden wir im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später besprechen.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudo-Klasse zutreffen, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft gibt `true` zurück.

## Suchfeld

Suchfelder sind dazu gedacht, um Suchfelder auf Seiten und Apps zu erstellen. Dieser Feldtyp wird durch den Wert `search` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld liegt in der Art und Weise, wie der Browser sein Erscheinungsbild gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken gerendert. In einigen Browsern wird ein "Ⓧ"-Löschsymbol angezeigt, das beim Anklicken das Feld von jedem Wert befreit. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat, und abgesehen von Safari wird es nur angezeigt, wenn das Feld fokussiert ist. Außerdem kann auf Geräten mit dynamischen Tastaturen die Enter-Taste der Tastatur als "**search**" angezeigt werden oder ein Lupensymbol anzeigen.

Ein weiteres erwähnenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um die automatische Vervollständigung über mehrere Seiten derselben Website anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Auf einem Touch-Gerät mit dynamischer Tastatur zeigen die meisten Geräte eine numerische Tastatur an, wenn `type="tel"` erkannt wird, was bedeutet, dass dieser Typ immer dann nützlich ist, wenn eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit kaufmännischem Und-Zeichen standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der Vielzahl an Telefonnummernformaten weltweit erzwingt diese Art von Feld keine Einschränkungen für den von einem Benutzer eingegebenen Wert (dies bedeutet, dass es Buchstaben etc. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, über die Sie in [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) mehr erfahren.

## URL-Feld

Ein spezieller Feldtyp für die Eingabe von URLs kann erstellt werden, indem `url` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungsbeschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardsystemtastatur häufig einige oder alle Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL gut geformt ist, bedeutet dies nicht unbedingt, dass sie auf einen tatsächlich existierenden Ort verweist!

## Zahlenfeld

Steuerungen zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type) von `number` erstellt werden. Diese Steuerung sieht aus wie ein Textfeld, erlaubt jedoch nur Fließkommazahlen und bietet in der Regel Tasten in Form eines Spinners, um den Wert der Steuerung zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die minimal und maximal erlaubten Werte einschränken, indem Sie die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute festlegen.

Sie können auch das `step`-Attribut verwenden, um die durch das Drücken der Spinnertasten verursachte Zunahme und Abnahme einzustellen. Standardmäßig validiert der Zahlen-Eingabetyp nur, ob die Zahl eine ganze Zahl ist, da das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut standardmäßig auf `1` gesetzt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert wie `step="0.01"` an, um die Fließkommastelle einzuschränken. Wenn ausgelassen, sind nur ganze Zahlen gültig, da der `step`-Wert standardmäßig auf `1` gesetzt ist.

Lassen Sie uns einige Beispiele betrachten:

Dieses Beispiel erstellt eine Zahlensteuerung, deren gültiger Wert auf ungerade Werte zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringerungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahlensteuerung, deren Wert auf jeden Wert zwischen `0` und `1` einschließlich beschränkt ist, und dessen Erhöhungs- und Verringerungstasten den Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp macht Sinn, wenn der Bereich der gültigen Werte begrenzt ist, wie z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, als dass inkrementelle Erhöhungen Sinn machen würden (wie beispielsweise USA-Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur, verzichtet jedoch auf die Spinner-UI-Funktion der Zahl.

## Schieberegler-Steuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Diese sehen Sie häufig auf Seiten wie Einkaufsseiten, auf denen Sie einen Maximalpreis als Filter festlegen möchten. Schauen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

Benutzungsweise sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird durch die {{HTMLElement("input")}} mit ihrem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut, gesetzt auf den Wert `range`, erstellt. Der Schieberegler-Daumen kann über Maus oder Berührung oder mit den Pfeiltasten der Tastatur bewegt werden.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Dazu wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step)-Attribute zu setzen, die die minimalen, maximalen und Inkrement-Werte festlegen, jeweils.

Schauen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen können, wie es gemacht wird. Zuerst der grundlegende HTML:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann und der in Schritten von 1000 zunimmt/abnimmt. Wir haben ihm einen Standardwert von `250000` gegeben, indem wir das `value`-Attribut verwendet haben.

Ein Problem bei Schiebereglern ist, dass sie keine visuelle Rückmeldung über den aktuellen Wert bieten. Daher haben wir ein {{htmlelement("output")}}-Element aufgenommen, um den aktuellen Wert zu enthalten. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in einem beliebigen Element anzeigen, aber `<output>` ist besonders — wie `<label>` — und kann ein `for`-Attribut haben, das es Ihnen ermöglicht, es mit dem Element oder den Elementen zu verknüpfen, von denen der Ausgabewert stammt.

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

Hier speichern wir Referenzen auf den `range`-Input und das `output` in zwei Variablen. Dann setzen wir sofort das `textContent` von `output` auf den aktuellen `value` des Inputs. Schließlich wird ein Event-Listener gesetzt, um sicherzustellen, dass wann immer der Schieberegler bewegt wird, das `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datums- und Zeitwähler

Für eine gute Benutzererfahrung beim Sammeln von Datums- und Zeitwerten ist es im Allgemeinen wichtig, eine Kalenderauswahl-UI bereitzustellen. Diese ermöglichen es den Benutzern, Daten auszuwählen, ohne einen Wechsel zur nativen Kalenderanwendung vornehmen zu müssen oder sie möglicherweise in unterschiedlichen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf folgende verschiedene Arten ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumssteuerungen sind verfügbar, um diese spezifische Art von Daten zu behandeln, indem Kalender-Widgets bereitgestellt werden und die Daten einheitlich gemacht werden.

Eine Datum- und Zeitsteuerung wird mit dem {{HTMLElement("input")}}-Element und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut erstellt, je nachdem, ob Sie Daten, Zeiten oder beides sammeln möchten. Hier ist ein Live-Beispiel:

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

Schauen wir uns die verschiedenen verfügbaren Typen in Kürze an. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere unter Berücksichtigung der Browser-Unterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den Links unten zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

### `date`

[`<input type="date">`](/de/docs/Web/HTML/Element/input/date) erstellt ein Widget zur Anzeige und Auswahl eines Datums (Jahr, Monat und Tag, ohne Zeit).

```html hidden
<label for="date">Enter the date:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) erstellt ein Widget zur Anzeige und Auswahl eines Datums mit Zeit, ohne spezifische Zeitzoneninformationen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Element/input/month) erstellt ein Widget zur Anzeige und Auswahl eines Monats mit einem Jahr.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Element/input/time) erstellt ein Widget zur Anzeige und Auswahl eines Zeitwertes. Während die Zeit im 12-Stunden-Format _angezeigt_ wird, erfolgt der _zurückgegebene Wert_ im 24-Stunden-Format.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Element/input/week) erstellt ein Widget zur Anzeige und Auswahl einer Kalenderwoche und deren Jahr.

Wochen beginnen am Montag und gehen bis Sonntag. Zusätzlich enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres — was möglicherweise nicht den ersten Tag des Jahres einschließt oder die letzten Tage des vorherigen Jahres umfassen kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränken von Datums-/Zeitwerten

Alle Datums- und Zeitsteuerungen können mit den [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max)-Attributen eingeschränkt werden, mit weiteren Einschränkungen, die über das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut möglich sind (dessen Wert je nach Eingabetyp variiert).

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

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Möglichkeiten, sie darzustellen: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color`-Steuerung kann unter Verwendung des {{HTMLElement("input")}}-Elements erstellt werden, wobei ihr [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Beim Klicken auf eine Farbauswahlsteuerung wird in der Regel die Standardfarbauswahlfunktionalität des Betriebssystems angezeigt, damit Sie wählen können. Der zurückgegebene Wert ist stets eine kleingeschriebene 6-stellige hexadezimale Farbe.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen, finden Sie unter [Testen Sie Ihre Fähigkeiten: HTML5 Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die HTML5-Formulareingabetypen angelangt. Es gibt noch einige andere Steuerungstypen, die aufgrund ihrer sehr spezifischen Verhaltensweisen nicht leicht gruppiert werden können, aber dennoch wichtig zu lernen sind. Diese behandeln wir im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript versenden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
