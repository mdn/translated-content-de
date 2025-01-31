---
title: MDN Web Docs Änderungsprotokoll
slug: MDN/Writing_guidelines/Changelog
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieses Dokument bietet eine Aufzeichnung von MDN-Inhaltsprozessen, -konstruktionen und -best Practices, die sich geändert haben und wann sie sich geändert haben. Es ist nützlich für regelmäßige Mitwirkende, um nachzusehen und zu erfahren, was sich am Prozess der Inhaltserstellung für MDN geändert hat.

## Oktober 2022

Die [MDN-Projektdokumentation](/de/docs/MDN) wurde aktualisiert und in zwei Hauptkategorien organisiert:

- **Writing:** Dokumentation darüber, wie man für MDN schreibt, was wir dokumentieren, Definitionen von experimentell, Stilrichtlinien usw. finden Sie unter den Seiten der [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines).
- **Community:** Informationen über Open-Source-Etikette, Diskussionen, Prozesse für Pull-Requests und Issues, Benutzer und Teams sowie allgemeine Hinweise für Mitwirkende finden Sie auf den [Community](/de/docs/MDN/Community)-Seiten.

Weitere Details zu den Änderungen finden Sie im [Revamp of MDN Web Docs Contribution Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) Blogbeitrag, der auf Mozilla Hacks veröffentlicht wurde.

## November 2021

Die Umstellung auf Markdown ist abgeschlossen, also entfernen Sie die alte CSS-Stilrichtlinie und leiten Sie auf die Markdown in MDN-Seite um.

## Juli 2021

### Aktualisierungen der CSS-Stilrichtlinie für Markdown

Mehrere Aktualisierungen der CSS-Stilrichtlinie wurden vorgenommen, um den Übergang zu Markdown zu reflektieren und Autoren dazu zu ermutigen, HTML auf eine mit Markdown kompatible Weise zu schreiben.

- Hinweis- und Warnboxen haben keinen separaten `<h4>`-Titel für den Titel mehr (z.B. `<h4>Warnung</h4>`).

  Siehe unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für die korrekte Syntax.

- Die `seoSummary`-Klasse sollte nicht mehr verwendet werden.
- Die `standard-table`-Klasse sollte nicht mehr verwendet werden. Das Styling, das durch diese Klasse bereitgestellt wird, wird jetzt standardmäßig auf Tabellen angewendet.
- Das {{HTMLElement("details")}}-Element sollte nicht mehr verwendet werden.
- Die Klassen `hidden`, `example-good` und `example-bad` wurden hauptsächlich für Codeblöcke verwendet, konnten aber auch auf andere Elemente angewendet werden. Jetzt können sie nur noch auf Codeblöcke angewendet werden.

## Februar 2021

### Mehrzeilige JavaScript- und API-Syntaxblöcke

Früher wurden die Syntaxblöcke von JavaScript-Builtin- und WebAPI-Methoden, die auf verschiedene Weise verwendet werden können (d.h. verschiedene Parameter sind optional), häufig mit der [BNF-Formalsyntax-Notation](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) geschrieben. Besonders auffällig war, dass eckige Klammern verwendet wurden, um optionale Parameter zu kennzeichnen.

Dies war problematisch — viele Entwickler waren verwirrt darüber, und es steht im Konflikt mit gültigen Syntaxformen in anderen Programmiersprachen (z.B. `[]` ist auch ein Array in JavaScript).

Daher schreiben wir von nun an mehrere Syntaxformen einer Methode auf separate Zeilen innerhalb des Syntaxblocks. Siehe [Syntax sections > Multiple lines/Optional parameters](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters) für weitere Informationen und Beispiele.

### Dokumentation von Mixins

[Interface-Mixins](https://heycam.github.io/webidl/#idl-interface-mixins) im Web IDL werden in Spezifikationen verwendet, um Web-APIs zu definieren.
Für Webentwickler sind sie nicht direkt sichtbar; sie dienen als Helfer, um die Wiederholung von API-Definitionen zu vermeiden.

Früher haben wir häufig eine Einstiegsseite für eine Mixin-Klasse selbst definiert und die definierten Mitglieder auf Unterseiten darunter gesetzt, bevor wir von den Einstiegsseiten der Schnittstellen aus, die diese Mixins implementieren, darauf verwiesen.
Dies war für Leser verwirrend, da Mixins Spezifikationskonstrukte sind — Sie greifen nie mit den Mixin-Klassen auf die definierten Mitglieder zu.
Um diese Verwirrung zu vermeiden, haben wir die Seiten für Mitglieder, die auf Mixins definiert sind, direkt unter die Seiten der implementierenden Klassen gestellt.
Weitere Details finden Sie auf der Leitfaden-Seite über
[wie man eine API-Referenz schreibt](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins)
und der Diskussion, die zu dieser Änderung geführt hat, unter [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Januar 2021

### Markup für Hinweis- und Warnboxen

Früher wurden auf MDN Hinweis- und Warnboxen von `<div>`-Elementen mit `note`- und `warning`-Klassen umschlossen. Häufig begann ihr erster Absatz mit einem `<strong>`-umfassten `note`- oder `warning`-Text.

Im Januar änderte sich dies — das `class`-Attribut sollte jetzt eine zusätzliche `notecard`-Klasse enthalten, und der starke Text wird stattdessen in einen Überschriftstext oben im Block aufgenommen.

Siehe unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für weitere Informationen und Syntaxanleitungen.
