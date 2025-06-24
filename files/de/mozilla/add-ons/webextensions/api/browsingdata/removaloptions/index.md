---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Der **`browsingData.RemovalOptions`**-Typ enthält Optionen zur Steuerung bestimmter Aspekte der Entfernung von Browserdaten.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}

  - : `string`. Diese Eigenschaft gilt nur für Cookies und IndexedDB-Elemente. Die Entfernung ist auf Elemente beschränkt, die zu einem bestimmten [Cookie-Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie unter [Arbeiten mit Kontextkennungen](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

    > [!NOTE]
    > In Firefox Nightly wird die Entfernung von localStorage-Elementen durch `cookieStoreId` ebenfalls unterstützt.

- `excludeOrigin` {{optional_inline}}

  - : `array` von `string`. Liste der Ursprünge, die vom Entfernungsprozess ausgeschlossen werden sollen. Kann nicht zusammen mit `origins` verwendet werden. Wird nur für Cookies, Speicher und Cache unterstützt. Cookies sind für die gesamte registrierbare Domain ausgeschlossen.

- `hostnames` {{optional_inline}}

  - : `array` von `string`. Diese Eigenschaft gilt für Cookie-, IndexedDB-, lokalen Speicher- und Service-Worker-Registrierungselemente. Entfernen Sie nur Cookie-, IndexedDB-, lokalen Speicher- und Service-Worker-Registrierungselemente, die mit diesen Hostnamen verknüpft sind.

    Hier müssen Sie nur einen Hostnamen übergeben, ohne Protokoll (zum Beispiel `"google.com"` nicht `"https://google.com"`). Sie können die [`URL`](/de/docs/Web/API/URL) Schnittstelle verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines bestimmten Hostnamens verknüpft sind, werden _nicht_ entfernt: Sie müssen Subdomains ausdrücklich auflisten.

- `origin` {{optional_inline}}

  - : `array` von `string`. Liste der Ursprünge, für die Daten entfernt werden sollen. Kann nicht zusammen mit `excludeOrigins` verwendet werden. Wird nur für Cookies, Speicher und Cache unterstützt. Cookies werden für die gesamte registrierbare Domain gelöscht.

- `originTypes` {{optional_inline}}

  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Erweiterungen entfernt werden sollen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten (`unprotectedWeb`) entfernt. Bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, sollten Sie sehr vorsichtig sicherstellen, dass dies wirklich dem Wunsch des Benutzers entspricht.

    Dieses Objekt kann folgende Eigenschaften enthalten:

    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von normalen Webseiten entfernt.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von Websites entfernt, die als gehostete Apps installiert wurden.
    - `extension` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, werden Daten von Erweiterungen entfernt.

- `since` {{optional_inline}}
  - : `number`. Wie weit zurück in der Zeit die Daten entfernt werden sollen, angegeben in [Millisekunden seit dem UNIX-Epoch](https://de.wikipedia.org/wiki/Unixzeit). Beachten Sie, dass beim Entfernen des Browser-Cache der gesamte Cache immer entfernt wird und diese Option ignoriert wird. Wenn die `since`-Eigenschaft weggelassen wird, ist der Standardwert 0, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
