---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen dargestellt, mit einem Standard-Handler für das [`Klick`](/de/docs/Web/API/Element/click_event)-Ereignis, das alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

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
> In der Regel sollte man vermeiden, Zurücksetzen-Schaltflächen in Formularen einzufügen. Sie sind selten nützlich und führen stattdessen eher dazu, dass Benutzer sie versehentlich anklicken (häufig beim Versuch, die [Absenden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu klicken).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="reset">`-Elements enthält einen String, der als Label der Schaltfläche verwendet wird und der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bereitstellt. Schaltflächen wie `reset` haben sonst keinen Wert.

### Festlegen des value-Attributs

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Weglassen des value-Attributs

Wenn Sie kein `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (in der Regel "Zurücksetzen", aber dies variert je nach {{Glossary("user_agent", "User-Agent")}}):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Zurücksetzen-Schaltflächen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und deren Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann die Zurücksetzen-Schaltfläche zu drücken.

### Hinzufügen einer Tastenkombination für das Zurücksetzen

Um einer Zurücksetzen-Schaltfläche eine Tastenkombination hinzuzufügen – genau wie bei jedem {{HTMLElement("input")}}, bei dem es sinnvoll ist – verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)-globale Attribut.

In diesem Beispiel ist <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> zusammen mit den entsprechenden Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser Kombinationen).

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

Das Problem beim obigen Beispiel ist, dass der Benutzer nicht erkennen kann, welche Zugriffstaste vorhanden ist! Dies ist besonders dann der Fall, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollte diese Information auf eine Weise bereitgestellt werden, die das Design der Website nicht stört (beispielsweise durch das Bereitstellen eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Website zeigt). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, obwohl es keine vollständige Lösung für Zugänglichkeitszwecke darstellt.

### Deaktivieren und Aktivieren einer Zurücksetzen-Schaltfläche

Um eine Zurücksetzen-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden kann.

## Beispiele

Wir haben oben grundlegende Beispiele eingefügt. Es gibt nicht wirklich mehr zu sagen über Zurücksetzen-Schaltflächen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`klick`](/de/docs/Web/API/Element/click_event)</td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- [Formulare und Schaltflächen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Das {{HTMLElement("button")}}-Element
