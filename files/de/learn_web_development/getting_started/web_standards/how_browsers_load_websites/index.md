---
title: Wie Browser Websites laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: 7edaecc85b639bb2b75cdb7722312fa0b0137476
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir einen [Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) behandelt, aus denen Websites bestehen. In diesem Artikel gehen wir den Prozess durch, bei dem diese Technologien gerendert werden - nachdem ein Browser die Code-Dateien und andere Ressourcen empfangen hat, die eine Webseite ausmachen (wie in [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) behandelt), wie werden diese zusammengefügt, um das fertige Erlebnis zu schaffen, mit dem der Benutzer interagiert?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Ihrem Computerbetriebssystem, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die verschiedenen Arten von Assets, die in einer HTTP-Antwort zurückgegeben werden.</li>
          <li>Wie die verschiedenen Dateien vom Browser zusammengestellt werden, um eine Webseite zu rendern, die dann dem Benutzer angezeigt wird.</li>
          <li>Warum der Browser manchmal als feindliche Programmierumgebung angesehen wird, aber auch als großartige Programmierumgebung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Dateien werden in HTTP-Antworten zurückgegeben?

Um den [Überblick über Webtechnologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies), den wir im letzten Artikel betrachtet haben, zusammenzufassen: HTTP-Antworten (auf Anfragen für eine Webseite) enthalten im Allgemeinen einige der folgenden Dateitypen:

- HTML-Dateien, die den Inhalt und die Struktur der Webseite spezifizieren.
- CSS-Dateien, die Styling- und Layout-Informationen angeben.
- JavaScript-Dateien, die das Verhalten interaktiver Teile der Webseite spezifizieren.
- Medienassets wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Arten von Dateien, die der Browser nicht nativ handhaben kann und daher an eine relevante App auf dem Gerät zur Darstellung weitergibt, wie z.B. Word- oder Pages-Dokumente, PowerPoint-Präsentationen und Open Office-Dateien.

## Rendering von Webseiten

Wenn der Benutzer zu einer neuen Webseite navigiert (indem er auf einen Link klickt oder eine Webadresse in die Adressleiste des Browsers eingibt), werden mehrere HTTP-Anfragen gesendet und mehrere Dateien werden in HTTP-Antworten zurückgesendet. Die in diesen Antworten empfangenen Dateien werden vom Browser verarbeitet und zu einer Webseite zusammengefügt, mit der der Benutzer interagieren kann. Dieser Prozess des Zusammenstellens der Teile zu einer Webseite wird als **Rendering** bezeichnet.

Die folgenden Abschnitte bieten eine allgemeine Erklärung, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine vereinfachte Beschreibung ist und dass unterschiedliche Browser den Prozess unterschiedlich handhaben können. Dennoch gibt dies eine Vorstellung davon, wie die Dinge funktionieren.

## Umgang mit HTML

Zunächst wird die HTML-Datei, die den Webseiteninhalt enthält und ihre Struktur definiert, vom Browser empfangen und geparst. Der Browser wandelt sie in eine baumartige Struktur um, die als **DOM-Baum** (**Document Object Model**) bezeichnet wird. Das DOM stellt die Struktur des HTML-Dokuments im Speicher des Computers dar. Nehmen Sie beispielsweise dieses grundlegende HTML-Snippet:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, Attribut und jedes Textstück im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten werden durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister. Der Browser wird dieses HTML parsen und daraus den folgenden DOM-Baum erstellen:

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

In diesem DOM-Baum ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder umfassen einen Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Eltern, mit Textknoten als ihren Kindern. Wenn der Browser diesen DOM-Baum rendert, sieht er so aus:

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Beim Parsen bestimmter HTML-Elemente werden zusätzliche HTTP-Anfragen ausgelöst:

- {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics) Stylesheets verweisen.
- {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting) Dateien verweisen.
- Elemente wie {{htmlelement("img")}}, {{htmlelement("video")}} und {{htmlelement("audio")}}, die auf Mediendateien verweisen, die Sie in die Webseite einbetten möchten.

## CSS-Parsen und Rendern der Seite

Als nächstes schauen wir uns an, wie mit CSS umgegangen wird.

1. Der Browser parst das CSS, das auf der Seite gefunden wurde (entweder im HTML-Dokument enthalten oder aus externen Stylesheets abgerufen) und ordnet die verschiedenen CSS-Styling-Regeln in unterschiedliche "Buckets" ein, je nachdem, auf welche HTML-Elemente (im DOM als Knoten dargestellt) sie angewendet werden. Der Browser weist dann die erforderlichen Stile den verschiedenen Elementen zu (dieser Zwischenschritt wird als Renderbaum bezeichnet).
2. Der Renderbaum wird in der Struktur angeordnet, in der er erscheinen soll, nachdem die Regeln angewendet wurden. Dies umfasst auch alle Bilder und andere Mediendateien, die in die Seite eingebettet werden sollen.
3. Die visuelle Darstellung der Seite wird auf dem Bildschirm angezeigt (dieses Stadium wird Painting genannt).

Das folgende Diagramm bietet eine Visualisierung des Prozesses, den wir bisher besprochen haben:

![Rendering-Prozessübersicht](rendering.svg)

Zurück zu unserem Beispiel: Angenommen, folgendes CSS wird in der HTML-Datei gefunden:

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

Die einzige verfügbare Regel im CSS hat einen `span`-Selektor, sodass der Browser das CSS sehr schnell sortieren kann! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an, gibt ihnen einen schwarzen Rahmen und einen limettengrünen Hintergrund und malt dann die finale visuelle Darstellung auf den Bildschirm.

Die aktualisierte Ausgabe ist wie folgt:

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## Umgang mit JavaScript

Jedes auf der Seite gefundene JavaScript (entweder im HTML-Dokument enthalten oder aus externen Skriptdateien abgerufen) wird geparst, interpretiert, kompiliert und ausgeführt. Dies geschieht zu einem bestimmten Zeitpunkt, bevor die endgültige Seitendarstellung abgeschlossen ist - schließlich kann JavaScript das Rendering beeinflussen, z.B. durch Hinzufügen oder Ändern von Knoten im DOM.

Zurück zu unserem Beispiel: Angenommen, folgendes JavaScript wird in der HTML-Datei gefunden:

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

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert, aber im Großen und Ganzen findet es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in ihren Kindtextknoten um.

Die endgültige Ausgabe ist wie folgt:

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## Welche weiteren Renderingschritte gibt es?

Während des Renderns einer Seite passiert noch einiges, aber wir werden hier nicht alles besprechen. Ein bemerkenswertes zusätzliches Ereignis, das erwähnt werden sollte, ist, dass ein Accessibility-Baum basierend auf dem DOM erstellt wird, in den unterstützende Technologien (z.B. Bildschirmlesegeräte) eingebunden werden können, sodass Menschen, die nicht in der Lage sind, die gerenderten Inhalte zu sehen, mit ihnen interagieren können.

Sie werden später in unserem [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) Modul mehr darüber erfahren.

## Der Browser: eine feindliche _und_ großartige Programmierumgebung

Die Webentwicklung auf der Client-Seite kann manchmal frustrierend sein, und einige Menschen betrachten den Browser als eine feindliche Programmierumgebung. Dies liegt daran, dass es im Gegensatz zu anderen Programmierumgebungen viel schwieriger ist, Garantien über die Umgebung abzugeben, in der Ihr Code ausgeführt wird. Sie können die verschiedenen Kombinationen von Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Arbeitsspeicher, Batterielebensdauer usw. Ihrer Benutzer nicht im Voraus kennen, daher können Sie kein perfektes Benutzererlebnis für alle garantiert gewährleisten.

Moderne Browser neigen dazu, Webstandards ziemlich konsistent zu implementieren, aber es gibt immer noch viele Unsicherheiten zu bewältigen. Als Webentwickler müssen Sie diese Unsicherheit annehmen, defensiv programmieren und vorsichtig mit den Funktionen sein, die Sie verwenden. Dies beruht auf der Einhaltung der im vorherigen Artikel skizzierten [Best Practices](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices).

Auf der positiven Seite ist das Web auch eine großartige Programmierumgebung, aus vielen Gründen.

- Zunächst einmal ist es auf universellen Zugang ausgelegt. Der grundlegende Zustand des Webs ist zugänglich und verlinkbar. Einige dieser Grundlagen sind in anderen Umgebungen schwerer zu erreichen.
- Die Bereitstellung von Anwendungen über das Web ist einfach und leistungsfähig. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie weisen sie einfach auf eine Webadresse hin und schon geht es los.
- App-Aktualisierungen sind in der Regel unkompliziert. In vielen Fällen können Besucher neue Versionen einer Anwendung sehen, wenn sie ihren Browser-Tab neu laden. Sie müssen sich keine Sorgen machen, dass Besucher regelmäßig Software-Updates herunterladen und installieren müssen.
- Die Web-Community ist lebendig und hilfsbereit. Wie wir später in unserem Artikel [Forschung und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) diskutieren, gibt es viele Orte, an die Sie sich wenden können, um Hilfe zu erhalten, und großartige Ressourcen, von denen Sie lernen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
