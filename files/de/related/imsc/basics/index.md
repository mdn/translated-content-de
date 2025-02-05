---
title: IMSC Grundlagen
slug: Related/IMSC/Basics
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

IMSC ermöglicht es, Untertitel oder Bildunterschriften zu Ihrem Online-Video hinzuzufügen. In diesem Artikel führen wir Sie durch die Grundlagen, die Sie benötigen, um loszulegen, einschließlich der Grundstruktur eines Dokuments sowie der grundlegenden Schritte zum Stylen, Timing und Positionieren von Untertiteln.

> [!NOTE]
> IMSC kann für jede Art von zeitgesteuertem Text verwendet werden, den Sie in ein Webdokument einfügen möchten, nicht nur für Untertitel und Bildunterschriften. Da Untertitel und Bildunterschriften jedoch die häufigsten Anwendungsfälle für IMSC darstellen, konzentrieren wir uns auf diese. Für die Lesbarkeit verwenden wir nur den Begriff "Untertitel". Im beschriebenen technischen Kontext ist der Begriff "Untertitel" austauschbar mit "Bildunterschriften".

## Was ist IMSC?

IMSC ist eine Markup-Sprache, mit der Sie zeitgesteuerten Text definieren können, um Untertitel zu digitalen Medien hinzuzufügen. Sie definiert die Struktur Ihres Untertitel-Inhalts in einem XML-Dokument. Es besteht aus einer Reihe von Elementen, mit denen Sie verschiedene Teile Ihres Untertitel-Inhalts einfügen oder umschließen können, um sie auf eine bestimmte Weise oder zu einer bestimmten Zeit erscheinen zu lassen. Viele dieser Elemente sind HTML-Funktionen ähnlich oder identisch.

Falls Ihnen XML oder HTML nicht vertraut sind, sollten Sie zuerst darüber lesen und dann hierher zurückkehren:

- [Einführung in XML](/de/docs/Web/XML/Guides/XML_introduction)
- [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

> [!NOTE]
> Wenn Sie wissen möchten, was Sie in realen Szenarien mit IMSC tun können, schauen Sie sich das erweiterte Beispiel am Ende dieses Tutorials an.

## Minimaler IMSC-Dokument

IMSC wird immer als vollständiges XML-Dokument angegeben. Als Datei sollte es die Erweiterung "_ttml_" haben.

> [!NOTE]
> IMSC hat derzeit keine native Unterstützung in Browsern, aber die [imscJS](https://github.com/sandflow/imscJS) Polyfill kann verwendet werden, um diese Lücke zu schließen. Alle unten stehenden Beispiele werden unter Verwendung von imscJS dargestellt. Es erzeugt dynamisch HTML und CSS aus einem IMSC XML-Dokument.

Schauen wir uns ein minimales IMSC-Dokument und dessen Darstellung an:

{{EmbedGHLiveSample("imsc-examples/minimal_ttml/minimal.html", '100%', 560)}}

Die wichtigsten Funktionen sind:

- `<tt></tt>` — Ein IMSC-Dokument beginnt immer mit dem Wurzelelement `<tt>`. Sie sollten auch den Standard-Namespace des Dokuments mit dem Attribut `xmlns` angeben. Machen Sie sich vorerst keine Sorgen um Namespaces. Wir kommen darauf in einem separaten Leitfaden zurück.
- `xml:lang` — Sie müssen die Sprache Ihres Inhalts mit dem Attribut `xml:lang` angeben. Beachten Sie, dass das Attribut `lang` das Präfix `xml:` haben muss, im Gegensatz zu HTML. In IMSC ist `<tt lang="en">` nicht korrekt — Sie müssen stets `<tt xml:lang="en">` schreiben.
- `<body></body>` — Wie in HTML enthält das `<body>`-Element alle Inhalte, die Sie anzeigen möchten. Für IMSC sind dies typischerweise Untertitel-Inhalte, die Sie während bestimmter Zeitintervalle während der Videowiedergabe anzeigen möchten.
- `<div></div>` — Das `<div>`-Element wird als Container für Untertitel-Inhalte verwendet; Sie benötigen immer mindestens eins davon. Die `<p>`-Elemente, die den eigentlichen Untertitel-Inhalt enthalten, haben immer ein `<div>`-Element als übergeordnetes Element.
- `<p></p>` — Textinhalte für Untertitel müssen immer in einem `<p>`-Element eingeschlossen sein. Das Element beschreibt einen Textabsatz, ähnlich wie in HTML. Der Hauptunterschied besteht darin, dass es zeitgesteuert sein kann.

## Timing

Das minimale IMSC-Dokument aus dem vorherigen Beispiel hatte kein Timing. Das bedeutet, dass der Untertitel-Inhalt während der gesamten Dauer des Videos angezeigt wird. Normalerweise ist das nicht das, was Sie wollen. Stattdessen möchten Sie, dass Untertitel zu einem bestimmten Zeitpunkt angezeigt und dann wieder ausgeblendet werden. Sie können eine Kombination der Timing-Attribute `begin`, `end` und `dur` verwenden, um dies zu erreichen.

Sehen Sie sich das folgende bearbeitbare Beispiel an:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player.html", '100%', 590)}}

Dies umfasst die folgenden neuen Attribute:

- `begin` — Spezifiziert, wann der Untertitel angezeigt werden soll (in diesem Fall 1 Sekunde nach Beginn des Videos).
- `end` — Spezifiziert, wann der Untertitel ausgeblendet werden soll (in diesem Fall 2 Sekunden nach Beginn des Videos).

Experimentieren Sie mit den Zeitwerten im Codebeispiel und drücken Sie den Reload-Button, wenn Sie fertig sind.

> [!NOTE]
> Die Endzeiten in IMSC sind nicht "inklusiv". Der Untertitel "Hello, I am Mork from Ork." wird nicht mehr angezeigt, wenn er den zweiten Zeitwert erreicht.

Sie können für das Timing auch das Attribut `dur` verwenden:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player-dur.html", '100%', 590)}}

Dieses Attribut kann als Alternative zum Attribut `end` verwendet werden. Es definiert, "wie lange" der Untertitel nach der `begin`-Zeit angezeigt wird. Im Beispiel soll der zweite Absatz 2 Sekunden lang angezeigt werden. Da er bei Sekunde 2 beginnt, wird er bei Sekunde 4 ausgeblendet.

Beachten Sie, was sich bei Sekunde 2 im Vergleich zum vorherigen Beispiel geändert hat.

## Farben

Oft werden Untertitel auf einem opaken oder halbopaken Hintergrund dargestellt, um die Lesbarkeit zu verbessern. Sie können die Attribute `backgroundColor` und `color` verwenden, um die Farben zu ändern, wie in diesem bearbeitbaren Beispiel gezeigt:

{{EmbedGHLiveSample("imsc-examples/minimal-colors/minimal-colors.html", '100%', 620)}}

Hier haben wir Folgendes eingeführt:

- `tts:backgroundColor` — Dieses Attribut setzt die Hintergrundfarbe des Elements, auf das es angewendet wird. In diesem Fall wird es auf das `<p>`-Element angewendet, genauer gesagt auf den vom `<p>`-Element erzeugten Bereich. Die Standard-Hintergrundfarbe ist `transparent`.

- `tts:color` — Dieses Attribut setzt die Textfarbe des Elements, auf das es angewendet wird. Die Standard-Textfarbe ist `white`.

Versuchen Sie, andere Farben für Text und Hintergrund zu setzen:

- Probieren Sie andere benannte Farben wie `lime` oder `aqua`.
- Verwenden Sie Hexadezimalwerte wie `#00ff00` oder `#00ffff`.
- Sie können andere Farbschemata wie `rgb(0 255 255)` verwenden.
- Versuchen Sie schließlich halbtransparente Varianten wie `rgb(0 0 0 / .8)`.

> [!NOTE]
> Machen Sie sich vorerst keine Sorgen um Namespaces. Wir erklären die Bedeutung von `xmlns:tts` und `tts:backgroundColor` in einem separaten Leitfaden.

Wie im [IMSC-Styling-Leitfaden](/de/docs/Related/IMSC/Styling) erklärt, ist es möglich, eine Sammlung von Styling-Eigenschaften zu definieren, die mehrfach verwendet werden können. Der Stil `s1` unten wird dreimal angewendet:

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

Wenn Sie keine Position ausdrücklich angeben, wird der Untertitel standardmäßig in der oberen linken Ecke des Videos angezeigt. In der Regel möchten Sie jedoch, dass Ihr Untertitel an einer anderen Stelle angezeigt wird, beispielsweise in der unteren Mitte des Videos. Sie müssen eine Region definieren, um einen Untertitel zu positionieren.

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

Dies umfasst folgende neue Funktionen:

- `<head></head>` — Wie in HTML fungiert das `<head>`-Element als Container für alle Elemente, die Sie in ein IMSC-Dokument aufnehmen möchten, die jedoch keine Untertitel-Inhalte sind. Meistens wird es verwendet, um Metadaten über den Inhalt oder das Dokument zu speichern, sowie Informationen zur Positionierung und Formatierung.
- `<layout></layout>` — Dieses Element fungiert als Wrapper für Positionierungsinformationen. Es enthält `<region>`-Elemente als Kinder.
- `<region></region>` — Dieses Element kann verwendet werden, um Regionen zu definieren, rechteckige Bereiche, die Sie über Ihrem Video platzieren können. Diese haben eine definierte Position, Breite und Höhe sowie eine eindeutige ID (über das Attribut `id`). Sie können es sich wie ein `<div>`-Element in HTML vorstellen, das über CSS eine absolute Position, Breite und Höhe erhält. Wenn Untertitel-Inhalte einer Region zugeordnet sind (indem die ID der Region im Attribut `region` angegeben wird), werden sie innerhalb des von dieser Region definierten Bereichs angezeigt.
- `xml:id` - Das Attribut `xml:id`. Der Wert des Attributs `xml:id` ist eine Zeichenkette, mit der Untertitel-Inhalte einer Region zugeordnet werden können.
- `tts:origin` — Dieses Attribut definiert die Position der oberen linken Ecke der Region. Es verwendet die Maßeinheit % (Prozentsatz). Der erste Wert definiert, wie weit die obere linke Ecke der Region nach rechts verschoben wird — in diesem Fall platziert der Wert `10%` die Region 10% der Video-Breite nach rechts. Der zweite Wert definiert, wie weit die obere linke Ecke der Region nach unten verschoben wird — in diesem Fall wird die obere linke Ecke der Region `80%` der Video-Höhe nach unten verschoben.
- `tts:extent` — Dieses Attribut definiert die Breite und Höhe der Region. In diesem Fall setzt `80%` die Breite auf 80% der Video-Breite, und `20%` setzt die Höhe der Region auf 20% der Video-Höhe.
- `region` — Das Setzen dieses Attributs auf Untertitel-Inhalte und die Angabe der ID der Region als Wert bewirkt, dass diese Inhalte der entsprechenden Region "zugewiesen" werden. Somit erscheinen sie zur angegebenen Zeit im Bereich dieser Region. Im Beispiel platziert der Wert `bottom` die Untertitel-Inhalte des entsprechenden `<p>`-Elements in der Region mit der ID `bottom`.

Dieses Beispiel wird wie unten gezeigt dargestellt. Probieren Sie es aus und spielen Sie mit dem Code in den beiden Feldern. Sie könnten beispielsweise das Attribut `tts:origin` auf "_0% 0%_" setzen. Oder sehen Sie, was passiert, wenn Sie den Wert des Attributs `region` des `<p>`-Elements auf "_top_" ändern.

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

Das war Ihr Schnellkurs in den IMSC-Codiergrundlagen! Wir haben hier nur an der Oberfläche gekratzt, und Sie können diese Themen in den nachfolgenden Artikeln viel tiefer bearbeiten.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertiteldarstellung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Video-Timings zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
