---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("WebVTT")}}

<!-- Es muss noch Informationen über den Region-Block hinzugefügt werden -->

Das **Web Video Text Tracks Format** (**WebVTT**) ist ein Klartext-Dateiformat zur Anzeige von zeitlich abgestimmten Textspuren, die mit Inhalten in {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen synchronisiert sind. Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Textüberlagerungen zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verbundenen WebVTT-Dateien werden mit dem {{HTMLElement("track")}}-Element hinzugefügt — siehe [Anzeige von in einer Datei definiertem VTT-Inhalt](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file). Ein Medienelement kann mit einer Anzahl von Dateien verbunden sein, die jeweils verschiedene Arten von zeitgesteuerten Daten repräsentieren, wie etwa geschlossene Untertitel, Untertitel oder Kapitelüberschriften, die in verschiedene Lokalisierungen übersetzt wurden.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Übersicht

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateiendung `.vtt`. Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein.

Die Struktur eines WebVTT besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, bestehend aus einem optionalen Byte-Order-Mark (BOM) — dem String `WEBVTT` — gefolgt von einem optionalen Texthintergrund, der durch ein oder mehrere Leerzeichen oder Tabulatoren getrennt ist (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Ein oder mehrere leere Zeilen, die jeweils zwei aufeinanderfolgende Zeilenumbrüche entsprechen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, getrennt durch ein oder mehrere leere Zeilen.
- Null oder mehr Eingabeaufforderungen oder `NOTE`-Blöcke, getrennt durch ein oder mehrere leere Zeilen.

Nachfolgend wird eine einfache WebVTT-Datei gezeigt, die den `WEBVTT`-String (aber keinen Header-Text), einen NOTE-Block und zwei Hinweise enthält:

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

Die folgenden Abschnitte erklären die Teile der Datei, einschließlich derer, die im obigen Beispiel nicht verwendet werden.

## WebVTT-Header

WebVTT-Dateien beginnen mit einem Header-Block, der Folgendes enthält:

- Ein optionales Byte-Order-Mark (BOM), das Unicode-Zeichen `U+FEFF`.
- Der String `WEBVTT`.
- Ein optionaler Texthintergrund rechts von `WEBVTT`.

  - Nach `WEBVTT` muss mindestens ein Leerzeichen eingefügt werden.
  - Sie könnten diesen Text verwenden, um der Datei eine Beschreibung hinzuzufügen.
  - Sie dürfen alles im Texthintergrund verwenden, außer Zeilenumbrüche oder den String `-->`.

Der `WEBVTT`-String ist der einzige erforderliche Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei folgendermaßen aussehen würde:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text. Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulator getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Eingabeaufforderungen

Eine Eingabeaufforderung definiert eine einzelne Beschriftung, einen Untertitel oder einen anderen Textblock, der über einem bestimmten Zeitintervall angezeigt werden soll. Eingabeaufforderungen müssen nach dem Header und allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jede Eingabeaufforderung besteht aus drei oder mehr Zeilen:

- Eine optionale Eingabeaufforderungskennung, gefolgt von einem Zeilenumbruch.
- Eingabeaufforderungs-Timings, die den Zeitraum anzeigen, in dem der Nutzlasttext angezeigt werden soll. Diese werden optional von Eingabeaufforderungs-Einstellungen gefolgt, wobei mindestens ein Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung vorhanden sein muss, gefolgt von einem einzelnen Zeilenumbruch.
- Der Eingabeaufforderungs-Nutzlasttext, der mehrere Zeilen umfassen kann und durch eine Leerzeile beendet wird.

Hier ist ein Beispiel für eine einfache Eingabeaufforderung. Die erste Zeile gibt den Start- und Endzeitpunkt der Anzeige der Eingabeaufforderung an, getrennt durch den String `-->`. Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Die nächste Eingabeaufforderung ist etwas komplizierter. Sie beginnt mit einer Eingabeaufforderungskennung — `1 - Title Crawl` — die verwendet werden kann, um die Eingabeaufforderung in JavaScript und CSS zu referenzieren. Es hat auch Eingabeaufforderungs-Einstellungen nach den Eingabeaufforderungs-Timings, um die Position der Eingabeaufforderung festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Nutzlasttext respektiert, was es Ihnen ermöglicht, Aufzählungslisten mit Bindestrich-Zeichen (`-`) wie gezeigt zu erstellen. In der Regel sollten Sie diese Unterbrechungen nur dann einfügen, wenn dies erforderlich ist, da der Browser den Text entsprechend umbricht.

Es ist wichtig, innerhalb einer Eingabeaufforderung keine "extra" Leerzeilen zu verwenden, beispielsweise zwischen der Timings-Zeile und der Nutzlast der Eingabeaufforderung oder innerhalb der Nutzlast. Denn eine Leerzeile beendet die aktuelle Eingabeaufforderung.

Jeder Teil der Eingabeaufforderung wird in den folgenden Abschnitten ausführlicher erklärt.

### Eingabeaufforderungskennung

Die Kennung ist ein Name, der die Eingabeaufforderung identifiziert. Sie kann verwendet werden, um die Eingabeaufforderung aus JavaScript oder CSS zu referenzieren. Sie darf keinen Zeilenumbruch enthalten und kann nicht den String `-->` enthalten. Sie muss mit einer einzelnen neuen Zeile enden. Kennungen müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z. B. 1, 2, 3).

Das folgende Beispiel zeigt eine Datei mit mehreren Eingabeaufforderungen, die Kennungen enthalten:

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

### Eingabeaufforderungs-Timings

Ein Eingabeaufforderungs-Timing gibt das Zeitintervall an, in dem die Eingabeaufforderung angezeigt wird. Es hat eine Start- und Endzeit, dargestellt durch Zeitstempel. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Eingabeaufforderungen dürfen sich überschneidende Timings haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) ist `chapters`).

Jedes Eingabeaufforderungs-Timing besteht aus fünf Komponenten:

- Einem Zeitstempel für die Startzeit.
- Mindestens einem Leerzeichen.
- Dem String `-->`.
- Mindestens einem Leerzeichen.
- Einem Zeitstempel für die Endzeit, die größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden zwei Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Dabei sind die Komponenten wie folgt definiert:

- `hh`
  - : Steht für Stunden und muss mindestens zwei Ziffern haben. Es kann größer als zwei Ziffern sein (z. B. `9999:00:00.000`).
- `mm`
  - : Steht für Minuten und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Steht für Sekunden und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Steht für Millisekunden und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Beispiele für Eingabeaufforderungs-Timings:

- Grundlegende Eingabeaufforderungs-Timings:

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Beispiele für sich überschneidende Eingabeaufforderungs-Timings:

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Beispiele für nicht überlappende Eingabeaufforderungs-Timings:

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Eingabeaufforderungs-Einstellungen

Eingabeaufforderungs-Einstellungen sind optionale Komponenten, die den Nutzlasttext der Eingabeaufforderung über dem Video platzieren. Dazu gehören horizontale und vertikale Positionen. Null oder mehr Eingabeaufforderungs-Einstellungen können angegeben und in beliebiger Reihenfolge verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Eingabeaufforderungs-Einstellungen werden rechts von den Eingabeaufforderungs-Timings hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen dem Eingabeaufforderungs-Timing und der ersten Einstellung sowie zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind case-sensitive; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Eingabeaufforderungs-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal anstelle von horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Der Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Zeile der Eingabeaufforderung, wie sie im Video erscheint. Positive Zahlen werden von oben nach unten gezählt, negative Zahlen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. keine Dezimalstellen) zwischen 0 und 100 einschließlich, gefolgt von einem Prozentzeichen (%).

    | Line        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `line:0`    | oben                   | rechts        | links         |
    | `line:-1`   | unten                  | links         | rechts        |
    | `line:0%`   | oben                   | rechts        | links         |
    | `line:100%` | unten                  | links         | rechts        |

- `position`

  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheint. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheint. Der Wert ist ein Prozentsatz zwischen 0 und 100 einschließlich.

    | Position        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `position:0%`   | links                  | oben          | oben          |
    | `position:100%` | rechts                 | unten         | unten         |

- `size`

  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100 einschließlich.

    | Größe       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `size:100%` | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`

  - : Gibt die Ausrichtung des Textes an. Der Text wird innerhalb des durch die Größeneinstellung der Eingabeaufforderung gegebenen Bereichs ausgerichtet, wenn diese festgelegt ist.

    | Ausrichtung    | `vertical` weggelassen | `vertical:rl`      | `vertical:lr`      |
    | -------------- | ---------------------- | ------------------ | ------------------ |
    | `align:start`  | links                  | oben               | oben               |
    | `align:center` | horizontal zentriert   | vertikal zentriert | vertikal zentriert |
    | `align:end`    | rechts                 | unten              | unten              |

Hier sind einige Beispiele. Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text auf ein Schild oder Etikett zu überblenden. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
00:00:05.000 --> 00:00:10.000 position:10%,line-left align:left size:31%
00:00:05.000 --> 00:00:10.000 position:90% align:right size:35%
00:00:05.000 --> 00:00:10.000 position:45%,line-right align:center size:90%
```

### Eingabeaufforderungs-Nutzlast

Die Nutzlast ist der Ort, an dem der Inhalt der Eingabeaufforderung definiert ist, z. B. der Untertitel oder geschlossene Untertiteltext. Sie kann Zeilenumbrüche enthalten, darf jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche enthalten: Dies würde eine Leerzeile erzeugen, was das Ende des Blocks anzeigt.

Eine Eingabeaufforderungs-Textnutzlast darf den String `-->`, das Kaufmannsund (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten. Bei Bedarf können Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für das Kaufmannsund und `&lt;` für Kleiner-als verwenden. Es wird auch empfohlen, die Größer-als-Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden. Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser jede {{Glossary("character_reference", "Zeichenreferenz")}} in Eingaben, Notizen oder anderem Text zulassen. Ältere Browserversionen unterstützen möglicherweise nur das folgende Untermenge von benannten Zeichenreferenzen:

| Name                    | Zeichen | Escape-Sequenz |
| ----------------------- | ------- | -------------- |
| Ampersand               | `&`     | `&amp;`        |
| Kleiner-als             | `<`     | `&lt;`         |
| Größer-als              | `>`     | `&gt;`         |
| Links-nach-rechts-Marke | _keine_ | `&lrm;`        |
| Rechts-nach-links-Marke | _keine_ | `&rlm;`        |
| Geschütztes Leerzeichen |         | `&nbsp;`       |

### Eingabeaufforderungs-Texttags

Eine Anzahl von Tags, wie `<b>`, kann verwendet werden, um Text innerhalb einer Eingabeaufforderung zu markieren und zu stylen. Ist die WebVTT-Datei jedoch in einem {{HTMLElement("track")}}-Element verwendet, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) `chapters` ist, können keine Tags verwendet werden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen. Der Zeitstempel muss größer als der Startzeitstempel der Eingabeaufforderung sein, größer als ein vorheriger Zeitstempel in der Eingabeaufforderungs-Nutzlast und kleiner als der Endzeitstempel der Eingabeaufforderung. Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende der Nutzlast, wenn es keinen anderen Zeitstempel in der Nutzlast gibt. Jeder Text vor dem _aktiven Text_ in der Nutzlast ist _vorheriger Text_. Jeder Text nach dem _aktiven Text_ ist _zukünftiger Text_.

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

Die folgenden Tags sind die in einer Eingabeaufforderung erlaubten HTML-Tags und erfordern Öffnungs- und Schließtags (z. B. `<b>text</b>`). Mit diesen Tags markierter Text kann in [`STYLE`-Blöcken](#style-blöcke) mit dem {{cssxref("::cue")}}-Pseudo-Element formatiert werden.

- Kursiv-Tag (`<i></i>`)

  - : Den enthaltenen Text kursiv gestalten.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)

  - : Den enthaltenen Text fett formatieren.

    ```xml
    <b>text</b>
    ```

- Unterstrichen-Tag (`<u></u>`)

  - : Den enthaltenen Text unterstreichen.

    ```xml
    <u>text</u>
    ```

- Klassen-Tag (`<c></c>`)

  - : Eine Klasse hinzufügen, um den enthaltenen Text mittels CSS auszuwählen.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)

  - : Wird zusammen mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d.h. kleine annotative Zeichen über anderen Zeichen) darzustellen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)

  - : Wird zusammen mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) darzustellen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Voice-Tag (`<v></v>`)

  - : Ähnlich wie das Klassentag, auch verwendet, um den enthaltenen Text mit CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Lang-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als zugehörig zu einer bestimmten Sprache oder Sprachvariante markiert wurde, gemäß dem in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} definierten Format.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen. Sie sind für diejenigen gedacht, die die Datei lesen und werden nicht von den Benutzern gesehen. Beispielsweise könnten Sie sie verwenden, um Autorenkontaktinformationen aufzuzeichnen, eine Übersicht über Ihre Struktur bereitzustellen oder Platzhalter für Eingabeaufforderungen hinzuzufügen, die noch geschrieben werden müssen.

Sie können an beliebiger Stelle in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke dürfen Zeilenumbrüche enthalten, dürfen jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche enthalten: Dies würde eine Leerzeile erzeugen, was das Ende des Blocks anzeigt.

Ein Kommentar darf den String `-->`, das Kaufmannsund (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten. Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie `&amp;` für das Kaufmannsund und `&lt;` für Kleiner-als verwenden. Es wird auch empfohlen, die Größer-als-Escape-Sequenz (`&gt;`) anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Der String `NOTE`.
- Ein Leerzeichen oder eine neue Zeile.
- Null oder mehr Zeichen außer den oben genannten.

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

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styling von Eingabeaufforderungen innerhalb einer WebVTT-Datei einzubetten. Beachten Sie, dass diese verwendet werden, um das Erscheinungsbild und die Größe der Eingabeaufforderungen zu gestalten, jedoch nicht deren Position und Layout, die durch die [Eingabeaufforderungs-Einstellungen](#eingabeaufforderungs-einstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Eingabeaufforderungen können auch durch CSS-Styles abgestimmt werden, die vom zugehörigen [eingebetteten Dokument des Video-/Audioelements](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) geladen werden.

`STYLE`-Blöcke müssen vor allen Eingabeaufforderungs-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Der String `STYLE` gefolgt von null oder mehr Leerzeichen oder Tabulatorzeichen und dann einem Zeilenumbruch.
- Ein String, der die CSS-Styles zum Übereinstimmen und Anwenden definiert, unter Verwendung des {{cssxref("::cue")}}-Pseudo-Elements.

Der Block darf den String `-->` nicht enthalten. Er kann Zeilenumbrüche enthalten, darf jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche enthalten: Dies würde eine Leerzeile erzeugen, was das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten gezeigt. Diese verwendet {{cssxref("::cue")}}, um eine Textfarbe auf allen Eingabeaufforderungstext anzuwenden, und eine andere Textfarbe nur auf Text, der mit `<b></b>`-Tags markiert ist.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle in [Mehr Eingabeaufforderungs-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) im _WebVTT API_ demonstrieren.

### Alle Eingabeaufforderungs-Nutzlasttexte abgleichen

Abgleichen aller Eingabeaufforderungs-Nutzlasttexte mit {{cssxref("::cue")}}.

Beispielsweise würde der folgende `STYLE`-Block alle Eingabeaufforderungstexte abgleichen und gelb färben.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Ein Tag-Typ abgleichen

Eingabeaufforderungstext, der mit bestimmten [Eingabeaufforderungs-Nutzlasttext-Tags](#eingabeaufforderungs-texttags) markiert ist, wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang`, durch Angabe des Tags in {{cssxref("::cue()")}} als Typselektor abgleichen.

Beispielsweise würde der folgende Block den Eingabeaufforderungs-Nutzlasttext, der mit `lang` markiert ist, als gelb, und jeden der anderen Tags als rot abgleichen.

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

Der `STYLE`-Block in der folgenden WebVTT-Datei würde den gesamten darauf folgenden Text abgleichen, da alle Tags die Klasse `myclass` haben.

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

Um ein bestimmtes Tag und eine Klasse auszuwählen, müssen Sie beide in `::cue()` spezifizieren:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Eingabeaufforderungs-Nutzlasttext, der mit einem bestimmten Tag und Attribut markiert ist, kann mit einem Attributselektor abgeglichen werden.

Beispielsweise betrachten Sie die folgende WebVTT-Datei, die Text hat, der mit den `v` und `lang` [Eingabeaufforderungs-Nutzlasttext-Tags](#eingabeaufforderungs-texttags) markiert ist, und Attribute verwendet, um die bestimmte Stimme ("Salame") und die Sprachen anzugeben.

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

Das vorherige Beispiel stylt Text für eine bestimmte Sprache mit Attributabgleich. Sie können auch Sprachen mit der `:lang()`-Pseudo-Klasse abgleichen, wie im folgenden `STYLE`-Block demonstriert.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Sie können auch mit den Pseudo-Klassen `:past` und `:future` abgleichen, um ein Karaoke-ähnliches Erlebnis zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudo-Klassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Eine Eingabeaufforderungskennung abgleichen

Mit einer bestimmten Eingabeaufforderungskennung abgleichen, indem Sie die Kennung innerhalb von {{cssxref("::cue()")}} angeben.

> [!NOTE]
> Zum Zeitpunkt des Schreibens scheint dies von keinem der Hauptbrowser unterstützt zu werden.

Beispielsweise sollte die folgende WebVTT-Datei die Eingabeaufforderung mit der Kennung `cue1` in Grün stylen.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen im WebVTT-CSS auf die gleiche Weise wie HTML-Seiten verwendet werden. Das untenstehende Beispiel zeigt, wie man Leerzeichen in einer Eingabeaufforderungskennung umgeht:

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

- Die CSS-[`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudo-Elemente
