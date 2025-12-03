---
title: Privatsphäre im Web
slug: Web/Privacy
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Menschen nutzen Websites für mehrere wichtige Aufgaben wie Banking, Einkaufen, Unterhaltung und um ihre Steuern zu bezahlen. Dabei sind sie gezwungen, persönliche Informationen mit diesen Seiten zu teilen. Nutzer setzen ein gewisses Maß an Vertrauen in die Seiten, mit denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten, könnten sie verwendet werden, um Nutzer auszunutzen, beispielsweise indem sie profiliert, mit unerwünschten Werbungen gezielt angesprochen oder gar ihre Identität oder ihr Geld gestohlen wird.

Moderne Browser verfügen bereits über zahlreiche Funktionen zum Schutz der Privatsphäre der Nutzer im Web, aber das reicht nicht aus. Um eine vertrauenswürdige und die Privatsphäre respektierende Erfahrung zu schaffen, müssen Entwickler ihre Webseiten-Nutzer über bewährte Praktiken aufklären (und diese durchsetzen). Entwickler sollten auch Seiten erstellen, die so wenig Daten wie möglich von den Nutzern sammeln, die Daten verantwortungsbewusst verwenden und sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browser-Funktionen, die automatisch den Datenschutz der Nutzer schützen.
- Schauen wir uns an, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten der Nutzer unerwartet von Dritten erlangt werden.

## Definition von Datenschutz-Begriffen und -Konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web genutzt werden können, definieren wir einige wichtige Begriffe.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen — sie sind eng miteinander verbunden, und man kann wirklich keine datenschutzfreundlichen Websites ohne gute Sicherheit schaffen. Daher sollen beide definiert werden.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und sie nicht unverantwortlich zu nutzen. Beispielsweise sollten Sie den Nutzern klar mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Nutzer müssen die Möglichkeit haben, Ihren Nutzungsbedingungen für Daten zuzustimmen, Zugriff auf alle von Ihnen gespeicherten Daten zu haben und diese zu löschen, wenn sie nicht mehr von Ihnen gehalten werden sollen. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts untergräbt das Vertrauen der Nutzer mehr, als wenn ihre Daten in einer Weise genutzt und geteilt werden, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es inzwischen Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die [DSGVO der EU](https://gdpr.eu/)).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl Unternehmens- (interne) als auch Nutzer- und Partnerdaten (externe). Eine robuste Datenschutzrichtlinie, die Ihre Nutzer Ihnen vertrauen lässt, nützt nichts, wenn Ihre Sicherheit schwach ist und böswillige Parteien ihre Daten dennoch stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Nutzer beschreiben. Beispiele beinhalten:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktdaten
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Kennungen
- Körperliche Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Krankheiten
- Benutzernamen, wenn sie mit einer Person verknüpft werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Nutzer nicht öffentlich teilen möchten und die privat gehalten werden müssen (d.h. Informationen, die nur von einer bestimmten Gruppe autorisierter Nutzer zugänglich sind). Einige private Daten sind gesetzlich privat (z.B. medizinische Daten), und einige sind eher aufgrund persönlicher Vorlieben privat.

### Personenbezogene Informationen

Im Anschluss an den obigen Abschnitt sind **personenbezogene Informationen** (PII) Informationen, die verwendet werden können, um eine bestimmte Person zu verfolgen und/oder zu identifizieren, entweder vollständig oder teilweise. Wenn eine Website beispielsweise eine Liste von Nutzernamen und Postleitzahlen online durchstößt, könnte ein Angreifer fast sicher diese Informationen nutzen, um ihre vollständigen Adressen zu finden. Selbst wenn kein vollständiges Durchsickern passiert, ist es dennoch möglich, Nutzer durch weniger offensichtliche Mittel zu identifizieren, wie die Browser, die sie verwenden, die Geräte, die sie nutzen, spezifische Schriftarten, die sie installiert haben, und so weiter.

### Verfolgung

**Verfolgung** bezieht sich auf den Prozess, die Aktivität eines Nutzers über viele verschiedene Websites hinweg aufzuzeichnen. Dies kann auf verschiedene Arten geschehen, zum Beispiel:

- Überprüfung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die über verschiedene Websites hinweg gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationspunkte über den Nutzer zu erfahren.
- Überprüfung des {{httpheader("Referer")}} Headers, um zu sehen, von wo ein Nutzer navigiert ist.
- Einfügen von Parametern in die URLs von eingehenden Links (z.B. in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder in Marketing-E-Mails), die der verlinkten Seite zeigen können, woher der Link stammt, Teil welcher Marketing-Kampagne er ist, die E-Mail-Adresse oder eine andere Kennung des Nutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Linkdekorierung** bezeichnet und führt zu Link-URLs, die folgendermaßen aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Umleitungsverfolgung, bei der Tracker den Nutzer für einen Moment (und unmerklich) auf die Webseite des Trackers umleiten, um den Nutzer über den Erstspeicher zu verfolgen. Dies erlaubt Trackern, Drittanbieter-Cookies zu umgehen, die blockiert werden. Wenn Sie beispielsweise eine Produktbewertung lesen und darauf klicken, um es zu kaufen, navigieren Sie möglicherweise unwissentlich zuerst zum Umleitungs-Tracker _und dann_ zum Einzelhändler. Der Tracker wird somit als Erstpartei geladen und kann Tracking-Daten mit den Kennungen verknüpfen, die sie in ihren Erstanbieter-Cookies gespeichert haben, bevor sie den Nutzer zum Einzelhändler weiterleiten.

Verfolgungsdaten können dazu verwendet werden, ein Profil eines Nutzers und seiner Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und unterschiedliche Grade der Ärgerlichkeit verursachen kann. Beispielweise:

- **Gezielte Werbung**: Jeder hat schon die unheimliche Erfahrung gemacht, auf einem Gerät nach einigen Artikeln zu recherchieren und dann plötzlich von Anzeigen für dieselben Produkte auf all seinen anderen Geräten bombardiert zu werden.
- **Daten verkaufen oder teilen**: Einige Dritte sind dafür bekannt, Verfolgungsdaten zu sammeln und sie dann zu verkaufen oder mit anderen zu teilen, die sie für verschiedene Zwecke nutzen, wie zielgerichtete Anzeigen. Dies ist natürlich hochgradig unethisch und kann auch illegal sein, je nachdem, wo auf der Welt es passiert.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Nutzer unfair benachteiligt wird. Stellen Sie sich zum Beispiel eine Versicherungsgesellschaft vor, die Datenpunkte über einen potenziellen Kunden herausfindet, die dieser nicht zu teilen zugestimmt hat, und diese als Rechtfertigung für die Erhöhung der Versicherungsprämien nutzt.

### Fingerabdrucktechnik

Ein Prozess, der sehr eng mit der Verfolgung verbunden ist, ist die **Fingerabdrucktechnik**: dies bezieht sich speziell auf das _Identifizieren_ von Nutzern, indem eine Sammlung von Informationspunkten über sie aufgebaut wird, die sie von anderen Nutzern unterscheiden. Dies könnte alles sein, von Cookie-Inhalten bis hin zu dem Browser, den sie verwenden, und den lokal installierten Schriftarten.

Moderne Browser ergreifen Maßnahmen, um Angriffen basierend auf Fingerabdrücken vorzubeugen, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo Informationen verfügbar sein müssen, Variationen oder "Rauschen" einführen, die verhindern, dass sie für Identifikationszwecke verwendet werden können.

Beispielsweise, wenn eine Website das Zeitintervall im Browser eines Nutzers abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit nützlich sein als Faktor in der Fingerabdruckbildung. Aus diesem Grund führen Browser typischerweise eine geringe Variabilität bei Zeitnehmern ein, um sie weniger nützlich für die Identifizierung des Systems des Nutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen von Browsern

Browserhersteller sind sich der Notwendigkeit bewusst, die Privatsphäre der Nutzer zu schützen und die negativen Auswirkungen von Verfolgung, Fingerabdrücken etc. auf die Benutzererfahrung zu minimieren. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen mildern. In diesem Abschnitt betrachten wir verschiedene Kategorien des Datenschutzes, den Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, weil es Dritte daran hindert, übertragene Daten abzufangen und böswillig zu verwenden, beispielsweise zur Verfolgung.

Alle Browser bewegen sich in Richtung einer Standardanforderung von HTTPS; dies ist praktisch bereits der Fall, da man im Web ohne dieses Protokoll nicht viel tun kann.

Verwandte Themen sind folgende:

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Überprüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die helfen kann, falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokoll-Downgrade und Cookie-Übernahme-Angriffen zu schützen, indem Websites den Clients mitteilen, dass sie nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Während HTTP/2 technisch nicht <em>verschlüsselt</em> sein muss, unterstützen die meisten Browserentwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es also als sicherheits-/datenschutzfördernde Funktion betrachtet werden.

### Zustimmung für "leistungsstarke Funktionen"

Die sogenannten "leistungsstarken" Web-API-Funktionen, die Zugang zu potenziell sensiblen Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar, was im Wesentlichen HTTPS-only bedeutet. Darüber hinaus sind diese Webfunktionen hinter einem System von Benutzerberechtigungen abgesichert. Nutzer müssen explizit zustimmen, Funktionen wie Benachrichtigungen zuzulassen, auf Geolokationsdaten zuzugreifen, den Browser in den Vollbildmodus zu versetzen, auf Medienströme von Webcams zuzugreifen, Web-Zahlungen zu nutzen usw.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Verfolgungsfunktionen implementiert, die automatisch den Datenschutz ihrer Nutzer verbessern. Viele davon blockieren oder beschränken die Möglichkeit von auf der obersten Ebene eingebetteten Drittanbieterseiten, auf Cookies zuzugreifen, Skripte zu verfolgen usw.

- Der Standardwert des `SameSite`-Attributs des {{httpheader("Set-Cookie")}} Headers wurde auf `Lax` aktualisiert, um besseren Schutz gegen Verfolgung und {{Glossary("CSRF", "CSRF")}}-Angriffe zu bieten. Weitere Informationen finden Sie unter [Steuern von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite).
- Browser haben angefangen, Drittanbieter-Cookies standardmäßig zu blockieren. Weitere Details finden Sie unter [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies).
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die den Datenschutz nicht gefährden, oder um übliche Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Browsererweiterungen helfen dabei ebenfalls, zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Umleitungsverfolgungsschutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Client-seitige Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um die Privatsphäre ihrer Nutzer zu verbessern. Die unten aufgeführten Abschnitte behandeln die wichtigsten dieser Maßnahmen. Einige der Kategorien sind nicht rein technische Aufgaben als solche und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln aus verschiedenen Gründen viele verschiedene Daten von ihren Nutzern:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Menge anderer PII für alles von der Personalisierung der Seite bis hin zu Kundenzufriedenheitsumfragen.
- Browsing-Gewohnheiten auf ihrer Seite und anderen Seiten, um den Erfolg von Seiten und Funktionen zu messen.
- Und vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Möglichkeit, integritätstreu zu handeln, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen, was wiederum Ihre Marke und Ihre Erfolgsaussichten verbessert.

Die Ethik der Datensammlung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten als nötig
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die hier bereitgestellten Tipps sorgen für eine bessere, datenschutzbewusstere Benutzererfahrung, aber viele von ihnen sind gesetzlich vorgeschrieben, um den Vorschriften zu entsprechen, zum Beispiel der [DSGVO](https://gdpr.eu/) in der EU. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften in Ihrem Gebiet gelten, und was Sie tun müssen, um ihnen zu entsprechen.

### Sammeln Sie nicht mehr Daten als nötig

Es ist verlockend, viele Daten von Ihren Nutzern abzufragen, weil Sie denken, dass diese in der Zukunft nützlich sein könnten. Doch jedes zusätzlich gesammelte Datenbit erhöht das Risiko für die Privatsphäre Ihrer Nutzer und die Wahrscheinlichkeit, dass Nutzer den Schritt abbrechen, den sie gerade ausführen (egal ob es sich um das Ausfüllen einer Umfrage oder die Anmeldung für einen Dienst handelt).

Es ist sinnvoll, Daten zu anonymisieren. Sie sollten auch in Betracht ziehen, ob Sie das, was Sie benötigen, durch eine weniger detaillierte Datenerhebung erhalten können. Zum Beispiel, anstatt einen Nutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn bitten, zwischen allgemeineren Kategorien zu wählen.

Der beste Weg, die Privatsphäre der Nutzer zu schützen, besteht jedoch darin, die gesammelten Daten zu minimieren. Im vorherigen Beispiel könnten Sie dieselben Daten ableiten, indem Sie die Kaufhistorie der Nutzer betrachten. Ein weiteres Beispiel: Nutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, ein Konto zu erstellen; wenn es nicht zur Funktionsweise des Dienstes erforderlich ist, sollte es ihre Entscheidung sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie auf Ihrer Site eine Datenschutzerklärung veröffentlichen, die klar angibt:

- Daten, die Sie sammeln
- Wege, wie Sie die Daten verwenden
- Parteien, mit denen Sie die Daten teilen würden, wenn überhaupt, und eine Erklärung, dass Sie die Zustimmung des Nutzers einholen, bevor Sie die Daten teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Wege, wie Nutzer die von Ihnen gesammelten Daten einsehen und löschen können, wenn sie dies wünschen

Ihre Nutzer sollten die Möglichkeit erhalten, Ihre Datenschutzerklärung zu lesen und ihr zuzustimmen, wenn sie Ihnen Daten zur Verfügung stellen. Sie sollten in der Lage sein zu entscheiden, ob sie damit einverstanden sind und Ihren Bedingungen zustimmen. Und wie oben angegeben, sollten sie auch die Möglichkeit haben, die von Ihnen gesammelten Daten einzusehen und zu löschen, wenn sie dies wünschen.

Wenn Sie Ihre Datenschutzerklärung veröffentlicht haben, müssen Sie sicherstellen, dass Sie sich an diese halten — tun, was Sie sagen, ist sehr wichtig, um das Vertrauen der Nutzer zu gewinnen. Sie sollten nur die Daten sammeln, die Sie sagen, dass Sie sammeln werden, und sie nur für den Zweck verwenden, den Sie angeben. Wenn jemand aus Ihrem Unternehmen auf eine clevere neue Art und Weise kommt, vorhandene Daten zu nutzen, dann ist das immer noch nicht in Ordnung gemäß den Bestimmungen Ihrer Richtlinie, wenn nicht angegeben ist, dass Sie sie für diesen Zweck verwenden werden. Wenn Nutzer der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und dieser Zweck erweitert wird, müssen Sie möglicherweise über eine neue Zustimmung nachdenken.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Vorhin erwähnten wir, den Nutzern eine Möglichkeit zu geben, die von Ihnen gesammelten Daten einzusehen und zu löschen, wenn sie dies wünschen. Sie könnten dies möglicherweise als Teil derselben Erfahrung anbieten, die sie nutzen können, um ihr Konto zu löschen (ihre Daten gehen damit), oder sie zu zwei separaten Optionen machen. In jedem Fall sollten die Optionen leicht zu finden sein.

Dem Nutzer die Wahl zu lassen, wann bedeutende Teile von Daten gelöscht werden, ist sehr ermutigend und schafft Vertrauen, aber es gibt möglicherweise einige Daten, deren Löschung Sie selbst vornehmen möchten. Zum Beispiel könnten einige Daten nur für ein paar Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Durchführung einer Sitzung eines Nutzers verwendet werden, während er eingeloggt ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Antwort-Header ist sehr nützlich zum Löschen von kurzlebigen Benutzerdaten — er weist den Browser an, seinen Cache und/oder Cookies und/oder seinen Speicher (z.B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Daten) zu bereinigen. Zum Beispiel könnten Sie Ihren Server dazu bringen, ihn zusammen mit einer "Logout-Bestätigungsseite" zu senden, so dass, sobald der Benutzer abgemeldet ist, seine Daten sicher entfernt werden.

## Reduzieren Sie die Verfolgung

Vorhin sprachen wir über Verfolgung, und einige der unethischen Zwecke, für die sie verwendet wird. Wir brauchen nicht zu erwähnen, wie solche Verwendungen das Vertrauen der Nutzer untergraben können; wann immer möglich, sollten Sie potenzielle Verfolgungsmechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Zwecke verwenden, wie das Übertragen von Anmelde- oder anderen Personalisierungsstatus über Websites hinweg.

Denken Sie auch daran, dass alle Browser beginnen, standardmäßig Drittanbieter-Cookies zu blockieren und alternative Technologien implementieren, um gängige Anwendungsfälle zu ermöglichen. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Anzahl der Verfolgungsaktivitäten, auf die Sie sich verlassen, einschränken und/oder das gewünschte Beibehalten von Informationen auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Natürlich wäre es leicht, den Datenschutz zu verwalten, wenn Sie sich nur um Ressourcen sorgten, die Sie selbst erstellt haben (Code, Cookies, Websites usw.). Die wirkliche Herausforderung besteht darin, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen nutzen wird. Dies kann Inhalte von Dritten beinhalten, die in \<iframe\>s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Web-Entwicklung und bieten viel Leistung. Jede Drittanbieter-Ressource, die Sie auf Ihrer Seite zulassen, könnte jedoch potenziell die gleichen Berechtigungen wie Ihre eigenen Ressourcen haben; es hängt alles davon ab, wie sie auf Ihre Seite eingebunden ist:

- JavaScript, das innerhalb von Drittanbieter-Inhalten ausgeführt wird, die über ein \<iframe\> auf Ihrer Seite eingebettet sind, wird durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten hat, die im obersten Browserkontext enthalten sind.
- Jedoch hätte ein Drittanbieterskript, das direkt in Ihre Seite über ein {{htmlelement("script")}}-Element eingebunden ist, Zugriff auf Ihre anderen Skripte und Daten, unabhängig davon, ob es auf Ihrer Seite oder einer anderen Seite gehostet wird. Es wäre effektiv ein Erstanbieter-Code. Ein bösartiges Skript, das auf diese Weise eingebunden ist, könnte heimlich die Daten Ihrer Nutzer stehlen, indem es diese zum Beispiel zu einem Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen zu überprüfen, die Sie auf Ihrer Seite verwenden. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und welche Datenschutzrichtlinien sie haben. Ihre sorgfältig gestaltete Datenschutzerklärung ist nutzlos, wenn Sie ein Drittanbieterskript verwenden, das sie verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, sich ein Bild davon zu machen, welche Anfragen eine Seite macht, zum Beispiel der [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieter-Ressourcen überprüft haben und verstehen, was sie tun, sollten Sie ihre Nachteile als Kompromiss für den Wert, den sie bieten, betrachten. Wenn ein Drittanbieterskript kostenlos ist und wirklich nützlich, aber ziemlich viele Benutzerdaten sammelt, könnten Sie:

1. Diesen Kompromiss akzeptieren, Ihre Datenschutzerklärung aktualisieren, um dessen Details einzuschließen, und hoffen, dass es das Vertrauen Ihrer Nutzer nicht allzu sehr beeinträchtigt.
2. Nach einer Alternative, weniger datenhungrigen Drittanbieterlösung suchen.
3. Ihr eigenes Tool erstellen.

Die folgende Liste bietet einige Tipps, wie Sie die mit der Verwendung von Drittanbieter-Ressourcen verbundenen Datenschutzrisiken mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, prüfen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Datenschutzwirkung zu erzielen. Beispielsweise könnte es Spaß machen, einen Viewer für Social-Media-Posts auf Ihrer Seite einzubetten, aber ist es wirklich notwendig? Würde nicht ein Link zu Ihrer Social-Media-Seite ausreichen? Zudem haben einige Drittanbieter-Dienste Optionen zur Verbesserung der Privatsphäre. Siehe zum Beispiel: YouTube's [Videos und Playlists einbetten > Datenschutzmodus aktivieren](https://support.google.com/youtube/answer/171780).
- Wo möglich, sollten Sie Drittanbieter daran hindern, einen {{httpheader("Referer")}}-Header zu erhalten, wenn Sie Anfragen an sie senden. Dies kann ziemlich detailliert durchgeführt werden, zum Beispiel durch Einfügen von [rel="noreferrer"](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) in externe Links. Oder Sie könnten dies globaler für die Seite oder Site festlegen, zum Beispiel durch Verwendung des {{httpheader("Referrer-Policy")}}-Headers.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf "leistungsstarke" API-Funktionen (wie Benachrichtigungen, Geolokationsdaten, Zugriff auf Medienströme von Webcams usw.) zu steuern. Dies kann für den Datenschutz nützlich sein, weil es verhindert, dass Drittanbieterseiten unerwartete Dinge mit diesen Funktionen tun, und Nutzer nicht unnötig mit Berechtigungsanfragen bombardiert werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" innerhalb von Drittanbieterseiten steuern, die in {{htmlelement("iframe")}}-Elementen eingebettet sind, indem Sie Berechtigungsrichtlinien innerhalb eines `allow`-Attributs im `<iframe>` selbst angeben.

  > [!NOTE]
  > Siehe auch unseren [Permissions-Policy-Leitfaden](/de/docs/Web/HTTP/Guides/Permissions_Policy) für mehr Informationen und Beispiele, und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Werkzeuge einschließlich eines Policy-Generators.

- Verwenden Sie das {{htmlelement("iframe")}} `sandbox`-Attribut, um die Verwendung bestimmter Funktionen innerhalb der im `<iframe>` eingebetteten Inhalte zu erlauben oder zu verbieten — dazu gehören Dinge wie Downloads, Formulareinsendungen, Modale und Skripte.

> [!NOTE]
> Siehe [Drittanbieter](https://web.dev/learn/privacy/third-parties/) auf web.dev für zusätzliche nützliche Informationen zum Auditieren und mehr.

## Benutzerdaten schützen

Sie müssen sicherstellen, dass Benutzerdaten sicher übertragen und gespeichert werden, sobald sie gesammelt wurden. Dies ist mehr ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es sei hier erwähnt — eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit schwach ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Anleitungen zum Schutz Ihrer Benutzerdaten:

- Sicherheit ist schwer richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die die Datensammlung umfasst — insbesondere wenn es sich um sensible Daten wie Anmeldeinformationen handelt — macht es Sinn, eine angesehene Lösung von einem gut respektierten Anbieter zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework über eingebaute Funktionen verfügen, um vor häufigen Schwachstellen zu schützen. Sie könnten auch die Verwendung eines spezialisierten Produkts für Ihren Zweck in Betracht ziehen — zum Beispiel als Identitätsanbieterlösung oder einen sicheren Online-Umfrageanbieter.
- Wenn Sie Ihre eigene Lösung zur Sammlung von Benutzerdaten herausbringen möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitstechniker, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} (MFA), um besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die clientseitige App zu optimieren.
- Wenn Sie Informationen zur Benutzeranmeldung sammeln, erzwingen Sie starke Passwörter, damit die Kontodaten Ihrer Nutzer nicht einfach erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsvorfälle. Ermutigen Sie Ihre Nutzer, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; auf diese Weise müssen sie sich nicht um das Merken der Passwörter kümmern oder ein Sicherheitsrisiko durch Aufschreiben schaffen.
- Schließen Sie keine sensiblen Daten in URLs ein — wenn eine dritte Partei die URL abfängt (zum Beispiel über den {{httpheader("Referer")}}-Header), könnte sie diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie den Einsatz von Tools wie [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), um auf Ihrer Seite eine Reihe von Funktionalitäten durchzusetzen, die es schwerer machen, Schwachstellen einzuführen. Seien Sie vorsichtig, wenn Sie dies tun — wenn Sie die Verwendung einer Funktion blockieren, von der ein Drittanbieterskript abhängt, um zu funktionieren, könnten Sie die Funktionalität Ihrer Seite beschädigen. Dies ist etwas, das Sie bei der Überprüfung Ihrer Drittanbieter-Ressourcen (siehe [Verwalten Sie Drittanbieter-Ressourcen sorgfältig](#verwalten_sie_drittanbieter-ressourcen_sorgfältig)) in Betracht ziehen können.

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org
