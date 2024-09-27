---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Durchsucht Text in einem Tab.

Sie können diese Funktion verwenden, um normale HTTP(S)-Webseiten zu durchsuchen. Sie durchsucht einen einzelnen Tab: Sie können die ID eines bestimmten Tabs angeben, der durchsucht werden soll, oder standardmäßig wird der aktive Tab durchsucht. Alle Frames im Tab werden durchsucht.

Sie können die Suche groß- und kleinschreibungsempfindlich gestalten und nur ganze Wörter abgleichen lassen.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Übereinstimmungen zurück. Durch die Übergabe der Optionen `includeRangeData` und `includeRectData` können Sie weitere Informationen über den Ort der Übereinstimmungen im Ziel-Tab erhalten.

Diese Funktion speichert die Ergebnisse intern, sodass beim nächsten Aufruf einer Erweiterung von {{WebExtAPIRef("find.highlightResults()")}} die Ergebnisse dieses Suchaufrufs hervorgehoben werden, bis die `find()`-Funktion erneut aufgerufen wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.find.find(
  queryphrase,       // string
  options            // optional object
)
```

### Parameter

- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann die folgenden Eigenschaften enthalten, die alle optional sind:

    - `caseSensitive`
      - : `boolean`. Wenn `true`, ist die Suche groß- und kleinschreibungsempfindlich. Standardmäßig `false`.
    - `entireWord`
      - : `boolean`. Nur ganze Wörter abgleichen: also wird "Tok" nicht innerhalb von "Tokyo" übereinstimmen. Standardmäßig `false`.
    - `includeRangeData`
      - : `boolean`. Enthält Bereichsdaten in der Antwort, die beschreiben, wo im DOM der Seite die Übereinstimmung gefunden wurde. Standardmäßig `false`.
    - `includeRectData`
      - : `boolean`. Enthält Rechteckdaten in der Antwort, die beschreiben, wo auf der gerenderten Seite die Übereinstimmung gefunden wurde. Standardmäßig `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen akzentuierten Buchstaben und ihren Basisbuchstaben. Beispielsweise wird beim Suchen nach "résumé" keine Übereinstimmung mit "resume" gefunden, wenn `true` gesetzt ist. Standardmäßig `false`.
    - `tabId`
      - : `integer`. ID des Tabs, der durchsucht werden soll. Standardmäßig der aktive Tab.

- `queryphrase`
  - : `string`. Der zu suchende Text.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit bis zu drei Eigenschaften erfüllt wird:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}

  - : `array`. Wenn `includeRangeData` im `options`-Parameter angegeben wurde, wird diese Eigenschaft enthalten sein. Diese wird als Array von `RangeData`-Objekten bereitgestellt, eines für jede Übereinstimmung. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum die Übereinstimmung gefunden wurde. Dies würde es beispielsweise einer Erweiterung ermöglichen, den umgebenden Text jeder Übereinstimmung zu erfassen, um Kontext für die Übereinstimmungen anzuzeigen.

    Die Einträge entsprechen den Einträgen in `rectData`, daher beschreibt `rangeData[i]` die gleiche Übereinstimmung wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:

    - `endOffset`
      - : Die Ordnungsposition des Endes der Übereinstimmung innerhalb seines Textknotens.
    - `endTextNodePos`
      - : Die Ordnungsposition des Textknotens, in dem die Übereinstimmung endete.
    - `framePos`
      - : Der Index des Frames, der die Übereinstimmung enthält. 0 entspricht dem übergeordneten Fenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData`-Array der Reihenfolge der Frame-Indizes sequenziell folgt: zum Beispiel wird `framePos` für die erste Folge von `rangeData`-Objekten 0 sein, `framePos` für die nächste Folge wird 1 sein, und so weiter.
    - `startOffset`
      - : Die Ordnungsposition des Beginns der Übereinstimmung innerhalb seines Textknotens.
    - `startTextNodePos`
      - : Die Ordnungsposition des Textknotens, in dem die Übereinstimmung begann.

- `rectData` {{optional_inline}}

  - : `array`. Wenn `includeRectData` im `options`-Parameter angegeben wurde, wird diese Eigenschaft enthalten sein. Es ist ein Array von `RectData`-Objekten. Es enthält Client-Rechtecke für den gesamten Text, der in der Suche übereinstimmte, relativ zur oberen linken Ecke des Viewports. Erweiterungen können dies verwenden, um benutzerdefinierte Hervorhebungen der Ergebnisse bereitzustellen.

    Jedes `RectData`-Objekt enthält Rechteckdaten für eine einzelne Übereinstimmung. Es hat zwei Eigenschaften:

    - `rectsAndTexts`

      - : Ein Objekt, das zwei Eigenschaften enthält, beide Arrays:

        - `rectList`: ein Array von Objekten, die jeweils vier ganzzahlige Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Viewports.
        - `textList`: ein Array von Zeichenfolgen, das dem `rectList`-Array entspricht. Der Eintrag bei `textList[i]` enthält den Teil der Übereinstimmung, der durch das Rechteck bei `rectList[i]` begrenzt ist.

        Beispielsweise betrachten Sie einen Teil einer Webseite, der so aussieht:

        ![Text, der "this domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission." und einen "More information"-Link enthält.](rects-1.png)

        Wenn Sie nach "You may" suchen, muss die Übereinstimmung durch zwei Rechtecke beschrieben werden:

        ![Dieser Domain ist festgelegt, um für illustrative Beispiele in Dokumenten verwendet zu werden. Sie dürfen diese Domain in Beispielen ohne vorherige Abstimmung oder Erlaubnis verwenden.". Die Wörter "you may" sind hervorgehoben.](rects-2.png)

        In diesem Fall haben im `RectData`, das diese Übereinstimmung beschreibt, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Einträge.

        - `textList[0]` wird "You " enthalten, und `rectList[0]` wird sein Begrenzungsrechteck enthalten.
        - `textList[1]` wird "may" enthalten, und `rectList[1]` wird _sein_ Begrenzungsrechteck enthalten.

    - `text`
      - : Der vollständige Text der Übereinstimmung, "You may" im obigen Beispiel.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Grundlegende Beispiele

Den aktiven Tab nach "banana" durchsuchen, die Anzahl der Übereinstimmungen protokollieren und diese hervorheben:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Suche nach "banana" in allen Tabs (beachten Sie, dass dies die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erfordert, da auf `tab.url` zugegriffen wird):

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

In diesem Beispiel verwendet die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem die Übereinstimmung gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem die Übereinstimmung gefunden wurde. Wenn die Übereinstimmung mehrere Knoten umfasst, ist der Kontext die Verkettung des `textContent` aller umspannten Knoten.

Beachten Sie, dass der Einfachheit halber dieses Beispiel keine Seiten behandelt, die Frames enthalten. Um dies zu unterstützen, müssten Sie `rangeData` in Gruppen aufteilen, eine pro Frame, und das Skript in jedem Frame ausführen.

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

Das Inhalts-Skript:

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

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Übereinstimmungen zu "redaktieren", indem schwarze DIVs über deren Begrenzungsrechtecke gelegt werden:

![Drei Suchergebnisse mit teilweise durch schwarze Rechtecke redigiertem Text.](redacted.png)

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

Das Inhalts-Skript:

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
