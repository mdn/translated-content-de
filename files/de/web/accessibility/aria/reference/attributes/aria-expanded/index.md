---
title: "ARIA: Attribut aria-expanded"
short-title: aria-expanded
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
l10n:
  sourceCommit: 8bc4e3fe45532906246a760bff0b06b7cd105c52
---

Das Attribut `aria-expanded` wird für ein Element festgelegt, um anzugeben, ob ein Steuerelement erweitert oder eingeklappt ist und ob die gesteuerten Elemente angezeigt oder ausgeblendet werden.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und eingeklappt werden können, darunter Menüs, Dialoge und Akkordeonbereiche. Jedes dieser Objekte verfügt wiederum über ein interaktives Element, das sein Öffnen und Schließen steuert. Das Attribut `aria-expanded` wird auf dieses fokussierbare, interaktive Steuerelement angewendet, das die Sichtbarkeit des Objekts umschaltet.

Beispielsweise wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzugeben, ob sein untergeordneter Zweig angezeigt wird. Das übergeordnete Element steuert ebenfalls die Sichtbarkeit des zugehörigen untergeordneten Zweigs.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, welche die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) in Kombination mit `aria-expanded`. `aria-controls` und `aria-owns` zeigen die Beziehung zwischen dem steuernden Element und dem gesteuerten Element an. `aria-expanded` teilt assistiven Technologien mit, ob das gesteuerte Element erweitert oder eingeklappt ist.

Verwenden Sie die Eigenschaft `aria-owns` für die Elemente, denen erweiterbare Gruppierungscontainer gehören. Wenn der erweiterbare und einklappbare Gruppierungscontainer nicht dem Element gehört, das das Attribut `aria-expanded` besitzt, verwenden Sie stattdessen die Eigenschaft `aria-controls`, um auf den Gruppierungscontainer zu verweisen.

### Buttons

Ein Button, der ein Widget umschaltet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des umgeschalteten Widgets und `aria-expanded` auf den aktuellen Zustand des Widgets gesetzt haben.

```html
<button aria-expanded="false" aria-controls="widget1">Toggle widget</button>
```

Wenn das Widget sichtbar ist, übermittelt das steuernde Objekt diese Information, indem `aria-expanded="true"` darauf gesetzt ist. Der zugängliche Name des steuernden Objekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Toggle widget</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) angezeigt wird, ist für das Button-Objekt, das die Sichtbarkeit dieses Menüs umschaltet, `aria-expanded="true"` festgelegt. Wenn das Menü ausgeblendet ist, kann `aria-expanded` weggelassen werden. Wenn es bei ausgeblendetem Menü angegeben wird, sollte es auf `aria-expanded="false"` gesetzt sein. Wenn ein untergeordnetes Menü nicht sichtbar ist, besitzt dessen übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt sein, wenn das untergeordnete Menü sichtbar ist.

### Combobox

Standardmäßig sind einige Rollen ausgeblendet oder eingeklappt, während andere Rollen standardmäßig geöffnet oder erweitert sind. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) haben für `aria-expanded` einen Standardwert von `false`. Wenn ein Combobox-Popup nicht sichtbar ist, ist für das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

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
  Your username is the name that you use to log into this service.
</p>
```

> [!NOTE]
> Das Vorhandensein des Attributs `aria-expanded` weist auf eine Steuerung hin. Vermeiden Sie es, dieses Attribut auf Elemente anzuwenden, die den erweiterten Zustand anderer Elemente nicht steuern.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role), das als übergeordneter Knoten dient, hat `aria-expanded="false"`, wenn sich der Knoten in einem geschlossenen Zustand befindet, und `aria-expanded="true"`, wenn sich der Knoten in einem offenen Zustand befindet. Endknoten, also Knoten ohne untergeordnete Knoten, sollten das Attribut `aria-expanded` nicht besitzen, da sie andernfalls von assistiven Technologien fälschlicherweise als übergeordnete Knoten beschrieben würden.

### Zeilen

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) ist eine Zeile, die erweitert oder eingeklappt werden kann, um eine Gruppe untergeordneter Zeilen in einer Tabelle oder einem Grid anzuzeigen oder auszublenden. Für jede übergeordnete Zeile ist der Zustand `aria-expanded` entweder auf dem Zeilenelement oder auf einer in der Zeile enthaltenen Zelle festgelegt. Wenn die untergeordneten Zeilen ausgeblendet sind, wird `aria-expanded="false"` gesetzt. `aria-expanded="true"` wird gesetzt, wenn die untergeordneten Zeilen angezeigt werden. Zeilen, die die Anzeige untergeordneter Zeilen nicht steuern, sollten das Attribut `aria-expanded` überhaupt nicht enthalten, da das Hinzufügen dieses Attributs die Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`
  - : Das Gruppierungselement, das diesem Element gehört oder von ihm gesteuert wird, ist eingeklappt.

- `true`
  - : Das Gruppierungselement, das diesem Element gehört oder von ihm gesteuert wird, ist erweitert.

- `undefined` (Standard)
  - : Das Element besitzt oder steuert kein Gruppierungselement, das erweitert werden kann.

## Zugehörige Schnittstellen

- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Die Eigenschaft [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded), Teil der Schnittstelle [`Element`](/de/docs/Web/API/Element), spiegelt den Wert des Attributs `aria-expanded` wider.
- [`ElementInternals.ariaExpanded`](/de/docs/Web/API/ElementInternals/ariaExpanded)
  - : Die Eigenschaft [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded), Teil der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals), spiegelt den Wert des Attributs `aria-expanded` wider.

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

Vererbt an Rollen:

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
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
