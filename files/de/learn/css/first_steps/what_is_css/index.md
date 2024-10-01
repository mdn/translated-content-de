---
title: Was ist CSS?
slug: Learn/CSS/First_steps/What_is_CSS
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS", "CSS")}}** (Cascading Style Sheets) ermöglicht Ihnen, ansprechende Webseiten zu erstellen. Aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, mit einem einfachen Syntaxbeispiel und behandelt auch einige Schlüsselbegriffe der Sprache.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, was CSS ist.</td>
    </tr>
  </tbody>
</table>

In dem Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) haben wir behandelt, was HTML ist und wie es zur Auszeichnung von Dokumenten verwendet wird. Diese Dokumente werden von einem Webbrowser lesbar gemacht. Überschriften erscheinen größer als normaler Text, Absätze beginnen in einer neuen Zeile und haben dazwischen Raum. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden. Was Sie sehen, sind die Standardstile des Browsers — sehr grundlegende Stile — die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite grundsätzlich lesbar ist, auch wenn der Autor der Seite keine explizite Gestaltung angegeben hat.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Allerdings wäre das Web ein langweiliger Ort, wenn alle Websites so aussähen. Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihr Markup nach Belieben gestalten.

Für mehr Informationen zu Browser- und Standardstilen sehen Sie sich das folgende Video an:

{{EmbedYouTube("spK_S0HfzFw")}}

## Wofür ist CSS?

Wie bereits erwähnt, ist CSS eine Sprache zur Spezifikation, wie Dokumente den Benutzern präsentiert werden – wie sie gestaltet, angeordnet usw. werden.

Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist — {{Glossary("HTML", "HTML")}} ist die häufigste, aber Sie könnten auch auf andere Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} stoßen.

Ein Dokument zu **präsentieren** bedeutet, es in eine Form zu überführen, die von Ihrem Publikum genutzt werden kann. {{Glossary("browser", "Browser")}} wie {{Glossary("Mozilla_Firefox", "Firefox")}}, {{Glossary("Google_Chrome", "Chrome")}} oder {{Glossary("Microsoft_Edge", "Edge")}} sind darauf ausgelegt, Dokumente visuell darzustellen, z. B. auf einem Computerbildschirm, Projektor oder Drucker.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User_agent", "User Agent")}} bezeichnet, was im Grunde ein Computerprogramm ist, das eine Person innerhalb eines Computersystems darstellt. Browser sind die Hauptart von User Agents, an die wir denken, wenn wir über CSS sprechen, obwohl sie nicht die einzigen sind. Es gibt auch andere User Agents, die HTML- und CSS-Dokumente in PDFs umwandeln, um sie zu drucken.

CSS kann für sehr grundlegendes Styling von Dokumententexten verwendet werden, beispielsweise um die [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links zu ändern. Es kann verwendet werden, um ein Layout zu erstellen, zum Beispiel, um [einen Text in Spalten zu layouten](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) mit einem Hauptinhaltbereich und einer Sidebar für verwandte Informationen. Es kann sogar für Effekte wie [Animation](/de/docs/Web/CSS/CSS_animations) verwendet werden. Schauen Sie sich die Links in diesem Absatz für spezifische Beispiele an.

## CSS-Syntax

CSS ist eine regelbasierte Sprache — Sie definieren die Regeln, indem Sie Gruppen von Styles angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewandt werden sollen.

Zum Beispiel können Sie entscheiden, dass die Hauptüberschrift auf Ihrer Seite als großer roter Text angezeigt wird. Der folgende Code zeigt eine sehr einfache CSS-Regel, die das beschriebene Styling erreicht:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS_Selector", "Selector")}}. Dieser _wählt_ das HTML-Element aus, das wir gestalten möchten. In diesem Fall gestalten wir Überschriften der Ebene 1 ({{htmlelement("Heading_Elements", "h1")}}).
- Dann haben wir eine Gruppe von geschweiften Klammern `{ }`.
- In den Klammern befindet sich eine oder mehrere **Deklarationen**, die in der Form von **Eigenschaft**-und-**Wert**-Paaren vorliegen. Wir geben die Eigenschaft (`color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` in diesem Beispiel).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und die andere für `font-size`. Jedes Paar spezifiziert eine Eigenschaft der ausgewählten Elemente (in diesem Fall {{htmlelement("Heading_Elements", "h1")}}), dann einen Wert, den wir der Eigenschaft geben möchten.

CSS-{{Glossary("property/CSS", "Eigenschaften")}} haben je nach spezifizierter Eigenschaft unterschiedliche zulässige Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stylesheet enthält viele solcher Regeln, die hintereinander geschrieben werden.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Sie werden schnell feststellen, dass Sie sich einige Werte leicht einprägen, während Sie andere nachschlagen müssen. Die individuellen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen, wenn Sie etwas vergessen oder wissen möchten, was Sie sonst noch als Wert verwenden können.

> [!NOTE]
> Auf MDN finden Sie Links zu allen CSS-Eigenschaftsseiten (sowie zu anderen CSS-Funktionen) im [CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie sich daran gewöhnen, in Ihrer bevorzugten Suchmaschine nach „mdn _css-feature-name_“ zu suchen, wenn Sie mehr Informationen über eine CSS-Funktion benötigen. Suchen Sie zum Beispiel nach „mdn color“ und „mdn font-size“!

## CSS-Module

Da es so viele Dinge gibt, die Sie mit CSS gestalten könnten, ist die Sprache in _Module_ unterteilt. Sie werden auf MDN auf diese Module stoßen. Viele der Dokumentationsseiten sind um ein bestimmtes Modul herum organisiert. Zum Beispiel können Sie sich den MDN-Referenz zu dem Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) ansehen, um herauszufinden, was dessen Zweck ist und welche Eigenschaften und Funktionen es enthält. In diesem Modul finden Sie auch einen Link zu den _Spezifikationen_, die die Technologie definieren (siehe auch den untenstehenden Abschnitt).

In diesem Stadium müssen Sie sich nicht zu sehr darum kümmern, wie CSS strukturiert ist; es kann jedoch einfacher sein, Informationen zu finden, wenn Sie zum Beispiel wissen, dass eine bestimmte Eigenschaft wahrscheinlich mit anderen ähnlichen Dingen gefunden wird und daher wahrscheinlich in derselben Spezifikation steht.

Ein spezifisches Beispiel: Gehen wir zurück zum Modul Hintergründe und Rahmen — Sie könnten denken, dass es logisch erscheint, dass die Eigenschaften [`background-color`](/de/docs/Web/CSS/background-color) und [`border-color`](/de/docs/Web/CSS/border-color) in diesem Modul definiert sind. Und Sie hätten recht.

## CSS-Spezifikationen

Alle Web-Standardtechnologien (HTML, CSS, JavaScript usw.) sind in riesigen Dokumenten definiert, die Spezifikationen (oder „Specs“) genannt werden. Diese werden von Standardisierungsorganisationen (wie dem {{Glossary("W3C", "W3C")}}, {{Glossary("WHATWG", "WHATWG")}}, {{Glossary("ECMA", "ECMA")}} oder {{Glossary("Khronos", "Khronos")}}) veröffentlicht und definieren genau, wie diese Technologien funktionieren sollen.

CSS ist nicht anders — es wird von einer Gruppe innerhalb des W3C namens [CSS Working Group](https://www.w3.org/Style/CSS/) entwickelt. Diese Gruppe besteht aus Vertretern von Browserherstellern und anderen Unternehmen, die ein Interesse an CSS haben. Es gibt auch andere Personen, sogenannte _eingeladene Experten_, die als unabhängige Stimmen fungieren; sie sind nicht mit einer Mitgliedsorganisation verbunden.

Neue CSS-Funktionen werden von der CSS Working Group entwickelt oder spezifiziert — manchmal, weil ein bestimmter Browser eine Fähigkeit haben möchte, ein andermal, weil Webdesigner und Entwickler eine Funktion anfragen, und manchmal, weil die Working Group selbst ein Bedürfnis identifiziert hat. CSS entwickelt sich ständig weiter, und neue Funktionen stehen zur Verfügung. Ein entscheidendes Merkmal von CSS ist jedoch, dass alle sehr hart daran arbeiten, Dinge nie so zu ändern, dass alte Websites dadurch kaputtgehen. Eine Website, die im Jahr 2000 unter Verwendung der damals verfügbaren begrenzten CSS erstellt wurde, sollte auch heute noch in einem Browser nutzbar sein!

Für einen CSS-Neuling wirken die CSS-Spezifikationen wahrscheinlich überwältigend — sie sind für Ingenieure gedacht, die die Unterstützung für die Funktionen in User Agents implementieren, nicht für Webentwickler, die CSS verstehen möchten. Viele erfahrene Entwickler ziehen es vor, die MDN-Dokumentation oder andere Tutorials zu verwenden. Es ist jedoch nützlich zu wissen, dass diese Spezifikationen existieren und das Verhältnis zwischen dem von Ihnen verwendeten CSS, der Browser-Unterstützung (siehe unten) und den Spezifikationen zu verstehen.

## Browserunterstützungsinformationen

Nachdem eine CSS-Funktion spezifiziert wurde, ist sie für uns erst dann nützlich, um Webseiten zu entwickeln, wenn ein oder mehrere Browser die Funktion implementiert haben. Das bedeutet, dass der Code geschrieben wurde, um die Anweisungen in unserer CSS-Datei in etwas zu verwandeln, das auf dem Bildschirm ausgegeben werden kann. Wir werden diesen Prozess genauer in der Lektion [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) betrachten. Es ist unüblich, dass alle Browser eine Funktion gleichzeitig implementieren, daher gibt es normalerweise eine Lücke, in der Sie einen Teil von CSS in einigen Browsern verwenden können, aber nicht in anderen. Aus diesem Grund kann es nützlich sein, den Status der Implementierung zu überprüfen.

Der Status der Browserunterstützung wird auf jeder MDN-CSS-Eigenschaftsseite in einer Tabelle namens „Browser-Kompatibilität“ angezeigt. Konsultieren Sie die Informationen in dieser Tabelle, um zu überprüfen, ob die Eigenschaft auf Ihrer Website verwendet werden kann. Für ein Beispiel siehe die [Browser-Kompatibilitätstabelle für die CSS-`font-family`-Eigenschaft](/de/docs/Web/CSS/font-family#browser_compatibility).

Basierend auf Ihren Anforderungen können Sie die Browser-Kompatibilitätstabelle verwenden, um zu überprüfen, wie diese Eigenschaft in verschiedenen Browsern unterstützt wird, oder um zu überprüfen, ob Ihr bestimmter Browser und die Version, die Sie haben, die Eigenschaft unterstützen, oder ob es irgendwelche Einschränkungen gibt, die Sie für den verwendeten Browser und die Version beachten sollten.

## Zusammenfassung

Sie haben es bis ans Ende des Artikels geschafft! Jetzt, da Sie ein gewisses Verständnis davon haben, was CSS ist, lassen Sie uns weitermachen mit [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started), wo Sie selbst anfangen können, CSS zu schreiben.

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
