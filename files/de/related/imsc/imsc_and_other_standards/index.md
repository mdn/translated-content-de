---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

IMSC ist das Ergebnis eines internationalen Bestrebens, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## IMSC-Spezifikationsgenealogie

[TTML Profiles for Internet Media Subtitles and Captions](https://www.w3.org/TR/ttml-imsc/all/) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweite Untertitel- und Captions-Spezifikationen.

IMSC wurde entwickelt, um eine praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) zu sein, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als Safe-Harbor-Format bezeichnet wird. Daher sollten die meisten SMPTE-TT-Dokumente korrekt mit IMSC-Renderern wiedergegeben werden (siehe [die Einschränkungen](https://www.w3.org/TR/ttml-imsc1.0.1/#smpte-tt-smpte-st-2052-1)), und die Konvertierungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) gelten auch für IMSC.

IMSC ist auch ein syntaktisches Superset von sowohl [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), so dass Dokumente, die mit einem dieser beiden Formate übereinstimmen, gültige IMSC-Dokumente sind und von IMSC-Renderern dargestellt werden können — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://www.w3.org/TR/2018/REC-ttml-imsc1.0.1-20180424/#interop-examples) für mehr Details.

IMSC führt seine Ursprünge auf das CFF-TT-Format zurück, und [CFF-TT-Dokumente](https://www.w3.org/TR/ttml-imsc1.1/#cff-tt) können relativ leicht in IMSC konvertiert werden.

IMSC ist nicht mit [WebVTT](https://www.w3.org/TR/webvtt1/) verwandt und verwendet nicht die gleiche Syntax. Es gibt [grundlegende Konvertierungsrichtlinien](https://www.w3.org/TR/webvtt1/).

## Aktive IMSC-Versionen

Zwei Versionen von IMSC sind heute im Einsatz:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so entwickelt, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie beabsichtigt auf einem IMSC 1.1-Renderer dargestellt werden. Es fügt jedoch wichtige Funktionen zu IMSC 1.0.1 hinzu:

- Japanische Textlayoutfunktionen wie Ruby.
- Unterstützung für autorenkontrollierte Leuchtdichte beim Zusammensetzen auf absolutes Leuchtdichte-High-Dynamic-Range-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 veraltet auch, verbietet jedoch nicht, eine begrenzte Anzahl von Funktionen, die keinen praktischen Nutzen haben oder für die bessere Alternativen existieren.

Zusammenfassend lässt sich sagen, dass Autoren ermutigt werden, wenn möglich IMSC 1.0.1-Dokumente für maximale Kompatibilität zu erstellen, und Implementierer ermutigt werden, Unterstützung für IMSC 1.1 für weltweite Abdeckung zu implementieren.

## Zusammenfassung

Dieses Dokument bietet Ihnen alle notwendigen Informationen über IMSC und seine Beziehung zu anderen Spezifikationen.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videotimecodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
