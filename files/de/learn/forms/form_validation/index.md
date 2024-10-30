---
title: Client-seitige Formularvalidierung
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 45a41d6ef1458466632bfb8649048340e195fe2f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt und im richtigen Format sind, bevor die vom Benutzer eingegebenen Formulardaten an den Server gesendet werden. Diese **Client-seitige Formularvalidierung** trägt dazu bei, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularelemente entsprechen.

Dieser Artikel führt Sie durch die grundlegenden Konzepte und Beispiele der Client-seitigen Formularvalidierung.

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
        Zu verstehen, was Client-seitige Formularvalidierung ist, warum sie wichtig ist,
        und wie Sie verschiedene Techniken anwenden können, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Client-seitige Validierung ist eine erste Überprüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; indem ungültige Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Wenn es zum Server gelangt und dann abgelehnt wird, wird eine spürbare Verzögerung durch eine Rundreise zum Server und dann zurück zur Client-Seite verursacht, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Die Client-seitige Validierung _sollte jedoch nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer eine Validierung, einschließlich Sicherheitsüberprüfungen, von allen über Formulareingaben gesendeten Daten auf _Server-Seite_ **sowie** auf Client-Seite durchführen, da die Client-seitige Validierung zu einfach zu umgehen ist, sodass böswillige Benutzer dennoch leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Websicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten sie im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer beliebten Website mit einem Registrierungsformular, und Sie werden bemerken, dass diese Feedback geben, wenn Sie Ihre Daten nicht in dem von ihnen erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Dieses Feld kann nicht leer gelassen werden).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, damit es als gültig angesehen wird).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten haben nicht das richtige Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird **Formularvalidierung** genannt.
Wenn Sie Daten eingeben, überprüfen der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der von der Anwendung festgelegten Einschränkungen sind. Validierung, die im Browser durchgeführt wird, nennt man **Client-seitige** Validierung, während Validierung, die auf dem Server durchgeführt wird, **Server-seitige** Validierung genannt wird.
In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, dass die Daten an den Server gesendet und (meistens) in einer Datenbank gespeichert werden; wenn die Informationen nicht korrekt formatiert sind, wird dem Benutzer eine Fehlermeldung angezeigt, die erklärt, was korrigiert werden muss, und er kann es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten der Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen**. Wenn wir unsere Benutzer zwingen, sichere Passwörter einzugeben, wird es einfacher, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um die Anwendung zu schädigen. Siehe [Websicherheit](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Selbst wenn Ihr Formular auf der Client-Seite korrekt validiert und fehlerhafte Eingaben verhindert werden, kann ein böswilliger Benutzer immer noch die Netzwerkanfrage ändern.

## Verschiedene Arten der Client-seitigen Validierung

Es gibt zwei verschiedene Arten der Client-seitigen Validierung, die Sie im Web antreffen:

- **HTML-Formularvalidierung**
  HTML Formulareigenschaften können definieren, welche Formularelemente erforderlich sind und welches Format die benutzereingetragenen Daten haben müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel verwendet, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Client-seitige Validierung kann mit wenig bis keinem JavaScript erreicht werden. HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als JavaScript-Validierung. Es wird allgemein empfohlen, mit robusten HTML-Funktionen zu beginnen und das Benutzererlebnis bei Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularelementen](/de/docs/Learn/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript zurückzugreifen.
Dies geschieht durch die Verwendung von Validierungsattributen auf Formularelementen.
Viele davon haben wir bereits früher im Kurs gesehen, aber hier zur Wiederholung:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die Mindest- und die Höchstlänge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Attributes/min), [`max`](/de/docs/Web/HTML/Attributes/max) und [`step`](/de/docs/Web/HTML/Attributes/step): Gibt die Mindest- und Höchstwerte für numerische Eingabetypen sowie die Erhöhung oder den Schritt für Werte ab dem Minimum an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreinstellungstyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten entsprechen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute festgelegten Regeln erfüllen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, sind die folgenden Bedingungen erfüllt:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen bestimmten Stil auf gültige Elemente anzuwenden. Das Steuerelement entspricht auch {{cssxref(":user-invalid")}}, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann je nach Eingabetyp und Attributen auch andere UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Wenn der Benutzer versucht, die Daten zu senden, sendet der Browser das Formular, vorausgesetzt, es gibt nichts anderes, das dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, sind folgende Bedingungen erfüllt:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls zutreffen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen spezifischen Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Fehlertyp. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für die integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben besprochenen Attribute testen.

### Einfaches Startdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, die es Ihnen ermöglicht, zu wählen, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel umfasst ein einfaches Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Abschicken-{{htmlelement("button")}}.

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

Um zu beginnen, machen Sie eine Kopie der [Datei `fruit-start.html` auf Github](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das Attribut required

Ein häufiges HTML-Validierungsmerkmal ist das Attribut [`required`](/de/docs/Web/HTML/Attributes/required).
Fügen Sie dieses Attribut einer Eingabe hinzu, um ein Element als obligatorisch zu markieren.
Wenn dieses Attribut festgelegt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht abgeschickt, sondern zeigt eine Fehlermeldung bei der Abschickung an, wenn die Eingabe leer ist.
Solange es leer ist, wird die Eingabe auch als ungültig angesehen und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn eine Radio-Schaltfläche in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eine der Schaltflächen in dieser Gruppe aktiviert sein, damit die Gruppe gültig ist; die aktivierte Schaltfläche muss nicht unbedingt die mit dem Attribut sein.

> [!NOTE]
> Verlangen Sie von Benutzern nur die Eingabe von Daten, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu kennen?

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Wir haben "(erforderlich)" zum {{htmlelement("label")}} hinzugefügt, um den Benutzer darauf hinzuweisen, dass das {{htmlelement("input")}} erforderlich ist. Den Benutzer darauf hinzuweisen, wann Formularelemente erforderlich sind, ist nicht nur eine gute Benutzererfahrung, es wird auch von den WCAG-[Barrierefreiheit](/de/docs/Learn/Accessibility)-Richtlinien gefordert.

Wir fügen CSS-Stile hinzu, die basierend darauf angewandt werden, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS bewirkt, dass die Eingabe ein rotes gestricheltes Rahmen hat, wenn es ungültig ist, und ein subtileres schwarzes durchgehendes Rahmen, wenn es gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im Beispiel unten aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Versuchen Sie, das Formular im [Live-Beispiel `required`](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) ohne einen Wert abzusenden. Beachten Sie, wie die ungültige Eingabe in den Fokus rückt, eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint und das Formular daran gehindert wird, abgeschickt zu werden. Sie können auch den [Quellcode auf Github](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html) einsehen.

### Validierung gegen einen regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das Attribut [`pattern`](/de/docs/Web/HTML/Attributes/pattern), das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu erkennen, sodass Regexps ideal für die Formularvalidierung und viele andere Verwendungen in JavaScript sind.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren.
Unten sind einige Beispiele, um Ihnen eine grundlegende Idee zu geben, wie sie funktionieren.

- `a` — Passt auf ein Zeichen, das `a` ist (nicht `b`, nicht `aa`, und so weiter).
- `abc` — Passt auf `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt auf `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Passt auf `a`, optional gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc`, und so weiter).
- `a|b` — Passt auf ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau auf `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y`, und so weiter).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele, sehen Sie in unserer [Regular expression](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation nach.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein Attribut [`pattern`](/de/docs/Web/HTML/Attributes/pattern) wie dieses hinzuzufügen:

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

Sie können dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html) finden.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es durch ein zusätzliches "Aa"-Muster unterstützt, das in eckigen Klammern verschachtelt ist, um die großgeschriebenen sowie die kleingeschriebenen Versionen zu unterstützen.

Versuchen Sie an diesem Punkt, den Wert innerhalb des Attributs [`pattern`](/de/docs/Web/HTML/Attributes/pattern) auf einige der Beispiele zu ändern, die Sie zuvor gesehen haben, und sehen Sie, wie dies die Werte betrifft, die Sie eingeben können, um die Eingabe gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie, wie es funktioniert.
Machen Sie sie nach Möglichkeit obstbezogen, damit Ihre Beispiele Sinn ergeben!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht die `input`-Eingabe der Pseudoklasse {{cssxref(':invalid')}}. Wenn leer und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein Attribut [`pattern`](/de/docs/Web/HTML/Attributes/pattern), um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel validiert die Angabe des `email`-Typs den Wert der Eingaben gegen ein gut geformtes E-Mail-Adressmuster oder ein Muster, das eine kommagetrennte Liste von E-Mail-Adressen passt, wenn es das Attribut [`multiple`](/de/docs/Web/HTML/Attributes/multiple) hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das Attribut [`pattern`](/de/docs/Web/HTML/Attributes/pattern) nicht.

### Beschränkung der Eingabelänge

Sie können die Zeichenzahl aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mit den Attributen [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der Wert von [`minlength`](/de/docs/Web/HTML/Attributes/minlength) oder mehr als der Wert von [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength).

Browser lassen oft nicht zu, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, eine Zeichenanzahl-Rückmeldung auf zugängliche Weise bereitzustellen und den Benutzer seine Inhalte auf die richtige Größe bearbeiten zu lassen.
Ein Beispiel dafür ist das Zeichenlimit für Beiträge in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längeneinschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für vom Benutzer bereitgestellte Eingaben gemeldet.

### Beschränkung der Eingabewerte

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) und der verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Werfen wir einen Blick auf ein weiteres Beispiel.
Erstellen Sie eine neue Kopie der [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) Datei.

Jetzt löschen Sie den Inhalt des `<body>`-Elements und ersetzen es durch das Folgende:

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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, die der gleichen Länge wie Banane und Kirsche entspricht.
- Wir haben auch dem `number`-Feld ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können nicht die Inkrement/Decrement-Pfeile verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
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

Versuchen Sie dieses [Beispiel live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html) an.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das Attribut [`step`](/de/docs/Web/HTML/Attributes/step) verwenden. Dieses Attribut gibt an, um wie viel der Wert bei Verwendung der Eingabesteuerungen erhöht oder verringert wird (wie zum Beispiel bei den Auf- und Abnummerierungsschaltflächen oder beim Verschieben des Daumens der Bereiche). Das `step`-Attribut ist in unserem Beispiel weggelassen, sodass der Wert standardmäßig `1` ist. Dies bedeutet, dass Dezimalzahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Komplettes Beispiel

Hier ist ein vollständiges Beispiel zur Verwendung der in HTML eingebauten Validierungsfunktionen.
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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Dieses [Beispiel ist live auf GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte einzugrenzen, und der Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, wird JavaScript benötigt.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea)-Element)

Die Constraint Validation API macht die folgenden Eigenschaften auf den oben genannten Elementen verfügbar.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitsstatus des Elements beschreiben. Sie finden vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite; unten sind einige der häufigsten aufgelistet:

  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das Attribut [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) festgelegte Maximallänge, oder `false`, wenn er kürzer ist als oder gleich der Maximallänge. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das Attribut [`minlength`](/de/docs/Web/HTML/Element/input#minlength) festgelegte Mindestlänge, oder `false`, wenn er länger ist als oder gleich der Mindestlänge. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das Attribut [`max`](/de/docs/Web/HTML/Element/input#max) festgelegte Maximum, oder `false`, wenn er kleiner ist als oder gleich dem Maximum. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das Attribut [`min`](/de/docs/Web/HTML/Element/input#min) festgelegte Minimum, oder `false`, wenn er größer ist als oder gleich dem Minimalwert. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht im erforderlichen Syntaxformat vorliegt (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element bei der Formularübermittlung validiert wird; andernfalls `false`.

Die Constraint Validation API macht auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Element/form)-Element verfügbar.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat, `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet, und die angegebene Fehlermeldung wird angezeigt. Dies ermöglicht es Ihnen, mit JavaScript-Code einen Validierungsfehler zu bestimmen, der über die standardmäßigen HTML-Validierungsbeschränkungen hinausgeht. Die Nachricht wird dem Benutzer bei der Meldung des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispielen zuvor gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, um deren Aussehen und Verhalten mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung, die in einer anderen Sprache angezeigt wird, wie im folgenden Screenshot von Firefox auf Französisch zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein einfaches Beispiel erarbeiten, wie dies gemacht werden kann.

Wir beginnen mit etwas HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Grundlage, wenn Sie möchten):

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

Hier speichern wir einen Verweis auf die Email-Eingabe und fügen einen Event Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Innerhalb des enthaltenen Codes überprüfen wir, ob die Eigenschaft `validity.typeMismatch` der Email-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut geformten Email-Adresse entspricht. Wenn dies der Fall ist, rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Nachricht auf. Dies macht die Eingabe ungültig, sodass, wenn Sie versuchen, das Formular abzusenden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die Eigenschaft `validity.typeMismatch` `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dies macht die Eingabe gültig, sodass das Formular abgesendet wird. Während der Validierung, wenn ein beliebiges Formularsteuerelement einen `customError` hat, der nicht der leere String ist, wird die Formularübermittlung blockiert.

Sie können das unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

Sie können dieses Beispiel live auf GitHub als [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für eine bestimmte Art von Fehler (`validity.typeMismatch`) hinzufügen können. Es ist auch möglich, alle eingebauten Formularvalidierungen zu nutzen und diese dann mit `setCustomValidity()` zu ergänzen.

Hier zeigen wir, wie Sie die eingebaute [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)-Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle einer neuen Eingabe setzt der Code zuerst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft.
Er verwendet dann `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist, und wenn ja, kehrt er aus dem Ereignishandler zurück.
Dies stellt sicher, dass alle normalen eingebauten Überprüfungen ausgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Sie können dieses Beispiel auf der Seite unter dem {{LiveSampleLink('Extending_built-in_form_validation', 'Live-Beispiel-Demolink')}} ausprobieren.
Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, abzuschicken.

#### Ein detaillierteres Beispiel

Jetzt, da wir ein wirklich einfaches Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Gerne können Sie dies zusammen mit uns erstellen:

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

Dieses Formular verwendet das Attribut [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate), um die automatische Validierung des Browsers zu deaktivieren. Durch das Setzen des `novalidate`-Attributs im Formular wird verhindert, dass das Formular eigene Fehlermeldungsblasen anzeigt, und ermöglicht uns stattdessen, die benutzerdefinierten Fehlermeldungen in der DOM in einem von uns gewählten Format anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validierung API und die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw.
Das bedeutet, dass, auch wenn der Browser die Gültigkeit des Formulars nicht automatisch überprüft, bevor es seine Daten sendet, Sie diese trotzdem selbst überprüfen und das Formular entsprechend stylen können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), das `erforderlich` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code prüfen und eine benutzerdefinierte Fehlermeldung für jeden Fehler anzeigen.

Wir wollen die Fehlermeldungen in einem `<span>`-Element anzeigen.
Das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird und auch für Screenreader-Benutzer vorgelesen wird.

Nun zum grundlegenden CSS, um das Aussehen des Formulars leicht zu verbessern und bei ungültigen Eingabedaten visuelle Rückmeldungen zu geben:

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
Es gibt viele Möglichkeiten, ein DOM-Element auszuwählen; hier holen wir uns das Formular selbst und die E-Mail-Eingabe sowie das Span-Element, in das wir die Fehlermeldung einfügen werden.

Mit Ereignishandlern überprüfen wir, ob die Formularelemente jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir die Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn dies der Fall ist, entfernen wir die angezeigte Fehlermeldung. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular abschicken. Andernfalls führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das Ergebnis live:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

Sie können dieses Beispiel live auf GitHub als [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden, zusammen mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint-Validierungs-API gibt Ihnen ein leistungsstarkes Werkzeug zur Handhabung der Formularvalidierung und bietet Ihnen große Kontrolle über die Benutzeroberfläche weit über das hinaus, was Sie alleine mit HTML und CSS tun können.

### Validierung von Formularen ohne eine eingebaute API

In einigen Fällen, wie z. B. bei [benutzerdefinierten Steuerelementen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), werden Sie möglicherweise nicht in der Lage sein oder nicht wollen, die Constraint Validation API zu verwenden. Sie können immer noch JavaScript verwenden, um Ihr Formular zu validieren, müssen es jedoch selbst schreiben.

Um ein Formular zu validieren, fragen Sie sich ein paar Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typumwandlung, reguläre Ausdrücke usw. Es liegt bei Ihnen.
- Was soll ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Frage der Benutzeroberfläche. Sie müssen entscheiden, wie das Formular funktionieren soll. Soll das Formular die Daten trotzdem senden?
    Sollten Sie die Felder hervorheben, die einen Fehler aufweisen?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu führen.
    Sie sollten im Voraus Vorschläge machen, damit er weiß, was erwartet wird, sowie klare Fehlermeldungen geben.
    Wenn Sie sich in die Benutzeroberflächenanforderungen der Formularvalidierung vertiefen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Nutzer helfen, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Gestaltungsrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validierung API nicht verwendet

Um dies zu veranschaulichen, folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validierung API.

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

Genauso muss das CSS nicht sehr viel geändert werden; wir haben nur die CSS-Pseudoklasse {{cssxref(":invalid")}} in eine echte Klasse umgewandelt und vermeiden die Verwendung des Attributselektors.

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

Die großen Änderungen sind im JavaScript-Code, der wesentlich mehr leisten muss.

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

Wie Sie sehen, ist es nicht so schwer, ein eigenes Validierungssystem zu erstellen. Die Schwierigkeit liegt darin, es generisch genug zu machen, um sowohl plattformübergreifend als auch für jedes von Ihnen erstellte Formular verwendbar zu sein. Es gibt viele Bibliotheken, die Formularvalidierung durchführen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber erinnern Sie sich noch an die wichtigsten Informationen? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die Client-seitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber es erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die von ihnen bereitgestellten Daten zu korrigieren. Zu diesem Zweck sollten Sie darauf achten:

- Klare Fehlermeldungen anzuzeigen.
- Beim Eingabeformat nachsichtig zu sein.
- Genau darauf hinzuweisen, wo der Fehler auftritt, besonders bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular abgeschickt werden.
Wir behandeln als nächstes [das Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formulareingaben](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formulareingabewidget](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
