---
title: Link
slug: Web/HTTP/Headers/Link
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP-Header **`Link`** bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren.
Damit kann der Server einem Client auf eine andere Ressource verweisen, die Metadaten über die angeforderte Ressource enthält.
Dieser Header hat die gleichen Semantiken wie das HTML-{{HTMLElement("link")}}-Element.
Ein Vorteil der Verwendung des `Link`-Headers ist, dass der Browser mit dem Präverbinden oder Vorladen von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel` Link-Typen](/de/docs/Web/HTML/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden.
Zum Beispiel funktioniert die `icon`-Beziehung nur in HTML und `stylesheet` funktioniert nicht zuverlässig über alle Browser hinweg (nur in Firefox).
Die einzigen Beziehungen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}, {{Glossary("Request_header", "Request-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Response-Header")}}
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
  - : Die URI-Referenz muss zwischen `<` und `>` eingeschlossen sein und {{Glossary("Percent-encoding", "percent-encoded")}} (prozentkodiert) werden.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen.
Werte können sowohl in Anführungszeichen als auch ohne angegeben werden, basierend auf den [Regeln für Komponentenwerte](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6). So ist `x=y` gleichwertig mit `x="y"`.

## Beispiele

### URLs in spitze Klammern einschließen

Die URI (absolut oder relativ) muss zwischen `<` und `>` eingeschlossen sein:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### Kodierung von URLs

Die URI (absolut oder relativ) muss Zeichen mit Codewerten größer als 255 {{Glossary("Percent-encoding", "percent-encode")}}:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Angabe mehrerer Links

Sie können mehrere Links angeben, die durch Kommas getrennt sind, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### Seitenumbruch über Links

Der `Link`-Header kann einem Client Seitenumbruchs-Informationen bereitstellen, die häufig verwendet werden, um Ressourcen programmatisch zuzugreifen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` Verbindungen zu vorherigen und nächsten Seiten an, und es gibt `rel="last"` und `rel="first"` Parameter, die die erste und letzte Seite der Suchergebnisse bereitstellen.

### Steuerung der Abrufpriorität

Auch wenn [`preload`](/de/docs/Web/HTML/Attributes/rel/preload) verwendet wird, um eine Ressource so früh wie möglich zu laden, wird je nach interner Browser-Priorisierung verschiedener Inhaltstypen früher oder später abgerufen.
Das Attribut [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority) kann verwendet werden, um dem Browser einen Hinweis darauf zu geben, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung haben wird als andere Ressourcen desselben Typs.

Zum Beispiel könnte der untenstehende Header verwendet werden, um `style.css` mit einer höheren Priorität als andere Stylesheets vorzuladend:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung für das Abrufen von Ressourcen als auch der Effekt der `fetchpriority`-Direktive browserabhängig sind.
Die `fetchpriority`-Direktive sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht ableiten kann, dass eine bestimmte Ressource mit anderer Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link-Beziehungen](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Optimieren des Ressourcenladens mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
