---
title: Implementierung von Unterressourcenintegrität (SRI)
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) (SRI) ermöglicht es Browsern zu überprüfen, dass Ressourcen, die sie abrufen (zum Beispiel von einem CDN), ohne unerwartete Manipulationen geliefert werden. Dies funktioniert, indem ein kryptographischer Hash bereitgestellt wird, der mit der abgerufenen Ressource übereinstimmen muss.

## Problem

Wenn ein Angreifer ein Content Delivery Network (CDN) ausnutzt und den Inhalt der JavaScript-Bibliotheken, die auf diesem CDN gehostet werden, modifiziert, würde dies Schwachstellen auf allen Websites schaffen, die diese Bibliotheken verwenden.

Zum Beispiel kann JavaScript, das auf `library.org` gehostet und von `example.org` geladen wird, auf den gesamten Inhalt von `example.org` zugreifen. Wenn ein Angreifer dieses gehostete JavaScript modifiziert, um bösartigen Code einzuschließen, könnte er Download-Links ändern, die Website verunstalten, Anmeldeinformationen stehlen, DoS-Angriffe verursachen und mehr.

## Lösung

Verwenden Sie SRI, um eine externe JavaScript-Ressource an ihren bekannten Inhalt zu einem bestimmten Zeitpunkt zu binden. Dies wird durch einen base64-codierten kryptographischen Hash verifiziert. Geben Sie diesen Hash im `integrity`-Attribut an, wenn Sie die Ressource laden.

Wenn die Datei nach diesem Zeitpunkt modifiziert wird, wird der Hash nicht übereinstimmen und unterstützende Webbrowser werden sie nicht laden.

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
- [SRI Hash Generator](https://www.srihash.org/) auf `srihash.org`: Erstellt die erforderlichen {{htmlelement("script")}}-Elemente für Sie und informiert Sie, wenn das CDN keine CORS-Unterstützung bietet.
