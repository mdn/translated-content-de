---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebVTT")}}

<!-- need to add info on region block -->

**Web Video Text Tracks Format** (**WebVTT**) ist ein reines Textdateiformat zur Anzeige von zeitgesteuerten Textspuren, die mit Inhalten in {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen synchronisiert sind.
Diese können beispielsweise verwendet werden, um Untertitel und Textüberlagerungen mit Untertiteln zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verknüpften WebVTT-Dateien werden mithilfe des {{HTMLElement("track")}}-Elements hinzugefügt – siehe [Anzeige von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit einer Reihe von Dateien verknüpft sein, die jeweils eine andere Art von zeitgesteuerten Daten darstellen, z. B. Untertitel, Überschriften oder Kapitelüberschriften, die in verschiedene Orte übersetzt werden.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Überblick

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateierweiterung `.vtt`.
Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} kodiert werden.

Die Struktur eines WebVTT besteht aus den folgenden, teilweise optionalen Komponenten in dieser Reihenfolge:

- Ein Header, bestehend aus einem optionalen Byte-Reihenfolge-Marker (BOM) – der Zeichenfolge `WEBVTT` – gefolgt von einem optionalen Texthauptteil, der durch ein oder mehrere Leer- oder Tabulatorzeichen getrennt ist (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere Leerzeilen, von denen jede zwei aufeinanderfolgende Zeilenumbrüche entspricht.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, getrennt durch ein oder mehrere Leerzeilen.
- Null oder mehr Hinweisspuren oder `NOTE`-Blöcke, getrennt durch ein oder mehrere Leerzeilen.

Nachfolgend sehen Sie eine einfache WebVTT-Datei, die den `WEBVTT`-String (aber keinen Header-Text), einen NOTE-Block und zwei Hinweise enthält:

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

- Ein optionaler Byte-Reihenfolge-Marker (BOM), was dem Unicode-Zeichen `U+FEFF` entspricht.
- Die Zeichenfolge `WEBVTT`.
- Einen optionalen Texthauptteil rechts von `WEBVTT`.

  - Es muss mindestens ein Leerzeichen nach `WEBVTT` folgen.
  - Sie könnten diesen Header verwenden, um der Datei eine Beschreibung hinzuzufügen.
  - Sie dürfen alles im Texthauptteil verwenden, außer Zeilenumbrüche oder die Zeichenfolge `-->`.

Der `WEBVTT`-String ist der einzige erforderliche Teil der WebVTT-Datei. Somit würde die einfachste mögliche WebVTT-Datei folgendermaßen aussehen:

```plain
WEBVTT
```

Das Beispiel unten zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulatorzeichen getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Hinweise

Ein Hinweis definiert eine einzelne Bildunterschrift, einen Untertitel oder einen anderen Textblock, der über ein bestimmtes Zeitintervall angezeigt wird.
Hinweise müssen nach dem Header und nach allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Hinweis besteht aus drei oder mehr Zeilen:

- Ein optionaler Hinweiskennzeichner gefolgt von einem Zeilenumbruch.
- Hinweistimings, die den Zeitbereich angeben, in dem der Nutzlasttext angezeigt werden soll. Diese werden optional durch Hinweiseinstellungen gefolgt, mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einem einzelnen Zeilenumbruch.
- Der Nutzlasttext des Hinweises, der mehrere Zeilen umfassen kann, und durch eine leere Zeile abgeschlossen wird.

Hier ist ein Beispiel für einen einfachen Hinweis.
Die erste Zeile gibt die Start- und Endzeiten der Anzeige des Hinweises an, getrennt durch die Zeichenfolge `-->`.
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Hinweis ist etwas komplizierter.
Er beginnt mit einem Hinweiskennzeichner – `1 - Title Crawl` –, der zum Referenzieren des Hinweises in JavaScript und CSS verwendet werden kann.
Er weist außerdem Hinweistimings auf, um die Position des Hinweises festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass das Ergebnis Zeilenumbrüche im Nutzlasttext respektiert, was es ermöglicht, Aufzählungslisten unter Verwendung von Bindestrichen (`-`) wie gezeigt zu erstellen.
Im Allgemeinen sollten Sie diese Umbrüche nur einfügen, wenn sie benötigt werden, da der Browser den Text entsprechend umbricht.

Es ist wichtig, innerhalb eines Hinweises keine „extra“ Leerzeilen zu verwenden, beispielsweise zwischen den Timings und dem Nutzlasttext oder innerhalb des Nutzlasttextes.
Dies ist so, weil eine leere Zeile den aktuellen Hinweis beendet.

Jeder Teil des Hinweises wird in den folgenden Abschnitten detaillierter erklärt.

### Hinweiskennzeichner

Der Kennzeichner ist ein Name, der den Hinweis identifiziert. Er kann verwendet werden, um den Hinweis von JavaScript oder CSS aus zu referenzieren. Er darf keinen Zeilenumbruch enthalten und nicht die Zeichenfolge `-->` enthalten. Er muss mit einer einzigen neuen Zeile enden. Kennzeichner müssen nicht eindeutig sein, es ist jedoch üblich, sie zu nummerieren (z. B. 1, 2, 3).

Das Beispiel unten zeigt eine Datei mit mehreren Hinweisen, die Kennzeichner enthalten:

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

### Hinweistimings

Ein Hinweistiming zeigt das Zeitintervall an, wann der Hinweis angezeigt wird. Es hat eine Start- und Endzeit, die durch Zeitstempel dargestellt werden. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Hinweise können überlappende Timings haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Element/track#kind) ist `chapters`).

Jedes Hinweisztiming enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Die Zeichenfolge `-->`.
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, die größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden zwei Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wo die Komponenten wie folgt definiert sind:

- `hh`
  - : Steht für Stunden und muss mindestens zwei Ziffern haben. Es kann mehr als zwei Ziffern haben (z. B. `9999:00:00.000`).
- `mm`
  - : Steht für Minuten und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Steht für Sekunden und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Steht für Millisekunden und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Beispiele für Hinweisztimings:

- Grundlegende Beispiele für Hinweisztimings

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Beispiele für überlappende Hinweisztimings

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Beispiele für nicht überlappende Hinweisztimings

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Hinweiseinstellungen

Hinweiseinstellungen sind optionale Komponenten, die den Nutzlasttext über dem Video positionieren. Dazu gehören horizontale und vertikale Positionen. Null oder mehr Hinweiseinstellungen können in beliebiger Reihenfolge angegeben und verwendet werden, solange jede Einstellung nicht öfter als einmal verwendet wird.

Hinweiseinstellungen werden rechts von den Hinweistimings hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen dem Hinweisztiming und der ersten Einstellung und zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind case-sensitive; verwenden Sie Kleinbuchstaben wie angezeigt. Es gibt fünf verfügbare Hinweiseinstellungen:

- `vertical`
  - : Gibt an, dass der Text anstelle von horizontal vertikal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Sein Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Hinweises, wie sie auf dem Video erscheint. Positive Zahlen werden von oben nach unten und negative Zahlen von unten nach oben gezählt.
    - Ein Prozentsatz
      - : Eine Ganzzahl (d. h. ohne Dezimalstellen) zwischen 0 und 100, die durch ein Prozentzeichen (%) gefolgt werden muss.

    | Linie       | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
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

  - : Gibt die Ausrichtung des Texts an. Der Text wird innerhalb des durch die Größeneinstellung gegebenen Raumes ausgerichtet, falls dieser gesetzt ist.

    | Ausrichten     | `vertical` weggelassen | `vertical:rl`      | `vertical:lr`      |
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

### Hinweisnutzlast

Die Nutzlast ist, wo der Hinweisinhalt definiert wird, wie der Untertitel- oder der Untertext.
Er kann neue Zeilen enthalten, darf jedoch nicht zwei aufeinanderfolgende neue Zeilen enthalten: Dies würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Eine Hinweistextnutzlast darf nicht die Zeichenfolge `-->`, das Kaufmanns-Und-Zeichen (`&`) oder das kleiner-als-Zeichen (`<`) enthalten.
Falls nötig, können Sie stattdessen einen {{Glossary("character_reference", "Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für den Kaufmanns-Und und `&lt;` für weniger-als verwenden.
Es wird auch empfohlen, die größer-als-Escape-Sequenz `&gt;` anstelle des größer-als-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.
Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser alle {{Glossary("character_reference", "Zeichenreferenzen")}} in Hinweisen, Notizen oder anderem Text erlauben.
Ältere Browserversionen unterstützen möglicherweise nur den folgenden Teil der benannten Zeichenreferenzen:

| Name                      | Zeichen  | Escape-Sequenz |
| ------------------------- | -------- | -------------- |
| Kaufmanns-Und             | `&`      | `&amp;`        |
| Weniger-als               | `<`      | `&lt;`         |
| Größer-als                | `>`      | `&gt;`         |
| Links-nach-rechts Zeichen | _keines_ | `&lrm;`        |
| Rechts-nach-links Zeichen | _keines_ | `&rlm;`        |
| Geschütztes Leerzeichen   |          | `&nbsp;`       |

### Tag für Hinweisnutzlasttext

Eine Anzahl von Tags, wie zum Beispiel `<b>`, kann verwendet werden, um Text innerhalb eines Hinweises zu markieren und zu formatieren.
Falls jedoch die WebVTT-Datei in einem {{HTMLElement("track")}}-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Element/track#kind) `chapters` ist, können Sie keine Tags verwenden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-Stil-Untertitel zu ermöglichen.
    Der Zeitstempel muss größer sein als der Startzeitstempel des Hinweises, größer als jeder vorherige Zeitstempel in der Nutzlast des Hinweises und kleiner als der Endzeitstempel des Hinweises.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende der Nutzlast, wenn kein weiterer Zeitstempel in der Nutzlast vorhanden ist.
    Jeder Text vor dem _aktiven Text_ in der Nutzlast ist _vorhergehender Text_.
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

Die folgenden Tags sind die in einem Hinweis erlaubten HTML-Tags und erfordern öffnende und schließende Tags (z.B. `<b>text</b>`).
Text, der mit diesen Tags formatiert wurde, kann in [`STYLE`-Blöcken](#style-blöcke) mit dem {{cssxref("::cue")}}-Pseudoelement formatiert werden.

- Kursiv-Tag (`<i></i>`)

  - : Kursiviert den enthaltenen Text.

    ```xml
    <i>text</i>
    ```

- Fettschrift-Tag (`<b></b>`)

  - : Macht den enthaltenen Text fett.

    ```xml
    <b>text</b>
    ```

- Unterstreichungs-Tag (`<u></u>`)

  - : Unterstreicht den enthaltenen Text.

    ```xml
    <u>text</u>
    ```

- Klassentag (`<c></c>`)

  - : Fügt dem enthaltenen Text eine Klasse zur Auswahl über CSS hinzu.

    ```xml
    <c.classname>text</c>
    ```

- Rubintag (`<ruby></ruby>`)

  - : Wird mit Rubintext-Tags verwendet, um [Rubinzeichen](https://en.wikipedia.org/wiki/Ruby_character) anzuzeigen (d.h. kleine annotative Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Rubintext-Tag (`<rt></rt>`)

  - : Wird mit Rubintags verwendet, um [Rubinzeichen](https://en.wikipedia.org/wiki/Ruby_character) anzuzeigen (d.h. kleine annotative Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Sprechertag (`<v></v>`)

  - : Ähnlich wie das Klassentag, wird auch verwendet, um den enthaltenen Text mit CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Sprach-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante gehörend markiert ist, unter Verwendung des Formats, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen.
Sie sind für diejenigen gedacht, die die Datei lesen, und werden von den Benutzern nicht gesehen.
Zum Beispiel könnten Sie sie verwenden, um Autor-Kontaktdetails zu notieren, einen Überblick über Ihre Struktur zu geben oder Platzhalter für noch zu schreibende Hinweise hinzuzufügen.

Sie können überall nach dem Header in der WebVTT-Datei verwendet werden.

NOTE-Blöcke können neue Zeilen enthalten, dürfen jedoch nicht zwei aufeinanderfolgende neue Zeilen enthalten: Dies würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Ein Kommentar kann nicht die Zeichenfolge `-->`, das Kaufmanns-Und-Zeichen (`&`) oder das kleiner-als-Zeichen (`<`) enthalten.
Falls Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie `&amp;` für das Kaufmanns-Und und `&lt;` für das kleiner-als-Zeichen verwenden.
Es wird zudem empfohlen, die größer-als-Escape-Sequenz (`&gt;`) anstelle des größer-als-Zeichens (`>`) zu verwenden, um Verwirrungen mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Die Zeichenfolge `NOTE`.
- Ein Leerzeichen oder eine neue Zeile.
- Null oder mehr Zeichen als die oben genannten.

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

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Styling von Hinweisen innerhalb einer WebVTT-Datei einzubetten.
Beachten Sie, dass diese zum Stylen des Erscheinungsbildes und der Größe der Hinweise verwendet werden, jedoch nicht für deren Positionierung und Layout, die durch die [Hinweiseinstellungen](#hinweiseinstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Hinweise können auch durch CSS-Stile, die von dem zugehörigen [Dokument, das das Video-/Audio-Element einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), abgeglichen werden.

STYLE-Blöcke müssen vor allen Hinweisblöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Die Zeichenfolge `STYLE` gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann einem Zeilenumbruch.
- Eine Zeichenfolge, die die CSS-Stile zum Abgleichen und Anwenden unter Verwendung des {{cssxref("::cue")}} Pseudoelements definiert.

Der Block darf nicht die Zeichenfolge `-->` enthalten.
Er kann neue Zeilen enthalten, aber nicht zwei aufeinanderfolgende neue Zeilen: dies würde eine Leerzeile erzeugen, welche das Ende des Blocks anzeigt.

Nachfolgend ist eine einfache WebVTT-Datei mit zwei STYLE-Blöcken zu sehen.
Diese verwendet {{cssxref("::cue")}} zum Anwenden einer Textfarbe auf allen Hinweistext und einer anderen Textfarbe nur auf Text, der mit `<b></b>`-Tags markiert ist.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle demonstrieren, in [Mehr Hinweise-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in _WebVTT API_.

### Abgleichen aller Hinweisnutzlasttexte

Abgleichen sämtlicher Hinweisnutzlasttexte mit {{cssxref("::cue")}}.

Zum Beispiel würde der folgende `STYLE`-Block allen Hinweistext abgleichen und ihn gelb einfärben.

```plain
STYLE
cue {
  color: yellow;
}
```

### Abgleichen eines Tag-Typs

Abgleichen von Hinweistext, der mit bestimmten [Hinweisnutzlasttext-Tags](#tag_für_hinweisnutzlasttext), wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang` markiert ist, indem das Tag in {{cssxref("::cue()")}} als Typ-Selektor spezifiziert wird.

Zum Beispiel, der folgende Block würde Hinweisnutzlasttext, der mit `lang` markiert ist, als gelb, und jedes der anderen Tags als rot abgleichen.

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

### Abgleichen eines Klassen-Selectors

Abgleichen aller mit einem Klassen-Selektor in `::cue()` markierten Tags.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde allen Text, der folgt, abgleichen, weil alle Tags die Klasse `myclass` haben.

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

Um ein bestimmtes Tag und Klasse auszuwählen, müssen Sie beides in `::cue()` spezifizieren:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Abgleichen eines Attributs

Hinweisnutzlasttext, der mit einem bestimmten Tag und Attribut markiert ist, kann mit einem Attribut-Selektor abgeglichen werden.

Zum Beispiel betrachten Sie die folgende WebVTT-Datei, die Text markiert hat, der die `v` und `lang` [Hinweisnutzlasttext-Tags](#tag_für_hinweisnutzlasttext), mit Attributen verwendet, um die bestimmte Stimme ("Salame") und Sprachen zu spezifizieren.

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

### Abgleichen unter Verwendung von Pseudoklassen

Das vorherige Beispiel stilisierte Text für eine bestimmte Sprache, indem Attributübereinstimmungen verwendet wurden.
Sie können Sprachen auch durch die `:lang()` Pseudoklasse abgleichen, wie im folgenden `STYLE`-Block demonstriert.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Sie können ähnliche Abgleiche mit den Pseudoklassen `:past` und `:future` erstellen, um ein Karaoke-ähnliches Erlebnis zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudoklassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Abgleichen einer Hinweis-ID

Übereinstimmung mit einer spezifischen Hinweis-`id`, indem die `id` innerhalb von {{cssxref("::cue()")}} spezifiziert wird.

> [!NOTE]
> Zum Zeitpunkt der Erstellung scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Hinweis mit der Kennung `cue1` in grün stilisieren.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT CSS auf die gleiche Weise wie HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie man Leerzeichen in einer Hinweiskennzeichnung maskiert:

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
