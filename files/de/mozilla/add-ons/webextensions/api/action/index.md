---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und Ändern von Attributen und Abhören von Klicks auf den Browsersymbolleisten-Button, der mit dem [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel definiert ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar. Sie ersetzt die Manifest V2 APIs {{WebExtAPIRef("browserAction")}} und, in Chrome und Safari, {{WebExtAPIRef("pageAction")}}.

Eine [browser action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist ein Button in der Symbolleiste des Browsers.

Sie können ein Popup mit dem Button verknüpfen. Ähnlich wie eine Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte, aber sein globaler Kontext ist das Popup, nicht die derzeit im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) mit ihnen kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt und der Inhalt geladen, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Der Button verfügt auch über ein Kontextmenü, und Sie können diesem Menü Elemente mit der {{WebExtAPIRef("menus")}} API und dem `action` {{WebExtAPIRef("menus.ContextType")}} hinzufügen.

Mit der `action` API können Sie:

- {{WebExtAPIRef("action.onClicked")}} verwenden, um Klicks auf das Symbol zu hören.
- die Eigenschaften des Symbols abrufen und setzen — Symbol, Titel, Popup und so weiter. Diese können global über alle Tabs oder für einen Tab durch Übergeben der Tab-ID als zusätzliches Argument abgerufen und gesetzt werden.

## Typen

- {{WebExtAPIRef("action.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("action.ImageDataType")}}
  - : Pixel-Daten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel aus einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("action.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("action.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("action.setIcon()")}}
  - : Setzt das Symbol der Browser-Aktion.
- {{WebExtAPIRef("action.setPopup()")}}
  - : Setzt das HTML-Dokument, das als Popup geöffnet werden soll, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("action.getPopup()")}}
  - : Ruft das HTML-Dokument ab, das als Popup der Browser-Aktion festgelegt wurde.
- {{WebExtAPIRef("action.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : Setzt den Text des Badges der Browser-Aktion. Der Badge wird über dem Symbol angezeigt.
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : Ruft den Text des Badges der Browser-Aktion ab.
- {{WebExtAPIRef("action.setBadgeBackgroundColor()")}}
  - : Setzt die Hintergrundfarbe des Badges.
- {{WebExtAPIRef("action.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Badges ab.
- {{WebExtAPIRef("action.setBadgeTextColor()")}}
  - : Setzt die Textfarbe des Badges.
- {{WebExtAPIRef("action.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Badges ab.
- {{WebExtAPIRef("action.getUserSettings()")}}
  - : Ruft die benutzerspezifischen Einstellungen für die Browser-Aktion ab.
- {{WebExtAPIRef("action.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("action.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("action.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("action.onClicked")}}
  - : Wird ausgelöst, wenn ein Browser-Aktions-Symbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action) API von Chromium. Diese Dokumentation ist abgeleitet von [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) im Chromium-Code.
