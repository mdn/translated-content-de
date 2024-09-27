---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und modifizieren von Attributen und das Lauschen auf Klicks auf den Browser-Toolbar-Button, der mit dem [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Manifest-Schlüssel definiert ist.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist ein Button in der Toolbar des Browsers.

Sie können ein Popup mit dem Button verknüpfen. Ähnlich einer Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup läuft, erhält Zugriff auf die gleichen WebExtension-APIs wie Ihre Hintergrundskripte, aber sein globaler Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) mit ihnen kommunizieren.

Wenn Sie ein Popup spezifizieren, wird es angezeigt und der Inhalt geladen, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup spezifizieren, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Der Button hat auch ein Kontextmenü, und Sie können diesem Menü mit der {{WebExtAPIRef("menus")}}-API und dem `browser_action` {{WebExtAPIRef("menus.ContextType")}} Einträge hinzufügen.

Mit der `browserAction`-API können Sie:

- {{WebExtAPIRef("browserAction.onClicked")}} verwenden, um Klicks auf das Symbol zu lauschen.
- Die Eigenschaften des Symbols — wie Icon, Titel, Popup und so weiter — erhalten und festlegen. Sie können diese global für alle Tabs oder für einen Tab erhalten und festlegen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich von 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Gibt den Titel der Browser-Aktion zurück.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Setzt das Symbol der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Legt das HTML-Dokument fest, das beim Klicken auf das Symbol der Browser-Aktion als Popup geöffnet wird.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Gibt das als Popup gesetzte HTML-Dokument zurück.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Setzt den Badge-Text der Browser-Aktion. Der Badge wird über dem Symbol angezeigt.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Gibt den Badge-Text der Browser-Aktion zurück.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Setzt die Hintergrundfarbe des Badges.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Gibt die Hintergrundfarbe des Badges zurück.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Setzt die Textfarbe des Badges.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Gibt die Textfarbe des Badges zurück.
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : Gibt die vom Benutzer festgelegten Einstellungen für die Browser-Aktion zurück.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Prüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Wird ausgelöst, wenn ein Browser-Aktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction)-API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
