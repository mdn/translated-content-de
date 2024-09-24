---
title: Änderungsprotokoll der MDN Web Docs
slug: MDN/Changelog
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{MDNSidebar}}

Dieses Dokument bietet eine Aufzeichnung der MDN-Inhaltsprozesse, Konstrukte und bewährten Praktiken, die sich geändert haben und wann sie sich geändert haben. Es ist nützlich, um regelmäßigen Mitwirkenden die Möglichkeit zu geben, nachzusehen und zu sehen, was sich am Prozess der Content-Erstellung für MDN geändert hat.

## Oktober 2022

Die [MDN-Projektdokumentation](/de/docs/MDN) wurde aktualisiert und in zwei Hauptkategorien organisiert:

- **Writing:** Dokumentation darüber, wie für MDN geschrieben wird, was wir dokumentieren, Definitionen von experimentell, Stilrichtlinien und ähnliches finden sich auf den Seiten der [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines).
- **Community:** Informationen über das Verhalten im Open-Source-Bereich, Diskussionen, Verfahren für Pull-Requests und Issues, Benutzer und Teams und allgemeine Hinweise für Mitwirkende finden sich auf den [Community](/de/docs/MDN/Community)-Seiten.

Weitere Details zu den Änderungen finden Sie im Blog-Post [Revamp of MDN Web Docs Contribution Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) veröffentlicht auf Mozilla Hacks.

## November 2021

Die Umstellung auf Markdown ist abgeschlossen, daher wurde der alte CSS-Stilguide entfernt und eine Weiterleitung zur "Markdown in MDN"-Seite eingerichtet.

## Juli 2021

### Aktualisierungen des CSS-Stilguides für Markdown

Mehrere Aktualisierungen des CSS-Stilguides, um den Übergang zu Markdown zu reflektieren und Autoren zu ermutigen, HTML in einer mit Markdown kompatiblen Weise zu schreiben.

- Hinweis- und Warnkästen haben keinen separaten `<h4>`-Titel mehr (z.B. `<h4>Warning</h4>`).

  Siehe unser [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Guide für die korrekte Syntax.

- Die `seoSummary`-Klasse sollte nicht mehr verwendet werden.
- Die `standard-table`-Klasse sollte nicht mehr verwendet werden. Die von dieser Klasse bereitgestellten Stile werden jetzt standardmäßig auf Tabellen angewendet.
- Das {{HTMLElement("details")}}-Element sollte nicht mehr verwendet werden.
- Die Klassen `hidden`, `example-good` und `example-bad` wurden hauptsächlich für Codeblöcke verwendet, könnten aber auch auf andere Elemente angewendet werden. Jetzt können sie nur noch auf Codeblöcken verwendet werden.

## Februar 2021

### Mehrzeilige JavaScript- und API-Syntaxblöcke

Bisher wurden die Syntaxblöcke von JavaScript-Builtin- und WebAPI-Methoden, die in mehrfach unterschiedlichen Weisen verwendet werden können (d.h. verschiedene Parameter sind optional), häufig in [BNF-Formalsyntax-Notation](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) geschrieben. Insbesondere wurden eckige Klammern verwendet, um optionale Parameter zu kennzeichnen.

Dies war problematisch — viele Entwickler waren davon verwirrt, und es steht im Konflikt mit gültigen Syntaxformen in anderen Programmiersprachen (z.B. `[]` ist auch ein Array in JavaScript).

Aus diesem Grund schreiben wir nun mehrere Syntaxformen einer Methode auf separaten Zeilen innerhalb des Syntaxblocks. Weitere Informationen und Beispiele finden Sie in den Abschnitten [Syntaxabschnitte > Mehrere Zeilen/Optionale Parameter](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters).

### Dokumentation von Mixins

[Interface-Mixins](https://heycam.github.io/webidl/#idl-interface-mixins) in Web IDL werden in Spezifikationen verwendet, um Web-APIs zu definieren. Für Webentwickler sind sie nicht direkt beobachtbar; sie fungieren als Hilfsmittel, um zu verhindern, dass API-Definitionen wiederholt werden.

Bisher definierten wir häufig eine Einstiegsseite für eine Mixin-Klasse selbst und legten die definierten Mitglieder auf Unterseiten darunter, bevor wir von den Einstiegsseiten der Schnittstellen, die diese Mixins implementieren, darauf verwiesen haben. Dies war für die Leser verwirrend, da Mixins Spezifikationskonstrukte sind – man greift nie direkt auf die definierten Mitglieder über die Mixin-Klassen zu. Um diese Verwirrung zu vermeiden, haben wir die Seiten für die auf Mixins definierten Mitglieder direkt unter den implementierenden Klassenseiten platziert. Weitere Details finden Sie auf der Leitfadenseite zum [Schreiben einer API-Referenz](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) und in der Diskussion, die zu dieser Änderung geführt hat, bei [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Januar 2021

### Markup für Hinweis- und Warnkästen

Bisher wurden auf MDN Hinweis- und Warnkästen von `<div>`-Elementen mit den Klassen `note` und `warning` umhüllt. Meistens begannen ihre ersten Absätze mit einem `<strong>`-umwickelten `note` oder `warning`-Text.

Im Januar änderte sich dies — das `class`-Attribut sollte jetzt eine zusätzliche `notecard`-Klasse enthalten, und der starke Text wird stattdessen in einer Überschrift oben im Block eingefügt.

Siehe unser [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Guide für weitere Informationen und Syntaxanleitungen.
