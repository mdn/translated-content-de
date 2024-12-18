---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für cross-site-Inhalte, die in einem Drittanbieter-Kontext geladen werden (z. B. eingebettet in ein {{htmlelement("iframe")}}), auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) zuzugreifen, auf die normalerweise nur in einem Erstanbieter-Kontext zugegriffen werden könnte (d. h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist für Benutzeragenten relevant, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (beispielsweise um Tracking zu verhindern). Es gibt jedoch legitime Verwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir auch mit diesen Standardbeschränkungen ermöglichen möchten. Beispiele umfassen Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Anzeigeeinstellungen über verschiedene Seiten hinweg.

Die API bietet Methoden, die es eingebetteten Ressourcen ermöglichen zu überprüfen, ob sie aktuell Zugriff auf Drittanbieter-Cookies haben und, falls nicht, Zugriff beim Benutzeragenten anzufordern.

## Konzepte und Nutzung

Browser implementieren verschiedene Funktionen und Richtlinien für den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_vs._partitionierte_cookies)) bis hin zur kompletten Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik bezüglich der Blockierungsfunktionen und Richtlinien für Drittanbieter-Cookies und unpartitionierten Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten nicht denselben Zugriff auf den Zustand, auf den sie in einem Erstanbieter-Kontext zugreifen könnten. Dies geschieht mit guter Absicht – Browseranbieter möchten Maßnahmen ergreifen, um die Privatsphäre und Sicherheit der Benutzer besser zu schützen. Beispiele sind, sie weniger anfällig dafür zu machen, dass ihre Aktivitäten über verschiedene Websites hinweg verfolgt werden, und weniger anfällig für Exploits wie Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) zu sein.

Es gibt jedoch legitime Verwendungen für eingebettete Cross-Site-Inhalte, die auf Drittanbieter-Cookies und unpartitionierten Zustand zugreifen, die durch die oben genannten Funktionen und Richtlinien beeinträchtigt werden. Nehmen wir an, Sie haben eine Reihe unterschiedlicher Websites, die Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedene Länderdomains für Lokalisierungszwecke aufteilen — `example.com`, `example.ua`, `example.br` usw. — oder auf eine andere Weise.

Sie könnten auch begleitende Dienstleistungsseiten mit Komponenten haben, die in allen anderen Seiten eingebettet sind, um beispielsweise SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstleistungsseiten möchten ihren Zustand mit den Seiten teilen, in die sie eingebettet sind, über Cookies. Sie können keine Erstanbieter-Cookies teilen, weil sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies werden in Browsern, die sie blockieren, nicht mehr funktionieren.

In solchen Situationen ermutigen Website-Eigentümer oft Nutzer, ihre Seite als Ausnahme hinzuzufügen oder die Policies zur Blockierung von Drittanbieter-Cookies vollständig zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern und möglicherweise über alle Websites hinweg.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-Site-Inhalte können auf Basis pro Frame unbegrenzten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern. Sie kann auch überprüfen, ob bereits Zugriff besteht, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

### Unpartitionierte vs. partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu bieten. Dies bedeutet, dass Cookies auf die traditionelle Weise seit den Anfängen des Webs gespeichert werden — alle auf derselben Website gesetzten Cookies werden in demselben Cookie-Glas gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Site einen einzigartigen Cookie-Speicherplatz erhalten und somit das Tracking von Nutzern über diese Cookies unmöglich gemacht wird.

Browser verfügen über verschiedene Mechanismen zur Partitonierung des Zugriffs auf Drittanbieter-Cookies, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

Wenn wir in Bezug auf die Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die einen legitimen Bedarf an Drittanbieter-Cookies oder unpartitioniertem Zustandszugriff haben, können den Zugriff über die Storage Access API wie folgt anfordern:

1. Sie können die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob der benötigte Zugriff bereits besteht.
2. Falls nicht, kann der Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) angefordert werden.
3. Abhängig vom Browser wird der Nutzer gefragt, ob dem anfordernden Embed Zugriff gewährt werden soll, wobei dies auf leicht unterschiedliche Weise geschieht.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte, die zuvor noch keinen Speicherzugriff erhalten haben.
   - Firefox fordert Nutzer erst auf, nachdem ein Ursprung auf mehr als einer festgelegten Anzahl von Websites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte, die zuvor noch keinen Speicherzugriff erhalten haben. Es wird jedoch automatisch Zugriff gewährt und Aufforderungen übersprungen, wenn der eingebettete Inhalt und die einbettende Seite Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browserspezifische Variationen](#browserspezifische_variationen) für einige browserspezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}} basierende Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code auszuführen, um Erfolge und Fehlschläge zu behandeln.
   - Das moderne Spezifikationsverhalten besagt, dass der Zugriff _pro Frame_ gewährt wird — jedes eingebettete Inhaltselement hat standardmäßig seinen Drittanbieter-Cookie-Zugriff blockiert und muss `requestStorageAccess()` aufrufen, um Zugriff zu erhalten. Wenn ein eingebetteter Inhalt Zugriff erhalten hat und gleiche Site-Embeds dann `requestStorageAccess()` aufrufen, wird ihr Promise automatisch erfüllt. Sie müssen sich jedoch weiterhin anmelden.
   - Die einzige Ausnahme vom "standardmäßig blockiert"-Verhalten ist, wenn ein eingebetteter Inhalt einen erfolgreichen `requestStorageAccess()`-Aufruf macht, sich dann aber einer gleichen Ursprungsnavigation unterzieht (z. B. sich selbst neu lädt). In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed Drittanbieter-Cookie-Zugriff über `requestStorageAccess()` erhielt, würden alle anderen gleichen Site-Embeds automatisch Zugriff erhalten. Dies war aus Sicherheitsgründen nicht wünschenswert — zum Beispiel, wenn `shop.example.com` `locator.users.com` einbettete, um Nutzern zu erlauben, ihre Standortinformationen während des Einkaufs zu verwenden, und `locator.users.com` `requestStorageAccess()` aufrief, würde `shop.example.com` und alle anderen eingebetteten Seiten Zugriff auf seine Cookies erhalten, aber auch auf Cookies von `private.users.com`, die nicht eingebettet werden sollen. [Lesen Sie mehr über die Motivationen](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt wird, wird im Browser ein Berechtigungsschlüssel mit der Struktur `<Top-Level-Site, eingebettete Seite>` gespeichert. Wenn zum Beispiel die einbettende Seite `embedder.com` ist und das Embed `locator.example.com`, wäre der Schlüssel `<embedder.com, example.com>`. Gleichseitige Embeds (`docs.example.com`, `profile.example.com` usw.) könnten dann `requestStorageAccess()` aufrufen und das Promise würde automatisch erfüllt, wie bereits erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüssel-Struktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass gleichseitige, cross-origin Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_vs._partitionierte_cookies) hat, ist die Storage Access API nicht erforderlich, da das Teilen der Cookies standardmäßig kein Datenschutzrisiko darstellt.

## Sicherheitsmaßnahmen

Verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Prüfen Sie die folgende Liste, wenn Sie Probleme haben, eine Anfrage zum Laufen zu bringen:

1. Der Aufruf muss mit einem Benutzerbefehl ({{Glossary("transient_activation", "transiente Aktivierung")}}) wie Tippen oder Klicken verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder den Nutzer mit übermäßigen Zugriffsanfragen spammen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits gewährt wurde, beispielsweise durch eine andere gleiche Site-Ressource, die `requestStorageAccess()` aufruft.
   - Der Anrufer ein Top-Level-Dokument oder gleiche Site zum Top-Level-Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, mit denen nie als Erstnutzer interagiert wurde, haben keinen Begriff von einem Erstnutzer-Speicher. Aus Sicht des Nutzers haben sie nur eine Drittanbieter-Beziehung mit diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Nutzer in letzter Zeit (in Firefox bedeutet "in letzter Zeit" innerhalb von 30 Tagen) nicht in einem Erstnutzer-Kontext mit den eingebetteten Inhalten interagiert hat.
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff gewährt bekommen. Die API fügt daher auch den `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, um erfolgreiche Speicherzugriffsanfragen zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu erlauben, ein Skript auszuführen, um die API aufzurufen und sie in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server gesetzt ist, blockiert werden.

> [!NOTE]
> Das Dokument kann auch verpflichtet sein, zusätzliche browserspezifische Prüfungen zu bestehen. Beispiele: Allowlisten, Blocklisten, Geräteklassifikation, Benutzereinstellungen, anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder das Anfordern expliziter Benutzergenehmigung.

## Browserspezifische Variationen

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API nutzen, Unterschiede im Niveau und Umfang des Drittanbieter-Cookie-Zugriffs zwischen verschiedenen Browsern erwarten, aufgrund ihrer unterschiedlichen Richtlinien für den Speicherzugriff.

### Chrome

- Cookies müssen das Attribut [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) explizit gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das Attribut [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) gesetzt haben.
- Die Speicherzugriffsgewährungen werden nach 30 Tagen ohne Benutzerinteraktion aus der Browsernutzung aufgehoben. Die Interaktion mit den eingebetteten Inhalten verlängert diese Grenze um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Nutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat, und der Benutzer besucht in weniger als 30 Tagen erneut eine Seite von `foo.example`, die eine Seite von `tracker.example` einbettet, hat der eingebettete Ursprung sofort bei Laden Drittanbieter-Cookie-Zugriff.
- Die Speicherzugriffsgewährungen werden nach 30 Kalendertagen aufgehoben.

Die Dokumentation zur neuen Speicherzugangspolitik von Firefox für das Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsgewährungen.

### Safari

- Die Speicherzugriffsgewährungen werden nach 30 Tagen ohne Benutzerinteraktion aus der Browsernutzung aufgehoben. Der erfolgreiche Einsatz der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Sehen Sie sich [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Codebeispielen an.
- Sehen Sie sich [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo an.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es, in einem Drittanbieter-Kontext geladene Inhalte (d. h. eingebettet in ein {{htmlelement("iframe")}}) Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Ausbau der Storage Access API, der es Top-Level-Sites ermöglicht, im Namen von eingebetteten Inhalten, die von einer anderen Seite im selben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen, Zugriff auf Drittanbieter-Cookies anzufordern. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn er verweigert wurde.

> [!NOTE]
> Die Benutzerinteraktion wird an das Promise weitergegeben, das von diesen Methoden zurückgegeben wird, was es den Anrufern erlaubt, Maßnahmen zu ergreifen, die eine Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Beispielsweise könnte ein Anrufer ein Pop-up-Fenster aus dem aufgelösten Promise öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"`-Feature-Name
  - : In unterstützenden Browsern kann abgefragt werden, ob im Allgemeinen Zugriff auf Drittanbieter-Cookies gewährt wurde, das heißt, einem anderen gleichen Site-Embed. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen und das Promise wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"`-Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um abzufragen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
