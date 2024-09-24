---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Weitere Informationen zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

> [!NOTE]
> Ein [Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der **`Sec-Browsing-Topics`** Anfrage-Header sendet die ausgewählten Themen des aktuellen Benutzers zusammen mit der zugehörigen Anfrage, die von einer Werbetechnologie-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

Wenn die aufrufende Seite die Topics API nicht in einem erfolgreichen [Anmeldeprozess der Datenschutzumgebung](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, ohne Fehlermeldung fehl, und jeder vorhandene `Sec-Browsing-Topics`-Header wird gelöscht.

Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
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
  - : Eine Zeichenkette, die den Algorithmus (außer dem Modellteil) zur Berechnung des Themas identifiziert.
- `modelVersion`
  - : Eine Zeichenkette, die das Modell darstellt, das verwendet wird, um eine Zeichenkette (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Eine Zeichenkette, die die verwendete Taxonomieversion darstellt.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, die vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel [Taxonomie der Interessen](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion` und `taxonomyVersion`, durch Doppelpunkte (`:`) voneinander getrennt.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browserimplementierung variieren. Ein Beispielheader von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
