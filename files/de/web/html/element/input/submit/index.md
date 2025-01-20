---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: 4f7251afb63ef9a40ba5c2c5a5ede2030062df19
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event) Ereignis eintritt (normalerweise, weil der Benutzer die Schaltfläche geklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu senden.

## Wert

Das `value` Attribut eines `<input type="submit">` Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value` stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche bereit.

### Das value-Attribut setzen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie kein `value` angeben, hat die Schaltfläche eine Standardbeschriftung, die vom User-Agent gewählt wird. Diese Beschriftung wird wahrscheinlich etwa "Submit" oder "Submit Query" sein. Hier ist ein Beispiel für eine Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}} Elementen geteilt werden, unterstützen `submit` Schaltflächen folgende Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action) Attribut auf dem {{HTMLElement("form")}} Element, das das {{HTMLElement("input")}} Element besitzt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode angibt, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenkette, nachdem die Textzeichen mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} nach {{Glossary("Percent-encoding", "prozentcodierung")}} kodiert wurden.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData) API zur Verwaltung der Daten, wodurch es möglich wird, Dateien an den Server zu senden. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}} Element mit dem [`type`](/de/docs/Web/HTML/Element/input#type) `file` enthält ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Klartext; hauptsächlich nur für Debugging nützlich, damit Sie die zu sendenden Daten leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype` Attributs das `enctype` Attribut des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [method](/de/docs/Web/HTML/Element/form#method) Attribut des besitzenden Formulars. Erlaubte Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attribut angegeben wird, gefolgt von einem Fragezeichen ("?"), und dann durch Anhängen der Formulardaten, kodiert wie durch `formenctype` oder das `enctype` Attribut des Formulars beschrieben. Diese URL wird dann mit einer HTTP {{HTTPMethod("get")}} Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}} Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Hauptteil der Anfrage an die URL gesendet, die durch das `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attribut angegeben wird, unter Verwendung der HTTP {{HTTPMethod("post")}} Methode. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem das Eingabeelement verbunden ist, und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor dem Absenden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attributs des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Stichwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars eingegangen ist. Der String muss der Name eines **Browsing-Kontexts** sein (d. h. eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut auf dem {{HTMLElement("form")}} angegeben ist, das dieses Eingabeelement besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext, der das Formular enthält. Dadurch wird das aktuelle Dokument durch die empfangenen Daten ersetzt. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im gleichen Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "User-Agents")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

## Verwendung von Submit-Schaltflächen

`<input type="submit">` Schaltflächen werden verwendet, um Formulare zu senden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}} Element verwenden.

Wenn Sie sich entscheiden, `<button>` Elemente zu verwenden, um die Schaltflächen in Ihrem Formular zu erstellen, denken Sie daran: Wenn der `<button>` in einem {{HTMLElement("form")}} ist, wird diese Schaltfläche als "Senden"-Schaltfläche behandelt. Sie sollten daher immer ausdrücklich festlegen, welche Schaltfläche die Senden-Schaltfläche ist.

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

Dies wird so dargestellt:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Versuchen Sie, Text in das Textfeld einzugeben und dann das Formular abzusenden.

Beim Absenden wird das Datenpaar Name/Wert an den Server gesendet. In diesem Fall wird die Zeichenkette `text=user-text` sein, wobei "user-text" der vom Benutzer eingegebene Text, kodiert zur Erhaltung spezieller Zeichen, ist. Wohin und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für mehr Details.

### Hinzufügen einer Tastenkombination zu einer Submit-Schaltfläche

Tastenkombinationen, auch Access Keys und Tastaturequivalente genannt, ermöglichen es dem Benutzer, eine Schaltfläche zu drücken, indem er eine Taste oder eine Tastenkombination auf der Tastatur verwendet. Um einer Submit-Schaltfläche eine Tastenkombination hinzuzufügen — genauso wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist — verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) globale Attribut.

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser/OS-Kombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifikatortasten als für andere Shortcuts auf dem Host-Computer verwendet. Siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für weitere Details.

Hier ist das vorherige Beispiel mit der <kbd>s</kbd> Zugriffstaste hinzugefügt:

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

Zum Beispiel, in Firefox für Mac, löst das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Sendeschaltfläche aus, während Chrome auf Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht wissen wird, was die Zugriffstaste ist! Dies gilt insbesondere, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Stellen Sie beim Erstellen einer Website sicher, dass diese Informationen auf eine Weise bereitgestellt werden, die das Design der Website nicht stört (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (unter Verwendung des [`title`](/de/docs/Web/HTML/Global_attributes/title) Attributs) kann auch helfen, obwohl es keine vollständige Lösung für Zugänglichkeitszwecke ist.

### Deaktivieren und Aktivieren einer Submit-Schaltfläche

Um eine Submit-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) Attribut darauf an, so:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies wie `btn.disabled = true` oder `btn.disabled = false` aus.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Submit-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele angegeben. Es gibt wirklich nichts mehr über Submit-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art der Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die als Schaltflächenbeschriftung verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}} Element
