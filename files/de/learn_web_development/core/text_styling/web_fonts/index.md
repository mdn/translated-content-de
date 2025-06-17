---
title: Web Fonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: e47ecbb9beee1f7f6b22376686be75b15bb73638
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Schrift- und Textgestaltung erkundet. In diesem Artikel gehen wir weiter ins Detail und betrachten Web Fonts ausführlicher. Wir werden sehen, wie Sie benutzerdefinierte Schriften mit Ihrer Webseite verwenden können, um eine vielfältigere und individuellere Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Web Fonts es Entwicklern ermöglichen, über den Web-sicheren Schriftsatz hinauszugehen und benutzerdefinierte Schriften in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die @font-face-Regel und allgemeine Deskriptoren.</li>
         <li>Verwendung eines Web Fonts mit der `font-family`-Eigenschaft.</li>
         <li>Verwendung eines Online-Dienstes, um Web Fonts zu finden und Web Font-Code zu generieren, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die Schriften, die auf Ihr HTML angewendet werden, mit der {{cssxref("font-family")}}-Eigenschaft gesteuert werden. Diese akzeptiert einen oder mehrere Schriftfamiliennamen. Beim Anzeigen einer Webseite durchläuft ein Browser eine Liste von `font-family`-Werten, bis er eine Schriftart findet, die auf dem System verfügbar ist, auf dem der Browser ausgeführt wird:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftwahlmöglichkeiten von Webentwicklern begrenzt. Es gibt nur eine Handvoll Schriften, von denen Sie sicher sein können, dass sie auf allen gängigen Systemen verfügbar sind — die sogenannten [websicheren Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriften gefolgt von websicheren Alternativen und dann der Standardsystemschrift anzugeben. Dies erhöht jedoch den Arbeitsaufwand durch das notwendige Testen, um sicherzustellen, dass Ihr Design mit jeder Schrift funktioniert.

## Web Fonts

Es gibt eine gut funktionierende Alternative. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden können, wenn darauf zugegriffen wird. Dies bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die von Ihnen speziell ausgewählten Schriften anzeigen kann. Faszinierend! Die erforderliche Syntax sieht etwa so aus:

Zunächst haben Sie eine {{cssxref("@font-face")}}-Regel am Anfang des CSS, die die zum Herunterladen bestimmten Schriftdateien angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Unterhalb davon verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schrift auf gewünschte Elemente anzuwenden, wie gewohnt:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax ist etwas komplizierter als dies. Wir werden weiter unten ausführlicher darauf eingehen.

Hier sind einige wichtige Dinge zu beachten bei Web Fonts:

1. Schriften sind in der Regel nicht zur freien Verwendung ohne Einschränkungen. Man muss für sie bezahlen und/oder andere Lizenzbedingungen einhalten, z.B. das Nennen des Schrifterstellers im Code (oder auf der Website). Man sollte keine Schriften stehlen und ohne ordentliche Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die Gesamtheit der TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriften, chromatischer Schriften und Schriftensammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer Schriftdateien zum Herunterladen zur Verfügung stellen, wählt der Browser die erste Schriftdatei, die er verwenden kann. Deshalb sollte das zuerst aufgelistete Format das bevorzugte Format sein — das heißt, WOFF2 — mit den älteren Formaten danach. Browser, die ein Format nicht verstehen, greifen dann automatisch auf das nächste in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webschriften zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie man den Fontsquirrel Webfont-Generator nutzt, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Web Fonts handelt oder nicht.

## Hinzufügen eigener Web Fonts

Mit diesem Wissen fordern wir Sie nun auf, ein einfaches Webfont-Beispiel von Grund auf zu erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie den im folgenden Abschnitt beschriebenen Schritten folgen, um eine Vorstellung vom Prozess zu erhalten.

Verwenden Sie die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie einige minimale CSS-Anpassungen für das grundlegende Layout und die Typografie des Beispiels.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Web Fonts: einen für die Überschriften und einen für den Fließtext. Zunächst müssen wir die Schriftsätze finden, die die benötigten Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Webseiten, auf denen Sie Schriften erhalten können:

- Ein kostenloser Schriftanbieter: Dies ist eine Webseite, die kostenlose Schriften zum Download anbietet (es können dennoch einige Lizenzbedingungen bestehen, z.B. das Nennen des Schrifterstellers). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftanbieter: Dies ist eine Webseite, die Schriften gegen Gebühr anbietet, z.B. [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Man kann Schriften auch direkt von Schriftgießereien wie [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/) kaufen.
- Ein Online-Schriftservice: Dies ist eine Webseite, die die Schriften für Sie speichert und bereitstellt und den gesamten Prozess erleichtert. Siehe den Abschnitt [Verwendung eines Online-Schriftservices](#verwendung_eines_online-schriftservices) für weitere Details.

Lassen Sie uns einige Schriften finden! Besuchen Sie [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften aus: eine interessante Schrift für die Überschriften (vielleicht eine gut sichtbare oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, klicken Sie auf die Schaltfläche zum Herunterladen und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die zwei Schriftpakete (Webschriften werden üblicherweise in ZIP-Dateien verteilt, die die Schriftdateien und Lizenzinformationen enthalten). Im Paket finden Sie möglicherweise mehrere Schriftdateien — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, z.B. dünn, mittel, fett, kursiv, dünn kursiv usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzigen Schriftdatei für jede Auswahl befassen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifizierungen klicken, um die angezeigten Optionen zu filtern.

### Erstellen des erforderlichen Codes

Jetzt müssen Sie den erforderlichen Code (und Schriftformate) erstellen. Gehen Sie für jede Schrift wie folgt vor:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, falls Sie dies in einem kommerziellen und/oder Webprojekt nutzen möchten.
2. Besuchen Sie den Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre zwei Schriftdateien mit der Schaltfläche _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Klicken Sie auf _Download your kit_.

Nachdem der Generator die Verarbeitung abgeschlossen hat, sollten Sie eine ZIP-Datei zum Herunterladen erhalten. Speichern Sie diese im selben Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Den Code in Ihrem Demo umsetzen

Entpacken Sie an dieser Stelle das von Ihnen generierte Webfont-Kit. Im entpackten Verzeichnis finden Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussieht.
- Eine `stylesheet.css`-Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, befolgen Sie diese Schritte:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Verständliches um, wie z.B. `fonts`.
2. Öffnen Sie die `stylesheet.css`-Datei und kopieren Sie die zwei `@font-face`-Regeln in Ihre `web-font-start.css`-Datei — Sie müssen sie ganz oben platzieren, vor Ihrem CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, daher fügen wir `fonts/` am Beginn jedes Pfades hinzu (bei Bedarf anpassen).
4. Nun können Sie diese Schriften in Ihren Schriftstapeln verwenden, genauso wie jede websichere oder Standardsystemschrift. Zum Beispiel:

   ```css
   @font-face {
     font-family: "zantrokeregular";
     src:
       url("fonts/zantroke-webfont.woff2") format("woff2"),
       url("fonts/zantroke-webfont.woff") format("woff");
     font-weight: normal;
     font-style: normal;
   }
   ```

   ```css
   font-family: "zantrokeregular", serif;
   ```

Am Ende sollten Sie eine Demo-Seite mit einigen schönen implementierten Schriften erhalten. Da unterschiedliche Schriften in verschiedenen Größen erstellt werden, müssen Sie möglicherweise Größe, Abstände usw. anpassen, um das Aussehen und Gefühl zu optimieren.

![Das fertige Design einer Webfont-Übung. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält unterschiedliche Schriften und Text in verschiedenen Größen.](web-font-example.png)

> [!NOTE]
> Sollten Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Variante gerne mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und bereitstellen Schriften für Sie, sodass Sie sich nicht um das Schreiben des `@font-face`-Codes kümmern müssen. Stattdessen müssen Sie im Allgemeinen nur ein oder zwei einfache Codezeilen in Ihre Website einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf einem Abonnementmodell, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Service, insbesondere für schnelles Testen und Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu verwenden, daher werden wir sie nicht sehr detailliert behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie die Idee verstehen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren bevorzugten Schriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie auswählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕-Schaltfläche neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _View your selected families_ in der oberen rechten Ecke der Seite.
5. Auf dem resultierenden Bildschirm müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopfbereich Ihrer HTML-Datei einfügen. Platzieren Sie sie oberhalb des vorhandenen {{htmlelement("link")}}-Elements, damit die Schriftart importiert wird, bevor Sie sie in Ihrem CSS verwenden.
6. Danach müssen Sie die aufgelisteten CSS-Deklarationen nach Bedarf in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Eine vollständige Version finden Sie bei [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), falls Sie Ihre Arbeit mit unserer vergleichen möchten ([sehen Sie es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## `@font-face` im Detail

Lassen Sie uns die von Fontsquirrel für Sie erstellte `@font-face`-Syntax genauer ansehen. Die Regelblöcke sehen in etwa so aus:

```css
@font-face {
  font-family: "zantrokeregular";
  src:
    url("zantroke-webfont.woff2") format("woff2"),
    url("zantroke-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
```

Lassen Sie uns durchgehen, was es macht:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie auf die Schrift verweisen möchten. Dieser kann beliebig sein, solange Sie ihn konsequent in Ihrem gesamten CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den in Ihr CSS zu importierenden Schriftdateien an (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Letzterer Teil ist optional, ist aber nützlich, um ihn anzugeben, da er es Browsern erlaubt, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser sie entsprechend den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, welches Gewicht die Schriftart hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/Stil sie hat, und dann unterschiedliche Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt alle Mitglieder der Schriftfamilie mit unterschiedlichen Namen aufrufen zu müssen. [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was im Detail zu tun ist.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}}- und {{cssxref("font-stretch")}}-Werte für Ihre Web Fonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, d.h. einen spezifischen Bereich von Zeichen, die Sie aus der Web-Schrift verwenden möchten. In unterstützenden Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötige Downloads spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen zur Nutzung dieser Funktion.

## Zusammenfassung

Da Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Layout eines Homepages einer Gemeinschaftsschule.

## Siehe auch

- [Variable fonts guide](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Fonts knowledge](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
