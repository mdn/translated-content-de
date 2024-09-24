---
title: "IMSC: Untertitel und Untertitelung für das Web"
slug: Related/IMSC
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

IMSC (TTML Profile für Internet Media Untertitel und Untertitelung) ist ein Dateiformat zur Darstellung von Untertiteln und Bildunterschriften. Es verwendet XML, um Inhalte, Timing, Layout und Styling zu beschreiben. IMSC ist in seiner Konzeption HTML und CSS sehr ähnlich — in der Tat haben die meisten IMSC-Stile ein direktes Äquivalent in CSS.

## Konzepte und Nutzung

IMSC wird vom W3C standardisiert und weltweit von Inhaltserzeugern (z.B. 20th Century Fox), Online-Diensten (z.B. Netflix) und traditionellen Rundfunkanstalten (z.B. der BBC) verwendet. Viele Plattformen und Player unterstützen es, z.B. iOS-Geräte und der dashJS-Player.

IMSC unterstützt eine Vielzahl von Weltsprachen und Schriftsystemen sowie umfangreiche Stiloptionen. Zusätzlich zu textbasierten Untertiteln unterstützt IMSC auch PNG-Untertitel.

Jedes IMSC-Dokument ist in sich abgeschlossen und kombiniert Inhalts-, Timing-, Layout- und Stylinginformationen. Der Inhalt des Dokuments ist mithilfe von Tags strukturiert, die den in HTML verwendeten ähnlich sind, wie `<body>`, `<div>`, `<p>`, `<span>`, und `<br>`. Timing und Styling werden mithilfe von Attributen wie `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` ausgedrückt — dies sind größtenteils vertraute Konzepte für diejenigen, die mit CSS vertraut sind.

### Unterschiede zwischen IMSC, HTML und CSS

IMSC unterscheidet sich in einer Reihe von Punkten von HTML:

- IMSC verwendet [Namespaces](/de/docs/Related/IMSC/Namespaces), sodass `tts:fontSize` nicht dasselbe ist wie `fontSize`, und Namespace-Deklarationen erforderlich sind, wie
  `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC hat strengere Regeln, zum Beispiel können `<p>`-Elemente nur innerhalb von `<div>`-Elementen vorhanden sein und nicht direkte Kinder von `<body>`-Elementen sein.

Obwohl die Namen und die Syntax der Attribute ähnlich sind, unterscheidet sich das Styling von CSS in einigen Punkten:

- Während CSS-Eigenschaften Bindestriche verwenden, wie `font-size`, verwendet IMSC {{Glossary("camel_case", "Camel Case")}}, wie `tts:fontSize`.
- IMSC verwendet keine externen Stylesheets.

### Unterschiede zwischen IMSC und WebVTT

IMSC ist nicht mit [WebVTT](/de/docs/Web/API/WebVTT_API) verwandt, das eine andere Möglichkeit darstellt, Untertitel und Bildunterschriften für das Web zu erstellen.

WebVTT wird bis zu einem gewissen Grad nativ von Browsern unterstützt, während IMSC dies nicht tut.

Es gibt jedoch eine IMSC-Polyfill namens imscJS, die verwendet wird, um alle Beispiele in dieser Dokumentation darzustellen. Aus der Sicht eines Entwicklers ermöglicht imscJS eine konsistente Erfahrung über verschiedene Browser hinweg.

IMSC unterstützt auch Stile wie `tts:linePadding` und `tts:fillLineGap` und bietet Funktionen wie Unterstützung für HDR und stereoskopisches 3D, die für Untertitel und Bildunterschriften nützlich sind, aber in WebVTT nicht verfügbar sind.

Nachfolgend ein Beispiel, das `tts:fillLineGap` verwendet:

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

Last but not least ist IMSC mit SMPTE-TT und EBU-TT-D kompatibel, die in den USA und Europa weit verbreitet sind. IMSC wird auch aktiv bei der Erstellung von TV- und Film-Inhalten verwendet. Die Implementierung der IMSC-Unterstützung beseitigt daher die Notwendigkeit der Konvertierung zu WebVTT.

Im Gegensatz zu IMSC, das Markup verwendet, verwendet WebVTT eine Kombination aus CSS und Klartext.

## Tutorials

- [IMSC-Grundlagen](/de/docs/Related/IMSC/Basics)
  - : Dies führt Sie durch alles, was Sie benötigen, um mit IMSC zu beginnen, einschließlich der grundlegenden Dokumentenstruktur und der Grundlagen, wie man Untertitel stilisiert, zeitlich steuert und positioniert. Diese Themen werden später in eigenen Tutorials weiter ausgebaut.
- [Verwendung des imscJS Polyfills](/de/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : Derzeit benötigen Sie ein Polyfill, um IMSC im Web darzustellen. imscJS ist eine gute Wahl, da es aktiv gepflegt wird und fast die gesamte IMSC-Funktionalität abdeckt. Dieser Artikel zeigt Ihnen, wie Sie imscJS nutzen und auf Ihrer eigenen Website integrieren können.
- [Styling von IMSC-Dokumenten](/de/docs/Related/IMSC/Styling)
  - : IMSC bietet viele Optionen zum Stylen von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte CSS-Entsprechungen, was sie Webentwicklern vertraut macht. In diesem Leitfaden lernen Sie mehr über das Styling von IMSC, einschließlich des Unterschieds zwischen inline und referentiellem Styling sowie effizientes Styling mittels Vererbung und Regionsstyling.
- [Platzierung von Untertiteln in IMSC](/de/docs/Related/IMSC/Subtitle_placement)
  - : IMSC ermöglicht es dem Autor, die Position der Untertitel präzise zu steuern, sodass der Text neben dem Sprecher positioniert ist oder um zu vermeiden, dass wichtige Inhalte in Ihrem Video verdeckt werden. Lernen Sie, wie man eine Untertitelregion definiert und wie man deren Breite und Höhe bestimmt.
- [Namespaces in IMSC](/de/docs/Related/IMSC/Namespaces)
  - : Dieser Artikel behandelt das Thema XML-Namespaces und vermittelt Ihnen genug Wissen, um deren Verwendung in IMSC zu erkennen und effektiv einzusetzen.
- [Timing in IMSC](/de/docs/Related/IMSC/Timing_in_IMSC)
  - : Beim Erstellen eines IMSC-Dokuments muss jedes definierte Textstück Zeitinformationen enthalten, um anzugeben, wann es angezeigt werden soll. Es gibt mehrere Möglichkeiten, zu beschreiben, wann ein Untertitel beginnen und enden soll, mit Vor- und Nachteilen für jede Methode.
- [Mapping von Videocodecs zu IMSC](/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Das Zuordnen des im Videospuren oder Videoeditoren-Timelines sichtbaren Zeit- oder Zeitwerte zu einem IMSC-Dokument kann etwas knifflig sein. Es gibt einige verschiedene Probleme, derer Sie sich bewusst sein müssen, die wir in diesem Artikel behandeln werden.
- [IMSC und andere Standards](/de/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC ist das Ergebnis einer internationalen Bemühung, beliebte TTML-Profile wie [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) und [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854) zusammenzuführen. Dieser Artikel bietet einen Überblick darüber, wie IMSC mit diesen anderen Untertitelstandards zusammenhängt und erklärt die Unterschiede zwischen den Versionen von IMSC.

## Referenz

- [TTML-Profile für Internet Media Untertitel und Bildunterschriften](https://www.w3.org/TR/ttml-imsc/all/)

## Werkzeuge

- imscJS Polyfill
  - : IMSC-Dokumente können in Browsern mithilfe des [imscJS](https://github.com/sandflow/imscJS) Polyfills gerendert werden.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js/wiki)
  - : Der Referenz-Player des DASH Industry Forum mit IMSC-Unterstützung.

## Spezifikationen

- [TTML-Profile für Internet Media Untertitel und Bildunterschriften 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser-Kompatibilität

IMSC hat derzeit keine native Unterstützung in Browsern, kann jedoch effektiv verwendet werden, um zeitgesteuerten Text in Webdokumenten über das [imscJS](https://github.com/sandflow/imscJS) Polyfill darzustellen.

## Siehe auch

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : Der IMSC-Standard wird von der W3C Timed Text Group entwickelt, der Sie beitreten können, wenn Sie direkt zum Standard beitragen möchten.
- [IMSC-Standards-Repository](https://github.com/w3c/imsc)
  - : Im IMSC GitHub-Repository können Sie Rückmeldungen zu den Spezifikationen geben und Probleme melden.
- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
  - : WebVTT ist ein weiterer Mechanismus zur Implementierung von Bildunterschriften und Untertiteln im Web, der in Browsern einige native Unterstützung bietet und einige nützliche Funktionen hat.

## Docs Projektteam

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
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Videocodecs zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
