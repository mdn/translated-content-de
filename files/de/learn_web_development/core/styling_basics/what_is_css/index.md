---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht das Erstellen von ansprechend aussehenden Webseiten, aber wie funktioniert es hinter den Kulissen? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

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

Im Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es verwendet wird, um Dokumente zu kennzeichnen. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften wirken größer als normaler Text, Absätze werden in einer neuen Zeile gebrochen und haben einen Abstand zwischen ihnen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Formatierungen, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, selbst wenn der Autor der Seite keine explizite Formatierung angibt. Diese Stile sind in Standard-CSS-Stylesheets definiert, die im Browser enthalten sind — sie haben nichts mit HTML zu tun.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussehen würden. Deshalb müssen Sie CSS kennenlernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, indem Sie Ihre Dokumente so gestalten und gestalten, wie Sie es möchten.

- Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und legt deren Struktur fest.
- Ein **Dokument präsentieren** bedeutet, es in eine für Ihr Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell darzustellen, beispielsweise auf einem Computerbildschirm, Projektor, mobilen Gerät oder Drucker. In einem Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses bereitgestellt, durch den eine Webseite in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "User Agent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke in Bezug auf das Aussehen Ihrer Webseite verwendet werden, beispielsweise:

- Textgestaltung, einschließlich Farbänderung ([color](/de/docs/Web/CSS/color_value)) und Größe ([size](/de/docs/Web/CSS/font-size)) von Überschriften und Links.
- Layouts erstellen, wie z. B. [Gitternetzlayouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [mehrspaltige Layouts](/de/docs/Web/CSS/Layout_cookbook/Column_layouts).
- Spezialeffekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die verwandte Funktionen enthalten. Werfen Sie zum Beispiel einen Blick auf die MDN-Referenzseiten für das [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul, um herauszufinden, was dessen Zweck ist und welche Eigenschaften und Funktionen es enthält. In unseren Modulseiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie sich entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel öffnet die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir gestalten werden. In diesem Fall gestalten wir Überschriften der Ebene eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Wir fügen dann eine Gruppe von geschweiften Klammern hinzu — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die in Form von **Eigenschafts-** und **Wertpaaren** vorliegen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` ist der für die Eigenschaft `color` festgelegte Wert).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die Eigenschaft `color`, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die Eigenschaft `font-size`, die verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen kann.

Ein CSS-Stylesheet enthält viele solcher Regeln, die nacheinander geschrieben sind.

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

Sie werden feststellen, dass Sie schnell einige Werte lernen, während Sie andere nachschlagen müssen. Die individuellen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie können Links zu allen CSS-Eigenschaftsseiten (neben anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie sich daran gewöhnen, "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie weitere Informationen über eine CSS-Funktion benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, wenn Sie zu einer Webseite navigieren, empfängt der Browser zunächst das HTML-Dokument, das den Webseitinhalt enthält, und konvertiert es in ein **DOM-Baum**.

Danach werden alle in der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien) in verschiedene "Eimer" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Renderbaum** führt, der dann im Browserfenster dargestellt wird.

Sehen wir uns ein Beispiel an. Zuerst definieren wir ein HTML-Snippet, auf das das CSS angewendet werden könnte:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt ihren Text rot und vergrößert sie über ihre Standardgröße hinaus. Da es nur ein `<h1>` in unserem Beispiel-HTML gibt, wird nur dieses Element das Styling erhalten.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe sowie etwas Abstand um den Text. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, ist die gerenderte Ausgabe wie folgt:

{{EmbedLiveSample('Wie wird CSS auf HTML angewendet?', '100%', 200)}}

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Probieren Sie das obige Beispiel aus. Um dies zu tun, drücken Sie die "Play"-Taste in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden. Versuchen Sie Folgendes:
>
> 1. Fügen Sie einen weiteren Absatz von Text unterhalb der beiden vorhandenen hinzu und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
> 2. Fügen Sie eine `<h2>`-Unterüberschrift irgendwo unterhalb der `<h1>` hinzu, vielleicht nach einem der Absätze. Versuchen Sie, ihr eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2` und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
> 3. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und -Werte in der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie Ihren Regeln hinzuzufügen!
>
> Für zusätzliche Übungen zu den CSS-Grundlagen, siehe [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieses Scrim bietet einen nützlichen Überblick über die grundlegende CSS-Syntax und enthält eine interaktive Herausforderung, bei der Sie mehr Übung im Schreiben von CSS-Deklarationen erhalten.

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns weitermachen und Ihnen etwas Übung im Schreiben von CSS geben und die Syntax genauer erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
