---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Banking, Einkaufen, Unterhaltung und Steuerzahlungen. Dabei sind sie verpflichtet, persönliche Informationen mit diesen Websites zu teilen. Nutzer bringen den Websites, mit denen sie ihre Daten teilen, ein gewisses Maß an Vertrauen entgegen. Gelangen diese Informationen in die falschen Hände, könnten sie ausgenutzt werden, um Nutzer zu profilieren, mit unerwünschten Anzeigen zu bombardieren oder sogar ihre Identität oder ihr Geld zu stehlen.

Moderne Browser verfügen bereits über eine Vielzahl von Funktionen, um die Privatsphäre der Nutzer im Web zu schützen, doch das ist nicht genug. Um eine vertrauenswürdige und respektvolle Erfahrung in Bezug auf die Privatsphäre zu schaffen, müssen Entwickler ihre Nutzer in guten Praktiken schulen (und durchsetzen). Entwickler sollten auch Websites schaffen, die so wenig Daten wie möglich von den Nutzern sammeln, die Daten verantwortungsvoll verwenden und sie sicher transportieren und speichern.

In diesem Artikel werden wir:

- Datenschutz und wichtige verwandte Begriffe definieren.
- Browser-Funktionen untersuchen, die automatisch die Privatsphäre der Nutzer schützen.
- Erläutern, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Nutzern unerwartet von Drittparteien erlangt werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web verfügbar sind, definieren wir einige wichtige Begriffe.

### Datenschutz und sein Verhältnis zur Sicherheit

Es ist schwierig, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen — sie sind eng miteinander verbunden, und man kann keine datenschutzfreundlichen Websites ohne gute Sicherheit erstellen. Daher definieren wir beides.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sie nicht unverantwortlich zu nutzen. Beispielsweise sollten Sie Ihren Nutzern klar mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Die Nutzer müssen die Möglichkeit haben, den Nutzungsbedingungen für Daten zuzustimmen, Zugang zu allen Daten zu erhalten, die Sie speichern, und diese zu löschen, wenn sie nicht mehr möchten, dass Sie sie haben. Sie müssen sich auch an Ihre eigenen Bedingungen halten: Nichts zerstört das Vertrauen der Nutzer so sehr, wie wenn ihre Daten auf eine Weise verwendet und geteilt werden, der sie nie zugestimmt haben. Und das ist nicht nur unethisch; es könnte auch gegen das Gesetz verstoßen. Viele Teile der Welt haben jetzt Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die EU-[DSGVO](https://gdpr.eu/)).

- **Sicherheit** bezeichnet den Schutz privater Daten und Systeme vor unbefugtem Zugriff. Dies umfasst sowohl Unternehmensdaten (intern) als auch Nutzer- und Partnerdaten (extern). Es nützt nichts, eine solide Datenschutzrichtlinie zu haben, die Ihre Nutzer Ihnen vertrauen lässt, wenn Ihre Sicherheit schwach ist und böswillige Parteien dennoch ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Nutzer beschreiben. Beispiele hierfür sind:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktdaten
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Kennungen
- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen, wenn sie mit einer Person verknüpft werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Nutzer nicht öffentlich teilen möchten und die privat bleiben müssen (d.h. Informationen, die nur einer bestimmten Gruppe autorisierter Nutzer zugänglich sind). Einige private Daten sind gesetzlich geschützt (zum Beispiel medizinische Daten), und einige sind eher durch persönliche Präferenzen privat.

### Personenbezogene Daten

Anknüpfend an den obigen Abschnitt sind **personenbezogene Daten** (PII) Informationen, die ganz oder teilweise dazu verwendet werden können, eine bestimmte Person zu identifizieren und/oder aufzuspüren. Zum Beispiel könnte ein böswilliger Akteur fast sicher die vollständigen Adressen herausfinden, wenn eine Website eine Liste mit Benutzernamen und Postleitzahlen im Internet leakt. Selbst wenn kein vollständiges Datenleck auftritt, ist es dennoch möglich, Nutzer durch weniger offensichtliche Mittel zu identifizieren, wie die von ihnen verwendeten Browser, die Geräte, die sie verwenden, spezifische installierte Schriftarten und so weiter.

### Tracking

**Tracking** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Nutzers über viele verschiedene Websites hinweg. Dies kann auf verschiedene Weise geschehen, zum Beispiel:

- Indem man sich mehrere [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) ansieht, die auf verschiedenen Websites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den Nutzer zu erfahren.
- Indem man die {{httpheader("Referer")}}-Header betrachtet, um zu sehen, von wo ein Nutzer navigiert ist.
- Indem man Parameter in den URLs von eingehenden Links hinzufügt (zum Beispiel in eingebetteten Anzeigen, die zu Produktseiten verlinken, oder in Marketing-E-Mails), die der verlinkten Website mitteilen können, wo der Link herkommt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder andere Kennungen des Nutzers, der darauf geklickt hat usw. Dieser Prozess wird **Link-Dekoration** genannt und führt zu Link-URLs, die folgendermaßen aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, bei dem Tracker Nutzer kurzzeitig (und unmerklich) zu ihrer Website umleiten, um First-Party-Speicher zu verwenden, um diesen Nutzer über Websites hinweg zu verfolgen. Dadurch können Tracker umgehen, dass Drittanbieter-Cookies blockiert werden. Zum Beispiel, wenn Sie eine Produktbewertung gelesen haben und es kaufen möchten, könnten Sie unwissentlich zuerst zum Redirect-Tracker navigieren _und dann_ zum Händler. Das bedeutet, dass der Tracker als Erstanbieter geladen wird und Tracking-Daten mit den Kennungen assoziieren kann, die sie in ihren Erstanbieter-Cookies gespeichert haben, bevor Sie zum Händler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Nutzers und seiner Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und unterschiedlich ärgerlich sein kann. Zum Beispiel:

- **Gezielte Anzeigen**: Jeder hat schon die beunruhigende Erfahrung gemacht, einige Artikel zum Kauf auf einem Gerät zu recherchieren und dann plötzlich auf all seinen anderen Geräten mit Anzeigen für die gleichen Produkte bombardiert zu werden.
- **Verkauf oder Weitergabe von Daten**: Einige Drittparteien sind dafür bekannt, Tracking-Daten zu sammeln und dann an andere zu verkaufen oder mit anderen zu teilen, um sie für verschiedene Zwecke zu nutzen, beispielsweise für gezielte Werbung. Dies ist offensichtlich höchst unethisch und möglicherweise auch illegal, je nachdem, wo auf der Welt es passiert.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte die Weitergabe von Daten dazu führen, dass der Nutzer unfair benachteiligt wird. Zum Beispiel könnte man sich vorstellen, dass eine Versicherungsgesellschaft Datenpunkte über einen potenziellen Kunden herausfindet, die dieser nicht mitgeteilt hat, und diese als Rechtfertigung für die Erhöhung von Versicherungspreisen verwendet.

### Fingerprinting

Ein sehr eng mit Tracking verwandter Prozess ist das **Fingerprinting**: Dies bezieht sich speziell auf das _Identifizieren_ von Nutzern durch das Aufbauen einer Sammlung von Datenpunkten über sie, die sie von anderen Nutzern unterscheiden. Dies könnten alles sein, von Cookie-Inhalten bis hin zu dem Browser, den sie verwenden, und den lokal installierten Schriftarten.

Moderne Browser ergreifen Maßnahmen, um Angriffe basierend auf Fingerprinting zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo die Informationen zugänglich gemacht werden müssen, Variationen oder "Rauschen" einführen, die es verhindern, dass sie zu Identifizierungszwecken verwendet werden.

Zum Beispiel, wenn eine Website die verstrichene Zeit im Browser eines Nutzers abfragt, könnte ein Vergleich dieser Zeit mit der von einem Server gemeldeten Zeit nützlich als Faktor für Fingerprinting sein. Aus diesem Grund führen Browser typischerweise eine kleine Menge an Variabilität zu Timern ein, um sie weniger nützlich für die Identifizierung des Systems des Nutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen, die von Browsern bereitgestellt werden

Browserhersteller sind sich des Bedarfs bewusst, die Privatsphäre der Nutzer zu schützen und der negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Benutzererfahrung. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen abmildern. In diesem Abschnitt betrachten wir verschiedene Kategorien des Datenschutzes, die Browser automatisch anwenden.

### HTTPS als Standard

Die [Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem sie Daten beim Transport über das Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, da es Drittparteien daran hindert, übertragene Daten abzufangen und böswillig zu verwenden, beispielsweise zum Tracking.

Alle Browser tendieren dazu, HTTPS als Standard zu verwenden; das ist praktisch schon der Fall, denn man kann im Web nicht viel machen, ohne dieses Protokoll zu nutzen.

Verwandte Themen sind wie folgt:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Überprüfung von Zertifikaten, der eine Datenbank öffentlicher Logs erstellt, die dabei helfen kann, falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sie vor Protokoll-Downgrade- und Cookie-Entführung-Angriffen zu schützen, indem Websites den Clients mitteilen, dass sie nur HTTPS verwenden dürfen, um mit dem Server zu kommunizieren.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Obwohl HTTP/2 technisch gesehen nicht unbedingt Verschlüsselung verwenden muss, wird es von den meisten Browserentwicklern nur unterstützt, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung von Sicherheit/Datenschutz angesehen werden.

### Anmeldung für "mächtige Funktionen"

Sogenannte "mächtige" Web-API-Funktionen, die Zugang zu potenziell sensiblen Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Grunde bedeutet: nur HTTPS. Darüber hinaus sind diese Web-Funktionen hinter einem System von Benutzerberechtigungen gesperrt. Benutzer müssen ausdrücklich einwilligen, Funktionen wie Benachrichtigungen zu erlauben, auf Geolokalisierungsdaten zuzugreifen, den Browser in den Vollbildmodus zu versetzen, Medienströme von Webcams zu verwenden, Webzahlungen zu tätigen usw.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die den Datenschutz automatisch verbessern. Viele davon blockieren oder beschränken die Möglichkeit von Drittanbieter-Websites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der Top-Level-Domain gesetzt sind, Tracking-Skripts auszuführen usw.

- Der Standardwert des Attributs [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) des {{httpheader("Set-Cookie")}}-Headers wurde auf `Lax` aktualisiert, um besseren Schutz gegen Tracking und {{Glossary("CSRF", "CSRF")}}-Angriffe zu bieten. Weitere Informationen finden Sie unter [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite).
- Alle Browser haben damit begonnen, standardmäßig Drittanbieter-Cookies zu blockieren. Weitere Details finden Sie unter [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies).
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die den Datenschutz nicht beeinträchtigen, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu implementieren. Weitere Informationen finden Sie unter [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Browsererweiterungen helfen ebenfalls dabei, zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für clientseitige Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um die Privatsphäre ihrer Nutzer zu verbessern. Die untenstehenden Abschnitte behandeln die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Sammeln Sie Daten ethisch

Unternehmen sammeln aus vielen verschiedenen Gründen viele verschiedene Daten von ihren Nutzern:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografischer Standort, Lieblingsbeschäftigungen und eine Vielzahl anderer PII für alles von der Personalisierung der Website bis hin zu Umfragen zur Kundenzufriedenheit.
- Browsing-Gewohnheiten auf ihren und anderen Websites, um Metriken zum Erfolg von Seiten und Funktionen zu messen.
- Und vieles mehr.

Beim Sammeln von Daten von Ihren Kunden haben Sie die Gelegenheit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen. Dies verbessert Ihre Marke und Ihre Erfolgschancen.

Die Ethik der Datenerhebung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten als nötig
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden
- Löschen Sie die Daten, sobald Sie mit ihnen fertig sind

> [!NOTE]
> Die unten gegebenen Tipps sorgen für eine bessere, datenschutzbewusstere Benutzererfahrung, aber viele von ihnen sind gesetzlich vorgeschrieben, um den Vorschriften zu entsprechen, zum Beispiel der [DSGVO](https://gdpr.eu/) in der EU. Sie sollten herausfinden, welche Vorschriften an Ihrem Standort für Sie gelten und was Sie tun müssen, um sie einzuhalten.

### Sammeln Sie nicht mehr Daten als nötig

Es ist verlockend, viele Daten von Ihren Nutzern zu verlangen, weil Sie glauben, dass sie in Zukunft nützlich sein könnten. Jedes zusätzliche Datenbit, das Sie sammeln, erhöht jedoch das Risiko für die Privatsphäre Ihrer Nutzer und die Wahrscheinlichkeit, dass sie den Schritt, den sie gerade durchführen (sei es das Ausfüllen einer Umfrage oder das Anmelden für einen Dienst), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie durch weniger detaillierte Datenanforderungen das erreichen können, was Sie benötigen. Anstatt einen Nutzer beispielsweise nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn bitten, zwischen allgemeineren Kategorien auszuwählen.

Der beste Weg, die Privatsphäre der Nutzer zu schützen, besteht jedoch darin, die von Ihnen gesammelten Daten zu minimieren. Beim vorherigen Beispiel könnten Sie die gleichen Daten ableiten, indem Sie sich das Kaufverhalten der Nutzer ansehen. Ein weiteres Beispiel: Die Nutzer schätzen es, anonym Produkte kaufen zu können. Sie sollten sie nicht zwingen, ein Konto zu erstellen; wenn es für den Betrieb des Dienstes nicht notwendig ist, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden

Sobald Sie entschieden haben, welche Daten Sie sammeln möchten, sollten Sie eine Datenschutzrichtlinie auf Ihrer Website veröffentlichen, die klar angibt:

- Die Daten, die Sie sammeln
- Die Art und Weise, wie Sie die Daten verwenden
- Die Parteien, mit denen Sie die Daten teilen möchten, falls überhaupt, und eine Erklärung, dass Sie die Zustimmung der Nutzer einholen, bevor Sie teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Die Möglichkeiten, wie Nutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie möchten

Wenn Sie den Nutzern Daten zur Verfügung stellen, sollten sie die Möglichkeit haben, Ihre Datenschutzrichtlinien zu lesen und ihnen zuzustimmen. Sie sollten in der Lage sein zu kontrollieren, ob sie damit einverstanden sind und den Bedingungen zustimmen. Und wie oben bereits erwähnt, sollten sie auch die Möglichkeit haben zu sehen, welche Daten von ihnen Sie gesammelt haben, und sie zu löschen, wenn sie es wünschen.

Wenn Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sie einhalten — das Einhalten Ihrer Aussagen ist sehr wichtig für den Aufbau von Vertrauen bei den Nutzern. Sie sollten nur die Daten sammeln, die Sie sagen, dass Sie sammeln werden, und sie nur für den Zweck verwenden, den Sie angeben. Wenn jemand aus Ihrem Unternehmen mit einer cleveren neuen Verwendung bestehender Daten kommt, ist das unter den Bedingungen Ihrer Richtlinien trotzdem nicht in Ordnung, wenn nicht angegeben ist, dass Sie sie dafür verwenden. Wenn die Nutzer der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und dieser Zweck sich erweitert, müssen Sie möglicherweise in Betracht ziehen, eine neue Zustimmung einzuholen.

### Löschen Sie die Daten, sobald Sie mit ihnen fertig sind

Wie bereits erwähnt, sollten Sie den Nutzern eine Möglichkeit bieten zu sehen, welche Daten von ihnen Sie gesammelt haben, und diese zu löschen, wenn sie es wünschen. Sie könnten dies möglicherweise als Teil derselben Erfahrung tun, die sie zum Löschen ihres Kontos verwenden können (ihre Daten verschwinden damit), oder als zwei separate Optionen. In jedem Fall sollten die Optionen leicht auffindbar sein.

Den Nutzern die Möglichkeit zu geben, selbst zu entscheiden, wann erhebliche Datenmengen gelöscht werden, ist sehr ermächtigend und schafft Vertrauen. Aber es kann einige Daten geben, deren Löschung Sie selbst handhaben möchten. Zum Beispiel könnten einige Daten nur für ein paar Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Administration einer Benutzersitzung verwendet werden, während dieser angemeldet ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Antwort-Header ist sehr nützlich für das Löschen kurzlebiger Benutzerdaten — es weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher (z.B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu löschen. Beispielsweise könnten Sie Ihren Server anweisen, ihn zusammen mit einer "Abmeldebestätigung"-Seite zu senden, sodass die Daten des Nutzers nach der Abmeldung sicher entfernt werden.

## Reduzieren Sie das Tracking

Zuvor haben wir über Tracking und einige der unethischen Verwendungszwecke gesprochen. Es sollte nicht notwendig sein, zu beschreiben, wie solche Verwendungen das Vertrauen der Nutzer untergraben können. Wo immer möglich, sollten Sie potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Zwecke verwenden, beispielsweise die Übertragung eines Anmelde- oder anderen Personalisierungsstatus über verschiedene Websites hinweg.

Denken Sie auch daran, dass alle Browser beginnen, standardmäßig Drittanbieter-Cookies zu blockieren, während sie alternative Technologien implementieren, um gängige Anwendungsfälle zu erreichen. Es ist ratsam, sich darauf vorzubereiten, indem Sie die Menge an Tracking-Aktivitäten, auf die Sie sich verlassen, begrenzen und/oder das gewünschte Informationsspeicherung auf andere Weise umsetzen. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Natürlich wäre es einfach, den Datenschutz zu verwalten, wenn Sie nur Ihre eigenen Ressourcen entwickeln müssten (Code, Cookies, Websites usw.). Die echte Herausforderung ergibt sich aus der Tatsache, dass Ihre Site wahrscheinlich Drittanbieter-Ressourcen verwenden wird. Dazu können Drittanbieter-Inhalte gehören, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung und bieten eine Menge Leistung. Jede Drittanbieter-Ressource, die Sie auf Ihre Website zulassen, hat jedoch potenziell die gleichen Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie in Ihre Site eingebunden ist:

- JavaScript, das in Drittanbieter-Inhalten ausgeführt wird, die über ein `<iframe>` in Ihre Site eingebettet sind, wird durch die [Same-origin policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere in der obersten Browsing-Kontext enthaltene Skripte und Daten hat.
- Ein Drittskript, das direkt auf Ihrer Seite über ein {{htmlelement("script")}}-Element eingebunden wird, _würde_ jedoch Zugriff auf Ihre anderen Skripte und Daten haben, unabhängig davon, ob es auf Ihrer Website oder einer anderen gehostet ist. Es würde im Wesentlichen als Erstanbieter-Code auftreten. Ein bösartiges Skript, das auf diese Weise eingebunden wird, könnte heimlich die Daten Ihrer Nutzer stehlen, z.B. in dem es sie an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Website verwenden, zu auditieren. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und welche Datenschutzrichtlinien sie haben. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das dagegen verstößt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu erstellen, welche Anfragen eine Site stellt, z.B. den [Request Map Generator](https://requestmap.webperf.tools/).

Nachdem Sie Ihre Drittanbieter-ressourcen auditiert und verstanden haben, was sie tun, sollten Sie ihre Nachteile als Kompromiss für den Wert, den sie bringen, betrachten. Wenn ein Drittanbieter
-Skript kostenlos und wirklich nützlich ist, aber eine Menge Nutzerdaten sammelt, könnten Sie:

1. Akzeptieren Sie diesen Kompromiss, aktualisieren Sie Ihre Datenschutzrichtlinie, um Details dazu aufzunehmen, und hoffen Sie, dass es das Vertrauen Ihrer Nutzer nicht zu sehr beeinträchtigt.
2. Suchen Sie nach einer Alternative, die weniger datenhungrig ist.
3. Erstellen Sie Ihr eigenes Tool.

Die folgende Liste bietet einige Tipps, wie Sie die mit der Verwendung von Drittanbieter-Ressourcen verbundenen Datenschutzrisiken mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, überlegen Sie, ob es eine Möglichkeit gibt, den gleichen oder einen ähnlichen Effekt mit weniger Auswirkungen auf die Privatsphäre zu erzielen. Zum Beispiel könnte es Spaß machen, einen Social-Media-Post-Viewer in Ihre Website einzubetten, aber ist das wirklich notwendig? Würde ein Link zu Ihrer Social-Media-Seite nicht ausreichen? Einige Drittanbieter-Dienste haben auch datenschutzfreundliche Optionen. Siehe beispielsweise die [Eingebettete Videos & Playlists > Datenschutzeinstellungen aktivieren](https://support.google.com/youtube/answer/171780) von YouTube.
- Wo möglich, sollten Sie Drittanbietern das Empfangen eines {{httpheader("Referer")}}-Headers blockieren, wenn Sie Anfragen an sie stellen. Dies kann auf ziemlich detaillierte Weise erfolgen, z.B. durch das Hinzufügen von [rel="noreferrer"](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) zu externen Links. Oder Sie könnten dies globaler für die Seite oder die Site einstellen, z.B. durch Verwendung des {{httpheader("Referrer-Policy")}}-Headers.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}}-HTTP-Header, um den Zugriff auf API-"mächtige Funktionen" (wie Benachrichtigungen, Geolokalisierungsdaten, Zugriff auf Medienströme von Webcams usw.) zu kontrollieren. Dies kann nützlich für den Datenschutz sein, da es Drittanbieter-Seiten daran hindert, unerwartete Dinge mit diesen Funktionen zu tun, und Nutzer nicht unnötigerweise durch Erlaubnisaufforderungen, die sie möglicherweise nicht verstehen, belästigt werden. Sie können auch die Nutzung von "mächtigen Funktionen" in Drittanbieter-Seiten, die in {{htmlelement("iframe")}}-Elementen eingebettet sind, kontrollieren, indem Sie Berechtigungsrichtlinien im `allow`-Attribut im `<iframe>` selbst festlegen.

  > [!NOTE]
  > Siehe auch unseren [Leitfaden zur Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für weitere Informationen und Beispiele sowie [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools inklusive eines Richtlinengenerators.

- Verwenden Sie das {{htmlelement("iframe")}} `sandbox`-Attribut, um die Verwendung bestimmter Funktionen innerhalb des im `<iframe>` eingebetteten Inhalts zu erlauben oder zu blockieren — dies beinhaltet Dinge wie Downloads, Formularübermittlungen, Modals und Scripting.

> [!NOTE]
> Siehe [Drittparteien](https://web.dev/learn/privacy/third-parties/) auf web.dev für zusätzliche nützliche Informationen zu Audits und mehr.

## Schützen Sie Nutzerdaten

Sie müssen sicherstellen, dass Nutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist mehr ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es lohnt sich, es hier zu erwähnen — eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit schwach ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Anleitungen zum Schutz der Daten Ihrer Nutzer:

- Sicherheit ist schwer richtigzumachen. Wenn Sie eine sichere Lösung implementieren, die Datenerhebung einschließt — insbesondere wenn es sich um sensible Daten wie Anmeldedaten handelt — macht es Sinn, eine angesehene Lösung von einem renommierten Anbieter zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework integrierte Funktionen zum Schutz gegen häufige Schwachstellen haben. Sie könnten auch in Erwägung ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden — z.B. eine Identitätsanbieter-Lösung oder einen sicheren Anbieter von Online-Umfragen.
- Wenn Sie Ihre eigene Lösung zur Datenerhebung entwickeln möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Stellen Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur ein, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Ziehen Sie die Verwendung einer speziellen API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API) in Betracht, um die clientseitige Umsetzung der App zu vereinfachen.
- Wenn Sie Anmeldeinformationen von Nutzern sammeln, erzwingen Sie starke Passwörter, damit die Kontodetails Ihres Nutzers nicht einfach erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu erstellen und zu speichern; auf diese Weise müssen sie sich keine Sorgen machen, sie sich zu merken, oder ein Sicherheitsrisiko schaffen, indem sie sie aufschreiben.
- Geben Sie keine sensiblen Daten in URLs an — wenn ein Dritter die URL abfängt (z.B. über den {{httpheader("Referer")}}-Header), könnten sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Ziehen Sie die Verwendung von Tools wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) in Betracht, um eine Reihe von Funktionsnutzungen auf Ihrer Seite durchzusetzen, die es schwieriger machen, Schwachstellen einzuführen. Seien Sie vorsichtig, wenn Sie dies tun — wenn Sie die Nutzung einer Funktion blockieren, auf die sich ein Drittanbieter-Skript verlässt, um zu arbeiten, können Sie die Funktionalität Ihrer Website beeinträchtigen. Dies ist etwas, das Sie untersuchen können, wenn Sie Ihre Drittanbieter-Ressourcen auditieren (siehe [Verwalten Sie Drittanbieter-Ressourcen sorgfältig](#verwalten_sie_drittanbieter-ressourcen_sorgfältig)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
