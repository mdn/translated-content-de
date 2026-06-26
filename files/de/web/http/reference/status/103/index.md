---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Die HTTP **`103 Early Hints`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet. Sie enthält Hinweise auf die Seiten und Ressourcen, auf die die endgültige Antwort des Servers wahrscheinlich verweisen wird. Dies ermöglicht es einem Browser, eine [Preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu Websites auszuführen oder [Ressourcen vorzuladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload), noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat. Vom Client vorab geladene Ressourcen, die durch frühe Hinweise angezeigt werden, werden sofort nach Empfang der Hinweise abgerufen.

Die frühe Hinweisantwort ist hauptsächlich für die Verwendung mit dem {{HTTPHeader("Link")}} Header vorgesehen, der die zu ladenden Ressourcen angibt. Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/Guides/CSP) Header enthalten, der bei der Verarbeitung des frühen Hinweises durchgesetzt wird.

Ein Server kann mehrere `103`-Antworten senden, zum Beispiel nach einer Umleitung. Browser verarbeiten nur die erste frühe Hinweisantwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer Cross-Origin-Umleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/info/rfc8297/#section-3), es sei denn, es ist bekannt, dass der Client Informationsantworten korrekt verarbeitet.
>
> Die meisten Browser beschränken die Unterstützung aus diesem Grund auf HTTP/2 oder später. Siehe unten die [Browser-Kompatibilität](#browser-kompatibilität). Trotz dessen verwenden die untenstehenden Beispiele die Notation im HTTP/1.1-Stil gemäß der üblichen Konvention.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Beispiel für Preconnect

Die folgende `103` frühzeitige Hinweisantwort zeigt eine frühe Hinweisantwort, bei der der Server angibt, dass der Client möglicherweise eine Verbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) herstellen möchte. Genau wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt, und dass der Browser die Benutzererfahrung verbessern kann, indem er vorab eine Verbindung zu diesem Ursprung initiiert.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel verbindet sich zweimal mit `https://cdn.example.com`:

- Die erste Verbindung würde für das Laden von Ressourcen verwendet werden, die ohne CORS abgerufen werden können, wie Bilder.
- Die zweite Verbindung beinhaltet das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut und würde für das Laden von [CORS](/de/docs/Web/HTTP/Guides/CORS)-geschützten Ressourcen wie Schriftarten verwendet werden.

CORS-geschützte Ressourcen müssen über eine vollständig getrennte Verbindung abgerufen werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie nur einmal die Verbindung herstellen.

Anschließend sendet der Server die endgültige Antwort. Dies beinhaltet ein crossorigin Schriftart-Preload und ein `<img>`, das aus dem zusätzlichen Ursprung geladen wird.

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

### Beispiel für Preload

Die folgende `103` frühzeitige Hinweisantwort zeigt an, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort. Dies beinhaltet einen Link zu dem Stylesheet, welches möglicherweise bereits aus dem frühen Hinweis vorgeladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühzeitige Hinweisantwort mit CSP

Das folgende Beispiel zeigt die gleiche frühzeitige Hinweisantwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf denselben Ursprung wie die Anfrage. Das Stylesheet wird vorgeladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt. Das Stylesheet wurde bereits vorgeladen, wird jedoch beim Rendern der Seite nicht verwendet.

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
- [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) ({{htmlelement("link")}} Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ({{htmlelement("link")}} Attribut)
- [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) ({{htmlelement("link")}} Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) vom Cloudflare-Blog
