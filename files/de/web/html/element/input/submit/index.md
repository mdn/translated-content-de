---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt (in der Regel, weil der Benutzer die Schaltfläche geklickt hat), versucht die [Benutzeragent](/de/docs/Glossary/user_agent), das Formular an den Server zu senden.

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) eines `<input type="submit">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Ansonsten besitzen Schaltflächen keinen echten Wert. Der `value`-Wert bietet die [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) für die Schaltfläche.

### Das Attribut „value“ festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Attribut „value“ weglassen

Wenn Sie keinen `value` angeben, hat die Schaltfläche eine Standardbeschriftung, die vom Benutzeragenten ausgewählt wird. Diese Beschriftung lautet wahrscheinlich "Abschicken" oder "Anfrage senden." Hier ist ein Beispiel für eine Absenden-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Schaltflächen-Eingaben die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das den {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch verfügbar auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)- und {{HTMLElement("button")}}-Elementen.

### formenctype

Ein String, der die zu verwendende Kodierungsmethode beim Senden der Formulardaten an den Server beschreibt. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert, der die Formulardaten als Zeichenkette nach der [Prozentkodierung](/de/docs/Glossary/Percent-encoding) des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} sendet.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, wodurch Dateien an den Server gesendet werden können. Sie _müssen_ diese Kodierung verwenden, wenn Ihr Formular eines der {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Reiner Text; hauptsächlich nur zum Debuggen nützlich, damit Sie die Daten sehen können, die gesendet werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das `action`-Attribut des besitzenden Formulars.

Dieses Attribut ist auch verfügbar auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)- und {{HTMLElement("button")}}-Elementen.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten zu verwenden ist; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das auf dem besitzenden Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem die URL des `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attributs zugrunde gelegt, ein Fragezeichen ("?") angehängt und dann die Formulardaten, kodiert entsprechend dem `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars, angehängt werden. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur [ASCII](/de/docs/Glossary/ASCII)-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Hauptteil der Anfrage gesendet, die mit dem HTTP-{{HTTPMethod("post")}}-Methode an die URL gesendet wird, die das `formaction`- oder das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angibt. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog, mit dem das Eingabefeld verknüpft ist, schließt und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch verfügbar auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)- und {{HTMLElement("button")}}-Elementen.

### formnovalidate

Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor dem Senden an den Server nicht überprüft werden sollte. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des besitzenden Formulars.

Dieses Attribut ist auch verfügbar auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)- und {{HTMLElement("button")}}-Elementen.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** sein (also ein Tab, Fenster oder ein {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt ein beliebiges Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut im {{HTMLElement("form")}}-Element angegeben ist, das dieses Eingabefeld besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder eingebetteten Rahmen gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie das Formular. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist in der Regel ein neues Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des [Benutzeragent](/de/docs/Glossary/user_agent) variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontextes. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält es sich wie `_self`.

Dieses Attribut ist auch verfügbar auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)- und {{HTMLElement("button")}}-Elementen.

## Verwendung von Absende-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare abzusenden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und dann das Verhalten mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) verwenden oder besser noch, ein {{htmlelement("button")}}-Element.

Wenn Sie sich entscheiden, `<button>`-Elemente zur Erstellung der Schaltflächen in Ihrem Formular zu verwenden, beachten Sie Folgendes: Wenn sich das `<button>`-Element in einem {{HTMLElement("form")}} befindet, wird dieses als "Absende-Schaltfläche" behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die Absende-Schaltfläche ist.

### Eine einfache Absende-Schaltfläche

Wir beginnen mit dem Erstellen eines Formulars mit einer einfachen Absende-Schaltfläche:

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

Diese wird wie folgt gerendert:

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann das Formular abzusenden.

Beim Absenden werden die Daten als Namens-/Wertpaar an den Server gesendet. In diesem Fall wäre die Zeichenkette `text=usertext`, wobei "usertext" der vom Benutzer eingegebene Text ist, der kodiert wird, um Sonderzeichen zu erhalten. Wo und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Absende-Schaltfläche

Tastenkombinationen, auch als Zugriffstasten und Tastaturequivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder Tastenkombination auf der Tastatur zu betätigen. Um einer Absende-Schaltfläche eine Tastenkombination hinzuzufügen – genauso wie bei jedem {{HTMLElement("input")}}, bei dem es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikationstasten für Ihre Browser-/Betriebssystemkombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des Benutzeragenten zu vermeiden, werden für Zugriffstasten andere Modifikationstasten verwendet als für andere Shortcuts auf dem Host-Computer. Siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für weitere Informationen.

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

Zum Beispiel aktiviert die Kombination <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> in Firefox für Mac die Senden-Schaltfläche, während Chrome auf Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies gilt besonders, da die Modifikatoren in der Regel nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (zum Beispiel, indem Sie einen leicht zugänglichen Link bereitstellen, der Informationen darüber enthält, was die Zugriffstasten der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Absende-Schaltfläche

Um eine Absende-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut an, wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren oder deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies beispielsweise so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Absende-Schaltflächen nehmen nicht an der Beschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der beschränkt werden könnte.

## Beispiele

Wir haben oben einfache Beispiele enthalten. Es gibt wirklich nicht viel mehr über Absende-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art der Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

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
