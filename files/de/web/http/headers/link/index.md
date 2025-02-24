---
title: Link
slug: Web/HTTP/Headers/Link
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Link`**-Header bietet eine Möglichkeit, eine oder mehrere Links in HTTP-Headern zu serialisieren. Dadurch kann der Server den Client auf eine andere Ressource verweisen, die Metadaten über die angeforderte Ressource enthält. Dieser Header hat die gleichen Semantiken wie das HTML-Element {{HTMLElement("link")}}. Ein Vorteil der Verwendung des `Link`-Headers besteht darin, dass der Browser Ressourcen vorab verbinden oder vorab laden kann, noch bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Link-Typen](/de/docs/Web/HTML/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden. Zum Beispiel funktioniert die `icon`-Beziehung nur in HTML, und `stylesheet` funktioniert nicht zuverlässig in allen Browsern (nur in Firefox). Die einzigen Beziehungen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Antwort-Header")}}
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
  - : Die URI-Referenz muss zwischen `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "prozentcodiert")}} sein.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen. Werte können basierend auf den [Regeln für Feldwert-Komponenten](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6) entweder in Anführungszeichen oder nicht in Anführungszeichen gesetzt werden, sodass `x=y` gleichwertig ist zu `x="y"`.

## Beispiele

### URLs in spitze Klammern einschließen

Die URI (absolut oder relativ) muss zwischen `<` und `>` eingeschlossen sein:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs kodieren

Die URI (absolut oder relativ) muss Zeichen mit einem Wert größer als 255 {{Glossary("Percent-encoding", "prozentcodieren")}}:

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

Der `Link`-Header kann Paginierungsinformationen an einen Client übermitteln, was häufig verwendet wird, um Ressourcen programmatisch zuzugreifen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` die Link-Relationen für vorherige und nächste Seiten, und es gibt `rel="last"` und `rel="first"` Parameter, die die erste und letzte Seite der Suchergebnisse angeben.

### Abrufpriorität steuern

Selbst beim Verwenden von [`preload`](/de/docs/Web/HTML/Attributes/rel/preload), um eine Ressource so früh wie möglich abzurufen, werden unterschiedliche Arten von Inhalten basierend auf der internen Priorisierung des Browsers früher oder später abgerufen. Das Attribut [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority) kann verwendet werden, um dem Browser anzudeuten, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung haben wird als andere Ressourcen desselben Typs.

Zum Beispiel könnte der folgende Header verwendet werden, um `style.css` mit einer höheren Priorität als andere Stylesheets vorab zu laden:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung für das Abrufen von Ressourcen als auch die Wirkung der `fetchpriority`-Richtlinie vom Browser abhängen. Die `fetchpriority`-Richtlinie sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht ableiten kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link-Relationen](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Optimieren der Ressourcenladegeschwindigkeit mit der Fetch-Priority-API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen über die Auswirkungen dieser API auf Prioritäten in Chrome.
