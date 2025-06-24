---
title: Verwenden der HTML-Formularvalidierung und der Constraint Validation API
short-title: Constraint validation
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das Erstellen von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars selbst einfach ist, ist das Überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, schwieriger, und den Benutzer über das Problem zu informieren, kann Kopfschmerzen bereiten. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element hinzu und die _Constraint-Validierung_, um die Überprüfung des Formularinhalts auf der Clientseite zu erleichtern. Grundlegende, übliche Einschränkungen können ohne JavaScript durch das Setzen neuer Attribute überprüft werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen siehe das [Formularvalidierungs-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Constraint-Validierung beseitigt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Auch wenn viel weniger ungültige Formularanfragen zu erwarten sind, können ungültige weiterhin auf viele Arten gesendet werden:
>
> - Durch Ändern des HTML-Codes über die Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch das programmgesteuerte Schreiben von Inhalten in das Formular (bestimmte Constraint-Validierungen werden _nur für Benutzereingaben_ ausgeführt und nicht, wenn Sie den Wert eines Formularfelds mit JavaScript setzen).
>
> Daher sollten Sie Formulardaten immer auf der Serverseite validieren, konsistent mit dem, was auf der Clientseite gemacht wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch das Wählen des semantisch geeignetsten Wertes für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z. B. durch das Wählen des Typs `email`, wodurch automatisch eine Einschränkung erstellt wird, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf Validierungs-bezogene Attribute, die es ermöglichen, grundlegende Einschränkungen zu beschreiben, ohne dass JavaScript erforderlich ist.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut sind:

| Eingabetyp                                                                 | Beschreibung der Einschränkung                                                                                                                                                  | Zugehörige Verletzung                                                                    |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `username@hostname.tld` hat, aber auch lokal wie `username@hostname` sein kann.       | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |

Für diese beiden Eingabetypen können bei gesetztem [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut mehrere Werte als kommagetrennte Liste festgelegt werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird die **Type mismatch** Einschränkungsverletzung ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Constraint-Validierung ausgeschlossen sind oder einen Bereinigungsalgorithmus haben, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden folgende Attribute zur Beschreibung grundlegender Einschränkungen verwendet:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Eingabetypen, die das Attribut unterstützen</th>
      <th scope="col">Mögliche Werte</th>
      <th scope="col">Beschreibung der Einschränkung</th>
      <th scope="col">Zugehörige Verletzung</th>
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
          >JavaScript-Regular-Expression</a
        >
        (kompiliert mit deaktivierten {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und
        {{jsxref("RegExp.multiline", "multiline")}} Flags)
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        Einschränkungsverletzung
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
        Einschränkungsverletzung
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
        Einschränkungsverletzung
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
        <em>keiner</em>, da es sich um ein Boolean-Attribut handelt: Seine Anwesenheit bedeutet <em>wahr</em>, seine Abwesenheit bedeutet <em>falsch</em>
      </td>
      <td>Es muss ein Wert vorhanden sein (wenn gesetzt).</td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
        Einschränkungsverletzung
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Zahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf das Literal <code>any</code> gesetzt ist, muss der Wert <strong>min</strong> + ein Vielfaches des Schritts sein.
      </td>
      <td rowspan="5">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
        Einschränkungsverletzung
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Eine ganze Zahl von Monaten</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>Eine ganze Zahl von Wochen</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Eine ganze Zahl von Sekunden</td>
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
      <td>Eine ganze Zahl der Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht niedriger als der Wert
        des Attributs sein, wenn nicht leer. Alle Zeilenumbrüche werden zu einem
        einzigen Zeichen (im Gegensatz zu CRLF-Paaren) für {{ HTMLElement("textarea") }} normalisiert.
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
        Einschränkungsverletzung
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
      <td>Eine ganze Zahl der Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf den Wert des Attributs nicht
        überschreiten.
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
        Einschränkungsverletzung
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Constraint-Validierung

Die Constraint-Validierung wird durch die Constraint Validation API entweder auf einem einzelnen Formularelement oder auf Formularebene am {{ HTMLElement("form") }}-Element selbst durchgeführt. Die Constraint-Validierung erfolgt auf folgende Weise:

- Durch einen Aufruf der Methode `checkValidity()` oder `reportValidity()` einer Formular-assoziierten DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur für dieses Element auswertet, sodass ein Skript diese Informationen erhalten kann. Die `checkValidity()`-Methode gibt einen Boolean zurück, der anzeigt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird normalerweise vom Benutzer-Agenten getan, wenn er bestimmt, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, zutrifft.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer eventuelle Einschränkungsverstöße.
- Durch einen Aufruf der Methode `checkValidity()` oder `reportValidity()` auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch das Absenden des Formulars selbst.

Das Aufrufen von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während das Aufrufen von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut am {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Einschränkungen.
> - Das Aufrufen der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Einschränkungsvalidierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einer Schaltfläche zum Absenden auf.
> - Die `minlength`- und `maxlength`-Einschränkungen werden nur bei benutzergesteuerten Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmiert gesetzt wird, auch wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen wird.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, z. B. Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen beinhalten.

Grundsätzlich besteht die Idee darin, JavaScript bei einem Ereignis eines Formularelements (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: Ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt, und dieser String ist die Fehlermeldung, die dem Benutzer angezeigt wird.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahlenvalidierung

Das Postleitzahlenformat variiert von Land zu Land. Die meisten Länder erlauben nicht nur ein optionales Präfix mit dem Ländercode (wie `D-` in Deutschland oder `F-` in Frankreich oder der Schweiz), sondern einige Länder haben Postleitzahlen mit nur einer festen Anzahl von Ziffern; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die an bestimmten Positionen Buchstaben erlauben.

> [!NOTE]
> Dies ist keine umfassende Postleitzahlenvalidierungsbibliothek, sondern vielmehr eine Demonstration der Schlüsselkonzepte.

Als Beispiel fügen wir ein Skript hinzu, das die Constraint-Validierung für ein Formular überprüft:

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

Zuerst schreiben wir eine Funktion, die die Einschränkung selbst überprüft:

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

Dann verknüpfen wir sie mit dem **onchange**-Ereignis für das {{ HTMLElement("select") }} und dem **oninput**-Ereignis für das {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("country").onchange = checkPostalCode;
  document.getElementById("postal-code").oninput = checkPostalCode;
};
```

### Begrenzung der Dateigröße vor dem Hochladen

Eine weitere häufige Einschränkung ist die Begrenzung der Größe einer Datei, die hochgeladen werden soll. Das Überprüfen dieser auf der Clientseite, bevor die Datei an den Server übertragen wird, erfordert die Kombination der Constraint Validation API, insbesondere die `field.setCustomValidity()`-Methode, mit einer anderen JavaScript-API, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die `File.size()`-Methode, um ihre Größe zu bestimmen, vergleicht sie mit dem (fest codierten) Limit und ruft die Constraint API auf, um den Browser zu informieren, ob eine Verletzung vorliegt:

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

Schließlich verbinden wir die Methode mit dem korrekten Ereignis:

```js
window.onload = () => {
  document.getElementById("fs").onchange = checkFileSize;
};
```

## Visuelle Gestaltung der Constraint-Validierung

Neben dem Setzen von Einschränkungen möchten Webentwickler steuern, welche Nachrichten den Benutzern angezeigt werden und wie diese gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Aussehen von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen das Schreiben von Selektoren, die Formularelemente, die das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut haben oder nicht haben, ansprechen.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um `<input>`-Elemente darzustellen, deren Inhalt gemäß der Einstellung des Typattributs gültig bzw. ungültig ist. Diese Klassen ermöglichen es, gültige oder ungültige Formularelemente zu stylen, um es einfacher zu machen, Elemente zu identifizieren, die entweder korrekt oder inkorrekt formatiert sind.

### Kontrolle des Textes bei Einschränkungsverletzungen

Die folgenden Punkte können helfen, den Text bei einer Einschränkungsverletzung zu kontrollieren:

- Die `setCustomValidity(message)`-Methode auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlernachricht auf Feldset-Elementen verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Abschicken von Schaltflächen (erstellt entweder mit einem {{HTMLElement("button")}}-Element mit dem `submit`-Typ oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Typen von Schaltflächen nehmen nicht an der Constraint-Validierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das durch die `validity`-Eigenschaft der oben aufgeführten Elementtypen zurückgegeben wird. Sie repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum ein Wert eines Elements die Validierung nicht besteht, wenn er nicht gültig ist.
