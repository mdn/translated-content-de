---
title: Privatsphäre im Web
slug: Web/Privacy
l10n:
  sourceCommit: 392ce991114e55e2187510b640ab545d09258a16
---

Menschen nutzen Websites für mehrere wichtige Aufgaben wie Banking, Einkaufen, Unterhaltung und Steuern zahlen. Dabei müssen sie persönliche Informationen mit diesen Seiten teilen. Die Nutzer bringen den Websites, mit denen sie ihre Daten teilen, ein gewisses Vertrauen entgegen. Wenn diese Informationen in die falschen Hände geraten, könnten sie ausgenutzt werden, um Benutzer zu profilieren, mit unerwünschten Anzeigen anzusprechen oder sogar ihre Identität oder ihr Geld zu stehlen.

Moderne Browser bieten bereits eine Vielzahl von Funktionen zum Schutz der Privatsphäre der Nutzer im Web, aber das reicht nicht aus. Um ein vertrauenswürdiges und die Privatsphäre respektierendes Erlebnis zu schaffen, müssen Entwickler ihre Website-Nutzer in guten Praktiken schulen (und diese durchsetzen). Entwickler sollten auch Websites erstellen, die so wenig Daten wie möglich von Nutzern sammeln, diese verantwortungsbewusst verwenden und sicher transportieren und speichern.

In diesem Artikel:

- Definieren wir Privatsphäre und wichtige verwandte Begriffe.
- Untersuchen wir Browser-Funktionen, die automatisch den Schutz der Privatsphäre der Benutzer gewährleisten.
- Schauen wir uns an, was Entwickler tun können, um webbasierte Inhalte zu erstellen, die die Privatsphäre respektieren und das Risiko minimieren, dass persönliche Informationen/Daten der Benutzer unerwartet von Dritten erlangt werden.

## Definition von Privatsphäre-Begriffen und -Konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web verfügbar sind, lassen Sie uns einige wichtige Begriffe definieren.

### Privatsphäre und ihre Beziehung zur Sicherheit

Es ist schwer, über Privatsphäre zu sprechen, ohne auch über Sicherheit zu sprechen – sie sind eng miteinander verbunden, und Sie können keine die Privatsphäre respektierenden Websites erstellen, ohne eine gute Sicherheit zu gewährleisten. Daher werden wir beides definieren.

- **Privatsphäre** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und verwendet werden, und nicht unverantwortlich damit umzugehen. Beispielsweise sollten Sie Ihren Nutzern klar mitteilen, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Die Nutzer müssen die Möglichkeit erhalten, Ihren Nutzungsbedingungen für Daten zuzustimmen, Zugang zu allen ihren gespeicherten Daten zu haben und diese zu löschen, wenn sie nicht mehr möchten, dass Sie diese besitzen. Sie müssen auch Ihre eigenen Bedingungen einhalten: Nichts zerstört das Vertrauen der Nutzer mehr, als wenn ihre Daten auf eine Weise verwendet und geteilt werden, der sie nie zugestimmt haben. Und das ist nicht nur ethisch falsch; es könnte illegal sein. Viele Teile der Welt haben jetzt Gesetze, die den Schutz der Verbraucher-Datenschutzrechte sicherstellen (zum Beispiel die EU [GDPR](https://gdpr.eu/)).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dies betrifft sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern). Es nützt nichts, eine robuste Datenschutzrichtlinie zu haben, die Ihre Benutzer Ihnen vertrauen lässt, wenn Ihre Sicherheit schwach ist und böswillige Parteien trotzdem ihre Daten stehlen können.

### Persönliche und private Informationen

**Persönliche Informationen** sind alle Informationen, die einen Benutzer beschreiben. Beispiele sind:

- Physische Merkmale wie Größe, Geschlechtsausdruck, Gewicht, Haarfarbe oder Alter
- Postadresse, E-Mail-Adresse, Telefonnummer oder andere Kontaktinformationen
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Gesundheitsinformationen wie Krankengeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen und Passwörter
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind alle Informationen, die Benutzer nicht öffentlich teilen möchten und privat gehalten werden müssen (d.h. Informationen, die nur einer bestimmten Gruppe autorisierter Benutzer zugänglich sind). Einige private Daten sind gesetzlich privat (z.B. medizinische Daten), und einige sind es mehr aus persönlicher Vorliebe.

### Personenbezogene Informationen

Im Anschluss an den oben genannten Abschnitt sind **personenbezogene Informationen** (PII) Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person zu verfolgen und/oder zu identifizieren. Wenn beispielsweise eine Website eine Liste mit Benutzernamen und Postleitzahlen online leakt, könnte ein Angreifer diese Informationen mit ziemlicher Sicherheit verwenden, um ihre vollständigen Adressen zu ermitteln. Auch wenn keine vollständige Datenpanne auftritt, ist es dennoch möglich, Benutzer durch weniger offensichtliche Mittel zu identifizieren, wie die Browser, die sie verwenden, die Geräte, die sie verwenden, spezifische Schriftarten, die sie installiert haben, und so weiter.

### Tracking

**Tracking** bezieht sich auf die Aufzeichnung der Aktivitäten eines Benutzers auf vielen verschiedenen Websites. Dies kann auf verschiedene Weise erfolgen, zum Beispiel:

- Betrachtung mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies), die über verschiedene Websites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den Nutzer zu erhalten.
- Betrachtung des {{httpheader("Referer")}} Headers, um zu sehen, von wo der Nutzer navigiert ist.
- Einfügen von Parametern in die URLs eingehender Links (z.B. in eingebetteten Anzeigen, die zu Produktseiten verlinken, oder Marketing-E-Mails), die der verlinkten Seite zeigen können, woher der Link ursprünglich stammt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder andere Identifikatoren des Nutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Decorating** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, bei dem Tracker einen Nutzer vorübergehend (und unmerklich) auf ihre Website umleiten, um First-Party-Speicher zu verwenden, um diesen Nutzer über Websites hinweg zu verfolgen. Dadurch können Tracker das Blockieren von Drittanbieter-Cookies umgehen. Wenn Sie beispielsweise eine Produktbewertung gelesen haben und daraufhin kaufen möchten, navigieren Sie möglicherweise unwissentlich zuerst zum Redirect-Tracker und _dann_ zum Händler. Das bedeutet, dass der Tracker als First-Party geladen wird und Tracking-Daten mit den Identifikatoren in seinen First-Party-Cookies verknüpfen kann, bevor Sie zum Händler weitergeleitet werden.

Tracking-Daten können verwendet werden, um ein Profil eines Benutzers und seiner Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und in verschiedenen Graden störend sein kann. Zum Beispiel:

- **Gezielte Werbung**: Jeder hat die unheimliche Erfahrung gemacht, auf einem Gerät nach einigen Artikeln zu suchen und dann plötzlich auf allen anderen Geräten Werbung für dieselben Produkte zu sehen.
- **Daten verkaufen oder teilen**: Einige Drittanbieter sind bekannt dafür, Tracking-Daten zu kompilieren und dann an andere zu verkaufen/teilen, um sie für verschiedene Zwecke zu verwenden, wie gezielte Werbung. Dies ist offensichtlich höchst unethisch und könnte je nach Ort der Welt auch illegal sein.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Nutzer unfair benachteiligt wird. Stellen Sie sich zum Beispiel vor, eine Versicherungsgesellschaft erfährt Datenpunkte über einen potenziellen Kunden, die dieser nicht zu teilen zugestimmt hat, und verwendet diese als Rechtfertigung, um die Versicherungsprämien zu erhöhen.

### Fingerprinting

Ein Prozess, der dem Tracking sehr nahesteht, ist das **Fingerprinting**: Dies bezieht sich speziell auf das _Identifizieren_ von Benutzern durch den Aufbau einer Sammlung von Datenpunkten über sie, die sie von anderen Benutzern unterscheiden. Dies könnte alles sein, von Cookie-Inhalten bis hin zu dem, welchen Browser sie verwenden und welche Schriftarten lokal installiert sind.

Moderne Browser ergreifen Maßnahmen, um Fingerprinting-basierte Angriffe zu verhindern, indem sie entweder den Zugriff auf Informationen nicht zulassen oder, wo die Informationen verfügbar sein müssen, durch das Einführen von Variationen oder "Rauschen", die verhindern, dass sie für Identifikationszwecke verwendet werden.

Ein Beispiel: Wenn eine Website die verstrichene Zeit eines Nutzers im Browser abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit als Faktor für Fingerprinting nützlich sein. Aus diesem Grund führen Browser typischerweise eine kleine Menge Variabilität in Zeitmessungen ein, um sie weniger nützlich für die Identifikation des Benutzergerätes zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen, die von Browsern bereitgestellt werden

Browseranbieter sind sich des Bedarfs, die Privatsphäre der Benutzer zu schützen, und der negativen Auswirkungen von Tracking, Fingerprinting etc. auf die Benutzererfahrung bewusst. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen abmildern. In diesem Abschnitt betrachten wir verschiedene Kategorien von Datenschutz, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Privatsphäre, indem es Daten während des Transports über das Netzwerk verschlüsselt, und ist die zugrundeliegende Technologie des [HTTPS](/de/docs/Glossary/HTTPS) Protokolls. TLS ist gut für die Privatsphäre, weil es Dritte daran hindert, übertragene Daten abzufangen und sie böswillig zu verwenden, zum Beispiel zum Tracking.

Alle Browser bewegen sich in Richtung einer Standardanforderung von HTTPS; dies ist bereits faktisch der Fall, da man ohne dieses Protokoll fast nichts im Web tun kann.

Verwandte Themen sind:

- [Certificate Transparency (Zertifikatstransparenz)](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard zur Überwachung und Überprüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die helfen kann, falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokolldowngrade und Cookie-Hijack-Angriffen zu schützen, indem Websites den Clients mitteilen, dass sie nur HTTPS verwenden können, um mit dem Server zu kommunizieren.
- [HTTP/2](/de/docs/Glossary/HTTP_2)
  - : Während HTTP/2 technisch gesehen nicht <em>verpflichtend</em> verschlüsselt sein muss, unterstützen es die meisten Browserentwickler nur, wenn es mit HTTPS verwendet wird; insofern kann es als Funktion zur Verbesserung der Sicherheit/Privatsphäre angesehen werden.

### Opt-in für "leistungsstarke Funktionen"

So genannte "leistungsstarke" Web-API-Funktionen, die Zugriff auf potenziell sensible Daten und Vorgänge bieten, stehen nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zur Verfügung, was im Grunde HTTPS-only bedeutet. Nicht nur das, diese Webfunktionen sind hinter einem System von Benutzerberechtigungen abgesichert. Benutzer müssen ausdrücklich zustimmen, Funktionen wie Benachrichtigungen zuzulassen, auf Geolokalisierungsdaten zuzugreifen, den Browser in den Vollbildmodus zu versetzen, Mediastreams von Webcams abzurufen, Web-Zahlungen zu verwenden usw.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz der Nutzer verbessern. Viele dieser blockieren oder beschränken die Möglichkeit von Drittanbieterseiten, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der obersten Domäne gesetzt sind, Tracking-Scripte auszuführen usw.

- Der {{httpheader("Set-Cookie")}} Header [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut-Wert wurde standardmäßig auf `Lax` aktualisiert, um besseren Schutz gegen Tracking und [CSRF](/de/docs/Glossary/CSRF) Angriffe zu bieten. Siehe [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.
- Browser haben begonnen, standardmäßig Drittanbieter-Cookies zu blockieren. Siehe [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Third-party_cookies#how_do_browsers_handle_third-party_cookies) für weitere Details.
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zu erlauben, die der Privatsphäre nicht schaden, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise umzusetzen. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Auch Browser-Erweiterungen helfen dabei, beispielsweise [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für clientseitige Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um die Privatsphäre ihrer Nutzer zu verbessern. Die nachstehenden Abschnitte diskutieren die wichtigsten davon. Einige der Kategorien sind nicht rein technische Aufgaben als solche und beinhalten die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln viele verschiedene Daten von ihren Nutzern aus einer Vielzahl unterschiedlicher Gründe:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografische Lage, Lieblingsfreizeitaktivitäten und eine Vielzahl anderer PII für alles, von Personalisierung der Seite bis hin zu Kundenzufriedenheitsumfragen.
- Browsergewohnheiten auf ihren Seiten und anderen Seiten, um Erfolgskennzahlen von Seiten und Funktionen zu messen.
- Und noch vieles mehr.

Bei der Datensammlung von Ihren Kunden haben Sie die Möglichkeit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung zu ihnen aufzubauen, was wiederum Ihre Marke verbessert und Ihre Erfolgschancen steigert.

Die Ethik der Datensammlung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten als nötig
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden
- Löschen Sie die Daten, sobald Sie mit ihnen fertig sind

> [!NOTE]
> Die unten gegebenen Tipps sorgen für eine bessere, privatsphäreempfindliche Benutzererfahrung, aber viele von ihnen sind gesetzlich vorgeschrieben, um die Einhaltung von Vorschriften zu gewährleisten, beispielsweise die [GDPR](https://gdpr.eu/) in der EU. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften in Ihrem Land gelten und was Sie tun müssen, um diese einzuhalten.

### Sammeln Sie nicht mehr Daten als nötig

Es ist verlockend, viele Daten von Ihren Nutzern anzufordern, weil Sie denken, sie könnten in Zukunft nützlich sein. Jedoch erhöht jedes zusätzliche Datenstück das Risiko für die Privatsphäre Ihrer Nutzer und erhöht die Chance, dass sie den Vorgang, den sie ausführen (sei es das Ausfüllen einer Umfrage oder das Anmelden für einen Service), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch überlegen, ob Sie das, was Sie benötigen, erhalten können, indem Sie Ihre Datenanfrage weniger detailliert machen. Als Beispiel, anstelle einen Benutzer nach seinen Lieblingsprodukten zu fragen, könnten Sie ihn auswählen lassen, zwischen allgemeineren Kategorien.

Die beste Möglichkeit, die Privatsphäre der Benutzer zu schützen, ist jedoch, die gesammelten Daten zu minimieren. Im vorherigen Beispiel könnten Sie dieselben Daten ableiten, indem Sie sich die Kaufhistorie des Benutzers ansehen. Ein weiteres Beispiel, Benutzer schätzen es, Produkte anonym kaufen zu können. Sie sollten sie nicht zwingen, ein Konto zu erstellen; wenn es für den Betrieb des Dienstes nicht notwendig ist, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Sobald Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie auf Ihrer Website eine Datenschutzrichtlinie veröffentlichen, die klar festlegt:

- Daten, die Sie sammeln
- Weisen, auf die Sie die Daten verwenden
- Parteien, mit denen Sie tendenziell die Daten teilen, falls überhaupt, und eine Erklärung, dass Sie um Zustimmung der Nutzer bitten werden, bevor Sie sie teilen
- Die Dauer, für die Sie die Daten aufbewahren, bevor sie gelöscht werden
- Wege, wie Benutzer die von ihnen gesammelten Daten ansehen und, wenn sie möchten, löschen lassen können

Wenn Sie Ihre Nutzer um Daten bitten, sollten diese die Möglichkeit bekommen, Ihre Datenschutzrichtlinie zu lesen und ihr zuzustimmen. Sie sollten in der Lage sein, zu kontrollieren, ob sie damit zufrieden sind und Ihren Bedingungen zustimmen. Und wie oben erwähnt, sollten sie auch sehen können, welche Daten von ihnen Sie gesammelt haben, und diese löschen, wenn sie es möchten.

Nachdem Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie diese einhalten – das zu tun, was Sie sagen, ist sehr wichtig, um das Vertrauen der Nutzer zu gewinnen. Sie sollten nur die Daten sammeln, die Sie angeben werden, und sie nur für den angegebenen Zweck verwenden. Wenn jemand in Ihrem Unternehmen eine clevere neue Möglichkeit entwickelt, vorhandene Daten zu nutzen, ist das dennoch nicht in Ordnung unter den Bedingungen Ihrer Richtlinie, wenn diese nicht angibt, dass Sie sie zu diesem Zweck verwenden werden. Wenn die Benutzer der Verwendung ihrer Daten für einen bestimmten Zweck zugestimmt haben und sich dieser Zweck erweitert, müssen Sie möglicherweise in Erwägung ziehen, eine neue Zustimmung einzuholen.

### Löschen Sie die Daten, sobald Sie mit ihnen fertig sind

Früher haben wir erwähnt, den Nutzern eine Möglichkeit zu geben, zu sehen, welche Daten von ihnen Sie gesammelt haben, und diese zu löschen, wenn sie es möchten. Möglicherweise könnten Sie dies als Teil derselben Erfahrung tun, die sie nutzen können, um ihr Konto zu löschen (ihre Daten gehen damit), oder sie zu zwei separaten Optionen machen. In jedem Fall sollten die Optionen leicht zu finden sein.

Den Benutzern die Wahl zu geben, wann signifikante Teile ihrer Daten gelöscht werden, ist sehr ermächtigend und baut Vertrauen auf, aber es könnte einige Daten geben, die Sie selbst löschen möchten. Einige Daten könnten möglicherweise nur für einige Stunden oder Minuten verwendet werden und dann gelöscht werden, wie Daten, die während einer Benutzersitzung verwendet werden, während sie angemeldet sind.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Response-Header ist sehr nützlich, um kurzlebige Benutzerdaten zu löschen - er weist den Browser an, seinen Cache und/oder Cookies und/oder Speicher (z.B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu leeren. Beispielsweise könnten Sie Ihren Server dazu bringen, ihn zusammen mit einer "abgemeldete Bestätigungs"-Seite zu senden, so dass, sobald der Benutzer abgemeldet ist, seine Daten sicher entfernt werden.

## Tracking reduzieren

Früher haben wir Tracking diskutiert und einige der unethischen Zwecke, für die es genutzt wird. Wir müssen nicht extra erwähnen, wie solche Verwendungen das Vertrauen der Nutzer untergraben können; wann immer es möglich ist, sollten Sie nur potenzielle Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) für ethisch vertretbare Verwendungen nutzen, wie den Transfer von Anmeldeinformationen oder anderen Personalisierungsstatus über Websites hinweg.

Denken Sie auch daran, dass alle Browser schon begonnen haben, standardmäßig Drittanbieter-Cookies zu blockieren, während gleichzeitig alternative Technologien zur Erreichung gängiger Anwendungsfälle implementiert werden. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Menge an Tracking-Aktivitäten, auf die Sie angewiesen sind, begrenzen und/oder gewünschte Informationspersistenz auf andere Weise implementieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) für weitere Informationen.

## Drittanbieterge Ressourcen sorgfältig verwalten

Natürlich wäre es einfach, den Datenschutz zu verwalten, wenn Sie sich nur um Ressourcen kümmern müssten, die Sie selbst erstellt haben (Code, Cookies, Websites usw.). Die echte Herausforderung besteht jedoch darin, dass Ihre Website wahrscheinlich Drittanbieterressourcen nutzen wird. Dies kann Drittanbieterinhalte beinhalten, die in `<iframe>`s eingebettet sind, Bibliotheken, Frameworks, APIs, extern gehostete Ressourcen wie Bilder und Videos usw.

Drittanbieterressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung, sie bieten viel Power. Jedoch hat jede Drittanbieterressource, die Sie auf Ihrer Seite zulassen, potenziell dieselben Berechtigungen wie Ihre eigenen Ressourcen; alles hängt davon ab, wie sie auf Ihrer Website eingebunden ist:

- JavaScript, das innerhalb von Drittanbieterinhalten läuft, die über ein `<iframe>` auf Ihrer Seite eingebettet sind, wird durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Scripte und Daten in den obersten Browsing-Kontext hätte.
- Ein Drittanbieter-Script, das direkt über ein {{htmlelement("script")}}-Element auf Ihrer Seite eingebunden ist, hätte jedoch Zugriff auf Ihre anderen Scripte und Daten, ob es nun auf Ihrer Website oder einer anderen Website gehostet wird. Es wäre effektiv ein First-Party-Code. Ein böswilliges Script, das auf diese Weise eingebunden wird, könnte heimlich die Daten Ihrer Benutzer stehlen, zum Beispiel indem es sie an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieterressourcen, die Sie auf Ihrer Seite verwenden, zu überprüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, und was ihre Datenschutzrichtlinien sind. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Script verwenden, das diese verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, sich ein Bild darüber zu machen, welche Anfragen eine Seite stellt, zum Beispiel den [Request Map Generator](https://requestmap.webperf.tools/).

Nachdem Sie Ihre Drittanbieterressourcen überprüft und verstanden haben, was sie tun, sollten Sie dann deren Nachteile im Vergleich zu dem Wert abwägen, den sie bringen. Wenn ein Drittanbieterscript kostenlos und wirklich nützlich ist, aber eine Menge Benutzerdaten sammelt, könnten Sie:

1. Akzeptieren Sie diesen Kompromiss, aktualisieren Sie Ihre Datenschutzrichtlinie, um Details dazu aufzunehmen, und hoffen Sie, dass es den Nutzern nicht allzu sehr schadet.
2. Suchen Sie nach einem alternativen, weniger datenhungrigen Drittanbietertool.
3. Entwickeln Sie Ihr eigenes Tool.

Die folgende Liste gibt einige Tipps, wie Sie die mit der Verwendung von Drittanbieterressourcen verbundenen Datenschutzrisiken mindern können:

- Wenn Sie Drittanbieterressourcen eingebetten, überlegen Sie, ob es einen Weg gibt, denselben oder einen ähnlichen Effekt mit weniger Auswirkungen auf die Privatsphäre zu erzielen. Zum Beispiel könnte es lustig sein, einen Social-Media-Post-Viewer auf Ihrer Website einzubinden, aber ist er wirklich notwendig? Würde ein Link zu Ihrer Social-Media-Seite nicht ausreichen? Auch einige Drittanbieterdienste haben Privatsphäre-verbessernde Optionen. Siehe zum Beispiel YouTube's [Einbettung von Videos & Playlists > Privatsphäre-verbesserter Modus einschalten](https://support.google.com/youtube/answer/171780).
- Wenn möglich, sollten Sie Drittanbietern das Empfangen eines {{httpheader("Referer")}} Headers blockieren, wenn Sie Anfragen an sie stellen. Dies kann auf ziemlich granulare Weise getan werden, beispielsweise indem Sie [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) auf externe Links einbeziehen. Oder Sie könnten dies globaler für die Seite oder die Website festlegen, indem Sie den {{httpheader("Referrer-Policy")}} Header verwenden.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API "leistungsstarke Funktionen" (wie Benachrichtigungen, Geolokalisierungsdaten, Zugriff auf Mediastreams von Webcams usw.) zu kontrollieren. Dies kann nützlich für die Privatsphäre sein, da es Drittanbieterseiten daran hindert, unerwartete Dinge mit diesen Funktionen zu tun, und Benutzer nicht unnötig mit Berechtigungsaufforderungen bombadiert zu werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungsstarken Funktionen" in Drittanbieterseiten innerhalb von {{htmlelement("iframe")}}-Elementen kontrollieren, indem Sie Berechtigungsrichtlinien in einem `allow` Attribut auf dem `<iframe>` selbst spezifizieren.

  > [!NOTE]
  > Siehe auch unseren [Permissions-Policy-Leitfaden](/de/docs/Web/HTTP/Permissions_Policy) für weitere Informationen und Beispiele, und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools einschließlich eines Richtliniengenerators.

- Verwenden Sie das {{htmlelement("iframe")}} `sandbox` Attribut, um die Nutzung bestimmter Funktionen im eingebetteten Inhalt im `<iframe>` zu erlauben oder zu verbieten – hierzu gehören Dinge wie Downloads, Formularübermittlungen, Modals und Scripting.

> [!NOTE]
> Siehe [Drittanbieter](https://web.dev/learn/privacy/third-parties/) auf web.dev für zusätzliche nützliche Informationen zum Auditing und mehr.

## Nutzerdaten schützen

Sie müssen sicherstellen, dass Nutzerdaten sicher übertragen und gespeichert werden, sobald Sie sie gesammelt haben. Dies ist mehr ein [Sicherheit](/de/docs/Web/Security) Thema, aber es ist wert, hier erwähnt zu werden - eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Leitlinien zum Schutz der Daten Ihrer Nutzer:

- Sicherheit ist schwer richtig umzusetzen. Wenn Sie eine sichere Lösung implementieren, die Datensammlung beinhaltet – insbesondere wenn es sich um sensible Daten wie Anmeldedaten handelt – macht es Sinn, eine vertrauenswürdige Lösung von einem angesehenen Anbieter zu verwenden. Zum Beispiel wird jedes respektable serverseitige Framework über eingebaute Funktionen zum Schutz vor häufigen Schwachstellen verfügen. Sie könnten auch in Erwägung ziehen, ein spezielles Produkt für Ihren Zweck zu nutzen – beispielsweise eine Identitätslösung oder einen sicheren Online-Umfrageanbieter.
- Wenn Sie Ihre eigene Lösung für die Sammlung von Nutzerdaten entwickeln möchten, stellen Sie sicher, dass Sie verstehen, was Sie tun. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur, um das System zu implementieren, und stellen Sie sicher, dass es gründlich getestet wird. Verwenden Sie die Mehrfaktor-Authentifizierung (MFA), um besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) oder [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den clientseitigen Teil der App zu optimieren.
- Stellen Sie bei der Sammlung von Nutzeranmeldeinformationen sicher, dass starke Passwörter erzwungen werden, damit die Kontodetails Ihres Nutzers nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer, einen Passwortmanager zu nutzen, um komplexe Passwörter zu erstellen und zu speichern; auf diese Weise müssen sie sich keine Sorgen machen, dass sie sich daran erinnern oder ein Sicherheitsrisiko darstellen, indem sie diese aufschreiben.
- Schließen Sie keine sensiblen Daten in URLs ein - wenn ein Dritter die URL abfängt (z.B. durch den {{httpheader("Referer")}} Header), könnte er diese Informationen stehlen. Verwenden Sie `POST` Anfragen anstelle von `GET` Anfragen, um dies zu vermeiden.
- Erwägen Sie den Einsatz von Tools wie [Content Security Policy](/de/docs/Web/HTTP/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um auf Ihrer Website eine Reihe von Nutzungsrichtlinien durchzusetzen, die es erschweren, Schwachstellen einzuführen. Seien Sie vorsichtig beim Einsetzen dieser - wenn Sie die Nutzung einer Funktion blockieren, auf die ein Drittanbieter-Script angewiesen ist, um zu funktionieren, könnten Sie am Ende die Funktionalität Ihrer Website unterbrechen. Dies ist etwas, das Sie beim Überprüfen Ihrer Drittanbieterressourcen untersuchen können (siehe [Drittanbieterge Ressourcen sorgfältig verwalten](#drittanbieterge_ressourcen_sorgfältig_verwalten)).

## Siehe auch

- [Websicherheit](/de/docs/Web/Security)
- [Learn Privacy](https://web.dev/learn/privacy/) auf web.dev
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
- [Schlanke Datenpraktiken](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
