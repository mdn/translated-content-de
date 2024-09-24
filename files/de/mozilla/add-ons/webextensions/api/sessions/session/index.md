---
title: sessions.Session
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Session
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das `Session`-Objekt repräsentiert einen Tab oder ein Fenster, das der Benutzer in der aktuellen Browsersitzung geschlossen hat.

Sitzungen werden als {{WebExtAPIRef("tabs.Tab", "Tab")}}-Objekte dargestellt, wenn der Tab geschlossen wurde, aber das Fenster nicht: zum Beispiel, weil der Benutzer auf die Schaltfläche "Tab schließen" geklickt hat und dieser Tab nicht der einzige Tab in seinem Fenster war.

Sitzungen werden als {{WebExtAPIRef("windows.Window", "Window")}}-Objekte dargestellt, wenn das Fenster geschlossen wurde: zum Beispiel, weil der Benutzer auf die Schaltfläche "Fenster schließen" geklickt hat oder den einzigen geöffneten Tab in einem Fenster geschlossen hat.

Beachten Sie, dass verschiedene Browser eine unterschiedliche Vorstellung davon haben können, wann eine Sitzung ein Tab und wann ein Fenster ist. Zum Beispiel:

- In Chrome wird eine Sitzung als Fenster aufgezeichnet, wenn der Benutzer ein Fenster schließt, das mehr als einen Tab enthielt. Wenn der Benutzer ein Fenster schloss, das nur einen Tab enthielt, wird dies als Tab aufgezeichnet.
- In Firefox wird eine Sitzung als Fenster aufgezeichnet, wenn der Benutzer ein Fenster (oder einen Tab, der der letzte Tab im Fenster war) schließt, und als Tab, wenn der Benutzer einen Tab schließt, der nicht der letzte Tab in seinem Fenster war.

Das Tab-Objekt für einen geöffneten Tab wird keine `sessionId` haben. Wenn der Tab geschlossen wird, hat er eine `sessionId`, aber keine Tab-`id`. Wenn der Tab wiederhergestellt wird, erhält er eine neue Tab-`id` und verliert die `sessionId`.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `lastModified`
  - : `number`. Der Zeitpunkt, zu dem der Tab oder das Fenster geschlossen wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `tab` {{optional_inline}}
  - : `object`. Wenn das Objekt einen geschlossenen Tab darstellt, ist diese Eigenschaft vorhanden und wird ein {{WebExtAPIRef("tabs.Tab")}}-Objekt sein. Dies wird `url`, `title` und `favIconUrl` nur enthalten, wenn die Erweiterung die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, um auf die URL des Tabs zuzugreifen.
- `window` {{optional_inline}}
  - : `object`. Wenn das Objekt ein geschlossenes Fenster darstellt, ist diese Eigenschaft vorhanden und wird ein {{WebExtAPIRef("windows.Window")}}-Objekt sein.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API von Chromium.

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
