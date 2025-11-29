---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit für siteübergreifende Inhalte, die in einem Drittpartei-Kontext geladen werden (d.h. eingebettet in einem {{htmlelement("iframe")}}), um Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die sie typischerweise nur in einem First-Party-Kontext (d.h. wenn sie direkt in einem Browser-Tab geladen werden) Zugriff hätten.

Die Storage Access API ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Third-Party-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt jedoch legitime Verwendungen für Third-Party-Cookies und unpartitionierten Zustand, die wir auch bei diesen Standardeinschränkungen weiterhin ermöglichen möchten. Beispiele beinhalten Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Anzeigepräferenzen über verschiedene Seiten hinweg.

Die API stellt Methoden bereit, die eingebetteten Ressourcen erlauben, zu überprüfen, ob sie momentan Zugriff auf Third-Party-Cookies haben, und falls nicht, den Benutzeragenten um Zugang zu bitten.

## Konzepte und Nutzung

Browser implementieren verschiedene Speicherzugangs-Features und -Richtlinien, die den Zugriff auf Third-Party-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speichers für eingebettete Ressourcen unter jedem obersten Ursprungsort ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittpartei-Kontext geladen werden.

Die Semantik rund um Funktionen und Richtlinien zur Blockierung von Third-Party-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittpartei-Kontext eingebettet sind, erhalten keinen Zugriff auf denselben Zustand, den sie hätten, wenn sie in einem First-Party-Kontext geladen würden. Dies geschieht mit guter Absicht — Browser-Anbieter wollen Maßnahmen ergreifen, um die Privatsphäre und Sicherheit der Benutzer besser zu schützen. Beispiele dafür sind, sie weniger offen dafür zu lassen, dass ihre Aktivitäten über verschiedene Seiten hinweg verfolgt werden, und weniger anfällig für Exploits wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) zu sein.

Es gibt jedoch legitime Verwendungen für eingebettete siteübergreifende Inhalte, die auf Third-Party-Cookies und unpartitionierten Zustand zugreifen, die durch die oben genannten Funktionen und Richtlinien gebrochen werden. Angenommen, Sie haben eine Reihe von verschiedenen Websites, die Zugang zu verschiedenen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedene Länderdomains zur Lokalisierung aufteilen — `example.com`, `example.ua`, `example.br`, usw. — oder auf eine andere Art und Weise.

Sie könnten begleitende Utility-Websites mit Komponenten haben, die in allen anderen Sites eingebettet sind, zum Beispiel, um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Utility-Sites möchten ihren Zustand mit den Sites teilen, in die sie eingebettet sind, über Cookies. Sie können keine First-Party-Cookies teilen, da sie sich auf verschiedenen Domains befinden, und Third-Party-Cookies werden in Browsern, die sie blockieren, nicht mehr funktionieren.

In solchen Situationen ermutigen Site-Besitzer oft Benutzer, ihre Website als Ausnahme hinzuzufügen oder die Richtlinien zur Blockierung von Third-Party-Cookies vollständig zu deaktivieren. Benutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern und möglicherweise auf allen Websites.

Die Storage Access API soll dieses Problem lösen; eingebettete siteübergreifende Inhalte können uneingeschränkten Zugriff auf Third-Party-Cookies und unpartitionierten Zustand auf Basis einzelner Frames über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.
Es kann auch überprüfen, ob es bereits Zugriff hat über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [storage access headers](#speicherzugriffs-header) sind eine HTTP-Erweiterung der API, die einen effizienteren Speicher-API-Workflow ermöglicht und auch verwendet werden kann, um eine zuvor erteilte Speicherzugriffsberechtigung für passive Ressourcen, wie Bilder, zu aktivieren.

### Unpartitionierte versus partitionierte Cookies

Die Storage Access API wird nur benötigt, um Zugriff auf _unpartitionierte_ Third-Party-Cookies zu gewähren!
Unpartitionierte Cookies sind diejenigen, bei denen alle Cookies, die auf derselben Site gesetzt werden, in demselben Cookie-Speicher aufbewahrt werden — die traditionelle Methode seit den frühen Tagen des Internets.
Da das Risiko besteht, dass Daten, die für eine Site bestimmt sind, für andere Sites offengelegt werden, blockieren Browser häufig das Senden von unpartitionierten Third-Party-Cookies in Anfragen und erlauben keinen Zugriff auf sie in eingebetteten Kontexten.

Im Gegensatz dazu haben _partitionierte_ Cookies, bei denen eingebettete Ressourcen unter jedem obersten Site eine einzigartige Cookie-Speicherplatzierung erhalten, die von denen anderer Sites isoliert ist.
Da kein Risiko für die Privatsphäre besteht, weil es nicht möglich ist, Benutzer über Websites hinweg über partitionierte Cookies zu verfolgen, senden Browser partitionierte Cookies in Anfragen und machen sie eingebetteten Ressourcen zugänglich.
Beachten Sie jedoch, dass, weil die Cookies nicht zwischen Sites geteilt werden, sie auch nicht automatisch über Sites synchronisiert werden.
Browser haben verschiedene Mechanismen, um den Zugriff auf Third-Party-Cookies zu partitionieren, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API über Third-Party-Cookies sprechen, meinen wir implizit _unpartitionierte_ Third-Party-Cookies.

### Funktionsweise

Drittinhalte, die in einem {{htmlelement("iframe")}} eingebettet sind und auf Cookies oder einen anderen unpartitionierten Zustand zugreifen müssen, können den Zugriff über die Storage Access API wie folgt anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob der eingebettete Inhalt bereits Zugriff auf unpartitionierte Cookies hat.
2. Wenn nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) bei {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die Berechtigung `storage-access` anzufordern.

   Abhängig vom Browser wird dem Benutzer auf leicht unterschiedliche Weise gefragt, ob die Berechtigung der anfragenden Einbettung gewährt werden soll.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem ein Ursprung auf mehr als einer festgelegten Anzahl von Sites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
     Es wird jedoch automatisch Zugriff gewähren und Aufforderungen überspringen, wenn der eingebettete Inhalt und die einbettende Site Teil desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.

3. Die Berechtigung wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen sowie [Browser-spezifische Variationen](#browser-spezifische_variationen) für einige spezifische Sicherheitsanforderungen von Browsern.
   Die auf {{jsxref("Promise")}} basierende Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code zu schreiben, der Erfolgs- und Fehlerschritte behandelt.

   Sobald die Berechtigung erteilt ist, wird ein Berechtigungsschlüssel im Browser gespeichert mit der Struktur `<top-level site, embedded site>`.
   Wenn zum Beispiel die einbettende Site `embedder.com` ist und die Einbettung `locator.example.com`, dann wäre der Schlüssel `<embedder.com, example.com>`.

   Dies bedeutet, dass die Erlaubnis für den Zugriff auf unpartitionierte Cookies auf jede Seite der `example.com` Site oder eine ihrer Subdomains gewährt wird, die in einer beliebigen Seite der `embedder.com` Site eingebettet ist.
   Zum Beispiel, `docs.example.com`, `profile.example.com`, können nun `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt werden.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, embedded origin>`, was bedeutete, dass gleiche Standortes, kreuzursprüngliche Einbettungen nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

4. Die Berechtigung muss explizit für jeden _Kontext_ aktiviert werden.

   Wenn einer Einbettung die Berechtigung erteilt wird, wird diese Berechtigung auch für den aktuellen Kontext aktiviert.
   Andere Kontexte, wie neue Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}}-Elementen auf der Seite, haben ihren Third-Party-Cookie-Zugriff standardmäßig blockiert.
   Das bedeutet, dass selbst wenn die Berechtigung gewährt wurde, die Seite geladen und `requestStorageAccess()` aufgerufen werden muss, um die Berechtigung zu aktivieren.
   Wenn die Berechtigung bereits erteilt wurde, erfordert ein Aufruf von `requestStorageAccess()` keine transient activation und das Versprechen wird automatisch erfüllt.

   Die einzige Ausnahme vom "standardmäßig blockiert"-Verhalten ist, wenn eine Einbettung eine gleiche Ursprung-Navigation durchführt, um sich selbst nach der Erteilung oder Aktivierung der Berechtigung neu zu laden.
   In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   Dies ermöglicht der eingebetteten Ressource, sich neu zu laden und auf ihre Cookies zuzugreifen.

   > [!NOTE]
   > In älteren Spezifikationsversionen war der Zugriff _seiteweise_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn eine Einbettung über `requestStorageAccess()` Zugang zu Third-Party-Cookies erhielt, erhielten alle anderen gleiche Standort Einbettungen automatisch Zugriff.
   > Dies war aus Sicherheitsgründen kein wünschenswertes Verhalten — beispielsweise, wenn `shop.example.com` `locator.users.com` eingebettet hat, um es Benutzern zu ermöglichen, ihre Standortinformationen beim Einkaufen zu nutzen, und `locator.users.com` `requestStorageAccess()` aufrief, würden `shop.example.com` und jede andere eingebettete Site Zugriff auf seine Cookies haben, aber auch Zugriff auf Cookies von `private.users.com`, die nicht zur Einbettung vorgesehen ist. [Lesen Sie mehr über die Motivationen](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem eine Einbettung die `storage-access`-Berechtigung aktiviert hat, sollte sie sich selbst neu laden.
   Der Browser wird die Ressource mit eingeschlossenen Third-Party-Cookies erneut anfordern und sie der eingebetteten Ressource zur Verfügung stellen, sobald sie geladen ist.

### Storage access headers

Die API erfordert, dass eine Ressource `requestStorageAccess()` aufrufen muss, um sich für die Aktivierung der `storage-access`-Berechtigung in jedem neuen Kontext anzumelden, die bereits gewährt worden sein muss.
Das bedeutet im Umkehrschluss, dass die eingebettete Ressource zuerst ohne Cookies angefordert und geladen werden muss, damit sie die Methode aufrufen kann.

Die storage access headers ermöglichen einen Workflow, bei dem der Server verlangen kann, dass die Berechtigung für den Kontext aktiviert wird, wobei vermieden wird, die eingebettete Ressource unnötig nochmals zu laden, falls die Berechtigung bereits erteilt wurde.
Die Ressource muss jedoch immer noch geladen werden, um zuerst die Erlaubnis anzufordern.

Es gibt zwei Header:

- Der Browser fügt der Anfrage den {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Header hinzu, um den Speicherzugriffszustand des aktuellen Fetch-Kontextes anzuzeigen, z. B., ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde.
- Abhängig vom Speicherzugriffszustand der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}}-Header antworten, um zu verlangen, dass der Browser die Berechtigung für den Kontext aktiviert und die Anfrage mit Cookies (die Vermeidung einer erneuten Ressource, damit sie `requestStorageAccess()` aufrufen kann, um dasselbe zu erreichen) oder die Berechtigung aktiviert und die zurückgegebenen Ressource lädt.

Die storage access headers können auch verwendet werden, um die Berechtigung für passive Ressourcen, wie Bilder, zu aktivieren, sofern der Kontext bereits die Berechtigung erhalten hat.
Dies könnte zum Beispiel verwendet werden, um verschiedene Bilder für verschiedene Benutzer, demografische Gruppen oder Regionen bereitzustellen.

Die Workflows werden im Abschnitt [Storage access header sequences](#speicherzugriff_header-sequenzen) gezeigt.

### Anforderungs-/Antwortablauf

#### JavaScript-Sequenzen

Betrachten Sie das Beispiel einer Bibliothek, die in einem {{htmlelement("iframe")}} geladen wird, die über eine Reihe von Websites hinweg geteilt werden muss und sich auf in unpartitionierten Cookies gespeicherte Anmeldeinformationen stützt.

Betrachten wir zunächst den Fall, in dem die Berechtigung nicht erteilt wurde:

1. Der Browser fordert die Ressource an, ohne Third-Party-Cookies einzuschließen.
2. Der Server antwortet mit einer "Fallback"-Version des Inhalts, die nicht auf Anmeldeinformationen angewiesen ist und beim Laden keinen Zugriff auf seine Cookies hat.
   - Sobald sie geladen ist, ruft die Ressource `requestStorageAccess()` mit `transient activation` auf, um die `storage-access`-Berechtigung anzufordern und zu aktivieren.
   - Wenn die Erlaubnis erteilt wird, lädt sich die Ressource dann selbst neu.

3. Der Browser fordert die Ressource erneut an, diesmal mit Third-Party-Cookies.
4. Die Serverantwort enthält eine "credentialed" Version der Ressource.

Der Browser lädt die Ressource, die Zugriff auf ihre eigenen Cookies hat, weil sie eine aktivierte `storage-access`-Berechtigung hat.

![Storage API workflow - ohne storage-access-Berechtigung](storage_api_no_permission.png)

Jetzt betrachten wir den Fall, in dem die Berechtigung erteilt, aber nicht aktiviert wurde.
Dies würde geschehen, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite derselben Site einzubetten.

Der Workflow ist fast genau derselbe, weil die Ressource zuerst ohne Cookies geladen werden muss und dann `requestStorageAccess()` aufrufen muss, um die Berechtigung für den Kontext zu aktivieren.
In diesem Fall ist jedoch keine `transient activation` erforderlich, und es kann beim Laden ausgeführt werden.

![Storage API workflow - storage-access-Berechtigung aktivieren](storage_api_permission.png)

#### Speicherzugriff Header-Sequenzen

Die Speicherzugriff Header ermöglichen einen verbesserten Workflow, der es dem Server ermöglicht, den Browser aufzufordern, eine bereits gewährte Berechtigung zu aktivieren und die Anfrage mit eingeschlossenen Cookies erneut zu versuchen.
Dies vermeidet die Anforderung, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Benutzer bereits die Erlaubnis erteilt hat.

> [!NOTE]
> Diese Header bieten keinen Mechanismus, um die Speicherzugriffsberechtigung überhaupt zuerst zu gewähren.
> Die Berechtigung muss immer von der eingebetteten Ressource durch Aufruf von `requestStorageAccess()` mit `transient activation` angefordert werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Header wird Anfragen hinzugefügt, um den Speicherzugriffszustand des aktuellen Fetch-Kontextes anzuzeigen, z. B., ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde.
Abhängig vom Speicherzugriffszustand der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}}-Header antworten, um zu verlangen, dass der Browser die Berechtigung für den Kontext aktiviert und die Anfrage mit Cookies erneut versucht.

Betrachten wir zunächst den Fall, in dem versucht wird, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits die Berechtigung erteilt hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzuzeigen, dass die Berechtigung erteilt aber für den Kontext inaktiv ist.
   - Die Anfrage enthält auch den {{httpheader("Origin")}}-Header, um dem Server zu helfen, zu entscheiden, ob er die Berechtigung aktivieren möchte.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzuzeigen, dass der Browser die Berechtigung aktivieren und die Anfrage mit Cookies erneut versuchen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}}-Header enthalten, da diese vom Wert `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keinen Inhalt enthält.
3. Wenn der Browser die Anfrage erneut versucht, fügt er `Sec-Fetch-Storage-Access: active` der Anfrage hinzu, einschließlich der Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, was dem Browser anzeigt, die neue Version der Bibliothek mit Zugriff auf Third-Party-Cookies zu laden.

![Speicherzugriff Header-Workflow - storage-access-Berechtigung aktivieren und erneut versuchen](storage_headers_activate_permission.png)

Der letzte Zustand, den es zu berücksichtigen gilt, ist beim Laden einer eingebetteten Ressource, für die keine Berechtigung erteilt wurde:

> [!NOTE]
> Da wir die Header nicht nutzen können, um die Berechtigung zu erteilen, müssen wir die Ressource ohne Cookies laden, damit sie die Berechtigung anfordern kann.
> Dies ist dieselbe Sequenz, als ob die Header nicht angewendet würden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzuzeigen, dass die Berechtigung nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die bei einem Laden die Berechtigung für sicheren Zugriff mit `transient activation` anfordert.
   Der `Activate-Storage-Access`-Header ist nicht in der Antwort enthalten, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Erlaubnis erteilt (und damit aktiviert) hat, lädt sich die Einbettung selbst neu.

3. Der Browser fügt `Sec-Fetch-Storage-Access: active` der Anfrage hinzu, um anzuzeigen, dass der Kontext eine aktivierte `storage-access`-Berechtigung hat und fügt die Third-Party-Cookies ein.
4. Der Server antwortet mit `Activate-Storage-Access: load`, was dem Browser anzeigt, die neue Version der Bibliothek mit Zugriff auf Third-Party-Cookies zu laden.

![Speicherzugriff Header-Workflow - ohne storage-access-Berechtigung](storage_headers_no_permission.png)

## Sicherheitsüberlegungen

Verschiedene Sicherheitsmaßnahmen können dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt.
Überprüfen Sie die untenstehende Liste, wenn Sie Probleme haben, eine Anfrage zum Laufen zu bekommen:

1. Die Berechtigungsanfrage muss mit einer Benutzeraktion ({{Glossary("transient_activation", "transient activation")}}) verknüpft sein, wie z. B. einem Tippen oder Klicken.
   Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanfragen spammen.
   Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API bereits einem anderen Kontext mit demselben `<top-level site, embedded site>`-Schlüssel erteilt wurde.
   - Der Anrufer ein oberstes Dokument ist oder gleich-ursprünglich zum obersten Dokument ist.
     In solchen Fällen muss `requestStorageAccess()` wahrscheinlich gar nicht aufgerufen werden.
2. Das Dokument und das oberste Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, die noch nie als First-Party verwendet wurden, haben keine Vorstellung von First-Party-Storage. Aus der Sicht des Benutzers haben sie nur eine Third-Party-Beziehung zu diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer zuletzt nicht in einem First-Party-Kontext mit den eingebetteten Inhalten interagiert hat (in Firefox bedeutet "zuletzt" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erteilt bekommen.
   Um dies zu handhaben, stellt die API den [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) bereit.
   Das `<iframe>` muss dies enthalten, um Speicherzugriffsanfragen zu aktivieren, zusammen mit `allow-scripts` und `allow-same-origin`, um es ihm zu ermöglichen, ein Skript auszuführen, um die API aufzurufen und es in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine von Ihnen auf Ihrem Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

> [!NOTE]
> Möglicherweise muss das Dokument auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Whitelists, Blacklists, On-Device-Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder dass der Benutzer ausdrücklich um Erlaubnis gebeten wird.

## Browser-spezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Grad und Umfang des Zugriffes auf Third-Party-Cookies zwischen verschiedenen Browsern erwarten, aufgrund von Unterschieden in ihren Speicherzugriffsrichtlinien.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standardwert in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Speicherzugriffsberechtigungen enden nach 30 Tagen Browsernutzung ohne Benutzerinteraktion. Interaktion mit den eingebetteten Inhalten verlängert diese Grenze um weitere 30 Tage. Dies erfolgt nicht, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da sich der Benutzer bereits auf der Seite befindet.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Third-Party-Cookie-Zugriff auf den obersten Ursprung `foo.example` hat und der Benutzer eine Seite von `foo.example` besucht, die erneut eine Seite von `tracker.example` einbettet, wird der eingebettete Ursprung innerhalb von weniger als 30 Tagen sofort beim Laden Zugriff auf Third-Party-Cookies haben.
- Die Speicherzugriffsberechtigungen enden nach 30 Kalendertagen, die verstrichen sind.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox für das Blockieren von Tracking-Cookies enthält [eine ausführliche Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffsberechtigungen enden nach 30 Tagen Browsernutzung ohne Benutzerinteraktion. Der erfolgreiche Einsatz der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Code-Beispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert auflöst, der anzeigt, ob das Dokument Zugriff auf Third-Party-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es Inhalten, die in einem Drittpartei-Kontext geladen werden (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf Third-Party-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde und abgelehnt wird, wenn der Zugriff verweigert wird.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagenes Erweiterung zur Storage Access API, die es obersten Sites ermöglicht, den Zugriff auf Third-Party-Cookies im Namen eingebetteter Inhalte von einer anderen Site in demselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) anzufordern. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wird.

> [!NOTE]
> Die Benutzerinteraktion wird an das von diesen Methoden zurückgegebene Versprechen weitergegeben, was es den Anrufern ermöglicht, Aktionen durchzuführen, die Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Ein Anrufer könnte beispielsweise ein Popup-Fenster öffnen, nachdem das Versprechen erfüllt wurde, ohne den Popup-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Funktionsname
  - : In unterstützenden Browsern kann damit abgefragt werden, ob der Zugriff auf Third-Party-Cookies im Allgemeinen gewährt wurde, das heißt, an eine andere gleichseitige Einbettung. Wenn dies der Fall ist, kann `requestStorageAccess()` ohne Benutzerinteraktion aufgerufen werden und das Versprechen wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"` Funktionsname {{experimental_inline}}
  - : Ein separater Funktionsname, der verwendet wird, um abzufragen, ob die Berechtigung zum Zugriff auf Third-Party-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn dies der Fall ist, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

### Ergänzungen zu HTTP

#### Permissions-Policy

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}}-Richtlinie steuert, ob ein in einem Drittpartei-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die Speicherzugriffs-API verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

#### Speicherzugriffs-Header

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "storage access status" für den aktuellen Anforderungskontext an, der einer von `none`, `inactive` oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine vorhandene Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies erneut versuchen kann oder eine Ressource mit Cookie-Zugriff laden kann, wenn bereits eine aktivierte Berechtigung vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
