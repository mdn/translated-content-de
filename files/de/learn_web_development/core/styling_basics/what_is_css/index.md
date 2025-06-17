---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert es unter der Haube? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.

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
          >Arbeiten mit Dateien</a
        > und Vertrautheit mit HTML (studieren Sie das
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
          <li>Das Konzept der Standard-Browserstile.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standard-Browserstile

Im Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es verwendet wird, um Dokumente zu markieren. Diese Dokumente werden in einem Webbrowser lesbar sein. Überschriften sehen größer aus als normaler Text, Absätze brechen in eine neue Zeile um und haben Abstand zwischen ihnen. Links sind farbig und unterstrichen, um sie vom Rest des Textes zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegendes Styling, das der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, selbst wenn der Autor der Seite kein explizites Styling angegeben hat. Diese Stile sind in den Standard-CSS-Stylesheets enthalten, die im Browser enthalten sind — sie haben nichts mit HTML zu tun.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussähen. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente Ihren Benutzern mit dem gewünschten Design und Layout präsentieren.

- Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, meistens {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und spezifiziert deren Struktur.
- Ein Dokument einem Benutzer **präsentieren** bedeutet, es in eine für das Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind dafür ausgelegt, Dokumente visuell zu präsentieren, zum Beispiel auf einem Computerbildschirm, Projektor, Mobilgerät oder Drucker. Im Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses bereitgestellt, durch den eine Webseite im Artikel [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke in Bezug auf das Aussehen und Gefühl Ihrer Webseite verwendet werden, zum Beispiel:

- Textstyling, einschließlich der Änderung der [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links.
- Erstellen von Layouts, wie zum Beispiel [Rasterlayouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [mehrspaltigen Layouts](/de/docs/Web/CSS/Layout_cookbook/Column_layouts).
- Besondere Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die zusammengehörige Funktionalitäten enthalten. Sehen Sie sich zum Beispiel die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, was deren Zweck ist und welche Eigenschaften und Funktionen es enthält. Auf unseren Modul-Seiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlagen der CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie beschließen, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu stylen. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel öffnet die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir stylen werden. In diesem Fall stylen wir Level-1-Überschriften (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann fügen wir ein Paar geschwungene Klammern — `{ }` — hinzu.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die in Form von **Eigenschafts**- und **Wert**paaren auftreten. Wir geben die Eigenschaft an (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an, und wir geben den Wert der Eigenschaft nach dem Doppelpunkt an (`red` ist der Wert, der für die `color`-Eigenschaft festgelegt wird).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine andere für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft, diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stylesheet enthält viele solche Regeln, die nacheinander geschrieben werden.

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

Sie werden feststellen, dass Sie einige Werte schnell erlernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie können Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie sich daran gewöhnen, "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie weitere Informationen über eine CSS-Funktion benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie im Artikel [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, empfängt der Browser beim Navigieren zu einer Webseite zuerst das HTML-Dokument, das den Webseiteninhalt enthält, und konvertiert es in einen **DOM-Baum**.

Danach werden alle in der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien) in verschiedene "Eimer" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden sollen (wie in ihren Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Renderbaum** führt, der dann im Browserfenster gezeichnet wird.

Lassen Sie uns ein Beispiel betrachten. Zuerst definieren wir ein HTML-Snippet, auf das das CSS angewendet werden könnte:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt deren Text rot und macht sie größer als ihre Standardgröße. Da es nur ein `<h1>` in unserem Beispiel-HTML gibt, bekommt nur dieses Element das Styling.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe und etwas Abstand um den Text. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('Wie wird CSS auf HTML angewendet?', '100%', 200)}}

## Spielen Sie mit etwas CSS

Versuchen Sie, mit dem obigen Beispiel zu spielen. Drücken Sie dazu die Schaltfläche "Play" in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden.

Tun Sie Folgendes:

1. Fügen Sie einen weiteren Absatz von Text unterhalb der beiden vorhandenen hinzu und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie eine `<h2>`-Zwischenüberschrift irgendwo unterhalb der `<h1>` ein, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2` und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und Werte in der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie Ihren Regeln hinzuzufügen!

Für zusätzliche Übung mit den Grundlagen von CSS, siehe [Schreiben Sie Ihre ersten Zeilen von CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieser Scrim bietet einen nützlichen Überblick über die grundlegende CSS-Syntax und bietet eine interaktive Herausforderung, bei der Sie etwas mehr Übung im Schreiben von CSS-Deklarationen erhalten können.

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns weitermachen, Ihnen etwas Übung im Schreiben von CSS zu geben und die Syntax im Detail zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
