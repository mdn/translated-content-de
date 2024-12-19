---
title: Was sind Hyperlinks?
slug: Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel erklären wir, was Hyperlinks sind und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und vertraut sein mit dem <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
        >
          Unterschied zwischen einer Webseite, einer Website, einem Webserver und einer
          Suchmaschine</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie mehr über Links im Web und warum sie wichtig sind.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Hyperlinks, meist einfach als Links bezeichnet, sind ein grundlegendes Konzept des Webs. Um zu erklären, was Links sind, müssen wir zu den Grundprinzipien der Web-Architektur zurückgehen.

Im Jahr 1989 sprach Tim Berners-Lee, der Erfinder des Webs, von den drei Säulen, auf denen das Web basiert:

1. {{Glossary("URL", "URL")}}, ein Adresssystem, das Web-Dokumente verfolgt
2. {{Glossary("HTTP", "HTTP")}}, ein Übertragungsprotokoll, um Dokumente anhand ihrer URLs zu finden
3. {{Glossary("HTML", "HTML")}}, ein Dokumentenformat, das eingebettete _Hyperlinks_ ermöglicht

Wie Sie in diesen drei Säulen sehen können, dreht sich im Web alles um Dokumente und deren Zugang. Der ursprüngliche Zweck des Webs war es, einen einfachen Weg zu bieten, um Textdokumente zu erreichen, zu lesen und durch sie zu navigieren. Seitdem hat sich das Web weiterentwickelt, um Zugriff auf Bilder, Videos und binäre Daten zu bieten, doch diese Verbesserungen haben die drei Grundsäulen kaum verändert.

Vor dem Web war es ziemlich schwierig, auf Dokumente zuzugreifen und von einem zum anderen zu wechseln. URLs, die für Menschen lesbar sind, erleichterten dies bereits, aber es ist mühsam, eine lange URL jedes Mal einzutippen, wenn Sie ein Dokument aufrufen möchten. An dieser Stelle revolutionierten Hyperlinks alles. Links können beliebige Textzeichenfolgen mit einer URL verknüpfen, sodass der Benutzer das Zieldokument sofort erreichen kann, indem er den Link aktiviert.

Links heben sich vom umgebenden Text ab, indem sie unterstrichen und in blauer Schrift dargestellt werden. Tippen oder klicken Sie auf einen Link, um ihn zu aktivieren, oder drücken Sie, wenn Sie eine Tastatur verwenden, die Tabulatortaste, bis der Link im Fokus ist, und drücken Sie die Eingabetaste oder die Leertaste.

![Beispiel für eine grundlegende Darstellung und Wirkung eines Links auf einer Webseite](link-1.png)

Links sind der Durchbruch, der das Web so nützlich und erfolgreich gemacht hat. Im restlichen Teil dieses Artikels besprechen wir die verschiedenen Arten von Links und ihre Bedeutung für modernes Webdesign.

## Ein tieferer Einblick

Wie wir gesagt haben, ist ein Link eine Textzeichenfolge, die an eine URL gebunden ist, und wir verwenden Links, um einen einfachen Sprung von einem Dokument zu einem anderen zu ermöglichen. Dennoch gibt es einige Feinheiten, die es zu beachten gilt:

### Arten von Links

- Interner Link
  - : Ein Link zwischen zwei Webseiten, wobei beide Webseiten zur gleichen Website gehören, wird als interner Link bezeichnet. Ohne interne Links gäbe es keine Website (es sei denn, es handelt sich natürlich um eine Ein-Seiten-Website).
- Externer Link
  - : Ein Link von Ihrer Webseite zu einer anderen Webseite. Ohne externe Links gäbe es kein Web, da das Web ein Netzwerk von Webseiten ist. Verwenden Sie externe Links, um Informationen bereitzustellen, die über die auf Ihrer Webseite verfügbaren Inhalte hinausgehen.
- Eingehende Links
  - : Ein Link von einer anderen Webseite zu Ihrer Seite. Es ist das Gegenteil eines externen Links. Beachten Sie, dass Sie nicht zurückverlinken müssen, wenn jemand auf Ihre Seite verlinkt.

Wenn Sie eine Website erstellen, konzentrieren Sie sich auf interne Links, da diese Ihre Seite benutzbar machen. Finden Sie ein gutes Gleichgewicht zwischen zu vielen und zu wenigen Links. Wir werden das Design der Navigation einer Website in einem anderen Artikel besprechen, aber als Faustregel gilt: Wann immer Sie eine neue Webseite hinzufügen, stellen Sie sicher, dass mindestens eine Ihrer anderen Seiten auf diese neue Seite verlinkt. Auf der anderen Seite ist es unproduktiv, auf jeder Seite auf alle anderen Seiten zu verlinken, wenn Ihre Website mehr als etwa zehn Seiten hat.

Wenn Sie gerade erst anfangen, müssen Sie sich keine großen Sorgen um externe und eingehende Links machen, aber sie sind sehr wichtig, wenn Sie möchten, dass Suchmaschinen Ihre Seite finden (lesen Sie unten für weitere Details).

### Anker

Die meisten Links verbinden zwei Webseiten. **Anker** verbinden zwei Abschnitte eines Dokuments miteinander. Wenn Sie einem Link folgen, der auf einen Anker zeigt, springt Ihr Browser zu einem anderen Teil des aktuellen Dokuments, anstatt ein neues Dokument zu laden. Allerdings erstellen und verwenden Sie Anker auf die gleiche Weise wie andere Links.

![Beispiel für eine grundlegende Darstellung und Wirkung eines Ankers auf einer Webseite](link-2.png)

### Links und Suchmaschinen

Links sind sowohl für Benutzer als auch für Suchmaschinen von Bedeutung. Jedes Mal, wenn Suchmaschinen eine Webseite durchsuchen, indexieren sie die Website, indem sie den auf der Webseite verfügbaren Links folgen. Suchmaschinen folgen nicht nur den Links, um die verschiedenen Seiten der Website zu entdecken, sondern nutzen auch den sichtbaren Text der Links, um festzustellen, welche Suchanfragen geeignet sind, um die Zielwebseite zu erreichen.

Links beeinflussen, wie rasch eine Suchmaschine auf Ihre Seite verlinken wird. Das Problem ist, dass es schwierig ist, die Aktivitäten von Suchmaschinen zu messen. Unternehmen möchten natürlich, dass ihre Seiten in den Suchergebnissen hoch eingestuft werden. Wir wissen Folgendes darüber, wie Suchmaschinen den Rang einer Seite bestimmen:

- Der _sichtbare Text_ eines Links beeinflusst, welche Suchanfragen eine bestimmte URL finden werden.
- Je mehr _eingehende Links_ eine Webseite vorweisen kann, desto höher wird sie in den Suchergebnissen eingestuft.
- _Externe Links_ beeinflussen das Suchranking sowohl der Quell- als auch der Zielwebseiten, jedoch ist unklar, in welchem Ausmaß.

[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) (Suchmaschinenoptimierung) ist die Studie darüber, wie man Websites so gestaltet, dass sie in den Suchergebnissen hoch eingestuft werden. Die Verbesserung der Verwendung von Links auf einer Website ist eine hilfreiche SEO-Technik.

## Nächste Schritte

Jetzt sollten Sie einige Webseiten mit Links einrichten.

- Um etwas mehr theoretischen Hintergrund zu erhalten, lernen Sie mehr über [URLs und ihre Struktur](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), da jeder Link auf eine URL zeigt.
- Suchen Sie etwas Praktischeres? Unser [Erstellen von Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) Tutorial erklärt detailliert, wie man Links implementiert.
