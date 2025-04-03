---
title: "Richtlinien für Speicherzugriff: Cookies von Trackern blockieren"
short-title: Richtlinien für Speicherzugriff
slug: Web/Privacy/Guides/Storage_Access_Policy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Firefox enthält eine neue Speicherzugriffsrichtlinie, die Cookies und andere Websitedaten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien gedacht, die seit vielen Jahren in Firefox verfügbar sind. Diese Richtlinie schützt vor Tracking über mehrere Websites hinweg und minimiert gleichzeitig die durch herkömmliche Cookie-Blockierung verursachten Website-Störungen. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir für die Freigabe für Firefox-Benutzer vorsehen, sie entspricht jedoch möglicherweise nicht der in der aktuellen Firefox-Version umgesetzten Richtlinie. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), unserem Vorabfreigabe-Kanal, eingeführt werden. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir derzeit nicht planen, für Release-Benutzer freizugeben; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können jedoch trotzdem die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen, Websites mit [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmaßnahmen enthält. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmaßnahmen enthalten kann, die möglicherweise entfernt oder geändert werden, bevor sie unsere Release-Benutzer erreichen. Wir werden diese Seite mit den neuesten Informationen auf dem Laufenden halten, während wir unsere Schutzmaßnahmen verstärken.

Diese Schutzmaßnahmen sind in Nightly standardmäßig aktiviert. Die Cookie-Richtlinie kann in anderen Firefox-Versionen über die [Inhaltsblockierungseinstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown-Menü zur Auswahl der passenden Firefox-Version).

### Fehlerhafte Websites melden

Wenn Sie feststellen, dass eine Website infolge dieser Änderung nicht richtig funktioniert, melden Sie einen Fehler unter der Komponente Tracking-Schutz im Firefox-Produkt auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie fehlerhafte Websites direkt in Firefox melden, indem Sie im Abschnitt "Inhaltsblockierung" des [Kontrollzentrums](https://support.mozilla.org/en-US/kb/site-information-panel) "Problem melden" klicken (diese Abkürzung ist möglicherweise nicht in allen Firefox-Versionen verfügbar).

## Erklärung des Trackingschutzes

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking-Schutzliste, um zu bestimmen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking-Schutzliste wird von [Disconnect](https://github.com/disconnectme/disconnect-tracking-protection/issues) gepflegt. Wenn die Liste in Firefox angewendet wird, führen wir zwei wichtige Änderungen durch:

- Erstens verwenden wir nur die "Basic Protection"-Version der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In der Zukunft könnten wir unsere Schutzmaßnahmen erweitern und die "Strict Protection"-Version der Liste verwenden.
- Zweitens verwendet Firefox eine zusätzliche "[Entity List](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Site geladen werden, die von der gleichen Organisation betrieben wird](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den integrierten URL-Klassifizierer des [Trackingschutzes](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection), um zu bestimmen, welche Ressourcen mit der Trackingschutzliste übereinstimmen. Domains werden entsprechend der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Insbesondere überprüfen wir den genauen Hostnamen der Ressource sowie die letzten vier Hostnamen, die durch Starten mit den letzten fünf Komponenten und sukzessives Entfernen der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname in der Liste | Hostname der Ressource | Übereinstimmung |
| --------------------- | ---------------------- | --------------- |
| `example.com`         | `example.com`          | Ja              |
| `example.com`         | `a.b.example.com`      | Ja              |
| `blah.example.com`    | `example.com`          | Nein            |
| `a.b.example.com`     | `c.d.example.com`      | Nein            |
| `blah.example.com`    | `foo.blah.example.com` | Ja              |

## Was blockiert die Richtlinie für den Speicherzugriff?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert sind, daran, auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und andere Websitedaten, die im Drittanbieter-Kontext geladen werden, zuzugreifen. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und zur Identifizierung von Benutzern über Besuche bei mehreren First-Parties hinweg verwenden. Insbesondere verhängt Firefox die folgenden Einschränkungen:

Cookies:

- Blockieren von {{httpheader("Cookie")}}-Anforderungsheadern und Ignorieren von {{httpheader("Set-Cookie")}}-Antwortheadern.
- Zurückgeben eines leeren Strings für Aufrufe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) und Ignorieren von Anfragen zum Setzen von Cookies über `Document.cookie`.

DOM-Speicher:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher lösen Lese- und Schreibversuche mit diesem Objekt eine `TypeError`-Ausnahme aus.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, auf das IndexedDB-Fabrikobjekt zuzugreifen, wirft eine `SecurityError`-Ausnahme.

Messaging und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Versuche, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, werfen eine `SecurityError`-Ausnahme.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Versuche, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, werfen eine `SecurityError`-Ausnahme.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Versuche, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, werfen eine `SecurityError`-Ausnahme.

DOM-Cache:

- Aufrufe von [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching), der Bild-Cache und der [Alternative Services (Alt-Svc) Cache](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc) sind für Tracking-Ressourcen partitioniert, sodass jeder Top-Level-Ursprung eine eigene Partition hat und Tracking-Ressourcen auf verschiedenen Top-Level-Ursprüngen getrennt voneinander zwischengespeichert werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sitzungsticket wieder aufgenommen, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- [HTTP-Verbindungswiederverwendung](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#persistent_connections) durch als Tracker klassifizierte Domains ist auf Anfragen beschränkt, die unter demselben Top-Level-Ursprung erfolgen. Beispielsweise wird eine Anfrage nach Inhalten von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage nach Inhalten von `tracker.example` auf `shopping.example` oder mit Anfragen, die bei einem direkten Besuch von `tracker.example` (d.h. als First Party) auftreten, wiederverwenden.

HTTP-Referrer

- Die Standard-[Referrer-Policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für als Tracker klassifizierte Drittanbieter-Ressourcen ist auf `strict-origin-when-cross-origin` festgelegt.

### Was wird von der Richtlinie nicht blockiert?

1. Diese Richtlinie beschränkt derzeit nicht den Drittanbieter-Speicherzugriff für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind. Wir könnten in Zukunft zusätzliche Beschränkungen für den Drittanbieter-Speicherzugriff anwenden.
2. Die von der Richtlinie angewendeten Beschränkungen verhindern nicht, dass Drittanbieter-Skripte, die als Tracking-Ressourcen klassifiziert sind, auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin Speicher verwenden, der auf den Top-Level-Ursprung beschränkt ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie im First-Party-Kontext geladen werden.
4. Cross-Origin-Ressourcen, die vom gleichen {{Glossary("eTLD", "eTLD+1")}} wie der Top-Level-Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn festgestellt wird, dass der Top-Level-Seitenursprung aus derselben Organisation stammt wie sie](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Gewährte Speicherzugriffe

Um die Web-Kompatibilität zu verbessern und Drittanbieter-Integrationen, die Speicherzugriff erfordern, zu erlauben, gewährt Firefox Speicherzugriff, der auf die First-Party begrenzt ist, für einen bestimmten Drittanbieter-Ursprung, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Web-Kompatibilitätsheuristiken, die Drittanbieter-Ressourcen, die als Tracker klassifiziert sind, Speicherzugriff gewähren, wenn ein Benutzer mit diesen Drittanbietern interagiert. Wir machen dies, wenn wir erwarten, dass das Nichtgewähren des Zugriffs die Webseite beeinträchtigen würde. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), durch die eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Obwohl beide Ansätze das gleiche Maß an Speicherzugriff bieten, empfehlen wir Drittanbietern, auf die Verwendung der Storage Access API umzusteigen, um ihren Zugriff auf Speicher zu gewährleisten.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktionen erhalten, automatisch Speicherzugriff zu gewähren. Diese Heuristiken sollen es ermöglichen, dass einige gängige Drittanbieter-Integrationen weiterhin funktionieren. Sie sind als temporär gedacht und werden in einer zukünftigen Firefox-Version entfernt. Sie sollten nicht für die aktuelle und zukünftige Web-Entwicklung verwendet werden.

Drittanbieter-Speicherzugriff kann Ressourcen gewährt werden, die als Tracking-Ressourcen klassifiziert sind, wenn ein Benutzer-Geste ein Popup-Fenster auslöst, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das ausgehende Dokument hat. Wenn dies geschieht, gibt es drei mögliche Wege, auf denen ein Drittanbieter-Ursprung Zugang gewährt werden kann:

- Der Ursprung der Ressource, die zunächst im Popup-Fenster geladen wird, erhält Speicherzugriff auf das öffnende Dokument, wenn dieser Ursprung innerhalb der letzten 30 Tage als First-Party-Nutzerinteraktion erhalten hat.
- Nachdem die anfängliche Ressource im Popup-Fenster geladen wurde, kann das Fenster eine Reihe von Weiterleitungen zu anderen Hosts durchlaufen. Wenn ein Benutzer mit dem Popup-Fenster nach einer Weiterleitung interagiert, erhält der Ursprung des Inhalts, der im Popup-Fenster geladen wird, Speicherzugriff auf das öffnende Dokument.
- Wenn es eine Top-Level-Weiterleitung von einem Tracking-Ursprung zu einem Nicht-Tracking-Ursprung gibt, erhält der Tracking-Ursprung kurzzeitig Speicherzugriff auf den Nicht-Tracking-Ursprung und alle anderen Nicht-Tracking-Ursprünge, die weiter unten in der Weiterleitungskette erscheinen (d.h. wenn das Laden weiterhin umgeleitet wird). Der Tracking-Ursprung muss innerhalb der letzten 30 Tage eine Benutzerinteraktion als First-Party erhalten haben und die Speicherzugriffsberechtigung läuft nach 15 Minuten ab.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist dieser auf die Website des öffnenden Dokuments oder Unterdomains dieses Ursprungs beschränkt. Der Zugriff, der auf einer Unterdomain eines Ursprungs gewährt wird, erstreckt sich auf den Top-Level-Ursprung. Ein Beispiel: Wenn einer Ressource von `tracker.example` auf `foo.example.com` Speicherzugriff gewährt wird, kann `tracker.example` auf seine Cookies auf `bar.foo.example.com` und auf `example.com` zugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle Ressourcen, die von `tracker.example` auf einem beliebigen Top-Level-Dokument von `example.com` geladen werden, sofort Speicherzugriff. Dies schließt alle Ressourcen ein, die im Hauptkontext der Seite geladen werden, eingebettete `<iframe>`-Elemente und Ressourcen, die in eingebetteten `<iframe>`s geladen werden. Der Speicherzugriff wird nicht auf andere Ressourcen erweitert, die bei `example.com` geladen werden (z.B. `other-tracker.example`), noch auf andere First-Parties, bei denen `tracker.example` eingebettet ist (z.B. `example.org`).

Speicherzugriffsgewährungen erstrecken sich auf die erste Ebene der verschachtelten Kontexte, aber nicht weiter. Das bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet und von einer als Tracker klassifizierten Domain geladen werden, vollen Zugriff auf alle Speicherorte haben, die über JavaScript zugänglich sind. In ähnlicher Weise haben Anfragen für Ressourcen, die in `<iframe>`s geladen werden, die im Hauptkontext der Seite eingebettet sind, Zugriff auf HTTP-Cookies. Weitere verschachtelte Kontexte, einschließlich, aber nicht beschränkt auf solche vom Ursprung, der als Tracker klassifiziert ist, erhalten jedoch keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungsszenarien auf einer Top-Level-Seite, die von `example.com` geladen wird, auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                                    | tracker.example Ressourcen-Speicherzugriff |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                                | HTTP: Ja JS: N/A                           |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt dann ein Bild von `tracker.example`.                                        | HTTP: Ja JS: N/A                           |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` bettet dann ein `<iframe>` von `tracker.example` ein.                            | HTTP: Ja JS: Nein                          |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                                                | HTTP: Ja JS: Ja                            |
| `example.com` bettet ein `<iframe>` von `example.com` (gleicher Ursprung) ein. Das verschachtelte `<iframe>` bettet ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                          |

### Ablauf des Speicherzugriffs

Die Speicherzugriffsgewährung läuft nach 30 Tagen ab. Als Tracking-Ressourcen klassifizierte Domains können Drittanbieter-Speicherzugriff auf mehrere First-Parties erhalten, und die Speicherberechtigung für jede Party läuft unabhängig ab. Die oben genannten Heuristiken dienen auch dazu, die Lebensdauer einer Drittanbieter-Speicherzugriffsberechtigung für Ursprünge, denen bereits Zugang gewährt wurde, zu verlängern. Jedes Mal, wenn die Heuristik aktiviert wird oder ein erfolgreicher Aufruf der Storage Access API erfolgt, wird der bestehende Ablauftimer des Speicherzugriffs um 30 Tage verlängert, ab dem Zeitpunkt, an dem der vorherige Zugang gewährt wurde.

Bitte beachten Sie, dass wir in Zukunft Änderungen daran erwarten, wie lange Speicherzugriff gültig bleibt. Wie bereits erwähnt, wird die Möglichkeit, Speicher als Drittanbieter verwenden zu können, durch die Nutzung der Storage Access API gesichert.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere diejenigen, die auf Drittanbieter-Content-Integrationen angewiesen sind. Wir haben mehrere neue Funktionen in Firefox hinzugefügt, um das Testen zu erleichtern.

### Benachrichtigungen in den Entwicklerwerkzeugen

Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox-Entwicklerwerkzeugen enthält jetzt einen Indikator für alle Ressourcenanfragen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schild-Symbol in der Domänenspalte angezeigt. Im unten stehenden Beispielbild ist `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an example.com dies nicht ist.

![Netzwerkanfragen in Firefox DevTools, die anzeigen, welche Tracking-Ressourcen mit einem kleinen Schildsymbol sind](network-requests.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Schutzliste

Interessiert daran, wie Dinge funktionieren, wenn eine Drittanbieter-Domain auf Ihrer Website als Tracker klassifiziert wäre? Wir haben eine Einstellung hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zum Tracking-Schutz-URL-Klassifizierer hinzuzufügen. Gehen Sie dazu wie folgt vor:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Ihnen eine Seite angezeigt wird, die Sie warnt: "Dies könnte Ihre Garantie gefährden!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Präferenznamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Präferenz bereits existiert, bearbeiten Sie den Präferenzwert.
4. Wenn die Präferenz nicht existiert, klicken Sie auf "String" und dann auf "+", um eine neue Präferenz zu erstellen.
5. Geben Sie in das Präferenzfeld die Ursprünge ein, die Sie als Tracker klassifizieren möchten, durch Kommas getrennt. Zum Beispiel "example.net,example.org".

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einträge nach Abschluss Ihrer Tests entfernen.

## FAQ

Diese Cookie-Richtlinie kann zu Website-Störungen führen, wurde jedoch so gestaltet, dass gängige Drittanbieter-Integrationen weiterhin funktionieren, während das Tracking über Websites hinweg verhindert wird. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffspolitik die Anzeige von Anzeigen auf meiner Website blockieren?

Nein — dieses Feature beschränkt nur den Zugang zu Cookies und Websitedaten, die verwendet werden können, um Benutzer über Websites hinweg zu verfolgen. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Werbeanzeigen.

### Ich nutze einen Drittanbieter-Analysedienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Dies hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analytikanbieter können ihren Drittanbieterspeicher nicht mehr verwenden, um Daten zu sammeln. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihrer Drittanbieterdomain gespeichert sind, oder lokaler Speicher und andere Websitedaten, die unter ihrem Ursprung gespeichert sind, keinen Zugriff mehr auf diese Identifikatoren über andere Websites hinweg haben.

Wenn diese Dienste in den Hauptkontext der Seite integriert sind, können sie weiterhin First-Party-Cookies und Websitedaten verwenden, um Benutzer bei Besuchen der spezifischen First-Party-Domain zu verfolgen.

### Ich verwende Drittanbieter-Dienste für soziale Anmeldungen, Like- und Share-Button-Integrationen. Werden meine Nutzer diese Dienste weiterhin nutzen können?

Dies hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der gängigen sozialen Integrationen weiterhin wie unter der aktuellen Cookie-Richtlinie von Firefox funktionieren, jedoch mit einigen geringfügigen Unterschieden im Benutzererlebnis.

Ein sozialer Inhalteanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Benutzer zum ersten Mal eine neue First Party besucht. Somit könnte der Benutzer dem Dienst ausgeloggt erscheinen, obwohl er bei einem direkten Besuch auf der Website des Anbieters eingeloggt ist. Abhängig von der Art der Integration muss der Benutzer möglicherweise eine Aktion durchführen, um mit dem sozialen Inhalteanbieter zu interagieren, bevor der Anbieter Zugriff auf seine Cookies erhält. Zum Beispiel:

- Bei der sozialen Anmeldung muss der Benutzer möglicherweise auf einen Anmeldebutton bei der First Party klicken.
- Bei sozialen Like- oder Share-Buttons muss der Benutzer zunächst in einem ausgeloggten Zustand mit dem Button interagieren. Sobald er dies tut, werden viele soziale Inhaltsanbieter ihn auffordern, sich einzuloggen.

Nach diesen Interaktionen erhält der Anbieter Drittanbieter-Speicherzugriff, wenn er den Benutzer in einer Weise auffordert, die von den oben beschriebenen Speicherzugriffsaktivierungs-Heuristiken erfasst wird. Diese Anbieter sollten in Betracht ziehen, so schnell wie möglich explizit Speicherzugriff durch die Storage Access API anzufordern. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich verwende Drittanbieter-Pixel und andere Tools, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin in der Lage sein, die Konversionsrate meiner Anzeigen zu messen?

Dies hängt davon ab, wie der Drittanbieter das Mess-Tool implementiert hat, allgemein wird die Messung der Anzeigenkonversion jedoch schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Website, die mehrmals von einem Benutzer gesehen wird, aber nie angeklickt. Dieser Benutzer besucht später Ihre Website, die ein Konversions-Tracking-Tag von derselben Social-Media-Website enthält. Diese Art der Konversion wird oft als "View-Through-Conversions" bezeichnet. Da die Social-Media-Website keinen Zugriff auf ihren Drittanbieterspeicher hat, wird sie den Benutzer nicht als denselben Benutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht erfasst. Wir erwarten, dass die meisten View-Through-Tracking-Techniken nicht mehr funktionieren, einschließlich der von Display-Netzwerken angebotenen.
2. Sie schalten eine Anzeige auf einem Display-Netzwerk oder einer Social-Media-Website, die von einem Benutzer angeklickt wird. Dieser Benutzer landet auf Ihrer Website, die ein Konversions-Tracking-Tag von derselben Website enthält, die Ihre Anzeige angezeigt hat. Diese Art der Konversion wird oft als "Click-Through-Conversions" bezeichnet. Da die Social-Media-Website oder das Display-Netzwerk keinen Zugriff auf ihren Drittanbieterspeicher hat, wird sie den Benutzer nicht als denselben Benutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht erfasst. Wir erwarten, dass diese Version der Click-Through-Conversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Website erscheint. Ein Benutzer klickt auf Ihre Anzeige und wird auf eine Landing-Page weitergeleitet, die ein Konversions-Tracking-Tag vom Drittanbieternetzwerk enthält. Auf der Social-Media-Website versieht das Netzwerk die URL der Anzeigen-Landing-Page mit einem Abfrageparameter, der signalisiert, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website überprüft das Tag des Display-Netzwerks die URL-Abfrageparameter und speichert alle Ad-Tracking-Parameter im First-Party-Speicher. Wenn der Benutzer später ein Konversionsereignis abschließt, überprüft das Tag des Netzwerks den First-Party-Speicher, um festzustellen, welcher Klick (oder Klicks) für den Besuch verantwortlich war. Wir erwarten, dass die so implementierte Click-Through-Conversion weiterhin funktioniert.
