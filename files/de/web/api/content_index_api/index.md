---
title: Content Index API
slug: Web/API/Content_Index_API
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{DefaultAPISidebar("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Content Index API** ermöglicht es Entwicklern, ihre offline-fähigen Inhalte beim Browser zu registrieren.

## Konzepte und Nutzung

Derzeit sind Offline-Webinhalte für Benutzer nicht leicht auffindbar. Die Inhaltsindizierung ermöglicht es Entwicklern, dem Browser spezifische Offline-Inhalte mitzuteilen. Dies ermöglicht es Benutzern, verfügbare Inhalte zu entdecken und anzuzeigen, während es Entwicklern die Möglichkeit gibt, diese Inhalte hinzuzufügen und zu verwalten. Beispiele könnten eine Nachrichten-Website sein, die im Hintergrund die neuesten Artikel vorlädt, oder eine Content-Streaming-App, die heruntergeladene Inhalte registriert.

Die Content Index API ist eine Erweiterung zu [Service Worker](/de/docs/Web/API/Service_Worker_API), die es Entwicklern ermöglicht, URLs und Metadaten von bereits zwischengespeicherten Seiten im Geltungsbereich des aktuellen Service Workers hinzuzufügen. Der Browser kann diese Einträge dann verwenden, um Benutzern das Offline-Lesen anzuzeigen. Als Entwickler können Sie diese Einträge auch innerhalb Ihrer Anwendung anzeigen.

Indizierte Einträge laufen nicht automatisch ab. Es ist ratsam, eine Schnittstelle bereitzustellen, um Einträge zu entfernen oder ältere Einträge regelmäßig zu löschen.

> [!NOTE]
> Die API unterstützt die Indizierung von URLs, die HTML-Dokumente entsprechen. Eine URL für eine zwischengespeicherte Mediendatei, zum Beispiel, kann nicht direkt indiziert werden. Stattdessen müssen Sie eine URL für eine Seite angeben, die Medien anzeigt und offline funktioniert.

## Schnittstellen

- [`ContentIndex`](/de/docs/Web/API/ContentIndex) {{Experimental_Inline}}
  - : Bietet Funktionalitäten, um offline verfügbare Inhalte zu registrieren.
- [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent) {{Experimental_Inline}}
  - : Definiert das Objekt, das das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) Ereignis repräsentiert.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Erweiterungen zum [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) wurden in der Spezifikation der Content Index API festgelegt, um einen Einstiegspunkt für die Nutzung der Inhaltsindizierung zu bieten.

- [`ServiceWorkerRegistration.index`](/de/docs/Web/API/ServiceWorkerRegistration/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`ContentIndex`](/de/docs/Web/API/ContentIndex) Schnittstelle zur Indizierung zwischengespeicherter Seiten zurück.
- [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Inhalte durch die Benutzeroberfläche entfernt werden.

## Beispiele

Alle folgenden Beispiele gehen davon aus, dass ein Service Worker registriert wurde. Für weitere Informationen siehe die [Service Worker API](/de/docs/Web/API/Service_Worker_API).

### Feature-Erkennung und Zugriff auf die Schnittstelle

Hier erhalten wir eine Referenz auf die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) und prüfen dann die `index` Eigenschaft, die uns Zugriff auf die Content Index Schnittstelle gibt.

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

Hier deklarieren wir ein Element im korrekten Format und erstellen eine asynchrone Funktion, die die Methode [`add()`](/de/docs/Web/API/ContentIndex/add) verwendet, um es im Inhaltsindex zu registrieren.

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

### Entfernen von indizierten Inhalten

Unten ist eine asynchrone Funktion, die ein Element aus dem Inhaltsindex entfernt.

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

Alle obigen Methoden sind im Geltungsbereich des [Service Workers](/de/docs/Web/API/ServiceWorker) verfügbar. Sie sind von der [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) Eigenschaft aus zugänglich:

```js
// service worker script

self.registration.index.add(item);

self.registration.index.delete(item.id);

const contentIndexItems = self.registration.index.getAll();
```

### Das `contentdelete` Ereignis

Wenn ein Element aus der Benutzeroberfläche entfernt wird, erhält der Service Worker ein `contentdelete` Ereignis.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache
});
```

Das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) Ereignis wird nur ausgelöst, wenn die Löschung aufgrund einer Interaktion mit der integrierten Benutzeroberfläche des Browsers erfolgt. Es wird nicht ausgelöst, wenn die Methode [`ContentIndex.delete()`](/de/docs/Web/API/ContentIndex/delete) aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
