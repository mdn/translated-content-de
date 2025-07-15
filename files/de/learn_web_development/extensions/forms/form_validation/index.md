---
title: Formularüberprüfung auf der Clientseite
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente vor dem Absenden der Benutzereingaben an den Server ausgefüllt und im korrekten Format vorliegen. Diese **Formularüberprüfung auf der Clientseite** hilft dabei, sicherzustellen, dass die eingegebenen Daten den Anforderungen entsprechen, die in den verschiedenen Formularelementen festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele zur Formularüberprüfung auf der Clientseite.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Formularüberprüfung auf der Clientseite ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Überprüfung auf der Clientseite ist eine erste Überprüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung. Dadurch können Benutzer ungültige Daten sofort korrigieren.
Wenn diese Daten den Server erreichen und dort abgelehnt werden, entsteht eine spürbare Verzögerung durch die Rückreise zum Server und zurück zur Clientseite, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren muss.

Allerdings _sollte die Überprüfung auf der Clientseite nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer eine Überprüfung, einschließlich Sicherheitsprüfungen, bei allen formularübermittelten Daten sowohl auf der _Serverseite_ **als auch** auf der Clientseite durchführen, da die Überprüfung auf der Clientseite zu leicht zu umgehen ist. So können böswillige Benutzer immer noch problemlos fehlerhafte Daten an Ihren Server senden.

> [!NOTE]
> Lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Überprüfung auf der Serverseite geht etwas über den Umfang dieses Moduls hinaus, sollte jedoch berücksichtigt werden.

## Was ist Formularüberprüfung?

Gehen Sie auf eine beliebte Webseite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Ihnen Feedback gibt, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie dürfen dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularüberprüfung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der durch die Anwendung festgelegten Einschränkungen vorliegen. Die im Browser durchgeführte Überprüfung wird als **Client-seitige** Überprüfung bezeichnet, während die Überprüfung auf dem Server als **Server-seitige** Überprüfung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die Überprüfung auf der Clientseite.

Sind die Informationen korrekt formatiert, erlaubt die Anwendung, die Daten an den Server zu übermitteln und (in der Regel) in einer Datenbank zu speichern; sind die Informationen nicht korrekt formatiert, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum halten wir trotzdem an der Überprüfung unserer Formulare fest?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht ordnungsgemäß, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, fehlerhaft sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Indem wir unsere Benutzer dazu zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals auf Daten, die vom Client an Ihren Server gesendet werden. Auch wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Clientseite verhindert, kann ein böswilliger Benutzer immer noch die Netzwerk-Anfrage verändern.

## Verschiedene Arten der Überprüfung auf der Clientseite

Es gibt zwei verschiedene Arten der Überprüfung auf der Clientseite, die Sie im Web antreffen werden:

- **HTML-Formularüberprüfung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die Benutzerdaten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularüberprüfung**
  JavaScript wird im Allgemeinen verwendet, um die HTML-Formularüberprüfung zu verbessern oder anzupassen.

Die Überprüfung auf der Clientseite kann mit wenig bis gar keinem JavaScript durchgeführt werden. Die HTML-Überprüfung ist schneller als JavaScript, lässt sich jedoch weniger anpassen als die JavaScript-Überprüfung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann bei Bedarf die Benutzererfahrung mit JavaScript zu verbessern.

## Verwendung der integrierten Formularüberprüfung

Eine der wichtigsten Funktionen von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten zu überprüfen, ohne dabei auf JavaScript angewiesen zu sein.
Dies wird durch die Verwendung von Überprüfungsattributen an Formularelementen erreicht.
Viele dieser Attribute haben wir in früheren Schulungskursen bereits kennengelernt, aber zur Auffrischung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen sowie das Inkrement oder den Schritt für Werte, beginnend mit dem Minimum, an.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreinstellungstyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten entsprechen müssen.

Wenn die in einem Formularfeld eingegebenen Daten allen durch die auf das Feld angewendeten Attribute festgelegten Regeln entsprechen, gelten sie als gültig. Andernfalls werden sie als ungültig betrachtet.

Wenn ein Element gültig ist, sind die folgenden Dinge zutreffend:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden. Die Steuerung entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Kontrollelement interagiert hat, und je nach Eingabetyp und Attributen können andere UI-Pseudoklassen wie {{cssxref(":in-range")}} übereinstimmen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular abschicken, sofern nichts anderes dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, sind die folgenden Dinge zutreffend:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Kontrollelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Abhängig von dem Fehler können auch andere UI-Pseudoklassen wie {{cssxref(":out-of-range")}} übereinstimmen. Diese ermöglichen Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für die integrierte Formularüberprüfung

In diesem Abschnitt werden wir einige der Attribute testen, die wir oben besprochen haben.

### Einfaches Startbeispiel

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, mit der Sie wählen können, ob Sie Banane oder Kirsche bevorzugen.
Dieses Beispiel umfasst ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Senden-{{htmlelement("button")}}.

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

Beginnen Sie, indem Sie eine Kopie der [`fruit-start.html` Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte speichern.

### Das erforderliche Attribut

Ein häufiges HTML-Überprüfungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element als erforderlich zu markieren.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht übermittelt und zeigt eine Fehlermeldung bei der Übermittlung an, wenn die Eingabe leer ist.
Solange die Eingabe leer bleibt, wird sie auch als ungültig betrachtet und entspricht daher der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein beliebiges Kontrollkästchen in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eines davon angekreuzt sein, damit die Gruppe gültig ist. Das angekreuzte Kontrollkästchen muss nicht dasjenige sein, bei dem das Attribut gesetzt ist.

> [!NOTE]
> Fordern Sie nur die Eingaben an, die Sie benötigen: Ist es beispielsweise wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzer darüber zu informieren, wann Formularelemente erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern auch erforderlich durch die WCAG [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) Richtlinien.

Wir fügen CSS-Stile hinzu, die basierend darauf angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS sorgt dafür, dass die Eingabe eine rote gestrichelte Umrandung erhält, wenn sie ungültig ist, und eine subtilere schwarze durchgezogene Umrandung, wenn sie gültig ist.
Wir haben auch ein Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Testen Sie das neue Verhalten im folgenden Beispiel:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular des [Live-`required`-Beispiels](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne Wert abzusenden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular daran gehindert wird, gesendet zu werden. Sie können den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) auch einsehen.

### Überprüfung gegen einen regulären Ausdruck

Ein weiteres nützliches Überprüfungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erfordert.
Ein regulärer Ausdruck (Regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Zeichenfolgen zu überprüfen, sodass Regexp ideal für Formularüberprüfungen geeignet sind und eine Vielzahl anderer Verwendungen in JavaScript bieten.

Reguläre Ausdrücke sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen diese erschöpfend in diesem Artikel beizubringen.
Im Folgenden sind einige Beispiele aufgeführt, die Ihnen eine grundlegende Vorstellung davon geben, wie sie funktionieren.

- `a` — Passt auf ein Zeichen, das `a` ist (nicht `b`, nicht `aa` usf.).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, gefolgt von einem optionalen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt auf `a`, gefolgt von jeder Anzahl an `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` etc.).
- `a|b` — Passt auf ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau auf `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut so hinzuzufügen:

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

Dies ergibt das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß- und kleinschreibungssensitiv, aber wir haben es so konfiguriert, dass sowohl die großgeschriebenen als auch die kleingeschriebenen Versionen mit einem zusätzlichen "Aa"-Muster in eckigen Klammern unterstützt werden.

An diesem Punkt sollten Sie den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs so ändern, dass er einigen der zuvor gesehenen Beispiele entspricht, und dann untersuchen, wie dies die Werte beeinflusst, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige eigene Werte zu schreiben, und sehen Sie, wie es geht.
Machen Sie sie wenn möglich fruchtbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}}-Elements nicht mit dem Muster des regulären Ausdrucks übereinstimmt, entspricht das Eingabefeld der {{cssxref(':invalid')}} Pseudoklasse. Ist das Feld leer und das Element nicht erforderlich, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck überprüft zu werden. Beispielsweise überprüft die Angabe des `email`-Typs den Wert der Eingaben auf ein gut formatiertes E-Mail-Adressmuster oder ein Muster, das einer durch Komma getrennten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Begrenzung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller Textfelder, die mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt wurden, durch die Verwendung der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) oder mehr als der Wert von [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength).

Browser lassen den Benutzer oft nicht einen längeren Wert als den erwarteten in Textfeldern eingeben. Eine bessere Benutzererfahrung, als nur `maxlength` zu verwenden, ist es, auch ein Zeichenanzahl-Feedback auf eine barrierefreie Weise zu bieten und dem Benutzer die Möglichkeit zu geben, den Inhalt zu bearbeiten, bis er passt.
Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann dafür verwendet werden.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzereingaben gemeldet.

### Begrenzung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Dateneingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

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

- Hier werden Sie sehen, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche ist.
- Wir haben auch dem `number`-Feld ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt. Benutzer können die Wertsteigerungs-/Wertminderungspfeile nicht verwenden, um den Wert außerhalb diesem Bereich zu ändern.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes ein gültiger Wert ist.

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

Hier ist das Beispiel, das live ausgeführt wird:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Probieren Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) aus und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut übernehmen. Dieses Attribut gibt an, in welchen Schritten der Wert bei der Verwendung der Eingabesteuerungen erhöht oder verringert wird (wie den Auf- und Ab-Nummern-Buttons oder das Verschieben des Range-Schiebers). Das `step`-Attribut ist in unserem Beispiel ausgelassen, sodass der Wert standardmäßig auf `1` gesetzt ist. Das bedeutet, dass Fließkommawerte wie 3.2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel zur Verwendung der auf HTML basierenden Validierungsfunktionen.
Zuerst etwas HTML:

```html
<form>
  <fieldset>
    <legend>
      Do you have a driver's license?<span aria-label="required">*</span>
    </legend>
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
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
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

Das Ergebnis wird folgendermaßen dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) sowie der [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die zur Einschränkung von Eingabewerten verwendet werden können und der Eingabetypen, die sie unterstützen.

## Formulare mit JavaScript validieren

Wenn Sie die Texte der nativen Fehlermeldungen ändern möchten, benötigen Sie JavaScript.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die in den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften in den oben genannten Elementen bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seinen Einschränkungen entspricht (gültig ist), wird hier eine leere Zeichenkettě zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Auf der Seite [`ValidityState`](/de/docs/Web/API/ValidityState) finden Sie vollständige Details zu allen verfügbaren Eigenschaften. Nachfolgend finden Sie einige der gängigeren:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut angegeben ist, oder `false`, wenn er kürzer oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut angegeben ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut angegeben ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut angegeben ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntax (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element all seinen Überprüfungsanforderungen entspricht und daher als gültig angesehen wird, oder `false`, wenn es eine Bedingung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber keinen Wert, oder `false` ansonsten. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular übermittelt wird; `false` ansonsten.

Die Constraint Validation API macht auch die folgenden Methoden in den oberen Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form) Element verfügbar.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` ansonsten. Wenn das Element ungültig ist, löst diese Methode ferner ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mit Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit` Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung einrichten, wird das Element als ungültig angesehen, und das angegebene Fehlermuster wird angezeigt. Dies ermöglicht Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler außer den von den Standard-HTML-Überprüfungsbeschränkungen angebotenen festzulegen. Die Fehlermeldung wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispielen zuvor gesehen haben, zeigt der Browser jedes Mal eine Fehlermeldung an, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Meldungen haben zwei Nachteile:

- Es gibt keinen Standardweg, ihr Aussehen und ihre Gestaltung mit CSS zu ändern.
- Sie hängen von der Browser-Lokalisierung ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durchgehen, wie dies zu tun ist.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei einzufügen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie die folgende JavaScript zu der Seite hinzu:

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

Hier speichern wir einen Verweis auf das E-Mail-Eingabefeld und fügen dann einen Ereignislistener hinzu, der bei jeder Änderung des Wertes in der Eingabe das enthaltene Code ausführt.

Im enthaltenen Code prüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der beinhaltete Wert nicht dem Muster einer gutgeformten E-Mail-Adresse entspricht. In diesem Fall rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass bei Versuch, das Formular zu übermitteln, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einer leeren Zeichenkettě auf. Dies macht die Eingabe gültig, sodass das Formular bereitgestellt wird. Während der Validierung wird, wenn irgendein Formularelement eine `customError` enthält, die nicht die leere Zeichenkettě ist, die Formularübermittlung blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) und die [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html) finden.

#### Erweiterung der integrierten Formvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für eine bestimmte Art von Fehler (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu nutzen und dann die Möglichkeit zur Anpassung mit `setCustomValidity()` hinzuzufügen.

Hier demonstrieren wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit der HTML {{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten angezeigt.
Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefiniertheit Nachricht zurück, indem `setCustomValidity("")` aufgerufen wird.
Es verwendet dann `email.validity.valid`, um zu prüfen, ob die eingegebene Adresse ungültig ist und kehrt zurück, wenn dies der Fall ist.
Dies stellt sicher, dass alle normalen integrierten Validierungsprüfungen durchgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem `setCustomValidity()` mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht mit `@example.com` endet.

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

Versuchen Sie, eine ungültige E-Mail-Adresse einzugeben, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein ausführlicheres Beispiel

Jetzt, da wir ein wirklich grundlegendes Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API nutzen können, um eine etwas komplexere Benutzervalidierung zu erstellen.

Zunächst das HTML. Fühlen Sie sich frei, dies zusammen mit uns zu erstellen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut, um die automatische Validierung des Browsers auszuschalten. Durch Setzen des `novalidate`-Attributs auf dem Formular wird der Browser daran gehindert, seine eigenen Fehlermeldungsblasen anzuzeigen, und ermöglicht es uns, stattdessen die benutzerdefinierten Fehlermeldungen im DOM auf eine von uns gewählte Art anzuzeigen.
Das bedeutet, dass der Browser zwar nicht automatisch die Gültigkeit des Formulars überprüft, bevor dessen Daten gesendet werden, wir dies aber dennoch selbst machen können und das Formular entsprechend stilisieren.

Unsere Eingabe zur Überprüfung ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für die jeweiligen Fälle anzeigen.

Wir beabsichtigen, die Fehlermeldungen innerhalb eines `<span>`-Elements anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut wird auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, auch dass sie für Benutzer von Bildschirmlesegeräten vorgelesen wird.

Nun kommen wir zu etwas grundlegender CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

/* invalid fields */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* error message styles */
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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten zu wählen; hier erhalten wir das Formular selbst und die E-Mail
Eingabe Feld, sowie das `span` Element, in das wir die Fehlermeldung einfügen werden.

Mit Event-Handlern überprüfen wir bei jeder Eingabe, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}
```

Jedes Mal, wenn wir den Wert in der Eingabe ändern, überprüfen wir, ob er gültige Daten enthält. Wenn dies der Fall ist, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten ungültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzuschicken, überprüfen wir erneut, ob die Daten gültig sind. Wenn dies der Fall ist, lassen wir das Formular abschicken. Wenn dies nicht der Fall ist, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern, dass das Formular mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgeschickt wird.

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html) finden.

Die Constraint Validation API gibt Ihnen ein mächtiges Werkzeug zur Hand, um die Formularüberprüfung zu handhaben, das Ihnen eine enorme Kontrolle über die Benutzeroberfläche über das hinaus gibt, was Sie nur mit HTML und CSS tun können.

### Formulare ohne eine integrierte API validieren

In einigen Fällen, wie z.B. [benutzerdefinierte Kontrollen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder wollen Sie die Constraint Validation API nicht verwenden. Sie können weiterhin JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihre eigene Validierung schreiben.

Um ein Formular zu überprüfen, müssen Sie sich ein paar Fragen stellen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typumwandlungen, reguläre Ausdrücke usw. Das liegt ganz bei Ihnen.
- Was soll ich tun, wenn das Formular nicht gültig ist?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhalten soll. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die fehlerhaft sind?
    Sollten Sie Fehlernachrichten anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu leiten.
    Sie sollten Vorschläge im voraus bieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich mit den Benutzerschnittstellenanforderungen für Formularüberprüfungen befassen möchten, finden Sie hier einige nützliche Artikel, die Sie lesen sollten:
    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Validierung von Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, hier ein vereinfachtes Beispiel des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast gleich; wir haben nur die HTML-Validierungsfunktionen entfernt.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
    </label>
    <input type="text" id="mail" name="mail" />
    <span id="error" aria-live="polite"></span>
  </p>
  <button>Submit</button>
</form>
```

Auch beim CSS muss nicht viel geändert werden. Wir haben lediglich die {{cssxref(":invalid")}} CSS Pseudoklasse in eine reale Klasse umgewandelt und den Attributselektor vermieden.

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

input {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input.invalid {
  border: 2px solid #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
  /* make sure keyboard-only users see a change when focusing */
  border-style: dashed;
}

/* error messages */
#error {
  width: 100%;
  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

Die großen Änderungen betreffen den JavaScript-Code, der erheblich mehr tun muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

// Check if the email is valid
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Update email input class based on validity
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

// Update error message and visibility
const updateError = (isValidInput) => {
  if (isValidInput) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// Initialize email validity on page load
const initializeValidation = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
};

// Handle input event to update email validity
const handleInput = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", initializeValidation);
// This defines what happens when the user types in the field
email.addEventListener("input", handleInput);
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein eigenes Validierungssystem zu erstellen. Das Schwierigste ist es, es generisch genug zu machen, um sowohl plattformübergreifend als auch auf jedem Formular, das Sie erstellen könnten, anwendbar zu sein. Es gibt viele Bibliotheken, die zur Formularvalidierung verwendet werden können, z.B. [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die Formularüberprüfung auf der Clientseite erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, jedoch müssen Sie _immer_ sorgfältig über den Benutzer nachdenken.
Helfen Sie Ihren Benutzern stets, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck sollten Sie:

- Deutliche Fehlermeldungen anzeigen.
- Beim Eingabeformat großzügig sein.
- Exakt anzeigen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular abgeschickt werden.
Wir werden uns als nächstes mit dem [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
