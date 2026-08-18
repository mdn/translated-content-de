---
title: Webfonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen erkundet, die zum Stylen von Schriftarten und Text zur Verfügung stehen. In diesem Artikel gehen wir weiter und erkunden Webfonts im Detail. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten auf Ihrer Webseite verwenden können, um ein vielfältigeres und individuelles Textstyling zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftartenstyling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts es Entwicklern ermöglichen, über den Satz an websicheren Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code> Regel und gängige Deskriptoren.</li>
         <li>Verwendung eines Webfonts mit der <code>font-family</code> Eigenschaft.</li>
         <li>Nutzung eines Online-Dienstes zum Finden von Webfonts und Generieren von Webfont-Code, beispielsweise <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir in [Grundlegendes Text- und Schriftartenstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) betrachtet haben, können die auf Ihrem HTML angewandten Schriftarten mit der {{cssxref("font-family")}} Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftfamilien-Namen. Bei der Anzeige einer Webseite wird ein Browser eine Liste von `font-family`-Werten durchgehen, bis er eine Schriftart findet, die auf dem System verfügbar ist, auf dem er läuft:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Auswahlmöglichkeiten der Schriftarten für Webentwickler begrenzt. Es gibt nur eine Handvoll von Schriftarten, bei denen Sie garantieren können, dass sie auf allen gängigen Systemen verfügbar sind – die sogenannten [websicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftarten-Stack verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von websicheren Alternativen und schließlich der Standardsystemschrift. Dies erhöht jedoch den Arbeitsaufwand, da das Testen erforderlich ist, um sicherzustellen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Es gibt eine Alternative, die gut funktioniert. CSS erlaubt es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, wenn sie aufgerufen wird. Das bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die von Ihnen speziell gewählten Schriftarten anzeigen kann. Erstaunlich! Die dafür erforderliche Syntax sieht ungefähr so aus:

Zuerst haben Sie einen {{cssxref("@font-face")}} Regelblock am Anfang des CSS, der die herunterzuladenden Schriftdatei(en) angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den innerhalb von {{cssxref("@font-face")}} angegebenen Schriftfamilien-Namen, um Ihre benutzerdefinierte Schriftart wie gewohnt auf alles anzuwenden, was Sie möchten:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als dies. Wir werden unten genauer darauf eingehen.

Hier sind einige wichtige Dinge, die Sie über Webfonts beachten sollten:

1. Fonts sind generell nicht ohne Einschränkungen frei nutzbar. Sie müssen für sie bezahlen und/oder anderen Lizenzbedingungen folgen, z.B. den Schriftersteller in Ihrem Code (oder auf Ihrer Seite) nennen. Sie sollten keine Fonts stehlen und verwenden, ohne ordnungsgemäßen Kredit zu geben.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die Gesamtheit der TrueType- und OpenType-Spezifikationen, einschließlich variabler Fonts, chromatischer Fonts und Fontsammlungen.
4. Die Reihenfolge, in der Sie Fontdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste von mehreren Fontdateien zum Herunterladen bereitstellen, wählt der Browser die erste Fontdatei, die er verwenden kann. Deshalb sollte das von Ihnen zuerst aufgeführte Format das bevorzugte Format sein — das ist WOFF2 — mit den älteren Formaten danach. Browser, die ein Format nicht verstehen, werden dann auf das nächste Format in der Liste zurückgreifen.
5. Wenn Sie mit Legacy-Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG Webfonts zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie man den Fontsquirrel Webfont Generator verwendet, um die benötigten Dateien zu erzeugen.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Fonts zu untersuchen und zu manipulieren, unabhängig davon, ob sie Webfonts sind oder nicht.

## Eigene Webfonts hinzufügen

Mit diesem Wissen wollen wir ein einfaches Beispiel für einen Webfont von Grund auf erstellen. Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie minimales CSS, um das grundlegende Layout und die Typografie des Beispiels zu behandeln.

### Schriften finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zunächst müssen wir die Fontdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Seiten, auf denen Sie Schriften erhalten können:

- Ein Distributor für kostenlose Schriften: Dies ist eine Seite, die kostenlose Schriften zum Download anbietet (es kann trotzdem einige Lizenzbedingungen geben, wie z.B. den Schriftersteller zu nennen). Beispiele hierfür sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/), und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Distributeur von Schriften: Dies ist eine Seite, die Schriften gegen Gebühr anbietet, wie [myfonts.com](https://www.myfonts.com/). Sie können auch direkt von Schriftgießereien Schriften kaufen, zum Beispiel bei [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt, was den gesamten Prozess erleichtert. Siehe den Abschnitt [Einen Online-Schriftservice verwenden](#einen_online-schriftservice_verwenden) für mehr Details.

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften aus: Eine interessante Schrift für die Überschriften (vielleicht eine auffällige Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern Sie die Datei im gleichen Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden normalerweise in ZIP-Dateien mit den Schriftdatei(en) und Lizenzinformationen verteilt). In dem Paket finden Sie möglicherweise mehrere Schriftdateien — einige Schriften werden als Familie mit verschiedenen Variationen verteilt — zum Beispiel dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzigen Schriftdatei für jede Wahl befassen.

> [!NOTE]
> In Font Squirrel, unter dem Abschnitt "Find fonts" in der rechten Spalte, können Sie auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Optionen zu filtern.

### Den erforderlichen Code generieren

Jetzt müssen Sie den erforderlichen Code (und Schriftformate) generieren. Für jede Schriftart führen Sie die folgenden Schritte aus:

1. Vergewissern Sie sich, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Fontdateien mit der Schaltfläche _Add fonts_ hoch.
4. Klicken Sie auf _Convert_.
5. Klicken Sie auf _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Den Code in Ihr Beispiel implementieren

Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schriftart: die `.woff`-, `.woff2`-Dateien.
- Eine Demodatei im HTML-Format für jede Schriftart — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Anwendungskontexten aussehen wird.
- Eine `stylesheet.css`-Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Beispiel zu implementieren, befolgen Sie diese Schritte:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Leichtes um, wie `fonts`.
2. Öffnen Sie die Datei `stylesheet.css` und kopieren Sie die beiden `@font-face` Regelblöcke in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben einsetzen, vor jedem Ihrer CSS-Stile, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen verweist auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien richtig sind, also fügen Sie `fonts/` am Anfang jedes Pfades hinzu (passen Sie es gegebenenfalls an).
4. Jetzt können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede websichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten auf einer Beispielseite mit einigen schönen Schriften enden. Da verschiedene Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu verbessern.

![Das fertige Design einer Webfont-Übung. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriften und Text in verschiedenen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dies zum Laufen zu bringen, können Sie Ihre Version jederzeit mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/web-fonts/web-font-finished.html).

## Einen Online-Schriftservice verwenden

Online-Schriftservices speichern und servieren die Schriften in der Regel für Sie, sodass Sie sich keine Sorgen um das Schreiben des `@font-face` Codes machen müssen. Stattdessen müssen Sie in der Regel nur eine einfache Zeile oder zwei Zeilen Code in Ihre Seite einfügen, um alles funktionieren zu lassen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelles Testen und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu verwenden. Werfen wir einen schnellen Blick auf Google Fonts, damit Sie die Idee bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Finden Sie ein paar Schriftarten, die Ihnen gefallen, indem Sie die Filter und die Suchleiste verwenden.
3. Klicken Sie auf eine Schriftart, um deren Detailseite zu öffnen.
4. Wenn Sie eine Schriftart gefunden haben, die Ihnen gefällt, klicken Sie auf die **Get font** Schaltfläche auf deren Detailseite, um sie zur ausgewählten Schriftartenseite hinzuzufügen. Wenn Sie eine weitere Schriftart hinzufügen möchten, klicken Sie auf die Zurück-Taste Ihres Browsers und suchen Sie erneut.
5. Sobald Sie mit der Auswahl der Schriftarten fertig sind, klicken Sie auf die **Get embed code** Schaltfläche auf der ausgewählten Schriftartenseite und kopieren die bereitgestellten `<link>`-Elemente.
6. Fügen Sie die `<link>`-Elemente in den `<head>` Ihres HTML-Dokuments ein, oberhalb aller vorhandenen Stylesheet-Links.
7. Kopieren Sie die bereitgestellten `font-family` CSS-Regeln und verwenden Sie sie in Ihrem CSS, um die Schriftarten anzuwenden, ähnlich wie im vorherigen Ablauf beschrieben.

> [!NOTE]
> Sie können eine vollständige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.css) finden, wenn Sie Ihre Arbeit mit unserer vergleichen möchten ([siehe es live](https://mdn.github.io/learning-area/css/web-fonts/google-font.html)).

## @font-face im Detail

Betrachten wir die von Transfonter für Sie generierte `@font-face` Syntax näher. Die Regelblöcke werden etwa so aussehen:

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

Gehen wir durch, was es macht:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie die Schriftart referenzieren möchten. Dies kann alles sein, was Ihnen gefällt, solange Sie es konsequent in Ihrem gesamten CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil) und das Format jeder Schriftdatei (der `format` Teil). Letzteres ist in jedem Fall optional, aber es ist nützlich, dies zu deklarieren, da es den Browsern erlaubt, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgelistet werden, getrennt durch Kommata. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schriftart hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte einer gleichen Schriftart importieren, können Sie angeben, welches Gewicht/Stil sie haben, und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen auszuwählen, anstatt allen Mitgliedern der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face Tipp: gewicht und stil definieren, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt im Detail, was zu tun ist.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile gibt an, wie die Schriftart angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der einen bestimmten Bereich von Zeichen darstellt, den Sie möglicherweise aus dem Webfont verwenden möchten. In unterstützenden Browsern wird der Font nur heruntergeladen, wenn die Seite diese spezifischen Zeichen enthält, um unnötige Downloads zu vermeiden. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Zusammenfassung

Jetzt, da Sie unsere Artikel über die Grundlagen des Textstylings durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: [Typesetting a community school homepage](/de/docs/Learn_web_development/Core/Text_styling/Typesetting_a_homepage).

Sobald Sie mit der Herausforderung fertig sind, können Sie mit dem Lernen über [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) fortfahren.

## Siehe auch

- [Variable Fonts Leitfaden](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Fonts Wissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
