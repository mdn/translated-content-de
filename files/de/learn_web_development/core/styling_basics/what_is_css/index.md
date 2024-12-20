---
title: Was ist CSS?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert das eigentlich im Hintergrund? In diesem Artikel wird erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.

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
        >, und HTML-Vertrautheit (studieren Sie das
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
          <li>Dass HTML nichts mit der Gestaltung zu tun hat.</li>
          <li>Das Konzept der Standard-Browserstile.</li>
          <li>Wie CSS-Code aussieht.</li>
          <li>Wie CSS auf HTML angewendet wird.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Standard-Browserstile

Im Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) haben wir behandelt, was HTML ist und wie es zum Markieren von Dokumenten verwendet wird. Diese Dokumente werden in einem Webbrowser lesbar gemacht. Überschriften sehen größer als normaler Text aus, Absätze beginnen in einer neuen Zeile und haben Abstände zwischen ihnen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden.

Was Sie sehen, sind die Standardstile des Browsers — eine sehr grundlegende Gestaltung, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite grundsätzlich lesbar ist, auch wenn der Autor der Seite keine explizite Gestaltung angegeben hat. Diese Stile sind in Standard-CSS-Stilen enthalten, die sich im Browser befinden — sie haben nichts mit HTML zu tun.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web wäre ein langweiliger Ort, wenn alle Websites so aussehen würden. Deshalb müssen Sie CSS lernen.

## Wofür ist CSS da?

Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihre Dokumente für Ihre Benutzer mit jedem gewünschten Design und Layout präsentieren.

Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Markupsprache strukturiert ist — {{Glossary("HTML", "HTML")}} ist die gebräuchlichste Markupsprache, aber Sie könnten auch auf andere Markupsprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} stoßen.

**Präsentieren** eines Dokuments an einen Benutzer bedeutet, es in eine für Ihr Publikum nutzbare Form zu konvertieren. {{Glossary("browser", "Browser")}}, wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}} oder {{Glossary("Microsoft_Edge", "Edge")}}, sind so ausgelegt, dass sie Dokumente visuell präsentieren, zum Beispiel auf einem Computerbildschirm, Beamer oder Drucker.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "Benutzeragent")}} bezeichnet, was im Grunde ein Computerprogramm ist, das eine Person innerhalb eines Computersystems darstellt.

CSS kann für die Textgestaltung verwendet werden — zum Beispiel, um die [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links zu ändern. Es kann verwendet werden, um ein Layout zu erstellen — zum Beispiel, um [eine einzelne Textspalte in ein Layout umzuwandeln](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) mit einem Hauptinhaltsbereich und einer Seitenleiste für verwandte Informationen. Es kann sogar für Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden. Schauen Sie sich die Links in diesem Absatz für spezifische Beispiele an.

Die CSS-Sprache ist in _Module_ organisiert, die zusammengehörige Funktionalitäten enthalten. Zum Beispiel, schauen Sie sich die MDN-Referenzseiten für das Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) an, um herauszufinden, was deren Zweck ist und welche Eigenschaften und Merkmale enthalten sind. In diesem Modul finden Sie auch einen Link zu _Spezifikationen_, die die Technologie definieren.

## Grundlegende CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel können Sie entscheiden, die Hauptüberschrift auf Ihrer Seite als großen roten Text zu gestalten. Der folgende Code zeigt eine sehr einfache CSS-Regel, die dies erreicht:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- Im obigen Beispiel öffnet sich die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selektor")}}. Dieser _selektiert_ das HTML-Element, das wir gestalten werden. In diesem Fall gestalten wir Überschriften der Stufe eins (`{{htmlelement("Heading_Elements", "&lt;h1>")}}`).
- Danach haben wir ein paar geschweifte Klammern — `{ }`.
- Die Klammern enthalten eine oder mehrere **Deklarationen**, die aus **Eigenschafts**- und **Wert**paaren bestehen. Wir geben die Eigenschaft (zum Beispiel `color` im obigen Beispiel) vor dem Doppelpunkt an, und wir geben den Wert der Eigenschaft nach dem Doppelpunkt an (`red` ist der gesetzte Wert für die `color`-Eigenschaft).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und eine andere für `font-size`.

Verschiedene CSS {{Glossary("property/CSS", "Eigenschaften")}} haben unterschiedliche erlaubte Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stylesheet enthält viele solcher Regeln, die nacheinander geschrieben sind.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Sie werden feststellen, dass Sie schnell einige Werte lernen, während Sie andere nachschlagen müssen. Die individuellen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen.

> [!NOTE]
> Sie finden Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Merkmalen) auf der MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) aufgelistet. Alternativ sollten Sie sich daran gewöhnen, immer "mdn _css-feature-name_" in Ihrer bevorzugten Suchmaschine zu suchen, wann immer Sie mehr Informationen über ein CSS-Feature benötigen. Versuchen Sie beispielsweise, nach "mdn color" oder "mdn font-size" zu suchen!

## Wie wird CSS auf HTML angewendet?

Wenn ein Browser ein Dokument anzeigt, muss er den Inhalt des Dokuments mit seinen Stilinformationen kombinieren. Er verarbeitet das Dokument in mehreren Phasen, die wir unten aufgelistet haben. Beachten Sie, dass dies eine stark vereinfachte Version dessen ist, was passiert, wenn ein Browser eine Webseite lädt und dass verschiedene Browser den Prozess unterschiedlich handhaben können.

1. Der Browser lädt das HTML.
2. Er konvertiert das HTML in eine baumartige Struktur, genannt {{Glossary("DOM", "DOM")}} (_Document Object Model_)-Baum. Der DOM stellt das Dokument im Speicher des Computers dar.
3. Der Browser ruft dann die meisten der Ressourcen ab, die im HTML-Dokument verlinkt sind, wie eingebettete Bilder, Videos und CSS! JavaScript wird etwas später im Prozess behandelt, und wir werden es hier nicht erwähnen, um die Dinge einfacher zu halten.
4. Der Browser parst das abgerufene CSS und sortiert die verschiedenen Regeln in verschiedene „Buckets“, basierend darauf, auf welche HTML-Elemente (im DOM als **Knoten** dargestellt) sie angewendet werden. Der Browser fügt dann die Stile den verschiedenen Elementen nach Bedarf hinzu (dieser Zwischenschritt wird als **Renderbaum** bezeichnet).
5. Der Renderbaum wird in der Struktur angeordnet, in der er erscheinen soll, nachdem die Regeln angewendet wurden.
6. Die visuelle Anzeige der Seite wird auf dem Bildschirm gezeigt (dieser Schritt wird „Malen“ genannt).

Das folgende Diagramm bietet ebenfalls eine einfache Übersicht über den Prozess.

![Überblick des Rendering-Prozesses](rendering.svg)

### Mehr über den DOM

Wie oben erwähnt, hat der DOM eine baumartige Struktur. Jedes Element, Attribut und Textstück in der Markupsprache wird zu einem {{Glossary("Node/DOM", "DOM-Knoten")}} in der Baumstruktur. Die Knoten sind durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister.

Das Verständnis des DOM wird Ihnen helfen, Ihr CSS zu entwerfen, zu debuggen und zu pflegen, da der DOM dort ist, wo Ihr CSS und der Inhalt des Dokuments aufeinandertreffen. Wenn Sie die Entwicklungswerkzeuge des Browsers verwenden, navigieren Sie im DOM, während Sie Elemente auswählen, um zu sehen, welche Regeln angewendet werden.

Schauen wir uns ein Beispiel an, um zu sehen, wie ein echtes HTML-Snippet in einen DOM umgewandelt wird.

Nehmen Sie den folgenden HTML-Code:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Der Browser parst das HTML und erstellt einen DOM daraus, der so aussieht:

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

{{EmbedLiveSample('Mehr über den DOM', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

### Anwenden von CSS auf den DOM

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

In diesem Fall wird der Browser zuerst einen DOM-Baum erstellen, wie im vorherigen Abschnitt. Dann parst er das CSS. Da die einzige im CSS verfügbare Regel einen `span`-Selektor hat, sortiert der Browser das CSS sehr schnell! Er wendet diese Regel auf jedes der drei `<span>`-Elemente an und malt dann die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample('Anwenden von CSS auf den DOM', '100%', 90)}}

## Zusammenfassung

Da Sie nun ein grundlegendes Verständnis dafür haben, was CSS ist und wie es funktioniert, lassen Sie uns fortfahren und Ihnen helfen, selbst etwas CSS zu schreiben.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
