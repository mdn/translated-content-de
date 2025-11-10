---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{DefaultAPISidebar("WebVTT")}}

<!-- Informationsblock über Regionen muss hinzugefügt werden -->

**Web Video Text Tracks Format** (**WebVTT**) ist ein Klartext-Dateiformat zur Anzeige zeitlich abgestimmter Textspuren, die mit Inhalten in {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen synchronisiert sind. Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Textüberlagerungen einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement assoziierten WebVTT-Dateien werden unter Verwendung des {{HTMLElement("track")}}-Elements hinzugefügt – siehe [Anzeige von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file). Ein Medienelement kann mit mehreren Dateien assoziiert sein, wobei jede Datei verschiedene Arten von zeitlichen Daten wie geschlossene Untertitel, Untertitel oder Kapitelüberschriften enthält, die in verschiedene Sprachen übersetzt sind.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Überblick

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateierweiterung `.vtt`. Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein.

Die Struktur einer WebVTT-Datei besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, der aus einem optionalen Byte-Order-Mark (BOM) besteht – dem String `WEBVTT` – gefolgt von einem optionalen Textheader, der durch ein oder mehrere Leer- oder Tabulatorzeichen getrennt ist (in WebVTT-Dateien sind Tabulatoren und Leerzeichen austauschbar).
- Eine oder mehrere leere Zeilen, die jeweils zwei aufeinanderfolgende Zeilenumbrüche darstellen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, getrennt durch ein oder mehrere Leerzeilen.
- Null oder mehr Cue- oder `NOTE`-Blöcke, getrennt durch ein oder mehrere Leerzeilen.

Eine einfache WebVTT-Datei, die den String `WEBVTT` (aber keinen Header-Text), einen NOTE-Block und zwei Cues enthält, wird unten dargestellt:

```plain
WEBVTT

NOTE This is a multi-line note block.
These are used for comments by the author
Two cue blocks are defined below.

00:01.000 --> 00:04.000
Never drink liquid nitrogen.

00:05.000 --> 00:09.000
Because:
- It will perforate your stomach.
- You could die.
```

Die folgenden Abschnitte erläutern die Teile der Datei, einschließlich derjenigen, die im obigen Beispiel nicht verwendet werden.

## WebVTT-Header

WebVTT-Dateien beginnen mit einem Header-Block, der Folgendes enthält:

- Ein optionales Byte-Order-Mark (BOM), das das Unicode-Zeichen `U+FEFF` ist.
- Der String `WEBVTT`.
- Ein optionaler Textheader rechts von `WEBVTT`.
  - Nach `WEBVTT` muss mindestens ein Leerzeichen sein.
  - Sie könnten diesen Header verwenden, um eine Beschreibung der Datei hinzuzufügen.
  - Sie dürfen im Textheader alles verwenden, außer Zeilenumbrüche oder den String `-->`.

Der String `WEBVTT` ist der einzige erforderliche Teil der WebVTT-Datei, also würde die einfachste mögliche WebVTT-Datei so aussehen:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text. Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder einen Tabulator getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Cues

Ein Cue definiert eine einzelne Beschriftung, einen Untertitel oder einen anderen Textblock, der über einen bestimmten Zeitraum angezeigt werden soll. Cues müssen nach dem Header und allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Ein optionaler Cue-Identifikator gefolgt von einem Zeilenumbruch.
- Cue-Timings, die den Zeitraum angeben, in dem der Nutztext angezeigt werden soll. Diese können optional durch Cue-Einstellungen mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einem einzelnen Zeilenumbruch, ergänzt werden.
- Der Cue-Nutztext, der mehrere Zeilen umfassen kann und durch eine leere Zeile beendet wird.

Hier ist ein Beispiel für ein einfaches Cue. Die erste Zeile gibt die Anzeige-Start- und Endzeiten des Cues an, getrennt durch den String `-->`. Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Cue ist etwas komplizierter. Er beginnt mit einem Cue-Identifikator — `1 - Title Crawl` —, der verwendet werden kann, um den Cue in JavaScript und CSS zu referenzieren. Er hat auch Cue-Einstellungen nach den Cue-Timings, um die Cue-Position einzustellen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Nutztext berücksichtigt, was es Ihnen ermöglicht, mit Bindestrichen (`-`) als Einträgen Listen zu erstellen, wie gezeigt. Im Allgemeinen sollten Sie diese Umbrüche nur einfügen, wenn es nötig ist, da der Browser den Text entsprechend umbricht.

Es ist wichtig, innerhalb eines Cues keine "zusätzlichen" Leerzeilen zu verwenden, zum Beispiel zwischen der Timings-Zeile und dem Cue-Nutztext oder innerhalb des Nutztextes. Dies liegt daran, dass eine leere Zeile den aktuellen Cue beendet.

Jeder Teil des Cues wird in den folgenden Abschnitten ausführlicher erklärt.

### Cue-Identifikator

Der Identifikator ist ein Name, der den Cue identifiziert. Er kann verwendet werden, um den Cue von JavaScript oder CSS aus zu referenzieren. Er darf keine Zeilenumbrüche enthalten und kann den String `-->` nicht enthalten. Er muss mit einem einzigen Zeilenumbruch enden. Identifikatoren müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z. B. 1, 2, 3).

Das folgende Beispiel zeigt eine Datei mit mehreren Cues, die Identifikatoren enthalten:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2 Some Text
00:00:30.739 --> 00:00:34.074
This is the second.

3
00:00:34.159 --> 00:00:35.743
This is the third
```

### Cue-Timings

Ein Cue-Timing gibt das Zeitintervall an, wann der Cue angezeigt wird. Es hat eine Start- und Endzeit, die in Zeitstempeln dargestellt werden. Die Endzeit muss größer als die Startzeit sein und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Cues können sich zeitlich überlappen, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) ist `chapters`).

Jedes Cue-Timing enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Den String `-->`.
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, die größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden beiden Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wobei die Komponenten wie folgt definiert sind:

- `hh`
  - : Stellt die Stunden dar und muss mindestens zwei Ziffern haben. Es kann mehr als zwei Ziffern haben (z. B. `9999:00:00.000`).
- `mm`
  - : Stellt die Minuten dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Repräsentiert die Sekunden und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Repräsentiert die Millisekunden und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Beispiele für Cue-Timings:

- Grundlegende Cue-Timing-Beispiele

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Überlappende Cue-Timing-Beispiele

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Nicht überlappende Cue-Timing-Beispiele

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue-Einstellungen

Cue-Einstellungen sind optionale Komponenten, die den Cue-Nutztext über dem Video positionieren. Dazu gehören horizontale und vertikale Positionen. Null oder mehr Cue-Einstellungen können angegeben und in beliebiger Reihenfolge verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden auf der rechten Seite der Cue-Timings hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen dem Cue-Timing und der ersten Einstellung sowie zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind groß-/klein-schreibungssensitiv; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal statt horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`
  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Sein Wert kann sein:
    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Cues, wie sie im Video erscheint. Positive Zahlen werden von oben nach unten gezählt und negative Zahlen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. ohne Dezimalstellen) zwischen 0 und 100, einschließlich, die mit einem Prozentzeichen (%) folgen muss.

    | Zeile       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `line:0`    | oben                   | rechts        | links         |
    | `line:-1`   | unten                  | links         | rechts        |
    | `line:0%`   | oben                   | rechts        | links         |
    | `line:100%` | unten                  | links         | rechts        |

- `position`
  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheinen wird. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheinen wird. Der Wert ist ein Prozentsatz zwischen 0 und 100, einschließlich.

    | Position        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `position:0%`   | links                  | oben          | oben          |
    | `position:100%` | rechts                 | unten         | unten         |

- `size`
  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100, einschließlich.

    | Größe       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `size:100%` | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`
  - : Gibt die Ausrichtung des Textes an. Text wird innerhalb des Raumes, der durch die Size-Cue-Einstellung festgelegt wird, ausgerichtet, wenn er gesetzt ist.

    | Ausrichtung    | `vertical` weggelassen | `vertical:rl`      | `vertical:lr`      |
    | -------------- | ---------------------- | ------------------ | ------------------ |
    | `align:start`  | links                  | oben               | oben               |
    | `align:center` | horizontal zentriert   | vertikal zentriert | vertikal zentriert |
    | `align:end`    | rechts                 | unten              | unten              |

Hier sind einige Beispiele. Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text auf einem Schild oder Etikett zu überlagern. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
00:00:05.000 --> 00:00:10.000 position:10%,line-left align:left size:31%
00:00:05.000 --> 00:00:10.000 position:90% align:right size:35%
00:00:05.000 --> 00:00:10.000 position:45%,line-right align:center size:90%
```

### Cue-Nutztext

Der Nutztext ist dort, wo der Cue-Inhalt definiert wird, z.B. der Untertitel oder der geschlossene Untertiteltext. Es darf Zeilenumbrüche enthalten, aber keine zwei aufeinanderfolgenden Zeilenumbrüche: das würde eine Leerzeile erzeugen, was das Ende des Blocks anzeigt.

Ein Cue-Text-Nutztext darf den String `-->`, das Kaufmannszeichen (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten. Bei Bedarf können Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für das Kaufmannszeichen und `&lt;` für kleiner als verwenden. Es wird auch empfohlen, die Escape-Sequenz für größer als `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden. Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser alle {{Glossary("character_reference", "Zeichenreferenzen")}} in Cues, Notizen oder anderem Text zulassen. Ältere Browserversionen können nur die folgende Untermenge benannter Zeichenreferenzen unterstützen:

| Name                      | Zeichen | Escape-Sequenz |
| ------------------------- | ------- | -------------- |
| Kaufmannszeichen          | `&`     | `&amp;`        |
| Kleiner-als               | `<`     | `&lt;`         |
| Größer-als                | `>`     | `&gt;`         |
| Links-nach-Rechts-Zeichen | _none_  | `&lrm;`        |
| Rechts-nach-Links-Zeichen | _none_  | `&rlm;`        |
| Geschütztes Leerzeichen   |         | `&nbsp;`       |

### Cue-Nutztext-Tags

Eine Reihe von Tags, wie `<b>`, können verwendet werden, um Text innerhalb eines Cues zu markieren und zu formatieren. Wenn jedoch die WebVTT-Datei in einem {{HTMLElement("track")}}-Element verwendet wird, wo das Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) `chapters` ist, können Sie keine Tags verwenden.

- Zeitstempel-Tag
  - : Zeitstempel-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen.
    Der Zeitstempel muss größer als der Startzeitstempel des Cues sein, größer als jeder vorherige Zeitstempel im Cue-Nutztext und kleiner als der Endzeitstempel des Cues sein.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende des Nutztextes, wenn es keinen weiteren Zeitstempel im Nutztext gibt.
    Jeder Text vor dem _aktiven Text_ im Nutztext ist _vorheriger Text_.
    Jeder Text, der über den _aktiven Text_ hinausgeht, ist _zukünftiger Text_.

    ```plain
    1
    00:16.500 --> 00:18.500
    When the moon <00:17.500>hits your eye

    1
    00:00:18.500 --> 00:00:20.500
    Like a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

    1
    00:00:20.500 --> 00:00:21.500
    That's <00:00:21.000>amore
    ```

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind und erfordern öffnende und schließende Tags (z.B. `<b>text</b>`). Mit diesen Tags ausgezeichneter Text kann in [`STYLE`-Blöcken](#style-blöcke) mittels {{cssxref("::cue")}} Pseudo-Element formatiert werden.

- Kursiv-Tag (`<i></i>`)
  - : Den enthaltenen Text kursiv darstellen.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)
  - : Den enthaltenen Text fett darstellen.

    ```xml
    <b>text</b>
    ```

- Unterstreichungstag (`<u></u>`)
  - : Den enthaltenen Text unterstreichen.

    ```xml
    <u>text</u>
    ```

- Klassen-Tag (`<c></c>`)
  - : Eine Klasse zum enthaltenem Text hinzufügen, um ihn über CSS auszuwählen.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)
  - : Wird mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://de.wikipedia.org/wiki/Rubifizierung) (d.h. kleine erklärende Zeichen über anderen Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)
  - : Wird mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://de.wikipedia.org/wiki/Rubifizierung) (d.h. kleine erklärende Zeichen über anderen Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Sprach-Tag (`<v></v>`)
  - : Ähnlich wie das Klassen-Tag, wird auch verwendet, um den enthaltenen Text mittels CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Lang-Tag (`<lang></lang>`)
  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante zugehörig gekennzeichnet wurde, unter Verwendung des {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag-Formats")}}.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Anmerkungen zu einer WebVTT-Datei hinzuzufügen. Sie sind für diejenigen gedacht, die die Datei lesen, und werden von den Benutzern nicht gesehen. Zum Beispiel könnten Sie sie verwenden, um Kontaktinformationen des Autors zu notieren, einen Überblick über Ihre Struktur zu geben oder Platzhalter für Cues hinzuzufügen, die noch geschrieben werden müssen.

Sie können überall im WebVTT nach dem Header verwendet werden.

NOTE-Blöcke können Zeilenumbrüche enthalten, aber keine zwei aufeinanderfolgenden Zeilenumbrüche: Das würde eine Leerzeile erzeugen, was das Ende des Blocks anzeigt.

Ein Kommentar darf den String `-->`, das Kaufmannszeichen (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten. Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie `&amp;` für das Kaufmannszeichen und `&lt;` für kleiner als verwenden. Es wird auch empfohlen, die Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Dem String `NOTE`.
- Einem Leerzeichen oder einem Zeilenumbruch.
- Null oder mehr Zeichen, außer den oben genannten.

Hier sind einige Beispiele:

```plain
NOTE This is a single line comment

NOTE
This is a simple multi line comment

NOTE
One comment that is spanning
more than one line.

NOTE You can also make a comment
across more than one line this way.

NOTE TODO I might add a line to indicate work that still has to be done.
```

## STYLE-Blöcke

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styling von Cues innerhalb einer WebVTT-Datei einzubetten. Beachten Sie, dass diese verwendet werden, um das Erscheinungsbild und die Größe der Cues zu gestalten, nicht aber ihre Position und ihr Layout, die durch die [Cue-Einstellungen](#cue-einstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Cues können auch durch CSS-Stile, die von dem assoziierten [Dokument, das das Video-/Audio-Element einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), geladen werden, angepasst werden.

`STYLE`-Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus folgenden Zeilen:

- Der String `STYLE` gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann ein Zeilenumbruch.
- Ein String, der die CSS-Stile definiert, die angewendet und angepasst werden sollen, unter Verwendung des {{cssxref("::cue")}} Pseudo-Elements.

Der Block darf den String `-->` nicht enthalten. Er kann Zeilenumbrüche enthalten, aber nicht zwei aufeinanderfolgende Zeilenumbrüche: Das würde eine Leerzeile erzeugen, was das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten dargestellt. Diese verwendet {{cssxref("::cue")}} zum Anwenden einer Textfarbe auf den gesamten Cue-Text und einer anderen Textfarbe nur auf Text, der mit `<b></b>`-Tags versehen ist.

```plain
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Style blocks cannot use blank lines nor "dash dash greater than" */

NOTE comment blocks can be used between style blocks.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Hello <b>world</b>.

NOTE style blocks cannot appear after the first cue.
```

> [!NOTE]
> Es gibt Live-Beispiele, die viele der folgenden Fälle demonstrieren, in [Weitere Cue-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) im _WebVTT API_.

### Alle Cue-Nutztexte abgleichen

Mit {{cssxref("::cue")}} auf alle Cue-Nutztexte abgleichen.

Zum Beispiel würde der folgende `STYLE`-Block alle Cue-Texte abgleichen und sie gelb einfärben.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Einen Tag-Typ abgleichen

Cue-Text, der mit bestimmten [Cue-Nutztext-Tags](#cue-nutztext-tags) wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang` markiert ist, durch Angabe des Tags in {{cssxref("::cue()")}} als Typselektor abgleichen.

Beispielsweise würde der folgende Block den Cue-Nutztext abgleichen, der mit `lang` als gelb markiert ist, und jeden der anderen Tags als rot.

```plain
STYLE
::cue(c),
::cue(i),
::cue(b),
::cue(u),
::cue(ruby),
::cue(rt),
::cue(v) {
  color: red;
}
::cue(lang) {
  color: yellow;
}
```

### Einen Klassenselektor abgleichen

Alle Tags abgleichen, die mit einem Klassenselektor in `::cue()` markiert sind.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde den gesamten nachfolgenden Text abgleichen, da alle Tags die Klasse `myclass` haben.

```plain
WEBVTT

STYLE
::cue(.myclass) {
  color: yellow;
}

00:00:00.000 --> 00:00:08.000
<c.myclass>Yellow!</c>
<i.myclass>Yellow!</i>
<u.myclass>Yellow!</u>
<b.myclass>Yellow!</b>
<u.myclass>Yellow!</u>
<ruby.myclass>Yellow! <rt.myclass>Yellow!</rt></ruby>
<v.myclass Kathryn>Yellow!</v>
<lang.myclass en>Yellow!</lang>
```

Um ein bestimmtes Tag und eine Klasse abzugleichen, müssen Sie beide in `::cue()` angeben:

```css
::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Cue-Nutztext, der mit einem bestimmten Tag und Attribut markiert ist, kann mit einem Attributselektor abgeglichen werden.

Beispielsweise betrachten Sie die folgende WebVTT-Datei, die Text mit den `v`- und `lang`- [Cue-Nutztext-Tags](#cue-nutztext-tags) markiert, wobei Attribute verwendet werden, um die bestimmte Stimme ("Salame") und Sprachen anzugeben.

```plain
WEBVTT

STYLE
::cue([lang="en-US"]) {
color: yellow;
}
::cue(lang[lang="en-GB"]) {
color: cyan;
}
::cue(v[voice="Salame"]) {
color: lime;
}

00:00:00.000 --> 00:00:08.000
Yellow!

00:00:08.000 --> 00:00:16.000
<lang en-GB>Cyan!</lang>

00:00:16.000 --> 00:00:24.000
I like <v Salame>lime.</v>
```

### Mithilfe von Pseudoklassen abgleichen

Das vorherige Beispiel gestaltete Text für eine bestimmte Sprache mit Attributabgleich. Sie können auch Sprachen mit der `:lang()`-Pseudoklasse abgleichen, wie vom folgenden `STYLE`-Block demonstriert.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Sie können auf ähnliche Weise mit den Pseudo-Klassen `:past` und `:future` übereinstimmen, um ein Karaoke-ähnliches Erlebnis zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudo-Klassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Eine Cue-ID abgleichen

Gegen eine bestimmte Cue-`id` durch Angabe der `id` innerhalb von {{cssxref("::cue()")}} abgleichen.

> [!NOTE]
> Zum Zeitpunkt dieses Schreibens scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Ein Beispiel: Die folgende WebVTT-Datei sollte den Cue mit der Identifikationsnummer `cue1` in Grün gestalten.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT CSS auf die gleiche Weise wie in HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen in einem Cue-Identifikator eingeschlossen werden können:

```plain
WEBVTT

STYLE
::cue(#transcription\ credits) {
  color: red;
}

transcription credits
00:04.000 --> 00:05.000
Transcribed by Célestes™
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS- Pseudoelemente [`::cue` und `::cue()`](/de/docs/Web/CSS/Reference/Selectors/::cue)
