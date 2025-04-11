---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-**`103 Early Hints`**-[informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet, mit Hinweisen auf die Seiten und Ressourcen, zu denen der Server erwartet, dass die endgültige Antwort verlinkt wird. Dies ermöglicht es einem Browser, eine [Preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu Seiten durchzuführen oder Ressourcen bereits vorzuladen ([preloading](/de/docs/Web/HTML/Reference/Attributes/rel/preload)), bevor der Server eine endgültige Antwort vorbereitet und gesendet hat. Vorab geladene Ressourcen, die durch frühe Hinweise angegeben werden, werden vom Client abgerufen, sobald die Hinweise empfangen werden.

Die frühe Hinweisantwort ist hauptsächlich für die Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, der die zu ladenden Ressourcen angibt. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/Guides/CSP)-Header enthalten, der während der Verarbeitung der frühen Hinweise durchgesetzt wird.

Ein Server könnte mehrere `103`-Antworten senden, zum Beispiel nach einer Umleitung. Browser verarbeiten nur die erste frühe Hinweisantwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer umgebungsüberschreitenden Umleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP-`103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client Informationsantworten korrekt verarbeitet.
>
> Die meisten Browser beschränken die Unterstützung aus diesem Grund auf HTTP/2 oder später. Siehe unten bei der [Browser-Kompatibilität](#browser-kompatibilität).
> Trotz dessen verwenden die folgenden Beispiele die HTTP/1.1-Notation gemäß der üblichen Konvention.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Preconnect-Beispiel

Die folgende `103`-frühe Hinweisantwort zeigt eine frühe Hinweisantwort, bei der der Server angibt, dass der Client möglicherweise zu einem bestimmten Ursprung (`https://cdn.example.com`) preconnecten möchte. Genau wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Zielursprung benötigt und dass der Browser das Benutzererlebnis verbessern kann, indem er proaktiv eine Verbindung zu diesem Ursprung initiiert.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel preconnectet zweimal zu `https://cdn.example.com`:

- Die erste Verbindung wird für das Laden von Ressourcen verwendet, die ohne CORS geladen werden können, wie Bilder.
- Die zweite Verbindung umfasst das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut und wird für das Laden von [CORS](/de/docs/Web/HTTP/Guides/CORS)-geschützten Ressourcen, wie Schriften, verwendet.

CORS-geschützte Ressourcen müssen über eine vollständig separate Verbindung abgerufen werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie nur einmal preconnecten.

Anschließend sendet der Server die endgültige Antwort. Diese enthält ein Crossorigin-Font-Preload und ein `<img>`, das von dem zusätzlichen Ursprung geladen wird.

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

### Preload-Beispiel

Die folgende `103`-frühe Hinweisantwort zeigt an, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Diese enthält einen Link zu dem Stylesheet, das möglicherweise bereits aus dem frühen Hinweis vorab geladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühe Hinweisantwort mit CSP

Das folgende Beispiel zeigt dieselbe frühe Hinweisantwort, jedoch mit einem `Content-Security-Policy`-Header enthalten.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf denselben Ursprung wie die Anfrage. Das Stylesheet wird vorab geladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt. Das Stylesheet wurde bereits vorab geladen, wird jedoch beim Rendern der Seite nicht verwendet.

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
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) ({{htmlelement("link")}}-Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ({{htmlelement("link")}}-Attribut)
- [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) ({{htmlelement("link")}}-Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) vom Cloudflare-Blog
