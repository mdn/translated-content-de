---
title: "ContentIndex: add()-Methode"
short-title: add()
slug: Web/API/ContentIndex/add
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`add()`**-Methode der [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Schnittstelle registriert ein Element im [Content Index](/de/docs/Web/API/Content_Index_API).

## Syntax

```js-nolint
add(contentDescription)
```

### Parameter

- `contentDescription`

  - : Ein {{jsxref('Object')}} mit den folgenden Daten:

    - `id`
      - : Ein eindeutiger {{jsxref('String')}}-Bezeichner.
    - `title`
      - : Ein {{jsxref('String')}}-Titel für das Element. Wird in für den Nutzer sichtbaren Inhaltslisten verwendet.
    - `description`
      - : Eine {{jsxref('String')}}-Beschreibung des Elements. Wird in für den Nutzer sichtbaren Inhaltslisten verwendet.
    - `url`
      - : Ein {{jsxref('String')}} mit der URL des entsprechenden HTML-Dokuments. Muss unter dem Geltungsbereich des aktuellen [Service Workers](/de/docs/Web/API/ServiceWorker) liegen.
    - `category` {{Optional_Inline}}

      - : Ein {{jsxref('String')}} zur Definition der Inhaltkategorie. Kann sein:
        - `''` Ein leerer {{jsxref('String')}}, dies ist die Standardeinstellung.
        - `homepage`
        - `article`
        - `video`
        - `audio`

    - `icons` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} von Bildressourcen, definiert als ein {{jsxref('Object')}} mit den folgenden Daten:
        - `src`
          - : Eine URL-{{jsxref('String')}} der Quellbildes.
        - `sizes` {{Optional_Inline}}
          - : Eine {{jsxref('String')}}-Darstellung der Bildgröße.
        - `type` {{Optional_Inline}}
          - : Der {{Glossary("MIME_type", "MIME-Typ")}} des Bildes.
        - `label` {{Optional_Inline}}
          - : Ein String, der den zugänglichen Namen des Symbols darstellt.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Diese Ausnahme wird unter den folgenden Bedingungen ausgelöst:
    - Die Registrierung des Service Workers ist nicht vorhanden oder der Service Worker enthält kein [`FetchEvent`](/de/docs/Web/API/FetchEvent).
    - Einer der `id`, `title`, `description` oder `url`-Parameter fehlt, ist kein {{jsxref('String')}}, oder ein leerer {{jsxref('String')}}.
    - Der `url`-Parameter entspricht nicht der {{Glossary("same-origin_policy", "Same-Origin-Policy")}} mit dem [Service Worker](/de/docs/Web/API/ServiceWorker).
    - Einer der Einträge in `icons` ist kein Bildtyp, oder das Abrufen eines der Einträge in `icons` ist aufgrund eines Netzwerk- oder Dekodierungsfehlers fehlgeschlagen.

## Beispiele

Hier deklarieren wir ein Element im korrekten Format und erstellen eine asynchrone Funktion, die die `add`-Methode verwendet, um es im [Content Index](/de/docs/Web/API/Content_Index_API) zu registrieren.

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

Die `add`-Methode kann auch im Scope des [Service Workers](/de/docs/Web/API/ServiceWorker) verwendet werden.

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

self.registration.index.add(item);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
