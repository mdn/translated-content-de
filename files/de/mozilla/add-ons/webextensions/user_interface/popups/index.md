---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{AddonSidebar}}

Ein Popup ist ein Dialog, der mit einem [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einem [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verknüpft ist. Diese Seite beschreibt Popups im Allgemeinen, einschließlich deren Spezifizierung, Debugging, Größenanpassung und Gestaltung sowie Beispiele für deren Verwendung.

![Seitenaktions-Popup-Beispiel mit drei Optionen: Kätzchen, Welpen und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer auf den Button klickt, wird das Popup angezeigt. Wenn der Benutzer irgendwo außerhalb des Popups klickt, wird das Popup geschlossen. Das Popup kann programmgesteuert durch Aufrufen von [`window.close()`](/de/docs/Web/API/Window/close) aus einem Script im Popup geschlossen werden. Man kann das Popup jedoch nicht programmgesteuert aus dem JavaScript einer Erweiterung öffnen; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können einen Tastaturkurzbefehl definieren, der das Popup mit den Kurzbefehlen `"_execute_browser_action"` und `"_execute_page_action"` in Manifest V2 und `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` in Manifest V3 öffnet. Siehe die Dokumentation der speziellen Kurzbefehle im manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

## Spezifizierung eines Popups

Das Popup wird als HTML-Datei spezifiziert, die CSS- und JavaScript-Dateien enthalten kann, wie es bei einer normalen Webseite der Fall ist. Anders als bei normalen Seiten kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

Das Dokument des Popups wird jedes Mal geladen, wenn das Popup angezeigt wird, und entladen, wenn es geschlossen wird.

Die HTML-Datei ist in der Erweiterung enthalten und als Teil des Schlüssels [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) durch `"default_popup"` in der manifest.json angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Popups unterliegen einer Content Security Policy, die die Quellen einschränkt, aus denen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Weitere Details dazu finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Debugging von Popups

Sie können das Markup und JavaScript eines Popups mit dem Add-on Debugger debuggen, aber Sie müssen die Funktion "Popup-Autoausblendung deaktivieren" aktivieren, um zu verhindern, dass Popups ausgeblendet werden, wenn Sie außerhalb von ihnen klicken. [Lesen Sie mehr über das Debuggen von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Größenanpassung von Popups

Popups passen sich automatisch an den Inhalt an. Der Algorithmus dafür kann sich von einem Browser zum anderen unterscheiden.

In Firefox wird die Größe kurz bevor das Popup angezeigt wird berechnet und bis zu 10 Mal pro Sekunde nach DOM-Änderungen. Für Dokumente im Strict-Modus wird die Größe basierend auf der Layoutgröße des [`<body>`](/de/docs/Web/HTML/Element/body)-Elements berechnet. Im Quirks-Modus ist es das [`<html>`](/de/docs/Web/HTML/Element/html)-Element. Firefox berechnet die bevorzugte Breite des Inhalts dieses Elements, stellt es auf diese Breite um und passt die Größe so an, dass kein vertikales Scrollen mehr nötig ist. Es wächst auf maximal **800x600 Pixel**, wenn das auf den Bildschirm des Benutzers passt. (Vor Firefox 60 [waren es nur 680px](https://bugzil.la/1434177).) Wenn der Benutzer [den Button der Erweiterung ins Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder er in der Symbolleisten-Überlauf erscheint, erscheint das Popup im Menü-Panel und bekommt eine feste Breite.

Wenn Sie die Popup-`width` in CSS festlegen, sollten Sie dies im [`<body>`](/de/docs/Web/HTML/Element/body) und nicht im `:root` tun.

In Firefox Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Gestaltung von Popups

Für Details, wie Sie die Webseite Ihres Popups gestalten können, um dem Stil von Firefox zu entsprechen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) Beispiel, das eine Browser-Aktion mit einem Popup implementiert.
