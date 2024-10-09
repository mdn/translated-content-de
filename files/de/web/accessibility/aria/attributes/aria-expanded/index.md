---
title: aria-expanded
slug: Web/Accessibility/ARIA/Attributes/aria-expanded
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Das `aria-expanded`-Attribut wird auf ein Element gesetzt, um anzuzeigen, ob eine Steuerung erweitert oder reduziert ist und ob die kontrollierten Elemente angezeigt oder versteckt sind.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und reduziert werden können, einschließlich Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte verfügt über ein interaktives Element, das deren Öffnen und Schließen steuert. Das `aria-expanded`-Attribut wird auf dieses fokussierbare, interaktive Steuerelement angewendet, das die Sichtbarkeit des Objekts umschaltet.

Beispielsweise wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob seine untergeordnete Struktur angezeigt wird. Das übergeordnete Element steuert auch die Sichtbarkeit der zugehörigen untergeordneten Struktur.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) in Kombination mit `aria-expanded`. Die `aria-controls` und `aria-owns`-Eigenschaften zeigen die Beziehung zwischen dem steuernden Element und dem kontrollierten Element an. `aria-expanded` weist unterstützende Technologie darauf hin, ob das kontrollierte Element erweitert oder reduziert ist.

Verwenden Sie die `aria-owns`-Eigenschaft auf Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und reduzierbare Gruppierungscontainer nicht von dem Element besessen wird, das das `aria-expanded`-Attribut hat, verwenden Sie die `aria-controls`-Eigenschaft, um stattdessen auf den Gruppierungscontainer zu verweisen.

### Buttons

Ein Button, der ein Widget öffnet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des erweiterbaren Widgets setzen und `aria-expanded` auf den aktuellen Zustand des Widgets.

```html
<button aria-expanded="false" aria-controls="widget1">Show widget</button>
```

Wenn das Widget sichtbar ist, überträgt das kontrollierende Objekt diese Information, indem `aria-expanded="true"` darauf gesetzt wird. Der zugängliche Name des steuernden Objekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Hide widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) angezeigt wird, wird auf das Button-Objekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` gesetzt. Wenn das Menü verborgen ist, kann `aria-expanded` weggelassen werden. Wenn es angegeben ist, wenn das Menü verborgen ist, sollte es auf `aria-expanded="false"` gesetzt werden. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Combobox

Standardmäßig sind einige Rollen ausgeblendet oder standardmäßig reduziert, während andere Rollen standardmäßig geöffnet oder erweitert sind. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) haben einen Standardwert von `aria-expanded` von `false`. Wenn ein Combobox-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

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
> Das Vorhandensein des `aria-expanded`-Attributes zeigt Kontrolle an. Vermeiden Sie, es auf Elementen einzuschließen, die nicht den erweiterten Zustand anderer Elemente steuern.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role), das als übergeordneter Knoten dient, hat `aria-expanded="false"` im geschlossenen Zustand und `aria-expanded="true"` im geöffneten Zustand. Endknoten, Knoten ohne Nachkommen, sollten das `aria-expanded`-Attribut nicht haben, da sie andernfalls fälschlicherweise als übergeordnete Knoten durch unterstützende Technologien beschrieben würden.

### Zeilen

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) ist eine Zeile, die erweitert oder reduziert werden kann, um eine Gruppe von Kinderzeilen in einer Tabelle oder einem Raster anzuzeigen oder zu verbergen. Jede übergeordnete Zeile hat den `aria-expanded`-Zustand entweder auf dem Zeilenelement oder auf einer in der Zeile enthaltenen Zelle gesetzt. Wenn die Kinderzeilen verborgen sind, wird `aria-expanded="false"` gesetzt. `aria-expanded="true"` wird gesetzt, wenn die Kinderzeilen angezeigt werden. Zeilen, die die Anzeige von Kinderzeilen nicht steuern, sollten das `aria-expanded`-Attribut überhaupt nicht enthalten, da das Einschließen des Attributes diese Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist reduziert.

- `true`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist erweitert.

- `undefined` (Standard)
  - : Das Element besitzt oder steuert kein erweiterbares Gruppierungselement.

## Zugehörige Schnittstellen

- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-expanded`-Attributes wider.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-expanded`-Attributes wider.

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
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
