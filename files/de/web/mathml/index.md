---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{MathMLRef}}

Die **Mathematische Auszeichnungssprache (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als eine allgemeine Spezifikation für Browser, Office-Suiten, [Computer-Algebra-Systeme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/)-Leser und auf [LaTeX](https://en.wikipedia.org/wiki/LaTeX) basierende Generatoren entwickelt. Diese Herangehensweise war jedoch nicht gut an das Web angepasst: Der [Semantik-fokussierte Teil](https://w3c.github.io/mathml/#contm) wurde nie in Browsern implementiert, während der [Layout-fokussierte Teil](https://w3c.github.io/mathml/#presm) zu unvollständigen und inkonsistenten Browser-Implementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Teilbereich mit erweiterten Implementierungsdetails basierend auf Regeln von [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist speziell für Browser angepasst und entwickelt, um gut mit anderen Webstandards wie [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) zu funktionieren.

Nachfolgend finden Sie Links zur Dokumentation, Beispiele und Werkzeuge zur Arbeit mit MathML. MDN verwendet [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer unbeständigen Standardisierungsgeschichte können in bestehenden Implementierungen und Webinhalten noch veraltete MathML-Features auftreten.

> [!NOTE]
> Es wird dringend empfohlen, dass Entwickler und Autoren auf MathML Core umsteigen und möglicherweise andere Webtechnologien nutzen, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML-Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## MathML-Referenz

- [MathML-Elementreferenz](/de/docs/Web/MathML/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und Mobilbrowser.
- [MathML-Attributreferenz](/de/docs/Web/MathML/Attribute)
  - : Informationen zu MathML-Attributen, die das Erscheinungsbild oder Verhalten von Elementen ändern.
- [MathML-Beispiele](/de/docs/Web/MathML/Examples)
  - : MathML-Beispiele, um Ihnen zu helfen, wie es funktioniert.
- [MathML verfassen](/de/docs/Web/MathML/Authoring)
  - : Vorschläge und Tipps für das Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie man deren Ausgabe in Webinhalte integriert.
- [MathML-Tutorial](/de/docs/Learn/MathML)
  - : Eine sanfte Einführung in MathML.
- [Schriftarten für MathML](/de/docs/Web/MathML/Fonts)
  - : Wie Benutzer solche Mathematik-Schriftarten installieren können, um MathML in Browsern richtig anzuzeigen.

## Hilfe von der Community erhalten

- [W3C Math Home](https://www.w3.org/Math/)
- [Probleme im GitHub w3c/mathml Repository melden](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mailarchiv](https://lists.w3.org/Archives/Public/www-math/)

## Werkzeuge

- [W3C-Validator](https://validator.w3.org/)
- [W3C's Wiki-Seite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Browser-Kompatibilität

{{Compat}}
