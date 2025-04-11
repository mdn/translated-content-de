---
title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`reset`** werden als Schaltflächen gerendert, mit einem Standard-`click`-Ereignishandler, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

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
> Sie sollten in der Regel vermeiden, Zurücksetzungsschaltflächen in Ihre Formulare aufzunehmen. Diese sind selten nützlich und neigen eher dazu, Benutzer zu frustrieren, die versehentlich darauf klicken (oft beim Versuch, die [Absende-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit) zu klicken).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `<input type="reset">` Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird und der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bereitstellt. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das Attribut "value" festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Attribut "value" weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Zurücksetzen", dies kann jedoch je nach {{Glossary("user_agent", "Benutzeragent")}} variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Zurücksetzungsschaltflächen

`<input type="reset">` Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mittels JavaScript anpassen möchten, sollten Sie entweder [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) verwenden, oder noch besser, ein {{htmlelement("button")}} Element.

### Eine einfache Zurücksetzungsschaltfläche

Wir beginnen mit der Erstellung einer einfachen Zurücksetzungsschaltfläche:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann die Zurücksetzungsschaltfläche zu drücken.

### Hinzufügen einer Tastenkombination für Zurücksetzung

Um einer Zurücksetzungsschaltfläche eine Tastenkombination hinzuzufügen — genauso wie bei jedem {{HTMLElement("input")}}, bei dem es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> plus die speziellen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; sehen Sie sich die Seite [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste dieser Tasten an).

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

Das Problem bei obigem Beispiel ist, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Dies gilt insbesondere, da die Modifikatoren typischerweise nicht standardmäßig sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie sicherstellen, dass diese Informationen in einer Weise bereitgestellt werden, die das Design der Website nicht beeinträchtigt (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen verweist, welche die Zugriffstasten der Website sind). Ein Tooltip (mithilfe des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attributs) an der Schaltfläche kann auch hilfreich sein, obwohl dies keine vollständige Lösung für Barrierefreiheitszwecke darstellt.

### Deaktivieren und Aktivieren einer Zurücksetzungsschaltfläche

Um eine Zurücksetzungsschaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Attribut an:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies wie `btn.disabled = true` oder `btn.disabled = false` aus.

> [!NOTE]
> Sehen Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button) nach, um weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen zu erhalten.

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen realen Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele aufgenommen. Es gibt eigentlich nichts Weiteres, das über Zurücksetzungsschaltflächen gesagt werden muss.

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}} Element
