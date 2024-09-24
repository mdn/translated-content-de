---
title: Einschränkungen bei der Validierung
slug: Web/HTML/Constraint_validation
l10n:
  sourceCommit: e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{HTMLSidebar}}

Die Erstellung von Webformularen war schon immer eine komplexe Aufgabe. Während die Auszeichnung des Formulars selbst einfach ist, ist es schwieriger zu überprüfen, ob jedes Feld einen gültigen und kohärenten Wert hat, und den Benutzer über das Problem zu informieren, kann Kopfschmerzen bereiten. [HTML5](/de/docs/Glossary/HTML5) führte neue Mechanismen für Formulare ein: Es wurden neue semantische Typen für das {{ HTMLElement("input") }}-Element und die _constraint validation_ eingeführt, um die Überprüfung der Formularinhalte auf der Clientseite zu erleichtern. Grundlegende, übliche Einschränkungen können ohne JavaScript überprüft werden, indem neue Attribute gesetzt werden; komplexere Einschränkungen können mithilfe des Constraint Validation API getestet werden.

Für eine grundlegende Einführung in diese Konzepte, mit Beispielen, siehe das [Formularvalidierungs-Tutorial](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Die HTML-Einschränkungsvalidierung ersetzt nicht die Notwendigkeit der Validierung auf der _Serverseite_. Auch wenn deutlich weniger ungültige Formularanfragen zu erwarten sind, können ungültige dennoch auf viele Arten gesendet werden:
>
> - Durch Ändern des HTML über die Entwicklertools des Browsers.
> - Durch manuelles Erstellen einer HTTP-Anfrage ohne Verwendung des Formulars.
> - Durch programmgesteuertes Schreiben von Inhalten in das Formular (bestimmte Einschränkungsvalidierungen laufen _nur_ bei Benutzereingaben und nicht, wenn Sie den Wert eines Formularfelds mit JavaScript festlegen).
>
> Daher sollten Sie Formulardaten auf der Serverseite immer konsistent mit dem, was auf der Clientseite gemacht wird, validieren.

## Intrinsische und grundlegende Einschränkungen

In HTML werden grundlegende Einschränkungen auf zwei Arten erklärt:

- Durch die Auswahl des semantisch am besten geeigneten Werts für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des {{ HTMLElement("input") }}-Elements, z.B. erzeugt die Auswahl des Typs `email` automatisch eine Einschränkung, die überprüft, ob der Wert eine gültige E-Mail-Adresse ist.
- Durch das Setzen von Werten bei validierungsbezogenen Attributen, wodurch grundlegende Einschränkungen auf einfache Weise beschrieben werden können, ohne dass JavaScript benötigt wird.

### Semantische Eingabetypen

Die intrinsischen Einschränkungen für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut sind:

| Eingabetyp                                                          | Beschreibung der Einschränkung                                                                                                                                                  | Zugehörige Verletzung                                                                    |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/de/docs/Web/HTML/Element/input/url)      | Der Wert muss eine absolute [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) sein, wie im [URL Living Standard](https://url.spec.whatwg.org/) definiert. | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |
| [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)  | Der Wert muss eine syntaktisch gültige E-Mail-Adresse sein, die im Allgemeinen das Format `nutzername@hostname.tld` hat, aber auch lokal wie `nutzername@hostname` sein kann.   | **[TypeMismatch](/de/docs/Web/API/ValidityState/typeMismatch)** Einschränkungsverletzung |

Für beide dieser Eingabetypen gilt, dass, wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut gesetzt ist, mehrere Werte als kommagetrennte Liste gesetzt werden können. Wenn einer dieser Werte nicht die hier beschriebene Bedingung erfüllt, wird die Einschränkungsverletzung **Type mismatch** ausgelöst.

Beachten Sie, dass die meisten Eingabetypen keine intrinsischen Einschränkungen haben, da einige von der Einschränkungsvalidierung ausgeschlossen sind oder einen Bereinigungsalgorithmus haben, der falsche Werte in einen korrekten Standardwert umwandelt.

### Validierungsbezogene Attribute

Zusätzlich zu dem oben beschriebenen `type`-Attribut werden die folgenden Attribute verwendet, um grundlegende Einschränkungen zu beschreiben:

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
      <td><code><a href="/de/docs/Web/HTML/Attributes/pattern">pattern</a></code></td>
      <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code></td>
      <td>Ein <a href="/de/docs/Web/JavaScript/Guide/Regular_expressions">JavaScript regulärer Ausdruck</a> (kompiliert mit den {{jsxref("RegExp.global", "global")}}, {{jsxref("RegExp.ignoreCase", "ignoreCase")}} und {{jsxref("RegExp.multiline", "multiline")}} Flaggen <em>deaktiviert</em>)</td>
      <td>Der Wert muss dem Muster entsprechen.</td>
      <td><a href="/de/docs/Web/API/ValidityState/patternMismatch"><strong><code>patternMismatch</code></strong></a> Einschränkungsverletzung</td>
    </tr>
    <tr>
      <td rowspan="3"><code><a href="/de/docs/Web/HTML/Attributes/min">min</a></code></td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss größer oder gleich dem Wert sein.</td>
      <td rowspan="3"><strong><code><a href="/de/docs/Web/API/ValidityState/rangeUnderflow">rangeUnderflow</a></code></strong> Einschränkungsverletzung</td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Ein gültiges Datum</td>
    </tr>
    <tr>
      <td><code>datetime-local</code>, <code>time</code></td>
      <td>Ein gültiges Datum und Uhrzeit</td>
    </tr>
    <tr>
      <td rowspan="3"><code><a href="/de/docs/Web/HTML/Attributes/max">max</a></code></td>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine gültige Zahl</td>
      <td rowspan="3">Der Wert muss kleiner oder gleich dem Wert sein</td>
      <td rowspan="3"><strong><code><a href="/de/docs/Web/API/ValidityState/rangeOverflow">rangeOverflow</a></code></strong> Einschränkungsverletzung</td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Ein gültiges Datum</td>
    </tr>
    <tr>
      <td><code>datetime-local</code>, <code>time</code></td>
      <td>Ein gültiges Datum und Uhrzeit</td>
    </tr>
    <tr>
      <td><code><a href="/de/docs/Web/HTML/Attributes/required">required</a></code></td>
      <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>, <code>date</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code>, <code>time</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>; auch bei den {{ HTMLElement("select") }} und {{ HTMLElement("textarea") }}-Elementen</td>
      <td><em>keine</em>, da es sich um ein Boolean-Attribut handelt: das Vorhandensein bedeutet <em>wahr</em>, das Fehlen bedeutet <em>falsch</em></td>
      <td>Es muss ein Wert vorhanden sein (wenn gesetzt).</td>
      <td><strong><code><a href="/de/docs/Web/API/ValidityState/valueMissing">valueMissing</a></code></strong> Einschränkungsverletzung</td>
    </tr>
    <tr>
      <td rowspan="5"><code><a href="/de/docs/Web/HTML/Attributes/step">step</a></code></td>
      <td><code>date</code></td>
      <td>Eine ganze Anzahl von Tagen</td>
      <td rowspan="5">Sofern der Schritt nicht auf den <code>any</code> Literal festgelegt ist, muss der Wert <strong>min</strong> + ein ganzzahliges Vielfaches des Schritts sein.</td>
      <td rowspan="5"><strong><code><a href="/de/docs/Web/API/ValidityState/stepMismatch">stepMismatch</a></code></strong> Einschränkungsverletzung</td>
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
      <td><code>datetime-local</code>, <code>time</code></td>
      <td>Eine ganze Anzahl von Sekunden</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>Eine ganze Zahl</td>
    </tr>
    <tr>
      <td><code><a href="/de/docs/Web/HTML/Attributes/minlength">minlength</a></code></td>
      <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>; auch bei dem {{ HTMLElement("textarea") }}-Element</td>
      <td>Eine ganzzahlige Länge</td>
      <td>Die Anzahl der Zeichen (Codepoints) darf nicht kleiner als der Wert des Attributs sein, wenn es nicht leer ist. Alle Zeilenumbrüche werden für {{ HTMLElement("textarea") }} auf ein einzelnes Zeichen normalisiert (im Gegensatz zu CRLF-Paaren).</td>
      <td><strong><code><a href="/de/docs/Web/API/ValidityState/tooShort">tooShort</a></code></strong> Einschränkungsverletzung</td>
    </tr>
    <tr>
      <td><code><a href="/de/docs/Web/HTML/Attributes/maxlength">maxlength</a></code></td>
      <td><code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>; auch bei dem {{ HTMLElement("textarea") }}-Element</td>
      <td>Eine ganzzahlige Länge</td>
      <td>Die Anzahl der Zeichen (Codepoints) darf den Wert des Attributs nicht überschreiten.</td>
      <td><strong><code><a href="/de/docs/Web/API/ValidityState/tooLong">tooLong</a></code></strong> Einschränkungsverletzung</td>
    </tr>
  </tbody>
</table>

## Prozess der Einschränkungsvalidierung

Die Einschränkungsvalidierung erfolgt über das Constraint Validation API entweder für ein einzelnes Formularelement oder auf der Formularebene, für das {{ HTMLElement("form") }}-Element selbst. Die Einschränkungsvalidierung erfolgt auf folgende Weise:

- Durch Aufruf der `checkValidity()`- oder `reportValidity()`-Methode eines formularzugehörigen DOM-Interfaces ([`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) oder [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)), welche die Einschränkungen nur für dieses Element bewertet und einem Skript ermöglicht, diese Informationen zu erhalten. Die `checkValidity()`-Methode gibt einen Boolean zurück, der angibt, ob der Wert des Elements seine Einschränkungen erfüllt. (Dies wird typischerweise vom Benutzeragenten durchgeführt, wenn er bestimmt, welche der CSS-Pseudoklassen, {{ Cssxref(":valid") }} oder {{ Cssxref(":invalid") }}, zutrifft.) Im Gegensatz dazu meldet die `reportValidity()`-Methode dem Benutzer alle Einschränkungsfehler.
- Durch Aufruf der `checkValidity()`- oder `reportValidity()`-Methode auf dem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface.
- Durch das Absenden des Formulars selbst.

Der Aufruf von `checkValidity()` wird als _statische_ Validierung der Einschränkungen bezeichnet, während der Aufruf von `reportValidity()` oder das Senden des Formulars als _interaktive_ Validierung der Einschränkungen bezeichnet wird.

> [!NOTE]
>
> - Wenn das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut auf dem {{ HTMLElement("form") }}-Element gesetzt ist, erfolgt keine interaktive Validierung der Einschränkungen.
> - Der Aufruf der `submit()`-Methode auf dem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interface löst keine Einschränkungsvalidierung aus. Mit anderen Worten, diese Methode sendet die Formulardaten an den Server, auch wenn sie die Einschränkungen nicht erfüllen. Rufen Sie stattdessen die `click()`-Methode auf einem Sende-Button auf.
> - Die `minlength`- und `maxlength`-Einschränkungen werden nur bei benutzereingegebenen Eingaben überprüft. Sie werden nicht überprüft, wenn ein Wert programmatisch gesetzt wird, selbst wenn Sie `checkValidity()` oder `reportValidity()` explizit aufrufen.

## Komplexe Einschränkungen mit dem Constraint Validation API

Mit JavaScript und der Constraint API ist es möglich, komplexere Einschränkungen zu implementieren, zum Beispiel Einschränkungen, die mehrere Felder kombinieren, oder Einschränkungen, die komplexe Berechnungen erfordern.

Im Grunde genommen besteht die Idee darin, JavaScript bei einem bestimmten Ereignis eines Formularfelds (wie **onchange**) auszulösen, um zu berechnen, ob die Einschränkung verletzt wird, und dann die Methode `field.setCustomValidity()` zu verwenden, um das Ergebnis der Validierung festzulegen: ein leerer String bedeutet, dass die Einschränkung erfüllt ist, und jeder andere String bedeutet, dass ein Fehler vorliegt, und dieser String ist die Fehlermeldung, die dem Benutzer angezeigt wird.

### Einschränkungen mit mehreren Feldern: Postleitzahlvalidierung

Das Format der Postleitzahl variiert von Land zu Land. Nicht nur erlauben die meisten Länder ein optionales Präfix mit dem Ländercode (wie `D-` in Deutschland, `F-` in Frankreich oder der Schweiz), sondern einige Länder haben Postleitzahlen mit nur einer festen Anzahl von Ziffern; andere, wie das Vereinigte Königreich, haben komplexere Strukturen, die an bestimmten Positionen Buchstaben erlauben.

> [!NOTE]
> Dies ist keine umfassende Postleitzahlvalidierungsbibliothek, sondern eine Demonstration der wichtigsten Konzepte.

Als Beispiel werden wir ein Skript hinzufügen, das die Einschränkungsvalidierung für dieses einfache Formular überprüft:

```html
<form>
  <label for="ZIP">PLZ : </label>
  <input type="text" id="ZIP" />
  <label for="Country">Land : </label>
  <select id="Country">
    <option value="ch">Schweiz</option>
    <option value="fr">Frankreich</option>
    <option value="de">Deutschland</option>
    <option value="nl">Niederlande</option>
  </select>
  <input type="submit" value="Validieren" />
</form>
```

Dies zeigt das folgende Formular an:

{{EmbedLiveSample("Constraint_combining_several_fields_Postal_code_validation")}}

Zuerst schreiben wir eine Funktion, die die Einschränkung selbst überprüft:

```js
function checkZIP() {
  // Für jedes Land, definiert das Muster, dem die PLZ folgen muss
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Schweizer PLZ müssen genau 4 Ziffern haben: z.B. CH-1950 oder 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "Französische PLZ müssen genau 5 Ziffern haben: z.B. F-75012 oder 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Deutsche PLZ müssen genau 5 Ziffern haben: z.B. D-12345 oder 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Niederländische PLZ müssen genau 4 Ziffern gefolgt von 2 Buchstaben haben, außer SA, SD und SS",
    ],
  };

  // Liest die Länder-ID
  const country = document.getElementById("Country").value;

  // Holt das NPA-Feld
  const ZIPField = document.getElementById("ZIP");

  // Baut den Einschränkungsprüfer
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Überprüft es!
  if (constraint.test(ZIPField.value)) {
    // Die PLZ folgt der Einschränkung, wir verwenden das ConstraintAPI, um dies mitzuteilen
    ZIPField.setCustomValidity("");
  } else {
    // Die PLZ folgt der Einschränkung nicht, wir verwenden das ConstraintAPI, um
    // eine Nachricht über das für dieses Land erforderliche Format zu geben
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
```

Dann verknüpfen wir es mit dem **onchange**-Ereignis für das {{ HTMLElement("select") }} und dem **oninput**-Ereignis für das {{ HTMLElement("input") }}:

```js
window.onload = () => {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};
```

### Begrenzung der Dateigröße vor dem Upload

Eine weitere gängige Einschränkung besteht darin, die Größe einer Datei zu begrenzen, die hochgeladen werden soll. Das Überprüfen dieses Aspekts auf der Clientseite, bevor die Datei an den Server übermittelt wird, erfordert die Kombination des Constraint Validation API und insbesondere der `field.setCustomValidity()`-Methode mit einem anderen JavaScript-API, hier dem File API.

Hier ist der HTML-Teil:

```html
<label for="FS">Wählen Sie eine Datei, die kleiner als 75 kB ist : </label>
<input type="file" id="FS" />
```

Dies zeigt:

{{EmbedLiveSample("Limiting_the_size_of_a_file_before_its_upload")}}

Das JavaScript liest die ausgewählte Datei, verwendet die `File.size()`-Methode, um ihre Größe zu erhalten, vergleicht sie mit der (hart kodierten) Grenze und ruft das Constraint API auf, um den Browser über eine Verletzung zu informieren:

```js
function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  // Wenn eine (mindestens) Datei ausgewählt ist
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Überprüft die Einschränkung
      FS.setCustomValidity("Die ausgewählte Datei darf nicht größer als 75 kB sein");
      FS.reportValidity();
      return;
    }
  }
  // Keine benutzerdefinierte Einschränkungsverletzung
  FS.setCustomValidity("");
}
```

Schließlich verbinden wir die Methode mit dem richtigen Ereignis:

```js
window.onload = () => {
  document.getElementById("FS").onchange = checkFileSize;
};
```

## Visuelle Gestaltung der Einschränkungsvalidierung

Neben dem Setzen von Einschränkungen möchten Webentwickler kontrollieren, welche Meldungen den Benutzern angezeigt werden und wie diese gestaltet sind.

### Kontrolle der Darstellung von Elementen

Die Darstellung von Elementen kann über CSS-Pseudoklassen gesteuert werden.

#### :required und :optional CSS-Pseudoklassen

Die {{cssxref(':required')}} und {{cssxref(':optional')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) ermöglichen es, Selektoren zu schreiben, die Formularelemente wählen, die das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut haben oder nicht.

#### :placeholder-shown CSS-Pseudoklasse

Siehe {{cssxref(':placeholder-shown')}}.

#### :valid :invalid CSS-Pseudoklassen

Die {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) werden verwendet, um \<input>-Elemente darzustellen, deren Inhalt gemäß der Typeinstellung des Eingabefelds gültig und ungültig ist. Diese Klassen ermöglichen es dem Benutzer, gültige oder ungültige Formularelemente zu stylen, um es einfacher zu machen, korrekt oder falsch formatierte Elemente zu identifizieren.

### Kontrolle des Textes bei Einschränkungsverletzungen

Die folgenden Punkte können helfen, den Text einer Einschränkungsverletzung zu kontrollieren:

- Die `setCustomValidity(message)`-Methode bei den folgenden Elementen:

  - {{HTMLElement("fieldset")}}. Hinweis: Das Setzen einer benutzerdefinierten Fehlermeldung bei fieldset-Elementen verhindert in den meisten Browsern nicht das Absenden des Formulars.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Sendeschaltflächen (erstellt mit entweder einem {{HTMLElement("button")}}-Element mit dem Typ `submit`, oder einem `input`-Element mit dem {{HTMLElement("input/submit", "submit")}}-Typ. Andere Arten von Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil.
  - {{HTMLElement("textarea")}}

- Die [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle beschreibt das Objekt, das von der `validity`-Eigenschaft der oben aufgelisteten Elementtypen zurückgegeben wird. Es repräsentiert verschiedene Möglichkeiten, wie ein eingegebener Wert ungültig sein kann. Zusammen helfen sie zu erklären, warum der Wert eines Elements ungültig ist, wenn er nicht gültig ist.
