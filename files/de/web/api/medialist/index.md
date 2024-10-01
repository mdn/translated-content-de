---
title: MediaList
slug: Web/API/MediaList
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("CSSOM")}}

Die **`MediaList`**-Schnittstelle repräsentiert die Media Queries eines Stylesheets, z. B. solche, die mit dem `media`-Attribut eines {{htmlelement("link")}}-Elements gesetzt wurden.

> [!NOTE] `MediaList` ist eine Live-Liste; das Aktualisieren der Liste mit den unten aufgeführten Eigenschaften oder Methoden wird sofort das Verhalten des Dokuments aktualisieren.

## Instanzeigenschaften

- [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der eine Zeichenkette zurückgibt, die die `MediaList` als Text darstellt, und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.
- [`MediaList.length`](/de/docs/Web/API/MediaList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Media Queries in der `MediaList` zurück.

## Instanzmethoden

- [`MediaList.appendMedium()`](/de/docs/Web/API/MediaList/appendMedium)
  - : Fügt der `MediaList` eine Media Query hinzu.
- [`MediaList.deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium)
  - : Entfernt eine Media Query aus der `MediaList`.
- [`MediaList.item()`](/de/docs/Web/API/MediaList/item)
  - : Ein Getter, der eine Zeichenkette zurückgibt, die eine Media Query als Text darstellt, basierend auf dem Indexwert der Media Query in der `MediaList`. Diese Methode kann auch mit der Klammer-Syntax (`[]`) aufgerufen werden.

## Beispiele

Das Folgende würde eine textuelle Darstellung der `MediaList` des ersten auf das aktuelle Dokument angewendeten Stylesheets in die Konsole protokollieren.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
