---
title: Seitenleisten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Eine Seitenleiste ist ein Fensterbereich, der an der Seite des Browserfensters neben der Webseite angezeigt wird. Diese Seite beschreibt Seitenleisten, deren Spezifizierung, Gestaltung und Beispiele für deren Nutzung.

Der Browser stellt eine Benutzeroberfläche zur Verfügung, die es dem Nutzer ermöglicht, eine Seitenleiste zur Anzeige auszuwählen. Zum Beispiel hat Firefox das Menü "Ansicht" > "Seitenleiste". Jedes Browserfenster kann seine eigene Seitenleiste anzeigen, die in jedem Tab im Fenster dargestellt wird.

Der Browser kann eine Anzahl von integrierten Seitenleisten enthalten. Zum Beispiel beinhaltet Firefox eine Seitenleiste für die Interaktion mit Lesezeichen:

![Annotator-Seitenleiste mit einem Feld, das dem Nutzer erlaubt, Notizen zur Seite zu machen.](bookmarks-sidebar.png)

Mithilfe des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Schlüssels in der manifest.json-Datei kann eine Erweiterung ihre eigene Seitenleiste zum Browser hinzufügen. Sie wird neben den integrierten Seitenleisten aufgelistet und der Nutzer kann sie mit demselben Mechanismus öffnen wie die integrierten Seitenleisten.

Ähnlich wie ein Popup für Browseraktionen werden die Inhalte der Seitenleiste als HTML-Dokument spezifiziert. Wenn der Nutzer die Seitenleiste öffnet, wird das Dokument der Seitenleiste in jedes offene Browserfenster geladen. Jedes Fenster erhält seine eigene Instanz des Dokuments. Wenn neue Fenster geöffnet werden, erhalten diese ebenfalls ihre eigenen Seitenleistendokumente.

Ein Dokument für einen speziellen Tab kann mit der Funktion {{WebExtAPIRef("sidebarAction.setPanel()")}} festgelegt werden. Eine Seitenleiste kann herausfinden, zu welchem Fenster sie gehört, indem sie die API {{WebExtAPIRef("windows.getCurrent()")}} verwendet:

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Das ist nützlich, wenn eine Seitenleiste unterschiedliche Inhalte für verschiedene Fenster anzeigen möchte. Für ein Beispiel dafür, siehe das ["annotate-page" Beispiel](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

Seitenleistendokumente haben Zugriff auf das gleiche Set von privilegierten JavaScript-APIs, auf das auch die Hintergrund- und Popup-Skripte der Erweiterung zugreifen können. Sie können direkten Zugriff auf die Hintergrundseite erhalten (es sei denn, die Seitenleiste gehört zu einem Inkognito-Fenster) durch {{WebExtAPIRef("runtime.getBackgroundPage()")}} und können mit Inhaltsskripten oder nativen Anwendungen über Messaging-APIs wie {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("runtime.sendNativeMessage()")}} interagieren.

Seitenleistendokumente werden entladen, wenn ihr Browserfenster geschlossen wird oder der Nutzer die Seitenleiste schließt. Das bedeutet, dass im Gegensatz zu Hintergrundseiten die Seitenleistendokumente nicht die ganze Zeit geladen bleiben, aber im Gegensatz zu Popups für Browseraktionen bleiben sie geladen, während der Nutzer mit Webseiten interagiert.

Wenn eine Erweiterung, die eine Seitenleiste definiert, erstmals installiert wird, wird ihre Seitenleiste automatisch geöffnet. Dies soll dem Benutzer helfen zu verstehen, dass die Erweiterung eine Seitenleiste enthält. Beachten Sie, dass es für eine Erweiterung nicht möglich ist, Seitenleisten programmgesteuert zu öffnen: Seitenleisten können nur vom Benutzer geöffnet werden.

## Spezifizieren von Seitenleisten

Um eine Seitenleiste zu spezifizieren, definieren Sie das Standarddokument mit dem [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Schlüssel in der manifest.json-Datei, zusammen mit einem Standardtitel und -symbol:

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Titel, Panel und Symbol können programmgesteuert mit der API {{WebExtAPIRef("sidebarAction")}} verändert werden.

Titel und Symbol werden dem Benutzer in jeder vom Browser bereitgestellten Benutzeroberfläche angezeigt, die Seitenleisten auflistet, wie zum Beispiel das Menü "Ansicht > Seitenleiste" in Firefox.

## Design der Seitenleiste

Einzelheiten dazu, wie Sie die Webseite einer Seitenleiste gestalten können, um dem Stil von Firefox zu entsprechen, finden Sie in der [Acorn Design System-Dokumentation](https://acorn.firefox.com/latest).

## Beispiel

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page) Beispiel, das eine Seitenleiste implementiert.
