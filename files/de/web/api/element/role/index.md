---
title: "Element: role-Eigenschaft"
short-title: role
slug: Web/API/Element/role
l10n:
  sourceCommit: 0b9c68dc63f9c6803cced8d9a76c31012d87b530
---

{{ ApiRef("DOM") }}

Die **`role`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt die explizit festgelegte [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) für das Element zurück.

Alle HTML-Elemente haben eine implizite ARIA-Rolle, selbst wenn diese Rolle [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) ist. Diese semantische Zuordnung ermöglicht es Werkzeugen, die Interaktion mit dem Objekt in einer Weise darzustellen und zu unterstützen, die mit den Benutzererwartungen über andere Objekte dieses Typs übereinstimmt. Das `role`-Attribut wird verwendet, um die ARIA-Rolle des Elements explizit festzulegen und die implizite Rolle zu überschreiben. Zum Beispiel könnte ein {{htmlelement("ul")}}, das eine implizite [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle hat, explizit den [`role="treegrid"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) zugewiesen bekommen. Die `role`-Eigenschaft spiegelt den explizit gesetzten Wert des `role`-Attributs wider — in diesem Fall `treegrid`; sie gibt nicht die implizite `list`-Rolle des Elements zurück, es sei denn, sie wurde explizit festgelegt.

Die vollständige Liste der definierten ARIA-Rollen finden Sie auf der Referenzseite [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).

## Wert

Ein String; der Wert des `role`-Attributs oder `null`, wenn nicht explizit festgelegt.

## Beispiele

In diesem Beispiel erhalten Bilder mit leeren oder fehlenden `alt`-Attributen eine `role` von [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role):

```js
const images = document.querySelectorAll("img");
images.forEach((image) => {
  if (!image.alt) {
    image.role = "presentation";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ElementInternals.role`](/de/docs/Web/API/ElementInternals/role)
- [ARIA-Attribute](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
