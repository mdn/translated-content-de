---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 737d38e2a7511d030feaaca27ed1ce97086a9882
---

{{GamesSidebar}}

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) befolgt und ein HTML-Spiel erstellt - das ist großartig! Dieser Artikel behandelt alles, was Sie über die Möglichkeiten zur Verteilung Ihres neu erstellten Spiels wissen müssen. Dies umfasst das Selbst-Hosting online, das Einreichen auf offenen Marktplätzen und das Einreichen auf geschlossenen Marktplätzen wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Anwendungen

Spiele mit HTML zu erstellen, bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Multiplattform-Komfort

Die Technologie selbst ist multiplattformfähig, sodass Sie den Code einmal schreiben und auf mehrere Geräte ausrichten können. Dies reicht von einfachen Smartphones oder Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank, sofern dieser einen modernen Browser unterstützt.

Es ist nicht nötig, separate Teams zu haben, die an demselben Titel arbeiten und dabei unterschiedliche Plattformen anvisieren. Durch nur eine Codebasis können Sie mehr Zeit und Geld in [Promotion](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Aktualisierungen

Sie müssen nicht mehrere Tage warten, um den Code Ihres Spiels zu aktualisieren. Wenn ein Benutzer einen Fehler findet, können Sie diesen schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern den aktualisierten Code fast sofort bereitzustellen.

### Direkte Link-Verteilung und Sofortspiel

Bei HTML-Spielen müssen Sie den Leuten nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen. Sie können ihnen einfach eine direkte URL senden, um auf das Spiel zuzugreifen, das sie dann anklicken können, um es sofort zu spielen, ohne dass zusätzliche Plugins oder der Download und die Installation eines großen Pakets erforderlich sind. Bedenken Sie, dass das Herunterladen des Spiels dennoch etwas Zeit in Anspruch nehmen kann, abhängig von der Größe des Spiels und der Netzwerkgeschwindigkeit. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Verkehr direkt dorthin lenken können, wo Sie ihn haben möchten, und nicht durch viele Hürden springen müssen, um es zu spielen.

## Desktop vs. Mobil

Der Großteil des Verkehrs, an dem wir interessiert sind — Menschen, die HTML-Spiele spielen — stammt von mobilen Geräten. Darauf müssen Sie sich konzentrieren, wenn Sie wirklich erfolgreich sein möchten. Mobile Geräte sind der Ort, an dem die HTML-Technologie wirklich glänzen und ihre Vorteile zeigen kann. Es gibt kein Flash, und HTML ist vollständig multiplattformfähig.

Direkt mit Desktop-Spielen zu konkurrieren, ist sehr schwierig. Sie können Ihre HTML-Spiele in dieselbe Arena stellen (siehe [Native Desktop](#native_desktop) später) und sollten dies auch tun, da es gut ist, die Plattformen, die Sie unterstützen, zu diversifizieren. Aber Sie müssen bedenken, dass Entwickler von Desktop-Spielen jahrelange Erfahrung, großartige Werkzeuge und stabile Vertriebswege haben. Viele HTML-Spiele zielen auf andere Marktsegmente ab als native Desktop-Spiele, z. B. einfache Zeitvertreib-Spiele, die unterwegs gespielt werden, anstatt große immersive Erlebnisse. Solche Spiele sind oft so konzipiert, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und mit der anderen Hand anderweitig aktiv sein können.

Das gesagt, können Desktop-Plattformen recht einfach zur Verteilung genutzt werden, da es Wrapper gibt, die Ihnen helfen können, native Builds Ihres Spiels vorzubereiten. Weitere Informationen finden Sie unter [Spiele verpacken](#spiele_verpacken). Es ist auch schön, Desktop-Steuerungen für Ihre Spiele bereitzustellen, selbst wenn Sie hauptsächlich mobile Geräte anvisieren. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und Desktop ist eine davon. Außerdem ist es normalerweise einfacher, das Spiel zuerst auf einem Desktop zu erstellen und zu testen und dann zur Fehlerbehebung auf Mobilgeräte zu wechseln.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es darum geht, ein Spiel zu veröffentlichen:

- Eigenes Hosting
- Verlage
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [promotet](/de/docs/Games/Publishing_games/Game_promotion) zu werden, aber auch einprägsam genug, damit die Leute ihn nicht vergessen.

### Eigenes Hosting

Wenn Sie ein Frontend-Entwickler sind, wissen Sie wahrscheinlich bereits, was zu tun ist. Ein HTML-Spiel ist einfach eine weitere Webseite. Sie können es auf einen Remote-Server hochladen, einen einprägsamen Domainnamen registrieren und es selbst hosten.

Wenn Sie mit der Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode auf die eine oder andere Art und Weise vor Leuten sichern, die ihn leicht nehmen und als ihren eigenen verkaufen könnten. Sie können den Code zusammenfassen und minifizieren, um ihn kleiner zu machen und ihn zu verunschönen, sodass es viel schwieriger ist, Ihr Spiel zurückzuentwickeln. Eine weitere gute Maßnahme ist es, ein Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt nur zum Spaß arbeiten, wird es denen zugutekommen, die von dem, was Sie erstellt haben, lernen möchten, den Quellcode offen zu lassen. Sie müssen sich nicht einmal um die Suche nach einem Hosting-Anbieter kümmern, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/2014/02/host-your-html5-games-on-github-pages/). Sie erhalten kostenloses Hosting, Versionskontrolle und mögliche Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Verlage und Portale

Wie der Name schon sagt, können Verlage die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, was Ihr Plan für die Verteilung Ihres Spiels ist: Möchten Sie es überallhin versenden oder möchten Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) erworben haben? Das liegt bei Ihnen. Ziehen Sie verschiedene Optionen in Betracht, experimentieren Sie und ziehen Sie Ihre Schlussfolgerungen. Verlage werden im Artikel über [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) genauer erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Poki](https://developers.poki.com/), oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einsenden und es aufgrund des großen Verkehrs, den diese Seiten anziehen, natürliche Promotion erhalten kann. Einige dieser Portale nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Webseite verlinken oder Ihr Spiel auf ihrer Seite einbetten. Solch eine Exposition kann Ihrem Spiel [Promotion](/de/docs/Games/Publishing_games/Game_promotion) verschaffen, oder wenn Sie Anzeigen neben Ihrem Spiel anzeigen (oder andere Geldverdienoptionen) könnten sie auch Monetarisierung bieten.

### Web- und Native Stores

Sie können Ihr Spiel auch direkt in verschiedenen Arten von Stores oder Marktplätzen hochladen und veröffentlichen. Dazu müssen Sie es vorbereiten und in ein Build-Format verpacken, das spezifisch für jedes App-Ökosystem ist, das Sie anvisieren möchten. Detaillierte Informationen zu den verfügbaren Marktplatzzypen finden Sie unter [Marktplätze — Verteilungsplattformen](#marktplätze_—_verteilungsplattformen).

## Marktplätze — Verteilungsplattformen

Lassen Sie uns sehen, welche Optionen für Marktplätze/Stores für verschiedene Plattformen und Betriebssysteme verfügbar sind.

> [!NOTE]
> Dies sind die beliebtesten Verteilungsplattformen, aber das heißt nicht, dass dies die einzigen Optionen sind. Anstatt zu versuchen, Ihr Spiel zu den Tausenden von anderen im iOS-Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt der Zielgruppe zu promoten, die an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Webstores

Die besten Plattformen für HTML-Spiele sind webbasierte Stores. Sie können Spiele für Webstores vorbereiten, indem Sie eine Manifestdatei und andere Daten, wie Ressourcen, in einem gezippten Paket hinzufügen. Viele Modifikationen am Spiel selbst sind nicht erforderlich.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist auch eine attraktive Option — wiederum besteht der Hauptaufwand darin, eine Manifestdatei bereitzuhalten, Ihr Spiel zu zippen und das Online-Einreichungsformular auszufüllen.

### Native mobile Stores

Was den mobilen Markt betrifft, gibt es den Apple App Store für iOS, Google Play für Android und all die andere Konkurrenz. In den nativen Stores sind bereits etablierte Entwickler präsent, die großartige Spiele verkaufen, also müssen Sie talentiert und auch ein wenig Glück haben, um bemerkt zu werden.

- Der iOS App Store ist recht schwer zu betreten, da es strenge Anforderungen gibt, die Spiele erfüllen müssen, und Sie müssen eine Woche oder zwei warten, um akzeptiert zu werden. Außerdem ist es der prominenteste mobile Store mit Hunderttausenden von Apps, also ist es extrem schwer, in der Menge aufzufallen.
- Die Anforderungen von Google Play sind weniger streng, sodass der Store mit Spielen geringer Qualität überflutet ist. Es ist immer noch recht schwer, dort bemerkt zu werden, da die Anzahl der täglich eingereichten Apps enorm ist. Hier ist es auch schwieriger, Geld zu verdienen — die meisten der kostenpflichtigen Spiele von iOS werden als kostenlose Spiele auf Android veröffentlicht, wobei die Monetarisierung über In-App-Käufe (IAPs) oder Anzeigen erfolgt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry bemühen sich, ein Stück vom Kuchen zu bekommen und liegen weit hinter der Konkurrenz zurück. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher ist, bemerkt zu werden.

Wenn Sie weitere Informationen über die verschiedenen Arten von App-Stores suchen, können Sie den Artikel [Liste von Plattformen zur Verbreitung mobiler Software](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia lesen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie auch das Desktop-Ökosystem mit Ihren HTML-Spielen erreichen — denken Sie nur an all die beliebten AAA-Spiele, die den größten Marktanteil einnehmen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um dies auf dem Desktop richtig zu machen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) — Indie-Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect) Programm auf Steam zugreifen. Denken Sie daran, dass Sie die plattformübergreifenden Probleme selbst bewältigen müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Aufsehen um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), bei denen die beliebtesten Indie-Spiele einem breiteren Publikum präsentiert werden. Es ist eher wie eine hervorragende Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, da die Preise für die Spiele in einem Bundle normalerweise ziemlich niedrig sind.

## Spiele verpacken

Das Web ist die erste und die beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem verteilen möchten, können Sie es dennoch verpacken. Das Gute daran ist, dass Sie nicht mehrere separate Teams benötigen, die am selben Spiel für verschiedene Plattformen arbeiten — Sie können es einmal erstellen und Werkzeuge verwenden, um das Spiel für native Stores zu verpacken. Die resultierenden Pakete sind in der Regel recht zuverlässig, aber Sie sollten sie dennoch testen und auf kleine Probleme oder Bugs achten, die behoben werden müssen.

### Verfügbare Werkzeuge

Es gibt verschiedene Werkzeuge zur Auswahl, abhängig von Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Werkzeug für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) — ein Werkzeug speziell zum Verpacken von Spielen, die mit dem [ImpactJS](https://impactjs.com/) Framework für iOS erstellt wurden, entwickelt vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) — früher bekannt als Node-Webkit, ist die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Distributionen werden mit der WebKit-Engine verpackt, um Rendering auf jeder Plattform bereitzustellen.

Andere alternative Werkzeuge sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — eine spannende Alternative, ähnlich CocoonIO.
- [Electron](https://www.electronjs.org/) — bekannt als Atom Shell — ist ein Open-Source- und plattformübergreifendes Werkzeug von GitHub.
- [Manifold.js](https://manifoldjs.com/) — dieses Werkzeug vom Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Distribution ist der Weg, der Welt Zugang zu Ihrem Spiel zu gewähren. Es gibt viele verfügbare Optionen und es gibt keine einzige gute Antwort darauf, welche die beste ist. Sobald Sie das Spiel veröffentlicht haben, ist es Zeit, sich auf [Promotion](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren — die Menschen wissen zu lassen, dass Ihr Spiel existiert. Ohne Promotion würden sie nicht einmal davon erfahren und es spielen können.
