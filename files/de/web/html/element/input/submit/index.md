---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`submit`** werden als Schaltflächen gerendert. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt (typischerweise, weil der Benutzer auf die Schaltfläche geklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu senden.

## Wert

Das `value`-Attribut eines `<input type="submit">`-Elements enthält einen String, der als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

### Das value-Attribut festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhält die Schaltfläche eine Standardbeschriftung, die vom User-Agent ausgewählt wird. Diese Beschriftung dürfte in etwa "Senden" oder "Abfrage senden" lauten. Hier ist ein Beispiel für eine Sende-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `submit`-Schaltflächen die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem `action`-Attribut auf dem {{HTMLElement("form")}}-Element, dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die zu verwendende Kodierungsmethode beim Senden der Formulardaten an den Server identifiziert. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API, um die Daten zu verwalten, sodass Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element des Typs [`file`](/de/docs/Web/HTML/Element/input#type) beinhaltet ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Klartext; hauptsächlich nur beim Debugging nützlich, sodass Sie die Daten, die gesendet werden sollen, leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das `enctype`-Attribut des zugehörigen Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes `method`-Attribut, das auf dem zugehörigen Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Ein URL wird erstellt, indem mit der URL begonnen wird, die durch das `formaction`- oder `action`-Attribut angegeben ist, gefolgt von einem Fragezeichen ("?"), und dann die Formulardaten angehängt, die wie durch `formenctype` oder das `enctype`-Attribut des Formulars beschrieben kodiert sind. Diese URL wird dann an den Server mit einer HTTP-{{HTTPMethod("get")}}-Anfrage gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Körper der Anfrage enthalten, die an die durch das `formaction`- oder `action`-Attribut angegebene URL gesendet wird, wobei eine HTTP-{{HTTPMethod("post")}}-Methode verwendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem die Eingabe verknüpft ist, und sendet die Formulardaten überhaupt nicht.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des `novalidate`-Attributs auf dem Formular, dem das Element gehört.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontexts** sein (also ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes `target`, das durch das `target`-Attribut auf dem {{HTMLElement("form")}}, dem diese Eingabe gehört, angegeben wird.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder eingebetteten Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lässt die Antwort im gleichen Browsing-Kontext laden, in dem sich das Formular befindet. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lässt die Antwort in einem neuen, unbenannten Browsing-Kontext laden. Dies ist normalerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "User-Agents")}} abweichen.
- `_parent`
  - : Lässt die Antwort im übergeordneten Browsing-Kontext des aktuellen laden. Gibt es keinen übergeordneten Kontext, verhält sich dies wie `_self`.
- `_top`
  - : Lässt die Antwort im obersten Browsing-Kontext laden; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Ist der aktuelle Kontext der oberste Kontext, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Sende-Buttons

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare zu senden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder noch besser ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zu verwenden, um die Schaltflächen in Ihrem Formular zu erstellen, beachten Sie: Wenn sich die `<button>` innerhalb einer {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Sende"-Schaltfläche betrachtet. Sie sollten daher ausdrücklich angeben, welche Schaltfläche die Sende-Schaltfläche ist.

### Eine grundlegende Sende-Schaltfläche

Wir beginnen mit der Erstellung eines Formulars mit einer grundlegenden Sende-Schaltfläche:

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

Dies wird so gerendert:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Versuchen Sie, Text in das Textfeld einzugeben und das Formular zu senden.

Beim Absenden werden die Daten Name/Wert-Paar an den Server gesendet. In diesem Fall wird der String `text=user-text` sein, wobei "user-text" der vom Benutzer eingegebene Text ist, der kodiert wurde, um Sonderzeichen zu erhalten. Wohin und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Sende-Schaltfläche

Tastenkombinationen, auch bekannt als Zugangstasten und Tastaturäquivalente, ermöglichen es dem Benutzer, eine Schaltfläche zu aktivieren, indem er eine Taste oder eine Tastenkombination auf der Tastatur drückt. Um einer Sende-Schaltfläche eine Tastenkombination hinzuzufügen – ebenso wie bei jedem {{HTMLElement("input")}}, für das dies sinnvoll ist – verwenden Sie das globale Attribut `accesskey`.

In diesem Beispiel wird <kbd>s</kbd> als Zugangstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den bestimmten Modifikatortasten für Ihre Browser/OS-Kombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User-Agents zu vermeiden, werden für Zugangstasten andere Modifikatortasten verwendet als für andere Verknüpfungen auf dem Host-Computer. Lesen Sie `accesskey` für weitere Details.

Hier ist das vorherige Beispiel mit der Zugangstaste <kbd>s</kbd> hinzugefügt:

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

Beispielsweise löst in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Sendeschaltfläche aus, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht wissen wird, was die Zugangstaste ist! Dies ist besonders der Fall, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website bauen, sollten Sie sicherstellen, diese Informationen auf eine Weise bereitzustellen, die das Design der Website nicht stört (zum Beispiel, indem Sie einen leicht zugänglichen Link zur Verfügung stellen, der auf Informationen verweist, welche Zugangstasten die Website hat). Ein Tooltip auf der Schaltfläche (mithilfe des `title`-Attributs) kann ebenfalls helfen, ist jedoch keine vollständige Lösung für Barrierefreiheit.

### Deaktivieren und Aktivieren einer Sende-Schaltfläche

Um eine Sende-Schaltfläche zu deaktivieren, spezifizieren Sie das `disabled`-Attribut wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Sehen Sie die Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) für mehr Ideen zum Aktivieren und Deaktivieren von Schaltflächen.

## Validierung

Sende-Schaltflächen nehmen nicht an der Eingabe-Validierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben grundlegende Beispiele oben enthalten. Es gibt nicht wirklich mehr zu sagen über Sende-Schaltflächen. Es gibt einen Grund, warum diese Art von Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der als Beschriftung der Schaltfläche verwendet wird</td>
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
