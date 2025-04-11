---
title: "HTMLMediaElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLMediaElement/crossOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.crossOrigin`**-Eigenschaft ist die CORS-Einstellung für dieses Medienelement. Details finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

## Wert

Ein Schlüsselwort-String, der den zu verwendenden CORS-Modus beim Abrufen der Ressource angibt. Mögliche Werte sind:

- `anonymous` oder der leere String (`""`)
  - : Anfragen, die durch das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet werden, verwenden den `cors`- [Modus](/de/docs/Web/API/Request/mode) und den `same-origin`- [Credentials](/de/docs/Web/API/Request/credentials) Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldeinformationen gesendet werden, _wenn_ die Ressource aus demselben Ursprung abgerufen wird, aus dem das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die durch das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet werden, verwenden den `cors`- [Modus](/de/docs/Web/API/Request/mode) und den `include`- [Credentials](/de/docs/Web/API/Request/credentials) Modus. Alle Ressourcenanfragen des Elements verwenden CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, entspricht dies der Angabe als `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (der `no-cors`- [Modus](/de/docs/Web/API/Request/mode) und der `same-origin`- [Credentials](/de/docs/Web/API/Request/credentials) Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
