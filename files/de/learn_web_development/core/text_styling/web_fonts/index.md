---
title: Webschriften
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Features für die Gestaltung von Schriften und Text erkundet. In diesem Artikel werden wir weiter gehen und Webschriften im Detail betrachten. Wir sehen, wie man benutzerdefinierte Schriften mit Ihrer Webseite verwendet, um vielfältigere und maßgeschneiderte Textgestaltungen zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Inhalte mit HTML strukturieren</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webschriften Entwicklern ermöglichen, über das Set sicherer Webschriftarten hinauszugehen und benutzerdefinierte Schriften in ihren Webanwendungen zu nutzen.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code> Regel und allgemeine Deskriptoren.</li>
         <li>Verwendung einer Webschrift mit der <code>font-family</code> Eigenschaft.</li>
         <li>Verwendung eines Onlinedienstes, um Webschriften zu finden und Webschrift-Code zu generieren, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wiederholung der Schriftfamilien

Wie wir im [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) betrachtet haben, können die Schriften, die auf Ihr HTML angewendet werden, mit der {{cssxref("font-family")}} Eigenschaft gesteuert werden. Diese Eigenschaft akzeptiert einen oder mehrere Schriftfamiliennamen. Beim Anzeigen einer Webseite geht ein Browser die Liste der font-family-Werte durch, bis er einen auf dem System verfügbaren Schriftstil findet:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftauswahlen von Webentwicklern eingeschränkt. Es gibt nur eine Handvoll von Schriftarten, die auf allen gängigen Systemen garantiert verfügbar sind — die sogenannten [websicheren Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriften anzugeben, gefolgt von websicheren Alternativen und der Standardschrift des Systems. Dies erhöht jedoch Ihre Arbeitslast, da Tests erforderlich sind, um sicherzustellen, dass Ihr Design mit jeder Schriftart funktioniert.

## Webschriften

Es gibt eine Alternative, die gut funktioniert. CSS erlaubt es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden können, sobald diese aufgerufen wird. Das bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die Schriften anzeigen kann, die Sie speziell ausgewählt haben. Fantastisch! Die dafür erforderliche Syntax sieht etwa so aus:

Zunächst haben Sie ein {{cssxref("@font-face")}} Regelset am Anfang des CSS, welches die herunterzuladenden Schriftdateien spezifiziert:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schrift auf beliebige Elemente anzuwenden, wie gewohnt:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als das. Wir werden dies unten detaillierter erläutern.

Hier sind einige wichtige Punkte, die Sie über Webschriften beachten sollten:

1. Schriften sind im Allgemeinen nicht uneingeschränkt kostenlos verwendbar. Sie müssen dafür bezahlen und/oder andere Lizenzbedingungen einhalten, wie zum Beispiel den Schriftkünstler in Ihrem Code (oder auf Ihrer Seite) zu erwähnen. Sie sollten keine Schriften stehlen und ohne ordnungsgemäße Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriften, chromatischer Schriften und Schriftkollektionen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer herunterzuladender Schriftdateien geben, wählt der Browser die erste aus, die er verwenden kann. Daher sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein — also WOFF2 — und die älteren Formate danach. Browser, die ein Format nicht verstehen, greifen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG Webschriften zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, egal ob es sich um Webschriften handelt oder nicht.

## Eigene Webschriften hinzufügen

Mit diesem Wissen bitten wir Sie nun, ein grundlegendes Webschrift-Beispiel von Grund auf zu erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die detailliert beschriebenen Schritte in den folgenden Abschnitten befolgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css` Datei finden Sie einige minimale CSS-Anweisungen, die sich mit dem grundlegenden Layout und der Typografie des Beispiels befassen.

### Schriften finden

Für dieses Beispiel werden wir zwei Webschriften verwenden: eine für die Überschriften und eine für den Fließtext. Zunächst müssen wir die Schriftdateien finden, die diese Schriftarten enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, auf denen Sie Schriften erhalten können:

- Einen kostenlosen Schriftdistributor: Dies ist eine Website, die kostenlose Schriften zum Download bereitstellt (es können dennoch einige Lizenzbedingungen bestehen, wie zum Beispiel die Erwähnung des Schriftkünstlers). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Einen kostenpflichtigen Schriftdistributor: Dies ist eine Website, die Schriften gegen Gebühr anbietet, wie zum Beispiel [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch Schriften direkt von Schriftgießereien kaufen, z.B. [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Einen Online-Schriftdienst: Dies ist eine Website, die die Schriften für Sie speichert und bereitstellt, wodurch der ganze Prozess erleichtert wird. Weitere Details finden Sie im Abschnitt [Verwendung eines Online-Schriftdienstes](#verwendung_eines_online-schriftdienstes).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften aus: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern Sie die Datei im gleichen Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webschriften werden normalerweise in ZIP-Dateien verteilt, die die Schriftdateien und Lizenzinformationen enthalten). Sie finden möglicherweise mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, zum Beispiel dünn, mittel, fett, kursiv, dünn kursiv usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzigen Schriftdatei für jede Wahl befassen.

> [!NOTE]
> In Font Squirrel können Sie im rechten Bereich unter "Find fonts" auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Den erforderlichen Code generieren

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schrift folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre zwei Schriftdateien hoch, indem Sie die _Add fonts_ Schaltfläche verwenden.
4. Klicken Sie auf _Convert_.
5. Klicken Sie auf _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde. Entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihr HTML und CSS.

### Den Code in Ihrem Demo implementieren

Im entpackten Verzeichnis finden Sie einige nützliche Dinge:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demodatei im HTML-Format für jede Schrift — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face Code enthält, den Sie benötigen.

Um die Schriften in Ihrem Demo zu implementieren, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Einfaches um, wie `fonts`.
2. Öffnen Sie die `stylesheet.css` Datei und kopieren Sie die beiden `@font-face` Regelsets in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben vor all Ihrem anderen CSS einfügen, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, daher fügen Sie `fonts/` an den Anfang jedes Pfades hinzu (bei Bedarf anpassen).
4. Nun können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten mit einer Demoseite enden, die einige schöne Schriften darauf implementiert hat. Da verschiedene Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Erscheinungsbild zu optimieren.

![Das fertige Design einer Webschriftübung. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Text in verschiedenen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftdienstes

Online-Schriftdienste speichern und liefern in der Regel Schriften für Sie, sodass Sie sich nicht darum kümmern müssen, den `@font-face` Code zu schreiben. Stattdessen müssen Sie normalerweise nur eine einfache Zeile oder zwei Code in Ihre Seite einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf einem Abonnement, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelle Tests und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns Google Fonts kurz anschauen, damit Sie eine Vorstellung bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren bevorzugten Schriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie auswählen möchten und wählen Sie ein paar Schriften, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕ Schaltfläche neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die _View your selected families_ Schaltfläche oben rechts auf der Seite.
5. Auf dem resultierenden Bildschirm müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopfteil Ihrer HTML-Datei einfügen. Setzen Sie dies über das bestehende {{htmlelement("link")}} Element, damit die Schrift importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Dann müssen Sie die aufgelisteten CSS-Deklarationen entsprechend in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie finden eine vollständige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), wenn Sie Ihre Arbeit mit unserer vergleichen möchten ([sehen Sie es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face` Syntax erkunden, die von Transfonter für Sie generiert wurde. Die Regelsets sehen ungefähr so aus:

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

Gehen wir es durch, um zu sehen, was es tut:

- `font-family`: Diese Zeile spezifiziert den Namen, unter dem Sie die Schrift ansprechen möchten. Dies kann alles sein, was Sie möchten, solange Sie es in Ihrem gesamten CSS konsistent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil), und das Format jeder Schriftdatei (der `format` Teil). Letzterer Teil ist in jedem Fall optional, aber nützlich zu deklarieren, da er es den Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgelistet werden, getrennt durch Kommata. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/Style sie hat, und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt alle unterschiedlichen Mitglieder der Schriftfamilie unterschiedliche Namen zu geben. [@font-face Tipp: Definieren von font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt im Detail, was zu tun ist.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile gibt an, wie die Schrift angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} Werte für Ihre Webschriften angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert festlegen, der einen bestimmten Bereich von Zeichen darstellt, die Sie aus der Webschrift verwenden möchten. In unterstützenden Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese bestimmten Zeichen enthält, wodurch unnötiges Herunterladen vermieden wird. [Erstellen kundenspezifischer Schriftstapel mit Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Gestaltung einer Startseite einer Gemeinschaftsschule.

## Siehe auch

- [Leitfaden für variable Schriften](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Schriftenwissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
