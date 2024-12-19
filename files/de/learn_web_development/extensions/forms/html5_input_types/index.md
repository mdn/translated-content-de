---
title: Die HTML5-Eingabetypen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir das {{htmlelement("input")}}-Element betrachtet und uns die ursprünglichen Werte des `type`-Attributs angesehen, die seit den frühen Tagen von HTML verfügbar sind. Nun werden wir die Funktionalität einiger später hinzugefügter Eingabetypen im Detail betrachten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Kenntnisse in HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen der neueren Eingabetypen-Werte zur Erstellung von nativen
        Formularelementen und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularelementen erheblich von den Spezifikationen eines Designers abweichen kann, erstellen Webentwickler manchmal eigene benutzerdefinierte Formularelemente. Wir behandeln dies in einem fortgeschrittenen Tutorial: [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp ist durch den Wert `email` für das Attribut [`type`](/de/docs/Web/HTML/Element/input#type) festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wenn dieser [`type`](/de/docs/Web/HTML/Element/input#type) verwendet wird, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeglicher anderer Inhalt führt dazu, dass der Browser beim Absenden des Formulars einen Fehler anzeigt. Dies können Sie in der folgenden Abbildung sehen.

![Ein ungültiges E-Mail-Eingabefeld, das die Meldung "Bitte geben Sie eine E-Mail-Adresse ein." zeigt.](email_address_invalid.png)

Sie können das Attribut [`multiple`](/de/docs/Web/HTML/Attributes/multiple) in Kombination mit dem E-Mail-Eingabetyp verwenden, um mehrere durch Kommas getrennte E-Mail-Adressen im selben Eingabefeld einzugeben:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten — insbesondere auf Touch-Geräten mit dynamischen Tastaturen wie Smartphones — könnte eine andere virtuelle Tastatur angezeigt werden, die besser für die Eingabe von E-Mail-Adressen geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem @-Zeichen standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Sie finden Beispiele für die grundlegenden Texteingabetypen unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Eingabetypen zu verwenden, um das Benutzererlebnis für Nutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie oben zu sehen ist, bietet `email` — zusammen mit anderen neueren `input`-Typen — eine eingebaute _client-seitige_ Fehlervalidierung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Es ist eine hilfreiche Unterstützung, um Nutzer anzuleiten, ein Formular korrekt auszufüllen, und es spart Zeit: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, bevor Sie auf die Antwort des Servers warten müssen.

Aber dies _sollte nicht_ als umfassendes Sicherheitsmaßnahmen betrachtet werden! Ihre Apps sollten immer Sicherheitsprüfungen aller über Formulare übermittelten Daten auf der _server-seitigen_ ebenso wie auf der client-seitigen Ebene durchführen, da client-seitige Validierungen zu leicht deaktiviert werden können, sodass böswillige Nutzer immer noch leicht fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Idee, was _passieren könnte_; die Implementierung einer server-seitigen Validierung liegt zwar außerhalb des Umfangs dieses Moduls, sollte jedoch stets berücksichtigt werden.

Beachten Sie, dass `a@b` eine gültige E-Mail-Adresse gemäß den voreingestellten Einschränkungen ist. Dies liegt daran, dass der E-Mail-Eingabetyp standardmäßig Intranet-E-Mail-Adressen zulässt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wir werden später im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) darüber sprechen, wie Sie diese Funktionen verwenden.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, stimmt die {{cssxref(':invalid')}}-Pseudoklasse überein, und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft gibt `true` zurück.

## Suchfeld

Suchfelder sind dafür gedacht, Suchfelder auf Seiten und Apps zu erstellen. Dieser Feldtyp wird durch den Wert `search` für das Attribut [`type`](/de/docs/Web/HTML/Element/input#type) festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld besteht darin, wie der Browser das Erscheinungsbild gestaltet. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein "Ⓧ"-Löschen-Symbol angezeigt, das beim Klicken das Feld von allen Werten leert. Dieses Löschen-Symbol erscheint nur, wenn das Feld einen Wert hat, und abgesehen von Safari wird es nur angezeigt, wenn das Feld im Fokus steht. Darüber hinaus kann auf Geräten mit dynamischen Tastaturen die Eingabetaste der Tastatur "**search**" anzeigen oder ein Lupensymbol darstellen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und wiederverwendet werden können, um eine Auto-Vervollständigung über mehrere Seiten derselben Website hinweg anzubieten; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zum Ausfüllen von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn über ein Touch-Gerät mit dynamischer Tastatur zugegriffen wird, zeigen die meisten Geräte ein numerisches Tastenfeld an, wenn `type="tel"` auftritt, was bedeutet, dass dieser Typ immer dann nützlich ist, wenn ein numerisches Tastenfeld nützlich ist, und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit dem kaufmännischen Und standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der Vielzahl von Telefonnummernformaten weltweit erzwingt dieser Feldtyp keine Einschränkungen des vom Benutzer eingegebenen Werts (dies bedeutet, dass er auch Buchstaben enthalten kann, usw.).

Wie bereits erwähnt, kann das Attribut [`pattern`](/de/docs/Web/HTML/Attributes/pattern) verwendet werden, um Einschränkungen durchzusetzen, was Sie in [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) erfahren werden.

## URL-Feld

Ein spezieller Feldtyp zum Eingeben von URLs kann erstellt werden, indem `url` als Wert des [`type`](/de/docs/Web/HTML/Element/input#type) Attributs verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt spezielle Validierungseinschränkungen zum Feld hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wird oder die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigen die Standardtastaturen oft einige oder alle der folgenden Tasten als Standardtasten an: Doppelpunkt, Punkt und Schrägstrich.

> [!NOTE]
> Nur weil die URL korrekt formatiert ist, bedeutet das nicht unbedingt, dass sie auf einen Ort verweist, der tatsächlich existiert!

## Numerisches Feld

Steuerelemente zum Eingeben von Zahlen können mit einem {{HTMLElement("input")}}-Element und einer [`type`](/de/docs/Web/HTML/Element/input#type)-Einstellung von `number` erstellt werden. Dieses Steuerelement sieht aus wie ein Textfeld, erlaubt jedoch nur Gleitkommazahlen und bietet normalerweise Schaltflächen in Form eines Spinners, um den Wert des Steuerelements zu erhöhen und zu verringern. Auf Geräten mit dynamischen Tastaturen wird in der Regel das numerische Tastenfeld angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Beim `number`-Eingabetyp können Sie die minimal und maximal erlaubten Werte durch Einstellen der [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute einschränken.

Sie können auch das Attribut `step` verwenden, um den durch Drücken der Spinner-Schaltflächen verursachten Erhöhungs- und Verringerungsschritt festzulegen. Standardmäßig validiert der Zahleneingabetyp nur, ob die Zahl eine ganze Zahl ist, da das Attribut [`step`](/de/docs/Web/HTML/Attributes/step) standardmäßig auf `1` gesetzt ist. Um Fließkommazahlen zuzulassen, geben Sie `step="any"` oder einen bestimmten Wert an, z. B. `step="0.01"`, um die Fließkommazahl zu beschränken. Wenn weggelassen, sind nur ganze Zahlen gültig, da der `step`-Wert standardmäßig `1` ist.

Schauen wir uns einige Beispiele an:

Dieses Beispiel erstellt ein Zahlensteuerelement, dessen gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringerungsschaltflächen ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt ein Zahlensteuerelement, dessen Wert auf einen beliebigen Wert zwischen `0` und `1` inkl. beschränkt ist, und dessen Erhöhungs- und Verringerungsschaltflächen seinen Wert um `0.01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Eingabetyp ergibt Sinn, wenn der Bereich der gültigen Werte begrenzt ist, wie das Alter oder die Größe einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu machen (wie z. B. PLZ in den USA, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er bietet das numerische Tastenfeld, verzichtet jedoch auf die Spinner-Benutzeroberfläche der Nummer.

## Slider-Steuerelemente

Eine weitere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Slider**. Diese sieht man ziemlich häufig auf Websites wie Shopping-Seiten, wo Sie einen maximalen Immobilienpreis zum Filtern festlegen möchten. Lassen Sie uns ein Live-Beispiel ansehen, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

Im Gebrauch sind Slider weniger präzise als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Slider wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `range` gesetzt ist. Der Slider-Thumb kann mit Maus oder Touch oder mit den Pfeiltasten der Tastatur bewegt werden.

Es ist wichtig, Ihren Slider richtig zu konfigurieren. Dazu wird dringend empfohlen, die Attribute [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step) zu setzen, welche jeweils die minimalen, maximalen und inkrementellen Werte festlegen.

Schauen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen, wie es gemacht wird. Zunächst einmal das grundlegende HTML:

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

Dieses Beispiel erstellt einen Slider, dessen Werte zwischen `50000` und `500000` variieren können und der in Schritten von 1000 auf- und absteigt. Wir haben ihm mit dem `value`-Attribut einen Standardwert von `250000` gegeben.

Ein Problem bei Slidern ist, dass sie keine visuelle Rückmeldung darüber bieten, welchen aktuellen Wert sie haben. Deshalb haben wir ein {{htmlelement("output")}}-Element hinzugefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen, aber `<output>` ist besonders — wie `<label>` — und kann ein `for`-Attribut haben, das Sie mit dem Element oder den Elementen verbindet, aus denen der Ausgabewert stammt.

Um den aktuellen Wert tatsächlich anzuzeigen und ihn zu aktualisieren, wenn er sich ändert, müssen Sie JavaScript verwenden, was mit ein paar Anweisungen erreicht werden kann:

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

Hier speichern wir Verweise auf die `range`-Eingabe und die `output` in zwei Variablen. Dann setzen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) des `output` auf den aktuellen `value` der Eingabe. Schließlich wird ein Event-Listener eingerichtet, um sicherzustellen, dass wann immer sich der Bereichsregler bewegt, der `textContent` des `output` auf den neuen Wert aktualisiert wird.

## Datums- und Uhrzeitwähler

Generell ist es wichtig, für ein gutes Benutzererlebnis beim Sammeln von Datums- und Uhrzeitwerten eine Kalenderauswahl-Benutzeroberfläche bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne auf eine native Kalenderanwendung umschalten zu müssen oder sie möglicherweise in unterschiedlichen Formaten einzugeben, was schwer zu analysieren ist. Die letzte Minute des vorherigen Jahrtausends kann beispielsweise in folgenden verschiedenen Weisen ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumssteuerelemente stehen zur Verfügung, um diese spezifische Art von Daten zu handhaben, indem Kalender-Widgets bereitgestellt und die Daten einheitlich gemacht werden.

Ein Datum- und Uhrzeitfeld wird mit dem {{HTMLElement("input")}}-Element und einem geeigneten Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut erstellt, abhängig davon, ob Sie Daten, Uhrzeiten oder beides sammeln möchten. Hier ist ein Live-Beispiel:

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

Schauen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Verwendung dieser Typen recht komplex ist, insbesondere in Bezug auf die Browserunterstützung (siehe unten); um die vollständigen Details zu erfahren, folgen Sie den Links unten zu den Referenzseiten für jeden Typ, einschließlich ausführlicher Beispiele.

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local) erstellt ein Widget, um ein Datum mit Uhrzeit ohne spezifische Zeitzoneninformationen anzuzeigen und auszuwählen.

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

[`<input type="time">`](/de/docs/Web/HTML/Element/input/time) erstellt ein Widget, um einen Zeitwert anzuzeigen und auszuwählen. Obwohl die Zeit im 12-Stunden-Format angezeigt werden kann, wird der _zurückgegebene Wert_ im 24-Stunden-Format angezeigt.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Element/input/week) erstellt ein Widget, um eine Woche und deren Jahr anzuzeigen und auszuwählen.

Wochen beginnen am Montag und enden am Sonntag. Zusätzlich enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres — der nicht den ersten Tag des Jahres enthalten muss oder die letzten Tage des Vorjahres enthalten kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Einschränkung von Datums-/Uhrzeitwerten

Alle Datum- und Zeitsteuerungen können durch die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) eingeschränkt werden, wobei weitere Einschränkungen durch das Attribut [`step`](/de/docs/Web/HTML/Attributes/step) möglich sind (dessen Wert je nach Eingabetyp variiert).

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

## Farbwähler

Farben sind immer ein wenig schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter usw.

Ein `color`-Steuerelement kann mit dem {{HTMLElement("input")}}-Element erstellt werden, wenn sein [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `color` gesetzt ist:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Ein Klick auf ein Farbauswahl-Steuerelement zeigt im Allgemeinen die Standard-Farbwählerfunktionalität des Betriebssystems an, die Sie zur Auswahl verwenden können. Der zurückgegebene Wert ist immer ein kleingeschriebener 6-stelliger hexadezimaler Farbwert.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: HTML5-Kontrollen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit sind wir am Ende unserer Tour der HTML5-Formulareingabetypen angekommen. Es gibt noch einige andere Steuerungstypen, die aufgrund ihres sehr spezifischen Verhaltens nicht einfach gruppiert werden können, aber dennoch wesentlich zu kennen sind. Wir behandeln diese im nächsten Artikel.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

### Erweiterte Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
