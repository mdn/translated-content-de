---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: 392ce991114e55e2187510b640ab545d09258a16
---

Menschen nutzen Websites für mehrere wichtige Aufgaben, wie zum Beispiel Bankgeschäfte, Einkaufen, Unterhaltung und das Bezahlen von Steuern. Dabei sind sie gezwungen, persönliche Informationen mit diesen Websites zu teilen. Nutzer vertrauen diesen Websites bei der Weitergabe ihrer Daten in einem gewissen Maße. Wenn diese Informationen in die falschen Hände geraten, könnten sie dazu verwendet werden, Nutzer auszunutzen, beispielsweise indem sie profiliert werden, mit unerwünschten Anzeigen gezielt angesprochen oder sogar ihre Identität oder ihr Geld gestohlen wird.

Moderne Browser verfügen bereits über eine Vielzahl von Funktionen, um die Privatsphäre der Nutzer im Web zu schützen, aber das allein reicht nicht aus. Um ein vertrauenswürdiges und datenschutzfreundliches Erlebnis zu schaffen, müssen Entwickler ihre Nutzer in guten Praktiken schulen (und sie durchsetzen). Entwickler sollten auch Websites erstellen, die so wenig wie möglich Daten von den Nutzern sammeln, diese Daten verantwortungsbewusst verwenden und sie sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browserfunktionen, die automatisch den Datenschutz der Nutzer schützen.
- Schauen wir an, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass personenbezogene Informationen/Daten der Nutzer unerwartet von Dritten erfasst werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web genutzt werden können, wollen wir einige wichtige Begriffe definieren.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwierig, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verbunden, und Sie können wirklich keine datenschutzfreundlichen Websites erstellen, ohne gute Sicherheit. Daher werden wir beide definieren.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sie nicht unverantwortlich zu nutzen. Zum Beispiel sollten Sie Ihren Nutzern deutlich mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie genutzt werden. Nutzer müssen die Möglichkeit erhalten, Ihren Datenverwendungsbedingungen zuzustimmen, Zugang zu allen ihren Daten zu haben, die Sie speichern, und sie zu löschen, wenn sie nicht mehr möchten, dass Sie sie haben. Sie müssen sich auch an Ihre eigenen Bedingungen halten: Nichts zerstört das Vertrauen der Nutzer so sehr wie die Verwendung und das Teilen ihrer Daten auf eine Art und Weise, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es mittlerweile Gesetze, die Verbraucherrechte im Bereich des Datenschutzes schützen (zum Beispiel die EU-[DSGVO](https://gdpr.eu/)).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne Daten) als auch Nutzer- und Partnerdaten (externe Daten). Es ist nutzlos, eine robuste Datenschutzrichtlinie zu haben, die das Vertrauen Ihrer Nutzer stärkt, wenn Ihre Sicherheit schwach ist und böswillige Parteien dennoch ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Nutzer beschreiben. Beispiele umfassen:

- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktdaten
- Passnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere amtliche Identifikatoren
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen und Passwörter
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Nutzer nicht öffentlich geteilt haben möchten und die privat gehalten werden müssen (d. h. Informationen, die nur einer bestimmten Gruppe von autorisierten Nutzern zugänglich sind). Einige private Daten sind gesetzlich privat (zum Beispiel Gesundheitsdaten), andere sind mehr aus persönlicher Präferenz privat.

### Personenbezogene Informationen

Ausgehend vom vorherigen Abschnitt sind **personenbezogene Informationen** Daten, die ganz oder teilweise dazu verwendet werden können, eine bestimmte Person ausfindig zu machen und/oder zu identifizieren. Zum Beispiel, wenn eine Website eine Liste mit Nutzernamen und Postleitzahlen im Internet offenlegt, könnte ein Angreifer diese Informationen fast sicher nutzen, um ihre vollständigen Adressen zu finden. Selbst wenn keine großflächige Datenpanne geschieht, ist es möglich, Nutzer über weniger offensichtliche Mittel zu identifizieren, etwa die von ihnen verwendeten Browser, die von ihnen verwendeten Geräte, die speziell installierten Schriftarten und so weiter.

### Tracking

**Tracking** bezieht sich auf den Prozess, die Aktivität eines Nutzers auf vielen verschiedenen Websites aufzuzeichnen. Dies kann auf verschiedene Weise geschehen, zum Beispiel:

- Untersuchung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies), die auf verschiedenen Websites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den Nutzer zu sammeln.
- Untersuchung des {{httpheader("Referer")}} Headers, um zu sehen, von wo ein Nutzer navigiert ist.
- Einfügen von Parametern in die URLs von eingehenden Links (etwa in eingebetteten Anzeigen, die zu Produktseiten verlinken, oder in Marketing-E-Mails), die der verlinkten Seite offenlegen können, woher der Link stammt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder andere Identifikatoren des Nutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, das Tracker einen Nutzer kurzzeitig (und unmerklich) auf ihre Website weiterleiten lässt, um eine Erstspeicher-Speicherung zu verwenden, um diesen Nutzer seitenübergreifend zu verfolgen. Dies erlaubt Trackern, die, Drittanbieter-Cookies zu umgehen, wenn diese blockiert werden. Wenn Sie zum Beispiel eine Produktbewertung gelesen haben und darauf klicken möchten, um es zu kaufen, navigieren Sie möglicherweise zunächst unwissentlich zum Redirect-Tracker und _dann_ zum Einzelhändler. Dies bedeutet, dass der Tracker als erster Anbieter geladen wird und Tracking-Daten mit den Identifikatoren, die sie in ihren Ersten-Party-Cookies gespeichert haben, assoziieren kann, bevor Sie an den Einzelhändler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Nutzers und dessen Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und in verschiedenen Graden lästig sein kann. Zum Beispiel:

- **Gezielte Werbung**: Jeder hat die beunruhigende Erfahrung gemacht, auf einem Gerät einige Artikel zu recherchieren und dann plötzlich mit Werbung für dieselben Produkte auf all seinen anderen Geräten bombardiert zu werden.
- **Verkauf oder Teilen von Daten**: Einige Drittparteien sind dafür bekannt, Tracking-Daten zu sammeln und sie dann weiterzuverkaufen oder mit anderen zu teilen, die sie für verschiedene Zwecke nutzen, wie zum Beispiel gezielte Werbung. Dies ist offensichtlich höchst unethisch und kann auch illegal sein, abhängig davon, wo auf der Welt es passiert.
- **Datenbedingtes Vorurteil**: In den schlimmsten Fällen könnte das Teilen von Daten dazu führen, dass Nutzer unfair benachteiligt werden. Stellen Sie sich zum Beispiel vor, dass ein Versicherungsunternehmen Datenpunkte über einen potenziellen Kunden herausfindet, die er nicht weitergeben wollte, und diese als Grund verwendet, um die Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein Prozess, der dem Tracking sehr ähnlich ist, ist das **Fingerprinting**: Dies bezieht sich speziell darauf, Nutzer zu identifizieren, indem ein Speicher von Datenpunkten über sie erstellt wird, die sie von anderen Nutzern unterscheiden. Dies könnte alles Mögliche sein, von Cookie-Inhalten bis hin zu dem Browser, den sie verwenden, und den Schriften, die sie lokal installiert haben.

Moderne Browser treffen Maßnahmen, um Fingerprinting-Angriffe zu verhindern, entweder indem sie den Zugang zu Informationen nicht zulassen oder dort, wo die Informationen verfügbar gemacht werden müssen, indem Variationen oder "Noise" eingeführt werden, die verhindern, dass sie zu Identifizierungszwecken verwendet werden.

Zum Beispiel, wenn eine Website die Browser-Zeit eines Nutzers abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit als Faktor zur Erkennung des Systems nützlich sein. Aus diesem Grund führen Browser typischerweise eine kleine Menge Variabilität in Timer ein, um sie weniger nützlich zur Identifizierung des Systems eines Nutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzmerkmale, die von Browsern bereitgestellt werden

Browser-Anbieter sind sich der Notwendigkeit bewusst, die Privatsphäre der Nutzer zu schützen und die negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Nutzererfahrung zu minimieren. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen abmildern. In diesem Abschnitt sehen wir uns verschiedene Kategorien des Datenschutzes an, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem es Daten während des Transports über das Netzwerk verschlüsselt und die Technologie hinter dem [HTTPS](/de/docs/Glossary/HTTPS) Protokoll ist. TLS ist gut für den Datenschutz, weil es Dritte daran hindert, übermittelte Daten abzufangen und sie böswillig zu verwenden, beispielsweise zum Tracking.

Alle Browser bewegen sich in Richtung der Standardanforderung von HTTPS; dies ist praktisch bereits der Fall, da Sie ohne dieses Protokoll nicht viel im Web tun können.

Verwandte Themen sind die folgenden:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Überprüfung von Zertifikaten, der eine Datenbank öffentlicher Logbücher erstellt, die zur Identifizierung fehlerhafter oder böswilliger Zertifikate verwendet werden kann.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokolldowngrade- und Cookie-Hijack-Angriffen zu schützen, indem sie Websites mitteilen, dass Clients nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- [HTTP/2](/de/docs/Glossary/HTTP_2)
  - : Während HTTP/2 technisch keine Verschlüsselung verwenden _muss_, unterstützen die meisten Browserentwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung der Sicherheit/des Datenschutzes angesehen werden.

### Opt-in für "leistungsstarke Funktionen"

Sogenannte "leistungsstarke" Web-API-Funktionen, die den Zugriff auf potenziell sensible Daten und Operationen ermöglichen, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im GrundeHTTPS-only bedeutet. Nicht nur das, sondern diese Web-Funktionen sind hinter einem System von Benutzerberechtigungen gesichert. Nutzer müssen ausdrücklich angeben, ob sie Funktionen wie das Zulassen von Benachrichtigungen, den Zugriff auf Geodaten, das Versetzen des Browsers in den Vollbildmodus, den Zugriff auf Medienströme von Webcams, die Verwendung von Webzahlungen usw. zulassen.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz ihrer Nutzer verbessern. Viele davon blockieren oder beschränken die Fähigkeit von Drittanbieter-Websites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der obersten Ebene der Domäne gesetzt sind, Tracking-Skripte auszuführen usw.

- Der {{httpheader("Set-Cookie")}} Header [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut-Standardwert wurde auf `Lax` aktualisiert, um besseren Schutz vor Tracking und [CSRF](/de/docs/Glossary/CSRF) Angriffen zu bieten. Siehe [Controlling third-party cookies with `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Browser haben alle damit begonnen, Drittanbieter-Cookies standardmäßig zu blockieren. Siehe [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für mehr Details.
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die den Datenschutz nicht beeinträchtigen, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise umzusetzen. Siehe [Umstellung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Auch Browser-Erweiterungen helfen dabei, zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für klientseitige Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um den Datenschutz ihrer Nutzer zu verbessern. Die untenstehenden Abschnitte behandeln die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln viele verschiedene Daten ihrer Nutzer aus einer Vielzahl von Gründen:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografischer Standort, Lieblingsbeschäftigungen und eine Vielzahl anderer personenbezogener Daten für alles, von der Website-Personalisierung bis hin zu Kundenzufriedenheitsumfragen.
- Surfgewohnheiten auf ihren und anderen Websites, um Erfolgsmessungen für Seiten und Funktionen vorzunehmen.
- Und vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Möglichkeit, mit Integrität zu handeln, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen. Dies verbessert wiederum Ihre Marke und Ihre Erfolgschancen.

Die Ethik der Datenerhebung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten, als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die untenstehenden Tipps bieten ein besseres, datenschutzbewussteres Nutzererlebnis, aber viele von ihnen sind gesetzlich erforderlich, um den Vorschriften, wie der [DSGVO]((https://gdpr.eu/) in der EU, zu entsprechen. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften in Ihrem Standort gelten und was Sie tun müssen, um diesbezüglich konform zu sein.

### Sammeln Sie nicht mehr Daten, als Sie benötigen

Es ist verlockend, viele Daten von Ihren Nutzern zu erfragen, weil Sie glauben, sie könnten in der Zukunft nützlich sein. Doch jedes zusätzliche Datum erhöht das Risiko für die Privatsphäre Ihrer Nutzer und die Wahrscheinlichkeit, dass sie den Schritt abbrechen, den sie ausführen (sei es das Ausfüllen einer Umfrage oder die Anmeldung für einen Dienst).

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das, was Sie benötigen, erreichen können, indem Sie Ihre Datenanfrage weniger detailliert gestalten. Zum Beispiel, anstatt einen Nutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn zwischen allgemeineren Kategorien wählen lassen.

Der beste Weg, um die Privatsphäre der Nutzer zu schützen, besteht jedoch darin, die gesammelten Daten zu minimieren. Beziehend auf das vorherige Beispiel könnten Sie dieselben Daten ableiten, indem Sie sich die Kaufhistorie eines Nutzers ansehen. Ein weiteres Beispiel ist, dass Nutzer es schätzen, Produkte anonym kaufen zu können. Sie sollten sie nicht dazu zwingen, sich für ein Konto anzumelden; wenn es nicht notwendig ist, um den Dienst zu betreiben, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln möchten, sollten Sie auf Ihrer Website eine Datenschutzrichtlinie veröffentlichen, die klar angibt:

- Daten, die Sie sammeln
- Wege, wie Sie die Daten nutzen
- Parteien, mit denen Sie die Daten eventuell teilen, und eine Erklärung, dass Sie die Zustimmung der Nutzer vor dem Teilen einholen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Möglichkeiten, wie Nutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie dies wünschen

Wenn Ihre Nutzer Ihnen Daten zur Verfügung stellen, sollten sie die Möglichkeit haben, Ihre Datenschutzrichtlinie zu lesen und zuzustimmen. Sie sollten kontrollieren können, ob sie damit einverstanden sind und Ihren Bedingungen zustimmen. Und wie oben angedeutet, sollten sie auch sehen können, welche Daten von ihnen Sie erfasst haben, und diese löschen können, wenn sie dies wünschen.

Wenn Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sich daran halten — das, was Sie sagen, auch zu tun, ist sehr wichtig, um Vertrauen bei Ihren Nutzern aufzubauen. Sie sollten nur die Daten sammeln, die Sie angeben, und sie nur für den angegebenen Zweck verwenden. Wenn jemand aus Ihrem Unternehmen eine clevere neue Möglichkeit findet, bestehende Daten zu nutzen, ist das immer noch nicht in Ordnung gemäß den Bedingungen Ihrer Richtlinie, wenn sie nicht spezifiziert, dass Sie sie für diesen Zweck verwenden werden. Wenn Nutzer der Verwendung ihrer Daten für einen bestimmten Zweck zustimmen und sich dieser Zweck erweitert, müssen Sie möglicherweise neue Zustimmung einholen.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Früher haben wir erwähnt, den Nutzern eine Möglichkeit zu bieten, zu sehen, welche Daten von ihnen Sie erfasst haben, und sie zu löschen, wenn sie dies möchten. Dies könnten Sie möglicherweise als Teil derselben Erfahrung tun, die sie nutzen können, um ihr Konto zu löschen (ihre Daten gehen damit einher), oder sie zwei separate Optionen machen. So oder so würden die Optionen leicht zu finden sein.

Es ist sehr befähigend und vertrauensbildend, wenn der Nutzer wählen kann, wann bedeutende Datenteile gelöscht werden, aber es kann auch einige Daten geben, deren Löschung Sie selbst handhaben möchten. Zum Beispiel könnten einige Daten nur für einige Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Verwaltung einer Nutzersitzung verwendet werden, während der Nutzer eingeloggt ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Antwort-Header ist sehr nützlich zum Löschen von kurzfristigen Nutzerdaten — er weist den Browser an, seinen Cache und/oder seine Cookies und/oder seine Speicherung (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu löschen. Zum Beispiel könnten Sie Ihren Server dazu bringen, ihn zusammen mit einer "Ausgeloggt-Bestätigungsseite" zu senden, sodass die Daten des Nutzers sicher entfernt werden, sobald er ausgeloggt ist.

## Tracking reduzieren

Früher haben wir über das Tracking gesprochen und einige der unethischen Zwecke, für die es genutzt wird. Wir sollten nicht erwähnen müssen, wie solche Verwendungen das Nutzervertrauen zerstören können; wann immer möglich, sollten Sie nur potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) für ethische Zwecke verwenden, wie etwa das Übertragen von Anmelde- oder anderen Personalisierungsstatus über Websites hinweg.

Auch erinnern wir nochmals daran, dass alle Browser beginnen, Drittanbieter-Cookies standardmäßig zu blockieren, während alternative Technologien zur Erreichung gängiger Anwendungsfälle implementiert werden. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Menge der von Ihnen abhängigen Tracking-Aktivitäten begrenzen und/oder gewünschte Informationspersistenz auf andere Weise implementieren. Siehe [Umstellung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Natürlich wäre es einfach, den Datenschutz zu bewahren, wenn Sie sich nur um selbst erstellte Ressourcen kümmern müssten (Code, Cookies, Websites usw.). Die eigentliche Herausforderung besteht darin, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen verwenden wird. Dazu können Drittanbieter-Inhalte gehören, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Web-Entwicklung, sie bieten eine Menge Leistungsfähigkeit. Allerdings hat jede Drittanbieter-Ressource, die Sie auf Ihrer Website zulassen, möglicherweise dieselben Berechtigungen wie Ihre eigenen Ressourcen; alles hängt davon ab, wie sie auf Ihrer Seite eingebunden sind:

- JavaScript, das in Drittanbieter-Inhalten ausgeführt wird, die über ein `<iframe>` auf Ihrer Website eingebettet sind, wird durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, sodass es keinen Zugriff auf andere Skripte und Daten hat, die im obersten Browser-Kontext enthalten sind.
- Ein Drittanbieter-Skript, das direkt in Ihrer Seite über ein {{htmlelement("script")}} Element eingebunden wird, hätte jedoch Zugriff auf Ihre anderen Skripte und Daten, unabhängig davon, ob es auf Ihrer Seite oder auf einer anderen Seite gehostet wurde. Es wäre effektiv erster Partys Code. Ein auf diese Weise eingebundenes bösartiges Skript könnte heimlich die Daten Ihrer Nutzer stehlen, indem es sie zum Beispiel an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Website verwenden, zu überprüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und was ihre Datenschutzrichtlinien sind. Ihre sorgfältig entwickelte Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das diese verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu bekommen, welche Anfragen eine Website stellt, zum Beispiel der [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieter-Ressourcen überprüft und verstanden haben, was sie tun, sollten Sie deren Nachteile als Kompromiss für den Nutzen, den sie bieten, abwägen. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber ziemlich viele Nutzerdaten sammelt, könnten Sie:

1. Den Kompromiss akzeptieren, Ihre Datenschutzrichtlinie aktualisieren, um Einzelheiten dazu einzuschließen, und hoffen, dass es das Vertrauen Ihrer Nutzer nicht zu sehr beeinträchtigt.
2. Nach einer Alternative suchen, die weniger datenhungrig ist.
3. Ihr eigenes Tool bauen.

Die folgende Liste bietet einige Tipps, wie Sie die datenschutzbedingten Risiken bei der Verwendung von Drittanbieter-Ressourcen mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, überlegen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Datenschutz-Auswirkungen zu erzielen. Zum Beispiel könnte es unterhaltsam sein, ein Social-Media-Beitrags-Viewer auf Ihrer Website einzubetten, aber ist es wirklich notwendig? Wäre ein Link zu Ihrer Social-Media-Seite nicht ausreichend? Auch haben einige Drittanbieter-Dienste optionen, die den Datenschutz verbessern. Siehe zum Beispiel YouTubes [Videos & Playlists einbetten > Datenschutzmodus aktivieren](https://support.google.com/youtube/answer/171780).
- Wenn möglich, sollten Sie verhindern, dass Dritte einen {{httpheader("Referer")}} Header erhalten, wenn Sie Anfragen an sie stellen. Dies kann auf recht granularer Weise erfolgen, indem Sie zum Beispiel [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) in externe Links einschließen. Oder Sie könnten dies globaler für die Seite oder die Website festlegen, zum Beispiel durch Verwendung des {{httpheader("Referrer-Policy")}} Headers.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API-"leistungsstarke Funktionen" zu kontrollieren (wie Benachrichtigungen, Geodaten, den Zugriff auf Medienströme von Webcams usw.). Dies kann nützlich für den Datenschutz sein, weil es verhindert, dass Drittanbieter-Websites unerwartete Dinge mit diesen Funktionen tun, und Nutzer möchten nicht unnötigerweise von Berechtigungseingaben belästigt werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" in dritten Websites, die in {{htmlelement("iframe")}} Elementen eingebettet sind, steuern, indem Sie Berechtigungsrichtlinien in einem `allow` Attribut am `<iframe>` selbst festlegen.

  > [!NOTE]
  > Siehe auch unseren [Permissions-Policy-Leitfaden](/de/docs/Web/HTTP/Permissions_Policy) für weitere Informationen und Beispiele sowie [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Werkzeuge, einschließlich eines Richtliniengenerators.

- Verwenden Sie das `sandbox` Attribut des {{htmlelement("iframe")}}, um die Nutzung bestimmter Funktionen innerhalb des in dem `<iframe>` eingebetteten Inhalts zu erlauben oder zu verbieten — dazu gehören Dinge wie Downloads, Formularübermittlungen, modale Fenster und Scripting.

> [!NOTE]
> Siehe [Drittparteien](https://web.dev/learn/privacy/third-parties/) auf web.dev für weitere nützliche Informationen zu Überprüfung und mehr.

## Schutz der Nutzerdaten

Sie müssen sicherstellen, dass die Daten der Nutzer sicher übermittelt und gespeichert werden, sobald Sie sie erfasst haben. Dies ist mehr ein [Sicherheitsthema](/de/docs/Web/Security), aber es ist erwähnenswert, dass eine gute Datenschutzrichtlinie wertlos ist, wenn Ihre Sicherheit lasch ist und Angreifer die Daten von Ihnen stehlen können.

Die untenstehenden Tipps bieten einige Anleitungen zum Schutz der Nutzerdaten:

- Sicherheit ist schwer richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die die Erfassung von Daten beinhaltet — insbesondere, wenn es sich um sensible Daten wie Anmeldeinformationen handelt — macht es Sinn, eine seriöse Lösung von einem respektvollen Anbieter zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework eingebaute Funktionen zum Schutz vor häufigen Schwachstellen haben. Sie könnten auch erwägen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden — zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfragedienst.
- Wenn Sie Ihre eigene Lösung zur Erfassung von Nutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Stellen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker ein, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie eine Multifaktor-Authentifizierung (MFA), um besseren Schutz zu bieten. Erwägen Sie die Nutzung einer speziellen API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die klientseitige App zu optimieren.
- Wenn Sie Informationen zur Nutzeranmeldung erfassen, erzwingen Sie starke Passwörter, sodass die Kontodetails Ihres Nutzers nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; auf diese Weise müssen sie sich keine Sorgen machen, sie zu merken, oder ein Sicherheitsrisiko erzeugen, indem sie sie aufschreiben.
- Nehmen Sie keine sensiblen Daten in URLs auf — wenn eine dritte Partei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}} Header), könnten sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie die Verwendung von Tools wie der [Content Security Policy](/de/docs/Web/HTTP/CSP) und der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um eine Reihe von Feature-Nutzungen auf Ihrer Website durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen. Seien Sie vorsichtig, wenn Sie dies tun — wenn Sie die Nutzung eines Features blockieren, auf das ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, können Sie die Funktionalität Ihrer Website brechen. Dies ist etwas, das Sie bei der Überprüfung Ihrer Drittanbieter-Ressourcen beachten können (siehe [Verwalten Sie Drittanbieter-Ressourcen sorgfältig](#verwalten_sie_drittanbieter-ressourcen_sorgfältig)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
