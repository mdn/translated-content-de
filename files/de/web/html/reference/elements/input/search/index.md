---
title: '`<input type="search">` Wert des HTML-Attributs'
short-title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Texteinträge, die dafür gedacht sind, dass der Benutzer Suchanfragen eingibt. Sie sind funktional identisch zu [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User Agent")}} unterschiedlich gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenkette, die den im Suchfeld enthaltenen Wert darstellt. Sie können diesen über die [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe festgelegt sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert eine beliebige Zeichenkette oder eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Sucheingabefelder die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Listenwerte, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Suchfeld keine Mindestlänge.

Das Suchfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Sequenz von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Um das Muster herum sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten außerdem andere erläuternde Texte in der Nähe einfügen.

Siehe die Sektion [Angeben eines Musters](#ein_muster_angeben) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert und keine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt der Steuerung in eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) angeordnet ist, der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### readonly

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, dass es so ist; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den ({{cssxref("font")}}-Einstellungen) verwendeten Schriftarten.

Dies setzt _keine_ Beschränkung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Folgen Sie dem Standartverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung des übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, könnte nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements widerspiegeln, wenn die Präferenzen des {{Glossary("user_agent", "Benutzer-Agents")}} die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind für Sucheingabefelder verfügbar. Vermeiden Sie die Verwendung, wenn möglich.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher von Safari, Opera, Chrome usw. unterstützt), die, falls vorhanden, den {{Glossary("user_agent", "User Agent")}} auffordert, die Eingabe als Echtzeitsuche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der Benutzeragent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit startet (wie zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste beim Bearbeiten des Feldes).

Das `search`-Ereignis ist so geregelt, dass es nicht häufiger als in einem von der Implementierung definierten Intervall gesendet wird.

### results

Das `results`-Attribut – nur von Safari unterstützt – ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen zu überschreiben, die im nativen Dropdown-Menü des {{HTMLElement("input")}}-Elements mit vorherigen Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die standardmäßige maximale Anzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind dem Typ `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten im Wesentlichen gleichwertig, aber Benutzeragenten können sie standardmäßig anders gestalten (und natürlich können Webseiten Stylesheets verwenden, um ihnen benutzerdefinierte Stile zu verleihen).

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

`q` ist der gängigste `name`, der Sucheingaben gegeben wird, obwohl es nicht zwingend erforderlich ist. Beim Absenden wird das Datenname/Wert-Paar, das an den Server gesendet wird, `q=searchTerm` sein.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts übermittelt.

### Unterschiede zwischen Such- und Texttypen

Die Hauptunterschiede ergeben sich aus der Art und Weise, wie Browser sie behandeln. Zu beachten ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen, in Chrome wird diese Aktion auch ausgelöst, wenn Escape gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld mit Fokusrahmen, mit dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld, das die rechte Seite angrenzt.](chrome-cross-icon.png)

Darüber hinaus neigen moderne Browser dazu, automatisch zuvor eingetippte Suchbegriffe über Domains hinweg zu speichern, die dann als Autovervollständigungsmöglichkeiten erscheinen, wenn nachfolgende Suchanfragen in Sucheingabefeldern auf dieser Domain durchgeführt werden. Das hilft Benutzern, die über einen bestimmten Zeitraum hinweg häufig dieselben oder ähnliche Suchanfragen durchführen. Dieser Screenshot ist von Firefox:

![Ein Eingabefeld im Fehlerzustand mit rotem Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter in Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf gibt, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

### Etiketten für Suchformulare und Zugänglichkeit

Ein Problem mit Suchformularen ist ihre Zugänglichkeit; eine übliche Designpraxis besteht darin, kein Etikett für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupensymbol oder Ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches visuelles Muster](#zugängliches_suchformular)).

Dies könnte jedoch zu Verwirrung für Benutzer von Bildschirmlesegeräten führen, da sie keinen mündlichen Hinweis darauf erhalten, was das Sucheingabefeld ist. Ein Weg, dieses Problem zu umgehen, der Ihr visuelles Design nicht beeinträchtigt, besteht darin, [Landmark-Elemente](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) zu verwenden.

- Umrahmen Sie die gesamte Suchfunktionalität in ein {{HTMLElement("search")}}-Element, das eine Landmark-Region erstellt, die Hilfstechnologien ankündigen und schnell navigieren können. Wenn Ihr `<input>` bereits in einem `<form>` ist, können Sie alternativ [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) auf das `<form>`-Element hinzufügen, das auch das `<form>` zu einer Such-Landmark macht. Das `<search>`-Element verwendet native HTML-Semantik, während `role="search"` mehr Unterstützung hat und kürzer zu tippen sein kann, wenn Sie bereits einen `<form>`-Wrapper haben.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte eine beschreibende Textbeschriftung sein, die vom Vorleseprogramm vorgelesen wird; es dient als nicht-visueller Ersatz zu `<label>`.

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Benutzer von Bildschirmlesegeräten haben viel mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Wegweiser/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen über solche Zugänglichkeitsmerkmale.

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Mit diesem können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld zum Beispiel 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` haben dieselben Validierungsmerkmale zur Verfügung wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie allgemeine Validierungsmerkmale für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach alles suchen dürfen, aber es gibt ein paar Fälle zu berücksichtigen, wie zum Beispiel Suchanfragen gegen Daten eines bekannten Formats.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind und so weiter) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen, die für das Styling von gültigen/ungültigen Formularelementen verfügbar sind: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das einen Haken neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole fungiert. Dies war notwendig, da einige Eingabetypen in einigen Browsern keine Symbole sehr gut darstellen, die direkt nach ihnen platziert sind.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut als einfache Möglichkeit verwenden, die Eingabe eines Werts erforderlich zu machen, bevor das Formular gesendet werden kann:

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

Wenn Sie versuchen, das Formular zu senden, ohne einen Suchbegriff einzugeben, zeigt der Browser eine Nachricht an. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angefügter Nachricht, die sagt: Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Unterschiedliche Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten in den Eingabefeldern zu senden; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mithilfe des [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attributs angeben; verwenden Sie ebenso [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

Im folgenden Beispiel wird angegeben, dass der eingegebene Wert zwischen 4 und 8 Zeichen lang sein muss.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu senden, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser variiert). Wenn Sie versuchen, über 8 Zeichen hinauszugehen, lässt der Browser dies nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir möchten ein Produkt-ID-Suchformular bereitstellen, und die IDs sind alle Codes aus zwei Buchstaben, gefolgt von vier Zahlen. Das folgende Beispiel behandelt dies:

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

### Zugängliches Suchformular

Dieses Beispiel zeigt ein typisches {{htmlelement("nav")}}-Menü, das ein Suchformular enthält. [WAI-ARIA](/de/docs/Web/Accessibility/ARIA)-Merkmale werden verwendet, um das Formular für Benutzer von Hilfstechnologie (AT) zugänglicher zu machen.

#### HTML

Die Hauptnavigationspunkte bestehen aus einer Liste von Links. Dem Such{{htmlelement("form")}} wird ein [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Attribut zugewiesen, wodurch das `<form>` zu einer Such-Landmark wird und es an AT ankündigt. Wir geben dem `<input type="search">`-Element auch ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um ihm eine klare Beschriftung zu geben, die von Bildschirmlesegeräten vorgelesen wird.

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
  background: #333;
  border: 0;
  color: white;
}
```

Wir haben das CSS und JavaScript des Beispiels zur Kürze ausgeblendet, da es für das Verständnis des HTML nicht relevant ist. Sie können sie ansehen, indem Sie die "Abspielen"-Schaltfläche im Live-Beispiel unten drücken.

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
        Eine Zeichenkette, die den im Suchfeld
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
- {{HTMLElement("input")}} und die darauf basierende Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
