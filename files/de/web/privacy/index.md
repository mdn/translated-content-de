---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Bankgeschäfte, Einkäufe, Unterhaltung und das Bezahlen ihrer Steuern. Dabei sind sie oft gezwungen, persönliche Informationen mit diesen Seiten zu teilen. Nutzer:innen vertrauen darauf, dass die Websites, denen sie ihre Daten anvertrauen, sicher sind. Wenn diese Informationen in die falschen Hände geraten, könnten sie dazu verwendet werden, Nutzer:innen zu manipulieren, z. B. indem sie profiliert werden, mit ungewollten Werbeanzeigen belästigt werden oder sogar die Identität oder das Geld gestohlen wird.

Moderne Browser verfügen bereits über viele Funktionen, um die Privatsphäre der Nutzer:innen im Web zu schützen, aber das allein reicht nicht aus. Um eine vertrauenswürdige und datenschutzfreundliche Erfahrung zu schaffen, müssen Entwickler:innen ihre Webseitenbesucher:innen über gute Praktiken aufklären (und diese durchsetzen). Entwickler:innen sollten auch Websites schaffen, die so wenige Daten wie möglich von den Nutzer:innen erfassen, diese Daten verantwortungsbewusst nutzen und sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige damit verbundene Begriffe.
- Untersuchen wir, welche Browser-Funktionen automatisch den Datenschutz der Nutzer:innen schützen.
- Schauen wir, was Entwickler:innen tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Nutzer:innen unvorhergesehen von Dritten erlangt werden.

## Definition von Datenschutzbegriffen und Konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web zur Verfügung stehen, definieren wir einige wichtige Begriffe.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwierig, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verbunden, und man kann keine datenschutzfreundlichen Websites erstellen, ohne eine gute Sicherheit zu gewährleisten. Daher werden wir beide Begriffe definieren.

- **Datenschutz** bezieht sich darauf, den Nutzer:innen das Recht zu geben, zu kontrollieren, wie ihre Daten erfasst, gespeichert und verwendet werden, und diese Daten nicht unverantwortlich zu nutzen. Beispielsweise sollte klar kommuniziert werden, welche Daten gesammelt werden, mit wem sie geteilt werden und wie sie genutzt werden. Die Nutzer:innen müssen die Möglichkeit haben, den Nutzungsbedingungen zuzustimmen, auf alle gespeicherten Daten zuzugreifen und diese zu löschen, wenn sie nicht mehr wünschen, dass Sie diese halten. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts untergräbt das Vertrauen der Nutzer:innen mehr, als wenn ihre Daten auf nicht zugestimmte Weise genutzt und geteilt werden. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es inzwischen Gesetze, die die Datenschutzrechte der Verbraucher:innen schützen (z. B. die [DSGVO](https://gdpr.eu/) der EU).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies umfasst sowohl firmeninterne (interne) Daten als auch Nutzer:innen- und Partnerdaten (externe Daten). Eine robuste Datenschutzrichtlinie zu haben, die das Vertrauen der Nutzer:innen gewinnen lässt, ist nutzlos, wenn die Sicherheit schwach ist und böswillige Parteien dennoch ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die eine:n Nutzer:in beschreiben. Beispiele sind:

- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktdaten
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere amtliche Kennungen
- Physische Attribute wie Körpergröße, geschlechtliche Ausdrucksweise, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Beschwerden
- Benutzernamen, wenn sie mit einer Person in Verbindung gebracht werden können
- Hobbys, Interessen oder andere persönliche Präferenzen
- Biometrische Daten wie Fingerabdrücke oder Daten zur Gesichtserkennung

**Private Informationen** sind alle Informationen, die Nutzer:innen nicht öffentlich geteilt haben möchten und die privat bleiben müssen (d.h. Informationen, die nur von einer bestimmten Gruppe autorisierter Nutzer:innen zugänglich sind). Einige private Daten sind gesetzlich privat (z. B. medizinische Daten), und andere sind eher durch persönliche Präferenz privat.

### Personenbezogene Daten

Im Zusammenhang mit dem obigen Abschnitt beziehen sich **personenbezogene Daten** (PII) auf Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person zu identifizieren oder zu verfolgen. Wenn eine Website beispielsweise eine Liste mit Namen und Postleitzahlen der Nutzer:innen veröffentlicht, könnte eine böswillige Person diese Informationen fast sicher nutzen, um ihre vollständigen Adressen herauszufinden. Selbst wenn kein vollständiges Datenleck passiert, ist es dennoch möglich, Nutzer:innen über weniger offensichtliche Mittel zu identifizieren, wie die Browser, die sie benutzen, die Geräte, die sie verwenden, spezifische installierte Schriftarten, und so weiter.

### Tracking

**Tracking** bezieht sich auf den Vorgang, die Aktivitäten eines:einer Nutzer:in auf vielen verschiedenen Websites aufzuzeichnen. Dies kann auf verschiedene Arten geschehen, zum Beispiel:

- Anhand mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die auf verschiedenen Seiten gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den:die Nutzer:in zu erhalten.
- Durch das Untersuchen des {{httpheader("Referer")}}-Headers, um zu sehen, von wo ein:e Nutzer:in navigiert ist.
- Einschließlich von Parametern in den URLs eingehender Links (z. B. in eingebetteten Anzeigen, die auf Produktseiten verweisen, oder in Marketing-E-Mails), die der verlinkten Website verraten können, woher der Link stammt, zu welcher Marketing-Kampagne er gehört, die E-Mail-Adresse oder andere Kennungen des:der Nutzer:in, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect Tracking, bei dem Tracker den:die Nutzer:in für einen Moment imperzeptibel auf ihre Website umleiten, um First-Party-Speicher zu verwenden, um den:die Nutzer:in über Websites hinweg zu verfolgen. Dies ermöglicht es den Trackern, das Blockieren von Drittanbieter-Cookies zu umgehen. Wenn Sie beispielsweise eine Produktbewertung gelesen haben und daraufhin das Produkt kaufen möchten, navigieren Sie möglicherweise unwissentlich zuerst zum Redirect-Tracker und _dann_ zum Einzelhändler. Dies bedeutet, dass der Tracker als First-Party geladen wird und Tracking-Daten mit den Kennungen assoziiert werden können, die sie in ihren First-Party-Cookies gespeichert haben, bevor sie Sie an den Einzelhändler weiterleiten.

Tracking-Daten können verwendet werden, um ein Profil eines:einer Nutzer:in zu erstellen und dessen Interessen und Vorlieben zu bestimmen, was in der Regel negativ ist und in unterschiedlichem Maße nervig sein kann. Beispiele dafür sind:

- **Gezielte Werbung**: Jeder hat schon die beunruhigende Erfahrung gemacht, auf einem Gerät ein paar Produkte recherchiert zu haben, um dann plötzlich auf allen anderen Geräten mit Anzeigen für dieselben Produkte bombardiert zu werden.
- **Verkauf oder Weitergabe von Daten**: Einige Drittparteien sind dafür bekannt, Tracking-Daten zu sammeln und sie dann zu verkaufen oder mit anderen zu teilen, um sie für verschiedene Zwecke zu nutzen, wie z. B. gezielte Werbung. Dies ist natürlich hochgradig unethisch und könnte je nach Standort auch illegal sein.
- **Diskriminierung aufgrund von Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass die Nutzer:innen unfair benachteiligt werden. Stellen Sie sich beispielsweise vor, eine Versicherungsgesellschaft erfährt von Datenpunkten über einen potenziellen Kunden, die dieser nicht freiwillig geteilt hat, und verwendet diese Informationen als Begründung, um die Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein sehr eng mit dem Tracking verbundener Prozess ist das **Fingerprinting**: Es bezieht sich speziell darauf, _Nutzer:innen_ zu identifizieren, indem eine Vielzahl von Datenpunkten über sie gesammelt wird, die sie von anderen Nutzer:innen abheben. Dies könnte alles sein, von Cookie-Inhalten bis hin zu dem verwendeten Browser und den lokal installierten Schriftarten.

Moderne Browser ergreifen Maßnahmen, um Fingerprint-basierte Angriffe zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo die Informationen verfügbar gemacht werden müssen, Variationen oder "Rauschen" einführen, die verhindern, dass sie für Identifizierungszwecke genutzt werden.

Beispielsweise könnte der Vergleich der von einer Website abgefragten Zeit in einem Nutzerbrowser mit der vom Server gemeldeten Zeit als Faktor für Fingerprinting nützlich sein. Aufgrund dessen führen Browser normalerweise eine geringe Variabilität bei den Timern ein, um sie für die Identifizierung des Nutzer:innen-Systems weniger nützlich zu machen.

> [!NOTE]
> Weitere nützliche Informationen finden Sie unter [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev.

## Datenschutzfunktionen von Browsern

Browser-Anbieter sind sich der Notwendigkeit bewusst, die Privatsphäre der Nutzer:innen zu schützen und die negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Nutzererfahrung zu minimieren. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen abmindern. In diesem Abschnitt betrachten wir verschiedene Kategorien des Datenschutzes, die Browser automatisch anwenden.

### Standardmäßig HTTPS

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem Daten während des Transports über das Netzwerk verschlüsselt werden, und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, da es Dritten verhindert, übertragene Daten abzufangen und sie böswillig zu nutzen, z. B. zum Tracking.

Alle Browser bewegen sich darauf zu, HTTPS standardmäßig vorzugeben; dies ist praktisch bereits der Fall, da ohne dieses Protokoll nicht viel im Web möglich ist.

Verwandte Themen sind:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Überprüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die dazu verwendet werden kann, falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich gegen Protokoll-Downgrade- und Cookie-Hijacking-Angriffe zu schützen, indem Websites den Clients mitteilen, dass sie nur HTTPS zur Kommunikation mit dem Server verwenden dürfen.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Obwohl HTTP/2 technisch gesehen nicht _unbedingt_ Verschlüsselung verwenden muss, unterstützen die meisten Browser-Entwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung von Sicherheit und Datenschutz angesehen werden.

### Opt-in für "leistungsstarke Funktionen"

So genannte "leistungsstarke" Web-API-Funktionen, die Zugang zu potenziell sensiblen Daten und Operationen bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, d.h. im Grunde ausschließlich HTTPS. Nicht nur das, diese Web-Funktionen sind zudem hinter einem System von Benutzerberechtigungen geschützt. Nutzer:innen müssen ausdrücklich zustimmen, Funktionen wie das Erlauben von Benachrichtigungen, das Zugreifen auf Standortdaten, das Wechseln in den Vollbildmodus, das Zugreifen auf Medienstreams von Webcams, die Nutzung von Web-Zahlungen usw. zuzulassen.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz der Nutzer:innen verbessern. Viele davon blockieren oder beschränken die Möglichkeit, dass Drittanbieter-Inhalte, die in {{htmlelement("iframe")}} eingebettet sind, auf Cookies zugreifen können, die auf der Top-Level-Domain gesetzt sind, Tracking-Skripte ausführen usw.

- Der Standardwert des `SameSite`-Attributs der {{httpheader("Set-Cookie")}}-Header wurde auf `Lax` aktualisiert, um besseren Schutz vor Tracking und {{Glossary("CSRF", "CSRF")}}-Angriffen zu bieten. Weitere Informationen finden Sie unter [Steuern von Drittanbieter-Cookies mithilfe von `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite).
- Alle Browser beginnen, Drittanbieter-Cookies standardmäßig zu blockieren. Weitere Details finden Sie unter [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Guides/Third-party_cookies#how_do_browsers_handle_third-party_cookies).
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die den Datenschutz nicht gefährden, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu implementieren. Siehe [Umgang mit Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzungen für Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs – dazu gehören Firefox, Safari und Brave. Zusätzlich gibt es Browser-Erweiterungen, die dabei helfen, wie zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Client-seitige Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler:innen ergreifen können und sollten, um den Datenschutz für ihre Nutzer:innen zu verbessern. Die folgenden Abschnitte erörtern die wichtigsten. Einige der Kategorien sind nicht rein technische Aufgaben und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Sammeln Sie Daten ethisch

Unternehmen sammeln viele verschiedene Daten von ihren Nutzer:innen aus verschiedenen Gründen:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Vielzahl anderer personenbezogener Daten für alles, von der Seitenpersonalisierung bis hin zu Umfragen zur Kundenzufriedenheit.
- Surfgewohnheiten auf ihren Websites und anderen Seiten, um Metriken über den Erfolg von Seiten und Funktionen zu messen.
- Und vieles mehr.

Beim Sammeln von Daten von Ihren Kunden haben Sie die Gelegenheit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine gute Beziehung zu ihnen aufzubauen, was wiederum Ihre Marke und Ihre Erfolgschancen verbessert.

Die Ethik der Datensammlung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten, als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die unten gegebenen Tipps sorgen für eine bessere, datenschutzbewusstere Nutzererfahrung, aber viele von ihnen sind gesetzlich vorgeschrieben, um die Einhaltung von Vorschriften wie der [DSGVO](https://gdpr.eu/) in der EU sicherzustellen. Sie sollten sich darüber informieren, welche Vorschriften für Sie in Ihrem Gebiet gelten und was Sie tun müssen, um sie zu befolgen.

### Sammeln Sie nicht mehr Daten, als Sie benötigen

Es ist verlockend, nach vielen Daten von Ihren Nutzer:innen zu fragen, weil Sie denken, dass sie künftig nützlich sein könnten. Allerdings erhöht jedes zusätzliche Datenbit, das Sie sammeln, das Risiko für die Privatsphäre der Nutzer:innen und die Wahrscheinlichkeit, dass sie den Schritt, den sie gerade ausführen (sei es das Ausfüllen einer Umfrage oder die Anmeldung zu einem Dienst), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das, was Sie benötigen, weniger detailliert anfordern können. Ein Beispiel: Anstatt die:n Nutzer:in nach ihren:seinen Lieblingsprodukten zu fragen, könnten Sie sie bitten, zwischen allgemeineren Kategorien zu wählen.

Der beste Weg, um die Privatsphäre der Nutzer:innen zu schützen, ist jedoch, die gesammelten Daten zu minimieren. Beziehen Sie sich auf das vorherige Beispiel: Sie könnten dieselben Daten durch die Betrachtung der Kaufhistorie eines:einer Nutzer:in erschließen. Ein weiteres Beispiel: Nutzer:innen schätzen es, Produkte anonym zu kaufen. Sie sollten sie nicht zwingen, sich für ein Konto zu registrieren; wenn es nicht notwendig ist, dass der Dienst funktioniert, sollte es ihre Entscheidung sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie eine Datenschutzrichtlinie auf Ihrer Website veröffentlichen, die klar beschreibt:

- Welche Daten Sie sammeln
- In welcher Weise Sie die Daten verwenden
- Welche Parteien (falls vorhanden) Sie beabsichtigen, die Daten zu teilen, und dass Sie zuvor die Zustimmung der Nutzer:innen einholen werden
- Wie lange Sie die Daten aufbewahren, bevor sie gelöscht werden
- Möglichkeiten für die Nutzer:innen, die von Ihnen gesammelten Daten einzusehen und zu löschen, wenn sie dies möchten

Beim Bereitstellen der Daten sollten die Benutzer:innen die Möglichkeit erhalten, Ihre Datenschutzrichtlinie zu lesen und ihr zuzustimmen. Sie sollten die Kontrolle darüber erhalten, ob sie damit einverstanden sind und Ihre Bedingungen akzeptieren. Und wie oben erwähnt, sollten sie auch die Möglichkeit haben, zu sehen, welche Daten von ihnen gesammelt wurden, und diese auf Wunsch zu löschen.

Sobald Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sie einhalten – tun, was Sie sagen, ist sehr wichtig, um das Vertrauen der Nutzer:innen aufzubauen. Sie sollten nur die Daten sammeln, die Sie sagen, dass Sie sammeln, und sie nur für den angegebenen Zweck verwenden. Wenn jemand in Ihrem Unternehmen eine clevere neue Verwendungsmöglichkeit für vorhandene Daten findet, ist dies dennoch nicht OK unter den Bedingungen Ihrer Richtlinie, wenn diese nicht spezifiziert, dass Sie sie für diesen Zweck verwenden werden. Sollten Nutzer:innen der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und sich dieser Zweck erweitert, müssen Sie möglicherweise eine erneute Zustimmung in Erwägung ziehen.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Wie bereits erwähnt, sollten Sie den Nutzer:innen eine Möglichkeit bieten, zu sehen, welche Daten von ihnen gesammelt wurden, und diese bei Bedarf zu löschen. Dies könnte im Rahmen der selben Erfahrung geschehen, wo sie auch ihr Konto löschen können (ihre Daten werden ebenfalls gelöscht), oder Sie machen es zu zwei separaten Optionen. So oder so sollten die Optionen leicht zu finden sein.

Den Nutzer:innen die Wahl zu lassen, wann signifikante Daten gelöscht werden, ist sehr ermächtigend und baut Vertrauen auf. Dennoch gibt es möglicherweise einige Datenteile, deren Löschung Sie selbst in die Hand nehmen möchten. Zum Beispiel könnten einige Daten nur für einige Stunden oder Minuten verwendet werden und dann gelöscht werden, wie Daten, die während der Verwaltung einer Nutzersitzung verwendet werden, während sie eingeloggt sind.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Antwort-Header ist sehr nützlich, um kurzlebige Benutzerdaten zu löschen – er weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher (z. B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Daten) zu löschen. Sie könnten Ihren Server beispielsweise dazu bringen, ihn mit einer "Logout-Bestätigungsseite" zu senden, sodass die Daten, sobald der:die Nutzer:in ausgeloggt ist, sicher entfernt werden.

## Reduzieren Sie das Tracking

Wie bereits vorher diskutiert, ist Tracking und einige der unethischen Verwendungszwecke, die damit verbunden sind, nicht zu unterschätzen. Solche Verwendungen können das Vertrauen der Nutzer:innen untergraben; Sie sollten potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) nur für ethische Zwecke verwenden, z. B. das Übertragen des Anmelde- oder sonstigen Personalisierungsstatus auf andere Websites.

Denken Sie auch daran, dass Browser alle beginnen, Drittanbieter-Cookies standardmäßig zu blockieren und alternative Technologien zu implementieren, um gängige Anwendungsfälle zu unterstützen. Es ist ratsam, sich darauf vorzubereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, reduzieren und/oder die beabsichtigte Informationspersistenz auf andere Weise umsetzen. Weitere Informationen finden Sie unter [Umgang mit Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies).

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Es wäre natürlich leicht, den Datenschutz zu managen, wenn Sie sich nur um die Ressourcen kümmern müssten, die Sie selbst erstellt haben (Code, Cookies, Sites usw.). Die wirkliche Herausforderung besteht darin, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen verwendet. Dazu können Drittanbieter-Inhalte gehören, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung, da sie viel Leistung bieten. Jede Drittanbieter-Ressource, die Sie auf Ihrer Website zulassen, hat jedoch potenziell die gleichen Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie auf Ihrer Website eingebunden sind:

- JavaScript, das innerhalb von Drittanbieter-Inhalten läuft, die über ein `<iframe>` auf Ihrer Website eingebettet sind, ist durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, d.h. es hätte keinen Zugriff auf andere Skripte und Daten, die im übergeordneten Browsing-Kontext enthalten sind.
- Ein direkt in Ihrer Seite eingebundenes Drittanbieter-Skript über ein {{htmlelement("script")}}-Element hätte jedoch Zugriff auf Ihre anderen Skripte und Daten, egal ob es auf Ihrer Seite oder einer anderen Seite gehostet wird. Es wäre effektiv First-Party-Code. Ein auf diese Weise eingebundenes bösartiges Skript könnte heimlich die Daten Ihrer Nutzer:innen stehlen, indem es sie beispielsweise an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Website verwenden, zu überprüfen. Seien Sie sich im Klaren darüber, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und wie ihre Datenschutzrichtlinien lauten. Ihre sorgfältig ausgearbeitet
