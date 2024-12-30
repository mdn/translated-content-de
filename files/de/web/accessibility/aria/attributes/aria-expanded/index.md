---
title: aria-expanded
slug: Web/Accessibility/ARIA/Attributes/aria-expanded
l10n:
  sourceCommit: dbda850579219be098e81d3948641b9a2977b5cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-expanded` wird auf ein Element gesetzt, um anzuzeigen, ob ein Steuerungselement erweitert oder reduziert ist und ob die gesteuerten Elemente angezeigt oder verborgen sind.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und reduziert werden können, einschließlich Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte hat wiederum ein interaktives Element, das ihre Öffnung und Schließung steuert. Das Attribut `aria-expanded` wird auf dieses fokussierbare, interaktive Steuerelement angewendet, das die Sichtbarkeit des Objekts umschaltet.

Zum Beispiel wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob der untergeordnete Zweig angezeigt wird. Das übergeordnete Element steuert auch die Sichtbarkeit des zugehörigen untergeordneten Zweigs.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) in Kombination mit `aria-expanded`. Die Attribute `aria-controls` und `aria-owns` zeigen die Beziehung zwischen dem steuernden Element und dem gesteuerten Element an. Das `aria-expanded` zeigt der unterstützenden Technologie, ob das gesteuerte Element erweitert oder reduziert ist.

Verwenden Sie die Eigenschaft `aria-owns` auf den Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und reduzierbare Gruppierungscontainer nicht von dem Element besessen wird, das das Attribut `aria-expanded` hat, verwenden Sie stattdessen die Eigenschaft `aria-controls`, um auf den Gruppierungscontainer zu verweisen.

### Schaltflächen

Eine Schaltfläche, die ein Widget umschaltet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des umgeschalteten Widgets setzen und `aria-expanded` auf den aktuellen Zustand des Widgets.

```html
<button aria-expanded="false" aria-controls="widget1">Toggle widget</button>
```

Wenn das Widget sichtbar ist, übermittelt das steuernde Objekt diese Information, indem `aria-expanded="true"` darauf gesetzt wird. Der zugängliche Name des steuernden Objekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Toggle widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) angezeigt wird, hat das Schaltflächenobjekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` gesetzt. Wenn das Menü verborgen ist, kann `aria-expanded` weggelassen werden. Falls angegeben, wenn das Menü verborgen ist, sollte es auf `aria-expanded="false"` gesetzt werden. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Kombinationsfeld

Standardmäßig sind einige Rollen standardmäßig verborgen oder reduziert, während andere Rollen standardmäßig geöffnet oder erweitert sind. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) haben standardmäßig den Wert `aria-expanded` von `false`. Wenn ein Kombinationsfeld-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

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
> Das Vorhandensein des Attributs `aria-expanded` zeigt die Steuerung an. Vermeiden Sie es, es an Elementen einzuschließen, die den erweiterten Zustand anderer Elemente nicht steuern.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role), das als übergeordneter Knoten dient, hat `aria-expanded="false"`, wenn der Knoten im geschlossenen Zustand ist, und `aria-expanded="true"`, wenn der Knoten im geöffneten Zustand ist. Endknoten, Knoten ohne Nachkomme-Knoten, sollten das Attribut `aria-expanded` nicht haben, da sie andernfalls fälschlicherweise als übergeordnete Knoten für unterstützende Technologien beschrieben würden.

### Zeilen

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) ist eine Zeile, die erweitert oder reduziert werden kann, um eine Gruppe von untergeordneten Zeilen in einer Tabelle oder einem Raster anzuzeigen oder zu verbergen. Jede übergeordnete Zeile hat den `aria-expanded`-Zustand entweder auf dem Zeilenelement oder auf einer Zelle in der Zeile gesetzt. Wenn die untergeordneten Zeilen verborgen sind, ist `aria-expanded="false"` gesetzt. `aria-expanded="true"` ist gesetzt, wenn die untergeordneten Zeilen angezeigt werden. Zeilen, die die Anzeige von untergeordneten Zeilen nicht steuern, sollten das Attribut `aria-expanded` überhaupt nicht einschließen, da das Einschließen des Attributs die Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist reduziert.

- `true`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist erweitert.

- `undefined` (Standard)
  - : Das Element besitzt oder steuert kein Gruppierungselement, das erweiterbar ist.

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

Erbt in Rollen:

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
- HTML [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut
