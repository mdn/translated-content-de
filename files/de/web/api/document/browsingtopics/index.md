---
title: "Dokument: browsingTopics() Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

{{APIRef("Topics API")}}{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positionen](/de/docs/Web/API/Topics_API#standards_positions) unten.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu verwenden.

Die `browsingTopics()`-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen des Benutzers repräsentieren, eines aus jedem der letzten drei Zeitabschnitte. Diese Themen könnten dann bei einer nachfolgenden Fetch-Anfrage an die Werbetechnologie-Plattform zurückgegeben werden. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in die Themenberechnung einbezogen werden kann.

> [!NOTE]
> `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie die anderen Funktionen, die die Topics API ermöglichen, ist jedoch etwas weniger leistungsfähig. Es wird empfohlen, eine der HTTP-Header-verwendenden Funktionen zu nutzen und nur dann auf `browsingTopics()` zurückzugreifen, wenn die Header nicht geändert werden können.

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

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die ausgewählten Themen des aktuellen Benutzers für die letzten drei Zeitabschnitte repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Modellteil) identifiziert, der verwendet wird, um das Thema zu berechnen.
- `modelVersion`
  - : Ein String, der das Modell repräsentiert, das verwendet wird, um einen String (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomieversion repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas repräsentiert, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, konkateniert mit Doppelpunkten (`:`) zwischen jeder.

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
    - Die Verwendung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) untersagt ist.
    - Die aufrufende Seite die Topics API nicht in einen erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) einbezogen hat.

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
