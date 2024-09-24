---
title: Datenschutz im Web
slug: Web/Privacy
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

Menschen nutzen Websites für verschiedene wichtige Aufgaben wie Banking, Einkaufen, Unterhaltung und das Bezahlen ihrer Steuern. Dabei sind sie gezwungen, personenbezogene Daten mit diesen Websites zu teilen. Nutzer setzen ein gewisses Vertrauen in die Websites, mit denen sie ihre Daten teilen. Wenn diese Informationen in die falschen Hände geraten, könnten sie dazu genutzt werden, Nutzer auszunutzen, beispielsweise durch das Erstellen von Profilen, das Schalten unerwünschter Werbung oder sogar durch Identitätsdiebstahl oder Geldbetrug.

Moderne Browser verfügen bereits über zahlreiche Funktionen zum Schutz der Privatsphäre der Nutzer im Web, aber das allein reicht nicht aus. Um eine vertrauenswürdige und datenschutzfreundliche Erfahrung zu schaffen, müssen Entwickler ihre Website-Benutzer über bewährte Praktiken aufklären (und diese durchsetzen). Entwickler sollten auch Websites erstellen, die so wenige Daten wie möglich sammeln, diese Daten verantwortungsvoll nutzen und sie sicher übertragen und speichern.

In diesem Artikel:

- Definieren wir Datenschutz und wichtige verwandte Begriffe.
- Untersuchen wir Browserfunktionen, die automatisch den Datenschutz der Nutzer schützen.
- Betrachten wir, was Entwickler tun können, um datenschutzfreundliche Webinhalte zu erstellen, die das Risiko minimieren, dass persönliche Informationen/Daten von Dritten unerwartet erlangt werden.

## Definition von Datenschutzbegriffen und -konzepten

Bevor wir uns die verschiedenen Datenschutz- und Sicherheitsfunktionen ansehen, die im Web verfügbar sind, lassen Sie uns einige wichtige Begriffe definieren.

### Datenschutz und seine Beziehung zur Sicherheit

Es ist schwer, über Datenschutz zu sprechen, ohne auch über Sicherheit zu sprechen — sie sind eng miteinander verbunden, und Sie können keine datenschutzfreundlichen Websites erstellen, ohne gute Sicherheit zu haben. Daher definieren wir beide.

- **Datenschutz** bezieht sich auf das Recht der Nutzer, zu kontrollieren, wie ihre Daten gesammelt, gespeichert und genutzt werden, und diese nicht unverantwortlich zu verwenden. Zum Beispiel sollten Sie Ihren Nutzern klar kommunizieren, welche Daten Sie sammeln, mit wem sie geteilt werden und wie sie verwendet werden. Nutzern muss die Möglichkeit gegeben werden, Ihre Nutzungsbedingungen für Daten zu akzeptieren, Zugang zu allen von Ihnen gespeicherten Daten zu haben und diese zu löschen, wenn sie nicht mehr möchten, dass Sie sie haben. Sie müssen sich auch an Ihre eigenen Bedingungen halten: Nichts untergräbt das Vertrauen der Nutzer mehr, als dass ihre Daten in nicht zugestimmter Weise verwendet und geteilt werden. Und das ist nicht nur ethisch falsch; es könnte gegen das Gesetz verstoßen. In vielen Teilen der Welt gibt es inzwischen Gesetze, die die Datenschutzrechte der Verbraucher schützen (zum Beispiel die EU-[DSGVO](https://gdpr.eu/)).

- **Sicherheit** ist der Akt, private Daten und Systeme vor unbefugtem Zugriff zu schützen. Dazu gehören sowohl Unternehmensdaten (intern) als auch Benutzer- und Partnerdaten (extern). Eine robusten Datenschutzrichtlinie nützt nichts, wenn Ihre Sicherheit schwach ist und böswillige Parteien die Daten trotzdem stehlen können.

### Persönliche und private Informationen

**Personenbezogene Informationen** sind Informationen, die einen Nutzer beschreiben. Beispiele beinhalten:

- Physische Merkmale wie Größe, Geschlecht, Gewicht, Haarfarbe oder Alter
- Postanschrift, E-Mail-Adresse, Telefonnummer oder andere Kontaktdaten
- Reisepassnummer, Bankkonto, Kreditkarte, Sozialversicherungsnummer oder andere offizielle Identifikatoren
- Gesundheitsinformationen wie medizinische Vorgeschichte, Allergien oder laufende Erkrankungen
- Benutzernamen und Passwörter
- Hobbys, Interessen oder andere persönliche Vorlieben
- Biometrische Daten wie Fingerabdrücke oder Gesichtserkennungsdaten

**Private Informationen** sind Informationen, die Nutzer nicht öffentlich teilen möchten und privat gehalten werden müssen (d. h., Informationen, die nur von einer bestimmten Gruppe autorisierter Nutzer zugänglich sind). Einige private Daten sind gesetzlich (z. B. medizinische Daten) privat, und einige sind eher aus persönlichen Vorlieben privat.

### Persönlich identifizierbare Informationen

Anknüpfend an den obigen Abschnitt sind **persönlich identifizierbare Informationen** (PII) Informationen, die ganz oder teilweise verwendet werden können, um eine bestimmte Person zu identifizieren und/oder zu verfolgen. Zum Beispiel, wenn eine Website eine Liste von Nutzernamen und Postleitzahlen online durchsickert, könnte ein böswilliger Akteur fast sicher diese Informationen verwenden, um ihre vollständigen Adressen herauszufinden. Selbst wenn kein vollständiges Leck auftritt, ist es dennoch möglich, Benutzer durch weniger offensichtliche Mittel zu identifizieren, wie die Browser, die sie verwenden, die Geräte, die sie verwenden, spezifische Schriftarten, die sie installiert haben, und so weiter.

### Tracking

**Tracking** bezieht sich auf den Prozess der Aufzeichnung der Aktivitäten eines Nutzers auf vielen verschiedenen Websites. Dies kann auf verschiedene Weise erfolgen, zum Beispiel:

- Betrachten mehrerer [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies), die auf verschiedenen Sites gesetzt sind, auf denen Drittanbieter-Inhalte eingebettet sind, um verschiedene Informationen über den Nutzer zu erfahren.
- Betrachtung des {{httpheader("Referer")}} Headers, um zu sehen, von wo aus ein Nutzer navigiert hat.
- Einfügen von Parametern in die URLs eingehender Links (zum Beispiel in eingebetteter Werbung, die auf Produktseiten verlinkt, oder in Marketing-E-Mails), die der verlinkten Site offenlegen können, woher der Link stammt, zu welcher Marketingkampagne er gehört, die E-Mail-Adresse oder einen anderen Identifikator des Nutzers, der darauf geklickt hat, usw. Dieser Prozess wird als **Link-Dekoration** bezeichnet und führt zu Link-URLs, die so aussehen: `https://example.com/article/?id=62yhgt1a&campaign=902`.
- Redirect-Tracking, das beinhaltet, dass Tracker einen Nutzer für einen Moment (und unmerklich) zu ihrer Website umleiten, um Erstspeicher zu verwenden, um diesen Nutzer über Websites hinweg zu verfolgen. Dies ermöglicht es Trackern, die Blockierung von Drittanbieter-Cookies zu umgehen. Zum Beispiel, wenn Sie eine Produktbewertung gelesen haben und daraufhin das Produkt kaufen möchten, könnten Sie unwissentlich zuerst zum Redirect-Tracker navigieren und _dann_ zum Einzelhändler. Dies bedeutet, dass der Tracker als Erstanbieter geladen wird und Trackingdaten mit den Identifikatoren verknüpfen kann, die sie in ihren Erstanbieter-Cookies gespeichert haben, bevor sie Sie zum Einzelhändler weiterleiten.

Tracking-Daten können verwendet werden, um ein Profil eines Nutzers mit seinen Interessen und Vorlieben zu erstellen, was in der Regel schlecht ist und in unterschiedlichem Maße störend sein kann. Zum Beispiel:

- **Gezielte Anzeigen**: Jeder hat die unheimliche Erfahrung gemacht, auf einem Gerät nach Artikeln zu suchen und dann plötzlich mit Werbung für dieselben Produkte auf allen anderen Geräten bombardiert zu werden.
- **Verkauf oder Teilen von Daten**: Einige Drittanbieter sind dafür bekannt, Tracking-Daten zusammenzustellen und dann zu verkaufen oder mit anderen zu teilen, um sie zu verschiedenen Zwecken zu nutzen, wie zum Beispiel für gezielte Werbung. Dies ist offensichtlich höchst unethisch und könnte auch illegal sein, je nachdem, wo auf der Welt es passiert.
- **Vorurteile durch Daten**: Im schlimmsten Fall könnte das Teilen von Daten dazu führen, dass der Nutzer ungerecht benachteiligt wird. Beispielsweise könnte eine Versicherungsgesellschaft Datenpunkte über einen potenziellen Kunden herausfinden, die dieser nicht preisgeben wollte, und diese als Rechtfertigung für die Erhöhung der Versicherungsprämien verwenden.

### Fingerprinting

Ein Prozess, der sehr eng mit dem Tracking verwandt ist, ist das **Fingerprinting**: dies bezieht sich speziell auf das _Identifizieren_ von Nutzern, indem eine Sammlung von Datenpunkten über sie erstellt wird, die sie von anderen Nutzern unterscheiden. Dies könnte alles von Cookie-Inhalten bis zu den verwendeten Browsern und den lokal installierten Schriftarten umfassen.

Moderne Browser ergreifen Maßnahmen, um Fingerprinting-basierte Angriffe zu verhindern, indem sie entweder verhindern, dass Informationen zugänglich sind, oder, wo Informationen verfügbar gemacht werden müssen, indem sie Variationen oder "Rauschen" einführen, das verhindert, dass sie für Identifizierungszwecke verwendet werden können.

Zum Beispiel, wenn eine Website den Browser eines Nutzers nach der verstrichenen Zeit abfragt, könnte ein Vergleich dieser Zeit mit der vom Server gemeldeten Zeit als Faktor für Fingerprinting nützlich sein. Aus diesem Grund führen Browser typischerweise eine kleine Menge Variabilität bei Zeitmessungen ein, um sie weniger nützlich zur Identifikation des Systems des Nutzers zu machen.

> [!NOTE]
> Siehe [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) auf web.dev für zusätzliche nützliche Informationen.

## Datenschutzfunktionen, die von Browsern bereitgestellt werden

Browseranbieter sind sich des Bedarfs, den Datenschutz der Nutzer zu schützen und die negativen Auswirkungen von Tracking, Fingerprinting usw. auf die Benutzererfahrung zu mindern, bewusst. Zu diesem Zweck haben sie verschiedene Funktionen implementiert, die den Datenschutz verbessern und/oder Bedrohungen mildern. In diesem Abschnitt betrachten wir verschiedene Kategorien des Datenschutzes, die Browser automatisch anwenden.

### HTTPS standardmäßig

[Transport Layer Security (TLS)](/de/docs/Web/Security/Transport_Layer_Security) bietet Sicherheit und Datenschutz, indem es Daten während der Übertragung über das Netzwerk verschlüsselt und die Technologie hinter dem [HTTPS](/de/docs/Glossary/HTTPS)-Protokoll ist. TLS ist gut für den Datenschutz, da es Drittanbieter daran hindert, übertragene Daten abzufangen und sie böswillig zu verwenden, beispielsweise zum Tracking.

Alle Browser bewegen sich in Richtung der Anforderung von HTTPS als Standard; dies ist praktisch schon der Fall, denn ohne dieses Protokoll kann man im Web nicht viel tun.

Verwandte Themen sind wie folgt:

- [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency)
  - : Ein offener Standard für die Überwachung und Prüfung von Zertifikaten, der eine Datenbank öffentlicher Protokolle erstellt, die genutzt werden kann, um falsche oder böswillige Zertifikate zu identifizieren.
- [HTTP Strict Transport Security (HSTS)](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HSTS wird von Servern verwendet, um sich vor Protokolldowngrade- und Cookie-Hijacking-Angriffen zu schützen, indem sie den Sites ermöglichen, den Clients mitzuteilen, dass sie nur HTTPS für die Kommunikation mit dem Server verwenden können.
- [HTTP/2](/de/docs/Glossary/HTTP_2)
  - : Während HTTP/2 technisch gesehen keine Verschlüsselung <em>nutzen muss</em>, unterstützen die meisten Browserentwickler es nur, wenn es mit HTTPS verwendet wird; daher kann es in dieser Hinsicht als Funktion zur Verbesserung der Sicherheit/des Datenschutzes angesehen werden.

### Opt-In für "leistungsstarke Funktionen"

Die sogenannten "leistungsstarken" Web-API-Funktionen, die auf potenziell sensible Daten und Vorgänge zugreifen können, sind nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar, was im Wesentlichen bedeutet, dass nur HTTPS zulässig ist. Nicht nur das, sondern diese Webfunktionen sind hinter einem System von Benutzerberechtigungen abgesichert. Benutzer müssen sich explizit dafür entscheiden, Funktionen wie das Zulassen von Benachrichtigungen, den Zugriff auf Geolokationsdaten, das Vollbild-Browserfenster, den Zugriff auf Medienstreams von Webcams, Webzahlungen usw. zuzulassen.

### Anti-Tracking-Technologie

Browser haben mehrere Anti-Tracking-Funktionen implementiert, die automatisch den Datenschutz ihrer Nutzer verbessern. Viele davon blockieren oder beschränken die Möglichkeit von Drittanbietersites, die in {{htmlelement("iframe")}}s eingebettet sind, auf Cookies zuzugreifen, die auf der obersten Domain gesetzt werden, Tracking-Scripts auszuführen usw.

- Der Standardwert des [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attributs der {{httpheader("Set-Cookie")}}-Header wurde auf `Lax` aktualisiert, um besseren Schutz vor Tracking und {{glossary("CSRF")}}-Angriffen zu bieten. Weitere Informationen finden Sie unter [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite).
- Browser haben alle damit begonnen, Drittanbieter-Cookies standardmäßig zu blockieren. Weitere Details finden Sie unter [Wie gehen Browser mit Drittanbieter-Cookies um?](/de/docs/Web/Privacy/Third-party_cookies#how_do_browsers_handle_third-party_cookies).
- Browser implementieren Technologien, um Drittanbieter-Cookies nur unter bestimmten Umständen zuzulassen, die den Datenschutz nicht beschädigen, oder um gängige Anwendungsfälle, die derzeit Drittanbieter-Cookies erfordern, auf alternative Weise zu realisieren. Siehe [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies) und [Ersetzen von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#replacing_third-party_cookies).
- Mehrere Browser entfernen bekannte Tracking-Parameter aus URLs — dazu gehören Firefox, Safari und Brave. Auch Browser-Erweiterungen helfen dabei, dies zu tun, z.B. [ClearURLs](https://addons.mozilla.org/en-GB/firefox/addon/clearurls/).
- Browser haben [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Redirect_tracking_protection) implementiert.

## Datenschutzüberlegungen für Client-Entwickler

Es gibt mehrere Maßnahmen, die Webentwickler ergreifen können und sollten, um den Datenschutz für ihre Nutzer zu verbessern. Die unten stehenden Abschnitte behandeln die wichtigsten davon. Einige der Kategorien sind keine rein technischen Aufgaben und erfordern die Zusammenarbeit mit anderen Teammitgliedern.

## Daten ethisch sammeln

Unternehmen sammeln viele verschiedene Daten von ihren Nutzern aus verschiedenen Gründen:

- Benutzernamen, Passwörter, E-Mails usw. für Authentifizierungszwecke.
- E-Mails, Postadressen und Telefonnummern für die Kommunikation.
- Alter, Geschlecht, geografischer Standort, Lieblingsbeschäftigungen und eine Vielzahl anderer PII für alles, von der Personalisierung der Website bis zu Kundenzufriedenheitsumfragen.
- Surfgewohnheiten auf ihren Websites und anderen Websites, um Erfolgsmetriken von Seiten und Funktionen zu messen.
- Und noch vieles mehr.

Wenn Sie Daten von Ihren Kunden erheben, haben Sie die Möglichkeit, sich integer zu verhalten, ihnen zu zeigen, dass Sie vertrauenswürdig sind, und eine großartige Beziehung mit ihnen aufzubauen, um im Gegenzug Ihre Marke zu verbessern und Ihre Erfolgschancen zu erhöhen.

Die Ethik der Datensammlung kann in drei einfache Prinzipien unterteilt werden:

- Sammeln Sie nicht mehr Daten, als Sie benötigen
- Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden
- Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

> [!NOTE]
> Die unten genannten Tipps tragen zu einer besseren, datenschutzbewussteren Benutzererfahrung bei, aber viele davon sind gesetzlich vorgeschrieben, um den Vorschriften zu entsprechen, zum Beispiel der [DSGVO](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) in der EU. Sie sollten sicherstellen, dass Sie herausfinden, welche Vorschriften in Ihrem Gebiet gelten und was Sie tun müssen, um sie einzuhalten.

### Sammeln Sie nicht mehr Daten, als Sie benötigen

Es ist verlockend, viele Daten von Ihren Nutzern zu verlangen, weil Sie denken, dass sie in Zukunft nützlich sein könnten. Allerdings erhöht jedes zusätzliche Datum, das Sie sammeln, das Risiko für die Privatsphäre Ihrer Nutzer und die Wahrscheinlichkeit, dass sie den Schritt, den sie gerade ausführen (ob es nun das Ausfüllen einer Umfrage oder das Anmelden für einen Dienst ist), abbrechen.

Es ist gut, Daten zu anonymisieren. Sie sollten auch in Betracht ziehen, ob Sie das, was Sie benötigen, erhalten können, indem Sie Ihre Datenanforderung weniger detailliert gestalten. Zum Beispiel könnten Sie einen Nutzer statt nach seinen Lieblingsprodukten fragen, ihn auch auswählen lassen, zwischen allgemeineren Kategorien.

Der beste Datenschutz ist jedoch, die Menge der gesammelten Daten zu minimieren. Im vorherigen Beispiel könnten Sie dieselbe Information durch die Betrachtung der Kaufhistorie des Nutzers ableiten. Nutzer schätzen auch die Möglichkeit, Produkte anonym zu kaufen. Sie sollten sie nicht zur Erstellung eines Kontos zwingen; wenn dies nicht notwendig für den Betrieb des Dienstes ist, sollte es ihre Wahl sein.

### Kommunizieren Sie klar, wie Sie die gesammelten Daten verwenden werden

Wenn Sie entschieden haben, welche Daten Sie sammeln werden, sollten Sie auf Ihrer Website eine Datenschutzrichtlinie veröffentlichen, die klar angibt:

- Daten, die Sie sammeln
- Wie Sie die Daten verwenden
- Parteien, mit denen Sie die Daten teilen möchten, falls überhaupt, und eine Erklärung, dass Sie die Zustimmung des Nutzers einholen, bevor Sie sie teilen
- Den Zeitraum, für den Sie die Daten speichern, bevor sie gelöscht werden
- Möglichkeiten für Nutzer, die gesammelten Daten einzusehen und sie zu löschen, wenn sie es wünschen

Wenn Ihnen Nutzer Daten zur Verfügung stellen, sollten sie die Möglichkeit haben, Ihre Datenschutzrichtlinie zu lesen und ihr zuzustimmen. Sie sollten in der Lage sein, zu entscheiden, ob sie damit einverstanden sind, diese zu akzeptieren. Und wie oben angegeben, sollten sie auch sehen können, welche Daten von ihnen Sie gesammelt haben, und sie löschen können, wenn sie es wünschen.

Wenn Sie Ihre Datenschutzrichtlinie veröffentlicht haben, müssen Sie sicherstellen, dass Sie sich daran halten - das Einhalten Ihrer Versprechen ist sehr wichtig, um das Vertrauen der Nutzer zu gewinnen. Sie sollten nur die Daten sammeln, die Sie sagen, dass Sie sammeln werden, und sie nur für den beabsichtigten Zweck verwenden, den Sie genannt haben. Wenn jemand in Ihrem Unternehmen eine clevere neue Möglichkeit findet, bestehende Daten zu verwenden, ist dies immer noch nicht in Ordnung, wenn es nicht in den Richtlinien enthalten ist, dass Sie sie zu diesem Zweck verwenden werden. Wenn Nutzer der Nutzung ihrer Daten zu einem bestimmten Zweck zugestimmt haben und der Zweck sich ändert, sollten Sie möglicherweise in Betracht ziehen, eine neue Zustimmung einzuholen.

### Löschen Sie die Daten, sobald Sie sie nicht mehr benötigen

Früher erwähnten wir, dass wir den Nutzern eine Möglichkeit bieten sollten, die von ihnen gesammelten Daten einzusehen und sie zu löschen, wenn sie es wünschen. Sie könnten dies möglicherweise Teil derselben Erfahrung machen, mit der sie Ihr Konto löschen können (ihre Daten gehen damit), oder sie zu zwei separaten Optionen machen. In jedem Fall sollten die Optionen leicht zu finden sein.

Den Nutzern die Wahl zu lassen, wann signifikante Teile von Daten gelöscht werden, ist sehr ermächtigend und fördert das Vertrauen, aber es können einige Daten geben, die Sie selbst löschen möchten. Zum Beispiel könnten einige Daten nur für ein paar Stunden oder Minuten genutzt und dann gelöscht werden, wie Daten, die während der Verwaltung einer Sitzung eines Nutzers verwendet werden, solange er eingeloggt ist.

> [!NOTE]
> Der {{httpheader("Clear-Site-Data")}} HTTP-Antwortheader ist sehr nützlich, um kurzlebige Benutzerdaten zu löschen - er weist den Browser an, seinen Cache und/oder seine Cookies und/oder sein Speicher (z.B. [Web Storage](/de/docs/Web/API/Web_Storage_API) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) Daten) zu löschen. Beispielsweise könnten Sie Ihren Server dazu bringen, ihn zusammen mit einer "Logged out confirmation page" zu senden, damit die Daten des Benutzers sicher entfernt werden, sobald der Nutzer abgemeldet ist.

## Tracking reduzieren

Früher erwähnten wir Tracking und einige der unethischen Zwecke, für die es verwendet wird. Wir sollten nicht erklären müssen, wie solche Nutzungen das Vertrauen der Nutzer untergraben können; wann immer möglich, sollten Sie Tracking-Mechanismen wie [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) nur für ethische Zwecke verwenden, wie die Übertragung des Anmelde- oder Personalisierungsstatus über Websites hinweg.

Erinnern Sie sich auch daran, dass Browser allesamt damit beginnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie alternative Technologien implementieren, um übliche Anwendungsfälle zu realisieren. Es ist eine gute Idee, sich darauf vorzubereiten, indem Sie die Anzahl der Tracking-Aktivitäten, auf die Sie angewiesen sind, reduzieren und/oder die gewünschte Informationspersistenz auf andere Weise umsetzen. Weitere Informationen finden Sie unter [Übergang von Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies#transitioning_from_third-party_cookies).

## Sorgfältige Verwaltung von Drittanbieter-Ressourcen

Natürlich wäre es einfach, den Datenschutz zu verwalten, wenn Sie sich nur um die von Ihnen erstellten Ressourcen (Code, Cookies, Websites usw.) kümmern müssten. Die eigentliche Herausforderung liegt darin, dass Ihre Website wahrscheinlich Drittanbieter-Ressourcen nutzen wird. Dies kann eingebettete Inhalte von Drittanbietern in `<iframe>`s, Bibliotheken, Frameworks, APIs, externe Ressourcen wie Bilder und Videos usw. umfassen.

Drittanbieter-Ressourcen sind ein wesentlicher Bestandteil der modernen Webentwicklung und bieten viel Power. Allerdings hat jede Drittanbieter-Ressource, die Sie auf Ihre Website lassen, möglicherweise dieselben Berechtigungen wie Ihre eigenen Ressourcen; es hängt alles davon ab, wie sie in Ihre Website integriert ist:

- JavaScript, das innerhalb von in Ihrer Website eingebetteten Drittanbieter-Inhalten in einem `<iframe>` ausgeführt wird, wird durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) getrennt, was bedeutet, dass es keinen Zugriff auf andere Skripte und Daten im obersten Browser-Kontext hätte.
- Ein Drittanbieter-Skript, das direkt in Ihrer Seite über ein {{htmlelement("script")}}-Element eingebunden ist, hätte jedoch Zugriff auf Ihre anderen Skripte und Daten, ob es nun auf Ihrer Site oder einer anderen gehostet ist. Es wäre effektiv ein Erstanbieter-Code. Ein bösartiges Skript, das auf diese Weise eingebunden ist, könnte heimlich die Daten Ihrer Nutzer stehlen, indem es sie z.B. an einen Drittanbieter-Server sendet.

Es ist wichtig, alle Drittanbieter-Ressourcen, die Sie auf Ihrer Website verwenden, zu überprüfen. Stellen Sie sicher, dass Sie wissen, welche Daten sie sammeln, welche Anfragen sie stellen und an wen, sowie welche Datenschutzrichtlinien sie haben. Ihre sorgfältig gestaltete Datenschutzrichtlinie ist nutzlos, wenn Sie ein Drittanbieter-Skript verwenden, das diese verletzt.

> [!NOTE]
> Es gibt verschiedene Tools, die Ihnen helfen können, ein Bild davon zu bekommen, welche Anfragen eine Website stellt, z.B. den [Request Map Generator](https://requestmap.webperf.tools/).

Sobald Sie Ihre Drittanbieter-Ressourcen überprüft und verstanden haben, was sie tun, sollten Sie dann ihre Nachteile als Kompromiss für den Nutzen, den sie bringen, abwägen. Wenn ein Drittanbieter-Skript kostenlos und wirklich nützlich ist, aber viele Benutzerdaten sammelt, könnten Sie:

1. Akzeptieren Sie diesen Kompromiss, aktualisieren Sie Ihre Datenschutzrichtlinie, um sie zu berücksichtigen, und hoffen Sie, dass es die Nutzer nicht zu sehr in ihrem Vertrauen beeinträchtigt.
2. Suchen Sie nach einer alternativen, weniger datenhungrigen Drittanbieter-Lösung.
3. Entwickeln Sie Ihr eigenes Tool.

Die folgende Liste bietet einige Tipps, wie Sie die Datenschutzrisiken bei der Nutzung von Drittanbieter-Ressourcen mindern können:

- Wenn Sie Drittanbieter-Ressourcen einbetten, überlegen Sie, ob es eine Möglichkeit gibt, denselben oder einen ähnlichen Effekt mit weniger Datenschutzfolgen zu erzielen. Zum Beispiel könnte es Spaß machen, einen Viewer für soziale Medienbeiträge auf Ihrer Seite zu haben, aber ist es wirklich notwendig? Wäre ein Link zu Ihrer Social-Media-Seite nicht ausreichend? Einige Drittanbieter-Dienste haben auch datenschutzfreundliche Optionen. Siehe zum Beispiel YouTubes [Einbetten von Videos und Playlists > Datenschutzmodus aktivieren](https://support.google.com/youtube/answer/171780).
- Wo möglich, sollten Sie Dritten blockieren, einen {{httpheader("Referer")}}-Header zu erhalten, wenn Sie Anfragen an sie senden. Dies kann auf ziemlich granulare Weise erfolgen, zum Beispiel durch die Verwendung von [rel="noreferrer"](/de/docs/Web/HTML/Attributes/rel/noreferrer) bei externen Links. Oder Sie könnten dies globaler für die Seite oder Site ansetzen, zum Beispiel mit dem {{httpheader("Referrer-Policy")}}-Header.

  > [!NOTE]
  > Siehe auch [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

- Verwenden Sie den {{httpheader("Permissions-Policy")}} HTTP-Header, um den Zugriff auf API-"leistungfähige Funktionen" (wie Benachrichtigungen, Geolokations-Daten, den Zugriff auf Medienstreams von Webcams usw.) zu kontrollieren. Dies kann nützlich für den Datenschutz sein, da es Drittanbieter-Seiten davon abhält, unerwartete Dinge mit diesen Funktionen zu tun, und Nutzer nicht unnötig mit Berechtigungsabfragen belästigt werden, die sie möglicherweise nicht verstehen. Sie können auch die Nutzung von "leistungstarken Funktionen" in Drittanbieter-Seiten, die in {{htmlelement("iframe")}}-Elementen eingebettet sind, kontrollieren, indem Sie Berechtigungsrichtlinien im `allow`-Attribut des `<iframe>` selbst angeben.

  > [!NOTE]
  > Siehe auch unsere [Permissions-Policy-Anleitung](/de/docs/Web/HTTP/Permissions_Policy) für weitere Informationen und Beispiele und [permissionspolicy.com](https://www.permissionspolicy.com/) für nützliche Tools, einschließlich eines Richtlinien-Generators.

- Verwenden Sie das {{htmlelement("iframe")}} `sandbox`-Attribut, um die Nutzung bestimmter Features innerhalb der im `<iframe>` eingebetteten Inhalte zu erlauben oder zu verbieten — dies inkludiert Dinge wie Downloads, Formularübermittlungen, Modals und Skripting.

> [!NOTE]
> Siehe [Drittanbieter](https://web.dev/learn/privacy/third-parties/) auf web.dev für zusätzliche nützliche Informationen zur Überprüfung und mehr.

## Schutz von Benutzerdaten

Es ist wichtig sicherzustellen, dass übertragene und gespeicherte Benutzerdaten sicher behandelt werden, sobald sie erfasst wurden. Dies ist mehr ein [Sicherheits](/de/docs/Web/Security)-Thema, aber es sei hier erwähnt — eine gute Datenschutzrichtlinie ist nutzlos, wenn Ihre Sicherheit lax ist und Angreifer die Daten von Ihnen stehlen können.

Die folgenden Tipps bieten einige Hinweise zum Schutz der Benutzerdaten:

- Sicherheit ist schwer richtig zu machen. Wenn Sie eine sichere Lösung implementieren, die das Sammeln von Daten umfasst — insbesondere wenn es sich um sensible Daten wie Anmeldeinformationen handelt — macht es Sinn, eine angesehene Lösung eines renommierten Anbieters zu verwenden. Beispielsweise wird jedes respektable serverseitige Framework eingebaute Funktionen haben, um häufige Sicherheitslücken zu schützen. Sie könnten auch erwägen, eine spezielle Lösung für Ihren Zweck zu verwenden — zum Beispiel ein Identitätsanbieter oder ein sicherer Online-Umfrageanbieter.
- Wenn Sie Ihre eigene Lösung für die Erfassung von Benutzerdaten bereitstellen möchten, stellen Sie sicher, dass Sie wissen, was Sie tun. Engagieren Sie einen erfahrenen serverseitigen Entwickler und/oder Sicherheitsingenieur, um das System zu implementieren und sicherzustellen, dass es gründlich getestet wird. Verwenden Sie Multifaktor-Authentifizierung (MFA), um einen besseren Schutz zu bieten. Erwägen Sie die Verwendung einer dedizierten API wie [Web Authentication](/de/docs/Web/API/Web_Authentication_API) or [Federated Credential Management](/de/docs/Web/API/FedCM_API), um den Kundenseitenteil der App zu optimieren.
- Wenn Sie Informationen zur Benutzereinschreibung sammeln, erzwingen Sie starke Passwörter, damit die Kontodetails Ihres Nutzers nicht leicht erraten werden können. Schwache Passwörter sind eine der Hauptursachen für Sicherheitsverletzungen. Ermutigen Sie Ihre Nutzer zur Nutzung eines Passwortmanagers, um komplexe Passwörter zu generieren und zu speichern; so müssen sie sich keine Sorgen machen, sie sich zu merken, oder ein Sicherheitsrisiko durch Aufschreiben schaffen.
- Keine sensiblen Daten in URLs einschließen — wenn ein Dritter die URL abfängt (beispielsweise über den {{httpheader("Referer")}}-Header), könnte er diese Informationen stehlen. Verwenden Sie `POST`-Anfragen statt `GET`-Anfragen, um dies zu vermeiden.
- Erwägen Sie die Verwendung von Tools wie [Content Security Policy](/de/docs/Web/HTTP/CSP) und [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), um eine Reihe von Feature-Nutzungen auf Ihrer Website durchzusetzen, die es erschweren, Schwachstellen einzuführen. Seien Sie vorsichtig beim Blockieren von Funktionen — wenn Sie die Verwendung eines Features blockieren, auf das ein Drittanbieter-Skript angewiesen ist, könnten Sie die Funktionalität Ihrer Site beeinträchtigen. Dies ist etwas, was Sie bei der Überprüfung Ihrer Drittanbieter-Ressourcen berücksichtigen können (siehe [Sorgfältige Verwaltung von Drittanbieter-Ressourcen](#sorgfältige_verwaltung_von_drittanbieter-ressourcen)).

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Datenschutz Lernen](https://web.dev/learn/privacy/) auf web.dev
- [Der Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
- [Lean Data Practices](https://www.mozilla.org/en-US/about/policy/lean-data/) auf mozilla.org

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
