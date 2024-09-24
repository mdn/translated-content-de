---
title: "ContentIndex: getAll()-Methode"
short-title: getAll()
slug: Web/API/ContentIndex/getAll
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getAll()`**-Methode der {{domxref("ContentIndex")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einer iterierbaren Liste von Inhaltverzeichnis-Einträgen aufgelöst wird.

## Syntax

```js-nolint
getAll()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{jsxref('Array')}} von `contentDescription`-Elementen aufgelöst wird.

- `contentDescription`

  - : Jedes zurückgegebene Element ist ein {{jsxref('Object')}}, das die folgenden Daten enthält:

    - `id`
      - : Eine eindeutige {{jsxref('String')}}-Kennung.
    - `title`
      - : Ein {{jsxref('String')}}-Titel des Elements.
        Wird in benutzerverfügbaren Listen von Inhalten verwendet.
    - `description`
      - : Eine {{jsxref('String')}}-Beschreibung des Elements.
        Wird in benutzerverfügbaren Listen von Inhalten verwendet.
    - `url`
      - : Ein {{jsxref('String')}} mit der URL des entsprechenden HTML-Dokuments.
        Muss unter dem Scope des aktuellen [Service Workers](/de/docs/Web/API/ServiceWorker) liegen.
    - `category` {{Optional_Inline}}

      - : Eine {{jsxref('String')}}-Definition der Inhaltskategorie.
        Kann sein:

        - `''` Ein leerer {{jsxref('String')}}, dies ist der Standardwert.
        - `homepage`
        - `article`
        - `video`
        - `audio`

    - `icons` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von Bildressourcen, definiert als ein {{jsxref('Object')}} mit den folgenden Daten:

        - `src`
          - : Eine URL-{{jsxref('String')}} der Quellbilddatei.
        - `sizes` {{Optional_Inline}}
          - : Eine {{jsxref('String')}}-Darstellung der Bildgröße.
        - `type` {{Optional_Inline}}
          - : Der {{Glossary("MIME type")}} des Bildes.
        - `label` {{Optional_Inline}}
          - : Ein String, der den zugänglichen Namen des Symbols darstellt.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst. Wenn keine Elemente im Inhaltsverzeichnis vorhanden sind, wird ein leeres {{jsxref('Array')}} zurückgegeben.

## Beispiele

Das folgende Beispiel zeigt eine asynchrone Funktion, die Elemente innerhalb des [Content Index](/de/docs/Web/API/Content_Index_API) abruft und über jedes Element iteriert, um eine Liste für die Schnittstelle zu erstellen.

```js
async function createReadingList() {
  // auf unsere Service-Worker-Registrierung zugreifen
  const registration = await navigator.serviceWorker.ready;

  // unsere Indexeinträge abrufen
  const entries = await registration.index.getAll();

  // ein enthaltendes Element erstellen
  const readingListElem = document.createElement("div");

  // auf Einträge testen
  if (entries.length === 0) {
    // wenn keine Einträge vorhanden sind, eine Nachricht anzeigen
    const message = document.createElement("p");
    message.innerText =
      "Sie haben derzeit keine Artikel für das Offline-Lesen gespeichert.";

    readingListElem.append(message);
  } else {
    // wenn Einträge vorhanden sind, in einer Liste von Links zum Inhalt anzeigen
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

- [Einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
