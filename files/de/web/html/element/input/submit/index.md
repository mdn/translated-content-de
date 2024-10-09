---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt (typischerweise, weil der Benutzer die Schaltfläche angeklickt hat), versucht der {{Glossary("user_agent", "User Agent")}}, das Formular an den Server zu senden.

## Wert

Das `value`-Attribut eines `<input type="submit">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

### Das value-Attribut setzen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie kein `value` angeben, erhält die Schaltfläche eine standardmäßige Beschriftung, die vom User Agent gewählt wird. Diese Beschriftung wird vermutlich in der Art von "Absenden" oder "Anfrage absenden" sein. Hier ist ein Beispiel für eine Absenden-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Schaltflächen die folgenden Attribute.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten gesendet werden sollen. Diese hat Vorrang vor dem `action`-Attribut des {{HTMLElement("form")}}-Elements, das den {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenkette, die die Kodierungsmethode angibt, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dieser, der Standardwert, sendet die Formulardaten als Zeichenkette, nachdem der Text unter Verwendung eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API, um die Daten zu verwalten, und ermöglicht das Senden von Dateien an den Server. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular [[`<input type="file">`](/de/docs/Web/HTML/Element/input/file)]-Elemente enthält.
- `text/plain`
  - : Klartext; hauptsächlich nur zum Debuggen nützlich, sodass Sie die Daten leicht sehen können, die gesendet werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das `enctype`-Attribut des Formulars, das diesen `input` besitzt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes `method`-Attribut, das dem übergeordneten Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der von `formaction` oder `action` angegebenen URL begonnen wird, ein Fragezeichen ("?") angehängt und dann die Formulardaten angehängt werden, die wie durch `formenctype` oder das `enctype`-Attribut des Formulars beschrieben kodiert sind. Diese URL wird dann mithilfe einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode eignet sich gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Auswirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten sind im Body der Anfrage enthalten, die mit der von `formaction` oder `action` angegebenen URL unter Verwendung der HTTP {{HTTPMethod("post")}}-Methode gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem das Eingabefeld verknüpft ist, und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, wenn es vorhanden ist, spezifiziert, dass das Formular nicht validiert werden soll, bevor es an den Server gesendet wird. Dies überschreibt den Wert des `novalidate`-Attributs auf dem das Element besitzenden Formular.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Der String muss der Name eines **Browsing Context** sein (das heißt ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes `target`, das durch das `target`-Attribut auf dem das `input` besitzenden {{HTMLElement("form")}} angegeben ist.

Zusätzlich zu den eigentlichen Namen von Tabs, Fenstern oder Inline-Rahmen gibt es ein paar spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing Context wie das, das das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing Context. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch abhängig von der Konfiguration des {{Glossary("user_agent", "User Agent")}} variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing Context des aktuellen. Falls kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing Context; dies ist der Browsing Context, der der oberste Vorfahr des aktuellen Kontextes ist. Ist der aktuelle Kontext der oberste, verhält sich dies wie `_self`.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Absenden-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare abzusenden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) verwenden, oder besser noch ein {{htmlelement("button")}}-Element.

Wenn Sie sich entscheiden, `<button>`-Elemente zur Erstellung der Schaltflächen in Ihrem Formular zu verwenden, beachten Sie Folgendes: Befindet sich die `<button>` innerhalb eines {{HTMLElement("form")}}, wird diese Schaltfläche als „Absenden“-Schaltfläche behandelt. Sie sollten sich daher angewöhnen, ausdrücklich festzulegen, welche Schaltfläche die Absenden-Schaltfläche ist.

### Eine einfache Absenden-Schaltfläche

Wir beginnen mit der Erstellung eines Formulars mit einer einfachen Absenden-Schaltfläche:

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

Dies rendert wie folgt:

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann das Formular abzuschicken.

Beim Absenden wird das Daten-Namen/Wert-Paar an den Server gesendet. In diesem Fall lautet die Zeichenkette `text=benutzer-text`, wobei „benutzer-text“ der vom Benutzer eingegebene Text ist, der kodiert ist, um Sonderzeichen zu erhalten. Wo und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Eine Tastenkombination zu einer Absenden-Schaltfläche hinzufügen

Tastenkombinationen, auch bekannt als Zugriffstasten und Tastaturäquivalente, ermöglichen es dem Benutzer, eine Schaltfläche mithilfe einer Taste oder Tastenkombination auf der Tastatur auszulösen. Um einer Absenden-Schaltfläche eine Tastenkombination hinzuzufügen – wie Sie es bei jedem {{HTMLElement("input")}} tun würden, für das es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den bestimmten Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User Agent zu vermeiden, sind anderen Modifikatortasten für Zugriffstasten als für andere Tastenkombinationen auf dem Host-Computer. Weitere Informationen finden Sie unter [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

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

Zum Beispiel löst in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Senden-Schaltfläche aus, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem beim obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies ist besonders der Fall, da die Modifikatortasten typischerweise nicht standardmäßig sind, um Konflikte zu vermeiden. Bei der Erstellung einer Website sollten Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen verweist, was die Zugriffstasten der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke darstellt.

### Eine Absenden-Schaltfläche deaktivieren und aktivieren

Um eine Absenden-Schaltfläche zu deaktivieren, fügen Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut hinzu, wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit durch Setzen von `disabled` auf `true` oder `false` aktivieren und deaktivieren; in JavaScript sieht dies aus wie `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite zu [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Absenden-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben einfache Beispiele eingefügt. Es gibt eigentlich nicht viel mehr über Absenden-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerung manchmal als „einfache Schaltfläche“ bezeichnet wird.

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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn/Forms)
- Das {{HTMLElement("button")}}-Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
