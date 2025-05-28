---
title: IMSC und andere Standards
slug: Related/IMSC/IMSC_and_other_standards
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

IMSC ist das Ergebnis einer internationalen Anstrengung, um beliebte Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzubringen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht, und erklärt die Unterschiede zwischen den Versionen von IMSC.

## IMSC Spezifikationsgenealogie

[TTML-Profile für internetbasierte Untertitel und Untertitel](https://www.w3.org/TR/ttml-imsc/all/) (oder IMSC) ist eine eingeschränkte Version der Timed Text Markup Language für weltweite Untertitel- und Textunterschriften-Spezifikationen.

IMSC wurde als praktische Anwendung von SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)) entwickelt, welches von der [FCC](https://www.law.cornell.edu/cfr/text/47/79.103) als sicherer Hafen-Format anerkannt ist. Infolgedessen sollten die meisten SMPTE-TT-Dokumente korrekt mit IMSC-Renderern dargestellt werden (siehe [die Einschränkungen](https://www.w3.org/TR/ttml-imsc1.0.1/#smpte-tt-smpte-st-2052-1)), und die Konvertierungsrichtlinien von CTA 608/708 zu SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) und [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) sind auch für IMSC anwendbar.

IMSC ist auch ein syntaktisches Superset sowohl von [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) als auch von [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), sodass Dokumente, die mit einem dieser beiden Formate konform sind, gültige IMSC-Dokumente sind und von IMSC-Renderern dargestellt werden können — siehe [Kompatibilität mit anderen TTML-basierten Spezifikationen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#interop-examples) für mehr Details.

IMSC hat seine Ursprünge im CFF-TT-Format, und [CFF-TT-Dokumente](https://www.w3.org/TR/ttml-imsc1.1/#cff-tt) können relativ einfach in IMSC umgewandelt werden.

IMSC ist nicht mit [WebVTT](https://w3c.github.io/webvtt/) verwandt und verwendet nicht dieselbe Syntax.

## Aktive IMSC-Versionen

Zwei Versionen von IMSC sind heute in Gebrauch:

- [IMSC 1.0.1](https://www.w3.org/TR/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/)

IMSC 1.1 wurde so gestaltet, dass gültige IMSC 1.0.1-Dokumente auch gültige IMSC 1.1-Dokumente sind und wie vorgesehen auf einem IMSC 1.1-Renderer dargestellt werden. Es fügt jedoch wichtige Funktionen gegenüber IMSC 1.0.1 hinzu:

- Japanische Textlayout-Funktionen wie Ruby.
- Unterstützung für vom Autor kontrollierte Leuchtdichte bei der Komposition auf absolutes Leuchtdichte-High-Dynamic-Range-Video.
- Unterstützung für stereoskopisches 3D.

> [!NOTE]
> IMSC 1.1 deklassiert auch eine begrenzte Anzahl von Funktionen, die keinen praktischen Nutzen haben oder für die es bessere Alternativen gibt, verbietet diese jedoch nicht.

Zusammenfassend wird den Autoren empfohlen, wenn möglich IMSC 1.0.1-Dokumente zu erstellen, um maximale Kompatibilität zu erreichen, und Implementierer werden ermutigt, die Unterstützung für IMSC 1.1 für weltweite Abdeckung zu implementieren.

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
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Die Nutzung des imscJS Polyfills</a></li>
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
