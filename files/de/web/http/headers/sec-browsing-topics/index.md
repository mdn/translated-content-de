---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der HTTP **`Sec-Browsing-Topics`** {{Glossary("request_header", "Anforderungs-Header")}} sendet die ausgewählten Themen des aktuellen Benutzers zusammen mit der zugehörigen Anforderung, die von einer Werbetechnik-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

Wenn die aufrufende Seite nicht die Topics-API in einem erfolgreichen [Privacy-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, ohne Meldung fehl, und ein vorhandener `Sec-Browsing-Topics`-Header wird gelöscht.

Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Browsing-Topics: <array-of-observed-topics>
```

## Direktiven

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, die die ausgewählten Themen des aktuellen Benutzers für die letzten drei Zeiträume repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Eine Zeichenkette, die den Algorithmus (außer dem Modellteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell darstellt, das verwendet wird, um eine Zeichenfolge (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Nummer, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, mit Doppelpunkten (`:`) zwischen jedem zusammengefügt.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, auch wenn sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
