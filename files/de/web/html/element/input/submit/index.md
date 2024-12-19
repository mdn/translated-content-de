---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt (normalerweise weil der Benutzer die Schaltfläche angeklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu übermitteln.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="submit">`-Elements enthält einen String, der als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben sonst keinen echten Wert. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

### Das value-Attribut festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhält die Schaltfläche eine Standardbeschriftung, die vom User-Agent ausgewählt wird. Diese Beschriftung wird wahrscheinlich etwas wie "Submit" oder "Submit Query" sein. Hier ist ein Beispiel für eine Submit-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Neben den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Button-Eingaben die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Übermitteln der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert. Er sendet die Formulardaten als String, nachdem der Text unter Verwendung eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} prozentkodiert wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, sodass Dateien an den Server übermittelt werden können. Sie _müssen_ diese Kodierungsart verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente des Typs [`file`](/de/docs/Web/HTML/Element/input#type) ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Nur Klartext; hauptsächlich nützlich zur Fehlersuche, damit Sie die Daten, die übermittelt werden sollen, leicht einsehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das `action`-Attribut des besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Übermitteln der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das im besitzenden Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL, die im `formaction`- oder im [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben ist, angefangen wird. Danach wird ein Fragezeichen ("?") angehängt, gefolgt von den Formulardaten, die gemäß `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars kodiert werden. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anforderung an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Hauptteil der Anforderung gesendet, die an die URL gesendet wird, die im `formaction`- oder im [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben ist, unter Verwendung der HTTP-{{HTTPMethod("post")}}-Methode. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass die Schaltfläche den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, wenn es vorhanden ist, spezifiziert, dass das Formular vor der Übermittlung an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach der Formularübermittlung empfangen wird. Der String muss der Name eines **Browsing-Kontexts** sein (also ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes `target`, das im [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des {{HTMLElement("form")}}-Elements angegeben ist, das dieses Input-Element besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in demselben Browsing-Kontext wie das Formular. Dies wird das aktuelle Dokument durch die empfangenen Daten ersetzen. Dies ist der Standardwert, falls keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einem neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User-Agent")}} variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontexts. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält es sich wie `_self`.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Submit-Buttons

`<input type="submit">`-Buttons werden verwendet, um Formulare zu übermitteln. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und dann das Verhalten mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder noch besser ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zur Erstellung der Schaltflächen in Ihrem Formular zu verwenden, beachten Sie Folgendes: Befindet sich das `<button>`-Element innerhalb eines {{HTMLElement("form")}}, wird diese Schaltfläche als "Submit"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die Submit-Schaltfläche ist.

### Eine grundlegende Submit-Schaltfläche

Wir beginnen mit der Erstellung eines Formulars mit einer grundlegenden Submit-Schaltfläche:

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

Probieren Sie aus, einen Text in das Textfeld einzugeben und dann das Formular zu übermitteln.

Beim Übermitteln werden die Daten als Name/Wert-Paar an den Server gesendet. In diesem Fall wird der String `text=user-text` sein, wobei "user-text" derjenige Text ist, den der Benutzer eingegeben hat, kodiert, um Sonderzeichen zu erhalten. Wohin und wie die Daten übermittelt werden, hängt von der Konfiguration des `<form>` ab; siehe [Übermittlung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen eines Tastaturkürzels zu einer Submit-Schaltfläche

Tastaturkürzel, auch bekannt als Zugriffstasten und Tastaturequivalente, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um einer Submit-Schaltfläche ein Tastaturkürzel hinzuzufügen — so wie bei jedem {{HTMLElement("input")}}, bei dem dies sinnvoll ist — verwenden Sie das globale [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)-Attribut.

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste festgelegt (Sie müssen <kbd>s</kbd> zusammen mit den bestimmten Modifikatortasten für Ihre Browser-/Betriebssystem-Kombination drücken). Um Konflikte mit den eigenen Tastaturkürzeln des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifikatortasten verwendet als für andere Kürzel auf dem Hostcomputer. Weitere Details finden Sie unter [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

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

Zum Beispiel löst in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Senden-Schaltfläche aus, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies ist besonders zutreffend, da die Modifikatortasten typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie diese Informationen auf eine Weise bereitstellen, die das Webdesign nicht stört (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (unter Verwendung des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke darstellt.

### Deaktivieren und Aktivieren einer Submit-Schaltfläche

Um eine Submit-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut darauf an, wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Submit-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele eingeschlossen. Es gibt wirklich nichts mehr über Submit-Schaltflächen zu sagen. Aus gutem Grund wird diese Art von Steuerung manchmal als "einfache Schaltfläche" bezeichnet.

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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
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
