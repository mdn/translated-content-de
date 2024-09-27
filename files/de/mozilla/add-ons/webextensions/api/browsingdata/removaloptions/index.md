---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der **`browsingData.RemovalOptions`**-Typ enthält Optionen, um bestimmte Aspekte der Entfernung von Browserdaten zu steuern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}

  - : `string`. Diese Eigenschaft gilt nur für Cookies und indexedDB-Elemente. Die Entfernung ist auf Elemente beschränkt, die zu einem bestimmten [Cookie-Store](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) gehören, wie durch die ID angegeben. Weitere Informationen finden Sie unter [Verwenden von kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

    > [!NOTE]
    > In Firefox Nightly wird auch die Entfernung von localStorage-Elementen nach `cookieStoreId` unterstützt.

- `hostnames` {{optional_inline}}

  - : `Array` von `string`. Diese Eigenschaft gilt für Cookie-, indexedDB-, Local Storage- und Service Worker-Registrierungselemente. Entfernen Sie nur Cookie-, indexedDB-, Local Storage- und Service Worker-Registrierungselemente, die mit diesen Hostnamen verbunden sind.

    Sie müssen hier nur einen Hostnamen ohne Protokoll angeben (zum Beispiel `"google.com"` nicht `"https://google.com"`). Sie können das [`URL`](/de/docs/Web/API/URL)-Interface verwenden, um eine rohe URL zu parsen und den Hostnamen abzurufen. Elemente, die mit Subdomains eines angegebenen Hostnamens verknüpft sind, werden _nicht_ entfernt: Sie müssen Subdomains explizit auflisten.

- `originTypes` {{optional_inline}}

  - : `object`. Wird verwendet, um zu steuern, ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Erweiterungen entfernt werden sollen. Wenn diese Option weggelassen wird, werden nur Daten von normalen Webseiten ("`unprotectedWeb`") entfernt. Seien Sie sehr vorsichtig, bevor Sie Daten von Web-Apps oder Erweiterungen entfernen, um sicherzustellen, dass dies wirklich der Benutzerwunsch ist.

    Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Falls vorhanden und `true`, Daten von normalen Webseiten entfernen.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Falls vorhanden und `true`, Daten von Webseiten entfernen, die als gehostete Apps installiert wurden.
    - `extension` {{optional_inline}}
      - : `boolean`. Falls vorhanden und `true`, Daten von Erweiterungen entfernen.

- `since` {{optional_inline}}
  - : `number`. Wie lange zurück in der Zeit Daten entfernt werden sollen, angegeben in [Millisekunden seit dem UNIX-Epoch](https://en.wikipedia.org/wiki/Unix_time). Beachten Sie, dass beim Entfernen des Browser-Caches immer der gesamte Cache entfernt wird und diese Option ignoriert wird. Wenn die `since`-Eigenschaft weggelassen wird, wird sie auf 0 gesetzt, was "für immer" bedeutet.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API.
