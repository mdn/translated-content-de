---
title: translate
slug: Web/HTML/Reference/Global_attributes/translate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`translate`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das verwendet wird, um anzugeben, ob die _übersetzbaren Attribut_ Werte eines Elements und seine [`Text`](/de/docs/Web/API/Text)-Knotenkinder übersetzt werden sollen, wenn die Seite lokalisiert wird, oder ob sie unverändert bleiben sollen.

Es kann die folgenden Werte haben:

- leerer String oder `yes`, was anzeigt, dass das Element übersetzt werden soll, wenn die Seite lokalisiert wird.
- `no`, was anzeigt, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Translate respektiert und kann auch von Werkzeugen respektiert werden, die von menschlichen Übersetzern verwendet werden. Daher ist es wichtig, dass Webautoren dieses Attribut verwenden, um Inhalte zu kennzeichnen, die nicht übersetzt werden sollen.

## Beispiele

In diesem Beispiel wird das `translate`-Attribut verwendet, um Übersetzungswerkzeuge darum zu bitten, den Markennamen des Unternehmens im Footer nicht zu übersetzen.

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
- [Verwendung des HTML-translate-Attributs](https://www.w3.org/International/questions/qa-translate-flag).
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut.
