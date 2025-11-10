---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
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
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        > und HTML-Vertrautheit (studieren Sie das
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Modul zur Strukturierung von Inhalten mit HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von CSS.</li>
          <li>Dass HTML nichts mit Styling zu tun hat.</li>
          <li>Das Konzept der Standardstile eines Browsers.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standardstile des Browsers

Im Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zur Markierung von Dokumenten verwendet wird. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften erscheinen größer als normaler Text, Absätze brechen in eine neue Zeile um und haben Abstand dazwischen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Stile, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite lesbar ist, auch wenn kein explizites Styling vom Seitenautor angegeben wird. Diese Stile sind in standardmäßigen CSS-Stylesheets im Browser definiert – sie haben nichts mit HTML zu tun.

![Die von einem Browser verwendeten Standardstile](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussähen. Deshalb müssen Sie CSS lernen.

## Wozu dient CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen und Ihre Dokumente mit jedem gewünschten Design und Layout Ihren Nutzern präsentieren.

- Ein **Dokument** ist üblicherweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Ein HTML-Dokument enthält den Inhalt einer Webseite und spezifiziert deren Struktur.
- Ein Dokument einem Benutzer **präsentieren** bedeutet, es in eine vom Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind so konzipiert, dass sie Dokumente visuell präsentieren, zum Beispiel auf einem Computerbildschirm, Projektor, mobilen Gerät oder Drucker. Im Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses gegeben, durch den eine Webseite im Artikel [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke im Zusammenhang mit dem Aussehen und der Benutzererfahrung Ihrer Webseite verwendet werden, zum Beispiel:

- Textgestaltung, einschließlich Änderung der [Farbe](/de/docs/Web/CSS/Reference/Values/color_value) und [Größe](/de/docs/Web/CSS/Reference/Properties/font-size) von Überschriften und Links.
- Erstellung von Layouts, wie [Grid-Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Grids) oder [mehrspaltige Layouts](/de/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts).
- Spezielle Effekte wie [Animationen](/de/docs/Web/CSS/Guides/Animations).

Die CSS-Sprache ist in _Module_ organisiert, die zusammenhängende Funktionalität enthalten. Schauen Sie sich beispielsweise die MDN-Referenzseiten zum [Hintergrund- und Rand-Modul](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) an, um herauszufinden, wozu es dient und welche Eigenschaften und Funktionen es enthält. Auf unseren Modulseiten finden Sie auch Links zu _Spezifikationen_, die die Technologien definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen spezifizieren, die auf bestimmte Elemente oder Elementgruppen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreichen würde:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir gestalten werden. In diesem Fall gestalten wir Überschriften der Ebene eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann schließen wir eine Menge geschweifte Klammern ein — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die in Form von **Eigenschaft**- und **Wert**-Paaren vorliegen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` ist der Wert, der für die `color`-Eigenschaft gesetzt wird).
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

Sie werden feststellen, dass Sie einige Werte schnell lernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN geben Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie können Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie sich daran gewöhnen, nach "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie im Artikel [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, empfängt der Browser zuerst das HTML-Dokument, das den Inhalt der Webseite enthält, und konvertiert es in einen **DOM-Baum**.

Danach werden alle CSS-Regeln, die in der Webseite gefunden werden (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien), in verschiedene "Buckets" einsortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden sollen (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Renderbaum** führt, der dann im Browserfenster gezeichnet wird.

Schauen wir uns ein Beispiel an. Zuerst definieren wir einen HTML-Ausschnitt, auf den das CSS angewendet werden könnte:

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

Unser CSS, wiederholt aus dem vorherigen Abschnitt:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt ihren Text rot und macht sie größer als ihre Standardgröße. Da es in unserem Beispiel-HTML nur ein `<h1>` gibt, wird nur dieses Element das Styling erhalten.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe und etwas Abstand um den Text herum. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

## Spielen Sie mit etwas CSS

Versuchen Sie, mit dem obigen Beispiel zu spielen. Um dies zu tun, drücken Sie die "Play"-Schaltfläche in der oberen rechten Ecke, um es in unserem MDN Playground-Editor zu laden.

Tun Sie Folgendes:

1. Fügen Sie einen weiteren Textabsatz unter den beiden vorhandenen hinzu und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
2. Fügen Sie irgendwo unterhalb des `<h1>` eine `<h2>`-Unterüberschrift hinzu, vielleicht nach einem der Absätze.
3. Versuchen Sie, den `<h2>`-Elementen eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor in `h2` und ändern Sie den `color`-Wert von `red` in `purple`, zum Beispiel.
4. Wenn Sie sich abenteuerlustig fühlen, versuchen Sie, einige neue CSS-Eigenschaften und -Werte in der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, die Sie zu Ihren Regeln hinzufügen können!

Für zusätzliche Übung mit den Grundlagen von CSS siehe [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieses Scrim bietet einen nützlichen Überblick über die grundlegende CSS-Syntax und stellt eine interaktive Herausforderung bereit, bei der Sie mehr Übung im Schreiben von CSS-Deklarationen erhalten können.

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis davon haben, was CSS ist und wie es funktioniert, lassen Sie uns damit fortfahren, Ihnen einige Übungen zum Schreiben von CSS zu geben und die Syntax im Detail zu erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
