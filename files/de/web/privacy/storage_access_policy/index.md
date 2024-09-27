---
title: "Speicherzugriffsrichtlinie: Cookies von Trackern blockieren"
slug: Web/Privacy/Storage_Access_Policy
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Firefox umfasst eine neue Speicherzugriffsrichtlinie, die Cookies und andere Websitedaten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien gedacht, die in Firefox seit vielen Jahren verfügbar sind. Diese Richtlinie schützt vor Cross-Site-Tracking und minimiert gleichzeitig die Seitenausfälle, die mit der traditionellen Cookie-Blockierung verbunden sind. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir an Firefox Release-Nutzer ausliefern möchten, aber möglicherweise nicht mit dem übereinstimmt, was in der aktuellen Release-Version von Firefox implementiert ist. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie im [Firefox Nightly](https://www.mozilla.org/de/firefox/channel/desktop/#nightly), unserem Vorab-Kanal, erscheinen. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir noch nicht an Release-Nutzer ausliefern möchten; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können jedoch trotzdem die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen Websites, mit [Firefox Nightly](https://www.mozilla.org/de/firefox/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmaßnahmen enthält. Wie oben beschrieben, beachten Sie, dass Nightly möglicherweise zusätzliche Schutzmaßnahmen enthält, die entfernt oder geändert werden können, bevor sie unsere Release-Nutzer erreichen. Wir werden diese Seite mit den neuesten Informationen aktualisieren, während wir unsere Schutzmaßnahmen verstärken.

Diese Schutzmaßnahmen sind in Nightly standardmäßig aktiviert. Die Cookie-Richtlinie kann in anderen Versionen von Firefox über die [Content-Blocking-Einstellungen](https://support.mozilla.org/de/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown-Menü zur Auswahl der entsprechenden Firefox-Version).

### Fehlermeldung bei kaputten Websites

Wenn Sie feststellen, dass eine Website infolge dieser Änderung nicht funktioniert, melden Sie einen Fehler im Tracking-Protection-Komponenten innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified) ein. Alternativ können Sie kaputte Websites direkt in Firefox melden, indem Sie im Abschnitt Content Blocking des [Control Centers](https://support.mozilla.org/de/kb/site-information-panel) auf "Ein Problem melden" klicken (diese Verknüpfung ist möglicherweise nicht in allen Versionen von Firefox verfügbar).

## Erklärung des Schutzes vor Verfolgung

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking-Protection-Liste, um zu bestimmen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking-Protection-Liste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die "Basic Protection"-Version der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unsere Schutzmaßnahmen erweitern, um die "Strict Protection"-Version der Liste zu verwenden.
- Zweitens verwendet Firefox eine zusätzliche "[Entity-List](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Site geladen werden, die derselben Organisation gehört](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den integrierten [Tracking Protection](https://support.mozilla.org/de/kb/what-happened-tracking-protection) URL-Klassifikator, um zu bestimmen, welche Ressourcen mit der Tracking-Protection-Liste übereinstimmen. Domains werden gemäß der [SafeBrowsing v4 Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Speziell prüfen wir den genauen Hostnamen der Ressource gegenüber der Liste, sowie die letzten vier Hostnamen, die durch Beginn mit den letzten fünf Komponenten und anschließender Entfernung der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname auf der Liste | Hostname der Ressource | Übereinstimmend |
| ---------------------- | ---------------------- | --------------- |
| `example.com`          | `example.com`          | Ja              |
| `example.com`          | `a.b.example.com`      | Ja              |
| `blah.example.com`     | `example.com`          | Nein            |
| `a.b.example.com`      | `c.d.example.com`      | Nein            |
| `blah.example.com`     | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffsrichtlinie?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert wurden, daran [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und andere Websitedaten in einem Drittanbieter-Kontext abzurufen. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und sie verwenden, um Nutzer bei Besuchen auf mehreren First-Party-Websites zu identifizieren. Insbesondere erzwingt Firefox die folgenden Einschränkungen:

Cookies:

- Blockieren der {{httpheader("Cookie")}}-Request-Header und Ignorieren der {{httpheader("Set-Cookie")}}-Response-Header.
- Rückgabe eines leeren Strings für Aufrufe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) und Ignorieren von Anfragen, Cookies über `Document.cookie` zu setzen.

DOM-Speicher:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher werfen Lese- und Schreiboperationen mit diesem Objekt eine `TypeError`-Ausnahme.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, das IndexedDB-Fabrik-Objekt zuzugreifen, wirft eine `SecurityError`-Ausnahme.

Nachrichten und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Der Versuch, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, wird eine `SecurityError`-Ausnahme werfen.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Der Versuch, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, wird eine `SecurityError`-Ausnahme werfen.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Der Versuch, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, wird eine `SecurityError`-Ausnahme werfen.

DOM-Cache:

- Aufrufe an [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einer `SecurityError`-Ablehnung zurückgewiesen.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching), der Bild-Cache und der [Alternative-Services (Alt-Svc) Cache](/de/docs/Web/HTTP/Headers/Alt-Svc) sind alle für Tracking-Ressourcen partitioniert, so dass jeder Top-Level-Ursprung eine separate Partition hat und Tracking-Ressourcen auf verschiedenen Top-Level-Ursprüngen separat voneinander zwischengespeichert werden.

Netzwerkverbindungen:

- Die [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden beim Aufbau einer HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource, die als Tracker klassifiziert ist, nicht mit einem Sitzungsticket wieder aufgenommen.
- Die [HTTP-Verbindungswiederverwendung](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#persistent_connections) durch als Tracker klassifizierte Domains ist auf Anfragen beschränkt, die unter demselben Top-Level-Ursprung erfolgen. Zum Beispiel wird eine Anfrage nach Inhalten von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage nach Inhalten von `tracker.example` auf `shopping.example` oder mit Anfragen, die auftreten, wenn `tracker.example` direkt besucht wird (d.h. als First-Party), wiederverwenden.

HTTP-Referrer

- Die Standard-[Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy) für als Tracker klassifizierte Drittanbieter-Ressourcen wird auf `strict-origin-when-cross-origin` gesetzt.

### Was wird nicht von der Richtlinie blockiert?

1. Diese Richtlinie beschränkt derzeit nicht den Zugriff auf Drittanbieterspeicherung für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind. Wir könnten in Zukunft zusätzliche Beschränkungen für den Zugriff auf Drittanbieterspeicherung anwenden.
2. Die durch die Richtlinie angewandten Einschränkungen verhindern nicht, dass Drittanbieterskripte, die als Tracking-Ressourcen klassifiziert sind, auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin Speicher verwenden, der auf den Top-Level-Ursprung ausgerichtet ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie in einem First-Party-Kontext geladen werden.
4. Cross-Origin-Ressourcen, die aus demselben [eTLD+1](/de/docs/Glossary/eTLD) wie der Top-Level-Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn der Top-Level-Page-Ursprung als von derselben Organisation stammend bestimmt wird](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsgewährungen

Um die Kompatibilität mit dem Web zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, wird Firefox Speicherzugriff gewähren, der auf die erste Partei für einen bestimmten Drittanbieter-Ursprung beschränkt ist, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Web-Kompatibilitäts-Heuristiken, die Drittanbieter-Ressourcen, die als Tracker klassifiziert sind, Speicherzugriff gewähren, wenn ein Nutzer mit diesen Drittanbietern interagiert. Dies tun wir, wenn wir erwarten, dass das Nicht-Gewähren des Zugriffs dazu führen würde, dass die Webseite nicht funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), über die eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Obwohl beide Ansätze denselben Umfang an Speicherzugriff bieten, empfehlen wir Drittanbietern, zur Storage Access API zu wechseln, um ihren Zugang zu Speicher zu garantieren.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktion erhalten, automatisch Speicherzugang zu gewähren. Diese Heuristiken sollen es einigen auf dem Web gebräuchlichen Drittanbieter-Integrationen ermöglichen, weiterhin zu funktionieren. Sie sind als vorübergehend vorgesehen und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten nicht für gegenwärtige und zukünftige Web-Entwicklung genutzt werden.

Drittanbieterspeicherzugriff kann Ressourcen gewährt werden, die als Tracking-Ressourcen klassifiziert wurden, wenn ein Benutzer-Geste ein Pop-up-Fenster auslöst, das [opener access](/de/docs/Web/API/Window/opener) zum ursprünglichen Dokument hat. Wenn das geschieht, gibt es drei mögliche Wege, wie einem Drittanbieter-Ursprung Zugriff gewährt werden kann:

- Der Ursprung der Ressource, die anfänglich im Pop-up-Fenster geladen wird, erhält Speicherzugriff auf dem opener-Dokument, wenn dieser Ursprung in den letzten 30 Tagen als First-Party Benutzerinteraktion erhalten hat.
- Nachdem die anfängliche Ressource im Pop-up-Fenster geladen wurde, kann das Fenster durch eine Reihe von Umleitungen zu anderen Hosts gehen. Wenn ein Benutzer nach einer solchen Umleitung mit dem Pop-up-Fenster interagiert, wird dem Ursprung der im Pop-up-Fenster geladenen Inhalte Speicherzugriff auf dem opener-Dokument gewährt.
- Wenn es eine Top-Level-Umleitung von einem Tracking-Ursprung zu einem Nicht-Tracking-Ursprung gibt, erhält der Tracking-Ursprung kurzlebigen Speicherzugriff auf den Nicht-Tracking-Ursprung und alle weiteren Nicht-Tracking-Ursprünge in der Weiterleitungskette (d.h. wenn die Ladung weiter umgeleitet wird). Der Tracking-Ursprung muss in den letzten 30 Tagen als First-Party Benutzerinteraktion erhalten haben, und die Speicherzugangserlaubnis läuft nach 15 Minuten ab.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist er auf die Seite des opener-Dokuments oder Subdomains dieses Ursprungs begrenzt. Der auf der Subdomain eines Ursprungs gewährte Zugriff erstreckt sich auf den Top-Level-Ursprung. Zum Beispiel, wenn eine Ressource von `tracker.example` auf `foo.example.com` Speicherzugriff erhält, dann wird `tracker.example` in der Lage sein, auf seine Cookies auf `bar.foo.example.com` und auf `example.com` zuzugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle Ressourcen, die von `tracker.example` auf jedem Top-Level-Dokument von `example.com` geladen werden, sofort Speicherzugriff. Das schließt alle Ressourcen ein, die im Hauptkontext der Seite geladen werden, eingebettete `<iframe>`s und Ressourcen, die innerhalb eingebetteter `<iframe>`s geladen werden. Speicherzugriff wird nicht auf andere Ressourcen auf `example.com` (z.B. `other-tracker.example`) oder auf andere First-Partys, auf denen `tracker.example` eingebettet ist (z.B. `example.org`), ausgeweitet.

Speicherzugansgewährungen erstrecken sich in die erste Ebene von verschachtelten Kontexten, jedoch nicht weiter. Das bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet sind und von einer als Tracker klassifizierten Domain geladen werden, vollen Zugriff auf alle Speicherorte haben, die über JavaScript zugänglich sind. Ebenso werden Anfragen nach Ressourcen, die in `<iframe>`s im Hauptkontext der Seite geladen werden, Zugriff auf HTTP-Cookies haben. Weitere verschachtelte Kontexte, einschließlich, aber nicht beschränkt auf solche vom als Tracker klassifizierten Ursprung, erhalten keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungsszenarien auf einer Seite des Top-Level-Dokuments `example.com`, bei dem `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                                    | Speicherzugriff der tracker.example-Ressource |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                                | HTTP: Ja JS: N/A                              |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt dann ein Bild von `tracker.example`.                                        | HTTP: Ja JS: N/A                              |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` bettet dann ein `<iframe>` von `tracker.example` ein.                            | HTTP: Ja JS: Nein                             |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                                                | HTTP: Ja JS: Ja                               |
| `example.com` bettet ein `<iframe>` von `example.com` (gleicher Ursprung) ein. Das verschachtelte `<iframe>` bettet ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                             |

### Ablauf des Speicherzugriffs

Die Zugangsgewährung für Speicher läuft nach 30 Tagen ab. Domänen, die als Tracking-Ressourcen klassifiziert sind, können Drittanbieterspeicherzugang auf mehreren First-Partys erhalten, und die Speicherberechtigung für jede Partei läuft unabhängig voneinander ab. Die oben genannten Heuristiken werden auch dazu dienen, die Lebensdauer einer Drittpartei-Speicherberechtigung auf Ursprüngen zu verlängern, denen bereits Speicherzugang gewährt wurde. Jedes Mal, wenn die Heuristik aktiviert wird oder ein erfolgreicher Aufruf der Storage Access API erfolgt, wird die vorhergehende Speicherzugangserlaubnis um 30 Tage verlängert, gerechnet ab dem Zeitpunkt der vorherigen Zugriffserteilung.

Bitte beachten Sie, dass wir in Zukunft erwarten, Änderungen daran vorzunehmen, wie lange der Speicherzugang gültig bleiben wird. Wie bereits erwähnt, wird der zukunftssichere Weg, um zu gewährleisten, dass Sie als Drittpartei Speicher nutzen können, die Verwendung der Storage Access API sein.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere diejenigen, die auf Drittanbieter-Inhalt-Integrationen angewiesen sind. Wir haben mehrere neue Funktionen in Firefox hinzugefügt, um das Testen zu erleichtern.

### Entwicklerwerkzeug-Benachrichtigungen

Der [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox Developer Tools enthält jetzt einen Indikator für alle Ressourcenanforderungen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Domain-Spalte angezeigt. Im unten stehenden Beispielbild wird `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an example.com nicht als Tracker gemeldet wird.

![Netzwerkanfragen in Firefox Developer Tools, die anzeigen, welche als Tracking-Ressourcen mit einem kleinen Schildsymbol gekennzeichnet sind](screen_shot_2018-09-21_at_10.34.22_am.png)

### Hinzufügen von benutzerdefinierten Domains zur Tracking-Protection-Liste

Neugierig, wie es funktionieren wird, wenn eine Drittanbieter-Domain auf Ihrer Website als Tracker klassifiziert wurde? Wir haben eine Präferenz hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains dem URL-Klassifikator für Tracking-Protection hinzuzufügen. Um dies zu tun:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Ihnen eine Seite angezeigt wird, die Sie warnt, dass "dies Ihre Garantie ungültig machen könnte!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Präferenznamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Präferenz bereits existiert, bearbeiten Sie den Präferenzwert.
4. Wenn die Präferenz nicht existiert, klicken Sie auf "String" und dann auf "+", um eine neue Präferenz zu erstellen.
5. Geben Sie als Präferenzwert durch Komma getrennte Ursprünge ein, die Sie als Tracker klassifiziert haben möchten. Zum Beispiel: "example.net,example.org".

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einträge entfernen, nachdem Sie Ihre Tests abgeschlossen haben.

## FAQ

Diese Cookie-Richtlinie könnte dazu führen, dass Websites nicht mehr funktionieren, wurde jedoch so konzipiert, dass sie häufige Drittanbieter-Integrationen weiter funktionieren lässt, während sie das Cross-Site-Tracking verhindert. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffsrichtlinie verhindern, dass Anzeigen auf meiner Website angezeigt werden?

Nein — diese Funktion beschränkt nur den Zugriff auf Cookies und Websitedaten, die zur Verfolgung von Nutzern über Websites hinweg verwendet werden können. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Werbung.

### Ich verwende einen Drittanbieter-Analysedienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Das hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analyseanbieter werden nicht mehr in der Lage sein, ihren Drittanbieterspeicher zur Datensammlung zu verwenden. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieterdomain beschränkt sind, oder lokale Speicher und andere unter ihrem Ursprung gespeicherte Websitedaten, keinen Zugang mehr zu diesen Identifikatoren über andere Websites hinweg haben.

Wenn diese Dienste in den Hauptkontext der Seite eingebettet sind, können sie weiterhin First-Party-Cookies und Website-Speicher verwenden, um Benutzer bei Seitenbesuchen auf dieser spezifischen First-Party-Domain zu verfolgen.

### Ich verwende Drittanbieterdienste für soziale Login-, Like- und Share-Button-Integration. Werden meine Nutzer diese Dienste weiterhin nutzen können?

Das hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen weiterhin wie unter der aktuellen Cookie-Richtlinie von Firefox funktionieren, allerdings mit einigen kleinen Unterschieden im Nutzererlebnis.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugang zu seinen Drittanbieter-Cookies, wenn der Nutzer zum ersten Mal eine neue First-Party besucht. Der Nutzer könnte deshalb als abgemeldet für den Dienst erscheinen, obwohl er eingeloggt ist, wenn er die Website des Anbieters direkt besucht. Abhängig vom Typ der Integration könnte der Nutzer eine Handlung ausführen müssen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor der Anbieter Zugang zu seinen Cookies erhält. Zum Beispiel:

- Für soziale Logins könnte der Nutzer auf der First-Party auf eine Login-Schaltfläche klicken müssen.
- Für soziale Like- oder Share-Buttons muss der Nutzer zuerst mit der Schaltfläche im abgemeldeten Zustand interagieren. Sobald dies geschieht, werden viele soziale Inhaltsanbieter den Nutzer zum Einloggen auffordern.

Nach diesen Interaktionen erhält der Anbieter Zugriff auf Drittanbieterspeicher, wenn er den Nutzer auf eine Weise auffordert, die von den oben beschriebenen Speicherzugangs-Aktivierungsheuristiken erfasst wird. Diese Anbieter sollten in Erwägung ziehen, so schnell wie möglich explizit Speicherzugang über die Storage Access API zu beantragen. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich verwende Drittanbieter-Pixel und andere Werkzeuge, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin die Konversionsrate meiner Anzeigen messen können?

Das hängt davon ab, wie der Drittanbieter das Messinstrument implementiert hat, aber im Allgemeinen wird es schwieriger, die Konversion von Anzeigen zu messen. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Website, die von einem Nutzer mehrfach angesehen, aber nie angeklickt wird. Dieser Nutzer besucht später Ihre Website, die ein Konversion-Tracking-Tag von derselben Social-Media-Website enthält. Dieser Typ von Konversion wird oft als "View-Through-Konversion" bezeichnet. Da die Social-Media-Website keinen Zugang zu ihrem Drittanbieterspeicher hat, wird sie den Nutzer nicht als denselben Nutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass die meisten View-Through-Konversion-Tracking-Techniken nicht mehr funktionieren werden, einschließlich der von Anzeigennetzwerken angebotenen.
2. Sie schalten eine Anzeige in einem Anzeigennetzwerk oder auf einer Social-Media-Website, die von einem Nutzer angeklickt wird. Dieser Nutzer landet auf Ihrer Website, die ein Konversion-Tracking-Tag von derselben Website enthält, auf der Ihre Anzeige angezeigt wurde. Dieser Typ von Konversion wird oft als "Click-Through-Konversion" bezeichnet. Da die Social-Media-Website oder das Anzeigennetzwerk keinen Zugang zu ihrem Drittanbieterspeicher hat, wird sie den Nutzer nicht als denselben Nutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass diese Version der Click-Through-Konversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Website erscheint. Ein Nutzer klickt auf Ihre Anzeige und wird zu einer Landing Page weitergeleitet, die ein Konversion-Tracking-Tag vom Drittanbieternetzwerk enthält. Auf der Social-Media-Website annotiert das Netzwerk die URL der Anzeige-Landing-Page mit einem Abfrageparameter, der signalisiert, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website überprüft das Tag des Anzeigennetzwerks die URL-Abfrageparameter und speichert alle Anzeigentracking-Parameter im First-Party-Speicher. Wenn ein Nutzer später ein Konversion-Ereignis abschließt, überprüft das Netzwerk-Tag den First-Party-Speicher, um zu bestimmen, welcher (oder welche) Klicks für den Besuch verantwortlich waren. Wir erwarten, dass Click-Through-Konversionen, die auf diese Weise implementiert wurden, weiterhin funktionieren.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
