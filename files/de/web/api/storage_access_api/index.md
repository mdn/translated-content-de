---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für Cross-Site-Inhalte, die in einem Drittanbieter-Kontext geladen werden (z. B. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) zu erlangen, auf die sie normalerweise nur in einem Erstpartei-Kontext (d. h. wenn sie direkt in einem Browser-Tab geladen werden) zugreifen könnten.

Die Storage Access API ist für Benutzeragenten relevant, die standardmäßig den Zugriff auf Drittanbieter-Cookies und den unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Anwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir trotz dieser Standardeinschränkungen ermöglichen möchten. Beispiele hierfür sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder die Speicherung von Benutzerdaten wie Standortdaten oder Anzeigeeinstellungen über verschiedene Websites hinweg.

Die API bietet Methoden, mit denen eingebettete Ressourcen überprüfen können, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und, falls nicht, den Zugriff beim Benutzeragenten anzufordern.

## Konzepte und Nutzung

Browser implementieren mehrere Speicherzugangsfunktionen und -richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherbereichs für jede Top-Level-Herkunft ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zum vollständigen Blockieren des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um Drittanbieter-Cookie- und unpartitionierten Zustand blockierende Funktionen und Richtlinien unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten nicht denselben Zugriff, den sie hätten, wenn sie in einem Erstparteien-Kontext geladen würden. Dies geschieht in guter Absicht – Browser-Anbieter möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele beinhalten, sie weniger anfällig dafür zu machen, dass ihre Aktivitäten über verschiedene Sites hinweg getrackt werden, und weniger anfällig für Exploits wie Cross-Site Request Forgery ({{glossary("CSRF")}}).

Es gibt jedoch legitime Anwendungen für eingebettete Cross-Site-Inhalte, die auf Drittanbieter-Cookies und unpartitionierten Zustand zugreifen, die durch die oben genannten Funktionen und Richtlinien behindert werden. Angenommen, Sie haben eine Reihe von verschiedenen Sites, die Zugriff auf unterschiedliche Produkte gewähren – `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen in verschiedene Länder-Domains für Lokalisierungszwecke aufteilen – `example.com`, `example.ua`, `example.br` usw. – oder auf andere Weise.

Sie könnten zugehörige Dienstsites haben, die Komponenten in alle anderen Sites einbetten, zum Beispiel um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstsites möchten ihren Zustand mit den Sites teilen, in die sie eingebettet sind, und zwar über Cookies. Sie können keine Erstpartei-Cookies teilen, da sie auf verschiedenen Domains liegen, und Drittanbieter-Cookies funktionieren nicht mehr in Browsern, die diese blockieren.

In solchen Situationen ermutigen Seitenbesitzer häufig die Benutzer, ihre Site als Ausnahme hinzuzufügen oder die Blockierungsrichtlinien für Drittanbieter-Cookies insgesamt zu deaktivieren. Benutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie erheblich lockern für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden und möglicherweise über alle Websites hinweg.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-Site-Inhalte können auf einer Frame-by-Frame-Basis über die Methode {{domxref("Document.requestStorageAccess()")}} uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände anfordern. Sie können auch überprüfen, ob sie bereits Zugriff haben, über die Methode {{domxref("Document.hasStorageAccess()")}}.

### Unpartitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu gewähren. Dies bedeutet Cookies, die auf herkömmliche Weise seit den frühen Tagen des Webs gespeichert werden – alle auf derselben Site gesetzten Cookies werden im selben Cookie-Behälter gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebetteten Ressourcen unter jeder Top-Level-Site ein einzigartiger Cookie-Speicherbereich zugewiesen wird, wodurch eine Verfolgung der Benutzer über diese Cookies über Sites hinweg unmöglich wird.

Browser haben verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, beispielsweise [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Zusammenhang mit der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die einen legitimen Bedarf an Zugriff auf Drittanbieter-Cookies oder unpartitionierten Zustand haben, können diesen Zugriff anfordern, indem sie die Storage Access API wie folgt verwenden:

1. Sie können die Methode {{domxref("Document.hasStorageAccess()")}} aufrufen, um zu prüfen, ob sie bereits den benötigten Zugriff haben.
2. Falls nicht, können sie den Zugriff über die Methode {{domxref("Document.requestStorageAccess()")}} anfordern.
3. Abhängig vom Browser wird der Benutzer leicht unterschiedlich gefragt, ob er dem anfordernden Embed Zugriff gewähren möchte:
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fragt Benutzer erst, nachdem eine Herkunft auf mehr als einer bestimmten Anzahl von Sites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben. Es wird jedoch automatisch Zugriff gewähren und Aufforderungen überspringen, wenn das eingebettete Inhalts- und Einbettungs-Site Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen, und [Browser-spezifische Varianten](#browser-spezifische_varianten) für einige browserspezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}}-basierende Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code für die Handhabung von Erfolgs- und Fehlschlägen auszuführen.
   - Modernes Spezifikationsverhalten besagt, dass der Zugriff _pro Frame_ gewährt wird — jeder separate Inhaltsembed hat standardmäßig seinen Drittanbieter-Cookie-Zugriff blockiert und muss `requestStorageAccess()` aufrufen, um den Zugriff zu aktivieren. Wenn ein Inhaltsembed Zugriff erhalten hat und gleichseitige Embeds dann `requestStorageAccess()` aufrufen, werden ihre Versprechen automatisch erfüllt. Sie müssen sich jedoch trotzdem entscheiden.
   - Die einzige Ausnahme vom "standardmäßig blockierten" Verhalten ist, wenn ein Inhaltsembed einen erfolgreichen `requestStorageAccess()` ausgeführt hat, sich aber dann eine Navigation derselben Herkunft durchführt (z. B. eine Neuladung von sich selbst). In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen wurde der Zugriff _pro Seite_ gewährt (Safari ist der einzige Browser, der noch dieses Modell verwendet). Wenn ein Embed Drittanbieter-Cookie-Zugriff über `requestStorageAccess()` erhielt, erhielten alle anderen gleichseitigen Embeds automatisch Zugriff. Dies war aus Sicherheitsgründen nicht wünschenswert — zum Beispiel, wenn `shop.example.com` `locator.users.com` einbettete, um Benutzern zu ermöglichen, ihre Standortinformationen während des Shoppings zu verwenden, und `locator.users.com` `requestStorageAccess()` aufrief, konnten `shop.example.com` und jede andere Site, die es einbettet, auf seine Cookies zugreifen, aber auch auf Cookies von `private.users.com`, die nicht zur Einbettung gedacht sind. [Lesen Sie mehr über die Gründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt wurde, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<top-level site, eingebettete site>` gespeichert. Beispielsweise, wenn die einbettende Site `embedder.com` ist und das Embed `locator.example.com`, wäre der Schlüssel `<embedder.com, example.com>`. Gleichseitige Embeds (`docs.example.com`, `profile.example.com`, usw.) könnten dann `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt werden, wie zuvor erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, eingebettete Herkunft>`, was bedeutete, dass gleichseitige, plattformübergreifende Embeds nicht dem Berechtigungsschlüssel entsprachen und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_versus_partitionierte_cookies) hat, wird die Storage Access API nicht benötigt, da das Teilen der Cookies standardmäßig kein Privatsphäre-Risiko birgt.

## Sicherheitsmaßnahmen

Mehrere unterschiedliche Sicherheitsmaßnahmen könnten verursachen, dass ein Aufruf von {{domxref("Document.requestStorageAccess()")}} fehlschlägt. Überprüfen Sie die folgende Liste, wenn Sie Schwierigkeiten haben, eine Anfrage zum Laufen zu bringen:

1. Der Aufruf muss mit einem Benutzerinteraktionsereignis ({{Glossary("transient activation")}}) wie einem Tippen oder Klicken in Verbindung stehen. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanforderungen belästigen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits erteilt wurde, z. B. durch eine andere gleichseitige Ressource, die `requestStorageAccess()` aufruft.
   - Der Aufrufer ein Dokument auf oberster Ebene oder gleichseitig mit dem Dokument auf oberster Ebene ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, mit denen noch nie als Erstpartei interagiert wurde, haben keinen Begriff von Erstpartei-Speicher. Aus der Perspektive des Benutzers haben sie nur eine Drittanbieter-Beziehung mit diesem Ursprung. Zugriffsanforderungen werden automatisch verweigert, wenn der Browser feststellt, dass der Benutzer nicht kürzlich in einem Erstpartei-Kontext mit den eingebetteten Inhalten interagiert hat (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, damit Speicherzugriffsanforderungen erfolgreich sein können, zusammen mit `allow-scripts` und `allow-same-origin`, um es einem Skript auszuführen zu erlauben, das die API aufrufen kann und in einer Herkunft ausgeführt werden kann, die Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert sein, die auf Ihrem Server eingestellt ist.

> [!NOTE]
> Das Dokument kann auch verpflichtet sein, zusätzliche browserspezifische Überprüfungen zu bestehen. Beispiele: Whitelists, Blacklists, On-Device-Einstufung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Glossary/Clickjacking)-Heuristiken oder Aufforderungen an den Benutzer zur ausdrücklichen Erlaubnis.

## Browser-spezifische Varianten

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API nutzen, mit Unterschieden in Bezug auf das Niveau und den Umfang des Drittanbieter-Cookie-Zugriffs rechnen, den sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in ihren Zugriffspolitiken.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) auf sich haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die Speicherung von Zugriffserlaubnissen wird nach 30 Tagen der Browsernutzung ohne Benutzerinteraktion schrittweise eingestellt. Interaktion mit den eingebetteten Inhalten verlängert dieses Limit um weitere 30 Tage. Dies tritt nicht auf, wenn {{domxref("Document.requestStorageAccessFor()")}} aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut in weniger als 30 Tagen einbettet, wird der eingebettete Ursprung Drittanbieter-Cookie-Zugriff sofort beim Laden haben.
- Die Speicherung von Zugriffserlaubnissen wird nach 30 Kalendertagen eingestellt.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox, um Tracking-Cookies zu blockieren, enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) des Umfangs von Speicherzugriffserlaubnissen.

### Safari

- Die Speicherung von Zugriffserlaubnissen wird nach 30 Tagen der Browsernutzung ohne Benutzerinteraktion schrittweise eingestellt. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für eine Implementierungsanleitung mit Codebeispielen.
- Siehe [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo.

## API-Methoden

- {{domxref("Document.hasStorageAccess()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der anzeigt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- {{domxref("Document.hasUnpartitionedCookieAccess()")}}
  - : Neuer Name für {{domxref("Document.hasStorageAccess()")}}.
- {{domxref("Document.requestStorageAccess()")}}
  - : Erlaubt es Inhalten, die in einem Drittanbieter-Kontext geladen sind (d. h. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und zurückgewiesen wird, wenn der Zugriff verweigert wurde.
- {{domxref("Document.requestStorageAccessFor()")}} {{experimental_inline}}
  - : Eine vorgeschlagene Erweiterung der Storage Access API, die es Top-Level-Sites ermöglicht, den Drittanbieter-Cookie-Zugriff im Namen eingebetteter Inhalte anzufordern, die von einer anderen Site im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und verweist wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktion propagiert zum Versprechen, das von diesen Methoden zurückgegeben wird, sodass die Aufrufer Aktionen, die Benutzerinteraktion erfordern, durchführen können, ohne einen zweiten Klick zu benötigen. Beispielsweise könnte ein Aufrufer ein Popup-Fenster aus dem gelösten Versprechen öffnen, ohne den Popup-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- {{domxref("Permissions.query()")}}, der `"storage-access"` Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob allgemein Drittanbieter-Cookie-Zugriff gewährt wurde, das heißt, zu einem anderen gleichseitigen Embed. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um zu prüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
