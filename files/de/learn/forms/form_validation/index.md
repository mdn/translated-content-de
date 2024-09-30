---
title: Client-side Form Validierung
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 1bdd4d495ca312bcff06068c8a9e8ab2687ff2b5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Bevor Daten an den Server gesendet werden, ist es wichtig, sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt sind und das richtige Format haben. Dies wird als **Client-seitige Formularvalidierung** bezeichnet und hilft sicherzustellen, dass die übermittelten Daten den Anforderungen entsprechen, die in den verschiedenen Formularelementen festgelegt sind. Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

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
        Das Verständnis, was Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken zur Implementierung anwenden kann.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Prüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Erkennen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren. Wenn die Daten zum Server gelangen und dann abgelehnt werden, entsteht eine merkliche Verzögerung durch die Hin- und Rückreise zum Server, um dann dem Benutzer mitzuteilen, dass er seine Daten korrigieren muss.

Jedoch sollte Client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer Sicherheitskontrollen für alle über Formulare eingereichte Daten auf der _Server-Seite_ **sowie auf der Client-Seite** durchführen, da die Client-seitige Validierung zu leicht zu umgehen ist, sodass bösartige Benutzer immer noch problemlos fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Rahmens dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht in dem Format eingeben, das sie erwarten. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die von Ihnen eingegebenen Daten haben nicht das richtige Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich).

Dies wird als **Formularvalidierung** bezeichnet. Wenn Sie Daten eingeben, überprüft der Browser und/oder der Webserver, ob die Daten im richtigen Format und innerhalb der vom Antrag festgelegten Einschränkungen liegen. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, ermöglicht die Anwendung das Einreichen der Daten an den Server und (normalerweise) das Speichern in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich machen. Warum also bestehen wir darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Unsere Benutzer zu zwingen, sichere Passwörter einzugeben, erleichtert es, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie bösartige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals auf Daten, die von der Client-Seite an Ihren Server übermittelt werden. Auch wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein bösartiger Benutzer immer noch die Netzwerkanforderung ändern.

## Verschiedene Arten der Client-seitigen Validierung

Es gibt zwei verschiedene Arten der Client-seitigen Validierung, denen Sie im Web begegnen werden:

- **Eingebaute Formularvalidierung** verwendet HTML-Formularvalidierungsfunktionen, über die wir an vielen Stellen in diesem Modul gesprochen haben.
  Diese Validierung erfordert in der Regel nicht viel JavaScript. Eingebaute Formularvalidierung hat eine bessere Leistung als JavaScript, ist jedoch nicht so anpassbar wie JavaScript-Validierung.
- **JavaScript**-Validierung wird mit JavaScript programmiert.
  Diese Validierung ist vollständig anpassbar, aber Sie müssen sie vollständig erstellen (oder eine Bibliothek verwenden).

## Verwendung der eingebauten Formularvalidierung

Eines der bedeutendsten Merkmale von [modernen Formularelementen](/de/docs/Learn/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen. Dies erfolgt durch die Verwendung von Validierungsattributen in Formularelementen. Wir haben viele hiervon früher im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular eingereicht werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max): Gibt die minimalen und maximalen Werte numerischer Eingabetypen an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Nummer, eine E-Mail-Adresse oder ein anderer spezifischer Vortyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, das die eingegebenen Daten einhalten müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die obigen Attribute spezifizierten Regeln einhalten, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gelten folgende Dinge:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, mit der Sie einen spezifischen Stil auf gültige Elemente anwenden können.
- Wenn der Benutzer versucht, die Daten zu senden, sendet der Browser das Formular, sofern nichts anderes das Senden verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten folgende Dinge:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse und manchmal anderen UI-Pseudoklassen (z. B. {{cssxref(":out-of-range")}}) abhängig vom Fehler, mit dem Sie einen spezifischen Stil auf ungültige Elemente anwenden können.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser das Formular und zeigt eine Fehlermeldung an.

> [!NOTE]
> Es gibt mehrere Fehler, die verhindern, dass das Formular gesendet wird, einschließlich eines [`badInput`](/de/docs/Web/API/ValidityState/badInput), [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch), [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) oder [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow), [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch), [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`tooShort`](/de/docs/Web/API/ValidityState/tooShort), [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch), [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) oder ein [`customError`](/de/docs/Web/API/ValidityState/customError).

## Beispiele für eingebautes Formularvalidierung

In diesem Abschnitt werden wir einige der Attribute testen, die wir oben besprochen haben.

### Einfaches Startdatei

Lassen Sie uns mit einem einfachen Beispiel beginnen: einem Eingabefeld, in dem Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen. Dieses Beispiel umfasst eine einfache Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Submit-{{htmlelement("button")}}. Den Quellcode finden Sie auf GitHub unter [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) und ein Live-Beispiel unten.

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

Beginnen Sie damit, eine Kopie von `fruit-start.html` in einem neuen Verzeichnis auf Ihrer Festplatte zu erstellen.

### Das Attribut required

Das einfachste HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut. Um eine Eingabe zwingend erforderlich zu machen, fügen Sie dieses Attribut dem Element hinzu. Wenn dieses Attribut festgelegt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, indem es eine Fehlermeldung bei der Übermittlung anzeigt, wenn die Eingabe leer ist. Während es leer ist, wird die Eingabe auch als ungültig angesehen, die der {{cssxref(':invalid')}} UI-Pseudoklasse entspricht.

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

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

Dieses CSS sorgt dafür, dass das Eingabefeld einen roten gestrichelten Rand hat, wenn es ungültig ist, und einen subtileren schwarzen Rand, wenn es gültig ist. Wir haben auch einen Verlaufs-Hintergrund hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html).

Versuchen Sie, das Formular ohne Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine standardmäßige Fehlermeldung ("Bitte füllen Sie dieses Feld aus") angezeigt wird und das Formular daran gehindert wird, gesendet zu werden.

Das Vorhandensein des `required`-Attributs an jedem Element, das dieses Attribut unterstützt, bedeutet, dass das Element der {{cssxref(':required')}}-Pseudoklasse entspricht, unabhängig davon, ob es einen Wert hat oder nicht. Wenn das {{HTMLElement("input")}} keinen Wert hat, entspricht die `input` der {{cssxref(':invalid')}}-Pseudoklasse.

> [!NOTE]
> Für eine gute Benutzererfahrung geben Sie dem Benutzer an, wann Formularelemente erforderlich sind. Es ist nicht nur eine gute Benutzererfahrung, es ist auch erforderlich durch die WCAG [Zugänglichkeit](/de/docs/Learn/Accessibility)-Richtlinien. Fordern Sie auch nur die Eingabe von Daten an, die Sie tatsächlich benötigen: Zum Beispiel, warum müssen Sie wirklich das Geschlecht oder den Titel einer Person kennen?

### Validieren gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (Regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu matchen. Regexp eignen sich hervorragend für die Formularvalidierung und dienen einer Vielzahl anderer Anwendungen in JavaScript.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen in diesem Artikel eine umfassende Kenntnis zu vermitteln. Unten sind einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Übereinstimmungen mit einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Übereinstimmungen mit `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Übereinstimmungen mit `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Übereinstimmungen mit `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Übereinstimmungen mit einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Übereinstimmungen genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y`, usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken. Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Reguläre Ausdruck]-Dokumentation (/de/docs/Web/JavaScript/Guide/Regular_expressions).

Implementieren wir ein Beispiel. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut hinzuzufügen, wie folgt:

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

Dies führt zu der folgenden Aktualisierung — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-pattern.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).)

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es unterstützt, dass sowohl Großbuchstaben- als auch Kleinbuchstabenversionen mit einem zusätzlichen "Aa"-Muster in eckigen Klammern unterstützt werden.

Versuchen Sie nun, den Wert im [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut zu ändern, um einigen der oben gesehenen Beispiele zu entsprechen, und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige Ihrer eigenen zu schreiben und sehen Sie, wie es läuft. Machen Sie sie so weit wie möglich obstbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird die `input` der {{cssxref(':invalid')}}-Pseudoklasse entsprechen.

> [!NOTE]
> Einige {{HTMLElement("input")}}-Elemente benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Die Spezifizierung des `email`-Typs validiert beispielsweise den Eingabewert gegen ein gut geformtes E-Mail-Adressmuster oder ein Muster, das eine durch Komma getrennte Liste von E-Mail-Adressen unterstützt, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt nicht das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut.

### Begrenzung der Länge Ihrer Einträge

Sie können die Zeichenzahl aller Textfelder, die durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt wurden, durch die Verwendung der [`minlength`](/de/docs/Web/HTML/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribute einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Wert.

Browser lassen oft nicht zu, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, auch eine zugängliche Zeichenanzahl-Rückmeldung zu geben und ihnen zu erlauben, ihren Inhalt auf die richtige Größe zu bearbeiten. Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies zu ermöglichen.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmatisch festgelegt wird. Sie werden nur für benutzergenerierte Eingaben gemeldet.

### Begrenzung der Werte Ihrer Einträge

Für Zahlenfelder (d.h. [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)) können die [`min`](/de/docs/Web/HTML/Attributes/min)- und [`max`](/de/docs/Web/HTML/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte anzugeben. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Schauen wir uns ein weiteres Beispiel an. Erstellen Sie eine neue Kopie der Datei [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html).

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch folgendes:

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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was der gleichen Länge wie Banane und Kirsche entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verminderungs-Pfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, daher wird das Entfernen des Werts dennoch als gültiger Wert angesehen.

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

Hier ist das Beispiel in Live-Ausführung:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-length.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

> **Anmerkung:** `<input type="number">` (und andere Typen, wie `range` und `date`) können auch ein [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut aufnehmen, das angibt, um welchen Schritt der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (z. B. die hoch- und runter-Pfeile der Zahlenschaltflächen). Im obigen Beispiel haben wir kein `step`-Attribut aufgenommen, sodass der Wert standardmäßig `1` beträgt. Dies bedeutet, dass Fließkommazahlen, wie 3.2, auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel zur Demonstration der Verwendung der eingebauten Validierungsfunktionen von HTML. Zuerst einige HTML:

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

Und jetzt etwas CSS, um das HTML zu stylen:

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

## Formulare mit JavaScript validieren

Sie müssen JavaScript verwenden, wenn Sie das Aussehen und die Haptik nativer Fehlermeldungen beeinflussen möchten. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, wie dies zu tun ist.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formular-DOM-Element-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die das Element nicht erfüllt (sofern vorhanden). Wenn das Element kein Kandidat für die Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Beschränkungen erfüllt (gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Eine vollständige Details aller verfügbaren Eigenschaften finden Sie auf der Referenzseite [`ValidityState`](/de/docs/Web/API/ValidityState); unten sind einige der häufigeren aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) nicht übereinstimmt, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut angegeben ist, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angegeben ist, oder `false`, wenn es länger oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegeben ist, oder `false`, wenn es kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegeben ist, oder `false`, wenn es größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine beliebige Beschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; anderenfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; `false` sonst.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form) Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` sonst. Wenn das Element ungültig ist, löst diese Methode auch ein [`ungültig`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Berichtet über ungültige Felder mittels Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um ein Validierungsfehler zu etablieren, der nicht durch die standardmäßigen HTML-Validierungsbeschränkungen abgedeckt ist. Die Meldung wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungsbeschränkungen früher gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular einzureichen, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, um ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Broтser-Lokalisierung ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung, die in einer anderen Sprache angezeigt wird, wie im folgenden Screenshot von Firefox zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist eine der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein einfaches Beispiel durchgehen, wie dies gemacht wird.

Wir beginnen mit etwas einfachem HTML (fühlen Sie sich frei, dies in einer leeren HTML-Datei zu speichern; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Und fügen Sie der Seite das folgende JavaScript hinzu:

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

Hier speichern wir eine Referenz auf die E-Mail-Eingabe und fügen dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Kodierungsteil überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine gut geformte E-Mail-Adresse entspricht. Wenn ja, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, so dass die Einreichung des Formulars fehlschlägt, wenn Sie versuchen, es zu senden, und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dadurch ist die Eingabe gültig, sodass das Formular gesendet wird.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).)

#### Ein detaillierteres Beispiel

Da wir jetzt ein sehr einfaches Beispiel gesehen haben, schauen wir, wie wir diese API verwenden können, um etwas kompliziertere benutzerdefinierte Validierung zu erstellen.

Zunächst das HTML. Bauen Sie dies gerne mit uns auf:

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

Dieses einfache Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren; dies lässt unser Skript die Kontrolle über die Validierung übernehmen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API oder die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw. Das bedeutet, dass Sie, obwohl der Browser die Gültigkeit des Formulars vor dem Senden seiner Daten nicht automatisch prüft, es trotzdem selbst tun und das Formular entsprechend stylen können.

Unser zu validierender Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `erforderlich` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir möchten die Fehlermeldungen in einem `<span>`-Element anzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierten Fehlermeldungen allen präsentiert werden, einschließlich des Vorlesens für Bildschirmleser-Benutzer.

> [!NOTE]
> Ein wesentlicher Punkt hierbei ist, dass das Setzen des `novalidate`-Attributs auf dem Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und uns erlaubt, stattdessen die benutzerdefinierten Fehlermeldungen im DOM auf eine Art anzuzeigen, die wir selbst wählen.

Nun zu etwas grundlegenden CSS, um das Aussehen des Formulars leicht zu verbessern und ein visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerprüfung implementiert.

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

- Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.
- Jedes Mal, wenn wir versuchen, das Formular zu senden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, erlauben wir den Formularversand. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Senden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).
- Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsfähiges Werkzeug, um die Formularvalidierung zu handhaben und ermöglicht es Ihnen, ein enormes Maß an Kontrolle über die Benutzeroberfläche, weit über das hinaus, was Sie nur mit HTML und CSS tun können.

### Validierung von Formularen ohne eingebautes API

In einigen Fällen, wie z.B. bei [benutzerdefinierten Bedienelementen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), können oder wollen Sie möglicherweise die Constraint Validation API nicht verwenden. Sie können JavaScript weiterhin verwenden, um Ihr Formular zu validieren, aber Sie müssen es selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhält. Wird das Formular trotzdem gesendet?
    Sollten die Fehlerfelder hervorgehoben werden?
    Sollten Fehlermeldungen angezeigt werden?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn dabei zu unterstützen, seine Eingaben zu korrigieren.
    Sie sollten vorab Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen. Wenn Sie sich mit den UI-Anforderungen zur Formularvalidierung beschäftigen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das nicht die Constraint Validation API verwendet

Um dies zu veranschaulichen, ist folgendes eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast das gleiche; wir haben nur die HTML-Validierungsfunktionen entfernt.

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

Ebenso muss das CSS nicht sehr verändert werden; wir haben einfach die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine reale Klasse umgewandelt und die Attributselektoren vermieden.

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

Die großen Änderungen sind im JavaScript-Code, der viel mehr Arbeit übernehmen muss.

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

Wie Sie sehen, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Die schwierige Aufgabe ist, es generisch genug zu machen, um es sowohl plattformübergreifend als auch für jedes Formular zu verwenden, das Sie möglicherweise erstellen. Es gibt viele Bibliotheken, die zur Formularvalidierung zur Verfügung stehen, wie z.B. [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, aber sie verlangt _immer_ von Ihnen, sorgfältig über den Benutzer nachzudenken. Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck sollten Sie:

- Explizite Fehlermeldungen anzeigen.
- Nachsichtig bezüglich des Eingabeformats sein.
- Genau angeben, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden. Wir werden als nächstes [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Erweitertes Thema

- [Wie man benutzerdefinierte Formularkontrollen baut](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaften-Kompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
