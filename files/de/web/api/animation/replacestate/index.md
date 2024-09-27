---
title: "Animation: replaceState-Eigenschaft"
short-title: replaceState
slug: Web/API/Animation/replaceState
l10n:
  sourceCommit: e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte **`Animation.replaceState`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt an, ob die Animation [vom Browser automatisch entfernt wurde](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations), nachdem sie durch eine andere Animation ersetzt wurde.

## Wert

Ein String, der den Ersetzungszustand der Animation darstellt. Der Wert kann einer der folgenden sein:

- `active`
  - : Der anfängliche Wert des Ersetzungszustands der Animation beim Erstellen der Animation.
- `persisted`
  - : Die Animation wurde explizit durch den Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) auf ihr gespeichert.
- `removed`
  - : Die Animation wurde vom Browser automatisch entfernt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
- [`remove`](/de/docs/Web/API/Animation/remove_event)-Ereignis
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
