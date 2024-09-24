---
title: BarProp
slug: Web/API/BarProp
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die **`BarProp`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) repräsentiert die Benutzerschnittstellenelemente des Webbrowsers, die in Skripten auf Webseiten zugänglich sind. Jedes der folgenden Schnittstellenelemente wird durch ein `BarProp`-Objekt dargestellt.

- {{domxref("Window.locationbar")}}
  - : Die Adressleiste des Browsers.
- {{domxref("Window.menubar")}}
  - : Die Menüleiste des Browsers.
- {{domxref("Window.personalbar")}}
  - : Die Persönliche Leiste des Browsers.
- {{domxref("Window.scrollbars")}}
  - : Die Scrollleisten des Browsers.
- {{domxref("Window.statusbar")}}
  - : Die Statusleiste des Browsers.
- {{domxref("Window.toolbar")}}
  - : Die Symbolleiste des Browsers.

Die `BarProp`-Schnittstelle wird nicht direkt, sondern über eines dieser Elemente aufgerufen.

## Instanz-Eigenschaften

- {{domxref("BarProp.visible")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Boolean")}}, der true ist, wenn die durch das verwendete Schnittstellenelement dargestellte Leiste sichtbar ist.

## Beispiele

Das folgende Beispiel gibt ein `BarProp`-Objekt in die Konsole aus, das die Adressleiste repräsentiert.

```js
console.log(window.locationbar);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
