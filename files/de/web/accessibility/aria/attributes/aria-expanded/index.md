---
title: aria-expanded
slug: Web/Accessibility/ARIA/Attributes/aria-expanded
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Das Attribut `aria-expanded` wird auf ein Element gesetzt, um anzuzeigen, ob eine Steuerung erweitert oder eingeklappt ist und ob die kontrollierten Elemente angezeigt oder verborgen sind.

## Beschreibung

Es gibt mehrere Widgets, die erweitert und eingeklappt werden können, darunter Menüs, Dialoge und Akkordeon-Panels. Jedes dieser Objekte hat wiederum ein interaktives Element, das deren Öffnen und Schließen steuert. Das Attribut `aria-expanded` wird auf diese fokussierbare, interaktive Steuerung angewendet, die die Sichtbarkeit des Objekts umschaltet.

Beispielsweise wird `aria-expanded` auf das übergeordnete Element in einem DOM-Baum angewendet, um anzuzeigen, ob sein untergeordneter Zweig angezeigt wird. Der übergeordnete Knoten steuert ebenfalls die Sichtbarkeit des zugehörigen untergeordneten Zweigs.

Es gibt zwei Deklarationen, die auf Objekte angewendet werden können, die die Sichtbarkeit eines anderen Objekts steuern: [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) oder [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) in Kombination mit `aria-expanded`. Die Attribute `aria-controls` und `aria-owns` zeigen die Beziehung zwischen dem steuernden Element und dem kontrollierten Element an. Das Attribut `aria-expanded` zeigt der unterstützenden Technologie an, ob das kontrollierte Element erweitert oder eingeklappt ist.

Verwenden Sie die Eigenschaft `aria-owns` bei Elementen, die erweiterbare Gruppierungscontainer besitzen. Wenn der erweiterbare und einklappbare Gruppierungscontainer nicht von dem Element besessen wird, das das Attribut `aria-expanded` enthält, verwenden Sie stattdessen die Eigenschaft `aria-controls`, um auf den Gruppierungscontainer zu verweisen.

### Buttons

Ein Button, der ein Widget öffnet, sollte `aria-controls` auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des erweiterbaren Widgets setzen und `aria-expanded` auf den aktuellen Status des Widgets.

```html
<button aria-expanded="false" aria-controls="widget1">Widget anzeigen</button>
```

Wenn das Widget sichtbar ist, gibt das steuernde Objekt diese Information weiter, indem `aria-expanded="true"` darauf gesetzt wird. Der zugängliche Name des steuernden Objekts sollte diese Änderung widerspiegeln.

```html
<button aria-expanded="true" aria-controls="widget1">Widget verbergen</button>
```

### Menü

Wenn ein [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) angezeigt wird, ist das Button-Objekt, das die Sichtbarkeit dieses Menüs umschaltet, mit `aria-expanded="true"` versehen. Wenn das Menü verborgen ist, kann `aria-expanded` weggelassen werden. Wenn es angegeben wird, wenn das Menü verborgen ist, sollte `aria-expanded="false"` gesetzt sein. Wenn ein untergeordnetes Menü nicht sichtbar ist, hat sein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) `aria-expanded`. Es sollte auf `true` gesetzt werden, wenn das untergeordnete Menü sichtbar ist.

### Combobox

Standardmäßig sind einige Rollen versteckt oder eingeklappt, während andere Rollen standardmäßig geöffnet oder erweitert sind. Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) haben einen Standardwert für `aria-expanded` von `false`. Wenn ein Combobox-Popup nicht sichtbar ist, hat das Element mit der Rolle `combobox` `aria-expanded` auf `false` gesetzt. Dies ist der Standardzustand. Wenn das Popup-Element sichtbar ist, sollte `aria-expanded` auf `true` gesetzt werden.

```html
<label for="username">Benutzername</label>
<input id="username" name="username" aria-describedby="username-desc" />
<button
  aria-expanded="false"
  aria-controls="username-desc"
  aria-label="Hilfe zum Benutzernamen"
  type="button">
  <span aria-hidden="true">?</span>
</button>
<p id="username-desc" hidden>
  Ihr Benutzername ist der Name, den Sie verwenden, um sich bei diesem Dienst anzumelden.
</p>
```

> [!NOTE]
> Das Vorhandensein des `aria-expanded`-Attributs zeigt Kontrolle an. Vermeiden Sie es, es auf Elementen einzuschließen, die nicht den erweiterten Zustand anderer Elemente steuern.

### Treeitems

Jedes Element mit der Rolle [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role), das als übergeordnetes Element dient, hat `aria-expanded="false"`, wenn der Knoten geschlossen ist, und `aria-expanded="true"`, wenn der Knoten geöffnet ist. Endknoten, Knoten ohne Nachkommen, sollten das Attribut `aria-expanded` nicht haben, da sie, wenn sie es hätten, irrtümlich als Elternknoten an unterstützende Technologien beschrieben würden.

### Zeilen

Eine übergeordnete Zeile in einem [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role) ist eine Zeile, die erweitert oder eingeklappt werden kann, um eine Gruppe von untergeordneten Zeilen in einer Tabelle oder einem Raster anzuzeigen oder zu verbergen. Jede übergeordnete Zeile hat den `aria-expanded`-Status entweder auf das Zeilenelement oder auf eine Zelle in der Zeile gesetzt. Wenn die untergeordneten Zeilen verborgen sind, wird `aria-expanded="false"` gesetzt. `aria-expanded="true"` wird gesetzt, wenn die untergeordneten Zeilen angezeigt werden. Zeilen, die die Anzeige von untergeordneten Zeilen nicht steuern, sollten das Attribut `aria-expanded` überhaupt nicht enthalten, da das Einschließen des Attributs die Zeilen als übergeordnete Zeilen definiert.

## Werte

- `false`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist eingeklappt.

- `true`

  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist erweitert.

- `undefined` (Standard)
  - : Das Element besitzt oder steuert kein erweiterbares Gruppierungselement.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaExpanded")}}
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des Attributs `aria-expanded` wider.
- {{domxref("ElementInternals.ariaExpanded")}}
  - : Die [`ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des Attributs `aria-expanded` wider.

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
- HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes#hidden)
