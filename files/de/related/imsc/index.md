---
title: "IMSC: Untertitel und Captioning für das Web"
short-title: IMSC
slug: Related/IMSC
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

IMSC (TTML-Profile für Internet-Medienuntertitel und -Captioning) ist ein Dateiformat zur Darstellung von Untertiteln und Captioning. Es verwendet XML, um Inhalt, Timing, Layout und Styling zu beschreiben. IMSC ist konzeptionell HTML und CSS sehr ähnlich – tatsächlich haben die meisten IMSC-Stile ein direktes Äquivalent in CSS.

## Konzepte und Nutzung

IMSC wird vom W3C standardisiert und weltweit von Inhaltsproduzenten (z.B. 20th Century Fox), Online-Diensten (z.B. Netflix) und traditionellen Rundfunkanstalten (z.B. der BBC) genutzt. Viele Plattformen und Player unterstützen es, z.B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine breite Palette von Weltsprachen und Schriftsystemen sowie reichhaltiges Styling. Zusätzlich zu textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist eigenständig und kombiniert Inhalte, Timing, Layout und Styling-Informationen. Der Inhalt des Dokuments wird mit Tags strukturiert, die den in HTML verwendeten ähnlich sind, wie `<body>`, `<div>`, `<p>`, `<span>` und `<br>`. Timing und Styling werden mittels Attributen wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` ausgedrückt – dies sind überwiegend vertraute Konzepte für jeden, der mit CSS vertraut ist.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in mehreren Punkten von HTML:

- IMSC verwendet [Namespaces](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe ist wie `fontSize`, und es sind Namespace-Deklarationen erforderlich, wie z. B.
  `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC hat strengere Regeln, zum Beispiel können `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorhanden sein und nicht direkt unter `<body>`-Elementen.

Während Attributnamen und -syntax ähnlich sind, unterscheidet sich das Styling von CSS in einigen Punkten:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC {{Glossary("camel_case", "camel case")}}, wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC ist nicht verwandt mit [WebVTT](/de/docs/Web/API/WebVTT_API), das eine andere Methode zur Erstellung von Untertiteln und Captioning für das Web darstellt.

WebVTT wird in gewissem Umfang nativen von Browsern unterstützt, während IMSC nicht unterstützt wird.

Es gibt jedoch ein IMSC Polyfill namens imscJS, das zum Rendern aller Beispiele in dieser Dokumentation verwendet wird. Aus Entwicklersicht bietet imscJS eine konsistente Erfahrung über alle Browser hinweg.

IMSC unterstützt auch Stile wie `tts:linePadding` und `tts:fillLineGap` sowie Funktionen wie Unterstützung für HDR und stereoskopisches 3D, die nützlich für Untertitel und Captioning sind, aber in WebVTT nicht verfügbar sind.

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

Last but not least, IMSC ist kompatibel mit SMPTE-TT und EBU-TT-D, die in den USA und Europa weit verbreitet sind. IMSC wird auch aktiv beim Verfassen von TV- und Film-Inhalten verwendet. Die Implementierung von IMSC-Unterstützung macht daher die Konvertierung in WebVTT überflüssig.

Im Gegensatz zu IMSC, das Markup verwendet, nutzt WebVTT eine Kombination aus CSS und Klartext.

## Tutorials

- [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics)
  - : Dies führt Sie durch das, was Sie benötigen, um mit IMSC zu beginnen, einschließlich der grundlegenden Dokumentstruktur und der Grundlagen, wie Sie Untertitel gestalten, zeitlich festlegen und positionieren. Diese Themen werden später in eigenen Tutorials erweitert.
- [Verwendung des imscJS Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Sie benötigen derzeit ein Polyfill, um IMSC im Web zu rendern. ImscJS ist eine gute Wahl, da es aktiv gepflegt wird und nahezu vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und in Ihre eigene Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Styling von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte CSS-Äquivalente, die Webentwicklern vertraut sind. In diesem Leitfaden erfahren Sie mehr über das Styling von IMSC-Dokumenten, einschließlich der Unterschiede zwischen Inline- und referenziellem Styling sowie effizientem Styling durch Vererbung und Regionsstyling.
- [Untertitelplatzierung in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC ermöglicht es dem Autor, die Position der Untertitel genau zu steuern, sodass der Text neben dem Sprecher positioniert oder wichtiges Videoinhalt nicht verdeckt wird. Lernen Sie, wie eine Untertitelregion definiert wird und wie man ihre Breite und Höhe festlegt.
- [Namespaces in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namespace und gibt Ihnen genügend Informationen, um ihre Anwendung in IMSC zu erkennen und sie effektiv zu nutzen.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um festzulegen, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel angezeigt werden soll, mit Vor- und Nachteilen bei jeder Methode.
- [Mapping von Videotimecodes auf IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Das Zuordnen der im Videotrack oder der Video-Editor-Zeitleiste sichtbaren Zeitwerte zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige unterschiedliche Probleme, derer Sie sich bewusst sein müssen, die wir in diesem Artikel behandeln werden.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis einer internationalen Anstrengung beliebte Profile von [TTML](https://www.w3.org/TR/ttml/) wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzubringen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards in Beziehung steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Referenz

- [TTML-Profile für Internet-Medienuntertitel und -Captioning](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Werkzeuge

- imscJS Polyfill
  - : IMSC-Dokumente können in Browsern mit dem [imscJS](https://github.com/sandflow/imscJS) Polyfill gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js)
  - : Der Referenzplayer des DASH Industry Forums mit IMSC-Unterstützung.

## Spezifikationen

- [TTML-Profile für Internet-Medienuntertitel und -Captioning 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC hat derzeit keine native Unterstützung in Browsern, kann jedoch effektiv genutzt werden, um getimten Text in Webdokumenten über das [imscJS](https://github.com/sandflow/imscJS) Polyfill zu rendern.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der Timed Text Group des W3C entwickelt, der Sie beitreten können, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC-Standards-Repository](https://github.com/w3c/imsc)
  - : Im IMSC-GitHub-Repository können Sie Feedback zu den Spezifikationen geben und Probleme melden.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiteres Verfahren zur Implementierung von Untertiteln und Captioning im Web, das in Browsern nativen unterstützt wird und einige nützliche Funktionen bietet.

## Docs-Projekt-Team

Team:

- Dave Kneeland
- Pierre-Anthony Lemieux
- Andreas Tai

Wenn Sie sich an der Dokumentation von IMSC beteiligen möchten, kontaktieren Sie bitte [Andreas Tai](mailto:tai@irt.de).
