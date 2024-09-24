---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`search`** sind Textfelder, die dazu gedacht sind, dass der Benutzer Suchanfragen eingibt. Sie sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text)-Eingaben, können jedoch vom {{Glossary("user agent")}} unterschiedlich gestaltet werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, der den Wert im Suchfeld darstellt. Sie können diesen Wert mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn für die Eingabe keine Validierungsbeschränkungen festgelegt sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Sucheingaben folgende Attribute.

### list

Der Wert des list-Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Der {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenanzahl (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Suchfeld eingeben kann. Dieser Wert muss eine ganze Zahl von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer als oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenanzahl (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Suchfeld eingeben kann. Dieser Wert muss eine nicht-negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Er muss ein gültiger regulärer JavaScript-Ausdruck sein, so wie er vom Typ {{jsxref("RegExp")}} verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag ist beim Kompilieren des regulären Ausdrucks spezifiziert, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII")}}. Um den Ausdruckstext dürfen keine Schrägstriche („/“) angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Ein Muster angeben](#ein_muster_angeben) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstelle einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt einer Steuerung eine Richtung ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) hat, der Platzhalter jedoch in entgegengesetzter Richtung angezeigt werden muss, können Sie Unicode-Algorithmus-Formatierungszeichen für bidirektionalen Text verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie Sie Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der {{domxref("HTMLInputElement")}}-Eigenschaft `value` durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden, dass dies der Fall ist; die resultierende Eingabe kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen, die verwendet werden) schmaler oder breiter als die angegebene Zeichenzahl sein.

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für beliebige bearbeitbare Inhalte verwendet werden, aber hier betrachten wir spezifische Anwendungsfälle im Zusammenhang mit der Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Verwendet das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann eine aktivierte Rechtschreibprüfung haben, wenn es nicht das [readonly](#readonly)-Attribut hat und nicht deaktiviert ist.

Der vom Lesen von `spellcheck` zurückgegebene Wert kann den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Kontrolle nicht widerspiegeln, wenn die {{Glossary("user agent", "Einstellungen des Benutzeragents")}} die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute stehen Sucheingabefeldern zur Verfügung. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht vermeiden.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Erlaubte Werte sind:

- `on`
  - : Aktiviert automatische Korrektur von Tippfehlern sowie Verarbeitung von Textsubstitutionen, sofern welche konfiguriert sind.
- `off`
  - : Deaktiviert automatische Korrektur und Textsubstitutionen.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also von Safari, Opera, Chrome usw. unterstützt), die, wenn vorhanden, dem {{Glossary("user agent")}} mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Felds bearbeitet, sendet der Benutzeragent {{domxref("HTMLInputElement/search_event", "search")}}-Ereignisse an das {{domxref("HTMLInputElement")}}-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das {{domxref("HTMLInputElement/search_event", "search")}}-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche startet (zum Beispiel durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste, während das Feld bearbeitet wird).

Das `search`-Ereignis ist so begrenzt, dass es nicht häufiger als in einem implementierungsdefinierten Intervall gesendet wird.

### results

Das `results`-Attribut – nur von Safari unterstützt – ist ein numerischer Wert, mit dem Sie die maximale Anzahl von Einträgen überschreiben können, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}}-Elements von vorherigen Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert vorliegt, wird die standardmäßige maximale Anzahl an Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente des Typs `search` sind denjenigen des Typs `text` sehr ähnlich, außer dass sie speziell für die Handhabung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten im Wesentlichen gleichwertig, aber Benutzeragenten können sie standardmäßig unterschiedlich gestalten (und natürlich können Websites Stylesheets verwenden, um benutzerdefinierte Stile anzuwenden).

### Grundlegendes Beispiel

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

`q` ist der am häufigsten verwendete `name` für Sucheingaben, obwohl es nicht zwingend ist. Beim Einreichen wird das Datenname/Wert-Paar `q=searchterm` an den Server gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, ansonsten wird nichts übermittelt.

### Unterschiede zwischen Such- und Textarten

Die wesentlichen Unterschiede liegen darin, wie Browser sie handhaben. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff bei Bedarf sofort zu entfernen, in Chrome wird diese Aktion auch durch Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusrahmen, mit dem Text 'cats'. Es gibt ein x-Symbol, das an der rechten Seite des Eingabefelds anliegt.](chrome-cross-icon.png)

Außerdem neigen moderne Browser dazu, automatisch Suchbegriffe zu speichern, die zuvor domainübergreifend eingegeben wurden, und diese dann als Auto-Vervollständigungsoptionen anzuzeigen, wenn nachfolgende Suchen in Sucheingabefeldern auf dieser Domain durchgeführt werden. Dies hilft Benutzern, die dazu neigen, über einen längeren Zeitraum immer wieder dieselben oder ähnliche Suchanfragen zu machen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben "h" eingegeben. Eine Popup-Auswahlliste wird direkt unter dem Eingabefeld geöffnet und zeigt zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An dieser Stelle schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter einrichten

Sie können einen nützlichen Platzhalter in Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Ein Problem bei Suchformularen ist ihre Barrierefreiheit; eine gängige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupensymbol oder Ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch Verwirrung bei Bildschirmlesebenutzern verursachen, da sie keine verbale Angabe darüber erhalten, was die Sucheingabe ist. Eine Möglichkeit, dieses Problem zu umgehen, ohne Ihr visuelles Design zu beeinträchtigen, besteht darin, [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)-Funktionen zu verwenden:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element veranlasst Bildschirmlesegeräte, anzukündigen, dass das Formular ein Suchformular ist.
- Falls dies nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut direkt auf dem {{HTMLElement("input")}} verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

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

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber für Bildschirmlesebenutzer stehen viel mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Signposts/Landmarks](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen zu solchen Zugänglichkeitsfunktionen.

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente des Typs `search` verfügen über dieselben Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie im Allgemeinen Validierungsfunktionen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer in der Lage sein, nach allem zu suchen, aber es gibt einige Fälle, die berücksichtigt werden sollten, wie z. B. Suchen gegen Daten bekannten Formats.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten anzeigt.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularfeld platziert wird und als Halter für die Symbole fungiert. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt danach platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um einfach das Eingeben eines Werts zu erzwingen, bevor das Formular abgeschickt werden kann:

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

Darüber hinaus zeigt der Browser eine Nachricht an, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die sagt: Bitte füllen Sie dieses Feld aus.](firefox-required-message.png)

Unterschiedliche Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit unterschiedlichen Arten von ungültigen Daten innerhalb der Eingaben abzusenden; siehe die folgenden Beispiele.

### Eingabewertlänge

Sie können mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut eine Mindestlänge in Zeichen für den eingegebenen Wert angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert zwischen 4 und 8 Zeichen lang ist.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, über 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Schnellkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Produktsucheformular bereitstellen, und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Ein gutes Beispiel für ein Suchformular im Kontext finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

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
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methode</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
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
- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}}-Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
