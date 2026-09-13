---
title: Referrer-Policy header
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

Der HTTP **`Referrer-Policy`** {{Glossary("response_header", "Antwort-Header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) mit Anfragen eingeschlossen werden sollen.
Zusätzlich zum HTTP-Header können Sie [diese Richtlinie in HTML festlegen](#integration_in_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
> Der Header-Name {{HTTPHeader("Referer")}} ist eine falsche Schreibweise des Wortes "referrer". Der `Referrer-Policy`-Header teilt diese Falschschreibung nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird ausgelassen: gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden der {{Glossary("origin", "Origin")}}, Pfad und Query-String im {{HTTPHeader("Referer")}}-Header, wenn die Sicherheitsstufe des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Es wird nur die {{Glossary("origin", "Origin")}} im {{HTTPHeader("Referer")}}-Header gesendet.
    Beispielsweise sendet ein Dokument auf `https://example.com/page.html` den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Bei einer {{Glossary("Same-origin_policy", "same-origin")}}-Anfrage werden die {{Glossary("origin", "Origin")}}, der Pfad und der Query-String gesendet. Es wird nur die Origin für Cross-Origin-Anfragen und Anfragen an weniger sichere Ziele (HTTPS→HTTP) gesendet.
- `same-origin`
  - : Die {{Glossary("origin", "Origin")}}, der Pfad und der Query-String werden für {{Glossary("Same-origin_policy", "same-origin")}}-Anfragen gesendet. Der {{HTTPHeader("Referer")}}-Header wird für Cross-Origin-Anfragen nicht gesendet.
- `strict-origin`
  - : Es wird nur die Origin gesendet, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)
  - : Die Origin, der Pfad und der Query-String werden bei einer Same-Origin-Anfrage gesendet. Für Cross-Origin-Anfragen senden Sie nur die Origin, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder der angegebene Wert ungültig ist (siehe Spec-Revision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Zuvor war die Standardeinstellung `no-referrer-when-downgrade`.

- `unsafe-url`
  - : Die Origin, der Pfad und der Query-String werden bei jeder Anfrage gesendet, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell private Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge lecken. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Effekt auf den `Origin`-Header

Die Referrer-Policy beeinflusst auch, ob das Benutzeragent den {{HTTPHeader("Origin")}}-Header mit der Origin der Anfrage oder als `null` setzt (sowie den {{HTTPHeader("Referer")}}-Header).

Anfragen mit `GET` oder `HEAD`, oder im `cors`-, `websocket`-, oder `webtransport`-[Modus](/de/docs/Web/API/Request/mode) werden nie beeinflusst: Wenn der Benutzeragent einen `Origin`-Header für sie überhaupt sendet, sendet er die Origin der Anfrage, unabhängig von der Referrer-Policy.

Für andere Anfragen — wie HTML-Formularübermittlungen oder `fetch()`-Aufrufe mit `mode: "same-origin"` oder `"no-cors"` — setzt der Benutzeragent `Origin` auf `null`, wenn die Referrer-Policy ist:

- `no-referrer`.
- `no-referrer-when-downgrade`, `strict-origin` oder `strict-origin-when-cross-origin`, und die Anfrage von einer `https`-Origin zu einer URL erfolgt, die nicht `https` ist.
- `same-origin`, und die Anfrage ist Cross-Origin.

Jeder andere Richtlinienwert lässt den `Origin`-Header auf der Origin der Anfrage.

> [!NOTE]
> Da `fetch()` standardmäßig `mode: "cors"` verwendet, sendet ein Same-Origin-`fetch()`-`POST` immer seinen tatsächlichen `Origin`, selbst unter `Referrer-Policy: no-referrer`. Das oben beschriebene Verhalten mit `null-Origin` gilt daher hauptsächlich für `navigate`-Modus-Anfragen, wie HTML-Formularübermittlungen, und nicht für `fetch()`-Aufrufe.

## Integration in HTML

Sie können auch Referrer-Richtlinien im HTML festlegen. Beispielsweise können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut bei {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}} oder {{HTMLElement("link")}}-Elementen angeben, um Referrer-Richtlinien für individuelle Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer`-[Linkrelation](/de/docs/Web/HTML/Reference/Attributes/rel) bei einem `a`-, `area`- oder `link`-Elementen festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben gezeigt, wird die `noreferrer`-Linkrelation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, sollte sie _mit_ einem Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration in CSS

CSS kann Ressourcen laden, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy`-HTTP-Header in der Antwort des CSS-Stylesheets überschrieben.
- Für {{HTMLElement("style")}}-Elemente oder [`style`-Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des owning Dokuments verwendet.

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

### Festlegen einer Ersatzrichtlinie

Wenn Sie eine Ersatzrichtlinie angeben möchten, falls die gewünschte Richtlinie nicht weit genug vom Browser unterstützt wird, verwenden Sie eine durch Komma getrennte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In dem obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die `strict-origin-when-cross-origin`-Richtlinie nicht unterstützt.

> [!NOTE]
> Das Spezifizieren mehrerer Werte wird nur im `Referrer-Policy`-HTTP-Header unterstützt und nicht im `referrerpolicy`-Attribut.

## Browserspezifische Vorlieben/Einstellungen

### Firefox-Einstellungen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox-Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox-Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen nehmen den gleichen Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)
- Beim Verwenden von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [HTTP Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
