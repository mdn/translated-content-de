---
title: Cross-Origin-Embedder-Policy-Report-Only (COEP) header
short-title: Cross-Origin-Embedder-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy-Report-Only
l10n:
  sourceCommit: 2d0aa21573c6ceb33aeadf94ce6cd84588b74123
---

Der HTTP **`Cross-Origin-Embedder-Policy-Report-Only`** (COEP) {{Glossary("response_header", "Antwort-Header")}} konfiguriert die _report-only_-Richtlinie des aktuellen Dokuments für das Laden und Einbetten von Cross-Origin-Ressourcen, die im `no-cors`-Modus angefordert werden.

Der Header ermöglicht es Webseitenadministratoren, über Ressourcen zu berichten, die durch {{HTTPHeader("Cross-Origin-Embedder-Policy")}} blockiert würden, ohne zu verhindern, dass sie geladen werden. Dies ermöglicht eine sanftere Einführung der Durchsetzung.

Verstöße gegen die Richtlinie können über die [Reporting-API](/de/docs/Web/API/Reporting_API) gemeldet werden. Berichte können auf der Seite, für die die Richtlinie festgelegt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet und an Serverendpunkte gesendet werden, die in einem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header definiert sind und mit dem [`report-to`](#report-to_endpoint_name)-Parameter ausgewählt werden. Weitere Informationen finden Sie unter [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport).

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
Cross-Origin-Embedder-Policy-Report-Only: <token>; <parameter>
```

### Direktiven

Der Header sollte nur mit einem Token und einem `report-to`-Endpunkt gesetzt werden.

Das mehrfache Setzen des Headers oder mit mehreren Tokens ist gleichbedeutend mit dem Setzen von `unsafe-none`. Das Weglassen von `report-to` macht den Header funktional inaktiv.

Der `<token>`-Wert kann sein:

- `unsafe-none`
  - : Ermöglicht es dem Dokument, Cross-Origin-Ressourcen zu laden, die im `no-cors`-Modus angefordert werden, **ohne** explizite Erlaubnis durch den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header zu geben. Dies ist der Standardwert.

- `require-corp`
  - : Ein Dokument kann nur Ressourcen laden, die im `no-cors`-Modus von derselben Herkunft angefordert wurden, oder Ressourcen, die den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header explizit auf einen Wert gesetzt haben, der das Einbetten erlaubt.

    Das Laden von Cross-Origin-Ressourcen wird durch COEP blockiert, es sei denn:
    - Die Ressource wird im `no-cors`-Modus angefordert und die Antwort enthält einen {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header, der erlaubt, dass sie in die Dokumentherkunft geladen wird.
    - Die Ressource wird im `cors`-Modus angefordert; zum Beispiel in HTML mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut oder in JavaScript durch eine Anforderung mit [`{mode="cors"}`](/de/docs/Web/API/RequestInit#cors). Beachten Sie, dass Anfragen im `cors`-Modus nicht von COEP blockiert oder COEP-Verstöße auslösen werden, aber immer noch von CORS erlaubt sein müssen.

- `credentialless`
  - : Ein Dokument kann Cross-Origin-Ressourcen laden, die im [`no-cors`-Modus](/de/docs/Web/API/Request/mode) angefordert werden, **ohne** eine explizite Erlaubnis über den {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header. In diesem Fall werden Anfragen ohne Anmeldeinformationen gesendet: Cookies werden in der Anfrage weggelassen und in der Antwort ignoriert.

    Das Cross-Origin-Ladeverhalten für andere [Anforderungsmodi](/de/docs/Web/API/Request/mode#cors) ist dasselbe wie für [`require-corp`](#require-corp). Zum Beispiel muss eine im `cors`-Modus angeforderte Cross-Origin-Ressource CORS unterstützen (und von CORS erlaubt werden).

Der `<parameter>` ist optional und kann sein:

- `report-to <endpoint_name>` {{optional_inline}}
  - : Der `<endpoint_name>` ist der Name des Endpunkts, an den Richtlinienverstöße gesendet werden. Die Zuordnung zwischen dem Namen und einem bestimmten Endpunkt wird separat im {{httpheader("Reporting-Endpoints")}}-HTTP-Header definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [`COEPViolationReport`](/de/docs/Web/API/COEPViolationReport)
- [Reporting-API](/de/docs/Web/API/Reporting_API)
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ auf web.dev (2020)
- [COOP und COEP erklärt: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
