---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, optisch ansprechende Webseiten zu gestalten. Doch wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

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
        >, und Vertrautheit mit HTML (studieren Sie das
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Modul zum Strukturieren von Inhalten mit HTML</a
        >.)
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

## Standardstile des Browsers

Im Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es verwendet wird, um Dokumente zu markieren. Diese Dokumente werden in einem Webbrowser lesbar sein. Überschriften erscheinen größer als normaler Text, Absätze brechen in eine neue Zeile um und haben Abstand zueinander. Links sind farbig und unterstrichen, um sie vom restlichen Text abzuheben.

Was Sie sehen, sind die Standardstile des Browsers – sehr grundlegende Stile, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite im Grunde lesbar ist, auch wenn keinerlei explizite Gestaltung vom Autor der Seite angegeben wurde. Diese Stile sind in den Standard-CSS-Stylesheets enthalten, die sich im Browser befinden – sie haben nichts mit HTML zu tun.

![Die Standardstile, die ein Browser verwendet](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussähen. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen und Ihre Dokumente den Benutzern in dem von Ihnen gewünschten Design und Layout präsentieren.

Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Markup-Sprache strukturiert ist – {{Glossary("HTML", "HTML")}} ist die gebräuchlichste Markup-Sprache, aber Sie können auch auf andere Markup-Sprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} stoßen.

**Präsentieren** eines Dokuments an einen Benutzer bedeutet, es in eine für Ihr Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}}, oder {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell darzustellen, zum Beispiel auf einem Computerbildschirm, Projektor oder Drucker.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert.

CSS kann für die Textgestaltung verwendet werden – beispielsweise zum Ändern der [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links. Es kann verwendet werden, um ein Layout zu erstellen – zum Beispiel [eine einzelne Textspalte in ein Layout zu verwandeln](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) mit einem Hauptinhaltsbereich und einer Seitenleiste für verwandte Informationen. Es kann sogar für Effekte wie [Animation](/de/docs/Web/CSS/CSS_animations) verwendet werden. Schauen Sie sich die Links in diesem Absatz für spezifische Beispiele an.

Die CSS-Sprache ist in *Module* organisiert, die zusammengehörige Funktionalität enthalten. Zum Beispiel finden Sie auf den MDN-Referenzseiten für das Modul [Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) heraus, welches Ziel es verfolgt und welche Eigenschaften und Features es enthält. In diesem Modul finden Sie auch einen Link zu den _Spezifikationen_, die die Technologie definieren.

## CSS-Syntaxgrundlagen

CSS ist eine regelbasierte Sprache – Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel können Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _wählt_ das HTML-Element aus, das wir gestalten möchten. In diesem Fall gestalten wir Überschriften der Ebene eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Dann haben wir eine Gruppe von geschweiften Klammern – `{ }`.
- Die Klammern enthalten ein oder mehrere **Deklarationen**, die in Form von **Eigenschafts**- und **Wert**-Paaren vorliegen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an, und wir geben den Wert der Eigenschaft nach dem Doppelpunkt an (`red` ist der Wert, der für die Eigenschaft `color` gesetzt wird).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine andere für `font-size`.

Verschiedene CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche zulässige Werte. In unserem Beispiel haben wir die Eigenschaft `color`, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die Eigenschaft `font-size`. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stylesheet enthält viele solche Regeln, die eine nach der anderen geschrieben werden.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Sie werden feststellen, dass Sie schnell einige Werte lernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Features) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie sich daran gewöhnen, "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über ein CSS-Feature finden möchten. Versuchen Sie beispielsweise, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wenn ein Browser ein Dokument anzeigt, muss er den Inhalt des Dokuments mit seinen Stilinformationen kombinieren. Es verarbeitet das Dokument in mehreren Stufen, die wir unten aufgelistet haben. Beachten Sie, dass dies eine sehr vereinfachte Version dessen ist, was passiert, wenn ein Browser eine Webseite lädt, und dass verschiedene Browser den Prozess auf unterschiedliche Weise handhaben.

1. Der Browser lädt das HTML.
2. Er wandelt das HTML in eine baumartige Struktur um, die als {{Glossary("DOM", "DOM")}} (_Document Object Model_) Baum bezeichnet wird. Das DOM stellt das Dokument im Speicher des Computers dar.
3. Der Browser ruft dann die meisten der verlinkten Ressourcen ab, wie eingebettete Bilder, Videos und CSS! JavaScript wird etwas später im Prozess behandelt, und darüber werden wir hier nicht sprechen, um es einfacher zu halten.
4. Der Browser parst das abgerufene CSS und sortiert die verschiedenen Regeln in verschiedene "Eimer", basierend darauf, auf welche HTML-Elemente (die im DOM als **Knoten** dargestellt werden) sie angewendet werden. Der Browser fügt die Stile dann nach Bedarf verschiedenen Elementen hinzu (dieses Zwischenstadium wird als **Render-Baum** bezeichnet).
5. Der Render-Baum wird in der Struktur aufgebaut, in der er nach Anwendung der Regeln erscheinen soll.
6. Die visuelle Darstellung der Seite wird auf dem Bildschirm angezeigt (diese Stufe wird als Malen bezeichnet).

Das folgende Diagramm bietet ebenfalls eine einfache Sicht auf den Prozess.

![Übersicht über den Rendering-Prozess](rendering.svg)

### Mehr über das DOM

Wie oben erwähnt, hat das DOM eine baumartige Struktur. Jedes Element, Attribut und jedes Textstück in der Auszeichnungssprache wird zu einem {{Glossary("Node/DOM", "DOM-Knoten")}} in der Baumstruktur. Die Knoten werden durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister.

Das Verständnis des DOM wird Ihnen helfen, Ihr CSS zu entwerfen, zu debuggen und zu pflegen, da das DOM der Ort ist, an dem Ihr CSS und der Inhalt des Dokuments aufeinandertreffen. Wenn Sie die Entwicklerwerkzeuge des Browsers verwenden, navigieren Sie durch das DOM, während Sie Elemente auswählen, um zu sehen, welche Regeln gelten.

Schauen wir uns ein Beispiel an, um zu sehen, wie ein tatsächlicher HTML-Schnipsel in ein DOM konvertiert wird.

Nehmen Sie den folgenden HTML-Code:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Der Browser parst das HTML und erstellt daraus ein DOM, das so aussieht:

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
    └─ "Sheets"
```

Im DOM ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Eltern, mit Textknoten als ihren Kindern. Wenn der Browser den obigen DOM-Baum rendert, sieht er folgendermaßen aus:

{{EmbedLiveSample('Mehr über das DOM', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

### CSS auf das DOM anwenden

Angenommen, wir ändern unseren Code, um das folgende CSS auf unser Dokument anzuwenden, um es zu gestalten:

```html hidden
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

In diesem Fall erstellt der Browser zuerst einen DOM-Baum, wie im vorherigen Abschnitt. Als nächstes parst er das CSS. Da die einzige verfügbare Regel im CSS einen `span`-Selektor hat, sortiert der Browser das CSS sehr schnell! Er wendet diese Regel auf jedes der drei `<span>`-Elemente an und malt dann die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample('CSS auf das DOM anwenden', '100%', 90)}}

## Zusammenfassung

Nun, da Sie ein gewisses Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns fortfahren, Sie dazu zu bringen, selbst etwas CSS zu schreiben.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
