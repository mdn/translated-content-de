---
title: Sec-Browsing-Topics header
short-title: Sec-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

> [!NOTE]
> Ein [Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um dieses Feature in Ihren Anwendungen zu nutzen.

Der HTTP **`Sec-Browsing-Topics`** {{Glossary("request_header", "Request-Header")}} sendet die ausgewählten Themen des aktuellen Nutzers zusammen mit der zugehörigen Anfrage. Diese werden von einer Werbetechnologie-Plattform verwendet, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

Wenn die aufrufende Seite nicht die Topics API in einen erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, stillschweigend fehl, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Browsing-Topics: <array-of-observed-topics>
```

## Direktiven

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, die die ausgewählten Themen des aktuellen Nutzers für die letzten drei Epochen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Model-Teil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell darstellt, das verwendet wird, um einen String (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interessentaxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, verkettet mit Doppelpunkten (`:`) zwischen jedem.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) beschrieben wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
