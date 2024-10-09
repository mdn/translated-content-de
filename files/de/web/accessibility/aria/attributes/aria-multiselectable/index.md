---
title: aria-multiselectable
slug: Web/Accessibility/ARIA/Attributes/aria-multiselectable
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Das Attribut `aria-multiselectable` zeigt an, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachkommen auswählen kann.

## Beschreibung

Das Standardverhalten von Auswahllisten, wie etwa bei {{HTMLElement('select')}}, besteht darin, dass nur ein Element oder eine Option ausgewählt werden kann. Standardmäßig oder nach Konvention wird davon ausgegangen, dass ein Benutzer, dem eine Liste präsentiert wird, aus der er ein Element auswählen muss, nur ein einzelnes Element auswählen kann, es sei denn, er wird anders informiert. Das Attribut `aria-multiselectable` dient dazu, Benutzer assistiver Technologien darüber zu informieren, dass sie mehr als ein Element aus den aktuell auswählbaren Elementen auswählen können, wenn sie es wünschen. Listen und Bäume sind Beispiele für Rollen, die Benutzern möglicherweise erlauben, mehr als ein Element gleichzeitig auszuwählen.

> [!NOTE]
> Wenn mehrere Auswahlen zugelassen sind, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind, und geben Sie Hinweise, wie mehrere Werte angegeben werden können, zum Beispiel: "Um mehr als einen Wert auszuwählen, halten Sie die Steuerungstaste während der Auswahl gedrückt."

### Verwendung mit `aria-selected`

Wenn der Benutzer ein oder mehrere Elemente auswählt, sollten Sie daran denken, die ausgewählten Nachkommen als ausgewählt zu kennzeichnen, indem Sie [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) setzen, und für auswählbare Nachkommen, die nicht ausgewählt sind, `aria-selected="false"` setzen. Wenn ein Element nicht auswählbar ist, lassen Sie das Attribut `aria-selected` ganz weg, da seine Anwesenheit den Benutzer informiert, dass das Element auswählbar ist.

Wenn ein Baum, Raster, eine Tab-Liste oder Listenauswahl die Auswahl von mehr als einem Knoten unterstützt, hat das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) `aria-multiselectable` auf `true` gesetzt. Andernfalls wird `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` wird impliziert.

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

Diese Listenauswahl unterstützt Mehrfachauswahl, daher setzen wir das Element mit der Rolle `listbox` mit `aria-multiselectable="true"`. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle Optionen, die nicht ausgewählt, aber auswählbar sind, haben `aria-selected` auf false gesetzt. Hätten wir Optionen eingeschlossen, die deaktiviert oder anderweitig nicht auswählbar waren, hätten wir das Attribut `aria-selected` ganz weggelassen. Die Einbeziehung des Attributs, selbst ohne Wert oder explizit auf `false` gesetzt, zeigt Benutzern assistiver Technologien an, dass das Element auswählbar ist.

Die erste Regel der ARIA-Nutzung besagt: "Wenn Sie eine native Funktion mit der von Ihnen benötigten Semantik und dem erforderlichen Verhalten verwenden können, anstatt ein Element neu zu verwenden und eine ARIA-Rolle, Zustand oder Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Anstatt eine ungeordnete Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex), ARIA und JavaScript erfordert, um Text in auswählbare Optionen zu verwandeln, hätten wir ein natives Mehrfachauswahl-Element verwenden können: Das {{htmlelement('select')}}-Element verfügt über ein Boolean-Attribut [`multiple`](/de/docs/Web/HTML/Element/select#multiple). Wenn enthalten, kann der Benutzer mehrere Optionen auswählen. Wenn nicht, kann nur eine einzelne Option ausgewählt werden.

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

Diese HTML-`<select>`-Version ist zugänglich und interaktiv und benötigt keine ARIA oder JavaScript, um zu funktionieren.

Wenn das obige nicht nach Ihrem Geschmack stilisiert werden kann, können Sie auch eine Liste von auswählbaren Optionen mit HTML-Checkboxen erstellen, die ebenfalls semantisch, fokussierbar und mit CSS unendlich stilisierbar sind:

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

Anstelle von `aria-selected="true"` fügen Sie das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut hinzu. Der Browser erledigt den Rest.

## Werte

- `true`
  - : Mehr als ein Element im Widget kann gleichzeitig ausgewählt werden
- `false`
  - : Es kann nur ein Element ausgewählt werden

## Zugehörige Schnittstellen

- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-multiselectable`-Attributs wider.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-multiselectable`-Attributs wider.

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

- HTML-{{HTMLElement('select')}}-Element
- HTML-{{HTMLElement('option')}}-Element
- HTML-{{HTMLElement('input')}}-Element
- [multiple](/de/docs/Web/HTML/Attributes/multiple)-Attribut
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
