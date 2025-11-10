---
title: Call-Stack
slug: Glossary/Call_stack
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Call-Stack** ist ein Mechanismus für einen Interpreter (wie den JavaScript-Interpreter in einem Webbrowser), um seine Position in einem Skript nachzuverfolgen, das mehrere {{Glossary("function", "Funktionen")}} aufruft — welche Funktion derzeit ausgeführt wird und welche Funktionen innerhalb dieser Funktion aufgerufen werden, usw.

- Wenn ein Skript eine Funktion aufruft, fügt der Interpreter sie dem Call-Stack hinzu und beginnt dann mit der Ausführung der Funktion.
- Alle Funktionen, die von dieser Funktion aufgerufen werden, werden weiter oben im Call-Stack hinzugefügt und dort ausgeführt, wo ihre Aufrufe erreicht werden.
- Wenn die aktuelle Funktion abgeschlossen ist, nimmt der Interpreter sie vom Stack und setzt die Ausführung an der Stelle fort, an der sie in der letzten Codeauflistung unterbrochen wurde.
- Wenn der Stack mehr Speicherplatz einnimmt, als ihm zugewiesen wurde, wird ein "Stack-Overflow"-Fehler ausgelöst.

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

Der Call-Stack wird zu Beginn leer sein und der obige Code würde so ausgeführt werden:

1. Ignorieren Sie alle Funktionen, bis der `greeting()` Funktionsaufruf erreicht wird.
2. Fügen Sie die `greeting()` Funktion zur Call-Stack-Liste hinzu, und wir haben:

   ```plain
   - greeting
   ```

3. Führen Sie alle Zeilen des Codes innerhalb der `greeting()` Funktion aus.
4. Gehe zum `sayHi()` Funktionsaufruf.
5. Fügen Sie die `sayHi()` Funktion zur Call-Stack-Liste hinzu, wie:

   ```plain
   - sayHi
   - greeting
   ```

6. Führen Sie alle Zeilen des Codes innerhalb der `sayHi()` Funktion aus, bis deren Ende erreicht ist.
7. Geben Sie die Ausführung an die Zeile zurück, die `sayHi()` aufgerufen hat, und setzen Sie die restliche `greeting()` Funktion fort.
8. Löschen Sie die `sayHi()` Funktion aus unserer Call-Stack-Liste. Nun sieht der Call-Stack so aus:

   ```plain
   - greeting
   ```

9. Wenn alles innerhalb der `greeting()` Funktion ausgeführt wurde, kehren Sie zur aufrufenden Zeile zurück, um den Rest des JS-Codes auszuführen.
10. Löschen Sie die `greeting()` Funktion aus der Call-Stack-Liste. Erneut wird der Call-Stack leer.

Zusammenfassend beginnen wir also mit einem leeren Call-Stack. Immer wenn wir eine Funktion aufrufen, wird sie automatisch dem Call-Stack hinzugefügt. Sobald die Funktion ihren gesamten Code ausgeführt hat, wird sie automatisch aus dem Call-Stack entfernt. Letztendlich ist der Stack wieder leer.

## Siehe auch

- [Call-Stack](https://en.wikipedia.org/wiki/Call_stack) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Funktion")}}
