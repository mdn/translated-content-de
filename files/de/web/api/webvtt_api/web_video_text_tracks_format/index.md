---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: 98fe3467446419e4214147af8e9100f3f052a585
---

{{DefaultAPISidebar("WebVTT")}}

<!-- need to add info on region block -->

**Web Video Text Tracks Format** (**WebVTT**) ist ein Klartext-Dateiformat zur Darstellung von zeitgesteuerten Textspuren, die mit den Inhalten in {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen synchronisiert sind. Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Text-Overlays zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement assoziierten WebVTT-Dateien werden mit dem {{HTMLElement("track")}}-Element hinzugefügt — siehe [Anzeigen von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file). Ein Medienelement kann mit einer Anzahl von Dateien zusammenhängen, die jeweils unterschiedliche Arten zeitgesteuerter Daten wie geschlossene Untertitel, Untertitel oder Kapitelüberschriften darstellen, die in verschiedene Sprachumgebungen übersetzt wurden.

> [!NOTE]
> WebVTT-Inhalte können auch programmatisch mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Übersicht

WebVTT-Dateien haben einen MIME-Typ `text/vtt` und die Dateiendung `.vtt`. Der Inhalt muss mit {{Glossary("UTF-8", "UTF-8")}} kodiert sein.

Die Struktur eines WebVTT besteht aus den folgenden Komponenten, die teilweise optional sind, in dieser Reihenfolge:

- Ein Header, der aus einem optionalen Byte Order Mark (BOM) besteht — der Zeichenfolge `WEBVTT` — gefolgt von einem optionalen Text-Header, der durch ein oder mehrere Leer- oder Tabulatorzeichen getrennt ist (in WebVTT-Dateien sind Tabulatoren und Leerzeichen austauschbar).
- Eine oder mehrere leere Zeilen, die jeweils zwei aufeinanderfolgende Zeilenumbrüche entsprechen.
- Null oder mehr `STYLE`-, `REGION`- oder `NOTE`-Blöcke, die durch eine oder mehrere leere Zeilen getrennt sind.
- Null oder mehr Cue- oder `NOTE`-Blöcke, die durch eine oder mehrere leere Zeilen getrennt sind.

Eine einfache WebVTT-Datei, die die Zeichenfolge `WEBVTT` (aber keinen Header-Text), einen NOTE-Block und zwei Cues enthält, wird unten gezeigt:

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

## WebVTT Header

WebVTT-Dateien beginnen mit einem Header-Block, der Folgendes enthält:

- Ein optionales Byte Order Mark (BOM), welches das Unicode-Zeichen `U+FEFF` ist.
- Die Zeichenfolge `WEBVTT`.
- Einen optionalen Text-Header rechts von `WEBVTT`.

  - Es muss mindestens ein Leerzeichen nach `WEBVTT` vorhanden sein.
  - Sie könnten diesen Header verwenden, um eine Beschreibung zur Datei hinzuzufügen.
  - Sie dürfen im Text-Header alles verwenden außer Zeilenumbrüche oder die Zeichenfolge `-->`.

Der `WEBVTT`-String ist der einzige erforderliche Teil der WebVTT-Datei, daher würde die einfachste mögliche WebVTT-Datei so aussehen:

```plain
WEBVTT
```

Das Beispiel unten zeigt einen Header mit Text. Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulatorzeichen getrennt sein muss.

```plain
WEBVTT This file has no cues.
```

## WebVTT-Cues

Ein Cue definiert eine einzelne Bildunterschrift, einen Untertitel oder einen anderen Textblock, der über ein bestimmtes Zeitintervall angezeigt wird. Cues müssen nach dem Header und den `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Ein optionaler Cue-Identifier gefolgt von einem Zeilenumbruch.
- Cue-Timings, die den Zeitraum angeben, in dem der Payload-Text angezeigt werden soll. Diese werden optional von Cue-Einstellungen gefolgt, mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einem einzigen Zeilenumbruch.
- Der Cue-Payload-Text, der über mehrere Zeilen hinweg reichen kann und durch eine leere Zeile beendet wird.

Hier ist ein Beispiel für einen einfachen Cue. Die erste Zeile gibt die Anzeige-Start- und Endzeiten des Cues an, getrennt durch die Zeichenfolge `-->`. Die zweite Zeile definiert den Text, der angezeigt werden soll.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

Der nächste Cue ist etwas komplexer. Er beginnt mit einem Cue-Identifikator — `1 - Title Crawl` —, der verwendet werden kann, um den Cue in JavaScript und CSS zu referenzieren. Er verfügt auch über Cue-Einstellungen nach den Cue-Timings, um die Cue-Position festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Beachten Sie, dass das Ergebnis Zeilenumbrüche im Payload-Text respektiert, was Ihnen ermöglicht, Aufzählungslisten mit Bindestrich (`-`) Zeichen zu erstellen, wie gezeigt. Im Allgemeinen sollten Sie diese Umbrüche nur einfügen, wenn dies erforderlich ist, da der Browser den Text bei Bedarf automatisch umbricht.

Es ist wichtig, im Cue keine "zusätzlichen" Leerzeilen zu verwenden, zum Beispiel zwischen der Timings-Zeile und dem Cue-Payload oder innerhalb des Payloads. Dies liegt daran, dass eine Leerzeile den aktuellen Cue beendet.

Jeder Teil des Cues wird in den folgenden Abschnitten ausführlicher erklärt.

### Cue-Identifier

Der Identifier ist ein Name, der den Cue identifiziert. Er kann verwendet werden, um den Cue aus JavaScript oder CSS zu referenzieren. Er darf keinen Zeilenumbruch enthalten und nicht die Zeichenfolge `-->`. Er muss mit einem einzigen Zeilenumbruch enden. Identifier müssen nicht eindeutig sein, es ist jedoch üblich, sie zu nummerieren (z. B. 1, 2, 3).

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

Ein Cue-Timing gibt das Zeitintervall an, wann der Cue gezeigt wird. Es hat eine Start- und Endzeit, dargestellt durch Zeitstempel. Die Endzeit muss größer als die Startzeit sein, und die Startzeit muss größer oder gleich allen vorherigen Startzeiten sein.

Cues dürfen überlappende Timings haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Element/track#kind) ist `chapters`).

Jedes Cue-Timing enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Die Zeichenfolge `-->`.
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, der größer sein muss als die Startzeit.

Die Zeitstempel können in einem der folgenden zwei Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wo die Komponenten wie folgt definiert sind:

- `hh`
  - : Stellt Stunden dar und muss mindestens zwei Stellen haben. Es kann mehr als zwei Stellen haben (z. B. `9999:00:00.000`).
- `mm`
  - : Stellt Minuten dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Stellt Sekunden dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Stellt Millisekunden dar und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Beispiele für Cue-Timings:

- Einfache Cue-Timing-Beispiele

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

Cue-Einstellungen sind optionale Komponenten, die den Cue-Payload-Text über das Video positionieren. Dies umfasst horizontale und vertikale Positionen. Null oder mehr Cue-Einstellungen können angegeben und in beliebiger Reihenfolge verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden rechts von den Cue-Timings hinzugefügt. Es müssen ein oder mehrere Leerzeichen zwischen dem Cue-Timing und der ersten Einstellung sowie zwischen jeder Einstellung vorhanden sein. Ein Doppelpunkt trennt den Namen und den Wert der Einstellung. Die Einstellungen sind case-sensitive; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal statt horizontal angezeigt wird, beispielsweise in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Der Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Zeile des Cues, wie sie im Video erscheint. Positive Zahlen werden von oben nach unten gezählt und negative Zahlen von unten nach oben.
    - Ein Prozentwert
      - : Eine ganze Zahl (d. h. ohne Dezimalstellen) zwischen 0 und 100 einschließlich, die mit einem Prozentzeichen (%) folgen muss.

    | Line        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `line:0`    | oben               | rechts        | links         |
    | `line:-1`   | unten              | links         | rechts        |
    | `line:0%`   | oben               | rechts        | links         |
    | `line:100%` | unten              | links         | rechts        |

- `position`

  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheint. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheint. Der Wert ist ein Prozentwert zwischen 0 und 100 inklusive.

    | Position        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | --------------- | ------------------ | ------------- | ------------- |
    | `position:0%`   | links              | oben          | oben          |
    | `position:100%` | rechts             | unten         | unten         |

- `size`

  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentwert zwischen 0 und 100 inklusive.

    | Size        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `size:100%` | volle Breite       | volle Höhe    | volle Höhe    |
    | `size:50%`  | halbe Breite       | halbe Höhe    | halbe Höhe    |

- `align`

  - : Gibt die Ausrichtung des Textes an. Der Text wird innerhalb des durch die Größen-Cue-Einstellung angegebenen Bereichs ausgerichtet, wenn diese eingestellt ist.

    | Align          | `vertical` omitted   | `vertical:rl`      | `vertical:lr`      |
    | -------------- | -------------------- | ------------------ | ------------------ |
    | `align:start`  | links                | oben               | oben               |
    | `align:center` | horizontal zentriert | vertikal zentriert | vertikal zentriert |
    | `align:end`    | rechts               | unten              | unten              |

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

### Cue-Payload

Der Payload ist der Teil, in dem der Cue-Inhalt definiert ist, wie der Untertitel oder der geschlossene Untertiteltext. Er darf Zeilenumbrüche enthalten, aber keine zwei aufeinanderfolgenden Zeilenumbrüche: dies würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Ein Cue-Text-Payload darf nicht die Zeichenfolge `-->`, das Kaufmannsund-Zeichen (`&`) oder das Kleiner-Zeichen (`<`) enthalten. Falls erforderlich, können Sie stattdessen einen {{Glossary("character_reference", "Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für das Kaufmannsund-Zeichen und `&lt;` für das Kleiner-Zeichen verwenden. Es wird auch empfohlen, dass Sie die Escape-Sequenz `&gt;` für das Größer-Zeichen anstelle des Größer-Zeichens (`>`) verwenden, um Verwechslungen mit Tags zu vermeiden. Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser jede {{Glossary("character_reference", "Zeichenreferenz")}} in Cues, Notizen oder anderem Text zulassen. Ältere Browserversionen unterstützen möglicherweise nur den folgenden Teil der benannten Zeichenreferenzen:

| Name                      | Zeichen | Escape-Sequenz |
| ------------------------- | ------- | -------------- |
| Kaufmannsund              | `&`     | `&amp;`        |
| Kleiner-als-Zeichen       | `<`     | `&lt;`         |
| Größer-als-Zeichen        | `>`     | `&gt;`         |
| Links-nach-rechts-Zeichen | _keine_ | `&lrm;`        |
| Rechts-nach-links-Zeichen | _keine_ | `&rlm;`        |
| Geschütztes Leerzeichen   |         | `&nbsp;`       |

### Cue-Payload-Text-Tags

Eine Anzahl von Tags, wie `<b>`, kann verwendet werden, um Text innerhalb eines Cues zu markieren und zu stylen. Jedoch, wenn die WebVTT-Datei in einem {{HTMLElement("track")}}-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Element/track#kind) `chapters` ist, können Sie keine Tags verwenden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen. Der Zeitstempel muss größer sein als der Startzeitstempel des Cues, größer als alle vorherigen Zeitstempel im Cue-Payload und kleiner als der Endzeitstempel des Cues. Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende des Payloads, falls sich kein weiterer Zeitstempel im Payload befindet. Jeder Text vor dem _aktiven Text_ im Payload ist _vorheriger Text_. Jeder Text über den _aktiven Text_ hinaus ist _zukünftiger Text_.

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

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind, und benötigen öffnende und schließende Tags (z. B., `<b>text</b>`). Mit diesen Tags markierter Text kann in [`STYLE`-Blöcken](#style-blöcke) mit dem {{cssxref("::cue")}}-Pseudo-Element formatiert werden.

- Kursiv-Tag (`<i></i>`)

  - : Italicisiere den enthaltenen Text.

    ```xml
    <i>text</i>
    ```

- Fettschrift-Tag (`<b></b>`)

  - : Fette den enthaltenen Text.

    ```xml
    <b>text</b>
    ```

- Unterstreichen-Tag (`<u></u>`)

  - : Unterstreiche den enthaltenen Text.

    ```xml
    <u>text</u>
    ```

- Klassen-Tag (`<c></c>`)

  - : Füge dem enthaltenen Text eine Klasse zur Auswahl über CSS hinzu.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)

  - : Wird mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d. h., kleine annotative Zeichen oberhalb anderer Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)

  - : Wird mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://en.wikipedia.org/wiki/Ruby_character) (d. h., kleine annotative Zeichen oberhalb anderer Zeichen) anzuzeigen.

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Stimmen-Tag (`<v></v>`)

  - : Ähnlich wie Klassen-Tag, auch verwendet, um den enthaltenen Text mit CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Sprach-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als zu einer bestimmten Sprache oder Sprachvariante gehörend markiert wurde, und verwendet das im {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definierte Format.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen. Sie sind für jene vorgesehen, die die Datei lesen und sind für Benutzer nicht sichtbar. Beispielsweise könnten Sie sie verwenden, um Kontaktdetails des Autors zu verzeichnen, eine Übersicht über Ihre Struktur zu geben oder Platzhalter für Cues hinzuzufügen, die noch geschrieben werden müssen.

Sie können überall in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke dürfen Zeilenumbrüche enthalten, aber keine zwei aufeinanderfolgenden Zeilenumbrüche: dies würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Ein Kommentar darf nicht die Zeichenfolge `-->`, das Kaufmannsund-Zeichen (`&`) oder das Kleiner-Zeichen (`<`) enthalten. Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{Glossary("character_reference", "Zeichenreferenz")}} wie `&amp;` für das Kaufmannsund-Zeichen und `&lt;` für das Kleiner-Zeichen verwenden. Es wird auch empfohlen, dass Sie die Escape-Sequenz `&gt;` statt des Größer-Zeichens (`>`) verwenden, um Verwechslungen mit Tags zu vermeiden.

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

## STYLE-Blöcke

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Stile von Cues innerhalb einer WebVTT-Datei einzubetten. Beachten Sie, dass diese verwendet werden, um das Erscheinungsbild und die Größe der Cues zu stylen, jedoch nicht deren Position und Layout, die durch die [Cue-Einstellungen](#cue-einstellungen) gesteuert werden.

> [!NOTE]
> WebVTT-Cues können auch von CSS-Stilen, die durch das zugehörige [Dokument, das das Video/Audio-Element einbettet](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet), geladen werden, abgeglichen werden.

`STYLE`-Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Die Zeichenfolge `STYLE` gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann einem Zeilenumbruch.
- Ein String, der die anzuwendenen CSS-Stile definiert, unter Verwendung des {{cssxref("::cue")}}-Pseudo-Elements.

Der Block darf nicht die Zeichenfolge `-->` enthalten. Er darf Zeilenumbrüche enthalten, jedoch nicht zwei aufeinanderfolgende Zeilenumbrüche: dies würde eine Leerzeile erzeugen, die das Ende des Blocks anzeigt.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten gezeigt. Dies verwendet {{cssxref("::cue")}}, um eine Textfarbe für allen Cue-Text anzuwenden und eine andere Textfarbe nur für Text, der mit `<b></b>`-Tags markiert ist.

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
> Es gibt Live-Beispiele, die viele der folgenden Fälle im [Mehr Cue-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) im _WebVTT API_ veranschaulichen.

### Alle Cue-Payload-Texte abgleichen

Abgleich auf allen Cue-Payload-Text unter Verwendung von {{cssxref("::cue")}}.

Beispielsweise, der folgende `STYLE`-Block würde allen Cue-Text abgleichen und ihn gelb färben.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Einen Tag-Typ abgleichen

Cue-Text, der mit bestimmten [Cue-Payload-Text-Tags](#cue-payload-text-tags) markiert ist, wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v`, und `lang`, durch Angabe des Tags in {{cssxref("::cue()")}} als Typselektor abgleichen.

Beispielsweise würde der folgende Block Cue-Payload-Text abgleichen, der mit `lang` als gelb und jede der anderen Tags als rot markiert ist.

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

### Ein Klassenselektor abgleichen

Alle Tags, die mit einem Klassenselektor bei `::cue()` markiert sind, abgleichen.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde den Text danach abgleichen, weil alle Tags die Klasse `myclass` haben.

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

Um ein bestimmtes Tag und eine Klasse auszuwählen, müssen Sie beide bei `::cue()` spezifizieren:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Cue-Payload-Text, der mit einem bestimmten Tag und Attribut markiert ist, kann unter Verwendung eines Attributselektors abgeglichen werden.

Beispielsweise, betrachten Sie die folgende WebVTT-Datei, die Text verwendet, der mit den `v` und `lang` [Cue-Payload-Text-Tags](#cue-payload-text-tags) markiert ist, unter Verwendung von Attributen, um die spezielle Stimme ("Salame") und Sprachen anzugeben.

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

### Pseudo-Klassen abgleichen

Das vorhergehende Beispiel stylte Text für eine bestimmte Sprache unter Verwendung von Attributabgleich. Sie können auch Sprachen mit der Pseudo-Klasse `:lang()` abgleichen, wie durch den `STYLE`-Block unten demonstriert.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Auf ähnliche Weise können Sie mit den Pseudo-Klassen `:past` und `:future` abgleichen, um eine karaoke-ähnliche Erfahrung zu schaffen.

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

Gegen eine bestimmte Cue-`id` abgleichen, indem die `id` innerhalb {{cssxref("::cue()")}} spezifiziert wird.

> [!NOTE]
> Zum Zeitpunkt der Erstellung dieser Informationen scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Cue mit der Kennung `cue1` grün stylen.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Beachten Sie, dass Escape-Sequenzen im WebVTT-CSS auf die gleiche Weise wie HTML-Seiten verwendet werden. Das folgende Beispiel zeigt, wie Leerzeichen in einem Cue-Identifier umgangen werden können:

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

- Die CSS-Pseudos-Elemente [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue)
