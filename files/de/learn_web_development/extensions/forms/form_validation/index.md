---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: bccce51ad7f3fd5e5ff7e4231b6391a000c8faf6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente korrekt ausgefüllt sind, bevor Benutzerdaten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den in den verschiedenen Formularelementen festgelegten Anforderungen entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken zur Implementierung anwenden kann.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; da ungültige Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren. Wenn es zum Server gelangt und dann abgelehnt wird, wird eine spürbare Verzögerung durch die Reise zum Server und dann zurück zum Client-Seite verursacht, um dem Benutzer mitzuteilen, dass seine Daten zu korrigieren sind.

Jedoch _sollte die Client-seitige Validierung_ nicht als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer auch auf _Server-Seite_ Validierungs- und Sicherheitsüberprüfungen für alle über ein Formular übermittelten Daten durchführen, da die Client-seitige Validierung zu einfach zu umgehen ist, sodass böswillige Benutzer leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer bekannten Website mit einem Anmeldeformular, und Sie werden feststellen, dass diese Feedback gibt, wenn Sie Ihre Daten nicht im erwarteten Format eingeben. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet. Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der durch die Anwendung festgelegten Einschränkungen liegen. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung die Übermittlung der Daten zum Server und (normalerweise) die Speicherung in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und ermöglicht ihm einen weiteren Versuch.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder gänzlich fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Das Erzwingen sicherer Passwörter hilft uns, ihre Kontoinformationen besser zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um die Anwendung zu schädigen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server übermittelt werden. Selbst wenn Ihr Formular korrekt validiert und falsch formatierte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer dennoch die Netzwerkanfrage ändern.

## Verschiedene Arten der Client-seitigen Validierung

Es gibt zwei verschiedene Arten der Client-seitigen Validierung, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung**:
  HTML-Formularattribute können festlegen, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten sein müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**:
  JavaScript wird in der Regel verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Client-seitige Validierung kann mit wenig bis keinem JavaScript durchgeführt werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Features zu beginnen und das Benutzererlebnis nach Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen. Dies wird durch die Verwendung von Validierungsattributen an Formularelementen erreicht. Wir haben viele von diesen bereits im Kurs gesehen, aber um sie zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld vor dem Absenden des Formulars ausgefüllt werden muss.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die Mindest- und Höchstlänge von Textzeichenfolgen an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max), und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die Mindest- und Höchstwerte von numerischen Eingabetypen sowie das Inkrement oder den Schritt für Werte an, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezieller Voreingabetyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle Regeln erfüllen, die durch die auf das Feld angewendeten Attribute festgelegt werden, gelten sie als gültig. Wenn nicht, gelten sie als ungültig.

Wenn ein Element gültig ist, gelten die folgenden Dinge:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann andere UI-Pseudoklassen entsprechen, wie z.B. {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular absenden, sofern nichts anderes dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, gelten die folgenden Dinge:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie z.B. {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehler. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der Attribute, die wir oben besprochen haben.

### Einfaches Startbeispiel

Lassen Sie uns mit einem einfachen Beispiel beginnen: einer Eingabe, die es Ihnen ermöglicht, zu wählen, ob Sie eine Banane oder eine Kirsche bevorzugen. Dieses Beispiel beinhaltet ein einfaches Text-{{HTMLElement("input")}} mit einer zugehörigen {{htmlelement("label")}} und einem Absende-{{htmlelement("button")}}.

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

Zunächst kopieren Sie die [`fruit-start.html`-Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in ein neues Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Eine gängige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut. Fügen Sie einem Eingabefeld dieses Attribut hinzu, um ein Element obligatorisch zu machen. Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht abgesendet, sondern zeigt eine Fehlermeldung an, wenn die Eingabe leer ist. Solange die Eingabe leer ist, wird sie auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer Gruppe mit demselben Namen das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; der aktivierte Radio-Button muss nicht derjenige sein, bei dem das Attribut gesetzt ist.

> [!NOTE]
> Fordern Sie Benutzer nur auf, Daten einzugeben, die Sie benötigen: Ist es beispielsweise wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zur {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass die {{htmlelement("input")}} erforderlich ist. Den Benutzer darauf hinzuweisen, wenn Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern wird auch von den WCAG-[Richtlinien zur Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) verlangt.

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

Dieses CSS bewirkt, dass die Eingabe ein rotes gestricheltes Rand hat, wenn sie ungültig ist, und ein subtileres einfarbiges schwarzes Rand hat, wenn sie gültig ist. Wir haben auch einen Hintergrundgradienten hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im untenstehenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [Live-`required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert einzureichen. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") angezeigt wird, und das Formular wird an der Übermittlung gehindert. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen einen regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als seinen Wert erwartet. Ein regulärer Ausdruck (RegExp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen zu finden, daher sind RegExps ideal für die Formularvalidierung und dienen einer Vielzahl anderer Anwendungen in JavaScript.

RegExps sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen in diesem Artikel eine erschöpfende Einführung zu geben. Unten sind einige Beispiele, um Ihnen einen grundlegenden Eindruck von ihrer Funktionsweise zu geben.

- `a` — Stimmt mit einem Zeichen überein, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Stimmt mit `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Stimmt mit `a`, gefolgt von einem optionalen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Stimmt mit `a`, gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` etc.).
- `a|b` — Stimmt mit einem Zeichen überein, das `a` oder `b` ist.
- `abc|xyz` — Stimmt genau mit `abc` oder genau mit `xyz` (aber nicht `abcxyz` oder `a` oder `y` etc.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken. Eine vollständige Liste und viele Beispiele finden Sie in unserer [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel umsetzen. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut wie dieses hinzuzufügen:

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

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element eine von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es unterstützt, dass großgeschriebene und kleingeschriebene Versionen akzeptiert werden, indem ein zusätzliches "Aa"-Muster in eckigen Klammern eingebettet wurde.

An diesem Punkt versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs so zu ändern, dass er einigen der zuvor gesehenen Beispiele entspricht, und sehen Sie sich an, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige eigene zu schreiben und schauen Sie, wie es funktioniert. Machen Sie sie möglichst fruchtspezifisch, damit Ihre Beispiele sinnvoll sind!

<p>Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht das Muster des regulären Ausdrucks erfüllt, wird die `input` der {{cssxref(':invalid')}}-Pseudoklasse entsprechen. Wenn leer und das Element nicht erforderlich ist, wird es nicht als ungültig angesehen.</p>

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen reguläre Ausdrücke validiert zu werden. Zum Beispiel validiert das Festlegen des `email`-Typs den Eingabewert gegen ein wohlgeformtes E-Mail-Adressmuster oder ein Muster, das eine kommagetrennte Liste von E-Mail-Adressen darstellt, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Länge Ihrer Einträge beschränken

Sie können die Zeichenzahl aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mithilfe der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute beschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) oder mehr als die Länge des Werts von [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) hat.

Browser erlauben oft nicht, dass der Nutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine besseres Benutzererlebnis als nur `maxlength` zu verwenden ist, auch ein Zeichenanzahl-Feedback in zugänglicher Weise bereitzustellen und den Nutzer seine Inhalte auf die passende Größe bearbeiten zu lassen. Ein Beispiel dafür ist das Zeichenlimit, wenn in sozialen Medien gepostet wird. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden niemals gemeldet, wenn der Wert programmatisch gesetzt wird. Sie werden nur für vom Benutzer bereitgestellte Eingaben gemeldet.

### Ihre Einträge auf Werte beschränken

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und der verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich gültiger Werte anzugeben. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es als ungültig angesehen.

Lassen Sie uns ein weiteres Beispiel ansehen. Erstellen Sie eine neue Kopie der Datei [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html).

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch das folgende:

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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was dieselbe Länge wie Banane und Kirsche ist.
- Wir haben auch dem `number`-Feld ein `min` von eins und ein `max` von zehn gegeben. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrement-Pfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, sodass das Entfernen des Werts zu einem gültigen Wert führt.

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

Probieren Sie dieses [Beispiel auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) live aus und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut gibt an, um welche Erhöhung der Wert steigt oder sinkt, wenn die Eingabesteuerelemente verwendet werden (wie die Auf- und Ab-Nummern-Schaltflächen oder das Schieben des Bereichsreglers). Das `step`-Attribut fehlt in unserem Beispiel, daher ist der Wert standardmäßig `1`. Dies bedeutet, dass Gleitkommazahlen wie 3.2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, das die Verwendung der integrierten Validierungsfunktionen von HTML zeigt. Zuerst etwas HTML:

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

Und nun etwas CSS, um das HTML zu gestalten:

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

Das sieht wie folgt aus:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html) verfügbar.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte zu beschränken und die Eingabetypen, die sie unterstützen.

## Validieren von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich. In diesem Abschnitt sehen wir uns die verschiedenen Möglichkeiten an, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen von Formularelementen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (Repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (Repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (Repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (Repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (Repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (Repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Meldung zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird dies eine leere Zeichenkette zurückgeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitsstatus des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der ['ValidityState'](/de/docs/Web/API/ValidityState)-Referenzseite finden; unten ist eine Liste einiger der häufigeren:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximal festgelegte Länge durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut, oder `false`, wenn der Wert kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festgelegt ist, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut festgelegte Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}- und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert weniger als das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut festgelegte Minimum ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}}- und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` ansonsten. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Übermitteln des Formulars validiert wird; andernfalls `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`ungültiges Ereignis`](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und der angegebene Fehler angezeigt. Dies ermöglicht Ihnen, JavaScript-Code zu verwenden, um ein Validierungsfehler zu etablieren, die von den Standard-Validierungseinschränkungen nicht abgedeckt werden. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementieren einer benutzerdefinierten Fehlermeldung

Wie Sie in den vorherigen Beispielen zur HTML-Validierungseinschränkung gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine standardisierte Möglichkeit, ihr Aussehen mit CSS zu ändern.
- Sie hängen vom Browser-Standort ab, was bedeutet, dass Sie eine Seite in einer Sprache und eine Fehlermeldung in einer anderen Sprache haben können, wie in dem folgenden Firefox-Screenshot gezeigt.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel dafür durchgehen, wie man dies tut.

Wir beginnen mit etwas HTML (Sie können dies in eine leere HTML-Datei einfügen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie der Seite folgendes JavaScript hinzu:

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

Hier speichern wir eine Referenz zu der E-Mail-Eingabe und fügen einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine wohlgeformte E-Mail-Adresse entspricht. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular abzusenden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einer leeren Zeichenkette auf. Dies macht die Eingabe gültig, sodass das Formular abgesendet wird. Während der Validierung, wenn ein Formularelement eine `customError` hat, die nicht die leere Zeichenkette ist, wird die Formularübermittlung blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie man eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen kann. Es ist auch möglich, die gesamte integrierte Formularvalidierung zu verwenden und sie dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die integrierte Validierung für `<input type="email">` so erweitern können, dass nur Adressen mit der Domäne `@example.com` akzeptiert werden. Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Bei jeder neuen Eingabe wird zunächst die benutzerdefinierte Gültigkeitsmeldung zurückgesetzt, indem `setCustomValidity("")` aufgerufen wird. Dann wird `email.validity.valid` verwendet, um zu überprüfen, ob die eingegebene Adresse ungültig ist und wenn ja, wird aus dem Ereignis-Handler zurückgegeben. Dies stellt sicher, dass alle normalen integrierten Validierungsprüfungen durchgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem die `setCustomValidity()`-Methode mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht mit `@example.com` endet.

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

Sie können dieses Beispiel auf der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Example-Link')}} ausprobieren. Versuchen Sie, eine ungültige E-Mail-Adresse einzugeben, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

#### Ein detaillierteres Beispiel

Jetzt, da wir ein wirklich einfaches Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API verwenden können, um einige etwas komplexere benutzerdefinierte Validierungen zu erstellen.

Zuerst das HTML. Wiederum, fühlen Sie sich frei, dies mit uns zu gestalten:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers auszuschalten. Das Festlegen des `novalidate`-Attributs im Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und ermöglicht uns stattdessen, die benutzerdefinierten Fehlermeldungen auf eine Weise im DOM anzuzeigen, die wir selbst gewählt haben. Das deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw. Das bedeutet, dass auch wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor die Daten gesendet werden, Sie dies selbst tun und das Formular entsprechend gestalten können.

Unsere Eingabe zur Validierung ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns sie mit unserem eigenen Code überprüfen und für jeden eine benutzerdefinierte Fehlermeldung anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut ist auf diesem `<span>`-Element festgelegt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich, dass sie für Bildschirmleser-Benutzer vorgelesen wird.

Nun zu etwas grundlegenden CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Nun schauen wir uns das JavaScript an, das die benutzerdefinierte Fehlerprüfung implementiert. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier holen wir uns das Formular selbst und das E-Mail-Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Mit Ereignishandlern überprüfen wir, ob die Formularfelder bei jeder Eingabe des Benutzers gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn sie gültige Daten enthält, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API bietet Ihnen ein leistungsstarkes Werkzeug zur Formularvalidierung, mit dem Sie eine enorme Kontrolle über die Benutzeroberfläche haben, die über das hinausgeht, was Sie allein mit HTML und CSS tun können.

### Validieren von Formularen ohne integrierte API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie möglicherweise nicht oder wollen Sie nicht die Constraint Validation API nutzen. Sie können dennoch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihren eigenen Validierungsmechanismus schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung soll ich durchführen?

  - : Sie müssen bestimmen, wie Ihre Daten validiert werden sollen: String-Operationen, Typumwandlungen, reguläre Ausdrücke und so weiter. Es liegt an Ihnen.

- Was soll ich tun, wenn das Formular nicht valide ist?

  - : Dies ist eindeutig eine Frage der Benutzeroberfläche. Sie müssen entscheiden, wie sich das Formular verhalten soll. Soll das Formular die Daten trotzdem senden? Sollen die fehlerhaften Felder hervorgehoben werden? Sollten Fehlermeldungen angezeigt werden?

- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu unterstützen. Sie sollten im Vorfeld Vorschläge machen, damit sie wissen, was erwartet wird, und auch klare Fehlermeldungen bereitstellen. Wenn Sie tiefer in die Anforderungen an die Benutzeroberfläche zur Formularvalidierung eintauchen möchten, gibt es hier einige nützliche Artikel, die Sie lesen sollten:

    - [Hilfs Benutzer das richtige Formular auszufüllen](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehler in Formularen berichten: 10 Kopfzeilen-Bewertungsrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das nicht die Constraint Validation API verwendet

Um dies zu veranschaulichen, ist das folgende eine vereinfachte Version des vorhergehenden Beispiels ohne die Constraint Validation API.

Das HTML ist fast dasselbe; wir haben nur die HTML-Validierungsfunktionen entfernt.

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

Ähnlich muss das CSS nicht viel geändert werden; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse verwandelt und auf die Verwendung des Attributselektors verzichtet.

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

Die großen Änderungen sind im JavaScript-Code, der viel mehr Last tragen muss.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu bauen. Das Schwierige ist, es generisch genug zu machen, um sowohl plattformübergreifend als auch in jedem von Ihnen erstellten Formular zu verwenden. Es gibt viele Bibliotheken, um Formularvalidierung durchzuführen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen vor dem Weitergehen behalten haben — siehe [Testen Sie Ihr Wissen: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_validation).

## Zusammenfassung

Die Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, aber Sie _müssen_ immer sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck sollten Sie:

- Explizite Fehlermeldungen anzeigen.
- Seien Sie nachsichtig bezüglich des Eingabeformats.
- Zeigen Sie genau, wo der Fehler auftritt, vor allem bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden. Wir werden im nächsten Schritt behandeln, wie Formulardaten gesendet werden. [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
