---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 1296e665fd82a80bb17123725dcbf1f08b89ab4e
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit für Inhalte von Drittanbietern, die im Kontext von Drittanbietern geladen werden (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die sie typischerweise nur in einem Erstanbieter-Kontext Zugriff hätten (d.h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Verwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir weiterhin ermöglichen möchten, selbst wenn diese standardmäßigen Einschränkungen bestehen. Beispiele hierfür sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Anzeigepräferenzen auf verschiedenen Websites.

Die API bietet Methoden, mit denen eingebettete Ressourcen überprüfen können, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben und, falls nicht, Zugriff beim Benutzeragenten anfordern können.

## Konzepte und Nutzung

Browser implementieren mehrere Speicherzugriffs-Features und -politiken, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_gegenüber_partitionierten_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen im Drittanbieter-Kontext geladen werden.

Die Semantik rund um Drittanbieter-Cookie- und unpartitionierten Zustandblockierungs-Features und -politiken unterscheidet sich von Browser zu Browser, aber die Grundfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf denselben Zustand, auf den sie Zugriff hätten, wenn sie in einem Erstanbieter-Kontext geladen worden wären. Dies geschieht mit guter Absicht — Browseranbieter wollen Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Benutzer besser zu schützen. Beispiele hierfür sind, dass sie weniger anfällig dafür sind, dass ihre Aktivitäten über verschiedene Seiten hinweg verfolgt werden, und weniger anfällig für Exploits wie Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}).

Es gibt jedoch legitime Verwendungen für eingebettete Cross-Site-Inhalte, die Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand benötigen und die oben genannten Features und Politiken sind dafür bekannt, solche Verwendungen zu stören. Angenommen, Sie haben eine Reihe von verschiedenen Websites, die Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedenen Landesdomains für Lokalisierungszwecke separieren — `example.com`, `example.ua`, `example.br` usw. — oder in irgendeiner anderen Weise.

Sie könnten begleitende Dienstprogramme haben, die in alle anderen Websites eingebettet sind, zum Beispiel, um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstprogramme möchten ihren Zustand mittels Cookies mit den Seiten teilen, in die sie eingebettet sind. Sie können keine Erstpartei-Cookies teilen, weil sie auf unterschiedlichen Domains sind, und Drittanbieter-Cookies funktionieren nicht mehr in Browsern, die diese blockieren.

In solchen Situationen ermutigen Website-Besitzer oft die Nutzer, ihre Seite als Ausnahme hinzuzufügen oder die Drittanbieter-Cookie-Blockierungsrichtlinien vollständig zu deaktivieren. Nutzer, die weiterhin mit den Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinien für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, und möglicherweise auf allen Websites erheblich lockern.

Die Storage Access API ist dazu gedacht, dieses Problem zu lösen; eingebettete Cross-Site-Inhalte können uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand auf einer Frame-für-Frame-Basis über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern. Sie können auch überprüfen, ob sie bereits Zugriff haben, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [Speicherzugriffsheader](#speicherzugriffs-kopfzeilen) sind eine HTTP-Erweiterung der API, die einen effizienteren Speicher-API-Arbeitsablauf ermöglicht und auch verwendet werden kann, um eine zuvor gewährte Speicherzugriffsberechtigung für passive Ressourcen, wie Bilder, zu aktivieren.

### Unpartitionierte gegenüber partitionierten Cookies

Die Storage Access API ist nur erforderlich, um den Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu ermöglichen! Unpartitionierte Cookies sind solche, bei denen alle Cookies auf derselben Seite im selben Cookie-Glas gespeichert werden — der traditionelle Weg seit dem frühen Web. Da die Gefahr besteht, dass Daten, die für eine Website bestimmt sind, an andere Websites offenbart werden, blockieren Browser normalerweise das Senden von unpartitionierten Drittanbieter-Cookies in Anfragen und ermöglichen keinen Zugriff auf sie im eingebetteten Kontext.

Im Gegensatz dazu sind _partitionierte_ Cookies solche, bei denen eingebettete Ressourcen unter jeder Top-Level-Website einen einzigartigen Cookie-Speicherplatz erhalten, der von denen anderer Websites isoliert ist. Da kein Datenschutzrisiko besteht, weil es nicht möglich ist, Benutzer über verschiedene Websites hinweg über partitionierte Cookies zu verfolgen, senden Browser partitionierte Cookies in Anfragen und machen sie für eingebettete Ressourcen verfügbar. Beachten Sie jedoch, dass, da die Cookies nicht zwischen den Websites geteilt werden, sie auch nicht automatisch über Websites hinweg synchronisiert werden. Browser haben verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Wie es funktioniert

In einem {{htmlelement("iframe")}} eingebettete Drittanbieter-Inhalte, die auf Cookies oder andere unpartitionierte Zustände zugreifen müssen, können über die Storage Access API wie folgt Zugriff anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob die eingebetteten Inhalte bereits Zugriff auf unpartitionierte Cookies haben.
2. Falls nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die Berechtigung `storage-access` anzufordern.

   Abhängig vom Browser wird der Benutzer auf geringfügig unterschiedliche Weise gefragt, ob die Erlaubnis für das anfordernde Embed erteilt werden soll.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem ein Ursprung auf mehr als einer Schwellenanzahl von Websites Speicherzugriff angefordert hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
     Es wird jedoch automatisch Zugriff gewähren und Eingabeaufforderungen überspringen, wenn die eingebetteten Inhalte und die einbettende Website Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.

3. Die Berechtigung wird erteilt oder abgelehnt, basierend darauf, ob die Inhalte alle Sicherheitsanforderungen erfüllen — siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen und [Browser-spezifische Variationen](#browser-spezifische_variationen) für einige browser-spezifische Sicherheitsanforderungen.
   Die {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code zur Handhabung von Erfolgs- und Fehlerszenarien auszuführen.

   Sobald die Berechtigung erteilt wurde, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<top-level site, embedded site>` gespeichert.
   Zum Beispiel, wenn die einbettende Seite `embedder.com` ist und das Embed `locator.example.com` ist, wäre der Schlüssel `<embedder.com, example.com>`.

   Das bedeutet, dass die Berechtigung für den unpartitionierten Cookie-Zugriff für jede Seite auf der `example.com`-Seite oder für jede ihrer Subdomains erteilt wird, die in jede Seite auf der `embedder.com`-Seite eingebettet ist.
   Zum Beispiel können `docs.example.com`, `profile.example.com` jetzt `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, embedded origin>`, was bedeutete, dass dieselben, seitenübergreifendes Origin-Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den ganzen Prozess separat durchlaufen mussten.

4. Die Berechtigung muss für jeden _Kontext_ explizit aktiviert werden.

   Wenn einem Embed die Berechtigung erteilt wird, wird diese Berechtigung auch für den aktuellen Kontext aktiviert.
   Andere Kontexte, wie neue Browsertabs oder Inhalte in anderen {{htmlelement("iframe")}}-Elementen auf der Seite, haben jedoch standardmäßig den Zugang zu Drittanbieter-Cookies blockiert.
   Das bedeutet, dass selbst wenn die Berechtigung erteilt wird, die Seite geladen werden und `requestStorageAccess()` aufgerufen werden muss, um die Berechtigung zu aktivieren.
   Wenn die Berechtigung bereits erteilt wurde, erfordert ein Aufruf von `requestStorageAccess()` keine vorübergehende Aktivierung und das Versprechen erfüllt sich automatisch.

   Die einzige Ausnahme von der "standardmäßig blockiert"-Verhaltensweise ist, wenn ein Embed nach Erteilung oder Aktivierung einer Berechtigung eine gleichoriginige Navigation durchführt, um sich selbst neu zu laden.
   In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   Dies ermöglicht es der eingebetteten Ressource, sich selbst neu zu laden und Zugriff auf ihre Cookies zu erhalten.

   > [!NOTE]
   > In älteren Spezifikationsversionen war der Zugriff _seitenweise_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed über `requestStorageAccess()` Zugriff auf Drittanbieter-Cookies erhielt, erhielten alle anderen dieselben Embeds automatisch Zugriff.
   > Dies war aus sicherheitstechnischer Sicht kein wünschenswertes Verhalten — zum Beispiel, wenn `shop.example.com` `locator.users.com` eingebettet hat, um Benutzern zu ermöglichen, ihre Standortinfos beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufgerufen hat, würde `shop.example.com` und jede andere eingebettete Seite Zugriff auf seine Cookies, aber auch auf Cookies von `private.users.com`, erhalten, die nicht eingebettet werden sollten. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem ein Embed die Speicherzugriffsberechtigung aktiviert hat, sollte es sich selbst neu laden.
   Der Browser wird die Ressource mit enthaltenen Drittanbieter-Cookies erneut anfordern und sie der eingebetteten Ressource zur Verfügung stellen, sobald sie geladen wurde. Die Cross-Origin-Anfragen des Embeds folgen der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy), daher werden Drittanbieter-Cookies nur bei Anfragen an die genaue Origin der eingebetteten Ressource gesendet. Andere Ursprünge innerhalb derselben Website, die auf Drittanbieter-Cookies zugreifen möchten, müssen die Speicherzugriffsberechtigung separat aktivieren.

### Speicherzugriffs-Kopfzeilen

Die API erfordert, dass eine Ressource `requestStorageAccess()` für jeden neuen Kontext aufruft, um sich für die Aktivierung der Speicherzugriffsberechtigung anzumelden, die bereits gewährt worden sein muss.
Das bedeutet wiederum, dass die eingebettete Ressource ohne Cookies und geladen angefordert werden muss, sodass sie die Methode aufrufen kann.

Die Speicherzugriffs-Kopfzeilen ermöglichen einen Arbeitsablauf, bei dem der Server anfordern kann, dass die Berechtigung für den Kontext aktiviert wird, wodurch ein unnötiger zusätzlicher Ladevorgang der eingebetteten Ressource vermieden wird, wenn die Berechtigung bereits gewährt wurde.
Die Ressource muss immer noch geladen werden, um die Berechtigung beim ersten Mal anzufordern.

Es gibt zwei Kopfzeilen:

- Der Browser fügt der Anfrage die {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Kopfzeile hinzu, um den Speicherzugriffsstatus des aktuellen Abrufkontexts anzugeben, wie z.B. ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde.
- Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einer {{HTTPHeader("Activate-Storage-Access")}}-Kopfzeile antworten, um zu fordern, dass der Browser die Berechtigung für den Kontext aktiviert und die Anfrage mit Cookies erneut versucht (um zu vermeiden, dass die Ressource geladen wird, sodass sie `requestStorageAccess()` aufrufen kann, um dasselbe zu erreichen), oder die Berechtigung aktiviert und die zurückgegebene Ressource lädt.

Die Speicherzugriffs-Kopfzeilen können auch verwendet werden, um die Berechtigung für passive Ressourcen, wie Bilder, zu aktivieren, sofern der Kontext bereits die Berechtigung erhalten hat.
Dies könnte zum Beispiel verwendet werden, um verschiedene Bilder für verschiedene Nutzer, demografische Gruppen oder Regionen bereitzustellen.

Die Arbeitsabläufe sind in den [Speicherzugriffs-Kopfzeilen-Sequenzen](#storage_access_headers_sequences) Abschnitt gezeigt.

### Anfrage-/Antwortfluss

#### JavaScript-Sequenzen

Betrachten Sie das Beispiel einer Bibliothek, die in einem {{htmlelement("iframe")}} geladen wird und die über eine Reihe von Websites geteilt werden muss und die auf Anmeldeinformationen in unpartitionierten Cookies basiert.

Zuerst betrachten wir den Fall, in dem keine Berechtigung erteilt wurde:

1. Der Browser fordert die Ressource ohne die Einbeziehung von Drittanbieter-Cookies an.
2. Der Server antwortet mit einer "Fallback"-Version der Inhalte, die nicht auf Anmeldedaten basiert und wenn geladen, keinen Zugriff auf seine Cookies hat.
   - Nachdem sie geladen wurde, ruft die Ressource `requestStorageAccess()` mit temporärer Aktivierung auf, um die `storage-access`-Berechtigung anzufordern und zu aktivieren.
   - Wenn die Berechtigung erteilt wird, lädt sich die Ressource erneut.

3. Der Browser fordert die Ressource erneut an, diesmal inklusive Drittanbieter-Cookies.
4. Die Serverantwort enthält eine "Anmeldeinformation"-Version der Ressource.

Der Browser lädt die Ressource, die Zugang zu ihren eigenen Cookies hat, da sie eine aktivierte `storage-access`-Berechtigung hat.

![Storage-API-Arbeitsablauf - ohne Speicherzugriffs-Berechtigung](storage_api_no_permission.png)

Jetzt betrachten wir den Fall, in dem eine Berechtigung erteilt, aber nicht aktiviert wurde.
Dies würde passieren, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen würden, dieselbe Ressource von einer anderen Seite innerhalb derselben Website einzubetten.

Der Arbeitsablauf ist fast genau derselbe, weil die Ressource immer noch das erste Mal ohne Cookies geladen werden muss, und sie dann `requestStorageAccess()` aufrufen muss, um die Berechtigung für den Kontext zu aktivieren.
In diesem Fall benötigt sie jedoch keine temporäre Aktivierung und kann beim Laden ausgeführt werden.

![Storage-API-Arbeitsablauf - Speicherzugriffs-Berechtigung aktivieren](storage_api_permission.png)

#### Speicherzugriffs-Kopfzeilen-Sequenzen

Die Speicherzugriffs-Kopfzeilen ermöglichen einen verbesserten Arbeitsablauf, der es dem Server ermöglicht, zu fordern, dass der Browser eine erteilte Berechtigung aktiviert und die Anfrage mit inkludierten Cookies erneut ausführt.
Dies verhindert die Notwendigkeit, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Nutzer die Berechtigung bereits erteilt hat.

> [!NOTE]
> Diese Kopfzeilen bieten keinen Mechanismus, um die Speicherzugriffsberechtigung zu erteilen.
> Die Berechtigung muss immer von der eingebetteten Ressource mittels `requestStorageAccess()` mit temporärer Aktivierung angefordert werden.

Die {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Kopfzeile wird zu Anfragen hinzugefügt, um den Speicherzugriffsstatus des aktuellen Abrufkontexts anzugeben, wie z. B., ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde.
Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einer {{HTTPHeader("Activate-Storage-Access")}}-Kopfzeile antworten, um zu fordern, dass der Browser die Berechtigung für den Kontext aktiviert und die Anfrage mit Cookies erneut durchführt.

Zuerst betrachten wir den Fall, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits die Berechtigung erteilt hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzugeben, dass die Berechtigung erteilt, aber für den Kontext inaktiv ist.
   - Die Anfrage wird auch die {{httpheader("Origin")}}-Kopfzeile enthalten, um dem Server zu helfen, zu entscheiden, ob er die Berechtigung aktivieren möchte.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzugeben, dass der Browser die Berechtigung aktivieren und die Anfrage mit Cookies erneut versuchen sollte.
   - Die Antwort sollte auch die {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}}-Kopfzeile enthalten, da sie vom Wert von `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keine Inhalte enthält.
3. Wenn der Browser die Anfrage erneut versucht, fügt er die Kopfzeile `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu sowie die Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, welches dem Browser mitteilt, die neue Version der Bibliothek mit Zugriff auf Drittanbieter-Cookies zu laden.

Der letzte Zustand, den wir betrachten, ist das Laden einer eingebetteten Ressource, für die keine Berechtigung erteilt wurde:

> [!NOTE]
> Da wir die Kopfzeilen nicht verwenden können, um Berechtigungen zu erteilen, müssen wir die Ressource ohne Cookies laden, damit sie die Berechtigung anfordern kann.
> Dies ist dieselbe Sequenz, als ob die Kopfzeilen nicht angewendet wurden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzugeben, dass keine Berechtigung erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die bei ihrer Lade die Berechtigung für den sicheren Zugriff mit temporärer Aktivierung anfordert.
   Die `Activate-Storage-Access`-Kopfzeile ist nicht in der Antwort enthalten, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Berechtigung erteilt hat (und damit aktiviert), lädt sich das Embed erneut.

3. Der Browser fügt die Kopfzeile `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, um anzuzeigen, dass der Kontext eine aktivierte `storage-access`-Berechtigung hat, und enthält die Drittanbieter-Cookies.
4. Der Server antwortet mit `Activate-Storage-Access: load`, das dem Browser mitteilt, die neue Version der Bibliothek mit Zugriff auf Drittanbieter-Cookies zu laden.

## Sicherheitsüberlegungen

Mehrere verschiedene Sicherheitsmaßnahmen können dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die untenstehende Liste, wenn Sie Probleme haben, eine Anfrage zum Laufen zu bringen:

1. Die Berechtigungsanfrage muss mit einem Benutzerinteraktionsereignis ({{Glossary("transient_activation", "transient activation")}}) wie einem Tippen oder Klick verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder den Nutzer mit übermäßigen Zugriffsanfragen überfluten.
   Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API einem anderen Kontext mit demselben `<top-level site, embedded site>`-Schlüssel bereits erteilt wurde.
   - Der Aufrufer ein oberstes Dokument ist oder dasselbe Herkunftsland wie das oberste Dokument aufweist.
     In solchen Fällen kann `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das oberste Dokument dürfen keine `null`-Herkunft haben.
3. Ursprünge, mit denen noch nie als Erstparteien interagiert wurde, haben keinen Begriff des Speicherorts von Erstparteien. Aus der Perspektive des Benutzers haben sie nur eine Drittparteibeziehung zu diesem Ursprüng. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer in letzter Zeit nicht mit den eingebetteten Inhalten als Erstparteikontext interagiert hat (in Firefox bedeutet "in letzter Zeit" innerhalb von 30 Tagen).
4. Das Dokumentenfenster muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig nicht für Speicherzugriff berechtigt werden. Um dies zu handhaben, bietet die API das [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) an. Das `<iframe>` muss dies enthalten, um Speicherzugriffsanfragen zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um es auszuführen, um ein Skript aufzurufen und es in einer Origin auszuführen, die Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Verwendung dieses Features kann durch ein {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browser-spezifische Prüfungen bestehen. Beispiele: Erlaubnislisten, Sperrlisten, Klassifizierungen auf dem Gerät, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Anfordern einer expliziten Erlaubnis des Nutzers.

## Browser-spezifische Variationen

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Umfang und der Ausdehnung des Zugriffs auf Drittanbieter-Cookies erwarten, die sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in ihren Speicherzugriffspolitiken.

### Chrome

- Cookies müssen explizit auf [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt werden, weil der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Gewährung des Speicherauszugs wird ausgemustert, nachdem 30 Tage der Browsernutzung ohne Benutzerinteraktion vergangen sind. Interaktion mit den eingebetteten Inhalten verlängert diese Grenze um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat und der Nutzer eine Seite von `foo.example` besucht, die erneut eine Seite von `tracker.example` einbettet, wird der eingebettete Ursprung sofortigen Drittanbieter-Cookie-Zugriff beim Laden haben, wenn dies innerhalb von weniger als 30 Tagen geschieht.
- Die Gewährung des Speicherauszugs wird ausgemustert, nachdem 30 Kalendertage vergangen sind.

Dokumentation zur neuen Speicherzugriffspolitik von Firefox zur Blockierung von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Gewährung von Speicherzugriff.

### Safari

- Die Gewährung des Speicherauszugs wird ausgemustert, nachdem 30 Tage der Browsernutzung ohne Benutzerinteraktion vergangen sind. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.
- Nachdem ein Embed die Speicherzugriffsberechtigung aktiviert und sein Inhalt erneut angefordert wurde, werden Drittanbieter-Cookies mit Anfragen an die _Seite_ der eingebetteten Ressource gesendet, nicht an die Origin. Safari verwendet immer noch ein älteres Design, das sich nicht an die Same-Origin-Policy hält.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für eine Implementierungsanleitung mit Codebeispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem booleschen Wert auflöst, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es Inhalten, die im Drittanbieter-Kontext geladen werden (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn der Zugriff gewährt wurde, und sich ablehnt, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Vorschlag zur Erweiterung der Storage Access API, der es Top-Level-Websites ermöglicht, Drittanbieter-Cookie-Zugriff im Namen eingebetteter Inhalte anzufordern, die von einer anderen Website im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn der Zugriff gewährt wurde, und sich ablehnt, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktionen propagieren sich zu dem von diesen Methoden zurückgegebenen Versprechen, sodass die Aufrufer Aktionen ausführen können, die eine Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Ein Anrufer könnte beispielsweise ein Pop-up-Fenster aus dem gelösten Versprechen öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"`-Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob der Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, also an eine andere, dieselbe Eingebettete. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen und das Versprechen wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"`-Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um abzufragen, ob eine Berechtigung für den Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

### Ergänzungen zu HTTP

#### Berechtigungsrichtlinie

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}}-Richtlinie steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die Speicherzugriffs-API verwenden darf, um Zugriff auf unpartitionierte Cookies zu beantragen.

#### Speicherzugriffs-Kopfzeilen

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffsstatus" für den aktuellen Anforderungskontext an, der einer von `none`, `inactive` oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine vorhandene Berechtigung für den sicheren Zugriff aktivieren und die Anfrage mit Cookies erneut durchführen kann, oder eine Ressource mit Cookie-Zugriff laden kann, wenn er bereits eine aktivierte Berechtigung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
