---
title: "IMSC: Untertitel und Captioning für das Web"
slug: Related/IMSC
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

IMSC (TTML Profiles for Internet Media Subtitles and Captions) ist ein Dateiformat zur Darstellung von Untertiteln und Bildunterschriften. Es verwendet XML, um Inhalte, Timing, Layout und Stil zu beschreiben. IMSC ist im Konzept HTML und CSS sehr ähnlich — in der Tat haben die meisten IMSC-Stile direkte Entsprechungen in CSS.

## Konzepte und Nutzung

IMSC wird vom W3C standardisiert und weltweit von Inhaltsproduzenten (z.B. 20th Century Fox), Online-Diensten (z.B. Netflix) und traditionellen Rundfunkanstalten (z.B. der BBC) verwendet. Viele Plattformen und Player unterstützen es, z.B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine breite Palette von Weltsprachen und Schriftsystemen sowie reichhaltige Stile. Neben textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist in sich geschlossen und verbindet Inhalte, Timing, Layout und Stilinformationen. Der Inhalt des Dokuments ist mit Tags strukturiert, die denen in HTML ähnlich sind, wie `<body>`, `<div>`, `<p>`, `<span>` und `<br>`. Timing und Styling werden durch Attribute wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` ausgedrückt — diese sind denjenigen, die mit CSS vertraut sind, meist bekannt.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in mehreren Punkten von HTML:

- IMSC verwendet [Namespaces](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe ist wie `fontSize`, und es sind Namensraumdeklarationen erforderlich, wie
  `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC hat strengere Regeln, zum Beispiel können `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorhanden sein und nicht direkte Kinder von `<body>`-Elementen sein.

Obwohl die Attributnamen und die Syntax ähnlich sind, unterscheidet sich das Styling von CSS in ein paar Punkten:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC [Camel Case](/de/docs/Glossary/camel_case), wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC ist nicht mit [WebVTT](/de/docs/Web/API/WebVTT_API) verwandt, einem weiteren Weg, Untertitel und Bildunterschriften für das Web zu erstellen.

WebVTT wird in gewissem Maße nativ von Browsern unterstützt, während IMSC dies nicht tut.

Es gibt jedoch ein IMSC-Polyfill namens imscJS, das verwendet wird, um alle Beispiele in dieser Dokumentation zu rendern. Aus Sicht des Entwicklers ermöglicht imscJS eine konsistente Erfahrung über verschiedene Browser hinweg.

IMSC unterstützt auch Stile wie `tts:linePadding` und `tts:fillLineGap` sowie Funktionen, wie die Unterstützung von HDR und stereoskopischem 3D, die für Untertitel und Bildunterschriften nützlich sind, aber in WebVTT nicht verfügbar sind.

Hier ist ein Beispiel, das `tts:fillLineGap` verwendet:

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

Zu guter Letzt ist IMSC mit SMPTE-TT und EBU-TT-D kompatibel, die in den USA und Europa weit verbreitet sind. IMSC wird auch aktiv bei der Erstellung von TV- und Film-Inhalten verwendet. Die Implementierung der IMSC-Unterstützung macht daher die Konvertierung zu WebVTT überflüssig.

Im Gegensatz zu IMSC, das Markup verwendet, nutzt WebVTT eine Kombination aus CSS und Klartext.

## Anleitungen

- [IMSC Grundlagen](/de/docs/Related/IMSC/Basics)
  - : Dies führt Sie durch das, was Sie benötigen, um mit IMSC zu beginnen, einschließlich grundlegender Dokumentstruktur und der Grundlagen von Styling, Timing und Positionierung von Untertiteln. Diese Themen werden später in eigenen Anleitungen weiter vertieft.
- [Verwendung des imscJS Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Derzeit benötigen Sie ein Polyfill, um IMSC im Web zu rendern. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast alle IMSC-Funktionen abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und in Ihre eigene Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Styling von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte Entsprechungen in CSS und sind Webentwicklern daher vertraut. In diesem Leitfaden erfahren Sie mehr über das IMSC-Styling, einschließlich der Unterschiede zwischen Inline- und Referenz-Styling und effizientem Styling mithilfe von Vererbung und Bereichs-Styling.
- [Untertitelplatzierung in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC ermöglicht es dem Autor, die Position von Untertiteln präzise zu steuern, sodass der Text neben dem Sprecher positioniert wird oder um zu vermeiden, dass wichtiger Inhalt in Ihrem Video verdeckt wird. Erfahren Sie, wie Sie eine Untertitelregion definieren und wie Sie deren Breite und Höhe festlegen.
- [Namespaces in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namensräume und gibt Ihnen genug Informationen, um deren Verwendung in IMSC zu erkennen und sie effektiv nutzen zu können.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um anzugeben, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel beginnen und enden soll, mit Vor- und Nachteilen für jede Methode.
- [Mapping von Videocode-Zeiten zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Das Mapping der Zeit oder des Zeitcodewerts, der in einem Videotrack oder der Zeitleiste eines Videoeditors zu sehen ist, auf ein IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, auf die Sie achten müssen, die wir in diesem Artikel behandeln.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis eines internationalen Bemühens, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/), wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854), zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards zusammenhängt und erklärt die Unterschiede zwischen den IMSC-Versionen.

## Referenz

- [TTML Profiles for Internet Media Subtitles and Captions](https://www.w3.org/TR/ttml-imsc/all/)

## Tools

- imscJS Polyfill
  - : IMSC-Dokumente können in Browsern mit dem [imscJS](https://github.com/sandflow/imscJS) Polyfill gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js/wiki)
  - : Der Referenz-Player des DASH Industry Forum mit IMSC-Unterstützung.

## Spezifikationen

- [TTML Profiles for Internet Media Subtitles and Captions 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC hat zum jetzigen Zeitpunkt keine native Unterstützung in Browsern, kann aber effektiv verwendet werden, um zeitgesteuerten Text in Webdokumenten über das [imscJS](https://github.com/sandflow/imscJS) Polyfill zu rendern.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der W3C Timed Text Group entwickelt, der Sie beitreten können, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC Standards Repository](https://github.com/w3c/imsc)
  - : Im IMSC GitHub-Repository können Sie Feedback zu den Spezifikationen geben und Probleme melden.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiterer Mechanismus zur Umsetzung von Untertiteln und Bildunterschriften im Web, der einige native Unterstützung in Browsern und einige nützliche Funktionen bietet.

## Dokumentationsprojekt-Team

Team:

- Dave Kneeland
- Pierre-Anthony Lemieux
- Andreas Tai

Wenn Sie sich an der Dokumentation von IMSC beteiligen möchten, kontaktieren Sie bitte [Andreas Tai](mailto:tai@irt.de).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Videocode-Zeiten zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
