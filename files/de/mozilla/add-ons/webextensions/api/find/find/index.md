---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Durchsucht Text in einem Tab.

Sie können diese Funktion nutzen, um normale HTTP(S)-Webseiten zu durchsuchen. Es durchsucht einen einzelnen Tab: Sie können die ID eines bestimmten Tabs angeben, den Sie durchsuchen möchten, oder es wird standardmäßig der aktive Tab durchsucht. Es durchsucht alle Frames im Tab.

Sie können die Suche auch groß-/kleinschreibungssensitiv machen und nur ganze Wörter abgleichen lassen.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Übereinstimmungen zurück. Indem Sie die Optionen `includeRangeData` und `includeRectData` übergeben, können Sie zusätzliche Informationen über den Ort der Übereinstimmungen im Zieltab erhalten.

Diese Funktion speichert die Ergebnisse intern, so dass die Ergebnisse dieses Suchaufrufs hervorgehoben werden, sobald eine Erweiterung das nächste Mal {{WebExtAPIRef("find.highlightResults()")}} aufruft, bis das nächste Mal jemand `find()` aufruft.

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
  - : `object`. Ein Objekt, das zusätzliche Optionen spezifiziert. Es kann jede der folgenden Eigenschaften aufnehmen, alle optional:
    - `caseSensitive`
      - : `boolean`. Wenn `true`, ist die Suche groß-/kleinschreibungssensitiv. Standard ist `false`.
    - `entireWord`
      - : `boolean`. Nur ganze Wörter abgleichen: "Tok" wird also nicht in "Tokyo" abgeglichen. Standard ist `false`.
    - `includeRangeData`
      - : `boolean`. Bereichsdaten in die Antwort einschließen, die beschreiben, wo im Seiten-DOM die Übereinstimmung gefunden wurde. Standard ist `false`.
    - `includeRectData`
      - : `boolean`. Rechteckdaten in die Antwort einschließen, die beschreiben, wo auf der gerenderten Seite die Übereinstimmung gefunden wurde. Standard ist `false`.
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, wird bei der Suche zwischen akzentuierten Buchstaben und ihren Grundbuchstaben unterschieden. Zum Beispiel findet bei Einstellung auf `true` die Suche nach "résumé" keine Übereinstimmung mit "resume". Standard ist `false`.
    - `tabId`
      - : `integer`. Die ID des Tabs, der durchsucht werden soll. Standard ist der aktive Tab.

- `queryPhrase`
  - : `string`. Der zu durchsuchende Text.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt aufgelöst wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}
  - : `array`. Wenn `includeRangeData` im `options` Parameter angegeben wurde, wird diese Eigenschaft enthalten sein. Es wird als ein Array von `RangeData` Objekten bereitgestellt, eines für jedes Ergebnis. Jedes `RangeData` Objekt beschreibt, wo im DOM-Baum die Übereinstimmung gefunden wurde. Dies würde einer Erweiterung beispielsweise ermöglichen, den Text um jede Übereinstimmung herum zu erhalten, um Kontext für die Übereinstimmungen anzuzeigen.

    Die Elemente entsprechen den im `rectData` gegebenen Elementen, daher beschreibt `rangeData[i]` die gleiche Übereinstimmung wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:
    - `endOffset`
      - : Die ordinale Position des Endes der Übereinstimmung innerhalb seines Textknotens.
    - `endTextNodePos`
      - : Die ordinale Position des Textknotens, in dem die Übereinstimmung endete.
    - `framePos`
      - : Der Index des Frames, der die Übereinstimmung enthält. 0 entspricht dem Elternfenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData` Array mit der Reihenfolge der Frame-Indizes übereinstimmt: beispielsweise wird `framePos` der ersten Sequenz von `rangeData` Objekten 0 sein, `framePos` der nächsten Sequenz wird 1 sein, und so weiter.
    - `startOffset`
      - : Die ordinale Position des Anfangs der Übereinstimmung innerhalb seines Textknotens.
    - `startTextNodePos`
      - : Die ordinale Position des Textknotens, in dem die Übereinstimmung begann.

- `rectData` {{optional_inline}}
  - : `array`. Wenn `includeRectData` im `options` Parameter angegeben wurde, wird diese Eigenschaft enthalten sein. Es ist ein Array von `RectData` Objekten. Es enthält Client-Rechtecke für alle im Suchvorgang übereingestimmten Texte, relativ zur oberen linken Ecke des Viewports. Erweiterungen können dies nutzen, um ein benutzerdefiniertes Hervorheben der Ergebnisse bereitzustellen.

    Jedes `RectData` Objekt enthält Rechteckdaten für eine einzelne Übereinstimmung. Es hat zwei Eigenschaften:
    - `rectsAndTexts`
      - : Ein Objekt, das zwei Eigenschaften enthält, beide Arrays:
        - `rectList`: ein Array von Objekten, die jeweils vier ganzzahlige Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Viewports.
        - `textList`: ein Array von Zeichenfolgen, das dem `rectList` Array entspricht. Der Eintrag bei `textList[i]` enthält den Teil der Übereinstimmung, der durch das Rechteck bei `rectList[i]` begrenzt wird.

        Zum Beispiel, betrachten Sie einen Teil einer Webseite, der so aussieht:

        ![Text, der lautet: „Dieses Domain ist eingerichtet, um für illustrative Beispiele in Dokumenten verwendet zu werden. Sie dürfen diese Domain in Beispielen ohne vorherige Koordination oder Erlaubnis verwenden.“ und einen „Weitere Informationen“ Link.](rects-1.png)

        Wenn Sie nach „You may“ suchen, muss die Übereinstimmung durch zwei Rechtecke beschrieben werden:

        ![Dieses Domain ist eingerichtet, um für illustrative Beispiele in Dokumenten verwendet zu werden. "You may" ist hervorgehoben.](rects-2.png)

        In diesem Fall werden in dem `RectData`, das diese Übereinstimmung beschreibt, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Einträge haben.
        - `textList[0]` wird "You " enthalten und `rectList[0]` wird sein Begrenzungsrechteck enthalten.
        - `textList[1]` wird "may" enthalten und `rectList[1]` wird _sein_ Begrenzungsrechteck enthalten.

    - `text`
      - : Der vollständige Text der Übereinstimmung, "You may" im obigen Beispiel.

## Beispiele

### Grundlegende Beispiele

Durchsuchen Sie den aktiven Tab nach "banana", loggen Sie die Anzahl der Treffer und heben Sie sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Durchsuchen Sie alle Tabs nach "banana" (beachten Sie, dass dies die "tabs" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erfordert, da es auf `tab.url` zugreift):

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

In diesem Beispiel nutzt die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem die Übereinstimmung gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem die Übereinstimmung gefunden wurde. Wenn die Übereinstimmung sich über Knoten erstreckt, ist der Kontext die Verkettung des `textContent` aller gespannten Knoten.

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

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Übereinstimmungen zu „redigieren“, indem schwarze DIVs über ihre Begrenzungsrechtecke hinzugefügt werden:

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

## Browser-Kompatibilität

{{Compat}}
