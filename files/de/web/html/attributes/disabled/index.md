---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}

Das Boolean-Attribut **`disabled`** macht das Element, wenn es vorhanden ist, nicht veränderbar, fokussierbar oder mit dem Formular übermittelbar. Der Benutzer kann weder den Inhalt bearbeiten noch das Steuerelement oder seine Nachfahren im Formular fokussieren.

{{EmbedInteractiveExample("pages/tabbed/attribute-disabled.html", "tabbed-standard")}}

## Überblick

Wenn das `disabled`-Attribut bei einem Formularelement angegeben wird, nehmen das Element und seine Nachfahren nicht an der Gültigkeitsprüfung teil. Oftmals werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse wie Maus-Klicks oder Fokus-bezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input") }} unterstützt.

Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Steuerelement oder seinen Nachfahren interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom enthaltenen Element, zum Beispiel `fieldset`; gibt es kein enthaltenes Element mit gesetztem `disabled`-Attribut und das Steuerelement hat das Attribut selbst nicht, dann ist das Steuerelement aktiviert. Wenn es auf einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das select interaktiv (es sei denn, es ist anderweitig deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle nachfolgenden Formularelemente deaktiviert, mit Ausnahme von Formularsteuerelementen innerhalb des {{ HTMLElement("legend") }}.

Wenn ein unterstützendes Element das `disabled`-Attribut besitzt, gilt auch die {{cssxref(":disabled")}}-Pseudoklasse dafür. Umgekehrt passen Elemente, die das `disabled`-Attribut unterstützen, aber nicht gesetzt haben, zur {{cssxref(":enabled")}}-Pseudoklasse.

Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wenn dieses Attribut nicht gesetzt ist, kann der Button dennoch durch ein enthaltendes Element, zum Beispiel {{htmlelement('fieldset')}}, deaktiviert werden; gibt es kein enthaltendes Element mit gesetztem `disabled`-Attribut, dann ist der Button aktiviert.

Anders als andere Browser wird Firefox den dynamischen Deaktivierungszustand eines {{htmlelement('button')}} beim Neuladen der Seite beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut, um dieses Verhalten zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Attributes/readonly) ist, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten und nicht mit dem Formular übermittelt werden und im Allgemeinen nicht funktionieren, bis sie aktiviert sind.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingaben, bei denen auch das `disabled`-Attribut angegeben ist. Da die Elemente unveränderlich sind, haben auch die meisten anderen Attribute, wie zum Beispiel [`pattern`](/de/docs/Web/HTML/Attributes/pattern), bis zur Aktivierung des Steuerelements keine Wirkung.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit angegebenem `disabled`-Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularelemente ausgegraut an, da deaktivierte Formularelemente unveränderlich sind, keinen Fokus oder irgendwelche Browsing-Ereignisse wie Maus-Klicks oder Fokus-bezogene Ereignisse erhalten und nicht mit dem Formular übermittelt werden.

Wenn es bei unterstützten Elementen vorhanden ist, passt die {{cssxref(':disabled')}}-Pseudoklasse. Wenn das Attribut nicht enthalten ist, passt die {{cssxref(':enabled')}}-Pseudoklasse. Wenn das Element das disabled-Attribut nicht unterstützt, hat das Attribut keine Wirkung, einschließlich der Nichtübereinstimmung mit den `:disabled` und `:enabled` Pseudoklassen.

### Gültigkeitsprüfung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus erhalten und kann vom Benutzer nicht aktualisiert werden und nimmt nicht an der Gültigkeitsprüfung teil.

## Beispiele

Wenn Formularelemente deaktiviert sind, stellen viele Browser sie standardmäßig in einer helleren, ausgegrauten Farbe dar. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, ein Optionsfeld, ein {{ HTMLElement("option") }} und ein {{ HTMLElement("optgroup") }}, sowie einige Formularelemente, die über das deaktivierte Attribut des übergeordneten `{{ HTMLElement("fieldset") }}`-Elements deaktiviert sind. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut zu diesem Element anstelle seiner Nachfahren hinzufügen.

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
