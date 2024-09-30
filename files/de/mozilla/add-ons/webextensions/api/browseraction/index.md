---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und Ändern von Attributen sowie Reagieren auf Klicks auf die Schaltfläche in der Browser-Symbolleiste, die mit dem Manifest-Key [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) definiert ist.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Symbolleiste des Browsers.

Sie können ein Popup mit der Schaltfläche verknüpfen. Wie bei einer Webseite wird das Popup mithilfe von HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf die gleichen WebExtension-APIs wie Ihre Hintergrundskripte, jedoch ist der globale Kontext das Popup und nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) mit ihnen kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt — und der Inhalt geladen —, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche verfügt auch über ein Kontextmenü, und Sie können mit der {{WebExtAPIRef("menus")}} API Elemente zu diesem Menü mit dem `browser_action` {{WebExtAPIRef("menus.ContextType")}} hinzufügen.

Mit der `browserAction` API können Sie:

- {{WebExtAPIRef("browserAction.onClicked")}} verwenden, um Klicks auf das Symbol zu überwachen.
- Die Eigenschaften des Symbols — Symbol, Titel, Popup usw. — abrufen und festlegen. Sie können diese global für alle Tabs oder für einen bestimmten Tab festlegen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich 0-255, die eine RGBA-Farbe definieren.
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
  - : Legt das HTML-Dokument fest, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Ruft das HTML-Dokument ab, das als Popup der Browser-Aktion festgelegt wurde.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Setzt den Abzeichen-Text der Browser-Aktion. Der Abzeichen wird über dem Symbol angezeigt.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Ruft den Abzeichen-Text der Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Setzt die Hintergrundfarbe des Abzeichens.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Ruft die Hintergrundfarbe des Abzeichens ab.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Setzt die Textfarbe des Abzeichens.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Ruft die Textfarbe des Abzeichens ab.
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : Ruft die benutzerdefinierten Einstellungen für die Browser-Aktion ab.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Deaktiviert die Browser-Aktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Überprüft, ob die Browser-Aktion aktiviert ist.

## Ereignisse

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Wird ausgelöst, wenn ein Browser-Aktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
