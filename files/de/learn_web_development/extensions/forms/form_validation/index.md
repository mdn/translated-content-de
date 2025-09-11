---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt und im korrekten Format sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server übermittelt werden. Diese **client-seitige Formularvalidierung** hilft, sicherzustellen, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularelemente entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Computern, ein gutes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwenden kann, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die client-seitige Validierung ist ein erster Kontrollschritt und ein wichtiges Merkmal für eine gute Benutzererfahrung; durch das Abfangen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren.
Wenn die Daten zum Server gelangen und dann abgelehnt werden, verursacht dies durch die Rundreise zum Server und zurück zur Client-Seite, um dem Benutzer mitzuteilen, dass die Daten korrigiert werden müssen, eine merkliche Verzögerung.

Client-seitige Validierung sollte jedoch _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten stets eine Validierung, einschließlich Sicherheitsüberprüfungen, für alle formularübermittelten Daten _serverseitig_ **sowie** clientseitig durchführen, da die client-seitige Validierung zu leicht umgangen werden kann, sodass böswillige Benutzer trotzdem fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für eine Idee, was _passieren könnte_; serverseitige Validierung zu implementieren liegt ein wenig außerhalb des Umfangs dieses Moduls, aber Sie sollten dies im Kopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Website mit einem Anmeldeformular, und Sie werden feststellen, dass sie Feedback bereitstellen, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit sie als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Einschränkungen sind. Die im Browser durchgeführte Validierung wird als **client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **serverseitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung das Übermitteln der Daten an den Server und (normalerweise) das Speichern in einer Datenbank; sind die Informationen nicht korrekt formatiert, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und hat die Möglichkeit, es erneut zu versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten, im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen**. Wir zwingen unsere Benutzer dazu, sichere Passwörter einzugeben, was es uns erleichtert, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert wird und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerk-Anfrage immer noch ändern.

## Verschiedene Arten der client-seitigen Validierung

Es gibt zwei verschiedene Arten der client-seitigen Validierung, auf die Sie im Web stoßen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die von den Benutzern eingegebenen Daten sein müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird im Allgemeinen hinzugefügt, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird allgemein empfohlen, mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Eingebaute Formularvalidierung verwenden

Eine der bedeutendsten Eigenschaften von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein.
Dies erfolgt durch die Verwendung von Validierungsattributen an Formularelementen.
Wir haben viele davon bereits früher im Kurs gesehen, aber um sie nochmals zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld vor dem Absenden des Formulars ausgefüllt werden muss.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max), und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte für numerische Eingabetypen sowie das Inkrement oder den Schritt für Werte an, beginnend beim Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifisch voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute festgelegten Regeln erfüllen, wird es als gültig angesehen. Wenn nicht, wird es als ungültig angesehen.

Wenn ein Element gültig ist, gelten die folgenden Dinge:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden. Das Element wird auch der {{cssxref(":user-valid")}} entsprechen, wenn der Benutzer mit dem Element interagiert hat, und kann je nach Eingabeargument und Attributen auch anderen UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, sofern nichts anderes dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten die folgenden Dinge:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Element interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können je nach Fehler ebenfalls zutreffen, z.B {{cssxref(":out-of-range")}}. Diese Pseudoklassen ermöglichen es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird weiter unten beschrieben.

## Beispiele für die eingebaute Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startbeispiel

Lassen Sie uns mit einem einfachen Beispiel beginnen: Einem Eingabefeld, das es Ihnen ermöglicht, auszuwählen, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel umfasst ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Übermittlungs-{{htmlelement("button")}}.

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

Um zu beginnen, machen Sie eine Kopie der Datei [`fruit-start.html` auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das erforderliche Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut.
Fügen Sie dieses Attribut zu einem Eingabefeld hinzu, um ein Element als obligatorisch zu kennzeichnen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird beim Absenden eine Fehlermeldung anzeigen, wenn die Eingabe leer ist.
Während es leer ist, wird das Eingabefeld auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer Gruppe mit demselben Namen das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe für die Gültigkeit der Gruppe aktiviert sein; der aktivierte Radio-Button muss nicht derjenige sein, der das Attribut gesetzt hat.

> [!NOTE]
> Fordern Sie nur die Eingabe von Daten an, die Sie benötigen: Ist es beispielsweise wirklich notwendig, das Geschlecht oder den Titel von jemandem zu wissen?

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzern anzuzeigen, wann Formulareingaben erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es wird auch von den WCAG-[Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Richtlinien gefordert.

Wir schließen CSS-Stile ein, die basierend darauf angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS sorgt dafür, dass die Eingabe, während sie ungültig ist, eine gestrichelte rote Umrandung hat und, wenn sie gültig ist, eine subtilere, schwarze durchgezogene Umrandung hat.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [live required Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert abzusenden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular nicht gesendet werden kann. Sie können sich auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) ansehen.

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (Regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu überprüfen, sodass Regexp ideal für die Formularvalidierung ist und eine Vielzahl anderer Anwendungen in JavaScript findet.

Regexps sind recht komplex, und wir beabsichtigen nicht, Ihnen diese in diesem Artikel erschöpfend beizubringen.
Nachfolgend sind einige Beispiele aufgeführt, die Ihnen eine grundlegende Vorstellung davon vermitteln sollen, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzigen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, optional gefolgt von beliebig vielen `b`, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut hinzuzufügen, wie folgt:

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

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) ausprobieren und sich den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind großgeschrieben, aber wir haben das Beispiel so gestaltet, dass es sowohl Groß- als auch Kleinbuchstaben unterstützt, durch ein zusätzliches "Aa"-Muster, das in eckigen Klammern verschachtelt ist.

Versuchen Sie nun, den Wert des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs auf einige der früher gesehenen Beispiele zu ändern und sehen Sie sich an, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige eigene zu schreiben, und sehen Sie, wie es läuft.
Machen Sie sie, wenn möglich, fruchtbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird die `input`-Eingabe der {{cssxref(':invalid')}} Pseudoklasse entsprechen. Wenn leer, und das Element ist nicht erforderlich, wird es nicht als ungültig angesehen.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise überprüft das Festlegen des `email` Typs den Eingabewert gegen ein Muster für eine gut formatierte E-Mail-Adresse oder gegen ein Muster in einer durch Kommas getrennten Liste von E-Mail-Adressen, falls es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller von {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder durch Verwenden der Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Wert.

Browser lassen den Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur mit `maxlength` ist es, auch Rückmeldungen zur Zeichenzahl in einer barrierefreien Weise zur Verfügung zu stellen und den Benutzer zu ermöglichen, seinen Inhalt auf die korrekte Größe zu bearbeiten.
Ein Beispiel hierfür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann hierfür verwendet werden.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert festgelegt wird. Sie werden nur für benutzergenerierte Eingaben gemeldet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich gültiger Werte anzugeben.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es als ungültig angesehen.

Schauen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der Datei [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html).

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

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und ein `maxlength` von sechs gegeben haben, was der gleichen Länge wie "banana" und "cherry" entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können nicht die Inkrement-/Dekrementpfeile verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer eine Zahl außerhalb dieses Bereichs manuell eingibt, sind die Daten ungültig.
  Da die Zahl nicht erforderlich ist, führt das Entfernen des Werts zu einem gültigen Wert.

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

Hier ist das Beispiel live:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode an](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut verwenden. Dieses Attribut gibt an, welches Inkrement der Wert erhöhen oder verringern wird, wenn die Eingabesteuerungen verwendet werden (wie die Auf- und Ab-Nummerntasten oder das Verschieben des Bereichsdaumens). Das `step`-Attribut wird in unserem Beispiel weggelassen, sodass der Wert standardmäßig auf `1` gesetzt ist. Das bedeutet, dass Fließkommazahlen, wie 3.2, auch als ungültig angezeigt werden.

### Volles Beispiel

Hier ist ein volles Beispiel, um die Verwendung der eingebauten Validierungsfunktionen von HTML zu zeigen.
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

Dieses [volle Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte einzuschränken und die unterstützten Eingabetypen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Wenn die Steuerung kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements ihre Einschränkungen erfüllt (gültig ist), gibt dies einen leeren String zurück.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitsstatus des Elements beschreiben. Sie können alle verfügbaren Eigenschaften im [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzdokument im Detail nachlesen; nachfolgend sind einige der gebräuchlicheren aufgeführt:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut spezifiziert wird, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut spezifiziert wird, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut spezifiziert wird, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als das Minimum ist, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut spezifiziert wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut aufweist, aber keinen Wert hat, oder `false` anderweitig. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element überprüft wird, wenn das Formular abgeschickt wird; andernfalls `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form) Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Events. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Event-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet, und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler festzustellen, der von den Standard-HTML-Validierungseinschränkungen nicht geboten wird. Die Nachricht wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den früheren Beispielen zu den HTML-Validierungsbeschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular einzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatischen Nachrichten haben zwei Nachteile:

- Es gibt keine standardisierte Möglichkeit, ihr Erscheinungsbild mit CSS zu ändern.
- Sie sind abhängig von der Browsersprache, was bedeutet, dass Sie auf einer Seite in einer Sprache sein können, während eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Screenshot von Firefox in Französisch zu sehen ist.

![Beispiel für eine Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist eine der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durcharbeiten, wie man dies tun kann.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie die folgende JavaScript-Datei zur Seite hinzu:

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

Hier speichern wir eine Referenz auf die E-Mail-Eingabe, dann fügen wir ihr einen Event-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine wohlgeformte E-Mail-Adresse entspricht. Falls ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass bei einem Versuch, das Formular abzusenden, die Abgabe fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular abgesendet wird. Während der Validierung, wenn irgendein Formularelement einen `customError` hat, der nicht der leere String ist, wird das Absenden des Formulars blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie finden dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die eingebauten Formularvalidierungen zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}}-Beispiel unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird wie folgt gezeigt.
Im Falle neuer Eingaben setzt der Code zuerst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft.
Er verwendet dann `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und gibt bei Bedarf die Ereignisbehandlung zurück.
Dies stellt sicher, dass alle normalen eingebauten Validierungsüberprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem er `setCustomValidity()` mit einer Fehlermeldung aufruft, wenn die Adresse nicht mit `@example.com` endet.

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

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, schauen wir, wie wir diese API verwenden können, um etwas komplexere benutzerdefinierte Validierung zu erstellen.

Erstens, das HTML. Wieder, fühlen Sie sich frei, dies zusammen mit uns zu bauen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut, um die automatische Überprüfung des Browsers auszuschalten. Durch das Festlegen des `novalidate`-Attributs auf dem Formular werden keine eigenen Fehlermeldungsblasen angezeigt, und es wird uns ermöglicht, stattdessen die benutzerdefinierten Fehlermeldungen im DOM auf irgendeine Weise unserer Wahl anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung der Constraint Validation API oder die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw.
Dies bedeutet, dass auch wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor seine Daten gesendet werden, Sie dies immer noch selbst tun und das Formular entsprechend stilisieren können.

Unsere zu überprüfende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist, und eine `minlength` von 8 Zeichen. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jeden Fehler anzeigen.

Wir streben an, die Fehlermeldungen innerhalb eines `<span>`-Elements zu zeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut ist diesem `<span>`-Element zugeordnet, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung für jeden präsentiert wird, einschließlich dass sie den Nutzern von Bildschirmlesegeräten vorgelesen wird.

Nun zum Basic-CSS, um das Aussehen des Formulars leicht zu verbessern und ein visuelles Feedback zu liefern, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlervalidierung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst, das E-Mail-
Eingabefeld, sowie das Span-Element, in das wir die Fehlermeldung einfügen werden.

Durch die Verwendung von Event-Handlern überprüfen wir jedes Mal, ob die Formulardaten gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular zu übermitteln, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular übermittelt werden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), dass das Formular abgeschickt wird.

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts des Eingabefelds, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie finden dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein mächtiges Werkzeug zur Handhabung der Formularvalidierung, das Ihnen eine enorme Kontrolle über die Benutzeroberfläche ermöglicht, weit über das hinaus, was Sie alleine mit HTML und CSS tun können.

### Validierung von Formularen ohne eingebaute API

In einigen Fällen, wie bei [benutzerdefinierten Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), werden Sie die Constraint Validation API nicht verwenden können oder wollen. Sie können JavaScript immer noch verwenden, um Ihr Formular zu validieren, aber Sie werden es selbst schreiben müssen.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren können: String-Operationen, Typumwandlung, reguläre Ausdrücke und so weiter. Das liegt bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Angelegenheit der Benutzeroberfläche. Sie müssen entscheiden, wie das Formular sich verhalten soll. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die Fehler aufweisen?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu führen.
    Sie sollten im Voraus Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in die Anforderungen an die Benutzeroberflächenvalidierung von Formularen eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:
    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingabe validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, finden Sie im Folgenden eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast das gleiche; wir haben nur die HTML-Validierungsfunktionen entfernt.

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

Ähnlich muss das CSS nicht sehr viel geändert werden; wir haben einfach die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und vermieden, den Attributselektor zu verwenden.

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

Die großen Änderungen liegen im JavaScript-Code, der viel mehr leisten muss.

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
const updateError = (isValid) => {
  if (isValid) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// Handle input event to update email validity
const handleInput = () => {
  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
  event.preventDefault();

  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
const validity = isValidEmail();
setEmailClass(validity);
// This defines what happens when the user types in the field
email.addEventListener("input", handleInput);
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu bauen. Der schwierige Teil ist, es so generisch zu machen, dass es sowohl plattformübergreifend als auch für jedes Formular, das Sie möglicherweise erstellen, verwendet werden kann. Es gibt viele Bibliotheken, die zur Formularvalidierung verfügbar sind, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die Daten zu korrigieren, die sie bereitstellen. Um dieses Ziel zu erreichen, stellen Sie sicher, dass Sie:

- Eindeutige Fehlermeldungen anzeigen.
- Nachsichtig gegenüber dem Eingabeformat sind.
- Genau aufzeigen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt wurde, kann das Formular übermittelt werden.
Wir werden als Nächstes das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
