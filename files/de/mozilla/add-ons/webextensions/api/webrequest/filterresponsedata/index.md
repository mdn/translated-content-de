---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie diese Funktion, um ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine Anfrage zu erstellen. Der Stream-Filter gibt der Web-Erweiterung die volle Kontrolle über den Stream mit der Möglichkeit, die Antwort zu überwachen und zu modifizieren. Es liegt in der Verantwortung der Erweiterung, den Stream zu schreiben und zu schließen oder zu trennen, da das Standardverhalten darin besteht, die Anfrage offen zu halten, ohne eine Antwort zu senden.

In der Regel rufen Sie diese Funktion von einem `webRequest`-Ereignis-Listener auf.

Firefox verwendet einen optimierten Byte-Cache für Skriptanfragen. Dieser optimierte Byte-Cache überschreibt das normale Anfragen-Caching. Daten aus diesem Cache sind für Erweiterungen nicht in einer nützlichen Form verfügbar. Wenn Ihre Erweiterung Skripte filtern muss, erstellen Sie Ihren Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}}. Dies stellt sicher, dass der Filter vor dem Versuch, aus dem Cache zu laden, erstellt wird und somit den optimierten Cache umgeht.

## Berechtigungen

Um diese API zu verwenden, müssen Sie die `"webRequest"`- und `"webRequestBlocking"`- [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie für den Ereignis-Listener die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host besitzen. Zusätzlich gilt:

- Ab Firefox 95 ist zum Abfangen von Anfragen, die mit dem Laden von Service Worker-Skripten zusammenhängen, auch die Berechtigung `"webRequestFilterResponse.serviceWorkerScript"` erforderlich.
- Ab Firefox 110 müssen Manifest V3-Erweiterungen auch die Berechtigung `"webRequestFilterResponse"` anfordern, um diese API zu verwenden.

## Syntax

```js-nolint
let filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Parameter

- `requestId`
  - : `string`. ID der zu filternden Anfrage. Sie können diese von dem `details`-Objekt erhalten, das an alle `webRequest`-Ereignis-Listener übergeben wird.

### Rückgabewert

Ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt, mit dem Sie die Antwort überwachen und modifizieren können.

## Beispiele

Dieses Beispiel zeigt eine minimale Implementierung, die die Stream-Daten durchreicht und den Filter-Stream schließt, wenn der Stream das Empfangen von Daten beendet. Der Code würde von einem {{WebExtAPIRef("webRequest")}}-Ereignis-Listener aufgerufen, und der Ereignis-Listener stellt `details` bereit.

```js
let filter = browser.webRequest.filterResponseData(details.requestId);
filter.ondata = (event) => {
  console.log(`filter.ondata received ${event.data.byteLength} bytes`);
  filter.write(event.data);
};
filter.onstop = (event) => {
  // The extension should always call filter.close() or filter.disconnect()
  // after creating the StreamFilter, otherwise the response is kept alive forever.
  // If processing of the response data is finished, use close. If any remaining
  // response data should be processed by Firefox, use disconnect.
  filter.close();
};
```

Dieses Beispiel, entnommen aus der [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response) Beispiel-Erweiterung, erstellt einen Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}} und verwendet ihn, um den ersten Datenblock der Antwort zu modifizieren:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replaceAll("Example", "WebExtension Example");
    filter.write(encoder.encode(str));
    filter.disconnect();
  };

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

> [!NOTE]
> Das obige Beispiel funktioniert nur für kleine Anfragen, die nicht in Blöcken oder gestreamt werden. Fortgeschrittenere Beispiele werden mit {{WebExtAPIRef("webRequest.StreamFilter.ondata")}} dokumentiert.

## Browser-Kompatibilität

{{Compat}}
