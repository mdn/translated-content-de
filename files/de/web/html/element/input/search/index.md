---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`search`** sind Textfelder, die dafür vorgesehen sind, dass der Benutzer Suchanfragen eingibt. Sie sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text) Eingaben, können jedoch vom {{Glossary("user_agent", "User-Agent")}} unterschiedlich gestaltet werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, der den im Suchfeld enthaltenen Wert darstellt. Sie können ihn mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert jeder beliebige Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts länger ist als `maxlength` UTF-16-Codeeinheiten. Eine Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dieser Wert muss eine nicht negative Ganzzahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts kürzer ist als `minlength` UTF-16-Codeeinheiten. Eine Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Vorwärtsschrägstriche sollten nicht um den Mustertext herum angegeben werden.

Falls das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erläutern, welche Anforderungen bestehen, um das Muster zu erfüllen. Sie sollten auch anderen erläuternden Text in der Nähe einfügen.

Siehe den Abschnitt [Angabe eines Musters](#festlegen_eines_musters) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp darstellt, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Ausrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der `placeholder` jedoch in der entgegengesetzten Ausrichtung angezeigt werden muss, können Sie Zeichen zur Formatierung des Unicode-Textflussalgorithmus verwenden, um die Ausrichtung innerhalb des `placeholder` zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise, muss aber nicht genau sein; das resultierende Eingabefeld kann je nach Zeichen und Schrift ({{cssxref("font")}}-Einstellungen in Verwendung) schmaler oder breiter sein als die angegebene Zeichenzahl.

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele etwa auf einmal zu sehen sind. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzuzeigen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, hier betrachten wir jedoch die Besonderheiten im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn nicht das [readonly](#readonly)-Attribut festgelegt ist und es nicht deaktiviert ist.

Der Wert, der durch Ablesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Einstellungen des {{Glossary("user_agent", "User-Agent")}} diese Einstellung überschreiben.

## Nicht standardmäßige Attribute

Die folgenden, nicht standardmäßigen Attribute sind für Suchfeldeingaben verfügbar. Vermeiden Sie, sie nach Möglichkeit zu verwenden.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome usw.), die, wenn vorhanden, den {{Glossary("user_agent", "User-Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Felds bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer eine Suche explizit initiiert (etwa durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste beim Bearbeiten des Feldes).

Das `search`-Ereignis ist so begrenzt, dass es nicht häufiger als in einem implementierungsbedingten Intervall gesendet wird.

### results

Das `results`-Attribut—nur von Safari unterstützt—ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}}-Elements von vorherigen Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben ist, wird die Standardanzahl der Einträge des Browsers verwendet.

## Verwendung von Suchfeldern

`<input>`-Elemente des Typs `search` sind sehr ähnlich wie solche des Typs `text`, mit dem Unterschied, dass sie speziell dafür vorgesehen sind, Suchbegriffe zu verarbeiten. Sie sind im Verhalten im Wesentlichen gleichwertig, aber die User-Agents können sich entscheiden, sie standardmäßig anders zu stylen (und natürlich können Websites Stylesheets verwenden, um benutzerdefinierte Stile auf sie anzuwenden).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

So wird es gerendert:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der am häufigsten vergebene `name` bei Sucheingaben, obwohl es nicht verpflichtend ist. Bei der Übertragung werden Name/Wert-Paare an den Server gesendet: `q=searchTerm`.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, sonst wird nichts übertragen.

### Unterschiede zwischen Such- und Texttypen

Die grundlegenden Unterschiede liegen in der Art und Weise, wie Browser sie handhaben. Das erste, was zu beachten ist, ist, dass einige Browser ein Kreuzsymbol anzeigen, das angeklickt werden kann, um den Suchbegriff sofort zu entfernen. In Chrome wird diese Aktion auch ausgelöst, wenn Escape gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusring, mit dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld, das die rechte Seite überbrückt.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser tendenziell auch automatisch vorher eingegebene Suchbegriffe domänenübergreifend, die dann als Auto-Complete-Optionen erscheinen, wenn nachfolgende Suchen in Sucheingaben auf dieser Domäne durchgeführt werden. Dies hilft Benutzern, die dazu neigen, immer wieder nach denselben oder ähnlichen Suchanfragen zu überlegen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Auswahl-Liste wird direkt unterhalb des Eingabefeldes geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An dieser Stelle wollen wir einige nützliche Techniken betrachten, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter in Ihrer Suchfeld-Eingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, durch das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut. Schauen Sie sich das folgende Beispiel an:

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

Wie der Platzhalter gerendert wird, sehen Sie unten:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Suchformulare und Barrierefreiheit

Ein Problem mit Suchformularen ist ihre Zugänglichkeit; eine gängige Designpraxis ist es, kein Label für das Suchfeld bereitzustellen (obwohl es möglicherweise ein Lupensymbol oder ähnliches gibt), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Screenreader-Benutzern Verwirrung stiften, da sie keine verbale Angabe dafür haben, was die Suchfeld-Eingabe ist. Ein Weg darum herum, der Ihr visuelles Design nicht beeinträchtigt, ist die Verwendung von [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)-Funktionen:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element sorgt dafür, dass Screenreader ankündigen, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Screenreader vorgelesen wird; es dient als nicht visuelles Äquivalent zu `<label>`.

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

Wie dies gerendert wird, sehen Sie unten:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Screenreader-Benutzer haben weitaus mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Signposts/Landmarks](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen zu solchen Zugänglichkeitsmerkmalen.

### Physische Größe des Eingabeelements

Die physische Größe der Eingabebox kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

Das Ergebnis ist diese größere Eingabebox:

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

## Validierung

`<input>`-Elemente des Typs `search` haben die gleichen Validierungsfunktionen, die ihnen zur Verfügung stehen wie normale `text` Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer in der Lage sein, nach allem zu suchen, aber es gibt einige Fälle zu beachten, wie beispielsweise Suchen gegen Daten mit einem bekannten Format.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte eine Katastrophe drohen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Ein Hinweis zum Styling

Es gibt nützliche Pseudoklassen zum Styling gültiger/ungültiger Formularelemente: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben platziert, die gültige Werte enthalten, und ein Kreuz neben Eingaben, die ungültige Werte enthalten.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird, um als Halter für die Symbole zu dienen. Dies war notwendig, weil einige Eingabetypen in einigen Browsern keine Symbole gut anzeigen, die direkt nach ihnen platziert werden.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um auf einfache Weise sicherzustellen, dass vor der Formularübermittlung ein Wert eingegeben werden muss:

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

So wird es gerendert:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Zusätzlich wird, wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff zu übermitteln, der Browser eine Nachricht anzeigen. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Meldung, die sagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Unterschiedliche Nachrichten werden angezeigt, wenn versucht wird, das Formular mit unterschiedlichen Arten von ungültigen Daten in den Eingaben zu übermitteln; siehe die folgenden Beispiele.

### Länge des Eingabewerts

Sie können eine Mindestlänge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Werts festzulegen.

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

So wird es gerendert:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Festlegen eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig zu gelten (siehe [Validieren gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir wollten ein Produkt-ID-Suchformular bereitstellen und die IDs waren alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

So wird es gerendert:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Ein gutes Beispiel für ein verwendetes Suchformular finden Sie in unserem Beispiel [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) ([live ansehen](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im
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
