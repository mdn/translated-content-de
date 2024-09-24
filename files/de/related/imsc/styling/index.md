---
title: Stilisierung von IMSC-Dokumenten
slug: Related/IMSC/Styling
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

IMSC bietet viele Optionen für die Stilisierung von Dokumenten, und die meisten IMSC-Stil-Eigenschaften haben direkte CSS-Äquivalente, was sie für Web-Entwickler vertraut macht. In diesem Leitfaden erfahren Sie mehr über die IMSC-Stilisierung, einschließlich des Unterschieds zwischen Inline- und referenzieller Stilisierung sowie effizienter Stilisierung durch Vererbung und Regionen-Stilisierung.

## Inline-Stilisierung

Die einfachste Möglichkeit, Inhaltselemente wie `<p>` oder `<span>` zu gestalten, besteht darin, ein oder mehrere Stil-Attribute wie `tts:color` anzugeben. Beispielsweise führt das folgende

```xml
<p tts:textAlign="center"
   tts:fontSize="64px"
   tts:color="red"
   tts:fontFamily="proportionalSansSerif"
   tts:fontStyle="italic">
 Hello, I am Mork from Ork
</p>
```

zu:

{{EmbedGHLiveSample("imsc-examples/inline-styles/inline-styles.html", '100%')}}

## Referenzielle Stilisierung

Inline-Stilisierung wird normalerweise vermieden, da sie Duplikationen erzeugt.

Nehmen Sie zum Beispiel die folgenden zwei `<span>`-Elemente, die genau die gleichen Stil-Attribute haben:

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

Bei der referenziellen Stilisierung werden Stile einmal definiert und im gesamten Dokument wieder verwendet – ähnlich wie CSS-Regeln, die einmal deklariert und dann auf mehrere HTML-Elemente angewendet werden können, beispielsweise durch Element- oder Klassenselektoren. In IMSC wird dies durch die Definition eines `<styling>`-Elements im Dokumentenkopf `<head>` erreicht, in dem ein oder mehrere `<style>`-Elemente platziert sind – jedes einzelne definiert eine Reihe von Stilen, die Sie anderswo wiederverwenden können. Dies wird unten veranschaulicht:

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

Jedem `<style>`-Element wird eine `id` gegeben (`"s1"` in diesem Beispiel):

```xml
<style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
```

die später im Dokument referenziert werden kann:

```xml
<span style="s1">Hello, I am Mork from Ork.</span>
```

dies entspricht:

```xml
<span tts:color="yellow" tts:backgroundColor="black">
  Hello, I am Mork from Ork
</span>
```

Mit anderen Worten, das Referenzieren eines `<style>`-Elements über seine `id` und das `style`-Attribut entspricht dem Kopieren der Stileigenschaften des `<style>`-Elements auf das referenzierende Element, als ob die Stileigenschaften mittels Inline-Stilisierung angegeben worden wären.

## Stil-Vererbung

Wenn eine Stileigenschaft vererbbar ist, wie `tts:color`, dann gilt die Stileigenschaft für alle Nachkommen eines Elements, auf dem sie angegeben ist - wiederum ähnlich wie bei CSS und HTML. Im folgenden Beispiel wird die Farbe `"gelb"` auf den Text beider `<p>`-Elemente angewendet, da sie Nachkommen des `<body>`-Elements sind.

```xml
<body tts:color="yellow">
  <div>
    <p>Hello, I am Mork from Ork.</p>
    <p>I come from another planet.</p>
  </div>
</body>
```

Das Angeben eines Stils auf einem Element überschreibt jeden auf einem Vorfahren spezifizierten Stil, zum Beispiel in folgendem Beispiel wird die Farbe des Textes des zweiten `<p>` auf `"aqua"` gesetzt:

```xml
<body tts:color="yellow">
  <div>
     <p>Hello, I am Mork from Ork.</p>
     <p tts:color="aqua">I come from another planet.</p>
  </div>
</body>
```

## Regionen-Stil

Die Regionen-Stilisierung spielt eine besondere Rolle in IMSC, da eine auf einer Region angegebene Stileigenschaft von allen Elementen geerbt wird, die der Region zugeordnet sind, beginnend mit dem `<body>`-Element, so als ob das `<region>`-Element das Elternteil des `<body>`-Elements wäre. Im folgenden Beispiel wird der Text "Hello, I am Mork from Ork" in Gelb erscheinen.

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

## Kombination von Stilen

Referentielle Stilisierung kann auch auf Stilelemente selbst angewendet werden:

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

Mehrere Stile können auch gleichzeitig auf ein Element angewendet werden. Zum Beispiel werden im folgenden Auszug die Stileigenschaften sowohl von `s1` als auch von `s2` auf dasselbe `<p>`-Element angewendet.

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
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Stilisierung von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Zeitgebung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
