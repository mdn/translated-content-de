---
title: "ARIA: group-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/group_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `group`-Rolle identifiziert eine Reihe von Benutzeroberflächen-Objekten, die von unterstützenden Technologien nicht dazu gedacht sind, in eine Seitenzusammenfassung oder ein Inhaltsverzeichnis aufgenommen zu werden.

## Beschreibung

Am engsten mit dem {{HTMLElement('fieldset')}}-Element von HTML verwandt, wird die `group`-Dokumentstrukturrolle verwendet, um eine Reihe von Benutzeroberflächen-Objekten zu identifizieren, die im Vergleich zur [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) nicht dazu gedacht sind, in die Zusammenfassung der Seite oder das Inhaltsverzeichnis aufgenommen zu werden.

Die `group`-Rolle sollte verwendet werden, um eine logische Sammlung von Elementen mit zusammenhängender Funktionalität zu bilden, wie z.B. Kinder in einem [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)-Widget, die eine Sammlung von Geschwistern in einer Hierarchie bilden, oder eine Sammlung von Elementen, die denselben Container in einem [`directory`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role) haben.

Wenn eine `group` im Kontext einer [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) verwendet wird, beschränken Sie die Kinder der `group` auf [`listitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)-Elemente. In diesem Fall wird empfohlen, mehrere geordnete oder ungeordnete Listen, {{HTMLElement('ol')}} oder {{HTMLElement('ul')}}, mit verschachtelten {{HTMLElement('li')}}-Kindern zu verwenden.

Wenn sie im Kontext einer [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) verwendet wird, sind die einzigen zulässigen Kinder {{HTMLElement('option')}}-Elemente. In diesem Fall wird empfohlen, {{HTMLElement('select')}}, {{HTMLElement('option')}} und {{HTMLElement('optgroup')}} zu verwenden.

`Group`-Elemente können verschachtelt werden.

Die `group`-Rolle sollte nicht für wesentliche wahrnehmbare Abschnitte einer Seite verwendet werden. Wenn ein Abschnitt wichtig genug ist, um in das Inhaltsverzeichnis der Seite aufgenommen zu werden, verwenden Sie die `region`-Rolle oder eine standardmäßige [landmark role](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles).

Wenn die Rolle einem Element hinzugefügt wird, sendet der Browser ein zugängliches Gruppenereignis an unterstützende Technologieprodukte, die dann den Benutzer darüber informieren können.

## Beispiele

Das folgende HTML-Codebeispiel verwendet die `group`-Rolle mit einer `tree`-Ansicht:

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

Das folgende Beispiel verwendet die `group`-Rolle mit einem Drop-down-[`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), das [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)s enthält:

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

Dieses Menü könnte unter Verwendung von {{HTMLElement('select')}} und {{HTMLElement('option')}}-Elementen konstruiert werden. In diesem Fall wäre die `group`-Rolle am ehesten mit dem {{HTMLElement('optgroup')}}-Element vergleichbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('fieldset')}}-Element
- [ARIA: `section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: `select`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [ARIA: `toolbar`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
