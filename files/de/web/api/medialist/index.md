---
title: MediaList
slug: Web/API/MediaList
l10n:
  sourceCommit: 494edeb208c312a26b7f5efb0902799d89a2bb33
---

{{APIRef("CSSOM")}}

Das **`MediaList`** Interface repräsentiert die Medienabfragen eines Stylesheets, z.B. diejenigen, die über das `media` Attribut eines {{htmlelement("link")}}-Elements gesetzt werden.

> **Note:** `MediaList` ist eine Live-Liste; das Aktualisieren der Liste mit den unten aufgeführten Eigenschaften oder Methoden wird sofort das Verhalten des Dokuments aktualisieren.

## Instanz-Eigenschaften

- [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - : Ein {{Glossary("stringifier", "stringifier")}}, der eine Zeichenkette zurückgibt, die die `MediaList` als Text darstellt, und Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.
- [`MediaList.length`](/de/docs/Web/API/MediaList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Medienabfragen in der `MediaList` zurück.

## Instanz-Methoden

- [`MediaList.appendMedium()`](/de/docs/Web/API/MediaList/appendMedium)
  - : Fügt eine Medienabfrage zur `MediaList` hinzu.
- [`MediaList.deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium)
  - : Entfernt eine Medienabfrage aus der `MediaList`.
- [`MediaList.item()`](/de/docs/Web/API/MediaList/item)
  - : Ein Getter, der eine Zeichenkette zurückgibt, die eine Medienabfrage als Text darstellt, basierend auf dem Indexwert der Medienabfrage innerhalb der `MediaList`. Diese Methode kann auch mit der Klammer-Syntax (`[]`) aufgerufen werden.
- [`MediaList.toString()`](/de/docs/Web/API/MediaList/toString)
  - : Gibt eine Zeichenketten-Darstellung dieser Medienliste im gleichen Format wie die [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft des Objekts.

## Beispiele

Das Folgende würde eine textuelle Darstellung der `MediaList` des ersten Stylesheets, das auf das aktuelle Dokument angewendet wird, in die Konsole ausgeben.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
