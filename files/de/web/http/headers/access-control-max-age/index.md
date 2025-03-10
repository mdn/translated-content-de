---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Max-Age`** {{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange die Ergebnisse einer {{Glossary("preflight_request", "Preflight-Anfrage")}} (das heißt, die Informationen, die in den Headern {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} enthalten sind) zwischengespeichert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Max-Age: <delta-seconds>
```

## Direktiven

- `<delta-seconds>`
  - : Maximale Anzahl von Sekunden, für die die Ergebnisse als nicht-negativer Ganzzahlwert ohne Vorzeichen zwischengespeichert werden können.
    Firefox [begrenzt dies auf 24 Stunden](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 Sekunden).
    Chromium (vor Version 76) [begrenzte auf 10 Minuten](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 Sekunden).
    Chromium (ab Version 76) [begrenzt auf 2 Stunden](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 Sekunden).
    Der Standardwert ist 5 Sekunden.

## Beispiele

Zwischenspeichern der Ergebnisse einer Preflight-Anfrage für 10 Minuten:

```http
Access-Control-Max-Age: 600
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
