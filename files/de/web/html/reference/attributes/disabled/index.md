---
title: "`disabled` HTML-Attribut"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

Das Boolean-Attribut **`disabled`**, wenn vorhanden, macht das Element nicht veränderbar, fokussierbar oder zusammen mit dem Formular übermittelbar. Der Benutzer kann das Steuerelement oder dessen nachgeordnete Formularsteuerelemente weder bearbeiten noch darauf fokussieren.

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

Wenn das `disabled`-Attribut auf einem Formularsteuerelement angegeben ist, nehmen das Element und seine nachgeordneten Formularsteuerelemente nicht an der Einschränkungsvalidierung teil. Oftmals werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse wie Mausklicks oder Fokus-bezogene Ereignisse.

Das `disabled`-Attribut wird von den Elementen {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses Boolean-Attribut `disabled` zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen nachgeordneten Steuerelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, z. B. `fieldset`; wenn kein umgebendes Element mit dem Attribut `disabled` festgelegt ist und das Steuerelement selbst das Attribut nicht hat, ist das Steuerelement aktiviert. Wird das Attribut auf einer {{ HTMLElement("optgroup") }} erklärt, bleibt das Select interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind die nachgeordneten Formularsteuerelemente alle deaktiviert, mit Ausnahme von Formularsteuerelementen innerhalb der {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut angewendet hat, gilt auch die {{cssxref(":disabled")}}-Pseudo-Klasse. Im Gegensatz dazu passen Elemente, die das `disabled`-Attribut unterstützen, aber nicht gesetzt haben, zur {{cssxref(":enabled")}}-Pseudo-Klasse.

Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button dennoch von einem umgebenden Element, z. B. {{htmlelement('fieldset')}} deaktiviert werden. Wenn kein umgebendes Element mit dem `disabled`-Attribut gesetzt ist, dann ist der Button aktiviert.

Firefox wird den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} im Gegensatz zu anderen Browsern über Seitenladungen hinaus beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut, um diese Funktion zu kontrollieren.

### Attributinteraktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert sind.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Wirkung auf Eingaben, bei denen auch das `disabled`-Attribut angegeben ist. Darüber hinaus haben die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), keine Wirkung, solange das Steuerelement deaktiviert ist.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit festgelegtem `disabled`-Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularsteuerelemente standardmäßig ausgegraut an, da diese unveränderlich sind, keinen Fokus erhalten oder Browsing-Ereignisse wie Mausklicks oder fokusbezogene Ereignisse empfangen und nicht mit dem Formular übermittelt werden.

Wenn die unterstützenden Elemente vorhanden sind, passt die {{cssxref(':disabled')}}-Pseudo-Klasse. Wenn das Attribut nicht enthalten ist, passt die {{cssxref(':enabled')}}-Pseudo-Klasse. Wenn das Element das `disabled`-Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich der Tatsache, dass es nicht von den `:disabled`- und `:enabled`-Pseudo-Klassen erfasst wird.

### Einschränkungsvalidierung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und nicht vom Benutzer aktualisiert werden und nimmt nicht an der Einschränkungsvalidierung teil.

## Beispiele

Wenn Formularsteuerelemente deaktiviert sind, zeigen viele Browser sie standardmäßig in einem helleren, ausgegrauten Farbton an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, einen Optionsschalter, ein {{ HTMLElement("option") }} und ein {{ HTMLElement("optgroup") }}, sowie einige Formularsteuerelemente, die über das deaktivierte Attribut des übergeordneten `{{ HTMLElement("fieldset")}}`-Elements deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut zu diesem Element anstatt zu seinen Nachfolgern hinzufügen.

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
