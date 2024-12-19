---
title: Die Geschichte von MDN
slug: MDN/At_ten/History_of_MDN
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

In diesem Vortrag aus dem Jahr 2015 blicken mehrere Mitwirkende des MDN-Projekts auf die vergangenen zehn Jahre von [developer.mozilla.org](/) sowie auf das kommende Jahrzehnt. Sie erfahren die Geschichte verschiedener Wiki-Software-Migrationen, wie eine Dokumentationsgemeinschaft aufgebaut wurde und viele weitere Highlights der Geschichte der Seite. Die Gruppe spricht dann auch über aktuelle Herausforderungen und Projekte, an denen die MDN-Community in diesem Jahr arbeitet.

<div id="audio"><pre class="brush: html hidden">&#x3C;audio controls="controls">
  Es sieht so aus, als hätte Ihr Browser keinen integrierten Audioplayer. Laden Sie die Datei herunter und spielen Sie sie hier selbst ab: https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3
  &#x3C;source src="https://videos.cdn.mozilla.net/uploads/mdn/MDN10/MDN_RoundTable.mp3" type="audio/mp3">
&#x3C;/audio>
</pre><pre class="brush: css hidden">body{margin-top:8px;}
</pre></div>

{{ EmbedLiveSample('audio', '100%', '70px') }}

![Das Büro in Berlin](11073502_781006205281080_8135317797319228200_o-600x400.jpg)

Das [2015 Berlin "Hack on MDN"](https://blog.mozilla.org/community/2015/04/17/a-highly-productive-hack-on-mdn-weekend-in-berlin/), wo dieser Vortrag aufgezeichnet wurde.

## Themen

Hier ist eine Übersicht darüber, was besprochen wurde, mit Zeitstempeln und einigen zusätzlichen Details:

### Was ist MDN und für wen ist es?<br>Ein Ort für die Open-Web-Gemeinschaft

Zeit: _0:00:00 - 0:07:15_

MDN bietet nützliche Informationen zu Web-Technologien und fördert das Lernen, Teilen und Lehren in der Open-Web-Community. Auf MDN kommen Sie zusammen und erstellen Dinge für sich selbst und für andere.

MDN ist auch ein Ort für Mozilla-Ingenieure, wie Gecko- oder Firefox-Hacker, Add-on-Entwickler und Mitwirkende an Firefox OS.

### Die Geschichte von MDN: Vor-Wiki-Ära – Netscape DevEdge

Zeit: _0:07:15 - 0:08:17_

In den frühen Tagen gab es _DevEdge_, die Entwicklerdokumentation von Netscape, die die Grundlage einiger MDN-Dokumentationen bildete. Werfen Sie einen Blick in die Vergangenheit auf [archive.org](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/):

[![Netscape DevEdge](devedge.png)](https://web.archive.org/web/20020819120942/http://devedge.netscape.com/)

Am 12. Oktober 2004 wurde diese beliebte Entwickler-Website von AOL, der Muttergesellschaft von Netscape, geschlossen. Nur wenige Monate später, im Februar 2005, konnte [Mitchell Baker](https://blog.lizardwrangler.com/) [DevEdge retten](https://blog.lizardwrangler.com/2005/02/23/devmo-and-devedge-updates/) und erreichte eine Vereinbarung mit AOL, die es Mozilla erlaubte, neue Dokumente auf Basis der ehemaligen Netscape DevEdge-Materialien zu veröffentlichen, zu bearbeiten und zu erstellen. Mit anderen Worten: Was 1998 mit dem Mozilla-Quellcode geschah, passierte endlich auch mit der Entwicklerdokumentation von Netscape: **Sie wurde Open Source**.

Deb Richardson trat der Mozilla Foundation als Technische Redakteurin bei und leitete das neue _DevMo_-Projekt für community-gesteuerte Entwicklerdokumentation.

### MediaWiki<br>Die erste Wiki-Engine

Zeit: _0:08:17 - 0:14:55_

Mit MediaWiki als neuer zugrunde liegender Projektplattform wurde die Mozilla-Entwicklerdokumentation ab Juli 2005 für jeden bearbeitbar gemacht. Ein neues kollaboratives Element bei Mozilla wurde etabliert, und seitdem ist jeder willkommen, dabei zu helfen, sie zu verbessern und Wissen zu teilen. Eine neue internationale Community begann zu wachsen und Entwicklerinhalte in andere Sprachen zu übersetzen.

[![MDC MediaWiki](mediawiki.png)](https://web.archive.org/web/20051226031957/https://developer.mozilla.org/en/docs/Main_Page)

### DekiWiki<br>Die zweite Wiki-Engine

Zeit: _0:14:55 - 0:26:08_

Im August 2008 wechselte das Mozilla Developer Center zu [MindTouch DekiWiki](https://sourceforge.net/projects/dekiwiki/), einem leistungsstarken und neuen Content-Management- und Wiki-System für technische Dokumentationen. Dieser Plattformwechsel war in der Community, die seit 2005 an MediaWiki gewöhnt und darum herum Werkzeuge gebaut hatte, recht umstritten. In dieser Phase begannen wir mit Doc Sprints, um die Community neu zu engagieren.

[![MDC DekiWiki](screenshot_2018-07-24_16.06.55.png)](https://web.archive.org/web/20080907231611/https://developer.mozilla.org/en)

### Kuma<br>Die dritte und aktuelle Wiki-Engine

Zeit: _0:26:08 - 0:31:50_ und _0:43:52 - 0:51:35_

[Kuma](https://github.com/mdn/kuma), abgeleitet von [Kitsune](https://github.com/mozilla/kitsune) Anfang 2011 und gestartet am 3. August 2012, ist eine von Mozilla entwickelte Wiki-Plattform, die auf Django basiert und ein eigenes [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript)-Makrosystem nutzt, das Node.js verwendet.

Da der Code auf GitHub liegt, begann die Community auch, zum CMS von MDN beizutragen. Ab jetzt umfasst das Arbeiten an MDN sowohl das Schreiben von Dokumentationen als auch das Kodieren von Kuma.

[![MDN KUMA](kuma.png)](https://web.archive.org/web/20121003233220/https://developer.mozilla.org/en-US/)

### Redesign von MDN<br>Kuma mit dem aktualisierten Design

Zeit: _0:31:50 - 0:32:22_ und _0:51:35 - 0:58:05_

Das Redesign von MDN war ein großes Projekt. [Sean Martell](https://www.seanmartell.com/) entwarf die neue visuelle Identität von MDN. Es war dann ein iterativer Prozess mit einer Beta-Benutzergruppe von 3000 MDN-Mitgliedern über mehrere Monate hinweg. Das neue Erscheinungsbild stand hinter einem "Waffle flag" (MDNs Feature-Flag-System). Ein großes Dankeschön auch an [David Walsh](https://davidwalsh.name/), der den gesamten Redesign-Prozess wirklich gefördert hat und MDN das Front-End gegeben hat, das es verdient.

![Waffle flag](waffle-flag.jpg)

### Gemeinschaft rund um Open-Web-Dokumente<br>Gemeinschaftsgesteuerte, browserunabhängige Open-Web-Dokumentation

Zeit: _0:32:22 - 0:36:55_

Irgendwann 2010, besonders als sich [Community-Mitglieder und technisches Personal in Paris trafen](https://hacks.mozilla.org/2010/10/web-standards-doc-sprint-finis/), wurde offensichtlicher, dass der Fokus von MDN deutlich von "Lasst uns alles über Firefox dokumentieren!" zu "Lasst uns das Web dokumentieren!" wechselte. Die Dokumentation wurde in den letzten Jahren aufgeräumt und umstrukturiert, sodass die offene Webdokumentation von MDN browserunabhängig ist. Dieses Material, das für jeden, der für das Web entwickelt, nützlich ist, ist unser populärster und meistgenutzter Inhalt.

Verschiedene Browser-Anbieter haben sich von Zeit zu Zeit angeschlossen, um an diesem Teil von MDN mitzugestalten. Diese plattformübergreifende Zusammenarbeit war sehr erfolgreich und wird von den Lesern von MDN geschätzt.

### Lokalisierungsgemeinschaften<br>MDN bedient ein globales Publikum in vielen Sprachen

Zeit: _0:36:55 - 0:43:52_

Lokalisierung ist ein großer Teil der Mozilla-Community; es ist eine Komponente fast jedes Projekts und Produkts. Mit Kuma ist MDN auch sehr lokalisierbar und an die Bedürfnisse [unserer l10n-Community](/de/docs/MDN/Community/Contributing/Translated_content) angepasst. Die W3C-Spezifikationen und andere Ressourcen, die die Funktionalität des Webs beschreiben, haben keine direkten Ziele und haben Gemeinschaften, die Spezifikationen in mehreren Sprachen bereitstellen. Besonders für Anfänger ist MDN der erste Schritt, um Webtechnologien zu erkunden, daher ist es unser Ziel, für jeden zu sein. MDN hat ein breites Publikum und zielt darauf ab, nicht nur Muttersprachler des Englischen einzuschließen. Es wird auf der ganzen Welt geschätzt.

### Lernbereich

Zeit: _0:58:05 - 1:02:46_

Der MDN [Lernbereich](/de/docs/Learn_web_development) ist ein neuer Versuch, grundlegende Webfähigkeiten zu lehren. In den letzten 10 Jahren hat MDN viel fortgeschrittenes Material hinzugefügt, um Experten mit wertvollen Informationen zu versorgen. Dieses Projekt konzentriert sich auf Materialien für Anfänger und versucht, viele Wissenslücken zu schließen.

### Die Zukunft von MDN<br>Was wird anders sein, wenn wir 20 Jahre MDN feiern?

Zeit: _1:02:46 - 1:11:39_

Jeder, der an MDN beteiligt ist, liegt es wirklich am Herzen, dass das Web offen und zugänglich bleibt, weshalb wir die Lokalisierungsteams und all die Menschen haben, die mithelfen. MDN hofft, weiterhin eine wichtige Rolle dabei zu spielen, das Web so zu gestalten, wie wir finden, dass es sein sollte.

Ein großer Teil dieser Zukunft werden Lernressourcen sein. In den nächsten zehn Jahren wird es viel mehr Webentwickler geben.

Ein weiterer großer Teil unserer Arbeit besteht darin, die Informationen, die wir bereits haben, zu pflegen und zu aktualisieren, damit wir den Webentwicklern immer relevante Inhalte bieten können.

Was sich ändert und sich wahrscheinlich in Zukunft noch mehr ändern wird, ist, wie Informationen konsumiert werden. Heute suchen die Leute nach Informationen und sehen sich Dokumentationen an. In Zukunft könnte die MDN-Dokumentation direkt in Code-Editoren, Firefox Developer Tools und vielen anderen Entwicklerwerkzeugen und Diensten bereitgestellt werden.

## Sprecher

Diese Personen teilen ihre Erinnerungen und Gedanken, in der Reihenfolge ihres Auftretens:

### Justin Crawford<br>Produktmanager, MDN

![Justin Crawford](hoosteeno.jpg)

Justin moderiert diesen Vortrag und erstellt Dinge mit Code, Worten, Fahrradteilen und Holz. Er ist [@hoosteeno](https://mastodon.social/@hoosteeno) auf Mastodon.social.

### Eric "Sheppy" Shepherd<br>Technischer Redakteur, MDN

![Eric Shepherd](a2sheppy.png)

Sheppy dokumentiert seit 2006 für Mozilla und hat viel Geschichte (und verrückte Ideen), wenn es um MDC und MDN im Laufe der Jahre geht. Er ist [@sheppy](https://x.com/sheppy) auf X.

### Jérémie Patonnier<br>Technischer Redakteur, MDN

![Jérémie Patonnier](jeremiepat.jpg)

Jérémie ist ein langjähriger Mitwirkender des Mozilla Developer Network und seit 2000 professioneller Webentwickler. Er setzt sich für Webstandards ein und schreibt Dokumentationen über Webtechnologien, um sie für jeden zugänglich zu machen. Er ist [@JeremiePat](https://github.com/JeremiePat) auf GitHub.

### Janet Swisher<br>Community-Manager, MDN

![Janet Swisher](jmswisher.jpg)

Janet ist eine Mozilla Community Manager für das Mozilla Developer Network. Sie trat Mozilla 2010 bei und ist seit 2004 im Bereich Open-Source-Software tätig und seit dem 20. Jahrhundert in der technischen Kommunikation. Sie ist [@jmswisher](https://mastodon.social/@jmswisher) auf Mastodon.social.

### Stormy Peters

![Stormy Peters](yaacgvya.jpg)

Sie finden Stormy unter [StormysCorner.com](https://stormyscorner.com/).

### Ali Spivak<br>Herder of awesome MDN cats

![Ali Spivak](iyqi3qpv.jpg)

Ali Spivak leitet Inhalte und Community im Mozilla Developer Network und überlegt sich Möglichkeiten, das Web noch großartiger zu machen. Sie ist leidenschaftlich darum bemüht, ein freies und offenes Web aufrechtzuerhalten und hat, nachdem sie 2012 zu Mozilla kam, ihren Schwerpunkt auf den Aufbau und die Teilnahme an Entwicklergemeinschaften bei Mozilla gelegt. Sie ist [@alispivak](https://x.com/alispivak) auf X.

### Jean-Yves Perrier<br>Technischer Redakteur, MDN

![Jean-Yves Perrier](teoli2003.png)

Jean-Yves ist seit 2010 Technischer Redakteur bei MDN und trat Ende 2011 in Vollzeit Mozilla bei. Er ist leidenschaftlich für das offene Web und hat 15 Jahre C++-Erfahrung. Er ist Schweizer, lebt aber in London, UK. Seine Erdös-Nummer ist 5 und er ist [@teoli2003](https://github.com/teoli2003) auf GitHub.

### Florian Scholz<br>Technischer Redakteur, MDN

![Florian Scholz](elchi3.jpg)

Florian ist ein Technischer Redakteur bei Mozilla, der sich auf offene Webtechnologien konzentriert. Er ist ein Wiki-Gnome, der die Dokumentation wie Blumen pflegt, und er arbeitet gerne mit der Community zusammen, um das Web zu dokumentieren und für alle zugänglich zu machen. Florian ist leidenschaftlich für Open Source, er ist in Bremen, Deutschland, ansässig und committet als [@Elchi3](https://github.com/Elchi3) auf GitHub.

### David Walsh<br>Webentwickler, MDN

![David Walsh](darkwing.png)

Mozilla Sr. Web Developer, Front-End Engineer, MooTools Core Developer, JavaScript Fanatic, CSS Bastler, PHP Hacker, Web- und Open-Source-Liebhaber. Davids Heimat im Web ist [davidwalsh.name](https://davidwalsh.name/).

### Luke Crouch<br>Webentwickler, MDN

![Luke Crouch](groovecoder.png)

Luke Crouch ist ein Hobbybrauer, Fußballfan und Webentwickler für Mozilla. Er entwickelt seit 1996 im Web, nutzt Firefox seit 2004, schreibt Open-Source-Software seit 2006 und kam 2010 als erster festangestellter MDN-Webentwickler zu Mozilla. Luke ist [@groovecoder](https://github.com/groovecoder) auf GitHub.

### Julien (auch bekannt als Sphinx)<br>Französische Lokalisierung, MDN

![Julien](ensemble.png)

Julien verbrachte viele Nächte und Wochenenden damit, JavaScript-Artikel ins Französische zu übersetzen. Er ist kein Entwickler, hat aber einen Hintergrund in der IT und möchte mehr über neue Technologien lernen. Er trägt zu MDN bei, anstatt Fernsehen zu schauen.

### Biraj Karmakar<br>Mentor der Mozilla Reps

![Biraj Karmakar](birajkarmakar.png)

Biraj ist ein Open-Source-Mitarbeiter, der sich für die FOSS-Bewegung und Lokalisierungen interessiert.

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
- ...
  Und viele weitere [Kuma-Mitwirkende.](https://github.com/mdn/kuma/graphs/contributors)

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
- ...
  Und Hunderte weiterer Wiki-Mitarbeiter.
