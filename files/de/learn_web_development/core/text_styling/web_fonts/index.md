---
title: Webfonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 418fefaa02f8e1ea53d53cb6fc510a4dc4100dc5
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Text untersucht. In diesem Artikel werden wir tiefer gehen und Webfonts im Detail beleuchten. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um die Textgestaltung vielfältiger und individueller zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilgrundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen des Text- und Schriftstyling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts Entwicklern ermöglichen, über das set sicherer Webschriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code>-Regel und gängige Deskriptoren.</li>
         <li>Verwendung eines Webfonts mit der <code>font-family</code>-Eigenschaft.</li>
         <li>Verwendung eines Onlinedienstes zum Finden von Webfonts und Erzeugen von Webfont-Code, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überblick über Schriftfamilien

Wie wir in [Grundlagen des Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die Schriftarten, die auf Ihr HTML angewendet werden, mit der {{cssxref("font-family")}}-Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen an. Beim Anzeigen einer Webseite wird ein Browser eine Liste von font-family-Werten durchlaufen, bis er eine Schriftart findet, die auf dem System verfügbar ist, auf dem er ausgeführt wird:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, jedoch waren die Schriftartenwahlmöglichkeiten für Webentwickler traditionell begrenzt. Es gibt nur eine Handvoll Schriftarten, die Sie auf allen gängigen Systemen garantieren können — die sogenannten [Web-sicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von web-sicheren Alternativen und der Standardsystemschrift. Dies erhöht jedoch Ihren Arbeitsaufwand, da die Tests erforderlich sind, um sicherzustellen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Es gibt eine gut funktionierende Alternative. CSS ermöglicht es Ihnen, Schriftartdateien anzugeben, die im Internet verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, sobald sie aufgerufen wird. Das bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die speziell von Ihnen gewählten Schriftarten anzeigen kann. Beeindruckend! Die erforderliche Syntax sieht etwa so aus:

Zuerst haben Sie ein {{cssxref("@font-face")}}-Regelsatz am Anfang des CSS, der die Schriftartdatei(en) angibt, die heruntergeladen werden sollen:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den im {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart wie gewohnt auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird ein wenig komplexer als das. Wir gehen weiter unten im Detail darauf ein.

Hier sind einige wichtige Punkte, die Sie zu Webfonts beachten sollten:

1. Schriftarten sind im Allgemeinen nicht ohne Einschränkungen kostenlos nutzbar. Sie müssen für sie bezahlen und/oder andere Lizenzbedingungen einhalten, zum Beispiel den Schriftart-Ersteller in Ihrem Code (oder auf Ihrer Seite) anzugeben. Sie sollten keine Schriftarten stehlen und ohne angemessene Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamten TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftartensammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste von mehreren Schriftdateien zum Herunterladen zur Verfügung stellen, wählt der Browser die erste Schriftdatei, die er verwenden kann. Deshalb sollte das Format, das Sie zuerst aufführen, das bevorzugte Format sein — nämlich WOFF2 — und die älteren Formate danach. Browser, die ein Format nicht verstehen, greifen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webfonts zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie Sie den Fontsquirrel Webfonts-Generator verwenden, um die erforderlichen Dateien zu erzeugen.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriftarten zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Webfonts handelt oder nicht.

## Hinzufügen eigener Webfonts

Mit diesem Wissen im Hinterkopf, lassen Sie uns ein grundlegendes Beispiel für Webfonts von Grund auf erstellen. Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css`-Datei finden Sie einige minimale CSS, um das grundlegende Layout und die Typografie des Beispiels zu handhaben.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Webfonts: eine für die Überschriften und eine für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriftarten enthalten. Schriftarten werden von Schriftgießereien entworfen und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Sites, auf denen Sie Schriftarten beziehen können:

- Ein Vertriebskanal für kostenlose Schriftarten: Dies ist eine Site, die freie Schriftarten zum Download anbietet (möglicherweise gibt es dennoch einige Lizenzbedingungen, wie z.B. den Schriftart-Ersteller zu nennen). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein Vertriebskanal für kostenpflichtige Schriftarten: Dies ist eine Site, die Schriftarten gegen Gebühr anbietet, wie zum Beispiel [myfonts.com](https://www.myfonts.com/). Sie können Schriftarten auch direkt bei Schriftgießereien kaufen, z. B. [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Site, die die Schriftarten für Sie speichert und bereitstellt, sodass der gesamte Prozess einfacher wird. Siehe den Abschnitt [Verwendung eines Online-Schriftservices](#verwendung_eines_online-schriftservices) für weitere Details.

Lassen Sie uns einige Schriftarten finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriftarten: eine interessante Schriftart für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und lesbare Schrift für die Absätze. Wenn Sie eine Schriftart gefunden haben, drücken Sie die Download-Taste und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden in der Regel in ZIP-Dateien vertrieben, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie finden möglicherweise mehrere Schriftdateien im Paket — einige Schriftarten werden als Familie mit verschiedenen verfügbaren Varianten vertrieben — zum Beispiel dünn, mitteldick, fett, kursiv, dünn kursiv usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzigen Schriftdatei für jede Auswahl beschäftigen.

> [!NOTE]
> Bei Font Squirrel können Sie unter "Find fonts" im rechten Spaltenbereich auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Generieren des benötigten Codes

Nun müssen Sie den benötigten Code (und die Schriftformate) generieren. Für jede Schriftart befolgen Sie diese Schritte:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Add fonts_ hoch.
4. Klicken Sie auf _Convert_.
5. Klicken Sie auf _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Implementierung des Codes in Ihrem Demo

Im entpackten Verzeichnis werden Sie einige nützliche Elemente sehen:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift – laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Verwendungskontexten aussehen wird.
- Eine `stylesheet.css`-Datei, die den generierten @font-face-Code enthält, den Sie benötigen werden.

Um diese Schriftarten in Ihrem Demo zu implementieren, befolgen Sie diese Schritte:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Verständliches um, wie `fonts`.
2. Öffnen Sie die Datei `stylesheet.css` und kopieren Sie die beiden `@font-face`-Regelsätze in Ihre `web-font-start.css`-Datei – Sie müssen sie ganz oben einfügen, vor allen Ihren CSS, da die Schriftarten importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen verweist auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` am Anfang jedes Pfads hinzu (entsprechend anpassen).
4. Nun können Sie diese Schriftarten in Ihren Schriftstapeln verwenden, genau wie jede web-sichere oder Standardsystemschriftart. Beispielsweise:

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

Am Ende sollten Sie eine Demoseite mit einigen schönen Schriftarten haben. Da unterschiedliche Schriftarten in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und das Gefühl zu verbessern.

![Das fertige Design einer Webfont-Übung. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält unterschiedliche Schriftarten und Texte in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version gerne mit unseren fertigen Dateien vergleichen – siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder [das fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und liefern in der Regel die Schriftarten für Sie, sodass Sie sich nicht um das Schreiben des `@font-face`-Codes kümmern müssen. Stattdessen müssen Sie im Allgemeinen nur eine einfache Zeile oder zwei Code in Ihre Site einsetzen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementsbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), ein nützlicher kostenloser Dienst, insbesondere für schnelle Testarbeiten und Schreibdemos.

Die meisten dieser Dienste sind einfach zu bedienen. Schauen wir uns Google Fonts an, damit Sie eine Vorstellung davon bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Finden Sie ein paar Schriftarten, die Ihnen mit den Filtern und der Suchleiste gefallen.
3. Klicken Sie auf eine Schriftart, um ihre Detailseite zu öffnen.
4. Wenn Sie eine Schriftart gefunden haben, die Ihnen gefällt, klicken Sie auf die Schaltfläche **Get font** auf ihrer Detailseite, um sie zur Seite der ausgewählten Schriften hinzuzufügen. Wenn Sie eine weitere Schriftart hinzufügen möchten, klicken Sie auf die Rückwärtstaste Ihres Browsers und suchen Sie erneut.
5. Sobald Sie mit der Auswahl von Schriftarten fertig sind, klicken Sie auf die Schaltfläche **Get embed code** auf der Seite der ausgewählten Schriften und kopieren Sie die bereitgestellten `<link>`-Elemente.
6. Fügen Sie die `<link>`-Elemente in den `<head>` Ihres HTML-Dokuments ein, über allen vorhandenen Linkverweisen auf Stylesheets.
7. Kopieren Sie die bereitgestellten `font-family` CSS-Regeln und verwenden Sie sie in Ihrem CSS, um die Schriftarten anzuwenden, ähnlich wie im vorherigen Durchlauf.

> [!NOTE]
> Sie können eine abgeschlossene Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css) finden, wenn Sie Ihr Werk mit unserem abgleichen möchten ([siehe es live](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns diese durch Transfonter generierte `@font-face`-Syntax näher betrachten. Die Regelsätze werden etwa so aussehen:

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

Lassen Sie uns durchgehen, was es macht:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie sich auf die Schriftart beziehen möchten. Dies kann alles sein, was Ihnen gefällt, solange Sie es konsistent in Ihrem gesamten CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letztgenannte Teil ist in jedem Fall optional, aber es ist nützlich, ihn zu erklären, da er den Browsern ermöglicht, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommata getrennt werden. Da der Browser sie nach den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schriftart hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/Stil sie hat, um dann verschiedene Werte von `font-weight`/`font-style` zu verwenden, um zwischen ihnen zu wählen, anstatt allen Mitgliedern der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was zu tun ist, im Detail.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile gibt an, wie die Schriftart angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}}-Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, der einen bestimmten Bereich von Zeichen darstellt, den Sie möglicherweise aus der Web-Schrift verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese spezifizierten Zeichen enthält, was überflüssige Downloads spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu Grundlagen des Textstylings durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: [Typesetting a community school homepage](/de/docs/Learn_web_development/Core/Text_styling/Typesetting_a_homepage).

Sobald Sie die Herausforderung abgeschlossen haben, können Sie fortfahren, mehr über [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) zu lernen.

## Siehe auch

- [Variable fonts guide](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Schriftarten-Wissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
