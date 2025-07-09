---
title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen gerendert, mit einem standardmäßigen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

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
> Sie sollten normalerweise vermeiden, Rücksetzknöpfe in Ihre Formulare einzufügen. Sie sind selten nützlich und frustrieren eher die Benutzer, die sie versehentlich anklicken (oft während sie versuchen, den [Submit-Button](/de/docs/Web/HTML/Reference/Elements/input/submit) zu klicken).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `<input type="reset">`-Elements enthält einen String, der als Beschriftung der Schaltfläche verwendet wird und der Schaltfläche eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} bietet. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das Wert-Attribut festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Wert-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Zurücksetzen", dies kann jedoch je nach {{Glossary("user_agent", "Benutzeragent")}} variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Rücksetzknöpfen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen möchten und das Verhalten dann mit JavaScript anpassen wollen, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) verwenden oder noch besser ein {{htmlelement("button")}}-Element.

### Ein einfacher Rücksetzknopf

Wir beginnen mit der Erstellung eines einfachen Rücksetzknopfes:

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

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann den Rücksetzknopf zu drücken.

### Hinzufügen einer Tastenkombination für das Zurücksetzen

Um einer Rücksetzschaltfläche eine Tastenkombination hinzuzufügen – genauso wie bei jedem anderen {{HTMLElement("input")}}, bei dem dies sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> zusammen mit den jeweiligen Modifikatortasten für Ihre Browser-/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste dieser Kombinationen).

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

Das Problem mit dem obigen Beispiel ist, dass der Benutzer keine Möglichkeit hat, zu wissen, was die Zugriffstaste ist! Dies gilt insbesondere, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass diese Informationen auf eine Weise bereitgestellt werden, die das Design der Website nicht stört (z.B. durch einen leicht zugänglichen Link, der auf Informationen über die Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren eines Rücksetzknopfes

Um einen Rücksetzknopf zu deaktivieren, geben Sie das Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies aus wie `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben einfache Beispiele gezeigt. Es gibt nicht wirklich viel mehr über Rücksetzknöpfe zu sagen.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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
