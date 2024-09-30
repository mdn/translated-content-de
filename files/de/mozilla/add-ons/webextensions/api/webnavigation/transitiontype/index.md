---
title: webNavigation.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ursache der Navigation: zum Beispiel, wenn der Benutzer auf einen Link geklickt, eine Adresse eingegeben oder ein Lesezeichen geklickt hat.

Beachten Sie, dass viele Werte hier momentan nicht in Firefox unterstützt werden: siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "link"
  - : Der Benutzer hat auf einen Link in einer anderen Seite geklickt.
- "typed"
  - : Der Benutzer hat die URL in die Adressleiste eingegeben. Dies wird auch verwendet, wenn der Benutzer begonnen hat, in die Adressleiste zu tippen, und dann eine URL aus den angebotenen Vorschlägen ausgewählt hat. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer hat ein Lesezeichen oder einen Eintrag im Browserverlauf angeklickt.
- "auto_subframe"
  - : Alle verschachtelten iframes, die automatisch von ihrer übergeordneten Seite geladen werden.
- "manual_subframe"
  - : Alle verschachtelten iframes, die durch eine explizite Benutzeraktion geladen werden. Das Laden eines solchen iframes erzeugt einen Eintrag in der Vor-/Zurück-Navigationsliste.
- "generated"
  - : Der Benutzer begann mit der Eingabe in die Adressleiste und klickte dann auf einen vorgeschlagenen Eintrag, der keine URL enthielt.
- "start_page"
  - : Die Seite wurde über die Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer hat ein Formular abgeschickt. Beachten Sie, dass in einigen Situationen, beispielsweise wenn ein Formular ein Skript zur Übermittlung seiner Inhalte verwendet, das Abschicken eines Formulars nicht zu diesem Übergangstyp führt.
- "reload"
  - : Der Benutzer hat die Seite neu geladen, indem er die Schaltfläche "Neu laden" benutzt oder die Eingabetaste in der Adressleiste gedrückt hat. Dies wird auch für die Wiederherstellung von Sitzungen und das Wiederöffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde mithilfe einer von den Benutzern konfigurierten [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) generiert.
- "keyword_generated"
  - : Entspricht einem Besuch, der für ein Schlüsselwort generiert wurde.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#type-TransitionType) API von Chromium. Diese Dokumentation basiert auf [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
