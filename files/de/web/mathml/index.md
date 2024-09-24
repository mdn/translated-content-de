---
title: Mathematische Auszeichnungssprache (MathML)
slug: Web/MathML
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{MathMLRef}}

**Mathematische Auszeichnungssprache (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als allgemeine Spezifikation für Browser, Büroanwendungen, [Computeralgebrasysteme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/) Leser, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-basierte Generatoren entworfen. Dieser Ansatz war jedoch nicht sehr webgerecht: Der [auf Semantik fokussierte Ausschnitt](https://w3c.github.io/mathml/#contm) wurde in Browsern nie implementiert, während der [auf mathematisches Layout fokussierte Ausschnitt](https://w3c.github.io/mathml/#presm) zu unvollständigen und inkonsistenten Browserimplementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Ausschnitt mit detaillierteren Implementierungsdetails, basierend auf Regeln von [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist für Browser maßgeschneidert und speziell darauf abgestimmt, gut mit anderen Webstandards wie [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) zusammenzuarbeiten.

Unten finden Sie Links zur Dokumentation, Beispiele und Werkzeuge, um mit MathML zu arbeiten. MDN verwendet [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer unregelmäßigen Standardisierungsgeschichte können in bestehenden Implementierungen und Webinhalten immer noch veraltete MathML-Features auftauchen.

> [!NOTE]
> Es wird dringend empfohlen, dass Entwickler und Autoren auf MathML Core umsteigen, möglicherweise unter Verwendung anderer Webtechnologien, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## MathML-Referenz

- [MathML-Elementreferenz](/de/docs/Web/MathML/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und Mobile-Browser.
- [MathML-Attributreferenz](/de/docs/Web/MathML/Attribute)
  - : Informationen zu MathML-Attributen, die das Erscheinungsbild oder das Verhalten von Elementen ändern.
- [MathML-Beispiele](/de/docs/Web/MathML/Examples)
  - : MathML-Beispiele und -Muster, die Ihnen helfen zu verstehen, wie es funktioniert.
- [MathML verfassen](/de/docs/Web/MathML/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie deren Ausgaben in Webinhalte integriert werden können.
- [MathML-Tutorial](/de/docs/Learn/MathML)
  - : Eine sanfte Einführung in MathML.
- [Schriftarten für MathML](/de/docs/Web/MathML/Fonts)
  - : Wie Benutzer solche mathematischen Schriftarten installieren können, um MathML in Browsern korrekt anzuzeigen.

## Hilfe von der Community erhalten

- [W3C Math Home](https://www.w3.org/Math/)
- [Probleme im GitHub w3c/mathml Repository melden](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mailarchiv](https://lists.w3.org/Archives/Public/www-math/)

## Werkzeuge

- [W3C Validator](https://validator.w3.org/)
- [W3C's Wiki-Seite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Browserkompatibilität

{{Compat}}
