---
title: Content Index API
slug: Web/API/Content_Index_API
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{DefaultAPISidebar("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Content Index API** ermöglicht es Entwicklern, ihre offline verfügbaren Inhalte im Browser zu registrieren.

## Konzepte und Nutzung

Derzeit sind Offline-Webinhalte für Benutzer schwer auffindbar. Die Inhaltsindizierung ermöglicht es Entwicklern, dem Browser ihre spezifischen Offline-Inhalte mitzuteilen. Dies ermöglicht es Benutzern, verfügbare Inhalte zu entdecken und anzuzeigen, während Entwicklern die Möglichkeit gegeben wird, diese Inhalte hinzuzufügen und zu verwalten. Beispiele könnten eine Nachrichtenwebsite sein, die die neuesten Artikel im Hintergrund vorab lädt, oder eine Content-Streaming-App, die heruntergeladene Inhalte registriert.

Die Content Index API ist eine Erweiterung der [Service Worker API](/de/docs/Web/API/Service_Worker_API), die es Entwicklern erlaubt, URLs und Metadaten bereits gecachter Seiten im Rahmen des aktuellen Service Workers hinzuzufügen. Der Browser kann diese Einträge dann nutzen, um dem Benutzer das Lesen im Offline-Modus zu ermöglichen. Als Entwickler können Sie diese Einträge auch innerhalb Ihrer Anwendung anzeigen.

Indizierte Einträge laufen nicht automatisch ab. Es ist ratsam, eine Schnittstelle zum Löschen von Einträgen bereitzustellen oder regelmäßig ältere Einträge zu entfernen.

> [!NOTE]
> Die API unterstützt das Indizieren von URLs, die HTML-Dokumenten entsprechen. Eine URL für eine gecachte Mediendatei kann zum Beispiel nicht direkt indiziert werden. Stattdessen müssen Sie eine URL für eine Seite bereitstellen, die Medien anzeigt und die offline funktioniert.

## Schnittstellen

- [`ContentIndex`](/de/docs/Web/API/ContentIndex) {{Experimental_Inline}}
  - : Bietet Funktionen zum Registrieren von offline verfügbaren Inhalten.
- [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent) {{Experimental_Inline}}
  - : Definiert das Objekt, das das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)-Ereignis darstellt.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) sind in der Content Index API-Spezifikation definiert, um einen Einstiegspunkt für die Inhaltsindizierung zu bieten.

- [`ServiceWorkerRegistration.index`](/de/docs/Web/API/ServiceWorkerRegistration/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Schnittstelle zum Indizieren gecachter Seiten zurück.
- [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Inhalte vom User Agent entfernt werden.

## Beispiele

Alle folgenden Beispiele setzen voraus, dass ein Service Worker registriert wurde. Weitere Informationen finden Sie in der [Service Worker API](/de/docs/Web/API/Service_Worker_API).

### Funktionsprüfung und Schnittstellensuche

Hier erhalten wir eine Referenz zur [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) und prüfen die `index`-Eigenschaft, die uns Zugriff auf die Content-Index-Schnittstelle gibt.

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("index" in registration) {
  // Content Index API functionality
  const contentIndex = registration.index;
}
```

### Hinzufügen zum Inhaltsindex

Hier deklarieren wir ein Element im korrekten Format und erstellen eine asynchrone Funktion, die die [`add()`](/de/docs/Web/API/ContentIndex/add)-Methode verwendet, um es im Inhaltsindex zu registrieren.

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

Das folgende Beispiel zeigt eine asynchrone Funktion, die Elemente innerhalb des Inhaltsindex abruft und über jeden Eintrag iteriert, um eine Liste für die Schnittstelle zu erstellen.

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

### Abmelden von indizierten Inhalten

Unten steht eine asynchrone Funktion, die ein Element aus dem Inhaltsindex entfernt.

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

Alle oben genannten Methoden sind im Rahmen des [Service Workers](/de/docs/Web/API/ServiceWorker) verfügbar. Sie sind von der [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)-Eigenschaft aus zugänglich:

```js
// service worker script

self.registration.index.add(item);

self.registration.index.delete(item.id);

const contentIndexItems = self.registration.index.getAll();
```

### Das contentdelete-Ereignis

Wenn ein Element aus der Benutzeroberfläche des User Agents entfernt wird, empfängt der Service Worker ein `contentdelete`-Ereignis.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache
});
```

Das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)-Ereignis wird nur ausgelöst, wenn die Löschung durch Interaktion mit der integrierten Benutzeroberfläche des Browsers erfolgt. Es wird nicht ausgelöst, wenn die [`ContentIndex.delete()`](/de/docs/Web/API/ContentIndex/delete)-Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
