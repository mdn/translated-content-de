---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen gerendert, mit einem standardmäßigen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> Sie sollten in der Regel vermeiden, Reset-Schaltflächen in Ihre Formulare einzubauen. Sie sind selten nützlich und frustrieren eher Benutzer, die sie versehentlich anklicken (oft, wenn sie versuchen, die [Sendeschaltfläche](/de/docs/Web/HTML/Element/input/submit) zu klicken).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="reset">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche dient und der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bietet. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Setzen des value-Attributs

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Weglassen des value-Attributs

Wenn Sie kein `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Zurücksetzen", dies variiert jedoch je nach {{Glossary("user_agent", "Benutzeragent")}}):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Reset-Schaltflächen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

### Eine einfache Reset-Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Reset-Schaltfläche:

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

Dies wird so dargestellt:

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben, und drücken Sie dann die Reset-Schaltfläche.

### Hinzufügen eines Tastaturkürzels zur Reset-Schaltfläche

Um einer Reset-Schaltfläche ein Tastaturkürzel hinzuzufügen — genauso, wie Sie es bei jedem {{HTMLElement("input")}} tun würden, bei dem es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>r</kbd> als Zugangstaste angegeben (Sie müssen <kbd>r</kbd> plus die spezifischen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser).

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

Das Problem bei dem obigen Beispiel ist, dass der Benutzer nicht wissen kann, was die Zugangstaste ist! Dies ist besonders wahr, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website stellen Sie sicher, dass Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (z. B. indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen darüber verweist, was die Zugangstasten der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mit dem [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Reset-Schaltfläche

Um eine Reset-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut für sie an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben einfache Beispiele eingefügt. Es gibt eigentlich nicht mehr über Reset-Schaltflächen zu sagen.

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
- Das {{HTMLElement("button")}}-Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
