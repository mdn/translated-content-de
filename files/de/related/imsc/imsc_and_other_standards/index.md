---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

IMSC ist das Ergebnis eines internationalen Bestrebens, populäre Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Genealogie der IMSC-Spezifikation

[TTML Profiles for Internet Media Subtitles and Captions](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweit verwendete Untertitel- und Beschriftungsspezifikationen.

IMSC wurde als praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) entwickelt, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als Safe-Harbor-Format bezeichnet wird. Infolgedessen sollten die meisten SMPTE-TT-Dokumente mit IMSC-Renderern korrekt dargestellt werden (siehe [die Einschränkungen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#smpte-tt-smpte-st-2052-1)), und die Konvertierungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) sind ebenfalls auf IMSC anwendbar.

IMSC ist auch ein syntaktisches Superset sowohl von [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch von [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), so dass Dokumente, die diesen beiden Formaten entsprechen, gültige IMSC-Dokumente sind und von IMSC-Renderern dargestellt werden können — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#interop-examples) für weitere Details.

IMSC hat seinen Ursprung im CFF-TT-Format, und [CFF-TT-Dokumente](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#cff-tt) können relativ leicht in IMSC konvertiert werden.

IMSC ist nicht verwandt mit [WebVTT](https://w3c.github.io/webvtt/) und verwendet nicht die gleiche Syntax.

## Aktive IMSC-Versionen

Heutzutage sind zwei Versionen von IMSC im Einsatz:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so gestaltet, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie beabsichtigt auf einem IMSC 1.1-Renderer wiedergegeben werden. Es fügt jedoch wichtige Funktionen zu IMSC 1.0.1 hinzu:

- Funktionen für japanische Textlayouts wie Ruby.
- Unterstützung für vom Autor gesteuerte Leuchtdichte beim Compositing auf absolute Leuchtdichte High-Dynamic-Range-Videos.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 depraviert auch eine begrenzte Anzahl von Funktionen, die keine praktische Verwendung haben oder für die bessere Alternativen existieren, verbietet sie jedoch nicht.

Zusammengefasst wird Autoren empfohlen, IMSC 1.0.1-Dokumente zu erstellen, wenn möglich und für maximale Kompatibilität, und Implementierern wird zur Unterstützung von IMSC 1.1 zur weltweiten Abdeckung geraten.

## Zusammenfassung

Dieses Dokument gibt Ihnen alles, was Sie über IMSC und seine Beziehung zu anderen Spezifikationen wissen müssen.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">Grundlagen von IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS polyfill</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videotimecodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
