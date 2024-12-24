---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{MathMLRef}}

**Mathematische Auszeichnungssprache (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als allgemeine Spezifikation für Browser, Office-Suiten, [Computeralgebrasysteme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/) Leser, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-basierte Generatoren entworfen. Diese Herangehensweise war jedoch nicht optimal für das Web: der [auf Semantik fokussierte Teil](https://w3c.github.io/mathml/#contm) wurde nie in Browsern implementiert, während der [auf mathematische Darstellung fokussierte Teil](https://w3c.github.io/mathml/#presm) zu unvollständigen und inkonsistenten Browserimplementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist eine Teilmenge mit detaillierteren Implementierungsregeln, basierend auf Regularien von [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist für Browser maßgeschneidert und speziell darauf ausgelegt, gut mit anderen Webstandards, einschließlich [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript), zu arbeiten.

Im Folgenden finden Sie Links zur Dokumentation, Beispiele und Werkzeuge zur Arbeit mit MathML. MDN verwendet [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer unbeständigen Standardisierungsgeschichte können in bestehenden Implementierungen und Webinhalten weiterhin alte MathML-Funktionen auftauchen.

> [!NOTE]
> Es wird Entwicklern und Autoren dringend empfohlen, auf MathML Core umzusteigen und möglicherweise andere Webtechnologien zu nutzen, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML-Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## Einsteiger-Tutorials

- [Erste Schritte mit MathML](/de/docs/Web/MathML/Guides/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln darin einfügt, wobei einige Elemente vorgestellt werden.
- [Textcontainer](/de/docs/Web/MathML/Guides/Text_containers)
  - : Jetzt, da Sie eine bessere Vorstellung von MathML haben, gehen wir weiter zu Textcontainern (Variablen, Zahlen, Operatoren, ...), die als Bausteine von MathML-Formeln verwendet werden.
- [Brüche und Wurzeln](/de/docs/Web/MathML/Guides/Fractions_and_roots)
  - : Aufbauend auf Textcontainern beschreibt dieser Artikel, wie man komplexere MathML-Ausdrücke durch das Verschachteln von Brüchen und Wurzeln erstellt.
- [Skripte](/de/docs/Web/MathML/Guides/Scripts)
  - : Wir setzen die Übersicht über grundlegende mathematische Notationen fort und konzentrieren uns auf den Aufbau von MathML-Elementen mit Skripten.
- [Tabellen](/de/docs/Web/MathML/Guides/Tables)
  - : Sobald alle grundlegenden mathematischen Notationen bekannt sind, bleibt noch die tabellarische Anordnung zu betrachten, die für matrixartige Ausdrücke und andere komplexe mathematische Darstellungen verwendet werden kann.
- [Drei berühmte mathematische Formeln](/de/docs/Web/MathML/Guides/Three_famous_mathematical_formulas) <sup>Herausforderung</sup>
  - : Mit dem, was Sie in den letzten Artikeln gelernt haben, sollten Sie bereits in der Lage sein, relativ komplexe MathML-Formeln zu schreiben. Diese Herausforderung gibt Ihnen die Möglichkeit dazu.

## Leitfaden

- [MathML verfassen](/de/docs/Web/MathML/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie deren Ausgaben in Webinhalte integriert werden können.
- [Schriften für MathML](/de/docs/Web/MathML/Fonts)
  - : Wie Benutzer solche mathematischen Schriften installieren können, um MathML in Browsern korrekt darzustellen.

## MathML-Referenz

- [MathML-Element-Referenz](/de/docs/Web/MathML/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und mobile Browser.
- [MathML-Attribut-Referenz](/de/docs/Web/MathML/Attribute)
  - : Informationen zu MathML-Attributen, die das Erscheinungsbild oder das Verhalten von Elementen verändern.
- [MathML-Attributwerte](/de/docs/Web/MathML/Attribute)
  - : Weitere Informationen über MathML-Attributwerte.
- [MathML-Beispiele](/de/docs/Web/MathML/Examples)
  - : MathML-Beispiele und Beispiele, die Ihnen helfen zu verstehen, wie es funktioniert.

## Hilfe von der Community erhalten

- [W3C Math Home](https://www.w3.org/Math/)
- [Probleme im GitHub w3c/mathml-Repository melden](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mailarchiv](https://lists.w3.org/Archives/Public/www-math/)

## Werkzeuge

- [W3C Validator](https://validator.w3.org/)
- [W3C's Wiki-Seite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Browser-Kompatibilität

{{Compat}}
