---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positionen](/de/docs/Web/API/Topics_API#standards_positions).

> [!NOTE]
> Ein [Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) ist erforderlich, um diese Funktion in Ihren Anwendungen zu nutzen.

Der **`Sec-Browsing-Topics`** Request-Header sendet die ausgewählten Themen des aktuellen Nutzers zusammen mit der zugehörigen Anfrage, die von einer Werbetechnologie-Plattform genutzt werden, um eine personalisierte Anzeige auszuwählen.

Wenn die aufrufende Seite die Topics API nicht in einen erfolgreichen [Registrierungsprozess für die Datenschutz-Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) integriert hat, schlägt der Versuch, `Sec-Browsing-Topics` zu erstellen oder zu ändern, ohne Fehleranzeige fehl, und vorhandene `Sec-Browsing-Topics` Header werden gelöscht.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

Ein JSON-Objekt, das ein Array von bis zu drei Objekten darstellt, das die vom Nutzer in den letzten drei Perioden ausgewählten Themen repräsentiert. Jedes Objekt enthält die folgenden Eigenschaften:

- `configVersion`
  - : Ein String, der den Algorithmus (außer dem Modellteil) zur Berechnung des Themas identifiziert.
- `modelVersion`
  - : Ein String, der das Modell repräsentiert, das verwendet wird, um einen String (wie den Hostnamen einer Webseite) in Themen-IDs zu klassifizieren.
- `taxonomyVersion`
  - : Ein String, der die verwendete Taxonomie-Version repräsentiert.
- `topic`
  - : Eine Zahl, die die ID des Themas darstellt, das vom Browser verwendet werden kann, um das Thema aus der Taxonomie abzurufen (siehe ein Beispiel für eine [Interest-Taxonomie](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : Die `configVersion`, `modelVersion`, und `taxonomyVersion`, verbunden mit Doppelpunkten (`:`) zwischen den einzelnen Teilen.

## Beispiele

Die genauen Eigenschaftswerte können je nach Browser-Implementierung variieren. Ein Beispiel-Header von Chrome könnte wie folgt aussehen:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Inoffiziellen Entwurfsvorschlag zu Topics API](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
