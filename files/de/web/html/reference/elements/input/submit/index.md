---
title: '`<input type="submit">` HTML-Attributwert'
short-title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`submit`** werden als Schaltflächen dargestellt. Wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis eintritt (üblicherweise, weil eine Person auf die Schaltfläche geklickt hat), versucht der {{Glossary("user_agent", "User Agent")}}, das Formular an den Server zu übermitteln.

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `<input type="submit">`-Elements enthält eine Zeichenfolge, die als Beschriftung der Schaltfläche angezeigt wird. Darüber hinaus haben diese Schaltflächen keinen eigentlichen Wert. `value` stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} der Schaltfläche bereit.

### Das Attribut `value` festlegen

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Attribut `value` weglassen

Wenn Sie keinen `value` angeben, erhält die Schaltfläche eine vom User Agent gewählte Standardbeschriftung. Diese lautet wahrscheinlich etwa „Submit“ oder „Submit Query“. Hier sehen Sie ein Beispiel für eine Submit-Schaltfläche mit der Standardbeschriftung Ihres Browsers:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Schaltflächen die folgenden Attribute.

### formaction

Eine Zeichenfolge, die die URL angibt, an die die Daten übermittelt werden sollen. Sie hat Vorrang vor dem Attribut [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) des {{HTMLElement("form")}}-Elements, zu dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formenctype

Eine Zeichenfolge, die das Kodierungsverfahren für die Übermittlung der Formulardaten an den Server angibt. Drei Werte sind zulässig:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert. Die Formulardaten werden als Zeichenfolge gesendet, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht es, Dateien an den Server zu übermitteln. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich für die Fehlersuche nützlich, da Sie die zu übermittelnden Daten leicht einsehen können.

Falls angegeben, überschreibt der Wert des Attributs `formenctype` das Attribut [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) des zugehörigen Formulars.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formmethod

Eine Zeichenfolge, die die HTTP-Methode für die Übermittlung der Formulardaten angibt. Dieser Wert überschreibt ein etwaiges Attribut [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) des zugehörigen Formulars. Zulässige Werte sind:

- `get`
  - : Ausgehend von der URL im Attribut `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) wird eine URL erstellt. Daran werden ein Fragezeichen („?“) und anschließend die Formulardaten angehängt, kodiert gemäß `formenctype` oder dem Attribut [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) des Formulars. Diese URL wird dann mit einer HTTP-Anfrage der Methode {{HTTPMethod("get")}} an den Server gesendet. Diese Methode eignet sich gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden in den Body der Anfrage aufgenommen, die mit der HTTP-Methode {{HTTPMethod("post")}} an die im Attribut `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) angegebene URL gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode gibt an, dass die Schaltfläche den zugehörigen Dialog schließt. Die Formulardaten werden dabei nicht übertragen.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formnovalidate

Ein boolesches Attribut, das, falls vorhanden, festlegt, dass das Formular vor der Übermittlung an den Server nicht validiert werden soll. Es überschreibt den Wert des Attributs [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) des zugehörigen Formulars.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formtarget

Eine Zeichenfolge, die einen Namen oder ein Schlüsselwort angibt und damit festlegt, wo die nach dem Übermitteln des Formulars empfangene Antwort angezeigt wird. Die Zeichenfolge muss der Name eines **Browsing-Kontexts** sein (also eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt das Ziel, das im Attribut [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) des zugehörigen {{HTMLElement("form")}} angegeben ist.

Neben den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames können einige spezielle Schlüsselwörter verwendet werden:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dadurch wird das aktuelle Dokument durch die empfangenen Daten ersetzt. Dies ist der Standardwert, wenn kein Wert angegeben wird.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Üblicherweise ist dies ein neuer Tab im selben Fenster wie das aktuelle Dokument; je nach Konfiguration des {{Glossary("user_agent", "User Agents")}} kann es jedoch anders sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontexts. Wenn es keinen übergeordneten Kontext gibt, verhält sich dieser Wert wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext, also den obersten Vorfahren des aktuellen Kontexts. Ist der aktuelle Kontext bereits der oberste, verhält sich dieser Wert wie `_self`.

Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und {{HTMLElement("button")}}-Elemente verfügbar.

## Submit-Schaltflächen verwenden

Schaltflächen des Typs `<input type="submit">` werden verwendet, um Formulare zu übermitteln. Wenn Sie eine eigene Schaltfläche erstellen und ihr Verhalten mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder, noch besser, ein {{htmlelement("button")}}-Element verwenden.

Wenn Sie die Schaltflächen in Ihrem Formular mit `<button>`-Elementen erstellen, beachten Sie Folgendes: Befindet sich ein `<button>` innerhalb eines {{HTMLElement("form")}}, wird diese Schaltfläche als Submit-Schaltfläche behandelt. Geben Sie deshalb ausdrücklich an, welche Schaltfläche das Formular übermitteln soll.

### Eine einfache Submit-Schaltfläche

Zunächst erstellen wir ein Formular mit einer einfachen Submit-Schaltfläche:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Das wird wie folgt dargestellt:

{{EmbedLiveSample("A_basic_submit_button", 650, 100)}}

Geben Sie etwas Text in das Textfeld ein und übermitteln Sie anschließend das Formular.

Bei der Übermittlung wird das Name-Wert-Paar der Daten an den Server gesendet. In diesem Fall lautet die Zeichenfolge `text=user-text`, wobei „user-text“ für den eingegebenen Text steht, der zur Erhaltung von Sonderzeichen kodiert wird. Wohin und wie die Daten übermittelt werden, hängt von der Konfiguration des `<form>` ab. Weitere Informationen finden Sie unter [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

### Einer Submit-Schaltfläche ein Tastenkürzel hinzufügen

Mit Tastenkürzeln, auch Zugriffstasten oder Tastaturentsprechungen genannt, können Benutzer eine Schaltfläche über eine Taste oder eine Tastenkombination auslösen. Um einer Submit-Schaltfläche ein Tastenkürzel hinzuzufügen, verwenden Sie – wie bei jedem {{HTMLElement("input")}}, für das dies sinnvoll ist – das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugriffstaste festgelegt (Sie müssen <kbd>s</kbd> zusammen mit den für Ihre Browser-Betriebssystem-Kombination vorgesehenen Modifikatortasten drücken). Um Konflikte mit den Tastenkürzeln des User Agents zu vermeiden, werden für Zugriffstasten andere Modifikatortasten verwendet als für andere Tastenkürzel auf dem Computer. Weitere Informationen finden Sie unter [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

Hier sehen Sie das vorherige Beispiel mit der hinzugefügten Zugriffstaste <kbd>s</kbd>:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

In Firefox auf einem Mac löst beispielsweise <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Senden-Schaltfläche aus, während Chrome unter Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem bei diesem Beispiel ist, dass Benutzer die Zugriffstaste nicht kennen. Dies gilt besonders, weil die Modifikatortasten zur Vermeidung von Konflikten in der Regel nicht standardisiert sind. Stellen Sie beim Erstellen einer Website sicher, dass diese Information verfügbar ist, ohne das Design zu beeinträchtigen – beispielsweise über einen leicht zugänglichen Link zu den Zugriffstasten der Website. Ein Tooltip für die Schaltfläche (über das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)) kann ebenfalls helfen, ist im Hinblick auf die Barrierefreiheit jedoch keine vollständige Lösung.

### Eine Submit-Schaltfläche deaktivieren und aktivieren

Um eine Submit-Schaltfläche zu deaktivieren, geben Sie das Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) an:

```html
<input type="submit" value="Send" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In JavaScript sieht das beispielsweise so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Möglichkeiten zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite zu [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Submit-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen eigentlichen Wert, der eingeschränkt werden könnte.

## Beispiele

Oben finden Sie bereits grundlegende Beispiele. Über Submit-Schaltflächen gibt es nicht viel mehr zu sagen. Nicht ohne Grund wird diese Art von Steuerelement manchmal als „einfache Schaltfläche“ bezeichnet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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

- {{HTMLElement("input")}} und die implementierende Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}}-Element
