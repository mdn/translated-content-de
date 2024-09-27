---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}

Das boolesche **`disabled`**-Attribut, wenn vorhanden, macht das Element unveränderbar, nicht fokussierbar und verhindert dessen Übermittlung mit dem Formular. Der Benutzer kann das Steuerelement oder seine untergeordneten Steuerelemente nicht bearbeiten oder darauf fokussieren.

{{EmbedInteractiveExample("pages/tabbed/attribute-disabled.html", "tabbed-standard")}}

## Übersicht

Wenn das `disabled`-Attribut auf einem Formularelement angegeben ist, nehmen das Element und seine untergeordneten Steuerelemente nicht an der Eingabekontrolle teil. Häufig blenden Browser solche Steuerelemente aus und sie empfangen keine Browsing-Ereignisse, wie Mausklicks oder Fokus-bezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses boolesche disabled-Attribut gibt an, dass der Benutzer nicht mit dem Steuerelement oder seinen untergeordneten Steuerelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung von dem enthaltenen Element, zum Beispiel `fieldset`; gibt es kein enthaltendes Element mit gesetztem `disabled`-Attribut und besitzt das Steuerelement selbst nicht das Attribut, ist das Steuerelement aktiviert. Wenn es auf einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das Select-Element interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle darin enthaltenen Formularelemente deaktiviert, mit Ausnahme der Formularelemente innerhalb der {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut angewendet hat, gilt auch die {{cssxref(":disabled")}} Pseudoklasse für dieses. Umgekehrt entsprechen Elemente, die das `disabled`-Attribut unterstützen, aber nicht das Attribut gesetzt haben, der {{cssxref(":enabled")}} Pseudoklasse.

Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button immer noch von einem enthaltenen Element, zum Beispiel {{htmlelement('fieldset')}}, deaktiviert werden; gibt es kein enthaltendes Element mit gesetztem `disabled`-Attribut, ist der Button aktiviert.

Firefox wird, im Gegensatz zu anderen Browsern, den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut, um dieses Merkmal zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Attributes/readonly) besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente fungieren, bis sie aktiviert sind.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkungen auf Eingaben, bei denen das `disabled`-Attribut ebenfalls angegeben ist. Da die Elemente unveränderlich werden, haben die meisten anderen Attribute, wie zum Beispiel [`pattern`](/de/docs/Web/HTML/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert ist.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit angegebenem `disabled`-Attribut nicht gestattet.

### Benutzerfreundlichkeit

Browser stellen deaktivierte Formularelemente in grauer, abgeschwächter Darstellung dar, da deaktivierte Formularelemente unveränderlich sind, keinen Fokus erhalten oder Browsing-Ereignisse wie Mausklicks oder Fokus-bezogene Ereignisse empfangen und nicht mit dem Formular übermittelt werden.

Wenn es auf unterstützenden Elementen vorhanden ist, wird die {{cssxref(':disabled')}}-Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':enabled')}}-Pseudoklasse übereinstimmen. Wenn das Element das disabled-Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich der Nichterfassung durch die Pseudoklassen `:disabled` und `:enabled`.

### Eingabekontrolle

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und nicht vom Benutzer aktualisiert werden und nimmt nicht an der Eingabekontrolle teil.

## Beispiele

Wenn Formularelemente deaktiviert sind, stellen viele Browser sie standardmäßig in einer helleren, ausgegrauten Farbe dar. Hier sind Beispiele für eine deaktivierte Checkbox, Radiobutton, {{ HTMLElement("option") }} und {{ HTMLElement("optgroup") }}, sowie einige Formularelemente, die über das disabled-Attribut auf dem übergeordneten `{{ HTMLElement("fieldset")}}`-Element deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir könnten das gesamte {{ HTMLElement("select") }}element deaktivieren, indem wir das Attribut diesem Element hinzufügen, anstatt seinen untergeordneten Elementen.

```html
<fieldset>
  <legend>Checkboxes</legend>
  <p>
    <label>
      <input type="checkbox" name="chbox" value="regular" /> Regular
    </label>
  </p>
  <p>
    <label>
      <input type="checkbox" name="chbox" value="disabled" disabled /> disabled
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
