---
title: MDN Web Docs Änderungsprotokoll
slug: MDN/Changelog
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{MDNSidebar}}

Dieses Dokument bietet eine Aufzeichnung von MDN-Inhaltsprozessen, -strukturen und bewährten Praktiken, die sich geändert haben, und wann sie sich geändert haben. Es ist nützlich, um regelmäßigen Mitwirkenden zu ermöglichen, zu überprüfen, was sich am Prozess der Erstellung von Inhalten für MDN geändert hat.

## Oktober 2022

Die [MDN-Projektdokumentation](/de/docs/MDN) wurde aktualisiert und in zwei Hauptkategorien unterteilt:

- **Writing:** Dokumentation darüber, wie man für MDN schreibt, was wir dokumentieren, Definitionen von experimentell, Stilrichtlinien und so weiter finden Sie auf den Seiten der [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines).
- **Community:** Informationen über Open-Source-Etikette, Diskussionen, Prozesse für Pull Requests und Issues, Benutzer und Teams sowie allgemeine Tipps für Mitwirkende finden Sie auf den Seiten der [Community](/de/docs/MDN/Community).

Weitere Einzelheiten zu den Änderungen finden Sie im Blog-Beitrag zur [Überarbeitung der Beitragsdokumentation der MDN Web Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/), der bei Mozilla Hacks veröffentlicht wurde.

## November 2021

Die Umstellung auf Markdown ist abgeschlossen, daher wurde der alte CSS-Stilführer entfernt und zur Seite Markdown in MDN weitergeleitet.

## Juli 2021

### Aktualisierungen des CSS-Stilführers für Markdown

Mehrere Aktualisierungen des CSS-Stilführers, um den Übergang zu Markdown widerzuspiegeln und Autoren zu ermutigen, HTML auf eine Markdown-kompatible Weise zu schreiben.

- Hinweis- und Warnungsboxen haben keinen separaten `<h4>`-Titel mehr (z.B. `<h4>Warning</h4>`).

  Sehen Sie sich unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für die korrekte Syntax an.

- Die `seoSummary`-Klasse sollte nicht mehr verwendet werden.
- Die `standard-table`-Klasse sollte nicht mehr verwendet werden. Das von dieser Klasse bereitgestellte Styling wird nun standardmäßig auf Tabellen angewendet.
- Das {{HTMLElement("details")}}-Element sollte nicht mehr verwendet werden.
- Die Klassen `hidden`, `example-good` und `example-bad`, die ursprünglich hauptsächlich für Codeblöcke gedacht waren, konnten auch auf andere Elemente angewendet werden. Jetzt können sie nur noch auf Codeblöcke angewendet werden.

## Februar 2021

### Mehrzeilige JavaScript- und API-Syntaxblöcke

Bisher wurden die Syntaxblöcke von JavaScript-Built-in- und WebAPI-Methoden, die auf mehrere verschiedene Arten verwendet werden können (d.h. verschiedene Parameter sind optional), häufig unter Verwendung der [BNF formalen Syntaxnotation](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) geschrieben. Insbesondere wurden eckige Klammern verwendet, um optionale Parameter anzuzeigen.

Dies war problematisch — viele Entwickler waren davon verwirrt, und es steht im Konflikt mit gültigen Syntaxformen in anderen Programmiersprachen (z.B. ist `[]` auch ein Array in JavaScript).

Daher schreiben wir nun verschiedene Syntaxformen einer Methode in separaten Zeilen innerhalb des Syntaxblocks. Weitere Informationen und Beispiele finden Sie unter [Syntaxabschnitte > Mehrzeilig/Optionale Parameter](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters).

### Dokumentation von Mixins

[Interface mixins](https://heycam.github.io/webidl/#idl-interface-mixins) in Web IDL werden in Spezifikationen verwendet, um Web-APIs zu definieren. Für Webentwickler sind sie nicht direkt sichtbar; sie fungieren als Helfer, um die Wiederholung von API-Definitionen zu vermeiden.

Bisher haben wir häufig eine Einstiegsseite für eine Mixin-Klasse selbst definiert und die definierten Mitglieder auf Unterseiten darunter platziert, bevor wir von den Einstiegsseiten der Schnittstellen, die diese Mixins implementieren, darauf verlinkt haben. Dies war verwirrend für die Leser, da Mixins Spezifikationskonstrukte sind — Sie greifen nie mit den Mixin-Klassen auf die definierten Mitglieder zu. Um diese Verwirrung zu vermeiden, haben wir die Seiten für Mitglieder, die auf Mixins definiert sind, direkt unter den implementierenden Klassenseiten platziert. Für weitere Informationen siehe die Leitfadenseite über [wie man eine API-Referenz schreibt](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) und die Diskussion, die zu dieser Änderung führte bei [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Januar 2021

### Markup für Hinweis- und Warnungsboxen

Früher wurden auf MDN Hinweis- und Warnungsboxen von `<div>`-Elementen mit den Klassen `note` bzw. `warning` umgeben. Meistens begannen ihre ersten Absätze mit einem im `<strong>` eingeschlossenen `note`- oder `warning`-Text.

Im Januar änderte sich dies — das `class`-Attribut sollte jetzt eine zusätzliche `notecard`-Klasse enthalten, und der starke Text wird stattdessen in einer Überschrift am oberen Rand des Blocks eingeschlossen.

Siehe unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für weitere Informationen und Syntaxrichtlinien.
