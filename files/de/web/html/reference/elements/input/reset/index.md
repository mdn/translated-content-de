---
title: HTML-Attributwert `<input type="reset">`
short-title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen dargestellt. Ihr standardmäßiger [`click`](/de/docs/Web/API/Element/click_event)-Event-Handler setzt alle Eingaben im Formular auf ihre Anfangswerte zurück.

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

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `<input type="reset">`-Elements enthält eine Zeichenfolge, die als Beschriftung der Schaltfläche dient und ihr eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} gibt. Abgesehen davon haben Schaltflächen wie `reset` keinen Wert.

### Das Attribut value festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Attribut value weglassen

Wenn Sie `value` nicht angeben, erhält die Schaltfläche eine Standardbeschriftung (in der Regel „Reset“, dies hängt jedoch vom {{Glossary("user_agent", "User Agent")}} ab):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Reset-Schaltflächen verwenden

`<input type="reset">`-Schaltflächen dienen zum Zurücksetzen von Formularen. Wenn Sie eine eigene Schaltfläche erstellen und ihr Verhalten mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) oder, besser noch, ein {{htmlelement("button")}}-Element verwenden.

In der Regel sollten Sie Reset-Schaltflächen in Ihren Formularen vermeiden. Sie sind selten nützlich und frustrieren eher Benutzer, die versehentlich darauf klicken (oft beim Versuch, auf die [Senden-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit) zu klicken).

### Eine einfache Reset-Schaltfläche

Beginnen wir mit einer einfachen Reset-Schaltfläche:

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

Sie wird wie folgt dargestellt:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Geben Sie Text in das Textfeld ein und drücken Sie anschließend die Reset-Schaltfläche.

### Ein Tastenkürzel zum Zurücksetzen hinzufügen

Um einer Reset-Schaltfläche ein Tastenkürzel hinzuzufügen, verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) – wie bei jedem {{HTMLElement("input")}}, für das dies sinnvoll ist.

In diesem Beispiel ist <kbd>r</kbd> als Zugriffstaste festgelegt (Sie müssen <kbd>r</kbd> zusammen mit den für Ihre Browser- und Betriebssystemkombination erforderlichen Modifikatortasten drücken; eine hilfreiche Übersicht finden Sie unter [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)).

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

Das Problem am obigen Beispiel ist, dass Benutzer nicht erkennen können, welche Zugriffstaste festgelegt wurde. Das gilt besonders, weil die erforderlichen Modifikatortasten in der Regel nicht einheitlich sind, um Konflikte zu vermeiden. Stellen Sie beim Erstellen einer Website sicher, dass Sie diese Information bereitstellen, ohne die Gestaltung der Website zu beeinträchtigen (beispielsweise durch einen leicht zugänglichen Link zu einer Übersicht der Zugriffstasten der Website). Ein Tooltip für die Schaltfläche (über das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)) kann ebenfalls helfen, ist im Hinblick auf die Barrierefreiheit aber keine vollständige Lösung.

### Eine Reset-Schaltfläche deaktivieren und aktivieren

Um eine Reset-Schaltfläche zu deaktivieren, geben Sie das Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) an:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In JavaScript sieht das beispielsweise so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Möglichkeiten zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite zu [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Constraint-Validierung teil; sie haben keinen eigentlichen Wert, der eingeschränkt werden könnte.

## Beispiele

Einfache Beispiele finden Sie bereits oben. Zu Reset-Schaltflächen gibt es darüber hinaus kaum etwas zu ergänzen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die als Beschriftung der Schaltfläche dient</td>
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

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}}-Element
