---
title: "ARIA: aria-expanded Attribut"
short-title: aria-expanded
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-expanded` Attribut wird auf ein Element gesetzt, um anzugeben, ob ein Steuerelement erweitert oder zusammengeklappt ist und ob die gesteuerten Elemente angezeigt oder verborgen sind.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und zusammengeklappt werden können, einschließlich Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte hat ein interaktives Element, das das Öffnen und Schließen steuert. Das `aria-expanded` Attribut wird auf diese fokussierbare, interaktive Steuerung angewendet, die die Sichtbarkeit des Objekts umschaltet.

Zum Beispiel wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob sein Kindzweig angezeigt wird. Das übergeordnete Element steuert ebenfalls die Sichtbarkeit des zugehörigen Kindzweigs.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) in Kombination mit `aria-expanded`. `aria-controls` und `aria-owns` geben die Beziehung zwischen dem Steuerungselement und dem gesteuerten Element an. `aria-expanded` gibt assistiven Technologien an, ob das gesteuerte Element erweitert oder zusammengeklappt ist.

Verwenden Sie die Eigenschaft `aria-owns` auf den Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und zusammenklappbare Gruppierungscontainer nicht von dem Element, das das `aria-expanded` Attribut hat, besessen wird, verwenden Sie stattdessen die Eigenschaft `aria-controls`, um auf den Gruppierungscontainer zu verweisen.

### Buttons

Ein Button, der ein Widget umschaltet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des umgeschalteten Widgets setzen und `aria-expanded` auf den aktuellen Zustand des Widgets.

```html
<button aria-expanded="false" aria-controls="widget1">Toggle widget</button>
```

Wenn das Widget sichtbar ist, überträgt das Steuerungsobjekt diese Information, indem es `aria-expanded="true"` auf ihm gesetzt hat. Der zugängliche Name des Steuerungsobjekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Toggle widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) angezeigt wird, hat das Button-Objekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` gesetzt. Wenn das Menü verborgen ist, kann `aria-expanded` weggelassen werden. Wenn es angegeben wird, wenn das Menü verborgen ist, sollte es als `aria-expanded="false"` gesetzt werden. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Kombinationsfeld

Standardmäßig sind einige Rollen verborgen oder zusammengeklappt, und andere Rollen sind standardmäßig offen oder erweitert. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) haben einen Standardwert für `aria-expanded` von `false`. Wenn ein Kombinationsfeld-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

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
> Das Vorhandensein des `aria-expanded` Attributs zeigt Kontrolle an. Vermeiden Sie es, es auf Elemente zu setzen, die den erweiterten Zustand anderer Elemente nicht steuern.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role), das als übergeordneter Knoten dient, hat `aria-expanded="false"`, wenn der Knoten in einem geschlossenen Zustand ist, und `aria-expanded="true"`, wenn der Knoten in einem offenen Zustand ist. Endknoten, Knoten ohne Nachfahrenknoten, sollten das `aria-expanded` Attribut nicht haben, weil sie sonst fälschlicherweise als übergeordnete Knoten beschrieben würden.

### Zeilen

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) ist eine Zeile, die erweitert oder zusammengeklappt werden kann, um eine Reihe von untergeordneten Zeilen in einer Tabelle oder einem Raster anzuzeigen oder zu verbergen. Jede übergeordnete Zeile hat den `aria-expanded` Zustand entweder auf das Reihen-Element oder auf eine darin enthaltene Zelle gesetzt. Wenn die untergeordneten Zeilen verborgen sind, wird `aria-expanded="false"` gesetzt. `aria-expanded="true"` wird gesetzt, wenn die untergeordneten Zeilen angezeigt werden. Zeilen, die die Anzeige von untergeordneten Zeilen nicht steuern, sollten das `aria-expanded` Attribut überhaupt nicht enthalten, da die Aufnahme des Attributs die Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`

  - : Das Gruppenelement, das dieses Element besitzt oder steuert, ist zusammengeklappt.

- `true`

  - : Das Gruppenelement, das dieses Element besitzt oder steuert, ist erweitert.

- `undefined` (Standard)
  - : Das Element besitzt oder steuert kein erweiterbares Gruppenelement.

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
