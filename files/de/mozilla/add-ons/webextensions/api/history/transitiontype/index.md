---
title: history.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/history/TransitionType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dies beschreibt, wie der Browser zu einer bestimmten Seite navigiert hat. Zum Beispiel bedeutet "link", dass der Browser zur Seite navigierte, weil der Benutzer auf einen Link geklickt hat.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "link"
  - : Der Benutzer hat auf einen Link in einer anderen Seite geklickt.
- "typed"
  - : Der Benutzer hat die URL in die Adressleiste eingegeben. Dies wird auch verwendet, wenn der Benutzer begonnen hat, in die Adressleiste zu tippen, und dann eine URL aus den angebotenen Vorschlägen ausgewählt hat. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer hat auf ein Lesezeichen oder ein Element im Browserverlauf geklickt.
- "auto_subframe"
  - : Alle verschachtelten iframes, die automatisch von ihrem übergeordneten Element geladen werden.
- "manual_subframe"
  - : Alle verschachtelten iframes, die als explizite Benutzeraktion geladen werden. Durch das Laden eines solchen iframes wird ein Eintrag in der Vor-/Zurück-Navigation erstellt.
- "generated"
  - : Der Benutzer begann in der Adressleiste zu tippen und klickte dann auf einen vorgeschlagenen Eintrag, der keine URL enthielt.
- "auto_toplevel"
  - : Die Seite wurde über die Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer hat ein Formular abgeschickt. Beachten Sie, dass in einigen Situationen, wie wenn ein Formular ein Skript verwendet, um dessen Inhalt abzuschicken, das Abschicken eines Formulars nicht zu diesem Übergangstyp führt.
- "reload"
  - : Der Benutzer hat die Seite neu geladen, entweder durch Klicken auf die Schaltfläche „Neuladen“ oder durch Drücken der Eingabetaste in der Adressleiste. Dies wird auch für die Sitzungswiederherstellung und das Wiederöffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde mithilfe einer vom Benutzer konfigurierten [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) generiert.
- "keyword_generated"
  - : Entspricht einem Besuch, der für ein Schlüsselwort generiert wurde.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#type-TransitionType). Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
