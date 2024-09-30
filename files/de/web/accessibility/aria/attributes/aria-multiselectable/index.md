---
title: aria-multiselectable
slug: Web/Accessibility/ARIA/Attributes/aria-multiselectable
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-multiselectable` Attribut zeigt an, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.

## Beschreibung

Das Standardverhalten von Auswahllisten, wie z.B. {{HTMLElement('select')}}, besteht darin, nur ein Element oder eine Option auswählen zu können. Standardmäßig oder aus Konvention heraus wird angenommen, dass ein Benutzer nur ein einziges Element auswählen kann, sofern nicht anders mitgeteilt. Das `aria-multiselectable` Attribut dient dazu, Benutzer von unterstützenden Technologien darüber zu informieren, dass sie mehr als ein Element aus den aktuell auswählbaren Elementen wählen können, wenn sie möchten. Listen und Bäume sind Beispiele für Rollen, die es Benutzern ermöglichen könnten, mehr als ein Element gleichzeitig auszuwählen.

> [!NOTE]
> Wenn Sie Mehrfachauswahlen zulassen, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie man mehrere Werte auswählt, z. B. "Um mehr als einen Wert auszuwählen, halten Sie die Strg-Taste während der Auswahl gedrückt."

### Verwendet mit `aria-selected`

Wenn der Benutzer ein oder mehrere Elemente auswählt, denken Sie daran, die ausgewählten Nachkommen mit [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) als ausgewählt zu markieren, und bei auswählbaren Nachkommen, die nicht ausgewählt sind, `aria-selected="false"` zu setzen. Wenn ein Element nicht auswählbar ist, weglassen Sie das `aria-selected` Attribut vollständig, da seine Anwesenheit dem Benutzer anzeigt, dass das Element auswählbar ist.

Wenn ein Baum, Raster, Tab-Liste oder eine Listbox die Auswahl von mehr als einem Knoten unterstützt, hat das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) `aria-multiselectable` auf `true` gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert von `false` ist impliziert.

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

Diese Listbox unterstützt Mehrfachauswahl, daher setzen wir das Element mit der Rolle `listbox` auf `aria-multiselectable="true"`. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle Optionen, die nicht ausgewählt, aber auswählbar sind, haben `aria-selected` auf `false` gesetzt. Hätten wir Optionen eingeschlossen, die deaktiviert oder anderweitig nicht auswählbar sind, hätten wir das `aria-selected` Attribut vollständig weggelassen. Die Aufnahme des Attributs, selbst ohne Wert oder explizit auf `false` gesetzt, zeigt Benutzern unterstützender Technologien an, dass das Element auswählbar ist.

Die erste Regel der Nutzung von ARIA ist "wenn Sie eine native Funktion mit den bereits eingebauten Semantiken und Verhaltensweisen nutzen können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, Zustand oder Eigenschaft hinzuzufügen, um es barrierefrei zu machen, dann tun Sie das." Statt eine ungeordnete Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex), ARIA und JavaScript erfordert, um Text in auswählbare Optionen zu verwandeln, hätten wir ein natives Multiselect verwenden können: das {{htmlelement('select')}} Element hat ein Boolean-Attribut [`multiple`](/de/docs/Web/HTML/Element/select#multiple). Wenn enthalten, kann der Benutzer mehrere Optionen auswählen. Wenn nicht, kann nur eine einzelne Option ausgewählt werden.

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

Diese HTML `<select>` Version ist zugänglich und interaktiv und benötigt keine ARIA oder JavaScript, um zu funktionieren.

Wenn Ihnen das oben nicht stilisierbar genug ist, können Sie auch eine Liste von auswählbaren Optionen mit HTML-Checkboxen erstellen, die ebenfalls semantisch, fokussierbar und nahezu unendlich mit CSS stilisierbar ist:

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

Statt `aria-selected="true"` das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attribut einschließen. Der Browser erledigt den Rest.

## Werte

- `true`
  - : Mehr als ein Element im Widget kann gleichzeitig ausgewählt werden
- `false`
  - : Es kann nur ein Element ausgewählt werden

## Zugehörige Schnittstellen

- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-multiselectable` Attributs wider.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-multiselectable` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)

Vererbt in Rollen:

- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}} Element
- HTML {{HTMLElement('option')}} Element
- HTML {{HTMLElement('input')}} Element
- [multiple](/de/docs/Web/HTML/Attributes/multiple) Attribut
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
