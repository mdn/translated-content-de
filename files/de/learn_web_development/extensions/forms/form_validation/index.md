---
title: Formulvalidierung auf Client-Seite
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formelemente ausgefüllt sind und das korrekte Format haben, bevor Benutzer eingegebene Formulardaten an den Server gesendet werden. Diese **Formularvalidierung auf Client-Seite** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen entsprechen, die in den verschiedenen Formelementen festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Formularvalidierung auf Client-Seite.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkompetenz, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Formularvalidierung auf Client-Seite ist, warum sie wichtig ist,
        und wie man verschiedene Techniken anwenden kann, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Client-Seite ist eine erste Prüfung und ein wichtiges Merkmal einer guten Benutzererfahrung; durch das Erfassen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren.
Wenn die Daten zum Server gelangen und dann abgelehnt werden, verursacht eine merkliche Verzögerung eine Hin- und Rücksendung zum Server und dann zurück zur Client-Seite, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Jeodch **sollte die Validierung auf Client-Seite nicht** als umfassende Sicherheitsmaßnahme angesehen werden! Ihre Anwendungen sollten immer eine Validierung einschließlich Sicherheitsüberprüfungen **auch** auf der **Server-Seite** der übermittelten Formulardaten durchführen, da die Validierung auf Client-Seite zu leicht zu umgehen ist, sodass böswillige Benutzer trotzdem leicht fehlerhafte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Validierung auf Server-Seite geht über den Umfang dieses Moduls hinaus, sollte jedoch im Hinterkopf behalten werden.

## Was ist Formularvalidierung?

Gehen Sie zu jeder beliebten Seite mit einem Registrierungsformular, und Sie werden feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Für Gültigkeit ist ein spezifisches Datenformat erforderlich).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die von Ihnen eingegebenen Daten haben nicht das richtige Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten das korrekte Format haben und innerhalb der von der Anwendung festgelegten Einschränkungen liegen. Die Validierung, die im Browser vorgenommen wird, nennt man **Client-seitige** Validierung, während die Validierung auf dem Server **Server-seitige** Validierung heißt.
In diesem Kapitel konzentrieren wir uns auf die Validierung auf der Client-Seite.

Wenn die Informationen im richtigen Format vorliegen, erlaubt die Anwendung, dass die Daten an den Server übermittelt und (normalerweise) in einer Datenbank gespeichert werden; wenn die Informationen nicht im richtigen Format vorliegen, wird dem Benutzer eine Fehlermeldung angezeigt, die erklärt, was korrigiert werden muss, und ihm ermöglicht, es erneut zu versuchen.

Wir wollen das Ausfüllen von Webformularen so einfach wie möglich machen. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Es gibt drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder überhaupt fehlen.
- **Wir wollen die Daten unserer Benutzer schützen.** Das Erzwingen sicherer Passwörter erleichtert es, die Kontoinformationen unserer Benutzer zu schützen.
- **Wir wollen uns selbst schützen.** Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die von der Client-Seite an Ihren Server übergeben werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein böswilliger Benutzer immer noch die Netzwerk-Anfrage ändern.

## Verschiedene Arten der Validierung auf Client-Seite

Es gibt zwei verschiedene Arten der Validierung auf Client-Seite, die Sie im Web finden werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können festlegen, welche Formularelemente erforderlich sind und welches Format die vom Benutzer eingegebenen Daten haben müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird im Allgemeinen verwendet, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Die Validierung auf der Client-Seite kann mit wenig bis gar keinem JavaScript durchgeführt werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird im Allgemeinen empfohlen, Ihre Formulare mit robusten HTML-Funktionen zu beginnen und dann bei Bedarf das Benutzererlebnis mit JavaScript zu verbessern.

## Verwendung integrierter Formularvalidierung

Eine der wichtigsten Funktionen von [Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Möglichkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen.
Dies wird durch die Verwendung von Validierungsattributen an Formularelementen erreicht.
Wir haben viele davon in früheren Phasen des Kurses gesehen, aber um es zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld vor dem Absenden des Formulars ausgefüllt sein muss.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die Mindest- und Höchstlänge von Textdaten (Strings) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die Mindest- und Höchstwerte von numerischen Eingabetypen und die Schrittweite für Werte, beginnend mit dem Minimum, an.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Nummer, eine E-Mail-Adresse oder eine andere spezifische voreingestellte Art sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten allen von den Attributen festgelegten Regeln entsprechen, wird sie als gültig betrachtet. Andernfalls wird sie als ungültig betrachtet.

Wenn ein Element gültig ist, gelten die folgenden Punkte:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, wodurch Sie einen bestimmten Stil auf gültige Elemente anwenden können. Das Control entspricht auch {{cssxref(":user-valid")}}, wenn der Benutzer mit dem Control interagiert hat, und kann anderen UI-Pseudo-Klassen entsprechen, wie {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular senden, vorausgesetzt, es gibt nichts anderes, das es daran hindert (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten die folgenden Punkte:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerobjekt interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudo-Klassen können ebenfalls entsprechend dem Fehler zutreffen, wie {{cssxref(":out-of-range")}}. Diese ermöglichen es Ihnen, einen bestimmten Stil auf ungültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser das Absenden des Formulars und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validation_api) wird unten beschrieben.

## Beispiele für die integrierte Formularvalidierung

In diesem Abschnitt werden wir einige der oben diskutierten Attribute testen.

### Einfaches Startdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, mit der Sie wählen können, ob Sie eine Banane oder eine Kirsche bevorzugen.
Dieses Beispiel umfasst eine Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem Übermittlungs-{{htmlelement("button")}}.

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

Erstellen Sie zu Beginn eine Kopie der vorherigen HTML-Auflistung in einer neuen `index.html`-Datei. Speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das erforderliche Attribut

Eine häufige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, sondern zeigt beim Absenden eine Fehlermeldung an, wenn die Eingabe leer ist.
Solange sie leer ist, wird die Eingabe auch als ungültig betrachtet, was der {{cssxref(':invalid')}} UI-Pseudoklasse entspricht.

Wenn eine einzelne Radio-Schaltfläche in einer gleichnamigen Gruppe das `required`-Attribut hat, muss eine der Radio-Schaltflächen in dieser Gruppe für die Gruppe als gültig angesehen werden; die angekreuzte Radio muss nicht die mit dem Attribut gesetzte sein.

> [!NOTE]
> Verlangen Sie von Benutzern nur die Eingabe der Daten, die Sie wirklich benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Eine gängige Praxis ist es, ein Sternchen (oder eine andere Markierung) hinter den Beschriftungen der erforderlichen Formularelemente zu setzen, damit sie für sehende Benutzer auffällig sind. Es ist nicht nur eine gute Benutzererfahrung, dem Benutzer mitzuteilen, wann Formularfelder erforderlich sind, sondern es ist auch von den WCAG [Zugänglichkeits](/de/docs/Learn_web_development/Core/Accessibility)-Richtlinien erforderlich.

Wir fügen CSS-Stile ein, die angewendet werden, basierend darauf, ob das Element erforderlich, gültig oder ungültig ist:

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

Dieses CSS führt dazu, dass die Eingabe einen roten gestrichelten Rand hat, wenn sie ungültig ist, und einen subtileren schwarzen Vollrand, wenn sie gültig ist.
Wir haben auch einen Hintergrundverlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne einen Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält und eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint. Das Formular wird auch nicht gesendet (obwohl zu beachten ist, dass selbst wenn ein Wert eingegeben wird, wir das Senden des Formulars verhindern, um einen Fehler aufgrund der Art und Weise, wie MDN eingebettete Formulare behandelt, zu vermeiden).

### Validierung mit einem regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet.
Ein regulärer Ausdruck (RegExp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textstrings zu durchsuchen. RegExps eignen sich daher ideal zur Formularvalidierung und dienen verschiedenen anderen Zwecken in JavaScript.

RegExps sind ziemlich komplex, und es ist nicht beabsichtigt, Ihnen sie erschöpfend in diesem Artikel beizubringen.
Unten finden Sie einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Übereinstimmungen mit einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Übereinstimmung mit `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Übereinstimmung mit `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Übereinstimmung mit `a`, optional gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Übereinstimmung mit einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Übereinstimmung genau mit `abc` oder genau mit `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Regulären Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut wie dieses hinzuzufügen:

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

Dies ergibt das folgende Update - probieren Sie es aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Strings "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind abhängig von Groß-/Kleinschreibung, aber wir haben dafür gesorgt, dass sowohl kapitalisierte als auch klein geschriebene Versionen mit einem zusätzlichen "Aa"-Muster innerhalb eckiger Klammern unterstützt werden.

An diesem Punkt versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs auf einige der zuvor gesehenen Beispiele zu ändern und schauen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert als gültig zu machen.
Versuchen Sie, einige eigene zu schreiben, und sehen Sie, wie es läuft.
Machen Sie sie nach Möglichkeit fruchtbezogen, damit Ihre Beispiele Sinn machen!

Ein nicht-leerer Wert des {{HTMLElement("input")}}, der das Muster des regulären Ausdrucks nicht entspricht, wird das `input` zusammen mit der {{cssxref(':invalid')}} Pseudoklasse übereinstimmen. Wenn es leer ist und das Element nicht erforderlich ist, wird es nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen keine [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut zur Validierung gegen einen regulären Ausdruck. Zum Beispiel wird durch die Angabe des `email`-Typs der Eingabewert mit einem gut geformten E-Mail-Adressmuster validiert oder einem Muster, das eine durch ein Komma getrennte Liste von E-Mail-Adressen darstellt, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Einschränkung der Länge Ihrer Eingaben

Sie können die Zeichenzahl aller von {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder durch die Verwendung der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute einschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)-Wert oder mehr als der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Wert.

Browser erlauben oft nicht, dass der Benutzer einen längeren Wert als erwartet in Textfelder eingibt. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, gleichzeitig eine Zeichenanzahl-Rückmeldung auf eine zugängliche Weise bereitzustellen und den Benutzer seine Inhalte auf die erforderliche Größe bearbeiten zu lassen.
Ein Beispiel dafür ist die Zeichenanzahlbegrenzung beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann hierfür verwendet werden.

> [!NOTE]
> Längenbeschränkungen werden nie berichtet, wenn der Wert programmatisch gesetzt wird. Sie werden nur für benutzereingetragene Eingaben gemeldet.

### Einschränkung der Werte Ihrer Eingaben

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und der verschiedenen Datumeingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte bereitzustellen.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Schauen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [einfachen Startdatei](#einfaches_startdatei) und speichern Sie sie im selben Verzeichnis unter dem Namen `index2.html`.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

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

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, was dieselbe Länge wie "banana" und "cherry" ist.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können nicht die Inkrement-/Dekrementpfeile verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

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

Hier ist das Beispiel, live in Aktion:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Numerische Eingabtypen, wie `number`, `range` und `date`, können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut verwenden. Dieses Attribut legt fest, in welchem Inkrement der Wert erhöht oder verringert wird, wenn die Eingabekontrollen verwendet werden (z. B. die Aufwärts- und Abwärtspfeile oder das Ziehen des Bereichszeigers). Das `step`-Attribut wird in unserem Beispiel weggelassen, sodass der Standardwert `1` ist. Dies bedeutet, dass Fließkommazahlen wie 3.2 ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, um die Verwendung eingebauter HTML-Validierungsfunktionen zu zeigen.
Zuerst etwas HTML:

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die verwendet werden können, um Eingabewerte einzuschränken, und der Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten ansehen, dies zu tun.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen von Formularelementen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen bereit.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (d.h. er ist gültig), wird ein leerer String zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Validierungszustand des Elements beschreiben. Sie können alle verfügbaren Eigenschaften im [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzdokument einsehen; hier sind einige der häufigsten:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht mit dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) übereinstimmt, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die maximale, durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut festgelegte Länge, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die minimale Länge, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut festgelegt ist, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als der durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut festgelegte Maximum, oder `false`, wenn er kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut festgelegte Minimum, oder `false`, wenn er größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false` wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hat, aber keinen Wert, oder `false` anderweitig. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, wenn das Formular gesendet wird; andernfalls `false`.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Validitätsprobleme aufweist; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` event](/de/docs/Web/API/HTMLInputElement/invalid_event) beim Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Event-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig betrachtet und der angegebene Fehler angezeigt. Dies ermöglicht es Ihnen, JavaScript-Code zu verwenden, um einen Validierungsfehler jenseits der durch die standardmäßigen HTML-Validierungseinschränkungen angebotenen festzustellen. Die Meldung wird dem Benutzer angezeigt, wenn das Problem gemeldet wird.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den HTML-Validierungsbeispielen zuvor gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatischen Nachrichten haben zwei Nachteile:

- Es gibt keinen standardmäßigen Weg, um deren Aussehen mit CSS zu ändern.
- Sie hängen von der Spracheinstellung des Browsers ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox Screenshot zu sehen.

![Beispiel einer Fehlermeldung mit Firefox auf Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Personalisierung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie man dies macht.

Wir beginnen mit etwas HTML. Sie können es gerne in eine weitere Kopie der [einfachen Startdatei](#einfaches_startdatei)-Datei ablegen, wenn Sie möchten:

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

Hier speichern wir eine Referenz auf die E-Mail-Eingabe, dann fügen wir dieser einen Event-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Innerhalb des enthaltenen Codes überprüfen wir, ob die E-Mail-Eingabe's `validity.typeMismatch`-Eigenschaft `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht mit dem Muster für eine gut geformte E-Mail-Adresse übereinstimmt. Wenn dies der Fall ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dies macht das Eingabefeld ungültig, sodass beim Versuch, das Formular abzusenden, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die Eigenschaft `validity.typeMismatch` `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dadurch wird die Eingabe als gültig angesehen, sodass das Formular gesendet wird. Während der Validierung, wenn ein Formularelement einen `customError` hat, der nicht der leere String ist, wird die Formularübermittlung blockiert.

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

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für eine bestimmte Art von Fehler (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, alle integrierten Formularvalidierungen zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die integrierte [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)-Validierung erweitern können, um nur Adressen mit der Domain `@example.com` zu akzeptieren.
Wir beginnen mit dem HTML-{{htmlelement("form")}} unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Bei einem neuen Eingabewert wird der benutzerdefinierte Validitätsstatus durch Aufrufen von `setCustomValidity("")` zuerst zurückgesetzt.
Dann wird `email.validity.valid` verwendet, um zu überprüfen, ob die eingegebene Adresse ungültig ist und, falls ja, die Event-Handler-Funktion beendet.
Dies stellt sicher, dass alle normalen integrierten Validierungsprüfungen ausgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, ruft `setCustomValidity()` mit einer Fehlermeldung auf, wenn die Adresse nicht mit `@example.com` endet.

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

Zuerst das HTML. Fühlen Sie sich frei, dieses mit uns zu bauen:

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

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Das Setzen des `novalidate`-Attributs im Formular verhindert, dass das Formular seine eigenen Fehlermeldungsblasen anzeigt, und ermöglicht es uns stattdessen, die benutzerdefinierten Fehlermeldungen im DOM auf eine Weise unserer Wahl anzuzeigen.
Es deaktiviert jedoch nicht die Unterstützung für die Constraint-Validation-API oder die Anwendung von CSS-Pseudo-Klassen wie {{cssxref(":valid")}}, etc.
Das bedeutet, dass Sie, obwohl der Browser nicht automatisch die Gültigkeit des Formulars überprüft, bevor seine Daten gesendet werden, dies dennoch selbst tun und das Formular entsprechend gestalten können.

Unsere Eingabe zur Validierung ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns diese mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Unser Ziel ist es, die Fehlermeldungen in einem `<span>`-Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut wird auf dieses `<span>`-Element gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich der Ausgabe für Bildschirmleser.

Nun zu etwas CSS, um das Erscheinungsbild des Formulars geringfügig zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

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

Nun ein Blick auf das JavaScript, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, um einen DOM-Knoten auszuwählen; hier bekommen wir das Formular selbst und das E-Mail
Eingabefeld, sowie das span-Element, in das wir die Fehlermeldung einfügen werden.

Mithilfe von Ereignishandlern überprüfen wir bei jeder Eingabe durch den Benutzer, ob die Formularfelder gültig sind. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir jegliche Fehlermeldung.

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

Jedes Mal, wenn wir den Wert der Eingabe ändern, prüfen wir, ob er gültige Daten enthält. Wenn dies der Fall ist, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten ungültig sind, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, prüfen wir erneut, ob die Daten gültig sind. Wenn ja, erlauben wir die Übermittlung des Formulars. Wenn nicht, führen wir `showError()` aus, um den entsprechenden Fehler anzuzeigen, und verhindern die Übermittlung des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um zu ermitteln, welcher Fehler vorliegt, und zeigt dann eine Fehlermeldung entsprechend an.

Hier ist das live Ergebnis (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Die Constraint Validation API gibt Ihnen ein leistungsstarkes Werkzeug zur Hand, um die Formularvalidierung zu handhaben und Ihnen eine enorme Kontrolle über die Benutzeroberfläche zu geben, weit über das hinaus, was Sie mit HTML und CSS alleine tun können.

### Formularvalidierung ohne eingebaute API

In einigen Fällen, wie bei [benutzerdefinierten Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder wollen Sie die Constraint Validation API nicht nutzen. Sie können jedoch immer noch JavaScript verwenden, um Ihre Formulare zu validieren, müssen dies jedoch selbst implementieren.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenkettenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt in Ihrer Hand.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Frage der Benutzeroberfläche. Sie müssen entscheiden, wie sich das Formular verhalten wird. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die Fehler aufweisen?
    Sollten Fehlermeldungen angezeigt werden?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um ihn bei der Korrektur seiner Eingaben zu unterstützen.
    Sie sollten im Vorfeld Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen anzeigen.
    Wenn Sie sich tiefer mit Anforderungen an die Formularvalidierung von Benutzeroberflächen befassen möchten, hier einige nützliche Artikel:
    - [Helfen Sie Benutzern, die richtigen Daten in Formularen einzugeben](https://web.dev/learn/forms/form-fields)
    - [Validierung von Eingaben](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie Fehler in Formularen gemeldet werden: 10 Designrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

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

Ähnlich scheint sich das CSS nicht sehr ändern zu müssen; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Verwendung des Attributwählers vermieden.

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

Die großen Änderungen sind im JavaScript-Code, der viel mehr leisten muss.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen können, ist es nicht so schwer, ein Validierungssystem selbst zu entwickeln. Der schwierige Teil besteht darin, es so allgemein zu gestalten, dass es sowohl plattformübergreifend als auch auf jedem Formular, das Sie erstellen könnten, verwendet werden kann. Es gibt viele Bibliotheken, die zur Durchführung von Formularvalidierungen verfügbar sind, wie beispielsweise [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die Formularvalidierung auf der Client-Seite erfordert manchmal JavaScript, wenn Sie Styling und Fehlermeldungen anpassen möchten, aber es erfordert _immer_, dass Sie sorgfältig über den Benutzer nachdenken.
Denken Sie immer daran, Ihren Benutzern bei der Korrektur der von ihnen eingegebenen Daten zu helfen. Um diesem Ziel gerecht zu werden, stellen Sie bitte sicher:

- Zeigen Sie explizite Fehlermeldungen an.
- Seien Sie großzügig im Hinblick auf das Eingabeformat.
- Weisen Sie genau darauf hin, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden.
Wir werden als Nächstes das Thema [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
