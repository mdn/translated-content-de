---
title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt (typischerweise, weil der Benutzer die Schaltfläche angeklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu übermitteln.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines `<input type="submit">`-Elements enthält einen string, welcher als Beschriftung der Schaltfläche angezeigt wird. Ansonsten haben Schaltflächen keinen echten Wert. Der `value`-Wert liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} der Schaltfläche.

### Festlegung des value-Attributs

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Weglassen des value-Attributs

Wenn kein `value` angegeben wird, erhält die Schaltfläche eine Standardbeschriftung, die vom User-Agent gewählt wird. Diese Beschriftung wird wahrscheinlich so etwas wie "Submit" oder "Submit Query" sein. Hier ist ein Beispiel einer Sende-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Eingaben mit `submit`-Schaltflächen die folgenden Attribute.

### formaction

Ein string, der die URL angibt, zu der die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein string, der die zu verwendende Kodierungsmethode bei der Übermittlung der Formulardaten an den Server identifiziert. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als string, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und erlaubt die Übermittlung von Dateien an den Server. Diese Kodierung muss verwendet werden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente des Typs [`file`](/de/docs/Web/HTML/Reference/Elements/input#type) ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Nur-Text; hauptsächlich nur zum Debuggen nützlich, um die zu übermittelnden Daten leicht sichtbar zu machen.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das `enctype`-Attribut des betroffenen Formulars.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein string, der die HTTP-Methode angibt, die bei der Übermittlung der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das im betroffenen Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der durch das `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebenen URL begonnen wird, gefolgt von einem Fragezeichen ("?") und den Formulardaten, codiert wie durch `formenctype` oder das `enctype`-Attribut des Formulars beschrieben. Diese URL wird dann mithilfe eines HTTP-{{HTTPMethod("get")}}-Requests an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Hauptteil der Anfrage gesendet, die mit der `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-URL und einer HTTP-{{HTTPMethod("post")}}-Methode gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, dem das `input` zugeordnet ist, und übermittelt die Formulardaten überhaupt nicht.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut das, falls vorhanden, angibt, dass das Formular vor dem Übermitteln an den Server nicht validiert werden soll. Das überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des betroffenen Formulars.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein string, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Übermitteln des Formulars empfangen wurde. Der string muss der Name eines **Browsing-Kontexts** sein (d.h. eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut im {{HTMLElement("form")}} angegeben ist, das dieses `input` besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den selben Browsing-Kontext, der das Formular enthält. Dadurch wird das aktuelle Dokument mit den empfangenen Daten ersetzt. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist in der Regel ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann je nach Konfiguration des {{Glossary("user_agent", "User-Agent")}} jedoch unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält es sich wie `_self`.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Sende-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare zu übermitteln. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zu verwenden, um die Schaltflächen in Ihrem Formular zu erstellen, beachten Sie Folgendes: Wenn der `<button>` in einem {{HTMLElement("form")}} enthalten ist, wird diese Schaltfläche als "Senden"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die Sende-Schaltfläche ist.

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Versuchen Sie, einen Text in das Textfeld einzugeben und dann das Formular zu übermitteln.

Beim Abschicken werden die Daten als Name/Wert-Paar an den Server gesendet. In diesem Fall wird der string `text=user-text` gesendet, wobei "user-text" der vom Benutzer eingegebene Text ist, kodiert, um Sonderzeichen zu erhalten. Wo und wie die Daten übermittelt werden, hängt von der Konfiguration des `<form>` ab; siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Sende-Schaltfläche

Tastenkombinationen, auch bekannt als Zugriffstasten und Tastaturequivalente, lassen den Benutzer eine Schaltfläche durch Drücken einer Taste oder einer Tasten-Kombination auf der Tastatur auslösen. Um einer Sende-Schaltfläche eine Tastenkombination hinzuzufügen — genau wie bei jedem anderen {{HTMLElement("input")}}, für den es sinnvoll ist — verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) globale Attribut.

In diesem Beispiel ist <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> plus die spezifischen Modifikatortasten für Ihre Browser-/ Betriebssystemkombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifikatortasten verwendet als für andere Verknüpfungen auf dem Host-Computer. Weitere Details finden Sie unter [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

Hier ist das vorherige Beispiel mit der Zugriffstaste <kbd>s</kbd> hinzugefügt:

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

Zum Beispiel wird in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Sende-Schaltfläche auslösen, während Chrome auf Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies ist besonders zutreffend, da die Modifizierer in der Regel nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, diese Informationen so bereitzustellen, dass das Design der Seite nicht beeinträchtigt wird (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen über die Zugriffstasten der Seite verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (durch das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Sende-Schaltfläche

Um eine Sende-Schaltfläche zu deaktivieren, fügen Sie das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut hinzu, wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Sende-Schaltflächen nehmen nicht an der Zwangsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben grundlegende Beispiele oben eingefügt. Es gibt wirklich nicht mehr über Sende-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein string, der als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
