---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für Inhalte von Drittanbietern, die in einem Drittanbieter-Kontext geladen werden (z. B. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die sie normalerweise nur im Erstanbieter-Kontext zugreifen könnten (z. B. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel um Tracking zu verhindern). Es gibt legitime Verwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir weiterhin ermöglichen möchten, selbst wenn diese standardmäßigen Beschränkungen in Kraft sind. Beispiele umfassen Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdaten wie Standortdaten oder Anzeigeeinstellungen über verschiedene Websites hinweg.

Die API bietet Methoden, die es eingebetteten Ressourcen ermöglichen zu überprüfen, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und falls nicht, den Zugriff beim Benutzeragenten zu beantragen.

## Konzepte und Nutzung

Browser implementieren mehrere Speicherzugriffsmerkmale und -richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines eindeutigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis zur völligen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um die Blockierungsmerkmale und -richtlinien für Drittanbieter-Cookies und unpartitionierten Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf denselben Zustand, auf den sie Zugriff hätten, wenn sie in einem Erstanbieter-Kontext geladen werden. Dies geschieht in guter Absicht — Browserhersteller möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Benutzer besser zu schützen. Beispiele umfassen es, sie weniger anfällig dafür zu machen, dass ihre Aktivitäten auf verschiedenen Websites nachverfolgt werden können, und weniger anfällig für Exploits wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}).

Es gibt jedoch legitime Verwendungen für eingebettete Cross-Site-Inhalte, die auf Drittanbieter-Cookies und unpartitionierten Zustand zugreifen, was durch die genannten Merkmale und Richtlinien bekanntlich beeinträchtigt wird. Nehmen wir an, Sie haben eine Reihe verschiedener Websites, die den Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedene Länderdomains für Lokalisierungszwecke aufteilen — `example.com`, `example.ua`, `example.br`, usw. — oder auf irgendeine andere Weise.

Möglicherweise haben Sie zusätzlich dazu Utility-Sites mit Komponenten, die in allen anderen Websites eingebettet sind, um beispielsweise SSO zu bieten (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`). Diese Utility-Sites möchten ihren Zustand mit den Websites teilen, in die sie über Cookies eingebettet sind. Sie können keine Erstanbieter-Cookies teilen, weil sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies werden in Browsern, die diese blockieren, nicht mehr funktionieren.

In solchen Situationen ermutigen Website-Betreiber die Benutzer oft, ihre Website als Ausnahme hinzuzufügen oder die Drittanbieter-Cookie-Blockierungsrichtlinien vollständig zu deaktivieren. Benutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern, möglicherweise über alle Websites hinweg.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-Site-Inhalte können unbegrenzten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand auf Basis Einzelrahmen anfordern über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess). Sie kann auch überprüfen, ob sie bereits Zugang hat über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

### Unpartitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu ermöglichen. Das bedeutet Cookies, die auf herkömmliche Weise seit den Anfängen des Webs gespeichert werden — alle Cookies, die auf derselben Website gesetzt werden, werden im selben Cookie-Container gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebetteten Ressourcen unter jeder Top-Level-Site ein eindeutiger Cookie-Speicherplatz zugewiesen wird, wodurch das Verfolgen von Benutzern über Websites hinweg über diese Cookies unmöglich gemacht wird.

Browser haben verschiedene Mechanismen zur Partitionierung des Zugriffs auf Drittanbieter-Cookies, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die ein legitimes Bedürfnis nach Zugriff auf Drittanbieter-Cookies oder unpartitionierten Zustand haben, können den Zugriff mithilfe der Storage Access API wie folgt anfordern:

1. Sie können die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob sie den benötigten Zugriff bereits haben.
2. Falls nicht, kann der Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) angefordert werden.
3. Abhängig vom Browser wird der Benutzer gefragt, ob der Zugriff dem anfragenden Einbettungsinhalt gewährt wird, auf leicht unterschiedliche Weise.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fragt Benutzer nur dann, wenn ein Ursprung auf mehr als einer Schwellenanzahl von Sites um Speicherzugriff gebeten hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben. Es gewährt jedoch automatisch Zugriff und überspringt die Aufforderungen, wenn der eingebettete Inhalt und die einbettende Website Teil desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder abgelehnt, je nachdem, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browser-spezifische Variationen](#browser-spezifische_variationen) für einige browserspezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}}-basierende Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code für den Umgang mit Erfolgs- und Fehlerfällen auszuführen.
   - Modernes Spezifikationsverhalten besagt, dass Zugriff _pro Frame_ gewährt wird — jeder separate eingebettete Inhalt hat den Zugriff auf Drittanbieter-Cookies standardmäßig blockiert und muss `requestStorageAccess()` aufrufen, um den Zugriff zu aktivieren. Wenn ein eingebetteter Inhalt Zugriff erhalten hat und gleichseitige Einbettungen dann `requestStorageAccess()` aufrufen, werden ihre Zusagen automatisch erfüllt. Aber sie müssen dennoch den Zugriff aktivieren.
   - Die einzige Ausnahme von dem Verhalten "standardmäßig blockiert" ist, wenn ein eingebetteter Inhalt eine erfolgreiche `requestStorageAccess()`-Anfrage macht, sich aber dann an derselben Quelle navigiert (z.B. beim Neu-Laden seiner selbst). In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn eine Einbettung Zugriff auf Drittanbieter-Cookies über `requestStorageAccess()` erhielt, bekamen alle anderen Einbettungen auf derselben Seite automatisch Zugriff. Dies war aus Sicherheitsgründen nicht wünschenswert — z.B. wenn `shop.example.com` `locator.users.com` eingebettet hatte, um es Benutzern zu ermöglichen, ihre Standortinformationen beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` anforderte, wären `shop.example.com` und alle anderen von ihm eingebetteten Sites in der Lage, sowohl auf seine Cookies zuzugreifen als auch auf Cookies von `private.users.com`, die nicht eingebettet werden sollen. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt wurde, wird ein Berechtigungsschlüssel mit der Struktur `<Top-Level-Site, eingebettete Site>` im Browser gespeichert. Wenn die einbettende Site z.B. `embedder.com` ist und die Einbettung `locator.example.com`, würde der Schlüssel `<embedder.com, example.com>` lauten. Gleiche-Site-Einbettungen (`docs.example.com`, `profile.example.com`, usw.) könnten dann `requestStorageAccess()` aufrufen und die Promise würde automatisch erfüllt, wie bereits erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Schlüsselstruktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass Einbettungen gleicher Site, aber verschiedener Ursprünge nicht dem Schlüsselmuster entsprachen und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_versus_partitionierte_cookies) hat, ist die Storage Access API nicht erforderlich, da das Teilen der Cookies standardmäßig kein Privatsphäre-Risiko darstellt.

## Sicherheitsmaßnahmen

Mehrere verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die folgende Liste, wenn Sie Probleme haben, einen Antrag erfolgreich zu machen:

1. Der Aufruf muss mit einer Benutzeraktion ({{Glossary("transient_activation", "transiente Aktivierung")}}) wie einem Tap oder Klick verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanforderungen überschwemmen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits gewährt wurde, z.B. durch eine andere gleichseitige Ressource, die `requestStorageAccess()` aufgerufen hat.
   - Der Anrufer ein Top-Level-Dokument oder mit der Top-Level-Dokument gleichgesetzt ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, die als Erstanbieter nie interagiert wurden, haben keinen Begriff von Erstanbieterspeicherung. Aus der Sicht des Benutzers haben sie nur eine Drittanbieter-Beziehung mit diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser feststellt, dass der Benutzer in letzter Zeit nicht mit dem eingebetteten Inhalt in einem Erstanbieter-Kontext interagiert hat (in Firefox bedeutet "in letzter Zeit" innerhalb der letzten 30 Tage).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff gewährt bekommen. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, um Speicherzugriffsanforderungen erfolgreich zu machen, zusammen mit `allow-scripts` und `allow-same-origin`, um es einem Skript zu erlauben, die API auszuführen und es in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt wurde.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Whitelists, Blacklists, geräteinterne Klassifizierung, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Auffordern des Benutzers, explizite Berechtigungen zu erteilen.

## Browser-spezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Umfang und Ausmaß des Empfangens von Drittanbieter-Cookie-Zugriffen zwischen verschiedenen Browsern erwarten, aufgrund unterschiedlicher Speicherzugriffspolitiken.

### Chrome

- Cookies müssen [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) explizit auf sich gesetzt haben, weil der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standardwert in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut auf sich gesetzt haben.
- Die Speicherzugriffsberechtigungen werden nach 30 Tagen ohne Benutzerinteraktion nach dem Durchgang der Browsing-Nutzungszeit abgebaut. Interaktion mit dem eingebetteten Inhalt verlängert dieses Limit um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web_API/Document/requestStorageAccessFor) aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat, und der Benutzer besucht erneut eine Seite von `foo.example`, die eine Seite von `tracker.example` einbettet, innerhalb von weniger als 30 Tagen, wird der eingebettete Ursprung sofort bei der Ladung Drittanbieter-Cookie-Zugriff haben.
- Die Speicherzugriffsberechtigungen werden nach 30 Kalendertagen abgebaut.

Die Dokumentation zu Firefox' neuer Speicherzugriffspolitik für das Blockieren von Tracking-Cookies umfasst [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffsberechtigungen werden nach 30 Tagen der Browser-Nutzung ohne Benutzerinteraktion abgebaut. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web_API/Storage_Access_API/Using) für eine Implementierungsanleitung mit Codebeispielen.
- Siehe [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web_API/Document/hasStorageAccess)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web_API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web_API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web_API/Document/requestStorageAccess)
  - : Ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen sind (z. B. eingebettet in einem {{htmlelement("iframe")}}), den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zu beantragen; gibt eine {{jsxref("Promise")}} zurück, die aufgelöst wird, wenn der Zugriff gewährt wurde und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web_API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Zusatz zur Storage Access API, der es Top-Level-Sites ermöglicht, Drittanbieter-Cookie-Zugriff im Auftrag von eingebetteten Inhalten, die von einer anderen Seite stammen, innerhalb desselben [related website set](/de/docs/Web_API/Storage_Access_API/Related_website_sets) zu beantragen. Gibt eine {{jsxref("Promise")}} zurück, die aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktion wird in das durch diese Methoden zurückgegebene Versprechen propagiert, was es den Anrufern ermöglicht, Aktionen auszuführen, die eine Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Zum Beispiel könnte ein Anrufer ein Popup-Fenster vom aufgelösten Versprechen aus öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web_API/Permissions/query), der `"storage-access"` Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, das heißt, zu einer anderen gleichseitigen Einbettung. Falls ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen und das Versprechen wird automatisch aufgelöst.
- `Permissions.query()`, der `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um abzufragen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Falls ja, brauchen Sie `requestStorageAccessFor()` nicht erneut aufzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web_API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
