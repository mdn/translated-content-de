---
title: "Policy zur Speicherung: Cookies von Trackern blockieren"
short-title: Storage access policy
slug: Web/Privacy/Guides/Storage_Access_Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Firefox führt eine neue Speicherzugriffspolitik ein, die Cookies und andere Site-Daten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien konzipiert, die in Firefox seit vielen Jahren verfügbar sind. Diese Richtlinie schützt vor Cross-Site-Tracking und minimiert dabei den Site-Ausfall, der mit dem herkömmlichen Cookie-Blockieren verbunden ist. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir beabsichtigen, für Firefox-Release-Benutzer bereitzustellen. Diese entspricht möglicherweise nicht der aktuellen Implementierung in der Release-Version von Firefox. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), unserem Vorab-Kanal, landen. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir noch nicht an Release-Benutzer weitergeben möchten; experimentelle Funktionen werden nicht in dieser Dokumentation aufgeführt, können jedoch die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen Websites, mit [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmaßnahmen umfasst. Wie oben beschrieben, beachten Sie, dass Nightly möglicherweise zusätzliche Schutzmaßnahmen enthält, die entfernt oder geändert werden, bevor sie unsere Release-Benutzer erreichen. Wir werden diese Seite mit den neuesten Informationen aktualisieren, während wir unsere Schutzmaßnahmen verstärken.

Diese Schutzmaßnahmen sind in Nightly standardmäßig aktiviert. Die Cookie-Richtlinie kann in anderen Firefox-Versionen über die [Content Blocking-Einstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verknüpfte Dokumentation enthält ein Dropdown-Menü zur Auswahl der entsprechenden Firefox-Version).

### Bericht über defekte Websites

Wenn Sie feststellen, dass eine Website aufgrund dieser Änderung nicht funktioniert, melden Sie einen Fehler unter der Komponente Tracking Protection innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie defekte Websites direkt in Firefox melden, indem Sie auf "Ein Problem melden" im Content-Blocking-Abschnitt des [Control Centers](https://support.mozilla.org/en-US/kb/site-information-panel) klicken (diese Verknüpfung ist möglicherweise nicht in allen Versionen von Firefox verfügbar).

## Erklärung des Tracking-Schutzes

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking-Schutzliste, um zu bestimmen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking-Schutzliste wird von [Disconnect](https://github.com/disconnectme/disconnect-tracking-protection/issues) gepflegt. Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die "Basic Protection"-Version der Liste, die [einige Kategorien von Trackern ausnimmt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft können wir unseren Schutz auf die "Strict Protection"-Version der Liste ausweiten.
- Zweitens verwendet Firefox eine zusätzliche "[Entity List](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die [verhindert, dass Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Site geladen werden, die derselben Organisation gehört](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den integrierten [Tracking-Schutz](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection)-URL-Klassifizierer, um zu bestimmen, welche Ressourcen der Tracking-Schutzliste entsprechen. Domains werden gemäß der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Wir überprüfen das genaue Hostname der Ressource mit der Liste sowie die letzten vier Hostnamen, die durch beginnendes Entfernen der führenden Komponente von den letzten fünf Komponenten gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname auf der Liste | Hostname der Ressource | Übereinstimmung |
| ---------------------- | ---------------------- | --------------- |
| `example.com`          | `example.com`          | Ja              |
| `example.com`          | `a.b.example.com`      | Ja              |
| `blah.example.com`     | `example.com`          | Nein            |
| `a.b.example.com`      | `c.d.example.com`      | Nein            |
| `blah.example.com`     | `foo.blah.example.com` | Ja              |

## Was blockiert die Zugriffspolitik auf den Speicher?

Die Speicherzugriffspolitik blockiert Ressourcen, die als Tracker identifiziert wurden, vom Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und anderen Site-Speicher, die in einem Drittanbieter-Kontext geladen werden. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und sie verwenden, um Benutzer über Besuche bei mehreren Erstanbietern hinweg zu identifizieren. Insbesondere erzwingt Firefox dies durch die folgenden Einschränkungen:

Cookies:

- Blockieren von {{httpheader("Cookie")}}-Anforderungsheadern und Ignorieren von {{httpheader("Set-Cookie")}}-Antwortheadern.
- Rückgabe eines leeren Strings für Aufrufe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) und Ignorieren von Anfragen, Cookies über `Document.cookie` zu setzen.

DOM Storage:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche werfen eine `SecurityError`-Exception aus. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher führen Versuche, dieses Objekt zu lesen und zu schreiben, zu einer `TypeError`-Exception.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, auf das IndexedDB-Factory-Objekt zuzugreifen, führt zu einer `SecurityError`-Exception.

Messaging und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Der Versuch, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, führt zu einer `SecurityError`-Exception.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Der Versuch, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, führt zu einer `SecurityError`-Exception.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Der Versuch, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, führt zu einer `SecurityError`-Exception.

DOM Cache:

- Aufrufe zum [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching), der Bild-Cache und der [Alternative Services (Alt-Svc) Cache](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc) sind für Tracking-Ressourcen partitioniert, sodass jeder Top-Level-Ursprung eine separate Partition hat und Tracking-Ressourcen auf verschiedenen Top-Level-Ursprüngen separat zwischengespeichert werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sessions-Ticket fortgesetzt, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- [Wiederverwendung von HTTP-Verbindungen](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#persistent_connections) durch Domains, die als Tracker klassifiziert sind, ist auf Anfragen beschränkt, die unter demselben Top-Level-Ursprung erfolgen. Zum Beispiel wird eine Anfrage nach Inhalten von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage nach Inhalten von `tracker.example` auf `shopping.example` oder mit Anfragen, die auftreten, wenn `tracker.example` direkt besucht wird (d.h. als Erstanbieter), wiederverwenden.

HTTP Referrer

- Die Standard-[Referrer-Policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für als Tracker klassifizierte Drittanbieter-Ressourcen ist auf `strict-origin-when-cross-origin` gesetzt.

### Was wird von der Richtlinie nicht blockiert?

1. Diese Richtlinie schränkt derzeit den Drittanbieter-Zugriff auf den Speicher von Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind, nicht ein. Wir könnten in Zukunft zusätzliche Einschränkungen für den Drittanbieter-Zugriff auf den Speicher anwenden.
2. Die von der Richtlinie angewendeten Einschränkungen werden Drittanbieter-Skripte, die als Tracking-Ressourcen klassifiziert sind, nicht daran hindern, auf den Speicher im Hauptkontext der Seite zuzugreifen. Diese Skripte können weiterhin Speicher verwenden, der auf den Top-Level-Ursprung bezogen ist.
3. Tracker-klassifizierte Ursprünge haben Zugriff auf ihren eigenen Speicher, wenn sie in einem Erstanbieter-Kontext geladen werden.
4. Cross-Origin-Ressourcen, die vom selben {{Glossary("eTLD", "eTLD+1")}} wie der Top-Level-Kontext geladen werden, haben weiterhin Zugang zu ihrem Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn der Top-Level-Seitenursprung als zur gleichen Organisation gehörend festgestellt wird](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsberechtigungen

Um die Web-Kompatibilität zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, gewährt Firefox Speicherzugriff begrenzt auf den Erstanbieter für einen bestimmten Drittanbieter-Ursprung, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Web-Kompatibilitätsheuristiken, die Drittanbieter-Ressourcen, die als Tracker klassifiziert sind, Speicherzugriff gewähren, wenn ein Benutzer mit diesen Drittanbietern interagiert. Wir tun dies, wenn wir erwarten, dass das Verweigern des Zugriffs dazu führen würde, dass die Webseite nicht funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), mit der eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Obwohl beide Ansätze dasselbe Maß an Speicherzugriff bieten, empfehlen wir Drittanbietern, zum Verwenden der Storage Access API zu wechseln, um ihren Speicherzugriff zu garantieren.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, umfasst Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktion erhalten, automatisch Speicherzugriff zu gewähren. Diese Heuristiken sind dazu gedacht, einige Drittanbieter-Integrationen, die im Web üblich sind, weiterhin funktionieren zu lassen. Sie sind als vorübergehend gedacht und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten nicht für aktuelle und zukünftige Webentwicklung verwendet werden.

Drittanbieter-Speicherzugriff kann Ressourcen gewährt werden, die als Tracking-Ressourcen klassifiziert wurden, wenn eine Benutzeraktion ein Pop-up-Fenster auslöst, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat. Wenn dies geschieht, gibt es drei mögliche Wege, wie ein Drittanbieter-Ursprung Zugang gewährt werden kann:

- Dem Ursprung der Ressource, die zunächst im Pop-up-Fenster geladen wird, wird Speicherzugriff auf das Opener-Dokument gewährt, wenn dieser Ursprung innerhalb der letzten 30 Tage als Erstanbieter Benutzerinteraktion erhalten hat.
- Nach dem Laden der ursprünglichen Ressource im Pop-up-Fenster kann das Fenster eine Reihe von Weiterleitungen zu anderen Hosts durchlaufen. Wenn ein Benutzer nach einer Weiterleitung mit dem Pop-up-Fenster interagiert, wird dem Ursprung des im Pop-up-Fenster geladenen Inhalts Speicherzugriff auf das Opener-Dokument gewährt.
- Wenn es eine Top-Level-Weiterleitung von einem Tracking-Ursprung zu einem Nicht-Tracking-Ursprung gibt, erhält der Tracking-Ursprung kurzlebigen Speicherzugriff auf den Nicht-Tracking-Ursprung und alle anderen Nicht-Tracking-Ursprünge, die später in der Weiterleitungskette auftreten (d.h. wenn das Laden weiterhin umgeleitet wird). Der Tracking-Ursprung muss innerhalb der letzten 30 Tage Benutzerinteraktion als Erstanbieter erhalten haben, und die Speicherzugriffsberechtigung läuft nach 15 Minuten ab.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist er auf die Site des Opener-Dokuments oder Subdomains dieses Ursprungs begrenzt. Zugriff, der auf der Subdomain eines Ursprungs gewährt wird, erstreckt sich auf den Top-Level-Ursprung. Beispiel: Wenn einer Ressource von `tracker.example` Speicherzugriff auf `foo.example.com` gewährt wird, kann `tracker.example` auf seine Cookies auf `bar.foo.example.com` und auf `example.com` zugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle Ressourcen, die von `tracker.example` auf einem beliebigen Top-Level-Dokument, das von `example.com` geladen wird, sofort Zugriff auf den Speicher. Dies umfasst alle Ressourcen, die im Hauptkontext der Seite geladen werden, eingebettete `<iframe>`s und Ressourcen, die innerhalb eingebetteter `<iframe>`s geladen werden. Der Speicherzugriff erstreckt sich nicht auf andere Ressourcen, die auf `example.com` geladen werden (z. B. `other-tracker.example`), noch auf andere Erstanbieter, auf denen `tracker.example` eingebettet ist (z. B. `example.org`).

Speicherzugriffsberechtigungen erstrecken sich in die erste Ebene verschachtelter Kontexte, aber nicht weiter. Das bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet sind und von einer als Tracker klassifizierten Domain geladen werden, vollen Zugriff auf alle Speicherorte haben, die über JavaScript zugänglich sind. Ebenso haben Anfragen nach Ressourcen, die in `<iframe>`s geladen werden, die im Hauptkontext der Seite eingebettet sind, Zugang zu HTTP-Cookies. Weitere verschachtelte Kontexte, einschließlich aber nicht beschränkt auf diejenigen vom als Tracker klassifizierten Ursprung, wird kein Speicherzugriff gewährt.

Betrachten Sie die folgenden Einbettungszenarien auf einer Top-Level-Seite, die von `example.com` geladen wird und auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                                    | Speicherzugriff auf tracker.example Ressource |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                                | HTTP: Ja JS: N/A                              |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt ein Bild von `tracker.example`.                                             | HTTP: Ja JS: N/A                              |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` geht weiter und bettet ein `<iframe>` von `tracker.example` ein.                 | HTTP: Ja JS: Nein                             |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                                                | HTTP: Ja JS: Ja                               |
| `example.com` bettet ein `<iframe>` von `example.com` (gleicher Ursprung) ein. Das verschachtelte `<iframe>` bettet ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                             |

### Ablauf des Speicherzugriffs

Die Speicherzugriffsberechtigung läuft nach 30 Tagen ab. Domains, die als Tracking-Ressourcen klassifiziert sind, können bei mehreren Erstanbietern Drittanbieter-Speicherzugriff gewährt werden, und die Speicherberechtigung für jeden dieser Erstanbieter läuft unabhängig voneinander ab. Die oben genannten Heuristiken dienen auch dazu, die Lebensdauer einer Drittanbieter-Speicherberechtigung für Ursprünge, denen bereits Zugang gewährt wurde, zu verlängern. Jedes Mal, wenn die Heuristik ausgelöst wird oder ein erfolgreicher Aufruf der Storage Access API erfolgt, wird das bestehende Speicherzugriffsablaufdatum um 30 Tage verlängert, beginnend ab dem Zeitpunkt, an dem der vorherige Zugriff gewährt wurde.

Bitte beachten Sie, dass wir in Zukunft Änderungen erwarten, wie lange der Speicherzugriff gültig bleibt. Wie bereits erwähnt, ist der Weg, der Ihnen garantiert, dass Sie als Drittanbieter weiterhin Speicher verwenden können, die Verwendung der Storage Access API.

## Debugging

Wir ermutigen Website-Betreiber, ihre Websites zu testen, insbesondere solche, die auf Drittanbieter-Inhaltsintegrationen angewiesen sind. Wir haben mehrere neue Funktionen zu Firefox hinzugefügt, um das Testen zu erleichtern.

### Benachrichtigungen in Entwicklerwerkzeugen

Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in Firefox Developer Tools enthält jetzt einen Indikator für alle Ressourcenanfragen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Domain-Spalte angezeigt. Im untenstehenden Beispielbild wird `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage zu example.com dies nicht ist.

![Netzwerkanfragen in Firefox DevTools, die durch ein kleines Schildsymbol anzeigen, welche Tracking-Ressourcen sind](network-requests.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Schutzliste

Neugierig, wie die Dinge funktionieren, wenn eine Drittanbieter-Domain auf Ihrer Website als Tracker klassifiziert wäre? Wir haben eine Einstellung hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zum Tracking-Schutz-URL-Klassifizierer hinzuzufügen. So geht's:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Sie auf eine Seite stoßen, die Sie warnt "Dies könnte Ihre Garantie ungültig machen!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Einstellungsnamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Einstellung bereits existiert, bearbeiten Sie den Einstellungswert.
4. Wenn die Einstellung nicht existiert, klicken Sie auf "String" und dann auf "+", um eine neue Einstellung zu erstellen.
5. Geben Sie im Einstellungswert kommagetrennte Ursprünge ein, die als Tracker klassifiziert werden sollen. Z.B. "example.net,example.org".

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einträge entfernen, nachdem Sie das Testen abgeschlossen haben.

## FAQ

Diese Cookie-Richtlinie hat das Potenzial, zu Site-Ausfällen zu führen, wurde jedoch so konzipiert, dass gängige Drittanbieter-Integrationen weiterhin funktionieren, während Cross-Site-Tracking verhindert wird. In diesem Abschnitt beschreiben wir die Ihnen in verschiedenen Integrationsszenarien zur Verfügung stehende Funktionalität.

### Wird diese Speicherzugriffspolitik Anzeigen auf meiner Website blockieren?

Nein — diese Funktion beschränkt nur den Zugriff auf Cookies und Site-Daten, die zur Verfolgung von Benutzern über Websites hinweg verwendet werden können. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Anzeigen.

### Ich nutze einen Drittanbieter-Analyse-Service, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Das hängt davon ab, wie der Drittanbieter-Analyse-Service implementiert ist. Drittanbieter-Analyseanbieter können ihre Drittanbieter-Speicherung nicht mehr verwenden, um Daten zu erfassen. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieter-Domain bezogen sind, oder local storage und andere Site-Daten, die unter ihrem Ursprung gespeichert sind, keinen Zugriff mehr auf diese Identifikatoren über andere Websites hinweg haben.

Wenn diese Dienste im Hauptkontext der Seite eingebettet sind, können sie weiterhin Erstanbieter-Cookies und Site-Speicherung nutzen, um Benutzer über Seitenbesuche auf dieser spezifischen Erstanbieter-Domain hinweg zu verfolgen.

### Ich nutze Drittanbieter-Dienste für Social Login, Gefällt mir- und Teilen-Button-Integration. Werden meine Benutzer diese Dienste weiterhin nutzen können?

Das hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen weiterhin so funktionieren, wie sie es unter der aktuellen Cookie-Richtlinie von Firefox tun, mit einigen geringfügigen Unterschieden im Benutzererlebnis.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Benutzer eine neue Erstanbieter-Website besucht. Der Benutzer kann dem Dienst daher als abgemeldet erscheinen, obwohl er beim direkten Besuch der Website des Anbieters angemeldet ist. Abhängig von der Art der Integration muss der Benutzer möglicherweise eine Aktion ausführen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor der Anbieter Zugriff auf seine Cookies erhält. Zum Beispiel:

- Für Social Login muss der Benutzer möglicherweise auf einen Login-Button auf der Erstanbieter-Website klicken.
- Für Gefällt mir- oder Teilen-Buttons muss der Benutzer zuerst mit dem Button im abgemeldeten Zustand interagieren. Sobald er das tut, werden viele soziale Inhaltsanbieter ihn auffordern, sich anzumelden.

Nach diesen Interaktionen erhält der Anbieter Drittanbieter-Speicherzugriff, wenn er den Benutzer in einer Weise auffordert, die durch die oben beschriebenen Speicherzugriffsaktivierungsheuristiken erfasst wird. Diese Anbieter sollten in Betracht ziehen, so schnell wie möglich explizit Zugriff auf Speicher durch die Storage Access API anzufordern. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich verwende Drittanbieter-Pixel und andere Tools, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin in der Lage sein, die Konversionsrate meiner Anzeigen zu messen?

Das hängt davon ab, wie das Drittanbieter-Tool für die Messung implementiert ist, aber im Allgemeinen wird die Advertiser-Konversionsmessung schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Website, die von einem Benutzer mehrmals gesehen, aber nie angeklickt wird. Dieser Benutzer besucht später Ihre Website, die ein Konversion-Tracking-Tag von derselben Social-Media-Website enthält. Diese Art der Konversion wird oft als "View-Through-Konversion" bezeichnet. Da die Social-Media-Website keinen Zugriff auf ihre Drittanbieter-Speicherung hat, wird sie den Benutzer nicht als denselben Benutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass die meisten View-Through-Konversion-Tracking-Techniken nicht mehr funktionieren, einschließlich derjenigen, die von Anzeigennetzwerken angeboten werden.
2. Sie schalten eine Anzeige auf einem Anzeigennetzwerk oder einer Social-Media-Website, die von einem Benutzer angeklickt wird. Dieser Benutzer landet auf Ihrer Website, die ein Konversion-Tracking-Tag von derselben Website enthält, die Ihre Anzeige geschaltet hat. Diese Art der Konversion wird oft als "Click-Through-Konversion" bezeichnet. Da die Social-Media-Site oder das Anzeigennetzwerk keinen Zugriff auf ihre Drittanbieter-Speicherung hat, werden sie den Benutzer nicht als denselben Benutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht verfolgt. Wir erwarten, dass diese Variante der Click-Through-Konversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Website erscheint. Ein Benutzer klickt auf Ihre Anzeige und wird auf eine Zielseite weitergeleitet, die ein Konversion-Tracking-Tag vom Drittanbieternetzwerk enthält. Auf der Social-Media-Website annotiert das Netzwerk die URL der Anzeigenseiten-Zielseite mit einem Query-Parameter, der signalisiert, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website prüft das Tag des Anzeigennetzwerks die URL-Query-Parameter und speichert alle Werbe-Tracking-Parameter im Erstanbieterspeicher. Wenn ein Benutzer später ein Konversionsereignis abschließt, überprüft das Tag des Netzwerks den Erstanbieterspeicher, um festzustellen, welcher Klick (oder Klicks) für den Besuch verantwortlich war. Wir erwarten, dass Click-Through-Konversion, die auf diese Weise implementiert wird, weiterhin funktioniert.
