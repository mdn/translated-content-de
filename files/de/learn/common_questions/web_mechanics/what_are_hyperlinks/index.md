---
title: Was sind Hyperlinks?
slug: Learn/Common_questions/Web_mechanics/What_are_hyperlinks
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel werden wir besprechen, was Hyperlinks sind und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >
        und mit dem Unterschied zwischen einer <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
        >
          Webseite, einer Website, einem Webserver und einer
          Suchmaschine</a
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

Hyperlinks, meist einfach Links genannt, sind ein grundlegendes Konzept hinter dem Web. Um zu erklären, was Links sind, müssen wir zu den Grundlagen der Webarchitektur zurückkehren.

1989 sprach Tim Berners-Lee, der Erfinder des Webs, von den drei Säulen, auf denen das Web steht:

1. [URL](/de/docs/Glossary/URL), ein Adressensystem, das Webdokumente verfolgt
2. [HTTP](/de/docs/Glossary/HTTP), ein Übertragungsprotokoll, um Dokumente anhand ihrer URLs zu finden
3. [HTML](/de/docs/Glossary/HTML), ein Dokumentenformat, das eingebettete _Hyperlinks_ ermöglicht

Wie Sie an den drei Säulen sehen können, dreht sich im Web alles um Dokumente und deren Zugriff. Das ursprüngliche Ziel des Webs war es, einen einfachen Weg zu bieten, um Textdokumente zu erreichen, zu lesen und zu navigieren. Seitdem hat sich das Web weiterentwickelt und bietet Zugang zu Bildern, Videos und Binärdaten, aber diese Verbesserungen haben die drei Säulen kaum verändert.

Vor dem Web war es recht schwierig, auf Dokumente zuzugreifen und von einem zum anderen zu wechseln. Da URLs menschenlesbar sind, wurde vieles erleichtert, aber es ist mühsam, eine lange URL einzugeben, wann immer Sie ein Dokument aufrufen möchten. Hier haben Hyperlinks alles revolutioniert. Links können beliebige Textzeichenfolgen mit einer URL verknüpfen, sodass der Benutzer das Zieldokument unmittelbar erreichen kann, indem er den Link aktiviert.

Links heben sich durch Unterstreichung und blaue Schrift von umgebendem Text ab. Tippen oder klicken Sie auf einen Link, um ihn zu aktivieren, oder wenn Sie eine Tastatur verwenden, drücken Sie Tab, bis der Link fokussiert ist, und drücken Sie Enter oder die Leertaste.

![Beispiel für die grundlegende Anzeige und Wirkung eines Links in einer Webseite](link-1.png)

Links sind der Durchbruch, der das Web so nützlich und erfolgreich gemacht hat. Im weiteren Verlauf dieses Artikels besprechen wir die verschiedenen Linktypen und deren Bedeutung für modernes Webdesign.

## Vertiefung

Wie gesagt, ist ein Link eine Textzeichenfolge, die mit einer URL verknüpft ist, und wir verwenden Links, um einfach von einem Dokument zu einem anderen zu springen. Dennoch gibt es einige Nuancen zu beachten:

### Arten von Links

- Interner Link
  - : Ein Link zwischen zwei Webseiten, wobei beide Webseiten zur gleichen Website gehören, wird als interner Link bezeichnet. Ohne interne Links gibt es keine Website (es sei denn, es ist natürlich eine Ein-Seiten-Website).
- Externer Link
  - : Ein Link von Ihrer Webseite zu der Webseite eines anderen. Ohne externe Links gibt es kein Web, da das Web ein Netzwerk von Webseiten ist. Verwenden Sie externe Links, um Informationen außerhalb der Inhalte bereitzustellen, die durch Ihre Webseite verfügbar sind.
- Eingehende Links
  - : Ein Link von der Webseite eines anderen zu Ihrer Seite. Es ist das Gegenteil eines externen Links. Beachten Sie, dass Sie nicht zurückverlinken müssen, wenn jemand auf Ihre Seite verweist.

Wenn Sie eine Website erstellen, konzentrieren Sie sich auf interne Links, da diese Ihre Seite nutzbar machen. Finden Sie ein gutes Gleichgewicht zwischen zu vielen und zu wenigen Links. Wir werden das Design der Website-Navigation in einem anderen Artikel besprechen, aber als Regel gilt, dass Sie, wann immer Sie eine neue Webseite hinzufügen, sicherstellen, dass mindestens eine Ihrer anderen Seiten zu dieser neuen Seite verlinkt. Auf der anderen Seite, wenn Ihre Seite mehr als etwa zehn Seiten hat, ist es kontraproduktiv, von jeder Seite auf jede andere zu verlinken.

Wenn Sie anfangen, müssen Sie sich über externe und eingehende Links nicht so viele Gedanken machen, aber sie sind sehr wichtig, wenn Sie möchten, dass Suchmaschinen Ihre Seite finden (siehe unten für weitere Details).

### Anker

Die meisten Links verbinden zwei Webseiten miteinander. **Anker** verbinden zwei Abschnitte eines Dokuments miteinander. Wenn Sie einem Link folgen, der auf einen Anker zeigt, springt Ihr Browser zu einem anderen Teil des aktuellen Dokuments anstatt ein neues Dokument zu laden. Sie erstellen und verwenden Anker genauso wie andere Links.

![Beispiel für die grundlegende Anzeige und Wirkung eines Ankers in einer Webseite](link-2.png)

### Links und Suchmaschinen

Links sind sowohl für Benutzer als auch für Suchmaschinen wichtig. Jedes Mal, wenn Suchmaschinen eine Webseite durchsuchen, indexieren sie die Website, indem sie den auf der Webseite verfügbaren Links folgen. Suchmaschinen folgen nicht nur Links, um die verschiedenen Seiten der Website zu entdecken, sondern sie nutzen auch den sichtbaren Text des Links, um zu bestimmen, welche Suchanfragen geeignet sind, um die Zielwebseite zu erreichen.

Links beeinflussen, wie schnell eine Suchmaschine auf Ihre Seite verlinkt. Das Problem ist, dass es schwierig ist, die Aktivitäten der Suchmaschinen zu messen. Unternehmen wollen natürlich, dass ihre Seiten hoch in den Suchergebnissen ranken. Wir wissen folgendes darüber, wie Suchmaschinen das Ranking einer Seite bestimmen:

- Der _sichtbare Text_ eines Links beeinflusst, welche Suchanfragen eine bestimmte URL finden.
- Je mehr _eingehende Links_ eine Webseite vorweisen kann, desto höher rangiert sie in den Suchergebnissen.
- _Externe Links_ beeinflussen das Suchranking sowohl der Quell- als auch der Zielwebseiten, aber es ist unklar, in welchem Ausmaß.

[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) (Suchmaschinenoptimierung) ist das Studium, wie Websites hoch in Suchergebnissen rangieren können. Die Verbesserung der Nutzung von Links auf einer Website ist eine hilfreiche SEO-Technik.

## Nächste Schritte

Nun möchten Sie einige Webseiten mit Links einrichten.

- Um einen theoretischeren Hintergrund zu erhalten, lernen Sie über [URLs und ihre Struktur](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), da jeder Link zu einer URL führt.
- Möchten Sie etwas praktischeres? Der Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) in unserem Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) erklärt ausführlich, wie Links implementiert werden.
