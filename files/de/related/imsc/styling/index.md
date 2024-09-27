---
title: Stylen von IMSC-Dokumenten
slug: Related/IMSC/Styling
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

IMSC bietet viele Optionen zum Stylen von Dokumenten, und die meisten der IMSC-Styling-Eigenschaften haben direkte CSS-Äquivalente, was sie Webentwicklern vertraut macht. In diesem Leitfaden erfahren Sie mehr über das Stylen mit IMSC, einschließlich des Unterschieds zwischen Inline- und Referenzstyling sowie effizientem Styling mithilfe von Vererbung und Regionsstyling.

## Inline-Styling

Der einfachste Weg, Inhaltselemente wie `<p>` oder `<span>` zu stylen, besteht darin, ein oder mehrere `style`-Attribute wie `tts:color` anzugeben. Zum Beispiel ergibt Folgendes:

```xml
<p tts:textAlign="center"
   tts:fontSize="64px"
   tts:color="red"
   tts:fontFamily="proportionalSansSerif"
   tts:fontStyle="italic">
 Hello, I am Mork from Ork
</p>
```

folgendes Ergebnis:

{{EmbedGHLiveSample("imsc-examples/inline-styles/inline-styles.html", '100%')}}

## Referenzielles Styling

Inline-Styling wird normalerweise vermieden, da es Duplikate erzeugt.

Betrachten Sie zum Beispiel die folgenden zwei `<span>`-Elemente, die exakt dieselben `style`-Attribute haben:

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

Beim referenziellen Styling werden Stile einmal definiert und im gesamten Dokument wiederverwendet — ähnlich wie CSS-Regeln, die einmal deklariert werden und dann auf mehrere HTML-Elemente angewendet werden können, zum Beispiel über Element- oder Klassenselektoren. In IMSC wird dies erreicht, indem ein `<styling>`-Element innerhalb des Dokuments `<head>` definiert wird. Darin befindet sich eines oder mehrere `<style>`-Elemente — jedes definiert eine Gruppe von Stilen, die Sie anderswo wiederverwenden können. Dies wird im Folgenden veranschaulicht:

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

Jedem `<style>`-Element wird eine `id` zugewiesen (in diesem Beispiel `"s1"`):

```xml
<style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
```

auf die dann später im Dokument verwiesen werden kann:

```xml
<span style="s1">Hello, I am Mork from Ork.</span>
```

Dies entspricht:

```xml
<span tts:color="yellow" tts:backgroundColor="black">
  Hello, I am Mork from Ork
</span>
```

Mit anderen Worten: Das Referenzieren eines `<style>`-Elements über seine `id` und das `style`-Attribut entspricht dem Kopieren der Stileigenschaften des `<style>`-Elements auf das referenzierende Element, als ob die Stileigenschaften mittels Inline-Styling angegeben worden wären.

## Stilvererbung

Wenn eine Stileigenschaft vererbbar ist, wie `tts:color`, wird die Stileigenschaft auf alle Nachkommen eines Elements angewendet, auf dem sie angegeben ist — auch dies ist ähnlich wie bei CSS und HTML. Im folgenden Beispiel wird die Farbe `"yellow"` auf den Text beider `<p>`-Elemente angewendet, da sie Nachkommen des `<body>`-Elements sind.

```xml
<body tts:color="yellow">
  <div>
    <p>Hello, I am Mork from Ork.</p>
    <p>I come from another planet.</p>
  </div>
</body>
```

Die Angabe eines Stils auf einem Element überschreibt jeden auf einem Vorfahren angegebenen Stil, zum Beispiel wird im folgenden Ausschnitt die Farbe des Textes des zweiten `<p>` auf `"aqua"` gesetzt:

```xml
<body tts:color="yellow">
  <div>
     <p>Hello, I am Mork from Ork.</p>
     <p tts:color="aqua">I come from another planet.</p>
  </div>
</body>
```

## Regionenstyling

Das Regionenstyling spielt eine besondere Rolle in IMSC, da eine auf einer Region angegebene Stileigenschaft von allen Elementen geerbt wird, die der Region zugewiesen sind, beginnend mit dem `<body>`-Element, als ob das `<region>`-Element das Elternelement des `<body>`-Elements wäre. Zum Beispiel wird im folgenden Beispiel der Text "Hello, I am Mork from Ork" in Gelb erscheinen.

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

Referenzielles Styling kann auch auf die Stil-Elemente selbst angewendet werden:

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

Es können auch mehrere Stile gleichzeitig auf ein Element angewendet werden. Zum Beispiel werden im folgenden Ausschnitt die Stileigenschaften der Stile `s1` und `s2` auf das gleiche `<p>`-Element angewendet.

```xml
<p style="s1 s2">Hello, I am Mork from Ork</p>
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Stylen von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
