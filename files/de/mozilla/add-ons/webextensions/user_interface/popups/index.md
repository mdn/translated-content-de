---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Ein Popup ist ein Dialog, der mit einer [Schaltfläche in der Symbolleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einer [Schaltfläche in der Adressleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) verknüpft ist. Diese Seite beschreibt Popups im Allgemeinen und erläutert, wie Sie sie festlegen, debuggen, ihre Größe anpassen und sie gestalten. Außerdem enthält sie Anwendungsbeispiele.

![Beispiel für ein Popup einer Schaltfläche in der Adressleiste mit vier Optionen: Frog, Turtle, Snake und Reset.](page_action_popup.png)

Wenn der Benutzer auf die Schaltfläche klickt, wird das Popup angezeigt. Wenn er außerhalb des Popups klickt, wird es geschlossen. Das Popup kann programmgesteuert geschlossen werden, indem ein im Popup ausgeführtes Skript [`window.close()`](/de/docs/Web/API/Window/close) aufruft. Sie können das Popup jedoch nicht programmgesteuert aus dem JavaScript einer Erweiterung öffnen; es kann nur als Reaktion auf eine Benutzeraktion geöffnet werden.

Sie können ein Tastenkürzel zum Öffnen des Popups definieren: in Manifest V2 mit den Tastenkürzeln `"_execute_browser_action"` und `"_execute_page_action"`, in Manifest V3 mit `"_execute_action"` und, sofern unterstützt, `"_execute_page_action"`. Weitere Informationen finden Sie in der Dokumentation zu den speziellen Tastenkürzeln für den manifest.json-Schlüssel [`commands`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts).

## Ein Popup festlegen

Das Popup wird als HTML-Datei festgelegt, die wie eine normale Webseite CSS- und JavaScript-Dateien einbinden kann. Anders als bei einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzt.

Das Dokument des Popups wird bei jeder Anzeige des Popups geladen und bei jedem Schließen wieder entladen.

Die HTML-Datei ist in der Erweiterung enthalten und wird in der manifest.json über `"default_popup"` als Teil des Schlüssels [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) angegeben:

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Für Popups gilt eine Content Security Policy, die einschränkt, aus welchen Quellen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) untersagt. Weitere Informationen hierzu finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Popups debuggen

Sie können das Markup und das JavaScript eines Popups mit dem Add-on-Debugger debuggen. Dazu müssen Sie jedoch die Funktion „Disable popup auto-hide“ aktivieren, damit Popups nicht ausgeblendet werden, wenn Sie außerhalb davon klicken. [Weitere Informationen zum Debuggen von Popups](https://extensionworkshop.com/documentation/develop/debugging/#debugging_popups).

## Größe von Popups anpassen

Popups passen ihre Größe automatisch an ihren Inhalt an. Der dafür verwendete Algorithmus kann sich je nach Browser unterscheiden.

In Firefox wird die Größe unmittelbar vor der Anzeige des Popups und nach DOM-Änderungen höchstens zehnmal pro Sekunde berechnet. Bei Dokumenten im Strict Mode basiert die Berechnung auf der Layoutgröße des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elements. Im Quirks Mode ist das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)-Element maßgeblich. Firefox berechnet die bevorzugte Breite des Inhalts dieses Elements, führt das Layout mit dieser Breite erneut aus und passt anschließend die Größe so an, dass kein vertikales Scrollen erforderlich ist. Das Popup wird höchstens **800 × 600 Pixel** groß, sofern diese Größe auf den Bildschirm des Benutzers passt. (Vor Firefox 60 [waren es nur 680 px](https://bugzil.la/1434177).) Wenn der Benutzer [die Schaltfläche der Erweiterung ins Menü verschiebt](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) oder sie im Überlaufmenü der Symbolleiste erscheint, wird das Popup innerhalb des Menü-Panels angezeigt und erhält eine feste Breite.

Wenn Sie die `width` des Popups in CSS festlegen, sollten Sie sie für [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) und nicht für `:root` festlegen.

In Firefox für Android 57 wird das Popup als normale Seite in einem neuen Tab angezeigt.

## Popup-Gestaltung

Wie Sie die Webseite Ihres Popups so gestalten, dass sie zum Stil von Firefox passt, erfahren Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das Beispiel [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify), das eine browser action mit einem Popup implementiert.
