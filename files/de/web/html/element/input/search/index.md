---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text)-Eingaben, können jedoch vom [User Agent](/de/docs/Glossary/user_agent) unterschiedlich gestylt werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, der den Wert darstellt, der im Suchfeld enthalten ist. Sie können diesen Wert mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn für die Eingabe keine Validierungseinschränkungen vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Neben den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Sucheingabefelder die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen angegeben. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer im Suchfeld eingeben kann. Dieser Wert muss eine Ganzzahl sein, die 0 oder höher ist. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Code-Einheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer im Suchfeld eingeben kann. Dieser Wert muss eine nicht-negative Ganzzahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Code-Einheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value)-Wert erfüllen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird angegeben, wenn der reguläre Ausdruck kompiliert wird, damit das Muster als Folge von Unicode-Codierungspunkten behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII). Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Details und ein Beispiel finden Sie im Abschnitt [Ein Muster angeben](#ein_muster_angeben).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Zeichen zur Formatierung des Unicode-Bidirektionalitätsalgorithmus verwenden, um die Richtung innerhalb des Platzhalters außer Kraft zu setzen; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch von JavaScript direkt über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies exakt sein oder nicht und sollte nicht darauf vertraut werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl an Zeichen, abhängig von den Zeichen und der ({{cssxref("font")}}-Einstellungen in Gebrauch).

Dies setzt kein Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig angezeigt werden können. Um ein oberes Limit für die Länge der Eingabedaten zu setzen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck) ist ein globales Attribut, das verwendet wird, um anzuzeigen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für alle bearbeitbaren Inhalte verwendet werden, hier betrachten wir jedoch spezifische Details im Zusammenhang mit der Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Einstellungen des [User Agents](/de/docs/Glossary/user_agent) die Einstellung außer Kraft setzen.

## Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind für Suchfeld-Eingabefelder verfügbar. Grundsätzlich sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht vermeiden.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, wenn diese konfiguriert sind.
- `off`
  - : Deaktiviert die automatische Korrektur und Textsubstitutionen.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome, etc.), die, falls vorhanden, dem [User Agent](/de/docs/Glossary/user_agent) mitteilt, die Eingabe als Live-Suche zu verarbeiten. Wenn der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z. B. durch Drücken der <kbd>Eingabetaste</kbd> oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

Das `search`-Ereignis ist ratengesteuert, so dass es nicht häufiger als in einem Implementations-definierten Intervall gesendet wird.

### results

Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der es Ihnen ermöglicht, die maximale Anzahl der Einträge im nativ bereitgestellten Dropdown-Menü vorheriger Suchanfragen des {{HTMLElement("input")}}-Elements zu überschreiben.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die Standard-Mindestanzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denjenigen vom Typ `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten praktisch gleichwertig, aber User Agents können sich dafür entscheiden, sie standardmäßig anders zu stylen (und natürlich können Websites Stylesheets verwenden, um ihnen benutzerdefinierte Styles zuzuweisen).

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

`q` ist der häufigste `name`, der Suchfeldern gegeben wird, obwohl es nicht zwingend ist. Wenn das Formular abgeschickt wird, wird das Name/Wert-Paar `q=searchterm` an den Server gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, andernfalls wird nichts abgeschickt.

### Unterschiede zwischen den Typen "search" und "text"

Die Hauptunterschiede liegen darin begründet, wie Browser sie behandeln. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuz-Symbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen; in Chrome wird diese Aktion auch beim Drücken auf Escape ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussierte Suchfeld-Eingabe mit Fokusring, mit dem Text 'cats'. Es gibt ein x-Symbol in der Eingabe rechts neben den Text.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser auch automatisch zuvor eingegebene Suchbegriffe domänenübergreifend, die dann als Autovervollständigung angeboten werden, wenn nachfolgende Suchanfragen innerhalb von Suchfeldern auf dieser Domäne erfolgen. Dies hilft Benutzern, die dazu neigen, über einen längeren Zeitraum hinweg ähnliche Suchanfragen zu tätigen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Auswahl-Popup-Liste ist direkt unter dem Eingabefeld geöffnet und bietet zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

Lassen Sie uns an diesem Punkt einige nützliche Techniken betrachten, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf gibt, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Ein Problem bei Suchformularen ist ihre Barrierefreiheit; eine häufige Designpraxis besteht darin, kein Label für das Suchfeld bereitzustellen (obwohl möglicherweise ein Lupen-Symbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Nutzern von Bildschirmlesegeräten zu Verwirrung führen, da sie keine verbale Angabe darüber erhalten werden, was die Sucheingabe ist. Ein Weg, dies zu umgehen, der sich nicht auf Ihr visuelles Design auswirkt, ist die Verwendung von [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) Funktionen:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element führt dazu, dass Bildschirmleser ankündigen, dass es sich bei dem Formular um ein Suchformular handelt.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibendes Textlabel sein, das vom Bildschirmleser vorgelesen wird; es wird als non-visuelles Äquivalent zu `<label>` verwendet.

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

Sie können sehen, wie dies unten gerendert wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber für Bildschirmleser-Nutzer steht deutlich mehr Information zur Verfügung.

> [!NOTE]
> Siehe [Schilder/Landmarken](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen über solche Barrierefreiheitsfunktionen.

### Größe des physischen Eingabeelements

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

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

## Validierung

`<input>`-Elemente vom Typ `search` verfügen über dieselben Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie im Allgemeinen Validierungsfunktionen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, aber es gibt einige Fälle, die in Betracht gezogen werden sollten, wie z. B. Suchen gegen Daten in einem bekannten Format.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Scripts, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen an dem HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Server-seitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe entstehen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, die den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen, die für das Styling von gültigen/ungültigen Formularelemen verwendet werden können: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir folgendes CSS, das ein Häkchen neben Eingaben platziert, die gültige Werte enthalten, und ein Kreuz neben Eingaben, die ungültige Werte enthalten.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird, welches als Halter für die Icons fungiert. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut als einfachen Weg verwenden, um es erforderlich zu machen, dass ein Wert eingegeben wird, bevor die Formularübermittlung erlaubt ist:

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

Zusätzlich wird, wenn Sie versuchen, das Formular ohne einen Suchbegriff abzuschicken, der Browser eine Nachricht anzeigen. Das folgende Beispiel ist aus Firefox:

![Formularfeld mit angehängter Nachricht, die sagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten, die in den Eingaben enthalten sind, abzuschicken; siehe die folgenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs angeben; verwenden Sie das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4-8 Zeichen lang ist.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, 8 Zeichen zu überschreiten, lässt der Browser dies nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert folgen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Crash-Kurs).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Suchformular für Produkt-IDs bereitstellen, und die IDs wären alle Codes aus zwei Buchstaben, gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Ein gutes Beispiel für ein in Kontext verwendetes Suchformular finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles)-Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
