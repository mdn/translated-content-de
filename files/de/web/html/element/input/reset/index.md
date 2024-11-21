---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen dargestellt, mit einem Standard-[`click`](/de/docs/Web/API/Element/click_event)-Ereignishandling, das alle Eingaben im Formular auf ihre Anfangswerte zurücksetzt.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> Sie sollten in Ihren Formularen normalerweise auf Zurücksetzen-Schaltflächen verzichten. Sie sind selten nützlich und frustrieren stattdessen eher Benutzer, die sie versehentlich anklicken (oft beim Versuch, die [Absenden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu klicken).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="reset">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird und der Schaltfläche eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} bietet. Schaltflächen wie `reset` haben ansonsten keinen Wert.

### Das value-Attribut setzen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Reset", aber dies variiert je nach {{Glossary("user_agent", "Benutzeragent")}}):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Zurücksetzen-Schaltflächen

`<input type="reset">`-Schaltflächen werden zum Zurücksetzen von Formularen verwendet. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder noch besser ein {{htmlelement("button")}}-Element verwenden.

### Eine einfache Zurücksetzen-Schaltfläche

Beginnen wir mit der Erstellung einer einfachen Zurücksetzen-Schaltfläche:

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

Diese wird wie folgt dargestellt:

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

Versuchen Sie, in das Textfeld etwas einzugeben, und drücken Sie dann die Zurücksetzen-Schaltfläche.

### Hinzufügen eines Tastaturkürzels für das Zurücksetzen

Um einem Zurücksetzen-Schaltfläche ein Tastaturkürzel hinzuzufügen – genauso wie bei jedem {{HTMLElement("input")}}, bei dem dies sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>r</kbd> als Zugangstaste festgelegt (Sie müssen <kbd>r</kbd> zusammen mit den spezifischen Modifikator-Tasten für Ihre Browser/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser).

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

Das Problem bei dem obigen Beispiel ist, dass der Benutzer nicht weiß, welche Zugangstaste es ist! Dies ist besonders problematisch, da die Modifikatoren typischerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht beeinträchtigt (zum Beispiel indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen über die Zugangstasten der Website verweist). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs) kann ebenfalls hilfreich sein, obwohl es keine vollständige Lösung für Barrierefreiheitszwecke ist.

### Deaktivieren und Aktivieren einer Zurücksetzen-Schaltfläche

Um eine Zurücksetzen-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut an:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht dies so aus: `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Sehen Sie sich die Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) an, um weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen zu erhalten.

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen realen Wert, der eingeschränkt werden könnte.

## Beispiele

Wir haben oben grundlegende Beispiele beigefügt. Es gibt wirklich nichts Weiteres zu Zurücksetzen-Schaltflächen zu sagen.

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
