---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 1a3993a28969505284fc1705e9e0698aeaf8a396
---

{{GamesSidebar}}

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) befolgt und ein HTML-Spiel erstellt — das ist großartig! Dieser Artikel behandelt alles, was Sie über die verschiedenen Möglichkeiten wissen müssen, wie Sie Ihr neu erstelltes Spiel in die Welt hinaus verteilen können. Dazu gehört das Hosting des Spiels online, das Einreichen in offenen Marktplätzen und das Einreichen in geschlossenen Marktplätzen wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Apps

Spiele mit HTML zu entwickeln bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Plattformübergreifend

Die Technologie selbst ist plattformunabhängig, sodass Sie den Code einmal schreiben und auf mehrere Geräte abzielen können. Dies kann von einfachen Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank reichen, wenn dieser einen modernen Browser unterstützt.

Sie müssen keine separaten Teams haben, die am selben Titel arbeiten und verschiedene Plattformen bedienen, da Sie nur eine Codebasis verwalten müssen. Sie können mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn Ihr Benutzer einen Fehler findet, können Sie diesen schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern fast sofort den neuesten Code bereitzustellen.

### Direkte Link-Verteilung und sofortiges Spielen

Sie müssen den Leuten nicht sagen, dass sie Ihr Spiel in einem App Store suchen sollen, wenn es um HTML-Spiele geht. Sie können ihnen einfach eine direkte URL senden, über die sie das Spiel sofort spielen können, ohne dass Drittanbieter-Plugins erforderlich sind oder ein großes Paket heruntergeladen und installiert werden muss. Beachten Sie, dass das Herunterladen des Spiels je nach Größe des Spiels und Ihrer Netzwerkgeschwindigkeit dennoch etwas Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Verkehr direkt dorthin lenken können, wo Sie ihn haben möchten, und nicht durch viele Hindernisse springen müssen, um zu spielen.

## Desktop vs. Mobile

Der Großteil des Verkehrs, an dem wir interessiert sind — Personen, die HTML-Spiele spielen — kommt von mobilen Geräten, sodass Sie darauf achten müssen, wenn Sie wirklich erfolgreich sein möchten. Mobile Geräte sind der Bereich, in dem HTML-Technologie wirklich glänzen kann und ihre Vorteile zeigt. Es gibt kein Flash und HTML ist vollständig plattformunabhängig.

Direkt mit Desktop-Spielen zu konkurrieren, ist sehr schwierig. Sie können Ihre HTML-Spiele im selben Bereich platzieren (siehe [Native Desktop](#native_desktop) weiter unten) und sollten dies auch tun, da es gut ist, die unterstützten Plattformen zu diversifizieren. Sie müssen jedoch bedenken, dass Entwickler von Desktop-Spielen über jahrelange Erfahrung, großartige Werkzeuge und stabile Vertriebskanäle verfügen. Viele HTML-Spiele werden andere Marktsegmente ansprechen als native Desktop-Spiele, z.B. einfache Zeitvertreib-Spiele, die unterwegs gespielt werden, anstatt große immersive Erlebnisse. Solche Spiele sind oft so konzipiert, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und die zweite Hand für das verwenden können, was Sie gerade brauchen.

Davon abgesehen können Desktop-Plattformen recht einfach zur Verbreitung genutzt werden, da es Wrapper gibt, mit denen Sie native Builds Ihres Spiels erstellen können, siehe [Verpackung von Spielen](#verpackung_von_spielen). Es ist auch nett, Desktop-Steuerungen für Ihre Spiele bereitzustellen, selbst wenn Sie hauptsächlich auf mobile Geräte abzielen. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und Desktop ist eine davon. Außerdem ist es normalerweise einfacher, das Spiel zuerst auf dem Desktop zu entwickeln und zu testen und dann mit dem Debuggen auf mobilen Geräten fortzufahren.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es darum geht, ein Spiel zu veröffentlichen:

- Selbst-Hosting
- Verlage
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [beworben](/de/docs/Games/Publishing_games/Game_promotion) zu werden, aber auch einprägsam genug, damit die Leute ihn nicht vergessen.

### Selbst-Hosting

Wenn Sie ein Frontend-Entwickler sind, wissen Sie vielleicht schon, was zu tun ist. Ein HTML-Spiel ist nur eine weitere Website. Sie können es auf einen entfernten Server hochladen, sich einen einprägsamen Domainnamen sichern und es selbst hosten.

Wenn Sie mit der Entwicklung von Spielen Geld verdienen möchten, sollten Sie Ihren Quellcode auf die ein oder andere Weise gegen Leute sichern, die ihn leicht nehmen und als ihren eigenen verkaufen könnten. Sie können den Code zusammenführen und minifizieren, um ihn kleiner zu machen, und ihn so verschleiern, dass es viel schwieriger ist, Ihr Spiel rückzuentwickeln. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Arbeiten Sie an einem Nebenprojekt nur zum Spaß, wird es denen zugutekommen, die von dem, was Sie erstellt haben, lernen möchten, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal Sorgen um die Suche nach einem Hosting-Provider machen, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/2014/02/host-your-html5-games-on-github-pages/). Sie erhalten kostenloses Hosting, Versionskontrolle und potenzielle Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Verlage und Portale

Wie der Name schon sagt, können Verlage die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, was Ihr Plan ist, um Ihr Spiel zu verbreiten: Möchten Sie es so weit wie möglich verbreiten oder seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Das liegt bei Ihnen. Erwägen Sie verschiedene Optionen, experimentieren Sie und ziehen Sie Schlussfolgerungen. Verlage werden im [Monetarisierungsartikel](/de/docs/Games/Publishing_games/Game_monetization) näher erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/) oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einreichen können und es aufgrund des großen Verkehrs, den diese Seiten anziehen, einige natürliche Promotion erhält. Einige dieser Seiten nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Seite einbetten. Solche Ausstellung kann einfach [Promotion](/de/docs/Games/Publishing_games/Game_promotion) für Ihr Spiel bieten, oder wenn Sie Werbung neben Ihrem Spiel zeigen (oder andere Möglichkeiten zur Umsatzgenerierung), kann es auch Monetarisierung bieten.

### Web- und nativen Stores

Sie können Ihr Spiel auch direkt in verschiedenen Arten von Stores oder Marktplätzen hochladen und veröffentlichen. Dazu müssen Sie es vorbereiten und in einem Build-Format verpacken, das spezifisch für jedes App-Ökosystem ist, das Sie anvisieren möchten. Siehe [Marktplätze — Vertriebsplattformen](#marktplätze_—_vertriebsplattformen) für weitere Details über die verfügbaren Arten von Marktplätzen.

## Marktplätze — Vertriebsplattformen

Lassen Sie uns sehen, welche verfügbaren Optionen es in Bezug auf die Marktplätze/Stores für verschiedene Plattformen und Betriebssysteme gibt.

> [!NOTE]
> Dies sind die beliebtesten Vertriebsplattformen, aber das bedeutet nicht, dass es die einzigen Optionen sind. Anstatt zu versuchen, Ihr Spiel zu den Tausenden anderen im iOS Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu vermarkten, das an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Web-Stores

Die besten Plattformen für HTML-Spiele sind Web-basierte Stores. Sie können Spiele für Web-Stores vorbereiten, indem Sie eine Manifestdatei und andere Daten wie Ressourcen in einem gezippten Paket hinzufügen. Es sind nicht viele Änderungen am Spiel selbst erforderlich.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option — auch hier genügt es, eine Manifestdatei bereitzuhalten, Ihr Spiel zu zippen und das Online-Einreichungsformular auszufüllen.

### Native mobile Stores

Was den mobilen Markt betrifft, gibt es den Apple App Store für iOS, Google Play für Android und den Rest der Konkurrenz. Nativen Stores sind bereits mit etablierten Entwicklern gefüllt, die großartige Spiele verkaufen, sodass Sie talentiert und glücklich sein müssen, um wahrgenommen zu werden.

- Der iOS App Store ist ziemlich schwer zu betreten, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie werden ein oder zwei Wochen warten müssen, bis Sie akzeptiert werden. Plus, es ist der prominenteste mobile Store mit Hunderten von Tausenden von Apps, sodass es extrem schwierig ist, aus der Masse hervorzustechen.
- Die Anforderungen von Google Play sind weniger streng, sodass der Store mit minderwertigen Spielen verschmutzt ist. Es ist dennoch ziemlich schwer, dort wahrgenommen zu werden, da die Anzahl der täglich eingereichten Apps enorm ist. Es ist auch schwerer, hier Geld zu verdienen — die meisten der kostenpflichtigen Spiele auf iOS werden als kostenlose Spiele auf Android veröffentlicht, wobei die Monetarisierung durch In-App-Käufe (IAPs) oder Anzeigen erfolgt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, ein Stück vom Kuchen abzukriegen, und liegen weit hinter der Konkurrenz zurück. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher sein wird, bemerkt zu werden.

Wenn Sie nach weiteren Informationen zu den verschiedenen Arten von App-Stores suchen, können Sie den [Artikel über die Liste der Vertriebsplattformen für mobile Software](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia ansehen.

### Native Desktop

Um Ihr Publikum zu vergrößern, können Sie auch das Desktop-Ökosystem mit Ihren HTML-Spielen angehen — denken Sie nur an all die populären AAA-Spiele, die den größten Teil des Marktanteils haben, und denken Sie sorgfältig darüber nach, ob dies zu Ihrer Strategie passt. Um das Desktop-Geschäft richtig zu machen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) — Indie-Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect) Programm auf Steam gelangen. Denken Sie daran, dass Sie die plattformübergreifenden Probleme selbst bewältigen müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Aufsehen um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), wo die beliebtesten Indie-Spiele einem breiteren Publikum präsentiert werden. Es ist eher eine ausgezeichnete Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, da die Preise, die für die Spiele in einem Bundle gezahlt werden, normalerweise ziemlich niedrig sind.

## Verpackung von Spielen

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem verteilen möchten, können Sie dies dennoch tun, indem Sie es verpacken. Der Vorteil ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten — Sie können es einmal erstellen und Werkzeuge verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind normalerweise ziemlich zuverlässig, aber Sie sollten sie dennoch testen und nach kleinen Problemen oder Bugs Ausschau halten, die zu beheben sind.

### Verfügbare Tools

Es gibt je nach Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen verschiedene Werkzeuge zur Auswahl. Es geht darum, das beste Werkzeug für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) — ein Werkzeug speziell für das Verpacken von mit dem [ImpactJS](https://impactjs.com/) Framework erstellten Spielen für iOS, entwickelt vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App Store.
- [NW.js](https://nwjs.io/) — früher bekannt als Node-WebKit, ist dies die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux läuft. Die Distributionen sind mit der WebKit-Engine paketiert, um auf jeder Plattform eine Darstellung zu bieten.

Andere alternative Tools sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — eine spannende Alternative, die CocoonIO ähnelt.
- [Electron](https://www.electronjs.org/) — bekannt als Atom Shell — ist ein quelloffenes und plattformübergreifendes Tool von GitHub.
- [Manifold.js](https://manifoldjs.com/) — dieses Tool aus dem Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Vertrieb ist der Weg, um der Welt Zugang zu Ihrem Spiel zu geben. Es gibt viele verfügbare Optionen und es gibt keine einzelne gute Antwort darauf, welche die beste ist. Sobald Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren — die Leute wissen zu lassen, dass Ihr Spiel existiert. Ohne Promotion würden sie nicht einmal davon erfahren und es spielen können.
