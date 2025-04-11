---
title: Webfonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir uns die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Texten angesehen. In diesem Artikel gehen wir weiter ins Detail und untersuchen Webfonts genauer. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten in Ihre Webseite integrieren können, um abwechslungsreichere, angepasste Texte zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalt mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts Entwicklern ermöglichen, über das Set web-sicherer Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code> Regel und gängige Deskriptoren.</li>
         <li>Verwendung eines Webfonts mit der <code>font-family</code> Eigenschaft.</li>
         <li>Verwendung eines Online-Dienstes zum Finden von Webfonts und Generieren von Webfont-Code, zum Beispiel <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriftarten mithilfe der {{cssxref("font-family")}}-Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Namen von Schriftfamilien an. Beim Anzeigen einer Webseite durchsucht ein Browser eine Liste von `font-family`-Werten, bis er eine verfügbare Schriftart auf dem System findet, auf dem er ausgeführt wird:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftwahlmöglichkeiten für Webentwickler begrenzt. Es gibt nur eine Handvoll Schriftarten, bei denen Sie sicher sein können, dass sie auf allen gängigen Systemen verfügbar sind — die sogenannten [web-sicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von web-sicheren Alternativen, gefolgt von der Standardsystemschriftart. Dies erhöht jedoch Ihren Arbeitsaufwand, da getestet werden muss, ob Ihr Design mit jeder Schriftart funktioniert.

## Webfonts

Es gibt eine alternative Methode, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Website heruntergeladen werden, sobald diese aufgerufen wird. Dies bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die Schriftarten anzeigen kann, die Sie speziell ausgewählt haben. Fantastisch! Die erforderliche Syntax sieht ungefähr so aus:

Zuerst haben Sie eine {{cssxref("@font-face")}}-Regel am Anfang des CSS, die die herunterzuladenden Schriftdatei(en) angibt:

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

Die Syntax wird noch etwas komplexer. Darauf gehen wir weiter unten genauer ein.

Hier sind einige wichtige Dinge, die Sie über Webfonts im Hinterkopf behalten sollten:

1. Schriftarten sind im Allgemeinen nicht ohne Einschränkungen frei verwendbar. Sie müssen für sie bezahlen und/oder andere Lizenzbedingungen einhalten, wie zum Beispiel den Schriftsteller in Ihrem Code (oder auf Ihrer Website) zu nennen. Sie sollten Schriftarten nicht stehlen und ohne ordnungsgemäße Nennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Selbst ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftensammlungen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer herunterzuladender Schriftdateien bereitstellen, wählt der Browser die erste Schriftdatei aus, die er verwenden kann. Deshalb sollte das von Ihnen zuerst aufgelistete Format das bevorzugte Format sein — nämlich WOFF2 — mit den älteren Formaten, die danach aufgelistet sind. Browser, die ein Format nicht verstehen, greifen auf das nächste Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Webfonts zum Download bereitstellen. Dieser Artikel erklärt, wie man den Fontsquirrel Webfont Generator verwendet, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Webfonts handelt oder nicht.

## Aktives Lernen: Ein Webfont-Beispiel

Mit diesem Wissen möchten wir nun ein grundlegendes Webfont-Beispiel von Grund auf aufbauen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie die unten aufgeführten Schritte durchlaufen, um ein Gefühl für den Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Machen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der `web-font-start.css`-Datei finden Sie einige minimale CSS, um das grundlegende Layout und die Schriftsetzung des Beispiels zu behandeln.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriftarten enthalten. Schriftarten werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt in der Regel drei Arten von Websites, auf denen Sie Schriftarten erhalten können:

- Ein Anbieter kostenloser Schriftarten: Dies ist eine Website, die kostenlose Schriftarten zum Herunterladen anbietet (es können dennoch Lizenzbedingungen gelten, wie z. B. die Nennung des Schriftentwicklers). Beispiele hierfür sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein Anbieter kostenpflichtiger Schriftarten: Dies ist eine Website, die Schriftarten gegen Gebühr anbietet, wie [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch Schriftarten direkt von Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftdienst: Dies ist eine Website, die die Schriften für Sie speichert und bereitstellt, was den gesamten Prozess erleichtert. Weitere Einzelheiten finden Sie im Abschnitt [Verwendung eines Online-Schriftdienstes](#verwendung_eines_online-schriftdienstes).

Lassen Sie uns einige Schriftarten finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriftarten: eine nette interessante Schriftart für die Überschriften (vielleicht eine schöne Display- oder Slab-Schrift) und eine etwas weniger auffällige und besser lesbare Schriftart für die Absätze. Sobald Sie eine Schriftart gefunden haben, drücken Sie die Schaltfläche "Download" und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Möglicherweise finden Sie mehrere Schriftdateien im Paket — einige Schriftarten werden als Familie mit verschiedenen verfügbaren Varianten verteilt, z. B. dünn, mittel, fett, kursiv, dünn kursiv usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzelnen Schriftdatei für jede Auswahl beschäftigen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifikationen klicken, um die angezeigten Auswahlmöglichkeiten zu filtern.

### Generierung des erforderlichen Codes

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schriftart folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Web-Projekt verwenden möchten.
2. Gehen Sie zum Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Upload Fonts_ hoch.
4. Aktivieren Sie das Kontrollkästchen "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Klicken Sie auf _Download your kit_.

Nachdem der Generator die Verarbeitung abgeschlossen hat, sollten Sie eine ZIP-Datei zum Herunterladen erhalten. Speichern Sie sie im selben Verzeichnis wie Ihr HTML und CSS.

### Implementierung des Codes in Ihrem Demo

Entpacken Sie zum jetzigen Zeitpunkt das gerade generierte Webfont-Kit. Im entpackten Verzeichnis finden Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift – laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css`-Datei, die den generierten `@font-face`-Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, führen Sie diese Schritte aus:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches um, wie `fonts`.
2. Öffnen Sie die `stylesheet.css`-Datei und kopieren Sie die beiden `@font-face`-Regelsätze in Ihre `web-font-start.css`-Datei — Sie müssen sie ganz oben platzieren, vor Ihrem gesamten CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Website verwenden können.
3. Jede der `url()`-Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Wir müssen sicherstellen, dass die Pfade zu den Dateien korrekt sind, also fügen Sie `fonts/` an den Anfang jedes Pfads hinzu (falls nötig).
4. Nun können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten am Ende eine Demo-Seite mit einigen schönen implementierten Schriften erhalten. Da unterschiedliche Schriften in verschiedenen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu gestalten.

![Das fertige Design einer Webfont-Aktivlernungsübung. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält verschiedene Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, vergleichen Sie Ihre Version gerne mit unseren fertigen Dateien — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ansehen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftdienstes

Online-Schriftdienste speichern und liefern in der Regel Schriften für Sie, sodass Sie sich nicht um das Schreiben des `@font-face`-Codes kümmern müssen. Stattdessen müssen Sie im Allgemeinen nur eine einfache Zeile oder zwei Code in Ihre Website einfügen, um alles zum Laufen zu bringen. Beispiele hierfür sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf einem Abonnementmodell, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), ein nützlicher kostenloser Dienst, insbesondere für schnelle Tests und Demo-Erstellungen.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir sie nicht im Detail behandeln. Lassen Sie uns einen kurzen Blick auf Google Fonts werfen, damit Sie die Idee bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren bevorzugten Schriften oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriftarten anzuzeigen, aus denen Sie auswählen möchten, und wählen Sie ein paar Schriften, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕ Schaltfläche neben der Schriftart.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die Schaltfläche _View your selected families_ in der oberen rechten Ecke der Seite.
5. Auf dem resultierenden Bildschirm müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopf Ihres HTML-Dokuments einfügen. Setzen Sie sie über das bestehende {{htmlelement("link")}}-Element, damit die Schrift importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Sie müssen dann die aufgelisteten CSS-Deklarationen in Ihr CSS als passend kopieren, um die benutzerdefinierten Schriftarten auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie können eine vollständige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css) finden, wenn Sie Ihre Arbeit mit unserer vergleichen möchten ([sehen Sie sich das live an](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Untersuchen wir die `@font-face`-Syntax, die von Fontsquirrel für Sie generiert wurde. Die Regelsätze werden ungefähr so aussehen:

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

Gehen wir das durch, um zu sehen, was es bewirkt:

- `font-family`: Diese Zeile gibt den Namen an, den Sie für die Schrift verwenden möchten. Dieser Name kann beliebig sein, solange Sie ihn in Ihrem gesamten CSS konsequent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den in Ihr CSS zu importierenden Schriftdateien an (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letztere Teil ist in jedem Fall optional, aber nützlich zu deklarieren, weil es Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgeführt und durch Kommas getrennt werden. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang aufzuführen.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen spezifizieren, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schrift importieren, können Sie spezifizieren, welches Gewicht/Stil sie hat und dann verschiedene Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt alle verschiedenen Familienmitglieder unterschiedliche Namen zu geben. [@font-face Tipp: Definieren Sie font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt detaillierter, was zu tun ist.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("font-variant")}} und {{cssxref("font-stretch")}}-Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}}-Wert angeben, der einen bestimmten Bereich von Zeichen aus der Webschrift beschreibt, den Sie verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötiges Herunterladen spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen zur Nutzung dieses Features.

## Zusammenfassung

Nachdem Sie nun unsere Artikel zu den Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: die Satzgestaltung einer Community-Schulseite.

## Siehe auch

- [Leitfaden für variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Fonts knowledge](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
