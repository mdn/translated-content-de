---
title: "Dokument: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browserherstellern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Um diese Funktion in Ihren Anwendungen nutzen zu können, ist ein [Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) erforderlich.

Die `browsingTopics()` Methode des [`Document`](/de/docs/Web/API/Document) Interfaces gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die wichtigsten Themen für den Benutzer repräsentieren, eines aus jeder der letzten drei Epochen. Diese Themen könnten dann in einer nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgegeben werden. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch aufzeichnet, wie vom Aufrufer beobachtet, sodass der Hostname der Seite später bei der Themenermittlung verwendet werden kann.

Weitere Einzelheiten finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

> **Hinweis:** `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie die anderen [Funktionen zur Aktivierung der Topics API](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), aber es ist etwas weniger performant. Es wird empfohlen, eine der HTTP-Header-nutzenden Funktionen zu verwenden und nur dann auf `browsingTopics()` zurückzugreifen, wenn die Header nicht geändert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, dazu führt, dass der Browser keine Themen beobachtet, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die aktuell ausgewählten Themen des Benutzers für die letzten drei Epochen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Eine Zeichenkette, die den Algorithmus (außer dem Modellanteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell repräsentiert, das zur Klassifizierung eines Strings (wie des Hostnamens einer Webseite) in Themen-IDs verwendet wird.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomieversion repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas repräsentiert, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, mit Doppelpunkten (`:`) dazwischen verkettet.

Die genauen Eigenschaftswerte können je nach Browserimplementierung variieren. Ein Beispielobjekt von Chrome könnte wie folgt aussehen:

```js
{
  configVersion: "chrome.1",
  modelVersion: "1",
  taxonomyVersion: "1",
  topic: 43,
  version: "chrome.1:1:1"
}
```

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) untersagt ist.
    - Die aufrufende Seite die Topics API nicht in einem erfolgreichen [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) aufgenommen hat.

## Beispiele

```js
// Get an array of top topics for this user
const topics = await document.browsingTopics();

// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
