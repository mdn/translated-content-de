---
title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, die dazu gedacht sind, dass der Benutzer Suchanfragen eingibt. Diese sind funktional identisch zu [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User-Agent")}} unterschiedlich gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, der den im Suchfeld enthaltenen Wert darstellt. Sie können diesen über die [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsanforderungen für die Eingabe vorliegen (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die bei allen {{HTMLElement("input")}}-Elementen unabhängig vom Typ wirken, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Die Werte des list-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kleiner als `minlength` {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Wenn angegeben, ist das `pattern`-Attribut ein regulärer Ausdruck, den der `value`-Wert der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu passieren. Es muss ein gültiger JavaScript-Regular-Expression-Ausdruck sein, der mit dem {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird angegeben, wenn der reguläre Ausdruck kompiliert wird, damit das Muster als eine Sequenz von Unicode-Zeichencodes behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext herum angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Werkzeugtipp anzeigen, um die Anforderungen zum Erfüllen des Musters zu erläutern. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Siehe den Abschnitt [Ein Muster angeben](#ein_muster_angeben) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Kontrolle eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Symbole des Unicode-Bidi-Algorithmus verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für Bidirektionalität-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein boolesches Attribut, das angibt, ob dieses Feld nicht vom Benutzer bearbeitet werden kann, falls es vorhanden ist. Sein `value` kann jedoch trotzdem direkt durch JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft festlegt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` bei Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut keinen Effekt.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies möglicherweise nicht genau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den Schriftart-Einstellungen ({{cssxref("font")}}), die verwendet werden.

Dies setzt _keinerlei_ Grenzen dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann bei jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten im Zusammenhang mit der Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen der Elternelemente oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn das [readonly](#readonly)-Attribut nicht festgelegt ist und es nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Präferenzen des {{Glossary("user_agent", "User-Agent")}}'s die Einstellung überschreiben.

## Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind für Sucheingabefelder verfügbar. Vermeiden Sie deren Verwendung, wo möglich.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, etc.), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z.B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste während der Bearbeitung des Feldes).

Das `search`-Ereignis ist ratengesteuert, sodass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

### results

Das `results`-Attribut, das nur von Safari unterstützt wird, ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl an Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}}-Elements zu vorherigen Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert gegeben wird, wird die Standard-Maximalanzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denen vom Typ `text` sehr ähnlich, außer dass sie speziell für die Handhabung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten im Grunde gleichwertig, aber User-Agents können sie standardmäßig unterschiedlich gestalten (und natürlich können Websites Stylesheets verwenden, um benutzerdefinierte Stile auf sie anzuwenden).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der gebräuchlichste `name`, der Sucheingaben gegeben wird, obwohl es nicht obligatorisch ist. Beim Absenden wird das Datenname/Wert-Paar, das an den Server gesendet wird, `q=searchTerm` sein.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, da sonst nichts übermittelt wird.

### Unterschiede zwischen Such- und Texttypen

Die Hauptunterschiede bestehen in der Art und Weise, wie Browser sie handhaben. Das erste ist, dass einige Browser ein Kreuzsymbol anzeigen, auf das geklickt werden kann, um den Suchbegriff sofort zu entfernen. In Chrome wird diese Aktion auch ausgelöst, wenn die Escape-Taste gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Sucheingabefeld mit Fokusrahmen und dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld, das an der rechten Seite anliegt.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser auch automatisch vorher eingegebene Suchbegriffe domänenübergreifend, die dann als Autocomplete-Optionen bei nachfolgenden Suchen in Sucheingabefeldern auf dieser Domäne angezeigt werden. Dies hilft Benutzern, die dazu tendieren, über die Zeit nach denselben oder ähnlichen Suchanfragen zu suchen. Dieser Screenshot stammt von Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste wird direkt unter dem Eingabefeld geöffnet und zeigt zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt betrachten wir einige nützliche Techniken, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter einstellen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Ein Problem bei Suchformularen ist ihre Barrierefreiheit. Eine gängige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupensymbol oder ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch für Benutzer von Screenreadern Verwirrung stiften, da sie keine verbale Angabe dazu haben, was die Sucheingabe ist. Eine Möglichkeit, dies zu umgehen, die Ihr visuelles Design nicht beeinträchtigt, ist die Verwendung von [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Funktionen:

- Ein `role`-Attribut mit dem Wert `search` am `<form>`-Element führt dazu, dass Screenreader ankündigen, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut direkt am {{HTMLElement("input")}} verwenden. Dies sollte ein beschreibender Text sein, der vom Screenreader vorgelesen wird; es ist ein nicht-visuelles Äquivalent zu `<label>`.

Lassen Sie uns ein Beispiel anschauen:

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Benutzern von Screenreadern stehen viel mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsfunktionen finden Sie unter [Signposts/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` haben die gleichen Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach alles suchen dürfen, aber es gibt einige Fälle zu berücksichtigen, wie etwa Suchen nach Daten in einem bekannten Format.

> [!NOTE]
> HTML-Formular-Validierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, von der falschen Art sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Stilgestaltung

Es gibt nützliche Pseudoklassen, die zur Stilgestaltung von gültigen/ungültigen Formularelementen verwendet werden können: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben platziert, die gültige Werte enthalten, und ein Kreuz neben Eingaben, die ungültige Werte enthalten.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Platzhalter für die Symbole dient. Dies war notwendig, da einige Eingabetypen bei einigen Browsern Symbole, die direkt hinter ihnen platziert sind, nicht gut darstellen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut als einfache Möglichkeit verwenden, um das Eingeben eines Wertes erforderlich zu machen, bevor die Formularübermittlung erlaubt wird:

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

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Darüber hinaus zeigt der Browser eine Nachricht an, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die sagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten in den Eingaben zu senden; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert eine Länge von 4–8 Zeichen hat.

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

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, über 8 Zeichen hinauszugehen, lässt der Browser dies nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Produkt-IDs-Suchformular bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Ein gutes Beispiel für ein verwendetes Suchformular finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles)-Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Suchfeld enthaltenen Wert darstellt.
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
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
