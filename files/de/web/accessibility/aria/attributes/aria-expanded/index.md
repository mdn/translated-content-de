---
title: aria-expanded
slug: Web/Accessibility/ARIA/Attributes/aria-expanded
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Das `aria-expanded` Attribut wird auf ein Element gesetzt, um anzuzeigen, ob eine Steuerung erweitert oder reduziert ist und ob die gesteuerten Elemente angezeigt oder verborgen werden.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und reduziert werden können, darunter Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte hat seinerseits ein interaktives Element, das deren Öffnen und Schließen steuert. Das `aria-expanded` Attribut wird auf diese fokussierbare, interaktive Steuerung angewendet, die die Sichtbarkeit des Objekts umschaltet.

Zum Beispiel wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob sein untergeordnetes Element angezeigt wird. Der übergeordnete Element steuert ebenfalls die Sichtbarkeit des zugehörigen untergeordneten Elements.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) in Kombination mit `aria-expanded`. `aria-controls` und `aria-owns` zeigen die Beziehung zwischen dem steuernden Element und dem gesteuerten Element an. `aria-expanded` zeigt der unterstützenden Technologie, ob das gesteuerte Element erweitert oder reduziert ist.

Verwenden Sie die `aria-owns` Eigenschaft auf den Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und zusammenklappbare Gruppierungscontainer nicht von dem Element, das das `aria-expanded` Attribut hat, besessen wird, verwenden Sie stattdessen die `aria-controls` Eigenschaft, um auf den Gruppierungscontainer zu verweisen.

### Buttons

Ein Button, der ein Widget öffnet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des erweiterbaren Widgets setzen und `aria-expanded` auf den aktuellen Zustand des Widgets.

```html
<button aria-expanded="false" aria-controls="widget1">Show widget</button>
```

Wenn das Widget sichtbar ist, übermittelt das steuernde Objekt diese Information, indem es `aria-expanded="true"` darauf setzt. Der zugängliche Name des steuernden Objekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Hide widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) angezeigt wird, hat das Button-Objekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` gesetzt. Wenn das Menü verborgen ist, kann `aria-expanded` weggelassen werden. Falls angegeben, wenn das Menü verborgen ist, sollte es als `aria-expanded="false"` gesetzt werden. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Combobox

Standardmäßig sind einige Rollen verborgen oder standardmäßig reduziert und andere Rollen sind standardmäßig geöffnet oder erweitert. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) haben einen Standardwert für `aria-expanded` von `false`. Wenn ein Kombinationsfenster-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

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
> Das Vorhandensein des `aria-expanded` Attributs zeigt eine Steuerung an. Vermeiden Sie es, es auf Elemente anzuwenden, die den erweiterten Zustand anderer Elemente nicht steuern.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role), das als übergeordnetes Knoten dient, hat `aria-expanded="false"`, wenn der Knoten im geschlossenen Zustand ist, und `aria-expanded="true"`, wenn der Knoten im offenen Zustand ist. Endknoten, Knoten ohne Nachkommen, sollten das `aria-expanded` Attribut nicht haben, da sie, wenn sie es hätten, fälschlicherweise unterstützenden Technologien als übergeordnete Knoten beschrieben würden.

### Reihen

Eine übergeordnete Reihe in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) ist eine Reihe, die erweitert oder reduziert werden kann, um eine Gruppe von untergeordneten Reihen in einer Tabelle oder einem Raster anzuzeigen oder zu verbergen. Jede übergeordnete Reihe hat den `aria-expanded` Zustand, entweder auf dem Reihenelement oder auf einer in der Reihe enthaltenen Zelle gesetzt. Wenn die untergeordneten Reihen verborgen sind, ist `aria-expanded="false"` gesetzt. `aria-expanded="true"` ist gesetzt, wenn die untergeordneten Reihen angezeigt werden. Reihen, die die Anzeige von untergeordneten Reihen nicht steuern, sollten das `aria-expanded` Attribut überhaupt nicht beinhalten, da das Attribut die Reihen als übergeordnete Reihen definiert.

## Werte

- `false`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist reduziert.

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

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- HTML [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden) Attribut
