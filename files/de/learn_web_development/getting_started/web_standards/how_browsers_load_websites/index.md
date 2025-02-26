---
title: Wie Browser Websites laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: bca4bdeae2c1e3e673c3c138b7003220b164596e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir einen [Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) betrachtet, aus denen Websites bestehen. In diesem Artikel gehen wir den Prozess durch, wie diese Technologien gerendert werden – wenn ein Browser die Code-Dateien und andere Ressourcen erhalten hat, aus denen sich eine Webseite zusammensetzt (wie in [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) behandelt), wie werden sie zusammengefügt, um das fertige Erlebnis zu schaffen, mit dem der Benutzer interagiert?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Betriebssystem, Webbrowser und Webtechnologien.
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

Um die [Übersicht über Webtechnologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) zusammenzufassen, die wir im letzten Artikel betrachtet haben, enthalten HTTP-Antworten (auf Anfragen für eine Webseite) in der Regel einige der folgenden Dateitypen:

- HTML-Dateien, die den Inhalt und die Struktur der Webseite festlegen.
- CSS-Dateien, die Styling- und Layoutinformationen festlegen.
- JavaScript-Dateien, die das Verhalten von interaktiven Teilen der Webseite festlegen.
- Medienressourcen wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Arten von Dateien, die der Browser nicht nativ verarbeiten kann und daher an eine relevante App auf dem Gerät weiterleitet, um sie darzustellen, zum Beispiel Word- oder Pages-Dokumente, PowerPoint-Präsentationen und Open-Office-Dateien.

## Webseiten-Rendering

Wenn der Benutzer zu einer neuen Webseite navigiert (indem er auf einen Link klickt oder eine Webadresse in die Adressleiste des Browsers eingibt), werden mehrere HTTP-Anfragen gesendet und mehrere Dateien in HTTP-Antworten zurückgegeben. Die in diesen Antworten empfangenen Dateien werden vom Browser verarbeitet und zu einer Webseite zusammengefügt, mit der der Benutzer interagieren kann. Dieser Prozess des Zusammenfügens der Teile zu einer Webseite wird als **Rendering** bezeichnet.

Die untenstehenden Abschnitte bieten eine allgemeine Erklärung, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine sehr vereinfachte Beschreibung ist und dass verschiedene Browser den Prozess auf unterschiedliche Weise handhaben werden. Dennoch erhalten Sie eine Vorstellung von den Grundlagen, wie die Dinge funktionieren.

## Verarbeitung von HTML

Zunächst wird die HTML-Datei, die den Inhalt der Webseite enthält und ihre Struktur definiert, vom Browser empfangen und analysiert. Der Browser konvertiert sie in eine baumartige Struktur, die als **DOM-Baum** (**Document Object Model**) bezeichnet wird. Das DOM stellt die Struktur des HTML-Dokuments im Speicher des Computers dar. Nehmen Sie dieses grundlegende HTML-Snippet als Beispiel:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, Attribut und Textstück im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten sind durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister. Der Browser würde das obige HTML analysieren und den folgenden DOM-Baum daraus erstellen:

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

Im DOM ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder sind ein Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Elternteile, mit Textknoten als ihren Kindern. Wenn der Browser den obenstehenden DOM-Baum rendert, sieht er so aus:

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

## Parsing von CSS und Rendering der Seite

Als nächstes schauen wir uns an, wie das CSS verarbeitet wird.

1. Der Browser analysiert das auf der Seite gefundene CSS (entweder im HTML-Dokument enthalten oder von externen Stylesheets abgerufen) und sortiert die verschiedenen CSS-Stilregeln in verschiedene "Eimer" basierend auf den HTML-Elementen (die im DOM als sogenannte **Knoten** dargestellt sind), auf die sie angewendet werden. Der Browser fügt dann Stile zu verschiedenen Elementen hinzu, wie erforderlich (dieser Zwischenschritt wird als Rendertree bezeichnet).
2. Der Rendertree wird in die Struktur gebracht, wie er nach der Anwendung der Regeln erscheinen soll. Dies schließt alle Bilder und andere Mediendateien ein, die in die Seite eingebettet werden sollen.
3. Die visuelle Darstellung der Seite wird auf dem Bildschirm gezeigt (dieser Schritt wird als Malen bezeichnet).

Das folgende Diagramm bietet eine Visualisierung des bisher besprochenen Prozesses:

![Rendering-Prozess Übersicht](rendering.svg)

Zurück zu unserem Beispiel, nehmen wir an, das folgende CSS befindet sich in der HTML-Datei:

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

Die einzige verfügbare Regel im CSS hat einen `span`-Selektor, daher kann der Browser das CSS sehr schnell sortieren! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an, gibt ihnen einen schwarzen Rand und einen limettengrünen Hintergrund, und malt dann die endgültige visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe ist wie folgt:

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## Verarbeitung von JavaScript

Jedes auf der Seite gefundene JavaScript (entweder im HTML-Dokument enthalten oder von externen Skriptdateien abgerufen) wird analysiert, interpretiert, kompiliert und ausgeführt. Dies geschieht zu einem bestimmten Zeitpunkt vor dem Abschluss des endgültigen Seiten-Renderings – schließlich kann einiges JavaScript das Rendering beeinflussen, indem es zum Beispiel Knoten zum DOM hinzufügt oder bestehende modifiziert.

Zurück zu unserem Beispiel, nehmen wir an, das folgende JavaScript befindet sich in der HTML-Datei:

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

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert, aber auf einer hohen Ebene findet es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in ihren Kinder-Textknoten um.

Die endgültige Ausgabe ist wie folgt:

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## Welche weiteren Rendering-Schritte gibt es?

Während des Seiten-Renderings passieren noch einige andere Dinge, aber wir werden hier nicht alle besprechen. Eine bemerkenswerte zusätzliche Vorkommnis, die es wert ist erwähnt zu werden, ist, dass ein Barrierefreiheitsbaum basierend auf dem DOM erstellt wird, in den unterstützende Technologien (zum Beispiel Bildschirmleser) eingebunden werden können, was es Menschen, die den gerenderten Inhalt nicht sehen können, ermöglicht, mit ihm zu interagieren.

Sie werden mehr darüber in unserem [Barrierefreiheits](/de/docs/Learn_web_development/Core/Accessibility)-Modul lernen.

## Der Browser: eine feindliche und eine großartige Programmierumgebung

Frontend-Webentwicklung kann manchmal frustrierend sein, und einige Leute betrachten den Browser als eine feindliche Programmierumgebung. Dies liegt daran, dass es im Gegensatz zu anderen Programmierumgebungen viel schwieriger ist, Garantien über die Umgebung zu treffen, in der Ihr Code laufen wird. Sie können nicht im Voraus alle verschiedenen Kombinationen von Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Speicher, Akkulaufzeit usw. kennen, die Ihre Benutzer haben werden. Daher können Sie nicht für alle eine perfekte Benutzererfahrung garantieren.

Moderne Browser neigen dazu, Webstandards ziemlich konsistent zu implementieren, aber es gibt immer noch viele Unsicherheiten, mit denen Sie umgehen müssen. Als Webentwickler müssen Sie diese Unsicherheit akzeptieren, defensiv programmieren und zurückhaltend mit den Funktionen sein, die Sie nutzen. Dies erfordert, dass Sie sich an die [besten Praktiken](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices) halten, die im vorherigen Artikel beschrieben wurden.

Auf der anderen Seite ist das Web auch eine großartige Programmierumgebung, aus vielen Gründen.

- Zunächst einmal ist es mit universellem Zugriff konzipiert. Der grundlegende Zustand des Webs ist zugänglich und verlinkbar. Einige dieser Grundlagen sind in anderen Umgebungen schwieriger zu erreichen.
- Die Bereitstellung von Anwendungen über das Web ist einfach und leistungsstark. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie weisen sie einfach auf eine Webadresse und los geht's.
- App-Updates sind in der Regel unkompliziert. In vielen Fällen können Besucher neue Versionen einer Anwendung sehen, wenn sie ihren Browser-Tab neu laden. Sie müssen sich keine Sorgen darüber machen, Besucher regelmäßig dazu zu bringen, Software-Updates herunterzuladen und zu installieren.
- Die Web-Community ist lebendig und hilfsbereit. Wie wir später in unserem Artikel [Forschung und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) besprechen, gibt es viele Orte, an die Sie sich wenden können, um Hilfe zu bitten, und großartige Ressourcen, aus denen Sie lernen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
