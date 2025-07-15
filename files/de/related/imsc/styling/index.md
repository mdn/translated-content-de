---
title: Styling von IMSC-Dokumenten
slug: Related/IMSC/Styling
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

IMSC bietet viele Möglichkeiten zur Gestaltung von Dokumenten, und die meisten IMSC-Stileigenschaften haben direkte CSS-Äquivalente, was Webentwicklern vertraut ist. In diesem Leitfaden lernen Sie mehr über IMSC Styling, einschließlich des Unterschieds zwischen Inline- und Referenz-Styling sowie effizientes Styling mittels Vererbung und Regionsstyling.

## Inline-Styling

Der einfachste Weg, Inhaltselemente wie `<p>` oder `<span>` zu stylen, ist die Angabe von einem oder mehreren Style-Attributen, wie `tts:color`, an ihnen. Zum Beispiel:

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

Inline-Styling wird normalerweise vermieden, da es zu Duplikationen führt.

Betrachten Sie beispielsweise die beiden folgenden `<span>`-Elemente, die genau die gleichen Stileigenschaften haben:

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

Beim referenziellen Styling werden Stile einmal definiert und im gesamten Dokument wiederverwendet – ähnlich wie CSS-Regeln, die einmal deklariert werden und dann auf mehrere HTML-Elemente angewendet werden können, etwa durch Element- oder Klassenselektoren. In IMSC wird dies erreicht, indem ein `<styling>`-Element im Dokument-`<head>` definiert wird, in dem sich eines oder mehrere `<style>`-Elemente befinden – jedes von ihnen definiert eine Reihe von Stilen, die Sie an anderer Stelle wiederverwenden können. Dies wird unten veranschaulicht:

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

Jedem `<style>`-Element wird eine `id` zugewiesen (`"s1"` in diesem Beispiel):

```xml
<style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
```

auf die später im Dokument verwiesen werden kann:

```xml
<span style="s1">Hello, I am Mork from Ork.</span>
```

Dies ist gleichbedeutend mit:

```xml
<span tts:color="yellow" tts:backgroundColor="black">
  Hello, I am Mork from Ork
</span>
```

Mit anderen Worten, das Referenzieren eines `<style>`-Elements über seine `id` und das `style`-Attribut ist gleichbedeutend mit dem Kopieren der Stileigenschaften des `<style>`-Elements auf das referenzierende Element, als ob die Stileigenschaften mittels Inline-Styling spezifiziert worden wären.

## Stilvererbung

Wenn eine Stileigenschaft vererbbar ist, wie `tts:color`, dann wird die Stileigenschaft auf alle Nachkommen eines Elements angewendet, auf dem sie spezifiziert ist – auch dies ist ähnlich zu CSS und HTML. Im folgenden Beispiel wird die Farbe `"yellow"` auf den Text beider `<p>`-Elemente angewendet, da sie Nachkommen des `<body>`-Elements sind.

```xml
<body tts:color="yellow">
  <div>
    <p>Hello, I am Mork from Ork.</p>
    <p>I come from another planet.</p>
  </div>
</body>
```

Das Spezifizieren eines Stils auf einem Element überschreibt jeden auf einem Vorfahren spezifizierten Stil. Im folgenden Beispiel wird die Farbe des Textes des zweiten `<p>`-Elements auf `"aqua"` gesetzt:

```xml
<body tts:color="yellow">
  <div>
     <p>Hello, I am Mork from Ork.</p>
     <p tts:color="aqua">I come from another planet.</p>
  </div>
</body>
```

## Regionsstyling

Regionsstyling spielt eine besondere Rolle in IMSC, da eine auf einer Region spezifizierte Stileigenschaft von allen Elementen, die der Region zugewiesen sind, beginnend mit dem `<body>`-Element, geerbt wird, als ob das `<region>`-Element das übergeordnete Element des `<body>`-Elements wäre. Zum Beispiel wird im folgenden Beispiel der Text "Hello, I am Mork from Ork" in Gelb erscheinen.

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

Referenzielles Styling kann auch auf Stilelemente selbst angewendet werden:

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

Mehrere Stile können auch gleichzeitig auf ein Element angewendet werden. In dem folgenden Schnipsel werden die Stileigenschaften sowohl von `s1` als auch `s2` auf dasselbe `<p>`-Element angewendet.

```xml
<p style="s1 s2">Hello, I am Mork from Ork</p>
```
