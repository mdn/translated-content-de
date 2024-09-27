---
title: "HTMLMediaElement: crossOrigin-Eigenschaft"
short-title: crossOrigin
slug: Web/API/HTMLMediaElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.crossOrigin`**-Eigenschaft ist die CORS-Einstellung für dieses Medienelement. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für Details.

## Wert

Ein String eines Schlüsselworts, der den CORS-Modus angibt, der beim Abrufen der Ressource verwendet werden soll. Mögliche Werte sind:

- `anonymous` oder der leere String (`""`)
  - : Anfragen, die vom [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet werden, verwenden den `cors` [Modus](/de/docs/Web/API/Request/mode) und den `same-origin` [Zwischenlagen](/de/docs/Web/API/Request/credentials) Modus. Das bedeutet, dass CORS aktiviert ist und Anmeldedaten gesendet werden, _wenn_ die Ressource von derselben Herkunft abgerufen wird, von der das Dokument geladen wurde.
- `use-credentials`
  - : Anfragen, die vom [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet werden, verwenden den `cors` [Modus](/de/docs/Web/API/Request/mode) und den `include` [Zwischenlagen](/de/docs/Web/API/Request/credentials) Modus. Alle Ressourcenanfragen des Elements verwenden CORS, unabhängig davon, von welcher Domain die Anforderung stammt.

Wenn die `crossOrigin`-Eigenschaft mit einem anderen Wert angegeben wird, ist dies dasselbe wie die Angabe von `anonymous`.

Wenn die `crossOrigin`-Eigenschaft nicht angegeben wird, wird die Ressource ohne CORS abgerufen (der `no-cors` [Modus](/de/docs/Web/API/Request/mode) und der `same-origin` [Zwischenlagen](/de/docs/Web/API/Request/credentials) Modus).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
- [`HTMLLinkElement.crossOrigin`](/de/docs/Web/API/HTMLLinkElement/crossOrigin)
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
