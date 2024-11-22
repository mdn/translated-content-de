---
title: Asynchrones JavaScript
slug: Learn/JavaScript/Asynchronous
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

In diesem Modul betrachten wir {{Glossary("asynchronous", "asynchrones")}} {{Glossary("JavaScript", "JavaScript")}}, warum es wichtig ist und wie es verwendet werden kann, um potenziell blockierende Operationen, wie das Abrufen von Ressourcen von einem Server, effektiv zu handhaben.

## Voraussetzungen

Asynchrones JavaScript ist ein ziemlich fortgeschrittenes Thema. Es wird empfohlen, die Module [Erste Schritte mit JavaScript](/de/docs/Learn/JavaScript/First_steps) und [JavaScript-Bausteine](/de/docs/Learn/JavaScript/Building_blocks) durchzuarbeiten, bevor Sie dies versuchen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Einführung in asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous/Introducing)
  - : In diesem Artikel lernen wir über **synchrones** und **asynchrones** Programmieren, warum wir oft asynchrone Techniken verwenden müssen, und die Probleme im Zusammenhang mit der Art und Weise, wie asynchrone Funktionen in JavaScript historisch umgesetzt wurden.
- [Anleitung zur Verwendung von Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises)
  - : Hier führen wir `promises` ein und zeigen, wie man `promise`-basierte APIs verwendet. Wir werden auch die Schlüsselwörter `async` und `await` einführen.
- [Implementierung einer `promise`-basierten API](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
  - : Dieser Artikel erklärt, wie Sie Ihre eigene `promise`-basierte API implementieren können.
- [Einführung in Worker](/de/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
  - : Worker ermöglichen es Ihnen, bestimmte Aufgaben in einem separaten Thread auszuführen, um Ihren Hauptcode reaktionsfähig zu halten. In diesem Artikel werden wir eine langlaufende synchrone Funktion umschreiben, um einen Worker zu verwenden.

## Bewertungen

- [Sequenzieren von Animationen](/de/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)
  - : Die Bewertung fordert Sie auf, `promises` zu verwenden, um eine Reihe von Animationen in einer bestimmten Reihenfolge abzuspielen.

## Siehe auch

- [Asynchronous Programming](https://eloquentjavascript.net/11_async.html) aus dem fantastischen [Eloquent JavaScript](https://eloquentjavascript.net/) Online-Buch von Marijn Haverbeke.
