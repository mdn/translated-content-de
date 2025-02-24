---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`reset`** werden als Schaltflächen gerendert, mit einem Standard-`click`-Ereignishandler, der alle Eingaben im Formular auf ihre ursprünglichen Werte zurücksetzt.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;reset&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <div class="controls">
    <label for="id">User ID:</label>
    <input type="text" id="id" name="id" />

    <input type="reset" value="Reset" />
    <input type="submit" value="Submit" />
  </div>
</form>
```

```css interactive-example
.controls {
  padding-top: 1rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr;
  gap: 0.7rem;
}

label {
  font-size: 0.8rem;
  justify-self: end;
}

input[type="reset"],
input[type="submit"] {
  width: 5rem;
  justify-self: end;
}

input[type="reset"] {
  grid-column: 2;
  grid-row: 2;
}

input[type="submit"] {
  grid-column: 2;
  grid-row: 3;
}
```

> [!NOTE]
> In der Regel sollten Sie vermeiden, Reset-Schaltflächen in Ihre Formulare aufzunehmen. Sie sind selten nützlich und frustrieren stattdessen eher Benutzer, die sie versehentlich anklicken (häufig beim Versuch, die [Senden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu drücken).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="reset">`-Elements enthält eine Zeichenfolge, die als Beschriftung der Schaltfläche verwendet wird und der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bietet. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das value-Attribut festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (in der Regel "Reset", dies kann jedoch je nach {{Glossary("user_agent", "User Agent")}} variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Reset-Schaltflächen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

### Eine grundlegende Reset-Schaltfläche

Wir beginnen mit der Erstellung einer grundlegenden Reset-Schaltfläche:

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" />
  </div>
</form>
```

Diese wird wie folgt dargestellt:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann die Reset-Schaltfläche zu drücken.

### Hinzufügen eines Tastaturkürzels zu einer Reset-Schaltfläche

Um einer Reset-Schaltfläche ein Tastaturkürzel hinzuzufügen – genau wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist – verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)-Globale Attribut.

In diesem Beispiel wird <kbd>r</kbd> als Access Key angegeben (Sie müssen <kbd>r</kbd> zusammen mit den entsprechenden Modifikator-Tasten für Ihre Browser-/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für eine hilfreiche Liste dieser Kombinationen).

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

Das Problem mit dem obigen Beispiel ist, dass es für den Benutzer keine Möglichkeit gibt, zu erfahren, welches der Access Key ist! Dies ist besonders problematisch, da die Modifikatoren in der Regel nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (z. B. indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen darüber verweist, welche Access Keys die Website verwendet). Das Hinzufügen eines Tooltips zur Schaltfläche (durch das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut) kann ebenfalls hilfreich sein, ist jedoch keine komplette Lösung für Zugänglichkeitszwecke.

### Deaktivieren und Aktivieren einer Reset-Schaltfläche

Um eine Reset-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut an:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Siehe die Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) für weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen.

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele hinzugefügt. Es gibt wirklich nicht viel mehr über Reset-Schaltflächen zu sagen.

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
