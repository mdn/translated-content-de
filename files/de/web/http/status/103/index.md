---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

Der HTTP **`103 Early Hints`** [informative Antwort](/de/docs/Web/HTTP/Status#information_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet. Er enthält Hinweise zu den Websites und Ressourcen, auf die die endgültige Antwort des Servers voraussichtlich verweisen wird. Dies ermöglicht es einem Browser, schon vor der endgültigen Antwort des Servers [Preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect) zu Websites herzustellen oder mit dem [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen zu beginnen. Vom Client frühzeitig geladene Ressourcen werden sofort abgerufen, sobald die Hinweise empfangen werden.

Die frühe Hinweis-Antwort ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header gedacht, der die zu ladenden Ressourcen angibt. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP)-Header enthalten, der beim Verarbeiten des frühen Hinweises durchgesetzt wird.

Ein Server könnte mehrere `103`-Antworten senden, zum Beispiel im Anschluss an eine Umleitung. Browser verarbeiten nur die erste frühe Hinweis-Antwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer Cross-Origin-Umleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client informative Antworten korrekt behandelt.
>
> Die meisten Browser beschränken die Unterstützung aus diesen Gründen auf HTTP/2 oder später. Siehe unten zur [Browser-Kompatibilität](#browser-kompatibilität).
> Trotzdem verwenden die folgenden Beispiele aus konventionellen Gründen die HTTP/1.1-Stilnotation.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Preconnect-Beispiel

Die folgende `103`-Frühhinweisantwort zeigt eine frühe Hinweisantwort, bei der der Server anzeigt, dass der Client eine Verbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) vorab herstellen möchte. Genau wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt und dass der Browser die Benutzererfahrung verbessern kann, indem er präventiv eine Verbindung zu diesem Ursprung herstellt.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel stellt zweimal eine Verbindung zu `https://cdn.example.com` her:

- Die erste Verbindung würde verwendet werden, um Ressourcen zu laden, die ohne CORS abgerufen werden können, wie z.B. Bilder.
- Die zweite Verbindung umfasst das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen, wie z.B. Schriftarten, verwendet.

CORS-geschützte Ressourcen müssen über eine vollständig separate Verbindung abgerufen werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie auch nur einmal vorab verbinden.

Anschließend sendet der Server die endgültige Antwort. Diese umfasst ein crossorigin-Schriftarten-Preload und ein `<img>`, das von dem zusätzlichen Ursprung geladen wird.

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

Die folgende `103`-Frühhinweisantwort zeigt ein Stylesheet `style.css`, das möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Diese beinhaltet einen Link zum Stylesheet, das möglicherweise schon vom frühen Hinweis geladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühhinweisantwort mit CSP

Das folgende Beispiel zeigt die gleiche frühe Hinweisantwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Preloading auf denselben Ursprung wie die Anfrage. Das Stylesheet wird geladen, wenn der Ursprung übereinstimmt.

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
- [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect) ({{htmlelement("link")}}-Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) ({{htmlelement("link")}}-Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) vom CloudFlare-Blog
