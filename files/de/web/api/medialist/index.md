---
title: MediaList
slug: Web/API/MediaList
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("CSSOM")}}

Das **`MediaList`**-Interface repräsentiert die Media-Queries eines Stylesheets, z.B. jene, die unter Verwendung des `media`-Attributs eines {{htmlelement("link")}}-Elements gesetzt sind.

> [!NOTE] > `MediaList` ist eine Live-Liste; das Aktualisieren der Liste mit den unten aufgeführten Eigenschaften oder Methoden wird das Verhalten des Dokuments sofort aktualisieren.

## Instanzeigenschaften

- [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der einen String zurückgibt, der die `MediaList` als Text darstellt, und es Ihnen auch ermöglicht, eine neue `MediaList` zu setzen.
- [`MediaList.length`](/de/docs/Web/API/MediaList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Media-Queries in der `MediaList` zurück.

## Instanzmethoden

- [`MediaList.appendMedium()`](/de/docs/Web/API/MediaList/appendMedium)
  - : Fügt der `MediaList` eine Media-Query hinzu.
- [`MediaList.deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium)
  - : Entfernt eine Media-Query aus der `MediaList`.
- [`MediaList.item()`](/de/docs/Web/API/MediaList/item)
  - : Ein Getter, der einen String zurückgibt, der eine Media-Query als Text darstellt, basierend auf dem Indexwert der Media-Query innerhalb der `MediaList`. Diese Methode kann auch mit der Klammer-Syntax (`[]`) aufgerufen werden.
- [`MediaList.toString()`](/de/docs/Web/API/MediaList/toString)
  - : Gibt eine Zeichenfolgenrepräsentation dieser Media-Liste im gleichen Format wie die [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft des Objekts zurück.

## Beispiele

Das folgende Beispiel gibt eine textuelle Darstellung der `MediaList` des ersten auf das aktuelle Dokument angewendeten Stylesheets in der Konsole aus.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
