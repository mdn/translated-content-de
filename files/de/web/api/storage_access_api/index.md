---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für cross-site Inhalte, die in einem Drittanbieterkontext geladen werden (d.h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [nicht-partitionierte Zustände](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, die normalerweise nur im Erstpartei-Kontext (d.h. direkt in einem Browser-Tab geladen) verfügbar wären.

Die Storage Access API ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Third-Party-Cookies und nicht-partitionierte Zustände blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Nutzungen für Third-Party-Cookies und nicht-partitionierte Zustände, die wir trotz dieser Standardbeschränkungen weiterhin ermöglichen möchten. Beispiele sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdP) oder das Speichern von Benutzerdaten wie Standortdaten oder Anzeigeeinstellungen über verschiedene Websites hinweg.

Die API bietet Methoden, die es eingebetteten Ressourcen ermöglichen zu überprüfen, ob sie derzeit Zugriff auf Third-Party-Cookies haben und, falls nicht, den Zugriff beim Benutzeragenten anzufordern.

## Konzepte und Verwendung

Browser implementieren mehrere Speicherzugriffsmerkmale und -richtlinien, die den Zugriff auf Third-Party-Cookies und nicht-partitionierte Zustände einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#nicht-partitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieterkontext geladen werden.

Die Semantik der Funktionen und Richtlinien zum Blockieren von Third-Party-Cookies und nicht-partitionierten Zuständen unterscheidet sich je nach Browser, aber die Kernfunktionalität ist ähnlich. Cross-site Ressourcen, die in einem Drittanbieterkontext eingebettet sind, erhalten keinen Zugriff auf denselben Zustand, auf den sie Zugriff hätten, wenn sie in einem Erstpartei-Kontext geladen würden. Dies wird in guter Absicht getan — Browser-Anbieter möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele sind, dass Nutzer weniger anfällig für das Tracking ihrer Aktivität über verschiedene Websites hinweg sind und weniger anfällig für Exploits wie Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}).

Es gibt jedoch legitime Verwendungen für eingebettete cross-site Inhalte, die Zugriff auf Third-Party-Cookies und nicht-partitionierte Zustände benötigen, die oben genannte Funktionen und Richtlinien als Problem bekannt sind. Nehmen wir an, Sie haben eine Reihe von verschiedenen Websites, die Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedene Landesdomänen für Lokalisierungszwecke aufteilen — `example.com`, `example.ua`, `example.br`, usw. — oder auf irgendeine andere Weise.

Möglicherweise haben Sie begleitende Dienstwebsites mit Komponenten, die in allen anderen Sites eingebettet sind, zum Beispiel um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstwebsites möchten ihren Zustand über Cookies mit den Websites teilen, in die sie eingebettet sind. Sie können keine Erstpartei-Cookies teilen, weil sie auf verschiedenen Domänen sind, und Third-Party-Cookies funktionieren nicht mehr in Browsern, die sie blockieren.

In solchen Situationen ermutigen Website-Betreiber oft die Benutzer, ihre Site als Ausnahme hinzuzufügen oder die Richtlinien zur Blockierung von Third-Party-Cookies vollständig zu deaktivieren. Benutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, und möglicherweise über alle Websites hinweg erheblich lockern.

Die Storage Access API soll dieses Problem lösen; eingebettete cross-site Inhalte können unbegrenzten Zugriff auf Third-Party-Cookies und nicht-partitionierte Zustände für jedes einzelne Frame über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern. Sie kann auch überprüfen, ob sie bereits Zugriff hat, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

### Nicht-partitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _nicht-partitionierte_ Third-Party-Cookies zu gewähren. Das bedeutet Cookies, die auf die traditionelle Weise seit dem frühen Internet gespeichert wurden — alle Cookies, die auf der gleichen Site gesetzt werden, werden im gleichen Cookie-Glas gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Site einen einzigartigen Cookie-Speicherplatz erhalten, wodurch es unmöglich wird, Benutzer über diese Cookies über Websites hinweg zu verfolgen.

Browser verfügen über verschiedene Mechanismen zur Partitionierung des Zugriffs auf Third-Party-Cookies, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir über Third-Party-Cookies im Zusammenhang mit der Storage Access API sprechen, meinen wir implizit _nicht-partitionierte_ Third-Party-Cookies.

### Funktionsweise

Eingebettete Inhalte, die einen legitimen Bedarf an Zugriff auf Third-Party-Cookies oder nicht-partitionierte Zustände haben, können den Zugriff über die Storage Access API wie folgt anfordern:

1. Sie kann die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob sie den erforderlichen Zugriff bereits hat.
2. Falls nicht, kann der Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) angefordert werden.
3. Abhängig vom Browser wird der Benutzer mit leicht unterschiedlichen Mitteln gefragt, ob der Zugriff auf das anfordernde Embed gewährt werden soll.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert die Benutzer nur auf, nachdem ein Ursprung auf mehr als eine Schwellenanzahl von Sites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte, die zuvor keinen Speicherzugriff erhalten haben. Es gewährt jedoch automatisch Zugriff und überspringt Aufforderungen, wenn das eingebettete Content und die einbettende Site Teil desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browser-spezifische Variationen](#browser-spezifische_variationen) für einige browser-spezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code auszuführen, um Erfolgs- und Fehlersituationen zu handhaben.
   - Das Verhalten gemäß dem modernen Spezifikationsverhalten diktiert, dass der Zugriff _per-Frame_ gewährt wird — jedes separate Content-Embed hat seinen Third-Party-Cookie-Zugriff standardmäßig blockiert und muss `requestStorageAccess()` aufrufen, um den Zugriff zu erhalten. Wenn ein Content-Embed Zugriff erhalten hat, und gleiche Site-Embeds dann `requestStorageAccess()` aufrufen, werden ihre Versprechen automatisch erfüllt. Aber sie müssen immer noch teilnehmen.
   - Die einzige Ausnahme vom Verhalten „standardmäßig blockiert“ ist, wenn ein Content-Embed eine erfolgreiche `requestStorageAccess()` ausführt, sich aber dann eine gleiche Ursprungsnavigation durchführt (zum Beispiel sich selbst neu lädt). In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationen wurde der Zugriff _pro Seite_ gewährt (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed über `requestStorageAccess()` Third-Party-Cookie-Zugriff erhalten hat, würden alle anderen Embeds derselben Site automatisch Zugriff erhalten. Dieses Verhalten war aus Sicherheitssicht nicht wünschenswert — zum Beispiel, wenn `shop.example.com` `locator.users.com` eingebettet hat, um Benutzern die Verwendung ihrer Standortinformationen beim Einkaufen zu ermöglichen, und `locator.users.com` `requestStorageAccess()` aufgerufen hat, könnten `shop.example.com` und alle anderen Sites, die es einbettet, auf seine Cookies zugreifen, aber auch auf Cookies von `private.users.com`, die nicht zum Einbetten vorgesehen ist. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt wurde, wird in dem Browser ein Berechtigungsschlüssel mit der Struktur `<Top-Level-Site, eingebettete Site>` gespeichert. Zum Beispiel, wenn die einbettende Site `embedder.com` ist und das Embed `locator.example.com` ist, wäre der Schlüssel `<embedder.com, example.com>`. Self-Site-Embeds (`docs.example.com`, `profile.example.com`, usw.) könnten dann `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt, wie zuvor erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass self-Site, cross-origin Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre [partitionierten](#nicht-partitionierte_versus_partitionierte_cookies) Cookies hat, ist die Storage Access API nicht erforderlich, da das Teilen der Cookies standardmäßig kein Risiko für die Privatsphäre darstellt.

## Sicherheitsmaßnahmen

Verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die folgende Liste, wenn Sie Schwierigkeiten haben, einen Anfrage zum Laufen zu bringen:

1. Der Aufruf muss mit einer Benutzerinteraktion ({{Glossary("transient_activation", "transiente Aktivierung")}}) wie einem Tippen oder Klicken verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder den Benutzer mit übermäßigen Zugriffsanforderungen zuspammen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits erteilt wurde, zum Beispiel durch einen anderen same-site Ressourcenaufruf von `requestStorageAccess()`.
   - Der Anrufer ein Top-Level-Dokument oder self-Site zum Top-Level-Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, mit denen nie als Erstpartei interagiert wurde, haben keinen Begriff von Erstpartei-Speicher. Aus der Sicht des Nutzers haben sie nur eine Drittanbieter-Beziehung zu diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer in letzter Zeit nicht im Erstpartei-Kontext mit den eingebetteten Inhalten interagiert hat (in Firefox bedeutet „in letzter Zeit“ innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, um erfolgreiche Speicherzugriffsanfragen zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um das Ausführen eines Skripts zu ermöglichen, um die API aufzurufen und es in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion könnte durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) {{httpheader("Permissions-Policy/storage-access", "storage-access")}} blockiert werden, die auf Ihrem Server festgelegt ist.

> [!NOTE]
> Das Dokument kann auch verpflichtet sein, zusätzliche browser-spezifische Prüfungen zu bestehen. Beispiele: Zulassungslisten, Sperrlisten, geräteinterne Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) Heuristiken oder Aufforderung des Benutzers zur expliziten Berechtigung.

## Browser-spezifische Variationen

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Umfang und Ausmaß des Third-Party-Cookie-Zugriffs erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in ihren Speicherzugriffsrichtlinien.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die über die Storage Access API gewährten Zugriffe laufen 30 Tage nach der letzten Nutzung des Browsers ab, wenn keine Benutzerinteraktion erfolgt ist. Die Interaktion mit den eingebetteten Inhalten verlängert dieses Limit um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da sich der Benutzer bereits auf der Seite befindet.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Third-Party-Cookie-Zugriff auf dem Top-Level-Ursprung `foo.example` erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut in weniger als 30 Tagen einbettet, hat der eingebettete Ursprung sofort Third-Party-Cookie-Zugriff beim Laden.
- Die über die Storage Access API gewährten Zugriffe laufen 30 Kalendertage nach der letzten Nutzung aus.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der über die Storage Access API gewährten Zugriffe.

### Safari

- Die über die Storage Access API gewährten Zugriffe laufen nach 30 Tagen ab, wenn keine Benutzerinteraktion erfolgt ist. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungs-Leitfaden mit Codebeispielen.
- Siehe [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der anzeigt, ob das Dokument Zugriff auf Third-Party-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es Inhalten, die in einem Drittanbieterkontext geladen wurden (d.h. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf Third-Party-Cookies und nicht-partitionierte Zustände anzufordern; gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Ausbau der Storage Access API, der es Top-Level-Sites erlaubt, Third-Party-Cookie-Zugriff im Namen eingebetteter Inhalte anzufordern, die von einer anderen Site im selben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktionen werden auf das von diesen Methoden zurückgegebene Versprechen propagiert, sodass die Anrufer Aktionen ergreifen können, die Benutzerinteraktionen erfordern, ohne einen zweiten Klick zu benötigen. Zum Beispiel könnte ein Anrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen heraus öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), das `"storage-access"` Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob grundsätzlich Zugriff auf Third-Party-Cookies gewährt wurde, das heißt, auf ein anderes same-site Embed. In diesem Fall können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch aufgelöst.
- `Permissions.query()`, das `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um abzufragen, ob die Berechtigung zum Zugriff auf Third-Party-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Falls ja, brauchen Sie `requestStorageAccessFor()` nicht erneut aufzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
