---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

**Mathematical Markup Language (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notationen.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als allgemeine Spezifikation für Browser, Büroanwendungen, [Computeralgebrasysteme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/)-Reader, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-basierte Generatoren entwickelt. Allerdings war dieser Ansatz nicht sehr an das Web angepasst: Der [Teil, der sich auf Semantik konzentriert](https://w3c.github.io/mathml/#contm), wurde nie in Browsern implementiert, während der [Teil, der sich auf das mathematische Layout konzentriert](https://w3c.github.io/mathml/#presm), zu unvollständigen und inkonsistenten Browserimplementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Teilbereich mit gesteigerten Implementierungsdetails basierend auf Regeln aus [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist speziell für Browser zugeschnitten und soll gut mit anderen Webstandards wie [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [JavaScript](/de/docs/Web/JavaScript) funktionieren.

Unten finden Sie Links zu Dokumentationen, Beispielen und Werkzeugen für die Arbeit mit MathML. MDN verwendet [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer unregelmäßigen Standardisierungsgeschichte können weiterhin ältere MathML-Funktionen in bestehenden Implementierungen und Webinhalten auftauchen.

> [!NOTE]
> Es wird dringend empfohlen, dass Entwickler und Autoren auf MathML Core umsteigen, möglicherweise unter Verwendung anderer Webtechnologien, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML-Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## Anfänger-Tutorials

- [Erste Schritte mit MathML](/de/docs/Web/MathML/Guides/Getting_started)
  - : In diesem Artikel nehmen wir ein einfaches HTML-Dokument und zeigen, wie man MathML-Formeln einfügt, indem wir einige Elemente unterwegs einführen.
- [Textcontainer](/de/docs/Web/MathML/Guides/Text_containers)
  - : Jetzt, da Sie eine bessere Vorstellung von MathML haben, gehen wir weiter zu Textcontainern (Variablen, Zahlen, Operatoren, ...), die als Bausteine von MathML-Formeln verwendet werden.
- [Brüche und Wurzeln](/de/docs/Web/MathML/Guides/Fractions_and_roots)
  - : Auf der Grundlage von Textcontainern beschreibt dieser Artikel, wie komplexere MathML-Ausdrücke durch das Verschachteln von Brüchen und Wurzeln erstellt werden.
- [Skripte](/de/docs/Web/MathML/Guides/Scripts)
  - : Wir setzen die Überprüfung grundlegender mathematischer Notationen fort und konzentrieren uns auf den Aufbau von MathML-Elementen mit Skripten.
- [Tabellen](/de/docs/Web/MathML/Guides/Tables)
  - : Sobald alle grundlegenden mathematischen Notationen bekannt sind, bleibt noch das tabellarische Layout zu betrachten, das für matrixartige Ausdrücke und andere fortgeschrittene mathematische Layouts verwendet werden kann.
- [Drei berühmte mathematische Formeln](/de/docs/Web/MathML/Guides/Three_famous_mathematical_formulas) <sup>Challenge</sup>
  - : Mit dem Wissen, das Sie in den letzten Artikeln erworben haben, sollten Sie bereits in der Lage sein, relativ anspruchsvolle MathML-Formeln zu schreiben. Diese Herausforderung gibt Ihnen die Gelegenheit dazu.

## Leitfaden

- [MathML verfassen](/de/docs/Web/MathML/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie deren Ausgabe in Webinhalte integriert werden kann.
- [Schriftarten für MathML](/de/docs/Web/MathML/Fonts)
  - : Wie Benutzer solche mathematischen Schriften installieren können, um MathML in Browsern korrekt darzustellen.

## MathML-Referenz

- [MathML-Elementreferenz](/de/docs/Web/MathML/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und Mobilbrowser.
- [MathML-Attributreferenz](/de/docs/Web/MathML/Attribute)
  - : Informationen zu MathML-Attributen, die das Aussehen oder Verhalten von Elementen verändern.
- [MathML-Attributwerte](/de/docs/Web/MathML/Attribute)
  - : Weitere Informationen über MathML-Attributwerte.
- [MathML-Beispiele](/de/docs/Web/MathML/Examples)
  - : MathML-Beispiele und -Muster, um Ihnen zu helfen zu verstehen, wie es funktioniert.

## Hilfe von der Gemeinschaft erhalten

- [W3C Math Startseite](https://www.w3.org/Math/)
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
