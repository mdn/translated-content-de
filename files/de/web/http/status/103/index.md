---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{HTTPSidebar}}

Der HTTP **`103 Early Hints`** [informationsbasierte Antwort](/de/docs/Web/HTTP/Status#information_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet, mit Hinweisen auf die Websites und Ressourcen, die in der endgültigen Antwort des Servers verlinkt werden sollen.
Dies ermöglicht einem Browser, eine [Vorverbindung herzustellen](/de/docs/Web/HTML/Attributes/rel/preconnect) oder mit [dem Vorladen](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen zu beginnen, noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat.
Vorbeladene Ressourcen, die durch frühe Hinweise angegeben werden, werden vom Client abgerufen, sobald die Hinweise empfangen werden.

Die frühe Hinweisantwort ist hauptsächlich für den Einsatz mit dem {{HTTPHeader("Link")}}-Header vorgesehen, der die zu ladenden Ressourcen angibt.
Es kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP)-Header enthalten, der bei der Verarbeitung des frühen Hinweises durchgesetzt wird.

Ein Server kann mehrere `103` Antworten senden, beispielsweise nach einer Weiterleitung.
Browser verarbeiten nur die erste frühe Hinweisantwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer umleitenden Weiterleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP-`103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden]((https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client informationsbasierte Antworten korrekt verarbeitet.
>
> Die meisten Browser beschränken die Unterstützung aus diesem Grund auf HTTP/2 oder später. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten.
> Trotzdem verwenden die nachfolgenden Beispiele aus Gründen der Konvention eine HTTP/1.1-Notation.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Beispiel für Vorverbindung

Die folgende `103` frühe Hinweisantwort zeigt eine frühe Hinweisantwort, bei der der Server angibt, dass der Client eventuell eine Vorverbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) herstellen möchte.
Genau wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt und dass der Browser das Benutzererlebnis verbessern kann, indem er vorab eine Verbindung zu diesem Ursprung herstellt.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel stellt zweimal eine Vorverbindung zu `https://cdn.example.com` her:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet, die ohne CORS abgerufen werden können, wie zum Beispiel Bilder.
- Die zweite Verbindung schließt das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut ein und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen wie Schriftarten verwendet.

CORS-geschützte Ressourcen müssen über eine vollständig separate Verbindung abgerufen werden. Wenn Sie nur eine Art von Ressource von einem Ursprung benötigen, müssen Sie lediglich einmal eine Vorverbindung herstellen.

Anschließend sendet der Server die endgültige Antwort.
Diese enthält ein crossorigin-Schriftarten-Vorladen und ein `<img>`, das vom zusätzlichen Ursprung geladen wird.

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

Die folgende `103` frühe Hinweisantwort gibt an, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort.
Diese enthält einen Link zum Stylesheet, das möglicherweise bereits durch den frühen Hinweis vorgeladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühe Hinweisantwort mit CSP

Das folgende Beispiel zeigt dieselbe frühe Hinweisantwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Vorladen auf den gleichen Ursprung wie die Anfrage.
Das Stylesheet wird vorgeladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt.
Das Stylesheet wurde bereits vorgeladen, wird aber beim Rendern der Seite nicht verwendet.

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
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) aus dem CloudFlare-Blog
