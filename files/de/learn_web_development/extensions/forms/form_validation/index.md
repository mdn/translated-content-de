---
title: Validierung von Formularen auf der Client-Seite
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularsteuerelemente ausgefüllt sind, und zwar im richtigen Format, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **Validierung von Formularen auf der Client-Seite** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen entsprechen, die in den verschiedenen Formularsteuerelementen festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Validierung von Formularen auf der Client-Seite.

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
        Zu verstehen, was die Validierung von Formularen auf der Client-Seite ist, warum sie wichtig ist
        und wie man verschiedene Techniken zur Implementierung anwenden kann.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Client-Seite ist eine erste Prüfung und ein wichtiges Feature für eine gute Benutzererfahrung; indem ungültige Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Wenn es bis zum Server kommt und dann abgelehnt wird, wird durch eine Rundreise zum Server und zurück zur Client-Seite eine spürbare Verzögerung verursacht, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren muss.

Die Validierung auf der Client-Seite _sollte jedoch nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Apps sollten immer eine Validierung, einschließlich Sicherheitschecks, von allen Formular-übermittelten Daten auf der _Server-Seite_ **sowie** auf der Client-Seite durchführen, da die Validierung auf der Client-Seite zu leicht zu umgehen ist, sodass böswillige Benutzer immer noch leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Validierung auf der Server-Seite liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer beliebigen beliebten Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht in dem Format eingeben, das sie erwarten.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich für Ihre Daten).

Das nennt man **Formularvalidierung**. Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der Einschränkungen liegen, die von der Anwendung festgelegt wurden. Die im Browser durchgeführte Validierung wird als **Validierung auf der Client-Seite** bezeichnet, während die auf dem Server durchgeführte Validierung als **Validierung auf der Server-Seite** bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Validierung auf der Client-Seite.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, dass die Daten an den Server übermittelt und (normalerweise) in einer Datenbank gespeichert werden; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, in der erklärt wird, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, falsch sind oder ganz weggelassen werden.
- **Wir wollen die Daten unserer Benutzer schützen**. Wenn wir unsere Benutzer zwingen, sichere Passwörter einzugeben, erleichtert dies den Schutz ihrer Kontoinformationen.
- **Wir wollen uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals auf Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert und die fehlerhafte Eingabe auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerkanforderung immer noch ändern.

## Verschiedene Arten der Validierung auf der Client-Seite

Auf dem Web gibt es zwei verschiedene Arten der Validierung auf der Client-Seite, auf die Sie treffen werden:

- **HTML-Formular-Validierung**
  HTML-Formular-Attribute können definieren, welche Formularsteuerelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten gültig sein müssen.
- **JavaScript-Formular-Validierung**
  JavaScript wird in der Regel verwendet, um die HTML-Formular-Validierung zu verbessern oder anzupassen.

Die Validierung auf der Client-Seite kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird in der Regel empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung nach Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formular-Validierung

Eines der wichtigsten Merkmale von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein. Dies wird durch die Verwendung von Validierungsattributen in Formularelementen erreicht. Wir haben viele davon früher im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die Mindest- und Höchstlänge der Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen an sowie das Inkrement oder den Schritt, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderes spezifisches voreingestelltes Format sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten allen durch die Attribute spezifizierten Regeln entsprechen, gelten sie als gültig. Wenn nicht, gelten sie als ungültig.

Wenn ein Element gültig ist, sind die folgenden Bedingungen wahr:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und möglicherweise anderen UI-Pseudoklassen wie {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, sofern nichts anderes dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, sind die folgenden Bedingungen wahr:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls zutreffen, wie es bei {{cssxref(":out-of-range")}} der Fall sein kann, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlerart. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele zur integrierten Formular-Validierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startdokument

Beginnen wir mit einem einfachen Beispiel: eine Eingabeoption, mit der Sie wählen können, ob Sie lieber eine Banane oder eine Kirsche mögen.
Dieses Beispiel umfasst ein grundlegendes Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Senden-{{htmlelement("button")}}.

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

Zu Beginn machen Sie eine Kopie der [`fruit-start.html` Datei, die auf GitHub zu finden ist](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in ein neues Verzeichnis auf Ihrer Festplatte.

### Das erforderliche Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut. Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element als erforderlich zu kennzeichnen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet; eine Fehlermeldung wird bei der Übermittlung angezeigt, wenn die Eingabe leer ist.
Während es leer ist, wird die Eingabe auch als ungültig angesehen und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer gleichnamigen Gruppe das `required` Attribut hat, muss einer der Radio-Buttons in dieser Gruppe ausgewählt sein, damit die Gruppe gültig ist; der ausgewählte Radio-Button muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Verlangen Sie nur die Eingabe von Daten, die Sie benötigen: Ist es zum Beispiel wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrem Eingabefeld ein `required` Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass die {{htmlelement("input")}} erforderlich ist. Dem Benutzer anzuzeigen, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es wird auch von den WCAG [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) Richtlinien gefordert.

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

Dieses CSS bewirkt, dass die Eingabe ein rotes, gestricheltes Rand hat, wenn es ungültig ist, und einen subtileren schwarzen, durchgezogenen Rand, wenn es gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im unteren Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular von dem [live-`required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert abzusenden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular nicht abgeschickt werden kann. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen eine Regular Expression

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, das einen [Regular Expression](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (Regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings abzugleichen. Daher sind Regexps ideal für die Formularvalidierung und erfüllen eine Vielzahl anderer Verwendungen in JavaScript.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen hier eine vollständige Einführung zu geben. Unten sind einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Passt zu einem Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Passt zu `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt zu `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt zu `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Passt zu einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau zu `abc` oder genau zu `xyz` (aber nicht zu `abcxyz` oder `a` oder `y` und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht behandeln. Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Regulären Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut hinzuzufügen, wie dieses:

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

Dies gibt uns das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub] ausprobieren(https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es unterstützt, dass sowohl großgeschriebene als auch kleingeschriebene Versionen durch ein zusätzliches "Aa"-Muster in eckigen Klammern verwendet werden.

An dieser Stelle versuchen Sie, den Wert im [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut auf einige der zuvor gesehenen Beispiele zu ändern und beobachten, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es geht. Versuchen Sie, sie auf Früchte bezogen zu halten, wo immer möglich, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} den regulären Ausdrucksmuster nicht erfüllt, wird das `input`-Element der {{cssxref(':invalid')}} Pseudo-Klass entsprechen. Wenn es leer ist und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen erfordern kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel wird durch Angabe des `email` Typs der Eingabewert gegen ein gut geformtes E-Mail-Adresse-Muster oder ein muster, das einer kommagetrennten Liste von E-Mail-Adressen entspricht, validiert, wenn der [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut vorhanden ist.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut nicht.

### Einschränkung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller Textfelder, die durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt werden, mithilfe der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Attribute einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und der Wert kürzer ist als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) Wert oder länger als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Wert.

Browser lassen den Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, ist auch, ein Zeichenanzahl-Feedback auf eine zugängliche Weise bereitzustellen und dem Benutzer zu erlauben, ihren Inhalt auf die richtige Größe zu bearbeiten. Ein Beispiel hierfür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmgesteuert festgelegt wird. Sie werden nur für benutzer-eingegebene Eingaben gemeldet.

### Einschränkung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und der verschiedenen Datumseingaben, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es ungültig.

Lassen Sie uns ein weiteres Beispiel ansehen. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie es durch das folgende:

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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche ist.
- Wir haben auch dem `number`-Feld einen `min` von eins und einen `max` von zehn gegeben. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verringerungspfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, sodass das Entfernen des Werts zu einem gültigen Wert führt.

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

Hier ist das Beispiel, das live läuft:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und betrachten Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut annehmen. Dieses Attribut gibt an, welches Inkrement der Wert erhöht oder verringert, wenn die Eingabesteuerelemente verwendet werden (wie die Auf- und Abpfeile oder das Verschieben des Bereichsdaumens). Das `step` Attribut wurde in unserem Beispiel weggelassen, daher ist der Wert standardmäßig `1`. Das bedeutet, dass Gleitkommazahlen wie 3,2 auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der integrierten Validierungsfunktionen von HTML zu zeigen. Zuerst etwas HTML:

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

Und jetzt einige CSS, um das HTML zu gestalten:

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

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Sehen Sie sich [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) an, um eine vollständige Liste der Attribute zu sehen, die verwendet werden können, um Eingabewerte einzuschränken, und der Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten dazu ansehen.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (stellt ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element dar)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (stellt ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) Element dar)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (stellt ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Element dar)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (stellt ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element dar)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (stellt ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select) Element dar)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (stellt ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) Element dar)

Die Constraint Validation API macht die folgenden Eigenschaften auf den oben genannten Elementen verfügbar.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Kontrolle nicht erfüllt (falls vorhanden). Wenn die Kontrolle kein Kandidat für die Validierung von Einschränkungen ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (ist gültig), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie können alle verfügbaren Eigenschaften im [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite sehen; unten sind einige der häufigeren aufgeführt:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem spezifizierten [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut spezifiziert wird, oder `false`, wenn er kürzer oder gleich lang ist wie das Maximum. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut spezifiziert wird, oder `false`, wenn er größer oder gleich lang ist wie das Minimum. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut spezifiziert wird, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut spezifiziert wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Format ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn das Format korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Beschränkung verletzt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; andernfalls `false`.

Die Constraint Validation API macht auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form) Element verfügbar.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit` Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung einstellen, wird das Element als ungültig angesehen und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um eine Validierungsfehlermeldung zu erstellen, die anders ist als die, die von den standardmäßigen HTML-Validierungseinschränkungen angeboten werden. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den vorherigen Beispielen zu HTML-Validierungsbeschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu senden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine standardmäßige Möglichkeit, ihr Aussehen und Gefühl mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel durcharbeiten, wie Sie dies tun können.

Wir beginnen mit einigem HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei einzufügen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie der Seite das folgende JavaScript hinzu:

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe, dann fügen wir ein Event-Listener hinzu, das den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch` Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht mit dem Muster einer gut geformten E-Mail-Adresse übereinstimmt. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular zu senden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch` Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()` Methode mit einer leeren Zeichenfolge auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung wird die Formularübermittlung blockiert, wenn ein Formularkontrollfeld einen `customError` hat, der nicht die leere Zeichenfolge ist.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html) finden.

#### Erweiterung der integrierten Formular-Validierung

Das vorherige Beispiel hat gezeigt, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, alle eingebauten Formular-Validierungen zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) erweitern können, um nur Adressen mit der Domäne `@example.com` zu akzeptieren. Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Bei jedem neuen Input setzt der Code zuerst die benutzerdefinierte Gültigkeitsmeldung zurück, indem `setCustomValidity("")` aufgerufen wird. Er verwendet dann `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist. Falls ja, wird die Event-Handler-Funktion verlassen. Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Sie können dieses Beispiel auf der Seite im {{LiveSampleLink('Extending_built-in_form_validation', 'Live sample demo link')}} ausprobieren. Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse ohne `@example.com` und eine, die mit `@example.com` endet, abzusenden.

#### Ein detaillierteres Beispiel

Da wir jetzt ein wirklich einfaches Beispiel gesehen haben, schauen wir uns an, wie wir diese API verwenden können, um einige etwas komplexere benutzerdefinierte Validierungen zu erstellen.

Zunächst das HTML. Fühlen Sie sich wieder frei, dies mit uns zu erstellen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren. Durch Setzen des `novalidate` Attributes auf dem Formular wird verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und wir können stattdessen die benutzerdefinierten Fehlermeldungen auf irgendeine Weise im DOM anzeigen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw. Das bedeutet, dass selbst wenn der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor seine Daten gesendet werden, Sie das immer noch selbst tun und das Formular entsprechend gestalten können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mithilfe unseres eigenen Codes überprüfen und eine benutzerdefinierte Fehlermeldung für jede von ihnen anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut wird auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich dass sie von Bildschirmen für Lesegenutzer vorgelesen wird.

Nun zu einigen grundlegenden CSS, um das Erscheinungsbild des Formulars etwas zu verbessern und eine visuelle Rückmeldung zu geben, wenn die Eingabedaten ungültig sind:

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

Schließlich das JavaScript, das die benutzerdefinierte Fehlerüberprüfung implementiert. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und die E-Mail Eingabe sowie das span Element, in das wir die Fehlermeldung einfügen.

Unter Verwendung von Ereignis-Handlern überprüfen wir, ob die Formularfelder gültig sind, jedes Mal, wenn der Benutzer etwas eingibt. Falls ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlerbenachrichtigungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir jegliche sichtbaren Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular abschicken. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Abschicken des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()` Funktion verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html) finden.

Die Constraint Validation API bietet Ihnen ein leistungsstarkes Werkzeug, um die Formularvalidierung zu steuern, indem Sie enorme Kontrolle über die Benutzeroberfläche erhalten, die weit über das hinausgeht, was Sie mit HTML und CSS allein machen können.

### Validierung von Formularen ohne eine eingebaute API

In einigen Fällen, wie [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie nicht in der Lage sein oder wollen die Constraint Validation API verwenden. Es ist dennoch möglich, JavaScript zu verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihr eigenes System erstellen.

Um ein Formular zu validieren, fragen Sie sich ein paar Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierung, reguläre Ausdrücke und so weiter. Die Entscheidung liegt bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Benutzeroberflächen-Sache. Sie müssen entscheiden, wie sich das Formular verhalten soll. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, in denen ein Fehler aufgetreten ist?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele nützliche Informationen wie möglich bereitzustellen, um ihnen bei der Korrektur Ihrer Eingaben zu helfen.
    Sie sollten vorausschauende Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen bereitstellen.
    Wenn Sie mehr über die UI-Anforderungen der Formularvalidierung erfahren möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt ein vereinfachtes Beispiel aus dem vorherigen, ohne die Constraint Validation API.

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

Ähnlich braucht sich das CSS nicht sehr ändern; wir haben die {{cssxref(":invalid")}} Pseudoklasse nur in eine reale Klasse umgewandelt und den Attributselektor vermieden.

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

Die großen Änderungen sind im JavaScript-Code, der viel mehr zu tun hat.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

Wie Sie sehen, ist es nicht so schwer, ein Validierungssystem selbst aufzubauen. Der schwierige Teil ist, es generisch genug zu machen, um sowohl plattformübergreifend als auch in jedem Formular, das Sie erstellen, verwenden zu können. Es gibt viele Bibliotheken, die die Validierung von Formularen durchführen, wie beispielsweise [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_validation).

## Zusammenfassung

Die Validierung von Formularen auf der Client-Seite erfordert manchmal JavaScript, wenn Sie Stil und Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck, stellen Sie sicher:

- Zeigen Sie explizite Fehlermeldungen an.
- Seien Sie nachsichtig mit dem Eingabeformat.
- Weisen Sie genau auf, wo der Fehler auftritt, besonders bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden. Wir werden als nächstes [das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
