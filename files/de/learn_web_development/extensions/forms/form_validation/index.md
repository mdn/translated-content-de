---
title: Formvalidierung auf der Client-Seite
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularfelder im richtigen Format ausgefüllt sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **Formvalidierung auf der Client-Seite** hilft zu gewährleisten, dass die eingegebenen Daten den Anforderungen entsprechen, die in den verschiedenen Formularelementen festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Formvalidierung auf der Client-Seite.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, was Formvalidierung auf der Client-Seite ist, warum sie wichtig ist
        und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Client-Seite ist ein erster Check und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Abfangen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren. Wenn die Daten auf dem Server landen und dann abgelehnt werden, entsteht durch den Roundtrip zwischen Server und Client eine merkliche Verzögerung, die den Benutzer dazu auffordert, die Daten zu korrigieren.

Allerdings sollte die Validierung auf der Client-Seite _nicht als_ umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsprüfungen, sowohl auf der _Server-Seite_ als auch auf der Client-Seite durchführen, da die Validierung auf der Client-Seite zu einfach zu umgehen ist, sodass böswillige Benutzer dennoch leicht falsche Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Validierung auf der Server-Seite liegt teilweise außerhalb des Umfangs dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formvalidierung?

Gehen Sie auf eine beliebte Seite mit einem Registrierungsformular und Ihnen wird auffallen, dass sie ein Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird **Formvalidierung** genannt.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im korrekten Format und innerhalb der vom Anwendungsprogramm festgelegten Beschränkungen vorliegen. Die im Browser durchgeführte Validierung wird **Client-seitige** Validierung genannt, während die Validierung auf dem Server **Server-seitige** Validierung genannt wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, kann die Anwendung die Daten an den Server übermitteln und (in der Regel) in einer Datenbank speichern; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und darf es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert, falsch oder gar nicht vorhanden sind.
- **Wir wollen die Daten unserer Benutzer schützen.** Wenn wir unsere Benutzer dazu zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir wollen uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Websicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals den Daten, die von einem Client an Ihren Server gesendet werden. Auch wenn Ihr Formular richtig validiert und ungültige Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerk-Anfrage noch immer verändern.

## Verschiedene Arten der Validierung auf der Client-Seite

Es gibt zwei verschiedene Arten der Validierung auf der Client-Seite, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel hinzugefügt, um HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Client-seitige Validierung kann mit wenig oder gar keinem JavaScript durchgeführt werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird im Allgemeinen empfohlen, Ihre Formulare mit den robusten HTML-Funktionen zu beginnen und dann die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Verwendung integrierter Formularvalidierung

Eine der bemerkenswertesten Eigenschaften von [Formular-Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen.
Dies wird durch die Verwendung von Validierungsattributen an den Formularelementen erreicht.
Wir haben viele dieser Attribute bereits im Verlauf gesehen, aber hier nochmal zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt sein muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge von textuellen Daten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte numerischer Eingabetypen an und das Inkrement oder den Schritt für Werte, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderes spezifisches, voreingestelltes Format haben müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der angibt, welches Muster die eingegebenen Daten befolgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die Attribute festgelegten Regeln befolgen, wird sie als gültig angesehen. Andernfalls wird sie als ungültig angesehen.

Wenn ein Element gültig ist, trifft Folgendes zu:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden. Das Steuerelement wird auch {{cssxref(":user-valid")}} entsprechen, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann je nach Eingabetyp und Attributen andere UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, dass es nichts gibt, das dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, trifft Folgendes zu:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können je nach Fehler ebenfalls übereinstimmen, z. B. {{cssxref(":out-of-range")}}. Diese erlauben es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formulareinsendung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startbeispiel

Lassen Sie uns mit einem einfachen Beispiel beginnen: einer Eingabe, die Sie wählen lässt, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel beinhaltet eine einfache textuelle {{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einer Senden-Schaltfläche {{htmlelement("button")}}.

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

Zu Beginn machen Sie eine Kopie der [`fruit-start.html` Datei auf GitHub gefunden](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Ein häufig verwendetes HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Sobald dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, wobei bei der Übermittlung eine Fehlermeldung angezeigt wird, wenn die Eingabe leer ist.
Während es leer ist, wird die Eingabe auch als ungültig betrachtet, da sie der {{cssxref(':invalid')}} UI-Pseudoklasse entspricht.

Wenn eine der Radiotasten in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eine der Radiotasten in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; die aktivierte Radiotaste muss nicht unbedingt diejenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Fordern Sie Benutzer nur auf, Daten einzugeben, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie ein `required`-Attribut zu Ihrer Eingabe hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir fügten "(erforderlich)" zu dem {{htmlelement("label")}} hinzu, um den Benutzer darüber zu informieren, dass die {{htmlelement("input")}} erforderlich ist. Die Benutzer darüber zu informieren, wann Formularfelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es ist auch von den WCAG [Accessibility](/de/docs/Learn_web_development/Core/Accessibility) Richtlinien vorgeschrieben.

Wir fügen CSS-Stile hinzu, die angewendet werden, basierend darauf, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS führt dazu, dass die Eingabe eine rote gestrichelte Umrandung hat, wenn sie ungültig ist, und eine subtilere durchgehende schwarze Umrandung, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im untenstehenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [live `required` Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert zu übermitteln. Beachten Sie, wie der ungültige Eingabefokus, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular daran gehindert wird, gesendet zu werden. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) sehen.

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen zu passen, daher sind regexps ideal für die Formularvalidierung und dienen einer Vielzahl anderer Anwendungen in JavaScript.

Regexps sind ziemlich komplex und wir beabsichtigen nicht, Sie in diesem Artikel umfassend zu lehren.
Unten sind einige Beispiele, um Ihnen einen grundlegenden Überblick darüber zu geben, wie sie funktionieren.

- `a` — Passt auf ein Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, gefolgt von einem optionalen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt auf `a`, gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Passt auf ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht behandeln.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut wie folgt hinzuzufügen:

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

Dies gibt uns die folgende Aktualisierung — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie finden dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In diesem Beispiel akzeptiert das {{HTMLElement("input")}} Element einer von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß- und kleinschreibungsempfindlich, aber wir haben es unterstützt sowohl die Groß- als auch die Kleinbuchstabenversionen zu verwenden, indem wir ein zusätzliches "Aa" Muster innerhalb von eckigen Klammern verschachtelt haben.

Versuchen Sie an dieser Stelle, den Wert im [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut so anzupassen, dass einige der früher gesehenen Beispiele berücksichtigt werden, und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es geht.
Machen Sie sie nach Möglichkeit fruchtbezogen, damit Ihre Beispiele Sinn machen!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird die `input` der {{cssxref(':invalid')}} Pseudoklasse entsprechen. Ist sie leer und das Element ist nicht erforderlich, wird sie nicht als ungültig angesehen.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise überprüft die Angabe des `email` Typs den Wert der Eingaben gegen ein Muster für eine wohlgeformte E-Mail-Adresse oder ein Muster, das einer kommagetrennten Liste von E-Mail-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt nicht das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut.

### Einschränken der Länge Ihrer Einträge

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder einschränken, indem Sie die [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Attribute verwenden.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Wert hat.

Browser erlauben häufig nicht, dass der Benutzer einen längeren Wert als erwartet in Textfeldern eingibt. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, auch eine Zeichenanzahl-Rückmeldung auf eine zugängliche Art und Weise zur Verfügung zu stellen und den Benutzer ihre Inhalte bearbeiten zu lassen, um sie auf Größe zu reduzieren. Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzerbereitgestellte Eingaben gemeldet.

### Einschränkung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und den verschiedenen Datumseingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Lassen Sie uns ein weiteres Beispiel betrachten. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Löschen Sie nun den Inhalt des `<body>` Elements, und ersetzen Sie ihn durch Folgendes:

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

- Hier sehen Sie, dass wir dem `text` Feld eine `minlength` und `maxlength` von sechs gegeben haben, was der gleichen Länge wie Banane und Kirsche entspricht.
- Wir haben dem `number` Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verringerungspfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer eine Zahl außerhalb dieses Bereichs manuell eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, daher wird das Entfernen des Wertes zu einem gültigen Wert führen.

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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut annehmen. Dieses Attribut gibt an, in welchem Inkrement der Wert erhöht oder verringert wird, wenn die Steuerelemente verwendet werden (wie die Auf- und Abnummernknöpfe oder das Verschieben des Reglers). Das `step`-Attribut fehlt in unserem Beispiel, daher wird der Standardwert `1` verwendet. Dies bedeutet, dass Fließkommazahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel zur Verwendung der eingebauten Validierungsfunktionen von HTML. Zuerst etwas HTML:

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

Und nun etwas CSS, um dem HTML ein wenig Stil zu verleihen:

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

Das wird wie folgt gerendert:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Attribute im Zusammenhang mit der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die über die folgenden DOM-Interfacse für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) Element)

Die Constraint Validation API bietet die folgenden Eigenschaften für die oben genannten Elemente.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState` Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitsstatus des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften in der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite finden; unten sind einige der häufigeren aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut angegeben ist, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut angegeben ist, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als das Maximum ist, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut angegeben ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als das Minimum ist, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut angegeben ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntaxformat vorliegt (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn das Syntaxformat korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und damit als gültig angesehen wird, oder `false`, wenn es eine Beschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; ansonsten der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber keinen Wert, oder `false` ansonsten. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; `false` ansonsten.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form) Element bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` ansonsten. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mit Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit` Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und der angegebene Fehler wird angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler festzustellen, der anders ist als diejenigen, die durch die Standard-HTML-Validierungsbeschränkungen angeboten werden. Die Nachricht wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungsbeschränkungen früher gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu übermitteln, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatischen Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel durcharbeiten, wie dies zu tun ist.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in einer leeren HTML-Datei zu platzieren; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen dann einen Event-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert in der Eingabe ändert.

Innerhalb des enthaltenen Codes überprüfen wir, ob die `validity.typeMismatch` Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine wohlgeformte E-Mail-Adresse entspricht. In diesem Fall rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular abzusenden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch` Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular übermittelt wird. Während der Validierung, wenn irgendein Formularsteuerelement einen `customError` hat, der nicht der leere String ist, wird die Formulareingabe blockiert.

Probieren Sie es unten aus:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu nutzen und dann mit `setCustomValidity()` hinzuzufügen.

Hier demonstrieren wir, wie Sie die eingebaute Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) erweitern können, um nur Adressen mit der Domäne `@example.com` zu akzeptieren. Wir beginnen mit dem HTML {{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Bei jedem neuen Input wird zuerst die benutzerdefinierte Gültigkeitsnachricht zurückgesetzt, indem `setCustomValidity("")` aufgerufen wird. Dann wird `email.validity.valid` verwendet, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und wenn ja, kehrt er vom Event-Handler zurück. Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Sie können dieses Beispiel auf der Seite unter {{LiveSampleLink('Extending_built-in_form_validation', 'Live sample demo link')}} ausprobieren. Versuchen Sie, eine ungültige E-Mail-Adresse einzugeben, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

#### Ein detaillierteres Beispiel

Nachdem wir ein wirklich grundlegendes Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API verwenden können, um etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Bauen Sie dies gerne mit uns zusammen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut, um die automatische Validierung des Browsers auszuschalten. Das Setzen des `novalidate` Attributs am Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und ermöglicht es uns, die benutzerdefinierten Fehlermeldungen auf eine Weise im DOM anzuzeigen, die wir selbst wählen können. Dies deaktiviert jedoch weder die Unterstützung für die Einschränkungsvalidierungs-API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw. Das bedeutet, dass selbst wenn der Browser die Gültigkeit des Formulars vor dem Senden seiner Daten nicht automatisch überprüft, Sie es trotzdem selbst tun und das Formular entsprechend stilisieren können.

Unsere zu validierende Eingabe ist eine [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), die `erforderlich` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede einzelne zeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>` Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut ist auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich der Vorlesung an Bildschirmlesegerätenutzern.

Jetzt zu etwas grundlegendem CSS, um das Aussehen des Formulars etwas zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlervalidierung implementiert. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das E-Mail-Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung einfügen werden.

Mit Event-Handlern überprüfen wir, ob die Formularfelder jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn es keinen Fehler gibt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular senden. Wenn nicht, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen, und verhindern mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), dass das Formular gesendet wird.

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity` Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html) finden.

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug zur Handhabung der Formularvalidierung, das es Ihnen ermöglicht, enorme Kontrolle über die Benutzeroberfläche zu haben, weit über das hinaus, was Sie allein mit HTML und CSS tun können.

### Validierung von Formularen ohne eingebaute API

In einigen Fällen, wie beispielsweise bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder wollen Sie die Constraint Validation API nicht verwenden. Sie können weiterhin JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen es selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich ein paar Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Konvertierung von Typen, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist offensichtlich eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhält. Sendet das Formular die Daten trotzdem?
    Sollten Sie die fehlerhaften Felder hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viel hilfreiche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu leiten.
    Sie sollten Vorschläge im Voraus machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in Formularvalidierungs-UI-Anforderungen eintauchen möchten, hier sind einige nützliche Artikel, die Sie lesen sollten:
    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehlerinformationen in Formularen: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, ist das folgende Beispiel eine vereinfachte Version des vorherigen ohne die Constraint Validation API.

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

Ähnlich benötigt sich das CSS nicht viel zu ändern; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und vermieden, den Attribut-Selektor zu verwenden.

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

Die großen Änderungen sind im JavaScript-Code, der wesentlich mehr Arbeit erledigen muss.

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

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen, ist es nicht so schwierig, ein Validierungssystem selbst zu erstellen. Der schwierige Teil ist es, es so generisch zu machen, dass es sowohl plattformübergreifend als auch in jedem Formular, das Sie erstellen könnten, verwendet werden kann. Es gibt viele Bibliotheken, die zur Formularvalidierung zur Verfügung stehen, wie z.B. [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Form_validation).

## Zusammenfassung

Die Formularvalidierung auf der Client-Seite erfordert manchmal JavaScript, wenn Sie Stil und Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern dabei zu helfen, die Daten zu korrigieren, die sie bereitstellen. Um diesem Ziel gerecht zu werden, denken Sie daran:

- Zeigen Sie explizite Fehlermeldungen an.
- Seien Sie nachsichtig mit dem Eingabeformat.
- Weisen Sie genau darauf hin, wo der Fehler auftritt, besonders bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden. Wir werden uns als Nächstes mit dem [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
