---
title: "`disabled` HTML-Attribut"
short-title: disabled
slug: Web/HTML/Reference/Attributes/disabled
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Das Boolesche **`disabled`**-Attribut macht das Element, wenn vorhanden, nicht änderbar, fokussierbar oder sogar beim Formular abgesendet. Der Benutzer kann weder die Kontrolle noch ihre Form-Kontrolldeklarationen bearbeiten oder fokussieren.

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

Wenn das `disabled`-Attribut bei einem Formularelement angegeben ist, nehmen das Element und seine Form-Kontrolldeklarationen nicht an der Validierung der Einschränkungen teil. Oft deaktivieren Browser solche Elemente optisch und sie empfangen keine Browsing-Ereignisse wie Mausklicks oder Fokus-bezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses Boolesche `disabled`-Attribut zeigt an, dass der Benutzer nicht mit der Kontrolle oder ihren Nachfahren interagieren kann. Wenn dieses Attribut nicht spezifiziert ist, erbt die Kontrolle ihre Einstellung von dem umgebenden Element, zum Beispiel `fieldset`; gibt es kein umgebendes Element mit dem gesetzten `disabled`-Attribut und hat die Kontrolle selbst das Attribut nicht, dann ist die Kontrolle aktiviert. Wenn es in einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das Select interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keines der Elemente in der Optionsgruppe ist wählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle nachgeordneten Formularelemente außer den Formularelementen innerhalb der {{ HTMLElement("legend") }} deaktiviert.

Wenn ein unterstützendes Element das `disabled`-Attribut erhält, gilt auch die {{cssxref(":disabled")}} Pseudoklasse dafür. Umgekehrt erhalten Elemente, die das `disabled`-Attribut unterstützen, aber es nicht gesetzt haben, die {{cssxref(":enabled")}} Pseudoklasse.

Dieses Boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button immer noch von einem umgebenden Element wie {{htmlelement('fieldset')}} deaktiviert werden; gibt es kein umgebendes Element mit dem gesetzten `disabled`-Attribut, dann ist der Button aktiviert.

Firefox wird im Gegensatz zu anderen Browsern den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut, um dieses Feature zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) besteht darin, dass schreibgeschützte Elemente weiterhin funktionstüchtig und fokussierbar sind, wohingegen deaktivierte Elemente keinen Fokus erhalten und nicht mit dem Formular abgesendet werden und bis zur Aktivierung im Allgemeinen nicht als Kontrollen funktionieren.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keinen Effekt auf Eingaben mit ebenfalls gesetztem `disabled`-Attribut. Zusätzlich haben die meisten anderen Attribute wie [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) keinen Effekt, solange die Kontrolle deaktiviert ist.

> [!NOTE]
> Das `required`-Attribut darf nicht bei Eingaben verwendet werden, bei denen das `disabled`-Attribut gesetzt ist.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularelemente als ausgegraut an, da deaktivierte Formularelemente unveränderlich sind, keinen Fokus oder andere Browsing-Ereignisse wie Mausklicks oder Fokus-bezogene Ereignisse erhalten und nicht mit dem Formular abgesendet werden.

Wenn das `disabled`-Attribut bei unterstützenden Elementen vorhanden ist, wird die {{cssxref(':disabled')}} Pseudoklasse zugeordnet. Fehlt das Attribut, wird die {{cssxref(':enabled')}} Pseudoklasse zugeordnet. Wenn das Element das `disabled`-Attribut nicht unterstützt, hat das Attribut keinen Effekt, einschließlich einer Nicht-Zuordnung durch die Pseudoklassen `:disabled` und `:enabled`.

### Validierung der Einschränkungen

Wenn das Element `disabled` ist, kann der Wert des Elements nicht fokussiert oder vom Benutzer aktualisiert werden und nimmt nicht an der Validierung der Einschränkungen teil.

## Beispiele

Wenn Formularelemente deaktiviert sind, zeigen viele Browser sie standardmäßig in einer helleren, ausgegrauten Farbe an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, einen Auswahlknopf, eine {{ HTMLElement("option") }} und ein {{ HTMLElement("optgroup") }}, sowie einige Formularelemente, die über das gesetzte disabled-Attribut auf dem übergeordneten `{{ HTMLElement("fieldset")}}`-Element deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir hätten das gesamte {{ HTMLElement("select") }} deaktivieren können, indem wir das Attribut zu diesem Element anstatt zu seinen Nachkommen hinzufügen.

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
