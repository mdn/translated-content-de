---
title: "ContentIndex: getAll() Methode"
short-title: getAll()
slug: Web/API/ContentIndex/getAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getAll()`** Methode der [`ContentIndex`](/de/docs/Web/API/ContentIndex) Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einer iterierbaren Liste von Inhaltsindexeinträgen aufgelöst wird.

## Syntax

```js-nolint
getAll()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{jsxref('Array')}} von `contentDescription`-Elementen aufgelöst wird.

- `contentDescription`
  - : Jedes zurückgegebene Element ist ein {{jsxref('Object')}} und enthält die folgenden Daten:
    - `id`
      - : Ein eindeutiger {{jsxref('String')}}-Bezeichner.
    - `title`
      - : Ein {{jsxref('String')}}-Titel des Elements.
        Verwendet in benutzerdefinierten Inhaltslisten.
    - `description`
      - : Eine {{jsxref('String')}}-Beschreibung des Elements.
        Verwendet in benutzerdefinierten Inhaltslisten.
    - `url`
      - : Ein {{jsxref('String')}} mit der URL des entsprechenden HTML-Dokuments.
        Muss unter dem Bereich des aktuellen [Service Workers](/de/docs/Web/API/ServiceWorker) liegen.
    - `category` {{Optional_Inline}}
      - : Ein {{jsxref('String')}} der die Kategorie des Inhalts definiert.
        Kann sein:
        - `''` Ein leerer {{jsxref('String')}}, dies ist der Standard.
        - `homepage`
        - `article`
        - `video`
        - `audio`

    - `icons` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} von Bildressourcen, definiert als ein {{jsxref('Object')}} mit den folgenden Daten:
        - `src`
          - : Eine URL {{jsxref('String')}} des Quellbildes.
        - `sizes` {{Optional_Inline}}
          - : Eine {{jsxref('String')}}-Darstellung der Bildgröße.
        - `type` {{Optional_Inline}}
          - : Der {{Glossary("MIME_type", "MIME-Typ")}} des Bildes.
        - `label` {{Optional_Inline}}
          - : Ein String, der den zugänglichen Namen des Symbols repräsentiert.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst. Wenn keine Elemente im Inhaltsindex vorhanden sind, wird ein leeres {{jsxref('Array')}} zurückgegeben.

## Beispiele

Das folgende Beispiel zeigt eine asynchrone Funktion, die Elemente innerhalb des [Inhaltsindex](/de/docs/Web/API/Content_Index_API) abruft und über jeden Eintrag iteriert, um eine Liste für die Benutzeroberfläche zu erstellen.

```js
async function createReadingList() {
  // access our service worker registration
  const registration = await navigator.serviceWorker.ready;

  // get our index entries
  const entries = await registration.index.getAll();

  // create a containing element
  const readingListElem = document.createElement("div");

  // test for entries
  if (entries.length === 0) {
    // if there are no entries, display a message
    const message = document.createElement("p");
    message.innerText =
      "You currently have no articles saved for offline reading.";

    readingListElem.append(message);
  } else {
    // if entries are present, display in a list of links to the content
    const listElem = document.createElement("ul");

    for (const entry of entries) {
      const listItem = document.createElement("li");

      const anchorElem = document.createElement("a");
      anchorElem.innerText = entry.title;
      anchorElem.setAttribute("href", entry.url);

      listElem.append(listItem);
    }

    readingListElem.append(listElem);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, sowie Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
