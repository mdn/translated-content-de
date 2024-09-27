---
title: Einschränkungsvalidierung
slug: Web/HTML/Constraint_validation
l10n:
  sourceCommit: e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während das Markieren des Formulars an sich einfach ist, gestaltet sich die Überprüfung, ob jedes Feld einen gültigen und kohärenten Wert hat, schwieriger. Die Benachrichtigung des Benutzers über das Problem kann dann zur Herausforderung werden. [HTML5](/de/docs/Glossary/HTML5) führte neue Mechanismen für Formulare ein: Es fügte neue semantische Typen für das {{ HTMLElement("input") }}-Element und _Einschränkungsvalidierung_ hinzu, um die Überprüfung des Formularinhalts auf der Client-Seite zu erleichtern. Grundlegende, übliche Einschränkungen können überprüft werden, ohne dass JavaScript benötigt wird, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mit der Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte, mit Beispielen, sehen Sie das [Formular-Validierungs-Tutorial](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Die HTML-Einschränkungsvalidierung beseitigt nicht die Notwendigkeit der Validierung auf der _Server-Seite_. Auch wenn weit weniger ungültige Formularanfragen zu erwarten sind, können ungültige dennoch auf viele Weisen gesendet werden:
>
> - Durch Modifikation des HTML-Codes über die Entwicklertools des Browsers.
> - Durch manuelle Erstellung einer HTTP-Anfrage ohne Nutzung des Formulars.
> - Durch programmgesteuertes Schreiben von Inhalten in das Formular (bestimmte Einschränkungsvalidierungen werden _nur für Benutzereingaben_ durchgeführt und nicht, wenn Sie den Wert eines Formularfeldes mit JavaScript setzen).
>
> Daher sollten Sie Formulardaten immer auf der Server-Seite validieren, in Übereinstimmung mit dem, was auf der Client-Seite getan wird.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Weisen deklariert:

- Durch die Wahl des semantisch passendsten Werts für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z.B. das `email`-Typ wählt automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten auf validierungsbezogenen Attributen, wodurch grundlegende Einschränkungen ohne JavaScript einfach beschrieben werden können.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut sind:

| Eingabetyp                                                      | Beschreibung der Einschränkung                                                                                                                                             | Zugehöriger Verstoß                                                                |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Element/input/url)     | Der Wert muss eine absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einhaltungsverstoß |
| [`<input type="email">`](/de/docs/Web/HTML/Element/input/email) | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `username@hostname.tld` hat, aber auch lokal wie `username@hostname` sein kann.  | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einhaltungsverstoß |

Für beide dieser Eingabetypen, wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut gesetzt ist, können mehrere Werte als kommagetrennte Liste angegeben werden. Wenn einer dieser Werte die hier beschriebene Bedingung nicht erfüllt, wird der **Type mismatch** Einhaltungsverstoß ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Einschränkungsvalidierung ausgeschlossen sind oder einen Bereinigungsalgorithmus haben, der inkorrekte Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Neben dem oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

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
        <code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        Eine
        <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions"
          >JavaScript-Regulärer Ausdruck</a
        >
        (kompiliert mit den {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und
        {{jsxref("RegExp.multiline", "multiline")}} Flags <em>deaktiviert</em>)
      </td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td>
        <a href="/de/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        Einhaltungsverstoß
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
        Einhaltungsverstoß
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
        Einhaltungsverstoß
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
        <em>keine</em>, da es sich um ein Boolean-Attribut handelt: seine Anwesenheit bedeutet
        <em>wahr</em>, seine Abwesenheit bedeutet <em>false</em>
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
        Einhaltungsverstoß
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/de/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">
        Sofern der Schritt nicht auf das <code>any</code> Literal gesetzt ist, muss der Wert
        <strong>min</strong> + ein ganzzahliges Vielfaches des Schrittes sein.
      </td>
      <td rowspan="5">
        <strong
          ><code
            ><a href="/de/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
        Einhaltungsverstoß
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
      <td>Eine ganze Länge</td>
      <td>
        Die Anzahl der Zeichen (Codepunkte) darf nicht geringer als der Wert des Attributs sein, wenn nicht leer. Alle Zeilenumbrüche werden zu einem einzigen Zeichen normalisiert (im Gegensatz zu CRLF-Paaren) für
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
        Einhaltungsverstoß
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
      <td>Eine ganze Länge</td>
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
        Einhaltungsverstoß
      </td>
    </tr>
  </tbody>
</table>

## Prozess der Einschränkungsvalidierung

Die Einschränkungsvalidierung wird über die Constraint Validation API entweder an einem einzelnen Formularelement oder auf der Formularebene, auf dem {{ HTMLElement("form") }} Element selbst, durchgeführt. Die Einschränkungsvalidierung erfolgt auf folgende Weise:

- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode einer formularassoziierten DOM-Schnittstelle ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), die die Einschränkungen nur auf diesem Element überprüft und es einem Skript ermöglicht, diese Information zu erhalten. Die `checkValidity()`-Methode gibt einen Boolean zurück, der anzeigt, ob der Wert des Elements seine Einschränkungen besteht. (Dies wird typischerweise vom User-Agent durchgeführt, um zu bestimmen, welche der CSS-Pseudoklassen {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }} gelten.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer alle eingeschränkten Fehler.
- Durch einen Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle.
- Durch die Einsendung des Formulars selbst.

Der Aufruf von `checkValidity()` wird _statische_ Validierung der Einschränkungen genannt, während der Aufruf von `reportValidity()` oder das Einreichen des Formulars _interaktive_ Validierung der Einschränkungen genannt wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, findet keine interaktive Validierung der Einschränkungen statt.
> - Der Aufruf der `submit()`-Methode auf der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle löst keine Einschränkungsvalidierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einem Submit-Button auf.
> - Die `minlength`- und `maxlength`-Einschränkungen werden nur bei benutzerseitigen Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmgesteuert gesetzt wird, selbst wenn `checkValidity()` oder `reportValidity()` explizit aufgerufen werden.

## Komplexe Einschränkungen mit der Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, beispielsweise Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen beinhalten.

Grundsätzlich besteht die Idee darin, JavaScript bei einem bestimmten Formularevent (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt, und dieser String ist die Fehlermeldung, die dem Benutzer angezeigt wird.

### Einschränkung, die mehrere Felder kombiniert: Postleitzahl-Validierung

Das Format der Postleitzahl variiert von Land zu Land. Nicht nur lassen die meisten Länder ein optionales Präfix mit dem Ländercode zu (wie `D-` in Deutschland, `F-` in Frankreich oder in der Schweiz), sondern einige Länder haben Postleitzahlen mit nur einer festen Anzahl von Ziffern; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die Buchstaben an bestimmten Positionen erlauben.

> [!NOTE]
> Dies ist keine umfassende Postleitzahl-Validierungsbibliothek, sondern eine Demonstration der Schlüsselkonzepte.

Als Beispiel werden wir ein Skript hinzufügen, das die Einschränkungsvalidierung für dieses einfache Formular überprüft:

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

Dann verknüpfen wir es mit dem **onchange**-Ereignis für die {{ HTMLElement("select") }} und dem **oninput**-Ereignis für die {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};
```

### Begrenzung der Größe einer Datei vor ihrem Hochladen

Eine weitere häufige Einschränkung besteht darin, die Größe einer hochzuladenden Datei zu begrenzen. Dies auf der Clientseite vor dem Übertragen der Datei an den Server zu überprüfen, erfordert die Kombination der Constraint Validation API, insbesondere der `field.setCustomValidity()`-Methode, mit einer anderen JavaScript-API, hier der File API.

Hier ist der HTML-Teil:

```html
<label for="FS">Select a file smaller than 75 kB : </label>
<input type="file" id="FS" />
```

Dies wird angezeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Der JavaScript-Code liest die ausgewählte Datei, verwendet die `File.size()`-Methode, um ihre Größe zu erhalten, vergleicht diese mit dem (hart kodierten) Limit und ruft die Constraint API auf, um den Browser über mögliche Verstöße zu informieren:

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

Schließlich koppeln wir die Methode mit dem richtigen Ereignis:

```js
window.onload = () => {
  document.getElementById("FS").onchange = checkFileSize;
};
```

## Visuelle Gestaltung der Einschränkungsvalidierung

Neben dem Festlegen von Einschränkungen möchten Webentwickler steuern, welche Nachrichten den Benutzern angezeigt werden und wie sie gestaltet sind.

### Kontrolle des Aussehens von Elementen

Das Erscheinungsbild von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen das Schreiben von Selektoren, die Formularelemente ansprechen, die das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut haben oder nicht haben.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um \<input>-Elemente darzustellen, deren Inhalt gemäß der Eingabeeinstellung validiert und fehlschlägt. Diese Klassen ermöglichen es dem Benutzer, gültige oder ungültige Formularelemente zu gestalten, um es einfacher zu machen, Elemente zu identifizieren, die entweder korrekt oder falsch formatiert sind.

### Kontrolle des Textes bei Einhaltungsverstoß

Die folgenden Punkte können helfen, den Text eines Einhaltungsverstoßes zu steuern:

- Die `setCustomValidity(message)`-Methode auf den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlermeldung auf fieldset-Elementen verhindert die Formularübermittlung in den meisten Browsern nicht.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Senden-Buttons (erstellt entweder mit einem {{HTMLElement("button")}}-Element mit dem Typ `submit` oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Typen von Buttons nehmen nicht an der Einschränkungsvalidierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das von der `validity`-Eigenschaft der oben aufgeführten Elementtypen zurückgegeben wird. Es repräsentiert verschiedene Arten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen diese zu erklären, warum der Wert eines Elements fehlschlägt, wenn es nicht gültig ist.
