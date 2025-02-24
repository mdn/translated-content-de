---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "Benutzer-Agenten")}} anders gestylt werden.

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

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, der den Wert im Suchfeld darstellt. Sie können diesen mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert jeder beliebige Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [Globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}}-Elemente liefern eine Liste von vordefinierten Werten, die dem Benutzer als Eingabevorschläge für dieses Eingabefeld angeboten werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer im Suchfeld eingeben kann. Dieser Wert muss eine Ganzzahl von 0 oder höher sein. Wenn kein `maxlength` festgelegt wird oder ein ungültiger Wert angegeben ist, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` UTF-16-Code-Einheiten lang. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer im Suchfeld eingeben kann. Dieser Wert muss eine nicht-negative Ganzzahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` festgelegt wird oder ein ungültiger Wert angegeben ist, hat die Sucheingabe keine minimale Länge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Code-Einheiten beträgt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe übereinstimmen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird bei der Kompilierung des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewandt und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um die Anforderungen zu erklären, die erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe den Abschnitt [Festlegung eines Musters](#festlegung_eines_musters) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Kontrolle eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in entgegengesetzter Richtung angezeigt werden soll, können Sie die Unicode-Bidirektionalitäts-Algorithmus-Formatzeichen verwenden, um die Richtung innerhalb des Platzhalters außer Kraft zu setzen; siehe [Wie man Unicode-Steuerungen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code, der direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau oder ungenau sein und sollte nicht zu sehr darauf verlassen werden; das resultierende Eingabefeld kann je nach Zeichen und Font ({{cssxref("font")}}-Einstellungen) schmaler oder breiter sein als die angegebene Anzahl von Zeichen.

Dies setzt _nicht_ eine Grenze für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Elemente im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Das Standardverhalten des Elements für die Rechtschreibprüfung befolgen. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch Lesen von `spellcheck` zurückgegebene Wert kann nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements widerspiegeln, wenn die Präferenzen des {{Glossary("user_agent", "Benutzer-Agenten")}} die Einstellungen außer Kraft setzen.

## Nicht standardmäßige Attribute

Die folgenden nicht standardmäßigen Attribute sind für Sucheingaben verfügbar. Vermeiden Sie, wenn möglich, deren Verwendung.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die, falls vorhanden, den {{Glossary("user_agent", "Benutzer-Agenten")}} veranlasst, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzer-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche startet (zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste beim Bearbeiten des Feldes).

Das `search`-Ereignis ist rate-begrenzt, sodass es nicht häufiger als in einem von der Implementierung definierten Intervall gesendet wird.

### results

Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, mit dem Sie die maximale Anzahl an Einträgen überschreiben können, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}}-Elements mit vorherigen Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert gegeben ist, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente des Typs `search` sind denen des Typs `text` sehr ähnlich, außer dass sie speziell für die Handhabung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten im Wesentlichen identisch, aber Benutzer-Agenten können sich dafür entscheiden, sie standardmäßig anders zu stylen (und natürlich können Websites Stylesheets verwenden, um benutzerdefinierte Stile auf sie anzuwenden).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der häufigste `name`, der Sucheingaben gegeben wird, obwohl er nicht obligatorisch ist. Wenn das Formular übermittelt wird, wird das Name/Wert-Paar, das an den Server gesendet wird, `q=searchTerm` sein.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, ansonsten wird nichts übermittelt.

### Unterschiede zwischen den Typen search und text

Die grundlegenden Unterschiede bestehen in der Art und Weise, wie Browser damit umgehen. Das erste, was zu beachten ist, ist, dass einige Browser ein x-Symbol anzeigen, das angeklickt werden kann, um den Suchbegriff bei Bedarf sofort zu entfernen; in Chrome wird diese Aktion auch ausgelöst, wenn Escape gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokus-Ring, mit dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld, das an der rechten Seite anliegt.](chrome-cross-icon.png)

Moderne Browser neigen auch dazu, Suchbegriffe, die zuvor domänenübergreifend eingegeben wurden, automatisch zu speichern, die dann als Autovervollständigungsoptionen auftauchen, wenn in Sucheingaben auf dieser Domäne nachfolgenden Suchvorgänge durchgeführt werden. Dies hilft Nutzern, die häufig nach ähnlichen Suchanfragen suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokus-Ring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet, mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter in Ihrem Suchinput bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Ein Problem bei Suchformularen ist deren Barrierefreiheit; eine gängige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Symbol mit einer Lupe oder Ähnlichem gibt), da der Zweck eines Suchformulars für sehende Nutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch für Screenreader-Nutzer zu Verwirrung führen, da sie keine verbale Information darüber haben, was die Sucheingabe ist. Ein Weg, dies zu umgehen, ohne Ihr visuelles Design zu beeinträchtigen, besteht darin, [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Funktionen zu verwenden:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element veranlasst Screenreader, anzukündigen, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Textlabel sein, der vom Screenreader vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Nutzer von Screenreadern haben viel mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsfunktionen finden Sie unter [Wegweiser/Landmarken](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

## Validierung

`<input>`-Elemente des Typs `search` haben die gleichen Validierungsfunktionen zur Verfügung wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie im Allgemeinen Validierungsfunktionen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, aber es gibt einige Fälle, die berücksichtigt werden müssen, wie zum Beispiel Suchen gegen Daten eines bekannten Formats.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu Katastrophen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudo-Klassen zum Stylen von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das hinter Inputs mit gültigen Werten ein Häkchen anzeigt und hinter Inputs mit ungültigen Werten ein Kreuz.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetypen in bestimmten Browsern die direkt nach ihnen platzierten Symbole nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut als einfache Methode verwenden, um die Eingabe eines Werts erforderlich zu machen, bevor eine Formularübermittlung erlaubt ist:

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Making_input_required', 600, 40)}}

Darüber hinaus zeigt der Browser eine Meldung an, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die besagt: Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten in den Eingaben abzuschicken; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie ebenso das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Input_value_length', 600, 40)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die von Browser zu Browser unterschiedlich ist). Wenn Sie versuchen, über 8 Zeichen hinauszugehen, lässt der Browser dies nicht zu.

### Festlegung eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crash-Kurs).

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 40)}}

## Beispiele

Ein gutes Beispiel für ein Suchformular in einem Kontext finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles)-Beispiel ([live sehen](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert im Suchfeld darstellt.
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
      <td>ohne <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role">searchbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
