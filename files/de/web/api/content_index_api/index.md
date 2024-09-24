---
title: Inhaltsindex-API
slug: Web/API/Content_Index_API
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{DefaultAPISidebar("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Inhaltsindex-API** ermöglicht es Entwicklern, ihre offline-fähigen Inhalte im Browser zu registrieren.

## Konzepte und Nutzung

Bislang sind Offline-Webinhalte für Benutzer nicht leicht auffindbar. Die Inhaltsindexierung erlaubt es Entwicklern, dem Browser über ihre spezifischen Offline-Inhalte zu informieren. Dies ermöglicht es den Nutzern, zu entdecken und anzuzeigen, was verfügbar ist, während Entwicklern die Möglichkeit gegeben wird, diese Inhalte hinzuzufügen und zu verwalten. Beispiele könnten eine Nachrichten-Website sein, die die neuesten Artikel im Hintergrund vorab lädt, oder eine Streaming-App, die heruntergeladene Inhalte registriert.

Die Inhaltsindex-API ist eine Erweiterung der [Service-Worker-API](/de/docs/Web/API/Service_Worker_API), die es Entwicklern ermöglicht, URLs und Metadaten bereits zwischengespeicherter Seiten unter dem Geltungsbereich des aktuellen Service Workers hinzuzufügen. Der Browser kann diese Einträge dann verwenden, um dem Benutzer Offline-Lesematerial anzuzeigen. Als Entwickler können Sie diese Einträge auch innerhalb Ihrer Anwendung anzeigen.

Indizierte Einträge laufen nicht automatisch ab. Es ist eine gute Praxis, eine Schnittstelle zum Löschen von Einträgen bereitzustellen oder ältere Einträge regelmäßig zu entfernen.

> [!NOTE]
> Die API unterstützt die Indexierung von URLs, die HTML-Dokumenten entsprechen. Eine URL für eine zwischengespeicherte Mediendatei kann beispielsweise nicht direkt indiziert werden. Stattdessen müssen Sie eine URL für eine Seite bereitstellen, die Medien anzeigt und offline funktioniert.

## Schnittstellen

- {{domxref("ContentIndex")}} {{Experimental_Inline}}
  - : Bietet Funktionalität zum Registrieren von offline verfügbaren Inhalten.
- {{domxref("ContentIndexEvent")}} {{Experimental_Inline}}
  - : Definiert das Objekt, das das {{domxref("ServiceWorkerGlobalScope.contentdelete_event", "contentdelete")}}-Ereignis repräsentiert.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zum {{domxref('ServiceWorker')}} wurden in der Spezifikation der Inhaltsindex-API beschrieben, um einen Einstiegspunkt für die Verwendung der Inhaltsindexierung bereitzustellen.

- {{domxref("ServiceWorkerRegistration.index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die {{domxref("ContentIndex")}}-Schnittstelle für die Indexierung zwischengespeicherter Seiten zurück.
- {{domxref("ServiceWorkerGlobalScope.contentdelete_event", "contentdelete")}}-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Inhalt vom Benutzeragenten entfernt wird.

## Beispiele

Alle folgenden Beispiele gehen davon aus, dass ein Service Worker registriert wurde. Weitere Informationen finden Sie in der [Service-Worker-API](/de/docs/Web/API/Service_Worker_API).

### Funktionsprüfung und Schnittstellenzugriff

Hier erhalten wir eine Referenz auf {{domxref('ServiceWorkerRegistration')}}, dann prüfen wir die `index`-Eigenschaft, die uns Zugriff auf die Inhaltsindex-Schnittstelle gibt.

```js
// Referenzregistrierung
const registration = await navigator.serviceWorker.ready;

// Funktionsprüfung
if ("index" in registration) {
  // Funktionalität der Inhaltsindex-API
  const contentIndex = registration.index;
}
```

### Hinzufügen zum Inhaltsindex

Hier deklarieren wir einen Eintrag im korrekten Format und erstellen eine asynchrone Funktion, die die Methode {{domxref('ContentIndex.add','add()')}} verwendet, um ihn im Inhaltsindex zu registrieren.

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

// unsere asynchrone Funktion zum Hinzufügen von indiziertem Inhalt
async function registerContent(data) {
  const registration = await navigator.serviceWorker.ready;

  // Inhaltsindex-Funktionalität prüfen
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

### Abrufen von Einträgen im aktuellen Index

Das folgende Beispiel zeigt eine asynchrone Funktion, die Einträge im Inhaltsindex abruft und über jeden Eintrag iteriert, um eine Liste für die Schnittstelle zu erstellen.

```js
async function createReadingList() {
  // Zugriff auf unsere Service Worker-Registrierung
  const registration = await navigator.serviceWorker.ready;

  // Indexeinträge abrufen
  const entries = await registration.index.getAll();

  // ein enthaltendes Element erstellen
  const readingListElem = document.createElement("div");

  // Einträge testen
  if (entries.length === 0) {
    // Wenn keine Einträge vorhanden sind, eine Nachricht anzeigen
    const message = document.createElement("p");
    message.innerText =
      "Sie haben derzeit keine Artikel für das Offline-Lesen gespeichert.";

    readingListElem.append(message);
  } else {
    // Wenn Einträge vorhanden sind, im Listenformat Links zu den Inhalten anzeigen
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

Nachfolgend finden Sie eine asynchrone Funktion, die einen Eintrag aus dem Inhaltsindex entfernt.

```js
async function unregisterContent(article) {
  // Referenzregistrierung
  const registration = await navigator.serviceWorker.ready;

  // Inhaltsindex-Funktionalität prüfen
  if (!registration.index) return;

  // Inhalt aus dem Index abmelden
  await registration.index.delete(article.id);
}
```

Alle obigen Methoden sind im Geltungsbereich des [Service Workers](/de/docs/Web/API/ServiceWorker) verfügbar. Sie sind über die {{domxref('WorkerGlobalScope.self')}}-Eigenschaft zugänglich:

```js
// Service Worker-Skript

self.registration.index.add(item);

self.registration.index.delete(item.id);

const contentIndexItems = self.registration.index.getAll();
```

### Das contentdelete-Ereignis

Wenn ein Eintrag aus der Benutzeroberfläche des Benutzeragenten entfernt wird, empfängt der Service Worker ein `contentdelete`-Ereignis.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // protokolliert die Inhaltsindex-ID, die verwendet werden kann, um festzustellen, welcher Inhalt aus Ihrem Cache gelöscht werden soll
});
```

Das {{domxref('ServiceWorkerGlobalScope.contentdelete_event', "contentdelete")}}-Ereignis wird nur ausgelöst, wenn die Löschung aufgrund einer Interaktion mit der integrierten Benutzeroberfläche des Browsers erfolgt. Es wird nicht ausgelöst, wenn die {{domxref('ContentIndex.delete()')}}-Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Inhaltsindex-API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service-Worker-API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
