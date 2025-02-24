---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Referrer-Policy`**-{{Glossary("response_header", "Antwort-Header")}} steuert, wie viele [Referenzinformationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) mit Anfragen enthalten sein sollen.
Neben dem HTTP-Header können Sie [diese Richtlinie in HTML festlegen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
> Der Header-Name {{HTTPHeader("Referer")}} ist ein Schreibfehler des Wortes "referrer". Der `Referrer-Policy`-Header teilt diesen Fehler nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird weggelassen: Gesendete Anfragen enthalten keine Referenzinformationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "Ursprung")}}, den Pfad und die Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder verbessert wird (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "Ursprung")}} im {{HTTPHeader("Referer")}}-Header.
    Ein Dokument unter `https://example.com/page.html` sendet beispielsweise die Referenz `https://example.com/`.
- `origin-when-cross-origin`
  - : Beim Ausführen einer {{Glossary("Same-origin_policy", "gleichherkunftsbezogenen")}} Anfrage mit demselben Protokollebene (HTTP→HTTP, HTTPS→HTTPS) senden Sie den {{Glossary("origin", "Ursprung")}}, Pfad und die Abfragezeichenfolge. Senden Sie nur den Ursprung für Cross-Origin-Anfragen und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "Ursprung")}}, Pfad und die Abfragezeichenfolge für {{Glossary("Same-origin_policy", "gleichherkunftsbezogene")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Senden Sie den Ursprung, Pfad und die Abfragezeichenfolge bei einer gleichherkunftsbezogenen Anfrage. Bei Cross-Origin-Anfragen senden Sie den Ursprung (nur), wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder der bereitgestellte Wert ungültig ist (siehe Spezifikationsüberarbeitung [November 2020](https://github.com/whatwg/fetch/pull/1066)). Zuvor war der Standard `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Senden Sie den Ursprung, Pfad und die Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell private Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge weitergeben. Berücksichtigen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können auch Referrer-Richtlinien innerhalb von HTML festlegen. Beispielsweise können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut an {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}} oder {{HTMLElement("link")}}-Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie ein `noreferrer`-[Linkrelation](/de/docs/Web/HTML/Attributes/rel) auf ein `a`, `area` oder `link`-Elementen setzen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben zu sehen ist, wird die `noreferrer`-Linkrelation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, sollte sie _mit_ einem Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert sind. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy`-HTTP-Header auf der Antwort des CSS-Stylesheets überschrieben.
- Bei {{HTMLElement("style")}}-Elementen oder [`style`-Attributen](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des eigenen Dokuments verwendet.

## Beispiele

### `no-referrer`

| Vom Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _irgendwohin_ | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Vom Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _irgendwohin_                   | `http://example.com/page`  |

### `origin`

| Vom Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _irgendwohin_ | `https://example.com/` |

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
| **http**://example.com/page | _irgendwohin_          | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Vom Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _irgendwohin_ | `https://example.com/page?q=123` |

### Angabe einer Fallback-Richtlinie

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht ausreichend von Browsern unterstützt wird, verwenden Sie eine durch Kommas getrennte Liste mit der gewünschten Richtlinie am Ende:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Im obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die Policy `strict-origin-when-cross-origin` nicht unterstützt.

> [!NOTE]
> Das Angeben mehrerer Werte wird nur im `Referrer-Policy`-HTTP-Header unterstützt und nicht im `referrerpolicy`-Attribut.

## Browser-spezifische Einstellungen/Präferenzen

### Firefox-Einstellungen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox Version 59 und höher: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen akzeptieren denselben Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- Bei Verwendung von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Gleichherkunftsrichtlinie](/de/docs/Web/Security/Same-origin_policy)
- [HTTP-Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Sicherheitsblog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
