---
title: '`<input type="submit">` HTML-Attributwert'
short-title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente des Typs **`submit`** werden als Schaltflächen gerendert. Wenn das [Klick-Ereignis](/de/docs/Web/API/Element/click_event) auftritt (normalerweise, weil der Benutzer auf die Schaltfläche geklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu senden.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines `<input type="submit">`-Elements enthält einen String, der als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value` liefert die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für die Schaltfläche.

### Einstellen des value-Attributs

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Weglassen des value-Attributs

Wenn Sie keinen `value` angeben, erhält die Schaltfläche eine Standardbeschriftung, die vom User-Agent ausgewählt wird. Diese Beschriftung wird wahrscheinlich etwas in der Art wie "Submit" oder "Submit Query" sein. Hier ist ein Beispiel für eine Absenden-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützen `submit`-Schaltflächen folgende Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elemente.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet wird. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dieser Standardwert sendet die Formulardaten als String, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "percent-codiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht das Senden von Dateien an den Server. Sie _müssen_ diese Kodierungsart verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Nur Klartext; hauptsächlich nützlich zum Debuggen, um die zu sendenden Daten leicht zu sehen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des besitzenden Formulars.

Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elemente.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des besitzenden Formulars. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der im `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebenen URL begonnen wird, gefolgt von einem Fragezeichen ("?"), und dann die Formulardaten angehängt werden, kodiert wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars beschrieben. Diese URL wird dann mit einer HTTP {{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden in den Körper der Anfrage eingefügt, die mit einer HTTP {{HTTPMethod("post")}}-Methode an die mit `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) angegebene URL gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem das Eingabeelement verbunden ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elemente.

### formnovalidate

Ein boolesches Attribut, das, falls vorhanden, spezifiziert, dass das Formular vor dem Absenden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des besitzenden Formulars.

Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elemente.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das anzeigt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** sein (also ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jede Zielvorgabe, die durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des besitzenden {{HTMLElement("form")}} vorgegeben ist.

Zusätzlich zu den eigentlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie den, der das Formular enthält. Dies wird das aktuelle Dokument mit den empfangenen Daten ersetzen. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist in der Regel ein neues Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User-Agents")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält es sich wie `_self`.

Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elemente.

## Verwendung von Submit-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare abzusenden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zur Erstellung der Schaltflächen in Ihrem Formular zu verwenden, beachten Sie Folgendes: Wenn sich das `<button>`-Element innerhalb eines {{HTMLElement("form")}} befindet, wird diese Schaltfläche als die "Absenden"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die Absende-Schaltfläche ist.

### Eine grundlegende Absende-Schaltfläche

Wir beginnen mit der Erstellung eines Formulars mit einer grundlegenden Absende-Schaltfläche:

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

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann das Formular abzusenden.

Beim Absenden werden die Daten in einem "Name/Wert"-Paar an den Server gesendet. In diesem Fall wird der String `text=user-text` sein, wobei "user-text" der vom Benutzer eingegebene Text ist, der so kodiert ist, dass Sonderzeichen erhalten bleiben. Wohin und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Absende-Schaltfläche

Tastenkombinationen, auch bekannt als Zugriffstasten und Tastaturequivalente, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder Tastenkombination auf der Tastatur auszulösen. Um einer Absende-Schaltfläche eine Tastenkombination hinzuzufügen — so wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser-/OS-Kombination drücken). Um Konflikte mit den Tastenkombinationen des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifikatortasten als für andere Tastenkombinationen auf dem Hostrechner verwendet. Weitere Einzelheiten finden Sie unter [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

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

Zum Beispiel wird in Firefox für Mac <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> verwendet, um die „Senden“-Schaltfläche auszulösen, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies ist besonders wahr, da die Modifikatoren normalerweise nicht standardmäßig sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass Sie diese Informationen so bereitstellen, dass das Design der Website nicht gestört wird (zum Beispiel, indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen verweist, welche die Zugriffstasten der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mit dem [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Absende-Schaltfläche

Um eine Absende-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut dafür an, so:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Absende-Schaltflächen nehmen nicht an der Validierung von Einschränkungen teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele beigefügt. Es gibt nicht wirklich viel mehr über Absende-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

## Technische Übersicht

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
