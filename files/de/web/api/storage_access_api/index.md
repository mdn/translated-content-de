---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für fremdseitige Inhalte, die in einem Drittanbieter-Kontext geladen sind (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, die sie normalerweise nur in einem Erstanbieter-Kontext haben würden (d.h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist relevant für User Agents, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Verwendungszwecke für Drittanbieter-Cookies und unpartitionierten Zustand, die wir trotz dieser Standardbeschränkungen weiterhin ermöglichen möchten. Beispiele umfassen Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder die Speicherung von Benutzerdaten wie Standortinformationen oder Anzeigepräferenzen über verschiedene Webseiten hinweg.

Die API bietet Methoden, die eingebetteten Ressourcen erlauben zu überprüfen, ob sie derzeit Zugang zu Drittanbieter-Cookies haben und, falls nicht, Zugriff vom User Agent anzufordern.

## Konzepte und Verwendung

Browser implementieren verschiedene Speicherzugriffsfunktionen und -richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speichers für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_vs._partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um die Blockierung von Drittanbieter-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Fremdseitige Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, haben keinen Zugriff auf denselben Zustand, den sie hätten, wenn sie in einem Erstanbieter-Kontext geladen würden. Dies wird in guter Absicht getan — Browserhersteller möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele sind, sie weniger dafür anfällig zu machen, dass ihre Aktivitäten über verschiedene Websites hinweg verfolgt werden, und sie weniger anfällig für Exploits wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) zu machen.

Es gibt jedoch legitime Verwendungen für eingebettete fremdseitige Inhalte, um Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zu haben, was die oben genannten Features und Richtlinien nachweislich beeinträchtigen. Angenommen, Sie haben eine Reihe von verschiedenen Seiten, die Zugang zu verschiedenen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen für Lokalisierungszwecke auf verschiedene Länderdomains aufteilen — `example.com`, `example.ua`, `example.br` usw. — oder auf eine andere Weise.

Sie könnten begleitende Utility-Sites mit Komponenten haben, die in allen anderen Sites eingebettet sind, zum Beispiel um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) zu bieten. Diese Utility-Sites werden ihren Zustand mit den Sites, in die sie eingebettet sind, über Cookies teilen wollen. Sie können keine Erstanbieter-Cookies teilen, da sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies werden in Browsern, die sie blockieren, nicht mehr funktionieren.

In solchen Situationen ermutigen Webseiten-Besitzer die Nutzer oft, ihre Seite als Ausnahme hinzuzufügen oder die Richtlinien zur Blockierung von Drittanbieter-Cookies vollständig zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern und eventuell quer über alle Webseiten hinweg.

Die Storage Access API soll dieses Problem lösen; eingebettete fremdseitige Inhalte können über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) unbeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand auf einer Frame-für-Frame-Basis anfordern. Sie kann auch prüfen, ob sie bereits Zugang über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) hat.

### Unpartitionierte vs. partitionierte Cookies

Es ist wichtig zu erwähnen, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu erhalten. Dies bedeutet Cookies, die auf traditionelle Weise seit den frühen Tagen des Webs gespeichert werden — alle Cookies, die auf derselben Seite gesetzt werden, werden im selben Cookie-Behälter gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Seite einen einzigartigen Cookie-Speicherplatz erhalten, wodurch das Verfolgen von Nutzern über Websiten hinweg durch diese Cookies unmöglich wird.

Browser haben verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, beispielsweise [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Zusammenhang mit der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die legitimen Bedarf an Drittanbieter-Cookie- oder unpartitioniertem Zustandszugriff haben, können über die Storage Access API wie folgt Zugriff anfordern:

1. Sie können die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob sie bereits den benötigten Zugriff haben.
2. Falls nicht, können sie Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.
3. Je nach Browser wird der Benutzer auf leicht unterschiedliche Weise gefragt, ob der Zugriff auf das anfragende Embed gewährt werden soll.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte, die bisher keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem ein Ursprung auf mehr als einer Schwellenanzahl von Websites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte, die bisher keinen Speicherzugriff erhalten haben. Es wird jedoch automatisch Zugang gewähren und Aufforderungen überspringen, wenn das eingebettete und das einbettende Element Teil desselben [bezogenen Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder abgelehnt basierend darauf, ob die Inhalte alle Sicherheitsanforderungen erfüllen — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browserspezifische Variationen](#browserspezifische_variationen) für einige browserspezifische Sicherheitsanforderungen. Die {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` ermöglicht das Ausführen von Code zur Behandlung von erfolgs- und fehlerhaften Fällen.
   - Moderne Spezifikationsverhalten besagen, dass der Zugriff _pro Frame_ gewährt wird — jedes separate Content Embed hat standardmäßig keinen Zugriff auf Drittanbieter-Cookies und muss `requestStorageAccess()` aufrufen, um Zugriff zu erhalten. Wenn ein Content Embed Zugriff erhält und dann gleichseitige Embeds `requestStorageAccess()` aufrufen, werden ihre Versprechen automatisch erfüllt. Sie müssen sich jedoch trotzdem anmelden.
   - Die einzige Ausnahme zum "standardmäßig blockiert"-Verhalten ist, wenn ein Content Embed ein erfolgreiches `requestStorageAccess()` ausführt, aber dann eine gleich-origine Navigation durchführt (beispielsweise ein erneutes Laden von sich selbst). In solchen Fällen wird der Speicheraustausch aus der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed Zugriff auf Drittanbieter-Cookies über `requestStorageAccess()` erhielt, würden alle anderen gleichseitigen Embeds automatisch Zugriff erhalten. Dieses Verhalten war aus Sicherheitsgründen nicht wünschenswert — beispielsweise, wenn `shop.example.com` `locator.users.com` einbettete, um Benutzern zu erlauben, ihre Standortinformationen beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufrief, würden `shop.example.com` und alle anderen eingebetteten Sites in der Lage sein, auf ihre Cookies zuzugreifen, aber auch auf Cookies von `private.users.com`, welche nicht eingebettet werden sollen. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Veränderung.
5. Sobald der Zugriff gewährt wird, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<Top-Level-Site, eingebettete Site>` gespeichert. Zum Beispiel, wenn die einbettende Site `embedder.com` ist und das Embed `locator.example.com` ist, würde der Schlüssel `<embedder.com, example.com>` sein. Gleichseitige Embeds (`docs.example.com`, `profile.example.com`, etc.) wären dann in der Lage, `requestStorageAccess()` aufzurufen und das Versprechen würde automatisch wie oben erwähnt erfüllt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass gleichseitige, fremdursprüngliche Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_vs._partitionierte_cookies) hat, wird die Storage Access API nicht benötigt, da das Teilen der Cookies standardmäßig kein Privatsphäre-Risiko darstellt.

## Sicherheitsmaßnahmen

Mehrere verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die folgende Liste, wenn Sie Schwierigkeiten haben, eine Anfrage zum Laufen zu bringen:

1. Der Aufruf muss mit einer Benutzergeste ({{Glossary("transient_activation", "transiente Aktivierung")}}) wie einem Tippen oder Klick verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder den Benutzer mit übermäßigen Zugriffsanforderungen überschwemmen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits gewährt wurde, zum Beispiel durch einen anderen gleichseitigen Ressourcenzugriff auf `requestStorageAccess()`.
   - Der Aufrufer ein Top-Level-Dokument oder gleichseitig zum Top-Level-Dokument ist. In solchen Fällen muss `requestStorageAccess()` möglicherweise überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null` Ursprung haben.
3. Ursprünge, mit denen als Erstanbieter nie interagiert wurde, haben keinen Erstanbieterspeicher. Aus der Sicht des Benutzers haben sie nur eine Drittanbieter-Beziehung mit diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer kürzlich (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen) nicht in einem Erstanbieter-Kontext mit dem eingebetteten Inhalt interagiert hat.
4. Das Dokumentfenster muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzu. Die einbettende Website muss dies zusammen mit `allow-scripts` und `allow-same-origin`, um das Ausführen eines Skripts zum Aufrufen der API und des Codes auf einem Ursprung auszuführen, der Cookies/Zustand besitzen kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine auf Ihrem Server gesetzte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

> [!NOTE]
> Möglicherweise muss das Dokument auch andere browserspezifische Prüfungen bestehen. Beispiele: Zulassungslisten, Sperrlisten, geräteinterne Klassifikation, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder explizite Nutzereinwilligung.

## Browserspezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API nutzen, Unterschiede im Niveau und Umfang des Drittanbieter-Cookie-Zugriffs erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund der Unterschiede in deren Speicherzugriffspolitik.

### Chrome

- Cookies müssen [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) ausdrücklich auf ihnen gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Speicherzugriffsberechtigungen werden nach 30 Tagen ohne Benutzerinteraktion abgebaut. Interaktion mit den eingebetteten Inhalten verlängert dieses Limit um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat, und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` in weniger als 30 Tagen erneut einbettet, wird der eingebettete Ursprung bereits beim Laden den Drittanbieter-Cookie-Zugriff haben.
- Die Speicherzugriffsberechtigungen bauen nach 30 Kalendertagen ab.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffsberechtigungen bauen nach 30 Tagen ohne Benutzerinteraktion ab. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Sehen Sie sich [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für eine Implementierungsanleitung mit Codebeispielen an.
- Sehen Sie sich [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo an.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt eine {{jsxref("Promise")}} zurück, die sich mit einem booleschen Wert auflöst, der angibt, ob das Dokument Zugang zu Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Erlaubt Inhalten, die in einem Drittanbieter-Kontext geladen sind (d.h. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt eine {{jsxref("Promise")}} zurück, die resolved wird, wenn der Zugriff gewährt wurde, und rejected wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Erweiterung der Storage Access API, die es Top-Level-Sites ermöglicht, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten zu beantragen, die von einer anderen Site im gleichen [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Gibt eine {{jsxref("Promise")}} zurück, die resolved wird, wenn der Zugriff gewährt wurde, und rejected wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktion propagiert zu dem Versprechen, das von diesen Methoden zurückgegeben wird, wodurch die Aufrufer Aktionen durchführen können, die Benutzerinteraktion erfordern, ohne einen zweiten Klick zu erfordern. Zum Beispiel könnte ein Aufrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen öffnen, ohne den Popup-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Feature-Name
  - : In unterstützten Browsern kann damit abgefragt werden, ob Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, d.h. auf ein anderes gleichseitiges Embed. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch aufgelöst.
- `Permissions.query()`, der `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, um abzufragen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, brauchen Sie `requestStorageAccessFor()` nicht erneut aufzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
