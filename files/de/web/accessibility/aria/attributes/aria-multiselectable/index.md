---
title: aria-multiselectable
slug: Web/Accessibility/ARIA/Attributes/aria-multiselectable
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-multiselectable`-Attribut gibt an, dass der Benutzer mehr als ein Element aus den momentan auswählbaren Nachkommen auswählen kann.

## Beschreibung

Das Standardverhalten von Auswahllisten, wie zum Beispiel {{HTMLElement('select')}}, besteht darin, nur ein Element oder eine Option auswählen zu können. Standardmäßig oder aus Konvention heraus wird angenommen, dass der Benutzer nur ein Element auswählen kann, es sei denn, er wird anders informiert. Das `aria-multiselectable`-Attribut ist der Weg, Assistive-Technologie-Nutzern mitzuteilen, dass sie mehr als ein Element aus den momentan auswählbaren Elementen auswählen können, wenn sie dies wünschen. Listen und Bäume sind Beispiele für Rollen, die es Benutzern ermöglichen könnten, mehr als ein Element gleichzeitig auszuwählen.

> [!NOTE]
> Wenn Mehrfachauswahl erlaubt ist, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie mehrere Werte ausgewählt werden können, wie zum Beispiel "Um mehr als einen Wert auszuwählen, halten Sie die Steuerungstaste während der Auswahl gedrückt."

### Verwendung mit `aria-selected`

Wenn der Benutzer eines oder mehrere Elemente auswählt, denken Sie daran, die gewählten Nachkommen mit [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) zu markieren, und auswählbare Nachkommen, die nicht ausgewählt sind, haben `aria-selected="false"` gesetzt. Wenn ein Element nicht auswählbar ist, lassen Sie das `aria-selected`-Attribut ganz weg, denn seine Anwesenheit informiert den Benutzer darüber, dass das Element auswählbar ist.

Wenn ein Baum, Raster, eine Tabelliste oder Listenfeld die Auswahl von mehr als einem Knoten unterstützt, hat das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) `aria-multiselectable` auf `true` gesetzt. Andernfalls wird `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert false wird impliziert.

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

Dieses Listenfeld unterstützt die Mehrfachauswahl, daher setzen wir das Element mit der Rolle `listbox` auf `aria-multiselectable="true"`. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle Optionen, die nicht ausgewählt, aber auswählbar sind, haben `aria-selected` auf `false` gesetzt. Hätten wir Optionen, die deaktiviert oder anderweitig nicht auswählbar waren, hätten wir das `aria-selected`-Attribut ganz weggelassen. Das Attribut einzubeziehen, selbst ohne Wert oder explizit auf `false` gesetzt, zeigt Assistive-Technologie-Nutzern an, dass das Element auswählbar ist.

Die erste Regel bei der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion verwenden können, die bereits die benötigte Semantik und das gewünschte Verhalten bietet, anstatt ein Element neu zu interpretieren und eine ARIA-Rolle, einen ARIA-Zustand oder ein ARIA-Attribut hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Anstatt eine ungeordnete Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex), ARIA und JavaScript benötigt, um Text in auswählbare Optionen zu verwandeln, können wir ein natives Mehrfachauswahlelement verwenden: das {{HTMLElement('select')}}-Element hat ein Boolesches [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut. Wenn es eingebunden ist, kann der Benutzer mehrere Optionen auswählen. Wenn nicht, kann nur eine einzelne Option ausgewählt werden.

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

Diese HTML-`<select>`-Version ist zugänglich und interaktiv und benötigt keine ARIA oder JavaScript zur Funktion.

Wenn das Obige nicht nach Ihrem Geschmack gestylt werden kann, können Sie auch eine Liste auswählbarer Optionen mit HTML-Checkboxen erstellen, die ebenfalls semantisch, fokussierbar und unbegrenzt mit CSS zu gestalten ist:

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

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('option')}}-Element
- HTML {{HTMLElement('input')}}-Element
- [multiple](/de/docs/Web/HTML/Attributes/multiple)-Attribut
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
