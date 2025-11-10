---
title: HTML `translate` Globales Attribut
short-title: translate
slug: Web/HTML/Reference/Global_attributes/translate
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`translate`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das verwendet wird, um anzugeben, ob die \_übersetzbaren Attribut_werte eines Elements und seine [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder bei der Lokalisierung der Seite übersetzt werden sollen oder unverändert bleiben sollen.

Es kann die folgenden Werte annehmen:

- leerer String oder `yes`, was angibt, dass das Element übersetzt werden soll, wenn die Seite lokalisiert wird.
- `no`, was angibt, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Übersetzer berücksichtigt und möglicherweise auch von Werkzeugen, die von menschlichen Übersetzern verwendet werden. Daher ist es wichtig, dass Web-Entwickler dieses Attribut verwenden, um Inhalte zu kennzeichnen, die nicht übersetzt werden sollen.

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
- [Verwendung des `translate`-Attributs in HTML](https://www.w3.org/International/questions/qa-translate-flag).
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
