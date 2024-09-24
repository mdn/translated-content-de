---
title: MediaList
slug: Web/API/MediaList
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("CSSOM")}}

Die **`MediaList`**-Schnittstelle repräsentiert die Media Queries eines Stylesheets, z. B. jene, die über das `media`-Attribut eines {{htmlelement("link")}}-Elements gesetzt werden.

> **Note:** `MediaList` ist eine Live-Liste; das Aktualisieren der Liste mit den unten aufgeführten Eigenschaften oder Methoden wirkt sich sofort auf das Verhalten des Dokuments aus.

## Instanz-Eigenschaften

- {{domxref("MediaList.mediaText")}}
  - : Ein {{Glossary("stringifier")}}, der eine Zeichenkette zurückgibt, die die `MediaList` als Text darstellt, und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.
- {{domxref("MediaList.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Media Queries in der `MediaList` zurück.

## Instanz-Methoden

- {{domxref("MediaList.appendMedium()")}}
  - : Fügt der `MediaList` eine Media Query hinzu.
- {{domxref("MediaList.deleteMedium()")}}
  - : Entfernt eine Media Query aus der `MediaList`.
- {{domxref("MediaList.item()")}}
  - : Ein Getter, der eine Zeichenkette zurückgibt, die eine Media Query als Text darstellt, basierend auf dem Indexwert der Media Query innerhalb der `MediaList`. Diese Methode kann auch mit der Klammer-Syntax (`[]`) aufgerufen werden.

## Beispiele

Das folgende Beispiel würde eine textuelle Darstellung der `MediaList` des ersten auf das aktuelle Dokument angewendeten Stylesheets in die Konsole ausgeben.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
