---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

IMSC ist das Ergebnis einer internationalen Anstrengung, um beliebte Profile von [TTML](https://www.w3.org/TR/ttml/), wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854), zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Verbindung steht, und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Genealogie der IMSC-Spezifikationen

[TTML Profiles for Internet Media Subtitles and Captions](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweite Untertitel und Untertitel-Spezifikationen.

IMSC wurde entwickelt, um eine praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) zu sein, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als sicheres Hafenformat festgelegt wurde. Daher sollten die meisten SMPTE-TT-Dokumente korrekt mit IMSC-Renderer gerendert werden (siehe [die Einschränkungen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#smpte-tt-smpte-st-2052-1)), und die Konvertierungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) sind auch auf IMSC anwendbar.

IMSC ist auch eine syntaktische Obermenge von sowohl [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), sodass Dokumente, die mit einem dieser beiden Formate übereinstimmen, gültige IMSC-Dokumente sind und von IMSC-Renderern gerendert werden können — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#interop-examples) für weitere Details.

IMSC hat seine Ursprünge im CFF-TT-Format, und [CFF-TT-Dokumente](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#cff-tt) können relativ leicht in IMSC konvertiert werden.

IMSC ist nicht mit [WebVTT](https://w3c.github.io/webvtt/) verwandt und verwendet nicht die gleiche Syntax.

## Aktive IMSC-Versionen

Heute sind zwei Versionen von IMSC in Gebrauch:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so konzipiert, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie beabsichtigt auf einem IMSC 1.1-Renderer gerendert werden. Es fügt jedoch wichtige Funktionen zusätzlich zu IMSC 1.0.1 hinzu:

- Japanische Textlayout-Funktionen wie Ruby.
- Unterstützung für durch den Autor kontrollierte Leuchtdichte bei der Komposition auf absolute Leuchtdichte von High-Dynamic-Range-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 deprecated auch, aber verbietet nicht, eine begrenzte Anzahl von Funktionen, die keinen praktischen Nutzen haben oder für die bessere Alternativen existieren.

Zusammenfassend wird Autoren empfohlen, wenn möglich IMSC 1.0.1-Dokumente für maximale Kompatibilität zu erstellen, und Implementierern wird geraten, die Unterstützung von IMSC 1.1 für weltweite Abdeckung zu implementieren.

## Zusammenfassung

Dieses Dokument gibt Ihnen alles, was Sie über IMSC und seine Beziehung zu anderen Spezifikationen wissen müssen.
