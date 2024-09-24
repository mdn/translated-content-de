---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und Ändern von Attributen der Browser-Symbolleistenschaltfläche und Lauschen auf Klicks, die mit dem [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel definiert ist.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Symbolleiste des Browsers.

Sie können ein Popup mit der Schaltfläche verknüpfen. Ähnlich einer Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, erhält Zugriff auf dieselben WebExtension-APIs wie Ihre Hintergrundskripte, jedoch ist dessen globaler Kontext das Popup und nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) mit ihnen kommunizieren.

Wenn Sie ein Popup spezifizieren, wird es angezeigt — und der Inhalt geladen —, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup spezifizieren, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche hat auch ein Kontextmenü, und Sie können diesem Menü mit der {{WebExtAPIRef("menus")}} API Elemente hinzufügen, indem Sie den `browser_action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `browserAction` API können Sie:

- {{WebExtAPIRef("browserAction.onClicked")}} verwenden, um auf Klicks auf das Symbol zu lauschen.
- Die Eigenschaften des Symbols festlegen und abrufen — Icon, Titel, Popup und so weiter. Sie können diese global für alle Tabs oder für einen bestimmten Tab festlegen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich 0-255, das eine RGBA-Farbe definiert.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData) Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}} Element).

## Funktionen

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Setzt das Symbol der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Legt das HTML-Dokument fest, das als Popup geöffnet werden soll, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Ruft das als Popup festgelegte HTML-Dokument ab.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Legt den Text des Badges der Browser-Aktion fest. Das Badge wird über dem Symbol angezeigt.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Ruft den Text des Badges der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Legt die Hintergrundfarbe des Badges fest.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Badges ab.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Legt die Textfarbe des Badges fest.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Badges ab.
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : Ruft die benutzerdefinierten Einstellungen für die Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht geklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist oder nicht.

## Ereignisse

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Wird ausgelöst, wenn ein Browser-Aktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) API. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
