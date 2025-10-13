---
title: Webschriften
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen für die Gestaltung von Schriftarten und Text untersucht. In diesem Artikel werden wir weitergehen und Webschriften im Detail erkunden. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um vielseitigere, benutzerdefinierte Textgestaltungen zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webschriften Entwicklern erlauben, über die Anzahl der web-sicheren Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegendes Setup — die <code>@font-face</code>-Regel und allgemeine Deskriptoren.</li>
         <li>Verwendung einer Webschrift mit der <code>font-family</code>-Eigenschaft.</li>
         <li>Verwendung eines Onlinedienstes, um Webschriften zu finden und Webschriftencode zu generieren, beispielsweise <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir im [Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriften mit der {{cssxref("font-family")}}-Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen an. Beim Anzeigen einer Webseite durchläuft ein Browser eine Liste von `font-family`-Werten, bis er eine auf dem System verfügbare Schriftart findet, auf dem er läuft:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftwahlmöglichkeiten von Webentwicklern begrenzt. Es gibt nur eine Handvoll Schriften, die Sie auf allen gängigen Systemen verfügbar garantieren können — die sogenannten [Web-sicheren Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von web-sicheren Alternativen und schließlich der Standardsystemschrift. Dies erhöht jedoch Ihren Arbeitsaufwand, da Tests erforderlich sind, um sicherzustellen, dass Ihre Designs mit jeder Schrift funktionieren.

## Webschriften

Es gibt eine Alternative, die gut funktioniert. CSS erlaubt es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden, wenn diese aufgerufen wird. Das bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die Schriften anzeigen kann, die Sie speziell ausgewählt haben. Erstaunlich! Die erforderliche Syntax sieht etwa so aus:

Zuerst haben Sie ein {{cssxref("@font-face")}}-Regelset am Anfang des CSS, das die herunterzuladenden Schriftdateien spezifiziert:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den im {{cssxref("@font-face")}} angegebenen `font-family`-Namen, um Ihre benutzerdefinierte Schrift ganz normal auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als das. Wir werden weiter unten detaillierter darauf eingehen.

Hier sind einige wichtige Dinge, die Sie bei Webschriften beachten sollten:

1. Schriften sind im Allgemeinen nicht ohne Einschränkungen kostenlos zu verwenden. Sie müssen dafür bezahlen und/oder andere Lizenzbedingungen befolgen, wie z.B. den Schriftersteller in Ihrem Code (oder auf Ihrer Seite) anzuerkennen. Sie sollten keine Schriften stehlen und ohne ordnungsgemäße Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriften, chromatischer Schriften und Schriftkollektionen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste von mehreren herunterzuladenden Schriftdateien bereitstellen, wählt der Browser die erste aus, die er verwenden kann. Deshalb sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein — nämlich WOFF2 — mit den älteren Formaten danach. Browser, die ein Format nicht verstehen, fallen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webschriften für den Download bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, egal ob es sich um Webschriften handelt oder nicht.

## Hinzufügen eigener Webschriften

Mit diesen Informationen werden wir Sie nun bitten, ein einfaches Webschriftbeispiel ausgehend von den ersten Prinzipien zu erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die Schritte in den folgenden Abschnitten befolgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie etwas minimalen CSS, um das grundlegende Layout und die Schriftsetzung des Beispiels zu verwalten.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Webschriften: eine für die Überschriften und eine für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, auf denen Sie Schriften erhalten können:

- Ein Gratis-Schriftdistributor: Dies ist eine Site, die kostenlose Schriftarten zum Download verfügbar macht (es kann trotzdem einige Lizenzbedingungen geben, wie z.B. die Nennung des Schrifterstellers). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftdistributor: Dies ist eine Site, die Schriften gegen Gebühr verfügbar macht, wie zum Beispiel [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch direkt von Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Site, die die Schriften für Sie speichert und bereitstellt, was den gesamten Prozess erleichtert. Details finden Sie im Abschnitt [Verwendung eines Online-Schriftservice](#verwendung_eines_online-schriftservice).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine weniger auffällige, leichter lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Taste und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webschriften werden in der Regel in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie können mehrere Schriftdateien im Paket finden — einige Schriften werden als Familie mit verschiedenen Varianten wie dünn, mittel, fett, kursiv, dünn kursiv usw. verteilt. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzelnen Schriftdatei für jede Wahl beschäftigen.

> [!NOTE]
> In Font Squirrel, unter dem Abschnitt "Find fonts" in der rechten Spalte, können Sie auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Optionen zu filtern.

### Den erforderlichen Code generieren

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schrift folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Add fonts_ hoch.
4. Drücken Sie _Convert_.
5. Drücken Sie _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde. Entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihr HTML und CSS.

### Implementierung des Codes in Ihrem Demo

Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussieht.
- Eine `stylesheet.css`-Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Einfaches um, zum Beispiel `fonts`.
2. Öffnen Sie die `stylesheet.css`-Datei und kopieren Sie die beiden `@font-face`-Regelsätze in Ihre `web-font-start.css`-Datei — Sie müssen sie ganz oben platzieren, vor jeglichem CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, fügen Sie also `fonts/` am Anfang jedes Pfades hinzu (passen Sie es entsprechend an).
4. Jetzt können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten am Ende eine Demoseite mit einigen schön implementierten Schriften haben. Da verschiedene Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu ordnen.

![Das fertige Design einer Webfont-Übung. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder [das fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservice

Online-Schriftservices speichern und liefern in der Regel die Schriften für Sie, sodass Sie sich nicht um das Schreiben des `@font-face`-Codes kümmern müssen. Stattdessen müssen Sie in der Regel nur eine oder zwei Zeilen Code in Ihre Website einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abobasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelle Tests und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu verwenden, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie eine Vorstellung bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie auswählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕-Taste neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _View your selected families_ in der oberen rechten Ecke der Seite.
5. Auf dem resultierenden Bildschirm müssen Sie zunächst die zeilenweise HTML-Code kopieren und in den Kopfteil Ihrer HTML-Datei einfügen. Setzen Sie es über das vorhandene {{htmlelement("link")}}-Element, damit die Schriftart importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Dann müssen Sie die aufgelisteten CSS-Deklarationen entsprechend in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie können eine fertige Version bei [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css) finden, falls Sie Ihre Arbeit mit unserer vergleichen möchten ([siehe es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die von Transfonter für Sie generierte `@font-face`-Syntax untersuchen. Die Regelsätze sehen ungefähr so aus:

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

Gehen wir sie durch, um zu sehen, was sie bewirken:

- `font-family`: Diese Zeile spezifiziert den Namen, den Sie verwenden möchten, um auf die Schrift zu verweisen. Dies kann alles sein, was Sie möchten, solange Sie es durchgängig in Ihrem CSS verwenden.
- `src`: Diese Zeilen spezifizieren die Pfade zu den Schriftdateien, die in Ihr CSS importiert werden sollen (der `url`-Teil), und das Format jeder Schriftdatei (der `format`-Teil). Der letztere Teil ist in jedem Fall optional, aber nützlich zu erklären, weil er es Browsern ermöglicht, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser sie gemäß den Regeln des Kaskadensystems durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schrift importieren, können Sie angeben, was deren Gewicht/Stil ist, und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt alle verschiedenen Mitglieder der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was im Detail zu tun ist.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile spezifiziert, wie die Schrift angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}}-Werte für Ihre Webschriften angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, der einen bestimmten Zeichensatzbereich festlegt, den Sie aus der Webschrift verwenden möchten. In unterstützenden Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötiges Herunterladen spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie Sie dies nutzen können.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Die Schriftauswahl für eine Community-Schul-Homepage festlegen.

## Siehe auch

- [Variable fonts guide](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Fonts knowledge](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
