---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{AddonSidebar}}

Der **`browsingData.RemovalOptions`**-Typ enthält Optionen zur Kontrolle bestimmter Aspekte beim Entfernen von Browserdaten.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}

  - : `string`. Diese Eigenschaft gilt nur für Cookies und indexedDB-Elemente. Das Entfernen ist auf Elemente beschränkt, die zu einem bestimmten [Cookie Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie im [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

    > [!NOTE]
    > In Firefox Nightly wird auch das Entfernen von localStorage-Elementen mittels `cookieStoreId` unterstützt.

- `hostnames` {{optional_inline}}

  - : `Array` von `string`. Diese Eigenschaft gilt für Cookie-, indexedDB-, localStorage- und Service Worker-Registrierungselemente. Entfernen Sie nur Cookie-, indexedDB-, localStorage- und Service Worker-Registrierungselemente, die mit diesen Hostnamen verknüpft sind.

    Sie müssen hier nur einen Hostnamen übergeben, ohne Protokoll (zum Beispiel `"google.com"` und nicht `"https://google.com"`). Sie können das [`URL`](/de/docs/Web/API/URL)-Interface verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines bestimmten Hostnamens verknüpft sind, werden _nicht_ entfernt: Sie müssen Subdomains explizit angeben.

- `originTypes` {{optional_inline}}

  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Erweiterungen entfernt werden sollen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten (`unprotectedWeb`) entfernt. Bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, sollten Sie sehr vorsichtig sein und sicherstellen, dass dies wirklich im Interesse des Nutzers ist.

    Dieses Objekt kann folgende Eigenschaften enthalten:

    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von normalen Webseiten entfernt.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von Websites entfernt, die als gehostete Apps installiert wurden.
    - `extension` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von Erweiterungen entfernt.

- `since` {{optional_inline}}
  - : `number`. Gibt an, wie weit in die Vergangenheit Daten entfernt werden sollen, in [Millisekunden seit dem UNIX-Epoch]("https://en.wikipedia.org/wiki/Unix_time"). Beachten Sie, dass beim Entfernen des Browsercaches der gesamte Cache immer entfernt wird und diese Option ignoriert wird. Wenn die `since`-Eigenschaft weggelassen wird, wird standardmäßig 0 verwendet, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

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
