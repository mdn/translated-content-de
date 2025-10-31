---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert es eigentlich im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        > und Vertrautheit mit HTML (studieren Sie das Modul
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von CSS.</li>
          <li>Dass HTML nichts mit dem Styling zu tun hat.</li>
          <li>Das Konzept der Standard-Browserstile.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standard-Browserstile

Im Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es verwendet wird, um Dokumente zu kennzeichnen. Diese Dokumente werden in einem Webbrowser lesbar sein. Überschriften werden größer als normaler Text angezeigt, Absätze brechen in eine neue Zeile um und haben Abstand dazwischen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Styling, das der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, selbst wenn vom Autor der Seite kein explizites Styling angegeben ist. Diese Stile sind in den Standard-CSS-Stylesheets enthalten, die sich im Browser befinden und haben nichts mit HTML zu tun.

![Die Standardstile eines Browsers](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussehen würden. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS da?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente nach Belieben den Benutzern präsentieren.

- Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden _HTML-Dokumente_ genannt). Sie können auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und spezifiziert ihre Struktur.
- **Präsentieren** eines Dokuments bedeutet, es in eine Form zu bringen, die für Ihr Publikum nutzbar ist. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind so konzipiert, Dokumente visuell zu präsentieren, zum Beispiel auf einem Computerbildschirm, einem Projektor, einem mobilen Gerät oder einem Drucker. Im Webkontext wird dies allgemein als _Rendering_ bezeichnet; wir bieten eine vereinfachte Beschreibung des Prozesses, durch den eine Webseite im [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "user agent")}} bezeichnet, was im Wesentlichen ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke im Zusammenhang mit dem Aussehen und Gefühl Ihrer Webseite verwendet werden, zum Beispiel:

- Textstilierung, einschließlich der Änderung der [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/Reference/Properties/font-size) von Überschriften und Links.
- Erstellen von Layouts, wie [Rasterlayouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [Mehrspaltenlayouts](/de/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts).
- Spezielle Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die zugehörige Funktionalitäten enthalten. Beispielsweise werfen Sie einen Blick auf die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders), um herauszufinden, was dessen Zweck ist und welche Eigenschaften und Funktionen es enthält. Auf unseren Modul-Seiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen anzugeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selector")}}. Dieser _wählt_ die HTML-Elemente aus, die wir gestalten werden. In diesem Fall gestalten wir Überschriften der Stufe eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann fügen wir ein Paar geschweifte Klammern ein — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die aus **Eigenschafts-** und **Werte**-Paaren bestehen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` ist der Wert, der für die Eigenschaft `color` festgelegt wird).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine andere für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die `color` Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `font-size` Eigenschaft, die verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen kann.

Ein CSS-Stylesheet enthält viele solcher Regeln, die nacheinander geschrieben werden.

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

Sie werden feststellen, dass Sie einige Werte schnell lernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen einen schnellen Weg, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) auf der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie es sich angewöhnen, "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, erhält der Browser, wenn Sie zu einer Webseite navigieren, zunächst das HTML-Dokument, das den Webseiteninhalt enthält, und wandelt es in einen **DOM-Baum** um.

Danach werden alle CSS-Regeln, die in der Webseite gefunden werden (entweder direkt in das HTML eingefügt oder in referenzierten externen `.css`-Dateien), in verschiedene "Eimer" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden sollen (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Render-Baum** führt, der dann im Browserfenster dargestellt wird.

Lassen Sie uns ein Beispiel ansehen. Zuerst definieren wir ein HTML-Snippet, auf das CSS angewendet werden könnte:

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

Nun unser CSS, das aus dem vorherigen Abschnitt wiederholt wird:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt ihren Text rot und macht sie größer als ihre Standardgröße. Da es in unserem Beispiel-HTML nur ein `<h1>` gibt, erhält nur dieses Element das Styling.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine individuelle Text- und Hintergrundfarbe und etwas Abstand um den Text herum. In unserem Beispiel-HTML gibt es zwei `<p>`-Elemente, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('Wie wird CSS auf HTML angewendet?', '100%', 200)}}

## Spielen Sie mit etwas CSS

Versuchen Sie, mit dem obigen Beispiel zu spielen. Um dies zu tun, drücken Sie die "Play"-Schaltfläche in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden.

Folgendes tun:

1. Fügen Sie einen weiteren Absatztext unterhalb der beiden vorhandenen hinzu und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie eine `<h2>`-Unterüberschrift irgendwo unterhalb der `<h1>`-Überschrift hinzu, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor in `h2` und ändern Sie den `color`-Wert von `red` in `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und Werte im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie zu Ihren Regeln hinzuzufügen!

Für zusätzliche Übung mit CSS-Grundlagen siehe [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieser Scrim bietet eine nützliche Zusammenfassung der grundlegenden CSS-Syntax und eine interaktive Herausforderung, bei der Sie etwas mehr Praxis im Schreiben von CSS-Deklarationen erhalten.

## Zusammenfassung

Nun, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns weitermachen, um Ihnen einige Übungen im Schreiben von CSS zu geben und die Syntax ausführlicher zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
