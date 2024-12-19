---
title: Webfonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel dieses Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Text erkundet. In diesem Artikel gehen wir weiter ins Detail und erkunden Webfonts. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um eine vielfältigere und individuellere Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts es Entwicklern ermöglichen, über den Satz an Web-sicheren Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code> At-Regel und gängige Deskriptoren.</li>
         <li>Verwenden eines Webfonts mit der Eigenschaft <code>font-family</code>.</li>
         <li>Verwenden eines Online-Dienstes zum Finden von Webfonts und Generieren von Webfont-Code, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die Schriftarten, die auf Ihr HTML angewendet werden, mit der Eigenschaft {{cssxref("font-family")}} gesteuert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen an. Beim Anzeigen einer Webseite durchsucht ein Browser eine Liste von font-family-Werten, bis er eine Schriftart findet, die auf dem System verfügbar ist, auf dem er läuft:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftartenauswahlmöglichkeiten von Webentwicklern eingeschränkt. Es gibt nur eine Handvoll Schriftarten, die auf allen gängigen Systemen garantiert verfügbar sind — die sogenannten [Web-sicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Font-Stack verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von Web-sicheren Alternativen und schließlich der Standardsystemschriftart. Dies erhöht jedoch den Arbeitsaufwand, da Sie sicherstellen müssen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Es gibt eine Alternative, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden, wenn sie aufgerufen wird. Dies bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die von Ihnen speziell ausgewählten Schriftarten anzeigen kann. Fantastisch! Die erforderliche Syntax sieht in etwa so aus:

Zuerst haben Sie eine {{cssxref("@font-face")}}-Regel am Anfang des CSS, die die herunterzuladenden Schriftdateien spezifiziert:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart wie gewohnt auf beliebige Elemente anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als das. Wir gehen im Folgenden genauer darauf ein.

Hier sind einige wichtige Punkte zu beachten, wenn es um Webfonts geht:

1. Schriften sind im Allgemeinen nicht ohne Einschränkungen kostenlos nutzbar. Sie müssen für sie bezahlen und/oder andere Lizenzbedingungen einhalten, wie z.B. die Nennung des Schriftart-Erstellers in Ihrem Code (oder auf Ihrer Website). Sie sollten keine Schriftarten stehlen und verwenden, ohne ordnungsgemäßen Kredit zu geben.
2. Alle gängigen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamten TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftkollektionen.
4. Die Reihenfolge, in der Sie die Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer herunterzuladender Schriftdateien bereitstellen, wählt der Browser die erste Schriftdatei aus, die er verwenden kann. Deshalb sollte das zuerst genannte Format das bevorzugte Format sein — also WOFF2 — mit den älteren Formaten, die danach aufgelistet werden. Browser, die ein Format nicht verstehen, wechseln dann zum nächsten Format in der Liste.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webfonts zum Herunterladen anbieten. Dieser Artikel erklärt, wie Sie mit dem Fontsquirrel Webfont Generator die erforderlichen Dateien generieren können.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriftarten, egal ob es sich um Webfonts handelt oder nicht, zu untersuchen und zu bearbeiten.

## Aktives Lernen: Ein Webfont-Beispiel

Mit diesen Informationen im Hinterkopf lassen Sie uns ein einfaches Webfont-Beispiel von den Grundlagen aufbauen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Wir möchten daher, dass Sie die in den folgenden Abschnitten beschriebenen Schritte befolgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie einige minimale CSS-Anweisungen zur Behandlung des grundlegenden Layouts und der Typografie des Beispiels.

### Schriften finden

Für dieses Beispiel werden wir zwei Webfonts verwenden: einen für die Überschriften und einen für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriftarten enthalten. Schriftarten werden von Schriftgießereien erstellt und in unterschiedlichen Dateiformaten gespeichert. Im Allgemeinen gibt es drei Arten von Websites, auf denen Sie Schriftarten erhalten können:

- Ein kostenloser Schriftenverteiler: Dies ist eine Seite, die kostenlose Schriften zum Herunterladen anbietet (es können dennoch einige Lizenzbedingungen gelten, wie z.B. die Nennung des Schriftart-Erstellers). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftenvertrieb: Dies ist eine Seite, die Schriftarten gegen Gebühr anbietet, wie [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch Schriftarten direkt bei Schriftgießereien kaufen, z.B. [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt, wodurch der gesamte Prozess vereinfacht wird. Weitere Details dazu finden Sie im Abschnitt [Verwendung eines Online-Schriftservices](#verwendung_eines_online-schriftservices).

Lassen Sie uns einige Schriften finden! Besuchen Sie [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften aus: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Schaltfläche zum Herunterladen und speichern Sie die Datei im gleichen Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und die Lizenzinformationen enthalten). Sie könnten mehrere Schriftdateien im Paket finden — einige Schriften werden als Familie mit unterschiedlichen verfügbaren Varianten verteilt, z.B. dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer Schriftdatei für jede Auswahl befassen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifizierungen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Generierung des erforderlichen Codes

Nun müssen Sie den benötigten Code (und Schriftformate) generieren. Für jede Schriftart folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Klicken Sie auf _Download your kit_.

Nachdem der Generator die Bearbeitung abgeschlossen hat, sollten Sie eine ZIP-Datei zum Herunterladen erhalten. Speichern Sie diese im gleichen Verzeichnis wie Ihr HTML und CSS.

### Implementierung des Codes in Ihrem Demo

Entpacken Sie nun das Webfont-Kit, das Sie gerade generiert haben. Im entpackten Verzeichnis finden Sie einige nützliche Elemente:

- Zwei Versionen jedes Fonts: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schriftart — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo umzusetzen, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches um, wie `fonts`.
2. Öffnen Sie die `stylesheet.css` Datei und kopieren Sie die beiden `@font-face` Regelsets in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben einfügen, vor Ihrem gesamten CSS, da die Schriftarten importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()` Funktionen verweist auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` an den Anfang jedes Pfades hinzu (passen Sie dies bei Bedarf an).
4. Jetzt können Sie diese Schriftarten in Ihren Font-Stacks verwenden, genau wie jede Web-sichere oder Standardsystemschriftart. Zum Beispiel:

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

Sie sollten am Ende eine Demo-Seite mit einigen schönen implementierten Schriften haben. Da unterschiedliche Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise Größe, Abstände usw. anpassen, um das Aussehen und Gefühl zu verbessern.

![Das fertige Design einer Webfont-Übung zum aktiven Lernen. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält unterschiedliche Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version gerne mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder [das fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und liefern in der Regel Schriftarten für Sie, sodass Sie sich nicht um das Schreiben des `@font-face` Codes kümmern müssen. Sie müssen in der Regel einfach eine oder zwei Zeilen Code in Ihre Website einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf einem Abonnement, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), ein nützlicher kostenloser Dienst, insbesondere für schnelles Testen und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu nutzen, daher werden wir sie nicht ausführlich behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie eine Idee bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie wählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕ Schaltfläche neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _View your selected families_ in der oberen rechten Ecke der Seite.
5. Auf dem daraufhin angezeigten Bildschirm müssen Sie zuerst die gezeigte HTML-Codezeile kopieren und in den Kopfbereich Ihrer HTML-Datei einfügen. Setzen Sie sie über das bestehende {{htmlelement("link")}} Element, damit die Schrift importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Dann müssen Sie die aufgelisteten CSS-Deklarationen in Ihr CSS kopieren, um die benutzerdefinierten Schriftarten auf Ihr HTML anzuwenden.

> [!NOTE]
> Eine vollständige Version finden Sie unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), falls Sie Ihre Arbeit mit unserer vergleichen möchten ([siehe es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face` Syntax erkunden, die von Fontsquirrel für Sie generiert wurde. Die Regelwerke werden in etwa so aussehen:

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

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie sich auf die Schriftart beziehen möchten. Dies kann alles sein, was Sie möchten, solange Sie es in Ihrem gesamten CSS konsistent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil) und das Format jeder Schriftdatei (der `format` Teil). Der letztere Teil ist in jedem Fall optional, aber es ist nützlich, ihn anzugeben, da es Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgelistet werden, getrennt durch Kommas. Da der Browser sie den Regeln der Kaskade folgend durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang zu nennen.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, welches Gewicht die Schriftart hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichtungen derselben Schrift importieren, können Sie angeben, welches Gewicht/Stil sie haben, und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt alle Mitglieder der Schriftfamilie mit unterschiedlichen Namen aufrufen zu müssen. [@font-face Tipp: font-weight und font-style definieren, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was im Detail zu tun ist.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}} und {{cssxref("font-stretch")}} Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der einen bestimmten Bereich von Zeichen beschreibt, die Sie möglicherweise aus dem Webfont verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese bestimmten Zeichen enthält, was unnötige Downloads spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie Sie dies nutzen können.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den grundlegenden Aspekten der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Die Typografie einer Webseite für eine Gemeinschaftsschule.

## Siehe auch

- [Variable Fonts Leitfaden](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  - : Variable Schriften ermöglichen es, viele verschiedene Variationen einer Schriftart in eine einzige Datei zu integrieren, anstatt für jede Breite, Gewichtung oder Stil eine separate Schriftdatei zu haben. Diese sind für unseren Anfängerkurs zwar etwas fortgeschritten, schauen Sie sich diesen Leitfaden aber an, wenn Sie sich weiterentwickeln möchten.
- [Fonts Wissen](https://fonts.google.com/knowledge), Google Fonts
  - : Eine Reihe von nützlichen, detaillierten Artikeln, die verschiedene Aspekte der Verwendung von Schriftarten abdecken.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
