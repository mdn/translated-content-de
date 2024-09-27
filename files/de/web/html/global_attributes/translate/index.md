---
title: translate
slug: Web/HTML/Global_attributes/translate
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{HTMLSidebar("Global_attributes")}}

Das **`translate`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut, das verwendet wird, um zu bestimmen, ob die _übersetzbaren Attributwerte_ eines Elements und dessen [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen.

Es kann die folgenden Werte haben:

- ein leerer String oder `yes`, was anzeigt, dass das Element übersetzt werden soll, wenn die Seite lokalisiert wird.
- `no`, was anzeigt, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Translate respektiert und möglicherweise auch von Werkzeugen, die von menschlichen Übersetzern verwendet werden. Daher ist es wichtig, dass Web-Autoren dieses Attribut verwenden, um Inhalte zu kennzeichnen, die nicht übersetzt werden sollen.

## Beispiele

In diesem Beispiel wird das `translate`-Attribut verwendet, um Übersetzungswerkzeuge zu bitten, den Markennamen des Unternehmens im Footer nicht zu übersetzen.

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

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Die [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)-Eigenschaft, die dieses Attribut widerspiegelt.
- [Verwendung des translate-Attributs in HTML](https://www.w3.org/International/questions/qa-translate-flag).
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang)
