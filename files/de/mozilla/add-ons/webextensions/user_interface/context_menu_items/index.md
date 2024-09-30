---
title: Kontextmenüelemente
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Diese Benutzeroberflächenoption fügt ein oder mehrere Elemente zu einem Browser-Kontextmenü hinzu. Dies ist das Menü, das verfügbar ist, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Auch Tabs und Lesezeichen können Kontextmenüs haben, die über die {{WebExtAPIRef("menus")}} API verfügbar sind.

![Beispiel für Kontextmenüelemente, die von einer WebExtension hinzugefügt wurden, aus dem Beispiel des Kontextmenü-Demos](context_menu_example.png)

Mit dieser Option können Sie Funktionen zu spezifischen Browser- oder Webseiten-Kontexten hinzufügen. Zum Beispiel können Sie Funktionen anzeigen, um einen Grafikeditor zu öffnen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion anbieten, um Seiteninhalt zu speichern, wenn ein Teil einer Seite ausgewählt ist. Sie können einfache Menüpunkte, Kontrollkästchen, Optionsgruppenschaltflächen und Trennlinien zu Menüs hinzufügen. Sobald ein Kontextmenüpunkt mit {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird er in allen Browser-Tabs angezeigt. Sie können ihn jedoch ausblenden, indem Sie ihn mit {{WebExtAPIRef("menus.remove")}} entfernen.

Die vollständige Liste der unterstützten Kontexte ist unter {{WebExtAPIRef("menus.ContextType")}} verfügbar und umfasst auch Kontexte außerhalb einer Webseite, wie Lesezeichenelemente in der Browser-Benutzeroberfläche. Zum Beispiel fügt die Erweiterung "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)" ein Menüelement hinzu, das dem Benutzer ermöglicht, eine Lesezeichen-URL in einem neuen Container-Tab zu öffnen.

![Ein Kontextmenü mit dem hervorgehobenen Untermenü „in neuem Container-Tab öffnen“. Das Untermenü zeigt persönliche, Arbeits-, Banken-, Einkaufs- und Facebook-Kontextidentitäten. Oben im Untermenü gibt es eine Option, keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontextmenüs, die in Erweiterungsseiten angezeigt werden, wie benutzerdefinierte Seitenleisten und Popups, übersteuern, um entweder die Tab- oder Lesezeichen-Kontextmenüs anstelle des Standard-Kontextmenüs zu verwenden, mit {{WebExtAPIRef("menus.overrideContext")}}. Dies ist eine hilfreiche Methode, wenn Ihre Erweiterung eine benutzerdefinierte Präsentation von Tabs oder Lesezeichen bereitstellt. Das Menü enthält automatisch Menüelemente von anderen Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüs definiert haben. Sie können wählen, ob die Standard-Kontextmenüelemente eingeschlossen werden sollen. Durch Ausblenden der Standardelemente erhält die Erweiterung vollständige Kontrolle über die im nativen Kontextmenü angezeigten Elemente, wie im Bild unten für die Tree Style Tab-Erweiterung gezeigt.

![Ein Tab-Kontextmenü wird für ein Tab-Element in der Seitenleiste der Tree Style Tab-Erweiterung angezeigt. Das Menü zeigt benutzerdefinierte Tab-Aktionen, ein Menüpunktelement für die Erweiterung und ein Menüpunktelement für die Simple Tab Group-Erweiterung.](custom_sidebar_tab_menu.png)

## Definieren von Kontextmenüelementen

Sie verwalten Kontextmenüelemente programmgesteuert mit der {{WebExtAPIRef("contextMenus")}} API. Allerdings müssen Sie im manifest.json die `contextMenus`-Berechtigung anfordern, um die API nutzen zu können.

```json
"permissions": ["contextMenus"]
```

Dann können Sie die Kontextmenüelemente im Hintergrundskript Ihrer Erweiterung hinzufügen (und aktualisieren oder löschen). Um ein Menüelement zu erstellen, müssen Sie eine ID, seinen Titel und die Kontextmenüs angeben, in denen es erscheinen soll:

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

Ihre Erweiterung horcht dann auf Klicks auf die Menüpunkte. Die übergebenen Informationen über das angeklickte Element, den Kontext, in dem der Klick stattfand, und die Details des Tabs, in dem der Klick erfolgte, können dann verwendet werden, um die entsprechende Erweiterungsfunktionalität auszulösen.

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

Für Einzelheiten darüber, wie Sie Symbole für Ihr Kontextmenü erstellen können, sehen Sie sich die [Ikonografie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) im [Acorn Design System](https://acorn.firefox.com/latest) an.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält zwei Beispiele von Erweiterungen, die Kontextmenüelemente implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt mehrere Elemente zum Kontextmenü des Browsers hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt Links ein Kontextmenüelement hinzu, das die Link-URL in die Zwischenablage kopiert, als Klartext und reiches HTML.
