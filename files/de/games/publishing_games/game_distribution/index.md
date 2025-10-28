---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: f8939dd06d7b120f77c4b4c70cac591d0eb20beb
---

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) befolgt und ein HTML-Spiel erstellt — großartig! Dieser Artikel behandelt alles, was Sie wissen müssen, um Ihr neu erstelltes Spiel in die Welt zu bringen. Dies umfasst das eigene Hosting im Internet, das Einreichen in offenen Marktplätzen und das Einreichen in geschlossenen wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Anwendungen

Spiele mit HTML zu erstellen bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Multiplattform-Komfort

Die Technologie selbst ist plattformübergreifend, sodass Sie den Code einmal schreiben und auf mehreren Geräten verwenden können. Dies kann von einfachen Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar Kühlschränken reichen, sofern sie einen modernen Browser unterstützen.

Sie benötigen keine separaten Teams, um an demselben Titel für verschiedene Plattformen zu arbeiten, da Sie sich nur um eine Codebasis kümmern müssen. Sie können mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn ein Benutzer einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern fast sofort den aktualisierten Code bereitzustellen.

### Direkte Linkverteilung und sofortiges Spielen

Bei HTML-Spielen müssen Sie den Leuten nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen. Sie können ihnen einfach eine direkte URL senden, über die sie auf das Spiel zugreifen können. Sie können dann darauf klicken, um das Spiel sofort zu spielen, ohne dass Drittanbieter-Plugins oder das Herunterladen und Installieren eines großen Pakets erforderlich sind. Beachten Sie, dass das Herunterladen des Spiels je nach Größe und Netzwerkgeschwindigkeit trotzdem etwas Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Traffic direkt dorthin lenken können, wo Sie ihn haben möchten, und nicht durch viele Hürden springen müssen, um zu spielen.

## Desktop vs. Mobil

Der Großteil des Traffics, an dem wir interessiert sind — Menschen, die HTML-Spiele spielen — kommt von mobilen Geräten. Darauf müssen Sie sich konzentrieren, wenn Sie wirklich erfolgreich sein wollen. Mobile Geräte sind der Bereich, in dem HTML-Technologie wirklich glänzen kann. Es gibt kein Flash und HTML ist vollständig plattformübergreifend.

Der direkte Wettbewerb mit Desktop-Spielen ist sehr schwierig. Sie können Ihre HTML-Spiele in denselben Bereich stellen (siehe [Native Desktop](#native_desktop) weiter unten) und sollten dies auch tun, da es gut ist, die unterstützten Plattformen zu diversifizieren. Sie müssen jedoch bedenken, dass Entwickler von Desktop-Spielen jahrelange Erfahrung, großartige Werkzeuge und stabile Vertriebskanäle haben. Viele HTML-Spiele zielen auf andere Marktsegmente als native Desktop-Spiele ab, zum Beispiel auf einfache Zeitvertreib-Spiele, die unterwegs gespielt werden können, im Gegensatz zu großen immersiven Erlebnissen. Solche Spiele sind oft so konzipiert, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und mit der zweiten Hand tun können, was Sie gerade benötigen.

Dennoch können Desktop-Plattformen recht einfach für den Vertrieb genutzt werden, da es Wrapper gibt, die Ihnen helfen können, native Builds Ihres Spiels vorzubereiten, siehe [Verpackung der Spiele](#verpackung_von_spielen). Es ist auch schön, Desktop-Steuerungen für Ihre Spiele bereitzustellen, selbst wenn Sie hauptsächlich mobile Geräte anvisieren. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und der Desktop ist eine davon. Außerdem ist es in der Regel einfacher, das Spiel zuerst auf dem Desktop zu entwickeln und zu testen, bevor man sich der Fehlerbehebung auf mobilen Geräten zuwendet.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es um die Veröffentlichung eines Spiels geht:

- Eigenes Hosting
- Publisher
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [beworben](/de/docs/Games/Publishing_games/Game_promotion) zu werden, aber auch einprägsam genug, damit er nicht vergessen wird.

### Eigenes Hosting

Wenn Sie ein Front-End-Entwickler sind, wissen Sie möglicherweise schon, was zu tun ist. Ein HTML-Spiel ist einfach eine weitere Website. Sie können es auf einen entfernten Server hochladen, sich einen einprägsamen Domainnamen besorgen und es selbst hosten.

Wenn Sie mit der Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode in irgendeiner Weise gegen Personen absichern, die ihn leicht nehmen und als ihren eigenen verkaufen könnten. Sie können den Code zusammenfügen und minimieren, um ihn kleiner zu machen, und ihn verschleiern, sodass es viel schwieriger wird, Ihr Spiel rückzuentwickeln. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt einfach aus Spaß arbeiten, dann wird es denjenigen zugutekommen, die von dem, was Sie erstellt haben, lernen möchten, wenn Sie den Quellcode offen lassen. Sie müssen sich nicht einmal um die Suche nach einem Hosting-Anbieter kümmern, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/host-your-html5-games-on-github-pages). Sie erhalten kostenloses Hosting, Versionskontrolle und möglicherweise Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name schon sagt, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, was Ihr Plan für die Verbreitung Ihres Spiels ist: Möchten Sie es überallhin schicken, oder möchten Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) gekauft haben? Es liegt an Ihnen. Ziehen Sie verschiedene Optionen in Betracht, experimentieren Sie und ziehen Sie Schlussfolgerungen. Publisher werden im [Monetarisierungs](/de/docs/Games/Publishing_games/Game_monetization)-Artikel ausführlicher erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/) oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einreichen können, und es wird etwas natürliche Promotion erhalten, da diese Seiten großen Traffic anziehen. Einige dieser Seiten nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel auf ihrer Seite einbinden. Solche Möglichkeiten können nur für die [Promotion](/de/docs/Games/Publishing_games/Game_promotion) Ihres Spiels sorgen, oder wenn Sie Anzeigen neben Ihrem Spiel schalten (oder andere Möglichkeiten, Geld zu verdienen), kann dies auch zur Monetarisierung beitragen.

### Web- und native Stores

Sie können Ihr Spiel auch direkt in verschiedenen Typen von Stores oder Marktplätzen hochladen und veröffentlichen. Dazu müssen Sie es vorbereiten und in ein Build-Format verpacken, das für jedes App-Ökosystem spezifisch ist, das Sie ansprechen möchten. Siehe [Marktplätze — Distributionsplattformen](#marktplätze_—_distributionsplattformen) für weitere Details zu den verfügbaren Marktplatzt-Typen.

## Marktplätze — Distributionsplattformen

Lassen Sie uns sehen, welche Optionen bezüglich der Marktplätze/Stores es für verschiedene Plattformen und Betriebssysteme gibt.

> [!NOTE]
> Dies sind die beliebtesten Distributionsplattformen, aber das heißt nicht, dass es die einzigen Optionen sind. Anstatt Ihr Spiel zu den Tausenden anderer im iOS-Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu vermarkten, das sich für Ihre Spiele interessieren würde. Ihre Kreativität ist dabei entscheidend.

### Web-Stores

Die besten Plattformen für HTML-Spiele sind webbasierte Stores. Sie können Spiele für Web-Stores vorbereiten, indem Sie eine Manifestdatei und andere Daten, wie Ressourcen, in einem gezippten Paket hinzufügen. Nicht viele Modifikationen am Spiel selbst sind erforderlich.

- Der [Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option — nachdem die Manifestdatei bereit ist, müssen Sie Ihr Spiel nur noch zippen und das Online-Einreichungsformular ausfüllen.

### Native mobile Stores

Was den mobilen Markt angeht, gibt es den Apple App Store für iOS, Google Play für Android und den Rest der Konkurrenz. Die nativen Stores sind bereits mit etablierten Entwicklern gefüllt, die großartige Spiele verkaufen, sodass Sie talentiert und auch ein wenig Glück haben müssen, um bemerkt zu werden.

- Der iOS App Store ist recht schwierig zu betreten, da es strikte Anforderungen gibt, die Spiele erfüllen müssen, und Sie müssen eine Woche oder zwei warten, um angenommen zu werden. Außerdem ist es der größte Mobile-Store mit Hunderttausenden von Apps, sodass es extrem schwer ist, sich von der Masse abzuheben.
- Die Anforderungen von Google Play sind weniger streng, daher ist der Store mit minderwertigen Spielen überfüllt. Es ist immer noch ziemlich schwer, dort bemerkt zu werden, da die Zahl der täglich eingereichten Apps enorm ist. Es ist auch schwieriger, hier Geld zu verdienen — die meisten der kostenpflichtigen Spiele von iOS werden als kostenlose Spiele auf Android veröffentlicht, mit Monetarisierung durch In-App-Käufe (IAPs) oder Anzeigen.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, ein Stück vom Kuchen zu bekommen, und sind weit hinter der Konkurrenz. Es kann vorteilhaft sein, Ihr Spiel dort einzureichen, da es viel einfacher ist, bemerkt zu werden.

Wenn Sie mehr Informationen über die verschiedenen Typen von App-Stores suchen, können Sie den [Artikel über mobile Software-Distributionsplattformen](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia nachlesen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie das Desktop-Ökosystem mit Ihren HTML-Spielen ebenfalls erreichen — denken Sie aber an all die beliebten AAA-Spiele, die den größten Marktanteil einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um das Desktop-Ding richtig zu machen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) — Indie-Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect) Programm auf Steam gelangen. Denken Sie daran, dass Sie sich selbst um die plattformübergreifenden Probleme kümmern müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Aufsehen um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), wo die bekanntesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist eher eine ausgezeichnete Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, da die Preise, die für die Spiele in einem Bundle gezahlt werden, in der Regel recht niedrig sind.

## Verpackung von Spielen

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem verteilen möchten, können Sie es trotzdem tun, indem Sie es verpacken. Das Gute ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten — Sie können es einmal erstellen und dann Tools verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind in der Regel ziemlich zuverlässig, aber Sie sollten sie trotzdem testen und nach kleinen Problemen oder Fehlern Ausschau halten, die behoben werden müssen.

### Verfügbare Tools

Es gibt verschiedene Tools zur Auswahl, abhängig von Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Tool für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) — ein Tool, das speziell für die Verpackung von Spielen entwickelt wurde, die mit dem [ImpactJS](https://impactjs.com/) Framework für iOS erstellt wurden, entwickelt vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) — früher bekannt als Node-WebKit, ist dies die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Distributionen sind mit der WebKit-Engine verpackt, um auf jeder Plattform Rendering bereitzustellen.

Weitere alternative Tools sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — eine interessante Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) — bekannt als Atom Shell — ist ein quelloffenes plattformübergreifendes Tool von GitHub.
- [Manifold.js](https://www.manifoldjs.com/) — dieses Tool von Microsoft kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Verteilung ist der Weg, der Welt Zugang zu Ihrem Spiel zu geben. Es gibt viele Optionen, und es gibt keine einzelne Antwort darauf, welche die beste ist. Wenn Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf die [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren — um die Leute wissen zu lassen, dass Ihr Spiel existiert. Ohne Promotion könnten sie nicht einmal davon erfahren und es spielen.
