---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das Boolean-Attribut **`disabled`**, wenn vorhanden, macht das Element nicht veränderbar, fokussierbar oder sogar zur Übermittlung mit dem Formular geeignet. Der Benutzer kann weder das Steuerelement bearbeiten noch darauf fokussieren, noch seine Formularelement-Nachkommen bearbeiten.

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

Wenn das `disabled`-Attribut auf einem Formularelement angegeben ist, nehmen das Element und seine Formularelement-Nachkommen nicht an der Einschränkungsvalidierung teil. Oft blenden Browser solche Steuerelemente aus und sie erhalten keine Browsing-Ereignisse, wie Mausklicks oder Fokus-bezogene Ereignisse.

Das `disabled`-Attribut wird unterstützt von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}}.

Dieses Boolean-Attribut `disabled` zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen Nachkommenelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, beispielsweise `fieldset`; wenn es kein umgebendes Element mit dem `disabled`-Attribut gibt und das Steuerelement selbst das Attribut nicht hat, ist das Steuerelement aktiviert. Wenn es bei einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das Auswahlfeld interaktiv (es sei denn, es ist andersartig deaktiviert), aber kein Element der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle nachfolgenden Formularelemente deaktiviert, mit Ausnahme der Formularelemente innerhalb des {{ HTMLElement("legend") }}.

Wenn bei einem unterstützenden Element das `disabled`-Attribut angewendet wird, gilt auch die {{cssxref(":disabled")}}-Pseudoklasse für dieses Element. Umgekehrt entsprechen Elemente, die das `disabled`-Attribut unterstützen, aber bei denen es nicht gesetzt ist, der {{cssxref(":enabled")}}-Pseudoklasse.

Dieses Boolean-Attribut verhindert, dass der Benutzer mit der Schaltfläche interagiert. Wenn dieses Attribut nicht gesetzt ist, kann die Schaltfläche immer noch durch ein umgebendes Element, zum Beispiel {{htmlelement('fieldset')}}, deaktiviert werden; wenn es kein umgebendes Element mit dem `disabled`-Attribut gibt, dann ist die Schaltfläche aktiviert.

Anders als andere Browser wird Firefox den dynamischen deaktivierten Zustand einer {{ htmlelement('button')}} zwischen Seitenladungen beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut, um diese Funktion zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular abgeschickt werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert sind.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Auswirkungen auf Eingaben mit ebenfalls angegebenem `disabled`-Attribut. Außerdem, da die Elemente unveränderbar werden, haben die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert ist.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit angegebenem `disabled`-Attribut nicht erlaubt.

### Nutzbarkeit

Browser zeigen deaktivierte Formularelemente in ausgegrauter Form an, da deaktivierte Formularelemente unveränderbar sind, keinen Fokus oder Browsing-Ereignisse wie Mausklicks oder fokusbezogene Ereignisse erhalten und nicht mit dem Formular abgeschickt werden.

Wenn es bei unterstützenden Elementen vorhanden ist, wird die {{cssxref(':disabled')}}-Pseudo-Klasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':enabled')}}-Pseudo-Klasse übereinstimmen. Wenn das Element das `disabled`-Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich dass es nicht durch die `:disabled`- und `:enabled`-Pseudo-Klassen übereinstimmt.

### Einschränkungsvalidierung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und nicht vom Benutzer aktualisiert werden und nimmt nicht an der Einschränkungsvalidierung teil.

## Beispiele

Wenn Formularelemente deaktiviert sind, zeigen viele Browser sie standardmäßig in einer helleren, ausgegrauten Farbe an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, einen Radio-Button, {{ HTMLElement("option") }} und {{ HTMLElement("optgroup") }}, sowie einige Formularelemente, die durch das `disabled`-Attribut, das auf dem übergeordneten Element `{{ HTMLElement("fieldset")}}` gesetzt ist, deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst ist es nicht. Wir könnten die gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut an diesem Element anstelle seiner Nachkommen hinzufügen.

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
