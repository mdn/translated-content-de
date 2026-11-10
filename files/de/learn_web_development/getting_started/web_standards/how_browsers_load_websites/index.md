---
title: Wie Browser Websites laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir uns einen [Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) angesehen, aus denen Websites bestehen. In diesem Artikel gehen wir durch, wie diese Technologien gerendert werden: Wenn ein Browser die Codedateien und anderen Ressourcen erhalten hat, aus denen eine Webseite besteht (wie unter [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) beschrieben), wie werden sie dann zu der fertigen Webseite zusammengesetzt, mit der die Benutzer interagieren?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems, von Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die verschiedenen Arten von Ressourcen, die in einer HTTP-Antwort zurückgegeben werden.</li>
          <li>Wie der Browser die verschiedenen Dateien zusammensetzt, um eine Webseite zu rendern und den Benutzern anzuzeigen.</li>
          <li>Warum der Browser manchmal als schwierige, aber auch als großartige Programmierumgebung angesehen wird.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Dateien werden in HTTP-Antworten zurückgegeben?

Zusammenfassend lässt sich sagen, dass HTTP-Antworten auf Anfragen nach einer Webseite gemäß dem [Überblick über Webtechnologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) aus dem letzten Artikel im Allgemeinen einige der folgenden Dateitypen enthalten:

- HTML-Dateien, die den Inhalt und die Struktur der Webseite festlegen.
- CSS-Dateien, die Informationen zu Stil und Layout festlegen.
- JavaScript-Dateien, die das Verhalten interaktiver Teile der Webseite festlegen.
- Medienressourcen wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Dateitypen, die der Browser nicht selbst verarbeiten kann und deshalb zur Darstellung an eine geeignete Anwendung auf dem Gerät weitergibt, beispielsweise Word- oder Pages-Dokumente, PowerPoint-Präsentationen und OpenOffice-Dateien.

## Rendern von Webseiten

Wenn Benutzer eine neue Webseite aufrufen (indem sie auf einen Link klicken oder eine Webadresse in die Adressleiste des Browsers eingeben), werden mehrere HTTP-Anfragen gesendet und mehrere Dateien in HTTP-Antworten zurückgegeben. Der Browser verarbeitet die empfangenen Dateien und setzt sie zu einer Webseite zusammen, mit der die Benutzer interagieren können. Dieser Vorgang, bei dem die einzelnen Teile zu einer Webseite zusammengesetzt werden, heißt **Rendern**.

Die folgenden Abschnitte erklären in groben Zügen, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine vereinfachte Beschreibung ist und verschiedene Browser den Vorgang unterschiedlich handhaben. Dennoch vermittelt sie Ihnen eine Vorstellung davon, wie das Ganze funktioniert.

## Verarbeitung von HTML

Zunächst empfängt der Browser die HTML-Datei, die den Inhalt der Webseite enthält und ihre Struktur definiert, und parst sie. Er wandelt sie in eine baumartige Struktur um, den **DOM-Baum** (**Document Object Model**). Das DOM bildet die Struktur des HTML-Dokuments im Arbeitsspeicher des Computers ab. Betrachten Sie als Beispiel diesen einfachen HTML-Ausschnitt:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, jedes Attribut und jeder Textabschnitt im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten werden durch ihre Beziehungen zu anderen DOM-Knoten beschrieben. Manche Elemente sind Elternknoten von Kindknoten, und Kindknoten können Geschwisterknoten haben. Der Browser parst dieses HTML und erstellt daraus den folgenden DOM-Baum:

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

In diesem DOM-Baum ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternknoten. Zu seinen Kindknoten gehören ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Auch die `SPAN`-Knoten sind Elternknoten; ihre Kindknoten sind Textknoten. Wenn der Browser diesen DOM-Baum rendert, sieht das Ergebnis so aus:

{{EmbedLiveSample('handling_html', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Bestimmte HTML-Elemente lösen beim Parsen weitere HTTP-Anfragen aus:

- {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets verweisen.
- {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Dateien verweisen.
- Elemente wie {{htmlelement("img")}}, {{htmlelement("video")}} und {{htmlelement("audio")}}, die auf Mediendateien verweisen, die Sie in die Webseite einbetten möchten.

## CSS parsen und die Seite rendern

Als Nächstes wird das CSS verarbeitet.

1. Der Browser parst das CSS auf der Seite (entweder ist es in der HTML-Datei enthalten oder wird aus externen Stylesheets abgerufen) und sortiert die verschiedenen CSS-Stilregeln in unterschiedliche „Kategorien“, je nachdem, auf welche HTML-Elemente sie angewendet werden sollen. Diese Elemente werden im DOM als **Knoten** dargestellt. Anschließend ordnet der Browser den verschiedenen Elementen die erforderlichen Stile zu (dieser Zwischenschritt wird als Renderbaum bezeichnet).
2. Der Renderbaum wird entsprechend der Struktur angeordnet, in der die Elemente nach Anwendung der Regeln erscheinen sollen. Dazu gehören auch Bilder und andere Mediendateien, die in die Seite eingebettet werden.
3. Die visuelle Darstellung der Seite erscheint auf dem Bildschirm (diese Phase wird als Painting bezeichnet).

Das folgende Diagramm veranschaulicht den bisher beschriebenen Vorgang:

![Überblick über den Rendervorgang](rendering.svg)

Kehren wir zu unserem Beispiel zurück und nehmen wir an, dass die HTML-Datei das folgende CSS enthält:

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

Die einzige CSS-Regel hat einen `span`-Selektor, sodass der Browser das CSS sehr schnell zuordnen kann! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an und gibt ihnen einen schwarzen Rahmen und einen limettengrünen Hintergrund. Anschließend zeichnet er die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe sieht so aus:

{{EmbedLiveSample('parsing_css_and_rendering_the_page', '100%', 90)}}

## Verarbeitung von JavaScript

Nachdem das CSS verarbeitet wurde, wird sämtliches JavaScript auf der Seite (entweder in der HTML-Datei enthalten oder aus externen Skriptdateien abgerufen) geparst, interpretiert, kompiliert und ausgeführt. Dies geschieht, bevor das endgültige Rendern der Seite abgeschlossen ist – schließlich kann JavaScript das Rendering beeinflussen, beispielsweise indem es dem DOM Knoten hinzufügt oder vorhandene Knoten verändert.

Kehren wir noch einmal zu unserem Beispiel zurück und nehmen wir an, dass die HTML-Datei das folgende JavaScript enthält:

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css hidden
span {
  border: 1px solid black;
  background-color: lime;
}
```

```js
const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});
```

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert. Vereinfacht gesagt findet es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in dessen untergeordneten Textknoten um.

Die endgültige Ausgabe sieht so aus:

{{EmbedLiveSample('handling_javascript', '100%', 90)}}

## Welche weiteren Schritte gehören zum Rendern?

Während des Renderns einer Seite geschieht noch einiges mehr, aber wir werden hier nicht auf alles eingehen. Ein weiterer erwähnenswerter Vorgang ist der Aufbau eines Barrierefreiheitsbaums auf Grundlage des DOM. Hilfstechnologien (beispielsweise Screenreader) können darauf zugreifen und ermöglichen so Menschen, die den gerenderten Inhalt nicht sehen können, mit ihm zu interagieren.

Mehr dazu erfahren Sie später in unserem Modul [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility).

## Der Browser: eine schwierige _und_ großartige Programmierumgebung

Die Frontend-Webentwicklung kann manchmal frustrierend sein, und manche Menschen betrachten den Browser als schwierige Programmierumgebung. Anders als in anderen Programmierumgebungen ist es hier deutlich schwerer, verlässliche Annahmen über die Umgebung zu treffen, in der Ihr Code ausgeführt wird. Sie können nicht im Voraus alle Kombinationen aus Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Arbeitsspeicher, Akkulaufzeit usw. kennen, die Ihre Benutzer haben werden. Deshalb können Sie nicht allen ein perfektes Nutzungserlebnis garantieren.

Moderne Browser setzen Webstandards in der Regel recht einheitlich um, dennoch bleiben viele Unsicherheiten. Als Webentwickler müssen Sie diese Unsicherheit akzeptieren, defensiv programmieren und Funktionen mit Bedacht einsetzen. Dazu gehört, die im vorherigen Artikel beschriebenen [bewährten Vorgehensweisen](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices) einzuhalten.

Andererseits ist das Web aus vielen Gründen auch eine großartige Programmierumgebung.

- Zunächst einmal wurde es mit Blick auf universellen Zugang entwickelt. Das Web ist von Grund auf zugänglich und verlinkbar. Manche dieser Grundlagen sind in anderen Umgebungen schwerer umzusetzen.
- Die Bereitstellung von Anwendungen über das Web ist einfach und leistungsfähig. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie geben ihnen einfach eine Webadresse.
- Anwendungsupdates sind meist unkompliziert. In vielen Fällen sehen Besucher eine neue Version einer Anwendung, sobald sie ihren Browser-Tab neu laden. Sie müssen sich keine Gedanken darüber machen, wie Sie Besucher dazu bringen, regelmäßig Softwareupdates herunterzuladen und zu installieren.
- Die Web-Community ist lebendig und hilfsbereit. Wie wir später in unserem Artikel [Recherchieren und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) erläutern, gibt es viele Stellen, an denen Sie um Hilfe bitten können, und hervorragende Ressourcen, aus denen Sie lernen können.

## Siehe auch

- [Wann und wie Sie Browser-Bugs melden](/de/docs/Learn_web_development/Howto/Web_mechanics/File_browser_bugs)
  - : Wenn etwas in einem Browser nicht wie erwartet funktioniert, könnte es sich um einen Browser-Bug handeln. Dieser Artikel erklärt, wie Sie das feststellen und gegebenenfalls einen Bug-Report einreichen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
