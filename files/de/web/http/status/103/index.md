---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Die HTTP **`103 Early Hints`** [informational response](/de/docs/Web/HTTP/Status#information_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet, mit Hinweisen zu den Seiten und Ressourcen, auf die die endgültige Antwort des Servers verweisen wird. Dadurch kann ein Browser zu Websites [vorverbinden](/de/docs/Web/HTML/Attributes/rel/preconnect) oder Ressourcen [vorladen](/de/docs/Web/HTML/Attributes/rel/preload), noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat. Vorab geladene Ressourcen, die durch frühe Hinweise angezeigt werden, werden vom Client abgerufen, sobald die Hinweise empfangen werden.

Die frühe Hint-Antwort ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, der auf die zu ladenden Ressourcen hinweist. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP)-Header enthalten, der bei der Verarbeitung des frühen Hinweises durchgesetzt wird.

Ein Server könnte mehrere `103`-Antworten senden, beispielsweise nach einer Umleitung. Browser verarbeiten nur die erste frühe Hint-Antwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer unternehmensübergreifenden Umleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden]((https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, der Client kann Informational Responses korrekt verarbeiten.
>
> Die meisten Browser beschränken die Unterstützung aus diesem Grund auf HTTP/2 oder später. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten. Trotzdem verwenden die untenstehenden Beispiele die übliche HTTP/1.1-Notation.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Vorverbindungsbeispiel

Die folgende `103`-frühe Hint-Antwort zeigt eine frühe Hint-Antwort, bei der der Server angibt, dass der Client möglicherweise zu einem bestimmten Ursprung (`https://cdn.example.com`) vorverbinden möchte. Wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite voraussichtlich Ressourcen vom Ursprung der Zielressource benötigt, und dass der Browser die Benutzererfahrung verbessern kann, indem er präventiv eine Verbindung zu diesem Ursprung initiiert.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel verbindet sich zweimal vorwärts mit `https://cdn.example.com`:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet, die ohne CORS abgerufen werden können, wie Bilder.
- Die zweite Verbindung umfasst das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen verwendet, wie Schriftarten.

CORS-geschützte Ressourcen müssen über eine komplett separate Verbindung abgerufen werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie nur einmal vorverbinden.

Anschließend sendet der Server die endgültige Antwort. Diese umfasst ein `crossorigin` Schriftart-Preload und ein `<img>`, das vom zusätzlichen Ursprung geladen wird.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### Vorladebeispiel

Die folgende `103`-frühe Hint-Antwort weist darauf hin, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Diese enthält einen Link zu dem Stylesheet, das möglicherweise bereits aus dem frühen Hinweis vorgeladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühe Hint-Antwort mit CSP

Das folgende Beispiel zeigt die gleiche frühe Hint-Antwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf denselben Ursprung wie die Anfrage. Das Stylesheet wird vorgeladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt. Das Stylesheet wurde bereits vorgeladen, wird jedoch nicht verwendet, wenn die Seite gerendert wird.

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
