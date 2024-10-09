---
title: "HTML-Attribut: disabled"
short-title: disabled
slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das Boolean-Attribut **`disabled`**, wenn es vorhanden ist, macht das Element nicht veränderbar, fokussierbar oder mit dem Formular einsendbar. Der Benutzer kann den Steuerelementen und deren untergeordneten Formularsteuerelementen weder bearbeiten noch den Fokus setzen.

{{EmbedInteractiveExample("pages/tabbed/attribute-disabled.html", "tabbed-standard")}}

## Übersicht

Wenn das `disabled`-Attribut bei einem Formularsteuerelement angegeben ist, nehmen das Element und seine untergeordneten Formularsteuerelemente nicht an der Zwangsvalidierung teil. Oftmals werden solche Steuerelemente von Browsern ausgegraut und erhalten keine Browsing-Ereignisse, wie z. B. Mausklicks oder fokusbezogene Ereignisse.

Das `disabled`-Attribut wird von {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }} und {{ HTMLElement("input")}} unterstützt.

Dieses Boolean-Attribut indicates dass der Benutzer nicht mit dem Steuerelement oder dessen untergeordneten Steuerelementen interagieren kann. Wenn dieses Attribut nicht angegeben ist, erbt das Steuerelement seine Einstellung vom umgebenden Element, zum Beispiel `fieldset`; wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt und das Steuerelement selbst das Attribut nicht hat, ist das Steuerelement aktiviert. Wenn es bei einem {{ HTMLElement("optgroup") }} deklariert ist, bleibt das select dennoch interaktiv (sofern nicht anders deaktiviert), aber keines der Elemente in der Optionsgruppe ist auswählbar.

> [!NOTE]
> Wenn ein {{ HTMLElement("fieldset") }} deaktiviert ist, sind alle untergeordneten Formularsteuerelemente deaktiviert, mit Ausnahme von Formularsteuerelementen innerhalb des {{ HTMLElement("legend") }}.

Wenn auf ein unterstützendes Element das `disabled`-Attribut angewandt wird, gilt auch die {{cssxref(":disabled")}}-Pseudoklasse. Umgekehrt entsprechen Elemente, die das `disabled`-Attribut unterstützen, aber das Attribut nicht gesetzt haben, der {{cssxref(":enabled")}}-Pseudoklasse.

Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert. Wird dieses Attribut nicht gesetzt, kann der Button dennoch durch ein umgebendes Element, zum Beispiel {{htmlelement('fieldset')}}; deaktiviert werden. Wenn es kein umgebendes Element mit gesetztem `disabled`-Attribut gibt, ist der Button aktiviert.

Anders als andere Browser wird Firefox den dynamischen deaktivierten Zustand eines {{htmlelement('button')}} über Seitenladevorgänge hinweg beibehalten. Verwenden Sie das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut, um diese Funktion zu steuern.

### Attribut-Interaktionen

Der Unterschied zwischen `disabled` und [`readonly`](/de/docs/Web/HTML/Attributes/readonly) besteht darin, dass schreibgeschützte Steuerelemente weiterhin funktionieren und fokussierbar sind, während deaktivierte Steuerelemente keinen Fokus erhalten können und nicht mit dem Formular eingereicht werden und generell nicht als Steuerelemente funktionieren, bis sie aktiviert sind.

Da ein deaktiviertes Feld seinen Wert nicht ändern kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkungen auf Eingaben, bei denen auch das `disabled`-Attribut angegeben ist. Da die Elemente unveränderlich werden, haben die meisten anderen Attribute, wie [`pattern`](/de/docs/Web/HTML/Attributes/pattern), keine Wirkung, bis das Steuerelement aktiviert wird.

> [!NOTE]
> Das `required`-Attribut ist bei Eingaben mit angegebenem `disabled`-Attribut nicht zulässig.

### Benutzerfreundlichkeit

Browser zeigen deaktivierte Formularsteuerelemente ausgegraut an, da deaktivierte Formularsteuerelemente unveränderlich sind, keinen Fokus oder Browsing-Ereignisse wie Mausklicks oder fokusbezogene Ereignisse erhalten und nicht mit dem Formular einsendbar sind.

Wenn es bei unterstützenden Elementen vorhanden ist, wird die {{cssxref(':disabled')}}-Pseudoklasse übereinstimmen. Wenn das Attribut nicht enthalten ist, wird die {{cssxref(':enabled')}}-Pseudoklasse übereinstimmen. Wenn das Element das `disabled`-Attribut nicht unterstützt, wird das Attribut keine Wirkung haben, auch nicht dazu führen, dass es mit den `:disabled`- und `:enabled`-Pseudoklassen übereinstimmt.

### Zwangsvalidierung

Wenn das Element `disabled` ist, kann der Wert des Elements keinen Fokus empfangen und nicht vom Benutzer aktualisiert werden und nimmt nicht an der Zwangsvalidierung teil.

## Beispiele

Wenn Formularsteuerelemente deaktiviert sind, zeigen viele Browser sie standardmäßig in einem helleren, ausgegrauten Farbton an. Hier sind Beispiele für ein deaktiviertes Kontrollkästchen, Optionsfeld, {{ HTMLElement("option") }} und {{ HTMLElement("optgroup") }}, sowie einige Formularsteuerelemente, die über das `disabled`-Attribut im Vorgängerelement {{ HTMLElement("fieldset")}} deaktiviert wurden. Die {{ HTMLElement("option") }}s sind deaktiviert, aber das {{ HTMLElement("select") }} selbst nicht. Wir könnten das gesamte {{ HTMLElement("select") }} deaktivieren, indem wir das Attribut zu diesem Element anstelle seiner Nachkommen hinzufügen.

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
