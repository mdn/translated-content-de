---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Bankgeschäfte, Einkäufe, Unterhaltung und das Bezahlen von Steuern. Dabei müssen sie persönliche Informationen mit diesen Websites teilen. Benutzer vertrauen den Websites, mit denen sie ihre Daten teilen, bis zu einem gewissen Maß. Wenn diese Informationen in die falschen Hände geraten, könnten sie ausgenutzt werden, beispielsweise durch Profilbildung, zielgerichtete unerwünschte Anzeigen oder sogar Identitäts- oder Gelddiebstahl.

Moderne Browser bieten bereits eine Vielzahl von Funktionen, um die Privatsphäre der Benutzer im Web zu schützen, aber das allein reicht nicht aus. Um ein vertrauenswürdiges und datenschutzgerechtes Erlebnis zu schaffen, müssen Entwickler ihre Benutzer über gute Praktiken aufklären (und diese durchsetzen). Entwickler sollten auch Websites erstellen, die so wenig Daten wie möglich von Benutzern sammeln, diese Daten verantwortungsbewusst verwenden und sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browser-Funktionen, die automatisch den Datenschutz der Benutzer schützen.
- Schauen wir, was Entwickler tun können, um datenschutzgerechte Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Benutzern unerwartet von Dritten erhalten werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen anschauen, die im Web verfügbar sind, lassen Sie uns einige wichtige Begriffe definieren.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen — sie sind eng miteinander verbunden, und man kann wirklich keine datenschutzrechtlich einwandfreien Websites erstellen, ohne eine gute Sicherheit zu bieten. Daher werden wir beide definieren.

- **Datenschutz** bezieht sich auf das Recht der Benutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und diese nicht verantwortungslos zu nutzen. Beispielsweise sollten Sie Ihren Benutzern klar mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Die Benutzer müssen die Möglichkeit haben, Ihren Bedingungen zur Datennutzung zuzustimmen, Zugang zu allen ihren Daten zu haben, die Sie speichern, und diese zu löschen, wenn sie nicht mehr möchten, dass Sie sie haben. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts untergräbt das Vertrauen der Benutzer mehr, als wenn ihre Daten auf eine Weise verwendet und geteilt werden, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es inzwischen Gesetze, die die Datenschutzrechte von Verbrauchern schützen (zum Beispiel die EU-[DSGVO](https://gdpr.eu/)).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (interne) als auch Benutzer- und Partnerdaten (externe). Es nützt nichts, eine robuste Datenschutzrichtlinie zu haben, wenn Ihre Benutzer Ihnen vertrauen, aber die Sicherheit schwach ist und bösartige Akteure dennoch ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Benutzer beschreiben. Beispiele sind:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Passnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen, wenn sie auf eine Einzelperson zurückgeführt werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Benutzer nicht öffentlich teilen möchten und die privat gehalten werden müssen (d.h. Informationen, die nur von einer bestimmten Gruppe autorisierter Benutzer zugänglich sind). Einige private Daten sind gesetzlich privat (z. B. medizinische Daten), und einige sind eher aus persönlicher Präferenz privat.

### Personenbezogene Informationen

Anschließend an den obigen Abschnitt sind **personenbezogene Informationen** (PII) Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person aufzuspüren und/oder zu identifizieren. Wenn beispielsweise eine Website eine Liste von Benutzernamen und Postleitzahlen online preisgibt, könnte ein Angreifer mit ziemlicher Sicherheit diese Informationen verwenden, um ihre vollständigen Adressen herauszufinden. Selbst wenn kein vollständiges Leck auftritt, ist es immer noch möglich, Benutzer auf weniger offensichtliche Weise zu identifizieren, wie die von ihnen verwendeten Browser, Geräte, installierte Schrifttypen usw.

### Verfolgung

**Verfolgung** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Benutzers über viele verschiedene Websites hinweg. Dies kann auf verschiedene Arten geschehen, z. B.:

- Betrachtung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die über verschiedene Websites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den Benutzer zu erhalten.
- Betrachtung des {{httpheader("Referer")}} Headers, um zu sehen, von wo ein Benutzer gekommen ist.
- Einfügen von Parametern in die URLs von eingehenden Links (zum Beispiel in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder Marketing-E-Mails), die der verlinkten Site offenbaren können, woher der Link stammt, zu welcher Marketing-Kampagne er gehört, die E-Mail-Adresse oder einen anderen Identifikator des Benutzers, der darauf geklickt hat usw. Dieser Prozess wird als **Link Decorating** bezeichnet und führt zu Links, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Umleitungsverfolgung, bei der Tracker einen Benutzer kurzzeitig (und unmerklich) auf ihre Website umleiten, um den Tracking des Benutzers über Websites hinweg mit Hilfe von First-Party-Speicher fortzusetzen. Dies ermöglicht es Trackern, das Blockieren von Drittanbieter-Cookies zu umgehen. Wenn Sie beispielsweise eine Produktbewertung lesen und daraufhin das Produkt kaufen möchten, navigieren Sie möglicherweise unwissentlich zuerst zum Weiterleitungsverfolger und **dann** zum Einzelhändler. Das bedeutet, dass der Verfolger als Erstanbieter geladen wird und Trackingdaten mit den Identifikatoren verknüpfen kann, die sie in ihren Erstanbieter-Cookies gespeichert haben, bevor sie Sie zum Einzelhändler weiterleiten.

Tracking-Daten können dazu verwendet werden, ein Profil eines Benutzers, seiner Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und in unterschiedlichem Maße ärgerlich sein kann. Zum Beispiel:

- **Gezielte Werbung**: Jeder hat die beunruhigende Erfahrung gemacht, auf einem Gerät einige Artikel zu recherchieren, die man kaufen möchte, und dann plötzlich auf allen anderen Geräten mit Anzeigen für dieselben Produkte bombardiert zu werden.
- **Datenverkauf oder -weitergabe**: Einige Dritte sind dafür bekannt, Tracking-Daten zu sammeln und dann zu verkaufen oder mit anderen zu teilen, um sie für verschiedene Zwecke zu verwenden, wie z. B. gezielte Werbung. Dies ist offensichtlich höchst unethisch und je nachdem, wo es passiert, möglicherweise auch illegal.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Benutzer unfair benachteiligt wird. Stellen Sie sich zum Beispiel vor, eine Versicherungsgesellschaft erfährt über Datenpunkte eines potenziellen Kunden, die er nicht teilen wollte, und verwendet sie als Rechtfertigung, um die Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein Prozess, der sehr eng mit Tracking zusammenhängt, ist das **Fingerprinting**: Dabei geht es speziell darum, Benutzer zu identifizieren, indem eine Sammlung von Datenpunkten über sie aufgebaut wird, die sie von anderen Benutzern unterscheidet. Dies könnte alles von Inhalten aus Cookies über den verwendeten Browser bis hin zu installierten Schriftarten umfassen.

Moderne Browser ergreifen Maßnahmen, um gegen Fingerprinting-basierte Angriffe zu helfen, indem sie entweder den Zugriff auf Informationen verweigern oder, wo die Informationen zugänglich gemacht werden müssen, Variationen oder "Rauschen" einführen, das eine Anwendung zur Identifizierung verhindert.

Zum Beispiel kann, wenn eine Website die verstrichene Zeit des Browsers eines Benutzers abfragt, ein Vergleich dieser Zeit mit der vom Server berichteten Zeit nützlich sein als Faktor beim Fingerprinting. Aus diesem Grund führen Browser normalerweise eine kleine Variabilität in die Timer ein, um sie weniger nützlich für die Identifizierung des Systems des Benutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen von Browsern

Browseranbieter sind sich der Notwendigkeit bewusst, die Privatsphäre der Benutzer zu schützen, und der negativen Auswirkungen von Tracking, Fingerprinting usw. auf das Benutzererlebnis. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen mindern. In diesem Abschnitt betrachten wir verschiedene Kategorien des Datenschutzes, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem Daten während der Übertragung über das Netzwerk verschlüsselt werden, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll. TLS ist gut für den Datenschutz, da es Dritten erschwert, übertragene Daten abzufangen und sie bösartig zu verwenden, zum Beispiel zum Tracking.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu erzwingen; dies ist praktisch bereits der Fall, da man ohne dieses Protokoll nicht viel im Web tun kann.

Verwandte Themen sind:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Prüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die dabei helfen kann, fehlerhafte oder bösartige Zertifikate zu erkennen.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokolldowngrades und Cookie-Hijacking-Angriffen zu schützen, indem sie den Clients erlauben, nur HTTPS zur Kommunikation mit dem Server zu verwenden.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Obwohl HTTP/2 technisch gesehen nicht zwingend Verschlüsselung verwenden muss, unterstützen die meisten Browserentwickler es nur mit HTTPS; insofern kann es als Funktion zur Verbesserung der Sicherheit/des Datenschutzes angesehen werden.

### Opt-in für "leistungsstarke Funktionen"

So genannte "leistungsstarke" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Wesentlichen bedeutet "nur HTTPS". Nicht nur das, sondern diese Web-Funktionen sind hinter einem System von Benutzerberechtigungen verborgen. Benutzer müssen ausdrücklich zustimmen, Funktionen wie das Zulassen von Benachrichtigungen, den Zugriff auf Geolokationsdaten, das Verwenden des Browsers im Vollbildmodus, den Zugriff auf Medienströme von Webcams, die Verwendung von Webzahlungen usw. zu erlauben.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz ihrer Benutzer verbessern. Viele davon blockieren oder beschränken die Möglichkeit von Drittanbieter-Websites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die für die Top-Level-Domain gesetzt sind, Tracking-Skripte auszuführen usw.

- Der Standardwert des Attributs `SameSite` des {{httpheader("Set-Cookie")}} Headers wurde auf `Lax` aktualisiert, um besseren Schutz gegen Tracking und {{Glossary("CSRF", "CSRF")}} Angriffe zu bieten. Siehe [Steuern von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Browser haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren. Siehe [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für weitere Details.
- Browser implementieren Technologien, die nur in bestimmten, die Privatsphäre nicht beeinträchtigenden Umständen Drittanbieter-Cookies zulassen oder übliche Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise umsetzen. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- In diversen Browsern werden bekannte Tracking-Parameter aus URLs entfernt — dazu gehören Firefox, Safari und Brave. Auch Browser-Erweiterungen helfen dabei, zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Schutz vor Umleitungsverfolgung](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzaspekte für Client-Seite-Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um den Datenschutz für ihre Benutzer zu verbessern. Die untenstehenden Abschnitte behandeln die wichtigsten. Einige der Kategorien sind nicht rein technische Aufgaben an sich und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln viele verschiedene Daten von ihren Benutzern aus verschiedenen Gründen:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Vielzahl anderer personenbezogener Daten für alles, von der Personalisierung der Website bis hin zu Kundenumfragen zur Zufriedenheit.
- Browsing-Gewohnheiten auf ihren Websites und anderen Websites, um Erfolgsmetriken für Seiten und Funktionen zu messen.
- Und vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Gelegenheit, integer zu handeln, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen, und dadurch Ihre Marke und Ihre Erfolgschancen zu verbessern.

Die Ethik der Datensammlung kann in drei einfache Grundsätze unterteilt werden:

- Sammeln Sie nicht mehr Daten als nötig
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden
- Löschen Sie die Daten, sobald Sie mit ihnen fertig sind

> [!NOTE]
> Die unten bereitgestellten Tipps tragen zu einem besseren, datenschutzzentrierten Benutzererlebnis bei, aber viele von ihnen sind gesetzlich vorgeschrieben, um den Vorschriften zu entsprechen, zum Beispiel der [DSGVO](https://gdpr.eu/) in der EU. Sie sollten herausfinden, welche Vorschriften für Sie in Ihrer Region gelten und was Sie tun müssen, um ihnen nachzukommen.

### Sammeln Sie nicht mehr Daten als nötig

Es ist verlockend, von Ihren Benutzern viele Daten anzufordern, weil Sie glauben, dass sie in der Zukunft nützlich sein könnten. Aber jedes zusätzliche Datenbit, das Sie sammeln, erhöht das Risiko für die Privatsphäre der Benutzer und erhöht die Möglichkeit, dass sie den Vorgang abbrechen, den sie ausführen (sei es das Ausfüllen einer Umfrage oder das Anmelden für einen Dienst).

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das, was Sie benötigen, erhalten können, indem Sie Ihre Datenanforderung weniger detailliert gestalten. Statt beispielsweise einen Benutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn bitten, zwischen allgemeineren Kategorien zu wählen.

Der beste Schutz der Benutzerdaten besteht jedoch darin, die Menge der gesammelten Daten zu minimieren. In Bezug auf das vorherige Beispiel könnten Sie die gleichen Informationen aus dem Kaufverlauf der Benutzer ableiten. Ein weiteres Beispiel: Benutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, ein Konto anzulegen; wenn es nicht notwendig ist, damit der Dienst funktioniert, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln möchten, sollten Sie eine Datenschutzerklärung auf Ihrer Website veröffentlichen, die klar angibt:

- Daten, die Sie sammeln
- Wege, wie Sie die Daten verwenden werden
- Parteien, mit denen Sie die Daten teilen würden, falls überhaupt, und eine Erklärung, dass Sie vor dem Teilen die Zustimmung der Benutzer einholen werden
- Die Dauer, die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Wege, wie Benutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie dies wünschen

Wenn Benutzer Ihnen Daten zur Verfügung stellen, sollten sie die Möglichkeit erhalten, Ihre Datenschutzerklärung zu lesen und ihr zuzustimmen. Sie sollten in der Lage sein, zu entscheiden, ob sie damit einverstanden sind und ihren Nutzungsbedingungen zustimmen. Und wie oben angedeutet, sollten sie auch sehen können, welche Daten sie von ihnen gesammelt haben und diese löschen können, wenn sie möchten.

Nachdem Sie Ihre Datenschutzerklärung veröffentlicht haben, müssen Sie sicherstellen, dass Sie sich daran halten — das Tun, was Sie sagen, ist entscheidend für den Aufbau von Vertrauen bei den Benutzern. Sie sollten nur die Daten sammeln, die Sie angeben, und diese nur für den angegebenen Zweck verwenden. Wenn jemand in Ihrem Unternehmen mit einer cleveren neuen Möglichkeit zur Nutzung bestehender Daten kommt, ist dies dennoch nicht zulässig, wenn in Ihrer Richtlinie nicht angegeben ist, dass Sie diese für diesen Zweck verwenden werden. Wenn Benutzer der Nutzung ihrer Daten für einen bestimmten Zweck zugestimmt haben und sich dieser Zweck erweitert, müssen Sie möglicherweise eine neue Zustimmung in Erwägung ziehen.

### Löschen Sie die Daten, sobald Sie mit ihnen fertig sind

Zu Beginn erwähnten wir, den Benutzern eine Möglichkeit zu geben, zu sehen, welche Daten von ihnen gesammelt wurden, und diese zu löschen, wenn sie dies wünschen. Möglicherweise können Sie dies im Rahmen der gleichen Erfahrung tun, mit der sie ihr Konto löschen können (ihre Daten werden dabei mit gelöscht) oder als zwei separate Optionen. In jedem Fall sollten die Optionen leicht zu finden sein.

Dem Benutzer zu erlauben, zu entscheiden, wann erhebliche Teile seiner Daten gelöscht werden, ist sehr befreiend und baut Vertrauen auf, aber es können einige Daten gibt, deren Löschung Sie selbst verwalten möchten. Beispielsweise könnten einige Daten nur für ein paar Stunden oder Minuten verwendet werden und dann gelöscht werden, wie etwa Daten, die während der Verwaltung einer Benutzersitzung verwendet werden, während der Benutzer eingeloggt ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich zum Löschen von kurzlebigen Benutzerdaten — er weist den Browser an, Cache und/oder Cookies und/oder Speicherung (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu leeren. Beispielsweise könnten Sie Ihren Server veranlassen, ihn zusammen mit einer "Abgemeldet-Bestätigung"-Seite zu senden, damit die Benutzerdaten nach dem Abmelden sicher entfernt werden.

## Reduzieren Sie das Tracking

Zuvor haben wir das Tracking besprochen und einige der unethischen Zwecke, für die es verwendet wird. Wir sollten nicht extra aufschreiben müssen, wie solche Verwendungen das Benutzervertrauen untergraben können; wann immer möglich, sollten Sie potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Zwecke verwenden, wie z.B. die Übertragung von Anmeldestatus oder anderen Personalisierungsstatus über Websites hinweg.

Denken Sie auch daran, dass alle Browser beginnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie alternative Technologien einführen, um gängige Anwendungsfälle umzusetzen. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Anzahl der von Ihnen genutzten Tracking-Aktivitäten beschränken und/oder die gewünschte Informationsspeicherung auf andere Weise umsetzen. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Natürlich wäre es einfach, den Datenschutz zu verwalten, wenn Sie sich nur um selbst erstellte Ressourcen (Code, Cookies, Websites usw.) kümmern müssten. Die eigentliche Herausforderung besteht darin, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen verwenden wird. Dazu können Drittanbieter-Inhalte gehören, die in \<iframe\>s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung und bieten viel Leistung. Jede von Ihnen zugelassene Drittanbieter-Ressource hat jedoch potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie auf Ihrer Website eingebunden wird:

- JavaScript, das innerhalb von Drittanbieter-Inhalten läuft, die über ein \<iframe\> in Ihre Website eingebettet sind, ist durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten im Top-Level-Browsing-Kontext hätte.
- Ein Drittanbieter-Skript, das direkt über ein {{htmlelement("script")}}-Element in Ihrer Seite eingebunden wird, hätte jedoch Zugriff auf Ihre anderen Skripte und Daten, egal ob es auf Ihrer Website oder einer anderen Website gehostet wird. Es würde im Wesentlichen als Erstanbieter-Code fungieren. Ein in dieser Weise eingebundenes bösartiges Skript könnte beispielsweise heimlich die Daten Ihrer Benutzer stehlen, indem es sie an einen Drittanbieter-Server sendet.

Es ist wichtig, alle von Ihnen auf Ihrer Website verwendeten Drittanbieter-Ressourcen zu prüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und was ihre Datenschutzrichtlinien sind. Ihre sorgfältig gestaltete Datenschutzerklärung ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das dagegen verstößt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, sich ein Bild zu machen, welche Anfragen eine Website stellt, beispielsweise den [Request Map Generator](https://requestmap.webperf.tools/).

Nachdem Sie Ihre Drittanbieter-Ressourcen geprüft und verstanden haben, was sie tun, sollten Sie ihre Nachteile als Abwägung für den Wert betrachten, den sie bieten. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber viele Benutzerdaten sammelt, könnten Sie:

1. Diese Abwägung akzeptieren, Ihre Datenschutzerklärung aktualisieren, um Details dazu aufzunehmen und hoffen, dass sie das Vertrauen Ihrer Benutzer nicht zu sehr beeinträchtigt.
2. Nach einer alternativen, weniger datenhungrigen Drittanbieter-Lösung suchen.
3. Ein eigenes Tool entwickeln.

Die folgende Liste bietet einige Tipps, wie Sie die mit der Nutzung von Drittanbieter-Ressourcen verbundenen Datenschutzrisiken mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, überlegen Sie, ob es eine Möglichkeit gibt, den gleichen oder ähnlichen Effekt mit geringeren Auswirkungen auf die Privatsphäre zu erzielen. Es mag zum Beispiel Spaß machen, einen sozialen Medien-Postviewer auf Ihrer Website eingebettet zu haben, aber ist er wirklich notwendig? Wäre ein Link zu Ihrer Social-Media-Seite nicht ausreichend? Einige Drittanbieter-Dienste bieten auch Funktionen zur Verbesserung des Datenschutzes. Siehe zum Beispiel YouTubes [Einbetten von Videos & Playlists > Aktivieren des datenschutzfreundlichen Modus](https://support.google.com/youtube/answer/171780).
- Wo möglich, sollten Sie Drittanbieter daran hindern, einen {{httpheader("Referer")}}-Header zu erhalten, wenn Sie Anfragen an sie richten. Dies kann auf ziemlich granulare Weise getan werden, zum Beispiel durch das Einfügen von [rel="noreferrer"](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) in externe Links. Oder Sie könnten dies globaler für die Seite oder Website festlegen, zum Beispiel durch die Verwendung des {{httpheader("Referrer-Policy")}} Headers.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP Header, um den Zugriff auf APIs mit "leistungsstarken Funktionen" (wie Benachrichtigungen, Geolokalisierungsdaten, Medienströme von Webcams usw.) zu steuern. Dies kann nützlich für den Datenschutz sein, da es Drittanbieter-Websites daran hindert, unerwartete Dinge mit diesen Funktionen zu machen, und Benutzer nicht unnötig von Berechtigungsaufforderungen bombardiert werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" in Drittanbieter-Websites steuern, die in {{htmlelement("iframe")}}-Elementen eingebettet sind, indem Sie Berechtigungsrichtlinien in einem `allow`-Attribut auf dem \<iframe\> selbst angeben.

  > [!NOTE]
  > Siehe auch unseren [Leitfaden zur Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für weitere Informationen und Beispiele, und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools, einschließlich eines Richtliniengenerators.

- Verwenden Sie das {{htmlelement("iframe")}} `sandbox`-Attribut, um die Nutzung bestimmter Funktionen innerhalb der Inhalte einzuschränken, die in das \<iframe\> eingebettet sind — dies umfasst Dinge wie Downloads, Formularübermittlungen, Modale und Skripterstellung.

> [!NOTE]
> Siehe [Dritte] auf web.dev für zusätzliche nützliche Informationen zum Auditing und mehr.

## Benutzerdaten schützen

Es ist sicherzustellen, dass Benutzerdaten sicher übertragen und gespeichert werden, sobald sie gesammelt wurden. Dies ist eher ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es ist erwähnenswert — eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die unten stehenden Tipps geben einige Hinweise, wie Sie die Daten Ihrer Benutzer schützen können:

- Sicherheit ist schwer richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die Datensammlung beinhaltet — insbesondere, wenn es sich um sensible Daten wie Anmeldeinformationen handelt — macht es Sinn, eine seriöse Lösung von einem angesehenen Anbieter zu verwenden. Beispielsweise wird jedes seriöse serverseitige Framework über integrierte Funktionen verfügen, um gegen gängige Schwachstellen, zu schützen. Sie könnten auch überlegen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden — zum Beispiel eine Lösung zur Identitätsproviderdatenbereitstellung oder einen sicheren Online-Umfrageanbieter.
- Wenn Sie Ihre eigene Lösung zur Datensammlung aufbauen möchten, sollten Sie sicherstellen, dass Sie verstehen, was Sie tun. Heuern Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur an, um das System zu implementieren und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Multi-Faktor-Authentifizierung (MFA), um einen besseren Schutz zu bieten. Ziehen Sie in Betracht, eine dedizierte API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) zu verwenden, um den clientseitigen Teil der App zu optimieren.
- Erzwingen Sie beim Erfassen von Benutzer-Anmeldedaten starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Benutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; auf diese Weise müssen sie sich keine Sorgen darüber machen, sich diese zu merken oder ein Sicherheitsrisiko zu schaffen, indem sie sie aufschreiben.
- Schließen Sie keine sensiblen Daten in URLs ein — wenn ein Dritter die URL abfängt (z. B. über den {{httpheader("Referer")}} Header), könnten sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Ziehen Sie in Betracht, Tools wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zu verwenden, um ein Set von Nutzungsmerkmalen auf Ihrer Seite durchzusetzen, das es schwerer macht, Schwachstellen einzuführen. Seien Sie vorsichtig, wenn Sie dies tun — wenn Sie die Nutzung eines Merkmals blockieren, auf das ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, könnte dies die Funktionalität Ihrer Website beeinträchtigen. Dies ist etwas, das Sie bei der Prüfung Ihrer Drittanbieter-Ressourcen berücksichtigen können (siehe [Verwaltung von Drittanbieter-Ressourcen sorgfältig]).

## Siehe auch

- [Websicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
