---
title: Wie Browser Webseiten laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Im vorherigen Artikel haben wir einen [Überblick über die Technologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) betrachtet, aus denen Webseiten bestehen. In diesem Artikel gehen wir den Prozess durch, wie diese Technologien gerendert werden — wenn ein Browser die Code-Dateien und andere Ressourcen einer Webseite erhalten hat (wie in [Wie das Web funktioniert](/de/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) behandelt), wie werden sie zusammengesetzt, um das fertige Erlebnis zu schaffen, mit dem der Benutzer interagiert?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die verschiedenen Arten von Assets, die in einer HTTP-Antwort zurückgegeben werden.</li>
          <li>Wie die verschiedenen Dateien vom Browser zusammengefügt werden, um eine Webseite zu rendern, die dann dem Benutzer angezeigt wird.</li>
          <li>Warum der Browser manchmal als feindliche, aber auch als fantastische Programmierumgebung angesehen wird.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Dateien werden in HTTP-Antworten zurückgegeben?

Um das [Überblick über Webtechnologien](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) aus dem letzten Artikel zusammenzufassen: HTTP-Antworten (auf Anfragen für eine Webseite) enthalten im Allgemeinen einige der folgenden Dateitypen:

- HTML-Dateien, die den Inhalt und die Struktur der Webseite spezifizieren.
- CSS-Dateien, die Stil- und Layoutinformationen spezifizieren.
- JavaScript-Dateien, die das Verhalten der interaktiven Teile der Webseite spezifizieren.
- Medienressourcen wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}, die in Webseiten eingebettet oder anderweitig vom Browser angezeigt werden.
- Andere Arten von Dateien, die der Browser nicht direkt verarbeiten kann und daher an eine relevante App auf dem Gerät übergibt, um sie darzustellen, z. B. Word- oder Pages-Dokumente, PowerPoint-Präsentationen und Open Office-Dateien.

## Webseiten-Rendering

Wenn der Benutzer zu einer neuen Webseite navigiert (durch Klicken auf einen Link oder durch Eingabe einer Webadresse in die Adressleiste des Browsers), werden mehrere HTTP-Anfragen gesendet und mehrere Dateien in HTTP-Antworten zurückgeschickt. Die Dateien, die in diesen Antworten empfangen werden, werden vom Browser verarbeitet und zu einer Webseite zusammengefügt, mit der der Benutzer interagieren kann. Dieser Prozess des Zusammenfügens der Teile zu einer Webseite wird als **Rendering** bezeichnet.

Die folgenden Abschnitte bieten eine allgemeine Erklärung, wie ein Browser eine Webseite rendert. Beachten Sie, dass dies eine vereinfachte Beschreibung ist und dass verschiedene Browser den Prozess auf unterschiedliche Weise handhaben. Dies wird Ihnen jedoch dennoch eine Vorstellung davon geben, wie es funktioniert.

## Verarbeitung von HTML

Zu Beginn wird die HTML-Datei, die den Inhalt der Webseite enthält und ihre Struktur definiert, vom Browser empfangen und analysiert. Der Browser konvertiert sie in eine baumartige Struktur, die als **DOM-Baum** (**Document Object Model**) bezeichnet wird. Das DOM repräsentiert die Struktur des HTML-Dokuments im Speicher des Computers. Nehmen wir dieses grundlegende HTML-Snippet als Beispiel:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Jedes Element, Attribut und Textstück im HTML wird zu einem **DOM-Knoten** in der Baumstruktur. Die Knoten werden durch ihre Beziehung zu anderen DOM-Knoten definiert. Einige Elemente sind Eltern von Kindknoten, und Kindknoten haben Geschwister. Der Browser analysiert dieses HTML und erstellt daraus folgenden DOM-Baum:

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

In diesem DOM-Baum ist der Knoten, der unserem `<p>`-Element entspricht, ein Elternteil. Seine Kinder umfassen einen Textknoten und die drei Knoten, die unseren `<span>`-Elementen entsprechen. Die `SPAN`-Elemente sind ebenfalls Eltern mit Textknoten als Kinder. Wenn der Browser diesen DOM-Baum rendert, sieht er folgendermaßen aus:

{{EmbedLiveSample('Verarbeitung des HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Bestimmte HTML-Elemente lösen beim Parsen zusätzliche HTTP-Anfragen aus:

- {{htmlelement("link")}}-Elemente, die externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets referenzieren.
- {{htmlelement("script")}}-Elemente, die externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Dateien referenzieren.
- Elemente wie {{htmlelement("img")}}, {{htmlelement("video")}} und {{htmlelement("audio")}}, die Mediendateien referenzieren, die Sie in die Webseite einbetten möchten.

## Parsen von CSS und Rendering der Seite

Als nächstes wird das CSS verarbeitet.

1. Der Browser analysiert das im HTML-Code gefundene CSS (entweder eingefügt in die HTML-Datei oder aus externen Stylesheets abgerufen) und sortiert die verschiedenen CSS-Stilregeln in unterschiedliche „Eimer“, basierend darauf, auf welche HTML-Elemente (im DOM als Knoten bezeichnet) sie angewendet werden sollen. Der Browser fügt dann Stile an die verschiedenen Elemente je nach Bedarf hinzu (diesen Zwischenschritt nennt man Renderbaum).
2. Der Renderbaum wird in der Struktur angeordnet, in der er nach Anwendung der Regeln erscheinen soll. Dies schließt alle Bilder und andere Mediendateien ein, die in der Seite eingebettet werden sollen.
3. Die visuelle Anzeige der Seite wird auf dem Bildschirm gezeigt (diese Phase nennt man Painten).

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

Die einzige verfügbare Regel im CSS hat einen `span`-Selektor, sodass der Browser das CSS sehr schnell sortieren kann! Er wendet diese Regel auf jeden der drei SPAN-Knoten im DOM-Baum an und gibt ihnen einen schwarzen Rand und einen limettengrünen Hintergrund, dann malt er die endgültige visuelle Darstellung auf den Bildschirm.

Das aktualisierte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('Parsing des CSS und Rendering der Seite', '100%', 90)}}

## Verarbeitung von JavaScript

Nachdem das CSS bearbeitet wurde, wird jedes JavaScript, das auf der Seite gefunden wurde (entweder in der HTML-Datei enthalten oder aus externen Skriptdateien abgerufen), geparst, interpretiert, kompiliert und ausgeführt. Dies geschieht irgendwann, bevor die endgültige Seitenanzeige abgeschlossen ist — schließlich kann JavaScript das Rendering beeinflussen, indem es z.B. Knoten zum DOM hinzufügt oder vorhandene Knoten modifiziert.

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

Sie müssen nicht genau verstehen, wie dieses JavaScript funktioniert, aber auf hoher Ebene sucht es jeden SPAN-Knoten im DOM und kehrt die Reihenfolge der Zeichen in ihren Kindtextknoten um.

Das endgültige Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('Verarbeitung des JavaScript', '100%', 90)}}

## Welche weiteren Rendering-Schritte gibt es?

Während des Seitenrenderings passieren noch einige andere Dinge, aber wir werden hier nicht auf alle eingehen. Eine erwähnenswerte Besonderheit ist, dass ein Zugänglichkeitsbaum basierend auf dem DOM erstellt wird, mit dem unterstützende Technologien (z. B. Bildschirmlesegeräte) verbunden werden können, wodurch Menschen, die den gerenderten Inhalt nicht sehen können, mit ihm interagieren können.

Sie werden später mehr darüber in unserem [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Modul lernen.

## Der Browser: eine feindliche _und_ eine großartige Programmierumgebung

Front-End-Webentwicklung kann manchmal frustrierend sein, und einige Menschen betrachten den Browser als feindliche Programmierumgebung. Das liegt daran, dass es im Gegensatz zu anderen Programmierumgebungen viel schwieriger ist, Garantien über die Umgebung abzugeben, in der Ihr Code ausgeführt wird. Sie können nicht im Voraus alle verschiedenen Kombinationen aus Betriebssystem, Browser, Sprache, Standort, Netzwerkverbindung, CPU, GPU, Speicher, Akkulaufzeit usw. kennen, die Ihre Benutzer haben werden; daher können Sie keine perfekte Benutzererfahrung für alle garantieren.

Moderne Browser neigen dazu, Webstandards ziemlich konsistent zu implementieren, aber es gibt immer noch viel Unsicherheit zu bewältigen. Als Webentwickler müssen Sie diese Unsicherheit annehmen, defensiv programmieren und konservativ mit den von Ihnen verwendeten Funktionen umgehen. Dies erfordert, dass Sie sich an die [besten Praktiken](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices) halten, die im vorherigen Artikel skizziert wurden.

Auf der positiven Seite ist das Web auch eine großartige Programmierumgebung, aus vielen Gründen.

- Zum einen ist es für den universellen Zugang ausgelegt. Der grundlegende Zustand des Webs ist zugänglich und verlinkbar. Einige dieser Grundlagen sind in anderen Umgebungen schwieriger zu erreichen.
- Die App-Bereitstellung über das Web ist einfach und leistungsstark. Sie müssen Ihre Benutzer nicht durch einen komplizierten Installationsprozess führen: Sie verweisen sie einfach auf eine Webadresse, und los geht's.
- App-Updates sind in der Regel unkompliziert. In vielen Fällen können Besucher neue Versionen einer Anwendung sehen, wenn sie ihren Browser-Tab neu laden. Sie müssen sich keine Sorgen machen, dass Besucher regelmäßig Software-Updates herunterladen und installieren.
- Die Web-Community ist lebendig und hilfsbereit. Wie wir später in unserem [Forschung und Lernen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning)-Artikel diskutieren, gibt es viele Orte, an die Sie sich wenden können, um Hilfe zu bitten, und großartige Ressourcen, aus denen Sie lernen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
