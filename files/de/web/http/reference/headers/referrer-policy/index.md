---
title: Referrer-Policy header
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: 8f99a7133a3cedb9c615091c31b9c77939899ec8
---

Der HTTP **`Referrer-Policy`** {{Glossary("response_header", "Antwortheader")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}} Header) mit Anfragen einbezogen werden sollen. Abgesehen vom HTTP-Header können Sie [diese Richtlinie in HTML festlegen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Forbidden-Anforderungsheader")}}</th>
      <td>Nein</td>
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
> Der Header-Name {{HTTPHeader("Referer")}} ist eine falsche Schreibweise des Wortes „Referrer“. Der `Referrer-Policy`-Header teilt diese falsche Schreibweise nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird ausgelassen: gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "origin")}}, Pfad und die Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder verbessert wird (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen zu weniger sicheren Zielen (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "origin")}} im {{HTTPHeader("Referer")}}-Header.
    Zum Beispiel sendet ein Dokument unter `https://example.com/page.html` den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Bei einer {{Glossary("Same-origin_policy", "same-origin")}} Anfrage senden Sie den {{Glossary("origin", "origin")}}, Pfad und die Abfragezeichenfolge. Senden Sie nur den origin für Cross-Origin-Anfragen und Anfragen zu weniger sicheren Zielen (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "origin")}}, Pfad und die Abfragezeichenfolge für {{Glossary("Same-origin_policy", "same-origin")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur den origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht zu weniger sicheren Zielen (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Senden Sie den origin, Pfad und die Abfragezeichenfolge, wenn Sie eine same-origin-Anfrage ausführen. Für Cross-Origin-Anfragen senden Sie nur den origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht zu weniger sicheren Zielen (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder wenn der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Früher war der Standard `no-referrer-when-downgrade`.

- `unsafe-url`
  - : Senden Sie den origin, Pfad und die Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie leakt möglicherweise private Informationen aus HTTPS-Ressourcen-URLs an unsichere Ursprünge. Erwägen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können auch Referrer-Richtlinien innerhalb von HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das Attribut `referrerpolicy` auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}} oder {{HTMLElement("link")}} Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen zu festlegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie ein `noreferrer` [link relation](/de/docs/Web/HTML/Reference/Attributes/rel) auf `a`, `area` oder `link` Elementen festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben zu sehen, wird die `noreferrer`-Linkbeziehung ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, sollte es _mit_ Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy` HTTP-Header auf der Antwort des CSS-Stylesheets überschrieben.
- Für {{HTMLElement("style")}}-Elemente oder [`style` attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Besitzerdokuments verwendet.

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

### Festlegen einer Fallback-Richtlinie

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie keine breite Browser-Kompatibilität hat, verwenden Sie eine durch Kommata getrennte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In dem obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die Richtlinie `strict-origin-when-cross-origin` nicht unterstützt.

> [!NOTE]
> Das Angeben mehrerer Werte wird nur im `Referrer-Policy` HTTP-Header unterstützt, nicht im `referrerpolicy` Attribut.

## Browserspezifische Einstellungen

### Firefox-Einstellungen

Sie können die _Standard_-Referrer-Richtlinie in Firefox-Einstellungen konfigurieren. Die Namen der Einstellungen sind versionsspezifisch:

- Firefox Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen akzeptieren denselben Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- Beim Verwenden von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-origin Policy](/de/docs/Web/Security/Same-origin_policy)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
