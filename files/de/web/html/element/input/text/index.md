---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erzeugen einfache einzeilige Textfelder.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

### `maxlength`

Die maximale Länge des Strings (gemessen in UTF-16-Codeeinheiten), den der Benutzer in das `text`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `text`-Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt fehl bei der [Validierung von Beschränkungen](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des Textwertes des Feldes länger als `maxlength` UTF-16-Codeeinheiten ist. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Länge des Strings (gemessen in UTF-16-Codeeinheiten), den der Benutzer in das `text`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem beim `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe schlägt fehl bei der [Validierung von Beschränkungen](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des eingegebenen Textes in das Feld weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Beschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der Eingabewert für die [Validierung von Beschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllen muss. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks spezifiziert, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um den Mustertext sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe hinzufügen.

Siehe [Angeben eines Musters](#ein_muster_angeben) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Zugänglichkeitsprobleme](/de/docs/Web/HTML/Element/input#accessibility) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch geändert werden, indem JavaScript-Code direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da sich die Breite von Zeichen unterscheidet, ist dies möglicherweise nicht genau und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann je nach den Zeichen und der verwendeten Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _keine_ Begrenzung darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es wird nur ungefähr angegeben, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck)-Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jeden bearbeitbaren Inhalt angewendet werden, hier betrachten wir jedoch die Besonderheiten in Bezug auf die Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Rechtschreibprüfung für dieses Element deaktivieren.
- `true`
  - : Rechtschreibprüfung für dieses Element aktivieren.
- `""` (leerer String) oder kein Wert
  - : Folgen Sie dem Standardeinstellungen des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen des übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn das [readonly](#readonly)-Attribut nicht gesetzt ist und es nicht deaktiviert ist.

Der Wert, der durch Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerungselements wider, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung außer Kraft setzen.

## Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind auch auf einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, es ist nicht anders möglich.

### `autocorrect`

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls welche konfiguriert sind.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textsubstitutionen.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erzeugen einfache, einzeilige Eingabefelder. Sie sollten sie überall dort verwenden, wo der Benutzer einen einzeiligen Wert eingeben soll und kein spezifischeres Eingabefeld zum Sammeln dieses Werts verfügbar ist (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail](/de/docs/Web/HTML/Element/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Element/input/search) handelt, stehen Ihnen bessere Optionen zur Verfügung).

### Einfaches Beispiel

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Beim Absenden werden die Datennamen-/Wertepaare an den Server `name=Chris` gesendet (wenn "Chris" als Eingabewert vor der Übermittlung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut beim {{HTMLElement("input")}}-Element einzufügen, andernfalls wird der Wert des Textfelds nicht mit den übermittelten Daten einbezogen.

### Platzhalter festlegen

Sie können einen hilfreichen Platzhalter in Ihrem Texteingabefeld bereitstellen, der einen Hinweis darauf gibt, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Betrachten Sie das folgende Beispiel:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Lower case, all one word" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

Anhand des folgenden Renderings:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird normalerweise in einer helleren Farbe als die Vordergrundfarbe des Elements gerendert und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmatisch durch Setzen des `value`-Attributs gesetzt wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Texteingabe gleichzeitig anzeigen kann. Dies beeinflusst die Breite des Elements, sodass Sie die Breite in Form von Zeichen anstelle von Pixeln angeben können. In diesem Beispiel ist das Eingabefeld 30 Zeichen breit:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Lower case, all one word"
      size="30" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{EmbedLiveSample('Physical_input_element_size', 600, 80)}}

## Validierung

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung für sie angewendet (da eine einfache Texteingabe in der Lage sein muss, jeden beliebigen String zu akzeptieren), aber es gibt einige clientseitige Validierungsoptionen, die wir unten besprechen werden.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist allzu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß, vom falschen Typ usw. sind) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Gestaltung

Es gibt nützliche Pseudoklassen, die zur Gestaltung von Formularelementen zur Verfügung stehen, um dem Benutzer zu helfen zu sehen, wann ihre Werte gültig oder ungültig sind. Dies sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben bei gültigen Werten und ein Kreuz (X) bei ungültigen Werten anzeigt.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetypen in einigen Browsern keine direkt dahinter platzierten Symbole gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut als einfache Möglichkeit verwenden, um das Eingeben eines Werts vor der Formularübermittlung erforderlich zu machen:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff zu übermitteln, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs angeben; analog dazu verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4-8 Zeichen lang ist.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="Username"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie eine `minlength` angeben, jedoch keine `required`, wird die Eingabe als gültig angesehen, da der Benutzer keinen Wert angeben muss.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Crashkurs zur Validierung von Eingaben mit regulären Ausdrücken).

Das folgende Beispiel reduziert den Wert auf 4-8 Zeichen und erfordert, dass er nur Kleinbuchstaben enthält.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}" />
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Sie können gute Beispiele für Texteingaben in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form) und [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn/Forms/How_to_structure_a_web_form) sehen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Textfeld
        enthaltenen Text repräsentiert.
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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), auf der es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
