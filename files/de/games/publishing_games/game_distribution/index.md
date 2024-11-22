---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{GamesSidebar}}

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) befolgt und ein HTML-Spiel erstellt – das ist großartig! Dieser Artikel behandelt alles, was Sie über die Verteilung Ihres neu erstellten Spiels wissen müssen. Dies umfasst das Hosting des Spiels online, die Einreichung bei offenen Marktplätzen und die Einreichung bei geschlossenen Plattformen wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Anwendungen

Das Erstellen von Spielen mit HTML bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Multiplattform-Komfort

Die Technologie ist an sich multiplattformfähig, sodass Sie den Code einmal schreiben und auf mehreren Geräten bereitstellen können. Das kann von einfachen Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank reichen, sofern dieser einen modernen Browser nutzen kann.

Sie benötigen nicht separate Teams, die an demselben Titel für verschiedene Plattformen arbeiten müssen, da Sie sich nur auf eine Codebasis konzentrieren können. So können Sie mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn Ihr Nutzer einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern den aktualisierten Code nahezu sofort bereitzustellen.

### Direkte Verteilung über Links und sofortiges Spielen

Bei HTML-Spielen müssen Sie den Leuten nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen. Sie können ihnen einfach eine direkte URL zum Spiel senden, die sie anklicken können, um das Spiel sofort zu spielen, ohne dass Drittanbieter-Plugins benötigt werden oder ein großes Paket heruntergeladen und installiert werden muss. Bedenken Sie, dass das Herunterladen des Spiels je nach Größe des Spiels und Ihrer Netzwerkgeschwindigkeit dennoch etwas Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Datenverkehr direkt dorthin lenken können, wo Sie ihn haben möchten, und nicht durch viele Hürden springen müssen, um zu spielen.

## Desktop vs. Mobil

Der Großteil des von uns interessierten Verkehrs – Menschen, die HTML-Spiele spielen – kommt von mobilen Geräten, auf die Sie sich konzentrieren müssen, wenn Sie wirklich erfolgreich sein wollen. Mobile Geräte sind der Ort, an dem HTML-Technologie ihre Vorteile vollständig entfalten kann. Es gibt kein Flash, und HTML ist vollständig multiplattformfähig.

Direkt mit Desktop-Spielen zu konkurrieren, ist sehr schwierig. Sie können Ihre HTML-Spiele in derselben Arena platzieren (siehe [Native Desktop](#native_desktop), später) und das sollten Sie auch tun, da es gut ist, die unterstützten Plattformen zu diversifizieren. Sie müssen jedoch bedenken, dass Entwickler von Desktop-Spielen jahrelange Erfahrung, großartige Tools und stabile Vertriebswege haben. Viele HTML-Spiele werden andere Marktsegmente ansprechen als native Desktop-Spiele, z.B. einfache Zeitvertreib-Spiele, die unterwegs gespielt werden, anstatt große immersive Erlebnisse. Solche Spiele sind oft so gestaltet, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und die zweite Hand für das verwenden können, was Sie derzeit brauchen.

Das gesagt, können Desktop-Plattformen ganz einfach für die Verteilung genutzt werden, mit der Verfügbarkeit von Wrappern, die Ihnen helfen können, native Builds Ihres Spiels vorzubereiten, siehe [Spiele verpacken](#spiele_verpacken). Es ist auch schön, Desktop-Steuerungen für Ihre Spiele anzubieten, auch wenn Sie hauptsächlich mobile Geräte anvisieren. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und Desktop gehört dazu. Außerdem ist es in der Regel einfacher, das Spiel zuerst auf dem Desktop zu bauen und zu testen und dann mit dem Debuggen auf Mobilgeräten fortzufahren.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es um die Veröffentlichung eines Spiels geht:

- Eigenes Hosting
- Publisher
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [beworben](/de/docs/Games/Publishing_games/Game_promotion) werden zu können, aber auch so einprägsam, dass man ihn nicht vergisst.

### Eigenes Hosting

Wenn Sie ein Frontend-Entwickler sind, wissen Sie möglicherweise schon, was zu tun ist. Ein HTML-Spiel ist einfach eine weitere Website. Sie können es auf einen Remote-Server hochladen, einen einprägsamen Domainnamen erhalten und es selbst hosten.

Wenn Sie mit der Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode auf die eine oder andere Weise sichern, damit er nicht von anderen einfach genommen und als ihr Eigenes verkauft werden kann. Sie können den Code zusammenführen und minimieren, um ihn kleiner zu machen, und ihn "uglifyen", um es viel schwieriger zu machen, Ihr Spiel rückzuentwickeln. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt nur zum Spaß arbeiten, dann wird es denen zugutekommen, die von dem, was Sie geschaffen haben, lernen möchten, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal um die Suche nach einem Hosting-Provider kümmern, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/2014/02/host-your-html5-games-on-github-pages/). Sie erhalten kostenloses Hosting, Versionskontrolle und mögliche Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name schon sagt, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, wie Sie Ihr Spiel verbreitet sehen möchten: Möchten Sie es überall senden, wo möglich, oder wollen Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Das liegt bei Ihnen. Berücksichtigen Sie verschiedene Optionen, experimentieren Sie und ziehen Sie Schlüsse. Publisher werden im Artikel zur [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) ausführlicher erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Poki](https://developers.poki.com/) oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einreichen können und es aufgrund des großen Verkehrs, den diese Seiten anziehen, natürliche Promotion erhalten wird. Einige von ihnen nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Website einbetten. Solche Bekanntheit kann Ihrem Spiel [Promotion](/de/docs/Games/Publishing_games/Game_promotion) bieten, oder wenn Sie Anzeigen neben Ihrem Spiel zeigen (oder andere Einnahmequellen haben), kann es auch Monetarisierung bieten.

### Web- und native Stores

Sie können Ihr Spiel auch direkt in verschiedene Arten von Stores oder Marktplätze hochladen und veröffentlichen. Dazu müssen Sie es vorbereiten und es im spezifischen Build-Format für jedes App-Ökosystem, das Sie anvisieren möchten, verpacken. Weitere Informationen zu den verfügbaren Arten von Marktplätzen finden Sie unter [Marktplätze – Vertriebsplattformen](#marktplätze_–_vertriebsplattformen).

## Marktplätze – Vertriebsplattformen

Lassen Sie uns sehen, welche Optionen bezüglich der Marktplätze/Stores für verschiedene Plattformen und Betriebssysteme verfügbar sind.

> [!NOTE]
> Dies sind die beliebtesten Vertriebsplattformen, aber das bedeutet nicht, dass dies die einzigen Optionen sind. Anstatt zu versuchen, Ihr Spiel zu den tausenden anderen im iOS-Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu werben, das an Ihren Spielen interessiert wäre. Ihre Kreativität ist in diesem Fall entscheidend.

### Web-Stores

Die besten Plattformen für HTML-Spiele sind Web-basierte Stores. Sie können Spiele für Web-Stores vorbereiten, indem Sie eine Manifestdatei und andere Daten wie Ressourcen in einem Zip-Paket hinzufügen. Es sind nur wenige Anpassungen des Spiels selbst erforderlich.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option – auch hier benötigen Sie nur eine Manifestdatei, um Ihr Spiel zu zippen und das Online-Einreichungsformular auszufüllen.

### Native mobile Stores

Was den mobilen Markt betrifft, gibt es den Apple App Store für iOS, Google Play für Android und die gesamte Konkurrenz. Native Stores sind bereits mit etablierten Entwicklern gefüllt, die großartige Spiele verkaufen, sodass Sie talentiert und glücklich sein müssen, um wahrgenommen zu werden.

- Der iOS App Store ist ziemlich schwer zu betreten, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie eine Woche oder zwei warten müssen, um akzeptiert zu werden. Außerdem ist es der prominenteste mobile Store mit Hunderttausenden von Apps, sodass es extrem schwer ist, aus der Masse herauszustechen.
- Die Anforderungen von Google Play sind weniger streng, daher ist der Store mit qualitativ minderwertigen Spielen gefüllt. Es ist immer noch ziemlich schwierig, dort bemerkt zu werden, da die Anzahl der täglich eingereichten Apps enorm ist. Es ist auch schwieriger, dort Geld zu verdienen – die meisten kostenpflichtigen Spiele von iOS werden als kostenlose Spiele auf Android veröffentlicht, wobei die Monetarisierung durch In-App-Käufe (IAPs) oder Werbung erfolgt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, ein Stück vom Kuchen zu bekommen, und sind weit hinter der Konkurrenz. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher ist, wahrgenommen zu werden.

Wenn Sie nach weiteren Informationen über die verschiedenen Arten von App-Stores suchen, können Sie den Artikel [Liste von Plattformen zur Software-Verteilung auf Mobilgeräten](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia nachschlagen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie mit Ihren HTML-Spielen auch den Desktop-Ökosystem ansprechen – denken Sie nur an all die populären AAA-Spiele, die den Großteil des Marktanteils einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um das Desktop-Ding richtig zu machen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) – Indie-Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect)-Programm auf Steam gelangen. Denken Sie daran, dass Sie sich selbst um die plattformübergreifenden Probleme kümmern müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Aufregung um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), bei denen die beliebtesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist eher eine hervorragende Promotionsgelegenheit als eine Möglichkeit, viel Geld zu verdienen, da die für die Spiele in einem Bundle gezahlten Preise in der Regel recht niedrig sind.

## Spiele verpacken

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem verbreiten möchten, können Sie es immer noch verpacken. Das Gute ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten – Sie können es einmal erstellen und Tools verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind in der Regel recht zuverlässig, sollten aber dennoch getestet und auf kleine Probleme oder Fehler untersucht werden, die behoben werden müssen.

### Verfügbare Tools

Es gibt verschiedene Tools, aus denen Sie je nach Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen wählen können. Es geht darum, das beste Tool für Ihre spezifische Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) – ein Tool speziell zum Verpacken von Spielen, die mit [dem ImpactJS](https://impactjs.com/) Framework für iOS erstellt wurden, entwickelt vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) – früher bekannt als Node-WebKit, ist dies die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Distributionen sind mit der WebKit-Engine verpackt, um das Rendering auf jeder Plattform bereitzustellen.

Andere alternative Tools sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) – eine interessante Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) – bekannt als Atom Shell – ist ein Open-Source- und plattformübergreifendes Tool von GitHub.
- [Manifold.js](https://manifoldjs.com/) – dieses Tool vom Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Die Verteilung ist der Weg, um der Welt Zugang zu Ihrem Spiel zu geben. Es gibt viele verfügbare Optionen und es gibt keine einzige gute Antwort darauf, welche die beste ist. Wenn Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren – den Leuten zu zeigen, dass Ihr Spiel existiert. Ohne Promotion würden sie nicht einmal darüber lernen und es spielen können.
