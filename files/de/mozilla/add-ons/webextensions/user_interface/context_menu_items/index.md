---
title: Kontextmenüelemente
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{AddonSidebar}}

Diese Benutzeroberflächenoption fügt einem Browser-Kontextmenü ein oder mehrere Elemente hinzu. Dies ist das Menü, das verfügbar ist, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Auch Tabs und Lesezeichen können Kontextmenüs haben, verfügbar über die {{WebExtAPIRef("menus")}} API.

![Beispiel von Kontextmenüelementen, die von einer WebExtension hinzugefügt wurden, aus dem Kontextmenü-Demo-Beispiel](context_menu_example.png)

Sie verwenden diese Option, um Funktionen bereitzustellen, die für bestimmte Browser- oder Webseitenkontexte relevant sind. Zum Beispiel können Sie Funktionen anzeigen, um einen Grafikeditor zu öffnen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion anbieten, um Seiteninhalte zu speichern, wenn ein Teil einer Seite ausgewählt wird. Sie können einfache Menüpunkte, Kontrollkästchen, Radiogruppen und Trennzeichen zu Menüs hinzufügen. Sobald ein Kontextmenüelement mit Hilfe von {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird es in allen Browser-Tabs angezeigt, aber Sie können es durch Entfernen mit {{WebExtAPIRef("menus.remove")}} ausblenden.

Die vollständige Liste der unterstützten Kontexte ist unter {{WebExtAPIRef("menus.ContextType")}} verfügbar und umfasst Kontexte außerhalb einer Webseite, wie z.B. Lesezeichen im Browser-UI. Zum Beispiel fügt die Erweiterung "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)" ein Menüelement hinzu, das es dem Benutzer ermöglicht, eine Lesezeichen-URL in einem neuen Container-Tab zu öffnen.

![Ein Kontextmenü mit hervorgehobenen "In neuem Container-Tab öffnen" Untermenü. Das Untermenü zeigt persönliche, Arbeits-, Bank-, Shopping- und Facebook-Kontextidentitäten. Oben im Untermenü gibt es eine Option, keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontextmenüs, die in Erweiterungsseiten angezeigt werden, wie benutzerdefinierte Seitenleisten und Popups, überschreiben, um entweder Tab- oder Lesezeichen-Kontextmenüs anstelle des Standard-Kontextmenüs zu verwenden, mit {{WebExtAPIRef("menus.overrideContext")}}. Dies ist eine hilfreiche Methode, wenn Ihre Erweiterung eine benutzerdefinierte Darstellung von Tabs oder Lesezeichen bietet. Das Menü umfasst automatisch Menüpunkte für alle anderen Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüelemente definiert haben. Sie können wählen, ob die Standard-Kontextmenüpunkte einbezogen werden sollen. Das Ausblenden der Standardpunkte gibt der Erweiterung die volle Kontrolle über die im gerenderten nativen Kontextmenü angezeigten Elemente, wie im Bild unten für die Tree Style Tab-Erweiterung gezeigt.

![Ein Tab-Kontextmenü, das für einen Tab-Artikel in der Seitenleiste der Tree Style Tab-Erweiterung angezeigt wird. Das Menü zeigt benutzerdefinierte Tab-Aktionen, ein Menüelement für die Erweiterung und ein Menüelement für die Simple Tab Group-Erweiterung.](custom_sidebar_tab_menu.png)

## Kontextmenüelemente spezifizieren

Sie verwalten Kontextmenüelemente programmatisch mithilfe der {{WebExtAPIRef("contextMenus")}} API. Sie müssen jedoch die Berechtigung `contextMenus` in Ihrer manifest.json anfordern, um die API nutzen zu können.

```json
"permissions": ["contextMenus"]
```

Sie können dann die Kontextmenüelemente im Hintergrundskript Ihrer Erweiterung hinzufügen (und aktualisieren oder löschen). Um ein Menüelement zu erstellen, geben Sie eine ID, seinen Titel und die Kontextmenüs, in denen es erscheinen soll, an:

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

Ihre Erweiterung lauscht dann auf Klicks auf die Menüpunkte. Die übermittelten Informationen über das angeklickte Element, den Kontext, in dem der Klick erfolgte, und Details des Tabs, in dem der Klick stattfand, können dann verwendet werden, um die entsprechende Erweiterungsfunktionalität aufzurufen.

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

## Symbole

Einzelheiten zur Erstellung von Symbolen für Ihr Kontextmenü finden Sie in [Ikonografie](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Kontextmenüelemente implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt mehrere Elemente zum Kontextmenü des Browsers hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt Links ein Kontextmenüelement hinzu, das die Link-URL in die Zwischenablage kopiert, sowohl als Klartext als auch als rich HTML.
