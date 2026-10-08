---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

Sucht in einem Tab nach Text.

Mit dieser Funktion können Sie normale HTTP(S)-Webseiten durchsuchen. Sie durchsucht einen einzelnen Tab: Sie können die ID eines bestimmten Tabs angeben oder standardmäßig den aktiven Tab durchsuchen. Dabei werden alle Frames im Tab durchsucht.

Sie können festlegen, dass bei der Suche zwischen Groß- und Kleinschreibung unterschieden wird und nur ganze Wörter gefunden werden.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Treffer zurück. Mit den Optionen `includeRangeData` und `includeRectData` erhalten Sie weitere Informationen über die Position der Treffer im Ziel-Tab.

Die Funktion speichert die Ergebnisse intern. Wenn anschließend eine Erweiterung {{WebExtAPIRef("find.highlightResults()")}} aufruft, werden die Ergebnisse dieses Suchaufrufs hervorgehoben, bis jemand erneut `find()` aufruft.

Dies ist eine asynchrone Funktion, die eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.find.find(
  queryPhrase,       // string
  options            // optional object
)
```

### Parameter

- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann die folgenden, sämtlich optionalen Eigenschaften enthalten:
    - `caseSensitive`
      - : `boolean`. Wenn `true`, wird bei der Suche zwischen Groß- und Kleinschreibung unterschieden. Der Standardwert ist `false`.
    - `entireWord`
      - : `boolean`. Nur ganze Wörter werden gefunden: „Tok“ wird also nicht innerhalb von „Tokyo“ gefunden. Der Standardwert ist `false`.
    - `includeRangeData`
      - : `boolean`. Nimmt Bereichsdaten in die Antwort auf, die beschreiben, wo der Treffer im DOM der Seite gefunden wurde. Der Standardwert ist `false`.
    - `includeRectData`
      - : `boolean`. Nimmt Rechteckdaten in die Antwort auf, die beschreiben, wo der Treffer auf der gerenderten Seite gefunden wurde. Der Standardwert ist `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen Buchstaben mit diakritischen Zeichen und den entsprechenden Grundbuchstaben. Bei `true` findet beispielsweise eine Suche nach „résumé“ keinen Treffer für „resume“. Der Standardwert ist `false`.
    - `tabId`
      - : `integer`. ID des Tabs, der durchsucht werden soll. Standardmäßig wird der aktive Tab durchsucht.

- `queryPhrase`
  - : `string`. Der zu suchende Text.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem Objekt erfüllt wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Treffer.
- `rangeData` {{optional_inline}}
  - : `array`. Wenn `includeRangeData` im Parameter `options` angegeben wurde, ist diese Eigenschaft enthalten. Sie wird als Array von `RangeData`-Objekten bereitgestellt, eines für jeden Treffer. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum der Treffer gefunden wurde. So könnte eine Erweiterung beispielsweise den Text um jeden Treffer abrufen, um den Kontext der Treffer anzuzeigen.

    Die Einträge entsprechen denen in `rectData`: `rangeData[i]` beschreibt also denselben Treffer wie `rectData[i]`.

    Jedes `RangeData`-Objekt enthält die folgenden Eigenschaften:
    - `endOffset`
      - : Die Position des Trefferendes innerhalb seines Textknotens.
    - `endTextNodePos`
      - : Die Position des Textknotens, in dem der Treffer endet.
    - `framePos`
      - : Der Index des Frames, der den Treffer enthält. 0 entspricht dem übergeordneten Fenster. Die Reihenfolge der Objekte im Array `rangeData` entspricht der Reihenfolge der Frame-Indizes: Beispielsweise ist `framePos` für die erste Gruppe von `rangeData`-Objekten 0, für die nächste Gruppe 1 und so weiter.
    - `startOffset`
      - : Die Position des Trefferanfangs innerhalb seines Textknotens.
    - `startTextNodePos`
      - : Die Position des Textknotens, in dem der Treffer beginnt.

- `rectData` {{optional_inline}}
  - : `array`. Wenn `includeRectData` im Parameter `options` angegeben wurde, ist diese Eigenschaft enthalten. Sie ist ein Array von `RectData`-Objekten und enthält Client-Rechtecke für den gesamten bei der Suche gefundenen Text, relativ zur oberen linken Ecke des Viewports. Erweiterungen können damit die Treffer auf eigene Weise hervorheben.

    Jedes `RectData`-Objekt enthält Rechteckdaten für einen einzelnen Treffer. Es hat zwei Eigenschaften:
    - `rectsAndTexts`
      - : Ein Objekt mit zwei Eigenschaften, die beide Arrays sind:
        - `rectList`: ein Array von Objekten mit jeweils vier ganzzahligen Eigenschaften: `top`, `left`, `bottom`, `right`. Sie beschreiben ein Rechteck relativ zur oberen linken Ecke des Viewports.
        - `textList`: ein Array von Zeichenfolgen, das dem Array `rectList` entspricht. Der Eintrag unter `textList[i]` enthält den Teil des Treffers, der von dem Rechteck unter `rectList[i]` begrenzt wird.

        Betrachten Sie beispielsweise einen Ausschnitt einer Webseite, der so aussieht:

        ![Text mit der Aufschrift „this domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.“ und einem Link „More information“.](rects-1.png)

        Wenn Sie nach „You may“ suchen, muss der Treffer durch zwei Rechtecke beschrieben werden:

        ![Text mit der Aufschrift „This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.“ Die Wörter „You may“ sind hervorgehoben.](rects-2.png)

        In diesem Fall enthalten `rectsAndTexts.rectList` und `rectsAndTexts.textList` im `RectData`-Objekt, das diesen Treffer beschreibt, jeweils zwei Einträge.
        - `textList[0]` enthält „You “ und `rectList[0]` das zugehörige umschließende Rechteck.
        - `textList[1]` enthält „may“ und `rectList[1]` das zugehörige umschließende Rechteck.

    - `text`
      - : Der vollständige Text des Treffers, im obigen Beispiel „You may“.

## Beispiele

### Grundlegende Beispiele

Durchsuchen Sie den aktiven Tab nach „banana“, protokollieren Sie die Anzahl der Treffer und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Durchsuchen Sie alle Tabs nach „banana“ (beachten Sie, dass hierfür die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) „tabs“ oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich sind, da auf `tab.url` zugegriffen wird):

```js
async function findInAllTabs(allTabs) {
  for (const tab of allTabs) {
    const results = await browser.find.find("banana", { tabId: tab.id });
    console.log(`In page "${tab.url}": ${results.count} matches.`);
  }
}

browser.tabs.query({}).then(findInAllTabs);
```

### `rangeData` verwenden

In diesem Beispiel verwendet die Erweiterung `rangeData`, um den Kontext des Treffers zu ermitteln. Der Kontext ist der vollständige `textContent` des Knotens, in dem der Treffer gefunden wurde. Wenn sich der Treffer über mehrere Knoten erstreckt, ist der Kontext die Verkettung des `textContent` aller betroffenen Knoten.

Beachten Sie, dass dieses Beispiel der Einfachheit halber keine Seiten mit Frames berücksichtigt. Um diese zu unterstützen, müssten Sie `rangeData` in Gruppen aufteilen – eine pro Frame – und das Skript in jedem Frame ausführen.

Das Hintergrundskript:

```js
// background.js

async function getContexts(matches) {
  // get the active tab ID
  const activeTabArray = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  const tabId = activeTabArray[0].id;

  // execute the content script in the active tab
  await browser.tabs.executeScript(tabId, { file: "get-context.js" });
  // ask the content script to get the contexts for us
  const contexts = await browser.tabs.sendMessage(tabId, {
    ranges: matches.rangeData,
  });
  for (const context of contexts) {
    console.log(context);
  }
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.find.find("example", { includeRangeData: true }).then(getContexts);
});
```

Das Content-Skript:

```js
/**
 * Get all the text nodes into a single array
 */
function getNodes() {
  const walker = document.createTreeWalker(
    document,
    window.NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  const nodes = [];
  while ((node = walker.nextNode())) {
    nodes.push(node);
  }

  return nodes;
}

/**
 * Gets all text nodes in the document, then for each match, return the
 * complete text content of nodes that contained the match.
 * If a match spanned more than one node, concatenate the textContent
 * of each node.
 */
function getContexts(ranges) {
  const contexts = [];
  const nodes = getNodes();

  for (const range of ranges) {
    let context = nodes[range.startTextNodePos].textContent;
    let pos = range.startTextNodePos;
    while (pos < range.endTextNodePos) {
      pos++;
      context += nodes[pos].textContent;
    }
    contexts.push(context);
  }
  return contexts;
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse(getContexts(message.ranges));
});
```

### `rectData` verwenden

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Treffer zu „schwärzen“, indem sie schwarze DIVs über die umschließenden Rechtecke legt:

![Drei Suchergebnisse, bei denen Teile des Textes durch schwarze Rechtecke geschwärzt sind.](redacted.png)

Beachten Sie, dass dies in vielerlei Hinsicht eine ungeeignete Methode zum Schwärzen von Seiten ist.

Das Hintergrundskript:

```js
// background.js

async function redact(matches) {
  // get the active tab ID
  const activeTabArray = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  const tabId = activeTabArray[0].id;

  // execute the content script in the active tab
  await browser.tabs.executeScript(tabId, { file: "redact.js" });
  // ask the content script to redact matches for us
  await browser.tabs.sendMessage(tabId, { rects: matches.rectData });
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.find.find("banana", { includeRectData: true }).then(redact);
});
```

Das Content-Skript:

```js
// redact.js

/**
 * Add a black DIV where the rect is.
 */
function redactRect(rect) {
  const redaction = document.createElement("div");
  redaction.style.backgroundColor = "black";
  redaction.style.position = "absolute";
  redaction.style.top = `${rect.top}px`;
  redaction.style.left = `${rect.left}px`;
  redaction.style.width = `${rect.right - rect.left}px`;
  redaction.style.height = `${rect.bottom - rect.top}px`;
  document.body.appendChild(redaction);
}

/**
 * Go through every rect, redacting them.
 */
function redactAll(rectData) {
  for (const match of rectData) {
    for (const rect of match.rectsAndTexts.rectList) {
      redactRect(rect);
    }
  }
}

browser.runtime.onMessage.addListener((message) => {
  redactAll(message.rects);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
