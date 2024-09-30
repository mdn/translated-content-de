---
title: Styling IMSC-Dokumente
slug: Related/IMSC/Styling
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

IMSC bietet viele Optionen zur Gestaltung von Dokumenten, und die meisten IMSC-Gestaltungseigenschaften haben direkte CSS-Äquivalente, was sie für Webentwickler vertraut macht. In diesem Leitfaden lernen Sie mehr über die Gestaltung mit IMSC, einschließlich der Unterschiede zwischen Inline- und referenziellem Styling sowie effizienten Styling durch Vererbung und Regionsstyling.

## Inline-Styling

Die einfachste Möglichkeit, Inhaltselemente wie `<p>` oder `<span>` zu gestalten, besteht darin, ein oder mehrere Stilattribute wie `tts:color` anzugeben. Zum Beispiel das folgende

```xml
<p tts:textAlign="center"
   tts:fontSize="64px"
   tts:color="red"
   tts:fontFamily="proportionalSansSerif"
   tts:fontStyle="italic">
 Hello, I am Mork from Ork
</p>
```

ergibt:

{{EmbedGHLiveSample("imsc-examples/inline-styles/inline-styles.html", '100%')}}

## Referenzielles Styling

Inline-Styling wird normalerweise vermieden, da es Duplikation erzeugt.

Nehmen Sie zum Beispiel die folgenden zwei `<span>`-Elemente, die genau dieselben Stilattribute haben:

```xml
<p>
  <span tts:color="yellow" tts:backgroundColor="black">
   Hello, I am Mork from Ork.
  </span>
</p>
<p>
  <span tts:color="yellow" tts:backgroundColor="black">
    I come from another planet.
  </span>
</p>
```

Beim referenziellen Styling werden Stile einmal definiert und im gesamten Dokument wiederverwendet – ähnlich wie CSS-Regeln einmal deklariert werden können und dann auf mehrere HTML-Elemente angewendet werden, beispielsweise über Element- oder Klassenselektoren. In IMSC wird dies durch die Definition eines `<styling>`-Elements im `<head>` des Dokuments erreicht, in dem eines oder mehrere `<style>`-Elemente platziert sind – jedes definiert einen Satz von Stilen, die Sie anderweitig wiederverwenden können. Dies wird unten veranschaulicht:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
    xmlns:tts="http://www.w3.org/ns/ttml#styling"
    xml:lang="en">
  <head>
   <styling>
     <style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
   </styling>
  </head>
  <body>
    <div>
      <p>
        <span style="s1">Hello, I am Mork from Ork.</span>
      </p>
      <p>
        <span style="s1">I come from another planet.</span>
      </p>
    </div>
  </body>
  </tt>
```

Jedes `<style>`-Element erhält eine `id` (`"s1"` in diesem Beispiel):

```xml
<style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
```

auf die später im Dokument verwiesen werden kann:

```xml
<span style="s1">Hello, I am Mork from Ork.</span>
```

dies ist gleichwertig mit:

```xml
<span tts:color="yellow" tts:backgroundColor="black">
  Hello, I am Mork from Ork
</span>
```

Anders ausgedrückt, das Verweisen auf ein `<style>`-Element über seine `id` und das `style`-Attribut ist gleichbedeutend mit dem Kopieren der Stileigenschaften des `<style>`-Elements auf das verweisende Element, als ob die Stileigenschaften mithilfe von Inline-Styling angegeben worden wären.

## Stilvererbung

Wenn eine Stileigenschaft vererbbar ist, wie `tts:color`, dann wird die Stileigenschaft auf alle Nachfahren eines Elements angewendet, auf dem sie angegeben ist – wiederum ähnlich wie bei CSS und HTML. Im folgenden Beispiel wird die Farbe "gelb" auf den Text beider `<p>`-Elemente angewendet, da sie Nachfahren des `<body>`-Elements sind.

```xml
<body tts:color="yellow">
  <div>
    <p>Hello, I am Mork from Ork.</p>
    <p>I come from another planet.</p>
  </div>
</body>
```

Das Angeben eines Stils auf einem Element überschreibt jeden Stil, der auf einem Vorfahren angegeben ist, zum Beispiel würde im folgenden Ausschnitt die Farbe des Textes des zweiten `<p>` auf "aqua" gesetzt werden:

```xml
<body tts:color="yellow">
  <div>
     <p>Hello, I am Mork from Ork.</p>
     <p tts:color="aqua">I come from another planet.</p>
  </div>
</body>
```

## Regionenstyling

Regionenstyling spielt eine besondere Rolle in IMSC, da eine Stileigenschaft, die auf einer Region angegeben ist, von allen ausgewählten Elementen der Region vererbt wird, beginnend mit dem `<body>`-Element, als ob das `<region>`-Element das Elternelement des `<body>`-Elements wäre. Zum Beispiel wird im folgenden Beispiel der Text "Hallo, ich bin Mork vom Ork" in Gelb erscheinen.

```xml
<tt
  xmlns="http://www.w3.org/ns/ttml"
  xmlns:tts="http://www.w3.org/ns/ttml#styling"
  xml:lang="en">
  <head>
    <layout>
      <region xml:id="r1" tts:color="yellow" />
    </layout>
 </head>
 <body>
   <div>
     <p region="r1">Hello, I am Mork from Ork</p>
   </div>
 </body>
</tt>
```

## Kombinieren von Stilen

Referenzielles Styling kann auch auf Style-Elemente selbst angewendet werden:

```xml
<styling>
  <style xml:id="s1"
         tts:color="yellow"
         tts:backgroundColor="black"/>
  <style xml:id="s2"
         style="s1"
         tts:textAlign="left"/>
</styling>
```

Mehrere Stile können auch gleichzeitig auf ein Element angewendet werden. Im folgenden Ausschnitt werden die Stileigenschaften sowohl von `s1` als auch `s2` auf dasselbe `<p>`-Element angewendet.

```xml
<p style="s1 s2">Hello, I am Mork from Ork</p>
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling IMSC-Dokumente</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocodezeiten zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
