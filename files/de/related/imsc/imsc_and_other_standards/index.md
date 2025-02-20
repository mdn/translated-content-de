---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

IMSC ist das Ergebnis einer internationalen Anstrengung, gängige Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards verbunden ist, und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Herkunft der IMSC-Spezifikation

[TTML Profile für Internet-Media-Untertitel und -Titel](https://www.w3.org/TR/ttml-imsc/all/) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweit einheitliche Spezifikationen von Untertiteln und Titel.

IMSC wurde als praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) entwickelt, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als ein Safe-Harbor-Format angesehen wird. Deshalb sollten die meisten SMPTE-TT-Dokumente korrekt mit IMSC-Renderern dargestellt werden können (siehe [die Einschränkungen](https://www.w3.org/TR/ttml-imsc1.0.1/#smpte-tt-smpte-st-2052-1)), und die Richtlinien zur Konvertierung von CTA 608/708 in SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) gelten auch für IMSC.

IMSC ist auch eine syntaktische Obermenge sowohl von [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch von [EBU-TT-D](https://tech.ebu.ch/publications/tech3380). Dokumente, die einem dieser beiden Formate entsprechen, sind gültige IMSC-Dokumente und können von IMSC-Renderern verarbeitet werden — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#interop-examples) für weitere Details.

IMSC geht auf das CFF-TT-Format zurück, und [CFF-TT-Dokumente](https://www.w3.org/TR/ttml-imsc1.1/#cff-tt) können relativ einfach in IMSC konvertiert werden.

IMSC ist nicht mit [WebVTT](https://www.w3.org/TR/webvtt1/) verwandt und verwendet nicht dieselbe Syntax. [Grundlegende Konvertierungsrichtlinien](https://www.w3.org/TR/webvtt1/) existieren.

## Aktive IMSC-Versionen

Zwei Versionen von IMSC sind derzeit im Einsatz:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so entwickelt, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie beabsichtigt auf einem IMSC 1.1-Renderer dargestellt werden. Es fügt jedoch wichtige Funktionen hinzu, die über IMSC 1.0.1 hinausgehen:

- Japanische Textlayout-Funktionen wie Ruby.
- Unterstützung für eine vom Autor kontrollierte Leuchtdichte beim Zusammensetzen auf absolute Leuchtdichte in High-Dynamic-Range-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 legt eine geringe Anzahl von Funktionen als veraltet fest, verbietet sie jedoch nicht, wenn sie keinen praktischen Nutzen haben oder bessere Alternativen existieren.

Zusammenfassend lässt sich sagen, dass Autoren ermutigt werden, nach Möglichkeit IMSC 1.0.1-Dokumente zu erstellen, um maximale Kompatibilität sicherzustellen. Implementierer werden dazu ermutigt, Unterstützung für IMSC 1.1 zu implementieren, um eine weltweite Abdeckung zu gewährleisten.

## Zusammenfassung

Dieses Dokument gibt Ihnen alle notwendigen Informationen über IMSC und dessen Verhältnis zu anderen Spezifikationen.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
