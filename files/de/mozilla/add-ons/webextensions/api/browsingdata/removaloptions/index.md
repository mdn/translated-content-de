---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Der Typ **`browsingData.RemovalOptions`** enthält Optionen zur Steuerung der Entfernung von Browserdaten.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : `string`. Diese Eigenschaft gilt nur für Cookies, indexedDB und lokalen Speicher ([`localStorage`](/de/docs/Web/API/Window/localStorage)) Elemente. Die Entfernung ist auf Elemente beschränkt, die zu einem bestimmten [Cookie-Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

- `excludeOrigin` {{optional_inline}}
  - : `array` von `string`. Liste von Ursprüngen, die vom Entfernungsprozess ausgeschlossen werden sollen. Kann nicht zusammen mit `origins` verwendet werden. Wird nur für Cookies, Speicher und Cache unterstützt. Cookies werden für die gesamte registrierbare Domain ausgeschlossen.

- `hostnames` {{optional_inline}}
  - : `array` von `string`. Diese Eigenschaft gilt für Cookie-, indexedDB-, lokalen Speicher- und Service Worker-Registrierungselemente. Entfernen Sie nur Cookie-, indexedDB-, lokalen Speicher- und Service Worker-Registrierungselemente, die mit diesen Hostnamen verbunden sind.

    Sie müssen hier nur einen Hostnamen angeben, ohne Protokoll (zum Beispiel `"google.com"` nicht `"https://google.com"`). Sie können die [`URL`](/de/docs/Web/API/URL) Schnittstelle verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines bestimmten Hostnamens verbunden sind, werden _nicht_ entfernt: Sie müssen Subdomains explizit angeben.

- `origin` {{optional_inline}}
  - : `array` von `string`. Liste der Ursprünge, für die Daten entfernt werden sollen. Kann nicht zusammen mit `excludeOrigins` verwendet werden. Wird nur für Cookies, Speicher und Cache unterstützt. Cookies werden für die gesamte registrierbare Domain gelöscht.

- `originTypes` {{optional_inline}}
  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten oder auch von Erweiterungen entfernt werden sollen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten (`unprotectedWeb`) entfernt. Bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, stellen Sie sicher, dass dies wirklich das ist, was der Benutzer möchte.

    Dieses Objekt kann eine der folgenden Eigenschaften enthalten:
    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, entfernen Sie Daten von normalen Webseiten.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, entfernen Sie Daten von Webseiten, die als gehostete Apps installiert wurden. (Diese Option ist redundant, da gehostete Web-Apps nicht mehr unterstützt werden.)
    - `extension` {{optional_inline}}
      - : `boolean`. Wenn vorhanden und `true`, entfernen Sie Daten von Erweiterungen.

- `since` {{optional_inline}}
  - : `number`. Wie weit in der Vergangenheit Daten entfernt werden sollen, angegeben in [Millisekunden seit dem UNIX-Epoche](https://en.wikipedia.org/wiki/Unix_time). Beachten Sie, dass beim Entfernen des Browser-Caches der gesamte Cache immer entfernt wird und diese Option ignoriert wird. Wenn die `since` Eigenschaft weggelassen wird, ist der Standardwert 0, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
