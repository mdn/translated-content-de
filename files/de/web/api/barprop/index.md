---
title: BarProp
slug: Web/API/BarProp
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Das **`BarProp`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) repräsentiert die Benutzeroberflächenelemente des Webbrowsers, die für Skripte auf Webseiten zugänglich sind. Jedes der folgenden Interface-Elemente wird durch ein `BarProp`-Objekt dargestellt.

- [`Window.locationbar`](/de/docs/Web/API/Window/locationbar)
  - : Die Adressleiste des Browsers.
- [`Window.menubar`](/de/docs/Web/API/Window/menubar)
  - : Die Menüleiste des Browsers.
- [`Window.personalbar`](/de/docs/Web/API/Window/personalbar)
  - : Die persönliche Leiste des Browsers.
- [`Window.scrollbars`](/de/docs/Web/API/Window/scrollbars)
  - : Die Bildlaufleisten des Browsers.
- [`Window.statusbar`](/de/docs/Web/API/Window/statusbar)
  - : Die Statusleiste des Browsers.
- [`Window.toolbar`](/de/docs/Web/API/Window/toolbar)
  - : Die Werkzeugleiste des Browsers.

Das `BarProp`-Interface wird nicht direkt angesprochen, sondern über eines dieser Elemente.

## Instanz-Eigenschaften

- [`BarProp.visible`](/de/docs/Web/API/BarProp/visible) {{ReadOnlyInline}}
  - : Ein {{jsxref("Boolean")}}, der wahr ist, wenn die Leiste, die durch das verwendete Interface-Element repräsentiert wird, sichtbar ist.

## Beispiele

Das folgende Beispiel gibt ein `BarProp`-Objekt in der Konsole aus, das die Adressleiste darstellt.

```js
console.log(window.locationbar);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
