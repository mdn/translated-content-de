---
title: Link header
short-title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-Header **`Link`** bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren.
Dadurch kann der Server einen Client auf eine andere Ressource verweisen, die Metadaten über die angeforderte Ressource enthält.
Dieser Header hat dieselbe Semantik wie das HTML-Element {{HTMLElement("link")}}.
Ein Vorteil der Verwendung des `Link`-Headers besteht darin, dass der Browser mit dem Preconnecting oder Preloading von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Link-Typen](/de/docs/Web/HTML/Reference/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden.
Beispielsweise funktioniert die `icon`-Beziehung nur in HTML, und `stylesheet` funktioniert nicht zuverlässig browserübergreifend (nur in Firefox).
Die einzigen Beziehungen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Request_header", "Request-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : Die URI-Referenz muss zwischen `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "prozentkodiert")}} sein.

### Parameter

Der Link-Header enthält Parameter, die durch `;` getrennt sind und Attributen des Elements {{HTMLElement("link")}} entsprechen.
Werte können gemäß den [Regeln für Feldwertkomponenten](https://www.rfc-editor.org/info/rfc7230/#section-3.2.6) sowohl in Anführungszeichen als auch ohne Anführungszeichen angegeben werden, daher entspricht `x=y` dem Ausdruck `x="y"`.

## Beispiele

### URLs in spitze Klammern einschließen

Die URI (absolut oder relativ) muss zwischen `<` und `>` eingeschlossen werden:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs kodieren

Die URI (absolut oder relativ) muss Zeichencodes größer als 255 {{Glossary("Percent-encoding", "prozentkodieren")}}:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Mehrere Links angeben

Sie können mehrere durch Kommas getrennte Links angeben, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### Paginierung über Links

Der `Link`-Header kann einem Client Paginierungsinformationen bereitstellen, die häufig verwendet werden, um programmatisch auf Ressourcen zuzugreifen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` Link-Beziehungen für vorherige und nächste Seiten an, und es gibt die Parameter `rel="last"` und `rel="first"`, die die erste und letzte Seite der Suchergebnisse bereitstellen.

### Abrufpriorität steuern

Auch wenn [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwendet wird, um eine Ressource so früh wie möglich abzurufen, werden unterschiedliche Inhaltstypen basierend auf der internen Priorisierung des Browsers früher oder später abgerufen.
Das Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) kann verwendet werden, um dem Browser mitzuteilen, dass eine bestimmte Ressource im Vergleich zu anderen Ressourcen desselben Typs einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung haben wird.

Beispielsweise könnte der folgende Header verwendet werden, um `style.css` mit einer höheren Priorität als andere Stylesheets vorzuladen:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung beim Abrufen von Ressourcen als auch die Wirkung der Direktive `fetchpriority` browserabhängig sind.
Die Direktive `fetchpriority` sollte sparsam und nur in Fällen verwendet werden, in denen ein Browser nicht ableiten kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- IANA-Register für [Link Relations](https://www.iana.org/assignments/link-relations)
- [Optimieren des Ressourcenladens mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
