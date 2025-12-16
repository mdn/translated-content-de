---
title: Web-Fonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 80c1b909c1b605668d941585a94dd555680f2a7a
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Texten erkundet. In diesem Artikel gehen wir weiter ins Detail und erkunden Web-Fonts ausführlich. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um eine vielfältigere, individuelle Textgestaltung zu ermöglichen.

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
         <li>Verstehen, dass Web-Fonts es Entwicklern ermöglichen, über das Set von websicheren Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Web-Apps zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code> Regel und gängige Deskriptoren.</li>
         <li>Verwendung eines Web-Fonts mit der <code>font-family</code> Eigenschaft.</li>
         <li>Verwendung eines Online-Dienstes, um Web-Fonts zu finden und Web-Font-Code zu generieren, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wiederholung der Schriftfamilien

Wie wir im [Artikel über grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriftarten mithilfe der {{cssxref("font-family")}} Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Namen von Schriftfamilien an. Beim Anzeigen einer Webseite wird ein Browser den Wert von `font-family` durchlaufen, bis er eine auf dem System, auf dem es ausgeführt wird, verfügbare Schriftart findet:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftarten der Webentwickler begrenzt. Es gibt nur eine Handvoll Schriften, die auf allen gängigen Systemen verfügbar sind — die sogenannten [Web-sicheren Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Font-Stack verwenden, um bevorzugte Schriften zu spezifizieren, gefolgt von Web-sicheren Alternativen und dem Standardsystemschriftart. Dies erhöht jedoch Ihren Arbeitsaufwand, da Tests erforderlich sind, um sicherzustellen, dass Ihre Designs mit jeder Schriftart funktionieren.

## Web-Fonts

Es gibt eine Alternative, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden, wenn sie aufgerufen wird. Das bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die von Ihnen speziell ausgewählten Schriften anzeigen kann. Erstaunlich! Die erforderliche Syntax sieht etwa so aus:

Zunächst haben Sie eine {{cssxref("@font-face")}} Regel am Anfang des CSS, die die herunterzuladenden Schriftdateien spezifiziert:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den innerhalb von {{cssxref("@font-face")}} spezifizierten Schriftfamiliennamen, um Ihre benutzerdefinierte Schrift auf alles anzuwenden, was Sie möchten:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als dies. Wir werden weiter unten mehr ins Detail gehen.

Hier sind einige wichtige Dinge, die Sie über Web-Fonts beachten sollten:

1. Schriften sind im Allgemeinen nicht frei von Einschränkungen nutzbar. Sie müssen dafür bezahlen und/oder andere Lizenzbedingungen einhalten, wie zum Beispiel den Schriftsteller in Ihrem Code oder auf Ihrer Website zu erwähnen. Sie sollten keine Schriften stehlen und ohne ordnungsgemäße Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie der 2011 veröffentlichte IE9 unterstützen das WOFF-Format.
3. WOFF2 unterstützt die vollständigen TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriften, farbiger Schriften und Schriftensammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mit mehreren Schriftdateien zum Herunterladen bereitstellen, wählt der Browser die erste Schriftdatei aus, die er verwenden kann. Daher sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein — das ist WOFF2 — mit den älteren Formaten, die danach aufgeführt sind. Browser, die ein Format nicht verstehen, fallen dann auf das nächste in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Web-Fonts zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie man den Fontsquirrel Webfont-Generator verwendet, um die erforderlichen Dateien zu erstellen.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es Web-Fonts sind oder nicht.

## Hinzufügen eigener Web-Fonts

Mit diesem Wissen lassen Sie uns ein grundlegendes Beispiel für Web-Fonts von Grund auf erstellen. Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css` Datei finden Sie etwas minimalen CSS, um das grundlegende Layout und die Typografie des Beispiels zu handhaben.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Web-Fonts: einen für die Überschriften und einen für den Fließtext. Zunächst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, auf denen Sie Schriften erwerben können:

- Ein kostenloser Schriftenvertrieb: Dies ist eine Website, die kostenlose Schriften zum Download anbietet (es können dennoch Lizenzbedingungen bestehen, wie zum Beispiel die Erwähnung des Schriftgestalters). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftenvertrieb: Dies ist eine Website, auf der Schriften gegen eine Gebühr verfügbar sind, wie [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können Schriften auch direkt bei Schriftgießereien kaufen, zum Beispiel bei [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftendienst: Dies ist eine Website, die die Schriften für Sie speichert und bereitstellt und den gesamten Prozess erleichtert. Weitere Details finden Sie im Abschnitt über die [Verwendung eines Online-Schriftendienstes](#verwendung_eines_online-schriftendienstes).

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine auffällige Anzeigeschrift oder eine serifenbetonte Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie den Download-Button und speichern Sie die Datei im gleichen Verzeichnis wie die vorher gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entzippen Sie die beiden Schriftpakete (Web-Fonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie finden möglicherweise mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten vertrieben — beispielsweise dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzelnen Datei für jede Wahl beschäftigen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifizierungen klicken, um die angezeigte Auswahl zu filtern.

### Generierung des erforderlichen Codes

Jetzt müssen Sie den erforderlichen Code (und Schriftformate) generieren. Für jede Schrift gehen Sie wie folgt vor:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie die Schrift in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zum [Webfont Generator von Transfonter](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Schriftarten hinzufügen_ hoch.
4. Klicken Sie auf _Konvertieren_.
5. Klicken Sie auf _Herunterladen_.

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in das gleiche Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Implementierung des Codes in Ihrem Demo

Innerhalb des entpackten Verzeichnisses sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demodatei für jede Schrift — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu verwenden, führen Sie die folgenden Schritte aus:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches um, wie `fonts`.
2. Öffnen Sie die `stylesheet.css` Datei und kopieren Sie die beiden `@font-face` Regeln in Ihre `web-font-start.css` Datei — diese müssen ganz oben stehen, bevor Ihr CSS beginnt, da die Schriften importiert sein müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Dateipfade korrekt sind, also fügen Sie `fonts/` am Anfang jedes Pfades hinzu (passen Sie es entsprechend an).
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

Sie sollten am Ende eine Demoseite mit einigen schönen Schriften haben. Da verschiedene Schriften in verschiedenen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu verbessern.

![Das fertige Design einer Web-Font-Übung. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Text in verschiedenen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies funktionsfähig zu bekommen, können Sie Ihre Version mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ansehen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftendienstes

Online-Schriftendienste speichern und stellen Schriften in der Regel für Sie bereit, damit Sie sich nicht um den `@font-face` Code kümmern müssen. Stattdessen müssen Sie in der Regel nur ein oder zwei einfache Zeilen Code in Ihre Website einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf Abonnements, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelle Tests und Demoprojekte.

Die meisten dieser Dienste sind einfach zu bedienen. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie ein Gefühl dafür bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Finden Sie ein paar Schriften, die Ihnen gefallen, indem Sie die Filter- und Suchleiste verwenden.
3. Klicken Sie auf eine Schrift, um deren Detailseite zu öffnen.
4. Wenn Sie eine Schrift finden, die Ihnen gefällt, klicken Sie auf den **Schrift herunterladen** Button auf der Detailseite, um sie zur ausgewählten Schriftseite hinzuzufügen. Wenn Sie eine weitere Schrift hinzufügen möchten, klicken Sie auf die Zurück-Schaltfläche Ihres Browsers und suchen Sie erneut.
5. Sobald Sie mit der Auswahl der Schriften fertig sind, klicken Sie auf den **Code einbetten** Button auf der Seite der ausgewählten Schriften und kopieren Sie die bereitgestellten `<link>` Elemente.
6. Fügen Sie die `<link>` Elemente in den `<head>` Ihres HTML-Dokuments ein, über allen vorhandenen Stylesheet-Links.
7. Kopieren Sie die bereitgestellten CSS-Regeln der `font-family` und verwenden Sie diese in Ihrem CSS, um die Schriften anzuwenden, ähnlich wie in der vorherigen Anleitung.

> [!NOTE]
> Sie finden eine fertige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), falls Sie Ihr Werk mit unserem vergleichen möchten ([sehen Sie es live an](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face` Syntax näher erkunden, die von Transfonter für Sie generiert wurde. Die Regeln sehen ungefähr so aus:

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

Lassen Sie uns es durchgehen und sehen, was es macht:

- `font-family`: Diese Zeile gibt den Namen an, unter dem Sie auf die Schriftart verweisen möchten. Dieser kann jeder beliebige Name sein, solange Sie ihn konsequent in Ihrem CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil) und das Format jeder Schriftdatei (der `format` Teil). Letzterer Teil ist optional, aber er ist nützlich anzugeben, da er es Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Es können mehrere Deklarationen aufgelistet werden, getrennt durch Kommas. Da der Browser die Deklarationen entsprechend den Regeln des Cascade durchgeht, ist es am besten, Ihre bevorzugten Formate wie WOFF2 am Anfang anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schrift importieren, können Sie angeben, welches Gewicht/Stil sie haben, und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt allen Mitgliedern der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face Tipp: Definieren Sie font-weight und font-style für eine einfache CSS.](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt im Detail auf, was zu tun ist.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile spezifiziert, wie die Schrift angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} Werte für Ihre Web-Schriften angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, das ist ein bestimmter Bereich von Zeichen, die Sie möglicherweise aus der Web-Schrift verwenden möchten. In unterstützenden Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese bestimmten Zeichen enthält, wodurch unnötige Downloads vermieden werden. [Erstellung benutzerdefinierter Schriftstapel mit Unicode-Range.](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan liefert einige nützliche Ideen, wie man davon Gebrauch macht.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Die Gestaltung einer Community-Schul-Homepage.

## Siehe auch

- [Leitfaden zu variablen Schriften](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Fonts-Wissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
