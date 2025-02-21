---
title: Datenschutz im Internet
slug: Web/Privacy
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Banking, Shopping, Unterhaltung und Steuerzahlungen. Dabei sind sie gezwungen, persönliche Informationen mit diesen Seiten zu teilen. Nutzer setzen ein gewisses Maß an Vertrauen in die Seiten, mit denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten, könnten sie genutzt werden, um Nutzer auszunutzen, beispielsweise durch Profiling, das gezielte Schalten unerwünschter Werbung oder sogar durch Identitäts- oder Geldraub.

Moderne Browser verfügen bereits über zahlreiche Funktionen zum Schutz der Privatsphäre der Nutzer im Internet, aber das allein reicht nicht aus. Um eine vertrauensvolle und datenschutzfreundliche Erfahrung zu schaffen, müssen Entwickler ihre Seitenbenutzer über gute Praktiken aufklären (und diese durchsetzen). Entwickler sollten auch Websites erstellen, die so wenig Daten wie möglich von Nutzern sammeln, diese verantwortungsvoll nutzen und sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browserfunktionen, die automatisch den Datenschutz der Benutzer schützen.
- Schauen wir uns an, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Benutzern unerwartet von Dritten erlangt werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns mit den verschiedenen Datenschutz- und Sicherheitsfunktionen befassen, die im Internet verfügbar sind, lassen Sie uns einige wichtige Begriffe definieren.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwierig, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verbunden, und man kann wirklich keine datenschutzfreundlichen Websites erstellen, ohne gute Sicherheit zu haben. Deshalb werden wir beide definieren.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, darüber zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und diese nicht unverantwortlich zu nutzen. Beispielsweise sollten Sie Ihren Nutzern klar kommunizieren, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Die Nutzer müssen die Möglichkeit haben, Ihren Nutzungsbedingungen für Daten zuzustimmen, Zugriff auf alle von Ihnen gespeicherten Daten zu haben und diese zu löschen, wenn sie nicht mehr wünschen, dass Sie sie haben. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts unterminiert das Vertrauen der Nutzer so sehr wie eine Verwendung und Weitergabe ihrer Daten in einer Weise, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte auch gesetzeswidrig sein. In vielen Teilen der Welt gibt es mittlerweile Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die EU-[DSGVO](https://gdpr.eu/)).

- **Sicherheit** bedeutet, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern). Es nützt wenig, eine solide Datenschutzrichtlinie zu haben, die Vertrauen bei den Nutzern schafft, wenn die Sicherheit schwach ist und bösartige Parteien dennoch ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind Informationen, die einen Nutzer beschreiben. Beispiele hierfür sind:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Passnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Kennungen
- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen, wenn sie auf eine Einzelperson zurückgeführt werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind Informationen, die Benutzer nicht öffentlich teilen möchten und die privat bleiben müssen (d. h. Informationen, die nur für eine bestimmte Gruppe autorisierter Benutzer zugänglich sind). Einige private Daten sind gesetzlich privat (zum Beispiel medizinische Daten), und einige sind eher aus persönlichen Vorlieben privat.

### Personenbezogene identifizierbare Informationen

Anschließend an den obigen Abschnitt sind **personenbezogene identifizierbare Informationen** (PII) Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person zu verfolgen und/oder zu identifizieren. Zum Beispiel könnte ein böswilliger Akteur fast sicher die vollständigen Adressen der Benutzer herausfinden, wenn eine Site eine Liste mit Benutzer- und Postleitzahlen im Internet veröffentlicht. Selbst wenn kein vollständiges Leck auftritt, ist es immer noch möglich, Benutzer durch weniger offensichtliche Mittel zu identifizieren, z. B. die verwendeten Browser, die verwendeten Geräte, die installierten spezifischen Schriften usw.

### Tracking

**Tracking** bezeichnet den Prozess der Aufzeichnung der Aktivitäten eines Benutzers über viele verschiedene Websites hinweg. Dies kann auf verschiedene Weise geschehen, beispielsweise:

- Durch das Betrachten mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die auf verschiedenen Websites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationspunkte über den Benutzer herauszufinden.
- Durch das Betrachten des {{httpheader("Referer")}}-Headers, um zu sehen, von welcher Seite ein Benutzer navigiert ist.
- Durch das Einfügen von Parametern in die URLs von Eingangslinks (zum Beispiel in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder in Marketing-E-Mails), die der verlinkten Site offenbaren können, woher der Link stammt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder andere Kennungen des Benutzers, der darauf geklickt hat, usw. Dieser Vorgang wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die folgendermaßen aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, bei dem Tracker den Benutzer vorübergehend (und unmerklich) auf ihre Website umleiten, um sie als First-Party-Speicher zu verwenden, um den Benutzer über Websites hinweg zu verfolgen. Dies ermöglicht es den Trackern, die Blockierung von Drittanbieter-Cookies zu umgehen. Beispielsweise, wenn Sie eine Produktbewertung gelesen haben und darauf klicken möchten, um sie zu kaufen, könnten Sie unwissentlich zuerst zum Redirect-Tracker navigieren und _dann_ zum Einzelhändler. Dies bedeutet, dass der Tracker als First-Party geladen wird und Tracking-Daten mit den Identifikatoren verknüpfen kann, die sie in ihren First-Party-Cookies gespeichert haben, bevor Sie zum Einzelhändler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Benutzers und seiner Interessen und Vorlieben zu erstellen, was typischerweise schlecht ist und ärgerlich sein kann. Zum Beispiel:

- **Gezielte Anzeigen**: Jeder hat die unheimliche Erfahrung gemacht, Produkte auf einem Gerät zu recherchieren und dann plötzlich auf allen anderen Geräten durch Anzeigen für die gleichen Produkte bombardiert zu werden.
- **Verkaufen oder Teilen von Daten**: Einige Drittanbieter sind dafür bekannt, Tracking-Daten zu sammeln und sie dann zu verkaufen oder mit anderen zu teilen, um sie für verschiedene Zwecke wie gezielte Werbung zu verwenden. Dies ist offensichtlich hochgradig unethisch und möglicherweise auch illegal, abhängig davon, wo auf der Welt es passiert.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Benutzer unfair benachteiligt wird. Stellen Sie sich beispielsweise vor, dass eine Versicherungsgesellschaft Datenpunkte über einen potenziellen Kunden herausfindet, die dieser nicht bereit war, zu teilen, und diese als Rechtfertigung für die Erhöhung der Versicherungsprämien verwendet.

### Fingerprinting

Ein Vorgang, der eng mit Tracking verbunden ist, ist das **Fingerprinting**: Dies bezieht sich speziell auf das _Identifizieren_ von Benutzern, indem eine Vielzahl von Datenpunkten über sie gesammelt wird, die sie von anderen Benutzern differenzieren. Dies könnte alles Mögliche sein, von Cookie-Inhalten über den verwendeten Browser bis hin zu den lokal installierten Schriftarten.

Moderne Browser ergreifen Maßnahmen, um Fingerprinting-basierte Angriffe zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo Informationen verfügbar sein müssen, Variationen oder "Rauschen" einführen, die verhindern, dass sie zu Identifikationszwecken verwendet werden können.

Wenn beispielsweise eine Website den Browser eines Benutzers nach der abgelaufenen Zeit abfragt, könnte ein Vergleich dieser Zeit mit der von der Server gemeldeten Zeit als Faktor beim Fingerprinting nützlich sein. Da dies der Fall ist, führen Browser normalerweise eine kleine Menge Variabilität in die Timer ein, um sie weniger nützlich zu machen, um das System des Benutzers zu identifizieren.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen, die von Browsern bereitgestellt werden

Browseranbieter sind sich der Notwendigkeit bewusst, den Datenschutz der Benutzer zu schützen und der negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Benutzererfahrung entgegenzuwirken. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen abschwächen. In diesem Abschnitt betrachten wir verschiedene Kategorien von Datenschutzmaßnahmen, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem es Daten während des Transports über das Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für die Privatsphäre, da es verhindert, dass Dritte übertragene Daten abfangen und sie böswillig verwenden können, beispielsweise für das Tracking.

Alle Browser bewegen sich in Richtung eines standardmäßigen Einsatzes von HTTPS; dies ist praktisch schon der Fall, da man im Internet nicht viel tun kann ohne dieses Protokoll.

Verwandte Themen sind wie folgt:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard für die Überwachung und Prüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die verwendet werden kann, um falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokoll-Downgrade- und Cookie-Entführungsangriffen zu schützen, indem sie Websites ermöglichen, den Clients mitzuteilen, dass sie nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Während HTTP/2 technisch gesehen nicht <em>verschlüsseln</em> muss, unterstützen die meisten Browserentwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Erhöhung der Sicherheit/Privatsphäre betrachtet werden.

### Opt-in für "leistungsstarke Funktionen"

Die sogenannten "leistungsstarken" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Wesentlichen HTTPS-only bedeutet. Nicht nur das, sondern diese Web-Funktionen sind durch ein System von Benutzerberechtigungen abgesichert. Benutzer müssen explizit in Funktionen wie das Erlauben von Benachrichtigungen, das Abrufen von Geolokationsdaten, das Vollbildmodus-Schalten des Browsers, das Zugreifen auf Medienstreams von Webcams, die Verwendung von Webzahlungen, usw. einwilligen.

### Anti-Tracking-Technologie

Browser haben verschiedene Anti-Tracking-Funktionen implementiert, die die Benutzerdatenschutz automatisch verbessern. Viele davon blockieren oder beschränken die Möglichkeit von Drittanbieter-Sites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der obersten Domain gesetzt werden, Tracking-Skripte auszuführen usw.

- Der {{httpheader("Set-Cookie")}}-Header [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attributswert wurde auf den Standardwert `Lax` aktualisiert, um einen besseren Schutz gegen Tracking- und {{Glossary("CSRF", "CSRF")}}-Angriffe zu bieten. Weitere Informationen finden Sie unter [Controlling third-party cookies with `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite).
- Browser haben begonnen, Drittanbieter-Cookies standardmäßig zu blockieren. Weitere Details finden Sie unter [How do browsers handle third-party cookies?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies).
- Browser implementieren Technologien, um es Drittanbieter-Cookies nur unter bestimmten Umständen zu erlauben, die die Privatsphäre nicht beeinträchtigen, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu implementieren. Weitere Informationen finden Sie unter [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Replacing third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Browsererweiterungen helfen auch dabei, z.B. [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Client-seitige Entwickler

Es gibt verschiedene Maßnahmen, die Webentwickler ergreifen können und sollten, um den Datenschutz für ihre Nutzer zu verbessern. Die folgenden Abschnitte diskutieren die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Sammeln Sie Daten ethisch

Unternehmen sammeln viele verschiedene Daten von ihren Nutzern aus verschiedenen Gründen:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Reihe anderer PII für alles, vom Webseitenanpassungen bis zu Kundenumfragen.
- Browsing-Gewohnheiten auf ihren und anderen Websites, um den Erfolg von Seiten und Funktionen zu messen.
- Und noch vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Möglichkeit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine gute Beziehung zu ihnen aufzubauen, was wiederum Ihre Marke verbessert und Ihre Erfolgschancen erhöht.

Die Ethik der Datenerhebung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten, als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die unten gegebenen Tipps sorgen für eine bessere, datenschutzbewusstere Benutzererfahrung, aber viele von ihnen sind gesetzlich vorgeschrieben, um die Vorschriften einzuhalten, z.B. die [DSGVO](https://gdpr.eu/) in der EU. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften an Ihrem Standort für Sie gelten und was Sie tun müssen, um diese einzuhalten.

### Sammeln Sie nicht mehr Daten, als Sie benötigen

Es ist verlockend, von Ihren Benutzern viele Daten zu verlangen, weil Sie glauben, dass sie in Zukunft nützlich sein könnten. Jeder zusätzliche Datensatz, den Sie sammeln, birgt jedoch ein Risiko für die Privatsphäre Ihrer Benutzer und erhöht die Wahrscheinlichkeit, dass sie den Schritt, den sie gerade durchführen (sei es das Ausfüllen einer Umfrage oder die Anmeldung für einen Dienst), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch in Betracht ziehen, ob Sie das, was Sie benötigen, durch weniger granulare Datenanforderungen erreichen können. Ein Beispiel wäre, statt die Lieblingsprodukte eines Benutzers abzufragen, könnten Sie ihn zwischen allgemeinereren Kategorien auswählen lassen.

Die beste Art, den Datenschutz der Benutzer zu schützen, besteht jedoch darin, die gesammelten Daten zu minimieren. Beziehen Sie sich auf das vorherige Beispiel, Sie könnten die gleichen Daten durch Betrachtung der Kaufhistorie des Benutzers ableiten. Ein weiteres Beispiel: Benutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht dazu zwingen, ein Konto zu erstellen; wenn es für den Betrieb des Dienstes nicht erforderlich ist, sollte es ihre Entscheidung sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie eine Datenschutzrichtlinie auf Ihrer Website veröffentlichen, die klar angibt:

- Welche Daten Sie sammeln
- Auf welche Weise Sie die Daten verwenden
- Mit welchen Parteien Sie die Daten eventuell teilen, und eine Erklärung, dass Sie Benutzer um ihre Zustimmung bitten werden, bevor Sie teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Möglichkeiten, wie Benutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie es wünschen

Ihre Benutzer sollten die Möglichkeit haben, Ihre Datenschutzerklärung zu lesen und zuzustimmen, wenn sie Ihnen Daten geben. Sie sollten kontrollieren können, ob sie damit einverstanden sind und Ihren Bedingungen zustimmen. Und wie oben angegeben, sollten sie auch sehen können, welche Daten Sie über sie gesammelt haben, und sie löschen können, wenn sie es wünschen.

Nachdem Sie Ihre Datenschutzerklärung veröffentlicht haben, müssen Sie sicherstellen, dass Sie sie einhalten — das Einhalten Ihrer Ankündigungen ist sehr wichtig, um das Vertrauen der Benutzer zu stärken. Sie sollten nur die Daten sammeln, die Sie sagen, dass Sie sammeln, und sie nur für den Zweck verwenden, den Sie angegeben haben. Wenn jemand in Ihrem Unternehmen eine clevere neue Verwendung vorhandener Daten entwickelt, ist dies nach den Bedingungen Ihrer Politik immer noch nicht in Ordnung, wenn nicht angegeben ist, dass Sie sie für diesen Zweck verwenden. Wenn Benutzer der Nutzung ihrer Daten für einen bestimmten Zweck zugestimmt haben und dieser Zweck ausgeweitet wird, müssen Sie möglicherweise in Betracht ziehen, eine neue Zustimmung einzuholen.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Früher haben wir erwähnt, dass den Benutzern eine Möglichkeit gegeben werden sollte, zu sehen, welche Daten Sie über sie gesammelt haben, und sie zu löschen, wenn sie es wünschen. Sie könnten dies möglicherweise im Rahmen derselben Erfahrung bieten, die sie zur Löschung ihres Kontos verwenden können (ihre Daten gehen damit einher), oder sie zu zwei separaten Optionen machen. In jedem Fall sollten die Optionen leicht zu finden sein.

Dem Benutzer die Möglichkeit zu geben, wann ein erheblicher Teil seiner Daten gelöscht wird, ist sehr ermächtigend und stärkt das Vertrauen, aber es kann einige Daten geben, deren Löschung Sie selbst in die Hand nehmen möchten. Zum Beispiel könnten einige Daten nur für ein paar Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Verwaltung einer Benutzersitzung verwendet werden, während der Benutzer eingeloggt ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich, um kurzlebige Benutzerdaten zu löschen — er weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu löschen. Zum Beispiel könnten Sie Ihren Server beauftragen, ihn zusammen mit einer "Ausloggen-Bestätigungsseite" zu senden, damit die Daten des Benutzers sicher entfernt werden, sobald er sich ausgeloggt hat.

## Reduzieren Sie das Tracking

Früher haben wir das Tracking diskutiert und einige der unethischen Zwecke, für die es verwendet wird. Wir brauchen nicht zu erläutern, wie solche Verwendungszwecke das Vertrauen der Benutzer unterminieren können; wo immer möglich, sollten Sie potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Anwendungen verwenden, wie z. B. zur Übertragung von Anmeldestatus oder anderen Personalisierungsstatus zwischen Seiten.

Erinnern Sie sich auch daran, dass Browser alle beginnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie alternative Technologien implementieren, um gängige Anwendungsfälle zu erreichen. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Menge der Tracking-Aktivitäten begrenzen, auf die Sie angewiesen sind, und/oder gewünschte Datenpersistenz auf andere Weise implementieren. Weitere Informationen finden Sie unter [Transitioning from third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Natürlich wäre es einfach, den Datenschutz zu verwalten, wenn Sie sich nur auf Ressourcen konzentrieren müssten, die Sie selbst erstellt haben (Code, Cookies, Websites usw.). Die eigentliche Herausforderung liegt darin, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen nutzen wird. Dazu gehören eingebettete Drittanbieter-Inhalte in `<iframe>`s, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung und bieten viel Leistung. Dennoch hat jede Drittanbieter-Ressource, die Sie in Ihre Site aufnehmen, potenziell die gleichen Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie in Ihre Site eingebunden sind:

- JavaScript, das innerhalb von Drittanbieter-Inhalten ausgeführt wird, die über ein `<iframe>` in Ihre Site eingebettet sind, ist durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten im übergeordneten Browsing-Kontext hätte.
- Ein Drittanbieter-Skript jedoch, das direkt über ein {{htmlelement("script")}}-Element in Ihre Seite eingebunden ist, _würde_ auf Ihre anderen Skripte und Daten zugreifen können, unabhängig davon, ob es auf Ihrer Site oder einer anderen gehostet wurde. Es wäre effektiv First-Party-Code. Ein böswilliges Script auf diese Weise könnte heimlich die Daten Ihrer Benutzer stehlen, indem es sie beispielsweise an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Site verwenden, zu prüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und welche Datenschutzrichtlinien sie haben. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das sie verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen ein Bild davon geben können, welche Anfragen eine Website stellt, zum Beispiel den [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieter-Ressourcen geprüft haben und verstehen, was sie tun, sollten Sie deren Nachteile als Trade-off für den Wert betrachten, den sie bieten. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber viele Benutzerdaten sammelt, könnten Sie:

1. Diese Abwägung akzeptieren, Ihre Datenschutzrichtlinie mit Details dazu aktualisieren und hoffen, dass dies das Vertrauen Ihrer Benutzer nicht zu sehr beeinträchtigt.
2. Nach einem Alternativtool suchen, das weniger datenhungrig ist.
3. Ihr eigenes Tool entwickeln.

Die folgende Liste bietet einige Tipps, wie Sie Risiken für die Privatsphäre, die mit der Verwendung von Drittanbieter-Ressourcen verbunden sind, mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, prüfen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Datenschutzbeeinträchtigung zu erzielen. Zum Beispiel könnte es Spaß machen, einen Social-Media-Post-Viewer auf Ihrer Website einzubetten, aber ist er wirklich notwendig? Wäre ein Link auf Ihre Social-Media-Seite nicht ausreichend? Auch haben einige Drittanbieter-Dienste datenschutzerhöhende Optionen. Siehe beispielsweise YouTubes [Embed videos & playlists > Turn on privacy-enhanced mode](https://support.google.com/youtube/answer/171780).
- Wo möglich sollten Sie Drittparteien daran hindern, einen {{httpheader("Referer")}}-Header zu erhalten, wenn Sie Anfragen an sie stellen. Dies kann in einer ziemlich granularen Weise geschehen, beispielsweise indem [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) auf externen Links hinzugefügt wird. Oder Sie könnten dies globaler für die Seite oder Website festlegen, zum Beispiel durch Verwendung des {{httpheader("Referrer-Policy")}}-Headers.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}}-HTTP-Header, um den Zugriff auf "leistungsstarke Funktionen" der API zu kontrollieren (z. B. Benachrichtigungen, Geolokationsdaten, Zugriff auf Medienstreams von Webcams usw.). Dies kann nützlich für den Datenschutz sein, da es verhindert, dass Drittparteien unerwartete Dinge mit diesen Funktionen tun, und Benutzer möchten nicht unnötig mit Berechtigungsaufforderungen bombardiert werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" innerhalb von Drittparteien steuern, die in {{htmlelement("iframe")}}-Elemente eingebettet sind, indem Berechtigungsrichtlinien in einem `allow`-Attribut direkt auf dem `<iframe>` spezifiziert werden.

  > [!NOTE]
  > Siehe auch unseren [Permissions-Policy-Leitfaden](/de/docs/Web/HTTP/Permissions_Policy) für weitere Informationen und Beispiele sowie [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools, einschließlich eines Policy-Generators.

- Verwenden Sie das `sandbox`-Attribut des {{htmlelement("iframe")}}, um die Nutzung bestimmter Funktionen innerhalb des eingebetteten Inhalts im `<iframe>` zu erlauben oder zu verbieten — dies umfasst Dinge wie Downloads, Formularübermittlungen, Modale und Skripting.

> [!NOTE]
> Siehe [Third parties](https://web.dev/learn/privacy/third-parties/) auf web.dev für weitere nützliche Informationen zur Prüfung und mehr.

## Benutzerdaten schützen

Sie müssen sicherstellen, dass Benutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist mehr ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es ist erwähnenswert — eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Richtlinien zum Schutz der Daten Ihrer Benutzer:

- Sicherheit ist schwer richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die Daten erhebt — insbesondere wenn es sich um sensible Daten wie Anmeldeinformationen handelt — macht es Sinn, eine vertrauenswürdige Lösung von einem angesehenen Anbieter zu verwenden. Beispielsweise werden in jedem respektierten serverseitigen Framework integrierte Funktionen zum Schutz vor allgemeinen Schwachstellen vorhanden sein. Sie könnten auch in Betracht ziehen, ein spezielles Produkt für Ihren Zweck zu verwenden — zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfrage-Provider.
- Wenn Sie Ihre eigene Lösung zum Sammeln von Benutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie wissen, was Sie tun. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie Multifizierungs-Authentifizierung (MFA), um einen besseren Schutz zu bieten. Erwägen Sie den Einsatz einer dedizierten API, wie der [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den clientseitigen Teil der App zu optimieren.
- Erzwingen Sie bei der Erhebung von Benutzeranmeldeinformationen starke Passwörter, damit die Kontodaten Ihrer Benutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Benutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; auf diese Weise müssen sie sich nicht darum kümmern, sich daran zu erinnern, oder ein Sicherheitsrisiko schaffen, indem sie sie aufschreiben.
- Schließen Sie keine sensiblen Daten in URLs ein — wenn ein Dritter die URL abfängt (zum Beispiel über den {{httpheader("Referer")}}-Header), könnte er diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie die Verwendung von Tools wie [Content Security Policy](/de/docs/Web/HTTP/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um ein Set von Funktionsnutzungen auf Ihrer Site durchzusetzen, das es schwieriger macht, Schwachstellen einzuführen. Seien Sie dabei vorsichtig — wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Skript angewiesen ist, um zu funktionieren, könnten Sie am Ende die Funktionalität Ihrer Site beeinträchtigen. Das ist etwas, das Sie bei der Prüfung Ihrer Drittanbieter-Ressourcen (siehe [Verwalten Sie Drittanbieter-Ressourcen sorgfältig](#verwalten_sie_drittanbieter-ressourcen_sorgfältig)) untersuchen können.

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
