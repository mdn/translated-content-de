---
title: Implementierung von Subresource Integrity (SRI)
short-title: Subresource Integrity (SRI)
slug: Web/Security/Practical_implementation_guides/SRI
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) (SRI) ermöglicht es Browsern, zu überprüfen, dass Ressourcen, die sie abrufen (z. B. von einem CDN), ohne unerwartete Manipulationen geliefert werden. Dies funktioniert durch das Bereitstellen eines kryptografischen Hashes, den die abgerufene Ressource erfüllen muss.

## Problem

Wenn ein Angreifer ein Content Delivery Network (CDN) ausnutzt und den Inhalt von JavaScript-Bibliotheken auf diesem CDN modifiziert, würde dies Schwachstellen auf allen Websites schaffen, die diese Bibliotheken verwenden.

Zum Beispiel kann JavaScript, das auf `library.org` gehostet wird und von `example.org` geladen wird, auf den gesamten Inhalt von `example.org` zugreifen. Wenn ein Angreifer dieses gehostete JavaScript ändert, um bösartigen Code einzuschließen, könnte er Download-Links verändern, die Website verunstalten, Anmeldedaten stehlen, Denial-of-Service (DoS)-Angriffe ausführen usw.

## Lösung

Verwenden Sie SRI, um eine externe JavaScript-Ressource auf deren bekannte Inhalte zu einem bestimmten Zeitpunkt festzulegen. Dies wird durch einen base64-kodierten kryptografischen Hash überprüft. Geben Sie diesen Hash im `integrity`-Attribut an, wenn Sie die Ressource laden.

Wenn die Datei nach diesem Zeitpunkt modifiziert wird, stimmt der Hash nicht überein, und unterstützende Webbrowser werden sich weigern, sie zu laden.

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
- [SRI Hash Generator](https://www.srihash.org/) auf `srihash.org`: Generiert die erforderlichen {{htmlelement("script")}}-Elemente für Sie und informiert, ob das CDN CORS-Unterstützung fehlt.
