---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit, dass Cross-Site-Inhalte, die in einem Drittanbieter-Kontext geladen werden (z. B. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) erhalten, auf die sie typischerweise nur in einem Erstanbieter-Kontext Zugriff hätten (d.h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern). Es gibt legitime Anwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir auch mit diesen Standardeinschränkungen weiterhin ermöglichen möchten. Beispiele umfassen Einmalanmeldung (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Ansichtspräferenzen auf verschiedenen Websites.

Die API bietet Methoden, die es eingebetteten Ressourcen ermöglichen, zu überprüfen, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und falls nicht, Zugriff vom Benutzeragenten anzufordern.

## Konzepte und Nutzung

Browsers implementieren verschiedene Funktionen und Richtlinien zum Speicherzugriff, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen vom Zuweisen eines einzigartigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis zum vollständigen Blockieren des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um Funktionen und Richtlinien zur Blockierung von Drittanbieter-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf den Zustand, den sie hätten, wenn sie in einem Erstanbieter-Kontext geladen werden. Dies geschieht aus guten Absichten – Browser-Anbieter möchten Maßnahmen ergreifen, um die Privatsphäre und Sicherheit ihrer Benutzer besser zu schützen. Beispiele sind, dass sie weniger anfällig für Tracking ihrer Aktivitäten über verschiedene Websites hinweg und weniger anfällig für Exploits wie Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) sind.

Es gibt jedoch legitime Zwecke für eingebettete Cross-Site-Inhalte beim Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand, die die oben genannten Funktionen und Richtlinien möglicherweise beeinträchtigen. Angenommen, Sie haben eine Reihe von verschiedenen Websites, die Zugang zu verschiedenen Produkten bieten – `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen in verschiedene Länderdomains für Lokalisierungszwecke aufteilen – `example.com`, `example.ua`, `example.br` usw. – oder auf andere Weise.

Sie könnten begleitende Dienstleistungsseiten haben, die Komponenten in all den anderen Seiten eingebettet haben, zum Beispiel, um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstleistungsseiten möchten ihren Zustand mit den Seiten teilen, in die sie eingebettet sind, über Cookies. Sie können keine Erstanbieter-Cookies teilen, weil sie auf verschiedenen Domains sind, und Drittanbieter-Cookies werden in Browsern, die sie blockieren, nicht mehr funktionieren.

In solchen Situationen ermutigen Website-Besitzer Benutzer oft, ihre Website als Ausnahme hinzuzufügen oder die Richtlinien zum Blockieren von Drittanbieter-Cookies vollständig zu deaktivieren. Benutzer, die weiterhin mit ihrem Inhalt interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern und möglicherweise über alle Websites hinweg.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-Site-Inhalte können uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand auf einer Frame-für-Frame-Basis über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.
Es kann auch überprüfen, ob es bereits Zugriff hat, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [Headers zum Speicherzugriff](#headers_zum_speicherzugriff) sind eine HTTP-Erweiterung zur API, die einen effizienteren Workflow für die Speicher-API ermöglicht und auch zum Aktivieren einer zuvor erteilten Speicherzugriffsberechtigung für passive Ressourcen, wie Bilder, verwendet werden kann.

### Unpartitionierte versus partitionierte Cookies

Die Storage Access API ist nur erforderlich, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu gewähren!
Unpartitionierte Cookies sind solche, bei denen alle Cookies, die auf der gleichen Site gesetzt sind, im gleichen Cookie-Jar gespeichert werden – die traditionelle Methode seit den frühen Tagen des Webs.
Da das Risiko besteht, dass Daten, die für eine Site bestimmt sind, anderen Sites ausgesetzt werden, blockieren Browser in der Regel das Senden von unpartitionierten Drittanbieter-Cookies in Anfragen und erlauben keinen Zugriff auf sie in eingebetteten Kontexten.

Dies steht im Kontrast zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Site einen einzigartigen Cookie-Speicherplatz erhalten, der von denen anderer Sites isoliert ist.
Da es kein Datenschutzrisiko gibt, weil es nicht möglich ist, Benutzer über Sites hinweg über partitionierte Cookies zu verfolgen, senden Browser partitionierte Cookies in Anfragen und machen sie für eingebettete Ressourcen verfügbar.
Beachten Sie jedoch, dass, da die Cookies nicht zwischen den Sites geteilt werden, sie auch nicht automatisch zwischen den Sites synchronisiert werden.
Browser haben verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Wie es funktioniert

Drittanbieter-Inhalte, die in einem {{htmlelement("iframe")}} eingebettet sind und auf Cookies oder andere unpartitionierte Zustände zugreifen müssen, können den Zugriff mit der Storage Access API wie folgt anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob die eingebetteten Inhalte bereits Zugriff auf unpartitionierte Cookies haben.
2. Falls nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die Berechtigung `storage-access` anzufordern.

   Je nach Browser wird der Benutzer auf unterschiedliche Weise gefragt, ob er dem anfragenden Embed die Berechtigung erteilen möchte.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur dann auf, nachdem ein Ursprung auf mehr als einer bestimmten Anzahl von Sites Speicherzugriff angefordert hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
     Es wird jedoch automatisch Zugriff gewähren und die Eingabeaufforderungen überspringen, wenn das eingebettete und einbettende Site Teil desselben [verwandten Webseiten-Sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) sind.

3. Die Erlaubnis wird gewährt oder abgelehnt basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt – siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen und [Browserspezifische Abweichungen](#browserspezifische_abweichungen) für einige browserspezifische Sicherheitsanforderungen.
   Die {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code auszuführen, um Erfolgs- und Fehlerszenarien zu behandeln.

   Sobald die Erlaubnis erteilt wurde, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<Top-Level-Site, eingebettete Site>` gespeichert.
   Zum Beispiel, wenn die einbettende Site `embedder.com` ist und das Embed `locator.example.com`, wäre der Schlüssel `<embedder.com, example.com>`.

   Das bedeutet, dass die Erlaubnis für unpartitionierten Cookie-Zugriff auf jede Seite der `example.com`-Site oder eines ihrer Subdomains erteilt wird, wenn diese in irgendeiner Seite auf der `embedder.com`-Site eingebettet ist.
   Zum Beispiel können `docs.example.com`, `profile.example.com`, nun `requestStorageAccess()` aufrufen, und das Versprechen wird automatisch erfüllt.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass embeds, die innerhalb derselben Site aber aus verschiedenen Ursprüngen stammen, nicht zum Berechtigungsschlüssel passten und den gesamten Prozess separat durchlaufen mussten.

4. Die Erlaubnis muss für jeden _Kontext_ explizit aktiviert werden.

   Wenn ein Embed Erlaubnis erhalten hat, wird diese Erlaubnis auch für den aktuellen Kontext aktiviert.
   Andere Kontexte wie neue Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}}-Elementen auf der Seite haben jedoch standardmäßig ihren Drittanbieter-Cookie-Zugriff blockiert.
   Das bedeutet, dass selbst wenn die Erlaubnis erteilt wurde, die Seite geladen und `requestStorageAccess()` aufgerufen werden muss, um die Erlaubnis zu aktivieren.
   Wenn die Erlaubnis bereits erteilt wurde, erfordert ein Aufruf von `requestStorageAccess()` keine zeitweilige Aktivierung und das Versprechen wird automatisch erfüllt.

   Die einzige Ausnahme von dem "standardmäßig blockierten" Verhalten ist, wenn ein Embed eine gleichmäßige Ursprungsnavigation durchführt, um sich nach der Erteilung der Erlaubnis oder der Aktivierung einer Erlaubnis selbst neu zu laden.
   In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   Dies ermöglicht es der eingebetteten Ressource, sich selbst neu zu laden und auf ihre Cookies zuzugreifen.

   > [!NOTE]
   > In älteren Spezifikationsversionen war der Zugriff _seitenbezogen_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed Drittanbieter-Cookie-Zugriff über `requestStorageAccess()` erhalten hat, hätten alle anderen Embeds derselben Site automatisch Zugriff bekommen.
   > Dies war aus Sicherheitsperspektive unerwünschtes Verhalten – zum Beispiel, wenn `shop.example.com` `locator.users.com` eingebettet hat, um Benutzern die Verwendung ihrer Standortdaten beim Einkaufen zu ermöglichen, und `locator.users.com` `requestStorageAccess()` aufgerufen hat, könnten `shop.example.com` und alle anderen von ihm eingebetteten Sites auf seine Cookies zugreifen, aber auch auf Cookies von `private.users.com`, das nicht dafür bestimmt ist, eingebettet zu werden. [Lesen Sie mehr über die Gründe](https://github.com/privacycg/storage-access/issues/113) für diese Änderung.

5. Nachdem ein Embed die Berechtigung `storage-access` aktiviert hat, sollte es sich selbst neu laden.
   Der Browser fordert die Ressource erneut an, diesmal mit eingeschlossenen Drittanbieter-Cookies, und stellt sie der eingebetteten Ressource zur Verfügung, sobald sie geladen ist. Die Cross-Origin-Anfragen des Embeds folgen der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy), daher werden Drittanbieter-Cookies nur mit Anfragen an den genauen Ursprung der eingebetteten Ressource gesendet. Andere Ursprünge innerhalb derselben Website, die auf Drittanbieter-Cookies zugreifen möchten, müssen die Berechtigung `storage-access` separat aktivieren.

### Headers zum Speicherzugriff

Die API erfordert, dass eine Ressource `requestStorageAccess()` für jeden neuen Kontext aufrufen muss, um sich für die Aktivierung der Berechtigung `storage-access` anzumelden, die bereits erteilt worden sein muss.
Das bedeutet im Umkehrschluss, dass die eingebettete Ressource zuerst ohne Cookies angefordert und geladen werden muss, damit sie die Methode aufrufen kann.

Die Headers zum Speicherzugriff ermöglichen einen Workflow, bei dem der Server anfordern kann, dass die Berechtigung für den Kontext aktiviert wird, wodurch eine unnötige zusätzliche Ladung der eingebetteten Ressource vermieden wird, wenn die Berechtigung bereits erteilt wurde.
Die Ressource muss dennoch geladen werden, um die Erlaubnis das erste Mal anzufordern.

Es gibt zwei Header:

- Der Browser fügt den {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header zu Anfragen hinzu, um den Speicherzugriffsstatus des aktuellen Abrufkontextes anzuzeigen, beispielsweise ob die Erlaubnis aktiviert, erteilt oder nicht erteilt wurde.
- Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser aufzufordern, die Erlaubnis für den Kontext zu aktivieren und die Anfrage mit Cookies erneut zu versuchen (dadurch muss die Ressource nicht geladen werden, um `requestStorageAccess()` aufzurufen, um das Gleiche zu erreichen), oder die Erlaubnis zu aktivieren und die zurückgegebene Ressource zu laden.

Die Headers zum Speicherzugriff können auch verwendet werden, um die Berechtigung für passive Ressourcen, wie Bilder, zu aktivieren, vorausgesetzt der Kontext hat bereits die Erlaubnis erteilt bekommen.
Dies könnte beispielsweise genutzt werden, um verschiedene Bilder für verschiedene Benutzer, demografische Gruppen oder Regionen bereitzustellen.

Die Workflows werden im Abschnitt [Sequenzen der Headers zum Speicherzugriff](#sequenzen_der_headers_zum_speicherzugriff) gezeigt.

### Anforderungs-/Antwortfluss

#### JavaScript-Sequenzen

Betrachten Sie das Beispiel einer Bibliothek, die in einem {{htmlelement("iframe")}} geladen ist, das über eine Reihe von Sites geteilt werden muss und auf in unpartitionierten Cookies gespeicherte Anmeldeinformationen angewiesen ist.

Zuerst schauen wir uns den Fall an, in dem die Berechtigung nicht gewährt wurde:

1. Der Browser fordert die Ressource ohne das Einschließen von Drittanbieter-Cookies an.
2. Der Server antwortet mit einer "Fallback"-Version des Inhalts, die nicht auf Anmeldeinformationen angewiesen ist und, wenn geladen, keinen Zugriff auf seine Cookies hat.
   - Einmal geladen, ruft die Ressource `requestStorageAccess()` mit transienter Aktivierung auf, um die Berechtigung `storage-access` anzufordern und zu aktivieren.
   - Wenn die Erlaubnis erteilt wird, lädt die Ressource sich dann selbst neu.

3. Der Browser fordert die Ressource erneut an, diesmal mit eingeschlossenen Drittanbieter-Cookies.
4. Der Server antwortet mit einer "anmeldeinformationsbasierten" Version der Ressource.

Der Browser lädt die Ressource, die Zugriff auf ihre eigenen Cookies hat, weil sie eine aktivierte Berechtigung `storage-access` hat.

![Ablauf der Storage API - ohne Berechtigung `storage-access`](storage_api_no_permission.png)

Nun betrachten wir den Fall, in dem die Berechtigung erteilt, aber nicht aktiviert wurde.
Dies würde passieren, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite innerhalb derselben Site aus einzubetten.

Der Workflow ist fast genau derselbe, da die Ressource das erste Mal ohne Cookies geladen werden muss und dann `requestStorageAccess()` aufrufen muss, um die Erlaubnis für den Kontext zu aktivieren.
In diesem Fall benötigt es jedoch keine zeitweilige Aktivierung und kann beim Laden ausgeführt werden.

![Ablauf der Storage API - Aktivieren der Berechtigung `storage-access`](storage_api_permission.png)

#### Sequenzen der Headers zum Speicherzugriff

Die Headers zum Speicherzugriff ermöglichen einen verbesserten Workflow, der es dem Server ermöglicht, den Browser aufzufordern, eine erteilte Erlaubnis zu aktivieren und die Anforderung mit eingeschlossenen Cookies erneut zu versuchen.
Dies vermeidet die Notwendigkeit, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Benutzer bereits die Erlaubnis erteilt hat.

> [!NOTE]
> Diese Headers bieten keinen Mechanismus, um die Berechtigung `storage-access` zunächst zu erteilen.
> Die Erlaubnis muss immer von der eingebetteten Ressource durch Aufrufen von `requestStorageAccess()` mit transienter Aktivierung angefordert werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header wird zu Anfragen hinzugefügt, um den Speicherzugriffsstatus des aktuellen Abrufkontextes anzuzeigen, z. B. ob die Erlaubnis aktiviert, erteilt oder nicht erteilt wurde.
Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser aufzufordern, die Erlaubnis für den Kontext zu aktivieren und die Anfrage mit Cookies erneut durchzuführen.

Zuerst betrachten wir den Fall des Versuchs, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits die Erlaubnis erhalten hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzuzeigen, dass die Erlaubnis für den Kontext erteilt, aber inaktiv ist.
   - Die Anfrage enthält auch den {{httpheader("Origin")}} Header, um dem Server zu helfen, zu entscheiden, ob er die Erlaubnis aktivieren möchte.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzuzeigen, dass der Browser die Erlaubnis aktivieren und die Anfrage mit Cookies wiederholen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} Header enthalten, da sie von dem Wert von `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keinen Inhalt enthält.
3. Wenn der Browser die Anfrage wiederholt, fügt er `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, zusammen mit den Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, was dem Browser sagt, die neue Version der Bibliothek mit Zugriff auf Drittanbieter-Cookies zu laden.

![Arbeitsablauf der Headers zum Speicherzugriff - Aktivieren der Berechtigung `storage-access` und Wiederholung](storage_headers_activate_permission.png)

Zuletzt betrachten wir den Zustand, wenn eine eingebettete Ressource geladen wird, für die die Erlaubnis nicht erteilt wurde:

> [!NOTE]
> Da wir die Headers nicht verwenden können, um die Erlaubnis zu erteilen, müssen wir die Ressource ohne Cookies laden, damit sie die Erlaubnis anfordern kann.
> Dies ist die gleiche Sequenz wie wenn die Headers nicht angewendet wurden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzuzeigen, dass die Erlaubnis nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die beim Laden die Erlaubnis für einen sicheren Zugriff mit transienter Aktivierung anfordert.
   Der Header `Activate-Storage-Access` ist nicht in der Antwort enthalten, aber der Server sollte den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Erlaubnis erteilt (und damit aktiviert) hat, lädt das Embed sich selbst neu.

3. Der Browser fügt `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, um anzuzeigen, dass der Kontext eine aktivierte Berechtigung `storage-access` hat, und schließt die Drittanbieter-Cookies ein.
4. Der Server antwortet mit `Activate-Storage-Access: load`, was dem Browser sagt, die neue Version der Bibliothek mit Zugriff auf Drittanbieter-Cookies zu laden.

![Arbeitsablauf der Headers zum Speicherzugriff - ohne Berechtigung `storage-access`](storage_headers_no_permission.png)

## Sicherheitsüberlegungen

Verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt.
Überprüfen Sie die untenstehende Liste, wenn Sie Schwierigkeiten haben, eine Anfrage zum Laufen zu bringen:

1. Die Erlaubnisanfrage muss mit einer Benutzeraktion ({{Glossary("transient_activation", "transient activation")}}) wie einem Tippen oder Klicken verknüpft sein.
   Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit exzessiven Zugriffsanforderungen belästigen.
   Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API bereits für einen anderen Kontext mit dem gleichen `<Top-Level-Site, eingebettete Site>` Schlüssel erteilt wurde.
   - Der Aufrufer ein Top-Level-Dokument oder gleichauf mit dem Top-Level-Dokument ist.
     In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null` Ursprung haben.
3. Ursprünge, die noch nie als Erstanbieter interagiert haben, haben keinen Begriff von Erstanbieter-Speicher. Aus Sicht des Benutzers haben sie nur eine Drittanbieter-Beziehung zu diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer kürzlich nicht mit dem eingebetteten Inhalt in einem Erstanbieter-Kontext interagiert hat (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können standardmäßig aus Sicherheitsgründen keinen Speicherzugriff erhalten.
   Um dies zu bewältigen, bietet die API das [Sandbox-Token `allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation).
   Das `<iframe>` muss dies hinzufügen, um Speicherzugriffsanfragen zu ermöglichen, sowie `allow-scripts` und `allow-same-origin`, um das Ausführen eines Skripts zum Aufrufen der API zu erlauben und es in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Verwendung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf Ihrem Server gesetzt ist, blockiert werden.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Zulassungslisten, Sperrlisten, geräteinterne Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder die Aufforderung des Benutzers zur expliziten Genehmigung.

## Browserspezifische Abweichungen

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Umfang und Ausmaß des Drittanbieter-Cookie-Zugriffs, den sie in verschiedenen Browsern erhalten, aufgrund von Unterschieden in deren Speicherzugriffspolitiken erwarten.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die Zugriffsberechtigungen für den Speicher laufen nach 30 Tagen Browsernutzung ohne Benutzerinteraktion aus. Die Interaktion mit dem eingebetteten Inhalt verlängert diese Grenze um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da sich der Benutzer bereits auf der Seite befindet.

### Firefox

- Wenn die eingebettete Herkunft `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat und der Benutzer eine Seite von `foo.example` besucht, in die erneut eine Seite von `tracker.example` eingebettet ist, innerhalb von weniger als 30 Tagen, hat die eingebettete Herkunft sofort Drittanbieter-Cookie-Zugriff beim Laden.
- Die Zugriffsberechtigungen für den Speicher laufen nach 30 Kalendertagen aus.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Zugriffsberechtigungen für den Speicher laufen nach 30 Tagen Browsernutzung ohne Benutzerinteraktion aus. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.
- Nachdem ein Embed die Berechtigung `storage-access` aktiviert hat und sein Inhalt erneut angefordert wurde, werden Drittanbieter-Cookies mit Anfragen an die _Site_ der eingebetteten Ressource gesendet und nicht an den Ursprung. Safari verwendet immer noch ein älteres Design, das nicht der Same-Origin-Policy folgt.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Code-Beispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Boolean-Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es, in einem Drittanbieter-Kontext geladenen Inhalten (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, falls der Zugriff gewährt wurde, und abgelehnt wird, falls der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{deprecated_inline}}
  - : Eine nicht-standardisierte veraltete Erweiterung der Storage Access API, die es Top-Level-Sites ermöglicht, Drittanbieter-Cookie-Zugriff im Namen eingebetteter Inhalte zu beantragen, die von einer anderen Site in demselben [verwandten Webseiten-Set](https://privacysandbox.google.com/cookies/related-website-sets-integration) stammen. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, falls der Zugriff gewährt wurde, und abgelehnt wird, falls der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktionen werden an das Promise-Objekt weitergegeben, das von diesen Methoden zurückgegeben wird, sodass die Aufrufer Maßnahmen ergreifen können, die Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Beispielsweise könnte ein Aufrufer ein Pop-up-Fenster aus dem erfüllten Promise heraus öffnen, ohne den Pop-up-Blocker von Firefox zu aktivieren.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der "`storage-access`" Feature-Name
  - : In unterstützenden Browsern kann er abfragen, ob Drittanbieter-Cookie-Zugriff allgemein gewährt wurde, das heißt, für ein anderes gleichseitiges Embed. Falls ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Promise wird automatisch aufgelöst.
- `Permissions.query()`, der "`top-level-storage-access`" Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um abzufragen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Falls ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

### Ergänzungen zu HTTP

#### Permissions-Policy

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}}-Direktive steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (d.h. eingebettet in einem {{htmlelement("iframe")}}), die Storage Access API verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

#### Headers zum Speicherzugriff

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffsstatus" für den aktuellen Anfragekontext an, der entweder `none`, `inactive` oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine vorhandene Erlaubnis für sicheren Zugriff aktivieren und die Anfrage mit Cookies erneut durchführen kann, oder eine Ressource mit Cookie-Zugriff laden kann, wenn sie bereits eine aktivierte Erlaubnis hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
