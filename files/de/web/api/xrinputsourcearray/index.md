---
title: XRInputSourceArray
slug: Web/API/XRInputSourceArray
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}{{SeeCompatTable}}

Die Schnittstelle **`XRInputSourceArray`** repräsentiert eine _Live_-Liste von WebXR-Eingabequellen und wird als Rückgabewert der {{domxref("XRSession")}}-Eigenschaft {{domxref("XRSession.inputSources", "inputSources")}} verwendet. Jeder Eintrag ist ein {{domxref("XRInputSource")}}, das ein an das WebXR-System angeschlossenes Eingabegerät darstellt.

Zusätzlich zur Möglichkeit, die Eingabequellen in der Liste mit der Standard-Array-Notation (das heißt mit Indexnummern in eckigen Klammern) zuzugreifen, stehen Methoden zur Verfügung, die den Einsatz von Iteratoren und die {{domxref("XRInputSourceArray.forEach", "forEach()")}}-Methode ermöglichen.

## Instanz-Eigenschaften

_Die folgenden Eigenschaften sind bei `XRInputSourceArray`-Objekten verfügbar._

- {{domxref("XRInputSourceArray.length", "length")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Anzahl der {{domxref("XRInputSource")}}-Objekte in der Liste.

## Instanz-Methoden

_Die folgenden Methoden sind bei `XRInputSourceArray`-Objekten verfügbar. Sie können auch die Funktionen des [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Typs verwenden._

- {{domxref("XRInputSourceArray.entries", "entries()")}} {{Experimental_Inline}}
  - : Gibt einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, mit dem Sie die Liste der Schlüssel/Wert-Paare in der Liste durchlaufen können. Jeder zurückgegebene Eintrag ist ein Array, dessen erster Wert der Index und dessen zweiter Wert das {{domxref("XRInputSource")}} an diesem Index ist.
- {{domxref("XRInputSourceArray.forEach", "forEach()")}} {{Experimental_Inline}}
  - : Iteriert über jeden Eintrag in der Liste, in der Reihenfolge von ersten bis letzten.
- {{domxref("XRInputSourceArray.keys", "keys()")}} {{Experimental_Inline}}
  - : Eine Liste der Schlüssel, die den Einträgen in der Eingabequellenliste entsprechen.
- {{domxref("XRInputSourceArray.values", "values()")}} {{Experimental_Inline}}
  - : Gibt einen `iterator` zurück, mit dem Sie alle Werte in der Liste durchgehen können. Jeder Eintrag ist ein einzelnes {{domxref("XRInputSource")}}-Objekt.

Zusätzlich zu diesen Methoden können Sie die Array-Notation verwenden, um auf Elemente in der Liste über den Index zuzugreifen. Zum Beispiel ruft der untenstehende Codeausschnitt eine Funktion `handleInput()` auf, wobei er das erste Element in der Eingabequellenliste übergibt, falls die Liste nicht leer ist.

```js
let sources = xrSession.inputSources;
if (sources.length > 0) {
  handleInput(sources[0]);
}
```

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
