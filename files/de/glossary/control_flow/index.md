---
title: Kontrollfluss
slug: Glossary/Control_flow
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Kontrollfluss** ist die Reihenfolge, in der der Computer Anweisungen in einem Skript ausführt.

Code wird in der Reihenfolge von der ersten Zeile in der Datei bis zur letzten Zeile ausgeführt, es sei denn, der Computer stößt auf die (äußerst häufigen) Strukturen, die den Kontrollfluss ändern, wie z.B. Bedingungen und Schleifen.

Stellen Sie sich beispielsweise ein Skript vor, das Benutzerdaten aus einem Webseitenformular validiert. Das Skript übermittelt validierte Daten, aber wenn der Benutzer, sagen wir, ein erforderliches Feld leer lässt, fordert das Skript ihn auf, es auszufüllen. Dazu verwendet das Skript eine {{Glossary("Conditional", "Bedingungs-")}} Struktur oder `if...else`, sodass je nachdem, ob das Formular vollständig ist oder nicht, unterschiedlicher Code ausgeführt wird:

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

Ein typisches Skript in {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("PHP", "PHP")}} (und ähnlichen Sprachen) enthält viele Kontrollstrukturen, einschließlich Bedingungen, {{Glossary("Loop", "Schleifen")}} und {{Glossary("Function", "Funktionen")}}. Teile eines Skripts können auch so eingestellt werden, dass sie ausgeführt werden, wenn {{Glossary("Event", "Ereignisse")}} auftreten.

Zum Beispiel könnte der oben erwähnte Ausschnitt innerhalb einer Funktion stehen, die ausgeführt wird, wenn der Benutzer die **Senden**-Schaltfläche für das Formular klickt. Die Funktion könnte auch eine Schleife enthalten, die durch alle Felder im Formular iteriert und jedes davon der Reihe nach überprüft. Rückblickend auf den Code in den `if`- und `else`-Abschnitten könnten die Zeilen `promptUser` und `submitForm` auch Aufrufe an andere Funktionen im Skript sein. Wie Sie sehen können, können Kontrollstrukturen komplexe Verarbeitungsabläufe diktieren, selbst mit nur wenigen Codezeilen.

Kontrollfluss bedeutet, dass Sie beim Lesen eines Skripts nicht nur von Anfang bis Ende lesen müssen, sondern auch die Programmstruktur betrachten und wie diese die Reihenfolge der Ausführung beeinflusst.

## Siehe auch

- [JavaScript-Referenz - Kontrollfluss](/de/docs/Web/JavaScript/Reference#control_flow)
- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Kontrollfluss](https://en.wikipedia.org/wiki/Control_flow) auf Wikipedia
