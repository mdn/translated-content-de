---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) befolgt und ein HTML-Spiel erstellt – das ist großartig! Dieser Artikel beschreibt alles, was Sie wissen müssen, über die Möglichkeiten, wie Sie Ihr neu erstelltes Spiel in die Welt hinausbringen können. Dies umfasst das selbstständige Online-Hosting, das Einreichen bei offenen Marktplätzen und das Einreichen bei geschlossenen Plattformen wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Anwendungen

Spiele mit HTML zu erstellen bietet Ihnen zusätzliche Vorteile, wie etwa:

### Mehrplattform-Freuden

Die Technologie selbst ist mehrplattformfähig, sodass Sie den Code einmal schreiben und auf mehrere Geräte abzielen können. Dies kann von einfachen Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank reichen, sofern dieser einen modernen Browser verarbeiten kann.

Sie benötigen keine separaten Teams, die an demselben Titel arbeiten und dabei verschiedene Plattformen anvisieren; es gibt nur einen Code, um den Sie sich kümmern müssen. Sie können mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn ein Benutzer einen Fehler findet, können Sie diesen schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern den aktualisierten Code fast sofort bereitzustellen.

### Direkte Linkverteilung und sofortiges Spielen

Bei HTML-Spielen müssen Sie den Leuten nicht sagen, dass sie nach Ihrem Spiel in einem App-Store suchen sollen. Sie können ihnen einfach eine direkte URL senden, um auf das Spiel zuzugreifen, die sie dann anklicken können, um das Spiel sofort zu spielen, ohne dass sie Drittanbieter-Plugins verwenden oder ein großes Paket herunterladen und installieren müssen. Beachten Sie, dass das Herunterladen des Spiels je nach Größe des Spiels und Ihrer Netzwerkgeschwindigkeit dennoch etwas Zeit in Anspruch nehmen kann. Dennoch ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Verkehr direkt dorthin lenken können, wohin Sie ihn haben möchten, ohne viele Hürden überwinden zu müssen, um es zu spielen.

## Desktop vs. Mobil

Der Großteil des Verkehrs, der für uns von Interesse ist – Menschen, die HTML-Spiele spielen –, kommt von mobilen Geräten, daher müssen Sie sich darauf konzentrieren, wenn Sie wirklich erfolgreich sein wollen. Mobile Geräte sind der Bereich, in dem HTML-Technologie wirklich glänzen und ihre Vorteile zeigen kann. Es gibt kein Flash, und HTML ist vollständig plattformunabhängig.

Der direkte Wettbewerb mit Desktop-Spielen ist sehr schwierig. Sie können Ihre HTML-Spiele in derselben Arena platzieren (siehe [Native Desktop](#native_desktop) weiter unten) und sollten dies auch tun, da es gut ist, die von Ihnen unterstützten Plattformen zu diversifizieren. Aber Sie müssen daran denken, dass Entwickler von Desktop-Spielen über jahrelange Erfahrung, großartige Tools und stabile Distributionskanäle verfügen. Viele HTML-Spiele richten sich an andere Marktsegmente als native Desktop-Spiele, z. B. einfache Zeitkiller-Spiele, die unterwegs gespielt werden können, anstatt riesige, immersive Erfahrungen. Solche Spiele sind oft so konzipiert, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und die zweite Hand für das verwenden können, was Sie gerade benötigen.

Das gesagt, können Desktop-Plattformen recht einfach zur Verteilung genutzt werden, da es Wrapper gibt, die Ihnen helfen können, native Builds Ihres Spiels vorzubereiten, siehe [Verpackung von Spielen](#verpackung_von_spielen). Es ist auch schön, Desktop-Steuerungen für Ihre Spiele bereitzustellen, selbst wenn Sie hauptsächlich auf mobile Geräte abzielen. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und der Desktop ist eine davon. Außerdem ist es in der Regel einfacher, das Spiel zuerst auf dem Desktop zu erstellen und zu testen und dann zum Debuggen auf Mobile überzugehen.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es darum geht, ein Spiel zu veröffentlichen:

- Selbst-Hosting
- Verlage
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [promotet](/de/docs/Games/Publishing_games/Game_promotion) zu werden, aber auch einprägsam genug, damit die Leute ihn nicht vergessen.

### Selbst-Hosting

Wenn Sie ein Front-End-Entwickler sind, wissen Sie möglicherweise bereits, was zu tun ist. Ein HTML-Spiel ist nur eine weitere Website. Sie können es auf einen entfernten Server hochladen, einen einprägsamen Domainnamen wählen und es selbst hosten.

Wenn Sie mit der Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode irgendwie sichern, damit Leute ihn nicht einfach nehmen und als ihren eigenen verkaufen können. Sie können den Code zusammenführen und minifizieren, um ihn kleiner zu machen, und ihn verschmutzen, sodass es viel schwieriger ist, Ihr Spiel rückzuentwickeln. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und es in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt nur zum Spaß arbeiten, wird es denen zugutekommen, die aus dem, was Sie geschaffen haben, lernen möchten, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal Sorgen machen, einen Hosting-Anbieter zu finden, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/host-your-html5-games-on-github-pages). Sie erhalten kostenloses Hosting, Versionskontrolle und mögliche Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Verlage und Portale

Wie der Name schon sagt, können Verleger die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt von Ihrem Plan ab, wie Ihr Spiel verbreitet werden soll: Möchten Sie es überallhin senden oder möchten Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Es liegt an Ihnen. Berücksichtigen Sie verschiedene Optionen, experimentieren Sie und ziehen Sie Schlussfolgerungen. Verlage werden im Detail im Artikel über die [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/) oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einsenden können und es aufgrund des großen Verkehrs, den diese Seiten anziehen, eine natürliche Promotion erhält. Einige von ihnen nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Seite einbetten. Solche Belichtung kann [Promotion](/de/docs/Games/Publishing_games/Game_promotion) für Ihr Spiel bieten, oder wenn Sie Anzeigen neben Ihrem Spiel anzeigen (oder andere Geldmach-Optionen), kann es auch Monetarisierung bieten.

### Web- und native Stores

Sie können Ihr Spiel auch direkt in verschiedenen Arten von Stores oder Marktplätzen hochladen und veröffentlichen. Um das zu tun, müssen Sie es vorbereiten und es in ein spezielles Build-Format für jedes App-Ökosystem verpacken, das Sie anvisieren möchten. Details zu den verfügbaren Marktplatztypen finden Sie unter [Marktplätze — Vertriebsplattformen](#marktplätze_—_vertriebsplattformen).

## Marktplätze — Vertriebsplattformen

Sehen wir uns an, welche Optionen in Bezug auf die verfügbaren Marktplätze/Stores für verschiedene Plattformen und Betriebssysteme bestehen.

> [!NOTE]
> Dies sind die beliebtesten Vertriebsplattformen, aber das bedeutet nicht, dass dies die einzigen Optionen sind. Statt zu versuchen, Ihr Spiel zu den Tausenden anderen im iOS Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu werben, das an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Web-Stores

Die besten Plattformen für HTML-Spiele sind Web-basierte Stores. Sie können Spiele für Web-Stores vorbereiten, indem Sie eine Manifestdatei und andere Daten, wie Ressourcen, in einem gezippten Paket hinzufügen. Es sind nur wenige Modifikationen des Spiels selbst erforderlich.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option – wieder, eine Manifestdatei bereitstellen, das Spiel packen und das Online-Einreichungsformular ausfüllen ist fast alles, was erforderlich ist.

### Native Mobile Stores

Wenn es um den mobilen Markt geht, gibt es den Apple App Store für iOS, Google Play für Android und all die anderen Wettbewerber. Native Stores sind bereits gefüllt mit etablierten Entwicklern, die großartige Spiele verkaufen, so dass Sie talentiert und glücklich sein müssen, um wahrgenommen zu werden.

- Der iOS App Store ist recht schwer zu betreten, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie müssen eine Woche oder zwei warten, um angenommen zu werden. Außerdem ist es der führende Mobile-Store, mit Hunderttausenden von Apps, so dass es extrem schwer ist, aus der Menge hervorzustechen.
- Die Anforderungen von Google Play sind weniger streng, weshalb der Store mit minderwertigen Spielen überflutet ist. Es ist dort immer noch ziemlich schwierig, wahrgenommen zu werden, da die Anzahl der täglich eingereichten Apps riesig ist. Hier Geld zu verdienen ist auch schwieriger – die meisten der kostenpflichtigen Spiele von iOS werden als kostenlose Spiele auf Android veröffentlicht, wobei die Monetarisierung aus In-App-Käufen (IAPs) oder Anzeigen stammt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry bemühen sich, ein Stück vom Kuchen zu bekommen und liegen weit hinter der Konkurrenz zurück. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher sein wird, bemerkt zu werden.

Wenn Sie nach weiteren Informationen zu den verschiedenen Arten von App-Stores suchen, können Sie den Artikel [Liste der mobilen Softwarevertriebsplattformen](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia nachschlagen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie das Desktop-Ökosystem mit Ihren HTML-Spielen ebenfalls füllen – denken Sie nur an all die populären AAA-Spiele, die den größten Marktanteil einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um die Desktop-Option richtig zu nutzen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) – Indie-Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect)-Programm auf Steam gelangen. Denken Sie daran, dass Sie sich um die plattformübergreifenden Probleme selbst kümmern müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es reichlich Aufsehen um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), wo die beliebtesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist eher eine hervorragende Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, da die für die Spiele in einem Bundle gezahlten Preise normalerweise recht niedrig sind.

## Verpackung von Spielen

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem verteilen möchten, können Sie es dennoch tun, indem Sie es verpacken. Das Gute daran ist, dass Sie keine separaten Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten – Sie können es einmal erstellen und tools verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind in der Regel ziemlich zuverlässig, aber Sie sollten sie trotzdem testen und nach kleinen Problemen oder Fehlern Ausschau halten, um diese zu beheben.

### Verfügbare Tools

Es gibt verschiedene Tools zur Auswahl, je nach Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Tool für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) – ein speziell für das Verpacken von Spielen mit dem [ImpactJS](https://impactjs.com/) Framework für iOS entwickeltes Tool, vom Autor von ImpactJS entwickelt. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) – früher bekannt als Node-WebKit, ist dies die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Distributionen werden mit der WebKit-Engine verpackt, um Rendering auf jeder Plattform bereitzustellen.

Andere alternative Tools sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) – eine spannende Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) – bekannt als Atom Shell – ist ein Open-Source- und plattformübergreifendes Tool von GitHub.
- [Manifold.js](https://www.manifoldjs.com/) – dieses Tool vom Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Verteilung ist der Weg, der Welt Zugang zu Ihrem Spiel zu verschaffen. Es gibt viele verfügbare Optionen und es gibt keine einzige richtige Antwort darauf, welche die beste ist. Wenn Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren – die Leute wissen zu lassen, dass Ihr Spiel existiert. Ohne Promotion würden sie nicht einmal die Möglichkeit haben, darüber zu erfahren und es zu spielen.
