---
title: Spielverteilung
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) oder [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) gefolgt und ein HTML-Spiel erstellt — das ist großartig! Dieser Artikel behandelt alles, was Sie wissen müssen, um Ihr neu erstelltes Spiel in die Welt zu verteilen. Dies umfasst das Selberhosten online, das Einreichen in offenen Marktplätzen und das Einreichen in geschlossenen wie Google Play oder dem iOS App Store.

## Vorteile von HTML gegenüber nativen Anwendungen

Spiele mit HTML zu erstellen bietet Ihnen zusätzliche Vorteile, wie zum Beispiel:

### Multiplattform-Segen

Die Technologie selbst ist plattformübergreifend, sodass Sie den Code einmal schreiben und mehrere Geräte ansprechen können. Dies kann von Low-End-Smartphones oder -Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank reichen, wenn dieser einen modernen Browser handhaben kann.

Sie müssen keine separaten Teams haben, um an demselben Titel zu arbeiten, der auf unterschiedliche Plattformen abzielt, da Sie nur eine Codebasis pflegen müssen. Sie können mehr Zeit und Geld für [Werbung](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) aufwenden.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, bis der Code Ihres Spiels aktualisiert ist. Wenn Ihr Benutzer einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server aktualisieren, um den Spielern fast sofort den aktualisierten Code bereitzustellen.

### Direkte Linkverteilung und sofortiges Spielen

Sie müssen den Leuten nicht sagen, dass sie Ihr Spiel in einem App-Store suchen sollen. Bei HTML-Spielen können Sie ihnen einfach eine direkte URL senden, über die sie auf das Spiel zugreifen können, das sie dann anklicken und sofort spielen können, ohne Drittanbieter-Plugins nutzen oder ein großes Paket herunterladen und installieren zu müssen. Bedenken Sie, dass das Herunterladen des Spiels je nach Spielgröße und Ihrer Netzwerkgeschwindigkeit trotzdem etwas Zeit in Anspruch nehmen kann. In jedem Fall ist es viel einfacher, das Spiel zu bewerben, wenn Sie den Traffic direkt dahin lenken können, wo Sie ihn haben möchten, und nicht durch viele Hindernisse springen müssen, um zu spielen.

## Desktop vs. Mobilgeräte

Der überwiegende Teil des Traffics, an dem wir interessiert sind — Menschen, die HTML-Spiele spielen — kommt von mobilen Geräten, daher sollten Sie sich darauf konzentrieren, wenn Sie wirklich erfolgreich sein wollen. Mobile Geräte sind dort, wo HTML-Technologie wirklich glänzen und ihre Vorteile zeigen kann. Es gibt keinen Flash und HTML ist vollständig plattformübergreifend.

Direkt mit Desktop-Spielen zu konkurrieren, ist sehr schwierig. Sie können Ihre HTML-Spiele in dieselbe Arena stellen (siehe später [Native Desktop](#native_desktop)) und sollten dies auch tun, da es gut ist, die Plattformen, die Sie unterstützen, zu diversifizieren. Sie müssen jedoch bedenken, dass Entwickler von Desktop-Spielen über jahrelange Erfahrung, großartige Tools und stabile Vertriebskanäle verfügen. Viele HTML-Spiele werden auf andere Marktsegmente als native Desktop-Spiele abzielen, z. B. einfache Zeitvertreib-Spiele, die gespielt werden können, während man unterwegs ist, statt riesige immersive Erlebnisse. Solche Spiele sind oft so konzipiert, dass sie mit zwei oder sogar einem Finger gespielt werden können, sodass Sie das Gerät halten, das Spiel spielen und die zweite Hand für das verwenden können, was Sie gerade benötigen.

Das heißt, Desktop-Plattformen können für die Verteilung recht einfach verwendet werden mit der Verfügbarkeit von Wrappern, die Ihnen helfen können, native Builds Ihres Spiels vorzubereiten. Siehe [Verpackung von Spielen](#verpackung_von_spielen). Es ist auch gut, Desktop-Steuerelemente für Ihre Spiele anzubieten, auch wenn Sie vor allem mobile ansprechen. Spieler genießen Ihre Spiele auf jeder verfügbaren Plattform, und der Desktop ist eine davon. Zudem ist es in der Regel einfacher, das Spiel zuerst auf dem Desktop zu erstellen und zu testen und dann mit der Fehlersuche auf mobilen Geräten fortzufahren.

## Veröffentlichung des Spiels

Es gibt drei Hauptoptionen, wenn es darum geht, ein Spiel zu veröffentlichen:

- Eigenes Hosting
- Publisher
- Stores

Denken Sie daran, dass der Name Ihres Spiels einzigartig genug sein sollte, um später schnell [beworben](/de/docs/Games/Publishing_games/Game_promotion) werden zu können, aber auch einprägsam genug, damit Leute ihn nicht vergessen.

### Eigenes Hosting

Wenn Sie ein Front-End-Entwickler sind, wissen Sie vielleicht schon, was zu tun ist. Ein HTML-Spiel ist nur eine weitere Website. Sie können es auf einen entfernten Server hochladen, einen einprägsamen Domainnamen wählen und es selbst hosten.

Wenn Sie mit Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode auf die eine oder andere Weise sichern, damit ihn nicht jemand leicht nehmen und als seinen eigenen verkaufen kann. Sie können den Code zusammenfassen und minifizieren, um ihn kleiner zu machen und ihn unkenntlich machen, damit es viel schwieriger ist, Ihr Spiel rückzuentwickeln. Eine weitere gute Maßnahme ist es, eine Online-Demo bereitzustellen, wenn Sie planen, es zu verpacken und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie an einem Nebenprojekt arbeiten, das nur aus Spaß entsteht, wird es von Vorteil sein, den Quellcode offen zu lassen für diejenigen, die von dem, was Sie erstellt haben, lernen möchten. Sie müssen sich nicht einmal um die Suche nach einem Hosting-Anbieter kümmern, da es möglich ist, [Spiele auf GitHub Pages zu hosten](https://end3r.com/blog/host-your-html5-games-on-github-pages). Sie erhalten kostenloses Hosting, Versionskontrolle und mögliche Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name schon andeutet, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob Sie diesen Weg gehen sollten oder nicht, hängt davon ab, was Ihr Plan für die Verbreitung Ihres Spiels ist: Möchten Sie es überall hin senden, wo es möglich ist, oder möchten Sie seine Präsenz auf diejenigen beschränken, die eine [exklusive Lizenz](/de/docs/Games/Publishing_games/Game_monetization) gekauft haben? Das bleibt Ihnen überlassen. Erwägen Sie verschiedene Optionen, experimentieren Sie und ziehen Sie Schlüsse. Publisher werden ausführlicher im [Monetarisierungs](/de/docs/Games/Publishing_games/Game_monetization)-Artikel erklärt.

Es gibt auch unabhängige Portale, die interessante Spiele sammeln, wie [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/), oder [CrazyGames](https://developer.crazygames.com/), wo Sie Ihr Spiel einsenden können und es aufgrund des großen Traffic, den diese Seiten anziehen, eine natürliche Promotion erhält. Einige dieser Portale nehmen Ihre Dateien und hosten sie auf ihrem Server, während andere nur auf Ihre Website verlinken oder Ihr Spiel in ihre Seite einbetten. Solch eine Belichtung könnte einfach als [Werbung](/de/docs/Games/Publishing_games/Game_promotion) für Ihr Spiel dienen, oder wenn Sie Anzeigen neben Ihrem Spiel zeigen (oder andere Geldverdien-Optionen haben), könnte es auch Monetarisierung bieten.

### Web- und native Stores

Sie können Ihr Spiel auch direkt in verschiedenen Arten von Stores oder Marktplätzen hochladen und veröffentlichen. Dazu müssen Sie es vorbereiten und in ein spezielles Format für jedes App-Ökosystem verpacken, das Sie anvisieren möchten. Weitere Details zu den verfügbaren Marktplatztypen finden Sie unter [Marktplätze — Distributionsplattformen](#marktplätze_—_distributionsplattformen).

## Marktplätze — Distributionsplattformen

Sehen wir uns die verfügbaren Optionen in Bezug auf die Marktplätze/Stores an, die für verschiedene Plattformen und Betriebssysteme verfügbar sind.

> [!NOTE]
> Dies sind die beliebtesten Distributionsplattformen, aber das bedeutet nicht, dass dies die einzigen Optionen sind. Anstatt zu versuchen, Ihr Spiel zu den Tausenden von anderen im iOS-Store hinzuzufügen, können Sie auch versuchen, eine Nische zu finden und direkt an das Publikum zu werben, das an Ihren Spielen interessiert wäre. Ihre Kreativität ist hier entscheidend.

### Web-Stores

Die besten Plattformen für HTML-Spiele sind Web-basierte Stores. Sie können Spiele für Web-Stores vorbereiten, indem Sie eine Manifest-Datei und andere Daten wie Ressourcen in einem gezippten Paket hinzufügen. Nicht viele Änderungen am Spiel selbst sind erforderlich.

- Der [Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Option — auch hier genügt es, eine Manifest-Datei bereitzuhalten, Ihr Spiel zu zippen und das Online-Übermittlungsformular auszufüllen.

### Native Mobile-Stores

Im mobilen Markt gibt es den Apple App Store für iOS, Google Play für Android und den Rest der Konkurrenz. Native Stores sind bereits voll von etablierten Entwicklern, die großartige Spiele verkaufen, also müssen Sie talentiert und glücklich sein, um bemerkt zu werden.

- Der iOS App Store ist ziemlich schwer zugänglich, da Spiele strenge Anforderungen erfüllen müssen, und Sie müssen eine Woche oder zwei warten, um akzeptiert zu werden. Außerdem ist es der bedeutendste Mobile-Store mit Hunderttausenden von Apps, daher ist es extrem schwer, sich von der Masse abzuheben.
- Google Plays Anforderungen sind weniger streng, daher ist der Store mit Spielen niedriger Qualität gefüllt. Es ist trotzdem ziemlich schwierig, dort bemerkt zu werden, da die Anzahl der täglichen eingereichten Apps riesig ist. Es ist auch schwerer, hier Geld zu verdienen — die meisten kostenpflichtigen Spiele von iOS werden auf Android als kostenlose Spiele veröffentlicht, wobei die Monetarisierung durch In-App-Käufe (IAPs) oder Anzeigen erfolgt.
- Andere Stores für native mobile Plattformen wie Windows Phone oder Blackberry arbeiten hart daran, ein Stück vom Kuchen zu bekommen und liegen weit hinter der Konkurrenz zurück. Es kann gut sein, Ihr Spiel dort einzureichen, da es viel einfacher sein wird, bemerkt zu werden.

Wenn Sie mehr Informationen über die verschiedenen App-Store-Typen suchen, können Sie den [Artikel über mobile Software-Distributionsplattformen](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) auf Wikipedia nachlesen.

### Native Desktop

Um Ihr Publikum zu erweitern, können Sie das Desktop-Ökosystem auch mit Ihren HTML-Spielen ansprechen — denken Sie nur an all die populären AAA-Spiele, die den Großteil des Marktanteils ausmachen, und überlegen Sie sorgfältig, ob dies zu Ihrer Strategie passt. Um den Desktop richtig zu bedienen, sollten Sie alle drei Betriebssysteme unterstützen: Windows, macOS und Linux. Der größte Desktop-Store für Spiele ist definitiv [Steam](https://steamcommunity.com/) — Indie-Entwickler können über das [Steam Direct](https://partner.steamgames.com/steamdirect)-Programm auf Steam gelangen. Denken Sie daran, dass Sie sich selbst um die plattformübergreifenden Probleme kümmern müssen, indem Sie separate Versionen für verschiedene Plattformen hochladen.

Nachdem Sie Steam abgedeckt haben, gibt es viel Wirbel um Initiativen wie [Humble Bundle](https://www.humblebundle.com/), bei denen die beliebtesten Indie-Spiele einem breiteren Publikum vorgestellt werden. Es ist mehr wie eine hervorragende Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, da die für Spiele in einem Bundle gezahlten Preise in der Regel recht niedrig sind.

## Verpackung von Spielen

Das Web ist die erste und beste Wahl für HTML-Spiele, aber wenn Sie ein breiteres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem vertreiben möchten, können Sie dies trotzdem tun, indem Sie es verpacken. Der Vorteil ist, dass Sie keine separaten Teams haben müssen, die am selben Spiel für verschiedene Plattformen arbeiten – Sie können es einmal erstellen und Tools verwenden, um das Spiel für native Stores zu verpacken. Die entstehenden Pakete sind normalerweise ziemlich zuverlässig, aber Sie sollten sie dennoch testen und auf kleine Probleme oder Fehler achten, die behoben werden müssen.

### Verfügbare Tools

Es gibt verschiedene Tools zur Auswahl, je nach Ihren Fähigkeiten, bevorzugten Frameworks oder Zielplattformen. Es geht darum, das beste Tool für Ihre spezielle Aufgabe auszuwählen.

- [Ejecta](https://impactjs.com/ejecta) — ein Tool speziell zum Verpacken von Spielen, die mit dem [ImpactJS](https://impactjs.com/)-Framework für iOS erstellt wurden, entwickelt vom Autor von ImpactJS. Es bietet nahtlose Integration mit ImpactJS, unterstützt jedoch nur ein Framework und einen App-Store.
- [NW.js](https://nwjs.io/) — früher bekannt als Node-WebKit, ist es die erste Wahl, wenn es darum geht, ein Desktop-Spiel zu erstellen, das auf Windows, Mac und Linux funktioniert. Die Distributionen werden mit der WebKit-Engine verpackt, um das Rendern auf jeder Plattform zu ermöglichen.

Andere alternative Werkzeuge sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — eine spannende Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) — bekannt als Atom Shell — ist ein quelloffenes und plattformübergreifendes Tool von GitHub.
- [Manifold.js](https://manifoldjs.com/) — dieses Tool vom Microsoft-Team kann native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Die Distribution ist der Weg, um der Welt Zugang zu Ihrem Spiel zu geben. Es gibt viele verfügbare Optionen, und es gibt keine einzige gute Antwort darauf, welche die beste ist. Wenn Sie das Spiel veröffentlicht haben, ist es an der Zeit, sich auf [Werbung](/de/docs/Games/Publishing_games/Game_promotion) zu konzentrieren — den Menschen bekannt zu machen, dass Ihr Spiel existiert. Ohne Werbung hätten sie nicht einmal die Möglichkeit, davon zu erfahren und es zu spielen.
