---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

Sucht nach Text in einem Tab.

Sie können diese Funktion verwenden, um normale HTTP(S)-Webseiten zu durchsuchen. Sie durchsucht einen einzigen Tab: Sie können die ID eines bestimmten Tabs angeben, den Sie durchsuchen möchten, oder es wird standardmäßig der aktive Tab durchsucht. Sie durchsucht alle Frames im Tab.

Sie können die Suche zur Groß- und Kleinschreibung beachten und sie so konfigurieren, dass nur ganze Wörter übereinstimmen.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Übereinstimmungen zurück. Durch das Übergeben der Optionen `includeRangeData` und `includeRectData` können Sie mehr Informationen über den Ort der Übereinstimmungen im Ziel-Tab erhalten.

Diese Funktion speichert die Ergebnisse intern, so dass beim nächsten Aufruf von {{WebExtAPIRef("find.highlightResults()")}} durch eine Erweiterung die Ergebnisse dieser find-Ausführung hervorgehoben werden, bis `find()` das nächste Mal aufgerufen wird.

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

  - : `object`. Ein Objekt, das zusätzliche Optionen angibt. Es kann jede der folgenden, optionalen Eigenschaften enthalten:

    - `caseSensitive`
      - : `boolean`. Wenn `true`, ist die Suche groß- und kleinschreibungssensitiv. Standardwert ist `false`.
    - `entireWord`
      - : `boolean`. Übereinstimmung nur mit ganzen Wörtern: "Tok" wird nicht innerhalb von "Tokyo" übereinstimmen. Standardwert ist `false`.
    - `includeRangeData`
      - : `boolean`. Bereichsdaten in die Antwort einbeziehen, die beschreiben, wo im Seiten-DOM die Übereinstimmung gefunden wurde. Standardwert ist `false`.
    - `includeRectData`
      - : `boolean`. Rechteckdaten in die Antwort einbeziehen, die beschreiben, wo auf der gerenderten Seite die Übereinstimmung gefunden wurde. Standardwert ist `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen Buchstaben mit und ohne Akzent. Beispielsweise findet bei `true` die Suche nach "résumé" keine Übereinstimmung mit "resume". Standardwert ist `false`.
    - `tabId`
      - : `integer`. ID des zu durchsuchenden Tabs. Standardwert ist der aktive Tab.

- `queryPhrase`
  - : `string`. Der zu suchende Text.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}

  - : `array`. Wenn `includeRangeData` im Parameter `options` angegeben wurde, wird diese Eigenschaft einbezogen. Es wird als ein Array von `RangeData`-Objekten bereitgestellt, eines für jede Übereinstimmung. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum die Übereinstimmung gefunden wurde. Dies würde es beispielsweise einer Erweiterung ermöglichen, den umgebenden Text jeder Übereinstimmung zu erhalten, um den Kontext für die Übereinstimmungen anzuzeigen.

    Die Elemente entsprechen den in `rectData` angegebenen Elementen, so beschreibt `rangeData[i]` dieselbe Übereinstimmung wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:

    - `endOffset`
      - : Die ordinale Position des Endes der Übereinstimmung innerhalb des Textknotens.
    - `endTextNodePos`
      - : Die ordinale Position des Textknotens, in dem die Übereinstimmung endete.
    - `framePos`
      - : Der Index des Frames, der die Übereinstimmung enthält. 0 entspricht dem übergeordneten Fenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData`-Array sich sequentiell mit der Reihenfolge der Frame-Indizes ausrichtet: zum Beispiel wird `framePos` für die erste Sequenz von `rangeData`-Objekten 0 sein, `framePos` für die nächste Sequenz wird 1 sein, und so weiter.
    - `startOffset`
      - : Die ordinale Position des Beginns der Übereinstimmung innerhalb des Textknotens.
    - `startTextNodePos`
      - : Die ordinale Position des Textknotens, in dem die Übereinstimmung begann.

- `rectData` {{optional_inline}}

  - : `array`. Wenn `includeRectData` im Parameter `options` angegeben wurde, wird diese Eigenschaft einbezogen. Es ist ein Array von `RectData`-Objekten. Es enthält Client-Rechtecke für den gesamten Text, der in der Suche übereinstimmt, relativ zur oberen linken Ecke des Ansichtsfensters. Erweiterungen können dies nutzen, um benutzerdefinierte Hervorhebungen der Ergebnisse bereitzustellen.

    Jedes `RectData`-Objekt enthält Rechteckdaten für eine einzelne Übereinstimmung. Es hat zwei Eigenschaften:

    - `rectsAndTexts`

      - : Ein Objekt mit zwei Eigenschaften, beide Arrays:

        - `rectList`: ein Array von Objekten, die jeweils vier ganzzahlige Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Ansichtsfensters.
        - `textList`: ein Array von Zeichenketten, das dem `rectList`-Array entspricht. Der Eintrag in `textList[i]` enthält den Teil der Übereinstimmung, der von dem Rechteck in `rectList[i]` begrenzt wird.

        Ein Beispiel, betrachten Sie einen Teil einer Webseite, die folgendermaßen aussieht:

        ![Text, der "this domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission." liest und ein "More information" Link.](rects-1.png)

        Wenn Sie nach "You may" suchen, muss die Übereinstimmung durch zwei Rechtecke beschrieben werden:

        ![Dieser Domain ist festgelegt, um in Dokumenten für illustrativen Beispiele benutzt zu werden. Sie können diesen Domain in Beispiele ohne vorherige Koordination oder um Erlaubnis bitten." Die Worte "you may" sind hervorgehoben.](rects-2.png)

        In diesem Fall werden im `RectData`, das diese Übereinstimmung beschreibt, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Elemente haben.

        - `textList[0]` wird "You " enthalten, und `rectList[0]` wird sein begrenzendes Rechteck enthalten.
        - `textList[1]` wird "may" enthalten, und `rectList[1]` wird _sein_ begrenzendes Rechteck enthalten.

    - `text`
      - : Der vollständige Text der Übereinstimmung, "You may" in dem obigen Beispiel.

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

Suche nach "banana" über alle Tabs (beachten Sie, dass dazu die "tabs" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich sind, da auf `tab.url` zugegriffen wird):

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

In diesem Beispiel verwendet die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem die Übereinstimmung gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem die Übereinstimmung gefunden wurde. Wenn die Übereinstimmung Knoten überspannt, ist der Kontext die Verkettung des `textContent` aller überspannten Knoten.

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

Das Inhaltskript:

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

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Übereinstimmungen durch das Hinzufügen schwarzer DIVs über ihren Begrenzungsrechtecken zu "schwärzen":

![Drei Suchergebnisse mit einiger durch schwarze Rechtecke geschwärzter Texte.](redacted.png)

Beachten Sie, dass dies in vielerlei Hinsicht eine unzulängliche Methode zur Schwärzung von Seiten ist.

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

Das Inhaltskript:

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
