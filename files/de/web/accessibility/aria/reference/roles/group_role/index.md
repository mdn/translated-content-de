---
title: "ARIA: Rolle group"
short-title: group
slug: Web/Accessibility/ARIA/Reference/Roles/group_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Die Rolle `group` kennzeichnet eine Gruppe von Benutzeroberflächenobjekten, die von Hilfstechnologien nicht in eine Seitenübersicht oder ein Inhaltsverzeichnis aufgenommen werden soll.

## Beschreibung

Die Rolle `group` für die Dokumentstruktur ist am ehesten mit dem HTML-Element {{HTMLElement('fieldset')}} vergleichbar. Sie kennzeichnet eine Gruppe von Benutzeroberflächenobjekten, die – anders als eine [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) – nicht in die Seitenübersicht oder das Inhaltsverzeichnis aufgenommen werden soll.

Die Rolle `group` sollte verwendet werden, um Elemente mit zusammengehöriger Funktionalität logisch zu gruppieren. Dazu gehören beispielsweise untergeordnete Elemente in einem [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)-Widget, die auf derselben Hierarchieebene stehen, oder Elemente mit demselben übergeordneten Element in einem [`directory`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role).

Wenn eine `group` im Kontext einer [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) verwendet wird, sollten ihre untergeordneten Elemente auf [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)-Elemente beschränkt sein. In diesem Fall empfiehlt es sich, mehrere geordnete oder ungeordnete Listen, {{HTMLElement('ol')}} oder {{HTMLElement('ul')}}, mit verschachtelten {{HTMLElement('li')}}-Elementen zu verwenden.

Im Kontext einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) sind nur {{HTMLElement('option')}}-Elemente als untergeordnete Elemente zulässig. In diesem Fall empfiehlt es sich, stattdessen {{HTMLElement('select')}}, {{HTMLElement('option')}} und {{HTMLElement('optgroup')}} zu verwenden.

Elemente mit der Rolle `group` können ineinander verschachtelt sein.

Die Rolle `group` sollte nicht für wichtige, wahrnehmbare Abschnitte einer Seite verwendet werden. Wenn ein Abschnitt wichtig genug ist, um im Inhaltsverzeichnis der Seite aufgeführt zu werden, verwenden Sie die Rolle `region` oder eine standardmäßige [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles).

Wenn einem Element die Rolle zugewiesen wird, sendet der Browser ein Ereignis für eine barrierefrei zugängliche Gruppe an Hilfstechnologien, die den Benutzer darüber informieren können.

## Beispiele

Das folgende HTML-Codebeispiel verwendet die Rolle `group` in einer `tree`-Ansicht:

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

Das folgende Beispiel verwendet die Rolle `group` in einem aufklappbaren [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) mit [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)-Elementen:

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

Dieses Menü könnte mit den Elementen {{HTMLElement('select')}} und {{HTMLElement('option')}} erstellt werden. In diesem Fall wäre die Rolle `group` am ehesten mit dem Element {{HTMLElement('optgroup')}} vergleichbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('fieldset')}}
- [ARIA: Rolle `graphics-object`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA: Rolle `section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: Rolle `row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: Rolle `select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [ARIA: Rolle `toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
