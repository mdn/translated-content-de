---
title: Sidebars
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
l10n:
  sourceCommit: a85c2674f303680e9729f4965c3971b440565e98
---

Ein Sidebar ist ein Bereich, der am Rand des Browserfensters neben der Webseite angezeigt wird. Diese Seite beschreibt Sidebars, deren Spezifikation, Gestaltung und Anwendungsbeispiele.

Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, eine Sidebar zur Anzeige auszuwählen. Beispielsweise verfügt Firefox über das Menü "Ansicht" > "Sidebar". Jedes Browserfenster kann seine eigene Sidebar anzeigen, die auf jedem Tab in dem Fenster dargestellt wird.

Der Browser kann eine Anzahl von eingebauten Sidebars enthalten. Beispielsweise enthält Firefox eine Sidebar zur Interaktion mit Lesezeichen:

![Annotator-Sidebar mit einem Feld, das dem Benutzer erlaubt, Notizen zur Seite zu machen.](bookmarks-sidebar.png)

Mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel kann eine Erweiterung ihre eigene Sidebar zum Browser hinzufügen. Sie wird neben den eingebauten Sidebars aufgeführt und der Benutzer kann sie mit dem gleichen Mechanismus wie die eingebauten Sidebars öffnen.

Wie ein Popup für Browseraktionen sind die Inhalte der Sidebar als HTML-Dokument spezifiziert. Wenn der Benutzer die Sidebar öffnet, wird das Dokument der Sidebar in jedes offene Browserfenster geladen. Jedes Fenster erhält seine eigene Instanz des Dokuments. Wenn neue Fenster geöffnet werden, erhalten auch sie ihre eigenen Sidebar-Dokumente.

Ein Dokument für einen bestimmten Tab kann mit der Funktion {{WebExtAPIRef("sidebarAction.setPanel()")}} festgelegt werden. Eine Sidebar kann ermitteln, zu welchem Fenster sie gehört, indem sie die API {{WebExtAPIRef("windows.getCurrent()")}} verwendet:

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Dies ist nützlich, wenn eine Sidebar in verschiedenen Fenstern unterschiedliche Inhalte anzeigen möchte. Ein Beispiel hierfür finden Sie im ["annotate-page" Beispiel](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

Sidebar-Dokumente erhalten Zugriff auf denselben Satz an privilegierten JavaScript-APIs, die auch den Hintergrund- und Popup-Skripten der Erweiterung zur Verfügung stehen. Sie können über {{WebExtAPIRef("runtime.getBackgroundPage()")}} direkten Zugriff auf die Hintergrundseite erhalten (es sei denn, die Sidebar gehört zu einem Inkognito-Fenster) und können über Messaging-APIs wie {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("runtime.sendNativeMessage()")}} mit Inhalts-Skripten oder nativen Anwendungen interagieren.

Sidebar-Dokumente werden entladen, wenn ihr Browserfenster geschlossen oder wenn die Sidebar vom Benutzer geschlossen wird. Dies bedeutet, dass im Gegensatz zu Hintergrundseiten Sidebar-Dokumente nicht ständig geladen bleiben, aber im Gegensatz zu Browseraktions-Popups bleiben sie geladen, während der Benutzer mit Webseiten interagiert.

Wenn eine Erweiterung, die eine Sidebar definiert, erstmals installiert wird, wird ihre Sidebar automatisch geöffnet. Dies soll dem Benutzer helfen zu verstehen, dass die Erweiterung eine Sidebar enthält.

## Spezifikation von Sidebars

Um eine Sidebar zu spezifizieren, definieren Sie das Standarddokument mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel, zusammen mit einem Standardtitel und einem Icon:

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Der Titel, das Panel und das Icon können programmatisch mit der {{WebExtAPIRef("sidebarAction")}} API geändert werden.

Titel und Icon werden dem Benutzer in jeder vom Browser bereitgestellten Benutzeroberfläche zur Auflistung von Sidebars angezeigt, z. B. im Menü "Ansicht > Sidebar" in Firefox.

## Sidebar-Gestaltung

Einzelheiten zur Gestaltung einer Webseite für eine Sidebar, die dem Stil von Firefox entspricht, finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiel

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page) Beispiel, das eine Sidebar implementiert.
