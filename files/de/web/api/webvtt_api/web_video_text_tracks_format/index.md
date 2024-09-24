---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebVTT")}}

<!-- need to add info on region block -->

**Web Video Text Tracks Format** (**WebVTT**) ist ein Klartext-Dateiformat zur Anzeige von zeitlich abgestimmten Textspuren, die mit Inhalten in {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen synchronisiert sind.
Diese können beispielsweise verwendet werden, um geschlossene Untertitel und Textüberlagerungen zu einem {{HTMLElement("video")}} hinzuzufügen.

Die mit einem Medienelement verbundenen WebVTT-Dateien werden mithilfe des {{HTMLElement("track")}}-Elements hinzugefügt – siehe [Anzeigen von VTT-Inhalten, die in einer Datei definiert sind](/de/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
Ein Medienelement kann mit einer Vielzahl von Dateien verbunden sein, die jeweils verschiedene Arten von zeitgesteuerten Daten repräsentieren, wie z.B. geschlossene Untertitel, Überschriften oder Kapitelüberschriften, in verschiedene Sprachen übersetzt.

> [!NOTE]
> WebVTT-Inhalte können auch programmgesteuert mithilfe der [WebVTT-API](/de/docs/Web/API/WebVTT_API) erstellt und verwaltet werden.

## Übersicht

WebVTT-Dateien haben einen MIME-Typ von `text/vtt` und die Dateierweiterung `.vtt`.
Der Inhalt muss mit {{Glossary("UTF-8")}} kodiert sein.

Die Struktur einer WebVTT besteht aus folgenden Komponenten, von denen einige optional sind, in dieser Reihenfolge:

- Ein Header, der aus einem optionalen Byte Order Mark (BOM) besteht – die Zeichenkette "`WEBVTT`" – gefolgt von einem optionalen Texthintergrund, der durch ein oder mehrere Leer- oder Tabulatorzeichen getrennt ist (in WebVTT-Dateien sind Tabs und Leerzeichen austauschbar).
- Eine oder mehrere leere Zeilen, von denen jede zwei aufeinander folgende Zeilenumbrüche ist.
- Null oder mehr `STYLE`, `REGION` oder `NOTE`-Blöcke, getrennt durch eine oder mehrere leere Zeilen.
- Null oder mehr Cues oder `NOTE`-Blöcke, getrennt durch eine oder mehrere leere Zeilen.

Eine einfache WebVTT-Datei mit dem `WEBVTT`-String (aber ohne Headertext), einem NOTE-Block und zwei Cues wird nachfolgend gezeigt:

```plain
WEBVTT

NOTE Dies ist ein mehrzeiliger Notizblock.
Diese werden für Kommentare des Autors verwendet.
Zwei Cue-Blöcke sind unten definiert.

00:01.000 --> 00:04.000
Trinken Sie niemals flüssigen Stickstoff.

00:05.000 --> 00:09.000
Weil:
- Es wird Ihren Magen perforieren.
- Sie könnten sterben.
```

Die folgenden Abschnitte erklären die Teile der Datei, einschließlich derer, die im obigen Beispiel nicht verwendet werden.

## WebVTT-Header

WebVTT-Dateien beginnen mit einem Header-Block, der Folgendes enthält:

- Ein optionales Byte Order Mark (BOM), das das Unicode-Zeichen `U+FEFF` ist.
- Die Zeichenkette "`WEBVTT`".
- Ein optionaler Texthintergrund rechts von `WEBVTT`.

  - Es muss mindestens ein Leerzeichen nach `WEBVTT` vorhanden sein.
  - Sie könnten diesen Header verwenden, um der Datei eine Beschreibung hinzuzufügen.
  - Sie dürfen im Texthintergrund alles verwenden, außer Zeilenumbrüchen oder der Zeichenkette "`-->`".

Der `WEBVTT`-String ist der einzige erforderliche Teil der WebVTT-Datei, sodass die einfachste mögliche WebVTT-Datei folgendermaßen aussehen würde:

```plain
WEBVTT
```

Das folgende Beispiel zeigt einen Header mit Text.
Beachten Sie, dass dieser Text durch mindestens ein Leerzeichen oder Tabulatorzeichen getrennt sein muss.

```plain
WEBVTT Diese Datei hat keine Cues.
```

## WebVTT-Cues

Ein Cue definiert einen einzelnen Untertitel, eine Unterschrift oder einen anderen Textblock, der über einen bestimmten Zeitraum angezeigt werden soll.
Cues müssen nach dem Header und allen `STYLE`- oder `REGION`-Blöcken erscheinen.

Jeder Cue besteht aus drei oder mehr Zeilen:

- Eine optionale Cue-Identifikation gefolgt von einem Zeilenumbruch.
- Cue-Zeitgebung, die den Zeitbereich angibt, in dem der Nutztext angezeigt werden soll. Diese werden optional von Cue-Einstellungen gefolgt, mit mindestens einem Leerzeichen vor der ersten Einstellung und zwischen jeder Einstellung, gefolgt von einem einzelnen Zeilenumbruch.
- Der Cue-Nutztext, der sich über mehrere Zeilen erstrecken kann und durch eine leere Zeile beendet wird.

Hier ist ein Beispiel für einen einfachen Cue.
Die erste Zeile gibt die Start- und Endzeiten der Anzeige des Cues an, getrennt durch die Zeichenkette "`-->`".
Die zweite Zeile definiert den anzuzeigenden Text.

```plain
00:01.000 --> 00:04.000
Trinken Sie niemals flüssigen Stickstoff.
```

Der nächste Cue ist etwas komplizierter.
Er beginnt mit einer Cue-Identifikation – "`1 - Title Crawl`" – die verwendet werden kann, um auf den Cue in JavaScript und CSS zu verweisen.
Er hat auch Cue-Einstellungen nach der Zeitanzeige, um die Position des Cues festzulegen.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Weil:
- Es wird Ihren Magen perforieren.
- Sie könnten sterben.
```

Beachten Sie, dass die Ausgabe Zeilenumbrüche im Nutztext respektiert, was es Ihnen ermöglicht, Aufzählungslisten mit Bindestrichen (`-`) zu erstellen, wie gezeigt.
Im Allgemeinen sollten Sie diese Umbrüche nur bei Bedarf einfügen, da der Browser den Text entsprechend umbricht.

Es ist wichtig, innerhalb eines Cues keine "zusätzlichen" leeren Zeilen zu verwenden, z.B. zwischen der Zeitzeile und dem Cue-Nutztext oder innerhalb des Nutztextes.
Dies liegt daran, dass eine leere Zeile den aktuellen Cue abschließen würde.

Jeder Teil des Cues wird in den folgenden Abschnitten näher erläutert.

### Cue-Identifikation

Die Identifikation ist ein Name, der den Cue identifiziert. Sie kann verwendet werden, um den Cue von JavaScript oder CSS aus anzusprechen. Sie darf keinen Zeilenumbruch enthalten und nicht die Zeichenkette "`-->`" beinhalten. Sie muss mit einem einfachen Zeilenumbruch enden. Identifikationen müssen nicht eindeutig sein, obwohl es üblich ist, sie zu nummerieren (z.B. 1, 2, 3).

Das folgende Beispiel zeigt eine Datei mit mehreren Cues, die Identifikationen enthalten:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
Dies ist der erste Untertitel.

2 Some Text
00:00:30.739 --> 00:00:34.074
Dies ist der zweite.

3
00:00:34.159 --> 00:00:35.743
Dies ist der dritte
```

### Cue-Zeitgebung

Eine Cue-Zeitgebung zeigt das Zeitintervall an, in dem der Cue angezeigt wird. Sie hat eine Start- und Endzeit, dargestellt durch Zeitstempel. Die Endzeit muss größer sein als die Startzeit, und die Startzeit muss größer oder gleich allen vorhergehenden Startzeiten sein.

Cues können sich überlappende Zeitgebungen haben, es sei denn, die WebVTT-Datei wird für Kapitel verwendet ({{HTMLElement("track")}} [`kind`](/de/docs/Web/HTML/Element/track#kind) ist `chapters`).

Jede Cue-Zeitgebung enthält fünf Komponenten:

- Einen Zeitstempel für die Startzeit.
- Mindestens ein Leerzeichen.
- Die Zeichenkette "`-->`".
- Mindestens ein Leerzeichen.
- Einen Zeitstempel für die Endzeit, der größer als die Startzeit sein muss.

Die Zeitstempel können in einem der folgenden zwei Formate angegeben werden:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Wobei die Komponenten wie folgt definiert sind:

- `hh`
  - : Stellt Stunden dar und muss mindestens zwei Ziffern haben. Es können mehr als zwei Ziffern verwendet werden (z.B. `9999:00:00.000`).
- `mm`
  - : Stellt Minuten dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ss`
  - : Stellt Sekunden dar und muss zwischen 00 und 59 liegen, einschließlich.
- `ttt`
  - : Stellt Millisekunden dar und muss zwischen 000 und 999 liegen, einschließlich.

Hier sind einige Cue-Zeitgebungsbeispiele:

- Grundlegende Cue-Zeitgebungsbeispiele

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Überlappende Cue-Zeitgebungsbeispiele

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Nicht überlappende Cue-Zeitgebungsbeispiele

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue-Einstellungen

Cue-Einstellungen sind optionale Komponenten, die den Cue-Nutztext über dem Video positionieren. Dazu gehören horizontale und vertikale Positionen. Null oder mehr Cue-Einstellungen können in beliebiger Reihenfolge angegeben und verwendet werden, solange jede Einstellung nicht mehr als einmal verwendet wird.

Cue-Einstellungen werden rechts neben den Cue-Zeitanzeigen hinzugefügt. Es muss ein oder mehrere Leerzeichen zwischen der Cue-Zeitanzeige und der ersten Einstellung und zwischen jeder Einstellung geben. Ein Doppelpunkt trennt den Namen und den Wert einer Einstellung. Die Einstellungen sind groß-/kleinschreibungssensitiv; verwenden Sie Kleinbuchstaben wie gezeigt. Es gibt fünf verfügbare Cue-Einstellungen:

- `vertical`
  - : Gibt an, dass der Text vertikal statt horizontal angezeigt wird, wie in einigen asiatischen Sprachen. Es gibt zwei mögliche Werte:
    - `rl`
      - : Die Schreibrichtung ist von rechts nach links.
    - `lr`
      - : Die Schreibrichtung ist von links nach rechts.
- `line`

  - : Wenn `vertical` nicht gesetzt ist, gibt `line` an, wo der Text vertikal erscheint. Wenn `vertical` gesetzt ist, gibt `line` an, wo der Text horizontal erscheint. Der Wert kann sein:

    - Eine Zeilennummer
      - : Die Position der ersten Linie des Cues, wie sie auf dem Video erscheint. Positive Zahlen werden von oben nach unten gezählt und negative Zahlen von unten nach oben.
    - Ein Prozentsatz
      - : Eine ganze Zahl (d.h. keine Dezimalstellen) zwischen 0 und 100 einschließlich, die mit einem Prozentzeichen (%) gefolgt werden muss.

    | Linie         | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | ------------- | ---------------------- | ------------- | ------------- |
    | `line:0`      | oben                   | rechts        | links         |
    | `line:-1`     | unten                  | links         | rechts        |
    | `line:0%`     | oben                   | rechts        | links         |
    | `line:100%`   | unten                  | links         | rechts        |

- `position`

  - : Wenn `vertical` nicht gesetzt ist, gibt `position` an, wo der Text horizontal erscheint. Wenn `vertical` gesetzt ist, gibt `position` an, wo der Text vertikal erscheint. Der Wert ist ein Prozentsatz zwischen 0 und 100 einschließlich.

    | Position         | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | -----------------| ---------------------- | ------------- | ------------- |
    | `position:0%`    | links                  | oben          | oben          |
    | `position:100%`  | rechts                 | unten         | unten         |

- `size`

  - : Wenn `vertical` nicht gesetzt ist, gibt `size` die Breite des Textbereichs an. Wenn `vertical` gesetzt ist, gibt `size` die Höhe des Textbereichs an. Der Wert ist ein Prozentsatz zwischen 0 und 100 einschließlich.

    | Größe           | `vertical` weggelassen | `vertical:rl` | `vertical:lr` |
    | --------------- | ---------------------- | ------------- | ------------- |
    | `size:100%`     | volle Breite           | volle Höhe    | volle Höhe    |
    | `size:50%`      | halbe Breite           | halbe Höhe    | halbe Höhe    |

- `align`

  - : Gibt die Ausrichtung des Textes an. Der Text wird innerhalb des durch die Größe des Cue-Einstellungen gegebenen Raumes ausgerichtet, wenn er eingestellt ist.

    | Ausrichtung     | `vertical` weggelassen       | `vertical:rl`         | `vertical:lr`         |
    | --------------- | ---------------------------- | --------------------- | --------------------- |
    | `align:start`   | links                        | oben                  | oben                  |
    | `align:center`  | horizontal zentriert         | vertikal zentriert    | vertikal zentriert    |
    | `align:end`     | rechts                       | unten                 | unten                 |

Hier sind einige Beispiele.
Die erste Zeile zeigt keine Einstellungen. Die zweite Zeile könnte verwendet werden, um Text auf einem Schild oder Etikett zu überblenden. Die dritte Zeile könnte für einen Titel verwendet werden. Die letzte Zeile könnte für eine asiatische Sprache verwendet werden.

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

Der Nutztext ist der Teil, in dem der Cue-Inhalt definiert wird, wie z.B. der Untertitel oder die Textunterschrift.
Dieser kann Zeilenumbrüche enthalten, aber keine zwei aufeinander folgenden Zeilenumbrüche: Das würde eine leere Zeile erzeugen, was das Ende des Blocks bedeutet.

Ein Cue-Text-Nutztext darf die Zeichenfolge `-->`, das Kaufmanns-Und-Zeichen (`&`) oder das Kleiner-Zeichen (`<`) nicht enthalten.
Wenn nötig, können Sie stattdessen einen {{glossary("Zeichenreferenz")}} wie die benannte Zeichenreferenz `&amp;` für Kaufmanns-Und und `&lt;` für Kleiner verwenden.
Es wird auch empfohlen, die Escape-Sequenz für Größer-Dann `&gt;` anstelle des Größer-Dann-Zeichens (`>`) zu verwenden, um Verwechslungen mit Tags zu vermeiden.
Wenn Sie die WebVTT-Datei für Metadaten verwenden, gelten diese Einschränkungen nicht.

Beachten Sie, dass alle großen Browser alle {{glossary("Zeichenreferenz")}} in Cues, Notizen oder anderen Texten erlauben.
Ältere Browserversionen unterstützen möglicherweise nur den folgenden Teilbereich benannter Zeichenreferenzen:

| Name                | Zeichen    | Escape-Sequenz    |
| ------------------- | ---------- | ----------------- |
| Kaufmanns-Und       | `&`        | `&amp;`           |
| Kleiner-Zeichen     | `<`        | `&lt;`            |
| Größer-Dann-Zeichen | `>`        | `&gt;`            |
| Links-nach-rechts-Zeichen | _keine_      | `&lrm;`           |
| Rechts-nach-links-Zeichen | _keine_      | `&rlm;`           |
| Geschütztes Leerzeichen  |           | `&nbsp;`          |

### Cue-Nutztext-Tags

Eine Reihe von Tags, wie `<b>`, können verwendet werden, um Text innerhalb eines Cues zu markieren und zu stylen.
Wenn die WebVTT-Datei jedoch in einem {{HTMLElement("track")}}-Element verwendet wird, bei dem das Attribut [`kind`](/de/docs/Web/HTML/Element/track#kind) `chapters` ist, können keine Tags verwendet werden.

- Zeitstempel-Tag

  - : Zeitstempel-Tags werden verwendet, um Karaoke-ähnliche Untertitel zu ermöglichen.
    Der Zeitstempel muss größer sein als der Startzeitstempel des Cues, größer als alle vorherigen Zeitstempel im Cue-Nutztext und kleiner als der Endzeitstempel des Cues.
    Der _aktive Text_ ist der Text zwischen dem Zeitstempel und dem nächsten Zeitstempel oder bis zum Ende der Nutzlast, wenn es keinen weiteren Zeitstempel in der Nutzlast gibt.
    Jeder Text vor dem _aktiven Text_ in der Nutzlast ist _vorheriger Text_.
    Jeder Text über den _aktiven Text_ hinaus ist _zukünftiger Text_.

    ```plain
    1
    00:16.500 --> 00:18.500
    Wenn der Mond <00:17.500>auf Ihr Auge trifft

    1
    00:00:18.500 --> 00:00:20.500
    Wie eine <00:19.000>große <00:19.500>Pizza <00:20.000>Pie

    1
    00:00:20.500 --> 00:00:21.500
    Das ist <00:00:21.000>Liebe
    ```

Die folgenden Tags sind die HTML-Tags, die in einem Cue erlaubt sind und Eröffnungs- und Schließ-Tags erfordern (z.B. `<b>text</b>`).
Text, der mit diesen Tags markiert ist, kann in [`STYLE`-Blöcken](#style-blöcke) mit dem {{cssxref("::cue")}}-Pseudoelement formatiert werden.

- Italics-Tag (`<i></i>`)

  - : Kursive Darstellung des enthaltenen Textes.

    ```xml
    <i>text</i>
    ```

- Fett-Tag (`<b></b>`)

  - : Fettgedruckte Darstellung des enthaltenen Textes.

    ```xml
    <b>text</b>
    ```

- Unterstreichungs-Tag (`<u></u>`)

  - : Unterstrichene Darstellung des enthaltenen Textes.

    ```xml
    <u>text</u>
    ```

- Klassentag (`<c></c>`)

  - : Fügt dem enthaltenen Text eine Klasse zur Auswahl über CSS hinzu.

    ```xml
    <c.classname>text</c>
    ```

- Ruby-Tag (`<ruby></ruby>`)

  - : Wird zusammen mit Ruby-Text-Tags verwendet, um [Ruby-Zeichen](https://de.wikipedia.org/wiki/Ruby_Characters) darzustellen (d.h. kleine annotierte Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>ja</rt></ruby>
    ```

- Ruby-Text-Tag (`<rt></rt>`)

  - : Wird zusammen mit Ruby-Tags verwendet, um [Ruby-Zeichen](https://de.wikipedia.org/wiki/Ruby_Characters) darzustellen (d.h. kleine annotierte Zeichen über anderen Zeichen).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>ja</rt></ruby>
    ```

- Voice-Tag (`<v></v>`)

  - : Ähnlich wie der Klassentag, auch verwendet, um den enthaltenen Text mit CSS zu stylen.

    ```xml
    <v Bob>text</v>
    ```

- Lang-Tag (`<lang></lang>`)

  - : Wird verwendet, um Text hervorzuheben, der als einer bestimmten Sprache oder Sprachvariante zugehörig markiert wurde, im Format definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.

    ```xml
    <lang en-GB>Englischer Text wie in Großbritannien gesprochen!</lang>
    ```

## NOTE-Blöcke

NOTE-Blöcke sind optionale Abschnitte, die verwendet werden können, um Kommentare zu einer WebVTT-Datei hinzuzufügen.
Sie sind für diejenigen gedacht, die die Datei lesen, und werden von Benutzern nicht gesehen.
Sie können sie beispielsweise verwenden, um Kontaktinformationen des Autors aufzuzeichnen, einen Überblick über Ihre Struktur zu geben oder Platzhalter für Cues, die noch geschrieben werden müssen, hinzuzufügen.

Sie können überall in der WebVTT-Datei nach dem Header verwendet werden.

NOTE-Blöcke können Zeilenumbrüche enthalten, aber keine zwei aufeinander folgenden Zeilenumbrüche: Das würde eine leere Zeile erzeugen, was das Ende des Blocks bedeutet.

Ein Kommentar kann die Zeichenfolge `-->`, das Kaufmanns-Und-Zeichen (`&`) oder das Kleiner-Zeichen (`<`) nicht enthalten.
Wenn Sie diese Zeichen verwenden möchten, müssen Sie stattdessen eine {{glossary("Zeichenreferenz")}} wie `&amp;` für Kaufmanns-Und und `&lt;` für Kleiner verwenden.
Es wird auch empfohlen, die Greater-Than-Escape-Sequenz (`&gt;`) anstelle des Größer-Dann-Zeichens (`>`) zu verwenden, um Verwirrung mit Tags zu vermeiden.

Ein Kommentar besteht aus drei Teilen:

- Die Zeichenfolge `NOTE`.
- Ein Leerzeichen oder ein Zeilenumbruch.
- Null oder mehr Zeichen außer den oben genannten.

Hier einige Beispiele:

```plain
NOTE Dies ist ein einzeiliger Kommentar

NOTE
Dies ist ein einfacher mehrzeiliger Kommentar

NOTE
Ein Kommentar, der sich über
mehr als eine Zeile erstreckt.

NOTE Sie können auch einen Kommentar
so über mehr als eine Zeile machen.

NOTE TODO Ich könnte eine Linie hinzufügen, um Arbeit anzugeben, die noch erledigt werden muss.
```

## STYLE-Blöcke

`STYLE`-Blöcke sind optionale Abschnitte, die verwendet werden können, um CSS-Stile für Cues innerhalb einer WebVTT-Datei einzubetten.
Beachten Sie, dass diese zur Gestaltung des Erscheinungsbildes und der Größe der Cues verwendet werden, jedoch nicht zur Steuerung deren Position und Layouts, die durch die [Cue-Einstellungen](#cue-einstellungen) festgelegt werden.

> [!NOTE]
> WebVTT-Cues können auch durch die mit den zugehörigen [Dokument eingebetteten Video-/Audioelementen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) geladenen CSS-Stile übereinstimmen.

`STYLE`-Blöcke müssen vor allen Cue-Blöcken in der Datei erscheinen.

Jeder Block besteht aus den folgenden Zeilen:

- Die Zeichenfolge `STYLE`, gefolgt von null oder mehr Leer- oder Tabulatorzeichen und dann einem Zeilenumbruch.
- Eine Zeichenkette, die die zuzuordnenden und anzuwendenden CSS-Stile unter Verwendung des {{cssxref("::cue")}}-Pseudoelements definiert.

Der Block darf die Zeichenfolge `-->` nicht enthalten.
Er kann Zeilenumbrüche enthalten, aber keine zwei aufeinander folgenden Zeilenumbrüche: Das würde eine leere Zeile erzeugen, was das Ende des Blocks bedeutet.

Eine einfache WebVTT-Datei mit zwei `STYLE`-Blöcken wird unten gezeigt.
Diese verwendet {{cssxref("::cue")}}, um einerseits alle Cue-Texte eine Textfarbe zuzuweisen und andererseits eine andere Textfarbe nur Texten, die mit `<b></b>`-Tags getaggt sind.

```plain
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Style-Blöcke dürfen keine Leerzeilen oder "Pfeil Pfeil Größer-Dann" verwenden */

NOTE Kommentblöcke können zwischen Style-Blöcken verwendet werden.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Hallo <b>Welt</b>.

NOTE Style-Blöcke dürfen nicht nach dem ersten Cue erscheinen.
```

> [!NOTE]
> Es gibt Live-Beispiele, die viele der folgenden Fälle demonstrieren, in [Mehr Cue-Styling-Beispiele](/de/docs/Web/API/WebVTT_API#more_cue_styling_examples) in der _WebVTT-API_.

### Allen Cue-Nutztext abgleichen

Alle Cue-Nutztexte mithilfe von {{cssxref("::cue")}} abgleichen.

Zum Beispiel würde der folgende `STYLE`-Block alle Cue-Texte abgleichen und sie gelb färben.

```plain
STYLE
cue {
  color: yellow;
}
```

### Einen Tag-Typ abgleichen

Markierten Cue-Text mit bestimmten [Cue-Nutztext-Tags](#cue-nutztext-tags), wie `c`, `i`, `b`, `u`, `ruby`, `rt`, `v` und `lang`, abgleichen, indem Sie das Tag in {{cssxref("::cue()")}} als Typselektor angeben.

Zum Beispiel würde der folgende Block markierten Cue-Nutztext mit `lang` als gelb abgleichen, und jeden der anderen Tags als rot.

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

### Einen Klassen-Selektor abgleichen

Markieren Sie alle Tags mit einem Klassen-Selektor in `::cue()`.

Der `STYLE`-Block in der folgenden WebVTT-Datei würde allen nachfolgendem Text abgleichen, da alle Tags die Klasse `myclass` haben.

```plain
WEBVTT

STYLE
::cue(.myclass) {
  color: yellow;
}

00:00:00.000 --> 00:00:08.000
<c.myclass>Gelb!</c>
<i.myclass>Gelb!</i>
<u.myclass>Gelb!</u>
<b.myclass>Gelb!</b>
<u.myclass>Gelb!</u>
<ruby.myclass>Gelb! <rt.myclass>Gelb!</rt></ruby>
<v.myclass Kathryn>Gelb!</v>
<lang.myclass de>Gelb!</lang>
```

Um ein bestimmtes Tag und eine Klasse auszuwählen, müssen Sie beide in `::cue()` angeben:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Ein Attribut abgleichen

Cue-Nutztext, der mit einem bestimmten Tag und Attribut markiert ist, kann mithilfe eines Attributselektors abgeglichen werden.

Beispielsweise betrachten Sie die folgende WebVTT-Datei, die mit den `v`- und `lang`-Tags [Cue-Nutztext-Tags](#cue-nutztext-tags) markierten Text enthält und Attribute verwendet, um die spezielle Stimme ("Salame") und Sprachen anzugeben.

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
Gelb!

00:00:08.000 --> 00:00:16.000
<lang en-GB>Zyan!</lang>

00:00:16.000 --> 00:00:24.000
Ich mag <v Salame>Limette.</v>
```

### Pseudo-Klassen abgleichen

Das vorherige Beispiel stilisierte Text für eine bestimmte Sprache mithilfe von Attributabgleich.
Sie können auch Sprachen mit der Pseudoklasse `:lang()` abgleichen, wie es der `STYLE`-Block unten demonstriert.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

Ebenso können Sie mit den Pseudoklassen `:past` und `:future` abgleichen, um ein Karaoke-ähnliches Erlebnis zu bieten.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Andere Pseudoklassen wie `link`, `nth-last-child` und `nth-child` sollten ähnlich funktionieren.

### Eine Cue-ID abgleichen

Gegen eine bestimmte Cue-`id` abgleichen, indem Sie die `id` innerhalb von {{cssxref("::cue()")}} angeben.

> [!NOTE]
> Zum Zeitpunkt des Schreibens scheint dies in keinem der Hauptbrowser unterstützt zu werden.

Zum Beispiel sollte die folgende WebVTT-Datei den Cue mit der Identifikation `cue1` in Grün hervorheben.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Grün!
```

Beachten Sie, dass Escape-Sequenzen in WebVTT-CSS genauso verwendet werden wie in HTML-Seiten. Das folgende Beispiel zeigt, wie Sie Leerzeichen in einer Cue-Identifikation beseitigen:

```plain
WEBVTT

STYLE
::cue(#crédit\ de\ transcription) {
  color: red;
}

crédit de transcription
00:04.000 --> 00:05.000
Transkribiert von Célestes™
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die CSS-Pseudoelemente [`::cue` und `::cue()`](/de/docs/Web/CSS/::cue)
