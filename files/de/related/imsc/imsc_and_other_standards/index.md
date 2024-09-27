---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

IMSC ist das Ergebnis einer internationalen Anstrengung, populäre Profile von [TTML](https://www.w3.org/TR/ttml/), wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854), zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Genealogie der IMSC-Spezifikation

[TTML Profiles for Internet Media Subtitles and Captions](https://www.w3.org/TR/ttml-imsc/all/) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweite Untertitel- und Captioning-Spezifikationen.

IMSC wurde entwickelt, um eine praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) zu sein, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als Safe-Harbor-Format bezeichnet wird. Daher sollten die meisten SMPTE-TT-Dokumente korrekt mit IMSC-Renderern dargestellt werden (siehe [die Einschränkungen](https://www.w3.org/TR/ttml-imsc1.0.1/#smpte-tt-smpte-st-2052-1)), und die Umwandlungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) gelten auch für IMSC.

IMSC ist auch ein syntaktisches Superset von sowohl [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), sodass Dokumente, die einem dieser beiden Formate entsprechen, gültige IMSC-Dokumente sind und von IMSC-Renderern gerendert werden können — siehe [Kompatibilität mit anderen auf TTML basierenden Spezifikationen](https://www.w3.org/TR/2018/REC-ttml-imsc1.0.1-20180424/#interop-examples) für weitere Details.

IMSC hat seinen Ursprung im CFF-TT-Format, und [CFF-TT-Dokumente](https://www.w3.org/TR/ttml-imsc1.1/#cff-tt) können relativ leicht in IMSC umgewandelt werden.

IMSC ist nicht verwandt mit [WebVTT](https://www.w3.org/TR/webvtt1/), und verwendet nicht die gleiche Syntax. [Grundlegende Umwandlungsrichtlinien](https://www.w3.org/TR/webvtt1/) existieren.

## Aktive IMSC-Versionen

Derzeit sind zwei Versionen von IMSC in Gebrauch:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so entwickelt, dass valide IMSC 1.0.1-Dokumente auch valide IMSC 1.1-Dokumente sind und wie beabsichtigt auf einem IMSC 1.1-Renderer dargestellt werden. Es fügt jedoch wichtige Funktionen zu IMSC 1.0.1 hinzu:

- Japanische Textlayout-Merkmale wie "ruby".
- Unterstützung für von Autoren kontrollierte Leuchtdichte bei der Komposition auf absolutes Leuchtdichte-HDR-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 depreziert auch eine begrenzte Anzahl von Funktionen, die keine praktische Verwendung haben oder für die es bessere Alternativen gibt, verbietet sie jedoch nicht.

Zusammenfassend werden Autoren ermutigt, wenn möglich IMSC 1.0.1-Dokumente zu erstellen und für maximale Kompatibilität, und Implementierer werden ermutigt, Unterstützung für IMSC 1.1 zu implementieren, um weltweite Abdeckung zu erreichen.

## Zusammenfassung

Dieses Dokument bietet Ihnen alles, was Sie über IMSC und dessen Beziehung zu anderen Spezifikationen wissen müssen.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Stil von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videotimecodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
