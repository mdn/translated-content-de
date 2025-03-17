---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Menschen nutzen Websites für mehrere wichtige Aufgaben wie Bankgeschäfte, Einkäufe, Unterhaltung und das Bezahlen ihrer Steuern. Dabei sind sie verpflichtet, persönliche Informationen mit diesen Seiten zu teilen. Nutzer setzen ein gewisses Maß an Vertrauen in die Seiten, mit denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten würden, könnten sie ausgenutzt werden, beispielsweise durch Profilbildung, das Schalten unerwünschter Werbung oder sogar Identitäts- oder Gelddiebstahl.

Moderne Browser bieten bereits eine Fülle von Funktionen, um die Privatsphäre der Nutzer im Web zu schützen, aber das allein reicht nicht aus. Um ein vertrauenswürdiges und datenschutzfreundliches Erlebnis zu schaffen, müssen Entwickler ihre Nutzer in guten Praktiken schulen (und diese durchsetzen). Entwickler sollten auch Webseiten erstellen, die so wenig Daten wie möglich von Nutzern sammeln, diese verantwortungsvoll nutzen und sie sicher übertragen und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browserfunktionen, die automatisch den Datenschutz der Nutzer schützen.
- Schauen wir uns an, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten der Nutzer unerwartet von Dritten erfasst werden.

## Definition von Datenschutzbegriffen und Konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen anschauen, die im Web verwendet werden, definieren wir einige wichtige Begriffe.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen — sie sind eng miteinander verbunden, und Sie können wirklich keine datenschutzfreundlichen Websites erstellen, ohne gute Sicherheit. Daher werden wir beide definieren.

- **Datenschutz** bedeutet, den Nutzern das Recht zu geben, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und diese nicht verantwortungslos zu nutzen. Zum Beispiel sollten Sie Ihren Nutzern klar mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Die Nutzer müssen die Möglichkeit haben, Ihren Nutzungsbedingungen für Daten zuzustimmen, Zugriff auf alle ihre von Ihnen gespeicherten Daten zu haben und diese zu löschen, wenn sie nicht mehr wünschen, dass Sie sie besitzen. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts untergräbt das Vertrauen der Nutzer mehr, als ihre Daten auf eine Weise zu verwenden und zu teilen, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte auch gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es jetzt Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die EU-[DSGVO](https://gdpr.eu/)).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmens-(interne) Daten als auch Nutzer- und Partner-(externe) Daten. Es nützt nichts, eine robuste Datenschutzrichtlinie zu haben, die Ihre Nutzer Ihnen vertrauen lässt, wenn Ihre Sicherheit schwach ist und böswillige Parteien dennoch ihre Daten stehlen können.

### Personenbezogene und private Informationen

**Personenbezogene Informationen** sind alle Informationen, die einen Benutzer beschreiben. Beispiele beinhalten:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen, wenn sie mit einer Person in Verbindung gebracht werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichts­erkennungsdaten

**Private Informationen** sind alle Informationen, die Nutzer nicht öffentlich teilen möchten und die privat bleiben müssen (d.h. Informationen, die nur einer bestimmten Gruppe autorisierter Nutzer zugänglich sind). Einige private Daten sind gesetzlich geschützt (zum Beispiel medizinische Daten), und andere sind eher aus persönlichen Vorlieben privat.

### Persönlich identifizierbare Informationen

In Anlehnung an den obigen Abschnitt sind **persönlich identifizierbare Informationen** (PII) Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person aufzufinden und/oder zu identifizieren. Zum Beispiel könnte ein Bösewicht, wenn eine Seite eine Liste von Benutzernamen und Postleitzahlen online preisgibt, fast sicher diese Informationen nutzen, um ihre vollständigen Adressen zu ermitteln. Selbst wenn es nicht zu einem umfassenden Datenleck kommt, ist es dennoch möglich, Benutzer auf weniger offensichtliche Weise zu identifizieren, wie z. B. die Browser, die sie verwenden, die Geräte, die sie verwenden, spezifische Schriftarten, die sie installiert haben, und so weiter.

### Tracking

**Tracking** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Benutzers über viele verschiedene Websites hinweg. Dies kann auf verschiedene Weise geschehen, zum Beispiel:

- Betrachtung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die über verschiedene Seiten hinweg gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den Nutzer zu ermitteln.
- Betrachtung des {{httpheader("Referer")}}-Headers, um zu sehen, von wo ein Nutzer navigiert ist.
- Einschluss von Parametern in den URLs eingehender Links (z. B. in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder Marketing-E-Mails), die der verlinkten Seite verraten können, woher der Link stammt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder einen anderen Identifier des Benutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, das beinhaltet, dass Tracker den Nutzer kurzzeitig (und unmerklich) auf ihre Website umleiten, um Speicher in der Erstanbieter-Domain zu verwenden, um diesen Nutzer über Websites hinweg zu verfolgen. Dies ermöglicht es Trackern, das Blockieren von Drittanbieter-Cookies zu umgehen. Zum Beispiel, wenn Sie eine Produktbewertung gelesen haben und darauf klicken möchten, um es zu kaufen, navigieren Sie möglicherweise unwissentlich zuerst zum Redirect-Tracker und _dann_ zum Einzelhändler. Dies bedeutet, dass der Tracker als Erstanbieter geladen wird und Tracking-Daten mit den Identifikatoren, die sie in ihren Erstanbieter-Cookies gespeichert haben, in Verbindung bringen kann, bevor er Sie zum Einzelhändler weiterleitet.

Tracking-Daten können verwendet werden, um ein Profil eines Nutzers zu erstellen und seine Interessen und Vorlieben zu bestimmen, was normalerweise schlecht ist und in verschiedenen Graden störend sein kann. Zum Beispiel:

- **Gezielte Werbung**: Jeder hat schon die unheimliche Erfahrung gemacht, nach einigen Artikeln auf einem Gerät zu suchen und dann plötzlich von Anzeigen für dieselben Produkte auf all ihren anderen Geräten überschwemmt zu werden.
- **Verkauf oder Weitergabe von Daten**: Einige Drittparteien sind bekannt dafür, Tracking-Daten zu sammeln und sie dann an andere weiterzuverkaufen oder zu teilen, um sie für verschiedene Zwecke zu nutzen, wie gezielte Werbung. Dies ist offensichtlich hochgradig unethisch und kann auch illegal sein, je nachdem, wo in der Welt es passiert.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Nutzer unfair benachteiligt wird. Stellen Sie sich zum Beispiel vor, eine Versicherungsgesellschaft findet heraus, dass ein potenzieller Kunde bestimmte Datenpunkte hat, die er nicht zum Teilen zugestimmt hat, und verwendet sie als Begründung, um die Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein Prozess, der dem Tracking sehr ähnlich ist, ist **Fingerprinting**: Dies bezieht sich speziell darauf, Nutzer zu _identifizieren_, indem eine Sammlung von Datenpunkten über sie erstellt wird, die sie von anderen Nutzern unterscheiden. Dies könnte alles sein, von den Inhalten von Cookies bis hin zu dem, welchen Browser sie verwenden und welche Schriftarten sie lokal installiert haben.

Moderne Browser ergreifen Maßnahmen, um Fingerprinting-basierte Angriffe zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo die Informationen verfügbar gemacht werden müssen, Variationen oder "Rauschen" einführen, das verhindert, dass sie zu Identifikationszwecken verwendet werden können.

Zum Beispiel, wenn eine Website den Browser eines Nutzers nach der verstrichenen Zeit abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit als Faktor für Fingerprinting nützlich sein. Daher führen Browser typischerweise eine kleine Menge Variabilität in Zeitmesser ein, um sie weniger nützlich für die Identifikation des Systems des Nutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für weitere nützliche Informationen.

## Von Browsern bereitgestellte Datenschutzfunktionen

Browseranbieter sind sich der Notwendigkeit bewusst, die Privatsphäre der Nutzer zu schützen und der negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Nutzererfahrung. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen mildern. In diesem Abschnitt betrachten wir verschiedene Kategorien von Datenschutzmaßnahmen, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem es Daten während des Transports über das Netzwerk verschlüsselt. Es ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, da es verhindert, dass Dritte übertragene Daten abfangen und bösartig verwenden können, zum Beispiel zum Tracking.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; dies ist praktisch schon der Fall, da Sie im Web nicht viel ohne dieses Protokoll tun können.

Verwandte Themen sind wie folgt:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Prüfung von Zertifikaten, die eine Datenbank öffentlicher Protokolle erstellen, die helfen kann, falsche oder bösartige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokoll-Abstufungen und Cookie-Entführungen zu schützen, indem Websites den Clients mitteilen, dass sie nur HTTPS zur Kommunikation mit dem Server verwenden können.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Obwohl HTTP/2 technisch keine **Verschlüsselung** verwenden muss, unterstützen die meisten Browserentwickler es nur, wenn HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung der Sicherheit/des Datenschutzes angesehen werden.

### Opt-in für "starke Funktionen"

Die sogenannten "starken" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Grunde HTTPS-only bedeutet. Nicht nur das, diese Webfunktionen sind hinter einem System von Benutzerberechtigungen gesichert. Benutzer müssen ausdrücklich in Funktionen wie das Zulassen von Benachrichtigungen, das Zugreifen auf Geolocation-Daten, das Wechseln in den Vollbildmodus, den Zugriff auf Mediastreams von Webcams, die Verwendung von Webzahlungen usw. einwilligen.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz ihrer Benutzer verbessern. Viele dieser Funktionen blockieren oder beschränken die Möglichkeit eingebetteter Drittanbieterseiten in {{htmlelement("iframe")}}s, auf Cookies zuzugreifen, die auf der Top-Level-Domain gesetzt wurden, Tracking-Skripte auszuführen usw.

- Der Standardwert des Attributs ['SameSite'](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des {{httpheader("Set-Cookie")}} Headers wurde auf `Lax` aktualisiert, um besseren Schutz vor Tracking und {{Glossary("CSRF", "CSRF")}}-Angriffen zu bieten. Siehe [Controlling third-party cookies with `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Alle Browser beginnen, Drittanbieter-Cookies standardmäßig zu blockieren. Siehe [How do browsers handle third-party cookies?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für weitere Einzelheiten.
- Browser implementieren Technologien, die Drittanbieter-Cookies nur in bestimmten Situationen zulassen, die den Datenschutz nicht beeinträchtigen, oder gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise umzusetzen. Siehe [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Replacing third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Einige Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Browsererweiterungen helfen auch dabei, zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [redirect tracking protection](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für clientseitige Entwickler

Es gibt mehrere Schritte, die Webentwickler unternehmen können und sollten, um den Datenschutz ihrer Benutzer zu verbessern. Die unten stehenden Abschnitte erläutern die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben und beinhalten die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln eine Vielzahl unterschiedlicher Daten von ihren Nutzern zu einer Vielzahl unterschiedlicher Zwecke:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografischer Standort, Lieblingsbeschäftigungen und zahlreiche andere PII für alles von der Anpassung der Website an den Benutzer bis hin zu Umfragen zur Kundenzufriedenheit.
- Surfgewohnheiten auf ihren und anderen Websites, um den Erfolg von Seiten und Funktionen zu messen.
- Und vieles mehr.

Beim Sammeln von Daten von Ihren Kunden haben Sie die Möglichkeit, integer zu handeln, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen, was im Gegenzug Ihre Marke verbessert und Ihre Erfolgschancen erhöht.

Die Ethik der Datensammlung lässt sich in drei einfache Prinzipien zerlegen:

- Sammeln Sie nicht mehr Daten, als Sie brauchen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die unten gegebenen Tipps tragen zu einer besseren, datenschutzbewussteren Nutzererfahrung bei, aber viele davon sind gesetzlich vorgeschrieben, um den Vorschriften zu entsprechen, beispielsweise der [DSGVO](https://gdpr.eu/) in der EU. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften in Ihrem lokalen Gebiet für Sie gelten und was Sie tun müssen, um ihnen gerecht zu werden.

### Sammeln Sie nicht mehr Daten, als Sie brauchen

Es ist verlockend, viele Daten von Ihren Nutzern zu erfragen, weil Sie denken, dass sie in Zukunft nützlich sein könnten. Allerdings erhöht jedes zusätzliche Bit an Daten, das Sie sammeln, das Risiko für die Privatsphäre Ihrer Nutzer und erhöht die Wahrscheinlichkeit, dass sie den Vorgang, den sie gerade ausführen (sei es das Ausfüllen einer Umfrage oder das Anmelden bei einem Dienst), abbrechen.

Es ist gut, Daten zu anonymisieren. Überlegen Sie auch, ob Sie das, was Sie brauchen, durch weniger detaillierte Datenanforderungen erhalten können. Statt beispielsweise einen Nutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn auffordern, zwischen allgemeineren Kategorien zu wählen.

Der beste Weg, die Privatsphäre der Nutzer zu schützen, besteht jedoch darin, die Daten, die Sie sammeln, auf ein Minimum zu beschränken. Im vorherigen Beispiel könnten Sie dieselben Daten durch die Analyse von Kaufhistorien der Nutzer ableiten. Ein weiteres Beispiel: Nutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, sich für ein Konto anzumelden; wenn es nicht notwendig ist, damit der Dienst funktioniert, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie auf Ihrer Website eine Datenschutzrichtlinie veröffentlichen, die klar darlegt:

- Die Daten, die Sie sammeln
- Wie Sie die Daten verwenden werden
- Parteien, mit denen Sie die Daten teilen, falls überhaupt, und eine Erklärung, dass Sie um Zustimmung der Nutzer bitten werden, bevor Sie die Daten teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Wie Nutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie möchten

Wenn Sie Ihnen Daten zur Verfügung stellen, sollten Ihre Nutzer die Möglichkeit haben, Ihre Datenschutzerklärung zu lesen und ihr zuzustimmen. Sie sollten in der Lage sein zu kontrollieren, ob sie damit einverstanden sind und Ihren Bedingungen zustimmen. Und wie oben erwähnt, sollten sie auch ihre von Ihnen gesammelten Daten einsehen und löschen können, wenn sie das wollen.

Wenn Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie dieser nachkommen — das Einhalten dessen, was Sie sagen, ist sehr wichtig, um das Vertrauen der Nutzer zu gewinnen. Sie sollten nur die Daten sammeln, die Sie angeben, und sie nur für die Zwecke verwenden, die Sie angegeben haben. Wenn jemand in Ihrem Unternehmen mit einer cleveren neuen Möglichkeit kommt, vorhandene Daten zu nutzen, ist dies immer noch nicht in Ordnung unter den Bedingungen Ihrer Richtlinie, wenn nicht festgelegt ist, dass Sie sie für diesen Zweck verwenden. Wenn die Nutzer der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und sich dieser Zweck erweitert, müssen Sie möglicherweise in Erwägung ziehen, neue Zustimmung einzuholen.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Früher erwähnten wir, dass Sie den Nutzern eine Möglichkeit geben sollten, zu sehen, welche Daten von ihnen Sie gesammelt haben und diese löschen, wenn sie möchten. Sie könnten dies möglicherweise als Teil desselben Prozesses anbieten, mit dem sie auch ihr Konto löschen können (ihre Daten verschwinden mit diesem), oder sie zu zwei separaten Optionen machen. In jedem Fall sollten die Optionen leicht zu finden sein.

Den Nutzern die Wahl zu lassen, wann signifikante Teile ihrer Daten gelöscht werden, ist sehr ermächtigend und baut Vertrauen auf, aber es kann einige Daten geben, deren Löschung Sie selbst verwalten möchten. Zum Beispiel könnten einige Daten nur für einige Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Verwaltung der Sitzung eines Nutzers verwendet werden, wenn er angemeldet ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich zum Löschen von kurzlebigen Benutzerdaten — er weist den Browser an, seinen Cache und/oder seine Cookies und/oder den Speicher (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu leeren. Zum Beispiel könnten Sie Ihren Server dazu bringen, ihn zusammen mit einer Seite mit der Bestätigung "Abgemeldet" zu senden, so dass, sobald der Nutzer abgemeldet ist, seine Daten sicher entfernt werden.

## Reduzieren Sie Tracking

Früher sprachen wir über Tracking und einige der unethischen Zwecke, für die es verwendet wird. Wir müssen nicht ausbuchstabieren, wie solche Verwendungen das Vertrauen der Nutzer erodieren können; wann immer möglich sollten Sie potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Verwendungen nutzen, wie die Übertragung des Anmeldestatus oder anderer Personalisierungsinformationen über Websites hinweg.

Erinnern Sie sich auch daran, dass alle Browser beginnen, Drittanbieter-Cookies standardmäßig zu blockieren, während alternative Technologien implementiert werden, um übliche Anwendungsfälle zu realisieren. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Menge an Tracking-Aktivitäten, von denen Sie abhängen, begrenzen und/oder die gewünschte Informationspersistenz auf andere Weise umsetzen. Siehe [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Verwalten Sie Drittanbieterressourcen sorgfältig

Natürlich wäre es einfach, die Privatsphäre zu verwalten, wenn Sie sich nur um die von Ihnen erstellten Ressourcen kümmern müssten (Code, Cookies, Websites usw.). Die echte Herausforderung besteht darin, dass Ihre Seite wahrscheinlich Drittanbieter-Ressourcen verwenden wird. Dies kann Drittanbieter-Inhalte umfassen, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung und bieten viel Leistung. Allerdings hat jede Drittanbieter-Ressource, die Sie auf Ihrer Seite zulassen, potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie auf Ihrer Seite eingebunden ist:

- JavaScript, das in Drittanbieter-Inhalten ausgeführt wird, die über ein `<iframe>` in Ihre Seite eingebettet sind, ist durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten in dem übergeordneten Browsing-Kontext hat.
- Ein Drittanbieter-Skript, das direkt auf Ihrer Seite über ein {{htmlelement("script")}} Element eingebunden wird, hätte jedoch Zugriff auf Ihre anderen Skripte und Daten, unabhängig davon, ob es auf Ihrer Seite oder einer anderen gehostet wird. Es wäre im Wesentlichen Erstanbieter-Code. Ein auf diese Weise eingebundenes bösartiges Skript könnte heimlich die Daten Ihrer Nutzer stehlen, indem es sie zum Beispiel an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Seite verwenden, zu überprüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und welche Datenschutzrichtlinien sie verfolgen. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das gegen sie verstößt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu erstellen, welche Anfragen eine Seite stellt, zum Beispiel den [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieter-Ressourcen geprüft und verstanden haben, was sie tun, sollten Sie deren Nachteile im Vergleich zu den Vorteilen, die sie bieten, abwägen. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber ziemlich viele Nutzerdaten sammelt, könnten Sie:

1. Dies akzeptieren, Ihre Datenschutzrichtlinie aktualisieren, um Details dazu aufzunehmen, und hoffen, dass es das Vertrauen Ihrer Nutzer nicht allzu sehr beeinträchtigt.
2. Nach einer alternativen, weniger datenhungrigen Drittanbieterlösung suchen.
3. Ihr eigenes Tool erstellen.

Die folgende Liste gibt einige Tipps, wie Sie die Datenschutzrisiken, die mit der Verwendung von Drittanbieter-Ressourcen verbunden sind, mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbinden, überlegen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Auswirkungen auf die Privatsphäre zu erzielen. Zum Beispiel könnte es Spaß machen, einen Social-Media-Post-Viewer in Ihre Seite eingebunden zu haben, aber ist das wirklich notwendig? Würde nicht ein Link zu Ihrer Social-Media-Seite ausreichen? Auch bieten einige Drittanbieter-Dienste datenschutzerhöhende Optionen. Siehe zum Beispiel die [Videos & Playlists einbetten > Datenschutzmodus aktivieren](https://support.google.com/youtube/answer/171780) von YouTube.
- Wo möglich, sollten Sie verhindern, dass Drittanbieter beim Aufrufen ihrer Seite den {{httpheader("Referer")}} Header erhalten. Dies kann auf ziemlich granulare Weise durchgeführt werden, zum Beispiel indem Sie [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) auf externen Links verwenden. Oder Sie setzen dies global für die Seite oder Website, indem Sie den {{httpheader("Referrer-Policy")}} Header verwenden.

  > [!NOTE]
  > Siehe auch [Referer header: privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API-"starke Funktionen" (wie Benachrichtigungen, Geolocation-Daten, Zugriff auf Mediastreams von Webcams usw.) zu kontrollieren. Dies kann nützlich für den Datenschutz sein, da es Drittanbieter-Seiten daran hindert, unerwartete Dinge mit diesen Funktionen zu tun, und die Nutzer nicht unnötigerweise mit Berechtigungsaufforderungen bombardiert werden wollen, die sie möglicherweise nicht verstehen. Sie können die Nutzung von "starken Funktionen" innerhalb von Drittanbieter-Seiten, die in {{htmlelement("iframe")}} Elementen eingebettet sind, auch kontrollieren, indem Sie Berechtigungsrichtlinien in einem `allow` Attribut auf dem `<iframe>` selbst angeben.

  > [!NOTE]
  > Siehe auch unseren [Leitfaden zur Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für weitere Informationen und Beispiele, und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools einschließlich eines Policy-Generators.

- Verwenden Sie das {{htmlelement("iframe")}} `sandbox` Attribut, um die Nutzung bestimmter Funktionen innerhalb der Inhalte, die im `<iframe>` eingebettet sind, zu erlauben oder zu verbieten — dazu gehören Dinge wie Downloads, Formularübermittlungen, Modale und Skripting.

> [!NOTE]
> Siehe [Third parties](https://web.dev/learn/privacy/third-parties/) auf web.dev für zusätzliche nützliche Informationen zur Prüfung und mehr.

## Schutz von Benutzerdaten

Sie müssen sicherstellen, dass Benutzerdaten sicher übertragen und gespeichert werden, wenn Sie sie gesammelt haben. Dies ist mehr ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es ist es wert, hier erwähnt zu werden — eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Richtlinien zum Schutz der Daten Ihrer Benutzer:

- Sicherheit ist schwer richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die das Sammeln von Daten umfasst — insbesondere, wenn es sich um sensible Daten wie Anmeldeinformationen handelt — macht es Sinn, eine renommierte Lösung von einem angesehenen Anbieter zu verwenden. Jedes respektable serverseitige Framework wird eingebaute Funktionen haben, um gängigen Schwachstellen vorzubeugen. Sie könnten auch in Betracht ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden — zum Beispiel eine Lösungsanwendung für Identitätsanbieter oder eine sichere Online-Umfrage-Lösung.
- Wenn Sie Ihre eigene Lösung zum Sammeln von Benutzerdaten bereitstellen möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie eine Mehrfaktor-Authentifizierung (MFA), um besseren Schutz zu bieten. Erwägen Sie, eine dedizierte API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) zu verwenden, um die clientseitige Seite der App zu optimieren.
- Wenn Sie Benutzeranmeldeinformationen sammeln, erzwingen Sie starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht einfach erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; auf diese Weise müssen sie sich keine Sorgen machen, sich diese zu merken, oder ein Sicherheitsrisiko verursachen, indem sie sie notieren.
- Schließen Sie keine sensiblen Daten in URLs ein — wenn ein Dritter die URL abfangen würde (zum Beispiel über den {{httpheader("Referer")}} Header), könnten sie diese Informationen stehlen. Verwenden Sie `POST` Anfragen anstatt `GET` Anfragen, um dies zu vermeiden.
- Erwägen Sie den Einsatz von Tools wie der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um festzulegen, welche Features auf Ihrer Seite verwendet werden können, um es schwieriger zu machen, Schwachstellen einzuführen. Seien Sie vorsichtig dabei — wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, könnten Sie die Funktionalität Ihrer Seite beeinträchtigen. Dies ist etwas, das Sie bei der Überprüfung Ihrer Drittanbieter-Ressourcen berücksichtigen können (siehe [Verwalten Sie Drittanbieterressourcen sorgfältig](#verwalten_sie_drittanbieterressourcen_sorgfältig)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Lernen Sie mehr über Datenschutz](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
