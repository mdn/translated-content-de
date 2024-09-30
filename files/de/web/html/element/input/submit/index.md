---
title: <input type='submit'>
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event) Ereignis eintritt (typischerweise, weil der Benutzer auf die Schaltfläche geklickt hat), versucht der [User-Agent](/de/docs/Glossary/user_agent), das Formular an den Server zu übermitteln.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="submit">` Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Ansonsten haben Schaltflächen keinen echten Wert. Der `value`-Wert bietet die [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) für die Schaltfläche.

### Das value-Attribut festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhält die Schaltfläche eine Standardbeschriftung, die der User-Agent auswählt. Diese Beschriftung wird wahrscheinlich so etwas wie "Submit" oder "Submit Query" sein. Hier ist ein Beispiel für eine Submit-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}} Elemente gemeinsam haben, unterstützen `submit` Schaltflächen die folgenden Attribute.

### formaction

Ein String, der die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut auf dem {{HTMLElement("form")}} Element, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode angibt, die verwendet werden soll, wenn die Formulardaten an den Server gesendet werden. Es sind drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert und sendet die Formulardaten als Zeichenfolge nach der [Prozentkodierung](/de/docs/Glossary/Percent-encoding) des Textes mithilfe eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData) API, um die Daten zu verwalten, wodurch Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}} Element mit dem [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich zum Debuggen, damit Sie die Daten leicht sehen können, die gesendet werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype` Attributs das `action` Attribut des besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method) Attribut, das auf dem besitzenden Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die im `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attribut angegeben ist, ein Fragezeichen ("?") angehängt wird, und dann die Formulardaten angefügt werden, kodiert, wie es durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des Formulars beschrieben wird. Diese URL wird dann unter Verwendung einer HTTP {{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode eignet sich gut für einfache Formulare, die nur [ASCII](/de/docs/Glossary/ASCII) Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden in den Körper der Anfrage eingeschlossen, die an die im `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attribut angegebene URL gesendet wird, unter Verwendung der HTTP {{HTTPMethod("post")}} Methode. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode zeigt an, dass die Schaltfläche den Dialog schließt, mit dem die Eingabe verbunden ist, und überträgt die Formulardaten überhaupt nicht.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor der Übermittlung an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attributs auf dem besitzenden Formular.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach der Übermittlung des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontexts** sein (d.h. eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des Formulars angeben wird, das dieses Eingabeelement besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext, wie der, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des [User-Agents](/de/docs/Glossary/user_agent) unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen, falls vorhanden. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der das oberste Element des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}} Elementen verfügbar.

## Verwendung von Submit-Schaltflächen

`<input type="submit">` Schaltflächen werden verwendet, um Formulare zu übermitteln. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}} Element verwenden.

Wenn Sie sich entscheiden, `<button>` Elemente zum Erstellen der Schaltflächen in Ihrem Formular zu verwenden, bedenken Sie Folgendes: Wenn `<button>` sich innerhalb eines {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Submit"-Schaltfläche behandelt. Daher sollten Sie sich angewöhnen, ausdrücklich anzugeben, welche Schaltfläche die Submit-Schaltfläche ist.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

Versuchen Sie, Text in das Textfeld einzugeben und das Formular zu übermitteln.

Beim Senden werden der Datenname/Wert-Paar an den Server gesendet. In diesem Fall wird die Zeichenkette `text=usertext` sein, wobei "usertext" der vom Benutzer eingegebene Text ist, kodiert, um Sonderzeichen zu erhalten. Wohin und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen einer Tastenkombination zu einer Submit-Schaltfläche

Tastenkombinationen, auch als Zugriffsschlüssel und Tastaturequivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche durch Drücken einer Taste oder Tastenkombination auszulösen. Um einer Submit-Schaltfläche eine Tastenkombination hinzuzufügen – wie bei jedem {{HTMLElement("input")}}, bei dem dies sinnvoll ist – verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) globale Attribut.

In diesem Beispiel ist <kbd>s</kbd> als Zugriffsschlüssel angegeben (Sie müssen <kbd>s</kbd> plus die speziellen Modifikationstasten für Ihre Browser/OS-Kombination drücken). Um Konflikte mit den eigenen Tastenkombinationen des User-Agents zu vermeiden, werden für Zugriffstasten andere Modifikationstasten verwendet als für andere Verknüpfungen auf dem Host-Computer. Siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für weitere Details.

Hier ist das vorherige Beispiel mit dem <kbd>s</kbd> Zugriffsschlüssel hinzugefügt:

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

Zum Beispiel im Firefox für Mac, wenn man <kbd>Steuerung</kbd>-<kbd>Wahl</kbd>-<kbd>S</kbd> drückt, wird die Senden-Schaltfläche ausgelöst, während Chrome auf Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, was der Zugriffsschlüssel ist! Dies ist besonders wahr, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Seite sollten Sie sicherstellen, dass diese Informationen auf eine Weise bereitgestellt werden, die das Seitendesign nicht beeinträchtigt (zum Beispiel durch das Bereitstellen eines einfach zugänglichen Links, der Informationen darüber enthält, was die Zugriffstasten der Seite sind). Das Hinzufügen eines Tooltips zur Schaltfläche (durch Verwenden des [`title`](/de/docs/Web/HTML/Global_attributes/title) Attributs) kann auch helfen, obwohl es keine vollständige Lösung für Zugänglichkeitszwecke ist.

### Deaktivieren und Aktivieren einer Submit-Schaltfläche

Um eine Submit-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) Attribut darauf an wie folgt:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Siehe die Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) für weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen.

## Validierung

Submit-Schaltflächen beteiligen sich nicht an der Einschränkungsvalidierung; sie haben keinen echten Wert, der beschränkt werden könnte.

## Beispiele

Wir haben oben einfache Beispiele eingefügt. Es gibt wirklich nichts Weiteres über Submit-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerelement manchmal als "einfache Schaltfläche" bezeichnet wird.

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
- [Formulare und Schaltflächen](/de/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn/Forms)
- Das {{HTMLElement("button")}} Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
