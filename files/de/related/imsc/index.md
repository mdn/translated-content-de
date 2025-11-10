---
title: "IMSC: Untertitel und Captioning für das Web"
short-title: IMSC
slug: Related/IMSC
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

IMSC (TTML-Profile für Internetmedien-Untertitel und -Captions) ist ein Dateiformat zur Darstellung von Untertiteln und Captions. Es verwendet XML, um Inhalt, Timing, Layout und Styling zu beschreiben. IMSC ist konzeptionell HTML und CSS sehr ähnlich – tatsächlich haben die meisten IMSC-Stile ein direktes Äquivalent in CSS.

## Konzepte und Nutzung

IMSC wird von der W3C standardisiert und weltweit von Content-Produzenten (z. B. 20th Century Fox), Online-Diensten (z. B. Netflix) und traditionellen Rundfunkanstalten (z. B. der BBC) genutzt. Viele Plattformen und Player unterstützen es, z. B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine breite Palette von Weltsprachen und Schriften sowie reichhaltiges Styling. Neben textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist in sich geschlossen und kombiniert Inhalte sowie Timing-, Layout- und Styling-Informationen. Der Inhalt des Dokuments ist in Tags strukturiert, die ähnlich denen sind, die in HTML verwendet werden, wie `<body>`, `<div>`, `<p>`, `<span>`, und `<br>`. Timing und Styling werden durch Attribute ausgedrückt, wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` – dies sind größtenteils vertraute Konzepte für jeden, der mit CSS vertraut ist.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in mehreren Punkten von HTML:

- IMSC verwendet [Namespaces](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe ist wie `fontSize`, und Namespace-Deklarationen erforderlich sind, wie zum Beispiel
  `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC hat strengere Regeln, z. B. dürfen `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorkommen und nicht direkte Kinder von `<body>`-Elementen sein.

Während die Attributnamen und die Syntax ähnlich sind, unterscheidet sich das Styling in ein paar Aspekten von CSS:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC {{Glossary("camel_case", "camel case")}}, wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC hat keine Verbindung zu [WebVTT](/de/docs/Web/API/WebVTT_API), welches eine andere Methode zur Erstellung von Untertiteln und Captions für das Web ist.

WebVTT wird bis zu einem gewissen Grad nativ von Browsern unterstützt, während IMSC dies nicht ist.

Es gibt jedoch ein IMSC-Polyfill, genannt imscJS, das verwendet wird, um alle Beispiele in dieser Dokumentation zu rendern. Aus der Perspektive eines Entwicklers ermöglicht imscJS ein konsistentes Erlebnis über verschiedene Browser hinweg.

IMSC unterstützt zudem Stile wie `tts:linePadding` und `tts:fillLineGap` sowie Funktionen wie die Unterstützung für HDR und stereoskopisches 3D, die für Untertitel und Captions nützlich sind, aber in WebVTT nicht verfügbar sind.

Unten finden Sie ein Beispiel, das `tts:fillLineGap` verwendet:

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

Nicht zuletzt ist IMSC mit SMPTE-TT und EBU-TT-D kompatibel, die in den USA und Europa weit verbreitet sind. IMSC wird auch aktiv bei der Erstellung von TV- und Film-Inhalten verwendet. Die Implementierung von IMSC-Unterstützung macht daher eine Konvertierung zu WebVTT überflüssig.

Im Gegensatz zu IMSC, das Markup verwendet, verwendet WebVTT eine Kombination aus CSS und Klartext.

## Tutorials

- [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics)
  - : Dies führt Sie durch die Grundlagen, die Sie benötigen, um mit IMSC zu starten, einschließlich der grundlegenden Dokumentstruktur und der Grundlagen, wie man Untertitel stilisiert, zeitlich festlegt und positioniert. Diese Themen werden später in eigenen Anleitungen vertieft.
- [Verwendung des imscJS-Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Derzeit benötigen Sie ein Polyfill, um IMSC im Web zu rendern. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und nahezu vollständige Abdeckung der IMSC-Funktionen bietet. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und in Ihre eigene Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Styling von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte CSS-Äquivalente, was sie Webentwicklern vertraut macht. In diesem Leitfaden lernen Sie mehr über das Styling in IMSC, einschließlich der Unterschiede zwischen Inline- und referenziellem Styling sowie effizientem Styling durch Vererbung und Regionen-Styling.
- [Untertitelplatzierung in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC erlaubt es dem Autor, die Position von Untertiteln präzise zu kontrollieren, sodass der Text neben dem Sprecher positioniert oder wichtiges Video-Inhalts nicht verdeckt wird. Lernen Sie, wie Sie eine Untertitel-Region definieren und ihre Breite und Höhe festlegen.
- [Namespaces in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namespaces und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und sie effektiv nutzen zu können.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um anzugeben, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten zu beschreiben, wann ein Untertitel beginnen und enden soll, mit Vor- und Nachteilen für jede Methode.
- [Zuordnung von Videozeitcodes zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Die Zuordnung von Zeit- oder Zeitcode-Werten, die innerhalb eines Videoträger oder einer Timeline eines Videoeditors angezeigt werden, zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, derer Sie sich bewusst sein sollten, die wir in diesem Artikel behandeln werden.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis eines internationalen Bestrebens, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/), wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854), zusammenzuführen. Dieser Artikel bietet einen Überblick, wie IMSC in Bezug zu diesen anderen Untertitelstandards steht und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Referenz

- [TTML-Profile für Internetmedien-Untertitel und -Captions](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Werkzeuge

- imscJS Polyfill
  - : IMSC-Dokumente können in Browsern mit dem [imscJS](https://github.com/sandflow/imscJS) Polyfill gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js)
  - : Der Referenz-Player des DASH Industry Forum mit IMSC-Unterstützung.

## Spezifikationen

- [TTML-Profile für Internetmedien-Untertitel und -Captions 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC hat derzeit keine native Unterstützung in Browsern, kann jedoch über das [imscJS](https://github.com/sandflow/imscJS) Polyfill effektiv genutzt werden, um zeitgesteuerten Text in Webdokumenten darzustellen.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der W3C Timed Text Group entwickelt, der Sie beitreten können, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC-Standards-Repository](https://github.com/w3c/imsc)
  - : Im IMSC GitHub-Repository können Sie Rückmeldungen zu den Spezifikationen geben und Issues einreichen.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiterer Mechanismus zur Implementierung von Untertiteln und Captions im Web, der in einigen Browsern nativ unterstützt wird und einige nützliche Funktionen bietet.

## Docs-Projektteam

Team:

- Dave Kneeland
- Pierre-Anthony Lemieux
- Andreas Tai

Wenn Sie an der Dokumentation von IMSC mitarbeiten möchten, kontaktieren Sie bitte [Andreas Tai](mailto:tai@irt.de).
