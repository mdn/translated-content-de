---
title: aria-multiselectable
slug: Web/Accessibility/ARIA/Attributes/aria-multiselectable
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-multiselectable`-Attribut gibt an, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachkommen auswählen kann.

## Beschreibung

Das Standardverhalten bei Auswahllisten, wie etwa bei {{HTMLElement('select')}}, besteht darin, nur ein Element oder Option auszuwählen. Standardmäßig oder konventionell geht ein Benutzer, dem eine Liste präsentiert wird, davon aus, dass er nur ein einziges Element auswählen kann, sofern nicht anders angegeben. Das `aria-multiselectable`-Attribut informiert Benutzer von unterstützenden Technologien darüber, dass sie mehr als ein Element aus den aktuell auswählbaren Elementen auswählen können, wenn sie dies möchten. Listen und Bäume sind Beispiele für Rollen, die Benutzern erlauben können, mehr als ein Element gleichzeitig auszuwählen.

> [!NOTE]
> Wenn Mehrfachauswahlen erlaubt sind, informieren Sie den Benutzer, dass mehrere Werte zulässig sind und geben Sie Anweisungen, wie mehrere Werte ausgewählt werden können, wie z. B. "Um mehr als einen Wert auszuwählen, halten Sie während der Auswahl die Steuertaste gedrückt."

### Verwendung mit `aria-selected`

Wenn der Benutzer ein oder mehrere Elemente auswählt, denken Sie daran, die ausgewählten Nachkommen mit [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) zu kennzeichnen, und auswählbare Nachkommen, die nicht ausgewählt sind, mit `aria-selected="false"` zu markieren. Wenn ein Element nicht auswählbar ist, lassen Sie das `aria-selected`-Attribut vollständig weg, da das Vorhandensein des Attributs dem Benutzer signalisiert, dass das Element auswählbar ist.

Wenn ein Baum, Raster, Tab-Liste oder Listenfeld die Auswahl von mehr als einem Knoten unterstützt, ist das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) und hat `aria-multiselectable` auf `true` gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert von false wird impliziert.

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

Dieses Listenfeld unterstützt Mehrfachauswahl, daher setzen wir das Element mit der Rolle `listbox` auf `aria-multiselectable="true"`. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle nicht ausgewählten, aber auswählbaren Optionen haben `aria-selected` auf false gesetzt. Hätten wir Optionen einbezogen, die deaktiviert oder anderweitig nicht auswählbar sind, hätten wir das `aria-selected`-Attribut ganz weggelassen. Die Aufnahme des Attributs, selbst ohne Wert oder explizit auf `false` gesetzt, zeigt Benutzern unterstützender Technologien an, dass das Element auswählbar ist.

Die erste Regel der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzupurposen und eine ARIA-Rolle, einen Status oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies." Anstatt eine ungeordnete Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex), ARIA und JavaScript benötigt, um Text in auswählbare Optionen zu verwandeln, könnten wir ein natives Mehrfachauswahl-Element verwenden: Das {{htmlelement('select')}}-Element hat ein Boolean-Attribut [`multiple`](/de/docs/Web/HTML/Element/select#multiple). Wenn dieses enthalten ist, kann der Benutzer mehrere Optionen auswählen. Wenn nicht, kann nur eine einzelne Option ausgewählt werden.

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

Diese HTML `<select>`-Version ist barrierefrei und interaktiv und benötigt keine ARIA oder JavaScript zur Funktion.

Wenn das Obige nicht nach Ihren Wünschen gestaltbar ist, können Sie auch eine Liste von auswählbaren Optionen mit HTML-Checkboxen erstellen, die ebenfalls semantisch, fokussierbar und unendlich mit CSS gestaltbar ist:

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

Anstelle von `aria-selected="true"`, fügen Sie das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attribut hinzu. Der Browser erledigt den Rest.

## Werte

- `true`
  - : Mehr als ein Element im Widget kann gleichzeitig ausgewählt werden
- `false`
  - : Es kann nur ein Element ausgewählt werden

## Zugehörige Schnittstellen

- {{domxref("Element.ariaMultiSelectable")}}
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-multiselectable`-Attributs wider.
- {{domxref("ElementInternals.ariaMultiSelectable")}}
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-multiselectable`-Attributs wider.

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
- [multiple](/de/docs/Web/HTML/Attributes/multiple) Attribut
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
