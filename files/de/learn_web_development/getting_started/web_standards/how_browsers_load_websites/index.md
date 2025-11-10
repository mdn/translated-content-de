---
title: Wie Browser Websites laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: cab1109a0c225299a9fb2b3402bcd4a1931b8ab7
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir uns einen [Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) angesehen, aus denen Websites bestehen. In diesem Artikel gehen wir den Prozess durch, wie diese Technologien gerendert werden - wenn ein Browser die Code-Dateien und andere Assets erhalten hat, die eine Webseite ausmachen (wie in [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) behandelt), wie werden sie zusammengesetzt, um das fertige Erlebnis zu schaffen, mit dem der Benutzer interagiert?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, Webbrowsern und Webtechnologien.
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

Um den [Überblick über Web-Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) zusammenzufassen, den wir im letzten Artikel betrachtet haben: HTTP-Antworten (auf Anfragen nach einer Webseite) enthalten im Allgemeinen einige der folgenden Dateitypen:

- HTML-Dateien, die den Inhalt der Webseite und ihre Struktur festlegen.
- CSS-Dateien, die Styling- und Layout-Informationen festlegen.
- JavaScript-Dateien, die das Verhalten der interaktiven Teile der Webseite festlegen.
- Medienassets wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Arten von Dateien, die der Browser nicht nativ handhaben kann und daher an eine relevante App auf dem Gerät zum Rendern weitergibt, beispielsweise Word- oder Pages-Dokumente, PowerPoint-Präsentationen und Open-Office-Dateien.

## Rendering der Webseite

Wenn der Benutzer zu einer neuen Webseite navigiert (durch Klicken auf einen Link oder Eingabe einer Webadresse in die Adressleiste des Browsers), werden mehrere HTTP-Anfragen gesendet, und mehrere Dateien werden in HTTP-Antworten zurückgesendet. Die in diesen Antworten empfangenen Dateien werden vom Browser verarbeitet und zu einer Webseite zusammengesetzt, mit der der Benutzer interagieren kann. Dieser Prozess, die Teile zu einer Webseite zusammenzusetzen, wird als **Rendering** bezeichnet.

Die folgenden Abschnitte bieten eine hochrangige Erklärung, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine vereinfachte Beschreibung ist und dass verschiedene Browser den Prozess auf unterschiedliche Weise handhaben. Dies wird Ihnen jedoch dennoch eine Vorstellung davon geben, wie die Dinge funktionieren.

## Verarbeitung von HTML

Zu Beginn wird die HTML-Datei, die den Inhalt der Webseite enthält und ihre Struktur definiert, vom Browser empfangen und analysiert. Der Browser konvertiert sie in eine baumartige Struktur, die als **DOM-Baum** (**Document Object Model**) bezeichnet wird. Das DOM repräsentiert die Struktur des HTML-Dokuments im Speicher des Computers. Nehmen Sie dieses einfache HTML-Snippet als Beispiel:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, Attribut und Textstück im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten sind durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister. Der Browser analysiert dieses HTML und erstellt daraus den folgenden DOM-Baum:

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

In diesem DOM-Baum ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder umfassen einen Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Knoten sind ebenfalls Elternteile, mit Textknoten als ihren Kindern. Wenn der Browser diesen DOM-Baum rendert, sieht er folgendermaßen aus:

{{EmbedLiveSample('Verarbeitung des HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Bestimmte HTML-Elemente lösen beim Analysieren zusätzliche HTTP-Anfragen aus:

- {{htmlelement("link")}}-Elemente, die externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets referenzieren.
- {{htmlelement("script")}}-Elemente, die externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Dateien referenzieren.
- Elemente wie {{htmlelement("img")}}, {{htmlelement("video")}} und {{htmlelement("audio")}}, die Mediendateien referenzieren, die Sie auf der Webseite einbetten möchten.

## Parsing von CSS und Rendering der Seite

Als nächstes wird das CSS behandelt.

1. Der Browser analysiert das auf der Seite gefundene CSS (entweder im HTML-Dokument enthalten oder von externen Stylesheets abgerufen) und sortiert die verschiedenen CSS-Stilregeln in "Eimer" basierend darauf, auf welche HTML-Elemente (im DOM als Knoten dargestellt) sie angewendet werden sollen. Der Browser wendet dann die Stile auf verschiedene Elemente nach Bedarf an (dieser Zwischenschritt wird als Rendering-Baum bezeichnet).
2. Der Rendering-Baum wird in der Struktur gestaltet, wie er angezeigt werden soll, nachdem die Regeln angewendet wurden. Dies schließt Bilder und andere Mediendateien ein, die in die Seite eingebettet werden sollen.
3. Die visuelle Anzeige der Seite wird auf dem Bildschirm dargestellt (dieser Schritt wird als "Painting" bezeichnet).

Das folgende Diagramm bietet eine Visualisierung des bisher behandelten Prozesses:

![Rendering-Prozess Überblick](rendering.svg)

Um zu unserem Beispiel zurückzukehren: Angenommen, das folgende CSS ist in der HTML-Datei enthalten:

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

Die einzige verfügbare Regel im CSS hat einen `span`-Selektor, daher kann der Browser das CSS sehr schnell sortieren! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an und gibt ihnen einen schwarzen Rahmen und einen limettengrünen Hintergrund, dann wird die endgültige visuelle Darstellung auf den Bildschirm gemalt.

Die aktualisierte Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample('Parsing von CSS und Rendering der Seite', '100%', 90)}}

## Verarbeitung von JavaScript

Nachdem das CSS behandelt wurde, wird jedes JavaScript, das auf der Seite gefunden wird (entweder im HTML-Dokument enthalten oder von externen Skriptdateien abgerufen), analysiert, interpretiert, kompiliert und ausgeführt. Dies geschieht an einem bestimmten Punkt, bevor das endgültige Rendering der Seite abgeschlossen ist – schließlich kann JavaScript das Rendering beeinflussen, indem beispielsweise Knoten zum DOM hinzugefügt oder bestehende geändert werden.

Zurück zu unserem Beispiel, sagen wir, das folgende JavaScript wird in der HTML-Datei gefunden:

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

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert, aber auf hoher Ebene findet es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in ihren Kind-Textknoten um.

Die endgültige Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample('Verarbeitung von JavaScript', '100%', 90)}}

## Welche anderen Rendering-Schritte gibt es?

Es gibt mehrere andere Vorgänge während des Renderings einer Seite, die wir hier nicht alle besprechen werden. Erwähnenswert ist jedoch, dass basierend auf dem DOM ein Barrierefreiheit-Baum erstellt wird, in den Hilfstechnologien (z. B. Bildschirmleser) eingreifen können, was Menschen, die nicht in der Lage sind, den gerenderten Inhalt zu sehen, ermöglicht, damit zu interagieren.

Später in unserem [Barrierefreiheitsmodul](/de/docs/Learn_web_development/Core/Accessibility) werden Sie mehr darüber erfahren.

## Der Browser: Eine feindliche _und_ eine großartige Programmierumgebung

Die Frontend-Webentwicklung kann manchmal frustrierend sein, und einige Leute betrachten den Browser als feindliche Programmierumgebung. Dies liegt daran, dass es im Gegensatz zu anderen Programmierumgebungen viel schwerer ist, Garantien über die Umgebung zu geben, in der Ihr Code ausgeführt wird. Sie können nicht im Voraus alle verschiedenen Kombinationen von Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Speicher, Akkulaufzeit usw. kennen, die Ihre Benutzer haben werden, daher können Sie kein perfektes Benutzererlebnis für alle garantieren.

Moderne Browser neigen dazu, Web-Standards ziemlich einheitlich zu implementieren, aber es gibt immer noch viel Unsicherheit zu bewältigen. Als Webentwickler müssen Sie diese Unsicherheit akzeptieren, defensiv programmieren und vorsichtig mit den Features umgehen, die Sie verwenden. Dies setzt voraus, dass Sie sich an die [besten Praktiken](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices) halten, die im vorherigen Artikel erläutert wurden.

Auf der anderen Seite ist das Web auch eine großartige Programmierumgebung aus vielen Gründen.

- Zu Beginn ist es mit Blick auf universellen Zugriff gestaltet. Der grundlegende Zustand des Webs ist zugänglich und verlinkbar. Einige dieser Grundsätze sind in anderen Umgebungen schwerer zu erreichen.
- Die Bereitstellung von Apps über das Web ist einfach und leistungsstark. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie verweisen sie einfach auf eine Webadresse und weiter geht's.
- App-Updates sind in der Regel unkompliziert. In vielen Fällen können Besucher neue Versionen einer Anwendung sehen, wenn sie ihren Browsertab neu laden. Sie müssen sich keine Sorgen darüber machen, dass Besucher regelmäßig Software-Updates herunterladen und installieren.
- Die Web-Community ist lebendig und hilfsbereit. Wie wir später in unserem Artikel [Recherche und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) besprechen, gibt es viele Orte, an die Sie sich wenden können, um Hilfe zu erhalten, und großartige Ressourcen, aus denen Sie lernen können.

## Siehe auch

- [Wann und wie man Fehler bei Browsern meldet](/de/docs/Learn_web_development/Howto/Web_mechanics/File_browser_bugs)
  - : Wenn etwas in einem Browser nicht funktioniert wie erwartet, könnte es sich um einen Browser-Fehler handeln. Dieser Artikel erklärt, wie man herausfindet, ob dem so ist, und wie man einen Fehlerbericht einreicht, falls ja.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
