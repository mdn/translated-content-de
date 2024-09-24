---
title: Kontextmenüelemente
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Diese Benutzeroberflächenoption fügt ein oder mehrere Elemente zu einem Kontextmenü des Browsers hinzu. Dies ist das Menü, das verfügbar ist, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Auch Tabs und Lesezeichen können Kontextmenüs haben, die über die {{WebExtAPIRef("menus")}} API verfügbar sind.

![Beispiel für Menüelemente, die von einer WebExtension zum Kontextmenü hinzugefügt wurden, aus dem Beispiel context-menu-demo](context_menu_example.png)

Sie verwenden diese Option, um Funktionen bereitzustellen, die für spezifische Browser- oder Webseitenkontexte relevant sind. Beispielsweise können Sie Funktionen anzeigen, um einen Grafikeditor zu öffnen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion anbieten, um Seiteninhalte zu speichern, wenn ein Teil einer Seite ausgewählt wird. Sie können einfache Menüpunkte, Kontrollkästenelemente, Radiobutton-Gruppen und Trennlinien zu Menüs hinzufügen. Sobald ein Kontextmenüelement mit {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird es in allen Browser-Tabs angezeigt, kann jedoch mit {{WebExtAPIRef("menus.remove")}} entfernt werden.

Die vollständige Liste der unterstützten Kontexte ist bei {{WebExtAPIRef("menus.ContextType")}} verfügbar und umfasst Kontexte außerhalb einer Webseite, wie beispielsweise Lesezeichen in der Browser-Benutzeroberfläche. Zum Beispiel fügt die Erweiterung "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)" ein Menüelement hinzu, das es dem Benutzer ermöglicht, eine Lesezeichen-URL in einem neuen Container-Tab zu öffnen.

![Ein Kontextmenü mit dem hervorgehobenen Untermenü "open in new container tab". Das Untermenü zeigt persönliche, Arbeits-, Bank-, Einkaufs- und Facebook-kontextuelle Identitäten. Es gibt eine Option oben im Untermenü, um keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontextmenüs überschreiben, die auf Erweiterungsseiten angezeigt werden, wie benutzerdefinierte Seitenleisten und Pop-ups, um entweder die Tab- oder Lesezeichen-Kontextmenüs anstelle des Standard-Kontextmenüs mit {{WebExtAPIRef("menus.overrideContext")}} zu verwenden. Dies ist eine hilfreiche Methode, wenn Ihre Erweiterung eine benutzerdefinierte Darstellung von Tabs oder Lesezeichen bietet. Das Menü enthält automatisch Menüelemente für alle anderen Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüelemente definiert haben. Sie können wählen, ob die Standard-Kontextmenüelemente enthalten werden sollen. Das Ausblenden der Standardelemente gibt der Erweiterung die vollständige Kontrolle über die im nativen Kontextmenü angezeigten Elemente, wie im Bild unten für die Erweiterung Tree Style Tab gezeigt.

![Ein Tab-Kontextmenü, das für ein Tab-Element in der Seitenleiste der Tree Style Tab-Erweiterung angezeigt wird. Das Menü zeigt benutzerdefinierte Tab-Aktionen, ein Menüelement für die Erweiterung und ein Menüelement für die Simple Tab Group-Erweiterung.](custom_sidebar_tab_menu.png)

## Kontextmenüelemente spezifizieren

Sie verwalten Kontextmenüelemente programmatisch mit der {{WebExtAPIRef("contextMenus")}} API. Sie müssen jedoch die Berechtigung `contextMenus` in Ihrer manifest.json anfordern, um die Vorteile der API nutzen zu können.

```json
"permissions": ["contextMenus"]
```

Sie können dann die Kontextmenüelemente im Hintergrund-Skript Ihrer Erweiterung hinzufügen (und aktualisieren oder löschen). Um ein Menüelement zu erstellen, spezifizieren Sie eine ID, ihren Titel und die Kontextmenüs, in denen es erscheinen soll:

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

Ihre Erweiterung lauscht dann auf Klicks auf die Menüelemente. Die übergebenen Informationen über das angeklickte Element, den Kontext, in dem der Klick erfolgte, und die Details des Tabs, in dem der Klick stattfand, können dann verwendet werden, um die entsprechende Erweiterungsfunktionalität aufzurufen.

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

Für Details zur Erstellung von Symbolen für die Verwendung mit Ihrem Kontextmenü, siehe [Iconography](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Kontextmenüelemente implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt mehrere Elemente zum Kontextmenü des Browsers hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt ein Kontextmenüelement zu Links hinzu, das die Link-URL als reinen Text und als Rich-HTML in die Zwischenablage kopiert.
