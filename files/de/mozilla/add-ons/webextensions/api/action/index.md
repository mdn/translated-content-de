---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Lesen und Ändern von Attributen sowie Abhören von Klicks auf die Browser-Symbolleistenschaltfläche, die mit dem [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssel definiert ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar. Sie ersetzt die Manifest V2 APIs {{WebExtAPIRef("browserAction")}} und, in Chrome und Safari, {{WebExtAPIRef("pageAction")}}.

Eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ist eine Schaltfläche in der Symbolleiste des Browsers.

Sie können der Schaltfläche ein Popup zuordnen. Wie eine Webseite wird das Popup mit HTML, CSS und JavaScript spezifiziert. JavaScript, das im Popup ausgeführt wird, hat Zugriff auf die gleichen WebExtension-APIs wie Ihre Hintergrundskripte, aber der globale Kontext ist das Popup, nicht die aktuell im Browser angezeigte Seite. Um Webseiten zu beeinflussen, müssen Sie mit ihnen über [Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) kommunizieren.

Wenn Sie ein Popup angeben, wird es angezeigt — und der Inhalt geladen —, wenn der Benutzer auf das Symbol klickt. Wenn Sie kein Popup angeben, wird ein Ereignis an Ihre Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Die Schaltfläche verfügt auch über ein Kontextmenü, und Sie können mit der {{WebExtAPIRef("menus")}} API Elemente zu diesem Menü hinzufügen, indem Sie den `action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Mit der `action` API können Sie:

- {{WebExtAPIRef("action.onClicked")}} verwenden, um Klicks auf das Symbol abzuhören.
- Die Eigenschaften des Symbols erhalten und setzen — Symbol, Titel, Popup usw. Sie können diese global über alle Tabs hinweg oder für einen Tab setzen, indem Sie die Tab-ID als zusätzliches Argument übergeben.

## Typen

- {{WebExtAPIRef("action.ColorArray")}}
  - : Ein Array von vier Ganzzahlen im Bereich 0-255 zur Definition einer RGBA-Farbe.
- {{WebExtAPIRef("action.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel von einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("action.setTitle()")}}
  - : Setzt den Titel der Browser-Aktion. Dieser wird in einem Tooltip angezeigt.
- {{WebExtAPIRef("action.getTitle()")}}
  - : Ruft den Titel der Browser-Aktion ab.
- {{WebExtAPIRef("action.setIcon()")}}
  - : Setzt das Symbol der Browser-Aktion.
- {{WebExtAPIRef("action.setPopup()")}}
  - : Legt das HTML-Dokument fest, das als Popup geöffnet werden soll, wenn der Benutzer auf das Symbol der Browser-Aktion klickt.
- {{WebExtAPIRef("action.getPopup()")}}
  - : Ruft das als Popup festgelegte HTML-Dokument der Browser-Aktion ab.
- {{WebExtAPIRef("action.openPopup()")}}
  - : Öffnet das Popup der Browser-Aktion.
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : Setzt den Badge-Text der Browser-Aktion. Der Badge wird oben auf dem Symbol angezeigt.
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : Ruft den Badge-Text der Browser-Aktion ab.
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
  - : Wird ausgelöst, wenn auf das Symbol der Browser-Aktion geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion über ein Popup verfügt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action) API von Chromium. Diese Dokumentation leitet sich von [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) im Chromium-Code ab.

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
