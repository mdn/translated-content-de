---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Access-Control-Max-Age`** Antwort-Header gibt an, wie lange die Ergebnisse einer {{glossary("preflight request", "Voranfrage")}} (also die in den Headern {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} enthaltenen Informationen) zwischengespeichert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Header-Name")}}</th>
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
  - : Maximalanzahl von Sekunden, die die Ergebnisse zwischengespeichert werden können, als unsignierte nicht-negative Ganzzahl.
    Firefox [begrenzt dies auf 24 Stunden](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 Sekunden).
    Chromium (vor v76) [begrenzt auf 10 Minuten](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 Sekunden).
    Chromium (ab v76) [begrenzt auf 2 Stunden](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 Sekunden).
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
