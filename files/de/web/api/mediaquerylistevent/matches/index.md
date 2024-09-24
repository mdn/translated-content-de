---
title: "MediaQueryListEvent: matches-Eigenschaft"
short-title: matches
slug: Web/API/MediaQueryListEvent/matches
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Die **`matches`** schreibgeschützte Eigenschaft der
{{DOMxRef("MediaQueryListEvent")}}-Schnittstelle ist ein boolescher Wert, der
`true` ist, wenn das {{DOMxRef("document")}} derzeit die Medienabfrageliste erfüllt,
oder `false` andernfalls.

## Wert

Ein boolescher Wert; gibt `true` zurück, wenn das {{DOMxRef("document")}}
derzeit die Medienabfrageliste erfüllt, `false` andernfalls.

## Beispiele

```js
const para = document.querySelector("p"); // Dies ist das UI-Element, in dem der Text angezeigt wird
const mql = window.matchMedia("(max-width: 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // Der Ansichtsbereich ist 600 Pixel breit oder weniger
    para.textContent = "Dies ist ein schmaler Bildschirm — weniger als 600px breit.";
    document.body.style.backgroundColor = "red";
  } else {
    // Der Ansichtsbereich ist mehr als 600 Pixel breit
    para.textContent = "Dies ist ein breiter Bildschirm — mehr als 600px breit.";
    document.body.style.backgroundColor = "blue";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Medienabfragen im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
