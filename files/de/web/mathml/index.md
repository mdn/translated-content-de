---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 832bcb292fdf15ce9ba842f9a5025b5593454a65
---

**Mathematische Auszeichnungssprache (MathML)** ist eine auf [XML](/de/docs/Web/XML) basierende Sprache zur Beschreibung mathematischer Notation.

[MathML](https://w3c.github.io/mathml/) wurde ursprünglich als allgemeine Spezifikation für Browser, Büroanwendungen, [Computeralgebra-Systeme](https://de.wikipedia.org/wiki/Computeralgebrasystem), [EPUB](https://www.w3.org/publishing/epub33/) Leser, [LaTeX](https://de.wikipedia.org/wiki/LaTeX)-basierte Generatoren entworfen. Diese Herangehensweise war jedoch nicht sehr gut an das Web angepasst: der [Teil, der sich auf Semantik konzentriert](https://w3c.github.io/mathml/#contm), wurde nie in Browsern implementiert, während der [Teil, der sich auf mathematische Layouts fokussiert](https://w3c.github.io/mathml/#presm), zu unvollständigen und inkonsistenten Implementierungen in Browsern führte.

[MathML Core](https://w3c.github.io/mathml-core/) ist ein Teilbereich mit erhöhten Implementierungsdetails, basierend auf Regeln von [LaTeX](https://de.wikipedia.org/wiki/LaTeX) und dem [Open Font Format](https://learn.microsoft.com/de-de/typography/opentype/spec/math). Es ist auf Browser abgestimmt und speziell dafür ausgelegt, gut mit anderen Webstandards wie [HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), [DOM](/de/docs/Web/API/Document_Object_Model), [JavaScript](/de/docs/Web/JavaScript) zusammenzuarbeiten.

Unten finden Sie Links zu Dokumentationen, Beispielen und Werkzeugen, um mit MathML zu arbeiten. MDN nutzt [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation, aber aufgrund einer unregelmäßigen Standardisierungsgeschichte können veraltete MathML-Funktionen immer noch in bestehenden Implementierungen und Webinhalten auftauchen.

> [!NOTE]
> Es wird dringend empfohlen, dass Entwickler und Autoren zu MathML Core wechseln, möglicherweise unter Verwendung anderer Webtechnologien, um fehlende Anwendungsfälle abzudecken. Die Math WG pflegt eine Sammlung von [MathML Polyfills](https://github.com/w3c/mathml-polyfills), um diesen Übergang zu erleichtern.

## Anleitungen

- [MathML für Anfänger](/de/docs/Web/MathML/Tutorials/For_beginners)
  - : Diese Anleitung führt Sie durch das Erstellen mathematischer Formeln mit strukturiertem Markup. Es beginnt mit einer Einführung in das Hinzufügen von MathML zu einem HTML-Dokument, gefolgt von einem tiefen Einblick in die Hauptkomponenten: Brüche und Wurzeln, beschriftete Elemente und Text-Container. Die Anleitung umfasst dann tabellarische Layouts für Matrizen und fortgeschrittene mathematische Formatierungen. Schließlich wird Ihr Verständnis durch eine Herausforderung getestet, bei der Sie drei berühmte mathematische Formeln mit den erlernten Konzepten nachbilden.

## Leitfäden

- [MathML erstellen](/de/docs/Web/MathML/Guides/Authoring)
  - : Vorschläge und Tipps zum Schreiben von MathML, einschließlich empfohlener MathML-Editoren und wie deren Ausgabe in Webinhalte integriert werden kann.
- [Schriften für MathML](/de/docs/Web/MathML/Guides/Fonts)
  - : Wie Benutzer solche mathematischen Schriften installieren können, um MathML in Browsern ordnungsgemäß anzuzeigen.

## Referenz

- [MathML-Elementreferenz](/de/docs/Web/MathML/Reference/Element)
  - : Details zu jedem MathML-Element und Kompatibilitätsinformationen für Desktop- und Mobilbrowser.
- [MathML globale Attributreferenz](/de/docs/Web/MathML/Reference/Global_attributes)
  - : Informationen über globale MathML-Attribute, die für alle Elemente anwendbar sind.
- [MathML-Attributreferenz](/de/docs/Web/MathML/Reference/Attribute)
  - : Informationen zu MathML-Attributen, die das Erscheinungsbild oder Verhalten von Elementen ändern.
- [MathML Attributwerte](/de/docs/Web/MathML/Reference/Values)
  - : Weitere Informationen zu MathML-Attributwerten.

## Beispiele

Unten finden Sie einige Beispiele, die Ihnen helfen zu verstehen, wie Sie MathML verwenden können.

### MathML-Formeln

Die folgenden Demos zeigen zunehmend komplexe mathematische Konzepte in Webinhalten.

- [Beweis des Satzes des Pythagoras](/de/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : Kleines Beispiel, das einen Beweis des Satzes des Pythagoras zeigt.
- [Ableitung der quadratischen Formel](/de/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : Erläutert die Herleitung der quadratischen Formel.
- [Mozilla MathML-Test](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Originaltest aus dem Mozilla MathML-Projekt. Es enthält Beispiele aus dem [TeXbook](https://de.wikipedia.org/wiki/Computers_and_Typesetting) mit Bildreferenzen, die von TeX generiert wurden.
- [MathML Browser Test](http://eyeasme.com/Joe/MathML/MathML_browser_test.html)
  - : Ein ähnlicher Test mit konkreten Formeln von Wikipedia.

### Andere Webtechnologien

Die folgenden Demos mischen MathML mit anderen Webtechnologien, um fortschrittliche Inhalte zu erstellen.

- [`<la-tex>` benutzerdefiniertes Element](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : Ein [benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements), das [LaTeX](https://de.wikipedia.org/wiki/LaTeX)-Inhalte akzeptiert.
- [Magnetfeld-Demo](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : Eine 3D-Darstellung eines Magnetfelds, unter Verwendung von [SVG](/de/docs/Web/SVG) und [WebGL](/de/docs/Web/API/WebGL_API).
- [Συνάρτηση ζήτα Ρήμαν (el)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : Ein griechischer Artikel über die Riemannsche Zeta-Funktion, mit [Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) der [Griechischen Schriftgesellschaft](https://greekfontsociety-gfs.gr/).
- [Pellsche Gleichung](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : Ein JavaScript-Programm zur Lösung der Pell-Gleichung unter Verwendung von [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- [Lovelaces Programm für Bernoulli-Zahlen](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Ein Emulator für Ada Lovelaces Programm zur Berechnung von Bernoulli-Zahlen unter Verwendung von [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

## Hilfe aus der Gemeinschaft erhalten

- [W3C Math Startseite](https://www.w3.org/Math/)
- [Probleme im GitHub w3c/mathml Repository erstellen](https://github.com/w3c/mathml/issues)
- [www-math w3.org Mail-Archiv](https://lists.w3.org/Archives/Public/www-math/)

## Werkzeuge

- [W3C Validator](https://validator.w3.org/)
- [W3C's Wikiseite](https://www.w3.org/wiki/Math_Tools)

## Verwandte Themen

- [CSS](/de/docs/Web/CSS)
- [HTML](/de/docs/Web/HTML)
- [SVG](/de/docs/Web/SVG)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
