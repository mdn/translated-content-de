---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks Format** (**WebVTT**) ist ein Klartext-Dateiformat zur Anzeige von zeitlich synchronisierten Textspuren, die mit Inhalten in {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen synchronisiert sind.
Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Text-Overlays zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verknüpften WebVTT-Dateien werden mit dem {{HTMLElement("track")}}-Element hinzugefügt — siehe [Anzeigen von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit mehreren Dateien verknüpft sein, die jeweils unterschiedliche Arten von zeitgesteuerten Daten repräsentieren, wie beispielsweise geschlossene Untertitel, Untertitel oder Kapitelüberschriften, die in verschiedene Sprachen übersetzt wurden.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Übersicht

WebVTT-Dateien haben den MIME-Typ `text/vtt` und die Dateiendung `.vtt`.
Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein.

Die Struktur eines WebVTT besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Kopfteil, bestehend aus einem optionalen Byte Order Mark (BOM) — der Zeichenkette `WEBVTT` — gefolgt von einem optionalen Textheader, getrennt durch ein oder mehrere Leerzeichen oder Tabulatorzeichen (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere Leerzeilen, die jeweils zwei aufeinanderfolgende Zeilenumbrüche entsprechen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, getrennt durch ein oder mehrere Leerzeilen.
- Null oder mehr Cue- oder `NOTE`-Blöcke, getrennt durch ein oder mehrere Leerzeilen.

Eine einfache WebVTT-Datei, die die Zeichenkette `WEBVTT` (aber keinen Headertext), einen NOTE-Block und zwei Cues enthält, wird unten gezeigt:

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

Die folgenden Abschnitte erklären die Teile der Datei, einschließlich derjenigen, die im obigen Beispiel nicht verwendet wurden.

## WebVTT-Kopfdaten

WebVTT-Dateien beginnen mit einem Headerblock, der Folgendes enthält:

- Ein optionales Byte Order Mark (BOM), das das Unicode-Zeichen `U+FEFF` ist.
- Die Zeichenkette `WEBVTT`.
- Ein optionaler Textheader rechts von `WEBVTT`.
  - Es muss mindestens ein Leerzeichen nach `WEBVTT` folgen.
  - Sie könnten diesen Header verwenden, um eine Beschreibung zur Datei hinzuzufügen.
  - Sie dürfen alles im Textheader verwenden, außer Zeilenumbrüchen oder die Zeichenfolge `-->`.

Die Zeichenkette `WEBVTT` ist der einzige erforderliche Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei folgendermaßen aussieht:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder einen Tabulator abgetrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Cues

Ein Cue definiert einen einzelnen Untertitel, ein Übertitel oder einen anderen Textblock, der über ein bestimmtes Zeitintervall angezeigt werden soll.
Cues müssen nach dem Header und allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Ein optionaler Cue-Identifikator gefolgt von einem Zeilenumbruch.
- Cue-Timings, die den Zeitbereich angeben, in dem der Payload-Text angezeigt werden soll. Optional gefolgt von Cue-Einstellungen mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einem einzelnen Zeilenumbruch.
- Der Cue-Payload-Text, der sich über mehrere Zeilen erstrecken kann und durch eine Leerzeile beendet wird.

Hier ist ein Beispiel für ein einfaches Cue.
Die erste Zeile gibt die Anzeigestart- und Endzeiten des Cue an, getrennt durch die Zeichenkette `-->`.
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Cue ist etwas komplizierter.
Er beginnt mit einem Cue-Identifikator — `1 - Title Crawl` —, der verwendet werden kann, um den Cue in JavaScript und CSS zu referenzieren.
Er hat auch Cue-Einstellungen nach den Cue-Timings, um die Position des Cues festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Payload-Text respektiert, was es Ihnen ermöglicht, Aufzählungslisten mit Bindestrichen (`-`) zu erstellen.
Im Allgemeinen sollten Sie diese Umbrüche nur einfügen, wenn nötig, da der Browser den Text angemessen umbrechen wird.

Es ist wichtig, keine "zusätzlichen" Leerzeilen innerhalb eines Cues zu verwenden, beispielsweise zwischen der Timings-Zeile und dem Cue-Payload oder innerhalb des Payloads.
Dies liegt daran, dass eine Leerzeile den aktuellen Cue beendet.

Jeder Teil des Cues wird in den folgenden Abschnitten genauer erklärt.

### Cue-Identifikator

Der Identifikator ist ein Name, der den Cue identifiziert. Er kann verwendet werden, um den Cue von JavaScript oder CSS aus zu referenzieren. Er darf keinen Zeilenumbruch enthalten und darf nicht die Zeichenfolge `-->` enthalten. Er muss mit einem einzelnen Zeilenumbruch enden. Identifikatoren müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z. B. 1, 2, 3).

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

Ein Cue-Timing gibt das Zeitintervall an, in dem der Cue angezeigt wird. Es hat eine Start- und Endzeit, die durch Zeitstempel dargestellt werden. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Cues können sich überschneidende Timings haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) ist `chapters`).

Jedes Cue-Timing enthält fünf Komponenten:

- Ein Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Die Zeichenkette `-->`.
- Mindestens ein Leerzeichen.
- Ein Zeitstempel für die Endzeit, der größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden beiden Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wo die Komponenten wie folgt definiert sind:

- `hh`
  - : Stellt Stunden dar und muss mindestens zwei Ziffern haben. Es kann mehr als zwei Ziffern haben (z. B. `9999:00:00.000`).
- `mm`
  - : Stellt Minuten dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Stellt Sekunden dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Stellt Millisekunden dar und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Beispiele für Cue-Timings:

- Grundlegende Beispiele für Cue-Timings

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Beispiele für sich überschneidende Cue-Timings

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Beispiele für nicht überschneidende Cue-Timings

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue-Einstellungen

Cue-Einstellungen sind optionale Komponenten, die den Cue-Payload-Text über dem Video positionieren. Dazu gehören horizontale und vertikale Positionen. Null oder mehr Cue-Einstellungen können angegeben und in beliebiger Reihenfolge verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden rechts von den Cue-Timings hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen dem Cue-Timing und der ersten Einstellung sowie zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind zwischen Groß- und Kleinschreibung unterschieden; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal und nicht horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`
  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Der Wert kann sein:
    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Cue, wie sie im Video erscheint. Positive Zahlen zählen von oben nach unten und negative Zahlen zählen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. ohne Dezimalstellen) zwischen 0 und 100 einschließlich, die von einem Prozentzeichen (%) gefolgt werden muss.

    | Line        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `line:0`    | oben                   | rechts        | links         |
    | `line:-1`   | unten                  | links         | rechts        |
    | `line:0%`   | oben                   | rechts        | links         |
    | `line:100%` | unten                  | links         | rechts        |

- `position`
  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheinen wird. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheinen wird. Der Wert ist ein Prozentsatz zwischen 0 und 100 einschließlich.

    | Position        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `position:0%`   | links                  | oben          | oben          |
    | `position:100%` | rechts                 | unten         | unten         |

- `size`
  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Sollte `vertical` gesetzt sein, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100 einschließlich.

    | Size        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `size:100%` | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`
  - : Gibt die Ausrichtung des Textes an. Text wird innerhalb des durch die Größe vorgegebenen Platzes ausgerichtet, wenn es gesetzt ist.

    | Align          | `vertical` weggelassen | `vertical:rl`      | `vertical:lr`      |
    | -------------- | ---------------------- | ------------------ | ------------------ |
    | `align:start`  | links                  | oben               | oben               |
    | `align:center` | horizontal zentriert   | vertikal zentriert | vertikal zentriert |
    | `align:end`    | rechts                 | unten              | unten              |

Hier sind einige Beispiele.
Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text auf einem Schild oder Etikett zu überlagern. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
00:00:05.000 --> 00:00:10.000 position:10%,line-left align:left size:31%
00:00:05.000 --> 00:00:10.000 position:90% align:right size:35%
00:00:05.000 --> 00:00:10.000 position:45%,line-right align:center size:90%
```

### Cue-Payload

Der Payload ist der Bereich, in dem der Cue-Inhalt definiert wird, wie etwa der Untertitel- oder geschlossene Untertiteltext.
Er darf Zeilenumbrüche enthalten, aber keine zwei aufeinanderfolgenden Zeilenumbrüche: das würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Ein Cue-Text-Payload darf nicht die Zeichenfolge `-->`, das Ampersand-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) enthalten.
Falls nötig, können Sie stattdessen einen {{Glossary("character_reference", "Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für das Ampersand und `&lt;` für das Kleiner-als-Zeichen verwenden.
Es wird auch empfohlen, die Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.
Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser jede {{Glossary("character_reference", "Zeichenreferenz")}} in Cues, Notizen oder anderem Text erlauben.
Ältere Browserversionen unterstützen möglicherweise nur den folgenden Teilmenge der benannten Zeichenreferenzen:

| Name                          | Zeichen | Escape-Sequenz |
| ----------------------------- | ------- | -------------- |
| Ampersand                     | `&`     | `&amp;`        |
| Weniger-als                   | `<`     | `&lt;`         |
| Größer-als                    | `>`     | `&gt;`         |
| Von-links-nach-rechts-Zeichen | _keine_ | `&lrm;`        |
| Von-rechts-nach-links-Zeichen | _keine_ | `&rlm;`        |
| Geschütztes Leerzeichen       |         | `&nbsp;`       |

### Cue-Payload-Texttags

Eine Reihe von Tags, wie `<b>`, können verwendet werden, um Text innerhalb eines Cues zu markieren und zu gestalten.
Wenn jedoch die WebVTT-Datei in einem {{HTMLElement("track")}}-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) `chapters` ist, können keine Tags verwendet werden.

- Timestamp-Tag
  - : Timestamp-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen.
    Der Timestamp muss größer als der Start-Timestamp des Cues sein, größer als jeder vorherige Timestamp im Cue-Payload, und kleiner als der End-Timestamp des Cues.
    Der _aktive Text_ ist der Text zwischen dem Timestamp und dem nächsten Timestamp oder bis zum Ende des Payloads, wenn kein weiterer Timestamp im Payload vorhanden ist.
    Jeder Text vor dem _aktiven Text_ im Payload ist _vorheriger Text_.
    Jeder Text nach dem _aktiven Text_ ist _zukünftiger Text_.

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

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind und benötigen Start- und End-Tags (z. B. `<b>text</b>`).
Text, der mit diesen Tags markiert ist, kann in [`STYLE` Blöcken](#style-blöcke) mit dem {{cssxref("::cue")}} Pseudo-Element formatiert werden.

- Kursivschrift-Tag (`<i></i>`)
  - : Kursivschrift für den enthaltenen Text.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)
  - : Fett für den enthaltenen Text.

    ```xml
    <b>text</b>
    ```

- Unterstreichungs-Tag (`<u></u>`)
  - : Unterstreichen für den enthaltenen Text.

    ```xml
    <u>text</u>
    ```

- Klassen-Tag (`<c></c>`)
  - : Eine Klasse für den enthaltenen Text hinzufügen, um über CSS ausgewählt zu werden.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)
  - : Wird zusammen mit Ruby-Text-Tags zur Anzeige von [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) verwendet (d.h. kleinen annotativen Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)
  - : Wird zusammen mit Ruby-Tags zur Anzeige von [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) verwendet (d.h. kleinen annotativen Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Stimmen-Tag (`<v></v>`)
  - : Ähnlich wie das Klassen-Tag, auch zur Gestaltung des enthaltenen Textes mit CSS verwendet.

    ```xml
    <v Bob>text</v>
    ```

- Sprach-Tag (`<lang></lang>`)
  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante zugehörig markiert wurde, unter Verwendung des {{Glossary("BCP_47_language_tag", "BCP 47 Language Tag")}} Formats.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen.
Sie sind für diejenigen gedacht, die die Datei lesen, und werden von den Benutzern nicht gesehen.
Zum Beispiel könnten Sie sie verwenden, um Autorenkontaktdetails zu notieren, einen Überblick über Ihre Struktur zu geben oder Platzhalter für noch zu schreibende Cues hinzuzufügen.

Sie können überall in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke können Zeilenumbrüche enthalten, dürfen jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche enthalten: das würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Ein Kommentar darf nicht die Zeichenfolge `-->`, das Ampersand-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) enthalten.
Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie `&amp;` für das Ampersand und `&lt;` für das Kleiner-als-Zeichen verwenden.
Es wird auch empfohlen, die Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Die Zeichenkette `NOTE`.
- Ein Leerzeichen oder ein Zeilenumbruch.
- Null oder mehr Zeichen außer denen, die oben angegeben wurden.

Hier einige Beispiele:

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

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Stilgebung von Cues innerhalb einer WebVTT-Datei einzubetten.
Beachten Sie, dass diese verwendet werden, um das Erscheinungsbild und die Größe der Cues zu gestalten, jedoch nicht deren Position und Layout, die durch die [Cue-Einstellungen](#cue-einstellungen) kontrolliert werden.

> [!NOTE]
> WebVTT-Cues können auch von CSS-Stilen übereinstimmend eingesetzt werden, die vom zugehörigen [Dokument, das das Video/Audio-Element einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), geladen werden.

`STYLE`-Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Die Zeichenkette `STYLE` gefolgt von null oder mehr Leerzeichen oder Tab-Zeichen, und danach ein Zeilenumbruch.
- Eine Zeichenkette, die die CSS-Stile zum Zuordnen und Anwenden mithilfe des {{cssxref("::cue")}} Pseudo-Elements definiert.

Der Block darf nicht die Zeichenkette `-->` enthalten.
Er kann Zeilenumbrüche enthalten, darf jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche enthalten: Das würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken ist unten gezeigt.
Diese verwendet {{cssxref("::cue")}} um Textfarbe auf alle Cue-Texte anzuwenden, und eine andere Textfarbe nur auf Text, der mit `<b></b>`-Tags markiert ist.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle in [Mehr Cue-Stilierungsbeispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in _WebVTT API_ demonstrieren.

### Alle Cue-Payload-Texte abgleichen

Alle Cue-Payload-Texte unter Verwendung von {{cssxref("::cue")}} abgleichen.

Zum Beispiel würde der folgende `STYLE`-Block alle Cue-Texte abgleichen und sie gelb färben.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Einen Tagtyp abgleichen

Cue-Texte, die mit bestimmten [Cue-Payload-Texttags](#cue-payload-texttags), wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang`, markiert sind, abgleichen, indem das Tag in {{cssxref("::cue()")}} als Typselektor angegeben wird.

Zum Beispiel würde der folgende Block Cue-Payload-Texte, die mit `lang` markiert sind, gelb markieren und jede der anderen Tags rot.

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

Alle Tags mit einem Klassenselektor in `::cue()` abgleichen.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde alle Texte danach abgleichen, da alle Tags die Klasse `myclass` haben.

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

Um ein bestimmtes Tag und Klasse auszuwählen, müssen Sie beide in `::cue()` angeben:

```css
::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Cue-Payload-Texte, die mit einem bestimmten Tag und Attribut markiert sind, können mit einem Attributselektor abgeglichen werden.

Betrachten Sie zum Beispiel die folgende WebVTT-Datei, die Texte enthält, die mit den `v` und `lang` [Cue-Payload-Texttags](#cue-payload-texttags) markiert sind, wobei Attribute verwendet werden, um die bestimmte Stimme ("Salame") und Sprachen anzugeben.

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

### Mit Pseudo-Klassen abgleichen

Das vorherige Beispiel hat Texte für eine bestimmte Sprache unter Verwendung des Attributabgleichs gestaltet.
Sie können auch Sprachen mithilfe der `:lang()` Pseudoklasse abgleichen, wie das folgende `STYLE`-Block zeigt.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Ähnlich können Sie mit den Pseudoklassen `:past` und `:future` übereinstimmen, um eine Karaoke-ähnliche Erfahrung zu schaffen.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudoklassen wie `link`, `nth-last-child`, und `nth-child` sollten auf ähnliche Weise funktionieren.

### Eine Cue-ID abgleichen

Mit einer bestimmten Cue-`id` abgleichen, indem Sie die `id` innerhalb von {{cssxref("::cue()")}} angeben.

> [!NOTE]
> Zum Zeitpunkt des Schreibens scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Cue mit der Kennung `cue1` in Grün gestalten.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT-CSS auf die gleiche Weise wie in HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen in einem Cue-Identifikator entkommen werden:

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

- Die CSS [::cue und ::cue()](/de/docs/Web/CSS/::cue) Pseudo-Elemente
