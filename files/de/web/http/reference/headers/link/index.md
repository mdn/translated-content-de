---
title: Link header
short-title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Link`**-Header bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern.
Dies ermöglicht es dem Server, einen Client auf eine andere Ressource zu verweisen, die Metadaten über die angeforderte Ressource enthält.
Dieser Header hat dieselbe Semantik wie das HTML-{{HTMLElement("link")}}-Element.
Ein Vorteil der Verwendung des `Link`-Headers ist, dass der Browser mit dem Vorabverbinden oder Vorabladen von Ressourcen beginnen kann, bevor das HTML selbst abgerufen und verarbeitet wird.

In der Praxis haben die meisten [`rel`-Link-Typen](/de/docs/Web/HTML/Reference/Attributes/rel) keine Wirkung, wenn sie mit dem HTTP-Header verwendet werden.
Zum Beispiel funktioniert die `icon`-Relation nur in HTML und `stylesheet` funktioniert nicht zuverlässig über alle Browser hinweg (nur in Firefox).
Die einzigen Relationen, die zuverlässig funktionieren, sind [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) und [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload), die mit {{HTTPStatus(103, "103 Early Hints")}} kombiniert werden können.

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
  - : Der URI-Verweis muss zwischen `<` und `>` eingeschlossen und {{Glossary("Percent-encoding", "prozentkodiert")}} sein.

### Parameter

Der Link-Header enthält Parameter, die mit `;` getrennt sind und den Attributen des {{HTMLElement("link")}}-Elements entsprechen.
Werte können sowohl in Anführungszeichen als auch unzitiert sein, basierend auf den [Regeln für Feldwertkomponenten](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6), sodass `x=y` gleichwertig ist zu `x="y"`.

## Beispiele

### URLs in spitze Klammern einschließen

Der URI (absolut oder relativ) muss zwischen `<` und `>` eingeschlossen sein:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URLs kodieren

Der URI (absolut oder relativ) muss Zeichen mit Codes größer als 255 {{Glossary("Percent-encoding", "prozentkodieren")}}:

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

### Seitennummerierung durch Links

Der `Link`-Header kann einem Client Seitennummerierungsinformationen zur Verfügung stellen, was häufig verwendet wird, um programmgesteuert auf Ressourcen zuzugreifen:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In diesem Fall zeigen `rel="prev"` und `rel="next"` Link-Relationen für vorherige und nächste Seiten, und es gibt `rel="last"` und `rel="first"`-Parameter, die die ersten und letzten Seiten der Suchergebnisse bereitstellen.

### Abrufpriorität steuern

Selbst bei der Verwendung von [`preload`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) zum frühestmöglichen Abrufen einer Ressource werden verschiedene Arten von Inhalten früher oder später basierend auf der internen Priorisierung des Browsers abgerufen.
Das Attribut [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) kann verwendet werden, um dem Browser einen Hinweis zu geben, dass eine bestimmte Ressource einen größeren oder geringeren relativen Einfluss auf das Benutzererlebnis hat als andere Ressourcen desselben Typs.

Zum Beispiel könnte der untenstehende Header verwendet werden, um `style.css` mit einer höheren Priorität als andere Stylesheets vorabzuladen:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Beachten Sie, dass sowohl die interne Priorisierung für den Abruf von Ressourcen als auch die Wirkung der `fetchpriority`-Direktive browserabhängig sind.
Die `fetchpriority`-Direktive sollte sparsam verwendet werden und nur in Fällen, in denen ein Browser nicht ableiten kann, dass eine bestimmte Ressource mit einer anderen Priorität behandelt werden sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link-Relationen](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA-Register
- [Optimieren Sie das Laden von Ressourcen mit der Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) für Informationen darüber, wie diese API die Prioritäten in Chrome beeinflusst.
