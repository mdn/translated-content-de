---
title: Webfonts
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 5290150ba98af55634d85f974a14df5a15b36356
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

Im ersten Artikel dieses Moduls haben wir die grundlegenden CSS-Funktionen zur Gestaltung von Schriftarten und Text kennengelernt. In diesem Artikel befassen wir uns ausführlicher mit Webfonts. Sie erfahren, wie Sie eigene Schriftarten auf Ihrer Webseite verwenden und Text damit vielfältiger gestalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der Gestaltung mit CSS</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
       <ul>
         <li>Verstehen, dass Entwickler mit Webfonts über die Auswahl websicherer Schriftarten hinausgehen und eigene Schriftarten in ihren Webanwendungen verwenden können.</li>
         <li>Die grundlegende Einrichtung mit der At-Regel <code>@font-face</code> und gängigen Deskriptoren kennenlernen.</li>
         <li>Einen Webfont mit der Eigenschaft <code>font-family</code> verwenden.</li>
         <li>Onlinedienste nutzen, um Webfonts zu finden und den erforderlichen Code zu erzeugen.</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## Schriftfamilien im Überblick

Wie im Artikel [Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals) beschrieben, können Sie die auf Ihr HTML angewendeten Schriftarten mit der Eigenschaft {{cssxref("font-family")}} steuern. Diese nimmt einen oder mehrere Namen von Schriftfamilien entgegen. Beim Anzeigen einer Webseite geht der Browser die Liste der `font-family`-Werte durch, bis er eine Schriftart findet, die auf dem System verfügbar ist, auf dem er ausgeführt wird:

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

Dieses System funktioniert gut, doch traditionell war die Auswahl an Schriftarten für Webentwickler begrenzt. Nur bei einer Handvoll Schriftarten können Sie davon ausgehen, dass sie auf allen gängigen Systemen verfügbar sind – den sogenannten [websicheren Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts). Sie können in der Liste bevorzugte Schriftarten angeben, gefolgt von websicheren Alternativen und schließlich der Standardschriftart des Systems. Das erhöht jedoch Ihren Arbeitsaufwand, da Sie prüfen müssen, ob Ihr Design mit jeder dieser Schriftarten funktioniert.

## Webfonts

Es gibt eine gut funktionierende Alternative: Mit CSS können Sie Schriftdateien angeben, die im Web verfügbar sind und beim Aufruf Ihrer Website heruntergeladen werden. So kann jeder Browser, der diese CSS-Funktion unterstützt, die von Ihnen ausgewählten Schriftarten anzeigen. Die erforderliche Syntax sieht ungefähr so aus:

Zunächst steht am Anfang des CSS ein {{cssxref("@font-face")}}-Regelsatz, der angibt, welche Schriftdatei oder Schriftdateien heruntergeladen werden sollen:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

Anschließend verwenden Sie den in {{cssxref("@font-face")}} festgelegten Namen der Schriftfamilie wie gewohnt, um Ihre eigene Schriftart auf die gewünschten Elemente anzuwenden:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Die Syntax kann etwas komplexer werden. Weiter unten gehen wir näher darauf ein.

Bei Webfonts sollten Sie einige wichtige Punkte beachten:

1. Schriftarten dürfen in der Regel nicht uneingeschränkt kostenlos verwendet werden. Möglicherweise müssen Sie dafür bezahlen und/oder weitere Lizenzbedingungen einhalten, etwa den Urheber der Schriftart in Ihrem Code oder auf Ihrer Website nennen. Sie sollten Schriftarten nicht ohne entsprechende Berechtigung oder Namensnennung verwenden.
2. Alle modernen Browser unterstützen WOFF2 (Web Open Font Format Version 2). Daher verwenden wir in diesem Artikel dieses Format.
3. WOFF2 unterstützt die gesamten TrueType- und OpenType-Spezifikationen, einschließlich variabler Schriftarten, farbiger Schriftarten und Schriftsammlungen.
4. Es empfiehlt sich, möglichst wenige Webfont-Dateien bereitzustellen. Wenn Sie nur die benötigten Formate verwenden, muss Ihre Website weniger Dateien ausliefern und die Schrift-Downloads bleiben kleiner.
5. Wenn Sie in einem realen Projekt ältere Browser unterstützen müssen, benötigen Sie möglicherweise zusätzlich WOFF. In der [Tabelle zur Browser-Kompatibilität](/de/docs/Web/CSS/Reference/At-rules/@font-face#browser_compatibility) für {{cssxref("@font-face")}} können Sie nachsehen, wie weit die Unterstützung für WOFF und WOFF2 zurückreicht.

Mit dem [Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) können Sie die auf Ihrer Seite verwendeten Schriftarten untersuchen und bearbeiten – unabhängig davon, ob es sich um Webfonts handelt.

## Eigene Webfonts hinzufügen

Erstellen wir nun von Grund auf ein einfaches Beispiel mit Webfonts. Verwenden Sie die Dateien [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.html) und [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.css) als Ausgangspunkt für Ihren Code (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/css/web-fonts/web-font-start.html)). Kopieren Sie diese Dateien zunächst in ein neues Verzeichnis auf Ihrem Computer. In der Datei `web-font-start.css` finden Sie bereits etwas CSS für das grundlegende Layout und die Schriftgestaltung des Beispiels.

### Schriftarten finden

Für dieses Beispiel verwenden wir zwei Webfonts: einen für die Überschriften und einen für den Fließtext. Zunächst benötigen wir die entsprechenden Schriftdateien. Schriftarten werden von Schriftgießereien erstellt und in unterschiedlichen Dateiformaten gespeichert. Im Allgemeinen gibt es drei Arten von Websites, auf denen Sie Schriftarten beziehen können:

- Ein Anbieter kostenloser Schriftarten: Auf einer solchen Website können Sie Schriftarten kostenlos herunterladen. Es können dennoch Lizenzbedingungen gelten, beispielsweise die Pflicht zur Namensnennung des Urhebers. Beispiele sind [DaFont](https://www.dafont.com/) und [Everything Fonts](https://everythingfonts.com/).
- Ein Anbieter kostenpflichtiger Schriftarten: Auf einer solchen Website erhalten Sie Schriftarten gegen Bezahlung, beispielsweise bei [myfonts.com](https://www.myfonts.com/). Sie können Schriftarten auch direkt bei Schriftgießereien kaufen, etwa bei [Linotype](https://www.linotype.com/), [Monotype](https://www.monotype.com/) oder [Exljbris](https://www.exljbris.com/).
- Ein Onlinedienst für Schriftarten: Eine solche Website speichert die Schriftarten und stellt sie für Sie bereit, was den gesamten Vorgang vereinfacht. Weitere Informationen finden Sie im Abschnitt [Einen Onlinedienst für Schriftarten verwenden](#einen_onlinedienst_für_schriftarten_verwenden).

Suchen wir nun einige Schriftarten! Rufen Sie [DaFont](https://www.dafont.com/) auf und wählen Sie zwei Schriftarten: eine interessante Schriftart für die Überschriften, vielleicht eine Display-Schrift oder eine Slab-Serif-Schrift, und eine etwas zurückhaltendere, besser lesbare Schriftart für die Absätze. Wenn Sie eine passende Schriftart gefunden haben, klicken Sie auf die Download-Schaltfläche und speichern Sie die Datei im selben Verzeichnis wie die zuvor gespeicherten HTML- und CSS-Dateien. Ob es sich um TrueType Fonts (TTF) oder OpenType Fonts (OTF) handelt, spielt keine Rolle.

Entpacken Sie die beiden Schriftpakete. Webfonts werden üblicherweise als ZIP-Dateien mit den Schriftdateien und Lizenzinformationen bereitgestellt. Möglicherweise enthält ein Paket mehrere Schriftdateien: Manche Schriftarten werden als Familie mit verschiedenen Varianten angeboten, beispielsweise dünn, mittel, fett, kursiv oder dünn kursiv. Für dieses Beispiel benötigen Sie für jede der beiden ausgewählten Schriftarten nur eine Datei.

### Den erforderlichen Code erzeugen

Als Nächstes müssen Sie den erforderlichen Code und die Schriftformate erzeugen. Gehen Sie dazu wie folgt vor:

1. Stellen Sie sicher, dass Sie alle Lizenzbedingungen erfüllen, falls Sie die Schriftarten in einem kommerziellen Projekt und/oder einem Webprojekt verwenden möchten.
2. Öffnen Sie den [Webfont-Generator](https://transfonter.org/) von Transfonter.
3. Laden Sie Ihre beiden Schriftdateien über die Schaltfläche _Upload your fonts_ hoch.
4. Stellen Sie sicher, dass nur **WOFF2** ausgewählt ist. Deaktivieren Sie **WOFF**.
5. Klicken Sie auf _Convert_.
6. Klicken Sie auf _Download_.

Entpacken Sie die heruntergeladene ZIP-Datei und verschieben Sie das entpackte Verzeichnis in dasselbe Verzeichnis wie Ihre HTML- und CSS-Dateien.

### Den Code in Ihr Beispiel einbauen

Im entpackten Verzeichnis finden Sie einige nützliche Dateien:

- Eine `.woff2`-Version jeder Schriftart.
- Eine Demo-HTML-Datei für jede Schriftart. Öffnen Sie diese Dateien im Browser, um zu sehen, wie die Schriftarten in verschiedenen Verwendungskontexten aussehen.
- Eine Datei namens `stylesheet.css` mit dem erzeugten `@font-face`-Code, den Sie benötigen.

Gehen Sie wie folgt vor, um die Schriftarten in Ihr Beispiel einzubauen:

1. Benennen Sie das entpackte Verzeichnis einfach und eindeutig um, beispielsweise in `fonts`.
2. Öffnen Sie `stylesheet.css` und kopieren Sie die beiden `@font-face`-Regelsätze in Ihre Datei `web-font-start.css`. Setzen Sie sie ganz an den Anfang, vor Ihr übriges CSS, da die Schriftarten importiert werden müssen, bevor Sie sie auf Ihrer Website verwenden können.
3. Jede `url()`-Funktion verweist auf eine Schriftdatei, die in das CSS eingebunden werden soll. Stellen Sie sicher, dass die Dateipfade stimmen, indem Sie jedem Pfad `fonts/` voranstellen. Passen Sie die Pfade bei Bedarf an.
4. Nun können Sie diese Schriftarten in Ihren Schriftlisten verwenden, genau wie websichere Schriftarten oder Standardschriftarten des Systems. Zum Beispiel:

   ```css
   @font-face {
     font-family: "zantrokeregular";
     src: url("fonts/zantroke-webfont.woff2") format("woff2");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
   }
   ```

   ```css
   font-family: "zantrokeregular", serif;
   ```

   Die generische Schriftfamilie `serif` dient als Ausweichlösung mit einer Systemschriftart, falls der Webfont nicht geladen werden kann. Eine geringe Zahl von Webfont-Dateien und -Formaten verbessert außerdem die Performance, da der Browser weniger Ressourcen abrufen muss.

Am Ende sollten Sie eine Beispielseite mit ansprechenden Schriftarten haben. Da verschiedene Schriftarten unterschiedlich groß ausfallen, müssen Sie möglicherweise Schriftgrößen, Abstände und Ähnliches anpassen, um das Erscheinungsbild zu verbessern.

![Das fertige Design einer Übung zu Webfonts. Die Seite hat zwei Überschriften und drei Absätze. Sie enthält verschiedene Schriftarten und Text in unterschiedlichen Größen.](web-font-example.png)

> [!NOTE]
> Falls Sie Probleme bei der Umsetzung haben, können Sie Ihre Version mit unseren fertigen Dateien vergleichen: [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.html) und [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.css). Sie können auch den [Code von GitHub herunterladen](https://github.com/mdn/learning-area/tree/main/css/web-fonts) oder [das fertige Beispiel live ansehen](https://mdn.github.io/learning-area/css/web-fonts/web-font-finished.html).

## Einen Onlinedienst für Schriftarten verwenden

Onlinedienste für Schriftarten speichern die Schriftarten in der Regel für Sie und stellen sie bereit. Sie müssen sich daher nicht selbst um den `@font-face`-Code kümmern. Stattdessen fügen Sie meist nur ein oder zwei einfache Codezeilen in Ihre Website ein. Beispiele hierfür sind [Adobe Fonts](https://fonts.adobe.com/) und [Cloud.typography](https://www.typography.com/webfonts). Die meisten dieser Dienste erfordern ein Abonnement. Eine nennenswerte Ausnahme ist [Google Fonts](https://fonts.google.com/), ein nützlicher kostenloser Dienst, insbesondere für schnelle Tests und die Erstellung von Beispielen.

Die meisten dieser Dienste sind einfach zu verwenden. Sehen wir uns Google Fonts kurz an, damit Sie das Prinzip kennenlernen. Verwenden Sie erneut Kopien von `web-font-start.html` und `web-font-start.css` als Ausgangspunkt.

1. Öffnen Sie [Google Fonts](https://fonts.google.com/).
2. Suchen Sie mithilfe der Filter und der Suchleiste nach einigen Schriftarten, die Ihnen gefallen.
3. Klicken Sie auf eine Schriftart, um deren Detailseite zu öffnen.
4. Wenn Sie eine passende Schriftart gefunden haben, klicken Sie auf ihrer Detailseite auf **Get font**, um sie zur Seite mit den ausgewählten Schriftarten hinzuzufügen. Wenn Sie eine weitere Schriftart hinzufügen möchten, verwenden Sie die Zurück-Schaltfläche Ihres Browsers und suchen Sie erneut.
5. Wenn Sie alle Schriftarten ausgewählt haben, klicken Sie auf der Seite mit den ausgewählten Schriftarten auf **Get embed code** und kopieren Sie die bereitgestellten `<link>`-Elemente.
6. Fügen Sie die `<link>`-Elemente in den `<head>` Ihres HTML-Dokuments ein, oberhalb aller vorhandenen Links zu Stylesheets.
7. Kopieren Sie die bereitgestellten CSS-Regeln für `font-family` und verwenden Sie sie in Ihrem CSS, um die Schriftarten anzuwenden – ähnlich wie im vorherigen Beispiel.

> [!NOTE]
> Wenn Sie Ihre Arbeit mit unserer vergleichen möchten, finden Sie eine fertige Version unter [google-font.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.html) und [google-font.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.css). Sie können [das Beispiel auch live ansehen](https://mdn.github.io/learning-area/css/web-fonts/google-font.html).

## @font-face im Detail

Sehen wir uns die `@font-face`-Syntax genauer an, die Transfonter für Sie erzeugt hat. Die Regelsätze sehen ungefähr so aus:

```css
@font-face {
  font-family: "zantrokeregular";
  src: url("zantroke-webfont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Gehen wir die Bestandteile durch:

- `font-family`: Diese Zeile legt den Namen fest, unter dem Sie die Schriftart verwenden möchten. Sie können einen beliebigen Namen wählen, solange Sie ihn in Ihrem gesamten CSS einheitlich verwenden.
- `src`: Diese Zeile gibt den Pfad zur Schriftdatei an, die in Ihr CSS eingebunden werden soll (der `url`-Teil), sowie das Schriftformat (der `format`-Teil). Der zweite Teil ist optional. Es ist jedoch hilfreich, das Format anzugeben, da Browser so schneller feststellen können, ob sie die Schriftart verwenden können. Wenn Sie ältere Browser unterstützen müssen, können Sie zusätzliche Schriftquellen durch Kommas getrennt auflisten. Stellen Sie dabei das bevorzugte Format – üblicherweise WOFF2 – an den Anfang.
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: Diese Zeilen geben die Strichstärke der Schriftart an und legen fest, ob sie kursiv ist. Wenn Sie mehrere Strichstärken derselben Schriftart importieren, können Sie deren Strichstärke und Stil angeben und anschließend mit unterschiedlichen Werten für `font-weight` und `font-style` zwischen ihnen wählen. So müssen Sie nicht jeder Variante der Schriftfamilie einen anderen Namen geben. Der Artikel [@font-face-Tipp: font-weight und font-style definieren, um CSS einfach zu halten](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) von Roger Johansson erklärt dies ausführlicher.
- {{cssxref("@font-face/font-display", "font-display")}}: Diese Zeile legt fest, wie die Schriftart während des Ladevorgangs angezeigt wird.

> [!NOTE]
> Sie können für Ihre Webfonts auch bestimmte Werte für {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} und {{cssxref("@font-face/font-stretch", "font-stretch")}} angeben. In neueren Browsern können Sie außerdem mit {{cssxref("@font-face/unicode-range", "unicode-range")}} einen bestimmten Zeichenbereich der Schriftart festlegen, den Sie verwenden möchten. Browser, die dies unterstützen, laden die Schriftart nur herunter, wenn die Seite Zeichen aus diesem Bereich enthält. Dadurch werden unnötige Downloads vermieden. Der Artikel [Eigene Schriftlisten mit Unicode-Range erstellen](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) von Drew McLellan enthält einige nützliche Anregungen dazu.

## Zusammenfassung

Nachdem Sie unsere Artikel über die Grundlagen der Textgestaltung durchgearbeitet haben, können Sie Ihr Verständnis mit der Aufgabe zu diesem Modul überprüfen: [Die Startseite einer Gemeindeschule typografisch gestalten](/de/docs/Learn_web_development/Core/Text_styling/Typesetting_a_homepage).

Wenn Sie die Aufgabe abgeschlossen haben, können Sie sich als Nächstes mit [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) beschäftigen.

## Siehe auch

- [Leitfaden zu variablen Schriftarten](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Wissenswertes über Schriftarten](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
