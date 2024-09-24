---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Durchsucht eine Registerkarte nach Text.

Sie können diese Funktion verwenden, um normale HTTP(S)-Webseiten zu durchsuchen. Sie durchsucht eine einzelne Registerkarte: Sie können die ID einer bestimmten Registerkarte angeben, die durchsucht werden soll, oder sie durchsucht standardmäßig die aktive Registerkarte. Sie durchsucht alle Frames in der Registerkarte.

Sie können die Suche groß-/kleinsensitiv machen und sie so einstellen, dass sie nur ganze Wörter abgleicht.

Standardmäßig gibt die Funktion nur die Anzahl der gefundenen Übereinstimmungen zurück. Durch Angabe der Optionen `includeRangeData` und `includeRectData` können Sie mehr Informationen über die Position der Übereinstimmungen in der Zielregisterkarte erhalten.

Diese Funktion speichert die Ergebnisse intern, sodass bei einem nächsten Aufruf einer beliebigen Erweiterung von {{WebExtAPIRef("find.highlightResults()")}} die Ergebnisse dieses Suchaufrufs hervorgehoben werden, bis das nächste Mal jemand `find()` aufruft.

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

  - : `object`. Ein Objekt, das zusätzliche Optionen spezifiziert. Es kann die folgenden Eigenschaften enthalten, alle optional:

    - `caseSensitive`
      - : `boolean`. Wenn `true`, ist die Suche groß-/kleinsensitiv. Standardmäßig `false`.
    - `entireWord`
      - : `boolean`. Nur ganze Wörter abgleichen: "Tok" wird also nicht in "Tokyo" übereinstimmen. Standardmäßig `false`.
    - `includeRangeData`
      - : `boolean`. Bereichsdaten in die Antwort einbeziehen, die beschreiben, wo im Seiten-DOM die Übereinstimmung gefunden wurde. Standardmäßig `false`.
    - `includeRectData`
      - : `boolean`. Rechteckdaten in die Antwort einbeziehen, die beschreiben, wo im gerenderten Seitenbild die Übereinstimmung gefunden wurde. Standardmäßig `false`
    - `matchDiacritics`
      - : `boolean`. Wenn `true`, unterscheidet die Suche zwischen Akzentbuchstaben und ihren Basisbuchstaben. Beispielsweise findet bei der Einstellung `true` die Suche nach "résumé" keine Übereinstimmung für "resume". Standardmäßig `false`.
    - `tabId`
      - : `integer`. ID der Registerkarte, die durchsucht werden soll. Standardmäßig die aktive Registerkarte.

- `queryphrase`
  - : `string`. Der zu suchende Text.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das bis zu drei Eigenschaften enthält:

- `count`
  - : `integer`. Die Anzahl der gefundenen Ergebnisse.
- `rangeData` {{optional_inline}}

  - : `array`. Wenn `includeRangeData` im `options`-Parameter angegeben wurde, wird diese Eigenschaft enthalten sein. Sie wird als ein Array von `RangeData`-Objekten bereitgestellt, eines für jede Übereinstimmung. Jedes `RangeData`-Objekt beschreibt, wo im DOM-Baum die Übereinstimmung gefunden wurde. Damit könnte eine Erweiterung beispielsweise den Text um jede Übereinstimmung herum erhalten, um Kontext für die Übereinstimmungen anzuzeigen.

    Die Elemente entsprechen den in `rectData` angegebenen Elementen, sodass `rangeData[i]` dieselbe Übereinstimmung beschreibt wie `rectData[i]`.

    Jedes `RangeData` enthält die folgenden Eigenschaften:

    - `endOffset`
      - : Die Ordnungsposition des Endes der Übereinstimmung innerhalb ihres Textknotens.
    - `endTextNodePos`
      - : Die Ordnungsposition des Textknotens, in dem die Übereinstimmung endete.
    - `framePos`
      - : Der Index des Frames, der die Übereinstimmung enthält. 0 entspricht dem übergeordneten Fenster. Beachten Sie, dass die Reihenfolge der Objekte im `rangeData`-Array nacheinander mit der Reihenfolge der Frame-Indizes ausgerichtet ist: Beispielsweise wird `framePos` für die erste Folge von `rangeData`-Objekten 0 sein, `framePos` für die nächste Folge wird 1 sein usw.
    - `startOffset`
      - : Die Ordnungsposition des Starts der Übereinstimmung innerhalb ihres Textknotens.
    - `startTextNodePos`
      - : Die Ordnungsposition des Textknotens, in dem die Übereinstimmung begann.

- `rectData` {{optional_inline}}

  - : `array`. Wenn `includeRectData` im `options`-Parameter angegeben wurde, wird diese Eigenschaft enthalten sein. Sie ist ein Array von `RectData`-Objekten. Es enthält Client-Rechtecke für den gesamten in der Suche übereinstimmenden Text relativ zur oberen linken Ecke des Ansichtsfensters. Erweiterungen können dies verwenden, um benutzerdefinierte Hervorhebungen der Ergebnisse bereitzustellen.

    Jedes `RectData`-Objekt enthält Rechteckdaten für eine einzelne Übereinstimmung. Es hat zwei Eigenschaften:

    - `rectsAndTexts`

      - : Ein Objekt, das zwei Eigenschaften enthält, beide Arrays:

        - `rectList`: ein Array von Objekten, die jeweils vier Integer-Eigenschaften haben: `top`, `left`, `bottom`, `right`. Diese beschreiben ein Rechteck relativ zur oberen linken Ecke des Ansichtsfensters.
        - `textList`: ein Array von Zeichenfolgen, das dem `rectList`-Array entspricht. Der Eintrag bei `textList[i]` enthält den Teil der Übereinstimmung, der vom Rechteck bei `rectList[i]` begrenzt wird.

        Beispielsweise betrachten wir einen Teil einer Webseite, der so aussieht:

        ![Text, der liest: "this domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission." und einem "More information"-Link.](rects-1.png)

        Wenn Sie nach "You may" suchen, muss die Übereinstimmung durch zwei Rechtecke beschrieben werden:

        ![Dieser Domain ist eingerichtet, um sie in Beispieldokumenten zu verwenden. Sie können diese Domain in Beispielen ohne vorherige Abstimmung oder Erlaubnis verwenden. Die Wörter "you may" sind hervorgehoben.](rects-2.png)

        In diesem Fall werden im `RectData`, das diese Übereinstimmung beschreibt, `rectsAndTexts.rectList` und `rectsAndTexts.textList` jeweils 2 Elemente enthalten.

        - `textList[0]` wird "You " enthalten, und `rectList[0]` wird dessen Begrenzungsrechteck enthalten.
        - `textList[1]` wird "may" enthalten, und `rectList[1]` wird _dessen_ Begrenzungsrechteck enthalten.

    - `text`
      - : Der vollständige Text der Übereinstimmung, "You may" im obigen Beispiel.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Grundlegende Beispiele

Sucht in der aktiven Registerkarte nach "banana", protokolliert die Anzahl der Übereinstimmungen und hebt sie hervor:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Sucht nach "banana" in allen Registerkarten (beachten Sie, dass dies die "tabs"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erfordert, da auf `tab.url` zugegriffen wird):

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

In diesem Beispiel nutzt die Erweiterung `rangeData`, um den Kontext zu erhalten, in dem die Übereinstimmung gefunden wurde. Der Kontext ist der vollständige `textContent` des Knotens, in dem die Übereinstimmung gefunden wurde. Falls die Übereinstimmung über Knoten hinausgehend war, ist der Kontext die Verkettung des `textContent` aller umgangenen Knoten.

Beachten Sie, dass dieses Beispiel zur Vereinfachung keine Seiten behandelt, die Frames enthalten. Um dies zu unterstützen, müssten Sie `rangeData` in Gruppen aufteilen, eine pro Frame, und das Skript in jedem Frame ausführen.

Das Hintergrundskript:

```js
// background.js

async function getContexts(matches) {
  // die ID der aktiven Registerkarte erhalten
  const activeTabArray = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  const tabId = activeTabArray[0].id;

  // das Inhalts-Skript in der aktiven Registerkarte ausführen
  await browser.tabs.executeScript(tabId, { file: "get-context.js" });
  // das Inhalts-Skript bitten, die Kontexte für uns zu holen
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
 * Holt alle Textknoten in ein einzelnes Array
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
 * Holt alle Textknoten im Dokument und gibt für jede Übereinstimmung
 * den vollständigen Textinhalt der Knoten zurück, die die Übereinstimmung
 * enthielten. Falls eine Übereinstimmung über mehr als einen Knoten
 * hinausging, wird der `textContent` jedes Knotens verkettet.
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

In diesem Beispiel verwendet die Erweiterung `rectData`, um die Übereinstimmungen "zuzensieren", indem schwarze DIVs über deren Begrenzungsrechtecke gelegt werden:

![Drei Suchergebnisse mit zensiertem Text durch schwarze Rechtecke.](redacted.png)

Beachten Sie, dass dies in vielerlei Hinsicht eine schlechte Methode ist, um Seiten zu zensieren.

Das Hintergrundskript:

```js
// background.js

async function redact(matches) {
  // die ID der aktiven Registerkarte erhalten
  const activeTabArray = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  const tabId = activeTabArray[0].id;

  // das Inhalts-Skript in der aktiven Registerkarte ausführen
  await browser.tabs.executeScript(tabId, { file: "redact.js" });
  // das Inhalts-Skript bitten, die Übereinstimmungen für uns zu zensieren
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
 * Fügt ein schwarzes DIV ein, wo sich das Rechteck befindet.
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
 * Geht alle Rechtecke durch und zensiert sie.
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
