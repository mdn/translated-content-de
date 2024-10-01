---
title: "Storage access policy: Block cookies from trackers"
slug: Web/Privacy/Storage_Access_Policy
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Firefox enthält eine neue Speicherzugriffsrichtlinie, die Cookies und andere Website-Daten von Drittanbieter-Tracking-Ressourcen blockiert. Diese Richtlinie wurde als Alternative zu den älteren Cookie-Richtlinien entwickelt, die seit vielen Jahren in Firefox verfügbar sind. Diese Richtlinie schützt vor Cross-Site-Tracking, während sie den Site-Abbruch minimiert, der mit herkömmlichem Cookie-Blocking verbunden ist. In diesem Artikel wird erklärt, wie die Richtlinie funktioniert und wie Sie sie testen können.

## Testen in Firefox

Diese Cookie-Richtlinie ist seit Version 63 in Firefox verfügbar. Diese Dokumentation beschreibt die Richtlinie, die wir an Firefox Release-Nutzer ausliefern möchten, aber möglicherweise nicht mit dem übereinstimmt, was in der aktuellen Release-Version von Firefox implementiert ist. Das liegt daran, dass wir neue Aspekte der Richtlinie dokumentieren, sobald sie in [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), unserem Pre-Release-Kanal, landen. Firefox Nightly kann auch experimentelle Funktionen enthalten, die wir noch nicht an Release-Nutzer ausliefern wollen; experimentelle Funktionen werden nicht in dieser Dokumentation enthalten sein, können jedoch dennoch die Funktionalität von als Tracker klassifizierten Domains beeinflussen.

Wir empfehlen Websites, mit [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) zu testen, da dies die neueste Version unserer Schutzmaßnahmen enthält. Wie oben beschrieben, beachten Sie, dass Nightly zusätzliche Schutzmechanismen enthalten kann, die möglicherweise entfernt oder geändert werden, bevor sie unsere Release-Nutzer erreichen. Wir werden diese Seite mit den neuesten Informationen aktualisieren, während wir unseren Schutz stärken.

Diese Schutzmaßnahmen sind in Nightly standardmäßig aktiviert. Die Cookie-Richtlinie kann in anderen Firefox-Versionen über die [Content Blocking-Einstellungen](https://support.mozilla.org/en-US/kb/content-blocking) aktiviert werden (diese Schritte variieren je nach Version; die verlinkte Dokumentation enthält ein Dropdown-Menü zur Auswahl der entsprechenden Firefox-Version).

### Melden Sie defekte Websites

Wenn Sie eine Website finden, die infolge dieser Änderung nicht funktioniert, melden Sie einen Fehler unter der Komponente für Tracking-Schutz innerhalb des Firefox-Produkts auf [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?assigned_to=nobody%40mozilla.org&blocked=1480137&bug_file_loc=http%3A%2F%2F&bug_ignored=0&bug_severity=normal&bug_status=NEW&cf_fx_iteration=---&cf_fx_points=---&cf_platform_rel=---&cf_status_firefox62=---&cf_status_firefox63=---&cf_status_firefox64=---&cf_status_firefox_esr60=---&cf_status_geckoview62=---&cf_tracking_firefox62=---&cf_tracking_firefox63=---&cf_tracking_firefox64=---&cf_tracking_firefox_esr60=---&cf_tracking_firefox_relnote=---&cf_tracking_geckoview62=---&component=Tracking%20Protection&contenttypemethod=list&contenttypeselection=text%2Fplain&defined_groups=1&flag_type-203=X&flag_type-37=X&flag_type-41=X&flag_type-5=X&flag_type-607=X&flag_type-721=X&flag_type-737=X&flag_type-748=X&flag_type-787=X&flag_type-799=X&flag_type-800=X&flag_type-803=X&flag_type-835=X&flag_type-846=X&flag_type-855=X&flag_type-864=X&flag_type-914=X&flag_type-916=X&flag_type-929=X&flag_type-930=X&flag_type-933=X&form_name=enter_bug&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Unspecified&priority=--&product=Firefox&rep_platform=Unspecified&target_milestone=---&version=unspecified). Alternativ können Sie defekte Websites direkt in Firefox melden, indem Sie im Abschnitt "Inhaltsblockierung" des [Kontrollzentrums](https://support.mozilla.org/en-US/kb/site-information-panel) auf "Problem melden" klicken (diese Verknüpfung ist möglicherweise nicht in allen Firefox-Versionen verfügbar).

## Erklärung des Tracking-Schutzes

Wie bestimmt Firefox, welche Ressourcen Tracking-Ressourcen sind?

Firefox verwendet die Tracking-Schutzliste, um zu bestimmen, welche Ressourcen Tracking-Ressourcen sind. Die Tracking-Schutzliste wird von [Disconnect gepflegt](https://github.com/disconnectme/disconnect-tracking-protection/issues). Wenn die Liste in Firefox angewendet wird, nehmen wir zwei wichtige Änderungen vor:

- Erstens verwenden wir nur die "Basic Protection"-Version der Liste, die [einige Kategorien von Trackern ausschließt](https://github.com/mozilla-services/shavar-prod-lists#disconnect-blacklistjson). In Zukunft könnten wir unseren Schutz erweitern, um die "Strict Protection"-Version der Liste zu verwenden.
- Zweitens verwendet Firefox eine zusätzliche "[Entity-Liste](https://github.com/mozilla-services/shavar-prod-lists/blob/master/disconnect-entitylist.json)", die verhindert, dass [Domains als Tracker klassifiziert werden, wenn sie auf einer Top-Level-Site geladen werden, die demselben Unternehmen gehört](https://github.com/mozilla-services/shavar-prod-lists#disconnect-entitylistjson).

Firefox verwendet den eingebauten URL-Classifier für den [Tracking-Schutz](https://support.mozilla.org/en-US/kb/what-happened-tracking-protection), um zu bestimmen, welche Ressourcen mit der Tracking-Schutzliste übereinstimmen. Domains werden gemäß der [SafeBrowsing v4-Spezifikation](https://developers.google.com/safe-browsing/v4/urls-hashing#suffixprefix-expressions) mit der Liste abgeglichen. Konkret überprüfen wir den genauen Hostnamen der Ressource in der Liste sowie die letzten vier Hostnamen, die gebildet werden, indem die letzten fünf Komponenten abgerufen und sukzessive die führende Komponente entfernt wird. Betrachten Sie die folgenden Beispiele:

| Hostname in der Liste | Hostname der Ressource | Übereinstimmung |
| --------------------- | ---------------------- | --------------- |
| `example.com`         | `example.com`          | Ja              |
| `example.com`         | `a.b.example.com`      | Ja              |
| `blah.example.com`    | `example.com`          | Nein            |
| `a.b.example.com`     | `c.d.example.com`      | Nein            |
| `blah.example.com`    | `foo.blah.example.com` | Ja              |

## Was blockiert die Speicherzugriffsrichtlinie?

Die Speicherzugriffsrichtlinie blockiert Ressourcen, die als Tracker identifiziert wurden, den Zugriff auf Drittanbieter-Cookies und andere Websitedaten, die im Drittanbieterkontext geladen werden. Dies verhindert, dass diese Ressourcen Tracking-Identifikatoren abrufen und sie verwenden, um Benutzer bei Besuchen auf mehreren Erstanbieter-Websites zu identifizieren. Insbesondere führt Firefox die folgenden Beschränkungen ein:

Cookies:

- Anforderungsheader `Cookie` blockieren und Antwortheader `Set-Cookie` ignorieren.
- Einen leeren String für Aufrufe von `Document.cookie` zurückgeben und Anfragen, Cookies über `Document.cookie` zu setzen, ignorieren.

DOM-Speicher:

- `localStorage`: Lese- und Schreibversuche werfen eine `SecurityError`-Ausnahme. Vor Firefox 70: `Window.localStorage` ist `null`. Versuche, dieses Objekt zu lesen und zu schreiben, führen daher zu einer `TypeError`-Ausnahme.
- `sessionStorage`: Lese- und Schreibversuche sind erlaubt.
- `IndexedDB`: Der Versuch, auf das IndexedDB-Fabrikobjekt zuzugreifen, wirft eine `SecurityError`-Ausnahme.

Nachrichtenübermittlung und Arbeiter:

- `Broadcast Channel`: Versuche, einen neuen `BroadcastChannel` zu erstellen, führen zu einer `SecurityError`-Ausnahme.
- `Shared Worker`: Versuche, einen neuen `SharedWorker` zu erstellen, führen zu einer `SecurityError`-Ausnahme.
- `Service Worker`: Versuche, einen neuen `ServiceWorker` zu erstellen, führen zu einer `SecurityError`-Ausnahme.

DOM-Cache:

- Aufrufe von `CacheStorage` werden immer mit einem `SecurityError` abgelehnt.

Browser-Caches:

- Der HTTP-Cache, der Bild-Cache und der Alt-Svc-Cache sind alle für Tracking-Ressourcen partitioniert, sodass jeder Top-Level-Ursprung eine separate Partition hat und Tracking-Ressourcen auf unterschiedlichen Top-Level-Ursprüngen voneinander getrennt gecacht werden.

Netzwerkverbindungen:

- TLS-Sitzungen werden nicht mit einem Sitzungsticket wieder aufgenommen, wenn eine HTTPS-Verbindung zu einer eingebetteten Drittanbieter-Ressource hergestellt wird, die als Tracker klassifiziert ist.
- Die Wiederverwendung von HTTP-Verbindungen durch Domains, die als Tracker klassifiziert sind, ist auf Anforderungen beschränkt, die unter demselben Top-Level-Ursprung auftreten. Zum Beispiel wird eine Anfrage nach Inhalten von `tracker.example` bei `news.example` keine HTTP-Verbindung mit einer Anfrage nach Inhalten von `tracker.example` bei `shopping.example` wiederverwenden oder mit Anfragen, die auftreten, wenn `tracker.example` direkt besucht wird (d.h. als Erstanbieter).

HTTP-Referrer

- Die standardmäßige Referrer-Policy für Drittanbieter-Ressourcen, die als Tracker klassifiziert sind, ist auf `strict-origin-when-cross-origin` gesetzt.

### Was blockiert die Richtlinie nicht?

1. Diese Richtlinie beschränkt derzeit nicht den Drittanbieter-Zugriff auf Speicher für Ressourcen, die nicht als Tracking-Ressourcen klassifiziert sind. Möglicherweise werden wir in Zukunft zusätzliche Beschränkungen für den Drittanbieter-Speicherzugriff einführen.
2. Die Beschränkungen der Richtlinie verhindern nicht, dass Drittanbieterskripte, die als Tracking-Ressourcen klassifiziert sind, auf Speicher im Hauptkontext der Seite zugreifen. Diese Skripte können weiterhin den Speicher verwenden, der auf den Top-Level-Ursprung beschränkt ist.
3. Ursprünge, die als Tracker klassifiziert sind, haben Zugriff auf ihren eigenen Speicher, wenn sie in einem Erstanbieterkontext geladen werden.
4. Cross-Origin-Ressourcen, die vom selben eTLD+1 wie der Top-Level-Kontext geladen werden, haben weiterhin Zugriff auf ihren Speicher.
5. Ursprünge, die normalerweise als Tracker klassifiziert sind, werden [nicht blockiert, wenn der Top-Level-Seiten-Ursprung als von derselben Organisation wie diese Ursprünge bestimmt wird](https://github.com/mozilla-services/shavar-prod-lists#entity-list).

## Speicherzugriffsgewährung

Um die Web-Kompatibilität zu verbessern und Drittanbieter-Integrationen, die Speichzugriff erfordern, zu erlauben, gewährt Firefox Speicherzugriff, der auf den Erstanbieter für einen bestimmten Drittanbieterursprung beschränkt ist, wie in diesem Abschnitt beschrieben. Derzeit enthält Firefox einige Heuristiken zur Web-Kompatibilität, die den Speicherzugriff auf Drittanbieter-Ressourcen gewähren, die als Tracker klassifiziert werden, wenn ein Benutzer mit diesen Drittanbietern interagiert. Wir machen dies, wenn wir erwarten, dass das Nichtgewähren von Zugriff zu einem Seitenabbruch führen würde. Wir unterstützen auch eine erste Implementierung der Storage Access API, bei der eingebettete `iframes` den Speicherzugriff anfordern können, indem sie `Document.requestStorageAccess()` aufrufen. Obwohl beide Ansätze dasselbe Maß an Speicherzugriff bieten, empfehlen wir Drittentwicklern, auf die Verwendung der Storage Access API umzusteigen, um ihren Zugriff auf Speicher zu gewährleisten.

### Automatischer Speicherzugriff bei Interaktion

Um die Web-Kompatibilität zu verbessern, enthält Firefox derzeit einige Heuristiken, die automatisch den Speicherzugriff für Drittanbieter gewähren, die eine Benutzerinteraktion erhalten. Diese Heuristiken sollen einige Drittanbieter-Integrationen erlauben, die im Web weit verbreitet sind, ihre Funktionalität weiterhin auszuführen. Sie sind als Übergangslösung gedacht und werden in einer zukünftigen Version von Firefox entfernt. Sie sollten sich bei der aktuellen und zukünftigen Webentwicklung nicht auf sie verlassen.

Drittanbieter-Speicherzugriff kann Ressourcen gewährt werden, die als Tracking-Ressourcen klassifiziert sind, wenn eine Benutzeraktion ein Pop-up-Fenster auslöst, das Zugangsrechte zum ursprünglichen Dokument hat. Wenn dies geschieht, gibt es drei mögliche Wege, wie einem Drittanbieterursprung Zugriff gewährt werden kann:

- Der Ursprung der Ressource, die initially im Pop-up-Fenster geladen wird, erhält Speicherzugriff auf das ursprüngliche Dokument, wenn dieser Ursprung innerhalb der letzten 30 Tage als Erstanbieter-Benutzerinteraktion erhalten hat.
- Nachdem die initiale Ressource im Pop-up-Fenster geladen wurde, kann das Fenster eine Reihe von Weiterleitungen zu anderen Hosts durchlaufen. Wenn ein Benutzer nach einer Weiterleitung mit dem Pop-up-Fenster interagiert, erhält der Ursprung des im Pop-up geladenen Inhalts Speicherzugriff auf dem ursprünglichen Dokument.
- Wenn es eine Top-Level-Weiterleitung von einem Tracking-Ursprung zu einem Nicht-Tracking-Ursprung gibt, erhält der Tracking-Ursprung kurzlebigen Speicherzugriff auf dem Nicht-Tracking-Ursprung und auf allen anderen Nicht-Tracking-Ursprüngen, die weiter unten in der Weiterleitungskette auftreten (d.h. wenn das Laden weiter geleitet wird). Der Tracking-Ursprung muss innerhalb der letzten 30 Tage eine Benutzerinteraktion als Erstanbieter erhalten haben, und die Berechtigung für den Speicherzugriff läuft nach 15 Minuten ab.

### Umfang des Speicherzugriffs

Wenn der Speicherzugriff gewährt wird, ist er auf die Seite des ursprünglichen Dokuments oder Subdomains dieses Ursprungs beschränkt. Ein Zugriff, der auf einer Subdomain eines Ursprungs gewährt wird, erstreckt sich auf den obersten Ursprung. Zum Beispiel, wenn eine Ressource von `tracker.example` auf `foo.example.com` Speicherzugriff erhält, kann `tracker.example` seine Cookies auf `bar.foo.example.com` und auf `example.com` zugreifen.

Wenn `tracker.example` Speicherzugriff auf `example.com` gewährt wird, erhalten alle von `tracker.example` geladenen Ressourcen auf einem beliebigen Top-Level-Dokument, das von `example.com` geladen wird, sofort Speicherzugriff. Dies schließt alle in der Hauptansicht der Seite geladenen Ressourcen, eingebettete `iframes` und in eingebetteten `iframes` geladene Ressourcen ein. Der Speicherzugriff wird nicht auf andere auf `example.com` geladene Ressourcen ausgedehnt (z.B. `other-tracker.example`) noch auf andere Erstanbieter, auf denen `tracker.example` eingebettet ist (z.B. `example.org`).

Speicherzugriffsgewährungen erstrecken sich auf die erste Verschachtelungsebene, aber nicht weiter. Das bedeutet, dass `iframes`, die im Hauptkontext der Seite eingebettet sind und von einer als Tracker klassifizierten Domain geladen werden, vollständigen Zugriff auf alle über JavaScript zugänglichen Speicherorte haben. Ähnlich haben Anfragen für in `iframes` geladene Ressourcen, die im Hauptkontext der Seite eingebettet sind, Zugriff auf HTTP-Cookies. Weitere verschachtelte Kontexte, einschließlich solcher vom als Tracker klassifizierten Ursprung, erhalten keinen Speicherzugriff.

Betrachten Sie die folgenden Einbettungsszenarien auf einer Top-Level-Seite, die von `example.com` geladen wird, auf der `tracker.example` Speicherzugriff gewährt wurde.

| Einbettung                                                                                                                                              | Speicherzugriff auf Ressourcen von `tracker.example` |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Ein Bild wird von `tracker.example` geladen und im Hauptkontext von `example.com` eingebettet.                                                          | HTTP: Ja JS: N/A                                     |
| `example.com` bettet ein `iframe` von `example.org` ein. Dieses `iframe` lädt daraufhin ein Bild von `tracker.example`.                                 | HTTP: Ja JS: N/A                                     |
| `example.com` bettet ein `iframe` von `example.org` ein. Dieses `iframe` bettet daraufhin ein `iframe` von `tracker.example` ein.                       | HTTP: Ja JS: Nein                                    |
| `example.com` bettet ein `iframe` von `tracker.example` ein.                                                                                            | HTTP: Ja JS: Ja                                      |
| `example.com` bettet ein `iframe` von `example.com` (gleicher Ursprung) ein. Das verschachtelte `iframe` bettet ein `iframe` von `tracker.example` ein. | HTTP: Ja JS: Nein                                    |

### Ablauf des Speicherzugriffs

Die Speicherzugriffsgewährung läuft nach 30 Tagen ab. Als Tracking-Ressourcen klassifizierte Domains können Drittanbieter-Speicherzugriff auf mehreren Erstanbietern gewährt werden, und die Speichererlaubnis für jede Partei läuft unabhängig voneinander ab. Die obigen Heuristiken dienen auch dazu, die Lebensdauer einer Drittanbieter-Speicherberechtigung auf Ursprüngen, die bereits Zugriff erhalten haben, zu verlängern. Jedes Mal, wenn die Heuristik aktiviert wird oder ein erfolgreicher Aufruf der Storage Access API erfolgt, wird der bereits bestehende Speicherzugriffsablauf um 30 Tage verlängert, beginnend ab dem Zeitpunkt, zu dem der vorherige Zugriff gewährt wurde.

Bitte beachten Sie, dass wir in Zukunft Änderungen daran erwarten, wie lange der Speicherzugriff gültig bleibt. Wie bereits erwähnt, wird die Verwendung der Storage Access API sicherstellen, dass Sie als Drittanbieter den Zugriff auf Speicher auch in Zukunft erhalten.

## Debugging

Wir ermutigen Website-Betreiber, ihre Seiten zu testen, insbesondere solche, die auf Drittanbieter-Content-Integrationen angewiesen sind. Wir haben mehrere neue Funktionen zu Firefox hinzugefügt, um das Testen zu erleichtern.

### Benachrichtigungen in Entwickler-Tools

Der Netzwerk-Monitor in den Firefox Developer Tools enthält jetzt einen Indikator für alle Ressourcenanfragen, die als Tracking-Ressourcen klassifiziert wurden. Dieser Indikator wird als Schildsymbol in der Domain-Spalte angezeigt. Im unten gezeigten Beispielbild wird `trackertest.org` als Tracking-Ressource klassifiziert, während die Anfrage an example.com dies nicht ist.

![Netzwerkanfragen in Firefox Entwickler-Tools, die anzeigen, welche als Tracking-Ressourcen mit einem kleinen Schildsymbol klassifiziert sind](screen_shot_2018-09-21_at_10.34.22_am.png)

### Hinzufügen benutzerdefinierter Domains zur Tracking-Schutzliste

Neugierig, wie es wäre, wenn eine Drittanbieterdomain auf Ihrer Website als Tracker klassifiziert würde? Wir haben eine Präferenz hinzugefügt, die es Ihnen ermöglicht, benutzerdefinierte Domains zum URL-Classifier des Tracking-Schutzes hinzuzufügen. Gehen Sie dazu folgendermaßen vor:

1. Geben Sie `about:config` in Ihre Adressleiste ein. Wenn Sie auf einer Seite gewarnt werden, dass \"Dies Ihre Garantie erlöschen könnte!\", klicken Sie auf \"Ich akzeptiere das Risiko!\"
2. Suchen Sie nach dem Präferenznamen \"urlclassifier.trackingAnnotationTable.testEntries\".
3. Wenn die Präferenz bereits existiert, bearbeiten Sie den Präferenzwert.
4. Wenn die Präferenz nicht existiert, klicken Sie auf \"String\" und dann auf \"+\", um eine neue Präferenz zu erstellen.
5. Geben Sie für den Präferenzwert die durch Komma getrennten Ursprünge ein, die Sie als Tracker klassifizieren möchten. Z.B. \"example.net,example.org\".

> [!WARNING]
> Entfernen Sie diese Einträge unbedingt, nachdem Sie mit dem Testen fertig sind.

## FAQ

Diese Cookie-Richtlinie birgt das Potenzial, Seitenabbrüche zu verursachen, wurde jedoch so gestaltet, dass häufige Drittanbieter-Integrationen weiterhin funktionieren können, während Cross-Site-Tracking verhindert wird. In diesem Abschnitt beschreiben wir die Funktionalität, die Sie in verschiedenen Integrationsszenarien erwarten können.

### Wird diese Speicherzugriffsrichtlinie verhindern, dass Anzeigen auf meiner Website angezeigt werden?

Nein — diese Funktion beschränkt nur den Zugriff auf Cookies und Websitedaten, die verwendet werden können, um Benutzer über Websites hinweg zu verfolgen. Das Blockieren von Tracking-Identifikatoren verhindert nicht die Anzeige von Anzeigen.

### Ich benutze einen Drittanbieter-Analysedienst, der als Tracker klassifiziert ist. Werde ich weiterhin Analysedaten erhalten?

Das hängt davon ab, wie der Drittanbieter-Analysedienst implementiert ist. Drittanbieter-Analyseanbieter werden nicht mehr in der Lage sein, ihren Drittanbieter-Speicher zur Datenerfassung zu nutzen. Das bedeutet, dass Anbieter, die Cookies verwenden, die auf ihre Drittanbieter-Domain beschränkt sind, oder lokale Speicher und andere unter ihrem Ursprung gespeicherte Websitedaten, keinen Zugriff mehr auf diese Identifikatoren über andere Websites hinweg haben werden.

Wenn diese Dienste im Hauptkontext der Seite eingebettet werden, können sie weiterhin Erstanbieter-Cookies und Websitedaten verwenden, um Benutzer über Seitenbesuche auf dieser spezifischen Erstanbieter-Domain hinweg zu verfolgen.

### Ich benutze Drittanbieter-Dienste für soziale Logins, Like- und Share-Button-Integration. Werden meine Nutzer diese Dienste weiterhin nutzen können?

Das hängt von der Implementierung der sozialen Integration ab. Wir erwarten, dass viele der beliebten sozialen Integrationen weiterhin so funktionieren wie unter der aktuellen Cookie-Richtlinie von Firefox, mit einigen kleinen Unterschieden in der Benutzererfahrung.

Ein sozialer Inhaltsanbieter, der als Tracker klassifiziert ist, hat keinen Zugriff auf seine Drittanbieter-Cookies, wenn der Nutzer zum ersten Mal eine neue Erstanbieter besucht. Daher kann der Nutzer trotz Login auf der Website des Anbieters beim direkten Besuch als nicht eingeloggt erscheinen. Je nach Art der Integration muss der Nutzer möglicherweise zuerst eine Aktion ausführen, um mit dem sozialen Inhaltsanbieter zu interagieren, bevor der Anbieter Zugriff auf seine Cookies erhält. Zum Beispiel:

- Bei sozialen Logins muss der Nutzer möglicherweise auf einen Login-Button beim Erstanbieter klicken.
- Bei Like- oder Share-Buttons muss der Nutzer möglicherweise zuerst in einem nicht eingeloggedem Zustand mit dem Button interagieren. Sobald er dies tut, werden viele soziale Inhaltsanbieter ihn aufforder дәрается, sich einzuloggen.

Nach diesen Interaktionen erhält der Anbieter Drittanbieter-Speicherzugriff, wenn er den Nutzer auf eine Art und Weise auffordert, die von den oben beschriebenen Speicherzugriffsaktivierungsheuristiken erfasst wird. Diese Anbieter sollten in Betracht ziehen, so bald wie möglich explizit Speicherzugriff durch die Storage Access API zu beantragen. Eine [erste Implementierung dieser API](https://bugzil.la/1469714) ist derzeit in Nightly verfügbar.

### Ich benutze Drittanbieter-Pixel und andere Tools, um die Effektivität meiner Werbekampagnen zu messen. Werde ich die Konversionsrate meiner Anzeigen weiterhin messen können?

Das hängt davon ab, wie der Drittanbieter das Messwerkzeug implementiert hat, aber generell wird die Messung der Anzeigenkonversion schwieriger. Betrachten Sie die folgenden Beispiele:

1. Sie schalten eine Anzeige auf einer sozialen Medien-Website, die einem Nutzer mehrmals angezeigt wird, aber nie angeklickt wird. Dieser Nutzer besucht später Ihre Website, die ein Konversionstracking-Tag von derselben sozialen Medien-Website enthält. Diese Art der Konversion wird oft als \"View-Through-Konversion\" bezeichnet. Da die soziale Medien-Website keinen Zugriff auf ihren Drittanbieter-Speicher hat, erkennt sie den Nutzer nicht als denselben Nutzer, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht nachverfolgt. Wir erwarten, dass die meisten Techniken zur View-Through-Konversionsverfolgung, einschließlich der von Anzeigen-Netzwerken angebotenen, nicht mehr funktionieren.
2. Sie schalten eine Anzeige auf einem Anzeigen-Netzwerk oder einer sozialen Medien-Website, auf die ein Nutzer klickt. Dieser Nutzer landet auf Ihrer Website, die ein Konversionstracking-Tag von derselben Website enthält, auf der Ihre Anzeige angezeigt wurde. Diese Art der Konversion wird oft als \"Click-Through-Konversion\" bezeichnet. Da die soziale Medien-Website oder das Anzeigen-Netzwerk keinen Zugriff auf ihren Drittanbieter-Speicher hat, erkennen sie den Nutzer nicht als denselben Nutzer, der die Anzeigen auf ihrer Website gesehen hat, und die Konversion wird nicht nachverfolgt. Wir erwarten, dass diese Version der Click-Through-Konversion nicht mehr funktioniert.
3. Sie schalten eine Anzeige, die auf einer sozialen Medien-Website erscheint. Ein Nutzer klickt auf Ihre Anzeige und wird zu einer Landingpage weitergeleitet, die einen Konversionstracking-Tag von dem Drittanbieter-Netzwerk enthält. Auf der sozialen Medien-Website annotiert das Netzwerk die URL der Anzeigen-Landingpage mit einem Abfrageparameter, der signalisiert, dass der Besuch auf einen Klick auf eine Anzeige zurückzuführen ist. Auf Ihrer Website überprüft das Tag des Anzeigennetzwerks die URL-Abfrageparameter und speichert etwaige Werbetracking-Parameter im Erstanbieter-Speicher. Wenn ein Nutzer später ein Konversionsevent abschließt, überprüft das Tag des Netzwerks den Erstanbieter-Speicher, um festzustellen, welcher Klick (oder Klicks) für den Besuch verantwortlich war. Wir erwarten, dass Click-Through-Konversion, die auf diese Weise implementiert wird, weiterhin funktionieren wird.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
