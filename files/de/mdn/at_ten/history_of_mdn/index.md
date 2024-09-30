---
title: Die Geschichte von MDN
slug: MDN/At_ten/History_of_MDN
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

In diesem Vortrag aus dem Jahr 2015 blicken mehrere Mitwirkende des MDN-Projekts auf die vergangenen zehn Jahre von [developer.mozilla.org](/) und auf das kommende Jahrzehnt. Sie werden die Geschichte verschiedener Wiki-Software-Migrationen hören, wie eine Dokumentationsgemeinschaft aufgebaut wurde und viele weitere Highlights der Geschichte der Website. Die Gruppe spricht auch über aktuelle Herausforderungen und Projekte, an denen die MDN-Community in diesem Jahr arbeitet.

<div id="audio"><pre class="brush: html hidden">&#x3C;audio controls="controls">
  Es sieht so aus, als hätte Ihr Browser keinen integrierten Audioplayer. Laden Sie die Datei herunter und spielen Sie sie selbst ab: https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3
  &#x3C;source src="https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3" type="audio/mp3">
&#x3C;/audio>
</pre><pre class="brush: css hidden">body{margin-top:8px;}
</pre></div>

{{ EmbedLiveSample('audio', '100%', '70px') }}

![Das Berliner Büro](11073502_781006205281080_8135317797319228200_o-600x400.jpg)

Der [2015 Berlin „Hack on MDN“](https://blog.mozilla.org/community/2015/04/17/a-highly-productive-hack-on-mdn-weekend-in-berlin/), bei dem dieser Vortrag aufgezeichnet wurde.

## Themen

Hier ist eine Übersicht über die besprochenen Themen, mit Zeitstempeln und einigen zusätzlichen Details:

### Was ist MDN und für wen ist es?<br>Ein Ort für die Open-Web-Community

Zeit: _0:00:00 - 0:07:15_

MDN bietet nützliche Informationen zu Web-Technologien und fördert das Lernen, Teilen und Lehren in der Open-Web-Community. Auf MDN kommen Sie zusammen und erstellen Dinge für sich und andere.

MDN ist auch ein Ort für Mozilla-Ingenieure, wie Gecko- oder Firefox-Entwickler, Add-on-Entwickler und Firefox OS-Mitwirkende.

### Die Geschichte von MDN: Vor-Wiki-Ära – Netscape DevEdge

Zeit: _0:07:15 - 0:08:17_

In den frühen Tagen gab es _DevEdge_, die Entwicklerdokumentation von Netscape, die die Grundlage für einige der Dokumentation von MDN bildete. Sehen Sie sich die Vergangenheit auf [archive.org](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/) an:

[![Netscape DevEdge](devedge.png)](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/)

Am 12. Oktober 2004 wurde diese beliebte Entwickler-Website von AOL, der Muttergesellschaft von Netscape, geschlossen. Nur wenige Monate später, im Februar 2005, konnte [Mitchell Baker](https://blog.lizardwrangler.com/) [DevEdge retten](https://blog.lizardwrangler.com/2005/02/23/devmo-and-devedge-updates/) und erreichte eine Vereinbarung mit AOL, die es Mozilla ermöglichte, Dokumente auf Grundlage der ehemaligen DevEdge-Materialien von Netscape zu veröffentlichen, zu modifizieren und neue zu erstellen. Mit anderen Worten, was 1998 mit dem Mozilla-Quellcode geschah, geschah schließlich auch mit der Entwicklerdokumentation von Netscape: **Sie wurde Open Source**.

Deb Richardson trat der Mozilla Foundation als Technische Redakteurin bei und leitete das neue _DevMo_-Projekt für gemeinschaftlich erstellte Entwicklerdokumentation.

### MediaWiki<br>Die erste Wiki-Engine

Zeit: _0:08:17 - 0:14:55_

Mit MediaWiki als neuer Projektplattform wurde die Mozilla-Entwicklerdokumentation ab Juli 2005 für jedermann editierbar gemacht. Ein neues kollaboratives Element in Mozilla wurde etabliert und seitdem ist jeder willkommen, dabei zu helfen, es zu verbessern und Wissen zu teilen. Eine neue internationale Gemeinschaft begann zu wachsen und Developer-Inhalte in andere Sprachen zu übersetzen.

[![MDC MediaWiki](mediawiki.png)](https://web.archive.org/web/20051226031957/https://developer.mozilla.org/en/docs/Main_Page)

### DekiWiki<br>Die zweite Wiki-Engine

Zeit: _0:14:55 - 0:26:08_

Im August 2008 wechselte das Mozilla Developer Center zu [MindTouch DekiWiki](https://sourceforge.net/projects/dekiwiki/), einem leistungsstarken und neuen Content-Management-System und Wikisystem für technische Dokumentationen. Diese Plattformänderung war in der Gemeinschaft, die seit 2005 an MediaWiki gewöhnt war und Tools darum herum gebaut hatte, ziemlich umstritten. Während dieser Phase begannen wir mit Doc Sprints, um die Community wieder einzubinden.

[![MDC DekiWiki](screenshot_2018-07-24_16.06.55.png)](https://web.archive.org/web/20080907231611/https://developer.mozilla.org/en)

### Kuma<br>Die dritte und aktuelle Wiki-Engine

Zeit: _0:26:08 - 0:31:50_ und _0:43:52 - 0:51:35_

[Kuma](https://github.com/mdn/kuma), geforkt von [Kitsune](https://github.com/mozilla/kitsune) Anfang 2011 und am 3. August 2012 gestartet, ist ein von Mozilla entwickeltes Wiki-Framework, basierend auf Django mit seinem eigenen [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript)-Macrosystem, das Node.js verwendet.

Da der Code auf GitHub liegt, begann die Community ebenfalls, zum CMS von MDN beizutragen. Von nun an umfasst das Arbeiten an MDN sowohl das Schreiben von Dokumentation als auch das Coden an Kuma.

[![MDN KUMA](kuma.png)](https://web.archive.org/web/20121003233220/https://developer.mozilla.org/en-US/)

### Redesign von MDN<br>Kuma mit aktualisiertem Design

Zeit: _0:31:50 - 0:32:22_ und _0:51:35 - 0:58:05_

Das Redesign von MDN war ein großes Projekt. [Sean Martell](https://www.seanmartell.com/) entwarf die neue visuelle Identität von MDN. Es war dann ein iterativer Prozess mit einer Beta-Nutzergruppe von 3000 MDNern über mehrere Monate hinweg. Das neue Aussehen stand hinter einem „Waffle flag“ (MDNs Feature-Flag-System). Großer Dank geht auch an [David Walsh](https://davidwalsh.name/), der wirklich die gesamte Neugestaltung anführte und MDN das Frontend gab, das es verdient.

![Waffle flag](waffle-flag.jpg)

### Community rund um Open Web-Dokumentation<br>Community-geleitete, browserunabhängige Open-Web-Dokumentation

Zeit: _0:32:22 - 0:36:55_

An einem Punkt im Jahr 2010, insbesondere als sich [Community-Mitglieder und technische Autoren in Paris trafen](https://hacks.mozilla.org/2010/10/web-standards-doc-sprint-finis/), wurde es offensichtlicher, dass sich der Fokus von MDN deutlich von „Lassen Sie uns alles Firefox-Dinge dokumentieren!“ zu „Lassen Sie uns das Web dokumentieren!“ verschiebt. Die Dokumentation wurde in den letzten Jahren bereinigt und umstrukturiert, sodass die Open-Web-Dokumentation von MDN browserunabhängig ist. Dieses Material, nützlich für jeden, der für das Web entwickelt, ist unser beliebtester und am häufigsten genutzter Inhalt.

Verschiedene Browseranbieter haben sich zeitweise angeschlossen, um diesen Teil von MDN mitzugestalten. Diese browserübergreifende Zusammenarbeit war sehr erfolgreich und wird von den Lesern des MDN geschätzt.

### Lokalisierungsgemeinschaften<br>MDN bedient ein globales Publikum in vielen Sprachen

Zeit: _0:36:55 - 0:43:52_

Lokalisierung ist ein großer Bestandteil der Mozilla-Community; es ist ein Bestandteil fast jedes Projekts und Produkts. Mit Kuma ist MDN auch sehr lokalisierbar und für die Bedürfnisse [unserer l10n-Gemeinschaft](/de/docs/MDN/Community/Contributing/Translated_content) geeignet. Die W3C-Spezifikationen und andere Ressourcen, die die Funktionalität des Webs beschreiben, haben keine direkten Ziele und haben Gemeinschaften, die Spezifikationen in mehreren Sprachen bereitstellen. Besonders für Anfänger ist MDN der erste Schritt, um Web-Technologien zu erkunden. Daher ist es unser Ziel, für alle da zu sein. MDN hat ein breites Publikum und strebt an, nicht nur englischen Muttersprachlern zugänglich zu sein. Es wird weltweit geschätzt.

### Lernbereich

Zeit: _0:58:05 - 1:02:46_

Der [Lernbereich](/de/docs/Learn) von MDN ist ein neuer Versuch, grundlegende Webfähigkeiten zu lehren. In den letzten 10 Jahren hat MDN viel fortgeschrittenes Material hinzugefügt, das Experten mit wertvollen Informationen versorgt. Dieses Projekt konzentriert sich auf Materialien für Anfänger und versucht, viele Wissenslücken zu schließen.

### Die Zukunft von MDN<br>Was wird anders sein, wenn wir 20 Jahre MDN feiern?

Zeit: _1:02:46 - 1:11:39_

Jeder, der an MDN beteiligt ist, kümmert sich wirklich darum, dass das Web offen und zugänglich bleibt, und deshalb haben wir die Lokalisierungsteams und all die Menschen, die mitwirken. MDN hofft, weiterhin eine Schlüsselrolle dabei zu spielen, das Web so zu halten, wie wir es uns vorstellen.

Ein großer Teil dieser Zukunft werden Lernressourcen sein. In den nächsten zehn Jahren wird es viel mehr Webentwickler geben.

Ein weiterer großer Teil unserer Aufgabe ist es, die Informationen, die wir bereits haben, zu pflegen und zu aktualisieren, damit wir Webentwicklern stets relevante Inhalte bieten können.

Was sich ändert und in Zukunft wahrscheinlich noch mehr ändern wird, ist, wie Informationen konsumiert werden. Heute suchen Menschen nach Informationen und sehen sich Dokumentationen an. In Zukunft könnte MDN-Dokumentation direkt in Code-Editoren, Firefox Developer Tools und vielen anderen Entwickler-Tools und -Dienstleistungen bereitgestellt werden.

## Sprecher

Dies sind die Personen, die ihre Erinnerungen und Gedanken teilen, in der Reihenfolge ihres Auftretens:

### Justin Crawford<br>Produktmanager, MDN

![Justin Crawford](hoosteeno.jpg)

Justin moderiert diesen Vortrag und erstellt Dinge mit Code, Worten, Fahrradteilen und Holz. Er ist [@hoosteeno](https://mastodon.social/@hoosteeno) auf Mastodon.social.

### Eric "Sheppy" Shepherd<br>Technischer Autor, MDN

![Eric Shepherd](a2sheppy.png)

Sheppy dokumentiert für Mozilla seit 2006 und hat viel Geschichte (und verrückte Ideen), wenn es um MDC und MDN im Laufe der Jahre geht. Er ist [@sheppy](https://x.com/sheppy) auf X.

### Jérémie Patonnier<br>Technischer Autor, MDN

![Jérémie Patonnier](jeremiepat.jpg)

Jérémie ist ein langjähriger Mitwirkender des Mozilla Developer Network und ein professioneller Webentwickler seit 2000. Er setzt sich für Webstandards ein und schreibt Dokumentationen über Webtechnologien mit dem Willen, sie für alle zugänglich zu machen. Er ist [@JeremiePat](https://github.com/JeremiePat) auf GitHub.

### Janet Swisher<br>Community Managerin, MDN

![Janet Swisher](jmswisher.jpg)

Janet ist eine Mozilla-Community-Managerin für das Mozilla Developer Network. Sie ist 2010 zu Mozilla gekommen und seit 2004 im Bereich Open-Source-Software und seit dem 20. Jahrhundert in der technischen Kommunikation tätig. Sie ist [@jmswisher](https://mastodon.social/@jmswisher) auf Mastodon.social.

### Stormy Peters

![Stormy Peters](yaacgvya.jpg)

Man findet Stormy auf [StormysCorner.com](https://stormyscorner.com/).

### Ali Spivak<br>Betreuerin der großartigen MDN-Katzen

![Ali Spivak](iyqi3qpv.jpg)

Ali Spivak verwaltet Inhalte und Community im Mozilla Developer Network und verbringt ihre Zeit damit, Wege zu finden, das Web noch großartiger zu machen. Sie ist begeistert vom Erhalt eines freien und offenen Webs und hat sich nach ihrem Einstieg in Open Source, als sie 2012 zu Mozilla kam, auf den Aufbau und die Teilnahme an den Entwicklergemeinschaften bei Mozilla konzentriert. Sie ist [@alispivak](https://x.com/alispivak) auf X.

### Jean-Yves Perrier<br>Technischer Autor, MDN

![Jean-Yves Perrier](teoli2003.png)

Jean-Yves ist seit 2010 Technischer Autor bei MDN und trat Ende 2011 Vollzeit bei Mozilla ein. Er begeistert sich für das offene Web mit 15 Jahren Erfahrung in C++. Er ist Schweizer, lebt aber in London, Großbritannien. Seine Erdös-Zahl ist 5 und er ist [@teoli2003](https://github.com/teoli2003) auf GitHub.

### Florian Scholz<br>Technischer Autor, MDN

![Florian Scholz](elchi3.jpg)

Florian ist Technischer Autor bei Mozilla, der sich auf offene Webtechnologien konzentriert. Er ist ein Wiki-Gnom, der die Dokumentation pflegt, als wären sie Blumen, und er arbeitet gerne mit der Community zusammen, um das Ziel des Web- und Bedokumentierens zu erreichen und es für alle zugänglich zu machen. Florian begeistert sich für Open Source, lebt in Bremen, Deutschland, und committet als [@Elchi3](https://github.com/Elchi3) auf GitHub.

### David Walsh<br>Webentwickler, MDN

![David Walsh](darkwing.png)

Senior Webentwickler bei Mozilla, Frontend-Ingenieur, MooTools Core-Entwickler, JavaScript-Fanatiker, CSS-Tüftler, PHP-Hacker, Web- und Open-Source-Liebhaber. Davids Zuhause im Web ist [davidwalsh.name](https://davidwalsh.name/).

### Luke Crouch<br>Webentwickler, MDN

![Luke Crouch](groovecoder.png)

Luke Crouch ist ein Heimbrauer, Fußballfan und Webentwickler für Mozilla. Er entwickelt seit 1996 im Web, verwendet Firefox seit 2004, schreibt Open-Source-Software seit 2006 und kam 2010 als erster MDN-Webentwickler zu Mozilla. Luke ist [@groovecoder](https://github.com/groovecoder) auf GitHub.

### Julien (alias Sphinx)<br>Französische Lokalisierung, MDN

![Julien](ensemble.png)

Julien verbrachte viele Nächte und Wochenenden über mehrere Monate hinweg, um JavaScript-Artikel ins Französische zu übersetzen. Er ist kein Entwickler, hat aber einen Hintergrund in der IT und möchte mehr über neue Technologien lernen. Er trägt zu MDN bei, anstatt fernzusehen.

### Biraj Karmakar<br>Mentor der Mozilla Reps

![Biraj Karmakar](birajkarmakar.png)

Biraj ist ein Open-Source-Mitarbeiter, interessiert an der FOSS-Bewegung und Lokalisierungen.

## Unsere großartigen Mitwirkenden

Viele weitere Personen haben großartige Arbeit bei MDN geleistet:

- Les Orchard
- John Karahalis
- David Walsh
- Jannis Leidel
- Stephanie Hobson
- James Bennett
- Isac Lagerblad
- Piotrek Koszuliński
- Craig Cook
- Rob Hudson
- John Whitlock
- …
  Und viele weitere [Kuma-Mitarbeiter.](https://github.com/mdn/kuma/graphs/contributors)

<!---->

- Chris Mills
- Will Bamberg
- David Bruant
- Thierry Régagnon
- ethertank
- Saurabh Nair
- Deb Richardson
- Sebastian Zartner
- Tooru Fujisawa
- Karen Scarfone
- Niklas Barning
- …
  Und Hunderte weitere Wiki-Kollaboratoren.
