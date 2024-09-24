---
title: Übersetzen
slug: Web/HTML/Global_attributes/translate
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{HTMLSidebar("Global_attributes")}}

Das **`translate`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufzählbares](/de/docs/Glossary/Enumerated) Attribut, das verwendet wird, um anzugeben, ob die _übersetzbaren Attributwerte_ eines Elements und seine {{domxref("Text")}}-Knoten-Kinder bei der Lokalisierung der Seite übersetzt oder unverändert gelassen werden sollen.

Es kann die folgenden Werte haben:

- leerer String oder `yes`, was anzeigt, dass das Element übersetzt werden soll, wenn die Seite lokalisiert wird.
- `no`, was anzeigt, dass das Element nicht übersetzt werden darf.

Obwohl nicht alle Browser dieses Attribut erkennen, wird es von automatischen Übersetzungssystemen wie Google Translate respektiert und möglicherweise auch von Werkzeugen, die von menschlichen Übersetzern verwendet werden. Daher ist es wichtig, dass Webautoren dieses Attribut verwenden, um Inhalte zu markieren, die nicht übersetzt werden sollen.

## Beispiele

In diesem Beispiel wird das `translate` Attribut verwendet, um Übersetzungswerkzeuge zu bitten, den Markennamen des Unternehmens im Footer nicht zu übersetzen.

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- Die {{domxref("HTMLElement.translate")}}-Eigenschaft, die dieses Attribut widerspiegelt.
- [Verwendung des `translate` Attributs von HTML](https://www.w3.org/International/questions/qa-translate-flag).
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang)
