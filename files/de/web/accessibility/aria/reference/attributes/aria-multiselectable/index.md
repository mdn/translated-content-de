---
title: aria-multiselectable
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-multiselectable` zeigt an, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.

## Beschreibung

Das Standardverhalten von Auswahllisten, wie z.B. {{HTMLElement('select')}}, ist darauf ausgelegt, nur ein Element oder eine Option auszuwählen. Standardmäßig oder per Konvention geht der Benutzer davon aus, dass er nur ein einzelnes Element auswählen kann, es sei denn, er wird anderweitig informiert. Das Attribut `aria-multiselectable` ist der Weg, um Nutzern von unterstützender Technologie mitzuteilen, dass sie mehr als ein Element aus den gegenwärtig auswählbaren Elementen auswählen können, wenn sie dies wünschen. Listen und Bäume sind Beispiele für Rollen, die Benutzern erlauben könnten, mehr als ein Element auf einmal auszuwählen.

> [!NOTE]
> Wenn Sie Mehrfachauswahlen zulassen, informieren Sie den Benutzer, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen zur Eingabe mehrerer Werte, wie z.B. "Um mehr als einen Wert auszuwählen, halten Sie während der Auswahl die Steuerungstaste gedrückt."

### Verwendung mit `aria-selected`

Wenn der Benutzer eines oder mehrere Elemente auswählt, denken Sie daran, die ausgewählten Nachkommen mit [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) als ausgewählt zu kennzeichnen, und bei auswählbaren Nachkommen, die nicht ausgewählt sind, `aria-selected="false"` zu setzen. Wenn ein Element nicht auswählbar ist, lassen Sie das Attribut `aria-selected` ganz weg, da seine Anwesenheit den Benutzer darüber informiert, dass das Element auswählbar ist.

Wenn eine Baumstruktur, ein Raster, eine Registerkartenliste oder eine Listenbox die Auswahl von mehr als einem Knoten unterstützt, hat das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) `aria-multiselectable` auf `true` gesetzt. Andernfalls wird `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert false wird impliziert.

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

Diese Listenbox unterstützt Mehrfachauswahlen, daher setzen wir das Element mit der Rolle `listbox` auf `aria-multiselectable="true"`. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle Optionen, die nicht ausgewählt sind, aber auswählbar sind, haben `aria-selected` auf false gesetzt. Hätten wir Optionen eingeschlossen, die deaktiviert oder anderweitig nicht auswählbar waren, hätten wir das Attribut `aria-selected` ganz weggelassen. Die Einbeziehung des Attributs, selbst ohne Wert oder explizit auf `false` gesetzt, zeigt Nutzern von unterstützender Technologie an, dass das Element auswählbar ist.

Die erste Regel der ARIA-Nutzung ist: "Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen nutzen können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Anstatt eine ungeordnete Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex), ARIA und JavaScript benötigt, um Text in auswählbare Optionen zu verwandeln, könnten wir eine native Mehrfachauswahl verwenden: das {{htmlelement('select')}}-Element hat ein Boolesches [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut. Wenn dieses eingeschlossen ist, kann der Benutzer mehrere Optionen auswählen. Wenn nicht, kann nur eine einzelne Option ausgewählt werden.

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

Diese HTML `<select>`-Version ist zugänglich und interaktiv und benötigt kein ARIA oder JavaScript, um zu funktionieren.

Wenn das oben Genannte nicht nach Ihrem Geschmack gestaltbar ist, können Sie auch eine Liste von auswählbaren Optionen mit HTML-Checkboxen erstellen, die ebenfalls semantisch, fokussierbar und mit CSS unendlich gestaltbar ist:

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

Anstatt `aria-selected="true"` einzuschließen, fügen Sie das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut hinzu. Der Browser erledigt den Rest.

## Werte

- `true`
  - : Mehr als ein Element im Widget kann gleichzeitig ausgewählt werden.
- `false`
  - : Es kann nur ein Element ausgewählt werden.

## Zugehörige Schnittstellen

- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-multiselectable` wider.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-multiselectable` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Angewendet auf Rollen:

- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('option')}}-Element
- HTML {{HTMLElement('input')}}-Element
- [multiple](/de/docs/Web/HTML/Attributes/multiple)-Attribut
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
