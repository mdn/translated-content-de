---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP **`103 Early Hints`** [informationelle Antwort](/de/docs/Web/HTTP/Reference/Status#informational_responses) kann von einem Server gesendet werden, während er noch eine Antwort vorbereitet, mit Hinweisen zu den Websites und Ressourcen, auf die die endgültige Antwort verlinken soll.
Dies ermöglicht es einem Browser, zu Websites [vorzuverbinden](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) oder Ressourcen zu [preloaden](/de/docs/Web/HTML/Reference/Attributes/rel/preload), noch bevor der Server eine endgültige Antwort vorbereitet und gesendet hat.
Von frühen Hinweisen angegebene, vorab geladene Ressourcen werden vom Client abgerufen, sobald die Hinweise empfangen werden.

Die Early Hint-Antwort ist hauptsächlich für die Verwendung mit dem {{HTTPHeader("Link")}} Header vorgesehen, der die zu ladenden Ressourcen angibt.
Sie kann auch einen [`Content-Security-Policy`](/de/docs/Web/HTTP/Guides/CSP) Header enthalten, der beim Verarbeiten des frühen Hinweises durchgesetzt wird.

Ein Server könnte mehrere `103` Antworten senden, zum Beispiel nach einer Umleitung.
Browser verarbeiten nur die erste Early-Hints-Antwort, und diese Antwort muss verworfen werden, wenn die Anfrage zu einer cross-origin Umleitung führt.

> [!NOTE]
> Aus Kompatibilitäts- und Sicherheitsgründen wird empfohlen, [HTTP `103 Early Hints` Antworten nur über HTTP/2 oder höher zu senden](https://www.rfc-editor.org/rfc/rfc8297#section-3), es sei denn, es ist bekannt, dass der Client informationelle Antworten korrekt verarbeitet.
>
> Aus diesem Grund beschränken die meisten Browser die Unterstützung auf HTTP/2 oder höher. Siehe unten die [Browser-Kompatibilität](#browser-kompatibilität).
> Trotzdem verwenden die untenstehenden Beispiele die übliche Notation von HTTP/1.1.

## Syntax

```http
103 Early Hints
```

## Beispiele

### Beispiel für Vorverbinden

Die folgende `103` Early Hint-Antwort zeigt eine frühe Hinweisantwort, bei der der Server angibt, dass der Client möglicherweise zu einem bestimmten Ursprung (`https://cdn.example.com`) vorverbinden möchte.
Ähnlich wie das HTML [`rel=preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) Attribut ist dies ein Hinweis darauf, dass die Seite wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt und dass der Browser die Benutzererfahrung verbessern kann, indem er proaktiv eine Verbindung zu diesem Ursprung initiiert.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

Dieses Beispiel verbindet sich zweimal mit `https://cdn.example.com` vor:

- Die erste Verbindung würde zum Laden von Ressourcen verwendet, die ohne CORS abgerufen werden können, wie Bilder.
- Die zweite Verbindung enthält das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut und würde zum Laden von [CORS](/de/docs/Web/HTTP/Guides/CORS)-geschützten Ressourcen, wie Schriftarten, verwendet.

CORS-geschützte Ressourcen müssen über eine vollständig separate Verbindung abgerufen werden. Wenn Sie nur einen Ressourcentyp von einem Ursprung benötigen, müssen Sie nur einmal vorverbinden.

Anschließend sendet der Server die endgültige Antwort.
Diese enthält ein crossorigin Schriftsatz-Preload und ein `<img>` geladen aus dem zusätzlichen Ursprung.

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

### Beispiel für Preloading

Die folgende `103` Early Hint-Antwort zeigt an, dass möglicherweise ein Stylesheet `style.css` von der endgültigen Antwort benötigt wird.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Anschließend sendet der Server die endgültige Antwort.
Diese enthält einen Link zum Stylesheet, das möglicherweise bereits von dem frühen Hinweis geladen wurde.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Früh zum Hint Antwort mit CSP

Das folgende Beispiel zeigt die gleiche Early Hint-Antwort, jedoch mit einem `Content-Security-Policy` Header.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

Die frühe Antwort beschränkt das Preloading auf den gleichen Ursprung wie die Anfrage.
Das Stylesheet wird vorausgeladen, wenn der Ursprung übereinstimmt.

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
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) ({{htmlelement("link")}} Attribut)
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) ({{htmlelement("link")}} Attribut)
- [`fetchpriority`](/de/docs/Web/HTML/Reference/Elements/link#fetchpriority) ({{htmlelement("link")}} Attribut)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) aus dem Cloudflare Blog
