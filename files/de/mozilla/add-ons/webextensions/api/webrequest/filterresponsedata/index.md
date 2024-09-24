---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
l10n:
  sourceCommit: 3994f738ebbe4d25e1e68f70cc45be072a22e0c3
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt für eine Anfrage zu erstellen. Der Stream-Filter gibt der Web-Erweiterung die volle Kontrolle über den Stream, mit der Fähigkeit, die Antwort zu überwachen und zu modifizieren. Es liegt in der Verantwortung der Erweiterung, den Stream zu schreiben und zu schließen oder zu trennen, da das Standardverhalten darin besteht, die Anfrage ohne Antwort offen zu halten.

Sie rufen diese Funktion typischerweise von einem `webRequest`-Ereignislistener auf.

Firefox verwendet einen optimierten Byte-Cache für Skriptanfragen. Dieser optimierte Byte-Cache überschreibt das normale Anforderungs-Caching. Daten aus diesem Cache stehen in einer für Erweiterungen nützlichen Form nicht zur Verfügung. Wenn Ihre Erweiterung Skripte filtern muss, erstellen Sie Ihren Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}}. Dadurch wird sichergestellt, dass der Filter vor dem Versuch der Cache-Beladung erstellt wird und somit der optimierte Cache vermieden wird.

## Berechtigungen

Um diese API zu verwenden, müssen Sie die `"webRequest"` und `"webRequestBlocking"` [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie für den Ereignis-Listener die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host haben. Zusätzlich:

- Ab Firefox 95 ist für die Verwendung dieser API zum Abfangen von Anfragen beim Laden von Service-Worker-Skripten die Berechtigung `"webRequestFilterResponse.serviceWorkerScript"` erforderlich.
- Ab Firefox 110 müssen Manifest V3 Erweiterungen auch die Berechtigung `"webRequestFilterResponse"` anfordern, um diese API zu verwenden.

## Syntax

```js-nolint
let filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Parameter

- `requestId`
  - : `string`. ID der zu filternden Anfrage. Diese können Sie aus dem `details`-Objekt erhalten, das an jeden `webRequest`-Ereignis-Listener übergeben wird.

### Rückgabewert

Ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt, das Sie verwenden können, um die Antwort zu überwachen und zu modifizieren.

## Beispiele

Dieses Beispiel zeigt eine minimale Implementierung, die die Streamdaten durchlässt und den Filter-Stream schließt, wenn der Stream das Empfangen von Daten beendet. Der Code würde von einem {{WebExtAPIRef("webRequest")}} Ereignis-Listener aufgerufen und der Ereignis-Listener liefert `details`.

```js
let filter = browser.webRequest.filterResponseData(details.requestId);
filter.ondata = (event) => {
  console.log(`filter.ondata received ${event.data.byteLength} bytes`);
  filter.write(event.data);
};
filter.onstop = (event) => {
  // Die Erweiterung sollte immer filter.close() oder filter.disconnect()
  // nach der Erstellung des StreamFilters aufrufen, ansonsten bleibt die
  // Antwort für immer erhalten.
  // Wenn die Verarbeitung der Antwortdaten abgeschlossen ist, verwenden Sie close.
  // Wenn verbleibende Antwortdaten von Firefox verarbeitet werden sollen,
  // verwenden Sie disconnect.
  filter.close();
};
```

Dieses Beispiel, entnommen aus der [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response) Beispiel-Erweiterung, erstellt einen Filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}} und verwendet ihn, um das erste Datenstück der Antwort zu modifizieren:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Ändern Sie einfach jede Instanz von Example in der HTTP-Antwort
    // zu WebExtension Example.
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
> Das obige Beispiel funktioniert nur für kleine Anfragen, die nicht gestückelt oder gestreamt werden. Fortgeschrittenere Beispiele sind dokumentiert mit {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}.

## Browser-Kompatibilität

{{Compat}}
