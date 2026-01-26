---
title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 30eaa394709dfb8e1bd6ccc85239b432152aaf9b
---

{{HTMLElement("input")}} Elemente des Typs **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Diese sind funktional identisch zu [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) Eingabefeldern, können jedoch vom {{Glossary("user_agent", "User-Agent")}} unterschiedlich gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut enthält eine Zeichenkette, die den im Suchfeld enthaltenen Wert darstellt. Sie können diesen mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert eine beliebige Textzeichenkette oder eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}} Elemente unabhängig vom Typ gelten, unterstützen Sucheingabefelder die folgenden Attribute.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer zur Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Texts größer als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Texts weniger als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um die Anforderungen zum Erfüllen des Musters zu erläutern. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Ein Muster festlegen](#ein_muster_festlegen) für Details und ein Beispiel.

### placeholder

Das `placeholder` Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in entgegengesetzter Richtung angezeigt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder` Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code gesetzt werden, indem die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft geändert wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem `readonly` Attribut.

### size

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger exakt sein und darf nicht als genau betrachtet werden; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}} Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies legt _keine_ Beschränkung fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr auf einmal sichtbar sein können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten der Verwendung von `spellcheck` auf {{HTMLElement("input")}} Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck` Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut hat und nicht deaktiviert ist.

Der durch Lesen von `spellcheck` zurückgegebene Wert kann nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb eines Steuerelements widerspiegeln, wenn die Präferenzen des {{Glossary("user_agent", "User-Agent")}} die Einstellung überschreiben.

## Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind für Sucheingabefelder verfügbar. Vermeiden Sie die Verwendung, wenn möglich.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, etc.), die, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das Suchfeld darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z. B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd> Taste während der Feldbearbeitung).

Das `search` Ereignis ist ratengesteuert, sodass es nicht häufiger gesendet wird als ein implementationsdefiniertes Intervall.

### results

Das `results` Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü der letzten Suchabfragen des {{HTMLElement("input")}} Elements angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wird kein Wert angegeben oder ein ungültiger Wert eingegeben, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>` Elemente des Typs `search` sind sehr ähnlich zu denen des Typs `text`, außer dass sie speziell für die Behandlung von Suchbegriffen vorgesehen sind. Sie sind in ihrem Verhalten im Wesentlichen gleichwertig, aber User-Agents können sie standardmäßig anders gestalten (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Stile zuzuweisen).

### Grundlegendes Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der häufigste `name`, der Suchfeldern gegeben wird, obwohl es nicht zwingend ist. Beim Absenden der Daten wird das Paar Name/Wert an den Server als `q=searchTerm` gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, sonst wird nichts gesendet.

### Unterschiede zwischen Such- und Texttypen

Die grundlegenden Unterschiede bestehen hauptsächlich in der Art und Weise, wie Browser sie handhaben. Das Erste, das zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um bei Bedarf den Suchbegriff sofort zu entfernen; in Chrome wird diese Aktion auch durch Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokus-Ring, mit dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld an der rechten Seite.](chrome-cross-icon.png)

Zusätzlich speichern moderne Browser auch automatisch zuvor eingegebene Suchbegriffe über Domains hinweg, die dann als Autovervollständigungsvorschläge erscheinen, wenn nachfolgende Suchanfragen auf dieser Domain durchgeführt werden. Dies hilft Benutzern, die im Laufe der Zeit dazu neigen, nach denselben oder ähnlichen Suchbegriffen zu suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit rotem Fokus-Ring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Pop-up-Auswahlliste ist direkt unter dem Eingabefeld geöffnet und enthält zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

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

Sie können sehen, wie der Platzhalter unten gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Suchformular-Labels und Barrierefreiheit

Ein Problem mit Suchformularen ist ihre Barrierefreiheit; eine häufige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl möglicherweise ein Lupensymbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Benutzern von Bildschirmlesern zu Verwirrung führen, da sie keine verbale Angabe darüber erhalten, was die Sucheingabe ist. Ein Weg, dies zu umgehen, ohne Ihr visuelles Design zu beeinträchtigen, ist die Verwendung von [Landmark-Elementen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role).

- Umschließen Sie die gesamte Suchfunktionalität in ein {{HTMLElement("search")}} Element, das einen Landmark-Bereich erstellt, den unterstützende Technologien ankündigen und schnell zu navigieren sein können. Wenn Ihr `<input>` bereits in einem `<form>` ist, können Sie alternativ [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) dem `<form>` Element hinzufügen, das auch das `<form>` zu einem Suchlandmark macht. Das `<search>` Element verwendet native HTML-Semantik, während `role="search"` mehr Unterstützung hat und möglicherweise kürzer zu tippen ist, wenn Sie bereits einen `<form>` Wrapper haben.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut auf das {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Benutzer von Bildschirmlesegeräten haben viel mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsmerkmalen finden Sie unter [Wegweiser/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist zum Beispiel das Suchfeld 30 Zeichen breit:

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

`<input>` Elemente des Typs `search` haben die gleichen Validierungsmerkmale wie reguläre `text` Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, es gibt jedoch einige Fälle, die zu berücksichtigen sind, wie beispielsweise Suchen gegen Daten in einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es jemandem erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr Serverseitencode die erhaltenen Daten nicht validiert, könnte ein Desaster passieren, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudo-Klassen für das Styling von gültig/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch ein {{htmlelement("span")}} Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetypen in einigen Browsern keine Symbole darstellen, die direkt neben ihnen platziert werden.

### Eingabe erforderlich machen

Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut kann als einfache Möglichkeit verwendet werden, das Eingeben eines Wertes vor der Formularübermittlung obligatorisch zu machen:

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

Dies wird folgendermaßen gerendert:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Wenn Sie versuchen, das Formular ohne Suchbegriff abzusenden, zeigt der Browser eine Nachricht an. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angefügter Nachricht, die sagt: Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Meldungen werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten in den Eingabefeldern abzusenden; siehe die folgenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge angeben, in Zeichen, für den eingegebenen Wert mithilfe des [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attributs; ähnlich können Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) verwenden, um die maximale Länge des eingegebenen Wertes festzulegen.

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

Dies wird folgendermaßen gerendert:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Suchformular für Produkt-IDs bereitstellen, und die IDs waren alle Code aus zwei Buchstaben gefolgt von vier Ziffern. Das folgende Beispiel deckt dies ab:

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

Dies wird folgendermaßen gerendert:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Sie können ein gutes Beispiel für ein Suchformular im Kontext in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel sehen ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den im
        Suchfeld enthaltenen Wert darstellt.
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
      <td><strong>IDL Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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
      <td><strong>Implizite ARIA Rolle</strong></td>
      <td>
        ohne <code>list</code> Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role">searchbox</a></code><br />
        mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
