---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >den Umgang mit Dateien</a
        > und HTML-Vertrautheit (lernen Sie das Modul
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von CSS.</li>
          <li>Dass HTML nichts mit Styling zu tun hat.</li>
          <li>Das Konzept der Standardstile des Browsers.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standardstile des Browsers

Im Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zur Markierung von Dokumenten verwendet wird. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften sehen größer aus als normaler Text, Absätze brechen in eine neue Zeile und haben Abstand dazwischen. Links sind gefärbt und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Stile, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, auch wenn keine expliziten Stile vom Autor der Seite angegeben wurden. Diese Stile sind in den Standard-CSS-Stilblättern enthalten, die im Browser enthalten sind — sie haben nichts mit HTML zu tun.

![Die vom Browser verwendeten Standardstile](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Webseiten so aussehen würden. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente mit dem gewünschten Design und Layout Ihren Nutzern präsentieren.

- Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (dies sind sogenannte _HTML-Dokumente_). Sie können auch Dokumente finden, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und gibt deren Struktur an.
- Ein Dokument **zu präsentieren** bedeutet, es in eine für Ihr Publikum nutzbare Form umzuwandeln. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind dafür gedacht, Dokumente visuell zu präsentieren, z. B. auf einem Computerbildschirm, Projektor, mobilen Gerät oder Drucker. In einem Web-Kontext wird dies allgemein als _Rendering_ bezeichnet. Wir haben in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) eine vereinfachte Beschreibung des Prozesses gegeben, durch den eine Webseite gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "User Agent")}} bezeichnet, was im Grunde genommen ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke im Zusammenhang mit dem Aussehen und der Anmutung Ihrer Webseite verwendet werden, zum Beispiel:

- Textstyling, einschließlich der Änderung der [Farbe](/de/docs/Web/CSS/Reference/Values/color_value) und [Größe](/de/docs/Web/CSS/Reference/Properties/font-size) von Überschriften und Links.
- Layouts erstellen, wie [Grid-Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [Mehrspalten-Layouts](/de/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts).
- Spezialeffekte wie [Animation](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die verwandte Funktionalitäten enthalten. Schauen Sie sich zum Beispiel die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, welches Ziel es hat und welche Eigenschaften und Merkmale es enthält. Auf unseren Modulseiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlagen der CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf ein bestimmtes Element oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie beschließen, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir stylen werden. In diesem Fall stylen wir Level-1-Überschriften (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann fügen wir eine Menge geschweifte Klammern hinzu — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die aus Paaren von **Eigenschaft** und **Wert** bestehen. Wir geben die Eigenschaft an (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und wir geben den Wert der Eigenschaft nach dem Doppelpunkt an (`red` ist der für die `color`-Eigenschaft gesetzte Wert).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine andere für `font-size`.

Unterschiedliche CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stilblatt enthält viele solcher Regeln, die nacheinander geschrieben werden.

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

Sie werden feststellen, dass Sie schnell einige Werte lernen werden, während andere nachgeschlagen werden müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) im [CSS-Referenz](/de/docs/Web/CSS/Reference) auf MDN. Alternativ sollten Sie sich daran gewöhnen, "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, wenn Sie zu einer Webseite navigieren, erhält der Browser zuerst das HTML-Dokument, das den Inhalt der Webseite enthält, und wandelt es in einen **DOM-Baum** um.

Danach werden alle in der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien) in verschiedene "Behälter" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden (wie von ihren Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was in einem **Render-Baum** resultiert, der dann im Browserfenster angezeigt wird.

Schauen wir uns ein Beispiel an. Zuerst definieren wir ein HTML-Snippet, auf das das CSS angewendet werden könnte:

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

Nun unser CSS, wiederholt aus dem vorherigen Abschnitt:

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

Dieses CSS:

- Wählt alle `<h1>`-Elemente auf der Seite aus und färbt deren Text rot und macht sie größer als ihre Standardgröße. Da es nur ein `<h1>` in unserem Beispiel-HTML gibt, wird nur dieses Element das Styling erhalten.
- Wählt alle `<p>`-Elemente auf der Seite aus und gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe sowie etwas Abstand um den Text. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, ist die gerenderte Ausgabe wie folgt:

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

## Experimentieren Sie mit CSS

Versuchen Sie, mit dem obigen Beispiel zu experimentieren. Drücken Sie dazu auf die Schaltfläche "Play" in der oberen rechten Ecke, um es in unserem MDN Playground Editor zu laden.

Führen Sie die folgenden Schritte aus:

1. Fügen Sie einen weiteren Absatz unter den beiden vorhandenen hinzu und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie eine `<h2>`-Unterüberschrift irgendwo unter dem `<h1>` hinzu, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2` und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und -Werte in der MDN-Referenz [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie zu Ihren Regeln hinzuzufügen!

Für zusätzliche Übung mit den Grundlagen von CSS, sehen Sie sich [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba an <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieses Skript bietet eine nützliche Zusammenfassung der grundlegenden CSS-Syntax und bietet eine interaktive Herausforderung, bei der Sie mehr Übung im Schreiben von CSS-Deklarationen bekommen können.

## Zusammenfassung

Nun, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns fortfahren, Ihnen etwas Praxis im Schreiben von CSS zu geben und die Syntax im Detail zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
