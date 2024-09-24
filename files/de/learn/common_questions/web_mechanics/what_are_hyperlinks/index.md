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
        und mit dem Unterschied zwischen <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
        >
          einer Webseite, einer Website, einem Webserver und einer Suchmaschine</a
        > vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie mehr über Links im Web und warum sie wichtig sind.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Hyperlinks, üblicherweise Links genannt, sind ein grundlegendes Konzept des Webs. Um zu erklären, was Links sind, müssen wir zu den Grundlagen der Webarchitektur zurückkehren.

Im Jahr 1989 sprach Tim Berners-Lee, der Erfinder des Webs, von den drei Säulen, auf denen das Web basiert:

1. {{Glossary("URL")}}, ein Adresssystem, das Webdokumente verfolgt
2. {{Glossary("HTTP")}}, ein Übertragungsprotokoll, um Dokumente zu finden, wenn ihre URLs bekannt sind
3. {{Glossary("HTML")}}, ein Dokumentenformat, das eingebettete _Hyperlinks_ erlaubt

Wie Sie in den drei Säulen sehen können, dreht sich im Web alles um Dokumente und deren Zugänglichkeit. Der ursprüngliche Zweck des Webs war es, eine einfache Möglichkeit zu bieten, Textdokumente zu erreichen, zu lesen und zu navigieren. Seitdem hat sich das Web weiterentwickelt, um auch Zugriff auf Bilder, Videos und Binärdaten zu bieten, aber diese Verbesserungen haben die drei Säulen kaum verändert.

Vor dem Web war es ziemlich schwierig, auf Dokumente zuzugreifen und von einem zum anderen zu wechseln. Menschlich lesbare URLs erleichterten bereits vieles, aber es ist mühsam, eine lange URL einzugeben, wann immer Sie auf ein Dokument zugreifen möchten. Hier revolutionierten Hyperlinks alles. Links können jegliche Textzeichenfolge mit einer URL verknüpfen, so dass der Benutzer sofort auf das Zieldokument zugreifen kann, indem er den Link aktiviert.

Links heben sich durch Unterstreichung und blaue Schrift vom umgebenden Text ab. Tippen oder klicken Sie auf einen Link, um ihn zu aktivieren, oder wenn Sie eine Tastatur verwenden, drücken Sie Tab, bis der Link fokussiert ist, und drücken Sie Enter oder die Leertaste.

![Beispiel einer grundlegenden Anzeige und Wirkung eines Links auf einer Webseite](link-1.png)

Links sind der Durchbruch, der das Web so nützlich und erfolgreich gemacht hat. Im Rest dieses Artikels besprechen wir die verschiedenen Arten von Links und ihre Bedeutung für modernes Webdesign.

## Ausführlicher Einblick

Wie gesagt, ein Link ist eine Textzeichenfolge, die mit einer URL verbunden ist, und wir verwenden Links, um einen einfachen Sprung von einem Dokument zum anderen zu ermöglichen. Dabei gibt es einige Nuancen, die beachtet werden sollten:

### Arten von Links

- Interner Link
  - : Ein Link zwischen zwei Webseiten, wobei beide Webseiten zur selben Website gehören, wird als interner Link bezeichnet. Ohne interne Links gibt es keine Website (es sei denn, es handelt sich natürlich um eine Ein-Seiten-Website).
- Externer Link
  - : Ein Link von Ihrer Webseite zu einer anderen Webseite. Ohne externe Links gibt es kein Web, da das Web ein Netz von Webseiten ist. Verwenden Sie externe Links, um Informationen bereitzustellen, die über die Inhalte Ihrer Webseite hinausgehen.
- Eingehende Links
  - : Ein Link von der Webseite eines anderen zu Ihrer Seite. Es ist das Gegenteil eines externen Links. Beachten Sie, dass Sie nicht zurückverlinken müssen, wenn jemand Ihre Seite verlinkt.

Wenn Sie eine Website erstellen, konzentrieren Sie sich auf interne Links, da diese Ihre Seite nutzbar machen. Finden Sie ein gutes Gleichgewicht zwischen zu vielen und zu wenigen Links. Wir werden über das Design der Seiten-Navigation in einem anderen Artikel sprechen, aber als Regel gilt: Wann immer Sie eine neue Webseite hinzufügen, stellen Sie sicher, dass mindestens eine Ihrer anderen Seiten auf diese neue Seite verlinkt. Andererseits ist es kontraproduktiv, wenn Ihre Seite mehr als etwa zehn Seiten hat, von jeder zu jeder anderen Seite zu verlinken.

Wenn Sie gerade anfangen, müssen Sie sich nicht allzu sehr um externe und eingehende Links kümmern, aber sie sind sehr wichtig, wenn Sie möchten, dass Suchmaschinen Ihre Seite finden (siehe unten für weitere Details).

### Anker

Die meisten Links verbinden zwei Webseiten. **Anker** verbinden zwei Abschnitte eines Dokuments miteinander. Wenn Sie einem Link folgen, der auf einen Anker verweist, springt Ihr Browser zu einem anderen Teil des aktuellen Dokuments, anstatt ein neues Dokument zu laden. Sie erstellen und verwenden Anker auf die gleiche Weise wie andere Links.

![Beispiel einer grundlegenden Anzeige und Wirkung eines Ankers auf einer Webseite](link-2.png)

### Links und Suchmaschinen

Links sind sowohl für Benutzer als auch für Suchmaschinen wichtig. Jedes Mal, wenn Suchmaschinen eine Webseite durchsuchen, indizieren sie die Website, indem sie den auf der Webseite verfügbaren Links folgen. Suchmaschinen folgen nicht nur Links, um die verschiedenen Seiten der Website zu entdecken, sondern verwenden auch den sichtbaren Text des Links, um zu bestimmen, welche Suchanfragen geeignet sind, um die Zielwebseite zu erreichen.

Links beeinflussen, wie schnell eine Suchmaschine Ihre Seite verlinkt. Das Problem ist, dass es schwierig ist, die Aktivitäten von Suchmaschinen zu messen. Unternehmen möchten natürlich, dass ihre Seiten hoch in den Suchergebnissen rangieren. Wir wissen Folgendes darüber, wie Suchmaschinen das Ranking einer Seite bestimmen:

- Der _sichtbare Text_ eines Links beeinflusst, welche Suchanfragen eine gegebene URL finden werden.
- Je mehr _eingehende Links_ eine Webseite vorweisen kann, desto höher rangiert sie in den Suchergebnissen.
- _Externe Links_ beeinflussen das Suchranking sowohl der Quell- als auch der Zielwebseiten, aber es ist unklar, wie stark.

[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) (Suchmaschinenoptimierung) ist das Studium, wie man Websites in Suchergebnissen hoch einstufen kann. Die Verbesserung der Link-Nutzung einer Website ist eine hilfreiche SEO-Technik.

## Nächste Schritte

Jetzt möchten Sie einige Webseiten mit Links einrichten.

- Um einige theoretische Grundlagen zu erlangen, lernen Sie über [URLs und deren Struktur](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), da jeder Link auf eine URL verweist.
- Möchten Sie etwas Praktischeres? Der Artikel [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) in unserem Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) erklärt im Detail, wie man Links implementiert.
