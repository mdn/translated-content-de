---
title: Webfonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 76d104c2fbc4680d70b548a6de4daabf4ac0cff3
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zum Stylen von Schriftarten und Texten erkundet. In diesem Artikel werden wir weiter gehen und Webfonts im Detail untersuchen. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um eine vielfältigere, benutzerdefinierte Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schrift-Styling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts Entwicklern erlauben, über das web-sichere Schriftarten-Set hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code>-Regel und gängige Deskriptoren.</li>
         <li>Verwendung eines Webfonts mit der <code>font-family</code>-Eigenschaft.</li>
         <li>Verwendung eines Online-Dienstes zur Suche nach Webfonts und zur Generierung von Webfont-Code, beispielsweise <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie in [Grundlegendes Text- und Schrift-Styling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) behandelt, können die auf Ihr HTML angewendeten Schriftarten mit der {{cssxref("font-family")}}-Eigenschaft gesteuert werden. Diese Eigenschaft nimmt einen oder mehrere Namen von Schriftfamilien an. Beim Anzeigen einer Webseite durchläuft ein Browser eine Liste von Werten der font-family, bis er eine auf dem System verfügbare Schriftart findet, auf dem er ausgeführt wird:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber die Schriftwahl der Webentwickler war traditionell eingeschränkt. Es gibt nur eine Handvoll Schriftarten, die Sie auf allen gebräuchlichen Systemen garantieren können — die sogenannten [Web-sicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Stack verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von Web-sicheren Alternativen und schließlich der Standardsystemschriftart. Dies erhöht jedoch den Arbeitsaufwand aufgrund der erforderlichen Tests, um sicherzustellen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Es gibt eine gut funktionierende Alternative. CSS erlaubt Ihnen, Schriftartdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, wenn darauf zugegriffen wird. Dies bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die von Ihnen speziell ausgewählten Schriftarten anzeigen kann. Erstaunlich! Die erforderliche Syntax sieht in etwa so aus:

Zuerst haben Sie eine {{cssxref("@font-face")}}-Regel zu Beginn des CSS, die die herunterzuladende Schriftartdatei(en) angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den innerhalb von {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart auf alles anzuwenden, was Sie möchten, wie gewohnt:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax kann etwas komplexer werden. Wir gehen unten ausführlicher darauf ein.

Hier sind einige wichtige Dinge, die Sie über Webfonts beachten sollten:

1. Schriftarten sind im Allgemeinen nicht frei von Einschränkungen zu benutzen. Sie müssen für sie bezahlen und/oder sie unterliegen anderen Lizenzbedingungen, wie zum Beispiel, den Schriftschöpfer in Ihrem Code (oder auf Ihrer Seite) zu nennen. Sie sollten keine Schriftarten stehlen und verwenden, ohne die richtige Anerkennung zu geben.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamten Spezifikationen von TrueType und OpenType, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftkollektionen.
4. Die Reihenfolge, in der Sie Schriftartdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mit mehreren herunterzuladenden Schriftartdateien geben, wählt der Browser die erste Schriftartdatei, die er verwenden kann. Deshalb sollte das zuerst aufgelistete Format das bevorzugte Format sein — das ist WOFF2 —, gefolgt von den älteren Formaten. Browser, die ein Format nicht verstehen, fallen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webschriftarten zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfont Generator verwenden, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriftarten zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Webfonts handelt oder nicht.

## Aktives Lernen: Ein Webfont-Beispiel

Mit diesem Wissen im Hinterkopf, lassen Sie uns ein grundlegendes Webfont-Beispiel von Grund auf erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die in den folgenden Abschnitten beschriebenen Schritte ausführen, um einen Eindruck vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie einige minimale CSS-Regeln, um das grundlegende Layout und die Satzgestaltung des Beispiels zu behandeln.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Webschriftarten: eine für die Überschriften und eine für den Fließtext. Zunächst müssen wir die Schriftdateien finden, die die Schriftarten enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Webseiten, auf denen Sie Schriftarten erhalten können:

- Ein kostenloser Schriftenanbieter: Dies ist eine Webseite, die kostenlose Schriftarten zum Download bereitstellt (es kann dennoch Lizenzbedingungen geben, wie etwa, den Schriftschöpfer zu nennen). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftenanbieter: Dies ist eine Webseite, die kostenpflichtige Schriften anbietet, wie [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch direkt bei Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftendienst: Dies ist eine Webseite, die die Schriften für Sie speichert und bereitstellt, wodurch der gesamte Prozess einfacher wird. Siehe den Abschnitt [Verwendung eines Online-Schriftendienstes](#verwendung_eines_online-schriftendienstes) für weitere Details.

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab Serif-Schrift) und eine etwas weniger auffällige und lesbarere Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern Sie die Datei im gleichen Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webschriftarten werden üblicherweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie werden möglicherweise mehrere Schriftdateien im Paket finden — einige Schriftarten werden als Familie mit verschiedenen verfügbaren Varianten verteilt, zum Beispiel dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel sollen Sie sich nur auf eine einzelne Schriftdatei für jede Wahl konzentrieren.

> [!NOTE]
> In Font Squirrel, unter dem Abschnitt "Find fonts" in der rechten Spalte, können Sie auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Generierung des benötigten Codes

Jetzt müssen Sie den benötigten Code (und die Schriftformate) generieren. Für jede Schrift folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie sämtliche Lizenzanforderungen erfüllt haben, falls Sie dies in einem kommerziellen und/oder Webprojekt nutzen.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Klicken Sie auf _Download your kit_.

Nachdem der Generator die Verarbeitung abgeschlossen hat, sollten Sie eine ZIP-Datei zum Herunterladen erhalten. Speichern Sie sie im gleichen Verzeichnis wie Ihr HTML und CSS.

### Implementierung des Codes in Ihrem Demo

Entpacken Sie zu diesem Zeitpunkt das Webfont-Kit, das Sie gerade generiert haben. Im entpackten Verzeichnis finden Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussieht.
- Eine `stylesheet.css`-Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Leichtes um, wie `fonts`.
2. Öffnen Sie die Datei `stylesheet.css` und kopieren Sie die zwei `@font-face`-Regelsätze in Ihre `web-font-start.css`-Datei — Sie müssen sie ganz oben vor Ihrem CSS platzieren, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` vor jedem Pfad hinzu (passen Sie dies entsprechend an).
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

Sie sollten mit einer Demoseite enden, auf der einige schöne Schriften implementiert sind. Da verschiedene Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Erscheinungsbild zu optimieren.

![Das fertige Design einer Webfont-Lernübung. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält unterschiedliche Schriften und Text in verschiedenen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftendienstes

Online-Schriftendienste speichern und liefern in der Regel Schriften für Sie, sodass Sie sich nicht um das Schreiben des `@font-face`-Codes kümmern müssen. Stattdessen müssen Sie in der Regel nur eine oder zwei Codezeilen in Ihre Seite einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf Abonnements, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelles Testing und Demos.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Schauen wir uns kurz Google Fonts an, damit Sie die Idee bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriften anzuzeigen, die Sie auswählen möchten, und wählen Sie ein paar Schriften aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕-Taste neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _View your selected families_ in der oberen rechten Ecke der Seite.
5. Auf dem sich ergebenden Bildschirm müssen Sie zunächst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihrer HTML-Datei einfügen. Setzen Sie es über das bestehende {{htmlelement("link")}}-Element, damit die Schrift importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Sie müssen dann die aufgelisteten CSS-Deklarationen in Ihr CSS einfügen, um die benutzerdefinierten Schriftarten auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie finden eine vollständige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), falls Sie Ihre Arbeit mit unserer vergleichen müssen ([sehen Sie es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face`-Syntax untersuchen, die für Sie von Fontsquirrel generiert wurde. Die Regelsätze sehen in etwa so aus:

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

- `font-family`: Diese Zeile gibt den Namen an, mit dem Sie sich auf die Schriftart beziehen möchten. Dies kann alles sein, was Sie möchten, solange Sie es konsistent in Ihrem CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den zu importierenden Schriftdateien in Ihr CSS an (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letzte Teil in jedem Fall ist optional, aber nützlich zu deklarieren, da er es Browsern ermöglicht, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet werden, getrennt durch Kommata. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben an, wie schwer die Schriftart ist und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/Stil sie hat und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt alle verschiedenen Mitglieder der Schriftfamilie unterschiedliche Namen nennen zu müssen. [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was im Detail zu tun ist.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}}- und {{cssxref("font-stretch")}}-Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, der einen bestimmten Bereich von Zeichen darstellt, den Sie möglicherweise aus dem Webfont verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötiges Herunterladen spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie Sie dies nutzen können.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen des Textstylings durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Typografie einer Community-Schulhomepage.

## Siehe auch

- [Variable fonts guide](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Fonts knowledge](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
