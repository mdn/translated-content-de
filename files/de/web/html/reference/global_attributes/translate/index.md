---
title: "HTML-Attribut `translate` "
short-title: translate
slug: Web/HTML/Reference/Global_attributes/translate
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`translate`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das verwendet wird, um zu spezifizieren, ob die _übersetzbaren Attribut_-Werte eines Elements und seine [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen.

Es kann folgende Werte haben:

- ein leerer String oder `yes`, was anzeigt, dass das Element übersetzt werden soll, wenn die Seite lokalisiert wird.
- `no`, was anzeigt, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Translate respektiert und kann auch von Werkzeugen beachtet werden, die von menschlichen Übersetzern verwendet werden. Daher ist es wichtig, dass Webautoren dieses Attribut verwenden, um Inhalte zu kennzeichnen, die nicht übersetzt werden sollen.

## Beispiele

In diesem Beispiel wird das `translate`-Attribut verwendet, um Übersetzungstools zu bitten, den Markennamen des Unternehmens im Footer nicht zu übersetzen.

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- Die [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)-Eigenschaft, die dieses Attribut widerspiegelt.
- [Verwendung des HTML-Attributs translate](https://www.w3.org/International/questions/qa-translate-flag).
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
