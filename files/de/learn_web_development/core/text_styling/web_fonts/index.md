---
title: Web Fonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 5d24b56b2988d560a0acfd0bb6cb8ab4813de6c5
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Text erkundet. In diesem Artikel gehen wir weiter ins Detail und untersuchen Webfonts. Wir werden sehen, wie man benutzerdefinierte Schriftarten mit Ihrer Webseite verwendet, um eine vielfältigere, individuellere Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts Entwicklern erlauben, über das Set von Web-sicheren Schriftarten hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundkonfiguration — die <code>@font-face</code>-Regel und allgemeine Deskriptoren.</li>
         <li>Verwendung eines Webfonts mit der <code>font-family</code>-Eigenschaft.</li>
         <li>Verwendung eines Online-Dienstes, um Webfonts zu finden und Webfont-Code zu generieren, z. B. <a href="https://www.fontsquirrel.com/">Font Squirrel</a> oder <a href="https://fonts.google.com/">Google Fonts</a>.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Schriftfamilien

Wie wir im [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die Schriftarten, die auf Ihr HTML angewendet werden, mittels der {{cssxref("font-family")}}-Eigenschaft kontrolliert werden. Diese nimmt einen oder mehrere Namen von Schriftfamilien an. Beim Anzeigen einer Webseite arbeitet sich ein Browser durch eine Liste von font-family-Werten, bis er eine Schrift findet, die auf dem System verfügbar ist, auf dem er läuft:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftwahlmöglichkeiten von Webentwicklern begrenzt. Es gibt nur eine Handvoll Schriftarten, die auf allen gängigen Systemen garantiert verfügbar sind — die sogenannten [Web-sicheren Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftstapel verwenden, um bevorzugte Schriftarten zu spezifizieren, gefolgt von Web-sicheren Alternativen, gefolgt von der Standardsystemschrift. Dies erhöht jedoch Ihre Arbeitslast, da es erforderlich ist, zu testen, ob Ihre Designs mit jeder Schrift funktionieren.

## Web Fonts

Es gibt eine Alternative, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien, die im Web verfügbar sind, anzugeben, die zusammen mit Ihrer Website heruntergeladen werden, wenn sie aufgerufen wird. Das bedeutet, dass jeder Browser, der dieses CSS-Feature unterstützt, die von Ihnen speziell gewählten Schriften anzeigen kann. Großartig! Die erforderliche Syntax sieht etwa so aus:

Zuerst haben Sie einen {{cssxref("@font-face")}}-Regelsatz am Anfang des CSS, der die herunterzuladenden Schriftdatei(en) spezifiziert:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den innerhalb von {{cssxref("@font-face")}} spezifizierten Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart wie gewohnt auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird etwas komplexer als dies. Wir werden unten ausführlicher darauf eingehen.

Hier sind einige wichtige Dinge, die Sie bezüglich Webfonts beachten sollten:

1. Schriften sind im Allgemeinen nicht ohne Einschränkungen kostenlos verwendbar. Sie müssen für sie bezahlen und/oder anderen Lizenzbedingungen folgen, wie z. B. dem Hinweis auf den Schriftgestalter in Ihrem Code (oder auf Ihrer Website). Sie sollten keine Schriften stehlen und verwenden, ohne den Urheber ordnungsgemäß zu nennen.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriften, chromatischer Schriften und Schriftkollektionen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste mehrerer herunterzuladender Schriftdateien geben, wählt der Browser die erste verwendbare Schriftdatei. Deshalb sollte das zuerst aufgelistete Format das bevorzugte Format sein — das heißt, WOFF2 — mit den älteren Formaten danach. Browser, die ein Format nicht verstehen, fallen zum nächsten Format in der Liste zurück.
5. Wenn Sie mit älteren Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG Webfonts zum Download bereitstellen. Dieser Artikel erklärt, wie man den Fontsquirrel Webfont Generator verwendet, um die erforderlichen Dateien zu generieren.

Sie können den [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriften zu untersuchen und zu manipulieren, unabhängig davon, ob es sich um Webfonts handelt oder nicht.

## Hinzufügen eigener Webfonts

Mit diesem Wissen bitten wir Sie nun, ein einfaches Webfont-Beispiel von Grund auf zu erstellen. Es ist schwierig, dies mit einem eingebetteten Live-Beispiel zu demonstrieren. Stattdessen möchten wir, dass Sie den unten beschriebenen Schritten folgen, um eine Vorstellung vom Prozess zu bekommen.

Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie ein minimales CSS, das das Grundlayout und die Schriftsetzung des Beispiels behandelt.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriften enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Allgemeinen drei Arten von Seiten, auf denen Sie Schriften erhalten können:

- Ein kostenloser Schriftvertrieb: Dies ist eine Seite, die kostenlose Schriften zum Download anbietet (es kann dennoch einige Lizenzbedingungen geben, wie z. B. den Hinweis auf den Schriftgestalter). Beispiele sind [Font Squirrel](https://www.fontsquirrel.com/), [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftvertrieb: Dies ist eine Seite, die Schriften gegen Gebühr anbietet, wie z. B. [fonts.com](https://www.fonts.com/) oder [myfonts.com](https://www.myfonts.com/). Sie können auch Schriften direkt von Schriftgießereien kaufen, zum Beispiel [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftdienst: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt, um den gesamten Prozess zu erleichtern. Siehe den Abschnitt [Verwendung eines Online-Schriftdienstes](#nutzung_eines_online-schriftdienstes) für weitere Details.

Lassen Sie uns einige Schriften finden! Gehen Sie zu [Font Squirrel](https://www.fontsquirrel.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Schaltfläche "Download" und speichern Sie die Datei im selben Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob es sich um TTF (True Type Fonts) oder OTF (Open Type Fonts) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie finden möglicherweise mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt, z. B. dünn, mittlere Stärke, fett, kursiv, dünn kursiv usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzigen Schriftdatei für jede Auswahl befassen.

> [!NOTE]
> In Font Squirrel können Sie im Abschnitt "Find fonts" in der rechten Spalte auf die verschiedenen Tags und Klassifizierungen klicken, um die angezeigten Optionen zu filtern.

### Genieren des benötigten Codes

Nun müssen Sie den erforderlichen Code (und die Schriftformate) generieren. Für jede Schrift folgen Sie diesen Schritten:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie diese in einem kommerziellen und/oder Webprojekt verwenden möchten.
2. Gehen Sie zu dem Transfonter [Webfont Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Add fonts_ hoch.
4. Klicken Sie auf _Convert_.
5. Klicken Sie auf _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Implementieren des Codes in Ihrem Demo

Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demo-HTML-Datei für jede Schrift — laden Sie diese in Ihren Browser, um zu sehen, wie die Schrift in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten `@font-face` Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu implementieren, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches um, wie `fonts`.
2. Öffnen Sie die `stylesheet.css`-Datei und kopieren Sie die beiden `@font-face`-Regelsätze in Ihre `web-font-start.css`-Datei — Sie müssen sie ganz oben einfügen, vor jeglichem CSS, da die Schriften importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()`-Funktionen weist auf eine Schriftdatei hin, die wir in unser CSS importieren möchten. Stellen Sie sicher, dass die Pfade zu den Dateien korrekt sind, indem Sie `fonts/` an den Anfang jedes Pfades hinzufügen (passen Sie dies bei Bedarf an).
4. Nun können Sie diese Schriften in Ihren Schriftstapeln verwenden, genau wie jede Web-sichere oder Standardsystemschrift. Zum Beispiel:

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

Sie sollten am Ende eine Demo-Seite mit einigen schönen Schriften haben. Da verschiedene Schriften in unterschiedlichen Größen erstellt werden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu finalisieren.

![Das fertige Design einer Webfont-Übung. Die Seite enthält zwei Überschriften und drei Absätze. Die Seite enthält unterschiedliche Schriften und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie Probleme haben, dies zum Laufen zu bringen, vergleichen Sie Ihre Version gerne mit unseren fertigen Dateien — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts) oder das [fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html).

## Nutzung eines Online-Schriftdienstes

Online-Schriftdienste speichern und liefern im Allgemeinen Schriften für Sie, sodass Sie sich nicht um das Schreiben des `@font-face`-Codes kümmern müssen. Stattdessen müssen Sie in der Regel nur eine oder zwei einfache Codezeilen in Ihre Seite einfügen, um alles zum Laufen zu bringen. Zu den Beispielen gehören [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste basieren auf Abonnements, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelles Testen und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu bedienen, daher werden wir nicht sehr detailliert auf sie eingehen. Schauen wir uns Google Fonts kurz an, damit Sie eine Vorstellung davon bekommen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ihren Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Suchen Sie nach Ihren Lieblingsschriftarten oder verwenden Sie die Filter oben auf der Seite, um die Arten von Schriftarten anzuzeigen, die Sie wählen möchten, und wählen Sie ein paar Schriftarten aus, die Ihnen gefallen.
3. Um eine Schriftfamilie auszuwählen, klicken Sie auf die Schriftvorschau und drücken Sie die ⊕-Taste neben der Schrift.
4. Wenn Sie die Schriftfamilien ausgewählt haben, drücken Sie die _View your selected families_-Schaltfläche in der oberen rechten Ecke der Seite.
5. Auf dem Bildschirm, der sich öffnet, müssen Sie zuerst die angezeigte HTML-Codezeile kopieren und in den Kopfbereich Ihrer HTML-Datei einfügen. Platzieren Sie diese über dem bestehenden {{htmlelement("link")}}-Element, sodass die Schriftart importiert wird, bevor Sie versuchen, sie in Ihrem CSS zu verwenden.
6. Sie müssen dann die aufgelisteten CSS-Deklarationen in Ihr CSS kopieren, um die benutzerdefinierten Schriften auf Ihr HTML anzuwenden.

> [!NOTE]
> Sie finden eine vollständige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css), wenn Sie Ihre Arbeit mit unserer vergleichen möchten ([sehen Sie sich das live an](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die von Transfonter generierte `@font-face`-Syntax näher betrachten. Die Regelsätze sehen ungefähr so aus:

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

- `font-family`: Diese Zeile gibt den Namen an, mit dem Sie auf die Schriftart verweisen möchten. Das kann alles sein, was Ihnen gefällt, solange Sie es in Ihrem gesamten CSS konsistent verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url`-Teil) und das Format jeder Schriftdatei (der `format`-Teil). Der letztere Teil ist in jedem Fall optional, aber es ist nützlich, ihn zu deklarieren, da er es den Browsern ermöglicht, schneller zu bestimmen, welche Schriftart sie verwenden können. Mehrere Deklarationen können aufgelistet und durch Kommas getrennt werden. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, an den Anfang zu stellen.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Diese Zeilen geben das Gewicht und gegebenenfalls den Kursivstil der Schrift an. Wenn Sie mehrere Gewichte derselben Schriftart importieren, können Sie angeben, welches Gewicht/Stil sie hat und dann unterschiedliche Werte von {{cssxref("font-weight")}}/{{cssxref("font-style")}} verwenden, um zwischen ihnen zu wählen, anstatt alle verschiedenen Mitglieder der Schriftfamilie mit unterschiedlichen Namen zu bezeichnen. [@font-face Tipp: Definieren Sie font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt im Detail, was zu tun ist.
- {{cssxref("font-display")}}: Diese Zeile gibt an, wie die Schrift angezeigt wird, während sie geladen wird.

> [!NOTE]
> Sie können auch spezifische {{cssxref("font-variant")}} und {{cssxref("font-stretch")}} Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der ein bestimmter Bereich von Zeichen ist, den Sie möglicherweise aus dem Webfont verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötige Downloads spart. [Custom Font Stacks mit Unicode-Range erstellen](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Zusammenfassung

Jetzt, da Sie unsere Artikel über die Grundlagen der Textgestaltung durchgearbeitet haben, ist es Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: Satz einer Startseite für eine Gemeinschaftsschule.

## Siehe auch

- [Leitfaden zu variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
- [Fonts-Wissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
