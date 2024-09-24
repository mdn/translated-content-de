---
title: webRequest.StreamFilter.ondata
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ein Event-Handler, der wiederholt aufgerufen wird, wenn Antwortdaten verfügbar sind. Dem Handler wird ein [`Event`-Objekt](/de/docs/Web/API/Event) mit einer `data`-Eigenschaft übergeben. Die `data`-Eigenschaft enthält ein Datenstück der Antwort als {{jsxref("ArrayBuffer")}}.

Um die Daten zu dekodieren, verwenden Sie entweder {{domxref("TextDecoder")}} oder {{domxref("Blob")}}.

Ohne einen `ondata`-Listener erhalten Sie den ursprünglichen Antwortinhalt nicht, und der Ausgabestream bleibt leer, es sei denn, {{WebEXTAPIRef("webRequest.StreamFilter.write", "write")}} wird aufgerufen.

## Beispiele

Dieses Beispiel fügt einen `ondata`-Listener hinzu, der "Example" in der Antwort durch "WebExtension Example" ersetzt, indem die Methode {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwendet wird.

> [!NOTE]
> Dieses Beispiel funktioniert nur für Vorkommen von "Example", die vollständig innerhalb eines Datenstücks enthalten sind, und nicht für solche, die sich über zwei Stücke erstrecken (was bei großen Dokumenten ~0,1 % der Fälle vorkommen kann). Außerdem bezieht es sich nur auf UTF-8-kodierte Dokumente. Eine reale Implementierung müsste komplexer sein.

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Ändern Sie einfach jede Instanz von Example in der HTTP-Antwort
    // zu WebExtension Example.
    // Beachten Sie, dass dies möglicherweise nicht wie erwartet funktioniert, da das Ende von str auch
    // "<h1>Examp" sein kann (weil es nicht der vollständige Antwort ist). Es ist daher besser,
    // zuerst die vollständige Antwort zu erhalten und dann den Ersatz durchzuführen.
    str = str.replaceAll("Example", "WebExtension Example");
    filter.write(encoder.encode(str));
    // Wenn Sie filter.disconnect(); hier ausführen würden, würden Sie nur
    // das erste Stück verarbeiten und den Rest unverändert durchlassen. Beachten Sie
    // dass dies mehrbyteiger Zeichen, die an der Stückgrenze auftreten,
    // zerstören würde!
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

Ein weiteres Beispiel zum Umgang mit großen Dokumenten:

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

Hier ist eine weitere Version:

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

Dieses Beispiel verwendet ein {{domxref("Blob")}}:

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

Dieses Beispiel nutzt das Interface {{domxref("DOMParser")}}:

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

Dieses Beispiel kombiniert alle Puffer in einem einzigen Puffer:

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

Dieses Beispiel zeigt, wie man erkennt, ob es sich um das letzte Stück in der Antwort handelt:

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
