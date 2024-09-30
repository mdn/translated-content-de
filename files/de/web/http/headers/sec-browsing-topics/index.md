---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

> [!NOTE]
> Ein [Anmeldeverfahren](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der **`Sec-Browsing-Topics`** Request-Header sendet die ausgewählten Themen des aktuellen Nutzers zusammen mit der verbundenen Anfrage, welche von einer Werbetechnologie-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

Wenn die aufrufende Website keine erfolgreiche Integration des Topics API im Rahmen eines [Privacy Sandbox Anmeldeverfahrens](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, stillschweigend fehl, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

Siehe [Verwendung des Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Browsing-Topics: <array-of-observed-topics>
```

## Direktiven

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, welche die vom aktuellen Nutzer in den letzten drei Epochen ausgewählten Themen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Eine Zeichenkette zur Identifizierung des Algorithmus (außer dem Modellteil), der zur Berechnung des Themas verwendet wurde.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell darstellt, das verwendet wird, um eine Zeichenfolge (wie den Hostnamen einer Webseite) zu Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomie-Version darstellt.
- `topic`
  - : Eine Nummer, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel einer [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, durch Doppelpunkte (`:`) getrennt, zusammengefügt.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
