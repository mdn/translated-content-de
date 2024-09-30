---
title: "Window: console-Eigenschaft"
short-title: console
slug: Web/API/Window/console
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}

Die **`Window.console`**-Eigenschaft gibt eine Referenz auf das [`console`](/de/docs/Web/API/Console)-Objekt zurück, das Methoden zum Protokollieren von Informationen in der Konsole des Browsers bereitstellt. Diese Methoden sind nur für Debugging-Zwecke gedacht und sollten nicht verwendet werden, um Informationen an Endbenutzer zu präsentieren.

## Beispiele

### Protokollierung in die Konsole

Das erste Beispiel protokolliert Text in die Konsole.

```js
console.log("An error occurred while loading the content");
```

Das nächste Beispiel protokolliert ein Objekt in die Konsole, wobei die Felder des Objekts mit Hilfe von Aufklappelementen erweiterbar sind:

```js
console.dir(someObject);
```

Weitere Beispiele finden Sie im [Beispiele](/de/docs/Web/API/console#examples)-Abschnitt des [`console`](/de/docs/Web/API/console)-Artikels.

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Derzeit gibt es viele Unterschiede in der Implementierung zwischen den Browsern, aber es wird daran gearbeitet, sie zusammenzuführen und konsistenter zu gestalten.
