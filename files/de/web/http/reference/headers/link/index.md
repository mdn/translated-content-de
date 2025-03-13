---
title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Link`**-Header bietet eine Möglichkeit, ein oder mehrere Links in HTTP-Headern zu serialisieren. Dies ermöglicht es dem Server, einen Client auf eine andere Ressource hinzuweisen, die Metadaten über die angeforderte Ressource enthält. Dieser Header hat die gleichen Semantiken wie das HTML-Element {{HTMLElement("link")}}. Ein Vorteil der Verwendung des `Link`-Headers ist, dass der Browser mit dem Vorverbindungsaufbau oder dem Vorladen von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Link-Typen](/de/docs/Web/HTML/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden. Zum Beispiel funktioniert die `icon`-Relation nur in HTML, und `stylesheet` funktioniert nicht zuverlässig über verschiedene Browser hinweg (nur in Firefox). Die einzigen Relationen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-Whitelist-Antwort-Header")}}
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

Der Link-Header enthält Parameter, die mit `;` getrennt werden und den Attributen des {{HTMLElement("link")}}-Elements entsprechen. Werte können sowohl in Anführungszeichen als auch ohne Anführungszeichen sein, basierend auf [Regeln für Feldwertkomponenten](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6), so dass `x=y` äquivalent zu `x="y"` ist.

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

Die URI (absolut oder relativ) muss Zeichenkodierungen größer als 255 {{Glossary("Percent-encoding", "prozentcodieren")}}:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Mehrere Links angeben

Es können mehrere Links angegeben werden, die durch Kommas getrennt sind, zum Beispiel:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### Paginierung durch Links

Der `Link`-Header kann Paginierungsinformationen für einen Client bereitstellen, die häufig dazu verwendet werden, Ressourcen programmgesteuert zuzugreifen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` Link-Relationen für vorherige und nächste Seiten an, und es gibt `rel="last"` und `rel="first"`-Parameter, die erste und letzte Seiten von Suchergebnissen bereitstellen.

### Abrufpriorität steuern

Auch bei der Verwendung von [`preload`](/de/docs/Web/HTML/Attributes/rel/preload), um eine Ressource so früh wie möglich abzurufen, werden verschiedene Arten von Inhalten früher oder später basierend auf der internen Priorisierung des Browsers abgerufen. Das [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority)-Attribut kann verwendet werden, um dem Browser anzudeuten, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf die Benutzererfahrung haben wird als andere Ressourcen desselben Typs.

Zum Beispiel könnte der unten stehende Header verwendet werden, um `style.css` mit einer höheren Priorität als andere Stylesheets vorzuladen:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung zum Abrufen von Ressourcen als auch die Wirkung der `fetchpriority`-Direktive browserabhängig sind. Die `fetchpriority`-Direktive sollte sparsam eingesetzt werden und nur in Fällen, in denen ein Browser nicht ableiten kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link-Relationen](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Optimierung des Ressourcenladens mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API Prioritäten in Chrome beeinflusst.
