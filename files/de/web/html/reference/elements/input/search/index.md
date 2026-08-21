---
title: '`<input type="search">` HTML-Attributwert'
short-title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{HTMLElement("input")}}-Elemente des Typs **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User-Agent")}} anders gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenkette, die den im Suchfeld enthaltenen Wert darstellt. Sie können diesen Wert mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert jede beliebige Textzeichenkette oder eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Sucheingabefelder die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Suchfeld-Eingabe keine Mindestlänge.

Das Suchfeld schlägt bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, sofern angegeben, ist ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe übereinstimmen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch andere erläuternde Texte in der Nähe hinzufügen.

Siehe den Abschnitt [Ein Muster angeben](#ein_muster_angeben) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf nicht_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektionalitätsformatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie Sie Unicode-Steuerungen für bidi Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Festlegen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft von JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollten nicht darauf verlassen werden, dass es exakt ist; die resultierende Eingabe kann je nach Zeichen und den ({{cssxref("font")}}-Einstellungen im Einsatz) genutzten Schriftarten schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies legt _kein_ Limit fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur annähernd an, wie viele gleichzeitig angezeigt werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob eine Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten in Bezug auf die Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerungselements wider, wenn die {{Glossary("user_agent", "Einstellungen")}} des User-Agents die Einstellung übersteuern.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind für Such-Eingabefelder verfügbar. Vermeiden Sie deren Verwendung, soweit möglich.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome usw.), die, falls vorhanden, den {{Glossary("user_agent", "User Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer die Suche ausdrücklich initiiert (z. B. durch Drücken der <kbd>Enter</kbd> oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

Das `search`-Ereignis ist auf eine Rate begrenzt, sodass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

### results

Das `results`-Attribut — nur von Safari unterstützt — ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl von Einträgen in der nativ bereitgestellten Dropdown-Liste des {{HTMLElement("input")}}-Elements mit vorherigen Suchanfragen zu überschreiben.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn kein Wert angegeben wird oder ein ungültiger Wert gegeben ist, wird die Standard-Maximalanzahl von Einträgen des Browsers verwendet.

## Verwendung von Such-Eingaben

`<input>`-Elemente des Typs `search` sind denen des Typs `text` sehr ähnlich, außer dass sie speziell dafür vorgesehen sind, Suchbegriffe zu verarbeiten. Sie sind im Verhalten im Wesentlichen gleichwertig, aber Benutzeragenten dürfen sie standardmäßig anders gestalten (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Stile zuzuweisen).

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

`q` ist der gebräuchlichste `name`, der Such-Eingaben gegeben wird, obwohl es nicht zwingend ist. Wenn das Formular abgeschickt wird, wird das Daten Name/Wert-Paar als `q=searchTerm` an den Server gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, ansonsten wird nichts gesendet.

### Unterschiede zwischen Such- und Texttypen

Die wichtigsten grundlegenden Unterschiede ergeben sich aus der Art und Weise, wie Browser mit ihnen umgehen. Das erste Merkmal ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen. In Chrome wird diese Aktion auch ausgelöst, wenn Escape gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusring, mit dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld, das die rechte Seite anschließt.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser in der Regel automatisch Suchbegriffe, die zuvor innerhalb von Domains eingegeben wurden, die dann als Autovervollständigungsvorschläge erscheinen, wenn nachfolgende Suchen in Such-Eingaben auf dieser Domain durchgeführt werden. Dies hilft Benutzern, die dazu neigen, über einen langen Zeitraum hinweg nach denselben oder ähnlichen Suchanfragen zu suchen. Dieser Screenshot stammt von Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste wird direkt unter dem Eingabefeld angezeigt, mit den Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt werfen wir einen Blick auf einige nützliche Techniken, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter in Ihr Suchfeld einfügen, der mithilfe des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs einen Hinweis darauf geben könnte, was zu tun ist. Sehen Sie sich das folgende Beispiel an:

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

Ein Problem bei Suchformularen ist ihre Barrierefreiheit; eine gängige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupensymbol oder ähnliches geben könnte), da der Zweck eines Suchformulars normalerweise für sehende Benutzer aufgrund der Platzierung offensichtlich ist ([dieses Beispiel zeigt ein typisches visuelles Muster](#barrierefreies_suchformular)).

Dies könnte jedoch für Bildschirmleser-Benutzer zu Verwirrung führen, da sie keinerlei verbale Hinweise darauf erhalten, was die Sucheingabe ist. Ein möglicher Ausweg, der Ihr visuelles Design nicht beeinträchtigt, ist die Verwendung von [Landmark-Elementen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role).

- Wickeln Sie die gesamte Suchfunktion in ein {{HTMLElement("search")}}-Element, das eine Landmarke-Region erstellt, die von unterstützenden Technologien angekündigt und schnell navigiert werden kann. Wenn Ihr `<input>` bereits in einem `<form>` ist, können Sie alternativ [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) zum `<form>`-Element hinzufügen, was das `<form>` ebenfalls zu einer Suchlandmarke macht. Das `<search>`-Element verwendet native HTML-Semantik, während `role="search"` mehr Unterstützung bietet und möglicherweise kürzer zu tippen ist, wenn Sie bereits einen `<form>`-Wrapper haben.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut auf das {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es wird als non-visuelles Äquivalent zu `<label>` verwendet.

Werfen wir einen Blick auf ein minimales Beispiel:

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

Es gibt keinen visuellen Unterschied zu dem vorherigen Beispiel, aber Bildschirmleser-Benutzer haben wesentlich mehr Informationen.

> [!NOTE]
> Siehe [Signposts/Landmarks](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen über solche Barrierefreiheits-Merkmale.

### Physische Größe des Eingabefelds

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen spezifizieren, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld z. B. 30 Zeichen breit:

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

`<input>`-Elemente des Typs `search` haben dieselben Validierungsfunktionen zur Verfügung wie reguläre `text`-Eingaben. Es ist unwahrscheinlicher, dass Sie Validierungsfunktionen für Suchfelder im Allgemeinen verwenden möchten. In vielen Fällen sollten Benutzer einfach alles suchen dürfen, aber es gibt einige Fälle zu beachten, wie z.B. Suche in Daten mit einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das neben Eingaben mit gültigen Werten ein Häkchen (Haken) und neben Eingaben mit ungültigen Werten ein Kreuz anzeigt.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}}-Element nach dem Formularelement platziert wird, das als Halter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht sehr gut darstellen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um einfach festzulegen, dass die Eingabe eines Wertes erforderlich ist, bevor die Formulareingabe erlaubt ist:

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

{{EmbedLiveSample('Making_input_required', 600, 40)}}

Außerdem wird, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzuschicken, eine Meldung im Browser angezeigt. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angefügter Nachricht, die besagt: Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten, die in den Eingaben enthalten sind, abzusenden; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

Das untenstehende Beispiel erfordert, dass der eingegebene Wert eine Länge von 4 bis 8 Zeichen haben muss.

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

{{EmbedLiveSample('Input_value_length', 600, 40)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, wird Ihnen eine entsprechende Fehlermeldung angezeigt (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, über 8 Zeichen einzugeben, lässt der Browser es nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crash-Kurs).

Werfen wir einen Blick auf ein Beispiel. Angenommen, wir wollten ein Formular zur Produktsuche bereitstellen, und die IDs waren alle Codes bestehend aus zwei Buchstaben, gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

{{EmbedLiveSample('Specifying_a_pattern', 600, 40)}}

## Beispiele

### Barrierefreies Suchformular

Dieses Beispiel zeigt ein typisches {{htmlelement("nav")}}-Menü, das ein Suchformular einschließt. [WAI-ARIA](/de/docs/Web/Accessibility/ARIA)-Funktionen werden verwendet, um das Formular barrierefreier für Benutzer von unterstützenden Technologien (AT) zu machen.

#### HTML

Die Hauptnavigationspunkte bestehen aus einer Liste von Links. Das Such-{{htmlelement("form")}} erhält ein [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)-Attribut, das das `<form>` zu einer Suchlandmarke macht und es für AT ankündigt. Wir geben dem `<input type="search">`-Element auch ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um ihm eine klare Beschriftung zu geben, die von Bildschirmlesern vorgelesen wird.

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

Wir haben das CSS und JavaScript des Beispiels aus Gründen der Kürze ausgeblendet, da sie für das Verständnis des HTML nicht relevant sind. Sie können sie überprüfen, indem Sie im folgenden Live-Beispiel die Schaltfläche "Abspielen" drücken.

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
        Eine Zeichenfolge, die den Wert im Suchfeld darstellt.
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
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)
