---
title: "IMSC: Untertitel und Untertitelung für das Web"
slug: Related/IMSC
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

IMSC (TTML-Profile für Internet-Medien-Untertitel und -Untertitelung) ist ein Dateiformat zur Darstellung von Untertiteln und Untertitelungen. Es verwendet XML, um Inhalte, Timing, Layout und Stil zu beschreiben. IMSC ist konzeptionell HTML und CSS sehr ähnlich — tatsächlich haben die meisten IMSC-Stile ein direktes Äquivalent in CSS.

## Konzepte und Verwendung

IMSC wird vom W3C standardisiert und weltweit von Inhaltsproduzenten (z. B. 20th Century Fox), Online-Diensten (z. B. Netflix) und traditionellen Sendern (z. B. der BBC) genutzt. Viele Plattformen und Player unterstützen es, z. B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine breite Palette von Weltsprachen und Schriften sowie reichhaltige Stile. Neben textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist in sich geschlossen und kombiniert Inhalte, Timing, Layout und Stilinformationen. Der Inhalt des Dokuments ist mit Tags strukturiert, die den in HTML verwendeten ähnlich sind, wie `<body>`, `<div>`, `<p>`, `<span>`, und `<br>`. Timing und Stil werden mithilfe von Attributen wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` ausgedrückt — dies sind meist vertraute Konzepte für jeden, der mit CSS vertraut ist.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in mehreren Punkten von HTML:

- IMSC verwendet [Namensräume](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe ist wie `fontSize`, und Namensraumdeklarationen erforderlich sind, wie `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC hat strengere Regeln, zum Beispiel können `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorhanden sein und nicht direkte Kinder von `<body>`-Elementen sein.

Während Attributnamen und Syntax ähnlich sind, unterscheidet sich das Styling von CSS in einigen Punkten:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC [Camel Case](/de/docs/Glossary/camel_case), wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC ist nicht mit [WebVTT](/de/docs/Web/API/WebVTT_API) verwandt, was eine andere Methode zur Erstellung von Untertiteln und Untertitelungen für das Web ist.

WebVTT wird von Browsern bis zu einem gewissen Grad nativ unterstützt, während IMSC dies nicht ist.

Es gibt jedoch einen IMSC-Polyfill namens imscJS, der verwendet wird, um alle Beispiele in dieser Dokumentation zu rendern. Aus Entwicklersicht ermöglicht imscJS ein konsistentes Erlebnis über verschiedene Browser hinweg.

IMSC unterstützt auch Stile wie `tts:linePadding` und `tts:fillLineGap` sowie Funktionen wie Unterstützung für HDR und stereoskopisches 3D, die für Untertitel und Untertitelungen nützlich sind, aber in WebVTT nicht verfügbar sind.

Im Folgenden finden Sie ein Beispiel, das `tts:fillLineGap` verwendet:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
    xmlns:tts="http://www.w3.org/ns/ttml#styling"
    xmlns:itts="http://www.w3.org/ns/ttml/profile/imsc1#styling"
    xml:lang="en">
    <head>
      <styling>
       <style xml:id="defaultStyle"
              tts:fontSize="125%"
              tts:lineHeight="120%"/>
       <style xml:id="spanStyle"
              tts:backgroundColor="black"
              tts:color="white"/>
       <style xml:id="fillGap"
             itts:fillLineGap="true"/>
      </styling>
     <layout>
     <region xml:id="top"
             tts:origin="5% 5%"
             tts:extent="90% 40%"
             tts:textAlign="center"
             tts:displayAlign="before"/>
     <region xml:id="bottom"
            tts:origin="5% 55%"
            tts:extent="90% 40%"
            tts:textAlign="center"
            tts:displayAlign="after"/>
    </layout>
  </head>
 <body style="defaultStyle">
  <div>
    <p region="top">
      <span style="spanStyle">Without itts:fillLineGap<br/>
      Gaps between lines appear.</span>
    </p>
    <p region="bottom" style="fillGap">
      <span style="spanStyle">With itts:fillLineGap<br/>
      Gaps between lines are "filled".<br/></span>
    </p>
    </div>
 </body>
</tt>
```

{{EmbedGHLiveSample("imsc-examples/fillLineGap/fillLineGap.html", '100%', '256px')}}

… und ein Beispiel, das `ebutts:linePadding` verwendet:

{{EmbedGHLiveSample("imsc-examples/linePadding/linePadding.html", '100%', '256px')}}

Last but not least ist IMSC mit SMPTE-TT und EBU-TT-D kompatibel, die in den USA und in Europa weit verbreitet sind. IMSC wird auch aktiv bei der Erstellung von TV- und Film-Inhalten verwendet. Die Implementierung von IMSC-Unterstützung beseitigt daher die Notwendigkeit der Konvertierung in WebVTT.

Im Gegensatz zu IMSC, das Markup verwendet, verwendet WebVTT eine Kombination aus CSS und Klartext.

## Anleitungen

- [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics)
  - : Dies führt Sie durch die notwendigen Schritte, um mit IMSC zu beginnen, einschließlich der grundlegenden Dokumentstruktur und der Grundlagen zur Gestaltung, Zeit- und Positionsbestimmung von Untertiteln. Diese Themen werden später in eigenen Anleitungen näher erläutert.
- [Verwendung des imscJS-Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Sie benötigen derzeit einen Polyfill, um IMSC im Web zu rendern. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und auf Ihrer eigenen Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Styling von Dokumenten, und die meisten der IMSC-Stil-Eigenschaften haben direkte CSS-Äquivalente, was sie für Webentwickler vertraut macht. In diesem Leitfaden erfahren Sie mehr über das Styling von IMSC, einschließlich der Unterschiede zwischen Inline- und referentiellem Styling und effizientem Styling mithilfe von Vererbung und Regions-Styling.
- [Platzierung von Untertiteln in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC ermöglicht dem Autor, die Position von Untertiteln präzise zu steuern, so dass der Text neben dem Sprecher positioniert wird oder verhindert, dass wichtiger Inhalt in Ihrem `<video>` verdeckt wird. Lernen Sie, wie man eine Untertitelregion definiert und deren Breite und Höhe bestimmt.
- [Namensräume in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namensräume und gibt Ihnen genügend Informationen, um ihre Verwendung in IMSC zu erkennen und effektiv zu nutzen.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um zu spezifizieren, wann es erscheinen soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel starten und enden soll, mit Vor- und Nachteilen bei jeder Methode.
- [Zuordnung von Video-Zeitcodes zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Das Zuordnen des Zeitwerts oder des Zeitcodewerts, der innerhalb eines Video-Tracks oder einer Video-Editor-Zeitleiste zu sehen ist, zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, die Ihnen bewusst sein müssen, die wir in diesem Artikel behandeln werden.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis einer internationalen Bemühung, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/), wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Referenz

- [TTML-Profile für Internet-Medien-Untertitel und -Untertitelung](https://www.w3.org/TR/ttml-imsc/all/)

## Werkzeuge

- imscJS-Polyfill
  - : IMSC-Dokumente können in Browsern mithilfe des [imscJS](https://github.com/sandflow/imscJS) Polyfills gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js/wiki)
  - : Der Referenz-Player des DASH Industry Forums mit IMSC-Unterstützung.

## Spezifikationen

- [TTML-Profile für Internet-Medien-Untertitel und -Untertitelung 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC hat derzeit keine native Unterstützung in Browsern, kann jedoch effektiv über das [imscJS](https://github.com/sandflow/imscJS) Polyfill gerendert werden, um zeitgesteuerten Text in Webdokumenten anzuzeigen.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der W3C Timed Text Group entwickelt, der Sie beitreten können, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC Standards-Repository](https://github.com/w3c/imsc)
  - : Im IMSC GitHub-Repository können Sie Feedback zu den Spezifikationen geben und Probleme melden.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiterer Mechanismus zur Implementierung von Untertiteln und Untertitelungen im Web, mit einigen nativen Browserunterstützungen und nützlichen Funktionen.

## Dokumentationsprojekt-Team

Team:

- Dave Kneeland
- Pierre-Anthony Lemieux
- Andreas Tai

Wenn Sie sich an der Dokumentation zu IMSC beteiligen möchten, kontaktieren Sie bitte [Andreas Tai](mailto:tai@irt.de).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
