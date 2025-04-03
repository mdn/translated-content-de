---
title: MediaList
slug: Web/API/MediaList
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

Das **`MediaList`** Interface repräsentiert die Medienabfragen eines Stylesheets, z.B. diejenigen, die mit dem `media`-Attribut eines {{htmlelement("link")}}-Elements festgelegt werden.

> **Note:** `MediaList` ist eine dynamische Liste; das Aktualisieren der Liste mit den unten aufgeführten Eigenschaften oder Methoden wird sofort das Verhalten des Dokuments aktualisieren.

## Instanzeigenschaften

- [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der eine Zeichenkette zurückgibt, die die `MediaList` als Text repräsentiert, und es Ihnen auch ermöglicht, eine neue `MediaList` festzulegen.
- [`MediaList.length`](/de/docs/Web/API/MediaList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Medienabfragen in der `MediaList` zurück.

## Instanzmethoden

- [`MediaList.appendMedium()`](/de/docs/Web/API/MediaList/appendMedium)
  - : Fügt eine Medienabfrage zur `MediaList` hinzu.
- [`MediaList.deleteMedium()`](/de/docs/Web/API/MediaList/deleteMedium)
  - : Entfernt eine Medienabfrage aus der `MediaList`.
- [`MediaList.item()`](/de/docs/Web/API/MediaList/item)
  - : Ein Getter, der eine Zeichenkette zurückgibt, die eine Medienabfrage als Text darstellt, basierend auf dem Indexwert der Medienabfrage in der `MediaList`. Diese Methode kann auch mit der Klammer-Syntax (`[]`) aufgerufen werden.
- [`MediaList.toString()`](/de/docs/Web/API/MediaList/toString)
  - : Gibt eine Zeichenkettenrepräsentation dieser Medienliste im selben Format zurück wie die [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft des Objekts.

## Beispiele

Das folgende Beispiel würde eine textliche Darstellung der `MediaList` des ersten Stylesheets ausgeben, das auf das aktuelle Dokument angewendet wird.

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
