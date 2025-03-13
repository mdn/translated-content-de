---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event) Ereignis auftritt (normalerweise, weil der Benutzer auf die Schaltfläche geklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu übermitteln.

## Wert

Ein `<input type="submit">`-Element enthält im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen tatsächlichen Wert. Der `value`-Attributwert dient als {{Glossary("accessible_description", "zugängliche Beschreibung")}} der Schaltfläche.

### Das value-Attribut festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, wird die Schaltfläche eine Standardbeschriftung haben, die vom User-Agent ausgewählt wird. Diese Beschriftung wird wahrscheinlich etwas in der Art von "Submit" oder "Submit Query" sein. Hier ist ein Beispiel für eine Submit-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Button-Eingaben die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}} Elements, das das {{HTMLElement("input")}}-Element enthält.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elemente verfügbar.

### formenctype

Ein String, der die Kodierungsmethode angibt, die beim Übermitteln der Formulardaten an den Server verwendet wird. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dieser, der Standardwert, sendet die Formulardaten als String, nachdem der Text unter Verwendung eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "percent-codiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData) API zur Verwaltung der Daten, wodurch Dateien an den Server übermittelt werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente des Typs [`file`](/de/docs/Web/HTML/Element/input#type) ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich zum Debuggen, damit Sie die Daten, die übermittelt werden sollen, leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das `enctype`-Attribut des besitzenden Formulars.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elemente verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Übermitteln der Formulardaten verwendet werden soll; dieser Wert überschreibt jegliches `method`-Attribut des besitzenden Formulars. Erlaubte Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der von `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) angegebenen URL begonnen wird, dann ein Fragezeichen-Zeichen ("?") angehängt wird, gefolgt von den Formulardaten, die gemäß `formenctype` oder dem `enctype`-Attribut des Formulars codiert werden. Diese URL wird dann an den Server mittels einer HTTP {{HTTPMethod("get")}}-Anfrage gesendet. Diese Methode eignet sich gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der Anfrage an die von `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) angegebene URL mittels einer HTTP {{HTTPMethod("post")}} Methoden gesendet. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Mit dieser Methode wird angegeben, dass die Schaltfläche das Dialogfeld schließt, dem das Eingabefeld zugeordnet ist, und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elemente verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass das Formular nicht vor der Übermittlung an den Server validiert werden soll. Dies überschreibt den Wert des `novalidate`-Attributs des besitzenden Formulars.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elemente verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, der zeigt, wo die Antwort angezeigt wird, nachdem das Formular übermittelt wurde. Der String muss der Name eines **Browsing-Kontextes** (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}) sein. Ein hier angegebener Wert überschreibt das `target`-Attribut des {{HTMLElement("form")}}, das dieses Eingabeelement enthält.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie den, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im gleichen Fenster wie das aktuelle Dokument, kann sich jedoch abhängig von der Konfiguration des {{Glossary("user_agent", "User-Agent")}} unterscheiden.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elemente verfügbar.

## Verwendung von Submit-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare zu übermitteln. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und dann das Verhalten mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zur Erstellung der Schaltflächen in Ihrem Formular zu verwenden, beachten Sie Folgendes: Wenn sich das `<button>` innerhalb eines {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Submit"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die Submit-Schaltfläche ist.

### Eine einfache Submit-Schaltfläche

Wir beginnen mit der Erstellung eines Formulars mit einer einfachen Submit-Schaltfläche:

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Send" />
  </div>
</form>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann das Formular abzuschicken.

Beim Absenden werden die Daten-Name/Wert-Paare an den Server gesendet. In diesem Fall wird die Zeichenfolge `text=user-text` gesendet, wobei "user-text" der vom Benutzer eingegebene Text ist, der zur Erhaltung spezieller Zeichen codiert wird. Wo und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Eine Tastenkombination zu einer Submit-Schaltfläche hinzufügen

Tastenkombinationen, auch als Zugriffstasten und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche mithilfe einer Taste oder einer Kombination von Tasten auf der Tastatur auszulösen. Um eine Tastenkombination zu einer Submit-Schaltfläche hinzuzufügen – wie Sie es auch bei jedem {{HTMLElement("input")}} tun würden, für das es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> mit den speziellen Modifikatortasten für Ihre Browser-/OS-Kombination drücken). Um Konflikte mit den Tastenkombinationen des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifikatortasten verwendet als für andere Shortcuts auf dem Host-Computer. Weitere Einzelheiten finden Sie unter [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

Hier ist das vorherige Beispiel mit der <kbd>s</kbd>-Zugriffstaste hinzugefügt:

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Send" accesskey="s" />
  </div>
</form>
```

Zum Beispiel wird in Firefox für Mac, durch das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd>, die Senden-Schaltfläche ausgelöst, während Chrome auf Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht wissen wird, was die Zugriffstaste ist! Dies ist besonders dann der Fall, wenn die Modifikatortasten normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass Sie diese Informationen auf eine Weise bereitstellen, die das Design der Seite nicht beeinträchtigt (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Seite verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, ist jedoch keine vollständige Lösung für Zugänglichkeitsprobleme.

### Eine Submit-Schaltfläche deaktivieren und aktivieren

Um eine Submit-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut darauf an, wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button)-Seite.

## Validierung

Submit-Schaltflächen nehmen nicht an der Constraint-Validierung teil; sie haben keinen tatsächlichen Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele eingefügt. Es gibt wirklich nicht viel mehr über Submit-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>
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
      <td>Keine</td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}}-Element
