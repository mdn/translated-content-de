---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`reset`** werden als Schaltflächen dargestellt, mit einem Standard-[`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der alle Eingabefelder im Formular auf ihre Anfangswerte zurücksetzt.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> Normalerweise sollten Sie keine Zurücksetzen-Schaltflächen in Ihre Formulare einfügen. Sie sind selten nützlich und neigen eher dazu, Benutzer zu frustrieren, die sie versehentlich anklicken (oft, während sie versuchen, die [Absenden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit) zu klicken).

## Wert

Das `value`-Attribut eines `<input type="reset">`-Elements enthält einen String, der als Beschriftung für die Schaltfläche verwendet wird und der Schaltfläche eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) bietet. Schaltflächen wie `reset` haben sonst keinen Wert.

### Das Value-Attribut setzen

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Das Value-Attribut weglassen

Wenn Sie keinen `value` angeben, erhalten Sie eine Schaltfläche mit der Standardbeschriftung (typischerweise "Reset", dies kann jedoch je nach [User Agent](/de/docs/Glossary/user_agent) variieren):

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Verwendung von Zurücksetzen-Schaltflächen

`<input type="reset">`-Schaltflächen werden zum Zurücksetzen von Formularen verwendet. Wenn Sie eine benutzerdefinierte Schaltfläche erstellen und dann das Verhalten mit JavaScript anpassen möchten, sollten Sie [`<input type="button">`](/de/docs/Web/HTML/Element/input/button) oder besser noch ein {{htmlelement("button")}}-Element verwenden.

### Eine einfache Zurücksetzen-Schaltfläche

Wir beginnen mit einer einfachen Zurücksetzen-Schaltfläche:

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

So sieht das aus:

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

Versuchen Sie, Text in das Eingabefeld einzugeben und dann die Zurücksetzen-Schaltfläche zu drücken.

### Hinzufügen einer Zurücksetzen-Tastenkombination

Um einer Zurücksetzen-Schaltfläche eine Tastenkombination hinzuzufügen — genau wie bei jedem anderen geeigneten {{HTMLElement("input")}} — verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey)-globale Attribut.

In diesem Beispiel wird <kbd>r</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>r</kbd> plus die entsprechenden Modifikatortasten für Ihre Browser/OS-Kombination drücken; siehe [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey) für eine nützliche Liste dieser).

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

Das Problem bei obigem Beispiel ist, dass der Benutzer nicht wissen kann, was die Zugriffstaste ist! Dies ist besonders problematisch, da die Modifikatoren normalerweise nicht standardisiert sind, um Konflikte zu vermeiden. Beim Erstellen einer Website sollten Sie diese Informationen so bereitstellen, dass sie das Design der Website nicht stören (zum Beispiel, indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen verweist, was die Zugriffstasten der Website sind). Das Hinzufügen eines Tooltips zur Schaltfläche (mithilfe des [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attributs) kann ebenfalls helfen, obwohl es keine vollständige Lösung für Zugänglichkeitszwecke ist.

### Deaktivieren und Aktivieren einer Zurücksetzen-Schaltfläche

Um eine Zurücksetzen-Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut an, wie folgt:

```html
<input type="reset" value="Disabled" disabled />
```

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen; in JavaScript sieht das aus wie `btn.disabled = true` oder `btn.disabled = false`.

> [!NOTE]
> Weitere Ideen zum Aktivieren und Deaktivieren von Schaltflächen finden Sie auf der Seite [`<input type="button">`](/de/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button).

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Die oben genannten einfachen Beispiele sind bereits enthalten. Es gibt eigentlich nichts Weiteres zur Funktionsweise von Zurücksetzen-Schaltflächen zu sagen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der als Schaltflächenbeschriftung verwendet wird</td>
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
      <td><strong>Methode</strong></td>
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
