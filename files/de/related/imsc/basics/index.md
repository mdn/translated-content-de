---
title: IMSC-Grundlagen
slug: Related/IMSC/Basics
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

IMSC ermöglicht es Ihnen, Untertitel oder Bildunterschriften zu Ihrem Online-Video hinzuzufügen. In diesem Artikel führen wir Sie durch das, was Sie benötigen, um loszulegen, einschließlich der grundlegenden Dokumentstruktur und der Grundlagen, wie Sie Untertitel stylen, timen und positionieren.

> [!NOTE]
> IMSC kann für jede Art von zeitgesteuertem Text verwendet werden, den Sie in ein Webdokument einfügen möchten, nicht nur für Untertitel und Bildunterschriften. Da Untertitel und Bildunterschriften jedoch die häufigsten Anwendungsfälle für IMSC darstellen, konzentrieren wir uns darauf. Für die Lesbarkeit verwenden wir nur den Begriff Untertitel. Im beschriebenen technischen Kontext ist der Begriff "Untertitel" austauschbar mit "Bildunterschriften".

## Was ist also IMSC?

IMSC ist eine Auszeichnungssprache, die Sie verwenden können, um zeitgesteuerten Text zum Hinzufügen von Untertiteln zu digitalen Medien zu definieren. Es definiert die Struktur Ihrer Untertiteldaten in einem XML-Dokument. Es besteht aus einer Reihe von Elementen, die Sie verwenden können, um verschiedene Teile Ihres Untertitelinhalts einzuschließen oder zu umschließen, damit sie auf eine bestimmte Weise erscheinen oder zu einem bestimmten Zeitpunkt angezeigt werden. Viele dieser Elemente ähneln oder sind identisch mit HTML-Funktionen.

Wenn Sie mit XML oder HTML nicht bereits vertraut sind, lesen Sie diese zuerst durch und kehren Sie dann hierher zurück:

- [XML-Einführung](/de/docs/Web/XML/Guides/XML_introduction)
- [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

> [!NOTE]
> Wenn Sie wissen möchten, was Sie mit IMSC in realen Szenarien tun können, werfen Sie einen Blick auf das erweiterte Beispiel am Ende dieses Tutorials.

## Minimales IMSC-Dokument

IMSC wird immer als vollständiges XML-Dokument spezifiziert. Als Datei sollte sie die Erweiterung "_ttml_" haben.

> [!NOTE]
> IMSC wird derzeit nicht nativ in Browsern unterstützt, aber das [imscJS](https://github.com/sandflow/imscJS)-Polyfill kann verwendet werden, um diese Lücke zu schließen. Alle nachfolgenden Beispiele werden mit imscJS gerendert. Es erzeugt dynamisch HTML und CSS aus einem IMSC-XML-Dokument.

Schauen wir uns ein minimales IMSC-Dokument an und wie es gerendert wird:

{{EmbedGHLiveSample("imsc-examples/minimal_ttml/minimal.html", '100%', 560)}}

Die wichtigsten Merkmale sind wie folgt:

- `<tt></tt>` — Ein IMSC-Dokument beginnt immer mit dem Wurzelelement `<tt>`. Sie sollten auch den Standard-Namespace des Dokuments mit dem `xmlns`-Attribut angeben. Machen Sie sich keine Sorgen über Namespaces, darauf kommen wir in einem separaten Leitfaden zurück.
- `xml:lang` — Sie müssen die Sprache Ihres Inhalts mit dem `xml:lang`-Attribut angeben. Beachten Sie, dass das `lang`-Attribut das Präfix `xml:` haben muss, im Gegensatz zu HTML. In IMSC ist `<tt lang="en">` nicht korrekt — Sie müssen immer `<tt xml:lang="en">` schreiben.
- `<body></body>` — Wie in HTML enthält das `<body>`-Element alle Inhalte, die Sie anzeigen möchten. Für IMSC sind dies typischerweise Untertiteldaten, die Sie zu bestimmten Zeitintervallen während der Wiedergabe eines Videos anzeigen möchten.
- `<div></div>` — Das `<div>`-Element wird als Container für Untertiteldaten verwendet; Sie benötigen immer mindestens einen dieser Container. Die `<p>`-Elemente, die den tatsächlichen Untertitelinhalt enthalten, haben immer ein `<div>`-Element als Eltern.
- `<p></p>` — Textinhalt für Untertitel muss immer in einem `<p>`-Element eingeschlossen sein. Das Element beschreibt einen Textabsatz, ähnlich wie in HTML. Der Hauptunterschied besteht darin, dass es zeitgesteuert sein kann.

## Timing

Das minimale IMSC-Dokument aus dem vorherigen Beispiel hatte kein Timing. Das bedeutet, dass der Untertitelinhalt während der gesamten Dauer des Videos angezeigt wird. Normalerweise ist das nicht das, was Sie wollen. Stattdessen möchten Sie, dass Untertitel zu einem bestimmten Zeitpunkt erscheinen und dann wieder verschwinden. Sie können eine Kombination der Timing-Attribute `begin`, `end` und `dur` verwenden, um dies zu erreichen.

Betrachten Sie das folgende bearbeitbare Beispiel:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player.html", '100%', 590)}}

Dies umfasst die folgenden neuen Attribute:

- `begin` — gibt an, wann der Untertitel angezeigt werden soll (in diesem Fall 1s nachdem das Video gestartet ist).
- `end` — gibt an, wann der Untertitel verschwinden soll (in diesem Fall 2s nachdem das Video gestartet ist).

Experimentieren Sie mit den Sekundenwerten im Codebeispiel und drücken Sie die Neuladetaste, wenn Sie bereit sind.

> [!NOTE]
> Die Endzeiten in IMSC sind nicht "inklusive". Der Untertitel "Hello, I am Mork from Ork." wird nicht mehr angezeigt, wenn er den zweiten Wert in der Zeit erreicht.

Sie können auch das `dur`-Attribut für das Timing verwenden:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player-dur.html", '100%', 590)}}

Dieses Attribut kann als Alternative zum `end`-Attribut verwendet werden. Es definiert, "wie lange" der Untertitel angezeigt wird, nachdem die `begin`-Zeit abgelaufen ist. Im Beispiel soll der zweite Absatz für 2 Sekunden angezeigt werden. Da er bei Sekunde 2 beginnt, soll er bei Sekunde 4 verschwinden.

Beachten Sie, was sich bei Sekunde 2 im Vergleich zum vorherigen Beispiel geändert hat.

## Farben

Häufig werden Untertitel auf einem opaken oder halb-opaken Hintergrund angezeigt, um die Lesbarkeit zu verbessern. Sie können die Attribute `backgroundColor` und `color` verwenden, um die Farben zu ändern, wie in diesem bearbeitbaren Beispiel demonstriert:

{{EmbedGHLiveSample("imsc-examples/minimal-colors/minimal-colors.html", '100%', 620)}}

Hier haben wir Folgendes eingeführt:

- `tts:backgroundColor` — Dieses Attribut setzt die Hintergrundfarbe des Elements, auf das es angewendet wird. In diesem Fall wird es auf das `<p>`-Element angewendet, genauer gesagt auf den Bereich, der vom `<p>`-Element erzeugt wird. Die Standardhintergrundfarbe ist `transparent`.

- `tts:color` — Dieses Attribut setzt die Textfarbe des Elements, auf das es angewendet wird. Die Standardtextfarbe ist `white`.

Versuchen Sie, einige andere Farben für Text und Hintergrundfarben einzustellen:

- Versuchen Sie andere benannte Farben wie `lime` oder `aqua`.
- Verwenden Sie Hexadezimalwerte wie `#00ff00` oder `#00ffff`.
- Sie können andere Farbschemata wie `rgb(0 255 255)` verwenden.
- Schließlich versuchen Sie halbtransparente Variationen, wie `rgb(0 0 0 / .8)`.

> [!NOTE]
> Machen Sie sich vorerst keine Sorgen über Namespaces. Wir werden die Bedeutung von `xmlns:tts` und `tts:backgroundColor` in einem separaten Leitfaden erklären.

Wie im [IMSC Styling](/de/docs/Related/IMSC/Styling)-Leitfaden erklärt, ist es möglich, eine Sammlung von Stylingeigenschaften zu definieren, die mehrfach verwendet werden können. Der Stil `s1` unten wird dreimal angewendet:

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

Wenn Sie keine Position explizit angeben, wird der Untertitel standardmäßig in der oberen linken Ecke des Videos angezeigt. Üblicherweise möchten Sie jedoch den Untertitel an einer anderen Stelle positionieren, etwa in der unteren Mitte des Videos. Sie müssen eine Region definieren, um einen Untertitel zu positionieren.

Sehen Sie sich unten ein minimales Dokument an, das Regionen zur Positionierung verwendet.

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

Dies umfasst die folgenden neuen Funktionen:

- `<head></head>` — Wie in HTML fungiert das `<head>`-Element als Container für alle Dinge, die Sie in ein IMSC-Dokument aufnehmen möchten, die nicht Untertitelinhalt sind, am häufigsten Metadaten über den Inhalt oder das Dokument. Sie verwenden es hauptsächlich, um Positionierungs- und Stylingeigenschaften zu speichern.
- `<layout></layout>` — Dieses Element fungiert als Wrapper für Positionierungsinformationen. Es hat `<region>`-Elemente als seine Kinder.
- `<region></region>` — Dieses Element kann verwendet werden, um `regionen` zu definieren, rechteckige Bereiche, die Sie oben auf Ihrem Video platzieren können. Sie haben eine definierte Position, Breite und Höhe sowie eine `id`, um sie eindeutig zu identifizieren. Sie können es sich ähnlich wie ein `<div>`-Element in HTML vorstellen, das eine absolute Position, Breite und Höhe über CSS erhält. Wenn Untertitelinhalt mit einer Region "verlinkt" ist (indem die `id` der Region in seinem `region`-Attribut angegeben wird), wird es innerhalb des von dieser Region erzeugten Bereichs angezeigt.
- `xml:id` - das `xml:id`-Attribut. Der Wert des `xml:id`-Attributs ist ein String, der verwendet werden kann, um Untertitelinhalt mit einer `region` zu verlinken.
- `tts:origin` — Dieses Attribut definiert die Position der oberen linken Ecke der Region. Es verwendet die % (Prozent)-Metrik. Der erste Wert definiert, wie weit die obere linke Ecke der Region nach rechts geschoben wird — in diesem Fall platziert der Wert `10%` die Region 10% der Videobreite nach rechts. Der zweite Wert definiert, wie weit die obere linke Ecke der Region nach unten im Video platziert wird — in diesem Fall drückt der Wert `80%` die obere linke Ecke der Region 80% der Videohöhe nach unten.
- `tts:extent` — Dieses Attribut definiert die Breite und Höhe der Region. In diesem Fall setzt `80%` die Breite auf 80% der Videobreite und `20%` die Höhe der Region auf 20% der Videohöhe.
- `region` — Durch das Festlegen dieses Attributs auf einigen Untertitelinhalten und das anschließende Geben der `id` einer Region als Wert wird sie auf diese Region _referenziert_, was bedeutet, dass sie zum angegebenen Zeitpunkt im durch diese Region definierten Bereich angezeigt wird. Hier platziert der Wert `bottom` den durch dieses `<p>`-Element dargestellten Untertitelinhalt in der Region mit der `xml:id` von `bottom`.

Dieses Beispiel wird unten wie gezeigt gerendert. Probieren Sie es aus und experimentieren Sie mit dem Code in den beiden Boxen. Sie könnten zum Beispiel das Attribut `tts:origin` auf "_0% 0%_" setzen. Oder sehen Sie, was passiert, wenn Sie den Wert des `region`-Attributs des `<p>`-Elements zu "_top_" ändern.

{{EmbedGHLiveSample("imsc-examples/minimal-region/minimal-region.html", '100%', 650)}}

## Erweitertes Beispiel

Das weiter ausgearbeitete Beispiel unten gibt Ihnen eine Vorstellung davon, was Sie mit IMSC tun können, nachdem Sie unsere Tutorials durchgearbeitet haben.

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
      <style xml:id="textWhite" tts:color="white"/>
      <style xml:id="titleHeading" tts:fontSize="300%"/>
      <style xml:id="spanDefaultStyle" tts:backgroundColor="black" tts:color="white"/>
      <style xml:id="monoFont" tts:fontFamily="Lucida Console, Monaco, monospace"/>
      <style xml:id="sansserifFont" tts:fontFamily="Impact, Charcoal, sans-serif"/>
      <style xml:id="comicFont" tts:fontFamily="Comic Sans MS, cursive, sans-serif"/>
      <style xml:id="blueText" tts:color="cyan" tts:backgroundColor="black"/>
      <style xml:id="limeText" tts:color="lime" tts:backgroundColor="black"/>
      <style xml:id="fuchsiaText" tts:color="magenta" tts:backgroundColor="black"/>
      <style xml:id="yellowText" tts:color="yellow" tts:backgroundColor="black"/>
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

Das war Ihr Crashkurs in IMSC-Code-Grundlagen! Wir haben hier nur die Oberfläche angekratzt, und Sie werden in den nachfolgenden Artikeln viel tiefer in die oben genannten Themen eintauchen.
