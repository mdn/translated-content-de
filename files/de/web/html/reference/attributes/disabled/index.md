---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das boolesche Attribut **`disabled`**, wenn vorhanden, macht das Element nicht veränderbar, fokussierbar oder mit dem Formular abschickbar. Der Benutzer kann das Steuerelement und seine zugehörigen Formularsteuerelemente weder bearbeiten noch fokussieren.

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

Wenn das `disabled`-Attribut bei einem Formularsteuerelement angegeben ist, nehmen das Element und seine zugehörigen Formularsteuerelemente nicht an der Validierung von Einschränkungen teil. Oftmals werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse, wie Mausklicks oder fokusbezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses boolesche disabled-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen untergeordneten Steuerelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung von einem übergeordneten Element, zum Beispiel `fieldset`; wenn es kein übergeordnetes Element mit dem `disabled`-Attribut gibt und das Steuerelement selbst das Attribut nicht hat, ist das Steuerelement aktiviert. Wenn es auf einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das `select` trotzdem interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle nachfolgenden Formularsteuerelemente deaktiviert, mit der Ausnahme von Formularsteuerelementen innerhalb des {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut anwendet, gilt auch die {{cssxref(":disabled")}} Pseudoklasse dafür. Umgekehrt matchen Elemente, die das `disabled`-Attribut unterstützen, aber nicht gesetzt haben, die {{cssxref(":enabled")}} Pseudoklasse.

Dieses boolesche Attribut hindert den Benutzer daran, mit der Schaltfläche zu interagieren. Wenn dieses Attribut nicht gesetzt ist, kann die Schaltfläche weiterhin von einem übergeordneten Element, z.B. {{htmlelement('fieldset')}}, deaktiviert werden; wenn es kein übergeordnetes Element mit dem `disabled`-Attribut gibt, ist die Schaltfläche aktiviert.

Anders als andere Browser wird Firefox den dynamischen deaktivierten Status eines {{htmlelement('button')}} über Seitenladezyklen hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut, um diese Funktion zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) ist, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular abgeschickt werden und im Allgemeinen nicht als Steuerelemente fungieren, bis sie aktiviert werden.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keinen Einfluss auf Eingaben mit dem ebenfalls angegebenen `disabled`-Attribut. Da die Elemente unveränderlich werden, haben die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert wird.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben, die mit dem `disabled`-Attribut versehen sind, nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularsteuerelemente ausgegraut an, da deaktivierte Formularsteuerelemente unveränderlich sind, keinen Fokus oder Browsing-Ereignisse erhalten, wie Mausklicks oder fokusbezogene Ereignisse, und nicht mit dem Formular abgeschickt werden.

Wenn auf unterstützenden Elementen vorhanden, wird die {{cssxref(':disabled')}} Pseudoklasse passen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':enabled')}} Pseudoklasse passen. Wenn das Element das disabled-Attribut nicht unterstützt, hat das Attribut keine Wirkung und führt auch nicht dazu, dass es von den `:disabled`- und `:enabled`-Pseudoklassen gematcht wird.

### Validierungsbedingungen

Wenn das Element `disabled` ist, kann der Wert des Elements nicht fokussiert werden und nicht vom Benutzer aktualisiert werden und nimmt nicht an der Validierung von Bedingungen teil.

## Beispiele

Wenn Formularsteuerelemente deaktiviert sind, zeigen viele Browser sie standardmäßig in einer helleren, ausgegrauten Farbe an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, ein Optionsfeld, ein {{ HTMLElement("option") }} und ein {{ HTMLElement("optgroup") }}, sowie einige Formularsteuerelemente, die über das disabled-Attribut des übergeordneten `{{ HTMLElement("fieldset")}}`-Elements deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut anstatt seiner Nachfolger auf dieses Element anwenden.

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

{{EmbedLiveSample('Examples', 500, 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(':disabled')}} und {{cssxref(':enabled')}}
