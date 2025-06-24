---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Durchsucht einen Tab nach Text.

Sie können diese Funktion verwenden, um normale HTTP(S)-Webseiten zu durchsuchen. Es wird ein einzelner Tab durchsucht: Sie können die ID eines bestimmten Tabs angeben, der durchsucht werden soll, oder es wird standardmäßig der aktive Tab durchsucht. Es durchsucht alle Frames im Tab.

Sie können die Suche fallunterscheidend machen und einstellen, dass nur ganze Wörter übereinstimmen.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Treffer zurück. Durch die Angabe der Optionen `includeRangeData` und `includeRectData` können Sie mehr Informationen über die Position der Treffer im Ziel-Tab erhalten.

Diese Funktion speichert die Ergebnisse intern, sodass das nächste Mal, wenn eine Erweiterung {{WebExtAPIRef("find.highlightResults()")}} aufruft, die Ergebnisse dieses Suchaufrufs hervorgehoben werden, bis das nächste Mal jemand `find()` aufruft.

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
      - : `boolean`. Wenn `true`, ist die Suche fallunterscheidend. Standardmäßig `false`.
    - `entireWord`
      - : `boolean`. Übereinstimmung nur mit ganzen Wörtern: "Tok" wird also nicht innerhalb "Tokyo" gefunden. Standardmäßig `false`.
    - `includeRangeData`
      - : `boolean`. Bereichsdaten in die Antwort aufnehmen, die beschreiben, wo im Seiten-DOM der Treffer gefunden wurde. Standardmäßig `false`.
    - `includeRectData`
      - : `boolean`. Rechteckdaten in die Antwort aufnehmen, die beschreiben, wo auf der gerenderten Seite der Treffer gefunden wurde. Standardmäßig `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen akzentuierten Buchstaben und ihren Grundbuchstaben. Wenn beispielsweise `true` gesetzt ist, findet die Suche nach "résumé" keinen Treffer für "resume". Standardmäßig `false`.
    - `tabId`
      - : `integer`. ID des Tabs, der durchsucht werden soll. Standardmäßig der aktive Tab.

- `queryPhrase`
  - : `string`. Der zu suchende Text.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}

  - : `array`. Wenn `includeRangeData` im `options`-Parameter angegeben wurde, wird diese Eigenschaft enthalten. Sie wird als Array von `RangeData`-Objekten bereitgestellt, eines für jeden Treffer. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum der Treffer gefunden wurde. Dies würde beispielsweise einer Erweiterung ermöglichen, den umgebenden Text jedes Treffers zu erhalten, um Kontext für die Treffer anzuzeigen.

    Die Elemente entsprechen den in `rectData` angegebenen Elementen, sodass `rangeData[i]` den gleichen Treffer beschreibt wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:

    - `endOffset`
      - : Die Position des Endes des Treffers innerhalb seines Textknotens.
    - `endTextNodePos`
      - : Die Position des Textknotens, in dem der Treffer endete.
    - `framePos`
      - : Der Index des Frames, der den Treffer enthält. 0 entspricht dem übergeordneten Fenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData`-Array fortlaufend mit der Reihenfolge der Frame-Indizes übereinstimmt: Zum Beispiel ist `framePos` für die erste Sequenz von `rangeData`-Objekten 0, `framePos` für die nächste Sequenz ist 1, und so weiter.
    - `startOffset`
      - : Die Position des Beginns des Treffers innerhalb seines Textknotens.
    - `startTextNodePos`
      - : Die Position des Textknotens, in dem der Treffer begann.

- `rectData` {{optional_inline}}

  - : `array`. Wenn `includeRectData` im `options`-Parameter angegeben wurde, wird diese Eigenschaft enthalten. Es ist ein Array von `RectData`-Objekten. Es enthält Client-Rechtecke für alle im Suchvorgang gefundenen Texttreffer, relativ zur oberen linken Ecke des Viewports. Erweiterungen können dies verwenden, um benutzerdefinierte Hervorhebungen der Ergebnisse bereitzustellen.

    Jedes `RectData`-Objekt enthält Rechteckdaten für einen einzelnen Treffer. Es hat zwei Eigenschaften:

    - `rectsAndTexts`

      - : Ein Objekt, das zwei Eigenschaften enthält, beide Arrays:

        - `rectList`: ein Array von Objekten, die jeweils vier Integer-Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Viewports.
        - `textList`: ein Array von Zeichenfolgen, das dem `rectList`-Array entspricht. Der Eintrag bei `textList[i]` enthält den Teil des Treffers, der durch das Rechteck bei `rectList[i]` begrenzt wird.

        Zum Beispiel betrachten Sie einen Teil einer Webseite, der so aussieht:

        ![Text, der "this domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission." liest und einen "More information"-Link enthält.](rects-1.png)

        Wenn Sie nach "You may" suchen, muss der Treffer durch zwei Rechtecke beschrieben werden:

        ![Dieses Domain is established to be used for illustrative examples in documents. "You may" sind die hervorgehobenen Wörter.](rects-2.png)

        In diesem Fall werden im `RectData`, das diesen Treffer beschreibt, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Einträge enthalten.

        - `textList[0]` wird "You " enthalten und `rectList[0]` wird das zugehörige Begrenzungsrechteck enthalten.
        - `textList[1]` wird "may" enthalten und `rectList[1]` wird _dessen_ Begrenzungsrechteck enthalten.

    - `text`
      - : Der vollständige Text des Treffers, "You may" im obigen Beispiel.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Grundlegende Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", protokollieren Sie die Anzahl der Treffer und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Suchen Sie nach "banana" in allen Tabs (beachten Sie, dass dies die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder übereinstimmende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erfordert, da `tab.url` aufgerufen wird):

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

In diesem Beispiel verwendet die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem der Treffer gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem der Treffer gefunden wurde. Wenn der Treffer über Knoten hinweggeht, ist der Kontext die Verkettung des `textContent` aller durchlaufenen Knoten.

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

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Treffer zu "redigieren", indem schwarze DIVs über die Begrenzungsrechtecke ihrer Treffer gelegt werden:

![Drei Suchergebnisse mit teilweise durch schwarze Rechtecke zensiertem Text.](redacted.png)

Beachten Sie, dass dies in vielerlei Hinsicht keine gute Methode ist, um Seiten zu zensieren.

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
