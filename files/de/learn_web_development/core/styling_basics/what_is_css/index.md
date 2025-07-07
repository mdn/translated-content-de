---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 25d1da7132494104d33f02bc3e99c98f9175d195
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechende Webseiten zu erstellen, aber wie funktioniert es eigentlich im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        > und HTML-Vertrautheit (studieren Sie das
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Modul Strukturierung von Inhalten mit HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von CSS.</li>
          <li>Dass HTML nichts mit Styling zu tun hat.</li>
          <li>Das Konzept der Standard-Browserstile.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standard-Browserstile

Im Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zur Auszeichnung von Dokumenten verwendet wird. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften sehen größer aus als normaler Text, Absätze beginnen auf einer neuen Zeile und haben Abstand dazwischen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegendes Styling, das der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, selbst wenn der Autor der Seite kein explizites Styling angegeben hat. Diese Stile sind in Standard-CSS-Stylesheets enthalten, die im Browser enthalten sind — sie haben nichts mit HTML zu tun.

![Die von einem Browser verwendeten Standardstile](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussähen. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS gedacht?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente mit dem gewünschten Design und Layout Ihren Benutzern präsentieren.

- Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Markup-Sprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente stoßen, die in anderen Markup-Sprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und gibt ihre Struktur an.
- **Präsentieren** eines Dokuments bedeutet, es in eine für Ihr Publikum nutzbare Form umzuwandeln. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell zu präsentieren, z. B. auf einem Computerbildschirm, Projektor, mobilen Gerät oder Drucker. Im Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses bereitgestellt, wie eine Webseite in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person in einem Computersystem repräsentiert.

CSS kann für viele Zwecke im Zusammenhang mit dem Aussehen und Gefühl Ihrer Webseite verwendet werden, zum Beispiel:

- Textgestaltung, einschließlich Ändern der [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links.
- Erstellung von Layouts, wie [Grid-Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [mehrspaltige Layouts](/de/docs/Web/CSS/Layout_cookbook/Column_layouts).
- Spezielle Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die zusammenhängende Funktionalitäten enthalten. Beispielsweise schauen Sie sich die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, was dessen Zweck ist und welche Eigenschaften und Funktionen es enthält. In unseren Modulseiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlagen der CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreichen würde:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir gestalten werden. In diesem Fall gestalten wir Ebene-1-Überschriften (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Wir fügen dann ein Satz geschweifter Klammern ein — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die die Form von **Eigenschafts-** und **Werte**-Paaren annehmen. Wir geben die Eigenschaft an (z. B. `color` im obigen Beispiel) vor dem Doppelpunkt an und wir geben den Wert der Eigenschaft nach dem Doppelpunkt an (`red` ist der für die `color`-Eigenschaft gesetzte Wert).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine andere für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

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

Sie werden feststellen, dass Sie einige Werte schnell lernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und deren Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie sich daran gewöhnen, in Ihrer bevorzugten Suchmaschine nach "mdn _css-feature-name_" zu suchen, wann immer Sie mehr Informationen über ein CSS-Feature benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erläutert, erhält der Browser, wenn Sie zu einer Webseite navigieren, zunächst das HTML-Dokument mit dem Webseiteninhalt und wandelt es in einen **DOM-Baum** um.

Danach werden alle im Webpage gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien) in verschiedene "Eimer" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden sollen (wie vom Selektor angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Renderbaum** führt, der dann im Browserfenster gezeichnet wird.

Lassen Sie uns ein Beispiel betrachten. Zuerst definieren wir ein HTML-Snippet, auf das das CSS angewendet werden könnte:

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

Jetzt unser CSS, das aus dem vorherigen Abschnitt wiederholt wird:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus und färbt deren Text rot und macht sie größer als ihre Standardgröße. Da es nur ein `<h1>` in unserem Beispiel-HTML gibt, erhält nur dieses Element das Styling.
- Wählt alle `<p>`-Elemente auf der Seite aus und gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe sowie einen Abstand um den Text. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

## Spielen Sie mit etwas CSS

Versuchen Sie, mit dem obigen Beispiel zu spielen. Um dies zu tun, drücken Sie die "Play"-Taste in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden.

Machen Sie Folgendes:

1. Fügen Sie einen weiteren Absatz unter den beiden bestehenden hinzu und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie irgendwo unter dem `<h1>` eine `<h2>`-Zwischenüberschrift hinzu, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2` und ändern Sie den `color`-Wert von `red` in `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und -Werte in der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie zu Ihren Regeln hinzuzufügen!

Für zusätzliche Übungen zu den CSS-Grundlagen siehe [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieses Scrim bietet einen nützlichen Überblick über die grundlegende CSS-Syntax und bietet eine interaktive Herausforderung, bei der Sie mehr Übung im Schreiben von CSS-Deklarationen bekommen können.

## Zusammenfassung

Da Sie nun ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, machen wir weiter damit, Ihnen einige Übungen zum Schreiben von CSS selbst zu geben und die Syntax im Detail zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
