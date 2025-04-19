---
title: Spielevertrieb
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: c5c84b62f3f1fbd46f77c940fa0cbfff649c46a1
---

{{GamesSidebar}}

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) verfolgt und ein HTML-Spiel erstellt – das ist großartig! Dieser Artikel behandelt alles, was Sie über die Möglichkeiten wissen müssen, wie Sie Ihr neu erstelltes Spiel in die Welt bringen können. Dazu gehört, es selbst online zu hosten, es in offenen Marktplätzen einzureichen und es in geschlossenen Marktplätzen wie Google Play oder dem iOS App Store zu veröffentlichen.

## Vorteile von HTML gegenüber nativer Entwicklung

Der Bau von Spielen mit HTML bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Plattformübergreifende Freude

Die Technologie selbst ist plattformübergreifend, sodass Sie den Code einmal schreiben und auf mehrere Geräte abzielen können. Dies kann von Low-End-Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank reichen, wenn dieser einen modernen Browser verarbeiten kann.

Sie benötigen keine separaten Teams, die an demselben Titel arbeiten, um verschiedene Plattformen zu bedienen, da Sie nur eine Codebasis haben, um die Sie sich kümmern müssen. Sie können mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn Ihr Benutzer einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern den aktualisierten Code fast sofort bereitzustellen.

### Direkte Linkverteilung und sofortiges Spielen

Bei HTML-Spielen müssen Sie den Leuten nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen. Sie können ihnen einfach eine direkte URL senden, um auf das Spiel zuzugreifen, die sie dann anklicken können, um das Spiel sofort zu spielen, ohne dass sie Drittanbieter-Plugins verwenden oder ein großes Paket herunterladen und installieren müssen. Beachten Sie, dass der Download des Spiels je nach Größe des Spiels und Netzwerkgeschwindigkeit dennoch einige Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Verkehr direkt dorthin lenken können, wo Sie ihn haben möchten, und nicht viele Hindernisse durchlaufen müssen, um zu spielen.

## Desktop vs. Mobil

Der Großteil des Verkehrs, an dem wir interessiert sind – Menschen, die HTML-Spiele spielen – kommt von mobilen Geräten, daher müssen Sie sich darauf konzentrieren, wenn Sie wirklich erfolgreich sein wollen. Mobile Geräte sind dort, wo HTML-Technologie wirklich glänzen und ihre Vorteile zeigen kann. Es gibt kein Flash, und HTML ist vollständig plattformübergreifend.

Der direkte Wettbewerb mit Desktop-Spielen ist sehr schwierig. Sie können Ihre HTML-Spiele im selben Bereich platzieren (siehe [Nativer Desktop](#nativer_desktop) weiter unten) und das sollten Sie, da es gut ist, die Plattformen, die Sie unterstützen, zu diversifizieren. Aber Sie müssen bedenken, dass Entwickler von Desktop-Spielen jahrelange Erfahrung, großartige Werkzeuge und stabile Vertriebskanäle haben. Viele HTML-Spiele richten sich an andere Marktsegmente als native Desktop-Spiele, z.B. einfache Zeitvertreib-Spiele, die unterwegs gespielt werden können, anstatt riesiger immersiver Erlebnisse. Solche Spiele sind oft darauf ausgelegt, mit zwei, oder sogar einem Finger gespielt zu werden, sodass Sie das Gerät halten, das Spiel spielen und die zweite Hand für das verwenden können, was Sie gerade brauchen.

Trotzdem können Desktop-Plattformen relativ einfach zur Distribution verwendet werden, da es Wrapper gibt, die Sie bei der Erstellung nativer Builds Ihres Spiels unterstützen können, siehe [Verpackung von Spielen](#verpackung_von_spielen). Es ist auch schön, Desktop-Steuerungen für Ihre Spiele anzubieten, selbst wenn Sie hauptsächlich Mobilgeräte anvisieren. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und der Desktop ist eine davon. Außerdem ist es normalerweise einfacher, das Spiel zuerst auf dem Desktop zu erstellen und zu testen und dann zum Debuggen auf Mobilgeräte überzugehen.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen zur Veröffentlichung eines Spiels:

- Eigenes Hosting
- Publisher
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [promotet](/de/docs/Games/Publishing_games/Game_promotion) zu werden, aber auch einprägsam sein sollte, damit die Leute ihn nicht vergessen.

### Eigenes Hosting

Wenn Sie ein Front-End-Entwickler sind, wissen Sie vielleicht bereits, was zu tun ist. Ein HTML-Spiel ist nur eine weitere Website. Sie können es auf einen Remote-Server hochladen, sich einen einprägsamen Domain-Namen sichern und es selbst hosten.

Wenn Sie Geld mit der Spieleentwicklung verdienen möchten, sollten Sie Ihren Quellcode auf die eine oder andere Weise gegen Leute sichern, die ihn leicht nehmen und als ihren eigenen verkaufen könnten. Sie können den Code zusammenfassen und verkleinern, um ihn kleiner zu machen, und ihn so verschleiern, dass es viel schwieriger ist, Ihr Spiel zu rekonstruieren. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt aus Spaß arbeiten, wird es denjenigen zugutekommen, die von dem, was Sie erstellt haben, lernen möchten, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal um die Suche nach einem Hosting-Anbieter kümmern, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/host-your-html5-games-on-github-pages). Sie erhalten kostenloses Hosting, Versionskontrolle und mögliche Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name schon sagt, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, was Ihr Plan ist, um Ihr Spiel zu verbreiten: Möchten Sie es überall hin versenden, wo es möglich ist, oder möchten Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Es liegt an Ihnen. Erwägen Sie verschiedene Optionen, experimentieren Sie und ziehen Sie Schlussfolgerungen. Publisher werden im Detail im Artikel [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/), oder [CrazyGames](https://developer.crazygames.com/). Dort können Sie Ihr Spiel einreichen und es erhält aufgrund des großen Verkehrs, den diese Seiten anziehen, einige natürliche Promotion. Einige dieser Portale nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Seite einbetten. Solche Exposition kann einfach eine [Promotion](/de/docs/Games/Publishing_games/Game_promotion) für Ihr Spiel bieten, oder wenn Sie Anzeigen neben Ihrem Spiel anzeigen (oder andere Geldverdienoptionen) kann es auch Monetarisierung bieten.

### Web- und nativen Stores

Sie können Ihr Spiel auch direkt in verschiedenen Arten von Stores oder Marktplätzen hochladen und veröffentlichen. Dafür müssen Sie es vorbereiten und in ein bestimmtes Build-Format für jedes App-Ökosystem verpacken, das Sie anvisieren möchten. Weitere Details zu den verfügbaren Marktplatztypen finden Sie unter [Marktplätze — Distributionsplattformen](#marktplätze_—_distributionsplattformen).

## Marktplätze — Distributionsplattformen

Lassen Sie uns sehen, welche verfügbaren Optionen es für die Marktplätze/Stores für verschiedene Plattformen und Betriebssysteme gibt.

> [!NOTE]
> Dies sind die beliebtesten Distributionsplattformen, aber das bedeutet nicht, dass dies die einzigen Optionen sind. Anstatt zu versuchen, Ihr Spiel zu den Tausenden von anderen im iOS Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu werben, das an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Web-Stores

Die besten Plattformen für HTML-Spiele sind webbasierte Stores. Sie können Spiele für Web-Stores vorbereiten, indem Sie eine Manifestdatei und andere Daten, wie Ressourcen, in einem gezippten Paket hinzufügen. Nicht viele Modifikationen des Spiels selbst sind erforderlich.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option – wieder mit einer fertigen Manifestdatei, dem Zippen Ihres Spiels und dem Ausfüllen des Online-Einreichungsformulars ist fast alles, was erforderlich ist.

### Native mobile Stores

Wenn es um den mobilen Markt geht, gibt es den Apple App Store für iOS, Google Play für Android und den Rest der Konkurrenz. Native Stores sind bereits gefüllt mit etablierten Entwicklern, die großartige Spiele verkaufen, daher müssen Sie talentiert und glücklich sein, um bemerkt zu werden.

- Der iOS App Store ist ziemlich schwer zu erreichen, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie werden eine Woche oder zwei warten müssen, um akzeptiert zu werden. Außerdem ist es der prominenteste mobile Store mit Hunderttausenden von Apps, so dass es extrem schwer ist, sich von der Menge abzuheben.
- Die Anforderungen von Google Play sind weniger streng, so dass der Store mit qualitativ minderwertigen Spielen überschwemmt ist. Es ist immer noch ziemlich schwer, dort bemerkt zu werden, da die Anzahl der täglich eingereichten Apps riesig ist. Es ist auch schwieriger, hier Geld zu verdienen – die meisten der bezahlten Spiele von iOS werden als kostenlose Spiele auf Android veröffentlicht, wobei die Monetarisierung durch In-App-Käufe (IAPs) oder Anzeigen erfolgt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, ein Stück vom Kuchen zu bekommen, und liegen weit hinter der Konkurrenz zurück. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher sein wird, bemerkt zu werden.

Wenn Sie nach weiteren Informationen über die verschiedenen Arten von App-Stores suchen, können Sie den Artikel [Liste der mobilen Software-Distributionsplattformen](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia nachschlagen.

### Nativer Desktop

Um Ihr Publikum zu erweitern, können Sie das Desktop-Ökosystem mit Ihren HTML-Spielen ebenfalls erschließen – denken Sie jedoch an all die beliebten AAA-Spiele, die den größten Marktanteil einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um den Desktop-Bereich richtig zu bedienen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist auf jeden Fall [Steam](https://steamcommunity.com/) – unabhängige Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect) Programm auf Steam gelangen. Denken Sie daran, dass Sie die plattformübergreifenden Probleme selbst lösen müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Aufsehen um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), bei dem die beliebtesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist eher eine ausgezeichnete Werbemöglichkeit als ein Weg, viel Geld zu verdienen, aber die Preise für die Spiele in einem Bundle sind normalerweise ziemlich niedrig.

## Verpackung von Spielen

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem vertreiben möchten, können Sie es dennoch verpacken. Das Gute daran ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten – Sie können es einmal erstellen und Werkzeuge verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind normalerweise ziemlich zuverlässig, jedoch sollten Sie sie dennoch testen und auf kleine Probleme oder Fehler achten, die behoben werden müssen.

### Verfügbare Werkzeuge

Es gibt verschiedene Werkzeuge zur Auswahl, abhängig von Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Werkzeug für Ihre spezielle Aufgabe zu wählen.

- [Ejecta](https://impactjs.com/ejecta) – ein Werkzeug, das speziell zum Verpacken von Spielen erstellt wurde, die mit dem [ImpactJS](https://impactjs.com/) Framework für iOS erstellt wurden, entwickelt vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) – ehemals bekannt als Node-WebKit, ist die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Distributionen sind mit der WebKit-Engine verpackt, um Rendering auf jeder Plattform bereitzustellen.

Andere alternative Werkzeuge sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) – eine interessante Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) – auch bekannt als Atom Shell – ist ein Open-Source- und plattformübergreifendes Werkzeug von GitHub.
- [Manifold.js](https://manifoldjs.com/) – dieses Werkzeug vom Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Der Vertrieb ist der Weg, der Welt Zugang zu Ihrem Spiel zu geben. Es gibt viele verfügbare Optionen und es gibt keine einzige gute Antwort darauf, welche die beste ist. Wenn Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren – die Leute wissen zu lassen, dass Ihr Spiel existiert. Ohne Promotion würden sie nicht einmal davon erfahren und es spielen können.
