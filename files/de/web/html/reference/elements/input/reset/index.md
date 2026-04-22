---
title: '`<input type="reset">` HTML-Attributwert'
short-title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen dargestellt, mit einem Standard-[`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

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
> Sie sollten normalerweise vermeiden, Zurücksetzen-Schaltflächen in Ihre Formulare aufzunehmen. Sie sind selten nützlich und führen eher dazu, dass Benutzer frustriert werden, wenn sie versehentlich darauf klicken (oft beim Versuch, die [Absende-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit) zu drücken).

## Wert

Das `value`-Attribut eines `<input type="reset">`-Elements enthält einen String, der als Beschriftung der Schaltfläche verwendet wird, um der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bereitzustellen. Schaltflächen wie `reset` haben sonst keinen Wert.

### Das "value"-Attribut setzen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das "value"-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Reset", aber dies kann je nach {{Glossary("user_agent", "Benutzeragent")}} variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Zurücksetzen-Schaltflächen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

### Eine einfache Zurücksetzen-Schaltfläche

Wir beginnen mit einer einfachen Zurücksetzen-Schaltfläche:

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

Diese wird wie folgt gerendert:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, Text in das Textfeld einzugeben und anschließend die Zurücksetzen-Schaltfläche zu drücken.

### Hinzufügen einer Tastenkombination für die Zurücksetzen-Schaltfläche

Um einer Zurücksetzen-Schaltfläche eine Tastenkombination hinzuzufügen — so wie Sie es mit jedem {{HTMLElement("input")}} tun würden, für das es Sinn macht — verwenden Sie das globale [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)-Attribut.

In diesem Beispiel wird <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> plus die speziellen Modifikatortasten für Ihre Browser/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste dieser).

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

Das Problem bei dem obigen Beispiel ist, dass es für den Benutzer keine Möglichkeit gibt zu wissen, wie die Zugriffstaste ist! Dies ist besonders problematisch, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass diese Informationen auf eine Weise bereitgestellt werden, die das Design der Website nicht beeinträchtigt (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Zurücksetzen-Schaltfläche

Um eine Zurücksetzen-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele eingefügt. Es gibt wirklich nichts Weiteres über Zurücksetzen-Schaltflächen zu sagen.

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
