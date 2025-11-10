---
title: "Dokument: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Die `browsingTopics()` Methode des [`Document`](/de/docs/Web/API/Document) Interface gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die wichtigsten Themen für den Nutzer darstellen, jeweils eines aus jeder der letzten drei Epochen. Diese Themen könnten dann in einer nachfolgenden Fetch-Anfrage an die Werbetechnologie-Plattform zurückgegeben werden. Standardmäßig sorgt die Methode auch dafür, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in die Themenberechnung einbezogen werden kann.

Weitere Informationen finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

> [!NOTE] > `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie die anderen [Topics API ermöglichenden Funktionen](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), ist aber etwas weniger leistungsfähig. Sie sollten eine der Funktionen verwenden, die HTTP-Header verwenden, und nur in Situationen, in denen die Header nicht modifiziert werden können, auf `browsingTopics()` zurückgreifen.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, bewirkt, dass der Browser keine Themen beobachtet, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was das Beobachten von Themen verursacht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die ausgewählten Themen des aktuellen Nutzers für die letzten drei Epochen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Eine Zeichenkette, die den Algorithmus (außer dem Modellteil) identifiziert, der zur Berechnung des Themas verwendet wurde.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell repräsentiert, das verwendet wird, um eine Zeichenkette (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomieversion repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, jeweils durch Doppelpunkte (`:`) zwischen den einzelnen Werten verkettet.

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
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt ist.
    - Die aufrufende Seite hat die Topics API nicht im Rahmen eines erfolgreichen [Anmeldeprozesses für die Datenschutz-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten.

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

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
