---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit für cross-site Inhalte, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), um Zugang zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zuständen](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die sie normalerweise nur in einem Erstanbieter-Kontext (d.h. wenn sie direkt in einem Browser-Tab geladen werden) Zugriff hätten.

Die Storage Access API ist relevant für User Agents, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Verwendungen für Drittanbieter-Cookies und unpartitionierte Zustände, die wir trotz dieser Standardbeschränkungen weiterhin ermöglichen möchten. Beispiele sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdaten wie Standortdaten oder Anzeigepräferenzen über verschiedene Seiten hinweg.

Die API bietet Methoden, die eingebetteten Ressourcen erlauben, zu überprüfen, ob sie derzeit Zugang zu Drittanbieter-Cookies haben und, falls nicht, den Zugang beim User Agent zu beantragen.

## Konzepte und Verwendung

Browser implementieren verschiedene Funktionen und Richtlinien zum Zugriff auf Speicherressourcen, die den Zugang zu Drittanbieter-Cookies und unpartitionierten Zuständen einschränken. Diese reichen von der Vergabe eines einzigartigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um das Blockieren von Drittanbieter-Cookies und unpartitionierten Zuständen und die entsprechenden Richtlinien unterscheiden sich von Browser zu Browser, die Kernfunktionalität bleibt jedoch ähnlich. Cross-site Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugang zu demselben Zustand, auf den sie zugreifen könnten, wenn sie in einem Erstanbieter-Kontext geladen würden. Dies geschieht in guter Absicht — Browseranbieter wollen Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele hierfür sind weniger Angriffsflächen, um ihre Aktivitäten über verschiedene Seiten hinweg zu tracken, und ein geringeres Risiko bei Exploits wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}).

Es gibt jedoch legitime Verwendungen für eingebettete Cross-site-Inhalte, die Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände benötigen, welche durch die oben genannten Funktionen und Richtlinien beeinträchtigt werden. Angenommen, Sie haben eine Reihe von verschiedenen Websites, die Zugang zu verschiedenen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste zur Lokalisierung in verschiedene Länderdomains aufteilen — `example.com`, `example.ua`, `example.br` usw. — oder in einer anderen Art.

Sie könnten auch begleitende Utility-Sites mit Komponenten haben, die in alle anderen Sites eingebettet sind, zum Beispiel, um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Utility-Sites werden ihren Zustand mit den Sites, in die sie eingebettet sind, über Cookies teilen wollen. Sie können keine Erstanbieter-Cookies teilen, da sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies funktionieren in Browsern, die sie blockieren, nicht mehr.

In solchen Situationen ermutigen Site-Besitzer oft die Nutzer, ihre Site als Ausnahme hinzuzufügen oder Drittanbieter-Cookie-Blockierungsrichtlinien komplett zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern und möglicherweise über alle Websites hinweg.

Die Storage Access API ist dazu gedacht, dieses Problem zu lösen; eingebettete cross-site Inhalte können unbeschränkten Zugang zu Drittanbieter-Cookies und unpartitionierten Zuständen auf Basis eines Frames anfordern, indem sie die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) verwenden. Es kann auch überprüft werden, ob es bereits Zugang hat, durch die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [storage access headers](#speicherzugangs-header) sind eine HTTP-Erweiterung der API, die einen effizienteren Storage-API-Workflow ermöglicht und auch verwendet werden können, um eine zuvor gewährte Speicherzugangserlaubnis für passive Ressourcen wie Bilder zu aktivieren.

### Unpartitionierte versus partitionierte Cookies

Die Storage Access API ist nur notwendig, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu ermöglichen! Unpartitionierte Cookies sind solche, bei denen alle Cookies auf derselben Site im selben Cookie-Tiegel gespeichert werden — die traditionelle Methode seit den frühen Zeiten des Webs. Da ein Risiko besteht, dass Daten, die für eine Site bestimmt sind, auf andere Sites offengelegt werden, blockieren Browser normalerweise das Senden unpartitionierter Drittanbieter-Cookies in Anfragen und erlauben keinen Zugriff darauf in eingebetteten Kontexten.

Im Gegensatz dazu stehen _partitionierte_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Site einen einzigartigen Cookie-Speicherplatz erhalten, der von denen anderer Sites isoliert ist. Da kein Risiko der Privatsphäre besteht, da es nicht möglich ist, Benutzer über Sites hinweg durch partitionierte Cookies zu tracken, senden Browser partitionierte Cookies in Anfragen und machen sie für eingebettete Ressourcen verfügbar. Beachten Sie jedoch, dass, da die Cookies nicht zwischen Sites geteilt werden, sie auch nicht automatisch zwischen Sites synchronisiert werden. Browser haben verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Drittanbieter-Inhalte, die in ein {{htmlelement("iframe")}} eingebettet sind, und Zugriff auf Cookies oder andere unpartitionierte Zustände benötigen, können den Zugang über die Storage Access API wie folgt beantragen:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob der eingebettete Inhalt bereits Zugang zu unpartitionierten Cookies hat.
2. Falls nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die Erlaubnis `storage-access` anzufordern.

   Je nach Browser wird der Nutzer gefragt, ob er der anfordernden Einbettung die Erlaubnis erteilen möchte, auf leicht unterschiedliche Weisen.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte, die bislang keinen Speicherzugang erhalten haben.
   - Firefox fordert Benutzer nur dann auf, nachdem ein Ursprung auf mehr als einer bestimmten Anzahl von Sites Speicherzugang angefordert hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte, die bislang keinen Speicherzugang erhalten haben.
     Es wird jedoch automatisch Zugriff gewähren und Eingabeaufforderungen überspringen, wenn die eingebetteten Inhalte und die einbettende Site Teil desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.

3. Die Erlaubnis wird gewährt oder verweigert, basierend darauf, ob die Inhalte alle Sicherheitsanforderungen erfüllen — siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen und [Browser-spezifische Unterschiede](#browser-spezifische_unterschiede) für einige spezifische Sicherheitsanforderungen von Browsern. Die auf {{jsxref("Promise")}} basierte Natur von `requestStorageAccess()` ermöglicht es, Code auszuführen, um Erfolgs- und Misserfolgsfälle zu behandeln.

   Sobald die Erlaubnis erteilt ist, wird ein Berechtigungsschlüssel im Browser gespeichert mit der Struktur `<top-level site, embedded site>`.
   Zum Beispiel, wenn die einbettende Site `embedder.com` ist und die Einbettung `locator.example.com`, wäre der Schlüssel `<embedder.com, example.com>`.

   Das bedeutet, dass die Erlaubnis für den Zugriff auf unpartitionierte Cookies auf jede Seite der `example.com` Site oder eine ihrer Subdomains gewährt wird, die in irgendeiner Seite der `embedder.com` Site eingebettet ist. Zum Beispiel können `docs.example.com`, `profile.example.com` nun `requestStorageAccess()` aufrufen, und das Versprechen würde automatisch erfüllt.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, embedded origin>`, was bedeutete, dass gleichseitige, cross-origin Einbettungen nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

4. Die Erlaubnis muss für jeden _Kontext_ explizit aktiviert werden.

   Wenn einer Einbettung die Erlaubnis erteilt wird, wird diese Erlaubnis auch für den aktuellen Kontext aktiviert. Andere Kontexte, wie neue Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}} Elementen auf der Seite, haben ihren Drittanbieter-Cookie-Zugriff standardmäßig blockiert. Das bedeutet, dass selbst wenn die Erlaubnis erteilt wurde, die Seite geladen werden muss und `requestStorageAccess()` aufrufen muss, um die Erlaubnis zu aktivieren. Wenn die Erlaubnis bereits gewährt wurde, erfordert ein Aufruf von `requestStorageAccess()` keine transient activation, und das Versprechen wird automatisch erfüllt.

   Die einzige Ausnahme vom Standardverhalten "standardmäßig blockiert" ist, wenn eine Einbettung eine gleichseitige Navigation durchführt, um sich nach der Eingewährung oder Aktivierung einer Berechtigung neu zu laden. In solchen Fällen wird der Speicherzugang von der vorherigen Navigation übernommen. Dies ermöglicht es der eingebetteten Ressource, sich selbst neu zu laden und Zugang zu ihren Cookies zu erhalten.

   > [!NOTE]
   > In älteren Versionsspezifikationen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn eine Einbettung über `requestStorageAccess()` Drittanbieter-Cookie-Zugriff erhielt, erhielten alle anderen gleichseitigen Einbettungen automatisch Zugriff.
   > Dies war aus Sicherheitsperspektive nicht wünschenswert — zum Beispiel, wenn `shop.example.com` `locator.users.com` einbettete, um Nutzern zu ermöglichen, während des Einkaufens ihre Standortinformationen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufrief, konnte `shop.example.com` und jede andere eingebettete Seite auf ihre Cookies zugreifen, aber auch auf Cookies von `private.users.com`, die nicht eingebettet werden sollte. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem eine Einbettung die Speicherzugangserlaubnis aktiviert hat, sollte sie sich selbst neu laden. Der Browser wird die Ressource erneut mit Drittanbieter-Cookies anfordern und sie der eingebetteten Ressource zur Verfügung stellen, sobald sie geladen ist.

### Speicherzugangs-Header

Die API erfordert, dass eine Ressource für jeden neuen Kontext `requestStorageAccess()` aufruft, um die Speicherzugangserlaubnis zu aktivieren, die bereits gewährt worden sein muss. Dies wiederum bedeutet, dass die eingebettete Ressource zunächst ohne Cookies angefordert und geladen werden muss, damit sie die Methode aufrufen kann.

Die Speicherzugangs-Header ermöglichen einen Workflow, bei dem der Server anfordern kann, dass die Erlaubnis für den Kontext aktiviert wird, dadurch wird eine unnötige zusätzliche Ladung der eingebetteten Ressource vermieden, wenn die Erlaubnis bereits erteilt wurde. Die Ressource muss immer noch geladen werden, um die Erlaubnis das erste Mal anzufordern.

Es gibt zwei Header:

- Der Browser fügt der Anfrage den Header {{HTTPHeader("Sec-Fetch-Storage-Access")}} hinzu, um den Speicherzugangsstatus des aktuellen Abfragekontextes anzugeben, beispielsweise ob die Erlaubnis aktiviert, gewährt oder nicht gewährt wurde.
- Abhängig vom Speicherzugangsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um zu verlangen, dass der Browser die Erlaubnis für den Kontext aktiviert und die Anfrage mit Cookies wiederholt (wodurch vermieden wird, dass die Ressource geladen wird, damit sie `requestStorageAccess()` aufrufen kann, um dasselbe zu erreichen), oder die Erlaubnis aktiviert und die zurückgegebene Ressource lädt.

Die Speicherzugangs-Header können auch verwendet werden, um Erlaubnis für passive Ressourcen wie Bilder zu aktivieren, vorausgesetzt, der Kontext hat bereits Erlaubnis erhalten. Dies könnte beispielsweise verwendet werden, um verschiedene Bilder für verschiedene Benutzer, demografische Gruppen oder Regionen bereitzustellen.

Die Arbeitsabläufe sind im Abschnitt [Storage access header sequences](#speicherzugangs-header-sequenzen) dargestellt.

### Anfragen-/Antwortfluss

#### JavaScript-Sequenzen

Betrachten wir das Beispiel einer Bibliothek, die in ein {{htmlelement("iframe")}} geladen wird, die über mehrere Sites hinweg geteilt werden muss und auf in unpartitionierten Cookies gespeicherten Anmeldeinformationen beruht.

Zuerst betrachten wir den Fall, in dem die Erlaubnis nicht erteilt wurde:

1. Der Browser fordert die Ressource ohne Drittanbieter-Cookies an.
2. Der Server antwortet mit einer "Fallback"-Version des Inhalts, die nicht auf Anmeldeinformationen angewiesen ist und die bei der Ladezeit keinen Zugang zu ihren Cookies hat.
   - Nach dem Laden ruft die Ressource `requestStorageAccess()` mit transient activation auf, um die `storage-access` Erlaubnis anzufordern und zu aktivieren.
   - Wenn die Erlaubnis erteilt ist, lädt die Ressource sich dann selbst neu.

3. Der Browser fordert die Ressource erneut an, diesmal mit enthaltenen Drittanbieter-Cookies.
4. Die Server-Antwort enthält eine "credentialed" Version der Ressource.

Der Browser lädt die Ressource, die dann auf ihre eigenen Cookies zugreifen kann, da sie über eine aktivierte `storage-access` Erlaubnis verfügt.

![Speicher-API Arbeitsablauf - ohne storage-access Erlaubnis](storage_api_no_permission.png)

Jetzt betrachten wir den Fall, in dem die Erlaubnis bereits erteilt, aber nicht aktiviert wurde. Dies würde geschehen, wenn Sie dasselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite in derselben Site einzubetten.

Der Arbeitsablauf ist fast identisch, weil die Ressource das erste Mal auch ohne Cookies geladen werden muss, und sie muss dann `requestStorageAccess()` aufrufen, um die Erlaubnis für den Kontext zu aktivieren. In diesem Fall benötigt sie jedoch keine transient activation und kann sofort beim Laden ausgeführt werden.

![Speicher-API Arbeitsablauf - storage-access Erlaubnis aktivieren](storage_api_permission.png)

#### Speicherzugangs-Header-Sequenzen

Die Speicherzugangs-Header ermöglichen einen verbesserten Arbeitsablauf, der es dem Server ermöglicht, Browser zu bitten, eine bereits erteilte Erlaubnis zu aktivieren und die Anfrage mit enthaltenen Cookies erneut zu senden. Dadurch wird die Notwendigkeit vermieden, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Benutzer bereits die Erlaubnis erteilt hat.

> [!NOTE]
> Diese Header bieten keinen Mechanismus zur Erteilung der Speicherzugangserlaubnis. Die Erlaubnis muss immer von der eingebetteten Ressource durch `requestStorageAccess()` mit transient activation angefordert werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header wird zu Anfragen hinzugefügt, um den Speicherzugangsstatus des aktuellen Abrufkontextes anzugeben, zum Beispiel, ob die Erlaubnis aktiviert, gewährt oder nicht gewährt wurde. Abhängig vom Speicherzugangsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser aufzufordern, die Erlaubnis für den Kontext zu aktivieren und die Anfrage mit Cookies erneut zu senden.

Zuerst betrachten wir den Fall, in dem versucht wird, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits Erlaubnis erhalten hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzuzeigen, dass die Erlaubnis erteilt, aber inaktiv für den Kontext ist.
   - Die Anfrage wird auch den {{httpheader("Origin")}} Header enthalten, um dem Server zu helfen zu entscheiden, ob er die Erlaubnis aktivieren möchte.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzuzeigen, dass der Browser die Erlaubnis aktivieren und die Anfrage mit Cookies wiederholen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} Header enthalten, da sie vom Wert von `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keinen Inhalt enthält.
3. Wenn der Browser die Anfrage wiederholt, fügt er `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, zusammen mit den Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, was dem Browser sagt, die neue Version der Bibliothek mit Zugang zu Drittanbieter-Cookies zu laden.

![Speicherzugang-Header Arbeitsablauf - storage-access Erlaubnis aktivieren und erneut senden](storage_headers_activate_permission.png)

Der letzte Zustand, den wir betrachten, ist das Laden einer eingebetteten Ressource, für die die Erlaubnis nicht erteilt wurde:

> [!NOTE]
> Da wir die Header nicht verwenden können, um die Erlaubnis zu erteilen, müssen wir die Ressource ohne Cookies laden, damit sie die Erlaubnis anfordern kann.
> Dies ist die gleiche Sequenz, als ob die Header nicht angewendet wurden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzuzeigen, dass die Erlaubnis nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die beim Laden mit transient activation die Erlaubnis für sicheren Zugang anfordert.
   Der `Activate-Storage-Access` Header wird nicht in die Antwort aufgenommen, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Erlaubnis erteilt (und damit aktiviert) hat, lädt sich die Einbettung selbst neu.

3. Der Browser fügt `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, um anzuzeigen, dass der Kontext eine aktivierte `storage-access` Erlaubnis hat, und enthält die Drittanbieter-Cookies.
4. Der Server antwortet mit `Activate-Storage-Access: load`, was dem Browser anweist, die neue Version der Bibliothek mit Zugang zu Drittanbieter-Cookies zu laden.

![Speicherzugang-Header Arbeitsablauf - ohne storage-access Erlaubnis](storage_headers_no_permission.png)

## Sicherheitsüberlegungen

Verschiedene Sicherheitsmaßnahmen könnten einen Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) zum Scheitern bringen. Überprüfen Sie die untenstehende Liste, wenn Sie Schwierigkeiten haben, eine Anfrage zu bearbeiten:

1. Die Anforderung der Erlaubnis muss mit einer Benutzeraktion verbunden sein ({{Glossary("transient_activation", "transient activation")}}) wie ein Tap oder Klick. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder den Nutzer mit übermäßigen Zugriffsanforderungen spammt. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API bereits einem anderen Kontext mit dem selben `<top-level site, embedded site>` Schlüssel gewährt wurde.
   - Der Aufrufer ein Top-Level-Dokument ist oder zur gleichen Site wie das Top-Level-Dokument gehört.
     In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null` Ursprung haben.
3. Ursprünge, mit denen nie als Erstpartei interagiert wurde, haben kein Konzept von Erstparteispeicherung. Aus der Perspektive des Nutzers haben sie nur eine Drittparteibeziehung zu diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser feststellt, dass der Benutzer kürzlich nicht in einem Erstanbieter-Kontext mit dem eingebetteten Inhalt interagiert hat (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugang erhalten. Um dies zu handhaben, bietet die API das [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [sandbox token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) an. Das `<iframe>` muss dies enthalten, um Speicherzugangsanforderungen zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu erlauben, ein Skript auszuführen, um die API aufzurufen und es zu einem Ursprung auszuführen, der Cookies/Status haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieses Features kann durch eine auf Ihrem Server eingestellte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Positivlisten, Negativlisten, On-Device-Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder Einholung der expliziten Erlaubnis eines Benutzers.

## Browser-spezifische Unterschiede

Obwohl die API-Oberfläche identisch ist, sollten Websites, die die Storage Access API nutzen, Unterschiede in der Höhe und dem Umfang des Zugangs zu Drittanbieter-Cookies erwarten, je nach den Speicherzugangsrichtlinien der verschiedenen Browser.

### Chrome

- Cookies müssen explizit auf [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt sein, weil der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standardwert in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die Speicherzugangserlaubnisse laufen 30 Tage nach der Nutzung des Browsers ohne Benutzerinteraktion ab. Interaktionen mit dem eingebetteten Inhalt verlängern dieses Limit um weitere 30 Tage. Dies geschieht nicht, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, weil sich der Benutzer bereits auf der Seite befindet.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf dem Top-Level-Ursprung `foo.example` erhalten hat und der Benutzer innerhalb von weniger als 30 Tagen erneut eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` einbindet, hat der eingebettete Ursprung sofort dritten Anbieter Cookie Zugriff.
- Die Speicherzugangserlaubnisse laufen 30 Kalendertage nach Gewährung ab.

Dokumentation zur neuen Speicherzugangsrichtlinie von Firefox zum Blockieren von Tracking-Cookies beinhaltet [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs von Speicherzugangserlaubnissen.

### Safari

- Die Speicherzugangserlaubnisse laufen nach 30 Tagen ab, in denen der Browser ohne Benutzerinteraktion genutzt wurde. Ein erfolgreicher Einsatz der Storage Access API setzt diesen Zähler auf Null.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Code-Beispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Erlaubt Inhalten, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), den Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände anzufordern; gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Erweiterung zur Storage Access API, die es Top-Level-Sites ermöglicht, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten von einer anderen Seite im selben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) anzufordern. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktion wird auf das Versprechen übertragen, das von diesen Methoden zurückgegeben wird, was den Aufrufern ermöglicht, Aktionen durchzuführen, die Benutzerinteraktion erfordern, ohne dass ein zweiter Klick erforderlich ist. Zum Beispiel könnte ein Aufrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Funktionsname
  - : In unterstützenden Browsern kann damit abgefragt werden, ob Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, das heißt, einer anderen gleichseitigen Einbettung. Falls ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch aufgelöst.
- `Permissions.query()`, der `"top-level-storage-access"` Funktionsname {{experimental_inline}}
  - : Ein separater Funktionsname, der verwendet wird, um abzufragen, ob die Erlaubnis, auf Drittanbieter-Cookies zuzugreifen, bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, brauchen Sie `requestStorageAccessFor()` nicht erneut aufzurufen.

### Ergänzungen zu HTTP

#### Permissions-Policy

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}} Direktive kontrolliert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (d.h. in ein {{htmlelement("iframe")}} eingebettet), die Storage Access API verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

#### Speicherzugangs-Header

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugangsstatus" für den aktuellen Anforderungskontext an, der einer von `none`, `inactive` oder `active` ist.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine bestehende Erlaubnis für sicheren Zugriff aktivieren und die Anfrage mit Cookies wiederholen kann, oder eine Ressource mit Cookie-Zugriff laden kann, wenn er bereits eine aktivierte Erlaubnis hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
