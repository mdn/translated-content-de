---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt und im richtigen Format sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server übermittelt werden. Diese **Client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen entsprechen, die von den verschiedenen Formularelementen festgelegt wurden.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Client-seitigen Formularvalidierung.

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
        Um zu verstehen, was klientseitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; indem ungültige Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Wenn sie zum Server gelangen und dann abgelehnt werden, führt eine merkliche Verzögerung zu einer Rückfahrt zum Server und dann zurück zur Client-Seite, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren muss.

Die Client-seitige Validierung _sollte jedoch nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer eine Validierung durchführen, einschließlich Sicherheitsprüfungen, bei allen auf dem _Server_ **sowie** auf der Client-Seite übermittelten Formulardaten, da die Client-seitige Validierung zu einfach zu umgehen ist, sodass böswillige Benutzer dennoch problemlos fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Websitesicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, sollte jedoch berücksichtigt werden.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Seite mit einem Registrierungsformular und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im formatieren, das sie erwarten.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird **Formularvalidierung** genannt.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format sind und den von der Anwendung festgelegten Einschränkungen entsprechen. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die klientseitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, dass die Daten an den Server gesendet und (normalerweise) in einer Datenbank gespeichert werden; wenn die Informationen nicht korrekt formatiert sind, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erfassen.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert, falsch oder vollständig weggelassen werden.
- **Wir möchten die Daten unserer Benutzer schützen.** Indem wir unsere Benutzer zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Websitesicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von Ihrem Server vom Client übergeben werden. Selbst wenn Ihr Formular auf der Client-Seite korrekt validiert und fehlerhaften Eingaben verhindert, kann ein böswilliger Benutzer die Netzwerkanforderung dennoch ändern.

## Verschiedene Arten der klientseitigen Validierung

Im Web gibt es zwei verschiedene Arten der Client-seitigen Validierung, die Sie antreffen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die von Benutzern eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird im Allgemeinen verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu starten und dann bei Bedarf die Benutzererfahrung mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Ein wesentliches Merkmal von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein.
Dies erfolgt durch die Verwendung von Validierungsattributen bei Formularelementen.
Viele dieser Attribute haben wir bereits in diesem Kurs gesehen, aber um das noch mal zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen und die Inkrement- oder Schrittweite für Werte an, die beim Minimum beginnen.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer bestimmter voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten allen durch die Attribute für dieses Feld festgelegten Regeln folgen, gelten sie als gültig. Wenn nicht, werden sie als ungültig angesehen.

Wenn ein Element gültig ist, gelten die folgenden Punkte:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement stimmt auch mit {{cssxref(":user-valid")}} überein, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann je nach Eingabetyp und Attributen auch andere UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular einreichen, vorausgesetzt, es gibt nichts anderes, das dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten die folgenden Punkte:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, stimmt es auch mit der {{cssxref(":user-invalid")}} CSS-Pseudoklasse überein. Andere UI-Pseudoklassen können je nach Fehler ebenfalls übereinstimmen, z. B. {{cssxref(":out-of-range")}}. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlerart. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für die integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Einfache Startdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, bei der Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel umfasst ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einen Submit-{{htmlelement("button")}}.

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

Beginnen Sie damit, eine Kopie der [`fruit-start.html`-Datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte zu speichern.

### Das `required`-Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element verpflichtend zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird bei Leerung nicht gesendet, sondern zeigt bei der Übermittlung eine Fehlermeldung an.
Solange die Eingabe leer bleibt, wird sie auch als ungültig angesehen und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer Gruppe mit demselben Namen das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe angehakt sein, damit die Gruppe gültig ist; der angehakte Radio-Button muss nicht der mit dem gesetzten Attribut sein.

> [!NOTE]
> Fordern Sie nur Daten von Nutzern an, die Sie benötigen: Beispielsweise ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie das `required`-Attribut Ihrer Eingabe hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer zu informieren, dass die {{htmlelement("input")}} erforderlich ist. Dem Benutzer anzuzeigen, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern auch von den WCAG [Zugänglichkeitsrichtlinien](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

Wir fügen CSS-Stile hinzu, die basierend darauf angewendet werden, ob das Element erforderlich, gültig und ungültig ist:

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

Dieses CSS bewirkt, dass die Eingabe eine rote gestrichelte Umrandung hat, wenn sie ungültig ist, und eine subtilere schwarze Vollstrichumrandung, wenn sie gültig ist.
Wir haben auch einen Hintergrundgradienten hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im untenstehenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [live `required` Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular verhindert, dass es gesendet wird. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung mit einem regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (RegExp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenketten abzugleichen, sodass Regexps ideal zur Formularvalidierung sind und eine Vielzahl anderer Anwendungen in JavaScript haben.

RegExps sind recht komplex und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren.
Nachfolgend sind einige Beispiele aufgeführt, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Stimmig mit einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Stimmig mit `a`, gefolgt von `b`, und gefolgt von `c`.
- `ab?c` — Stimmig mit `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Stimmig mit `a`, optional gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Stimmig mit einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Stimmig genau mit `abc` oder genau mit `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele lesen Sie unsere [Regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut hinzuzufügen, wie folgt:

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

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) sowie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitive, aber wir haben es so gestaltet, dass sie sowohl kapitalisierte als auch kleingeschriebene Versionen mit einem zusätzlichen "Aa"-Muster unterstützen, das in eckige Klammern verschachtelt ist.

An diesem Punkt sollten Sie den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs ändern, um einigen der früher gesehenen Beispiele zu entsprechen, und beobachten, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben und sehen Sie, wie es läuft.
Machen Sie sie so fruchtbezogen wie möglich, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht mit dem Muster des regulären Ausdrucks übereinstimmt, wird das `input` mit der {{cssxref(':invalid')}} Pseudoklasse übereinstimmen. Wenn es leer ist und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um mit einem regulären Ausdruck validiert zu werden. Zum Beispiel validiert die Angabe des `email`-Typs den Eingabewert gegen ein gut geformtes E-Mail-Adressenmuster oder ein Muster, das einer durch Komma getrennten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Beschränkung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder einschränken, indem Sie die [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute verwenden.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert hat.

Browser lassen den Benutzer oft nicht einen längeren Wert als erwartet in Textfelder eingeben. Eine bessere Benutzererfahrung, als nur `maxlength` zu verwenden, ist es, auch Charakterzählfeedback auf zugängliche Weise bereitzustellen und dem Benutzer zu erlauben, seinen Inhalt zu bearbeiten, um die Größe zu reduzieren.
Ein Beispiel dafür ist das Zeichenzähl-Limit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), können verwendet werden, um dies zu bieten.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmgemäß gesetzt wird. Sie werden nur für vom Benutzer eingegebene Eingaben gemeldet.

### Beschränkung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und den verschiedenen Dateneingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min)- und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte zu bieten.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es als ungültig angesehen.

Lassen Sie uns ein anderes Beispiel betrachten.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

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

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banana und Cherry ist.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrement-Pfeile nicht verwenden, um den Wert aus diesem Bereich zu verschieben.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, so dass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut gibt an, um welches Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie z. B. die Auf- und Ab-Nummer-Schaltflächen oder das Verschieben des Bereichsreglers). Das `step`-Attribut wird in unserem Beispiel weggelassen, sodass der Wert standardmäßig auf `1` geht. Das bedeutet, dass Gleitkommazahlen wie 3.2 auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der integrierten Validierungsfunktionen von HTML zu zeigen.
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

Und nun etwas CSS, um das HTML zu stylen:

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
  border: 1px solid #333333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Formularvalidierung mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt beschäftigen wir uns mit den verschiedenen Möglichkeiten, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gilt als gültig), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite finden; unten sind einige der gebräuchlicheren aufgeführt:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) übereinstimmt, und `false`, wenn er stimmt. Wenn true, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximal durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut angegebene Länge ist, oder `false`, wenn er gleich lang oder kürzer ist. Wenn true, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angegebene Länge ist, oder `false`, wenn er gleich lang oder länger ist. Wenn true, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als der maximal durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegebene ist, oder `false`, wenn er gleich oder kleiner ist. Wenn true, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als der minimal durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegebene ist, oder `false`, wenn er gleich oder größer ist. Wenn true, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntaxformat ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn das Syntaxformat korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn true, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn true, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Senden des Formulars validiert wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, mit JavaScript-Code einen Validierungsfehler festzustellen, den das reguläre HTML-Validierungseinschränkungen nicht bieten. Die Nachricht wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementierung einer angepassten Fehlermeldung

Wie Sie in den früheren Beispielen zur HTML-Validierungseinschränkung gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu senden, eine Fehlermeldung an. Die Anzeigeweise dieser Nachricht hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine standardisierte Möglichkeit, ihr Aussehen und Erscheinungsbild mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Arbeiten wir an einem Beispiel, um zu sehen, wie dies gemacht wird.

Wir beginnen mit etwas HTML (Fühlen Sie sich frei, das in einer leeren HTML-Datei zu platzieren; verwenden Sie eine neue Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

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

Hier speichern wir einen Verweis auf die E-Mail-Eingabe und fügen dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht mit dem Muster einer gut geformten E-Mail-Adresse übereinstimmt. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular zu senden, das Senden fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung, falls ein Formularelement einen `customError` hat, der nicht die leere Zeichenkette ist, wird das Senden des Formulars blockiert.

Probieren Sie es unten aus:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html) finden.

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie für einen bestimmten Fehlertyp (`validity.typeMismatch`) eine angepasste Nachricht hinzufügen können.
Es ist auch möglich, alle eingebauten Formularvalidierungsfunktionen zu verwenden und sie dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)-Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode ist unten gezeigt.
Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Validitätsnachricht zurück, indem er `setCustomValidity("")` aufruft.
Er verwendet dann `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und bricht den Ereignishandler ab.
Auf diese Weise werden alle normalen eingebauten Validierungschecks durchgeführt, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht auf `@example.com` endet, und eine, die auf `@example.com` endet, einzureichen.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Jetzt, da wir ein wirklich einfaches Beispiel gesehen haben, sehen wir, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Durch das Setzen des `novalidate`-Attributs auf dem Formular wird das Formular daran gehindert, seine eigenen Fehlermeldungsblasen anzuzeigen, und erlaubt uns stattdessen, die angepassten Fehlermeldungen im DOM in irgendeiner Weise unserer Wahl anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw.
Das bedeutet, dass auch wenn der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor seine Daten gesendet werden, Sie dies dennoch selbst tun und das Formular entsprechend stylen können.

Unsere zu validierende Eingabe ist eine [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), die `required` ist, und eine `minlength` von 8 Zeichen hat. Lassen Sie uns dies mit unserem eigenen Code überprüfen und eine angepasste Fehlermeldung für jede davon anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element zu zeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere angepasste Fehlermeldung allen angezeigt wird, einschließlich derjenigen, die von Bildschirmlesegeräten vorgelesen werden.

Nun etwas grundlegendes CSS, um das Aussehen des Formulars ein wenig zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
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
  background-color: #990000;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Nun schauen wir uns das JavaScript an, das die benutzerdefinierte Fehlermeldung umsetzt.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das E-Mail-Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung einfügen werden.

Unter Verwendung von Ereignishandlern überprüfen wir, ob die Formularelemente bei jeder Eingabe des Benutzers gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html) finden.

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug, um Formularvalidierungen zu handhaben und Ihnen über das hinaus enorme Kontrolle über die Benutzeroberfläche zu geben, was Sie nur mit HTML und CSS erreichen können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie [benutzerdefinierte Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API möglicherweise nicht verwenden oder es wird nicht empfohlen. Sie können dennoch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen es selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich ein paar Fragen:

- Welche Arten der Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierungen, reguläre Ausdrücke usw. Es liegt ganz bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Frage der Benutzeroberfläche. Sie müssen entscheiden, wie sich das Formular verhält. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder, die einen Fehler aufweisen, hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu führen.
    Sie sollten im Voraus Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich mit Anforderungen an die Formularvalidierungs-Benutzeroberfläche auseinandersetzen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:
    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende ein vereinfachtes Beispiel des vorherigen Beispiels ohne die Constraint Validation API.

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

Auch hier muss sich das CSS nicht sehr ändern; wir haben einfach die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Attributauswahl vermieden.

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
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input.invalid {
  border: 2px solid #990000;
  background-color: #ffdddd;
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
  background-color: #990000;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

Die großen Änderungen betreffen den JavaScript-Code, der viel mehr Aufwand erfordert.

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

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem auf eigene Faust zu erstellen. Der schwierige Teil besteht darin, es so generisch zu machen, dass es sowohl plattformübergreifend als auch für jedes von Ihnen erstellte Formular verwendet werden kann. Es gibt viele Bibliotheken, die zur Formularvalidierung zur Verfügung stehen, wie z. B. [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber sie erfordert immer, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen angegebenen Daten zu korrigieren. Stellen Sie sicher, dass Sie:

- Explizite Fehlermeldungen anzeigen.
- Seien Sie nachsichtig mit dem Eingabeformat.
- Zeigen Sie genau, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden.
Wir werden uns als Nächstes dem [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) widmen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
