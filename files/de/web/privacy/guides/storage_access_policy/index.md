---
title: "Erklärung der Speicherzugriffsrichtlinie: Cookies von Trackern blockieren"
short-title: Storage access policy
slug: Web/Privacy/Guides/Storage_Access_Policy
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

Firefox enthält eine neue Speicherzugriffsrichtlinie, die Cookies und andere Websitedaten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien gedacht, die in Firefox seit vielen Jahren verfügbar sind. Diese Richtlinie schützt vor Website-übergreifendem Tracking und minimiert gleichzeitig die durch traditionelles Cookie-Blocking verursachten Seitenausfälle. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir den Firefox-Release-Nutzern zur Verfügung stellen möchten, aber möglicherweise nicht mit der aktuell implementierten Version in der Firefox-Release übereinstimmt. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), unserem Vorab-Kanal, landen. Firefox Nightly kann auch experimentelle Funktionen enthalten, die nicht für den Release vorgesehen sind; experimentelle Funktionen werden in dieser Dokumentation nicht eingeschlossen, können aber dennoch die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen den Websites, mit [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmechanismen beinhaltet. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmaßnahmen enthalten kann, die möglicherweise entfernt oder geändert werden, bevor sie unsere Release-Nutzer erreichen. Wir halten diese Seite mit den neuesten Informationen auf dem Laufenden, während wir unsere Schutzmaßnahmen stärken.

Diese Schutzmaßnahmen sind standardmäßig in Nightly aktiviert. Die Cookie-Richtlinie kann in anderen Firefox-Versionen über die [Inhaltsschutz-Einstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown-Menü zur Auswahl der passenden Firefox-Version).

### An Defekte Webseiten berichten

Wenn Sie feststellen, dass eine Website infolge dieser Änderung nicht mehr funktioniert, melden Sie einen Fehler unter der Komponente "Tracking Protection" innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie defekte Seiten direkt in Firefox melden, indem Sie im Inhaltsblockierungsbereich des [Steuerzentrums](https://support.mozilla.org/en-US/kb/site-information-panel) auf "Problem melden" klicken (diese Verknüpfung ist möglicherweise nicht in allen Firefox-Versionen verfügbar).

## Erklärung des Trackingschutzes

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking Protection-Liste, um festzustellen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking Protection-Liste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die Version "Grundlegender Schutz" der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unsere Schutzmaßnahmen erweitern, um die Liste "Strikter Schutz" zu verwenden.
- Zweitens nutzt Firefox eine zusätzliche "[Entity-Liste](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Site geladen werden, die von derselben Organisation betrieben wird](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den eingebauten [Tracking Protection](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection) URL-Classifier, um zu bestimmen, welche Ressourcen mit der Tracking Protection-Liste übereinstimmen. Domains werden gemäß der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Insbesondere überprüfen wir den exakten Hostnamen der Ressource gegen die Liste sowie die letzten vier Hostnamen, die durch Starten mit den letzten fünf Komponenten und sukzessives Entfernen der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname in der Liste | Hostname der Ressource | Übereinstimmung |
| --------------------- | ---------------------- | --------------- |
| `example.com`         | `example.com`          | Ja              |
| `example.com`         | `a.b.example.com`      | Ja              |
| `blah.example.com`    | `example.com`          | Nein            |
| `a.b.example.com`     | `c.d.example.com`      | Nein            |
| `blah.example.com`    | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffsrichtlinie?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert wurden, daran, auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und anderen Speicherorten der Webseite zuzugreifen, die in einem Drittanbieter-Kontext geladen werden. Dadurch wird verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und verwenden, um Benutzer über Besuche auf mehreren Erstanbietern hinweg zu identifizieren. Konkret tut Firefox dies durch die Einführung der folgenden Einschränkungen:

Cookies:

- Blockiert {{httpheader("Cookie")}}-Anforderungsheader und ignoriert {{httpheader("Set-Cookie")}}-Antwortheader.
- Gibt für Aufrufe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) eine leere Zeichenkette zurück und ignoriert Anfragen zum Setzen von Cookies über `Document.cookie`.

DOM-Speicher:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese-und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher werfen Lese- und Schreibversuche mit diesem Objekt eine `TypeError`-Ausnahme.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Versuche, auf das IndexedDB-Factory-Objekt zuzugreifen, werfen eine `SecurityError`-Ausnahme.

Nachrichten und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Versuche, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, werfen eine `SecurityError`-Ausnahme.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Versuche, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, werfen eine `SecurityError`-Ausnahme.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Versuche, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, werfen eine `SecurityError`-Ausnahme.

DOM-Cache:

- Anfragen an [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einem `SecurityError` zurückgewiesen.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching), der Bild-Cache und der [Alternative Services (Alt-Svc) Cache](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc) sind alle für Tracking-Ressourcen partitioniert, sodass jeder oberste Ursprung eine separate Partition hat und Tracking-Ressourcen auf unterschiedlichen obersten Ursprüngen getrennt voneinander zwischengespeichert werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sitzungsticket fortgesetzt, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- Die [HTTP-Verbindungwiederverwendung](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#persistent_connections) durch als Tracker klassifizierte Domains ist auf Anfragen begrenzt, die unter dem gleichen obersten Ursprung erfolgen. Beispielsweise wird eine Anfrage für Inhalte von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage für Inhalte von `tracker.example` auf `shopping.example` wiederverwenden oder mit Anfragen, die direkt zu `tracker.example` gestellt werden (d.h. als Erstanbieter).

HTTP-Referrer

- Die Standard-[Referrer-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für als Tracker klassifizierte Drittanbieterressourcen ist auf `strict-origin-when-cross-origin` gesetzt.

### Was wird von der Richtlinie nicht blockiert?

1. Diese Richtlinie schränkt derzeit den Speicherzugriff von Drittanbietern für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind, nicht ein. Wir können in Zukunft entscheiden, zusätzliche Einschränkungen für den Speicherzugriff von Drittanbietern anzuwenden.
2. Die von der Richtlinie angewandten Einschränkungen verhindern nicht, dass als Tracking-Ressourcen klassifizierte Drittanbieterskripte auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin Speicher verwenden, der auf den obersten Ursprung abgestellt ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie in einem Erstanbieter-Kontext geladen werden.
4. Überkreuzte Ressourcen, die von der gleichen {{Glossary("registrable_domain", "registrierbaren Domäne")}} wie der oberste Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn festgestellt wird, dass der Ursprung der obersten Seite von derselben Organisation stammt](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsfreigaben

Um die Web-Kompatibilität zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, gewährt Firefox den Speicherzugriff auf Erstanbieter für einen bestimmten Drittanbietersprung, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Web-Kompatibilitätsheuristiken, die als Tracker klassifizierten Drittanbieter-Ressourcen Zugriff auf Speicher gewähren, wenn ein Benutzer mit diesen Dritten interagiert. Wir tun dies, wenn wir erwarten, dass das Nichtgewähren des Zugriffs dazu führen würde, dass die Webseite nicht mehr funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), durch die eingebettete {{htmlelement("iframe")}}s Speicherzugriff beantragen können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Obwohl beide Ansätze den gleichen Speicherzugriff bieten, empfehlen wir Dritten, auf die Verwendung der Storage Access API umzusteigen, um ihren Zugriff auf Speicher zu garantieren.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktionen erhalten, automatisch Speicherzugriff zu gewähren. Diese Heuristiken sollen es ermöglichen, dass einige Drittanbieter-Integrationen, die im Web häufig vorkommen, weiterhin funktionieren. Sie sollen vorübergehend sein und in einer zukünftigen Version von Firefox entfernt werden. Sie sollten nicht für aktuelle und zukünftige Webentwicklungen verwendet werden.

Der Zugriff auf Drittanbieterspeicher kann gewährt werden, wenn eine Benutzerinteraktion ein Popup-Fenster auslöst, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat. Wenn der Benutzer mit dem Popup interagiert, wird der Ursprung der Ressource, die ursprünglich im Popup-Fenster geladen wird, Speicherzugriff auf das Opener-Dokument gewährt, wenn dieser Ursprung in den letzten 30 Tagen als Erstanbieter eine Benutzerinteraktion erhalten hat.

Der Zugriff auf Drittanbieterspeicher kann auch gewährt werden, wenn ein Benutzer innerhalb desselben Fensters zu einem anderen Ursprung navigiert. Wenn der Benutzer mit diesem Ursprung interagiert und dann schnell zu einem Dokument im ursprünglichen Ursprung navigiert, wird der Zwischenseite der Speicherzugriff auf das endgültige Dokument gewährt.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist er auf die Seite des Opener-Dokuments oder auf Subdomains dieses Ursprungs beschränkt. Zugriff, der auf der Subdomain eines Ursprungs gewährt wird, erstreckt sich nicht auf den obersten Ursprung. Zum Beispiel, wenn einer Ressource von `tracker.example` auf `foo.example.com` Speicherzugriff gewährt wird, kann `tracker.example` auf seine Cookies auf `bar.foo.example.com` und auf `example.com` zugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle von `tracker.example` geladenen Ressourcen auf jedem von `example.com` geladenen obersten Dokument sofort Speicherzugriff. Dies umfasst alle im Hauptkontext der Seite geladenen Ressourcen, eingebettete `<iframe>`s und in eingebetteten `<iframe>`s geladene Ressourcen. Der Speicherzugriff wird nicht auf andere auf `example.com` geladene Ressourcen (z.B. `other-tracker.example`) oder auf andere Erstanbieter, auf denen `tracker.example` eingebettet ist (z.B. `example.org`), ausgeweitet.

Speicherzugriffsfreigaben erstrecken sich in die erste Ebene der geschachtelten Kontexte, aber nicht weiter. Das bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet und von einer Domäne geladen werden, die als Tracker klassifiziert ist, vollen Zugriff auf alle durch JavaScript zugänglichen Speicherorte haben werden. Ebenso haben Anfragen für in `<iframe>`s eingebettete Ressourcen im Hauptkontext der Seite Zugriff auf HTTP-Cookies. Weitere geschachtelte Kontexte, einschließlich solcher, die vom als Tracker klassifizierten Ursprung stammen, erhalten jedoch keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungsszenarien auf einer von `example.com` geladenen obersten Seite, auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                                   | tracker.example Ressource Speicherzugriff |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                               | HTTP: Ja JS: N/A                          |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt dann ein Bild von `tracker.example`.                                       | HTTP: Ja JS: N/A                          |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` bettet dann ein `<iframe>` von `tracker.example` ein.                           | HTTP: Ja JS: Nein                         |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                                               | HTTP: Ja JS: Ja                           |
| `example.com` bettet ein `<iframe>` von `example.com` (gleicher Ursprung) ein. Das geschachtelte `<iframe>` bettet ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                         |

### Speicherzugriffsablauf

Die Speicherzugriffsfreigabe läuft nach 30 Tagen ab. Domains, die als Tracking-Ressourcen klassifiziert sind, können Zugriff auf Drittanbieterspeicher auf mehreren Erstanbietern erhalten, und die Speichererlaubnis für jede Partei läuft unabhängig ab. Die oben genannten Heuristiken werden auch dazu dienen, die Lebensdauer einer Drittanbieterspeichererlaubnis auf Ursprüngen, die bereits Zugriff erhalten haben, zu verlängern. Jedes Mal, wenn die Heuristik aktiviert wird oder ein erfolgreicher Aufruf der Speicherzugriffs-API gemacht wird, wird das bestehende Ablaufdatum des Speicherzugriffs um 30 Tage verlängert, beginnend ab dem Zeitpunkt, an dem der vorherige Zugriff gewährt wurde.

Bitte beachten Sie, dass wir in Zukunft Änderungen daran erwarten, wie lange der Speicherzugriff gültig bleibt. Wie bereits erwähnt, wird die Verwendung der Speicherzugriffs-API der Weg sein, um sicherzustellen, dass Sie zukünftig als Drittanbieter Speicher nutzen können.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere jene, die auf Drittanbieter-Inhaltsintegrationen angewiesen sind. Wir haben mehrere neue Funktionen zu Firefox hinzugefügt, um das Testen zu erleichtern.

### Entwickler-Werkzeuge-Benachrichtigungen

Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox-Entwicklertools enthält jetzt einen Indikator für alle Ressourceanfragen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Domainspalte angezeigt. Im untenstehenden Beispielbild ist `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an example.com nicht so klassifiziert ist.

![Netzwerkanfragen in Firefox-Entwicklertools, die anzeigen, welche als Tracking-Ressourcen gelten, mit einem kleinen Schildsymbol](network-requests.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Protection-Liste

Neugierig, wie es funktioniert, wenn eine Drittanbieter-Domain auf Ihrer Seite als Tracker klassifiziert wird? Wir haben eine Präferenz hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains dem Tracking-Protection-URL-Classifier hinzuzufügen. Gehen Sie folgendermaßen vor:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn eine Seite angezeigt wird, die Sie warnt, dass "Dies Ihre Garantie erlöschen lassen kann!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Präferenznamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Präferenz bereits besteht, bearbeiten Sie den Präferenzwert.
4. Wenn die Präferenz nicht existiert, klicken Sie auf "Zeichenfolge" und dann auf "+", um eine neue Präferenz zu erstellen.
5. Geben Sie für den Präferenzwert durch Kommas getrennte Ursprünge ein, die Sie als Tracker klassifiziert haben möchten. Beispiel: "example.net,example.org".

> [!WARNING]
> Entfernen Sie diese Einträge unbedingt, nachdem Sie mit dem Testen fertig sind.

## FAQ

Diese Cookie-Richtlinie könnte möglicherweise zu Seitenausfällen führen, wurde jedoch so entwickelt, dass gängige Drittanbieter-Integrationen weiterhin funktionieren, während Website-übergreifendes Tracking verhindert wird. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffsrichtlinie Anzeigen auf meiner Website blockieren?

Nein — diese Funktion beschränkt nur den Zugriff auf Cookies und Websitedaten, die verwendet werden können, um Benutzer über Websites hinweg zu verfolgen. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Anzeigen.

### Ich nutze einen Drittanbieter-Analytics-Dienst, der als Tracker klassifiziert ist. Werde ich dennoch Analytics-Daten erhalten?

Das hängt davon ab, wie der Drittanbieter-Analytics-Dienst implementiert ist. Drittanbieter-Analytics-Anbieter können ihren Drittanbieterspeicher nicht mehr verwenden, um Daten zu sammeln. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieter-Domain abgestimmt sind, oder lokalen Speicher und andere Webspeicherdaten, die unter ihrem Ursprung gespeichert sind, keinen Zugriff mehr auf diese Identifikatoren über andere Websites hinweg haben werden.

Wenn diese Dienste in den Hauptkontext der Seite eingebettet sind, können sie weiterhin Erstanbieter-Cookies und Webspeicher verwenden, um Benutzer über Seitenbesuche auf dieser spezifischen Erstanbieter-Domain hinweg zu verfolgen.

### Ich nutze Drittanbieterdienste für soziale Login-, Like- und Share-Button-Integrationen. Werden meine Nutzer diese Dienste weiterhin nutzen können?

Das hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen weiterhin wie unter Firefoxs aktueller Cookie-Richtlinie funktionieren, jedoch mit einigen kleinen Unterschieden im Benutzererlebnis.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Benutzer erstmals eine neue Erstanbieter-Seite besucht. Der Benutzer mag daher bei dem Dienst ausgeloggt erscheinen, obwohl er eingeloggt ist, wenn er die Website des Anbieters direkt besucht. Je nach Art der Integration kann der Benutzer möglicherweise einige Maßnahmen ergreifen müssen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor der Anbieter Zugriff auf seine Cookies erhält. Zum Beispiel:

- Bei sozialem Login muss der Benutzer möglicherweise auf einen Login-Button auf der Erstanbieter-Seite klicken.
- Bei sozialen Like- oder Share-Buttons muss der Benutzer zuerst mit dem Button in einem ausgeloggten Zustand interagieren. Wenn er dies tut, werden viele soziale Inhaltsanbieter ihn auffordern, sich einzuloggen.

Nach diesen Interaktionen erhält der Anbieter Zugriff auf Drittanbieterspeicher, wenn er den Benutzer auf eine Weise auffordert, die von den oben beschriebenen Aktivierungsheuristiken für Speicherzugriff erfasst wird. Diese Anbieter sollten in Erwägung ziehen, so schnell wie möglich explizit Speicherzugriff über die Storage Access API zu beantragen. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich nutze Drittanbieter-Pixel und andere Werkzeuge, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin in der Lage sein, die Konversionsrate meiner Anzeigen zu messen?

Das hängt davon ab, wie der Drittanbieter das Messwerkzeug implementiert hat, aber im Allgemeinen wird die Messung von Anzeigenkonversionen schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Website, die mehrmals von einem Benutzer gesehen wird, aber nie angeklickt wird. Dieser Benutzer besucht später Ihre Website, die einen Konversionstracking-Tag derselben Social-Media-Website enthält. Diese Art der Konversion wird oft als "View-through-Konversion" bezeichnet. Da die Social-Media-Website keinen Zugriff auf ihren Drittanbieterspeicher hat, erkennt sie den Benutzer nicht als denselben Benutzer, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht erfasst. Wir erwarten, dass die meisten View-through-Konversionstracking-Techniken nicht mehr funktionieren, einschließlich jener, die von Display-Netzwerken angeboten werden.
2. Sie schalten eine Anzeige auf einem Display-Netzwerk oder einer Social-Media-Website, die von einem Benutzer angeklickt wird. Dieser Benutzer landet auf Ihrer Website, die einen Konversionstracking-Tag von derselben Website enthält, die Ihre Anzeige geschaltet hat. Diese Art der Konversion wird oft als "Click-through-Konversion" bezeichnet. Da die Social-Media-Seite oder das Display-Netzwerk keinen Zugriff auf ihren Drittanbieterspeicher hat, erkennt sie den Benutzer nicht als denselben Benutzer, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht erfasst. Wir erwarten, dass diese Version der Click-through-Konversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Website erscheint. Ein Benutzer klickt auf Ihre Anzeige und wird auf eine Landingpage weitergeleitet, die ein Konversionstracking-Tag vom Drittanbieternetzwerk enthält. Auf der Social-Media-Website annotiert das Netzwerk die URL der Anzeigen-Landingpage mit einem Abfrageparameter, der signalisiert, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website überprüft das Tag des Display-Netzwerks die URL-Abfrageparameter und speichert alle Ad-Tracking-Parameter in den Erstanbieterspeicher. Wenn ein Benutzer später ein Konversionsereignis abschließt, überprüft das Tag des Netzwerks den Erstanbietersspeicher, um zu bestimmen, welcher Klick (oder welche Klicks) für den Besuch verantwortlich war. Wir erwarten, dass die auf diese Weise implementierte Click-through-Konversion weiterhin funktioniert.
