---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `Cookie` der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über ein HTTP-Cookie.

## Typ

Werte dieses Typs sind Objekte, die die folgenden Eigenschaften enthalten können:

- `domain`
  - : Ein `string`, der die Domäne repräsentiert, zu der das Cookie gehört (z.B. "www\.google.com", "example.com").
- `expirationDate` {{optional_inline}}
  - : Eine `number`, die das Ablaufdatum des Cookies als die Anzahl der Sekunden seit dem UNIX-Epochenbeginn darstellt. Nicht angegeben für Sitzungscookies.
- `firstPartyDomain`
  - : Ein `string`, der die mit dem Cookie verknüpfte First-Party-Domäne repräsentiert. Dies wird ein leerer String sein, wenn das Cookie gesetzt wurde, während die First-Party-Isolation deaktiviert war. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- `hostOnly`
  - : Ein `boolean`, `true`, wenn das Cookie ein Host-Only-Cookie ist (d.h. der Host der Anfrage muss genau mit der Domäne des Cookies übereinstimmen), oder `false` andernfalls.
- `httpOnly`
  - : Ein `boolean`, `true`, wenn das Cookie als HttpOnly markiert ist (d.h. das Cookie ist für clientseitige Skripte unzugänglich), oder `false` andernfalls.
- `name`
  - : Ein `string`, der den Namen des Cookies repräsentiert.
- `partitionKey` {{optional_inline}}

  - : Ein `object`, das die Beschreibung der [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, die das Cookie enthält. Dieses Objekt wird weggelassen (null), wenn das Cookie nicht in partitioniertem Speicher ist. Dieses Objekt enthält die folgenden Eigenschaften:

    - `topLevelSite`
      - : Ein `string`, der die First-Party-URL der Speicherpartition des Cookies repräsentiert, wenn das Cookie in einem nach Top-Level-Site partitionierten Speicher ist.

- `path`
  - : Ein `string`, der den Pfad des Cookies darstellt.
- `secure`
  - : Ein `boolean`, `true`, wenn das Cookie als sicher markiert ist (d.h. sein Geltungsbereich ist auf sichere Kanäle, typischerweise HTTPS, beschränkt), oder `false` andernfalls.
- `session`
  - : Ein `boolean`, `true`, wenn das Cookie ein Sitzungscookie ist, oder `false`, wenn es sich um ein persistentes Cookie mit einem Ablaufdatum handelt.
- `sameSite`
  - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Zustand des Cookies anzeigt.
- `storeId`
  - : Ein `string`, der die ID des Cookiespeichers repräsentiert, der dieses Cookie enthält, wie von {{WebExtAPIRef("cookies.getAllCookieStores()")}} bereitgestellt.
- `value`
  - : Ein `string`, der den Wert des Cookies repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die meisten Methoden in der cookies API beinhalten, dass ein `Cookie`-Objekt entweder als Eingabeparameter verwendet wird oder Teil des Rückgabewerts ist. Beispielsweise gibt ein Aufruf von {{WebExtAPIRef("cookies.getAll()")}} ein Array von `Cookie`-Objekten zurück.

Im folgenden Beispiel haben wir nach allen Cookies gefragt und dann einige der Werte jedes der resultierenden `Cookie`-Objekte protokolliert:

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

let gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-Cookie) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
