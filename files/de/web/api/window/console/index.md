---
title: "Window: console-Eigenschaft"
short-title: console
slug: Web/API/Window/console
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}

Die **`Window.console`**-Eigenschaft gibt eine Referenz auf das [`console`](/de/docs/Web/API/Console)-Objekt zurück, das Methoden zum Protokollieren von Informationen in der Konsole des Browsers bereitstellt. Diese Methoden sind ausschließlich für Debuggingzwecke vorgesehen und sollten nicht zum Präsentieren von Informationen an Endbenutzer verwendet werden.

## Beispiele

### Protokollierung in der Konsole

Das erste Beispiel protokolliert Text in der Konsole.

```js
console.log("An error occurred while loading the content");
```

Im nächsten Beispiel wird ein Objekt in der Konsole protokolliert, wobei die Felder des Objekts mit erweiterbaren Steuerflächen angezeigt werden können:

```js
console.dir(someObject);
```

Weitere Beispiele finden Sie im [Beispiele](/de/docs/Web/API/console#examples)-Abschnitt des Artikels über [`console`](/de/docs/Web/API/console).

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Derzeit gibt es viele Implementierungsunterschiede zwischen den Browsern, aber es wird daran gearbeitet, diese zusammenzuführen und konsistenter zu machen.
