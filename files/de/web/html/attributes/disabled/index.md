---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}

Das boolesche **`disabled`**-Attribut, wenn es vorhanden ist, macht das Element nicht veränderbar, fokussierbar oder auch nicht mit dem Formular zusammen übermittelbar. Der Benutzer kann weder das Steuerelement bearbeiten noch fokussieren, noch seine darunterliegenden Formularsteuerelemente.

{{EmbedInteractiveExample("pages/tabbed/attribute-disabled.html", "tabbed-standard")}}

## Übersicht

Wenn das `disabled`-Attribut auf einem Formularsteuerelement angegeben ist, nehmen dieses Element und seine darunterliegenden Formularsteuerelemente nicht an der Einschränkungsvalidierung teil. Oft werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse, wie Mausklicks oder Fokus-bezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses boolesche disabled-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen darunterliegenden Steuerelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, übernimmt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel `fieldset`; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt und das Steuerelement selbst das Attribut nicht hat, dann ist das Steuerelement aktiviert. Wenn es auf einem {{ HTMLElement("optgroup") }} deklariert wird, bleibt das select interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle darunterliegenden Formularsteuerelemente deaktiviert, mit Ausnahme von Formularsteuerelementen innerhalb des {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut angewendet hat, gilt auch die {{cssxref(":disabled")}}-Pseudoklasse. Umgekehrt entsprechen Elemente, die das `disabled`-Attribut unterstützen, aber das Attribut nicht gesetzt haben, der {{cssxref(":enabled")}}-Pseudoklasse.

Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button immer noch durch ein umgebendes Element deaktiviert werden, zum Beispiel ein {{htmlelement('fieldset')}}; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt, ist der Button aktiviert.

Firefox wird, anders als andere Browser, den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut, um diese Funktion zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Attributes/readonly) ist, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert werden.

Da ein deaktiviertes Feld nicht geändert werden kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingaben mit angegebenem `disabled`-Attribut. Zusätzlich haben die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert ist.

> [!NOTE]
> Das `required`-Attribut ist nicht auf Eingaben mit angegebenem `disabled`-Attribut zulässig.

### Gebrauchstauglichkeit

Browser zeigen deaktivierte Formularsteuerelemente ausgegraut an, da deaktivierte Formularsteuerelemente unveränderlich sind, keinen Fokus erhalten oder andere Browsing-Ereignisse, wie Mausklicks oder Fokus-bezogene Ereignisse, und nicht mit dem Formular übermittelt werden.

Wenn es auf unterstützenden Elementen vorhanden ist, passt die {{cssxref(':disabled')}}-Pseudoklasse. Wenn das Attribut nicht enthalten ist, entspricht die {{cssxref(':enabled')}}-Pseudoklasse. Wenn das Element das disabled-Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich dessen, dass es nicht durch die `:disabled` und `:enabled` Pseudoklassen gekennzeichnet wird.

### Einschränkungsvalidierung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und nicht vom Benutzer aktualisiert werden, und es nimmt nicht an der Einschränkungsvalidierung teil.

## Beispiele

Wenn Formularsteuerelemente deaktiviert sind, werden sie von vielen Browsern standardmäßig in einer helleren, ausgegrauten Farbe angezeigt. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, einen Radiobutton, eine {{ HTMLElement("option") }} und eine {{ HTMLElement("optgroup") }}, sowie einige Formularsteuerelemente, die über das `disabled`-Attribut auf dem übergeordneten `{{ HTMLElement("fieldset")}}`-Element deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut zu diesem Element statt zu seinen Nachkommen hinzufügen.

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
