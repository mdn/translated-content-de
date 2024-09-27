---
title: Was sind Hyperlinks?
slug: Learn/Common_questions/Web_mechanics/What_are_hyperlinks
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel besprechen wir, was Hyperlinks sind und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und mit <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
        >
          dem Unterschied zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine</a
        > vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie mehr über Links im Web und warum sie wichtig sind.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Hyperlinks, oft einfach Links genannt, sind ein grundlegendes Konzept des Webs. Um zu erklären, was Links sind, müssen wir zu den Grundlagen der Webarchitektur zurückkehren.

1989 sprach Tim Berners-Lee, der Erfinder des Webs, von den drei Säulen, auf denen das Web steht:

1. [URL](/de/docs/Glossary/URL), ein Adresssystem, das Webdokumente nachverfolgt
2. [HTTP](/de/docs/Glossary/HTTP), ein Übertragungsprotokoll, um Dokumente anhand ihrer URLs zu finden
3. [HTML](/de/docs/Glossary/HTML), ein Dokumentformat, das eingebettete _Hyperlinks_ ermöglicht

Wie Sie an den drei Säulen erkennen können, dreht sich alles im Web um Dokumente und deren Zugriff. Ursprünglich sollte das Web einen einfachen Weg bieten, um auf Textdokumente zuzugreifen, sie zu lesen und zu navigieren. Seitdem hat sich das Web weiterentwickelt und bietet Zugriff auf Bilder, Videos und binäre Daten, aber diese Verbesserungen haben die drei Säulen kaum verändert.

Vor dem Web war es ziemlich schwer, auf Dokumente zuzugreifen und von einem zum anderen zu wechseln. URLs, die menschlich lesbar sind, haben dies bereits erleichtert, aber es ist mühsam, eine lange URL jedes Mal einzugeben, wenn Sie auf ein Dokument zugreifen möchten. Hier revolutionierten Hyperlinks alles. Links können beliebige Textzeichenfolgen mit einer URL korrelieren, sodass der Benutzer das Zieldokument durch Aktivieren des Links sofort erreichen kann.

Links heben sich vom umgebenden Text ab, indem sie unterstrichen und in blauer Schrift dargestellt werden. Tippen oder klicken Sie auf einen Link, um ihn zu aktivieren, oder wenn Sie die Tastatur verwenden, drücken Sie die Tabulatortaste, bis der Link im Fokus steht, und drücken Sie Enter oder die Leertaste.

![Beispiel für die grundlegende Darstellung und Wirkung eines Links auf einer Webseite](link-1.png)

Links sind der Durchbruch, der das Web so nützlich und erfolgreich gemacht hat. Im Rest dieses Artikels besprechen wir die verschiedenen Arten von Links und ihre Bedeutung für modernes Webdesign.

## Tieferer Einblick

Wie bereits gesagt, ist ein Link eine Textzeichenfolge, die mit einer URL verknüpft ist, und wir verwenden Links, um das einfache Springen von einem Dokument zum anderen zu ermöglichen. Es gibt jedoch einige Nuancen, die es zu beachten gilt:

### Arten von Links

- Interner Link
  - : Ein Link zwischen zwei Webseiten, wobei beide Webseiten zur selben Website gehören, wird als interner Link bezeichnet. Ohne interne Links gibt es keine Website (es sei denn, es handelt sich natürlich um eine Ein-Seiten-Website).
- Externer Link
  - : Ein Link von Ihrer Webseite zu einer anderen Webseite. Ohne externe Links gibt es kein Web, da das Web ein Netzwerk von Webseiten ist. Verwenden Sie externe Links, um Informationen bereitzustellen, die über den Inhalt Ihrer Webseite hinausgehen.
- Eingehende Links
  - : Ein Link von einer anderen Webseite zu Ihrer Seite. Es ist das Gegenteil eines externen Links. Beachten Sie, dass Sie nicht zurückverlinken müssen, wenn jemand auf Ihre Seite verlinkt.

Wenn Sie eine Website erstellen, konzentrieren Sie sich auf interne Links, da diese Ihre Seite nutzbar machen. Finden Sie ein gutes Gleichgewicht zwischen zu vielen und zu wenigen Links. Wir werden das Design der Website-Navigation in einem anderen Artikel besprechen, aber als Regel gilt: Wann immer Sie eine neue Webseite hinzufügen, stellen Sie sicher, dass mindestens eine Ihrer anderen Seiten auf diese neue Seite verlinkt. Auf der anderen Seite ist es kontraproduktiv, mehr als etwa zehn Seiten miteinander zu verlinken.

Wenn Sie anfangen, müssen Sie sich nicht so sehr um externe und eingehende Links kümmern, aber sie sind sehr wichtig, wenn Sie möchten, dass Suchmaschinen Ihre Seite finden (siehe unten für weitere Details).

### Anker

Die meisten Links verbinden zwei Webseiten miteinander. **Anker** verbinden zwei Abschnitte eines Dokuments miteinander. Wenn Sie einem Link zu einem Anker folgen, springt Ihr Browser zu einem anderen Teil des aktuellen Dokuments, anstatt ein neues zu laden. Sie erstellen und verwenden Anker auf die gleiche Weise wie andere Links.

![Beispiel für die grundlegende Darstellung und Wirkung eines Ankers auf einer Webseite](link-2.png)

### Links und Suchmaschinen

Links sind sowohl für Benutzer als auch für Suchmaschinen wichtig. Jedes Mal, wenn Suchmaschinen eine Webseite durchsuchen, indexieren sie die Website, indem sie den auf der Webseite verfügbaren Links folgen. Suchmaschinen folgen nicht nur den Links, um die verschiedenen Seiten der Website zu entdecken, sondern verwenden auch den sichtbaren Text des Links, um zu bestimmen, welche Suchanfragen sich eignen, um die Zielwebseite zu erreichen.

Links beeinflussen, wie bereitwillig eine Suchmaschine Ihre Seite verlinkt. Das Problem ist, dass es schwierig ist, die Aktivitäten von Suchmaschinen zu messen. Unternehmen möchten naturgemäß, dass ihre Seiten hoch in den Suchergebnissen ranken. Wir wissen Folgendes darüber, wie Suchmaschinen den Rang einer Seite bestimmen:

- Der _sichtbare Text_ eines Links beeinflusst, welche Suchanfragen eine gegebene URL finden.
- Je mehr _eingehende Links_ eine Webseite aufweisen kann, desto höher rankt sie in den Suchergebnissen.
- _Externe Links_ beeinflussen das Suchranking sowohl der Quell- als auch der Zielwebseiten, aber es ist unklar, wie stark.

[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) (Suchmaschinenoptimierung) ist das Studium, wie man Webseiten für ein hohes Ranking in den Suchergebnissen optimiert. Die Verbesserung der Nutzung von Links auf einer Website ist eine hilfreiche SEO-Technik.

## Nächste Schritte

Nun möchten Sie einige Webseiten mit Links einrichten.

- Um mehr theoretischen Hintergrund zu erhalten, lernen Sie über [URLs und ihre Struktur](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), da jeder Link auf eine URL verweist.
- Möchten Sie etwas Praxisnäheres? Der Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) aus unserem Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) erklärt im Detail, wie Links implementiert werden.
