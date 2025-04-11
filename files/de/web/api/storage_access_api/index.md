---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit, dass plattformübergreifende Inhalte, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und einen [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) erhalten können, auf die sie typischerweise nur in einem Erstanbieter-Kontext (d.h. wenn sie direkt in einem Browser-Tab geladen werden) Zugriff hätten.

Die Storage Access API ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern). Es gibt legitime Verwendungszwecke für Drittanbieter-Cookies und unpartitionierten Zustand, die wir weiterhin ermöglichen möchten, auch wenn diese Standardbeschränkungen bestehen. Zu den Beispielen gehören Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Ansichtspräferenzen über verschiedene Websites hinweg.

Die API bietet Methoden, mit denen eingebettete Ressourcen prüfen können, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und falls nicht, Zugriffsanfragen an den Benutzeragenten stellen können.

## Konzepte und Anwendung

Browser implementieren mehrere Speicherzugriffsmerkmale und -richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem obersten Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um Funktionen und Richtlinien zur Blockierung von Drittanbieter-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Plattformübergreifende Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf den gleichen Zustand, auf den sie zugreifen könnten, wenn sie in einem Erstanbieter-Kontext geladen werden. Dies geschieht in guter Absicht – Browseranbieter möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Benutzer besser zu schützen. Beispiele dafür sind, sie weniger anfällig für die Nachverfolgung ihrer Aktivität auf verschiedenen Websites zu machen und sie weniger anfällig für Angriffe wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) zu machen.

Es gibt jedoch legitime Verwendungszwecke für die Nutzung eingebetteter plattformübergreifender Inhalte, um auf Drittanbieter-Cookies und unpartitionierten Zustand zuzugreifen, die durch die oben genannten Funktionen und Richtlinien bekanntermaßen unterbrochen werden. Nehmen wir an, Sie verfügen über eine Reihe verschiedener Websites, die Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedene Länder-Domains für Lokalisierungszwecke aufteilen — `example.com`, `example.ua`, `example.br` usw. — oder auf eine andere Weise.

Sie könnten begleitende Nutzseiten mit Komponenten haben, die in allen anderen Sites eingebettet sind, beispielsweise um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Nutzsites möchten ihren Zustand über Cookies mit den eingebetteten Sites teilen. Sie können keine Erstanbieter-Cookies teilen, weil sie sich auf unterschiedlichen Domains befinden, und Drittanbieter-Cookies funktionieren in Browsern, die sie blockieren, nicht mehr.

In solchen Situationen ermutigen Site-Besitzer oft die Benutzer, ihre Site als Ausnahme hinzuzufügen oder die Richtlinien zur Blockierung von Drittanbieter-Cookies vollständig zu deaktivieren. Benutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden und möglicherweise über alle Websites hinweg gehen, erheblich lockern.

Die Storage Access API ist dazu gedacht, dieses Problem zu lösen; eingebettete plattformübergreifende Inhalte können auf einer Frame-für-Frame-Basis über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) unbeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anfordern. Sie können auch überprüfen, ob sie bereits Zugriff haben, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

### Unpartitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu gewähren. Dies bedeutet Cookies, die auf traditionelle Weise seit den frühen Tagen des Webs gespeichert wurden — alle Cookies, die auf derselben Site gesetzt wurden, werden im gleichen Cookie-Behälter gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder obersten Site einen einzigartigen Cookie-Speicherplatz erhalten, wodurch eine Benutzerverfolgung über diese Cookies hinweg unmöglich wird.

Browser verfügen über verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, beispielsweise [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die einen legitimen Bedarf an Drittanbieter-Cookies oder unpartitioniertem Zustandszugriff haben, können den Zugriff über die Storage Access API wie folgt anfordern:

1. Es kann die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob es bereits über den benötigten Zugriff verfügt.
2. Falls nicht, kann es den Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.
3. Abhängig vom Browser wird der Benutzer auf unterschiedliche Weise gefragt, ob er dem anfordernden Frame Zugriff gewähren möchte.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer erst dann auf, nachdem ein Ursprung Speicherzugriff auf mehr als einer Schwellenzahl von Websites angefordert hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte, die zuvor keinen Speicherzugriff erhalten haben. Es gewährt jedoch automatisch Zugriff und überspringt Eingabeaufforderungen, wenn eingebettete Inhalte und einbettende Site Teil derselben [bezogenen Website-Gruppe](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browserspezifische Variationen](#browserspezifische_variationen) für einige browserspezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}} basierende Architektur von `requestStorageAccess()` ermöglicht das Ausführen von Code zur Handhabung von Erfolgs- und Fehlerszenarien.
   - Das Verhalten gemäß moderner Spezifikationen diktiert, dass der Zugriff _pro Frame_ gewährt wird — jeder separate Inhaltsembed hat standardmäßig den Zugriff auf Drittanbieter-Cookies gesperrt und muss `requestStorageAccess()` aufrufen, um sich anzumelden und Zugriff zu erhalten. Wenn ein Inhalteinbett den Zugriff erhalten hat und gleichseitige Einbettungen dann `requestStorageAccess()` aufrufen, werden ihre Promises automatisch erfüllt. Sie müssen sich jedoch dennoch anmelden.
   - Die einzige Ausnahme vom "standardmäßig gesperrt" Verhalten ist, wenn ein Inhalteinbett eine erfolgreiche `requestStorageAccess()` ausführt, dann jedoch eine gleichursprüngige Navigation durchführt (z. B. sich selbst neu lädt). In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen wurde der Zugriff _pro Seite_ gewährt (Safari ist der einzige Browser, der immer noch dieses Modell verwendet). Wenn eine Einbettung Drittanbieter-Cookie-Zugriff über `requestStorageAccess()` erhielt, erhielten automatisch alle anderen gleichseitigen Einbettungen Zugriff. Dies war aus Sicherheitsgründen nicht wünschenswert — wenn z. B. `shop.example.com` `locator.users.com` einbettete, um Benutzern zu ermöglichen, ihre Standortinformationen beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufrief, könnten `shop.example.com` und alle anderen eingebetteten Sites ihre Cookies sowie die Cookies von `private.users.com` zugreifen, was nicht zum Einbetten vorgesehen war. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt wird, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<top-level site, embedded site>` gespeichert. Zum Beispiel, wenn die einbettende Site `embedder.com` ist und die Einbettung `locator.example.com` ist, wäre der Schlüssel `<embedder.com, example.com>`. Gleiche Site-Einbettungen (`docs.example.com`, `profile.example.com` usw.) könnten dann `requestStorageAccess()` aufrufen und das Promise würde automatisch erfüllt, wie zuvor erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüssel-Struktur `<top-level site, embedded origin>`, was bedeutete, dass gleichseitige, ursprungsübergreifende Einbettungen den Berechtigungsschlüssel nicht erfüllten und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine oberste Website ihre Cookies [partitioniert](#unpartitionierte_versus_partitionierte_cookies) hat, wird die Storage Access API nicht benötigt, da das Teilen der Cookies standardmäßig kein Risiko für die Privatsphäre darstellt.

## Sicherheitsmaßnahmen

Mehrere verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die untenstehende Liste, wenn Sie Probleme haben, eine Anfrage erfolgreich auszuführen:

1. Der Aufruf muss mit einer Benutzergeste ({{Glossary("transient_activation", "transient activation")}}) wie einem Tippen oder Klicken verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanforderungen spammt. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits gewährt wurde, z. B. durch einen anderen gleichseitigen Ressourcedarstellung, der `requestStorageAccess()` aufruft.
   - Der Anrufer ein oberstes Dokument oder gleichseitig zum obersten Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das oberste Dokument dürfen keinen `null` Ursprung haben.
3. Ursprünge, mit denen nie als erste Partei interagiert wurde, haben keine Vorstellung von einem Erstanbieter-Speicher. Aus der Perspektive des Benutzers haben sie nur eine Drittanbieter-Beziehung mit diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer in letzter Zeit (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen) nicht in einem Erstanbieter-Kontext mit den eingebetteten Inhalten interagiert hat.
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Aus Sicherheitsgründen können sand-boxed {{htmlelement("iframe")}}s standardmäßig keinen Speicherzugriff gewährt bekommen. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, um Speicherzugriffsanfragen erfolgreich zu machen, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu erlauben, ein Skript auszuführen, um die API auszuführen und es in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine auf Ihrem Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} berechtigungspolitik [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browser-spezifische Prüfungen bestehen. Beispiele: Zulassungslisten, Blockierungslisten, gerätebasierte Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder die Aufforderung an den Benutzer zur ausdrücklichen Erlaubnis.

## Browserspezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Grad und Umfang des Drittanbieter-Cookie-Zugriffs erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in den Speicherzugriffspolitiken.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) darauf eingestellt haben, weil der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die Speicherzugriffszulagen laufen nach 30 Tagen ab, wenn die Nutzung des Browsers ohne Benutzerinteraktion vergangen ist. Die Interaktion mit den eingebetteten Inhalten verlängert dieses Limit um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, weil der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den obersten Ursprung `foo.example` erhalten hat, und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut in weniger als 30 Tagen einbettet, wird der eingebettete Ursprung beim Laden sofort Drittanbieter-Cookie-Zugriff haben.
- Die Speicherzugriffszulagen laufen nach 30 Kalendertagen ab.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffszulagen.

### Safari

- Die Speicherzugriffszulagen laufen nach 30 Tagen Nutzung des Browsers ab, wenn keine Benutzerinteraktion erfolgte. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Sehen Sie sich die [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für eine Implementierungsanleitung mit Code-Beispielen an.
- Sehen Sie sich die [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo an.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Erlaubt Inhalten, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wird, und zurückgewiesen wird, wenn der Zugriff verweigert wird.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagene Erweiterung der Storage Access API, die es obersten Websites erlaubt, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten von einer anderen Website innerhalb desselben [bezogenen Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) anzufordern. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wird, und zurückgewiesen wird, wenn der Zugriff verweigert wird.

> [!NOTE]
> Benutzerinteraktion propagiert zu dem von diesen Methoden zurückgegebenen Promise, was es den Anrufern ermöglicht, Aktionen auszuführen, die Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Beispielsweise könnte ein Anrufer ein Pop-up-Fenster aus dem aufgelösten Promise öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der Feature-Name `"storage-access"`
  - : In unterstützten Browsern kann überprüft werden, ob der Zugriff auf Drittanbieter-Cookies im Allgemeinen gewährt wurde, das heißt, für eine andere gleichseitige Einbettung. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Promise wird automatisch erfüllt.
- `Permissions.query()`, der Feature-Name `"top-level-storage-access"` {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um zu überprüfen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
