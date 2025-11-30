---
title: Implementierung von Subresource Integrity (SRI)
short-title: Subresource Integrity (SRI)
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

[Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) (SRI) ermöglicht Browsern, zu überprüfen, ob die von ihnen abgerufenen Ressourcen (zum Beispiel von einem CDN) ohne unerwartete Manipulationen bereitgestellt werden. Dies funktioniert, indem Sie einen kryptografischen Hash angeben, mit dem die abgerufene Ressource übereinstimmen muss.

## Problem

Wenn ein Angreifer ein Content Delivery Network (CDN) ausnutzt und den Inhalt von auf diesem CDN gehosteten JavaScript-Bibliotheken verändert, würde er Schwachstellen in allen Websites schaffen, die diese Bibliotheken verwenden.

Beispielsweise kann JavaScript, das auf `library.org` gehostet und von `example.org` geladen wird, auf den gesamten Inhalt von `example.org` zugreifen. Wenn ein Angreifer dieses gehostete JavaScript ändert, um bösartigen Code einzufügen, könnte es Download-Links verändern, die Site entstellen, Anmeldedaten stehlen, Denial-of-Service-Angriffe durchführen usw.

## Lösung

Verwenden Sie SRI, um eine externe JavaScript-Ressource auf ihren bekannten Inhalt zu einem bestimmten Zeitpunkt festzulegen. Dies wird durch einen base64-codierten kryptografischen Hash überprüft. Geben Sie diesen Hash im `integrity`-Attribut an, wenn Sie die Ressource laden.

Wenn die Datei nach diesem Zeitpunkt verändert wird, stimmt der Hash nicht mehr überein, und unterstützende Web-Browser werden sich weigern, sie zu laden.

SRI sollte beim Laden von externen JavaScript- oder Stylesheet-Ressourcen verwendet werden. Die Ressourcen sollten über HTTPS geladen werden.

Beachten Sie, dass CDNs [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/Security/Practical_implementation_guides/CORS) nutzen müssen, indem sie den [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header festlegen.

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

Erzeugen Sie selbst einen Hash:

```bash
$ curl -s https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js | \
    openssl dgst -sha384 -binary | \
    openssl base64 -A

r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp
```

## Siehe auch

- {{htmlelement("link")}}
- {{htmlelement("script")}}
- [SRI Hash Generator](https://www.srihash.org/) auf `srihash.org`: Erzeugt die erforderlichen {{htmlelement("script")}}-Elemente für Sie und informiert Sie, falls das CDN keine CORS-Unterstützung bietet.
