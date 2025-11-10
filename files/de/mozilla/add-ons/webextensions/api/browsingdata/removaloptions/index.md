---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Typ **`browsingData.RemovalOptions`** enthält Optionen, um bestimmte Aspekte der Entfernung von Browserdaten zu steuern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : `string`. Diese Eigenschaft gilt nur für Cookies und indexedDB-Elemente. Die Entfernung ist auf Elemente beschränkt, die zu einem bestimmten [Cookie-Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

    > [!NOTE]
    > In Firefox Nightly wird auch die Entfernung von `localStorage`-Elementen durch `cookieStoreId` unterstützt.

- `excludeOrigin` {{optional_inline}}
  - : `array` von `string`. Liste von Ursprüngen, die von der Entfernung ausgeschlossen werden sollen. Kann nicht zusammen mit `origins` verwendet werden. Nur für Cookies, Speicher und Cache unterstützt. Cookies werden für die gesamte registrierbare Domain ausgeschlossen.

- `hostnames` {{optional_inline}}
  - : `array` von `string`. Diese Eigenschaft gilt für Cookies, indexedDB-, lokaler Speicher- und Service-Worker-Registrierungs-Elemente. Nur Cookie-, indexedDB-, lokaler Speicher- und Service-Worker-Registrierungs-Elemente entfernen, die diesen Hostnamen zugeordnet sind.

    Hier muss nur ein Hostname ohne Protokoll angegeben werden (zum Beispiel, `"google.com"` statt `"https://google.com"`). Sie können die [`URL`](/de/docs/Web/API/URL)-Schnittstelle verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines gegebenen Hostnamens verbunden sind, werden _nicht_ entfernt: Sie müssen Subdomains explizit auflisten.

- `origin` {{optional_inline}}
  - : `array` von `string`. Liste der Ursprünge, für die Daten entfernt werden sollen. Kann nicht zusammen mit `excludeOrigins` verwendet werden. Nur für Cookies, Speicher und Cache unterstützt. Cookies werden für die gesamte registrierbare Domain gelöscht.

- `originTypes` {{optional_inline}}
  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten entfernt werden oder auch von gehosteten Web-Apps und Erweiterungen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten (`unprotectedWeb`) entfernt. Bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, seien Sie sehr vorsichtig und stellen Sie sicher, dass dies wirklich das ist, was der Benutzer will.

    Dieses Objekt kann eine der folgenden Eigenschaften enthalten:
    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, Daten von normalen Webseiten entfernen.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, Daten von Webseiten entfernen, die als gehostete Apps installiert wurden.
    - `extension` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, Daten von Erweiterungen entfernen.

- `since` {{optional_inline}}
  - : `number`. Wie weit in die Vergangenheit sollen Daten entfernt werden, angegeben in [Millisekunden seit der UNIX-Epoche](https://de.wikipedia.org/wiki/Unixzeit). Beachten Sie, dass beim Entfernen des Browser-Caches immer der gesamte Cache entfernt wird und diese Option ignoriert wird. Wenn die `since`-Eigenschaft weggelassen wird, ist der Standardwert 0, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.

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
