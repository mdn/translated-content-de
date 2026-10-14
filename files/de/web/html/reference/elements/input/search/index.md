---
title: HTML-Attributwert `<input type="search">`
short-title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, in die Benutzer Suchanfragen eingeben können. Sie sind funktional identisch mit Eingabefeldern vom Typ [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), können vom {{Glossary("user_agent", "User Agent")}} jedoch anders dargestellt werden.

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

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) enthält eine Zeichenfolge, die den Wert des Suchfelds darstellt. Sie können diesen Wert in JavaScript über die Eigenschaft [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) abrufen.

```js
searchTerms = mySearch.value;
```

Wenn für das Eingabefeld keine Validierungsvorgaben gelten (weitere Informationen finden Sie unter [Validierung](#validierung)), kann der Wert eine beliebige Zeichenfolge oder eine leere Zeichenfolge (`""`) sein.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Suchfelder die folgenden Attribute.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die Vorschläge aufgenommen. Die Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das Suchfeld eingeben können. Der Wert muss eine ganze Zahl größer oder gleich 0 sein. Wenn `maxlength` nicht angegeben ist oder einen ungültigen Wert hat, gibt es für das Suchfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der in das Feld eingegebene Text länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn Benutzer den Wert ändern.

### minlength

Die minimale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das Suchfeld eingeben können. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder einen ungültigen Wert hat, gibt es für das Suchfeld keine minimale Länge.

Das Suchfeld besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der in das Feld eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn Benutzer den Wert ändern.

### pattern

Das Attribut `pattern` ist, sofern angegeben, ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds übereinstimmen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss sich um einen gültigen regulären JavaScript-Ausdruck handeln, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` gesetzt, damit das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht in Schrägstriche eingeschlossen werden.

Wenn kein Muster angegeben ist oder das angegebene Muster ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen. Darin können Sie erklären, welche Anforderungen für eine Übereinstimmung mit dem Muster gelten. Fügen Sie außerdem in der Nähe weiteren erläuternden Text hinzu.

Einzelheiten und ein Beispiel finden Sie im Abschnitt [Ein Muster festlegen](#ein_muster_festlegen).

### placeholder

Das Attribut `placeholder` ist eine Zeichenfolge, die Benutzern einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte sich um ein Wort oder eine kurze Wortgruppe handeln, die den erwarteten Datentyp veranschaulicht, nicht um eine ausführliche Erklärung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter aber in der entgegengesetzten Richtung angezeigt werden soll, können Sie Unicode-Formatierungszeichen für den bidirektionalen Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu überschreiben. Weitere Informationen finden Sie unter [Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit das Attribut `placeholder`. Es ist semantisch weniger aussagekräftig als andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, festlegt, dass Benutzer das Feld nicht bearbeiten können. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld keine Werteingabe erforderlich sein kann, hat `required` keine Wirkung auf Eingabefelder, für die auch das Attribut `readonly` angegeben ist.

### size

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein; der Standardwert ist 20. Da Zeichen unterschiedlich breit sind, ist die Angabe möglicherweise nicht exakt und sollte nicht als genaue Breite vorausgesetzt werden. Je nach Zeichen und Schriftart (den verwendeten {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies begrenzt _nicht_, wie viele Zeichen Benutzer in das Feld eingeben können. Es gibt lediglich ungefähr an, wie viele Zeichen gleichzeitig sichtbar sind. Um die Länge der Eingabedaten nach oben zu begrenzen, verwenden Sie das Attribut [`maxlength`](#maxlength).

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, mit dem angegeben wird, ob die Rechtschreibprüfung für ein Element aktiviert sein soll. Es kann für alle bearbeitbaren Inhalte verwendet werden; hier betrachten wir die Besonderheiten bei der Verwendung von `spellcheck` für {{HTMLElement("input")}}-Elemente. Für `spellcheck` sind folgende Werte zulässig:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenfolge) oder kein Wert
  - : Verwendet das Standardverhalten des Elements für die Rechtschreibprüfung. Dieses kann von der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren abhängen.

Die Rechtschreibprüfung kann für ein Eingabefeld aktiviert werden, wenn das Attribut [readonly](#readonly) nicht gesetzt und das Feld nicht deaktiviert ist.

Der beim Auslesen von `spellcheck` zurückgegebene Wert entspricht möglicherweise nicht dem tatsächlichen Status der Rechtschreibprüfung innerhalb eines Steuerelements, wenn die Einstellungen des {{Glossary("user_agent", "User Agents")}} die Angabe überschreiben.

## Nicht standardisierte Attribute

Für Suchfelder sind die folgenden nicht standardisierten Attribute verfügbar. Vermeiden Sie ihre Verwendung nach Möglichkeit.

### incremental

Das boolesche Attribut `incremental` ist eine Erweiterung von WebKit und Blink (und wird daher unter anderem von Safari, Opera und Chrome unterstützt). Wenn es vorhanden ist, weist es den {{Glossary("user_agent", "User Agent")}} an, die Eingabe als Live-Suche zu verarbeiten. Während Benutzer den Wert des Felds bearbeiten, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dadurch kann Ihr Code die Suchergebnisse während der Eingabe in Echtzeit aktualisieren.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn Benutzer ausdrücklich eine Suche starten, beispielsweise indem sie beim Bearbeiten des Felds die Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> drücken.

Die Häufigkeit des `search`-Ereignisses ist begrenzt: Es wird nicht öfter als in einem von der Implementierung festgelegten Intervall gesendet.

### results

Das Attribut `results` wird nur von Safari unterstützt. Es ist ein numerischer Wert, mit dem Sie die maximale Anzahl der Einträge überschreiben können, die im nativen Dropdown-Menü des {{HTMLElement("input")}}-Elements mit früheren Suchanfragen angezeigt werden.

Der Wert muss eine nicht negative Dezimalzahl sein. Wenn das Attribut fehlt oder ein ungültiger Wert angegeben ist, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Suchfelder verwenden

`<input>`-Elemente vom Typ `search` sind denen vom Typ `text` sehr ähnlich, sind aber speziell für die Eingabe von Suchbegriffen vorgesehen. Ihr Verhalten ist im Wesentlichen gleich, doch User Agents können sie standardmäßig unterschiedlich darstellen. Websites können sie natürlich auch mithilfe von Stylesheets individuell gestalten.

### Einfaches Beispiel

```html
<input type="search" id="mySearch" name="q" />
```

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der gebräuchlichste `name` für Suchfelder, aber nicht vorgeschrieben. Wenn dieses Eingabefeld Teil eines Formulars ist und das Formular gesendet wird, wird das Name-Wert-Paar `q=searchTerm` an den Server übertragen.

> [!NOTE]
> Denken Sie daran, für Ihr Eingabefeld einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) festzulegen. Andernfalls wird nichts übertragen.

### Unterschiede zwischen den Typen search und text

Die wichtigsten Unterschiede liegen darin, wie Browser mit ihnen umgehen. Einige Browser zeigen ein Kreuzsymbol an, auf das Benutzer klicken können, um den Suchbegriff sofort zu entfernen. In Chrome wird dies auch durch Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Suchfeld mit Fokusrahmen und dem Text „cats“. Am rechten Rand des Eingabefelds befindet sich ein x-Symbol.](chrome-cross-icon.png)

Moderne Browser speichern außerdem häufig automatisch zuvor eingegebene Suchbegriffe über verschiedene Domains hinweg. Bei späteren Suchen in Suchfeldern auf der jeweiligen Domain werden diese dann als Vorschläge zur automatischen Vervollständigung angezeigt. Das hilft Benutzern, die im Laufe der Zeit häufig nach gleichen oder ähnlichen Begriffen suchen. Dieser Screenshot stammt aus Firefox:

![Eingabefeld im Fehlerzustand mit rotem Fokusrahmen. Der Benutzer hat den Buchstaben „h“ eingegeben. Direkt unter dem Eingabefeld ist eine Auswahlliste mit den beiden Optionen „hello“ und „hermansje“ geöffnet.](firefox-auto-complete.png)

Sehen wir uns nun einige nützliche Techniken für Suchformulare an.

### Platzhalter festlegen

Mit dem Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) können Sie in Ihrem Suchfeld einen hilfreichen Platzhalter anzeigen, der einen Hinweis zur Eingabe gibt. Sehen Sie sich das folgende Beispiel an:

```html
<input type="search" id="mySearch" name="q" placeholder="Search the site…" />
```

Unten sehen Sie, wie der Platzhalter dargestellt wird:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Beschriftungen und Barrierefreiheit von Suchformularen

Ein Problem bei Suchformularen ist ihre Barrierefreiheit. Häufig wird das Suchfeld nicht beschriftet (obwohl möglicherweise ein Lupensymbol oder Ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer durch seine Platzierung normalerweise recht offensichtlich ist ([dieses Beispiel zeigt ein typisches visuelles Muster](#barrierefreies_suchformular)).

Für Benutzer von Screenreadern kann das jedoch verwirrend sein, da sie keinen gesprochenen Hinweis darauf erhalten, wozu das Suchfeld dient. Eine Möglichkeit, dies ohne Auswirkungen auf die visuelle Gestaltung zu vermeiden, ist die Verwendung von [Landmark-Elementen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role).

- Umschließen Sie die gesamte Suchfunktion mit einem {{HTMLElement("search")}}-Element. Dadurch entsteht ein Landmark-Bereich, den assistive Technologien ankündigen und schnell ansteuern können. Wenn sich Ihr `<input>` bereits in einem `<form>` befindet, können Sie alternativ dem `<form>`-Element [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) hinzufügen. Dadurch wird auch das `<form>` zu einer Such-Landmark. Das `<search>`-Element verwendet native HTML-Semantik, während `role="search"` breiter unterstützt wird und weniger Schreibaufwand erfordern kann, wenn bereits ein umschließendes `<form>` vorhanden ist.
- Wenn das nicht ausreicht, können Sie dem {{HTMLElement("input")}} selbst ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzufügen. Es sollte eine aussagekräftige Textbeschriftung enthalten, die der Screenreader vorliest. Sie dient als nicht visuelles Gegenstück zu `<label>`.

Sehen wir uns ein einfaches Beispiel an:

```html
<search>
  <input
    type="search"
    id="mySearch"
    name="q"
    placeholder="Search the site…"
    aria-label="Search through site content" />
</search>
```

Unten sehen Sie, wie es dargestellt wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Im Vergleich zum vorherigen Beispiel gibt es keinen sichtbaren Unterschied, aber Benutzer von Screenreadern erhalten deutlich mehr Informationen.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsfunktionen finden Sie unter [Wegweiser/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds lässt sich mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) steuern. Damit können Sie angeben, wie viele Zeichen gleichzeitig im Eingabefeld sichtbar sein sollen. In diesem Beispiel ist das Suchfeld etwa 30 Zeichen breit:

```html
<input
  type="search"
  id="mySearch"
  name="q"
  placeholder="Search the site…"
  size="30" />
```

Das Ergebnis ist dieses breitere Eingabefeld:

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

## Validierung

Für `<input>`-Elemente vom Typ `search` stehen dieselben Validierungsfunktionen wie für gewöhnliche Eingabefelder vom Typ `text` zur Verfügung. Bei Suchfeldern werden Sie Validierungsfunktionen im Allgemeinen seltener benötigen. In vielen Fällen sollten Benutzer nach beliebigen Begriffen suchen können. Es gibt jedoch Ausnahmen, etwa die Suche nach Daten mit einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben. Der HTML-Code lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird. Außerdem können Daten unter Umgehung Ihres HTML-Codes direkt an Ihren Server gesendet werden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können falsch formatierte, zu große oder vom falschen Typ stammende Daten in Ihrer Datenbank schwerwiegende Probleme verursachen.

### Hinweis zur Gestaltung

Für die Gestaltung gültiger und ungültiger Formularelemente stehen die nützlichen Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} zur Verfügung. In diesem Abschnitt verwenden wir das folgende CSS, das neben Eingabefeldern mit gültigen Werten ein Häkchen und neben solchen mit ungültigen Werten ein Kreuz anzeigt.

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

Für diese Technik muss außerdem nach dem Formularelement ein {{htmlelement("span")}}-Element als Platzhalter für die Symbole eingefügt werden. Das ist nötig, weil einige Browser Symbole, die direkt nach bestimmten Eingabetypen platziert werden, nicht richtig anzeigen.

### Eingabe als erforderlich festlegen

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie auf einfache Weise festlegen, dass vor dem Absenden des Formulars ein Wert eingegeben werden muss:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Wenn Sie versuchen, das Formular ohne Suchbegriff abzusenden, zeigt der Browser außerdem eine Meldung an. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit einer angehängten Meldung, die zum Ausfüllen des Felds auffordert](firefox-required-message.png)

Wenn Sie versuchen, das Formular mit anderen Arten ungültiger Eingabedaten abzusenden, werden andere Meldungen angezeigt. Sehen Sie sich dazu die folgenden Beispiele an.

### Länge des Eingabewerts

Mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) können Sie die Mindestlänge des eingegebenen Werts in Zeichen festlegen. Entsprechend legen Sie mit [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) dessen maximale Länge fest.

Das folgende Beispiel verlangt, dass der eingegebene Wert 4 bis 8 Zeichen lang ist.

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, wird eine entsprechende Fehlermeldung angezeigt, die sich je nach Browser unterscheidet. Mehr als 8 Zeichen lässt der Browser nicht zu.

### Ein Muster festlegen

Mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) können Sie einen regulären Ausdruck festlegen, dem der eingegebene Wert entsprechen muss, um als gültig zu gelten. Eine kurze Einführung finden Sie unter [Validierung anhand eines regulären Ausdrucks](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression).

Sehen wir uns ein Beispiel an: Angenommen, wir möchten ein Suchformular für Produkt-IDs bereitstellen und alle IDs bestehen aus zwei Buchstaben, gefolgt von vier Ziffern. Das folgende Beispiel setzt dies um:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

### Barrierefreies Suchformular

Dieses Beispiel zeigt ein typisches {{htmlelement("nav")}}-Menü mit einem Suchformular. [WAI-ARIA](/de/docs/Web/Accessibility/ARIA)-Funktionen machen das Formular für Benutzer assistiver Technologien besser zugänglich.

#### HTML

Die Hauptnavigation besteht aus einer Liste von Links. Das Such-{{htmlelement("form")}} erhält das Attribut [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role). Dadurch wird das `<form>` zu einer Such-Landmark, die assistiven Technologien angekündigt wird. Außerdem erhält das Element `<input type="search">` ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) als eindeutige Beschriftung, die Screenreader vorlesen.

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

Der Kürze halber haben wir CSS und JavaScript des Beispiels ausgeblendet, da sie für das Verständnis des HTML-Codes nicht relevant sind. Sie können sie sich ansehen, indem Sie im interaktiven Beispiel unten auf die Schaltfläche „Play“ klicken.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die zugrunde liegende Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
