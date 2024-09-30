---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Access-Control-Max-Age`** Antwortheader gibt an, wie lange die Ergebnisse einer [Preflight-Anfrage](/de/docs/Glossary/preflight_request) (also die in den Headern {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} enthaltenen Informationen) zwischengespeichert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Max-Age: <delta-seconds>
```

## Direktiven

- \<delta-seconds>
  - : Maximale Anzahl an Sekunden, die die Ergebnisse zwischengespeichert werden können, als vorzeichenlose nicht-negative Ganzzahl.
    Firefox [begrenzt dies auf 24 Stunden](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 Sekunden).
    Chromium (vor Version 76) [begrenzt auf 10 Minuten](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 Sekunden).
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
