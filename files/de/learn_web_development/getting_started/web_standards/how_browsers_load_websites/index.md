---
title: Wie Browser Webseiten laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir uns einen [Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) angesehen, aus denen Webseiten bestehen. In diesem Artikel gehen wir durch den Prozess, wie diese Technologien gerendert werden – wenn ein Browser die Code-Dateien und andere Ressourcen erhalten hat, die eine Webseite ausmachen (wie in [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) beschrieben), wie werden sie zusammengefügt, um das fertige Erlebnis zu schaffen, mit dem der Benutzer interagiert?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die verschiedenen Arten von Assets, die in einer HTTP-Antwort zurückgegeben werden.</li>
          <li>Wie die verschiedenen Dateien vom Browser zusammengesetzt werden, um eine Webseite zu rendern, die dann dem Benutzer angezeigt wird.</li>
          <li>Warum der Browser manchmal als feindliche Programmierumgebung angesehen wird, aber auch als großartige Programmierumgebung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Dateien werden in HTTP-Antworten zurückgegeben?

Um die [Übersicht über Web-Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies), die wir im letzten Artikel behandelt haben, zusammenzufassen, enthalten HTTP-Antworten (auf Anfragen nach einer Webseite) im Allgemeinen einige der folgenden Dateitypen:

- HTML-Dateien, die den Inhalt und die Struktur der Webseite festlegen.
- CSS-Dateien, die Stil- und Layoutinformationen festlegen.
- JavaScript-Dateien, die das Verhalten interaktiver Teile der Webseite spezifizieren.
- Medienassets wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Dateitypen, die der Browser nicht nativ verarbeiten kann und daher an eine relevante App auf dem Gerät weitergibt, um sie zu rendern, zum Beispiel Word- oder Pages-Dokumente, PowerPoint-Präsentationen und Open-Office-Dateien.

## Rendern von Webseiten

Wenn der Benutzer zu einer neuen Webseite navigiert (durch Klicken auf einen Link oder Eingeben einer Webadresse in die Adressleiste des Browsers), werden mehrere HTTP-Anfragen gesendet, und mehrere Dateien werden in HTTP-Antworten zurückgesendet. Die Dateien, die in diesen Antworten empfangen werden, werden vom Browser verarbeitet und zu einer Webseite zusammengesetzt, mit der der Benutzer interagieren kann. Dieser Prozess des Zusammenfügens der Teile zu einer Webseite wird **Rendering** genannt.

Die folgenden Abschnitte bieten eine allgemeine Erklärung, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine sehr vereinfachte Beschreibung ist und dass verschiedene Browser den Prozess auf unterschiedliche Weise handhaben können. Dies wird Ihnen jedoch eine Vorstellung von den Grundlagen geben, wie alles funktioniert.

## Handhabung von HTML

Zunächst wird die HTML-Datei, die den Webseiteninhalt enthält und ihre Struktur definiert, vom Browser empfangen und analysiert. Der Browser wandelt sie in eine baumartige Struktur um, die als **DOM-Baum** (**Document Object Model**) bezeichnet wird. Das DOM repräsentiert die Struktur des HTML-Dokuments im Speicher des Computers. Nehmen Sie dieses einfache HTML-Snippet als Beispiel:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, Attribut und jedes Textstück im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten sind durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister. Der Browser würde das obige HTML analysieren und den folgenden DOM-Baum daraus erstellen:

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

Im DOM ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Elternteile mit Textknoten als ihren Kindern. Wenn der Browser den obigen DOM-Baum rendert, sieht er folgendermaßen aus:

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Bestimmte HTML-Elemente lösen beim Parsen weitere HTTP-Anfragen aus:

- {{htmlelement("link")}}-Elemente, die externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets referenzieren.
- {{htmlelement("script")}}-Elemente, die externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Dateien referenzieren.
- Elemente wie {{htmlelement("img")}}, {{htmlelement("video")}} und {{htmlelement("audio")}}, die Mediendateien referenzieren, die Sie in die Webseite einbetten möchten.

## Parsing von CSS und Rendern der Seite

Als nächstes betrachten wir, wie das CSS gehandhabt wird.

1. Der Browser analysiert das auf der Seite gefundene CSS (entweder im HTML-Dokument enthalten oder aus externen Stylesheets abgerufen) und sortiert die verschiedenen CSS-Stilregeln in verschiedene "Buckets", basierend darauf, auf welche HTML-Elemente (im DOM als sogenannte **Knoten** dargestellt) sie angewendet werden sollen. Der Browser fügt dann bei Bedarf Stile zu verschiedenen Elementen hinzu (dieser Zwischenschritt wird als Renderbaum bezeichnet).
2. Der Renderbaum wird in der Struktur angeordnet, in der er nach Anwendung der Regeln erscheinen sollte. Dies schließt alle Bilder und andere Medien ein, die in die Seite eingebettet werden sollen.
3. Die visuelle Anzeige der Seite wird auf dem Bildschirm angezeigt (dieser Vorgang wird Painting genannt).

Das folgende Diagramm bietet eine Visualisierung des Prozesses, den wir bisher besprochen haben:

![Überblick über den Rendering-Prozess](rendering.svg)

Zurück zu unserem Beispiel: Angenommen, das folgende CSS wird in der HTML-Datei gefunden:

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

Die einzige im CSS verfügbare Regel hat einen `span`-Selektor, sodass der Browser das CSS sehr schnell sortieren kann! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an und verleiht ihnen einen schwarzen Rahmen und einen limonengrünen Hintergrund, dann malt er die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe sieht wie folgt aus:

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## Handhabung von JavaScript

Jedes auf der Seite gefundene JavaScript (entweder im HTML-Dokument enthalten oder aus externen Skriptdateien abgerufen) wird analysiert, interpretiert, kompiliert und ausgeführt. Dies geschieht zu einem bestimmten Zeitpunkt, bevor das endgültige Seitenrendering abgeschlossen ist – schließlich kann JavaScript das Rendering beeinflussen, indem es beispielsweise Knoten zum DOM hinzufügt oder vorhandene verändert.

Zurück zu unserem Beispiel: Angenommen, das folgende JavaScript wird in der HTML-Datei gefunden:

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

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert, aber auf einem hohen Niveau findet es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in ihren Kindtextknoten um.

Die endgültige Ausgabe sieht wie folgt aus:

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## Welche weiteren Rendering-Schritte gibt es?

Während des Seitenrenderings passieren noch mehrere andere Dinge, aber wir werden sie hier nicht alle besprechen. Eine bemerkenswerte zusätzliche Vorkommnis, die erwähnenswert ist, ist, dass ein Zugänglichkeitsbaum basierend auf dem DOM erstellt wird, damit unterstützende Technologien (z. B. Screenreader) darauf zugreifen können, was es Menschen ermöglicht, die den gerenderten Inhalt nicht sehen können, mit ihm zu interagieren.

Sie werden später in unserem [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul mehr darüber erfahren.

## Der Browser: eine feindliche _und_ großartige Programmierumgebung

Die Entwicklung von Frontend-Webseiten kann manchmal frustrierend sein, und einige Leute betrachten den Browser als feindliche Programmierumgebung. Das liegt daran, dass es im Gegensatz zu anderen Programmierumgebungen viel schwieriger ist, Garantien über die Umgebung zu machen, in der Ihr Code ausgeführt werden wird. Sie können nicht im Voraus alle verschiedenen Kombinationen von Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Speicher, Akkulaufzeit usw. kennen, die Ihre Benutzer haben werden, daher können Sie keine perfekte Benutzererfahrung für alle von ihnen garantieren.

Moderne Browser neigen dazu, Webstandards ziemlich konsistent zu implementieren, aber es gibt immer noch viel Unsicherheit, die es zu navigieren gilt. Als Webentwickler müssen Sie diese Unsicherheit annehmen, defensiv programmieren und mit den Funktionen, die Sie verwenden, zurückhaltend sein. Dies stützt sich auf die [besten Praktiken](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices), die im vorherigen Artikel umrissen wurden.

Auf der anderen Seite ist das Web auch eine großartige Programmierumgebung, aus vielen Gründen.

- Zunächst einmal ist es mit universellem Zugang im Hinterkopf gestaltet. Der grundlegende Zustand des Webs ist zugänglich und verlinkbar. Einige dieser Grundlagen sind in anderen Umgebungen schwerer zu erreichen.
- Die Bereitstellung von Apps über das Web ist einfach und leistungsfähig. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie weisen sie einfach auf eine Webadresse hin und los geht's.
- App-Updates sind in der Regel unkompliziert. In vielen Fällen können Besucher neue Versionen einer Anwendung sehen, wenn sie ihren Browser-Tab neu laden. Sie müssen sich keine Sorgen machen, dass Besucher regelmäßig Software-Updates herunterladen und installieren müssen.
- Die Web-Community ist lebhaft und hilfsbereit. Wie wir später in unserem Artikel über [Recherche und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) besprechen, gibt es viele Orte, an denen Sie um Hilfe bitten können, und großartige Ressourcen, aus denen Sie lernen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
