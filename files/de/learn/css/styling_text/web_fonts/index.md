---
title: Webfonts
slug: Learn/CSS/Styling_text/Web_fonts
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Features untersucht, die für das Stylen von Schriften und Texten verfügbar sind. In diesem Artikel gehen wir weiter ins Detail und erforschen Webfonts. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten auf Ihrer Webseite verwenden können, um vielfältigere und individuellere Textgestaltungen zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundlagen von CSS (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >Grundlagen zu CSS-Text und -Schriften</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Webfonts auf einer Webseite anwendet, entweder über einen Drittanbieterdienst oder durch eigenes Schreiben von Code.
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir in [Grundlagen zur Text- und Schriftgestaltung](/de/docs/Learn/CSS/Styling_text/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriftarten mit der {{cssxref("font-family")}}-Eigenschaft steuern. Diese nimmt einen oder mehrere Schriftfamiliennamen. Bei der Anzeige einer Webseite wird ein Browser eine Liste von font-family-Werten durchgehen, bis er eine auf dem System verfügbare Schriftart findet:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftartwahlmöglichkeiten von Webentwicklern begrenzt. Es gibt nur eine Handvoll von Schriften, die Sie garantieren können, dass sie auf allen gängigen Systemen verfügbar sind — die sogenannten [Web-sicheren Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts). Sie können den Font-Stack verwenden, um bevorzugte Schriften anzugeben, gefolgt von Web-sicheren Alternativen und schließlich der Standardsystemschriftart. Dies erhöht jedoch Ihre Arbeitslast aufgrund der erforderlichen Tests, um sicherzustellen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Aber es gibt eine Alternative, die sehr gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien, die im Web verfügbar sind, anzugeben, die zusammen mit Ihrer Website heruntergeladen werden, wenn diese aufgerufen wird. Dies bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die von Ihnen ausgewählten Schriften anzeigen kann. Fabelhaft! Die erforderliche Syntax sieht etwa so aus:

Zunächst verfügt man über ein {{cssxref("@font-face")}}-Regelset am Anfang des CSS, das die herunterzuladenden Schriftdatei(en) angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart wie gewohnt auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als das, worauf wir weiter unten im Detail eingehen werden.

Hier sind einige wichtige Dinge, die man über Webfonts beachten sollte:

1. Schriften sind im Allgemeinen nicht kostenlos nutzbar. Sie müssen dafür bezahlen und/oder anderen Lizenzbedingungen folgen, wie z.B. den Schriftgestalter in Ihrem Code (oder auf Ihrer Seite) zu erwähnen. Sie sollten keine Schriften stehlen und ohne entsprechende Anerkennung verwenden.
2. Alle gängigen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt das komplette TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriften, chromatischer Schriften und Schriftenkollektionen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste von mehreren Schriftdateien zur Verfügung stellen, wählt der Browser die erste aus, die er verwenden kann. Deshalb sollte das zuerst aufgeführte Format das bevorzugte Format sein — also WOFF2 — mit älteren Formaten danach. Browser, die ein Format nicht verstehen, fallen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webfonts zum Download bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden können, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriftarten zu untersuchen und zu bearbeiten, unabhängig davon, ob es sich um Webfonts handelt oder nicht. Dieses Video bietet eine schöne Einführung:

{{EmbedYouTube("UazfLa1O94M")}}

## Aktives Lernen: Ein Webfont-Beispiel

Mit diesen Informationen im Hinterkopf, lassen Sie uns ein einfaches Webfont-Beispiel von den Grundlagen ausgehend aufbauen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die Schritte in den untenstehenden Abschnitten befolgen, um einen Eindruck vom Prozess zu bekommen.

Sie sollten die [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) Dateien als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css` Datei finden Sie einige minimale CSS-Angaben, um das grundlegende Layout und die Typografie des Beispiels zu bearbeiten.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zunächst müssen wir die Schriftdateien finden, die die gewünschten Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, über die Sie Schriften beziehen können:

- Ein Verteiler für kostenlose Schriften: Dies ist eine Seite, die kostenlose Schriften zum Download bereitstellt (es können dennoch Lizenzbedingungen bestehen, wie z.B. die Nennung des Schriftgestalters). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [dafont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein Verteiler für kostenpflichtige Schriften: Dies ist eine Seite, die Schriften gegen Gebühr bereitstellt, wie z.B. [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch Schriften direkt von Schriftgießereien kaufen, beispielsweise [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt, wodurch der gesamte Prozess erleichtert wird. Siehe den Abschnitt [Verwenden eines Online-Schriftservices](#verwendung_eines_online-schriftservices) für weitere Details.

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriftarten aus: eine interessante Schriftart für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schriftart für die Absätze. Wenn Sie eine Schriftart gefunden haben, drücken Sie den Download-Button und speichern Sie die Datei im selben Verzeichnis, in dem sich die HTML- und CSS-Dateien befinden, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Möglicherweise finden Sie mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen Varianten verteilt, z.B. dünn, mittel, fett, kursiv, dünn kursiv etc. Für dieses Beispiel sollten Sie sich nur auf eine einzelne Schriftdatei pro Auswahl konzentrieren.

> [!NOTE]
> In Font Squirrel, im Abschnitt "Find fonts" in der rechten Spalte, können Sie auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Den erforderlichen Code generieren

Nun müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schrift folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre zwei Schriftdateien mit dem Button _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen mit der Aufschrift "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Klicken Sie auf _Download your kit_.

Nachdem der Generator die Verarbeitung abgeschlossen hat, sollten Sie eine ZIP-Datei zum Download erhalten. Speichern Sie sie im selben Verzeichnis wie Ihre HTML- und CSS-Dateien.

Wenn Sie Unterstützung für ältere Browser benötigen, wählen Sie den "Expert"-Modus im Fontsquirrel Webfont Generator aus und wählen Sie SVG-, EOT- und TTF-Formate, bevor Sie Ihr Kit herunterladen.

Webdienste für die Schrifterzeugung begrenzen typischerweise die Dateigrößen. In einem solchen Fall ziehen Sie die Verwendung von Tools wie in Betracht:

1. [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) für die Umwandlung von ttf in woff
2. [fontforge](https://fontforge.org/) zur Umwandlung von ttf in svg
3. [batik ttf2svg](https://people.apache.org/~clay/batik/ttf2svg.html) zur Umwandlung von ttf in svg
4. [woff2](https://github.com/google/woff2) zur Umwandlung von ttf in woff2

### Implementierung des Codes in Ihrem Demo

Öffnen Sie nun das Webfont-Kit, das Sie gerade generiert haben. Im entpackten Verzeichnis werden Sie einige nützliche Elemente sehen:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in einen einfachen und leicht zu merkenden Namen wie `fonts`.
2. Öffnen Sie die `stylesheet.css` Datei und kopieren Sie die zwei `@font-face` Regelsets in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben platzieren, vor jedem CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` an den Anfang jedes Pfades hinzu (passen Sie an, wenn nötig).
4. Jetzt können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede web sichere oder Standardsystemschriftart. Zum Beispiel:

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

Sie sollten mit einer Demo-Seite enden, auf der einige schöne Schriften implementiert sind. Da unterschiedliche Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu klären.

![Das fertige Design einer aktiven Übung zu Webfonts. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihren Code mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live anzeigen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und liefern in der Regel die Schriften für Sie, sodass Sie sich keine Gedanken über das Schreiben des `@font-face`-Codes machen müssen. Stattdessen müssen Sie im Allgemeinen nur eine einfache Zeile oder zwei Code in Ihre Seite einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Services sind abonnementsbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelle Testarbeiten und das Schreiben von Demos.

Die meisten dieser Services sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Werfen wir einen kurzen Blick auf Google Fonts, damit Sie eine Vorstellung davon bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, aus denen Sie wählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie den ⊕-Button neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie den _Ihre ausgewählten Familien anzeigen_ Button in der oberen rechten Ecke der Seite.
5. Im daraufhin angezeigten Bildschirm müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihrer HTML-Datei einfügen. Setzen Sie es über das vorhandene {{htmlelement("link")}}-Element, damit die Schriftart importiert wird, bevor Sie versuchen, sie im CSS zu verwenden.
6. Sie müssen dann die aufgelisteten CSS-Deklarationen entsprechend in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie finden eine vollständige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), wenn Sie Ihre Arbeit mit unserer vergleichen möchten ([sehen Sie live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die von FontSquirrel für Sie generierte @font-face-Syntax untersuchen. So sieht eines der Regelsets aus:

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

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie auf die Schriftart verweisen möchten. Dies kann alles sein, was Sie möchten, solange Sie es in Ihrem gesamten CSS konsistent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den in Ihr CSS zu importierenden Schriftdateien an (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letztere Teil ist jeweils optional, aber es ist nützlich, ihn zu deklarieren, da es Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können mit Kommas getrennt aufgeführt werden. Da der Browser gemäß den Regeln der Kaskade durch sie hindurch sucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schrift importieren, können Sie angeben, was deren Gewicht/Stil ist und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt alle verschiedenen Mitglieder der Schriftfamilie unterschiedliche Namen zu geben. [@font-face Tipp: Definieren Sie font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt genauer, was zu tun ist.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}} und {{cssxref("font-stretch")}} Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der ein spezifischer Bereich von Zeichen ist, den Sie möglicherweise aus dem Webfont verwenden möchten. In unterstützenden Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötiges Herunterladen spart. [Custom Font Stacks mit Unicode-Range erstellen](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Variable Fonts

Es gibt eine neuere Schrifttechnologie, die in Browsern verfügbar ist, die sogenannten Variable Fonts. Diese sind Schriftarten, die viele verschiedene Variationen eines Schriftsatzes in einer einzigen Datei ermöglichen, anstatt eine separate Schriftartendatei für jede Breite, Gewicht oder Stil zu haben. Sie sind etwas fortgeschritten für unseren Einsteigerkurs, aber wenn Sie sich danach fühlen, sich zu strecken und sie zu erkunden, lesen Sie unseren [Leitfaden zu Variable Fonts](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen des Textstils durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Bewertung für das Modul zu testen: [Satz einer Community-School-Homepage](/de/docs/Learn/CSS/Styling_text/Typesetting_a_homepage).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
