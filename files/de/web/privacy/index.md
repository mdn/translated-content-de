---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Menschen nutzen Websites für mehrere wichtige Aufgaben wie Banking, Einkaufen, Unterhaltung und das Bezahlen ihrer Steuern. Dabei sind sie gezwungen, persönliche Informationen mit diesen Seiten zu teilen. Nutzer setzen ein gewisses Maß an Vertrauen in die Seiten, mit denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten, könnten sie ausgenutzt werden, beispielsweise um Profiling zu betreiben, sie mit unerwünschter Werbung zu bombardieren oder sogar ihre Identität oder ihr Geld zu stehlen.

Moderne Browser verfügen bereits über eine Fülle von Funktionen, um die Privatsphäre der Nutzer im Web zu schützen, aber das ist nicht genug. Um eine vertrauenswürdige und die Privatsphäre respektierende Erfahrung zu schaffen, müssen Entwickler ihre Seitenbenutzer in guten Praktiken schulen (und diese durchsetzen). Entwickler sollten auch Websites erstellen, die so wenig Daten wie möglich von Benutzern sammeln, die Daten verantwortungsbewusst nutzen sowie sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige damit zusammenhängende Begriffe.
- Untersuchen wir Browserfunktionen, die automatisch den Datenschutz der Benutzer schützen.
- Betrachten wir, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu schaffen, die das Risiko minimieren, dass persönliche Informationen/Daten von Benutzern unerwartet durch Dritte erlangt werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web verfügbar sind, lassen Sie uns einige wichtige Begriffe definieren.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verwandt, und man kann keine datenschutzfreundlichen Websites erstellen, ohne gute Sicherheit. Daher werden wir beides definieren.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und genutzt werden, und diese nicht unverantwortlich zu verwenden. Beispielsweise sollte Sie Ihren Nutzern klar kommunizieren, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Nutzer müssen die Möglichkeit haben, Ihre Bedingungen zur Datennutzung zu akzeptieren, Zugriff auf alle ihre von Ihnen gespeicherten Daten zu erhalten und diese zu löschen, wenn sie nicht mehr möchten, dass Sie sie haben. Sie müssen sich auch an Ihre eigenen Bedingungen halten: Nichts untergräbt das Vertrauen der Nutzer mehr, als wenn ihre Daten auf nicht genehmigte Weise verwendet und geteilt werden. Und das ist nicht nur ethisch falsch; es könnte auch gegen das Gesetz sein. In vielen Teilen der Welt gibt es mittlerweile Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die [DSGVO](https://gdpr.eu/) der EU).

- **Sicherheit** ist der Akt des Schutzes privater Daten und Systeme vor unbefugtem Zugriff. Dies umfasst sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern). Es bringt nichts, eine robuste Datenschutzrichtlinie zu haben, die Ihre Benutzer Ihnen vertrauen lässt, wenn Ihre Sicherheit schwach ist und böswillige Parteien trotzdem deren Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Benutzer beschreiben. Beispiele umfassen:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Passnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen, wenn sie einer Person zugeordnet werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Benutzer nicht öffentlich teilen möchten und die privat gehalten werden müssen (d.h. Informationen, die nur von einer bestimmten Gruppe autorisierter Benutzer zugänglich sind). Einige private Daten sind gesetzlich privat (zum Beispiel medizinische Daten), andere sind eher aufgrund persönlicher Präferenzen privat.

### Personenbezogene Daten

In Fortsetzung des obigen Abschnitts sind **personenbezogene Daten** (PII) Informationen, die als Ganzes oder in Teilen dazu verwendet werden können, eine bestimmte Person ausfindig zu machen oder zu identifizieren. Zum Beispiel könnte ein böswilliger Dritter, wenn eine Seite eine Liste von Benutzernamen und Postleitzahlen online leakt, fast sicher diese Informationen verwenden, um deren vollständige Adressen zu finden. Selbst wenn kein vollständiger Leak stattfindet, ist es immer noch möglich, Benutzer durch weniger offensichtliche Mittel zu identifizieren, wie die Browser, die sie verwenden, die Geräte, die sie verwenden, spezifische Schriftarten, die sie installiert haben, und so weiter.

### Tracking

**Tracking** bezeichnet den Prozess der Aufzeichnung der Aktivitäten eines Benutzers auf vielen verschiedenen Websites. Dies kann auf verschiedene Weise geschehen, zum Beispiel:

- Überprüfung mehrerer [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die auf verschiedenen Seiten gesetzt sind, auf denen Drittanbieterinhalte eingebettet sind, um verschiedene Informationen über den Benutzer zu erhalten.
- Überprüfung des {{httpheader("Referer")}} Headers, um zu sehen, von wo ein Benutzer navigiert ist.
- Einfügen von Parametern in die URLs eingehender Links (zum Beispiel in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder Marketing-E-Mails), die der verlinkten Seite aufzeigen können, woher der Link stammt, Teil welcher Marketingkampagne er ist, die E-Mail-Adresse oder einen anderen Identifikator des Benutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Weiterleitungs-Tracking, bei dem Tracker den Benutzer kurzzeitig (und unmerklich) auf ihre Website umleiten, um First-Party-Speicher zu verwenden, um diesen Benutzer webseitenübergreifend zu verfolgen. Dies ermöglicht es Trackern, das Blockieren von Third-Party-Cookies zu umgehen. Zum Beispiel, wenn Sie eine Produktbewertung gelesen haben und darauf klicken möchten, um es zu kaufen, könnten Sie unwissentlich zuerst zum Umleitungsverfolger navigieren und _dann_ zu dem Verkäufer. Dies bedeutet, dass der Tracker als First-Party geladen wird und Tracking-Daten mit den Identifikatoren verknüpfen kann, die sie in ihren First-Party-Cookies gespeichert haben, bevor sie Sie zum Verkäufer weiterleiten.

Tracking-Daten können verwendet werden, um ein Profil eines Benutzers und seiner Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und in unterschiedlichem Maße ärgerlich sein kann. Beispiele:

- **Gezielte Werbung**: Jeder hat schon die unheimliche Erfahrung gemacht, einige Artikel auf einem Gerät zu recherchieren und dann plötzlich mit Werbung für dieselben Produkte auf allen anderen Geräten bombardiert zu werden.
- **Verkauf oder Weitergabe von Daten**: Einige Drittparteien sind dafür bekannt, Tracking-Daten zu sammeln und diese dann an/mit anderen zu verkaufen/teilen, um sie für verschiedene Zwecke wie gezielte Werbung zu nutzen. Dies ist offensichtlich hochgradig unethisch und kann auch illegal sein, abhängig davon, wo in der Welt es passiert.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte die Weitergabe von Daten dazu führen, dass der Benutzer unfair benachteiligt wird. Zum Beispiel, wenn sich eine Versicherungsgesellschaft über Datenpunkte eines potenziellen Kunden informiert, die dieser nicht bereit war zu teilen, und diese als Begründung verwendet, um Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein dem Tracking sehr nahe stehender Prozess ist das **Fingerprinting**: Dies bezieht sich speziell auf das _Identifizieren_ von Benutzern, indem ein Datenbestand über sie aufgebaut wird, der sie von anderen Benutzern unterscheidet. Dies könnte alles umfassen, von Cookie-Inhalten bis hin zu dem verwendeten Browser und den lokal installierten Schriftarten.

Moderne Browser ergreifen Maßnahmen, um Angriffe basierend auf Fingerprinting zu verhindern, indem sie entweder den Zugriff auf Informationen einschränken oder, wenn die Informationen zugänglich gemacht werden müssen, Variationen oder "Rauschen" einführen, die deren Verwendung für Identifikationszwecke verhindern.

Zum Beispiel, wenn eine Website die verstrichene Zeit des Browsers eines Benutzers abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit als Faktor für das Fingerprinting nützlich sein. Aufgrund dessen führen Browser typischerweise eine kleine Menge an Variabilität bei Timern ein, um sie weniger nützlich für die Identifizierung des Systems des Benutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen von Browsern

Browseranbieter sind sich der Notwendigkeit, die Privatsphäre der Nutzer zu schützen, und der negativen Effekte von Tracking, Fingerprinting usw. auf die Benutzererfahrung bewusst. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen mindern. In diesem Abschnitt betrachten wir die verschiedenen Kategorien des Datenschutzes, die Browser automatisch anwenden.

### HTTPS by default

[Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security) bietet Sicherheit und Datenschutz durch die Verschlüsselung von Daten während des Transports über das Netzwerk und ist die Technik, die hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll steht. TLS ist gut für den Datenschutz, weil es verhindert, dass Dritte übertragene Daten abfangen und missbräuchlich verwenden, z. B. für Tracking.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; dies ist praktisch bereits der Fall, weil man im Web ohne dieses Protokoll nicht viel machen kann.

Die verwandten Themen sind wie folgt:

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Prüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die dazu verwendet werden kann, falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokoll-Downgrades und Cookie-Diebstahl-Angriffen zu schützen, indem es den Seiten ermöglicht, den Clients zu signalisieren, dass sie nur HTTPS zur Kommunikation mit dem Server nutzen können.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Obwohl HTTP/2 technisch keine Verschlüsselung <em>haben muss</em>, unterstützen die meisten Browser-Entwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung der Sicherheit/Datenschutz angesehen werden.

### Opt-in für "starke Funktionen"

Sogenannte "starke" Web-API-Funktionen, die Zugang zu potenziell sensiblen Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar, was im Wesentlichen bedeutet, dass sie nur unter HTTPS verfügbar sind. Darüber hinaus sind diese Webfunktionen hinter einem Benachrichtigungssystem von Benutzerberechtigungen gesichert. Benutzer müssen explizit zustimmen, um Funktionen zu erlauben wie das Senden von Benachrichtigungen, den Zugriff auf Geolokalisierungsdaten, das Wechseln in den Vollbildmodus des Browsers, den Zugriff auf Medienstreams von Webcams, die Nutzung von Webzahlungen usw.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch die Privatsphäre ihrer Nutzer schützen. Viele davon blockieren oder begrenzen die Fähigkeit von Drittanbieterseiten, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der Top-Level-Domain gesetzt sind, Tracking-Skripte auszuführen usw.

- Der Standardwert des Attributs [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des {{httpheader("Set-Cookie")}} Headers wurde auf `Lax` aktualisiert, um besseren Schutz gegen Tracking und {{Glossary("CSRF", "CSRF")}} Angriffe zu bieten. Siehe [Kontrollieren von Third-Party-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Browser haben alle damit begonnen, Third-Party-Cookies standardmäßig zu blockieren. Siehe [Wie gehen Browser mit Third-Party-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für weitere Details.
- Browser implementieren Technologien, um Third-Party-Cookies nur unter bestimmten Umständen zuzulassen, die die Privatsphäre nicht schädigen, oder um gängige Anwendungsfälle, die derzeit Third-Party-Cookies erfordern, auf alternative Weise zu implementieren. Siehe [Übergang von Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — darunter Firefox, Safari und Brave. Browser-Erweiterungen helfen ebenfalls dabei, wie zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect Tracking Protection](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Entwickler auf der Client-Seite

Es gibt einige Maßnahmen, die Webentwickler ergreifen können und sollten, um die Privatsphäre ihrer Benutzer zu verbessern. Die unten aufgeführten Abschnitte erörtern die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben und erfordern möglicherweise die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln viele verschiedene Daten von ihren Nutzern aus einer Vielzahl von Gründen:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, bevorzugte Freizeitaktivitäten und eine Vielzahl anderer PII für alles, von der Personalisierung der Seite bis zu Kundenumfragen über die Zufriedenheit.
- Browsing-Verhalten auf ihren Seiten und anderen Seiten, um Erfolgsmetriken für Seiten und Funktionen zu messen.
- Und vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Gelegenheit, sich integrell zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung mit ihnen aufzubauen, was wiederum Ihre Marke verbessert und Ihre Erfolgschancen erhöht.

Die Ethik der Datensammlung kann auf drei einfache Prinzipien heruntergebrochen werden:

- Sammeln Sie nicht mehr Daten als nötig
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die unten angegeben Tipps sorgen für eine bessere, datenschutzbewusstere Benutzererfahrung, aber viele sind gesetzlich vorgeschrieben, um die Einhaltung von Vorschriften, zum Beispiel der [DSGVO](https://gdpr.eu/) in der EU, sicherzustellen. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften für Sie an Ihrem Standort gelten und was Sie tun müssen, um ihnen zu entsprechen.

### Sammeln Sie nicht mehr Daten als nötig

Es ist verlockend, viele Daten von Ihren Nutzern anzufordern, weil Sie glauben, dass sie in der Zukunft nützlich sein könnten. Jeder zusätzliche Datenpunkt, den Sie sammeln, erhöht jedoch das Risiko für die Privatsphäre Ihrer Nutzer und erhöht die Wahrscheinlichkeit, dass sie den Schritt abbrechen, den sie gerade ausführen (sei es das Ausfüllen einer Umfrage oder das Anmelden für einen Dienst).

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das benötigte Ergebnis erzielen können, indem Sie Ihre Datenanforderung weniger detailliert gestalten. Als Beispiel können Sie, anstatt einen Benutzer nach seinen bevorzugten Produkten zu fragen, ihn bitten, zwischen allgemeineren Kategorien zu wählen.

Die beste Möglichkeit, den Datenschutz zu schützen, besteht jedoch darin, die Datenmenge zu minimieren, die Sie sammeln. Bei Bezugnahme auf das vorherige Beispiel könnten Sie dieselben Daten durch die Betrachtung der Kaufhistorie der Benutzer ableiten. Ein weiteres Beispiel: Benutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, ein Konto zu erstellen; wenn es für die Dienstleistung nicht notwendig ist, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln möchten, sollten Sie eine Datenschutzrichtlinie auf Ihrer Seite veröffentlichen, die klar folgende Punkte aufführt:

- Die Daten, die Sie sammeln
- Möglichkeiten, wie Sie die Daten verwenden
- Parteien, mit denen Sie die Daten teilen wollen, falls überhaupt und eine Erklärung, dass Sie die Zustimmung der Benutzer einholen, bevor Sie teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Möglichkeiten, wie Benutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie es wünschen

Wenn Sie Daten zur Verfügung stellen, sollten Ihren Nutzern die Gelegenheit gegeben werden, Ihre Datenschutzrichtlinie einzusehen und zuzustimmen. Sie sollten in der Lage sein zu entscheiden, ob sie damit einverstanden sind, und Ihren Bedingungen zustimmen. Und wie bereits erwähnt, sollten sie auch sehen können, welche Daten von ihnen Sie gesammelt haben, und diese löschen können, wenn sie es wünschen.

Sobald Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sich daran halten – das zu tun, was Sie sagen, ist entscheidend für den Aufbau von Benutzervertrauen. Sie sollten nur die Daten sammeln, die Sie angeben, und sie nur für die Zwecke verwenden, die Sie angeben. Wenn jemand aus Ihrem Unternehmen mit einer cleveren neuen Möglichkeit kommt, bestehende Daten zu verwenden, ist das unter den Bedingungen Ihrer Richtlinie dennoch nicht in Ordnung, wenn es nicht angibt, dass Sie sie für diesen Zweck verwenden werden. Wenn Benutzer der Nutzung ihrer Daten für einen bestimmten Zweck zugestimmt haben und sich dieser Zweck erweitert, müssen Sie möglicherweise erwägen, eine neue Einwilligung zu erhalten.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Früher haben wir erwähnt, dass Sie den Nutzern eine Möglichkeit geben sollten, die von Ihnen gesammelten Daten einzusehen und zu löschen, wenn sie es wünschen. Dies könnten Sie als Teil derselben Erfahrung tun, die sie nutzen können, um ihr Konto zu löschen (ihre Daten gehen mit ihm), oder sie in zwei separate Optionen unterteilen. In jedem Fall sollten die Optionen leicht zu finden sein.

Den Benutzern zu ermöglichen, wann signifikante Teile von Daten gelöscht werden sollen, ist sehr ermächtigend und baut Vertrauen auf, aber es könnten einige Teile von Daten geben, deren Löschung Sie selbst verwalten möchten. Beispielsweise könnten einige Daten nur für ein paar Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während einer Benutzersitzung verwendet werden, während sie eingeloggt sind.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich zum Löschen kurzfristiger Benutzerdaten — er weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu löschen. Beispielsweise könnten Sie Ihren Server dazu bringen, den Header zusammen mit einer "Logout-Bestätigungsseite" zu senden, wodurch die Benutzerdaten sicher entfernt werden, sobald sie abgemeldet sind.

## Tracking reduzieren

Früher haben wir Tracking besprochen und einige der unethischen Zwecke, für die es verwendet wird. Wir müssen sicher nicht darauf hinweisen, wie sich solche Verwendungen auf das Benutzervertrauen auswirken können; wann immer möglich, sollten Sie potenzielle Tracking-Mechanismen wie [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Zwecke verwenden, wie z. B. zum Übertragen von Anmelde- oder anderen Personalisierungsstatus über Seiten hinweg.

Erinnern Sie sich auch daran, dass Browser damit beginnen, Third-Party-Cookies standardmäßig zu blockieren und alternative Technologien zu implementieren, um gängige Anwendungsfälle zu erreichen. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Anzahl der Tracking-Aktivitäten begrenzen, auf die Sie sich verlassen, und/oder die gewünschte Informationsspeicherung auf andere Weise umsetzen. Siehe [Übergang von Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Drittanbieterressourcen sorgfältig verwalten

Natürlich wäre es einfach, den Datenschutz zu verwalten, wenn Sie sich nur um Ressourcen kümmern müssten, die Sie selbst erstellt haben (Code, Cookies, Seiten usw.). Die eigentliche Herausforderung besteht darin, dass Ihre Seite wahrscheinlich Drittanbieterressourcen nutzt. Dazu gehören Inhalte von Drittanbietern, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieterressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung, sie bieten viel Leistung. Jedes Drittanbieterressource, das Sie auf Ihrer Seite zulassen, hat jedoch potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie es auf Ihrer Seite eingebunden wird:

- JavaScript, das in Drittanbieterinhalten ausgeführt wird, die über ein `<iframe>` in Ihre Seite eingebettet sind, ist durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten im Top-Level-Browsing-Kontext hätte.
- Ein Drittanbieter-Skript, das jedoch direkt über ein {{htmlelement("script")}}-Element auf Ihrer Seite eingebunden wird, hätte Zugriff auf Ihre anderen Skripte und Daten, unabhängig davon, ob es auf Ihrer Seite oder einer anderen Seite gehostet wird. Es wäre im Wesentlichen First-Party-Code. Ein bösartiges Skript, das auf diese Weise eingebunden wird, könnte heimlich die Daten Ihrer Benutzer stehlen, beispielsweise indem es sie an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieterressourcen, die Sie auf Ihrer Seite verwenden, zu prüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, sowie welche Datenschutzrichtlinien sie haben. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das sie verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu erhalten, welche Anfragen eine Seite stellt, zum Beispiel den [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieterressourcen geprüft und verstanden haben, was sie tun, sollten Sie deren Nachteile als Abwägung gegen den Nutzen, den sie bieten, in Betracht ziehen. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber ziemlich viele Benutzerdaten sammelt, könnten Sie:

1. Diese Abwägung akzeptieren, Ihre Datenschutzrichtlinie aktualisieren, um Details dazu aufzunehmen, und hoffen, dass sie das Vertrauen Ihrer Benutzer nicht zu sehr beeinträchtigt.
2. Nach einer alternativen, weniger datenhungrigen Drittanbieterlösung suchen.
3. Ihr eigenes Tool entwickeln.

Die folgende Liste bietet einige Tipps, wie Sie die Datenschutzrisiken, die mit der Verwendung von Drittanbieterressourcen verbunden sind, mindern können:

- Wenn Sie Drittanbieterressourcen einbetten, prüfen Sie, ob es eine Möglichkeit gibt, den gleichen oder einen ähnlichen Effekt mit weniger Datenschutzfolgen zu erreichen. Beispielsweise könnte ein eingebetteter Social-Media-Viewer auf Ihrer Seite Spaß machen, aber ist er wirklich notwendig? Würde nicht ein Link zu Ihrer Social-Media-Seite ausreichen? Außerdem haben einige Drittanbieterdienste datenschutzfreundliche Optionen. Siehe zum Beispiel YouTubes [Videos und Playlists einbetten > Datenschutzmodus aktivieren](https://support.google.com/youtube/answer/171780).
- Wann immer möglich, sollten Sie verhindern, dass Drittanbieter einen {{httpheader("Referer")}}-Header erhalten, wenn Sie Anfragen an sie richten. Das kann auf ziemlich granularer Ebene geschehen, beispielsweise indem Sie [rel="noreferrer"](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) auf externen Links verwenden. Oder Sie können dies globaler für die Seite oder die Site einstellen, zum Beispiel durch die Verwendung des {{httpheader("Referrer-Policy")}} Headers.

  > [!NOTE]
  > Siehe auch [Referer header: Privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API "starke Funktionen" zu steuern (zum Beispiel Benachrichtigungen, Geolokalisierungsdaten, den Zugriff auf Medienstreams von Webcams usw.). Dies kann nützlich für den Datenschutz sein, da es verhindert, dass Drittanbieterseiten unerwartete Dinge mit diesen Funktionen tun, und Benutzer nicht unnötig mit Erlaubnisabfragen belästigt werden, die sie möglicherweise nicht verstehen. Sie können die Nutzung "starker Funktionen" auch innerhalb von Drittanbieterseiten, die innerhalb von {{htmlelement("iframe")}}-Elementen eingebettet sind, steuern, indem Sie Berechtigungspolitiken innerhalb eines `allow`-Attributs auf dem `<iframe>` selbst angeben.

  > [!NOTE]
  > Siehe auch unseren [Leitfaden zur Permissions-Politik](/de/docs/Web/HTTP/Guides/Permissions_Policy) für weitere Informationen und Beispiele und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools, einschließlich eines Politikgenerators.

- Verwenden Sie das {{htmlelement("iframe")}}-Attribut `sandbox`, um die Nutzung bestimmter Funktionen innerhalb der im `<iframe>` eingebetteten Inhalte zu erlauben oder zu verbieten — dazu gehören Dinge wie Downloads, Formularübermittlungen, Modale und Scripting.

> [!NOTE]
> Siehe [Drittparteien](https://web.dev/learn/privacy/third-parties/) auf web.dev für zusätzliche nützliche Informationen zur Prüfung und mehr.

## Benutzerdaten schützen

Sie müssen sicherstellen, dass Benutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist eher ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es ist erwähnenswert - eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die unten gegebenen Tipps bieten einige Anleitungen zum Schutz der Benutzerdaten:

- Sicherheit ist schwierig richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die Datenerfassung beinhaltet, insbesondere wenn es sich um sensible Daten wie Anmeldeinformationen handelt, macht es Sinn, eine seriöse Lösung von einem seriösen Anbieter zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework über eingebaute Funktionen zum Schutz vor häufigen Schwachstellen verfügen. Sie könnten auch in Erwägung ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden - zum Beispiel eine Anbietern von Identitätslösungen oder einen sicheren Online-Umfrageanbieter.
- Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten implementieren möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Stellen Sie einen erfahrenen serverseitigen Entwickler und/oder einen Sicherheitsexperten ein, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Erwägen Sie die Nutzung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [FedCM API](/de/docs/Web/API/FedCM_API), um die clientseitige Nutzung der App zu optimieren.
- Bei der Sammlung von Benutzeranmeldedaten erzwingen Sie starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Benutzer, einen Passwortmanager zu verwenden, um komplexe Kennwörter zu generieren und zu speichern; so müssen sie sich keine Gedanken über das Merken machen oder ein Sicherheitsrisiko schaffen, indem sie sie aufschreiben.
- Schließen Sie keine sensiblen Daten in URLs ein — wenn ein Dritter die URL (zum Beispiel über den {{httpheader("Referer")}}-Header) abfängt, könnten sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie die Verwendung von Tools wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Funktionsnutzungen auf Ihrer Seite durchzusetzen, die es schwerer machen, Schwachstellen einzuführen. Seien Sie vorsichtig beim Blockieren der Nutzung einer Funktion, die ein Drittanbieter-Skript für den Betrieb benötigt, da dies die Funktionalität Ihrer Seite beeinträchtigen könnte. Dies ist etwas, das Sie bei der Prüfung Ihrer Drittanbieterressourcen untersuchen können (siehe [Drittanbieterressourcen sorgfältig verwalten](#drittanbieterressourcen_sorgfältig_verwalten)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
