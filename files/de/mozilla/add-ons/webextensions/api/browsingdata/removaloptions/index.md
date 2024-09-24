---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der **`browsingData.RemovalOptions`** Typ enthält Optionen, um bestimmte Aspekte der Entfernung von Browserdaten zu steuern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}

  - : `string`. Diese Eigenschaft gilt nur für Cookies und IndexedDB-Elemente. Die Entfernung ist auf Elemente beschränkt, die zu einem bestimmten [Cookie-Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

    > [!NOTE]
    > In Firefox Nightly wird auch die Entfernung von localStorage-Elementen nach `cookieStoreId` unterstützt.

- `hostnames` {{optional_inline}}

  - : `Array` von `string`. Diese Eigenschaft gilt für Cookie-, IndexedDB-, lokalen Speicher- und Service-Worker-Registrierungs-Elemente. Entfernen Sie nur Cookie-, IndexedDB-, lokalen Speicher- und Service-Worker-Registrierungs-Elemente, die mit diesen Hostnamen verbunden sind.

    Sie müssen hier nur einen Hostnamen angeben, ohne Protokoll (zum Beispiel `"google.com"` und nicht `"https://google.com"`). Sie können das [`URL`](/de/docs/Web/API/URL)-Interface verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines gegebenen Hostnamens assoziiert sind, werden _nicht_ entfernt: Sie müssen Subdomains explizit auflisten.

- `originTypes` {{optional_inline}}

  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Erweiterungen entfernt werden sollen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten ("`unprotectedWeb`") entfernt. Bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, seien Sie sehr vorsichtig, um sicherzustellen, dass dies wirklich der Wunsch des Benutzers ist.

    Dieses Objekt kann eine der folgenden Eigenschaften enthalten:

    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, entfernen Sie Daten von normalen Webseiten.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, entfernen Sie Daten von Webseiten, die als gehostete Apps installiert wurden.
    - `extension` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, entfernen Sie Daten von Erweiterungen.

- `since` {{optional_inline}}
  - : `number`. Wie weit in die Vergangenheit sollen die Daten entfernt werden, angegeben in [Millisekunden seit dem UNIX-Epoch](https://de.wikipedia.org/wiki/Unixzeit). Beachten Sie, dass beim Entfernen des Browser-Caches immer der gesamte Cache entfernt wird und diese Option ignoriert wird. Wenn die `since` Eigenschaft weggelassen wird, ist sie standardmäßig 0, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

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
