---
title: Einschränkungsvalidierung
slug: Web/HTML/Constraint_validation
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während die Markierung des Formulars selbst einfach ist, ist es schwieriger zu überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, und den Benutzer über das Problem zu informieren, kann zu Kopfschmerzen führen. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Einschränkungsvalidierung_ hinzu, um die Überprüfung des Formularinhalts auf der Clientseite zu erleichtern. Grundlegende, übliche Einschränkungen können überprüft werden, ohne dass JavaScript erforderlich ist, indem neue Attribute gesetzt werden; kompliziertere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen siehe das [Leitfaden zur Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Die HTML-Einschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Auch wenn weit weniger ungültige Formularanforderungen erwartet werden, können ungültige dennoch auf viele Weisen gesendet werden:
>
> - Durch Ändern von HTML über die Entwicklerwerkzeuge des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch programmgesteuertes Schreiben von Inhalten ins Formular (bestimmte Einschränkungsvalidierungen werden _nur_ für Benutzereingaben ausgeführt und nicht, wenn Sie den Wert eines Formularfeldes mithilfe von JavaScript setzen).
>
> Deshalb sollten Sie Formulardaten immer auf der Serverseite validieren, entsprechend dem, was auf der Clientseite getan wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch die Wahl des semantisch am besten geeigneten Wertes für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut des {{ HTMLElement("input") }} Elements, z. B. wird durch die Wahl des `email`-Typs automatisch eine Einschränkung erstellt, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf validierungsbezogenen Attributen, wodurch grundlegende Einschränkungen ohne JavaScript beschrieben werden können.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut sind:

| Eingabetyp                                                      | Beschreibung der Einschränkung                                                                                                                                                  | Zugehörige Regelverletzung                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Element/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Regelverletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die allgemein das Format `username@hostname.tld` hat, aber auch lokal sein kann, wie `username@hostname`.           | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Regelverletzung |

Für beide dieser Eingabetypen kann das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut gesetzt werden, wodurch mehrere Werte als kommagetrennte Liste gesetzt werden können. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird die **Type mismatch** Regelverletzung ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Einschränkungsvalidierung ausgeschlossen sind oder einen Bereinigungsalgorithmus haben, der inkorrekte Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Eingabetypen, die das Attribut unterstützen</th>
      <th scope="col">Mögliche Werte</th>
      <th scope="col">Einschränkungsbeschreibung</th>
      <th scope="col">Zugehörige Regelverletzung</th>
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
          >JavaScript regulärer Ausdruck</a
        >
        (kompiliert mit den {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und
        {{jsxref("RegExp.multiline", "multiline")}} Flags <em>deaktiviert</em>)
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        Regelverletzung
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
        Regelverletzung
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
      <td>Ein gültiges Datum und Zeit</td>
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
        Regelverletzung
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
      <td>Ein gültiges Datum und Zeit</td>
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
        <code>file</code>; auch bei den {{ HTMLElement("select") }} und
        {{ HTMLElement("textarea") }} Elementen
      </td>
      <td>
        <em>keins</em>, da es ein Boolean-Attribut ist: seine Anwesenheit bedeutet
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
        Regelverletzung
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf das Literal <code>any</code> gesetzt ist, muss der Wert
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
        Regelverletzung
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
        <code>tel</code>, <code>email</code>, <code>password</code>; auch bei dem
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganze Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht geringer sein als der Wert
        des Attributs, wenn nicht leer. Alle Zeilenumbrüche werden für
        {{ HTMLElement("textarea") }} auf ein einziges Zeichen normalisiert (im Gegensatz zu CRLF-Paaren).
      </td>
      <td>
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
        Regelverletzung
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
        <code>tel</code>, <code>email</code>, <code>password</code>; auch bei dem
        {{ HTMLElement("textarea") }} Element
      </td>
      <td>Eine ganze Länge</td>
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
        Regelverletzung
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Einschränkungsvalidierung

Die Einschränkungsvalidierung erfolgt über die Constraint Validation API entweder auf einem einzelnen Formularelement oder auf Formularebene, auf dem {{ HTMLElement("form") }} Element selbst. Die Einschränkungsvalidierung erfolgt auf folgende Weise:

- Durch einen Aufruf der Methode `checkValidity()` oder `reportValidity()` einer formularassoziierten DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur auf diesem Element auswertet und einem Skript erlaubt, diese Information zu erhalten. Die Methode `checkValidity()` gibt einen Booleschen Wert zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird typischerweise vom Benutzeragenten durchgeführt, um festzustellen, welcher der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, angewendet wird.) Im Gegensatz dazu meldet die Methode `reportValidity()` dem Benutzer alle Einschränkungsverstöße.
- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Schnittstelle.
- Durch Absenden des Formulars selbst.

Das Aufrufen von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während das Aufrufen von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, findet keine interaktive Validierung der Einschränkungen statt.
> - Das Aufrufen der `submit()` Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Schnittstelle löst keine Einschränkungsvalidierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()` Methode auf einer Absende-Schaltfläche auf.
> - Die `minlength` und `maxlength` Einschränkungen werden nur auf Benutzereingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, selbst wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen wird.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, beispielsweise Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen einbeziehen.

Grundsätzlich geht es darum, JavaScript bei einem Ereignis (wie **onchange**) eines Formularfeldes auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt und dieser String die Fehlermeldung ist, die dem Benutzer angezeigt wird.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahlvalidierung

Das Format der Postleitzahl variiert von Land zu Land. Nicht nur, dass die meisten Länder eine optionale Präfixerlaubnis mit dem Ländercode haben (wie `D-` in Deutschland, `F-` in Frankreich oder der Schweiz), sondern auch, dass einige Länder Postleitzahlen mit nur einer festen Anzahl von Ziffern haben; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die Buchstaben an bestimmten Positionen erlauben.

> [!NOTE]
> Dies ist keine umfassende Bibliothek für die Postleitzahlvalidierung, sondern vielmehr eine Demonstration der Schlüsselkonzepte.

Als Beispiel fügen wir ein Skript hinzu, das die Einschränkungsvalidierung für ein Formular überprüft:

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

Eine weitere häufige Einschränkung besteht darin, die Größe einer hochzuladenden Datei zu begrenzen. Zu überprüfen, ob dies auf der Clientseite vor der Übertragung der Datei an den Server geschieht, erfordert die Kombination der Constraint Validation API, und besonders der `field.setCustomValidity()` Methode, mit einer anderen JavaScript-API, hier der File-API.

Hier ist der HTML-Teil:

```html
<label for="fs">Select a file smaller than 75 kB: </label>
<input type="file" id="fs" />
```

Dies zeigt an:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die `File.size()` Methode, um ihre Größe zu erhalten, vergleicht sie mit dem (hart kodierten) Limit und verwendet die Constraint API, um den Browser zu informieren, falls eine Verletzung vorliegt:

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

## Visuelles Styling der Einschränkungsvalidierung

Neben dem Festlegen von Einschränkungen möchten Webentwickler kontrollieren, welche Nachrichten den Benutzern angezeigt werden und wie sie gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Aussehen von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen das Schreiben von Selektoren, die auf Formularelemente passen, die das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut haben oder nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um `<input>`-Elemente zu repräsentieren, deren Inhalt je nach Einstellung des Eingabetypus validiert bzw. nicht validiert werden kann. Diese Klassen erlauben es, gültige oder ungültige Formularelemente zu stylen, um es benutzerfreundlicher zu machen, Elemente leichter zu identifizieren, die entweder richtig oder falsch formatiert sind.

### Kontrolle des Textes bei Regelverletzungen

Folgende Punkte können helfen, den Text bei einer Regelverletzung zu steuern:

- Die `setCustomValidity(message)` Methode auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlermeldung auf fieldset-Elemente verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Absende-Schaltflächen (erstellt entweder mit einem {{HTMLElement("button")}}-Element vom Typ `submit` oder einem `input`-Element vom Typ {{HTMLElement("input/submit", "submit")}}. Andere Schaltflächentypen nehmen nicht an der Einschränkungsvalidierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState) Schnittstelle beschreibt das Objekt, das durch die `validity` Eigenschaft der oben aufgeführten Elementtypen zurückgegeben wird. Sie repräsentiert verschiedene Arten, wie ein eingegebener Wert ungültig sein kann. Gemeinsam helfen sie zu erklären, warum ein Wert eines Elements nicht validiert wurde, wenn er ungültig ist.
