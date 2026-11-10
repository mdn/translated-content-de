---
title: Seitenleisten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Eine Seitenleiste ist ein Bereich, der am Rand des Browserfensters neben der Webseite angezeigt wird. Diese Seite beschreibt, was Seitenleisten sind, wie sie festgelegt und gestaltet werden und wie sie verwendet werden können.

Der Browser bietet eine Benutzeroberfläche, über die Benutzer eine Seitenleiste zur Anzeige auswählen können. In Firefox klicken sie beispielsweise auf die Schaltfläche für die Seitenleiste in der Symbolleiste und wählen dann ein Werkzeug oder eine Erweiterung aus. Jedes Browserfenster kann eine eigene Seitenleiste anzeigen, die auf jedem Tab des Fensters zu sehen ist.

Der Browser kann mehrere integrierte Seitenleisten enthalten. Die Seitenleiste von Firefox bietet beispielsweise Werkzeuge für Lesezeichen, Chronik und Passwörter sowie Seitenleisten, die von Erweiterungen hinzugefügt wurden. Dieser Screenshot zeigt die Seitenleiste des Beispiels [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page):

![Seitenleiste für Anmerkungen mit einem Feld, in dem Benutzer Notizen zur Seite machen können.](bookmarks-sidebar.png)

Mit dem manifest.json-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) kann eine Erweiterung dem Browser eine eigene Seitenleiste hinzufügen. Sie wird zusammen mit den integrierten Seitenleisten aufgeführt und kann auf die gleiche Weise geöffnet werden.

Wie bei einem Popup einer Browser-Aktion wird der Inhalt der Seitenleiste durch ein HTML-Dokument festgelegt. Wenn ein Benutzer die Seitenleiste öffnet, wird ihr Dokument in jedes geöffnete Browserfenster geladen. Jedes Fenster erhält eine eigene Instanz des Dokuments. Auch neu geöffnete Fenster erhalten eigene Seitenleistendokumente.

Mit der Funktion {{WebExtAPIRef("sidebarAction.setPanel()")}} kann ein Dokument für einen bestimmten Tab festgelegt werden. Eine Seitenleiste kann mithilfe der API {{WebExtAPIRef("windows.getCurrent()")}} ermitteln, zu welchem Fenster sie gehört:

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Das ist nützlich, wenn eine Seitenleiste in verschiedenen Fenstern unterschiedliche Inhalte anzeigen soll. Ein Beispiel dafür finden Sie unter [„annotate-page“](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

Seitenleistendokumente haben Zugriff auf dieselben privilegierten JavaScript-APIs wie die Hintergrund- und Popup-Skripte der Erweiterung. Sie können mit {{WebExtAPIRef("runtime.getBackgroundPage()")}} direkt auf die Hintergrundseite zugreifen, sofern die Seitenleiste nicht zu einem Fenster im privaten Modus gehört. Über Messaging-APIs wie {{WebExtAPIRef("tabs.sendMessage()")}} und {{WebExtAPIRef("runtime.sendNativeMessage()")}} können sie mit Inhaltsskripten oder nativen Anwendungen kommunizieren.

Seitenleistendokumente werden entladen, wenn ihr Browserfenster geschlossen wird oder der Benutzer die Seitenleiste schließt. Anders als Hintergrundseiten bleiben sie also nicht dauerhaft geladen. Anders als Popups von Browser-Aktionen bleiben sie jedoch geladen, während der Benutzer mit Webseiten interagiert.

Wenn eine Erweiterung, die eine Seitenleiste definiert, erstmals installiert wird, öffnet sich ihre Seitenleiste automatisch. So sollen Benutzer erkennen können, dass die Erweiterung eine Seitenleiste enthält.

## Seitenleisten festlegen

Um eine Seitenleiste festzulegen, definieren Sie das Standarddokument mit dem manifest.json-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) sowie einen Standardtitel und ein Standardsymbol:

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Titel, Panel und Symbol können mithilfe der API {{WebExtAPIRef("sidebarAction")}} programmgesteuert geändert werden.

Titel und Symbol werden überall dort angezeigt, wo der Browser Seitenleisten auflistet, beispielsweise im Firefox-Menü „Ansicht > Seitenleiste“.

## Gestaltung von Seitenleisten

Wie Sie die Webseite einer Seitenleiste so gestalten, dass sie zum Stil von Firefox passt, erfahren Sie in der Dokumentation zum [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiel

Das GitHub-Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) enthält das Beispiel [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page), das eine Seitenleiste implementiert.
