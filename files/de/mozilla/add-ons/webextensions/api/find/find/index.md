---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Sucht nach Text in einem Tab.

Sie können diese Funktion verwenden, um auf normalen HTTP(S)-Webseiten zu suchen. Sie durchsucht einen einzelnen Tab: Sie können die ID eines bestimmten Tabs angeben, der durchsucht werden soll, oder es wird standardmäßig der aktive Tab durchsucht. Alle Frames im Tab werden durchsucht.

Sie können die Suche groß-/kleinschreibungssensitiv machen und nur ganze Wörter abgleichen lassen.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Übereinstimmungen zurück. Durch Übergeben der Optionen `includeRangeData` und `includeRectData` können Sie mehr Informationen über die Positionen der Übereinstimmungen im Ziel-Tab erhalten.

Diese Funktion speichert die Ergebnisse intern, sodass beim nächsten Aufruf von {{WebExtAPIRef("find.highlightResults()")}} durch eine Erweiterung die Ergebnisse dieses Suchaufrufs hervorgehoben werden, bis jemand `find()` erneut aufruft.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.find.find(
  queryPhrase,       // string
  options            // optional object
)
```

### Parameter

- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann eine der folgenden Eigenschaften enthalten, alle optional:
    - `caseSensitive`
      - : `boolean`. Wenn `true`, ist die Suche groß-/kleinschreibungssensitiv. Standard ist `false`.
    - `entireWord`
      - : `boolean`. Stimmt nur ganze Wörter ab: "Tok" wird innerhalb von "Tokyo" nicht abgeglichen. Standard ist `false`.
    - `includeRangeData`
      - : `boolean`. Schließt Bereichsdaten in die Antwort ein, die beschreiben, wo im Seiten-DOM die Übereinstimmung gefunden wurde. Standard ist `false`.
    - `includeRectData`
      - : `boolean`. Schließt Rechteckdaten in die Antwort ein, die beschreiben, wo auf der gerenderten Seite die Übereinstimmung gefunden wurde. Standard ist `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen diakritischen Zeichen und ihren Grundbuchstaben. Beispielsweise wird bei der Suche nach "résumé" bei `true` keine Übereinstimmung für "resume" gefunden. Standard ist `false`.
    - `tabId`
      - : `integer`. ID des zu durchsuchenden Tabs. Standard ist der aktive Tab.

- `queryPhrase`
  - : `string`. Der zu suchende Text.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}
  - : `array`. Wenn `includeRangeData` im `options` Parameter angegeben wurde, wird diese Eigenschaft eingeschlossen. Sie wird als Array von `RangeData`-Objekten bereitgestellt, eines für jede Übereinstimmung. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum die Übereinstimmung gefunden wurde. Dadurch könnte eine Erweiterung beispielsweise den umgebenden Text für jede Übereinstimmung erhalten, um den Kontext anzuzeigen.

    Die Elemente entsprechen den Elementen in `rectData`, sodass `rangeData[i]` dieselbe Übereinstimmung beschreibt wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:
    - `endOffset`
      - : Die Ordinalposition des Endes der Übereinstimmung innerhalb ihres Textknotens.
    - `endTextNodePos`
      - : Die Ordinalposition des Textknotens, in dem die Übereinstimmung endete.
    - `framePos`
      - : Der Index des Frames, der die Übereinstimmung enthält. 0 entspricht dem Elternfenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData`-Array sequentiell mit der Reihenfolge der Frame-Indizes übereinstimmt: Beispielsweise wird `framePos` für die erste Sequenz von `rangeData`-Objekten 0 sein, `framePos` für die nächste Sequenz wird 1 sein usw.
    - `startOffset`
      - : Die Ordinalposition des Starts der Übereinstimmung innerhalb ihres Textknotens.
    - `startTextNodePos`
      - : Die Ordinalposition des Textknotens, in dem die Übereinstimmung begonnen hat.

- `rectData` {{optional_inline}}
  - : `array`. Wenn `includeRectData` im `options` Parameter angegeben wurde, wird diese Eigenschaft eingeschlossen. Es ist ein Array von `RectData`-Objekten. Es enthält Client-Rechtecke für den gesamten Text, der in der Suche übereingestimmt wurde, relativ zur oberen linken Ecke des Viewports. Erweiterungen können dies nutzen, um eine benutzerdefinierte Hervorhebung der Ergebnisse bereitzustellen.

    Jedes `RectData`-Objekt enthält Rechteckdaten für eine einzelne Übereinstimmung. Es hat zwei Eigenschaften:
    - `rectsAndTexts`
      - : Ein Objekt, das zwei Eigenschaften enthält, beide Arrays:
        - `rectList`: ein Array von Objekten, die jeweils vier ganzzahlige Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Viewports.
        - `textList`: ein Array von Strings, das dem `rectList`-Array entspricht. Der Eintrag bei `textList[i]` enthält den Teil der Übereinstimmung, der durch das Rechteck bei `rectList[i]` begrenzt wird.

        Betrachten Sie beispielsweise einen Teil einer Webseite, der so aussieht:

        ![Text der liest "this domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission." und ein "More information" Link.](rects-1.png)

        Wenn Sie nach "You may" suchen, muss die Übereinstimmung durch zwei Rechtecke beschrieben werden:

        ![Dieser Bereich ist so eingerichtet, dass er für veranschaulichende Beispiele in Dokumenten verwendet wird. Sie dürfen diesen Bereich in Beispielen ohne vorherige Abstimmung oder Genehmigung verwenden.". Die Wörter "you may" sind hervorgehoben.](rects-2.png)

        In diesem Fall werden in den `RectData`, die diese Übereinstimmung beschreiben, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Einträge enthalten.
        - `textList[0]` wird "You " enthalten, und `rectList[0]` wird sein Begrenzungsrechteck enthalten.
        - `textList[1]` wird "may" enthalten, und `rectList[1]` wird _sein_ Begrenzungsrechteck enthalten.

    - `text`
      - : Der vollständige Text der Übereinstimmung, "You may" im obigen Beispiel.

## Beispiele

### Grundlegende Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", loggen Sie die Anzahl der Übereinstimmungen und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Durchsuchen Sie alle Tabs nach "banana" (beachten Sie, dass dies die "tabs" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder entsprechende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erfordert, da auf `tab.url` zugegriffen wird):

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

In diesem Beispiel verwendet die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem die Übereinstimmung gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem die Übereinstimmung gefunden wurde. Wenn die Übereinstimmung Knoten umspannend war, ist der Kontext die Verkettung des `textContent` aller umspannten Knoten.

Beachten Sie, dass aus Einfachheitsgründen dieses Beispiel keine Seiten behandelt, die Frames enthalten. Um dies zu unterstützen, müssten Sie `rangeData` in Gruppen aufteilen, eine pro Frame, und das Skript in jedem Frame ausführen.

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

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Übereinstimmungen zu "redigieren", indem schwarze DIVs über ihre Begrenzungsrechtecke hinzugefügt werden:

![Drei Suchergebnisse mit teilweise geschwärztem Text durch schwarze Rechtecke.](redacted.png)

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

## Browser-Kompatibilität

{{Compat}}
