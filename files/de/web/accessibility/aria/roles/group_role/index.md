---
title: "ARIA: group Rolle"
slug: Web/Accessibility/ARIA/Roles/group_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `group` Rolle identifiziert eine Gruppe von Benutzeroberflächenobjekten, die nicht dazu bestimmt sind, in eine Seitenzusammenfassung oder ein Inhaltsverzeichnis durch unterstützende Technologien aufgenommen zu werden.

## Beschreibung

Am engsten verwandt mit dem HTML-Element {{HTMLElement('fieldset')}}, wird die `group` Rollenstruktur verwendet, um eine Gruppe von Benutzeroberflächenobjekten zu identifizieren, die im Vergleich zu [`region`](/de/docs/Web/Accessibility/ARIA/Roles/region_role) nicht dazu bestimmt ist, in die Zusammenfassung oder das Inhaltsverzeichnis der Seite aufgenommen zu werden.

Die `group` Rolle sollte verwendet werden, um eine logische Sammlung von Elementen mit verwandter Funktionalität zu bilden, wie zum Beispiel Kinder in einem [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role) Widget, die eine Sammlung von Geschwistern in einer Hierarchie bilden, oder eine Sammlung von Elementen, die denselben Container in einem [`directory`](/de/docs/Web/Accessibility/ARIA/Roles/directory_role) haben.

Wenn `group` im Kontext einer [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) verwendet wird, begrenzen Sie die Kinder der `group` auf [`listitem`](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role) Elemente. In diesem Fall wird empfohlen, mehrere geordnete oder ungeordnete Listen, {{HTMLElement('ol')}} oder {{HTMLElement('ul')}}, mit verschachtelten {{HTMLElement('li')}} Kindern zu verwenden.

Wird sie im Kontext einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role) verwendet, sind nur {{HTMLElement('option')}} Elemente als Kinder erlaubt. In diesem Fall wird empfohlen, {{HTMLElement('select')}}, {{HTMLElement('option')}} und {{HTMLElement('optgroup')}} anstelle zu verwenden.

`Group`-Elemente können verschachtelt sein.

Die `group` Rolle sollte nicht für bedeutende wahrnehmbare Abschnitte einer Seite verwendet werden. Wenn ein Abschnitt bedeutend genug ist, um in das Inhaltsverzeichnis der Seite aufgenommen zu werden, verwenden Sie die `region` Rolle oder eine Standard-[Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles).

Wenn die Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Gruppenevent an Produkte der unterstützenden Technologie, die den Benutzer dann darüber benachrichtigen können.

## Beispiele

Das folgende HTML-Beispiel verwendet die `group` Rolle mit einer `tree` Ansicht:

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img role="presentation" tabindex="-1" src="images/treeExpanded.gif" />
    <span role="treeitem" tabindex="0">Animals</span>
  </div>
  <div id="animalGroup" role="group">
    <div id="birds" role="treeitem">
      <span tabindex="-1">Birds</span>
    </div>
    <div
      id="cats"
      class="groupHeader"
      role="presentation"
      aria-owns="catGroup"
      aria-expanded="false">
      <img role="presentation" tabindex="-1" src="images/treeContracted.gif" />
      <span role="treeitem" tabindex="0">Cats</span>
    </div>
    <div id="catGroup" role="group">
      <div id="siamese" role="treeitem">
        <span tabindex="-1">Siamese</span>
      </div>
      <div id="tabby" role="treeitem">
        <span tabindex="-1">Tabby</span>
      </div>
    </div>
  </div>
</div>
```

Das folgende Beispiel verwendet die `group` Rolle mit einem Dropdown-[`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role), das [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)s enthält:

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">Inbox</li>
    <li role="menuitem">Archive</li>
    <li role="menuitem">Trash</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Custom Folder 1</li>
    <li role="menuitem">Custom Folder 2</li>
    <li role="menuitem">Custom Folder 3</li>
  </ul>
  <ul role="group">
    <li role="menuitem">New Folder</li>
  </ul>
</div>
```

Dieses Menü könnte unter Verwendung von {{HTMLElement('select')}} und {{HTMLElement('option')}} Elementen konstruiert werden. In diesem Fall wäre die `group` Rolle am ehesten mit dem {{HTMLElement('optgroup')}} Element vergleichbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('fieldset')}} Element
- [ARIA: `section` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `row` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA: `select` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/select_role)
- [ARIA: `toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
