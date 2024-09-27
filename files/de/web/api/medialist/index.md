---
title: MediaList
slug: Web/API/MediaList
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("CSSOM")}}

Die **`MediaList`**-Schnittstelle repräsentiert die Media Queries eines Stylesheets, z.B. jene, die mit dem `media`-Attribut eines {{htmlelement("link")}}-Elements festgelegt werden.

> **Note:** `MediaList` ist eine dynamische Liste; wenn die Liste durch die unten aufgeführten Eigenschaften oder Methoden aktualisiert wird, ändert sich sofort das Verhalten des Dokuments.

## Instanz-Eigenschaften

- [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - : Ein [Stringifier](/de/docs/Glossary/stringifier), der eine Zeichenkette zurückgibt, die die `MediaList` als Text darstellt, und Ihnen auch ermöglicht, eine neue `MediaList` zu setzen.
- [`MediaList.length`](/de/docs/Web/API/MediaList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Media Queries in der `MediaList` zurück.

## Instanz-Methoden

- [`MediaList.appendMedium()`](/de/docs/Web/API/MediaList/appendMedium)
  - : Fügt eine Media Query zur `MediaList` hinzu.
- [`MediaList.deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium)
  - : Entfernt eine Media Query aus der `MediaList`.
- [`MediaList.item()`](/de/docs/Web/API/MediaList/item)
  - : Ein Getter, der eine Zeichenkette zurückgibt, die eine Media Query als Text darstellt, basierend auf dem Indexwert der Media Query in der `MediaList`. Diese Methode kann auch mit der Klammer- (`[]`) Syntax aufgerufen werden.

## Beispiele

Das folgende Beispiel würde eine textuelle Darstellung der `MediaList` des ersten Stylesheets, das auf das aktuelle Dokument angewendet wird, in die Konsole ausgeben.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
