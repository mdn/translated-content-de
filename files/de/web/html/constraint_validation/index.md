---
title: Einschränkungsvalidierung
slug: Web/HTML/Constraint_validation
l10n:
  sourceCommit: e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars selbst einfach ist, ist das Überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, schwieriger, und den Benutzer über das Problem zu informieren, kann zu Kopfschmerzen führen. {{Glossary("HTML5", "HTML5")}} führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _Einschränkungsvalidierung_ hinzu, um die Überprüfung des Formularinhalts auf der Clientseite zu erleichtern. Einfache, übliche Einschränkungen können ohne die Notwendigkeit von JavaScript durch das Setzen neuer Attribute überprüft werden; komplexere Einschränkungen können mithilfe der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte mit Beispielen, siehe das [Tutorial zur Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Die HTML-Einschränkungsvalidierung ersetzt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Auch wenn weit weniger ungültige Formularanfragen zu erwarten sind, können ungültige dennoch auf viele Arten gesendet werden:
>
> - Durch das Ändern von HTML über die Entwicklerwerkzeuge des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch das programmgesteuerte Schreiben von Inhalten in das Formular (bestimmte Einschränkungsvalidierungen werden _nur_ bei Benutzereingaben ausgeführt und nicht, wenn Sie den Wert eines Formularfeldes mithilfe von JavaScript festlegen).
>
> Daher sollten Sie immer sicherstellen, dass Formulardaten auf der Serverseite validiert werden, konsistent mit dem, was auf der Clientseite geschieht.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten deklariert:

- Durch die Auswahl des semantisch am besten geeigneten Werts für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z. B. bewirkt die Wahl des `email`-Typs automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten für validierungsbezogene Attribute, die es ermöglichen, grundlegende Einschränkungen auf einfache Weise zu beschreiben, ohne dass JavaScript erforderlich ist.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut sind:

| Eingabetyp                                                      | Beschreibung der Einschränkung                                                                                                                                                     | Zugehörige Verletzung                                                                    |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Element/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein, wie sie im [URL Living Standard](https://url.spec.whatwg.org/) definiert ist. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `username@hostname.tld` hat, aber auch lokal als `username@hostname` vorliegen kann.     | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |

Bei beiden dieser Eingabetypen können, wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut gesetzt ist, mehrere Werte als kommagetrennte Liste festgelegt werden. Wenn einer dieser Werte die hier beschriebenen Bedingungen nicht erfüllt, wird die Einschränkungsverletzung **Type mismatch** ausgelöst.

Es ist zu beachten, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Einschränkungsvalidierung ausgeschlossen sind oder einen Algorithmus zur Normalisierung aufweisen, der falsche Werte in einen richtigen Standardwert umwandelt.

### Validierungsbezogene Attribute

Neben dem oben beschriebenen `type`-Attribut werden folgende Attribute zur Beschreibung grundlegender Einschränkungen verwendet:

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
        <em>keine</em> da es ein Boolean-Attribut ist: seine Anwesenheit bedeutet
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
        Es sei denn, der Schritt ist auf das Literal <code>any</code> gesetzt, muss der Wert
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
        {{ HTMLElement("textarea") }}-Element
      </td>
      <td>Eine ganzzahlige Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht kleiner als der Wert
        des Attributs sein, wenn es nicht leer ist. Alle neuen Zeilen werden zu einem
        einzigen Zeichen normalisiert (im Gegensatz zu CRLF-Paaren) für
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
        {{ HTMLElement("textarea") }}-Element
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
        Einschränkungsverletzung
      </td>
    </tr>
  </tbody>
</table>

## Einschränkungsvalidierungsprozess

Die Einschränkungsvalidierung erfolgt über die Constraint Validation API entweder auf einem einzelnen Formularelement oder auf der Formularebene, auf dem {{ HTMLElement("form") }}-Element selbst. Die Einschränkungsvalidierung erfolgt auf folgende Weise:

- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode einer formularzugehörigen DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur auf diesem Element bewertet und es einem Skript ermöglicht, diese Informationen zu erhalten. Die `checkValidity()`-Methode gibt einen Boolean zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird typischerweise vom Benutzeragenten durchgeführt, wenn er bestimmt, welche der CSS-Pseudoklassen {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }} angewendet werden.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer eventuelle Einschränkungsfehler.
- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch das Absenden des Formulars selbst.

Das Aufrufen von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während das Aufrufen von `reportValidity()` oder das Absenden des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Einschränkungen.
> - Das Aufrufen der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Einschränkungsvalidierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllt. Rufen Sie stattdessen die `click()`-Methode auf einem Absenden-Button auf.
> - Die `minlength`- und `maxlength`-Einschränkungen werden nur auf benutzerbereitgestellte Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert festgelegt wird, selbst wenn explizit `checkValidity()` oder `reportValidity()` aufgerufen wird.

## Komplexe Einschränkungen mithilfe der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, zum Beispiel Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen erfordern.

Grundsätzlich ist die Idee, JavaScript bei einem Event eines Formularelements (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: Ein leerer String bedeutet, die Einschränkung ist erfüllt, und jeder andere String bedeutet, dass ein Fehler vorliegt und dieser String ist die Fehlermeldung, die dem Benutzer angezeigt werden soll.

### Einschränkungen, die mehrere Felder kombinieren: Postleitzahlenvalidierung

Das Postleitzahlenformat variiert von Land zu Land. Nicht nur erlauben die meisten Länder eine optionale Vorsilbe mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich oder der Schweiz), sondern einige Länder haben Postleitzahlen mit nur einer festen Anzahl von Ziffern; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die Buchstaben an einigen spezifischen Positionen erlauben.

> [!NOTE]
> Dies ist keine umfassende Postleitzahlenvalidierungsbibliothek, sondern eine Demonstration der Kernkonzepte.

Als Beispiel fügen wir ein Skript hinzu, das die Einschränkungsvalidierung für dieses einfache Formular überprüft:

```html
<form>
  <label for="ZIP">ZIP : </label>
  <input type="text" id="ZIP" />
  <label for="Country">Country : </label>
  <select id="Country">
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
function checkZIP() {
  // For each country, defines the pattern that the ZIP has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Read the country id
  const country = document.getElementById("Country").value;

  // Get the NPA field
  const ZIPField = document.getElementById("ZIP");

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Check it!
  if (constraint.test(ZIPField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    ZIPField.setCustomValidity("");
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
```

Dann verknüpfen wir sie mit dem **onchange**-Event für das {{ HTMLElement("select") }} und dem **oninput**-Event für das {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};
```

### Begrenzung der Dateigröße vor dem Hochladen

Eine weitere häufige Einschränkung besteht darin, die Größe einer hochzuladenden Datei zu begrenzen. Das Überprüfen dies auf der Clientseite, bevor die Datei an den Server übermittelt wird, erfordert die Kombination der Constraint Validation API, insbesondere der `field.setCustomValidity()`-Methode, mit einer anderen JavaScript-API, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="FS">Select a file smaller than 75 kB : </label>
<input type="file" id="FS" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die `File.size()`-Methode, um ihre Größe zu ermitteln, vergleicht sie mit der (hart kodierten) Grenze und ruft die Constraint API auf, um den Browser über eine Verletzung zu informieren:

```js
function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Check the constraint
      FS.setCustomValidity("The selected file must not be larger than 75 kB");
      FS.reportValidity();
      return;
    }
  }
  // No custom constraint violation
  FS.setCustomValidity("");
}
```

Abschließend verbinden wir die Methode mit dem korrekten Event:

```js
window.onload = () => {
  document.getElementById("FS").onchange = checkFileSize;
};
```

## Visuelles Styling der Einschränkungsvalidierung

Abgesehen vom Festlegen von Einschränkungen möchten Webentwickler steuern, welche Nachrichten den Benutzern angezeigt werden und wie sie gestaltet sind.

### Steuerung des Aussehens von Elementen

Das Aussehen von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen die Erstellung von Selektoren, die Formularelemente ansprechen, die das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut haben oder nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um `<input>`-Elemente darzustellen, deren Inhalt je nach dem Eingabetyp des Elements gültig oder ungültig ist. Diese Klassen erlauben es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um das Auffinden korrekt oder inkorrekt formatierter Elemente zu erleichtern.

### Kontrolle des Textes der Einschränkungsverletzung

Die folgenden Punkte können bei der Kontrolle des Textes einer Einschränkungsverletzung helfen:

- Die `setCustomValidity(message)`-Methode auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Festlegen einer benutzerdefinierten Fehlermeldung auf fieldset-Elementen verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Absende-Schaltflächen (erstellt mit einem {{HTMLElement("button")}}-Element mit dem Typ `submit` oder einem `input`-Element mit dem Typ {{HTMLElement("input/submit", "submit")}}. Andere Arten von Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das von der `validity`-Eigenschaft der oben aufgelisteten Elementtypen zurückgegebene Objekt. Es repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements nicht validiert wird, falls er ungültig ist.
