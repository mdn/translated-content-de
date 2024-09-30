---
title: Subresource Integrity (SRI) Implementierung
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) (SRI) ermöglicht es Browsern sicherzustellen, dass die von ihnen abgerufenen Ressourcen (zum Beispiel von einem CDN) ohne unerwartete Manipulationen geliefert werden. Es funktioniert, indem Sie einen kryptografischen Hash bereitstellen, den die abgerufene Ressource erfüllen muss.

## Problem

Wenn ein Angreifer ein Content Delivery Network (CDN) ausnutzen und den Inhalt der auf diesem CDN gehosteten JavaScript-Bibliotheken ändern würde, würde dies Schwachstellen auf allen Websites schaffen, die diese Bibliotheken verwenden.

Zum Beispiel kann JavaScript, das auf `library.org` gehostet und von `example.org` geladen wird, auf die gesamten Inhalte von `example.org` zugreifen. Wenn ein Angreifer dieses gehostete JavaScript so modifiziert, dass es bösartigen Code enthält, könnte es Download-Links ändern, die Seite verunstalten, Anmeldedaten stehlen, DoS-Angriffe verursachen und anderes mehr.

## Lösung

Verwenden Sie SRI, um eine externe JavaScript-Ressource an ihre bekannten Inhalte zu einem bestimmten Zeitpunkt zu binden. Dies wird durch einen base64-kodierten kryptografischen Hash verifiziert. Geben Sie diesen Hash im `integrity`-Attribut an, wenn Sie die Ressource laden.

Wenn die Datei nach diesem Zeitpunkt geändert wird, stimmt der Hash nicht mehr überein, und unterstützende Webbrowser werden sich weigern, sie zu laden.

SRI sollte beim Laden externer JavaScript- oder Stylesheet-Ressourcen verwendet werden. Die Ressourcen sollten über HTTPS geladen werden.

Beachten Sie, dass CDNs [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/Security/Practical_implementation_guides/CORS) verwenden müssen, indem sie den [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) Header setzen.

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

Generieren Sie einen Hash selbst:

```bash
$ curl -s https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js | \
    openssl dgst -sha384 -binary | \
    openssl base64 -A

r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp
```

## Siehe auch

- {{htmlelement("link")}}
- {{htmlelement("script")}}
- [SRI Hash Generator](https://www.srihash.org/) auf `srihash.org`: Generiert die erforderlichen {{htmlelement("script")}}-Elemente für Sie und informiert Sie, wenn das CDN keinen CORS-Support hat.
