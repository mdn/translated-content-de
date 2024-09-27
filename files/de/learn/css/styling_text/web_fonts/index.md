---
title: Web fonts
slug: Learn/CSS/Styling_text/Web_fonts
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Schrift- und Textgestaltung untersucht. In diesem Artikel gehen wir weiter und erkunden Webfonts im Detail. Wir sehen, wie man mit benutzerdefinierten Schriften auf Ihrer Webseite arbeitet, um individuellere und abwechslungsreichere Textstile zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), CSS-Grundlagen (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >Grundlagen von CSS-Text- und Schriftgestaltung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Webfonts auf einer Webseite angewendet werden, entweder über einen Drittanbieterdienst oder durch eigenen Code.
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir es in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals) gesehen haben, können die Schriften, die auf Ihr HTML angewendet werden, durch die {{cssxref("font-family")}}-Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftfamilien-Namen an. Beim Anzeigen einer Webseite durchläuft ein Browser eine Liste von Font-Family-Werten, bis er eine Schrift findet, die auf dem System verfügbar ist, auf dem er ausgeführt wird:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, jedoch waren die Schriftwahlmöglichkeiten von Webentwicklern traditionell begrenzt. Es gibt nur eine Handvoll Schriften, die auf allen gängigen Systemen verfügbar sind – die sogenannten [Web-sicheren Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts). Sie können den Schrift-Stack verwenden, um bevorzugte Schriften, gefolgt von web-sicheren Alternativen und der Standardsystemschrift anzugeben. Dies erhöht jedoch Ihren Arbeitsaufwand, da Sie testen müssen, dass Ihre Designs mit jeder Schrift funktionieren.

## Webfonts

Es gibt jedoch eine Alternative, die sehr gut funktioniert. CSS erlaubt es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, wenn sie aufgerufen wird. Das bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die Schriften anzeigen kann, die Sie speziell ausgewählt haben. Großartig! Die benötigte Syntax sieht ungefähr so aus:

Zunächst haben Sie ein {{cssxref("@font-face")}}-Regelsatz am Anfang des CSS, der die herunterzuladenden Schriftsatzdateien spezifiziert:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schrift wie gewohnt auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird noch etwas komplexer als das. Wir werden unten tiefer darauf eingehen.

Hier sind einige wichtige Dinge, die Sie bei Webfonts beachten sollten:

1. Schriften sind im Allgemeinen nicht kostenlos. Sie müssen für sie bezahlen und/oder andere Lizenzbedingungen einhalten, wie z.B. den Schriftgestalter in Ihrem Code oder auf Ihrer Seite zu erwähnen. Sie sollten keine Schriften stehlen und ohne ordentliche Anerkennung verwenden.
2. Alle wichtigen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriften, chromatischer Schriften und Schriftensammlungen.
4. Die Reihenfolge, in der Sie Schriftsatzdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste von mehreren herunterladbaren Schriftsatzdateien zur Verfügung stellen, wird der Browser die erste Schriftdatei wählen, die er verwenden kann. Deshalb sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein – also WOFF2 – gefolgt von den älteren Formaten. Browser, die ein Format nicht verstehen, greifen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG Web-Schriften zum Download bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu bearbeiten, unabhängig davon, ob es sich um Web-Schriften handelt oder nicht. Dieses Video bietet eine schöne Einführung:

{{EmbedYouTube("UazfLa1O94M")}}

## Aktives Lernen: Ein Webfont-Beispiel

Mit diesen Informationen im Hinterkopf, lassen Sie uns ein einfaches Webfont-Beispiel von Grund auf aufbauen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die in den folgenden Abschnitten beschriebenen Schritte befolgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css` Datei finden Sie einige minimale CSS, um das grundlegende Layout und die Satzgestaltung des Beispiels zu bearbeiten.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Seiten, auf denen Sie Schriften beziehen können:

- Einen Distributor von kostenlosen Schriften: Dies ist eine Seite, die kostenlose Schriften zum Download anbietet (es können trotzdem Lizenzbedingungen bestehen, wie die Erwähnung des Schriftgestalters). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [dafont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Einen kostenpflichtigen Schriften-Distributor: Dies ist eine Seite, die Schriften gegen Entgelt anbietet, wie [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können Schriften auch direkt von Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriften-Service: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt und den Prozess einfacher macht. Weitere Details finden Sie im Abschnitt [Verwenden eines Online-Schriftenservice](#verwenden_eines_online-schriftenservice).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Taste und speichern Sie die Datei im gleichen Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob sie TTF (True Type Fonts) oder OTF (Open Type Fonts) sind.

Entpacken Sie die beiden Schriftpakete (Web-Schriften werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Möglicherweise finden Sie im Paket mehrere Schriftdateien – einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, zum Beispiel dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel möchten wir, dass Sie sich nur um eine einzelne Schriftdatei für jede Auswahl kümmern.

> [!NOTE]
> In Font Squirrel, im Abschnitt "Schriften finden" in der rechten Spalte, können Sie auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Den erforderlichen Code generieren

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schrift befolgen Sie diese Schritte:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Schriften hochladen_ hoch.
4. Kreuzen Sie das Kästchen mit der Aufschrift „Ja, die Schriften, die ich hochlade, sind rechtlich berechtigt, für die Webeinbettung genutzt zu werden“ an.
5. Klicken Sie auf _Laden Sie Ihr Paket herunter_.

Nachdem der Generator die Verarbeitung abgeschlossen hat, sollten Sie eine ZIP-Datei zum Herunterladen erhalten. Speichern Sie diese im selben Verzeichnis wie Ihre HTML- und CSS-Dateien.

Wenn Sie Unterstützung für ältere Browser benötigen, wählen Sie den "Experten"-Modus im Fontsquirrel Webfont Generator, wählen Sie SVG-, EOT- und TTF-Formate aus, bevor Sie Ihr Paket herunterladen.

Webdienste zur Schrifterstellung begrenzen typischerweise die Dateigrößen. In einem solchen Fall sollten Sie Tools wie die folgenden in Betracht ziehen:

1. [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) zum Konvertieren von ttf zu woff
2. [fontforge](https://fontforge.org/) zum Konvertieren von ttf zu svg
3. [batik ttf2svg](https://xmlgraphics.apache.org/batik/tools/font-converter.html) zum Konvertieren von ttf zu svg
4. [woff2](https://github.com/google/woff2) zum Konvertieren von ttf zu woff2

### Implementieren des Codes in Ihrem Demo

An dieser Stelle entpacken Sie das Webfont-Kit, das Sie gerade generiert haben. Im entpackten Verzeichnis finden Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift – laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Simples um, wie `fonts`.
2. Öffnen Sie die Datei `stylesheet.css` und kopieren Sie die beiden `@font-face` Regelsätze in Ihre `web-font-start.css` Datei – Sie müssen sie ganz oben einfügen, vor Ihrem gesamten CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren wollen. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, daher fügen Sie `fonts/` an den Anfang jedes Pfades hinzu (bei Bedarf anpassen).
4. Jetzt können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Am Ende sollten Sie eine Demo-Seite mit einigen schönen darauf implementierten Schriften haben. Da unterschiedliche Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu verbessern.

![Das fertige Design einer Webfont-Übung zum aktiven Lernen. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriften und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme bei der Umsetzung haben, können Sie gerne Ihre Version mit unseren fertigen Dateien vergleichen – siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwenden eines Online-Schriftenservice

Online-Schriftenservices speichern und liefern im Allgemeinen Schriften für Sie, sodass Sie sich nicht um den `@font-face` Code kümmern müssen. Stattdessen müssen Sie im Allgemeinen nur eine einfache Zeile oder zwei Codezeilen in Ihre Seite einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für rasche Tests und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu verwenden, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie den Überblick bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, aus denen Sie wählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftenvorschau und drücken Sie die ⊕-Taste neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _Ihre ausgewählten Familien anzeigen_ in der oberen rechten Ecke der Seite.
5. In dem resultierenden Bildschirm müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihrer HTML-Datei einfügen. Setzen Sie es über das vorhandene {{htmlelement("link")}}-Element, damit die Schrift importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Dann müssen Sie die in Ihrem CSS aufgeführten CSS-Deklarationen entsprechend kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie können eine fertige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css) finden, wenn Sie Ihre Arbeit mit unserer vergleichen müssen ([sehen Sie es sich live an](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face` Syntax erkunden, die für Sie von Fontsquirrel generiert wurde. So sieht einer der Regelsätze aus:

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

Lassen Sie uns durchgehen, was es tut:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie auf die Schrift verweisen möchten. Dies kann alles sein, was Sie möchten, solange Sie es konsequent in Ihrem gesamten CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftsatzdateien an, die in Ihr CSS importiert werden sollen (der `url`-Teil), und das Format jeder Schriftsatzdatei (der `format`-Teil). Der letztere Teil ist in jedem Fall optional, aber es ist nützlich, ihn anzugeben, da er Browsern ermöglicht, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können durch Kommata getrennt aufgelistet werden. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichtungen derselben Schrift importieren, können Sie angeben, welches Gewicht/Style sie hat und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt alle verschiedenen Mitglieder der Schriftfamilie mit unterschiedlichen Namen aufrufen zu müssen. [@font-face-Tipp: definieren Sie font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was zu tun ist, im Detail.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}} und {{cssxref("font-stretch")}} Werte für Ihre Web-Schriften angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, der einen bestimmten Bereich von Zeichen darstellt, die Sie möglicherweise aus der Web-Schrift verwenden möchten. In unterstützenden Browsern wird die Schrift nur dann heruntergeladen, wenn die angegebene Zeichen auf der Seite enthalten sind, was unnötiges Herunterladen spart. [Erstellung benutzerdefinierter Schriftstapel mit Unicode-Bereich](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Variable Schriften

Es gibt eine neuere Schriftentechnologie in Browsern namens Variable Schriften. Diese Schriften ermöglichen viele verschiedene Variationen einer Schriftart in einer einzigen Datei, anstatt für jede Breite, jedes Gewicht oder jeden Stil eine separate Datei zu haben. Sie sind etwas fortgeschritten für unseren Anfängerkurs, aber wenn Sie sich selbst fordern und sich mit ihnen beschäftigen möchten, lesen Sie unseren [Leitfaden zu variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

## Zusammenfassung

Da Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Satzgestaltung einer Gemeinschaftsschul-Homepage](/de/docs/Learn/CSS/Styling_text/Typesetting_a_homepage).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
