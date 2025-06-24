---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebVTT")}}

<!-- need to add info on region block -->

Das **Web Video Text Tracks Format** (**WebVTT**) ist ein reines Textdateiformat zur Anzeige von zeitlich abgestimmten Textspuren, die mit Inhalten in den {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen synchronisiert sind.
Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Textüberlagerungen zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verknüpften WebVTT-Dateien werden mit dem {{HTMLElement("track")}} Element hinzugefügt — siehe [Anzeige von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit einer Anzahl von Dateien verknüpft sein, die jeweils unterschiedliche Arten von zeitgesteuerten Daten wie geschlossene Untertitel, Überschriften oder Kapitelüberschriften in verschiedene Sprachversionen übersetzt repräsentieren.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Übersicht

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateierweiterung `.vtt`.
Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} codiert werden.

Die Struktur eines WebVTT besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, bestehend aus einem optionalen Byte-Order-Mark (BOM) — dem String `WEBVTT` — gefolgt von einem optionalen Texthader, der durch ein oder mehrere Leerzeichen oder Tabulatoren getrennt ist (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere leere Zeilen, die jeweils zwei aufeinanderfolgendem Zeilenumbrüchen entsprechen.
- Null oder mehr `STYLE`, `REGION` oder `NOTE` Blöcke, getrennt durch eine oder mehrere leere Zeilen.
- Null oder mehr Cue- oder `NOTE` Blöcke, getrennt durch eine oder mehrere leere Zeilen.

Ein einfaches WebVTT-Datei-Beispiel, das den String `WEBVTT` (aber keinen Headertext), einen NOTIZ-Block und zwei Cues enthält, wird unten gezeigt:

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

## WebVTT Header

WebVTT-Dateien beginnen mit einem Headerblock, der Folgendes enthält:

- Ein optionales Byte Order Mark (BOM), das Unicode-Zeichen `U+FEFF`.
- Den String `WEBVTT`.
- Einen optionalen Texthader rechts von `WEBVTT`.
  - Es muss mindestens ein Leerzeichen nach `WEBVTT` stehen.
  - Sie könnten diesen Header verwenden, um eine Beschreibung der Datei hinzuzufügen.
  - Sie dürfen im Texthader alles verwenden außer Zeilenumbrüchen oder dem String `-->`.

Der `WEBVTT` String ist der einzige erforderliche Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei so aussehen würde:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulator getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT Cues

Ein Cue definiert eine einzelne Beschriftung, Untertitelung oder einen anderen Textblock, der über einen bestimmten Zeitintervall angezeigt werden soll.
Cues müssen nach dem Header und allen `STYLE` oder `REGION` Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Eine optionale Cue-Kennung gefolgt von einem Zeilenumbruch.
- Cue-Zeitansetzungen, die den Zeitraum angeben, in dem der Payload-Text angezeigt werden soll. Diese werden optional von Cue-Einstellungen gefolgt, mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einem einzelnen Zeilenumbruch.
- Der Cue-Payload-Text, der mehrere Zeilen umfassen kann und durch eine leere Zeile beendet wird.

Hier ist ein Beispiel für einen einfachen Cue.
Die erste Zeile gibt die Start- und Endzeiten des Cue-Displays an, getrennt durch den String `-->`.
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Cue ist etwas komplizierter.
Er beginnt mit einer Cue-Kennung — `1 - Title Crawl` — die in JavaScript und CSS zur Referenzierung des Cues verwendet werden kann.
Er hat auch Cue-Einstellungen nach den Cue-Zeitansetzungen, um die Position des Cues festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Payload-Text respektieren wird, wodurch Sie mit Bindestrich-Zeichen (`-`) Aufzählungslisten erstellen können.
Im Allgemeinen sollten Sie diese Zeilenumbrüche nur bei Bedarf einfügen, da der Browser den Text entsprechend umbricht.

Es ist wichtig, keine "zusätzlichen" Leerzeilen innerhalb eines Cues zu verwenden, zum Beispiel zwischen der Zeitangabenzeile und dem Cue-Payload oder innerhalb des Payloads.
Ganz einfach, weil eine leere Zeile den aktuellen Cue beendet.

Jeder Teil des Cues wird in den folgenden Abschnitten genauer erklärt.

### Cue-Kennung

Die Kennung ist ein Name, der den Cue identifiziert. Sie kann verwendet werden, um den Cue über JavaScript oder CSS zu referenzieren. Sie darf keinen Zeilenumbruch enthalten und nicht den String `-->` enthalten. Sie muss mit einem einzelnen Zeilenumbruch enden. Kennungen müssen nicht einzigartig sein, es ist jedoch üblich, sie zu nummerieren (z. B. 1, 2, 3).

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

### Cue-Zeitansetzungen

Eine Cue-Zeitangabe gibt das Zeitintervall an, in dem der Cue angezeigt wird. Sie hat eine Start- und Endzeit, die durch Zeitstempel dargestellt werden. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Cues können überlappende Zeitansetzungen haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) ist `chapters`).

Jede Cue-Zeitangabe enthält fünf Komponenten:

- Ein Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Den String `-->`.
- Mindestens ein Leerzeichen.
- Ein Zeitstempel für die Endzeit, die größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden beiden Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wo die Komponenten wie folgt definiert sind:

- `hh`
  - : Repräsentiert Stunden und muss mindestens zwei Ziffern haben. Sie kann mehr als zwei Ziffern beinhalten (z. B. `9999:00:00.000`).
- `mm`
  - : Repräsentiert Minuten und muss zwischen 00 und 59 liegen, inklusive.
- `ss`
  - : Repräsentiert Sekunden und muss zwischen 00 und 59 liegen, inklusive.
- `ttt`
  - : Repräsentiert Millisekunden und muss zwischen 000 und 999 liegen, inklusive.

Hier sind einige Beispiele für Cue-Zeitansetzungen:

- Grundlegende Beispiele für Cue-Zeitansetzungen

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Beispiele für überlappende Cue-Zeitansetzungen

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Beispiele für nicht überlappende Cue-Zeitansetzungen

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue-Einstellungen

Cue-Einstellungen sind optionale Komponenten, die den Cue-Payload-Text über dem Video positionieren. Dies schließt horizontale und vertikale Positionen ein. Null oder mehr Cue-Einstellungen können in beliebiger Reihenfolge angegeben und verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden rechts von den Cue-Zeitangaben hinzugefügt. Es muss eines oder mehrere Leerzeichen zwischen der Cue-Zeitangabe und der ersten Einstellung sowie zwischen jeder Einstellung geben. Ein Doppelpunkt trennt Namen und Wert einer Einstellung. Die Einstellungen sind case-sensitive; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal anstatt horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Sein Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Cues, wie sie auf dem Video erscheint. Positive Zahlen werden von oben nach unten gezählt und negative Zahlen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. ohne Dezimalstellen) zwischen 0 und 100, die mit einem Prozentzeichen (%) folgen muss.

    | Zeile       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `line:0`    | oben                   | rechts        | links         |
    | `line:-1`   | unten                  | links         | rechts        |
    | `line:0%`   | oben                   | rechts        | links         |
    | `line:100%` | unten                  | links         | rechts        |

- `position`

  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheinen wird. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheinen wird. Der Wert ist ein Prozentsatz zwischen 0 und 100.

    | Position        | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `position:0%`   | links                  | oben          | oben          |
    | `position:100%` | rechts                 | unten         | unten         |

- `size`

  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100.

    | Größe       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------------- | ------------- | ------------- |
    | `size:100%` | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`

  - : Gibt die Ausrichtung des Textes an. Der Text wird innerhalb des durch die größenmäßige Cue-Einstellung gegebenen Raums ausgerichtet, wenn diese gesetzt ist.

    | Ausrichtung    | `vertical` weggelassen | `vertical:rl`      | `vertical:lr`      |
    | -------------- | ---------------------- | ------------------ | ------------------ |
    | `align:start`  | links                  | oben               | oben               |
    | `align:center` | horizontal zentriert   | vertikal zentriert | vertikal zentriert |
    | `align:end`    | rechts                 | unten              | unten              |

Hier sind einige Beispiele.
Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text über ein Schild oder Etikett zu legen. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
00:00:05.000 --> 00:00:10.000 position:10%,line-left align:left size:31%
00:00:05.000 --> 00:00:10.000 position:90% align:right size:35%
00:00:05.000 --> 00:00:10.000 position:45%,line-right align:center size:90%
```

### Cue Payload

Der Payload ist der Bereich, in dem der Cue-Inhalt definiert wird, wie der Untertitel- oder geschlossene Untertiteltext.
Er kann Zeilenumbrüche enthalten, aber nicht zwei aufeinanderfolgende Zeilenumbrüche: das würde eine leere Zeile erzeugen, was das Ende des Blocks anzeigt.

Ein Cue-Payload-Text darf den String `-->`, das Und-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten.
Falls erforderlich, können Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für das Und-Zeichen und `&lt;` für Kleiner-als verwenden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwechslungen mit Tags zu vermeiden.
Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser jede {{Glossary("character_reference", "Zeichenreferenz")}} in Cues, Notizen oder anderem Text zulassen.
Ältere Browserversionen unterstützen möglicherweise nur den folgenden Unterbereich benannter Zeichenreferenzen:

| Name                         | Zeichen | Escape-Sequenz |
| ---------------------------- | ------- | -------------- |
| Und-Zeichen                  | `&`     | `&amp;`        |
| Kleiner-als-Zeichen          | `<`     | `&lt;`         |
| Größer-als-Zeichen           | `>`     | `&gt;`         |
| Links-nach-rechts-Markierung | _keine_ | `&lrm;`        |
| Rechts-nach-links-Markierung | _keine_ | `&rlm;`        |
| Geschütztes Leerzeichen      |         | `&nbsp;`       |

### Cue-Payload-Text-Tags

Eine Anzahl von Tags, wie `<b>`, kann verwendet werden, um Text innerhalb eines Cues zu markieren und zu stylen.
Wenn die WebVTT-Datei jedoch in einem {{HTMLElement("track")}}-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) `chapters` ist, können keine Tags verwendet werden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen.
    Der Zeitstempel muss größer als der Startzeitstempel des Cues sein, größer als alle vorherigen Zeitstempel im Cue-Payload sein und kleiner als der Endzeitstempel des Cues sein.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende des Payloads, wenn kein weiterer Zeitstempel im Payload vorhanden ist.
    Jeglicher Text vor dem _aktiven Text_ im Payload ist _vorheriger Text_.
    Jeglicher Text nach dem _aktiven Text_ ist _zukünftiger Text_.

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

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind, und erfordern öffnende und schließende Tags (z. B. `<b>text</b>`).
Text, der mit diesen Tags markiert ist, kann in [`STYLE` Blocks](#style_blöcke) mit dem {{cssxref("::cue")}} Pseudo-Element formatiert werden.

- Italics-Tag (`<i></i>`)

  - : Kursiv markieren des enthaltenen Textes.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)

  - : Fett markieren des enthaltenen Textes.

    ```xml
    <b>text</b>
    ```

- Unterstreichungs-Tag (`<u></u>`)

  - : Unterstreichen des enthaltenen Textes.

    ```xml
    <u>text</u>
    ```

- Klassen-Tag (`<c></c>`)

  - : Eine Klasse für den enthaltenen Text hinzufügen, um sie über CSS auszuwählen.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)

  - : Wird mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) anzuwenden (d.h. kleine annotative Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)

  - : Wird mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) anzuzeigen (d.h. kleine annotative Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Voice-Tag (`<v></v>`)

  - : Ähnlich wie Klassentag, wird auch verwendet, um den enthaltenen Text mit CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Sprach-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante gehörend markiert wurde, im Format definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen.
Sie sind für diejenigen vorgesehen, die die Datei lesen, und nicht für Benutzer sichtbar.
Sie könnten sie beispielsweise nutzen, um Kontaktdetails des Autors aufzuzeichnen, eine Übersicht über Ihre Struktur zu geben oder Platzhalter für Cues hinzuzufügen, die noch geschrieben werden müssen.

Sie können überall in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke können Zeilenumbrüche enthalten, jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche: das würde eine leere Zeile erzeugen, die das Ende des Blocks anzeigt.

Ein Kommentar kann den String `-->`, das Und-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten.
Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie `&amp;` für das Und-Zeichen und `&lt;` für Kleiner-als verwenden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz (`&gt;`) anstelle des Größer-als-Zeichens (`>`) zu verwenden, um Verwechslungen mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Der String `NOTE`.
- Ein Leerzeichen oder ein Zeilenumbruch.
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

## STYLE Blöcke

`STYLE` Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styling von Cues in einer WebVTT-Datei einzubetten.
Es ist zu beachten, dass diese zur Stilierung des Erscheinungsbildes und der Größe der Cues verwendet werden, nicht jedoch deren Positionierung und Layout, die über die [Cue-Einstellungen](#cue-einstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Cues können auch durch CSS-Stile gestylt werden, die vom zugehörigen [Dokument, das das Video-/Audioelement einbettet, geladen werden](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet).

`STYLE` Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Der String `STYLE`, gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann ein Zeilenumbruch.
- Ein String, der die CSS-Stile definiert, um diese abzugleichen und zu verwenden, mit dem {{cssxref("::cue")}} Pseudo-Element.

Der Block kann den String `-->` nicht enthalten.
Er kann Zeilenumbrüche enthalten, jedoch keine zwei aufeinanderfolgenden Zeilenumbrüche: das würde eine leere Zeile erzeugen, die das Ende des Blocks anzeigt.

Ein einfaches WebVTT-Dateibeispiel mit zwei `STYLE` Blöcken wird unten gezeigt.
Dies verwendet {{cssxref("::cue")}} um eine Textfarbe auf allen Cue-Text anzuwenden, und eine andere Textfarbe nur auf Text, der mit `<b></b>` Tags markiert ist.

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
> Es gibt Live-Beispiele, in denen viele der folgenden Fälle in [Weitere Cue-Stil-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in _WebVTT API_ demonstriert werden.

### Übereinstimmung mit allen Cue-Payload-Texten

Vergleichen Sie auf alle Cue-Payload-Texte mit {{cssxref("::cue")}}.

Zum Beispiel würde der folgende `STYLE` Block alle Cue-Texte vergleichen und sie gelb färben.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Übereinstimmung mit einem Tag-Typ

Vergleichen Sie Cue-Text, der mit bestimmten [Cue-Payload-Text-Tags](#cue-payload-text-tags) markiert ist, wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v`, und `lang`, indem Sie das Tag in {{cssxref("::cue()")}} als Typ-Selektor angeben.

Zum Beispiel würde der folgende Block Cue-Payload-Text, der mit `lang` markiert ist, gelb färben, und jedes der anderen Tags rot.

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

### Übereinstimmung mit einem Klassenselektor

Vergleichen Sie alle Tags, die mit einem Klassenselektor in `::cue()` markiert sind.

Der `STYLE` Block in der folgenden WebVTT-Datei würde allen nachfolgenden Text vergleichen, da alle Tags die Klasse `myclass` haben.

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

### Übereinstimmung mit einem Attribut

Cue-Payload-Text, der mit einem bestimmten Tag und Attribut markiert ist, kann mit einem Attributselektor abgeglichen werden.

Zum Beispiel, betrachten Sie die folgende WebVTT-Datei, die Text markiert hat, der die `v` und `lang` [Cue-Payload-Text-Tags](#cue-payload-text-tags) verwendet, mit Attributen, um die bestimmte Stimme ("Salame") und Sprachen zu spezifizieren.

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

### Übereinstimmung mithilfe von Pseudo-Klassen

Das vorherige Beispiel gestaltete Text für eine bestimmte Sprache durch Attributabgleich.
Sie können auch Sprachen mit der Pseudo-Klasse `:lang()` abgleichen, wie im folgenden `STYLE` Block gezeigt.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Sie können auch mit den Pseudo-Klassen `:past` und `:future` vergleichen, um ein karaokeähnliches Erlebnis zu schaffen.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudo-Klassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Übereinstimmung mit einer Cue-ID

Vergleichen Sie mit einer bestimmten Cue-`id`, indem Sie die `id` innerhalb von {{cssxref("::cue()")}} angeben.

> [!NOTE]
> Zum Zeitpunkt der Erstellung scheint dies in keinem der gängigen Browser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Cue mit der Kennung `cue1` grün formatieren.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT-CSS auf die gleiche Weise wie auf HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen in einer Cue-Kennung entkommen werden können:

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

- Die CSS [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue) Pseudo-Elemente
