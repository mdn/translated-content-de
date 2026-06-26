---
title: Link header
short-title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP **`Link`**-Header bietet eine Möglichkeit, ein oder mehrere Links in HTTP-Headern zu serialisieren. Dies ermöglicht dem Server, einen Client auf eine andere Ressource mit Metadaten zur angeforderten Ressource hinzuweisen. Dieser Header hat die gleichen Semantiken wie das HTML {{HTMLElement("link")}} Element. Ein Vorteil der Verwendung des `Link`-Headers ist, dass der Browser vorab Ressourcen vorverbindet oder vorlädt, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel` Link-Typen](/de/docs/Web/HTML/Reference/Attributes/rel) keine Auswirkungen, wenn sie mit dem HTTP-Header verwendet werden. Zum Beispiel funktioniert die `icon`-Relation nur in HTML, und `stylesheet` funktioniert nicht zuverlässig in allen Browsern (nur in Firefox). Die einzigen Relationen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

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
  - : Die URI-Referenz muss zwischen `<` und `>` eingeschlossen sein und {{Glossary("Percent-encoding", "prozentcodiert")}} werden.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt werden und den Attributen des {{HTMLElement("link")}} Elements entsprechen. Werte können sowohl in Anführungszeichen als auch ohne angegeben werden, basierend auf den [Feldwert-Komponentenregeln](https://www.rfc-editor.org/info/rfc7230/#section-3.2.6), sodass `x=y` gleichbedeutend mit `x="y"` ist.

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

Die URI (absolut oder relativ) muss Zeichen über 255 {{Glossary("Percent-encoding", "prozentcodieren")}}:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Mehrere Links angeben

Sie können mehrere Links durch Kommas getrennt angeben, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### Paginierung durch Links

Der `Link`-Header kann einem Client Paginierungsinformationen bereitstellen, die häufig zur programmgesteuerten Ressourcenzugrif verwendet werden:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` die Link-Relationen für vorige und nächste Seiten, und es gibt `rel="last"` und `rel="first"` Parameter, die erste und letzte Seiten der Suchergebnisse bereitstellen.

### Abrufpriorität steuern

Selbst wenn [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwendet wird, um eine Ressource so früh wie möglich abzurufen, werden verschiedene Arten von Inhalten basierend auf der internen Priorisierung des Browsers früher oder später geladen. Das Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) kann verwendet werden, um dem Browser zu signalisieren, dass eine bestimmte Ressource eine größere oder geringere relative Auswirkung auf die Benutzererfahrung haben wird als andere Ressourcen desselben Typs.

Zum Beispiel könnte der unten stehende Header verwendet werden, um `style.css` mit einer höheren Priorität als andere Stylesheets vorzuladen:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung für den Abruf von Ressourcen als auch die Wirkung der `fetchpriority`-Anweisung von Browsern abhängt. Die `fetchpriority`-Anweisung sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht ableiten kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link-Relationen](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Optimieren der Ressourcenl-adevorgänge mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
