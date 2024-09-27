---
title: MDN Web Docs Änderungsprotokoll
slug: MDN/Changelog
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{MDNSidebar}}

Dieses Dokument bietet eine Aufzeichnung von MDN-Inhaltsprozessen, -konstrukten und -best Practices, die sich geändert haben, und wann sie sich geändert haben. Es ist nützlich für regelmäßige Mitwirkende, um nachzusehen, was sich am Prozess der Erstellung von Inhalten für MDN geändert hat.

## Oktober 2022

Die [MDN-Projektdokumentation](/de/docs/MDN) wurde aktualisiert und in zwei Hauptkategorien organisiert:

- **Writing:** Dokumentation darüber, wie man für MDN schreibt, was wir dokumentieren, Definitionen von experimentell, Stilrichtlinien und so weiter finden Sie unter den [Writing guidelines](/de/docs/MDN/Writing_guidelines) Seiten.
- **Community:** Informationen über Open-Source-Etikette, Diskussionen, Prozesse für Pull-Requests und Probleme, Benutzer und Teams sowie allgemeine Hinweise für Mitwirkende finden Sie unter den [Community](/de/docs/MDN/Community) Seiten.

Weitere Details zu den Änderungen finden Sie im [Revamp of MDN Web Docs Contribution Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) Blogbeitrag, der bei Mozilla Hacks veröffentlicht wurde.

## November 2021

Die Umstellung auf Markdown ist abgeschlossen, daher den alten CSS-Stil-Leitfaden entfernen und zur Markdown-Seite in MDN umleiten.

## Juli 2021

### Aktualisierungen des CSS-Stil-Leitfadens für Markdown

Mehrere Aktualisierungen des CSS-Stil-Leitfadens, um den Wechsel zu Markdown widerzuspiegeln und Autoren zu ermutigen, HTML auf eine mit Markdown kompatible Weise zu schreiben.

- Hinweis- und Warnkästen haben keinen separaten `<h4>`-Titel mehr (z.B. `<h4>Warnung</h4>`).

  Sehen Sie sich unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für die korrekte Syntax an.

- Die `seoSummary`-Klasse sollte nicht mehr verwendet werden.
- Die `standard-table`-Klasse sollte nicht mehr verwendet werden. Das durch diese Klasse bereitgestellte Styling wird jetzt standardmäßig auf Tabellen angewendet.
- Das {{HTMLElement("details")}}-Element sollte nicht mehr verwendet werden.
- Die Klassen `hidden`, `example-good` und `example-bad`, die hauptsächlich für Codeblöcke verwendet wurden, können jetzt nur noch auf Codeblöcken verwendet werden.

## Februar 2021

### Mehrzeilige JavaScript- und API-Syntaxblöcke

Bisher wurden die Syntaxblöcke der JavaScript-eigenen und WebAPI-Methoden, die auf verschiedene Weise verwendet werden können (d.h. verschiedene Parameter sind optional), häufig mit der [formalen BNF-Syntaxnotation](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) geschrieben. Besonders auffällig: Eckige Klammern wurden verwendet, um optionale Parameter zu kennzeichnen.

Dies war problematisch — viele Entwickler waren dadurch verwirrt, und es steht im Widerspruch zu gültigen Syntaxformen in anderen Programmiersprachen (z.B. `[]` ist auch ein Array in JavaScript).

Daher schreiben wir nun mehrere Syntaxformen einer Methode in separaten Zeilen innerhalb des Syntaxblocks. Weitere Informationen und Beispiele finden Sie unter [Syntax sections > Multiple lines/Optional parameters](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters).

### Dokumentation von Mixins

[Interface mixins](https://heycam.github.io/webidl/#idl-interface-mixins) in Web IDL werden in Spezifikationen verwendet, um Web-APIs zu definieren. Für Webentwickler sind sie nicht direkt beobachtbar; sie fungieren als Hilfsmittel, um die Wiederholung von API-Definitionen zu vermeiden.

Bisher haben wir oft eine Startseite für eine Mixin-Klasse selbst definiert und die definierten Mitglieder auf Unterseiten darunter platziert, bevor wir sie von den Startseiten der Schnittstellen verlinkten, die diese Mixins implementieren. Dies war für Leser verwirrend, da Mixins Spezifikationskonstrukte sind — Sie greifen nie über die Mixin-Klassen auf die definierten Mitglieder zu. Um diese Verwirrung zu vermeiden, haben wir stattdessen die Seiten für Mitglieder, die auf Mixins definiert sind, direkt unter den Seiten der implementierenden Klassen platziert. Weitere Details finden Sie auf der Leitfadenseite über [wie man eine API-Referenz schreibt](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) und in der Diskussion, die zu dieser Änderung führte, bei [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Januar 2021

### Markup für Hinweis- und Warnkästen

Früher wurden auf MDN Hinweis- und Warnkästen durch `<div>`-Elemente mit `note`- und `warning`-Klassen umschlossen. Häufig begann ihr erster Absatz mit einem `<strong>`-eingefassten `note`- oder `warning`-Text.

Im Januar hat sich dies geändert — das `class`-Attribut sollte nun eine zusätzliche `notecard`-Klasse enthalten, und der hervorgehobene Text wird stattdessen in einer Überschrift am Anfang des Blocks eingeschlossen.

Sehen Sie sich unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für weitere Informationen und Syntaxleitfäden an.
