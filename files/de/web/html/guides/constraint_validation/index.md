---
title: Verwendung von HTML-Formularvalidierung und der Constraint Validation API
short-title: Constraint validation
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars selbst einfach ist, ist die Überprüfung, ob jedes Feld einen gültigen und kohärenten Wert hat, schwieriger, und die Benutzer über das Problem zu informieren, kann zu einer Herausforderung werden. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Constraint-Validierung_ hinzu, um die Überprüfung des Formularinhalts auf der Client-Seite zu erleichtern. Basiskonstanten können überprüft werden, ohne dass JavaScript erforderlich ist, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte, mit Beispielen, siehe das [Formularvalidierungs-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Constraint-Validierung entfernt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Auch wenn weitaus weniger ungültige Formularanfragen zu erwarten sind, können ungültige Anfragen auf viele Arten gesendet werden:
>
> - Durch Änderung von HTML über die Entwicklertools des Browsers.
> - Durch manuelle Erstellung einer HTTP-Anfrage, ohne das Formular zu verwenden.
> - Durch das programmgesteuerte Schreiben von Inhalten in das Formular (bestimmte Constraint-Validierungen werden _nur bei_ Benutzereingaben ausgeführt und nicht, wenn Sie den Wert eines Formularfeldes mit JavaScript setzen).
>
> Deshalb sollten Sie immer Formulardaten auf der Server-Seite validieren, konsistent mit dem, was auf der Client-Seite gemacht wird.

## Intrinsische und grundlegende Constraints

In HTML werden grundlegende Constraints auf zwei Arten deklariert:

- Durch die Auswahl des semantisch geeignetsten Wertes für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z. B. erzeugt die Auswahl des `email`-Typs automatisch ein Constraint, das überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf validierungsbezogene Attribute, die es erlauben, grundlegende Constraints ohne Verwendung von JavaScript zu beschreiben.

### Semantische Eingabetypen

Die intrinsischen Constraints für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut sind:

| Eingabetyp                                                                 | Beschreibung des Constraints                                                                                                                                                      | Zugehöriger Verstoß                                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert.   | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Constraintsverstoß |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `benutzername@hostname.tld` hat, aber auch lokal wie `benutzername@hostname` sein kann. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Constraintsverstoß |

Für beide dieser Eingabetypen, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut gesetzt ist, können mehrere Werte als kommagetrennte Liste angegeben werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird der **TypeMismatch** Constraintsverstoß ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Constraints haben, da einige von der Constraints-Validierung ausgeschlossen sind oder einen Sanitisierungsalgorithmus haben, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Constraints zu beschreiben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Unterstützte Eingabetypen</th>
      <th scope="col">Mögliche Werte</th>
      <th scope="col">Beschreibung des Constraints</th>
      <th scope="col">Zugehöriger Verstoß</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Attributes/pattern">pattern</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        Ein
        <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions"
          >JavaScript regulärer Ausdruck</a
        >
        (kompiliert mit den Flags {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}}, und
        {{jsxref("RegExp.multiline", "multiline")}} <em>deaktiviert</em>)
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        Constraintsverstoß
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss größer oder gleich dem Wert sein.</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeUnderflow"
              >rangeUnderflow</a
            ></code
          ></strong
        >
        Constraintsverstoß
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Ein gültiges Datum</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Ein gültiges Datum und Uhrzeit</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss kleiner oder gleich dem Wert sein</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >
        Constraintsverstoß
      </td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Ein gültiges Datum</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Ein gültiges Datum und Uhrzeit</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Attributes/required">required</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>,
        <code>date</code>, <code>datetime-local</code>,
        <code>month</code>, <code>week</code>, <code>time</code>,
        <code>number</code>, <code>checkbox</code>, <code>radio</code>,
        <code>file</code>; auch auf den {{ HTMLElement("select") }} und
        {{ HTMLElement("textarea") }} Elementen
      </td>
      <td>
        <em>keine</em>, da es ein Boolean-Attribut ist: seine Anwesenheit bedeutet
        <em>wahr</em>, seine Abwesenheit bedeutet <em>falsch</em>
      </td>
      <td>Es muss ein Wert vorhanden sein (falls gesetzt).</td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
        Constraintsverstoß
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf das Literal <code>any</code> gesetzt ist, muss der Wert
        <strong>min</strong> + ein Vielfaches des Schritts sein.
      </td>
      <td rowspan="5">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
        Constraintsverstoß
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Eine ganze Anzahl von Monaten</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>Eine ganze Anzahl von Wochen</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Eine ganze Anzahl von Sekunden</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine ganze Zahl</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Attributes/minlength"
            >minlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>; auch auf dem
        {{ HTMLElement("textarea") }}-Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) muss mindestens dem Wert des Attributs entsprechen, wenn es nicht leer ist. Alle Zeilenumbrüche werden auf ein einziges Zeichen normalisiert (anstatt CRLF-Paare) für
        {{ HTMLElement("textarea") }}.
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
        Constraintsverstoß
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Attributes/maxlength"
            >maxlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>; auch auf dem
        {{ HTMLElement("textarea") }}-Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf den Wert des Attributs nicht überschreiten.
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
        Constraintsverstoß
      </td>
    </tr>
  </tbody>
</table>

## Constraint-Validierungsprozess

Die Constraint-Validierung erfolgt über die Constraint Validation API entweder auf einem einzelnen Formularelement oder auf der Formularebene, direkt auf dem {{ HTMLElement("form") }}-Element. Die Constraint-Validierung erfolgt auf folgende Weise:

- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode einer formularassoziierten DOM-Schnittstelle, ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Constraints nur auf diesem Element auswertet, wodurch ein Skript diese Informationen erhalten kann. Die `checkValidity()`-Methode gibt einen Boolean-Wert zurück, der anzeigt, ob der Wert des Elements seine Constraints erfüllt. (Dies wird typischerweise vom Benutzer-Agent getan, wenn er bestimmt, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, zutrifft.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer alle Constraint-Fehler.
- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch das Absenden des Formulars selbst.

Der Aufruf von `checkValidity()` wird als _statische_ Validierung der Constraints bezeichnet, während der Aufruf von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Validierung der Constraints bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Constraints.
> - Der Aufruf der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Constraint-Validierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Constraints nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einem Absenden-Button auf.
> - Die `minlength`- und `maxlength`-Constraints werden nur bei benutzerseitig bereitgestellten Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, selbst wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen wird.

## Komplexe Constraints mit der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Constraints zu implementieren, zum Beispiel Constraints, die mehrere Felder kombinieren oder solche, die komplexe Berechnungen erfordern.

Im Grunde besteht die Idee darin, JavaScript bei einem Ereignis des Formularfelds (wie **onchange**) auszulösen, um zu berechnen, ob das Constraint verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: Ein leerer String bedeutet, dass das Constraint erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt und dieser String die Fehlermeldung ist, die dem Benutzer angezeigt werden soll.

### Constraint, das mehrere Felder kombiniert: Postleitzahlvalidierung

Das Postleitzahlformat variiert von Land zu Land. Viele Länder erlauben ein optionales Präfix mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich und `CH-` in der Schweiz). Einige Länder verwenden nur eine feste Anzahl von Ziffern in Postleitzahlen, während andere, wie das Vereinigte Königreich, komplexere Formate haben, die an bestimmten Positionen Buchstaben erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahlvalidierung, sondern eher eine Demonstration der Hauptkonzepte.

Als Beispiel werden wir ein Skript hinzufügen, das die Constraint-Validierung für ein Formular überprüft:

```html
<form>
  <label for="postal-code">Postal Code: </label>
  <input type="text" id="postal-code" />
  <label for="country">Country: </label>
  <select id="country">
    <option value="ch">Switzerland</option>
    <option value="fr">France</option>
    <option value="de">Germany</option>
    <option value="nl">The Netherlands</option>
  </select>
  <input type="submit" value="Validate" />
</form>
```

Dies zeigt das folgende Formular an:

{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}

Zuerst schreiben wir eine Funktion, die das Constraint selbst überprüft:

```js
function checkPostalCode() {
  // For each country, defines the pattern that the postal code has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Read the country id
  const country = document.getElementById("country").value;

  // Get the NPA field
  const postalCodeField = document.getElementById("postal-code");

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Check it!
  if (constraint.test(postalCodeField.value)) {
    // The postal code follows the constraint, we use the ConstraintAPI to tell it
    postalCodeField.setCustomValidity("");
  } else {
    // The postal code doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    postalCodeField.setCustomValidity(constraints[country][1]);
  }
}
```

Dann verknüpfen wir sie mit dem **onchange**-Ereignis für den {{ HTMLElement("select") }} und dem **oninput**-Ereignis für den {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("country").onchange = checkPostalCode;
  document.getElementById("postal-code").oninput = checkPostalCode;
};
```

### Begrenzung der Dateigröße vor dem Hochladen

Ein weiteres häufiges Constraint ist die Begrenzung der Größe einer Datei, die hochgeladen werden soll. Die Überprüfung auf der Client-Seite, bevor die Datei an den Server übertragen wird, erfordert die Kombination der Constraint Validation API und insbesondere der Methode `field.setCustomValidity()` mit einer anderen JavaScript-API, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die Methode `File.size()`, um ihre Größe zu ermitteln, vergleicht sie mit dem (hart kodierten) Limit und ruft die Constraint API auf, um den Browser zu informieren, ob ein Verstoß vorliegt:

```js
function checkFileSize() {
  const fs = document.getElementById("fs");
  const files = fs.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75 * 1000) {
      // Check the constraint
      fs.setCustomValidity("The selected file must not be larger than 75 kB");
      fs.reportValidity();
      return;
    }
  }
  // No custom constraint violation
  fs.setCustomValidity("");
}
```

Schließlich verbinden wir die Methode mit dem richtigen Ereignis:

```js
window.onload = () => {
  document.getElementById("fs").onchange = checkFileSize;
};
```

## Visuelles Styling der Constraint-Validierung

Abgesehen vom Setzen von Constraints möchten Webentwickler kontrollieren, welche Nachrichten den Benutzern angezeigt werden und wie sie gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Erscheinungsbild von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen es, Selektoren zu schreiben, die Formularelemente zuordnen, die das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut haben, beziehungsweise die es nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um `<input>`-Elemente darzustellen, deren Inhalt laut der Eingabetyp-Einstellung validiert bzw. nicht validiert wird. Diese Klassen erlauben es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um leichter erkennen zu können, welche Elemente entweder korrekt oder fehlerhaft formatiert sind.

### Kontrolle des Textes von Constraintsverstößen

Die folgenden Punkte können dabei helfen, den Text eines Constraintsverstoßes zu kontrollieren:

- Die `setCustomValidity(message)`-Methode auf den folgenden Elementen:
  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Gültigkeitsnachricht auf fieldset-Elementen wird in den meisten Browsern nicht die Formularübermittlung verhindern.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Absenden-Buttons (erstellt mit entweder einem {{HTMLElement("button")}}-Element mit dem `submit`-Typ oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Arten von Buttons nehmen nicht an der Constraint-Validierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das durch die `validity`-Eigenschaft der oben aufgeführten Elementtypen zurückgegeben wird. Sie repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements nicht validiert werden kann, wenn er ungültig ist.
