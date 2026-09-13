---
title: Web Fonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 916eb95f63de092d96ed1b1b13f3e2261739a8e2
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel des Moduls haben wir die grundlegenden CSS-Funktionen zur Schrift- und Textgestaltung erkundet. In diesem Artikel werden wir weiter gehen und Webfonts im Detail untersuchen. Wir werden sehen, wie Sie benutzerdefinierte Schriftarten mit Ihrer Webseite verwenden können, um eine vielfältigere und individuellere Textgestaltung zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
       <ul>
         <li>Verstehen, dass Webfonts Entwickler in die Lage versetzen, über das web-sichere Schriftsatz-Set hinauszugehen und benutzerdefinierte Schriftarten in ihren Webanwendungen zu verwenden.</li>
         <li>Grundlegende Einrichtung — die <code>@font-face</code> At-Regel und häufige Deskriptoren.</li>
         <li>Verwendung eines Webfonts mit der Eigenschaft <code>font-family</code>.</li>
         <li>Nutzung von Onlinediensten zum Finden von Webfonts und Generieren von Webfont-Code.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wiederholung der Schriftfamilien

Wie wir in [Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) gesehen haben, können die auf Ihr HTML angewendeten Schriften mit der {{cssxref("font-family")}} Eigenschaft gesteuert werden. Diese nimmt einen oder mehrere Schriftfamiliennamen. Beim Anzeigen einer Webseite durchläuft ein Browser eine Liste von `font-family`-Werten, bis er eine auf dem System verfügbare Schriftart findet:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, aber traditionell waren die Schriftartauswahlen von Webentwicklern begrenzt. Es gibt nur eine Handvoll Schriftarten, die garantiert auf allen gängigen Systemen verfügbar sind - die sogenannten [websicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können den Schriftsatz verwenden, um bevorzugte Schriftarten anzugeben, gefolgt von web-sicheren Alternativen und schließlich der Standardsystemschriftart. Dies erhöht jedoch Ihren Arbeitsaufwand, da Sie testen müssen, ob Ihre Designs mit jeder Schriftart funktionieren.

## Webfonts

Es gibt eine Alternative, die gut funktioniert. CSS ermöglicht es Ihnen, Schriftdateien anzugeben, die im Web verfügbar sind und zusammen mit Ihrer Webseite heruntergeladen werden, wenn diese aufgerufen wird. Das bedeutet, dass jeder Browser, der diese CSS-Funktion unterstützt, die von Ihnen speziell gewählten Schriftarten anzeigen kann. Unglaublich! Die erforderliche Syntax sieht etwa so aus:

Zuerst haben Sie am Anfang des CSS eine {{cssxref("@font-face")}} Regelgruppe, die die Schriftdatei(en) zum Herunterladen angibt:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Darunter verwenden Sie den in {{cssxref("@font-face")}} angegebenen Schriftfamiliennamen, um Ihre benutzerdefinierte Schriftart wie gewohnt auf alles anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax wird noch etwas komplexer, darauf gehen wir unten näher ein.

Hier sind einige wichtige Dinge, die Sie über Webfonts beachten sollten:

1. Schriften sind normalerweise nicht ohne Einschränkungen frei nutzbar. Sie müssen für sie bezahlen und/oder andere Lizenzbedingungen befolgen, wie z.B. den Schriftgestalter in Ihrem Code (oder auf Ihrer Website) zu nennen. Sie sollten keine Schriftarten stehlen und ohne ordnungsgemäße Anerkennung verwenden.
2. Alle großen Browser unterstützen WOFF/WOFF2 (Web Open Font Format Versionen 1 und 2). Sogar ältere Browser wie IE9 (veröffentlicht im Jahr 2011) unterstützen das WOFF-Format.
3. WOFF2 unterstützt die gesamte TrueType- und OpenType-Spezifikation, einschließlich variabler Schriftarten, chromatischer Schriftarten und Schriftkollektionen.
4. Die Reihenfolge, in der Sie Schriftdateien auflisten, ist wichtig. Wenn Sie dem Browser eine Liste von mehreren Schriftdateien zum Herunterladen bereitstellen, wählt der Browser die erste Schriftdatei, die er verwenden kann. Deshalb sollte das Format, das Sie zuerst auflisten, das bevorzugte Format sein — das heißt WOFF2 — mit den älteren Formaten danach. Browser, die ein Format nicht verstehen, greifen dann auf das nächste Format in der Liste zurück.
5. Wenn Sie mit alten Browsern arbeiten müssen, sollten Sie EOT (Embedded Open Type), TTF (TrueType Font) und SVG-Web-Schriften zum Herunterladen bereitstellen. Dieser Artikel erklärt, wie man den Transfonter-Webfont-Generator verwendet, um die erforderlichen Dateien zu erstellen.

Sie können den [Firefox Font-Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) verwenden, um die auf Ihrer Seite verwendeten Schriftarten zu untersuchen und zu bearbeiten, unabhängig davon, ob es sich um Webfonts handelt oder nicht.

## Eigene Webfonts hinzufügen

Mit diesem Wissen wollen wir ein einfaches Webfont-Beispiel von Grund auf aufbauen. Sie sollten die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.css) als Ausgangspunkt verwenden, um Ihren Code hinzuzufügen (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/web-fonts/web-font-start.html)). Erstellen Sie jetzt eine Kopie dieser Dateien in einem neuen Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie ein minimales CSS, um das grundlegende Layout und die Typografie des Beispiels zu behandeln.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zuerst müssen wir die Schriftdateien finden, die die Schriftarten enthalten. Schriften werden von Schriftgießereien erstellt und in verschiedenen Dateiformaten gespeichert. Es gibt im Wesentlichen drei Arten von Websites, auf denen Sie Schriften erhalten können:

- Ein freier Schriftdistributor: Dies ist eine Seite, die kostenlose Schriften zum Download bereitstellt (es können dennoch einige Lizenzbedingungen gelten, wie z.B. den Schriftgestalter zu erwähnen). Beispiele sind [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein kostenpflichtiger Schriftdistributor: Dies ist eine Seite, die Schriften gegen Gebühr anbietet, wie z.B. [myfonts.com](https://www.myfonts.com/). Sie können auch direkt bei Schriftgießereien Schriften kaufen, zum Beispiel bei [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Online-Schriftdienst: Dies ist eine Seite, die die Schriften für Sie speichert und bereitstellt, wodurch der gesamte Prozess erleichtert wird. Weitere Informationen finden Sie im Abschnitt [Verwendung eines Online-Schriftdienstes](#verwendung_eines_online-schriftdienstes).

Lassen Sie uns einige Schriftarten finden! Gehen Sie zu [DaFont](https://www.dafont.com/) und wählen Sie zwei Schriften: eine interessante Schrift für die Überschriften (vielleicht eine schöne Display- oder Slab-Serif-Schrift) und eine etwas weniger auffällige und besser lesbare Schrift für die Absätze. Wenn Sie eine Schrift gefunden haben, drücken Sie die Download-Schaltfläche und speichern Sie die Datei im selben Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor gespeichert haben. Es spielt keine Rolle, ob es sich um TrueType-Schriften (TTF) oder OpenType-Schriften (OTF) handelt.

Entpacken Sie die beiden Schriftpakete (Webfonts werden normalerweise in ZIP-Dateien verteilt, die die Schriftdatei(en) und Lizenzinformationen enthalten). Sie finden möglicherweise mehrere Schriftdateien im Paket — einige Schriften werden als Familie mit verschiedenen verfügbaren Varianten verteilt — z.B. dünn, mittel, fett, kursiv, dünn kursiv, usw. Für dieses Beispiel möchten wir, dass Sie sich nur mit einer einzigen Schriftdatei für jede Wahl beschäftigen.

### Den erforderlichen Code generieren

Jetzt müssen Sie den erforderlichen Code (und die Schriftformate) erzeugen. Für jede Schrift führen Sie die folgenden Schritte aus:

1. Stellen Sie sicher, dass Sie alle Lizenzanforderungen erfüllt haben, wenn Sie dies in einem kommerziellen und/oder Webprojekt verwenden wollen.
2. Gehen Sie zum Transfonter [Webfont-Generator](https://transfonter.org/).
3. Laden Sie Ihre beiden Schriftdateien mit der Schaltfläche _Upload your fonts_ hoch.
4. Klicken Sie auf _Convert_.
5. Klicken Sie auf _Download_.

Nachdem die ZIP-Datei heruntergeladen wurde, entpacken Sie sie und verschieben Sie sie in dasselbe Verzeichnis wie Ihr HTML und CSS.

### Den Code in Ihrem Demo implementieren

Im entpackten Verzeichnis sehen Sie einige nützliche Elemente:

- Zwei Versionen jeder Schrift: die `.woff`, `.woff2` Dateien.
- Eine Demodatei im HTML-Format für jede Schrift — laden Sie diese in Ihrem Browser, um zu sehen, wie die Schrift in verschiedenen Nutzungskontexten aussieht.
- Eine `stylesheet.css` Datei, die den generierten @font-face Code enthält, den Sie benötigen.

Um diese Schriften in Ihrem Demo zu verwenden, folgen Sie diesen Schritten:

1. Benennen Sie das entpackte Verzeichnis in etwas Einfaches wie `fonts` um.
2. Öffnen Sie die `stylesheet.css` Datei und kopieren Sie die beiden `@font-face` Regelsets in Ihre `web-font-start.css` Datei — Sie müssen sie ganz oben platzieren, bevor Sie Ihr CSS angeben, da die Schriftarten importiert werden müssen, bevor Sie sie auf Ihrer Seite verwenden können.
3. Jede der `url()` Funktionen zeigt auf eine Schriftdatei, die wir in unser CSS importieren möchten. Stellen Sie sicher, dass die Pfade zu den Dateien korrekt sind, indem Sie `fonts/` an den Anfang jedes Pfades hinzufügen (nach Bedarf anpassen).
4. Jetzt können Sie diese Schriftarten in Ihrem Schriftsatz verwenden, genauso wie jede websichere oder Standardsystemschriftart. Zum Beispiel:

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

Sie sollten am Ende eine Demoseite mit einigen schönen Schriftarten haben. Da verschiedene Schriftarten in unterschiedlichen Größen erstellt wurden, müssen Sie möglicherweise die Größe, den Abstand usw. anpassen, um das Aussehen und Gefühl zu verbessern.

![Das fertige Design eines Webfont-Übung. Die Seite hat zwei Überschriften und drei Absätze. Die Seite enthält unterschiedliche Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Wenn Sie irgendwelche Probleme haben, dies zum Laufen zu bringen, können Sie Ihre Version gerne mit unseren fertigen Dateien vergleichen — siehe [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/web-fonts) oder [das fertige Beispiel live ausführen](https://mdn.github.io/learning-area/css/web-fonts/web-font-finished.html).

## Verwendung eines Online-Schriftdienstes

Online-Schriftdienste speichern und bieten Schriftarten in der Regel für Sie an, sodass Sie sich nicht um das Schreiben des `@font-face` Codes kümmern müssen. Stattdessen müssen Sie normalerweise nur eine einfache Zeile oder zwei Code in Ihre Seite einfügen, um alles zum Laufen zu bringen. Beispiele sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste sind abonnementbasiert, mit der bemerkenswerten Ausnahme von [Google Fonts](https://fonts.google.com/), einem nützlichen kostenlosen Dienst, insbesondere für schnelle Tests und das Schreiben von Demos.

Die meisten dieser Dienste sind einfach zu benutzen. Lassen Sie uns schnell Google Fonts ansehen, damit Sie eine Vorstellung bekommen. Wieder verwenden Sie Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Finden Sie ein paar Schriftarten, die Ihnen gefallen, mit den Filtern und der Suchleiste.
3. Klicken Sie auf eine Schrift, um ihre Detailseite zu öffnen.
4. Wenn Sie eine Schrift gefunden haben, die Sie mögen, klicken Sie auf die Schaltfläche **Get font** auf ihrer Detailseite, um sie zur Seite der ausgewählten Schriftarten hinzuzufügen. Wenn Sie eine weitere Schrift hinzufügen möchten, klicken Sie auf die Zurück-Taste Ihres Browsers und suchen Sie erneut.
5. Wenn Sie mit der Auswahl der Schriftarten fertig sind, klicken Sie auf die Schaltfläche **Get embed code** auf der Seite der ausgewählten Schriftarten und kopieren Sie die bereitgestellten `<link>` Elemente.
6. Fügen Sie die `<link>` Elemente in den `<head>` Ihres HTML-Dokuments ein, über allen bestehenden Stilblatt-Links.
7. Kopieren Sie die bereitgestellten `font-family` CSS-Regeln und verwenden Sie sie in Ihrem CSS, um die Schriftarten anzuwenden, ähnlich wie im vorherigen Durchgang.

> [!NOTE]
> Sie können eine fertige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.css) finden, wenn Sie Ihre Arbeit mit unserer vergleichen möchten ([siehe es live](https://mdn.github.io/learning-area/css/web-fonts/google-font.html)).

## @font-face im Detail

Lassen Sie uns die `@font-face` Syntax erkunden, die für Sie von Transfonter generiert wurde. Die Regelgruppen sehen ungefähr so aus:

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

Zerlegen wir es, um zu sehen, was es macht:

- `font-family`: Diese Zeile gibt den Namen an, mit dem Sie auf die Schrift referenzieren möchten. Das kann alles sein, solange Sie es durchgängig in Ihrem CSS verwenden.
- `src`: Diese Zeilen geben die Pfade zu den Schriftdateien an, die in Ihr CSS importiert werden sollen (der `url` Teil) und das Format jeder Schriftdatei (der `format` Teil). Der letztere Teil ist in jedem Fall optional, aber es ist nützlich, ihn anzugeben, da es Browsern ermöglicht, schneller zu ermitteln, welche Schrift sie verwenden können. Mehrere Deklarationen können aufgelistet werden, getrennt durch Kommas. Da der Browser sie gemäß den Regeln der Kaskade durchsucht, ist es am besten, Ihre bevorzugten Formate, wie WOFF2, am Anfang anzugeben.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben an, welches Gewicht die Schrift hat und ob sie kursiv ist oder nicht. Wenn Sie mehrere Gewichte derselben Schrift importieren, können Sie angeben, welches Gewicht/Stil sie haben und dann verschiedene Werte von `font-weight`/`font-style` verwenden, um zwischen ihnen zu wählen, anstatt allen Mitgliedern der Schriftfamilie unterschiedliche Namen geben zu müssen. [@font-face Tipp: Definieren Sie font-weight und font-style, um Ihr CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson zeigt im Detail, was zu tun ist.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile gibt an, wie die Schrift während des Ladens angezeigt wird.

> [!NOTE]
> Sie können auch bestimmte {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} Werte für Ihre Webfonts angeben. In neueren Browsern können Sie auch einen {{cssxref("@font-face/unicode-range", "unicode-range")}} Wert angeben, der einen bestimmten Zeichensatz darstellt, den Sie möglicherweise aus der Webschriftart verwenden möchten. In unterstützenden Browsern wird die Schriftart nur heruntergeladen, wenn die Seite diese angegebenen Zeichen enthält, was unnötige Downloads spart. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan bietet einige nützliche Ideen, wie man dies nutzen kann.

## Zusammenfassung

Nachdem Sie unsere Artikel über die Grundlagen der Textgestaltung durchgearbeitet haben, ist es an der Zeit, Ihr Verständnis mit unserer Herausforderung für das Modul zu testen: [Typografie einer Homepage einer Gemeinschaftsschule](/de/docs/Learn_web_development/Core/Text_styling/Typesetting_a_homepage).

Wenn Sie die Herausforderung abgeschlossen haben, können Sie mit dem Lernen über [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) fortfahren.

## Siehe auch

- [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Fonts-Wissen](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
