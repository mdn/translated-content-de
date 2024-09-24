---
title: Was ist CSS?
slug: Learn/CSS/First_steps/What_is_CSS
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS")}}** (Cascading Style Sheets) erlaubt es Ihnen, ansprechende Webseiten zu gestalten, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, mit einem einfachen Syntaxbeispiel, und behandelt einige Schlüsselbegriffe über die Sprache.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Um zu lernen, was CSS ist.</td>
    </tr>
  </tbody>
</table>

Im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) haben wir behandelt, was HTML ist und wie es verwendet wird, um Dokumente zu markieren. Diese Dokumente werden in einem Webbrowser lesbar sein. Überschriften erscheinen größer als normaler Text, Absätze brechen auf eine neue Zeile um und haben Platz dazwischen. Links sind farbig und unterstrichen, um sie vom restlichen Text zu unterscheiden. Was Sie sehen, sind die Standardstile des Browsers – sehr einfache Stile –, die der Browser auf HTML anwendet, um sicherzustellen, dass die Seite im Grunde lesbar ist, selbst wenn vom Autor der Seite kein explizites Styling angegeben ist.

![Die Standardstile, die von einem Browser verwendet werden](html-example.png)

Allerdings wäre das Web ein langweiliger Ort, wenn alle Webseiten so aussähen. Mit CSS können Sie genau steuern, wie HTML-Elemente im Browser aussehen, und Ihr Markup mit jedem gewünschten Design präsentieren.

Weitere Informationen über Browser/Standardstile finden Sie im folgenden Video:

{{EmbedYouTube("spK_S0HfzFw")}}

## Wofür ist CSS?

Wie bereits erwähnt, ist CSS eine Sprache zur Spezifikation, wie Dokumente für Benutzer präsentiert werden – wie sie gestylt, layoutet usw. sind.

Ein **Dokument** ist in der Regel eine Textdatei, die mit einer Auszeichnungssprache strukturiert ist – {{Glossary("HTML")}} ist die häufigste Auszeichnungssprache, aber Sie können auch auf andere Auszeichnungssprachen stoßen, wie {{Glossary("SVG")}} oder {{Glossary("XML")}}.

**Präsentieren** eines Dokuments für einen Benutzer bedeutet, es in eine Form umzuwandeln, die von Ihrem Publikum nutzbar ist. {{Glossary("browser","Browser")}}, wie {{Glossary("Mozilla Firefox","Firefox")}}, {{Glossary("Google Chrome","Chrome")}}, oder {{Glossary("Microsoft Edge","Edge")}}, sind darauf ausgelegt, Dokumente visuell zu präsentieren, zum Beispiel auf einem Computerbildschirm, Projektor oder Drucker.

> [!NOTE]
> Ein Browser wird manchmal als {{Glossary("User agent","user agent")}} bezeichnet, was im Grunde ein Computerprogramm bedeutet, das eine Person innerhalb eines Computersystems repräsentiert. Browser sind der Haupttyp von User Agents, an den wir denken, wenn wir über CSS sprechen, sie sind jedoch nicht die einzigen. Es gibt andere User Agents, wie solche, die HTML- und CSS-Dokumente in PDFs umwandeln, um gedruckt zu werden.

CSS kann zur sehr einfachen Textgestaltung von Dokumenten verwendet werden – zum Beispiel, um die [Farbe](/de/docs/Web/CSS/color_value) und die [Größe](/de/docs/Web/CSS/font-size) von Überschriften und Links zu ändern. Es kann verwendet werden, um ein Layout zu erstellen – zum Beispiel, [eine einzelne Textspalte in ein Layout](/de/docs/Web/CSS/Layout_cookbook/Column_layouts) mit einem Hauptinhaltbereich und einer Seitenleiste für verwandte Informationen umzuwandeln. Es kann sogar für Effekte wie [Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden. Schauen Sie sich die Links in diesem Absatz für spezifische Beispiele an.

## CSS-Syntax

CSS ist eine regelbasierte Sprache – Sie definieren die Regeln, indem Sie Gruppen von Stilen angeben, die auf bestimmte Elemente oder Gruppen von Elementen auf Ihrer Webseite angewendet werden sollen.

Zum Beispiel können Sie entscheiden, dass die Hauptüberschrift auf Ihrer Seite als großer roter Text angezeigt werden soll. Der folgende Code zeigt eine sehr einfache CSS-Regel, die das oben beschriebene Styling erreicht:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- Im obigen Beispiel beginnt die CSS-Regel mit einem {{Glossary("CSS Selector", "Selektor")}}. Dieser _wählt_ das HTML-Element aus, das wir stylen wollen. In diesem Fall stylen wir Überschriften der Ebene eins ({{htmlelement("Heading_Elements", "h1")}}).
- Dann haben wir eine Gruppe von geschweiften Klammern `{ }`.
- Innerhalb der Klammern befinden sich eine oder mehrere **Deklarationen**, die in Form von **Eigenschaften**- und **Werte**-Paaren auftreten. Wir geben die Eigenschaft (`color` im obigen Beispiel) vor dem Doppelpunkt an und den Wert der Eigenschaft nach dem Doppelpunkt (`red` in diesem Beispiel).
- Dieses Beispiel enthält zwei Deklarationen, eine für `color` und die andere für `font-size`. Jedes Paar gibt eine Eigenschaft des/der ausgewählten Elements/Elemente ({{htmlelement("Heading_Elements", "h1")}} in diesem Fall) an und dann einen Wert, den wir der Eigenschaft geben möchten.

CSS {{Glossary("property/CSS","Eigenschaften")}} haben je nach spezifizierter Eigenschaft unterschiedliche erlaubte Werte. In unserem Beispiel haben wir die `color`-Eigenschaft, die verschiedene [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) annehmen kann. Wir haben auch die `font-size`-Eigenschaft. Diese Eigenschaft kann verschiedene [Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages) als Wert annehmen.

Ein CSS-Stylesheet wird viele solche Regeln enthalten, die nacheinander geschrieben werden.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Sie werden feststellen, dass Sie schnell einige Werte lernen, während Sie andere nachschlagen müssen. Die einzelnen Eigenschaftsseiten auf MDN bieten Ihnen eine schnelle Möglichkeit, Eigenschaften und ihre Werte nachzuschlagen, wenn Sie sie vergessen oder wissen möchten, was Sie sonst noch als Wert verwenden können.

> [!NOTE]
> Links zu allen CSS-Eigenschaftsseiten (zusammen mit anderen CSS-Funktionen) finden Sie im MDN [CSS-Referenz](/de/docs/Web/CSS/Reference). Alternativ sollten Sie sich angewöhnen, bei Bedarf "mdn _css-funktion-name_" in Ihrer bevorzugten Suchmaschine zu suchen, um mehr Informationen über eine CSS-Funktion zu finden. Versuchen Sie zum Beispiel "mdn color" und "mdn font-size" zu suchen!

## CSS-Module

Da es so viele Dinge gibt, die Sie mit CSS stylen könnten, ist die Sprache in _Module_ aufgeteilt. Sie werden auf diese Module stoßen, während Sie MDN erkunden. Viele der Dokumentationsseiten sind um ein bestimmtes Modul organisiert. Beispielsweise könnten Sie sich die MDN-Referenz zum Modul [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) ansehen, um herauszufinden, welchen Zweck es erfüllt und welche Eigenschaften und Funktionen es enthält. In diesem Modul finden Sie auch einen Link zu den _Spezifikationen_, die die Technologie definieren (siehe auch den Abschnitt unten).

In diesem Stadium müssen Sie sich noch keine großen Gedanken darüber machen, wie CSS strukturiert ist; allerdings kann es die Informationssuche erleichtern, wenn Sie zum Beispiel wissen, dass eine bestimmte Eigenschaft wahrscheinlich zusammen mit anderen ähnlichen Dingen gefunden wird und daher wahrscheinlich in derselben Spezifikation steht.

Für ein spezifisches Beispiel, lassen Sie uns auf das Modul Hintergrund und Rahmen zurückkommen – Sie könnten denken, dass es logisch erscheint, dass die Eigenschaften [`background-color`](/de/docs/Web/CSS/background-color) und [`border-color`](/de/docs/Web/CSS/border-color) in diesem Modul definiert sind. Und Sie hätten recht.

## CSS-Spezifikationen

Alle Webstandardtechnologien (HTML, CSS, JavaScript, etc.) sind in umfangreichen Dokumenten namens Spezifikationen (oder "Specs") definiert, die von Standardorganisationen (wie dem {{glossary("W3C")}}, {{glossary("WHATWG")}}, {{glossary("ECMA")}}, oder {{glossary("Khronos")}}) veröffentlicht werden und genau festlegen, wie diese Technologien funktionieren sollen.

CSS ist da keine Ausnahme – es wird von einer Gruppe innerhalb des W3C namens [CSS Working Group](https://www.w3.org/Style/CSS/) entwickelt. Diese Gruppe besteht aus Vertretern von Browserherstellern und anderen Unternehmen, die ein Interesse an CSS haben. Es gibt auch andere Personen, sogenannte _eingeladene Experten_, die als unabhängige Stimmen fungieren; sie sind nicht mit einer Mitgliedsorganisation verbunden.

Neue CSS-Funktionen werden entweder von der CSS Working Group entwickelt oder spezifiziert – manchmal, weil ein bestimmter Browser daran interessiert ist, eine bestimmte Fähigkeit zu haben, auch weil Webdesigner und Entwickler nach einer Funktion verlangen, und manchmal, weil die Working Group selbst einen Bedarf erkannt hat. CSS entwickelt sich ständig weiter, mit neuen Funktionen, die verfügbar werden. Ein Schlüsselpunkt von CSS ist jedoch, dass alle sehr darauf bedacht sind, niemals etwas so zu ändern, dass alte Websites dadurch kaputt gehen würden. Eine Website, die im Jahr 2000 unter Verwendung des damals begrenzten CSS erstellt wurde, sollte heute in einem Browser noch nutzbar sein!

Als Neuling in CSS werden Sie die CSS-Spezifikationen wahrscheinlich als überwältigend empfinden – sie sind für Ingenieure gedacht, die die Unterstützung der Funktionen in User Agents umsetzen sollen, nicht für Webentwickler, um CSS zu verstehen. Viele erfahrene Entwickler ziehen es vor, sich auf die MDN-Dokumentation oder andere Tutorials zu beziehen. Es ist jedoch hilfreich, zu wissen, dass diese Spezifikationen existieren und die Beziehung zwischen dem CSS, das Sie verwenden, der Browserunterstützung (siehe unten) und den Spezifikationen zu verstehen.

## Informationen zur Browserunterstützung

Nachdem eine CSS-Funktion spezifiziert wurde, ist sie für uns beim Entwickeln von Webseiten nur nützlich, wenn einer oder mehrere Browser die Funktion implementiert haben. Das bedeutet, dass der Code geschrieben wurde, um die Anweisung in unserer CSS-Datei in etwas umzuwandeln, das auf dem Bildschirm ausgegeben werden kann. Wir werden uns diesen Prozess im Detail in der Lektion [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) ansehen. Es ist ungewöhnlich, dass alle Browser eine Funktion gleichzeitig implementieren, und so gibt es normalerweise eine Lücke, in der Sie einen Teil von CSS in einigen Browsern und nicht in anderen verwenden können. Daher ist es nützlich, den Implementierungsstatus überprüfen zu können.

Der Browserunterstützungsstatus wird auf jeder MDN-CSS-Eigenschaftsseite in einer Tabelle mit dem Namen "Browserkompatibilität" angezeigt. Konsultieren Sie die Informationen in dieser Tabelle, um zu überprüfen, ob die Eigenschaft auf Ihrer Website verwendet werden kann. Ein Beispiel finden Sie in der [Browserkompatibilitäts-Tabelle für die CSS `font-family` Eigenschaft](/de/docs/Web/CSS/font-family#browser_compatibility).

Basierend auf Ihren Anforderungen können Sie die Tabelle zur Browserkompatibilität verwenden, um zu überprüfen, wie diese Eigenschaft über verschiedene Browser hinweg unterstützt wird, oder um zu überprüfen, ob Ihr spezifischer Browser und die Version, die Sie haben, die Eigenschaft unterstützen, oder ob es irgendwelche Vorbehalte gibt, derer Sie sich bei dem von Ihnen verwendeten Browser und der Version bewusst sein sollten.

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Jetzt, da Sie ein Grundverständnis davon haben, was CSS ist, lassen Sie uns zu [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps/Getting_started) übergehen, wo Sie beginnen können, selbst einige CSS zu schreiben.

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
