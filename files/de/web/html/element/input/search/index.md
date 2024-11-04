---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer konzipiert sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text) Eingaben, können aber vom {{Glossary("user_agent", "User Agent")}} unterschiedlich gestaltet werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut enthält einen String, der den Wert darstellt, der im Suchfeld enthalten ist. Sie können diesen mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value) Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente, unabhängig von ihrem Typ, angewendet werden, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Texts, der in das Feld eingegeben wird, länger als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Texts, der in das Feld eingegeben wird, kürzer als `minlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und ist in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Text des Musters angegeben werden.

Falls das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Ein Muster angeben](#ein_muster_angeben) für Details und ein Beispiel.

### placeholder

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, jedoch der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das `placeholder` Attribut zu verwenden. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft über JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly` Attribut.

### size

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise nicht exakt sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen, die in Verwendung sind).

Dies setzt _keine_ Begrenzung für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzuzeigen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann bei jedem bearbeitbaren Inhalt verwendet werden, hier betrachten wir jedoch spezifische Dinge in Bezug auf die Verwendung von `spellcheck` bei {{HTMLElement("input")}} Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements bei der Rechtschreibprüfung. Dies kann auf den `spellcheck` Einstellungen des übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "User Agents")}} die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind für Sucheingabefelder verfügbar. Vermeiden Sie ihre Verwendung, wo immer möglich.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome usw.), die, falls vorhanden, dem {{Glossary("user_agent", "User Agent")}} angibt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das die Suchbox darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (z. B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste während der Bearbeitung des Feldes).

Das `search` Ereignis ist in der Frequenz begrenzt, sodass es nicht öfter als in einem implementierungsdefinierten Intervall gesendet wird.

### results

Das `results` Attribut — nur von Safari unterstützt — ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl an Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}} Elements früherer Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert gegeben wird, wird die standardmäßige maximale Anzahl an Einträgen des Browsers verwendet.

## Suchfelder verwenden

`<input>` Elemente des Typs `search` sind denen des Typs `text` sehr ähnlich, außer dass sie speziell für die Handhabung von Suchbegriffen vorgesehen sind. Im Verhalten sind sie im Wesentlichen gleichwertig, aber User Agents können sich dafür entscheiden, sie standardmäßig unterschiedlich zu gestalten (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Stile zuzuweisen).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies wird so dargestellt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der am häufigsten gegebene `name` für Sucheingaben, obwohl es nicht zwingend erforderlich ist. Wenn übermittelt, wird das Daten Name/Wert-Paar, das an den Server gesendet wird, `q=searchTerm` sein.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts übermittelt.

### Unterschiede zwischen Such- und Texttypen

Die grundlegenden Unterschiede liegen in der Art und Weise, wie Browser sie handhaben. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen, falls gewünscht. In Chrome wird diese Aktion auch ausgelöst, wenn die Escape-Taste gedrückt wird. Das folgende Screenshot stammt aus Chrome:

![Fokussiertes Sucheingabefeld, mit Fokusring, mit dem Text 'cats'. Es gibt ein x-Symbol in der Eingabe, das die rechte Seite begrenzt.](chrome-cross-icon.png)

Darüber hinaus neigen moderne Browser dazu, automatisch früher eingegebene Suchbegriffe domainspezifisch zu speichern, die dann als Autovervollständigungsoptionen erscheinen, wenn nachfolgende Suchanfragen in Sucheingaben auf dieser Domain durchgeführt werden. Dies hilft Benutzern, die dazu neigen, über einen längeren Zeitraum nach denselben oder ähnlichen Suchanfragen zu suchen. Dieses Screenshot ist aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Pop-up-Auswahlliste wird direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt wollen wir uns einige nützliche Techniken ansehen, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, die einen Hinweis bieten könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

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

Ein Problem mit Suchformularen ist deren Barrierefreiheit; ein häufiges Designmerkmal ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupen-Symbol oder ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer normalerweise aufgrund der Platzierung ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Benutzern von Bildschirmlesern zu Verwirrung führen, da sie keine verbale Indikation erhalten, was die Suchanfrage ist. Eine Möglichkeit, dies zu umgehen, die sich nicht auf Ihr visuelles Design auswirkt, besteht darin, [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) Funktionen zu verwenden:

- Ein `role` Attribut mit dem Wert `search` auf dem `<form>` Element sorgt dafür, dass Bildschirmleser ankündigen, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut direkt auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

Sehen wir uns ein Beispiel an:

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Bildschirmleser-Benutzern stehen weitaus mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsfunktionen finden Sie unter [Signposts/Landmarks](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe der Eingabebox kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Eingabebox gleichzeitig anzeigen kann. In diesem Beispiel ist die Suchbox beispielsweise 30 Zeichen breit:

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

Das Ergebnis ist diese breitere Eingabebox:

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

## Validierung

`<input>` Elemente des Typs `search` haben dieselben Validierungsfunktionen verfügbar wie reguläre `text` Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchboxen verwenden möchten. In vielen Fällen sollte Benutzern einfach erlaubt werden, nach allem zu suchen, aber es gibt einige Fälle zu betrachten, wie beispielsweise Suchanfragen gegen Daten in einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML völlig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte ein Desaster eintreten, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen für die Gestaltung gültiger/ungültiger Formularelemente: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten platzieren wird.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}} Element nach dem Formularelement platziert wird, das als Halter für die Symbole fungiert. Dies war notwendig, weil einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut verwenden, um einfach die Eingabe eines Werts zu erzwingen, bevor das Formular übermittelt werden darf:

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

Dies wird so dargestellt:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff zu übermitteln, zeigt der Browser eine Nachricht an. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die sagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Unterschiedliche Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Typen ungültiger Daten, die in den Eingaben enthalten sind, zu übermitteln; sehen Sie sich die folgenden Beispiele an.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4 bis 8 Zeichen lang ist.

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

Dies wird so dargestellt:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, über 8 Zeichen hinauszugehen, lässt der Browser dies nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Crashkurs).

Lassen Sie uns ein Beispiel ansehen. Angenommen, wir wollten ein Produkt-ID-Suchformular bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben, gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Dies wird so dargestellt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Ein gutes Beispiel für ein Suchformular im Kontext finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert im
        Suchfeld darstellt.
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
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
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
