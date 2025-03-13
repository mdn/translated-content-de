---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**Mathematische Auszeichnungssprache (MathML)** ist eine [XML](/de/docs/Web/XML)-basierte Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als universelle Spezifikation für Browser, Bürosoftware, [Computer-Algebra-Systeme](https://en.wikipedia.org/wiki/Computer_algebra_system), [EPUB](https://www.w3.org/publishing/epub33/) Leser, [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-basierte Generatoren entworfen. Diese Herangehensweise war jedoch nicht sehr an das Web angepasst: der [Teilfokus auf Semantik](https://w3c.github.io/mathml/#contm) wurde in Browsern nie implementiert, während der [Teilfokus auf mathematisches Layout](https://w3c.github.io/mathml/#presm) zu unvollständigen und inkonsistenten Browser-Implementierungen führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Teilbereich mit erweiterten Implementierungsdetails basierend auf Regeln aus [LaTeX](https://en.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Es ist auf Browser abgestimmt und speziell dafür ausgelegt, gut mit anderen Webstandards einschließlich [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) zusammenzuarbeiten.

Unten finden Sie Links zu Dokumentationen, Beispielen und Tools, um mit MathML zu arbeiten. MDN nutzt [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer ungleichmäßigen Standardisierungsgeschichte können in bestehenden Implementierungen und Webinhalten weiterhin ältere MathML-Funktionen auftreten.

> [!NOTE]
> Es wird dringend empfohlen, dass Entwickler und Autoren auf MathML Core umsteigen, möglicherweise in Kombination mit anderen Webtechnologien, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Reihe von [MathML Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## Anleitungen

- [MathML für Anfänger](/de/docs/Web/MathML/Tutorials/For_beginners)
  - : Diese Anleitung wird Sie durch das Erstellen mathematischer Formeln mit strukturiertem Markup führen. Sie beginnt mit einer Einführung in das Hinzufügen von MathML zu einem HTML-Dokument, gefolgt von einem tiefen Einblick in die wichtigsten Komponenten: Brüche und Wurzeln, geskriptete Elemente und Textcontainer. Die Anleitung deckt dann tabellarische Layouts für Matrizen und fortgeschrittene mathematische Formatierungen ab. Schließlich testet eine Herausforderung Ihr Verständnis, indem Sie drei berühmte mathematische Formeln mit den erlernten Konzepten nachbilden.

## Leitfäden

- [MathML verfassen](/de/docs/Web/MathML/Guides/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie deren Ausgabe in Webinhalt integriert werden kann.
- [Fonts für MathML](/de/docs/Web/MathML/Guides/Fonts)
  - : Wie Benutzer solche mathematischen Schriften installieren können, um MathML in Browsern ordnungsgemäß anzuzeigen.

## Referenz

- [MathML-Elementreferenz](/de/docs/Web/MathML/Reference/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und mobile Browser.
- [MathML globale Attributreferenz](/de/docs/Web/MathML/Reference/Global_attributes)
  - : Informationen über globale MathML-Attribute, die für alle Elemente anwendbar sind.
- [MathML-Attributreferenz](/de/docs/Web/MathML/Reference/Attribute)
  - : Informationen über MathML-Attribute, die das Aussehen oder Verhalten von Elementen verändern.
- [MathML-Attributwerte](/de/docs/Web/MathML/Reference/Values)
  - : Weitere Informationen über MathML-Attributwerte.

## Beispiele

Unten finden Sie einige Beispiele, die Ihnen helfen können, zu verstehen, wie MathML verwendet wird.

### MathML-Formeln

Die folgenden Demos zeigen zunehmend komplexere mathematische Konzepte in Webinhalten.

- [Beweis des Satzes des Pythagoras](/de/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : Kleines Beispiel, das einen Beweis des Satzes des Pythagoras zeigt.
- [Ableitung der quadratischen Formel](/de/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : Skizziert die Herleitung der quadratischen Formel.
- [Mozilla MathML-Test](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Originaltest aus dem Mozilla MathML-Projekt. Es enthält Beispiele aus dem [TeXbook](https://en.wikipedia.org/wiki/Computers_and_Typesetting) mit Bildreferenzen, die von TeX generiert wurden.
- [MathML-Browsertest](http://eyeasme.com/Joe/MathML/MathML_browser_test.html)
  - : Ein ähnlicher Test mit konkreten Formeln, die von Wikipedia entnommen wurden.

### Andere Webtechnologien

Die folgenden Demos mischen MathML mit anderen Webtechnologien, um fortgeschrittene Inhalte zu erzeugen.

- `<la-tex>` benutzerdefiniertes Element](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements), das [LaTeX](https://en.wikipedia.org/wiki/LaTeX)-Inhalte akzeptiert.
- [Magnetfeld-Demo](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : Eine 3D-Darstellung eines Magnetfeldes, unter Verwendung von [SVG](/de/docs/Web/SVG) und [WebGL](/de/docs/Web/API/WebGL_API).
- [Συνάρτηση ζήτα Ρήμαν (el)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : Ein griechischer Artikel über die Riemannsche Zetafunktion, mit [Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) von der [Greek Font Society](https://greekfontsociety-gfs.gr/).
- [Pell'sche Gleichung](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : Ein JavaScript-Programm zur Lösung der Pell'schen Gleichung mit [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- [Lovelaces Programm für Bernoulli-Zahlen](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Ein Emulator für Ada Lovelaces Programm zur Berechnung von Bernoulli-Zahlen, unter Verwendung von [Privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

## Hilfe von der Community erhalten

- [W3C Math Home](https://www.w3.org/Math/)
- [Probleme auf GitHub w3c/mathml Repository melden](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mail-Archiv](https://lists.w3.org/Archives/Public/www-math/)

## Tools

- [W3C Validator](https://validator.w3.org/)
- [W3C's Wiki-Seite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Browser-Kompatibilität

{{Compat}}
