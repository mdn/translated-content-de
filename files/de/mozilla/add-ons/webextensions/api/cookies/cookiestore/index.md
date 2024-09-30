---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `CookieStore` der {{WebExtAPIRef("cookies")}} API repräsentiert einen Cookie-Speicher im Browser.

Fenster in verschiedenen Browsing-Modi können unterschiedliche Cookie-Speicher verwenden. Ein Beispiel ist der private Browsing-/Inkognito-Modus, der einen separaten Cookie-Speicher von einem Nicht-Inkognito-/privaten Fenster verwendet. Außerdem kann ein Fenster mehrere Cookie-Speicher verwenden, wenn man [Container-Tabs](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) in Firefox nutzt.

Siehe [Arbeiten mit der Cookies API](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API#cookie_stores) für weitere Informationen über Cookie-Speicher.

## Typ

Werte dieses Typs sind Objekte, die folgende Eigenschaften enthalten können:

- `id`
  - : Ein `string`, der den eindeutigen Bezeichner für den Cookie-Speicher darstellt.
- `incognito` {{optional_inline}}
  - : Ein boolescher Wert, der anzeigt, ob es sich um einen Inkognito-Cookie-Speicher handelt.
    Diese Eigenschaft wird in Chrome oder Safari nicht unterstützt. Sie können jedoch Inkognito-Cookie-Speicher in Chrome identifizieren, da deren `id` immer "1" ist.
- `tabIds`
  - : Ein `array` von `integers`, das alle Browser-Tabs identifiziert, die diesen Cookie-Speicher teilen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Snippet wird die Methode {{WebExtAPIRef("cookies.getAllCookieStores()")}} verwendet, um alle momentan im Browser verfügbaren Cookie-Speicher abzurufen und die ID jedes Cookie-Speichers sowie die Tabs, die derzeit jeden Cookie-Speicher teilen, auszugeben.

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

Das folgende Code-Snippet erfasst alle Cookie-Speicher und protokolliert dann die Gesamtzahl der Speicher und wie viele dieser Speicher Inkognito sind.

```js
browser.cookies.getAllCookieStores().then((stores) => {
  const incognitoStores = stores.map((store) => store.incognito);
  console.log(
    `Of ${stores.length} cookie stores, ${incognitoStores.length} are incognito.`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-CookieStore). Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
