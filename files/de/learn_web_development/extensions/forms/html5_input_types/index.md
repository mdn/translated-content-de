---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}}-Element angesehen und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den frühen Tagen von HTML verfügbar sind. Nun schauen wir uns detailliert die Funktionalität einiger Eingabetypen an, die später hinzugefügt wurden.

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
        Das Verständnis der neueren Eingabetypen für die Erstellung nativer
        Formularelemente zu verbessern und deren Implementierung in HTML zu lernen.
      </td>
    </tr>
  </tbody>
</table>

Da das Aussehen von HTML-Formularelementen von den Spezifikationen eines Designers stark abweichen kann, erstellen Webentwickler manchmal eigene benutzerdefinierte Formularelemente. Wir behandeln dies in einem fortgeschrittenen Tutorial: [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut gesetzt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Element/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser einen Fehler anzeigt, wenn das Formular abgeschickt wird. Das können Sie in der untenstehenden Abbildung sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein." an.](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut in Kombination mit dem `email`-Eingabetyp verwenden, um mehrere, durch Kommas getrennte E-Mail-Adressen in derselben Eingabe zu ermöglichen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten – insbesondere Touchgeräte mit dynamischen Tastaturen wie Smartphones – kann eine andere virtuelle Tastatur angezeigt werden, die besser geeignet ist, E-Mail-Adressen einzugeben, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem At-Zeichen als Standard.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Beispiele für die grundlegenden Texteingabetypen finden Sie unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzererfahrung für Nutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie Sie oben sehen können, bietet `email` – zusammen mit anderen neueren `input`-Typen – eingebaute _client-seitige_ Fehlerprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Nutzern zu helfen, ein Formular korrekt auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, anstatt auf den Hin- und Rückweg zum Server warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten stets Sicherheitsprüfungen auf alle Formular-Daten sowohl _serverseitig_ als auch client-seitig durchführen, da die client-seitige Validierung zu leicht abzuschalten ist, sodass böswillige Benutzer immer noch leicht schlechte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung von serverseitiger Validierung liegt außerhalb des Umfangs dieses Moduls, aber Sie sollten es berücksichtigen.

Beachten Sie, dass `a@b` gemäß der standardmäßig bereitgestellten Einschränkungen eine gültige E-Mail-Adresse ist. Dies liegt daran, dass der `email`-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden später im Artikel [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) darüber sprechen, wie man diese Funktionen verwendet.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dafür gedacht, um auf Seiten und in Apps Suchboxen zu erstellen. Dieser Feldtyp wird mit dem Wert `search` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut gesetzt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`- und einem `search`-Feld liegt darin, wie der Browser sein Aussehen darstellt. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken angezeigt. In einigen Browsern wird ein "Ⓧ"-Symbol zur Löschung angezeigt, das beim Klicken den Wert des Feldes löscht. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat und (außer bei Safari) wird es nur angezeigt, wenn das Feld fokussiert ist. Zusätzlich kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur als "**search**" angezeigt werden oder ein Lupensymbol darstellen.

Ein weiteres bemerkenswertes Feature ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um Auto-Vervollständigung über mehrere Seiten derselben Webseite anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zur Eingabe von Telefonnummern kann durch die Verwendung von `tel` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs erstellt werden:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn es über ein Touchgerät mit dynamischer Tastatur aufgerufen wird, zeigen die meisten Geräte eine numerische Tastatur an, wenn `type="tel"` vorhanden ist. Dies bedeutet, dass dieser Typ immer dann nützlich ist, wenn eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit dem Kaufmanns-Und als Standard.](fx-android-tel-type-keyboard.jpg)

Aufgrund der Vielzahl an Telefonnummernformaten weltweit erzwingt dieser Feldtyp keine Einschränkungen für den eingegebenen Wert durch den Benutzer (dies bedeutet, dass er Buchstaben enthalten kann, usw.).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, die Sie im [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) erfahren werden.

## URL-Feld

Ein spezieller Feldtyp zur Eingabe von URLs kann mit dem Wert `url` für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut erstellt werden:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt besondere Validierungseinschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen werden oft Tastaturtasten für Doppelpunkt, Punkt und Schrägstrich angezeigt.

> [!NOTE]
> Nur weil die URL gut geformt ist, bedeutet das nicht notwendigerweise, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Feld

Steuerelemente zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type) von `number` erstellt werden. Dieses Steuerungselement sieht aus wie ein Textfeld, erlaubt aber nur Fließkommazahlen und bietet normalerweise Schaltflächen in Form eines Spinners, um den Wert des Steuerungselements zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Eingabetyp können Sie die minimal und maximal zulässigen Werte einschränken, indem Sie die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute festlegen.

Sie können auch das `step`-Attribut verwenden, um das Inkrement, das durch Drücken der Spinner-Schaltflächen verursacht wird, festzulegen. Standardmäßig wird der `number`-Eingabetyp nur dann validiert, wenn die Zahl eine Ganzzahl ist, da das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut standardmäßig auf `1` festgelegt ist. Um Gleitkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert wie `step="0.01"` an, um die Gleitkommadarstellung einzuschränken. Wenn weggelassen, sind nur ganze Zahlen gültig, da der `step`-Wert standardmäßig `1` ist.

Lassen Sie uns einige Beispiele ansehen:

Dieses Beispiel erstellt ein Zahlensteuerungselement, dessen gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verminderungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt ein Zahlensteuerungselement, dessen Wert auf einen beliebigen Wert zwischen `0` und `1` inklusive beschränkt ist, und dessen Erhöhungs- und Verminderungstasten seinen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp ist sinnvoll, wenn der Bereich der gültigen Werte begrenzt ist, wie zum Beispiel das Alter oder die Körpergröße einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll erscheinen zu lassen (wie bei den USA-PLZs, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur, ohne die UI-Funktion des Zahlenspin zu nutzen.

## Schieberegler-Kontrollen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese ziemlich oft auf Seiten wie Shopping-Seiten, wo Sie einen maximalen Immobilienwert zum Filtern einstellen möchten. Schauen wir uns ein Live-Beispiel an, um dies zu verdeutlichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

Von der Nutzung her sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `range` gesetzt ist. Der Schieberegler-Daum kann per Maus oder Touch, oder mit den Pfeilen der Tastatur bewegt werden.

Es ist wichtig, den Schieberegler richtig zu konfigurieren. Es wird dringend empfohlen, dass Sie die [`min`](/de/docs/Web/HTML/Attributes/min)-, [`max`](/de/docs/Web/HTML/Attributes/max)- und [`step`](/de/docs/Web/HTML/Attributes/step)-Attribute festlegen, die die minimalen, maximalen und Inkrementwerte festlegen.

Schauen wir uns den Code des obigen Beispiels an, damit Sie sehen können, wie es gemacht wird. Zuerst das grundlegende HTML:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann, und der sich jeweils um 1000 erhöht/verringert. Wir haben ihm einen Standardwert von `250000` gegeben, unter Verwendung des `value`-Attributs.

Ein Problem mit Schiebereglern ist, dass sie keine visuelle Rückmeldung über den aktuellen Wert bieten. Deshalb haben wir ein {{htmlelement("output")}}-Element hinzugefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in einem beliebigen Element anzeigen, aber `<output>` ist besonders — genau wie `<label>` — und es kann ein `for`-Attribut haben, das es Ihnen erlaubt, es mit dem Element oder den Elementen zu verknüpfen, denen der Ausgangswert entstammt.

Um den aktuellen Wert tatsächlich anzuzeigen und ihn zu aktualisieren, wenn er sich ändert, müssen Sie JavaScript verwenden, was mit ein paar Befehlen erreicht werden kann:

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

Hier speichern wir Referenzen auf das `range`-Eingabe- und das `output` in zwei Variablen. Dann setzen wir sofort das [`textContent`](/de/docs/Web/API/Node/textContent) des `output` auf den aktuellen `value` der Eingabe. Schließlich wird ein Eventlistener gesetzt, um sicherzustellen, dass wann immer der Bereichs-Schieberegler bewegt wird, das `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datums- und Zeitwähler

Im Allgemeinen ist es für eine gute Benutzererfahrung bei der Erfassung von Datums- und Zeitwerten wichtig, eine Kalender-Auswahl-UI anzubieten. Diese ermöglicht den Nutzern, Daten auszuwählen, ohne dass sie auf eine native Kalenderanwendung wechseln müssen oder potenziell in unterschiedlichen Formaten eingeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf folgende verschiedene Arten ausgedrückt werden: `1999/12/31`, `23:59`, oder `12/31/99T11:59PM`.

HTML-Datumssteuerungselemente sind verfügbar, um diese spezifische Art von Daten zu verarbeiten, kalenderbasierte Widgets bereitzustellen und die Daten einheitlich zu machen.

Ein Datums- und Zeitsteuerungselement wird mit dem {{HTMLElement("input")}}-Element und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut erstellt, je nachdem, ob Sie Daten, Zeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

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

Schauen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Nutzung dieser Typen ziemlich komplex ist, insbesondere in Bezug auf die Browserunterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den Links unten zu den Referenzseiten für jeden Typ einschließlich detaillierter Beispiele.

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

[`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) erstellt ein Widget zur Anzeige und Auswahl eines Datums mit Zeit ohne spezielle Zeitzoneninformationen.

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

[`<input type="time">`](/de/docs/Web/HTML/Element/input/time) erstellt ein Widget zur Anzeige und Auswahl eines Zeitwerts. Während die Zeit im 12-Stunden-Format _angezeigt_ wird, wird der _zurückgegebene Wert_ im 24-Stunden-Format angezeigt.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Element/input/week) erstellt ein Widget zur Anzeige und Auswahl einer Woche und ihres Jahres.

Wochen beginnen am Montag und enden am Sonntag. Darüber hinaus enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres — was möglicherweise nicht den ersten Tag des Jahres umfasst oder die letzten Tage des vorangegangenen Jahres einschließen könnte.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datums-/Uhrzeitwerten

Alle Datums- und Zeitsteuerungselemente können durch die [`min`](/de/docs/Web/HTML/Attributes/min)- und [`max`](/de/docs/Web/HTML/Attributes/max)-Attribute eingeschränkt werden, mit weiteren Einschränkungen durch das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut (dessen Wert nach Eingabetyp variiert).

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

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color`-Steuerung kann erstellt werden, indem das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `color` gesetzt wird:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Ein Klick auf eine Farbsteuerung zeigt im Allgemeinen die Standard-Farbwählerfunktionalität des Betriebssystems an, aus der Sie auswählen können. Der zurückgegebene Wert ist immer ein kleingeschriebener 6-stelliger hexadezimaler Farbwert.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: HTML5-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die HTML5-Formulareingabetypen angelangt. Es gibt noch einige andere Steuerelementtypen, die aufgrund ihrer sehr spezifischen Funktionen nicht einfach gruppiert werden können, aber dennoch wichtig zu kennen sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
