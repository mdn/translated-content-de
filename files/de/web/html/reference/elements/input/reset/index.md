---
title: '`<input type="reset">` HTML-Attributwert'
short-title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente des Typs **`reset`** werden als Schaltflächen gerendert, mit einem Standard-[`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingaben im Formular auf ihre Ausgangswerte zurücksetzt.

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
> Sie sollten normalerweise vermeiden, Rücksetzknöpfe in Ihre Formulare aufzunehmen. Sie sind selten nützlich und führen stattdessen eher dazu, dass Benutzer durch einen versehentlichen Klick darauf frustriert sind (oft beim Versuch, den [Submit-Button](/de/docs/Web/HTML/Reference/Elements/input/submit) zu klicken).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines `<input type="reset">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche dient und damit der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bietet. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das value-Attribut festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (in der Regel "Zurücksetzen", aber dies variiert je nach {{Glossary("user_agent", "User Agent")}}):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Rücksetzknöpfen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, müssen Sie [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) verwenden oder besser noch ein {{htmlelement("button")}}-Element.

### Eine einfache Rücksetzschaltfläche

Wir beginnen mit der Erstellung einer einfachen Rücksetzschaltfläche:

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

Dies wird so gerendert:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann die Rücksetzschaltfläche zu drücken.

### Hinzufügen einer Rücksetztastenkombination

Um einer Rücksetzschaltfläche eine Tastenkombination hinzuzufügen – so wie bei jedem {{HTMLElement("input")}}, bei dem es Sinn macht – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> plus die speziellen Modifikator-Tasten für Ihre Browser-/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste davon).

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

Das Problem mit dem obigen Beispiel ist, dass es keine Möglichkeit gibt, dem Benutzer mitzuteilen, was die Zugriffstaste ist! Dies ist besonders problematisch, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mittels des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs) kann ebenfalls helfen, obwohl dies keine vollständige Lösung für Zugänglichkeitszwecke darstellt.

### Deaktivieren und Aktivieren einer Rücksetzschaltfläche

Um eine Rücksetzschaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut für sie an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Beschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der beschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele aufgenommen. Es gibt wirklich nichts weiter über Rücksetzschaltflächen zu sagen.

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
