---
title: Einschränkungen bei Validierung
slug: Web/HTML/Constraint_validation
l10n:
  sourceCommit: 4d3605197ea5c6407aacca2a80cc27a398f04fc8
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markup des Formulars selbst einfach ist, ist die Überprüfung, ob jedes Feld einen gültigen und kohärenten Wert hat, schwieriger, und die Benutzer über das Problem zu informieren, kann zu Kopfschmerzen führen. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Einschränkungsvalidierung_ hinzu, um die Überprüfung der Formularinhalte clientseitig zu erleichtern. Grundlegende, übliche Einschränkungen können ohne JavaScript überprüft werden, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen siehe das [Formularvalidierungstutorial](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Die HTML-Einschränkungsvalidierung ersetzt nicht die Notwendigkeit einer Validierung _serverseitig_. Selbst wenn viel weniger ungültige Formulareingaben erwartet werden, können ungültige dennoch auf verschiedenen Wegen gesendet werden:
>
> - Durch das Ändern von HTML über die Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne das Formular zu verwenden.
> - Durch programmatisches Schreiben von Inhalten in das Formular (bestimmte Einschränkungsvalidierungen werden _nur bei_ Benutzereingaben durchgeführt und nicht, wenn Sie den Wert eines Formularfeldes mit JavaScript setzen).
>
> Daher sollten Sie Formulardaten immer serverseitig validieren, übereinstimmend mit dem, was clientseitig gemacht wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch die Wahl des semantisch passendsten Wertes für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z. B. erzeugt die Wahl des Typs `email` automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf validierungsbezogenen Attributen, wodurch grundlegende Einschränkungen beschrieben werden können, ohne dass JavaScript benötigt wird.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut sind:

| Eingabetyp                                                      | Beschreibung der Einschränkung                                                                                                                                                 | Zugehöriger Verstoß                                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Element/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein, wie in der [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverstoß |
| [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die in der Regel das Format `nutzername@hostname.tld` hat, aber auch lokal wie `nutzername@hostname` sein kann.    | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverstoß |

Für beide dieser Eingabetypen, wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut gesetzt ist, können mehrere Werte als kommagetrennte Liste gesetzt werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird der **Type mismatch** Einschränkungsverstoß ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Einschränkungsvalidierung ausgeschlossen sind oder einen Reinigungsalgorithmus haben, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut, werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

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
          >JavaScript-Regulärer Ausdruck</a
        >
        (kompiliert mit den {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}}, und
        {{jsxref("RegExp.multiline", "multiline")}}-Flags <em>deaktiviert</em>)
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
        <code><a href="/de/docs/Web/HTML/Attributes/max">max</a></code>
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
          ><a href="/de/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>,
        <code>date</code>, <code>datetime-local</code>,
        <code>month</code>, <code>week</code>, <code>time</code>,
        <code>number</code>, <code>checkbox</code>, <code>radio</code>,
        <code>file</code>; auch für die {{ HTMLElement("select") }} und
        {{ HTMLElement("textarea") }} Elemente
      </td>
      <td>
        <em>kein</em> da es ein Boolean-Attribut ist: seine Anwesenheit bedeutet
        <em>true</em>, seine Abwesenheit bedeutet <em>false</em>
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
        <code><a href="/de/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Zahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf den Wert <code>any</code> gesetzt ist, muss
        der Wert <strong>min</strong> + ein ganzzahliges Vielfaches des Schritts
        sein.
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
          ><a href="/de/docs/Web/HTML/Attributes/minlength"
            >minlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>; auch für das
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganze Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht kleiner sein als der Wert
        des Attributs, wenn nicht leer. Alle Zeilenumbrüche werden normalisiert
        auf ein einziges Zeichen (im Gegensatz zu CRLF-Paaren) für
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
          ><a href="/de/docs/Web/HTML/Attributes/maxlength"
            >maxlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>,
        <code>tel</code>, <code>email</code>, <code>password</code>; auch für das
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganze Länge</td>
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
        Einschränkungsverstoß
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Einschränkungsvalidierung

Die Einschränkungsvalidierung erfolgt mittels der Constraint Validation API entweder auf einem einzelnen Formularelement oder auf der Formularebene selbst, auf dem {{ HTMLElement("form") }}-Element. Die Einschränkungsvalidierung erfolgt auf folgende Weise:

- Durch einen Aufruf der Methoden `checkValidity()` oder `reportValidity()` einer formularassoziierten DOM-Schnittstelle, ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur für dieses Element bewertet, was einem Skript ermöglicht, diese Information zu erhalten. Die Methode `checkValidity()` gibt einen Boolean zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird in der Regel gemacht, wenn der Benutzeragent bestimmt, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, zutrifft.) Im Gegensatz dazu berichtet die Methode `reportValidity()` dem Benutzer über eventuelle Einschränkungsfehler.
- Durch einen Aufruf der Methoden `checkValidity()` oder `reportValidity()` auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Schnittstelle.
- Durch das tatsächliche Absenden des Formulars.

Das Aufrufen von `checkValidity()` wird _statische_ Validierung der Einschränkungen genannt, während das Aufrufen von `reportValidity()` oder das Absenden des Formulars _interaktive_ Validierung der Einschränkungen genannt wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Einschränkungen.
> - Das Aufrufen der Methode `submit()` auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Schnittstelle löst keine Einschränkungsvalidierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Stattdessen sollte die `click()`-Methode auf einer Absende-Schaltfläche aufgerufen werden.
> - Die `minlength` und `maxlength` Einschränkungen werden nur bei benutzergenerierter Eingabe überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, selbst bei einem expliziten Aufruf von `checkValidity()` oder `reportValidity()`.

## Komplexe Einschränkungen unter Verwendung der Constraint Validation API

Unter Verwendung von JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, wie beispielsweise Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen erfordern.

Im Wesentlichen ist die Idee, JavaScript bei einem bestimmten Ereignis eines Formularfelds (wie **onchange**) auszulösen, um zu berechnen, ob eine Einschränkung verletzt ist, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass es einen Fehler gibt und dieser String die Fehlermeldung ist, die dem Benutzer angezeigt wird.

### Einschränkungen, die mehrere Felder kombinieren: Postleitzahlvalidierung

Das Format der Postleitzahl variiert von Land zu Land. Nicht nur erlauben die meisten Länder eine optionale Präfix mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich oder der Schweiz), sondern einige Länder haben Postleitzahlen mit lediglich einer festen Anzahl von Ziffern; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die an bestimmten Positionen Buchstaben erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahlvalidierung, sondern vielmehr eine Demonstration der Schlüsselkonzepte.

Als Beispiel werden wir ein Skript hinzufügen, das die Einschränkungsvalidierung für ein Formular überprüft:

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

Dann verknüpfen wir es mit dem **onchange**-Ereignis für das {{ HTMLElement("select") }} und dem **oninput**-Ereignis für das {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("country").onchange = checkPostalCode;
  document.getElementById("postal-code").oninput = checkPostalCode;
};
```

### Begrenzung der Dateigröße vor dem Hochladen

Eine weitere häufige Einschränkung besteht darin, die Größe einer hochzuladenden Datei zu begrenzen. Dies clientseitig zu überprüfen, bevor die Datei an den Server übertragen wird, erfordert die Kombination der Constraint Validation API, und besonders der Methode `field.setCustomValidity()`, mit einer anderen JavaScript API, hier der Datei-API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies wird angezeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, nutzt die Methode `File.size()`, um deren Größe zu erhalten, vergleicht diese mit dem (hart kodierten) Limit und ruft die Constraint API auf, um den Browser über einen Verstoß zu informieren:

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

## Visuelle Gestaltung der Einschränkungsvalidierung

Abgesehen vom Setzen von Einschränkungen möchten Webentwickler kontrollieren, welche Nachrichten den Benutzern angezeigt werden und wie diese gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Erscheinungsbild von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen das Schreiben von Selektoren, die Formularelemente auswählen, die das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut besitzen, oder die es nicht besitzen.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) repräsentieren `<input>`-Elemente, deren Inhalt gemäß den Typeneinstellungen des Eingabefelds validiert oder nicht validiert wird. Diese Klassen ermöglichen es dem Benutzer, gültige oder ungültige Formularelemente zu gestalten, um es einfacher zu machen, Elemente zu identifizieren, die entweder korrekt oder falsch formatiert sind.

### Kontrolle des Textes von Einschränkungsverstößen

Die folgenden Punkte können helfen, den Text eines Einschränkungsverstoßes zu steuern:

- Die Methode `setCustomValidity(message)` auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Gültigkeitsmeldung auf Fieldset-Elementen verhindert nicht die Formularübermittlung in den meisten Browsern.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Absende-Schaltflächen (erstellt mit entweder einem {{HTMLElement("button")}}-Element mit dem Typ `submit` oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Arten von Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil.)
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState) Schnittstelle beschreibt das Objekt, das von der `validity`-Eigenschaft der oben aufgelisteten Elementtypen zurückgegeben wird. Es repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements nicht gültig ist, wenn er nicht gültig ist.
