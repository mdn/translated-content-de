---
title: Was sind Hyperlinks?
slug: Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

In diesem Artikel werden wir erläutern, was Hyperlinks sind und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und den Unterschied zwischen einer Webseite, einer Website, einem
        Webserver und einer Suchmaschine kennen. <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
        >
          </a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen Sie die Bedeutung von Links im Web.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Hyperlinks, oft einfach Links genannt, sind ein Grundkonzept des Webs. Um zu erklären, was Links sind, müssen wir zu den Grundlagen der Web-Architektur zurückkehren.

1989 sprach Tim Berners-Lee, der Erfinder des Webs, von den drei Säulen, auf denen das Web steht:

1. {{Glossary("URL", "URL")}}, ein Adresssystem, das Webdokumente verwaltet
2. {{Glossary("HTTP", "HTTP")}}, ein Übertragungsprotokoll, um Dokumente anhand ihrer URLs zu finden
3. {{Glossary("HTML", "HTML")}}, ein Dokumentenformat, das eingebettete _Hyperlinks_ ermöglicht

Wie Sie an den drei Säulen sehen können, dreht sich im Web alles um Dokumente und deren Zugänglichkeit. Der ursprüngliche Zweck des Webs war es, einen einfachen Weg zu bieten, um Textdokumente zu erreichen, zu lesen und durch diese zu navigieren. Seitdem hat sich das Web weiterentwickelt, um Zugriff auf Bilder, Videos und Binärdaten zu bieten, aber diese Verbesserungen haben die drei Säulen kaum verändert.

Vor dem Web war es sehr schwierig, auf Dokumente zuzugreifen und von einem zum anderen zu wechseln. URLs, die für Menschen lesbar sind, haben dies bereits erleichtert, aber es ist mühsam, eine lange URL einzugeben, wann immer Sie auf ein Dokument zugreifen möchten. Hier haben Hyperlinks alles revolutioniert. Links können jede Textzeichenfolge mit einer URL verknüpfen, so dass der Benutzer durch Aktivierung des Links sofort das Zieldokument erreichen kann.

Links heben sich vom umgebenden Text durch Unterstreichung und blaue Schrift ab. Tippen oder klicken Sie auf einen Link, um ihn zu aktivieren, oder wenn Sie eine Tastatur verwenden, drücken Sie die Tabulatortaste, bis der Link fokussiert ist, und drücken Sie die Eingabe- oder Leertaste.

![Beispiel für grundlegende Darstellung und Effekt eines Links auf einer Webseite](link-1.png)

Links sind der Durchbruch, der das Web so nützlich und erfolgreich gemacht hat. Im weiteren Verlauf dieses Artikels erörtern wir die verschiedenen Arten von Links und ihre Bedeutung für modernes Webdesign.

## Tiefergehende Betrachtung

Wie bereits erwähnt, ist ein Link ein Textzeichenstring, der mit einer URL verknüpft ist, und wir verwenden Links, um einen einfachen Sprung von einem Dokument zum anderen zu ermöglichen. Dabei gibt es jedoch einige Nuancen, die es zu berücksichtigen gilt:

### Arten von Links

- Interner Link
  - : Ein Link zwischen zwei Webseiten, wobei beide Webseiten zur gleichen Website gehören, wird als interner Link bezeichnet. Ohne interne Links gibt es keine Website (es sei denn, es handelt sich natürlich um eine Ein-Seiten-Website).
- Externer Link
  - : Ein Link von Ihrer Webseite zu einer anderen Webseite. Ohne externe Links gäbe es kein Web, da das Web ein Netzwerk von Webseiten ist. Verwenden Sie externe Links, um Informationen zusätzlich zu den auf Ihrer Webseite verfügbaren Inhalten bereitzustellen.
- Eingehende Links
  - : Ein Link von einer anderen Webseite zu Ihrer Seite. Es ist das Gegenteil eines externen Links. Beachten Sie, dass Sie nicht zurückverlinken müssen, wenn jemand auf Ihre Seite verlinkt.

Wenn Sie eine Website erstellen, konzentrieren Sie sich auf interne Links, da diese Ihre Seite benutzerfreundlich machen. Finden Sie ein gutes Gleichgewicht zwischen zu vielen und zu wenigen Links. Wir werden das Design von Websitenavigation in einem anderen Artikel besprechen, aber als Regel gilt: Wann immer Sie eine neue Webseite hinzufügen, stellen Sie sicher, dass mindestens eine Ihrer anderen Seiten auf diese neue Seite verlinkt. Wenn Ihre Webseite mehr als etwa zehn Seiten hat, ist es ineffizient, von jeder Seite auf jede andere Seite zu verlinken.

Zu Beginn müssen Sie sich nicht so sehr um externe und eingehende Links kümmern, aber sie sind sehr wichtig, wenn Sie möchten, dass Suchmaschinen Ihre Seite finden (siehe unten für mehr Details).

### Anker

Die meisten Links verbinden zwei Webseiten. **Anker** verbinden zwei Abschnitte eines Dokuments. Wenn Sie einem Link zu einem Anker folgen, springt Ihr Browser an eine andere Stelle im aktuellen Dokument, anstatt ein neues Dokument zu laden. Sie erstellen und verwenden Anker auf die gleiche Weise wie andere Links.

![Beispiel für grundlegende Darstellung und Effekt eines Ankers auf einer Webseite](link-2.png)

### Links und Suchmaschinen

Links sind sowohl für Benutzer als auch für Suchmaschinen wichtig. Jedes Mal, wenn Suchmaschinen eine Webseite durchforsten, indexieren sie die Website, indem sie den auf der Webseite verfügbaren Links folgen. Suchmaschinen folgen nicht nur den Links, um die verschiedenen Seiten der Website zu entdecken, sondern verwenden auch den sichtbaren Text der Links, um zu bestimmen, welche Suchanfragen geeignet sind, um die Zielwebseite zu erreichen.

Links beeinflussen, wie bereitwillig eine Suchmaschine auf Ihre Seite verlinkt. Das Problem ist, dass es schwierig ist, die Aktivitäten von Suchmaschinen zu messen. Unternehmen wollen natürlich, dass ihre Webseiten in den Suchergebnissen ganz oben stehen. Folgendes wissen wir darüber, wie Suchmaschinen das Ranking einer Website bestimmen:

- Der _sichtbare Text_ eines Links beeinflusst, welche Suchanfragen eine bestimmte URL finden.
- Je mehr _eingehende Links_ eine Webseite aufweisen kann, desto höher wird sie in den Suchergebnissen bewertet.
- _Externe Links_ beeinflussen das Suchranking sowohl der Quell- als auch der Zielwebseiten, aber es ist unklar, in welchem Ausmaß.

[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) (Suchmaschinenoptimierung) ist das Studium der Techniken, um Webseiten in den Suchergebnissen hoch zu platzieren. Die Verbesserung der Verwendung von Links auf einer Website ist eine hilfreiche SEO-Technik.

## Nächste Schritte

Jetzt sollten Sie einige Webseiten mit Links einrichten.

- Um mehr theoretisches Hintergrundwissen zu erhalten, erfahren Sie mehr über [URLs und deren Struktur](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), da jeder Link auf eine URL verweist.
- Möchten Sie etwas Praktischeres? Unser [Links erstellen](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) Tutorial erklärt im Detail, wie man Links implementiert.
