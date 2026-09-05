---
title: "`disabled` HTML-Attribut"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das boolesche **`disabled`** Attribut macht, wenn vorhanden, das Element unveränderbar, nicht fokussierbar und es wird nicht mit dem Formular abgesendet. Der Benutzer kann das Steuerelement oder seine Formularelement-Nachfahren weder bearbeiten noch fokussieren.

{{InteractiveExample("HTML Demo: disabled", "tabbed-standard")}}

```html interactive-example
<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employed:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">Employment Date:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">Resume:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
```

## Übersicht

Wenn das `disabled` Attribut bei einem Formularelement angegeben ist, nehmen das Element und seine Formularelement-Nachfahren nicht an der Einschränkungsvalidierung teil. Oftmals werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Navigationsereignisse, wie Mausklicks oder Fokus-verwandte Ereignisse.

Das `disabled` Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses boolesche deaktivierte Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen Nachfahren interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel `fieldset`; wenn es kein umgebendes Element mit dem gesetzten `disabled` Attribut gibt und das Steuerelement selbst das Attribut nicht hat, ist das Steuerelement aktiviert. Wenn es bei einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das select interaktiv (es sei denn, es ist anderweitig deaktiviert), jedoch sind keine der Elemente in der Optionsgruppe auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle nachfolgenden Formularelemente deaktiviert, mit Ausnahme der Formularelemente innerhalb der {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled` Attribut angewendet hat, trifft die {{cssxref(":disabled")}} Pseudo-Klasse auch zu. Umgekehrt passen Elemente, die das `disabled` Attribut unterstützen, aber das Attribut nicht gesetzt haben, zur {{cssxref(":enabled")}} Pseudo-Klasse.

Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button trotzdem von einem umgebenden Element deaktiviert werden, zum Beispiel {{htmlelement('fieldset')}}; wenn es kein umgebendes Element mit dem gesetzten `disabled` Attribut gibt, ist der Button aktiviert.

Firefox wird, im Gegensatz zu anderen Browsern, den dynamischen deaktivierten Status eines {{htmlelement('button')}} über Seitenladevorgänge hinweg behalten. Nutzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) Attribut, um dieses Feature zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente fungieren, bis sie aktiviert werden.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Auswirkungen auf Eingaben mit ebenfalls angegebenem `disabled` Attribut. Zusätzlich haben, da die Elemente unveränderbar werden, die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), keine Auswirkungen, bis das Steuerelement aktiviert wird.

> [!NOTE]
> Das `required` Attribut ist bei Eingaben mit dem angegebenen `disabled` Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularelemente ausgegraut an, da deaktivierte Formularelemente unveränderbar sind, keinen Fokus oder irgendwelche Navigationsevents, wie Mausklicks oder Fokus-verwandte, erhalten und nicht mit dem Formular übermittelt werden.

Wenn es bei unterstützenden Elementen vorhanden ist, passt die {{cssxref(':disabled')}} Pseudo-Klasse. Wenn das Attribut nicht enthalten ist, passt die {{cssxref(':enabled')}} Pseudo-Klasse. Wenn das Element das disabled Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich der Tatsache, dass es nicht dazu führt, dass es von den `:disabled` und `:enabled` Pseudo-Klassen gematcht wird.

### Einschränkungsvalidierung

Wenn das Element `disabled` ist, dann kann der Wert des Elements keinen Fokus erhalten und nicht vom Benutzer aktualisiert werden und nimmt nicht an der Einschränkungsvalidierung teil.

## Beispiele

Wenn Formularelemente deaktiviert sind, zeigen viele Browser sie standardmäßig in einer helleren, ausgegrauten Farbe an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, einen Radio-Button, eine {{ HTMLElement("option") }} und eine {{ HTMLElement("optgroup") }}, sowie einige Formularelemente, die durch das gesetzte disabled Attribut beim übergeordneten `{{ HTMLElement("fieldset")}}` Element deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst ist es nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut diesem Element anstatt seinen Nachfahren hinzufügen.

```html
<fieldset>
  <legend>Checkboxes</legend>
  <p>
    <label>
      <input type="checkbox" name="ch-box" value="regular" /> Regular
    </label>
  </p>
  <p>
    <label>
      <input type="checkbox" name="ch-box" value="disabled" disabled /> disabled
    </label>
  </p>
</fieldset>

<fieldset>
  <legend>Radio buttons</legend>
  <p>
    <label> <input type="radio" name="radio" value="regular" /> Regular </label>
  </p>
  <p>
    <label>
      <input type="radio" name="radio" value="disabled" disabled /> disabled
    </label>
  </p>
</fieldset>

<p>
  <label
    >Select an option:
    <select>
      <optgroup label="Group 1">
        <option>Option 1.1</option>
      </optgroup>
      <optgroup label="Group 2">
        <option>Option 2.1</option>
        <option disabled>Option 2.2</option>
        <option>Option 2.3</option>
      </optgroup>
      <optgroup label="Group 3" disabled>
        <option>Disabled 3.1</option>
        <option>Disabled 3.2</option>
        <option>Disabled 3.3</option>
      </optgroup>
    </select>
  </label>
</p>

<fieldset disabled>
  <legend>Disabled fieldset</legend>
  <p>
    <label>
      Name: <input type="radio" name="radio" value="regular" /> Regular
    </label>
  </p>
  <p>
    <label>Number: <input type="number" /></label>
  </p>
</fieldset>
```

{{EmbedLiveSample('Beispiele', 500, 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(':disabled')}} und {{cssxref(':enabled')}}
