---
title: Einschränkungsüberprüfung
slug: Web/HTML/Constraint_validation
l10n:
  sourceCommit: 0e715d271f55175d9ef2c7f3de582a6184e07219
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars selbst einfach ist, ist es schwieriger zu überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, und den Benutzer über das Problem zu informieren, kann Kopfschmerzen bereiten. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Einschränkungsüberprüfung_ hinzu, um die Überprüfung des Formularinhalts auf der Clientseite zu erleichtern. Grundlegende, übliche Einschränkungen können überprüft werden, ohne dass JavaScript erforderlich ist, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen siehe das [Tutorial zur Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Die HTML-Einschränkungsüberprüfung ersetzt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Auch wenn deutlich weniger ungültige Formularanfragen zu erwarten sind, können dennoch ungültige eingereicht werden, auf verschiedene Weise:
>
> - Durch Modifizierung des HTMLs über die Entwicklerwerkzeuge des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne das Formular zu nutzen.
> - Durch programmatisches Schreiben von Inhalten in das Formular (bestimmte Einschränkungsüberprüfungen werden _nur_ für Benutzereingaben ausgeführt und nicht, wenn Sie den Wert eines Formularfeldes mit JavaScript setzen).
>
> Daher sollten Sie Formulardaten immer auf der Serverseite validieren, im Einklang mit dem, was auf der Clientseite durchgeführt wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch die Wahl des semantisch am besten geeigneten Werts für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z.B. erzeugt die Wahl des Typs `email` automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf validierungsbezogenen Attributen, wodurch grundlegende Einschränkungen einfach beschrieben werden können, ohne dass JavaScript erforderlich ist.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut sind:

| Eingabetyp                                                      | Beschreibung der Einschränkung                                                                                                                                                    | Zugehörige Verletzung                                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Element/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert.        | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `benutzername@hostname.tld` hat, aber auch lokal wie `benutzername@hostname` sein kann. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |

Für beide dieser Eingabetypen können, wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut gesetzt ist, mehrere Werte als durch Kommas getrennte Liste gesetzt werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird die **Typ-Mismatch**-Einschränkungsverletzung ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Einschränkungsüberprüfung ausgeschlossen sind oder ein Bereinigungsalgorithmus fehlerhafte Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden die folgenden Attribute zur Beschreibung grundlegender Einschränkungen verwendet:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Unterstützte Eingabetypen</th>
      <th scope="col">Mögliche Werte</th>
      <th scope="col">Beschreibung der Einschränkung</th>
      <th scope="col">Zugehörige Verletzung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Attributes/pattern">pattern</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        Ein
        <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions"
          >JavaScript-Regular-Ausdruck</a
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
        <code><a href="/de/docs/Web/HTML/Attributes/min">min</a></code>
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
        <code><a href="/de/docs/Web/HTML/Attributes/max">max</a></code>
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
          ><a href="/de/docs/Web/HTML/Attributes/required">required</a></code
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
        <em>keine</em>, da es sich um ein Boolean-Attribut handelt: Seine Anwesenheit bedeutet
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
        Einschränkungsverletzung
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf den Literal <code>any</code> gesetzt ist, muss der Wert
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
        Einschränkungsverletzung
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
          ><a href="/de/docs/Web/HTML/Attributes/minlength"
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
        Die Anzahl der Zeichen (Codepunkte) darf den Wert des Attributs nicht unterschreiten,
        falls nicht leer. Alle Zeilenumbrüche werden auf ein einzelnes Zeichen (anstelle von CRLF-Paaren)
        für {{ HTMLElement("textarea") }} normalisiert.
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
          ><a href="/de/docs/Web/HTML/Attributes/maxlength"
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
        Einschränkungsverletzung
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Einschränkungsüberprüfung

Die Einschränkungsüberprüfung erfolgt über die Constraint Validation API entweder auf einem einzelnen Formularelement oder auf der Formular-Ebene, auf dem {{ HTMLElement("form") }}-Element selbst. Die Einschränkungsüberprüfung wird auf folgende Weise durchgeführt:

- Durch einen Aufruf der Methoden `checkValidity()` oder `reportValidity()` einer formularassoziierten DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur auf diesem Element evaluieren, sodass ein Skript diese Informationen abrufen kann. Die Methode `checkValidity()` gibt einen Boolean zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird typischerweise vom Benutzeragenten durchgeführt, um zu bestimmen, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, angewendet wird.) Im Gegensatz dazu meldet die Methode `reportValidity()` dem Benutzer alle Einschränkungsfehler.
- Durch einen Aufruf der Methoden `checkValidity()` oder `reportValidity()` auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch das Absenden des Formulars selbst.

Der Aufruf von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während der Aufruf von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Einschränkungen.
> - Der Aufruf der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Einschränkungsüberprüfung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einer Absende-Schaltfläche auf.
> - Die `minlength`- und `maxlength`-Einschränkungen werden nur bei benutzergenerierten Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, selbst wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen werden.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint API können komplexere Einschränkungen implementiert werden, z.B. Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen erfordern.

Grundsätzlich besteht die Idee darin, JavaScript bei einem Ereignis auf einem Formularfeld (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Überprüfung festzulegen: Ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt und dieser String die Fehlermeldung ist, die dem Benutzer angezeigt wird.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahl-Validierung

Das Format der Postleitzahl variiert von Land zu Land. Nicht nur, dass die meisten Länder eine optionale Präfix mit dem Ländercode erlauben (wie `D-` in Deutschland, `F-` in Frankreich oder der Schweiz), sondern einige Länder haben Postleitzahlen mit nur einer festen Anzahl von Ziffern; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die Buchstaben an bestimmten Positionen erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahl-Überprüfung, sondern eine Demonstration der Schlüsselkonzepte.

Als Beispiel fügen wir ein Skript zur Überprüfung der Einschränkungsüberprüfung für dieses einfache Formular hinzu:

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

Dann verbinden wir es mit dem **onchange**-Ereignis für das {{ HTMLElement("select") }} und dem **oninput**-Ereignis für das {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("country").onchange = checkPostalCode;
  document.getElementById("postal-code").oninput = checkPostalCode;
};
```

### Begrenzung der Dateigröße vor dem Hochladen

Eine weitere häufige Einschränkung ist die Begrenzung der Größe einer Datei, die hochgeladen werden soll. Um dies auf der Clientseite zu überprüfen, bevor die Datei an den Server übertragen wird, muss die Constraint Validation API mit einer anderen JavaScript-API kombiniert werden, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die Methode `File.size()`, um ihre Größe zu ermitteln, vergleicht sie mit dem (fest kodierten) Limit und ruft die Constraint API auf, um den Browser über eine Verletzung zu informieren:

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

## Visuelle Gestaltung der Einschränkungsüberprüfung

Neben dem Setzen von Einschränkungen möchten Webentwickler kontrollieren, welche Nachrichten den Benutzern angezeigt werden und wie sie gestaltet werden.

### Kontrolle des Aussehens von Elementen

Das Aussehen von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen das Schreiben von Selektoren, die Formular-Elemente ansprechen, die das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut haben, oder es nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid und :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) repräsentieren `<input>`-Elemente, deren Inhalt nach den Eingabeart-Einstellungen gültig ist bzw. nicht gültig ist. Diese Klassen ermöglichen es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um es einfacher zu machen, Elemente zu identifizieren, die entweder korrekt oder falsch formatiert sind.

### Kontrolle des Textes für Einschränkungsverletzungen

Die folgenden Elemente können helfen, den Text einer Einschränkungsverletzung zu steuern:

- Die Methode `setCustomValidity(message)` auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlermeldung auf Fieldset-Elementen verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Absende-Buttons (erstellt entweder mit einem {{HTMLElement("button")}} Element mit dem Typ `submit` oder einem `input`-Element mit Typ {{HTMLElement("input/submit", "submit")}}. Andere Arten von Tasten nehmen nicht an der Einschränkungsüberprüfung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das von der `gültigkeit`-Eigenschaft der oben genannten Elementtypen zurückgegeben wird. Es repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements nicht validiert wird, falls er nicht gültig ist.
