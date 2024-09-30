---
title: webRequest.StreamFilter.ondata
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ein Ereignishandler, der wiederholt aufgerufen wird, wenn Antwortdaten verfügbar sind. Der Handler erhält ein [`Event`-Objekt](/de/docs/Web/API/Event) mit einer `data`-Eigenschaft. Die `data`-Eigenschaft enthält ein Stück der Antwortdaten als ein {{jsxref("ArrayBuffer")}}.

Um die Daten zu dekodieren, verwenden Sie entweder [`TextDecoder`](/de/docs/Web/API/TextDecoder) oder [`Blob`](/de/docs/Web/API/Blob).

Ohne einen `ondata`-Listener erhalten Sie den ursprünglichen Antwortinhalt nicht, und der Ausgabestream bleibt leer, es sei denn, es wird {{WebEXTAPIRef("webRequest.StreamFilter.write", "write")}} aufgerufen.

## Beispiele

Dieses Beispiel fügt einen `ondata`-Listener hinzu, der "Example" in der Antwort durch "WebExtension Example" ersetzt, indem die Methode {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwendet wird.

> [!NOTE]
> Dieses Beispiel funktioniert nur für Vorkommen von "Example", die vollständig innerhalb eines Datenstücks enthalten sind, und nicht für solche, die zwei Stücke (was bei großen Dokumenten ungefähr zu 0,1% der Zeit passieren kann) überspannen. Außerdem befasst es sich nur mit UTF-8-kodierten Dokumenten. Eine echte Implementierung müsste komplexer sein.

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    // Note that this will maybe not work as expected because the ending of the str can also
    // be "<h1>Examp" (because it is not the full response). So, it is better
    // to get the full response first and then doing the replace.
    str = str.replaceAll("Example", "WebExtension Example");
    filter.write(encoder.encode(str));
    // Doing filter.disconnect(); here would make us process only
    // the first chunk, and let the rest through unchanged. Note
    // that this would break multi-byte characters that occur on
    // the chunk boundary!
  };

  filter.onstop = (event) => {
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

Ein weiteres Beispiel zur Handhabung großer Dokumente:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    if (data.length === 1) {
      str = decoder.decode(data[0]);
    } else {
      for (let i = 0; i < data.length; i++) {
        const stream = i !== data.length - 1;
        str += decoder.decode(data[i], { stream });
      }
    }
    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Hier ist eine andere Version:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    for (const buffer of data) {
      str += decoder.decode(buffer, { stream: true });
    }
    str += decoder.decode(); // end-of-stream

    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Das obige Beispiel kann auch so geschrieben werden:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(decoder.decode(event.data, { stream: true }));
  };

  filter.onstop = (event) => {
    data.push(decoder.decode());

    let str = data.join("");
    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Dieses Beispiel verwendet ein [`Blob`](/de/docs/Web/API/Blob):

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    let str = await blob.text();
    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Dieses Beispiel nutzt die [`DOMParser`](/de/docs/Web/API/DOMParser) Schnittstelle:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();
  const parser = new DOMParser();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    const str = await blob.text();
    const doc = parser.parseFromString(str, blob.type);
    const nodes = doc.querySelectorAll("title, h1");
    for (const node of nodes) {
      node.innerText = node.innerText.replaceAll("Example", "WebExtension $&");
    }
    filter.write(encoder.encode(doc.documentElement.outerHTML));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Dieses Beispiel kombiniert alle Buffer zu einem einzigen Buffer:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(new Uint8Array(event.data));
  };

  filter.onstop = (event) => {
    let combinedLength = 0;
    for (const buffer of data) {
      combinedLength += buffer.length;
    }
    const combinedArray = new Uint8Array(combinedLength);
    let writeOffset = 0;
    for (const buffer of data) {
      combinedArray.set(buffer, writeOffset);
      writeOffset += buffer.length;
    }
    let str = decoder.decode(combinedArray);
    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Das obige Beispiel kann auch so geschrieben werden:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = async (event) => {
    const blob = new Blob(data, { type: "text/html" });
    const buffer = await blob.arrayBuffer();
    let str = decoder.decode(buffer);
    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

Dieses Beispiel zeigt, wie man erkennen kann, ob es das letzte Stück in der Antwort ist:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("utf-8");

  let str = "";
  filter.ondata = (event) => {
    let stream = true;
    const data = new Uint8Array(event.data.slice(-8, -1));
    if (String.fromCharCode(...data) === "</html>") {
      stream = false; // end-of-stream
    }
    str += decoder.decode(event.data, { stream });
  };

  filter.onstop = (event) => {
    str = str.replaceAll("Example", "WebExtension $&");
    filter.write(encoder.encode(str));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
