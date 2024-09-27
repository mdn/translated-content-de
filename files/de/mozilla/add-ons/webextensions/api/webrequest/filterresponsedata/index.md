---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
l10n:
  sourceCommit: 3994f738ebbe4d25e1e68f70cc45be072a22e0c3
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine Anfrage zu erstellen. Der Stream-Filter gibt der Web-Erweiterung vollständige Kontrolle über den Stream, mit der Fähigkeit, die Antwort zu überwachen und zu modifizieren. Es liegt in der Verantwortung der Erweiterung, den Stream zu schreiben und zu schließen oder zu trennen, da das Standardverhalten darin besteht, die Anfrage ohne Antwort offen zu halten.

Diese Funktion wird typischerweise aus einem `webRequest`-Ereignislistener aufgerufen.

Firefox verwendet einen optimierten Byte-Cache für Skriptanfragen. Dieser optimierte Byte-Cache überschreibt das normale Anforderungs-Caching. Daten aus diesem Cache sind nicht in einer für Erweiterungen nützlichen Form verfügbar. Wenn Ihre Erweiterung Skripte filtern muss, erstellen Sie Ihren Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}}. Dadurch wird sichergestellt, dass der Filter erstellt wird, bevor versucht wird, aus dem Cache zu laden, und der optimierte Cache vermieden wird.

## Berechtigungen

Um diese API zu verwenden, müssen Sie die Berechtigungen `"webRequest"` und `"webRequestBlocking"` [API permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben, und für den Ereignislistener die [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host. Zusätzlich:

- Ab Firefox 95 ist die Berechtigung `"webRequestFilterResponse.serviceWorkerScript"` erforderlich, um diese API zu verwenden, um Anfragen abzufangen, die mit dem Laden von Service Worker-Skripten zusammenhängen.
- Ab Firefox 110 müssen Manifest V3-Erweiterungen auch die Berechtigung `"webRequestFilterResponse"` anfordern, um diese API zu verwenden.

## Syntax

```js-nolint
let filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Parameter

- `requestId`
  - : `string`. ID der zu filternden Anfrage. Sie können diese aus dem `details`-Objekt erhalten, das an beliebige `webRequest`-Ereignislistener übergeben wird.

### Rückgabewert

Ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt, das verwendet werden kann, um die Antwort zu überwachen und zu modifizieren.

## Beispiele

Dieses Beispiel zeigt eine minimale Implementierung, die die Stream-Daten durchleitet und den Filterstream schließt, wenn der Stream das Empfangen von Daten beendet. Der Code würde von einem {{WebExtAPIRef("webRequest")}}-Ereignislistener aufgerufen, und der Ereignislistener stellt `details` bereit.

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

Dieses Beispiel, entnommen aus der [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response)-Beispielfall-Erweiterung, erstellt einen Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}} und verwendet diesen, um das erste Stück der Antwort zu modifizieren:

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
> Das obige Beispiel funktioniert nur für kleine Anfragen, die nicht in Stücke aufgeteilt oder gestreamt werden. Fortgeschrittenere Beispiele sind mit {{WebExtAPIRef("webRequest.StreamFilter.ondata")}} dokumentiert.

## Browser-Kompatibilität

{{Compat}}
