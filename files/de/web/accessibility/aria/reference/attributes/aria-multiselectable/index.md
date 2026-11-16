---
title: "ARIA: Attribut aria-multiselectable"
short-title: aria-multiselectable
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-multiselectable` gibt an, dass Benutzer mehr als ein Element aus den aktuell auswählbaren Nachfahren auswählen können.

## Beschreibung

Bei Auswahllisten wie {{HTMLElement('select')}} kann standardmäßig nur ein Element oder eine Option ausgewählt werden. Wenn Benutzern eine Liste zur Auswahl angezeigt wird, gehen sie daher in der Regel davon aus, dass sie nur ein Element auswählen können, sofern sie nicht anders informiert werden. Mit dem Attribut `aria-multiselectable` können Sie Benutzer von assistiven Technologien darüber informieren, dass sie bei Bedarf mehr als eines der aktuell auswählbaren Elemente auswählen können. Listen und Baumstrukturen sind Beispiele für Rollen, bei denen die gleichzeitige Auswahl mehrerer Elemente möglich sein kann.

> [!NOTE]
> Wenn Sie eine Mehrfachauswahl ermöglichen, informieren Sie die Benutzer darüber und erklären Sie, wie sie mehrere Werte auswählen können, beispielsweise: „Um mehr als einen Wert auszuwählen, halten Sie während der Auswahl die Strg-Taste gedrückt.“

### Verwendung mit `aria-selected`

Wenn ein Benutzer ein oder mehrere Elemente auswählt, setzen Sie für die ausgewählten Nachfahren [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) und für auswählbare, aber nicht ausgewählte Nachfahren `aria-selected="false"`. Ist ein Element nicht auswählbar, lassen Sie das Attribut `aria-selected` vollständig weg: Bereits seine Anwesenheit signalisiert, dass das Element auswählbar ist.

Wenn eine Baumstruktur, ein Raster, eine Tab-Liste oder ein Listenfeld die Auswahl mehrerer Knoten unterstützt, setzen Sie `aria-multiselectable` für das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) auf `true`. Andernfalls wird `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` gilt implizit.

## Werte

- `true`
  - : Im Widget kann mehr als ein Element gleichzeitig ausgewählt werden.
- `false`
  - : Es kann nur ein Element ausgewählt werden.

## Zugehörige Schnittstellen

- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Die Eigenschaft [`ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-multiselectable` wider.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Die Eigenschaft [`ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-multiselectable` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Wird an folgende Rollen vererbt:

- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Beispiel

```html
<p id="colorOptions">Choose the colors for your flag.</p>
<ul
  tabindex="0"
  role="listbox"
  aria-labelledby="colorOptions"
  aria-multiselectable="true">
  <li id="red" role="option" aria-selected="false">Red</li>
  <li id="orange" role="option" aria-selected="false">Orange</li>
  <li id="yellow" role="option" aria-selected="false">Yellow</li>
  <li id="green" role="option" aria-selected="false">Green</li>
  <li id="blue" role="option" aria-selected="false">Blue</li>
  <li id="purple" role="option" aria-selected="false">Purple</li>
  <li id="magenta" role="option" aria-selected="false">Hot pink</li>
  <li id="lightpink" role="option" aria-selected="true">Light pink</li>
  <li id="white" role="option" aria-selected="true">White</li>
  <li id="lightblue" role="option" aria-selected="true">Light blue</li>
  <li id="black" role="option" aria-selected="false">Black</li>
  <li id="brown" role="option" aria-selected="false">Brown</li>
</ul>
```

Dieses Listenfeld unterstützt die Mehrfachauswahl. Deshalb setzen wir für das Element mit der Rolle `listbox` das Attribut `aria-multiselectable="true"`. Bei allen ausgewählten Optionen ist `aria-selected` auf `true` gesetzt. Bei allen nicht ausgewählten, aber auswählbaren Optionen ist `aria-selected` auf `false` gesetzt. Hätten wir deaktivierte oder anderweitig nicht auswählbare Optionen aufgenommen, hätten wir das Attribut `aria-selected` bei diesen vollständig weggelassen. Das Attribut signalisiert Benutzern assistiver Technologien, dass das Element auswählbar ist – selbst wenn es keinen Wert hat oder ausdrücklich auf `false` gesetzt ist.

Die erste Regel für den Einsatz von ARIA lautet: „Wenn Sie eine native Funktion verwenden können, die bereits die benötigte Semantik und das benötigte Verhalten bietet, statt ein Element für einen anderen Zweck zu verwenden und es durch **Hinzufügen** einer ARIA-Rolle, eines ARIA-Zustands oder einer ARIA-Eigenschaft zugänglich zu machen, dann verwenden Sie die native Funktion.“ Statt eine ungeordnete Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), ARIA und JavaScript benötigt, um Text in auswählbare Optionen umzuwandeln, hätten wir ein natives Element für die Mehrfachauswahl verwenden können: Das Element {{htmlelement('select')}} verfügt über das boolesche Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple). Ist es vorhanden, können Benutzer mehrere Optionen auswählen. Andernfalls kann nur eine Option ausgewählt werden.

```html
<label for="flagcolors"> Choose the colors for your flag. </label>
<select multiple id="flagcolors">
  <option value="red">Red</option>
  <option value="orange">Orange</option>
  <option value="yellow">Yellow</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="purple">Purple</option>
  <option value="magenta">Hot pink</option>
  <option value="lightpink" selected>Light pink</option>
  <option value="white" selected>White</option>
  <option value="lightblue" selected>Light blue</option>
  <option value="black">Black</option>
  <option value="brown">Brown</option>
</select>
```

Diese HTML-Version mit `<select>` ist zugänglich und interaktiv und benötigt weder ARIA noch JavaScript, um zu funktionieren.

Falls sich das obige Beispiel nicht nach Ihren Wünschen gestalten lässt, können Sie auch mit HTML-Checkboxen eine Liste auswählbarer Optionen erstellen. Diese ist ebenfalls semantisch, fokussierbar und lässt sich mit CSS nahezu beliebig gestalten:

```html
<fieldset>
  <legend>Choose the colors for your flag.</legend>
  <ul>
    <li>
      <label><input type="checkbox" name="fc" value="red" />Red</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="orange" />Orange</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="yellow" />Yellow</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="green" />Green</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="blue" />Blue</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="purple" />Purple</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="magenta" />Hot pink</label>
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="lightpink" checked />Light
        pink</label
      >
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="white" checked />White</label
      >
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="lightblue" checked />Light
        blue</label
      >
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="black" />Black</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="brown" />Brown</label>
    </li>
  </ul>
</fieldset>
```

Verwenden Sie statt `aria-selected="true"` das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked). Den Rest übernimmt der Browser.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Element {{HTMLElement('select')}}
- HTML-Element {{HTMLElement('option')}}
- HTML-Element {{HTMLElement('input')}}
- Attribut [multiple](/de/docs/Web/HTML/Reference/Attributes/multiple)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
