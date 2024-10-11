---
title: translate
slug: Web/HTML/Global_attributes/translate
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar("Global_attributes")}}

Das **`translate`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das verwendet wird, um festzulegen, ob die _übersetzbaren Attributwerte_ eines Elements und seine [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder beim Lokalisieren der Seite übersetzt oder unverändert gelassen werden sollen.

Es kann die folgenden Werte annehmen:

- leerer String oder `yes`, was anzeigt, dass das Element übersetzt werden soll, wenn die Seite lokalisiert wird.
- `no`, was anzeigt, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Translate respektiert und kann auch von Werkzeugen, die von menschlichen Übersetzern verwendet werden, berücksichtigt werden. Daher ist es wichtig, dass Webautoren dieses Attribut verwenden, um Inhalte zu kennzeichnen, die nicht übersetzt werden sollen.

## Beispiele

In diesem Beispiel wird das Attribut `translate` verwendet, um Übersetzungswerkzeuge darum zu bitten, den Markennamen des Unternehmens im Footer nicht zu übersetzen.

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
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
