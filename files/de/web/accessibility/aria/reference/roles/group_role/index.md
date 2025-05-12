---
title: "ARIA: Rolle `group`"
short-title: group
slug: Web/Accessibility/ARIA/Reference/Roles/group_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `group` identifiziert eine Gruppe von Benutzeroberflächen-Objekten, die nicht von assistiven Technologien in einer Seitenzusammenfassung oder einem Inhaltsverzeichnis berücksichtigt werden sollen.

## Beschreibung

Am engsten verwandt mit dem HTML-Element {{HTMLElement('fieldset')}}, wird die Dokumentstrukturrolle `group` verwendet, um eine Gruppe von Benutzeroberflächen-Objekten zu identifizieren, die im Vergleich zu [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) nicht in die Zusammenfassung der Seite oder das Inhaltsverzeichnis aufgenommen werden soll.

Die Rolle `group` sollte verwendet werden, um eine logische Sammlung von Elementen mit verwandter Funktionalität zu bilden, wie z.B. Kinder in einem [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)-Widget, die eine Sammlung von Geschwistern in einer Hierarchie bilden, oder eine Sammlung von Elementen, die im selben Container in einem [`directory`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role) enthalten sind.

Wenn ein `group` im Kontext einer [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) verwendet wird, beschränken Sie die Kinder des `group` auf [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)-Elemente. In diesem Fall wird empfohlen, mehrere geordnete oder ungeordnete Listen, {{HTMLElement('ol')}} oder {{HTMLElement('ul')}}, mit verschachtelten {{HTMLElement('li')}}-Kindern zu verwenden.

Wenn sie im Kontext eines [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) verwendet werden, sind nur {{HTMLElement('option')}} Elemente als Kinder zulässig. In diesem Fall wird empfohlen, {{HTMLElement('select')}}, {{HTMLElement('option')}} und {{HTMLElement('optgroup')}} zu verwenden.

`Group`-Elemente können verschachtelt werden.

Die Rolle `group` sollte nicht für wesentliche wahrnehmbare Abschnitte einer Seite verwendet werden. Wenn ein Abschnitt so signifikant ist, dass er in das Inhaltsverzeichnis der Seite aufgenommen werden sollte, verwenden Sie die Rolle `region` oder eine Standard-[Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles).

Wenn die Rolle zu einem Element hinzugefügt wird, sendet der Browser ein zugängliches Gruppenereignis an assistive Technologien, die den Benutzer darüber informieren können.

## Beispiele

Das folgende HTML-Codebeispiel verwendet die Rolle `group` mit einer `tree`-Sicht:

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

Das nächste Beispiel verwendet die Rolle `group` mit einem Dropdown-[`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), das [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)s enthält:

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

Dieses Menü könnte mit {{HTMLElement('select')}} und {{HTMLElement('option')}}-Elementen konstruiert werden. In diesem Fall wäre die Rolle `group` am ähnlichsten dem Element {{HTMLElement('optgroup')}}.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('fieldset')}} Element
- [ARIA: `section` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `row` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: `select` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [ARIA: `toolbar` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
