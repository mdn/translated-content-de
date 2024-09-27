---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

Der HTTP-**`103 Early Hints`** [informational response](/de/docs/Web/HTTP/Status#information_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet, und enthält Hinweise zu den Sites und Ressourcen, die der Server in der endgültigen Antwort verlinken erwartet. Dies ermöglicht es einem Browser, zu Sites [vorzuverbinden](/de/docs/Web/HTML/Attributes/rel/preconnect) oder mit dem [Vorabladen](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen zu beginnen, noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat. Vom Client geladene Ressourcen, die durch frühe Hinweise angegeben wurden, werden sofort nach Empfang der Hinweise geholt.

Die frühe Hinweis-Antwort ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, der aufzuladende Ressourcen angibt. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP)-Header enthalten, der während der Verarbeitung des frühen Hinweises durchgesetzt wird.

Ein Server kann mehrere `103`-Antworten senden, beispielsweise nach einer Weiterleitung. Browser verarbeiten nur die erste frühe Hinweis-Antwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer grenzüberschreitenden Weiterleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client Informationsantworten korrekt verarbeitet.
>
> Die meisten Browser begrenzen aus diesem Grund die Unterstützung auf HTTP/2 oder später. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten.
> Trotzdem verwenden die untenstehenden Beispiele die übliche Notation im HTTP/1.1-Stil.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Vorverbindungsbeispiel

Die folgende `103`-frühe Hinweismeldung zeigt eine frühe Hinweismeldung, bei der der Server angibt, dass der Client möglicherweise eine Verbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) vorab herstellen möchte. Genau wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt und dass der Browser das Benutzererlebnis verbessern kann, indem er proaktiv eine Verbindung zu diesem Ursprung herstellt.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel verbindet sich zweimal mit `https://cdn.example.com`:

- Die erste Verbindung würde zum Laden von Ressourcen genutzt, die ohne CORS abgerufen werden können, wie z.B. Bilder.
- Die zweite Verbindung beinhaltet das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen, wie Schriftarten, verwendet.

CORS-geschützte Ressourcen müssen über eine völlig separate Verbindung geholt werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie nur einmal vorverbinden.

Anschließend sendet der Server die endgültige Antwort. Diese beinhaltet eine crossorigin-Schriftartenvorabladen und ein `<img>`, das vom zusätzlichen Ursprung geladen wird.

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

### Vorabladen-Beispiel

Die folgende `103`-frühe Hinweismeldung gibt an, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Diese beinhaltet einen Link zum Stylesheet, der möglicherweise bereits vom frühen Hinweis vorabgeladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühe Hinweisantwort mit CSP

Das folgende Beispiel zeigt die gleiche frühe Hinweisantwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorabladen auf den gleichen Ursprung wie die Anfrage. Das Stylesheet wird vorab geladen, wenn der Ursprung übereinstimmt.

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
