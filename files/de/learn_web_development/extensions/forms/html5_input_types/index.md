---
title: Die HTML5-Input-Typen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir das {{htmlelement("input")}}-Element betrachtet und die ursprünglichen Werte des `type`-Attributs behandelt, die seit den frühen Tagen von HTML verfügbar sind. Nun werden wir die Funktionalität einiger Input-Typen im Detail betrachten, die später hinzugefügt wurden.

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
        Die neuen Input-Typ-Werte verstehen, die zur Erstellung von nativen
        Formularsteuerelementen verfügbar sind, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerelementen oft stark von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerelemente. Wir behandeln dies in einem fortgeschrittenen Tutorial: [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jedes andere Format führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Dies sehen Sie im folgenden Screenshot.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein."](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Input-Typ verwenden, um die Eingabe mehrerer durch Kommas getrennter E-Mail-Adressen im gleichen Eingabefeld zu erlauben:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten – insbesondere auf Touchgeräten mit dynamischen Tastaturen wie Smartphones – wird möglicherweise ein anderes virtuelles Tastenfeld angezeigt, das besser für die Eingabe von E-Mail-Adressen geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem standardmäßig angezeigten At-Zeichen.](fx-android-email-type-keyboard.jpg)

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um die Benutzerfreundlichkeit für Nutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

`email` – zusammen mit anderen neueren `input`-Typen – bietet eine eingebaute _client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer zu leiten, ein Formular korrekt auszufüllen, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten sofort ungültig sind, anstatt auf eine Rückmeldung vom Server warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer Sicherheitsprüfungen auf alle formularübermittelten Daten _serverseitig_ als auch clientseitig durchführen, da die clientseitige Validierung zu einfach deaktiviert werden kann. So können böswillige Benutzer immer noch leicht schlechte Daten an Ihren Server senden. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Vorstellung davon, was _passieren könnte_; die Implementierung der serverseitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

Beachten Sie, dass `a@b` gemäß den standardmäßig bereitgestellten Einschränkungen eine gültige E-Mail-Adresse ist. Dies liegt daran, dass der `email`-Input-Typ standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden später im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) darüber sprechen, wie Sie diese Funktionen nutzen können.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}} Pseudoklasse übereinstimmen, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft gibt `true` zurück.

## Suchfeld

Suchfelder sollen verwendet werden, um Suchfelder auf Seiten und in Apps zu erstellen. Dieser Feldtyp wird durch die Verwendung des Wertes `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld besteht darin, wie der Browser sein Erscheinungsbild gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein „Ⓧ“-Löschen-Symbol angezeigt, das das Feld bei einem Klick von jedem Wert befreit. Dieses Löschen-Symbol erscheint nur, wenn das Feld einen Wert hat, und abgesehen von Safari wird es nur angezeigt, wenn das Feld fokussiert ist. Zusätzlich kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur "**search**" anzeigen, oder ein Lupen-Symbol darstellen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um über mehrere Seiten derselben Website eine Autovervollständigung anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zur Eingabe von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn über ein Touchgerät mit einer dynamischen Tastatur zugegriffen wird, zeigen die meisten Geräte eine numerische Tastatur an, wenn `type="tel"` verwendet wird, was bedeutet, dass dieser Typ immer dann nützlich ist, wenn eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit dem standardmäßig angezeigten Ampersand.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt der Telefonnummernformate auf der ganzen Welt erzwingt dieser Feldtyp keine Einschränkungen auf den vom Benutzer eingegebenen Wert (dies bedeutet, dass es auch Buchstaben enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, was Sie in der [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) lernen werden.

## URL-Feld

Ein spezieller Feldtyp zur Eingabe von URLs kann mit dem Wert `url` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt werden:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungseinschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen werden in der Regel einige oder alle Punkte, Doppelpunkte und Schrägstriche als Standardtasten angezeigt.

> [!NOTE]
> Nur weil die URL gut geformt ist, bedeutet das nicht unbedingt, dass sie auf einen tatsächlich existierenden Ort verweist!

## Numerisches Feld

Steuerelemente zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Dieses Steuerelement sieht wie ein Textfeld aus, erlaubt aber nur Fließkommazahlen und bietet in der Regel Schaltflächen in Form eines Spinners, um den Wert des Steuerelements zu erhöhen oder zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Beim `number`-Input-Typ können Sie die minimal und maximal erlaubten Werte durch Setzen der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute einschränken.

Sie können auch das `step`-Attribut verwenden, um den Erhöhungs- und Verringerungswert festzulegen, der durch das Drücken der Spinner-Schaltflächen verursacht wird. Standardmäßig validiert der Zahleneingabe-Typ nur, ob die Zahl eine Ganzzahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig auf `1` eingestellt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert an, wie `step="0.01"`, um das Fließkomma zu beschränken. Wenn weggelassen, sind nur ganze Zahlen gültig, da der `step`-Wert standardmäßig `1` ist.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt ein Zahlensteuerungselement, dessen gültiger Wert auf eine ungerade Zahl zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringern-Schaltflächen ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt ein Zahlensteuerungselement, dessen Wert auf einen beliebigen Wert zwischen `0` und `1` inklusive beschränkt ist, und dessen Erhöhungs- und Verringerungsschaltflächen seinen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Input-Typ macht Sinn, wenn die Bandbreite der gültigen Werte begrenzt ist, wie zum Beispiel das Alter oder die Körpergröße einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu machen (wie US-amerikanische Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet die numerische Tastatur, während auf die Spinner-UI-Funktion des Numbers verzichtet wird.

## Schieberegler-Steuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese häufig auf Websites wie Shopping-Sites, wo Sie einen maximalen Immobilienpreis zum Filtern einstellen möchten. Schauen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','80')}}

Was die Verwendung angeht, sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `range` gesetzt ist. Der Slider-Daumen kann mit der Maus oder durch Berühren oder mit den Pfeiltasten der Tastatur bewegt werden.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Aus diesem Grund wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-, [`max`](/de/docs/Web/HTML/Reference/Attributes/max)- und [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribute zu setzen, die die minimalen, maximalen und inkrementellen Werte festlegen.

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` liegen kann und der um jeweils 1000 zunimmt/abnimmt. Wir haben ihm einen Standardwert von `250000` gegeben, über das `value`-Attribut.

Ein Problem bei Schiebereglern ist, dass sie keine Art von visuellem Feedback über den aktuellen Wert bieten. Aus diesem Grund haben wir ein {{htmlelement("output")}}-Element eingefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist speziell — wie `<label>` — und kann ein `for`-Attribut aufnehmen, das es Ihnen ermöglicht, es mit dem oder den Elementen zu verknüpfen, aus denen der Ausgabewert stammt.

Um den aktuellen Wert anzuzeigen und zu aktualisieren, während er sich ändert, müssen Sie JavaScript verwenden, was mit einigen Anweisungen erreicht werden kann:

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

Hier speichern wir Referenzen auf das `range`-Input und die `output` in zwei Variablen. Dann setzen wir sofort das [`textContent`](/de/docs/Web/API/Node/textContent) der `output` auf den aktuellen `value` des Inputs. Schließlich wird ein Ereignislistener gesetzt, um sicherzustellen, dass jedes Mal, wenn der Schieberegler bewegt wird, das `textContent` der `output` auf den neuen Wert aktualisiert wird.

## Datums- und Zeitwähler

Im Allgemeinen ist es für eine gute Benutzererfahrung beim Erfassen von Datums- und Zeitwerten wichtig, ein Kalendarauswahl-UI bereitzustellen. Diese ermöglichen es den Benutzern, Daten auszuwählen, ohne kontextwechseln zu einer nativen Kalenderanwendung, oder sie potenziell in unterschiedlichen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf die folgenden unterschiedlichen Arten ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumssteuerungen sind verfügbar, um diese spezifische Art von Daten zu behandeln, indem sie Kalender-Widgets bereitstellen und die Daten einheitlich machen.

Ein Datums- und Zeitsteuerelement wird mit dem {{HTMLElement("input")}}-Element erstellt und einem passenden Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut, abhängig davon, ob Sie Daten, Zeiten oder beides sammeln möchten. Hier ist ein Live-Beispiel:

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

Schauen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, vor allem wenn man die Browserunterstützung berücksichtigt (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den Links unten zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

### `date`

[`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) erstellt ein Widget zum Anzeigen und Auswählen eines Datums (Jahr, Monat und Tag, ohne Zeit).

```html hidden
<label for="date">Enter the date:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget zum Anzeigen und Auswählen eines Datums mit Zeit, ohne spezifische Zeitzoneninformationen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month) erstellt ein Widget zum Anzeigen und Auswählen eines Monats mit einem Jahr.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget zum Anzeigen und Auswählen eines Zeitwerts. Obwohl die Zeit _angezeigt_ im 12-Stunden-Format werden kann, wird der _zurückgegebene Wert_ im 24-Stunden-Format angegeben.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget zum Anzeigen und Auswählen einer Kalenderwoche und ihres Jahres.

Wochen beginnen montags und laufen bis sonntags. Zusätzlich enthält Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres — was nicht den ersten Tag des Jahres umfassen muss oder die letzten Tage des Vorjahres enthalten kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Eingeschränkte Datums-/Uhrzeitwerte

Alle Datums- und Zeitsteuerungen können mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) eingeschränkt werden, wobei weitere Einschränkungen durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut möglich sind (dessen Wert je nach Eingabetyp variiert).

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

Farben sind immer etwas schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Ein `color`-Steuerelement kann mit dem {{HTMLElement("input")}}-Element erstellt werden, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribute auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Das Klicken auf ein Farbauswahl-Steuerelement zeigt im Allgemeinen die standardmäßige Farbwahlauswahl des Betriebssystems an, aus der Sie auswählen können. Der zurückgegebene Wert ist immer ein kleingeschriebener 6-Wert-hexadezimaler Farbwert.

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die HTML5-Formular-Input-Typen angelangt. Es gibt noch ein paar andere Steuerungstypen, die aufgrund ihres sehr spezifischen Verhaltens nicht einfach gruppiert werden können, aber dennoch wichtig sind, sie zu kennen. Diese behandeln wir im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
