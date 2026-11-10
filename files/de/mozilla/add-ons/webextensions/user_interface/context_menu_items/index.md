---
title: Kontextmenüeinträge
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Mit dieser Benutzeroberflächenoption fügen Sie einem Browser-Kontextmenü einen oder mehrere Einträge hinzu. Dieses Menü erscheint, wenn ein Benutzer mit der rechten Maustaste auf eine Webseite klickt. Auch Tabs und Lesezeichen können Kontextmenüs haben, die über die {{WebExtAPIRef("menus")}} API verfügbar sind.

![Beispiel für Kontextmenüeinträge, die vom Beispiel menu-demo hinzugefügt wurden](context_menu_example.png)

Mit dieser Option stellen Sie Funktionen bereit, die für bestimmte Kontexte im Browser oder auf einer Webseite relevant sind. Beispielsweise können Sie eine Funktion zum Öffnen eines Grafikeditors anzeigen, wenn der Benutzer auf ein Bild klickt, oder eine Funktion zum Speichern von Seiteninhalten anbieten, wenn ein Teil der Seite ausgewählt ist. Sie können einfache Menüeinträge, Kontrollkästchen, Optionsfeldgruppen und Trennlinien zu Menüs hinzufügen. Sobald ein Kontextmenüeintrag mit {{WebExtAPIRef("menus.create")}} hinzugefügt wurde, wird er in allen Browser-Tabs angezeigt. Sie können ihn jedoch ausblenden, indem Sie ihn mit {{WebExtAPIRef("menus.remove")}} entfernen.

Die vollständige Liste der unterstützten Kontexte finden Sie unter {{WebExtAPIRef("menus.ContextType")}}. Sie umfasst auch Kontexte außerhalb einer Webseite, etwa Lesezeicheneinträge in der Browseroberfläche. Die Erweiterung „[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)“ fügt beispielsweise einen Menüeintrag hinzu, mit dem Benutzer die URL eines Lesezeichens in einem neuen Container-Tab öffnen können.

![Ein Lesezeichen-Kontextmenü in der Lesezeichen-Seitenleiste von Firefox, in dem das Untermenü „Open in a New Container Tab“ der Erweiterung hervorgehoben ist. Das Untermenü zeigt die kontextuellen Identitäten „Privat“, „Arbeit“, „Banking“ und „Einkaufen“ sowie oben eine Option, keinen Container auszuwählen.](extension_context_menu.png)

Sie können auch die Kontextmenüs überschreiben, die auf Erweiterungsseiten wie benutzerdefinierten Seitenleisten und Pop-ups angezeigt werden. Mit {{WebExtAPIRef("menus.overrideContext")}} können Sie dort statt des Standard-Kontextmenüs das Tab- oder Lesezeichen-Kontextmenü verwenden. Das ist hilfreich, wenn Ihre Erweiterung Tabs oder Lesezeichen auf eigene Weise darstellt. Das Menü enthält automatisch auch Menüeinträge anderer Erweiterungen, die Tab- oder Lesezeichen-Kontextmenüeinträge definiert haben. Sie können festlegen, ob die Standard-Kontextmenüeinträge enthalten sein sollen. Wenn Sie die Standardeinträge ausblenden, hat Ihre Erweiterung die vollständige Kontrolle über die Einträge im angezeigten nativen Kontextmenü, wie das folgende Bild für die Erweiterung Tree Style Tab zeigt.

![Ein Tab-Kontextmenü für einen Tab-Eintrag in der Seitenleiste der Erweiterung Tree Style Tab. Das Menü zeigt Tab-Aktionen, einen Menüeintrag „Tree of tabs“ für die Erweiterung und einen Menüeintrag „Move tab to group“ für die Erweiterung Simple Tab Groups.](custom_sidebar_tab_menu.png)

## Kontextmenüeinträge festlegen

Sie verwalten Kontextmenüeinträge programmatisch mit der {{WebExtAPIRef("contextMenus")}} API. Um die API nutzen zu können, müssen Sie jedoch in Ihrer manifest.json die Berechtigung `contextMenus` anfordern.

```json
"permissions": ["contextMenus"]
```

Anschließend können Sie Kontextmenüeinträge im Hintergrundskript Ihrer Erweiterung hinzufügen, aktualisieren oder löschen. Zum Erstellen eines Menüeintrags geben Sie eine ID, einen Titel und die Kontextmenüs an, in denen er erscheinen soll:

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

Ihre Erweiterung reagiert dann auf Klicks auf die Menüeinträge. Anhand der übergebenen Informationen zum angeklickten Eintrag, zum Kontext des Klicks und zum Tab, in dem der Klick stattfand, können Sie die entsprechende Funktion der Erweiterung aufrufen.

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

Wie Sie Icons für Ihr Kontextmenü erstellen, erfahren Sie unter [Ikonografie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation des [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält zwei Beispiele für Erweiterungen, die Kontextmenüeinträge implementieren:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) fügt dem Kontextmenü des Browsers mehrere Einträge hinzu.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) fügt für Links einen Kontextmenüeintrag hinzu, der die Link-URL als einfachen Text und als Rich HTML in die Zwischenablage kopiert.
