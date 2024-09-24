---
title: Spielevertrieb
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 737d38e2a7511d030feaaca27ed1ce97086a9882
---

{{GamesSidebar}}

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) befolgt und ein HTML-Spiel erstellt — das ist großartig! Dieser Artikel behandelt alles, was Sie über die Möglichkeiten wissen müssen, wie Sie Ihr neu erstelltes Spiel verteilen können. Dies umfasst die Möglichkeit, es selbst online zu hosten, es auf offenen Marktplätzen einzureichen und es auf geschlossenen wie Google Play oder dem iOS App Store einzureichen.

## Vorteile von HTML gegenüber nativen Lösungen

Spiele mit HTML zu entwickeln, bietet Ihnen zusätzliche Vorteile, wie etwa:

### Multiplattform-Vergnügen

Die Technologie selbst ist plattformübergreifend, sodass Sie den Code einmal schreiben und auf mehreren Geräten einsetzen können. Dies kann von kostengünstigen Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank reichen, vorausgesetzt, dieser kann einen modernen Browser verarbeiten.

Sie müssen keine separaten Teams haben, die am selben Titel arbeiten und unterschiedliche Plattformen anvisieren, da Sie nur eine Codebasis benötigen. Sie können mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, bis der Code Ihres Spiels aktualisiert ist. Wenn Ihr Benutzer einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern fast sofort den aktualisierten Code bereitzustellen.

### Direkte Link-Verteilung und sofortiges Spielen

Bei HTML-Spielen müssen Sie den Leuten nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen. Sie können ihnen einfach eine direkte URL senden, um auf das Spiel zuzugreifen, die sie dann anklicken können, um das Spiel sofort zu spielen, ohne dass Drittanbieter-Plugins verwendet oder ein großes Paket heruntergeladen und installiert werden muss. Beachten Sie, dass das Herunterladen des Spiels je nach Größe des Spiels und Ihrer Netzgeschwindigkeit dennoch einige Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Traffic direkt dorthin lenken können, wo Sie ihn haben möchten, und sich nicht durch viele Hindernisse kämpfen müssen, um zu spielen.

## Desktop vs. Mobile

Der Großteil des Verkehrs, der für uns von Interesse ist — Menschen, die HTML-Spiele spielen — kommt von mobilen Geräten. Deshalb müssen Sie sich darauf konzentrieren, wenn Sie wirklich erfolgreich sein wollen. Mobile Geräte sind der Ort, an dem die HTML-Technologie wirklich glänzen und ihre Vorteile zeigen kann. Es gibt kein Flash und HTML ist vollständig plattformübergreifend.

Sich direkt mit Desktop-Spielen zu messen, ist sehr schwierig. Sie können Ihre HTML-Spiele in derselben Arena platzieren (siehe [Native Desktop](#native_desktop) weiter unten) und das sollten Sie, da es gut ist, die unterstützten Plattformen zu diversifizieren. Aber Sie müssen daran denken, dass Entwickler, die Desktop-Spiele erstellen, jahrelange Erfahrung, großartige Werkzeuge und stabile Vertriebskanäle haben. Viele HTML-Spiele zielen auf andere Marktsegmente als native Desktop-Spiele, z.B. einfache Zeittötungsspiele, die unterwegs gespielt werden sollen, anstatt große immersive Erlebnisse. Solche Spiele sind oft so gestaltet, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und die zweite Hand für das verwenden können, was Sie gerade benötigen.

Das gesagt, können Desktop-Plattformen für den Vertrieb relativ einfach genutzt werden, da es Wrapper gibt, die Ihnen helfen, native Builds Ihres Spiels vorzubereiten, siehe [Verpacken von Spielen](#verpacken_von_spielen). Es ist auch nett, Desktop-Kontrollen für Ihre Spiele bereitzustellen, selbst wenn Sie hauptsächlich auf Mobilgeräte abzielen. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und der Desktop ist eine davon. Außerdem ist es normalerweise einfacher, das Spiel zuerst auf dem Desktop zu erstellen und zu testen und dann mit dem Debugging auf Mobilgeräten fortzufahren.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es darum geht, ein Spiel zu veröffentlichen:

- Selbst-Hosting
- Publisher
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um es später schnell [zu bewerben](/de/docs/Games/Publishing_games/Game_promotion), aber auch einprägsam genug, damit die Leute ihn nicht vergessen.

### Selbst-Hosting

Wenn Sie Front-End-Entwickler sind, wissen Sie vielleicht schon, was zu tun ist. Ein HTML-Spiel ist nur eine weitere Webseite. Sie können es auf einem entfernten Server hochladen, sich einen einprägsamen Domainnamen sichern und es selbst hosten.

Wenn Sie mit der Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode auf die eine oder andere Weise gegen Personen sichern, die ihn einfach nehmen und als ihren eigenen verkaufen könnten. Sie können den Code zusammenfügen und minimieren, um ihn kleiner zu machen, und ihn so verschleiern, dass es viel schwieriger wird, Ihr Spiel zu reverse-engineeren. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt nur zum Spaß arbeiten, wird es denen zugute kommen, die aus dem, was Sie erstellt haben, lernen möchten, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal Gedanken darüber machen, einen Hosting-Anbieter zu finden, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/2014/02/host-your-html5-games-on-github-pages/). Sie erhalten kostenloses Hosting, Versionskontrolle und potenzielle Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name schon sagt, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, was Ihr Plan für die Verbreitung Ihres Spiels ist: Möchten Sie es überallhin schicken oder seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Es liegt an Ihnen. Berücksichtigen Sie verschiedene Optionen, experimentieren Sie und ziehen Sie Schlüsse. Publisher werden im [Monetarisierungsartikel](/de/docs/Games/Publishing_games/Game_monetization) näher erläutert.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie z.B. [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Poki](https://developers.poki.com/) oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einreichen können, und es wird etwas natürliche Werbung bekommen, aufgrund des hohen Verkehrs, den diese Seiten anziehen. Einige von ihnen nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Seite einbetten. Eine solche Veröffentlichung kann einfach [Werbung](/de/docs/Games/Publishing_games/Game_promotion) für Ihr Spiel bieten, oder wenn Sie Anzeigen in der Nähe Ihres Spiels schalten (oder andere Möglichkeiten Geld zu verdienen), kann sie auch Monetarisierung bieten.

### Web- und Native Stores

Sie können Ihr Spiel auch direkt auf verschiedenen Plattformen oder Marktplätzen hochladen und veröffentlichen. Dazu müssen Sie es vorbereiten und in ein Aufbauformat packen, das für jedes App-Ökosystem spezifisch ist, das Sie anpeilen möchten. Weitere Informationen zu den verfügbaren Marktplatztypen finden Sie unter [Marktplätze — Vertriebsplattformen](#marktplätze_—_vertriebsplattformen).

## Marktplätze — Vertriebsplattformen

Werfen wir einen Blick auf die verfügbaren Optionen bezüglich der Marktplätze/Stores, die für verschiedene Plattformen und Betriebssysteme verfügbar sind.

> [!NOTE]
> Dies sind die beliebtesten Vertriebsplattformen, aber das bedeutet nicht, dass dies die einzigen Optionen sind. Anstatt Ihr Spiel zu den Tausenden von anderen im iOS-Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu werben, das an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Webstores

Die besten Plattformen für HTML-Spiele sind webbasierte Stores. Sie können Spiele für Webstores vorbereiten, indem Sie eine Manifestdatei und andere Daten, wie z.B. Ressourcen, in einem gezippten Paket hinzufügen. Nur wenige Änderungen am Spiel selbst sind erforderlich.

- Der [Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option — wieder, wenn Sie eine Manifestdatei vorbereiten, Ihr Spiel zippen und das Online-Formular ausfüllen, ist das alles, was erforderlich ist.

### Native mobile Stores

Auf dem Mobilmarkt gibt es den Apple App Store für iOS, Google Play für Android und die ganze restliche Konkurrenz. Native Stores sind bereits mit etablierten Entwicklern gefüllt, die großartige Spiele verkaufen, daher müssen Sie talentiert und glücklich sein, um bemerkt zu werden.

- Der iOS App Store ist ziemlich schwer zu betreten, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie müssen ein oder zwei Wochen warten, um akzeptiert zu werden. Außerdem ist es der prominenteste Mobilstore mit Hunderttausenden von Apps, sodass es extrem schwer ist, sich von der Masse abzuheben.
- Die Anforderungen von Google Play sind weniger streng, daher ist der Store mit Spielen von geringer Qualität überflutet. Es ist immer noch ziemlich schwer, dort bemerkt zu werden, da die Anzahl der täglich eingereichten Apps riesig ist. Es ist auch schwieriger, hier Geld zu verdienen — die meisten der kostenpflichtigen Spiele aus iOS werden auf Android als kostenlose Spiele veröffentlicht, mit Monetarisierung durch In-App-Käufe (IAPs) oder Anzeigen.
- Andere Stores für native Mobile-Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, ein Stück vom Kuchen zu bekommen und sind weit hinter der Konkurrenz zurück. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher ist, bemerkt zu werden.

Wenn Sie nach weiteren Informationen über die verschiedenen Arten von App-Stores suchen, können Sie den [Artikel über mobile Software-Vertriebsplattformen](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia nachlesen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie auch das Desktop-Ökosystem mit Ihren HTML-Spielen ansprechen — denken Sie nur an all die beliebten AAA-Spiele, die den Großteil des Marktanteils einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um das Desktop-Ding richtig zu machen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) — Indie-Entwickler können über das Programm [Steam Direct](https://partner.steamgames.com/steamdirect) auf Steam gelangen. Denken Sie daran, dass Sie die plattformübergreifenden Probleme selbst bewältigen müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Buzz um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), wo die beliebtesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist eher eine ausgezeichnete Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, da die Preise für die Spiele in einem Bundle normalerweise ziemlich niedrig sind.

## Verpacken von Spielen

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem vertreiben möchten, können Sie es trotzdem verpacken. Das Gute ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten — Sie können es einmal erstellen und Tools verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind in der Regel ziemlich zuverlässig, aber Sie sollten sie trotzdem testen und nach kleinen Problemen oder Fehlern Ausschau halten, die behoben werden müssen.

### Verfügbare Werkzeuge

Es gibt verschiedene Tools zur Auswahl, abhängig von Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Tool für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) — ein Werkzeug, speziell zum Verpacken von Spielen, die mit [dem ImpactJS](https://impactjs.com/) Framework für iOS erstellt wurden, entwickelt vom ImpactJS-Autor. Es bietet eine nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) — früher bekannt als Node-Webkit, ist dies die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux läuft. Die Distributionen werden mit der WebKit-Engine verpackt, um auf jeder Plattform Rendering zu bieten.

Andere alternative Werkzeuge sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — eine interessante Alternative, ähnlich zu CocoonIO.
- [Electron](https://www.electronjs.org/) — bekannt als Atom Shell — ist ein Open-Source- und plattformübergreifendes Tool von GitHub.
- [Manifold.js](https://manifoldjs.com/) — dieses Tool vom Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Die Verbreitung ist der Weg, der Welt den Zugang zu Ihrem Spiel zu ermöglichen. Es gibt viele verfügbare Optionen, und es gibt keine einzige gute Antwort darauf, welche die beste ist. Wenn Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren — die Leute wissen zu lassen, dass Ihr Spiel existiert. Ohne Promotion könnten sie nicht einmal davon erfahren und es spielen.
