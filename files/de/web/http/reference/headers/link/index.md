---
title: Link header
short-title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Link`**-Header ermöglicht die Serialisierung eines oder mehrerer Links in HTTP-Headern. Dadurch kann der Server einen Client auf eine andere Ressource verweisen, die Metadaten über die angeforderte Ressource enthält. Dieser Header hat die gleichen Semantiken wie das HTML {{HTMLElement("link")}}-Element. Ein Vorteil der Verwendung des `Link`-Headers ist, dass der Browser Ressourcen vorab verbinden oder laden kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Linktypen](/de/docs/Web/HTML/Reference/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden. Zum Beispiel funktioniert die `icon`-Relation nur in HTML und `stylesheet` funktioniert nicht zuverlässig in allen Browsern (nur in Firefox). Die einzigen Relationen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Request_header", "Anfrage-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
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
  - : Der URI-Verweis muss in `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "prozentcodiert")}} sein.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen. Werte können entsprechend der [Feldwert-Komponentenregeln](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6) sowohl in Anführungszeichen als auch ohne Anführungszeichen angegeben werden, sodass `x=y` gleichwertig zu `x="y"` ist.

## Beispiele

### URLs in spitze Klammern einschließen

Der URI (absolut oder relativ) muss in `<` und `>` eingeschlossen werden:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs codieren

Der URI (absolut oder relativ) muss über 255 liegende Zeichencodes {{Glossary("Percent-encoding", "prozentcodieren")}}:

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

### Seitennummerierung über Links

Der `Link`-Header kann einem Client Informationen zur Seitennummerierung zur Verfügung stellen, was häufig verwendet wird, um programmatisch auf Ressourcen zuzugreifen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` Linkrelationen für vorherige und nächste Seiten an, und es gibt `rel="last"` und `rel="first"` Parameter, die die erste und letzte Seite der Suchergebnisse bereitstellen.

### Abruffrequenz steuern

Selbst bei Verwendung von [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), um eine Ressource so früh wie möglich abzurufen, werden verschiedene Arten von Inhalten je nach interner Priorisierung des Browsers früher oder später abgerufen. Das Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) kann verwendet werden, um dem Browser einen Hinweis zu geben, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung haben wird als andere Ressourcen desselben Typs.

Zum Beispiel könnte der folgende Header verwendet werden, um `style.css` mit höherer Priorität als andere Stylesheets vorzuladen:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung für das Abrufen von Ressourcen als auch die Wirkung der `fetchpriority`-Anweisung vom Browser abhängen. Die `fetchpriority`-Anweisung sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht erkennen kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Ressourcenladung optimieren mit der Fetch-Priority-API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
