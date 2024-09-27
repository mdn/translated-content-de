---
title: Call stack
slug: Glossary/Call_stack
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **Call Stack** ist ein Mechanismus für einen Interpreter (wie den JavaScript-Interpreter in einem Webbrowser), um seinen Platz in einem Skript zu verfolgen, das mehrere [Funktionen](/de/docs/Glossary/function) aufruft — welche Funktion derzeit ausgeführt wird und welche Funktionen innerhalb dieser Funktion aufgerufen werden, usw.

- Wenn ein Skript eine Funktion aufruft, fügt der Interpreter sie dem Call Stack hinzu und beginnt dann mit der Ausführung der Funktion.
- Alle Funktionen, die von dieser Funktion aufgerufen werden, werden weiter oben in den Call Stack eingefügt und dort ausgeführt, wo ihre Aufrufe erreicht werden.
- Wenn die aktuelle Funktion abgeschlossen ist, entfernt der Interpreter sie aus dem Stack und setzt die Ausführung dort fort, wo es in der vorherigen Codeliste aufgehört hat.
- Wenn der Stack mehr Speicherplatz einnimmt, als ihm zugewiesen wurde, wird ein "Stack Overflow"-Fehler ausgelöst.

## Beispiel

```js
function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here
```

Der Call Stack wird zu Beginn leer sein, und der obige Code würde folgendermaßen ausgeführt:

1. Ignorieren Sie alle Funktionen, bis die `greeting()`-Funktion aufgerufen wird.
2. Fügen Sie die `greeting()`-Funktion zur Call Stack-Liste hinzu, und wir haben:

   ```plain
   - greeting
   ```

3. Führen Sie alle Codezeilen innerhalb der `greeting()`-Funktion aus.
4. Gelangen Sie zum Aufruf der `sayHi()`-Funktion.
5. Fügen Sie die `sayHi()`-Funktion zur Call Stack-Liste hinzu, wie folgt:

   ```plain
   - sayHi
   - greeting
   ```

6. Führen Sie alle Codezeilen innerhalb der `sayHi()`-Funktion aus, bis deren Ende erreicht ist.
7. Kehren Sie zur Zeile zurück, die `sayHi()` aufgerufen hat, und setzen Sie die Ausführung des restlichen `greeting()`-Funktion fort.
8. Löschen Sie die `sayHi()`-Funktion aus unserer Call Stack-Liste. Jetzt sieht der Call Stack aus wie:

   ```plain
   - greeting
   ```

9. Wenn alles innerhalb der `greeting()`-Funktion ausgeführt wurde, kehren Sie zu ihrer aufrufenden Zeile zurück, um den Rest des JS-Codes weiter auszuführen.
10. Löschen Sie die `greeting()`-Funktion aus der Call Stack-Liste. Ein weiteres Mal wird der Call Stack leer.

Zusammenfassend beginnen wir also mit einem leeren Call Stack. Immer wenn wir eine Funktion aufrufen, wird sie automatisch zum Call Stack hinzugefügt. Sobald die Funktion ihren gesamten Code ausgeführt hat, wird sie automatisch aus dem Call Stack entfernt. Letztendlich ist der Stack wieder leer.

## Siehe auch

- [Call stack](https://en.wikipedia.org/wiki/Call_stack) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [Function](/de/docs/Glossary/Function)
