---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Funktional sind sie identisch mit [`text`](/de/docs/Web/HTML/Element/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User-Agent")}} unterschiedlich gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, der den im Suchfeld enthaltenen Wert darstellt. Sie können diesen Wert mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Einzelheiten), kann der Wert jeder beliebige Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Listenwerte, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die Vorschlagsoptionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` festgelegt oder ein ungültiger Wert angegeben ist, gibt es keine maximale Länge für das Suchfeld. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` UTF-16-Code-Einheiten ist. Die Constraints-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem vom `maxlength` angegebenen Wert ist. Wenn kein `minlength` festgelegt oder ein ungültiger Wert angegeben ist, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Code-Einheiten beträgt. Die Constraints-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe zum Bestehen der [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) erfüllen muss. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Festlegen eines Musters](#festlegen_eines_musters) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art der Daten darstellt, anstatt einer erläuternden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung (LTR, RTL) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerungen für Bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch direkt durch JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der im Einsatz befindlichen Schriftart ({{cssxref("font")}}-Einstellungen).

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es legt nur annähernd fest, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf alle bearbeitbaren Inhalte angewendet werden, aber hier betrachten wir die Besonderheiten im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Präferenzen des {{Glossary("user_agent", "User-Agents")}} die Einstellung außer Kraft setzen.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind für Suchfeldeingaben verfügbar. Vermeiden Sie deren Verwendung, wo möglich.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also von Safari, Opera, Chrome usw. unterstützt), das, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Auf diese Weise kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

Das `search`-Ereignis wird mit einer Rate begrenzt, sodass es nicht häufiger als in einem von der Implementierung definierten Intervall gesendet wird.

### results

Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im native bereitgestellten Dropdown-Menü vorheriger Suchanfragen des {{HTMLElement("input")}}-Elements angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn er nicht angegeben wird oder ein ungültiger Wert angegeben wird, wird die Standard-Maximalanzahl von Einträgen des Browsers verwendet.

## Verwenden von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denjenigen vom Typ `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen vorgesehen sind. Sie sind hinsichtlich des Verhaltens im Wesentlichen gleichwertig, aber User-Agents können sich dafür entscheiden, sie standardmäßig unterschiedlich zu gestalten (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Stile zu verleihen).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies rendert sich wie folgt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der am häufigsten an Suchfelder angegebene `name`, obwohl er nicht zwingend erforderlich ist. Wenn das Formular eingereicht wird, wird der Datenname/-wert als `q=searchTerm` an den Server gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts übermittelt.

### Unterschiede zwischen Such- und Texttypen

Die Hauptunterschiede liegen in der Art und Weise, wie Browser sie behandeln. Als Erstes ist festzustellen, dass einige Browser ein Kreuzsymbol anzeigen, auf das geklickt werden kann, um den Suchbegriff sofort zu entfernen; in Chrome wird diese Aktion auch durch Drücken von Escape ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld mit Fokusrahmen, mit dem Text "Katzen". Es gibt ein x-Symbol im Eingabefeld am rechten Rand.](chrome-cross-icon.png)

Zudem speichern moderne Browser in der Regel automatisch zuvor eingegebene Suchbegriffe domänenübergreifend, die dann bei weiteren Suchen in Suchfeldern auf dieser Domäne als Autovervollständigungsoptionen angezeigt werden. Dies hilft Benutzern, die dazu neigen, über die Zeit hinweg dieselben oder ähnliche Suchanfragen durchzuführen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben "h" eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter in Ihre Sucheingabe einfügen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

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

Sie können sehen, wie der Platzhalter unten dargestellt wird:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Suchformular-Labels und Barrierefreiheit

Ein Problem mit Suchformularen ist ihre Barrierefreiheit; eine häufige Design-Praxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupen-Symbol oder Ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Screenreader-Benutzern Verwirrung stiften, da sie keine verbale Angabe darüber haben, was die Sucheingabe ist. Eine Möglichkeit, dies zu umgehen, ohne Ihr visuelles Design zu beeinflussen, besteht darin, [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Features zu verwenden:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element wird von Screenreadern angesagt, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut direkt am {{HTMLElement("input")}} verwenden. Dies sollte ein beschreibender Text sein, der vom Screenreader vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

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

Sie können sehen, wie dies unten dargestellt wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Screenreader-Benutzern stehen weitaus mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Wegweiser/Landmarken](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen zu solchen Barrierefreiheits-Features.

### Physikalische Eingabeelementgröße

Die physikalische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist beispielsweise das Suchfeld 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` haben die gleichen Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach alles suchen dürfen, aber es gibt ein paar Fälle, die berücksichtigt werden sollten, wie etwa Suchen nach Daten in einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihnen ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe führen, wenn fehlerhaft formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Gestaltung

Es gibt nützliche Pseudoklassen, die zum Gestalten gültiger/ungültiger Formularelemente verwendet werden können: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben platziert, die gültige Werte enthalten, und ein Kreuz neben denen mit ungültigen Werten.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement eingefügt wird und als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetypen bei einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut als einfache Möglichkeit verwenden, das Eingeben eines Wertes erforderlich zu machen, bevor das Formular abgeschickt werden darf:

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

Dies rendert sich wie folgt:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Zusätzlich wird, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzuschicken, eine Meldung im Browser angezeigt. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit einer angehängten Meldung, die sagt: Bitte füllen Sie dieses Feld aus.](firefox-required-message.png)

Unterschiedliche Meldungen werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten in den Eingabefeldern einzureichen; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut festlegen; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert eine Länge zwischen 4 und 8 Zeichen hat.

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

Dies rendert sich wie folgt:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, über 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Festlegen eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig zu gelten (siehe [Validierung mit einem regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für eine kurze Einführung).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Produkt-ID-Suchformular bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Dies rendert sich wie folgt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Sie können ein gutes Beispiel für ein Suchformular im Kontext auf unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel sehen ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Suchfeld
        enthaltenen Wert darstellt.
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
        <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>.
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methode</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
    </tr>
     <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>ohne <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role">searchbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der sie basieren
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
