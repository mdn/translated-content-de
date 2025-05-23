---
title: Access-Control-Max-Age header
short-title: Access-Control-Max-Age
slug: Web/HTTP/Reference/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Max-Age`** {{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange die Ergebnisse einer {{Glossary("preflight_request", "Preflight-Anfrage")}} (d.h. die Informationen, die in den {{HTTPHeader("Access-Control-Allow-Methods")}}- und {{HTTPHeader("Access-Control-Allow-Headers")}}-Headers enthalten sind) zwischengespeichert werden können.

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
  - : Maximale Anzahl von Sekunden, für die die Ergebnisse als unsignierte nicht-negative ganze Zahl zwischengespeichert werden können.
    Firefox [begrenzte dies auf 24 Stunden](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 Sekunden).
    Chromium (vor Version 76) [begrenzte auf 10 Minuten](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 Sekunden).
    Chromium (ab Version 76) [begrenzte auf 2 Stunden](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 Sekunden).
    Der Standardwert ist 5 Sekunden.

## Beispiele

Ergebnisse einer Preflight-Anfrage für 10 Minuten zwischenspeichern:

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
