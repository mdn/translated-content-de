---
title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer konzipiert sind. Sie sind funktional identisch mit [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingaben, können jedoch vom {{Glossary("user_agent", "user agent")}} unterschiedlich gestaltet werden.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;search&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q" />

<button>Search</button>
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut enthält einen String, der den im Suchfeld enthaltenen Wert repräsentiert. Sie können dies mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert beliebiger Text oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}} Elements. Das {{HTMLElement("datalist")}} bietet eine Liste mit vordefinierten Werten, die dem Benutzer als Vorschläge für diese Eingabe angeboten werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Stringlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungs-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert kleiner oder gleich dem durch `maxlength` spezifizierten Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld schlägt bei der [Einschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungs-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern` Attribut, falls angegeben, ist ein regulärer Ausdruck, den der `value` der Eingabe (siehe [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)) erfüllen muss, damit der Wert die [Einschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um Text anzugeben, der in den meisten Browsern als Tooltip angezeigt wird, um zu erläutern, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einschließen.

Siehe den Abschnitt [Festlegen eines Musters](#angeben_eines_musters) für Details und ein Beispiel.

### placeholder

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschubrücke enthalten.

Wenn der Inhalt der Kontrolle eine bestimmte Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Formatierungszeichen für die bidirektionale Algorithmusformatierung verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder` Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code, der direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### size

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da die Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, dass es so ist; die resultierende Eingabe kann je nach den Zeichen und der Schriftart breiter oder schmaler als die angegebene Anzahl von Zeichen sein ({{cssxref("font")}} Einstellungen in Verwendung).

Dies setzt _keine_ Begrenzung dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig sichtbar sein können. Um ein Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das angibt, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die spezifische Verwendung von `spellcheck` auf {{HTMLElement("input")}} Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Befolgen Sie das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen der Eltern oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Kontrolle wider, wenn die Einstellungen des {{Glossary("user_agent", "user agents")}} die Einstellung außer Kraft setzen.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind für Suchfeldeingaben verfügbar.
Vermeiden Sie ihre Verwendung, wo möglich.

### incremental

Das Boolean-Attribut `incremental` ist eine Erweiterung von WebKit und Blink (also von Safari, Opera, Chrome usw. unterstützt). Wenn es vorhanden ist, teilt es dem {{Glossary("user_agent", "user agent")}} mit, dass die Eingaben als Live-Suche verarbeitet werden sollen. Während der Benutzer den Wert des Feldes bearbeitet, sendet der user agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer eine Suche ausdrücklich initiiert (zum Beispiel durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste beim Bearbeiten des Feldes).

Das `search` Ereignis ist so rate-limitiert, dass es nicht häufiger als in einem Implementierungsdefinierten Intervall gesendet wird.

### results

Das `results` Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl an Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}} Elements mit früheren Suchanfragen angezeigt werden sollen.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>` Elemente vom Typ `search` sind den Elementen vom Typ `text` sehr ähnlich, außer dass sie speziell für die Bearbeitung von Suchbegriffen gedacht sind. Ihr Verhalten ist grundsätzlich gleich, aber Benutzeragenten können sich dafür entscheiden, sie standardmäßig anders zu gestalten (und natürlich können Webseiten mit CSS eigene Stile darauf anwenden).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der am häufigsten vergebene `name` für Sucheingaben, obwohl es nicht obligatorisch ist. Wenn das Formular übermittelt wird, wird das Daten-Namens/Wert-Paar zum Server mit `q=searchTerm` gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts übermittelt.

### Unterschiede zwischen den Typen „search“ und „text“

Die wichtigsten grundlegenden Unterschiede liegen in der Art und Weise, wie Browser sie behandeln. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen, falls gewünscht. In Chrome wird diese Aktion auch ausgelöst, wenn Escape gedrückt wird. Das folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusrahmen, mit dem Text 'cats'. Es gibt ein x-Symbol in der Eingabe, das an der rechten Seite anliegt.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser in der Regel automatisch Suchbegriffe, die zuvor domänenübergreifend eingegeben wurden und die dann bei nachfolgenden Suchvorgängen in Sucheingaben auf dieser Domäne als Autovervollständigungsoptionen erscheinen. Dies hilft Benutzern, die dazu neigen, im Laufe der Zeit ähnliche Suchanfragen durchzuführen. Dieses Screenshot ist von Firefox:

![Ein Eingabefeld im Fehlerzustand mit rotem Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet, mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt werfen wir einen Blick auf einige nützliche Techniken, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter in Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

```html
<form>
  <div>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search the site…" />
    <button>Search</button>
  </div>
</form>
```

Sie können unten sehen, wie der Platzhalter gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Suchformular-Etiketten und Zugänglichkeit

Ein Problem bei Suchformularen ist ihre Zugänglichkeit; eine gängige Designpraxis ist es, dem Suchfeld kein Etikett zu geben (obwohl möglicherweise ein Lupen-Symbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch Verwirrung für Benutzer von Bildschirmlesegeräten verursachen, da sie keine verbale Angabe darüber haben, was die Suchfunktion ist. Eine Möglichkeit, dies zu umgehen, ohne Ihr visuelles Design zu beeinträchtigen, besteht darin, [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) Funktionen zu verwenden:

- Ein `role` Attribut mit dem Wert `search` auf dem `<form>` Element führt dazu, dass Bildschirmleser ankündigen, dass das Formular ein Suchformular ist.
- Falls das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut an der {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es dient als nicht-visuelles Äquivalent zu `<label>`.

Schauen wir uns ein Beispiel an:

```html
<form role="search">
  <div>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search the site…"
      aria-label="Search through site content" />
    <button>Search</button>
  </div>
</form>
```

Sie können unten sehen, wie dies gerendert wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Benutzer von Bildschirmlesegeräten haben wesentlich mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Wegweiser/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen über solche Zugänglichkeitsmerkmale.

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel beispielsweise ist das Suchfeld 30 Zeichen breit:

```html
<form>
  <div>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search the site…"
      size="30" />
    <button>Search</button>
  </div>
</form>
```

Das Ergebnis ist dieses breitere Eingabefeld:

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

## Validierung

`<input>` Elemente vom Typ `search` haben die gleichen Validierungsfunktionen wie normale `text` Eingaben. Es ist weniger wahrscheinlich, dass Sie in Suchfeldern allgemein Validierungsfunktionen verwenden möchten. In vielen Fällen sollten Benutzer einfach alles suchen dürfen, aber es gibt einige Fälle zu berücksichtigen, wie Suchvorgänge gegen Daten in einem bekannten Format.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu katastrophalen Problemen kommen, wenn nicht korrekt formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Gestaltung

Es gibt nützliche Pseudoklassen zum Gestalten von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingaben enthält, die gültige Werte enthalten, und ein Kreuz neben Eingaben, die ungültige Werte enthalten.

```css
input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Die Technik erfordert auch, dass ein {{htmlelement("span")}} Element nach dem Formularelement platziert wird, das als Halter für die Symbole fungiert. Dies war erforderlich, weil einige Eingabetypen in einigen Browsern Symbole, die direkt danach platziert werden, nicht sehr gut anzeigen.

### Eingabe notwendig machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um auf einfache Weise sicherzustellen, dass vor dem Absenden des Formulars ein Wert eingegeben werden muss:

```html
<form>
  <div>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search the site…"
      required />
    <button>Search</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Dies rendert wie folgt:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Außerdem zeigt der Browser eine Meldung an, wenn Sie versuchen, das Formular ohne Eingabe eines Suchbegriffs abzusenden. Das folgende Beispiel ist aus Firefox:

![Formularfeld mit angefügter Meldung, die besagt: 'Bitte dieses Feld ausfüllen'](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten in den Eingaben abzusenden; siehe die Beispiele unten.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut angeben; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4–8 Zeichen lang ist.

```html
<form>
  <div>
    <label for="mySearch">Search for user</label>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="User IDs are 4–8 characters in length"
      required
      size="30"
      minlength="4"
      maxlength="8" />
    <button>Search</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Dies rendert wie folgt:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen einzureichen, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Angeben eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Suchformular für Produkt-IDs bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

```html
<form>
  <div>
    <label for="mySearch">Search for product by ID:</label>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="two letters followed by four numbers"
      required
      size="30"
      pattern="[A-z]{2}[0-9]{4}" />
    <button>Search</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Dies rendert wie folgt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Ein gutes Beispiel für ein Suchformular im Kontext finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Suchfeld enthaltenen Wert repräsentiert.
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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>.
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>value</code></td>
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
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>ohne <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role">searchbox</a></code></td>
      <td>mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
