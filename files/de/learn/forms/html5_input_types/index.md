---
title: Die HTML5-Eingabetypen
slug: Learn/Forms/HTML5_input_types
l10n:
  sourceCommit: 45be179aadfa0500fe92598cbb0e76bdf7a87473
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/Basic_native_form_controls) haben wir uns das {{htmlelement("input")}} Element angesehen und die ursprünglichen Werte des `type` Attributs behandelt, die seit den Anfängen von HTML verfügbar sind. Jetzt werden wir die Funktionalität einiger Eingabetypen, die später hinzugefügt wurden, im Detail betrachten.

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
        Die neueren Eingabetypwerte verstehen, um native Formularelemente zu erstellen, und lernen, wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularelementen oft von den Spezifikationen eines Designers abweichen kann, entwickeln Webentwickler manchmal ihre eigenen benutzerdefinierten Formularelemente. Dies decken wir in einem fortgeschrittenen Tutorial ab: [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Geben Sie Ihre E-Mail-Adresse ein:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Element/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Sie können dies im folgenden Screenshot sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Bitte geben Sie eine E-Mail-Adresse ein."](email_address_invalid.png)

Sie können das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut in Kombination mit dem `email` Eingabetyp verwenden, um das Eingeben mehrerer durch Kommas getrennter E-Mail-Adressen im selben Eingabefeld zu ermöglichen:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten — insbesondere Touch-Geräten mit dynamischen Tastaturen wie Smartphones — wird möglicherweise eine andere virtuelle Tastatur bereitgestellt, die besser zum Eingeben von E-Mail-Adressen geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem 'at'-Zeichen standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie finden Beispiele für die grundlegenden Texteingabetypen unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, da sie die Benutzererfahrung für Nutzer dieser Geräte verbessern.

### Client-seitige Validierung

Wie Sie oben sehen können, bietet `email` — zusammen mit anderen neueren `input` Typen — eine eingebaute _client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es _ist_ eine hilfreiche Unterstützung, um Benutzer zu einer genauen Formularausfüllung zu leiten, und es kann Zeit sparen: Es ist nützlich, sofort zu wissen, dass Ihre Daten nicht korrekt sind, anstatt auf eine Serverrunde warten zu müssen.

Aber es _sollte nicht_ als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen auf alle formularübermittelten Daten sowohl auf der _Serverseite_ als auch auf der Clientseite durchführen, da die clientseitige Validierung zu leicht deaktiviert werden kann, sodass böswillige Benutzer immer noch leicht fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für eine Vorstellung davon, was _passieren_ könnte; die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

Beachten Sie, dass `a@b` gemäß den standardmäßig bereitgestellten Einschränkungen eine gültige E-Mail-Adresse ist. Dies liegt daran, dass der `email` Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden darüber sprechen, wie man diese Funktionen im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) später nutzt.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}} Pseudo-Klasse übereinstimmen, und die {{domxref('validityState.typeMismatch')}} Eigenschaft wird `true` zurückgeben.

## Suchfeld

Suchfelder sind dazu gedacht, Suchboxen auf Seiten und in Apps zu erstellen. Dieser Feldtyp wird durch Verwenden des Werts `search` für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut festgelegt:

```html hidden
<label for="search">Geben Sie einen Suchbegriff ein:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text` Feld und einem `search` Feld ist, wie der Browser dessen Erscheinungsbild gestaltet. In einigen Browsern werden `search` Felder mit abgerundeten Ecken gerendert. In einigen Browsern wird ein „Ⓧ“ Löschsymbol angezeigt, das das Feld beim Klicken von jedem Wert löscht. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat, und außer in Safari wird es nur angezeigt, wenn das Feld fokussiert ist. Zusätzlich kann auf Geräten mit dynamischen Tastaturen die Enter-Taste der Tastatur „**Search**“ lesen oder ein Lupensymbol anzeigen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search` Feldes automatisch gespeichert und für die Autovervollständigung auf mehreren Seiten derselben Website wiederverwendet werden können; dies geschieht normalerweise automatisch in den meisten modernen Browsern.

## Telefonnummerfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type) Attributs verwendet wird:

```html hidden
<label for="tel">Geben Sie eine Telefonnummer ein:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Beim Zugriff über ein Touch-Gerät mit einer dynamischen Tastatur zeigen die meisten Geräte eine numerische Tastatur an, wenn `type="tel"` auftritt, was bedeutet, dass dieser Typ nützlich ist, wann immer eine numerische Tastatur nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android Telefon-Tastatur, mit dem '&'-Zeichen standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der großen Vielfalt an Telefonnummernformaten weltweit erzwingt dieser Feldtyp keine Beschränkungen für den von einem Benutzer eingegebenen Wert (das bedeutet, es können auch Buchstaben eingeschlossen werden, etc.).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut verwendet werden, um Einschränkungen zu erzwingen, was Sie unter [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) lernen werden.

## URL-Feld

Ein spezieller Feldtyp zum Eingeben von URLs kann erstellt werden, indem der Wert `url` für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut verwendet wird:

```html hidden
<label for="url">Geben Sie eine URL ein:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungseinschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur oft einige oder alle der Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL gut geformt ist, bedeutet das nicht unbedingt, dass sie auf einen existierenden Ort verweist!

## Numerisches Feld

Steuerungen zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type) von `number` erstellt werden. Diese Steuerung sieht aus wie ein Textfeld, erlaubt jedoch nur Gleitkommazahlen und bietet normalerweise Schaltflächen in Form eines Spinners, um den Wert der Steuerung zu erhöhen oder zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Geben Sie eine Zahl ein:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number` Eingabetyp können Sie die zulässigen Mindest- und Höchstwerte festlegen, indem Sie die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute setzen.

Sie können auch das `step` Attribut verwenden, um die Änderungsrate festzulegen, die durch Drücken der Spinner-Tasten erfolgt. Standardmäßig validiert der Zahleneingabetyp nur, ob die Zahl eine Ganzzahl ist, da das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut standardmäßig auf `1` gesetzt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert wie `step="0.01"` an, um die Nachkommastelle zu beschränken. Wenn es weggelassen wird, sind nur ganze Zahlen gültig, da der `step` Wert standardmäßig `1` ist.

Sehen wir uns einige Beispiele an:

Dieses Beispiel erstellt eine Zahleneingabe, deren gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verminderungstasten ändern den Wert um `2`, beginnend mit dem `min` Wert.

```html hidden live-sample___number2
<label for="number">Geben Sie eine ungerade Zahl zwischen 1 und 10 ein:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt eine Zahleneingabe, deren Wert auf einen beliebigen Wert zwischen `0` und `1` inklusive beschränkt ist, und deren Erhöungs- und Verminderungstasten den Wert um `0,01` verändern.

```html hidden live-sample___number3
<label for="number">Geben Sie eine Zahl zwischen 0 und 1, inklusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number` Eingabetyp ist sinnvoll, wenn der Bereich gültiger Werte begrenzt ist, wie z.B. das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu machen (wie z.B. US-Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel` Typ die bessere Option sein; er bietet die numerische Tastatur und verzichtet auf die Spinner-Benutzeroberfläche des Zahlentyps.

## Schiebereglersteuerungen

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese ziemlich oft auf Websites wie Online-Shops, wo Sie einen maximalen Immobilienpreis zum Filtern festlegen möchten. Lassen Sie uns ein Live-Beispiel betrachten, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In Bezug auf die Nutzung sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _exakter_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit dem {{HTMLElement("input")}} erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `range` gesetzt ist. Der Schieberegler-Daumen kann per Maus oder Touch bzw. mit den Pfeiltasten der Tastatur bewegt werden.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Zu diesem Zweck wird dringend empfohlen, die [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step) Attribute festzulegen, die die Mindest-, Höchst- und Inkrementwerte festlegen.

Lassen Sie uns den Code hinter dem obigen Beispiel ansehen, damit Sie sehen, wie es gemacht wird. Zuerst das grundlegende HTML:

```html
<label for="price">Wählen Sie einen maximalen Hauspreis: </label>
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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` variieren kann und der in Schritten von 1000 in die eine oder andere Richtung verstellt werden kann. Wir haben ihm einen Standardwert von `250000` mittels des `value` Attributs gegeben.

Ein Problem bei Schiebereglern ist, dass sie keine visuelle Rückmeldung darüber bieten, welchen aktuellen Wert sie haben. Aus diesem Grund haben wir ein {{htmlelement("output")}} Element eingebunden, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in einem beliebigen Element anzeigen, aber `<output>` ist speziell - wie `<label>` - und kann ein `for` Attribut annehmen, das es Ihnen ermöglicht, es mit dem oder den Elementen zu verknüpfen, aus denen der Ausgabewert hervorging.

Um den aktuellen Wert tatsächlich anzuzeigen und zu aktualisieren, wenn er sich ändert, müssen Sie JavaScript verwenden, was mit einigen wenigen Anweisungen möglich ist:

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

Hier speichern wir Verweise auf den `range` Eingabetyp und die `output` in zwei Variablen. Dann setzen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) der `output` auf den aktuellen `value` der Eingabe. Schließlich wird ein Ereignislistener gesetzt, um sicherzustellen, dass jedes Mal, wenn der Schieberegler bewegt wird, der `textContent` der `output` auf den neuen Wert aktualisiert wird.

## Datum- und Uhrzeit-Auswahlfelder

Im Allgemeinen ist es für eine gute Benutzererfahrung beim Sammeln von Datum- und Uhrzeitwerten wichtig, eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne in eine native Kalenderanwendung umschalten zu müssen oder sie möglicherweise in unterschiedlichen Formaten einzugeben, die schwer zu analysieren sind. Die letzte Minute des vorherigen Jahrtausends kann in folgenden unterschiedlichen Formaten ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumssteuerungen sind verfügbar, um genau diese Art von Daten zu handhaben, indem Kalender-Widgets bereitgestellt werden und die Daten einheitlich gemacht werden.

Eine Datums- und Uhrzeitsteuerung wird mit dem {{HTMLElement("input")}} Element erstellt und durch einen geeigneten Wert für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut, je nachdem, ob Sie Daten, Uhrzeiten oder beides erfassen möchten. Hier ist ein Live-Beispiel:

```html hidden live-sample___date1
<label for="party">Wählen Sie ein Datum und eine Uhrzeit für Ihre Party:</label>
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

Lassen Sie uns kurz die verschiedenen verfügbaren Typen betrachten. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere unter Berücksichtigung der unterstützten Browser (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den untenstehenden Links zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) erstellt ein Widget zum Anzeigen und Auswählen eines Datums mit Uhrzeit ohne spezifische Zeitzoneninformationen.

```html hidden
<label for="month">Geben Sie das Datum und die Uhrzeit ein:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Element/input/month) erstellt ein Widget zum Anzeigen und Auswählen eines Monats mit einem Jahr.

```html hidden
<label for="month">Geben Sie den Monat ein:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Element/input/time) erstellt ein Widget zum Anzeigen und Auswählen eines Zeitwerts. Während die Zeit in der Anzeige im 12-Stunden-Format angezeigt werden kann, wird der zurückgegebene _Wert_ im 24-Stunden-Format dargestellt.

```html hidden
<label for="time">Geben Sie eine Uhrzeit ein:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Element/input/week) erstellt ein Widget zum Anzeigen und Auswählen einer Wochennummer und deren Jahr.

Wochen beginnen an einem Montag und gehen bis Sonntag. Zudem enthält die erste Woche 1 eines jeden Jahres den ersten Donnerstag dieses Jahres – die somit nicht den ersten Tag des Jahres enthalten muss oder die letzten Tage des vorherigen Jahres umfassen kann.

```html hidden
<label for="week">Geben Sie die Woche ein:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datum-/Uhrzeitwerten

Alle Datum- und Uhrzeitsteuerungen können mit den [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attributen eingeschränkt werden, mit weiteren Einschränkungen, die über das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut (dessen Wert je nach Eingabetyp variiert) möglich sind.

```html
<label for="myDate">Wann sind Sie diesen Sommer verfügbar?</label><br />
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

Farben sind immer etwas schwierig zu verwalten. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter und so weiter.

Eine `color` Steuerung kann mit dem {{HTMLElement("input")}} Element erstellt werden, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Wählen Sie eine Farbe:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Wenn Sie auf eine Farbsteuerung klicken, wird in der Regel die Standardfarbauswahl-Funktionalität des Betriebssystems angezeigt, um eine Farbe auszuwählen. Der zurückgegebene Wert ist immer eine aus sechs Zeichen bestehende Hexadezimalfarbe in Kleinbuchstaben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weiterführende Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: HTML5 Steuerungen](/de/docs/Learn/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit sind wir am Ende unserer Tour durch die HTML5-Formulareingabefelder angekommen. Es gibt noch einige andere Steuerelementtypen, die aufgrund ihres sehr spezifischen Verhaltens nicht leicht gruppiert werden können, aber dennoch wichtig sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente baut](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen mittels JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
