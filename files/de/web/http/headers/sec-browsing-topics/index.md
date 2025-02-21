---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu verwenden.

Der HTTP **`Sec-Browsing-Topics`** {{Glossary("request_header", "Request-Header")}} sendet die ausgewählten Themen für den aktuellen Nutzer zusammen mit der zugehörigen Anfrage, die von einer Werbetechnologie-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

Wenn die aufrufende Website die Topics API nicht in einem erfolgreichen [Registrierungsprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, stillschweigend fehl, und jeder bestehende `Sec-Browsing-Topics` Header wird gelöscht.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein String, der den Algorithmus (außer dem Modellteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Ein String, der das Modell darstellt, das verwendet wird, um einen String (wie z.B. den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomie-Version darstellt.
- `topic`
  - : Eine Nummer, die die ID des Themas darstellt, welche vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interessentaxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, durch Doppelpunkte (`:`) zwischen jedem Teil verbunden.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte folgendermaßen aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
