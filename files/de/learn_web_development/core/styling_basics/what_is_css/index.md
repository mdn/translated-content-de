---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 79b46675e64c9b3e7c4333c17b21b692f78b39ec
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.

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
          >Strukturieren von Inhalten mit HTML</a
        > Modul.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von CSS.</li>
          <li>Dass HTML nichts mit dem Styling zu tun hat.</li>
          <li>Das Konzept der Standardbrowserstile.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standardbrowserstile

Im Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zum Markieren von Dokumenten verwendet wird. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften sehen größer aus als normaler Text, Absätze brechen auf eine neue Zeile um und haben Zwischenräume. Links sind eingefärbt und unterstrichen, um sie vom Rest des Textes zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers – sehr grundlegende Styles, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, selbst wenn der Autor der Seite keine expliziten Styles angegeben hat. Diese Styles sind in den standardmäßigen CSS-Stylesheets definiert, die im Browser enthalten sind – sie haben nichts mit HTML zu tun.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Webseiten so aussehen würden. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente mit jedem gewünschten Design und Layout präsentieren.

- Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, meist {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält die Inhalte einer Webseite und legt deren Struktur fest.
- **Präsentieren** eines Dokuments für einen Benutzer bedeutet, es in eine für das Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell darzustellen, beispielsweise auf einem Computermonitor, Projektor, mobilen Gerät oder Drucker. In einem Webkontext wird dies im Allgemeinen als _Rendering_ bezeichnet; wir boten eine vereinfachte Beschreibung des Prozesses, durch den eine Webseite gerendert wird, in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "User Agent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems darstellt.

CSS kann für viele Zwecke im Zusammenhang mit dem Aussehen und der Wahrnehmung Ihrer Webseite verwendet werden, zum Beispiel:

- Textstyling, einschließlich der Änderung der [Farbe](/de/docs/Web/CSS/Reference/Values/color_value) und [Größe](/de/docs/Web/CSS/Reference/Properties/font-size) von Überschriften und Links.
- Erstellen von Layouts wie [Rasterlayouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [mehrspaltige Layouts](/de/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts).
- Spezielle Effekte wie [Animation](/de/docs/Web/CSS/Guides/Animations).

Die CSS-Sprache ist in _Module_ organisiert, die verwandte Funktionalitäten enthalten. Beispielsweise werfen Sie einen Blick auf die MDN-Referenzseiten für das [Hintergrund und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul, um dessen Zweck und die Eigenschaften und Funktionen zu erfahren, die es enthält. In unseren Modulseiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlagen der CSS-Syntax

CSS ist eine regelbasierte Sprache – Sie definieren Regeln, indem Sie Gruppen von Styles angeben, die auf ein bestimmtes Element oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Beispielsweise könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreichen würde:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel öffnet sich die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir stylen werden. In diesem Fall stylen wir Überschriften der Stufe eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann fügen wir eine Menge geschweifter Klammern ein – `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die die Form von **Eigenschafts**- und **Wert**-Paaren haben. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` ist der Wert, der für die Eigenschaft `color` festgelegt wird).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die Eigenschaft `color`, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die Eigenschaft `font-size`, die verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen kann.

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

Sie werden feststellen, dass Sie schnell einige Werte lernen werden, während andere Sie nachschlagen müssen. Die individuellen Eigenschaftsseiten auf MDN geben Ihnen eine schnelle Möglichkeit, Eigenschaften und deren Werte nachzuschlagen.

> [!NOTE]
> Sie können Links zu allen CSS-Eigenschaftsseiten (neben anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie sich daran gewöhnen, in Ihrer bevorzugten Suchmaschine nach "mdn _css-funktion-name_" zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Beispielsweise versuchen Sie, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, erhält der Browser beim Navigieren zu einer Webseite zunächst das HTML-Dokument, das den Webseiteninhalt enthält, und konvertiert es in einen **DOM-Baum**.

Danach werden alle in der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt, oder in referenzierten externen `.css`-Dateien) in verschiedene "Eimer" sortiert, basierend auf den unterschiedlichen Elementen, auf die sie angewendet werden (wie von ihren Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was in einem **Renderbaum** resultiert, der dann im Browserfenster gezeichnet wird.

Schauen wir uns ein Beispiel an. Zuerst definieren wir ein HTML-Snippet, auf das das CSS angewendet werden könnte:

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

Jetzt unser CSS, wiederholt aus dem vorherigen Abschnitt:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt deren Text rot und macht sie größer als ihre Standardgröße. Da es in unserem Beispiel-HTML nur ein `<h1>` gibt, wird nur dieses Element das Styling erhalten.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe und etwas Abstand um den Text herum. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

## Spielen Sie mit etwas CSS

Versuchen Sie, mit dem obigen Beispiel zu experimentieren. Um dies zu tun, drücken Sie die "Play"-Schaltfläche in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden.

Tun Sie Folgendes:

1. Fügen Sie einen weiteren Absatz Text unterhalb der beiden vorhandenen hinzu, und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie eine `<h2>`-Unterüberschrift irgendwo unterhalb der `<h1>` hinzu, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2`, und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und -Werte in der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie zu Ihren Regeln hinzuzufügen!

Für zusätzliche Übungen zu den CSS-Grundlagen, sehen Sie sich [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba an <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Diese Übung gibt einen nützlichen Überblick über die grundlegende CSS-Syntax und bietet eine interaktive Herausforderung, bei der Sie etwas mehr Übung im Schreiben von CSS-Deklarationen erhalten.

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns weitermachen, um Ihnen etwas Übung im Schreiben von CSS selbst zu geben und die Syntax detaillierter zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
