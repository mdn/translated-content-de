---
title: Was ist CSS?
slug: Learn/CSS/First_steps/What_is_CSS
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**[CSS](/de/docs/Glossary/CSS)** (Cascading Style Sheets) ermöglicht es, ansprechende Webseiten zu erstellen. Aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, mit einem einfachen Syntaxbeispiel, und behandelt einige Schlüsselbegriffe der Sprache.

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
        > und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren, was CSS ist.</td>
    </tr>
  </tbody>
</table>

Im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) haben wir behandelt, was HTML ist und wie es verwendet wird, um Dokumente zu markieren. Diese Dokumente werden in einem Webbrowser lesbar sein. Überschriften erscheinen größer als normaler Text, Absätze brechen in eine neue Zeile um und haben Abstand dazwischen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden. Was Sie sehen, sind die Standardstile des Browsers – sehr grundlegende Stile –, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite grundsätzlich lesbar ist, selbst wenn kein explizites Styling vom Autor der Seite angegeben wird.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Das Web würde jedoch ein langweiliger Ort sein, wenn alle Websites so aussehen würden. Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser dargestellt werden, und Ihr Markup mit jedem gewünschten Design präsentieren.

Für mehr Informationen über Browser/Standardstile sehen Sie sich das folgende Video an:

{{EmbedYouTube("spK_S0HfzFw")}}

## Wofür ist CSS?

Wie bereits erwähnt, ist CSS eine Sprache zur Spezifikation, wie Dokumente den Nutzern präsentiert werden – wie sie gestaltet, layoutet etc. werden.

Ein **Dokument** ist normalerweise eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist – [HTML](/de/docs/Glossary/HTML) ist die gebräuchlichste Auszeichnungssprache, aber Sie können auch auf andere Auszeichnungssprachen wie [SVG](/de/docs/Glossary/SVG) oder [XML](/de/docs/Glossary/XML) stoßen.

Ein **Dokument zu präsentieren** bedeutet, es in eine Form umzuwandeln, die von Ihrem Publikum genutzt werden kann. [Browser](/de/docs/Glossary/browser), wie [Firefox](/de/docs/Glossary/Mozilla_Firefox), [Chrome](/de/docs/Glossary/Google_Chrome) oder [Edge](/de/docs/Glossary/Microsoft_Edge), sind darauf ausgelegt, Dokumente visuell darzustellen, zum Beispiel auf einem Computerbildschirm, Projektor oder Drucker.

> [!NOTE]
> Ein Browser wird manchmal als [User-Agent](/de/docs/Glossary/User_agent) bezeichnet, was im Grunde bedeutet, dass es sich um ein Computerprogramm handelt, das eine Person innerhalb eines Computersystems repräsentiert. Browser sind die Hauptart von User-Agents, die wir im Zusammenhang mit CSS in Betracht ziehen, jedoch sind sie nicht die einzigen. Es gibt auch andere User-Agents, die HTML- und CSS-Dokumente in PDFs umwandeln, um sie zu drucken.

CSS kann für sehr grundlegende Textstile des Dokuments verwendet werden – zum Beispiel, um die [Farbe](/de/docs/Web/CSS/color_value) und [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links zu ändern. Es kann verwendet werden, um ein Layout zu erstellen – zum Beispiel, [eine einzelne Textspalte in ein Layout zu verwandeln](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) mit einem Hauptinhaltsbereich und einer Seitenleiste für verwandte Informationen. Es kann sogar für Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden. Werfen Sie einen Blick auf die Links in diesem Abschnitt für spezifische Beispiele.

## CSS-Syntax

CSS ist eine regelbasierte Sprache – Sie definieren die Regeln, indem Sie Gruppen von Stilen festlegen, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel können Sie entscheiden, dass die Hauptüberschrift auf Ihrer Seite als großer roter Text angezeigt wird. Der folgende Code zeigt eine sehr einfache CSS-Regel, die das oben beschriebene Styling erreicht:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- In dem obigen Beispiel beginnt die CSS-Regel mit einem [Selector](/de/docs/Glossary/CSS_Selector). Dieser _wählt_ das HTML-Element aus, das wir stylen möchten. In diesem Fall gestalten wir Überschriften erster Ebene ({{htmlelement("Heading_Elements", "h1")}}).
- Danach folgt ein Satz geschweifter Klammern `{ }`.
- Innerhalb der Klammern befinden sich eine oder mehrere **Deklarationen**, die in Form von **Eigenschafts-** und **Wert-Paaren** auftreten. Wir geben die Eigenschaft (`color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` in diesem Beispiel).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und die andere für `font-size`. Jedes Paar gibt eine Eigenschaft des/der ausgewählten Elemente(s) an (in diesem Fall {{htmlelement("Heading_Elements", "h1")}}) und den Wert, den wir der Eigenschaft zuweisen möchten.

CSS-[Eigenschaften](/de/docs/Glossary/property/CSS) haben unterschiedliche zulässige Werte, abhängig davon, welche Eigenschaft angegeben wird. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stylesheet wird viele solcher Regeln enthalten, die nacheinander geschrieben werden.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Sie werden feststellen, dass Sie einige Werte schnell lernen, während andere nachgeschlagen werden müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und deren Werte nachzuschlagen, wenn Sie sich nicht erinnern oder wissen möchten, was Sie sonst noch als Wert verwenden können.

> [!NOTE]
> Sie können Links zu allen CSS-Eigenschaftsseiten (sowie zu anderen CSS-Funktionalitäten) im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference) finden. Alternativ sollten Sie sich daran gewöhnen, in Ihrer bevorzugten Suchmaschine nach "mdn _css-feature-name_" zu suchen, wann immer Sie mehr über eine CSS-Funktion erfahren möchten. Versuchen Sie zum Beispiel, nach "mdn color" und "mdn font-size" zu suchen!

## CSS-Module

Da es so viele Dinge gibt, die Sie mit CSS gestalten könnten, ist die Sprache in _Module_ unterteilt. Sie werden auf diese Module stoßen, während Sie MDN erkunden. Viele der Dokumentationsseiten sind um ein bestimmtes Modul organisiert. Zum Beispiel könnten Sie sich die MDN-Referenz zum Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) ansehen, um herauszufinden, was dessen Zweck ist und welche Eigenschaften und Funktionalitäten es enthält. In diesem Modul finden Sie auch einen Link zu den _Spezifikationen_, die die Technologie definieren (siehe auch den Abschnitt unten).

Zu diesem Zeitpunkt müssen Sie sich keine allzu großen Sorgen darüber machen, wie CSS strukturiert ist; es kann jedoch einfacher sein, Informationen zu finden, wenn Sie zum Beispiel wissen, dass eine bestimmte Eigenschaft wahrscheinlich zusammen mit anderen ähnlichen Dingen gefunden wird und daher wahrscheinlich in derselben Spezifikation enthalten ist.

Ein spezifisches Beispiel: Nehmen wir das Modul Hintergründe und Rahmen – Sie könnten denken, dass es logisch ist, dass die Eigenschaften [`background-color`](/de/docs/Web/CSS/background-color) und [`border-color`](/de/docs/Web/CSS/border-color) in diesem Modul definiert sind. Und Sie hätten Recht.

## CSS-Spezifikationen

Alle Web-Standardtechnologien (HTML, CSS, JavaScript, etc.) sind in großen Dokumenten namens Spezifikationen (oder "Spezifikationen") definiert, die von Standardisierungsorganisationen (wie dem [W3C](/de/docs/Glossary/W3C), [WHATWG](/de/docs/Glossary/WHATWG), [ECMA](/de/docs/Glossary/ECMA) oder [Khronos](/de/docs/Glossary/Khronos)) veröffentlicht werden und genau definieren, wie diese Technologien sich verhalten sollen.

CSS ist da nicht anders – es wird von einer Gruppe innerhalb des W3C entwickelt, die als [CSS-Arbeitsgruppe](https://www.w3.org/Style/CSS/) bezeichnet wird. Diese Gruppe besteht aus Vertretern von Browser-Anbietern und anderen Unternehmen, die ein Interesse an CSS haben. Es gibt auch andere Personen, bekannt als _eingeladene Experten_, die als unabhängige Stimmen agieren; sie sind nicht mit einer Mitgliedsorganisation verbunden.

Neue CSS-Funktionen werden von der CSS-Arbeitsgruppe entwickelt oder spezifiziert – manchmal, weil ein bestimmter Browser daran interessiert ist, eine Fähigkeit zu haben, manchmal, weil Webdesigner und -entwickler eine Funktion benötigen, und manchmal, weil die Arbeitsgruppe selbst einen Bedarf identifiziert hat. CSS entwickelt sich ständig weiter, und es kommen ständig neue Funktionen hinzu. Ein entscheidender Punkt bei CSS ist jedoch, dass alle sehr darauf achten, Dinge niemals so zu ändern, dass alte Websites nicht mehr funktionieren würden. Eine im Jahr 2000 erstellte Website, die das damals verfügbare, eingeschränkte CSS verwendet, sollte noch heute in einem Browser nutzbar sein!

Als Neuling in CSS finden Sie die CSS-Spezifikationen wahrscheinlich überwältigend – sie sind für Ingenieure gedacht, die Unterstützung für die Funktionen in den User-Agents implementieren, nicht für Webentwickler, die CSS verstehen möchten. Viele erfahrene Entwickler ziehen es vor, sich auf MDN-Dokumentation oder andere Tutorials zu beziehen. Dennoch ist es nützlich zu wissen, dass diese Spezifikationen existieren, und das Verhältnis zwischen dem von Ihnen verwendeten CSS, der Unterstützung durch Browser (siehe unten) und den Spezifikationen zu verstehen.

## Informationen zur Browser-Unterstützung

Nachdem eine CSS-Funktion spezifiziert wurde, ist sie für uns nur dann nützlich, um Webseiten zu entwickeln, wenn ein oder mehrere Browser die Funktion implementiert haben. Das bedeutet, dass der Code geschrieben wurde, um die Anweisung in unserer CSS-Datei in etwas zu verwandeln, das auf dem Bildschirm angezeigt werden kann. Wir werden diesen Prozess ausführlicher in der Lektion [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) betrachten. Es ist ungewöhnlich, dass alle Browser eine Funktion gleichzeitig implementieren, und daher gibt es normalerweise eine Lücke, in der Sie einen Teil von CSS in einigen Browsern verwenden können und in anderen nicht. Aus diesem Grund ist es nützlich, den Implementierungsstatus überprüfen zu können.

Der Status der Browser-Unterstützung wird auf jeder MDN-CSS-Eigenschaftsseite in einer Tabelle namens "Browser-Kompatibilität" angezeigt. Konsultieren Sie die Informationen in dieser Tabelle, um zu überprüfen, ob die Eigenschaft auf Ihrer Website verwendet werden kann. Ein Beispiel finden Sie in der [Browser-Kompatibilitätstabelle für die CSS `font-family`-Eigenschaft](/de/docs/Web/CSS/font-family#browser_compatibility).

Basierend auf Ihren Anforderungen können Sie die Browser-Kompatibilitätstabelle verwenden, um zu überprüfen, wie diese Eigenschaft in verschiedenen Browsern unterstützt wird, oder überprüfen, ob Ihr spezifischer Browser und die Version, die Sie haben, die Eigenschaft unterstützen, oder ob es Einschränkungen gibt, die Sie für den Browser und die Version, die Sie verwenden, beachten müssen.

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Nun, da Sie ein gewisses Verständnis davon haben, was CSS ist, lassen Sie uns mit [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started) fortfahren, wo Sie anfangen können, selbst CSS zu schreiben.

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
