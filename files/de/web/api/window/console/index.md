---
title: "Fenster: Konsole-Eigenschaft"
short-title: Konsole
slug: Web/API/Window/console
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}

Die **`Window.console`**-Eigenschaft gibt eine Referenz auf das {{domxref("console")}}-Objekt zurück, das Methoden zum Protokollieren von Informationen in der Konsole des Browsers bereitstellt. Diese Methoden sind nur für Debugging-Zwecke gedacht und sollten nicht zum Anzeigen von Informationen für Endbenutzer verwendet werden.

## Beispiele

### In die Konsole protokollieren

Das erste Beispiel protokolliert Text in die Konsole.

```js
console.log("An error occurred while loading the content");
```

Das nächste Beispiel protokolliert ein Objekt in die Konsole, wobei die Felder des Objekts mit erweiterten Darstellungswidgets aufklappbar sind:

```js
console.dir(someObject);
```

Weitere Beispiele finden Sie im [Beispiele](/de/docs/Web/API/console#examples)-Abschnitt des [`console`](/de/docs/Web/API/console)-Artikels.

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Derzeit gibt es viele Implementierungsunterschiede zwischen den Browsern, aber es wird daran gearbeitet, sie zusammenzubringen und konsistenter zu machen.
