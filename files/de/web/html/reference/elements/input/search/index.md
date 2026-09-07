---
title: '`<input type="search">` HTML-Attributwert'
short-title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 8a13259a44523cd17b4fe347088b62c6d7a35265
---

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer konzipiert sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingaben, können jedoch unterschiedlich vom {{Glossary("user_agent", "Benutzeragenten")}} gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, der den Wert im Suchfeld darstellt. Sie können diesen Wert mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss eine ganzzahlige Zahl von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss eine nicht-negative Ganzzahl sein, die kleiner als oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine minimale Länge.

Das Suchfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Zeichen behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustersatz angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Festlegen eines Musters](#ein_muster_festlegen) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in diesem Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf nicht_ Zeilenumbrüche oder Wagenrückläufe enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber die Darstellung des Platzhalters in der entgegengesetzten Richtung erfolgen soll, können Sie Unicode-Bidirektionale Algorithmus-Steuerzeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau sein oder auch nicht und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Gebrauch).

Dies legt _keine_ Grenze fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um ein Oberlimit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibüberprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Aspekte im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute sind für Suchfeldeingaben verfügbar.
Vermeiden Sie deren Verwendung, wenn möglich.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die, wenn vorhanden, dem {{Glossary("user_agent", "Benutzeragenten")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Wenn der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z. B. durch Drücken der <kbd>Eingabe</kbd>- oder <kbd>Eingabetaste</kbd> während der Bearbeitung des Feldes).

Das `search`-Ereignis ist rate-begrenzt, sodass es nicht häufiger als ein implementierungsdefinierter Intervall gesendet wird.

### results

Das `results`-Attribut - nur von Safari unterstützt - ist ein Zahlenwert, der es Ihnen ermöglicht, die maximale Anzahl der Einträge zu überschreiben, die im vom {{HTMLElement("input")}}-Element nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn er nicht angegeben wird oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denjenigen vom Typ `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen bestimmt sind. Sie sind im Verhalten im Wesentlichen äquivalent, aber Benutzeragenten können wählen, sie standardmäßig anders zu gestalten (und natürlich können Websites Stylesheets verwenden, um benutzerdefinierte Stile auf sie anzuwenden).

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

`q` ist der gebräuchlichste `name`, der Suchfeldeingaben gegeben wird, obwohl es nicht obligatorisch ist. Beim Senden wird das Daten-Namens/Wert-Paar an den Server in der Form `q=searchTerm` gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts übertragen.

### Unterschiede zwischen den Typen search und text

Die grundlegenden Unterschiede liegen hauptsächlich in der Art, wie Browser mit ihnen umgehen. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen, wenn gewünscht. In Chrome wird diese Aktion auch durch das Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld mit Fokusrahmen und dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld, das die rechte Seite flankiert.](chrome-cross-icon.png)

Zusätzlich neigen moderne Browser dazu, automatisch zuvor eingegebene Suchbegriffe domänenübergreifend zu speichern, die dann als Autocomplete-Optionen angezeigt werden, wenn nachfolgende Suchen in Sucheingaben auf dieser Domäne durchgeführt werden. Dies hilft Benutzern, die regelmäßig nach ähnlichen oder denselben Suchanfragen suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt werfen wir einen Blick auf einige nützliche Techniken, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter in Ihrem Suchfeld angeben, der mit dem [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut einen Hinweis darauf geben könnte, was zu tun ist. Sehen Sie sich das folgende Beispiel an:

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

Ein Problem mit Suchformularen ist ihre Barrierefreiheit; ein verbreitetes Designmuster besteht darin, kein Label für das Suchfeld bereitzustellen (obwohl es ein Symbol für eine Lupe oder ähnliches geben könnte), da der Zweck eines Suchformulars normalerweise für sehende Benutzer aufgrund der Platzierung offensichtlich ist ([dieses Beispiel zeigt ein typisches visuelles Muster](#barrierefreies_suchformular)).

Dies könnte jedoch bei Nutzern von Screenreadern zu Verwirrung führen, da sie keine verbale Angabe darüber erhalten, was die Sucheingabe ist. Eine Möglichkeit, dies zu umgehen, ohne Ihr visuelles Design zu beeinträchtigen, besteht darin, [Landmark-Elemente](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) zu verwenden.

- Verpacken Sie die gesamte Suchfunktionalität in ein {{HTMLElement("search")}}-Element, das eine Landmarkenregion erstellt, die von unterstützenden Technologien angekündigt und schnell navigierbar ist. Wenn Ihr `<input>` bereits in einem `<form>` enthalten ist, können Sie alternativ [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) zum `<form>`-Element hinzufügen, das auch `<form>` zu einer Suchlandmarke macht. Das `<search>`-Element verwendet native HTML-Semantik, während `role="search"` mehr Unterstützung hat und möglicherweise kürzer ist, wenn Sie bereits eine `<form>`-Umgebung haben.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Screenreader vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

Schauen wir uns ein minimales Beispiel an:

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Nutzern von Screenreadern stehen wesentlich mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsfunktionen finden Sie unter [Wegweiser/Markierungen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` haben die gleichen Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist jedoch weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, aber es gibt einige Fälle zu beachten, wie z.B. Suchen in Daten eines bekannten Formats.

> [!NOTE]
> HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemandem, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht korrekt validiert, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Notiz zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingabefeldern mit gültigen Werten platziert und ein Kreuz neben Eingabefeldern mit ungültigen Werten anzeigt.

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

Diese Technik erfordert auch, dass ein {{htmlelement("span")}}-Element nach dem Formularelement platziert wird, das als Platzhalter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert sind, nicht gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut als einfachen Weg verwenden, um die Eingabe eines Werts obligatorisch zu machen, bevor eine Formularübermittlung erlaubt wird:

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

Außerdem zeigt der Browser eine Nachricht an, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit einer angehängten Nachricht, die "Bitte füllen Sie dieses Feld aus" sagt](firefox-required-message.png)

Es werden unterschiedliche Nachrichten angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten in den Eingabefeldern abzuschicken; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; verwenden Sie analog [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

Das Beispiel unten erfordert, dass der eingegebene Wert 4–8 Zeichen lang ist.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, die Länge von 8 Zeichen zu überschreiten, lässt der Browser dies nicht zu.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir möchten ein Suchformular für Produkt-IDs bereitstellen, und die IDs sind alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel umfasst dies:

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

### Barrierefreies Suchformular

Dieses Beispiel zeigt ein typisches {{htmlelement("nav")}}-Menü, das ein Suchformular enthält. [WAI-ARIA](/de/docs/Web/Accessibility/ARIA)-Funktionen werden genutzt, um das Formular für Benutzer von unterstützender Technologie (AT) zugänglicher zu machen.

#### HTML

Die Hauptnavigationspunkte bestehen aus einer Liste von Links. Dem Such-{{htmlelement("form")}} wird ein [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Attribut zugewiesen, das `<form>` zu einer Suchlandmarke macht, die AT ankündigt. Wir geben dem `<input type="search">`-Element auch ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um ihm ein klares Label zu geben, das von Screenreadern vorgelesen wird.

```html live-sample___accessible-search
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <form role="search">
    <input
      type="search"
      name="q"
      placeholder="Search query"
      aria-label="Search through site content" />
    <button>Search!</button>
  </form>
</nav>
```

```css hidden live-sample___accessible-search
html {
  font-family: sans-serif;
  font-size: 10px;
}

nav {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 10px;
}

nav ul {
  padding: 0;
  list-style-type: none;
  flex: 2;
  display: flex;
}

nav li {
  text-align: center;
  flex: 1;
}

nav a {
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 1.2;
}

nav form {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
}

input {
  font-size: 1.6rem;
}

input[type="search"] {
  flex: 3;
  height: 30px;
}

button {
  flex: 1;
  height: 30px;
  padding: 0 1em;
  background: #333333;
  border: 0;
  color: white;
}
```

Wir haben das CSS und JavaScript des Beispiels aus Gründen der Kürze ausgeblendet, da sie nicht zum Verständnis des HTML relevant sind. Sie können sie überprüfen, indem Sie die "Play"-Taste im Live-Beispiel unten drücken.

```js hidden live-sample___accessible-search
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

#### Ergebnis

{{embedlivesample("accessible-search", "100%", "70")}}

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
      <td><p>[HTMLInputElement](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code>-Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role">searchbox</a></code><br />
        mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), auf denen es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
