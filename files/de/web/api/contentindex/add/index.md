---
title: "ContentIndex: add()-Methode"
short-title: add()
slug: Web/API/ContentIndex/add
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`add()`**-Methode der {{domxref("ContentIndex")}}-Schnittstelle registriert ein Element mit dem [Content-Index](/de/docs/Web/API/Content_Index_API).

## Syntax

```js-nolint
add(contentDescription)
```

### Parameter

- `contentDescription`

  - : Ein {{jsxref('Object')}}, das die folgenden Daten enthält:

    - `id`
      - : Ein einzigartiger {{jsxref('String')}}-Bezeichner.
    - `title`
      - : Ein {{jsxref('String')}}-Titel für das Element. Wird in
        benutzerfreundlichen Inhaltslisten verwendet.
    - `description`
      - : Eine {{jsxref('String')}}-Beschreibung des Elements. Wird
        in benutzerfreundlichen Inhaltslisten verwendet.
    - `url`
      - : Ein {{jsxref('String')}} mit der URL des entsprechenden
        HTML-Dokuments. Muss unter dem Geltungsbereich des aktuellen
        [Service Worker](/de/docs/Web/API/ServiceWorker) liegen.
    - `category` {{Optional_Inline}}

      - : Ein {{jsxref('String')}}, das die
        Kategorie des Inhalts definiert. Kann sein:

        - `''` Ein leerer {{jsxref('String')}}, dies ist der Standard.
        - `homepage`
        - `article`
        - `video`
        - `audio`

    - `icons` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von Bildressourcen, definiert als ein {{jsxref('Object')}} mit den folgenden Daten:

        - `src`
          - : Ein URL-{{jsxref('String')}} des Quellbildes.
        - `sizes` {{Optional_Inline}}
          - : Eine {{jsxref('String')}}-Darstellung der Bildgröße.
        - `type` {{Optional_Inline}}
          - : Der {{Glossary("MIME type")}} des Bildes.
        - `label` {{Optional_Inline}}
          - : Ein String, der den zugänglichen Namen des Icons repräsentiert.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Diese Ausnahme wird unter folgenden Bedingungen ausgelöst:

    - Die Registrierung des Service Workers ist nicht vorhanden oder der Service Worker enthält kein {{domxref('FetchEvent')}}.
    - Einer der Parameter `id`, `title`, `description` oder `url` fehlt, ist nicht vom Typ {{jsxref('String')}} oder ist ein leerer {{jsxref('String')}}.
    - Der `url`-Parameter entspricht nicht der {{glossary("same-origin policy")}} mit dem {{domxref("ServiceWorker", "Service Worker", "", "nocode")}}.
    - Einer der Einträge in `icons` ist kein Bildtyp oder das Abrufen eines Eintrags in `icons` schlug mit einem Netzwerkfehler oder Dekodierungsfehler fehl.

## Beispiele

Hier deklarieren wir ein Element im korrekten Format und erstellen eine asynchrone
Funktion, die die `add`-Methode verwendet, um es im
[Content-Index](/de/docs/Web/API/Content_Index_API) zu registrieren.

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

// unsere asynchrone Funktion zur Registrierung indizierter Inhalte
async function registerContent(data) {
  const registration = await navigator.serviceWorker.ready;

  // Funktionserkennung für Content Index
  if (!registration.index) {
    return;
  }

  // Inhalt registrieren
  try {
    await registration.index.add(data);
  } catch (e) {
    console.log("Inhaltsregistrierung fehlgeschlagen: ", e.message);
  }
}
```

Die `add`-Methode kann auch im
Geltungsbereich des [Service Workers](/de/docs/Web/API/ServiceWorker) verwendet werden.

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

self.registration.index.add(item);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API sowie Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
