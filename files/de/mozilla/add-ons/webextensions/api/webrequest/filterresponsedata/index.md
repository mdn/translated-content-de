---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
l10n:
  sourceCommit: 3994f738ebbe4d25e1e68f70cc45be072a22e0c3
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine Anfrage zu erstellen. Der Stream-Filter gibt der Web-Erweiterung die volle Kontrolle über den Stream, mit der Möglichkeit, die Antwort zu überwachen und zu ändern. Es ist die Verantwortung der Erweiterung, den Stream zu schreiben und zu schließen oder zu trennen, da das Standardverhalten darin besteht, die Anfrage ohne Antwort offen zu halten.

Sie rufen diese Funktion typischerweise aus einem `webRequest`-Event-Listener heraus auf.

Firefox verwendet einen optimierten Byte-Cache für Skriptanfragen. Dieser optimierte Byte-Cache überschreibt das normale Anforderungs-Caching. Daten aus diesem Cache sind in einer Form, die für Erweiterungen nützlich ist, nicht verfügbar. Wenn Ihre Erweiterung Skripte filtern muss, erstellen Sie Ihren Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}}. Dies stellt sicher, dass der Filter vor dem Versuch, aus dem Cache zu laden, erstellt wird und somit den optimierten Cache umgeht.

## Berechtigungen

Um diese API verwenden zu können, müssen Sie die `"webRequest"`- und `"webRequestBlocking"`- [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen, und für den Event-Listener die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host. Zusätzlich:

- Ab Firefox 95 ist zur Verwendung dieser API zum Abfangen von Anfragen im Zusammenhang mit dem Laden von Service-Worker-Skripten auch die Berechtigung `"webRequestFilterResponse.serviceWorkerScript"` erforderlich.
- Ab Firefox 110 müssen Manifest V3-Erweiterungen auch die Berechtigung `"webRequestFilterResponse"` anfordern, um diese API verwenden zu können.

## Syntax

```js-nolint
let filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Parameter

- `requestId`
  - : `string`. ID der zu filternden Anfrage. Sie können diese aus dem `details`-Objekt erhalten, das an alle `webRequest`-Event-Listener übergeben wird.

### Rückgabewert

Ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt, das Sie verwenden können, um die Antwort zu überwachen und zu ändern.

## Beispiele

Dieses Beispiel zeigt eine minimale Implementierung, die die Stream-Daten durchläuft und den Filter-Stream schließt, wenn der Stream das Empfangen von Daten beendet. Der Code würde aus einem {{WebExtAPIRef("webRequest")}}-Event-Listener aufgerufen, und der Event-Listener stellt `details` bereit.

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

Dieses Beispiel, das dem Beispiel der [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response)-Erweiterung entnommen ist, erstellt einen Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}} und verwendet diesen, um den ersten Datenblock der Antwort zu ändern:

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
> Das obige Beispiel funktioniert nur für kleine Anfragen, die nicht segmentiert oder gestreamt werden. Fortgeschrittenere Beispiele sind mit {{WebExtAPIRef("webRequest.StreamFilter.ondata")}} dokumentiert.

## Browser-Kompatibilität

{{Compat}}
