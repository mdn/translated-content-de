---
title: Implementierung von Subresource Integrity (SRI)
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) (SRI) ermöglicht es Browsern zu überprüfen, dass die geladenen Ressourcen (zum Beispiel von einem CDN) ohne unerwartete Manipulation geliefert werden. Dies funktioniert, indem Sie einen kryptografischen Hash bereitstellen, mit dem die geladene Ressource übereinstimmen muss.

## Problem

Wenn ein Angreifer ein Content Delivery Network (CDN) ausnutzt und den Inhalt von JavaScript-Bibliotheken, die auf diesem CDN gehostet werden, verändert, würde dies Schwachstellen auf allen Websites schaffen, die diese Bibliotheken verwenden.

Zum Beispiel kann auf `library.org` gehostetes JavaScript, das von `example.org` geladen wird, auf den gesamten Inhalt von `example.org` zugreifen. Wenn ein Angreifer dieses gehostete JavaScript ändert, um bösartigen Code einzufügen, könnte es Download-Links verändern, die Website verunstalten, Anmeldedaten stehlen, Denial-of-Service (DoS)-Angriffe verursachen und so weiter.

## Lösung

Verwenden Sie SRI, um eine externe JavaScript-Ressource auf deren bekannten Inhalt zu einem bestimmten Zeitpunkt festzulegen. Dies wird durch einen base64-kodierten kryptografischen Hash verifiziert. Geben Sie diesen Hash im `integrity`-Attribut an, wenn Sie die Ressource laden.

Wenn die Datei nach diesem Zeitpunkt geändert wird, stimmt der Hash nicht mehr überein und unterstützende Webbrowser werden sich weigern, sie zu laden.

SRI sollte beim Laden externer JavaScript- oder Stylesheet-Ressourcen verwendet werden. Die Ressourcen sollten über HTTPS geladen werden.

Beachten Sie, dass CDNs [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/Security/Practical_implementation_guides/CORS) verwenden müssen, indem sie den [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) Header setzen.

## Beispiele

Laden Sie jQuery 2.1.4 von seinem CDN:

```html
<script
  src="https://code.jquery.com/jquery-2.1.4.min.js"
  integrity="sha384-R4/ztc4ZlRqWjqIuvf6RX5yb/v90qNGx6fS48N0tRxiGkqveZETq72KgDVJCp2TC"
  crossorigin="anonymous"></script>
```

Laden Sie AngularJS 1.4.8 von seinem CDN:

```html
<script
  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"
  integrity="sha384-r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp"
  crossorigin="anonymous"></script>
```

Generieren Sie selbst einen Hash:

```bash
$ curl -s https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js | \
    openssl dgst -sha384 -binary | \
    openssl base64 -A

r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp
```

## Siehe auch

- {{htmlelement("link")}}
- {{htmlelement("script")}}
- [SRI Hash Generator](https://www.srihash.org/) auf `srihash.org`: Erzeugt die erforderlichen {{htmlelement("script")}}-Elemente für Sie und informiert Sie darüber, ob das CDN kein CORS unterstützt.
