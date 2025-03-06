---
title: aria-expanded
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-expanded` Attribut wird auf einem Element gesetzt, um anzuzeigen, ob ein Steuerelement erweitert oder eingeklappt ist und ob die gesteuerten Elemente angezeigt oder versteckt sind.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und eingeklappt werden können, darunter Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte hat wiederum ein interaktives Element, das deren Öffnen und Schließen steuert. Das `aria-expanded` Attribut wird auf dieses fokussierbare, interaktive Steuerelement angewendet, das die Sichtbarkeit des Objekts umschaltet.

Zum Beispiel wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob sein Kindzweig angezeigt wird. Das übergeordnete Element steuert auch die Sichtbarkeit des zugehörigen Kindzweigs.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) in Kombination mit `aria-expanded`. Die `aria-controls` und `aria-owns` Attribute zeigen die Beziehung zwischen dem steuernden Element und dem gesteuerten Element an. Das `aria-expanded` Attribut zeigt unterstützenden Technologien, ob das gesteuerte Element erweitert oder eingeklappt ist.

Verwenden Sie das `aria-owns` Attribut auf den Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und einklappbare Gruppierungscontainer nicht von dem Element, das das `aria-expanded` Attribut besitzt, verwaltet wird, verwenden Sie das `aria-controls` Attribut, um stattdessen auf den Gruppierungscontainer zu verweisen.

### Schaltflächen

Eine Schaltfläche, die ein Widget umschaltet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des umgeschalteten Widgets und `aria-expanded` auf den aktuellen Zustand des Widgets setzen.

```html
<button aria-expanded="false" aria-controls="widget1">Toggle widget</button>
```

Wenn das Widget sichtbar ist, gibt das steuernde Objekt diese Information weiter, indem `aria-expanded="true"` darauf gesetzt wird. Der zugängliche Name des steuernden Objekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Toggle widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) angezeigt wird, hat das Schaltflächenobjekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` gesetzt. Wenn das Menü verborgen ist, kann `aria-expanded` weggelassen werden. Falls angegeben, wenn das Menü verborgen ist, sollte es auf `aria-expanded="false"` gesetzt sein. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Kombinationsfeld (Combobox)

Standardmäßig sind einige Rollen verborgen oder eingeklappt und andere Rollen sind standardmäßig offen oder erweitert. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) haben standardmäßig den Wert `false` für `aria-expanded`. Wenn ein Kombinationsfeld-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt sein.

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
> Das Vorhandensein des `aria-expanded` Attributs zeigt Kontrolle an. Vermeiden Sie, es auf Elemente zu setzen, die den erweiterten Zustand anderer Elemente nicht kontrollieren.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role), das als übergeordneter Knoten fungiert, hat `aria-expanded="false"`, wenn der Knoten geschlossen ist, und `aria-expanded="true"`, wenn der Knoten geöffnet ist. Endknoten, Knoten ohne Nachkommen, sollten das `aria-expanded` Attribut nicht haben, da sie, wenn sie es hätten, fälschlicherweise gegenüber unterstützenden Technologien als übergeordnete Knoten beschrieben würden.

### Zeilen

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) ist eine Zeile, die erweitert oder eingeklappt werden kann, um eine Gruppe von untergeordneten Zeilen in einer Tabelle oder einem Raster anzuzeigen oder zu verbergen. Jede übergeordnete Zeile hat den `aria-expanded` Zustand entweder auf das Zeilenelement oder auf eine Zelle in der Zeile gesetzt. Wenn die untergeordneten Zeilen verborgen sind, ist `aria-expanded="false"` gesetzt. `aria-expanded="true"` ist gesetzt, wenn die untergeordneten Zeilen angezeigt werden. Zeilen, die die Anzeige von untergeordneten Zeilen nicht kontrollieren, sollten das `aria-expanded` Attribut überhaupt nicht enthalten, da das Vorhandensein des Attributs die Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`

  - : Das Gruppierungselement, das dieses Element besitzt oder kontrolliert, ist eingeklappt.

- `true`

  - : Das Gruppierungselement, das dieses Element besitzt oder kontrolliert, ist erweitert.

- `undefined` (standard)
  - : Das Element besitzt oder kontrolliert kein erweiterbares Gruppierungselement.

## Zugehörige Schnittstellen

- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded) Eigenschaft, als Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-expanded` Attributs wider.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded) Eigenschaft, als Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-expanded` Attributs wider.

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

Wird vererbt in Rollen:

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
- Das HTML [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut
