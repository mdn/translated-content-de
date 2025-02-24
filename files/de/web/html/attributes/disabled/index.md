---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das boolesche **`disabled`**-Attribut macht, wenn es vorhanden ist, das Element nicht veränderbar, fokussierbar oder sogar mit dem Formular übermittelbar. Der Benutzer kann das Steuerelement oder dessen Formular-Nachkommene weder bearbeiten noch fokussieren.

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

Wenn das `disabled`-Attribut auf einem Formularsteuerelement angegeben ist, nehmen das Element und seine Formularsteuerelement-Nachkommene nicht an der Prüfungsvalidierung teil. Oftmals werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse, wie Maus-Klicks oder Fokussierungsereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input") }} unterstützt.

Dieses boolesche disabled-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen Nachkommen-Steuerelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel `fieldset`; wenn es kein umgebendes Element mit dem `disabled`-Attribut gibt und das Steuerelement selbst das Attribut nicht hat, ist das Steuerelement aktiviert. Wenn es auf einem {{ HTMLElement("optgroup") }} deklariert wird, bleibt das `select` interaktiv (sofern nicht anders deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind die nachfolgenden Formularsteuerelemente alle deaktiviert, mit Ausnahme von Formularsteuerelementen innerhalb des {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut hat, gilt die {{cssxref(":disabled")}} Pseudo-Klasse auch darauf. Umgekehrt entsprechen Elemente, die das `disabled`-Attribut unterstützen, aber das Attribut nicht gesetzt haben, der {{cssxref(":enabled")}} Pseudo-Klasse.

Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Knopf interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Knopf dennoch von einem umgebenden Element, zum Beispiel {{htmlelement('fieldset')}}, deaktiviert werden; wenn es kein umgebendes Element mit dem `disabled`-Attribut gibt, ist der Knopf aktiviert.

Firefox wird, anders als andere Browser, den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} über Seitenladungen hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut, um diese Funktion zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Attributes/readonly) besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten können und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht als Steuerelemente funktionieren, bis sie aktiviert sind.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `disabled`-Attribut. Da die Elemente unveränderlich werden, haben die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert ist.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit dem angegebenen `disabled`-Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularsteuerelemente ausgegraut an, da deaktivierte Formularsteuerelemente unveränderlich sind, keinen Fokus erhalten oder Browsing-Ereignisse wie Maus-Klicks oder Fokussierungsereignisse empfangen, und nicht mit dem Formular übermittelt werden.

Wenn es bei unterstützenden Elementen vorhanden ist, entspricht die {{cssxref(':disabled')}} Pseudo-Klasse. Wenn das Attribut nicht enthalten ist, entspricht die {{cssxref(':enabled')}} Pseudo-Klasse. Wenn das Element das disabled-Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich dass es nicht von den `:disabled` und `:enabled` Pseudo-Klassen erfasst wird.

### Prüfungsvalidierung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und nicht von dem Benutzer aktualisiert werden und nimmt nicht an der Prüfungsvalidierung teil.

## Beispiele

Wenn Formularsteuerelemente deaktiviert sind, werden sie von vielen Browsern standardmäßig in einer helleren, ausgegrauten Farbe angezeigt. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, ein Optionsfeld, eine {{ HTMLElement("option") }} und eine {{ HTMLElement("optgroup") }}, sowie einige Formularsteuerelemente, die über das deaktivierte Attribut am Vorfahren-Element `{{ HTMLElement("fieldset") }}` deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, die {{ HTMLElement("select") }} selbst jedoch nicht. Wir hätten das gesamte {{ HTMLElement("select") }} deaktivieren können, indem wir das Attribut zu diesem Element anstatt zu seinen Nachkommen hinzufügen.

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
