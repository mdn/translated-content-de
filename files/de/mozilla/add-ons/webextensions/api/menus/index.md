---
title: Menüs
slug: Mozilla/Add-ons/WebExtensions/API/menus
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fügen Sie Elemente zum Menüsystem des Browsers hinzu.

Diese API basiert auf der ["contextMenus"](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API von Chrome, die es Chrome-Erweiterungen ermöglicht, Elemente zum Kontextmenü des Browsers hinzuzufügen. Die `browser.menus` API fügt der API von Chrome einige Funktionen hinzu.

Vor Firefox 55 wurde diese API ebenfalls ursprünglich `contextMenus` genannt, und dieser Name wurde als Alias beibehalten, sodass Sie `contextMenus` verwenden können, um Code zu schreiben, der sowohl in Firefox als auch in anderen Browsern funktioniert.

Um diese API zu verwenden, müssen Sie die Berechtigung `menus` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen. Sie können auch den Alias `contextMenus` anstelle von `menus` verwenden. In diesem Fall müssen die APIs jedoch als `browser.contextMenus` aufgerufen werden.

Mit Ausnahme von [`menus.getTargetElement()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement) kann diese API nicht von Inhalts-Skripten aus verwendet werden.

## Erstellen von Menüelementen

Um ein Menüelement zu erstellen, rufen Sie die Methode {{WebExtAPIRef("menus.create()")}} auf. Sie übergeben dieser Methode ein Objekt, das Optionen für das Element enthält, einschließlich der Element-ID, des Elementtyps und der Kontexte, in denen es angezeigt werden soll.

In einer Firefox-Erweiterung, die nicht-persistente [Hintergrundseiten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) (Ereignisseiten) verwendet, oder in einer beliebigen Chrome-Erweiterung, rufen Sie `menus.create` innerhalb eines {{WebExtAPIRef("runtime.onInstalled")}} Listener auf. In einer Firefox-Erweiterung, die persistente Hintergrundseiten verwendet, machen Sie einen top-level Aufruf. Siehe {{WebExtAPIRef("menus.create()")}} für weitere Informationen.

Hören Sie auf Klicks auf Ihr Menüelement, indem Sie einen Listener zum {{WebExtAPIRef("menus.onClicked")}} Ereignis hinzufügen. Dieser Listener erhält ein {{WebExtAPIRef("menus.OnClickData")}} Objekt mit den Details des Ereignisses.

Sie können vier verschiedene Typen von Menüelementen erstellen, basierend auf dem Wert der `type` Eigenschaft, die Sie den Optionen bei `create()` übergeben:

- "normal": ein Menüelement, das nur eine Bezeichnung anzeigt
- "checkbox": ein Menüelement, das einen binären Zustand darstellt. Es zeigt ein Häkchen neben der Bezeichnung an. Ein Klick auf das Element wechselt das Häkchen. Der Klick-Listener erhält zwei zusätzliche Eigenschaften: "checked", das anzeigt, ob das Element jetzt markiert ist, und "wasChecked", das anzeigt, ob das Element vor dem Klickereignis markiert war.
- "radio": ein Menüelement, das eine von mehreren Auswahlmöglichkeiten darstellt. Genau wie ein Kontrollkästchen zeigt es auch ein Häkchen neben der Bezeichnung an, und sein Klick-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radioelement erstellen, funktionieren die Elemente als Gruppe von Radioelementen: nur ein Element in der Gruppe kann markiert werden, und ein Klick auf ein Element macht es zum markierten Element.
- "separator": eine Linie, die eine Gruppe von Elementen trennt.

Wenn Sie mehr als ein Kontextmenüelement oder mehr als ein Toolmenüelement erstellt haben, werden die Elemente in einem Untermenü platziert. Der Elternteil des Untermenüs wird mit dem Namen der Erweiterung beschriftet. Zum Beispiel, hier ist eine Erweiterung namens "Menü-Demo", die zwei Kontextmenüelemente hinzugefügt hat:

![Kontextmenü mit zwei Elementen, die als klicke mich und klicke mich auch! bezeichnet sind](menus-1.png)

## Symbole

Wenn Sie Symbole für Ihre Erweiterung mit dem ["icons"-Manifestkey](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) angegeben haben, wird Ihr Menüelement das angegebene Symbol neben der Bezeichnung anzeigen. Der Browser versucht, ein 16x16 Pixel großes Symbol für eine normale Anzeige oder ein 32x32 Pixel großes Symbol für eine hochdichte Anzeige auszuwählen:

![Kontextmenü mit zwei Elementen, die als klicke mich und klicke mich auch! bezeichnet sind](menus-2.png)

Nur für Elemente in einem Untermenü können Sie benutzerdefinierte Symbole angeben, indem Sie die `icons` Option an {{WebExtAPIRef("menus.create()")}} übergeben:

![Kontextmenü mit zwei Elementen, die als klicke mich und klicke mich auch! bezeichnet sind. Die Option klicke mich ist mit einem grünen Farbeimer-Symbol beschriftet. Die Option klicke mich auch ist mit einem blauen Farbeimer-Symbol beschriftet.](menus-3.png)

## Beispiel

Hier ist ein Kontextmenü mit 4 Elementen: ein normales Element, zwei Radioelemente mit Trennern auf jeder Seite und ein Kontrollkästchen. Die Radioelemente haben benutzerdefinierte Symbole.

![Kontextmenü mit vier Elementen, die als entferne mich, Grün machen, Blau machen und nicht markieren bezeichnet sind. Grün machen und Blau machen sind Radiobuttons mit benutzerdefinierten Symbolen.](menus-4.png)

Sie könnten ein Untermenü wie dieses mit einem Code wie diesem erstellen:

```js
browser.menus.create(
  {
    id: "remove-me",
    title: browser.i18n.getMessage("menuItemRemoveMe"),
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-1",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "greenify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemGreenify"),
    contexts: ["all"],
    checked: true,
    icons: {
      16: "icons/paint-green-16.png",
      32: "icons/paint-green-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "bluify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemBluify"),
    contexts: ["all"],
    checked: false,
    icons: {
      16: "icons/paint-blue-16.png",
      32: "icons/paint-blue-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-2",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

let checkedState = true;

browser.menus.create(
  {
    id: "check-uncheck",
    type: "checkbox",
    title: browser.i18n.getMessage("menuItemUncheckMe"),
    contexts: ["all"],
    checked: checkedState,
  },
  onCreated,
);
```

## Typen

- {{WebExtAPIRef("menus.ContextType")}}
  - : Die verschiedenen Kontexte, in denen ein Menü erscheinen kann.
- {{WebExtAPIRef("menus.ItemType")}}
  - : Der Typ des Menüelements: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informationen, die gesendet werden, wenn ein Menüelement angeklickt wird.

## Eigenschaften

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : Die maximale Anzahl der obersten Erweiterungselemente, die zu einem Menüelement hinzugefügt werden können, dessen Kontexttyp "browser_action" oder "page_action" ist.

## Funktionen

- {{WebExtAPIRef("menus.create()")}}
  - : Erstellt ein neues Menüelement.
- {{WebExtApiRef("menus.getTargetElement()")}}
  - : Gibt das Element für eine gegebene `info.targetElementId` zurück.
- {{WebExtApiRef("menus.overrideContext()")}}
  - : Alle Standard-Firefox-Menüelemente ausblenden, um eine benutzerdefinierte Kontextmenü-Oberfläche bereitzustellen.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Aktualisieren Sie ein Menü, das momentan angezeigt wird.
- {{WebExtAPIRef("menus.remove()")}}
  - : Entfernt ein Menüelement.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Entfernt alle von dieser Erweiterung hinzugefügten Menüelemente.
- {{WebExtAPIRef("menus.update()")}}
  - : Aktualisiert ein zuvor erstelltes Menüelement.

## Ereignisse

- {{WebExtAPIRef("menus.onClicked")}}
  - : Wird ausgelöst, wenn ein Menüelement angeklickt wird.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Wird ausgelöst, wenn der Browser ein Menü ausblendet.
- {{WebExtAPIRef("menus.onShown")}}
  - : Wird ausgelöst, wenn der Browser ein Menü anzeigt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus) API. Diese Dokumentation wird abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
