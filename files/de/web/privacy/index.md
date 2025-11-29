---
title: Privatsphäre im Web
slug: Web/Privacy
l10n:
  sourceCommit: 4bfe0fea3d3f9f911f934cd511442e73b87db080
---

Menschen nutzen Websites für eine Reihe wichtiger Aufgaben wie Banking, Shopping, Unterhaltung und Steuerzahlungen. Dabei sind sie gezwungen, persönliche Informationen mit diesen Seiten zu teilen. Benutzer setzen ein gewisses Maß an Vertrauen in die Seiten, auf denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten, könnten sie benutzt werden, um Benutzer auszubeuten, zum Beispiel durch Profilerstellung, das gezielte Senden unerwünschter Werbung oder sogar Identitäts- oder Gelddiebstahl.

Moderne Browser bieten bereits eine Vielzahl von Funktionen zum Schutz der Privatsphäre der Nutzer im Web, aber das reicht nicht aus. Um eine vertrauenswürdige und die Privatsphäre respektierende Erfahrung zu schaffen, müssen Entwickler ihre Seitenbenutzer über gute Praktiken aufklären (und diese durchsetzen). Entwickler sollten auch Seiten erstellen, die so wenig Daten wie möglich von Benutzern erheben, die Daten verantwortungsvoll verwenden und sicher transportieren sowie speichern.

In diesem Artikel:

- Definieren wir Privatsphäre und wichtige verwandte Begriffe.
- Untersuchen wir die Browserfunktionen, die die Privatsphäre der Nutzer automatisch schützen.
- Schauen wir uns an, was Entwickler tun können, um privatsphärenfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Benutzern unerwartet durch Dritte erlangt werden.

## Definition von Privatsphäre-Begriffen und Konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web zur Verfügung stehen, lassen Sie uns einige wichtige Begriffe definieren.

### Privatsphäre und ihre Beziehung zur Sicherheit

Es ist schwierig über Privatsphäre zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verbunden, und man kann keine privatsphärenfreundlichen Websites erstellen, ohne gute Sicherheit zu gewährleisten. Daher definieren wir beide.

- **Privatsphäre** bezieht sich auf den Akt, den Benutzern das Recht zu geben, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und diese nicht verantwortungslos zu verwenden. Beispielsweise sollten Sie Ihren Benutzern klar kommunizieren, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Benutzern muss die Möglichkeit gegeben werden, Ihren Bedingungen zur Datennutzung zuzustimmen, Zugang zu all ihren bei Ihnen gespeicherten Daten zu erhalten und diese zu löschen, wenn sie nicht länger möchten, dass Sie sie besitzen. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts zerstört das Vertrauen von Benutzern so sehr, wie die Verwendung und Weitergabe ihrer Daten auf eine Art, der sie nie zugestimmt haben. Und das ist nicht nur unethisch falsch, es könnte auch gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es mittlerweile Gesetzgebung, die die Privatsphärerechte der Verbraucher schützt (zum Beispiel das [GDPR](https://gdpr.eu/) der EU).

- **Sicherheit** ist der Akt, private Daten und Systeme gegen unbefugten Zugriff zu schützen. Das beinhaltet sowohl Unternehmensdaten (interne Daten) als auch Benutzer- und Partnerdaten (externe Daten). Es bringt nichts, eine robuste Datenschutzrichtlinie zu haben, die Ihre Benutzer Ihnen vertrauen lässt, wenn Ihre Sicherheit schwach ist und bösartige Parteien ihre Daten trotzdem stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind jegliche Informationen, die einen Benutzer beschreiben. Beispiele umfassen:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Physische Attribute wie Körpergröße, Geschlechterdarstellung, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankheitsgeschichte, Allergien oder bestehende Leiden
- Benutzernamen, wenn sie mit einer Person in Verbindung gebracht werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind jegliche Informationen, die Benutzer nicht öffentlich teilen möchten und privat gehalten werden müssen (d.h. Informationen, die nur einer bestimmten Gruppe von autorisierten Benutzern zugänglich sind). Einige private Daten sind gesetzlich geschützt (zum Beispiel medizinische Daten), andere sind eher aus persönlichen Vorlieben privat.

### Personenbezogene Informationen

Anknüpfend an den obigen Abschnitt sind **personenbezogene Informationen** (PII) solche Informationen, die genutzt werden können, um ganz oder teilweise eine spezifische Person aufzuspüren und/oder zu identifizieren. Wenn beispielsweise eine Seite eine Liste mit Namen und Postleitzahlen von Benutzern online leakt, könnte ein unbefugter Akteur sicherlich diese Informationen nutzen, um ihre vollständigen Adressen zu finden. Auch wenn es nicht zu einem groß angelegten Leak kommt, ist es dennoch möglich, Benutzer auf weniger offensichtliche Weise zu identifizieren, wie durch die Browser, die sie benutzen, die Geräte, die sie verwenden, spezifische Schriften, die sie installiert haben, usw.

### Tracking

**Tracking** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Benutzers über viele verschiedene Websites hinweg. Dies kann auf verschiedene Weise geschehen, zum Beispiel:

- Betrachtung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die über verschiedene Seiten gesetzt werden, auf denen Drittanbieterinhalte eingebettet sind, um verschiedene Informationspunkte über den Benutzer herauszufinden.
- Betrachtung des {{httpheader("Referer")}} Headers, um zu sehen, von wo ein Benutzer navigiert ist.
- Einschluss von Parametern in den URLs von eingehenden Links (zum Beispiel in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder in Marketing-E-Mails), die der verlinkten Seite verraten können, woher der Link stammt, Teil welcher Marketingkampagne er ist, die E-Mail-Adresse oder ein anderer Identifikator des Nutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet, und resultiert in Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, bei dem Tracker einen Benutzer momentweise (und unmerklich) auf ihre Website umleiten, um Erstanbieterspeicher zu verwenden, um diesen Benutzer über Websites hinweg zu verfolgen. Dies ermöglicht es Trackern, Drittanbieter-Cookies zu umgehen, die blockiert werden. Wenn Sie beispielsweise eine Produktbewertung gelesen haben und darauf klicken, um es zu kaufen, könnten Sie unwissentlich zuerst zum Weiterleitungs-Tracker navigieren und _dann_ zum Händler. Das bedeutet, dass der Tracker als Erstanbieter geladen wird und Tracking-Daten mit den Identifikatoren verknüpfen kann, die sie in ihren Erstanbieter-Cookies gespeichert haben, bevor Sie zum Händler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Benutzers und seiner Interessen und Präferenzen zu erstellen, was in der Regel schlecht und in verschiedenen Graden ärgerlich sein kann. Zum Beispiel:

- **Gezielte Werbung**: Jeder hat die unheimliche Erfahrung gemacht, einige Artikel, die er kaufen wollte, auf einem Gerät zu recherchieren und dann plötzlich mit Anzeigen für dieselben Produkte auf allen anderen Geräten bombardiert zu werden.
- **Verkauf oder Weitergabe von Daten**: Einige Drittparteien sind bekannt dafür, Tracking-Daten zusammenzustellen und sie dann zu verkaufen oder mit anderen zu teilen, um sie für verschiedene Zwecke zu verwenden, wie zielgerichtete Werbung. Dies ist offensichtlich hochgradig unethisch und könnte auch illegal sein, je nachdem, wo auf der Welt es geschieht.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Benutzer unfair benachteiligt wird. Stellen Sie sich beispielsweise vor, eine Versicherungsgesellschaft findet Datenpunkte über einen potenziellen Kunden heraus, die dieser nicht zu teilen zugestimmt hat, und verwendet diese als Rechtfertigung, um die Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein Prozess, der dem Tracking sehr nahe steht, ist **Fingerprinting**: Dabei geht es speziell darum, Benutzer zu _identifizieren_, indem eine Reihe von Datenpunkten über sie gesammelt werden, die sie von anderen Benutzern unterscheiden. Dies könnte alles sein, von Cookie-Inhalten bis hin zu dem Browser, den sie benutzen, und welche Schriften sie lokal installiert haben.

Moderne Browser ergreifen Maßnahmen, um Angriffe durch Fingerprinting zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo die Informationen verfügbar sein müssen, Variationen oder "Rauschen" einführen, die verhindern, dass sie für Identifizierungszwecke genutzt werden können.

Beispielsweise könnte eine Website, die den Browser eines Benutzers nach der Zeitspanne abfragt, nützlich sein als Faktor beim Fingerprinting, da ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit nützlich sein könnte. Daher führen Browser in der Regel eine kleine Menge an Variabilität in Timer ein, um sie weniger nützlich für die Identifizierung des Systems des Benutzers zu machen.

> [!NOTE]
> Lesen Sie [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für weitere nützliche Informationen.

## Datenschutz-Funktionen, die von Browsern bereitgestellt werden

Browser-Anbieter sind sich der Notwendigkeit bewusst, die Privatsphäre der Benutzer zu schützen und die negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Benutzererfahrung zu minimieren. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Privatsphärenschutz verbessern und/oder Bedrohungen mildern. In diesem Abschnitt betrachten wir verschiedene Kategorien des Privatsphärenschutzes, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem es Daten während des Transports über das Netzwerk verschlüsselt und die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}} Protokoll ist. TLS ist gut für die Privatsphäre, weil es Dritte daran hindert, übertragene Daten abzufangen und böswillig zu verwenden, zum Beispiel zum Tracking.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig zu verlangen; dies ist praktisch bereits der Fall, weil Sie im Web ohne dieses Protokoll nicht viel tun können.

Verwandte Themen sind unter anderem:

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und zum Überprüfen von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die verwendet werden kann, um falsche oder bösartige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokolldowngrades und Cookie-Hijacking-Angriffen zu schützen, indem sie den Sites erlauben, den Clients mitzuteilen, dass sie nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Während HTTP/2 technisch nicht <em>verschlüsselt</em> werden muss, unterstützen die meisten Browser-Entwickler es nur bei Verwendung von HTTPS; in dieser Hinsicht kann es daher als eine Funktion zur Verbesserung der Sicherheit/Privatsphäre angesehen werden.

### Opt-in für "leistungsstarke Funktionen"

So genannte "leistungsstarke" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar, was im Grunde bedeutet: nur über HTTPS. Darüber hinaus sind diese Webfunktionen hinter einem System von Benutzerberechtigungen eingeschränkt. Benutzer müssen sich explizit für Funktionen wie das Erlauben von Benachrichtigungen, den Zugriff auf Geolokationsdaten, das Setzen des Browsers in den Vollbildmodus, den Zugriff auf Medien-Streams von Webcams, die Nutzung von Webzahlungen usw. entscheiden.

### Anti-Tracking-Technologie

Browser haben verschiedene Anti-Tracking-Funktionen implementiert, die automatisch den Privatschutz ihrer Benutzer verbessern. Viele dieser blockieren oder beschränken die Fähigkeit von Drittanbieter-Sites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der übergeordneten Domain gesetzt sind, Tracking-Skripte auszuführen usw.

- Der {{httpheader("Set-Cookie")}} Header [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attributsstandardwert wurde auf `Lax` aktualisiert, um besseren Schutz gegen Tracking und {{Glossary("CSRF", "CSRF")}} Angriffe zu bieten. Lesen Sie [Drittanbieter-Cookies mit `SameSite` kontrollieren](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Browser haben angefangen, Drittanbieter-Cookies standardmäßig zu blockieren. Lesen Sie [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für weitere Details.
- Browser implementieren Technologien, die Drittanbieter-Cookies nur unter bestimmten Umständen erlauben, die die Privatsphäre nicht schädigen, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu implementieren. Lesen Sie [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dies umfasst Firefox, Safari und Brave. Browser-Erweiterungen helfen hierbei ebenfalls, wie beispielsweise [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für clientseitige Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollen, um die Privatsphäre ihrer Benutzer zu verbessern. Die nachstehenden Abschnitte diskutieren die wichtigsten. Einige der Kategorien sind keine rein technischen Aufgaben als solche und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln viele verschiedene Daten von ihren Nutzern aus verschiedenen Gründen:

- Benutzernamen, Passwörter, E-Mails usw. zu Authentifizierungszwecken.
- E-Mails, Postadressen und Telefonnummern zur Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Vielzahl anderer PII für alles von der Personalisierung der Seite bis hin zu Kundenbefragungen.
- Surfgewohnheiten auf ihren Seiten und anderen Seiten, um Erfolgsmetriken von Seiten und Funktionen zu messen.
- Und vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Möglichkeit, integer zu handeln, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung mit ihnen aufzubauen, was wiederum Ihre Marke und Ihre Erfolgschancen verbessert.

Die Ethik der Datenerhebung lässt sich in drei einfache Prinzipien unterteilen:

- Sammeln Sie nicht mehr Daten als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die untenstehenden Tipps bieten eine bessere, bewusstere Benutzererfahrung, aber viele von ihnen sind gesetzlich vorgeschrieben, um den Vorschriften zu entsprechen, zum Beispiel dem [GDPR](https://gdpr.eu/) in der EU. Sie sollten sicherstellen, welche Bestimmungen für Ihren Standort gelten und was Sie tun müssen, um diesen zu entsprechen.

### Sammeln Sie nicht mehr Daten als Sie benötigen

Es ist verlockend, viele Daten von Ihren Benutzern zu verlangen, weil Sie denken, dass sie in Zukunft nützlich sein könnten. Jedoch fügt jedes zusätzliche Datenbit ein Risiko für die Privatsphäre Ihrer Benutzer hinzu und erhöht die Chance, dass sie den Schritt abbrechen, den sie gerade durchführen (sei es das Ausfüllen einer Umfrage oder das Anmelden für einen Dienst).

Es ist ratsam, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das benötigen, was Sie benötigen, indem Sie Ihre Datenanforderung weniger detailliert gestalten. Anstatt beispielsweise einen Benutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn bitten, zwischen allgemeineren Kategorien zu wählen.

Der beste Weg zum Schutz der Privatsphäre von Benutzern ist jedoch, die gesammelten Daten zu minimieren. Im vorherigen Beispiel könnten Sie dieselben Daten durch Betrachtung des Kaufverlaufs der Benutzer ableiten. In einem anderen Beispiel schätzen Benutzer es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, sich für ein Konto anzumelden; wenn es nicht notwendig für den Betrieb des Dienstes ist, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln möchten, sollten Sie eine Datenschutzrichtlinie auf Ihrer Website veröffentlichen, die klar angibt:

- Welche Daten gesammelt werden
- Wie die Daten verwendet werden
- Mit wem die Daten, wenn überhaupt, geteilt werden und eine Erklärung, dass Sie die Zustimmung des Benutzers einholen, bevor Sie diese Daten teilen
- Wie lange Sie die Daten aufbewahren, bevor sie gelöscht werden
- Wie Benutzer die von Ihnen gesammelten Daten einsehen und löschen können, falls sie das wünschen

Die Benutzer sollten, wenn sie Ihnen Daten zur Verfügung stellen, die Möglichkeit haben, Ihre Datenschutzrichtlinie zu lesen und ihr zuzustimmen. Sie sollten kontrollieren können, ob sie damit einverstanden sind und Ihren Bedingungen zustimmen. Und wie oben erwähnt, sollten sie auch sehen können, welche ihrer Daten Sie gesammelt haben, und diese löschen lassen, wenn sie das möchten.

Wenn Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sich daran halten — zu tun, was Sie sagen, dass Sie tun werden, ist sehr wichtig, um das Vertrauen der Benutzer aufzubauen. Sie sollten nur die Daten sammeln, die Sie sagen, dass Sie sammeln werden, und sie nur für den Zweck verwenden, für den Sie sagen, dass Sie sie verwenden werden. Wenn jemand aus Ihrem Unternehmen eine clevere neue Möglichkeit findet, vorhandene Daten zu nutzen, ist das nach den Bedingungen Ihrer Richtlinie dennoch nicht in Ordnung, wenn es nicht spezifiziert wird, dass Sie sie zu diesem Zweck verwenden werden. Wenn die Benutzer der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und dieser Zweck ausgeweitet wird, müssen Sie eventuell in Erwägung ziehen, eine neue Zustimmung zu erhalten.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Wie bereits erwähnt, sollten Sie Benutzern die Möglichkeit geben, zu sehen, welche ihrer Daten Sie gesammelt haben, und diese löschen, falls sie das wünschen. Gegebenenfalls könnten Sie dies Teil derselben Erfahrung machen, die sie verwenden können, um ihr Konto zu löschen (deren Daten werden damit gelöscht), oder als zwei separate Optionen. In jedem Fall sollten die Optionen leicht zu finden sein.

Benutzern die Wahl zu lassen, wann bedeutende Teile ihrer Daten gelöscht werden, ist sehr ermächtigend und baut Vertrauen auf, aber es gibt möglicherweise einige Datenstücke, deren Löschung Sie selbst verwalten möchten. Beispielsweise könnten einige Daten nur für einige Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Verwaltung einer Benutzersitzung verwendet werden, während sie eingeloggt sind.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich, um kurzlebige Benutzerdaten zu löschen — er weist den Browser an, Cache und/oder Cookies und/oder Speicher (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu löschen. Beispielsweise könnten Sie Ihren Server dazu bringen, ihn zusammen mit einer "Ausgeloggt-Bestätigungsseite" zu senden, damit die Daten des Benutzers, sobald er ausgeloggt ist, sicher entfernt werden.

## Tracking reduzieren

Wie bereits besprochen, nutzen einige das Tracking und seine unethischen Zwecke. Wir sollten nicht erklären müssen, wie solche Verwendungen das Vertrauen der Benutzer untergraben können; wo es möglich ist, sollten Sie Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Zwecke verwenden, wie das Übertragen von Anmelde- oder anderen Personalisierungsstatus über Websites hinweg.

Erinnern wir uns auch, dass Browser anfangen, Drittanbieter-Cookies standardmäßig zu blockieren, während alternative Technologien implementiert werden, um gängige Anwendungsfälle zu erreichen. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, reduzieren und/oder gewünschte Informationspersistenz auf andere Weise umsetzen. Lesen Sie [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für mehr Informationen.

## Drittanbieter-Ressourcen sorgfältig verwalten

Natürlich wäre es einfach, die Privatsphäre zu verwalten, wenn Sie sich nur um Ressourcen sorgen müssten, die Sie selbst erstellt haben (Code, Cookies, Websites usw.). Die wirkliche Herausforderung besteht darin, dass Ihre Seite wahrscheinlich Drittanbieter-Ressourcen verwenden wird. Dies kann Drittanbieterinhalte umfassen, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung, sie bieten viel Power. Allerdings hat jede Drittanbieter-Ressource, die Sie auf Ihrer Website erlauben, potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie auf Ihrer Website eingebunden ist:

- JavaScript, das innerhalb von Drittanbieter-Inhalten läuft, die über ein `<iframe>` in Ihre Website eingebettet sind, ist durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) getrennt, das bedeutet, dass es keinen Zugriff auf andere Skripte und Daten im obersten Browsing-Kontext hätte.
- Ein Drittanbieter-Skript, das direkt in Ihrer Seite über ein {{htmlelement("script")}}-Element eingebunden ist, hätte jedoch Zugriff auf Ihre anderen Skripte und Daten, unabhängig davon, ob es auf Ihrer Site oder einer anderen Site gehostet wird. Es wäre im Grunde ein Erstanbieter-Code. Ein bösartiges Skript, das auf diese Weise eingebunden wird, könnte heimlich die Daten Ihrer Benutzer stehlen, indem es sie beispielsweise an einen Drittanbieterserver sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen zu prüfen, die Sie auf Ihrer Site verwenden. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und wie ihre Datenschutzrichtlinien lauten. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das diese verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu erstellen, welche Anfragen eine Seite stellt, zum Beispiel der [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieter-Ressourcen geprüft haben und verstehen, was sie tun, sollten Sie dann ihre Nachteile als Kompromiss für den Wert, den sie bringen, in Betracht ziehen. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber viele Benutzer-Daten sammelt, könnten Sie:

1. Diesen Kompromiss akzeptieren, Ihre Datenschutzrichtlinie aktualisieren, um Details dazu aufzunehmen, und hoffen, dass es das Vertrauen Ihrer Benutzer nicht allzu sehr beeinträchtigt.
2. Nach einer alternativen, weniger datenhungrigen Drittanbieterlösung suchen.
3. Ihr eigenes Tool entwickeln.

Die folgende Liste bietet einige Tipps, wie Sie die inhärenten Risiken für die Privatsphäre bei der Verwendung von Drittanbieter-Ressourcen mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, überlegen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Auswirkungen auf die Privatsphäre zu erzielen. Es könnte zum Beispiel Spaß machen, einen Betrachter für Social Media-Beiträge auf Ihrer Website eingebettet zu haben, aber ist das wirklich notwendig? Würde ein Link zu Ihrer Social Media-Seite nicht ausreichen? Auch haben einige Drittanbieter-Dienste privacy-fördernde Optionen. Siehe zum Beispiel [YouTubes Anleitungsseite für das einbetten von Videos & Playlists > Privatsphäre-erweiterter Modus aktivieren](https://support.google.com/youtube/answer/171780).
- Wo möglich, sollten Sie es vermeiden, Drittanbietern einen {{httpheader("Referer")}}-Header beim Anfragen an sie zu senden. Dies kann auf ziemlich granulare Weise erfolgen, indem zum Beispiel [rel="noreferrer"](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) bei externen Links eingesetzt wird. Sie könnten es auch globaler für die Seite oder die ganze Site einstellen, zum Beispiel durch die Nutzung des {{httpheader("Referrer-Policy")}}-Headers.

  > [!NOTE]
  > Lesen Sie auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Nutzen Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API-"leistungsstarke Funktionen" (wie Benachrichtigungen, Geolokationsdaten, den Zugriff auf Medien-Streams von Webcams usw.) zu steuern. Dies kann nützlich für die Privatsphäre sein, weil es Drittanbieter-Sites daran hindert, unerwartete Dinge mit diesen Funktionen zu tun und Benutzer unnötig mit Berechtigungsanfragen zu überhäufen, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" innerhalb von Drittanbieter-Sites, die in {{htmlelement("iframe")}}-Elemente eingebettet sind, kontrollieren, indem Berechtigungspolitiken innerhalb eines `allow`-Attributs auf dem `<iframe>` selber spezifiziert werden.

  > [!NOTE]
  > Lesen Sie auch unseren [Permissions-Policy-Leitfaden](/de/docs/Web/HTTP/Guides/Permissions_Policy) für weitere Informationen und Beispiele, und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools einschließlich eines Policy-Generators.

- Verwenden Sie das `sandbox`-Attribut von {{htmlelement("iframe")}}, um die Nutzung bestimmter Funktionen innerhalb der in das `<iframe>` eingebetteten Inhalte zuzulassen oder zu verbieten — dies umfasst Dinge wie Downloads, Formularübermittlungen, Modale und Skript-Ausführung.

> [!NOTE]
> Lesen Sie [Drittanbieter](https://web.dev/learn/privacy/third-parties/) auf web.dev für weitere nützliche Informationen über Audits und mehr.

## Benutzerdaten schützen

Sie müssen sicherstellen, dass Benutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist mehr ein [Sicherheitsthema](/de/docs/Web/Security), aber es ist erwähnenswert hier – eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit schwach ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Anleitungen zum Schutz der Daten Ihrer Benutzer:

- Sicherheit ist schwer richtig umzusetzen. Wenn Sie eine sichere Lösung implementieren, die Datenerfassung einbezieht – besonders wenn es sich um sensible Daten wie Anmeldeinformationen handelt – macht es Sinn, eine respektable Lösung von einem angesehenen Anbieter zu verwenden. Beispielsweise wird jeder respektable serverseitige Rahmenwerk eingebaute Funktionen haben, um häufige Schwachstellen zu schützen. Sie könnten auch in Erwägung ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden – zum Beispiel eine Identitätsproviderlösung oder einen sicheren Online-Umfrageanbieter.
- Wenn Sie Ihre eigene Lösung zur Erfassung von Benutzerdaten implementieren möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Beauftragen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren und das es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "mehrstufige Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Erwägen Sie die Nutzung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die clientseitige Anwendung zu vereinfachen.
- Bei der Erfassung von Benutzerregistrierungsinformationen, erzwingen Sie starke Passwörter, damit die Kontodetails Ihres Benutzers nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Benutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; auf diese Weise machen sie sich keine Sorgen um das Erinnern, oder schaffen ein Sicherheitsrisiko, indem sie sie aufschreiben.
- Senden Sie keine sensiblen Daten in URLs — wenn ein Dritter die URL abfängt (zum Beispiel über den {{httpheader("Referer")}}-Header), könnten sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie die Nutzung von Tools wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um eine Reihe von Feature-Nutzungen auf Ihrer Seite durchzusetzen, die es schwieriger machen, Sicherheitslücken einzuführen. Seien Sie vorsichtig, wenn Sie dies tun – wenn Sie die Nutzung eines Features blockieren, auf das sich ein Drittanbieter-Skript für die Arbeit verlässt, könnte es sein, dass die Funktionalität Ihrer Seite unterbrochen wird. Das ist etwas, das Sie untersuchen können, wenn Sie Ihre Drittanbieter-Ressourcen prüfen (siehe [Drittanbieter-Ressourcen sorgfältig verwalten](#drittanbieter-ressourcen_sorgfältig_verwalten)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
