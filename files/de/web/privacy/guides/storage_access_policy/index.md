---
title: "Speicherzugriffspolitik: Cookies von Trackern blockieren"
short-title: Storage access policy
slug: Web/Privacy/Guides/Storage_Access_Policy
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Firefox beinhaltet eine neue Speicherzugriffspolitik, die Cookies und andere Seitendaten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Politik ist als Alternative zu den älteren Cookie-Richtlinien gedacht, die in Firefox seit vielen Jahren verfügbar sind. Diese Politik schützt vor Cross-Site-Tracking und minimiert den Website-Ausfall, der mit der traditionellen Cookie-Blockierung verbunden ist. Dieser Artikel erklärt, wie die Politik funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Politik, die wir an Firefox-Release-Benutzer ausliefern wollen, die möglicherweise nicht mit dem übereinstimmt, was in der aktuellen Release-Version von Firefox implementiert ist. Dies liegt daran, dass wir neue Aspekte der Politik dokumentieren, sobald sie in [Firefox Nightly](https://www.mozilla.org/de/firefox/channel/desktop/#nightly), unserem Vorab-Kanal, landen. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir noch nicht an Release-Benutzer ausliefern möchten; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können aber dennoch die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen Websites, Tests mit [Firefox Nightly](https://www.mozilla.org/de/firefox/channel/desktop/#nightly) durchzuführen, da dies die neueste Version unserer Schutzmaßnahmen umfasst. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmaßnahmen enthalten kann, die entfernt oder geändert werden, bevor sie unsere Release-Benutzer erreichen. Wir werden diese Seite mit den neuesten Informationen aktualisieren, während wir unsere Schutzmaßnahmen stärken.

Diese Schutzmaßnahmen sind standardmäßig in Nightly aktiviert. Die Cookie-Richtlinie kann in anderen Versionen von Firefox über die [Einstellungen für Inhaltsblockierung](https://support.mozilla.org/de/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown, um die entsprechende Firefox-Version auszuwählen).

### Fehlerhafte Websites melden

Wenn Sie feststellen, dass eine Website aufgrund dieser Änderung nicht ordnungsgemäß funktioniert, melden Sie den Fehler unter der Komponente Tracking-Schutz innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie defekte Websites direkt in Firefox melden, indem Sie im Abschnitt Inhaltsblockierung des [Kontrollzentrums](https://support.mozilla.org/de/kb/site-information-panel) auf "Problem melden" klicken (dieser Shortcut ist nicht in allen Firefox-Versionen verfügbar).

## Erklärung des Tracking-Schutzes

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking-Schutzliste, um festzustellen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking-Schutzliste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die „Grundschutz“-Version der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unsere Schutzmaßnahmen erweitern, um die „Strikte Schutz“-Version der Liste zu verwenden.
- Zweitens verwendet Firefox eine zusätzliche "[Entitätenliste](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker eingestuft werden, wenn sie auf einer von derselben Organisation betriebenen Top-Level-Site geladen werden](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den integrierten [Tracking-Schutz](https://support.mozilla.org/de/kb/what-happened-tracking-protection)-URL-Classifier, um festzustellen, welche Ressourcen der Tracking-Schutzliste entsprechen. Domains werden gemäß der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Insbesondere überprüfen wir den exakten Hostnamen der Ressource hinsichtlich der Liste sowie die letzten vier Hostnamen, die durch das Starten mit den letzten fünf Komponenten und das sukzessive Entfernen der führenden Komponente gebildet werden. Betrachten Sie die folgenden Beispiele:

| Hostname auf der Liste | Hostname der Ressource | Übereinstimmung |
| ---------------------- | ---------------------- | --------------- |
| `example.com`          | `example.com`          | Ja              |
| `example.com`          | `a.b.example.com`      | Ja              |
| `blah.example.com`     | `example.com`          | Nein            |
| `a.b.example.com`      | `c.d.example.com`      | Nein            |
| `blah.example.com`     | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffspolitik?

Die Speicherzugriffspolitik blockiert Ressourcen, die als Tracker identifiziert werden, vom Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und anderen Site-Speicher, die in einem Drittanbieter-Kontext geladen werden. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und diese nutzen, um Benutzer über mehrere First-Party-Besuche hinweg zu identifizieren. Insbesondere tut Firefox dies, indem es folgende Einschränkungen auferlegt:

Cookies:

- Blockiere {{httpheader("Cookie")}}-Request-Header und ignoriere {{httpheader("Set-Cookie")}}-Response-Header.
- Gib einen leeren String für Aufrufe von [`Document.cookie`](/de/docs/Web/API/Document/cookie) zurück und ignoriere Anfragen, Cookies über `Document.cookie` zu setzen.

DOM Storage:

- [localStorage](/de/docs/Web/API/Web_Storage_API): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage): Lese- und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist `null`. Daher führen Versuche, dieses Objekt zu lesen und zu schreiben, zu einer `TypeError`-Ausnahme.
- [sessionStorage](/de/docs/Web/API/Web_Storage_API): Lese- und Schreibversuche sind erlaubt.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API): Der Versuch, auf das IndexedDB-Fabrikobjekt zuzugreifen, wirft eine `SecurityError`-Ausnahme.

Messaging und Worker:

- [Broadcast Channel](/de/docs/Web/API/Broadcast_Channel_API): Versuche, einen neuen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) zu erstellen, führen zu einer `SecurityError`-Ausnahme.
- [Shared Worker](/de/docs/Web/API/Web_Workers_API): Versuche, einen neuen [`SharedWorker`](/de/docs/Web/API/SharedWorker) zu erstellen, führen zu einer `SecurityError`-Ausnahme.
- [Service Worker](/de/docs/Web/API/Service_Worker_API): Versuche, einen neuen [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu erstellen, führen zu einer `SecurityError`-Ausnahme.

DOM Cache:

- Aufrufe an [`CacheStorage`](/de/docs/Web/API/CacheStorage) werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der [HTTP-Cache](/de/docs/Web/HTTP/Caching), der Bildcache und der [Alternative Services (Alt-Svc) Cache](/de/docs/Web/HTTP/Headers/Alt-Svc) sind für Tracking-Ressourcen partitioniert, sodass jeder Top-Level-Ursprung ein separates Partition hat, und Tracking-Ressourcen auf verschiedenen Top-Level-Ursprüngen separat zwischengespeichert werden.

Netzwerkverbindungen:

- [TLS-Sitzungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Session_Resumption) werden nicht mit einem Sitzungsticket wieder aufgenommen, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- Die [Wiederverwendung von HTTP-Verbindungen](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#persistent_connections) durch als Tracker klassifizierte Domains beschränkt sich auf Anfragen, die unter demselben Top-Level-Ursprung stattfinden. Beispielsweise wird eine Anfrage für Inhalte von `tracker.example` auf `news.example` keine HTTP-Verbindung mit einer Anfrage für Inhalte von `tracker.example` auf `shopping.example` erneut verwenden, oder mit Anfragen, die stattfinden, wenn `tracker.example` direkt besucht wird (d.h. als First Party).

HTTP-Referer

- Die Standard-[Referrer-Policy](/de/docs/Web/HTTP/Headers/Referrer-Policy) für Drittanbieter-Ressourcen, die als Tracker klassifiziert sind, ist auf `strict-origin-when-cross-origin` gesetzt.

### Was wird nicht durch die Politik blockiert?

1. Diese Politik beschränkt derzeit nicht den Zugriff auf Drittanbieterspeicher für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind. Wir können in Zukunft weitere Einschränkungen für den Drittanbieterspeicherzugriff anwenden.
2. Die durch die Politik angewendeten Einschränkungen verhindern nicht, dass Drittanbieter-Skripte, die als Tracking-Ressourcen klassifiziert sind, auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin den Speicher verwenden, der auf den Top-Level-Ursprung beschränkt ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie in einem First-Party-Kontext geladen werden.
4. Cross-Origin-Ressourcen, die vom selben {{Glossary("eTLD", "eTLD+1")}} wie der Top-Level-Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn der Top-Level-Seitenursprung als von derselben Organisation stammend bestimmt wird](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsgewährungen

Um die Web-Kompatibilität zu verbessern und Drittanbieter-Integrationen zu ermöglichen, die Speicherzugriff erfordern, wird Firefox Speicherzugriff zum ersten Ursprung für einen bestimmten Drittanbieter-Ursprung gewähren, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Web-Kompatibilitätsheuristiken, die Drittanbieterressourcen, die als Tracker klassifiziert sind, Speicherzugriff gewähren, wenn ein Benutzer mit diesen Drittanbietern interagiert. Wir tun dies, wenn wir erwarten, dass das Nicht-Gewähren des Zugriffs dazu führen würde, dass die Webseite nicht funktioniert. Wir unterstützen auch eine erste Implementierung der [Storage Access API](/de/docs/Web/API/Storage_Access_API), durch die eingebettete {{htmlelement("iframe")}}s Speicherzugriff anfordern können, indem sie [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen. Obwohl beide Ansätze das gleiche Maß an Speicherzugriff bieten, empfehlen wir Drittanbietern, zur Storage Access API zu wechseln, um ihren Zugriff auf Speicher zu gewährleisten.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, umfasst Firefox derzeit einige Heuristiken, um Speicherzugriff automatisch Drittanbietern zu gewähren, die Benutzerinteraktion erhalten. Diese Heuristiken sollen es einigen Drittanbieter-Integrationen, die im Web verbreitet sind, ermöglichen, weiterhin zu funktionieren. Sie sind als temporär gedacht und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten nicht für die aktuelle und zukünftige Webentwicklung herangezogen werden.

Drittanbieterspeicherzugriff kann gewährt werden, wenn eine Benutzeraktion ein Pop-Up-Fenster auslöst, das [opener access](/de/docs/Web/API/Window/opener) auf das ursprüngliche Dokument hat. Wenn dies geschieht, gibt es drei mögliche Wege, wie ein Drittanbieter-Ursprung den Zugang erhalten kann:

- Dem Ursprung der Ressource, die ursprünglich im Pop-Up-Fenster geladen wird, wird Speicherzugang zum Opener-Dokument gewährt, wenn der Ursprung in den letzten 30 Tagen als First Party Benutzerinteraktion erhalten hat.
- Nachdem die ursprüngliche Ressource im Pop-Up-Fenster geladen wird, kann das Fenster eine Reihe von Redirects zu anderen Hosts durchlaufen. Wenn ein Benutzer nach einem Redirect mit dem Pop-Up-Fenster interagiert, wird dem Ursprung der im Pop-Up-Fenster geladenen Inhalte Speicherzugang zum Opener-Dokument gewährt.
- Wenn es ein Top-Level-Redirect von einem Tracking-Ursprung zu einem nicht-tracking Ursprung gibt, erhält der Tracking-Ursprung kurzlebigen Speicherzugang auf dem nicht-tracking Ursprung und allen anderen nicht-tracking Ursprüngen, die weiter unten in der Redirect-Kette erscheinen (d.h. wenn der Ladevorgang weiterhin umgeleitet wird). Der Tracking-Ursprung muss als First Party innerhalb der letzten 30 Tage Benutzerinteraktion erhalten haben, und die Speicherzugriffsberechtigung läuft nach 15 Minuten ab.

### Geltungsbereich des Speicherzugriffs

Wenn Speicherzugriff gewährt wird, ist er auf die Site des Opener-Dokuments oder auf Subdomains dieses Ursprungs beschränkt. Ein Zugriff, der auf der Subdomain eines Ursprungs gewährt wird, erstreckt sich nicht auf den Top-Level-Ursprung. Wenn beispielsweise einer Ressource von `tracker.example` auf `foo.example.com` Speicherzugriff gewährt wird, kann `tracker.example` auf seine Cookies auf `bar.foo.example.com` und `example.com` zugreifen.

Wenn `tracker.example` auf `example.com` Speicherzugriff gewährt wird, erhalten alle von `tracker.example` geladenen Ressourcen in einem Top-Level-Dokument, das von `example.com` geladen wird, sofort Speicherzugriff. Dies schließt alle Ressourcen ein, die im Hauptkontext der Seite geladen werden, eingebettete `<iframe>`s und Ressourcen, die innerhalb eingebetteter `<iframe>`s geladen werden. Der Speicherzugriff erstreckt sich nicht auf andere Ressourcen, die auf `example.com` geladen werden (z. B. `other-tracker.example`), noch auf andere First Parties, auf denen `tracker.example` eingebettet ist (z. B. `example.org`).

Speicherzugriffsgewährungen erstrecken sich in den ersten Grad der eingebetteten Kontexte, jedoch nicht weiter. Das bedeutet, dass `<iframe>`s, die im Hauptkontext der Seite eingebettet und von einer als Tracker klassifizierten Domain geladen wurden, vollen Zugriff auf alle durch JavaScript zugänglichen Speicherorte haben. Ebenso haben Anfragen für Ressourcen, die in `<iframe>`s geladen werden, die im Hauptkontext der Seite eingebettet sind, Zugriff auf HTTP-Cookies. Häufiger eingebettete Kontexte, einschließlich jener vom Ursprung, der als Tracker klassifiziert ist, erhalten jedoch keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungs-Szenarien auf einer Top-Level-Seite, die von `example.com` geladen wurde und auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                                    | Speicherzugriff auf tracker.example-Ressourcen |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                                | HTTP: Ja JS: N/A                               |
| `example.com` bettet ein `<iframe>` aus `example.org` ein. Dieses `<iframe>` lädt ein Bild von `tracker.example`.                                             | HTTP: Ja JS: N/A                               |
| `example.com` bettet ein `<iframe>` aus `example.org` ein. Dieses `<iframe>` bettet ein `<iframe>` von `tracker.example` ein.                                 | HTTP: Ja JS: Nein                              |
| `example.com` bettet ein `<iframe>` aus `tracker.example` ein.                                                                                                | HTTP: Ja JS: Ja                                |
| `example.com` bettet ein `<iframe>` aus `example.com` (gleicher Ursprung) ein. Das verschachtelte `<iframe>` bettet ein `<iframe>` von `tracker.example` ein. | HTTP: Ja JS: Nein                              |

### Ablauf des Speicherzugriffs

Die Speicherung des Speicherzugriffs läuft nach 30 Tagen ab. Domains, die als Tracking-Ressourcen klassifiziert sind, können Drittanbieterspeicherzugriff auf mehreren First Parties erhalten, und die Speichergenehmigung für jede Partei läuft unabhängig ab. Die oben genannten Heuristiken werden auch dazu dienen, die Laufzeit einer Drittanbieterspeichergenehmigung auf Ursprüngen, denen bereits Zugriff gewährt wurde, zu verlängern. Jedes Mal, wenn die Heuristik ausgelöst wird oder ein erfolgreicher Aufruf der Storage Access API erfolgt, wird die bestehende Speicherzugriffsverfallszeit um 30 Tage ab dem Zeitpunkt, an dem der vorherige Zugriff gewährt wurde, verlängert.

Bitte beachten Sie, dass wir in Zukunft erwarten, Änderungen daran vorzunehmen, wie lange der Speicherzugriff gültig bleibt. Wie bereits erwähnt, besteht die Möglichkeit, den Speicher als Drittanbieter auch weiterhin nutzen zu können, indem die Storage Access API verwendet wird.

## Debugging

Wir ermutigen Website-Besitzer, ihre Websites zu testen, insbesondere solche, die sich auf Drittanbieter-Inhaltsintegrationen verlassen. Wir haben mehrere neue Funktionen zu Firefox hinzugefügt, um das Testen zu erleichtern.

### Benachrichtigungen der Entwicklertools

Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in Firefox-Entwicklertools enthält jetzt einen Indikator für alle Ressourcenanfragen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Spalte „Domain“ angezeigt. Im Beispielbild unten ist `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an `example.com` dies nicht ist.

![Netzwerkanfragen in Firefox DevTools, die anzeigen, welche als Tracking-Ressourcen mit einem kleinen Schildsymbol klassifiziert sind](network-requests.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Schutzliste

Wollen Sie wissen, wie es funktioniert, wenn eine Drittanbieter-Domain auf Ihrer Website als Tracker klassifiziert wird? Wir haben eine Voreinstellung hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zum Tracking-Schutz-URL-Classifier hinzuzufügen. So machen Sie es:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Ihnen eine Seite angezeigt wird, die Sie darauf hinweist, dass "Dies Ihre Garantie erlöschen könnte!", klicken Sie auf "Ich akzeptiere das Risiko!"
2. Suchen Sie nach dem Präferenznamen "urlclassifier.trackingAnnotationTable.testEntries".
3. Falls die Einstellung bereits existiert, bearbeiten Sie den Präferenzwert.
4. Wenn die Einstellung nicht existiert, klicken Sie auf "String" und dann auf "+" um eine neue Präferenz zu erstellen.
5. Geben Sie für den Präferenzwert die Ursprünge durch Kommas getrennt ein, die Sie als Tracker klassifizieren möchten. Z.B. "example.net,example.org".

> [!WARNING]
> Stellen Sie sicher, dass Sie diese Einträge entfernen, nachdem Sie das Testen abgeschlossen haben.

## FAQ

Diese Cookie-Richtlinie hat das Potenzial, zu Website-Ausfällen zu führen, wurde jedoch so konzipiert, dass sie gängige Drittanbieter-Integrationen weiterhin ermöglicht, während sie das Cross-Site-Tracking verhindert. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integration-Szenarien erwarten können.

### Wird diese Speicherzugriffspolitik verhindern, dass Anzeigen auf meiner Website angezeigt werden?

Nein – diese Funktion schränkt nur den Zugriff auf Cookies und Seitendaten ein, die dazu verwendet werden können, Benutzer über Websites hinweg zu verfolgen. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Anzeigen.

### Ich benutze einen Drittanbieter-Analysedienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Dies hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analysetools können ihre Drittanbieterspeicher nicht mehr verwenden, um Daten zu sammeln. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieter-Domain beschränkt sind, oder lokalen Speicher und andere unter ihrem Ursprung gespeicherte Site-Daten keine Zugriffsmöglichkeiten mehr auf diese Identifikatoren über andere Websites hinweg haben.

Wenn diese Services in den Hauptkontext der Seite eingebettet sind, können sie weiterhin First-Party-Cookies und Site-Speicher verwenden, um Benutzer über Seitenbesuche auf dieser bestimmten First-Party-Domain hinweg zu verfolgen.

### Ich verwende Drittanbieter-Dienste für soziale Anmeldungen, Like- und Share-Button-Integrationen. Werden meine Nutzer diese Dienste weiterhin nutzen können?

Dies hängt davon ab, wie die soziale Integration implementiert ist. Wir erwarten, dass viele der beliebten sozialen Integrationen weiterhin wie unter der aktuellen Firefox-Cookie-Richtlinie funktionieren, allerdings mit einigen kleinen Unterschieden in der Benutzererfahrung.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Benutzer eine neue First Party besucht. Daher kann der Nutzer in dem Service als abgemeldet erscheinen, obwohl er angemeldet ist, wenn er die Website des Anbieters direkt besucht. Abhängig von der Art der Integration kann es erforderlich sein, dass der Nutzer eine Aktion durchführen muss, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor der Anbieter Zugang zu seinen Cookies erhält. Zum Beispiel:

- Für soziale Anmeldungen kann der Nutzer auf einer First Party auf eine Anmeldeschaltfläche klicken müssen.
- Bei Like- oder Share-Buttons für soziale Netzwerke muss der Nutzer zuerst im abgemeldeten Zustand mit dem Button interagieren. Sobald dies geschehen ist, fordern viele soziale Inhaltsanbieter den Nutzer auf, sich anzumelden.

Nach diesen Interaktionen erhält der Anbieter Drittanbieterspeicherzugang, wenn sie den Nutzer auf eine Weise auffordern, die durch die oben beschriebenen Speicherzugriffsaktivierungsheuristiken erfasst wird. Diese Anbieter sollten so schnell wie möglich in Erwägung ziehen, ausdrücklich Speicherzugang durch die Storage Access API zu beantragen. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich verwende Drittanbieter-Pixel und andere Werkzeuge, um die Effektivität meiner Werbekampagnen zu messen. Werde ich die Konversionsrate meiner Anzeigen weiterhin messen können?

Dies hängt davon ab, wie der Drittanbieter das Messwerkzeug implementiert hat, aber im Allgemeinen wird die Anzeigenumwandlungsmessung schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer Social-Media-Website, die mehrmals von einem Benutzer gesehen, aber nie geklickt wurde. Dieser Benutzer besucht später Ihre Website, die ein Conversion-Tracking-Tag von derselben Social-Media-Website enthält. Dieser Typ der Conversion wird oft als "View-Through-Conversion" bezeichnet. Da die Social-Media-Website keinen Zugriff auf ihren Drittanbieterspeicher hat, wird sie den Benutzer nicht als denselben erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Conversion wird nicht erfasst. Wir erwarten, dass die meisten Methoden zur View-Through-Conversion-Erfassung, einschließlich derer, die von Display-Netzwerken angeboten werden, nicht mehr funktionieren.
2. Sie schalten eine Anzeige auf einem Display-Netzwerk oder einer Social-Media-Website, die von einem Benutzer geklickt wird. Dieser Benutzer landet auf Ihrer Website, die ein Conversion-Tracking-Tag von derselben Website enthält, die Ihre Anzeige geschaltet hat. Dieser Typ der Conversion wird oft als "Click-Through-Conversion" bezeichnet. Da die Social-Media-Website oder das Display-Netzwerk keinen Zugriff auf ihren Drittanbieterspeicher haben, wird sie den Benutzer nicht als denselben erkennen, der die Anzeigen auf ihrer Website gesehen hat, und die Conversion wird nicht erfasst. Wir erwarten, dass diese Version der Click-Through-Conversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer Social-Media-Website erscheint. Ein Benutzer klickt auf Ihre Anzeige und wird auf eine Landingpage weitergeleitet, die ein Conversion-Tracking-Tag vom Drittanbieternetzwerk enthält. Auf der Social-Media-Website annotiert das Netzwerk die URL der Anzeige-Landingpage mit einem Abfrageparameter, der anzeigt, dass der Besuch das Ergebnis eines Klicks auf eine Anzeige war. Auf Ihrer Website prüft das Tag des Display-Netzwerks die URL-Abfrageparameter und speichert alle Werbe-Tracking-Parameter im First-Party-Speicher. Wenn ein Benutzer später ein Conversion-Ereignis abschließt, überprüft das Tag des Netzwerks den First-Party-Speicher, um festzustellen, welcher Klick (oder welche Klicks) für den Besuch verantwortlich war. Wir erwarten, dass die Click-Through-Conversion, die auf diese Weise implementiert wurde, weiterhin funktioniert.
