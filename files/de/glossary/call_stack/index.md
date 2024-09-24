---
title: Aufruf-Stack
slug: Glossary/Call_stack
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **Aufruf-Stack** ist ein Mechanismus für einen Interpreter (wie den JavaScript-Interpreter in einem Webbrowser), um seine Position in einem Skript nachzuverfolgen, das mehrere {{glossary("function","Funktionen")}} aufruft — welche Funktion gerade ausgeführt wird und welche Funktionen innerhalb dieser Funktion aufgerufen werden, usw.

- Wenn ein Skript eine Funktion aufruft, fügt der Interpreter diese dem Aufruf-Stack hinzu und beginnt dann mit der Ausführung der Funktion.
- Alle Funktionen, die von dieser Funktion aufgerufen werden, werden weiter oben im Aufruf-Stack hinzugefügt und ausgeführt, wenn ihre Aufrufe erreicht werden.
- Wenn die aktuelle Funktion beendet ist, entfernt der Interpreter sie aus dem Stack und setzt die Ausführung dort fort, wo es im letzten Code-Listing unterbrochen wurde.
- Wenn der Stack mehr Speicherplatz beansprucht, als ihm zugewiesen wurde, wird ein "Stack Overflow"-Fehler ausgelöst.

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

Der Aufruf-Stack ist zu Beginn leer, und der obige Code würde wie folgt ausgeführt:

1. Alle Funktionen ignorieren, bis der Aufruf der Funktion `greeting()` erreicht wird.
2. Die Funktion `greeting()` zur Liste des Aufruf-Stacks hinzufügen, und wir haben:

   ```plain
   - greeting
   ```

3. Alle Codezeilen innerhalb der Funktion `greeting()` ausführen.
4. Zur Funktion `sayHi()` gelangen.
5. Die Funktion `sayHi()` zur Liste des Aufruf-Stacks hinzufügen, wie:

   ```plain
   - sayHi
   - greeting
   ```

6. Alle Codezeilen innerhalb der Funktion `sayHi()` ausführen, bis deren Ende erreicht ist.
7. Die Ausführung zur Zeile zurückgeben, die `sayHi()` aufgerufen hat, und den Rest der Funktion `greeting()` weiter ausführen.
8. Die Funktion `sayHi()` aus unserer Aufruf-Stack-Liste löschen. Jetzt sieht der Aufruf-Stack so aus:

   ```plain
   - greeting
   ```

9. Wenn alles innerhalb der Funktion `greeting()` ausgeführt wurde, zur aufrufenden Zeile zurückkehren, um den Rest des JS-Codes weiter auszuführen.
10. Die Funktion `greeting()` aus der Aufruf-Stack-Liste löschen. Der Aufruf-Stack wird erneut leer.

Zusammengefasst, wir beginnen mit einem leeren Aufruf-Stack. Jedes Mal, wenn wir eine Funktion aufrufen, wird sie automatisch zum Aufruf-Stack hinzugefügt. Sobald die Funktion all ihren Code ausgeführt hat, wird sie automatisch aus dem Aufruf-Stack entfernt. Letztendlich ist der Stack wieder leer.

## Siehe auch

- [Call stack](https://en.wikipedia.org/wiki/Call_stack) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Function")}}
