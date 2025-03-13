---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP **`103 Early Hints`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet. Sie enthält Hinweise auf die Websites und Ressourcen, die der Server in der endgültigen Antwort verlinken wird.
Dies ermöglicht es einem Browser, bereits zu Seiten [vorzuverbinden](/de/docs/Web/HTML/Attributes/rel/preconnect) oder Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), noch bevor der Server die endgültige Antwort vorbereitet und gesendet hat.
Vorab geladene Ressourcen, die durch frühe Hinweise angegeben werden, werden vom Client geladen, sobald die Hinweise empfangen werden.

Die frühe Hinweis-Antwort ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header gedacht, der die zu ladenden Ressourcen angibt.
Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/Guides/CSP)-Header enthalten, der während der Verarbeitung des frühen Hinweises durchgesetzt wird.

Ein Server kann mehrere `103`-Antworten senden, beispielsweise nach einer Umleitung.
Browser verarbeiten nur die erste Antwort mit frühen Hinweisen, und diese muss verworfen werden, wenn die Anfrage zu einer redirect über eine andere Ursprungsdomäne führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client informierende Antworten korrekt verarbeitet.
>
> Die meisten Browser beschränken die Unterstützung aus diesem Grund auf HTTP/2 oder später. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten.
> Trotz dieser Empfehlung verwenden die untenstehenden Beispiele die HTTP/1.1-Notation gemäß der üblichen Konvention.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Beispiel für Vorverbindung

Die folgende `103` Early Hint-Antwort zeigt eine Antwort, bei der der Server angibt, dass der Client eine Vorverbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) herstellen möchte.
Wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt, und dass der Browser die Benutzererfahrung verbessern kann, indem er vorzeitig eine Verbindung zu diesem Ursprung herstellt.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel stellt zwei Vorverbindungen zu `https://cdn.example.com` her:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet, die ohne CORS abgerufen werden können, wie z. B. Bilder.
- Die zweite Verbindung umfasst das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/Guides/CORS)-geschützten Ressourcen verwendet werden, wie z. B. Schriften.

CORS-geschützte Ressourcen müssen über eine vollständig separate Verbindung abgerufen werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie nur einmal Vorverbindungen herstellen.

Anschließend sendet der Server die endgültige Antwort.
Diese enthält ein Cross-Origin-Schriftartenvorladen und ein `<img>`, das vom zusätzlichen Ursprung geladen wird.

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

### Beispiel für Vorladen

Die folgende `103` Early Hint-Antwort gibt an, dass ein Stylesheet `style.css` möglicherweise für die endgültige Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort.
Diese enthält einen Link zu dem Stylesheet, das möglicherweise bereits aus dem frühen Hinweis vorab geladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Antwort mit frühem Hinweis und CSP

Das folgende Beispiel zeigt die gleiche Early Hint-Antwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf denselben Ursprung wie die Anfrage.
Das Stylesheet wird vorab geladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt.
Das Stylesheet wurde bereits vorab geladen, wird aber beim Rendern der Seite nicht verwendet.

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
- [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect) ({{htmlelement("link")}}-Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) ({{htmlelement("link")}}-Attribut)
- [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority) ({{htmlelement("link")}}-Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) vom Cloudflare-Blog
