---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 4e011ae3e353d5500df26e3ca5af31c3c1cf037b
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit für cross-site Inhalte in einem Drittanbieter-Kontext (z. B. eingebettet in einem {{htmlelement("iframe")}}), Zugang zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitioniertem Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erlangen, auf die sie normalerweise nur in einem Erstanbieter-Kontext (also wenn direkt in einem Browser-Tab geladen) Zugriff hätten.

Die Storage Access API ist für Benutzeragenten relevant, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Anwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir weiterhin ermöglichen möchten, selbst bei diesen standardmäßigen Einschränkungen. Beispiele hierfür sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Anzeigepräferenzen über verschiedene Websites hinweg.

Die API stellt Methoden bereit, die eingebetteten Ressourcen ermöglichen, zu überprüfen, ob sie momentan Zugriff auf Drittanbieter-Cookies haben und, falls nicht, diesen Zugriff vom Benutzeragenten anzufordern.

## Konzepte und Nutzung

Browser implementieren mehrere Funktionen und Richtlinien zum Speicherzugriff, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines speziellen Cookie-Speicherplatzes für eingebettete Ressourcen unter jeder Top-Level-Herkunft ([partitionierte Cookies](#unpartitionierte_vs._partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um die Funktionen und Richtlinien zur Blockierung von Drittanbieter-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-site Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf denselben Zustand, den sie hätten, wenn sie in einem Erstanbieter-Kontext geladen werden. Dies geschieht aus gutem Grund — Browseranbieter wollen Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele hierfür sind die Verringerung der Anfälligkeit, ihre Aktivitäten über verschiedene Seiten hinweg verfolgt zu werden, und der Schutz vor Angriffen wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}).

Es gibt jedoch legitime Anwendungen, bei denen eingebettete Cross-site Inhalte auf Drittanbieter-Cookies und unpartitionierten Zustand zugreifen müssen, die durch die oben genannten Funktionen und Richtlinien unterbrochen werden. Angenommen, Sie haben eine Reihe verschiedener Websites, die Zugang zu verschiedenen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com`, und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen in verschiedenen Länderdomains zur Lokalisierung trennen — `example.com`, `example.ua`, `example.br`, etc. — oder auf andere Weise.

Sie könnten begleitende Dienstleistungsseiten mit Komponenten haben, die auf allen anderen Seiten eingebettet sind, zum Beispiel, um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) anzubieten. Diese Dienstleitungsseiten möchten ihren Zustand mit den eingebetteten Seiten über Cookies teilen. Sie können keine Erstanbieter-Cookies teilen, da sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies funktionieren nicht mehr in Browsern, die diese blockieren.

In solchen Situationen ermutigen Seitenbesitzer oft Benutzer, ihre Seite als Ausnahme hinzuzufügen oder die Drittanbieter-Cookie-Blockierungsrichtlinien vollständig zu deaktivieren. Benutzer, die weiterhin mit den Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinien für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, und möglicherweise über alle Websites hinweg erheblich lockern.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-site Inhalte können über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand auf Basis einzelner Frames anfordern.
Sie kann auch überprüfen, ob bereits Zugriff besteht, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [Storage Access Headers](/de/docs/Web/API/Storage_Access_API#storage_access_headers) sind eine HTTP-Erweiterung der API, die einen effizienteren Speicher-API-Workflow ermöglichen und auch dazu verwendet werden können, eine zuvor gewährte Speicherzugriffsgenehmigung für passive Ressourcen wie Bilder zu aktivieren.

### Unpartitionierte vs. partitionierte Cookies

Die Storage Access API wird nur benötigt, um den Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu ermöglichen!
Unpartitionierte Cookies sind solche, bei denen alle Cookies, die auf der gleichen Seite gesetzt werden, im gleichen Cookie-Behälter gespeichert werden — die traditionelle Methode seit den Anfängen des Webs.
Weil die Gefahr besteht, dass Daten, die für eine Seite bestimmt sind, an andere Seiten weitergegeben werden, blockieren Browser häufig das Senden unpartitionierter Drittanbieter-Cookies in Anfragen und erlauben keinen Zugriff auf sie in eingebetteten Kontexten.

Im Gegensatz dazu werden bei _partitionierten_ Cookies eingebetteten Ressourcen unter jeder Top-Level-Seite ein einzigartiger Cookie-Speicherplatz zugewiesen, der von dem anderer Seiten isoliert ist.
Da kein Privatsphäre-Risiko besteht, da es nicht möglich ist, Benutzer über partitionierte Cookies hinweg zu verfolgen, senden Browser partitionierte Cookies in Anfragen und stellen sie eingebetteten Ressourcen zur Verfügung.
Beachten Sie jedoch, dass, weil die Cookies nicht zwischen Seiten geteilt werden, sie auch nicht automatisch über Seiten hinweg synchronisiert werden.
Browser verfügen über verschiedene Mechanismen zur Partitionierung des Drittanbieter-Cookie-Zugriffs, z. B. [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Wie es funktioniert

Drittanbieter-Inhalte, die in einem {{htmlelement("iframe")}} eingebettet sind und Zugang zu Cookies oder anderem unpartitionierten Zustand benötigen, können Zugriff mit der Storage Access API wie folgt anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob die eingebetteten Inhalte bereits Zugriff auf unpartitionierte Cookies haben.
2. Falls nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die `storage-access` Berechtigung anzufordern.

   Je nach Browser wird der Benutzer auf unterschiedliche Weise gefragt, ob er der anfordernden Einbettung die Erlaubnis erteilen soll.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem eine Herkunft mehr als eine bestimmte Anzahl von Websites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
     Es wird jedoch automatisch Zugriff gewährt und Aufforderungen übersprungen, wenn der eingebettete Inhalt und die einbettende Seite Teil desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.

3. Die Erlaubnis wird gewährt oder verweigert, basierend darauf, ob die Inhalte alle Sicherheitsanforderungen erfüllen — siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen und [Browser-spezifische Varianten](#browser-spezifische_variationen) für einige browser-spezifische Sicherheitsanforderungen.
   Die {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` erlaubt es Ihnen, Code auszuführen, um Erfolgs- und Fehlerfälle zu verarbeiten.

   Sobald die Erlaubnis erteilt ist, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<top-level site, embedded site>` gespeichert.
   Zum Beispiel, wenn die einbettende Seite `embedder.com` ist und die Einbettung `locator.example.com` ist, wäre der Schlüssel `<embedder.com, example.com>`.

   Dies bedeutet, dass die Erlaubnis für den Zugriff auf unpartitionierte Cookies auf jede Seite der `example.com` Site oder jede ihrer Subdomains gewährt wird, die in jeder Seite der `embedder.com` Site eingebettet ist.
   Zum Beispiel, `docs.example.com`, `profile.example.com`, können jetzt `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt werden.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, embedded origin>`, was bedeutete, dass gleiche Seiteneinbettungen nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

4. Die Erlaubnis muss ausdrücklich für jeden _Kontext_ aktiviert werden.

   Wenn einer Einbettung die Erlaubnis erteilt wird, wird diese Erlaubnis auch für den aktuellen Kontext aktiviert.
   Andere Kontexte, wie neue Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}}-Elementen auf der Seite, haben standardmäßig ihren Zugriff auf Drittanbieter-Cookies blockiert.
   Das bedeutet, dass selbst wenn die Erlaubnis erteilt wird, die Seite geladen werden und `requestStorageAccess()` aufgerufen werden muss, um die Erlaubnis zu aktivieren.
   Wenn die Erlaubnis bereits erteilt wurde, erfordert ein Aufruf von `requestStorageAccess()` keine transiente Aktivierung und das Versprechen wird automatisch erfüllt.

   Die einzige Ausnahme von dem "standardmäßig blockierten" Verhalten ist, wenn eine Einbettung eine gleichherkömmliche Navigation durchführt, um sich selbst nach der Erteilung der Erlaubnis oder Aktivierung einer Erlaubnis neu zu laden.
   In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   Dies ermöglicht es der eingebetteten Ressource, sich neu zu laden und Zugriff auf ihre Cookies zu erlangen.

   > [!NOTE]
   > In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn eine Einbettung über `requestStorageAccess()` Zugriff auf Drittanbieter-Cookies erhielt, erhielten automatisch alle anderen gleichgesinnten Einbettungen Zugriff.
   > Dies war aus Sicherheitssicht kein wünschenswertes Verhalten — zum Beispiel, wenn `shop.example.com` `locator.users.com` einbettete, um Benutzern zu erlauben, ihre Standortinformationen beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufrief, `shop.example.com` und alle anderen Seiten, die es einbettete, Zugriff auf seine Cookies hätte, aber auch Zugriff auf Cookies von `private.users.com`, das nicht eingebettet werden sollte. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem eine Einbettung die Speicherzugriffserlaubnis aktiviert hat, sollte sie sich selbst neu laden.
   Der Browser wird die Ressource erneut mit Drittanbieter-Cookies anfordern und sie der eingebetteten Ressource zur Verfügung stellen, sobald sie geladen ist.

### Storage Access Headers

Die API erfordert, dass eine Ressource für jeden neuen Kontext `requestStorageAccess()` aufrufen muss, um sich für die Aktivierung der Speicherzugriffserlaubnis anzumelden, die bereits erteilt worden sein muss.
Dies wiederum bedeutet, dass die eingebettete Ressource zuerst ohne Cookies angefordert und geladen werden muss, damit sie die Methode aufrufen kann.

Die Storage Access Headers ermöglichen einen Workflow, bei dem der Server anfordern kann, dass die Erlaubnis für den Kontext aktiviert wird, was einen unnötigen zusätzlichen Ladevorgang der eingebetteten Ressource vermeidet, wenn die Erlaubnis bereits erteilt wurde.
Die Ressource muss jedoch noch geladen werden, um zum ersten Mal die Erlaubnis anzufordern.

Es gibt zwei Header:

- Der Browser fügt den {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header zu Anfragen hinzu, um den Speicherzugriffszustand des aktuellen Abrufkontexts anzuzeigen, wie z. B. ob die Erlaubnis aktiviert, erteilt oder nicht erteilt wurde.
- Abhängig vom Speicherzugriffszustand der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser zu bitten, die Erlaubnis für den Kontext zu aktivieren und die Anfrage mit Cookies neu zu versuchen (wodurch es vermieden wird, die Ressource laden zu müssen, um `requestStorageAccess()` aufzurufen, um dasselbe zu erreichen), oder die Erlaubnis zu aktivieren und die zurückgegebene Ressource zu laden.

Die Storage Access Headers können auch verwendet werden, um die Erlaubnis für passive Ressourcen, wie Bilder, zu aktivieren, vorausgesetzt, der Kontext hat bereits die Erlaubnis erhalten.
Dies könnte verwendet werden, um zum Beispiel verschiedene Bilder für verschiedene Benutzer, Zielgruppen oder Lokationen zu liefern.

Die Workflows sind im Abschnitt [Storage Access Header Sequences](#speicherzugriff_header-sequenzen) dargestellt.

### Anforderung/Antwort-Fluss

#### JavaScript-Sequenzen

Betrachten Sie das Beispiel einer Bibliothek, die in einem {{htmlelement("iframe")}} geladen wird und über eine Reihe von Websites hinweg geteilt werden muss und auf Anmeldedaten, die in unpartitionierten Cookies gespeichert sind, angewiesen ist.

Schauen wir uns zuerst den Fall an, in dem die Erlaubnis nicht erteilt wurde:

1. Der Browser fordert die Ressource an, ohne Drittanbieter-Cookies einzuschließen.
2. Der Server antwortet mit einer "Fallback"-Version des Inhalts, die nicht auf Anmeldedaten angewiesen ist und beim Laden keinen Zugriff auf seine Cookies hat.
   - Sobald die Ressource geladen ist, ruft sie `requestStorageAccess()` mit transiener Aktivierung auf, um die `storage-access` Erlaubnis anzufordern und zu aktivieren.
   - Wenn die Erlaubnis erteilt wird, wird die Ressource sich anschließend neu laden.

3. Der Browser fordert die Ressource erneut an, diesmal mit Drittanbieter-Cookies.
4. Die Antwort des Servers enthält eine "anmeldepflichtige" Version der Ressource.

Der Browser lädt die Ressource, die auf ihre eigenen Cookies zugreifen kann, weil sie eine aktivierte `storage-access` Erlaubnis hat.

![Storage API Workflow - ohne storage-access Erlaubnis](storage_api_no_permission.png)

Nun betrachten wir den Fall, in dem die Erlaubnis erteilt, aber nicht aktiviert wurde.
Dies würde passieren, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite auf derselben Seite einzubinden.

Der Workflow ist fast genau gleich, da die Ressource das erste Mal ohne Cookies geladen werden muss, und dann `requestStorageAccess()` aufrufen muss, um die Erlaubnis für den Kontext zu aktivieren.
In diesem Fall benötigt es jedoch keine transiente Aktivierung und kann beim Laden ausgeführt werden.

![Storage API Workflow - Aktiviere storage-access Erlaubnis](storage_api_permission.png)

#### Speicherzugriff Header-Sequenzen

Die Speicherzugriff Header ermöglichen einen verbesserten Workflow, der dem Server erlaubt, den Browser zu bitten, eine bereits erteilte Erlaubnis zu aktivieren und die Anfrage mit inkludierten Cookies zu wiederholen.
Dies vermeidet die Notwendigkeit, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Benutzer bereits die Erlaubnis erteilt hat.

> [!NOTE]
> Diese Header bieten keinen Mechanismus, um die Speicherzugriffserlaubnis überhaupt erstmalig zu erteilen.
> Die Erlaubnis muss immer von der eingebetteten Ressource mit einem Anruf von `requestStorageAccess()` mit transienter Aktivierung beantragt werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header wird zu Anfragen hinzugefügt, um den Speicherzugriffszustand des aktuellen Abrufkontexts anzugeben, wie ob die Erlaubnis aktiviert, erteilt oder nicht erteilt wurde.
Abhängig vom Speicherzugriffszustand der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser zu bitten, die Erlaubnis für den Kontext zu aktivieren und die Anfrage mit Cookies zu wiederholen.

Betrachten wir zunächst den Fall des Versuchs, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits die Erlaubnis hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzuzeigen, dass die Erlaubnis für den Kontext erteilt, aber inaktiv ist.
   - Die Anfrage wird auch den {{httpheader("Origin")}} Header enthalten, um dem Server zu helfen, zu entscheiden, ob die Erlaubnis aktiviert werden soll.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzuzeigen, dass der Browser die Erlaubnis aktivieren und die Anfrage mit Cookies wiederholen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} Header enthalten, da sie vom Wert von `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keinen Inhalt enthält.
3. Wenn der Browser die Anfrage wiederholt, fügt er `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, zusammen mit den Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, was dem Browser mitteilt, die neue Version der Bibliothek mit Zugang zu Drittanbieter-Cookies zu laden.

![Workflow der Storage Access Headers - Aktiviere storage-access Erlaubnis und erneut versuchen](storage_headers_activate_permission.png)

Der letzte Zustand ist zu berücksichtigen, wenn das Laden einer eingebetteten Ressource, für die die Erlaubnis nicht erteilt wurde:

> [!NOTE]
> Da wir die Header nicht verwenden können, um die Erlaubnis zu erteilen, müssen wir die Ressource ohne Cookies laden, damit sie die Erlaubnis anfordern kann.
> Dies ist die gleiche Sequenz, als wenn die Header nicht angewendet wurden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzuzeigen, dass die Erlaubnis nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die beim Laden die Erlaubnis für den sicheren Zugriff mit transienter Aktivierung anfordert.
   Der `Activate-Storage-Access` Header ist nicht in der Antwort enthalten, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Erlaubnis erteilt hat (und dadurch aktiviert), lädt die Einbettung sich selbst neu.

3. Der Browser fügt `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, um anzuzeigen, dass der Kontext eine aktivierte `storage-access` Erlaubnis hat, und schließt die Drittanbieter-Cookies ein.
4. Der Server antwortet mit `Activate-Storage-Access: load`, was dem Browser mitteilt, die neue Version der Bibliothek mit Zugang zu Drittanbieter-Cookies zu laden.

![Workflow der Storage Access Headers - ohne Speicherzugriffserlaubnis](storage_headers_no_permission.png)

## Sicherheitsüberlegungen

Mehrere verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt.
Überprüfen Sie die folgende Liste, wenn Sie Schwierigkeiten haben, eine Anfrage zum Arbeiten zu bringen:

1. Die Genehmigungsanfrage muss mit einer Benutzeraktion ({{Glossary("transient_activation", "transient activation")}}) wie einem Tippen oder Klicken verknüpft sein.
   Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Anfragen überfluten.
   Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API bereits einem anderen Kontext mit dem selben `<top-level site, embedded site>` Schlüssel erteilt wurde.
   - Der Anrufer ein Top-Level-Dokument oder gleichseitig zum Top-Level-Dokument ist.
     In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null` Origin haben.
3. Herkunfts, die nie als Erstanbieter interagiert wurden, haben keinen Begriff von Erstanbieter-Speicherung. Aus der Benutzerperspektive haben sie nur eine Drittanbieter-Beziehung zu dieser Herkunft. Zugriffsanfragen werden automatisch verweigert, wenn der Browser erkennt, dass der Benutzer nicht kürzlich (in Firefox bedeutet "kürzlich" innerhalb der letzten 30 Tage) mit dem eingebetteten Inhalt in einem Erstanbieter-Kontext interagiert hat.
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten.
   Um dies zu behandeln, bietet die API das [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [sandbox token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox).
   Das `<iframe>` muss dies enthalten, um Speicherzugriffsanfragen zu aktivieren, zusammen mit `allow-scripts` und `allow-same-origin`, die es ermöglichen, ein Script auszuführen, um die API aufzurufen und es in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine vom Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

> [!NOTE]
> Das Dokument kann auch erforderlich sein, zusätzliche browser-spezifische Überprüfungen zu bestehen. Beispiele: Erlaubnislisten, Sperrlisten, Geräteeinstufung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder die Aufforderung an den Benutzer zur expliziten Genehmigung.

## Browser-spezifische Variationen

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Niveau und Umfang des Zugriffs auf Drittanbieter-Cookies erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in ihren Speicherzugriffsrichtlinien.

### Chrome

- Cookies müssen [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) explizit auf sie gesetzt haben, weil der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die Speicherzugriffe laufen aus, nachdem 30 Tage Browsernutzung ohne Benutzerinteraktion vergangen sind. Interaktion mit dem eingebetteten Inhalt verlängert diese Grenze um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, weil der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits auf der Top-Level-Herkunft `foo.example` Zugriff auf Drittanbieter-Cookies erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die wieder eine Seite von `tracker.example` einbettet, hat der eingebettete Ursprung sofort Zugriff auf Drittanbieter-Cookies, wenn er weniger als 30 Tage einlädt.
- Die Speicherzugriffe werden nach Ablauf von 30 Kalendertagen ausgeschöpft.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffe laufen aus, nachdem 30 Tage Browsernutzung ohne Benutzerinteraktion vergangen sind. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Codebeispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Erlaubt Inhalten, die in einem Drittanbieter-Kontext geladen werden (z. B. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Eine vorgeschlagene Erweiterung der Storage Access API, die es Top-Level-Sites erlaubt, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten anzufordern, die von einer anderen Site im selben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzeraktionen propagieren zum Versprechen, das von diesen Methoden zurückgegeben wird, wodurch die Anrufer Aktionen ausführen können, die eine Benutzerinteraktion erfordern, ohne einen zweiten Klick zu erfordern. Beispielsweise könnte ein Anrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen öffnen, ohne die Pop-up-Blockierung von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Funktionsname
  - : In unterstützenden Browsern kann damit angefragt werden, ob Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, das heißt, zu einer anderen gleichartigen Einbettung. Falls ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch aufgelöst.
- `Permissions.query()`, der `"top-level-storage-access"` Funktionsname {{experimental_inline}}
  - : Ein separater Funktionsname, der verwendet wird, um zu überprüfen, ob die Erlaubnis, auf Drittanbieter-Cookies zuzugreifen, bereits über `requestStorageAccessFor()` gewährt wurde. Wenn dies der Fall ist, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

### Ergänzungen zu HTTP

#### Berechtigungspolitik

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}} Direktive kontrolliert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (z. B. eingebettet in einem {{htmlelement("iframe")}}), die Storage Access API verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

#### Speicherzugriff Headers

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffstatus" für den aktuellen Anforderungskontext an, der einer von `none`, `inactive`, oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine bestehende Erlaubnis für sicheren Zugriff aktivieren und die Anforderung mit Cookies erneut versuchen oder eine Ressource mit Cookie-Zugang laden kann, wenn er bereits eine aktivierte Erlaubnis hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
