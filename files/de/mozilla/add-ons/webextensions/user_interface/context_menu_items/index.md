---
title: Kontextmenüelemente
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Diese Benutzeroberflächenoption fügt einem Browserkontextmenü ein oder mehrere Elemente hinzu. Dies ist das Menü, das verfügbar ist, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Auch Tabs und Lesezeichen können Kontextsmenüs haben, die über die {{WebExtAPIRef("menus")}} API verfügbar sind.

![Beispiel für Inhaltsmenüelemente, die von einer WebExtension hinzugefügt wurden, aus dem Beispiel für das Kontextmenü-Demo](context_menu_example.png)

Sie verwenden diese Option, um Funktionen bereitzustellen, die für bestimmte Browser- oder Webseitkontexte relevant sind. Beispielsweise können Sie Funktionen anzeigen, um einen Grafikeditor zu öffnen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion anbieten, um Seiteninhalte zu speichern, wenn ein Teil einer Seite ausgewählt ist. Sie können einfache Menüelemente, Kontrollkästchen, Radiogruppen und Trennlinien zu Menüs hinzufügen. Sobald ein Kontextmenüelement mit {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird es in allen Browser-Tabs angezeigt. Sie können es jedoch ausblenden, indem Sie es mit {{WebExtAPIRef("menus.remove")}} entfernen.

Die vollständige Liste der unterstützten Kontexte ist unter {{WebExtAPIRef("menus.ContextType")}} verfügbar und umfasst auch Kontexte außerhalb einer Webseite, wie z.B. Lesezeichenelemente in der Browser-Benutzeroberfläche. Ein Beispiel dafür ist die Erweiterung "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)", die ein Menüelement hinzufügt, das es dem Benutzer ermöglicht, eine Lesezeichen-URL in einem neuen Container-Tab zu öffnen.

![Ein Kontextmenü mit "in neuem Container-Tab öffnen" Untermenü hervorgehoben. Das Untermenü zeigt persönliche, Arbeits-, Bank-, Einkaufs- und Facebook-Kontextidentitäten. Es gibt eine Option oben im Untermenü, um keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontexte der Menüs, die auf Erweiterungsseiten angezeigt werden, überschreiben, wie z.B. benutzerdefinierte Seitenleisten und Popups, um entweder die Tab- oder Lesezeichen-Kontextmenüs anstelle des Standardkontextmenüs zu verwenden, mit {{WebExtAPIRef("menus.overrideContext")}}. Dies ist eine hilfreiche Methode, wenn Ihre Erweiterung eine benutzerdefinierte Präsentation von Tabs oder Lesezeichen bereitstellt. Das Menü enthält automatisch Menüelemente für alle anderen Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüelemente definiert haben. Sie können wählen, ob Sie die Standardkontextmenüelemente einschließen möchten. Das Ausblenden der Standardelemente gibt der Erweiterung die vollständige Kontrolle über die Elemente, die im gerenderten nativen Kontextmenü angezeigt werden, wie im Bild unten für die Tree Style Tab-Erweiterung gezeigt.

![Ein Tab-Kontextmenü, das für ein Tab-Element in der Seitenleiste der Tree Style Tab-Erweiterung angezeigt wird. Das Menü zeigt benutzerdefinierte Tab-Aktionen, ein Menüelement für die Erweiterung und ein Menüelement für die Simple Tab Group-Erweiterung.](custom_sidebar_tab_menu.png)

## Spezifizierung der Kontextmenüelemente

Sie verwalten Kontextmenüelemente programmgesteuert mit der {{WebExtAPIRef("contextMenus")}} API. Allerdings müssen Sie in Ihrer manifest.json die Berechtigung `contextMenus` anfordern, um die Vorteile der API nutzen zu können.

```json
"permissions": ["contextMenus"]
```

Sie können dann die Kontextmenüelemente im Hintergrundskript Ihrer Erweiterung hinzufügen (und aktualisieren oder löschen). Um ein Menüelement zu erstellen, geben Sie eine ID, deren Titel und die Kontextmenüs, in denen es angezeigt werden soll, an:

```js
browser.contextMenus.create(
  {
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"],
  },
  onCreated,
);
```

Ihre Erweiterung hört dann auf Klicks auf die Menüelemente. Die übergebenen Informationen über das angeklickte Element, den Kontext, in dem der Klick erfolgte, und Details des Tabs, in dem der Klick stattfand, können dann verwendet werden, um die entsprechende Erweiterungsfunktionalität aufzurufen.

```js
browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    // …
  }
});
```

## Icons

Für Details zur Erstellung von Icons für Ihr Kontextmenü lesen Sie [Iconografie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Kontextmenüelemente implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt mehrere Elemente zum Kontextmenü des Browsers hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt Links ein Kontextmenüelement hinzu, das die Link-URL in die Zwischenablage kopiert, als Klartext und reiches HTML.
