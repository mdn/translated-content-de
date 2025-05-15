---
title: "ARIA: aria-multiselectable-Attribut"
short-title: aria-multiselectable
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-multiselectable`-Attribut gibt an, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.

## Beschreibung

Das Standardverhalten von Auswahllisten, wie z.B. {{HTMLElement('select')}}, ist, dass nur ein Element oder eine Option ausgewählt werden kann. Standardmäßig oder aus Gewohnheit gehen Benutzer davon aus, dass sie nur ein einzelnes Element auswählen können, wenn ihnen eine Liste präsentiert wird, aus der sie ein Element auswählen müssen, es sei denn, sie werden anders benachrichtigt. Das `aria-multiselectable`-Attribut ist die Möglichkeit, Benutzer von unterstützender Technologie darüber zu informieren, dass sie mehr als ein Element aus den aktuellen auswählbaren Elementen auswählen können, wenn sie dies möchten. Listen und Bäume sind Beispiele für Rollen, die es Benutzern ermöglichen könnten, mehr als ein Element gleichzeitig auszuwählen.

> [!NOTE]
> Wenn mehrere Auswahlen erlaubt sind, informieren Sie den Benutzer darüber, dass mehrere Werte erlaubt sind, und geben Sie Anweisungen, wie man mehrere Werte bereitstellt, zum Beispiel: "Um mehr als einen Wert auszuwählen, halten Sie die Steuertaste während der Auswahl gedrückt."

### Verwendung mit `aria-selected`

Wenn der Benutzer ein oder mehrere Elemente auswählt, denken Sie daran, die ausgewählten Nachkommen als ausgewählt zu kennzeichnen mit [`aria-selected="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), und auswählbare Nachkommen, die nicht ausgewählt sind, haben `aria-selected="false"` gesetzt. Wenn ein Element nicht auswählbar ist, lassen Sie das `aria-selected`-Attribut vollständig weg, da seine Präsenz den Benutzer darüber informiert, dass das Element auswählbar ist.

Wenn ein Baum, Raster, Registerkartenliste oder Listenfeld die Auswahl von mehr als einem Knoten unterstützt, hat das Element mit der Rolle [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) oder [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) `aria-multiselectable` auf `true` gesetzt. Andernfalls ist `aria-multiselectable` entweder auf `false` gesetzt oder der Standardwert `false` wird impliziert.

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

Diese Listenfeld unterstützt Mehrfachauswahl, daher setzen wir das Element mit der Rolle `listbox` auf `aria-multiselectable="true"`. Alle ausgewählten Optionen haben `aria-selected` auf `true` gesetzt. Alle Optionen, die nicht ausgewählt, aber auswählbar sind, haben `aria-selected` auf false gesetzt. Hätten wir Optionen eingeschlossen, die deaktiviert oder anderweitig nicht auswählbar sind, hätten wir das `aria-selected`-Attribut vollständig weggelassen. Das Einschließen des Attributs, auch ohne Wert oder explizit auf `false` gesetzt, weist Benutzer von unterstützender Technologie darauf hin, dass das Element auswählbar ist.

Die erste Regel der ARIA-Nutzung lautet: "Wenn Sie eine native Funktion mit der gewünschten Semantik und dem gewünschten Verhalten verwenden können, anstatt ein Element neu zu verwenden und \*\*ein ARIA-Rolle, -Status oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies." Anstatt eine unsortierte Liste zu erstellen, die [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), ARIA und JavaScript erfordert, um Text in auswählbare Optionen zu verwandeln, könnten wir eine native Mehrfachauswahl verwenden: das {{htmlelement('select')}}-Element hat ein Boolean-Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple). Wenn enthalten, kann der Benutzer mehrere Optionen auswählen. Wenn nicht, kann nur eine einzelne Option ausgewählt werden.

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

Wenn das obige nicht nach Ihrem Geschmack stilisiert werden kann, können Sie auch eine Liste von auswählbaren Optionen mit HTML-Checkboxen erstellen, die ebenfalls semantisch, fokussierbar und unendlich mit CSS stilisierbar ist:

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

Anstelle von `aria-selected="true"`, fügen Sie das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut ein. Der Browser erledigt den Rest.

## Werte

- `true`
  - : Mehr als ein Element im Widget kann gleichzeitig ausgewählt werden
- `false`
  - : Nur ein Element kann ausgewählt werden

## Zugehörige Schnittstellen

- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-multiselectable`-Attributs wider.
- [`ElementInternals.ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)
  - : Die [`ariaMultiSelectable`](/de/docs/Web/API/ElementInternals/ariaMultiSelectable)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-multiselectable`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Vererbt in Rollen:

- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('option')}}-Element
- HTML {{HTMLElement('input')}}-Element
- [multiple](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
