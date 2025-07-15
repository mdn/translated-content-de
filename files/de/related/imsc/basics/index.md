---
title: IMSC-Grundlagen
slug: Related/IMSC/Basics
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

IMSC ermöglicht es Ihnen, Untertitel oder Bildunterschriften zu Ihrem Online-Video hinzuzufügen. In diesem Artikel werden wir Sie durch die notwendigen Schritte führen, um loszulegen, einschließlich grundlegender Dokumentstruktur sowie der Grundlagen, wie Sie Untertitel stylen, timen und positionieren können.

> [!NOTE]
> IMSC kann für jede Art von zeitgesteuertem Text verwendet werden, den Sie in ein Webdokument einfügen möchten, nicht nur für Untertitel und Bildunterschriften. Da jedoch Untertitel und Bildunterschriften die häufigsten Anwendungsfälle für IMSC darstellen, konzentrieren wir uns auf diese. Zur Lesbarkeit nutzen wir nur den Begriff Untertitel. Im technischen Kontext, den wir beschreiben, ist der Begriff "Untertitel" austauschbar mit "Bildunterschriften".

## Was ist also IMSC?

IMSC ist eine Auszeichnungssprache, die Sie verwenden können, um zeitgesteuerten Text zu definieren, um digitale Medien mit Untertiteln zu versehen. Es definiert die Struktur Ihres Untertitelinhalts in einem XML-Dokument. Es besteht aus einer Reihe von Elementen, die Sie verwenden können, um verschiedene Teile Ihres Untertitelinhalts einzuschließen oder einzurahmen, damit sie auf eine bestimmte Weise oder zu einer bestimmten Zeit erscheinen. Viele dieser sind ähnlich oder identisch mit HTML-Funktionen.

Falls Sie mit XML oder HTML noch nicht vertraut sind, lesen Sie zuerst darüber und kommen dann hierher zurück:

- [Einführung in XML](/de/docs/Web/XML/Guides/XML_introduction)
- [HTML-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

> [!NOTE]
> Wenn Sie wissen möchten, was Sie mit IMSC in realen Szenarien tun können, schauen Sie sich das erweiterte Beispiel am Ende dieses Tutorials an.

## Minimales IMSC-Dokument

IMSC wird immer als komplettes XML-Dokument angegeben. Als Datei sollte es die Erweiterung "_ttml_" haben.

> [!NOTE]
> IMSC hat derzeit keine native Unterstützung in Browsern, aber der [imscJS](https://github.com/sandflow/imscJS) Polyfill kann verwendet werden, um diese Lücke zu schließen. Alle untenstehenden Beispiele werden mit imscJS gerendert. Es erzeugt dynamisch HTML und CSS aus einem IMSC-XML-Dokument.

Schauen wir uns ein minimales IMSC-Dokument an und wie es gerendert wird:

{{EmbedGHLiveSample("imsc-examples/minimal_ttml/minimal.html", '100%', 560)}}

Die wichtigsten Merkmale sind wie folgt:

- `<tt></tt>` — Ein IMSC-Dokument beginnt immer mit dem Wurzelelement `<tt>`. Sie sollten auch den Standard-Namensraum des Dokuments mit dem `xmlns`-Attribut angeben. Machen Sie sich vorerst keine Sorgen um Namensräume. Wir werden das in einem separaten Leitfaden behandeln.
- `xml:lang` — Sie müssen die Sprache Ihres Inhalts mit dem `xml:lang`-Attribut angeben. Beachten Sie, dass das `lang`-Attribut das Präfix `xml:` haben muss, im Gegensatz zu HTML. In IMSC ist `<tt lang="en">` nicht korrekt — Sie müssen immer `<tt xml:lang="en">` schreiben.
- `<body></body>` — Wie in HTML enthält das `<body>`-Element alle Inhalte, die Sie anzeigen möchten. Für IMSC sind dies typischerweise Untertitel, die Sie zu bestimmten Zeitintervallen während der Wiedergabe eines Videos anzeigen möchten.
- `<div></div>` — Das `<div>`-Element wird als Container für Untertitelinhalte verwendet; Sie benötigen immer mindestens einen davon. Die `<p>`-Elemente, die den tatsächlichen Untertitelinhalt enthalten, haben immer ein `<div>`-Element als übergeordnetes Element.
- `<p></p>` — Textinhalt für Untertitel muss immer in ein `<p>`-Element eingeschlossen werden. Das Element beschreibt einen Absatz von Text, ähnlich wie in HTML. Der Hauptunterschied besteht darin, dass es zeitgesteuert sein kann.

## Timing

Das minimale IMSC-Dokument aus dem vorherigen Beispiel hatte kein Timing. Das bedeutet, dass der Untertitelinhalt während der gesamten Dauer des Videos angezeigt wird. Normalerweise ist dies nicht das, was Sie wollen. Stattdessen möchten Sie, dass Untertitel zu einer bestimmten Zeit angezeigt werden und dann verschwinden. Sie können eine Kombination der Zeitattribute `begin`, `end` und `dur` verwenden, um dies zu erreichen.

Betrachten Sie das folgende bearbeitbare Beispiel:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player.html", '100%', 590)}}

Dies beinhaltet die folgenden neuen Attribute:

- `begin` — gibt an, wann der Untertitel beginnen soll angezeigt zu werden (in diesem Fall 1s nachdem das Video gestartet ist).
- `end` — gibt an, wann der Untertitel verschwinden soll (in diesem Fall 2s nachdem das Video gestartet ist).

Spielen Sie mit den Sekundenwerten im Code-Beispiel herum und drücken Sie die Neuladen-Schaltfläche, wenn Sie bereit sind.

> [!NOTE]
> Die Endzeiten in IMSC sind nicht „inklusiv“. Der Untertitel "Hello, I am Mork from Ork." wird nicht mehr angezeigt, wenn er die zweite Zeitwert erreicht.

Sie können auch das `dur`-Attribut für das Timing verwenden:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player-dur.html", '100%', 590)}}

Dieses Attribut kann als Alternative zum `end`-Attribut verwendet werden. Es definiert, "wie lange" der Untertitel nach Ablauf der `begin`-Zeit angezeigt wird. Im Beispiel soll der zweite Absatz 2s lang angezeigt werden. Da er bei Sekunde 2 beginnt, soll er bei Sekunde 4 verschwinden.

Beachten Sie, was sich bei Sekunde 2 im Vergleich zum vorherigen Beispiel geändert hat.

## Farben

Oft werden Untertitel auf einem opaken oder halbopaken Hintergrund angezeigt, um die Lesbarkeit zu verbessern. Sie können die Attribute `backgroundColor` und `color` verwenden, um die Farben zu ändern, wie in diesem bearbeitbaren Beispiel gezeigt:

{{EmbedGHLiveSample("imsc-examples/minimal-colors/minimal-colors.html", '100%', 620)}}

Hier haben wir die folgenden eingeführt:

- `tts:backgroundColor` — Dieses Attribut legt die Hintergrundfarbe für das Element fest, auf das es angewendet wird. In diesem Fall wird es auf das `<p>`-Element angewendet oder genauer gesagt auf den Bereich, der durch das `<p>`-Element erzeugt wird. Die standardmäßige Hintergrundfarbe ist `transparent`.

- `tts:color` — Dieses Attribut legt die Textfarbe für das Element fest, auf das es angewendet wird. Die standardmäßige Textfarbe ist `white`.

Versuchen Sie, einige andere Farben für den Text und die Hintergrundfarben festzulegen:

- Probieren Sie andere benannte Farben wie `lime` oder `aqua` aus.
- Verwenden Sie Hexadezimalwerte wie `#00ff00` oder `#00ffff`.
- Sie können andere Farbschemata wie `rgb(0 255 255)` verwenden.
- Verwenden Sie schließlich halbtransparente Variationen, wie `rgb(0 0 0 / .8)`.

> [!NOTE]
> Machen Sie sich vorerst keine Sorgen um Namensräume. Wir werden die Bedeutung von `xmlns:tts` und `tts:backgroundColor` in einem separaten Leitfaden erklären.

Wie im [IMSC-Styling](/de/docs/Related/IMSC/Styling) Leitfaden erklärt, ist es möglich, eine Sammlung von Styling-Eigenschaften zu definieren, die beliebig oft verwendet werden können. Der Stil `s1` wird unten dreimal angewendet:

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

Wenn Sie keine Position explizit angeben, wird der Untertitel standardmäßig in der oberen linken Ecke des Videos angezeigt. Üblicherweise möchten Sie jedoch Ihren Untertitel an einem anderen Ort positionieren, wie zum Beispiel im unteren Zentrum des Videos. Sie müssen eine Region angeben, um einen Untertitel zu positionieren.

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

Dies beinhaltet die folgenden neuen Funktionen:

- `<head></head>` — Wie in HTML fungiert das `<head>`-Element als Container für all das, was Sie in ein IMSC-Dokument einschließen möchten, das kein Untertitelinhalt ist, am häufigsten Metadaten über den Inhalt oder das Dokument. Sie werden es meistens verwenden, um Positionierungs- und Stylineinformationen zu speichern.
- `<layout></layout>` — Dieses Element fungiert als Wrapper für Positionierungsinformationen. Es hat `<region>`-Elemente als seine Kinder.
- `<region></region>` — Dieses Element kann verwendet werden, um `region`s zu definieren, rechteckige Bereiche, die Sie auf Ihrem Video platzieren können. Sie haben eine definierte Position, Breite und Höhe sowie eine `id`, um sie eindeutig zu identifizieren. Sie können es sich wie ein `<div>`-Element in HTML vorstellen, das eine absolute Position, Breite und Höhe über CSS erhält. Wenn Untertitelinhalt mit einer Region „verbunden“ ist (indem die `id` der Region im `region`-Attribut angegeben wird), wird es im Bereich angezeigt, der durch diese Region erzeugt wird.
- `xml:id` - das `xml:id`-Attribut. Der Wert des `xml:id`-Attributs ist eine Zeichenfolge, die verwendet werden kann, um Untertitelinhalt mit einer `region` zu verknüpfen.
- `tts:origin` — Dieses Attribut definiert die Position der oberen linken Ecke der Region. Es verwendet die % (Prozent) Metrik. Der erste Wert definiert, wie weit die obere linke Ecke der Region nach rechts verschoben wird — in diesem Fall platziert der Wert `10%` die Region 10% der Videobreite nach rechts. Der zweite Wert definiert, wie weit die obere linke Ecke der Region nach unten verschoben wird — in diesem Fall schiebt der Wert `80%` die obere linke Ecke der Region 80% der Videohöhe nach unten.
- `tts:extent` — Dieses Attribut definiert die Breite und Höhe der Region. In diesem Fall setzt `80%` die Breite auf 80% der Videobreite und `20%` die Höhe auf 20% der Videohöhe.
- `region` — das Einstellen davon auf einigen Untertitelinhalten und dann der Region eine `xml:id` als Wert zu geben, führt dazu, dass es diese Region _referenziert_, was bedeutet, dass es zur angegebenen Zeit im durch diese Region definierten Bereich angezeigt wird. Hier platziert der Wert `bottom` den Untertitelinhalt, dargestellt durch dieses `<p>`-Element, in der Region mit einer `xml:id` von `bottom`.

Dieses Beispiel wird wie unten gezeigt gerendert. Probieren Sie es aus und spielen Sie mit dem Code in den beiden Boxen herum. Sie könnten zum Beispiel das `tts:origin`-Attribut auf "_0% 0%_" setzen. Oder sehen Sie, was passiert, wenn Sie den Wert des `region`-Attributs des `<p>`-Elements auf "_top_" ändern.

{{EmbedGHLiveSample("imsc-examples/minimal-region/minimal-region.html", '100%', 650)}}

## Erweitertes Beispiel

Das erweiterte Beispiel unten gibt Ihnen eine Vorstellung davon, was Sie mit IMSC machen können, nachdem Sie unsere Tutorials durchgearbeitet haben.

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

Das war Ihr Schnellkurs in den IMSC-Code-Grundlagen! Wir haben hier wirklich nur an der Oberfläche gekratzt, und Sie werden in den folgenden Artikeln viel tiefer in die oben genannten Themen eintauchen.
