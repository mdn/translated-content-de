---
title: "Dokument: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Topics API")}}{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Die `browsingTopics()` Methode des [`Document`](/de/docs/Web/API/Document) Interfaces gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen des Nutzers darstellen, eines aus jeder der letzten drei Epochen. Diese Themen könnten dann in einer nachfolgenden Abrageanfrage an die Ad-Tech-Plattform zurückgegeben werden. Standardmäßig führt die Methode dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, damit der Hostname der Seite später in der Themenberechnung verwendet werden kann.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

> [!NOTE]
> `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, im Gegensatz zu den anderen [Topics API aktivierenden Funktionen](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), ist jedoch etwas weniger performant. Es wird empfohlen, eine der HTTP-Header-verwendenden Funktionen zu verwenden und auf `browsingTopics()` nur in Situationen zurückzugreifen, in denen die Header nicht geändert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, dazu führt, dass der Browser keine Themen beobachtet, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die ausgewählten Themen des aktuellen Nutzers für die letzten drei Epochen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus identifiziert (außer dem Modellteil), der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell darstellt, das verwendet wird, um einen String (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomie-Version darstellt.
- `topic`
  - : Eine Nummer, die die ID des Themas darstellt, die vom Browser genutzt werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, mit Doppelpunkten (`:`) zwischen jeder verkettet.

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispielobjekt aus Chrome könnte wie folgt aussehen:

```json
{
  "configVersion": "chrome.1",
  "modelVersion": "1",
  "taxonomyVersion": "1",
  "topic": 43,
  "version": "chrome.1:1:1"
}
```

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) untersagt ist.
    - Die aufrufende Seite die Topics API nicht in einem erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

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
