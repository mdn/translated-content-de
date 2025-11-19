---
title: "HTMLAnchorElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: 1d75851e2915508d4680e8a744c0b2b85736a588
---

{{ApiRef("HTML DOM")}}

Die **`href`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle ist ein {{Glossary("stringifier", "stringifier")}}, der die absolute URL zurückgibt, die dem `href`-Attribut des Elements entspricht (oder einen leeren String, wenn `href` nicht gesetzt ist). Das Setzen dieser Eigenschaft aktualisiert das `href`-Attribut des Elements auf den angegebenen Wert.

## Wert

Ein String.

- Wenn das `href`-Attribut fehlt, ist der Wert ein leerer String (`""`).
- Wenn das `href`-Attribut vorhanden, aber keine gültige relative oder absolute URL ist, ist der Wert der Attributwert, wie er ist.
- Wenn das `href`-Attribut vorhanden und eine gültige relative oder absolute URL ist, ist der Wert die absolute URL, die relativ zur Basis-URL des Dokuments aufgelöst wird. Der leere String (`""`) wird als gültige relative URL betrachtet und zur Basis-URL des Dokuments aufgelöst.

## Beispiele

Ein neu erstelltes `<a>`-Element hat kein `href`-Attribut, daher gibt seine `href`-Eigenschaft einen leeren String zurück.

```js
const anchor = document.createElement("a");
console.log(anchor.href); // ""
```

Wenn das Attribut auf einen leeren String gesetzt ist, gibt die Eigenschaft die Basis-URL des Dokuments zurück, da der leere String eine gültige relative URL ist.

```js
anchor.href = "";
console.log(anchor.href); // "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href"
```

Wenn das Attribut auf eine relative URL gesetzt ist, gibt die Eigenschaft die absolute URL zurück, die gegen die Basis-URL des Dokuments aufgelöst wird.

```js
anchor.href = "../../..";
console.log(anchor.href); // "https://developer.mozilla.org/en-US/docs/"
```

Beachten Sie, dass der Attributwert wie festgelegt bleibt, ohne Auflösung.

```js
console.log(anchor.getAttribute("href")); // "../../.."
```

Wenn das Attribut auf eine absolute URL gesetzt ist, gibt die Eigenschaft diese absolute URL unverändert zurück.

```js
anchor.href = "https://example.com/path";
console.log(anchor.href); // "https://example.com/path"
```

Wenn das Attribut auf eine ungültige URL gesetzt ist, gibt die Eigenschaft den Attributwert unverändert zurück.

```js
anchor.href = "https://";
console.log(anchor.href); // "https://"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle, zu der es gehört.
