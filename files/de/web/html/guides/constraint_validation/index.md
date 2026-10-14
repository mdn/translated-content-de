---
title: HTML-Formularvalidierung und die Constraint Validation API verwenden
short-title: Constraint Validation
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das Erstellen von Webformularen war schon immer eine komplexe Aufgabe. Das Formular selbst mit Markup zu versehen ist einfach. Schwieriger ist es, zu prüfen, ob jedes Feld einen gültigen und stimmigen Wert enthält. Auch die Nutzer über ein Problem zu informieren, kann aufwendig sein. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: neue semantische Typen für das Element {{ HTMLElement("input") }} und die _Constraint Validation_, die die Prüfung von Formularinhalten auf der Client-Seite erleichtert. Grundlegende, gängige Bedingungen lassen sich ohne JavaScript prüfen, indem neue Attribute gesetzt werden. Komplexere Bedingungen können mit der Constraint Validation API geprüft werden.

Eine grundlegende Einführung in diese Konzepte mit Beispielen finden Sie im [Tutorial zur Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Constraint-Validation macht eine Validierung auf der _Server-Seite_ nicht überflüssig. Auch wenn mit deutlich weniger ungültigen Formularanfragen zu rechnen ist, können solche Anfragen weiterhin auf verschiedene Weise gesendet werden:
>
> - Durch Ändern des HTML mit den Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch programmgesteuertes Eintragen von Inhalten in das Formular (bestimmte Validierungsprüfungen werden _nur bei Nutzereingaben ausgeführt_, nicht aber, wenn Sie den Wert eines Formularfelds mit JavaScript setzen).
>
> Validieren Sie Formulardaten daher immer auch auf der Server-Seite, und zwar entsprechend der Validierung auf der Client-Seite.

## Intrinsische und grundlegende Bedingungen

In HTML werden grundlegende Bedingungen auf zwei Arten festgelegt:

- Durch Auswahl des semantisch am besten geeigneten Werts für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) des Elements {{ HTMLElement("input") }}. Die Auswahl des Typs `email` legt beispielsweise automatisch eine Bedingung fest, die prüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch Setzen von Werten für validierungsbezogene Attribute. So lassen sich grundlegende Bedingungen ohne JavaScript beschreiben.

### Semantische Input-Typen

Für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) gelten folgende intrinsische Bedingungen:

| Input-Typ                                                                  | Beschreibung der Bedingung                                                                                                                                                    | Zugehöriger Validierungsfehler                                                     |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) gemäß dem [URL Living Standard](https://url.spec.whatwg.org/) sein.       | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)**-Validierungsfehler |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein. Diese hat im Allgemeinen das Format `username@hostname.tld`, kann aber auch lokal sein, etwa `username@hostname`. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)**-Validierungsfehler |

Wenn beim Input-Typ `email` das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) gesetzt ist, können mehrere Werte als kommagetrennte Liste angegeben werden. Erfüllt einer der Werte in der Liste die hier beschriebene Bedingung nicht, wird der Validierungsfehler **Type mismatch** ausgelöst.

Beachten Sie, dass die meisten Input-Typen keine intrinsischen Bedingungen haben: Einige sind von der Constraint Validation ausgeschlossen, andere verfügen über einen Bereinigungsalgorithmus, der ungültige Werte in einen gültigen Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zum oben beschriebenen Attribut `type` werden die folgenden Attribute verwendet, um grundlegende Bedingungen zu beschreiben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Input-Typen, die das Attribut unterstützen</th>
      <th scope="col">Mögliche Werte</th>
      <th scope="col">Beschreibung der Bedingung</th>
      <th scope="col">Zugehöriger Validierungsfehler</th>
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
          >regulärer JavaScript-Ausdruck</a
        >
        (kompiliert mit <em>deaktivierten</em> Flags {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und
        {{jsxref("RegExp.multiline", "multiline")}})
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >-Validierungsfehler
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der eingegebene Wert muss größer oder gleich dem Attributwert sein.</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeUnderflow"
              >rangeUnderflow</a
            ></code
          ></strong
        >-Validierungsfehler
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
      <td>Ein gültiges Datum mit Uhrzeit</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der eingegebene Wert muss kleiner oder gleich dem Attributwert sein.</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >-Validierungsfehler
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
      <td>Ein gültiges Datum mit Uhrzeit</td>
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
        <code>file</code>; außerdem bei den Elementen {{ HTMLElement("select") }} und
        {{ HTMLElement("textarea") }}
      </td>
      <td>
        <em>Keiner</em>, da es sich um ein boolesches Attribut handelt: Ist es vorhanden, bedeutet dies
        <em>true</em>, andernfalls <em>false</em>.
      </td>
      <td>Wenn das Attribut gesetzt ist, muss ein Wert vorhanden sein.</td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >-Validierungsfehler
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganzzahlige Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern die Schrittweite nicht auf das Literal <code>any</code> gesetzt ist,
        muss der Wert <strong>min</strong> plus einem ganzzahligen Vielfachen der Schrittweite entsprechen.
      </td>
      <td rowspan="5">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >-Validierungsfehler
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Eine ganzzahlige Anzahl von Monaten</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>Eine ganzzahlige Anzahl von Wochen</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Eine ganzzahlige Anzahl von Sekunden</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine Ganzzahl</td>
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
        <code>tel</code>, <code>email</code>, <code>password</code>; außerdem beim
        Element {{ HTMLElement("textarea") }}
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Wenn der Wert nicht leer ist, darf die Anzahl der Zeichen (Codepunkte) nicht
        kleiner als der Attributwert sein. Bei {{ HTMLElement("textarea") }} werden
        alle Zeilenumbrüche zu einem einzelnen Zeichen normalisiert
        (statt zu CRLF-Paaren).
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >-Validierungsfehler
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
        <code>tel</code>, <code>email</code>, <code>password</code>; außerdem beim
        Element {{ HTMLElement("textarea") }}
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf den Attributwert nicht überschreiten.
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >-Validierungsfehler
      </td>
    </tr>
  </tbody>
</table>

## Ablauf der Constraint Validation

Die Constraint Validation wird mithilfe der Constraint Validation API entweder für ein einzelnes Formularelement oder für das gesamte Formular über das Element {{ HTMLElement("form") }} ausgeführt. Dafür gibt es folgende Möglichkeiten:

- Durch Aufruf der Methode `checkValidity()` oder `reportValidity()` einer formularbezogenen DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)). Dabei werden nur die Bedingungen für dieses Element geprüft, sodass ein Skript das Ergebnis abrufen kann. Die Methode `checkValidity()` gibt einen booleschen Wert zurück, der angibt, ob der Wert des Elements seine Bedingungen erfüllt. (Dies geschieht normalerweise durch den User-Agent, wenn er bestimmt, welche der CSS-Pseudoklassen {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }} zutrifft.) Die Methode `reportValidity()` hingegen meldet den Nutzern Verstöße gegen die Bedingungen.
- Durch Aufruf der Methode `checkValidity()` oder `reportValidity()` der Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement).
- Durch Absenden des Formulars.

Der Aufruf von `checkValidity()` wird als _statische_ Validierung der Bedingungen bezeichnet. Der Aufruf von `reportValidity()` oder das Absenden des Formulars wird als _interaktive_ Validierung bezeichnet.

> [!NOTE]
>
> - Wenn das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) für das Element {{ HTMLElement("form") }} gesetzt ist, findet keine interaktive Validierung der Bedingungen statt.
> - Ein Aufruf der Methode `submit()` der Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) löst keine Constraint Validation aus. Anders ausgedrückt: Diese Methode sendet die Formulardaten auch dann an den Server, wenn sie die Bedingungen nicht erfüllen. Rufen Sie stattdessen die Methode `click()` auf einem Submit-Button auf.
> - Die Bedingungen `minlength` und `maxlength` werden nur bei Nutzereingaben geprüft. Wird ein Wert programmgesteuert gesetzt, findet die Prüfung auch dann nicht statt, wenn `checkValidity()` oder `reportValidity()` ausdrücklich aufgerufen wird.

## Komplexe Bedingungen mit der Constraint Validation API

Mit JavaScript und der Constraint Validation API können komplexere Bedingungen implementiert werden, beispielsweise Bedingungen, die mehrere Felder miteinander verknüpfen oder komplexe Berechnungen erfordern.

Grundsätzlich wird bei einem Ereignis eines Formularfelds (etwa **onchange**) JavaScript ausgeführt, um zu bestimmen, ob eine Bedingung verletzt ist. Anschließend wird mit der Methode `field.setCustomValidity()` das Ergebnis der Validierung festgelegt: Ein leerer String bedeutet, dass die Bedingung erfüllt ist. Jeder andere String bedeutet, dass ein Fehler vorliegt, und dient als Fehlermeldung für die Nutzer.

### Bedingung für mehrere Felder: Postleitzahlvalidierung

Das Format von Postleitzahlen unterscheidet sich von Land zu Land. In vielen Ländern ist ein optionales Präfix mit dem Ländercode zulässig (etwa `D-` in Deutschland, `F-` in Frankreich und `CH-` in der Schweiz). In manchen Ländern bestehen Postleitzahlen nur aus einer festen Anzahl von Ziffern. Andere Länder wie das Vereinigte Königreich verwenden komplexere Formate, bei denen an bestimmten Stellen Buchstaben zulässig sind.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahlvalidierung, sondern eine Veranschaulichung der grundlegenden Konzepte.

Als Beispiel fügen wir einem Formular ein Skript hinzu, das die Bedingungen prüft:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Dadurch wird das folgende Formular angezeigt:

{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}

Zuerst schreiben wir eine Funktion, die die Bedingung selbst prüft:

```js
const countrySelect = document.getElementById("country");
const postalCodeField = document.getElementById("postal-code");

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
  const country = countrySelect.value;

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

Anschließend verknüpfen wir sie mit dem Ereignis `change` für {{ HTMLElement("select") }} und dem Ereignis `input` für {{ HTMLElement("input") }}:

```js
countrySelect.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);
```

### Dateigröße vor dem Upload begrenzen

Eine weitere häufige Bedingung ist die Begrenzung der Größe einer hochzuladenden Datei. Um dies auf der Client-Seite zu prüfen, bevor die Datei an den Server übertragen wird, muss die Constraint Validation API – insbesondere die Methode `field.setCustomValidity()` – mit einer weiteren JavaScript-API kombiniert werden, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Damit wird Folgendes angezeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, ermittelt ihre Größe mit der Methode `File.size()`, vergleicht sie mit dem fest codierten Grenzwert und teilt dem Browser über die Constraint Validation API mit, ob die Bedingung verletzt ist:

```js
const fs = document.getElementById("fs");

function checkFileSize() {
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

Abschließend verknüpfen wir die Methode mit dem passenden Ereignis:

```js
fs.addEventListener("change", checkFileSize);
```

## Visuelle Gestaltung der Constraint Validation

Webentwickler möchten nicht nur Bedingungen festlegen, sondern auch steuern, welche Meldungen den Nutzern angezeigt werden und wie diese gestaltet sind.

### Darstellung von Elementen steuern

Die Darstellung von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### CSS-Pseudoklassen :required und :optional

Mit den [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(':required')}} und {{cssxref(':optional')}} lassen sich Selektoren schreiben, die Formularelemente mit beziehungsweise ohne das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) auswählen.

#### CSS-Pseudoklasse :placeholder-shown

Siehe {{cssxref(':placeholder-shown')}}.

#### CSS-Pseudoklassen :valid und :invalid

Die [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} kennzeichnen \<input>-Elemente, deren Inhalt entsprechend dem eingestellten Input-Typ gültig beziehungsweise ungültig ist. Mit diesen Klassen lassen sich gültige und ungültige Formularelemente gestalten, damit korrekt und falsch formatierte Eingaben leichter zu erkennen sind.

### Text von Validierungsfehlermeldungen steuern

Die folgenden Möglichkeiten helfen dabei, den Text einer Validierungsfehlermeldung zu steuern:

- Die Methode `setCustomValidity(message)` für die folgenden Elemente:
  - {{HTMLElement("fieldset")}}. Hinweis: Das Festlegen einer benutzerdefinierten Validierungsfehlermeldung für fieldset-Elemente verhindert in den meisten Browsern nicht, dass das Formular abgesendet wird.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Submit-Buttons (erstellt entweder mit einem Element {{HTMLElement("button")}} vom Typ `submit` oder mit einem `input`-Element vom Typ {{HTMLElement("input/submit", "submit")}}). Andere Button-Typen nehmen nicht an der Constraint Validation teil.
  - {{HTMLElement("textarea")}}

- Die Schnittstelle [`ValidityState`](/de/docs/Web/API/ValidityState) beschreibt das Objekt, das von der Eigenschaft `validity` der oben aufgeführten Elementtypen zurückgegeben wird. Sie bildet verschiedene Gründe ab, aus denen ein eingegebener Wert ungültig sein kann. So lässt sich nachvollziehen, warum der Wert eines Elements die Validierung nicht besteht.
