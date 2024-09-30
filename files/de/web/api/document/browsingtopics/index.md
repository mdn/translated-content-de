---
title: "Document: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um dieses Feature in Ihren Anwendungen zu nutzen.

Die `browsingTopics()` Methode des [`Document`](/de/docs/Web/API/Document) Interface gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die wichtigsten Themen für den Benutzer repräsentieren, eines aus jeder der letzten drei Epochen. Diese Themen könnten dann in einer nachfolgenden Fetch-Anfrage an die Werbetechnologie-Plattform zurückgegeben werden. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenbesuch aufzeichnet, wie vom Aufrufer beobachtet, sodass der Hostname der Seite später bei der Themenberechnung verwendet werden kann.

Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

> **Hinweis:** `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie andere [Topics API enabling features](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), aber es ist etwas weniger leistungsfähig. Es wird empfohlen, eines der HTTP-Header-verwendenden Features zu nutzen und nur auf `browsingTopics()` zurückzugreifen, wenn die Header nicht geändert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, bewirkt, dass der Browser _nicht_ beobachtet, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die ausgewählten Themen des aktuellen Benutzers für die letzten drei Epochen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Modellteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell repräsentiert, das verwendet wird, um einen String (wie den Hostnamen einer Webseite) in Themen IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomie-Version repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas repräsentiert, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interessen-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, die mit Doppelpunkten (`:`) zwischen jedem zusammengefügt sind.

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispielobjekt von Chrome könnte wie folgt aussehen:

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
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist.
    - Die aufrufende Seite die Topics API nicht in einem erfolgreichen [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) beinhaltet.

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

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
