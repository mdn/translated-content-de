---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: 6f2910119ee38a38bef0762f34c1aaa63fddecd3
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Bankgeschäfte, Einkäufe, Unterhaltung und das Bezahlen von Steuern. Dabei müssen sie persönliche Informationen mit diesen Websites teilen. Nutzer setzen ein gewisses Maß an Vertrauen in die Websites, mit denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten, könnten sie zur Ausnutzung der Nutzer verwendet werden, zum Beispiel durch Profilierung, gezielte ungewollte Werbung oder sogar Identitäts- oder Gelddiebstahl.

Moderne Browser bieten bereits viele Funktionen, um die Privatsphäre der Nutzer im Web zu schützen, aber das reicht nicht aus. Um ein vertrauenswürdiges und die Privatsphäre respektierendes Erlebnis zu schaffen, müssen Entwickler ihre Site-Nutzer in guten Praktiken ausbilden (und diese durchsetzen). Entwickler sollten auch Websites erstellen, die so wenig Daten wie möglich von Nutzern sammeln, die Daten verantwortungsvoll nutzen und sie sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browser-Funktionen, die automatisch den Datenschutz der Nutzer schützen.
- Schauen wir uns an, was Entwickler tun können, um Datenschutz-respektierende Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten der Nutzer unerwartet von Dritten erlangt werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web verfügbar sind, definieren wir einige wichtige Begriffe.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verknüpft und Sie können wirklich keine Datenschutz-respektierenden Websites erstellen, ohne eine gute Sicherheit. Daher definieren wir beides.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, die Kontrolle darüber zu haben, wie ihre Daten gesammelt, gespeichert und verwendet werden, und diese nicht unverantwortlich zu verwenden. Zum Beispiel sollten Sie Ihren Nutzern klar mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Nutzern muss die Möglichkeit gegeben werden, den Nutzungsbedingungen Ihrer Daten zuzustimmen, Zugriff auf alle von Ihnen gespeicherten Daten zu erhalten und sie zu löschen, wenn sie nicht mehr wünschen, dass Sie diese haben. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts untergräbt das Vertrauen der Nutzer mehr, als wenn ihre Daten in nicht genehmigter Weise verwendet und geteilt werden. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. Viele Teile der Welt haben jetzt Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die [DSGVO](https://gdpr.eu/) der EU).

- **Sicherheit** ist der Schutz privater Daten und Systeme vor unbefugtem Zugriff. Dies umfasst sowohl Unternehmensdaten (intern) als auch Nutzer- und Partnerdaten (extern). Eine robuste Datenschutzrichtlinie zu haben, die Ihre Nutzer Ihnen vertrauen lässt, ist nutzlos, wenn Ihre Sicherheit schwach ist und böswillige Parteien dennoch deren Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Nutzer beschreiben. Beispiele sind:

- Postanschrift, E-Mail-Adresse, Telefonnummer oder andere Kontaktdaten
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere amtliche Identifikatoren
- Körperliche Merkmale wie Größe, Geschlechtsidentität, Gewicht, Haarfarbe oder Alter
- Gesundheitsinformationen wie medizinische Vorgeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen, wenn sie mit einer Person verknüpft werden können
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Nutzer nicht öffentlich teilen möchten und die privat bleiben müssen (d. h. Informationen, die nur für eine bestimmte Gruppe von autorisierten Nutzern zugänglich sind). Einige private Daten sind gesetzlich privat (z. B. medizinische Daten), und einige sind privat eher aus persönlicher Entscheidung.

### Personenbezogene Informationen

Im Anschluss an den vorherigen Abschnitt sind **personenbezogene Informationen** (PII) Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person zu identifizieren und/oder aufzuspüren. Zum Beispiel, wenn eine Website eine Liste von Nutzernamen und Postleitzahlen online leakt, könnte ein böswilliger Akteur diese Informationen fast sicher verwenden, um ihre vollständigen Adressen zu ermitteln. Selbst wenn es nicht zu einem umfassenden Leak kommt, ist es dennoch möglich, Nutzer durch weniger offensichtliche Mittel zu identifizieren, wie durch die Browser, die sie nutzen, die Geräte, die sie verwenden, spezifische installierte Schriften und so weiter.

### Tracking

**Tracking** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Nutzers auf vielen verschiedenen Websites. Dies kann auf verschiedene Weisen geschehen, zum Beispiel:

- Betrachtung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies), die über verschiedene Seiten gesetzt wurden, auf denen Drittanbieterinhalte eingebettet sind, um verschiedene Informationen über den Nutzer herauszufinden.
- Betrachtung des {{httpheader("Referer")}}-Headers, um zu sehen, von wo der Nutzer hergekommen ist.
- Einschluss von Parametern in den URLs von eingehenden Links (zum Beispiel in eingebetteten Anzeigen, die auf Produktseiten verlinken, oder Marketing-E-Mails), die der verlinkten Website offenbaren können, wo der Link herkommt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder eine andere Kennung des Nutzers, der darauf geklickt hat, etc. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, das beinhaltet, dass Tracker einen Nutzer vorübergehend (und unbemerkt) auf ihre Website umleiten, um First-Party-Speicher zu nutzen, um diesen Nutzer über Websites hinweg zu verfolgen. Dies ermöglicht es Trackern, das Blockieren von Drittanbieter-Cookies zu umgehen. Zum Beispiel, wenn Sie eine Produktbewertung gelesen haben und darauf klicken möchten, um es zu kaufen, könnten Sie unwissentlich zuerst zum Redirect-Tracker navigieren und dann zum Einzelhändler. Dies bedeutet, dass der Tracker als First-Party geladen wird und Tracking-Daten mit den Identifikatoren verknüpfen kann, die sie in ihren First-Party-Cookies gespeichert haben, bevor Sie zum Einzelhändler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Nutzers und seiner Interessen und Vorlieben zu erstellen, was in der Regel negativ ist und in unterschiedlichem Maße störend sein kann. Zum Beispiel:

- **Gezielte Werbung**: Jeder hat die unangenehme Erfahrung gemacht, auf einem Gerät nach Informationen zu suchen, um dann plötzlich auf allen anderen Geräten mit Werbung für dieselben Produkte bombardiert zu werden.
- **Verkauf oder Teilen von Daten**: Einige Drittanbieter sind dafür bekannt, Tracking-Daten zu sammeln und sie dann an andere weiterzugeben oder zu verkaufen, um sie für verschiedene Zwecke zu verwenden, wie gezielte Werbung. Dies ist offensichtlich höchst unethisch und kann auch illegal sein, je nachdem, wo auf der Welt es passiert.
- **Vorurteile aufgrund von Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Nutzer unfair benachteiligt wird. Zum Beispiel, stellen Sie sich vor, eine Versicherungsgesellschaft erfährt von Datenpunkten über einen potenziellen Kunden, die er nicht zu teilen zugestimmt hat, und nutzt sie als Begründung für eine Erhöhung der Versicherungsprämien.

### Fingerprinting

Ein Prozess, der dem Tracking sehr nahe steht, ist das **Fingerprinting**: dies bezieht sich speziell auf das _Identifizieren_ von Nutzern durch den Aufbau einer Sammlung von Datenpunkten über sie, die sie von anderen Nutzern unterscheiden. Dies könnte von Cookie-Inhalten bis zu dem genutzten Browser und den lokal installierten Schriften reichen.

Moderne Browser ergreifen Maßnahmen, um Fingerprinting-basierte Angriffe zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wenn die Informationen verfügbar gemacht werden müssen, Variationen oder "Rauschen" einführen, die verhindern, dass sie für Identifizierungszwecke genutzt werden.

Zum Beispiel, wenn eine Website die verstrichene Zeit im Browser eines Nutzers abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit als Faktor im Fingerprinting nützlich sein. Aus diesem Grund führen Browser normalerweise eine kleine Menge Variabilität in Timer ein, um sie weniger nützlich für die Identifizierung des Systems des Nutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für weitere nützliche Informationen.

## Datenschutzfunktionen, die von Browsern bereitgestellt werden

Browserhersteller sind sich der Notwendigkeit bewusst, die Privatsphäre der Nutzer zu schützen, und der negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Benutzererfahrung. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen mindern. In diesem Abschnitt betrachten wir verschiedene Kategorien von Datenschutzmaßnahmen, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz durch Verschlüsselung von Daten während des Transports über das Netzwerk und ist die Technologie hinter dem {{Glossary("HTTPS", "HTTPS")}}-Protokoll. TLS ist gut für den Datenschutz, weil es Dritte daran hindert, übertragene Daten abzufangen und auf böswillige Weise zu verwenden, zum Beispiel für Tracking.

Alle Browser bewegen sich in Richtung der standardmäßigen Anforderung von HTTPS; dies ist praktisch bereits der Fall, da Sie im Web kaum etwas tun können, ohne dieses Protokoll.

Verwandte Themen sind:

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Prüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle zur Verfügung stellt, die helfen können, fehlerhafte oder bösartige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sie vor Protokolldowngrades und Cookie-Entführungsangriffen zu schützen, indem sie den Clients erlauben, Ihnen mitzuteilen, dass sie nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- {{Glossary("HTTP_2", "HTTP/2")}}
  - : Während HTTP/2 technisch keine _Verschlüsselung_ erfordert, unterstützen die meisten Browserentwickler es nur, wenn es mit HTTPS verwendet wird; in dieser Hinsicht kann es als Funktion zur Verbesserung von Sicherheit/Datenschutz angesehen werden.

### Opt-in für "leistungsstarke Funktionen"

So genannte "leistungsstarke" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Vorgänge bieten, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Wesentlichen bedeutet HTTPS-only. Nicht nur das, diese Web-Funktionen sind hinter einem System von Benutzerberechtigungen gesperrt. Nutzer müssen ausdrücklich zustimmen, Funktionen wie Benachrichtigungen zuzulassen, auf Geolokationsdaten zuzugreifen, den Browser in den Vollbildmodus zu versetzen, auf Medienstreams von Webcams zuzugreifen, Webzahlungen zu verwenden usw.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz ihrer Nutzer verbessern. Viele davon blockieren oder beschränken die Möglichkeit von Drittanbieterwebsites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der Top-Level-Domain gesetzt sind, Tracking-Skripte auszuführen usw.

- Der Standardwert des Attributs [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) des {{httpheader("Set-Cookie")}}-Headers wurde auf `Lax` aktualisiert, um besseren Schutz gegen Tracking und {{Glossary("CSRF", "CSRF")}}-Angriffe zu bieten. Siehe [Kontrolle von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Browser haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren. Siehe [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für weitere Details.
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die die Privatsphäre nicht gefährden, oder um häufige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weisen zu implementieren. Siehe [Umstellung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Auch Browser-Erweiterungen helfen dabei, zum Beispiel [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Weiterleitungs-Tracking-Schutz](/de/docs/Web/Privacy/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Entwickler auf der Client-Seite

Webentwickler können und sollten verschiedene Maßnahmen ergreifen, um den Datenschutz für ihre Nutzer zu verbessern. Die folgenden Abschnitte behandeln die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Sammeln Sie Daten ethisch

Unternehmen sammeln aus verschiedenen Gründen viele verschiedene Daten von ihren Nutzern:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsbeschäftigungen und eine Vielzahl anderer PII für alles, von der individuellen Anpassung der Website bis zu Kundenzufriedenheitsumfragen.
- Surfgewohnheiten auf ihren Webseiten und anderen Seiten, um den Erfolg von Seiten und Funktionen zu messen.
- Und vieles mehr.

Wenn Sie Daten von Ihren Kunden sammeln, haben Sie die Möglichkeit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen, was wiederum Ihre Marke und Ihre Erfolgsaussichten verbessert.

Die Ethik der Datensammlung lässt sich in drei einfache Prinzipien unterteilen:

- Sammeln Sie nicht mehr Daten, als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die unten angegebenen Tipps bieten ein besseres, datenschutzbewussteres Nutzererlebnis, aber viele von ihnen sind gesetzlich erforderlich, um die Einhaltung von Vorschriften, wie zum Beispiel der [DSGVO](https://gdpr.eu/) in der EU, zu gewährleisten. Sie sollten unbedingt herausfinden, welche Vorschriften in Ihrem Gebiet für Sie gelten und was Sie tun müssen, um sie einzuhalten.

### Sammlen Sie nicht mehr Daten, als Sie benötigen

Es ist verlockend, viele Daten von Ihren Nutzern zu verlangen, weil Sie denken, dass sie in Zukunft nützlich sein könnten. Jedoch erhöht jedes zusätzliche Datenbit, das Sie sammeln, das Risiko für die Privatsphäre Ihrer Nutzer und die Wahrscheinlichkeit, dass sie den Schritt, den sie gerade ausführen (ob es nun das Ausfüllen einer Umfrage oder die Anmeldung für einen Dienst ist), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das benötigte Ergebnis durch weniger granulare Datenanforderungen erreichen können. Beispielsweise, anstatt einen Nutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn bitten, zwischen allgemeineren Kategorien zu wählen.

Der beste Schutz der Privatsphäre der Nutzer ist jedoch, die Datenminimierung zu betreiben. Bezüglich des vorherigen Beispiels könnten Sie dieselben Daten durch Betrachtung der Kaufhistorie der Nutzer gewinnen. In einem weiteren Beispiel schätzen es die Nutzer, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, sich für ein Konto anzumelden; wenn es nicht für den Betrieb des Dienstes notwendig ist, sollte es ihre Entscheidung sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie auf Ihrer Website eine Datenschutzrichtlinie veröffentlichen, die klar darlegt:

- Daten, die Sie sammeln
- Wege, auf denen Sie die Daten verwenden
- Parteien, mit denen Sie die Daten ggf. teilen möchten, und eine Erklärung, dass Sie vor dem Teilen die Zustimmung des Nutzers einholen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Möglichkeiten, in denen Nutzer die gesammelten Daten einsehen und löschen können, wenn sie wollen

Beim Bereitstellen von Daten sollten Ihre Nutzer die Gelegenheit erhalten, Ihre Datenschutzrichtlinie zu lesen und ihr zuzustimmen. Sie sollten die Kontrolle darüber haben, ob sie damit zufrieden sind und Ihren Bedingungen zustimmen. Und wie bereits oben angedeutet, sollten sie auch sehen können, welche Daten Sie von ihnen gesammelt haben, und diese löschen, wenn sie wollen.

Wenn Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sie einhalten – das Einhalten Ihrer Ankündigungen ist sehr wichtig, um Vertrauen bei den Nutzern aufzubauen. Sie sollten nur die Daten sammeln, die Sie zu sammeln angekündigt haben, und sie nur für den angekündigten Zweck verwenden. Wenn jemand aus Ihrem Unternehmen einen cleveren neuen Weg findet, bestehende Daten zu nutzen, ist das immer noch nicht in Ordnung nach den Bedingungen Ihrer Richtlinie, wenn diese nicht angibt, dass Sie die Daten für diesen Zweck nutzen werden. Wenn Nutzer der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und dieser Zweck erweitert wird, müssen Sie möglicherweise in Betracht ziehen, eine neue Einwilligung einzuholen.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Früher erwähnten wir, den Nutzern eine Möglichkeit zu geben, zu sehen, welche Daten Sie von Ihnen gesammelt haben, und diese zu löschen, wenn sie wollen. Möglicherweise könnten Sie dies im Rahmen derselben Erfahrung anbieten, die sie nutzen können, um ihr Konto zu löschen (ihre Daten gehen damit), oder sie als zwei separate Optionen anbieten. In jedem Fall sollten die Optionen leicht zu finden sein.

Verbrauchern die Möglichkeit zu geben, zu entscheiden, wann signifikante Datenmengen gelöscht werden, ist sehr ermächtigend und schafft Vertrauen, aber möglicherweise gibt es einige Daten, für deren Löschung Sie selbst aufkommen. Einige Daten könnten zum Beispiel nur für ein paar Stunden oder Minuten verwendet und dann gelöscht werden, wie Daten, die während der Verwaltung einer Sitzung eines Nutzers verwendet werden, während er eingeloggt ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich, um kurzlebige Nutzerdaten zu löschen – er weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher (z. B. [Webspeicher](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu leeren. Zum Beispiel könnte Ihr Server ihn zusammen mit einer "Logout-Bestätigungsseite" senden, damit die Daten des Nutzers sicher entfernt werden, sobald er ausgeloggt ist.

## Reduzieren Sie das Tracking

Früher haben wir über Tracking gesprochen und einige der unethischen Zwecke, für die es verwendet wird. Wir brauchen wohl nicht auszuführen, wie solche Anwendungen das Vertrauen der Nutzer untergraben können; wann immer möglich, sollten Sie potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) nur für ethische Zwecke verwenden, wie die Übertragung von Anmelde- oder anderen Personalisierungsstatus über Websites hinweg.

Erinnern Sie sich auch daran, dass Browser beginnen, Drittanbieter-Cookies standardmäßig zu blockieren, während alternative Technologien implementiert werden, um häufige Anwendungsfälle zu erreichen. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie sich verlassen, einschränken und/oder die gewünschte Informationsbeständigkeit auf andere Weisen umzusetzen. Siehe [Umstellung von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Verwalten Sie Drittanbieter-Ressourcen sorgfältig

Natürlich wäre es leicht, den Datenschutz zu verwalten, wenn Sie sich nur mit den Ressourcen beschäftigen müssten, die Sie selbst erstellt haben (Code, Cookies, Websites usw.). Die eigentliche Herausforderung ergibt sich aus dem Umstand, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen verwendet. Dies kann Drittanbieter-Inhalte sein, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieter-Ressourcen sind ein wesentlicher Teil der modernen Webentwicklung, sie bieten viel Leistung. Allerdings hat jede Drittanbieter-Ressource, die Sie auf Ihrer Website zulassen, potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; alles hängt davon ab, wie sie auf Ihrer Website eingebunden ist:

- JavaScript, das in Drittanbieter-Inhalten ausgeführt wird, die über ein `<iframe>` auf Ihrer Website eingebettet sind, wird durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten im Top-Level-Betrachtungskontext hätte.
- Ein Drittanbieter-Skript, das direkt in Ihrer Seite über ein {{htmlelement("script")}}-Element eingebunden ist, _hätte_ jedoch Zugriff auf Ihre anderen Skripte und Daten, egal ob es auf Ihrer oder einer anderen Website gehostet wird. Es würde effektiv als First-Party-Code betrachtet. Ein böswilliges Skript, das auf diese Weise eingebunden ist, könnte heimlich die Daten Ihrer Nutzer stehlen, zum Beispiel indem es sie an einen Drittanbieterserver sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Website verwenden, zu prüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und was ihre Datenschutzrichtlinien sind. Ihre sorgfältig ausgearbeitete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das sie verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu bekommen, welche Anfragen eine Website stellt, zum Beispiel den [Request Map Generator](https://requestmap.webperf.tools/).

Nachdem Sie Ihre Drittanbieter-Ressourcen geprüft haben und wissen, was sie tun, sollten Sie ihre Nachteile als Kompromiss für den Wert, den sie bringen, betrachten. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber viele Nutzerdaten sammelt, könnten Sie:

1. Diesen Kompromiss akzeptieren, Ihre Datenschutzrichtlinie aktualisieren, um Details darüber einzuschließen, und hoffen, dass das Vertrauen Ihrer Nutzer nicht zu sehr beeinträchtigt.
2. Nach einer alternativen, weniger datenhungrigen Drittanbieter-Lösung suchen.
3. Ihr eigenes Tool entwickeln.

Die folgende Liste bietet einige Tipps, um die durch die Verwendung von Drittanbieter-Ressourcen inhärenten Datenschutzrisiken zu mindern:

- Beim Einbetten von Drittanbieter-Ressourcen sollten Sie überlegen, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit geringeren Datenschutzwirkungen zu erzielen. Beispielsweise könnte es unterhaltsam sein, einen Social-Media-Beitragsanzeiger auf Ihrer Website eingebettet zu haben, aber ist es wirklich notwendig? Wäre ein Link zu Ihrer Social-Media-Seite nicht ausreichend? Auch einige Drittanbieter-Dienste haben datenschutzverbessernde Optionen. Siehe zum Beispiel YouTubes [Videos & Playlists einbetten > Datenschutzmodus aktivieren](https://support.google.com/youtube/answer/171780).
- Wenn möglich, sollten Sie Drittanbieter daran hindern, einen {{httpheader("Referer")}}-Header zu erhalten, wenn Sie Anfragen an sie stellen. Dies kann auf ziemlich granulare Weise geschehen, zum Beispiel durch die Verwendung von [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) bei externen Links. Alternativ könnten Sie dies globaler für die Seite oder die Website setzen, zum Beispiel mittels des {{httpheader("Referrer-Policy")}}-Headers.

  > [!NOTE]
  > Siehe auch [Referrer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}}-HTTP-Header, um den Zugriff auf "leistungsstarke Funktionen" der API zu steuern (wie Benachrichtigungen, Geolokationsdaten, Zugriff auf Medienstreams von Webcams usw.). Dies kann nützlich für den Datenschutz sein, da es Drittanbieter-Websites daran hindert, unerwartete Dinge mit diesen Funktionen zu tun, und Nutzer nicht unnotigerweise mit Berechtigungsaufforderungen bombardiert werden wollen, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" innerhalb von Drittanbieter-Websites, die in {{htmlelement("iframe")}}-Elementen eingebettet sind, durch Angabe von Berechtigungsrichtlinien innerhalb eines `allow`-Attributs auf dem `<iframe>` selbst steuern.

  > [!NOTE]
  > Siehe auch unseren [Leitfaden zu Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) für weitere Informationen und Beispiele sowie [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools, einschließlich eines RichtliniensGenerators.

- Verwenden Sie das `sandbox`-Attribut von {{htmlelement("iframe")}}, um die Nutzung bestimmter Funktionen in den eingebetteten Inhalten im `<iframe>` zu erlauben oder zu verbieten – hierzu gehören Dinge wie Downloads, Formulareingaben, Modal-Dialoge und Scripting.

> [!NOTE]
> Weitere nützliche Informationen zur Prüfung und mehr finden Sie bei [Drittanbietern](https://web.dev/learn/privacy/third-parties/) auf web.dev.

## Schutz von Nutzerdaten

Sie müssen sicherstellen, dass die Nutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist mehr ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es ist erwähnenswert, dass eine gute Datenschutzrichtlinie nutzlos ist, wenn Ihre Sicherheit lückenhaft ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Hinweise zum Schutz der Nutzerdaten:

- Sicherheit ist schwer richtig hinzubekommen. Bei der Implementierung einer sicheren Lösung, die das Sammeln von Daten umfasst – insbesondere, wenn es sich um sensible Daten wie Anmeldedaten handelt – macht es Sinn, eine angesehene Lösung eines angesehenen Anbieters zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework eingebaute Funktionen haben, um gegen häufige Schwachstellen zu schützen. Sie könnten auch in Betracht ziehen, ein spezialisiertes Produkt für Ihren Zweck zu verwenden – zum Beispiel eine Identitätsanbieter-Lösung oder einen sicheren Online-Umfragedienst.
- Wenn Sie Ihre eigene Lösung zum Sammeln von Nutzerdaten entwickeln wollen, stellen Sie sicher, dass Sie verstehen, was Sie tun. Stellen Sie einen erfahrene serverseitige Entwickler und/oder Sicherheitstechniker ein, um das System zu implementieren, und sorgen Sie dafür, dass es gründlich getestet wird. Verwenden Sie multifaktorielle Authentifizierung (MFA), um besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web-Authentifizierung](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um die clientseitige Behandlung der App zu optimieren.
- Bei der Erfassung von Nutzeranmeldedaten sollten Sie starke Passwörter durchsetzen, damit die Kontodaten Ihrer Nutzer nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsprobleme. Ermutigen Sie Ihre Nutzern, einen Passwort-Manager zu verwenden, um komplexe Passwörter zu generieren und zu speichern; so müssen sie sich keine Sorgen machen, sie sich zu merken oder ein Sicherheitsrisiko durch das Aufschreiben zu schaffen.
- Sensible Informationen sollten nicht in URLs enthalten sein – wenn ein Dritter die URL abfängt (zum Beispiel über den {{httpheader("Referer")}}-Header), könnte er diese Informationen stehlen. Verwenden Sie `POST`-Anfragen anstelle von `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie die Verwendung von Tools wie [Content Security Policy](/de/docs/Web/HTTP/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um eine Funktionenseinschränkung auf Ihrer Website zu erzwingen, die es schwieriger macht, Schwachstellen einzufügen. Seien Sie vorsichtig dabei – wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieterskript angewiesen ist, um zu funktionieren, könnten Sie die Funktionalität Ihrer Website beschädigen. Dies ist etwas, das Sie bei der Prüfung Ihrer Drittanbieter-Ressourcen untersuchen können (siehe [Sorgfältiges Management von Drittanbieter-Ressourcen](#verwalten_sie_drittanbieter-ressourcen_sorgfältig)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Datenschutz lernen](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) bei developers.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
