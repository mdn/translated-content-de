---
title: Web-Fonts
slug: Learn/CSS/Styling_text/Web_fonts
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zum Styling von Schriften und Text untersucht. In diesem Artikel gehen wir weiter ins Detail mit Web-Fonts. Wir werden sehen, wie Sie benutzerdefinierte Schriften auf Ihrer Webseite verwenden können, um vielfältigere und individuellere Textgestaltungen zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundkenntnisse in CSS (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS Text- und Schriftgrundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Web-Fonts auf einer Webseite anwendet, entweder durch die Nutzung eines Drittanbieterdienstes oder durch das Schreiben Ihres eigenen Codes.
      </td>
    </tr>
  </tbody>
</table>

## Wiederholung der Schriftfamilien

Wie wir in den [grundlegenden Text- und Schriftstilen](/de/docs/Learn/CSS/Styling_text/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriften mit der {{cssxref("font-family")}}-Eigenschaft kontrolliert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen an. Beim Anzeigen einer Webseite geht ein Browser die Liste der font-family-Werte durch, bis er eine auf dem System verfügbare Schrift findet:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, jedoch waren die Schriftwahlmöglichkeiten von Webentwicklern traditionell begrenzt. Es gibt nur eine Handvoll Schriften, von denen Sie garantieren können, dass sie auf allen gängigen Systemen verfügbar sind — die sogenannten [Web-sicheren Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriften anzugeben, gefolgt von web-sicheren Alternativen und der Standardsystemschrift. Dies erhöht jedoch Ihren Arbeitsaufwand, da Sie sicherstellen müssen, dass Ihre Designs mit jeder Schrift funktionieren.

## Web-Fonts

Aber es gibt eine sehr gut funktionierende Alternative. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, wenn sie aufgerufen wird. Dies bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die Schriftarten anzeigen kann, die Sie speziell ausgewählt haben. Unglaublich! Die erforderliche Syntax sieht etwa so aus:

Zuerst haben Sie ein {{cssxref("@font-face")}}-Regelset am Anfang des CSS, das die herunterzuladenden Schriftdatei(en) angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den innerhalb von {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schrift wie gewohnt auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als dies. Wir gehen im Folgenden näher darauf ein.

Hier sind einige wichtige Punkte, die Sie über Web-Fonts beachten sollten:

1. Schriften sind im Allgemeinen nicht kostenlos nutzbar. Sie müssen für sie bezahlen und/oder anderen Lizenzbedingungen folgen, wie z. B. den Schriftenersteller in Ihrem Code (oder auf Ihrer Seite) anzugeben. Sie sollten keine Schriften stehlen und sie ohne ordnungsgemäße Anerkennung verwenden.
2. Alle gängigen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriften, chromatischer Schriften und Schriftensammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mit mehreren herunterzuladenden Schriftdateien zur Verfügung stellen, wählt der Browser die erste Schriftdatei, die er verwenden kann. Darum sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein — nämlich WOFF2 — mit den älteren Formaten, die danach aufgeführt sind. Browser, die ein Format nicht verstehen, greifen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Web-Fonts zum Download bereitstellen. Dieser Artikel erklärt, wie man den Fontsquirrel Webfont Generator verwendet, um die erforderlichen Dateien zu erstellen.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Web-Fonts handelt oder nicht. Dieses Video bietet eine schöne Einführung:

{{EmbedYouTube("UazfLa1O94M")}}

## Praktisches Lernen: Ein Web-Font-Beispiel

Mit diesen Informationen im Hinterkopf, lassen Sie uns ein grundlegendes Web-Font-Beispiel aus ersten Prinzipien entwickeln. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Daher möchten wir, dass Sie die in den folgenden Abschnitten detailliert beschriebenen Schritte befolgen, um einen Eindruck vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css`-Datei finden Sie etwas minimales CSS, um das grundlegende Layout und die Typografie des Beispiels zu handhaben.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Web-Fonts: einen für die Überschriften und einen für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in unterschiedlichen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Seiten, auf denen Sie Schriften erhalten können:

- Ein kostenloser Schriftenanbieter: Dies ist eine Seite, die kostenlose Schriften zum Download anbietet (es können trotzdem einige Lizenzbedingungen bestehen, wie die Anerkennung des Schriftenerstellers). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftenanbieter: Dies ist eine Seite, die Schriften gegen eine Gebühr anbietet, wie [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch Schriften direkt bei Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftendienst: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt, wodurch der gesamte Prozess vereinfacht wird. Weitere Informationen finden Sie im Abschnitt [Verwendung eines Online-Schriftendienstes](#verwendung_eines_online-schriftendienstes).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften aus: eine schöne, interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Web-Fonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie finden möglicherweise mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, zum Beispiel dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel möchten wir, dass Sie sich mit einer einzelnen Schriftdatei für jede Ihrer Wahl beschäftigen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifizierungen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Erzeugen des erforderlichen Codes

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) erzeugen. Für jede Schrift führen Sie diese Schritte aus:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllen, wenn Sie dies in einem kommerziellen und/oder Web-Projekt verwenden möchten.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Klicken Sie _Download your kit_.

Nach Abschluss der Verarbeitung durch den Generator sollten Sie eine ZIP-Datei zum Download erhalten. Speichern Sie sie im selben Verzeichnis wie Ihr HTML und CSS.

Wenn Sie ältere Browser unterstützen müssen, wählen Sie den "Expert"-Modus im Fontsquirrel Webfont Generator, wählen Sie SVG-, EOT- und TTF-Formate aus, bevor Sie Ihr Kit herunterladen.

Webdienste für die Schriftgenerierung begrenzen typischerweise die Dateigrößen. In einem solchen Fall ziehen Sie in Betracht, Tools wie die folgenden zu verwenden:

1. [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) zum Konvertieren von ttf zu woff
2. [FontForge](https://fontforge.org/) zum Konvertieren von ttf in svg
3. [batik ttf2svg](https://xmlgraphics.apache.org/batik/tools/font-converter.html) zum Konvertieren von ttf in svg
4. [woff2](https://github.com/google/woff2) zum Konvertieren von ttf in woff2

### Implementierung des Codes in Ihr Demo

Entpacken Sie an diesem Punkt das Webfont-Kit, das Sie gerade erstellt haben. Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`-, `.woff2`-Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussieht.
- Eine `stylesheet.css`-Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihr Demo zu implementieren, befolgen Sie diese Schritte:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Einfaches um, wie `fonts`.
2. Öffnen Sie die `stylesheet.css`-Datei und kopieren Sie die beiden `@font-face`-Regelsets in Ihre `web-font-start.css`-Datei — Sie müssen sie ganz oben platzieren, vor jedem Ihrer CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` zu jedem Pfadbeginn hinzu (passen Sie sie bei Bedarf an).
4. Jetzt können Sie diese Schriften in Ihrem Schriftstapel verwenden, genau wie jede web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten am Ende eine Demoseite mit einigen schönen Schriften haben, die darauf implementiert wurden. Da unterschiedliche Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und das Gefühl zu vereinheitlichen.

![Das fertige Design einer Web-Font-Übung zum aktiven Lernen. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriften und Texte in verschiedenen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version gerne mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftendienstes

Online-Schriftendienste speichern und stellen im Allgemeinen Schriften für Sie bereit, sodass Sie sich keine Gedanken über das Schreiben von `@font-face`-Code machen müssen. Stattdessen müssen Sie im Allgemeinen nur eine einfache Zeile oder zwei Code in Ihre Seite einfügen, um alles funktionieren zu lassen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementsbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, besonders für schnelle Testarbeiten und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie den Eindruck bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie auswählen möchten, und wählen Sie ein paar Schriftarten aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕-Schaltfläche neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _View your selected families_ in der oberen rechten Ecke der Seite.
5. Auf der folgenden Seite müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihrer HTML-Datei einfügen. Setzen Sie es oberhalb des vorhandenen {{htmlelement("link")}}-Elements, damit die Schrift importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Sie müssen dann die aufgelisteten CSS-Deklarationen in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie finden eine fertige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), falls Sie Ihre Arbeit mit unserer vergleichen müssen ([siehe es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die von Fontsquirrel generierte `@font-face`-Syntax genauer betrachten. So sieht eines der Regelsets aus:

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

Lassen Sie uns es durchgehen, um zu sehen, was es macht:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie auf die Schrift verweisen möchten. Dies kann alles sein, was Sie möchten, solange Sie es in Ihrem gesamten CSS konsequent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den in Ihr CSS zu importierenden Schriftdateien an (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letztgenannte Teil ist in jedem Fall optional, aber nützlich zu deklarieren, da er es Browsern ermöglicht, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser sie gemäß den Regeln des Kaskadiersystems durchsuchen wird, ist es am besten, Ihre bevorzugten Formate wie WOFF2 am Anfang anzugeben.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/ welchen Stil sie hat, und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen diesen zu wählen, anstatt alle verschiedenen Mitglieder der Schriftfamilie unterschiedliche Namen zu geben. [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was im Detail zu tun ist.

> [!NOTE]
> Sie können auch spezielle Werte von {{cssxref("font-variant")}} und {{cssxref("font-stretch")}} für Ihre Web-Fonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, was einem bestimmten Bereich von Zeichen entspricht, den Sie möglicherweise aus der Web-Schrift verwenden möchten. In unterstützten Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, wodurch unnötiges Herunterladen vermieden wird. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet nützliche Ideen, wie Sie dies nutzen können.

## Variable Schriften

Es gibt eine neuere Schrifttechnologie, die in Browsern verfügbar ist, sogenannte variable Schriften. Diese sind Schriften, die viele verschiedene Variationen eines Schriftbildes in eine einzelne Datei integrieren, anstatt eine separate Schriftdatei für jede Breite, jedes Gewicht oder jeden Stil zu haben. Sie sind etwas fortgeschrittener für unseren Einsteigerkurs, aber wenn Sie sich selbst herausfordern und sich damit beschäftigen möchten, lesen Sie unseren [Leitfaden zu variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu Grundlagen des Textstylings durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Satz einer Startseite für eine Gemeinschaftsschule](/de/docs/Learn/CSS/Styling_text/Typesetting_a_homepage).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
