---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GamesSidebar}}

Sie haben einem [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) gefolgt und ein HTML-Spiel erstellt — das ist großartig! Dieser Artikel behandelt alles, was Sie wissen müssen, um Ihr neu erstelltes Spiel in die Welt hinauszubringen. Dies umfasst das eigene Hosting im Internet, die Einreichung in offenen Marktplätzen und in geschlossenen, wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Anwendungen

Spiele mit HTML zu entwickeln bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Multiplattform-Glück

Die Technologie selbst ist plattformübergreifend, d.h. Sie können den Code einmal schreiben und mehrere Geräte anvisieren. Dies reicht von niedrig ausgestatteten Smartphones oder Tablets, über Laptops und Desktop-Computer, bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank, wenn dieser einen modernen Browser unterstützen kann.

Sie benötigen keine separaten Teams, um am selben Spieltitel zu arbeiten, der auf verschiedene Plattformen abzielt, da Sie sich nur um einen einzigen Codebestand kümmern müssen. Sie können mehr Zeit und Geld für [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) aufwenden.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn ein Benutzer einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern den aktualisierten Code fast sofort bereitzustellen.

### Direkte Verteilung und sofortiges Spielen

Sie müssen den Menschen nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen, wenn es sich um HTML-Spiele handelt. Sie können ihnen einfach eine direkte URL senden, um auf das Spiel zuzugreifen, die sie dann anklicken können, um das Spiel sofort zu spielen, ohne Drittanbieter-Plugins verwenden oder ein großes Paket herunterladen und installieren zu müssen. Beachten Sie, dass das Herunterladen des Spiels je nach Größe des Spiels und Ihrer Netzwerkgeschwindigkeit dennoch etwas Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Verkehr direkt dort hinlenken können, wo Sie ihn haben wollen, ohne dass man viele Hindernisse überwinden muss, um zu spielen.

## Desktop vs. Mobil

Der Großteil des Traffics, der für uns von Interesse ist — Menschen, die HTML-Spiele spielen — stammt von mobilen Geräten. Darauf müssen Sie sich konzentrieren, wenn Sie wirklich erfolgreich sein möchten. Mobile Geräte sind dort, wo HTML-Technologie wirklich glänzen und ihre Vorteile zeigen kann. Es gibt kein Flash und HTML ist vollständig plattformübergreifend.

Es ist sehr schwierig, direkt mit Desktop-Spielen zu konkurrieren. Sie können Ihre HTML-Spiele in die gleiche Arena bringen (siehe [Native Desktop](#native_desktop) weiter unten), und das sollten Sie auch tun, denn es ist gut, die Plattformen, die Sie unterstützen, zu diversifizieren. Sie müssen jedoch bedenken, dass Entwickler, die Desktop-Spiele erstellen, über jahrelange Erfahrung, großartige Werkzeuge und stabile Vertriebskanäle verfügen. Viele HTML-Spiele werden andere Marktsegmente ansprechen als native Desktop-Spiele, z. B. einfache Zeitvertreibsspiele, die unterwegs gespielt werden können, anstatt große immersive Erlebnisse. Solche Spiele sind oft dazu gedacht, mit zwei oder sogar einem Finger gespielt zu werden, sodass Sie das Gerät halten, das Spiel spielen und die andere Hand für das verwenden können, was Sie gerade benötigen.

Abgesehen davon können Desktop-Plattformen recht einfach für den Vertrieb genutzt werden, da Wrapper zur Verfügung stehen, die Ihnen helfen können, native Builds Ihres Spiels vorzubereiten, siehe [Verpackung von Spielen](#verpackung_von_spielen). Es ist auch sinnvoll, Desktop-Steuerelemente für Ihre Spiele bereitzustellen, selbst wenn Sie hauptsächlich mobile Geräte anvisieren. Die Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und Desktop ist eine davon. Zudem ist es in der Regel einfacher, das Spiel zunächst auf dem Desktop zu bauen und zu testen und dann mit dem Debuggen von mobilen Geräten fortzufahren.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es um die Veröffentlichung eines Spiels geht:

- Eigenes Hosting
- Publisher
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [promotet](/de/docs/Games/Publishing_games/Game_promotion) werden zu können, aber auch einprägsam genug, damit die Leute ihn nicht vergessen.

### Eigenes Hosting

Wenn Sie Front-End-Entwickler sind, wissen Sie wahrscheinlich, was zu tun ist. Ein HTML-Spiel ist nur eine weitere Website. Sie können es auf einen entfernten Server hochladen, sich einen einprägsamen Domainnamen schnappen und es selbst hosten.

Wenn Sie Geld mit der Spieleentwicklung verdienen möchten, sollten Sie Ihren Quellcode auf irgendeine Weise gegen Personen sichern, die ihn leicht nehmen und als ihren eigenen verkaufen könnten. Sie können den Code zusammenführen und verkleinern, um ihn kleiner zu machen, und ihn verschleiern, sodass es viel schwieriger ist, Ihr Spiel zu reverse-engineeren. Eine weitere gute Maßnahme ist die Bereitstellung einer Online-Demo, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt nur zum Spaß arbeiten, wird es denen zugutekommen, die lernen möchten, was Sie geschaffen haben, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal um die Suche nach einem Hosting-Anbieter kümmern, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/2014/02/host-your-html5-games-on-github-pages/). Sie erhalten kostenloses Hosting, Versionskontrolle und mögliche Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name schon sagt, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten, hängt davon ab, was Ihr Plan ist, um Ihr Spiel zu verteilen: Möchten Sie es überall möglich senden, oder möchten Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Es liegt an Ihnen. Ziehen Sie verschiedene Optionen in Betracht, experimentieren Sie und ziehen Sie Ihre Schlussfolgerungen. Publisher werden im [Monetarisierungs](/de/docs/Games/Publishing_games/Game_monetization)-Artikel ausführlicher erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/) oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einreichen können und es aufgrund des großen Traffics der dortigen Seiten eine natürliche Promotion erhält. Einige dieser Portale nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Seite einbetten. Solch ein Exposure kann einfach für die [Promotion](/de/docs/Games/Publishing_games/Game_promotion) Ihres Spiels sorgen, oder wenn Sie Werbung neben Ihrem Spiel zeigen (oder andere Geldverdienoptionen haben), auch für Monetarisierung.

### Web- und Native Stores

Sie können Ihr Spiel auch direkt in verschiedenen Arten von Stores oder Marktplätzen hochladen und veröffentlichen. Um das zu tun, müssen Sie es vorbereiten und zu einem bestimmten Build-Format für jedes App-Ökosystem, das Sie anvisieren, verpacken. Siehe [Marktplätze — Distributionsplattformen](#marktplätze_—_distributionsplattformen) für weitere Details zu den verfügbaren Marktplatzarten.

## Marktplätze — Distributionsplattformen

Lassen Sie uns sehen, welche verfügbaren Optionen es in Bezug auf die Marktplätze/Stores für verschiedene Plattformen und Betriebssysteme gibt.

> [!NOTE]
> Dies sind die beliebtesten Distributionsplattformen, aber das bedeutet nicht, dass dies die einzigen Optionen sind. Anstatt zu versuchen, Ihr Spiel zu den Tausenden anderen im iOS Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an die Zielgruppe zu werben, die an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Webstores

Die besten Plattformen für HTML-Spiele sind webbasierte Stores. Sie können Spiele für Webstores vorbereiten, indem Sie eine Manifestdatei und andere Daten, wie Ressourcen, in ein komprimiertes Paket hinzufügen. Es sind nicht viele Änderungen am Spiel selbst erforderlich.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist auch eine attraktive Option — auch hier benötigen Sie nur eine Manifestdatei, das Spiel in ein Zip-Archiv und das Ausfüllen des Online-Einreichungsformulars.

### Native Mobile Stores

Bezüglich des mobilen Marktes gibt es den Apple App Store für iOS, Google Play für Android und die restliche Konkurrenz. Native Stores sind bereits voller etablierter Entwickler, die großartige Spiele verkaufen, daher müssen Sie talentiert und glücklich sein, um bemerkt zu werden.

- Der iOS App Store ist ziemlich schwer zu betreten, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie müssen eine Woche oder zwei warten, um akzeptiert zu werden. Hinzu kommt, dass es der prominenteste mobile Store mit Hunderttausenden von Apps ist, daher ist es extrem schwer, sich von der Masse abzuheben.
- Google Plays Anforderungen sind weniger streng, daher ist der Store mit qualitativ minderwertigen Spielen übersät. Es ist immer noch ziemlich schwer, dort bemerkt zu werden, da die Anzahl der täglichen eingereichten Apps enorm ist. Es ist auch schwerer, dort Geld zu verdienen — die meisten bezahlten Spiele von iOS werden als kostenlose Spiele auf Android veröffentlicht, wobei die Monetarisierung durch In-App-Käufe (IAPs) oder Anzeigen erfolgt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, sich ein Stück vom Kuchen zu sichern, und liegen weit hinter der Konkurrenz. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher sein wird, bemerkt zu werden.

Wenn Sie nach weiteren Informationen über die verschiedenen Arten von App Stores suchen, können Sie den [Artikel über mobile Software-Distributionsplattformen](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia lesen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie auch das Desktop-Ökosystem mit Ihren HTML-Spielen anvisieren — denken Sie nur an all die beliebten AAA-Spiele, die den größten Marktanteil einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um das Desktop-Ding richtig zu machen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) — unabhängige Entwickler können sich über das [Steam Direct](https://partner.steamgames.com/steamdirect) Programm bei Steam anmelden. Denken Sie daran, dass Sie sich selbst mit den plattformübergreifenden Problemen auseinandersetzen müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Aufsehen um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), bei denen die beliebtesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist eher eine exzellente Möglichkeit zur Promotion als ein Weg, viel Geld zu verdienen, da die Preise, die für die Spiele in einem Bundle bezahlt werden, normalerweise recht niedrig sind.

## Verpackung von Spielen

Das Web ist die erste und die beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem verteilen möchten, können Sie es dennoch tun, indem Sie es verpacken. Das Gute daran ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten — Sie können es einmal erstellen und Tools verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind in der Regel ziemlich zuverlässig, aber Sie sollten sie dennoch testen und auf kleine Probleme oder Fehler achten, die behoben werden müssen.

### Verfügbare Werkzeuge

Es gibt verschiedene Tools zur Auswahl, je nach Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Werkzeug für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) — ein Tool, das speziell für die Verpackung von Spielen mit dem [ImpactJS](https://impactjs.com/) Framework für iOS erstellt wurde, vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) — früher bekannt als Node-WebKit, ist dies die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Verteilungen sind mit der WebKit-Engine verpackt, um die Wiedergabe auf jeder Plattform zu ermöglichen.

Andere alternative Werkzeuge sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — eine spannende Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) — bekannt als Atom Shell — ist ein Open-Source- und plattformübergreifendes Werkzeug von GitHub.
- [Manifold.js](https://manifoldjs.com/) — dieses Tool des Microsoft-Teams kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Verteilung ist der Weg, um der Welt Zugang zu Ihrem Spiel zu geben. Es gibt viele verfügbare Optionen, und es gibt keine einzige gute Antwort darauf, welche die beste ist. Sobald Sie das Spiel veröffentlicht haben, ist es Zeit, sich auf die [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren — die Menschen darauf aufmerksam zu machen, dass Ihr Spiel existiert. Ohne Promotion würden sie nicht einmal in der Lage sein, es zu erfahren und zu spielen.
