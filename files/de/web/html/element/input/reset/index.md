---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`reset`** werden als Schaltflächen dargestellt, mit einem Standard-[`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> Sie sollten in der Regel darauf verzichten, Zurücksetzen-Schaltflächen in Ihre Formulare einzufügen. Sie sind selten nützlich und frustrieren eher die Benutzer, die sie versehentlich anklicken (oft beim Versuch, die [Absenden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu klicken).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="reset">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird und der Schaltfläche eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) verleiht. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das value-Attribut festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Reset", dies kann jedoch je nach [User-Agent](/de/docs/Glossary/user_agent) variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Zurücksetzen-Schaltflächen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen möchten und das Verhalten über JavaScript anpassen wollen, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) verwenden, oder besser noch ein {{htmlelement("button")}}-Element.

### Eine einfache Zurücksetzen-Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Zurücksetzen-Schaltfläche:

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

Diese wird so dargestellt:

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann die Zurücksetzen-Schaltfläche zu drücken.

### Eine Tastenkombination für das Zurücksetzen hinzufügen

Um eine Tastenkombination zu einer Zurücksetzen-Schaltfläche hinzuzufügen – genau wie bei jedem {{HTMLElement("input")}}, für das dies sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey).

In diesem Beispiel wird <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> plus die speziellen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey) für eine nützliche Liste dieser Tasten).

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

Das Problem mit dem obigen Beispiel ist, dass der Benutzer nicht wissen kann, was die Zugriffstaste ist! Dies gilt insbesondere, da die Modifikatoren in der Regel nicht standardmäßig sind, um Konflikte zu vermeiden. Wenn Sie eine Website erstellen, stellen Sie sicher, dass diese Informationen auf eine Weise bereitgestellt werden, die das Design der Website nicht beeinträchtigt (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attributs) kann ebenfalls hilfreich sein, obwohl es keine vollständige Lösung für die Barrierefreiheit darstellt.

### Eine Zurücksetzen-Schaltfläche deaktivieren und aktivieren

Um eine Zurücksetzen-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Constraint-Validierung teil; sie haben keinen echten Wert, der eingeschränkt werden kann.

## Beispiele

Wir haben oben einfache Beispiele aufgenommen. Es gibt wirklich nicht viel mehr über Zurücksetzen-Schaltflächen zu sagen.

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
- [Formulare und Schaltflächen](/de/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn/Forms)
- Das {{HTMLElement("button")}} Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
