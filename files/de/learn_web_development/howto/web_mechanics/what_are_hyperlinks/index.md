---
title: Was sind Hyperlinks?
slug: Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

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
        und die Unterschiede zwischen einer Webseite, einer Website, einem Webserver und einer
        Suchmaschine kennen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Mehr über Links im Web erfahren und warum sie wichtig sind.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Hyperlinks, meist einfach Links genannt, sind ein grundlegendes Konzept hinter dem Web. Um zu erklären, was Links sind, müssen wir zurück zu den grundlegenden Prinzipien der Webarchitektur gehen.

Im Jahr 1989 sprach Tim Berners-Lee, der Erfinder des Webs, von den drei Säulen, auf denen das Web basiert:

1. {{Glossary("URL", "URL")}}, ein Adresssystem, das Webdokumente nachverfolgt
2. {{Glossary("HTTP", "HTTP")}}, ein Übertragungsprotokoll, um Dokumente anhand ihrer URLs zu finden
3. {{Glossary("HTML", "HTML")}}, ein Dokumentenformat, das _Hyperlinks_ ermöglicht

Wie Sie an den drei Säulen erkennen können, dreht sich im Web alles um Dokumente und deren Zugang. Der ursprüngliche Zweck des Webs war es, einen einfachen Weg zu bieten, um Textdokumente zu erreichen, zu lesen und durch sie zu navigieren. Seitdem hat sich das Web weiterentwickelt, um Zugang zu Bildern, Videos und Binärdaten zu bieten, aber diese Verbesserungen haben die drei Säulen kaum verändert.

Vor dem Web war es ziemlich schwer, auf Dokumente zuzugreifen und von einem zum anderen zu wechseln. URLs waren schon menschenlesbar, was die Dinge erleichterte, aber es ist mühsam, eine lange URL einzutippen, wann immer man auf ein Dokument zugreifen möchte. Hier revolutionierten Hyperlinks alles. Links können beliebige Textzeichenfolgen mit einer URL verknüpfen, sodass der Benutzer das Zieldokument sofort erreichen kann, indem er den Link aktiviert.

Links heben sich durch ihre Unterstreichung und blaue Farbe vom umgebenden Text ab. Tippen oder klicken Sie auf einen Link, um ihn zu aktivieren, oder wenn Sie eine Tastatur verwenden, drücken Sie die Tabulatortaste, bis der Link im Fokus ist, und drücken Sie Enter oder Leertaste.

![Beispiel einer grundlegenden Darstellung und Wirkung eines Links auf einer Webseite](link-1.png)

Links sind die bahnbrechende Erfindung, die das Web so nützlich und erfolgreich gemacht hat. Im restlichen Artikel besprechen wir die verschiedenen Arten von Links und ihre Bedeutung für modernes Webdesign.

## Tieferer Einblick

Wie gesagt, ein Link ist eine Textzeichenfolge, die mit einer URL verknüpft ist, und wir nutzen Links, um einfach von einem Dokument zu einem anderen zu springen. Dennoch gibt es einige Nuancen, die es zu berücksichtigen gilt:

### Arten von Links

- Interne Links
  - : Ein Link zwischen zwei Webseiten, wobei beide Webseiten zur gleichen Website gehören, wird als interner Link bezeichnet. Ohne interne Links gibt es keine Website (es sei denn, es handelt sich um eine Einzelseiten-Website).
- Externe Links
  - : Ein Link von Ihrer Webseite zu einer Webseite eines anderen. Ohne externe Links gibt es kein Web, da das Web ein Netzwerk von Webseiten ist. Verwenden Sie externe Links, um Informationen über den Inhalt hinaus bereitzustellen, der über Ihre Webseite verfügbar ist.
- Eingehende Links
  - : Ein Link von der Webseite eines anderen zu Ihrer Seite. Es ist das Gegenteil eines externen Links. Beachten Sie, dass Sie nicht zurückverlinken müssen, wenn jemand auf Ihre Seite verlinkt.

Wenn Sie eine Website erstellen, konzentrieren Sie sich auf interne Links, da diese Ihre Seite nutzbar machen. Finden Sie ein gutes Gleichgewicht zwischen zu vielen und zu wenigen Links. Wir werden in einem anderen Artikel darüber sprechen, wie man die Navigation einer Website entwirft, aber als Regel gilt: Wann immer Sie eine neue Webseite hinzufügen, sollten mindestens eine Ihrer anderen Seiten auf diese neue Seite verlinken. Andererseits ist es kontraproduktiv, wenn Ihre Seite mehr als etwa zehn Seiten hat und von jeder auf jede andere verlinkt wird.

Zu Beginn müssen Sie sich nicht allzu sehr um externe und eingehende Links kümmern, aber sie sind sehr wichtig, wenn Sie möchten, dass Suchmaschinen Ihre Seite finden (siehe unten für mehr Details).

### Anker

Die meisten Links verbinden zwei Webseiten miteinander. **Anker** verbinden zwei Abschnitte eines Dokuments miteinander. Wenn Sie einem Link zu einem Anker folgen, springt Ihr Browser zu einem anderen Teil des aktuellen Dokuments, anstatt ein neues Dokument zu laden. Dennoch erstellen und verwenden Sie Anker genauso wie andere Links.

![Beispiel einer grundlegenden Darstellung und Wirkung eines Ankers auf einer Webseite](link-2.png)

### Links und Suchmaschinen

Links sind sowohl für Benutzer als auch für Suchmaschinen wichtig. Jedes Mal, wenn Suchmaschinen eine Webseite durchsuchen, indizieren sie die Website, indem sie den auf der Webseite verfügbaren Links folgen. Suchmaschinen folgen nicht nur den Links, um die verschiedenen Seiten der Website zu entdecken, sondern verwenden auch den sichtbaren Text des Links, um festzustellen, welche Suchanfragen geeignet sind, um die Zielwebseite zu erreichen.

Links beeinflussen, wie leicht eine Suchmaschine auf Ihre Seite verlinkt. Das Problem ist, dass es schwierig ist, die Aktivitäten von Suchmaschinen zu messen. Unternehmen möchten selbstverständlich, dass ihre Seiten in den Suchergebnissen hoch eingestuft werden. Wir wissen Folgendes darüber, wie Suchmaschinen die Rangfolge einer Seite bestimmen:

- Der _sichtbare Text_ eines Links beeinflusst, welche Suchanfragen eine gegebene URL finden werden.
- Je mehr _eingehende Links_ eine Webseite vorweisen kann, desto höher wird sie in den Suchergebnissen eingestuft.
- _Externe Links_ beeinflussen das Suchranking sowohl der Quell- als auch der Zielwebseiten, allerdings ist unklar, in welchem Maße.

[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) (Suchmaschinenoptimierung) ist die Studie darüber, wie man Websites in Suchergebnissen hoch bewerten kann. Die Verbesserung der Nutzung von Links auf einer Website ist eine hilfreiche SEO-Technik.

## Nächste Schritte

Jetzt möchten Sie einige Webseiten mit Links einrichten.

- Um etwas mehr theoretischen Hintergrund zu bekommen, erfahren Sie mehr über [URLs und ihre Struktur](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), da jeder Link auf eine URL verweist.
- Wollen Sie etwas praktischeres? Unser Tutorial [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) erklärt, wie man Links im Detail implementiert.
