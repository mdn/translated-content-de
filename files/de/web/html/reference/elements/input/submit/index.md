---
title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auftritt (in der Regel, weil der Benutzer die Schaltfläche angeklickt hat), versucht der [User Agent](/de/docs/Glossary/User_agent), das Formular an den Server zu übermitteln.

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `<input type="submit">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Der `value` liefert die [zugängliche Beschreibung](/de/docs/Glossary/Accessible_description) für die Schaltfläche.

### Das Attribut "value" festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Attribut "value" weglassen

Wenn Sie keinen `value` angeben, erhält die Schaltfläche eine Standardbeschriftung, die vom User Agent ausgewählt wird. Diese Beschriftung könnte "Senden" oder "Anfrage senden" lauten. Hier ist ein Beispiel für eine Absende-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Button-Eingaben die folgenden Attribute.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenkette, die die zu verwendende Kodierungsmethode angibt, wenn Formulardaten an den Server gesendet werden. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Diese, der Standardwert, sendet die Formulardaten als Zeichenkette, nachdem der Text unter Verwendung eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} [percent-codiert](/de/docs/Glossary/Percent-encoding) wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, wodurch Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular irgendein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nur für das Debugging nützlich, damit Sie die zu übermittelnden Daten leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Eine Zeichenkette, die die HTTP-Methode angibt, die verwendet wird, wenn die Formulardaten gesendet werden; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das im übergeordneten Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der von `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) angegebenen URL begonnen wird, ein Fragezeichen ("?") hinzugefügt wird und dann die Formulardaten angehängt werden, die wie im `formenctype` oder im [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) des Formulars beschrieben codiert sind. Diese URL wird dann unter Verwendung einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur [ASCII](/de/docs/Glossary/ASCII)-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten sind im Rumpf der Anfrage enthalten, die unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Methode an die von `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) angegebene URL gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem die Eingabe verbunden ist, und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, wenn vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des übergeordneten Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Eine Zeichenkette, die einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort nach dem Senden des Formulars angezeigt werden soll. Die Zeichenkette muss der Name eines **Browsing-Kontextes** (z. B. eines Tabs, Fensters oder eines {{HTMLElement("iframe")}}) sein. Ein hier angegebener Wert überschreibt den Zielwert, der im [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars angegeben ist.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder eingebetteten Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dadurch wird das aktuelle Dokument durch die empfangenen Daten ersetzt. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist in der Regel ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des [User-Agenten](/de/docs/Glossary/User_agent) variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Browsing-Kontextes. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der oberste Vorfahr des aktuellen Kontextes. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Absende-Schaltflächen

`<input type="submit">`-Schaltflächen werden zum Absenden von Formularen verwendet. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und dann deren Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder besser ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie sich entscheiden, `<button>`-Elemente zu verwenden, um die Schaltflächen in Ihrem Formular zu erstellen, beachten Sie Folgendes: Wenn sich das `<button>` innerhalb eines {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Absende"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich zu spezifizieren, welche Schaltfläche die Absende-Schaltfläche ist.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann das Formular abzusenden.

Beim Senden werden die Daten als Name/Wert-Paar an den Server gesendet. In diesem Fall wird die Zeichenkette `text=user-text` sein, wobei "user-text" der vom Benutzer eingegebene Text ist, der kodiert wird, um Sonderzeichen zu erhalten. Wo und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Eine Tastenkombination zu einer Absende-Schaltfläche hinzufügen

Tastenkombinationen, auch als Zugriffsschlüssel und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche mithilfe einer Taste oder einer Kombination von Tasten auf der Tastatur auszulösen. Um eine Tastenkombination zu einer Absende-Schaltfläche hinzuzufügen — genau wie bei jedem {{HTMLElement("input")}}, bei dem es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffsschlüssel angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User-Agenten zu vermeiden, werden für Zugriffsschlüssel andere Modifikatortasten verwendet als für andere Tastenkombinationen auf dem Host-Computer. Weitere Details finden Sie unter [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

Hier ist das vorherige Beispiel mit dem <kbd>s</kbd>-Zugriffsschlüssel:

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

Beispielsweise löst in Firefox für Mac das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Senden-Schaltfläche aus, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht wissen wird, was der Zugriffsschlüssel ist! Dies ist besonders wahr, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie sicherstellen, dass diese Informationen auf eine Weise bereitgestellt werden, die das Site-Design nicht stört (z. B. durch Bereitstellen eines leicht zugänglichen Links, der auf Informationen darüber verweist, was die Zugriffsschlüssel der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mit dem [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut) kann ebenfalls hilfreich sein, obwohl es nicht als vollständige Lösung für Barrierefreiheitszwecke dient.

### Eine Absende-Schaltfläche deaktivieren und aktivieren

Um eine Absende-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut folgendermaßen an:

```html
<input type="submit" value="Send" disabled />
```

Schaltflächen können zur Laufzeit aktiviert und deaktiviert werden, indem `disabled` auf `true` oder `false` gesetzt wird; in JavaScript sieht dies aus wie `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Auf der [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button)-Seite finden Sie weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen.

## Validierung

Absende-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele eingefügt. Es gibt wirklich nichts Weiteres zu sagen über Absende-Schaltflächen. Es gibt einen Grund, warum diese Art der Kontrolle manchmal als "einfache Schaltfläche" bezeichnet wird.

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
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> und
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
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
      <td><a href="https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die sie implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}}-Element
