---
title: <input type='password'>
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

`<input>`-Elemente vom Typ **`password`** bieten dem Benutzer eine Möglichkeit, ein Passwort sicher einzugeben.

Das Element wird als einzeilige Klartext-Eingabesteuerung dargestellt, in der der Text verschleiert wird, damit er nicht lesbar ist, üblicherweise durch Ersetzen jedes Zeichens durch ein Symbol wie das Sternchen („\*“) oder einen Punkt („•“). Dieses Zeichen variiert je nach {{Glossary("user_agent", "User-Agent")}} und Betriebssystem.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen das eingegebene Zeichen für einen Moment, bevor es verdeckt wird, andere ermöglichen es dem Benutzer, die Anzeige des Klartexts ein- und auszuschalten. Beide Ansätze helfen dem Benutzer, sicherzustellen, dass er das beabsichtigte Passwort eingegeben hat, was insbesondere auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter enthalten (z. B. Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren mittlerweile Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält eine Zeichenkette, deren Wert der aktuelle Inhalt der Texteingabesteuerung ist, mit der das Passwort eingegeben wird. Hat der Benutzer noch nichts eingegeben, ist dieser Wert eine leere Zeichenkette (`""`). Wenn die [`required`](/de/docs/Web/HTML/Element/input#required)-Eigenschaft angegeben ist, muss das Passwortfeld einen anderen Wert als eine leere Zeichenkette enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut angegeben ist, wird der Inhalt einer `password`-Steuerung nur dann als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht erlaubt. Beim Setzen des Werts einer Passwortsteuerung werden die Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Passwortfeldeingaben die folgenden Attribute.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` angegeben ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Passworteingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` -Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Text des Musters angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Die Verwendung eines Musters für Passworteingaben wird dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichensatzregeln von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Groß- und Kleinschreibung vorschreiben, die Verwendung einer Anzahl von Ziffern und/oder Satzzeichen fordern und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Zeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### readonly

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise ungenau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe könnte schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den verwendeten Zeichen und dem {{cssxref("font")}}-Einstellungen.

Dies setzt _keine_ Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwortfeldern

Passworteingabefelder funktionieren im Allgemeinen ähnlich wie andere textuelle Eingabefelder; der Hauptunterschied besteht in der Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Ein einfaches Passwortfeld

Hier sehen wir das grundlegendste Passwortfeld, mit einem Label, das mithilfe des {{HTMLElement("label")}}-Elements etabliert wird.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### Autovervollständigung zulassen

Um es dem Passwortmanager des Benutzers zu ermöglichen, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise einer der folgenden Werte sein:

- `on`
  - : Dem Browser oder einem Passwortmanager erlauben, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Dem Browser oder Passwortmanager nicht erlauben, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da er die Fähigkeit der Benutzer, sichere Passwortpraktiken zu pflegen, typischerweise beeinträchtigt.
- `current-password`
  - : Dem Browser oder Passwortmanager erlauben, das aktuelle Passwort für die Website einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwortmanager ermöglicht, das aktuell bekannte Passwort für die Website automatisch in das Feld einzutragen, jedoch kein Vorschlagen eines neuen.
- `new-password`
  - : Dem Browser oder Passwortmanager erlauben, ein neues Passwort für die Website automatisch zu erstellen; dies wird in "Ändern Sie Ihr Passwort" und "Neue Benutzer"-Formularen verwendet, in dem Feld, das den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Weisen generiert werden, abhängig vom verwendeten Passwortmanager. Es kann ein neuer vorgeschlagener Wert ausgefüllt oder dem Benutzer eine Benutzeroberfläche zum Erstellen eines Passworts gezeigt werden.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort obligatorisch machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular abgeschickt werden kann, geben Sie das Boolesche [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus angeben

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntaxregeln von einem alternativen Texteingabe-Interface profitieren würden als der Standardtastatur, können Sie das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Einsatzfall hierfür ist, wenn das Passwort numerisch sein muss (wie eine PIN). Mobile Geräte mit virtuellen Tastaturen können beispielsweise stattdessen auf eine numerische Tastatur umschalten, um die Eingabe des Passworts zu erleichtern. Wenn die PIN zur einmaligen Verwendung gedacht ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut entweder auf `off` oder `one-time-code`, um vorzuschlagen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute verwenden, um Mindest- und Höchstlängen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es angibt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern umfassen muss. Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passworteingabesteuerung acht Zeichen breit ist.

```html
<label for="pin">PIN:</label>
<input
  id="pin"
  type="password"
  inputmode="numeric"
  minlength="4"
  maxlength="8"
  size="8" />
```

{{EmbedLiveSample("Setting_length_requirements", 600, 40)}}

### Text auswählen

Wie bei anderen Texteingabesteuerungen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

#### HTML

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" size="12" />
<button id="selectAll">Select All</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = () => {
  document.getElementById("userPassword").select();
};
```

#### Ergebnis

{{EmbedLiveSample("Selecting_text", 600, 40)}}

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um zu ermitteln (oder festzulegen), welcher Bereich von Zeichen in der Steuerung aktuell ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgte (oder erweitert werden wird, abhängig von Ihrer Plattform; siehe dessen Dokumentation für eine Erklärung). Angesichts der Tatsache, dass der Text verschleiert ist, ist der Nutzen dieser jedoch begrenzt.

## Validierung

Wenn Ihre Anwendung Einschränkungen für den Zeichensatz oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen Regulären Ausdruck festzulegen, der automatisch sicherstellt, dass Ihre Passwörter diese Anforderungen erfüllen.

In diesem Beispiel sind nur Werte gültig, die aus mindestens vier und höchstens acht hexadezimalen Ziffern bestehen.

```html
<label for="hexId">Hex ID: </label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="Enter an ID consisting of 4-8 hexadecimal digits"
  autocomplete="new-password" />
```

{{EmbedLiveSample("Validation", 600, 40)}}

## Beispiele

### Eine Sozialversicherungsnummer anfordern

Dieses Beispiel akzeptiert nur Eingaben, die dem Format für eine [gültige US-amerikanische Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifizierungszwecke verwendet werden, haben das Format "123-45-6789". Es gibt auch verschiedene Regeln für die erlaubten Werte in jeder Gruppe.

#### HTML

```html
<label for="ssn">SSN:</label>
<input
  type="password"
  id="ssn"
  inputmode="numeric"
  minlength="9"
  maxlength="12"
  pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
  required
  autocomplete="off" />
<br />
<label for="ssn">Value:</label>
<span id="current"></span>
```

Hier wird ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern) verwendet, das den eingegebenen Wert auf Zeichenketten beschränkt, die rechtmäßige Sozialversicherungsnummern darstellen. Offensichtlich garantiert dieses regexp keine gültige SSN (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsbehörde haben), aber es stellt sicher, dass die eingegebene Nummer eine sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Darüber hinaus erlaubt es, dass die drei Zifferngruppen durch ein Leerzeichen, einen Strich ("-") oder nichts getrennt werden können.

Das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen zu ermutigen, zum einfacheren Eingeben auf eine numerische Tastatur umzustellen. Die [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind auf 9 beziehungsweise 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen hat (der erste ohne Trennzeichen zwischen den Zifferngruppen und der zweite mit ihm). Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut wird verwendet, um anzugeben, dass dieser Eingabebereich einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwortmanager und Funktionen zum Wiederherstellen von Sitzungen versucht werden, seinen Wert einzustellen, da dies kein Passwort ist.

#### JavaScript

Dies ist nur ein einfacher Code, um die eingegebene SSN auf dem Bildschirm anzuzeigen, damit Sie sie sehen können. Offensichtlich untergräbt dies den Zweck eines Passwortfelds, aber es ist nützlich, um mit dem `pattern` zu experimentieren.

```js
const ssn = document.getElementById("ssn");
const current = document.getElementById("current");

ssn.oninput = (event) => {
  current.textContent = ssn.value;
};
```

#### Ergebnis

{{EmbedLiveSample("Requesting_a_Social_Security_number", 600, 60)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die ein Passwort repräsentiert, oder leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte Allgemeine Attribute</strong></td>
      <td>
         <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#inputmode"><code>inputmode</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a>, und
         <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <code>selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>, und <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
