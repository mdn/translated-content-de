---
title: <input type='search'>
slug: Web/HTML/Element/input/search
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`search`** sind Textfelder, die für die Eingabe von Suchanfragen durch den Benutzer vorgesehen sind. Diese sind funktional identisch mit [`text`](/de/docs/Web/HTML/Element/input/text)-Eingaben, können jedoch vom {{Glossary("user_agent", "User-Agent")}} unterschiedlich gestylt werden.

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut enthält einen String, der den im Suchfeld enthaltenen Wert darstellt. Sie können diesen mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement#value) Eigenschaft in JavaScript abrufen.

```js
searchTerms = mySearch.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert jeder beliebige Textstring oder ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Suchfeldeingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen eingeschlossen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Suchfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur dann angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Suchfeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem vom `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Sucheingabe keine Mindestlänge.

Das Suchfeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Code-Einheiten ist. Die Einschränkungsvalidierung wird nur dann angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe zum Bestehen der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) entsprechen muss. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Code-Punkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn kein Muster angegeben ist oder es ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch in der Nähe anderen erläuternden Text einschließen.

Siehe den Abschnitt [Angeben eines Musters](#angeben_eines_musters) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in das Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der `placeholder` in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Zeilenrichtungssteuerzeichen verwenden, um die Richtung innerhalb des `placeholder` zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) per JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies möglicherweise nicht genau sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung) schmaler oder breiter sein als die angegebene Anzahl an Zeichen.

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur ungefähr, wie viele gleichzeitig angezeigt werden können. Um eine Obergrenze für die Länge der Eingabedaten zu setzen, verwenden Sie das Attribut [`maxlength`](#maxlength).

### spellcheck

[`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck) ist ein globales Attribut, das verwendet wird, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezielle Aspekte der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "User-Agents")}} die Einstellung außer Kraft setzen.

## Nicht standardisierte Attribute

Die folgenden nicht standardisierten Attribute stehen Suchfeldeingaben zur Verfügung. Als allgemeine Regel sollten Sie sie vermeiden, es sei denn, es ist nicht anders machbar.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls konfiguriert.
- `off`
  - : Deaktiviert die automatische Korrektur und Textsubstitutionen.

### incremental

Das boolesche Attribut `incremental` ist eine WebKit- und Blink-Erweiterung (daher unterstützt von Safari, Opera, Chrome usw.), die, falls vorhanden, dem {{Glossary("user_agent", "User-Agent")}} mitteilt, die Eingabe als Live-Suche zu verarbeiten. Während der Benutzer den Wert des Feldes bearbeitet, sendet der User-Agent [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignisse an das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das die Suchbox repräsentiert. Dadurch kann Ihr Code die Suchergebnisse in Echtzeit aktualisieren, während der Benutzer die Suche bearbeitet.

Wenn `incremental` nicht angegeben ist, wird das [`search`](/de/docs/Web/API/HTMLInputElement/search_event)-Ereignis nur gesendet, wenn der Benutzer explizit eine Suche startet (z. B. durch Drücken der Taste <kbd>Enter</kbd> oder <kbd>Return</kbd> beim Bearbeiten des Feldes).

Das `search`-Ereignis ist so begrenzt, dass es nicht häufiger als in einem von der Implementierung definierten Intervall gesendet wird.

### results

Das Attribut `results` – nur von Safari unterstützt – ist ein Zahlenwert, mit dem Sie die maximale Anzahl von Einträgen überschreiben können, die im nativ bereitgestellten Dropdown-Menü der vorherigen Suchanfragen des {{HTMLElement("input")}}-Elements angezeigt werden.

Der Wert muss eine nicht negative Dezimalzahl sein. Wenn er nicht angegeben oder ein ungültiger Wert angegeben wird, wird die Standardeinstellung des Browsers für die maximale Anzahl von Einträgen verwendet.

## Verwendung von Sucheingaben

`<input>`-Elemente vom Typ `search` sind denjenigen vom Typ `text` sehr ähnlich, außer dass sie speziell für die Verarbeitung von Suchbegriffen vorgesehen sind. Sie sind im Verhalten im Grunde gleichwertig, aber Benutzeragenten können sich entscheiden, sie standardmäßig unterschiedlich zu stylen (und natürlich können Websites Stylesheets verwenden, um eigene Stile auf sie anzuwenden).

### einfaches Beispiel

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

`q` ist der gebräuchlichste `name`, der Suchwörter-Eingaben gegeben wird, obwohl es nicht vorgeschrieben ist. Wenn eingereicht, wird das gesendete Daten-Name/Wert-Paar `q=searchTerm` sein.

> [!NOTE]
> Sie müssen daran denken, Ihrer Eingabe einen [`name`](/de/docs/Web/HTML/Element/input#name) zu vergeben, andernfalls wird nichts eingereicht.

### Unterschiede zwischen Such- und Text-Typen

Die wichtigsten Unterschiede bestehen in der Art und Weise, wie Browser mit ihnen umgehen. Das erste zu beachtende ist, dass einige Browser ein Kreuzsymbol anzeigen, auf das geklickt werden kann, um den Suchbegriff bei Bedarf sofort zu entfernen; in Chrome wird diese Aktion auch ausgelöst, wenn die Escape-Taste gedrückt wird. Der folgende Screenshot stammt aus Chrome:

![Such-Eingabefeld mit Fokusrahmen, mit dem Text 'cats'. Es gibt ein x-Symbol im Eingabefeld an der rechten Seite.](chrome-cross-icon.png)

Zusätzlich speichern moderne Browser auch automatisch Suchbegriffe, die zuvor über Domains hinweg eingegeben wurden, die dann als Autovervollständigungsoptionen erscheinen, wenn in Suchformularen auf dieser Domain nachfolgende Suchanfragen durchgeführt werden. Dies hilft Benutzern, die dazu neigen, über einen längeren Zeitraum auf derselben oder ähnlichen Suchanfragen zu suchen. Dieser Screenshot stammt aus Firefox:

![Ein Eingabefeld im Fehlerzustand mit einem roten Fokusrahmen. Der Benutzer hat den Buchstaben 'h' eingegeben. Eine Auswahl-Popup-Liste ist direkt unter dem Eingabefeld geöffnet, mit zwei Optionen: hello und hermansje.](firefox-auto-complete.png)

An diesem Punkt schauen wir uns einige nützliche Techniken an, die Sie auf Ihre Suchformulare anwenden können.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Sucheingabe bereitstellen, der einen Hinweis darauf geben könnte, was zu tun ist, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Ein Problem bei Suchformularen ist ihre Barrierefreiheit; eine häufige Designpraxis besteht darin, kein Label für das Suchfeld bereitzustellen (obwohl möglicherweise ein Lupensymbol oder ähnliches vorhanden ist), da der Zweck eines Suchformulars für sehende Benutzer normalerweise aufgrund der Platzierung offensichtlich ist ([dieses Beispiel zeigt ein typisches Muster](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Dies könnte jedoch zu Verwirrung für Benutzer von Bildschirmlesegeräten führen, da sie keine verbale Angabe darüber haben, was die Sucheingabe ist. Ein Weg, dies zu umgehen, der Ihr visuelles Design nicht beeinträchtigt, besteht darin, [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)-Funktionen zu verwenden:

- Ein `role`-Attribut mit dem Wert `search` auf dem `<form>`-Element wird Bildschirmlesegeräten mitteilen, dass das Formular ein Suchformular ist.
- Wenn das nicht ausreicht, können Sie ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut auf dem {{HTMLElement("input")}} selbst verwenden. Dies sollte ein beschreibender Text sein, der vom Bildschirmlesegerät vorgelesen wird; es wird als nicht-visuelles Äquivalent zu `<label>` verwendet.

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

Sie können sehen, wie es unten gerendert wird:

{{EmbedLiveSample("Search_form_labels_and_accessibility", 600, 40)}}

Es gibt keinen visuellen Unterschied zum vorherigen Beispiel, aber Benutzer von Bildschirmlesegeräten haben viel mehr Informationen zur Verfügung.

> [!NOTE]
> Weitere Informationen über solche Barrierefreiheitsmerkmale finden Sie unter [Signposts/Meilensteine](/de/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen festlegen, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das Suchfeld beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `search` verfügen über dieselben Validierungsfunktionen wie reguläre `text`-Eingaben. Es ist weniger wahrscheinlich, dass Sie Validierungsfunktionen im Allgemeinen für Suchfelder verwenden möchten. In vielen Fällen sollten Benutzer einfach nach allem suchen dürfen, aber es gibt einige Fälle zu berücksichtigen, wie z. B. Suchanfragen gegen Daten eines bekannten Formats.

> [!NOTE]
> Die HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht überprüft, könnte es zu Problemen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Notiz zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von gültigen/ungültigen Formularelementen: {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben gültigen Eingabenlementen und ein Kreuz vor ungültigen Eingaben erscheint.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}}-Element nach dem Formularelement platziert wird, das als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetypen in einigen Browsern keine Symbole direkt neben sich gut darstellen.

### Pflicht zur Eingabe machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um auf einfache Weise anzugeben, dass vor dem Absenden des Formulars ein Wert eingegeben werden muss:

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

Darüber hinaus zeigt der Browser eine Nachricht an, wenn Sie versuchen, das Formular ohne Eingabe eines Suchbegriffs abzusenden. Das folgende Beispiel stammt aus Firefox:

![Formularfeld mit angehängter Nachricht, die besagt: Bitte füllen Sie dieses Feld aus.](firefox-required-message.png)

Verschiedene Nachrichten werden angezeigt, wenn Sie versuchen, das Formular mit verschiedenen Arten von ungültigen Daten in den Eingaben zu übermitteln; siehe die untenstehenden Beispiele.

### Eingabewertlänge

Sie können die minimale Länge in Zeichen für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4 bis 8 Zeichen lang ist.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, über 8 Zeichen hinauszugehen, lässt der Browser dies nicht zu.

### Angeben eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (siehe [Validierung gegenüber einem regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Schnellkurs).

Schauen wir uns ein Beispiel an. Angenommen, wir möchten ein Produktsucheingabeformular bereitstellen, und die IDs sind alle Codes aus zwei Buchstaben gefolgt von vier Zahlen. Das folgende Beispiel deckt dies ab:

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

Ein gutes Beispiel für ein Suchformular im Kontext können Sie in unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel sehen ([zeigen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Suchfeld
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

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
- [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
