---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

**Mathematical Markup Language (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als allgemeine Spezifikation für Browser, Softwarepakete, [Computeralgebrasysteme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/) Leser und [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-basierte Generatoren entwickelt. Diese Herangehensweise war jedoch nicht sehr gut an das Web angepasst: Der auf Semantik fokussierte [Subset](https://w3c.github.io/mathml/#contm) wurde nie in Browsern implementiert, während der auf mathematisches Layout fokussierte [Subset](https://w3c.github.io/mathml/#presm) zu unvollständigen und inkonsistenten Browser-Implementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Subset mit gesteigerten Implementierungsdetails basierend auf Regeln von [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist speziell für Browser zugeschnitten und so entworfen, dass es gut mit anderen Webstandards wie [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model) und [JavaScript](/de/docs/Web/JavaScript) funktioniert.

Unten finden Sie Links zu Dokumentationen, Beispielen und Werkzeugen, um mit MathML zu arbeiten. MDN verwendet [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation. Aufgrund einer unregelmäßigen Standardisierungs-Geschichte können jedoch ältere MathML-Funktionen in bestehenden Implementierungen und Webinhalten weiterhin auftreten.

> [!NOTE]
> Entwicklern und Autoren wird dringend empfohlen, auf MathML Core umzusteigen und möglicherweise auf andere Webtechnologien zurückzugreifen, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML-Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## Anleitungen

Die [MathML Tutorials](/de/docs/Web/MathML/Tutorials) sind so konzipiert, dass sie Sie durch Themen führen, indem sie davon ausgehen, dass Sie keine Vorkenntnisse haben. Sie beginnen mit den Grundlagen und schreiten zu fortgeschritteneren Techniken fort.

- [MathML für Anfänger](/de/docs/Web/MathML/Tutorials/For_beginners)
  - : Diese Anleitung führt Sie in das Erstellen von mathematischen Formeln mit strukturiertem Markup ein. Sie beginnt mit einer Einführung, wie MathML in ein HTML-Dokument hinzugefügt wird, gefolgt von einem tiefen Einblick in zentrale Komponenten: Brüche und Wurzeln, indexierte Elemente und Textcontainer. Anschließend behandelt das Tutorial tabellarische Layouts für Matrizen und fortgeschrittene mathematische Formatierungen. Schließlich gibt es eine Herausforderung, die Ihr Verständnis prüft, indem sie drei berühmte mathematische Formeln mit den erlernten Konzepten nachbilden.

## Leitfäden

Die [MathML-Leitfäden](/de/docs/Web/MathML/Guides) sind Ressourcen, die Ihnen helfen, MathML in Ihren Webseiten zu verwenden, einschließlich Anleitungen zum Schreiben, zu Editoren, zu Schriftarten und mehr.

- [Erstellen von MathML](/de/docs/Web/MathML/Guides/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie deren Ausgaben in Webinhalte integriert werden.
- [Schriftarten für MathML](/de/docs/Web/MathML/Guides/Fonts)
  - : Wie Nutzer solche mathematischen Schriftarten installieren können, um MathML in Browsern korrekt darzustellen.

## Referenz

Die [MathML-Referenz](/de/docs/Web/MathML/Reference) ist eine umfassende Liste von MathML-Elementen und -Attributen, die auf MDN dokumentiert sind.

- [MathML Element-Referenz](/de/docs/Web/MathML/Reference/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und mobile Browser.
- [MathML globale Attribut-Referenz](/de/docs/Web/MathML/Reference/Global_attributes)
  - : Informationen zu globalen MathML-Attributen, die auf alle Elemente anwendbar sind.
- [MathML Attribut-Referenz](/de/docs/Web/MathML/Reference/Attribute)
  - : Informationen zu MathML-Attributen, die das Aussehen oder Verhalten von Elementen ändern.
- [MathML Attribut-Werte](/de/docs/Web/MathML/Reference/Values)
  - : Weitere Informationen zu MathML Attribut-Werten.

## Beispiele

Im Folgenden finden Sie einige Beispiele, die Ihnen helfen können, die Verwendung von MathML zu verstehen.

### MathML-Formeln

Die folgenden Demos zeigen zunehmend komplexe mathematische Konzepte in Webinhalten.

- [Beweis des Satzes von Pythagoras](/de/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : Kleines Beispiel, das einen Beweis des Satzes von Pythagoras zeigt.
- [Herleitung der quadratischen Formel](/de/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : Umriss der Herleitung der quadratischen Formel.
- [Mozilla MathML-Test](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Originaltest aus dem Mozilla MathML-Projekt. Er enthält Beispiele aus dem [TeXbook](https://en.wikipedia.org/wiki/Computers_and_Typesetting) mit Bildreferenzen, die von TeX erzeugt wurden.

### Andere Webtechnologien

Die folgenden Demos kombinieren MathML mit anderen Webtechnologien, um fortschrittliche Inhalte zu erstellen.

- [`<la-tex>` Custom-Element](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : Ein [Custom-Element](/de/docs/Web/API/Web_components/Using_custom_elements), das [LaTeX](https://en.wikipedia.org/wiki/LaTeX) Inhalt akzeptiert.
- [Magnetfeld-Demo](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : Eine 3D-Darstellung eines Magnetfelds unter Nutzung von [SVG](/de/docs/Web/SVG) und [WebGL](/de/docs/Web/API/WebGL_API).
- [Συνάρτηση ζήτα Ρήμαν (el)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : Ein griechischer Artikel über die Riemannsche Zeta-Funktion, mit [Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) von der [Greek Font Society](https://greekfontsociety-gfs.gr/).
- [Pell'sche Gleichung](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : Ein JavaScript-Programm zur Lösung der Pell'schen Gleichung unter Verwendung von [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- [Lovelace's Programm für Bernoulli-Zahlen](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Ein Emulator für Ada Lovelace's Programm zur Berechnung von Bernoulli-Zahlen unter Verwendung von [Private elements](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).

## Unterstützung von der Community

- [W3C Math Home](https://www.w3.org/Math/)
- [Probleme im GitHub-Repository w3c/mathml melden](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mailarchiv](https://lists.w3.org/Archives/Public/www-math/)

## Werkzeuge

- [W3C-Validator](https://validator.w3.org/)
- [W3C Wiki-Seite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
