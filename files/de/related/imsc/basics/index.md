---
title: IMSC-Grundlagen
slug: Related/IMSC/Basics
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

IMSC ermöglicht es Ihnen, Untertitel oder Bildunterschriften zu Ihrem Online-Video hinzuzufügen. In diesem Artikel führen wir Sie durch die erforderlichen Schritte, einschließlich grundlegender Dokumentstruktur, sowie den Grundlagen zur Gestaltung, Timing und Positionierung von Untertiteln.

> [!NOTE]
> IMSC kann für jede Art von zeitgesteuertem Text verwendet werden, den Sie in ein Webdokument integrieren möchten, nicht nur für Untertitel und Bildunterschriften. Da Untertitel und Bildunterschriften jedoch die häufigsten Anwendungsfälle für IMSC darstellen, werden wir uns auf diese konzentrieren. Der Lesbarkeit halber verwenden wir nur den Begriff Untertitel. Im technischen Kontext, den wir beschreiben, ist der Begriff "Untertitel" austauschbar mit "Bildunterschriften".

## Was ist also IMSC?

IMSC ist eine Auszeichnungssprache, die Sie verwenden können, um zeitgesteuerte Texte für das Hinzufügen von Untertiteln zu digitalen Medien zu definieren. Es definiert die Struktur Ihrer Untertitelinhalte in einem XML-Dokument. Es besteht aus einer Reihe von Elementen, die Sie verwenden können, um unterschiedliche Teile Ihrer Untertitelinhalte so zu umschließen oder zu umschreiben, dass sie auf eine bestimmte Weise angezeigt oder zu einem bestimmten Zeitpunkt erscheinen. Viele dieser Elemente sind ähnlich oder gleich wie HTML-Funktionen.

Wenn Sie mit XML oder HTML noch nicht vertraut sind, sollten Sie sich zuerst darüber informieren und dann hier zurückkehren:

- [XML-Einführung](/de/docs/Web/XML/XML_introduction)
- [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics)

> [!NOTE]
> Wenn Sie wissen möchten, was Sie mit IMSC in realen Szenarien tun können, werfen Sie einen Blick auf das erweiterte Beispiel am Ende dieses Tutorials.

## Minimalistisches IMSC-Dokument

IMSC wird immer als vollständiges XML-Dokument angegeben. Als Datei sollte es die Erweiterung "_ttml_" haben.

> [!NOTE]
> IMSC wird momentan nicht nativ von Browsern unterstützt, aber die [imscJS](https://github.com/sandflow/imscJS)-Polyfill kann verwendet werden, um diese Lücke zu schließen. Alle unten stehenden Beispiele werden mithilfe von imscJS gerendert. Es erstellt dynamisch HTML und CSS aus einem IMSC-XML-Dokument.

Werfen wir einen Blick auf ein minimalistisches IMSC-Dokument und sehen, wie es gerendert wird:

{{EmbedGHLiveSample("imsc-examples/minimal_ttml/minimal.html", '100%', 560)}}

Die wichtigsten Funktionen sind wie folgt:

- `<tt></tt>` — Sie beginnen ein IMSC-Dokument immer mit dem Wurzelelement `<tt>`. Sie sollten auch den Standard-Namensraum des Dokuments mit dem `xmlns`-Attribut angeben. Machen Sie sich im Moment keine Sorgen über Namensräume. Wir werden darauf in einem separaten Leitfaden eingehen.
- `xml:lang` — Sie müssen die Sprache Ihres Inhalts mit dem `xml:lang`-Attribut angeben. Beachten Sie, dass das `lang`-Attribut das Präfix `xml:` haben muss, im Gegensatz zu HTML. In IMSC ist `<tt lang="en">` nicht korrekt — Sie müssen immer `<tt xml:lang="en">` schreiben.
- `<body></body>` — Wie in HTML enthält das `<body>`-Element alle Inhalte, die Sie anzeigen möchten. Für IMSC sind dies normalerweise Untertitelinhalte, die Sie zu bestimmten Zeitintervallen während der Wiedergabe eines Videos anzeigen möchten.
- `<div></div>` — Das `<div>`-Element wird als Container für Untertitelinhalte verwendet; Sie müssen immer mindestens eines davon haben. Die `<p>`-Elemente, die den eigentlichen Untertitelinhalt enthalten, haben immer ein `<div>`-Element als übergeordnetes Element.
- `<p></p>` — Textinhalte für Untertitel müssen immer in ein `<p>`-Element eingeschlossen werden. Das Element beschreibt einen Textabsatz, ähnlich wie in HTML. Der Hauptunterschied besteht darin, dass es zeitgesteuert sein kann.

## Timing

Das minimale IMSC-Dokument aus dem vorhergehenden Beispiel hatte kein Timing. Das bedeutet, dass die Untertitelinhalte während der gesamten Dauer des Videos angezeigt werden. Normalerweise ist das nicht das, was Sie wollen. Stattdessen sollen Untertitel zu einer bestimmten Zeit angezeigt und dann wieder ausgeblendet werden. Sie können eine Kombination der Timing-Attribute `begin`, `end` und `dur` verwenden, um dies zu erreichen.

Betrachten Sie das folgende bearbeitbare Beispiel:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player.html", '100%', 590)}}

Dies umfasst die folgenden neuen Attribute:

- `begin` — gibt an, wann der Untertitel angezeigt werden soll (in diesem Fall 1 Sekunde nach Beginn des Videos).
- `end` — gibt an, wann der Untertitel ausgeblendet werden soll (in diesem Fall 2 Sekunden nach Beginn des Videos).

Probieren Sie verschiedene Werte für die Sekunden im Codebeispiel aus und drücken Sie die Neuladetaste, wenn Sie bereit sind.

> [!NOTE]
> Die Endzeiten in IMSC sind nicht "einschließlich". Der Untertitel "Hello, I am Mork from Ork." wird nicht mehr angezeigt, wenn er den zweiten Zeitwert erreicht.

Sie können auch das `dur`-Attribut für das Timing verwenden:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player-dur.html", '100%', 590)}}

Dieses Attribut kann als Alternative zum `end`-Attribut verwendet werden. Es definiert, "wie lange" der Untertitel nach Ablauf der `begin`-Zeit angezeigt wird. Im Beispiel soll der zweite Absatz für 2 Sekunden angezeigt werden. Da er bei Sekunde 2 beginnt, soll er bei Sekunde 4 ausgeblendet werden.

Beachten Sie, was sich bei Sekunde 2 im Vergleich zum vorherigen Beispiel geändert hat.

## Farben

Häufig werden Untertitel auf einem undurchsichtigen oder halbtransparenten Hintergrund angezeigt, um die Lesbarkeit zu verbessern. Sie können die Attribute `backgroundColor` und `color` verwenden, um die Farben zu ändern, wie in diesem bearbeitbaren Beispiel gezeigt:

{{EmbedGHLiveSample("imsc-examples/minimal-colors/minimal-colors.html", '100%', 620)}}

Hier haben wir das Folgende eingeführt:

- `tts:backgroundColor` — Dieses Attribut legt die Hintergrundfarbe des Elements fest, auf das es angewendet wird. In diesem Fall wird es auf das `<p>`-Element angewendet, genauer gesagt auf den Bereich, der vom `<p>`

  Element erzeugt wird. Die Standardhintergrundfarbe ist `transparent`.

- `tts:color` — Dieses Attribut legt die Textfarbe des Elements fest, auf das es angewendet wird. Die Standardtextfarbe ist `white`.

Versuchen Sie, einige andere Farben für den Text und die Hintergrundfarben festzulegen:

- Probieren Sie andere benannte Farben wie `lime` oder `aqua`.
- Verwenden Sie hexadezimale Werte wie `#00ff00` oder `#00ffff`.
- Sie können andere Farbschemata wie `rgb(0 255 255)` verwenden.
- Schließlich probieren Sie halbtransparente Varianten wie `rgb(0 0 0 / .8)`.

> [!NOTE]
> Machen Sie sich im Moment keine Sorgen über Namensräume. Wir werden die Bedeutung von `xmlns:tts` und `tts:backgroundColor` in einem separaten Leitfaden erklären.

Wie im [IMSC-Styling](/de/docs/Related/IMSC/Styling)-Leitfaden erklärt, ist es möglich, eine Sammlung von Stileigenschaften zu definieren, die beliebig oft verwendet werden können. Der Stil `s1` unten wird dreimal angewendet:

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

Wenn Sie keine Position ausdrücklich angeben, erscheint der Untertitel standardmäßig in der oberen linken Ecke des Videos. Üblicherweise möchten Sie Ihren Untertitel jedoch woanders platzieren, z. B. in der unteren Mitte des Videos. Sie müssen eine Region angeben, um einen Untertitel zu positionieren.

Sehen Sie sich unten ein minimales Dokument an, das Regionen für die Positionierung verwendet.

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

- `<head></head>` — Wie in HTML fungiert das `<head>`-Element als Container für alle Dinge, die Sie in einem IMSC-Dokument einschließen möchten, die keine Untertitelinhalte sind, am häufigsten Metadaten über den Inhalt oder das Dokument. Sie werden es hauptsächlich verwenden, um Positionierungs- und Stilinformationen zu speichern.
- `<layout></layout>` — Dieses Element dient als Wrapper für Positionierungsinformationen. Es hat `<region>`-Elemente als seine Kinder.
- `<region></region>` — dieses Element kann verwendet werden, um `region`s zu definieren, rechteckige Bereiche, die Sie über Ihr Video legen können. Sie haben eine definierte Position, Breite und Höhe sowie eine `id`, um sie eindeutig zu identifizieren. Sie können es sich ähnlich wie ein `<div>`-Element in HTML vorstellen, das eine absolute Position, Breite und Höhe über CSS erhält. Wenn Untertitelinhalte mit einer Region "verlinkt" sind (indem Sie die `id` der Region in ihrem `region`-Attribut angeben), werden sie innerhalb des Bereichs angezeigt, der von dieser Region erzeugt wird.
- `xml:id` - das `xml:id`-Attribut. Der Wert des `xml:id`-Attributs ist ein String, der verwendet werden kann, um Untertitelinhalte mit einer `region` zu verknüpfen.
- `tts:origin` — Dieses Attribut definiert die Position der oberen linken Ecke der Region. Es verwendet die % (Prozent) Maßeinheit. Der erste Wert definiert, wie weit die obere linke Ecke der Region nach rechts verschoben wird — in diesem Fall platziert der Wert `10%` die Region 10% der Breite des Videos nach rechts. Der zweite Wert definiert, wie weit die obere linke Ecke der Region nach unten auf das Video geschoben wird — in diesem Fall verschiebt der Wert `80%` die obere linke Ecke der Region 80% der Höhe des Videos nach unten.
- `tts:extent` — Dieses Attribut definiert die Breite und Höhe der Region. In diesem Fall setzt `80%` die Breite auf 80% der Breite des Videos und `20%` setzt die Höhe der Region auf 20% der Höhe des Videos.
- `region` — wenn es auf einige Untertitelinhalte gesetzt wird und dann eine `xml:id` einer Region als Wert erhält, bewirkt dies, dass es diese Region _referenziert_, was bedeutet, dass es zur angegebenen Zeit im durch diese Region definierten Bereich erscheint. Hier platziert der Wert `bottom` den von diesem `<p>`-Element dargestellten Untertitelinhalt in der Region mit einer `xml:id` von `bottom`.

Dieses Beispiel wird wie unten gezeigt gerendert. Probieren Sie es aus und spielen Sie mit dem Code in den beiden Feldern. Sie könnten beispielsweise das `tts:origin`-Attribut auf "_0% 0%_" setzen. Oder sehen Sie, was passiert, wenn Sie den Wert des `region`-Attributs des `<p>`-Elements auf "_top_" ändern.

{{EmbedGHLiveSample("imsc-examples/minimal-region/minimal-region.html", '100%', 650)}}

## Erweitertes Beispiel

Das weiter ausgeführte Beispiel unten gibt Ihnen eine Vorstellung davon, was Sie mit IMSC machen können, nachdem Sie unsere Tutorials durchgearbeitet haben.

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

Das war Ihr Schnellkurs zu den Grundlagen des IMSC-Codes! Wir haben hier nur die Oberfläche angekratzt, und Sie werden in späteren Artikeln viel tiefer in die oben genannten Themen eintauchen.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung der imscJS-Polyfill</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
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
