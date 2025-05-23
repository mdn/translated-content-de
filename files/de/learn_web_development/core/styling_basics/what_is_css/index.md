---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht Ihnen die Erstellung attraktiv aussehender Webseiten, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.

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
        > und Vertrautheit mit HTML (studieren Sie das
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Modul zur Strukturierung von Inhalten mit HTML</a
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

Im Modul [Inhalte strukturieren mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zur Auszeichnung von Dokumenten verwendet wird. Diese Dokumente können in einem Webbrowser gelesen werden. Überschriften sehen größer aus als normaler Text, Absätze brechen auf eine neue Zeile um und haben Zwischenräume. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standard-Browserstile — sehr grundlegende Stile, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite grundsätzlich lesbar bleibt, auch wenn kein explizites Styling vom Autor der Seite festgelegt wurde. Diese Stile sind in Standard-CSS-Stilblättern definiert, die im Browser enthalten sind — sie haben nichts mit HTML zu tun.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Webseiten so aussähen. Deshalb müssen Sie über CSS lernen.

## Wofür ist CSS da?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen und Ihre Dokumente nach Belieben designen und layouten.

- Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Markup-Sprache strukturiert ist, am häufigsten mit {{Glossary("HTML", "HTML")}} (diese werden als _HTML-Dokumente_ bezeichnet). Sie können auch auf Dokumente stoßen, die in anderen Markup-Sprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} geschrieben sind. Während wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt einer Webseite und legt deren Struktur fest.
- **Darstellung** eines Dokuments gegenüber einem Benutzer bedeutet, es in eine für das Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} und {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell zu präsentieren, zum Beispiel auf einem Computerbildschirm, Projektor, mobilen Gerät oder Drucker. In einem Webkontext wird dies allgemein als _Rendering_ bezeichnet; wir haben eine vereinfachte Beschreibung des Prozesses bereitgestellt, durch den eine Webseite im Artikel [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) gerendert wird.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "User Agent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person in einem Computersystem repräsentiert.

CSS kann für viele Zwecke verwendet werden, die mit dem Aussehen und der Gestaltung Ihrer Webseite zusammenhängen. Die wichtigsten sind:

- Textgestaltung, zum Beispiel zum Ändern der [Farbe](/de/docs/Web/CSS/color_value) und der [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links.
- Erstellen von Layouts, zum Beispiel indem ein einzelner Textspaltenlayout in ein Mehrspaltenlayout umgewandelt wird ([Hinzufügen über CSS Cookbook: Column Layouts](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)).
- Besondere Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations).

Die CSS-Sprache ist in _Module_ organisiert, die verwandte Funktionalität enthalten. Schauen Sie sich zum Beispiel die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, was dessen Zweck ist und welche Eigenschaften und Funktionen es enthält. In diesem Modul finden Sie auch einen Link zu den _Spezifikationen_, die die Technologie definieren.

## Grundlagen der CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Beispielsweise könnten Sie entscheiden, dass die Hauptüberschrift auf Ihrer Seite als großer roter Text gestaltet werden soll. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies bewirken würde:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ die HTML-Elemente aus, die wir stylen werden. In diesem Fall stylen wir Überschriften der Ebene eins (`{{htmlelement("Heading_Elements", "<h1>")}}`).
- Dann haben wir eine Menge geschweifter Klammern — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die in Form von **Eigenschaften-** und **Werte-Paaren** vorliegen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an und spezifizieren den Wert der Eigenschaft nach dem Doppelpunkt (`red` ist der Wert, der für die Eigenschaft `color` festgelegt wird).
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

Sie werden feststellen, dass Sie sich schnell einige Werte merken, während Sie andere nachschlagen müssen. Die individuellen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (neben anderen CSS-Features) im MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie sich daran gewöhnen, nach "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über ein CSS-Feature benötigen. Versuchen Sie zum Beispiel, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wie im Artikel [Wie Browser Webseiten laden](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) erklärt, erhält der Browser beim Navigieren zu einer Webseite zuerst das HTML-Dokument, das den Inhalt der Webseite enthält, und wandelt es in einen **DOM-Baum** um.

Danach werden alle in der Webseite gefundenen CSS-Regeln (entweder direkt im HTML eingefügt oder in verknüpfter externer `.css`-Dateien) in verschiedene "Behälter" sortiert, basierend auf den verschiedenen Elementen, auf die sie angewendet werden (wie durch ihre Selektoren angegeben). Die CSS-Regeln werden dann auf den DOM-Baum angewendet, was zu einem **Renderbaum** führt, der dann im Browserfenster gerendert wird.

Lassen Sie uns ein Beispiel ansehen. Zunächst definieren wir einen HTML-Ausschnitt, auf den das CSS angewendet werden könnte:

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

- Wählt alle `<h1>`-Elemente auf der Seite aus, färbt ihren Text rot und macht sie größer als ihre Standardgröße. Da es in unserem Beispiel-HTML nur ein `<h1>` gibt, wird nur dieses Element das Styling erhalten.
- Wählt alle `<p>`-Elemente auf der Seite aus und gibt ihnen eine benutzerdefinierte Text- und Hintergrundfarbe sowie einigen Abstand um den Text. In unserem Beispiel-HTML gibt es zwei `<p>`-Elemente und beide erhalten das Styling.

Wenn das CSS auf das HTML angewendet wird, ist die gerenderte Ausgabe wie folgt:

{{EmbedLiveSample('Wie wird CSS auf HTML angewendet?', '100%', 200)}}

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, mit dem obigen Beispiel zu spielen. Drücken Sie dazu die "Play"-Taste in der oberen rechten Ecke, um es in unserem Playground-Editor zu laden. Versuchen Sie Folgendes:
>
> 1. Fügen Sie einen weiteren Absatz Text unter den beiden vorhandenen hinzu und beobachten Sie, wie die zweite CSS-Regel automatisch auf den neuen Absatz angewendet wird.
> 2. Fügen Sie eine `<h2>`-Zwischenüberschrift irgendwo unter dem `<h1>` hinzu, möglicherweise nach einem der Absätze. Versuchen Sie, ihr eine andere Farbe zu geben, indem Sie eine neue Regel zum CSS hinzufügen. Machen Sie eine Kopie der `h1`-Regel, ändern Sie den Selektor in `h2` und ändern Sie den `color`-Wert von `red` zu `purple`, zum Beispiel.
> 3. Wenn Sie abenteuerlustig sind, versuchen Sie, einige neue CSS-Eigenschaften und Werte in der MDN-[CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen, um sie Ihren Regeln hinzuzufügen!
>
> Für zusätzliche Übungen zu den CSS-Grundlagen siehe [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) von Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Dieses Scrim bietet einen nützlichen Überblick über die grundlegende CSS-Syntax und stellt eine interaktive Herausforderung bereit, bei der Sie sich weiter mit dem Schreiben von CSS-Deklarationen beschäftigen können.

## Zusammenfassung

Jetzt, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns dazu übergehen, Ihnen einige Übungen zu geben, damit Sie selbst CSS schreiben und die Syntax genauer erklären können.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
