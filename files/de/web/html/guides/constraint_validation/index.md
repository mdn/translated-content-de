---
title: Verwendung von HTML-Formularvalidierung und der Constraint Validation API
short-title: Constraint validation
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markup des Formulars einfach ist, ist das Überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, schwieriger, und den Benutzer über das Problem zu informieren, kann Kopfschmerzen bereiten. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Constraint-Validierung_ hinzu, um die Arbeit der Überprüfung des Formularinhalts auf der Clientseite zu erleichtern. Grundlegende, übliche Einschränkungen können ohne JavaScript überprüft werden, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen siehe das [Formularvalidierungstutorial](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Constraint-Validierung entfernt nicht die Notwendigkeit für eine Validierung auf der _Serverseite_. Obwohl weit weniger ungültige Formularanforderungen zu erwarten sind, können ungültige dennoch auf viele Arten gesendet werden:
>
> - Durch Ändern von HTML über die Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch das programmgesteuerte Schreiben von Inhalten in das Formular (bestimmte Constraint-Validierungen werden _nur für Benutzereingaben_ ausgeführt und nicht, wenn Sie den Wert eines Formularfelds mit JavaScript festlegen).
>
> Daher sollten Sie Formulardaten immer auf der Serverseite validieren, konsistent mit dem, was auf der Clientseite getan wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch die Auswahl des am besten semantisch passenden Werts für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z.B. erzeugt die Auswahl des `email`-Typs automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch Setzen von Werten für validierungsbezogene Attribute, die es ermöglichen, grundlegende Einschränkungen ohne die Notwendigkeit von JavaScript zu beschreiben.

### Semantische Eingabetyps

Die inhärenten Einschränkungen für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut sind:

| Eingabetyp                                                                    | Beschreibung der Einschränkung                                                                                                                                                           | Zugehörige Verletzung                                                                   |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein, wie in der [URL Living Standard](https://url.spec.whatwg.org/) definiert.  | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Constraint-Verletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `benutzername@hostname.tld` hat, aber auch lokal wie `benutzername@hostname` sein kann.        | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Constraint-Verletzung |

Für beide Eingabetypen können, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut gesetzt ist, mehrere Werte als kommagetrennte Liste festgelegt werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird die **Type mismatch** Constraint-Verletzung ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Constraint-Validierung ausgeschlossen sind oder einen Bereinigungsalgorithmus haben, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zum oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

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
          >JavaScript Regular Expression</a
        >
        (kompiliert mit den {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}}, und
        {{jsxref("RegExp.multiline", "multiline")}} Flags <em>deaktiviert</em>)
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        Constraint-Verletzung
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
        Constraint-Verletzung
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
      <td rowspan="3">Der Wert muss kleiner oder gleich dem Wert sein.</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >
        Constraint-Verletzung
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
        <em>keine</em>, da es sich um ein Boolean-Attribut handelt: seine Anwesenheit bedeutet
        <em>true</em>, seine Abwesenheit bedeutet <em>false</em>
      </td>
      <td>Es muss ein Wert sein (wenn gesetzt).</td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
        Constraint-Verletzung
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Zahl von Tagen</td>
      <td rowspan="5">
        Sofern nicht explizit auf den Literal <code>any</code> gesetzt, muss der Wert
        <strong>min</strong> + ein ganzzahliges Vielfaches des Schritts sein.
      </td>
      <td rowspan="5">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
        Constraint-Verletzung
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
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganze Zahl für die Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht kleiner sein als der Wert
        des Attributs, wenn nicht leer. Alle neuen Zeilen sind auf ein einzelnes
        Zeichen normalisiert (im Gegensatz zu CRLF-Paaren) für
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
        Constraint-Verletzung
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
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganze Zahl für die Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf den Wert des
        Attributs nicht überschreiten.
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
        Constraint-Verletzung
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Constraint-Validierung

Die Constraint-Validierung wird entweder an einem einzelnen Formularelement oder auf Formularebene am {{ HTMLElement("form") }}-Element selbst über die Constraint Validation API durchgeführt. Die Validierung der Einschränkungen erfolgt auf folgende Weise:

- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode eines formularzugehörigen DOM-Interfaces, ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), was die Einschränkungen nur auf diesem Element evaluiert und es einem Skript ermöglicht, diese Informationen zu erhalten. Die `checkValidity()`-Methode gibt ein Boolean zurück, das angibt, ob der Wert des Elements seine Einschränkungen besteht. (Dies wird typischerweise vom Benutzeragenten durchgeführt, wenn er bestimmt, welcher der CSS-Pseudoklassen {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }} zutrifft.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer etwaige Constraint-Verletzungen.
- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf dem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface.
- Durch das Einreichen des Formulars selbst.

Der Aufruf von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während der Aufruf von `reportValidity()` oder das Einreichen des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Einschränkungen.
> - Der Aufruf der `submit()`-Methode auf dem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface löst keine Validierung der Einschränkung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einem Submit-Button auf.
> - Die `minlength`- und `maxlength`-Einschränkungen werden nur bei benutzereingebenden Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert festgelegt ist, selbst wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen wird.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit Hilfe von JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, z.B. Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen beinhalten.

Grundsätzlich besteht die Idee darin, JavaScript beim Auftreten eines bestimmten Ereignisses im Formularfeld (wie **onchange**) auszuführen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: Ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt und dieser String die Fehlermeldung ist, die dem Benutzer angezeigt werden soll.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahl-Validierung

Das Postleitzahlformat variiert von Land zu Land. Nicht nur erlauben die meisten Länder eine optionale Präfix mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich oder der Schweiz), sondern einige Länder haben Postleitzahlen mit nur einer festen Anzahl von Ziffern; andere wie das Vereinigte Königreich haben komplexere Strukturen, die Buchstaben an bestimmten Positionen erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahlenvalidierung, sondern vielmehr eine Demonstration der Schlüsselkonzepte.

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

### Begrenzung der Größe einer Datei vor dem Hochladen

Eine weitere häufige Einschränkung ist die Begrenzung der Größe einer hochzuladenden Datei. Um dies auf der Clientseite zu überprüfen, bevor die Datei an den Server übertragen wird, muss die Constraint Validation API, insbesondere die `field.setCustomValidity()`-Methode, mit einer anderen JavaScript API, hier der File API, kombiniert werden.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die `File.size()`-Methode, um ihre Größe zu ermitteln, vergleicht sie mit dem (hartcodierten) Limit und ruft die Constraint API auf, um den Browser zu informieren, ob eine Verletzung vorliegt:

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

Schließlich verknüpfen wir die Methode mit dem richtigen Ereignis:

```js
window.onload = () => {
  document.getElementById("fs").onchange = checkFileSize;
};
```

## Visuelles Styling der Constraint-Validierung

Neben der Festlegung von Einschränkungen möchten Webentwickler die angezeigten Nachrichten kontrollieren und wie sie gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Aussehen von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) erlauben das Schreiben von Selektoren, die Formular-Elemente mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut oder solche ohne dieses Attribut auswählen.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um \<input>-Elemente darzustellen, deren Inhalt gültig ist oder nicht, entsprechend der Typ-Einstellung des Eingabefeldes. Diese Klassen ermöglichen es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um es einfacher zu machen, Elemente zu identifizieren, die entweder korrekt oder inkorrekt formatiert sind.

### Kontrolle des Textes bei Constraint-Verletzungen

Folgende Punkte können helfen, den Text einer Constraint-Verletzung zu kontrollieren:

- Die `setCustomValidity(message)`-Methode auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Festlegen einer benutzerdefinierten Fehlermeldung auf Fieldset-Elementen hindert nicht daran, dass das Formular in den meisten Browsern übermittelt wird.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Submit-Buttons (erstellt entweder mit einem {{HTMLElement("button")}}-Element mit dem `submit`-Typ oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Typen von Schaltflächen nehmen nicht an der Constraint-Validierung teil).
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das durch die `validity`-Eigenschaft der oben aufgeführten Elementtypen zurückgegeben wird. Sie stellt verschiedene Gründe dar, warum ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum ein Wert eines Elements nicht gültig ist, falls er es nicht ist.
