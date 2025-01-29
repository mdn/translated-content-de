---
title: Styling von IMSC-Dokumenten
slug: Related/IMSC/Styling
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

IMSC bietet viele Optionen zur Gestaltung von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte CSS-Äquivalente, was sie Webentwicklern vertraut macht. In diesem Leitfaden lernen Sie mehr über das Styling von IMSC, einschließlich der Unterschiede zwischen Inline- und referenziellem Styling und effizientem Styling durch Vererbung und Regions-Styling.

## Inline-Styling

Die einfachste Möglichkeit, Inhaltselemente wie `<p>` oder `<span>` zu gestalten, besteht darin, ein oder mehrere Stilattribute wie `tts:color` anzugeben. Zum Beispiel ergibt das folgende:

```xml
<p tts:textAlign="center"
   tts:fontSize="64px"
   tts:color="red"
   tts:fontFamily="proportionalSansSerif"
   tts:fontStyle="italic">
 Hello, I am Mork from Ork
</p>
```

dies:

{{EmbedGHLiveSample("imsc-examples/inline-styles/inline-styles.html", '100%')}}

## Referenzielles Styling

Inline-Styling wird normalerweise vermieden, da es Duplikate erzeugt.

Nehmen Sie zum Beispiel die folgenden zwei `<span>`-Elemente, die genau die gleichen Stilattribute haben:

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

Beim referenziellen Styling werden Stile einmal definiert und im gesamten Dokument wiederverwendet — ähnlich wie CSS-Regeln, die einmal deklariert und dann auf mehrere HTML-Elemente über beispielsweise Element- oder Klassenselektoren angewendet werden können. In IMSC wird dies durch die Definition eines `<styling>`-Elements im Dokument-`<head>` erreicht, in dem sich ein oder mehrere `<style>`-Elemente befinden — jedes dieser definiert einen Satz von Stilen, die Sie an anderer Stelle wiederverwenden können. Dies ist im Folgenden dargestellt:

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

die dann später im Dokument referenziert werden kann:

```xml
<span style="s1">Hello, I am Mork from Ork.</span>
```

dies entspricht:

```xml
<span tts:color="yellow" tts:backgroundColor="black">
  Hello, I am Mork from Ork
</span>
```

Mit anderen Worten, die Referenzierung eines `<style>`-Elements über seine `id` und das `style`-Attribut entspricht dem Kopieren der Stilattribute des `<style>`-Elements auf das referenzierende Element, als ob die Stilattribute mit Inline-Styling angegeben worden wären.

## Stilvererbung

Wenn eine Stileigenschaft vererbbar ist, wie `tts:color`, dann wird die Eigenschaft auf alle Nachfahren eines Elements angewendet, auf das sie spezifiziert wird — ebenfalls vergleichbar mit CSS und HTML. Im folgenden Beispiel wird die Farbe `"yellow"` auf den Text beider `<p>`-Elemente angewendet, da sie Nachfahren des `<body>`-Elements sind.

```xml
<body tts:color="yellow">
  <div>
    <p>Hello, I am Mork from Ork.</p>
    <p>I come from another planet.</p>
  </div>
</body>
```

Die Spezifikation eines Stils auf ein Element überschreibt jeden auf einem Vorfahren spezifizierten Stil. Zum Beispiel wird im folgenden Ausschnitt die Farbe des zweiten `<p>`-Textes auf `"aqua"` gesetzt:

```xml
<body tts:color="yellow">
  <div>
     <p>Hello, I am Mork from Ork.</p>
     <p tts:color="aqua">I come from another planet.</p>
  </div>
</body>
```

## Region-Styling

Regionen-Styling spielt im IMSC eine besondere Rolle, da eine auf einer Region spezifizierte Stileigenschaft von allen Elementen geerbt wird, die der Region zugeordnet sind, beginnend mit dem `<body>`-Element, als ob das `<region>`-Element das Elternteil des `<body>`-Elements wäre. Zum Beispiel wird im folgenden Beispiel der Text "Hello, I am Mork from Ork" in Gelb erscheinen.

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

Referenzielles Styling kann auf Stil-Elemente selbst angewendet werden:

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

Mehrere Stile können auch gleichzeitig auf ein Element angewendet werden. Im folgenden Ausschnitt werden zum Beispiel die Stileigenschaften sowohl von Stil `s1` als auch von `s2` auf dasselbe `<p>`-Element angewendet.

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
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videocodecs zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
