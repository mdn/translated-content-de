---
title: Kontextmenü-Elemente
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Diese Benutzeroberflächenoption fügt einem Browser-Kontextmenü ein oder mehrere Elemente hinzu. Dies ist das Menü, das verfügbar ist, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Registerkarten und Lesezeichen können ebenfalls Kontextmenüs haben, die über die {{WebExtAPIRef("menus")}} API verfügbar sind.

![Beispiel für durch eine WebExtension hinzugefügte Menüeinträge, aus dem Beispiel context-menu-demo](context_menu_example.png)

Sie verwenden diese Option, um Funktionen bereitzustellen, die für bestimmte Browser- oder Webseiten-Kontexte relevant sind. Beispielsweise können Sie Funktionen zum Öffnen eines Grafikeditors anzeigen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion zum Speichern von Seiteninhalten anbieten, wenn ein Teil einer Seite ausgewählt wurde. Sie können einfache Menüelemente, Kontrollkästchen, Radiobutton-Gruppen und Trennstriche zu Menüs hinzufügen. Sobald ein Kontextmenü-Element mit {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird es in allen Browser-Tabs angezeigt, kann jedoch mit {{WebExtAPIRef("menus.remove")}} wieder entfernt werden.

Die vollständige Liste der unterstützten Kontexte finden Sie unter {{WebExtAPIRef("menus.ContextType")}} und enthält Kontexte außerhalb einer Webseite, wie beispielsweise Lesezeichenelemente in der Browser-Benutzeroberfläche. Ein Beispiel ist die Erweiterung "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)", die ein Menüelement hinzufügt, mit dem der Benutzer eine Lesezeichen-URL in einem neuen Container-Tab öffnen kann.

![Ein Kontextmenü mit dem hervorgehobenen Untermenü "Open in new container tab". Das Untermenü zeigt persönliche, arbeitsbezogene, Bank-, Einkaufs- und Facebook-Kontextidentitäten. Oben im Untermenü gibt es eine Option, um keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontextmenüs, die in Erweiterungsseiten angezeigt werden, wie z. B. benutzerdefinierte Seitenleisten und Popups, überschreiben, um entweder die Tab- oder Lesezeichen-Kontextmenüs anstelle des standardmäßigen Kontextmenüs zu verwenden, mit {{WebExtAPIRef("menus.overrideContext")}}. Diese Methode ist hilfreich, wenn Ihre Erweiterung eine benutzerdefinierte Darstellung von Tabs oder Lesezeichen bietet. Das Menü enthält automatisch Menüelemente für alle anderen Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüelemente definiert haben. Sie können entscheiden, ob die standardmäßigen Kontextmenüelemente einbezogen werden sollen. Das Ausblenden der Standardelemente gibt der Erweiterung die vollständige Kontrolle über die im gerenderten nativen Kontextmenü angezeigten Elemente, wie im Bild unten für die Tree Style Tab-Erweiterung gezeigt.

![Ein Tab-Kontextmenü, das für ein Tab-Element in der Seitenleiste der Tree Style Tab-Erweiterung angezeigt wird. Das Menü zeigt benutzerdefinierte Tab-Aktionen, ein Menüelement für die Erweiterung und ein Menüelement für die Simple Tab Group-Erweiterung.](custom_sidebar_tab_menu.png)

## Kontextmenü-Elemente spezifizieren

Sie verwalten Kontextmenü-Elemente programmgesteuert mit der {{WebExtAPIRef("contextMenus")}} API. Sie müssen jedoch die `contextMenus` Berechtigung in Ihrer manifest.json anfordern, um die API nutzen zu können.

```json
"permissions": ["contextMenus"]
```

Anschließend können Sie die Kontextmenü-Elemente im Hintergrundskript Ihrer Erweiterung hinzufügen (und aktualisieren oder löschen). Um ein Menüelement zu erstellen, spezifizieren Sie eine ID, dessen Titel und die Kontextmenüs, in denen es erscheinen soll:

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

Ihre Erweiterung lauscht dann auf Klicks auf die Menüelemente. Die übergebenen Informationen über das angeklickte Element, den Kontext, in dem der Klick stattfand, und Details des Tabs, in dem der Klick erfolgte, können dann verwendet werden, um die entsprechende Erweiterungsfunktionalität aufzurufen.

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

Informationen dazu, wie Sie Symbole erstellen, die Sie mit Ihrem Kontextmenü verwenden können, finden Sie unter [Iconography](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält zwei Beispiele für Erweiterungen, die Kontextmenüeinträge implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt mehrere Elemente zum Kontextmenü des Browsers hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt einem Kontextmenüeintrag für Links hinzu, der die Link-URL in die Zwischenablage kopiert, als Klartext und reichhaltiges HTML.
