---
title: Pop-ups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Ein Pop-up ist ein Dialog, der mit einem [Toolbar-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einem [Adressleisten-Button](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verbunden ist. Diese Seite beschreibt Pop-ups im Allgemeinen, deren Spezifikation, Fehlerbehebung, Größenanpassung und Gestaltung sowie Anwendungsbeispiele.

![Ein Pop-up-Beispiel für Seitenaktionen mit drei Optionen: Katzen, Welpen und Zurücksetzen.](page_action_popup.png)

Wenn der Benutzer auf den Button klickt, wird das Pop-up angezeigt. Wenn der Benutzer irgendwo außerhalb des Pop-ups klickt, wird das Pop-up geschlossen. Das Pop-up kann programmatisch durch Aufruf von [`window.close()`](/de/docs/Web/API/Window/close) von einem im Pop-up laufenden Skript geschlossen werden. Es kann jedoch nicht programmatisch von einem JavaScript der Erweiterung geöffnet werden; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können eine Tastenkombination definieren, die das Pop-up öffnet, indem Sie die Shortcuts `"_execute_browser_action"` und `"_execute_page_action"` in Manifest V2 sowie `"_execute_action"` und, wo unterstützt, `"_execute_page_action"` in Manifest V3 verwenden. Siehe die Dokumentation zu den speziellen Shortcuts im manifest.json Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

## Spezifikation eines Pop-ups

Das Pop-up wird als HTML-Datei angegeben, die, wie eine normale Webseite, CSS- und JavaScript-Dateien enthalten kann. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) nutzen, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

Das Dokument des Pop-ups wird jedes Mal geladen, wenn das Pop-up angezeigt wird, und jedes Mal entladen, wenn es geschlossen wird.

Die HTML-Datei ist in der Erweiterung enthalten und wird als Teil des [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssels durch `"default_popup"` in der manifest.json angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Pop-ups haben eine Content Security Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für weitere Details dazu.

## Fehlerbehebung bei Pop-ups

Sie können das Markup und JavaScript eines Pop-ups mit dem Add-on Debugger debuggen. Dazu müssen Sie die Funktion zum automatischen Ausblenden von Pop-ups deaktivieren, damit sie nicht ausgeblendet werden, wenn Sie außerhalb klicken. [Lesen Sie über das Debuggen von Pop-ups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Größenanpassung von Pop-ups

Pop-ups passen ihre Größe automatisch an ihren Inhalt an. Der Algorithmus dafür kann je nach Browser unterschiedlich sein.

In Firefox wird die Größe direkt vor dem Anzeigen des Pop-ups berechnet und nach DOM-Änderungen höchstens zehnmal pro Sekunde. Für Dokumente im strikten Modus wird die Größe basierend auf der Layoutgröße des [`<body>`](/de/docs/Web/HTML/Element/body)-Elements berechnet. Im quirks mode ist es das [`<html>`](/de/docs/Web/HTML/Element/html)-Element. Firefox berechnet die bevorzugte Breite der Inhalte dieses Elements, ordnet es zu dieser Breite neu an und ändert dann die Größe, sodass kein vertikales Scrollen erforderlich ist. Es wächst maximal zu einer Größe von **800x600 Pixel**, wenn dies auf den Bildschirm des Benutzers passt. (Vor Firefox 60 [war es nur 680px](https://bugzil.la/1434177).) Wenn der Benutzer [den Button der Erweiterung ins Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder dieser in der Überlaufleiste der Symbolleiste erscheint, erscheint das Pop-up im Menübereich und hat eine feste Breite.

Beim Festlegen der `width` des Pop-ups in CSS sollten Sie sie im [`<body>`](/de/docs/Web/HTML/Element/body) und nicht in `:root` festlegen.

In Firefox Android 57 wird das Pop-up als normale Seite in einem neuen Tab angezeigt.

## Gestaltung von Pop-ups

Für Informationen darüber, wie Sie die Webseite Ihres Pop-ups gestalten können, um den Stil von Firefox zu entsprechen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) Beispiel, das eine Browseraktion mit einem Pop-up implementiert.
