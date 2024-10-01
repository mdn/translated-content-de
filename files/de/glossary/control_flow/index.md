---
title: Control flow
slug: Glossary/Control_flow
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Control flow** ist die Reihenfolge, in der der Computer Anweisungen in einem Skript ausführt.

Der Code wird normalerweise von der ersten Zeile in der Datei bis zur letzten Zeile ausgeführt, es sei denn, der Computer trifft auf die (extrem häufigen) Strukturen, die den Kontrollfluss ändern, wie Bedingungen und Schleifen.

Stellen Sie sich zum Beispiel ein Skript vor, das zur Validierung von Benutzerdaten aus einem Webseitenformular verwendet wird. Das Skript übermittelt validierte Daten, aber wenn der Benutzer beispielsweise ein erforderliches Feld leer lässt, fordert das Skript ihn auf, es auszufüllen. Dazu verwendet das Skript eine {{Glossary("Conditional", "Bedingungsstruktur")}} oder `if...else`, sodass je nach Vollständigkeit des Formulars unterschiedlicher Code ausgeführt wird:

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

Ein typisches Skript in {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("PHP", "PHP")}} (und ähnlichem) enthält viele Kontrollstrukturen, einschließlich Bedingungen, {{Glossary("Loop", "Schleifen")}} und {{Glossary("Function", "Funktionen")}}. Teile eines Skripts können auch so festgelegt sein, dass sie ausgeführt werden, wenn {{Glossary("Event", "Ereignisse")}} eintreten.

Beispielsweise könnte der obige Auszug innerhalb einer Funktion sein, die ausgeführt wird, wenn der Benutzer die **Absenden**-Schaltfläche für das Formular klickt. Die Funktion könnte auch eine Schleife enthalten, die durch alle Felder des Formulars iteriert und jedes der Reihe nach überprüft. Rückblickend auf den Code in den `if`- und `else`-Abschnitten könnten die Zeilen `promptUser` und `submitForm` ebenfalls Aufrufe zu anderen Funktionen im Skript sein. Wie Sie sehen können, können Kontrollstrukturen komplexe Verarbeitungsabläufe diktieren, selbst mit nur wenigen Codezeilen.

Kontrollfluss bedeutet, dass Sie beim Lesen eines Skripts nicht nur von Anfang bis Ende lesen müssen, sondern auch die Programmstruktur und deren Einfluss auf die Ausführungsreihenfolge betrachten müssen.

## Siehe auch

- [JavaScript Reference - Control flow](/de/docs/Web/JavaScript/Reference#control_flow)
- [Control flow and error handling](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Control flow](https://en.wikipedia.org/wiki/Control_flow) auf Wikipedia
