---
title: Implementierung der Subresource Integrity (SRI)
short-title: Subresource Integrity (SRI)
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

[Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) (SRI) ermöglicht es Browsern, zu überprüfen, ob die von ihnen abgerufenen Ressourcen (zum Beispiel von einem CDN) ohne unerwartete Manipulationen geliefert werden. Dies funktioniert, indem Sie einen kryptografischen Hash bereitstellen, mit dem die abgerufene Ressource übereinstimmen muss.

## Problem

Wenn ein Angreifer ein Content Delivery Network (CDN) ausnutzen und den Inhalt von auf diesem CDN gehosteten JavaScript-Bibliotheken ändern würde, würde dies Schwachstellen in allen Websites schaffen, die diese Bibliotheken verwenden.

Ein Beispiel: JavaScript von `library.org`, das von `example.org` geladen wird, kann auf die gesamten Inhalte von `example.org` zugreifen. Wenn ein Angreifer dieses gehostete JavaScript ändert, um bösartigen Code einzuschließen, könnte er Download-Links verändern, die Website verunstalten, Anmeldedaten stehlen, Denial-of-Service (DoS)-Angriffe ausführen und so weiter.

## Lösung

Verwenden Sie SRI, um eine externe JavaScript-Ressource an ihre bekannten Inhalte zu einem bestimmten Zeitpunkt zu binden. Dies wird durch einen Base64-kodierten kryptografischen Hash verifiziert. Geben Sie diesen Hash im `integrity`-Attribut an, wenn Sie die Ressource laden.

Wenn die Datei nach diesem Zeitpunkt geändert wird, stimmt der Hash nicht mehr überein, und unterstützende Webbrowser laden sie nicht.

SRI sollte verwendet werden, wenn externe JavaScript- oder Stylesheet-Ressourcen geladen werden. Die Ressourcen sollten über HTTPS geladen werden.

Beachten Sie, dass CDNs [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/Security/Practical_implementation_guides/CORS) verwenden müssen, indem sie den [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)-Header setzen.

## Beispiele

jQuery 2.1.4 von seinem CDN laden:

```html
<script
  src="https://code.jquery.com/jquery-2.1.4.min.js"
  integrity="sha384-R4/ztc4ZlRqWjqIuvf6RX5yb/v90qNGx6fS48N0tRxiGkqveZETq72KgDVJCp2TC"
  crossorigin="anonymous"></script>
```

AngularJS 1.4.8 von seinem CDN laden:

```html
<script
  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"
  integrity="sha384-r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp"
  crossorigin="anonymous"></script>
```

Einen Hash selbst generieren:

```bash
$ curl -s https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js | \
    openssl dgst -sha384 -binary | \
    openssl base64 -A

r1y8TJcloKTvouxnYsi4PJAx+nHNr90ibsEn3zznzDzWBN9X3o3kbHLSgcIPtzAp
```

## Siehe auch

- {{htmlelement("link")}}
- {{htmlelement("script")}}
- [SRI Hash Generator](https://srihash.org/) auf `srihash.org`: Generiert die erforderlichen {{htmlelement("script")}}-Elemente für Sie und informiert Sie, wenn das CDN keine CORS-Unterstützung bietet.
