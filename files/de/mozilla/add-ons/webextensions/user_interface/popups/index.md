---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: b55c68237af4df02f5f47187f9d2bac0542dcc3f
---

{{AddonSidebar}}

Ein Popup ist ein Dialogfeld, das mit einem [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einem [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verknüpft ist. Diese Seite beschreibt Popups im Allgemeinen, deren Spezifikation, Debugging, Größenanpassung und Gestaltung sowie Beispiele für deren Verwendung.

![Beispiel eines Popups für Seitenaktionen mit drei Optionen: Katzen, Hunde und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer den Button klickt, wird das Popup angezeigt. Wenn der Benutzer irgendwo außerhalb des Popups klickt, wird das Popup geschlossen. Das Popup kann programmatisch durch Aufruf von [`window.close()`](/de/docs/Web/API/Window/close) aus einem im Popup laufenden Skript geschlossen werden. Allerdings können Sie das Popup nicht programmatisch aus dem JavaScript einer Erweiterung öffnen; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können eine Tastenkombination definieren, die das Popup öffnet, indem Sie die Shortcuts `"_execute_browser_action"` und `"_execute_page_action"` in Manifest V2 und die Shortcuts `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` in Manifest V3 verwenden. Siehe die Dokumentation für die speziellen Shortcuts im Key [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) von manifest.json.

## Festlegen eines Popups

Das Popup wird als eine HTML-Datei spezifiziert, die CSS- und JavaScript-Dateien enthalten kann, wie es bei einer normalen Webseite der Fall ist. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) nutzen, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

Das Dokument des Popups wird jedes Mal geladen, wenn das Popup angezeigt wird, und entladen, wenn das Popup geschlossen wird.

Die HTML-Datei ist in der Erweiterung enthalten und wird als Teil des Keys [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in der manifest.json durch `"default_popup"` angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Popups haben eine Content Security Policy, die die Quellen einschränkt, aus denen sie Ressourcen laden können, und einige unsichere Praktiken, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), verbietet. Weitere Details hierzu finden Sie in der [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Debugging von Popups

Sie können das Markup und JavaScript eines Popups mit dem Add-on-Debugger debuggen, müssen jedoch die Funktion zum automatischen Ausblenden von Popups deaktivieren, um zu verhindern, dass Popups ausgeblendet werden, wenn Sie außerhalb von ihnen klicken. [Lesen Sie über das Debuggen von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Popup-Größenanpassung

Popups passen ihre Größe automatisch an den Inhalt an. Der Algorithmus hierfür kann in verschiedenen Browsern unterschiedlich sein.

In Firefox wird die Größe berechnet, kurz bevor das Popup angezeigt wird, und maximal 10 Mal pro Sekunde nach DOM-Änderungen. Für Dokumente im Strict-Modus wird die Größe basierend auf der Layoutgröße des `<body>`-Elements berechnet. Für den Quirks-Modus ist es das `<html>`-Element. Firefox berechnet die bevorzugte Breite des Inhalts dieses Elements, neu arrangiert ihn auf diese Breite und passt die Größe an, sodass kein vertikales Scrollen erforderlich ist. Es wird maximal auf eine Größe von **800x600 Pixeln** wachsen, wenn das auf den Bildschirm des Nutzers passt. (Vor Firefox 60 waren es nur [680px](https://bugzil.la/1434177).) Wenn der Nutzer den Button der Erweiterung [in das Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder dieser in der Überlaufleiste der Toolbar erscheint, dann erscheint das Popup im Panel des Menüs und hat eine feste Breite.

Wenn Sie die `width` des Popups in CSS setzen, sollten Sie dies im `<body>` und nicht in `:root` tun.

In Firefox Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Popup-Gestaltung

Für Details darüber, wie Sie die Webseite Ihres Popups gestalten, um den Stil von Firefox zu entsprechen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)-Beispiel, das eine Browser-Aktion mit einem Popup implementiert.
