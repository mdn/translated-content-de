---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Durchsucht einen Tab nach Text.

Sie können diese Funktion verwenden, um normale HTTP(S)-Webseiten zu durchsuchen. Sie durchsucht einen einzelnen Tab: Sie können die ID eines bestimmten Tabs angeben, den Sie durchsuchen möchten, oder standardmäßig wird der aktive Tab durchsucht. Sie durchsucht alle Frames im Tab.

Sie können die Suche zwischen Groß- und Kleinschreibung unterscheiden lassen und auf ganze Wörter beschränken.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Übereinstimmungen zurück. Indem Sie die Optionen `includeRangeData` und `includeRectData` übergeben, können Sie weitere Informationen über die Position der Übereinstimmungen im Ziel-Tab erhalten.

Diese Funktion speichert die Ergebnisse intern, sodass beim nächsten Aufruf von {{WebExtAPIRef("find.highlightResults()")}} durch eine Erweiterung die Ergebnisse dieses Suchaufrufs hervorgehoben werden, bis das nächste Mal jemand `find()` aufruft.

Diese Funktion ist asynchron und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück.

## Syntax

```js-nolint
browser.find.find(
  queryphrase,       // string
  options            // optional object
)
```

### Parameter

- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann eine der folgenden Eigenschaften enthalten, die alle optional sind:

    - `caseSensitive`
      - : `boolean`. Wenn `true`, ist die Suche groß-/kleinschreibungssensitiv. Standard ist `false`.
    - `entireWord`
      - : `boolean`. Nur ganze Wörter finden: "Tok" wird nicht in "Tokyo" gefunden. Standard ist `false`.
    - `includeRangeData`
      - : `boolean`. Einschließlich der Bereichsdaten in der Antwort, die beschreiben, wo im Seiten-DOM die Übereinstimmung gefunden wurde. Standard ist `false`.
    - `includeRectData`
      - : `boolean`. Einschließlich der Rechteckdaten in der Antwort, die beschreiben, wo im dargestellten Seiteninhalt die Übereinstimmung gefunden wurde. Standard ist `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen Akzentbuchstaben und ihren Grundbuchstaben. Zum Beispiel, wenn auf `true` gesetzt, wird bei der Suche nach "résumé" keine Übereinstimmung mit "resume" gefunden. Standard ist `false`.
    - `tabId`
      - : `integer`. ID des zu durchsuchenden Tabs. Standard ist der aktive Tab.

- `queryphrase`
  - : `string`. Der Text, nach dem gesucht werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}

  - : `array`. Wenn `includeRangeData` im `options`-Parameter angegeben wurde, ist diese Eigenschaft enthalten. Sie wird als Array von `RangeData`-Objekten bereitgestellt, eines für jede Übereinstimmung. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum die Übereinstimmung gefunden wurde. Dies würde es einer Erweiterung ermöglichen, zum Beispiel den Text um jede Übereinstimmung herum zu erhalten, um Kontext für die Übereinstimmungen anzuzeigen.

    Die Elemente entsprechen den Elementen in `rectData`, sodass `rangeData[i]` dieselbe Übereinstimmung beschreibt wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:

    - `endOffset`
      - : Die ordinale Position des Endes der Übereinstimmung innerhalb ihres Textknotens.
    - `endTextNodePos`
      - : Die ordinale Position des Textknotens, in dem die Übereinstimmung endet.
    - `framePos`
      - : Der Index des Frames, der die Übereinstimmung enthält. 0 entspricht dem übergeordneten Fenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData`-Array sequentiell mit der Reihenfolge der Frame-Indizes übereinstimmt: zum Beispiel wird `framePos` für die erste Sequenz von `rangeData`-Objekten 0 sein, `framePos` für die nächste Sequenz wird 1 sein, usw.
    - `startOffset`
      - : Die ordinale Position des Anfangs der Übereinstimmung innerhalb ihres Textknotens.
    - `startTextNodePos`
      - : Die ordinale Position des Textknotens, in dem die Übereinstimmung beginnt.

- `rectData` {{optional_inline}}

  - : `array`. Wenn `includeRectData` im `options`-Parameter angegeben wurde, ist diese Eigenschaft enthalten. Es ist ein Array von `RectData`-Objekten. Es enthält Client-Rechtecke für den gesamten im Suchvorgang gefundenen Text, relativ zum oberen linken Rand des Viewports. Erweiterungen können dies verwenden, um die Ergebnisse individuell hervorzuheben.

    Jedes `RectData`-Objekt enthält Rechteckdaten für eine einzelne Übereinstimmung. Es hat zwei Eigenschaften:

    - `rectsAndTexts`

      - : Ein Objekt, das zwei Eigenschaften enthält, beide Arrays:

        - `rectList`: ein Array von Objekten, die jeweils vier ganzzahlige Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Viewports.
        - `textList`: ein Array von Zeichenfolgen, entsprechend dem `rectList`-Array. Der Eintrag bei `textList[i]` enthält den Teil der Übereinstimmung, der durch das Rechteck bei `rectList[i]` begrenzt wird.

        Zum Beispiel, betrachten Sie einen Teil einer Webseite, der so aussieht:

        ![Text, der "diese Domain ist dazu | gedacht als Beispiel in Dokumenten verwendet zu werden. Sie können diese Domain in Beispielen ohne vorherige Absprache oder Genehmigung verwenden." liest und einen Link "Weitere Informationen".](rects-1.png)

        Wenn Sie nach "You may" suchen, muss die Übereinstimmung durch zwei Rechtecke beschrieben werden:

        ![Diese Domain ist dazu gedacht, als Beispiel in Dokumenten verwendet zu werden. You may diese Domain in Beispielen ohne vorherige Absprache oder Genehmigung verwenden. Die Wörter "you may" sind hervorgehoben.](rects-2.png)

        In diesem Fall werden im `RectData`, das diese Übereinstimmung beschreibt, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Elemente enthalten.

        - `textList[0]` enthält "You ", und `rectList[0]` enthält sein Begrenzungsrechteck.
        - `textList[1]` enthält "may", und `rectList[1]` enthält _sein_ Begrenzungsrechteck.

    - `text`
      - : Der vollständige Text der Übereinstimmung, im obigen Beispiel "You may".

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Grundlegende Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", protokollieren Sie die Anzahl der Übereinstimmungen und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Suche nach "banana" in allen Tabs (beachten Sie, dass dies die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erfordert, da sie auf `tab.url` zugreift):

```js
async function findInAllTabs(allTabs) {
  for (const tab of allTabs) {
    const results = await browser.find.find("banana", { tabId: tab.id });
    console.log(`In page "${tab.url}": ${results.count} matches.`);
  }
}

browser.tabs.query({}).then(findInAllTabs);
```

### Verwendung von rangeData

In diesem Beispiel verwendet die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem die Übereinstimmung gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem die Übereinstimmung gefunden wurde. Wenn die Übereinstimmung sich über Knoten erstreckt, ist der Kontext die Verkettung des `textContent` aller betroffenen Knoten.

Beachten Sie, dass dieses Beispiel der Einfachheit halber keine Seiten behandelt, die Frames enthalten. Um dies zu unterstützen, müssten Sie `rangeData` in Gruppen aufteilen, eine pro Frame, und das Skript in jedem Frame ausführen.

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

Das Inhaltsskript:

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

### Verwendung von rectData

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Übereinstimmungen zu "redigieren", indem schwarze DIVs über ihre Begrenzungsrechtecke gelegt werden:

![Drei Suchergebnisse mit einigen durch schwarze Rechtecke redigierten Texten.](redacted.png)

Beachten Sie, dass dies in vielerlei Hinsicht eine schlechte Methode ist, um Seiten zu redigieren.

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

Das Inhaltsskript:

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
