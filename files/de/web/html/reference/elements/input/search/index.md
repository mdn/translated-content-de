---
title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`search`** sind Textfelder, in die der Benutzer Suchanfragen eingeben kann. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingabefeldern, können jedoch vom {{Glossary("user_agent", "Benutzer-Agenten")}} unterschiedlich gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, der den Wert des Suchfelds darstellt. Sie können diesen mit der JavaScript-Eigenschaft [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente angewendet werden, unabhängig von ihrem Typ, unterstützen Search-Feldeingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} liefert eine Liste von vordefinierten Werten, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angebotenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}} beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Details und ein Beispiel finden Sie im Abschnitt [Spezifizieren eines Musters](#ein_muster_spezifizieren).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der die erwartete Art von Daten zeigt, anstatt einer erläuternden Nachricht. Der Text darf _keine_ Zeilenumbrüche oder Wagenrückläufe enthalten.

Wenn der Inhalt des Elements eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `Wert` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert beträgt 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen, dass es so ist; die resultierende Eingabe kann je nach den Zeichen und der verwendeten Schriftart ({{cssxref("font")}} Einstellungen) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies legt _kein_ Limit fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig angezeigt werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzuzeigen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jeden bearbeitbaren Inhalt angewendet werden, aber hier betrachten wir spezifische Erwägungen im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folge dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf einer `spellcheck`-Einstellung des Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der beim Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Präferenzen des {{Glossary("user_agent", "Benutzer-Agenten")}} die Einstellung überschreiben.

## Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute stehen für Sucheingabefelder zur Verfügung. Vermeiden Sie nach Möglichkeit ihre Verwendung.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzer-Agenten")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzer-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code die Aktualisierung der Suchergebnisse in Echtzeit, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer die Suche ausdrücklich initiiert (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

Das `search`-Ereignis ist frequenzbegrenzt, sodass es nicht häufiger gesendet wird als ein implementierungsdefiniertes Intervall.

### results

Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, mit dem Sie die maximale Anzahl der Einträge überschreiben können, die im nativ bereitgestellten Dropdown-Menü vorheriger Suchanfragen des {{HTMLElement("input")}}-Elements angezeigt werden.

Der Wert muss eine nicht negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben ist, wird die Standardmaximalanzahl der Einträge des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denjenigen des Typs `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen vorgesehen sind. Sie sind im Wesentlichen gleichwertig im Verhalten, aber Benutzeragenten können sie standardmäßig anders gestalten (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Stile zuzuweisen).

### Einfaches Beispiel

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

`q` ist der häufigste `name`, der Sucheingaben gegeben wird, obwohl es nicht zwingend erforderlich ist. Wenn das Formular eingereicht wird, wird das Datenname/Wert-Paar, das an den Server gesendet wird, `q=searchTerm` sein.

> [!NOTE]
> Sie müssen daran denken, Ihrem Eingabefeld einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) zu geben, da sonst nichts übermittelt wird.

### Unterschiede zwischen den Typen `search` und `text`

Die Hauptunterschiede liegen in der Art und Weise, wie Browser sie behandeln. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen; in Chrome wird diese Aktion auch durch Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld mit Fokusrahmen, mit dem Text 'cats'. Es gibt ein x-Symbol im Feld rechts.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser normalerweise automatisch zuvor eingegebene Suchbegriffe über Domains hinweg, die dann als Autovervollständigungsvorschläge erscheinen, wenn in diesem Bereich weitere Suchanfragen in Sucheingabefeldern durchgeführt werden. Dies hilft Benutzern, die tendenziell immer nach denselben oder ähnlichen Suchanfragen suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Auswahl-Popup-Liste ist direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

Schauen wir uns nun einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Betrachten Sie das folgende Beispiel:

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

### Beschriftungen von Suchformularen und Barrierefreiheit

Ein Problem bei Suchformularen ist ihre Zugänglichkeit; eine gängige Designpraxis ist es, kein Etikett für das Suchfeld bereitzustellen (obwohl möglicherweise ein Lupensymbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch für Benutzer von Bildschirmlesegeräten Verwirrung stiften, da sie keine verbale Angabe darüber erhalten, was die Sucheingabe ist. Ein Weg, dies zu umgehen, der sich nicht auf Ihr visuelles Design auswirkt, ist die Verwendung von [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Funktionen:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element bewirkt, dass Bildschirmlesegeräte ankündigen, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte eine beschreibende Textmarkierung sein, die vom Bildschirmlesegerät vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

Werfen wir einen Blick auf ein Beispiel:

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Bildschirmleser-Benutzer haben wesentlich mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Hinweise/Landmarken](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen zu solchen Barrierefreiheitsmerkmalen.

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` verfügen über die gleichen Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach alles suchen dürfen, aber es gibt einige Fälle zu berücksichtigen, wie z.B. Suchen in Daten eines bekannten Formats.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen an HTML vorzunehmen, die ihm erlauben, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code versäumt, die empfangenen Daten zu validieren, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, die falschen Typs sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Notiz zum Styling

Es gibt nützliche Pseudoklassen zum Stylen gültiger/ungültiger Formularelemente: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten anzeigt.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Eingeben eines Werts einfach vor dem Absenden des Formulars erforderlich zu machen:

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

Zusätzlich wird der Browser eine Nachricht anzeigen, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die sagt: Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten in den Eingaben zu übermitteln; siehe die folgenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ähnlich können Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) verwenden, um die maximale Länge des eingegebenen Werts festzulegen.

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, mehr als 8 Zeichen lang einzugeben, lässt der Browser dies nicht zu.

### Ein Muster spezifizieren

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung mit regulärem Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crash-Kurs).

Sehen wir uns ein Beispiel an. Angenommen, wir wollten ein Suchformular für Produkt-IDs bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Ein gutes Beispiel für ein Suchformular in einem Kontext sehen Sie in unserem Beispiel [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

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
      <td><strong>IDL-Attribute</strong></td>
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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
