---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Der `Cookie`-Typ der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über ein HTTP-Cookie.

## Typ

Werte dieses Typs sind Objekte, die folgende Eigenschaften enthalten können:

- `domain`
  - : Ein `string`, der die Domain repräsentiert, zu der das Cookie gehört (z.B. "www.google.com" oder "example.com").
- `expirationDate` {{optional_inline}}
  - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit dem UNIX-Epoch darstellt. Nicht für Session-Cookies bereitgestellt.
- `firstPartyDomain`
  - : Ein `string`, der die Erstanbieter-Domain darstellt, die mit dem Cookie verknüpft ist. Dies ist ein leerer String, wenn das Cookie gesetzt wurde, während die Erstanbieter-Isolation deaktiviert war. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- `hostOnly`
  - : Ein `boolean`, `true`, wenn das Cookie ein Host-Only-Cookie ist (d.h. der Host der Anfrage muss exakt mit der Domain des Cookies übereinstimmen), oder `false` sonst.
- `httpOnly`
  - : Ein `boolean`, `true`, wenn das Cookie als HttpOnly markiert ist (d.h. das Cookie ist für clientseitige Skripte nicht zugänglich), oder `false` sonst.
- `name`
  - : Ein `string`, der den Namen des Cookies darstellt.
- `partitionKey` {{optional_inline}}

  - : Ein `object`, das die Beschreibung der [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, die das Cookie enthält. Dieses Objekt wird ausgelassen (null), wenn das Cookie nicht in partitioniertem Speicher ist. Dieses Objekt enthält die folgenden Eigenschaften:
    - `topLevelSite`
      - : Ein `string`, der die Erstanbieter-URL der Speicherpartition des Cookies darstellt, falls das Cookie in Speicher ist, der durch die Top-Level-Site partitioniert ist.

- `path`
  - : Ein `string`, der den Pfad des Cookies darstellt.
- `secure`
  - : Ein `boolean`, `true`, wenn das Cookie als sicher markiert ist (d.h. sein Umfang ist auf sichere Kanäle, typischerweise HTTPS, beschränkt), oder `false` sonst.
- `session`
  - : Ein `boolean`, `true`, wenn das Cookie ein Session-Cookie ist, oder `false`, wenn es ein persistentes Cookie mit einem Ablaufdatum ist.
- `sameSite`
  - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Status des Cookies angibt.
- `storeId`
  - : Ein `string`, der die ID des Cookie-Speichers darstellt, der dieses Cookie enthält, wie von {{WebExtAPIRef("cookies.getAllCookieStores()")}} bereitgestellt.
- `value`
  - : Ein `string`, der den Wert des Cookies darstellt.

## Beispiele

Die meisten Methoden in der Cookies-API beinhalten ein `Cookie`-Objekt als Eingabeparameter oder als Teil des Rückgabewerts. Zum Beispiel gibt ein Aufruf von {{WebExtAPIRef("cookies.getAll()")}} ein Array von `Cookie`-Objekten zurück.

Dieses Beispiel fragt nach allen Cookies und protokolliert dann einige der Werte aus jedem der resultierenden `Cookie`-Objekte:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-Cookie) API von Chromium. Diese Dokumentation wird abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
