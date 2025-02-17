---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 90e419a0ec9741f35bc564beb90e74210bc4c97a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechende Webseiten zu erstellen, aber wie funktioniert es technisch? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um dieses zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Arbeiten mit Dateien</a
        > und Vertrautheit mit HTML (studieren Sie das
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Modul "Inhalte mit HTML strukturieren"</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Den Zweck von CSS.</li>
          <li>Dass HTML nichts mit Styling zu tun hat.</li>
          <li>Das Konzept von Standard-Browser-Stilen.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standardstile von Browsern

Im Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) haben wir darüber gesprochen, was HTML ist und wie es genutzt wird, um Dokumente zu markieren. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften erscheinen größer als regulärer Text, Absätze brechen in eine neue Zeile um und haben Abstände dazwischen. Links sind farbig und unterstrichen, um sie vom übrigen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegendes Styling, das der Browser auf HTML anwendet, um sicherzustellen, dass die Seite grundsätzlich lesbar ist, auch wenn vom Seitenautor kein explizites Styling angegeben wurde. Diese Stile sind in Standard-CSS-Stylesheets definiert, die im Browser integriert sind – sie haben nichts mit HTML zu tun.

![Die von einem Browser verwendeten Standardstile](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussähen. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau kontrollieren, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente mit beliebigem Design und Layout Ihren Nutzern präsentieren.

- Ein **Dokument** ist üblicherweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese nennt man _HTML-Dokumente_). Sie könnten auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Während wir zuvor von Webseiten gesprochen haben, enthält ein HTML-Dokument die Inhalte der Webseite und spezifiziert deren Struktur.
- **Präsentation** eines Dokuments für einen Nutzer bedeutet, es in eine Form umzuwandeln, die von Ihrer Zielgruppe nutzbar ist. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind so gestaltet, dass sie Dokumente visuell präsentieren, z. B. auf einem Computerbildschirm, Projektor, Mobilgerät oder Drucker. Im Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses, wie eine Webseite gerendert wird, in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) bereitgestellt.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Wesentlichen ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke verwendet werden, die das Aussehen und Verhalten Ihrer Webseite betreffen. Die wichtigsten sind:

- Text-Styling, zum Beispiel, um die [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links zu ändern.
- Erstellung von Layouts, zum Beispiel, indem Sie aus einer einzigen Textspalte ein [mehrspaltiges Layout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) machen.
- Spezialeffekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die verwandte Funktionalitäten enthalten. Sehen Sie sich beispielsweise die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, welchen Zweck es hat und welche Eigenschaften und Funktionen es enthält. In diesem Modul finden Sie ebenfalls einen Link zu _Spezifikationen_, die die Technologie definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache – Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Sie könnten beispielsweise entscheiden, die Hauptüberschrift Ihrer Seite als großen roten Text zu stylen. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selector")}}. Dieser _selektiert_ die HTML-Elemente, die wir stylen möchten. In diesem Fall stylen wir Überschriften der Ebene 1 (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Danach folgen geschweifte Klammern — `{ }`.
- Innerhalb der Klammern stehen eine oder mehrere **Deklarationen**, die aus **Eigenschafts**- und **Werte**paaren bestehen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` wird hier zum Beispiel als Wert für die Eigenschaft `color` gesetzt).
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

Sie werden feststellen, dass Sie sich schnell einige Werte merken, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und deren Werte nachzuschlagen.

> [!NOTE]
> Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) finden Sie in der MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie sich daran gewöhnen, nach "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Zum Beispiel versuchen Sie, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, erhält der Browser, wenn Sie eine Webseite aufrufen, zuerst das HTML-Dokument, welches den Inhalt der Webseite enthält, und konvertiert es in einen **DOM-Baum**.

Danach werden alle CSS-Regeln, die in der Webseite gefunden werden (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien), in verschiedene "Buckets" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden sollen (wie durch ihre Selektoren festgelegt). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Render-Baum** führt, der dann im Browserfenster dargestellt wird.

Lassen Sie uns ein Beispiel betrachten. Zuerst definieren wir einen HTML-Ausschnitt, auf den die CSS-Regeln angewendet werden können:

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

- Selektiert alle `<h1>`-Elemente auf der Seite und färbt deren Text rot und macht ihn größer als die Standardgröße. Da es in unserem Beispiel-HTML nur ein `<h1>` gibt, wird nur dieses Element das Styling erhalten.
- Selektiert alle `<p>`-Elemente auf der Seite und gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe sowie Abstände um den Text. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Probieren Sie, mit dem obigen Beispiel zu spielen. Drücken Sie dazu auf die Schaltfläche "Play" in der rechten oberen Ecke, um es in unserem Playground-Editor zu laden. Versuchen Sie Folgendes:
>
> 1. Fügen Sie unter den beiden bestehenden Absätzen einen weiteren Absatz mit Text hinzu, und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
> 2. Fügen Sie eine `<h2>`-Unterüberschrift irgendwo unterhalb der `<h1>` hinzu, vielleicht nach einem der Absätze. Geben Sie ihr eine andere Farbe, indem Sie eine neue Regel zur CSS hinzufügen. Kopieren Sie die Regel des `h1`, ändern Sie den Selektor in `h2` und ändern Sie den Wert der `color`-Eigenschaft von `red` zu `purple`, zum Beispiel.
> 3. Wenn Sie mutig sind, versuchen Sie, einige neue CSS-Eigenschaften und Werte in der MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie zu Ihren Regeln hinzuzufügen!

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, fahren wir mit praktischen Übungen im Schreiben von CSS fort und erklären die Syntax im Detail.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
