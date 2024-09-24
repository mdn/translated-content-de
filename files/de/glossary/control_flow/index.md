---
title: Kontrollfluss
slug: Glossary/Control_flow
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Kontrollfluss** ist die Reihenfolge, in der der Computer Anweisungen in einem Skript ausführt.

Der Code wird in der Reihenfolge von der ersten Zeile in der Datei bis zur letzten Zeile ausgeführt, es sei denn, der Computer stößt auf die (extrem häufigen) Strukturen, die den Kontrollfluss ändern, wie z.B. Konditionale und Schleifen.

Zum Beispiel, stellen Sie sich ein Skript vor, das verwendet wird, um Benutzerdaten von einem Webseitenformular zu validieren. Das Skript übermittelt validierte Daten, aber wenn der Benutzer beispielsweise ein erforderliches Feld leer lässt, fordert das Skript ihn auf, es auszufüllen. Dazu verwendet das Skript eine {{Glossary("Conditional", "Konditional")}}-Struktur oder `if...else`, so dass unterschiedlicher Code je nachdem ausgeführt wird, ob das Formular vollständig ist oder nicht:

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

Ein typisches Skript in {{glossary("JavaScript")}} oder {{glossary("PHP")}} (und ähnlichen Sprachen) enthält viele Kontrollstrukturen, einschließlich Konditionalen, {{Glossary("Loop", "Schleifen")}} und {{Glossary("Function", "Funktionen")}}. Teile eines Skripts können auch so eingestellt werden, dass sie ausgeführt werden, wenn {{Glossary("Event", "Ereignisse")}} eintreten.

Zum Beispiel könnte der obige Auszug innerhalb einer Funktion sein, die ausgeführt wird, wenn der Benutzer den **Senden**-Button für das Formular anklickt. Die Funktion könnte auch eine Schleife enthalten, die durch alle Felder im Formular iteriert und jedes der Reihe nach überprüft. Rückblickend auf den Code in den `if`- und `else`-Abschnitten könnten die Zeilen `promptUser` und `submitForm` ebenfalls Aufrufe zu anderen Funktionen im Skript sein. Wie Sie sehen können, können Kontrollstrukturen komplexe Verarbeitungsabläufe vorschreiben, selbst mit nur wenigen Codezeilen.

Kontrollfluss bedeutet, dass, wenn Sie ein Skript lesen, Sie nicht nur von Anfang bis Ende lesen müssen, sondern auch die Programmstruktur betrachten und wie sie die Ausführungsreihenfolge beeinflusst.

## Siehe auch

- [JavaScript Reference - Control flow](/de/docs/Web/JavaScript/Reference#control_flow)
- [Control flow and error handling](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Kontrollfluss](https://en.wikipedia.org/wiki/Control_flow) auf Wikipedia
