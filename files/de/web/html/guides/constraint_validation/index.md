---
title: HTML-Formularvalidierung und die Constraint Validation API verwenden
short-title: Validierung von Einschränkungen
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: bce3c7c8ee532a9f4026ace7be8ac20deb71834a
---

Das Erstellen von Webformularen war schon immer eine komplexe Aufgabe. Das Formular selbst auszuzeichnen ist einfach. Schwieriger ist es, zu prüfen, ob jedes Feld einen gültigen und stimmigen Wert enthält. Auch die Nutzer über Probleme zu informieren, kann aufwendig sein. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Validierung von Einschränkungen_, die das Prüfen von Formularinhalten auf der Clientseite erleichtert. Einfache, übliche Einschränkungen lassen sich ohne JavaScript durch Attribute prüfen; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Eine grundlegende Einführung in diese Konzepte mit Beispielen finden Sie im [Tutorial zur Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Validierung von Einschränkungen ersetzt nicht die Validierung auf der _Serverseite_. Auch wenn deutlich weniger ungültige Formularanfragen zu erwarten sind, können solche Anfragen weiterhin auf verschiedene Weise gesendet werden:
>
> - Durch Ändern des HTML-Codes mit den Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage, ohne das Formular zu verwenden.
> - Durch programmgesteuertes Einfügen von Inhalten in das Formular (bestimmte Validierungen von Einschränkungen werden _nur bei Nutzereingaben ausgeführt_, nicht aber, wenn Sie den Wert eines Formularfelds mit JavaScript setzen).
>
> Validieren Sie Formulardaten daher immer auch auf der Serverseite, und zwar nach denselben Regeln wie auf der Clientseite.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten festgelegt:

- Durch die Wahl des semantisch passendsten Werts für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) des {{ HTMLElement("input") }}-Elements. Beispielsweise legt der Typ `email` automatisch eine Einschränkung fest, die prüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen validierungsbezogener Attribute. Damit lassen sich grundlegende Einschränkungen ohne JavaScript beschreiben.

### Semantische Eingabetypen

Für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) gelten folgende intrinsische Einschränkungen:

| Eingabetyp                                                                 | Beschreibung der Einschränkung                                                                                                                                              | Zugehörige Verletzung                                                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) gemäß dem [URL Living Standard](https://url.spec.whatwg.org/) sein.     | Verletzung der Einschränkung **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein. Sie hat im Allgemeinen das Format `username@hostname.tld`, kann aber auch lokal sein, etwa `username@hostname`. | Verletzung der Einschränkung **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** |

Wenn beim Eingabetyp `email` das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) gesetzt ist, können mehrere Werte als kommagetrennte Liste angegeben werden. Erfüllt ein Wert in der Liste die hier beschriebene Bedingung nicht, wird die Einschränkung **Type mismatch** verletzt.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben: Manche sind von der Validierung von Einschränkungen ausgeschlossen, andere verwenden einen Bereinigungsalgorithmus, der ungültige Werte in einen gültigen Standardwert umwandelt.

### Validierungsbezogene Attribute

Neben dem oben beschriebenen Attribut `type` werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

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
          >regulärer JavaScript-Ausdruck</a
        >
        (kompiliert mit <em>deaktivierten</em> Flags {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und
        {{jsxref("RegExp.multiline", "multiline")}})
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        Verletzung der Einschränkung
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss größer oder gleich dem Wert des Attributs sein.</td>
      <td rowspan="3">
        Verletzung der Einschränkung
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeUnderflow"
              >rangeUnderflow</a
            ></code
          ></strong
        >
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
      <td>Ein gültiges Datum und eine gültige Uhrzeit</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss kleiner oder gleich dem Wert des Attributs sein.</td>
      <td rowspan="3">
        Verletzung der Einschränkung
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >
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
      <td>Ein gültiges Datum und eine gültige Uhrzeit</td>
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
        <em>Keine</em>, da es sich um ein boolesches Attribut handelt: Ist es vorhanden,
        bedeutet dies <em>true</em>, andernfalls <em>false</em>.
      </td>
      <td>Wenn das Attribut gesetzt ist, muss ein Wert vorhanden sein.</td>
      <td>
        Verletzung der Einschränkung
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern die Schrittweite nicht auf <code>any</code> gesetzt ist, muss der Wert
        <strong>min</strong> plus einem ganzzahligen Vielfachen der Schrittweite entsprechen.
      </td>
      <td rowspan="5">
        Verletzung der Einschränkung
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
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
        <code>tel</code>, <code>email</code>, <code>password</code>; außerdem beim
        {{ HTMLElement("textarea") }}-Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Wenn der Wert nicht leer ist, darf die Anzahl der Zeichen (Codepoints) den
        Wert des Attributs nicht unterschreiten. Bei {{ HTMLElement("textarea") }}
        werden alle Zeilenumbrüche zu einem einzelnen Zeichen normalisiert
        (anstelle eines CRLF-Paars).
      </td>
      <td>
        Verletzung der Einschränkung
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
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
        {{ HTMLElement("textarea") }}-Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepoints) darf den Wert des Attributs nicht
        überschreiten.
      </td>
      <td>
        Verletzung der Einschränkung
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
      </td>
    </tr>
  </tbody>
</table>

## Ablauf der Validierung von Einschränkungen

Die Validierung von Einschränkungen erfolgt über die Constraint Validation API, entweder für ein einzelnes Formularelement oder für das gesamte Formular über das {{ HTMLElement("form") }}-Element. Sie kann auf folgende Weise ausgeführt werden:

- Durch Aufrufen der Methode `checkValidity()` oder `reportValidity()` einer formularbezogenen DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)). Dabei werden nur die Einschränkungen dieses Elements geprüft, sodass ein Skript das Ergebnis abrufen kann. Die Methode `checkValidity()` gibt einen booleschen Wert zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies geschieht üblicherweise durch den User-Agent, wenn er bestimmt, welche der CSS-Pseudoklassen {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }} zutrifft.) Die Methode `reportValidity()` hingegen meldet Nutzern alle Verletzungen von Einschränkungen.
- Durch Aufrufen der Methode `checkValidity()` oder `reportValidity()` auf der Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement).
- Durch Absenden des Formulars.

Das Aufrufen von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet. Das Aufrufen von `reportValidity()` oder das Absenden des Formulars gilt dagegen als _interaktive_ Validierung.

> [!NOTE]
>
> - Wenn das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) beim {{ HTMLElement("form") }}-Element gesetzt ist, findet keine interaktive Validierung der Einschränkungen statt.
> - Das Aufrufen der Methode `submit()` auf der Schnittstelle [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) löst keine Validierung der Einschränkungen aus. Die Methode sendet die Formulardaten also auch dann an den Server, wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die Methode `click()` einer Schaltfläche zum Absenden auf.
> - Die Einschränkungen `minlength` und `maxlength` werden nur bei Nutzereingaben geprüft. Wird ein Wert programmgesteuert gesetzt, werden sie auch dann nicht geprüft, wenn `checkValidity()` oder `reportValidity()` ausdrücklich aufgerufen wird.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint Validation API lassen sich komplexere Einschränkungen umsetzen, beispielsweise solche, die mehrere Felder kombinieren oder komplexe Berechnungen erfordern.

Das Grundprinzip besteht darin, bei einem Ereignis eines Formularfelds (etwa **onchange**) JavaScript auszuführen, um zu prüfen, ob die Einschränkung verletzt ist. Anschließend wird das Ergebnis der Validierung mit der Methode `field.setCustomValidity()` festgelegt: Eine leere Zeichenfolge bedeutet, dass die Einschränkung erfüllt ist. Jede andere Zeichenfolge bedeutet, dass ein Fehler vorliegt, und dient als Fehlermeldung für die Nutzer.

### Einschränkung über mehrere Felder: Postleitzahlen validieren

Das Format von Postleitzahlen unterscheidet sich von Land zu Land. In vielen Ländern ist ein optionales Präfix mit dem Ländercode zulässig (etwa `D-` in Deutschland, `F-` in Frankreich und `CH-` in der Schweiz). In manchen Ländern bestehen Postleitzahlen nur aus einer festen Anzahl von Ziffern. Andere Länder, etwa das Vereinigte Königreich, verwenden komplexere Formate, bei denen an bestimmten Stellen Buchstaben erlaubt sind.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Validierung von Postleitzahlen, sondern eine Demonstration der wichtigsten Konzepte.

Als Beispiel fügen wir einem Formular ein Skript hinzu, das die Einschränkungen prüft:

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

Dadurch wird das folgende Formular angezeigt:

{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}

Zunächst schreiben wir eine Funktion, die die Einschränkung selbst prüft:

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

Anschließend verknüpfen wir sie mit dem Ereignis `change` für das {{ HTMLElement("select") }}-Element und dem Ereignis `input` für das {{ HTMLElement("input") }}-Element:

```js
countrySelect.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);
```

### Dateigröße vor dem Hochladen begrenzen

Eine weitere häufige Einschränkung ist die maximale Größe einer hochzuladenden Datei. Um diese vor der Übertragung an den Server auf der Clientseite zu prüfen, muss die Constraint Validation API – insbesondere die Methode `field.setCustomValidity()` – mit einer weiteren JavaScript-API kombiniert werden, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, ermittelt ihre Größe mit der Methode `File.size()`, vergleicht sie mit dem fest im Code hinterlegten Grenzwert und informiert den Browser über die Constraint Validation API, falls die Einschränkung verletzt ist:

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

Zum Schluss verknüpfen wir die Methode mit dem passenden Ereignis:

```js
fs.addEventListener("change", checkFileSize);
```

## Visuelle Gestaltung der Validierung von Einschränkungen

Neben dem Festlegen von Einschränkungen möchten Webentwickler steuern, welche Meldungen Nutzern angezeigt werden und wie diese gestaltet sind.

### Darstellung von Elementen steuern

Die Darstellung von Elementen lässt sich mit CSS-Pseudoklassen steuern.

#### CSS-Pseudoklassen :required und :optional

Mit den [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(':required')}} und {{cssxref(':optional')}} lassen sich Selektoren für Formularelemente schreiben, die das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) haben beziehungsweise nicht haben.

#### CSS-Pseudoklasse :placeholder-shown

Siehe {{cssxref(':placeholder-shown')}}.

#### CSS-Pseudoklassen :valid und :invalid

Die [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} kennzeichnen \<input>-Elemente, deren Inhalt gemäß dem festgelegten Eingabetyp gültig beziehungsweise ungültig ist. Mit diesen Klassen können gültige und ungültige Formularelemente unterschiedlich gestaltet werden, damit korrekt und falsch formatierte Eingaben leichter zu erkennen sind.

### Text von Meldungen zu verletzten Einschränkungen steuern

Mit den folgenden Möglichkeiten lässt sich der Text einer Meldung zu einer verletzten Einschränkung steuern:

- Die Methode `setCustomValidity(message)` bei folgenden Elementen:
  - {{HTMLElement("fieldset")}}. Hinweis: Das Festlegen einer benutzerdefinierten Validierungsmeldung für fieldset-Elemente verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Schaltflächen zum Absenden (erstellt entweder mit einem {{HTMLElement("button")}}-Element vom Typ `submit` oder einem `input`-Element vom Typ {{HTMLElement("input/submit", "submit")}}). Andere Schaltflächentypen nehmen nicht an der Validierung von Einschränkungen teil.
  - {{HTMLElement("textarea")}}

- Die Schnittstelle [`ValidityState`](/de/docs/Web/API/ValidityState) beschreibt das Objekt, das die Eigenschaft `validity` der oben aufgeführten Elementtypen zurückgibt. Sie bildet die verschiedenen Gründe ab, aus denen ein eingegebener Wert ungültig sein kann. Dadurch lässt sich nachvollziehen, warum der Wert eines Elements die Validierung nicht besteht.
