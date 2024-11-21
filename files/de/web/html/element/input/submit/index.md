---
title: '`<input type="submit">`'
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt (in der Regel, weil der Benutzer die Schaltfläche angeklickt hat), versucht der {{Glossary("user_agent", "Benutzeragent")}}, das Formular an den Server zu senden.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="submit">`-Elements enthält einen String, der als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value` stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} der Schaltfläche bereit.

### Das value-Attribut festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, hat die Schaltfläche eine Standardbeschriftung, die vom Benutzeragenten gewählt wird. Diese Beschriftung könnte so etwas wie "Submit" oder "Submit Query" sein. Hier ist ein Beispiel einer Absende-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Neben den Attributen, die von allen {{HTMLElement("input")}}-Elementen gemeinsam genutzt werden, unterstützen `submit`-Schaltflächeneingaben die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an welche die Daten gesendet werden sollen. Dieser hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentcodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API, um die Daten zu verwalten, wodurch Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich zur Fehlersuche, da Sie die zu übermittelnden Daten leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des zugehörigen Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das dem zugehörigen Formular gegeben wurde. Erlaubte Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben ist, ein Fragezeichen ("?") gefolgt von den Formulardaten angehängt wird, die erläutert wie durch das `formenctype`-Attribut oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars kodiert sind. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Seiteneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Körper der Anfrage gesendet, die mittels einer HTTP-{{HTTPMethod("post")}}-Methode an die URL gegeben durch das `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass die Schaltfläche den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des zugehörigen Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das anzeigt, wo die nach dem Senden des Formulars empfangene Antwort angezeigt werden soll. Der String muss der Name eines **Browsing-Kontextes** sein (das heißt, eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulars, dem diese Eingabe gehört, angegeben ist.

Neben den eigentlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Läd die Antwort in denselben Browsing-Kontext wie das Formular. Dadurch wird das aktuelle Dokument mit den empfangenen Daten ersetzt. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Läd die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "Benutzeragenten")}} variieren.
- `_parent`
  - : Läd die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontexts. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
- `_top`
  - : Läd die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Absende-Schaltflächen

`<input type="submit">`-Schaltflächen werden zum Senden von Formularen verwendet. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und dann das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zu verwenden, um die Schaltflächen in Ihrem Formular zu erstellen, beachten Sie Folgendes: Wenn sich der `<button>` innerhalb eines {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Absende"-Schaltfläche behandelt. Sie sollten also immer deutlich angeben, welche Schaltfläche die Absende-Schaltfläche ist.

### Eine einfache Absende-Schaltfläche

Wir beginnen mit der Erstellung eines Formulars mit einer einfachen Absende-Schaltfläche:

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

Versuchen Sie, Text in das Textfeld einzugeben und dann das Formular abzusenden.

Beim Absenden werden das Daten-Name/Wert-Paar an den Server gesendet. In diesem Fall wird der String `text=user-text` sein, wobei "user-text" der vom Benutzer eingegebene Text ist, kodiert, um Sonderzeichen beizubehalten. Wo und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>`-Elements ab; siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Absende-Schaltfläche

Tastenkombinationen, auch Zugriffs-Tasten und Tastatur-Äquivalente genannt, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um einer Absende-Schaltfläche eine Tastenkombination hinzuzufügen – ebenso wie für jedes {{HTMLElement("input")}}, für das es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste spezifiziert (Sie müssen <kbd>s</kbd> plus die spezifischen Modifikatortasten für Ihre Browser/OS-Kombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des Benutzeragenten zu vermeiden, werden für Zugriffstasten andere Modifikatortasten verwendet als für andere Tastenkürzel auf dem Hostrechner. Weitere Einzelheiten finden Sie unter [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

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

Zum Beispiel löst in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Senden-Schaltfläche aus, während in Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet wird.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies ist besonders problematisch, da die Modifikatoren in der Regel nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, sollten Sie diese Information in einer Weise bereitstellen, die das Design der Website nicht stört (z. B. durch einen leicht zugänglichen Link, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, obwohl dies keine vollständige Lösung für Barrierefreiheitszwecke darstellt.

### Deaktivieren und Aktivieren einer Absende-Schaltfläche

Um eine Absende-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut an, wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies aus wie `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Absende-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele enthalten. Es gibt wirklich nicht viel mehr zu Absende-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerelement manchmal als "einfache Schaltfläche" bezeichnet wird.

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
- [Formulare und Schaltflächen](/de/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn/Forms)
- Das {{HTMLElement("button")}}-Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
