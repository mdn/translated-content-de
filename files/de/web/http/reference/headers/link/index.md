---
title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Link`**-Header bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Dies ermöglicht es dem Server, einen Client auf eine andere Ressource hinzuweisen, die Metadaten über die angeforderte Ressource enthält. Dieser Header hat die gleichen Bedeutungen wie das HTML-{{HTMLElement("link")}}-Element. Ein Vorteil der Verwendung des `Link`-Headers ist, dass der Browser mit dem Vorbereiten oder Vorladen von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Link-Typen](/de/docs/Web/HTML/Reference/Attributes/rel) keine Auswirkungen, wenn sie mit dem HTTP-Header verwendet werden. Zum Beispiel funktioniert die `icon`-Relation nur im HTML, und `stylesheet` funktioniert nicht zuverlässig in allen Browsern (nur in Firefox). Die einzigen Relationen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Request_header", "Request-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-erlaubter Response-Header")}}
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
  - : Die URI-Referenz muss in `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "prozentcodiert")}} sein.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen. Werte können sowohl mit Anführungszeichen versehen als auch ohne diese sein, basierend auf den [Regeln für Feldwertkomponenten](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6), sodass `x=y` gleichbedeutend mit `x="y"` ist.

## Beispiele

### URLs in spitze Klammern einschließen

Die URI (absolut oder relativ) muss in `<` und `>` eingeschlossen werden:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs kodieren

Die URI (absolut oder relativ) muss Zeichen mit Codes größer als 255 {{Glossary("Percent-encoding", "prozentcodieren")}}:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Mehrere Links angeben

Sie können mehrere Links angeben, die durch Kommas getrennt sind, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### Paginierung durch Links

Der `Link`-Header kann einem Client Informationen zur Paginierung bereitstellen, was häufig verwendet wird, um Ressourcen programmatisch zu erreichen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` Link-Relationen für vorherige und nächste Seiten, und es gibt die Parameter `rel="last"` und `rel="first"`, die erste und letzte Seiten der Suchergebnisse bereitstellen.

### Priorität des Ladens steuern

Selbst bei Verwendung von [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), um eine Ressource so früh wie möglich abzurufen, wird unterschiedliche Art von Inhalten basierend auf der internen Priorisierung des Browsers früher oder später abgerufen. Das [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority)-Attribut kann verwendet werden, um dem Browser einen Hinweis darauf zu geben, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung haben wird als andere Ressourcen derselben Art.

Zum Beispiel könnte der nachstehende Header verwendet werden, um `style.css` mit höherer Priorität als andere Stylesheets vorzuladen:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung zum Abrufen von Ressourcen als auch die Wirkung der `fetchpriority`-Direktive vom Browser abhängen. Die `fetchpriority`-Direktive sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht erkennen kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link-Relationen](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Ressourcenladen mit der Fetch Priority API optimieren](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
