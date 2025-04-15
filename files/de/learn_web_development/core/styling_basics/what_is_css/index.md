---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht Ihnen, ansprechende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die Grundsyntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.

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
        >, und HTML-Vertrautheit (studieren Sie das
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
          <li>Das Konzept von Standard-Browser-Stilen.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standard-Browser-Stile

Im Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zum Markieren von Dokumenten verwendet wird. Diese Dokumente sind in einem Webbrowser lesbar. Überschriften werden größer als normaler Text dargestellt, Absätze beginnen auf einer neuen Zeile und haben Abstand zwischen ihnen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Stile, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite im Grunde lesbar ist, selbst wenn vom Autor der Seite kein explizites Styling angegeben ist. Diese Stile sind in Standard-CSS-Stylesheets enthalten, die im Browser enthalten sind — sie haben nichts mit HTML zu tun.

![Die Standardstile, die ein Browser verwendet](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Webseiten so aussehen würden. Deshalb müssen Sie mehr über CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente Ihren Benutzern mit dem Design und Layout präsentieren, das Sie möchten.

- Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist, am häufigsten {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente treffen, die in anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und gibt ihre Struktur an.
- Das **Präsentieren** eines Dokuments für einen Benutzer bedeutet, es in eine für Ihr Publikum verwendbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell zu präsentieren, beispielsweise auf einem Computerbildschirm, Projektor, Mobilgerät oder Drucker. Im Web-Kontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses, wie eine Webseite gerendert wird, in [How browsers load websites](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) bereitgestellt.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "User-Agent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für viele Zwecke verwendet werden, die mit dem Aussehen Ihrer Webseite zusammenhängen. Die wichtigsten sind:

- Textstil, beispielsweise zum Ändern der [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links.
- Erstellung von Layouts, beispielsweise [wandeln einer einzigen Textspalte in ein Mehrspalten-Layout um](/de/docs/Web/CSS/Layout_cookbook/Column_layouts).
- Spezialeffekte wie [Animation](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die zusammengehörige Funktionalitäten enthalten. Beispielsweise schauen Sie sich die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, wofür es gedacht ist und welche Eigenschaften und Funktionen es enthält. In diesem Modul finden Sie auch einen Link zu _Spezifikationen_, die die Technologie definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel könnten Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu stylen. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreichen würde:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir stylen werden. In diesem Fall stylen wir Ebene-1-Überschriften (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann haben wir ein Paar geschweifte Klammern — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die die Form von **Eigenschafts-** und **Wertepaaren** annehmen. Wir geben die Eigenschaft (zum Beispiel `Farbe="color"` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`rot="red"` ist der festgelegte Wert für die `Farbe="color"`-Eigenschaft).
- Dieses Beispiel enthält zwei Deklarationen, eine für `Farbe="color"` und eine andere für `Schriftgröße="font-size"`.

Unterschiedliche CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die `Farbe="color"`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `Schriftgröße="font-size"`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

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

Sie werden feststellen, dass Sie schnell einige Werte lernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie können Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie sich daran gewöhnen, nach "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über eine CSS-Funktion benötigen. Versuchen Sie beispielsweise, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie in [How browsers load websites](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, erhält der Browser beim Navigieren zu einer Webseite zuerst das HTML-Dokument, das den Inhalt der Webseite enthält, und konvertiert es in einen **DOM-Baum**.

Danach werden alle auf der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in referenzierten externen `.css`-Dateien) in verschiedene "Buckets" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Render-Baum** führt, der anschließend im Browserfenster gemalt wird.

Sehen wir uns ein Beispiel an. Zuerst definieren wir ein HTML-Snippet, auf das CSS angewendet werden könnte:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt ihren Text rot und macht sie größer als ihre Standardgröße. Da in unserem Beispiel-HTML nur ein `<h1>` vorhanden ist, wird nur dieses Element gestylt.
- Wählt alle `<p>`-Elemente auf der Seite aus, gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe und etwas Abstand um den Text herum. In unserem Beispiel-HTML gibt es zwei `<p>`-Elemente, und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, sieht die gerenderte Ausgabe wie folgt aus:

{{EmbedLiveSample('Wie wird CSS auf HTML angewendet?', '100%', 200)}}

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, mit dem obigen Beispiel zu spielen. Drücken Sie dazu die "Play"-Taste in der oberen rechten Ecke, um es in unserem Playground-Editor zu laden. Versuchen Sie folgendes:
>
> 1. Fügen Sie einen weiteren Textabsatz unterhalb der beiden vorhandenen hinzu, und beachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
> 2. Fügen Sie eine `<h2>`-Zwischenüberschrift irgendwo unterhalb des `<h1>` ein, vielleicht nach einem der Absätze. Versuchen Sie, ihm eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor in `h2` und ändern Sie den `color`-Wert von `red` in `purple`, zum Beispiel.
> 3. Wenn Sie abenteuerlustig sind, versuchen Sie, einige neue CSS-Eigenschaften und Werte in der MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie Ihren Regeln hinzuzufügen!

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis davon haben, was CSS ist und wie es funktioniert, gehen wir weiter dazu über Ihnen etwas Übung im Schreiben von CSS zu geben und die Syntax detaillierter zu erklären.

## Siehe auch

- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese Bildschirmpräsentation gibt einen nützlichen Überblick über die grundlegende CSS-Syntax und bietet eine interaktive Herausforderung, bei der Sie mehr Übung im Schreiben von CSS-Deklarationen bekommen können.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
