---
title: "Document: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Herstellern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um dieses Feature in Ihren Anwendungen zu nutzen.

Die `browsingTopics()` Methode des [`Document`](/de/docs/Web/API/Document) Interfaces gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die Hauptthemen des Benutzers repräsentieren, eines aus jeder der letzten drei Epochen. Diese Themen könnten anschließend in einer nachfolgenden Abrufanfrage an die Werbetechnik-Plattform zurückgegeben werden. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenbesuch, wie vom Aufrufer beobachtet, aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

> **Hinweis:** `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und wie die anderen [Topics API Aktivierungs-Features](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) Themen als beobachtet zu markieren, ist aber etwas weniger leistungsfähig. Es wird empfohlen, eines der Features zu verwenden, das HTTP-Header nutzt, und auf `browsingTopics()` nur in Situationen zurückzugreifen, in denen die Header nicht geändert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das folgende Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, bewirkt, dass der Browser _keine_ Themen beobachtet, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Array von bis zu drei Objekten erfüllt wird, die die ausgewählten Themen des aktuellen Benutzers für die letzten drei Epochen repräsentieren. Jedes Objekt enthält folgende Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Modellteil) identifiziert, der verwendet wird, um das Thema zu berechnen.
- `modelVersion`
  - : Ein String, der das Modell repräsentiert, das verwendet wird, um einen String (wie den Hostname einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomieversion repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas repräsentiert, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, durch Doppelpunkte (`:`) zwischen den einzelnen verbunden.

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
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungspolice](/de/docs/Web/HTTP/Permissions_Policy) untersagt ist.
    - Die aufrufende Seite die Topics API nicht in einem erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat.

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

Dieses Feature ist Teil eines inoffiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
