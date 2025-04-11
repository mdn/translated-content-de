---
title: "HTMLMetaElement: httpEquiv-Eigenschaft"
short-title: httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.httpEquiv`**-Eigenschaft erhält oder setzt die Pragma-Direktive oder den Namen des HTTP-Antwort-Headers für das [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)-Attribut.
Für weitere Details zu den möglichen Werten siehe das [http-equiv](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut.

## Wert

Ein String.

## Beispiele

### Den `http-equiv`-Wert eines Meta-Elements auslesen

Das folgende Beispiel fragt ein `<meta>`-Element mit einem `http-equiv`-Attribut ab.
Das `http-equiv`-Attribut wird in die Konsole protokolliert und zeigt eine `refresh`-[Pragma-Direktive](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv), die den Browser anweist, die Seite nach einer durch das `content`-Attribut definierten Anzahl von Sekunden zu aktualisieren:

```js
// given <meta http-equiv="refresh" content="10" />
const meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// refresh
console.log(meta.content);
// 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
