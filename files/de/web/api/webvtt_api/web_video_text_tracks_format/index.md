---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{DefaultAPISidebar("WebVTT")}}

**Web Video Text Tracks Format** (**WebVTT**) ist ein reines Textdateiformat zur Anzeige von zeitgesteuerten Textspuren, die mit Inhalten in {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen synchronisiert sind.
Diese können beispielsweise verwendet werden, um Untertitel und Überlagerungstexte zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verknüpften WebVTT-Dateien werden mithilfe des {{HTMLElement("track")}}-Elements hinzugefügt – siehe [Anzeigen von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit mehreren Dateien verknüpft sein, die jeweils unterschiedliche Arten von zeitgesteuerten Daten darstellen, wie beispielsweise Untertitel, Überschriften oder Kapitelüberschriften, die in verschiedene Sprachen übersetzt sind.

> [!NOTE]
> WebVTT-Inhalte können auch programmatisch über die [WebVTT API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Übersicht

WebVTT-Dateien haben den MIME-Typ `text/vtt` und die Dateierweiterung `.vtt`.
Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein.

Die Struktur eines WebVTTs besteht aus den folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, bestehend aus einem optionalen Byte Order Mark (BOM) — dem String `WEBVTT` — gefolgt von einem optionalen Textheader, getrennt durch eines oder mehrere Leerzeichen oder Tabulatoren (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere leere Zeilen, die jeweils zwei aufeinanderfolgende neue Zeilen entsprechen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, getrennt durch eine oder mehrere leere Zeilen.
- Null oder mehr Cue- oder `NOTE`-Blöcke, getrennt durch eine oder mehrere leere Zeilen.

Eine einfache WebVTT-Datei, die den `WEBVTT`-String (aber keinen Headertext), einen NOTE-Block und zwei Cues enthält, wird unten gezeigt:

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

- Ein optionales Byte Order Mark (BOM), das Unicode-Zeichen `U+FEFF`.
- Den String `WEBVTT`.
- Einen optionalen Textheader rechts von `WEBVTT`.
  - Es muss mindestens ein Leerzeichen nach `WEBVTT` vorhanden sein.
  - Sie können diesen Header verwenden, um eine Beschreibung zur Datei hinzuzufügen.
  - Sie dürfen alles im Textheader verwenden, außer neuen Zeilen oder dem String `-->`.

Der `WEBVTT`-String ist der einzige notwendige Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei so aussehen würde:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulatorzeichen getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Cues

Ein Cue definiert eine einzelne Untertitel-, Beschriftungs- oder andere Textblöcke, die über ein bestimmtes Zeitintervall hinweg angezeigt werden sollen.
Cues müssen nach dem Header und allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Ein optionaler Cue-Identifier, dem eine neue Zeile folgt.
- Cue-Timings, die den Zeitraum angeben, in dem der Nutzlasttext angezeigt werden soll. Diese werden optional von Cue-Einstellungen gefolgt, mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einer einzelnen neuen Zeile.
- Der Cue-Nutzlasttext, der sich über mehrere Zeilen erstrecken kann und durch eine leere Zeile beendet wird.

Hier ist ein Beispiel für ein einfaches Cue.
Die erste Zeile gibt die Anzeige-Start- und Endzeiten des Cues an, getrennt durch den String `-->`.
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Cue ist etwas komplizierter.
Er beginnt mit einem Cue-Identifier – `1 - Title Crawl` – der verwendet werden kann, um den Cue in JavaScript und CSS zu referenzieren.
Er hat auch Cue-Einstellungen nach den Cue-Timings, um die Cue-Position einzustellen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Nutzlasttext berücksichtigt, was es Ihnen ermöglicht, Aufzählungslisten mit Bindestrichen (`-`) zu erstellen, wie gezeigt.
Im Allgemeinen sollten Sie diese Umbrüche nur dort einfügen, wo sie benötigt werden, da der Browser den Text entsprechend umbricht.

Es ist wichtig, innerhalb eines Cues keine "extra" Leerzeilen zu verwenden, zum Beispiel zwischen der Timings-Zeile und der Cue-Nutzlast oder innerhalb der Nutzlast.
Dies liegt daran, dass eine Leerzeile den aktuellen Cue beendet.

Jeder Teil des Cues wird in den folgenden Abschnitten ausführlicher erklärt.

### Cue-Identifier

Der Identifier ist ein Name, der den Cue identifiziert. Er kann verwendet werden, um den Cue von JavaScript oder CSS aus zu referenzieren. Er darf keine neue Zeile enthalten und nicht den String `-->` enthalten. Er muss mit einer einzelnen neuen Zeile enden. Identifier müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z.B. 1, 2, 3).

Das folgende Beispiel zeigt eine Datei mit mehreren Cues, die Identifier enthalten:

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

Ein Cue-Timing gibt das Zeitintervall an, in dem der Cue angezeigt wird. Es hat eine Start- und eine Endzeit, dargestellt durch Zeitstempel. Die Endzeit muss größer sein als die Startzeit, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Cues können überlappende Timings haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) ist `chapters`).

Jedes Cue-Timing enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Den String `-->`.
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, die größer sein muss als die Startzeit.

Die Zeitstempel können in einem der folgenden zwei Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wo die Komponenten wie folgt definiert sind:

- `hh`
  - : Repräsentiert Stunden und muss mindestens zweistellig sein. Es kann größer als zweistellig sein (z.B. `9999:00:00.000`).
- `mm`
  - : Repräsentiert Minuten und muss zwischen 00 und 59 liegen, inklusive.
- `ss`
  - : Repräsentiert Sekunden und muss zwischen 00 und 59 liegen, inklusive.
- `ttt`
  - : Repräsentiert Millisekunden und muss zwischen 000 und 999 liegen, inklusive.

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

Cue-Einstellungen sind optionale Komponenten, die den Cue-Nutzlasttext über dem Video positionieren. Dazu gehören horizontale und vertikale Positionen. Null oder mehr Cue-Einstellungen können angegeben und in beliebiger Reihenfolge verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden rechts der Cue-Timings hinzugefügt. Es muss eines oder mehrere Leerzeichen zwischen dem Cue-Timing und der ersten Einstellung sowie zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind case-sensitiv; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal statt horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`
  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo Text horizontal erscheint. Sein Wert kann sein:
    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Cues, wie sie im Video erscheint. Positive Zahlen werden von oben nach unten gezählt und negative Zahlen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. ohne Dezimalstellen) zwischen 0 und 100 inklusive, die mit einem Prozentzeichen (%) folgen muss.

    | Line        | `vertical` fehlt | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------- | ------------- | ------------- |
    | `line:0`    | oben             | rechts        | links         |
    | `line:-1`   | unten            | links         | rechts        |
    | `line:0%`   | oben             | rechts        | links         |
    | `line:100%` | unten            | links         | rechts        |

- `position`
  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheint. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheint. Der Wert ist ein Prozentsatz zwischen 0 und 100 inklusive.

    | Position        | `vertical` fehlt | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------- | ------------- | ------------- |
    | `position:0%`   | links            | oben          | oben          |
    | `position:100%` | rechts           | unten         | unten         |

- `size`
  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100 inklusive.

    | Size        | `vertical` fehlt | `vertical:rl` | `vertical:lr` |
    | ----------- | ---------------- | ------------- | ------------- |
    | `size:100%` | volle Breite     | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite     | halbe Höhe    | halbe Höhe    |

- `align`
  - : Gibt die Ausrichtung des Textes an. Der Text wird innerhalb des durch die Größeneinstellung angegebenen Raums ausgerichtet, wenn er eingestellt ist.

    | Align          | `vertical` fehlt     | `vertical:rl`      | `vertical:lr`      |
    | -------------- | -------------------- | ------------------ | ------------------ |
    | `align:start`  | links                | oben               | oben               |
    | `align:center` | horizontal zentriert | vertikal zentriert | vertikal zentriert |
    | `align:end`    | rechts               | unten              | unten              |

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

### Cue-Nutzlast

Die Nutzlast definiert den Inhalt eines Cues, wie beispielsweise den Untertitel- oder Beschriftungstext.
Sie kann neue Zeilen enthalten, darf jedoch keine zwei aufeinanderfolgenden neuen Zeilen enthalten: Dies würde eine leere Zeile erzeugen, die das Ende des Blocks anzeigt.

Eine Cue-Text-Nutzlast darf nicht den String `-->`, das Kaufmanns-Und-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) enthalten.
Bei Bedarf können stattdessen {{Glossary("character_reference", "zeichenreferenzen")}} wie die benannte Zeichenreferenz `&amp;` für das Kaufmanns-Und und `&lt;` für das Kleiner-als-Zeichen verwendet werden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz `&gt;` anstelle des Größer-als-Zeichens zu verwenden (`>`) um Verwechslungen mit Tags zu vermeiden.
Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle gängigen Browser jede {{Glossary("character_reference", "zeichenreferenz")}} in Cues, Notizen oder anderen Texten zulassen.
Ältere Browserversionen unterstützen möglicherweise nur das folgende Teilset benannter Zeichenreferenzen:

| Name                      | Zeichen | Escape-Sequenz |
| ------------------------- | ------- | -------------- |
| Ampersand                 | `&`     | `&amp;`        |
| Kleiner-als               | `<`     | `&lt;`         |
| Größer-als                | `>`     | `&gt;`         |
| Links-nach-rechts-Zeichen | _kein_  | `&lrm;`        |
| Rechts-nach-links-Zeichen | _kein_  | `&rlm;`        |
| Geschütztes Leerzeichen   |         | `&nbsp;`       |

### Cue-Nutzlast-Text-Tags

Eine Reihe von Tags, wie `<b>`, kann zum Markieren und Stylen von Text innerhalb eines Cues verwendet werden.
Wenn die WebVTT-Datei jedoch in einem {{HTMLElement("track")}}-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) auf `chapters` gesetzt ist, können keine Tags verwendet werden.

- Zeitstempel-Tag
  - : Zeitstempel-Tags werden verwendet, um Karaoke-artige Untertitel zu ermöglichen.
    Der Zeitstempel muss größer sein als der Start-Zeitstempel des Cues, größer als ein vorheriger Zeitstempel in der Cue-Nutzlast und kleiner als der End-Zeitstempel des Cues.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende der Nutzlast, wenn kein weiterer Zeitstempel in der Nutzlast vorhanden ist.
    Jener Text vor dem _aktiven Text_ in der Nutzlast wird als _vorheriger Text_ bezeichnet.
    Jener Text, der über den _aktiven Text_ hinausgeht, wird als _zukünftiger Text_ bezeichnet.

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

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind und erfordern Öffnungs- und Schließtags (z.B. `<b>text</b>`).
Text, der mit diesen Tags markiert ist, kann in [`STYLE`-Blocks](#style-blöcke) unter Verwendung des {{cssxref("::cue")}}-Pseudoelements formatiert werden.

- Kursiv-Tag (`<i></i>`)
  - : Kursivschrift für den enthaltenen Text.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)
  - : Fettschrift für den enthaltenen Text.

    ```xml
    <b>text</b>
    ```

- Unterstreichen-Tag (`<u></u>`)
  - : Unterstreichen des enthaltenen Textes.

    ```xml
    <u>text</u>
    ```

- Klassen-Tag (`<c></c>`)
  - : Fügt eine Klasse zum enthaltenen Text hinzu, um sie in CSS auszuwählen.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)
  - : Wird zusammen mit Ruby-Text-Tags zum Anzeigen von [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d.h. kleine annotative Zeichen über anderen Zeichen) verwendet.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)
  - : Wird zusammen mit Ruby-Tags zum Anzeigen von [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d.h. kleine annotative Zeichen über anderen Zeichen) verwendet.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Sprach-Tag (`<v></v>`)
  - : Ähnlich wie das Klassen-Tag, wird auch verwendet, um den enthaltenen Text mit CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Sprach-Tag (`<lang></lang>`)
  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante gehörig markiert wurde, unter Verwendung des in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definierten Formats.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare in eine WebVTT-Datei aufzunehmen.
Sie sind für diejenigen gedacht, die die Datei lesen, und sind für die Benutzer nicht sichtbar.
Sie können beispielsweise genutzt werden, um Kontaktdaten des Autors aufzuzeichnen, einen Überblick über die Struktur zu geben oder Platzhalter für Cues hinzuzufügen, die noch geschrieben werden müssen.

NOTE-Blöcke können überall in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke dürfen neue Zeilen enthalten, dürfen jedoch keine zwei aufeinanderfolgenden neuen Zeilen enthalten: Dies würde eine leere Zeile erzeugen, die das Ende des Blocks anzeigt.

Ein Kommentar darf den String `-->`, das Kaufmanns-Und-Zeichen (`&`) oder das Kleiner-als-Zeichen (`<`) nicht enthalten.
Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "zeichenreferenz")}} wie `&amp;` für das Kaufmanns-Und und `&lt;` für das Kleiner-als-Zeichen verwenden.
Es wird auch empfohlen, die Größer-als-Escape-Sequenz (`&gt;`) anstelle des Größer-als-Zeichens zu verwenden (`>`) um Verwechslungen mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Dem String `NOTE`.
- Einem Leerzeichen oder einer neuen Zeile.
- Null oder mehr Zeichen, außer den oben genannten.

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

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styling von Cues innerhalb einer WebVTT-Datei einzubetten.
Beachten Sie, dass diese genutzt werden können, um die Erscheinung und Größe der Cues zu stylen, nicht jedoch deren Position und Layout, die durch die [Cue-Einstellungen](#cue-einstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Cues können auch durch CSS-Styles gestylt werden, die durch das zugehörige [Dokument, das das Video-/Audioelement einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), geladen werden.

`STYLE`-Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Der String `STYLE` gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann einer neuen Zeile.
- Ein String, der die CSS-Styles definiert, um sie mittels des {{cssxref("::cue")}}-Pseudoelements zuzuordnen und anzuwenden.

Der Block darf den String `-->` nicht enthalten.
Er darf neue Zeilen enthalten, jedoch keine zwei aufeinanderfolgenden neuen Zeilen enthalten: Dies würde eine leere Zeile erzeugen, die das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten gezeigt.
Diese verwendet {{cssxref("::cue")}}, um eine Textfarbe auf allen Cue-Text anzuwenden und eine andere Textfarbe nur auf Text, der mit `<b></b>`-Tags markiert ist.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle in [Weitere Cue-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in _WebVTT API_ demonstrieren.

### Alle Cue-Nutzlast-Text abgleichen

Entsprechen Sie alle Cue-Nutzlast-Text mithilfe von {{cssxref("::cue")}}.

Das folgende `STYLE`-Block-Beispiel würde beispielsweise allen Cue-Text abgleichen und ihn gelb färben.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Eine Tag-Art abgleichen

Entsprechen Sie Cue-Text, der mit bestimmten [cue-Nutzlast-Text-Tags](#cue-nutzlast-text-tags) wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang` markiert ist, indem Sie das Tag in {{cssxref("::cue()")}} als Typselektor angeben.

Das folgende Block-Beispiel würde beispielsweise Cue-Nutzlast-Text mit `lang` als gelb abgleichen und jeden der anderen Tags als rot.

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

### Eine Klassenselektor abgleichen

Alle Tags abgleichen, die mit einem Klassenselektor in `::cue()` markiert sind.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde allen Text danach abgleichen, weil alle Tags die Klasse `myclass` haben.

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
::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Cue-Nutzlast-Text, markiert mit einem bestimmten Tag und Attribut, kann mit einem Attributselektor abgeglichen werden.

Betrachten Sie zum Beispiel die folgende WebVTT-Datei, die Text enthält, der mit den `v` und `lang` [cue-Nutzlast-Text-Tags](#cue-nutzlast-text-tags) mit Attributen versehen ist, um die spezielle Stimme ("Salame") und Sprachen anzugeben.

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

### Matching mit Pseudo-Klassen

Das vorherige Beispiel stilisierte Text für eine bestimmte Sprache mittels der Attributübereinstimmung.
Sie können Sprachen auch mithilfe der Pseudo-Klasse `:lang()` abgleichen, wie durch den folgenden `STYLE`-Block demonstriert wird.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Sie können in ähnlicher Weise mit den Pseudo-Klassen `:past` und `:future` übereinstimmen, um ein Karaoke-ähnliches Erlebnis zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudo-Klassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Einen Cue-ID abgleichen

Gegen eine bestimmte Cue-ID durch Angabe der ID innerhalb von {{cssxref("::cue()")}} abgleichen.

> [!NOTE]
> Zum Zeitpunkt des Schreibens scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Das folgende WebVTT-Datei-Beispiel sollte den Cue mit der Kennung `cue1` in grün stylen.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT-CSS auf dieselbe Weise wie auf HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen in einer Cue-ID maskiert werden:

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
