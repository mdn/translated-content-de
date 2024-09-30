---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

IMSC ist das Ergebnis einer internationalen Anstrengung, um weit verbreitete Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards zusammenhängt und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Genealogie der IMSC-Spezifikation

[TTML Profiles for Internet Media Subtitles and Captions](https://www.w3.org/TR/ttml-imsc/all/) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweite Untertitel- und Untertitelfamilien von Spezifikationen.

IMSC wurde als praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) entwickelt, das von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als Sicherheitsformat bezeichnet wird. Infolgedessen sollten die meisten SMPTE-TT-Dokumente mit IMSC-Renderern korrekt dargestellt werden (siehe [die Einschränkungen](https://www.w3.org/TR/ttml-imsc1.0.1/#smpte-tt-smpte-st-2052-1)), und die Konvertierungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) sind auch auf IMSC anwendbar.

IMSC ist auch ein syntaktisches Superset von sowohl [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), sodass Dokumente, die diesen beiden Formaten entsprechen, gültige IMSC-Dokumente sind und von IMSC-Renderern dargestellt werden können — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://www.w3.org/TR/2018/REC-ttml-imsc1.0.1-20180424/#interop-examples) für weitere Details.

IMSC hat seine Ursprünge im CFF-TT-Format, und [CFF-TT-Dokumente](https://www.w3.org/TR/ttml-imsc1.1/#cff-tt) können relativ einfach in IMSC konvertiert werden.

IMSC ist nicht mit [WebVTT](https://www.w3.org/TR/webvtt1/) verwandt und verwendet nicht dieselbe Syntax. [Grundlegende Konvertierungsrichtlinien](https://www.w3.org/TR/webvtt1/) existieren.

## Aktive IMSC-Versionen

Heute sind zwei Versionen von IMSC im Einsatz:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so konzipiert, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie beabsichtigt auf einem IMSC 1.1-Renderer dargestellt werden. Es fügt jedoch wichtige Funktionen auf IMSC 1.0.1 hinzu:

- Japanische Textlayout-Funktionen wie Ruby.
- Unterstützung für von Autoren kontrollierte Leuchtdichte beim Zusammenfügen mit absoluter Leuchtdichte bei High-Dynamic-Range-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 macht eine begrenzte Anzahl von Funktionen, die keinen praktischen Nutzen haben oder für die bessere Alternativen existieren, obsolet, verbietet sie jedoch nicht.

Zusammenfassend werden Autoren ermutigt, möglichst IMSC 1.0.1-Dokumente für maximale Kompatibilität zu erstellen, und Implementierer werden ermutigt, die Unterstützung für IMSC 1.1 für weltweite Abdeckung zu implementieren.

## Zusammenfassung

Dieses Dokument gibt Ihnen alles, was Sie über IMSC und seine Beziehung zu anderen Spezifikationen wissen müssen.

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
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocode zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
