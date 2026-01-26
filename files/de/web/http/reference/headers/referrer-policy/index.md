---
title: Referrer-Policy header
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Der HTTP **`Referrer-Policy`** {{Glossary("response_header", "Antwort-Header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) mit Anfragen aufgenommen werden sollen.
Neben dem HTTP-Header können Sie [diese Richtlinie im HTML festlegen](#integration_mit_html).

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
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

> [!NOTE]
> Der Header-Name {{HTTPHeader("Referer")}} ist eine fehlerhafte Schreibweise des Wortes "Referrer". Der `Referrer-Policy`-Header teilt diesen Schreibfehler nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird ausgelassen: Gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "Ursprung")}}, den Pfad und die Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "Ursprung")}} im {{HTTPHeader("Referer")}}-Header.
    Zum Beispiel wird ein Dokument unter `https://example.com/page.html` den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Bei einer {{Glossary("Same-origin_policy", "gleicher Herkunft")}} Anfrage senden Sie den {{Glossary("origin", "Ursprung")}}, den Pfad und die Abfragezeichenfolge. Senden Sie nur den Ursprung für Anfragen über verschiedene Ursprünge und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "Ursprung")}}, den Pfad und die Abfragezeichenfolge für {{Glossary("Same-origin_policy", "gleicher Herkunft")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen über verschiedene Ursprünge.
- `strict-origin`
  - : Senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Senden Sie den Ursprung, den Pfad und die Abfragezeichenfolge bei einer Anfrage gleicher Herkunft. Für Anfragen über verschiedene Ursprünge senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder wenn der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Zuvor war die Standardeinstellung `no-referrer-when-downgrade`.

- `unsafe-url`
  - : Senden Sie den Ursprung, den Pfad und die Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell private Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge weitergeben. Überdenken Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können auch Referrer-Richtlinien innerhalb von HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [Namen](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, oder {{HTMLElement("link")}} Elementen angeben, um Referrer-Richtlinien für individuelle Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer` [Link-Relation](/de/docs/Web/HTML/Reference/Attributes/rel) auf `a`, `area` oder `link` Elementen festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben gezeigt, wird die `noreferrer`-Link-Relation ohne ein Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}} Element festlegen, sollte sie _mit_ einem Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy` HTTP-Header in der Antwort des CSS-Stylesheets überschrieben.
- Für {{HTMLElement("style")}} Elemente oder [`style` Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Eigentümerdokuments verwendet.

## Beispiele

### `no-referrer`

| Vom Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _überall_     | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Vom Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _überall_                       | `http://example.com/page`  |

### `origin`

| Vom Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _überall_     | `https://example.com/` |

### `origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _(kein Referrer)_          |

### `strict-origin`

| Vom Dokument                | Navigation zu          | Verwendeter Referrer   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _(kein Referrer)_      |
| **http**://example.com/page | _überall_              | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Vom Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _überall_     | `https://example.com/page?q=123` |

### Eine Fallback-Richtlinie angeben

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht ausreichend von Browsern unterstützt wird, verwenden Sie eine kommagetrennte Liste mit der gewünschten Richtlinie zuletzt angegeben:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In dem obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die Richtlinie `strict-origin-when-cross-origin` nicht unterstützt.

> [!NOTE]
> Mehrere Werte anzugeben, wird nur im `Referrer-Policy` HTTP-Header unterstützt, nicht im `referrerpolicy` Attribut.

## Browser-spezifische Präferenzen/Einstellungen

### Firefox-Präferenzen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Präferenzen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen nehmen den gleichen Satz von Werten an: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Security > Referrer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)
- Bei Verwendung von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [HTTP Referrer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
