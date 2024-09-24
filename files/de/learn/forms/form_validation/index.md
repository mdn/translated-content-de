---
title: Formularvalidierung auf der Client-Seite
slug: Learn/Forms/Form_validation
l10n:
  sourceCommit: 1bdd4d495ca312bcff06068c8a9e8ab2687ff2b5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

Bevor Daten an den Server gesendet werden, ist es wichtig sicherzustellen, dass alle erforderlichen Formularsteuerungen ausgefüllt und im richtigen Format vorliegen. Dies wird **Formularvalidierung auf der Client-Seite** genannt und hilft sicherzustellen, dass die übermittelten Daten den in den verschiedenen Formularsteuerungen festgelegten Anforderungen entsprechen. Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele der Formularvalidierung auf der Client-Seite.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein angemessenes Verständnis von
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was Formularvalidierung auf der Client-Seite ist, warum sie wichtig ist
        und wie verschiedene Techniken angewendet werden können, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Client-Seite ist eine erste Prüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung; durch das Abfangen ungültiger Daten auf der Client-Seite kann der Benutzer diese sofort korrigieren. Wenn die Daten an den Server gelangen und dort abgelehnt werden, verursacht dies durch die Hin- und Rückfahrt zum Server und zurück zur Client-Seite eine spürbare Verzögerung, um den Benutzer zu informieren, dass er seine Daten korrigieren soll.

Dennoch sollte die Validierung auf der Client-Seite _nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer Sicherheitsprüfungen von übermittelten Formulardaten auf der _Server-Seite_ **sowie** auf der Client-Seite durchführen, da die Validierung auf der Client-Seite zu leicht zu umgehen ist, sodass bösartige Benutzer weiterhin leicht fehlerhafte Daten an Ihren Server senden können. Lesen Sie [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; Die Implementierung der Server-seitigen Validierung liegt etwas außerhalb des Umfangs dieses Moduls, sollte jedoch berücksichtigt werden.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebte Website mit einem Registrierungsformular, und Sie werden feststellen, dass diese Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben. Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Es wird ein bestimmtes Datenformat benötigt, um als gültig zu gelten).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat wird benötigt).

Dies wird als **Formularvalidierung** bezeichnet. Wenn Sie Daten eingeben, überprüft der Browser und/oder der Webserver, ob die Daten das richtige Format haben und den durch die Anwendung festgelegten Einschränkungen entsprechen. Die Validierung, die im Browser erfolgt, wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server erfolgende Validierung als **Server-seitige** Validierung bezeichnet wird. In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, ermöglicht die Anwendung die Übermittlung der Daten an den Server und (in der Regel) die Speicherung in einer Datenbank; Wenn die Informationen nicht korrekt formatiert sind, erhält der Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und er hat die Möglichkeit, es erneut zu versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir darauf, unsere Formulare zu validieren? Es gibt drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht richtig, wenn die Daten unserer Benutzer im falschen Format gespeichert sind, falsch sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Wenn wir unsere Benutzer dazu zwingen, sichere Passwörter einzugeben, erleichtert das den Schutz ihrer Kontoinformationen.
- **Wir möchten uns selbst schützen.** Es gibt viele Möglichkeiten, wie bösartige Benutzer ungeschützte Formulare falsch verwenden können, um der Anwendung Schaden zuzufügen. Siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server übermittelt werden. Auch wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert, kann ein bösartiger Benutzer dennoch die Netzwerkangeforderung ändern.

## Verschiedene Arten von Validierung auf der Client-Seite

Es gibt zwei verschiedene Arten der Validierung auf der Client-Seite, die Sie im Web antreffen werden:

- **Eingebettete Formularvalidierung** nutzt HTML-Formularvalidierungsfunktionen, die wir an vielen Stellen in diesem Modul besprochen haben. Diese Validierung erfordert im Allgemeinen nicht viel JavaScript. Eingebettete Formularvalidierung hat eine bessere Leistung als JavaScript, ist aber nicht so anpassbar wie JavaScript-Validierung.
- **JavaScript**-Validierung wird mit JavaScript codiert. Diese Validierung ist vollständig anpassbar, erfordert aber eine eigene Implementierung (oder die Verwendung einer Bibliothek).

## Verwendung der eingebetteten Formularvalidierung

Eine der wichtigsten Funktionen moderner [Formularsteuerungen](/de/docs/Learn/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne auf JavaScript angewiesen zu sein. Dies wird durch die Verwendung von Validierungsattributen an Formularelementen erreicht. Wir haben viele dieser Attribute bereits früher im Kurs gesehen, um jedoch zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength): Gibt die minimale und maximale Länge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max): Gibt die minimalen und maximalen Werte numerischer Eingabetypen an.
- [`type`](/de/docs/Web/HTML/Element/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreinstellungstyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, das die eingegebenen Daten folgen müssen.

Wenn die in ein Formularfeld eingegebenen Daten alle durch die obigen Attribute festgelegten Regeln erfüllen, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gelten folgende Dinge:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, die es Ihnen ermöglicht, einen spezifischen Stil auf gültige Elemente anzuwenden.
- Wenn der Benutzer versucht, die Daten zu senden, wird der Browser das Formular übermitteln, vorausgesetzt, es gibt nichts anderes, das dies verhindert (z.B. JavaScript).

Wenn ein Element ungültig ist, gelten folgende Dinge:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse und manchmal anderen UI-Pseudoklassen (z.B. {{cssxref(":out-of-range")}}) je nach Fehler, wodurch Sie einen spezifischen Stil auf ungültige Elemente anwenden können.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser das Formular und zeigt eine Fehlermeldung an.

> [!NOTE]
> Es gibt mehrere Fehler, die verhindern, dass das Formular eingereicht wird, einschließlich eines {{domxref('validityState.badInput', 'badInput')}}, {{domxref('validityState.patternMismatch','patternMismatch')}}, {{domxref('validityState.rangeOverflow','rangeOverflow')}} oder {{domxref('validityState.rangeUnderflow','rangeUnderflow')}}, {{domxref('validityState.stepMismatch','stepMismatch')}}, {{domxref('validityState.tooLong','tooLong')}} oder {{domxref('validityState.tooShort','tooShort')}}, {{domxref('validityState.typeMismatch','typeMismatch')}}, {{domxref('validityState.valueMissing','valueMissing')}}, oder ein {{domxref('validityState.customError','customError')}}.

## Beispiele für die eingebettete Formularvalidierung

In diesem Abschnitt werden wir einige der oben angesprochenen Attribute testen.

### Einfacher Startdatei

Beginnen wir mit einem einfachen Beispiel: ein [[HTMLElement("input")]]-Element, das Ihnen ermöglicht, auszuwählen, ob Sie eine Banane oder eine Kirsche bevorzugen. Dieses Beispiel umfasst ein einfaches {{HTMLElement("input")}}-Element mit einem zugeordneten {{htmlelement("label")}} und einem {{htmlelement("button")}}. Sie finden den Quellcode auf GitHub unter [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) und ein Live-Beispiel unten.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i-like" />
  <button>Submit</button>
</form>
```

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Simple_start_file", "100%", 80)}}

Beginnen Sie damit, eine Kopie von `fruit-start.html` in ein neues Verzeichnis auf Ihrer Festplatte zu erstellen.

### Das required-Attribut

Die einfachste HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut. Um eine Eingabe verpflichtend zu machen, fügen Sie dieses Attribut dem Element hinzu. Wenn dieses Attribut festgelegt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse, und das Formular wird nicht gesendet, wenn die Eingabe leer ist, während eine Fehlermeldung angezeigt wird. Solange es leer ist, gilt die Eingabe auch als ungültig und entspricht der {{cssxref(':invalid')}} UI-Pseudoklasse.

Fügen Sie Ihrer Eingabe ein `required`-Attribut hinzu, wie unten gezeigt.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

Beachten Sie das CSS, das in der Beispieldatei enthalten ist:

```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

Dieses CSS bewirkt, dass die Eingabe einen roten gestrichelten Rand hat, wenn sie ungültig ist, und einen subtileren schwarzen Rand, wenn sie gültig ist. Wir haben auch ein Hintergrundgradienten hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html).

Versuchen Sie, das Formular ohne einen Wert abzusenden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält, eine Standardfehlermeldung ("Please fill out this field") erscheint und das Formular daran gehindert wird, gesendet zu werden.

Das Vorhandensein des `required`-Attributs an einem Element, das dieses Attribut unterstützt, bedeutet, dass das Element der {{cssxref(':required')}}-Pseudoklasse entspricht, unabhängig davon, ob es einen Wert hat oder nicht. Wenn das {{HTMLElement("input")}} keinen Wert hat, entspricht `input` der {{cssxref(':invalid')}}-Pseudoklasse.

> [!NOTE]
> Für eine gute Benutzererfahrung sollten Sie dem Benutzer anzeigen, wenn Formularfelder erforderlich sind. Dies ist nicht nur eine gute Benutzererfahrung, sondern auch gemäß den WCAG [Barrierefreiheits](/de/docs/Learn/Accessibility)-Richtlinien erforderlich. Fordern Sie die Benutzer nur auf, Daten einzugeben, die Sie tatsächlich benötigen: zum Beispiel, warum müssen Sie wirklich das Geschlecht oder den Titel einer Person wissen?

### Validierung gegen einen regulären Ausdruck

Eine weitere nützliche Validierungsfunktion ist das [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut, welches einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) als Wert erwartet. Ein regulärer Ausdruck (regexp) ist ein Muster, das verwendet werden kann, um Zeichenkombinationen in Textzeichenfolgen zu finden. Daher eignen sich Regexps ideal für die Formularvalidierung und haben eine Vielzahl anderer Verwendungsmöglichkeiten in JavaScript.

Regexps sind ziemlich komplex, und wir beabsichtigen nicht, sie in diesem Artikel ausführlich zu behandeln. Nachfolgend einige Beispiele, um Ihnen eine grundlegende Vorstellung davon zu geben, wie sie funktionieren.

- `a` — Entspricht einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, wahlweise gefolgt von einem einzelnen `b`, gefolgt von `c`. (`ac` oder `abc`)
- `ab*c` — Entspricht `a`, wahlweise gefolgt von einer beliebigen Anzahl von `b`s, gefolgt von `c`. (`ac`, `abc`, `abbbbbc` usw.)
- `a|b` — Entspricht einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht behandeln. Eine vollständige Liste und viele Beispiele finden Sie in unserer [Dokumentation zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Lassen Sie uns ein Beispiel implementieren. Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Attributes/pattern)-Attribut wie folgt hinzuzufügen:

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Das ergibt das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-pattern.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).)

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es so gestaltet, dass es sowohl Groß- als auch Kleinbuchstaben-Versionen durch ein zusätzliches "Aa"-Muster unterstützt, das in eckige Klammern eingeschlossen ist.

Weiter geht es mit weiteren Beispielen:

### Einschränkung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller durch {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mithilfe der Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) einschränken. Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen hat als der Wert für [`minlength`](/de/docs/Web/HTML/Attributes/minlength) oder mehr als der Wert für [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength).

Browser lassen Benutzer häufig keine längeren Werte als erwartet in Textfeldern eingeben. Eine bessere Benutzererfahrung als nur `maxlength` zu verwenden, besteht darin, auch eine Zeichenanzahl-Rückmeldung auf barrierefreie Weise bereitzustellen und ihnen zu ermöglichen, ihren Inhalt entsprechend zu bearbeiten. Ein Beispiel hierfür ist die Zeichenbeschränkung beim Posten in sozialen Medien. JavaScript, einschließlich [Lösungen mit `maxlength`](https://github.com/mimo84/bootstrap-maxlength), kann verwendet werden, um dies bereitzustellen.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert festgelegt wird. Sie werden nur für benutzergenerierte Eingaben gemeldet.

### Einschränkung der Werte Ihrer Einträge

Für Zahlenfelder (z.B. [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)) können die Attribute [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) verwendet werden, um einen Bereich gültiger Werte festzulegen. Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, ist es ungültig.

Lassen Sie uns ein weiteres Beispiel betrachten. Erstellen Sie eine neue Kopie der Datei [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html).

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, was der gleichen Länge wie "banana" und "cherry" entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben. Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Inkrement-/Dekrementpfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu ändern. Wenn der Benutzer manuell eine Zahlenfolge außerhalb dieses Bereichs eingibt, sind die Daten ungültig. Die Zahl ist nicht erforderlich, daher führt das Entfernen des Wertes weiterhin zu einem gültigen Wert.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Hier läuft das Beispiel live:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [fruit-length.html](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

> **Hinweis:** `<input type="number">` (und andere Typen, wie `range` und `date`) können auch ein [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut aufnehmen, das angibt, in welchem Inkrement der Wert erhöht oder verringert wird, wenn die Eingabekontrollen verwendet werden (wie die Auf- und Ab-Nummer-Tasten). Im obigen Beispiel haben wir kein `step`-Attribut hinzugefügt, daher ist der Wert standardmäßig `1`. Das bedeutet, dass Fließkommazahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel, das die Verwendung der eingebauten Validierungsfunktionen von HTML zeigt. Zunächst etwas HTML:

```html
<form>
  <fieldset>
    <legend>
      Do you have a driver's license?<span aria-label="required">*</span>
    </legend>
    <!-- Während nur ein Optionsfeld in einer gleichnamigen Gruppe zu einem Zeitpunkt ausgewählt werden kann,
         und daher reicht es aus, wenn nur ein Optionsfeld in einer gleichnamigen Gruppe das "required"
         Attribut besitzt, um eine Auswahl zu einer Anforderung zu machen -->
    <input type="radio" required name="driver" id="r1" value="yes" /><label
      for="r1"
      >Yes</label
    >
    <input type="radio" required name="driver" id="r2" value="no" /><label
      for="r2"
      >No</label
    >
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <!-- Das Musterattribut kann als Fallback für Browser dienen, die die
         Zahl eingeben unterstützen, aber nicht das Musterattribut unterstützen.
         Bitte beachten Sie, dass Browser, die das Musterattribut unterstützen, es
         stillschweigend fehlschlagen lassen, wenn es mit einem Zahlenfeld verwendet wird.
         Seine Verwendung hier dient nur als Fallback -->
    <input
      type="number"
      min="12"
      max="120"
      step="1"
      id="n1"
      name="age"
      pattern="\d+" />
  </p>
  <p>
    <label for="t1"
      >What's your favorite fruit?<span aria-label="required">*</span></label
    >
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" />
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your email address?</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

Und nun etwas CSS, um das HTML zu stylen:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Siehe [Validierungsbezogene Attribute](/de/docs/Web/HTML/Constraint_validation#validation-related_attributes) für eine vollständige Liste der Attribute, die zur Einschränkung von Eingabewerten und zu unterstützenden Eingabetypen verwendet werden können.

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [full-example.html](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).)

## Validierung von Formularen mit JavaScript

Wenn Sie die Kontrolle über das Aussehen und das Verhalten der nativen Fehlermeldungen übernehmen möchten, müssen Sie JavaScript verwenden. In diesem Abschnitt werden wir uns die verschiedenen Möglichkeiten dafür ansehen.

### Die Constraint Validation API

Die Constraint Validation API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Element/button) Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Element/fieldset) Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Element/input) Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Element/output) Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Element/select) Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Element/textarea) Element)

Die Constraint Validation API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Wenn die Steuerung nicht für eine Validierung in Frage kommt (`willValidate` ist `false`) oder der Wert des Elements seinen Einschränkungen entspricht (gültig ist), wird dies ein leerer String zurückgeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das einige Eigenschaften enthält, welche den Gültigkeitsstatus des Elements beschreiben. Eine vollständige Liste aller verfügbaren Eigenschaften finden Sie auf der {{domxref("ValidityState")}}-Referenzseite; unten sind einige der gebräuchlicheren aufgeführt:

  - {{domxref("ValidityState.patternMismatch", "patternMismatch")}}: Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Element/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - {{domxref("ValidityState.tooLong", "tooLong")}}: Gibt `true` zurück, wenn der Wert länger ist, als die durch das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut festgelegte maximale Länge, oder `false`, wenn er kürzer oder gleich der maximalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - {{domxref("ValidityState.tooShort", "tooShort")}}: Gibt `true` zurück, wenn der Wert kürzer ist, als die durch das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut festgelegte minimale Länge, oder `false`, wenn er größer oder gleich der minimalen Länge ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}: Gibt `true` zurück, wenn der Wert größer ist, als das maximale durch das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut festgelegte Maximum, oder `false`, wenn es kleiner oder gleich dem Maximum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}: Gibt `true` zurück, wenn der Wert kleiner ist als das minimale durch das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut festgelegte Minimum, oder `false`, wenn es größer oder gleich dem Minimum ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - {{domxref("ValidityState.typeMismatch", "typeMismatch")}}: Gibt `true` zurück, wenn der Wert nicht in der erforderlichen Syntax vorliegt (wenn [`type`](/de/docs/Web/HTML/Element/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungseinschränkungen erfüllt und daher als gültig angesehen wird, oder `false`, wenn es eine Einschränkung nicht erfüllt. Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; die {{cssxref(":invalid")}} CSS-Pseudoklasse andernfalls.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Element/input#required) Attribut hat, aber keinen Wert, oder `false` andernfalls. Wenn `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element validiert wird, sobald das Formular gesendet wird; andernfalls `false`.

Die Constraint Validation API stellt auch die folgenden Methoden für die oben genannten Elemente und das [`form`](/de/docs/Web/HTML/Element/form) Element zur Verfügung:

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` Event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Feld(er) mit Ereignissen. Diese Methode ist in Kombination mit `preventDefault()` in einem `onSubmit`-Ereignishandler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; Wenn Sie eine benutzerdefinierte Fehlermeldung festlegen, wird das Element als ungültig angesehen und die angegebene Fehlermeldung wird angezeigt. Dies ermöglicht Ihnen die Verwendung von JavaScript-Code zur Feststellung eines Validierungsfehlers, die über die Standard-HTML-Validierungseinschränkungen hinausgeht. Die Meldung wird dem Benutzer beim Melden des Problems angezeigt.

#### Eine angepasste Fehlermeldung implementieren

Wie Sie in den vorherigen Beispielen zu HTML-Validierungseinschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular einzureichen, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keine Standardmethode, um deren Aussehen mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, während eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie im folgenden Firefox-Screenshot zu sehen.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist eine der häufigsten Anwendungsfälle der Constraint Validation API. Lassen Sie uns ein einfaches Beispiel zum Erstellen einer solchen Nachricht durchgehen.

Wir beginnen mit etwas einfachem HTML (fühlen Sie sich frei, dies in eine leere HTML-Datei zu setzen; verwenden Sie eine frische Kopie von [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) als Basis, wenn Sie möchten):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Und fügen Sie die folgende JavaScript-Datei zur Seite hinzu:

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

Hier speichern wir eine Referenz zur E-Mail-Eingabe und fügen dann einen Ereignislistener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Wert innerhalb der Eingabe ändert.

Innerhalb des enthaltenen Codes überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer korrekt formatierten E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die {{domxref("HTMLInputElement.setCustomValidity()","setCustomValidity()")}}-Methode mit einer benutzerdefinierten Nachricht auf. Dadurch wird die Eingabe ungültig, sodass, wenn Sie versuchen, das Formular einzureichen, die Übermittlung fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die Methode `setCustomValidity()` mit einem leeren String auf. Dadurch wird die Eingabe gültig, sodass das Formular übermittelt wird.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).)

#### Ein detaillierteres Beispiel

Jetzt, da wir ein wirklich einfaches Beispiel gesehen haben, sehen wir, wie wir diese API verwenden können, um etwas komplexere benutzerdefinierte Validierungsfunktionen zu erstellen.

Zuerst das HTML. Fühlen Sie sich erneut frei, dies zusammen mit uns zu erstellen:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Dieses einfache Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren; dadurch kann unser Skript die Kontrolle über die Validierung übernehmen. Dies schränkt jedoch nicht die Unterstützung der Constraint Validation API oder die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} usw. ein. Das bedeutet, dass, auch wenn der Browser die Gültigkeit des Formulars vor dem Senden der Daten nicht automatisch überprüft, Sie dies dennoch selbst tun und das Formular entsprechend stylen können.

Unsere Eingabe, die validiert wird, ist eine [`<input type="email">`](/de/docs/Web/HTML/Element/input/email), die `required` ist und eine `minlength` von 8 Zeichen aufweist. Lassen Sie uns dies mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede anzeigen.

Wir beabsichtigen, die Fehlermeldungen in einem `<span>`-Element anzuzeigen. Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attribut ist auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung jedem präsentiert wird, einschließlich dem Vorlesen für Bildschirmleser-Benutzer.

> [!NOTE]
> Ein wesentlicher Punkt hier ist, dass das Setzen des `novalidate`-Attributs auf das Formular das ist, was das Formular daran hindert, seine eigenen Fehlermeldungsblasen anzuzeigen, und uns ermöglicht, die benutzerdefinierten Fehlermeldungen stattdessen auf eine von uns gewählte Weise im DOM anzuzeigen.

Jetzt ein bisschen CSS, um das Aussehen des Formulars ein wenig zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* Dies ist unser Stil für die ungültigen Felder */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* Dies ist der Stil unserer Fehlermeldungen */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Schauen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlerprüfung implementiert.

```js
// Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen; hier holen wir das Formular selbst und das E-Mail
// Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Jedes Mal, wenn der Benutzer etwas eingibt, überprüfen wir, ob die
  // Formularfelder gültig sind.

  if (email.validity.valid) {
    // Falls eine Fehlermeldung sichtbar ist, entfernen wir sie,
    // wenn das Feld gültig ist.
    emailError.textContent = ""; // Den Inhalt der Nachricht zurücksetzen
    emailError.className = "error"; // Den visuellen Status der Nachricht zurücksetzen
  } else {
    // Wenn noch ein Fehler vorhanden ist, zeigen wir den richtigen Fehler an
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // Wenn das E-Mail-Feld gültig ist, lassen wir das Formular senden
  if (!email.validity.valid) {
    // Ist es nicht, zeigen wir eine passende Fehlermeldung an
    showError();
    // Dann verhindern wir, dass das Formular gesendet wird, indem wir das Ereignis abbrechen
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Wenn das Feld leer ist,
    // zeigen wir die folgende Fehlermeldung an.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // Wenn das Feld keine E-Mail-Adresse enthält,
    // zeigen wir die folgende Fehlermeldung an.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // Wenn die Daten zu kurz sind,
    // zeigen wir die folgende Fehlermeldung an.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Setze das Styling entsprechend
  emailError.className = "error active";
}
```

Die Kommentare erklären die Dinge ziemlich gut, aber kurz:

- Jedes Mal, wenn wir den Wert des Eingabefelds ändern, überprüfen wir, ob es gültige Daten enthält. Wenn es dies tut, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten ungültig sind, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen.
- Jedes Mal, wenn wir versuchen, das Formular zu übermitteln, überprüfen wir erneut, ob die Daten gültig sind. Wenn ja, lassen wir das Formular senden. Wenn nicht, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen, und verhindern mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), dass das Formular gesendet wird.
- Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, und zeigt dann eine geeignete Fehlermeldung an.

Hier ist das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

> [!NOTE]
> Sie können dieses Beispiel live auf GitHub unter [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) finden. Siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

Die Constraint Validation API gibt Ihnen ein leistungsfähiges Werkzeug zur Handhabung der Formularvalidierung, das Ihnen enorme Kontrolle über die Benutzeroberfläche gibt, weit über das hinaus, was Sie nur mit HTML und CSS tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie bei [benutzerdefinierten Steuerungen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), werden Sie möglicherweise nicht in der Lage sein oder nicht die Constraint Validation API verwenden wollen. Sie können weiterhin JavaScript verwenden, um Ihr Formular zu validieren, müssen aber Ihre eigene Logik schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen feststellen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typkonvertierung, reguläre Ausdrücke usw. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine UI-Angelegenheit. Sie müssen entscheiden, wie sich das Formular verhält. Soll das Formular die Daten trotzdem senden? Sollten Sie die Felder hervorheben, die in Fehler sind? Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?

  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich zu geben, um sie bei der Korrektur ihrer Eingaben zu unterstützen. Sie sollten Vorschläge im Voraus anbieten, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen. Wenn Sie in die UI-Anforderungen zur Formularvalidierung eintauchen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:

    - [Helfen Sie Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/validation/)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validation API nicht verwendet

Um dies zu veranschaulichen, folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast dasselbe; wir haben nur die HTML-Validierungsfunktionen entfernt.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="text" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Ebenso muss das CSS nicht sehr stark verändert werden; Wir haben die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Verwendung des Attributselectors vermieden.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input#mail {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* Dies ist unser Stil für die ungültigen Felder */
input#mail.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* Dies ist der Stil unserer Fehlermeldungen */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Die großen Änderungen erfolgen im JavaScript-Code, der wesentlich mehr Arbeit leisten muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// Gemäß der HTML-Spezifikation
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Nun können wir unsere Validierungsbeschränkung wieder aufbauen
// Da wir uns nicht auf eine CSS-Pseudoklasse verlassen, müssen wir die Klasse gültig/ungültig explizit auf unser E-Mail-Feld setzen
window.addEventListener("load", () => {
  // Hier testen wir, ob das Feld leer ist (denke daran, das Feld ist nicht erforderlich)
  // Wenn es nicht so ist, überprüfen wir, ob sein Inhalt eine gut formatierte E-Mail-Adresse ist.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// Dies definiert, was passiert, wenn der Benutzer etwas in das Feld eingibt
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// Dies definiert, was passiert, wenn der Benutzer versucht, die Daten zu übermitteln
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 130)}}

Wie Sie sehen können, ist es nicht so schwer, ein eigenes Validierungssystem zu erstellen. Die schwierige Aufgabe besteht darin, es so generisch zu gestalten, dass es sowohl plattformübergreifend als auch auf jedes Formular, das Sie erstellen könnten, angewendet werden kann. Es gibt viele Bibliotheken zur Durchführung der Formularvalidierung, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor es weitergeht — siehe [Testen Sie Ihre Fähigkeiten: Formularvalidierung](/de/docs/Learn/Forms/Test_your_skills:_Form_validation).

## Zusammenfassung

Die Formularvalidierung auf der Client-Seite erfordert manchmal JavaScript, wenn Sie das Styling und die Fehlermeldungen anpassen möchten, erfordert aber _immer_, dass Sie sorgfältig über den Benutzer nachdenken. Denken Sie immer daran, Ihren Benutzern bei der Korrektur der bereitgestellten Daten zu helfen. Zu diesem Zweck sollten Sie sicherstellen:

- Explizite Fehlermeldungen anzuzeigen.
- Nachsichtig mit dem Eingabeformat zu sein.
- Gena

- u anzugeben, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular übermittelt werden. Als Nächstes werden wir das [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) behandeln.

{{PreviousMenuNext("Learn/Forms/UI_pseudo-classes", "Learn/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
