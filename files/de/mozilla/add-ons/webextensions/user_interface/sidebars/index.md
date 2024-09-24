---
title: Seitenleisten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Eine Seitenleiste ist ein Bereich, der am Rand des Browserfensters neben der Webseite angezeigt wird. Diese Seite beschreibt Seitenleisten, wie sie spezifiziert, gestaltet und verwendet werden können.

Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, eine Seitenleiste zur Anzeige auszuwählen. Beispielsweise hat Firefox das Menü "Ansicht" > "Seitenleiste". Jedes Browserfenster kann seine eigene Seitenleiste anzeigen, die in jedem Tab im Fenster angezeigt wird.

Der Browser kann eine Reihe von integrierten Seitenleisten enthalten. Zum Beispiel enthält Firefox eine Seitenleiste zur Interaktion mit Lesezeichen:

![Annotator-Seitenleiste mit einem Feld, das dem Benutzer ermöglicht, Notizen zur Seite zu machen.](bookmarks-sidebar.png)

Mithilfe des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Schlüssels in manifest.json kann eine Erweiterung ihre eigene Seitenleiste zum Browser hinzufügen. Sie wird neben den integrierten Seitenleisten aufgelistet, und der Benutzer kann sie mit demselben Mechanismus wie die integrierten Seitenleisten öffnen.

Wie ein Browser-Aktions-Popup wird der Inhalt der Seitenleiste als ein HTML-Dokument angegeben. Wenn der Benutzer die Seitenleiste öffnet, wird das Dokument der Seitenleiste in jedes geöffnete Browserfenster geladen. Jedes Fenster erhält seine eigene Instanz des Dokuments. Wenn neue Fenster geöffnet werden, erhalten sie ebenfalls ihre eigenen Seitenleiste-Dokumente.

Ein Dokument für einen bestimmten Tab kann mithilfe der {{WebExtAPIRef("sidebarAction.setPanel()")}} Funktion festgelegt werden. Eine Seitenleiste kann herausfinden, zu welchem Fenster sie gehört, indem sie die {{WebExtAPIRef("windows.getCurrent()")}} API verwendet:

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Dies ist nützlich, wenn eine Seitenleiste für verschiedene Fenster unterschiedliche Inhalte anzeigen möchte. Ein Beispiel dafür finden Sie im ["annotate-page" Beispiel](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

Seitenleisten-Dokumente erhalten Zugriff auf denselben Satz von privilegierten JavaScript-APIs, die auch den Hintergrund- und Popup-Skripten der Erweiterung zur Verfügung stehen. Sie können direkten Zugriff auf die Hintergrundseite erhalten (es sei denn, die Seitenleiste gehört zu einem Fenster im Inkognito-Modus), indem sie {{WebExtAPIRef("runtime.getBackgroundPage()")}} verwenden, und können mit Inhalts-Skripten oder nativen Anwendungen über Messaging-APIs wie {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("runtime.sendNativeMessage()")}} interagieren.

Seitenleisten-Dokumente werden entladen, wenn ihr Browserfenster geschlossen wird oder wenn der Benutzer die Seitenleiste schließt. Das bedeutet, dass im Gegensatz zu Hintergrundseiten, Seitenleisten-Dokumente nicht die ganze Zeit geladen bleiben, aber im Gegensatz zu Browser-Aktions-Popups bleiben sie geladen, während der Benutzer mit Webseiten interagiert.

Wenn eine Erweiterung, die eine Seitenleiste definiert, erstmals installiert wird, wird ihre Seitenleiste automatisch geöffnet. Dies soll dem Benutzer helfen zu verstehen, dass die Erweiterung eine Seitenleiste enthält. Beachten Sie, dass es für eine Erweiterung nicht möglich ist, Seitenleisten programmatisch zu öffnen: Seitenleisten können nur vom Benutzer geöffnet werden.

## Seitenleisten spezifizieren

Um eine Seitenleiste anzugeben, definieren Sie das Standarddokument mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Schlüssel in manifest.json, zusammen mit einem Standardtitel und Icon:

```json
"sidebar_action": {
  "default_title": "Meine Seitenleiste",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Der Titel, das Panel und das Icon können programmatisch mit der {{WebExtAPIRef("sidebarAction")}} API geändert werden.

Titel und Icon werden dem Benutzer in jeder von dem Browser bereitgestellten UI zur Auflistung von Seitenleisten angezeigt, wie z.B. im "Ansicht > Seitenleiste" Menü in Firefox.

## Seitenleisten-Design

Einzelheiten dazu, wie Sie die Webseite einer Seitenleiste gestalten, um dem Stil von Firefox zu entsprechen, finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiel

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page) Beispiel, das eine Seitenleiste implementiert.
