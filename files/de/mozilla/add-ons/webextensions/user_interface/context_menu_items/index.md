---
title: Kontextmenüelemente
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Diese Benutzeroberflächenoption fügt einem Browser-Kontextmenü ein oder mehrere Elemente hinzu. Dies ist das Menü, das verfügbar ist, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Auch Tabs und Lesezeichen können Kontextmenüs haben, die über die {{WebExtAPIRef("menus")}} API verfügbar sind.

![Beispiel für Kontextmenüelemente, die von einer WebExtension hinzugefügt wurden, aus dem Beispiel "context-menu-demo"](context_menu_example.png)

Sie verwenden diese Option, um Funktionen bereitzustellen, die für bestimmte Browser- oder Webseiten-Kontexte relevant sind. Beispielsweise können Sie Funktionen anzeigen, um einen Grafikeditor zu öffnen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion anbieten, um Seiteninhalte zu speichern, wenn ein Teil einer Seite ausgewählt wurde. Sie können einfache Menüpunkte, Kontrollkästchen, Optionsfeldgruppen und Trennlinien zu Menüs hinzufügen. Sobald ein Kontextmenüpunkt mit {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird er in allen Browser-Tabs angezeigt, kann jedoch durch Entfernen mit {{WebExtAPIRef("menus.remove")}} verborgen werden.

Die vollständige Liste der unterstützten Kontexte ist verfügbar unter {{WebExtAPIRef("menus.ContextType")}} und umfasst Kontexte außerhalb einer Webseite, wie z.B. Lesezeichenelemente in der Browser-Benutzeroberfläche. Zum Beispiel fügt die Erweiterung "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)" ein Menüelement hinzu, das dem Benutzer erlaubt, eine Lesezeichen-URL in einem neuen Container-Tab zu öffnen.

![Ein Kontextmenü mit hervorgehobenem Untermenü "open in new container tab". Das Untermenü zeigt persönliche, arbeitsbezogene, Banking-, Shopping- und Facebook-Kontextidentitäten. Es gibt oben im Untermenü eine Option, um keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontextmenüs, die auf Erweiterungsseiten angezeigt werden, wie benutzerdefinierte Seitenleisten und Popups, überschreiben, um entweder die Tab- oder Lesezeichen-Kontextmenüs anstelle des Standard-Kontextmenüs zu verwenden, mit {{WebExtAPIRef("menus.overrideContext")}}. Dies ist eine hilfreiche Methode, wenn Ihre Erweiterung eine benutzerdefinierte Darstellung von Tabs oder Lesezeichen bereitstellt. Das Menü enthält automatisch Menüelemente für alle anderen Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüelemente definiert haben. Sie können wählen, ob die Standard-Kontextmenüelemente enthalten sein sollen. Durch Ausblenden der Standard-Elemente erhält die Erweiterung die vollständige Kontrolle über die im gerenderten nativen Kontextmenü angezeigten Elemente, wie im Bild unten für die Tree Style Tab-Erweiterung gezeigt.

![Ein Tab-Kontextmenü, das für ein Tab-Element in der Seitenleiste der Tree Style Tab-Erweiterung angezeigt wird. Das Menü zeigt benutzerdefinierte Tab-Aktionen, ein Menüelement für die Erweiterung und ein Menüelement für die Simple Tab Group-Erweiterung.](custom_sidebar_tab_menu.png)

## Festlegen von Kontextmenüelementen

Sie verwalten Kontextmenüelemente programmgesteuert mit der {{WebExtAPIRef("contextMenus")}} API. Allerdings müssen Sie die Berechtigung `contextMenus` in Ihrer manifest.json anfordern, um die API nutzen zu können.

```json
"permissions": ["contextMenus"]
```

Sie können dann die Kontextmenüelemente im Hintergrundskript Ihrer Erweiterung hinzufügen (und aktualisieren oder löschen). Um ein Menüelement zu erstellen, geben Sie eine ID, seinen Titel und die Kontextmenüs an, in denen es angezeigt werden soll:

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

Ihre Erweiterung hört dann auf Klicks auf die Menüelemente. Die übergebene Information über das angeklickte Element, den Kontext, in dem der Klick stattgefunden hat, und Details des Tabs, in dem der Klick erfolgte, können dann verwendet werden, um die entsprechende Funktionalität der Erweiterung auszuführen.

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

Details zum Erstellen von Symbolen für Ihr Kontextmenü finden Sie unter [Iconography](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Kontextmenüelemente implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt dem Kontextmenü des Browsers mehrere Elemente hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt Links ein Kontextmenüelement hinzu, das die URL des Links in die Zwischenablage kopiert, sowohl als Klartext als auch als rich HTML.
