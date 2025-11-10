---
title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

{{HTMLElement("input")}} Elemente des Typs **`search`** sind Textfelder, die für den Benutzer vorgesehen sind, um Suchanfragen einzugeben. Sie sind funktional identisch mit [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User-Agent")}} unterschiedlich gestylt werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, der den im Suchfeld enthaltenen Wert darstellt. Sie können diesen mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert spezifiziert wurde, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert spezifiziert wurde, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird angegeben, wenn der reguläre Ausdruck kompiliert wird, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um das Muster herum sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um einen Text festzulegen, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch andere erläuternde Texte in der Nähe einschließen.

Siehe den Abschnitt [Ein Muster festlegen](#ein_muster_festlegen) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn es geht. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch das Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies unter Umständen nicht exakt sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und dem genutzten Schriftbild ({{cssxref("font")}} Einstellungen).

Dies setzt _nicht_ die Anzahl der Zeichen fest, die der Benutzer in das Feld eingeben kann. Es legt nur fest, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Befolgt das Standardverhalten für die Rechtschreibprüfung des Elements. Dies kann auf der `spellcheck`-Einstellung des Elterndokuments oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Präferenzen des {{Glossary("user_agent", "User-Agents")}} die Einstellung überschreiben.

## Nicht-Standard-Attribute

Die folgenden, nicht standardisierten Attribute sind für Suchfeldeingaben verfügbar. Vermeiden Sie nach Möglichkeit deren Verwendung.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome usw.), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} sagt, die Eingabe als Live-Suche zu verarbeiten. Wenn der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht spezifiziert ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste während des Bearbeitens des Feldes).

Das `search`-Ereignis ist so rate-begrenzt, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

### results

Das `results`-Attribut — unterstützt nur von Safari — ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen des {{HTMLElement("input")}}-Elements angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert eingegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente des Typs `search` sind denjenigen des Typs `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen gedacht sind. Sie sind im Verhalten im Wesentlichen gleichwertig, aber User-Agents können sich entscheiden, sie standardmäßig unterschiedlich zu stylen (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Stile zu verleihen).

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

`q` ist der am häufigsten vergebene `name` für Sucheingaben, obwohl dies nicht zwingend erforderlich ist. Wenn man das Formular absendet, wird das Daten-Namen/Werte-Paar `q=searchTerm` zum Server gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts übermittelt.

### Unterschiede zwischen Such- und Texttypen

Die grundlegenden Unterschiede bestehen hauptsächlich in der Art und Weise, wie Browser sie behandeln. Das erste zu beachtende ist, dass einige Browser ein Kreuzsymbol anzeigen, auf das geklickt werden kann, um den Suchbegriff bei Bedarf sofort zu entfernen. In Chrome wird diese Aktion auch durch Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusring, mit dem Text 'Katzen'. Es gibt ein x-Symbol im Eingabefeld rechtsseitig.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser auch automatisch zuvor eingegebene Suchbegriffe domänenübergreifend, die dann als Autovervollständigungsoptionen angezeigt werden, wenn nachfolgende Suchanfragen in Sucheingabefeldern dieser Domäne durchgeführt werden. Dies hilft Benutzern, die im Laufe der Zeit häufig dieselben oder ähnliche Suchanfragen stellen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Pop-up-Auswahlliste öffnet sich direkt unter dem Eingabefeld mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter in Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf gibt, was man machen soll, mit dem [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut. Schauen Sie sich das folgende Beispiel an:

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

### Suchformularlabels und Zugänglichkeit

Ein Problem mit Suchformularen ist ihre Zugänglichkeit; eine gängige Designpraxis besteht darin, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupensymbol oder Ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer normalerweise ziemlich offensichtlich ist, wenn die Platzierung gut gemacht ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch für Screenreader-Benutzer verwirrend sein, da sie keine verbale Indikation darüber erhalten, was die Sucheingabe ist. Ein Weg, dies zu umgehen, der Ihr visuelles Design nicht beeinträchtigt, ist die Verwendung von [Landmark-Elementen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role).

- Wickeln Sie die gesamte Suchfunktion in ein {{HTMLElement("search")}}-Element, das eine Landmark-Region erstellt, die von assistiven Technologien angesagt und schnell navigierbar gemacht wird. Wenn sich Ihr `<input>` bereits in einem `<form>`-Element befindet, können Sie alternativ [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) zum `<form>`-Element hinzufügen, was auch das `<form>`-Element zu einer Suchlandmarke macht. Das `<search>`-Element verwendet native HTML-Semantik, während `role="search"` mehr Unterstützung bietet und möglicherweise kürzer zu tippen ist, wenn Sie bereits einen `<form>`-Wrapper haben.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut am {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Screenreader vorgelesen wird; es wird als visuelles Äquivalent zu `<label>` verwendet.

Schauen wir uns ein Beispiel an:

```html
<search>
  <form>
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
</search>
```

Sie können sehen, wie dies unten gerendert wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Screenreader-Benutzer haben viel mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen Zugänglichkeitsmerkmalen finden Sie unter [Schilder/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld 30 Zeichen breit:

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

`<input>`-Elemente des Typs `search` haben die gleichen Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass man im Allgemeinen Validierungsfunktionen für Suchfelder verwenden möchte. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, aber es gibt einige Fälle zu beachten, wie Suchen in Daten mit einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen. Außerdem ist es möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn nicht richtig formatierte Daten (oder Daten, die zu groß sind, von der falschen Art sind usw.) in Ihre Datenbank eingegeben werden.

### Ein Hinweis zum Styling

Es gibt nützliche Pseudo-Klassen, die für das Styling gültiger/ungültiger Formularelemente verfügbar sind: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, welches ein Häkchen neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird, das als Halter für die Symbole fungiert. Dies war notwendig, weil einige Eingabetypen in einigen Browsern Symbole, die direkt danach platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um einfach zu verlangen, dass ein Wert eingegeben wird, bevor die Formularübermittlung erlaubt wird:

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden, zeigt der Browser eine Nachricht an. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angebundener Nachricht, die sagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten ungültiger Daten zu übermitteln, die in den Eingaben enthalten sind; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine minimale Länge, in Zeichen, für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

Das Beispiel unten erfordert, dass der eingegebene Wert 4 bis 8 Zeichen lang ist.

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen einzureichen, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern variiert). Wenn Sie versuchen, über 8 Zeichen einzugeben, lässt der Browser es nicht zu.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für eine kurze Einführung).

Schauen wir uns ein Beispiel an. Nehmen wir an, wir wollten ein Produkt-ID-Suchformular bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Sie können ein gutes Beispiel für ein Suchformular im Kontext in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel sehen ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>IDL Attribute</strong></td>
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

- [HTML Forms](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
