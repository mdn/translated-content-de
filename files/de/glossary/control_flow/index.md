---
title: Kontrollfluss
slug: Glossary/Control_flow
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Kontrollfluss** ist die Reihenfolge, in der der Computer Anweisungen in einem Skript ausführt.

Code wird in der Regel von der ersten bis zur letzten Zeile in der Datei ausgeführt, es sei denn, der Computer trifft auf die (extrem häufigen) Strukturen, die den Kontrollfluss ändern, wie z.B. Bedingungsanweisungen und Schleifen.

Zum Beispiel, stellen Sie sich ein Skript vor, das zur Validierung von Benutzerdaten aus einem Webseitenformular verwendet wird. Das Skript übermittelt validierte Daten, aber wenn der Benutzer, sagen wir, ein erforderliches Feld leer lässt, fordert das Skript ihn auf, es auszufüllen. Dazu verwendet das Skript eine [Bedingungsstruktur](/de/docs/Glossary/Conditional) oder `if...else`, sodass unterschiedlicher Code ausgeführt wird, abhängig davon, ob das Formular vollständig ist oder nicht:

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

Ein typisches Skript in [JavaScript](/de/docs/Glossary/JavaScript) oder [PHP](/de/docs/Glossary/PHP) (und ähnliche) enthält viele Kontrollstrukturen, einschließlich Bedingungsanweisungen, [Schleifen](/de/docs/Glossary/Loop) und [Funktionen](/de/docs/Glossary/Function). Teile eines Skripts können auch so eingestellt sein, dass sie ausgeführt werden, wenn [Ereignisse](/de/docs/Glossary/Event) auftreten.

Zum Beispiel könnte der oben dargestellte Ausschnitt innerhalb einer Funktion sein, die ausgeführt wird, wenn der Benutzer die **Absenden**-Schaltfläche des Formulars klickt. Die Funktion könnte auch eine Schleife enthalten, die alle Felder des Formulars durchläuft und jedes nacheinander überprüft. Wenn man sich den Code in den `if`- und `else`-Abschnitten ansieht, könnten die Zeilen `promptUser` und `submitForm` ebenfalls Aufrufe zu anderen Funktionen im Skript sein. Wie Sie sehen können, können Kontrollstrukturen komplexe Flüsse der Verarbeitung diktieren, selbst mit nur wenigen Codezeilen.

Kontrollfluss bedeutet, dass Sie, wenn Sie ein Skript lesen, nicht nur von Anfang bis Ende lesen müssen, sondern auch die Programmstruktur betrachten müssen und wie sie die Ausführungsreihenfolge beeinflusst.

## Siehe auch

- [JavaScript Referenz - Kontrollfluss](/de/docs/Web/JavaScript/Reference#control_flow)
- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Kontrollfluss](https://en.wikipedia.org/wiki/Control_flow) auf Wikipedia
