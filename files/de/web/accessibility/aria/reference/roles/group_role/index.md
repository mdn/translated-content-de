---
title: "ARIA: group-Rolle"
short-title: group
slug: Web/Accessibility/ARIA/Reference/Roles/group_role
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

Die `group`-Rolle identifiziert eine Gruppe von Benutzeroberflächenobjekten, die nicht dazu gedacht sind, als Seitenszusammenfassung oder Inhaltsverzeichnis von unterstützenden Technologien aufgenommen zu werden.

## Beschreibung

Die `group`-Dokumentenstrukturrolle ist am engsten mit dem HTML-Element {{HTMLElement('fieldset')}} verwandt und wird verwendet, um eine Gruppe von Benutzeroberflächenobjekten zu identifizieren, die im Vergleich zur [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) nicht in die Seitenszusammenfassung oder das Inhaltsverzeichnis aufgenommen werden soll.

Die `group`-Rolle sollte verwendet werden, um eine logische Sammlung von Elementen mit verwandter Funktionalität zu bilden, wie z.B. Kinder in einem [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)-Widget, die eine Geschwistersammlung in einer Hierarchie bilden, oder eine Sammlung von Elementen, die denselben Container in einem [`directory`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role) haben.

Wenn eine `group` im Kontext einer [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) verwendet wird, sollten die Kinder der `group` auf [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)-Elemente beschränkt werden. In diesem Fall wird empfohlen, mehrere geordnete oder ungeordnete Listen, {{HTMLElement('ol')}} oder {{HTMLElement('ul')}}, mit geschachtelten {{HTMLElement('li')}}-Kindern zu verwenden.

Wenn sie im Kontext einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) verwendet wird, sind nur {{HTMLElement('option')}}-Elemente als Kinder zulässig. In diesem Fall wird empfohlen, {{HTMLElement('select')}}, {{HTMLElement('option')}} und {{HTMLElement('optgroup')}} zu verwenden.

`Group`-Elemente können verschachtelt sein.

Die `group`-Rolle sollte nicht für bedeutende wahrnehmbare Abschnitte einer Seite verwendet werden. Wenn ein Abschnitt bedeutend genug ist, um in das Inhaltsverzeichnis der Seite aufgenommen zu werden, verwenden Sie die `region`-Rolle oder eine standardmäßige [landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles).

Wenn die Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Gruppenereignis an unterstützende Technologielösungen, die den Benutzer dann darüber informieren können.

## Beispiele

Das folgende HTML-Codebeispiel verwendet die `group`-Rolle in einer `tree`-Ansicht:

```html
<div id="tree1" role="tree" tabindex="-1">
  <div
    id="animals"
    class="groupHeader"
    role="presentation"
    aria-owns="animalGroup"
    aria-expanded="true">
    <img
      role="presentation"
      tabindex="-1"
      src="images/treeExpanded.gif"
      alt="" />
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
      <img
        role="presentation"
        tabindex="-1"
        src="images/treeContracted.gif"
        alt="" />
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

Das folgende Beispiel verwendet die `group`-Rolle mit einem Dropdown-[`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), das [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) enthält:

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

Dieses Menü könnte mit {{HTMLElement('select')}} und {{HTMLElement('option')}}-Elementen konstruiert werden. In diesem Fall wäre die `group`-Rolle der ähnlichen Funktionalität des {{HTMLElement('optgroup')}}-Elements am nächsten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('fieldset')}}-Element
- [ARIA: `section` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `row` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: `select` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [ARIA: `toolbar` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
