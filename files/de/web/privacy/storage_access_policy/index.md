---
title: "Speicherzugriffsrichtlinie: Cookies von Trackern blockieren"
slug: Web/Privacy/Storage_Access_Policy
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Firefox enthält eine neue Speicherzugriffsrichtlinie, die Cookies und andere Webseitendaten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien konzipiert, die in Firefox seit vielen Jahren verfügbar sind. Diese Richtlinie schützt vor Cross-Site-Tracking, während sie die mit der traditionellen Cookie-Blockierung verbundenen Webseitenfehler minimiert. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir für Firefox-Release-Benutzer bereitstellen wollen, möglicherweise stimmt sie jedoch nicht mit dem überein, was in der aktuellen Release-Version von Firefox implementiert ist. Der Grund dafür ist, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), unserem Vorabveröffentlichungskanal, implementiert werden. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir noch nicht für Release-Benutzer bereitstellen möchten; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können jedoch die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen, Webseiten mit [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmaßnahmen enthält. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmaßnahmen enthalten kann, die entfernt oder geändert werden, bevor sie unsere Release-Benutzer erreichen. Wir halten diese Seite mit den neuesten Informationen auf dem Laufenden, während wir unsere Schutzmaßnahmen verstärken.

Diese Schutzmaßnahmen sind standardmäßig in Nightly aktiviert. Die Cookie-Richtlinie kann in anderen Versionen von Firefox über die [Inhaltsblockierungseinstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verknüpfte Dokumentation enthält ein Dropdown-Menü zur Auswahl der geeigneten Firefox-Version).

### Fehlerhafte Webseiten melden

Wenn Sie feststellen, dass eine Webseite durch diese Änderung fehlerhaft ist, melden Sie einen Fehler unter der Komponente "Tracking Protection" innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie fehlerhafte Webseiten direkt in Firefox melden, indem Sie im Abschnitt "Inhaltsblockierung" des [Kontrollzentrums](https://support.mozilla.org/en-US/kb/site-information-panel) auf "Problem melden" klicken (diese Abkürzung ist möglicherweise nicht in allen Versionen von Firefox verfügbar).

## Erklärung des Tracking-Schutzes

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking-Schutzliste, um festzustellen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking-Schutzliste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die Version mit "Grundschutz" der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unseren Schutz erweitern, um die Version "Strengschutz" der Liste zu verwenden.
- Zweitens verwendet Firefox eine zusätzliche "[Entitätenliste](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer obersten Ebene von der gleichen Organisation geladen werden](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den integrierten [Tracking-Schutz](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection) URL-Klassifikator, um festzustellen, welche Ressourcen mit der Liste des Tracking-Schutzes übereinstimmen. Domains werden gemäß der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Insbesondere prüfen wir den genauen Hostnamen der Ressource gegen die Liste sowie die letzten vier Hostnamen, die durch Starten mit den letzten fünf Komponenten und sukzessives Entfernen der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname auf der Liste | Hostname der Ressource | Übereinstimmung |
| ---------------------- | ---------------------- | --------------- |
| `example.com`          | `example.com`          | Ja              |
| `example.com`          | `a.b.example.com`      | Ja              |
| `blah.example.com`     | `example.com`          | Nein            |
| `a.b.example.com`      | `c.d.example.com`      | Nein            |
| `blah.example.com`     | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffsrichtlinie?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert wurden, vom Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und anderen Webseitenspeicher, die in einem Drittanbieter-Kontext geladen werden. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und verwenden, um Benutzer über Besuche bei mehreren Erstanbietern hinweg zu identifizieren. Insbesondere tut Firefox dies, indem es die folgenden Einschränkungen auferlegt:

Cookies:

- {{httpheader("Cookie")}}-Anfrageheader blockieren und {{httpheader("Set-Cookie")}}-Antwortheader ignorieren.
- Eine leere Zeichenfolge für Aufrufe an {{domxref("Document.cookie")}} zurückgeben und Anforderungen zum Setzen von Cookies über `Document.cookie` ignorieren.

DOM-Speicher:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche führen zu einer `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher führen Versuche, dieses Objekt zu lesen und zu schreiben, zu einer `TypeError`-Ausnahme.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, auf das IndexedDB-Fabrikobjekt zuzugreifen, führt zu einer `SecurityError`-Ausnahme.

Messaging und Arbeiter:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Der Versuch, einen neuen {{domxref("BroadcastChannel")}} zu erstellen, führt zu einer `SecurityError`-Ausnahme.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Der Versuch, einen neuen {{domxref("SharedWorker")}} zu erstellen, führt zu einer `SecurityError`-Ausnahme.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Der Versuch, einen neuen {{domxref("ServiceWorker")}} zu erstellen, führt zu einer `SecurityError`-Ausnahme.

DOM-Cache:

- Aufrufe von {{domxref("CacheStorage")}} werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching), der Bild-Cache und der [Alternative Services (Alt-Svc) cache](/de/docs/Web/HTTP/Headers/Alt-Svc) sind alle partitioniert für Tracking-Ressourcen, sodass jeder top-level Ursprung eine separate Partition hat und Tracking-Ressourcen auf verschiedenen top-level Ursprüngen getrennt zwischengespeichert werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sitzungsticket wieder aufgenommen, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- [HTTP-Verbindungswiederverwendung](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#persistent_connections) von als Tracker klassifizierten Domains ist auf Anfragen beschränkt, die unter demselben top-level Ursprung stattfinden. Zum Beispiel wird eine Anfrage für Inhalte von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage für Inhalte von `tracker.example` auf `shopping.example` wiederverwenden oder mit Anfragen, die auftreten, wenn `tracker.example` direkt besucht wird (d.h. als Erstanbieter).

HTTP-Referrer

- Die Standard-[Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy) für Drittanbieter-Ressourcen, die als Tracker klassifiziert werden, ist auf `strict-origin-when-cross-origin` festgelegt.

### Was wird durch die Richtlinie nicht blockiert?

1. Diese Richtlinie beschränkt derzeit nicht den Speicherzugriff durch Drittanbieter für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind. Wir könnten in Zukunft zusätzliche Beschränkungen für den Drittanbieterspeicherzugriff anwenden.
2. Die durch die Richtlinie angewendeten Beschränkungen verhindern nicht, dass Drittanbieterskripte, die als Tracking-Ressourcen klassifiziert sind, auf den Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin Speicher nutzen, der auf den top-level Ursprung beschränkt ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugang zu ihrem eigenen Speicher, wenn sie in einem Erstanbieter-Kontext geladen werden.
4. Cross-Origin-Ressourcen, die vom selben {{Glossary("eTLD", "eTLD+1")}} wie der top-level Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert werden, [werden nicht blockiert, wenn der top-level Page-Ursprung als von derselben Organisation stammend bestimmt wird](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsgewährungen

Um die Webkompatibilität zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, wird Firefox Speicherzugriff im Umfang des Erstanbieters für einen bestimmten Drittanbieter-Ursprung gewähren, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Webkompatibilitätsheuristiken, die Drittanbieterressourcen Zugriff auf Speicher gewähren, wenn ein Benutzer mit diesen Drittanbietern interagiert. Wir tun dies, wenn wir erwarten, dass der Nichterhalt des Zugriffs dazu führen würde, dass die Webseite nicht mehr funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), durch die eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie {{domxref("Document.requestStorageAccess()")}} aufrufen. Obwohl beide Ansätze die gleiche Ebene des Speicherzugriffs bieten, empfehlen wir Drittanbietern, zur Storage Access API zu wechseln, um ihren Speicherzugriff sicherzustellen.

### Automatischer Speicherzugriff bei Interaktion

Um die Webkompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Nutzerinteraktion erhalten, automatisch Speicherzugriff zu gewähren. Diese Heuristiken sollen es einigen gebräuchlichen Drittanbieter-Integrationen im Web ermöglichen, weiterhin zu funktionieren. Sie sind als temporär gedacht und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten nicht für aktuelle und zukünftige Webentwicklungen genutzt werden.

Drittanbieter-Speicherzugriff kann Ressourcen gewährt werden, die als Tracking-Ressourcen klassifiziert sind, wenn eine Nutzeraktion ein Pop-up-Fenster mit [opener access](/de/docs/Web/API/Window/opener) zum ursprungsdokument auslöst. In diesem Fall gibt es drei mögliche Möglichkeiten, wie ein Drittanbieter-Ursprung den Zugriff erhalten kann:

- Der Ursprung der Ressource, die im Pop-up-Fenster initial geladen wird, erhält Speicherzugriff auf das Opener-Dokument, wenn dieser Ursprung in den letzten 30 Tagen Nutzerinteraktion als Erstanbieter erhalten hat.
- Nachdem die initiale Ressource im Pop-up-Fenster geladen wurde, kann das Fenster eine Reihe von Umleitungen zu anderen Hosts durchlaufen. Wenn ein Nutzer nach einer Umleitung mit dem Pop-up-Fenster interagiert, erhält der Ursprung des Inhalts, der im Pop-up-Fenster geladen wird, Speicherzugriff auf das Opener-Dokument.
- Wenn es eine top-level Umleitung von einem Tracking-Ursprung zu einem Nicht-Tracking-Ursprung gibt, erhält der Tracking-Ursprung kurzlebigen Speicherzugriff auf den Nicht-Tracking-Ursprung und alle anderen Nicht-Tracking-Ursprünge, die weiter unten in der Umleitkette erscheinen (d.h., wenn der Ladevorgang weiter umleitet). Der Tracking-Ursprung muss innerhalb der letzten 30 Tage Nutzerinteraktion als Erstanbieter erhalten haben, und die Speicherzugriffsberechtigung läuft nach 15 Minuten ab.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist er auf die Seite des Opener-Dokuments oder Subdomains dieses Ursprungs beschränkt. Zugriff, der auf der Subdomain eines Ursprungs gewährt wird, erstreckt sich auf den top-level Ursprung. Zum Beispiel, wenn einer Ressource von `tracker.example` Speicherzugriff auf `foo.example.com` gewährt wird, dann kann `tracker.example` seine Cookies auf `bar.foo.example.com` und auf `example.com` zugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle von `tracker.example` auf einem übergeordneten Dokument von `example.com` geladenen Ressourcen sofort Speicherzugriff. Dies schließt alle im Hauptkontext der Seite geladenen Ressourcen ein, eingebettete `<iframe>`s und Ressourcen, die innerhalb von eingebetteten `<iframe>`s geladen sind. Speicherzugriff wird nicht auf andere auf `example.com` geladene Ressourcen erweitert (z.B. `other-tracker.example`) noch auf andere Erstanbieter, auf denen `tracker.example` eingebettet ist (z.B. `example.org`).

Die Gewährung von Speicherzugriff erstreckt sich in den ersten Grad der verschachtelten Kontexte, aber nicht weiter. Dies bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet und von einer als Tracker klassifizierten Domain geladen werden, vollen Zugriff auf alle über JavaScript zugänglichen Speicherorte haben werden. Ebenso haben Anfragen für Ressourcen, die in `<iframe>`s geladen werden, die im Hauptkontext der Seite eingebettet sind, Zugriff auf HTTP-Cookies. Weitere verschachtelte Kontexte, einschließlich, aber nicht beschränkt auf diese vom als Tracker klassifizierten Ursprung, erhalten keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungsszenarien auf einer top-level Seite, geladen von `example.com`, auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                            | tracker.example Ressource Speicherzugriff |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                         | http: Ja JS: N/A                         |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt ein Bild von `tracker.example`.                      | HTTP: Ja JS: N/A                         |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` bettet dann ein `<iframe>` von `tracker.example` ein.    | HTTP: Ja JS: Nein                        |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                        | HTTP: Ja JS: Ja                          |
| `example.com` bettet ein `<iframe>` von `example.com` (gleicher Ursprung) ein. Das verschachtelte `<iframe>` bettet ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                        |

### Speicherzugriffsablauf

Die Speicherzugriffsgewährung läuft nach 30 Tagen ab. Als Tracking-Ressourcen klassifizierte Domains können für mehrere Erstanbieter Drittanbieter-Speicherzugriff erhalten, und die Speichererlaubnis für jede Partei läuft unabhängig ab. Die obigen Heuristiken werden auch dazu dienen, die Lebensdauer einer Drittanbieter-Speichererlaubnis für Ursprünge zu verlängern, die bereits Zugriff erhalten haben. Jedes Mal, wenn die Heuristik aktiviert wird, oder ein erfolgreicher Aufruf der Storage Access API erfolgt, wird die vorherige Speicherzugriffsablaufzeit um 30 Tage verlängert, gerechnet ab dem Zeitpunkt, zu dem der vorherige Zugriff gewährt wurde.

Bitte beachten Sie, dass wir in Zukunft voraussichtlich Änderungen daran vornehmen werden, wie lange der Speicherzugriff gültig bleibt. Wie bereits erwähnt, wird die Nutzung der Storage Access API der Weg sein, um sicherzustellen, dass Sie auch in Zukunft als Drittanbieter Speicher nutzen können.

## Debugging

Wir ermutigen Webseitenbetreiber dazu, ihre Seiten zu testen, insbesondere solche, die auf Drittanbieterinhalts-Integrationen angewiesen sind. Wir haben mehrere neue Funktionen zu Firefox hinzugefügt, um das Testen zu erleichtern.

### Benachrichtigungen in den Entwicklerwerkzeugen

Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox-Entwicklerwerkzeugen zeigt nun einen Indikator für alle Ressourcenzugriffe, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schild-Symbol in der Domain-Spalte angezeigt. Im untenstehenden Beispielfoto ist `trackertest.org` als Tracking-Ressource klassifiziert, während die Anforderung an example.com dies nicht ist.

![Netzwerkanfragen in den Firefox-Entwicklerwerkzeugen, welche die als Tracking-Ressourcen klassifizierten Anfragen mit einem kleinen Schildsymbol angeben](screen_shot_2018-09-21_at_10.34.22_am.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Schutzliste

Neugierig, wie es funktionieren wird, wenn eine Drittanbieterdomain auf Ihrer Seite als Tracker klassifiziert wird? Wir haben eine Voreinstellung hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zur Tracking-Schutz-URL-Klassifikator hinzuzufügen. Um dies zu tun:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Sie auf einer Seite gewarnt werden, dass "dies Ihre Garantie ungültig machen kann!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Voreinstellungsnamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Voreinstellung bereits existiert, bearbeiten Sie den Voreinstellungswert.
4. Wenn die Voreinstellung nicht existiert, klicken Sie auf "String" und dann auf "+", um eine neue Voreinstellung zu erstellen.
5. Geben Sie für den Voreinstellungswert die Ursprünge im Komma-getrennten Format ein, die Sie als Tracker klassifiziert haben möchten. Zum Beispiel: "example.net,example.org".

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einträge entfernen, nachdem Sie mit dem Testen fertig sind.

## FAQ

Diese Cookie-Richtlinie hat das Potenzial, zu Webseitenfehlern zu führen, wurde jedoch so gestaltet, dass gängige Drittanbieter-Integrationen weiterhin funktionieren können, während Cross-Site-Tracking verhindert wird. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffsrichtlinie Werbeanzeigen auf meiner Webseite blockieren?

Nein — dieses Feature schränkt nur den Zugriff auf Cookies und Webseitendaten ein, die verwendet werden können, um Benutzer über Webseiten hinweg zu verfolgen. Das Blockieren von Tracking-Identifikatoren verhindert nicht das Anzeigen von Werbeanzeigen.

### Ich nutze einen Drittanbieter-Analysedienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Das hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analysetools werden nicht mehr in der Lage sein, ihren Drittanbieterspeicher zur Datenerfassung zu nutzen. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieter-Domain beschränkt sind, oder lokalen Speicher und andere im Ursprung gespeicherte Webseiteninhalte verwenden, keinen Zugang zu diesen Identifikatoren über andere Webseiten haben werden.

Wenn diese Dienste in den Hauptkontext der Seite eingebettet sind, können sie weiterhin Erstanbieter-Cookies und Webseitenspeicher verwenden, um Benutzer über Seitenbesuche auf dieser spezifischen Erstanbieter-Domain hinweg zu verfolgen.

### Ich nutze Drittanbieterdienste für die soziale Anmeldung, Like- und Share-Button-Integration. Werden meine Benutzer diese Dienste weiterhin nutzen können?

Das hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen weiter funktionieren werden, wie sie es unter der aktuellen Cookie-Richtlinie von Firefox tun, allerdings mit einigen geringfügigen Unterschieden im Benutzererlebnis.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, wird beim ersten Besuch eines neuen Erstanbieters keinen Zugang zu seinen Drittanbieter-Cookies haben. Daher kann der Benutzer für den Dienst ausgeloggt erscheinen, obwohl er beim direkten Besuch der Webseite des Anbieters eingeloggt ist. Abhängig von der Art der Integration kann der Benutzer Maßnahmen ergreifen müssen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor der Anbieter Zugriff auf seine Cookies erhält. Beispielsweise:

- Zur sozialen Anmeldung muss der Benutzer möglicherweise auf einen Anmeldebutton beim Erstanbieter klicken.
- Für soziale Like- oder Share-Buttons muss der Benutzer zunächst im ausgeloggten Zustand mit dem Button interagieren. Sobald dies geschieht, werden viele soziale Inhaltsanbieter den Benutzer auffordern, sich anzumelden.

Nach diesen Interaktionen erhält der Anbieter Drittanbieterspeicherzugriff, wenn er den Benutzer auf eine Weise auffordert, die von den oben beschriebenen Heuristiken zur Aktivierung des Speicherzugriffs erfasst wird. Diese Anbieter sollten erwägen, so bald wie möglich explizit über die Storage Access API Zugriff auf den Speicher zu beantragen. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich nutze Drittanbieter-Pixel und andere Tools, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin in der Lage sein, die Konversionsrate meiner Anzeigen zu messen?

Das hängt davon ab, wie der Drittanbieter das Messwerkzeug implementiert hat, aber im Allgemeinen wird die Messung der Anzeigenkonversion schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Webseite, die mehrmals von einem Benutzer gesehen wird, aber nie geklickt wird. Dieser Benutzer besucht später Ihre Webseite, die ein Konversionsverfolgungs-Tag derselben Social-Media-Webseite enthält. Diese Art der Konversion wird oft als "View-Through-Konversion" bezeichnet. Da die Social-Media-Webseite keinen Zugang zu ihrem Drittanbieterspeicher hat, wird sie den Benutzer nicht als denselben Benutzer erkennen, der die Anzeigen auf ihrer Webseite gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass die meisten Techniken zur Verfolgung von View-Through-Konversionen nicht mehr funktionieren werden, einschließlich derjenigen, die von Anzeigennetzwerken bereitgestellt werden.
2. Sie schalten eine Anzeige auf einem Anzeigennetzwerk oder einer Social-Media-Webseite, die von einem Benutzer geklickt wird. Dieser Benutzer landet auf Ihrer Webseite, die ein Konversionsverfolgungstags von derselben Webseite enthält, die Ihre Anzeige geschaltet hat. Diese Art der Konversion wird oft als "Click-Through-Konversion" bezeichnet. Da die Social-Media-Webseite oder das Anzeigennetzwerk keinen Zugang zu ihrem Drittanbieterspeicher hat, wird sie den Benutzer nicht als denselben Benutzer erkennen, der die Anzeigen auf ihrer Webseite gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass diese Version der Click-Through-Konversion nicht mehr funktionieren wird.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Webseite erscheint. Ein Benutzer klickt auf Ihre Anzeige und wird auf eine Landingpage weitergeleitet, die ein Konversionsverfolgungstags vom Drittanbieternetzwerk enthält. Auf der Social-Media-Webseite annotiert das Netzwerk die URL der Anzeigen-Landingpage mit einem Abfrageparameter, der signalisiert, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Webseite überprüft das Tag des Anzeigennetzwerks die URL-Abfrageparameter und speichert alle Anzeigenerfassungseinstellungen im Erstanbieterspeicher. Wenn ein Benutzer später ein Konversionereignis abschließt, überprüft das Netzwerk-Tag den Erstanbieterspeicher, um festzustellen, welcher Klick (oder Klicks) für den Besuch verantwortlich war. Wir erwarten, dass Click-Through-Konversionen, die auf diese Weise implementiert sind, weiterhin funktionieren werden.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
