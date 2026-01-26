---
title: Verwendung der HTML-Formularvalidierung und der Constraint Validation API
short-title: Constraint validation
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: 6f889a782a6663e055bbfaf29a4b0be895866b9d
---

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars selbst einfach ist, ist es schwieriger, zu überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat. Und den Benutzer über das Problem zu informieren, kann Kopfschmerzen bereiten. [HTML5](<(/de/docs/Glossary/HTML5)>) führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Constraint-Validierung_ hinzu, um die Prüfung des Formularinhalts auf der Client-Seite zu erleichtern. Grundlegende, übliche Einschränkungen können ohne JavaScript überprüft werden, indem neue Attribute festgelegt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte, mit Beispielen, siehe das [Formularvalidierungs-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Constraint-Validierung beseitigt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Auch wenn weit weniger ungültige Formularanfragen zu erwarten sind, können ungültige dennoch auf viele Arten gesendet werden:
>
> - Durch Änderung von HTML über die Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch programmgesteuertes Schreiben von Inhalten in das Formular (bestimmte Constraint-Validierungen werden _nur für Benutzereingaben ausgeführt_ und nicht, wenn Sie den Wert eines Formularfeldes mit JavaScript setzen).
>
> Daher sollten Sie Formulardaten immer auf der Server-Seite validieren, konsistent mit dem, was auf der Client-Seite gemacht wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch die Wahl des semantisch passendsten Werts für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z.B. erzeugt die Wahl des `email`-Typs automatisch eine Einschränkung, die prüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf validierungsbezogene Attribute, wodurch grundlegende Einschränkungen ohne die Notwendigkeit von JavaScript beschrieben werden können.

### Semantische Input-Typen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut sind:

| Eingabetyp                                                                 | Beschreibung der Einschränkung                                                                                                                                                  | Zugehöriger Verstoß                                                                   |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverstoß |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die allgemein das Format `username@hostname.tld` hat, aber kann auch lokal wie `username@hostname` sein.            | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverstoß |

Für den `email`-Eingabetyp, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut gesetzt ist, können mehrere Werte als kommagetrennte Liste gesetzt werden. Wenn irgendein Wert in der Liste die hier beschriebene Bedingung nicht erfüllt, wird der **Type mismatch** Einschränkungsverstoß ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Constraint-Validierung ausgeschlossen oder einen Bereinigungsalgorithmus haben, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Eingabetypen, die das Attribut unterstützen</th>
      <th scope="col">Mögliche Werte</th>
      <th scope="col">Beschreibung der Einschränkung</th>
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
          >JavaScript-Regulärer Ausdruck</a
        >
        (kompiliert mit den {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}}, und
        {{jsxref("RegExp.multiline", "multiline")}} Flags <em>deaktiviert</em>)
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        Einschränkungsverstoß
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
        Einschränkungsverstoß
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
        Einschränkungsverstoß
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
        <code>file</code>; auch bei den {{ HTMLElement("select") }} und
        {{ HTMLElement("textarea") }} Elementen
      </td>
      <td>
        <em>keines</em> da es ein Boolean-Attribut ist: seine Anwesenheit bedeutet
        <em>wahr</em>, seine Abwesenheit bedeutet <em>falsch</em>
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
        Einschränkungsverstoß
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf den <code>any</code> Literal gesetzt wird, muss der Wert
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
        Einschränkungsverstoß
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
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht kleiner als der Wert des
        Attributs sein, wenn nicht leer. Alle Zeilenumbrüche werden zu einem
        einzelnen Zeichen normalisiert (im Gegensatz zu CRLF-Paaren) für
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
        Einschränkungsverstoß
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
      <td>Eine ganzzahlige Länge</td>
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
        Einschränkungsverstoß
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Constraint-Validierung

Die Constraint-Validierung erfolgt über die Constraint Validation API entweder auf einem einzelnen Formularelement oder auf der Formular-Ebene, auf dem {{ HTMLElement("form") }} selbst. Die Constraint-Validierung erfolgt auf folgende Weise:

- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode einer formular-assoziierten DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur auf diesem Element überprüft und einem Skript ermöglicht, diese Information zu erhalten. Die `checkValidity()`-Methode gibt einen Boolean-Wert zurück, der angibt, ob der Wert des Elements seine Einschränkungen besteht. (Dies wird typischerweise durch den Benutzagenten getan, um zu bestimmen, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, angewendet wird.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer alle Einschränkungsverstöße.
- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch das Absenden des Formulars selbst.

Der Aufruf von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während der Aufruf von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, findet keine interaktive Validierung der Einschränkungen statt.
> - Der Aufruf der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Constraint-Validierung aus. Mit anderen Worten: Diese Methode sendet die Formulardaten an den Server, selbst wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einem Submit-Button auf.
> - Die Einschränkungen `minlength` und `maxlength` werden nur bei benutzerdefinierten Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, selbst wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen wird.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, z.B. Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen beinhalten.

Grundsätzlich besteht die Idee darin, JavaScript bei einem bestimmten Formularfeldevent (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt ist, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: Ein leerer String bedeutet, die Einschränkung ist erfüllt, und jeder andere String bedeutet, es liegt ein Fehler vor, und dieser String ist die Fehlermeldung, die dem Benutzer angezeigt wird.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahlvalidierung

Das Format der Postleitzahl variiert von Land zu Land. Viele Länder erlauben eine optionale Präfix mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich und `CH-` in der Schweiz). Einige Länder verwenden nur eine feste Anzahl von Ziffern in Postleitzahlen, während andere, wie das Vereinigte Königreich, komplexere Formate haben, die an bestimmten Positionen Buchstaben erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahlvalidierung, sondern eine Demonstration der Schlüsselkonzepte.

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

Dann verbinden wir es mit dem `change`-Event für das {{ HTMLElement("select") }} und dem `input`-Event für das {{ HTMLElement("input") }}:

```js
countrySelect.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);
```

### Begrenzung der Dateigröße vor dem Upload

Eine weitere häufige Einschränkung besteht darin, die Größe einer Datei zu beschränken, die hochgeladen werden soll. Um dies auf der Clientseite zu überprüfen, bevor die Datei an den Server übertragen wird, muss die Constraint Validation API mit einer anderen JavaScript-API kombiniert werden, hier die File API, insbesondere die Methode `field.setCustomValidity()`.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die Methode `File.size()`, um ihre Größe zu ermitteln, vergleicht sie mit dem (fest kodierten) Limit und ruft die Constraint API auf, um den Browser zu informieren, ob ein Verstoß vorliegt:

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

Schließlich verknüpfen wir die Methode mit dem richtigen Event:

```js
fs.addEventListener("change", checkFileSize);
```

## Visuelles Styling der Constraint-Validierung

Abgesehen vom Festlegen von Einschränkungen möchten Webentwickler kontrollieren, welche Nachrichten den Benutzern angezeigt werden und wie sie gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Aussehen von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) erlauben es, Selektoren zu schreiben, die Formularelemente abgleichen, die das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut haben oder nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentieren `<input>`-Elemente, deren Inhalt gemäß der Typeneinstellung des Inputs entweder validiert oder nicht validiert wird. Diese Klassen erlauben es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um es einfacher zu machen, Elemente zu identifizieren, die entweder korrekt oder inkorrekt formatiert sind.

### Kontrolle des Textes bei Verletzung der Einschränkungen

Die folgenden Punkte können helfen, den Text bei einer Verletzung der Einschränkung zu kontrollieren:

- Die `setCustomValidity(message)`-Methode auf den folgenden Elementen:
  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlermeldung auf fieldset-Elementen verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Senden-Buttons (erstellt entweder mit einem {{HTMLElement("button")}}-Element mit dem `submit`-Typ oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Button-Typen nehmen nicht an der Constraint-Validierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das von der `validity`-Eigenschaft der oben aufgelisteten Elementtypen zurückgegeben wird. Es repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements nicht validiert, wenn er nicht gültig ist.
