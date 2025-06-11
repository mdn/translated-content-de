---
title: "IMSC: Untertitel und Captioning für das Web"
slug: Related/IMSC
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

IMSC (TTML Profile für Internet-Medienuntertitel und -beschriftungen) ist ein Dateiformat zur Darstellung von Untertiteln und Beschriftungen. Es verwendet XML, um Inhalt, Timing, Layout und Styling zu beschreiben. IMSC ist konzeptionell HTML und CSS sehr ähnlich – in der Tat haben die meisten IMSC-Stile ein direktes Äquivalent in CSS.

## Konzepte und Verwendung

IMSC wird vom W3C standardisiert und weltweit von Inhaltsproduzenten (z. B. 20th Century Fox), Online-Diensten (z. B. Netflix) und traditionellen Rundfunkanstalten (z. B. die BBC) verwendet. Viele Plattformen und Player unterstützen das Format, z. B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine breite Palette von Weltsprachen und Schriftsystemen sowie reichhaltiges Styling. Neben textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist eigenständig und kombiniert Inhalt, Timing, Layout und Styling-Informationen. Der Inhalt des Dokuments ist mit Tags strukturiert, die denen von HTML ähnlich sind, wie `<body>`, `<div>`, `<p>`, `<span>` und `<br>`. Timing und Styling werden mit Attributen wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` ausgedrückt – dies sind größtenteils vertraute Konzepte für alle, die mit CSS vertraut sind.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in mehreren Punkten von HTML:

- IMSC verwendet [Namespaces](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe ist wie `fontSize`, und Namespace-Deklarationen erforderlich sind, wie
  `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC hat strengere Regeln, zum Beispiel können `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorhanden sein und nicht direkte Kinder von `<body>`-Elementen sein.

Während Attributnamen und Syntax ähnlich sind, unterscheidet sich das Styling von CSS in einigen Punkten:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC {{Glossary("camel_case", "camel case")}}, wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC ist nicht mit [WebVTT](/de/docs/Web/API/WebVTT_API) verwandt, das eine andere Möglichkeit darstellt, Untertitel und Beschriftungen für das Web zu erstellen.

WebVTT wird von Browsern bis zu einem gewissen Grad nativ unterstützt, während IMSC nicht nativ unterstützt wird.

Es gibt jedoch ein IMSC-Polyfill namens imscJS, das verwendet wird, um alle Beispiele in dieser Dokumentation darzustellen. Aus der Perspektive eines Entwicklers ermöglicht imscJS ein konsistentes Erlebnis über verschiedene Browser hinweg.

IMSC unterstützt auch Stile wie `tts:linePadding` und `tts:fillLineGap` und Funktionen wie die Unterstützung für HDR und stereoskopisches 3D, die für Untertitel und Beschriftungen nützlich sind, aber in WebVTT nicht verfügbar sind.

Unten ist ein Beispiel, das `tts:fillLineGap` verwendet:

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

Zu guter Letzt ist IMSC mit SMPTE-TT und EBU-TT-D kompatibel, die in den USA und in Europa weit verbreitet sind. IMSC wird auch aktiv bei der Erstellung von TV- und Film-Inhalten verwendet. Die Implementierung von IMSC-Unterstützung beseitigt daher die Notwendigkeit einer Konvertierung zu WebVTT.

Im Gegensatz zu IMSC, das Markup verwendet, verwendet WebVTT eine Kombination aus CSS und Klartext.

## Anleitungen

- [Grundlagen von IMSC](/de/docs/Related/IMSC/Basics)
  - : Diese Einführung erläutert, was Sie benötigen, um mit IMSC zu beginnen, einschließlich grundlegender Dokumentstruktur und der Grundlagen, wie Untertitel gestylt, getimed und positioniert werden. Diese Themen werden später in eigenen Anleitungen ausführlicher behandelt.
- [Verwendung des imscJS-Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Sie benötigen derzeit ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und nahezu die gesamte IMSC-Funktionalität abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und auf Ihre eigene Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Styling von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte CSS-Äquivalente, was sie Webentwicklern vertraut macht. In diesem Leitfaden lernen Sie mehr über IMSC-Styling, einschließlich des Unterschieds zwischen Inline- und referenziellem Styling sowie effizientes Styling durch Vererbung und Regionsstyling.
- [Untertitelplatzierung in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC ermöglicht dem Autor, die Position der Untertitel genau zu kontrollieren, sodass der Text neben dem Sprecher positioniert oder vermieden wird, dass wichtiger Inhalt in Ihrem Video verdeckt wird. Lernen Sie, wie man eine Untertitelregion definiert und wie man deren Breite und Höhe definiert.
- [Namespaces in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namespaces und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und effektiv zu nutzen.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jeder definierte Textbaustein Timing-Informationen enthalten, um anzugeben, wann er angezeigt werden soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel beginnt und endet, wobei jede Methode Vor- und Nachteile hat.
- [Mapping von Videotimecodes zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Die Zuordnung der im Videotrack oder der Zeitleiste des Videoeditors gesehenen Zeit- oder Timecode-Werte zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, derer Sie sich bewusst sein müssen, die wir in diesem Artikel behandeln werden.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis eines internationalen Bemühens, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/), wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitel-Standards zusammenhängt und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Referenz

- [TTML Profile für Internet-Medienuntertitel und -beschriftungen](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Tools

- imscJS Polyfill
  - : IMSC-Dokumente können in Browsern unter Verwendung des [imscJS](https://github.com/sandflow/imscJS) Polyfills gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js)
  - : Der Referenzplayer des DASH Industry Forums mit IMSC-Unterstützung.

## Spezifikationen

- [TTML Profile für Internet-Medienuntertitel und -beschriftungen 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC hat derzeit keine native Unterstützung in Browsern, kann jedoch über das [imscJS](https://github.com/sandflow/imscJS) Polyfill effektiv verwendet werden, um zeitgesteuerten Text in Webdokumenten darzustellen.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der W3C Timed Text Group entwickelt, der Sie beitreten können, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC Standards Repository](https://github.com/w3c/imsc)
  - : Im IMSC-GitHub-Repository können Sie Feedback zu den Spezifikationen geben und Probleme melden.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiterer Mechanismus zur Implementierung von Untertiteln und Beschriftungen im Web, der eine gewisse native Unterstützung in Browsern hat und einige nützliche Features bietet.

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
          <li><a href="/de/docs/Related/IMSC/Basics">Grundlagen von IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Videotimecodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
