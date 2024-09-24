---
title: 103 Frühzeitige Hinweise
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`103 Frühzeitige Hinweise`** [informative Antwort](/de/docs/Web/HTTP/Status#information_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet. Dies bietet Hinweise auf die Seiten und Ressourcen, die der Server voraussichtlich in der endgültigen Antwort verlinken wird. Dies ermöglicht es einem Browser, Verbindungen zu Seiten [vorzeitig aufzubauen](/de/docs/Web/HTML/Attributes/rel/preconnect) oder Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat. Die vom Client vorzeitig geladenen Ressourcen werden abgerufen, sobald die Hinweise empfangen werden.

Die frühzeitige Hinweisantwort ist hauptsächlich für die Verwendung mit dem {{HTTPHeader("Link")}} Header vorgesehen, der auf die zu ladenden Ressourcen hinweist. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP) Header enthalten, der beim Verarbeiten des frühen Hinweises durchgesetzt wird.

Ein Server könnte mehrere `103`-Antworten senden, beispielsweise nach einer Weiterleitung. Browser verarbeiten nur die erste frühzeitige Hinweisantwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer Weiterleitung über verschiedene Ursprünge führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP-`103`-Antworten nur über HTTP/2 oder höher zu senden]((https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client informative Antworten korrekt verarbeiten kann.
>
> Die meisten Browser beschränken die Unterstützung aus diesem Grund auf HTTP/2 oder höher. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten. Trotzdem verwenden die untenstehenden Beispiele die Notation im Stil von HTTP/1.1 gemäß der üblichen Konvention.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Preconnect-Beispiel

Die folgende `103`-Antwort mit frühzeitigem Hinweis zeigt eine Antwort, bei der der Server angibt, dass der Client möglicherweise eine Verbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) aufbauen möchte. Genau wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt, und dass der Browser die Benutzererfahrung verbessern kann, indem er vorzeitig eine Verbindung zu diesem Ursprung herstellt.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel stellt zweimal eine Verbindung zu `https://cdn.example.com` her:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet werden, die ohne CORS abgerufen werden können, wie z.B. Bilder.
- Die zweite Verbindung enthält das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen verwendet, wie z.B. Schriften.

CORS-geschützte Ressourcen müssen über eine völlig separate Verbindung abgerufen werden. Wenn Sie nur einen Ressourcentyp von einem Ursprung benötigen, müssen Sie nur einmal eine Verbindung herstellen.

Anschließend sendet der Server die endgültige Antwort. Diese enthält ein Preload für Schriften mit crossorigin und ein `<img>`, das aus dem zusätzlichen Ursprung geladen wird.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/myfont.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### Preload-Beispiel

Die folgende `103`-Antwort mit frühzeitigem Hinweis zeigt, dass ein Stylesheet `style.css` in der endgültigen Antwort benötigt werden könnte.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Diese enthält einen Link zum Stylesheet, der möglicherweise bereits aus dem frühzeitigen Hinweis vorab geladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Antwort mit frühzeitigem Hinweis und CSP

Das folgende Beispiel zeigt dieselbe Antwort mit frühzeitigem Hinweis, jedoch mit einem enthaltenen `Content-Security-Policy` Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf den gleichen Ursprung wie die Anfrage. Das Stylesheet wird vorab geladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt. Das Stylesheet wurde bereits vorab geladen, wird jedoch nicht verwendet, wenn die Seite gerendert wird.

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Link")}}
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect) ({{htmlelement("link")}} Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) ({{htmlelement("link")}} Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) vom CloudFlare Blog
