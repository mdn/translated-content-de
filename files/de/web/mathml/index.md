---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

**Mathematische Auszeichnungssprache (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als allgemein einsetzbare Spezifikation für Browser, Bürosuiten, [Computeralgebrasysteme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/)-Leser, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-basierte Generatoren entwickelt. Dieses Konzept war jedoch nicht besonders gut an das Web angepasst: Der [Semantik-fokussierte Teilbereich](https://w3c.github.io/mathml/#contm) wurde nie in Browsern implementiert, während der [auf mathematisches Layout fokussierte Teilbereich](https://w3c.github.io/mathml/#presm) zu unvollständigen und inkonsistenten Browserimplementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Teilbereich mit erweiterten Implementierungsdetails basierend auf Regeln aus [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist speziell für Browser zugeschnitten und soll gut mit anderen Webstandards wie [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) zusammenarbeiten.

Nachfolgend finden Sie Links zu Dokumentationen, Beispielen und Tools, die Ihnen den Umgang mit MathML erleichtern. MDN verwendet [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer erratischen Standardisierungsgeschichte können veraltete MathML-Funktionen immer noch in bestehenden Implementierungen und Webinhalten auftauchen.

> [!NOTE]
> Es wird dringend empfohlen, dass Entwickler und Autoren auf MathML Core umsteigen und möglicherweise auf andere Webtechnologien zurückgreifen, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## Tutorials

Die [MathML-Tutorials](/de/docs/Web/MathML/Tutorials) sind so konzipiert, dass sie Sie durch Themen führen, wobei davon ausgegangen wird, dass Sie keine Vorkenntnisse haben. Sie beginnen mit den Grundlagen und gehen zu fortgeschritteneren Techniken über.

- [MathML für Anfänger](/de/docs/Web/MathML/Tutorials/For_beginners)
  - : Dieses Tutorial führt Sie durch das Erstellen von mathematischen Formeln mittels strukturiertem Markup. Es beginnt mit einer Einführung in das Hinzufügen von MathML zu einem HTML-Dokument, gefolgt von einem tiefgehenden Einblick in die wichtigsten Komponenten: Brüche und Wurzeln, gescriptete Elemente und Textcontainer. Anschließend werden tabellarische Layouts für Matrizen und fortgeschrittene mathematische Formatierungen behandelt. Schließlich wird Ihr Verständnis durch die Aufgabe geprüft, drei berühmte mathematische Formeln mit den erlernten Konzepten nachzubilden.

## Leitfaden

Die [MathML-Leitfäden](/de/docs/Web/MathML/Guides) sind Ressourcen, die Ihnen helfen, MathML auf Ihren Webseiten zu verfassen. Dazu gehören Anleitungen zu Schreiben, Editoren, Schriftarten und mehr.

- [Verfassen von MathML](/de/docs/Web/MathML/Guides/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie man deren Ausgaben in Webinhalte integriert.
- [Schriftarten für MathML](/de/docs/Web/MathML/Guides/Fonts)
  - : Wie Benutzer solche mathematischen Schriftarten installieren können, um MathML in Browsern korrekt darzustellen.

## Referenz

Die [MathML-Referenz](/de/docs/Web/MathML/Reference) ist eine umfassende Liste von MathML-Elementen und Attributen, die auf MDN dokumentiert sind.

- [MathML-Elementreferenz](/de/docs/Web/MathML/Reference/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und mobile Browser.
- [MathML-Globale Attributreferenz](/de/docs/Web/MathML/Reference/Global_attributes)
  - : Informationen über globale MathML-Attribute, die für alle Elemente anwendbar sind.
- [MathML-Attributreferenz](/de/docs/Web/MathML/Reference/Attribute)
  - : Informationen über MathML-Attribute, die das Erscheinungsbild oder Verhalten von Elementen verändern.
- [MathML-Attributwerte](/de/docs/Web/MathML/Reference/Values)
  - : Weiterführende Informationen über MathML-Attributwerte.

## Beispiele

Im Folgenden finden Sie einige Beispiele, die Ihnen helfen sollen, MathML zu verstehen und zu verwenden.

### MathML-Formeln

Die folgenden Demos zeigen zunehmend komplexere mathematische Konzepte in Webinhalten.

- [Den Satz des Pythagoras beweisen](/de/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : Kleines Beispiel, das einen Beweis des Satzes von Pythagoras zeigt.
- [Die quadratische Formel ableiten](/de/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : Umreißt die Herleitung der quadratischen Formel.
- [Mozilla MathML Test](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Originaltest aus dem Mozilla MathML-Projekt. Er enthält Beispiele aus dem [TeXbook](https://en.wikipedia.org/wiki/Computers_and_Typesetting) mit Bildreferenzen, die von TeX generiert wurden.
- [MathML-Browser-Test](http://eyeasme.com/Joe/MathML/MathML_browser_test.html)
  - : Ein ähnlicher Test mit konkreten Formeln, die aus Wikipedia entnommen wurden.

### Andere Webtechnologien

Die folgenden Demos kombinieren MathML mit anderen Webtechnologien, um fortschrittliche Inhalte zu produzieren.

- [`<la-tex>` benutzerdefiniertes Element](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements), das [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Inhalte akzeptiert.
- [Magnetfeld-Demo](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : Eine 3D-Darstellung eines Magnetfeldes unter Verwendung von [SVG](/de/docs/Web/SVG) und [WebGL](/de/docs/Web/API/WebGL_API).
- [Συνάρτηση ζήτα Ρήμαν (el)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : Ein griechischer Artikel über die Riemannsche Zeta-Funktion mit [Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) der [Greek Font Society](https://greekfontsociety-gfs.gr/).
- [Pellsche Gleichung](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : Ein JavaScript-Programm zur Lösung der Pellschen Gleichung unter Verwendung von [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- [Lovelaces Programm für Bernoulli-Zahlen](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Ein Emulator für Ada Lovelaces Programm zur Berechnung von Bernoulli-Zahlen unter Verwendung von [Private elements](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).

## Hilfe von der Gemeinschaft erhalten

- [W3C Math Home](https://www.w3.org/Math/)
- [Probleme im GitHub w3c/mathml-Repository melden](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mail-Archiv](https://lists.w3.org/Archives/Public/www-math/)

## Werkzeuge

- [W3C-Validator](https://validator.w3.org/)
- [W3C's Wiki-Seite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
