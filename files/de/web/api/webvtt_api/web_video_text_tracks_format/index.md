---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("WebVTT")}}

<!-- Ein Abschnitt zu Regionsblöcken muss hinzugefügt werden -->

**Web Video Text Tracks Format** (**WebVTT**) ist ein einfaches Textdateiformat zur Darstellung von zeitlich abgestimmten Textspuren, die mit Inhalten in `video` und `audio`-Elementen synchronisiert sind.
Diese können beispielsweise verwendet werden, um Untertitel und Textüberlagerungen zu einem `video` hinzuzufügen.

Die mit einem Medienelement verknüpften WebVTT-Dateien werden mit dem `track`-Element hinzugefügt — siehe [Anzeigen von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit einer Reihe von Dateien verknüpft sein, die jeweils unterschiedliche Arten von zeitlich abgestimmten Daten darstellen, wie geschlossene Untertitel, Bildunterschriften oder Kapitelüberschriften in verschiedenen Sprachen.

> [!NOTE]
> WebVTT-Inhalte können auch programmatisch mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Überblick

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateierweiterung `.vtt`.
Der Inhalt muss mit [UTF-8](/de/docs/Glossary/UTF-8) kodiert werden.

Die Struktur einer WebVTT-Datei besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, bestehend aus einem optionalen Byte-Order-Marke (BOM) — dem String `WEBVTT` — gefolgt von einem optionalen Textheader, der durch ein oder mehrere Leer- oder Tabulatorzeichen getrennt wird (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere Leerzeilen, die jeweils zwei aufeinanderfolgende Newlines entsprechen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, getrennt durch eine oder mehrere Leerzeilen.
- Null oder mehr Cue- oder `NOTE`-Blöcke, getrennt durch eine oder mehrere Leerzeilen.

Eine einfache WebVTT-Datei, die den String `WEBVTT` (aber keinen Headertext), einen NOTE-Block und zwei Cues enthält, wird unten gezeigt:

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

Die folgenden Abschnitte erklären die Teile der Datei, einschließlich derjenigen, die im obigen Beispiel nicht verwendet werden.

## WebVTT-Header

WebVTT-Dateien beginnen mit einem Header-Block, der Folgendes enthält:

- Eine optionale Byte-Order-Marke (BOM), das Unicode-Zeichen `U+FEFF`.
- Den String `WEBVTT`.
- Einen optionalen Textheader rechts neben `WEBVTT`.

  - Nach `WEBVTT` muss mindestens ein Leerzeichen vorhanden sein.
  - Mit diesem Header könnte man der Datei eine Beschreibung hinzufügen.
  - Sie dürfen im Textheader alles verwenden, außer Newlines oder dem String `-->`.

Der String `WEBVTT` ist der einzige erforderliche Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei so aussehen würde:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder einen Tabulator getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Cues

Ein Cue definiert einen einzelnen Titel, Untertitel oder einen anderen Textblock, der über ein bestimmtes Zeitintervall angezeigt wird.
Cues müssen nach dem Header und etwaigen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Eine optionale Cue-Kennung gefolgt von einer neuen Zeile.
- Cue-Timings, die den Zeitraum angeben, in dem der Nutztext angezeigt werden soll. Diese werden optional von Cue-Einstellungen gefolgt, mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen den einzelnen Einstellungen, gefolgt von einer einzelnen neuen Zeile.
- Der Nutztext des Cues, der sich über mehrere Zeilen erstrecken kann und durch eine Leerzeile terminiert wird.

Hier ist ein Beispiel für einen einfachen Cue.
Die erste Zeile gibt die Anzeige-Start- und Endzeiten des Cues an, getrennt durch den String `-->`.
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Cue ist etwas komplizierter.
Er beginnt mit einer Cue-Kennung — `1 - Title Crawl` — die verwendet werden kann, um den Cue in JavaScript und CSS zu referenzieren.
Er hat auch Cue-Einstellungen nach den Timings, um die Position des Cues einzustellen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Nutztext respektiert, was es Ihnen ermöglicht, mithilfe von Bindestrichen (`-`) Aufzählungslisten zu erstellen.
Generell sollten Sie diese Umbrüche nur bei Bedarf einfügen, da der Browser den Text entsprechend umbricht.

Es ist wichtig, innerhalb eines Cues keine "zusätzlichen" Leerzeilen zu verwenden, beispielsweise zwischen der Timings-Zeile und dem Cue-Nutztext oder innerhalb des Nutztextes.
Dies liegt daran, dass eine Leerzeile den aktuellen Cue beendet.

Jeder Teil des Cues wird in den folgenden Abschnitten ausführlicher erläutert.

### Cue-Kennung

Die Kennung ist ein Name, der den Cue identifiziert. Sie kann verwendet werden, um den Cue aus JavaScript oder CSS zu referenzieren. Sie darf keine neue Zeile enthalten und nicht den String `-->`. Sie muss mit einer einzelnen neuen Zeile enden. Kennungen müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z. B. 1, 2, 3).

Das folgende Beispiel zeigt eine Datei mit mehreren Cues, die Kennungen enthalten:

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

Ein Cue-Timing gibt das Zeitintervall an, in dem der Cue angezeigt wird. Es hat eine Start- und Endzeit, die durch Zeitstempel repräsentiert werden. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Cues können sich überlappende Timings haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet (`track` [`kind`](/de/docs/Web/HTML/Element/track#kind) ist `chapters`).

Jedes Cue-Timing enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Den String `-->`.
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, der größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden beiden Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Dabei sind die Komponenten wie folgt definiert:

- `hh`
  - : Repräsentiert Stunden und muss mindestens zwei Ziffern haben. Es kann mehr als zwei Ziffern haben (z. B. `9999:00:00.000`).
- `mm`
  - : Repräsentiert Minuten und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Repräsentiert Sekunden und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Repräsentiert Millisekunden und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Beispiele für Cue-Timings:

- Grundlegende Cue-Timing-Beispiele

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Beispiele für überlappende Cue-Timings

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Beispiele für nicht überlappende Cue-Timings

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue-Einstellungen

Cue-Einstellungen sind optionale Komponenten, die den Nutztext des Cues über dem Video positionieren. Dies schließt horizontale und vertikale Positionen ein. Null oder mehr Cue-Einstellungen können spezifiziert und in beliebiger Reihenfolge verwendet werden, sofern jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden rechts von den Cue-Timings hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen der Cue-Timing und der ersten Einstellung sowie zwischen den einzelnen Einstellungen geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind case-sensitive; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal anstelle von horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Der Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Cues, wie es im Video angezeigt wird. Positive Zahlen werden von oben nach unten gezählt und negative Zahlen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d. h. keine Dezimalstellen) zwischen 0 und 100 inklusive, die von einem Prozentzeichen (%) gefolgt sein muss.

    | Linie       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `line:0`    | oben                   | rechts        | links         |
    | `line:-1`   | unten                  | links         | rechts        |
    | `line:0%`   | oben                   | rechts        | links         |
    | `line:100%` | unten                  | links         | rechts        |

- `position`

  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheint. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheint. Der Wert ist ein Prozentsatz zwischen 0 und 100 inklusive.

    | Position        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `position:0%`   | links                  | oben          | oben          |
    | `position:100%` | rechts                 | unten         | unten         |

- `size`

  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100 inklusive.

    | Größe       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `size:100%` | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`

  - : Gibt die Ausrichtung des Textes an. Der Text wird innerhalb des durch die Size-Cue-Einstellung gegebenen Bereichs ausgerichtet, falls gesetzt.

    | Ausrichten     | `vertical` weggelassen | `vertical:rl`      | `vertical:lr`      |
    | -------------- | ---------------------- | ------------------ | ------------------ |
    | `align:start`  | links                  | oben               | oben               |
    | `align:center` | zentriert horizontal   | zentriert vertikal | zentriert vertikal |
    | `align:end`    | rechts                 | unten              | unten              |

Hier sind einige Beispiele.
Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text auf einem Schild oder Etikett zu überlagern. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

![](9-845dc7d.md)

### Cue-Nutztext

Der Nutztext ist der Bereich, in dem der Inhalt des Cues definiert ist, wie zum Beispiel der Untertitel oder der geschlossene Untertiteltext.
Er kann Zeilenumbrüche enthalten, darf jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche enthalten: dies würde eine Leerzeile erstellen, die das Ende des Blocks anzeigt.

Ein Cue-Text-Nutzinhalt darf nicht den String `-->`, das kaufmännische Und-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) enthalten.
Falls erforderlich, können stattdessen ein [Zeichenreferenz](/de/docs/Glossary/character_reference) wie die benannte Zeichenreferenz `&amp;` für das kaufmännische Und und `&lt;` für Kleiner-als verwendet werden.
Es wird außerdem empfohlen, die Größer-als-Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.
Falls Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser jede [Zeichenreferenz](/de/docs/Glossary/character_reference) in Cues, Notizen oder anderem Text erlauben.
Ältere Browserversionen unterstützen möglicherweise nur den folgenden Unterabschnitt benannter Zeichenreferenzen:

| Name                         | Zeichen | Escape-Sequenz |
| ---------------------------- | ------- | -------------- |
| Ampersand                    | `&`     | `&amp;`        |
| Kleiner-als                  | `<`     | `&lt;`         |
| Größer-als                   | `>`     | `&gt;`         |
| Links-nach-rechts-Markierung | _kein_  | `&lrm;`        |
| Rechts-nach-links-Markierung | _kein_  | `&rlm;`        |
| Geschütztes Leerzeichen      |         | `&nbsp;`       |

### Cue-Nutztext-Tags

Eine Reihe von Tags, wie `<b>`, kann verwendet werden, um Text innerhalb eines Cues zu markieren und zu formatieren.
Wenn allerdings die WebVTT-Datei in einem `track`-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Element/track#kind) `chapters` ist, können Sie keine Tags verwenden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen.
    Der Zeitstempel muss größer als der Startzeitstempel des Cues, größer als alle vorherigen Zeitstempel im Nutzinhalt des Cues und kleiner als der Endzeitstempel des Cues sein.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende des Nutzinhalts, falls kein weiterer Zeitstempel im Nutzinhalt vorhanden ist.
    Jeglicher Text vor dem _aktiven Text_ im Nutzinhalt ist _vorheriger Text_.
    Jeglicher Text über den _aktiven Text_ hinaus ist _zukünftiger Text_.

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

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind und erfordern öffnende und schließende Tags (z. B. `<b>text</b>`).
Text, der mit diesen Tags markiert ist, kann in [`STYLE`-Blöcken](#style-blöcke) mithilfe des {{cssxref("::cue")}}-Pseudo-Elements formatiert werden.

- Kursivsprach-Tag (`<i></i>`)

  - : Kursive Darstellung des enthaltenen Textes.

    ```xml
    <i>text</i>
    ```

- Fettsprach-Tag (`<b></b>`)

  - : Fettdarstellung des enthaltenen Textes.

    ```xml
    <b>text</b>
    ```

- Unterstrichsprach-Tag (`<u></u>`)

  - : Unterstreicht den enthaltenen Text.

    ```xml
    <u>text</u>
    ```

- Klassensprache-Tag (`<c></c>`)

  - : Fügt dem enthaltenen Text eine Klasse zur Auswahl über CSS hinzu.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)

  - : Wird mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://de.wikipedia.org/wiki/Ruby-Zeichen) (d. h. kleine annotative Zeichen oben auf anderen Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)

  - : Wird mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://de.wikipedia.org/wiki/Ruby-Zeichen) (d. h. kleine annotative Zeichen oben auf anderen Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Sprachstil-Tag (`<v></v>`)

  - : Ähnlich wie das Klassensprache-Tag, wird auch verwendet, um den enthaltenen Text mit CSS zu gestalten.

    ```xml
    <v Bob>text</v>
    ```

- Sprachstempel-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als einer bestimmten Sprache oder Sprachvariante zugehörig markiert wurde, unter Verwendung des in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definierten Formats.

    ```xml
    <lang en-GB>Engish text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen.
Sie sind für diejenigen gedacht, die die Datei lesen, und werden von Benutzern nicht gesehen.
Beispielsweise könnten Sie sie verwenden, um Kontaktdetails des Autors aufzuzeichnen, eine Übersicht über Ihre Struktur bereitzustellen oder Platzhalter für Cues hinzuzufügen, die noch geschrieben werden müssen.

Sie können überall in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke können Zeilenumbrüche enthalten, jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche: Dies würde eine Leerzeile erstellen, die das Ende des Blocks anzeigt.

Ein Kommentar darf nicht den String `-->` enthalten, ebenso wenig wie das Zeichen `&` oder das Zeichen `<`.
Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine [Zeichenreferenz](/de/docs/Glossary/character_reference) wie `&amp;` für das kaufmännische Und-Zeichen und `&lt;` für kleiner als verwenden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz (`&gt;`) anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrungen mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Der String `NOTE`.
- Ein Leerzeichen oder eine neue Zeile.
- Null oder mehr Zeichen, die nicht zu den oben genannten gehören.

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

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styling von Cues innerhalb einer WebVTT-Datei einzubetten.
Beachten Sie, dass diese verwendet werden, um das Aussehen und die Größe der Cues zu gestalten, nicht jedoch deren Position und Layout, welche durch die [Cue-Einstellungen](#cue-einstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Cues können auch durch CSS-Stile, die vom zugehörigen [Dokument, das das Video-/Audioelement einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), geladen werden, übereinstimmen.

`STYLE`-Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Die Zeichenfolge `STYLE` gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann einer neuen Zeile.
- Eine Zeichenfolge, die die CSS-Stile definiert, um sie zu matchen und mit dem {{cssxref("::cue")}}-Pseudo-Element anzuwenden.

Der Block darf nicht die Zeichenfolge `-->` enthalten.
Er kann Zeilenumbrüche enthalten, jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche: Diese würden eine Leerzeile erstellen, die das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten gezeigt.
Dies verwendet {{cssxref("::cue")}}, um eine Textfarbe auf alle Cue-Texte anzuwenden, und eine andere Textfarbe nur auf Text, der mit `<b></b>`-Tags markiert ist.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle in [Weitere Cue-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in der _WebVTT-API_ demonstrieren.

### Übereinstimmen mit allen Cue-Nutzinhalt-Texten

Übereinstimmen mit allen Cue-Nutzinhalt-Texten unter Verwendung von {{cssxref("::cue")}}.

Zum Beispiel würde der folgende `STYLE`-Block mit allen Cue-Texten übereinstimmen und ihn gelb färben.

```plain
STYLE
cue {
  color: yellow;
}
```

### Übereinstimmen mit einem Tag-Typ

Übereinstimmen mit Cue-Text, der mit bestimmten [Cue-Nutztext-Tags](#cue-nutztext-tags) markiert ist, wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang`, indem der Tag in {{cssxref("::cue()")}} als Typ-Selektor spezifiziert wird.

Zum Beispiel würde der folgende Block mit Cue-Nutzinhalt-Texten übereinstimmen, die mit `lang` als gelb markiert sind, und jeden der anderen Tags als rot.

```plain
STYLE
cue(c),
cue(i),
cue(b),
cue(u),
cue(ruby),
cue(rt),
cue(v) {
  color: red;
}
cue(lang) {
  color: yellow;
}
```

### Übereinstimmen mit einem Klassen-Selektor

Übereinstimmen mit allen Tags, die mit einem Klassen-Selektor in `::cue()` markiert sind.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde mit dem gesamten Text danach übereinstimmen, da alle Tags die Klasse `myclass` haben.

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

Um ein bestimmtes Tag und eine Klasse auszuwählen, müssen Sie beides in `::cue()` angeben:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Übereinstimmen mit einem Attribut

Cue-Nutzinhalt-Text, der mit einem bestimmten Tag und einem bestimmten Attribut markiert ist, kann mithilfe eines Attribut-Selektors abgeglichen werden.

Zum Beispiel, betrachten Sie die folgende WebVTT-Datei, die Text verwendet, der mit den `v` und `lang` [Cue-Nutztext-Tags](#cue-nutztext-tags) markiert ist, und Attribute verwendet, um die bestimmte Stimme ("Salame") und Sprachen anzugeben.

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

### Übereinstimmen mit Pseudoklassen

Das vorherige Beispiel hat Text für eine bestimmte Sprache mithilfe von Attributübereinstimmung gestaltet.
Sie können auch Sprachen mithilfe der `:lang()`-Pseudo-Klasse vergleichen, wie es durch den `STYLE`-Block unten demonstriert wird.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Sie können auch mit den Pseudoklassen `:past` und `:future` übereinstimmen, um eine Karaoke-ähnliche Erfahrung zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudoklassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Übereinstimmen mit einer Cue-ID

Abgleichen mit einer bestimmten Cue-ID, indem die ID in {{cssxref("::cue()")}} angegeben wird.

> [!NOTE]
> Zum Zeitpunkt des Schreibens scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Cue mit der Kennung `cue1` in grün gestalten.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT-CSS auf die gleiche Weise wie HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen in einer Cue-Kennung umgangen werden können:

```plain
WEBVTT

STYLE
::cue(#crédit\ de\ transcription) {
  color: red;
}

crédit de transcription
00:04.000 --> 00:05.000
Transcrit par Célestes™
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudo-Elemente
