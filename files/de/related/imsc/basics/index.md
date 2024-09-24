---
title: Grundlagen von IMSC
slug: Related/IMSC/Basics
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

IMSC ermöglicht es Ihnen, Untertitel oder Bildunterschriften zu Ihrem Online-Video hinzuzufügen. In diesem Artikel führen wir Sie durch alles, was Sie benötigen, um zu beginnen, einschließlich der grundlegenden Dokumentstruktur und der Grundlagen zum Stylen, Timen und Positionieren von Untertiteln.

> [!NOTE]
> IMSC kann für jede Art von zeitgesteuertem Text verwendet werden, den Sie in ein Webdokument einfügen möchten, nicht nur für Untertitel und Bildunterschriften. Da Untertitel und Bildunterschriften die häufigsten Anwendungsfälle für IMSC darstellen, werden wir uns auf diese konzentrieren. Zur besseren Lesbarkeit verwenden wir nur den Begriff Untertitel. Im technischen Kontext, den wir beschreiben, ist der Begriff "Untertitel" austauschbar mit "Bildunterschriften".

## Was ist also IMSC?

IMSC ist eine Markup-Sprache, die Sie verwenden können, um zeitgesteuerten Text für das Hinzufügen von Untertiteln zu digitalen Medien zu definieren. Es definiert die Struktur Ihrer Untertitel-Inhalte in einem XML-Dokument. Es besteht aus einer Reihe von Elementen, die Sie verwenden können, um verschiedene Teile Ihrer Untertitel-Inhalte einzuschließen oder zu umschließen, sodass diese auf eine bestimmte Weise oder zu einer bestimmten Zeit erscheinen. Viele davon sind ähnlich oder gleich wie HTML-Features.

Wenn Sie mit XML oder HTML noch nicht vertraut sind, lesen Sie zuerst darüber und kehren Sie dann hierher zurück:

- [Einführung in XML](/de/docs/Web/XML/XML_introduction)
- [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics)

> [!NOTE]
> Wenn Sie wissen möchten, was Sie mit IMSC in realen Szenarien tun können, schauen Sie sich das erweiterte Beispiel am Ende dieses Tutorials an.

## Minimales IMSC-Dokument

IMSC wird immer als vollständiges XML-Dokument angegeben. Als Datei sollte es die Erweiterung "_ttml_" haben.

> [!NOTE]
> IMSC wird momentan nicht nativ in Browsern unterstützt, aber der [imscJS](https://github.com/sandflow/imscJS) Polyfill kann verwendet werden, um diese Lücke zu schließen. Alle untenstehenden Beispiele werden unter Verwendung von imscJS gerendert. Es erstellt dynamisch HTML und CSS aus einem IMSC XML-Dokument.

Schauen wir uns ein minimales IMSC-Dokument an und wie es gerendert wird:

{{EmbedGHLiveSample("imsc-examples/minimal_ttml/minimal.html", '100%', 560)}}

Die wichtigsten Merkmale sind wie folgt:

- `<tt></tt>` — Sie beginnen ein IMSC-Dokument immer mit dem Wurzelelement `<tt>`. Sie sollten auch den Standard-Namensraum des Dokuments mit dem Attribut `xmlns` angeben. Machen Sie sich vorerst keine Sorgen über Namensräume. Wir werden darauf in einem separaten Leitfaden eingehen.
- `xml:lang` — Sie müssen die Sprache Ihres Inhalts mit dem Attribut `xml:lang` angeben. Beachten Sie, dass das Attribut `lang` das Präfix `xml:` haben muss, anders als in HTML. In IMSC ist `<tt lang="en">` nicht korrekt — Sie müssen immer `<tt xml:lang="en">` schreiben.
- `<body></body>` — Wie in HTML enthält das `<body>`-Element alle Inhalte, die Sie anzeigen möchten. Für IMSC ist dies typischerweise Untertitel-Inhalt, den Sie zu bestimmten Zeitintervallen während der Wiedergabe eines Videos anzeigen möchten.
- `<div></div>` — Das `<div>`-Element wird als Container für Untertitelinhalte verwendet; Sie müssen immer mindestens eines davon haben. Die `<p>`-Elemente, die den tatsächlichen Untertitel-Inhalt enthalten, haben immer ein `<div>`-Element als übergeordnetes Element.
- `<p></p>` — Textinhalt für Untertitel muss immer in einem `<p>`-Element eingeschlossen sein. Das Element beschreibt einen Textabsatz, ähnlich wie in HTML. Der Hauptunterschied ist, dass es zeitgesteuert sein kann.

## Zeitsteuerung

Das minimale IMSC-Dokument aus dem vorherigen Beispiel hatte keine Zeitsteuerung. Das heißt, dass der Untertitel-Inhalt während der gesamten Dauer des Videos angezeigt wird. Normalerweise ist das nicht das, was Sie möchten. Stattdessen wollen Sie, dass Untertitel zu einem bestimmten Zeitpunkt erscheinen und dann verschwinden. Sie können eine Kombination der Zeitsteuerungsattribute `begin`, `end` und `dur` verwenden, um dies zu erreichen.

Betrachten Sie das folgende bearbeitbare Beispiel:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player.html", '100%', 590)}}

Dies beinhaltet die folgenden neuen Attribute:

- `begin` — gibt an, wann der Untertitel beginnen soll, angezeigt zu werden (in diesem Fall 1 s nach dem Start des Videos).
- `end` — gibt an, wann der Untertitel verschwinden soll (in diesem Fall 2 s nach dem Start des Videos).

Spielen Sie mit den Sekundenwerten im Codebeispiel und drücken Sie den Neuladen-Button, wenn Sie bereit sind.

> [!NOTE]
> Die Endzeiten in IMSC sind nicht "inklusiv". Der Untertitel "Hello, I am Mork from Ork." wird nicht mehr angezeigt, wenn er den zweiten Wert in der Zeit erreicht.

Sie können auch das `dur`-Attribut für die Zeitsteuerung verwenden:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player-dur.html", '100%', 590)}}

Dieses Attribut kann als Alternative zum `end`-Attribut verwendet werden. Es definiert, "wie lang" der Untertitel nach Ablauf der `begin`-Zeit angezeigt wird. Im Beispiel soll der zweite Absatz für 2 s angezeigt werden. Da er bei Sekunde 2 beginnt, soll er bei Sekunde 4 verschwinden.

Beachten Sie, was sich bei Sekunde 2 im Vergleich zum vorherigen Beispiel geändert hat.

## Farben

Häufig werden Untertitel auf einem undurchsichtigen oder halbtransparenten Hintergrund angezeigt, um die Lesbarkeit zu verbessern. Sie können die Attribute `backgroundColor` und `color` verwenden, um die Farben zu ändern, wie im folgenden bearbeitbaren Beispiel demonstriert:

{{EmbedGHLiveSample("imsc-examples/minimal-colors/minimal-colors.html", '100%', 620)}}

Hier haben wir Folgendes eingeführt:

- `tts:backgroundColor` — Dieses Attribut setzt die Hintergrundfarbe auf das Element, auf das es angewendet wird. In diesem Fall wird es auf das `<p>`-Element angewendet oder genauer gesagt auf den Bereich, der vom `<p>`

  Element erzeugt wird. Die Standard-Hintergrundfarbe ist `transparent`.

- `tts:color` — Dieses Attribut setzt die Textfarbe auf das Element, auf das es angewendet wird. Die Standard-Textfarbe ist `weiß`.

Versuchen Sie, einige andere Farben für den Text- und Hintergrund zu setzen:

- Versuchen Sie andere benannte Farben wie `lime` oder `aqua`.
- Verwenden Sie hexadezimale Werte wie `#00ff00` oder `#00ffff`.
- Sie können andere Farbschemata wie `rgb(0 255 255)` verwenden.
- Versuchen Sie schließlich halbtransparente Variationen wie `rgb(0 0 0 / .8)`.

> [!NOTE]
> Machen Sie sich vorerst keine Sorgen über Namensräume. Wir werden die Bedeutung von `xmlns:tts` und `tts:backgroundColor` in einem separaten Leitfaden erklären.

Wie im Leitfaden [IMSC Styling](/de/docs/Related/IMSC/Styling) erklärt, ist es möglich, eine Sammlung von Stil-Eigenschaften zu definieren, die beliebig oft verwendet werden können. Der Stil `s1` unten wird dreimal angewendet:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
    xmlns:tts="http://www.w3.org/ns/ttml#styling"
    xml:lang="en">
  <head>
   <styling>
     <style xml:id="s1" tts:color="yellow" tts:fontStyle="italic"/>
   </styling>
  </head>
  <body>
    <div>
      <p>
        Hello, I am <span style="s1">Mork</span> from <span style="s1">Ork</span>.<br/>
        I come from another <span style="s1">planet</span>.
      </p>
    </div>
  </body>
  </tt>
```

## Position, Breite und Länge

Wenn Sie keine Position explizit angeben, wird der Untertitel standardmäßig in der oberen linken Ecke des Videos angezeigt. Üblicherweise werden Sie Ihren Untertitel jedoch woanders positionieren wollen, z. B. in der Mitte unten im Video. Sie müssen eine Region angeben, um einen Untertitel zu positionieren.

Sehen Sie unten ein minimales Dokument, das Regionen zur Positionierung verwendet.

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"
 xml:lang="en">
  <head>
    <layout>
      <region tts:origin="10% 80%"
              tts:extent="80% 20%"
              xml:id="bottom"/>
      <region tts:origin="10% 10%"
              tts:extent="80% 20%"
              xml:id="top"/>
    </layout>
</head>
<body>
    <div>
      <p region="bottom"
          tts:backgroundColor="black">
          Hello, I am Mork from Ork.
      </p>
    </div>
  </body>
</tt>
```

Dies beinhaltet die folgenden neuen Features:

- `<head></head>` — Wie in HTML fungiert das `<head>`-Element als Container für alles, was Sie in ein IMSC-Dokument einfügen möchten, das keine Untertitel-Inhalte ist, am häufigsten Metadaten über den Inhalt oder das Dokument. Sie werden es hauptsächlich verwenden, um Positionierungs- und Styling-Informationen zu speichern.
- `<layout></layout>` — Dieses Element fungiert als Wrapper für Positionierungsinformationen. Es hat `<region>`-Elemente als Kinder.
- `<region></region>` — Dieses Element kann verwendet werden, um `region`s zu definieren, rechteckige Bereiche, die Sie über Ihr Video legen können. Sie haben eine definierte Position, Breite und Höhe sowie eine `id`, um sie eindeutig zu identifizieren. Sie können es sich ähnlich wie ein `<div>`-Element in HTML vorstellen, das eine absolute Position, Breite und Höhe über CSS erhält. Wenn Untertitel-Inhalte mit einer Region "verknüpft" sind (indem die `id` der Region in ihrem `region`-Attribut angegeben wird), werden sie innerhalb des von dieser Region erzeugten Bereichs angezeigt.
- `xml:id` - das Attribut `xml:id`. Der Wert des `xml:id`-Attributs ist eine Zeichenfolge, die verwendet werden kann, um Untertitel-Inhalte mit einer `region` zu verknüpfen.
- `tts:origin` — Dieses Attribut definiert die Position der oberen linken Ecke der Region. Es verwendet das %- (Prozent-) Maß. Der erste Wert definiert, wie weit die obere linke Ecke der Region nach rechts verschoben wird — in diesem Fall platziert der Wert `10%` die Region 10% der Breite des Videos nach rechts. Der zweite Wert definiert, wie weit die obere linke Ecke der Region nach unten verschoben wird – in diesem Fall schiebt der Wert `80%` die obere linke Ecke der Region 80% der Höhe des Videos nach unten.
- `tts:extent` — Dieses Attribut definiert die Breite und Höhe der Region. In diesem Fall setzt `80%` die Breite auf 80% der Breite des Videos und `20%` setzt die Höhe der Region auf 20% der Höhe des Videos.
- `region` — Wenn Sie dies für einige Untertitel-Inhalte einstellen und ihm dann eine `xml:id` der Region als seinen Wert geben, wird diese Region _referenziert_, was bedeutet, dass sie zur angegebenen Zeit im durch diese Region definierten Bereich erscheinen wird. Der Wert `bottom` hier platziert den Untertitel-Inhalt, der durch dieses `<p>`-Element dargestellt wird, in der Region mit dem `xml:id` `bottom`.

Dieses Beispiel wird folgendermaßen angezeigt. Probieren Sie es aus und spielen Sie mit dem Code in den zwei Boxen herum. Sie könnten beispielsweise das Attribut `tts:origin` auf "_0% 0%_" setzen. Oder sehen Sie, was passiert, wenn Sie den Wert des `region`-Attributs des `<p>`-Elements auf "_top_" ändern.

{{EmbedGHLiveSample("imsc-examples/minimal-region/minimal-region.html", '100%', 650)}}

## Erweitertes Beispiel

Das erweiterte Beispiel unten gibt Ihnen eine Vorstellung davon, was Sie mit IMSC tun können, nachdem Sie unsere Tutorials durchgearbeitet haben.

{{EmbedGHLiveSample("imsc-examples/basic-expanded/basics-expanded.html", '100%', 300)}}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<tt
  xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling"
  xmlns:ttp="http://www.w3.org/ns/ttml#parameter" xml:lang="en" ttp:timeBase="media">
  <head>
    <styling>
      <style xml:id="defaultStyle" tts:fontFamily="Verdana, Arial" tts:fontSize="100%"
        tts:textAlign="center"/>
      <style xml:id="alignStart" tts:textAlign="start"/>
      <style xml:id="alignCenter" tts:textAlign="center"/>
      <style xml:id="alignEnd" tts:textAlign="end"/>
      <style xml:id="textWhite" tts:color="#FFFFFF"/>
      <style xml:id="titleHeading" tts:fontSize="300%"/>
      <style xml:id="spanDefaultStyle" tts:backgroundColor="#000000" tts:color="#FFFFFF"/>
      <style xml:id="monoFont" tts:fontFamily="Lucida Console, Monaco, monospace"/>
      <style xml:id="sansserifFont" tts:fontFamily="Impact, Charcoal, sans-serif"/>
      <style xml:id="comicFont" tts:fontFamily="Comic Sans MS, cursive, sans-serif"/>
      <style xml:id="blueText" tts:color="#00FFFF" tts:backgroundColor="#000000"/>
      <style xml:id="limeText" tts:color="#00FF00" tts:backgroundColor="#000000"/>
      <style xml:id="fuchsiaText" tts:color="#FF00FF" tts:backgroundColor="#000000"/>
      <style xml:id="yellowText" tts:color="#FFFF00" tts:backgroundColor="#000000"/>
    </styling>
    <layout>
      <region xml:id="rTop" tts:origin="10% 10%" tts:extent="80% 80%" tts:displayAlign="before"/>
      <region xml:id="rCenter" tts:origin="10% 10%" tts:extent="80% 80%" tts:displayAlign="center"/>
      <region xml:id="rBottom" tts:origin="10% 10%" tts:extent="80% 80%" tts:displayAlign="after"/>
    </layout>
  </head>
  <body style="defaultStyle">
    <div>
      <p xml:id="p1" begin="00:00:01" end="00:00:03" region="rCenter" style="alignCenter">
        <span style="titleHeading">IMSC Demo</span>
      </p>
      <p xml:id="p2" begin="00:00:03" end="00:00:05" region="rBottom" style="alignCenter">
        <span style="spanDefaultStyle">You </span><span style="blueText">can</span><span
          style="yellowText"> apply</span><span style="fuchsiaText"> different</span><span
          style="limeText"> colors, </span>
      </p>
      <p xml:id="p3" begin="00:00:05" end="00:00:07" region="rBottom" style="alignCenter">
        <span style="monoFont">use</span><span style="sansserifFont"> different</span><span
          style="comicFont"> fonts,</span>
      </p>
      <p xml:id="p4" begin="00:00:07" end="00:00:09" region="rBottom" style="alignCenter">
        <span>set </span><span tts:fontSize="150%">the</span><span tts:fontSize="200%"> font
          size.</span>
      </p>
      <p xml:id="p5" begin="00:00:09" end="00:00:11" region="rBottom" style="alignStart">
        <span style="spanDefaultStyle">Align at the start, </span><br/>
      </p>
      <p xml:id="p6" begin="00:00:11" end="00:00:13" region="rBottom" style="alignCenter">
        <span style="spanDefaultStyle">center and</span>
      </p>
      <p xml:id="p7" begin="00:00:13" end="00:00:15" region="rBottom" style="alignEnd">
        <span style="spanDefaultStyle">end</span><br/>
      </p>
      <p xml:id="p8" begin="00:00:15" end="00:00:17" region="rTop" style="alignCenter">
        <span style="spanDefaultStyle">or vertically at the top, </span><br/>
      </p>
      <p xml:id="p9" begin="00:00:17" end="00:00:19" region="rCenter" style="alignCenter">
        <span style="spanDefaultStyle">center and </span>
      </p>
      <p xml:id="p10" begin="00:00:19" end="00:00:21" region="rBottom" style="alignCenter">
        <span style="spanDefaultStyle">bottom.</span>
      </p>
    </div>
  </body>
</tt>
```

## Zusammenfassung

Das war's für Ihren Schnellkurs zu den IMSC-Codegrundlagen! Wir haben hier nur die Oberfläche angekratzt, und Sie werden in den folgenden Artikeln viel tiefer in die oben genannten Themen eintauchen.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Stylen von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Video-Zeitcodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
