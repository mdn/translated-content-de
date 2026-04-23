---
title: '`<input type="search">` HTML-Attributwert'
short-title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente des Typs **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Reference/Elements/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User Agent")}} unterschiedlich gestaltet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, der den im Suchfeld enthaltenen Wert darstellt. Sie können diesen mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein beliebiger Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Konstraintvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textes, der in das Feld eingegeben wird, größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Die Konstraintvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Konstraintvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textes, der in das Feld eingegeben wird, weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} beträgt. Die Konstraintvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Konstraintvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag ist beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen zum Erfüllen des Musters zu erfüllen sind. Sie sollten auch andere erklärende Texte in der Nähe einschließen.

Siehe den Abschnitt [Ein Muster angeben](#ein_muster_angeben) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erläuternden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Bidi-Algorithmen-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Verwendung von Unicode-Steuerzeichen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann, falls es vorhanden ist. Sein `value` kann jedoch immer noch geändert werden, indem JavaScript-Code direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise oder möglicherweise nicht genau sein und sollte nicht darauf vertraut werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den Schriftarten ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _keine_ Begrenzung für die Anzahl der Zeichen fest, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen auf einmal etwa gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob eine Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf allen editierbaren Inhalten verwendet werden, aber hier betrachten wir die Besonderheiten im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zugelassenen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leer) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen des Elternelements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Rechtschreibprüfungsstatus innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "User Agents")}} die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute stehen Sucheingabefeldern zur Verfügung.
Vermeiden Sie nach Möglichkeit deren Verwendung.

### incremental

Das Boolean-Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (also unterstützt von Safari, Opera, Chrome usw.), die, wenn vorhanden, den {{Glossary("user_agent", "User Agent")}} anweist, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das Suchfeld darstellt. Dies ermöglicht es Ihrem Code, die Suchergebnisse in Echtzeit zu aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche initiiert (z. B. durch Drücken der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste während der Bearbeitung des Feldes).

Das `search`-Ereignis ist so rate-begrenzt, dass es nicht häufiger gesendet wird als in einem implementierungsdefinierten Intervall.

### results

Das `results`-Attribut – nur von Safari unterstützt – ist ein numerischer Wert, der es Ihnen ermöglicht, die maximal Anzahl von Einträgen im nativ bereitgestellten Dropdown-Menü der {{HTMLElement("input")}}-Elemente mit vorherigen Suchanfragen zu überschreiben.

Der Wert muss eine nicht-negative Dezimalzahl sein. Wenn nicht angegeben oder ein ungültiger Wert angegeben wird, wird die Standardanzahl der Einträge des Browsers verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind sehr ähnlich zu denen vom Typ `text`, außer dass sie speziell für die Handhabung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten praktisch identisch, aber User Agents können sich dafür entscheiden, sie standardmäßig unterschiedlich zu gestalten (und selbstverständlich können Seiten Stylesheets verwenden, um ihnen benutzerdefinierte Styles zuzuweisen).

### Einfaches Beispiel

```html
<form>
  <div>
    <input type="search" id="mySearch" name="q" />
    <button>Search</button>
  </div>
</form>
```

Dies wird so gerendert:

{{EmbedLiveSample("Basic_example", 600, 40)}}

`q` ist der am häufigsten vergebene `name` für Sucheingaben, obwohl es nicht zwingend ist. Beim Einreichen wird das Datenname/Werte-Paar `q=searchTerm` an den Server gesendet.

> [!NOTE]
> Sie müssen daran denken, einen [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für Ihre Eingabe festzulegen, sonst wird nichts übermittelt.

### Unterschiede zwischen Such- und Texttypen

Die Hauptunterschiede bestehen in der Art und Weise, wie Browser sie behandeln. Zu beachten ist, dass einige Browser ein Kreuzsymbol anzeigen, auf das geklickt werden kann, um den Suchbegriff sofort zu entfernen, wenn gewünscht. In Chrome wird diese Aktion auch ausgelöst, wenn die Escape-Taste gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Suchfeld ausgewählt, mit Fokusrahmen, mit dem Text 'Katzen'. Es gibt ein x-Symbol im Eingabefeld direkt an der rechten Seite.](chrome-cross-icon.png)

Darüber hinaus speichern moderne Browser auch automatisch zuvor eingegebene Suchbegriffe domänenübergreifend, die dann als Autocomplete-Optionen erscheinen, wenn nachfolgende Suchanfragen in Sucheingaben in dieser Domäne durchgeführt werden. Dies hilft Benutzern, die dazu neigen, im Laufe der Zeit nach den gleichen oder ähnlichen Suchanfragen zu suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Pop-up-Auswahlliste ist direkt unter dem Eingabefeld geöffnet, mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt lassen Sie uns einige nützliche Techniken betrachten, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter festlegen

Sie können eine nützliche Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, die einen Hinweis darauf geben könnte, was zu tun ist, mithilfe des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs. Schauen Sie sich das folgende Beispiel an:

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

### Suchformular-Beschriftungen und Barrierefreiheit

Ein Problem bei Suchformularen ist ihre Barrierefreiheit; eine häufige Designpraxis besteht darin, keine Beschriftung für das Suchfeld bereitzustellen (obwohl möglicherweise ein Lupensymbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars normalerweise für sehende Benutzer aufgrund der Platzierung ziemlich offensichtlich ist ([Dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch für Bildschirmleser-Benutzer verwirrend sein, da sie keine verbale Angabe darüber erhalten, was die Suchangabe ist. Eine Möglichkeit, dies zu umgehen, die Ihr visuelles Design nicht beeinträchtigt, ist die Verwendung von [Markierungs-Elementen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role).

- Umhüllen Sie die gesamte Suchfunktionalität in einem {{HTMLElement("search")}}-Element, das eine Landmarkenregion erstellt, die von unterstützenden Technologien angekündigt und schnell navigiert werden kann. Wenn sich Ihr `<input>` bereits in einem `<form>` befindet, können Sie alternativ [`role="search"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) zum `<form>`-Element hinzufügen, wodurch das `<form>` auch zu einer Such-Landmarke wird. Das `<search>`-Element verwendet native HTML-Semantik, während `role="search"` mehr Unterstützung bietet und möglicherweise kürzer zu tippen ist, wenn Sie bereits einen `<form>`-Wrapper haben.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmleser vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

Sehen wir an einem Beispiel:

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

Es gibt keinen sichtbaren Unterschied zum vorherigen Beispiel, aber Bildschirmleser-Benutzer haben viel mehr Informationen zur Verfügung.

> [!NOTE]
> Siehe [Wegweiser/Landmarken](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) für weitere Informationen zu solchen Barrierefreiheitsmerkmalen.

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Mit ihm können Sie die Anzahl der Zeichen angeben, die das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das Suchfeld zum Beispiel 30 Zeichen breit:

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

`<input>`-Elemente des Typs `search` haben die gleichen Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie im Allgemeinen Validierungsfunktionen für Suchfelder verwenden möchten. In vielen Fällen sollte es Benutzern einfach erlaubt sein, nach allem zu suchen, aber es gibt einige Fälle zu berücksichtigen, wie beispielsweise Suchen in Daten eines bekannten Formats.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen, oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingaben mit gültigen Werten und ein Kreuz neben Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird, das als Halter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern keine Symbole, die direkt danach platziert werden, gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um auf einfache Weise sicherzustellen, dass ein Wert eingegeben wird, bevor das Formular abgeschickt werden darf:

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

Dies wird so gerendert:

{{ EmbedLiveSample('Making_input_required', 600, 40) }}

Darüber hinaus zeigt der Browser eine Nachricht an, wenn Sie versuchen, das Formular abzusenden, ohne einen Suchbegriff einzugeben. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die besagt Bitte füllen Sie dieses Feld aus](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten in den Eingabefeldern einzureichen; siehe die folgenden Beispiele.

### Eingabewertlänge

Sie können mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut eine Mindestlänge, in Zeichen, für den eingegebenen Wert festlegen; entsprechend verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

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

Dies wird so gerendert:

{{ EmbedLiveSample('Input_value_length', 600, 40) }}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, über 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig zu gelten (siehe [Gültigkeitsprüfung basierend auf einem regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs).

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

Dies wird so gerendert:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 40) }}

## Beispiele

Sie können ein gutes Beispiel für ein Suchformular im Kontext in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles)-Beispiel sehen ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
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
