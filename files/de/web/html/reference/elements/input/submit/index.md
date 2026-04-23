---
title: '`<input type="submit">` HTML Attributwert'
short-title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente des Typs **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt (typischerweise, weil der Benutzer die Schaltfläche angeklickt hat), versucht der {{Glossary("user_agent", "User-Agent")}}, das Formular an den Server zu senden.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines `<input type="submit">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value`-Wert bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

### Einstellen des value-Attributs

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Auslassen des value-Attributs

Wenn Sie keinen `value` angeben, hat die Schaltfläche eine Standardbeschriftung, die vom User-Agent gewählt wird. Diese Beschriftung dürfte so etwas wie "Submit" oder "Submit Query" sein. Hier ist ein Beispiel für eine Submit-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Schaltflächen-Eingaben die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dieses hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dieser Standardwert sendet die Formulardaten als String, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} prozentkodiert wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, sodass Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich zum Debuggen, um die zu sendenden Daten leicht sehen zu können.

Falls angegeben, überschreibt der Wert des formenctype-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des zugehörigen Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das dem Formular zugewiesen ist. Erlaubte Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben wird, ein Fragezeichen ("?") angefügt wird und dann die Formulardaten angefügt werden, kodiert wie durch das formenctype-Attribut oder das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) des Formulars beschrieben. Diese URL wird dann mit einer HTTP {{HTTPMethod("get")}}-Anforderung an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Seiteneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Körper der Anforderung an die URL gesendet, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben wird, unter Verwendung einer HTTP {{HTTPMethod("post")}} Methode. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode zeigt an, dass die Schaltfläche den Dialog schließt, mit dem das Eingabeelement verknüpft ist, und übermittelt die Formulardaten überhaupt nicht.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des zugehörigen Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** sein (also ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jede Zielangabe, die durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des von diesem Eingabeelement besessenen Formulars gegeben wird.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dies wird das aktuelle Dokument mit den empfangenen Daten ersetzen. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber abhängig von der Konfiguration des {{Glossary("user_agent", "User-Agents")}} abweichen.
- `_parent`
  - : Lädt die Antwort in den Eltern-Browsing-Kontext des aktuellen. Wenn es keinen Elternkontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der die oberste Instanz des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwenden von Submit-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare einzusenden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mithilfe von JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder besser ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zur Erstellung der Schaltflächen in Ihrem Formular zu verwenden, beachten Sie Folgendes: Wenn sich das `<button>` in einem {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Submit"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die "Submit"-Schaltfläche ist.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und das Formular dann einzusenden.

Beim Einreichen werden die Daten als Name/Wert-Paar an den Server gesendet. In diesem Fall ist die Zeichenkette `text=user-text`, wobei "user-text" der vom Benutzer eingegebene Text ist, der kodiert wird, um Sonderzeichen zu bewahren. Wo und wie die Daten übermittelt werden, hängt von der Konfiguration des `<form>` ab; siehe [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Submit-Schaltfläche

Tastenkombinationen, auch als Zugriffstasten und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche über eine Taste oder Tastenkombination auf der Tastatur auszulösen. Um einer Submit-Schaltfläche eine Tastenkombination hinzuzufügen — genauso wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> plus die speziellen Modifizierertasten für Ihre Browser-/Betriebssystemkombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifizierertasten als für andere Tastenkombinationen auf dem Host-Computer verwendet. Weitere Details finden Sie unter [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

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

Beispielsweise löst in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die „Senden“-Schaltfläche aus, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel besteht darin, dass der Benutzer möglicherweise nicht weiß, welche Zugriffstaste festgelegt ist! Dies gilt insbesondere, da die Modifikatoren zur Vermeidung von Konflikten typischerweise nicht standardisiert sind. Wenn Sie eine Website erstellen, stellen Sie sicher, dass Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mittels des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, obwohl es keine vollständige Lösung für die Barrierefreiheit bietet.

### Deaktivieren und Aktivieren einer Submit-Schaltfläche

Um eine Submit-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut an, so:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Siehe die Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button) für weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen.

## Validierung

Submit-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden muss.

## Beispiele

Wir haben oben grundlegende Beispiele eingebaut. Mehr gibt es zu Submit-Schaltflächen eigentlich nicht zu sagen. Es gibt einen Grund, warum diese Art der Steuerung manchmal als "simple button" bezeichnet wird.

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
