---
title: "Speicherzugriffsrichtlinie: Cookies von Trackern blockieren"
short-title: Storage access policy
slug: Web/Privacy/Guides/Storage_Access_Policy
l10n:
  sourceCommit: fc801f51100908ad3f4471918cc634d767898874
---

Firefox beinhaltet eine neue Speicherzugriffsrichtlinie, die Cookies und andere Websitedaten von Drittanbieter-Trackingressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien gedacht, die schon seit vielen Jahren in Firefox verfügbar sind. Sie schützt vor Cross-Site-Tracking, während gleichzeitig die mit dem traditionellen Cookie-Blockieren verbundenen Website-Probleme minimiert werden. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir für die Auslieferung an Firefox-Release-Nutzer planen, aber möglicherweise nicht dem entspricht, was in der aktuellen Release-Version von Firefox implementiert ist. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), unserem Vorabkanal, verfügbar sind. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir derzeit nicht für die Auslieferung an Release-Nutzer planen; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können jedoch trotzdem die Funktionalität von als Tracker klassifizierten Domains beeinträchtigen.

Es wird empfohlen, Websites mit [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmechanismen umfasst. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmaßnahmen enthalten kann, die möglicherweise entfernt oder geändert werden, bevor sie unsere Release-Nutzer erreichen. Wir werden diese Seite mit den neuesten Informationen aktualisieren, während wir unsere Schutzmaßnahmen verstärken.

Diese Schutzmaßnahmen sind in Nightly standardmäßig aktiviert. Die Cookie-Richtlinie kann in anderen Versionen von Firefox über die [Inhaltsschutz-Einstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown-Menü zur Auswahl der entsprechenden Firefox-Version).

### Melden Sie defekte Websites

Wenn Sie feststellen, dass eine Website aufgrund dieser Änderung nicht funktioniert, melden Sie einen Fehler unter der Tracking-Protection-Komponente innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie defekte Websites direkt in Firefox melden, indem Sie im Bereich Inhaltsschutz des [Kontrollzentrums](https://support.mozilla.org/en-US/kb/site-information-panel) auf "Ein Problem melden" klicken (diese Verknüpfung ist möglicherweise nicht in allen Firefox-Versionen verfügbar).

## Tracking-Schutz erklärt

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking Protection-Liste, um zu bestimmen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking Protection-Liste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Zuerst verwenden wir nur die "Basic Protection"-Version der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unsere Schutzmaßnahmen erweitern, um die "Strict Protection"-Version der Liste zu verwenden.
- Zweitens verwendet Firefox eine zusätzliche "[Entity-Liste](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Site geladen werden, die der gleichen Organisation gehört](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den eingebauten [Tracking Protection](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection) URL-Classifier, um zu bestimmen, welche Ressourcen mit der Tracking Protection-Liste übereinstimmen. Domains werden mit der Liste entsprechend der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) abgeglichen. Genauer gesagt überprüfen wir den genauen Hostnamen der Ressource gegenüber der Liste sowie die letzten vier Hostnamen, die durch das Starten mit den letzten fünf Komponenten und dem sukzessiven Entfernen der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname auf der Liste | Hostname der Ressource | Übereinstimmung |
| ---------------------- | ---------------------- | --------------- |
| `example.com`          | `example.com`          | Ja              |
| `example.com`          | `a.b.example.com`      | Ja              |
| `blah.example.com`     | `example.com`          | Nein            |
| `a.b.example.com`      | `c.d.example.com`      | Nein            |
| `blah.example.com`     | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffsrichtlinie?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert wurden, vom Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und andere Websitedaten, die im Kontext von Drittanbietern geladen werden. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und sie verwenden, um Benutzer bei Besuchen auf mehreren First-Partys zu identifizieren. Speziell macht Firefox dies, indem die folgenden Einschränkungen auferlegt werden:

Cookies:

- Blockierung von {{httpheader("Cookie")}} Anforderungs-Headern und Ignorierung von {{httpheader("Set-Cookie")}} Antwort-Headern.
- Rückgabe eines leeren Strings bei Aufrufen von [`Document.cookie`](/de/docs/Web/API/Document/cookie) und Ignorierung von Anfragen zur Einstellung von Cookies über `Document.cookie`.

DOM-Speicher:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher werfen Versuche zu lesen und zu schreiben mit diesem Objekt eine `TypeError`-Ausnahme.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, auf das IndexedDB-Factory-Objekt zuzugreifen, wirft eine `SecurityError`-Ausnahme.

Nachrichten und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Versuche, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, werden eine `SecurityError`-Ausnahme werfen.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Versuche, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, werden eine `SecurityError`-Ausnahme werfen.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Versuche, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, werden eine `SecurityError`-Ausnahme werfen.

DOM-Cache:

- Aufrufe an [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching), der Bild-Cache und der [Alternative Services (Alt-Svc)-Cache](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc) sind alle für Tracking-Ressourcen partitioniert, sodass jede Top-Level-Herkunft eine separate Partition hat und Tracking-Ressourcen auf unterschiedlichen Top-Level-Herkünften separat voneinander gecacht werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sitzungsticket wieder aufgenommen, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- [Wiederverwendung von HTTP-Verbindungen](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#persistent_connections) durch als Tracker klassifizierte Domains ist auf Anfragen beschränkt, die unter der gleichen Top-Level-Herkunft auftreten. Beispielsweise wird eine Anfrage nach Inhalten von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage für Inhalte von `tracker.example` auf `shopping.example` oder mit Anfragen, die auftreten, wenn `tracker.example` direkt besucht wird (d.h. als First Party), wiederverwenden.

HTTP-Referer:

- Die Standard-[Referer-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für als Tracker klassifizierte Drittanbieter-Ressourcen ist auf `strict-origin-when-cross-origin` gesetzt.

### Was wird von der Richtlinie nicht blockiert?

1. Diese Richtlinie beschränkt derzeit nicht den Zugriff auf Drittanbieter-Speicher für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind. Wir können in Zukunft zusätzliche Einschränkungen des Zugriffs auf Drittanbieter-Speicher vornehmen.
2. Die durch die Richtlinie angewandten Einschränkungen verhindern nicht, dass Drittanbieter-Skripte, die als Tracking-Ressourcen klassifiziert sind, auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin Speicher nutzen, der auf die Top-Level-Herkunft beschränkt ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie im First-Party-Kontext geladen werden.
4. Cross-Origin-Ressourcen, die von derselben {{Glossary("registrable_domain", "registrierbaren Domain")}} wie der Top-Level-Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, [werden nicht blockiert, wenn festgestellt wird, dass die Top-Level-Seitenherkunft von der gleichen Organisation stammt wie diese](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsgenehmigungen

Um die Webkompatibilität zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, wird Firefox Speicherzugriff gewähren, der auf die First Party für eine bestimmte Drittanbieter-Herkunft beschränkt ist, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Webkompatibilitätsheuristiken, die Drittanbieter-Ressourcen, die als Tracker klassifiziert sind, Speicherzugriff gewähren, wenn ein Nutzer mit diesen Drittanbietern interagiert. Wir tun dies, wenn wir erwarten, dass das Nichterteilen des Zugriffs dazu führen würde, dass die Webseite nicht mehr funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), durch die eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Obwohl beide Ansätze das gleiche Maß an Speicherzugriff bieten, empfehlen wir Drittanbietern, auf die Verwendung der Storage Access API umzusteigen, um ihren Zugriff auf Speicher sicherzustellen.

### Automatischer Speicherzugriff bei Interaktion

Um die Webkompatibilität zu verbessern, umfasst Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktion erhalten, automatisch Speicherzugriff zu gewähren. Diese Heuristiken sollen es ermöglichen, dass einige auf dem Web häufig vorkommende Drittanbieter-Integrationen weiterhin funktionieren. Sie sind als temporär gedacht und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten für die aktuelle und zukünftige Webentwicklung nicht darauf verlassen werden.

Drittanbieter-Speicherzugriff kann gewährt werden, wenn eine Benutzeraktion ein Pop-up-Fenster auslöst, das [öffnenden Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat. Wenn der Nutzer mit dem Pop-up interagiert, erhält die Herkunft der Ressource, die ursprünglich im Pop-up-Fenster geladen wird, Speicherzugriff auf das öffnende Dokument, wenn diese Herkunft innerhalb der letzten 30 Tage als First Party Benutzerinteraktion erhalten hat.

Drittanbieter-Speicherzugriff kann auch gewährt werden, wenn ein Nutzer innerhalb desselben Fensters zu einer anderen Herkunft navigiert. Wenn der Nutzer mit dieser Herkunft interagiert und dann schnell zu einem Dokument der ursprünglichen Herkunft navigiert, wird der Zwischenseite Speicherzugriff auf das endgültige Dokument gewährt.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, bezieht sich dies auf die Website des öffnenden Dokuments oder Subdomains dieser Herkunft. Der auf die Subdomain einer Herkunft gewährte Zugriff erstreckt sich über die Top-Level-Herkunft. Als Beispiel: Wenn eine Ressource von `tracker.example` Speicherzugriff auf `foo.example.com` gewährt wird, kann `tracker.example` auf seine Cookies auf `bar.foo.example.com` und auf `example.com` zugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle von `tracker.example` geladenen Ressourcen auf jedem von `example.com` geladenen Top-Level-Dokument sofort Speicherzugriff. Dies schließt alle Ressourcen ein, die im Hauptkontext der Seite geladen sind, eingebettete `<iframe>`s und Ressourcen, die innerhalb eingebetteter `<iframe>`s geladen sind. Speicherzugriff wird nicht auf andere auf `example.com` geladene Ressourcen (z.B. `other-tracker.example`) oder auf andere First Partys, auf denen `tracker.example` eingebettet ist (z.B. `example.org`), erweitert.

Speicherzugriffsgenehmigungen erstrecken sich auf die erste Ebene der eingebetteten Kontexte, aber nicht weiter. Das bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet sind und von einer als Tracker klassifizierten Domain geladen werden, vollen Zugriff auf alle über JavaScript zugänglichen Speicherorte haben werden. Ebenso werden Anfragen für in `<iframe>`s eingebettete Ressourcen, die im Hauptkontext der Seite geladen sind, Zugriff auf HTTP-Cookies haben. Weiter verschachtelte Kontexte, einschließlich solcher, die von der als Tracker klassifizierten Herkunft stammen, werden keinen Speicherzugriff erhalten.

Betrachten Sie die folgenden Einbettungsszenarien auf einer von `example.com` geladenen Top-Level-Seite, auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                            | tracker.example Ressourcenspeicherzugriff |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                        | HTTP: Ja JS: N/A                          |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt ein Bild von `tracker.example`.                                     | HTTP: Ja JS: N/A                          |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt ein `<iframe>` von `tracker.example`.                               | HTTP: Ja JS: Nein                         |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                                        | HTTP: Ja JS: Ja                           |
| `example.com` bettet ein `<iframe>` von `example.com` ein ( gleiche Herkunft). Das eingebettete `<iframe>` lädt ein `<iframe>` von `tracker.example`. | HTTP: Ja JS: Nein                         |

### Ablauf des Speicherzugriffs

Die Speicherzugriffsgenehmigung läuft nach 30 Tagen ab. Als Tracking-Ressourcen klassifizierte Domains können Drittanbieter-Speicherzugriff auf mehreren First Partys gewährt bekommen, und die Speicherberechtigung für jede Partei läuft unabhängig voneinander ab. Die oben genannten Heuristiken dienen auch dazu, die Lebensdauer einer Drittanbieter-Speichererlaubnis für Ursprünge, die bereits Zugriff erhalten haben, zu verlängern. Jedes Mal, wenn die Heuristik aktiviert wird oder ein erfolgreicher Aufruf an die Storage Access API erfolgt, wird das vorhandene Speicherzugriffsablaufdatum um 30 Tage ab dem Zeitpunkt der vorherigen Zugriffserteilung verlängert.

Bitte beachten Sie, dass wir in Zukunft Änderungen daran erwarten, wie lange der Speicherzugriff gültig bleibt. Wie zuvor erwähnt, garantiert die Verwendung der Storage Access API, dass Sie als Drittanbieter auch weiterhin Zugriff auf Speicher haben werden.

## Fehlersuche

Wir ermutigen Webseitenbetreiber, ihre Websites zu testen, insbesondere diejenigen, die auf Drittanbieter-Inhaltsintegrationen angewiesen sind. Wir haben mehrere neue Funktionen in Firefox hinzugefügt, um das Testen zu erleichtern.

### Benachrichtigungen der Entwickler-Tools

Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox-Entwicklungstools enthält jetzt einen Indikator für alle Ressourcensanforderungen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Spalte "Domain" angezeigt. In dem unten gezeigten Beispielbild ist `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an example.com dies nicht ist.

![Netzwerkanfragen in Firefox DevTools, die anzeigen, welche Tracking-Ressourcen mit einem kleinen Schildsymbol versehen sind](network-requests.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Schutzliste

Sind Sie neugierig, wie die Dinge funktionieren würden, wenn ein Drittanbieter-Domain auf Ihrer Seite als Tracker klassifiziert wäre? Wir haben eine Voreinstellung hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zum Tracking Protection-URL-Classifier hinzuzufügen. Gehen Sie dazu wie folgt vor:

1. Geben Sie `about:config` in die Adressleiste ein. Wenn Ihnen eine Seite angezeigt wird, die Sie warnt, "Dies könnte Ihre Garantie ungültig machen!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Präferenznamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Voreinstellung bereits existiert, bearbeiten Sie den Voreinstellungswert.
4. Wenn die Voreinstellung nicht existiert, klicken Sie auf "String" und dann auf "+", um eine neue Voreinstellung zu erstellen.
5. Geben Sie für den Voreinstellungswert durch Kommas getrennte Ursprünge ein, die Sie als Tracker klassifiziert haben möchten. Zum Beispiel "example.net,example.org".

> [!WARNING]
> Achten Sie darauf, diese Einträge nach Abschluss der Tests zu entfernen.

## FAQ

Diese Cookie-Richtlinie hat das Potenzial, zu Website-Problemen zu führen, ist jedoch so konzipiert, dass gängige Drittanbieter-Integrationen weiterhin funktionieren, während Cross-Site-Tracking verhindert wird. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in unterschiedlichen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffsrichtlinie Werbung auf meiner Website blockieren?

Nein — diese Funktion beschränkt nur den Zugriff auf Cookies und Websitedaten, die zur Benutzerverfolgung über Websites hinweg verwendet werden können. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Werbeanzeigen.

### Ich nutze einen Drittanbieter-Analysedienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Das hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analytik-Anbieter werden nicht mehr in der Lage sein, ihren Drittanbieter-Speicher zur Datensammlung zu nutzen. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieter-Domain beschränkt sind, oder lokalen Speicher und andere Websitedaten, die unter ihrem Ursprung gespeichert sind, keinen Zugriff mehr auf diese Identifikatoren über andere Websites hinweg haben werden.

Wenn diese Dienste in den Hauptkontext der Seite eingebettet sind, können sie weiterhin First-Party-Cookies und Website-Speicher verwenden, um Benutzer bei Besuchen auf der spezifischen First-Party-Domain zu verfolgen.

### Ich verwende Drittanbieterdienste für soziale Anmeldungen, Like- und Share-Button-Integrationen. Werden meine Nutzer weiterhin in der Lage sein, diese Dienste zu nutzen?

Das hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen weiterhin funktionieren, wie sie es unter der aktuellen Cookie-Richtlinie von Firefox tun, mit einigen geringfügigen Unterschieden in der Benutzererfahrung.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Nutzer erstmals eine neue First Party besucht. Somit kann der Nutzer trotz Anmeldung, wenn er direkt die Website des Anbieters besucht, als abgemeldet erscheinen. Abhängig von der Art der Integration muss der Nutzer möglicherweise eine Aktion ausführen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor dem Anbieter Zugriff auf seine Cookies gewährt wird. Beispielsweise:

- Bei der sozialen Anmeldung muss der Nutzer möglicherweise auf einen Anmeldebutton auf der First Party klicken.
- Bei Like- oder Share-Buttons muss der Nutzer zunächst mit dem Button in einem abgemeldeten Zustand interagieren. Sobald er dies tut, werden viele soziale Inhaltsanbieter ihn auffordern, sich einzuloggen.

Nach diesen Interaktionen wird dem Anbieter Drittanbieter-Speicherzugriff gewährt, wenn er den Nutzer auf eine Weise auffordert, die von den oben beschriebenen Speicherzugriffsaktivierungsheuristiken erfasst wird. Diese Anbieter sollten in Erwägung ziehen, so bald wie möglich ausdrücklich Speicherzugriff über die Storage Access API anzufordern. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich verwende Drittanbieter-Pixel und andere Werkzeuge, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin die Konversionsrate meiner Anzeigen messen können?

Das hängt davon ab, wie der Drittanbieter das Messwerkzeug implementiert hat, aber im Allgemeinen wird die Messung der Anzeigenkonversion schwieriger sein. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer sozialen Medien Website, die mehrere Male von einem Nutzer gesehen, aber nie angeklickt wird. Dieser Nutzer besucht später Ihre Website, die ein Konversions-Tracking-Tag von derselben sozialen Medien Website enthält. Diese Art der Konversion wird oft als "View-Through-Konversion" bezeichnet. Da die sozialen Medien Websites keinen Zugriff auf ihren Drittanbieter-Speicher haben, werden sie den Nutzer nicht als denselben Nutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass die meisten Techniken zur Verfolgung von View-Through-Konversionen, einschließlich der von Anzeigennetzwerken angebotenen, nicht mehr funktionieren werden.
2. Sie schalten eine Anzeige auf einem Anzeigennetzwerk oder einer sozialen Medien Website, die von einem Nutzer angeklickt wird. Dieser Nutzer landet auf Ihrer Website, die ein Konversions-Tracking-Tag von derselben Website enthält, die Ihre Anzeige geschaltet hat. Diese Art der Konversion wird oft als "Click-Through-Konversion" bezeichnet. Da die sozialen Medien Website oder das Anzeigennetzwerk keinen Zugriff auf ihren Drittanbieter-Speicher hat, werden sie den Nutzer nicht als denselben Nutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass diese Version der Click-Through-Konversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer sozialen Medien Website erscheint. Ein Nutzer klickt auf Ihre Anzeige und wird auf eine Landingpage weitergeleitet, die ein Konversions-Tracking-Tag des Drittanbieters enthält. Auf der sozialen Medien Website versieht das Netzwerk die URL der Anzeigelandingpage mit einem Abfrageparameter, der signalisiert, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website überprüft das Tag des Anzeigennetzwerks die URL-Abfrageparameter und speichert alle Anzeigentracking-Parameter im First-Party-Speicher. Wenn ein Nutzer später ein Konversionsereignis abschließt, überprüft das Tag des Netzwerks den First-Party-Speicher, um zu bestimmen, welcher Klick (oder Klicks) für den Besuch verantwortlich war. Wir erwarten, dass Click-Through-Konversionen, die auf diese Weise implementiert sind, weiterhin funktionieren.
