---
title: "IMSC: Untertitel und Captioning für das Web"
slug: Related/IMSC
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

IMSC (TTML Profile für Internet-Medien-Untertitel und -Captioning) ist ein Dateiformat zur Darstellung von Untertiteln und Captions. Es verwendet XML, um Inhalte, Timing, Layout und Styling zu beschreiben. IMSC ist konzeptionell HTML und CSS sehr ähnlich – tatsächlich haben die meisten IMSC-Stile ein direktes Pendant in CSS.

## Konzepte und Verwendung

IMSC wird vom W3C standardisiert und weltweit von Content-Produzenten (z. B. 20th Century Fox), Online-Diensten (z. B. Netflix) und traditionellen Rundfunkanstalten (z. B. der BBC) verwendet. Viele Plattformen und Player unterstützen es, z. B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine breite Palette von Weltsprachen und -schriften sowie umfangreiche Stilisierungen. Neben textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist eigenständig und kombiniert Inhalte, Timing, Layout und Stilinformationen. Der Inhalt des Dokuments ist mit Tags strukturiert, die denen in HTML ähnlich sind, wie `<body>`, `<div>`, `<p>`, `<span>`, und `<br>`. Timing und Styling werden mit Attributen wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` ausgedrückt – dies sind größtenteils vertraute Konzepte für alle, die mit CSS bekannt sind.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in mehreren Punkten von HTML:

- IMSC nutzt [Namespaces](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe wie `fontSize` ist, und Namespace-Deklarationen erforderlich sind, wie zum Beispiel `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`.
- IMSC hat strengere Regeln, zum Beispiel können `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorhanden sein und nicht direkte Kinder von `<body>`-Elementen sein.

Während Attributnamen und Syntax ähnlich sind, unterscheidet sich das Styling von CSS in einigen Punkten:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC {{Glossary("camel_case", "camel case")}}, wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC ist nicht verwandt mit [WebVTT](/de/docs/Web/API/WebVTT_API), welches eine andere Methode ist, um Untertitel und Captions für das Web zu erstellen.

WebVTT wird von Browsern nativ unterstützt, während IMSC dies nicht tut.

Es gibt jedoch ein IMSC-Polyfill namens imscJS, das verwendet wird, um alle Beispiele in dieser Dokumentation wiederzugeben. Aus der Sicht eines Entwicklers ermöglicht imscJS ein konsistentes Erlebnis über verschiedene Browser hinweg.

IMSC unterstützt auch Stile wie `tts:linePadding` und `tts:fillLineGap` sowie Funktionen wie HDR- und stereoskopische 3D-Unterstützung, die für Untertitel und Captions nützlich sind, aber in WebVTT nicht verfügbar sind.

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

Zu guter Letzt ist IMSC kompatibel mit SMPTE-TT und EBU-TT-D, die in den USA und Europa weit verbreitet sind. IMSC wird auch aktiv bei der Autorenerstellung von TV- und Film-Inhalten verwendet. Die Implementierung der IMSC-Unterstützung beseitigt daher die Notwendigkeit der Konvertierung in WebVTT.

Im Gegensatz zu IMSC, das Markup verwendet, verwendet WebVTT eine Kombination aus CSS und Klartext.

## Anleitungen

- [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics)
  - : Dies führt Sie durch das, was Sie benötigen, um mit IMSC zu beginnen, einschließlich des grundlegenden Dokumentaufbaus sowie der Grundlagen zum Stylen, Timing und Positionieren von Untertiteln. Diese Themen werden später in eigenen Anleitungen vertieft.
- [Verwendung des imscJS-Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast die gesamte IMSC-Funktionalität abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS verwenden und wie Sie es in Ihre eigene Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Stylen von Dokumenten, und die meisten IMSC-Stil-Eigenschaften haben direkte CSS-Äquivalente, was sie Webentwicklern vertraut macht. In diesem Leitfaden erfahren Sie mehr über das Styling in IMSC, einschließlich des Unterschieds zwischen Inline- und Referenzstyling sowie effizientes Styling mithilfe von Vererbung und Regionsstyling.
- [Untertitelplatzierung in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC ermöglicht es dem Autor, die Position von Untertiteln präzise zu steuern, sodass der Text neben dem Sprecher positioniert wird oder um zu vermeiden, dass wichtiger Inhalt in Ihrem Video verdeckt wird. Lernen Sie, wie Sie eine Untertitelregion definieren und ihre Breite und Höhe festlegen.
- [Namespaces in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namespaces, gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und sie effektiv nutzen zu können.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Timing-Informationen enthalten, um anzugeben, wann es erscheinen soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel beginnen und aufhören soll, angezeigt zu werden, jeweils mit Vor- und Nachteilen.
- [Zuordnung von Videozeitcodes zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Die Zuordnung der im Videotrack oder der Videobearbeitungs-Timeline angezeigten Zeit- oder Zeitcodewerte zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, von denen Sie wissen müssen, die wir in diesem Artikel behandeln werden.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis einer internationalen Anstrengung, beliebte Profile von [TTML](https://www.w3.org/TR/ttml/) zusammenzuführen, wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854). Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards zusammenhängt, und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Referenz

- [TTML Profile für Internet-Medien-Untertitel und -Captioning](https://www.w3.org/TR/ttml-imsc/all/)

## Werkzeuge

- imscJS-Polyfill
  - : IMSC-Dokumente können in Browsern mithilfe des [imscJS](https://github.com/sandflow/imscJS) Polyfills gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js)
  - : Der Referenzplayer des DASH Industry Forums mit IMSC-Unterstützung.

## Spezifikationen

- [TTML Profile für Internet-Medien-Untertitel und -Captioning 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC wird derzeit nicht nativ von Browsern unterstützt, kann aber effektiv verwendet werden, um zeitgesteuerten Text in Web-Dokumenten über das [imscJS](https://github.com/sandflow/imscJS) Polyfill darzustellen.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der W3C Timed Text Group entwickelt. Sie werden ermutigt, dieser Gruppe beizutreten, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC-Standards-Repository](https://github.com/w3c/imsc)
  - : Im IMSC GitHub-Repository können Sie Feedback zu den Spezifikationen geben und Probleme melden.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiteres Verfahren zur Implementierung von Captions und Untertiteln im Web, das von einigen Browsern nativ unterstützt wird und nützliche Funktionen aufweist.

## Dokumentationsprojekt-Team

Team:

- Dave Kneeland
- Pierre-Anthony Lemieux
- Andreas Tai

Wenn Sie sich an der Dokumentation von IMSC beteiligen möchten, wenden Sie sich bitte an [Andreas Tai](mailto:tai@irt.de).

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
