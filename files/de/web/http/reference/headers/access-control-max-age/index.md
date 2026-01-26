---
title: Access-Control-Max-Age header
short-title: Access-Control-Max-Age
slug: Web/HTTP/Reference/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Access-Control-Max-Age`** {{Glossary("response_header", "Antwort-Header")}} gibt an, wie lange die Ergebnisse einer {{Glossary("preflight_request", "Voranfrage")}} (also die Informationen, die in den {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}}-Headern enthalten sind) zwischengespeichert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Max-Age: <delta-seconds>
```

## Direktiven

- `<delta-seconds>`
  - : Maximale Anzahl von Sekunden, für die die Ergebnisse als nicht-negativer, vorzeichenloser Integer zwischengespeichert werden können.
    Firefox [begrenz diesen auf 24 Stunden](https://searchfox.org/firefox-main/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1393) (86400 Sekunden).
    Chromium (vor Version 76) [begrenzte auf 10 Minuten](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 Sekunden).
    Chromium (ab Version 76) [setzt die Grenze auf 2 Stunden](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 Sekunden).
    Der Standardwert ist 5 Sekunden.

## Beispiele

Zwischenspeichern der Ergebnisse einer Voranfrage für 10 Minuten:

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
