---
title: ContentIndex
slug: Web/API/ContentIndex
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`ContentIndex`**-Schnittstelle der [Content Index API](/de/docs/Web/API/Content_Index_API) ermöglicht es Entwicklern, ihre offline-fähigen Inhalte beim Browser zu registrieren.

## Instanzeigenschaften

Es gibt keine Eigenschaften dieser Schnittstelle.

## Instanzmethoden

- [`ContentIndex.add()`](/de/docs/Web/API/ContentIndex/add) {{Experimental_Inline}}
  - : Registriert ein Element im [content index](/de/docs/Web/API/Content_Index_API).
- [`ContentIndex.delete()`](/de/docs/Web/API/ContentIndex/delete) {{Experimental_Inline}}
  - : Hebt die Registrierung eines Elements aus den aktuell indizierten Inhalten auf.
- [`ContentIndex.getAll()`](/de/docs/Web/API/ContentIndex/getAll) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer iterierbaren Liste von Content-Index-Einträgen aufgelöst wird.

## Beispiele

### Funktionsprüfung und Schnittstellenzugriff

Hier erhalten wir eine Referenz zur [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) und prüfen dann die `index`-Eigenschaft, die uns Zugang zur Content-Index-Schnittstelle gibt.

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("index" in registration) {
  // Content Index API functionality
  const contentIndex = registration.index;
}
```

### Hinzufügen zum Content-Index

Hier deklarieren wir ein Element im richtigen Format und erstellen eine asynchrone Funktion, die die [`add()`](/de/docs/Web/API/ContentIndex/add)-Methode verwendet, um es im [content index](/de/docs/Web/API/Content_Index_API) zu registrieren.

```js
// our content
const item = {
  id: "post-1",
  url: "/posts/amet.html",
  title: "Amet consectetur adipisicing",
  description:
    "Repellat et quia iste possimus ducimus aliquid a aut eaque nostrum.",
  icons: [
    {
      src: "/media/dark.png",
      sizes: "128x128",
      type: "image/png",
    },
  ],
  category: "article",
};

// our asynchronous function to add indexed content
async function registerContent(data) {
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index) {
    return;
  }

  // register content
  try {
    await registration.index.add(data);
  } catch (e) {
    console.log("Failed to register content: ", e.message);
  }
}
```

### Abrufen von Elementen im aktuellen Index

Das untenstehende Beispiel zeigt eine asynchrone Funktion, die Elemente im [content index](/de/docs/Web/API/Content_Index_API) abruft und über jeden Eintrag iteriert, um eine Liste für die Schnittstelle zu erstellen.

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

### Deregistrieren von indizierten Inhalten

Unten sehen Sie eine asynchrone Funktion, die ein Element aus dem [content index](/de/docs/Web/API/Content_Index_API) entfernt.

```js
async function unregisterContent(article) {
  // reference registration
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index) return;

  // unregister content from index
  await registration.index.delete(article.id);
}
```

Alle oben genannten Methoden sind im Geltungsbereich des [service worker](/de/docs/Web/API/ServiceWorker) verfügbar. Sie sind von der [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)-Eigenschaft aus erreichbar:

```js
// service worker script

self.registration.index.add(item);

self.registration.index.delete(item.id);

const contentIndexItems = self.registration.index.getAll();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
