---
title: Die Geschichte von MDN
slug: MDN/At_ten/History_of_MDN
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

In diesem Vortrag aus dem Jahr 2015 betrachten mehrere Mitwirkende des MDN-Projekts die vergangenen zehn Jahre von [developer.mozilla.org](/) und das kommende Jahrzehnt. Sie werden die Geschichte verschiedener Wiki-Software-Migrationen hören, wie eine Dokumentationsgemeinschaft aufgebaut wurde und viele weitere Höhepunkte der Geschichte der Seite. Die Gruppe spricht dann auch über aktuelle Herausforderungen und Projekte, an denen die MDN-Community in diesem Jahr arbeitet.

<div id="audio"><pre class="brush: html hidden">&#x3C;audio controls="controls">
  Es sieht so aus, als hätte Ihr Browser keinen integrierten Audio-Player. Laden Sie die Datei herunter und spielen Sie sie selbst von hier ab: https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3
  &#x3C;source src="https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3" type="audio/mp3">
&#x3C;/audio>
</pre><pre class="brush: css hidden">body{margin-top:8px;}
</pre></div>

{{ EmbedLiveSample('audio', '100%', '70px') }}

![Das Berliner Büro](11073502_781006205281080_8135317797319228200_o-600x400.jpg)

Der [2015 Berlin "Hack on MDN"](https://blog.mozilla.org/community/2015/04/17/a-highly-productive-hack-on-mdn-weekend-in-berlin/), bei dem dieser Vortrag aufgenommen wurde.

## Themen

Hier ist ein Überblick über das, was besprochen wurde, mit Zeitangaben und einigen zusätzlichen Details:

### Was ist MDN und für wen ist es gedacht?<br>Ein Ort für die Open-Web-Community

Zeit: _0:00:00 - 0:07:15_

MDN bietet nützliche Informationen zu Webtechnologien und fördert das Lernen, Teilen und Lehren in der Open-Web-Community. Auf MDN kommen Sie zusammen und schaffen Dinge für sich selbst und andere.

MDN ist auch ein Ort für Mozilla-Ingenieure, wie Gecko- oder Firefox-Entwickler, Erweiterungsentwickler und Firefox OS-Mitwirkende.

### Die Geschichte von MDN: Vor-Wiki-Ära – Netscape DevEdge

Zeit: _0:07:15 - 0:08:17_

In den frühen Tagen gab es _DevEdge_, die Entwicklerdokumentation von Netscape, die die Grundlage für einige der MDN-Dokumentation bildete. Werfen Sie einen Blick zurück auf [archive.org](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/):

[![Netscape DevEdge](devedge.png)](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/)

Am 12. Oktober 2004 wurde diese beliebte Entwickler-Website von AOL, der Muttergesellschaft von Netscape, geschlossen. Nur wenige Monate später, im Februar 2005, konnte [Mitchell Baker](https://blog.lizardwrangler.com/) [DevEdge retten](https://blog.lizardwrangler.com/2005/02/23/devmo-and-devedge-updates/) und erreichte eine Vereinbarung mit AOL, die es Mozilla ermöglichte, die früheren Netscape DevEdge-Materialien zu veröffentlichen, zu ändern und neue Dokumente zu erstellen. Mit anderen Worten, das, was 1998 mit dem Mozilla-Quellcode geschah, geschah schließlich auch mit der Entwicklerdokumentation von Netscape: **Sie wurde Open Source**.

Deb Richardson trat der Mozilla Foundation als Technischer Redakteur bei und leitete das neue _DevMo_-Projekt für gemeinschaftlich erstellte Entwicklerdokumentationen.

### MediaWiki<br>Die erste Wiki-Engine

Zeit: _0:08:17 - 0:14:55_

Mit MediaWiki als neuer zugrunde liegender Projektplattform wurde die Mozilla-Entwicklerdokumentation ab Juli 2005 für jedermann bearbeitbar gemacht. Ein neues kollaboratives Element wurde in Mozilla etabliert, und seitdem ist jeder eingeladen, dazu beizutragen und Wissen zu teilen. Eine neue internationale Gemeinschaft begann zu wachsen und Entwicklerinhalte in andere Sprachen zu übersetzen.

[![MDC MediaWiki](mediawiki.png)](https://web.archive.org/web/20051226031957/https://developer.mozilla.org/en/docs/Main_Page)

### DekiWiki<br>Die zweite Wiki-Engine

Zeit: _0:14:55 - 0:26:08_

Im August 2008 wechselte das Mozilla Developer Center zu [MindTouch DekiWiki](https://sourceforge.net/projects/dekiwiki/), einem leistungsstarken und neuen Content-Management- und Wikisystem für technische Dokumentationen. Dieser Plattformwechsel war in der Gemeinschaft, die seit 2005 an MediaWiki gewöhnt war und Werkzeuge darum herum gebaut hatte, ziemlich umstritten. Während dieser Phase begannen wir mit Doc Sprints, um die Gemeinschaft wieder stärker einzubeziehen.

[![MDC DekiWiki](screenshot_2018-07-24_16.06.55.png)](https://web.archive.org/web/20080907231611/https://developer.mozilla.org/en)

### Kuma<br>Die dritte und aktuelle Wiki-Engine

Zeit: _0:26:08 - 0:31:50_ und _0:43:52 - 0:51:35_

[Kuma](https://github.com/mdn/kuma), ein Fork von [Kitsune](https://github.com/mozilla/kitsune) Anfang 2011, wurde am 3. August 2012 eingeführt. Es handelt sich um eine von Mozilla entwickelte Wikiplattform auf Basis von Django mit einem eigenen [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript)-Makrosystem, das Node.js verwendet.

Da der Code auf GitHub lebt, begann die Gemeinschaft auch, zum CMS von MDN beizutragen. Von nun an umfasst das Hacken an MDN sowohl das Schreiben von Dokumentationen als auch die Entwicklung von Kuma.

[![MDN KUMA](kuma.png)](https://web.archive.org/web/20121003233220/https://developer.mozilla.org/en-US/)

### Neugestaltung von MDN<br>Kuma mit dem aufgefrischten Design

Zeit: _0:31:50 - 0:32:22_ und _0:51:35 - 0:58:05_

Das Redesign von MDN war ein großes Projekt. [Sean Martell](https://www.seanmartell.com/) entwarf die neue visuelle Identität von MDN. Es war dann ein iterativer Prozess mit einer Beta-Benutzergruppe von 3000 MDNern über mehrere Monate. Der neue Look war hinter einer "Waffle-Flagge" (MDNs Feature-Flag-System). Ein großes Dankeschön auch an [David Walsh](https://davidwalsh.name/), der das gesamte Redesign maßgeblich vorangetrieben hat und MDN das Frontend gegeben hat, das es verdient.

![Waffle-Flagge](waffle-flag.jpg)

### Community rund um Open-Web-Dokumentation<br>Gemeinschaftsgetriebene, browser-unabhängige Open-Web-Dokumentation

Zeit: _0:32:22 - 0:36:55_

Irgendwann im Jahr 2010, insbesondere als [Gemeinschaftsmitglieder und technische Redakteure sich in Paris trafen](https://hacks.mozilla.org/2010/10/web-standards-doc-sprint-finis/), wurde es offensichtlicher, dass sich der Fokus von MDN eindeutig von "Lassen Sie uns alles über Firefox dokumentieren!" zu "Lassen Sie uns das Web dokumentieren!" verschiebt. Die Dokumentation wurde in den letzten Jahren bereinigt und umstrukturiert, sodass die MDN-Open-Web-Dokumentation browserunabhängig ist. Dieses Material, das für jeden, der für das Web entwickelt, nützlich ist, ist unser beliebtester und am weitesten verbreiteter Inhalt.

Verschiedene Browseranbieter haben sich immer wieder zusammengetan, um diesen Teil von MDN mitzugestalten. Diese browserübergreifende Zusammenarbeit war sehr erfolgreich und wird von den Lesern von MDN geschätzt.

### Lokalisierungsgemeinschaften<br>MDN bedient ein globales Publikum in vielen Sprachen

Zeit: _0:36:55 - 0:43:52_

Lokalisierung ist ein großer Teil der Mozilla-Community; es ist eine Komponente fast jedes Projekts und Produkts. Mit Kuma ist MDN auch sehr anpassungsfähig und eignet sich für die Bedürfnisse [unserer l10n-Community](/de/docs/MDN/Community/Contributing/Translated_content). Die W3C-Spezifikationen und andere Ressourcen, die die Funktionalität des Webs beschreiben, haben keine direkten Ziele und haben Gemeinschaften, die Spezifikationen in mehreren Sprachen bereitstellen. Besonders für Anfänger ist MDN der erste Schritt, um Webtechnologien zu erkunden, daher ist es unser Ziel, für jeden da zu sein. MDN hat ein breites Publikum und zielt darauf ab, nicht nur englische Muttersprachler einzubeziehen. Es wird auf der ganzen Welt geschätzt.

### Lernbereich

Zeit: _0:58:05 - 1:02:46_

Der MDN [Lernbereich](/de/docs/Learn) ist ein neuer Versuch, grundlegende Webfähigkeiten zu lehren. In den letzten 10 Jahren fügte MDN eine Menge fortgeschrittenes Material hinzu und bot Experten wertvolle Informationen. Dieses Projekt konzentriert sich auf Materialien für Anfänger und versucht, viele Wissenslücken zu schließen.

### Die Zukunft von MDN<br>Was wird anders sein, wenn wir 20 Jahre MDN feiern?

Zeit: _1:02:46 - 1:11:39_

Jeder, der an MDN beteiligt ist, kümmert sich wirklich darum, dass das Web offen und zugänglich bleibt, und deshalb haben wir die Lokalisierungsteams und all die Menschen, die dazu beitragen. MDN hofft, weiterhin ein wichtiger Akteur zu sein, um das Web so zu halten, wie wir es uns wünschen.

Ein großer Teil dieser Zukunft wird aus Lernressourcen bestehen. In den nächsten zehn Jahren wird es viel mehr Webentwickler geben.

Ein weiterer großer Teil unserer Aufgabe besteht darin, die Informationen, die wir bereits haben, zu pflegen und zu aktualisieren, damit wir Webentwicklern stets relevante Inhalte bereitstellen können.

Was sich ändert und vermutlich in der Zukunft weiter verändern wird, ist die Art und Weise, wie Informationen konsumiert werden. Heute suchen Menschen nach Informationen und schlagen Dokumentationen nach. In Zukunft könnte die MDN-Dokumentation direkt in Codeeditoren, Firefox Developer Tools und vielen anderen Entwickler-Tools und Diensten bereitgestellt werden.

## Sprecher

Diese Personen teilen ihre Erinnerungen und Gedanken, in der Reihenfolge ihres Erscheinens:

### Justin Crawford<br>Produktmanager, MDN

![Justin Crawford](hoosteeno.jpg)

Justin moderiert diesen Vortrag und schafft Dinge mit Code, Wörtern, Fahrradteilen und Holz. Er ist [@hoosteeno](https://mastodon.social/@hoosteeno) auf Mastodon.social.

### Eric "Sheppy" Shepherd<br>Technischer Redakteur, MDN

![Eric Shepherd](a2sheppy.png)

Sheppy ist seit 2006 dabei, für Mozilla zu dokumentieren, und hat viel Geschichte (und verrückte Ideen), wenn es um MDC und MDN im Laufe der Jahre geht. Er ist [@sheppy](https://x.com/sheppy) auf X.

### Jérémie Patonnier<br>Technischer Redakteur, MDN

![Jérémie Patonnier](jeremiepat.jpg)

Jérémie ist ein langjähriger Mitwirkender des Mozilla Developer Network und ein professioneller Webentwickler seit 2000. Er setzt sich für Webstandards ein und schreibt Dokumentationen über Webtechnologien mit dem Ziel, sie für alle zugänglich zu machen. Er ist [@JeremiePat](https://github.com/JeremiePat) auf GitHub.

### Janet Swisher<br>Community-Managerin, MDN

![Janet Swisher](jmswisher.jpg)

Janet ist Mozilla Community-Managerin für das Mozilla Developer Network. Sie trat Mozilla 2010 bei und ist seit 2004 in Open-Source-Software involviert und in der technischen Kommunikation seit dem 20. Jahrhundert tätig. Sie ist [@jmswisher](https://mastodon.social/@jmswisher) auf Mastodon.social.

### Stormy Peters

![Stormy Peters](yaacgvya.jpg)

Sie finden Stormy auf [StormysCorner.com](https://stormyscorner.com/).

### Ali Spivak<br>Hüterin der großartigen MDN-Katzen

![Ali Spivak](iyqi3qpv.jpg)

Ali Spivak verwaltet Inhalte & Community auf dem Mozilla Developer Network und denkt darüber nach, wie das Web noch großartiger gemacht werden kann. Sie brennt für die Erhaltung eines freien und offenen Webs, und nachdem sie 2012 zu Mozilla gestoßen war, konzentriert sie sich darauf, die Entwicklergemeinschaften bei Mozilla aufzubauen und aktiv daran teilzunehmen. Sie ist [@alispivak](https://x.com/alispivak) auf X.

### Jean-Yves Perrier<br>Technischer Redakteur, MDN

![Jean-Yves Perrier](teoli2003.png)

Jean-Yves ist seit 2010 technischer Redakteur bei MDN und trat Ende 2011 Mozilla in Vollzeit bei. Er brennt für das offene Web, mit 15 Jahren C++-Erfahrung. Er ist Schweizer, lebt aber in London, UK. Seine Erdös-Zahl ist 5 und er ist [@teoli2003](https://github.com/teoli2003) auf GitHub.

### Florian Scholz<br>Technischer Redakteur, MDN

![Florian Scholz](elchi3.jpg)

Florian ist technischer Redakteur bei Mozilla mit Fokus auf Open Web-Technologien. Er ist ein Wiki-Gnom, der die Dokumentation pflegt, als wären es Blumen, und er arbeitet gerne mit der Community zusammen, um das Ziel zu erreichen, das Web zu dokumentieren und es für jeden zugänglich zu machen. Florian begeistert sich für Open Source, er lebt in Bremen, Deutschland, und commitet als [@Elchi3](https://github.com/Elchi3) auf GitHub.

### David Walsh<br>Webentwickler, MDN

![David Walsh](darkwing.png)

Mozilla Senior Web Developer, Front-End Engineer, MooTools Core Developer, JavaScript Fanatiker, CSS Tüftler, PHP Hacker, Web- und Open-Source-Liebhaber. Davids Zuhause im Web ist [davidwalsh.name](https://davidwalsh.name/).

### Luke Crouch<br>Webentwickler, MDN

![Luke Crouch](groovecoder.png)

Luke Crouch ist ein Hobbybrauer, Fußballfan und Webentwickler für Mozilla. Er entwickelt seit 1996 im Web, nutzt Firefox seit 2004, schreibt Open-Source-Software seit 2006 und stieß 2010 als erster MDN-Webentwickler zu Mozilla. Luke ist [@groovecoder](https://github.com/groovecoder) auf GitHub.

### Julien (alias Sphinx)<br>Französische Lokalisierung, MDN

![Julien](ensemble.png)

Julien verbrachte viele Nächte und Wochenenden damit, JavaScript-Artikel ins Französische zu übersetzen. Er ist kein Entwickler, hat aber einen Hintergrund in der IT und möchte mehr über neue Technologien lernen. Er trägt zu MDN bei, anstatt fernzusehen.

### Biraj Karmakar<br>Mozilla Reps Mentor

![Biraj Karmakar](birajkarmakar.png)

Biraj ist ein Open-Source-Beitragender, der sich für die FOSS-Bewegung und Lokalisierungen interessiert.

## Unsere großartigen Mitwirkenden

Viele weitere Personen haben großartige Arbeit an MDN geleistet:

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
  Und viele mehr [Kuma-Beitragende.](https://github.com/mdn/kuma/graphs/contributors)

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
  Und Hunderte weitere Wiki-Mitarbeiter.
