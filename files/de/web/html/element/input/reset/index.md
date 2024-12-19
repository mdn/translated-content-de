---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`reset`** werden als Schaltflächen dargestellt, mit einem standardmäßigen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> Man sollte normalerweise vermeiden, Reset-Schaltflächen in Ihre Formulare einzufügen. Sie sind selten nützlich und eher wahrscheinlich, Benutzer zu frustrieren, die sie versehentlich anklicken (oft, wenn sie versuchen, die [submit-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu klicken).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="reset">`-Elements enthält einen String, der als Bezeichnung der Schaltfläche verwendet wird und der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bietet. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das value-Attribut festlegen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Reset", was jedoch je nach {{Glossary("user_agent", "User-Agent")}} variieren kann):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Reset-Schaltflächen

`<input type="reset">`-Schaltflächen werden verwendet, um Formulare zurückzusetzen. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten dann mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) verwenden, oder noch besser, ein {{htmlelement("button")}}-Element.

### Eine einfache Reset-Schaltfläche

Wir beginnen, indem wir eine einfache Reset-Schaltfläche erstellen:

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, etwas Text in das Textfeld einzugeben und dann die Reset-Schaltfläche zu drücken.

### Hinzufügen einer Tastenkombination für die Reset-Schaltfläche

Um einer Reset-Schaltfläche eine Tastenkombination hinzuzufügen – wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist – verwenden Sie das globale [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)-Attribut.

In diesem Beispiel ist <kbd>r</kbd> als Zugangstaste angegeben (Sie müssen <kbd>r</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser).

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

Das Problem bei dem obigen Beispiel ist, dass der Benutzer nicht weiß, was die Zugangstaste ist! Dies ist besonders wahr, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie diese Information auf eine Weise bereitstellen, die das Design der Website nicht stört (zum Beispiel, indem Sie einen leicht zugänglichen Link anbieten, der auf Informationen darüber verweist, was die Zugangstasten der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls helfen, obwohl dies keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Reset-Schaltfläche

Um eine Reset-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut für diese an:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Besuchen Sie die Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) für weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen.

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele hinzugefügt. Es gibt eigentlich nichts weiter zu Reset-Schaltflächen zu sagen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der als Bezeichnung der Schaltfläche verwendet wird</td>
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
