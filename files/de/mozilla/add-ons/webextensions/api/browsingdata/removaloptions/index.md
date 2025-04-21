---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: 2f4e9dd0e0245212ae20ffca08c19d1eb7f75819
---

{{AddonSidebar}}

Der Typ **`browsingData.RemovalOptions`** enthält Optionen zur Steuerung bestimmter Aspekte der Löschung von Browserdaten.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}

  - : `string`. Diese Eigenschaft gilt nur für Cookies und indexedDB-Elemente. Die Löschung ist auf Elemente beschränkt, die zu einem bestimmten [Cookie-Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie unter [Mit kontextbezogenen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

    > [!NOTE]
    > In Firefox Nightly wird auch die Löschung von localStorage-Elementen nach `cookieStoreId` unterstützt.

- `excludeOrigin` {{optional_inline}}

  - : `array` von `string`. Liste von Ursprüngen, die vom Löschvorgang ausgeschlossen werden sollen. Kann nicht zusammen mit `origins` verwendet werden. Nur unterstützt für Cookies, Speicher und Cache. Cookies werden für die gesamte registrierbare Domain ausgeschlossen.

- `hostnames` {{optional_inline}}

  - : `array` von `string`. Diese Eigenschaft gilt für Cookie-, indexedDB-, lokalen Speicher- und Service-Worker-Registrierungselemente. Löschen Sie nur Cookie-, indexedDB-, lokalen Speicher- und Service-Worker-Registrierungselemente, die mit diesen Hostnamen verknüpft sind.

    Hier müssen Sie nur einen Hostnamen ohne Protokoll übergeben (z. B. `"google.com"` und nicht `"https://google.com"`). Sie können die [`URL`](/de/docs/Web/API/URL) Schnittstelle verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines bestimmten Hostnamens verbunden sind, werden _nicht_ entfernt: Subdomains müssen explizit aufgeführt werden.

- `origin` {{optional_inline}}

  - : `array` von `string`. Liste von Ursprüngen, für die Daten entfernt werden sollen. Kann nicht zusammen mit `excludeOrigins` verwendet werden. Nur unterstützt für Cookies, Speicher und Cache. Cookies werden für die gesamte registrierbare Domain gelöscht.

- `originTypes` {{optional_inline}}

  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Erweiterungen entfernt werden sollen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten (`unprotectedWeb`) entfernt. Bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, sollten Sie sehr sorgfältig sicherstellen, dass dies wirklich der Wunsch des Benutzers ist.

    Dieses Objekt kann beliebige der folgenden Eigenschaften enthalten:

    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von normalen Webseiten entfernt.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von Websites entfernt, die als gehostete Apps installiert wurden.
    - `extension` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von Erweiterungen entfernt.

- `since` {{optional_inline}}
  - : `number`. Wie weit in der Vergangenheit Daten entfernt werden sollen, angegeben in [Millisekunden seit dem UNIX-Epoch](https://en.wikipedia.org/wiki/Unix_time). Beachten Sie, dass beim Entfernen des Browser-Caches der gesamte Cache immer entfernt wird und diese Option ignoriert wird. Wenn die `since`-Eigenschaft weggelassen wird, ist der Standardwert 0, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
