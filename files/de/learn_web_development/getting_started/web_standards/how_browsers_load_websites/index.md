---
title: Wie Browser Webseiten laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: b8892c862d3f551de914216f0cf223882e9c5da0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir uns [einen Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) angesehen, aus denen Websites bestehen. In diesem Artikel gehen wir den Prozess durch, wie diese Technologien dargestellt werden – wenn ein Browser die Code-Dateien und andere Assets, die eine Webseite ausmachen (wie in [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) behandelt), erhalten hat, wie werden sie zusammengesetzt, um das fertige Erlebnis zu schaffen, mit dem der Benutzer interagiert?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über das Betriebssystem Ihres Computers, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die verschiedenen Arten von Assets, die in einer HTTP-Antwort zurückgegeben werden.</li>
          <li>Wie die verschiedenen Dateien vom Browser zusammengesetzt werden, um eine Webseite darzustellen, die dem Benutzer angezeigt wird.</li>
          <li>Warum der Browser manchmal als feindliche, aber auch als großartige Programmierumgebung angesehen wird.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Dateien werden in HTTP-Antworten zurückgegeben?

Um den [Überblick über Webtechnologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) zusammenzufassen, den wir im letzten Artikel betrachtet haben: HTTP-Antworten (auf Anfragen für eine Webseite) enthalten in der Regel einige der folgenden Dateitypen:

- HTML-Dateien, die den Inhalt und die Struktur der Webseite definieren.
- CSS-Dateien, die Styling- und Layout-Informationen angeben.
- JavaScript-Dateien, die das Verhalten interaktiver Teile der Webseite definieren.
- Medieninhalte wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Arten von Dateien, die der Browser nicht nativ handhaben kann und daher an eine relevante App auf dem Gerät weitergibt, um sie darzustellen, z. B. Word- oder Pages-Dokumente, PowerPoint-Präsentationen und Open-Office-Dateien.

## Rendering einer Webseite

Wenn der Benutzer zu einer neuen Webseite navigiert (indem er auf einen Link klickt oder eine Webadresse in die Adresszeile des Browsers eingibt), werden mehrere HTTP-Anfragen gesendet, und mehrere Dateien werden in HTTP-Antworten zurückgegeben. Die in diesen Antworten erhaltenen Dateien werden vom Browser verarbeitet und zu einer Webseite zusammengesetzt, mit der der Benutzer interagieren kann. Dieser Prozess des Zusammensetzens der Teile zu einer Webseite wird als **Rendering** bezeichnet.

Die folgenden Abschnitte bieten eine allgemeine Erklärung, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine stark vereinfachte Beschreibung ist und verschiedene Browser den Prozess auf unterschiedliche Weise handhaben können. Es gibt Ihnen jedoch eine Vorstellung von den Grundlagen, wie es funktioniert.

## Verarbeitung von HTML

Zunächst wird die HTML-Datei, die den Webseiteninhalt enthält und dessen Struktur definiert, vom Browser empfangen und geparst. Der Browser wandelt sie in eine baumartige Struktur um, die als **DOM-Baum** (**Document Object Model**) bezeichnet wird. Das DOM stellt die Struktur des HTML-Dokuments im Speicher des Computers dar. Nehmen Sie dieses grundlegende HTML-Snippet als Beispiel:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, Attribut und Textstück im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten werden durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwisterknoten. Der Browser würde das obige HTML analysieren und daraus den folgenden DOM-Baum erstellen:

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

Im DOM ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternknoten. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Elternknoten mit Textknoten als ihren Kindern. Wenn der Browser den oben gezeigten DOM-Baum rendert, sieht es wie folgt aus:

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Bestimmte HTML-Elemente lösen beim Parsen weitere HTTP-Anfragen aus:

- {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets verweisen.
- {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Dateien verweisen.
- Elemente wie {{htmlelement("img")}}, {{htmlelement("video")}} und {{htmlelement("audio")}}, die auf Mediendateien verweisen, die Sie in die Webseite einbetten möchten.

## CSS verarbeiten und die Seite rendern

Als nächstes schauen wir uns an, wie der Browser CSS verarbeitet.

1. Der Browser parst das CSS, das auf der Seite gefunden wird (entweder im HTML enthalten oder aus externen Stylesheets geladen), und sortiert die verschiedenen CSS-Stylingregeln in verschiedene "Buckets", basierend darauf, welche HTML-Elemente (im DOM als **Knoten** dargestellt) angewendet werden sollen. Der Browser fügt dann den verschiedenen Elementen die entsprechenden Styles hinzu (dieser Zwischenschritt wird als Render-Baum bezeichnet).
2. Der Render-Baum wird in die Struktur gebracht, in der er erscheinen soll, nachdem die Regeln angewendet wurden. Dies schließt alle Bilder und andere Mediendateien ein, die in die Seite eingebettet werden sollen.
3. Die visuelle Darstellung der Seite wird auf dem Bildschirm angezeigt (dieser Schritt wird als Painting bezeichnet).

Das folgende Diagramm bietet eine Visualisierung des bisherigen Prozesses:

![Rendering process overview](rendering.svg)

Kehren wir zu unserem Beispiel zurück: Angenommen, im HTML-Dokument wird das folgende CSS gefunden:

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

Die einzige vorhandene Regel im CSS verfügt über einen `span`-Selektor, daher kann der Browser das CSS sehr schnell sortieren! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an und gibt ihnen einen schwarzen Rahmen und einen limettengrünen Hintergrund, bevor die endgültige visuelle Darstellung auf dem Bildschirm wiedergegeben wird.

Die aktualisierte Ausgabe sieht wie folgt aus:

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## Verarbeitung von JavaScript

JavaScript, das sich auf der Seite befindet (entweder im HTML enthalten oder von externen Scriptdateien geladen), wird geparst, interpretiert, kompiliert und ausgeführt. Dies passiert zu einem gewissen Zeitpunkt, bevor die endgültige Darstellung der Seite abgeschlossen ist – schließlich kann JavaScript das Rendering beeinflussen, z. B. durch das Hinzufügen von Knoten zum DOM oder das Modifizieren bestehender.

Zurück zu unserem Beispiel: Angenommen, das folgende JavaScript befindet sich im HTML-Dokument:

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

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert, aber auf hoher Ebene findet es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in deren Kinder-Textknoten um.

Die endgültige Ausgabe sieht wie folgt aus:

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## Welche weiteren Rendering-Schritte gibt es?

Während des Seitenrenderings finden noch verschiedene andere Vorgänge statt, aber wir werden sie hier nicht alle behandeln. Eine bemerkenswerte zusätzliche Erwähnung ist, dass ein Accessibility-Tree basierend auf dem DOM erstellt wird, in den assistive Technologien (z. B. Screenreader) eingebunden werden können, sodass Menschen, die die gerenderte Darstellung nicht sehen können, damit interagieren können.

Darüber werden Sie später mehr in unserem [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul lernen.

## Der Browser: eine feindliche _und_ großartige Programmierumgebung

Die Frontend-Webentwicklung kann manchmal frustrierend sein, und einige Leute betrachten den Browser als eine feindliche Programmierumgebung. Dies liegt daran, dass es im Vergleich zu anderen Programmierumgebungen viel schwieriger ist, Garantien über die Umgebung abzugeben, auf der Ihr Code ausgeführt wird. Sie können nicht im Voraus alle möglichen Kombinationen aus Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Speicher, Akkulaufzeit usw. Ihrer Benutzer kennen und daher keine perfekte Benutzererfahrung für alle garantieren.

Moderne Browser neigen dazu, Webstandards ziemlich konsistent zu implementieren, aber es bleibt dennoch viel Unsicherheit. Als Webentwickler müssen Sie diese Unsicherheiten akzeptieren, defensiv programmieren und bei der Auswahl der Funktionen vorsichtig vorgehen. Dies basiert auf der Einhaltung der [Best Practices](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices), die im vorherigen Artikel skizziert wurden.

Auf der positiven Seite ist das Web jedoch auch eine großartige Programmierumgebung, aus vielen Gründen.

- Zum einen ist es mit universellem Zugang im Sinn gestaltet. Der grundlegende Zustand des Webs ist zugänglich und verlinkbar. Einige dieser Grundlagen sind in anderen Umgebungen schwieriger zu erreichen.
- Die App-Bereitstellung über das Web ist einfach und leistungsstark. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie weisen sie einfach auf eine Webadresse hin, und schon geht's los.
- App-Updates sind in der Regel unkompliziert. In vielen Fällen können Besucher neue Versionen einer Anwendung sehen, wenn sie ihren Browser-Tab neu laden. Sie müssen sich keine Sorgen machen, dass Besucher regelmäßig Software-Updates herunterladen und installieren müssen.
- Die Web-Community ist lebendig und hilfsbereit. Wie wir in unserem Artikel [Recherche und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) später besprechen, gibt es viele Orte, an denen Sie Hilfe suchen können, und großartige Ressourcen zum Lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
