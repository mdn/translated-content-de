---
title: Call stack
slug: Glossary/Call_stack
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **Call Stack** ist ein Mechanismus für einen Interpreter (wie den JavaScript-Interpreter in einem Webbrowser), um seine Position in einem Skript, das mehrere [Funktionen](/de/docs/Glossary/function) aufruft, im Auge zu behalten — welche Funktion derzeit ausgeführt wird und welche Funktionen innerhalb dieser Funktion aufgerufen werden, usw.

- Wenn ein Skript eine Funktion aufruft, fügt der Interpreter sie dem Call Stack hinzu und beginnt dann, die Funktion auszuführen.
- Alle Funktionen, die von dieser Funktion aufgerufen werden, werden weiter oben auf dem Call Stack hinzugefügt und ausgeführt, wenn ihre Aufrufe erreicht werden.
- Wenn die aktuelle Funktion abgeschlossen ist, entfernt der Interpreter sie vom Stapel und setzt die Ausführung dort fort, wo sie in der letzten Code-Auflistung aufgehört hat.
- Wenn der Stapel mehr Speicher benötigt als zugewiesen, wird ein "Stack Overflow"-Fehler ausgelöst.

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

Der Call Stack ist zu Beginn leer, und der obige Code würde so ausgeführt:

1. Alle Funktionen ignorieren, bis die `greeting()`-Funktion aufgerufen wird.
2. Die `greeting()`-Funktion zur Call Stack-Liste hinzufügen, und wir haben:

   ```plain
   - greeting
   ```

3. Alle Codezeilen innerhalb der `greeting()`-Funktion ausführen.
4. Zur `sayHi()`-Funktionsaufruf gelangen.
5. Die `sayHi()`-Funktion zur Call Stack-Liste hinzufügen, wie:

   ```plain
   - sayHi
   - greeting
   ```

6. Alle Codezeilen innerhalb der `sayHi()`-Funktion ausführen, bis zum Ende.
7. Die Ausführung zur Zeile zurückbringen, die `sayHi()` aufgerufen hat, und den Rest der `greeting()`-Funktion weiter ausführen.
8. Die `sayHi()`-Funktion von unserer Call Stack-Liste löschen. Nun sieht der Call Stack aus wie:

   ```plain
   - greeting
   ```

9. Wenn alles innerhalb der `greeting()`-Funktion ausgeführt wurde, zur aufrufenden Zeile zurückkehren, um den Rest des JS-Codes auszuführen.
10. Die `greeting()`-Funktion aus der Call Stack-Liste löschen. Der Call Stack ist erneut leer.

Zusammengefasst beginnen wir also mit einem leeren Call Stack. Jedes Mal, wenn wir eine Funktion aufrufen, wird sie automatisch dem Call Stack hinzugefügt. Sobald die Funktion ihren gesamten Code ausgeführt hat, wird sie automatisch vom Call Stack entfernt. Letztendlich ist der Stack wieder leer.

## Siehe auch

- [Call stack](https://en.wikipedia.org/wiki/Call_stack) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [Funktion](/de/docs/Glossary/Function)
