---
title: "Document: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Ein [Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Die `browsingTopics()` Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die wichtigsten Themen für den Benutzer repräsentieren, eines aus jedem der letzten drei Epochen. Diese Themen könnten dann in einer nachfolgenden Fetch-Anfrage an die Ad-Tech-Plattform zurückgesendet werden. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später bei der Themenberechnung verwendet werden kann.

Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

> **Hinweis:** `browsingTopics()` stützt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie die anderen [Topics API enabling features](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), ist aber etwas weniger performant. Es wird empfohlen, eine der HTTP-Header-nutzenden Funktionen zu verwenden und nur auf `browsingTopics()` zurückzugreifen, wenn die Header nicht geändert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, bewirkt, dass der Browser beim Aufrufen von `browsingTopics()` _keine_ Themen beobachtet. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die vom aktuellen Benutzer ausgewählten Themen für die letzten drei Epochen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Modellteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell repräsentiert, das zur Klassifizierung eines Strings (wie der Hostname einer Webseite) in Themen-IDs verwendet wird.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Nummer, die die ID des Themas repräsentiert, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interessen-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, getrennt durch Doppelpunkte (`:`) zwischen jedem.

Die genauen Eigenschaftswerte können je nach Browserimplementierung variieren. Ein Beispielobjekt aus Chrome könnte wie folgt aussehen:

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
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verboten ist.
    - Die aufrufende Seite die Topics API nicht in einen erfolgreichen [Einschreibungsprozess im Datenschutzzentrum](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat.

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

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
