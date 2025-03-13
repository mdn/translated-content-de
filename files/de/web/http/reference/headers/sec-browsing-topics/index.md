---
title: Sec-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Positionen der Standards](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der HTTP **`Sec-Browsing-Topics`** {{Glossary("request_header", "Anforderungs-Header")}} sendet die ausgewählten Themen des aktuellen Benutzers zusammen mit der zugehörigen Anfrage, die von einer Werbetechnologie-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

Falls die aufrufende Seite die Topics API nicht in einem erfolgreichen [Privacy Sandbox Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, stillschweigend fehl, und vorhandene `Sec-Browsing-Topics` Header werden gelöscht.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Browsing-Topics: <array-of-observed-topics>
```

## Direktiven

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, die die ausgewählten Themen des aktuellen Benutzers für die letzten drei Epochen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (abgesehen vom Modellteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell darstellt, das verwendet wird, um eine Zeichenkette (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Nummer, die die ID des Themas darstellt, welche vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, zusammengefügt mit Doppelpunkten (`:`) dazwischen.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
