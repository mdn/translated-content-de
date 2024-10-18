---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}

Die HTTP **`103 Early Hints`** [Informative Antwort](/de/docs/Web/HTTP/Status#informational_responses) kann von einem Server gesendet werden, während dieser noch eine Antwort vorbereitet. Sie enthält Hinweise zu den Seiten und Ressourcen, auf die die endgültige Antwort des Servers voraussichtlich verweist.
Dies ermöglicht es einem Browser, bereits vor dem Eintreffen der vollständigen Serverantwort, eine [Preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect) zu Websites herzustellen oder mit dem [Preloading](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen zu beginnen.
Vom Client angeforderte Ressourcen, die durch frühe Hinweise angegeben werden, werden abgerufen, sobald die Hinweise empfangen werden.

Die Antwort der frühen Hinweise ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, der die zu ladenden Ressourcen angibt.
Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/CSP)-Header enthalten, der beim Verarbeiten des frühen Hinweises durchgesetzt wird.

Ein Server könnte mehrere `103`-Antworten senden, zum Beispiel nach einer Weiterleitung.
Browser verarbeiten nur die erste Antwort der frühen Hinweise, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer Weiterleitung über eine andere Domain führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints`-Antworten nur über HTTP/2 oder später zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client informative Antworten korrekt verarbeitet.
>
> Die meisten Browser unterstützen dies aus diesem Grund nur ab HTTP/2. Siehe unten zur [Browser-Kompatibilität](#browser-kompatibilität).
> Dennoch verwenden die Beispiele unten die übliche HTTP/1.1-Notation.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Beispiel zur Preconnect

Die folgende `103` frühe Hinweis-Antwort zeigt eine Antwort, bei der der Server anzeigt, dass der Client möglicherweise eine Verbindung zu einem bestimmten Ursprung (`https://cdn.example.com`) vorab aufbauen möchte.
Ähnlich wie das HTML-Attribut [`rel=preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt und dass der Browser das Benutzererlebnis verbessern kann, indem er proaktiv eine Verbindung zu diesem Ursprung aufbaut.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel stellt zweimal eine Vorabverbindung zu `https://cdn.example.com` her:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet, die ohne CORS abgerufen werden können, wie zum Beispiel Bilder.
- Die zweite Verbindung enthält das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/CORS)-geschützten Ressourcen verwendet, wie beispielsweise Schriftarten.

CORS-geschützte Ressourcen müssen über eine völlig separate Verbindung abgerufen werden. Wenn Sie nur einen Ressourcentyp von einem Ursprung benötigen, reicht es aus, nur einmal eine Vorabverbindung herzustellen.

Anschließend sendet der Server die endgültige Antwort.
Diese beinhaltet ein crossorigin-Schriftart-Preload und ein `<img>`, das vom zusätzlichen Ursprung geladen wird.

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

### Beispiel zum Preload

Die folgende `103` frühe Hinweis-Antwort zeigt, dass ein Stylesheet `style.css` möglicherweise von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort.
Diese enthält einen Link zum Stylesheet, das möglicherweise bereits durch den frühen Hinweis vorab geladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Frühe Hinweis-Antwort mit CSP

Das folgende Beispiel zeigt die gleiche frühe Hinweis-Antwort, jedoch mit einem `Content-Security-Policy`-Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Preloading auf den gleichen Ursprung wie die Anfrage.
Das Stylesheet wird vorab geladen, wenn der Ursprung übereinstimmt.

Die endgültige Antwort könnte die CSP auf `none` setzen, wie unten gezeigt.
Das Stylesheet wurde bereits vorab geladen, wird jedoch beim Rendern der Seite nicht verwendet.

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
- [`fetchpriority`](/de/docs/Web/HTML/Element/link#fetchpriority) ({{htmlelement("link")}}-Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) auf dem CloudFlare-Blog
