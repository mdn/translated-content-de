---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards-Poistionen](/de/docs/Web/API/Topics_API#standards_positions).

> [!NOTE]
> Ein [Einschreibungsverfahren](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der HTTP **`Sec-Browsing-Topics`** {{Glossary("request_header", "Request-Header")}} sendet die ausgewählten Themen des aktuellen Benutzers zusammen mit der zugehörigen Anfrage, die von einer Werbetechnologieplattform verwendet werden, um eine personalisierte Werbung auszuwählen, die angezeigt werden soll.

Wenn die aufrufende Seite die Topics API nicht in einem erfolgreichen [Einschreibungsprozess im Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einbezogen hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, ohne Fehlermeldung fehl, und jeglicher vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

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

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, die die vom aktuellen Benutzer ausgewählten Themen für die letzten drei Epochen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Eine Zeichenkette, die den Algorithmus (außer dem Modellteil) identifiziert, der zur Berechnung des Themas verwendet wird.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell darstellt, das verwendet wird, um eine Zeichenkette (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Taxonomie von Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, durch Doppelpunkte (`:`) getrennt.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browserimplementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Unoffiziellen Entwurfsvorschlag der Topics API](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
