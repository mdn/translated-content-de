---
title: Web-Schriften
slug: Learn/CSS/Styling_text/Web_fonts
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriften und Texten erkundet. In diesem Artikel werden wir weiter ins Detail gehen und Web-Schriften genauer untersuchen. Wir werden sehen, wie Sie benutzerdefinierte Schriften auf Ihrer Webseite verwenden können, um eine vielfältigere, individuellere Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studium von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundlagen von CSS (Studium von
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS Text- und Schriftgrundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Web-Schriften auf eine Webseite anwendet, entweder durch die Nutzung eines Drittanbieterdienstes oder durch das Schreiben von eigenem Code.
      </td>
    </tr>
  </tbody>
</table>

## Schriftarten-Wiederholung

Wie wir im [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals) gesehen haben, können die Schriften, die auf Ihr HTML angewendet werden, durch die {{cssxref("font-family")}} Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftartnamen an. Beim Anzeigen einer Webseite geht ein Browser eine Liste von font-family-Werten durch, bis er eine auf dem System verfügbare Schriftart findet:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftartenwahlen von Webentwicklern begrenzt. Es gibt nur wenige Schriften, die auf allen gängigen Systemen verfügbar sind — die sogenannten [Web-sicheren Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriften anzugeben, gefolgt von Web-sicheren Alternativen, gefolgt von der Standardsystemschrift. Dies erhöht jedoch Ihre Arbeitsbelastung, da Tests erforderlich sind, um sicherzustellen, dass Ihre Designs mit jeder Schrift funktionieren.

## Web-Schriften

Aber es gibt eine Alternative, die sehr gut funktioniert. Mit CSS können Sie Schriftdateien angeben, die im Internet verfügbar sind und die zusammen mit Ihrer Webseite heruntergeladen werden, wenn darauf zugegriffen wird. Das bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die von Ihnen speziell ausgewählten Schriften anzeigen kann. Erstaunlich! Die Syntax sieht in etwa so aus:

Zunächst haben Sie ein {{cssxref("@font-face")}} Regelset am Anfang des CSS, das die herunterzuladenden Schriftdatei(en) angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den innerhalb von {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um die Schrift wie gewohnt auf alles anzuwenden, was Sie möchten:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als das. Wir werden weiter unten detaillierter darauf eingehen.

Hier sind einige wichtige Dinge, die Sie bei Web-Schriften beachten sollten:

1. Schriftarten sind im Allgemeinen nicht kostenlos zu verwenden. Sie müssen dafür bezahlen und/oder anderen Lizenzbedingungen folgen, wie z.B. den Schöpfer der Schrift in Ihrem Code (oder auf Ihrer Seite) zu nennen. Sie sollten keine Schriftarten stehlen und ohne ordnungsgemäße Anerkennung verwenden.
2. Alle gängigen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriften, chromatischer Schriften und Schriftensammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mit mehreren herunterzuladenden Schriftdateien geben, wählt der Browser die erste Schriftdatei, die er verwenden kann. Aus diesem Grund sollte das von Ihnen zuerst aufgeführte Format das bevorzugte Format sein — also WOFF2 — mit den älteren Formaten, die danach aufgelistet werden. Browser, die ein Format nicht verstehen, greifen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG Web-Schriften zum Download bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Web-Schriften handelt oder nicht. Dieses Video bietet eine schöne Einführung:

{{EmbedYouTube("UazfLa1O94M")}}

## Aktives Lernen: Ein Web-Schrift-Beispiel

Mit diesen Informationen im Hinterkopf lassen Sie uns ein grundlegendes Web-Schrift-Beispiel von Grund auf erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die Schritte in den folgenden Abschnitten befolgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie etwas minimalen CSS-Code, um das grundlegende Layout und die Typografie des Beispiels zu handhaben.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Web-Schriften: eine für die Überschriften und eine für den Fließtext. Zunächst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, auf denen Sie Schriften erhalten können:

- Ein kostenloser Schriftanbieter: Dies ist eine Seite, die kostenlose Schriften zum Download anbietet (es können dennoch einige Lizenzbedingungen gelten, z.B. den Schöpfer der Schrift zu nennen). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [dafont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftanbieter: Dies ist eine Seite, die Schriften gegen Gebühr anbietet, wie z.B. [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch direkt bei Schriftgießereien Schriften kaufen, z.B. bei [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt und den gesamten Prozess erleichtert. Weitere Informationen finden Sie im Abschnitt [Verwendung eines Online-Schriftservices](#verwendung_eines_online-schriftservices).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine ansprechende oder Serifen-Schrift) und eine leicht lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern Sie die Datei im gleichen Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Web-Schriften werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie könnten mehrere Schriftdateien im Paket finden — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, z.B. dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel sollen Sie sich nur um eine einzige Schriftdatei für jede Wahl kümmern.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Schriften finden" in der rechten Spalte auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Erzeugen des erforderlichen Codes

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schrift befolgen Sie diese Schritte:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen "Ja, die Schriften, die ich hochlade, sind rechtlich für die Web-Einbettung geeignet."
5. Klicken Sie auf _Download your kit_.

Nachdem der Generator die Verarbeitung abgeschlossen hat, sollten Sie ein ZIP-Archiv zum Herunterladen erhalten. Speichern Sie es im gleichen Verzeichnis wie Ihre HTML- und CSS-Dateien.

Wenn Sie ältere Browser unterstützen müssen, wählen Sie den "Experten"-Modus im Fontsquirrel Webfont Generator, wählen Sie SVG-, EOT- und TTF-Formate, bevor Sie Ihr Kit herunterladen.

Webdienste zur Schriftgenerierung haben in der Regel Größenbeschränkungen bei Dateien. In einem solchen Fall sollten Sie Tools in Betracht ziehen wie:

1. [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) zur Umwandlung von ttf in woff
2. [fontforge](https://fontforge.org/) zur Umwandlung von ttf in svg
3. [batik ttf2svg](https://xmlgraphics.apache.org/batik/tools/font-converter.html) zur Umwandlung von ttf in svg
4. [woff2](https://github.com/google/woff2) zur Umwandlung von ttf in woff2

### Implementierung des Codes in Ihrem Demo

An dieser Stelle entpacken Sie das gerade erstellte Webfont-Kit. Innerhalb des entpackten Verzeichnisses sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in unterschiedlichen Nutzungskontexten aussehen wird.
- Eine `stylesheet.css` Datei, die den generierten @font-face Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, befolgen Sie diese Schritte:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Verständliches um, wie z.B. `fonts`.
2. Öffnen Sie die `stylesheet.css` Datei und kopieren Sie die beiden `@font-face` Regelsets in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben platzieren, bevor jeglicher anderer CSS-Code, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` am Anfang jedes Pfades hinzu (passen Sie dies bei Bedarf an).
4. Jetzt können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede Web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten mit einer Demoseite enden, auf der einige schöne Schriften implementiert sind. Da verschiedene Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und das Gefühl zu sortieren.

![Das fertige Design einer aktiven Lernübung zur Web-Schrift. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriften und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, vergleichen Sie Ihre Version gerne mit unseren fertigen Dateien — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und liefern Schriften für Sie, sodass Sie sich nicht um das Schreiben des `@font-face` Codes kümmern müssen. Stattdessen müssen Sie im Allgemeinen nur eine einfache Codezeile oder zwei in Ihre Seite einfügen, damit alles funktioniert. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementsbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, besonders für schnelles Testen und Demoschreiben.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie die Idee bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie wählen möchten, und wählen Sie ein paar Schriften, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie den ⊕-Button neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die _View your selected families_ Schaltfläche in der oberen rechten Ecke der Seite.
5. Auf dem folgenden Bildschirm müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihrer HTML-Datei einfügen. Setzen Sie sie über das vorhandene {{htmlelement("link")}}-Element, sodass die Schriftart importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Sie müssen dann die aufgeführten CSS-Deklarationen entsprechend in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie finden eine fertige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), wenn Sie Ihre Arbeit mit unserer abgleichen müssen ([Siehe es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face` Syntax erkunden, die für Sie von Fontsquirrel generiert wurde. So sieht eines der Regelsets aus:

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

Gehen wir es durch, um zu sehen, was es tut:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie auf die Schriftart verweisen möchten. Dies kann alles sein, was Sie möchten, solange Sie es konsistent in Ihrem CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil), und das Format jeder Schriftdatei (der `format` Teil). Der letztere Teil ist in jedem Fall optional, aber nützlich zu deklarieren, da es Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser sie gemäß den Regeln des Cascading durchsucht, ist es am besten, Ihre bevorzugten Formate wie WOFF2 an den Anfang zu stellen.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/Style es hat und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt allen Mitgliedern der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face Tipp: Font-weight und font-style definieren, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was zu tun ist, im Detail.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}} und {{cssxref("font-stretch")}} Werte für Ihre Web-Schriften angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der einen bestimmten Bereich von Zeichen darstellt, die Sie möglicherweise aus der Web-Schrift verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite die angegebenen Zeichen enthält, was unnötige Downloads spart. [Erstellen von benutzerdefinierten Schriftstapeln mit Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan liefert einige nützliche Ideen, wie Sie davon Gebrauch machen können.

## Variable Schriften

Es gibt eine neuere Schrifttechnologie in Browsern namens variable Fonts. Diese sind Schriften, die viele verschiedene Varianten eines Schriftsatzes in eine einzige Datei integrieren lassen, anstatt eine separate Schriftdatei für jede Breite, Gewicht oder Stil zu haben. Sie sind etwas fortgeschritten für unseren Einsteigerkurs, aber wenn Sie sich herausfordern und sich damit beschäftigen möchten, lesen Sie unseren [Variable Fonts Leitfaden](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Layout einer Schulhomepage erstellen](/de/docs/Learn/CSS/Styling_text/Typesetting_a_homepage).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
