---
title: Die Geschichte von MDN
slug: MDN/At_ten/History_of_MDN
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

In diesem Vortrag aus dem Jahr 2015 blicken mehrere Mitwirkende des MDN-Projekts auf die vergangenen zehn Jahre von [developer.mozilla.org](/) und auf das kommende Jahrzehnt. Sie erfahren die Geschichte verschiedener Wiki-Software-Migrationen, wie eine Dokumentationsgemeinschaft aufgebaut wurde, und viele weitere Höhepunkte der Geschichte der Seite. Die Gruppe spricht auch über aktuelle Herausforderungen und Projekte, an denen die MDN-Community in diesem Jahr arbeitet.

<div id="audio"><pre class="brush: html hidden">&#x3C;audio controls="controls">
  Looks like your browser doesn't have a built-in audio player. Grab the file and play it yourself from here: https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3
  &#x3C;source src="https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3" type="audio/mp3">
&#x3C;/audio>
</pre><pre class="brush: css hidden">body{margin-top:8px;}
</pre></div>

{{ EmbedLiveSample('audio', '100%', '70px') }}

![Das Berliner Büro](11073502_781006205281080_8135317797319228200_o-600x400.jpg)

Der [2015 Berliner "Hack on MDN"](https://blog.mozilla.org/community/2015/04/17/a-highly-productive-hack-on-mdn-weekend-in-berlin/), bei dem dieser Vortrag aufgenommen wurde.

## Themen

Hier ist ein Überblick darüber, was besprochen wurde, mit Zeitstempeln und einigen zusätzlichen Details:

### Was ist MDN und für wen ist es?<br>Ein Ort für die Open Web Community

Zeit: _0:00:00 - 0:07:15_

MDN bietet nützliche Informationen zu Webtechnologien und fördert das Lernen, Teilen und Lehren in der Open Web Community. Auf MDN kommen Sie zusammen, um Dinge für sich und andere zu schaffen.

MDN ist auch ein Ort für Mozilla-Ingenieure, wie Gecko- oder Firefox-Hacker, Add-on-Entwickler und Firefox OS-Beitragende.

### Die Geschichte von MDN: Vor-Wiki-Ära – Netscape DevEdge

Zeit: _0:07:15 - 0:08:17_

In den frühen Tagen gab es _DevEdge_, die Entwicklerdokumentation von Netscape, die die Grundlage einiger MDN-Dokumentationen bildete. Werfen Sie einen Blick in die Vergangenheit auf [archive.org](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/):

[![Netscape DevEdge](devedge.png)](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/)

Am 12. Oktober 2004 wurde diese beliebte Entwicklerwebsite von AOL, der Muttergesellschaft von Netscape, geschlossen. Nur wenige Monate später, im Februar 2005, konnte [Mitchell Baker](https://blog.lizardwrangler.com/) [DevEdge retten](https://blog.lizardwrangler.com/2005/02/23/devmo-and-devedge-updates/) und erreichte eine Vereinbarung mit AOL, die Mozilla erlaubte, neue Dokumente basierend auf den früheren Netscape DevEdge-Materialien zu veröffentlichen, zu ändern und zu erstellen. Mit anderen Worten, was mit dem Mozilla-Quellcode 1998 passiert ist, geschah endlich auch mit der Entwicklerdokumentation von Netscape: **Sie wurde Open Source**.

Deb Richardson trat der Mozilla Foundation als Technische Redakteurin bei und leitete das neue _DevMo_-Projekt für von der Community getriebene Entwicklerdokumentation.

### MediaWiki<br>Die erste Wiki-Engine

Zeit: _0:08:17 - 0:14:55_

Mit MediaWiki als neuer Grundlage wurde die Mozilla-Entwicklerdokumentation ab Juli 2005 für jeden bearbeitbar gemacht. Ein neues kollaboratives Element in Mozilla wurde etabliert, und seitdem ist jeder willkommen, es zu verbessern und Wissen zu teilen. Eine neue internationale Gemeinschaft begann zu wachsen und Entwicklerinhalte in andere Sprachen zu übersetzen.

[![MDC MediaWiki](mediawiki.png)](https://web.archive.org/web/20051226031957/https://developer.mozilla.org/en/docs/Main_Page)

### DekiWiki<br>Die zweite Wiki-Engine

Zeit: _0:14:55 - 0:26:08_

Im August 2008 wechselte das Mozilla Developer Center zu [MindTouch DekiWiki](https://sourceforge.net/projects/dekiwiki/), einem leistungsstarken und neuen Content-Management-System und Wiki-System für technische Dokumentation. Dieser Plattformwechsel war in der Community, die seit 2005 MediaWiki gewohnt war und Werkzeuge darum herum aufgebaut hatte, ziemlich umstritten. Während dieser Phase begannen wir mit Doc Sprints, um die Community wieder zu aktivieren.

[![MDC DekiWiki](screenshot_2018-07-24_16.06.55.png)](https://web.archive.org/web/20080907231611/https://developer.mozilla.org/en)

### Kuma<br>Die dritte und aktuelle Wiki-Engine

Zeit: _0:26:08 - 0:31:50_ und _0:43:52 - 0:51:35_

[Kuma](https://github.com/mdn/kuma), abgeleitet von [Kitsune](https://github.com/mozilla/kitsune) Anfang 2011 und gestartet am 3. August 2012, ist eine von Mozilla entwickelte Wiki-Plattform basierend auf Django mit ihrem eigenen [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript) Makrosystem, das Node.js verwendet.

Da der Code auf GitHub verfügbar war, begann die Community, auch zum CMS von MDN beizutragen. Ab sofort umfasst das Arbeiten an MDN sowohl das Schreiben von Dokumentationen als auch das Kodieren von Kuma.

[![MDN KUMA](kuma.png)](https://web.archive.org/web/20121003233220/https://developer.mozilla.org/en-US/)

### Neugestaltung von MDN<br>Kuma mit dem überarbeiteten Design

Zeit: _0:31:50 - 0:32:22_ und _0:51:35 - 0:58:05_

Die Neugestaltung von MDN war ein großes Projekt. [Sean Martell](https://www.seanmartell.com/) entwarf die neue visuelle Identität von MDN. Es war dann ein iterativer Prozess mit einer Beta-Benutzergruppe von 3000 MDNern über mehrere Monate. Der neue Look war hinter einer "Waffle-Flag" versteckt (MDNs Feature-Flagsystem). Großer Dank auch an [David Walsh](https://davidwalsh.name/), der die gesamte Neugestaltung wirklich vorangetrieben hat und MDN das Frontend gegeben hat, das es verdient.

![Waffle Flag](waffle-flag.jpg)

### Community rund um Open Web-Dokumente<br>Community-getriebene, browserunabhängige Open Web-Dokumentation

Zeit: _0:32:22 - 0:36:55_

Irgendwann im Jahr 2010, insbesondere als [Community-Mitglieder und technische Redakteure sich in Paris trafen](https://hacks.mozilla.org/2010/10/web-standards-doc-sprint-finis/), wurde klarer, dass sich der Fokus von MDN deutlich von "Lasst uns alles über Firefox dokumentieren!" zu "Lasst uns das Web dokumentieren!" verschiebt. Die Dokumentation wurde in den letzten Jahren bereinigt und neu strukturiert, sodass MDNs Open Web-Dokumentation browserunabhängig ist. Dieses Material, das für jeden, der für das Web entwickelt, nützlich ist, ist unser populärster und am weitesten verbreiteter Inhalt.

Verschiedene Browseranbieter haben sich immer wieder beteiligt, um diesen Teil von MDN mitzugestalten. Diese browserübergreifende Zusammenarbeit war sehr erfolgreich und wird von den Lesern von MDN geschätzt.

### Lokalisierungsgemeinschaften<br>MDN bedient ein globales Publikum in vielen Sprachen

Zeit: _0:36:55 - 0:43:52_

Lokalisierung ist ein großer Bestandteil der Mozilla-Community; es ist eine Komponente fast jedes Projekts und Produkts. Mit Kuma ist MDN auch sehr lokalisierbar und für die Bedürfnisse unserer [l10n-Community](/de/docs/MDN/Community/Contributing/Translated_content) geeignet. Die W3C-Spezifikationen und andere Ressourcen, die die Funktionalität des Webs beschreiben, haben keine direkten Ziele und haben Gemeinschaften, die Spezifikationen in mehreren Sprachen bereitstellen. Besonders für Anfänger ist MDN der erste Schritt, um Webtechnologien zu erkunden, daher ist es unser Ziel, für jeden da zu sein. MDN hat ein breites Publikum und zielt darauf ab, nicht nur englische Muttersprachler einzubeziehen. Es wird weltweit geschätzt.

### Lernbereich

Zeit: _0:58:05 - 1:02:46_

Der MDN [Lernbereich](/de/docs/Learn) ist eine neue Initiative, um grundlegende Webfähigkeiten zu vermitteln. In den letzten zehn Jahren hat MDN viele fortgeschrittene Materialien hinzugefügt, die Experten wertvolle Informationen bieten. Dieses Projekt konzentriert sich auf Materialien für Anfänger und versucht, viele Wissenslücken zu schließen.

### Die Zukunft von MDN<br>Was wird anders sein, wenn wir 20 Jahre MDN feiern?

Zeit: _1:02:46 - 1:11:39_

Alle, die bei MDN mitarbeiten, liegt am Herzen, dass das Web offen und zugänglich bleibt, und deshalb haben wir die Lokalisierungsteams und all die Menschen, die beitragen. MDN hofft, weiterhin ein Schlüsselakteur zu sein, um das Web so zu halten, wie wir es für richtig halten.

Ein großer Teil dieser Zukunft wird aus Lernressourcen bestehen. Es wird in den nächsten zehn Jahren viel mehr Webentwickler geben.

Ein weiterer großer Teil unserer Aufgabe besteht darin, die Informationen, die wir bereits haben, zu pflegen und zu aktualisieren, sodass wir den Webentwicklern stets relevante Inhalte bieten können.

Was sich verändert und sich in Zukunft wahrscheinlich noch stärker ändern wird, ist, wie Informationen konsumiert werden. Heute suchen Menschen nach Informationen und durchforsten die Dokumentation. In Zukunft könnten MDN-Dokumentationen direkt in Code-Editoren, Firefox Developer Tools und vielen anderen Entwicklerwerkzeugen und -diensten bereitgestellt werden.

## Vortragende

Dies sind die Personen, die ihre Erinnerungen und Gedanken teilen, in der Reihenfolge ihres Auftretens:

### Justin Crawford<br>Produktmanager, MDN

![Justin Crawford](hoosteeno.jpg)

Justin moderiert diesen Vortrag und macht Dinge mit Code, Worten, Fahrradteilen und Holz. Er ist [@hoosteeno](https://mastodon.social/@hoosteeno) auf Mastodon.social.

### Eric "Sheppy" Shepherd<br>Technischer Redakteur, MDN

![Eric Shepherd](a2sheppy.png)

Sheppy dokumentiert seit 2006 für Mozilla und hat viel Geschichte (und verrückte Ideen) in Bezug auf MDC und MDN über die Jahre hinweg. Er ist [@sheppy](https://x.com/sheppy) auf X.

### Jérémie Patonnier<br>Technischer Redakteur, MDN

![Jérémie Patonnier](jeremiepat.jpg)

Jérémie ist langjähriger Mitwirkender des Mozilla Developer Network und professioneller Web-Entwickler seit 2000. Er setzt sich für Webstandards ein und schreibt Dokumentationen über Webtechnologien mit dem Ziel, diese für jeden zugänglich zu machen. Er ist [@JeremiePat](https://github.com/JeremiePat) auf GitHub.

### Janet Swisher<br>Community-Managerin, MDN

![Janet Swisher](jmswisher.jpg)

Janet ist Community-Managerin für das Mozilla Developer Network. Sie trat Mozilla 2010 bei und ist seit 2004 im Bereich Open-Source-Software und seit dem 20. Jahrhundert in der technischen Kommunikation tätig. Sie ist [@jmswisher](https://mastodon.social/@jmswisher) auf Mastodon.social.

### Stormy Peters

![Stormy Peters](yaacgvya.jpg)

Sie finden Stormy auf [StormysCorner.com](https://stormyscorner.com/).

### Ali Spivak<br>Leiterin der tollen MDN-Katzen

![Ali Spivak](iyqi3qpv.jpg)

Ali Spivak leitet den Bereich Inhalte & Community auf dem Mozilla Developer Network und überlegt sich Wege, um das Web noch großartiger zu machen. Sie ist leidenschaftlich daran interessiert, ein freies und offenes Web zu erhalten, und hat sich nach ihrem Einstieg in Open Source bei Mozilla im Jahr 2012 darauf konzentriert, die Entwicklergemeinschaften bei Mozilla aufzubauen und daran teilzunehmen. Sie ist [@alispivak](https://x.com/alispivak) auf X.

### Jean-Yves Perrier<br>Technischer Redakteur, MDN

![Jean-Yves Perrier](teoli2003.png)

Jean-Yves ist seit 2010 technischer Redakteur bei MDN und trat Ende 2011 in Vollzeit bei Mozilla ein. Er ist leidenschaftlich am offenen Web interessiert, mit 15 Jahren Erfahrung in C++. Er ist Schweizer, lebt aber in London, UK. Seine Erdös-Zahl ist 5 und er ist [@teoli2003](https://github.com/teoli2003) auf GitHub.

### Florian Scholz<br>Technischer Redakteur, MDN

![Florian Scholz](elchi3.jpg)

Florian ist Technischer Redakteur bei Mozilla und konzentriert sich auf offene Webtechnologien. Er ist ein Wiki-Gnom, der die Dokumentation pflegt, als wären es Blumen, und er arbeitet gerne mit der Community an dem Ziel, das Web zu dokumentieren und es für jeden zugänglich zu machen. Florian ist begeistert von Open Source, er lebt in Bremen, Deutschland, und ist [@Elchi3](https://github.com/Elchi3) auf GitHub.

### David Walsh<br>Webentwickler, MDN

![David Walsh](darkwing.png)

Mozilla Sr. Web Entwickler, Front-End Ingenieur, MooTools Core Entwickler, JavaScript Fanatiker, CSS Tüftler, PHP Hacker, Web- und Open-Source-Liebhaber. Davids Zuhause im Web ist [davidwalsh.name](https://davidwalsh.name/).

### Luke Crouch<br>Webentwickler, MDN

![Luke Crouch](groovecoder.png)

Luke Crouch ist ein Hobbybrauer, Fußballfan und Webentwickler für Mozilla. Er entwickelt seit 1996 im Web, nutzt Firefox seit 2004, schreibt Open Source-Software seit 2006 und stieß 2010 als erster festangestellter MDN-Webentwickler zu Mozilla. Luke ist [@groovecoder](https://github.com/groovecoder) auf GitHub.

### Julien (alias Sphinx)<br>Französische Lokalisierung, MDN

![Julien](ensemble.png)

Julien verbrachte viele Nächte und Wochenenden über mehrere Monate damit, JavaScript-Artikel ins Französische zu übersetzen. Er ist kein Entwickler, hat aber einen IT-Hintergrund und möchte mehr über neue Technologien lernen. Er trägt zu MDN bei, anstatt fernzusehen.

### Biraj Karmakar<br>Mozilla Reps Mentor

![Biraj Karmakar](birajkarmakar.png)

Biraj ist ein Open Source-Mitwirkender, der sich für die FOSS-Bewegung und Lokalisierungen interessiert.

## Unsere großartigen Mitwirkenden

Viele weitere Personen haben erstaunliche Arbeit an MDN geleistet:

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
  Und viele mehr [Kuma-Mitwirkende.](https://github.com/mdn/kuma/graphs/contributors)

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
