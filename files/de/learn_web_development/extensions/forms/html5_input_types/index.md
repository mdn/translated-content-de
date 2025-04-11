---
title: Die HTML5-Input-Typen
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) haben wir das {{htmlelement("input")}}-Element betrachtet und die ursprünglichen Werte des `type`-Attributs abgedeckt, die seit den frühen Tagen von HTML verfügbar waren. Jetzt schauen wir uns die Funktionalität einiger später hinzugefügter Input-Typen genauer an.

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
        Verstehen der neueren Input-Typ-Werte zur Erstellung nativer
        Formularsteuerelemente und Implementierung dieser mithilfe von HTML.
      </td>
    </tr>
  </tbody>
</table>

Da das Erscheinungsbild von HTML-Formularsteuerelementen sich erheblich von den Entwürfen eines Designers unterscheiden kann, entwickeln Webentwickler manchmal ihre eigenen benutzerdefinierten Formularsteuerelemente. Dies behandeln wir in einem fortgeschrittenen Tutorial: [Anleitung zur Erstellung benutzerdefinierter Formular-Widgets](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## E-Mail-Adressfeld

Dieser Feldtyp wird mit dem Wert `email` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden live-sample___email
<label for="email">Enter your email address:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Wird dieser [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) verwendet, muss der Wert eine E-Mail-Adresse sein, um gültig zu sein. Jeder andere Inhalt führt dazu, dass der Browser beim Abschicken des Formulars einen Fehler anzeigt. Dies können Sie in der untenstehenden Abbildung sehen.

![Eine ungültige E-Mail-Eingabe zeigt die Nachricht "Please enter an email address."](email_address_invalid.png)

Mit dem [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut in Kombination mit dem `email`-Input-Typ können mehrere, durch Kommas getrennte E-Mail-Adressen im selben Input eingegeben werden:

```html
<input type="email" id="email" name="email" multiple />
```

Auf einigen Geräten, insbesondere Touch-Geräten mit dynamischen Tastaturen wie Smartphones, könnte eine andere virtuelle Tastatur angezeigt werden, die besser zum Eingeben von E-Mail-Adressen geeignet ist, einschließlich der `@`-Taste:

![Firefox für Android E-Mail-Tastatur, mit dem at-Zeichen standardmäßig angezeigt.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Beispiele zu den grundlegenden Texteingabetypen finden Sie unter [basic input examples](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Dies ist ein weiterer guter Grund, diese neueren Input-Typen zu verwenden, um die Benutzererfahrung für Nutzer dieser Geräte zu verbessern.

### Client-seitige Validierung

Wie oben zu sehen ist, bietet `email` — zusammen mit anderen neueren `input`-Typen — eingebaute _Client-seitige_ Fehlerüberprüfung, die vom Browser durchgeführt wird, bevor die Daten an den Server gesendet werden. Dies ist eine hilfreiche Unterstützung, um Benutzer beim präzisen Ausfüllen eines Formulars zu leiten, und es kann Zeit sparen: Es ist nützlich zu wissen, dass Ihre Daten nicht korrekt sind, bevor sie an den Server gesendet werden, anstatt eine Runde bis zum Server warten zu müssen.

Aber es _sollte nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsüberprüfungen der an den _Server_ gesendeten Formulardaten durchführen, ebenso wie clientseitige, da die clientseitige Validierung zu einfach abgeschaltet werden kann, sodass böswillige Benutzer immer noch problemlos fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren_ könnte; die Implementierung der serverseitigen Validierung liegt außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

Beachten Sie, dass `a@b` laut den standardmäßig bereit gestellten Einschränkungen eine gültige E-Mail-Adresse ist. Das liegt daran, dass der `email`-Input-Typ standardmäßig Intranet-E-Mail-Adressen erlaubt. Um ein anderes Validierungsverhalten zu implementieren, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwenden. Sie können auch die Fehlermeldungen anpassen. Wie man diese Funktionen nutzt, erklären wir in dem Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) später.

> [!NOTE]
> Wenn die eingegebenen Daten keine E-Mail-Adresse sind, wird die {{cssxref(':invalid')}}-Pseudoklasse übereinstimmen und die [`validityState.typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft gibt `true` zurück.

## Suchfeld

Suchfelder sollen zur Erstellung von Suchfeldern auf Seiten und in Apps verwendet werden. Dieser Feldtyp wird durch die Verwendung des Wertes `search` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut festgelegt:

```html hidden
<label for="search">Enter a search term:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('search field','100%','50')}}

Der Hauptunterschied zwischen einem `text`-Feld und einem `search`-Feld liegt in der Art und Weise, wie der Browser seine Darstellung stylt. In einigen Browsern werden `search`-Felder mit abgerundeten Ecken dargestellt. In einigen Browsern wird ein "Ⓧ"-Symbol zur Löschung angezeigt, das den Inhalt des Feldes auf Klick löscht. Dieses Löschsymbol erscheint nur, wenn das Feld einen Wert hat und wird, außer in Safari, nur angezeigt, wenn das Feld fokussiert ist. Zusätzlich kann auf Geräten mit dynamischen Tastaturen die Enter-Taste der Tastatur "**search**" anzeigen oder ein Lupensymbol darstellen.

Ein weiteres bemerkenswertes Merkmal ist, dass die Werte eines `search`-Feldes automatisch gespeichert und über mehrere Seiten derselben Website für die Autovervollständigung wiederverwendet werden können; dies geschieht in den meisten modernen Browsern automatisch.

## Telefonnummernfeld

Ein spezielles Feld zur Eingabe von Telefonnummern kann erstellt werden, indem `tel` als Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs verwendet wird:

```html hidden
<label for="tel">Enter a telephone number:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('phone number field','100%','50')}}

Wenn auf ein Touch-Gerät mit einer dynamischen Tastatur zugegriffen wird, zeigen die meisten Geräte eine numerische Tastatur an, wenn `type="tel"` verwendet wird. Dies bedeutet, dass dieser Typ immer dann nützlich ist, wenn eine numerische Tastatur nützlich ist und nicht nur für Telefonnummern verwendet werden muss.

-![Firefox für Android E-Mail-Tastatur, mit dem Et-Zeichen standardmäßig angezeigt.](fx-android-tel-type-keyboard.jpg)

Aufgrund der Vielzahl an Telefonnummernformaten weltweit erzwingt dieser Feldtyp keine Einschränkungen bezüglich des vom Nutzer eingegebenen Wertes (dies bedeutet, dass er Buchstaben usw. enthalten kann).

Wie bereits erwähnt, kann das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut verwendet werden, um Einschränkungen durchzusetzen, die Sie in der [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) lernen werden.

## URL-Feld

Ein spezieller Feldtyp zur Eingabe von URLs kann erstellt werden, indem der Wert `url` für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut verwendet wird:

```html hidden
<label for="url">Enter a URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('URL field','100%','50')}}

Es fügt dem Feld spezielle Validierungseinschränkungen hinzu. Der Browser meldet einen Fehler, wenn kein Protokoll (wie `http:`) eingegeben wurde oder wenn die URL anderweitig fehlerhaft ist. Auf Geräten mit dynamischen Tastaturen zeigt die Standardtastatur häufig einige oder alle der Zeichen Doppelpunkt, Punkt und Schrägstrich als Standardtasten an.

> [!NOTE]
> Nur weil die URL korrekt formatiert ist, bedeutet das nicht unbedingt, dass sie auf einen tatsächlich vorhandenen Ort verweist!

## Numerisches Feld

Steuerelemente zur Eingabe von Zahlen können mit einem {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) von `number` erstellt werden. Dieses Steuerelement sieht wie ein Textfeld aus, erlaubt jedoch nur Gleitkommazahlen und bietet in der Regel Buttons in Form eines Spinners, um den Wert des Steuerelements zu erhöhen oder zu verringern. Auf Geräten mit dynamischen Tastaturen wird im Allgemeinen die numerische Tastatur angezeigt.

```html hidden live-sample___number
<label for="number">Enter a number:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Mit dem `number`-Input-Typ können Sie die minimalen und maximalen erlaubten Werte durch Setzen der [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute beschränken.

Sie können auch das `step`-Attribut verwenden, um den Inkrementwert für die Erhöhung und Verringerung durch Drücken der Spinner-Buttons festzulegen. Standardmäßig validiert der Zahleneingabetyp nur, ob die Zahl eine Ganzzahl ist, da das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut standardmäßig auf `1` gesetzt ist. Um Gleitkommazahlen zuzulassen, geben Sie `step="any"` oder einen spezifischen Wert an, wie z. B. `step="0.01"`, um das Gleitkommaformat einzuschränken. Wenn ausgelassen, werden, da der `step`-Wert standardmäßig `1` ist, nur ganze Zahlen als gültig betrachtet.

Werfen wir einen Blick auf einige Beispiele:

Dieses Beispiel erstellt ein Zahlensteuerfeld, dessen gültiger Wert auf einen ungeraden Wert zwischen `1` und `10` beschränkt ist. Die Erhöhungs- und Verringerungstasten ändern den Wert um `2`, beginnend mit dem `min`-Wert.

```html hidden live-sample___number2
<label for="number">Enter an odd number between 1 and 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Dieses Beispiel erstellt ein Zahlensteuerfeld, dessen Wert auf jeden Wert zwischen `0` und `1` einschließlich beschränkt ist und dessen Erhöhungs- und Verringerungstasten den Wert um `0,01` ändern.

```html hidden live-sample___number3
<label for="number">Enter a number between 0 and 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

Der `number`-Input-Typ ist sinnvoll, wenn der Bereich gültiger Werte begrenzt ist, wie z. B. das Alter oder die Körpergröße einer Person. Wenn der Bereich zu groß ist, um inkrementelle Erhöhungen sinnvoll zu gestalten (wie bei US-amerikanischen Postleitzahlen, die von `00001` bis `99999` reichen), könnte der `tel`-Typ eine bessere Option sein; er stellt die numerische Tastatur bereit, während auf die Spinner-Benutzeroberfläche für Zahleneingaben verzichtet wird.

## Schieberegler-Steuerelemente

Eine andere Möglichkeit, eine Zahl auszuwählen, ist die Verwendung eines **Schiebereglers**. Sie sehen diese oft auf Websites wie Einkaufsseiten, auf denen Sie einen maximalen Immobilienpreis festlegen möchten, um danach zu filtern. Sehen wir uns ein Live-Beispiel an, um dies zu veranschaulichen:

{{EmbedLiveSample('Slider controls','100%','50')}}

In der Anwendung sind Schieberegler weniger genau als Textfelder. Daher werden sie verwendet, um eine Zahl auszuwählen, deren _genauer_ Wert nicht unbedingt wichtig ist.

Ein Schieberegler wird mit der Verwendung des {{HTMLElement("input")}}-Elements erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `range` gesetzt ist. Der Schieberegler-Daumen kann mit der Maus oder durch Berühren oder mit den Pfeiltasten der Tastatur bewegt werden.

Es ist wichtig, Ihren Schieberegler richtig zu konfigurieren. Daher ist es sehr empfehlenswert, die [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribute festzulegen, die die minimalen, maximalen und inkrementellen Werte setzen.

Sehen wir uns den Code hinter dem obigen Beispiel an, damit Sie sehen können, wie es gemacht wird. Zunächst der grundlegende HTML-Code:

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

Dieses Beispiel erstellt einen Schieberegler, dessen Wert zwischen `50000` und `500000` variieren kann, der um 1000 schrittweise verändert wird. Wir haben ihm einen Standardwert von `250000` gegeben, unter Verwendung des `value`-Attributs.

Ein Problem mit Schiebereglern ist, dass sie keine Art von visueller Rückmeldung darüber bieten, welchen aktuellen Wert sie haben. Deshalb haben wir ein {{htmlelement("output")}}-Element eingefügt, um den aktuellen Wert anzuzeigen. Sie könnten einen Eingabewert oder das Ergebnis einer Berechnung in jedem Element anzeigen lassen, aber `<output>` ist etwas Besonderes — ähnlich wie `<label>` — und es kann ein `for`-Attribut annehmen, das es Ihnen erlaubt, es mit dem Element oder den Elementen zu verknüpfen, von denen der Ausgabe-Wert stammt.

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

Hier speichern wir Referenzen auf das `range`-Input und das `output` in zwei Variablen. Dann setzen wir sofort den [`textContent`](/de/docs/Web/API/Node/textContent) des `outputs` auf den aktuellen `value`-Wert des Inputs. Schließlich wird ein Event-Listener gesetzt, um sicherzustellen, dass, wann immer der Bereichsschieberegler bewegt wird, das `output`'s `textContent` auf den neuen Wert aktualisiert wird.

## Datum- und Zeit-Auswahlfelder

Im Allgemeinen ist es für eine gute Benutzererfahrung beim Erfassen von Datums- und Zeitwerten wichtig, eine Kalenderauswahl-UI bereitzustellen. Diese ermöglichen es Benutzern, Daten auszuwählen, ohne in eine native Kalenderanwendung wechseln zu müssen oder sie potenziell in verschiedenen Formaten einzugeben, die schwer zu parsen sind. Die letzte Minute des vorherigen Jahrtausends kann auf die folgenden verschiedenen Weisen ausgedrückt werden: `1999/12/31`, `23:59` oder `12/31/99T11:59PM`.

HTML-Datumssteuerungen sind verfügbar, um diese spezielle Art von Daten zu handhaben, indem Kalender-Widgets bereitgestellt werden und die Daten vereinheitlicht werden.

Ein Datum- und Zeit-Steuerelement wird mit dem {{HTMLElement("input")}}-Element und einem entsprechenden Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut erstellt, je nachdem, ob Sie Daten, Zeiten oder beides sammeln möchten. Hier ist ein Live-Beispiel:

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

Sehen wir uns die verschiedenen verfügbaren Typen kurz an. Beachten Sie, dass die Verwendung dieser Typen ziemlich komplex ist, insbesondere in Bezug auf die Browserunterstützung (siehe unten); um die vollständigen Details herauszufinden, folgen Sie den unten stehenden Links zu den Referenzseiten für jeden Typ, einschließlich detaillierter Beispiele.

### `date`

[`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) erstellt ein Widget, das ein Datum (Jahr, Monat und Tag, ohne Zeit) anzeigt und auswählt.

```html hidden
<label for="date">Enter the date:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) erstellt ein Widget, das ein Datum mit Uhrzeit anzeigt und auswählt, ohne spezifische Zeitzoneninformationen.

```html hidden
<label for="month">Enter the date and time:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month) erstellt ein Widget, um einen Monat mit einem Jahr anzuzeigen und auszuwählen.

```html hidden
<label for="month">Enter the month:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) erstellt ein Widget, um einen Zeitwert anzuzeigen und auszuwählen. Während die Zeit in einem 12-Stunden-Format _angezeigt_ werden kann, wird der _zurückgegebene Wert_ im 24-Stunden-Format ausgegeben.

```html hidden
<label for="time">Enter a time:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week) erstellt ein Widget, das eine Wochennummer und ihr Jahr anzeigt und auswählt.

Wochen beginnen am Montag und enden am Sonntag. Zusätzlich enthält die erste Woche 1 jedes Jahres den ersten Donnerstag dieses Jahres — der möglicherweise nicht den ersten Tag des Jahres enthält oder die letzten Tage des vorherigen Jahres enthalten kann.

```html hidden
<label for="week">Enter the week:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Eingeschränkte Datum-/Zeitwerte

Alle Datum- und Zeit-Steuerelemente können mittels der [`min`](/de/docs/Web/HTML/Reference/Attributes/min)- und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute eingeschränkt werden, mit weiteren Einschränkungen durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut (dessen Wert je nach Eingabetyp variiert).

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

## Farbwahler-Steuerelement

Farben sind immer ein wenig schwierig zu handhaben. Es gibt viele Möglichkeiten, sie auszudrücken: RGB-Werte (dezimal oder hexadezimal), HSL-Werte, Schlüsselwörter usw.

Ein `color`-Steuerelement kann mittels des {{HTMLElement("input")}}-Elements mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, das auf den Wert `color` gesetzt ist, erstellt werden:

```html hidden
<label for="color">Pick a color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Color picker control','100%','50')}}

Beim Klicken auf ein Farbkontrollfeld wird im Allgemeinen die standardmäßige Farbauswahlfunktionalität des Betriebssystems angezeigt, um eine Auswahl zu treffen. Der zurückgegebene Wert ist immer ein sechsstelliges, kleingeschriebenes hexadezimales Farbformat.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: HTML5 controls](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_HTML5_controls).

## Zusammenfassung

Damit sind wir am Ende unserer Tour der HTML5-Formulareingabetypen angekommen. Es gibt noch einige andere Steuerungstypen, die aufgrund ihrer sehr spezifischen Verhaltensweisen nicht leicht zu gruppieren sind, aber dennoch wichtig zu kennen sind. Diese werden wir im nächsten Artikel behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
