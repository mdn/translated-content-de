---
title: ContentIndex
slug: Web/API/ContentIndex
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`ContentIndex`**-Schnittstelle der [Content Index API](/de/docs/Web/API/Content_Index_API) ermöglicht es Entwicklern, ihren offlinefähigen Inhalt im Browser zu registrieren.

## Instanz-Eigenschaften

Es gibt keine Eigenschaften dieser Schnittstelle.

## Instanz-Methoden

- {{domxref('ContentIndex.add()')}} {{Experimental_Inline}}
  - : Registriert ein Element mit dem [Inhaltsindex](/de/docs/Web/API/Content_Index_API).
- {{domxref('ContentIndex.delete()')}} {{Experimental_Inline}}
  - : Hebt die Registrierung eines Elements aus dem aktuell indexierten Inhalt auf.
- {{domxref('ContentIndex.getAll()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer iterierbaren Liste von Inhaltsindexeinträgen aufgelöst wird.

## Beispiele

### Funktionsprüfung und Schnittstellenzugriff

Hier erhalten wir eine Referenz auf die {{domxref('ServiceWorkerRegistration')}}, dann prüfen wir die `index`-Eigenschaft, die uns Zugriff auf die Inhaltsindex-Schnittstelle gibt.

```js
// Referenzregistrierung
const registration = await navigator.serviceWorker.ready;

// Funktionsprüfung
if ("index" in registration) {
  // Funktionalität der Content Index API
  const contentIndex = registration.index;
}
```

### Hinzufügen zum Inhaltsindex

Hier deklarieren wir ein Element im richtigen Format und erstellen eine asynchrone Funktion, die die {{domxref('ContentIndex.add','add()')}}-Methode verwendet, um es mit dem [Inhaltsindex](/de/docs/Web/API/Content_Index_API) zu registrieren.

```js
// unser Inhalt
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

// unsere asynchrone Funktion zum Hinzufügen von indexiertem Inhalt
async function registerContent(data) {
  const registration = await navigator.serviceWorker.ready;

  // Content Index erkennen
  if (!registration.index) {
    return;
  }

  // Inhalt registrieren
  try {
    await registration.index.add(data);
  } catch (e) {
    console.log("Inhalt konnte nicht registriert werden: ", e.message);
  }
}
```

### Abrufen von Elementen innerhalb des aktuellen Index

Das untenstehende Beispiel zeigt eine asynchrone Funktion, die Elemente innerhalb des [Inhaltsindex](/de/docs/Web/API/Content_Index_API) abruft und über jeden Eintrag iteriert, um eine Liste für die Schnittstelle zu erstellen.

```js
async function createReadingList() {
  // Zugriff auf unsere Service-Worker-Registrierung
  const registration = await navigator.serviceWorker.ready;

  // Holen Sie sich unsere Indexeinträge
  const entries = await registration.index.getAll();

  // Erstellen eines enthaltenen Elements
  const readingListElem = document.createElement("div");

  // Einträge testen
  if (entries.length === 0) {
    // Wenn es keine Einträge gibt, Anzeige einer Nachricht
    const message = document.createElement("p");
    message.innerText =
      "Sie haben derzeit keine Artikel zum Offline-Lesen gespeichert.";

    readingListElem.append(message);
  } else {
    // Wenn Einträge vorhanden sind, in einer Liste mit Links zum Inhalt anzeigen
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

### Aufheben der Registrierung von indexiertem Inhalt

Untenstehend ist eine asynchrone Funktion, die ein Element aus dem [Inhaltsindex](/de/docs/Web/API/Content_Index_API) entfernt.

```js
async function unregisterContent(article) {
  // Referenzregistrierung
  const registration = await navigator.serviceWorker.ready;

  // Content Index erkennen
  if (!registration.index) return;

  // Inhalt aus dem Index abmelden
  await registration.index.delete(article.id);
}
```

Alle obigen Methoden sind im Umfang des [Service Workers](/de/docs/Web/API/ServiceWorker) verfügbar. Sie sind aus der {{domxref('WorkerGlobalScope.self')}}-Eigenschaft zugänglich:

```js
// Service-Worker-Skript

self.registration.index.add(item);

self.registration.index.delete(item.id);

const contentIndexItems = self.registration.index.getAll();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einleitender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
