---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

IMSC ist das Ergebnis eines internationalen Bestrebens, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## IMSC-Spezifikationsgenalogie

[TTML-Profile für Internet-Media-Untertitel und -Captioning](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für die weltweit gültigen Untertitel- und Caption-Familienspezifikationen.

IMSC wurde entwickelt, um eine praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) zu sein, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als Safe-Harbor-Format bezeichnet wird. Infolgedessen sollten die meisten SMPTE-TT-Dokumente korrekt mit IMSC-Renderern wiedergegeben werden (siehe [die Einschränkungen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#smpte-tt-smpte-st-2052-1)), und die Konvertierungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) sind auch auf IMSC anwendbar.

IMSC ist auch eine syntaktische Obermenge sowohl von [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch von [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), sodass Dokumente, die einem dieser beiden Formate entsprechen, gültige IMSC-Dokumente sind und von IMSC-Renderern wiedergegeben werden können — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#interop-examples) für weitere Details.

IMSC führt seine Ursprünge auf das CFF-TT-Format zurück, und [CFF-TT-Dokumente](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#cff-tt) können relativ leicht nach IMSC konvertiert werden.

IMSC ist nicht mit [WebVTT](https://w3c.github.io/webvtt/) verwandt und verwendet nicht die gleiche Syntax.

## Aktive IMSC-Versionen

Heute sind zwei Versionen von IMSC in Gebrauch:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so entworfen, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie vorgesehen auf einem IMSC 1.1-Renderer wiedergegeben werden. Es fügt jedoch wichtige Funktionen über IMSC 1.0.1 hinaus hinzu:

- Japanische Textlayout-Funktionen wie Ruby.
- Unterstützung für vom Autor gesteuerte Luminanz bei der Komposition auf absoluter Luminanz in High-Dynamic-Range-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 depreziert auch eine begrenzte Anzahl von Funktionen, die keinen praktischen Nutzen haben oder für die bessere Alternativen existieren, verbietet sie jedoch nicht.

Zusammenfassend wird Autoren empfohlen, wenn möglich IMSC 1.0.1-Dokumente zu erstellen, um maximale Kompatibilität zu gewährleisten, und Implementierern wird empfohlen, die Unterstützung für IMSC 1.1 für weltweite Abdeckung zu implementieren.

## Zusammenfassung

Dieses Dokument gibt Ihnen alles, was Sie über IMSC und seine Beziehung zu anderen Spezifikationen wissen müssen.
