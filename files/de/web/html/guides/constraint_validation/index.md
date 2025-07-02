---
title: Verwendung der HTML-Formularvalidierung und der Constraint Validation API
short-title: Constraint validation
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: e284262bc2c7ce6041779db1376af4e01ba89bf9
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars selbst einfach ist, ist es schwieriger zu überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, und den Benutzer über das Problem zu informieren, kann Kopfschmerzen bereiten. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element hinzu und die _Constraint-Validierung_, um die Überprüfung des Formularinhalts auf der Clientseite zu erleichtern. Grundlegende, übliche Einschränkungen können ohne JavaScript überprüft werden, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen, siehe das [Formularvalidierungs-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> HTML Constraint-Validierung ersetzt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Auch wenn wesentlich weniger ungültige Formularanfragen zu erwarten sind, können ungültige trotzdem auf viele Arten gesendet werden:
>
> - Durch Ändern des HTML über die Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Nutzung des Formulars.
> - Durch programmatisches Schreiben von Inhalten in das Formular (bestimmte Beschränkungen werden _nur_ bei Benutzereingaben ausgeführt und nicht, wenn Sie den Wert eines Formularfeldes mit JavaScript setzen).
>
> Daher sollten Sie Formulardaten immer auf der Serverseite validieren, im Einklang mit der Validierung auf Clientseite.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Indem der semantisch am besten geeignete Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des {{ HTMLElement("input") }}-Elements gewählt wird, z. B. erzeugt die Wahl des Typs `email` automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Indem Werte für Validierungs-bezogene Attribute gesetzt werden, die grundlegende Einschränkungen beschreiben, ohne dass JavaScript erforderlich ist.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut sind:

| Eingabetyp                                                                 | Beschreibung der Einschränkung                                                                                                                                                      | Zugehörige Verletzung                                                                 |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Reference/Elements/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein, wie in der [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Constraint-Verletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `username@hostname.tld` hat, aber auch lokal wie `username@hostname` sein kann.           | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Constraint-Verletzung |

Für beide Eingabetypen können, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut gesetzt ist, mehrere Werte als kommagetrennte Liste angegeben werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird die **Type mismatch** Constraint-Verletzung ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Constraint-Validierung ausgeschlossen sind oder über einen Sanitierungsalgorithmus verfügen, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungs-bezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

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
          >JavaScript-Regulärer Ausdruck</a
        >
        (kompiliert ohne die {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und
        {{jsxref("RegExp.multiline", "multiline")}} Flags)
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
      <td rowspan="3">Der Wert muss größer oder gleich dem Attributwert sein.</td>
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
      <td>Ein gültiges Datum und eine gültige Zeit</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/de/docs/Web/HTML/Reference/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss kleiner oder gleich dem Attributwert sein</td>
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
      <td>Ein gültiges Datum und eine gültige Zeit</td>
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
        Es sei denn, der Schritt ist auf das Literal <code>any</code> gesetzt, der Wert muss
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
        <code>tel</code>, <code>email</code>, <code>password</code>; auch bei dem
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Code-Punkte) darf nicht kleiner sein als der Wert
        des Attributs, wenn nicht leer. Alle Zeilenumbrüche werden auf ein
        einziges Zeichen normalisiert (im Gegensatz zu CRLF-Paaren) für
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
        <code>tel</code>, <code>email</code>, <code>password</code>; auch bei dem
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Code-Punkte) darf den Wert des
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

## Constraint-Validierungsprozess

Die Constraint-Validierung erfolgt über die Constraint Validation API entweder für ein einzelnes Formularelement oder auf Formularebene, beim {{ HTMLElement("form") }}-Element selbst. Die Constraint-Validierung erfolgt auf folgende Weise:

- Durch einen Aufruf der Methode `checkValidity()` oder `reportValidity()` einer formularassoziierten DOM-Schnittstelle, ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur für dieses Element überprüft und ein Skript ermöglicht, diese Informationen zu erhalten. Die Methode `checkValidity()` gibt einen Boolean zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird normalerweise vom Benutzeragenten beim Bestimmen, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, angewendet werden, getan.) Im Gegensatz dazu meldet die Methode `reportValidity()` dem Benutzer alle Verstöße gegen Einschränkungen.
- Durch einen Aufruf der Methode `checkValidity()` oder `reportValidity()` auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch das Absenden des Formulars selbst.

Das Aufrufen von `checkValidity()` wird als _statische_ Überprüfung der Einschränkungen bezeichnet, während das Aufrufen von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Überprüfung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, findet keine interaktive Validierung der Einschränkungen statt.
> - Das Aufrufen der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Constraint-Validierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einer Absenden-Schaltfläche auf.
> - Die `minlength`- und `maxlength`-Beschränkungen werden nur für benutzerseitige Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, auch wenn explizit `checkValidity()` oder `reportValidity()` aufgerufen wird.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, zum Beispiel Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen beinhalten.

Im Wesentlichen besteht die Idee darin, JavaScript bei einem Formularfeldereignis (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt und dieser String die Fehlermeldung ist, die dem Benutzer angezeigt wird.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahlvalidierung

Das Format einer Postleitzahl variiert von Land zu Land. Viele Länder erlauben ein optionales Präfix mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich und `CH-` in der Schweiz). Einige Länder verwenden nur eine feste Anzahl von Ziffern in Postleitzahlen, während andere, wie das Vereinigte Königreich, komplexere Formate haben, die Buchstaben an bestimmten Positionen erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek zur Postleitzahlenüberprüfung, sondern eher eine Demonstration der Schlüsselaspekte.

Als Beispiel fügen wir ein Skript hinzu, das die Constraint-Validierung für ein Formular prüft:

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

Dann verknüpfen wir es mit dem **onchange**-Ereignis für das {{ HTMLElement("select") }} und das **oninput**-Ereignis für das {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("country").onchange = checkPostalCode;
  document.getElementById("postal-code").oninput = checkPostalCode;
};
```

### Begrenzung der Dateigröße vor dem Upload

Eine weitere häufige Einschränkung ist, die Größe einer hochzuladenden Datei zu begrenzen. Diese Überprüfung auf der Clientseite bevor die Datei an den Server übertragen wird, erfordert die Kombination der Constraint Validation API, insbesondere der Methode `field.setCustomValidity()`, mit einer anderen JavaScript-API, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die Methode `File.size()`, um deren Größe zu ermitteln, vergleicht sie mit dem (hart codierten) Limit und ruft die Constraint API auf, um den Browser zu informieren, ob eine Verletzung vorliegt:

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

## Visuelles Styling der Constraint Validierung

Abgesehen vom Setzen von Einschränkungen möchten Webentwickler kontrollieren, welche Nachrichten den Benutzern angezeigt werden und wie sie gestylt sind.

### Steuerung des Aussehens von Elementen

Das Aussehen der Elemente kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) erlauben das Schreiben von Selektoren, die Formularelemente ansprechen, die das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut haben oder nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um `<input>`-Elemente darzustellen, deren Inhalt gemäß der Typ-Einstellung des Eingabefelds entweder validiert oder nicht validiert wird. Diese Klassen ermöglichen es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um das Erkennen von Elementen, die entweder korrekt oder fehlerhaft formatiert sind, zu erleichtern.

### Steuerung des Textes bei Verletzung von Einschränkungen

Die folgenden Punkte können bei der Steuerung des Textes einer Constraint-Verletzung helfen:

- Die Methode `setCustomValidity(message)` bei den folgenden Elementen:
  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlermeldung bei fieldset-Elementen verhindert in den meisten Browsern nicht die Formularübermittlung.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Absenden-Schaltflächen (erstellt mit entweder einem {{HTMLElement("button")}}-Element vom Typ `submit` oder einem `input`-Element vom Typ {{HTMLElement("input/submit", "submit")}}. Andere Arten von Schaltflächen beteiligen sich nicht an der Constraint-Validierung.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das durch die `validity`-Eigenschaft der oben aufgeführten Elementtypen zurückgegeben wird. Sie repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Gemeinsam helfen sie zu erklären, warum der Wert eines Elements nicht validiert wird, wenn er nicht gültig ist.
