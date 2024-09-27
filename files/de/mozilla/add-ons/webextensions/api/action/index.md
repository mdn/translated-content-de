---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und verändern Sie Attribute und hören Sie Klicks auf die Browser-Toolbar-Schaltfläche, die mit dem [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel definiert ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar. Sie ersetzt die Manifest V2 APIs {{WebExtAPIRef("browserAction")}} und, in Chrome und Safari, {{WebExtAPIRef("pageAction")}}.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Browser-Toolbar.

Sie können ein Popup mit der Schaltfläche verknüpfen. Ähnlich wie bei einer Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, erhält Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte, aber ihr globaler Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie mit ihnen über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt — und der Inhalt geladen —, wenn der Benutzer auf das Symbol klickt. Falls Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche verfügt auch über ein Kontextmenü, und Sie können diesem Menü mit der {{WebExtAPIRef("menus")}} API Items hinzufügen, indem Sie den `action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `action` API können Sie:

- {{WebExtAPIRef("action.onClicked")}} verwenden, um Klicks auf das Symbol zu erlauschen.
- Die Eigenschaften des Symbols — Icon, Titel, Popup usw. — abrufen und festlegen. Sie können diese global über alle Tabs hinweg oder für einen Tab festlegen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("action.ColorArray")}}
  - : Ein Array aus vier Ganzzahlen im Bereich 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("action.ImageDataType")}}
  - : Pixel-Daten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel, von einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("action.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("action.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("action.setIcon()")}}
  - : Setzt das Symbol der Browser-Aktion.
- {{WebExtAPIRef("action.setPopup()")}}
  - : Setzt das HTML-Dokument, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("action.getPopup()")}}
  - : Ruft das als Popup gesetzte HTML-Dokument der Browser-Aktion ab.
- {{WebExtAPIRef("action.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : Setzt den Text des Badges der Browser-Aktion. Das Badge wird über dem Icon angezeigt.
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
  - : Ruft die vom Benutzer festgelegten Einstellungen für die Browser-Aktion ab.
- {{WebExtAPIRef("action.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("action.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht geklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("action.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("action.onClicked")}}
  - : Wird ausgelöst, wenn ein Symbol der Browser-Aktion geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action)-API von Chromium. Diese Dokumentation stammt aus [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) im Chromium-Code.
