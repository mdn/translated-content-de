---
title: "HTMLMediaElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLMediaElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.crossOrigin`**-Eigenschaft ist die CORS-Einstellung für dieses Medienelement. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details.

## Wert

Ein String eines Schlüsselwortes, das den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder der leere String (`""`)
  - : Anfragen, die vom [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet werden, nutzen den `cors`- [Modus](/de/docs/Web/API/Request/mode) und den `same-origin`- [Credentials](/de/docs/Web/API/Request/credentials)-Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldedaten gesendet werden _wenn_ die Ressource von demselben Ursprung abgerufen wird, von dem auch das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet werden, nutzen den `cors`- [Modus](/de/docs/Web/API/Request/mode) und den `include`- [Credentials](/de/docs/Web/API/Request/credentials)-Modus. Alle vom Element angeforderten Ressourcen verwenden CORS, unabhängig davon, von welcher Domain der Abruf erfolgt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, entspricht dies der Angabe von `anonymous`.

Wird die `crossOrigin`-Eigenschaft nicht angegeben, wird die Ressource ohne CORS abgerufen (der `no-cors`- [Modus](/de/docs/Web/API/Request/mode) und der `same-origin`- [Credentials](/de/docs/Web/API/Request/credentials)-Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
