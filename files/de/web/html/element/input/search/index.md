---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`search`** sind Textfelder, in die der Benutzer Suchanfragen eingeben kann. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text) Eingaben, können jedoch vom {{Glossary("user_agent", "Benutzeragenten")}} unterschiedlich gestaltet werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut enthält eine Zeichenfolge, die den im Suchfeld enthaltenen Wert darstellt. Sie können diesen Wert in JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value) Eigenschaft abrufen.

```js
searchTerms = mySearch.value;
```

Wenn für die Eingabe keine Validierungsbeschränkungen gelten (siehe [Validierung](#validierung) für weitere Details), kann der Wert jede beliebige Textzeichenfolge oder eine leere Zeichenfolge (`""`) sein.

## Zusätzliche Attribute

Neben den Attributen, die für alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ gelten, unterstützen Sucheingaben die folgenden Attribute.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer als Vorschläge für diese Eingabe angezeigt werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Suchfeld eingeben muss. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` angegeben wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Sucheingabe keine minimale Länge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codierungspunkten und nicht als {{Glossary("ASCII", "ASCII")}} betrachtet wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch zusätzlichen erläuternden Text in der Nähe hinzufügen.

Weitere Einzelheiten und ein Beispiel finden Sie im Abschnitt [Ein Muster angeben](#ein_muster_festlegen).

### placeholder

Das `placeholder` Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp verdeutlicht, anstatt eine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenwechsel enthalten.

Wenn der Inhalt der Steuerung eine bestimmte Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Schreibrichtung angezeigt werden muss, können Sie das Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Schreibrichtung innerhalb des Platzhalters zu überschreiben; siehe [Wie Unicode-Steuerelemente für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es nach Möglichkeit, das `placeholder` Attribut zu verwenden. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Dessen `value` kann jedoch weiterhin durch JavaScript-Code direkt über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit dem ebenfalls angegebenen `readonly` Attribut.

### size

Das `size` Attribut ist ein Zahlenwert, der anzeigt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies ungenau sein und sollte nicht als genau betrachtet werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen im Einsatz).

Dieses Attribut _legt kein_ Limit dafür fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig angezeigt werden können. Um ein oberes Limit für die Eingabelänge festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann bei allen bearbeitbaren Inhalten verwendet werden, doch hier betrachten wir die spezifische Verwendung von `spellcheck` bei {{HTMLElement("input")}} Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenfolge) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann von der `spellcheck` Einstellung eines übergeordneten Elements oder anderen Faktoren abhängen.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut gesetzt hat und nicht deaktiviert ist.

Der von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung in einem Steuerungselement wider, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellungen außer Kraft setzen.

## Nicht-Standard-Attribute

Die folgenden nicht standardisierten Attribute sind für Sucheingabefelder verfügbar. Generell sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht verhindern.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect` Attribut ist eine Zeichenfolge, die angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Erlaubte Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textersetzungen, wenn welche konfiguriert sind.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textersetzungen.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die, wenn sie vorhanden ist, dem {{Glossary("user_agent", "Benutzeragenten")}} mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (wie z.B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste beim Bearbeiten des Feldes).

Das `search`-Ereignis ist ratenbegrenzt, sodass es nicht häufiger als in einem vom Implementierer definierten Intervall gesendet wird.

### results

Das `results` Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen erlaubt, die maximale Anzahl von Einträgen, die im nativ bereitgestellten Drop-down-Menü des {{HTMLElement("input")}} Elements für vorherige Suchanfragen angezeigt werden, zu überschreiben.

Der Wert muss eine nicht negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben, wird die maximal Anzahl der Einträge nach den Standardeinstellungen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>` Elemente vom Typ `search` sind denjenigen vom Typ `text` sehr ähnlich, mit der Ausnahme, dass sie speziell für die Handhabung von Suchbegriffen gedacht sind. Sie sind im Verhalten grundsätzlich gleichwertig, aber Benutzeragenten können sie standardmäßig unterschiedlich gestalten (und natürlich können Webseiten Stylesheets verwenden, um ihnen benutzerdefinierte Stile zu verleihen).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

So wird dies dargestellt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der gebräuchlichste `name`, der Sucheingaben gegeben wird, obwohl ist nicht zwingend vorgeschrieben. Wenn übermittelt, wird das Datenname/Wert-Paar an den Server gesendet als `q=searchTerm`.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, da sonst nichts übermittelt wird.

### Unterschiede zwischen Such- und Texttypen

Die Hauptunterschiede liegen in der Art und Weise, wie Browser sie behandeln. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, auf das geklickt werden kann, um den Suchbegriff sofort zu entfernen, wenn gewünscht; in Chrome wird diese Aktion auch ausgelöst, wenn Escape gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusring, mit dem Text "cats". Rechts befindet sich ein x-Symbol im Eingabefeld.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser Suchbegriffe, die zuvor domänenübergreifend eingegeben wurden, automatisch, was dann als Autovervollständigungsoptionen angezeigt wird, wenn bei nachfolgenden Suchen in Suchfeldern auf dieser Domäne gesucht wird. Dies hilft Benutzern, die häufig auf demselben oder ähnlichen Suchanfragen über die Zeit suchen. Dieser Screenshot stammt von Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An dieser Stelle schauen wir uns einige nützliche Techniken an, die Sie zu Ihren Suchformularen anwenden können.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Sie können sehen, wie der Platzhalter unten gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Suchformular-Labels und Barrierefreiheit

Ein Problem bei Suchformularen ist ihre Barrierefreiheit; eine gängige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es ein Lupensymbol oder Ähnliches geben könnte), da der Zweck eines Suchformulars normalerweise für sehende Benutzer durch die Platzierung ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Screenreader-Benutzern Verwirrung stiften, da sie keine verbale Angabe darüber haben, was die Sucheingabe ist. Eine Möglichkeit, dies zu vermeiden, welche Ihr visuelles Design nicht beeinträchtigt, besteht darin, [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) Funktionen zu verwenden:

- Ein `role` Attribut mit dem Wert `search` auf dem `<form>` Element führt dazu, dass Screenreader ankündigen, dass das Formular ein Suchformular ist.
- Wenn dies nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte eine beschreibende Textbeschreibung sein, die vom Screenreader vorgelesen wird; es ist das non-visuelle Äquivalent zu `<label>`.

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

Sie können sehen, wie dies unten gerendert wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, jedoch haben Screenreader-Benutzer weit mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen barrierefreien Funktionen finden Sie unter [Wegweiser/Markierungen](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann durch das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen festlegen, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

{{EmbedLiveSample("Physical_input_element_size", 600, 40)}}

## Validierung

`<input>` Elemente vom Typ `search` verfügen über dieselben Validierungsfunktionen wie reguläre `text` Eingaben. Es ist weniger wahrscheinlich, dass Sie im Allgemeinen Validierungsfunktionen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, aber es gibt einige Fälle zu berücksichtigen, zum Beispiel Suche gegen Daten in einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übergibt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn nicht ordnungsgemäß formatierte Daten (oder zu große Daten, Daten des falschen Typs usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Gestaltung

Es gibt nützliche Pseudoklassen, die für das Styling von gültigen/ungültigen Formularelementen verfügbar sind: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingaben platziert, die gültige Werte enthalten, und ein Kreuz neben Eingaben mit ungültigen Werten.

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

Die Technik erfordert auch ein {{htmlelement("span")}} Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war erforderlich, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut als einfache Möglichkeit verwenden, die Eingabe eines Wertes vor der Formularübermittlung erforderlich zu machen:

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

So wird dies dargestellt:

{{EmbedLiveSample("Making_input_required", 600, 40)}}

Darüber hinaus zeigt der Browser eine Meldung an, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff zu übermitteln. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die besagt "Bitte füllen Sie dieses Feld aus"](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten innerhalb der Eingaben zu übermitteln; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut eine minimale Länge eingeben, in Zeichen, für den eingegebenen Wert festlegen; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

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

So wird dies dargestellt:

{{EmbedLiveSample("Input_value_length", 600, 40)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, über 8 Zeichen hinauszugehen, lässt es der Browser nicht zu.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen regulären Ausdruck festzulegen, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Überblick).

Schauen wir uns ein Beispiel an: Angenommen, wir möchten ein Suchformular für Produkt-IDs bereitstellen, und die IDs sind alle Codes aus zwei Buchstaben, gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

So wird dies dargestellt:

{{EmbedLiveSample("Specifying_a_pattern", 600, 40)}}

## Beispiele

Sie können ein gutes Beispiel für ein verwendetes Suchformular im Kontext in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)) sehen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den im Suchfeld enthaltenen Wert darstellt.
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>.
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>ohne <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role">searchbox</a></code></td>
      <td>mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
