---
title: "ARIA: aria-expanded Attribut"
short-title: aria-expanded
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `aria-expanded` Attribut wird auf ein Element gesetzt, um anzuzeigen, ob ein Steuerelement erweitert oder eingeklappt ist und ob die kontrollierten Elemente angezeigt oder ausgeblendet sind.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und eingeklappt werden können, darunter Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte hat wiederum ein interaktives Element, das deren Öffnen und Schließen steuert. Das `aria-expanded` Attribut wird auf dieses fokussierbare, interaktive Steuerelement angewendet, das die Sichtbarkeit des Objekts umschaltet.

Zum Beispiel wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob dessen untergeordneter Zweig angezeigt wird. Das übergeordnete Element steuert auch die Sichtbarkeit des zugehörigen untergeordneten Zweigs.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) in Kombination mit `aria-expanded`. `aria-controls` und `aria-owns` geben die Beziehung zwischen dem Steuerungselement und dem kontrollierten Element an. `aria-expanded` zeigt assistiven Technologien an, ob das kontrollierte Element erweitert oder eingeklappt ist.

Verwenden Sie die `aria-owns` Eigenschaft auf den Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und einklappbare Gruppierungscontainer nicht von dem Element besessen wird, das das `aria-expanded` Attribut hat, verwenden Sie die `aria-controls` Eigenschaft, um stattdessen den Gruppierungscontainer zu referenzieren.

### Buttons

Ein Button, der ein Widget umschaltet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des umgeschalteten Widgets setzen und `aria-expanded` auf den aktuellen Zustand des Widgets.

```html
<button aria-expanded="false" aria-controls="widget1">Toggle widget</button>
```

Wenn das Widget sichtbar ist, gibt das Steuerungsobjekt diese Information weiter, indem `aria-expanded="true"` auf ihm gesetzt ist. Der zugängliche Name des Steuerungsobjekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Toggle widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) angezeigt wird, hat das Button-Objekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` gesetzt. Wenn das Menü ausgeblendet ist, kann aria-expanded weggelassen werden. Wenn es angegeben wird, wenn das Menü ausgeblendet ist, sollte es auf `aria-expanded="false"` gesetzt werden. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Combobox

Standardmäßig sind einige Rollen versteckt oder eingeklappt und andere Rollen sind standardmäßig geöffnet oder erweitert. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) haben einen Standardwert für `aria-expanded` von `false`. Wenn ein Combobox-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

```html
<label for="username">Username</label>
<input id="username" name="username" aria-describedby="username-desc" />
<button
  aria-expanded="false"
  aria-controls="username-desc"
  aria-label="Help about username"
  type="button">
  <span aria-hidden="true">?</span>
</button>
<p id="username-desc" hidden>
  Your username is the name that you use to log in to this service.
</p>
```

> [!NOTE]
> Das Vorhandensein des `aria-expanded` Attributs signalisiert Kontrolle. Vermeiden Sie dessen Einschluss auf Elementen, die nicht den erweiterten Zustand anderer Elemente kontrollieren.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role), das als übergeordnetes Knoten dient, hat `aria-expanded="false"`, wenn der Knoten in einem geschlossenen Zustand ist, und `aria-expanded="true"`, wenn der Knoten in einem offenen Zustand ist. Endknoten, Knoten ohne untergeordnete Knoten, sollten das `aria-expanded` Attribut nicht haben, da sie, falls sie es hätten, assistiven Technologien falsch als übergeordnete Knoten beschrieben würden.

### Rows

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) ist eine Zeile, die erweitert oder eingeklappt werden kann, um eine Gruppe von untergeordneten Zeilen in einer Tabelle oder einem Raster anzuzeigen oder auszublenden. Jede übergeordnete Zeile hat den `aria-expanded` Zustand entweder auf dem Zeilenelement oder auf einer in der Zeile enthaltenen Zelle gesetzt. Wenn die untergeordneten Zeilen ausgeblendet sind, wird `aria-expanded="false"` gesetzt. `aria-expanded="true"` wird gesetzt, wenn die untergeordneten Zeilen angezeigt werden. Zeilen, die nicht die Anzeige von untergeordneten Zeilen steuern, sollten das `aria-expanded` Attribut überhaupt nicht enthalten, da die Aufnahme des Attributs die Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`
  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist eingeklappt.

- `true`
  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist erweitert.

- `undefined` (Standard)
  - : Das Element besitzt oder steuert kein erweiterbares Gruppierungselement.

## Zugehörige Schnittstellen

- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-expanded` Attributs wider.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-expanded` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- HTML [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut
