---
title: Referrer-Policy header
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: 4db27688840b67e416373ea571d9e3a17bafa92d
---

Der HTTP **`Referrer-Policy`** {{Glossary("response_header", "Response-Header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) mit Anfragen eingeschlossen werden sollten. Neben dem HTTP-Header können Sie [diese Richtlinie in HTML setzen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
> Der Header-Name {{HTTPHeader("Referer")}} enthält einen Schreibfehler des Wortes "referrer". Der `Referrer-Policy`-Header teilt diesen Schreibfehler nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird weggelassen: gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "Origin")}}, Pfad und Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn die Sicherheitsstufe des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "Origin")}} im {{HTTPHeader("Referer")}}-Header. Zum Beispiel sendet ein Dokument unter `https://example.com/page.html` den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Bei einer {{Glossary("Same-origin_policy", "same-origin")}}-Anfrage senden Sie den {{Glossary("origin", "Origin")}}, Pfad und Abfragezeichenfolge. Senden Sie nur den Origin für Cross-Origin-Anfragen und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "Origin")}}, Pfad und Abfragezeichenfolge für {{Glossary("Same-origin_policy", "same-origin")}}-Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur den Origin, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Senden Sie den Origin, Pfad und Abfragezeichenfolge bei einer gleichen Ursprungsanfrage. Für Cross-Origin-Anfragen senden Sie nur den Origin, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Vorher war die Standardrichtlinie `no-referrer-when-downgrade`.

- `unsafe-url`
  - : Senden Sie den Origin, Pfad und Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann möglicherweise-private Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge weitergeben. Überlegen Sie sich sorgfältig die Auswirkungen dieser Einstellung.

## Effekt auf den `Origin`-Header

Die Referrer-Richtlinie beeinflusst auch, ob der User-Agent den {{HTTPHeader("Origin")}}-Header mit dem Ursprungswert der Anfrage oder als `null` setzt (sowie den {{HTTPHeader("Referer")}}-Header).

Anfragen, die `GET` oder `HEAD` verwenden, oder im `cors`, `websocket`, oder `webtransport` [Modus](/de/docs/Web/API/Request/mode) getätigt werden, sind niemals betroffen: Wenn der User-Agent für sie überhaupt einen `Origin`-Header sendet, sendet er unabhängig von der Referrer-Richtlinie den Ursprungswert der Anfrage.

Für andere Anfragen — wie HTML Formulareinreichungen oder `fetch()`-Aufrufe mit `mode: "same-origin"` oder `"no-cors"` — setzt der User-Agent den `Origin` auf `null`, wenn die Referrer-Richtlinie lautet:

- `no-referrer`.
- `no-referrer-when-downgrade`, `strict-origin`, oder `strict-origin-when-cross-origin`, und die Anfrage von einem `https`-Ursprung zu einer URL geht, die nicht `https` ist.
- `same-origin`, und die Anfrage ist Cross-Origin.

Jeder andere Richtlinienwert lässt den `Origin`-Header auf den Ursprungswert der Anfrage gesetzt.

> [!NOTE]
> Da `fetch()` standardmäßig `mode: "cors"` verwendet, sendet ein gleichwertiger Ursprungs-`fetch()`-`POST` immer seinen tatsächlichen `Origin`, selbst unter `Referrer-Policy: no-referrer`. Das Null-`Origin`-Verhalten oben gilt daher hauptsächlich für Anfragen im `navigate`-Modus, wie HTML-Formulareinreichungen, statt für `fetch()`-Aufrufe.

## Integration mit HTML

Sie können auch Referrer-Richtlinien im HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut bei {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, oder {{HTMLElement("link")}}-Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer`-[Linkrelation](/de/docs/Web/HTML/Reference/Attributes/rel) an ein `a`, `area`, oder `link`-Element setzen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben zu sehen ist, wird die `noreferrer`-Linkrelation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, sollte sie _mit_ einem Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy`-HTTP-Header in der Antwort des CSS-Stylesheets überschrieben.
- Für {{HTMLElement("style")}}-Elemente oder [`style`-Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des übergeordneten Dokuments verwendet.

## Beispiele

### `no-referrer`

| Aus Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _irgendwohin_ | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Aus Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _irgendwohin_                   | `http://example.com/page`  |

### `origin`

| Aus Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _irgendwohin_ | `https://example.com/` |

### `origin-when-cross-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _(kein Referrer)_          |

### `strict-origin`

| Aus Dokument                | Navigation zu          | Verwendeter Referrer   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _(kein Referrer)_      |
| **http**://example.com/page | _irgendwohin_          | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Aus Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _irgendwohin_ | `https://example.com/page?q=123` |

### Eine Fallback-Politik angeben

Wenn Sie eine Fallback-Politik angeben möchten, falls die gewünschte Richtlinie nicht breit genug von Browsern unterstützt wird, verwenden Sie eine durch Kommas getrennte Liste mit der gewünschten Richtlinie als Letztes:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In diesem Szenario wird `no-referrer` nur verwendet, wenn der Browser die `strict-origin-when-cross-origin`-Richtlinie nicht unterstützt.

> [!NOTE]
> Das Angeben mehrerer Werte wird nur im `Referrer-Policy`-HTTP-Header unterstützt, nicht im `referrerpolicy`-Attribut.

## Browserspezifische Einstellungen

### Firefox-Einstellungen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen nehmen denselben Satz von Werten an: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)
- Bei der Verwendung von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
