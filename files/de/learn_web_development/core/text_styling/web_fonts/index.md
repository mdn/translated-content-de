---
title: Web Fonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: c699955e1e368bd42d6ea9318a6afc9256c3036f
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriften und Text untersucht. In diesem Artikel gehen wir weiter und erkunden Webfonts im Detail. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um eine vielfältigere, benutzerdefinierte Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts Entwicklern ermöglichen, über das web-sichere Schriftsatz hinaus benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegendes Setup — die <code>@font-face</code> Regel und allgemeine Deskriptoren.</li>
         <li>Verwendung einer Webschriftart mit der <code>font-family</code> Eigenschaft.</li>
         <li>Verwendung eines Onlinedienstes, um Webfonts zu finden und Webfont-Code zu generieren, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriften über die {{cssxref("font-family")}} Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen an. Beim Darstellen einer Webseite durchläuft der Browser eine Liste von font-family-Werten, bis er eine Schriftart findet, die auf dem System verfügbar ist, auf dem er ausgeführt wird:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftartauswahlmöglichkeiten für Webentwickler begrenzt. Es gibt nur eine Handvoll Schriftarten, die Sie garantieren können, dass sie auf allen gängigen Systemen verfügbar sind - die sogenannten [Web-sicheren Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriften anzugeben, gefolgt von web-sicheren Alternativen und anschließend der Standardsystemschrift. Dies erhöht jedoch Ihren Arbeitsaufwand, da Tests erforderlich sind, um sicherzustellen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Es gibt eine Alternative, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden, wenn auf sie zugegriffen wird. Das bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die Schriften anzeigen kann, die Sie speziell ausgewählt haben. Fantastisch! Die erforderliche Syntax sieht etwa so aus:

Zunächst haben Sie ein {{cssxref("@font-face")}} Regelset am Anfang des CSS, das die herunterzuladenden Schriftdateien angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart auf alles anzuwenden, was Sie möchten, wie gewohnt:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als dies. Wir werden weiter unten ausführlicher darauf eingehen.

Hier sind einige wichtige Dinge, die Sie über Webfonts beachten sollten:

1. Schriften sind im Allgemeinen nicht ohne Einschränkungen frei nutzbar. Sie müssen für sie bezahlen und/oder andere Lizenzbedingungen einhalten, z. B. den Schriftart-Ersteller in Ihrem Code oder auf Ihrer Website anzugeben. Sie sollten keine Schriftarten stehlen und ohne ordnungsgemäße Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftsammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer herunterzuladender Schriftdateien zur Verfügung stellen, wählt der Browser die erste Schriftdatei, die er verwenden kann. Deshalb sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein — das heißt WOFF2 — mit den älteren Formaten, die danach aufgelistet werden. Browser, die ein Format nicht verstehen, fallen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webschriften zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden, um die benötigten Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Webfonts handelt oder nicht.

## Hinzufügen Ihrer eigenen Webfonts

Mit diesem Wissen bitten wir Sie nun, ein grundlegendes Webfont-Beispiel von Grund auf zu erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die in den folgenden Abschnitten beschriebenen Schritte befolgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie etwas minimalen CSS, um das grundlegende Layout und die Schriftsetzung des Beispiels zu behandeln.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zunächst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, auf denen Sie Schriftarten erhalten können:

- Ein kostenloser Schriftenverteiler: Dies ist eine Website, die kostenlose Schriften zum Download zur Verfügung stellt (es können dennoch einige Lizenzbedingungen gelten, wie z. B. die Nennung des Erstellers der Schrift). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftenverteiler: Dies ist eine Website, die Schriftarten gegen Bezahlung anbietet, wie z. B. [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können Schriften auch direkt bei Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Website, die die Schriften für Sie speichert und bereitstellt, was den gesamten Prozess erleichtert. Weitere Details finden Sie im Abschnitt [Verwendung eines Online-Schriftservices](#verwendung_eines_online-schriftservices).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften aus: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und lesbarere Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern die Datei im selben Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob es sich um TTF- (True Type Fonts) oder OTF- (Open Type Fonts) Dateien handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden üblicherweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Möglicherweise finden Sie mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, zum Beispiel dünn, mittel, fett, kursiv, dünn kursiv usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzelnen Schriftdatei für jede Auswahl beschäftigen.

> [!NOTE]
> In Font Squirrel, unter dem Abschnitt "Schriften finden" in der rechten Spalte, können Sie auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Generierung des erforderlichen Codes

Nun müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schriftart befolgen Sie diese Schritte:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche "Schriften hinzufügen" hoch.
4. Klicken Sie auf "Konvertieren".
5. Klicken Sie auf "Herunterladen".

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Implementierung des Codes in Ihrer Demo

Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Anwendungskontexten aussehen wird.
- Eine `stylesheet.css` Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriftarten in Ihrer Demo zu implementieren, befolgen Sie diese Schritte:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Einfaches wie `fonts` um.
2. Öffnen Sie die Datei `stylesheet.css` und kopieren Sie die beiden `@font-face` Regelsets in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben einfügen, bevor Sie Ihren CSS-Code hinzufügen, da die Schriftarten importiert werden müssen, bevor Sie sie auf Ihrer Website verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, fügen Sie also `fonts/` am Anfang jedes Pfades hinzu (passen Sie dies nach Bedarf an).
4. Jetzt können Sie diese Schriftarten in Ihren Schriftstapeln verwenden, genau wie bei jeder web-sicheren oder Standardsystemschrift. Zum Beispiel:

   ```css
   @font-face {
     font-family: "zantrokeregular";
     src:
       url("fonts/zantroke-webfont.woff2") format("woff2"),
       url("fonts/zantroke-webfont.woff") format("woff");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
   }
   ```

   ```css
   font-family: "zantrokeregular", serif;
   ```

Sie sollten mit einer Demoseite mit einigen schönen Schriften enden. Da unterschiedliche Schriftarten in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu klären.

![Das fertige Design einer Übung mit Webfonts. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihren Code gerne mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können den [Code auch von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und servieren in der Regel Schriftarten für Sie, sodass Sie sich keine Gedanken über das Schreiben des `@font-face` Codes machen müssen. Stattdessen müssen Sie in der Regel nur ein oder zwei einfache Codezeilen in Ihre Website einfügen, damit alles funktioniert. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Services sind abonnementbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), ein nützlicher kostenloser Service, besonders für schnelles Testen und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie die Idee verstehen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ihren Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, aus denen Sie wählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕ Schaltfläche neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die "Ihre ausgewählten Familien anzeigen" Schaltfläche in der oberen rechten Ecke der Seite.
5. In dem resultierenden Bildschirm müssen Sie zunächst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihrer HTML-Datei einfügen. Setzen Sie sie über das vorhandene {{htmlelement("link")}} Element, damit die Schriftart importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Dann müssen Sie die aufgelisteten CSS Deklarationen in Ihrem CSS an geeigneter Stelle kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie können eine abgeschlossene Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css) finden, wenn Sie Ihre Arbeit mit unserer vergleichen müssen ([sehen Sie es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns diese `@font-face` Syntax erkunden, die von Transfonter für Sie generiert wurde. Die Regelsets sehen ungefähr so aus:

```css
@font-face {
  font-family: "zantrokeregular";
  src:
    url("zantroke-webfont.woff2") format("woff2"),
    url("zantroke-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Lassen Sie uns durchgehen, was es tut:

- `font-family`: Diese Zeile gibt den Namen an, auf den Sie sich in der Regel auf die Schrift beziehen möchten. Dies kann alles sein, was Sie wollen, solange Sie es in Ihrem gesamten CSS konsistent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil), und das Format jeder Schriftdatei (der `format` Teil). Der letzte Teil ist in jedem Fall optional, aber nützlich, da er Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, zu Beginn anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Stile derselben Schrift importieren, können Sie angeben, welches Gewicht/Stil sie hat, und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt alle Mitglieder der Schriftfamilie unterschiedlich benennen zu müssen. [@font-face Tipp: Definieren Sie font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was zu tun ist, ausführlicher.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile gibt an, wie die Schrift angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der einen spezifischen Bereich von Zeichen darstellt, die Sie möglicherweise aus der Webschrift verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, wodurch unnötiges Herunterladen vermieden wird. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie Sie dies nutzen können.

## Zusammenfassung

Da Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Satz einer Homepage einer Gemeinschaftsschule.

## Siehe auch

- [Variable Fonts Leitfaden](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Google Fonts Wissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
