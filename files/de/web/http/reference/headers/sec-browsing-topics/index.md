---
title: Sec-Browsing-Topics header
short-title: Sec-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standpunkt der Standardisierungsorganisationen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der HTTP-**`Sec-Browsing-Topics`**-{{Glossary("request_header", "Anfrage-Header")}} sendet die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage, die von einer Werbetechnologie-Plattform genutzt werden, um eine personalisierte Werbung auszuwählen, die angezeigt werden soll.

Wenn die aufrufende Seite die Topics-API nicht in einem erfolgreichen [Registrierungsprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) beinhaltet, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, stillschweigend fehl, und ein vorhandener `Sec-Browsing-Topics`-Header wird gelöscht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
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
  - : Eine Zeichenfolge, die den Algorithmus identifiziert (mit Ausnahme des Modellteils), der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Eine Zeichenfolge, die das Modell darstellt, das verwendet wird, um eine Zeichenfolge (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenfolge, die die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interessen-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, verkettet mit Doppelpunkten (`:`) zwischen jedem.

## Beispiele

Die genauen Eigenschaftenwerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [inoffiziellen Entwurfsvorschlag der Topics API](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
