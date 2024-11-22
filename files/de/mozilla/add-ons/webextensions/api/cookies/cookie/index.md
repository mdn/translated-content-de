---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Der `Cookie`-Typ der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über einen HTTP-Cookie.

## Typ

Werte dieses Typs sind Objekte, die folgende Eigenschaften enthalten können:

- `domain`
  - : Ein `string`, der die Domain darstellt, zu der das Cookie gehört (z.B. "www.google.com" oder "example.com").
- `expirationDate` {{optional_inline}}
  - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit der UNIX-Epoche darstellt. Nicht bereitgestellt für Session-Cookies.
- `firstPartyDomain`
  - : Ein `string`, der die zugehörige First-Party-Domain des Cookies darstellt. Dies ist ein leerer String, wenn das Cookie gesetzt wurde, während die First-Party-Isolierung deaktiviert war. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- `hostOnly`
  - : Ein `boolean`, `true` wenn das Cookie ein host-only Cookie ist (d.h. der Host der Anfrage muss genau mit der Domain des Cookies übereinstimmen), oder `false` andernfalls.
- `httpOnly`
  - : Ein `boolean`, `true` wenn das Cookie als HttpOnly markiert ist (d.h. das Cookie ist für clientseitige Skripte unzugänglich), oder `false` andernfalls.
- `name`
  - : Ein `string`, der den Namen des Cookies repräsentiert.
- `partitionKey` {{optional_inline}}

  - : Ein `object`, das die Beschreibung der [storage partition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, in der sich das Cookie befindet. Dieses Objekt wird weggelassen (null), wenn das Cookie nicht in partitioniertem Speicher liegt. Dieses Objekt enthält folgende Eigenschaften:

    - `topLevelSite`
      - : Ein `string`, das die First-Party-URL der Speicherpartition des Cookies darstellt, falls sich das Cookie in einem nach Top-Level-Site partitionierten Speicher befindet.

- `path`
  - : Ein `string`, der den Pfad des Cookies darstellt.
- `secure`
  - : Ein `boolean`, `true` wenn das Cookie als sicher markiert ist (d.h. sein Geltungsbereich ist auf sichere Kanäle beschränkt, typischerweise HTTPS), oder `false` andernfalls.
- `session`
  - : Ein `boolean`, `true` wenn das Cookie ein Session-Cookie ist, oder `false` wenn es ein dauerhaftes Cookie mit einem Ablaufdatum ist.
- `sameSite`
  - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Zustand des Cookies angibt.
- `storeId`
  - : Ein `string`, das die ID des Cookie-Stores repräsentiert, der dieses Cookie enthält, wie von {{WebExtAPIRef("cookies.getAllCookieStores()")}} bereitgestellt.
- `value`
  - : Ein `string`, der den Wert des Cookies repräsentiert.

## Beispiele

Die meisten Methoden der Cookies-API beinhalten ein `Cookie`-Objekt als Eingabeparameter oder als Teil des Rückgabewerts. Zum Beispiel liefert ein Aufruf von {{WebExtAPIRef("cookies.getAll()")}} ein Array von `Cookie`-Objekten zurück.

Dieses Beispiel fragt nach allen Cookies und gibt dann einige der Werte von jedem der resultierenden `Cookie`-Objekte aus:

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
> Diese API basiert auf der Chromium-API [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-Cookie). Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
