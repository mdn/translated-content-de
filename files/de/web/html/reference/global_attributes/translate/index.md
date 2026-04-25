---
title: "`translate` HTML-Globalattribut"
short-title: translate
slug: Web/HTML/Reference/Global_attributes/translate
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`translate`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das verwendet wird, um anzugeben, ob die \_übersetzbaren Attribut_werte eines Elements und seine [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder beim Lokalisieren der Seite übersetzt oder unverändert gelassen werden sollen.

Es kann folgende Werte haben:

- ein leerer String oder `yes`, was darauf hinweist, dass das Element beim Lokalisieren der Seite übersetzt werden sollte.
- `no`, was bedeutet, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Translate respektiert und möglicherweise auch von Werkzeugen, die von menschlichen Übersetzern genutzt werden. Daher ist es wichtig, dass Webautoren dieses Attribut verwenden, um Inhalte zu kennzeichnen, die nicht übersetzt werden sollen.

## Beispiele

In diesem Beispiel wird das `translate` Attribut verwendet, um Übersetzungswerkzeuge zu bitten, den Markennamen des Unternehmens im Footer nicht zu übersetzen.

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
- Die [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)-Eigenschaft, die dieses Attribut wiedergibt.
- [Verwendung des HTML-Attributs translate](https://www.w3.org/International/questions/qa-translate-flag).
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut
