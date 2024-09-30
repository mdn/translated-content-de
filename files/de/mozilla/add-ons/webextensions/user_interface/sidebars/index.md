---
title: Seitenleisten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Eine Seitenleiste ist ein Bereich, der seitlich im Browserfenster neben der Webseite angezeigt wird. Diese Seite beschreibt Seitenleisten, wie man sie spezifiziert, entwirft und Anwendungsbeispiele.

Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, eine Seitenleiste auszuwählen, die angezeigt werden soll. Beispielsweise verfügt Firefox über das Menü "Ansicht" > "Sidebar". Jedes Browserfenster kann seine eigene Seitenleiste anzeigen, die in jedem Tab des Fensters angezeigt wird.

Der Browser kann eine Reihe von integrierten Seitenleisten enthalten. Beispielsweise enthält Firefox eine Seitenleiste zur Interaktion mit Lesezeichen:

![Annotator-Seitenleiste mit einem Feld, das es dem Benutzer ermöglicht, Anmerkungen zur Seite zu machen.](bookmarks-sidebar.png)

Mithilfe des Manifests.json-Schlüssels [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) kann eine Erweiterung ihre eigene Seitenleiste zum Browser hinzufügen. Sie wird neben den integrierten Seitenleisten aufgeführt, und der Benutzer kann sie mit dem gleichen Mechanismus wie die integrierten Seitenleisten öffnen.

Wie bei einem „Browser Action“-Popup werden die Inhalte der Seitenleiste als HTML-Dokument spezifiziert. Wenn der Benutzer die Seitenleiste öffnet, wird das Dokument der Seitenleiste in jedem offenen Browserfenster geladen. Jedes Fenster erhält seine eigene Instanz des Dokuments. Wenn neue Fenster geöffnet werden, erhalten auch sie eigene Seitenleistentexte.

Ein Dokument für einen bestimmten Tab kann mit der Funktion {{WebExtAPIRef("sidebarAction.setPanel()")}} festgelegt werden. Eine Seitenleiste kann mithilfe der API {{WebExtAPIRef("windows.getCurrent()")}} herausfinden, zu welchem Fenster sie gehört:

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Dies ist nützlich, wenn eine Seitenleiste für unterschiedliche Fenster unterschiedliche Inhalte anzeigen möchte. Für ein Beispiel dazu, siehe das ["annotate-page" Beispiel](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

Seitenleistentexte haben Zugriff auf denselben Satz privilegierter JavaScript-APIs, den auch die Hintergrund- und Popup-Skripte der Erweiterung erhalten. Sie können direkten Zugriff auf die Hintergrundseite erhalten (sofern die Seitenleiste nicht zu einem Inkognito-Modus-Fenster gehört) mithilfe von {{WebExtAPIRef("runtime.getBackgroundPage()")}}, und können mit Inhalts-Skripten oder nativen Anwendungen über Messaging-APIs wie {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("runtime.sendNativeMessage()")}} interagieren.

Seitenleistentexte werden entladen, wenn ihr Browserfenster geschlossen wird oder wenn der Benutzer die Seitenleiste schließt. Das bedeutet, dass im Gegensatz zu Hintergrundseiten Seitenleistentexte nicht die ganze Zeit geladen bleiben, aber im Gegensatz zu „Browser Action“-Popups bleiben sie geladen, während der Benutzer mit Webseiten interagiert.

Wenn eine Erweiterung, die eine Seitenleiste definiert, erstmals installiert wird, wird ihre Seitenleiste automatisch geöffnet. Dies soll dem Benutzer helfen zu verstehen, dass die Erweiterung eine Seitenleiste enthält. Beachten Sie, dass es nicht möglich ist, dass eine Erweiterung Seitenleisten programmgesteuert öffnet: Seitenleisten können nur vom Benutzer geöffnet werden.

## Spezifizierung von Seitenleisten

Um eine Seitenleiste zu spezifizieren, definieren Sie das Standarddokument mit dem Manifests.json-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) zusammen mit einem Standardtitel und -symbol:

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Titel, Panel und Symbol können programmgesteuert mithilfe der {{WebExtAPIRef("sidebarAction")}} API geändert werden.

Titel und Symbol werden dem Benutzer in jeder vom Browser bereitgestellten Benutzeroberfläche zum Auflisten von Seitenleisten gezeigt, wie im Menü „Ansicht > Sidebar“ in Firefox.

## Design der Seitenleiste

Einzelheiten dazu, wie Sie das Webseitendesign einer Seitenleiste an den Stil von Firefox anpassen können, finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiel

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page) Beispiel, das eine Seitenleiste implementiert.
