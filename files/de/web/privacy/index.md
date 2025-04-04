---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Bankgeschäfte, Einkäufe, Unterhaltung und das Bezahlen ihrer Steuern. Dabei sind sie gezwungen, persönliche Informationen mit diesen Seiten zu teilen. Nutzer vertrauen darauf, dass die Seiten, mit denen sie ihre Daten teilen, verantwortungsvoll damit umgehen. Gelangen diese Informationen in die falschen Hände, könnten sie dazu genutzt werden, Nutzer auszubeuten, beispielsweise durch Profilerstellung, gezielte ungewollte Werbung oder sogar durch Identitäts- oder Geldraub.

Moderne Browser bieten bereits eine Vielzahl an Funktionen, um die Privatsphäre der Nutzer im Web zu schützen, doch das allein reicht nicht aus. Um ein vertrauenswürdiges und datenschutzfreundliches Erlebnis zu schaffen, müssen Entwickler ihre Nutzer über gute Praktiken aufklären (und diese durchsetzen). Entwickler sollten außerdem Websites erstellen, die so wenig Daten wie möglich von Nutzern erfassen, die Daten verantwortungsvoll verwenden sowie sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browser-Funktionen, die automatisch den Datenschutz der Nutzer schützen.
- Schauen wir uns an, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Nutzern unerwartet von Dritten erlangt werden.

## Definition von Datenschutzbegriffen und Konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web zur Verfügung stehen, lassen Sie uns einige wichtige Begriffe definieren.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verbunden, und man kann keine datenschutzfreundlichen Websites erstellen, ohne gute Sicherheit. Daher definieren wir beides.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten erfasst, gespeichert und verwendet werden, und sie nicht unverantwortlich zu verwenden. Beispielsweise sollten Sie Ihren Nutzern klar kommunizieren, welche Daten Sie erfassen, mit wem sie geteilt werden und wie sie verwendet werden. Nutzer müssen die Möglichkeit haben, Ihren Bedingungen zur Datennutzung zuzustimmen, Zugriff auf alle ihre gespeicherten Daten zu erhalten und sie zu löschen, wenn sie nicht mehr möchten, dass Sie sie haben. Sie müssen sich auch an Ihre eigenen Bedingungen halten: Nichts untergräbt das Vertrauen der Nutzer mehr, als wenn ihre Daten in einer Weise verwendet und geteilt werden, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es mittlerweile Gesetze, die den Schutz der Verbraucherrechte (wie zum Beispiel die EU-[DSGVO](https://gdpr.eu/)) regeln.

- **Sicherheit** bedeutet, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Nutzer- und Partnerdaten (externe). Eine robuste Datenschutzrichtlinie, die das Vertrauen Ihrer Nutzer gewinnt, nutzt nichts, wenn Ihre Sicherheit schwach ist und böswillige Parteien ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Nutzer beschreiben. Beispiele sind:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Passnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Körperliche Merkmale wie Körpergröße, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Beschwerden
- Benutzernamen, wenn sie mit einer Person in Verbindung gebracht werden können
- Hobbys, Interessen oder andere persönliche Präferenzen
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Nutzer nicht öffentlich teilen möchten und privat gehalten werden müssen (d.h. Informationen, die nur von einer bestimmten Gruppe autorisierter Nutzer zugänglich sind). Einige private Daten sind gesetzlich privat (z. B. medizinische Daten), andere mehr aus persönlichen Präferenzgründen.

### Personenbezogene Informationen

Anknüpfend an den obigen Abschnitt sind **personenbezogene Informationen** (PII) Informationen, die zur Identifizierung und/oder Nachverfolgung einer bestimmten Person verwendet werden können, ganz oder teilweise. Beispielsweise könnte ein böswilliger Akteur eine Liste mit Benutzernamen und Postleitzahlen verwenden, die eine Website online preisgibt, um mit ziemlicher Sicherheit die vollständigen Adressen der Nutzer herauszufinden. Selbst wenn kein umfassendes Datenleck passiert, ist es immer noch möglich, Nutzer durch weniger offensichtliche Mittel zu identifizieren, wie z. B. die verwendeten Browser, die genutzten Geräte, spezifische Schriftarten, die sie installiert haben, und so weiter.

### Tracking

**Tracking** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Nutzers über verschiedene Websites hinweg. Dies kann auf verschiedene Weise geschehen, z. B.:

- Betrachtung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die über verschiedene Seiten verteilt sind, auf denen Inhalte von Dritten eingebettet sind, um verschiedene Informationen über den Nutzer zu sammeln.
- Betrachten des {{httpheader("Referer")}}-Headers, um zu sehen, von welcher Seite ein Nutzer navigiert.
- Einfügen von Parametern in die URLs von eingehenden Links (zum Beispiel in eingebetteten Anzeigen, die zu Produktseiten führen, oder Marketing-E-Mails), die der verlinkten Seite offenbaren können, woher der Link stammt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder andere Kennzeichen des Nutzers, der darauf geklickt hat usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die wie folgt aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, bei dem Tracker einen Nutzer für einen kurzen und nicht wahrnehmbaren Moment auf ihre Website umleiten, um First-Party-Speicher zu verwenden, um diesen Nutzer über Websites hinweg zu tracken. Dies ermöglicht es Trackern, das Blockieren von Drittanbieter-Cookies zu umgehen. Wenn Sie beispielsweise eine Produktbewertung gelesen haben und auf einen Kauf-Link klicken möchten, könnten Sie unwissentlich zuerst zum Redirect-Tracker navigieren und erst _dann_ zum Einzelhändler. Dies bedeutet, dass der Tracker als First Party geladen wird und Tracking-Daten mit den Identifikatoren assoziieren kann, die in ihren First-Party-Cookies gespeichert sind, bevor Sie zum Einzelhändler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Nutzers und seiner Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und in verschiedenen Graden störend sein kann. Beispiele hierfür sind:

- **Gezielte Werbung**: Jeder hat die unheimliche Erfahrung gemacht, einige Artikel auf einem Gerät zu recherchieren und dann plötzlich auf all seinen anderen Geräten mit Werbung für dieselben Produkte bombardiert zu werden.
- **Verkauf oder Weitergabe von Daten**: Einige Drittanbieter sind dafür bekannt, Tracking-Daten zu sammeln und dann an andere zu verkaufen oder mit ihnen zu teilen, um sie für verschiedene Zwecke wie gezielte Werbung zu verwenden. Dies ist offensichtlich hochgradig unethisch und könnte je nachdem, wo auf der Welt es geschieht, auch illegal sein.
- **Diskriminierung durch Daten**: Im schlimmsten Fall könnte die Weitergabe von Daten dazu führen, dass der Nutzer unfair benachteiligt wird. Stellen Sie sich beispielsweise vor, dass eine Versicherungsgesellschaft Datenpunkte über einen potenziellen Kunden entdeckt, die dieser nicht preisgeben wollte und diese als Begründung für die Erhöhung der Versicherungsprämien verwendet werden.

### Fingerprinting

Ein Prozess, der dem Tracking sehr nahe steht, ist das **Fingerprinting**: Dies bezieht sich speziell darauf, _Nutzer zu identifizieren_, indem eine Sammlung von Datenpunkten über sie aufgebaut wird, die sie von anderen Nutzern unterscheiden. Dies könnte von Cookie-Inhalten bis hin zu dem verwendeten Browser und den lokal installierten Schriftarten alles umfassen.

Moderne Browser treffen Maßnahmen, um Fingerprinting-basierte Angriffe zu verhindern, indem sie entweder den Zugriff auf Informationen nicht erlauben oder, wo diese Informationen verfügbar sein müssen, durch Einführung von Variationen oder "Rauschen", das verhindert, dass sie für Identifikationszwecke genutzt werden können.

Zum Beispiel, wenn eine Website die verstrichene Zeit beim Browser eines Nutzers abfragt, könnte ein Vergleich dieser Zeit mit der von dem Server berichteten Zeit als Faktor für Fingerprinting nützlich sein. Deshalb führen Browser normalerweise eine kleine Menge an Abweichungen bei Timern ein, um sie weniger nützlich für die Identifikation des Systems des Nutzers zu machen.

> [!NOTE]
> Weitere nützliche Informationen finden Sie unter [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev.

## Datenschutzfunktionen, die von Browsern bereitgestellt werden

Browserhersteller sind sich der Notwendigkeit bewusst, den Datenschutz der Nutzer zu schützen und der negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Benutzererfahrung. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen abschwächen. In diesem Abschnitt schauen wir uns verschiedene Kategorien des Datenschutzes an, die Browser automatisch anwenden.

### HTTPS als Standard

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem Daten während des Transports über das Netzwerk verschlüsselt werden, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, weil es Dritte daran hindert, übertragene Daten abzufangen und sie böswillig zu verwenden, beispielsweise für Tracking.

Alle Browser bewegen sich dahin, HTTPS als Standard zu verlangen; dies ist praktisch schon der Fall, da man ohne dieses Protokoll im Web nicht viel tun kann.

Verwandte Themen sind:

- [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard für das Monitoring und Audit von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die verwendet werden können, um fehlerhafte oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern genutzt, um sich gegen Protokoll-Downgrade- und Cookie-Hijacking-Angriffe zu schützen, indem sie den Clients mitteilen, dass sie nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Obwohl HTTP/2 technisch nicht <em>verschlüsselt</em> werden muss, unterstützen die meisten Browserentwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung der Sicherheit/Datenschutz betrachtet werden.

### Opt-in für "starke Funktionen"

Sogenannte "starke" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Wesentlichen bedeutet, dass sie nur über HTTPS zugänglich sind. Nicht nur das, diese Web-Funktionen sind hinter einem System von Benutzerberechtigungen gesichert. Nutzer müssen explizit zustimmen, Funktionen wie das Zulassen von Benachrichtigungen, den Zugriff auf Geolokalisierungsdaten, das Aktivieren des Vollbildmodus, das Zugreifen auf Mediastreams von Webcams, die Nutzung von Webzahlungen, usw. zu erlauben.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz ihrer Nutzer verbessern. Viele dieser Funktionen blockieren oder beschränken die Fähigkeit von Drittanbieterseiten, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der obersten Domain gesetzt sind, Tracking-Skripte auszuführen usw.

- Der Standardwert für das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des Headers {{httpheader("Set-Cookie")}} wurde auf `Lax` aktualisiert, um besseren Schutz vor Tracking und {{Glossary("CSRF", "CSRF")}}-Angriffen zu bieten. Weitere Informationen finden Sie unter [Drittanbieter-Cookies mit `SameSite` kontrollieren](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite).
- Browser blockieren standardmäßig alle Drittanbieter-Cookies. Weitere Details finden Sie unter [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies).
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die den Datenschutz nicht gefährden, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs – dazu gehören Firefox, Safari und Brave. Auch Browser-Erweiterungen helfen dabei, wie zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Client-Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um die Privatsphäre ihrer Nutzer zu verbessern. Die folgenden Abschnitte behandeln die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben als solche und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln eine Vielzahl unterschiedlicher Daten von ihren Nutzern aus verschiedenen Gründen:

- Benutzernamen, Passwörter, E-Mails usw. zu Authentifizierungszwecken.
- E-Mails, Postadressen und Telefonnummern für Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Vielzahl anderer PII für alles von der Seitepersonalisierung bis zu Kundenzufriedenheitsumfragen.
- Surfgewohnheiten auf ihren Seiten und anderen Seiten, um die Erfolgsmetrik von Seiten und Funktionen zu messen.
- Und noch viel mehr.

Beim Sammeln von Daten von Ihren Kunden haben Sie die Möglichkeit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen, was wiederum Ihre Marke und Ihre Erfolgschancen verbessert.

Die Ethik der Datensammlung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten, als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie fertig sind

> [!NOTE]
> Die unten angegebenen Tipps tragen zu einer besseren, auf Datenschutz bedachten Benutzererfahrung bei, aber viele von ihnen sind gesetzlich vorgeschrieben, um die Einhaltung von Vorschriften sicherzustellen, zum Beispiel der [DSGVO](https://gdpr.eu/) in der EU. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften in Ihrem Land gelten und was Sie tun müssen, um sie einzuhalten.

### Sammeln Sie nicht mehr Daten, als Sie benötigen

Es ist verlockend, viele Daten von Ihren Nutzern anzufordern, weil Sie denken, dass diese in Zukunft nützlich sein könnten. Allerdings erhöht jedes zusätzliche bisschen Daten, das Sie sammeln, das Risiko für die Privatsphäre der Nutzer und erhöht die Wahrscheinlichkeit, dass sie den Schritt, den sie durchführen (sei es das Ausfüllen einer Umfrage oder das Anmelden für einen Dienst), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie durch eine weniger granulare Anfrage das bekommen können, was Sie brauchen. Ein Beispiel: Anstatt einen Nutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn bitten, zwischen allgemeineren Kategorien zu wählen.

Die beste Möglichkeit, den Datenschutz der Nutzer zu schützen, besteht darin, die gesammelten Daten zu minimieren. Im vorherigen Beispiel könnten Sie dieselben Daten ableiten, indem Sie den Kaufverlauf der Nutzer betrachten. Ein weiteres Beispiel: Nutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, sich für ein Konto anzumelden; wenn es nicht notwendig ist, um den Dienst zu betreiben, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie auf Ihrer Website eine Datenschutzerklärung veröffentlichen, die klar angibt:

- Daten, die Sie sammeln
- Möglichkeiten, wie Sie die Daten verwenden
- Parteien, mit denen Sie die Daten teilen möchten, falls überhaupt, und eine Deklaration, dass Sie um die Zustimmung des Nutzers bitten werden, bevor Sie sie teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Möglichkeiten, wie Nutzer die gesammelten Daten einsehen und löschen können, wenn sie es möchten

Wenn Nutzer Ihnen Daten zur Verfügung stellen, sollten sie die Möglichkeit haben, Ihre Datenschutzerklärung zu lesen und ihr zuzustimmen. Sie sollten kontrollieren können, ob sie mit diesem Einverständnis einverstanden sind und Ihre Bedingungen akzeptieren. Und wie oben bereits erwähnt, sollten sie auch die Möglichkeit haben, zu sehen, welche Daten von ihnen gesammelt wurden, und diese bei Bedarf löschen zu lassen.

Sobald Sie Ihre Datenschutzerklärung veröffentlicht haben, müssen Sie sicherstellen, dass Sie diese einhalten – das Einhalten Ihrer Versprechen ist sehr wichtig, um das Vertrauen der Nutzer zu gewinnen. Sie sollten nur die Daten sammeln, die Sie angeben zu sammeln, und sie nur für die Zwecke verwenden, die Sie angegeben haben. Wenn jemand in Ihrem Unternehmen einen cleveren neuen Weg findet, vorhandene Daten zu nutzen, ist das immer noch nicht in Ordnung, wenn dies nicht in Ihrer Richtlinie spezifiziert ist. Wenn Nutzer der Nutzung ihrer Daten für einen bestimmten Zweck zugestimmt haben und dieser Zweck sich erweitert, müssen Sie möglicherweise eine neue Zustimmung einholen.

### Löschen Sie die Daten, sobald Sie fertig sind

Früher haben wir erwähnt, dass Nutzern eine Möglichkeit gegeben werden sollte, die gesammelten Daten einzusehen und zu löschen, wenn sie es möchten. Dies könnten Sie möglicherweise als Teil derselben Erfahrung anbieten, die sie für die Löschung ihres Kontos nutzen können (ihre Daten gehen damit), oder diese als zwei separate Optionen bereitstellen. In jedem Fall sollten die Optionen leicht zu finden sein.

Dem Nutzer die Möglichkeit zu geben, wann bedeutende Teile von Daten gelöscht werden, ist sehr ermächtigend und schafft Vertrauen, aber es könnte einige Daten geben, deren Löschung Sie selbst verwalten möchten. Beispielsweise könnten einige Daten nur für ein paar Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Verwaltung einer Nutzersitzung verwendet werden, solange sie eingeloggt sind.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich, um kurzlebige Nutzerdaten zu löschen – er weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher zu leeren (z.B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Daten). Beispielsweise können Sie Ihren Server dazu bringen, diesen zusammen mit einer "Logged-out-Bestätigungsseite" zu senden, sodass die Daten nach dem Ausloggen sicher entfernt werden.

## Tracking einschränken

Früher haben wir Tracking und einige der unethischen Zwecke, für die es verwendet wird, besprochen. Wir müssen nicht weiter erläutern, wie solche Nutzungen das Vertrauen der Nutzer beeinträchtigen können; wo immer möglich, sollten Sie potenzielle Trackingsmechanismen, wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), nur für ethische Zwecke einsetzen, wie den Transfer des Anmelde- oder anderen Personalisierungsstatus über Websites hinweg.

Erinnern Sie sich auch an früher, dass Browser alle anfangen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie alternative Technologien zur Umsetzung gängiger Anwendungsfälle implementieren. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Menge an Tracking-Aktivitäten, auf die Sie sich verlassen, reduzieren und/oder gewünschte Informationsbeständigkeit auf andere Weise implementieren. Weitere Informationen hierzu finden Sie unter [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).

## Drittsourcen sorgfältig verwalten

Natürlich wäre es einfach, den Datenschutz zu managen, wenn Sie sich nur um die von Ihnen erstellten Ressourcen (Code, Cookies, Seiten usw.) kümmern müssten. Die eigentliche Herausforderung ergibt sich aus der Tatsache, dass Ihre Seite wahrscheinlich Drittsourcen nutzen wird. Dazu gehören eingebettete Inhalte von Dritten in `<iframe>`s, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittsourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung, sie bieten viel Leistungsfähigkeit. Allerdings hat jede Drittsource, die Sie auf Ihrer Seite zulassen, potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie in Ihre Seite eingebaut ist:

- JavaScript, das innerhalb von Drittanbieter-Inhalten ausgeführt wird, die über ein `<iframe>` in Ihre Seite eingebettet sind, wird durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten hat, die im obersten Browsing-Kontext enthalten sind.
- Ein Drittanbieterskript, das direkt über ein {{htmlelement("script")}}-Element in Ihrer Seite eingebaut ist, hätte allerdings Zugriff auf Ihre anderen Skripte und Daten, ganz gleich, ob sie auf Ihrer Seite oder auf einer anderen gehostet werden. Es würde im Wesentlichen als Erstanbietercode fungieren. Ein auf diese Weise eingebettetes böswilliges Skript könnte heimlich die Daten Ihrer Nutzer stehlen, indem es sie beispielsweise an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittsourcen, die Sie auf Ihrer Seite verwenden, zu prüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und was ihre Datenschutzrichtlinien sind. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittpartei-Skript verwenden, das sie verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu entwickeln, welche Anfragen eine Seite stellt, wie zum Beispiel der [Request Map Generator](https://requestmap.webperf.tools/).

Nachdem Sie Ihre Drittsourcen geprüft und verstanden haben, was sie tun, sollten Sie deren Nachteile gegen den Wert abwägen, den sie bringen. Wenn ein Drittpartei-Skript kostenlos und sehr nützlich ist, aber viele Benutzerdaten sammelt, könnten Sie:

1. Diese Nachteile akzeptieren, Ihre Datenschutzrichtlinie entsprechend aktualisieren und hoffen, dass dies das Vertrauen Ihrer Nutzer nicht zu sehr beinträchtigt.
2. Nach einer Alternativen, weniger datenintensiven Drittanbieter-Lösung suchen.
3. Ein eigenes Tool erstellen.

Die folgende Liste bietet einige Tipps, wie Sie Datenschutzrisiken bei Verwendung von Drittsourcen mindern können:

- Wenn Sie Drittsourcen einbetten, überlegen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Datenschutzbelastung zu erreichen. Beispielsweise könnte es Spaß machen, einen Social Media-Beitragsbetrachter in Ihre Seite einzubetten, aber ist es wirklich notwendig? Würde nicht ein Link zu Ihrer Social Media-Seite ausreichen? Auch haben einige Drittanbieterdienste datenschutzbewusste Optionen. Sehen Sie zum Beispiel in YouTubes [Einbetten von Videos & Playlists > Privacy-Enhanced Mode aktivieren](https://support.google.com/youtube/answer/171780).
- Wo möglich, sollten Sie Drittanbieter daran hindern, einen {{httpheader("Referer")}}-Header zu erhalten, wenn Sie Anfragen an sie stellen. Dies kann auf sehr granulare Weise erfolgen, zum Beispiel durch das Hinzufügen von [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) für externe Links. Oder Sie könnten dies globaler für die Seite oder Website festlegen, zum Beispiel durch die Verwendung des {{httpheader("Referrer-Policy")}} Headers.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API "starke Funktionen" (wie Benachrichtigungen, Geolokalisierungsdaten, Zugriff auf Mediastreams von Webcams usw.) zu kontrollieren. Dies kann nützlich für den Datenschutz sein, da es Drittanbieter-Seiten daran hindert, unerwartete Dinge mit diesen Funktionen zu tun, und Nutzer wollen nicht unnötig mit Erlaubnisprompts bombardiert werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "starken Funktionen" innerhalb von Drittanbieter-Seiten kontrollieren, die innerhalb von {{htmlelement("iframe")}}-Elementen eingebettet sind, indem Sie Berechtigungspolitiken innerhalb eines `allow`-Attributs auf dem `<iframe>` selbst angeben.

  > [!NOTE]
  > Siehe auch unseren [Leitfaden zur Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) für weitere Informationen und Beispiele sowie [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools, einschließlich eines Richtliniengenerators.

- Verwenden Sie das `sandbox`-Attribut von {{htmlelement("iframe")}}, um die Nutzung bestimmter Funktionen in den im `<iframe>` eingebetteten Inhalten zu erlauben oder zu verbieten – dazu gehören Dinge wie Downloads, Formularübermittlungen, Modale und Skripting.

> [!NOTE]
> Weitere nützliche Informationen zum Auditieren und mehr finden Sie unter [Drittparteien](https://web.dev/learn/privacy/third-parties/) auf web.dev.

## Benutzerdaten schützen

Sie müssen sicherstellen, dass Benutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist mehr ein [Sicherheitsthema](/de/docs/Web/Security), aber es ist erwähnenswert – eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die unten stehenden Tipps bieten einige Anleitungen zum Schutz der Benutzerdaten:

- Sicherheit ist schwer richtig zu implementieren. Wenn Sie eine sichere Lösung entwickeln, die die Datensammlung beinhaltet – insbesondere, wenn es sich um sensible Daten wie Anmeldeinformationen handelt – macht es Sinn, eine seriöse Lösung von einem angesehenen Anbieter zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework eingebaute Funktionen zum Schutz vor häufigen Schwachstellen haben. Sie könnten auch ein spezialisiertes Produkt für Ihren Zweck in Erwägung ziehen – zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrageanbieter.
- Wenn Sie eine eigene Lösung für die Sammlung von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Stellen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker ein, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie Multifaktor-Authentifizierung (MFA), um besseren Schutz zu bieten. Erwägen Sie die Nutzung einer speziellen API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die clientseitige Anwendung zu optimieren.
- Wenn Sie Benutzerdaten zur Registrierungsfelder sammeln, erzwingen Sie starke Passwörter, sodass die Kontodetails Ihrer Nutzer nicht einfach erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzern zur Verwendung eines Passwort-Managers, um komplexe Passwörter zu generieren und zu speichern; so müssen sie sich keine Sorgen machen, diese zu vergessen, oder ein Sicherheitsrisiko eingehen, indem sie diese aufschreiben.
- Integrieren Sie keine sensiblen Daten in URLs – wenn eine dritte Partei die URL abfängt (zum Beispiel via {{httpheader("Referer")}}-Header), könnte sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie den Einsatz von Tools wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Menge an Feature-Nutzung auf Ihrer Seite durchzusetzen, die es erschwert, Schwachstellen einzuführen. Seien Sie jedoch vorsichtig dabei – wenn Sie die Nutzung eines Features blockieren, auf das ein Drittanbieterskript angewiesen ist, kann es sein, dass Sie die Funktionalität Ihrer Seite unterbrechen. Dies ist etwas, worüber Sie beim Audit Ihrer Drittsourcen nachdenken können (siehe [Drittsourcen sorgfältig verwalten](#drittsourcen_sorgfältig_verwalten)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
