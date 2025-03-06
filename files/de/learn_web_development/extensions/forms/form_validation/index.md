---
title: Client-seitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formular-Steuerelemente ausgefüllt und im korrekten Format vorliegen, bevor die vom Benutzer eingegebenen Formulardaten an den Server übermittelt werden. Diese **client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den in den verschiedenen Formular-Steuerelementen festgelegten Anforderungen entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

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
        Zu verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist
        und wie verschiedene Techniken zur Implementierung angewendet werden können.
      </td>
    </tr>
  </tbody>
</table>

Client-seitige Validierung ist eine erste Prüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Abfangen ungültiger Daten auf der Client-Seite kann der Benutzer sie sofort korrigieren. Wenn es zum Server gelangt und dann abgelehnt wird, wird durch eine Rundreise zum Server und zurück zur Client-Seite, um dem Benutzer mitzuteilen, seine Daten zu korrigieren, eine spürbare Verzögerung verursacht.

Dennoch sollte die client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsüberprüfungen, auf allen formularübermittelten Daten _auf der Server-Seite_ **sowie** auf der Client-Seite durchführen, da die client-seitige Validierung zu einfach zu umgehen ist, sodass böswillige Benutzer immer noch problemlos fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Webseitensicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung von serverseitiger Validierung geht teilweise über den Umfang dieses Moduls hinaus, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Seite mit einem Registrierungsformular, und Ihnen wird auffallen, dass diese Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Es ist ein spezifisches Datenformat erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat wird für Ihre Daten benötigt).

Dies wird als **Formularvalidierung** bezeichnet. Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Beschränkungen vorliegen. Die im Browser durchgeführte Validierung wird als **client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung die Übermittlung der Daten an den Server und speichert sie (in der Regel) in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und lässt ihn es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich machen. Warum also bestehen wir darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, falsch sind oder ganz ausgelassen werden.
- **Wir möchten die Daten unserer Benutzer schützen**. Wenn wir unsere Benutzer dazu zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung zu schaden. Siehe [Webseitensicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server übermittelt werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer die Netzwerkanfrage dennoch ändern.

## Verschiedene Arten der client-seitigen Validierung

Es gibt zwei verschiedene Arten der client-seitigen Validierung, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung** HTML-Attributen können definieren, welche Formular-Steuerelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung** JavaScript wird in der Regel eingebunden, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Die client-seitige Validierung kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, jedoch weniger anpassbar als die JavaScript-Validierung. Es wird im Allgemeinen empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann bei Bedarf die Benutzererfahrung mit JavaScript zu verbessern.

## Verwenden der integrierten Formularvalidierung

Eine der bedeutendsten Eigenschaften von [Formular-Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein. Dies geschieht durch die Verwendung von Validierungsattributen auf Formularelementen. Viele dieser Attribute haben wir bereits im Kurs behandelt, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen und den Schritt, oder die Steigerung, für Werte an, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Vortyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute festgelegten Regeln befolgen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gelten die folgenden Dinge als wahr:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, mit der Sie einen bestimmten Stil auf gültige Elemente anwenden können. Das Steuerelement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und es kann auch anderen UI-Pseudoklassen entsprechen, wie zum Beispiel {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, es gibt nichts anderes, was ihn daran hindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten die folgenden Dinge als wahr:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Fehlerart. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Eingebaute Formularvalidierungsbeispiele

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Einfaches Anfangsdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, bei der Sie wählen können, ob Sie lieber eine Banane oder eine Kirsche möchten. Dieses Beispiel umfasst eine grundlegende Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Submit-{{htmlelement("button")}}.

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

Machen Sie zu Beginn eine Kopie der [`fruit-start.html` datei auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Eine häufige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Attributes/required) Attribut. Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element obligatorisch zu machen. Wenn dieses Attribut festgelegt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht übermittelt und zeigt eine Fehlermeldung bei der Einreichung, wenn die Eingabe leer ist. Während es leer ist, wird die Eingabe auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer gleichnamigen Gruppe das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; der aktivierte Radio muss nicht derjenige sein, bei dem das Attribut gesetzt ist.

> [!NOTE]
> Verlangen Sie von Benutzern nur Daten, die Sie benötigen: Ist es zum Beispiel wirklich notwendig zu wissen, welches Geschlecht oder welchen Titel jemand hat?

Fügen Sie wie unten gezeigt ein `required`-Attribut zu Ihrer Eingabe hinzu.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass die {{htmlelement("input")}} erforderlich ist. Den Benutzern zu zeigen, wann Felder im Formular notwendig sind, ist nicht nur eine gute Benutzererfahrung, es wird auch in den WCAG [Barrierefreiheit](/de/docs/Learn_disk.format.development/Core/Accessibility) Richtlinien verlangt.

Wir fügen CSS-Stile hinzu, die je nachdem angewendet werden, ob das Element erforderlich, gültig und ungültig ist:

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

Dieses CSS bewirkt, dass die Eingabe einen roten gestrichelten Rand hat, wenn sie ungültig ist, und einen subtileren, schwarzen, durchgehenden Rand, wenn sie gültig ist. Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im Beispiel unten aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular aus dem [Live-`required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular nicht gesendet wird. Sie können auch den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) ansehen.

### Validierung mit einem regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (Regex) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen zu überprüfen, sodass Regexe ideal für die Formularvalidierung sind und auch in einer Vielzahl anderer Anwendungen in JavaScript verwendet werden.

Regexe sind ziemlich komplex, und wir beabsichtigen nicht, Ihnen sie in diesem Artikel erschöpfend beizubringen. Unten sind einige Beispiele, die Ihnen eine grundlegende Vorstellung davon geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken. Eine vollständige Liste und viele Beispiele finden Sie in unserer [Dokumentation zu regelmäßigen Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut wie dieses hinzuzufügen:

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

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) finden zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind standardmäßig case-sensitiv, aber wir haben es gemacht, damit sie sowohl die großgeschriebene als auch die kleingeschriebene Version unterstützen, indem wir ein zusätzliches "Aa"-Muster in eckige Klammern eingeschlossen haben.

An dieser Stelle versuchen Sie, den Wert im [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut zu ändern, um einigen der zuvor gesehenen Beispiele zu entsprechen, und sehen, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen. Versuchen Sie, einige Ihrer eigenen zu schreiben und zu sehen, wie es läuft. Machen Sie sie nach Möglichkeit obstbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht die `input` der {{cssxref(':invalid')}} Pseudoklasse. Wenn sie leer ist und das Element nicht erforderlich ist, wird sie nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, um mit einem regulären Ausdruck überprüft zu werden. Zum Beispiel überprüft die Angabe des `email`-Typs den Wert der Eingaben auf ein gut geformtes E-Mail-Adressmuster oder ein Muster, das einer komma-getrennten Liste von E-Mail-Adressen entspricht, wenn sie das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut nicht.

### Einschränken der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mit den Attributen [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Attributes/minlength) oder mehr als der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) -Wert hat.

Browser lassen den Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden ist es auch, Feedback zur Zeichenzahl auf eine barrierefreie Weise bereitzustellen und den Benutzer ihren Inhalt kürzen zu lassen. Ein Beispiel dafür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich der [Lösungen unter Verwendung von `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann dafür verwendet werden.

> [!NOTE]
> Längeneinschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur bei vom Benutzer bereitgestellten Eingaben gemeldet.

### Einschränken der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und der verschiedenen Dateneingabetypen können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es ungültig.

Werfen wir einen Blick auf ein weiteres Beispiel. Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie jetzt den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch das Folgende:

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

- Hier sehen Sie, dass wir dem Text-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was die gleiche Länge wie Banane und Kirsche ist.
- Wir haben dem Nummernfeld auch eine `min` von eins und eine `max` von zehn gegeben. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verringerungspfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben. Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, das Entfernen des Wertes ergibt folglich einen gültigen Wert.

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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das Attribut [`step`](/de/docs/Web/HTML/Attributes/step) verwenden. Dieses Attribut gibt an, um welchen Wert sich der Wert erhöhen oder verringern wird, wenn die Eingabesteuerelemente verwendet werden (wie die Auf- und Ab-Nummernknöpfe oder das Verschieben des Reichweitendaumens). Das `step`-Attribut wurde in unserem Beispiel weggelassen, sodass der Wert standardmäßig `1` ist. Das bedeutet, dass Gleitkommazahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Komplettes Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung der eingebauten Validierungsfunktionen von HTML zu zeigen. Zunächst etwas HTML:

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [vollständige Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Validieren von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, wird JavaScript erforderlich. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die in den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird dies einen leeren String zurückgeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften in der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite finden; unten sind einige der häufigsten aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) übereinstimmt, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut festgelegte maximale Länge, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut festgelegte Mindestlänge, oder `false`, wenn er größer oder gleich der Mindestlänge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut festgelegte Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut festgelegte Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und als gültig betrachtet wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` ansonsten. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form) Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mit Ereignissen. Diese Methode ist in Verbindung mit `preventDefault()` in einem `onSubmit`-Ereignishandler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet und der angegebene Fehler angezeigt. Auf diese Weise können Sie mit JavaScript-Code einen Validierungsfehler außer denen der Standard-HTML-Validierungsbeschränkungen festlegen. Die Nachricht wird dem Benutzer bei der Problemberichterstattung angezeigt.

#### Implementieren einer benutzerdefinierten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungsbedingungen zuvor gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine standardmäßige Möglichkeit, ihr Aussehen mit CSS zu ändern.
- Sie sind von der Browsersprache abhängig, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Dieses Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein Beispiel durchgehen, wie dies zu tun ist.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in einer leeren HTML-Datei zu platzieren; verwenden Sie eine neue Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine gut geformte E-Mail-Adresse entspricht. Wenn ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dies rendert die Eingabe ungültig, sodass beim Versuch, das Formular abzusenden, die Einreichung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einem leeren String auf. Dies rendert die Eingabe gültig, sodass das Formular gesendet wird. Während der Validierung wird der Formularübermittlung blockiert, wenn ein Formularelement einen `customError` hat, der nicht der leere String ist.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte Ihnen, wie Sie eine benutzerdefinierte Nachricht für eine bestimmte Fehlertyp (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu verwenden und sie dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)-Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren. Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt. Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Gültigkeitsnachricht durch Aufrufen von `setCustomValidity("")` zurück. Dann wird `email.validity.valid` verwendet, um zu prüfen, ob die eingegebene Adresse ungültig ist, und wenn ja, aus dem Ereignishandler zurückzukehren. Dies stellt sicher, dass alle normalen eingebauten Validierungsprüfungen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Sie können dieses Beispiel auf der Seite am {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Sample-Demo-Link')}} ausprobieren. Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, zu senden.

#### Ein detaillierteres Beispiel

Nachdem wir ein wirklich einfaches Beispiel gesehen haben, schauen wir, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut, um die automatische Validierung des Browsers auszuschalten. Das Setzen des `novalidate` Attributs am Formular verhindert, dass das Formular seine eigenen Fehlermeldungen zeigt, und erlaubt uns, stattdessen die benutzerdefinierten Fehlermeldungen im DOM auf eine von uns gewählte Weise anzuzeigen. Dies deaktiviert jedoch nicht die Unterstützung für die Constraint-Validierungs-API oder die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw. Das bedeutet, dass selbst wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor er seine Daten sendet, Sie es immer noch selbst überprüfen und das Formular entsprechend gestalten können.

Unser Eingabefeld zur Validierung ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut wird auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich der Lesung für Bildschirmlesegerätenutzer.

Zunächst etwas grundlegendes CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Schließlich schauen wir uns das JavaScript an, das die benutzerdefinierte Fehlervalidierung implementiert. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier bekommen wir das Formular selbst sowie das E-Mail-Eingabefeld und das `span`-Element, in das wir die Fehlermeldung platzieren werden.

Mithilfe von Ereignishandlern überprüfen wir bei jeder Eingabe, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Immer, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir jede angezeigte Fehlermeldung. Wenn die Daten ungültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Immer, wenn wir versuchen, das Formular zu senden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular übermitteln. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Dieses Beispiel finden Sie live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug zur Handhabung der Formularvalidierung und ermöglicht Ihnen enorme Kontrolle über die Benutzeroberfläche und darüber hinaus, was Sie mit HTML und CSS allein tun können.

### Validieren von Formularen ohne eine eingebaute API

In einigen Fällen, wie bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API möglicherweise nicht verwenden oder wollen diese nicht verwenden. Sie können jedoch weiterhin JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihre eigene Logik dafür schreiben.

Um ein Formular zu validieren, stellen Sie sich ein paar Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt bei Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie das Formular reagiert. Soll das Formular dennoch die Daten senden?
    Sollten Sie die fehlerhaften Felder hervorheben?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu führen.
    Sie sollten Vorschläge im Voraus anbieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie tiefer in die UI-Anforderungen für die Formularvalidierung eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/Learn_web_development/Extensions/Forms/validation/)
    - [Eingabe validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ähnlich auch das CSS muss sich nicht sehr ändern; wir haben lediglich die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse verwandelt und vermieden, den Attributselektor zu verwenden.

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

Die großen Änderungen sind im JavaScript-Code, der hier viel mehr Arbeit leisten muss.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht sehr schwierig, ein Validierungssystem selbst zu erstellen. Die Schwierigkeit besteht darin, es so generisch zu machen, dass es sowohl plattformübergreifend als auch auf jedes von Ihnen erstellte Formular anwendbar ist. Es gibt viele Bibliotheken, die Formularvalidierung durchführen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck stellen Sie sicher, dass:

- Explizite Fehlermeldungen angezeigt werden.
- Sie bei der Eingabe flexibel sind.
- Sie genau angeben, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt wurde, kann das Formular gesendet werden. Als nächstes behandeln wir [das Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_disk.format.development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
