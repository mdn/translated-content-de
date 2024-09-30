---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("WebVTT")}}

<!-- need to add info on region block -->

Das **Web Video Text Tracks Format** (**WebVTT**) ist ein Klartextdateiformat zur Anzeige von zeitlich abgestimmten Textspuren, die mit Inhalten in {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen synchronisiert werden.
Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Untertiteltext-Overlays zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verknüpften WebVTT-Dateien werden mithilfe des {{HTMLElement("track")}} Elements hinzugefügt — siehe [Darstellen von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit einer Reihe von Dateien verknüpft werden, die jeweils verschiedene Arten von zeitgesteuerten Daten darstellen, wie geschlossene Untertitel, Übersetzungen oder Kapitelüberschriften, die in andere Lokalisierungen übersetzt wurden.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Überblick

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateierweiterung `.vtt`.
Der Inhalt muss mit [UTF-8](/de/docs/Glossary/UTF-8) codiert sein.

Die Struktur eines WebVTT besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, bestehend aus einem optionalen Byte Order Mark (BOM) — der Zeichenfolge `WEBVTT` — gefolgt von einem optionalen Texthinweis, getrennt durch ein oder mehrere Leerzeichen oder Tabulatorzeichen (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere Leerzeilen, die jeweils zwei aufeinanderfolgende neue Zeilen entsprechen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, die durch ein oder mehrere Leerzeilen getrennt sind.
- Null oder mehr weitere Zusätze wie `NOTE`-Blöcke, die durch ein oder mehrere Leerzeilen getrennt sind.

Eine einfache WebVTT-Datei, die die Zeichenfolge `WEBVTT` (aber keine Headertexte), einen NOTE-Block und zwei Veranstaltungen hat, wird unten gezeigt:

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

WebVTT-Dateien beginnen mit einem Headerblock, der Folgendes enthält:

- Ein optionales Byte Order Mark (BOM), das Unicode-Zeichen `U+FEFF`.
- Die Zeichenfolge `WEBVTT`.
- Einen optionalen Texthinweis rechts neben `WEBVTT`.

  - Nach `WEBVTT` muss mindestens ein Leerzeichen stehen.
  - Sie könnten diesen Header verwenden, um der Datei eine Beschreibung hinzuzufügen.
  - Sie können in den Textheader alles außer neuen Zeilen oder der Zeichenfolge `-->` verwenden.

Die Zeichenfolge `WEBVTT` ist der einzige erforderliche Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei folgendermaßen aussehen würde:

```plain
WEBVTT
```

Das Beispiel unten zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulator getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Zusätze

Ein "cue" definiert einen einzelnen Untertitel oder anderen Textblock, der über ein bestimmtes Zeitintervall angezeigt werden soll.
Zusätze müssen nach dem Header und allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Zusatz besteht aus drei oder mehr Zeilen:

- Ein optionaler Zusatz-Identifikator, gefolgt von einer neuen Zeile.
- Zeitangaben für Zusatz, die den Zeitraum angeben, in dem der Nutzlasttext angezeigt werden soll. Diese werden optional von Zusatzeinstellungen mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung gefolgt, gefolgt von einer einzelnen neuen Zeile.
- Der Nutzlasttext des Zusatzes, der sich über mehrere Zeilen erstrecken kann und durch eine leere Zeile beendet wird.

Hier ist ein Beispiel für einen einfachen Zusatz.
Die erste Zeile gibt die Anzeigestart- und Endzeiten des Zusatzes an, die durch die Zeichenfolge `-->` getrennt sind.
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Zusatz ist etwas komplizierter.
Er beginnt mit einem Zusatz-Identifikator — `1 - Title Crawl` — der verwendet werden kann, um den Zusatz in JavaScript und CSS zu referenzieren.
Er hat auch Zusatzeinstellungen nach den Zeitangaben des Zusatzes, um die Position des Zusatzes festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Nutzlasttext respektiert, wodurch Sie mithilfe von Bindestrich-Zeichen (`-`) Aufzählungslisten erstellen können, wie gezeigt.
Im Allgemeinen sollten Sie diese Umbrüche nur einfügen, wenn sie benötigt werden, da der Browser den Text entsprechend umbricht.

Es ist wichtig, keine "extra" Leerzeilen innerhalb eines Zusatzes zu verwenden, z. B. zwischen der Zeitangaben-Zeile und der Nutzlast des Zusatzes oder innerhalb der Nutzlast.
Dies liegt daran, dass eine Leerzeile den aktuellen Zusatz beendet.

Jeder Teil des Zusatzes wird in den folgenden Abschnitten ausführlicher erklärt.

### Zusatz-Identifikator

Der Identifikator ist ein Name, der den Zusatz identifiziert. Er kann verwendet werden, um den Zusatz aus JavaScript oder CSS zu referenzieren. Er darf keinen Zeilenumbruch enthalten und nicht die Zeichenfolge `-->` enthalten. Er muss mit einer einzelnen neuen Zeile enden. Identifikatoren müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z.B. 1, 2, 3).

Das folgende Beispiel zeigt eine Datei mit mehreren Zusätzen, die Identifikatoren enthalten:

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

### Zusatz-Zeitangaben

Eine Zusatz-Zeitangabe gibt das Zeitintervall an, in dem der Zusatz angezeigt wird. Sie hat eine Start- und Endzeit, die durch Zeitstempel dargestellt werden. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Zusätze können sich in den Zeitangaben überlappen, es sei denn, die WebVTT-Datei wird für Kapitel ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Element/track#kind) ist `chapters`) verwendet.

Jede Zusatz-Zeitangabe enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Die Zeichenfolge `-->`.
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, der größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden zwei Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wo die Komponenten wie folgt definiert sind:

- `hh`
  - : Stellt Stunden dar und muss mindestens zwei Ziffern umfassen. Es kann größer als zwei Ziffern sein (z.B. `9999:00:00.000`).
- `mm`
  - : Stellt Minuten dar und muss zwischen 00 und 59 liegen, inklusive.
- `ss`
  - : Stellt Sekunden dar und muss zwischen 00 und 59 liegen, inklusive.
- `ttt`
  - : Stellt Millisekunden dar und muss zwischen 000 und 999 liegen, inklusive.

Hier sind einige Beispiele für Zusatz-Zeitangaben:

- Grundlegende Zusatz-Zeitangaben:

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Überlappende Zusatz-Zeitangaben:

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Nicht überlappende Zusatz-Zeitangaben:

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Zusatzeinstellungen

Zusatzeinstellungen sind optionale Komponenten, die den Nutzlasttext des Zusatzes über das Video positionieren. Dies umfasst horizontale und vertikale Positionen. Es können null oder mehr Zusatzeinstellungen angegeben und in beliebiger Reihenfolge verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Zusatzeinstellungen werden rechts der Zusatz-Zeitangaben hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen der Zusatz-Zeitangabe und der ersten Einstellung und zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und Wert einer Einstellung. Die Einstellungen sind case-sensitive; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Zusatzeinstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal statt horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Sein Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Zusatzes, wie sie im Video erscheint. Positive Zahlen werden von oben nach unten und negative Zahlen von unten nach oben gezählt.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. ohne Dezimalstellen) zwischen 0 und 100 inklusive, die von einem Prozentzeichen (%) gefolgt werden muss.

    | Zeile        | `vertical` ausgelassen | `vertical:rl` | `vertical:lr` |
    | ------------ | ---------------------- | ------------- | ------------- |
    | `line:0`     | oben                   | rechts        | links         |
    | `line:-1`    | unten                  | links         | rechts        |
    | `line:0%`    | oben                   | rechts        | links         |
    | `line:100%`  | unten                  | links         | rechts        |

- `position`

  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheint. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheint. Der Wert ist ein Prozentsatz zwischen 0 und 100 inklusive.

    | Position        | `vertical` ausgelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `position:0%`   | links                  | oben          | oben          |
    | `position:100%` | rechts                 | unten         | unten         |

- `size`

  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100 inklusive.

    | Größe         | `vertical` ausgelassen | `vertical:rl` | `vertical:lr` |
    | ------------- | ---------------------- | ------------- | ------------- |
    | `size:100%`   | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`    | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`

  - : Gibt die Ausrichtung des Textes an. Der Text ist innerhalb des durch die Zusatzeinstellung `size` gegebenen Raums ausgerichtet, falls diese eingestellt ist.

    | Ausrichten     | `vertical` ausgelassen    | `vertical:rl`       | `vertical:lr`       |
    | -------------- | ------------------------- | ------------------- | ------------------- |
    | `align:start`  | links                     | oben                | oben                |
    | `align:center` | zentriert horizontal      | zentriert vertikal  | zentriert vertikal  |
    | `align:end`    | rechts                    | unten               | unten               |

Hier sind einige Beispiele.
Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text auf ein Schild oder Etikett zu legen. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
00:00:05.000 --> 00:00:10.000 position:10%,line-left align:left size:31%
00:00:05.000 --> 00:00:10.000 position:90% align:right size:35%
00:00:05.000 --> 00:00:10.000 position:45%,line-right align:center size:90%
```

### Zusatznutzlast

Die Nutzlast ist der Bereich, in dem der Inhalt des Zusatzes definiert ist, wie zum Beispiel der Untertitel- oder geschlossene Untertiteltext.
Sie kann neue Zeilen enthalten, darf jedoch nicht zwei aufeinanderfolgende neue Zeilen enthalten: Das würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Eine Zusatztext-Nutzlast darf nicht die Zeichenfolge `-->`, das Kaufzeichen (`&`) oder das Kleiner-als-Zeichen (`<`) enthalten.
Bei Bedarf können Sie stattdessen eine [Zeichenreferenz](/de/docs/Glossary/character_reference) wie die benannte Zeichenreferenz `&amp;` für Kaufzeichen und `&lt;` für Kleiner-als verwenden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.
Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser jede [Zeichenreferenz](/de/docs/Glossary/character_reference) in Zusätzen, Notizen oder anderem Text zulassen.
Ältere Browserversionen unterstützen möglicherweise nur den folgenden Teil der benannten Zeichenreferenzen:

| Name               | Zeichen | Escape-Sequenz  |
| ------------------ | ------- | --------------- |
| Kaufzeichen        | `&`     | `&amp;`         |
| Kleiner-als        | `<`     | `&lt;`          |
| Größer-als         | `>`     | `&gt;`          |
| Links-nach-rechts-Markierung | _none_    | `&lrm;`         |
| Rechts-nach-links-Markierung | _none_    | `&rlm;`         |
| Geschütztes Leerzeichen |          | `&nbsp;`        |

### Zusatznutzlast-Text-Tags

Eine Anzahl von Tags, wie `<b>`, kann verwendet werden, um Text innerhalb eines Zusatzes zu markieren und zu formatieren.
Wenn jedoch die WebVTT-Datei in einem {{HTMLElement("track")}} Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Element/track#kind) den Wert `chapters` hat, können keine Tags verwendet werden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-Stil-Untertitel zu ermöglichen.
    Der Zeitstempel muss größer sein als der Start-Zeitstempel des Zusatzes, größer als jeder vorherige Zeitstempel in der Nutzlast des Zusatzes und kleiner als der End-Zeitstempel des Zusatzes.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zur Nutzlast, wenn es keinen weiteren Zeitstempel in der Nutzlast gibt.
    Jeder Text vor dem _aktiven Text_ in der Nutzlast ist _vorheriger Text_.
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

Die folgenden Tags sind die HTML-Tags, die in einem Zusatz erlaubt sind und erfordern Öffnungs- und Schließ-Tags (z.B. `<b>text</b>`).
Mit diesen Tags markierter Text kann in [`STYLE`-Blöcken](#style-blöcke) mithilfe des {{cssxref("::cue")}} Pseudo-Elements formatiert werden.

- Kursiv-Tag (`<i></i>`)

  - : Den enthaltenen Text kursiv setzen.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)

  - : Den enthaltenen Text fett setzen.

    ```xml
    <b>text</b>
    ```

- Unterstreichungstag (`<u></u>`)

  - : Den enthaltenen Text unterstreichen.

    ```xml
    <u>text</u>
    ```

- Klassentag (`<c></c>`)

  - : Eine Klasse zu dem enthaltenen Text hinzufügen, sodass dieser via CSS ausgewählt werden kann.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)

  - : Wird mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d.h. kleine annotative Zeichen über anderen Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)

  - : Wird mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d.h. kleine annotative Zeichen über anderen Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Sprecher-Tag (`<v></v>`)

  - : Ähnlich wie Klassentag, auch um den enthaltenen Text mithilfe von CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Sprach-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante gehörig markiert wurde, unter Verwendung des Formats, das in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} definiert ist.

    ```xml
    <lang en-GB>Engish text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen.
Sie sind für diejenigen gedacht, die die Datei lesen, und werden von Nutzern nicht gesehen.
Beispielsweise könnten Sie sie verwenden, um Autor-Kontaktdetails aufzuzeichnen, einen Überblick über Ihre Struktur zu geben oder Platzhalter für Zusätze zu erstellen, die noch geschrieben werden müssen.

Sie können an beliebiger Stelle in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke können neue Zeilen enthalten, dürfen jedoch nicht zwei aufeinanderfolgende neue Zeilen enthalten: Das würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Ein Kommentar darf nicht die Zeichenfolge `-->`, das Kaufzeichen (`&`) oder das Kleiner-als-Zeichen (`<`) enthalten.
Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine [Zeichenreferenz](/de/docs/Glossary/character_reference) wie `&amp;` für Kaufzeichen und `&lt;` für Kleiner-als verwenden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz (`&gt;`) anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Der Zeichenfolge `NOTE`.
- Einem Leerzeichen oder einer neuen Zeile.
- Null oder mehr Zeichen, außer denen, die oben angegeben wurden.

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

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styles von Zusatztexten innerhalb einer WebVTT-Datei einzubetten.
Beachten Sie, dass diese dazu verwendet werden, das Erscheinungsbild und die Größe der Zusätze zu stylen, jedoch nicht ihre Position und Anordnung, die durch die [Einstellungen für Zusatz](#zusatzeinstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Zusätze können auch durch CSS-Stile des zugehörigen [Dokuments, das das Video-/Audioelement einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), angesprochen werden.

`STYLE`-Blöcke müssen vor allen Zusatzblöcken in der Datei stehen.

Jeder Block besteht aus den folgenden Zeilen:

- Die Zeichenfolge `STYLE` gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann einer neuen Zeile.
- Eine Zeichenfolge, die die CSS-Styles definiert, um sie mit dem {{cssxref("::cue")}} Pseudo-Element abzugleichen und anzuwenden.

Der Block darf nicht die Zeichenfolge `-->` enthalten.
Er kann neue Zeilen enthalten, darf jedoch nicht zwei aufeinanderfolgende neue Zeilen enthalten: Das würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten gezeigt.
Dieser verwendet {{cssxref("::cue")}}, um allen Zusatztexten eine Textfarbe zuzuweisen, und eine andere Textfarbe nur für Texte, die mit `<b></b>`-Tags markiert sind.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle in [Weitere Beispiele für Zusatz-Styling](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in der _WebVTT API_ demonstrieren.

### Alle Zusatznutzlasttexte abgleichen

Alle Zusatznutzlasttexte mit {{cssxref("::cue")}} abgleichen.

Zum Beispiel würde der folgende `STYLE`-Block alle Zusatztexte abgleichen und sie gelb einfärben.

```plain
STYLE
cue {
  color: yellow;
}
```

### Einen Tag-Typ abgleichen

Zusatztexte, die mit bestimmten [Zusatznutzlast-Text-Tags](#zusatznutzlast-text-tags), wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang`, markiert sind, durch Angabe des Tags in {{cssxref("::cue()")}} als Typsselektor abgleichen.

Zum Beispiel würde der folgende Block Zusatznutzlasttexte farbig markieren, die mit `lang` als gelb markiert sind, und mit jedem der anderen Tags als rot.

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

### Einen Klassenselektor abgleichen

Alle Tags abgleichen, die mit einem Klassenselektor in `::cue()` markiert sind.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde den gesamten Text danach ansprechen, da alle Tags die `myclass`-Klasse haben.

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

Um ein bestimmtes Tag und eine bestimmte Klasse zu selektieren, müssen Sie beide in `::cue()` angeben:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Zusatznutzlasttexte, die mit einem bestimmten Tag und Attribut markiert sind, können mithilfe eines Attributsselektors abgeglichen werden.

Betrachten wir beispielsweise die folgende WebVTT-Datei, die Texte enthält, die mit den `v` und `lang` [Zusatznutzlast-Text-Tags](#zusatznutzlast-text-tags) markiert sind und Attribute verwendet, um die bestimmte Stimme ("Salame") und Sprachen anzugeben.

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

### Verwenden Sie Pseudoklassen für das Matching

Das vorherige Beispiel formatierte Texte für eine bestimmte Sprache, indem Attribute abgeglichen wurden.
Sie können auch Sprachen mit der Pseudoklasse `:lang()` abgleichen, wie sie durch den `STYLE`-Block unten demonstriert wird.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Ähnlich können Sie mit den Pseudoklassen `:past` und `:future` abgleichen, um ein karaokeartiges Erlebnis zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudoklassen, wie `link`, `nth-last-child` und `nth-child`, sollten ähnlich funktionieren.

### Eine Zusatz-ID abgleichen

Gegen eine bestimmte Zusatz-`id` abgleichen, indem die `id` innerhalb {{cssxref("::cue()")}} angegeben wird.

> [!NOTE]
> Zum Zeitpunkt der Erstellung dieses Textes scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Zusatz mit dem Bezeichner `cue1` in Grün formatieren.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT-CSS auf die gleiche Weise wie auf HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen innerhalb eines Zusatzbezeichners maskiert werden:

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

- Die CSS [::cue und ::cue()](/de/docs/Web/CSS/::cue) Pseudo-Elemente
