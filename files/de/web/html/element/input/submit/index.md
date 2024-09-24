---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`submit`** werden als Schaltflächen dargestellt. Wenn das {{domxref("Element/click_event", "Klick")}}-Ereignis eintritt (normalerweise, weil der Benutzer die Schaltfläche angeklickt hat), versucht der {{Glossary("user agent")}}, das Formular an den Server zu senden.

## Wert

Das `value`-Attribut eines `<input type="submit">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche angezeigt wird. Schaltflächen haben ansonsten keinen echten Wert. Das `value` bietet die {{glossary("accessible description", "zugängliche Beschreibung")}} für die Schaltfläche.

### Festlegen des value-Attributs

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Weglassen des value-Attributs

Wenn Sie kein `value` angeben, erhält die Schaltfläche eine Standardbeschriftung, die durch den Benutzeragenten ausgewählt wird. Diese Beschriftung dürfte in etwa "Submit" oder "Submit Query" lauten. Hier ist ein Beispiel für eine Sende-Schaltfläche mit einer Standardbeschriftung in Ihrem Browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `submit`-Schaltflächen die folgenden Attribute.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten gesendet werden sollen. Dieser Wert hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenkette, die die Codierungsmethode angibt, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenkette nach {{Glossary("Percent-encoding", "percent-encoding")}} der Texte mithilfe eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die {{domxref("FormData")}}-API, um die Daten zu verwalten, sodass Dateien an den Server gesendet werden können. Sie _müssen_ diesen Codierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element des Typs `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nur zum Debuggen nützlich, sodass Sie die zu sendenden Daten problemlos sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das `action`-Attribut des eigenen Formulars.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Eine Zeichenkette, die die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes in the owning form angegebene [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wird, einem Fragezeichen ("?") hinzugefügt und dann die Formulardaten angefügt werden, codiert wie beschrieben durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars. Diese URL wird dann mithilfe einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur aus {{Glossary("ASCII")}}-Zeichen bestehen und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten sind im Hauptteil der Anfrage enthalten, die an die URL gesendet wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wird, unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Methode. Diese Methode unterstützt komplexe Daten und Datei-Anhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche das Dialogfenster schließt, mit dem das Eingabefeld verbunden ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des eigenen Formulars.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Eine Zeichenkette, die einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wurde. Die Zeichenkette muss der Name eines **Browsing-Kontextes** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebenen Wert überschreibt jedes durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des {{HTMLElement("form")}} angegebenen Ziels, dem dieses Eingabefeld gehört.

Zusätzlich zu den eigentlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dieses ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist normalerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user agent")}} variieren.
- `_parent`
  - : Lädt die Antwort in den Eltern-Browsing-Kontext des aktuellen. Wenn es keinen Eltern-Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und {{HTMLElement("button")}}-Elementen verfügbar.

## Verwendung von Sende-Schaltflächen

`<input type="submit">`-Schaltflächen werden verwendet, um Formulare zu senden. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und deren Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) verwenden oder noch besser ein {{htmlelement("button")}}-Element.

Wenn Sie sich entscheiden, `<button>`-Elemente zu verwenden, um die Schaltflächen in Ihrem Formular zu erstellen, beachten Sie Folgendes: Wenn sich der `<button>` innerhalb eines {{HTMLElement("form")}} befindet, wird diese Schaltfläche als "Senden"-Schaltfläche behandelt. Sie sollten also daran gewöhnt sein, ausdrücklich anzugeben, welche Schaltfläche die Senden-Schaltfläche ist.

### Eine einfache Sende-Schaltfläche

Wir beginnen mit einem Formular mit einer einfachen Sende-Schaltfläche:

```html
<form>
  <div>
    <label for="example">Lassen Sie uns etwas Text senden</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Senden" />
  </div>
</form>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann das Formular abzusenden.

Beim Absenden wird das Datenname/Wert-Paar an den Server gesendet. In diesem Fall wird die Zeichenkette `text=usertext` sein, wobei "usertext" der vom Benutzer eingegebene Text ist, der codiert wird, um Sonderzeichen zu erhalten. Wo und wie die Daten gesendet werden, hängt von der Konfiguration des `<form>` ab; siehe [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) für weitere Details.

### Hinzufügen eines Tastenkürzels zu einer Sende-Schaltfläche

Tastenkürzel, auch bekannt als Zugangstasten und Tastaturequivalente, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder einer Kombination von Tasten auf der Tastatur auszulösen. Um einer Sende-Schaltfläche ein Tastenkürzel hinzuzufügen – genauso wie bei jedem {{HTMLElement("input")}}, bei dem es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugangsschlüssel angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken). Um Konflikte mit eigenen Tastenkombinationen des Benutzeragenten zu vermeiden, werden andere Modifikatortasten für Zugangstasten als für andere Tastenkombinationen auf dem Host-Computer verwendet. Weitere Einzelheiten finden Sie unter [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

Hier ist das vorherige Beispiel mit dem Zugangsschlüssel <kbd>s</kbd> hinzugefügt:

```html
<form>
  <div>
    <label for="example">Lassen Sie uns etwas Text senden</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Senden" accesskey="s" />
  </div>
</form>
```

In Firefox für Mac beispielsweise löst das Drücken von <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> die Senden-Schaltfläche aus, während Chrome auf Windows <kbd>Alt</kbd>+<kbd>S</kbd> verwendet.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht weiß, welches der Zugangsschlüssel ist! Dies gilt insbesondere, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, sollten Sie diese Informationen auf eine Weise bereitstellen, die das Webdesign nicht beeinträchtigt (indem Sie beispielsweise einen leicht zugänglichen Link bereitstellen, der auf Informationen zu den Zugangsschlüsseln der Website verweist). Das Hinzufügen eines Tooltips zu der Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Sende-Schaltfläche

Um eine Sende-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut an, so:

```html
<input type="submit" value="Senden" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Sende-Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden müsste.

## Beispiele

Wir haben oben einfache Beispiele eingefügt. Es gibt wirklich nicht viel mehr über Sende-Schaltflächen zu sagen. Es gibt einen Grund, warum diese Art von Steuerung manchmal als "einfache Schaltfläche" bezeichnet wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die als Schaltflächenbeschriftung verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>{{domxref("Element/click_event", "Klicken")}}</td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}}-Schnittstelle, die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn/Forms)
- Das {{HTMLElement("button")}}-Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
