---
title: Formularvalidierung auf der Client-Seite
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularelemente ausgefüllt und im richtigen Format eingegeben sind, bevor Benutzerdaten an den Server gesendet werden. Diese **Formularvalidierung auf der Client-Seite** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der verschiedenen Formularelemente entsprechen.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Formularvalidierung auf der Client-Seite.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Formularvalidierung auf der Client-Seite ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Client-Seite ist ein erster Check und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Abfangen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren.
Wenn die Daten den Server erreichen und dann abgelehnt werden, entsteht eine spürbare Verzögerung durch die Rundreise zum Server und zurück zur Client-Seite, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren muss.

Allerdings _sollte die Validierung auf der Client-Seite nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Apps sollten immer eine Validierung, einschließlich Sicherheitsprüfungen, für alle formularübermittelten Daten auf der _Server-Seite_ **und auch** auf der Client-Seite durchführen, da die Validierung auf der Client-Seite zu leicht umgangen werden kann und bösartige Benutzer daher immer noch leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um zu erfahren, was _passieren könnte_; die Implementierung der serverseitigen Validierung geht etwas über den Umfang dieses Moduls hinaus, aber Sie sollten dies im Hinterkopf behalten.

## Was ist Formularvalidierung?

Gehen Sie zu einer beliebigen bekannten Website mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, um als gültig angesehen zu werden).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (Die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im richtigen Format und innerhalb der vom Programm geforderten Beschränkungen sind. Die im Browser durchgeführte Validierung wird als **Client-Seiten-Validierung** bezeichnet, während die Validierung auf dem Server als **Server-Seiten-Validierung** bekannt ist.
In diesem Kapitel konzentrieren wir uns auf die Validierung auf der Client-Seite.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung das Übermitteln der Daten an den Server und speichert diese in der Regel in einer Datenbank; wenn die Informationen nicht korrekt formatiert sind, gibt die Anwendung dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und ermöglicht ihm, es erneut zu versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also auf der Validierung unserer Formulare?
Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen arbeiten nicht richtig, wenn die Benutzerdaten im falschen Format gespeichert sind, falsch oder vollständig weggelassen werden.
- **Wir möchten die Daten unserer Benutzer schützen.** Wenn wir unsere Benutzer zwingen, sichere Passwörter einzugeben, fällt es uns leichter, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie bösartige Benutzer ungeschützte Formulare missbrauchen können, um die Anwendung zu schädigen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server gesendet werden. Auch wenn Ihr Formular auf der Client-Seite korrekt validiert und fehlerhafte Eingaben verhindert, kann ein bösartiger Benutzer die Netzwerk-Anfrage trotzdem manipulieren.

## Verschiedene Arten der Validierung auf der Client-Seite

Im Web gibt es zwei verschiedene Arten der Validierung auf der Client-Seite:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularelemente erforderlich sind und in welchem Format die vom Benutzer eingegebenen Daten vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel hinzugefügt, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Validierung auf der Client-Seite kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der wichtigsten Funktionen von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript zurückzugreifen.
Dies geschieht durch die Verwendung von Validierungsattributen bei Formularelementen.
Viele dieser Attribute haben wir bereits im Kurs gesehen, aber hier eine Zusammenfassung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt sein muss, bevor das Formular abgeschickt werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die minimale und maximale Länge der Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die minimalen und maximalen Werte von numerischen Eingabetypen sowie die Erhöhung oder den Schritt für Werte ab dem Minimum an.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer vordefinierter Typ sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten allen durch die Attribute festgelegten Regeln entsprechen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gelten folgende Bedingungen:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, mit der Sie einen bestimmten Stil auf gültige Elemente anwenden können. Das Steuerungselement entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Steuerungselement interagiert hat, und kann anderen UI-Pseudoklassen entsprechen, wie {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, sendet der Browser das Formular, vorausgesetzt, dass es nichts anderes gibt, das dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, gelten folgende Bedingungen:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerungselement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung unterscheidet sich je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird weiter unten beschrieben.

## Beispiele für eingebaute Formularvalidierung

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Einfaches Start-Datei

Beginnen wir mit einem einfachen Beispiel: einem Eingabefeld, das Ihnen die Auswahl zwischen einer Banane oder einer Kirsche ermöglicht.
Dieses Beispiel umfasst ein Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem {{htmlelement("button")}} zum Absenden.

```html live-sample___simple-start-file
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Favorite fruit start</title>
    <style>
      input:invalid {
        border: 2px dashed red;
      }

      input:valid {
        border: 2px solid black;
      }
    </style>
  </head>

  <body>
    <form>
      <label for="choose">Would you prefer a banana or a cherry?</label>
      <input id="choose" name="i_like" />
      <button>Submit</button>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("simple-start-file", "100%", 80)}}

Erstellen Sie zunächst eine Kopie der vorherigen HTML-Auflistung in einer neuen Datei namens `index.html`. Speichern Sie diese in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das required-Attribut

Ein häufiges HTML-Validierungsmerkmal ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einem Eingabefeld hinzu, um ein Element als obligatorisch zu markieren.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, sondern zeigt eine Fehlermeldung an, wenn das Eingabefeld leer ist.
Solange es leer ist, wird das Eingabefeld auch als ungültig angesehen und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein Radio-Button in einer gleichnamigen Gruppe das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe für die Gruppe gecheckt werden, damit diese gültig ist; der gecheckte Radio-Button muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Fordern Sie nur die Eingabe von Daten, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Eine gängige Praxis ist es, ein Sternchen (oder ein anderes Zeichen) hinter die Beschriftungen von erforderlichen Formularelementen zu setzen, damit sie für sehende Benutzer auffallen. Die Anzeige für den Benutzer, wann Eingabefelder erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sie ist auch durch die WCAG [Zugänglichkeitsrichtlinien](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

Wir fügen CSS-Stile hinzu, die basierend darauf angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

```css live-sample___the-required-attribute
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

```js hidden live-sample___the-required-attribute live-sample___validate-regular-expression live-sample___constraining-values
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Dieses CSS bewirkt, dass das Eingabefeld eine rote gestrichelte Grenze hat, wenn es ungültig ist und eine subtilere schwarze durchgehende Begrenzung, wenn es gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn das Eingabefeld erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne Wert abzusenden. Beachten Sie, wie das ungültige Eingabefeld den Fokus erhält und eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") angezeigt wird. Das Formular wird auch daran gehindert, gesendet zu werden (obwohl zu beachten ist, dass selbst wenn ein Wert eingegeben wird, wir das Absenden des Formulars verhindern, um einen Fehler zu vermeiden, wie MDN eingebettete Formulare behandelt).

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenzusammenstellungen in Textstrings zu erkennen. Regexp sind daher ideal für die Formularvalidierung und dienen einer Vielzahl anderer Anwendungen in JavaScript.

Reguläre Ausdrücke sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel umfassend zu lehren.
Nachfolgend finden Sie einige Beispiele, um Ihnen einen grundlegenden Eindruck zu vermitteln, wie sie funktionieren.

- `a` — Erkennt ein Zeichen, das `a` ist (nicht `b`, nicht `aa`, usw.).
- `abc` — Erkennt `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Erkennt `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Erkennt `a`, optional gefolgt von beliebig vielen `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc`, usw.).
- `a|b` — Erkennt ein Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Erkennt genau `abc` oder genau `xyz` (jedoch nicht `abcxyz` oder `a` oder `y`, usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele, konsultieren Sie unsere [Regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions)-Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut wie folgt hinzuzufügen:

```html live-sample___validate-regular-expression
<form>
  <label for="choose">Would you prefer a banana or a cherry? *</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden live-sample___validate-regular-expression
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Dies ergibt das folgende Update – probieren Sie es aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch die **Play**-Schaltfläche drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}} Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es unterstützt, dass sowohl die großgeschriebene als auch die kleingeschriebene Version durch ein zusätzliches "Aa"-Muster innerhalb von eckigen Klammern zulässig sind.

Versuchen Sie nun, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attributs entsprechend einigen der zuvor gesehenen Beispiele zu ändern, und sehen Sie, wie sich dies auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu schreiben, und sehen Sie sich an, wie es funktioniert.
Machen Sie sie nach Möglichkeit fruchtbezogen, damit Ihre Beispiele sinnvoll sind!

Wenn ein nicht-leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, wird das `input` als {{cssxref(':invalid')}} betrachtet. Wenn leer und das Element nicht erforderlich ist, wird es nicht als ungültig angesehen.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut, um gegen einen regulären Ausdruck validiert zu werden. Zum Beispiel wird durch Angabe des `email`-Typs der Wert des Eingabefelds gegen ein Muster einer gut geformten E-Mail-Adresse oder ein Muster, das eine durch Kommas getrennte Liste von E-Mail-Adressen erwartet, geprüft, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}} Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) Attribut nicht.

### Beschränkung der Länge Ihrer Eingaben

Sie können die Zeichenlänge aller Textfelder, die mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellt wurden, durch die Verwendung der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Attribute einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) Wert hat.

Browser erlauben dem Benutzer oft nicht, einem Textfeld einen längeren Wert als erwartet einzugeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, auch den Zeichenanzahl-Feedback in einer zugänglichen Weise bereitzustellen und dem Benutzer zu gestatten, ihren Inhalt auf die richtige Größe zu bringen.
Ein Beispiel dafür ist das Zeichenlimit beim Posten in den sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann genutzt werden, um dies zu bieten.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzerbereitgestellte Eingaben gemeldet.

### Eingabewerte einschränken

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Datumseingabetypen, können die Attribute [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) verwendet werden, um einen Bereich zulässiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Schauen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [einfachen Start-Datei](#einfaches_start-datei) und speichern Sie diese im selben Verzeichnis als `index2.html`.

Löschen Sie nun den Inhalt des `<body>` Elements und ersetzen Sie ihn durch das Folgende:

```html live-sample___constraining-values
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry? *</label>
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

- Hier sehen Sie, dass wir dem `text`-Feld eine `minlength` und `maxlength` von sechs gegeben haben, was der gleichen Länge wie Banane und Kirsche entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrement-Pfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu verschieben.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Nummer ist nicht erforderlich, sodass das Entfernen des Werts zu einem gültigen Wert führt.

```css hidden live-sample___constraining-values
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

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch die **Play**-Schaltfläche drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Numerische Eingabetypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut verwenden. Dieses Attribut gibt an, um welches Inkrement der Wert erhöht oder verringert wird, wenn die Eingabesteuerungen verwendet werden (wie die Auf- und Ab-Nummer-Buttons oder das Verschieben der Bereichs-Thumb). Das `step` Attribut ist in unserem Beispiel ausgelassen, sodass der Wert standardmäßig `1` ist. Das bedeutet, dass Gleitkommazahlen, wie 3.2, auch als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, das die Verwendung von HTML-eigenen Validierungsfunktionen zeigt.
Erstens, etwas HTML:

```html
<form>
  <p>Please complete all required (*) fields.</p>
  <fieldset>
    <legend>Do you have a driver's license? *</legend>
    <input type="radio" required name="driver" id="r1" value="yes" />
    <label for="r1">Yes</label>
    <input type="radio" required name="driver" id="r2" value="no" />
    <label for="r2">No</label>
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1">What's your favorite fruit? *</label>
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

Sie können auch die **Play**-Schaltfläche drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die zur Beschränkung von Eingabewerten verwendet werden können und der Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten anschauen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einem Satz von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerungselement nicht erfüllt (falls vorhanden). Wenn das Steuerungselement kein Kandidat für die Constraints-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (ist gültig), gibt dies eine leere Zeichenfolge zurück.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite finden; unten sind einige der häufigeren aufgelistet:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er es tut. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale Länge, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut angegeben ist, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut angegeben ist, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das Maximum, das durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut angegeben ist, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das Minimum, das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut angegeben ist, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht die erforderliche Syntax aufweist (wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber keinen Wert, oder `false` sonst. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element überprüft wird, wenn das Formular übermittelt wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form) Element bereit.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist, `false` andernfalls. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet und der angegebene Fehler wird angezeigt. Dies ermöglicht Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler festzustellen, der über die von den Standard HTML-Validierungsbeschränkungen angebotenen hinausgeht. Die Nachricht wird dem Benutzer bei der Meldung des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den Validierungsbeispielen für HTML-Einschränkungen früher gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular zu senden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, um ihr Aussehen und Verhalten mit CSS zu ändern.
- Sie hängen von der Browserloka ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist eines der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns anhand eines Beispiels zeigen, wie das geht.

Wir beginnen mit etwas HTML. Fühlen Sie sich frei, dies in einer weiteren Kopie der [Grundlagendatei](#einfaches_start-datei) zu implementieren, wenn Sie möchten:

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

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen ihr dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut geformten E-Mail-Adresse entspricht. Falls ja, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) Methode mit einer benutzerdefinierten Nachricht auf. Dies macht das Eingabefeld ungültig, sodass beim Versuch, das Formular zu senden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()` Methode mit einer leeren Zeichenfolge auf. Dies macht die Eingabe gültig, sodass das Formular übermittelt wird. Während der Validierung, wenn ein Formularelement einen `customError` hat, der nicht die leere Zeichenfolge ist, wird die Formularübermittlung blockiert.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___custom-error-message
<form>
  <label for="mail"
    >I would like you to provide me with an email address:</label
  >
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

```css hidden live-sample___custom-error-message
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
form {
  margin: 3rem 0;
}
```

```js hidden live-sample___custom-error-message
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("custom-error-message", "100%", 120, , , , , "allow-forms")}}

#### Erweiterung der eingebauten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehler (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu verwenden und diese dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die eingebaute Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Im Falle einer neuen Eingabe setzt der Code zunächst die benutzerdefinierte Fehlermeldung zurück, indem er `setCustomValidity("")` aufruft.
Er verwendet dann `email.validity.valid`, um zu prüfen, ob die eingegebene Adresse ungültig ist und wenn ja, gibt sie aus dem Ereignishandler zurück.
Auf diese Weise werden alle normalen eingebauten Validierungsprüfungen ausgeführt, während der eingegebene Text keine gültige E-Mail-Adresse ist.

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

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet, zu übermitteln.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, lassen Sie uns sehen, wie wir diese API verwenden können, um eine etwas komplexere benutzerdefinierte Validierung zu erstellen.

Zuerst das HTML. Fühlen Sie sich frei, dies mit uns zu erstellen:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut, um die automatische Validierung des Browsers zu deaktivieren. Das Setzen des `novalidate` Attributs am Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen zeigt, und gestattet es uns, stattdessen unsere benutzerdefinierten Fehlermeldungen auf eine von uns gewählte Weise im DOM anzuzeigen.
Dies deaktiviert jedoch nicht die Unterstützung für die Constraint Validation API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw.
Das bedeutet, dass selbst wenn der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor er seine Daten sendet, Sie dies trotzdem selbst tun und das Formular entsprechend stylen können.

Unsere zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und zeigen Sie eine benutzerdefinierte Fehlermeldung für jeden Fehler an.

Wir zielen darauf ab, die Fehlermeldungen innerhalb eines `<span>` Elements anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribut ist auf diesem `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen Benutzern präsentiert wird, einschließlich der Lesung durch Bildschirmleser.

Nun zum etwas grundlegenden CSS, um das Erscheinungsbild des Formulars leicht zu verbessern und visuelles Feedback zu geben, wenn die eingegebenen Daten ungültig sind:

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

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier erhalten wir das Formular selbst und das E-Mail
Eingabefeld sowie das Spanelement, in das wir die Fehlermeldung platzieren werden.

Mit Hilfe von Ereignishandlern überprüfen wir, ob die Formularfelder jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler auftritt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob sie gültige Daten enthält. Wenn ja, entfernen wir jede angezeigte Fehlermeldung. Wenn die Daten nicht gültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir wieder, ob die Daten gültig sind. Wenn ja, lassen wir das Formular senden. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern die Absendung des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()` Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine entsprechende Fehlermeldung an.

Hier ist das Live-Ergebnis (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___detailed-custom-validation
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

```css hidden live-sample___detailed-custom-validation
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
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
}

input:focus:invalid {
  outline: none;
}

/* This is the style of our error messages */
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

```js hidden live-sample___detailed-custom-validation
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the form contains valid data, we let it submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("detailed-custom-validation", "100%", 150, , , , , "allow-forms")}}

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug, um die Formularvalidierung zu steuern, sodass Sie der Benutzeroberfläche eine enorme Kontrolle überlassen können, die weit über das hinausgeht, was Sie nur mit HTML und CSS erreichen können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie bei [benutzerdefinierten Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), werden Sie nicht in der Lage sein oder nicht den Wunsch haben, die Constraint Validation API zu verwenden. Sie können immer noch JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen es selbst schreiben.

Um ein Formular zu validieren, stellen Sie sich ein paar Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren werden: Zeichenfolgenoperationen, Typkonvertierung, reguläre Ausdrücke und so weiter. Es liegt an Ihnen.
- Was soll ich tun, wenn das Formular nicht gültig ist?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die fehlerhaft sind?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu leiten.
    Sie sollten von vornherein Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen bereitstellen.
    Wenn Sie tiefer in die UI-Anforderungen der Formularvalidierung eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:
    - [Benutzern helfen, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/form-fields)
    - [Validierung von Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, zeigt das folgende Beispiel eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ebenso muss sich das CSS nicht sehr ändern; wir haben nur die {{cssxref(":invalid")}}-CSS-Pseudoklasse in eine echte Klasse umgewandelt und den Attributselektor vermieden.

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

Die größten Änderungen finden sich im JavaScript-Code, der viel mehr Arbeit leisten muss.

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

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst aufzubauen. Das Schwierige ist, es allgemein genug zu machen, um es plattformübergreifend und bei jeder von Ihnen möglicherweise erstellten Form zu verwenden. Es gibt viele Bibliotheken, die für die Formularvalidierung verfügbar sind, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die Formularvalidierung auf der Client-Seite erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, aber sie erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die bereitgestellten Daten zu korrigieren. Zu diesem Zweck sollten Sie:

- Explizite Fehlermeldungen anzeigen.
- Seien Sie nachsichtig mit dem Eingabeformat.
- Zeigen Sie genau, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden.
Wir werden uns als Nächstes mit dem [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
