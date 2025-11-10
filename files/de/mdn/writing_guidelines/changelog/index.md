---
title: MDN Web Docs Änderungsprotokoll
slug: MDN/Writing_guidelines/Changelog
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieses Dokument bietet eine Aufzeichnung der MDN-Inhaltsprozesse, Konstrukte und bewährten Praktiken, die sich geändert haben, sowie wann sie geändert wurden. Es ist nützlich für regelmäßige Beitragende, um zu überprüfen, was sich am Prozess zur Erstellung von Inhalten für MDN geändert hat.

## Oktober 2022

Die [MDN-Projektdokumentation](/de/docs/MDN) wurde aktualisiert und in zwei Hauptkategorien organisiert:

- **Schreiben:** Dokumentation darüber, wie man für MDN schreibt, was wir dokumentieren, Definitionen von experimentell, Stilrichtlinien und so weiter sind auf den Seiten [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines) zu finden.
- **Gemeinschaft:** Informationen über Open-Source-Etikette, Diskussionen, Prozesse für Pull-Requests und Probleme, Benutzer und Teams sowie allgemeine Hinweise für Beitragende sind auf den Seiten [Gemeinschaft](/de/docs/MDN/Community) zu finden.

Weitere Details zu den Änderungen finden Sie im Blogbeitrag [Überarbeitung der MDN Web Docs Beitragsdokumentation](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) auf Mozilla Hacks.

## November 2021

Die Umstellung auf Markdown ist abgeschlossen, daher den alten CSS-Stil-Leitfaden entfernen und auf die Seite Markdown in MDN umleiten.

## Juli 2021

### Aktualisierungen des CSS-Stilleitfadens für Markdown

Mehrere Aktualisierungen des CSS-Stilleitfadens, um die Umstellung auf Markdown widerzuspiegeln und Autoren dazu zu ermutigen, HTML auf eine mit Markdown kompatible Weise zu schreiben.

- Hinweis- und Warnboxen haben keinen separaten `<h4>`-Titel mehr (z.B. `<h4>Warnung</h4>`).

  Siehe unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für die korrekte Syntax.

- Die `seoSummary`-Klasse sollte nicht mehr verwendet werden.
- Die `standard-table`-Klasse sollte nicht mehr verwendet werden. Das von dieser Klasse bereitgestellte Styling wird jetzt standardmäßig auf Tabellen angewendet.
- Das {{HTMLElement("details")}}-Element sollte nicht mehr verwendet werden.
- Die Klassen `hidden`, `example-good` und `example-bad` wurden hauptsächlich für Codeblöcke verwendet, konnten aber auch auf anderen Elementen verwendet werden. Jetzt können sie nur noch auf Codeblöcken verwendet werden.

## Februar 2021

### Mehrzeilige JavaScript- und API-Syntaxblöcke

Zuvor wurden die Syntaxblöcke von JavaScript eingebauten und WebAPI-Methoden, die auf verschiedene Weise verwendet werden können (d.h. verschiedene Parameter sind optional), häufig unter Verwendung der [BNF-Formsprache Notation](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) geschrieben. Am bemerkenswertesten waren die eckigen Klammern, die optionale Parameter bezeichneten.

Das war problematisch – viele Entwickler waren darüber verwirrt, und es widerspricht gültigen Syntaxformen in anderen Programmiersprachen (z.B. `[]` ist auch ein Array in JavaScript).

Deshalb schreiben wir nun in Zukunft mehrere Syntaxformen einer Methode auf separaten Zeilen innerhalb des Syntaxblocks. Für weitere Informationen und Beispiele siehe [Syntaxabschnitte > Mehrere Zeilen/Optionale Parameter](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters).

### Dokumentation von Mixins

[Interface Mixins](https://heycam.github.io/webidl/#idl-interface-mixins) im Web IDL werden in Spezifikationen verwendet, um Web-APIs zu definieren. Für Webentwickler sind sie nicht direkt beobachtbar; sie dienen als Hilfsmittel, um die Wiederholung von API-Definitionen zu vermeiden.

Zuvor haben wir häufig eine Hauptseite für eine Mixin-Klasse selbst definiert und die definierten Mitglieder auf Unterseiten unterhalb dieser platziert, bevor wir von den Hauptseiten der Schnittstellen, die diese Mixins implementieren, auf sie verlinkt haben. Dies war verwirrend für Leser, da Mixins Spezkonstrukte sind – die definierten Mitglieder werden nie mit den Mixin-Klassen aufgerufen. Um diese Verwirrung zu vermeiden, haben wir die Seiten für Mitglieder, die auf Mixins definiert sind, direkt unter den implementierenden Klassenseiten platziert. Für weitere Details siehe die Leitfadenseite zur [Anleitung zum Schreiben einer API-Referenz](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) und die Diskussion, die zu dieser Änderung führte, auf [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Januar 2021

### Markup für Hinweis- und Warnkästen

Zuvor wurden Hinweis- und Warnkästen auf MDN mit `<div>`-Elementen mit `note`- und `warning`-Klassen umgeben. Häufig begannen ihre ersten Absätze mit einem `<strong>` umwickelten `note` oder `warning` Text.

Im Januar änderte sich dies – das `class` Attribut sollte nun eine zusätzliche `notecard` Klasse beinhalten, und der starke Text ist stattdessen in einer Überschrift am oberen Rand des Blocks enthalten.

Siehe unseren [Markdown in MDN](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) Leitfaden für weitere Informationen und Syntaxanleitungen.
