---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die verschiedenen Kontexte, in denen ein Menüelement erscheinen kann.

## Typ

Werte dieses Typs sind Zeichenfolgen. Das Element wird angezeigt, wenn der angegebene Kontext zutrifft. Mögliche Werte sind:

- all
  - : Die Angabe von 'all' entspricht der Kombination aller anderen Kontexte außer 'bookmark', 'tab' und 'tools_menu'.
- action
  - : Gilt, wenn der Benutzer auf Ihre Browser-Aktion in einer Manifest V3-Erweiterung mit der rechten Maustaste klickt. Die maximale Anzahl von Elementen, die dem obersten Browser-Aktionskontextmenü hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente in Untermenüs hinzufügen.
- audio
  - : Gilt, wenn der Benutzer auf ein [audio](/de/docs/Web/HTML/Reference/Elements/audio)-Element mit der rechten Maustaste klickt.
- bookmark
  - : Gilt, wenn der Benutzer auf ein Lesezeichen-Element in der Lesezeichen-Symbolleiste, im Lesezeichen-Menü, in der Lesezeichen-Seitenleiste (<kbd>Strg</kbd>+<kbd>B</kbd>) und im Bibliotheks-Fenster (<kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>B</kbd>) mit der rechten Maustaste klickt. Letztere zwei werden ab Firefox 66 unterstützt. Erfordert die "bookmarks" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) im Manifest.

- browser_action
  - : Gilt, wenn der Benutzer auf Ihre Browser-Aktion in einer Manifest V2-Erweiterung mit der rechten Maustaste klickt. Die maximale Anzahl von Elementen, die dem obersten Browser-Aktionskontextmenü hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente in Untermenüs hinzufügen.
- editable
  - : Gilt, wenn der Benutzer auf ein editierbares Element, wie ein [textarea](/de/docs/Web/HTML/Reference/Elements/textarea), mit der rechten Maustaste klickt.
- frame
  - : Gilt, wenn der Benutzer in einem verschachtelten [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) mit der rechten Maustaste klickt.
- image
  - : Gilt, wenn der Benutzer auf ein Bild mit der rechten Maustaste klickt.
- link
  - : Gilt, wenn der Benutzer auf einen Link mit der rechten Maustaste klickt.
- page
  - : Gilt, wenn der Benutzer auf der Seite mit der rechten Maustaste klickt, aber keiner der anderen Seitenkontexte zutrifft (zum Beispiel ist der Klick nicht auf ein Bild oder ein verschachteltes iframe oder einen Link).
- page_action
  - : Gilt, wenn der Benutzer auf Ihre Page-Aktion mit der rechten Maustaste klickt. Die maximale Anzahl von Elementen, die dem obersten Page-Aktion-Kontextmenü hinzugefügt werden können, beträgt {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, aber Sie können beliebig viele Elemente in Untermenüs hinzufügen.
- password
  - : Gilt, wenn der Benutzer auf ein [Passworteingabe-Element](/de/docs/Web/HTML/Reference/Elements/input/password) mit der rechten Maustaste klickt.
- selection
  - : Gilt, wenn ein Teil der Seite ausgewählt ist.
- tab
  - : Gilt, wenn der Benutzer auf einen Tab mit der rechten Maustaste klickt (dies bezieht sich auf die Tab-Leiste oder ein anderes Benutzeroberflächen-Element, das dem Benutzer das Wechseln von einem Browser-Tab zu einem anderen ermöglicht, nicht auf die Seite selbst).

    Ab Firefox 63 berechtigt das Klicken auf das Menüelement auf einem Tab zur [activeTab](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)-Berechtigung für den geklickten Tab, selbst wenn dieser nicht der aktuell aktive Tab ist.

- tools_menu
  - : Das Element wird dem Werkzeuge-Menü des Browsers hinzugefügt. Beachten Sie, dass dies nur verfügbar ist, wenn Sie `ContextType` über den `menus`-Namensraum aufrufen. Es ist nicht verfügbar, wenn Sie es über den `contextMenus`-Namensraum aufrufen.
- video
  - : Gilt, wenn der Benutzer auf ein [video](/de/docs/Web/HTML/Reference/Elements/video)-Element mit der rechten Maustaste klickt.

Beachten Sie, dass "launcher" nicht unterstützt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType)-API von Chromium. Diese Dokumentation stammt aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.
