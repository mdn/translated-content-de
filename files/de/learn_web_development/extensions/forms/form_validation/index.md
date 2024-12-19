---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt sind und das richtige Format haben, bevor die von Nutzern eingegebenen Formulardaten an den Server gesendet werden. Diese **client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den in den verschiedenen Formularelementen festgelegten Anforderungen entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computergrundkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist und wie verschiedene Techniken zur Implementierung angewandt werden können.
      </td>
    </tr>
  </tbody>
</table>

Die client-seitige Validierung ist eine erste Prüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung; indem ungültige Daten auf der Client-Seite abgefangen werden, kann der Nutzer sie sofort korrigieren.
Wenn die Daten den Server erreichen und dann abgelehnt werden, entsteht eine merkliche Verzögerung durch die Hin- und Rückreise zum Server und zurück zur Client-Seite, um dem Nutzer mitzuteilen, dass er seine Daten korrigieren muss.

Allerdings sollte client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsprüfungen, für alle formularübermittelten Daten _auf der Server-Seite_ **sowie** auf der Client-Seite durchführen, da die client-seitige Validierung zu einfach zu umgehen ist, sodass bösartige Nutzer immer noch leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um zu erfahren, was _passieren könnte_; die Implementierung von serverseitiger Validierung liegt etwas außerhalb des Geltungsbereichs dieses Moduls, aber Sie sollten daran denken.

## Was ist Formularvalidierung?

Rufen Sie eine beliebte Website mit einem Registrierungsformular auf und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es gültig ist).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich für Ihre Daten).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Einschränkungen sind. Die Validierung, die im Browser durchgeführt wird, nennt man **client-seitige** Validierung, während die Validierung, die auf dem Server durchgeführt wird, als **server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen richtig formatiert sind, ermöglicht die Anwendung die Übermittlung der Daten an den Server und speichert sie (normalerweise) in einer Datenbank; wenn die Informationen nicht richtig formatiert sind, erhält der Nutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht ordnungsgemäß, wenn die Daten unserer Nutzer im falschen Format gespeichert werden, falsch oder gar nicht erfasst werden.
- **Wir möchten die Daten unserer Nutzer schützen.** Indem wir unsere Nutzer zwingen, sichere Passwörter einzugeben, können wir ihre Kontoinformationen leichter schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie bösartige Nutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert und ungültige Eingaben auf der Client-Seite verhindert, kann ein bösartiger Nutzer die Netzwerkanfrage immer noch ändern.

## Verschiedene Arten der client-seitigen Validierung

Es gibt zwei verschiedene Arten der client-seitigen Validierung, die Sie im Web finden werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die vom Nutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird generell empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung mit JavaScript bei Bedarf zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eines der bedeutendsten Merkmale von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen.
Dies wird durch die Verwendung von Validierungsattributen auf Formularelementen erreicht.
Viele davon haben wir bereits früher im Kurs gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen sowie das Inkrement oder den Schritt für Werte an, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer bestimmter voreingestellter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Spezifiziert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions), der ein Muster definiert, das die eingegebenen Daten befolgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute vorgegebenen Regeln befolgen, werden sie als gültig betrachtet. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gelten folgende Dinge:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement entspricht auch der {{cssxref(":user-valid")}}, wenn der Nutzer mit dem Steuerelement interagiert hat, und kann anderen UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen, abhängig vom Eingabetyp und den Attributen.
- Wenn der Nutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, sofern nichts anderes es davon abhält (z.B. JavaScript).

Wenn ein Element ungültig ist, gelten folgende Dinge:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Nutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie z.B. {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese erlauben es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Nutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung hängt von der Art des Fehlers ab. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Start-File

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, bei der Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel beinhaltet ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einer Senden-{{htmlelement("button")}}.

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

Um zu beginnen, erstellen Sie eine Kopie der [`fruit-start.html`-Datei auf GitHub gefunden](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, wobei beim Senden eine Fehlermeldung angezeigt wird, wenn die Eingabe leer ist.
Solange die Eingabe leer ist, wird sie auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer gleichnamigen Gruppe das `required` Attribut hat, muss einer der Radio-Buttons in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; der aktivierte Radio-Button muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Fordern Sie nur die Eingabe von Daten an, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrem Eingabeelement ein `required` Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(required)" zum {{htmlelement("label")}} hinzugefügt, um den Nutzer darauf hinzuweisen, dass das {{htmlelement("input")}} erforderlich ist. Den Nutzern mitzuteilen, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es wird auch von den WCAG [Zugänglichkeitsrichtlinien](/de/docs/Learn_web_development/Core/Accessibility) gefordert.

Wir schließen CSS-Stile ein, die auf das Element angewandt werden, je nachdem, ob das Element erforderlich, gültig und ungültig ist:

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

Dieses CSS sorgt dafür, dass die Eingabe ein rot gestricheltes Rahmen erhält, wenn sie ungültig ist, und einen subtileren soliden schwarzen Rahmen, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im untenstehenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [Live `required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert zu übermitteln. Beachten Sie, wie die ungültige Eingabe fokussiert wird, eine Standardfehlermeldung ("Please fill out this field") erscheint und das Formular daran gehindert wird, gesendet zu werden. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) einsehen.

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen abzugleichen, sodass regexps ideal für die Formularvalidierung sind und eine Vielzahl anderer Verwendungen in JavaScript dienen.

Regexps sind ziemlich komplex und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren.
Unten finden Sie einige Beispiele, die Ihnen eine grundlegende Vorstellung davon geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa`, und so weiter).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, gefolgt von einem optionalen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, gefolgt von einer beliebigen Anzahl von `b`, gefolgt von `c`. (`ac`, `abc`, `abbbbbc`, und so weiter).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y`, und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Reguläre Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

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

Das ergibt das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}} Element eine von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß-/kleinschreibungsempfindlich, aber wir haben es so angepasst, dass es sowohl kapitalisierte als auch kleingeschriebene Versionen mit einem zusätzlichen "Aa"-Muster unterstützt, das in eckigen Klammern eingebettet ist.

Versuchen Sie an dieser Stelle, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attributs zu ändern, um einige der zuvor gesehenen Beispiele zu entsprechen, und schauen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es geht.
Machen Sie sie nach Möglichkeit obstbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, dann passt die `input` zur Pseudoklasse {{cssxref(':invalid')}}. Wenn es leer ist und das Element nicht erforderlich ist, gilt es nicht als ungültig.

Einige {{HTMLElement("input")}} Eingabetypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise validiert der `email` Typ den Eingabewert gegen ein gut geformtes E-Mail-Adressen-Muster oder ein Muster, das eine durch Kommas getrennte Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder durch Verwendung der [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Attribute einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als den [`minlength`](/de/docs/Web/HTML/Attributes/minlength) Wert oder mehr als den [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Wert hat.

Browser lassen Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, auch ein Zählfeedback auf zugängliche Weise bereitzustellen und dem Benutzer die Möglichkeit zu geben, seinen Inhalt zu kürzen.
Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dieses bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für Benutzer bereitgestellten Eingaben gemeldet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und der verschiedenen Datumseingabetypen, können die [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Löschen Sie nun den Inhalt des `<body>` Elements und ersetzen Sie ihn durch das Folgende:

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

- Hier sehen Sie, dass wir dem `text` Feld ein `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche hat.
- Wir haben dem `number` Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Nutzer können die Inkrement-/Dekrementpfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Nutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Probieren Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut annehmen. Dieses Attribut gibt an, um welches Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie die Auf- und Abwärtsnummerntasten oder das Verschieben des Daumens des Bereichs). Das `step` Attribut wird in unserem Beispiel weggelassen, sodass der Wert standardmäßig `1` ist. Dies bedeutet, dass Floats, wie 3.2, auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der integrierten Validierungsfunktionen von HTML zu zeigen.
Zuerst ein wenig HTML:

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

Und nun ein wenig CSS, um das HTML zu gestalten:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte zu beschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt werden wir die verschiedenen Möglichkeiten betrachten, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die in den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement (falls vorhanden) nicht erfüllt. Wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird diese Methode eine leere Zeichenfolge zurückgeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie finden vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite; unten sind einige der häufigeren genannt:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem spezifizierten [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut angegeben wird, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angegeben wird, oder `false`, wenn er länger oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut angegeben wird, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut angegeben wird, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntaxformat ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist) oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und somit als gültig betrachtet wird, oder `false`, wenn es eine Beschränkung verletzt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; ansonsten der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert hat, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; andernfalls `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form) Element bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Elementwert keine Gültigkeitsprobleme hat; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mit Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit` Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet und der spezifizierte Fehler angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler zu erstellen, der über die Standard-HTML-Validierungsbeschränkungen hinausgeht. Die Nachricht wird dem Nutzer beim Melden des Problems angezeigt.

#### Implementierung einer maßgeschneiderten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungsbeschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Nutzer versucht, ein ungültiges Formular zu übermitteln, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatischen Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Spracheinstellung des Browsers ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durchgehen, wie das gemacht werden kann.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in einer leeren HTML-Datei zu platzieren; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie das folgende JavaScript der Seite hinzu:

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

Hier speichern wir eine Referenz auf das E-Mail-Eingabefeld und fügen dann einen Ereignis-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die Eigenschaft `validity.typeMismatch` des E-Mail-Eingabe feldes `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine gut geformte E-Mail-Adresse entspricht. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass die Übermittlung des Formulars fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird, wenn Sie versuchen, das Formular zu senden.

Wenn die `validity.typeMismatch` Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()` Methode mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung wird die Übermittlung des Formulars blockiert, wenn ein Formularelement einen `customError` hat, der nicht der leere String ist.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, alle eingebauten Formularvalidierungen zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier zeigen wir, wie Sie die integrierte [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML {{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle neuer Eingaben setzt der Code zunächst die benutzerdefinierte Gültigkeitsnachricht zurück, indem er `setCustomValidity("")` aufruft.
Er verwendet dann `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und bricht, wenn ja, den Ereignishandler ab.
Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Beschränkung hinzu, indem `setCustomValidity()` mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht mit `@example.com` endet.

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

Sie können dieses Beispiel auf der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Beispiel-Demolink')}} ausprobieren.
Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, einzugeben.

#### Ein ausführlicheres Beispiel

Nachdem wir ein sehr einfaches Beispiel gesehen haben, schauen wir uns an, wie wir mit dieser API eine etwas komplexere benutzerdefinierte Validierung erstellen können.

Zuerst das HTML. Fühlen Sie sich erneut frei, dies mit uns zu bauen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren. Die Einstellung des `novalidate` Attributs für das Formular verhindert, dass das Formular eigene Fehlermeldungsblasen zeigt, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen im DOM in einer uns gewählten Weise anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch für die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw.
Das bedeutet, dass Sie, obwohl der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor er seine Daten sendet, es selbst tun und das Formular entsprechend gestalten können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir streben an, die Fehlermeldungen in einem `<span>` Element anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich dem vorgelesen werden für Bildschirmlesegeräte-Nutzer.

Nun zu etwas grundlegendem CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlervalidierung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier holen wir uns das Formular selbst und das E-Mail-Eingabefeld sowie das Span-Element, in das die Fehlermeldung gelegt wird.

Mit Ereignishandlern überprüfen wir, ob die Formularfelder jedes Mal gültig sind, wenn der Nutzer etwas eingibt. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn es gültig ist, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular zu übermitteln, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular übermittelt werden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Übermitteln des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()` Funktion verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie finden dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug zur Hand, um Formularvalidierungen zu handhaben und Ihnen enorme Kontrolle über die Benutzeroberfläche zu geben, weit über das hinaus, was Sie nur mit HTML und CSS machen können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), werden Sie die Constraint Validation API möglicherweise nicht verwenden können oder wollen. Sie können dennoch JavaScript verwenden, um Ihr Formular zu validieren, müssen es jedoch selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typkonversion, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was soll ich tun, wenn das Formular nicht gültig ist?
  - : Dies ist eindeutig eine Benutzeroberflächenangelegenheit. Sie müssen entscheiden, wie sich das Formular verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die falsch sind?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Nutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Nutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu unterstützen.
    Sie sollten im Voraus Vorschläge machen, damit er weiß, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in die UI-Anforderungen der Formularvalidierung eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/Learn_web_development/Extensions/Forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ähnlich müssen sich die CSS nicht sehr ändern; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse verwandelt und die Attributselektoren vermieden.

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

/* invalid fields */
input#mail.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* error messages */
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

Die großen Änderungen sind im JavaScript-Code, der viel mehr Arbeit leisten muss.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

Wie Sie sehen können, ist es gar nicht so schwer, ein Validierungssystem selbst zu erstellen. Das Schwierige ist, es so generisch zu machen, dass es sowohl plattformübergreifend als auch in allen Formularen, die Sie möglicherweise erstellen, verwendet werden kann. Es gibt viele Bibliotheken, die zur Formularvalidierung zur Verfügung stehen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber es erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Nutzern bei der Korrektur der von ihnen bereitgestellten Daten zu helfen. Achten Sie darauf, dass Sie:

- Deutliche Fehlermeldungen anzeigen.
- Großzügig das Eingabeformat hinsichtlich zulassen.
- Genau darauf hinweisen, wo der Fehler auftritt, insbesondere in großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden.
Wir werden als Nächstes das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
