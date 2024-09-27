---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um dieses Feature in Ihren Anwendungen zu nutzen.

Der **`Sec-Browsing-Topics`** Request-Header sendet die ausgewählten Themen des aktuellen Nutzers zusammen mit der zugehörigen Anfrage, die von einer Werbeplattform genutzt werden, um eine personalisierte Anzeige auszuwählen und anzuzeigen.

Wenn die aufrufende Seite die Topics API nicht in einem erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) aufgenommen hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, ohne Fehlermeldung fehl, und ein vorhandener `Sec-Browsing-Topics` Header wird gelöscht.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

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

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, die die vom aktuellen Nutzer für die letzten drei Epochen ausgewählten Themen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Modellteil) zur Berechnung des Themas identifiziert.
- `modelVersion`
  - : Ein String, der das Modell repräsentiert, das verwendet wird, um einen String (wie z.B. den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser zur Abrufung des Themas aus der Taxonomie verwendet werden kann (siehe ein Beispiel für [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, durch Doppelpunkte (`:`) voneinander getrennt konkateniert.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header aus Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
