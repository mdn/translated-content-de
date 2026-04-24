---
title: Web Fonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 5ae8d1a1cb0f8d845168183536cd65684cc9406e
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Texten untersucht. In diesem Artikel gehen wir weiter und erkunden Web-Fonts im Detail. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um eine vielfältigere, angepasste Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Web-Fonts Entwicklern ermöglichen, über den Satz von sicheren Web-Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Web-Apps zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code>-Regel und gängige Deskriptoren.</li>
         <li>Verwendung einer Web-Font mit der Eigenschaft <code>font-family</code>.</li>
         <li>Verwendung eines Online-Dienstes, um Web-Fonts zu finden und Web-Font-Code zu generieren, z.B. <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Schriftfamilien-Rückblick

Wie wir in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriftarten mit der Eigenschaft {{cssxref("font-family")}} gesteuert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen an. Beim Anzeigen einer Webseite durchläuft ein Browser eine Liste von `font-family`-Werten, bis er eine auf dem System verfügbare Schriftart findet, auf dem er läuft:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftwahlmöglichkeiten von Webentwicklern begrenzt. Es gibt nur eine Handvoll Schriftarten, deren Verfügbarkeit auf allen gängigen Systemen garantiert ist — die sogenannten [sicheren Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von sicheren Web-Alternativen und der Standardsystemschrift. Dies erhöht jedoch Ihre Arbeitsbelastung aufgrund der erforderlichen Tests, um sicherzustellen, dass Ihr Design mit jeder Schriftart funktioniert.

## Web-Fonts

Es gibt eine Alternative, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, wenn darauf zugegriffen wird. Das bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die von Ihnen speziell ausgewählten Schriftarten anzeigen kann. Erstaunlich! Die erforderliche Syntax sieht ungefähr so aus:

Zuerst haben Sie eine {{cssxref("@font-face")}}-Regel zu Beginn des CSS, die die herunterzuladenden Schriftdateien angibt:

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

Die Syntax wird etwas komplizierter sein als dies. Wir gehen im Folgenden genauer darauf ein.

Hier sind einige wichtige Dinge, die Sie im Kopf behalten sollten, was Web-Fonts betrifft:

1. Schriftarten sind in der Regel nicht kostenlos ohne Einschränkungen nutzbar. Sie müssen für sie bezahlen und/oder andere Lizenzbestimmungen einhalten, wie z.B. den Schriftgestalter in Ihrem Code (oder auf Ihrer Seite) zu erwähnen. Sie sollten Schriftarten nicht stehlen und verwenden, ohne den gebührenden Hinweis zu geben.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftkollektionen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer herunterzuladender Schriftdateien zur Verfügung stellen, wählt der Browser die erste nutzbare Schriftdatei aus. Aus diesem Grund sollte das zuerst aufgelistete Format das bevorzugte Format sein — nämlich WOFF2 — gefolgt von den älteren Formaten. Browser, die ein Format nicht verstehen, werden dann auf das nächste Format in der Liste zurückgreifen.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG Web-Fonts zum Download bereitstellen. Dieser Artikel erklärt, wie Sie mit dem Fontsquirrel Webfont Generator die erforderlichen Dateien generieren können.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriftarten zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Web-Fonts handelt oder nicht.

## Hinzufügen eigener Web-Fonts

Mit dem bisher Gelernten wollen wir ein grundlegendes Web-Font-Beispiel aus erster Hand aufbauen. Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie ein minimales CSS, das sich mit dem grundlegenden Layout und Schriftsatz des Beispiels befasst.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Web-Fonts: eine für die Überschriften und eine für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriftarten enthalten. Schriftarten werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Websites, auf denen Sie Schriftarten erhalten können:

- Ein freier Schriften-Vertrieb: Dies ist eine Website, die freie Schriftarten zum Download verfügbar macht (es können trotzdem einige Lizenzbedingungen gelten, wie z.B. die Erwähnung des Schrifterstellers). Beispiele hierfür sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriften-Vertrieb: Dies ist eine Website, die Schriftarten gegen Gebühr verfügbar macht, wie z.B. [myfonts.com](https://www.myfonts.com/). Sie können Schriftarten auch direkt bei Schriftgießereien kaufen, beispielsweise [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftservice: Dies ist eine Website, die die Schriftarten für Sie speichert und bereitstellt, was den gesamten Prozess erleichtert. Weitere Informationen finden Sie im Abschnitt [Verwendung eines Online-Schriftservices](#verwendung_eines_online-schriftservices).

Lassen Sie uns einige Schriftarten finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriftarten aus: Eine interessante Schriftart für die Überschriften (vielleicht eine ansprechende Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und lesbarere Schrift für die Absätze. Wenn Sie eine Schriftart gefunden haben, drücken Sie die Download-Taste und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Web-Fonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Möglicherweise finden Sie mehrere Schriftdateien im Paket — einige Schriftarten werden als Familie mit verschiedenen verfügbaren Varianten verteilt — z.B. dünn, mittel, fett, kursiv, dünn kursiv usw. Für dieses Beispiel sollten Sie sich nur mit einer einzigen Schriftdatei pro Auswahl beschäftigen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Generieren des erforderlichen Codes

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schriftart gehen Sie folgendermaßen vor:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Web-Projekt verwenden möchten.
2. Gehen Sie zum Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Add fonts_ hoch.
4. Klicken Sie auf _Convert_.
5. Klicken Sie auf _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in das gleiche Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Implementierung des Codes in Ihrem Demo

Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schriftart: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schriftart — laden Sie diese in Ihren Browser, um zu sehen, wie die Schriftart in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face Code enthält, den Sie benötigen.

Um diese Schriftarten in Ihrem Demo zu implementieren, gehen Sie wie folgt vor:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches und Einprägsames um, wie `fonts`.
2. Öffnen Sie die Datei `stylesheet.css` und kopieren Sie die beiden `@font-face` Regelsätze in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben vor Ihrem CSS einfügen, da die Schriftarten importiert werden müssen, bevor Sie sie auf Ihrer Webseite verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` am Anfang jedes Pfades hinzu (passen Sie sie gegebenenfalls an).
4. Jetzt können Sie diese Schriftarten in Ihren Schriftstapeln verwenden, genau wie jede sichere Web- oder Standardsystemschriftart. Zum Beispiel:

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

Sie sollten am Ende eine Demoseite mit schönen Schriftarten haben. Da verschiedene Schriftarten in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise Größe, Abstände usw. anpassen, um das Aussehen und Gefühl zu verbessern.

![Das fertige Design einer Web-Font-Übung. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Texte in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code aus GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder [das fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftservices

Online-Schriftservices speichern und liefern in der Regel Schriftarten für Sie, sodass Sie sich nicht um das Schreiben des `@font-face` Codes kümmern müssen. Stattdessen müssen Sie in der Regel nur eine oder zwei einfache Codezeilen in Ihre Seite einfügen, damit alles funktioniert. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, besonders für schnelle Tests und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu benutzen. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie eine Vorstellung bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Finden Sie mit den Filtern und der Suchleiste ein paar Schriftarten, die Ihnen gefallen.
3. Klicken Sie auf eine Schriftart, um deren Detailseite zu öffnen.
4. Wenn Sie eine Schriftart finden, die Ihnen gefällt, klicken Sie auf die Schaltfläche **Get font** auf der Detailseite, um sie zur ausgewählten Schriftenseite hinzuzufügen. Wenn Sie eine weitere Schriftart hinzufügen möchten, klicken Sie auf die Zurück-Schaltfläche Ihres Browsers und suchen Sie erneut.
5. Sobald Sie die Auswahl der Schriftarten abgeschlossen haben, klicken Sie auf die Schaltfläche **Get embed code** auf der ausgewählten Schriftenseite und kopieren Sie die bereitgestellten `<link>`-Elemente.
6. Fügen Sie die `<link>`-Elemente in den `<head>` Ihres HTML-Dokuments ein, über bestehenden Stylesheet-Links.
7. Kopieren Sie die bereitgestellten `font-family` CSS-Regeln und verwenden Sie sie in Ihrem CSS, um die Schriftarten anzuwenden, ähnlich wie im vorherigen Leitfaden gezeigt.

> [!NOTE]
> Eine vollständige Version finden Sie unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), falls Sie Ihre Arbeit mit unserer vergleichen möchten ([live ansehen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die von Transfonter generierte `@font-face`-Syntax genauer betrachten. Die Regelsätze sehen ungefähr so aus:

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

Gehen Sie die Syntax durch, um zu sehen, was sie bewirkt:

- `font-family`: Diese Zeile gibt den Namen an, den Sie der Schriftart geben möchten. Dieser kann beliebig sein, solange Sie ihn in Ihrem gesamten CSS konsistent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letzte Teil ist in jedem Fall optional, jedoch ist es nützlich, dies anzugeben, da es den Browsern ermöglicht, schneller zu bestimmen, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser diese gemäß den Regeln der Kaskade durchsuchen wird, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, an den Anfang zu stellen.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichtungen derselben Schrift importieren, können Sie angeben, welches Gewicht/Stil sie haben und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt allen Mitgliedern der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face Tipp: Schriftgewicht und Schriftart definieren, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt, was zu tun ist, ausführlicher.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile gibt an, wie die Schriftart angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} Werte für Ihre Web-Fonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der einen bestimmten Bereich von Zeichen darstellt, die Sie aus der Web-Font verwenden möchten. In unterstützenden Browsern wird die Schrift nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötige Downloads spart. [Erstellen von benutzerdefinierten Schriftstapel mit Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie Sie dies nutzen können.

## Zusammenfassung

Nun, da Sie unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: das Schriftsatz-Design einer Community-Schul-Homepage.

## Siehe auch

- [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Schriftwissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
