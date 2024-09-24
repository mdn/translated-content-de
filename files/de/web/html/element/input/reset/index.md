---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`reset`** werden als Schaltflächen gerendert, mit einem Standardereignishandler für das {{domxref("Element/click_event", "Klicken")}}, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> In der Regel sollten Sie vermeiden, Rücksetzschaltflächen in Ihren Formularen einzuschließen. Sie sind selten nützlich und stattdessen eher frustrierend für Benutzer, die sie versehentlich anklicken (oft beim Versuch, die [Absenden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu drücken).

## Wert

Das `value`-Attribut eines `<input type="reset">` Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche dient und eine {{glossary("barrierefreie Beschreibung")}} bereitstellt. Schaltflächen wie `reset` haben sonst keinen Wert.

### Das value-Attribut setzen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Reset", dies kann jedoch je nach {{Glossary("Benutzeragent")}} variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Rücksetzschaltflächen

`<input type="reset">` Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) verwenden oder besser noch ein {{htmlelement("button")}}-Element.

### Eine einfache Rücksetzschaltfläche

Wir beginnen mit der Erstellung einer einfachen Rücksetzschaltfläche:

```html
<form>
  <div>
    <label for="example">Geben Sie einen Beispieltext ein</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" />
  </div>
</form>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

Versuchen Sie, Text in das Textfeld einzugeben und dann die Rücksetzen-Schaltfläche zu drücken.

### Hinzufügen einer Tastenkombination zum Zurücksetzen

Um einer Rücksetzschaltfläche eine Tastenkombination hinzuzufügen – so wie Sie dies mit jedem {{HTMLElement("input")}} tun würden, für das es sinnvoll ist – verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey) globale Attribut.

In diesem Beispiel ist <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> plus die bestimmten Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey) für eine nützliche Liste dieser Tasten).

```html
<form>
  <div>
    <label for="example">Geben Sie einen Beispieltext ein</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

Das Problem beim obigen Beispiel ist, dass es für den Benutzer keine Möglichkeit gibt zu wissen, was die Zugriffstaste ist! Dies ist besonders wahr, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie diese Informationen so bereitstellen, dass sie das Design der Website nicht stören (zum Beispiel durch Bereitstellen eines leicht zugänglichen Links, der auf Informationen verweist, welche Zugriffstasten die Website hat). Das Hinzufügen eines Tooltips zur Schaltfläche (mit dem [`title`](/de/docs/Web/HTML/Global_attributes#title) Attribut) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Barrierefreiheit ist.

### Deaktivieren und Aktivieren einer Rücksetzschaltfläche

Um eine Rücksetzschaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled) Attribut für sie an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit durch Setzen von `disabled` auf `true` oder `false` aktivieren oder deaktivieren; in JavaScript sieht dies aus wie `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Validierung von Einschränkungen teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben einfache Beispiele eingefügt. Es gibt wirklich nichts weiter zu sagen über Rücksetzschaltflächen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>{{domxref("Element/click_event", "Klick")}}</td>
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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}} Schnittstelle, die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn/Forms)
- Das {{HTMLElement("button")}} Element
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
