---
title: Client-seitige Formularvalidierung
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 039401fbc2803f7728af573b21c78f3140de7924
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularfelder ausgefüllt und korrekt formatiert sind, bevor die von Benutzern eingegebenen Formulardaten an den Server gesendet werden. Diese **client-seitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten die Anforderungen der verschiedenen Formularelemente erfüllen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der client-seitigen Formularvalidierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was client-seitige Formularvalidierung ist, warum sie wichtig ist und wie verschiedene Techniken angewendet werden können, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung; da ungültige Daten auf der Clientseite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Wenn die Daten zum Server gelangen und dann abgelehnt werden, entsteht eine spürbare Verzögerung durch die Hin- und Rückfahrt zum Server und zurück zur Clientseite, um dem Benutzer zu sagen, dass er die Daten korrigieren soll.

Allerdings sollte client-seitige Validierung _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Apps sollten immer Validierung, einschließlich Sicherheitsüberprüfungen, bei allen Formulareingaben _serverseitig_ **sowie** client-seitig durchführen, da client-seitige Validierung zu leicht umgangen werden kann, sodass böswillige Nutzer immer noch leicht ungültige Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung von serverseitiger Validierung liegt etwas außerhalb des Rahmens dieses Moduls, aber Sie sollten es im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie jede beliebte Website mit einem Registrierungsformular, und Sie werden feststellen, dass sie Rückmeldungen geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein spezifisches Datenformat ist erforderlich, damit es als gültig betrachtet wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies nennt man **Formularvalidierung**.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format sind und den von der Anwendung festgelegten Einschränkungen entsprechen. Die im Browser durchgeführte Validierung wird als **client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte als **server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung das Absenden der Daten an den Server und (in der Regel) die Speicherung in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und kann es erneut versuchen.

Wir wollen das Ausfüllen von Webformularen so einfach wie möglich machen. Warum bestehen wir also auf der Validierung unserer Formulare?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Nutzer im falschen Format gespeichert werden, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Nutzer schützen.** Wenn wir unsere Nutzer zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Nutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server gesendet werden. Auch wenn Ihr Formular korrekt validiert und eine fehlerhafte Eingabe auf der Clientseite verhindert wird, kann ein böswilliger Nutzer dennoch die Netzwerkanforderung ändern.

## Verschiedene Arten der client-seitigen Validierung

Es gibt zwei verschiedene Arten der client-seitigen Validierung, die Sie im Web antreffen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Client-seitige Validierung kann mit wenig oder gar keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, bietet aber weniger Anpassungsmöglichkeiten als JavaScript-Validierung. Es wird generell empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu starten und dann die Benutzererfahrung bei Bedarf mit JavaScript zu erweitern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularelementen](/de/docs/Learn/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen.
Dies wird durch die Verwendung von Validierungsattributen auf Formularelementen erreicht.
Wir haben viele dieser Attribute bereits in früheren Kursen gesehen, aber zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld vor dem Absenden des Formulars ausgefüllt werden muss.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Spezifiziert die minimalen und maximalen Werte von numerischen Eingabetypen sowie das Inkrement oder den Schritt für Werte, beginnend mit dem Minimum.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Bestimmt, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Vortyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle durch die Attribute des Feldes festgelegten Regeln einhalten, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Selektorklasse, mit der Sie einen spezifischen Stil auf gültige Elemente anwenden können. Das Steuerelement wird auch mit {{cssxref(":user-valid")}} übereinstimmen, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann je nach Eingabetyp und Attributen mit anderen UI-Pseudoklassen, wie {{cssxref(":in-range")}}, übereinstimmen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular absenden, vorausgesetzt, es gibt nichts anderes, das es daran hindert (z.B. JavaScript).

Wenn ein Element ungültig ist, gilt Folgendes:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Selektorklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Selektorklasse. Je nach Fehler können auch andere UI-Pseudoklassen, wie {{cssxref(":out-of-range")}}, zutreffen. Diese ermöglichen es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Fehler. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben diskutierten Attribute.

### Einfaches Startfile

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, die es Ihnen ermöglicht, zu wählen, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel beinhaltet ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem „Submit“-{{htmlelement("button")}}.

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

Laden Sie zu Beginn eine Kopie der [`fruit-start.html`-Datei auf Github](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in ein neues Verzeichnis auf Ihrer Festplatte herunter.

### Das required-Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element zwingend zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht abgesendet und zeigt eine Fehlermeldung bei der Übermittlung an, wenn die Eingabe leer ist.
Solange die Eingabe leer ist, wird sie auch als ungültig betrachtet und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein beliebiger Radiobutton in einer gleichnamigen Gruppe das `required`-Attribut hat, muss einer der Radiobuttons in dieser Gruppe ausgewählt sein, damit die Gruppe gültig ist; der ausgewählte Button muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Verlangen Sie nur, dass Ihre Nutzer Daten eingeben, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrem Input ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(required)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darüber zu informieren, dass das {{htmlelement("input")}} erforderlich ist. Die Anzeige für den Benutzer, wenn Formularfelder erforderlich sind, ist nicht nur gute Benutzererfahrung, sondern es ist auch durch die WCAG [Zugänglichkeitsleitlinien](/de/docs/Learn/Accessibility) vorgeschrieben.

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

Dieses CSS führt dazu, dass die Eingabe einen roten gestrichelten Rahmen hat, wenn sie ungültig ist und einen subtileren schwarzen Vollrahmen, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular unter dem [Live-`required`-Beispiel](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne Wert abzusenden. Beachten Sie, wie der ungültige Input den Fokus erhält, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular daran gehindert wird, abgesendet zu werden. Sie können auch den [Quellcode auf Github](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) einsehen.

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (RegExp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu finden, sodass Regexps ideal für die Formularvalidierung sind und eine Vielzahl weiterer Anwendungen in JavaScript haben.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, sie erschöpfend in diesem Artikel zu vermitteln.
Nachfolgend finden Sie einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Passt auf ein Zeichen, das `a` ist (nicht `b`, nicht `aa` und so weiter).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, optional gefolgt von einem einzigen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt auf `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` und so weiter).
- `a|b` — Passt auf ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau auf `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` und so weiter).

Es gibt noch viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut hinzuzufügen, wie folgt:

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

Dies ergibt das folgende Update – probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind groß- und kleinschreibungsempfindlich, aber wir haben es unterstützt, sowohl großgeschriebene als auch kleine Versionen zu unterstützen, indem wir ein zusätzliches "Aa"-Muster innerhalb eckiger Klammern verschachtelt haben.

Versuchen Sie in diesem Stadium, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attributs so zu ändern, dass er einigen der früher gesehenen Beispiele entspricht, und schauen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es geht.
Machen Sie sie möglichst obstbezogen, damit Ihre Beispiele Sinn machen!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird `input` der {{cssxref(':invalid')}} Pseudoklasse entsprechen. Wenn leer und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, um anhand eines regulären Ausdrucks validiert zu werden. Beispielsweise validiert die Angabe des `email`-Typs den Wert der Eingabe gegen ein gut geformtes Email-Adressenmuster oder gegen ein Muster, das einer durch Kommas getrennten Liste von Email-Adressen entspricht, wenn es das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt das [`pattern`](/de/docs/Web/HTML/Attributes/pattern) Attribut nicht.

### Die Länge Ihrer Einträge einschränken

Sie können die Zeichenlänge aller Textfelder, die mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt werden, mithilfe der [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) Attribute einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) oder mehr als der Wert von [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) hat.

Browser lassen oft nicht zu, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, auch ein Zeichenlimit-Feedback auf zugängliche Weise bereitzustellen und dem Benutzer zu erlauben, seinen Inhalt auf die richtige Größe zu bringen.
Ein Beispiel hierfür ist das Zeichenlimit beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längeneinschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert festgelegt wird. Sie werden nur für benutzerbereitgestellte Eingaben gemeldet.

### Die Werte Ihrer Einträge einschränken

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und die verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um eine Reihe gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Lassen Sie uns ein weiteres Beispiel ansehen.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)-Datei.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch das Folgende:

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

- Hier werden Sie sehen, dass wir dem `text`-Feld ein `minlength` und `maxlength` von jeweils sechs gegeben haben, was der Länge von "banana" und "cherry" entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Zahlen, die außerhalb dieses Bereichs liegen, werden als ungültig angezeigt; Benutzer无法使用增量/减量箭头，来让值超出这一范围。
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Ergebnis führt.

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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das Attribut [`step`](/de/docs/Web/HTML/Attributes/step) verwenden. Dieses Attribut gibt an, um welches Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerung verwendet wird (z. B. die Auf- und Ab-Zahlenschaltflächen oder das Verschieben des Bereichs-Slideknopfes). Das `step`-Attribut wird in unserem Beispiel weggelassen, sodass der Wert standardmäßig `1` ist. Das bedeutet, dass Fließkommazahlen wie 3.2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung von HTML-Eingebauten Validierungsfunktionen zu zeigen.
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

Dies wird wie folgt angezeigt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [komplette Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html) vorhanden.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt werden wir die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden DOM-Interfaces für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API bietet die folgenden Eigenschaften auf den oben genannten Elementen:

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Wenn die Steuerung kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Beschränkungen erfüllt (gilt als gültig), gibt dieser eine leere Zeichenkette zurück.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften beschreibt, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState) Referenzseite finden; unten sind einige der häufigeren aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Selektorklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut spezifizierte maximale Länge, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Selektorklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut spezifizierte minimale Länge, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Selektorklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut spezifizierte Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Selektorklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut spezifizierte Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Selektorklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Selektorklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es an einer Beschränkung scheitert. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Selektorklasse; andernfalls der {{cssxref(":invalid")}} CSS-Selektorklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Selektorklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Absenden des Formulars validiert wird; `false` sonst.

Die Constraint Validation API macht auch die folgenden Methoden auf den oben genannten Elementen sowie dem [`form`](/de/docs/Web/HTML/Element/form)-Element verfügbar:

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; `false` ansonsten. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid`-Event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mittels Events. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung einstellen, wird das Element als ungültig betrachtet, und der angegebene Fehler wird angezeigt. Dies ermöglicht es, per JavaScript-Code eine andere Validierungsverfehlung als die durch die Standard-HTML-Validierungsbeschränkungen anzubieten. Die Nachricht wird dem Nutzer beim Melden des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den Beispielen zu HTML-Validierungsbeschränkungen früher gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzuschicken, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie das im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein einfaches Beispiel dafür durchgehen, wie Sie dies tun können.

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

Hier speichern wir eine Referenz auf das E-Mail-Eingabefeld, dann fügen wir ein Event-Listener hinzu, das den enthaltenen Code jedes Mal ausführt, wenn sich der Wert im Eingabefeld ändert.

Innerhalb des enthaltenen Codes überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingaben `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster für eine wohlgeformte E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass beim Versuch, das Formular einzureichen, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einer leeren Zeichenkette auf. Dies macht die Eingabe gültig, sodass das Formular übermittelt wird. Während der Validierung, wenn ein Formularelement ein `customError` hat, das nicht die leere Zeichenkette ist, wird die Formularübermittlung blockiert.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine angepasste Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, alle eingebauten Formularvalidierungen zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute Prüfung für [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) erweitern können, um nur Adressen mit der Domäne `@example.com` zu akzeptieren.
Wir beginnen mit dem folgenden HTML {{htmlelement("form")}}.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten angezeigt.
Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Validierungsnachricht zurück, indem `setCustomValidity("")` aufgerufen wird.
Dann wird überprüft, ob die eingegebene Adresse ungültig ist und falls ja, kehrt aus dem Event-Handler zurück.
Dies gewährleistet, dass alle normalen eingebauten Validierungsprüfungen durchgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, die `setCustomValidity()` mit einer Fehlermeldung aufruft, wenn die Adresse nicht mit `@example.com` endet.

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

Sie können dieses Beispiel auf der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Demolink für die Live-Demo')}} ausprobieren.
Versuchen Sie eine ungültige E-Mail-Adresse einzugeben, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, schauen wir uns an, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Wieder einmal, fühlen Sie sich frei, dies mit uns zu erstellen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Durch das Setzen des `novalidate`-Attributs auf dem Formular wird verhindert, dass das Formular seine eigenen Fehlerblasen anzeigt, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen im DOM auf eine von uns gewählte Art und Weise anzuzeigen.
Dies deaktiviert jedoch weder die Unterstützung für die Constraint-Validation-API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw.
Das bedeutet, dass, auch wenn der Browser die Gültigkeit des Formulars nicht automatisch prüft, bevor er seine Daten sendet, Sie das trotzdem selbst tun und das Formular entsprechend gestalten können.

Unsere Eingabe zur Validierung ist eine [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), die `erforderlich` ist, und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede Anzeige zeigen.

Wir beabsichtigen, die Fehlermeldungen innerhalb eines `<span>`-Elements anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attribut wird auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung jedem präsentiert wird, einschließlich der Tatsache, dass sie für Benutzer von Bildschirmleseprogrammen vorgelesen wird.

Jetzt zu etwas grundlegenderem CSS, um das Aussehen des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Nun sehen wir uns das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier holen wir uns das Formular selbst und das E-Mail-
Eingabefeld, sowie das `<span>`-Element, in das wir die Fehlermeldung platzieren werden.

Mithilfe von Event-Handlern prüfen wir, ob die Formularfelder jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler auftritt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir jegliche Fehlermeldung.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir jegliche angezeigte Fehlermeldung. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular absenden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Absenden des Formulars.

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, wo der Fehler liegt, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint-Validation-API gibt Ihnen ein leistungsfähiges Werkzeug an die Hand, um die Formularvalidierung zu handhaben, das Ihnen eine enorme Kontrolle über die Benutzeroberfläche gibt, weit über das hinaus, was Sie nur mit HTML und CSS tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, zum Beispiel bei [benutzerdefinierten Steuerelementen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), können Sie die Constraint Validation API nicht verwenden oder Sie wollen es nicht. Sie können immer noch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihre eigene Validierung schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen festlegen, wie Sie Ihre Daten validieren: String-Operationen, Typkonvertierung, reguläre Ausdrücke und so weiter. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht gültig ist?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die fehlerhaft sind?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu verringern, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu führen.
    Sie sollten Vorschläge im Vorfeld geben, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie in die Formvalidierungs-UI-Anforderungen eintauchen möchten, finden Sie hier einige nützliche Artikel, die Sie lesen sollten:

    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehler in Formularen melden: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ebenso muss das CSS nicht viel geändert werden; wir haben einfach die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine wirkliche Klasse umgewandelt und darauf verzichtet, den Attribut-Selektor zu verwenden.

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

Die großen Änderungen betreffen den JavaScript-Code, der wesentlich mehr Arbeit verrichten muss.

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

Wie Sie sehen, ist es nicht so schwer, ein Validierungssystem selbst zu erstellen. Der schwierige Teil ist, es so generisch zu gestalten, dass es sowohl plattformübergreifend als auch auf jedem Formular, das Sie erstellen könnten, verwendet werden kann. Es gibt viele Bibliotheken, die zur Formularvalidierung zur Verfügung stehen, wie z.B. [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, können Sie sich aber noch an die wichtigsten Informationen erinnern? Sie können einige weiterführende Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, es erfordert jedoch _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck sollten Sie sicherstellen, dass:

- Explizite Fehlermeldungen angezeigt werden.
- Sie großzügig in Bezug auf das Eingabeformat sind.
- Sie genau darauf hinweisen, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden.
Wir werden uns als Nächstes mit dem [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) befassen.

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
