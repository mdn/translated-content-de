---
title: Spiele vertreiben
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

Sie haben ein [Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript) oder auch [zwei](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) durchgearbeitet und ein HTML-Spiel erstellt – großartig! In diesem Artikel erfahren Sie, wie Sie Ihr neues Spiel veröffentlichen können: auf einem eigenen Server, auf offenen Marktplätzen oder in geschlossenen Stores wie Google Play und dem iOS App Store.

## Vorteile von HTML gegenüber nativen Technologien

Die Entwicklung von Spielen mit HTML bietet zusätzliche Vorteile:

### Plattformübergreifende Möglichkeiten

Die Technologie selbst ist plattformübergreifend. Sie können den Code also einmal schreiben und damit verschiedene Geräte erreichen: von einfachen Smartphones und Tablets über Laptops und Desktop-Computer bis hin zu Smart-TVs, Uhren oder sogar einem Kühlschrank, sofern darauf ein ausreichend moderner Browser läuft.

Sie benötigen keine getrennten Teams, die denselben Titel für unterschiedliche Plattformen entwickeln, sondern müssen nur eine Codebasis pflegen. So können Sie mehr Zeit und Geld in [Werbung](/de/docs/Games/Publishing_games/Game_promotion) und [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) investieren.

### Sofortige Updates

Sie müssen nicht mehrere Tage warten, bis der Code Ihres Spiels aktualisiert wird. Wenn jemand einen Fehler findet, können Sie ihn schnell beheben, das System aktualisieren und das Spiel auf Ihrem Server neu laden. So steht den Spielenden der aktualisierte Code nahezu sofort zur Verfügung.

### Verbreitung per Direktlink und sofortiges Spielen

Bei HTML-Spielen müssen Sie niemanden auffordern, Ihr Spiel in einem App-Store zu suchen. Sie können einfach eine direkte URL verschicken. Wer darauf klickt, kann sofort spielen, ohne Plug-ins von Drittanbietern zu verwenden oder ein großes Paket herunterzuladen und zu installieren. Je nach Größe des Spiels und Geschwindigkeit der Netzwerkverbindung kann das Laden dennoch etwas dauern. In jedem Fall lässt sich ein Spiel leichter bewerben, wenn Sie Besucher direkt zum gewünschten Ziel führen können und ihnen vor dem Spielen keine weiteren Hürden im Weg stehen.

## Desktop- und Mobilgeräte

Der weitaus größte Teil des für uns interessanten Datenverkehrs – Menschen, die HTML-Spiele spielen – kommt von Mobilgeräten. Wenn Sie erfolgreich sein möchten, sollten Sie sich daher auf diese Geräte konzentrieren. Dort kann die HTML-Technologie ihre Stärken besonders gut ausspielen: Flash gibt es nicht, und HTML ist vollständig plattformübergreifend.

Direkt mit Desktop-Spielen zu konkurrieren, ist sehr schwierig. Sie können und sollten Ihre HTML-Spiele auch auf Desktop-Plattformen anbieten (siehe weiter unten [Native Desktop-Anwendungen](#native_desktop-anwendungen)), denn es ist sinnvoll, mehrere Plattformen zu unterstützen. Bedenken Sie jedoch, dass Entwickler von Desktop-Spielen über jahrelange Erfahrung, hervorragende Werkzeuge und etablierte Vertriebswege verfügen. Viele HTML-Spiele richten sich an andere Marktsegmente als native Desktop-Spiele: etwa einfache Spiele für zwischendurch, die man unterwegs spielt, statt umfangreicher, immersiver Erlebnisse. Solche Spiele sind häufig so gestaltet, dass sie sich mit zwei oder sogar nur einem Finger bedienen lassen. So können Sie das Gerät halten und spielen, während die andere Hand frei bleibt.

Dank verfügbarer Wrapper lassen sich Spiele auch relativ einfach für Desktop-Plattformen vertreiben: Diese Werkzeuge helfen Ihnen, native Builds Ihres Spiels zu erstellen (siehe [Spiele paketieren](#spiele_paketieren)). Es ist außerdem sinnvoll, Desktop-Steuerungen anzubieten, selbst wenn Sie sich hauptsächlich an Mobilgeräte richten. Ihre Spiele werden auf allen verfügbaren Plattformen gespielt – auch auf Desktop-Computern. Zudem ist es meist einfacher, ein Spiel zunächst auf einem Desktop-Computer zu entwickeln und zu testen und anschließend Fehler auf Mobilgeräten zu beheben.

## Das Spiel veröffentlichen

Für die Veröffentlichung eines Spiels gibt es drei wesentliche Möglichkeiten:

- Selbst hosten
- Publisher
- Stores

Denken Sie daran, Ihrem Spiel einen Namen zu geben, der unverwechselbar genug ist, um es später leicht [bewerben](/de/docs/Games/Publishing_games/Game_promotion) zu können, und zugleich einprägsam genug, damit die Menschen ihn nicht vergessen.

### Selbst hosten

Wenn Sie Front-End-Entwickler sind, wissen Sie möglicherweise bereits, was zu tun ist: Ein HTML-Spiel ist letztlich eine weitere Website. Sie können es auf einen entfernten Server hochladen, sich einen einprägsamen Domainnamen sichern und es selbst hosten.

Wenn Sie mit der Spieleentwicklung Geld verdienen möchten, sollten Sie Ihren Quellcode auf die eine oder andere Weise davor schützen, dass andere ihn einfach übernehmen und als eigenen verkaufen. Sie können den Code zusammenfassen und minimieren, um ihn zu verkleinern, und ihn verschleiern, damit sich Ihr Spiel deutlich schwerer durch Reverse Engineering analysieren lässt. Eine weitere sinnvolle Maßnahme ist eine Online-Demo, wenn Sie planen, das Spiel zu paketieren und in einem geschlossenen Store wie iTunes oder Steam zu verkaufen.

Wenn Sie hingegen nur zum Spaß an einem Nebenprojekt arbeiten, profitieren Menschen, die von Ihrer Arbeit lernen möchten, von offen zugänglichem Quellcode. Sie müssen sich nicht einmal um einen Hosting-Anbieter kümmern, denn Sie können [Spiele auf GitHub Pages hosten](https://end3r.com/blog/host-your-html5-games-on-github-pages). Dort erhalten Sie kostenloses Hosting und Versionsverwaltung – und möglicherweise Mitwirkende, wenn Ihr Projekt interessant genug ist.

### Publisher und Portale

Wie der Name vermuten lässt, können Publisher die Veröffentlichung Ihres Spiels für Sie übernehmen. Ob das der richtige Weg ist, hängt von Ihren Vertriebsplänen ab: Möchten Sie Ihr Spiel möglichst überall anbieten oder seine Verfügbarkeit auf Käufer einer [Exklusivlizenz](/de/docs/Games/Publishing_games/Game_monetization) beschränken? Die Entscheidung liegt bei Ihnen. Prüfen Sie verschiedene Möglichkeiten, experimentieren Sie und ziehen Sie daraus Ihre Schlüsse. Der Artikel zur [Monetarisierung](/de/docs/Games/Publishing_games/Game_monetization) erläutert Publisher ausführlicher.

Daneben gibt es unabhängige Portale, die interessante Spiele sammeln, etwa [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/) und [CrazyGames](https://developer.crazygames.com/). Wenn Sie dort Ihr Spiel einreichen, profitiert es durch die hohen Besucherzahlen dieser Websites von einer gewissen Bekanntheit. Einige Portale übernehmen Ihre Dateien und hosten sie auf ihren eigenen Servern; andere verlinken lediglich auf Ihre Website oder betten Ihr Spiel ein. Diese Sichtbarkeit kann Ihrem Spiel zu mehr [Aufmerksamkeit](/de/docs/Games/Publishing_games/Game_promotion) verhelfen. Wenn neben Ihrem Spiel Werbung angezeigt wird oder Sie andere Einnahmequellen nutzen, kann sie auch zur Monetarisierung beitragen.

### Web-Stores und native Stores

Sie können Ihr Spiel auch direkt in verschiedenen Stores oder auf Marktplätzen hochladen und veröffentlichen. Dafür müssen Sie es für jedes App-Ökosystem, das Sie erreichen möchten, im jeweiligen Build-Format vorbereiten und paketieren. Unter [Marktplätze – Vertriebsplattformen](#marktplätze_–_vertriebsplattformen) erfahren Sie mehr über die verfügbaren Arten von Marktplätzen.

## Marktplätze – Vertriebsplattformen

Sehen wir uns an, welche Marktplätze und Stores für die verschiedenen Plattformen und Betriebssysteme zur Verfügung stehen.

> [!NOTE]
> Dies sind die beliebtesten Vertriebsplattformen, aber keineswegs die einzigen Möglichkeiten. Statt Ihr Spiel beispielsweise zu den Tausenden anderen Spielen im iOS-Store hinzuzufügen, können Sie auch eine Nische suchen und gezielt die Menschen ansprechen, die sich für Ihre Spiele interessieren. Ihre Kreativität ist dabei entscheidend.

### Web-Stores

Webbasierte Stores eignen sich am besten für HTML-Spiele. Zur Vorbereitung können Sie eine Manifestdatei und weitere Daten, etwa Ressourcen, in ein ZIP-Paket aufnehmen. Am Spiel selbst sind dafür nur wenige Änderungen nötig.

- [Der Chrome Web Store](https://chromewebstore.google.com/) ist ebenfalls eine attraktive Möglichkeit. Im Wesentlichen benötigen Sie nur eine fertige Manifestdatei, müssen Ihr Spiel als ZIP-Datei verpacken und das Onlineformular zur Einreichung ausfüllen.

### Native Stores für Mobilgeräte

Auf dem Markt für Mobilgeräte gibt es den Apple App Store für iOS, Google Play für Android und zahlreiche weitere Wettbewerber. In nativen Stores bieten bereits etablierte Entwickler hervorragende Spiele an. Um dort wahrgenommen zu werden, brauchen Sie also Talent und Glück.

- Die Aufnahme in den iOS App Store ist recht schwierig, weil Spiele strenge Anforderungen erfüllen müssen. Zudem kann es ein bis zwei Wochen dauern, bis Ihr Spiel zugelassen wird. Der Store ist außerdem der bedeutendste mobile Store und enthält Hunderttausende Apps. Entsprechend schwer ist es, aus der Masse hervorzustechen.
- Die Anforderungen von Google Play sind weniger streng, weshalb dort auch viele Spiele von geringer Qualität angeboten werden. Dennoch ist es schwierig, Aufmerksamkeit zu erlangen, da täglich sehr viele Apps eingereicht werden. Auch Geld zu verdienen ist hier schwieriger: Viele Spiele, die unter iOS kostenpflichtig sind, werden unter Android kostenlos angeboten und über In-App-Käufe (IAPs) oder Werbung monetarisiert.
- Andere Stores für native Mobilplattformen wie Windows Phone oder Blackberry bemühen sich um einen Anteil am Markt, liegen aber weit hinter der Konkurrenz zurück. Es kann sich lohnen, Ihr Spiel dort einzureichen, weil es deutlich leichter wahrgenommen wird.

Weitere Informationen zu den verschiedenen Arten von App-Stores finden Sie im Wikipedia-Artikel [Liste der Vertriebsplattformen für mobile Software](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms).

### Native Desktop-Anwendungen

Sie können mit Ihren HTML-Spielen auch das Desktop-Ökosystem erschließen und so ein größeres Publikum erreichen. Bedenken Sie dabei, dass beliebte AAA-Spiele den Großteil des Marktes beherrschen, und prüfen Sie sorgfältig, ob dieser Schritt zu Ihrer Strategie passt. Wenn Sie Desktop-Plattformen angemessen unterstützen möchten, sollten Sie alle drei Betriebssysteme berücksichtigen: Windows, macOS und Linux. Der mit Abstand größte Desktop-Store für Spiele ist [Steam](https://steamcommunity.com/). Indie-Entwickler können ihre Spiele über das Programm [Steam Direct](https://partner.steamgames.com/steamdirect) dort veröffentlichen. Denken Sie daran, dass Sie plattformübergreifende Probleme selbst lösen und für die verschiedenen Plattformen jeweils eigene Versionen hochladen müssen.

Neben Steam sorgen auch Initiativen wie [Humble Bundle](https://www.humblebundle.com/) für Aufmerksamkeit. Dort werden beliebte Indie-Spiele einem größeren Publikum vorgestellt. Das ist allerdings eher eine hervorragende Werbemöglichkeit als eine Möglichkeit, viel Geld zu verdienen, denn die für Spiele in einem Bundle gezahlten Preise sind in der Regel recht niedrig.

## Spiele paketieren

Das Web ist die erste und beste Wahl für HTML-Spiele. Wenn Sie jedoch ein größeres Publikum erreichen und Ihr Spiel in einem geschlossenen Ökosystem vertreiben möchten, können Sie es dafür paketieren. Der Vorteil: Sie benötigen nicht mehrere Teams, die dasselbe Spiel für unterschiedliche Plattformen entwickeln. Stattdessen entwickeln Sie es einmal und verwenden Werkzeuge, um es für native Stores zu paketieren. Die fertigen Pakete funktionieren normalerweise recht zuverlässig. Sie sollten sie dennoch testen und auf kleinere Probleme oder Fehler achten, die behoben werden müssen.

### Verfügbare Werkzeuge

Je nach Ihren Kenntnissen, bevorzugten Frameworks und Zielplattformen stehen verschiedene Werkzeuge zur Auswahl. Entscheidend ist, das passende Werkzeug für Ihre Aufgabe zu finden.

- [Ejecta](https://impactjs.com/ejecta) – ein Werkzeug, das speziell dafür entwickelt wurde, mit [dem ImpactJS-Framework](https://impactjs.com/) erstellte Spiele für iOS zu paketieren. Es stammt vom Entwickler von ImpactJS und lässt sich nahtlos damit verwenden, unterstützt aber nur dieses eine Framework und einen App-Store.
- [NW.js](https://nwjs.io/) – früher als Node-WebKit bekannt. Es ist die erste Wahl, wenn Sie ein Desktop-Spiel erstellen möchten, das unter Windows, Mac und Linux läuft. Die Distributionen werden zusammen mit der WebKit-Engine paketiert, damit die Darstellung auf jeder Plattform funktioniert.

Weitere Alternativen sind:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) – eine interessante Alternative, ähnlich wie CocoonIO.
- [Electron](https://www.electronjs.org/) – auch als Atom Shell bekannt – ist ein quelloffenes, plattformübergreifendes Werkzeug von GitHub.
- [Manifold.js](https://www.manifoldjs.com/) – mit diesem Werkzeug des Microsoft-Teams lassen sich native Distributionen von HTML-Spielen für iOS, Android und Windows erstellen.

## Zusammenfassung

Durch den Vertrieb machen Sie Ihr Spiel für die Welt zugänglich. Es gibt viele Möglichkeiten, aber keine allgemeingültige Antwort darauf, welche die beste ist. Sobald Sie Ihr Spiel veröffentlicht haben, sollten Sie sich auf die [Werbung](/de/docs/Games/Publishing_games/Game_promotion) konzentrieren und die Menschen darauf aufmerksam machen. Ohne Werbung erfahren sie womöglich nie von Ihrem Spiel und können es folglich auch nicht spielen.
