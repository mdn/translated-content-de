---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 013458b2380d3c68e0df0002ec151f3d8eeb84c0
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechende Webseiten zu erstellen. Doch wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.

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
        > und Vertrautheit mit HTML (studieren Sie das
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Modul Strukturelle Inhalte mit HTML</a
        >).
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

Im Modul [Strukturelle Inhalte mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir besprochen, was HTML ist und wie es zur Markierung von Dokumenten verwendet wird. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften erscheinen größer als normaler Text, Absätze brechen in eine neue Zeile um und haben Abstand zwischen ihnen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Das, was Sie sehen, sind die Standard-Browserstile — sehr grundlegende Stile, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite auch dann lesbar ist, wenn der Autor der Seite keine expliziten Stile angegeben hat. Diese Stile sind in Standard-CSS-Stylesheets enthalten, die sich im Browser befinden — sie haben nichts mit HTML zu tun.

![Die Standardstile eines Browsers](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Webseiten so aussehen würden. Deshalb müssen Sie über CSS lernen.

## Wozu dient CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen und Ihre Dokumente mit jedem beliebigen Design und Layout für Ihre Nutzer präsentieren.

- Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden _HTML-Dokumente_ genannt). Möglicherweise begegnen Sie auch Dokumenten, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und legt deren Struktur fest.
- **Präsentieren** eines Dokuments für einen Benutzer bedeutet, es in eine Form zu konvertieren, die von Ihrem Publikum genutzt werden kann. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell darzustellen, zum Beispiel auf einem Computerbildschirm, Projektor, Mobilgerät oder Drucker. Im Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses geliefert, durch den eine Webseite in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke im Zusammenhang mit dem Erscheinungsbild Ihrer Webseite verwendet werden, zum Beispiel:

- Textstyling, einschließlich der Änderung der [Farbe](/de/docs/Web/CSS/Reference/Values/color_value) und [Größe](/de/docs/Web/CSS/Reference/Properties/font-size) von Überschriften und Links.
- Erstellung von Layouts, wie [Rasterlayouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [Mehrspaltenlayouts](/de/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts).
- Spezielle Effekte wie [Animationen](/de/docs/Web/CSS/Guides/Animations).

Die CSS-Sprache ist in _Module_ organisiert, die zusammengehörige Funktionalitäten enthalten. Beispielsweise finden Sie auf den MDN-Referenzseiten für das Modul [Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) heraus, was dessen Zweck ist und welche Eigenschaften und Funktionen es enthält. Auf unseren Modul-Seiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf ein bestimmtes Element oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Beispielsweise könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu stylen. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _selektiert_ die HTML-Elemente, die wir stylen werden. In diesem Fall stylen wir Überschriften der Ebene eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann fügen wir eine Reihe von geschweiften Klammern (`{ }`) ein, um einen **Deklarationsblock** zu erstellen.
- Der Deklarationsblock enthält eine oder mehrere **Deklarationen**, die in Form von **Eigenschaft**- und **Wert**-Paaren vorliegen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (im Beispiel ist `red` der Wert, der für die Eigenschaft `color` festgelegt wird).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine weitere für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben verschiedene zulässige Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

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

Sie werden feststellen, dass Sie schnell einige Werte lernen, während andere Sie nachschlagen müssen. Die individuellen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) aufgelistet. Alternativ sollten Sie sich daran gewöhnen, in Ihrer bevorzugten Suchmaschine nach "mdn _css-feature-name_" zu suchen, wann immer Sie mehr über eine CSS-Funktion erfahren möchten. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, empfängt der Browser beim Navigieren zu einer Webseite zuerst das HTML-Dokument, das den Webseiteninhalt enthält, und konvertiert es in einen **DOM-Baum**.

Danach werden alle CSS-Regeln, die auf der Webseite gefunden werden (entweder direkt in das HTML eingefügt oder in referenzierten externen `.css`-Dateien), in verschiedene "Bucket" sortiert, basierend auf den unterschiedlichen Elementen, auf die sie angewendet werden (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Renderbaum** führt, der dann im Browserfenster gezeichnet wird.

Schauen wir uns ein Beispiel an. Zuerst definieren wir einen HTML-Ausschnitt, auf den das CSS angewendet werden könnte:

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

Nun, unser CSS, wiederholt aus dem vorherigen Abschnitt:

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

- Selektiert alle `<h1>`-Elemente auf der Seite, färbt deren Text rot und macht sie größer als ihre Standardgröße. Da es in unserem Beispiel-HTML nur ein `<h1>`-Element gibt, erhält nur dieses Element das Styling.
- Selektiert alle `<p>`-Elemente auf der Seite, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe und etwas Abstand um den Text. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, ist die gerenderte Ausgabe wie folgt:

{{EmbedLiveSample('Wie wird CSS auf HTML angewendet?', '100%', 200)}}

## Spielen Sie mit etwas CSS

Versuchen Sie, mit dem obigen Beispiel zu spielen. Drücken Sie dazu die "Play"-Taste in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden.

Tun Sie Folgendes:

1. Fügen Sie einen weiteren Absatz unterhalb der beiden vorhandenen ein und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie eine `<h2>`-Unterüberschrift irgendwo unterhalb der `<h1>` ein, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2` und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und Werte in der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie Ihren Regeln hinzuzufügen!

Für zusätzliche Übungen mit den CSS-Grundlagen siehe [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieses Skript bietet eine nützliche Übersicht über die grundlegende CSS-Syntax und bietet eine interaktive Herausforderung, bei der Sie weitere Übung im Schreiben von CSS-Deklarationen erhalten.

## Zusammenfassung

Da Sie jetzt ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, gehen wir weiter und geben Ihnen einige Übungen, um CSS selbst zu schreiben und die Syntax ausführlicher zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
