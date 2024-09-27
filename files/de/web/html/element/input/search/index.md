---
title: <input type="search">
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, die dafür ausgelegt sind, dass der Benutzer Suchanfragen eingeben kann. Sie sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text)-Eingaben, können jedoch vom [User-Agent](/de/docs/Glossary/user_agent) unterschiedlich gestylt werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält eine Zeichenkette, die den im Suchfeld enthaltenen Wert darstellt. Sie können diesen im JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value)-Eigenschaft abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert beliebigen Text oder eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Suchfelder die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die vorgeschlagenen Werte sind Empfehlungen, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert kleiner oder gleich dem von `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Sucheingabefeld keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn es angegeben ist, ein regulärer Ausdruck, den der `value` des Eingabefelds zum Bestehen der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) entsprechen muss. Es muss ein gültiger JavaScript-RegEx-Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codestellen und nicht als [ASCII](/de/docs/Glossary/ASCII) behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu entsprechen. Sie sollten auch in der Nähe einen weiteren erklärenden Text einfügen.

Siehe den Abschnitt [Festlegen eines Musters](#festlegen_eines_musters) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, der Platzhalter jedoch in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Zweiseiten-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch direkt durch JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` bei Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut keine Auswirkungen.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies ungefähr sein und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann je nach den Zeichen und dem eingegebenen Font ({{cssxref("font")}}-Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt keine Begrenzung dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur, wie viele ungefähr gleichzeitig gesehen werden können. Um ein Oberlimit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck) ist ein globales Attribut, das verwendet wird, um anzuzeigen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn das [readonly](#readonly)-Attribut nicht festgelegt ist und es nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Präferenzen des [User-Agents](/de/docs/Glossary/user_agent) die Einstellung außer Kraft setzen.

## Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute stehen für Sucheingabefelder zur Verfügung. Im Allgemeinen sollten Sie sie nicht verwenden, es sei denn, es lässt sich nicht vermeiden.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist eine Zeichenkette, die angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern, sowie die Verarbeitung von Textsubstitutionen, falls konfiguriert.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textsubstitutionen.

### incremental

Das `incremental`-Booleanattribut ist eine WebKit- und Blink-Erweiterung (somit unterstützte von Safari, Opera, Chrome, etc.), die, wenn vorhanden, den [User-Agent](/de/docs/Glossary/user_agent) anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld repräsentiert. Dies ermöglicht Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche editiert.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur dann gesendet, wenn der Benutzer die Suche explizit einleitet (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

Das `search`-Ereignis ist in der Rate begrenzt, sodass es nicht häufiger als in einem von der Implementierung definierten Intervall gesendet wird.

### results

Das `results`-Attribut — nur von Safari unterstützt — ist ein numerischer Wert, der Ihnen erlaubt, die maximale Anzahl von Einträgen zu überschreiben, die im nativ bereitgestellten Dropdown-Menü des {{HTMLElement("input")}}-Elements für frühere Suchanfragen angezeigt werden.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht bereitgestellt oder ein ungültiger Wert angegeben wird, wird die standardmäßige Höchstanzahl von Einträgen des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denen vom Typ `text` sehr ähnlich, mit dem Unterschied, dass sie speziell für die Verarbeitung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten grundsätzlich gleichwertig, aber User-Agents können sich entscheiden, sie standardmäßig anders zu stylen (und natürlich können Websites Stylesheets nutzen, um benutzerdefinierte Stile darauf anzuwenden).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

So wird es angezeigt:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der gebräuchlichste `name`, der Sucheingaben gegeben wird, obwohl dies nicht zwingend erforderlich ist. Bei der Übermittlung wird das Datenname/-wert-Paar, das an den Server gesendet wird, `q=searchterm` sein.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Element/input#name) für Ihre Eingabe festzulegen, ansonsten wird nichts gesendet.

### Unterschiede zwischen Such- und Texttypen

Die wichtigsten grundlegenden Unterschiede liegen in der Art und Weise, wie Browser damit umgehen. Das Erste, was zu beachten ist, ist, dass einige Browser ein Kreuz-Symbol anzeigen, das angeklickt werden kann, um den Suchbegriff bei Bedarf sofort zu entfernen; in Chrome wird diese Aktion auch durch Drücken der Escape-Taste ausgelöst. Der folgende Screenshot stammt aus Chrome:

![Fokussiertes Suchfeld, mit Fokusring, mit dem Text 'cats'. Es gibt ein X-Symbol im Eingabefeld an der rechten Seite.](chrome-cross-icon.png)

Moderne Browser speichern außerdem häufig automatisch zuvor eingegebene Suchbegriffe domänenübergreifend, die dann als Autovervollständigungsvorschläge angezeigt werden, wenn in Suchfeldern innerhalb dieser Domäne nachfolgenden Suchen durchgeführt werden. Dies hilft Benutzern, die häufig nach den gleichen oder ähnlichen Suchanfragen suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusring. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Popup-Auswahlliste ist direkt unter dem Eingabefeld geöffnet mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt lassen Sie uns einige nützliche Techniken betrachten, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bieten, der mit dem [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut einen Hinweis darauf geben könnte, was zu tun ist. Sehen Sie sich das folgende Beispiel an:

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

Sie können sehen, wie der Platzhalter unten angezeigt wird:

{{EmbedLiveSample("Setting_placeholders", 600, 40)}}

### Suchformular-Labels und Barrierefreiheit

Ein Problem mit Suchformularen ist ihre Barrierefreiheit; eine gängige Designpraxis besteht darin, kein Label für das Suchfeld bereitzustellen (obwohl möglicherweise ein Lupensymbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer aufgrund der Platzierung normalerweise ziemlich offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch bei Nutzern von Bildschirmlesern Verwirrung stiften, da sie keine verbale Angabe darüber haben, was die Sucheingabe ist. Eine Möglichkeit, dies zu umgehen, die Ihr visuelles Design nicht beeinträchtigt, besteht darin, [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)-Funktionen zu verwenden:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element wird bewirken, dass Bildschirmleser ansagen, dass es sich um ein Suchformular handelt.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}}-Element selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

Lassen Sie uns ein Beispiel betrachten:

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

Sie können sehen, wie dies unten angezeigt wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Benutzer von Bildschirmlesern haben weitaus mehr verfügbare Informationen.

> [!NOTE]
> Weitere Informationen zu solchen Barrierefreiheitsfunktionen finden Sie unter [Signposts/Landmarks](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut kontrolliert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` bieten dieselben Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist jedoch unwahrscheinlicher, dass Sie im Allgemeinen Validierungsfunktionen für Suchboxen verwenden möchten. In vielen Fällen sollte es Benutzern einfach erlaubt sein, nach allem zu suchen, aber es gibt ein paar Fälle, die berücksichtigt werden sollten, wie z. B. Suchen in Daten eines bekannten Formats.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Unglück geschehen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen für das Styling gültiger/ungültiger Formularelemente: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir folgendes CSS, das ein Häkchen (Tick) neben Eingaben platziert, die gültige Werte enthalten, und ein Kreuz neben Eingaben, die ungültige Werte enthalten.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetyps auf einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um auf einfache Weise das Eingeben eines Werts zu einer Voraussetzung für die Formularübermittlung zu machen:

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

So wird es angezeigt:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Wenn Sie zusätzlich versuchen, das Formular ohne Eingabewert abzusenden, zeigt der Browser eine Nachricht an. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die sagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Unterschiedliche Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten, die in den Eingaben enthalten sind, abzusenden; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können eine Mindestlänge für den eingegebenen Wert in Zeichen mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie ähnlich das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut, um die maximale Länge des Eingabewerts festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert eine Länge von 4 bis 8 Zeichen hat.

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

So wird es angezeigt:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Festlegen eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (siehe [Validieren gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Einführungskurs).

Lassen Sie uns ein Beispiel betrachten. Angenommen, wir wollten ein Suchformular für Produkt-IDs bereitstellen und die IDs waren alle Codes aus zwei Buchstaben, gefolgt von vier Zahlen. Das folgende Beispiel deckt es ab:

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

So wird es angezeigt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Ein gutes Beispiel für ein Suchformular im Kontext finden Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles)-Beispiel ([siehe live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

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

- [HTML Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
