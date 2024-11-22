---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{HTTPSidebar}}

Die HTTP **`103 Early Hints`** [informational response](/de/docs/Web/HTTP/Status#informational_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet. Sie enthält Hinweise über die Websites und Ressourcen, von denen der Server erwartet, dass die endgültige Antwort darauf verweist. Dies ermöglicht es einem Browser, sich zu diesen Seiten [vorzuverbinden](/de/docs/Web/HTML/Attributes/rel/preconnect) oder Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat. Die durch frühe Hinweise angegebenen vorzuladenden Ressourcen werden vom Client sofort abgerufen, sobald die Hinweise empfangen werden.

Die frühe Hinweisantwort ist hauptsächlich für die Verwendung mit dem {{HTTPHeader("Link")}} Header vorgesehen, der angibt, welche Ressourcen geladen werden sollen. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP) Header enthalten, der während der Verarbeitung des frühen Hinweises durchgesetzt wird.

Ein Server kann mehrere `103` Antworten senden, zum Beispiel nach einer Weiterleitung. Browser verarbeiten nur die erste frühe Hinweisantwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer Cross-Origin-Weiterleitung führt.

> [!NOTE]
> Aus Gründen der Kompatibilität und Sicherheit wird empfohlen, [HTTP `103 Early Hints` Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client mit Informationsantworten korrekt umgeht.
>
> Die meisten Browser beschränken die Unterstützung auf HTTP/2 oder später aus diesem Grund. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten. Dennoch verwenden die untenstehenden Beispiele der Konvention entsprechend die HTTP/1.1-Notation.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Vorverbindungsbeispiel

Die folgende `103` frühe Hinweisantwort zeigt eine frühe Hinweisantwort, bei der der Server anzeigt, dass der Client sich möglicherweise mit einem bestimmten Ursprung (`https://cdn.example.com`) vorverbinden möchte. Genau wie das HTML [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) Attribut ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt und dass der Browser die Benutzererfahrung verbessern könnte, indem er proaktiv eine Verbindung zu diesem Ursprung herstellt.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel verbindet sich zweimal mit `https://cdn.example.com`:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet, die ohne CORS abgerufen werden können, wie Bilder.
- Die zweite Verbindung umfasst das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen wie Schriftarten verwendet.

CORS-geschützte Ressourcen müssen über eine vollständig separate Verbindung abgerufen werden. Wenn Sie nur einen Ressourcentyp von einem Ursprung benötigen, müssen Sie sich nur einmal vorverbinden.

Anschließend sendet der Server die endgültige Antwort. Diese umfasst ein Cross-Origin-Schriftartenvorladen und ein `<img>`, das aus dem zusätzlichen Ursprung geladen wird.

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

### Preload Beispiel

Die folgende `103` frühe Hinweisantwort zeigt an, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Diese enthält einen Link zum Stylesheet, das möglicherweise bereits durch den frühen Hinweis vorgeladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühe Hinweisantwort mit CSP

Das folgende Beispiel zeigt dieselbe frühe Hinweisantwort, jedoch mit einem `Content-Security-Policy` Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf den selben Ursprung wie die Anfrage. Das Stylesheet wird vorgeladen, wenn der Ursprung übereinstimmt.

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
- [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect) ({{htmlelement("link")}} Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) ({{htmlelement("link")}} Attribut)
- [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority) ({{htmlelement("link")}} Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) vom Cloudflare Blog
