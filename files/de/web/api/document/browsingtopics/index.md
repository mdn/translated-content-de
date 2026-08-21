---
title: "Dokument: browsingTopics()-Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Topics API")}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) ist erforderlich, um dieses Feature in Ihren Anwendungen zu nutzen.

Die `browsingTopics()`-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein Versprechen (`promise`) zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer darstellen, eines aus jedem der letzten drei Epochen. Diese Themen könnten dann in einer nachfolgenden Fetch-Anfrage an die Werbetechnologie-Plattform übermittelt werden. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet protokolliert, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann.

> [!NOTE]
> `browsingTopics()` stützt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie es die anderen Features zur Aktivierung der Topics API tun, ist aber etwas weniger performant. Es wird empfohlen, eines der auf HTTP-Header basierenden Features zu verwenden und `browsingTopics()` nur in Situationen einzusetzen, in denen die Header nicht geändert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, den Browser dazu veranlasst, Themen _nicht_ zu beobachten, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten erfüllt wird, die die ausgewählten Themen des aktuellen Benutzers für die letzten drei Epochen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außerhalb des Modellteils) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell darstellt, das verwendet wird, um einen String (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomie-Version darstellt.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interessen-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, zusammengefügt mit Doppelpunkten (`:`) zwischen jedem.

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
    - Die aufrufende Seite die Topics API nicht in einem erfolgreichen [Registrierungsprozess der Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) inkludiert hat.

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
