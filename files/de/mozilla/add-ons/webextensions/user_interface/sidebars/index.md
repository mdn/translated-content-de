---
title: Seitenleisten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Eine Seitenleiste ist ein Bereich, der an der Seite des Browserfensters neben der Webseite angezeigt wird. Diese Seite beschreibt Seitenleisten, ihre Spezifizierung, Gestaltung und Anwendungsbeispiele.

Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, eine Seitenleiste zur Anzeige auszuwählen. Beispielsweise verfügt Firefox über das Menü "Ansicht" > "Seitenleiste". Jedes Browserfenster kann seine eigene Seitenleiste anzeigen, die in jedem Tab des Fensters angezeigt wird.

Der Browser kann eine Reihe integrierter Seitenleisten enthalten. Beispielsweise enthält Firefox eine Seitenleiste zur Interaktion mit Lesezeichen:

![Annotator-Seitenleiste mit einem Feld, das es dem Benutzer ermöglicht, Notizen zur Seite zu machen.](bookmarks-sidebar.png)

Mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel kann eine Erweiterung ihre eigene Seitenleiste zum Browser hinzufügen. Sie wird zusammen mit den integrierten Seitenleisten aufgelistet, und der Benutzer kann sie mit demselben Mechanismus wie die integrierten Seitenleisten öffnen.

Wie bei einem Browser-Aktions-Popup werden die Inhalte der Seitenleiste als HTML-Dokument angegeben. Wenn der Benutzer die Seitenleiste öffnet, wird das Dokument der Seitenleiste in jedes offene Browserfenster geladen. Jedes Fenster erhält seine eigene Instanz des Dokuments. Wenn neue Fenster geöffnet werden, erhalten auch sie ihre eigenen Seitenleistendokumente.

Ein Dokument für einen bestimmten Tab kann mit der Funktion {{WebExtAPIRef("sidebarAction.setPanel()")}} festgelegt werden. Eine Seitenleiste kann herausfinden, zu welchem Fenster sie gehört, indem sie die API {{WebExtAPIRef("windows.getCurrent()")}} verwendet:

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Dies ist nützlich, wenn eine Seitenleiste unterschiedliche Inhalte für verschiedene Fenster anzeigen möchte. Für ein Beispiel hierzu siehe das ["annotate-page"-Beispiel](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

Seitenleistendokumente haben Zugriff auf denselben Satz privilegierter JavaScript-APIs, den auch die Hintergrund- und Popup-Skripte der Erweiterung erhalten. Sie können direkten Zugriff auf die Hintergrundseite erhalten (es sei denn, die Seitenleiste gehört zu einem Fenster im Inkognito-Modus), indem sie {{WebExtAPIRef("runtime.getBackgroundPage()")}} verwenden, und können mit Inhalts-Skripten oder nativen Anwendungen über Messaging-APIs wie {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("runtime.sendNativeMessage()")}} interagieren.

Seitenleistendokumente werden entladen, wenn ihr Browserfenster geschlossen wird oder wenn der Benutzer die Seitenleiste schließt. Das bedeutet, dass sie im Gegensatz zu Hintergrundseiten nicht die ganze Zeit geladen bleiben, aber im Gegensatz zu Browseraktions-Popups bleiben sie geladen, während der Benutzer mit Webseiten interagiert.

Wenn eine Erweiterung, die eine Seitenleiste definiert, erstmals installiert wird, wird ihre Seitenleiste automatisch geöffnet. Dies soll dem Benutzer helfen zu verstehen, dass die Erweiterung eine Seitenleiste enthält. Beachten Sie, dass es nicht möglich ist, dass eine Erweiterung Seitenleisten programmatisch öffnet: Seitenleisten können nur vom Benutzer geöffnet werden.

## Spezifizierung von Seitenleisten

Um eine Seitenleiste zu spezifizieren, definieren Sie das Standarddokument mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json-Schlüssel, zusammen mit einem Standardtitel und -symbol:

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Titel und Symbol können programmgesteuert mit der API {{WebExtAPIRef("sidebarAction")}} geändert werden.

Titel und Symbol werden dem Benutzer in jeder vom Browser bereitgestellten Benutzeroberfläche zur Auflistung von Seitenleisten angezeigt, wie etwa im Menü "Ansicht > Seitenleiste" in Firefox.

## Gestaltung der Seitenleiste

Für Details, wie Sie die Webseite einer Seitenleiste so gestalten, dass sie dem Stil von Firefox entspricht, siehe die [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiel

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page) Beispiel, das eine Seitenleiste implementiert.
