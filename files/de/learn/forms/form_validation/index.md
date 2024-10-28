---
title: Client-seitige Formularvalidierung
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 75d9aaedbc91ebd71e8cd2c67cce93898375b7ee
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Bevor Sie Daten an den Server senden, ist es wichtig, sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt sind und das richtige Format haben. Dies wird als **Client-seitige Formularvalidierung** bezeichnet und hilft sicherzustellen, dass die gesendeten Daten den Anforderungen der verschiedenen Formularelemente entsprechen. Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

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
        Verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist
        und wie verschiedene Techniken zur Implementierung angewendet werden können.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Kontrolle und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Erkennen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren. Wenn sie den Server erreicht und dann abgelehnt wird, wird durch eine Hin- und Rückfahrt zum Server eine merkliche Verzögerung verursacht, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Client-seitige Validierung _sollte jedoch nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten stets Sicherheitsprüfungen an allen formularübermittelten Daten auch auf der _Server-Seite_ durchführen, da die Client-seitige Validierung zu leicht umgangen werden kann und böswillige Benutzer immer noch problemlos fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung von Server-seitiger Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Website mit einem Registrierungsformular und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Für die Gültigkeit ist ein spezifisches Datenformat erforderlich).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die eingegebenen Daten haben nicht das richtige Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezielles Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet. Wenn Sie Daten eingeben, prüft der Browser und/oder der Webserver, ob die Daten im richtigen Format sind und den vom Entwickler festgelegten Einschränkungen entsprechen. Validierung, die im Browser durchgeführt wird, wird als **Client-seitige** Validierung bezeichnet, während die, die auf dem Server durchgeführt wird, als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, dass die Daten an den Server gesendet und (in der Regel) in einer Datenbank gespeichert werden; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und kann es erneut versuchen.

Wir möchten, dass das Ausfüllen von Webformularen so einfach wie möglich ist. Warum bestehen wir also darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format.** Unsere Anwendungen funktionieren nicht korrekt, wenn die Benutzerdaten im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir wollen die Daten unserer Benutzer schützen.** Unsere Benutzer zu zwingen, sichere Passwörter einzugeben, erleichtert den Schutz ihrer Kontoinformationen.
- **Wir wollen uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals auf Daten, die von der Client-Seite an Ihren Server übermittelt werden. Selbst wenn Ihr Formular korrekt validiert und Eingaben mit falschem Format auf der Client-Seite verhindert, kann ein böswilliger Benutzer den Netzwerkaufruf dennoch ändern.

## Verschiedene Arten der Client-seitigen Validierung

Im Web werden Sie zwei verschiedene Arten der Client-seitigen Validierung vorfinden:

- **Eingebaute Formularvalidierung** verwendet HTML-Formularvalidierungsfunktionen, die wir an vielen Stellen in diesem Modul besprochen haben. Diese Validierung erfordert in der Regel nicht viel JavaScript. Eingebaute Formularvalidierung hat eine bessere Leistung als JavaScript, ist aber nicht so anpassungsfähig wie JavaScript-Validierung.
- **JavaScript**-Validierung wird mit JavaScript programmiert. Diese Validierung ist vollkommen anpassbar, aber Sie müssen sie vollständig selbst erstellen (oder eine Bibliothek verwenden).

## Verwendung eingebauter Formularvalidierung

Eines der bedeutendsten Merkmale [moderner Formularelemente](/de/docs/Learn/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein. Dies wird durch die Verwendung von Validierungsattributen an Formularelementen erreicht. Wir haben viele dieser Attribute bereits zuvor im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge der Texteingabe (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer vorgegebener Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster beschreibt, das die eingegebenen Daten erfüllen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle oben genannten Regeln erfüllen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, trifft Folgendes zu:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen spezifischen Stil für gültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular einreichen, vorausgesetzt, es gibt nichts anderes, das ihn daran hindert (z.B. JavaScript).

Ist ein Element ungültig, trifft Folgendes zu:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse und manchmal anderen UI-Pseudoklassen (z.B. {{cssxref(":out-of-range")}}), abhängig vom Fehler, der es Ihnen ermöglicht, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular blockieren und eine Fehlermeldung anzeigen.

> [!NOTE]
> Es gibt mehrere Fehler, die verhindern, dass das Formular gesendet wird, einschließlich eines [`badInput`](/de/docs/Web/API/ValidityState/badInput), [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch), [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) oder [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow), [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch), [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`tooShort`](/de/docs/Web/API/ValidityState/tooShort), [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch), [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing) oder ein [`customError`](/de/docs/Web/API/ValidityState/customError).

## Beispiele für eingebaute Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startbeispiel

Lassen Sie uns mit einem einfachen Beispiel beginnen: einer Eingabe, bei der Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen. In diesem Beispiel gibt es eine einfache Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Senden-{{htmlelement("button")}}. Der Quellcode kann auf GitHub unter [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) gefunden werden, sowie ein Live-Beispiel unten.

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

Erstellen Sie zunächst eine Kopie von `fruit-start.html` in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das `required`-Attribut

Das einfachste HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut. Um eine Eingabe erforderlich zu machen, fügen Sie dieses Attribut dem Element hinzu. Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, wobei eine Fehlermeldung angezeigt wird, wenn die Eingabe leer ist. Während die Eingabe leer ist, wird sie ebenfalls als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Fügen Sie das Attribut `required` zu Ihrer Eingabe, wie unten gezeigt, hinzu.

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

Dieses CSS bewirkt, dass die Eingabe einen roten gestrichelten Rand hat, wenn sie ungültig ist, und einen subtileren schwarzen Rand, wenn sie gültig ist. Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im Beispiel unten aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html).

Versuchen Sie, das Formular ohne einen Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular nicht gesendet wird.

Das Vorhandensein des `required`-Attributs bei einem Element, das dieses Attribut unterstützt, bedeutet, dass das Element der {{cssxref(':required')}} Pseudoklasse entspricht, unabhängig davon, ob es einen Wert hat oder nicht. Wenn die {{HTMLElement("input")}} keinen Wert hat, entspricht die `input`-Eingabe der {{cssxref(':invalid')}} Pseudoklasse.

> [!NOTE]
> Für eine gute Benutzererfahrung sollten Sie den Benutzern anzeigen, wenn Formularfelder erforderlich sind. Es ist nicht nur eine gute Benutzererfahrung, es ist auch durch die WCAG- [Zugänglichkeits](/de/docs/Learn/Accessibility)-Richtlinien vorgeschrieben. Außerdem sollten Sie die Eingabe von Daten nur dann erzwingen, wenn Sie sie wirklich benötigen: Warum müssen Sie z.B. wirklich das Geschlecht oder die Anrede einer Person wissen?

### Validierung mit einem regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen zu vergleichen, sodass RegExps ideal für die Formularvalidierung sind und eine Vielzahl anderer Anwendungen in JavaScript haben.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren. Nachfolgend sind einige Beispiele aufgeführt, um Ihnen einen grundlegenden Eindruck davon zu vermitteln, wie sie funktionieren.

- `a` — Passend zu einem Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Passend zu `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passend zu `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passend zu `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Passend zu einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passend zu genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken. Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren. Aktualisieren Sie Ihr HTML, indem Sie das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut wie folgt hinzufügen:

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

Das gibt uns das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-pattern.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).)

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind großgeschrieben, aber wir haben den support für großgeschriebene sowie klein geschriebene Versionen mit einem zusätzlichen "Aa"-Muster innerhalb von eckigen Klammern unterstützt.

Versuchen Sie nun, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attributs auf einige der früher gesehenen Beispiele zu ändern und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige Ihrer eigenen zu schreiben und sehen Sie, wie es geht. Machen Sie sie im Idealfall fruchtbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht mit dem Muster des regulären Ausdrucks übereinstimmt, wird die `input`-Eingabe der {{cssxref(':invalid')}} Pseudoklasse entsprechen.

> [!NOTE]
> Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Die Angabe des `email`-Typs validiert beispielsweise die Eingabewerte anhand eines gut-formulierten E-Mail-Adressmusters oder eines Musters, das einer durch Kommas getrennten Liste von E-Mail-Adressen entspricht, wenn sie das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut haben.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut nicht.

### Längenbeschränkungen bei Ihren Eingaben

Sie können die Zeichenlänge aller Texteingabefelder, die durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt wurden, mit den Attributen [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Wert.

Browser lassen Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, auch eine Zeichenanzahl-Rückmeldung auf eine barrierefreie Art und Weise bereitzustellen und ihnen zu erlauben, ihren Inhalt auf die richtige Größe zu bearbeiten. Ein Beispiel dafür ist die Zeichengrenze beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längeneinschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert festgelegt wird. Sie werden nur für Benutzereingaben gemeldet.

### Werteinschränkungen bei Ihren Eingaben

Für Zahlenfelder (d.h. [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)) können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es ungültig.

Lassen Sie uns ein weiteres Beispiel betrachten. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie jetzt den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch das folgende:

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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und eine `maxlength` von sechs gegeben haben, was derselbe Länge wie Banane und Kirsche entspricht.
- Wir haben auch dem `number`-Feld eine `min` von eins und eine `max` von zehn gegeben.

Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verminderungs-Pfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes immer noch zu einem gültigen Wert führt.

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

> **Hinweis:** `<input type="number">` (und andere Typen wie `range` und `date`) können auch ein [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut haben, das angibt, um welches Inkrement sich der Wert erhöht oder verringert, wenn die Eingabesteuerelemente verwendet werden (wie die Auf-/Ab-Nummer-Schaltflächen). In dem obigen Beispiel haben wir kein `step`-Attribut hinzugefügt, daher ist der Wert standardmäßig `1`. Dies bedeutet, dass Fließkommazahlen wie 3,2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der eingebauten Validierungsfunktionen von HTML zu zeigen. Zuerst etwas HTML:

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte einzuschränken, und die Eingabetypen, die sie unterstützen.

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [full-example.html](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).)

## Validierung von Formularen mit JavaScript

Wenn Sie das Aussehen und Verhalten von nativen Fehlermeldungen kontrollieren möchten, müssen Sie JavaScript verwenden. In diesem Abschnitt werden wir die verschiedenen Möglichkeiten dazu betrachten.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API macht die folgenden Eigenschaften auf den oben genannten Elementen verfügbar.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Wenn das Steuerelement nicht für die Betrachtung von Validierungsbeschränkungen infrage kommt (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (ist gültig), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften beschreibt, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite finden; unten sind einige der gebräuchlicheren aufgeführt:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut festgelegt wurde, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut festgelegt wurde, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als das Maximum ist, das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut festgelegt wurde, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als das Minimum ist, das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut festgelegt wurde, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Format ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn das Format korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig gilt, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` in allen anderen Fällen. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular eingereicht wird; andernfalls `false`.

Die Constraint Validation API macht auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form)-Element verfügbar.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme hat; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen, und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, mit JavaScript-Code eine Validierungsfehlermeldung zu erzeugen, die von den standardmäßigen HTML-Validierungseinschränkungen nicht abgedeckt wird. Die Meldung wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementierung einer angepassten Fehlermeldung

Wie Sie in den Beispielen zu den HTML-Validierungseinschränkungen zuvor gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular einzureichen, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatischen Nachrichten haben zwei Nachteile:

- Es gibt keinen standardisierten Weg, ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot gezeigt.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist eine der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein einfaches Beispiel durchgehen, wie dies zu tun ist.

Wir beginnen mit ein bisschen HTML (fühlen Sie sich frei, dies in einer leeren HTML-Datei unterzubringen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Und wir fügen der Seite das folgende JavaScript hinzu:

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

Hier speichern wir eine Referenz zur Email-Eingabe und fügen ihr dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die Eigenschaft `validity.typeMismatch` der Email-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut-formatierten Email-Adresse entspricht. Wenn ja, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass die Übermittlung des Formulars fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die Eigenschaft `validity.typeMismatch` `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular eingereicht wird.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).)

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine angepasste Nachricht für einen bestimmten Art von Fehler (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu verwenden und sie dann mit `setCustomValidity()` zu ergänzen.

Hier demonstrieren wir, wie Sie die eingebaute Validierung von [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) erweitern können, um nur Adressen mit der Domäne `@example.com` zu akzeptieren. Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Bei jeder neuen Eingabe setzt der Code zuerst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft. Dann benutzt er `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist und, wenn ja, verlässt er den Ereignishandler sofort. Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, solange der eingegebene Text keine gültige Email-Adresse ist.

Sobald die Email-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem `setCustomValidity()` mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht mit `@example.com` endet.

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});
```

Sie können dieses Beispiel auf der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Link zur Live-Demo des Beispiels')}} ausprobieren. Versuchen Sie, eine ungültige Email-Adresse einzugeben, eine gültige Email-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

#### Ein detaillierteres Beispiel

Nun, da wir ein wirklich einfaches Beispiel gesehen haben, zeigen wir, wie wir diese API verwenden können, um einige etwas komplexere benutzerdefinierte Validierungen zu erstellen.

Zuerst das HTML. Fühlen Sie sich frei, dies zusammen mit uns zu erstellen:

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

Dieses einfache Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren; dies lässt unser Skript die Kontrolle über die Validierung übernehmen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw. Das bedeutet, dass auch wenn der Browser nicht automatisch die Validität des Formulars überprüft, bevor es seine Daten sendet, können Sie es selbst tun und das Formular entsprechend gestalten.

Unsere Eingabe zur Validierung ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir beabsichtigen, die Fehlermeldungen innerhalb eines `<span>`-Elements anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attribut ist auf diesem `<span>` eingestellt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen zur Verfügung gestellt wird, einschließlich dass sie für Bildschirmleser vorgetragen wird.

> [!NOTE]
> Ein wesentlicher Punkt ist, dass das Setzen des `novalidate`-Attributs auf dem Formular genau das ist, was das Formular daran hindert, seine eigenen Fehlermeldungsblasen anzuzeigen, und uns stattdessen erlaubt, die benutzerdefinierten Fehlermeldungen im DOM auf eine von uns gewählte Weise anzuzeigen.

Nun zu etwas grundlegendem CSS, um das Aussehen des Formulars ein wenig zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Die Kommentare erklären die Dinge recht gut, aber kurz:

- Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir jede angezeigte Fehlermeldung. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den passenden Fehler anzuzeigen.
- Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den passenden Fehler anzuzeigen und verhindern, dass das Formular mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) gesendet wird.
- Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu bestimmen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein mächtiges Werkzeug zur Hand, um die Formularvalidierung zu handhaben, sodass Sie über HTML und CSS hinaus enorme Kontrolle über die Benutzeroberfläche haben.

### Validierung von Formularen ohne eingebautes API

In einigen Fällen, wie [benutzerdefinierte Steuerelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API nicht verwenden oder wollen es nicht. Trotzdem können Sie JavaScript verwenden, um Ihre Formulare zu validieren, aber Sie müssen alles selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierung, reguläre Ausdrücke und so weiter. Es liegt bei Ihnen.
- Was soll ich tun, wenn das Formular nicht valide ist?
  - : Dies ist eindeutig eine Benutzeroberflächenfrage. Sie müssen entscheiden, wie das Formular sich verhalten soll. Soll das Formular die Daten trotzdem senden? Sollten Sie die Felder, die fehlerhaft sind, hervorheben? Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu begleiten. Sie sollten Vorabvorschläge machen, sodass sie wissen, was erwartet wird, sowie klare Fehlermeldungen. Wenn Sie in die Anforderungen an die Benutzeroberfläche der Formularvalidierung eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das nicht die Constraint Validation API verwendet

Um dies zu veranschaulichen, folgt ein vereinfachtes Beispiel des vorhergegangenen Beispiels ohne die Constraint Validation API.

Das HTML ist fast gleich; wir haben nur die HTML-Validierungsfunktionen entfernt.

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

Ebenso muss das CSS nicht sehr stark geändert werden; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und den Attribut-Selektor vermieden.

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

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

Wie Sie sehen können, ist es nicht so schwierig, ein eigenes Validierungssystem zu erstellen. Der schwierige Teil besteht darin, es so allgemein zu machen, dass es sowohl plattformübergreifend als auch für jedes Formular, das Sie möglicherweise erstellen, verwendbar ist. Es gibt viele Bibliotheken, die zur Formularvalidierung verfügbar sind, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber es erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Dazu sollten Sie:

- Explizite Fehlermeldungen anzeigen.
- Nachsichtig bezüglich des Eingabeformats sein.
- Genau darauf hinweisen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann es gesendet werden. Wir werden als Nächstes das [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
