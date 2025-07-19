---
title: "Speicherzugriffsrichtlinie: Cookies von Trackern blockieren"
short-title: Storage access policy
slug: Web/Privacy/Guides/Storage_Access_Policy
l10n:
  sourceCommit: 16f0f784e4f100162fcff278aa45d91f627a0357
---

Firefox enthält eine neue Speicherzugriffsrichtlinie, die Cookies und andere Website-Daten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie ist als Alternative zu den älteren Cookie-Richtlinien gedacht, die in Firefox seit vielen Jahren verfügbar sind. Diese Richtlinie schützt vor Website-übergreifendem Tracking, während sie das Risiko von Websiteschäden durch traditionelles Cookie-Blocking minimiert. Dieser Artikel erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir für die Veröffentlichung an Firefox Release-Nutzer vorgesehen haben, möglicherweise jedoch nicht das, was in der aktuellen Release-Version von Firefox implementiert ist. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), unserem Pre-Release-Kanal, erscheinen. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir derzeit nicht für die Veröffentlichung an Endbenutzer planen; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können jedoch dennoch die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen Websites, mit [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmaßnahmen enthält. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmaßnahmen enthalten kann, die möglicherweise vor Erreichen unserer Release-Nutzer entfernt oder geändert werden. Wir werden diese Seite mit den neuesten Informationen aktualisieren, während wir unsere Schutzmaßnahmen verstärken.

Diese Schutzmaßnahmen sind standardmäßig in Nightly aktiviert. Die Cookie-Richtlinie kann in anderen Firefox-Versionen über die [Content Blocking-Einstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown-Menü zur Auswahl der entsprechenden Firefox-Version).

### Gemeldete fehlerhafte Websites

Wenn Sie feststellen, dass eine Website aufgrund dieser Änderung nicht funktioniert, melden Sie einen Fehler im "Tracking Protection"-Bereich des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie fehlerhafte Websites direkt in Firefox melden, indem Sie im Abschnitt "Content Blocking" des [Control Centers](https://support.mozilla.org/en-US/kb/site-information-panel) auf "Ein Problem melden" klicken (dieser Shortcut ist möglicherweise nicht in allen Firefox-Versionen verfügbar).

## Erklärung der Tracking-Schutzmaßnahmen

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking Protection-Liste, um festzustellen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking Protection-Liste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die "Basis-Schutz"-Version der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unseren Schutz auf die "Strikte Schutz"-Version der Liste erweitern.
- Zweitens verwendet Firefox eine zusätzliche "[Entitätenliste](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Website geladen werden, die demselben Unternehmen gehört](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den eingebauten [Tracking Protection](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection) URL-Klassifikator, um zu bestimmen, welche Ressourcen mit der Tracking Protection-Liste übereinstimmen. Domains werden in Übereinstimmung mit der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Speziell überprüfen wir den genauen Hostnamen der Ressource gegen die Liste, sowie die letzten vier Hostnamen, die durch Starten mit den letzten fünf Komponenten und sukzessives Entfernen der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname auf der Liste | Hostname der Ressource | Übereinstimmung |
| ---------------------- | ---------------------- | --------------- |
| `example.com`          | `example.com`          | Ja              |
| `example.com`          | `a.b.example.com`      | Ja              |
| `blah.example.com`     | `example.com`          | Nein            |
| `a.b.example.com`      | `c.d.example.com`      | Nein            |
| `blah.example.com`     | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffsrichtlinie?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert werden, vor dem Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und anderen Website-Speicher, die in einem Drittanbieterkontext geladen werden. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und sie verwenden, um Benutzer über Besuche auf mehreren Erstanbietern hinweg zu identifizieren. Genauer gesagt, erzwingt Firefox die folgenden Einschränkungen:

Cookies:

- Blockieren von {{httpheader("Cookie")}}-Anforderungsheadern und Ignorieren von {{httpheader("Set-Cookie")}}-Antwortheadern.
- Rückgabe eines leeren Strings bei Aufrufen von [`Document.cookie`](/de/docs/Web/API/Document/cookie) und Ignorieren von Anforderungen zum Setzen von Cookies über `Document.cookie`.

DOM-Speicher:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher werfen Versuche, mit diesem Objekt zu lesen und zu schreiben, eine `TypeError`-Ausnahme.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, auf das IndexedDB-Fabrikobjekt zuzugreifen, löst eine `SecurityError`-Ausnahme aus.

Messaging und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Versuche, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, werden eine `SecurityError`-Ausnahme auslösen.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Versuche, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, werden eine `SecurityError`-Ausnahme auslösen.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Versuche, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, werden eine `SecurityError`-Ausnahme auslösen.

DOM-Cache:

- Aufrufe von [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Guides/Caching), der Bilder-Cache und der [Alternative Services (Alt-Svc)-Cache](/de/docs/Web/HTTP/Reference/Headers/Alt-Svc) sind alle für Tracking-Ressourcen partitioniert, sodass jede Top-Level-Herkunft eine separate Partition hat und Tracking-Ressourcen auf verschiedenen Top-Level-Herkünften getrennt voneinander zwischengespeichert werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sitzungsticket wieder aufgenommen, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- [Wiederverwendung der HTTP-Verbindung](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#persistent_connections) durch als Tracker klassifizierte Domains ist auf Anforderungen beschränkt, die unter derselben Top-Level-Herkunft auftreten. Zum Beispiel wird eine Anfrage nach Inhalten von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage nach Inhalten von `tracker.example` auf `shopping.example` oder mit Anfragen wiederverwenden, die auftreten, wenn `tracker.example` direkt besucht wird (d.h. als Erstanbieter).

HTTP-Referrer

- Die Standard [Referrer-Policy](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) für als Tracker klassifizierte Drittanbieter-Ressourcen wird auf `strict-origin-when-cross-origin` gesetzt.

### Was wird von der Richtlinie nicht blockiert?

1. Diese Richtlinie schränkt derzeit den Drittanbieter-Speicherzugriff für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind, nicht ein. Wir könnten in Zukunft zusätzliche Einschränkungen für den Drittanbieter-Speicherzugriff anwenden.
2. Die von der Richtlinie angewendeten Einschränkungen verhindern nicht, dass Drittanbieter-Skripte, die als Tracking-Ressourcen klassifiziert sind, auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin Speicher verwenden, der auf die Top-Level-Herkunft bezogen ist.
3. Herkünfte, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie in einem Erstanbieterkontext geladen werden.
4. Website-übergreifende Ressourcen, die von derselben {{Glossary("eTLD", "eTLD+1")}} wie der Top-Level-Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Herkünfte, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn festgestellt wird, dass die Top-Level-Seitenherkunft zur selben Organisation gehört wie sie](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsgenehmigungen

Um die Web-Kompatibilität zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, wird Firefox Speicherzugriff gewähren, der auf die Erstanbieterseite für eine bestimmte Drittanbieter-Herkunft beschränkt ist, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Web-Kompatibilitätsheuristiken, die Speicherzugriff für Drittanbieter-Ressourcen gewähren, die als Tracker klassifiziert sind, wenn ein Benutzer mit diesen Drittanbietern interagiert. Wir tun dies, wenn wir erwarten, dass das Verweigern des Zugriffs dazu führen würde, dass die Webseite nicht richtig funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), wodurch eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Auch wenn beide Ansätze dasselbe Maß an Speicherzugriff bieten, empfehlen wir Drittanbietern, auf die Nutzung der Storage Access API umzustellen, um ihren Zugriff auf Speicher zu garantieren.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, um Drittanbietern, die Benutzerinteraktion erhalten, automatisch Speicherzugriff zu gewähren. Diese Heuristiken sollen es ermöglichen, dass einige Drittanbieter-Integrationen, die im Web verbreitet sind, weiterhin funktionieren. Sie sind als vorübergehend gedacht und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten nicht für die aktuelle und zukünftige Webentwicklung verwendet werden.

Drittanbieter-Speicherzugriff kann gewährt werden, wenn eine Benutzeraktion ein Popup-Fenster auslöst, das [Opener-Zugriff](/de/docs/Web/API/Window/opener) auf das Ursprungdokument hat. Wenn der Benutzer mit dem Popup interagiert, wird der Ursprung der Ressource, die ursprünglich im Popup-Fenster geladen wurde, Speicherzugriff auf das Opener-Dokument gewährt, wenn dieser Ursprung in den letzten 30 Tagen als Erstanbieter Benutzerinteraktion erhalten hat.

Drittanbieter-Speicherzugriff kann auch gewährt werden, wenn ein Benutzer zu einem anderen Ursprung innerhalb desselben Fensters navigiert. Wenn der Benutzer mit diesem Ursprung interagiert und dann schnell zu einem Dokument im ursprünglichen Ursprung navigiert, wird der zwischengeschalteten Seite Speicherzugriff auf das endgültige Dokument gewährt.

### Umfang des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist er auf die Website des Opener-Dokuments oder Unterdomänen dieses Ursprungs beschränkt. Ein Zugriff, der auf der Unterdomäne eines Ursprungs gewährt wird, erstreckt sich nicht auf den Top-Level-Ursprung. Ein Beispiel: Wenn einer Ressource von `tracker.example` Speicherzugriff auf `foo.example.com` gewährt wird, kann `tracker.example` seine Cookies auf `bar.foo.example.com` und auf `example.com` verwenden.

Wenn `tracker.example` Speicherzugriff auf `example.com` gewährt wird, erhalten alle von `tracker.example` geladenen Ressourcen sofort Speicherzugriff auf jedes Top-Level-Dokument, das von `example.com` geladen wird. Dies schließt alle Ressourcen ein, die im Hauptkontext der Seite geladen werden, eingebettete `<iframe>`s und Ressourcen, die innerhalb von eingebetteten `<iframe>`s geladen werden. Der Speicherzugriff erstreckt sich nicht auf andere auf `example.com` geladene Ressourcen (z.B. `other-tracker.example`) noch auf andere Erstanbieter, bei denen `tracker.example` eingebettet ist (z.B. `example.org`).

Speicherzugriffsgenehmigungen erstrecken sich auf das erste Level von eingebetteten Kontexten, jedoch nicht weiter. Dies bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet sind und von einer als Tracker klassifizierten Domain geladen werden, vollen Zugriff auf alle über JavaScript zugänglichen Speicherorte haben. Ebenso haben Anfragen zu Ressourcen, die in `<iframe>`s im Hauptkontext der Seite geladen werden, Zugriff auf HTTP-Cookies. Weiter verschachtelte Kontexte, einschließlich aber nicht beschränkt auf diejenigen des als Tracker klassifizierten Ursprungs, erhalten jedoch keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungsszenarien auf einer von `example.com` geladenen Top-Level-Seite, auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                              | Speicherzugriff für tracker.example Ressourcen |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                          | HTTP: Ja JS: N/A                               |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt ein Bild von `tracker.example`.                                       | HTTP: Ja JS: N/A                               |
| `example.com` bettet ein `<iframe>` von `example.org` ein. Dieses `<iframe>` lädt ein `<iframe>` von `tracker.example` ein.                             | HTTP: Ja JS: Nein                              |
| `example.com` bettet ein `<iframe>` von `tracker.example` ein.                                                                                          | HTTP: Ja JS: Ja                                |
| `example.com` bettet ein `<iframe>` von `example.com` (selber Ursprung) ein. Das eingebettete `<iframe>` lädt ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                              |

### Speicherzugriff-Ablauf

Die Speicherzugriffsgenehmigung läuft nach 30 Tagen ab. Domains, die als Tracking-Ressourcen klassifiziert sind, können bei mehreren Erstanbietern Drittanbieter-Speicherzugriff gewährt bekommen, und die Speichergenehmigung für jede Partei läuft unabhängig ab. Die oben beschriebenen Heuristiken dienen auch dazu, die Lebensdauer einer Drittanbieter-Speicherberechtigung auf Ursprüngen mit bereits gewährtem Zugriff zu verlängern. Jedes Mal, wenn die Heuristik aktiviert wird oder ein erfolgreicher Aufruf der Storage Access API gemacht wird, wird das vorherige Ablaufdatum des Speichers um 30 Tage ab dem Zeitpunkt der vorherigen Zugriffsgewährung verlängert.

Bitte beachten Sie, dass wir in Zukunft Änderungen daran vornehmen werden, wie lange Speicherzugriff gültig bleiben wird. Wie bereits erwähnt, ist der Weg, um sicherzustellen, dass Sie Speicher als Drittanbieter in Zukunft nutzen können, die Verwendung der Storage Access API.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere solche, die auf Drittanbieter-Inhalte angewiesen sind. Wir haben mehrere neue Funktionen zu Firefox hinzugefügt, um das Testen zu erleichtern.

### Entwickler-Tools-Benachrichtigungen

Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox-Entwickler-Tools enthält jetzt einen Indikator für alle Ressourcenanfragen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Domain-Spalte angezeigt. In dem Beispielbild unten ist `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an example.com nicht.

![Netzwerkanfragen in Firefox DevTools, die anzeigen, welche als Tracking-Ressourcen klassifiziert sind, mit einem kleinen Schildsymbol](network-requests.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking Protection-Liste

Neugierig, wie es funktionieren wird, wenn eine Drittanbieter-Domain auf Ihrer Website als Tracker klassifiziert wäre? Wir haben eine Einstellung hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zum Tracking Protection-URL-Klassifikator hinzuzufügen. Um dies zu tun:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Sie eine Seite sehen, die Sie darauf hinweist, dass "Dies Ihre Garantie ungültig machen kann!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Präferenznamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Wenn die Präferenz bereits existiert, bearbeiten Sie den Präferenzwert.
4. Wenn die Präferenz nicht existiert, klicken Sie auf "String" und dann auf "+" um eine neue Präferenz zu erstellen.
5. Geben Sie für den Präferenzwert kommaseparierte Ursprünge ein, die Sie als Tracker klassifiziert haben möchten. Zum Beispiel "example.net,example.org".

> [!WARNING]
> Stellen Sie sicher, diese Einträge zu entfernen, nachdem Sie das Testen abgeschlossen haben.

## FAQ

Diese Cookie-Richtlinie hat das Potenzial, zu Websiteschäden zu führen, wurde jedoch so konzipiert, dass gängige Drittanbieter-Integrationen weiterhin funktionieren können, während sie Website-übergreifendes Tracking verhindern. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffsrichtlinie verhindern, dass Anzeigen auf meiner Website angezeigt werden?

Nein — dieses Feature schränkt nur den Zugriff auf Cookies und Site-Daten ein, die zur Verfolgung von Benutzern über Websites hinweg verwendet werden können. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Werbeanzeigen.

### Ich nutze einen Drittanbieter-Analysetooldienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Dies hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analyseanbieter können ihre Drittanbieter-Speicher nicht mehr verwenden, um Daten zu sammeln. Das bedeutet, dass Anbieter, die Cookies verwenden, die ihrem Drittanbieterdomain oder lokalem Speicher zugeordnet sind, keinen Zugriff mehr auf diese Identifikatoren über andere Websites hinweg haben werden.

Wenn diese Dienste in den Hauptkontext der Seite eingebettet sind, können sie weiterhin Erstanbieter-Cookies und Site-Speicher verwenden, um Benutzer über Besuche auf dieser spezifischen Erstanbieterdomain hinweg zu verfolgen.

### Ich nutze Drittanbieter-Dienste für soziale Login-, Like- und Share-Button-Integration. Werden meine Nutzer diese Dienste weiterhin nutzen können?

Dies hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen wie bisher unter Firefoxs aktueller Cookie-Richtlinie mit einigen geringfügigen Unterschieden im Benutzererlebnis weiter funktionieren werden.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Benutzer eine neue Erstanbieter-Webseite zum ersten Mal besucht. Daher kann der Nutzer aus Sicht des Dienstes ausgeloggt erscheinen, obwohl er eingeloggt ist, wenn er die Website des Anbieters direkt besucht. Je nach Art der Integration muss der Nutzer möglicherweise eine Aktion ausführen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor diesem Anbieter Zugriff auf seine Cookies gewährt wird. Zum Beispiel:

- Für das soziale Login muss der Benutzer möglicherweise auf einen Login-Button auf der Erstanbieterseite klicken.
- Bei Like- oder Share-Buttons muss der Benutzer zunächst mit dem Button im ausgeloggten Zustand interagieren. Sobald er dies tut, wird er von vielen sozialen Inhaltsanbietern aufgefordert, sich einzuloggen.

Nach diesen Interaktionen erhält der Anbieter Drittanbieter-Speicherzugriff, wenn er den Benutzer auf eine Weise auffordert, die von den oben beschriebenen Speicherzugriffsaktivierungsheuristiken erfasst wird. Diese Anbieter sollten in Erwägung ziehen, so schnell wie möglich um expliziten Speicherzugriff über die Storage Access API zu bitten. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich nutze Drittanbieter-Pixel und andere Werkzeuge, um die Effektivität meiner Werbekampagnen zu messen. Werde ich weiterhin in der Lage sein, die Konversionsrate meiner Anzeigen zu messen?

Dies hängt davon ab, wie die Werbekampagnenmessung durch den Drittanbieter implementiert ist, aber generell wird die Messung der Anzeigekonversion schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Website, die mehrmals von einem Benutzer gesehen, aber nie angeklickt wird. Dieser Benutzer besucht später Ihre Website, die ein Konversionstracking-Tag von derselben Social-Media-Website enthält. Diese Art von Konversion wird oft als "View-Through-Konversion" bezeichnet. Da die Social-Media-Website keinen Zugriff auf ihren Drittanbieter-Speicher hat, wird sie den Benutzer nicht als den gleichen Benutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht nachverfolgt. Wir erwarten, dass die meisten View-Through-Konversionsnachverfolgungstechniken nicht mehr funktionieren werden, einschließlich derer, die von Display-Netzwerken angeboten werden.
2. Sie schalten eine Anzeige in einem Display-Netzwerk oder auf einer Social-Media-Website, die von einem Nutzer angeklickt wird. Dieser Nutzer landet auf Ihrer Website, die ein Konversionstracking-Tag von derselben Website enthält, die Ihre Anzeige geschaltet hat. Diese Art von Konversion wird oft als "Click-Through-Konversion" bezeichnet. Da die Social-Media-Website oder das Display-Netzwerk keinen Zugriff auf ihren Drittanbieter-Speicher hat, werden sie den Benutzer nicht als den gleichen Benutzer erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht nachverfolgt. Wir erwarten, dass diese Version der Click-Through-Konversion nicht mehr funktionieren wird.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Website angezeigt wird. Ein Nutzer klickt auf Ihre Anzeige und wird auf eine Landingpage weitergeleitet, die ein Konversionstracking-Tag des Drittanbieternetzwerks enthält. Auf der Social-Media-Website annotiert das Netzwerk die URL der Anzeigen-Landingpage mit einem Parameter, der darauf hinweist, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website überprüft das Tag des Display-Netzwerks die URL-Query-Parameter und speichert alle Ad-Tracking-Parameter im Erstanbierterspeicher. Wenn ein Benutzer später ein Konversionsereignis abschließt, überprüft das Tag des Netzwerks den Erstanbierterspeicher, um festzustellen, welcher Klick (oder welche Klicks) für den Besuch verantwortlich war. Wir erwarten, dass Click-Through-Konversionen, die auf diese Weise implementiert sind, weiterhin funktionieren werden.
