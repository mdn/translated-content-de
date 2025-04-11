---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Die verschiedenen Kontexte, in denen ein Menüelement erscheinen kann.

## Typ

Werte dieses Typs sind Zeichenketten. Das Element wird angezeigt, wenn der gegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte außer 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer in einem Manifest V3-Add-on auf Ihre Browser-Aktion rechtsklickt. Die maximale Anzahl von Elementen, die dem obersten Kontextmenü der Browser-Aktion hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer auf ein [audio](/de/docs/Web/HTML/Reference/Elements/audio)-Element rechtsklickt.
- bookmark
  - : Gilt, wenn der Benutzer auf ein Lesezeichen in der Lesezeichen-Symbolleiste, im Lesezeichen-Menü, in der Lesezeichen-Sidebar (<kbd>Strg</kbd>+<kbd>B</kbd>) und im Bibliotheksfenster (<kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>B</kbd>) rechtsklickt. Die letzten beiden werden seit Firefox 66 unterstützt. Erfordert die "bookmarks"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.
- browser_action
  - : Gilt, wenn der Benutzer in einem Manifest V2-Add-on auf Ihre Browser-Aktion rechtsklickt. Die maximale Anzahl von Elementen, die dem obersten Kontextmenü der Browser-Aktion hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer auf ein bearbeitbares Element, wie ein [textarea](/de/docs/Web/HTML/Reference/Elements/textarea), rechtsklickt.
- frame
  - : Gilt, wenn der Benutzer in einem verschachtelten [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) rechtsklickt.
- image
  - : Gilt, wenn der Benutzer auf ein Bild rechtsklickt.
- link
  - : Gilt, wenn der Benutzer auf einen Link rechtsklickt.
- page
  - : Gilt, wenn der Benutzer auf die Seite rechtsklickt, aber keiner der anderen Seitenkontexte zutrifft (zum Beispiel der Klick ist nicht auf einem Bild, einem verschachtelten iframe oder einem Link).
- page_action
  - : Gilt, wenn der Benutzer auf Ihre Seitenauswahl rechtsklickt. Die maximale Anzahl von Elementen, die dem obersten Kontextmenü der Seitenauswahl hinzugefügt werden können, ist {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente zu Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer auf ein [Passworteingabefeld](/de/docs/Web/HTML/Reference/Elements/input/password) rechtsklickt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab

  - : Gilt, wenn der Benutzer auf einen Tab rechtsklickt (spezifisch bezieht sich dies auf die Tab-Leiste oder ein anderes Benutzeroberflächenelement, das dem Benutzer ermöglicht, von einem Browser-Tab zum anderen zu wechseln, nicht auf die Seite selbst).

    Ab Firefox 63 erteilt das Klicken auf das Menüelement auf einem Tab die [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)-Berechtigung für den angeklickten Tab, auch wenn dieser nicht der derzeit aktive Tab ist.

- tools_menu
  - : Das Element wird dem Werkzeugmenü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie `ContextType` über den `menus`-Namensraum aufrufen. Es ist nicht verfügbar, wenn Sie es über den `contextMenus`-Namensraum aufrufen.
- video
  - : Gilt, wenn der Benutzer auf ein [video](/de/docs/Web/HTML/Reference/Elements/video)-Element rechtsklickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType) API. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
