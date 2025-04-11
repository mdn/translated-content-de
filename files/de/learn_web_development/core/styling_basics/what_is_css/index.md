---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) erlaubt es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert es intern? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse über
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >den Umgang mit Dateien</a
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
          <li>Dass HTML nichts mit Styling zu tun hat.</li>
          <li>Das Konzept der Standardbrowserstile.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standardbrowserstile

Im Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir besprochen, was HTML ist und wie es verwendet wird, um Dokumente zu markieren. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften sehen größer aus als normaler Text, Absätze brechen in eine neue Zeile und haben Abstand zwischen ihnen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Gestaltung, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite im Wesentlichen lesbar ist, selbst wenn kein explizites Styling vom Autor der Seite angegeben ist. Diese Stile sind in den standardmäßigen CSS-Stylesheets enthalten, die der Browser enthält — sie haben nichts mit HTML zu tun.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Webseiten so aussähen. Deshalb müssen Sie über CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen und Ihre Dokumente Ihren Benutzern mit jedem gewünschten Design und Layout präsentieren.

- Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie könnten auch auf Dokumente stoßen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und bestimmt ihre Struktur.
- **Präsentieren** eines Dokuments für einen Benutzer bedeutet, es in eine für Ihr Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell darzustellen, z. B. auf einem Computerbildschirm, Projektor, mobilen Gerät oder Drucker. Im Web-Kontext wird dies im Allgemeinen als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses gegeben, durch den eine Webseite im Artikel [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzer-Agent")}} bezeichnet, was im Grunde bedeutet, dass es ein Computerprogramm ist, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke im Zusammenhang mit dem Look und Feel Ihrer Webseite verwendet werden. Die wichtigsten sind:

- Textgestaltung, zum Beispiel um die [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links zu ändern.
- Erstellen von Layouts, zum Beispiel, um [eine einzelne Textspalte in ein Mehrspaltenlayout zu verwandeln](/de/docs/Web/CSS/Layout_cookbook/Column_layouts).
- Spezielle Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die verwandte Funktionen enthalten. Zum Beispiel werfen Sie einen Blick auf die MDN-Referenzseiten für das [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul, um herauszufinden, was sein Zweck ist und welche Eigenschaften und Merkmale es enthält. In diesem Modul finden Sie auch einen Link zu _Spezifikationen_, die die Technologie definieren.

## Grundlagen der CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel öffnet die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir stylen werden. In diesem Fall stylen wir Überschriften der Ebene eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Danach sehen wir eine Gruppe von geschweiften Klammern — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die in Form von **Eigenschafts-** und **Wertpaaren** vorliegen. Wir geben die Eigenschaft an (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt, und wir geben den Wert der Eigenschaft nach dem Doppelpunkt an (`red` ist der Wert, der für die `color`-Eigenschaft festgelegt wird).
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
> Sie können Links zu allen CSS-Eigenschaftsseiten (neben anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie daran gewöhnt sein, nach "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Versuchen Sie beispielsweise, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [Wie Browser Websites laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, wenn Sie zu einer Webseite navigieren, empfängt der Browser zuerst das HTML-Dokument mit dem Inhalt der Webseite und konvertiert es in eine **DOM-Struktur**.

Danach werden alle auf der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in referenzierten externen `.css` Dateien) in verschiedene „Buckets“ sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf die DOM-Struktur angewendet, was zu einer **Render-Struktur** führt, die dann im Browserfenster gezeichnet wird.

Werfen wir einen Blick auf ein Beispiel. Zuerst definieren wir ein HTML-Snippet, auf das das CSS angewendet werden könnte:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt ihren Text rot und macht sie größer als ihre Standardgröße. Da es nur ein `<h1>` in unserem Beispiel-HTML gibt, wird nur dieses Element die Gestaltung erhalten.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe und etwas Abstand um den Text herum. Es gibt zwei `<p>`-Elemente in unserem Beispiel-HTML, und sie alle bekommen die Gestaltung.

Wenn das CSS auf das HTML angewendet wird, ist die gerenderte Ausgabe wie folgt:

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, mit dem obigen Beispiel zu spielen. Drücken Sie dazu die „Play“-Schaltfläche in der oberen rechten Ecke, um es in unserem Playground-Editor zu laden. Versuchen Sie Folgendes:
>
> 1. Fügen Sie einen weiteren Absatz unterhalb der beiden vorhandenen hinzu und achten Sie darauf, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
> 2. Fügen Sie eine `<h2>`-Zwischenüberschrift an einer Stelle unterhalb des `<h1>` ein, möglicherweise nach einem der Absätze. Versuchen Sie, ihm eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor zu `h2` und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
> 3. Wenn Sie abenteuerlustig sind, versuchen Sie, einige neue CSS-Eigenschaften und Werte im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen und zu Ihren Regeln hinzuzufügen!

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns weitermachen und Ihnen etwas Übung im Schreiben von CSS geben und die Syntax im Detail erklären.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
