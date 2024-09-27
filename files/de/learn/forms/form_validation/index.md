---
title: Client-seitige Formularvalidierung
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 1bdd4d495ca312bcff06068c8a9e8ab2687ff2b5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Bevor Daten an den Server gesendet werden, ist es wichtig sicherzustellen, dass alle erforderlichen Formularsteuerelemente ausgefüllt und im richtigen Format vorliegen. Dies wird als **client-seitige Formularvalidierung** bezeichnet und hilft sicherzustellen, dass die übermittelten Daten den Anforderungen der verschiedenen Formularsteuerelemente entsprechen. Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken zur Implementierung anwendet.
      </td>
    </tr>
  </tbody>
</table>

Die client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung; durch das Erkennen ungültiger Daten auf der Client-Seite kann der Benutzer sie sofort korrigieren.
Wenn die Daten erst zum Server gelangen und dann zurückgewiesen werden, entsteht durch den Rückweg zum Server und zurück zum Client eine spürbare Verzögerung, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Allerdings _sollte die client-seitige Validierung_ nicht als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsprüfungen für alle übermittelten Formulardaten sowohl auf der _Server-Seite_ als auch auf der Client-Seite durchführen, da die client-seitige Validierung zu leicht umgangen werden kann, sodass böswillige Benutzer weiterhin problemlos fehlerhafte Daten an Ihren Server senden können.
Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der server-seitigen Validierung ist jedoch etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Seite mit einem Registrierungsformular und Sie werden feststellen, dass sie eine Rückmeldung geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Nummer enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser und/oder der Webserver, ob die Daten im korrekten Format und innerhalb der vom Programm festgelegten Beschränkungen liegen. Eine im Browser durchgeführte Validierung wird als **client-seitige** Validierung bezeichnet, während eine auf dem Server durchgeführte Validierung als **server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung die Übermittlung der Daten an den Server und (in der Regel) die Speicherung in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Dafür gibt es drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, falsch sind oder vollständig fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Indem wir unsere Benutzer zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert wird und fehlerhafte Eingaben auf der Client-Seite verhindert werden, kann ein böswilliger Benutzer dennoch die Netzwerk-Anfrage ändern.

## Verschiedene Arten der client-seitigen Validierung

Es gibt zwei verschiedene Arten der client-seitigen Validierung, die Sie im Web antreffen:

- **Eingebaute Formularvalidierung** verwendet HTML-Formularvalidierungsfunktionen, die wir an vielen Stellen in diesem Modul besprochen haben.
  Diese Validierung erfordert in der Regel nicht viel JavaScript. Eingebaute Formularvalidierung bietet bessere Leistung als JavaScript, ist jedoch nicht so anpassbar wie JavaScript-Validierung.
- **JavaScript**-Validierung wird mit JavaScript codiert.
  Diese Validierung ist vollständig anpassbar, aber Sie müssen sie komplett erstellen (oder eine Bibliothek verwenden).

## Verwendung eingebauter Formularvalidierung

Eine der bedeutendsten Eigenschaften moderner [Formularsteuerelemente](/de/docs/Learn/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten ohne JavaScript zu validieren.
Dies geschieht durch die Verwendung von Validierungsattributen bei Formularelementen.
Viele dieser Attribute haben wir im Kurs früher gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Legt fest, ob ein Formularfeld ausgefüllt sein muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die Mindest- und Höchstlänge der Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Legt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) fest, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle durch die obigen Attribute festgelegten Regeln befolgen, gelten sie als gültig.
Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, trifft Folgendes zu:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular senden, vorausgesetzt, es gibt nichts anderes, das dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, trifft Folgendes zu:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse und manchmal auch anderen UI-Pseudoklassen (z.B. {{cssxref(":out-of-range")}}) je nach Fehler, die es Ihnen ermöglichen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular blockieren und eine Fehlermeldung anzeigen.

> [!NOTE]
> Es gibt mehrere Fehler, die das Absenden des Formulars verhindern, darunter ein [`badInput`](/de/docs/Web/API/ValidityState/badInput), [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch), [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) oder [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow), [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch), [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`tooShort`](/de/docs/Web/API/ValidityState/tooShort), [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch), [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) oder ein [`customError`](/de/docs/Web/API/ValidityState/customError).

## Beispiele für eingebaute Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute ausprobieren.

### Einfaches Startbeispiel

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, die Ihnen die Wahl lässt, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel umfasst eine einfache Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Sende-{{htmlelement("button")}}.
Den Quellcode finden Sie auf GitHub unter [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) und ein Live-Beispiel unten.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i-like" />
  <button>Submit</button>
</form>
```

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Simple_start_file", "100%", 80)}}

Erstellen Sie zunächst eine Kopie von `fruit-start.html` in einem neuen Verzeichnis auf Ihrem Computer.

### Das erforderliche Attribut

Das einfachste HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut.
Um eine Eingabe zwingend zu machen, fügen Sie dieses Attribut dem Element hinzu.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, sondern zeigt bei der Übermittlung eine Fehlermeldung an, wenn die Eingabe leer ist.
Solange sie leer ist, wird die Eingabe auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Fügen Sie ein `required` Attribut zu Ihrer Eingabe hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Beachten Sie das CSS, das in der Beispieldatei enthalten ist:

```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

Dieses CSS verursacht eine rot gestrichelte Umrandung der Eingabe, wenn sie ungültig ist, und eine subtilere schwarze Umrandung, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Versuchen Sie das neue Verhalten im untenstehenden Beispiel:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) sehen. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html).

Versuchen Sie, das Formular ohne Wert zu senden.
Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") angezeigt wird und das Formular nicht gesendet wird.

Das Vorhandensein des `required` Attributs auf jedem Element, das dieses Attribut unterstützt, bedeutet, dass das Element der {{cssxref(':required')}} Pseudoklasse entspricht, unabhängig davon, ob es einen Wert hat oder nicht. Wenn das {{HTMLElement("input")}} keinen Wert hat, entspricht die `input` der {{cssxref(':invalid')}} Pseudoklasse.

> [!NOTE]
> Für eine gute Benutzererfahrung sollten Sie dem Nutzer anzeigen, wenn Formulareingaben erforderlich sind.
> Es ist nicht nur eine gute Benutzererfahrung, sondern wird auch von den WCAG [Zugänglichkeits](/de/docs/Learn/Accessibility)-Richtlinien gefordert.
> Erfragen Sie auch nur die Daten, die Sie tatsächlich benötigen: Zum Beispiel, warum brauchen Sie wirklich jemanden, um das Geschlecht oder den Titel anzugeben?

### Validierung mit einem regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen zu matches, sodass regexps ideal für die Formularvalidierung sind und in JavaScript vielfältig eingesetzt werden können.

Regexps sind ziemlich komplex und wir beabsichtigen nicht, Ihnen in diesem Artikel eine vollständige Übersicht zu geben.
Hier sind einige Beispiele, die Ihnen eine grundlegende Vorstellung davon geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, möglicherweise gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, möglicherweise gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut wie folgt hinzuzufügen:

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Dies führt zu folgendem Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-pattern.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).)

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen der vier möglichen Werte: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß-/kleinschreibungssensitiv, aber wir haben es unterstützt, dass sowohl großgeschriebene als auch kleingeschriebene Versionen mit einem zusätzlichen "Aa"-Muster innerhalb von eckigen Klammern abgedeckt sind.

Versuchen Sie in diesem Stadium, den Wert im [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut so zu ändern, dass er einigen der Beispiele entspricht, die Sie zuvor gesehen haben, und schauen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es läuft.
Machen Sie sie, wenn möglich, obstbezogen, damit Ihre Beispiele Sinn ergeben!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird die `input` der {{cssxref(':invalid')}} Pseudoklasse entsprechen.

> [!NOTE]
> Einige {{HTMLElement("input")}}-Elementtypen müssen nicht mithilfe des [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attributs mit einem regulären Ausdruck validiert werden. Die Angabe des `email`-Typs validiert beispielsweise die Eingaben anhand eines gut formatierten E-Mail-Adressenmusters oder eines Musters, das einer durch Kommas getrennten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut nicht.

### Beschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder durch die Verwendung der Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) oder mehr als der Wert von [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength).

Browser lassen den Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, ist es auch, in einer zugänglichen Weise Rückmeldungen zur Zeichenzahl bereitzustellen und ihnen zu erlauben, ihren Inhalt auf Größe zu kürzen.
Ein Beispiel dafür ist die Grenze der Zeichenanzahl beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden niemals gemeldet, wenn der Wert programmatisch gesetzt wird. Sie werden nur für benutzerbereitgestellte Eingaben gemeldet.

### Begrenzung der Werte Ihrer Eingaben

Für Zahlenfelder (d.h. [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)), können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert enthält, der außerhalb dieses Bereichs liegt, wird es als ungültig betrachtet.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der Datei [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html).

Löschen Sie jetzt den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Hier sehen Sie, dass wir das `text`-Feld mit einem `minlength` und `maxlength` von sechs versehen haben, was die gleiche Länge wie "banana" und "cherry" ist.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement- / Dekrement-Pfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes immer noch zu einem gültigen Wert führt.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Hier ist das Beispiel im Live-Betrieb:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-length.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) sehen. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

> **Hinweis:** `<input type="number">` (und andere Typen, wie `range` und `date`) können auch ein [`step`](/de/docs/Web/HTML/Attributes/step) Attribut annehmen, das angibt, um welchen Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (z.B. die nach oben und unten gerichteten Zahlenbuttons).
> In dem obigen Beispiel haben wir kein `step` Attribut eingeschlossen, sodass der Wert standardmäßig `1` beträgt. Dies bedeutet, dass Fließkommazahlen, wie 3.2, auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel zur Darstellung der Verwendung von in HTML integrierten Validierungsfunktionen.
Zunächst etwas HTML:

```html
<form>
  <fieldset>
    <legend>
      Do you have a driver's license?<span aria-label="required">*</span>
    </legend>
    <!-- While only one radio button in a same-named group can be selected at a time,
         and therefore only one radio button in a same-named group having the "required"
         attribute suffices in making a selection a requirement -->
    <input type="radio" required name="driver" id="r1" value="yes" /><label
      for="r1"
      >Yes</label
    >
    <input type="radio" required name="driver" id="r2" value="no" /><label
      for="r2"
      >No</label
    >
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <!-- The pattern attribute can act as a fallback for browsers which
         don't implement the number input type but support the pattern attribute.
         Please note that browsers that support the pattern attribute will make it
         fail silently when used with a number field.
         Its usage here acts only as a fallback -->
    <input
      type="number"
      min="12"
      max="120"
      step="1"
      id="n1"
      name="age"
      pattern="\d+" />
  </p>
  <p>
    <label for="t1"
      >What's your favorite fruit?<span aria-label="required">*</span></label
    >
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" />
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your email address?</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

Und nun etwas CSS zur Gestaltung des HTML:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Dies rendert wie folgt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [full-example.html](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).)

## Validierung von Formularen mit JavaScript

Sie müssen JavaScript verwenden, wenn Sie das Aussehen und die Haptik der nativen Fehlermeldungen steuern möchten.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten dazu ansehen.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (stellt ein [`<button>`](/de/docs/Web/HTML/Element/button) Element dar)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (stellt ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element dar)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (stellt ein [`<input>`](/de/docs/Web/HTML/Element/input) Element dar)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (stellt ein [`<output>`](/de/docs/Web/HTML/Element/output) Element dar)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (stellt ein [`<select>`](/de/docs/Web/HTML/Element/select) Element dar)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (stellt ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element dar)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den obigen Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Kontrolle nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für eine Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seinen Einschränkungen entspricht (ist gültig), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie finden vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite; unten sind einige der häufigeren aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) übereinstimmt, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximal zulässige Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut angegeben wird, oder `false`, wenn er kürzer oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimal erforderliche Länge, die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angegeben wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als der maximale Wert, der durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegeben wird, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als der minimale Wert, der durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegeben wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular abgeschickt wird; ansonsten `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den obigen Elementen und dem [`form`](/de/docs/Web/HTML/Element/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; Wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und die angegebene Fehlermeldung angezeigt. Dadurch können Sie mit JavaScript-Code eine Validierungsfehlerbedingung festlegen, die über die durch HTML-Standardvalidierungsbeschränkungen angebotenen hinausgeht. Die Nachricht wird dem Benutzer beim Berichten des Problems angezeigt.

#### Implementieren einer angepassten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungseinschränkungen weiter oben gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Anzeige dieser Nachricht hängt vom verwendeten Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, um ihr Aussehen und ihre Haptik mit CSS zu ändern.
- Sie sind abhängig von der Spracheinstellung des Browsers, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein einfaches Beispiel durchgehen, um zu sehen, wie dies gemacht wird.

Wir beginnen mit einfachem HTML (fühlen Sie sich frei, dies in einer leeren HTML-Datei zu platzieren; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Und fügen Sie die folgende JavaScript-Datei der Seite hinzu:

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen ihr dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die Eigenschaft `validity.typeMismatch` der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine gut formatierte E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer angepassten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular abzusenden, die Eingabe fehlschlägt und die angepasste Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).)

#### Ein detaillierteres Beispiel

Nachdem wir ein wirklich einfaches Beispiel gesehen haben, sehen wir uns an, wie wir diese API nutzen können, um ein etwas komplexeres benutzerdefiniertes Validierungssystem aufzubauen.

Zuerst das HTML. Fühlen Sie sich frei, dies mit uns zu erstellen:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Dieses einfache Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren; dies erlaubt es unserem Skript, die Kontrolle über die Validierung zu übernehmen.
Allerdings deaktiviert dies nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw.
Das bedeutet, dass, obwohl der Browser nicht automatisch überprüft, ob das Formular gültig ist, bevor es abgeschickt wird, Sie es trotzdem selbst überprüfen und das Formular entsprechend stylen können.

Unser Eingabefeld, das wir validieren möchten, ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und für jede einen benutzerdefinierten Fehler anzeigen.

Wir möchten die Fehlermeldungen innerhalb eines `<span>`-Elements anzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung jedem Benutzer präsentiert wird, einschließlich der Nutzer von Bildschirmlesegeräten.

> [!NOTE]
> Ein wichtiger Punkt hier ist, dass das Setzen des `novalidate` Attributs auf dem Formular das ist, was die vom Browser bereitgestellten eigenen Fehlermeldungsblasen unterdrückt und uns stattdessen erlaubt, die benutzerdefinierten Fehlermeldungen auf eine eigene Weise im DOM anzuzeigen.

Nun zu etwas grundlegenden CSS, um das Formular etwas aufzuwerten und visuelles Feedback zu bieten, wenn die Eingabedaten ungültig sind:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* This is the style of our error messages */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Nun schauen wir uns das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert.

```js
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
```

Die Kommentare erklären die Dinge ziemlich gut, aber kurz gesagt:

- Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält.
  Wenn ja, entfernen wir jede angezeigte Fehlermeldung.
  Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.
- Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden.
  Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Absenden des Formulars.
- Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) sehen. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein mächtiges Werkzeug zur Formularvalidierung, das Ihnen enorme Kontrolle über die Benutzeroberfläche weit über das hinaus gibt, was Sie nur mit HTML und CSS tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie z.B. bei [benutzerdefinierten Steuerungen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), können oder möchten Sie möglicherweise nicht die Constraint Validation API verwenden. Sie können dennoch JavaScript verwenden, um Ihr Formular zu validieren, müssen jedoch Ihre eigene Lösung schreiben.

Um ein Formular zu validieren, stellen Sie sich die folgenden Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierungen, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - Dies ist eindeutig eine UI-Frage. Sie müssen entscheiden, wie das Formular sich verhält. Soll das Formular die Daten trotzdem senden?
    Sollten fehlerhafte Felder hervorgehoben werden?
    Sollten Fehlermeldungen angezeigt werden?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viel hilfreiche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu führen.
    Sie sollten Vorschläge im Voraus anbieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in die UI-Anforderungen der Formvalidierung eintauchen möchten, hier sind einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende Beispiel eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast dasselbe; wir haben nur die HTML-Validierungsfunktionen entfernt.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="text" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

In ähnlicher Weise muss das CSS nicht sehr stark geändert werden; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und den Attributselektor vermieden.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input#mail {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input#mail.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* This is the style of our error messages */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Die großen Änderungen befinden sich im JavaScript-Code, der viel mehr Arbeit übernehmen muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Die Schwierigkeit besteht darin, es so generisch zu machen, dass es sowohl plattformübergreifend als auch in jedem Formular eingesetzt werden kann, das Sie erstellen könnten. Es gibt viele Bibliotheken, die zur Validierung von Formularen zur Verfügung stehen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen verinnerlicht haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Styling und Fehlernachrichten anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Vergessen Sie niemals, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Stellen Sie dazu sicher, dass Sie:

- Eindeutige Fehlermeldungen anzeigen.
- Tolerant gegenüber dem Eingabeformat sind.
- Genau darauf hinweisen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular abgesendet werden.
Wir behandeln das [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) als nächstes.

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
