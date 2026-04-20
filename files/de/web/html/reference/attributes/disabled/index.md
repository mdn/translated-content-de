---
title: "`disabled` HTML-Attribut"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das Boolean-Attribut **`disabled`**, wenn es vorhanden ist, macht das Element nicht veränderbar, nicht fokussierbar und es wird auch nicht mit dem Formular übermittelt. Der Benutzer kann das Steuerelement oder dessen Nachfolger in Steuerungselementen weder bearbeiten noch fokussieren.

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

## Überblick

Wenn das `disabled`-Attribut auf einem Formularelement angegeben ist, nehmen dieses Element und seine nachfolgenden Steuerelemente nicht an der Einschränkungsüberprüfung teil. Oftmals blenden Browser solche Steuerelemente aus, und sie erhalten keine Browsereignisse wie Mausklicks oder fokusbezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses Boolean `disabled`-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen Nachfolger in Steuerungselementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umschließenden Element, zum Beispiel `fieldset`; wenn es kein umschließendes Element mit dem `disabled`-Attribut gibt und das Steuerelement selbst das Attribut nicht besitzt, dann ist das Steuerelement aktiviert. Wenn es auf einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das Select interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keine der Optionen in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle nachfolgenden Formularelemente deaktiviert, außer Formularsteuerelemente innerhalb des {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut hat, gilt auch die {{cssxref(":disabled")}} Pseudoklasse dafür. Im Gegensatz dazu entsprechen Elemente, die das `disabled`-Attribut unterstützen, aber es nicht gesetzt haben, der {{cssxref(":enabled")}} Pseudoklasse.

Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button immer noch von einem umschließenden Element, z.B. {{htmlelement('fieldset')}}, deaktiviert werden; wenn es kein umschließendes Element mit dem `disabled`-Attribut gibt, dann ist der Button aktiviert.

Firefox wird, im Gegensatz zu anderen Browsern, den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} über Seitenladungen hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut, um diese Funktion zu steuern.

### Attributinteraktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) ist, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert werden.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `disabled`-Attribut. Darüber hinaus haben die meisten anderen Attribute, wie z.B. [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert wird.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit festgelegtem `disabled`-Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularelemente grau aus, da deaktivierte Formularelemente unveränderbar sind, keinen Fokus erhalten und keine Browsereignisse wie Mausklicks oder Fokus-bezogene Ereignisse erhalten, und nicht mit dem Formular übermittelt werden.

Wenn es bei unterstützenden Elementen vorhanden ist, wird die {{cssxref(':disabled')}} Pseudoklasse zutreffen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':enabled')}} Pseudoklasse zutreffen. Wenn das Element das `disabled`-Attribut nicht unterstützt, wird das Attribut keine Wirkung haben, einschließlich nicht zur Übereinstimmung mit den Pseudoklassen `:disabled` und `:enabled` führen.

### Einschränkungsüberprüfung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und nicht vom Benutzer aktualisiert werden, und es nimmt nicht an der Einschränkungsüberprüfung teil.

## Beispiele

Wenn Formularelemente deaktiviert sind, zeigen viele Browser diese standardmäßig in einer helleren, ausgegrauten Farbe an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, eine Optionsschaltfläche, {{ HTMLElement("option") }} und {{ HTMLElement("optgroup") }}, sowie einige Formularelemente, die über das im Vorfahren `{{ HTMLElement("fieldset")}}`-Element festgelegte disabled-Attribut deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst ist nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut zu diesem Element statt zu seinen Nachfolgern hinzufügen.

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
