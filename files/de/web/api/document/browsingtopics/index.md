---
title: "Document: browsingTopics()-Methode"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards positionen](/de/docs/Web/API/Topics_API#standards_positions) unten für Details zur Ablehnung.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um dieses Feature in Ihren Anwendungen zu verwenden.

Die `browsingTopics()`-Methode des {{domxref("Document")}}-Interface gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die die Top-Themen des Nutzers für jede der letzten drei Epochen repräsentieren. Diese Themen könnten dann in einer nachfolgenden Abrufforderung an die Werbetechnologieplattform zurückgegeben werden. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch als vom Aufrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in die Themenberechnung einbezogen werden kann.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

> **Hinweis:** `browsingTopics()` verlässt sich nicht auf HTTP-Header, um Themen zu senden und als beobachtet zu markieren, wie dies bei anderen [Topics API aktivierenden Features](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) der Fall ist, aber es ist etwas weniger leistungsfähig. Es wird empfohlen, eines der HTTP-Header-verwendenden Features zu nutzen und auf `browsingTopics()` nur in Situationen zurückzugreifen, in denen die Header nicht modifiziert werden können.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `skipObservation`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, den Browser dazu veranlasst, _keine_ Themen zu beobachten, wenn `browsingTopics()` aufgerufen wird. Der Standardwert ist `false`, was dazu führt, dass Themen beobachtet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von bis zu drei Objekten aufgelöst wird, die die ausgewählten Themen des aktuellen Nutzers für die letzten drei Epochen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Eine Zeichenkette, die den Algorithmus (außerhalb des Modellteils) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell repräsentiert, das verwendet wird, um eine Zeichenfolge (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomieversion repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas repräsentiert, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, mit Doppelpunkten (`:`) zwischen jedem verbunden.

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

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - Die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verboten ist.
    - Die aufrufende Seite die Topics API nicht in einem erfolgreichen [Anmeldeverfahren im Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat.

## Beispiele

```js
// Ein Array der Top-Themen für diesen Nutzer abrufen
const topics = await document.browsingTopics();

// Eine Werbekampagne anfordern
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Das JSON aus der Antwort abrufen
const creative = await response.json();

// Werbung anzeigen
```

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
